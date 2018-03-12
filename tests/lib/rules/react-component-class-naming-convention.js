/**
 * @fileoverview Check that proper naming convention is followed for React components
 * @author react-component-class-naming-convention
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/react-component-class-naming-convention"),

    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("react-component-class-naming-convention", rule, {

    valid: [
        { code: "class FooBarComponent extends React.Component {}"}
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "class foocarComponent extends React.Component {}",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
