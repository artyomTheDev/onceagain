let journalExpenses = [];

function addExpense(name, sum) {
  const expense = {
    name: name,
    sum: sum
  }
  journalExpenses.push(expense)
  return `Добавлен расход: ${name} - ${sum} рублей `
}

function totalCalculate() {
  let totalAmount = 0;

  for (let i = 0; i < journalExpenses.length; i++) {
    const expense = journalExpenses[i];
    totalAmount = totalAmount + expense.sum
  }
  return totalAmount;
}

function findMaxExpense() {

  if ( journalExpenses.length === 0){
    return null;
  }

  let maxExpense = journalExpenses[0];

  for (let i = 1; i < journalExpenses.length; i++) {
    const currentExpense = journalExpenses[i]

    if (currentExpense.sum > maxExpense.sum) {
      maxExpense = currentExpense
    }

  }
  return maxExpense;
}

addExpense('Кофе', 300);
addExpense('Обед', 500);
addExpense('Бензин', 1500);
addExpense('Кино', 800);

console.log('Все расходы:', journalExpenses);
console.log('Общая сумма:', totalCalculate());
console.log('Самый большой:', findMaxExpense());

