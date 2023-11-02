import { ExpenseCard } from "./ExpenseCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExpenseEmployee, getExpenseManager, reset } from "../features/expense/expenseSlice";

export const DisplayExpense = () => {

  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const role = user.role;
  const { expenses, isSuccess, isLoading, isError, appErr, serverErr } = useSelector((state) => state.expense);

  useEffect(() => {

    if (role == "employee")
      dispatch(getExpenseEmployee(projectId));

    else if (role == "manager")
      dispatch(getExpenseManager(projectId));
    
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
      expenseId={expense._id}
      ind={index}
      name={expense.name}
      amount={expense.amount}
      status={expense.status}
      category={expense.category}
      date={new Date(expense.date).toLocaleDateString()}
      userType={user.role}
      addedBy={expense.employee_id.firstName + " " + expense.employee_id.lastName}
    />
  ))}
  </>
  )
};