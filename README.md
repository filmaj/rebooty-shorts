rebooty-shorts
==============

reboot a device with an arduino plus a servo

## Installation

    $ cd rebooty-shorts
    $ npm install

You'll also need an Arduino and a servo hooked up it. 

## Running

    $ node server.js

Then issue HTTP requests against the server. Only two commands currently supported: `tap` and `hold`. Example:

    $ curl localhost:8000/tap
    :)
    $ curl localhost:8000/hold
    :)
