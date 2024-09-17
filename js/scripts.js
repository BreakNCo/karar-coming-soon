$(function () {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear() + 1;

    var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

    $('#timer').countdown({
        date: nextyear, //TODO Date format: 07/27/2017 17:00:00
        offset: +2,
        day: 'Day',
        days: 'Days'
    }, function () {
    });
});