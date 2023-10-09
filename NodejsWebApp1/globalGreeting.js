let currentDate = new Date();

global.date = currentDate;
module.exports.globalName = 'Alice';

module.exports.getMessage = function () {
    let hour = currentDate.getHours();
    if (hour > 16) return 'Good evening, ' + global.name;
    else if (hour > 10) return 'Good afternoon, ' + globalName;
    else return 'Good morning, ' + globalName;
};
