GitHub Student Developer Pack:
Initial Setup and Configuration:
> git init
> git branch -M main
> git add remote origin https://github.com/x23203595/TokenGraphAdsApp.git
Commit and Push
> git status
> git add .
> git commit -m “<meaningful comments>”
> git push -u origin main

MongoDB:
MongoDB 7.0.8 Engine is respectively used for ‘TokenGraphAdsApp’. A data directory / folder is necessary for storing all data in a compressed JSON-like format. Next, I added my ‘System Environment Variable’ based on the path above so I could launch my MongoDB engine from any directory through Command Prompt. Finally, install the tools of MongoDB shell / MongoDB Compass for a GUI / CLI experience of the API calls through Mongoose, which is additionally installed by the npm commands provided below.

Initial Setup and Configuration
Paths[Local Machine]:
1) cd <Drive Name>:\<Folder Name>\<username>\mongodb_data
2) mongod --dbpath <Drive Name>:\<Folder Name>\<username>\mongodb_data - MongoDB/data directory

<Drive Name>:\<Folder Name>\MongoDB\mongosh-2.2.3-win32-x64\bin - System Environment Variable

<Drive Name>:\<Folder Name>\MongoDB\Server\7.0 – MongoDB 7.0 Server

<Drive Name>:\<Folder Name>\MongoDB\mongosh-2.2.3-win32-x64\bin - MongoDB shell

<Drive Name>:\<Folder Name>\<username>\AppData\Local\MongoDBCompass - MongoDB Compass

[Installation Path]:
https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.8.zip - Windows x64 Archive
https://downloads.mongodb.com/compass/mongosh-2.2.3-win32-x64.zip?_ga=2.28157311.2124490445.1713040005-1981206643.1713040004 – MongoDB Shell
https://downloads.mongodb.com/compass/mongodb-compass-1.42.5-win32-x64.exe?_ga=2.263031247.2124490445.1713040005-1981206643.1713040004 – MongoDB Compass

[npm commands]:
npm install mongoose@6.10.0
npm install --save connect-mongo
npm i connect-mongo@3
npm install express-session
npm install connect-mongo
