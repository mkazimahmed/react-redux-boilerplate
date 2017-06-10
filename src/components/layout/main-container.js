import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container main-wrapper">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
