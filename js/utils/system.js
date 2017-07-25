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

import {Platform, Dimensions, ToastAndroid, Alert} from "react-native";
import {Strings} from "../res/index";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export function isAndroid() {
  return Platform.OS === "android";
}

export function isIOS() {
  return Platform.OS === "ios";
}

export function screenWidth() {
  return SCREEN_WIDTH;
}

export function screenHeight() {
  return SCREEN_HEIGHT;
}

function screenScaleWidth(scaleWidth) {
  return parseInt(scaleWidth / 720 * SCREEN_WIDTH);
}

function screenScaleHeight(scaleHeight) {
  return parseInt(scaleHeight / 1280 * SCREEN_HEIGHT);
}

function message(text, onOk, onCancle) {
  if (isAndroid()) {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  } else if (isIOS()) {
    Alert.alert(Strings.Alert.Title, text, [onOk ? {
      text: Strings.Alert.Cancel,
      onPress: onCancle
    } : {}, onCancle ? {
      text: Strings.Alert.Certain,
      onPress: onOk
    } : {}]);
  }
}

function alert(text, onOk) {
  Alert.alert(Strings.Alert.Title, text, [
    {
      text: Strings.Alert.Cancel,
      onPress: null
    },
    {
      text: Strings.Alert.Certain,
      onPress: onOk
    }
  ]);
}

const utils = {
  isAndroid,
  isIOS,
  screenWidth,
  screenHeight,
  screenScaleWidth,
  screenScaleHeight,
  message,
  alert
};

export default utils;
