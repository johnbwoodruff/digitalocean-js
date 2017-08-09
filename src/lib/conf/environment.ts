const API_BASE_URL = 'https://api.digitalocean.com/v2';

export class Environment {
  constructor() {}

  get baseUrl() {
    return API_BASE_URL;
  }
}
