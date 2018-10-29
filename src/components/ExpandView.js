import React from 'react';
import { Animated } from 'react-native';

class ExpandView extends React.Component {
  state = {
    growAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.growAnim,            // The animated value to drive
      {
        toValue: 1000,                   // Animate to opacity: 1 (opaque)
        duration: 200,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { growAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
          style={{
            ...this.props.style,
            maxHeight: growAnim,         // Bind opacity to animated value
          }}
        >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default ExpandView;