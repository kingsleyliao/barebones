import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = {
  container: {
    padding: 30,
    backgroundColor: 'white',
  }
};

class Signup extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const field = e.target.id;
    const val = e.target.value;
    this.setState({
      [field]: val
    });
  }

  handleSubmit() {
    const { signUp } = this.props;
    signUp(this.state);
  }

  render() {
    return (
      <div style={styles.container}>
        <div className="row">
          <form className="col s12">

            <div className="row">
              <div className="input-field col s12">
                <input id="email"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  />
                <label htmlFor="email">Email</label>
              </div>

                <div className="input-field col s12">
                  <input id="password"
                    type="password"
                    className="validate"
                    onChange={this.handleChange}
                    />
                  <label htmlFor="password">Password</label>
                </div>
            </div>

            <div className="row">
              <div className="input-field col s6"
                onClick={ () => this.props.toggleModal(false) }>
                <a className="waves-effect btn red lighten-1">Cancel</a>
              </div>

              <div className="input-field col s6"
                onClick={this.handleSubmit}>
                <a className="waves-effect waves-light btn">Sign Up</a>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ modal }) {
  return({
    modal: modal
  });
}

export default connect(mapStateToProps, actions)(Signup);
