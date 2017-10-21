const date = new Date();

const dateObj = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
};

module.exports = dateObj; 