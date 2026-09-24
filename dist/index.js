"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var i=a(function(b,t){
var q=require('@stdlib/math-base-special-floor/dist'),v=4294967296;function g(e,r,s,n){return r[n]=q(e/v)>>>0,r[n+s]=e>>>0,r}t.exports=g
});var c=a(function(f,u){
var x=i();function p(e){return x(e,[0,0],1,0)}u.exports=p
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=i(),o=c();d(o,"assign",m);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
