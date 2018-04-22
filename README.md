rest-explorer
=============

<!-- commands -->
* `sfdx dtq:restg [FILE]`

## `sfdx dtq:rest`

Executes Salesforce Authenticated Http requests from terminal

```
USAGE
  $ sfdx dtq:rest

OPTIONS
  -b, --body=body
  -e, --endpoint=endpoint
  -f, --file
  -m, --method=method
  -u, --targetusername=targetusername             username or alias for the target org; overrides default target org
  --apiversion=apiversion                         override the api version used for api requests made by this command
  --json                                          format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)  logging level for this command invocation

EXAMPLE
  $ sfdx dtq:rest -u my-org --endpoint '/services/data/v20.0/query/?q=SELECT+name+from+Account'
```
<!-- commandsstop -->