import {flags} from '@oclif/command';
import {join} from 'path';
import {SfdxCommand, core} from '@salesforce/command';
import * as express from 'express';

core.Messages.importMessagesDirectory(join(__dirname, '..', '..', '..'));
const messages = core.Messages.loadMessages('rest-explorer', 'org');

export default class Rest extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
    `$ sfdx dtq:rest -u my-org --endpoint '/services/data/v20.0/query/?q=SELECT+name+from+Account'`
  ];

  public static args = [{name: 'file'}];

  protected static flagsConfig = {
    // flag with a value (-n, --name=VALUE)
    //name: flags.string({char: 'n', description: messages.getMessage('nameFlagDescription')}),
    file: flags.boolean({char: 'f'}),
    body: flags.string({char: 'b'}),
    endpoint: flags.string({char: 'e'}),
    method: flags.string({char: 'm'})
  };

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;

  public async run(): Promise<any> { // tslint:disable-line:no-any
    const name = this.flags.name || 'world';

    // this.org is guaranteed because requiresUsername=true, as opposed to supportsUsername
    const conn = this.org.getConnection();

    const endpoint = conn.instanceUrl + this.flags.endpoint;
    this.ux.log('Endpoint: ' + endpoint);

    const result = await conn.request({
      method: this.flags.method,
      url: endpoint,
    });

    this.ux.log(result);
    let outputString = '';
    // Return an object to be displayed with --json
    return { orgId: result, result };
  }
}
