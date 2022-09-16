const TelegramBot = require('node-telegram-bot-api');
const token = '5430411759:AAE58rOoot56gHe9gobwMIqJEgDamCfnMNg';
const bot = new TelegramBot(token, { polling: true });
const CONFIG = require('./config/Settings');
const CalendarAPI = require('node-google-calendar');
let cal = new CalendarAPI(CONFIG);  
 bot.setMyCommands([
    {command: '/setreminder' , description:'set new reminder'},
    {command: '/deletereminder', description:'If you want delete reminder you can use this'},
    {command: '/showreminders', description:'info about your reminders'}
]);

bot.on ('message', async msg =>{
    const text = msg.text;
    const chatId = msg.chat.id;

    let params = {};
    cal.Settings.list(params)
      .then(resp => {
        console.log('List settings: ');
        console.log(resp);
      })
      .catch(err => {
        console.log('Error: listSettings -' + err.message);
      });
})