import {connect} from 'react-redux';
import {showMessage} from '../actions';
import Main from '../components/main';
import React, {PropTypes} from 'react';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.onShowMessageClick();
  }

  render() {
    return (
      <Main message={this.props.message}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.sample.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShowMessageClick: () => {
      dispatch(showMessage());
    }
  };
};

LandingPage.propTypes = {
  onShowMessageClick: PropTypes.func,
  message: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
