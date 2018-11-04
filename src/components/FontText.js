import { Text } from 'react-native' ;
import React, { Component } from 'react' ;
import { connect } from 'react-redux' ;
import { getFontReady } from '../reducers';

class FontText extends Component {

Loadtext(){
    if(this.props.fontReady){
      return (<Text style={this.props.style}>{this.props.children}</Text>) ;
    }
    return (<Text style={{color: 'red'}}>{this.props.children}</Text>);
  }

render(){
    return (
      this.Loadtext()
    );
  }
}
const mapStateToProps = (state) => {
  return { fontReady: getFontReady(state) };
};

export default connect(mapStateToProps ,{})(FontText) ;