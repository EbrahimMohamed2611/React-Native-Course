import axios from "axios";

const EXPENSES_BASE_URL =
  "https://react-native-course-98840-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post(EXPENSES_BASE_URL + "/expenses.json", expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(EXPENSES_BASE_URL + "/expenses.json");

  const expenses = [];
  for (const key in response.data) {
    const expenseResponse = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseResponse);
  }

  return expenses;
}
