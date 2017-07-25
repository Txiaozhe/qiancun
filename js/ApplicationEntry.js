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

import {Routes, Strings, Screens, Colors} from "./res";

import {Navigation} from "react-native-navigation";
import {registerScreens} from "./utils/screens";

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: Strings.Tab.News,
      screen: Screens.FooterTabs.News,
      icon: require("../images/list@1x.png"),
      selectedIcon: require("../images/list@1x.png"),
      title: Routes.FooterTabs.News
    },
    {
      label: Strings.Tab.Home,
      screen: Screens.FooterTabs.Home,
      icon: require("../images/list@1x.png"),
      selectedIcon: require("../images/list@1x.png"),
      title: Routes.FooterTabs.Home
    },
    {
      label: Strings.Tab.Mine,
      screen: Screens.FooterTabs.Mine,
      icon: require("../images/list@1x.png"),
      selectedIcon: require("../images/list@1x.png"),
      title: Routes.FooterTabs.Mine,
    }
  ],

  tabsStyle: {
    tabBarBackgroundColor: Colors.MainColor,
    tabBarButtonColor: Colors.normalGrey,
    tabBarSelectedButtonColor: Colors.white,
    navBarBackgroundColor: Colors.MainColor,
    statusBarColor: "#002b4c",
    navigationBarColor: "#003a66"
  }
});
