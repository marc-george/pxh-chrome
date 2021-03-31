'use strict';

/*! pxh-chrome.js 3.0.3 */

// **********************
// RESPONSIVE BREAKPOINTS
// **********************

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var lgBreakpoint;
var mdBreakpoint;

// **************
// CONFIG OBJECTS
// **************

/** @namespace pxh */

var pxh = {};

pxh.PREFIX = 'pxh-';
pxh.NARROW = '--narrow';
pxh.WIDE = '--wide';
pxh.HIDDEN = '--hidden';
pxh.VISIBLE = '--visible';
pxh.EXPANDED = '--expanded';
pxh.UNTIL = '-until';
pxh.AT_MD = '@md';
pxh.AT_LG = '@lg';
pxh.ANIMATE = '--animate';
pxh.ANIMATE_IN = pxh.ANIMATE + '-in';
pxh.ANIMATE_OUT = pxh.ANIMATE + '-out';
pxh.ANIMATE_NARROW = pxh.ANIMATE + '-narrow';
pxh.ANIMATE_WIDE = pxh.ANIMATE + '-wide';
pxh.ANIMATE_FULL_TO_WIDE = pxh.ANIMATE + '-full-to-wide';
pxh.ANIMATE_FULL_TO_NARROW = pxh.ANIMATE + '-full-to-narrow';
pxh.ANIMATE_OUT_WIDE = pxh.ANIMATE + '-out-wide';

// drawer
pxh.DRAWER = pxh.PREFIX + 'drawer';
pxh.DRAWER_HIDDEN_UNTIL_AT_MD = pxh.DRAWER + pxh.HIDDEN + pxh.UNTIL + pxh.AT_MD;
pxh.DRAWER_NARROW_AT_MD = pxh.DRAWER + pxh.NARROW + pxh.AT_MD;
pxh.DRAWER_WIDE_AT_LG = pxh.DRAWER + pxh.WIDE + pxh.AT_LG;
pxh.DRAWER_NARROW_AT_LG = pxh.DRAWER + pxh.NARROW + pxh.AT_LG;
pxh.DRAWER_ANIMATE_IN = pxh.DRAWER + pxh.ANIMATE_IN;
pxh.DRAWER_ANIMATE_OUT = pxh.DRAWER + pxh.ANIMATE_OUT;
pxh.DRAWER_ANIMATE_WIDE = pxh.DRAWER + pxh.ANIMATE_WIDE;
pxh.DRAWER_ANIMATE_NARROW = pxh.DRAWER + pxh.ANIMATE_NARROW;
pxh.DRAWER_ANIMATE_OUT_WIDE = pxh.DRAWER + pxh.ANIMATE_OUT_WIDE;

// drawer__toggle
pxh.DRAWER_TOGGLE = pxh.PREFIX + 'drawer-toggle';

// drawer-header__link
pxh.DRAWER_HEADER_LINK = pxh.PREFIX + 'drawer-header__link';
pxh.DRAWER_HEADER_LINK_WIDE_AT_MD = pxh.DRAWER_HEADER_LINK + pxh.WIDE + pxh.AT_MD;
pxh.DRAWER_HEADER_LINK_NARROW_AT_MD = pxh.DRAWER_HEADER_LINK + pxh.NARROW + pxh.AT_MD;
pxh.DRAWER_HEADER_LINK_WIDE_AT_LG = pxh.DRAWER_HEADER_LINK + pxh.WIDE + pxh.AT_LG;
pxh.DRAWER_HEADER_LINK_ANIMATE_IN = pxh.DRAWER_HEADER_LINK + pxh.ANIMATE_IN;
pxh.DRAWER_HEADER_LINK_ANIMATE_OUT = pxh.DRAWER_HEADER_LINK + pxh.ANIMATE_OUT;

// overlay
pxh.OVERLAY = pxh.PREFIX + 'overlay';
pxh.OVERLAY_HIDDEN = pxh.OVERLAY + pxh.HIDDEN;

// navigation
pxh.NAVIGATION = pxh.PREFIX + 'navigation';
pxh.NAVIGATION_NARROW_AT_MD = pxh.NAVIGATION + pxh.NARROW + pxh.AT_MD;
pxh.NAVIGATION_WIDE_AT_LG = pxh.NAVIGATION + pxh.WIDE + pxh.AT_LG;

// navigation__item-text
pxh.NAVIGATION_ITEM_TEXT = pxh.PREFIX + 'navigation__item-text';
pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN = pxh.NAVIGATION_ITEM_TEXT + pxh.ANIMATE_IN;
pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT = pxh.NAVIGATION_ITEM_TEXT + pxh.ANIMATE_OUT;

// navigation__link
pxh.NAVIGATION_LINK = pxh.PREFIX + 'navigation__link';
pxh.NAVIGATION_LINK_ANIMATE_IN = pxh.NAVIGATION_LINK + pxh.ANIMATE_IN;
pxh.NAVIGATION_LINK_ANIMATE_OUT = pxh.NAVIGATION_LINK + pxh.ANIMATE_OUT;

// navigation__sub-link
pxh.NAVIGATION_SUB_LINK = pxh.PREFIX + 'navigation__sub-link';
pxh.NAVIGATION_SUB_LINK_ANIMATE_IN = pxh.NAVIGATION_SUB_LINK + pxh.ANIMATE_IN;
pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT = pxh.NAVIGATION_SUB_LINK + pxh.ANIMATE_OUT;

// login
pxh.LOGIN = pxh.PREFIX + 'login';
pxh.LOGIN_NARROW_AT_MD = pxh.LOGIN + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_WIDE_AT_LG = pxh.LOGIN + pxh.WIDE + pxh.AT_LG;

// login__name
pxh.LOGIN_NAME = pxh.PREFIX + 'login__name';
pxh.LOGIN_NAME_NARROW_AT_MD = pxh.LOGIN_NAME + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_NAME_WIDE_AT_LG = pxh.LOGIN_NAME + pxh.WIDE + pxh.AT_LG;
pxh.LOGIN_NAME_ANIMATE_IN = pxh.LOGIN_NAME + pxh.ANIMATE_IN;
pxh.LOGIN_NAME_ANIMATE_OUT = pxh.LOGIN_NAME + pxh.ANIMATE_OUT;

// login__link
pxh.LOGIN_LINK = pxh.PREFIX + 'login__link';
pxh.LOGIN_LINK_NARROW_AT_MD = pxh.LOGIN_LINK + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_LINK_WIDE_AT_LG = pxh.LOGIN_LINK + pxh.WIDE + pxh.AT_LG;
pxh.LOGIN_LINK_NARROW_AT_LG = pxh.LOGIN_LINK + pxh.NARROW + pxh.AT_LG;

pxh.LOGIN_PROFILE_LINK = pxh.PREFIX + 'login__profile-link';
pxh.LOGIN_SETTINGS_LINK = pxh.PREFIX + 'login__settings-link';

pxh.LOGIN_MENU = pxh.PREFIX + 'login-menu';
pxh.LOGIN_MENU_PROFILE = pxh.LOGIN_MENU + '--profile';
pxh.LOGIN_MENU_SETTINGS = pxh.LOGIN_MENU + '--settings';
pxh.LOGIN_MENU_VISIBLE = pxh.LOGIN_MENU + pxh.VISIBLE;

// login__settings
pxh.LOGIN_SETTINGS = pxh.PREFIX + 'login__settings';
pxh.LOGIN_SETTINGS_NARROW_AT_MD = pxh.LOGIN_SETTINGS + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_SETTINGS_WIDE_AT_LG = pxh.LOGIN_SETTINGS + pxh.WIDE + pxh.AT_LG;
pxh.LOGIN_SETTINGS_ANIMATE_IN = pxh.LOGIN_SETTINGS + pxh.ANIMATE_IN;
pxh.LOGIN_SETTINGS_ANIMATE_OUT = pxh.LOGIN_SETTINGS + pxh.ANIMATE_OUT;

// login__caret
pxh.LOGIN_CARET = pxh.PREFIX + 'login__caret';
pxh.LOGIN_CARET_NARROW_AT_MD = pxh.LOGIN_CARET + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_CARET_WIDE_AT_LG = pxh.LOGIN_CARET + pxh.WIDE + pxh.AT_LG;
pxh.LOGIN_CARET_ANIMATE_IN = pxh.LOGIN_CARET + pxh.ANIMATE_IN;
pxh.LOGIN_CARET_ANIMATE_OUT = pxh.LOGIN_CARET + pxh.ANIMATE_OUT;

// login__notifications
pxh.LOGIN_NOTIFICATIONS = pxh.PREFIX + 'login__notifications';
pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD = pxh.LOGIN_NOTIFICATIONS + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG = pxh.LOGIN_NOTIFICATIONS + pxh.WIDE + pxh.AT_LG;
pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN = pxh.LOGIN_NOTIFICATIONS + pxh.ANIMATE_IN;
pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT = pxh.LOGIN_NOTIFICATIONS + pxh.ANIMATE_OUT;

