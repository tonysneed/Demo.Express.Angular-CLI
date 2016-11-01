# Demo: Express with Angular CLI

## Restore Packages

- Open a command line at project root
- Execute: `npm install`

# PART A: Express

## Build, Run and Watch

*The easiest way to start the app is to use the* `serve-api` *task,    
which will restart the app when any changes saved.*

- Press **Cmd + P** (Mac) or **Ctrl + P** (Windows / Linux) and enter: `task serve-api`
- Or open a **terminal** and enter: `gulp serve-api`
    + Press **Ctrl + C** to terminate the app
- Project will build and start while *monitoring* for file changes
    + If you edit and save a file, the project will *restart*
    + If using a browser, you will need to *refresh* to see changes
- To stop the app that is running in VS Code, terminate the running task.
    + Press **Cmd + Shift + P** (Mac) or **Ctrl + Shift P** (Windows / Linux),  
      select **Terminate Running Task**

NOTE: The `serve-api` task does not run the `clean-api` task to remove the **dist** folder
and its contents, because removing the folder interfers with nodemon on Windows.
However, if you want to clean out old files, you can simply build the project, 
which includes removal of the **dist** folder.

## Compile

- Press **Cmd + Shift + B** (Mac) or **Ctrl + Shift B** (Windows / Linux)

## Run

- Open a **terminal** and enter: `node ./dist/api/server.js`
- Open a **browser** and navigate to: <http://localhost:3000>

## Debug

- Open a **server.ts** file and press F5 to debug
- You may set a **breakpoint** in the file if you wish.
- Show debug console: **Cmd + Shift + Y** (Mac) or **Ctrl + Shift Y** (Windows / Linux)

# PART B: Angular CLI

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `npm run serve-app` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component component-name` to generate a new component. You can also use `ng g directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
