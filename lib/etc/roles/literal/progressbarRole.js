"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const progressbarRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-valuetext': null
  },
  relatedConcepts: [{
    concept: {
      name: 'progress'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'status'
    },
    module: 'ARIA'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'range'], ['roletype', 'widget']]
};
var _default = progressbarRole;
exports.default = _default;