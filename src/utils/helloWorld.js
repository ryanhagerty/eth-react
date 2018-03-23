const helloWorldBytecode = (instance, web3) => {
  web3.eth.getCode(instance.address, function(error, result) {
    if(!error) {
      console.log(JSON.stringify(result));
    }
  })
}

export default helloWorldBytecode
