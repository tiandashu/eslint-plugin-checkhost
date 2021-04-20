/**
 * @fileoverview 域名是否切换为jdl.cn
 * @author tianlu21
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
function defineTemplateBodyVisitor(
    context,
    templateBodyVisitor,
    scriptVisitor
  ) {
    if (context.parserServices.defineTemplateBodyVisitor == null) {
      const filename = context.getFilename()
      if (path.extname(filename) === '.vue') {
        context.report({
          loc: { line: 1, column: 0 },
          message:
            'Use the latest vue-eslint-parser. See also https://eslint.vuejs.org/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error.'
        })
      }
      return {}
    }
    return context.parserServices.defineTemplateBodyVisitor(
      templateBodyVisitor,
      scriptVisitor
    )
  }

function searchText(childrens, context) {
    if(childrens) {
        for(let i = 0; i < childrens.length; i++) {
            if(childrens[i].children) {
                searchText(childrens[i].children, context)
            } else {
                let text = childrens[i].value
                if(/jd\.com/.test(text)) {
                    context.report({
                        node: childrens[i],
                        message: '域名是否切换到jdl.cn，请确认'
                    })
                }
            }
        }
    }
}

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "域名是否切换为jdl.cn",
        },
        // or "code" or "whitespace"
        fixable: null,  
    },

    create: function(context) {
        return defineTemplateBodyVisitor(context, {
            "VElement[name='template']"(node) {
                searchText(node.children, context)
            }
        })
    }
};
