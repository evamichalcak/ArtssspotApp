import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../../assets/fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'Artssspot');

export default class IconLogo extends React.Component {
  render() {
    return (
      <Icon name="dot-outlined-m" size={40} style={this.props.style} />
    );
  }
}