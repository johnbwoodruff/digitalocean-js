import Axios from 'axios';

// TODO: Remove ApiKey when OAuth is implemented
import { ApiKey } from '../../conf/api-key';
import { Environment } from '../../conf/environment';
import { Account } from '../../models/account';

export class AccountService {
  private key: string;
  private env: Environment;

  constructor() {
    this.env = new Environment();
    this.key = ApiKey;
    Axios.defaults.headers.common['Authorization'] = `Bearer ${this.key}`;
    Axios.defaults.headers.common['Content-Type'] = `application/json`;
  }

  /**
   * Get the account information associated with the provided credentials
   *
   * @returns {Promise<Account>}
   * @memberof AccountService
   */
  public getUserInformation(): Promise<Account> {
    return new Promise((resolve, reject) => {
      const url = this.env.baseUrl;
      Axios.get(`${url}/account`).then((response) => {
        // Return actual account instead of wrapped account
        resolve(response.data.account);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}