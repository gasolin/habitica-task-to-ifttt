// Script from https://github.com/gasolin/habitica-task-to-ifttt
// Habitica API reference https://habitica.fandom.com/wiki/Webhook_processing_with_Google_Apps_Script

// [Users] fill following 2 params

const IFTTT_EVENT_NAME = 'habitica_task'; // the event name you add in `IFTTT webhook trigger` 
const IFTTT_WEBHOOK_KEY = 'YOUR_KEY'; // get YOUR_KEY from `IFTTT webhook > settings`

// [Users] Do not edit code below this line

// [Developers] If you're authoring your own script, place your user ID and
//   script name here. If just using this as a sample, you can leave as is.
const AUTHOR_ID = "0155cb4a-112d-45b5-b54a-80d0d44251d2";
const SCRIPT_NAME = "IFTTT Task Complete Trigger";
const IFTTT_URL = 'https://maker.ifttt.com/trigger/' + IFTTT_EVENT_NAME + '/with/key/' + IFTTT_WEBHOOK_KEY;

// For debugging, to make sure the App is deployed
function doGet() {
  return ContentService.createTextOutput('Habitica to IFTTT trigger');
}

// [Developers] This is the function that will be executed whenever Habitica
//   encounters the event designated by the webhook
function doPost(e) {
  var dataContents = JSON.parse(e.postData.contents);
  var type = dataContents.type;
  var webhookType = dataContents.webhookType
  Logger.log('hookType: ', webhookType, ' type: ', type);
  if (webhookType = 'taskActivity' && type == "scored") {
    sendToIFTTTWebhook(dataContents);
  }

  return HtmlService.createHtmlOutput();
}

function sendToIFTTTWebhook(dataContents) {
  var task = dataContents.task;
  var payload = { 
    'value1': task.text, // task title
    'value2': task.dateCompleted, // task complete time
    'value3': task.note
  }; 
  return UrlFetchApp.fetch(IFTTT_URL, { 
    'method': 'POST', 
    'payload': payload,
  });
}
