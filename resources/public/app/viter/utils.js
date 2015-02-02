// Compiled by ClojureScript 0.0-2760 {}
goog.provide('viter.utils');
goog.require('cljs.core');
goog.require('clojure.string');
viter.utils.get_words = (function get_words(s){
return clojure.string.split.call(null,s,/\s+/);
});
viter.utils.join = (function join(col){
return clojure.string.join.call(null," ",col);
});
viter.utils.empty_val_QMARK_ = (function empty_val_QMARK_(v){
var or__12647__auto__ = (v == null);
if(or__12647__auto__){
return or__12647__auto__;
} else {
return clojure.string.blank_QMARK_.call(null,v);
}
});
viter.utils.echo = (function echo(v){
cljs.core.println.call(null,v);

return v;
});
viter.utils.remove_empty_vals = (function remove_empty_vals(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,viter.utils.empty_val_QMARK_,cljs.core.val),m));
});
viter.utils.request_animation_frame = (function (){var or__12647__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__12647__auto__)){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__12647__auto____$1)){
return or__12647__auto____$1;
} else {
var or__12647__auto____$2 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__12647__auto____$2)){
return or__12647__auto____$2;
} else {
var or__12647__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__12647__auto____$3)){
return or__12647__auto____$3;
} else {
return ((function (or__12647__auto____$3,or__12647__auto____$2,or__12647__auto____$1,or__12647__auto__){
return (function (f){
return window.setTimeout(f,(16));
});
;})(or__12647__auto____$3,or__12647__auto____$2,or__12647__auto____$1,or__12647__auto__))
}
}
}
}
})();
viter.utils.React = React;
viter.utils.autosize_BANG_ = (function autosize_BANG_(elem){
(elem.style["height"] = "auto");

if((elem.clientHeight < elem.scrollHeight)){
return (elem.style["height"] = [cljs.core.str(elem.scrollHeight),cljs.core.str("px")].join(''));
} else {
return null;
}
});
viter.utils.focus_input_BANG_ = (function focus_input_BANG_(input){
var len = input.value.length;
(input["selectionStart"] = len);

(input["selectionEnd"] = len);

return input.focus();
});

//# sourceMappingURL=utils.js.map