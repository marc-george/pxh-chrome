/*
 * toastComponents
 * This page object tests the toasts of pxh-chrome
 *
 * */

'use strict';

var toastComponents = function () {
  var commonPage = require('../common/common.po.js');
  return {
    getToastsContainer: function () {
      return browser.driver.findElement(by.css(".pxh-toasts"));
    },
    getToast: function () {
      return browser.driver.findElement(by.css(".pxh-toast"));
    },
    getToastIcon: function () {
      return browser.driver.findElement(by.css(".pxh-toast__icon .fa"));
    },
    getToastText: function () {
      return browser.driver.findElement(by.css(".pxh-toast__text"));
    },
    // getToastMoreButton: function () {
    //   return browser.driver.findElement(by.css("a.pxh-toast__more-button"));
    // },
    // getToastAction: function () {
    //   return browser.driver.findElement(by.css("a.pxh-toast__action"));
    // },
    getToastButton: function () {
      return browser.driver.findElement(by.css("a.pxh-toast__button"));
    },
    getToastDismissButton: function () {
      return browser.driver.findElement(by.css("a.pxh-toast__dismiss-button"));
    },
    clickToastDismissButton: function () {
      this.getToastDismissButton().click();
    },





    getNotificationsIcon: function () {
      return browser.driver.findElement(by.css(".pxh-login__notifications"));
    },
    getNotificationsIconBadge: function () {
      return browser.driver.findElement(by.css(".pxh-login__notifications-badge"));
    },
    getNotificationsIconLink: function () {
      return browser.driver.findElement(by.css("a.pxh-login__notifications-link"));
    },
    clickNotificationsIcon: function () {
      this.getNotificationsIcon().click();
    },

    getNotificationsContainer: function () {
      return browser.driver.findElement(by.css(".pxh-notifications"));
    },

    getNotification: function () {
      return browser.driver.findElement(by.css(".pxh-notification"));
    },
    getNotificationIcon: function () {
      return browser.driver.findElement(by.css(".pxh-notification__icon .fa"));
    },
    getNotificationText: function () {
      return browser.driver.findElement(by.css(".pxh-notification__text"));
    },
    getNotificationLink: function () {
      return browser.driver.findElement(by.css(".pxh-notification__link"));
    },
    getNotificationTimestamp: function () {
      return browser.driver.findElement(by.css(".pxh-notification__timestamp"));
    },
    getNotificationMoreButton: function () {
      return browser.driver.findElement(by.css("a.pxh-notification__more-button"));
    },
    getNotificationDismissButton: function () {
      return browser.driver.findElement(by.css("a.pxh-notification__dismiss-button"));
    },
  };
};
module.exports = new toastComponents();
