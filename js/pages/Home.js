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
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import {Container, Content} from 'native-base';

import NewsBar from "../components/NewsBar";
import {HomeAd} from "../Data/HomeAd";
import IonIcon from "react-native-vector-icons/Ionicons";
import {Styles, Colors, Images, Strings, Screens} from "../res";

export default class Home extends Component {
  render() {
    return (
      <Container style={{backgroundColor: Colors.bgGrey}}>
        <Content>
          <ScrollView style={{backgroundColor: Colors.bgGrey}}>
            <Image style={{height: Styles.Height(350), width: Styles.Width(720)}}
                   source={Images.Home.backgroundImage}>
              <View style={[style.location, Styles.Row]}>
                <IonIcon
                  name={"md-pin"}
                  size={30}
                  color={Colors.white}/>
                <Text style={style.locationText}>{Strings.Home.location}</Text>
              </View>
              <View style={[{marginLeft: Styles.Width(34), backgroundColor: "transparent"}, Styles.Row]}>
                <IonIcon
                  name={"ios-cloudy-night-outline"}
                  size={50}
                  color={Colors.white}/>
                <Text style={style.weatherText}>{Strings.Home.weather}</Text>
              </View>
              <View style={style.temperture}>
                <Text
                  style={{color: Colors.white, fontSize: 30, fontWeight:"900"}}>{Strings.Home.temperatureMin}/{Strings.Home.temperatureMax}</Text>
                <View style={[Styles.Row, {marginTop: Styles.Height(10)}]}>
                  <View
                    style={[{height: Styles.Height(32), width: Styles.Width(90), backgroundColor: Colors.cube}, Styles.Center]}>
                    <Text style={{color: Colors.white, fontSize: 10}}>{Strings.Home.air}</Text>
                  </View>
                  <View
                    style={[{height: Styles.Height(32), width: Styles.Width(90), backgroundColor: Colors.airQuality}, Styles.Center]}>
                    <Text style={{color: Colors.white, fontSize: 10}}>{Strings.Home.airQuality}</Text>
                  </View >
                  <View style={Styles.Center}>
                    <Text
                      style={{color:Colors.white, fontSize: 10}}>{Strings.Home.windSpeed} {Strings.Home.windDirection}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={this.getCalender}
                style={{backgroundColor: "transparent", marginTop: Styles.Height(28)}}>
                <Text style={style.date}>{Strings.Home.date}</Text>
                <Text style={style.week}>{Strings.Home.week}</Text>
              </TouchableOpacity>
            </Image>
            <View style={[style.cubeFirst, Styles.Row, Styles.Center]}>
              <TouchableOpacity onPress={this.JobWanted}>
                <View style={[style.JobWanted]}>
                  <View style={[{height: Styles.Height(180), width: Styles.Width(218)}, Styles.Center]}>
                    <Image source={Images.Cube.person}
                           style={{height: Styles.Height(95), width: Styles.Width(80)}}
                           resizeMode="contain"/>
                  </View>
                  <Text style={{color: Colors.white, paddingLeft: Styles.Width(20)}}>{Strings.Cube.person}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.Trade}>
                <View style={style.trade}>
                  <View style={[{height: Styles.Height(180), width: Styles.Width(218)}, Styles.Center]}>
                    <Image source={Images.Cube.shake}
                           style={{height: Styles.Height(90), width: Styles.Width(105)}}
                           resizeMode="contain"/>
                  </View>
                  <Text style={{color: Colors.white, paddingLeft: Styles.Width(20)}}>{Strings.Cube.shake}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.Rent}>
                <View style={style.rent}>
                  <View style={[{height: Styles.Height(180), width: Styles.Width(218)}, Styles.Center]}>
                    <Image source={Images.Cube.home}
                           style={{height: Styles.Height(95), width: Styles.Width(89)}}
                           resizeMode="contain"/>
                  </View>
                  <Text style={{color: Colors.white, paddingLeft: Styles.Width(20)}}>{Strings.Cube.home}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {HomeAd[0].map((ele, i) => {
              return (
                <NewsBar
                  key={i}
                  title={ele.title}
                  date={ele.date}
                  photo={ele.photo}
                />
              );
            })}
          </ScrollView>
        </Content>
      </Container>
    );
  }

  JobWanted = () => {
    this.props.navigator.push({
      title: Strings.Cube.person,
      screen: Screens.Mine.JobWanted
    });
  };

  Trade = () => {
    this.props.navigator.push({
      title: Strings.Cube.shake,
      screen: Screens.Mine.Trade
    });
  };

  Rent = () => {
    this.props.navigator.push({
      title: Strings.Cube.home,
      screen: Screens.Mine.Rent
    });
  };

  getCalender = () => {
    this.props.navigator.push({
      title: Strings.Home.calender,
      screen: Screens.Home.Calender
    });
  }
}



const style = {
  location: {
    marginTop: Styles.Height(52),
    marginLeft: Styles.Height(44),
    marginBottom: Styles.Height(32),
    marginRight: Styles.Height(16),
    backgroundColor: "transparent"
  },

  locationText: {
    padding: Styles.Width(16),
    color: Colors.white,
    fontWeight: "900",
    fontSize: 15
  },

  weatherText: {
    color: Colors.white,
    fontWeight: "900",
    fontSize: 13,
    paddingTop: Styles.Height(58),
    paddingLeft: Styles.Width(10)
  },

  temperture: {
    backgroundColor: "transparent",
    marginLeft: Styles.Width(34),
    marginTop: Styles.Height(230),
    position: "absolute"
  },

  date: {
    textAlign: "right",
    color: Colors.white,
    fontSize: 15,
    paddingRight: 10,
    fontWeight: "400"
  },

  week: {
    textAlign: "right",
    color: Colors.white,
    fontSize: 15,
    paddingRight: 10,
    fontWeight: "bold"
  },

  cubeFirst: {
    backgroundColor: Colors.white,
    height: Styles.Height(238),
    width: Styles.Width(720)
  },

  JobWanted: {
    height: Styles.Height(218),
    width: Styles.Width(218),
    backgroundColor: Colors.cube,
    marginLeft: Styles.Width(24)
  },

  trade: {
    height: Styles.Height(218),
    width: Styles.Width(218),
    backgroundColor: Colors.cube,
    marginLeft: Styles.Width(10)
  },

  rent: {
    height: Styles.Height(218),
    width: Styles.Width(218),
    backgroundColor: Colors.cube,
    marginLeft: Styles.Width(10),
    marginRight: Styles.Width(24)
  }
};
