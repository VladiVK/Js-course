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
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = +(appData.budget / 30).toFixed();
        return alert("Your one day budgete is: " + (appData.moneyPerDay));
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            alert('minimum level of rich');
        } else if (appData.moneyPerDay < 500) {
            alert('middle level of rich');
        } else if (appData.moneyPerDay > 500) {
            alert('high level of rich');
        } else {
            alert('uknown info');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Сумма ваших сбережений?', ''),
                percent = +prompt('Под какой процент?', '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Ежемесячный доход с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let question = prompt('Статья необязательных расходов?', '');
            if (question != 0 && question != '') {
                appData.optionalExpenses[i] = question;
            } else {
                i--;
            }
        }
    },
    // возможный дополнительный доход
    chooseIncome: function() {
        let items;
        do {
            items = prompt('Что принесет дополнительный доход? (Перечислить через запятую)', '');  
        } 
        while(items == null || items == '' || !isNaN(items)); 
       
        appData.income = items.split(', ');

        let temp = prompt('Что-то еще?', '');
        if(temp) {
            appData.income.push(temp);
        }
        
        appData.income.sort();
        console.log('Способы дополнительного дохода: ');
        appData.income.forEach( (elem, index) => {
            console.log(index + 1 + ' : ' + elem); 
        })
    }

};










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