// Compiled by ClojureScript 0.0-2740 {}
goog.provide('vita.log');
goog.require('cljs.core');
vita.log.prepare = (function prepare(param){
if((param instanceof cljs.core.Keyword)){
return [cljs.core.str(param)].join('');
} else {
return param;

}
});
cljs.core.enable_console_print_BANG_.call(null);

//# sourceMappingURL=log.js.map