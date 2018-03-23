var HelloWorld = artifacts.require("./HelloWorld.sol");

contract('HelloWorld', function(accounts) {

  it("...should set and get the Hello World value", function() {
    return HelloWorld.deployed().then(function(instance) {
      helloWorldInstance = instance;

      return helloWorldInstance.setHello('This is a hello test', {from: accounts[0]});
    }).then(function() {
      return helloWorldInstance.getHello.call();
    }).then(function(storedData) {
      assert.equal(storedData, 'This is a hello test', 'Uh-oh, it did not set the Hello World value properly');
    });
  });

});
