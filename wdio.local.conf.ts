import { config as sharedConfig } from './wdio.shared.conf.ts'

// @ts-expect-error
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
      // services: ['selenium-standalone'],
      capabilities: [
        {
          browserName: 'chrome',
          maxInstances: 1,
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['--headless', '--no-sandbox', '--disable-extensions', '--disable-gpu', '--disable-dev-shm-usage'],
            },
          // 'wdio:devtoolsOptions': {
          //     headless: true
          // }
        },
        // {
        //   browserName: 'firefox',
        //     "moz:firefoxOptions": {
        //       // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
        //       //args: ['-headless']
        //   }
        // },
      ]
    }
}
