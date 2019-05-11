// Budgete application. preliminary
let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],         
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0], 
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0], 
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0], 
    optionalExpensesBtn = document.getElementsByTagName('button')[1], 
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'), 
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;
startBtn.addEventListener('click', function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == null || money == '') {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    // yearValue.value = new Date(time).getFullYear(); // этот вариант тоже прекрасно работает
    yearValue.value = new Date( Date.parse(time) ).getFullYear();
    monthValue.value = new Date(time).getMonth() + 1;
    dayValue.value = new Date(time).getDate();
    
}
);
expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        // если в prompt нажать отмена, то получим null
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
            a != '' && b != '' && a.length <= 50) {
            console.log('done');
            appData.expenses[a] = +b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let question = optionalExpensesItem[i].value;

        appData.optionalExpenses[i] = question;

        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';

    }
    
});

countBudgetBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = +(appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay <= 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay < 500) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 500) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            alert('ошибка');
        }
    } else {
        dayBudgetValue.textContent = 'произошла ошибка';
    }

});
incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
      
        if (items != null && items != '' && isNaN(items)) {
            appData.income = items.split(', ');
        }
       incomeValue.textContent = appData.income; 
});
checkSavings.addEventListener('click', function() {
    if (appData.savings === false) {
        appData.savings  = true;
    } else {
        appData.savings  = false;
    }
});
sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    

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