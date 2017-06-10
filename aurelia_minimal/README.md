# aurelia minimal (hello world)

This is minimal sample of three files:

```plaintext

index.html
    \src
        app.html
        app.js

```

In order to present these three files, it takes over 9000 files, upwards of 60MB. These come from this setup sketch:

```bash

npm install jspm -g

Push-Location .\aurelia_minimal\
jspm init
npm install jspm --save-dev

jspm install aurelia-framework
jspm install aurelia-bootstrapper
jspm install npm:aurelia-pal-browser

```

Set up files in `aurelia_minimal` according to [Erik’s article](http://www.programwitherik.com/hello-world-tutorial-aurelia-2016/).

```bash

Pop-Location
http-server aurelia_minimal -o -c-1

```

## related links

* “[Hello World Tutorial With Aurelia.js 2016](http://www.programwitherik.com/hello-world-tutorial-aurelia-2016/)”
* Answer: “[Run Aurelia Framework without NodeJs and JSPM](https://stackoverflow.com/a/28400725)”