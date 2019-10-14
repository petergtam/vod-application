# VOD Application

VOD (Video On-Demand) app for delivery content to subscribers.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following applications are necessary to run the application:

- mongodb
- npm

### Running

First we will download the repo from https://github.com/petergtam/vod-application

```sh
git clone https://github.com/petergtam/vod-application.git
```

Then we change to the app directory.

```sh
cd vod-application
```

The application is divided in two subprojects.

- vod-front-end: For the front end project.
- vod-back-end: For the back end projec.

In orther to run the app we have to run the `vod-back-end` project first and then the `vod-front-end` project.

### vod-back-end

**Note: You should have `mongodb` running on port `27017`. No password required unless you have some.**

**Note: You should have `npm` installed.**

Go to the `vod-back-end` folder.

```sh
cd vod-back-end
```

Install the dependencies.

```sh
npm install
```

Run the server

```sh
npm start
```

Now you should run the `vod-fron-end` project.

### vod-fron-end

Go to the `vod-front-end` folder.

```sh
cd vod-front-end
```

Install the dependencies.

```sh
npm install
```

Run the server

```sh
npm start
```

The service will be available at http://localhost:8080
