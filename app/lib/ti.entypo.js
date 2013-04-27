/*
  * returns extended character from Entypo font icon name
  * Entypo pictograms by Daniel Bruce — www.entypo.com
  */

exports.fromName = function(_name){
	//console.info(_name);
	var item = _.where(exports.codeMap, {"name":_name})
	return exports.fromCodePoint(item[0].code);
}


/*!
* From: (c) 2012 Steven Levithan <http://slevithan.com/>
* MIT License
* see: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/fromCharCode
*/

/*!
* ES6 Unicode Shims 0.1
* (c) 2012 Steven Levithan <http://slevithan.com/>
* MIT License
*/
exports.fromCodePoint = function() {
    var chars = [], point, offset, units, i;
    for (i = 0; i < arguments.length; ++i) {
        point = arguments[i];
        offset = point - 0x10000;
        units = point > 0xFFFF ? [0xD800 + (offset >> 10), 0xDC00 + (offset & 0x3FF)] : [point];
        chars.push(String.fromCharCode.apply(null, units));
    }
    return chars.join("");
}


/*
  * JS conversion functions:  http://www.sceneonthe.net/unicode.htm
  * not used for this library, but left because they're useful
  * ...and required many hours of Google searching!
  */
 
function fromCode(e) {
	var codeString = convertCP2UTF16(e);
	return String.fromCharCode(codeString.replace(" ", ", "));
}

function convertCP2UTF16 ( textString ) {
  var outputString = "";
  textString = textString.replace(/^\s+/, '');
  if (textString.length == 0) { return ""; }
  textString = textString.replace(/\s+/g, ' ');
  var listArray = textString.split(' ');
  for ( var i = 0; i < listArray.length; i++ ) {		
    var n = parseInt(listArray[i], 16);
    if (i > 0) { outputString += ' ';}
    if (n <= 0xFFFF) {
      outputString += dec2hex4(n);
    } else if (n <= 0x10FFFF) {
      n -= 0x10000
      outputString += dec2hex4(0xD800 | (n >> 10)) + ' ' + dec2hex4(0xDC00 | (n & 0x3FF));
    } else {
      outputString += '!erreur ' + dec2hex(n) +'!';
    }
  }
  return( outputString );
}

function  dec2hex4 ( textString ) {  	 
  var hexequiv = new Array ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
  return hexequiv[(textString >> 12) & 0xF] + hexequiv[(textString >> 8) & 0xF] + hexequiv[(textString >> 4) & 0xF] + hexequiv[textString & 0xF];
}

/*
 * character map
 * parsed from https://github.com/danielbruce/entypo/blob/master/config.yml
 * Entypo pictograms by Daniel Bruce — www.entypo.com
 */

