import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';

import { filterEvents } from "../actions/eventsActions"
//import { fetchUser } from "../actions/userActions"

@connect((store) => {
  return {
    eventsData: store.events.eventsData,
    viewing: store.events.viewing,
    filtered: store.events.filtered,
  };
})

export default class FilterPicker extends Component {

  render() {
    return (
      <Picker>
        <Picker.Item label="Today" value="today" />
        <Picker.Item label="Openings" value="openings" />
      </Picker>
    );
  }
}