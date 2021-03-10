// test.js
/*
* Unit tests for pxh-chrome
* */

'use strict';

// clear all cookies to make sure we're testing the current state of the codebase
pxh.Cookies.removeAll();

// set a cookie to test getting
pxh.Cookies.set('qa-cookie-set', 'qa-cookie-is-set', {expires: 1, path: '/'});
// get the cookie and assign it to a variable
let testCookie = (pxh.Cookies.get('qa-cookie-set'));

// set a cookie to test removing
pxh.Cookies.set('qa-cookie-remove', 'qa-cookie-to-remove', {expires: 1, path: '/'});
// remove the cookie
pxh.Cookies.remove('qa-cookie-remove');
let removedTestCookie = (pxh.Cookies.get('qa-cookie-remove'));

// create a state object for testing purposes
let testStatesObject = {
  'stateOne' : {
    'qa-item-one' : {
      'remove' : 'qa-item-one--state-two',
      'add' : 'qa-item-one--state-one',
    },
    'qa-item-two' : {
      'remove' : 'qa-item-two--state-two',
      'add' : 'qa-item-two--state-one',
    },
  },
  'stateTwo' : {
    'qa-item-one' : {
      'remove' : 'qa-item-one--state-one',
      'add' : 'qa-item-one--state-two',
    },
    'qa-item-two' : {
      'remove' : 'qa-item-two--state-one',
      'add' : 'qa-item-two--state-two',
    },
  }
}

// create a nav object for testing internationalization/localization via App Hub
window.nav = {
  localeData: {
    toastTextDefault: '[EN] You received a new notification.',
    toastActionLabelDefault: '[EN] Action'
  }
}

// assign individual test states from the test states object to variables
let testStateOne = pxh.getItemByPropertyName(testStatesObject, 'stateOne');
let testStateTwo = pxh.getItemByPropertyName(testStatesObject, 'stateTwo');

// create element to manipulate by toggling state
let stateItemOne = document.createElement('div');
stateItemOne.classList.add('qa-item-one');
stateItemOne.classList.add('qa-item-one--state-one');
document.body.appendChild(stateItemOne);

// create element to manipulate by toggling state
let stateItemTwo = document.createElement('div');
stateItemOne.classList.add('qa-item-two');
stateItemOne.classList.add('qa-item-two--state-one');
document.body.appendChild(stateItemTwo);

// create element to test adding a single class
let addClass = document.createElement('div');
addClass.classList.add('qa-target-add');
document.body.appendChild(addClass);

// create element to test adding multiple classes
let addMultipleClasses = document.createElement('div');
addMultipleClasses.classList.add('qa-target-add-multiple');
document.body.appendChild(addMultipleClasses);

// create element to test removing a single class
let removeClass = document.createElement('div');
removeClass.classList.add('qa-target-removed');
removeClass.classList.add('qa-remove');
document.body.appendChild(removeClass);

// create element to test removing multiple classes
let removeMultipleClasses = document.createElement('div');
removeMultipleClasses.classList.add('qa-target-removed-multiple');
removeMultipleClasses.classList.add('qa-remove-multiple-one');
removeMultipleClasses.classList.add('qa-remove-multiple-two');
document.body.appendChild(removeMultipleClasses);

// create element to test toggling multiple classes on multiple targets
let toggleMultipleClassesOnMultipleTargetsOne = document.createElement('div');
toggleMultipleClassesOnMultipleTargetsOne.classList.add('qa-target-toggle');
toggleMultipleClassesOnMultipleTargetsOne.classList.add('qa-toggle-remove');
document.body.appendChild(toggleMultipleClassesOnMultipleTargetsOne);

// create element to test toggling multiple classes on multiple targets
let toggleMultipleClassesOnMultipleTargetsTwo = document.createElement('div');
toggleMultipleClassesOnMultipleTargetsTwo.classList.add('qa-target-toggle-multiple');
toggleMultipleClassesOnMultipleTargetsTwo.classList.add('qa-toggle-remove-multiple-one');
toggleMultipleClassesOnMultipleTargetsTwo.classList.add('qa-toggle-remove-multiple-two');
document.body.appendChild(toggleMultipleClassesOnMultipleTargetsTwo);