// login__notifications-badge
pxh.LOGIN_NOTIFICATIONS_BADGE = pxh.PREFIX + 'login__notifications-badge';
pxh.LOGIN_NOTIFICATIONS_BADGE_HIDDEN = pxh.LOGIN_NOTIFICATIONS_BADGE + pxh.HIDDEN;

// view
pxh.VIEW = pxh.PREFIX + 'view';
pxh.VIEW_NARROW_AT_LG = pxh.VIEW + pxh.NARROW + pxh.AT_LG;
pxh.VIEW_WIDE_AT_LG = pxh.VIEW + pxh.WIDE + pxh.AT_LG;
pxh.VIEW_ANIMATE_FULL_TO_WIDE = pxh.VIEW + pxh.ANIMATE_FULL_TO_WIDE;
pxh.VIEW_ANIMATE_FULL_TO_NARROW = pxh.VIEW + pxh.ANIMATE_FULL_TO_NARROW;
pxh.VIEW_ANIMATE_WIDE = pxh.VIEW + pxh.ANIMATE_WIDE;
pxh.VIEW_ANIMATE_NARROW = pxh.VIEW + pxh.ANIMATE_NARROW;
pxh.VIEW_ANIMATE_FULL_TO_WIDE = pxh.VIEW + pxh.ANIMATE_FULL_TO_WIDE;
pxh.VIEW_ANIMATE_FULL_TO_NARROW = pxh.VIEW + pxh.ANIMATE_FULL_TO_NARROW;

// view-header
pxh.VIEW_HEADER = pxh.PREFIX + 'view-header';
pxh.VIEW_HEADER_NARROW_AT_LG = pxh.VIEW_HEADER + pxh.NARROW + pxh.AT_LG;
pxh.VIEW_HEADER_WIDE_AT_LG = pxh.VIEW_HEADER + pxh.WIDE + pxh.AT_LG;
pxh.VIEW_HEADER_ANIMATE_WIDE = pxh.VIEW_HEADER + pxh.ANIMATE_WIDE;
pxh.VIEW_HEADER_ANIMATE_NARROW = pxh.VIEW_HEADER + pxh.ANIMATE_NARROW;
pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE = pxh.VIEW_HEADER + pxh.ANIMATE_FULL_TO_WIDE;
pxh.VIEW_HEADER_ANIMATE_FULL_TO_NARROW = pxh.VIEW_HEADER + pxh.ANIMATE_FULL_TO_NARROW;

// view-header-drawer-toggle
pxh.VIEW_HEADER_DRAWER_TOGGLE = pxh.PREFIX + 'view-header-drawer-toggle';
pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN = pxh.VIEW_HEADER_DRAWER_TOGGLE + pxh.HIDDEN;

// notifications
pxh.NOTIFICATIONS = pxh.PREFIX + 'notifications';
pxh.NOTIFICATIONS_VISIBLE = pxh.NOTIFICATIONS + pxh.VISIBLE;
pxh.NOTIFICATIONS_NARROW_AT_MD = pxh.NOTIFICATIONS + pxh.NARROW + pxh.AT_MD;
pxh.NOTIFICATIONS_WIDE_AT_LG = pxh.NOTIFICATIONS + pxh.WIDE + pxh.AT_LG;

// notification
pxh.NOTIFICATION = pxh.PREFIX + 'notification';
pxh.NOTIFICATION_ANIMATE_IN = pxh.NOTIFICATION + pxh.ANIMATE_IN;
pxh.NOTIFICATION_ANIMATE_OUT = pxh.NOTIFICATION + pxh.ANIMATE_OUT;
pxh.NOTIFICATION_EXPANDED = pxh.NOTIFICATION + pxh.EXPANDED;

// toast
pxh.TOAST = pxh.PREFIX + 'toast';
pxh.TOAST_ANIMATE_IN = pxh.TOAST + pxh.ANIMATE_IN;
pxh.TOAST_ANIMATE_OUT = pxh.TOAST + pxh.ANIMATE_OUT;
pxh.TOAST_EXPANDED = pxh.TOAST + pxh.EXPANDED;

// disable-scroll
pxh.DISABLE_SCROLL = pxh.PREFIX + 'disable-scroll';
pxh.DISABLE_SCROLL_UNTIL_AT_LG = pxh.DISABLE_SCROLL + pxh.UNTIL + pxh.AT_LG;

// display none
pxh.DISPLAY_NONE = pxh.PREFIX + 'display-none';

pxh.states = {
  default: {
    'pxh-drawer': {
      add: pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + pxh.DRAWER_NARROW_AT_MD + ' ' + pxh.DRAWER_WIDE_AT_LG,
      remove: pxh.DRAWER_NARROW_AT_LG
    },
    'pxh-drawer-header__link': {
      remove: pxh.DRAWER_HEADER_LINK_WIDE_AT_MD,
      add: pxh.DRAWER_HEADER_LINK_NARROW_AT_MD + ' ' + pxh.DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay': {
      add: pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      add: pxh.NAVIGATION_NARROW_AT_MD + ' ' + pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      add: pxh.LOGIN_NARROW_AT_MD + ' ' + pxh.LOGIN_WIDE_AT_LG
    },
    'pxh-login__name': {
      add: pxh.LOGIN_NAME_NARROW_AT_MD + ' ' + pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      add: pxh.LOGIN_LINK_NARROW_AT_MD + ' ' + pxh.LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings': {
      add: pxh.LOGIN_SETTINGS_NARROW_AT_MD + ' ' + pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      add: pxh.LOGIN_CARET_NARROW_AT_MD + ' ' + pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications': {
      add: pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD + ' ' + pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view': {
      remove: pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + pxh.VIEW_WIDE_AT_LG,
      add: pxh.VIEW_NARROW_AT_LG
    },
    'pxh-view-header': {
      remove: pxh.VIEW_HEADER_WIDE_AT_LG,
      add: pxh.VIEW_HEADER_NARROW_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      remove: pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications': {
      remove: pxh.NOTIFICATIONS_VISIBLE,
      add: pxh.NOTIFICATIONS_NARROW_AT_MD + ' ' + pxh.NOTIFICATIONS_WIDE_AT_LG
    }
  },
  open: {
    'pxh-drawer': {
      remove: pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + pxh.DRAWER_NARROW_AT_MD + ' ' + pxh.DRAWER_NARROW_AT_LG,
      add: pxh.DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link': {
      remove: pxh.DRAWER_HEADER_LINK_NARROW_AT_MD,
      add: pxh.DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + pxh.DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay': {
      remove: pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      remove: pxh.NAVIGATION_NARROW_AT_MD,
      add: pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      add: pxh.LOGIN_WIDE_AT_LG,
      remove: pxh.LOGIN_NARROW_AT_MD
    },
    'pxh-login__name': {
      remove: pxh.LOGIN_NAME_NARROW_AT_MD,
      add: pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      remove: pxh.LOGIN_LINK_NARROW_AT_MD + ' ' + pxh.LOGIN_LINK_NARROW_AT_LG
    },
    'pxh-login__settings': {
      remove: pxh.LOGIN_SETTINGS_NARROW_AT_MD,
      add: pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      remove: pxh.LOGIN_CARET_NARROW_AT_MD,
      add: pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications': {
      remove: pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD,
      add: pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view': {
      add: pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + pxh.VIEW_NARROW_AT_LG,
      remove: pxh.VIEW_WIDE_AT_LG
    },
    'pxh-view-header': {
      add: pxh.VIEW_HEADER_NARROW_AT_LG,
      remove: pxh.VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      add: pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications': {
      remove: pxh.NOTIFICATIONS_NARROW_AT_MD,
      add: pxh.NOTIFICATIONS_WIDE_AT_LG
    }
  },
  narrowAtLg: {
    'pxh-drawer': {
      add: pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + pxh.DRAWER_NARROW_AT_MD + ' ' + pxh.DRAWER_NARROW_AT_LG,
      remove: pxh.DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link': {
      remove: pxh.DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + pxh.DRAWER_HEADER_LINK_WIDE_AT_LG,
      add: pxh.DRAWER_HEADER_LINK_NARROW_AT_MD
    },
    'pxh-overlay': {
      add: pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      add: pxh.NAVIGATION_NARROW_AT_MD,
      remove: pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      add: pxh.LOGIN_NARROW_AT_MD,
      remove: pxh.LOGIN_WIDE_AT_LG
    },
    'pxh-login__name': {
      add: pxh.LOGIN_NAME_NARROW_AT_MD,
      remove: pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      add: pxh.LOGIN_LINK_NARROW_AT_MD,
      remove: pxh.LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings': {
      add: pxh.LOGIN_SETTINGS_NARROW_AT_MD,
      remove: pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      add: pxh.LOGIN_CARET_NARROW_AT_MD,
      remove: pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications': {
      add: pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD,
      remove: pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view': {
      remove: pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + pxh.VIEW_NARROW_AT_LG,
      add: pxh.VIEW_WIDE_AT_LG
    },
    'pxh-view-header': {
      remove: pxh.VIEW_HEADER_NARROW_AT_LG,
      add: pxh.VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      remove: pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications': {
      remove: pxh.NOTIFICATIONS_VISIBLE + ' ' + pxh.NOTIFICATIONS_WIDE_AT_LG,
      add: pxh.NOTIFICATIONS_NARROW_AT_MD
    }
  }
};

