import React from 'react';

class ContractInput extends React.Component {
  submit(e) {
    e.preventDefault();
    const message = this.message.value;
    const state = this.props.state;
    const instance = state.instance;

    const setHelloRequest = async () => {
      const result = instance.setHello(message, { from: state.web3.eth.accounts[0]}).then((result) => {
        this.props.initModal(0);
        return instance.getHello()
      });
      return result
    }

    const getHelloRequest = async () => {
      this.props.initModal(1);
      const result = await setHelloRequest();
      this.props.updateHello(result);
    }

    getHelloRequest();
  }

  render() {
    return (
      <form className="hello-form" onSubmit={(e) => this.submit(e)}>
        <input ref={(input) => this.message = input} type="text" className="hello-input" placeholder="Hello World text to change" />
        <button type="submit" value="Submit" className="button-submit js-button-submit">Submit</button>
      </form>
    )
  }
}

export default ContractInput;
