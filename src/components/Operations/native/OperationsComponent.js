import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { sum } from '../functions';

type Props = {
  numbers: Array<any>
};

class OperationsComponent extends Component<Props> {
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>{`La suma es: ${sum(this.props.numbers)}`}</Text>
      </View>
    );
  }
}

export default OperationsComponent;