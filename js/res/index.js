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

import {String} from "./lang/zh_cn/string";
import {Color} from "./styles/colors";
import {Dimen} from "./styles/dimens";
import {Url} from "./net/urls";
import {Route} from "./config/route";
import {Action} from "./config/actions";
import {Device} from "./device/device";
import {Image} from "./imgs/images";
import {Error} from "./info/err";
import {Style} from "./styles/styles";
import {Event} from "./config/events";
import {Screen} from "./config/screen";
import getTheme from "../native-base-theme/components";

export const Strings = String;
export const Colors = Color;
export const Dimens = Dimen;
export const Urls = Url;
export const Routes = Route;
export const Actions = Action;
export const Devices = Device;
export const Images = Image;
export const Errors = Error;
export const Styles = Style;
export const Events = Event;
export const Screens = Screen;
export const NativeBaseTheme = getTheme();
