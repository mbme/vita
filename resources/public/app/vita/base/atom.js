// Compiled by ClojureScript 0.0-2760 {}
goog.provide('vita.base.atom');
goog.require('cljs.core');
vita.base.atom.str__GT_keyword = (function str__GT_keyword(str){
return cljs.core.keyword.call(null,str.substring((1)));
});
vita.base.atom.keyword__GT_str = (function keyword__GT_str(k){
return [cljs.core.str(":"),cljs.core.str(k)].join('');
});

vita.base.atom.InfoAtom = (function (){var obj5509 = {};
return obj5509;
})();

vita.base.atom.id = (function id(this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.vita$base$atom$InfoAtom$id$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.vita$base$atom$InfoAtom$id$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (vita.base.atom.id[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (vita.base.atom.id["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
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
vita.base.atom.AtomId = (function (type,name,__meta,__extmap,__hash){
this.type = type;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
vita.base.atom.AtomId.prototype.equals = (function (r){
var self__ = this;
var _ = this;
return (cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(r))) && (cljs.core._EQ_.call(null,self__.name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(r)));
});

vita.base.atom.AtomId.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(vita.base.atom.keyword__GT_str.call(null,self__.type)),cljs.core.str("/"),cljs.core.str(self__.name)].join('');
});

vita.base.atom.AtomId.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4379__auto__,k__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
return cljs.core._lookup.call(null,this__4379__auto____$1,k__4380__auto__,null);
});

vita.base.atom.AtomId.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4381__auto__,k5511,else__4382__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var G__5513 = (((k5511 instanceof cljs.core.Keyword))?k5511.fqn:null);
switch (G__5513) {
case "name":
return self__.name;

break;
case "type":
return self__.type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k5511,else__4382__auto__);

}
});

vita.base.atom.AtomId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4393__auto__,writer__4394__auto__,opts__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
var pr_pair__4396__auto__ = ((function (this__4393__auto____$1){
return (function (keyval__4397__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4394__auto__,cljs.core.pr_writer,""," ","",opts__4395__auto__,keyval__4397__auto__);
});})(this__4393__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4394__auto__,pr_pair__4396__auto__,"#vita.base.atom.AtomId{",", ","}",opts__4395__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

vita.base.atom.AtomId.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4377__auto__){
var self__ = this;
var this__4377__auto____$1 = this;
return self__.__meta;
});

vita.base.atom.AtomId.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return (new vita.base.atom.AtomId(self__.type,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

vita.base.atom.AtomId.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

vita.base.atom.AtomId.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4374__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
var h__4197__auto__ = self__.__hash;
if(!((h__4197__auto__ == null))){
return h__4197__auto__;
} else {
var h__4197__auto____$1 = cljs.core.hash_imap.call(null,this__4374__auto____$1);
self__.__hash = h__4197__auto____$1;

return h__4197__auto____$1;
}
});

vita.base.atom.AtomId.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4375__auto__,other__4376__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3764__auto__ = other__4376__auto__;
if(cljs.core.truth_(and__3764__auto__)){
return ((this__4375__auto____$1.constructor === other__4376__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4375__auto____$1,other__4376__auto__));
} else {
return and__3764__auto__;
}
})())){
return true;
} else {
return false;
}
});

vita.base.atom.AtomId.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4388__auto__,k__4389__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"type","type",1174270348),null], null), null),k__4389__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4388__auto____$1),self__.__meta),k__4389__auto__);
} else {
return (new vita.base.atom.AtomId(self__.type,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4389__auto__)),null));
}
});

vita.base.atom.AtomId.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4386__auto__,k__4387__auto__,G__5510){
var self__ = this;
var this__4386__auto____$1 = this;
var pred__5514 = cljs.core.keyword_identical_QMARK_;
var expr__5515 = k__4387__auto__;
if(cljs.core.truth_(pred__5514.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__5515))){
return (new vita.base.atom.AtomId(G__5510,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__5514.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__5515))){
return (new vita.base.atom.AtomId(self__.type,G__5510,self__.__meta,self__.__extmap,null));
} else {
return (new vita.base.atom.AtomId(self__.type,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4387__auto__,G__5510),null));
}
}
});

