/* 
 * This contentStyle sets all form elements to 100% 
 * so elements where the font-size is not defined 
 * are not scaled by the text-scale-factor twice
 */
require('sdk/page-mod').PageMod({
  include: '*',
  contentStyle: [
    "input, select, button { font-size: 100%; }"
  ]
})