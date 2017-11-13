import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#7777',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  component: {
    width: 'auto',
    height: 'auto',
    zIndex: 2,
  }
};

class Modal extends Component {
  render() {
    return (
      <div style={styles.container}
      onClick={ () => this.props.toggleModal(false) }>

        <div style={styles.component}
        onClick={ (e) => e.stopPropagation() }>
          { this.props.component }
        </div>

      </div>
    );
  }
}

function mapStateToProps({ modal }) {
  return ({
    modal: modal
  });
}

export default connect(mapStateToProps, actions)(Modal);
