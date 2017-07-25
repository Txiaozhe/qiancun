/**
 * Created by smartestee on 9/8/16.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import {Colors, Styles} from "../res";
import {Calendar} from "../Data/Calendar";

export default class CalendarHead extends Component {
  render() {
    let nodes = Calendar[0].map(function (text, index) {
      let className = [styles.day, (index === 0 || index === 6 ? styles.weekend : '')];
      return (
        <View
          key={index}
          style={[className, Styles.Center]}>
          <Text style={{fontSize: Styles.Height(28), color: Colors.white}}>
            {text}
            </Text>
        </View>
      );
    });
    return (
      <View style={[{marginLeft: Styles.Width(24), marginRight: Styles.Width(24)}]}>
        <View style={Styles.Row}>
          {nodes}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  day: {
    flex: 1,
    height: Styles.Height(36),
    margin: Styles.Width(2),
    backgroundColor: Colors.Calender.day,
    borderRadius: 5,
  },
  weekend: {
    backgroundColor: Colors.Calender.weekend,
  },
});

