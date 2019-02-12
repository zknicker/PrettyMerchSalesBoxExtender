// ==UserScript==
// @name         Pretty Merch Sales Box Extender
// @namespace    http://zachknickerbocker.com
// @version      0.1
// @description  Modified Pretty Merch elements to extend the length of the sales box.
// @author       Zach Knickerbocker
// @match        https://merch.amazon.com/dashboard
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
        document.querySelector('.pretty-scrollbar').style.overflow = '';
        document.querySelector('.gear-site-footer-container').style.display = 'none';
        document.querySelector('.prettydash-footer').style.display = 'none';
    }, 500);
})();