handlebars-loader
=================

A quick way to switch between loading handlebars.js templates from pre-compiled templates to dynamically compiled templates.

I had an issue where sometimes I had to run unit tests in a browser as I developed and wrote Handlebars templates. I wanted to
use the same code to load the templates no matter if the templates were pre-compiled or if they were being loaded dynamically from
an Ajax query.  I made this as a quick proof-of-concept.  

Note that if you want to use it, it assumes the default namespace that `grunt-contrib-handlebars` uses.  Also, it uses `app` as a 
root of the template name.  You'll have to change things for your own set up.

In the included demo, I compiled one template to `scripts/templates.js` and another template is dynamically loaded.  By toggling the
handlebars.LOAD_DYNAMICALLY variable, you can choose how they get loaded.
