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
2. Copy and paste the script from this project https://raw.githubusercontent.com/gasolin/habitica-task-to-ifttt/main/habitica-task.gs
3. Change `IFTTT_WEBHOOK_KEY` (can be found from `webhook > settings` https://ifttt.com/maker_webhooks/settings and show as https://maker.ifttt.com/use/[YOUR_KEY])
4. If you use a different name, change `IFTTT_EVENT_NAME`.
5. Follow [Deploying a script as a web app](https://developers.google.com/apps-script/guides/web#deploying_a_script_as_a_web_app), Open Menu and select `Publish > Deploy as Web App` to create as a web app. Copy the URL as the webhook.


# Setup Habitica

1. Visit Habitica Settings page, switch to API tab https://habitica.com/user/settings/api 
2. Paste App Script URL as the webhook, Click the `New` button

Check a task as complete (Score), and find if the integration works.
Have Fun!
