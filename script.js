// Budgete application. preliminary

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
appData.budgete = money;
appData.timeDate = time;
let expenseOne = prompt(
    "Введите обязательную статью расходов в этом месяце", ""
);
appData.expenses[expenseOne] = +prompt("Во сколько обойдется");
console.log(
    "Your one day budgete is: " +
    (appData.budgete - appData.expenses[expenseOne]) / 30
);