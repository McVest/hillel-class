const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const REGEX = /(\d{4})-(\d{2})-(\d{2})/g;


function isValidMonth(month) {
    return month >= 1 && month <= 12;
}

function isValidDay(year, month, day) {
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    return day >= 1 && day <= lastDayOfMonth;
}

function findDates(str) {
    const matches = [];

    let match;

    while ((match = REGEX.exec(str)) !== null) {
        const year = parseInt(match[1], 10);
        const month = parseInt(match[2], 10);
        const day = parseInt(match[3], 10);

        if (isValidMonth(month) && isValidDay(year, month, day)) {
            matches.push({
                year,
                month,
                day,
                monthName: MONTHS[month - 1]
            });
        }
    }

    return matches;
}

// Приклад використання
const str = "The dates between 1976-03-12, and 1983-10-14, the code was 2004-67-12 and possible invalid date 8765-11-34";
console.log(findDates(str));
