// Mục đích: index các components sẽ được render
//Loại: file js thuần

"use strict";
/** 
The "use strict" directive was new in ECMAScript version 5
It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
With strict mode, you can not, for example, use undeclared variables.
 * */

exports.__esModule = true; // for what????

exports.AppNavbarBrand = undefined;
// set undefined

var _NavbarBrand = require("./NavbarBrand");

var _NavbarBrand2 = _interopRequireDefault(_NavbarBrand);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
exports.AppNavbarBrand = _NavbarBrand2.default;
