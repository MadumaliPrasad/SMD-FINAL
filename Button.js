import React, {Fragment} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from './colors';

class Button extends React.Component {
  handleOperation = () => {
    this.props.operation(this.props.char);
  };

  componentDidMount = () => {
    //console.log(this.props)
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.operation(this.props.char)}
        style={styles.container}>
        <Text style={styles.text}>{this.props.char}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 30,
  },
});

export default Button;
