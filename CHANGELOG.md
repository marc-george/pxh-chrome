# pxh-chrome changelog

### 3.0.4 - Feb, 2018
* Local fonts

### 3.0.3 - March 7, 2017
* Update colors to latest px 2017 themes.

### 3.0.1 - December 15, 2016
* Remove `.tmp` folder
  * Everything now builds to and serves from the `/dist` folder
* Update Sass compilation gulp tasks to compile against the flattened Sass files in `/dist/sass`
  * This way everything is compiling against the exact same Sass files, no matter if it's being done within pxh-chrome, or by ui-theme-service
* Remove `includePaths` property from Sass compilation tasks
  * We don't need them now that we're compiling against flattened Sass
* Remove underline on hover by default for all links
* Bump browser-sync, eslint, gulp-sass, gulp-sourcemaps

### 3.0.0 - December 9, 2016
**In order to support future theming-as-a-service capabilities, this release introduces breaking changes that will affect apps that use the pxh-chrome Sass files directly.**

* The file `sass/_settings.theme-default.scss` has been renamed `sass/_theme.default.scss`
* The file `sass/_settings.theme-prechrome.scss` has been renamed `sass/_theme.prechrome.scss`

Apps that use the compiled pxh-chrome CSS are not affected.

* Add import-resolve and `flatten.js` task to generate concatenated Sass manifest files
* Hard code `../bower_components` path to bower components to facilitate manifest concatenation
* Add `theme` layer to all Sass manifests and move theme-related Sass partials into it
* Refine prechrome theme so it follows the theming contract
* Add text decoration and hover style properties for default hyperlinks, and expose them as variables to allow customization via theming
* Add `sass:flatten` Gulp task to flatten Sass manifests and output them to `dist/sass
* Tweak view header font size modifier so it renders at 20px by default
* Bump versions on babel-core, eslint, protractor

### 2.11.1 - November 30, 2016
* Add unit tests that test the behavior of toast and notification default strings with (and without) corresponding `window.nav.localeData` values
* Tweak `.eslintc` overrides for eslint-config-airbnb-base
* Resolve all ESLint errors in `pxh-chrome.js`

### 2.11.0 - November 29, 2016
* Add support for localization/internationalization of hard-coded default toast strings via App Hub's `window.nav.localeData` object
  * If `text` or `actionLabel` are defined in the passed toast object, it simply uses those values
  * If not, it looks for `window.nav.localeData.toastTextDefault` for the default internationalized "You received a new notification." message and `window.nav.localeData.toastActionLabelDefault` for the default internationalized "Action" label
  * If not, it uses the default strings hard-coded in pxh-chrome
* Fix height of view header drawer toggle to match drawer toggle
* Bump versions on browser-sync, eslint, gulp-sourcemaps, mocha

### 2.10.0 - November 18, 2016
* Replace "show more/less" text buttons in toasts and notifications with "down/up chevrons" to simplify internationalization
* Bump versions on browser-sync, eslint, handlebars, lodash, protractor
* Update `yarn.lock` file with new node modules
* Fix unmerged feature branch from 2.9.0 release

### 2.9.0 - November 18, 2016
* _(this was an incomplete release)_
* Add `latest` tag to CDN, which always points to the latest available version of pxh-chrome
  * Use it like this:
    * `<link rel="stylesheet" href="//dzlpbrbc7yvq0.cloudfront.net/pxh-chrome/latest/dist/css/pxh-chrome.min.css">`
    * `<script src="//dzlpbrbc7yvq0.cloudfront.net/pxh-chrome/latest/dist/js/pxh-chrome.min.js"></script>`
* Update README docs to use `latest` tag on CDN

### 2.8.2 - November 15, 2016
* Add color variables for new 2017 cooler shades of gray
  * Namespaced as `$l-grayxx` (`l` for `light` as opposed to `d` for `dark` theme)
* Add color variables for dark "lights out" Predix UI theme
* Add "alpha" version of `_settings.theme-lights-out.scss` "lights out" theme
  * It's not ready yet but we want to start testing it
* Remove a stray `$white` variable for drawer header link color so pxh-chrome Sass files are completely independent from colors defined in `_settings.colors.scss`
  * The only place these colors are used now are in theme files (e.g. `_settings.theme-defaults.scss`, `_settings.theme-lights-out.scss`)
* Use `$white` and `$black` variables instead of hard-coded RGB values for box shadows and borders
* Fix end-to-end test for pxh-chrome version number

### 2.8.1 - November 10, 2016
* Update demo text for "user with a really long name"
* Replace avatar image with Thomas Edison

### 2.8.0 - November 7, 2016
* Change default `$pxh-view-bg-color` value to `transparent` instead of a color to minimize confusion and surprise when applied to existing designs

### 2.7.0 - November 7, 2016
* Change default value of `$pxh-view-header-border-color` from an actual color to black with 30% alpha transparency, to support a wider variety of `pxh-view` background colors
* Add `$pxh-view-bg-color` variable to allow customization of default `pxh-view` background color independently from default `<html>`/`<body` color or default `pxh-wrapper` color
* Bump required version of node to 6.3.0 and add required version of npm
* Bump node modules
* Bump sass-mq to 3.3.1
* Add carets to bower component references so latest minor releases will always be installed (yolo)
* Fix path to `sass` folder in Sass watch task

### 2.6.0 - October 26, 2016
* Update Font Awesome to [4.7.0](https://github.com/FortAwesome/Font-Awesome/pull/10012)
  * New icons including handshake, open envelope, bath, shower, id card, address book, thermometer
* Bump Babel node modules
* Tweak 2.5.0 release notes

### 2.5.0 - October 24, 2016
* Move prechrome override variables out of the Sass manifest and into a `settings.theme-prechrome` layer where they belong
* Split Px colors and font/line/spacing Sass values into their own `settings` partials
  * This way, downstream themes (e.g. "prechrome") can use their variables natively without needing to redeclare them
* Stop ignoring Sass files in `bower.json` so people can get them when they run `bower install`, and can include them in their own Sass manifests
* Move Sass files out of `/public` folder and into root `/sass` folder
* Bump versions on node modules
* Alphebetize ignored files and ignore a few new ones when installing pxh-chrome via Bower
* Support Yarn by adding a `yarn.lock` file
  * Install yarn via `npm install -g yarn` and run it by typing `yarn` instead of `npm install` in the root of your project
  * To get Yarn to work behind the GE proxy, you'll need to create a `.yarnrc` file in your `~/` home folder with the line `strict-ssl false`

### 2.4.0 - October 20, 2016
* Add `pxh-spinner--no-margin` and `pxh-spinner--margin` modifier classes to pxh-spinner loading indicator
  * `pxh-spinner--no-margin` removes all margins around the loading indicator, allowing it to be used just about anywhere
  * The styles associated with `pxh-spinner--margin` are redundant, as they're applied by default to `pxh-spinner` to maintain the indicator's currently expected behavior when used when a microapp is loading; that said, if we could do it over again, we'd obviously make `no-margin` the default styling

### 2.3.1 - October 17, 2016
* Bump versions on browser-sync, gulp-sourcemaps, mocha
* Bump Airbnb base ESLint config to latest version
  * Bump corresponding ESLint and plugin-import dependencies

### 2.3.0 - October 10, 2016
* Add theming support
  * Consolidate all theme-related attributes and Sass variables to `_settings.theme.scss`
  * Remove `_settings.defaults.scss` and `_settings.pxh-chrome.css`
  * Remove magic numbers and calculate nearly all widths, margins and paddings based on `$pxh-base-spacing-unit` (which in turn is based on `$pxh-base-font-size`)
  * Calculate all font sizes based on `$pxh-base-font-size`, and remove Px font sizes
  * Add `$pxh-base-spacing-scale-ratio` value that allows fine-tuning of relationship between base font size and base spacing unit
  * Make GE Inspira Sans `@font-face` import configurable
  * Move base font family into variable
  * Move all `inuit` Sass variables into the `pxh` namespace
* Add support for including an image logo instead of text in the drawer header via `pxh-view-header--image` and `pxh-view-header__link--image` classes
  * Dimensions are 60px x 200px
  * Any image larger will be scaled proportionally to fit via `background-scale: contains` property
  * We recommend an image least 180px x 600px in size to support devices with @3x dpi retina displays (e.g. iPhone 6+)
  * We recommend using a PNG image with alpha transparency
  * An image that does not fill the full height will be centered vertically within the container
* Bump Normalize.css to 5.0.0
* Change import order of Sass components to be alphabetical
* Remove `_elements.typography.scss`, as all the styles it declares are already covered by Normalize.css
* Update Sass mixin names for clarity
* Bump metalsmith-copy to 0.3.0
* Bump mocha to 3.1.1

### 2.2.1 - September 30, 2016
* Add end-to-end tests for pxh-toast and pxh-notification capabilities
* Fix bug where drawer could overlap view area when transitioning from default breakpoint to @lg breakpoint
  * Could happen when user resized browser window while on a different browser tab, and then switched back to their tab with the pxh-chrome layout
* Fix bug where toasts and notifications weren't receiving a default action label if one wasn't provided in the toast object
* Fix bug where notifications badge wasn't being assigned a default value
* Fix bug where the flag to suppress a toast object's "toast" and send it directly to the notification list wasn't being recognized
* Bump mocha, eslint, babel-core, browser-sync, chai-as-promised, lodash, and other dependencies

### 2.2.0 - September 28, 2016
* Display notifications badge at medium breakpoint and at large breakpoint when drawer is narrow
* Apply a maximum height to the notifications list at the default breakpoint to improve compatibility with mobile phones in landscape orientation
* Apply a maximum height to the notifications list at the medium breakpoint
* Apply a width to the notifications list at the medium breakpoint so it's no longer dependent on the drawer being wide
* Remove flag for enabling or disabling pxh-notifications
  * They are now always enabled by default
* Fix bug where user couldn't scroll the toast container if their cursor was over the vertical margin between two toasts
* Remove flag for enabling or disabling pxh-toasts
  * They are now always enabled by default
* Scope ESLint to use ES2015 for pxh-chrome root, but ES5 for public folder
* Fix most ESLint errors in gulpfile
* Ignore third-party libraries in `pxh-chrome.js` when running ESLint
* Scope pxh-chrome's npm namespace to `@hubs`
  * http://blog.npmjs.org/post/116936804365/solving-npms-hard-problem-naming-packages

### 2.1.5 - September 23, 2016
* Bump gulp-htmlmin to 3.0.0
* Add documentation and code example for using the postchrome error state markup in a microapp
* Clean up Javascript comments

### 2.1.4 - September 20, 2016
* Update README
  * Add `pxh-toasts` and `pxh-notifications` to list of primary components
  * Add links to introductory screencast and slides
  * Add notes and examples for CDN assets, and which files to reference

### 2.1.3 - September 19, 2016
* Bump versions on node modules
* Bump JavaScript Cookie library to 2.1.3
* Remove duplicate Javascript for drawer behavior
* Move all "fire" Javascript to bottom of `pxh-chrome.js`
* Fix a number of linting errors in Sass manifests
  * Use single-quotes
  * Remove filename extensions
  * Fix spacing around colons
* Fix pxh-spinner link in documentation
* Fix title comment for px-theme overrides

### 2.1.2 - September 6, 2016
* Point to CloudFront CDN for Font Awesome 4.6.3 fonts to fix proxy issue
* Add notes and link in README that describe how to cut a new release of pxh-chrome
* Fix the most egregious ESLint errors in `pxh-chrome.js`

### 2.1.1 - September 1, 2016
* Update Sass compilation gulp tasks to improve behavior of sourcemaps, autoprefixing and minification
* Update Javascript gulp tasks to lint against Airbnb's ES5 style guide

### 2.1.0 - August 19, 2016
* **Remove explicit `window.pxh` namespace from  `pxh` object**
  * `pxh` is bound to the `window` object automatically in a browser environment, so `window.pxh` is unnecessarily verbose
* Add font size, line height, and color rules to `html` element
  * These rules will be removed from the next release of `ui-microapp` so they need to be defined at the `ui-app-hub` level (which means they need to be defined in pxh-chrome)

### 2.0.1 - August 11, 2016
* Remove duplicate copies of `element.remove` polyfill, `getStyle`, `stripHTML`, `arrayExists`, and `getItemByPropertyName` methods from `window.pxh`
* Update whitespace, semicolons, line breaks, and some code in `pxh-chrome.js` to match output from `babel` task in Gulp
* Bump version on Mocha

### 2.0.0 - August 10, 2016
* **Move all `pxh` methods into `window.pxh` namespace**
* Add `js-drawer` ID to `pxh-drawer` component so we can target it specifically
* Enable toast functionality in "chromeless" mode
  * Add `pxh-chrome.js` to "chromeless" but prevent pxh-drawer JavaScript from firing
  * Add toast functionality and demo code to chromeless demo
* Add `pxh-clearfix` utility class, which can be applied to a parent element to automatically clear the height of its floated child elements
* Add `pxh-toasts` placeholder element to all layouts and screens (including "chromeless" but excluding "error" screens)
* Fix toggle behavior for showing/hiding the notification list
  * Use `window.pxh.clickToCloseAndHold` to insert invisible full-screen element, and remove overlay-specific code
  * Clicking in the drawer or in the content area/overlay will dismiss the list without firing the event on a clickable element beneath the cursor
* Add `pxh-notifications` placeholder element to all "chromeful" layouts and screens
* Update `pxh-chrome.js` to use more CSS class variables and fewer hard-coded class names
* Remove all HTML5 `<section>`, `<aside>`, `<header>` and `<nav>` elements and use `<div>`s exclusively
* Fix file extensions on sourcemaps so browsers can actually find them

### 1.7.0 - August 5, 2016
* Link to CDN versions of Font Awesome fonts and GE Inspira fonts
* Remove Font Awesome and GE Inspira fonts from pxh-chrome, as we now use the CDN fonts exclusively
* Fix names of `pxhDrawerOpened` and `pxhDrawerClosed` custom events
  * These are still undocumented events and we reserve the right to change or remove them `;-)`

### 1.6.0 - August 3, 2016
* Fix bug where drawer controls would fire their default event and update the URL path
* Add `pxh-chrome-rtl.css`, `pxh-chrome-rtl.min.css`, `pxh-prechrome-rtl.css`, and `pxh-prechrome-rtl.min.css` to `/dist` for enabling right-to-left layouts
  * Developers can swith between left-to-right and right-to-left layouts by changing the link to the pxh-chrome CSS file in the `<head>` of their HTML file
* Add a right-to-left layout demo page that demonstrates the right drawer, navigation, sub-navigation, login component, toasts, and notifications

### 1.5.1 - August 2, 2016
* Fix pxh-chrome version number

### 1.5.0 - August 2, 2016
* Dismissing a toast no longer removes its corresponding notification (if applicable) from the notification list
  * Clicking the "action" button on a toast still dismisses both the toast and its corresponding notification
  * Clicking the "action" button on a notification still dismisses both the toast and the notification
  * Dismissing a notification still dismisses both the toast and the notification
* Bump versions on browser-sync, gulp-uglify, mocha
* Fix version number for gulp-plumber

### 1.4.0 - August 1, 2016
* Activate timestamps in notifications
  * To use, include a `formattedTimestamp : '9:36 AM'` property in your toast `object` containing the formatted string you want to display as the timestamp
  * If a `timestamp` property is provided in addition to the `formattedTimestamp`, it will be used as `title` text on hover
  * If only a `timestamp` property is provided, it will be displayed as a string
* Add ability to pass a custom unique ID to `pxh.toast.add()` when creating a new toast/notification
* Fix bug where an empty pxh-toasts component could prevent click events from triggering on elements underneath it
* Implement support for right-to-left languages and layout
  * Drawer, drawer header, view header, view, navigation, login, notifications, toasts
  * Switch between left-to-right and right-to-left layouts by updating the `$pxh-language-direction` variable (valid options are `ltr` [default] and `rtl`)
    * This toggles the `$pxh-drawer-side` and `$pxh-drawer-opposite-side` variables
    * Recompile pxh-chrome's Sass into CSS to see the resulting change
    * Switching between left-to-right and right-to-left layouts from a single compiled pxh-chrome CSS file (by changing CSS classes in your application's HTML, for example) is planned but not currently supported
* Use a variable instead of hard-coded pxh-chrome version numbers in Handlebars templates

### 1.3.0 - July 28, 2016
* Darken default `<html>` background color by changing it from `$gray5` to `$gray8` to better support spine content
* Add SassDoc-formatted code comments to pxh-chrome's Sass source files
* Finish initial pass at adding JSDoc-formatted code comments to `pxh-chrome.js`

### 1.2.1 - July 26, 2016
* Automatically dismiss a toast/notification when the user clicks its action button (either link or callback)
* Patch bug where clicking the notifications icon would redirect the user off their current route
* Patch bug where clicking to clear all notifications would redirect the user off their current route
* Begin adding JSDoc-formatted code comments to `pxh-chrome.js`

### 1.2.0 - July 26, 2016
* Adjust width and spacing of pxh-login user name and settings cog icon
* Add a `pxh.toast.getNotifications()` method which returns an array of IDs of notifications in the notification list (if any)

### 1.1.0 - July 25, 2016
* **Add pxh-toasts and pxh-toast components**
  * A toast includes:
    * An icon (any keyword for any font-awesome icon is available)
    * Icon/toast color options (green, blue, orange, red)
    * Toast text (including default text if no text is provided)
    * "More" text button, which allows user to expand long toast messages
    * Dismiss button
    * Optional action button which navigates the user to a URL when clicked, or fires a javascript callback when clicked
    * Responsive layout based on browser width, and width of toasts container
  * Automatically dismiss toast after 5 seconds, or manually by clicking dismiss button
    * All non-actionable toasts automatically dismiss after 5 seconds
    * Actionable toasts can be configured to "persist" until they are manually dismissed by the user
  * Automatically overflow long toast messages
  * Animate toast on entrance and exit
  * Remove dismissed toast from DOM
  * If a toast has an action, populate the notification list with it
  * If a toast has an action, allow it to be persistent (i.e. the toast does not automatically dismiss after 5 seconds)
  * Strip HTML tags, if any, from toast text
  * Return the `id` of a toast after it is added with `pxh.toast.add()`
* **Add pxh-notifications and pxh-notification components**
  * Notifications are toasts that have actions (either URL-based or callback-based) on them, and can be persistent or non-persistent
  * _Only toasts with actions appear in the notification list_
  * When calling `pxh.toast.add()` to insert a new toast, the optional second parameter `suppressToast` allows you to bypass the toast list and send a toast directly to the notification list without triggering a toast (assuming the toast has an action)
    * This is helpful if you need to rebuild a list of notifications after a page refresh, but don't want to bother the user by displaying the toasts again
  * Automatically hide notifications icon if notifications aren't present in the current App Hub/Microapp context
* Add flag for toggling Sass for toasts and notifications on and off
* Add polyfill to allow `element.remove()` in IE11
* Remove all HTML5 elements that are inheriting default styles from px-theme
  * default `display: block` declarations conflict with `display: flex`
* Add mixin for overriding Polymer's `a:not([style-scope]):not(.style-scope):link` styles from px-theme for text colors and background colors
  * Mixin regrettably uses `!important` instead of chained classes, because it simply required too many chained classes (five in some cases) to override Polymer
* Arrange login components using flexbox instead of floats
* Add a mega-animations mixin that does everything:
  * animate-in
  * keyframes-in
  * state-visible
  * state-default
  * animate-out
  * keyframes-out
  * state-hidden
* Increase size of tap targets on login module icons
* Wrap all pxh-chrome JavaScript functions in a `pxh.` object to isolate them from the global namespace
* Replace all CSS class names with variables for toggling between states in javascript
* Bump version of javascript-cookies to 2.1.2
* Remove Gulp task for bumping pxh-chrome version number
  * It hasn't worked for months, so we're removing it until we replace it with something that works
* Bump versions on `gulp-eslint` to 3.0.0, `protractor` to 4.0.0, `babel-core` to 6.11.0, lodash to `4.14.0`
* Remove GE Inspira and GE Inspira Serif fonts
  * pxh-chrome now ships with GE Inspira Sans exclusively

### 1.0.1 - July 11, 2016 (pre-release)
* Add source code for in-development pxh-notification and pxh-toast components
  * Components are disabled in the `/dist` of this pre-release version

### 1.0.1 CDN - July 11, 2016 (pre-release)
* _See release notes for 1.0.1_
* Add hard-coded CDN links for CSS font paths

### 1.0.0 - July 1, 2016
* Generate minified and unminified versions of CSS and JS
  * All are now available in `/dist` along with sourcemaps
  * `ui-app-hub` and any other apps that depend on pxh-chrome will now need to specify `*.min.css` or `*.min.js` to use the minified versions; otherwise, they will default to using the expanded files
* Remove unused breakpoints from manifest
  * We were defining `@xs`, `@sm`, and `@xl` but weren't using them for anything
* App Hub is in production, so bump pxh-chrome to 1.0.0

### 0.14.2 - June 27, 2016
* Revert `pxh-badge` font weight back to normal
* Adjust top and bottom padding of `pxh-badge` so it appears more vertically balanced in IE Edge and IE11
* Add `pxh-view-header--nudge-until@md` class to all view headers on all demos and documentation
  * Microapps aren't required to use this class, but the spacing that results from using it is our design recommendation, and it is helpful for developers who don't want to write their own rules
* Refine logic for firing/not firing transitions when entering and leaving the @lg breakpoint
* Fix bug when exiting the lower threshold of the @md breakpoint where an open drawer would move offscreen (it's supposed to remain onscreen)
* Update README with instructions for installing WebDriver for running end-to-end tests

### 0.14.1 - June 24, 2016
* Fix bug where two `pxh-login-menu`s could be visible at the same time
  * Now, clicking one login menu toggle will automatically dismiss all others if they are open
* Abstract `pxhAddResizeSensor` function and call within `DOMContentLoaded` event
* Move all custom event initializations into the `DOMContentLoaded` event
* Add CSS sourcemaps and JS sourcemaps to pxh-chrome `/dist` to aid in debugging

### 0.14.0 - June 23, 2016
* Update font-awesome to 4.6.3 and mocha to 2.5.3
* Update babel-core to 6.10.0 and browser-sync to 2.13.0
* Ignore mocha when copying fonts from bower_components
* Update drawer state object so it defines three states:
  * `default` (closed on mobile, narrow on tablet, wide on desktop)
  * `open` (open on mobile, open on tablet, wide on desktop)
  * `narrowAtLg` (closed on mobile, narrow on tablet, narrow on desktop)
* Add a drawer transitions object that defines animation transitions between targeted drawer states
  * `outToIn`, `inToOut`, `narrowToOpen`, `openToNarrow`, `outToNarrow`, `narrowToOut`, `wideToNarrow`, `narrowToWide`
  * Add a `clearAll` drawer transition state that removes all animation classes from all targeted elements
* Remove empty wrapper function around `pxhResizeSensor` function
* Refine `arrayExists` and `getItemByPropertyName` functions
* Refactor and streamline `pxhLoadState` and `pxhChangeClass` functions
* Update `pxhBindControl` function, adding logic for responsive breakpoints and targeted animation transitions
* Add `pxhBreakpointAtMd` and `pxhBreakpointAtLg` functions to change states and transitions when the `@md` and `@lg` breakpoints are crossed
* Wrap all event listeners in a single `DOMContentLoaded` event
* Remove nearly all CSS3 animations and transition properties from components' block classes, and move to state- and transition-based modifier classes
* Apply state transition modifier classes only when animation is necessary (i.e. transitioning between states)
* Refactor `--in`, `--out`, `--wide`, `--narrow` keyframe animations
* Refactor `--in-state`, `--out-state`, `--in-state-opacity`, `out--state-scale`, etc. mixins for use in keyframe animations and non-animating `--in` and `--out` states
* Consolidate all Sass variables into the settings ITCSS layer at `_components.settings.pxh-chrome.scss`
* Make `pxh-badge` content bold to address legibility issues when used in `pxh-navigation`

### 0.13.4 - June 15, 2016
* Fix a bug where login profile and settings dropdown menus wouldn't function after UI App Hub fired its `window.nav.refresh()` method to refresh the navigation
  * `window.nav.refresh()` now emits a `navRefreshed` event when it executes
  * pxh-chrome listens for the `navRefreshed` event and fires `pxhToggleLoginMenu` when it detects it

### 0.13.3 - June 14, 2016
* Add modifier classes for `pxh-view` that allow you to override the default background color with any Predix UI monochromatic color
  * Options now include `white`, `gray1-10` and `black`
  * Simply add the modifier class (e.g. `pxh-view--gray7`) to your `pxh-view` element in your microapp to use it
* Add a demo screen for each `pxh-view` background color modifier class
* Fix code whitespace in documentation
* Add links to demo screens from documentation screens

### 0.13.2 - Jun 13, 2016
* Fix markdown formatting in CHANGELOG
* Fix incorrect class name in CHANGELOG

### 0.13.1 - Jun 6, 2016
* Add `pxh-view-header--nudge-until@md` responsive modifier class
  * This class prevents a microapp's view header content from colliding with the "hamburger" drawer toggle by automatically inserting the required left padding at the mobile breakpoint, and removing it at wider breakpoints
* Fix `pxh-view-header__title` font weight, prevent long lines from wrapping, and automatically truncate it with elipses if its text is longer than its container
* Change order of items on index page to match documentation navigation
* Update `pxh-spinner` code examples and documentation
* **experimental:** Add `pxhDrawerOpened` and `pxhDrawerClosed` custom events, which fire when the drawer opens or closes
  * These events are likely to change, but we want to see if they are helpful in addition to the `pxhViewResized` event
  * The reason they'll likely change is because "opened" and "closed" don't cover all the possible drawer states
  * We'll likely want to expose a pxhDrawerState object that fires events, or that a microapp can query to determine the state of the drawer
  * The drawerState object might include:
    * drawerIsVisible - BOOLEAN
    * drawerIsNarrow - BOOLEAN
    * drawerDisplacesView - BOOLEAN
    * drawerDisplacesViewNarrowAmount - BOOLEAN - _on tablet the drawer displaces a narrow amount of the view no matter if it's narrow or wide (when the drawer is wide it overlays the content without displacing it more)_

### 0.13.0 - May 31, 2016
* Ignore `/src`, `/dist/*.html` and other files when pxh-chrome is installed via Bower
* Create demo and documentation pages for all major `pxh-*` components
* Reduce sizes of all types of `pxh-spinner` including default, `--small` and `--large`
* Remove `--tiny` size of `pxh-spinner`
  * `--small` is now approximately the same size as `--tiny`
* Bind spinner visualization to `::after` pseudo-element so top and bottom margins don't rotate and cause intermittent scrollbars in narrow contexts
* Remove CSS rule that overrode the default badge background color when it was rendered inside a selected navigation item, as we're no longer using the same color to indicate the selected state
* Add separate demos for each pxh-chrome component
* Add colored borders around all badge states so their layout and sizing is consistent with the required border around `pxh-badge--healthy-white`
* Add `--truncated` modifier class to `pxh-badge` which accomodates the approximate maximum width of `99,999`
* Increase maximum width available to navigation text now that badges are absolutely positioned
* Add unopinionated default styles for horizontal rule `<hr>` elements
* Apply custom styles to drawer navigation scrollbars in Chrome and Safari
  * The `::scrollbar` pseudo-class syntax is not currently supported by IE Edge or Firefox


### 0.12.6 - May 27, 2016
* Bump versions on outdated node modules
* Increase CSS specificity of `pxh-login-menu__link` white link color to prevent it from being overridden by px-theme's `:not([style-scope]):not(.style-scope)` blue link rules
* Fix bug where drawer header was still being prematurely truncated in some responsive contexts
* Fix bug where navigation drawer badges would wrap to a second line below the link text if persistent scrollbars were displayed
  * Remove `pxh-float-right` utility class from navigation drawer badge markup since we're positioning them differently now
* Adjust vertical padding inside badges so the spacing looks better across browsers
* Fix bug where users were unable to scroll to last items in drawer navigation, if there were so many items that it caused a vertical scrollbar to appear
* Move bottom of drawer navigation scrollbar so it displays on top of the login module, rather than below and behind it
* When the drawer navigation needs to show scrollbars, show custom-colored scrollbars in IE11
  * Other browsers use an alternative pseudo-class syntax which we haven't implemented in pxh-chrome yet

### 0.12.5 - May 26, 2016
* Stop collapsing whitespace in `/dist` HTML output
* Fix Sass bug where the text in the `pxh-drawer-header__link` drawer header was being prematurely truncated
* Force Internet Explorer to use the most recent rendering engine available, even in an intranet context
* Tell Internet Explorer to use Chrome Frame if it's installed


### 0.12.4 - May 24, 2016
* Add `pxh-spinner--tiny` and `pxh-spinner--small` modifier classes to `pxh-spinner` for displaying tiny and small loading indicators
* Add `pxh-spinner--inverted` modifier class for displaying a loading indicator on a dark background
* Add subtle alpha transparency to the `pxh-spinner` circle so it renders better on unknown background colors

### 0.12.3 - May 23, 2016
* Fix pxh-chrome version number

### 0.12.2 - May 23, 2016
* Increase size of drawer toggle (both in-drawer and in-view-header) to full height and width of available space, to make the target easier to hit on mobile and tablet
* Comment out test event listener for `pxhViewResized` custom event

### 0.12.1 - May 23, 2016
* Only bind the `resizeSensor` custom event if `pxh-view` (that is, an element with the `js-view` id) is present
* Tweak padding of drawer navigation links
* Add a `pxh-navigation__item-icon--error` class for targeting the icon error state, rather than relying on inheritance

### 0.12.0 - May 19, 2016
* Add optional `pxh-view--white` and `pxh-view--gray5` classes for customizing the color of `pxh-view`
  * Without these flags, the `pxh-view` element is transparent by default and gets its color based on the `<html>` tag (`$gray5`)
* Add "pre-chrome" error states that represent what should be shown to the user if the App Hub errors out before the application chrome (i.e. drawer, navigation, login module, view header, etc.) can be rendered
* Add a "post-chrome" error state that represents what should be shown to the user if the App Hub (or a Microapp) throws an error while the user is within the application chrome
* Add `pxh-error` Sass component, which displays an error message and allows for color customization based on context (i.e. whether the error is being displayed in a pre-chrome or post-chrome context)
* Add `pxh-prechrome.scss` manifest and corresponding `pxh-prechrome.css` file
* Add GE Inspira Sans and `font-face` declarations back to pxh-chrome
  * Fonts are located at `public/fonts/ge/type/**` and copied out to `dist/fonts/ge/type/**`
  * This way, the pxh-chrome design displays independently of any downstream dependencies, though it does add significant KBs to our overall payload
* Use Metalsmith as a static site generation tool for creating demo and test screens
* Add "pre-chrome" error states, including "pre-auth" and "post-auth" states
* Increase height of `pxh-view-header` from 60px to 61px
  * `px-context-browser` has a default height of 60px ... by increasing the `pxh-view-header` height to 61px, the bottom border will show by default
* Add `gulp serve:e2e` task alongside `gulp e2e` task
  * `gulp serve:e2e` will fire up a local server at `http://localhost:4444`
  * Once the server is loaded, run `gulp e2e` to run end-to-end tests against it
* Run end-to-end tests via `directConnect` rather than through Selenium
* Fix end-to-end tests in Firefox
  * They now work in Firefox and Chrome (Safari isn't supported by `directConnect` and is too buggy in Selenium Web Driver)
* Remove `gulp e2e-install` task

### 0.11.0 - May 17, 2016
* Replace `pxhCookies` JavaScript cookie library with js-cookie
  * Replace `pxhCookies.setItem()` with `pxhCookies.set()`
  * Replace `pxhCookies.getItem()` with `pxhCookies.get()`
  * Replace `pxhCookies.removeItem()` with `pxhCookies.remove()`
  * Remove unused `pxhCookies.hasItem()` method
* Add `pxhResizeSensor` function from css-element-queries so we can detect changes in element widths
* Fire a `pxhViewResized` event when the width of `pxh-view` changes
* Add a `js-view` id to the `pxh-view` element for binding the `pxhViewResized` event
* Bump normalize.css to 4.1.1
  * Improve font rendering in all browsers
  * Remove opinionated style declarations
* Move `box-sizing` rule into the `generic.defaults` ITCSS Sass layer
* Move `px/typography` rules into the `elements.typography` layer
* Move global font families declaration into the `elements.body` layer
* Consolidate `px/settings.defaults` and `px/settings.colors` into a single `settings.defaults` layer
* Remove `px/functions`, `px/inuit-functions`, `px/iconography`, `px/mixins`, `px/typography`
* Remove unused `pxh-header` and `pxh-footer` Sass files
* Remove unused `pxh-is-hidden` class
* Remove `:host` declarations and minification hacks
* Remove `calculateRem` mixin
* Pluralize `elements.links` layer
* Make `pxh-badge` font weight normal (not bold) by default

### 0.10.0 - May 12, 2016
* Change "Your Profile" user menu item to "My Profile"
* Move all Px Sass `@import` dependencies directly into pxh-chrome
* Remove all Px dependencies from `bower.json`
* Remove GE Inspira fonts from pxh-chrome
  * We are relying on each microapp to load it if it needs it, which current experience indicates is a reliable assumption
* Bump required Node version to 4.x.x
* Bump font-awesome to 4.6.2
* Increase default end-to-end test timeout to 10 seconds

### 0.9.0 - May 6, 2016
* Remove anonymous wrapper function around `pxh-chrome.js` code
* Reorder and refactor`pxh-chrome.js` code
* Rename functions and variables in `pxh-chrome.js`
  * Namespace all functions with `pxh-`
  * Changed functions/variables include `pxhCookies`, `pxhChangeClasses`, `pxhFindObjectByLabel`, `pxhLoadState`, `pxhStatesObject`, etc.
* Add a `removeAll()` method to `pxhCookies` that obliterates all cookies
* Add unit tests for:
  * working with cookies
  * adding/removing/toggling classes
  * switching between states
* Add end-to-end tests for:
  * basic presence and visibility of key elements
  * toggling login menus
  * toggling `pxh-drawer` and `pxh-overlay` on mobile, tablet and desktop
  * preserving drawer state between page refreshes

### 0.8.3 - May 3, 2016
* Add `title=""` attributes to all pxh-drawer links, so users can see the full text even when they're truncated with ellipses
* Add a task for bumping the pxh-chrome version number across all relevant files, with lightweight validation
  * Just type `gulp bump --old 0.8.2 --new 0.8.3` to use it
  * At the next `gulp` it will compile the changes to `/dist` as well
* Bump version numbers on all node modules
* Add a `gulp dist` task that does the exact same thing as `gulp`
* Stub out tests (currently broken in this release)

### 0.8.2 - April 14, 2016
* Bump version number in CSS/JS comments, HTML, `bower.json`, `package.json`, etc.

### 0.8.1 - April 14, 2016
* Use `<section>` element instead of `<main>` for the `pxh-view` content area to avoid colliding with the global `<main>` element styles defined in px-theme

### 0.8.0 - April 13, 2016
* Scope `pxh-view-header` and `pxh-view` reponsive modifier class styles so they are only applied in the "chromeful" view
  * That is, when the `<body>` has a class of `pxh-chromeful` on it
  * "chromeful" means we show all the UI chrome (drawer, hamburger, navigation, login module)
  * "chromeless" means we only show the content of the microapp
* Add semantic HTML elements for accessibility purposes
  * Support heading elements (e.g. h1, h2, etc.) in drawer header and view header
* Launch development server on port `4000` by default to avoid conflicts with ui-app-hub and ui-micro-app

### 0.7.1 - April 12, 2016
* Fix JavaScript bug that prevented click events from firing if they were not bound to JavaScript (e.g. raw hyperlinks)

### 0.7.0 - April 12, 2016
* Allow user to dismiss the drawer on tablet and mobile by clicking anywhere in the overlay
* Allow user to dismiss the drawer on tablet and mobile by pressing the ESC key on the keyboard
* Update login module design
  * Update design
  * Add two menus, one for user profile and one for user settings (and sign out link)
  * Allow user to click anywhere to disable menus
  * Add (reasonably) smarter menu positioning

### 0.6.1 - April 11, 2016
* Limit width of application title in `drawer-header`, add elipses if too long, and fix word wrap when narrow
* Prevent px-theme from overriding the application title link color
* Move toggle styles to drawer header link (for animation sequencing reasons)
* Animation is janky, but other things are an improvement over 0.6.0?
* Fix overflow issue where last two navigation items were inaccessible behind login module on short viewports

### 0.6.0 - April 11, 2016
* Update drawer to latest styles from APM UX team
  * Newish colors
  * New normal, active, current, and hover styles
* Add drawer header component ("Predix") that displays responsively depending on viewport width (hidden on narrow, visible on wide)
* Add global style for hyperlinks
* Bump versions on Bower dependencies, including Px Sass components

### 0.5.1 - April 8, 2016
* Add a responsive "chromeless" view, which can display a Microapp without the left drawer, navigation, login module, and drawer toggle. Triggering "chromeless" is simply a matter of:
  * Removing the markup for the drawer and toggle
  * Removing all the responsive classes from `pxh-view-header` and `pxh-view`
  * Removing the `<script>` tag for `pxh-chrome.js` (`pxh-chrome.js` is not required for chromeless view, as the JavaScript is only necessary for managing drawer state between breakpoints, page refreshes and toggle events... if there's no drawer, there's no need for JavaScript!)

### 0.5.0 - April 6, 2016
* Move `pxh-view-header` out from `pxh-view`
  * There were simply too many bugs on iOS and IE to justify keeping the `position: fixed` view-header element inside the view element
* Add wrapper class `pxh-wrapper` around `pxh-view-header` and `pxh-view`
* Move responsibility of wrapper, view header and view out of the App Hub and into the Microapp
  * The App Hub (via pxh-chrome) will continue to provide the styles and markup for these elements, as well as the desired responsive behavior and JavaScript events, but each Microapp is now responsible for embedding these elements and populating them with content

### 0.4.4 - April 5, 2016
* On tablet and mobile, automatically close the navigation drawer when the user clicks a primary or secondary navigation link

### 0.4.3 - April 4, 2016
* Increase height of drawer toggle and view header to match `px-context-browser`
* Add basic loading spinner from `px-spinner`

### 0.4.2 - April 1, 2016
* Fix intertial- scrolling on iOS
  * Prevent all scrolling of `<html>` and `<body>` elements
  * Force iOS intertial scrolling of the `pxh-view`-classed element
  * Disable scrolling of `pxh-view` when `pxh-overlay` is visible
* Move `pxh-chrome` documentation styles into a `pxh-docs` class

### 0.4.1 - March 31, 2016
* Prevent default event from firing when clicking drawer toggle buttons
* Add modifier classes to login items
* Watch and compile /dist files when running `gulp serve:dist` to steamline local, live development on ui-app-hub via `bower link`

### 0.4.0 - March 30, 2016
* Completely refactor how states are handled in JavaScript
  * States are now handled via a global state object
  * Instead of simple toggles, explicitly add/remove classes from elements
  * Track "drawer is narrow" and "drawer is open" states using JavaScript cookies
  * On desktop, if the drawer is collapsed when moving between microapps, keep it collapsed
* Refactor how we handle JavaScript cookies
* Refine animations between states
* Add `--wide@lg` and `--narrow@lg` modifier classes to more precisely target desktop states
* Improve navigation
  * Add support for badges on secondary navigation items
  * Wrap secondary navigation text in a text BEM element
  * Convert `<spans>`s to `<div>`s for all primary and secondary navigation items (blocks and elements in BEM)

### 0.3.4 - March 25, 2016
* REALLY fix the double scroll bar issue in IE (with a `!important` rule in the px-theme overrides layer)

### 0.3.3 - March 25, 2016
* Fix double scroll bars in IE

### 0.3.2 - March 25, 2016
* Disable scrolling of background content when navigation drawer is open and overlay is active on mobile and tablet

### 0.3.1 - March 23, 2016
* Update drawer state cookie to work across microapps

### 0.3.0 - March 22, 2016
* Truncate long text in primary and secondary navigation items and show an elipsis
* Truncate long user names
* Use Javascript cookies to track and recall expanded/collapsed state of the drawer between page refreshes (should work when navigating between microapps as well)

### 0.2.0 - March 22, 2016
* Add initial architectural documentation
* Automatically expand and collapse `pxh-drawer` between `@md` and `@lg` breakpoints

### 0.1.3 - March 21, 2016

### 0.1.2 - March 18, 2016

### 0.1.1 - March 18, 2016

### 0.1.0 - March 18, 2016
* Initial release of pxh-chrome
