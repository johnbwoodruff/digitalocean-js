"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
const environment_1 = require("../environment/environment");
describe('AccountsService', () => {
    let service, env;
    beforeEach(() => {
        env = new environment_1.Environment();
        service = new account_1.AccountService(env);
    });
    it('should exist', () => {
        service.getUserInformation().then((data) => {
            console.log(data);
        });
    });
});
//# sourceMappingURL=account.spec.js.map