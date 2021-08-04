"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roleElements = exports.elementRoles = exports.roles = exports.dom = exports.aria = void 0;

var _ariaPropsMap = _interopRequireDefault(require("./ariaPropsMap"));

var _domMap = _interopRequireDefault(require("./domMap"));

var _rolesMap = _interopRequireDefault(require("./rolesMap"));

var _elementRoleMap = _interopRequireDefault(require("./elementRoleMap"));

var _roleElementMap = _interopRequireDefault(require("./roleElementMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const aria = _ariaPropsMap.default;
exports.aria = aria;
const dom = _domMap.default;
exports.dom = dom;
const roles = _rolesMap.default;
exports.roles = roles;
const elementRoles = _elementRoleMap.default;
exports.elementRoles = elementRoles;
const roleElements = _roleElementMap.default;
exports.roleElements = roleElements;