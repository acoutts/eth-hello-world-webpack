var Greeter = artifacts.require("./Greeter.sol");

contract('Greeter', function(accounts) {

  it("Should have a null value for initial greeting", function() {
    return Greeter.deployed().then(function(instance) {
      return instance.getGreeting.call();
    }).then(function(greeting) {
      assert.equal(greeting.valueOf(), "", "Initial greeting is not null");
    });
  });

  it("Should set greeting to \"Hello, World!\"", function() {
    var greet;
    return Greeter.deployed().then(function(instance) {
      greet = instance;
      return greet.setGreeting("Hello, World!", {from: accounts[0]});
    }).then(function() {
      return greet.getGreeting.call();
    }).then(function(greeting) {
      assert.equal(greeting.valueOf(), "Hello, World!", "Did not set greeting to expected value");
    });
  });

});
