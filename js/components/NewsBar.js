/*
 * MIT License
 *
 * Copyright (c) 2017 SmartestEE Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, {Component} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

import {Styles, Colors} from "../res";

export default class NewsBar extends Component {
  render() {
    let {title, date, share, viewed, photo} = this.props;
    return (
      <TouchableOpacity
        onPress={this.props.onclick}
        activeOpacity={0.6}>
        <View
          style={[styles.barStyle, Styles.Row]}>
          <View style={{width: Styles.Width(photo ? 480 : 720), height: Styles.Height(180)}}>
            <Text style={styles.NewsBar}>{title}</Text>
            <View style={[Styles.Row, {marginBottom: Styles.Height(8)}]}>
              <View style={{flex: 1}}>
                <Text
                  style={styles.dateStyle}>{date}</Text>
              </View>
              <View style={[{width: Styles.Width(240)}, Styles.Row]}>
                {share ? <Text
                  style={styles.shareStyle}>分享{share}次</Text> : null}
                {viewed ? <Text
                    style={styles.viewStyle}>浏览{viewed}次</Text> : null}
              </View>
            </View>
          </View>
          <View >
            <Image
              source={photo}
              style={{width: Styles.Width(240), height: Styles.Height(180)}}
              resizeMode="contain" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  NewsBar: {
    paddingTop: Styles.Height(28),
    paddingLeft: Styles.Width(24),
    paddingRight: Styles.Width(30),
    paddingBottom: Styles.Height(42),
    color: Colors.black,
    fontSize: Styles.Width(34)
  },

  barStyle: {
    width: Styles.Width(720),
    height: Styles.Height(180),
    backgroundColor: Colors.white,
    marginTop: Styles.Height(10)
  },

  dateStyle: {
    paddingLeft:Styles.Width(24),
    color: Colors.fontGrey,
    fontSize: Styles.Width(22)
  },

  shareStyle: {
    color: Colors.fontGrey,
    fontSize: Styles.Width(22),
    paddingRight: Styles.Width(40)
  },

  viewStyle: {
    color: Colors.fontGrey,
    fontSize: Styles.Width(22)
  }
};
