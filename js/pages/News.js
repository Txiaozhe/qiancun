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
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import {Container, Content} from 'native-base';
import {Styles, Strings, Colors, Screens, Images} from "../res";
import {NewsData} from "../Data/NewsData";
import NewsBar from "../components/NewsBar";
import NewsTag from "../components/NewsTag";

export default class News extends Component {
  render() {
    return (
      <Container>
        <Content>
        <View style={[Styles.Center, {backgroundColor: Colors.white, height: Styles.Height(114)}]}>
          <View style={[style.newsTag, Styles.Row, Styles.Center]}>
            <NewsTag
              name={Strings.Tags.News}
              margin={Styles.Width(136/3)}
              title={Strings.Tags.News}
              screen={Screens.News.NewsContent}
              navigator={this.props.navigator} />
            <NewsTag
              name={Strings.Tags.TextNews}
              margin={Styles.Width(136/3)}
              title={Strings.Tags.TextNews}
              screen={Screens.News.TextNews}
              navigator={this.props.navigator} />
            <NewsTag
              name={Strings.Tags.Speech}
              margin={Styles.Width(136/3)}
              title={Strings.Tags.Speech}
              screen={Screens.News.TextNews}
              navigator={this.props.navigator} />
            <NewsTag
              name={Strings.Tags.Joke}
              margin={0}
              title={Strings.Tags.Joke}
              screen={Screens.News.Joke}
              navigator={this.props.navigator} />
          </View>
        </View>
        <ScrollView style={{backgroundColor: Colors.favoriteGrey, height: Styles.Height(1280)}}>
          {NewsData[0].map((ele, i) => {
            return (
              <NewsBar
                key={i}
                title={ele.title}
                date={ele.date}
                share={ele.share}
                viewed={ele.viewed}
                photo={ele.photo} />
            );
          })}
          <View style={[{marginTop: Styles.Height(10), height: Styles.Height(496), backgroundColor: Colors.white}]}>
            <TouchableOpacity
              style={[{backgroundColor: Colors.bgGrey, height: Styles.Height(406)}, Styles.Center]}
              onPress={this.onVideo}>
              <Image
                source={Images.play}
                style={{height:Styles.Height(150), width: Styles.Width(150)}} />
            </TouchableOpacity>
            <View style={[{height: Styles.Height(90)}, Styles.ColumnCenterInRow]}>
              <Text style={{fontSize: Styles.Width(34), paddingLeft: Styles.Width(30)}}>{Strings.News.Video}</Text>
            </View>
          </View>
          <NewsBar
            title={Strings.News.Info}
            date={Strings.News.date}
            share={Strings.News.share}
            viewed={Strings.News.viewed} />
          <View>
            <View style={{backgroundColor: Colors.bgGrey, height:Styles.Height(406)}}>
            </View>
            <View style={[{height: Styles.Height(90)}, Styles.ColumnCenterInRow]}>
              <Text style={{fontSize: Styles.Width(34), paddingLeft: Styles.Width(30)}}>{Strings.News.Video}</Text>
            </View>
          </View>
        </ScrollView>
        </Content>
      </Container>
    );
  }

  onVideo = () => {
    this.props.navigator.push({
      title: "video",
      screen: Screens.Test.Video
    });
  };
}

const style = {
  newsTag: {
    width: Styles.Width(552),
    height: Styles.Height(114),
    backgroundColor: Colors.white
  },

  tagStyle: {
    width: Styles.Width(104),
    height: Styles.Height(54),
    borderWidth: 1,
    borderColor: Colors.normalGrey,
    borderRadius: 18,
    flex: 1
  },

  video: {
    marginTop: Styles.Height(10),
    height: Styles.Height(496),
    backgroundColor: Colors.white
  }
};
