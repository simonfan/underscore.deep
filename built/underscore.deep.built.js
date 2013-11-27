//     UnderscoreDeep
//     (c) simonfan
//     UnderscoreDeep is licensed under the MIT terms.

define("underscore.deep",["underscore"],function(e){function n(e,n){return e[0]<n&&n<e[1]}function r(e,n){return e[0]<=n&&n<=e[1]}e.mixin({between:function(i,t,u){var c=u?n:r;return c=e.partial(c,i),e.isArray(t)?e.every(t,c):c(t)}})});