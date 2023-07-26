# node-osquery

![Badge Branches](./coverage/badge-branches.svg)
![Badge Functions](./coverage/badge-functions.svg)
![Badge Lines](./coverage/badge-lines.svg)
![Badge Statements](./coverage/badge-statements.svg)

This is a Node.js module providing convenient access to OSQuery data.

## Installation

You can install this module via npm using the following command:

`
npm install --save node-osquery
`

or using yarn:

`
yarn add node-osquery
`

## Usage

You can import and use the methods provided by this package as follows:

```
const { runOSQuery } = require('node-osquery');
// OR with ES6 import
import { runOSQuery } from 'node-osquery';

const main = async () => {
const result = await runOSQuery('select * from users');
console.log(result);
};

main().catch(console.error);
```

## Test

To run the test suite, execute the following command:

`
npm test
`

## Contributing

I appreciate your contributions! Please feel free to submit a pull request or open an issue on the repository.

## License

This project is licensed under the MIT License.
