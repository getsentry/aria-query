"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const optionRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-checked': null,
    'aria-posinset': null,
    'aria-setsize': null,
    'aria-selected': 'false'
  },
  relatedConcepts: [{
    concept: {
      name: 'item'
    },
    module: 'XForms'
  }, {
    concept: {
      name: 'listitem'
    },
    module: 'ARIA'
  }, {
    concept: {
      name: 'option'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-selected': 'false'
  },
  superClass: [['roletype', 'widget', 'input']]
};
var _default = optionRole;
exports.default = _default;