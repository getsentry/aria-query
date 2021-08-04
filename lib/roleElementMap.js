"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rolesMap = _interopRequireDefault(require("./rolesMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const roleElementMap = new Map([]);
[..._rolesMap.default.keys()].forEach(key => {
  const role = _rolesMap.default.get(key);

  if (role) {
    [...role.baseConcepts, ...role.relatedConcepts].forEach(relation => {
      if (relation.module === 'HTML') {
        const concept = relation.concept;

        if (concept) {
          const relationConcepts = roleElementMap.get(key) || new Set([]);
          relationConcepts.add(concept);
          roleElementMap.set(key, relationConcepts);
        }
      }
    });
  }
});
var _default = roleElementMap;
exports.default = _default;