// ==UserScript==
// @name        Hide admin tools
// @namespace   Violentmonkey Scripts
// @include     https://admin.shopify.com/store/*
// @include     https://*.myshopify.com/admin*
// @grant       GM_addStyle
// @version     1.5
// @author      Graham Connell
//
// @description Hides support and developer tools from the bottom left of the admin while viewing as a support advisor. Hover and scroll down over the settings button to reveal settings
// ==/UserScript==
GM_addStyle('[class*="StickyBottomNav"], .vNwaY {height: 4.3em; overflow: hidden;} [class*="StickyBottomNav"]:hover, .vNwaY:hover {overflow: visible;}');
