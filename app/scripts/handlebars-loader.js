'use strict';

window.handlebars = window.handlebars || {};
window.handlebars.LOAD_DYNAMICALLY = true;

/**
 * @name loadTemplate
 * @description Loads a handlebars template
 * @param name The name (source) of the template
 * @param cb The callback function
 */
function loadTemplate(name, cb) {
  console.log('Loading template ' + name + ' ' + (window.handlebars.LOAD_DYNAMICALLY ? 'dynamically' : 'pre-compiled'));

  if (window.handlebars.LOAD_DYNAMICALLY) {
    var script = $('script[src="' + name + '"]').first();
    var source = $(script).text();

    if (source) {
      console.log("There is template content in the script tag, so we're going to use that.");
      var template = Handlebars.compile(source);
      cb(template);
    }

    $.ajax(name, {
      type: 'GET',
      dataType: 'text',
      success: function(data, status, xhr) {
        var template = Handlebars.compile(data);
        cb(template);
      }
    });
  }

  else {
    cb(JST['app/' + name]);
  }
}

