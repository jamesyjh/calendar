class Calendar {

    constructor() {
        this.time = new Date(Date.now());
        this.year = this.time.getFullYear();
        this.month = this.time.getMonth() + 1;
        this.date = this.time.getDate();
        this.day = this.time.getDay() + 1;
    }



    getMonthString() {
        switch (this.month) {
            case 1: return "January";
            case 2: return "February";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
    }

    getShortMonthString(x) {
        switch (this.month + x) {
            case 1: return "Jan";
            case 2: return "Feb";
            case 3: return "Mar";
            case 4: return "Apr";
            case 5: return "May";
            case 6: return "Jun";
            case 7: return "Jul";
            case 8: return "Aug";
            case 9: return "Sep";
            case 10: return "Oct";
            case 11: return "Nov";
            case 12: return "Dec";
        }
    }


    getDayString() {
        switch (this.day) {
            case 1: return "Sunday";
            case 2: return "Monday";
            case 3: return "Tuesday";
            case 4: return "Wednesday";
            case 5: return "Thursday";
            case 6: return "Friday";
            case 7: return "Saturday";
        }
    }

    getDaysOfMonth() {
        return new Date(this.year, this.month, 0).getDate();
    }

    getFirstDayOfMonth() {
        return new Date(this.year, this.month - 1, 1).getDay() + 1;
    }

    getLastDayOfMonth() {
        return new Date(this.year, this.month, 0).getDay() + 1;
    }
    getLastDayOfPreviousMonth() {
        return new Date(this.year, this.month - 1, 0).getDate();
    }
}