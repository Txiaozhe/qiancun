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
/**
 * Created by 12point on 26/06/2017.
 */

"use strict";

import React, {Component} from "react";
import {
  View,
  Text
} from "react-native";

import {Container, Header, Content, Footer, Title} from 'native-base';
import {Styles, Colors} from "../res";

export default class ContentSheet extends Component{
  render(){
    let {header, date, title, viewed, content} = this.props;
    return(
      <Container>
        <Content>
          <View style={[{height: Styles.Height(200), width: Styles.Width(720)}, Styles.ColumnCenterInRow]}>
            <Text style={{paddingLeft: Styles.Width(26), fontSize: Styles.Height(50), color: Colors.black}}>{header}</Text>
          </View>
            <View style={[Styles.Row]}>
              <Text style={{paddingLeft: Styles.Width(26), color: Colors.fontGrey, fontSize: Styles.Width(28)}}>{date}</Text>
              <Text style={{paddingLeft: Styles.Width(72), color: Colors.fontGrey, fontSize: Styles.Width(28)}}>{title}</Text>
              <Text style={{paddingLeft: Styles.Width(52), color: Colors.fontGrey, fontSize: Styles.Width(28)}}>{viewed}次</Text>
            </View>
            <View style={{marginTop: Styles.Height(68)}}>
              <Text style={{paddingLeft: Styles.Width(26), fontSize: Styles.Width(30), color: Colors.fontGrey}}>{content}</Text>
            </View>
        </Content>
      </Container>
    );
  }
}
