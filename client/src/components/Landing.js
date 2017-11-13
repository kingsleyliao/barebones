import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Background from './images/landingImage.jpg';
import Modal from './modal/Modal';
import Signup from './Signup';
import Login from './Login';

const styles = {
  root: {
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '94vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  h2: {
    margin: 0,
    fontWeight: 'bold',
    color: 'white'
  },
};

class Landing extends Component {
  constructor(props) {
    super(props);

    this.renderModal = this.renderModal.bind(this);
  }

  renderModal() {
    const { isModalOpen, Component } = this.props.modal;
    if (isModalOpen) {
      return <Modal component={Component} />;
    }
    return null;
  }

  render() {
    return (
      <div style={styles.root}>
        { this.renderModal() }

        <h2 style={styles.h2}>
          <p>React/Node barebones setup for new applications</p>
          <p>Have fun building your next app!</p>
        </h2>

        <div>
          <a className="red darken-2 btn-large"
            href="/auth/google">
            Login with Google
          </a>
        </div>

        <br />

        <div>
          <div className="waves-effect waves-light indigo darken-4 btn-large"
          onClick={ () => this.props.toggleModal(true, <Login />)}>
            &nbsp; Login with Email &nbsp;
          </div>
        </div>

        <br />

        <div>
          <div className="waves-effect waves-light btn-large"
          onClick={ () => this.props.toggleModal(true, <Signup />)}>
            Sign up with Email
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({modal }) {
  return({
    modal: modal
  });
}


export default connect(mapStateToProps, actions)(Landing);
