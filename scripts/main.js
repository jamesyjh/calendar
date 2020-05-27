/*
 AUTHOR: James Hong (yjh0205@gmail.com)
 DATE CREATED: 2020-05-26
 
 Assignment01_JamesHong

 DESCRIPTION:
    Main script handling all logic for calendar data generation. Uses Calendar.js Calendar class.
 
 */

document.addEventListener("DOMContentLoaded", function () {

    let calendar = new Calendar();

    // Dynamically change month-year at the top of the calendar
    let monthYear = document.getElementById("monthYear");
    monthYear.innerHTML = calendar.getMonthString() + ' ' + calendar.year;

    // Dynamically generate a 6x7 grid for the month dates
    let dateOfMonth = document.getElementById("dateOfMonth");


    // Dynamically fill the dates from the previous month with respect to first day of the current month 
    let k = calendar.getLastDayOfPreviousMonth() - calendar.getFirstDayOfMonth() + 2;

    for (let i = 1; i < calendar.getFirstDayOfMonth(); i++) {
        if (i == 1) {
            dateOfMonth.innerHTML += '<div class="gridItem" id="previousMonth">' + calendar.getShortMonthString(-1) + ' ' + k + '</div>';
        } else {
            dateOfMonth.innerHTML += '<div class="gridItem" id="previousMonth">' + k + '</div>';
        }
        k++;
    }

    // Dynamically generate the days of the current month with respect to the total number of days in the month
    for (let i = 1; i <= calendar.getDaysOfMonth(); i++) {

        if (i == calendar.time.getDate()) {
            dateOfMonth.innerHTML += '<div class="gridItem" id="today">' + i + '</div>';
        } else {
            dateOfMonth.innerHTML += '<div class="gridItem" id="currentMonth">' + i + '</div>';
        }
    }

    // Dynamically fill the dates from the next month with respect to last day of the current month
    let firstDayNextMonth = (new Date(calendar.year, calendar.month, 1).getDay());

    for (let i = 1; i <= 7 - firstDayNextMonth; i++) {

        if (i == 1) {
            dateOfMonth.innerHTML += '<div class="gridItem" id="nextMonth">' + calendar.getShortMonthString(1) + ' ' + i + '</div>';
        } else {
            dateOfMonth.innerHTML += '<div class="gridItem" id="nextMonth">' + i + '</div>';
        }

    }

});
