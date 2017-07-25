'use strict';
import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  View,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Styles, Strings, Colors} from "../res";

class PickerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <View style={[styles.window, this.props.style]} />

    );
  }
}

export default class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let arr = [];
    this.props.items.forEach((item, index) => {
      arr.push(<PickerItem
        key={index}
        style={{backgroundColor: (index === this.props.selectId ? Colors.favoriteGrey : Colors.white)}} />)
    });

    return (
      <View style={[styles.container, Styles.Center, Styles.Row]}>
        {arr}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: Styles.Height(24)
  },

  window: {
    width: Styles.Width(16),
    height: Styles.Width(16),
    borderRadius: Styles.Width(16),
    borderColor: Colors.favoriteGrey,
    borderWidth: 1,
    marginLeft: Styles.Width(12),
    marginRight: Styles.Width(12),
    backgroundColor: Colors.white
  }
});