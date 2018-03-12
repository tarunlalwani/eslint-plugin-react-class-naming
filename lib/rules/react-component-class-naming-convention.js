/**
 * @fileoverview Check that proper naming convention is followed for React components
 * @author Tarun Lalwani
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
var toPascalCase = require('to-pascal-case');

module.exports = {
    meta: {
        docs: {
            description: "Check that proper naming convention is followed for React components",
            category: "Fill me in",
            recommended: false
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            ClassDeclaration: function(node) {
                var isReactComponent = false;
                if (node.superClass && node.superClass && node.superClass)
                {
                    if (node.superClass.object && node.superClass.object.name == 'React' && node.superClass.property.name === 'Component')
                        {
                            isReactComponent = true;
                        }
                    else if (node.superClass && node.superClass.name === 'Component') {
                        // if you want to suppot extends Component instead of just React.Component
                        isReactComponent = true;
                    }
                }

                if (isReactComponent) {
                    var className = node.id.name;
                    if (className[0] !== className[0].toUpperCase() || !className.endsWith("Component"))
                         context.report({
                            node: node, 
                            message: "Please use Proper case for the React Component class - {{identifier}}",
                            data: {
                                identifier: className
                            }, fix: (fixer) => {
                                var newClassName = className.toLowerCase().replace('component', '') + 'Component';
                                newClassName = toPascalCase(newClassName);
                                return fixer.replaceTextRange(node.id.range, newClassName)
                            }
                        });

                }
            }

        };
    }
};
