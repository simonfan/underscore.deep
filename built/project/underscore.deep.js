//     UnderscoreDeep
//     (c) simonfan
//     UnderscoreDeep is licensed under the MIT terms.

define(["underscore"],function(e){function t(e,t){return e[0]<t&&t<e[1]}function n(e,t){return e[0]<=t&&t<=e[1]}e.mixin({between:function(r,i,s){var o=s?t:n;return o=e.partial(o,r),e.isArray(i)?e.every(i,o):o(i)}})});