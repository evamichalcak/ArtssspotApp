import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';

class OpenURLButton extends React.Component {
  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  };
  render() {
    return (
      <TouchableOpacity {...this.props} onPress={this.handleClick} >
         {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default OpenURLButton;