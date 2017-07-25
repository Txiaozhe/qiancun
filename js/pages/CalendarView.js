/**
 * Created by smartestee on 9/8/16.
 * 日历组件
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {Container, Content} from 'native-base';
import CalendarHead from './CalendarHead';
import CalendarBody from './CalendarBody';
import MonthPicker from './monthPicker';
import {Strings, Colors, Styles} from "../res";

export default class Calendar extends Component {

  constructor(props) {
    super(props);
    let cur = new Date();
    this.state = {
      date: cur,
      current: cur
    };
  }

  onNavChange = (date) => {
    this.setState({
      date: date
    });
  };
  onSelectedChange = (date) => {
    this.setState({
      current: date
    });
  };

  render() {
    let date = this.state.date;
    let current = this.state.current;
    return (
      <Container>
        <Content>
          <View style={styles.main}>
            <View style={[styles.monthView]}>
              <Text style={{fontSize: Styles.Width(36), color: Colors.Calender.month, fontWeight: 'bold'}}>{Strings.zhMonth[date.getMonth()]}</Text>
            </View>
            <View style={{paddingBottom: Styles.Width(100)}}>
              <CalendarHead />
              <CalendarBody
                current={current}
                date={date}
                onSelectedChange={this.onSelectedChange} />
              <MonthPicker
                items={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                selectId={date.getMonth()} />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    borderRadius: Styles.Width(20),
    marginLeft: Styles.Width(26),//26
    marginRight: Styles.Width(26),//26
    marginTop: Styles.Height(24),//24
    height: Styles.Height(484),//484
    backgroundColor: Colors.white
  },

  monthView: {
    alignItems: 'flex-end',
    marginRight: Styles.Width(38),
    paddingTop: Styles.Height(24),
    paddingBottom: Styles.Height(24)
  }
});
