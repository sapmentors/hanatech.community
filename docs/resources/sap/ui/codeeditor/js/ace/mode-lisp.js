ace.define("ace/mode/lisp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,i){"use strict";var o=e("../lib/oop");var n=e("./text_highlight_rules").TextHighlightRules;var r=function(){var e="case|do|let|loop|if|else|when";var t="eq|neq|and|or";var i="null|nil";var o="cons|car|cdr|cond|lambda|format|setq|setf|quote|eval|append|list|listp|memberp|t|load|progn";var n=this.createKeywordMapper({"keyword.control":e,"keyword.operator":t,"constant.language":i,"support.function":o},"identifier",true);this.$rules={start:[{token:"comment",regex:";.*$"},{token:["storage.type.function-type.lisp","text","entity.name.function.lisp"],regex:"(?:\\b(?:(defun|defmethod|defmacro))\\b)(\\s+)((?:\\w|\\-|\\!|\\?)*)"},{token:["punctuation.definition.constant.character.lisp","constant.character.lisp"],regex:"(#)((?:\\w|[\\\\+-=<>'\"&#])+)"},{token:["punctuation.definition.variable.lisp","variable.other.global.lisp","punctuation.definition.variable.lisp"],regex:"(\\*)(\\S*)(\\*)"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(?:L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(?:L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:n,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"string",regex:'"(?=.)',next:"qqstring"}],qqstring:[{token:"constant.character.escape.lisp",regex:"\\\\."},{token:"string",regex:'[^"\\\\]+'},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"start"}]}};o.inherits(r,n);t.LispHighlightRules=r});ace.define("ace/mode/lisp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/lisp_highlight_rules"],function(e,t,i){"use strict";var o=e("../lib/oop");var n=e("./text").Mode;var r=e("./lisp_highlight_rules").LispHighlightRules;var l=function(){this.HighlightRules=r;this.$behaviour=this.$defaultBehaviour};o.inherits(l,n);(function(){this.lineCommentStart=";";this.$id="ace/mode/lisp"}).call(l.prototype);t.Mode=l});(function(){ace.require(["ace/mode/lisp"],function(e){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=e}})})();