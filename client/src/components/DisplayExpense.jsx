import { ExpenseCard } from "./ExpenseCard";
import { useSelector } from "react-redux";

export const DisplayExpense = () => {

  const { user } = useSelector((state) => state.auth);
  const { expenses } = useSelector((state) => state.expense);

  return( <>
  {expenses?.map((expense, index) => (
    <ExpenseCard
      key={expense._id}
      expenseId={expense._id}
      ind={index}
      name={expense.name}
      amount={expense.amount}
      status={expense.status}
      category={expense.category}
      date={new Date(expense.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })}
      userType={user?.role}
      addedBy={expense.employee_id?.firstName + " " + expense.employee_id?.lastName}
    />
  ))}
  </>
  )
};