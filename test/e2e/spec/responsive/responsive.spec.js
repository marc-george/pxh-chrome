// responsive.spec.js
/*
* Test viewport changes that trigger responsive design
* */

'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var assert = chai.assert;

describe('pxh-chrome', function () {

  var commonPage = require('../common/common.po.js');
  var mainComponents    = require('../smoke/mainComponents.po.js');
  var drawerComponents = require('../drawer/drawerComponents.po.js');

  it('should hide the drawer by default at the mobile breakpoint', function () {
    browser.driver.manage().window().setSize(400, 800);
    browser.driver.sleep(1000);
    assert.eventually.isOk(mainComponents.getDrawer().isDisplayed());
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtMost(leftPosition, -200);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isNotOk(opacity);
    });
  });

  it('should show the view header drawer toggle button at the mobile breakpoint', function () {
    browser.driver.manage().window().setSize(400, 800);
    assert.eventually.isOk(mainComponents.getViewHeaderDrawerToggle().isDisplayed());
    mainComponents.getViewHeaderDrawerToggle().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtLeast(leftPosition, 0);
    });
  });

  it('should open the drawer when the view header drawer toggle is clicked', function () {
    browser.driver.manage().window().setSize(400, 800);
    mainComponents.clickViewHeaderDrawerToggleLink();
    browser.driver.sleep(1000);
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtLeast(leftPosition, 0);
    });
    mainComponents.getDrawer().getCssValue('width').then(function (drawerWidth) {
      drawerWidth = commonPage.convertPxToNum(drawerWidth);
      assert.isAtLeast(drawerWidth, 200);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isOk(opacity);
    });
  });

  it('should close the drawer when the drawer toggle is clicked', function () {
    browser.driver.manage().window().setSize(400, 800);
    mainComponents.clickDrawerToggleLink();
    browser.driver.sleep(1000);
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtMost(leftPosition, -200);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isNotOk(opacity);
    });
  });

  it('should close the drawer when the overlay is clicked', function () {
    browser.driver.manage().window().setSize(400, 800);
    mainComponents.clickViewHeaderDrawerToggleLink();
    browser.driver.sleep(400);
    browser.driver.actions().mouseMove(mainComponents.getOverlay(), {x: 300, y: 100}).click().perform();
    browser.driver.sleep(400);
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtMost(leftPosition, -200);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isNotOk(opacity);
    });
  });

  it('should show the narrow drawer by default at the tablet breakpoint', function () {
    browser.driver.manage().window().setSize(800, 800);
    browser.driver.sleep(1000);
    assert.eventually.isOk(mainComponents.getDrawer().isDisplayed());
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtLeast(leftPosition, 0);
    });
    mainComponents.getDrawer().getCssValue('width').then(function (drawerWidth) {
      drawerWidth = commonPage.convertPxToNum(drawerWidth);
      assert.isAtMost(drawerWidth, 100);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isNotOk(opacity);
    });
  });

  it('should not show the view header drawer toggle button at the tablet breakpoint', function () {
    browser.driver.manage().window().setSize(800, 800);
    browser.driver.sleep(1000);
    mainComponents.getViewHeaderDrawerToggle().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtMost(leftPosition, -30);
    });
  });

  it('should open the drawer when the view header drawer toggle is clicked', function () {
    browser.driver.manage().window().setSize(800, 800);
    mainComponents.clickDrawerToggleLink();
    browser.driver.sleep(1000);
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtLeast(leftPosition, 0);
    });
    mainComponents.getDrawer().getCssValue('width').then(function (drawerWidth) {
      drawerWidth = commonPage.convertPxToNum(drawerWidth);
      assert.isAtLeast(drawerWidth, 200);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isOk(opacity);
    });
  });

  it('should narrow the drawer when the view header drawer toggle is clicked', function () {
    browser.driver.manage().window().setSize(800, 800);
    mainComponents.clickDrawerToggleLink();
    browser.driver.sleep(1000);
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtLeast(leftPosition, 0);
    });
    mainComponents.getDrawer().getCssValue('width').then(function (drawerWidth) {
      drawerWidth = commonPage.convertPxToNum(drawerWidth);
      assert.isAtMost(drawerWidth, 100);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isNotOk(opacity);
    });
  });

  it('should narrow the drawer when the overlay is clicked', function () {
    browser.driver.manage().window().setSize(800, 800);
    mainComponents.clickDrawerToggleLink();
    browser.driver.sleep(1000);
    browser.driver.actions().mouseMove(mainComponents.getOverlay(), {x: 400, y: 100}).click().perform();
    browser.driver.sleep(1000);
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtLeast(leftPosition, 0);
    });
    mainComponents.getDrawer().getCssValue('width').then(function (drawerWidth) {
      drawerWidth = commonPage.convertPxToNum(drawerWidth);
      assert.isAtMost(drawerWidth, 100);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isNotOk(opacity);
    });
    browser.driver.sleep(1000);
  });

  it('should show the wide drawer at the desktop breakpoint', function () {
    browser.driver.manage().window().setSize(1100, 800);
    browser.driver.sleep(1000);
    assert.eventually.isOk(mainComponents.getDrawer().isDisplayed());
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtLeast(leftPosition, 0);
    });
    mainComponents.getDrawer().getCssValue('width').then(function (drawerWidth) {
      drawerWidth = commonPage.convertPxToNum(drawerWidth);
      assert.isAtLeast(drawerWidth, 200);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isNotOk(opacity);
    });
  });

  it('should narrow the drawer when the view header drawer toggle is clicked', function () {
    browser.driver.manage().window().setSize(1100, 800);
    mainComponents.clickDrawerToggleLink();
    browser.driver.sleep(1000);
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtLeast(leftPosition, 0);
    });
    mainComponents.getDrawer().getCssValue('width').then(function (drawerWidth) {
      drawerWidth = commonPage.convertPxToNum(drawerWidth);
      assert.isAtMost(drawerWidth, 100);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isNotOk(opacity);
    });
  });

  it('should expand the drawer when the view header drawer toggle is clicked', function () {
    browser.driver.manage().window().setSize(1100, 800);
    mainComponents.clickDrawerToggleLink();
    browser.driver.sleep(1000);
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtLeast(leftPosition, 0);
    });
    mainComponents.getDrawer().getCssValue('width').then(function (drawerWidth) {
      drawerWidth = commonPage.convertPxToNum(drawerWidth);
      assert.isAtLeast(drawerWidth, 200);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isNotOk(opacity);
    });
  });

  it('should remember that the drawer is narrow between refreshes', function () {
    browser.driver.manage().window().setSize(1100, 800);
    mainComponents.clickDrawerToggleLink();
    browser.driver.sleep(1000);
    browser.driver.navigate().refresh();
    browser.driver.sleep(2000);
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtLeast(leftPosition, 0);
    });
    mainComponents.getDrawer().getCssValue('width').then(function (drawerWidth) {
      drawerWidth = commonPage.convertPxToNum(drawerWidth);
      assert.isAtMost(drawerWidth, 100);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isNotOk(opacity);
    });
    browser.driver.sleep(1000);
  });

  it('should remember that the drawer is wide between refreshes', function () {
    browser.driver.manage().window().setSize(1100, 800);
    mainComponents.clickDrawerToggleLink();
    browser.driver.sleep(1000);
    browser.driver.navigate().refresh();
    browser.driver.sleep(2000);
    mainComponents.getDrawer().getCssValue('left').then(function (leftPosition) {
      leftPosition = commonPage.convertPxToNum(leftPosition);
      assert.isAtLeast(leftPosition, 0);
    });
    mainComponents.getDrawer().getCssValue('width').then(function (drawerWidth) {
      drawerWidth = commonPage.convertPxToNum(drawerWidth);
      assert.isAtLeast(drawerWidth, 200);
    });
    mainComponents.getOverlay().getCssValue('background-color').then(function (color) {
      var opacity = commonPage.isOpaque(color);
      assert.isNotOk(opacity);
    });
    browser.driver.sleep(1000);
  });
});
