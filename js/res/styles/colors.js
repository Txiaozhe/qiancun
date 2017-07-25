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

const WHITE = "#ffffff";
const favoriteBlack = "#323232";
const favoriteGrey = "#bbbbbb";
const favoriteYellow = "#cbb86d";

const TRANSPARENT = "rgba(0,0,0,0)";

export const Color = {
  white: WHITE,
  black: "#000000",
  red: "#ff0000",
  arrowUp: "#ff0000",
  arrowDown: "#00ff00",
  iconGrey: "#333333",
  yellow: "#ffff00",
  blue: "#0000ff",
  green: "#00ff00",
  lightPink: "#FFB6C1",
  crimson: "#DC143C",
  violet: "#EE82EE",
  indigo: "#4B0082",
  skyBlue: "#87CEEB",
  lightCyan: "#E1FFFF",
  turquoise: "#40E0D0",
  bgGrey: "#efefef",
  MainColor: "#ffda44",
  cube: "#ffa829",
  orange: "#f08622",
  fontGrey : "#696969",
  airQuality: "#2a3235",
  favoriteGrey: favoriteGrey,
  normalGrey: "#5f5d5d",
  bottomGrey: "#aaaaaa",
  tabBlue: "#00A0E9",
  tabGrey: "#505152",

  orderGrey: "#696969",

  favouriteBlue: "#2abbf6",
  unabledBlue: "#2abbf688",

  transparent: TRANSPARENT,

  // 底部导航
  tabTextFocused: favoriteYellow,

  // 背景色
  Background: {
    SummaryCard: favoriteGrey,
    Register: WHITE,
    Login: WHITE,
    Forget: WHITE,
    Information: "#efefef",
    Personal: "#dddddd",
    Separator: favoriteGrey
  },

  // Header
  Header: {
    Register: WHITE,
    Information: WHITE
  },

  // StoryBoard
  StoryBoard: {
    Title: "#ffffff",
    Yellow: "#bec166",
    Green: "#5fb374",
    Blue: "#7eb7d1"
  },

  Calender: {
    month: '#56ba22',
    header: '#f08622',
    day: '#ffda44',
    weekend: '#f08622',
    lunar: '#EB0000',
    lunarFont: '#c0c0c0',
    weekendColor: '#ce4048'
  }
};
