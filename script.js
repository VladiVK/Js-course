// Budgete application. preliminary

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == null || money == '') {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};
function detectDayBudget() {
    for (let i = 0; i < 1; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = +prompt("Во сколько обойдется");
        // если в prompt нажать отмена, то получим null
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
            a != '' && b != '' && a.length <= 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    return alert("Your one day budgete is: " + (appData.moneyPerDay));
}

detectDayBudget();

function detectLevel(sum) {
    if (sum < 100) {
        alert('minimum level of rich');
    } else if (sum < 500) {
        alert('middle level of rich');
    } else if (sum > 500) {
        alert('high level of rich');
    } else {
        alert('uknown info');
    }
}
// detectLevel(appData.moneyPerDay);

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let question = prompt( 'Статья необязательных расходов?', '');
        if (question != 0 && question != '') {
            appData.optionalExpenses[i+1] = question;
        } else {
            i--;
        }
    }
}
// chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Сумма ваших сбережений?', ''),
            percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save/100/12*percent;
        alert( 'Ежемесячный доход с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();

/* switch (true) {
    case appData.moneyPerDay < 100:
        console.log('minimum level of rich');
        break;
    case appData.moneyPerDay < 500:
//  case appData.moneyPerDay == 30:
//         console.log('test is correct');
//         break;
    case appData.moneyPerDay > 500:
        console.log('high level of rich');
        break;
    default:
        console.log('uknown info');
        break;
} */