pxh.transitions = {
  outToIn: {
    'pxh-drawer': {
      add: pxh.DRAWER_ANIMATE_IN
    }
  },
  inToOut: {
    'pxh-drawer': {
      add: pxh.DRAWER_ANIMATE_OUT
    }
  },
  narrowToOpen: {
    'pxh-drawer': {
      add: pxh.DRAWER_ANIMATE_WIDE
    },
    'pxh-drawer-header__link': {
      add: pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      add: pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      add: pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      add: pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      add: pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      add: pxh.LOGIN_SETTINGS_ANIMATE_IN
    }
  },
  openToNarrow: {
    'pxh-drawer': {
      add: pxh.DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link': {
      add: pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      add: pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      add: pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      add: pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      add: pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      add: pxh.LOGIN_SETTINGS_ANIMATE_OUT
    }
  },
  outToNarrow: {
    'pxh-drawer': {
      add: pxh.DRAWER_ANIMATE_IN
    },
    'pxh-view': {
      add: pxh.VIEW_ANIMATE_FULL_TO_WIDE
    },
    'pxh-view-header': {
      add: pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE
    }
  },
  outToWide: {
    'pxh-drawer': {
      add: pxh.DRAWER_ANIMATE_IN
    },
    'pxh-view': {
      add: pxh.VIEW_ANIMATE_FULL_TO_NARROW
    },
    'pxh-view-header': {
      add: pxh.VIEW_HEADER_ANIMATE_FULL_TO_NARROW
    }
  },
  narrowToOut: {
    'pxh-drawer': {
      add: pxh.DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link': {
      add: pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      add: pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      add: pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      add: pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      add: pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      add: pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications': {
      add: pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    }
  },
  wideToNarrow: {
    'pxh-drawer': {
      add: pxh.DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link': {
      add: pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      add: pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      add: pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      add: pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      add: pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      add: pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-view': {
      add: pxh.VIEW_ANIMATE_WIDE
    },
    'pxh-view-header': {
      add: pxh.VIEW_HEADER_ANIMATE_WIDE
    }
  },
  narrowToWide: {
    'pxh-drawer': {
      add: pxh.DRAWER_ANIMATE_WIDE
    },
    'pxh-drawer-header__link': {
      add: pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      add: pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      add: pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      add: pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      add: pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      add: pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications': {
      add: pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    },
    'pxh-view': {
      add: pxh.VIEW_ANIMATE_NARROW
    },
    'pxh-view-header': {
      add: pxh.VIEW_HEADER_ANIMATE_NARROW
    }
  },
  clearAll: {
    'pxh-drawer': {
      remove: pxh.DRAWER_ANIMATE_IN + ' ' + pxh.DRAWER_ANIMATE_OUT + ' ' + pxh.DRAWER_ANIMATE_NARROW + ' ' + pxh.DRAWER_ANIMATE_WIDE + ' ' + pxh.DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link': {
      remove: pxh.DRAWER_HEADER_LINK_ANIMATE_IN + ' ' + pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      remove: pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN + ' ' + pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      remove: pxh.NAVIGATION_SUB_LINK_ANIMATE_IN + ' ' + pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      remove: pxh.LOGIN_NAME_ANIMATE_IN + ' ' + pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      remove: pxh.LOGIN_CARET_ANIMATE_IN + ' ' + pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      remove: pxh.LOGIN_SETTINGS_ANIMATE_IN + ' ' + pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications': {
      remove: pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN + ' ' + pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    },
    'pxh-view': {
      remove: pxh.VIEW_ANIMATE_WIDE + ' ' + pxh.VIEW_ANIMATE_NARROW + ' ' + pxh.VIEW_ANIMATE_FULL_TO_WIDE + ' ' + pxh.VIEW_ANIMATE_FULL_TO_NARROW
    },
    'pxh-view-header': {
      remove: pxh.VIEW_HEADER_ANIMATE_WIDE + ' ' + pxh.VIEW_HEADER_ANIMATE_NARROW + ' ' + pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE + ' ' + pxh.VIEW_HEADER_ANIMATE_FULL_TO_NARROW
    }
  }
};

// *********************
// THIRD PARTY LIBRARIES
// *********************

/* eslint-disable */

/*! css-element-queries/ResizeSensor.js 0.3.2 */

/**
 * css-element-queries/ResizeSensor.js
 * Copyright Marc J. Schmidt.
 * The MIT License (MIT)
 * https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */

// (function() {

/**
 * Class for dimension change detection.
 *
 * @param {HTMLElement|Element[]|Elements|jQuery} element
 * @param {Function} callback
 *
 * @constructor
 */
var pxhResizeSensor = function pxhResizeSensor(element, callback) {
  /**
   *
   * @constructor
   */
  function EventQueue() {
    this.q = [];
    this.add = function (ev) {
      this.q.push(ev);
    };

    var i;
    var j;
    this.call = function () {
      for (i = 0, j = this.q.length; i < j; i += 1) {
        this.q[i].call();
      }
    };
  }

  /**
   * @param {HTMLElement} element
   * @param {String}      prop
   * @returns {String|Number}
   */
  function getComputedStyle(element, prop) {
    if (element.currentStyle) {
      return element.currentStyle[prop];
    } else if (window.getComputedStyle) {
      return window.getComputedStyle(element, null).getPropertyValue(prop);
    } else {
      return element.style[prop];
    }
  }

  /**
   *
   * @param {HTMLElement} element
   * @param {Function}    resized
   */
  function attachResizeEvent(element, resized) {
    if (!element.resizedAttached) {
      element.resizedAttached = new EventQueue();
      element.resizedAttached.add(resized);
    } else if (element.resizedAttached) {
      element.resizedAttached.add(resized);
      return;
    }

    element.pxhResizeSensor = document.createElement('div');
    element.pxhResizeSensor.className = 'resize-sensor';
    var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
    var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';

    element.pxhResizeSensor.style.cssText = style;
    element.pxhResizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + style + '">' + '<div style="' + styleChild + '"></div>' + '</div>' + '<div class="resize-sensor-shrink" style="' + style + '">' + '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' + '</div>';
    element.appendChild(element.pxhResizeSensor);

    if (!{ fixed: 1, absolute: 1 }[getComputedStyle(element, 'position')]) {
      element.style.position = 'relative';
    }

    var expand = element.pxhResizeSensor.childNodes[0];
    var expandChild = expand.childNodes[0];
    var shrink = element.pxhResizeSensor.childNodes[1];
    var shrinkChild = shrink.childNodes[0];

    var lastWidth, lastHeight;

    var reset = function reset() {
      expandChild.style.width = expand.offsetWidth + 10 + 'px';
      expandChild.style.height = expand.offsetHeight + 10 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
      shrink.scrollLeft = shrink.scrollWidth;
      shrink.scrollTop = shrink.scrollHeight;
      lastWidth = element.offsetWidth;
      lastHeight = element.offsetHeight;
    };

    reset();

    var changed = function changed() {
      if (element.resizedAttached) {
        element.resizedAttached.call();
      }
    };

    var addEvent = function addEvent(el, name, cb) {
      if (el.attachEvent) {
        el.attachEvent('on' + name, cb);
      } else {
        el.addEventListener(name, cb);
      }
    };

    var onScroll = function onScroll() {
      if (element.offsetWidth !== lastWidth || element.offsetHeight !== lastHeight) {
        changed();
      }
      reset();
    };

    addEvent(expand, 'scroll', onScroll);
    addEvent(shrink, 'scroll', onScroll);
  }

  var elementType = Object.prototype.toString.call(element);
  var isCollectionTyped = '[object Array]' === elementType || '[object NodeList]' === elementType || '[object HTMLCollection]' === elementType || 'undefined' !== typeof jQuery && element instanceof jQuery //jquery
  || 'undefined' !== typeof Elements && element instanceof Elements //mootools
  ;

  if (isCollectionTyped) {
    var i = 0,
        j = element.length;
    for (; i < j; i += 1) {
      attachResizeEvent(element[i], callback);
    }
  } else {
    attachResizeEvent(element, callback);
  }

  this.detach = function () {
    if (isCollectionTyped) {
      var i = 0,
          j = element.length;
      for (; i < j; i += 1) {
        pxhResizeSensor.detach(element[i]);
      }
    } else {
      pxhResizeSensor.detach(element);
    }
  };
};

pxhResizeSensor.detach = function (element) {
  if (element.pxhResizeSensor) {
    element.removeChild(element.pxhResizeSensor);
    delete element.pxhResizeSensor;
    delete element.resizedAttached;
  }
};

// make available to common module loader
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = pxhResizeSensor;
} else {
  pxhResizeSensor = pxhResizeSensor;
}

// })();

