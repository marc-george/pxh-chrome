// drawer.spec.js
/*
 * Test functionality of pxh-chrome drawer and navigation
 * */

'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var assert = chai.assert;

describe('The pxh-drawer', function () {

  var commonPage = require('../common/common.po.js');
  var mainComponents    = require('../smoke/mainComponents.po.js');
  var drawerComponents = require('../drawer/drawerComponents.po.js');

  it('has a header link', function () {
    assert.eventually.isOk(drawerComponents.getDrawerHeaderLink());
  });
  it('has a toggle link', function () {
    assert.eventually.isOk(drawerComponents.getDrawerToggleLink());
  });

  it('has a login profile link', function () {
    assert.eventually.isOk(drawerComponents.getLoginProfileLink());
  });

  it('has a login profile menu that opens when its trigger is clicked', function () {
    assert.eventually.isNotOk(drawerComponents.getLoginProfileMenu().isDisplayed());
    drawerComponents.clickLoginProfileLink();
    assert.eventually.isOk(drawerComponents.getLoginProfileMenu().isDisplayed());
  });
  it('has a login profile menu that closes when its trigger is clicked', function () {
      drawerComponents.clickLoginName(); // click the name rather than the link because the menu positions over the link
      assert.eventually.isNotOk(drawerComponents.getLoginProfileMenu().isDisplayed());
  });
  it('has a login profile menu that closes when the user clicks anywhere (e.g. the view header)', function () {
      drawerComponents.clickLoginProfileLink();
      assert.eventually.isOk(drawerComponents.getLoginProfileMenu().isDisplayed());
      mainComponents.clickViewHeader();
      assert.eventually.isNotOk(drawerComponents.getLoginProfileMenu().isDisplayed());
  });

  it('has a login settings link', function () {
    assert.eventually.isOk(drawerComponents.getLoginSettingsLink());
  });
  it('has a login settings menu that opens when its trigger is clicked', function () {
    assert.eventually.isNotOk(drawerComponents.getLoginSettingsMenu().isDisplayed());
    drawerComponents.clickLoginSettingsLink();
    assert.eventually.isOk(drawerComponents.getLoginSettingsMenu().isDisplayed());
  });
  it('has a login settings menu that closes when its trigger is clicked', function () {
    drawerComponents.clickLoginSettingsLink();
    assert.eventually.isNotOk(drawerComponents.getLoginSettingsMenu().isDisplayed());
  });
  it('has a login settings menu that closes when the user clicks anywhere (e.g. the view header)', function () {
    drawerComponents.clickLoginSettingsLink();
    assert.eventually.isOk(drawerComponents.getLoginSettingsMenu().isDisplayed());
    mainComponents.clickViewHeader();
    assert.eventually.isNotOk(drawerComponents.getLoginSettingsMenu().isDisplayed());
  });
});
