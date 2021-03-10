/*
 * commonPage
 * This page object contains commonly used utilities
 *
 * */

'use strict';

(function () {

  var commonPage = function () {

    return {
      //check to see if an element has such css class provided
       hasClass: function (ele, cls) {
        return ele.getAttribute('class').then(function (classes) {
          return classes.split(' ').indexOf(cls) !== -1;
        });
      },

      convertPxToNum: function (px) {
        return parseInt(px, 10);
      },

      parseColor: function (input) {
        if (input === 'transparent') {
          return input;
        }
        else if (input) {
          var regex = /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\.\d]+)\s*\)$/i
          var matches = regex.exec(input);
          if (matches) return matches;
        }
        else throw new Error("Color " + input + " could not be parsed.");
      },

      isOpaque: function (input) {
        if (input === 'transparent') {
          return false;
        }
        else if (input) {
          var regex = /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\.\d]+)\s*\)$/i
          var matches = regex.exec(input);
          if (parseFloat(matches[4]) === 0) return false;
          else {
            return true;
          }
        }
        else throw new Error("Color " + input + " could not be parsed.");
      },

      // To generate a random String name
      getRandomString: function () {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = 8;
        var randomstring = '';
        for (var i = 0; i < string_length; i++) {
          var rnum = Math.floor(Math.random() * chars.length);
          randomstring += chars.substring(rnum, rnum + 1);
        };
        return randomstring;
      },

      waitForElement: function (elementToWait) {
        var EC = protractor.ExpectedConditions;
        var microappContent = element(by.css(elementToWait));
        browser.wait(EC.presenceOf(microappContent), 10000);
      },

      waitForUrlToChange: function (urlToWait) {
        var currentUrl;
        return browser.getCurrentUrl()
        .then(function storeCurrentUrl(url) {
          currentUrl = url;
          })
        .then(function waitForUrlToChangeTo() {
           return browser.wait(function waitForUrlToChangeTo() {
           return browser.getCurrentUrl().then(function compareCurrentUrl(url) {
             return urlToWait == url;
           });
           });
         });
      },

      navigateToUrl: function (url) {
        browser.driver.get(url);
        this.waitForUrlToChange(url);
      },

      getErrorMessage: function () {
        //
      },

      getSuccessMessage: function () {
        //
      },

      // Choose SelectField
      // Click an option under a select tag
      // Passing a selector, index of the option, and text that matches the text under the select menu
      selectSelectorField : function (selector, index , text){
        return element(selector).all(by.css('option')).then(function (eles) {
          return eles[index].getText().then(function doesOptionMatch(txt){
            if (txt === text){
              return eles[index].click();
            }
          });
        });
      }
    };
  };
  module.exports = new commonPage();
}());
