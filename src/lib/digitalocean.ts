export abstract class DigitalOcean {
  constructor(private _accessToken: string) {}

  get accessToken() {
    return this._accessToken;
  }
}