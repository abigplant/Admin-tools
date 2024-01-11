// ==UserScript==
// @name        Hide admin tools - testing
// @namespace   Violentmonkey Scripts
// @include     https://admin.shopify.com/store/*
// @include     https://*.myshopify.com/admin*
// @grant       GM_addStyle
// @version     1.1
// @author      Graham Connell
//
// @description Hides support and developer tools from the bottom left of the admin while viewing as a support advisor. Hover and scroll down over the settings button to reveal settings
// ==/UserScript==
GM_addStyle('._StickyBottomNav_1fe9e_3 {height: 4.3em; overflow: hidden;} ._StickyBottomNav_1fe9e_3:hover {overflow: visible;}');
