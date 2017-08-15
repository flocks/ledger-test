// @flow
import React, { Component } from 'react';
import styles from './Spinner.css';

class Spinner extends Component {

  props: {
      isLoading: bool
  };

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
        return (
            <div className={ styles.container }>
                <div className={ styles.dot }></div>
                <div className={ styles.dot }></div>
                <div className={ styles.dot }></div>
            </div>
        );
    }

    return false;
  }
}

export default Spinner;
