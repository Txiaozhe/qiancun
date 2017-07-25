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
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import {Container, Content} from 'native-base';
import RegisterBar from "../components/RegisterBar";
import {connect} from "react-redux";
import {Register} from "../actions";

import {Styles, Colors, Strings} from "../res";

//todo: 太乱了，改一改！！！
class MyBean extends Component {
  render() {
    const {register} = this.props;
    return (
      <Container style={{width: Styles.Width(720)}}>
        <Content>
          <View
            style={[{height: Styles.Height(370), backgroundColor: Colors.bgGrey}, Styles.Row]}>
            <Text style={styles.numStyle}>
              {Strings.mybean.number}
            </Text>
            <Text style={styles.quanity}>
              {Strings.mybean.quantifier}
            </Text>
          </View>
          <View style={[Styles.Row]}>
            <TouchableOpacity
              disabled={register}
              style={[Styles.Center, {backgroundColor: register ? Colors. fontGrey : Colors.orange, height: Styles.Height(100), width: Styles.Width(358)}]}
              onPress={() => this.register(register)}>
              <Text style={{color: Colors.white, fontSize: Styles.Height(32)}}>
                {register ? Strings.mybean.registered : Strings.mybean.register}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Styles.Center, {backgroundColor: Colors.orange, height: Styles.Height(100), width: Styles.Width(358), marginLeft: Styles.Width(4)}]}
              onPress={() => this.register(register)}>
              <Text style={{color: Colors.white, fontSize: Styles.Height(32)}}>
                {Strings.mybean.share}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[Styles.ColumnCenterInRow, styles.incomeBar]}>
            <Text
              style={{fontSize: Styles.Width(30),color: Colors.black}}>
              {Strings.mybean.income}
            </Text>
          </View>
          <RegisterBar />
          <RegisterBar />
          { register ?
            <RegisterBar />
            : null}
        </Content>
      </Container>
    );
  }

  register = (r) => {
    this.props.dispatch(Register(r));
  }
}

function select(store) {
  return {
    register: store.register.register
  }
}

const styles = {
  numStyle: {
    fontSize: Styles.Height(130),
    color: Colors.black,
    paddingLeft: Styles.Width(80),
    paddingTop: Styles.Height(56)
  },

  quanity: {
    fontSize: Styles.Height(34),
    color: Colors.black,
    paddingTop: Styles.Height(150)
  },

  incomeBar: {
    marginLeft: Styles.Width(30),
    height: Styles.Height(88),
    width: Styles.Width(690),
    borderBottomWidth: 2,
    borderColor: Colors.favoriteGrey
  }
};

export default connect(select) (MyBean);
