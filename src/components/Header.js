import React from 'react';
import { Text, View } from 'react-native';
import FilterLink from './FilterLink';
import CategoryMenu from './CategoryMenu';
import SpaceMenu from './SpaceMenu';
import Accordion from 'react-native-collapsible/Accordion';
import Constants from "../config/constants";

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
      <View>
        <Text>{section.title}</Text>
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
      <View>       
        <FilterLink text={Constants.CATS['home'].text} navroute='Home' />
        <FilterLink text={Constants.CATS['openings'].text} filter='openings' navroute='Category' />
        <FilterLink text={Constants.CATS['unmissables'].text} filter='unmissables' navroute='Category' />
        <FilterLink text={Constants.CATS['recommended'].text} filter='recommended' navroute='Category' />
        <FilterLink text={Constants.CATS['activities'].text} filter='activities' navroute='Category' />
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