vita.base.atom.AtomId.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4391__auto__){
var self__ = this;
var this__4391__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

vita.base.atom.AtomId.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4378__auto__,G__5510){
var self__ = this;
var this__4378__auto____$1 = this;
return (new vita.base.atom.AtomId(self__.type,self__.name,G__5510,self__.__extmap,self__.__hash));
});

vita.base.atom.AtomId.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4384__auto__,entry__4385__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4385__auto__)){
return cljs.core._assoc.call(null,this__4384__auto____$1,cljs.core._nth.call(null,entry__4385__auto__,(0)),cljs.core._nth.call(null,entry__4385__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4384__auto____$1,entry__4385__auto__);
}
});

vita.base.atom.AtomId.cljs$lang$type = true;

vita.base.atom.AtomId.cljs$lang$ctorPrSeq = (function (this__4413__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"vita.base.atom/AtomId");
});

vita.base.atom.AtomId.cljs$lang$ctorPrWriter = (function (this__4413__auto__,writer__4414__auto__){
return cljs.core._write.call(null,writer__4414__auto__,"vita.base.atom/AtomId");
});

vita.base.atom.__GT_AtomId = (function __GT_AtomId(type,name){
return (new vita.base.atom.AtomId(type,name,null,null,null));
});

vita.base.atom.map__GT_AtomId = (function map__GT_AtomId(G__5512){
return (new vita.base.atom.AtomId(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__5512),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__5512),null,cljs.core.dissoc.call(null,G__5512,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177)),null));
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
vita.base.atom.VitaAtom = (function (type,name,data,__meta,__extmap,__hash){
this.type = type;
this.name = name;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
vita.base.atom.VitaAtom.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str(this$.vita$base$atom$InfoAtom$id$arity$1(null))].join('');
});

vita.base.atom.VitaAtom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4379__auto__,k__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
return cljs.core._lookup.call(null,this__4379__auto____$1,k__4380__auto__,null);
});

vita.base.atom.VitaAtom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4381__auto__,k5519,else__4382__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var G__5521 = (((k5519 instanceof cljs.core.Keyword))?k5519.fqn:null);
switch (G__5521) {
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
return cljs.core.get.call(null,self__.__extmap,k5519,else__4382__auto__);

}
});

vita.base.atom.VitaAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4393__auto__,writer__4394__auto__,opts__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
var pr_pair__4396__auto__ = ((function (this__4393__auto____$1){
return (function (keyval__4397__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4394__auto__,cljs.core.pr_writer,""," ","",opts__4395__auto__,keyval__4397__auto__);
});})(this__4393__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4394__auto__,pr_pair__4396__auto__,"#vita.base.atom.VitaAtom{",", ","}",opts__4395__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

vita.base.atom.VitaAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4377__auto__){
var self__ = this;
var this__4377__auto____$1 = this;
return self__.__meta;
});

vita.base.atom.VitaAtom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return (new vita.base.atom.VitaAtom(self__.type,self__.name,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

vita.base.atom.VitaAtom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

vita.base.atom.VitaAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4374__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
var h__4197__auto__ = self__.__hash;
if(!((h__4197__auto__ == null))){
return h__4197__auto__;
} else {
var h__4197__auto____$1 = cljs.core.hash_imap.call(null,this__4374__auto____$1);
self__.__hash = h__4197__auto____$1;

return h__4197__auto____$1;
}
});

vita.base.atom.VitaAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4375__auto__,other__4376__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3764__auto__ = other__4376__auto__;
if(cljs.core.truth_(and__3764__auto__)){
return ((this__4375__auto____$1.constructor === other__4376__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4375__auto____$1,other__4376__auto__));
} else {
return and__3764__auto__;
}
})())){
return true;
} else {
return false;
}
});

