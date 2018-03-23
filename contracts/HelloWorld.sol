// Version Pragma. This allows us to specify which version of Solidity
// we want to compile with so as to not introduce breaking changes in future versions.
pragma solidity ^0.4.18;

contract HelloWorld {
  // Define the hello as type string
  string hello;

  // This is our constructor and runs when the contract is executed
  function HelloWorld() public {
    hello = "Hello World!";
  }

  // We can change our hello message with this.
  // We underscore function arguments to differentiate between arguments and global variables.
  // This is considered debatable, but we follow popular convention here.
  function setHello(string _hello) public {
    hello = _hello;
  }

  // Main function
  function getHello() public view returns (string) {
    return hello;
  }
}
