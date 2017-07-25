/**
 * Created by ZhaoYuXin on 2017/6/26.
 */
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
  Text
} from "react-native";

import {Styles, Colors} from "../res";

export default class Information extends Component {
  render(){
    let {title, content} = this.props ;
    return(
      <View style={[styles.infoStyle, Styles.Row]}>
        <View style={[Styles.ColumnCenterInRow, {flex: 1}]}>
          <Text style={{color: Colors.black, fontSize: Styles.Width(34)}}>{title}</Text>
        </View>
        <View style={Styles.ColumnCenterInRow}>
        <Text style={{color: Colors.fontGrey, fontSize: Styles.Width(34)}} >{content}</Text>
        </View>
      </View>
    );
  }
}

//todo: 一般来说软件工程上面把 information 简写成 info，还有很多经典的简写，如 resource 简写成 res、
//todo: user 简写成 usr、context 简写成 ctx 等等，你们也可以试着这样去写
const styles = {
  infoStyle: {
    height: Styles.Height(96),
    marginLeft: Styles.Width(36),
    marginRight: Styles.Width(26),
    borderBottomWidth: 1,
    borderBottomColor :Colors.favoriteGrey
  }
};