/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
  var registeredInModuleLoader = false;
  if (typeof define === 'function' && define.amd) {
    define(factory);
    registeredInModuleLoader = true;
  }
  if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory();
    registeredInModuleLoader = true;
  }
  if (!registeredInModuleLoader) {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();
    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api;
    };
  }
})(function () {
  function extend() {
    var i = 0;
    var key;
    var result = {};
    for (; i < arguments.length; i += 1) {
      var attributes = arguments[i];
      for (key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }

  function init(converter) {
    function api(key, value, attributes) {
      var result;
      if (typeof document === 'undefined') {
        return;
      }

      // Write

      if (arguments.length > 1) {
        attributes = extend({
          path: '/'
        }, api.defaults, attributes);

        if (typeof attributes.expires === 'number') {
          var expires = new Date();
          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
          attributes.expires = expires;
        }

        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}

        if (!converter.write) {
          value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }

        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);

        return document.cookie = [key, '=', value, attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        attributes.path ? '; path=' + attributes.path : '', attributes.domain ? '; domain=' + attributes.domain : '', attributes.secure ? '; secure' : ''].join('');
      }

      // Read

      if (!key) {
        result = {};
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling "get()"
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;

      for (; i < cookies.length; i += 1) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');

        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
          cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }

          if (key === name) {
            result = cookie;
            break;
          }

          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }

      return result;
    }

    api.set = api;
    api.get = function (key) {
      return api.call(api, key);
    };
    api.getJSON = function () {
      return api.apply({
        json: true
      }, [].slice.call(arguments));
    };
    api.defaults = {};

    api.remove = function (key, attributes) {
      api(key, '', extend(attributes, {
        expires: -1
      }));
    };

    api.removeAll = function () {
      var cookies = document.cookie.split(';');
      var i;
      for (i = cookies.length - 1; i >= 0; i -= 1) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf('=');
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
    };

    api.withConverter = init;

    return api;
  }

  return init(function () {});
});

pxh.Cookies = Cookies.noConflict();

/* eslint-enable */

// *********
// GENERIC FUNCTIONS
// *********

/**
 * Polyfill to support .remove() in IE11
 * https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
 *
 */
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

/**
 * Checks if an array exists
 *
 * @param {Array} array
 * @returns {Boolean} true if array exists, false if it does not
 */
pxh.arrayExists = function (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    return true;
  }
  return false;
};

/**
 * Returns an item from an object based on its property name
 *
 * @param {Object} haystack
 * @param {String} propertyName
 * @returns {Object|Boolean} Object that corresponds to the property name if found, false if not
 */
pxh.getItemByPropertyName = function (haystack, propertyName) {
  var item;
  var i;
  for (i in haystack) {
    if ({}.hasOwnProperty.call(haystack, propertyName)) {
      item = haystack[propertyName];
    }
  }
  return item;
};

/**
 * Returns the value of a particular CSS property of an element
 *
 * @param {String} id The id="" attribute of the element
 * @param {String} property The CSS property to query, e.g. z-index
 * @returns {String|Boolean} CSS property value if found, false if not
 */
pxh.getStyle = function (id, property) {
  var element = document.getElementById(id);
  var style;
  if (window.getComputedStyle) {
    style = document.defaultView.getComputedStyle(element, null).getPropertyValue(property);
  } else if (element.currentStyle) {
    style = element.currentStyle[property];
  }
  return style;
};

/**
 * Strips HTML tags from the given string
 *
 * @param {String} html A string that may contain HTML tags
 * @returns {String|Boolean} Input string's text with HTML removed, false if no input parameter provided
 */
pxh.stripHTML = function (html) {
  var tmp;
  if (html) {
    tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }
  return false;
};

/**
 * Changes classes on the targeted elements
 *
 * @example
 * // finds all elements with class `nav` and adds the class `nav--hidden` to them
 * pxh.changeClasses('nav', 'add', 'nav--hidden');
 * @param {String} targetClassName Base CSS class of the targeted elements to be changed
 * @param {String} changeType Type of change to apply. Options are `add`, `remove`, `toggle`
 * @param {String} classNamesToChange List of classes to change on the targeted elements, separated by spaces
 */
pxh.changeClasses = function (targetClassName, changeType, classNamesToChange) {
  var targetElements = document.getElementsByClassName(targetClassName);
  var classNames;
  var classNamesArray;
  var i;
  var j;
  if (pxh.arrayExists(targetElements) && classNamesToChange) {
    classNames = classNamesToChange.replace(/ {2,}/g, ' ');
    classNamesArray = classNames.split(' ');
    for (i = targetElements.length - 1; i >= 0; i -= 1) {
      for (j = classNamesArray.length - 1; j >= 0; j -= 1) {
        if (changeType === 'add') {
          targetElements[i].classList.add(classNamesArray[j]);
        } else if (changeType === 'remove') {
          targetElements[i].classList.remove(classNamesArray[j]);
        } else if (changeType === 'toggle') {
          targetElements[i].classList.toggle(classNamesArray[j]);
        }
      }
    }
  }
};

/**
 * Adds a sensor that will fire a viewResized event every time its corresponding element changes size
 *
 * @param {string} targetId The id of the target element that should fire an event when it resizes
 */
pxh.addResizeSensor = function (targetId) {
  var targetElement = document.getElementById(targetId);
  if (targetElement) {
    new pxhResizeSensor(targetElement, function () {
      document.dispatchEvent(pxh.viewResized);
    });
  }
};

pxh.action = {};

/**
 * Toggles classes on an element when clicked, and immediately fires any event in the clicked target area
 *
 * @param {string} control CSS class name of the elements that should act as controls for firing this event
 * @param {string} target CSS class name of the target elements that should be changed when this event is fired
 * @param {string} change Type of change to perform on the target elements. Options are `add`, `remove`, `toggle`
 * @param {string} className Space-delimited list of CSS classes to change on the target elements
 */

pxh.action.clickToCloseAndFire = function (control, target, change, className) {
  var controlElement = document.getElementsByClassName(control);
  var targetElement = document.getElementsByClassName(target);
  if (pxh.arrayExists(controlElement) && pxh.arrayExists(targetElement)) {
    document.addEventListener('click', function (event) {
      pxh.changeClasses(target, change, className);
    });
  }
};

/**
 * Toggles classes on an element when clicked, but does not fire any event in the clicked target area
 *
 * @param {string} control Unique ID of the element that should act as controls for firing this event
 * @param {string} target Unique ID of the target element that should be changed when this event is fired
 * @param {string} className The class to be removed from the target element
 */
pxh.action.clickToCloseAndHold = function (control, target, className) {
  var controlElement = document.getElementById(control);
  var closeElement = document.getElementById('js-closer');
  var targetElement = document.getElementById(target);
  var zIndex = pxh.getStyle(target, 'z-index') - 1;
  var insertedCloser;
  if (controlElement && targetElement) {
    if (!closeElement) {
      closeElement = document.createElement('div');
      closeElement.id = 'js-closer';
      closeElement.classList.add('pxh-closer');
      closeElement.classList.add('pxh-closer--transparent');
      closeElement.setAttribute('style', 'z-index: ' + zIndex + ';');
      insertedCloser = document.body.appendChild(closeElement);
      insertedCloser.addEventListener('click', function (event) {
        targetElement.classList.remove(className);
        insertedCloser.remove();
      });
    } else {
      closeElement.remove();
    }
  }
};

/**
 * Toggles classes on an element when clicked
 *
 * @param {string} control CSS class name of the elements that should act as controls for firing this event
 * @param {string} target CSS class name of the target elements that should be changed when this event is fired
 * @param {string} className The class to be removed from the target element
 */
pxh.toggleMenu = function (control, target, className) {
  var controlElements = document.getElementsByClassName(control);
  var targetElements = document.getElementsByClassName(target);
  var i;
  if (pxh.arrayExists(controlElements) && pxh.arrayExists(targetElements)) {
    for (i = controlElements.length - 1; i >= 0; i -= 1) {
      controlElements[i].addEventListener('click', function (event) {
        event.preventDefault();
        pxh.changeClasses(target, 'toggle', className);
      });
    }
  }
};

// *****************
// DRAWER FUNCTIONS
// *****************

/**
 * Loads a state from a state object, and changes the CSS classes on all relevant elements
 *
 * @param {Object} stateObject An object containing the states of your application
 * @param {String} targetStateName The name of the desired state to load from the state object
 */
pxh.loadState = function (stateObject, targetStateName) {
  // grab the target state object from the master states object
  var targetState = pxh.getItemByPropertyName(stateObject, targetStateName);
  var targetClass;
  var stateChangeTarget;
  var stateChangeType;
  var stateChangeClasses;
  // iterate through each target class in the target state object
  for (targetClass in targetState) {
    if ({}.hasOwnProperty.call(targetState, targetClass)) {
      // grab the target state for each class in the target state
      stateChangeTarget = targetState[targetClass];
      // iterate through each target state change (e.g. whether to add, remove, toggle)
      for (stateChangeType in stateChangeTarget) {
        if ({}.hasOwnProperty.call(stateChangeTarget, stateChangeType)) {
          // grab the target state change classes (e.g. which classes to add, remove, or toggle)
          stateChangeClasses = stateChangeTarget[stateChangeType];
          // change the classes of each target element based on its target class, the type of change to make, and its target classes
          pxh.changeClasses(targetClass, stateChangeType, stateChangeClasses);
        }
      }
    }
  }
};

