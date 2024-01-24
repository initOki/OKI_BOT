export class BuildConverter {
  view: any;
  convert: any;

  constructor(build: any) {
    this.view = build;
    this.convert = null;

    this.setConvert();
  }

  setConvert() {
    this.convert = {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: `🔹 Build Success  |  ${this.view.app_name} 🔹`,
          },
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `Branch  |  ${this.view.branch}`,
            },
          ],
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `Build Start Time  |  ${this.view.start_time}`,
            },
          ],
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `Build Finish Time  |  ${this.view.finish_time}`,
            },
          ],
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `Build OS  |  ${this.view.os}`,
            },
          ],
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '🔹 Build Information 🔹',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Build Id  |  ${this.view.build_id}`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Build Link  |  ${this.view.build_link}`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Build Reason  |  ${this.view.build_reason}`,
          },
        },
        {
          type: 'context',
          elements: [
            {
              type: 'image',
              image_url: this.view.icon_link,
              alt_text: 'app icon',
            },
          ],
        },
      ],
    };
  }
}

// {
//     "app_name": "myFirstApp",
//     "branch": "main",
//     "build_status": "Succeeded",
//     "build_id": "33",
//     "build_link": "https://appcenter.ms/users/{user-id}/apps/{app-name}/build/branches/main/builds/33",
//     "build_reason": "manual",
//     "finish_time": "2018-06-14T23:59:05.2542221Z",
//     "icon_link": "https://appcenter-filemanagement-distrib4ede6f06e.azureedge.net/f7794e4c-42f1-4e7c-8013-07ed2e1b733d/ic_launcher.png?sv=2020-02-18&sr=c&sig=gs4JfcWjpKeYH%2F%2Fg0jEtSKKbeRkug9q%2FldslmzzeOg0%3D&se=2020-02-26T08%3A57%3A58Z&sp=r",
//     "notification_settings_link": "https://appcenter.ms/users/{user-id}/apps/{app-name}/settings/notifications",
//     "os": "iOS",
//     "start_time": "2018-06-14T23:57:03.4379381Z",
//     "source_version": "55820a357ba26831f2eeb3be9973a4ef20618b73",
//     "sent_at": "2018-06-14T23:59:08.4897604Z"
// }
