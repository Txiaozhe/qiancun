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

import {Color} from "./colors";

import utils from "../../utils/system";

const WindowWidth = utils.screenWidth();
const WindowHeight = utils.screenHeight();

function WIDTH(w) {
  return WindowWidth * w / 720;
}

function HEIGHT(h) {
  return WindowHeight * h / 1280;
}

const headerHeight = utils.isAndroid() ? 44 : 64;
const footerHeight = 54;

export const Style = {
  Width: WIDTH,

  Height: HEIGHT,

  Flex: {
    flex: 1
  },

  Transparent: {
    color: "#fff0"
  },

  FlexColumn: {
    flex: 1,
    flexDirection: "column",
  },

  Center: {
    justifyContent: "center",
    alignItems: "center"
  },

  ImageFullScreen: {
    flex: 1,
    width: WindowWidth,
    height: 1
  },

  Row: {
    flexDirection: "row"
  },

  ColumnCenterInColumn: {
    alignItems: "center"
  },

  ColumnCenterInRow: {
    justifyContent: "center"
  },

  MainContent: {
    height: WindowHeight - footerHeight,
    backgroundColor: Color.white
  },

  // 通用配置
  Common: {
    BackContainer: {
      width: 96,
      backgroundColor: Color.transparent,
      justifyContent: "flex-start",
    },

    Left: {
      white: Color.white,
      black: "#333333",
      size: 48,
      back: 32,
      fontSize: 20
    },

    CloseContainer: {
      width: 96,
      backgroundColor: Color.transparent,
      justifyContent: "flex-end"
    },

    Right: {
      black: "#333333",
      size: 48,
      fontSize: 20
    },

    Forward: {
      color: "#dddddd",
      size: 32,
      fontSize: 20
    },
  },

  Login: {
    WeChat: "#67c15e"
  },

  // Splash
  SplashText: {
    fontSize: 16,
    textAlign: "center",
    color: Color.red,
    backgroundColor: Color.white,
  },

  // Header
  HeaderTrans: {
    height: headerHeight,
    backgroundColor: Color.transparent,
    borderWidth: 0,
    borderBottomWidth: 0,
  },

  HeaderSearch: {
    backgroundColor: "#ffffff33",
    borderWidth: 0
  },

  HeaderGeneral: {
    height: headerHeight,
    backgroundColor: Color.tabBlue,
    borderWidth: 0,
    borderBottomWidth: 0
  },

  HeaderTitle: {
    fontSize: 20,
    color: Color.white
  },

  HeaderQr: {
    color: Color.white
  },

  // Tab
  Tab: {
    height: footerHeight,
    backgroundColor: Color.Background.Common
  },

  TabIcon: {
    size: WIDTH(44),
    normal: Color.tabGrey,
    focused: Color.tabBlue
  },

  TabTitle: {
    color: Color.tabGrey,
    marginTop: HEIGHT(10),
    fontSize: WIDTH(20),
    fontWeight: "bold"
  },

  TabTitleFocused: {
    color: Color.tabBlue,
    marginTop: HEIGHT(10),
    fontSize: WIDTH(20),
    fontWeight: "bold"
  },

  // WebView
  WebView: {
    height: WindowHeight - headerHeight
  },

  Separator: {
    height: 1,
    backgroundColor: Color.Background.Separator
  },

  MainTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