/**
 * Binds drawer state change events to toggle buttons, which will change the state of the drawer depending on the current drawer and responsive contexts
 *
 * @param {String} controlName CSS class name of control to bind events to
 */
pxh.bindControl = function (controlName) {
  var controlElements = document.getElementsByClassName(controlName);
  var drawer = document.getElementById('js-drawer');
  var drawerIsAtDefaultState;
  var drawerIsNarrowAtMd;
  var drawerIsHiddenAtSm;
  var closeElement;
  var i;
  if (pxh.arrayExists(controlElements) && drawer) {
    for (i = controlElements.length - 1; i >= 0; i -= 1) {
      controlElements[i].addEventListener('click', function (event) {
        event.preventDefault();
        drawerIsAtDefaultState = drawer.classList.contains(pxh.DRAWER_WIDE_AT_LG);
        drawerIsNarrowAtMd = drawer.classList.contains(pxh.DRAWER_NARROW_AT_MD);
        drawerIsHiddenAtSm = drawer.classList.contains(pxh.DRAWER_HIDDEN_UNTIL_AT_MD);
        closeElement = document.getElementById('js-closer');
        pxh.loadState(pxh.transitions, 'clearAll');
        if (window.matchMedia('(min-width: 1024px)').matches && drawerIsAtDefaultState) {
          pxh.loadState(pxh.transitions, 'wideToNarrow');
          pxh.loadState(pxh.states, 'narrowAtLg');
          if (closeElement) closeElement.remove();
          document.dispatchEvent(pxh.drawerClosed);
          pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        } else if (window.matchMedia('(min-width: 1024px)').matches) {
          pxh.loadState(pxh.transitions, 'narrowToWide');
          pxh.loadState(pxh.states, 'default');
          document.dispatchEvent(pxh.drawerOpened);
          pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
          pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
        } else if (drawerIsNarrowAtMd && window.matchMedia('(min-width: 768px)').matches) {
          pxh.loadState(pxh.transitions, 'narrowToOpen');
          pxh.loadState(pxh.states, 'open');
          document.dispatchEvent(pxh.drawerOpened);
          pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
          pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
        } else if (window.matchMedia('(min-width: 768px)').matches) {
          pxh.loadState(pxh.transitions, 'openToNarrow');
          pxh.loadState(pxh.states, 'default');
          if (closeElement) closeElement.remove();
          document.dispatchEvent(pxh.drawerClosed);
          pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        } else if (drawerIsHiddenAtSm) {
          pxh.loadState(pxh.transitions, 'outToIn');
          pxh.loadState(pxh.states, 'open');
          document.dispatchEvent(pxh.drawerOpened);
          pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
          pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
        } else {
          pxh.loadState(pxh.transitions, 'inToOut');
          pxh.loadState(pxh.states, 'default');
          document.dispatchEvent(pxh.drawerClosed);
          pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        }
      });
    }
  }
};

/**
 * Creates drawer state change events that should fire when the browser transitions between the medium breakpoint
 *
 * @param {String} breakpoint
 */
pxh.breakpointAtMd = function () {
  var drawer = document.getElementById('js-drawer');
  var drawerIsNarrowAtMd = drawer.classList.contains('pxh-drawer--narrow@md');
  pxh.loadState(pxh.transitions, 'clearAll');
  if (mdBreakpoint.matches) {
    // we entered the @md or @lg breakpoint from the @sm breakpoint
    if (drawerIsNarrowAtMd) {
      // the drawer wasn't open @sm
      if (window.matchMedia('(min-width: 1024px)').matches) {
        // we transitioned to the @lg breakpoint so open it to wide @lg
        // fire the transition
        pxh.loadState(pxh.transitions, 'outToWide');
      } else {
        // the drawer wasn't open @sm so open it to narrow @md
        // fire the transition
        pxh.loadState(pxh.transitions, 'outToNarrow');
      }
    }
  } else if (drawerIsNarrowAtMd) {
    // we exited the @md breakpoint into the @sm breakpoint
    // the drawer was open to narrow @md so move it out @sm
    pxh.loadState(pxh.transitions, 'narrowToOut');
  }
};

/**
 * Creates drawer state change events that should fire when the browser transitions between the large breakpoint
 *
 * @param {String} breakpoint
 */
pxh.breakpointAtLg = function (breakpoint) {
  var drawer;
  var drawerIsWideAtLg;
  var drawerIsNarrowAtMd;
  var closeElement;

  pxh.loadState(pxh.transitions, 'clearAll');

  drawer = document.getElementById('js-drawer');
  drawerIsWideAtLg = drawer.classList.contains('pxh-drawer--wide@lg');
  drawerIsNarrowAtMd = drawer.classList.contains('pxh-drawer--narrow@md');
  closeElement = document.getElementById('js-closer');

  if (breakpoint.matches) {
    // we entered the @lg breakpoint from the @md breakpoint
    if (drawerIsWideAtLg && !drawerIsNarrowAtMd) {
      // the drawer was open @md so keep it open @lg
      // don't fire any transitions
      pxh.loadState(pxh.states, 'default');
      if (closeElement) closeElement.remove(); // the state change auto-hides the notification list because it doesn't know if it's @sm or @lg, so the close element needs to follow suit
      pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
      pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
    } else {
      // drawer was narrow @md so transition it to wide @lg
      // fire transitions
      pxh.loadState(pxh.transitions, 'narrowToWide');
      pxh.loadState(pxh.states, 'default');
      document.dispatchEvent(pxh.drawerOpened);
      pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
      pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
    }
  } else {
    // we exited the @lg breakpoint into the @md breakpoint
    if (drawerIsWideAtLg) {
      // the drawer was wide @lg so transition it to narrow @md
      // close the notifications list if it's open
      // fire transitions
      pxh.loadState(pxh.transitions, 'wideToNarrow');
    }
    pxh.loadState(pxh.states, 'default');
    if (closeElement) closeElement.remove();
    document.dispatchEvent(pxh.drawerClosed);
    pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
    pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
  }
};

/**
 * Binds media queries to drawer controls or something
 *
 * @param {String} targetClass CSS class name of elements to bind to
 * @param {Object} window.matchMedia object
 */
pxh.bindDrawerMediaQueryControls = function (targetClass, mediaQuery) {
  var targetElements = document.getElementsByClassName(targetClass);
  var drawer = document.getElementById('js-drawer');
  var i;
  if (pxh.arrayExists(targetElements) && drawer) {
    // iterate through drawer controls and fire the pxhToggleDrawer function when clicked
    for (i = targetElements.length - 1; i >= 0; i -= 1) {
      targetElements[i].addEventListener('click', function () {
        pxh.loadState(pxh.transitions, 'clearAll');
        if (!mediaQuery.matches) {
          pxh.loadState(pxh.states, 'default');
          pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        }
      });
    }
  }
};

/**
 * When the user clicks the overlay, hides the drawer at the small breakpoint, or collapses the drawer at the narrow breakpoint
 *
 *
 */
pxh.overlayDrawerControl = function () {
  var overlay = document.getElementsByClassName(pxh.OVERLAY);
  var i;
  if (pxh.arrayExists(overlay)) {
    for (i = overlay.length - 1; i >= 0; i -= 1) {
      overlay[i].addEventListener('click', function (event) {
        if (!lgBreakpoint.matches && pxh.Cookies.get('pxh-drawer-open') === 'true') {
          pxh.loadState(pxh.transitions, 'clearAll');
          pxh.loadState(pxh.states, 'default');
          document.dispatchEvent(pxh.drawerClosed);
          pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        }
      });
    }
  }
};

/**
 * When the user hits the "ESC" key on the keyboard, hides the drawer at the small breakpoint, or collapses the drawer at the narrow breakpoint
 *
 */
pxh.escapeDrawerControl = function () {
  document.addEventListener('keyup', function (event) {
    if (event.keyCode === 27 && !lgBreakpoint.matches && pxh.Cookies.get('pxh-drawer-open') === 'true') {
      pxh.loadState(pxh.transitions, 'clearAll');
      pxh.loadState(pxh.states, 'default');
      document.dispatchEvent(pxh.drawerClosed);
      pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
      pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
    }
  });
};

/**
 * Toggles the visibility of a login menu
 *
 * @param {String} toggleControl CSS class name of the elements to turn into controls that will fire this event
 * @param {String} toggleTarget CSS class name of the login menu elements that should have their visibility toggled
 * @param {string} toggleClass Space-delimited list of CSS class names to toggle on the target elements when this event fires
 */
pxh.toggleLoginMenu = function (toggleControl, toggleTarget, toggleClass) {
  var toggleControlElements = document.getElementsByClassName(toggleControl);
  var toggleTargetElements = document.getElementsByClassName(toggleTarget);
  var menuIsVisible;
  var i;
  if (pxh.arrayExists(toggleControlElements) && pxh.arrayExists(toggleTargetElements)) {
    for (i = toggleControlElements.length - 1; i >= 0; i -= 1) {
      toggleControlElements[i].addEventListener('click', function (event) {
        event.preventDefault();
        menuIsVisible = toggleTargetElements[0].classList.contains(toggleClass);
        pxh.changeClasses(pxh.LOGIN_MENU, 'remove', toggleClass);
        if (!menuIsVisible) {
          pxh.changeClasses(toggleTarget, 'toggle', toggleClass);
        }
        event.stopPropagation();
      });
    }
  }
};

