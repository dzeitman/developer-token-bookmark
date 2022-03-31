# GSG Dolby.io Platform Token Server

  
  

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=enter-the-url-here)

  

This sample application creates a simple token server to secure your application calls to Dolby.io API. Click the deploy to Netlify button and supply your mobile application's unique identifier and your Dolby.io Consumer key and secret.

  

iOS:

We use'll use the bundle identifier

  

Android:

We use'll use the package identifier

  

web:

We use'll use the web applications url

  

## Install

  

Run the following command to install the dependencies:

  

  

```bash

  

npm install

  

```

  

  

Create a file called `.env` in you application folder and set your application key and secret that you got from your dolby.io dashboard.

  

APP_IDENTIFIER=<YOUR_IOS_BUNDLE_ID_HERE>

CONSUMER_KEY=<YOUR_CONSUMER_KEY_HERE>

CONSUMER_SECRET=<YOUR_CONSUMER_SECRET_HERE>

  

  

## Run

  

  

You must first run the Netlify live server with the command:

  

  

```bash

  

npm run live

  

```