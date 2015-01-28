// Compiled by ClojureScript 0.0-2740 {}
goog.provide('vita.atom');
goog.require('cljs.core');
vita.atom.str__GT_keyword = (function str__GT_keyword(str){
return cljs.core.keyword.call(null,str.substring((1)));
});
vita.atom.keyword__GT_str = (function keyword__GT_str(k){
return [cljs.core.str(":"),cljs.core.str(k)].join('');
});

vita.atom.InfoAtom = (function (){var obj14413 = {};
return obj14413;
})();

vita.atom.id = (function id(this$){
if((function (){var and__12613__auto__ = this$;
if(and__12613__auto__){
return this$.vita$atom$InfoAtom$id$arity$1;
} else {
return and__12613__auto__;
}
})()){
return this$.vita$atom$InfoAtom$id$arity$1(this$);
} else {
var x__13269__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12625__auto__ = (vita.atom.id[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (vita.atom.id["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"InfoAtom.id",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} type
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
vita.atom.AtomId = (function (type,name,__meta,__extmap,__hash){
this.type = type;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
vita.atom.AtomId.prototype.equals = (function (r){
var self__ = this;
var _ = this;
return (cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(r))) && (cljs.core._EQ_.call(null,self__.name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(r)));
});

vita.atom.AtomId.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(vita.atom.keyword__GT_str.call(null,self__.type)),cljs.core.str("/"),cljs.core.str(self__.name)].join('');
});

vita.atom.AtomId.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13228__auto__,k__13229__auto__){
var self__ = this;
var this__13228__auto____$1 = this;
return cljs.core._lookup.call(null,this__13228__auto____$1,k__13229__auto__,null);
});

vita.atom.AtomId.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13230__auto__,k14415,else__13231__auto__){
var self__ = this;
var this__13230__auto____$1 = this;
var G__14417 = (((k14415 instanceof cljs.core.Keyword))?k14415.fqn:null);
switch (G__14417) {
case "name":
return self__.name;

break;
case "type":
return self__.type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14415,else__13231__auto__);

}
});

vita.atom.AtomId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13242__auto__,writer__13243__auto__,opts__13244__auto__){
var self__ = this;
var this__13242__auto____$1 = this;
var pr_pair__13245__auto__ = ((function (this__13242__auto____$1){
return (function (keyval__13246__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__13243__auto__,cljs.core.pr_writer,""," ","",opts__13244__auto__,keyval__13246__auto__);
});})(this__13242__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__13243__auto__,pr_pair__13245__auto__,"#vita.atom.AtomId{",", ","}",opts__13244__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

vita.atom.AtomId.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13226__auto__){
var self__ = this;
var this__13226__auto____$1 = this;
return self__.__meta;
});

vita.atom.AtomId.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13222__auto__){
var self__ = this;
var this__13222__auto____$1 = this;
return (new vita.atom.AtomId(self__.type,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

vita.atom.AtomId.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13232__auto__){
var self__ = this;
var this__13232__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

vita.atom.AtomId.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13223__auto__){
var self__ = this;
var this__13223__auto____$1 = this;
var h__13046__auto__ = self__.__hash;
if(!((h__13046__auto__ == null))){
return h__13046__auto__;
} else {
var h__13046__auto____$1 = cljs.core.hash_imap.call(null,this__13223__auto____$1);
self__.__hash = h__13046__auto____$1;

return h__13046__auto____$1;
}
});

vita.atom.AtomId.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13224__auto__,other__13225__auto__){
var self__ = this;
var this__13224__auto____$1 = this;
if(cljs.core.truth_((function (){var and__12613__auto__ = other__13225__auto__;
if(cljs.core.truth_(and__12613__auto__)){
return ((this__13224__auto____$1.constructor === other__13225__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__13224__auto____$1,other__13225__auto__));
} else {
return and__12613__auto__;
}
})())){
return true;
} else {
return false;
}
});

vita.atom.AtomId.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13237__auto__,k__13238__auto__){
var self__ = this;
var this__13237__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"type","type",1174270348),null], null), null),k__13238__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__13237__auto____$1),self__.__meta),k__13238__auto__);
} else {
return (new vita.atom.AtomId(self__.type,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__13238__auto__)),null));
}
});

