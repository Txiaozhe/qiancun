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
  Image,
  Button,
  TouchableOpacity,
  Animated
} from "react-native";
import {Container, Content} from 'native-base';
import {Styles, Strings, Colors, Images, Screens} from "../res";
import MineBar from "../components/MineBar";
import {connect} from "react-redux";
import {Register} from "../actions";

const ANIMATE_INTERVAL = 1500;
class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }
  render() {
    const {register} = this.props;
    return (
      <Container>
        <Content>
          <View style={{backgroundColor: Colors.bgGrey}}>
            <Image
              style={[Styles.Center, {height: Styles.Height(342), width: Styles.Width(720)}]}
              source={Images.Mine.backgroundImage}>
              <View style={Styles.Center}>
                <TouchableOpacity onPress={this.Profile}>
                  <Image
                    style={style.backgroundImage}
                    source={Images.Mine.headPhoto}
                    resizeMode="stretch" />
                </TouchableOpacity>
                <TouchableOpacity style={[style.loginText, Styles.Center]}>
                  <Text style={{color: Colors.white}}>{Strings.Mine.Login}</Text>
                </TouchableOpacity>
              </View>
            </Image>
            <View style={{height: Styles.Height(12), backgroundColor: Colors.white}} />
            <MineBar
              title={Strings.MineBar.Ebean}
              icon={Images.MineBar.Ebean}
              onClick={this.onKnock} />
            <MineBar
              title={Strings.MineBar.collection}
              icon={Images.MineBar.collection}
              onClick={this.onJump} />

            <View style={{position: "absolute", marginTop: Styles.Height(24)}}>
              <View style={{backgroundColor: "transparent", height: Styles.Height(40)}}>
                { register ? <Animated.Text
                  style={[style.eBeanAdd, {opacity: this.state.fadeAnim}]}>{Strings.Mine.plusOne}</Animated.Text> : null}
              </View>
              <TouchableOpacity
                disabled={register}
                onPress={() => this.Onclick(register)}
                style={[style.register, Styles.Center, {backgroundColor: register ? Colors.favoriteGrey : Colors.orange}]}>
                { register ? <Text style={{color: Colors.white}}>{Strings.Mine.registered}</Text> :
                  <Text style={{color: Colors.white}}>{Strings.Mine.register}</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }

  //todo: 1、签到一次并重新打开后依然可以点击签到，应该考虑一下状态问题  2、点击一次后只是让按钮透明度变化但实际上仍然可以点击，应考虑点击一次后禁止用户点击
  Onclick = (r) => {
    if(this.props.register === false){
    this.props.dispatch(Register(r));
      Animated.timing(
        this.state.fadeAnim,//初始值
        {toValue: 1}//结束值
      ).start();//开始
      setTimeout(() => {
        Animated.timing(
          this.state.fadeAnim,//初始值
          {toValue: 0}//结束值
        ).start();
      }, ANIMATE_INTERVAL); }//todo: 这种数字最好设置一个常量，比如这里可以现在开头定义： 这样别人看到了马上就明白这个是干嘛的

  };

  onKnock = () => {
    this.props.navigator.push({
      title: Strings.Mine.Ebean,
      screen: Screens.Mine.MyBean
    });
  };

  Profile = () => {
    this.props.navigator.push({
      title: Strings.Mine.Profile,
      screen: Screens.Mine.Profile
    });
  };

  onJump = () => {
    this.props.navigator.push({
      title: Strings.Mine.collection,
      screen: Screens.Mine.Collection
    });
  }
}

function select(store) {
  return {
    register: store.register.register
  }
}

const style = {
  backgroundImage: {
    height: Styles.Height(128),
    width: Styles.Width(128),
    borderRadius: Styles.Width(64),
    borderColor: Colors.favoriteGrey,
    borderWidth: 1
  },

  loginText: {
    height: Styles.Height(48),
    width: Styles.Width(170),
    marginTop: Styles.Height(14),
    backgroundColor: Colors.orange,
    borderRadius: Styles.Height(15),
    borderWidth: 1,
    borderColor: Colors.orange
  },

  eBeanAdd: {
    textAlign: "right",
    paddingRight: Styles.Width(10),
    paddingBottom: Styles.Height(20),
    color: Colors.orange
  },

  register: {
    height: Styles.Height(44),
    width: Styles.Width(138),
    marginLeft: Styles.Width(564)
  }
};

export default connect(select) (Mine);
