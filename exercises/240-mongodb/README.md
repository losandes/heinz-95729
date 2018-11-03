Exercise :: The MongoDB Node.js Driver
======================================

## Getting Started (Provisioning MongoDB)
Follow the steps below to install MongoDB on your local machine. You'll need this to perform some of this week's exercises, as well as to work on the course project.

1. Install [Docker for Mac](https://www.docker.com/docker-mac), or [Docker for Windows](https://www.docker.com/docker-windows)
2. Install [Kitematic](https://kitematic.com)
3. Start both Docker and Kitematic
4. If you don't see the "official mongo" package on the main screen, search for "mongo"

<img width="1082" alt="screenshot 2017-11-01 21 45 55" src="https://user-images.githubusercontent.com/933621/32307681-0d53f4c2-bf58-11e7-924f-d4cd8da6fcb4.png">

5. Click "CREATE" to create an instance
6. Select the "mongo" instance from the left navigation

<img width="1082" alt="screenshot 2017-11-01 21 46 26" src="https://user-images.githubusercontent.com/933621/32307690-1a9163f4-bf58-11e7-95b8-98805f78ad0c.png">

7. Make sure that the "ACCESS URL" is "localhost:27017"
8. If it's not, stop the instance if it's running, click "Settings", and then "Ports", and change the "MAC/WINDOWS IP:PORT" to "localhost:27017"

<img width="1083" alt="screenshot 2017-11-01 21 47 07" src="https://user-images.githubusercontent.com/933621/32307697-27594b38-bf58-11e7-8f82-f3b3f0b2c494.png">

9. Start mongo

## Exercise

These are a series of exercises to get you familiar with the MongoDB Node.js driver. The reference material, to help you solve these problems can be found in the MongoDB documentation:

* http://mongodb.github.io/node-mongodb-native/2.2/reference/ecmascript6/crud/
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html

Each exercise has at least one `TODO` comment in it, that explains what you need to do, to complete the exercise.

#### Testing your Work

1. Make sure mongodb is installed on your computer (see [Provision a MongoDB](../../materials/Provision-a-MongoDB.md) if you don't already have it installed)
1. git clone this repository if you haven't already
1. Make sure you `npm install` in the parent directory before running these exercises
1. If it isn't already running, start MongoDB.
1. In a terminal/console window, execute: `node exercise`
1. Type the number of the exercise you want to test. When you're done, you can type "all" instead of a number, to execute all of the exercises.
