# node-osquery

This is a Node.js module providing convenient access to OSQuery data.

## Installation

You can install this module via npm using the following command:

`
npm install --save YOUR_PACKAGE_NAME
`

or using yarn:

`
yarn add YOUR_PACKAGE_NAME
`

## Usage

You can import and use the methods provided by this package as follows:

`
const { runOSQuery } = require('node-osquery');
// OR with ES6 import
import { runOSQuery } from 'node-osquery';

const main = async () => {
const result = await runOSQuery('select * from users');
console.log(result);
};

main().catch(console.error);
`

## Test

To run the test suite, execute the following command:

`
npm test
`

## Contributing

I appreciate your contributions! Please feel free to submit a pull request or open an issue on the repository.

## License

This project is licensed under the MIT License.
