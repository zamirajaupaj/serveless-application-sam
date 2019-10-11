var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("Europe/Amsterdam");
    callback(null, {
        statusCode: '200',
        body: 'The time in Amsterdam is: ' + currentTime.toString(),
    });
};
