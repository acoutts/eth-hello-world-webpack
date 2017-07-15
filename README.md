# eth-hello-world-webpack
Example webpack project with Truffle.

Built from the example webpack project with Truffle and combined with the Greeter example from ethereum.org (https://www.ethereum.org/greeter).

A simple web front to interact with the Greeter contract which displays the current greeting and has a text box / button to set a new greeting.

## How to Use
1. First clone the repository.

2. Next run `npm install` to download all of the node modules.

3. Start testrpc with `testrpc`

4. Compile & migrate the greeter contract with `truffle compile && truffle migrate`

5. Start the web server with `npm run dev`

6. Navigate to http://localhost:8080 and test it out!

## Tips
Use your browser's console to debug & see error message details.
