# Ecommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## ng add @angular/fire
## Skipping installation: Package already installed
## UPDATE package.json (1493 bytes)
## ? What features would you like to setup? Authentication
## Using firebase-tools version 10.2.0
## ? Allow Firebase to collect CLI usage and error reporting information? No
## ? Enter authorization code:

1/ First, you have to connect your firebase account > firebase login

2/ Next, check if the connection is alright (you need to create your project on firebase in a first place to see it in the result) > firebase projects:list

3/ Then, you need to initialize firebase > firebase init

4/ And now you can add the following command > ng add @angular/fire

5/ Then do > npm install firebase

## Angular Rating

1/ Just add the following > ng add @ng-bootstrap/ng-bootstrap
2/ RouterModule,
3/ NgbRatingModule,
4/ NgbModule

## Installing Error

1/ There is an error while installing Angular Material in my angular app.
2/ The reason behind this was 'ng-bootstrap' has already been installed in my angular app.
3/ So, cannot install angular material in my app.

## Error in SPEC file, do this:-
1/ Use these commands:- 
    a/ npm upgrade 
    b/ npm install --save-dev "@types/jasmine"
2/ then in app.component.spec.ts import { } from 'jasmine';