vita.base.atom.VitaAtom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4388__auto__,k__4389__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4389__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4388__auto____$1),self__.__meta),k__4389__auto__);
} else {
return (new vita.base.atom.VitaAtom(self__.type,self__.name,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4389__auto__)),null));
}
});

vita.base.atom.VitaAtom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4386__auto__,k__4387__auto__,G__5518){
var self__ = this;
var this__4386__auto____$1 = this;
var pred__5522 = cljs.core.keyword_identical_QMARK_;
var expr__5523 = k__4387__auto__;
if(cljs.core.truth_(pred__5522.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__5523))){
return (new vita.base.atom.VitaAtom(G__5518,self__.name,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__5522.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__5523))){
return (new vita.base.atom.VitaAtom(self__.type,G__5518,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__5522.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__5523))){
return (new vita.base.atom.VitaAtom(self__.type,self__.name,G__5518,self__.__meta,self__.__extmap,null));
} else {
return (new vita.base.atom.VitaAtom(self__.type,self__.name,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4387__auto__,G__5518),null));
}
}
}
});

vita.base.atom.VitaAtom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4391__auto__){
var self__ = this;
var this__4391__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

vita.base.atom.VitaAtom.prototype.vita$base$atom$InfoAtom$ = true;

vita.base.atom.VitaAtom.prototype.vita$base$atom$InfoAtom$id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vita.base.atom.__GT_AtomId.call(null,self__.type,cljs.core.deref.call(null,self__.name));
});

vita.base.atom.VitaAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4378__auto__,G__5518){
var self__ = this;
var this__4378__auto____$1 = this;
return (new vita.base.atom.VitaAtom(self__.type,self__.name,self__.data,G__5518,self__.__extmap,self__.__hash));
});

vita.base.atom.VitaAtom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4384__auto__,entry__4385__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4385__auto__)){
return cljs.core._assoc.call(null,this__4384__auto____$1,cljs.core._nth.call(null,entry__4385__auto__,(0)),cljs.core._nth.call(null,entry__4385__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4384__auto____$1,entry__4385__auto__);
}
});

vita.base.atom.VitaAtom.cljs$lang$type = true;

vita.base.atom.VitaAtom.cljs$lang$ctorPrSeq = (function (this__4413__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"vita.base.atom/VitaAtom");
});

vita.base.atom.VitaAtom.cljs$lang$ctorPrWriter = (function (this__4413__auto__,writer__4414__auto__){
return cljs.core._write.call(null,writer__4414__auto__,"vita.base.atom/VitaAtom");
});

vita.base.atom.__GT_VitaAtom = (function __GT_VitaAtom(type,name,data){
return (new vita.base.atom.VitaAtom(type,name,data,null,null,null));
});

vita.base.atom.map__GT_VitaAtom = (function map__GT_VitaAtom(G__5520){
return (new vita.base.atom.VitaAtom(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__5520),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__5520),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__5520),null,cljs.core.dissoc.call(null,G__5520,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)),null));
});

vita.base.atom.read_id = (function read_id(p__5526){
var map__5528 = p__5526;
var map__5528__$1 = ((cljs.core.seq_QMARK_.call(null,map__5528))?cljs.core.apply.call(null,cljs.core.hash_map,map__5528):map__5528);
var name = cljs.core.get.call(null,map__5528__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__5528__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return vita.base.atom.__GT_AtomId.call(null,type,name);
});
vita.base.atom.read = (function read(p__5529){
var map__5531 = p__5529;
var map__5531__$1 = ((cljs.core.seq_QMARK_.call(null,map__5531))?cljs.core.apply.call(null,cljs.core.hash_map,map__5531):map__5531);
var data = cljs.core.get.call(null,map__5531__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var name = cljs.core.get.call(null,map__5531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__5531__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return vita.base.atom.__GT_VitaAtom.call(null,type,cljs.core.atom.call(null,name),cljs.core.atom.call(null,data));
});

//# sourceMappingURL=atom.js.map