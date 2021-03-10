/*
 * mainComponents
 * This page object tests the main components of pxh-chrome
 *
 * */

'use strict';

(function () {
  var mainComponents = function () {
    return {
      getDrawer: function () {
        return browser.driver.findElement(by.css('.pxh-drawer'));
      },
      getDrawerHeader: function () {
        return browser.driver.findElement(by.css('.pxh-drawer-header'));
      },
      getDrawerToggle: function () {
        return browser.driver.findElement(by.css('.pxh-drawer-toggle'));
      },
      getDrawerToggleLink: function () {
        return browser.driver.findElement(by.css('a.pxh-drawer-toggle__link'));
      },
      clickDrawerToggleLink: function () {
        this.getDrawerToggleLink().click();
      },
      getNavigation: function () {
        return browser.driver.findElement(by.css('.pxh-navigation'));
      },
      getBadge: function () {
        return browser.driver.findElement(by.css('.pxh-badge'));
      },
      getLogin: function () {
        return browser.driver.findElement(by.css('.pxh-login'));
      },
      getOverlay: function () {
        return browser.driver.findElement(by.css('.pxh-overlay'));
      },
      getWrapper: function () {
        return browser.driver.findElement(by.css('.pxh-wrapper'));
      },
      getViewHeader: function () {
        return browser.driver.findElement(by.css('.pxh-view-header'));
      },
      clickViewHeader: function () {
        this.getViewHeader().click();
      },
      getViewHeaderDrawerToggle: function () {
        return browser.driver.findElement(by.css('.pxh-view-header-drawer-toggle'));
      },
      getViewHeaderDrawerToggleLink: function () {
        return browser.driver.findElement(by.css('a.pxh-view-header-drawer-toggle__link'));
      },
      clickViewHeaderDrawerToggleLink: function () {
        this.getViewHeaderDrawerToggleLink().click();
      },
      getView: function () {
        return browser.driver.findElement(by.css('.pxh-view'));
      }
    };
  };
  module.exports = new mainComponents();
}());
