/*!
 * jQuery tab plugin
 *
 * @example
 *   <!-- HTML -->
 *   <div id="tab">
 *     <div>
 *       <div id="button1">tab1</div>
 *       <div id="button2">tab2</div>
 *       <div id="button3">tab3</div>
 *     </div>
 *     <div>
 *       <div id="content1">content1</div>
 *       <div id="content2">content2</div>
 *       <div id="content3">content3</div>
 *     </div>
 *   </div>
 *
 *   // JavaScript
 *   $(function() {
 *     $('div#tab').tab({
 *       items: {
 *         '#button1': '#content1',
 *         '#button2': '#content2',
 *         '#button3': '#content3'
 *       },
 *       defaultIndex: 0,
 *       activeClass: 'tab-active',
 *       keyName: 'tab'
 *     });
 *   });
 *
 * Version 1.03, 2018-04-01
 * Copyright (c) 2013-2018 polygon planet <polygon.planet.aqua@gmail.com>
 * licensed under the MIT license
 * https://github.com/polygonplanet/jquery.tab.js
 * http://polygonplanet.github.com/jquery.tab.js/
 */
(function($) {
  'use strict';

  $.fn.tab = function(options) {
    var that = this,
        opts = $.extend({}, options || {}),
        triggers = [],
        contents = [],
        defaultIndex = opts.defaultIndex || 0,
        activeClass = opts.activeClass || 'jq-tab-active',
        keyName = opts.keyName || 'jqtab';

    $.each(opts.items || {}, function(trigger, content) {
      triggers.push($(trigger));
      contents.push($(content));
    });

    return this.each(function() {
      var el, query = location.search.substring(1).split('&');

      $(triggers, that).each(function(i) {
        $(this).on('click', function() {
          triggers.forEach(function(trigger) {
            $(trigger).removeClass(activeClass);
          });
          $(triggers[i]).addClass(activeClass);

          contents.forEach(function(content) {
            $(content).hide();
          });
          $(contents[i]).show();
          return false;
        });
      });

      $.each(query, function(i, val) {
        var pairs = val.split('='), k = decodeURIComponent(pairs[0]);
        if (k === keyName) {
          el = $(triggers[decodeURIComponent(pairs[1]) - 0]);
          return false;
        }
      });

      if (!el || !el.length) {
        el = $(triggers[defaultIndex]);
      }
      el.trigger('click');
    });
  };
}(jQuery));
