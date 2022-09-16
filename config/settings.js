const KEYFILE = 'telegram-bot-calendar-362513-11b2847fca49.json';
const SERVICE_ACCT_ID = 'calendar-reminder@telegram-bot-calendar-362513.iam.gserviceaccount.comm';
const CALENDAR_ID = {
  'primary': 'alexmargxgmail.com',
};
const TIMEZONE = 'UTC+08:00';
 
module.exports.keys = KEYFILE;           //or if using json keys - module.exports.key = key; 
module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.calendarId = CALENDAR_ID;
module.exports.timezone = TIMEZONE;