// Budgete application. preliminary

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 1; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется");
    // если в prompt нажать отмана, то получим null
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length <= 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }

}
appData.moneyPerDay = appData.budget / 30;

console.log("Your one day budgete is: " + (appData.moneyPerDay));

if (appData.moneyPerDay < 100) {
    console.log('minimum level of rich');
} else if (appData.moneyPerDay < 500) {
    console.log('middle level of rich');
} else {
    console.log('high level of rich');
}

/* switch (true) {
    case appData.moneyPerDay < 100:
        console.log('minimum level of rich');
        break;
    case appData.moneyPerDay < 500:
        console.log('middle level of rich');
        break;
    case appData.moneyPerDay > 500:
        console.log('high level of rich');
        break;
    default:
        console.log('uknown info');
        break;
} */