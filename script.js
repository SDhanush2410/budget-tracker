let expenses = [];
let totalExpenses = 0;

function addExpense() {
  const description = document
    .getElementById("expenseDescription")
    .value.trim();
  const amount = parseFloat(document.getElementById("expenseAmount").value);

  if (description !== "" && !isNaN(amount) && amount > 0) {
    expenses.push({ description, amount });
    displayExpenses();
    updateTotalExpenses();
    clearInputs();
  } else {
    alert("Please enter valid expense details.");
  }
}

function displayExpenses() {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";

  expenses.forEach((expense, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${expense.description}: ₹${expense.amount.toFixed(
      2
    )} <button onclick="removeExpense(${index})">Remove</button>`;
    expenseList.appendChild(li);
  });
}

function removeExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
  updateTotalExpenses();
}

function updateTotalExpenses() {
  totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  document.getElementById("totalExpenses").innerText =
    "₹" + totalExpenses.toFixed(2);
}

function clearInputs() {
  document.getElementById("expenseDescription").value = "";
  document.getElementById("expenseAmount").value = "";
}
