"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rolesMap = _interopRequireDefault(require("./rolesMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const elementRoleMap = new Map([]);
[..._rolesMap.default.keys()].forEach(key => {
  const role = _rolesMap.default.get(key);

  if (role) {
    [...role.baseConcepts, ...role.relatedConcepts].forEach(relation => {
      if (relation.module === 'HTML') {
        const concept = relation.concept;

        if (concept) {
          const conceptStr = JSON.stringify(concept);
          let roles = ([...elementRoleMap.entries()].find( // eslint-disable-next-line no-unused-vars
          ([key, value]) => JSON.stringify(key) === conceptStr) || [])[1];

          if (!roles) {
            roles = new Set([]);
          }

          roles.add(key);
          elementRoleMap.set(concept, roles);
        }
      }
    });
  }
});
var _default = elementRoleMap;
exports.default = _default;