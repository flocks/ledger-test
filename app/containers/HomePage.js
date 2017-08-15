// @flow
// import React, { Component } from 'react';
// import Home from '../components/Home';
//
// export default class HomePage extends Component {
//   render() {
//     return (
//       <Home />
//     );
//   }
// }
//

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as BitcoinActions from '../actions/bitcoin';

function mapStateToProps(state, ownProps) {
  return {
    search: state.bitcoins.search,
    history: ownProps.history
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BitcoinActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
