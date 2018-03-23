/* Welcome to our first contract - HelloWorld!
 * The comments below are provided by Truffle React Box unless noted
 * by beginning with ^^
 * The structure is similar to a standard Truffle React Box install to assist
 * with creating your own project.
 * Don't forget to truffle compile & truffle migrate with Ganache running, and unlock
 * your metamask account with local network selected. :)
 */
import React, { Component } from 'react'
import HelloWorldContract from '../build/contracts/HelloWorld.json'
import getWeb3 from './utils/getWeb3'
import helloWorldBytecode from './utils/helloWorld'  // eslint-disable-line
// ^^ Import our components.
import ContractInput from './components/ContractInput'
import Modal from './components/Modal'

// ^^ Import our fonts and CSS.
import './css/roboto.css'
import './css/rubik.css'
import './css/milligram.min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.updateHello = this.updateHello.bind(this);
    this.initModal = this.initModal.bind(this);

    // ^^ Change initial states and add new ones here.
    this.state = {
      hello: "I'm waiting to say hello...",
      contractAddress: "Waiting on contract address...",
      modal: 0,
      instance: null,
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const helloWorld = contract(HelloWorldContract)
    let helloWorldInstance
    helloWorld.setProvider(this.state.web3.currentProvider)

    helloWorld.deployed().then((instance) => {
      helloWorldInstance = instance
      this.setState({ instance: helloWorldInstance })

      /* ^^ Uncomment the line below see all the cool things
       * in our first contract!
       */
      //console.log(helloWorldInstance);

      /* ^^ To see the bytecode of our contract, uncomment this below.
       * The Metamask web3 wrapper requires a callback function.
       */
      //helloWorldBytecode(helloWorldInstance, this.state.web3);

      // ^^ Display the address of our smart contract.
      this.setState({ contractAddress: helloWorldInstance.address })

      /* ^^ Display our default Hello World message from HelloWorld.sol
       * Once you change the default message, you will need to truffle migrate --reset
       * to see the original message again.
       */
      return helloWorldInstance.getHello()

    }).then((result) => {
      return this.setState({ hello: result })
    })
  }

  updateHello(message) {
    this.setState({
      hello: message
    })
  }

  initModal(value) {
    this.setState({
      modal: value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="top-bar">
          <a href="#" className="title-link">🍕 Ethereum and React</a>
          <div className="notice-box">Looks like Truffle React Box is up and running 👍👍</div>
        </div>

        <main className="container">
          <h1>Hello World</h1>
          <h2>Our First Smart Contract</h2>
          <div className="contract-status">
            <p>If your contracts compiled and migrated successfully, we'll show your contract address and the hello message below.</p>
            <div>Your contract address is: <span className="contract-address">{this.state.contractAddress}</span></div>
          </div>
          <p className="message">The hello message from your contract is: <strong className="hello-world">{this.state.hello}</strong></p>
          <ContractInput state={this.state} updateHello={this.updateHello} initModal={this.initModal} />
        </main>
        <Modal modal={this.state.modal} />
      </div>
    );
  }
}

export default App
