export const ExpenseTable = () => {
    const expenseData = [
        { serialNumber: 1, employeeName: 'Employee 1', expenseName: 'Travel', amount: 100, status: 'Approved' },
        { serialNumber: 2, employeeName: 'Employee 2', expenseName: 'Food', amount: 50, status: 'Pending' },
        { serialNumber: 3, employeeName: 'Employee 3', expenseName: 'Office Supplies', amount: 30, status: 'Approved' },
        { serialNumber: 4, employeeName: 'Employee 2', expenseName: 'Entertainment', amount: 70, status: 'Pending' },
        { serialNumber: 5, employeeName: 'Employee 5', expenseName: 'Transportation', amount: 60, status: 'Rejected' },
        { serialNumber: 6, employeeName: 'Employee 2', expenseName: 'Equipment', amount: 120, status: 'Approved' },
        { serialNumber: 7, employeeName: 'Employee 7', expenseName: 'Meals', amount: 45, status: 'Pending' },
        { serialNumber: 8, employeeName: 'Employee 8', expenseName: 'Utilities', amount: 80, status: 'Rejected' },
        { serialNumber: 9, employeeName: 'Employee 9', expenseName: 'Training', amount: 90, status: 'Approved' },
        { serialNumber: 10, employeeName: 'Employee 1', expenseName: 'Miscellaneous', amount: 35, status: 'Pending' },
        { serialNumber: 11, employeeName: 'Employee 11', expenseName: 'Travel', amount: 200, status: 'Approved' },
        { serialNumber: 12, employeeName: 'Employee 5', expenseName: 'Food', amount: 50, status: 'Rejected' },
        { serialNumber: 13, employeeName: 'Employee 6', expenseName: 'Miscellaneous', amount: 85, status: 'Pending' },
        { serialNumber: 14, employeeName: 'Employee 10', expenseName: 'Travel', amount: 150, status: 'Approved' },
        { serialNumber: 15, employeeName: 'Employee 4', expenseName: 'Food', amount: 50, status: 'Rejected' },
      ];
  
      return (
        <div className="table-container">
          <table className="border border-dark">
            <thead className="thead-dark">
              <tr>
                <th className="border border-2 border-dark p-2" style={{ width:100 }}>Sr. No.</th>
                <th className="border border-2 border-dark p-2" style={{ width:200 }}>Employee Name</th>
                <th className="border border-2 border-dark p-2" style={{ width:200 }}>Expense Name</th>
                <th className="border border-2 border-dark p-2" style={{ width:200 }}>Amount</th>
                <th className="border border-2 border-dark p-2" style={{ width:200 }}>Status</th>
              </tr>
            </thead>
          </table>
          <div className="table-body" style={{ overflowY: 'scroll', maxHeight: '500px' }}>
            <table className="border border-dark">
              <tbody>
                {expenseData.map((expense, index) => (
                  <tr key={index}>
                    <td className="border border-2 border-dark p-2" style={{ width:100 }}>{expense.serialNumber}</td>
                    <td className="border border-2 border-dark p-2" style={{ width:200 }}>{expense.employeeName}</td>
                    <td className="border border-2 border-dark p-2" style={{ width:200 }}>{expense.expenseName}</td>
                    <td className="border border-2 border-dark p-2" style={{ width:200 }}>{expense.amount}</td>
                    <td className="border border-2 border-dark p-2" style={{ width:200 }}>{expense.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  };
  