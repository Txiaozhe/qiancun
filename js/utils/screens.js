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

import {Navigation} from "react-native-navigation";
import {Provider} from "react-redux";

import Home from "../pages/Home";
import News from "../pages/News";
import Mine from "../pages/Mine";
import Video from "../pages/Video";
import NewsContent from "../pages/NewsContent";
import Joke from "../pages/Joke";
import TextNews from "../pages/TextNews";
import JobWanted from "../pages/JobWanted";
import Trade from "../pages/Trade";
import Rent from "../pages/Rent";
import Profile from "../pages/Profile";
import JobContent from "../pages/JobContent";
import RentContent from "../pages/RentContent";
import TradeContent from "../pages/TradeContent";
import AdContent from "../pages/AdContent";
import JokeContent from "../pages/JokeContent";
import MyBean from "../pages/MyBean";
import Collection from "../pages/Collection";
import Calender from "../pages/CalendarPage";
import store from "../res/store";
import {Screens} from "../res";

export function registerScreens() {
  Navigation.registerComponent(Screens.FooterTabs.News, () => News, store, Provider);
  Navigation.registerComponent(Screens.FooterTabs.Home, () => Home, store, Provider);
  Navigation.registerComponent(Screens.FooterTabs.Mine, () => Mine, store, Provider);
  Navigation.registerComponent(Screens.Test.Video, () => Video, store, Provider);
  Navigation.registerComponent(Screens.News.NewsContent, () => NewsContent, store, Provider);
  Navigation.registerComponent(Screens.News.Joke, () => Joke, store, Provider);
  Navigation.registerComponent(Screens.News.TextNews, () => TextNews, store, Provider);
  Navigation.registerComponent(Screens.Mine.JobWanted, () => JobWanted, store, Provider);
  Navigation.registerComponent(Screens.Mine.Trade, () => Trade, store, Provider);
  Navigation.registerComponent(Screens.Mine.Rent, () => Rent, store, Provider);
  Navigation.registerComponent(Screens.Mine.Profile, () => Profile, store, Provider);
  Navigation.registerComponent(Screens.News.AdContent, () => AdContent, store, Provider);
  Navigation.registerComponent(Screens.News.JokeContent, () => JokeContent, store, Provider);
  Navigation.registerComponent(Screens.Mine.JobContent, () => JobContent, store, Provider);
  Navigation.registerComponent(Screens.Mine.RentContent, () => RentContent, store, Provider);
  Navigation.registerComponent(Screens.Mine.TradeContent, () => TradeContent, store, Provider);
  Navigation.registerComponent(Screens.Mine.MyBean, () => MyBean, store, Provider);
  Navigation.registerComponent(Screens.Mine.Collection, () => Collection, store, Provider);
  Navigation.registerComponent(Screens.Home.Calender, () => Calender, store, Provider);
}
