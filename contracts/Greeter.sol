pragma solidity ^0.4.11;

contract Mortal {
  address owner;

  function mortal() {
    owner = msg.sender;
  }

  function kill()
  {
    if (msg.sender == owner) {
      selfdestruct(owner);
    }
  }
}

contract Greeter is Mortal {
  string greeting;

  function greeter() public {
    greeting = "Hello, World!";
  }

  function getGreeting() constant returns (string) {
    return greeting;
  }

  function setGreeting(string _newGreeting) {
    greeting = _newGreeting;
  }
}
