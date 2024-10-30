Setup and Configuration of 'TokenGraphAdsApp'

Microsoft Visual Studio [2022]:
Initial Setup and Configuration 
[Installation Path]: https://code.visualstudio.com/docs/?dv=win

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

MetaMask Setup:
Initial Setup and Configuration
https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/

Remix – Ethereum IDE
Initial Setup and Configuration:
[Path] https://sepolia.etherscan.io/
https://sepolia.etherscan.io/address/0x60b305da3df35965c97256d13073dd4ef5ac8e41 [Path for the ‘Smart Contract Address’]

Ethereum Sepolia Faucet
Initial Setup and Configuration:
I initially grinded through the Ethereum Sepolia Faucet that drips real Ether from the Ethereum Blockchain for facilitating my many transactions in my Web 3.0 App for testing and delivery. However, a test account created in the website alchemy is a necessity for performing the above.
[Paths]
https://www.alchemy.com/faucets/ethereum-sepolia
https://www.alchemy.com/

AWS Elastic Beanstalk
Details are provided below:
Application Name: x23203595GraphAdsVinayBean Platform - node.js
Platform Branch – Node.js 20 on 64bit Amazon Linux 2023 Platform Version – 6.1.2
Version Label – 0.1
Existing Service Role – LabRole EC2 Key Pair – vockey
EC2 Instance Profile - LabInstanceProfile [Path] https://awsacademy.instructure.com/

Youtube Link : https://youtu.be/ZwWZanF_uOo
