jQuery.dotdotdot
================

A jQuery plugin for advanced cross-browser ellipsis on multiple line content.


Demos and documentation at http://dotdotdot.frebsite.nl


Usage
-----

```javascript
Template.yourTemplate.rendered = function() {
    $('.ellipsis').dotdotdot({
      /*  The text to add as ellipsis. */
      ellipsis  : '... ',
   
      /*  How to cut off the text/html: 'word'/'letter'/'children' */
      wrap    : 'word',
   
      /*  Wrap-option fallback to 'letter' for long words */
      fallbackToLetter: true,
   
      /*  jQuery-selector for the element to keep and put after the ellipsis. */
      after   : null,
   
      /*  Whether to update the ellipsis: true/'window' */
      watch   : false,
    
      /*  Optionally set a max-height, if null, the height will be measured. */
      height    : null,
   
      /*  Deviation for the height-option. */
      tolerance : 0,
   
      /*  Callback function that is fired after the ellipsis is added,
        receives two parameters: isTruncated(boolean), orgContent(string). */
      callback  : function( isTruncated, orgContent ) {},
   
      lastCharacter : {
   
        /*  Remove these characters from the end of the truncated text. */
        remove    : [ ' ', ',', ';', '.', '!', '?' ],
   
        /*  Don't add an ellipsis if this array contains 
          the last character of the truncated text. */
        noEllipsis  : []
      }
    });
}
```

See the documentation for more advanced usage and examples, including:
- 'Read more' type links at the end of the text
- Fluid layouts
- Smart truncating long pathnames


