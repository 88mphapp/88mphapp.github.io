(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"50du":function(t,e,s){const i=s("+qE3");class n extends i{constructor(t){super(),setTimeout(()=>this.emit("error",new Error(t)),0)}}t.exports=t=>()=>new n(t)},JfcN:function(t,e){t.exports=(t={})=>({injected:["injected"],frame:["ws://127.0.0.1:1248","http://127.0.0.1:1248"],direct:["ws://127.0.0.1:8546","http://127.0.0.1:8545"],infura:[`wss://mainnet.infura.io/ws/v3/${t.infuraId}`,`https://mainnet.infura.io/v3/${t.infuraId}`],alchemy:[`wss://eth-mainnet.ws.alchemyapi.io/v2/${t.alchemyId}`,`https://eth-mainnet.alchemyapi.io/v2/${t.alchemyId}`],infuraRopsten:[`wss://ropsten.infura.io/ws/v3/${t.infuraId}`,`https://ropsten.infura.io/v3/${t.infuraId}`],alchemyRopsten:[`wss://eth-ropsten.ws.alchemyapi.io/v2/${t.alchemyId}`,`https://eth-ropsten.alchemyapi.io/v2/${t.alchemyId}`],infuraRinkeby:[`wss://rinkeby.infura.io/ws/v3/${t.infuraId}`,`https://rinkeby.infura.io/v3/${t.infuraId}`],alchemyRinkeby:[`wss://eth-rinkeby.ws.alchemyapi.io/v2/${t.alchemyId}`,`https://eth-rinkeby.alchemyapi.io/v2/${t.alchemyId}`],infuraKovan:[`wss://kovan.infura.io/ws/v3/${t.infuraId}`,`https://kovan.infura.io/v3/${t.infuraId}`],alchemyKovan:[`wss://eth-kovan.ws.alchemyapi.io/v2/${t.alchemyId}`,`https://eth-kovan.alchemyapi.io/v2/${t.alchemyId}`],infuraGoerli:[`wss://goerli.infura.io/ws/v3/${t.infuraId}`,`https://goerli.infura.io/ws/v3/${t.infuraId}`],alchemyGoerli:[`wss://eth-goerli.ws.alchemyapi.io/v2/${t.alchemyId}`,`https://eth-goerli.alchemyapi.io/v2/${t.alchemyId}`],idChain:["wss://idchain.one/ws/"],xDai:["https://rpc.xdaichain.com","https://dai.poa.network"],matic:["https://rpc-mainnet.maticvigil.com"]})},Zg07:function(t,e){const s=t=>"injected"===t?"injected":t.endsWith(".ipc")?"ipc":t.startsWith("wss://")||t.startsWith("ws://")?"ws":t.startsWith("https://")||t.startsWith("http://")?"http":"";t.exports=(t,e)=>[].concat(...[].concat(t).map(t=>e[t]?e[t].map(e=>({type:t,location:e,protocol:s(e)})):{type:"custom",location:t,protocol:s(t)})).filter(t=>!(!t.protocol&&"injected"!==t.type&&(console.log('eth-provider | Invalid provider preset/location: "'+t.location+'"'),1)))},dbjG:function(t,e,s){const i=s("+qE3"),n=s("soB0"),o=s("x4lP"),r=t=>{function e(e){t.status=e,t instanceof i&&t.emit("status",e)}async function s(){if(t.inSetup)return setTimeout(s,1e3);try{await t.send("eth_syncing")?(e("syncing"),setTimeout(()=>s(),5e3)):e("connected")}catch(i){e("disconnected")}}return e("loading"),s(),t.on("connect",()=>s()),t.on("close",()=>e("disconnected")),t};t.exports=(t,e,s)=>{if(t.injected.__isProvider&&e.map(t=>t.type).indexOf("injected")>-1)return delete t.injected.__isProvider,r(t.injected);const i=new n(new o(t,e,s));return i.setMaxListeners(128),r(i)}},fcLq:function(t,e,s){const i=s("+qE3"),{v4:n}=s("PTSb");let o;class r extends i{constructor(t,e,s){super(),o=t,this.options=s,this.connected=!1,this.subscriptions=!1,this.status="loading",this.url=e,this.pollId=n(),setTimeout(()=>this.create(),0),this._emit=(...t)=>this.closed?null:this.emit(...t)}create(){if(!o)return this._emit("error",new Error("No HTTP transport available"));this.on("error",()=>{this.connected&&this.close()}),this.init()}init(){this.send({jsonrpc:"2.0",method:"net_version",params:[],id:1},(t,e)=>{if(t)return this._emit("error",t);this.connected=!0,this._emit("connect"),this.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[this.pollId,"immediate"]},(t,e)=>{t||(this.subscriptions=!0,this.pollSubscriptions())})})}pollSubscriptions(){this.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[this.pollId]},(t,e)=>{if(t)return this.subscriptionTimeout=setTimeout(()=>this.pollSubscriptions(),1e4),this._emit("error",t);this.closed||(this.subscriptionTimeout=this.pollSubscriptions()),e&&e.map(t=>{let e;try{e=JSON.parse(t)}catch(s){e=!1}return e}).filter(t=>t).forEach(t=>this._emit("payload",t))})}close(){this.closed=!0,this._emit("close"),clearTimeout(this.subscriptionTimeout),this.removeAllListeners()}filterStatus(t){if(t.status>=200&&t.status<300)return t;const e=new Error(t.statusText);throw e.res=t,e.message}error(t,e,s=-1){this._emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:s}})}send(t,e){if(this.closed)return this.error(t,"Not connected");if("eth_subscribe"===t.method){if(!this.subscriptions)return this.error(t,"Subscriptions are not supported by this HTTP endpoint");t.pollId=this.pollId}const s=new o;let i=!1;const n=(n,o)=>{if(!i)if(s.abort(),i=!0,e)e(n,o);else{const{id:e,jsonrpc:s}=t;this._emit("payload",n?{id:e,jsonrpc:s,error:{message:n.message,code:n.code}}:{id:e,jsonrpc:s,result:o})}};s.open("POST",this.url,!0),s.setRequestHeader("Content-Type","application/json"),s.timeout=6e4,s.onerror=n,s.ontimeout=n,s.onreadystatechange=()=>{if(4===s.readyState)try{const t=JSON.parse(s.responseText);n(t.error,t.result)}catch(t){n(t)}},s.send(JSON.stringify(t))}}t.exports=t=>(e,s)=>new r(t,e,s)},gU0w:function(t,e,s){const i=s("+qE3"),n=s("y20P");let o;class r extends i{constructor(t,e,s){super(),o=t,setTimeout(()=>this.create(e,s),0)}create(t,e){o||this.emit("error",new Error("No WebSocket transport available"));try{this.socket=new o(t,[],{origin:e.origin})}catch(s){return this.emit("error",s)}this.socket.addEventListener("error",t=>this.emit("error",t)),this.socket.addEventListener("open",()=>{this.emit("connect"),this.socket.addEventListener("message",t=>{n("string"==typeof t.data?t.data:"",(t,e)=>{t||e.forEach(t=>{Array.isArray(t)?t.forEach(t=>this.emit("payload",t)):this.emit("payload",t)})})}),this.socket.addEventListener("close",()=>this.onClose())})}onClose(){this.socket=null,this.closed=!0,this.emit("close"),this.removeAllListeners()}close(){this.socket?this.socket.close():this.onClose()}error(t,e,s=-1){this.emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:s}})}send(t){this.socket&&this.socket.readyState===this.socket.CONNECTING?setTimeout(e=>this.send(t),10):!this.socket||this.socket.readyState>1?(this.connected=!1,this.error(t,"Not connected")):this.socket.send(JSON.stringify(t))}}t.exports=t=>(e,s)=>new r(t,e,s)},gfgD:function(t,e,s){const i=s("Zg07"),n=s("dbjG"),o=s("JfcN"),r={ethereum:"undefined"!=typeof window&&void 0!==window.ethereum?window.ethereum:null,web3:"undefined"!=typeof window&&void 0!==window.web3?window.web3.currentProvider:null},c="undefined"!=typeof window&&void 0!==window.WebSocket?window.WebSocket:null,h="undefined"!=typeof window&&void 0!==window.XMLHttpRequest?window.XMLHttpRequest:null;r.ethereum&&(r.ethereum.__isProvider=!0);const a={injected:r.ethereum||s("hiKS")(r.web3),ipc:s("50du")("IPC connections are unavliable in the browser"),ws:s("gU0w")(c),http:s("fcLq")(h)};t.exports=(t,e)=>{!t||Array.isArray(t)||"object"!=typeof t||e||(e=t,t=void 0),t||(t=["injected","frame"]),e||(e={}),(t=[].concat(t)).forEach(t=>{if(t.startsWith("alchemy")&&!e.alchemyId)throw new Error("Alchemy was included as a connection target but no Alchemy project ID was passed in options e.g. { alchemyId: '123abc' }");if(t.startsWith("infura")&&!e.infuraId)throw new Error("Infura was included as a connection target but no Infura project ID was passed in options e.g. { infuraId: '123abc' }")});const s=o(e);return n(a,i(t,s),e)}},hiKS:function(t,e,s){const i=s("+qE3");class n extends i{constructor(t,e){super(),t?setTimeout(()=>this.emit("error",new Error("Injected web3 provider is not currently supported")),0):setTimeout(()=>this.emit("error",new Error("No injected provider found")),0)}}t.exports=t=>e=>new n(t,e)},soB0:function(t,e,s){const i=s("+qE3");t.exports=class extends i{constructor(t){super(),this.enable=this.enable.bind(this),this._send=this._send.bind(this),this.send=this.send.bind(this),this._sendBatch=this._sendBatch.bind(this),this.subscribe=this.subscribe.bind(this),this.unsubscribe=this.unsubscribe.bind(this),this.sendAsync=this.sendAsync.bind(this),this.sendAsyncBatch=this.sendAsyncBatch.bind(this),this.isConnected=this.isConnected.bind(this),this.close=this.close.bind(this),this.request=this.request.bind(this),this.connected=!1,this.nextId=0,this.promises={},this.subscriptions=[],this.connection=t,this.connection.on("connect",()=>this.checkConnection()),this.connection.on("close",()=>{this.connected=!1,this.emit("close"),this.emit("disconnect")}),this.connection.on("payload",t=>{const{id:e,method:s,error:i,result:n}=t;void 0!==e?this.promises[e]&&(t.error?this.promises[e].reject(i):this.promises[e].resolve(n),delete this.promises[e]):s&&s.indexOf("_subscription")>-1&&(this.emit(t.params.subscription,t.params.result),this.emit(s,t.params),this.emit("message",{type:t.method,data:{subscription:t.params.subscription,result:t.params.result}}),this.emit("data",t))}),this.on("newListener",(t,e)=>{"chainChanged"===t&&!this.attemptedChainSubscription&&this.connected?this.startChainSubscription():"accountsChanged"===t&&!this.attemptedAccountsSubscription&&this.connected?this.startAccountsSubscription():"networkChanged"===t&&!this.attemptedNetworkSubscription&&this.connected&&(this.startNetworkSubscription(),console.warn("The networkChanged event is being deprecated, use chainChainged instead"))})}async checkConnection(){try{this.emit("connect",await this._send("net_version")),this.connected=!0,this.listenerCount("networkChanged")&&!this.attemptedNetworkSubscription&&this.startNetworkSubscription(),this.listenerCount("chainChanged")&&!this.attemptedChainSubscription&&this.startNetworkSubscription(),this.listenerCount("accountsChanged")&&!this.attemptedAccountsSubscription&&this.startAccountsSubscription()}catch(t){this.connected=!1}}async startNetworkSubscription(){this.attemptedNetworkSubscription=!0;try{const t=await this.subscribe("eth_subscribe","networkChanged");this.on(t,t=>this.emit("networkChanged",t))}catch(t){console.warn("Unable to subscribe to networkChanged",t)}}async startChainSubscription(){this.attemptedChainSubscription=!0;try{const t=await this.subscribe("eth_subscribe","chainChanged");this.on(t,t=>this.emit("chainChanged",t))}catch(t){console.warn("Unable to subscribe to chainChanged",t)}}async startAccountsSubscription(){this.attemptedAccountsSubscription=!0;try{const t=await this.subscribe("eth_subscribe","accountsChanged");this.on(t,t=>this.emit("accountsChanged",t))}catch(t){console.warn("Unable to subscribe to accountsChanged",t)}}enable(){return new Promise((t,e)=>{this._send("eth_accounts").then(s=>{if(s.length>0)this.accounts=s,this.coinbase=s[0],this.emit("enable"),t(s);else{const t=new Error("User Denied Full Provider");t.code=4001,e(t)}}).catch(e)})}_send(t,e=[]){return new Promise((s,i)=>{let n;"object"==typeof t&&null!==t?(n=t,n.params=n.params||[],n.jsonrpc="2.0",n.id=this.nextId++):n={jsonrpc:"2.0",id:this.nextId++,method:t,params:e},this.promises[n.id]={resolve:s,reject:i},n.method&&"string"==typeof n.method?n.params instanceof Array?this.connection.send(n):(this.promises[n.id].reject(new Error("Params is not a valid array.")),delete this.promises[n.id]):(this.promises[n.id].reject(new Error("Method is not a valid string.")),delete this.promises[n.id])})}send(...t){return this._send(...t)}_sendBatch(t){return Promise.all(t.map(t=>this._send(t.method,t.params)))}subscribe(t,e,s=[]){return this._send(t,[e,...s]).then(t=>(this.subscriptions.push(t),t))}unsubscribe(t,e){return this._send(t,[e]).then(t=>{if(t)return this.subscriptions=this.subscriptions.filter(t=>t!==e),this.removeAllListeners(e),t})}sendAsync(t,e){return e&&"function"==typeof e?t?(t.jsonrpc="2.0",t.id=t.id||this.nextId++,t instanceof Array?this.sendAsyncBatch(t,e):this._send(t.method,t.params).then(s=>{e(null,{id:t.id,jsonrpc:t.jsonrpc,result:s})}).catch(t=>{e(t)})):e(new Error("Invalid Payload")):e(new Error("Invalid or undefined callback provided to sendAsync"))}sendAsyncBatch(t,e){return this._sendBatch(t).then(s=>{const i=s.map((e,s)=>({id:t[s].id,jsonrpc:t[s].jsonrpc,result:e}));e(null,i)}).catch(t=>{e(t)})}isConnected(){return this.connected}close(){this.connection&&this.connection.close&&this.connection.close(),this.connected=!1;const t=new Error("Provider closed, subscription lost, please subscribe again.");this.subscriptions.forEach(e=>this.emit(e,t)),this.subscriptions=[]}request(t){return this._send(t.method,t.params)}}},x4lP:function(t,e,s){const i=s("+qE3");t.exports=class extends i{constructor(t,e,s){super(),this.targets=e,this.options=s,this.connections=t,this.connected=!1,this.status="loading",this.interval=s.interval||5e3,this.name=s.name||"default",this.inSetup=!0,this.connect()}connect(t=0){if(this.connection&&"connected"===this.connection.status&&t>=this.connection.index);else if(0===this.targets.length);else{const{protocol:e,location:s}=this.targets[t];this.connection=this.connections[e](s,this.options),this.connection.on("error",e=>this.connected?this.listenerCount("error")?this.emit("error",e):void console.warn("eth-provider - Uncaught connection error: "+e.message):this.connectionError(t,e)),this.connection.on("close",()=>{this.connected=!1,this.emitClose(),this.closing||this.refresh()}),this.connection.on("connect",()=>{this.connection.target=this.targets[t],this.connection.index=t,this.targets[t].status=this.connection.status,this.connected=!0,this.inSetup=!1,this.emit("connect")}),this.connection.on("data",t=>this.emit("data",t)),this.connection.on("payload",t=>this.emit("payload",t))}}refresh(t=this.interval){clearTimeout(this.connectTimer),this.connectTimer=setTimeout(()=>this.connect(),t)}connectionError(t,e){this.targets[t].status=e,this.targets.length-1===t?(this.inSetup=!1,this.refresh()):this.connect(++t)}emitClose(){this.emit("close")}close(){this.closing=!0,this.connection&&this.connection.close&&!this.connection.closed?this.connection.close():this.emit("close"),clearTimeout(this.connectTimer),clearTimeout(this.setupTimer)}error(t,e,s=-1){this.emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:s}})}send(t){this.inSetup?this.setupTimer=setTimeout(()=>this.send(t),100):this.connection.closed?this.error(t,"Not connected",4900):this.connection.send(t)}}},y20P:function(t,e){let s,i;t.exports=(t,e)=>{const n=[];t.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach(t=>{let o;s&&(t=s+t);try{o=JSON.parse(t)}catch(r){return s=t,clearTimeout(i),void(i=setTimeout(()=>e(new Error("Parse response timeout")),15e3))}clearTimeout(i),s=null,o&&n.push(o)}),e(null,n)}}}]);