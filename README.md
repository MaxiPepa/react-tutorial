# React Tutorial

## React app creation
Pre-requisites:
- You must have Node.js 18+ or 20+ installed

Instructions:
1. Open console in the folder where the app should be created
2. Run command ```npm create vite@latest```
3. Name the project
4. Select *React*
5. Select the programming language you are going to use. In this case JavaScript + SWC. SWC is a compiler and bundler that is much faster and new than the old ones that we used before to compile react apps, so it's recommended but not necessary, you can use just JavaScript.
6. In the app folder, do the following command to install all dependencies: ```npm i``` or ```npm install```.
This will install all the basic modules and the ones you add into the node_modules folder.
7. Run app with ```npm run dev``` (If you haven't changed the run command)

## Node Modules
This folder contains all the libraries you have installed for your react app and it should be in the git ignore and not uploaded to the repository. The packages are referenced in the package.json file, all the packages that are written in there will be installed when you do ```npm i```. The package-lock.json is basically the same but represents more specific details about the packages, it will be always created and modified automatically when you do an install. It should not be modified manually and sometimes you will delete it and override when you have some issues installing packages.