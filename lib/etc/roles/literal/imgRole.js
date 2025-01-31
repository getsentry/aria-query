"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const imgRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'alt'
      }],
      name: 'img'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['undefined'],
        name: 'alt'
      }],
      name: 'img'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'imggroup'
    },
    module: 'DTB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = imgRole;
exports.default = _default;