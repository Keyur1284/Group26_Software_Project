import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const ExpenseTable = () => {

  const navigate = useNavigate();
  const { projectId } = useParams();
  const { expenses } = useSelector(state => state.statistic)

    const expenseData = expenses?.map((expense, index) => {
        return {
            _id: expense._id,
            serialNumber: index + 1,
            employeeName: expense.employee_id?.firstName + " " + expense.employee_id?.lastName,
            expenseName: expense.name,
            amount: expense.amount,
            status: expense.status,
            date: new Date(expense.date).toLocaleDateString("en-GB")
        }
    })
  
    return (
      <div className="table-container text-center" style={{ maxHeight: "60vh", overflowY: "auto" }}>
  <table className="table table-responsive table-hover" id="expense-history-table">
    <thead>
      <tr>
        <th>Sr No.</th>
        <th>Employee Name</th>
        <th>Date</th>
        <th>Expense Name</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {expenseData?.map((expense, index) => (
        <tr key={index} onClick={() => navigate(`/projects/${projectId}/expenses/${expense._id}`)} className={getBackgroundColorClass(expense.status)} style={{cursor: "pointer"}}>
          <td>{expense.serialNumber}</td>
          <td>{expense.employeeName}</td>
          <td>{expense.date}</td>
          <td>{expense.expenseName}</td>
          <td>&#8377; {expense.amount}</td>
          <td>{expense.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    );
  };
  
  function getBackgroundColorClass(status) {
    if (status === "Rejected") {
      return "table-danger";
    } else if (status === "Pending") {
      return "table-warning";
    } else if (status === "Approved") {
      return "table-success";
    }
  }
  