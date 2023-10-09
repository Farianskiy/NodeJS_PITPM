console.log('greeting module');

let currentDate = new Date();
module.exports.name = 'Alice';


module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if (hour > 16) return 'Good evening, ' + name;
    else if (hour > 10) return 'Good afternoon, ' + name;
    else return 'Good morning, ' + name;
};
