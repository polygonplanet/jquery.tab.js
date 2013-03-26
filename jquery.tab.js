/*!
 * jQuery tab plugin
 *
 * @example
 *   $('div#tab').tab({
 *     triggers: ['#button1', '#button2', '#button3'],
 *     content: ['#content1', '#content2', '#content3'],
 *     defaultIndex: 0,
 *     activeClass: 'tab-active',
 *     keyName: 'tab'
 *   });
 *
 * Version 1.01, 2013-03-27
 * Copyright (c) 2013 polygon planet <polygon.planet.aqua@gmail.com>
 * Dual licensed under the MIT or GPL v2 licenses.
 * https://github.com/polygonplanet/jquery.tab.js
 * http://polygonplanet.github.com/jquery.tab.js/
 */
(function($) {
  'use strict';

  function q(a) {
    return Array.prototype.concat.call(a || '').join(',');
  }

  $.fn.tab = function(options) {
    var that = this,
        opts = $.extend({}, options || {}),
        triggers = $(q(opts.triggers)),
        contents = $(q(opts.contents)),
        defaultIndex = opts.defaultIndex || 0,
        activeClass = opts.activeClass || 'jq-tab-active',
        keyName = opts.keyName || 'jqtab';

    return this.each(function() {
      var i, el, len = triggers.length,
          query = location.search.substring(1).split('&');

      $(triggers, that).each(function(i) {
        $(this).on('click', function() {
          $(triggers, that).removeClass(activeClass).eq(i).addClass(activeClass);
          $(contents, that).hide().eq(i).show();
          return false;
        });
      });

      $.each(query, function(i, val) {
        var pairs = val.split('='),
            k = decodeURIComponent(pairs[0]);

        if (k === keyName) {
          el = $(triggers, that).eq(decodeURIComponent(pairs[1]) - 0);
          return false;
        }
      });

      if (!el || !el.length) {
        el = $(triggers, that).eq(defaultIndex);
      }
      el.trigger('click');
    });
  };
}(jQuery));
