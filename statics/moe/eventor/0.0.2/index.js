define("eventor/0.0.2/index",[],function(t,e,s){function r(t){return t?i(t):void 0}function i(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}s.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},r.prototype.once=function(t,e){function s(){r.off(t,s),e.apply(this,arguments)}var r=this;return this._callbacks=this._callbacks||{},s.fn=e,this.on(t,s),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var s=this._callbacks[t];if(!s)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var r,i=0;i<s.length;i++)if(r=s[i],r===e||r.fn===e){s.splice(i,1);break}return this},r.prototype.trigger=r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),s=this._callbacks[t];if(s){s=s.slice(0);for(var r=0,i=s.length;i>r;++r)s[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}});