// create elements to test pxh.toast.badge.update
let notificationsIcon = document.createElement('div');
notificationsIcon.id = 'js-login__notifications';
document.body.appendChild(notificationsIcon);

let notificationsBadge = document.createElement('div');
notificationsBadge.id = 'js-login__notifications-badge';
document.body.appendChild(notificationsBadge);

// create element for inserting toasts
let toasts = document.createElement('div');
toasts.id = 'js-toasts';
document.body.appendChild(toasts);

// create element for inserting notifications
let notifications = document.createElement('div');
notifications.id = 'js-notifications__list';
document.body.appendChild(notifications);

let toastCallback = function() {
  console.log('toast callback fired!');
}

let toastObject1 = {};
let toastObject2 = {
  isPersistent: true,
  text: 'Persistent toast w/o link or action',
};
let toastObject3 = {
  isPersistent: true,
  actionLink: 'http://predix.com/'
};
let toastObject4 = {
  isPersistent: true,
  actionCallback: toastCallback,
  text: 'Persistent toast w/ callback',
};
let toastObject5 = {
  suppressToast: true,
  isPersistent: true,
  actionLink: 'http://predix.com/',
  text: 'Persistent notification w/ suppressed toast',
};
let toastObject6 = {
  id: 'b4d455',
  isPersistent: true,
  actionLink: 'http://predix.com/',
  type: 'red',
  formattedTimestamp: '8:30 AM',
  actionLabel: 'Custom action label',
  text: '<strong>Persistent</strong> <a href="http://predix.com/">toast</a> with <div class="qa-toast-bogus-class" id="qa-toast-bogus-id"><span>HTML</span></div>',
};
let toastObject7 = {
  id: 'qaTimestamp',
  isPersistent: true,
  actionLink: 'http://predix.com/',
  timestamp: '2016-08-01T17:36:10+00:00',
};

// fire the changes for pxh.changeClasses
pxh.changeClasses('qa-target-add', 'add', 'qa-added');
pxh.changeClasses('qa-target-add-multiple', 'add', 'qa-added-multiple-one qa-added-multiple-two');
pxh.changeClasses('qa-target-removed', 'remove', 'qa-remove');
pxh.changeClasses('qa-target-removed-multiple', 'remove', 'qa-remove-multiple-one qa-remove-multiple-two');
pxh.changeClasses('qa-target-toggle-multiple', 'toggle', 'qa-toggle-add-multiple-one qa-toggle-add-multiple-two qa-toggle-remove-multiple-one qa-toggle-remove-multiple-two');

// fire the changes for pxh.loadState
pxh.loadState(testStatesObject, 'stateTwo');

