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

"use strict";

import React, {Component} from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";

import {Styles, Colors} from "../res";

// todo: line 43: 参数传递不明确，以前跟你们说的东西好像还是没有很理解
export default class NewsTag extends Component {
  render(){
    let {margin, name} = this.props;
    return(
      <TouchableOpacity
        style={[Styles.Center, styles.TouchStyle, {marginRight: margin}]}
        onPress={this.onClick}>
        <Text
          style={{color:Colors.black, margin: 10}}
          size={26}>{name}</Text>
      </TouchableOpacity>
    );
  }

  onClick = () => {
    let {title, screen} = this.props;

    this.props.navigator.push({
      title: title,
      screen: screen
    });
  };
}

const styles = {
  TouchStyle: {
    height: Styles.Height(54),
    borderWidth : 1,
    borderColor: Colors.normalGrey,
    borderRadius: 18,
    flex: 1
  }
};
