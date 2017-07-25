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

import React from "react";
import {Text, View} from "react-native";

import MainContainer from "../containers/MainContainer";
import {Strings, Styles, Routes} from "../res";

const SHOW_INTERVAL = 3000;

export default class Splash extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {navigator} = this.props;
    setTimeout(() => {
      navigator.replace({
        title: Routes.Navigation.MainScreen,
        component: MainContainer,
      });
    }, SHOW_INTERVAL);
  }

  render() {
    return(
      <View>
        <Text style={Styles.SplashText}>{Strings.Splash.Welcome}</Text>
      </View>
    );
  }
}
