# DigitalOcean JS

[![Build Status](https://travis-ci.org/jbw91/digitalocean-js.svg?branch=master)](https://travis-ci.org/jbw91/digitalocean-js)

JavaScript library for the DigitalOcean API. For use in Node or the browser.

## Usage

To use the library, install from the npm repository.

```shell
$ npm install --save digitalocean-js
# Alternatively install with yarn
$ yarn add digitalocean-js
```

Simply import the client and initialize it with your API token:

```js
import { DigitalOcean } from 'digitalocean-js';

const client = new DigitalOcean('my-api-token');
```

To see all the services available, check out the [documentation](http://johnbwoodruff.com/digitalocean-js/).

## Un-Implemented Services

There are a few unavailable aspects of the API currently. They are:

* Floating IPs
* Floating IP Actions
* Firewalls
* Load Balancers

If a service you need is unavailable, feel free to contribute a pull request!
