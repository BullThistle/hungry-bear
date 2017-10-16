(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var bear = exports.bear = {
  foodLevel: 10,
  setHunger: function setHunger() {
    var _this = this;

    var hungerInterval = setInterval(function () {
      _this.foodLevel--;
      if (_this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function feed(amount) {
    var that = this;
    return function (food) {
      that.foodLevel += amount;
      return "The bear ate the " + food + "! Food level goes up " + amount + "!";
    };
  }
};

},{}],2:[function(require,module,exports){
'use strict';

var _hungrybear = require('./../js/hungrybear.js');

$(document).ready(function () {});

},{"./../js/hungrybear.js":1}]},{},[2]);
