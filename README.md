# habitica-task-to-ifttt
Google App Script and guide to bridge [Habitica](https://habitica.com/) tasks complete event as the [IFTTT](https://ifttt.com/) Trigger.

Need to do

1. Create a IFTTT applet with `Webhook trigger`.
2. Deploy provided App Script as web application (inside google's site)
3. Point Habitica webhook to App Script's URL.

# Setup IFTTT

1. Visit https://ifttt.com/create/ to create a new IFTTT Applet
2. Select `Webhooks` as `If This` trigger, enter `habitica_task` as the Event name (will use later)

![Imgur](https://i.imgur.com/QeUaNFg.png)

3. wire to any `Then That` event (such as log in Calendar)

Support variables (we can't customize the variable name, its a constrains of IFTTT webhook channel):

- `{{value1}}` as task name
- `{{value2}}` as task complete time
- `{{value3}}` as task note

# Setup App Script

1. Visit https://script.google.com and create a new project named `Habitica`.
2. copy the script from https://raw.githubusercontent.com/gasolin/habitica-task-to-ifttt/main/habitica-task.gs
3. change `IFTTT_WEBHOOK_KEY` (can find from `webhook > settings` https://ifttt.com/maker_webhooks/settings and show as https://maker.ifttt.com/use/[YOUR_KEY])
3.1 If you use a different name, change `IFTTT_EVENT_NAME`.
4. In Menu, select `Publish > Deploy as Web App` to create as a web app. Copy the URL as the webhook.


# Setup Habitica

1. Visit https://habitica.com/user/settings/api 
2. Add App Script URL as the webhook

For Habitica, Enjoy the integration!
