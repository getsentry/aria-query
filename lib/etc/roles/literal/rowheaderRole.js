"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const rowheaderRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-sort': null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: 'scope',
        value: 'row'
      }],
      name: 'th'
    },
    module: 'HTML'
  }],
  requireContextRole: ['row'],
  requiredContextRole: ['row'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'cell'], ['roletype', 'structure', 'section', 'cell', 'gridcell'], ['roletype', 'widget', 'gridcell'], ['roletype', 'structure', 'sectionhead']]
};
var _default = rowheaderRole;
exports.default = _default;