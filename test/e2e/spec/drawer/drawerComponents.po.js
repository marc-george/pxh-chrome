/*
 * drawerComponents
 * This page object tests the drawer of pxh-chrome
 *
 * */

'use strict';

var drawerComponents = function () {
  var commonPage = require('../common/common.po.js');
  return {
    getDrawerHeaderLink: function () {
      return browser.driver.findElement(by.css("a.pxh-drawer-header__link"));
    },
    getDrawerToggleLink: function () {
      return browser.driver.findElement(by.css("a.pxh-drawer-toggle__link"));
    },
    clickDrawerToggleLink: function () {
      return this.getDrawerToggleLink().click();
    },
    getLoginProfileLink: function () {
      return browser.driver.findElement(by.css("a.pxh-login__profile-link"));
    },
    clickLoginProfileLink: function () {
      this.getLoginProfileLink().click();
    },
    getLoginName: function () {
      return browser.driver.findElement(by.css(".pxh-login__name"));
    },
    clickLoginName: function () {
      this.getLoginName().click();
    },
    getLoginProfileMenu: function () {
      return browser.driver.findElement(by.css(".pxh-login-menu--profile"));
    },
    getLoginSettingsLink: function () {
      return browser.driver.findElement(by.css("a.pxh-login__settings-link"));
    },
    clickLoginSettingsLink: function () {
      this.getLoginSettingsLink().click();
    },
    getLoginSettingsMenu: function () {
      return browser.driver.findElement(by.css(".pxh-login-menu--settings"));
    }
  };
};
module.exports = new drawerComponents();
