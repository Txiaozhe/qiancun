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
  View
} from "react-native";
import {Container, Content} from 'native-base';
import HeadPhoto from "../components/HeadPhoto";
import Information from "../components/Information";
import {Strings} from "../res";

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Content>
          <HeadPhoto />
          <Information title={Strings.Mine.nickName} content={Strings.Mine.name}/>
          <Information title={Strings.Mine.wechat} content={Strings.Mine.wechatnumber}/>
        </Content>
      </Container>
    );
  }
}
