!function(){var e,t={8226:function(e,t,r){"use strict";var n=window.wp.element,o=window.wp.domReady,i=r.n(o),a=window.wp.blockLibrary,c=r(4184),l=r.n(c),s=window.wp.components;function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(i,e);var t,r,n,o=(t=i,function(){var e,r=b(t);if(m()){var n=b(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return p(this,e)});function i(){return u(this,i),o.apply(this,arguments)}return r=i,(n=[{key:"componentDidMount",value:function(){this.isSticky=!1,this.sync(),document.body.classList.contains("sticky-menu")&&(this.isSticky=!0,document.body.classList.remove("sticky-menu"))}},{key:"componentWillUnmount",value:function(){this.isSticky&&document.body.classList.add("sticky-menu")}},{key:"componentDidUpdate",value:function(e){this.props.isActive!==e.isActive&&this.sync()}},{key:"sync",value:function(){this.props.isActive?document.body.classList.add("is-fullscreen-mode"):document.body.classList.remove("is-fullscreen-mode")}},{key:"render",value:function(){return null}}])&&f(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),i}(n.Component),g=v;function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=window.wp.i18n;function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var E=(0,s.navigateRegions)((function(e){var t=e.footer,r=e.header,o=e.sidebar,i=e.leftSidebar,a=e.content,c=e.actions,s=e.labels,u=e.className;!function(e){(0,n.useEffect)((function(){var t=document&&document.querySelector("html:not(.".concat(e,")"));if(t)return t.classList.toggle(e),function(){t.classList.toggle(e)}}),[e])}("interface-interface-skeleton__html-container");var f=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},{
/* translators: accessibility text for the top bar landmark region. */
header:(0,h.__)("Header"),
/* translators: accessibility text for the content landmark region. */
body:(0,h.__)("Content"),
/* translators: accessibility text for the left sidebar landmark region. */
leftSidebar:(0,h.__)("Left sidebar"),
/* translators: accessibility text for the settings landmark region. */
sidebar:(0,h.__)("Settings"),
/* translators: accessibility text for the publish landmark region. */
actions:(0,h.__)("Publish"),
/* translators: accessibility text for the footer landmark region. */
footer:(0,h.__)("Footer")},{},s);return(0,n.createElement)("div",{className:l()(u,"interface-interface-skeleton")},!!r&&(0,n.createElement)("div",{className:"interface-interface-skeleton__header",role:"region","aria-label":f.header,tabIndex:"-1"},r),(0,n.createElement)("div",{className:"interface-interface-skeleton__body"},!!i&&(0,n.createElement)("div",{className:"interface-interface-skeleton__left-sidebar",role:"region","aria-label":f.leftSidebar,tabIndex:"-1"},i),(0,n.createElement)("div",{className:"interface-interface-skeleton__content",role:"region","aria-label":f.body,tabIndex:"-1"},a),!!o&&(0,n.createElement)("div",{className:"interface-interface-skeleton__sidebar",role:"region","aria-label":f.sidebar,tabIndex:"-1"},o),!!c&&(0,n.createElement)("div",{className:"interface-interface-skeleton__actions",role:"region","aria-label":f.actions,tabIndex:"-1"},c)),!!t&&(0,n.createElement)("div",{className:"interface-interface-skeleton__footer",role:"region","aria-label":f.footer,tabIndex:"-1"},t))})),_=window.wp.data;function k(){var e=(0,_.useSelect)((function(e){return e("core/notices").getNotices().filter((function(e){return"snackbar"===e.type}))}),[]),t=(0,_.useDispatch)("core/notices").removeNotice;return(0,n.createElement)(s.SnackbarList,{className:"edit-site-notices",notices:e,onRemove:t})}function j(){return(0,n.createElement)("div",{className:"getdavesbe-header",role:"region","aria-label":(0,h.__)("Standalone Editor top bar.","getdavesbe"),tabIndex:"-1"},(0,n.createElement)("h1",{className:"getdavesbe-header__title"},(0,h.__)("Standalone Block Editor","getdavesbe")))}var S=(0,s.createSlotFill)("StandAloneBlockEditorSidebarInspector"),P=S.Slot,I=S.Fill;function x(){return(0,n.createElement)("div",{className:"getdavesbe-sidebar",role:"region","aria-label":(0,h.__)("Standalone Block Editor advanced settings."),tabIndex:"-1"},(0,n.createElement)(s.Panel,{header:(0,h.__)("Inspector")},(0,n.createElement)(P,{bubblesVirtually:!0})))}x.InspectorFill=I;var N=x;function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}window.wp.editor,window.wp.formatLibrary;var A=window.wp.blocks,B=window.wp.mediaUtils,L=window.wp.blockEditor,F=["onError"];function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=function(e){var t,r,o=e.settings,i=(t=(0,n.useState)([]),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],_n=!0,a=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);_n=!0);}catch(e){a=!0,o=e}finally{try{_n||null==r.return||r.return()}finally{if(a)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],c=i[1],l=(0,_.useDispatch)("core/notices").createInfoNotice,s=(0,_.useSelect)((function(e){var t=e("core").canUser("create","media");return t||!1!==t}),[]),u=(0,n.useMemo)((function(){return s?C(C({},o),{},{mediaUpload:function(e){var t=e.onError,r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,F);(0,B.uploadMedia)(C({wpAllowedMimeTypes:o.allowedMimeTypes,onError:function(e){var r=e.message;return t(r)}},r))}}):o}),[s,o]);function f(e){c(e)}return(0,n.useEffect)((function(){var e=window.localStorage.getItem("getdavesbeBlocks");null!=e&&e.length&&(f((function(){return(0,A.parse)(e)})),l("Blocks loaded",{type:"snackbar",isDismissible:!0}))}),[]),(0,n.createElement)("div",{className:"getdavesbe-block-editor"},(0,n.createElement)(L.BlockEditorProvider,{value:a,onInput:f,onChange:function(e){c(e),window.localStorage.setItem("getdavesbeBlocks",(0,A.serialize)(e))},settings:u},(0,n.createElement)(N.InspectorFill,null,(0,n.createElement)(L.BlockInspector,null)),(0,n.createElement)("div",{className:"editor-styles-wrapper"},(0,n.createElement)(L.BlockEditorKeyboardShortcuts,null),(0,n.createElement)(L.WritingFlow,null,(0,n.createElement)(L.ObserveTyping,null,(0,n.createElement)(L.BlockList,{className:"getdavesbe-block-editor__block-list"}))))))},T=function(e){var t=e.settings;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g,{isActive:!1}),(0,n.createElement)(s.SlotFillProvider,null,(0,n.createElement)(s.DropZoneProvider,null,(0,n.createElement)(s.FocusReturnProvider,null,(0,n.createElement)(E,{className:l()("edit-site-list",{}),header:(0,n.createElement)(j,null),sidebar:(0,n.createElement)(N,null),content:(0,n.createElement)(n.Fragment,null,(0,n.createElement)(k,null),(0,n.createElement)(M,{settings:t}))}),(0,n.createElement)(s.Popover.Slot,null)))))};i()((function(){var e=window.getdaveSbeSettings||{};(0,a.registerCoreBlocks)(),(0,n.render)((0,n.createElement)(T,{settings:e}),document.getElementById("app"))}))},4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,o,i){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var c=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={4126:0,4343:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],l=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var u=l(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[4343],(function(){return n(8226)}));o=n.O(o)}();