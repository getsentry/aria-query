"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const docEndnoteRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'rearnote [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: ['doc-endnotes'],
  requiredContextRole: ['doc-endnotes'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'listitem']]
};
var _default = docEndnoteRole;
exports.default = _default;