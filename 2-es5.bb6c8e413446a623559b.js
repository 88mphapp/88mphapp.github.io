!function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/uSP":function(e,t,r){var n=r("+qE3").EventEmitter,o=r("MCLT").inherits;function s(){n.call(this),this.isLocked=!0}e.exports=s,o(s,n),s.prototype.go=function(){this.isLocked=!1,this.emit("unlock")},s.prototype.stop=function(){this.isLocked=!0,this.emit("lock")},s.prototype.await=function(e){this.isLocked?this.once("unlock",e):setTimeout(e)}},EqmL:function(e,n,s){var a=s("ja2i"),i=s("t7TP");e.exports=function(e){r(s,e);var n=o(s);function s(){return t(this,s),n.call(this,function(e){var t=e.blockTracker,r=e.provider,n=e.engine,o=i({blockTracker:t,provider:r}),s=o.events,a=o.middleware;return s.on("notification",function(e){return n.emit("data",null,e)}),a})}return s}(a)},Rlsf:function(e,t,r){var n=r("l1gh"),o=r("KWkM"),s=r("MCLT").inherits,a=r("tnHP"),i=r("HtlB"),c=r("U6jy"),u=r("odnP"),p=r("Uu7K"),d=r("a5O3"),l=/^[0-9A-Fa-f]+$/g;function f(e){this.nonceLock=u(1),e.getAccounts&&(this.getAccounts=e.getAccounts),e.processTransaction&&(this.processTransaction=e.processTransaction),e.processMessage&&(this.processMessage=e.processMessage),e.processPersonalMessage&&(this.processPersonalMessage=e.processPersonalMessage),e.processTypedMessage&&(this.processTypedMessage=e.processTypedMessage),this.approveTransaction=e.approveTransaction||this.autoApprove,this.approveMessage=e.approveMessage||this.autoApprove,this.approvePersonalMessage=e.approvePersonalMessage||this.autoApprove,this.approveDecryptMessage=e.approveDecryptMessage||this.autoApprove,this.approveEncryptionPublicKey=e.approveEncryptionPublicKey||this.autoApprove,this.approveTypedMessage=e.approveTypedMessage||this.autoApprove,e.signTransaction&&(this.signTransaction=e.signTransaction||m("signTransaction")),e.signMessage&&(this.signMessage=e.signMessage||m("signMessage")),e.signPersonalMessage&&(this.signPersonalMessage=e.signPersonalMessage||m("signPersonalMessage")),e.decryptMessage&&(this.decryptMessage=e.decryptMessage||m("decryptMessage")),e.encryptionPublicKey&&(this.encryptionPublicKey=e.encryptionPublicKey||m("encryptionPublicKey")),e.signTypedMessage&&(this.signTypedMessage=e.signTypedMessage||m("signTypedMessage")),e.recoverPersonalSignature&&(this.recoverPersonalSignature=e.recoverPersonalSignature),e.publishTransaction&&(this.publishTransaction=e.publishTransaction),this.estimateGas=e.estimateGas||this.estimateGas,this.getGasPrice=e.getGasPrice||this.getGasPrice}function h(e){return e.toLowerCase()}function g(e){var t=a.addHexPrefix(e);return a.isValidAddress(t)}function y(e){var t=a.addHexPrefix(e);return!a.isValidAddress(t)&&v(e)}function v(e){return"string"==typeof e&&"0x"===e.slice(0,2)&&e.slice(2).match(l)}function m(e){return function(t,r){r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "'+e+'" fn in constructor options'))}}e.exports=f,s(f,p),f.prototype.handleRequest=function(e,t,r){var o,s,a,i,u,p,d,l=this;switch(l._parityRequests={},l._parityRequestCount=0,e.method){case"eth_coinbase":return void l.getAccounts(function(e,t){if(e)return r(e);r(null,t[0]||null)});case"eth_accounts":return void l.getAccounts(function(e,t){if(e)return r(e);r(null,t)});case"eth_sendTransaction":return o=e.params[0],void n([function(e){return l.validateTransaction(o,e)},function(e){return l.processTransaction(o,e)}],r);case"eth_signTransaction":return o=e.params[0],void n([function(e){return l.validateTransaction(o,e)},function(e){return l.processSignTransaction(o,e)}],r);case"eth_sign":return u=e.params[0],i=e.params[1],a=e.params[2]||{},s=c(a,{from:u,data:i}),void n([function(e){return l.validateMessage(s,e)},function(e){return l.processMessage(s,e)}],r);case"personal_sign":return function(){var t=e.params[0];if(y(e.params[1])&&g(t)){"[message, address]. This was previously handled incorrectly, ","and has been corrected automatically. ","Please switch this param order for smooth behavior in the future.",console.warn("The eth_personalSign method requires params ordered [message, address]. This was previously handled incorrectly, and has been corrected automatically. Please switch this param order for smooth behavior in the future."),u=e.params[0],i=e.params[1]}else i=e.params[0],u=e.params[1];a=e.params[2]||{},s=c(a,{from:u,data:i}),n([function(e){return l.validatePersonalMessage(s,e)},function(e){return l.processPersonalMessage(s,e)}],r)}();case"eth_decryptMessage":return function(){var t=e.params[0];if(y(e.params[1])&&g(t)){"[message, address]. This was previously handled incorrectly, ","and has been corrected automatically. ","Please switch this param order for smooth behavior in the future.",console.warn("The eth_decryptMessage method requires params ordered [message, address]. This was previously handled incorrectly, and has been corrected automatically. Please switch this param order for smooth behavior in the future."),u=e.params[0],i=e.params[1]}else i=e.params[0],u=e.params[1];a=e.params[2]||{},s=c(a,{from:u,data:i}),n([function(e){return l.validateDecryptMessage(s,e)},function(e){return l.processDecryptMessage(s,e)}],r)}();case"encryption_public_key":return function(){var t=e.params[0];n([function(e){return l.validateEncryptionPublicKey(t,e)},function(e){return l.processEncryptionPublicKey(t,e)}],r)}();case"personal_ecRecover":return i=e.params[0],a=e.params[2]||{},s=c(a,{sig:e.params[1],data:i}),void l.recoverPersonalSignature(s,r);case"eth_signTypedData":case"eth_signTypedData_v3":case"eth_signTypedData_v4":return p=e.params[0],d=e.params[1],g(p)?(u=p,i=d):(i=p,u=d),a=e.params[2]||{},s=c(a,{from:u,data:i}),void n([function(e){return l.validateTypedMessage(s,e)},function(e){return l.processTypedMessage(s,e)}],r);case"parity_postTransaction":return o=e.params[0],void l.parityPostTransaction(o,r);case"parity_postSign":return u=e.params[0],i=e.params[1],void l.parityPostSign(u,i,r);case"parity_checkRequest":return void l.parityCheckRequest(e.params[0],r);case"parity_defaultAccount":return void l.getAccounts(function(e,t){if(e)return r(e);r(null,t[0]||null)});default:return void t()}},f.prototype.getAccounts=function(e){e(null,[])},f.prototype.processTransaction=function(e,t){var r=this;n([function(t){return r.approveTransaction(e,t)},function(e,t){return r.checkApproval("transaction",e,t)},function(t){return r.finalizeAndSubmitTx(e,t)}],t)},f.prototype.processSignTransaction=function(e,t){var r=this;n([function(t){return r.approveTransaction(e,t)},function(e,t){return r.checkApproval("transaction",e,t)},function(t){return r.finalizeTx(e,t)}],t)},f.prototype.processMessage=function(e,t){var r=this;n([function(t){return r.approveMessage(e,t)},function(e,t){return r.checkApproval("message",e,t)},function(t){return r.signMessage(e,t)}],t)},f.prototype.processPersonalMessage=function(e,t){var r=this;n([function(t){return r.approvePersonalMessage(e,t)},function(e,t){return r.checkApproval("message",e,t)},function(t){return r.signPersonalMessage(e,t)}],t)},f.prototype.processDecryptMessage=function(e,t){var r=this;n([function(t){return r.approveDecryptMessage(e,t)},function(e,t){return r.checkApproval("decryptMessage",e,t)},function(t){return r.decryptMessage(e,t)}],t)},f.prototype.processEncryptionPublicKey=function(e,t){var r=this;n([function(t){return r.approveEncryptionPublicKey(e,t)},function(e,t){return r.checkApproval("encryptionPublicKey",e,t)},function(t){return r.encryptionPublicKey(e,t)}],t)},f.prototype.processTypedMessage=function(e,t){var r=this;n([function(t){return r.approveTypedMessage(e,t)},function(e,t){return r.checkApproval("message",e,t)},function(t){return r.signTypedMessage(e,t)}],t)},f.prototype.autoApprove=function(e,t){t(null,!0)},f.prototype.checkApproval=function(e,t,r){r(t?null:new Error("User denied "+e+" signature."))},f.prototype.parityPostTransaction=function(e,t){var r=this,n="0x".concat(r._parityRequestCount.toString(16));r._parityRequestCount++,r.emitPayload({method:"eth_sendTransaction",params:[e]},function(e,t){r._parityRequests[n]=e?{error:e}:t.result}),t(null,n)},f.prototype.parityPostSign=function(e,t,r){var n=this,o="0x".concat(n._parityRequestCount.toString(16));n._parityRequestCount++,n.emitPayload({method:"eth_sign",params:[e,t]},function(e,t){n._parityRequests[o]=e?{error:e}:t.result}),r(null,o)},f.prototype.parityCheckRequest=function(e,t){var r=this._parityRequests[e]||null;return r?r.error?t(r.error):void t(null,r):t(null,null)},f.prototype.recoverPersonalSignature=function(e,t){var r;try{r=i.recoverPersonalSignature(e)}catch(n){return t(n)}t(null,r)},f.prototype.validateTransaction=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign transaction."));this.validateSender(e.from,function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to sign transaction for this address: "'.concat(e.from,'"')))})},f.prototype.validateMessage=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign message."));this.validateSender(e.from,function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from,'"')))})},f.prototype.validatePersonalMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign personal message.")):void 0===e.data?t(new Error("Undefined message - message required to sign personal message.")):v(e.data)?void this.validateSender(e.from,function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from,'"')))}):t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))},f.prototype.validateDecryptMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to decrypt message.")):void 0===e.data?t(new Error("Undefined message - message required to decrypt message.")):v(e.data)?void this.validateSender(e.from,function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to decrypt message for this address: "'.concat(e.from,'"')))}):t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."))},f.prototype.validateEncryptionPublicKey=function(e,t){this.validateSender(e,function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to obtain encryption public key for this address: "'.concat(e,'"')))})},f.prototype.validateTypedMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign typed data.")):void 0===e.data?t(new Error("Undefined data - message required to sign typed data.")):void this.validateSender(e.from,function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from,'"')))})},f.prototype.validateSender=function(e,t){if(!e)return t(null,!1);this.getAccounts(function(r,n){if(r)return t(r);var o=-1!==n.map(h).indexOf(e.toLowerCase());t(null,o)})},f.prototype.finalizeAndSubmitTx=function(e,t){var r=this;r.nonceLock.take(function(){n([r.fillInTxExtras.bind(r,e),r.signTransaction.bind(r),r.publishTransaction.bind(r)],function(e,n){if(r.nonceLock.leave(),e)return t(e);t(null,n)})})},f.prototype.finalizeTx=function(e,t){var r=this;r.nonceLock.take(function(){n([r.fillInTxExtras.bind(r,e),r.signTransaction.bind(r)],function(n,o){if(r.nonceLock.leave(),n)return t(n);t(null,{raw:o,tx:e})})})},f.prototype.publishTransaction=function(e,t){this.emitPayload({method:"eth_sendRawTransaction",params:[e]},function(e,r){if(e)return t(e);t(null,r.result)})},f.prototype.estimateGas=function(e,t){d(this.engine,e,t)},f.prototype.getGasPrice=function(e){this.emitPayload({method:"eth_gasPrice",params:[]},function(t,r){if(t)return e(t);e(null,r.result)})},f.prototype.fillInTxExtras=function(e,t){var r=e.from,n={};void 0===e.gasPrice&&(n.gasPrice=this.getGasPrice.bind(this)),void 0===e.nonce&&(n.nonce=this.emitPayload.bind(this,{method:"eth_getTransactionCount",params:[r,"pending"]})),void 0===e.gas&&(n.gas=this.estimateGas.bind(this,function(e){return{from:e.from,to:e.to,value:e.value,data:e.data,gas:e.gas,gasPrice:e.gasPrice,nonce:e.nonce}}(e))),o(n,function(r,n){if(r)return t(r);var o={};n.gasPrice&&(o.gasPrice=n.gasPrice),n.nonce&&(o.nonce=n.nonce.result),n.gas&&(o.gas=n.gas),t(null,c(e,o))})}},Uu7K:function(e,t,r){var n=r("xQaN");function o(){}e.exports=o,o.prototype.setEngine=function(e){var t=this;t.engine||(t.engine=e,e.on("block",function(e){t.currentBlock=e}),e.on("start",function(){t.start()}),e.on("stop",function(){t.stop()}))},o.prototype.handleRequest=function(e,t,r){throw new Error("Subproviders should override `handleRequest`.")},o.prototype.emitPayload=function(e,t){this.engine.sendAsync(n(e),t)},o.prototype.stop=function(){},o.prototype.start=function(){}},a5O3:function(e,t,r){var n=r("xQaN");e.exports=function(e,t,r){e.sendAsync(n({method:"eth_estimateGas",params:[t]}),function(e,t){if(e)return"no contract code at given address"===e.message?r(null,"0xcf08"):r(e);r(null,t.result)})}},"cC/c":function(e,n,s){var a=s("ja2i"),i=s("2nhq");e.exports=function(e){r(s,e);var n=o(s);function s(){return t(this,s),n.call(this,function(e){var t=e.blockTracker,r=e.provider;return i({blockTracker:t,provider:r})})}return s}(a)},f4g2:function(e,t,r){var n=r("+qE3").EventEmitter,o=r("MCLT").inherits,s=r("tnHP"),a=r("V5x4"),i=r("LCem"),c=r("YOJA"),u=r("/uSP"),p=(r("gO+T"),r("xQaN"));function d(e){n.call(this),this.setMaxListeners(30),e=e||{};var t={sendAsync:this._handleAsync.bind(this)};this._blockTracker=e.blockTracker||new a({provider:e.blockTrackerProvider||t,pollingInterval:e.pollingInterval||4e3,setSkipCacheFlag:!0}),this._ready=new u,this.currentBlock=null,this._providers=[]}e.exports=d,o(d,n),d.prototype.start=function(){var e=this,t=this;t._ready.go(),t._blockTracker.on("latest",function(r){t._getBlockByNumberWithRetry(r,function(r,n){if(r)e.emit("error",r);else{if(!n)return console.log(n),void e.emit("error",new Error("Could not find block"));var o,a={number:s.toBuffer((o=n).number),hash:s.toBuffer(o.hash),parentHash:s.toBuffer(o.parentHash),nonce:s.toBuffer(o.nonce),mixHash:s.toBuffer(o.mixHash),sha3Uncles:s.toBuffer(o.sha3Uncles),logsBloom:s.toBuffer(o.logsBloom),transactionsRoot:s.toBuffer(o.transactionsRoot),stateRoot:s.toBuffer(o.stateRoot),receiptsRoot:s.toBuffer(o.receiptRoot||o.receiptsRoot),miner:s.toBuffer(o.miner),difficulty:s.toBuffer(o.difficulty),totalDifficulty:s.toBuffer(o.totalDifficulty),size:s.toBuffer(o.size),extraData:s.toBuffer(o.extraData),gasLimit:s.toBuffer(o.gasLimit),gasUsed:s.toBuffer(o.gasUsed),timestamp:s.toBuffer(o.timestamp),transactions:o.transactions};t._setCurrentBlock(a),t.emit("rawBlock",n),t.emit("latest",n)}})}),t._blockTracker.on("sync",t.emit.bind(t,"sync")),t._blockTracker.on("error",t.emit.bind(t,"error")),t._running=!0,t.emit("start")},d.prototype.stop=function(){this._blockTracker.removeAllListeners(),this._running=!1,this.emit("stop")},d.prototype.isRunning=function(){return this._running},d.prototype.addProvider=function(e,t){"number"==typeof t?this._providers.splice(t,0,e):this._providers.push(e),e.setEngine(this)},d.prototype.removeProvider=function(e){var t=this._providers.indexOf(e);if(t<0)throw new Error("Provider not found.");this._providers.splice(t,1)},d.prototype.send=function(e){throw new Error("Web3ProviderEngine does not support synchronous requests.")},d.prototype.sendAsync=function(e,t){var r=this;r._ready.await(function(){Array.isArray(e)?i(e,r._handleAsync.bind(r),t):r._handleAsync(e,t)})},d.prototype._getBlockByNumberWithRetry=function(e,t){var r=this,n=5;return void o();function o(){r._getBlockByNumber(e,s)}function s(e,r){return e?t(e):r?void t(null,r):n>0?(n--,void setTimeout(function(){o()},1e3)):void t(null,null)}},d.prototype._getBlockByNumber=function(e,t){var r=p({method:"eth_getBlockByNumber",params:[e,!1],skipCache:!0});this._handleAsync(r,function(e,r){return e?t(e):t(null,r.result)})},d.prototype._handleAsync=function(e,t){var r=this,n=-1,o=null,s=null,a=[];function i(r,n){s=r,o=n,c(a,function(e,t){e?e(s,o,t):t()},function(){var r={id:e.id,jsonrpc:e.jsonrpc,result:o};null!=s?(r.error={message:s.stack||s.message||s,code:-32e3},t(s,r)):t(null,r)})}!function t(o){if(n+=1,a.unshift(o),n>=r._providers.length)i(new Error('Request for method "'+e.method+'" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));else try{r._providers[n].handleRequest(e,t,i)}catch(s){i(s)}}()},d.prototype._setCurrentBlock=function(e){this.currentBlock=e,this.emit("block",e)}},"gO+T":function(e,t,r){var n=r("rE/H");function o(e){return"never"!==i(e)}function s(e){var t=a(e);return t>=e.params.length?e.params:"eth_getBlockByNumber"===e.method?e.params.slice(1):e.params.slice(0,t)}function a(e){switch(e.method){case"eth_getStorageAt":return 2;case"eth_getBalance":case"eth_getCode":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":return 1;case"eth_getBlockByNumber":return 0;default:return}}function i(e){switch(e.method){case"web3_clientVersion":case"web3_sha3":case"eth_protocolVersion":case"eth_getBlockTransactionCountByHash":case"eth_getUncleCountByBlockHash":case"eth_getCode":case"eth_getBlockByHash":case"eth_getTransactionByHash":case"eth_getTransactionByBlockHashAndIndex":case"eth_getTransactionReceipt":case"eth_getUncleByBlockHashAndIndex":case"eth_getCompilers":case"eth_compileLLL":case"eth_compileSolidity":case"eth_compileSerpent":case"shh_version":return"perma";case"eth_getBlockByNumber":case"eth_getBlockTransactionCountByNumber":case"eth_getUncleCountByBlockNumber":case"eth_getTransactionByBlockNumberAndIndex":case"eth_getUncleByBlockNumberAndIndex":return"fork";case"eth_gasPrice":case"eth_getBalance":case"eth_getStorageAt":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":case"eth_getFilterLogs":case"eth_getLogs":case"eth_blockNumber":return"block";case"net_version":case"net_peerCount":case"net_listening":case"eth_syncing":case"eth_sign":case"eth_coinbase":case"eth_mining":case"eth_hashrate":case"eth_accounts":case"eth_sendTransaction":case"eth_sendRawTransaction":case"eth_newFilter":case"eth_newBlockFilter":case"eth_newPendingTransactionFilter":case"eth_uninstallFilter":case"eth_getFilterChanges":case"eth_getWork":case"eth_submitWork":case"eth_submitHashrate":case"db_putString":case"db_getString":case"db_putHex":case"db_getHex":case"shh_post":case"shh_newIdentity":case"shh_hasIdentity":case"shh_newGroup":case"shh_addToGroup":case"shh_newFilter":case"shh_uninstallFilter":case"shh_getFilterChanges":case"shh_getMessages":return"never"}}e.exports={cacheIdentifierForPayload:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!o(e))return null;var r=t.includeBlockRef,a=r?e.params:s(e);return e.method+":"+n(a)},canCache:o,blockTagForPayload:function(e){var t=a(e);return t>=e.params.length?null:e.params[t]},paramsWithoutBlockTag:s,blockTagParamIndex:a,cacheTypeForPayload:i}},ja2i:function(n,a,i){var c=i("Uu7K");n.exports=function(n){r(p,n);var a,i,c,u=o(p);function p(e){var r;if(t(this,p),r=u.call(this),!e)throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");return r._constructorFn=e,s(r)}return a=p,(i=[{key:"setEngine",value:function(e){if(this.middleware)throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");var t=this._constructorFn({engine:e,provider:e,blockTracker:e._blockTracker});if(!t)throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");if("function"!=typeof t)throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");this.middleware=t}},{key:"handleRequest",value:function(e,t,r){var n={id:e.id};this.middleware(e,n,function(e){t(function(t,r,o){t?(delete n.result,n.error={message:t.message||t}):n.result=r,e?e(o):o()})},function(e){if(e)return r(e);r(null,n.result)})}}])&&e(a.prototype,i),c&&e(a,c),p}(c)},"kzD/":function(e,t){e.exports=function(){return Math.floor(Number.MAX_SAFE_INTEGER*Math.random())}},xQaN:function(e,t,r){var n=r("kzD/"),o=r("U6jy");e.exports=function(e){return o({id:n(),jsonrpc:"2.0",params:[]},e)}}}])}();