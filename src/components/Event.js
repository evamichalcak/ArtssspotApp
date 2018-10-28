import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, Animated } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { decode } from 'he';
import { cleanText, cleanDate } from '../helpers';

const SECTIONS = [
  {
    title: 'Menu',
  }
];

class Event extends React.Component {
  constructor(props){
    super(props);

    this.icons = {     //Step 2
        'up'    : '-',
        'down'  : '+'
    };

     this.state = {       //Step 3
        title       : props.title,
        expanded    : props.open,
        animation: new Animated.Value(180)
    };
  }

  toggle(){

    this.props.onClick(); 

    let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
        expanded : !this.state.expanded  //Step 2
    });

    this.state.animation.setValue(initialValue);  //Step 3
    Animated.spring(     //Step 4
        this.state.animation,
        {
            toValue: finalValue
        }
    ).start();  //Step 5
  }

  _setMaxHeight(event){
      this.setState({
          maxHeight   : event.nativeEvent.layout.height
      });
  }

  _setMinHeight(event){
      this.setState({
          minHeight   : event.nativeEvent.layout.height,
          animation: new Animated.Value(event.nativeEvent.layout.height)
      });
  }

  // shouldComponentUpdate(nextProps) {
  //   //console.log('sssssssssssssssshouldComponentUpdate',nextProps.open !== this.props.open);
  //     //return this.props.id === (nextProps.categoryIndex || this.props.categoryIndex);
  //     return nextProps.open !== this.props.open;
  //   }

  render() {
    console.log('-----open:', this.props.open);
    let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];   //Step 4
        }
    return (
      <Animated.View style={[styles.container,{height: this.state.animation}]}>
              <View onLayout={this._setMinHeight.bind(this)}>
                <TouchableHighlight 
                    style={styles.button} 
                    onPress={this.toggle.bind(this)}
                    //onPress={this.toggle.bind(this)}
                    underlayColor="#f1f1f1">
                    <View>
                      {!(this.props.textOnly === true) &&
                        <Image source={{uri:this.props.image}} style={{width: 193, height: 110}} />
                      }
                      <Text style={styles.title}>{decode(this.state.title)}</Text>
                      <Text>{cleanDate(this.props.start)} - {cleanDate(this.props.end)}</Text> 
                      <Text>{decode(this.props.venue)}</Text>
                      <Text>{decode(this.props.address)}</Text>
                      <Text style={styles.buttonImage}>{icon}</Text>
                    </View>
                </TouchableHighlight>
              </View>
              <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                  {this.props.children}
              </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionClosed: {
    height: 0
  },
  container   : {
      height: 0,
      backgroundColor: '#fff',
      margin:10,

  },
  titleContainer : {
      flexDirection: 'row'
  },
  title       : {
      flex    : 1,
      padding : 10,
      color   :'#2a2f43',
      fontWeight:'bold'
  },
  button      : {

  },
  buttonImage : {
      fontSize   : 30
  },
  body        : {
      padding     : 10,
      paddingTop  : 0,
  }
});

export default Event;