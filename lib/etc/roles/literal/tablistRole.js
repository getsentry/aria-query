"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const tablistRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-level': null,
    'aria-multiselectable': null,
    'aria-orientation': 'horizontal'
  },
  relatedConcepts: [{
    module: 'DAISY',
    concept: {
      name: 'guide'
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['tab']],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'composite']]
};
var _default = tablistRole;
exports.default = _default;