"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const menuitemradioRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'menuitem'
    },
    module: 'ARIA'
  }],
  requireContextRole: ['group', 'menu', 'menubar'],
  requiredContextRole: ['group', 'menu', 'menubar'],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-checked': null
  },
  superClass: [['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'], ['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'], ['roletype', 'widget', 'input', 'radio']]
};
var _default = menuitemradioRole;
exports.default = _default;