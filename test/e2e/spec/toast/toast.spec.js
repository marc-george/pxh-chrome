// drawer.spec.js
/*
 * Test functionality of pxh-chrome drawer and navigation
 * */

'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var assert = chai.assert;

describe('pxh-toast', function () {
  var commonPage = require('../common/common.po.js');
  var mainComponents    = require('../smoke/mainComponents.po.js');
  var drawerComponents = require('../drawer/drawerComponents.po.js');
  var toastComponents = require('../toast/toastComponents.po.js');

  before(function () {
    browser.driver.get('http://localhost:4444/demo-toasts.html');
    browser.driver.sleep(250);
  });

  it('has a title with \'Toasts\' and \'Notifications\' in the name', function () {
      assert.eventually.include(browser.driver.getTitle(), 'Toasts');
      assert.eventually.include(browser.driver.getTitle(), 'Notifications');
  });
  it('has a toast container', function () {
    assert.eventually.isOk(toastComponents.getToastsContainer().isDisplayed());
  });
  it('has a toast', function () {
    assert.eventually.isOk(toastComponents.getToast().isDisplayed());
  });
  it('toast has an icon', function () {
    assert.eventually.isOk(toastComponents.getToastIcon().isDisplayed());
  });
  it('toast has text', function () {
    assert.eventually.isOk(toastComponents.getToastText().isDisplayed());
  });
  it('toast has a dismiss button', function () {
    assert.eventually.isOk(toastComponents.getToastDismissButton().isDisplayed());
  });
  // it('toast has an icon background color', function () {
  // });
  // it('overflowing toast text is hidden', function () {
  // });
  // it('toast has a more button', function () {
  //   assert.eventually.isOk(toastComponents.getToastMoreButton().isDisplayed());
  // });
  // it('clicking toast more button shows all text', function () {
  // });
  // it('clicking toast more button again collapses text', function () {
  // });
  // it('toast has an action button', function () {
  //   assert.eventually.isOk(toastComponents.getToastButton().isDisplayed());
  // });
  // it('clicking toast action url button takes you to another page', function () {
  // });
  // it('toast has an action callback button', function () {
  // });
  // it('clicking toast action callback button fires a callback', function () {
  // });
  // it('clicking toast dismiss button dismisses the toast', function () {
  //   toastComponents.clickToastDismissButton();
  // });

  // toasts on tablet

  // toasts on mobile

  // notification icon
  it('has a notification icon', function () {
    assert.eventually.isOk(toastComponents.getNotificationsIcon().isDisplayed());
  });
  it('has a notification icon link', function () {
    assert.eventually.isOk(toastComponents.getNotificationsIconLink().isDisplayed());
  });
  it('has a notification icon badge', function () {
    assert.eventually.isOk(toastComponents.getNotificationsIconBadge().isDisplayed());
  });

  it('has a hidden notifications container', function () {
    assert.eventually.isNotOk(toastComponents.getNotificationsContainer().isDisplayed());
  });

  it('clicking the notifications icon displays the notifications container', function () {
    toastComponents.clickNotificationsIcon();
    browser.driver.sleep(250);
    assert.eventually.isOk(toastComponents.getNotificationsContainer().isDisplayed());
  });

  it('clicking the notifications icon again hides the notifications container', function () {
    browser.driver.actions().click().perform();
    browser.driver.sleep(250);
    assert.eventually.isNotOk(toastComponents.getNotificationsContainer().isDisplayed());
  });

  it('clicking outside the notifications container hides the notifications container', function () {
    toastComponents.clickNotificationsIcon();
    browser.driver.sleep(250);
    assert.eventually.isOk(toastComponents.getNotificationsContainer().isDisplayed());
    browser.driver.actions().mouseMove({x: 200, y: 10}).click().perform();
    browser.driver.sleep(250);
    assert.eventually.isNotOk(toastComponents.getNotificationsContainer().isDisplayed());
  });

  // notification list clear button

  it('has a notification', function () {
    toastComponents.clickNotificationsIcon();
    browser.driver.sleep(250);
    assert.eventually.isOk(toastComponents.getNotification().isDisplayed());
  });

  it('notification has an icon', function () {
    assert.eventually.isOk(toastComponents.getNotificationIcon().isDisplayed());
  });

  it('notification has text', function () {
    assert.eventually.isOk(toastComponents.getNotificationText().isDisplayed());
  });

  it('notification has a link', function () {
    assert.eventually.isOk(toastComponents.getNotificationLink().isDisplayed());
  });

  it('notification has a more button', function () {
    assert.eventually.isOk(toastComponents.getNotificationMoreButton().isDisplayed());
  });

  it('notification has a dismiss button', function () {
    assert.eventually.isOk(toastComponents.getNotificationDismissButton().isDisplayed());
  });

  it('notification has a formatted timestamp', function () {
    assert.eventually.isOk(toastComponents.getNotificationTimestamp().isDisplayed());
  });

  it('notification icon badge is visible when drawer is narrow', function () {
    browser.driver.actions().click().perform();
    drawerComponents.clickDrawerToggleLink();
    browser.driver.sleep(500);
    assert.eventually.isOk(toastComponents.getNotificationsIconBadge().isDisplayed());
    assert.eventually.isNotOk(toastComponents.getNotificationsIconLink().isDisplayed());
  });

  it('notification icon badge is visible at medium breakpoint', function () {
    drawerComponents.clickDrawerToggleLink();
    browser.driver.sleep(500);
    browser.driver.manage().window().setSize(800, 800);
    browser.driver.sleep(500);
    assert.eventually.isOk(toastComponents.getNotificationsIconBadge().isDisplayed());
    assert.eventually.isNotOk(toastComponents.getNotificationsIconLink().isDisplayed());
  });

  // it('notification has a raw timestamp', function () {
  // });

  // notifications on tablet

  // notifications on mobile

});
