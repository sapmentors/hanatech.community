ace.define("ace/mode/vhdl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,r){"use strict";var o=e("../lib/oop");var i=e("./text_highlight_rules").TextHighlightRules;var n=function(){var e="access|after|ailas|all|architecture|assert|attribute|"+"begin|block|buffer|bus|case|component|configuration|"+"disconnect|downto|else|elsif|end|entity|file|for|function|"+"generate|generic|guarded|if|impure|in|inertial|inout|is|"+"label|linkage|literal|loop|mapnew|next|of|on|open|"+"others|out|port|process|pure|range|record|reject|"+"report|return|select|shared|subtype|then|to|transport|"+"type|unaffected|united|until|wait|when|while|with";var t="bit|bit_vector|boolean|character|integer|line|natural|"+"positive|real|register|severity|signal|signed|"+"std_logic|std_logic_vector|string||text|time|unsigned|"+"variable";var r="array|constant";var o="abs|and|mod|nand|nor|not|rem|rol|ror|sla|sll|sra"+"srl|xnor|xor";var i="true|false|null";var n=this.createKeywordMapper({"keyword.operator":o,keyword:e,"constant.language":i,"storage.modifier":r,"storage.type":t},"identifier",true);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"keyword",regex:"\\s*(?:library|package|use)\\b"},{token:n,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"&|\\*|\\+|\\-|\\/|<|=|>|\\||=>|\\*\\*|:=|\\/=|>=|<=|<>"},{token:"punctuation.operator",regex:"\\'|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[(]"},{token:"paren.rparen",regex:"[\\])]"},{token:"text",regex:"\\s+"}]}};o.inherits(n,i);t.VHDLHighlightRules=n});ace.define("ace/mode/vhdl",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/vhdl_highlight_rules"],function(e,t,r){"use strict";var o=e("../lib/oop");var i=e("./text").Mode;var n=e("./vhdl_highlight_rules").VHDLHighlightRules;var a=function(){this.HighlightRules=n;this.$behaviour=this.$defaultBehaviour};o.inherits(a,i);(function(){this.lineCommentStart="--";this.$id="ace/mode/vhdl"}).call(a.prototype);t.Mode=a});(function(){ace.require(["ace/mode/vhdl"],function(e){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=e}})})();