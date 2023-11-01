import { ExpenseCard } from "./ExpenseCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExpenseEmployee, reset } from "../features/expense/expenseSlice";

export const DisplayExpense = (props) => {

  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { expenses, isSuccess, isLoading, isError, appErr, serverErr } = useSelector((state) => state.expense);

  useEffect(() => {
    dispatch(getExpenseEmployee(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    
    if (isSuccess || isError)
    {
      dispatch(reset());
    }

  }, [isSuccess, isError]);

  return( <>
  {expenses.map((expense, index) => (
    <ExpenseCard
      key={expense._id}
      ind={index}
      name={expense.name}
      amount={expense.amount}
      status={expense.status}
      category={expense.category}
      date={new Date(expense.date).toLocaleDateString()}
      userType={props.userType}
      addedBy={expense.employee_id.firstName + " " + expense.employee_id.lastName}
    />
  ))}
  </>
  )
};