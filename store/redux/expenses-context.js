import { createContext, useReducer } from "react";

export const EXPENSESS_DATA = [
  {
    id: 1,
    description: "A book",
    amount: 22.23,
    date: new Date("2025-09-12"),
  },
  {
    id: 2,
    description: "Grocery shopping",
    amount: 85.47,
    date: new Date("2025-09-05"),
  },
  {
    id: 3,
    description: "Movie tickets",
    amount: 32.5,
    date: new Date("2025-09-21"),
  },
  {
    id: 4,
    description: "Restaurant dinner",
    amount: 64.8,
    date: new Date("2025-09-10"),
  },
  {
    id: 5,
    description: "Electric bill",
    amount: 120.0,
    date: new Date("2025-03-15"),
  },
  {
    id: 6,
    description: "New headphones",
    amount: 199.99,
    date: new Date("2025-01-10"),
  },
  {
    id: 7,
    description: "A book",
    amount: 22.23,
    date: new Date("2025-02-13"),
  },
  {
    id: 8,
    description: "Grocery shopping",
    amount: 85.47,
    date: new Date("2025-03-05"),
  },
  {
    id: 9,
    description: "Movie tickets",
    amount: 32.5,
    date: new Date("2025-01-21"),
  },
  {
    id: 10,
    description: "Restaurant dinner",
    amount: 64.8,
    date: new Date("2025-02-28"),
  },
  {
    id: 11,
    description: "Electric bill",
    amount: 120.0,
    date: new Date("2025-03-15"),
  },
  {
    id: 12,
    description: "New headphones",
    amount: 199.99,
    date: new Date("2025-01-10"),
  },
];

export const ExpenenseContext = createContext({
  expenses: [],
  addExpense: ({ description, date, amount }) => {},
  updateExpense: (id, { description, date, amount }) => {},
  deleteExpense: (id) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ id, ...action.payload }, ...state];

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);

    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, EXPENSESS_DATA);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: { id } });
  }

  const value = {
    expenses: state,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpenenseContext.Provider value={value}>
      {children}
    </ExpenenseContext.Provider>
  );
}
