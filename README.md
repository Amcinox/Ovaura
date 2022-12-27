# Ovaura

Ovaura is a platform that uses the power of artificial intelligence and video editing tools to generate unique videos and easily upload them to YouTube. With Ovaura, you can use OpenAI to generate custom images and titles for your videos, as well as write engaging descriptions to draw in viewers. The platform also utilizes ffmpeg to create the final video for uploading, ensuring a high-quality finished product. Whether you're a content creator looking to streamline your video production process or just want to try your hand at creating AI-generated videos, Ovaura has you covered. Simply input your desired parameters and let the platform do the rest, creating one-of-a-kind videos with ease.

## Prerequisites

Before proceeding you'll need to have the latest stable ([nodejs](nodejs)).
`Recommended environment:`

node js v16.x (suggestion v16.18.0)
[![Node](https://img.shields.io/badge/Node-v16.x-40bc9c?logo=Node.js&logoColor=white)](https://nodejs.org)

[![Npm](https://img.shields.io/badge/Npm-v8+-40bc9c?logo=yarn&logoColor=white)](https://yarnpkg.com/)

openAI Account
[![openai](https://img.shields.io/badge/openai-40bc9c?logo=openai&logoColor=white)](https://beta.openai.com/account/)

Google Cloud Platform
[![openai](https://img.shields.io/badge/cloud-platform-40bc9c?logo=google&logoColor=blue)](https://console.cloud.google.com/)

## Installation

Install the necessary dependencies

```bash
npm install
```

## Envirment Variables

PORT=3000
dbName=MongoDB Name
dbUsername=aMongoDB username
dbPassword=MongoDB Password

// you can get OpenAI Api Keyfrom https://beta.openai.com/account/api-keys
OPENAI_API_KEY=

// you can get api key and clinet id / secret from https://console.cloud.google.com/
GOOGLE_API_KEY=
CLIENT_ID=
CLIENT_SECRET=

// you can get Access token and refresh from https://developers.google.com/oauthplayground/
ACCESS_TOKEN=
REFRESH_TOKEN=
