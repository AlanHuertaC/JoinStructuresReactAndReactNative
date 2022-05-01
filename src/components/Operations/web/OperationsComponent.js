import React, { Component } from 'react';
import { sum } from '../functions';

type Props = {
  numbers: Array<any>
};

class OperationsComponent extends Component<Props> {
  render() {
    return (
      <div>{`La suma es: ${sum(this.props.numbers)}`}</div>
    );
  }
}

export default OperationsComponent;