import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case false:
        return null;
      default:
        return (
          <ul className="right">
            <li key='1' className="red lighten-1"><a href="/api/logout">Logout</a></li>
          </ul>
        );
    }
  }

  render () {
    return (
      <nav>
        <div className="nav-wrapper light-blue darken-4">
          <Link to={this.props.auth ? '/home' : '/'} className="center brand-logo">Barebones</Link>

          {this.renderContent()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth};
}

export default connect(mapStateToProps)(Header);
