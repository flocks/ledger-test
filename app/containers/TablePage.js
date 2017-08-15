import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table from '../components/Table';
import * as BitcoinsActions from '../actions/bitcoin';

function mapStateToProps(state, ownProps) {
  return {
    bitcoins: state.bitcoins,
    idParam: ownProps.match.params.bitcoin
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BitcoinsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