// ******
// TOASTS
// ******

/** @namespace pxh.toast */
pxh.toast = {
  /** @namespace pxh.toast.badge */
  badge: {
    count: 0,
    text: 0,

    /**
     * Increases the value of the notification icon badge by 1
     *
     * Truncates the value if the resulting number of notifications is greater than 9
     *
     * Won't display a value below zero
     */
    increment: function increment() {
      pxh.toast.badge.count += 1;
      if (pxh.toast.badge.count > 9) {
        pxh.toast.badge.text = '9+';
      } else if (pxh.toast.badge.count < 0) {
        pxh.toast.badge.count = 0;
        pxh.toast.badge.text = 0;
      } else {
        pxh.toast.badge.text = pxh.toast.badge.count;
      }
      pxh.toast.badge.update();
    },
    /**
     * Decreases the value for on the notification icon badge by 1
     *
     * Truncates the value if the resulting number of notifications is greater than 9
     *
     * Won't display a value below zero
     */
    decrement: function decrement() {
      pxh.toast.badge.count -= 1;
      if (pxh.toast.badge.count > 9) {
        pxh.toast.badge.text = '9+';
      } else if (pxh.toast.badge.count < 0) {
        pxh.toast.badge.count = 0;
        pxh.toast.badge.text = 0;
      } else {
        pxh.toast.badge.text = pxh.toast.badge.count;
      }
      pxh.toast.badge.update();
    },
    /**
     * Locates the notification icon badge element and updates the displayed value
     * Hides the notification icon and badge entirely if there aren't any notifications
     */
    update: function update() {
      var notificationIcon = document.getElementById('js-login__notifications');
      var notificationBadge = document.getElementById('js-login__notifications-badge');
      if (notificationIcon && notificationBadge) {
        notificationBadge.innerHTML = pxh.toast.badge.text;
        if (pxh.toast.badge.count > 0) {
          notificationIcon.classList.remove(pxh.DISPLAY_NONE);
          notificationBadge.classList.remove(pxh.LOGIN_NOTIFICATIONS_BADGE_HIDDEN);
        } else {
          notificationIcon.classList.add(pxh.DISPLAY_NONE);
          notificationBadge.classList.add(pxh.LOGIN_NOTIFICATIONS_BADGE_HIDDEN);
        }
      }
    }
  },

  /**
   * Adds a toast and corresponding notification (if applicable) to the application
   *
   * @example
   * var toastObject1 = {
   *   value : 'something' // pxh.toast.add merely requires that the toast object exists, and will use reasonable defaults if any parameters are missing
   * }
   *
   * var toastObject2 = {
   *   type : 'orange',
   *   isPersistent : true,
   *   icon : 'exclamation-circle',
   *   text : 'It can be this long or longer if you want. In fact, it can be really, really long if you have a lot you want to say. We kind of discourage this much content but knock yourself out! Just keep talking and talking and talking and this area will keep expanding and expanding.',
   *   actionLabel : 'View a lot of things right now',
   *   actionLink : 'http://predix.com',
   *   formattedTimestamp: '9:36 AM'
   * }
   *
   * var toastObject3 = {
   *   type : 'red',
   *   isPersistent : false,
   *   icon : 'exclamation-triangle',
   *   text : 'This is going to fire a callback.',
   *   actionLabel : 'Callback, yo!',
   *   actionCallback : function() {
   *     console.log('this was called from actionCallback')
   *   }
   * }
   *
   * var toastObject4 = {
   *   type : 'red',
   *   isPersistent : false,
   *   icon : 'times-circle',
   *   text : 'Fourth notification? Coming right up!',
   *   actionLabel : 'GE Digital',
   *   actionLink : 'http://digital.ge.com'
   * }
   *
   * document.addEventListener('DOMContentLoaded', function(event) {
   *   pxh.toast.add(toastObject1);
   *   pxh.toast.add(toastObject2, true); // creates a notification but not a toast
   *   pxh.toast.add(toastObject3);
   *   pxh.toast.add(toastObject4);
   * });
   * @param {object} object An object containing the parameters for the toast (and notification, if applicable) that will be created
   * @param {String} [object.id=unique hex value] - The unique id for the toast/notification being generated. If not provided, pxh-chrome will automatically generate a unique hexidecimal value. The id must be unique or else unexpected behavior might occur. If your application will be providing its own id, it is your responsibility to enforce its uniqueness
   * @param {String} [object.type='blue'] - The type of toast/notification. Available options are 'green', 'blue', 'orange', 'red'
   * @param {String} [object.icon='info-circle'] - The name of the Font Awesome icon to display for the toast/notification
   * @param {String} [object.text='You received a new notification.'] - The text to display for the toast/notification. Any HTML tags will be stripped out and the resulting plaintext will be displayed.
   * @param {String} [object.formattedTimestamp] The formatted text to display for the datetime the toast/notification was issued (e.g. 9:36 AM)
   * @param {String} [object.timestamp] The ISO 8601 datetime value for when the toast/notification was issued (e.g. 2016-08-01T17:36:10+00:00)
  * @param {Boolean} [object.isPersistent=false] - Whether or not the toast should persist until the user actively dismisses it. This option is only recognized if the toast has an `actionLink` or `actionCallback` associated with it
   * @param {Boolean} [object.suppressToast=false] An optional parameter that, if true, will only create a notification (if applicable) from the object, and will display a corresponding toast to the user
   * @param {String} [object.actionLabel='Action'] - The text to display in the toast's action button, if an `actionLink` or `actionCallback` is present.
   * @param {String} [object.actionLink] - The URL to follow when the user clicks the action button. Can be a fully qualified URL (e.g. http://www.predix.com/) or a relative route within your application (e.g. assets/detail/1234?show_cases_tab)
   * @param {Function} [object.actionCallback] - The callback function to execute when the user clicks the toast/notification's action button
   */
  add: function add(object, suppressToast) {
    var id = object && object.id ? object.id : Math.floor(Math.random() * 16777215).toString(16);
    var notificationList = document.getElementById('js-notifications__list');
    var toastList = document.getElementById('js-toasts');
    var notificationFirstChild;
    var notificationElement;
    var toastFirstChild;
    var toastElement;

    if (notificationList && (object.actionLink || object.actionCallback)) {
      notificationFirstChild = notificationList.firstChild;
      notificationElement = notificationList.insertBefore(pxh.toast.markup.createNotification(object, id), notificationFirstChild);
      pxh.toast.badge.increment();
      pxh.toast.action.dismissButton(notificationElement, 'notification', id);
      pxh.toast.action.expandButton(notificationElement, 'notification');
      if (object.actionLink) {
        pxh.toast.action.bindLink(toastElement, 'notification__link', id);
      } else if (object.actionCallback) {
        pxh.toast.action.bindCallback(toastElement, 'notification__link', id, object.actionCallback);
      }
    }
    if (toastList && !object.suppressToast) {
      toastFirstChild = toastList.firstChild;
      toastElement = toastList.insertBefore(pxh.toast.markup.createToast(object, id), toastFirstChild);
      pxh.toast.action.dismissButton(toastElement, 'toast', id, true);
      pxh.toast.action.expandButton(toastElement, 'toast');
      if (object.actionLink) {
        pxh.toast.action.bindLink(toastElement, 'toast__button', id);
      } else if (object.actionCallback) {
        pxh.toast.action.bindCallback(toastElement, 'toast__button', id, object.actionCallback);
      }
      if (!object.isPersistent) {
        setTimeout(function () {
          if (!toastElement.classList.contains(pxh.TOAST_EXPANDED)) {
            // after 2000ms animate the toast out
            pxh.toast.autoHide(id);
            // 1000ms after the animation, remove the notification from the DOM
            setTimeout(function () {
              pxh.toast.autoRemove(id);
            }, 1000);
          }
        }, 5000);
      }
    }
    return id;
  },
  /** @namespace pxh.toast.action */
  action: {
    /**
     * Binds an event to an element that will dismiss a toast/notification (and its correponding toast/notification, if applicable) when clicked
     *
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification combination associated with the target dismiss button
     */
    dismissButton: function dismissButton(element, slug, id, preserveNotification) {
      var button = document.getElementById('js-' + slug + '__dismiss-button--' + id);
      if (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          pxh.toast.hide(id, preserveNotification);
          setTimeout(function () {
            pxh.toast.remove(id, preserveNotification);
          }, 1000);
        });
      }
    },
    /**
     * Binds an event to an element that will expand its corresponding toast/notification when clicked
     *
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     */
    expandButton: function expandButton(element, slug) {
      var button = element.querySelector('.js-' + slug + '__more-button');
      if (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          pxh.toast.expand(element, slug);
        });
      }
    },
    /**
     * Removes all toasts and notifications from application
     */
    removeAllButton: function removeAllButton() {
      pxh.toast.hideAll();
      setTimeout(function () {
        pxh.toast.removeAll();
      }, 1000);
    },

    /**
     * Binds an callback to an element that will fire when clicked, and automatically hide and remove the corresponding toast/notification from the application
     *
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification combination associated with the callback action
     * @param {Function} callback The callback to fire
     */
    bindCallback: function bindCallback(element, slug, id, callback) {
      var button = document.getElementById('js-' + slug + '--' + id);
      if (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          pxh.toast.action.fireCallback(callback);
          pxh.toast.hide(id);
          setTimeout(function () {
            pxh.toast.remove(id);
          }, 1000);
        });
      }
    },

    /**
     * Binds a hyperlink to an element that will fire when clicked, and automatically hide and remove the corresponding toast/notification from the application
     *
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification combination associated with the link action
     * @param {Function} callback The callback to fire
     */
    bindLink: function bindLink(element, slug, id) {
      var button = document.getElementById('js-' + slug + '--' + id);
      if (button) {
        button.addEventListener('click', function (event) {
          pxh.toast.hide(id);
          setTimeout(function () {
            pxh.toast.remove(id);
          }, 1000);
        });
      }
    },
    /**
     * Fires a callback
     *
     * @param {Function} callback The callback to fire
     */
    fireCallback: function fireCallback(callback) {
      callback();
    }
  },

  /**
   * Hides a toast and its corresponding notification (if applicable) from the user
   *
   * @param {String} id The unique ID of the toast/notification combination to hide from the user
   * @param {Boolean} [preserveNotification=false] When dismissing a toast, whether to retain its corresponding notification in the notification list
   */
  hide: function hide(id, preserveNotification) {
    var toastList = document.getElementById('js-toasts');
    var toastItem = document.getElementById('js-toast--' + id);
    var notificationList = document.getElementById('js-notifications__list');
    var notification = document.getElementById('js-notification--' + id);
    if (toastList && toastItem) {
      toastItem.classList.add(pxh.TOAST_ANIMATE_OUT);
      toastItem.classList.remove(pxh.TOAST_ANIMATE_IN);
    }
    if (notificationList && notification && !preserveNotification) {
      notification.classList.add(pxh.NOTIFICATION_ANIMATE_OUT);
      notification.classList.remove(pxh.NOTIFICATION_ANIMATE_IN);
    }
  },

  /**
   * Hides all notifications from the user
   *
   */
  hideAll: function hideAll() {
    var notificationList = document.getElementById('js-notifications__list');
    var notifications = document.getElementsByClassName(pxh.NOTIFICATION);
    var id;
    var i;
    if (notificationList && notifications) {
      for (i = notifications.length - 1; i >= 0; i -= 1) {
        id = notifications[i].id.replace('js-notification--', '');
        pxh.toast.hide(id);
      }
    }
  },

  /**
   * Hides a toast
   *
   * @param {String} id The unique ID of the toast to hide
   */
  autoHide: function autoHide(id) {
    var toastList = document.getElementById('js-toasts');
    var toastItem = document.getElementById('js-toast--' + id);
    if (toastList && toastItem) {
      toastItem.classList.add(pxh.TOAST_ANIMATE_OUT);
      toastItem.classList.remove(pxh.TOAST_ANIMATE_IN);
    }
  },

  /**
   * Removes a toast and its corresponding notification (if applicable) from the application
   *
   * @param {String} id The unique ID of the toast/notification combination to remove
   */
  remove: function remove(id, preserveNotification) {
    var toastList = document.getElementById('js-toasts');
    var toastElement = document.getElementById('js-toast--' + id);
    var notificationList = document.getElementById('js-notifications__list');
    var notification = document.getElementById('js-notification--' + id);
    if (toastList && toastElement) {
      toastElement.remove();
    }
    if (notificationList && notification && !preserveNotification) {
      notification.remove();
      pxh.toast.badge.decrement();
    }
  },

  /**
   * Removes a toast from the application
   *
   * @param {String} id The unique ID of the toast to remove
   */
  autoRemove: function autoRemove(id) {
    var toastList = document.getElementById('js-toasts');
    var toastElement = document.getElementById('js-toast--' + id);
    if (toastList && toastElement) {
      toastElement.remove();
    }
  },

  /**
   * Removes all notifications from the application
   *
   */
  removeAll: function removeAll() {
    var notificationList = document.getElementById('js-notifications__list');
    var notifications = document.getElementsByClassName(pxh.NOTIFICATION);
    var id;
    var i;
    if (notificationList && notifications) {
      for (i = notifications.length - 1; i >= 0; i -= 1) {
        id = notifications[i].id.replace('js-notification--', '');
        pxh.toast.remove(id);
      }
    }
  },

  /**
   * Expands the targeted toast/notification so all its text is visible to the user, or collapses it if it is already expanded
   *
   * @param {HTMLElement} element The element to expand
   * @param {String} slug The text slug to be used when generating class names and targets
   */
  expand: function expand(element, slug) {
    if (element.classList.contains('pxh-' + slug + '--expanded')) {
      element.classList.remove('pxh-' + slug + '--expanded');
      element.querySelector('.pxh-' + slug + '__more').classList.remove('pxh-' + slug + '__more--expanded');
      element.querySelector('.pxh-' + slug + '__more-button').innerHTML = '<i class="fa fa-chevron-down"></i>';
    } else {
      element.classList.remove('pxh-' + slug + '--animate-in');
      element.classList.add('pxh-' + slug + '--expanded');
      element.querySelector('.pxh-' + slug + '__more').classList.add('pxh-' + slug + '__more--expanded');
      element.querySelector('.pxh-' + slug + '__more-button').innerHTML = '<i class="fa fa-chevron-up"></i>';
    }
  },
  /** @namespace pxh.toast.markup */
  markup: {
    /**
     * Generates the HTML markup for displaying a toast/notification's icon
     *
     * @param {Object} object The JavaScript object of the toast/notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
    icon: function icon(object, slug) {
      var iconSlug = object.icon ? object.icon : 'info-circle';
      var type = object.type ? object.type : 'blue';
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__icon pxh-' + slug + '__icon--' + type + '">\n');
      markup.push('  <i class="fa fa-' + iconSlug + '"></i>\n');
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a toast's text
     *
     * @param {Object} object The JavaScript object of the toast that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
    toastText: function toastText(object, slug) {
      // If toast text is defined in the toast object, use it
      // If not, see if it's defined in App Hub's nav.localeData object and use that
      // If not, use the default 'You received a new notification' text
      var text;
      var markup = [];
      if (object.text) {
        text = pxh.stripHTML(object.text);
      } else if (window.nav && window.nav.localeData.toastTextDefault) {
        text = pxh.stripHTML(window.nav.localeData.toastTextDefault);
      } else {
        text = 'You received a new notification.';
      }
      markup.push('<div class="pxh-' + slug + '__text">\n');
      markup.push('  ' + text + '\n');
      markup.push(pxh.toast.markup.more(object, slug));
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a notification's text
     *
     * @param {Object} object The JavaScript object of the notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the notification being created
     */
    notificationText: function notificationText(object, slug, id) {
      // If toast text is defined in the toast object, use it
      // If not, see if it's defined in App Hub's nav.localeData object and use that
      // If not, use the default 'You received a new notification' text
      var text;
      var markup = [];
      if (object.text) {
        text = pxh.stripHTML(object.text);
      } else if (window.nav && window.nav.localeData.toastTextDefault) {
        text = pxh.stripHTML(window.nav.localeData.toastTextDefault);
      } else {
        text = 'You received a new notification.';
      }
      markup.push('<div class="pxh-' + slug + '__text">\n');
      if (object.actionLink) {
        markup.push('  <a class="pxh-' + slug + '__link" href="' + object.actionLink + '" id="js-' + slug + '__link--' + id + '">\n');
      } else if (object.actionCallback) {
        markup.push('  <a class="pxh-' + slug + '__link" href="#" id="js-' + slug + '__link--' + id + '">\n');
      }
      markup.push('  ' + text + '\n');
      if (object.actionLink || object.actionCallback) {
        markup.push('  </a>\n');
      }
      markup.push(pxh.toast.markup.more(object, slug));
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a toast/notification's "show more" button
     *
     * @param {Object} object The JavaScript object of the toast/notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
    more: function more(object, slug) {
      var markup = [];
      markup.push('  <div class="pxh-' + slug + '__more">\n');
      markup.push('    <a href="#" class="pxh-' + slug + '__more-button js-' + slug + '__more-button">\n');
      markup.push('      <i class="fa fa-chevron-down"></i>\n');
      markup.push('    </a>\n');
      markup.push('  </div>\n');
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a notification's formatted timestamp. This method displays the contents of the `object.formattedTimestamp` string for the toast object passed to it, with a fallback to `object.timestamp` if `formattedTimestamp` is not present. Any formatting for how `formattedTimestamp` should be displayed must be performed in advance.
     *
     * @param {Object} object The JavaScript object of the notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
    timestamp: function timestamp(object, slug) {
      var formattedTimestamp = object.formattedTimestamp ? object.formattedTimestamp : false;
      var rawTimestamp = object.timestamp ? object.timestamp : false;
      var timestampTitle;
      var markup = [];
      if (rawTimestamp) {
        timestampTitle = ' title="' + rawTimestamp + '"';
      }
      if (formattedTimestamp) {
        markup.push('<div class="pxh-' + slug + '__timestamp"' + timestampTitle + '>\n');
        markup.push('  ' + formattedTimestamp + '\n');
        markup.push('</div>\n');
      } else if (rawTimestamp) {
        markup.push('<div class="pxh-' + slug + '__timestamp">\n');
        markup.push('  ' + rawTimestamp + '\n');
        markup.push('</div>\n');
      }
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a toast/notification's "dismiss" button
     *
     * @param {Object} object The JavaScript object of the toast/notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification being created, and that will be dismissed
     */
    dismiss: function dismiss(object, slug, id) {
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__dismiss">\n');
      markup.push('  <a href="#" class="pxh-' + slug + '__dismiss-button js-' + slug + '__dismiss-button" id="js-' + slug + '__dismiss-button--' + id + '">\n');
      markup.push('    <i class="fa fa-times"></i>\n');
      markup.push('  </a>\n');
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a toast/'s action button, which can be either a hyperlink (relative or absolute) or a callback
     *
     * @param {Object} object The JavaScript object of the toast that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification being created
     */
    button: function button(object, slug, id) {
      var markup = [];

      // If actionLabel is defined in the toast object, use it
      // If not, see if it's defined in App Hub's nav.localeData object and use that
      // If not, use the default 'Action' text
      var label;

      if (object.actionLabel) {
        label = pxh.stripHTML(object.actionLabel);
      } else if (window.nav && window.nav.localeData.toastActionLabelDefault) {
        label = pxh.stripHTML(window.nav.localeData.toastActionLabelDefault);
      } else {
        label = 'Action';
      }
      if (object.actionLink) {
        markup.push('<div class="pxh-' + slug + '__action">\n');
        markup.push('  <a class="pxh-' + slug + '__button" href="' + object.actionLink + '">' + label + '</a>\n');
        markup.push('</div>\n');
      } else if (object.actionCallback) {
        markup.push('<div class="pxh-' + slug + '__action">\n');
        markup.push('  <a class="pxh-' + slug + '__button" href="#" id="js-' + slug + '__button--' + id + '">' + label + '</a>\n');
        markup.push('</div>\n');
      }
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the complete HTML markup for creating a new toast
     *
     * @param {Object} object The JavaScript object of the toast that should be created
     * @param {String} id The unique ID of the toast being created
     * @returns {HTMLElement} element A toast element that can be inserted into the DOM
     */
    createToast: function createToast(object, id) {
      var slug = 'toast';
      var element = document.createElement('div');
      var markup = [];
      element.className = 'pxh-' + slug + ' pxh-' + slug + '--animate-in';
      element.id = 'js-' + slug + '--' + id;
      markup.push(pxh.toast.markup.icon(object, slug));
      markup.push(pxh.toast.markup.toastText(object, slug));
      markup.push(pxh.toast.markup.button(object, slug, id));
      markup.push(pxh.toast.markup.dismiss(object, slug, id));
      markup = markup.join('');
      element.innerHTML = markup;
      return element;
    },

    /**
     * Generates the complete HTML markup for creating a new notification
     *
     * @param {Object} object The JavaScript object of the notification that should be created
     * @param {String} id The unique ID of the toast/notification being created, and that will be dismissed
     * @returns {HTMLElement} element A notification element that can be inserted into the DOM
     */
    createNotification: function createNotification(object, id) {
      var slug = 'notification';
      var element = document.createElement('div');
      var markup = [];
      element.className = 'pxh-' + slug;
      element.id = 'js-' + slug + '--' + id;
      markup.push(pxh.toast.markup.icon(object, slug));
      markup.push(pxh.toast.markup.notificationText(object, slug, id));
      markup.push(pxh.toast.markup.timestamp(object, slug));
      markup.push(pxh.toast.markup.dismiss(object, slug, id));
      markup = markup.join('');
      element.innerHTML = markup;
      return element;
    }
  },
  /**
   * Returns an array of all notifications currently displayed in the notification list
   *
   * @returns {Array|Boolean} notifications An array of notification IDs, or false if no notifications are currently displayed in the notification list
   */
  getNotifications: function getNotifications() {
    var notifications;
    var notificationList = document.getElementById('js-notifications__list');
    var notificationElements;
    var i;
    if (notificationList) {
      notificationElements = notificationList.getElementsByClassName(pxh.NOTIFICATION);
    }
    if (notificationElements.length > 0) {
      for (i = notificationElements.length - 1; i >= 0; i -= 1) {
        notifications.push(notificationElements[i].id);
      }
      return notifications;
    }
    return false;
  }
};

// ********
// FIRE!!!!
// ********

lgBreakpoint = window.matchMedia('(min-width: 1024px)');
mdBreakpoint = window.matchMedia('(min-width: 768px)');

pxh.viewResized = document.createEvent('CustomEvent');
pxh.viewResized.initCustomEvent('pxhViewResized', false, false, {
  viewResized: true
});

document.addEventListener('DOMContentLoaded', function (event) {
  pxh.addResizeSensor('js-view');
});

document.addEventListener('DOMContentLoaded', function (event) {
  if (document.getElementById('js-drawer')) {
    lgBreakpoint.addListener(pxh.breakpointAtLg);
    mdBreakpoint.addListener(pxh.breakpointAtMd);
  }
  pxh.drawerOpened = document.createEvent('CustomEvent');
  pxh.drawerOpened.initCustomEvent('pxhDrawerOpened', false, false, {
    drawerOpened: true
  });

  pxh.drawerClosed = document.createEvent('CustomEvent');
  pxh.drawerClosed.initCustomEvent('pxhDrawerClosed', false, false, {
    drawerClosed: true
  });

  pxh.bindControl(pxh.VIEW_HEADER_DRAWER_TOGGLE);
  pxh.bindControl(pxh.DRAWER_TOGGLE);

  if (pxh.Cookies.get('pxh-drawer-open') === null) {
    pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
  }

  if (pxh.Cookies.get('pxh-drawer-narrow') === null) {
    pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
  }

  // check if the 'narrow' cookie is set and if we're currently at the desktop breakpoint
  if (window.matchMedia('(min-width: 1024px)').matches && pxh.Cookies.get('pxh-drawer-narrow') === 'true') {
    // toggle the drawer closed
    pxh.loadState(pxh.states, 'narrowAtLg');
    document.dispatchEvent(pxh.drawerClosed);
    pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
  } else if (window.matchMedia('(min-width: 1024px)').matches) {
    pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
  } else {
    pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
  }
  document.addEventListener('navRefreshed', function () {
    pxh.toggleLoginMenu(pxh.LOGIN_PROFILE_LINK, pxh.LOGIN_MENU_PROFILE, pxh.LOGIN_MENU_VISIBLE);
    pxh.toggleLoginMenu(pxh.LOGIN_SETTINGS_LINK, pxh.LOGIN_MENU_SETTINGS, pxh.LOGIN_MENU_VISIBLE);
  });

  pxh.bindDrawerMediaQueryControls(pxh.NAVIGATION_LINK, lgBreakpoint);
  pxh.bindDrawerMediaQueryControls(pxh.NAVIGATION_SUB_LINK, lgBreakpoint);

  pxh.overlayDrawerControl();

  pxh.escapeDrawerControl();

  pxh.action.clickToCloseAndFire(pxh.LOGIN_PROFILE_LINK, pxh.LOGIN_MENU_PROFILE, 'remove', pxh.LOGIN_MENU_VISIBLE);
  pxh.action.clickToCloseAndFire(pxh.LOGIN_SETTINGS_LINK, pxh.LOGIN_MENU_SETTINGS, 'remove', pxh.LOGIN_MENU_VISIBLE);

  pxh.toggleLoginMenu(pxh.LOGIN_PROFILE_LINK, pxh.LOGIN_MENU_PROFILE, pxh.LOGIN_MENU_VISIBLE);
  pxh.toggleLoginMenu(pxh.LOGIN_SETTINGS_LINK, pxh.LOGIN_MENU_SETTINGS, pxh.LOGIN_MENU_VISIBLE);
});

document.addEventListener('DOMContentLoaded', function () {
  var notificationsIcon;
  var clearNotificationsLink;
  pxh.toggleMenu(pxh.LOGIN_NOTIFICATIONS, pxh.NOTIFICATIONS, pxh.NOTIFICATIONS_VISIBLE);
  notificationsIcon = document.getElementById('js-login__notifications');
  if (notificationsIcon) {
    notificationsIcon.addEventListener('click', function (e) {
      e.preventDefault();
      pxh.action.clickToCloseAndHold('js-login__notifications', 'js-notifications', pxh.NOTIFICATIONS_VISIBLE);
    });
  }
  clearNotificationsLink = document.getElementById('js-notifications__link--clear');
  if (clearNotificationsLink) {
    clearNotificationsLink.addEventListener('click', function (e) {
      e.preventDefault();
      pxh.toast.action.removeAllButton();
    });
  }
});
//# sourceMappingURL=pxh-chrome.js.map
