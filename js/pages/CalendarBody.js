/**
 * Created by smartestee on 9/8/16.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

import getLunarDate from './getLunarDate';
import {Strings, Colors, Styles} from "../res";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class CalendarBody extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    getFirstDay = (year, month) => {
        let firstDay = new Date(year, month - 1, 1);
        return firstDay.getDay();
    };
    getMonthLen = (year, month) => {
        let nextMonth = new Date(year, month, 1);
        nextMonth.setHours(nextMonth.getHours() - 3);
        return nextMonth.getDate();
    };
    getCalendarTable = (year, month) => {
        let monthLen = this.getMonthLen(year, month);
        let firstDay = this.getFirstDay(year, month);
        let list = [[]];
        let i, cur, row, col;
        for (i = firstDay; i--;) {
            list[0].push('');
        }
        for (i = 1; i <= monthLen; i++) {
            cur = i + firstDay - 1;
            row = Math.floor(cur / 7);
            col = cur % 7;
            list[row] = list[row] || [];
            list[row].push(i);
        }
        let lastRow = list[row];
        let remain = 7 - list[row].length;
        for (i = 7 - lastRow.length; i--;) {
            lastRow.push('');
        }
        return list;
    };

    onClickCallback = (year, month, day, selectAction) => {
        this.props.onSelectedChange(new Date(year, month - 1, day), selectAction);
    };

    render() {
        let date = this.props.date;
        let year = date.getFullYear();
        let month = date.getMonth() + 1;

        let curDate = this.props.current;
        let curYear = curDate.getFullYear();
        let curMonth = curDate.getMonth() + 1;
        let curDay = curDate.getDate();

        let isWeekend;

        let table = this.getCalendarTable(year, month);
        let rows = table.map((row) => {
            let days = row.map((day, index) => {
                let isCur = (year === curYear) && (month === curMonth) && (day === curDay);
                isWeekend = index === 0 || index === 6;
                let lunarDate;
                let lunarDateView;
                let pressCb = (isCur ? () => {
                } : () => {
                    this.onClickCallback(year, month, day);
                });
                let className = [Styles.Center];
                if (isCur) className.push(styles.cur);
                if (day) {
                    lunarDate = getLunarDate(new Date(year, month - 1, day));
                    lunarDateView = (
                        <View>
                            <Text style={[styles.lunar, isWeekend ? {color: Colors.Calender.lunar} : {}]}>
                                {(lunarDate.day == /${"初一"}/) ? (lunarDate.month + /&{'月'}/) : (lunarDate.day)}
                            </Text>
                        </View>
                    );
                }
                return (
                    //每一格
                    <View
                      key={index}
                      style={[Styles.Center, {width: Styles.Width(592 / 7), margin: Styles.Width(2)}]} >
                        <TouchableOpacity
                          style={[className, {width: Styles.Width(40), height: Styles.Height(58)}]}
                          onPress={pressCb}>
                            <Text style={[{fontSize: Styles.Height(28)}, isWeekend ? {color: Colors.Calender.weekendColor} : {}]}>{day}</Text>
                            {lunarDateView}
                        </TouchableOpacity>
                    </View>
                );
            });
            //每一行
            return (
                <View
                  key={row}
                  style={[styles.row, styles.margin26, {height: Styles.Height(58)}]}>
                    <View style={Styles.Row}>{days}</View>
                </View>
            );
        });
        //整个布局
        return (
            <View>
                {rows}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    margin26: {
        marginLeft: Styles.Width(24),
        marginRight: Styles.Width(24),
    },

    cur: {
        borderWidth: 1,
        borderColor: Colors.red, //'#c47134'
    },
    //农历字体风格
    lunar: {
        color: Colors.Calender.lunarFont,
        fontSize: Styles.Width(16),
    },

    header: {
        backgroundColor: Colors.white,
    }
});