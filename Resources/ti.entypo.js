function fromCode(e) {
    var codeString = convertCP2UTF16(e);
    return String.fromCharCode(codeString.replace(" ", ", "));
}

function convertCP2UTF16(textString) {
    var outputString = "";
    textString = textString.replace(/^\s+/, "");
    if (0 == textString.length) return "";
    textString = textString.replace(/\s+/g, " ");
    var listArray = textString.split(" ");
    for (var i = 0; listArray.length > i; i++) {
        var n = parseInt(listArray[i], 16);
        i > 0 && (outputString += " ");
        if (65535 >= n) outputString += dec2hex4(n); else if (1114111 >= n) {
            n -= 65536;
            outputString += dec2hex4(55296 | n >> 10) + " " + dec2hex4(56320 | 1023 & n);
        } else outputString += "!erreur " + dec2hex(n) + "!";
    }
    return outputString;
}

function dec2hex4(textString) {
    var hexequiv = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    return hexequiv[15 & textString >> 12] + hexequiv[15 & textString >> 8] + hexequiv[15 & textString >> 4] + hexequiv[15 & textString];
}

exports.fromName = function(_name) {
    var item = _.where(exports.codeMap, {
        name: _name
    });
    return exports.fromCodePoint(item[0].code);
};

exports.fromCodePoint = function() {
    var point, offset, units, i, chars = [];
    for (i = 0; arguments.length > i; ++i) {
        point = arguments[i];
        offset = point - 65536;
        units = point > 65535 ? [ 55296 + (offset >> 10), 56320 + (1023 & offset) ] : [ point ];
        chars.push(String.fromCharCode.apply(null, units));
    }
    return chars.join("");
};