vita.atom.AtomId.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13235__auto__,k__13236__auto__,G__14414){
var self__ = this;
var this__13235__auto____$1 = this;
var pred__14418 = cljs.core.keyword_identical_QMARK_;
var expr__14419 = k__13236__auto__;
if(cljs.core.truth_(pred__14418.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__14419))){
return (new vita.atom.AtomId(G__14414,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14418.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__14419))){
return (new vita.atom.AtomId(self__.type,G__14414,self__.__meta,self__.__extmap,null));
} else {
return (new vita.atom.AtomId(self__.type,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__13236__auto__,G__14414),null));
}
}
});

vita.atom.AtomId.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13240__auto__){
var self__ = this;
var this__13240__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

vita.atom.AtomId.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13227__auto__,G__14414){
var self__ = this;
var this__13227__auto____$1 = this;
return (new vita.atom.AtomId(self__.type,self__.name,G__14414,self__.__extmap,self__.__hash));
});

vita.atom.AtomId.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13233__auto__,entry__13234__auto__){
var self__ = this;
var this__13233__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__13234__auto__)){
return cljs.core._assoc.call(null,this__13233__auto____$1,cljs.core._nth.call(null,entry__13234__auto__,(0)),cljs.core._nth.call(null,entry__13234__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__13233__auto____$1,entry__13234__auto__);
}
});

vita.atom.AtomId.cljs$lang$type = true;

vita.atom.AtomId.cljs$lang$ctorPrSeq = (function (this__13262__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"vita.atom/AtomId");
});

vita.atom.AtomId.cljs$lang$ctorPrWriter = (function (this__13262__auto__,writer__13263__auto__){
return cljs.core._write.call(null,writer__13263__auto__,"vita.atom/AtomId");
});

vita.atom.__GT_AtomId = (function __GT_AtomId(type,name){
return (new vita.atom.AtomId(type,name,null,null,null));
});

