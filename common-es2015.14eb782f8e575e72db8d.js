(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{B3Rj:function(e,t,n){var r=n("QqcV");e.exports=r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},BumV:function(e,t,n){"use strict";var r=n("B3Rj"),i=n("hwdV").Buffer;e.exports=function(e){function t(t){var n=t.slice(0,-4),r=t.slice(-4),i=e(n);if(!(r[0]^i[0]|r[1]^i[1]|r[2]^i[2]|r[3]^i[3]))return n}return{encode:function(t){var n=e(t);return r.encode(i.concat([t,n],t.length+4))},decode:function(e){var n=t(r.decode(e));if(!n)throw new Error("Invalid checksum");return n},decodeUnsafe:function(e){var n=r.decodeUnsafe(e);if(n)return t(n)}}}},Q0pZ:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r='\n\t<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#1652F0"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M5.45508 20.0006C5.45508 28.0338 11.9673 34.546 20.0006 34.546C28.0338 34.546 34.546 28.0338 34.546 20.0006C34.546 11.9673 28.0338 5.45508 20.0006 5.45508C11.9673 5.45508 5.45508 11.9673 5.45508 20.0006ZM17.3137 15.3145C16.2091 15.3145 15.3137 16.2099 15.3137 17.3145V22.6882C15.3137 23.7928 16.2091 24.6882 17.3137 24.6882H22.6874C23.792 24.6882 24.6874 23.7928 24.6874 22.6882V17.3145C24.6874 16.2099 23.792 15.3145 22.6874 15.3145H17.3137Z" fill="white"/>\n\t</svg>\n'},b3gk:function(e,t,n){"use strict";var r=n("mObS"),i=n("BumV");e.exports=i(function(e){var t=r("sha256").update(e).digest();return r("sha256").update(t).digest()})},qPxQ:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return p});var r={},i={},a=function(e,t){i[e]=t},o=function(e){var t=function(t,n){Object.assign(this,n),this.name=e,this.message=t||e,this.stack=(new Error).stack};return t.prototype=new Error,r[e]=t,t};o("AccountNameRequired"),o("AccountNotSupported"),o("AmountRequired"),o("BluetoothRequired"),o("BtcUnmatchedApp"),o("CantOpenDevice"),o("CashAddrNotSupported"),o("CurrencyNotSupported"),o("DeviceAppVerifyNotSupported"),o("DeviceGenuineSocketEarlyClose"),o("DeviceNotGenuine"),o("DeviceOnDashboardExpected"),o("DeviceOnDashboardUnexpected"),o("DeviceInOSUExpected"),o("DeviceHalted"),o("DeviceNameInvalid"),o("DeviceSocketFail"),o("DeviceSocketNoBulkStatus"),o("DisconnectedDevice"),o("DisconnectedDeviceDuringOperation"),o("EnpointConfig");var s=o("EthAppPleaseEnableContractData"),c=(o("FeeEstimationFailed"),o("FirmwareNotRecognized"),o("HardResetFail"),o("InvalidXRPTag"),o("InvalidAddress"),o("InvalidAddressBecauseDestinationIsAlsoSource"),o("LatestMCUInstalledError"),o("UnknownMCU"),o("LedgerAPIError"),o("LedgerAPIErrorWithMessage"),o("LedgerAPINotAvailable"),o("ManagerAppAlreadyInstalled"),o("ManagerAppRelyOnBTC"),o("ManagerAppDepInstallRequired"),o("ManagerAppDepUninstallRequired"),o("ManagerDeviceLocked"),o("ManagerFirmwareNotEnoughSpace"),o("ManagerNotEnoughSpace"),o("ManagerUninstallBTCDep"),o("NetworkDown"),o("NoAddressesFound"),o("NotEnoughBalance"),o("NotEnoughBalanceToDelegate"),o("NotEnoughBalanceInParentAccount"),o("NotEnoughSpendableBalance"),o("NotEnoughBalanceBecauseDestinationNotCreated"),o("NoAccessToCamera"),o("NotEnoughGas"),o("NotSupportedLegacyAddress"),o("GasLessThanEstimate"),o("PasswordsDontMatch"),o("PasswordIncorrect"),o("RecommendSubAccountsToEmpty"),o("RecommendUndelegation"),o("TimeoutTagged"),o("UnexpectedBootloader"),o("MCUNotGenuineToDashboard"),o("RecipientRequired"),o("UnavailableTezosOriginatedAccountReceive"),o("UnavailableTezosOriginatedAccountSend"),o("UpdateFetchFileFail"),o("UpdateIncorrectHash"),o("UpdateIncorrectSig"),o("UpdateYourApp"),o("UserRefusedDeviceNameChange"),o("UserRefusedAddress"),o("UserRefusedFirmwareUpdate"),o("UserRefusedAllowManager"),o("UserRefusedOnDevice"),o("TransportOpenUserCancelled"),o("TransportInterfaceNotAvailable"),o("TransportRaceCondition"));function d(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}o("TransportWebUSBGestureRequired"),o("DeviceShouldStayInApp"),o("WebsocketConnectionError"),o("WebsocketConnectionFailed"),o("WrongDeviceForAccount"),o("WrongAppForCurrency"),o("ETHAddressNonEIP"),o("CantScanQRCode"),o("FeeNotLoaded"),o("FeeRequired"),o("FeeTooHigh"),o("SyncError"),o("PairingFailed"),o("GenuineCheckFailed"),o("LedgerAPI4xx"),o("LedgerAPI5xx"),o("FirmwareOrAppUpdateRequired"),o("NoDBPathGiven"),o("DBWrongPassword"),o("DBNotReset"),d.prototype=new Error,a("TransportError",function(e){return new d(e.message,e.id)});var u={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,MISSING_CRITICAL_PARAMETER:26624,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function p(e){this.name="TransportStatusError";var t=Object.keys(u).find(function(t){return u[t]===e})||"UNKNOWN_ERROR",n=function(e){switch(e){case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}(e)||t,r=e.toString(16);this.message="Ledger device: "+n+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}p.prototype=new Error,a("TransportStatusError",function(e){return new p(e.statusCode)})},vUa2:function(e,t,n){var r=n("9lTW"),i=n("hwdV").Buffer,a=n("HEbw"),o=n("b3gk"),s=n("IzB8"),c=i.from("Bitcoin seed","utf8"),d={private:76066276,public:76067358};function u(e){this.versions=e||d,this.depth=0,this.index=0,this._privateKey=null,this._publicKey=null,this.chainCode=null,this._fingerprint=0,this.parentFingerprint=0}function p(e,t,n){var r=i.allocUnsafe(78);return r.writeUInt32BE(t,0),r.writeUInt8(e.depth,4),r.writeUInt32BE(e.depth?e.parentFingerprint:0,5),r.writeUInt32BE(e.index,9),e.chainCode.copy(r,13),n.copy(r,45),r}function l(e){var t=a.createHash("sha256").update(e).digest();return a.createHash("ripemd160").update(t).digest()}Object.defineProperty(u.prototype,"fingerprint",{get:function(){return this._fingerprint}}),Object.defineProperty(u.prototype,"identifier",{get:function(){return this._identifier}}),Object.defineProperty(u.prototype,"pubKeyHash",{get:function(){return this.identifier}}),Object.defineProperty(u.prototype,"privateKey",{get:function(){return this._privateKey},set:function(e){r.equal(e.length,32,"Private key must be 32 bytes."),r(!0===s.privateKeyVerify(e),"Invalid private key"),this._privateKey=e,this._publicKey=i.from(s.publicKeyCreate(e,!0)),this._identifier=l(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0)}}),Object.defineProperty(u.prototype,"publicKey",{get:function(){return this._publicKey},set:function(e){r(33===e.length||65===e.length,"Public key must be 33 or 65 bytes."),r(!0===s.publicKeyVerify(e),"Invalid public key"),this._publicKey=i.from(s.publicKeyConvert(e,!0)),this._identifier=l(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0),this._privateKey=null}}),Object.defineProperty(u.prototype,"privateExtendedKey",{get:function(){return this._privateKey?o.encode(p(this,this.versions.private,i.concat([i.alloc(1,0),this.privateKey]))):null}}),Object.defineProperty(u.prototype,"publicExtendedKey",{get:function(){return o.encode(p(this,this.versions.public,this.publicKey))}}),u.prototype.derive=function(e){if("m"===e||"M"===e||"m'"===e||"M'"===e)return this;var t=e.split("/"),n=this;return t.forEach(function(e,t){if(0!==t){var i=e.length>1&&"'"===e[e.length-1],a=parseInt(e,10);r(a<2147483648,"Invalid index"),i&&(a+=2147483648),n=n.deriveChild(a)}else r(/^[mM]{1}/.test(e),'Path must start with "m" or "M"')}),n},u.prototype.deriveChild=function(e){var t,n=e>=2147483648,o=i.allocUnsafe(4);if(o.writeUInt32BE(e,0),n){r(this.privateKey,"Could not derive hardened child key");var c=this.privateKey,d=i.alloc(1,0);c=i.concat([d,c]),t=i.concat([c,o])}else t=i.concat([this.publicKey,o]);var p=a.createHmac("sha512",this.chainCode).update(t).digest(),l=p.slice(0,32),h=p.slice(32),f=new u(this.versions);if(this.privateKey)try{f.privateKey=i.from(s.privateKeyTweakAdd(i.from(this.privateKey),l))}catch(v){return this.deriveChild(e+1)}else try{f.publicKey=i.from(s.publicKeyTweakAdd(i.from(this.publicKey),l,!0))}catch(v){return this.deriveChild(e+1)}return f.chainCode=h,f.depth=this.depth+1,f.parentFingerprint=this.fingerprint,f.index=e,f},u.prototype.sign=function(e){return i.from(s.ecdsaSign(e,this.privateKey).signature)},u.prototype.verify=function(e,t){return s.ecdsaVerify(Uint8Array.from(t),Uint8Array.from(e),Uint8Array.from(this.publicKey))},u.prototype.wipePrivateData=function(){return this._privateKey&&a.randomBytes(this._privateKey.length).copy(this._privateKey),this._privateKey=null,this},u.prototype.toJSON=function(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}},u.fromMasterSeed=function(e,t){var n=a.createHmac("sha512",c).update(e).digest(),r=n.slice(0,32),i=n.slice(32),o=new u(t);return o.chainCode=i,o.privateKey=r,o},u.fromExtendedKey=function(e,t){var n=new u(t=t||d),i=o.decode(e),a=i.readUInt32BE(0);r(a===t.private||a===t.public,"Version mismatch: does not match private or public"),n.depth=i.readUInt8(4),n.parentFingerprint=i.readUInt32BE(5),n.index=i.readUInt32BE(9),n.chainCode=i.slice(13,45);var s=i.slice(45);return 0===s.readUInt8(0)?(r(a===t.private,"Version mismatch: version does not match private"),n.privateKey=s.slice(1)):(r(a===t.public,"Version mismatch: version does not match public"),n.publicKey=s),n},u.fromJSON=function(e){return u.fromExtendedKey(e.xpriv)},u.HARDENED_OFFSET=2147483648,e.exports=u},zfVJ:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(e){var t=e.currentWallet,n=e.selectedWallet;return t?'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(t,"</b>\n    installed. If you would prefer to use\n    <b>").concat(n,'</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(n,' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    '):'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(n,'</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera"===n?'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>':"","\n    </p>\n    ")},i=function(e){var t=e.selectedWallet;return'\n  <p style="font-size: 0.889rem;">\n  Tap the button below to <b>Open '.concat(t,"</b>. Please access this site on ").concat(t,"'s in-app browser for a seamless experience.\n  </p>\n  ")}}}]);