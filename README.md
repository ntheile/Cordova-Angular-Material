Project Readme - Angular 4 + Cordova + Material Design
=======================================================

## Common Commands

To test cordova in the browser. Make sure you are in the /MyApp/cordova directory

`cordova run browser`

To Test on an android emulator or device

`cordova run android`

To test on a android emulator by avd name, mine below is named android

`cordova emulate --target=android`

To run the regular angular app to get live reload. Make sure you are in the /MyApp directory where the angular app is at

`ng serve`

To remote inspect any android instances in chrome

chrome://inspect

## Getting Started 

This article below shows how to integrate cordova and angular. A few config changes need to be made and a hook needs to be added so when you are done coding your Angular app it will compile to the cordova www folder and transpile properly.

https://www.becompany.ch/en/blog/2016/10/19/creating-apache-cordova-app-with-angular2

Directory Structure

<pre>
MyApp
    └── src
        └── app
            └── ALL YOUR ANGULAR APP STUFF
    └── cordova
        ├── config.xml
        ├── hooks
        ├── platforms
        ├── plugins
        └── www

</pre>

## Tips and Troubleshooting
Android issues

if your app does not show up in Android you can use the web inspect fearute built into chrome to see the eror and debug

    - turn on usb debugging in android
    - open up chrome on your desktop and run about:inspect
    - it may take a second but your remote app to debug should show up
         - LOOKS likes this:
                Android SDK built for x86 EMULATOR-5554
                WebView in io.cordova.hellocordova (Version/4.0 Chrome/30.0.0.0)
                MyApp
                file:///android_asset/www/index.html


if you an get an error `Object.assign is not a function` 
then goto polyfills.ts and comment out

<pre>
/** Evergreen browsers require these. **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

import 'zone.js/dist/zone'; 
</pre>

Then add this 
<pre>
import 'core-js';
import 'zone.js';
</pre>



## Other commands

**Android**

To tell the cordova cli what android emulator to run (make sure its a haxm x86 b/c arm is slow AF)

    cordova run --emulator androidAvdName

Once the emulator is added hence forward you can run

    cordova run android

if hooks are not enabled in cordova this will build the angular app into cordova/www

    ng build --target=production --environment=prod --output-path cordova/www/


## iOS Debugging

I recommend cloning your cordova project to the mac and installing VScode to debug. The TACO (Visual Studio Tools for apache cordova) tools have an old cordova version dependency and remoting may or may not work.

On the Mac:

1. Install node on the mac

        https://nodejs.org/en/download/

2. Update NPM

        sudo  npm install npm -g

3. Install Angular CLI 

        sudo npm install @angular/cli -g

4. Install Cordova

        sudo npm install -g cordova


<br/>
<br/>
<hr style="font-weight:bold"/>
<br/>
<br/>

# Angular Docs

## MyApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
