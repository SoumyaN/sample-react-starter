import React, {Component, PropTypes} from 'react';
import {Header} from './header';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export default class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}/>
      </div>
    );
  }
}

Main.propTypes = {
  message: PropTypes.string
};
