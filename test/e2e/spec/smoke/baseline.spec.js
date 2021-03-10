// basline.spec.js
/*
 * Test baseline functionality of pxh-chrome
 * */

'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var assert = chai.assert;

describe('The pxh-chrome', function () {

    browser.driver.get('http://localhost:4444');
    browser.driver.manage().window().setSize(1100, 800);
    browser.driver.sleep(1000);

  var commonPage = require('../common/common.po.js');
  var mainComponents    = require('../smoke/mainComponents.po.js');
  var navPage    = require('../drawer/drawerComponents.po.js');

  describe('index page', function () {

    beforeEach(function () {
    });

    it('has a title', function () {
        assert.eventually.include(browser.driver.getTitle(), 'pxh-chrome');
        assert.eventually.include(browser.driver.getTitle(), '3.0.3');
    });

    it('has a drawer', function () {
        assert.eventually.isOk(mainComponents.getDrawer());
    });
    it('has a drawer header', function () {
        assert.eventually.isOk(mainComponents.getDrawerHeader());
    });
    it('has a drawer toggle', function () {
        assert.eventually.isOk(mainComponents.getDrawerToggle());
    });
    it('has a navigation', function () {
        assert.eventually.isOk(mainComponents.getNavigation());
    });
    // it('has a badge', function () {
    //     assert.eventually.isOk(mainComponents.getBadge());
    // });
    it('has a login', function () {
        assert.eventually.isOk(mainComponents.getLogin());
    });
    it('has an overlay', function () {
        assert.eventually.isOk(mainComponents.getOverlay());
    });
    it('has a wrapper ', function () {
        assert.eventually.isOk(mainComponents.getWrapper());
    });
    it('has a view', function () {
        assert.eventually.isOk(mainComponents.getView());
    });
    it('has a view header', function () {
        assert.eventually.isOk(mainComponents.getViewHeader());
    });
    it('has a view header drawer toggle', function () {
        assert.eventually.isOk(mainComponents.getViewHeaderDrawerToggle());
    });
  });
});
