import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../common/Modal';
import Auth from '../containers/Auth';
import { authModalToggle } from '../../actions/firebase';

class AuthModal extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
    this.close = this.close.bind(this);
  }
  close() {
    this.props.authModalToggle({
      show: false,
    });
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isModalOpen} onClose={this.close} title="Kek">
          <Auth />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isModalOpen: state.auth.show
  };
}

export default connect(mapStateToProps, { authModalToggle })(AuthModal);
