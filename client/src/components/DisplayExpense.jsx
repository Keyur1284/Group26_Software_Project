import { ExpenseCard } from "./ExpenseCard";

const details = [
  {
    id: 0,
    ind: 0,
    description: "Trip to Goa",
    amount: 21000,
    status: "Pending",
    category: "Travel",
    date: "21-9-23",
  },
  // {
  //   id: 1,
  //   ind: 1,
  //   description: "Trip to Mumbai",
  //   amount: 41000,
  //   status: "Approved",
  //   category: "Travel",
  //   date: "21-9-23"
  // },
  {
    id: 2,
    ind: 2,
    description: "Dinner in Mumbai",
    amount: 5100,
    status: "Approved",
    category: "Food",
    date: "21-9-23",
  },
  {
    id: 3,
    ind: 3,
    description: "Accommodation",
    amount: 10000,
    status: "Pending",
    category: "Accommodation",
    date: "21-9-23",
  },
  {
    id: 4,
    ind: 4,
    description: "Extra Expense",
    amount: 20000,
    status: "Pending",
    category: "Other",
    date: "21-9-23",
  },
];

export const DisplayExpense = () => {
  return details.map((detail) => (
    <ExpenseCard
      key={detail.id}
      ind={detail.ind}
      description={detail.description}
      amount={detail.amount}
      status={detail.status}
      category={detail.category}
      date={detail.date}
    />
  ));
};