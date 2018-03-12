'use strict';

const allRules = {
  'react-classnaming-convention': require('./lib/rules/react-component-class-naming-convention')
};

module.exports = {
  rules: allRules,
  configs: {
    recommended: {
      plugins: [
        'react-class-naming'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
    }
  }
};