describe('pxh-chrome.js', () => {
  describe('pxh.Cookies', () => {
    it('pxh.Cookies.set should set a cookie', () => {
      assert.include(document.cookie, 'qa-cookie-is-set');
      assert.include(document.cookie, 'qa-cookie-set');
    });
    it('pxh.Cookies.get should get a cookie', () => {
      assert.strictEqual(testCookie, 'qa-cookie-is-set');
    });
    it('pxh.Cookies.remove should remove a cookie', () => {
      assert.notInclude(document.cookie, 'qa-cookie-remove');
      assert.notInclude(document.cookie, 'qa-cookie-to-remove');
      assert.isNotOk(removedTestCookie, 'qa-cookie-remove');
    });
    it('pxh.Cookies.removeAll should remove all cookies', () => {
      pxh.Cookies.removeAll();
      assert.isNotOk(document.cookie, 'document.cookie is empty');
    });
  });
  describe('pxh.getItemByPropertyName', () => {
    it('pxh.getItemByPropertyName returns the stateOne object by property', () => {
      assert.isObject(testStateOne, 'testStateOne is an object');
    });
    it('pxh.getItemByPropertyName returns the drawerClosedState object by property', () => {
      assert.isObject(testStateTwo, 'stateTwo is an object');
    });
  });
  describe('pxh.changeClasses', () => {
    it('pxh.changeClasses added a class to a target class element', () => {
      assert.deepEqual(document.getElementsByClassName('qa-target-add'), document.getElementsByClassName('qa-added'));
    });
    it('pxh.changeClasses added multiple classes to a target class element', () => {
      assert.deepEqual(document.getElementsByClassName('qa-target-add-multiple'), document.getElementsByClassName('qa-added-multiple-one'));
      assert.deepEqual(document.getElementsByClassName('qa-target-add-multiple'), document.getElementsByClassName('qa-added-multiple-two'));
    });
    it('pxh.changeClasses removes a class from a target class element', () => {
      assert.notDeepEqual(document.getElementsByClassName('qa-target-removed'), document.getElementsByClassName('qa-remove'));
    });
    it('pxh.changeClasses removes multiple classes from a target class element', () => {
      assert.notDeepEqual(document.getElementsByClassName('qa-target-removed-multiple'), document.getElementsByClassName('qa-remove-multiple-one'));
      assert.notDeepEqual(document.getElementsByClassName('qa-target-removed-multiple'), document.getElementsByClassName('qa-remove-multiple-two'));
    });
    it('pxh.changeClasses toggles (adds) a class on a target class element', () => {
      assert.deepEqual(document.getElementsByClassName('qa-target-toggle-multiple'), document.getElementsByClassName('qa-toggle-add-multiple-one'));
      assert.deepEqual(document.getElementsByClassName('qa-target-toggle-multiple'), document.getElementsByClassName('qa-toggle-add-multiple-two'));
    });
    it('pxh.changeClasses toggles (removes) a class on a target class element', () => {
      assert.notDeepEqual(document.getElementsByClassName('qa-target-toggle-multiple'), document.getElementsByClassName('qa-toggle-remove-multiple-one'));
      assert.notDeepEqual(document.getElementsByClassName('qa-target-toggle-multiple'), document.getElementsByClassName('qa-toggle-remove-multiple-two'));
    });
  });
  describe('pxh.loadState', () => {
    it('pxh.loadState switches from stateOne to stateTwo', () => {
      assert.deepEqual(document.getElementsByClassName('qa-item-one'), document.getElementsByClassName('qa-item-one--state-two'));
      assert.deepEqual(document.getElementsByClassName('qa-item-two'), document.getElementsByClassName('qa-item-two--state-two'));
      assert.notDeepEqual(document.getElementsByClassName('qa-item-one'), document.getElementsByClassName('qa-item-one--state-one'));
      assert.notDeepEqual(document.getElementsByClassName('qa-item-two'), document.getElementsByClassName('qa-item-two--state-one'));
    });
  });

  describe('pxh.toast', () => {

    describe('pxh.toast.badge', () => {
      it('badge count increments by 1 and shows 1', () => {
        let assertCount = 1;
        pxh.toast.badge.increment();
        pxh.toast.badge.update();
        assert.deepEqual(pxh.toast.badge.count, assertCount);
        assert.deepEqual(pxh.toast.badge.count, pxh.toast.badge.text);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, assertCount.toString());
      });
      it('badge count decrements by 1 and shows 0', () => {
        let assertCount = 0;
        pxh.toast.badge.decrement();
        pxh.toast.badge.update();
        assert.deepEqual(pxh.toast.badge.count, assertCount);
        assert.deepEqual(pxh.toast.badge.count, pxh.toast.badge.text);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, assertCount.toString());
      });
      it('badge count does not decrement below 0 or show below 0', () => {
        let assertCount = 0;
        for (let i = 10; i > 0; i -= 1) {
          pxh.toast.badge.decrement();
          pxh.toast.badge.update();
        }
        assert.deepEqual(pxh.toast.badge.count, assertCount);
        assert.deepEqual(pxh.toast.badge.count, pxh.toast.badge.text);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, assertCount.toString());
      });
      it('badge count increments to 2 and shows 2', () => {
        let assertCount = 2;
        for (let i = 2; i > 0; i -= 1) {
          pxh.toast.badge.increment();
          pxh.toast.badge.update();

        }
        assert.deepEqual(pxh.toast.badge.count, assertCount);
        assert.deepEqual(pxh.toast.badge.count, pxh.toast.badge.text);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, assertCount.toString());
      });
      it('badge count decrements to 0 and shows 0', () => {
        let assertCount = 0;
        for (let i = 2; i > 0; i -= 1) {
          pxh.toast.badge.decrement();
        }
        pxh.toast.badge.update();
        assert.deepEqual(pxh.toast.badge.count, assertCount);
        assert.deepEqual(pxh.toast.badge.count, pxh.toast.badge.text);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, assertCount.toString());
      });
      it('badge count increments to 9 and shows 9', () => {
        let assertCount = 9;
        for (let i = 9; i > 0; i -= 1) {
          pxh.toast.badge.increment();
        }
        pxh.toast.badge.update();
        assert.deepEqual(pxh.toast.badge.count, assertCount);
        assert.deepEqual(pxh.toast.badge.count, pxh.toast.badge.text);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, assertCount.toString());
      });
      it('badge count increases to 10 but displayed count is 9+', () => {
        let assertCount = 10;
        let assertText = '9+'
        pxh.toast.badge.increment();
        pxh.toast.badge.update();
        assert.deepEqual(pxh.toast.badge.count, assertCount);
        assert.notEqual(pxh.toast.badge.count, pxh.toast.badge.text);
        assert.deepEqual(pxh.toast.badge.text, assertText);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, assertText);
      });
      it('badge count increases beyond 9 and displayed count remains 9+', () => {
        let assertCount = 20;
        let assertText = '9+';
        for (let i = 10; i > 0; i -= 1) {
          pxh.toast.badge.increment();
        }
        pxh.toast.badge.update();
        assert.deepEqual(pxh.toast.badge.count, assertCount);
        assert.notEqual(pxh.toast.badge.count, pxh.toast.badge.text);
        assert.deepEqual(pxh.toast.badge.text, assertText);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, assertText);
      });
      it('badge count decrements back down to 0', () => {
        let assertCount = 0;
        let assertText = 0;
        for (let i = 20; i > 0; i -= 1) {
          pxh.toast.badge.decrement();
        }
        pxh.toast.badge.update();
        assert.deepEqual(pxh.toast.badge.count, assertCount);
        assert.deepEqual(pxh.toast.badge.count, pxh.toast.badge.text);
        assert.deepEqual(pxh.toast.badge.text, assertText);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, assertText.toString());
      });
    });
    describe('pxh.toast.add', () => {
      it('inserts a blank toast that toasts but does not appear in notifications', () => {
        pxh.toast.add(toastObject1);
        assert.lengthOf(document.getElementById('js-toasts').getElementsByClassName('pxh-toast'), 1);
        assert.lengthOf(document.getElementById('js-notifications__list').getElementsByClassName('pxh-notification'), 0);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, 0);
      });
      it('inserts a blank toast that displays the default text from nav.localeData', () => {
        assert.equal(document.getElementById('js-toasts').getElementsByClassName('pxh-toast')[0].getElementsByClassName('pxh-toast__text')[0].textContent.trim(), window.nav.localeData.toastTextDefault);
      });
      it('inserts a persistent toast w/o an action so it does not appear in notifications', () => {
        pxh.toast.add(toastObject2);
        assert.lengthOf(document.getElementById('js-toasts').getElementsByClassName('pxh-toast'), 2);
        assert.lengthOf(document.getElementById('js-notifications__list').getElementsByClassName('pxh-notification'), 0);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, 0);
      });
      it('inserts a persistent toast w/ an action link so it appears in notifications', () => {
        pxh.toast.add(toastObject3);
        assert.lengthOf(document.getElementById('js-toasts').getElementsByClassName('pxh-toast'), 3);
        assert.lengthOf(document.getElementById('js-notifications__list').getElementsByClassName('pxh-notification'), 1);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, 1);
      });
      it('inserts a notification with the default text from nav.localeData', () => {
        assert.equal(document.getElementById('js-notifications__list').getElementsByClassName('pxh-notification')[0].getElementsByClassName('pxh-notification__text')[0].textContent.trim(), window.nav.localeData.toastTextDefault);
      });
      it('inserts a persistent toast w/ an action link with the default text from nav.localeData', () => {
        assert.equal(document.getElementById('js-toasts').getElementsByClassName('pxh-toast')[0].getElementsByClassName('pxh-toast__action')[0].textContent.trim(), window.nav.localeData.toastActionLabelDefault);
      });
      it('inserts a persistent toast w/ an action callback so it appears in notifications', () => {
        pxh.toast.add(toastObject4);
        assert.lengthOf(document.getElementById('js-toasts').getElementsByClassName('pxh-toast'), 4);
        assert.lengthOf(document.getElementById('js-notifications__list').getElementsByClassName('pxh-notification'), 2);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, 2);
      });
      it('inserts a notification and supresses its corresponding toast', () => {
        pxh.toast.add(toastObject5);
        assert.lengthOf(document.getElementById('js-toasts').getElementsByClassName('pxh-toast'), 4);
        assert.lengthOf(document.getElementById('js-notifications__list').getElementsByClassName('pxh-notification'), 3);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, 3);
      });
      it('inserts a toast with a lot of config options', () => {
        pxh.toast.add(toastObject6);
        assert.lengthOf(document.getElementById('js-toasts').getElementsByClassName('pxh-toast'), 5);
        assert.lengthOf(document.getElementById('js-notifications__list').getElementsByClassName('pxh-notification'), 4);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, 4);
        assert.isOk(document.getElementById('js-toast--b4d455'));
        assert.isOk(document.getElementById('js-notification--b4d455'));
        assert.include(document.getElementById('js-toast--b4d455').getElementsByClassName('pxh-toast__text')[0].innerHTML, 'Persistent toast with HTML');
        assert.include(document.getElementById('js-notification--b4d455').getElementsByClassName('pxh-notification__link')[0].innerHTML, 'Persistent toast with HTML');
        assert.include(document.getElementById('js-toast--b4d455').getElementsByClassName('pxh-toast__button')[0].innerHTML, 'Custom action label');
        assert.isOk(document.getElementById('js-toast--b4d455').getElementsByClassName('pxh-toast__icon')[0].classList.contains('pxh-toast__icon--red'));
        assert.include(document.getElementById('js-notification--b4d455').getElementsByClassName('pxh-notification__timestamp')[0].innerHTML, '8:30 AM');
        assert.isOk(document.getElementById('js-notification--b4d455').getElementsByClassName('pxh-notification__icon')[0].classList.contains('pxh-notification__icon--red'));
      });
      it('inserts a toast with an unformatted timestamp', () => {
        pxh.toast.add(toastObject7);
        assert.include(document.getElementById('js-notification--qaTimestamp').getElementsByClassName('pxh-notification__timestamp')[0].innerHTML, '2016-08-01T17:36:10+00:00');
      });
      it('inserts a toast with default text when nav object doesn\'t define default strings', () => {
        window.nav = {
          localeData: {
            logOut: 'Log out',
          }
        }
        pxh.toast.add(toastObject1);
        assert.equal(document.getElementById('js-toasts').getElementsByClassName('pxh-toast')[0].getElementsByClassName('pxh-toast__text')[0].textContent.trim(), 'You received a new notification.');
      });
      it('inserts a toast with default action text when nav.localeData doesn\'t define default strings', () => {
        pxh.toast.add(toastObject3);
        assert.equal(document.getElementById('js-toasts').getElementsByClassName('pxh-toast')[0].getElementsByClassName('pxh-toast__action')[0].textContent.trim(), 'Action');
      });
      it('inserts a notification with default text when nav.localeData doesn\'t define default strings', () => {
        assert.equal(document.getElementById('js-notifications__list').getElementsByClassName('pxh-notification')[0].getElementsByClassName('pxh-notification__text')[0].textContent.trim(), 'You received a new notification.');
      });
    });

    describe('pxh.toast.removeAll', () => {
      it('removes all notifications', () => {
        assert.lengthOf(document.getElementById('js-notifications__list').getElementsByClassName('pxh-notification'), 6);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, 6);
        pxh.toast.removeAll();
        assert.lengthOf(document.getElementById('js-notifications__list').getElementsByClassName('pxh-notification'), 0);
        assert.equal(document.getElementById('js-login__notifications-badge').innerHTML, 0);
      });
    });
  });
});
