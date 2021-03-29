ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop");var o=e("./text_highlight_rules").TextHighlightRules;var i=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},i.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:true}]}};r.inherits(i,o);i.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}};i.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}};i.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}};t.DocCommentHighlightRules=i});ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop");var o=e("./doc_comment_highlight_rules").DocCommentHighlightRules;var i=e("./text_highlight_rules").TextHighlightRules;var a=t.cFunctions="\\b(?:hypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len))))\\b";var l=function(){var e="break|case|continue|default|do|else|for|goto|if|_Pragma|"+"return|switch|while|catch|operator|try|throw|using";var t="asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|"+"_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void|"+"class|wchar_t|template|char16_t|char32_t";var n="const|extern|register|restrict|static|volatile|inline|private|"+"protected|public|friend|explicit|virtual|export|mutable|typename|"+"constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local";var r="and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|"+"const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace";var i="NULL|true|false|TRUE|FALSE|nullptr";var l=this.$keywords=this.createKeywordMapper({"keyword.control":e,"storage.type":t,"storage.modifier":n,"keyword.operator":r,"variable.language":"this","constant.language":i},"identifier");var s="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*\\b";var c=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source;var g="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},o.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+c+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:c},{token:"constant.language.escape",regex:g},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:"support.function.C99.c",regex:a},{token:l,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]};this.embedRules(o,"doc-",[o.getEndRule("start")]);this.normalizeRules()};r.inherits(l,i);t.c_cppHighlightRules=l});ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("../range").Range;var o=function(){};(function(){this.checkOutdent=function(e,t){if(!/^\s+$/.test(e))return false;return/^\s*\}/.test(t)};this.autoOutdent=function(e,t){var n=e.getLine(t);var o=n.match(/^(\s*\})/);if(!o)return 0;var i=o[1].length;var a=e.findMatchingBracket({row:t,column:i});if(!a||a.row==t)return 0;var l=this.$getIndent(e.getLine(a.row));e.replace(new r(t,0,t,i-1),l)};this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(o.prototype);t.MatchingBraceOutdent=o});ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop");var o=e("../../range").Range;var i=e("./fold_mode").FoldMode;var a=t.FoldMode=function(e){if(e){this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start));this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end))}};r.inherits(a,i);(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/;this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/;this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/;this._getFoldWidgetBase=this.getFoldWidget;this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)){if(!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return""}var o=this._getFoldWidgetBase(e,t,n);if(!o&&this.startRegionRe.test(r))return"start";return o};this.getFoldWidgetRange=function(e,t,n,r){var o=e.getLine(n);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,n);var i=o.match(this.foldingStartMarker);if(i){var a=i.index;if(i[1])return this.openingBracketBlock(e,i[1],n,a);var l=e.getCommentFoldRange(n,a+i[0].length,1);if(l&&!l.isMultiLine()){if(r){l=this.getSectionRange(e,n)}else if(t!="all")l=null}return l}if(t==="markbegin")return;var i=o.match(this.foldingStopMarker);if(i){var a=i.index+i[0].length;if(i[1])return this.closingBracketBlock(e,i[1],n,a);return e.getCommentFoldRange(n,a,-1)}};this.getSectionRange=function(e,t){var n=e.getLine(t);var r=n.search(/\S/);var i=t;var a=n.length;t=t+1;var l=t;var s=e.getLength();while(++t<s){n=e.getLine(t);var c=n.search(/\S/);if(c===-1)continue;if(r>c)break;var g=this.getFoldWidgetRange(e,"all",t);if(g){if(g.start.row<=i){break}else if(g.isMultiLine()){t=g.end.row}else if(r==c){break}}l=t}return new o(i,a,l,e.getLine(l).length)};this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/);var i=e.getLength();var a=n;var l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;var s=1;while(++n<i){t=e.getLine(n);var c=l.exec(t);if(!c)continue;if(c[1])s--;else s++;if(!s)break}var g=n;if(g>a){return new o(a,r,g,t.length)}}}).call(a.prototype)});ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var r=e("../lib/oop");var o=e("./text").Mode;var i=e("./c_cpp_highlight_rules").c_cppHighlightRules;var a=e("./matching_brace_outdent").MatchingBraceOutdent;var l=e("../range").Range;var s=e("./behaviour/cstyle").CstyleBehaviour;var c=e("./folding/cstyle").FoldMode;var g=function(){this.HighlightRules=i;this.$outdent=new a;this.$behaviour=new s;this.foldingRules=new c};r.inherits(g,o);(function(){this.lineCommentStart="//";this.blockComment={start:"/*",end:"*/"};this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t);var o=this.getTokenizer().getLineTokens(t,e);var i=o.tokens;var a=o.state;if(i.length&&i[i.length-1].type=="comment"){return r}if(e=="start"){var l=t.match(/^.*[\{\(\[]\s*$/);if(l){r+=n}}else if(e=="doc-start"){if(a=="start"){return""}var l=t.match(/^\s*(\/?)\*/);if(l){if(l[1]){r+=" "}r+="* "}}return r};this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)};this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)};this.$id="ace/mode/c_cpp"}).call(g.prototype);t.Mode=g});ace.define("ace/mode/nix_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop");var o=e("./text_highlight_rules").TextHighlightRules;var i=function(){var e="true|false";var t="with|import|if|else|then|inherit";var n="let|in|rec";var r=this.createKeywordMapper({"constant.language.nix":e,"keyword.control.nix":t,"keyword.declaration.nix":n},"identifier");this.$rules={start:[{token:"comment",regex:/#.*$/},{token:"comment",regex:/\/\*/,next:"comment"},{token:"constant",regex:"<[^>]+>"},{regex:"(==|!=|<=?|>=?)",token:["keyword.operator.comparison.nix"]},{regex:"((?:[+*/%-]|\\~)=)",token:["keyword.operator.assignment.arithmetic.nix"]},{regex:"=",token:"keyword.operator.assignment.nix"},{token:"string",regex:"''",next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',push:"qqstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:r,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{regex:"}",token:function(e,t,n){return n[1]&&n[1].charAt(0)=="q"?"constant.language.escape":"text"},next:"pop"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qqdoc:[{token:"constant.language.escape",regex:/\$\{/,push:"start"},{token:"string",regex:"''",next:"pop"},{defaultToken:"string"}],qqstring:[{token:"constant.language.escape",regex:/\$\{/,push:"start"},{token:"string",regex:'"',next:"pop"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:/\$\{/,push:"start"},{token:"string",regex:"'",next:"pop"},{defaultToken:"string"}]};this.normalizeRules()};r.inherits(i,o);t.NixHighlightRules=i});ace.define("ace/mode/nix",["require","exports","module","ace/lib/oop","ace/mode/c_cpp","ace/mode/nix_highlight_rules","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var r=e("../lib/oop");var o=e("./c_cpp").Mode;var i=e("./nix_highlight_rules").NixHighlightRules;var a=e("./folding/cstyle").FoldMode;var l=function(){o.call(this);this.HighlightRules=i;this.foldingRules=new a;this.$behaviour=this.$defaultBehaviour};r.inherits(l,o);(function(){this.lineCommentStart="#";this.blockComment={start:"/*",end:"*/"};this.$id="ace/mode/nix"}).call(l.prototype);t.Mode=l});(function(){ace.require(["ace/mode/nix"],function(e){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=e}})})();