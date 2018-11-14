import React from 'react';
import { Text, View, StyleSheet, Platform, TouchableHighlight } from 'react-native';
import FilterLink from './FilterLink';
import CategoryMenu from './CategoryMenu';
import SpaceMenu from './SpaceMenu';
import Accordion from 'react-native-collapsible/Accordion';
import Constants from "../config/constants";
import styles from "./styles/header";

const SECTIONS = [
  {
    title: 'By category',
    content: () => <CategoryMenu />
  },
  {
    title: 'By Venue',
    content: () => <SpaceMenu />
  }
];


class Header extends React.Component {

    // componentDidUpdate(prevProps) {
  //   console.log('------didupdate---isFetching', this.props.isFetching);
  //    if (prevProps.isFetching !== this.props.isFetching) {
  //     activeSections = [];
  //   }
  //   this.setState({ activeSections });
  // }

  // componentWillUpdate(prevProps) {
  //   console.log('------didupdate---isFetching', this.props.isFetching);
  //   if (this.props.isFetching) {
  //      this._updateSections([]);
  //   }
  // }

  state = {
    activeSections: []
  };

  _renderHeader = section => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View>
        {section.content()}
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={styles.container}>     
        <FilterLink filter='home' navroute='Home' style={styles.firstitem}><Text style={styles.text}>{Constants.CATS['home'].text}</Text></FilterLink>       
        <FilterLink filter='openings' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['openings'].text}</Text></FilterLink>          
        <FilterLink filter='unmissables' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['unmissables'].text}</Text></FilterLink> 
        <FilterLink filter='recommended' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['recommended'].text}</Text></FilterLink>  
        <FilterLink filter='activities' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['activities'].text}</Text></FilterLink>  
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     isFetching: getIsFetching(state)
//   };
// }

// export default connect(mapStateToProps)(Header);

export default Header;

