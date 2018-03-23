import React from 'react';
import AnimateOnChange from 'react-animate-on-change';

class Modal extends React.Component {
  render() {
    const modal = this.props.modal;

    return(
      <AnimateOnChange
        baseClassName="modal"
        animationClassName="modal--isActive"
        animate={modal !==0}>
        <div className="modal-container">
          <div className="modal-box">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
            <h2 className="modal-text">Waiting on latest block to mine...</h2>
          </div>
        </div>
      </AnimateOnChange>
    )
  }
}

export default Modal;
