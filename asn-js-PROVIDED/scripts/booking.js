/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let numDaysSelected = 0;

const mondayButton = document.getElementById('monday');
const tuesdayButton = document.getElementById('tuesday');
const wednesdayButton = document.getElementById('wednesday');
const thursdayButton = document.getElementById('thursday');
const fridayButton = document.getElementById('friday');

const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function setButtons (target) {
    target.classList.add('blue-hover-selected')
}

function onDayOfWeekButtonClicked(event) {
    event.preventDefault();

    const target = event.target;

    console.log(target);

    setButtons(target);

    numDaysSelected = numDaysSelected + 1;

    calculate();
}

mondayButton.onclick = onDayOfWeekButtonClicked;
tuesdayButton.onclick = onDayOfWeekButtonClicked;
wednesdayButton.onclick = onDayOfWeekButtonClicked;
thursdayButton.onclick = onDayOfWeekButtonClicked;
fridayButton.onclick = onDayOfWeekButtonClicked;

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function resetButtons() {
    mondayButton.classList.remove('blue-hover-selected');
    tuesdayButton.classList.remove('blue-hover-selected');
    wednesdayButton.classList.remove('blue-hover-selected');
    thursdayButton.classList.remove('blue-hover-selected');
    fridayButton.classList.remove('blue-hover-selected');

    numDaysSelected = 0;

    calculate();
}

clearButton.onclick = resetButtons;

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function setHalf (target) {
    
    fullButton.classList.remove('clicked');
    
    target.classList.add('clicked');
}

function halfButtonClicked(event) {
    event.preventDefault();

    const target = event.target;

    console.log(target);

    setHalf(target);

    dailyRate = 20;

    calculate();
}

halfButton.onclick = halfButtonClicked;

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function setFull (target) {

    halfButton.classList.remove('clicked');

    target.classList.add('clicked');
}

function fullButtonClicked(event) {
    event.preventDefault();

    const target = event.target;

    console.log(target);

    setFull(target);

    dailyRate = 35;

    calculate();
}

fullButton.onclick = fullButtonClicked;

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    console.log(numDaysSelected, dailyRate)



    const costLabel = document.getElementById('calculated-cost');
    costLabel.innerHTML = numDaysSelected * dailyRate
}
