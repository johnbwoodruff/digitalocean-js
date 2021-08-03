![digitalocean-js](https://user-images.githubusercontent.com/5883616/126348407-dd1e694d-64a9-402e-b8df-f59e67686014.png)

# DigitalOcean JS

[![CI](https://github.com/johnbwoodruff/digitalocean-js/actions/workflows/main.yml/badge.svg)](https://github.com/johnbwoodruff/digitalocean-js/actions/workflows/main.yml) [![npm](https://img.shields.io/npm/dm/digitalocean-js.svg)](https://www.npmjs.com/package/digitalocean-js) [![npm](https://img.shields.io/npm/dt/digitalocean-js.svg)](https://www.npmjs.com/package/digitalocean-js) [![npm](https://img.shields.io/npm/v/digitalocean-js.svg)](https://www.npmjs.com/package/digitalocean-js)

JavaScript library for the DigitalOcean API. For use in Node or the browser.

## Goals

This library was built with a few goals in mind:

- Be able to use in a Node or Browser environment with no difference in usage.
- Use Promises instead of callbacks so clients can make use of `async`/`await`.
- Be built in TypeScript so consumers of the library can benefit from excellent intellisense with the TypeScript definitions.
- Provide solid documentation including examples for usage.

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

To see all the services available, check out the [documentation](https://johnbwoodruff.github.io/digitalocean-js/).