vita.atom.map__GT_AtomId = (function map__GT_AtomId(G__14416){
return (new vita.atom.AtomId(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__14416),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__14416),null,cljs.core.dissoc.call(null,G__14416,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});


/**
* @constructor
* @param {*} type
* @param {*} name
* @param {*} data
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
vita.atom.VitaAtom = (function (type,name,data,__meta,__extmap,__hash){
this.type = type;
this.name = name;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
vita.atom.VitaAtom.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str(this$.vita$atom$InfoAtom$id$arity$1(null))].join('');
});

vita.atom.VitaAtom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13228__auto__,k__13229__auto__){
var self__ = this;
var this__13228__auto____$1 = this;
return cljs.core._lookup.call(null,this__13228__auto____$1,k__13229__auto__,null);
});

vita.atom.VitaAtom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13230__auto__,k14423,else__13231__auto__){
var self__ = this;
var this__13230__auto____$1 = this;
var G__14425 = (((k14423 instanceof cljs.core.Keyword))?k14423.fqn:null);
switch (G__14425) {
case "data":
return self__.data;

break;
case "name":
return self__.name;

break;
case "type":
return self__.type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14423,else__13231__auto__);

}
});

vita.atom.VitaAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13242__auto__,writer__13243__auto__,opts__13244__auto__){
var self__ = this;
var this__13242__auto____$1 = this;
var pr_pair__13245__auto__ = ((function (this__13242__auto____$1){
return (function (keyval__13246__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__13243__auto__,cljs.core.pr_writer,""," ","",opts__13244__auto__,keyval__13246__auto__);
});})(this__13242__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__13243__auto__,pr_pair__13245__auto__,"#vita.atom.VitaAtom{",", ","}",opts__13244__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

vita.atom.VitaAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13226__auto__){
var self__ = this;
var this__13226__auto____$1 = this;
return self__.__meta;
});

vita.atom.VitaAtom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13222__auto__){
var self__ = this;
var this__13222__auto____$1 = this;
return (new vita.atom.VitaAtom(self__.type,self__.name,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

vita.atom.VitaAtom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13232__auto__){
var self__ = this;
var this__13232__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

vita.atom.VitaAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13223__auto__){
var self__ = this;
var this__13223__auto____$1 = this;
var h__13046__auto__ = self__.__hash;
if(!((h__13046__auto__ == null))){
return h__13046__auto__;
} else {
var h__13046__auto____$1 = cljs.core.hash_imap.call(null,this__13223__auto____$1);
self__.__hash = h__13046__auto____$1;

return h__13046__auto____$1;
}
});

vita.atom.VitaAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13224__auto__,other__13225__auto__){
var self__ = this;
var this__13224__auto____$1 = this;
if(cljs.core.truth_((function (){var and__12613__auto__ = other__13225__auto__;
if(cljs.core.truth_(and__12613__auto__)){
return ((this__13224__auto____$1.constructor === other__13225__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__13224__auto____$1,other__13225__auto__));
} else {
return and__12613__auto__;
}
})())){
return true;
} else {
return false;
}
});

vita.atom.VitaAtom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13237__auto__,k__13238__auto__){
var self__ = this;
var this__13237__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__13238__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__13237__auto____$1),self__.__meta),k__13238__auto__);
} else {
return (new vita.atom.VitaAtom(self__.type,self__.name,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__13238__auto__)),null));
}
});

vita.atom.VitaAtom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13235__auto__,k__13236__auto__,G__14422){
var self__ = this;
var this__13235__auto____$1 = this;
var pred__14426 = cljs.core.keyword_identical_QMARK_;
var expr__14427 = k__13236__auto__;
if(cljs.core.truth_(pred__14426.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__14427))){
return (new vita.atom.VitaAtom(G__14422,self__.name,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14426.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__14427))){
return (new vita.atom.VitaAtom(self__.type,G__14422,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14426.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__14427))){
return (new vita.atom.VitaAtom(self__.type,self__.name,G__14422,self__.__meta,self__.__extmap,null));
} else {
return (new vita.atom.VitaAtom(self__.type,self__.name,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__13236__auto__,G__14422),null));
}
}
}
});

vita.atom.VitaAtom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13240__auto__){
var self__ = this;
var this__13240__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

vita.atom.VitaAtom.prototype.vita$atom$InfoAtom$ = true;

vita.atom.VitaAtom.prototype.vita$atom$InfoAtom$id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vita.atom.__GT_AtomId.call(null,self__.type,cljs.core.deref.call(null,self__.name));
});

vita.atom.VitaAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13227__auto__,G__14422){
var self__ = this;
var this__13227__auto____$1 = this;
return (new vita.atom.VitaAtom(self__.type,self__.name,self__.data,G__14422,self__.__extmap,self__.__hash));
});

vita.atom.VitaAtom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13233__auto__,entry__13234__auto__){
var self__ = this;
var this__13233__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__13234__auto__)){
return cljs.core._assoc.call(null,this__13233__auto____$1,cljs.core._nth.call(null,entry__13234__auto__,(0)),cljs.core._nth.call(null,entry__13234__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__13233__auto____$1,entry__13234__auto__);
}
});

vita.atom.VitaAtom.cljs$lang$type = true;

vita.atom.VitaAtom.cljs$lang$ctorPrSeq = (function (this__13262__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"vita.atom/VitaAtom");
});

vita.atom.VitaAtom.cljs$lang$ctorPrWriter = (function (this__13262__auto__,writer__13263__auto__){
return cljs.core._write.call(null,writer__13263__auto__,"vita.atom/VitaAtom");
});

vita.atom.__GT_VitaAtom = (function __GT_VitaAtom(type,name,data){
return (new vita.atom.VitaAtom(type,name,data,null,null,null));
});

vita.atom.map__GT_VitaAtom = (function map__GT_VitaAtom(G__14424){
return (new vita.atom.VitaAtom(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__14424),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__14424),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__14424),null,cljs.core.dissoc.call(null,G__14424,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)),null));
});

vita.atom.read_id = (function read_id(p__14430){
var map__14432 = p__14430;
var map__14432__$1 = ((cljs.core.seq_QMARK_.call(null,map__14432))?cljs.core.apply.call(null,cljs.core.hash_map,map__14432):map__14432);
var name = cljs.core.get.call(null,map__14432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__14432__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return vita.atom.__GT_AtomId.call(null,type,name);
});
vita.atom.read = (function read(p__14433){
var map__14435 = p__14433;
var map__14435__$1 = ((cljs.core.seq_QMARK_.call(null,map__14435))?cljs.core.apply.call(null,cljs.core.hash_map,map__14435):map__14435);
var data = cljs.core.get.call(null,map__14435__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var name = cljs.core.get.call(null,map__14435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__14435__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return vita.atom.__GT_VitaAtom.call(null,type,cljs.core.atom.call(null,name),cljs.core.atom.call(null,data));
});

//# sourceMappingURL=atom.js.map