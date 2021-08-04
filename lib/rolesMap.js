"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ariaAbstractRoles = _interopRequireDefault(require("./etc/roles/ariaAbstractRoles"));

var _ariaLiteralRoles = _interopRequireDefault(require("./etc/roles/ariaLiteralRoles"));

var _ariaDpubRoles = _interopRequireDefault(require("./etc/roles/ariaDpubRoles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rolesMap = new Map([]);
[_ariaAbstractRoles.default, _ariaLiteralRoles.default, _ariaDpubRoles.default].forEach(roleSet => {
  roleSet.forEach((roleDefinition, name) => rolesMap.set(name, roleDefinition));
});
rolesMap.forEach((roleDefinition, name) => {
  // Conglomerate the properties
  for (let superClassIter of roleDefinition.superClass) {
    for (let superClassName of superClassIter) {
      const superClassDefinition = rolesMap.get(superClassName);

      if (superClassDefinition) {
        for (let prop of Object.keys(superClassDefinition.props)) {
          if (!Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)) {
            Object.assign(roleDefinition.props, {
              [prop]: superClassDefinition.props[prop]
            });
          }
        }
      }
    }
  }
});
var _default = rolesMap;
exports.default = _default;