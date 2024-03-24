/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{889:function(e,t,n){"use strict";n.r(t);var r=n(803),o=n(806),c=n(801),l=n(802);const h="firebasestorage.googleapis.com",d="storageBucket";class _ extends c.c{constructor(code,e,t=0){super(T(code),`Firebase Storage: ${e} (${T(code)})`),this.status_=t,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(code){return T(code)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var f,m;function T(code){return"storage/"+code}function R(){return new _(f.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function w(){return new _(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function v(){return new _(f.CANCELED,"User canceled the upload/download.")}function k(){return new _(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function E(e){return new _(f.INVALID_ARGUMENT,e)}function y(){return new _(f.APP_DELETED,"The Firebase app was deleted.")}function O(e){return new _(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function U(e,t){return new _(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function x(e){throw new _(f.INTERNAL_ERROR,"Internal error: "+e)}!function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(f||(f={}));class A{constructor(e,path){this.bucket=e,this.path_=path}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=A.makeFromUrl(e,t)}catch(t){return new A(e,"")}if(""===n.path)return n;throw r=e,new _(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+r+"(/(.*))?$","i");function c(e){e.path_=decodeURIComponent(e.path)}const l=t.replace(/[.]/g,"\\."),d=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${l}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:c},{regex:new RegExp(`^https?://${t===h?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:c}];for(let i=0;i<d.length;i++){const t=d[i],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let o=r[t.indices.path];o||(o=""),n=new A(e,o),t.postModify(n);break}}if(null==n)throw function(e){return new _(f.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class C{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function N(p){return"string"==typeof p||p instanceof String}function I(p){return S()&&p instanceof Blob}function S(){return"undefined"!=typeof Blob&&!Object(c.G)()}function P(e,t,n,r){if(r<t)throw E(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw E(`Invalid value for '${e}'. Expected ${n} or less.`)}function D(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function L(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}function B(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),o=-1!==t.indexOf(e);return n||r||o}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(m||(m={}));class M{constructor(e,t,n,r,o,c,l,h,d,_,f,m=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=c,this.callback_=l,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=_,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new F(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===m.NO_ERROR,o=n.getStatus();if(!t||B(o,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===m.ABORT;return void e(!1,new F(!1,null,t))}const c=-1!==this.successCodes_.indexOf(o);e(!0,new F(c,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==o){const e=R();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){r(this.appDelete_?y():v())}else{r(w())}};this.canceled_?t(0,new F(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,o=null,c=null,l=!1,h=0;function d(){return 2===h}let _=!1;function f(...e){_||(_=!0,t.apply(null,e))}function m(t){o=setTimeout((()=>{o=null,e(R,d())}),t)}function T(){c&&clearTimeout(c)}function R(e,...t){if(_)return void T();if(e)return T(),void f.call(null,e,...t);if(d()||l)return T(),void f.call(null,e,...t);let n;r<64&&(r*=2),1===h?(h=2,n=0):n=1e3*(r+Math.random()),m(n)}let w=!1;function v(e){w||(w=!0,T(),_||(null!==o?(e||(h=2),clearTimeout(o),m(0)):e||(h=1)))}return m(0),c=setTimeout((()=>{l=!0,v(!0)}),n),v}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class F{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function j(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function H(...e){const t=j();if(void 0!==t){const n=new t;for(let i=0;i<e.length;i++)n.append(e[i]);return n.getBlob()}if(S())return new Blob(e);throw new _(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function z(e){if("undefined"==typeof atob)throw t="base-64",new _(f.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}const V={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class G{constructor(data,e){this.data=data,this.contentType=e||null}}function $(e,t){switch(e){case V.RAW:return new G(W(t));case V.BASE64:case V.BASE64URL:return new G(X(e,t));case V.DATA_URL:return new G(function(e){const t=new K(e);return t.base64?X(V.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw U(V.DATA_URL,"Malformed data URL.")}return W(t)}(t.rest)}(t),new K(t).contentType)}throw R()}function W(e){const b=[];for(let i=0;i<e.length;i++){let t=e.charCodeAt(i);if(t<=127)b.push(t);else if(t<=2047)b.push(192|t>>6,128|63&t);else if(55296==(64512&t)){if(i<e.length-1&&56320==(64512&e.charCodeAt(i+1))){t=65536|(1023&t)<<10|1023&e.charCodeAt(++i),b.push(240|t>>18,128|t>>12&63,128|t>>6&63,128|63&t)}else b.push(239,191,189)}else 56320==(64512&t)?b.push(239,191,189):b.push(224|t>>12,128|t>>6&63,128|63&t)}return new Uint8Array(b)}function X(e,t){switch(e){case V.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw U(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case V.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw U(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=z(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw U(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class K{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw U(V.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(s,e){if(!(s.length>=e.length))return!1;return s.substring(s.length-e.length)===e}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class Z{constructor(data,e){let t=0,n="";I(data)?(this.data_=data,t=data.size,n=data.type):data instanceof ArrayBuffer?(e?this.data_=new Uint8Array(data):(this.data_=new Uint8Array(data.byteLength),this.data_.set(new Uint8Array(data))),t=this.data_.length):data instanceof Uint8Array&&(e?this.data_=data:(this.data_=new Uint8Array(data.length),this.data_.set(data)),t=data.length),this.size_=t,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(I(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new Z(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Z(n,!0)}}static getBlob(...e){if(S()){const t=e.map((e=>e instanceof Z?e.data_:e));return new Z(H.apply(null,t))}{const t=e.map((e=>N(e)?$(V.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let o=0;return t.forEach((e=>{for(let i=0;i<e.length;i++)r[o++]=e[i]})),new Z(r,!0)}}uploadData(){return this.data_}}function J(s){let e;try{e=JSON.parse(s)}catch(e){return null}return"object"!=typeof(p=e)||Array.isArray(p)?null:e;var p}function Y(path){const e=path.lastIndexOf("/",path.length-2);return-1===e?path:path.slice(e+1)}function Q(e,t){return t}class ee{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Q}}let te=null;function ne(){if(te)return te;const e=[];e.push(new ee("bucket")),e.push(new ee("generation")),e.push(new ee("metageneration")),e.push(new ee("name","fullPath",!0));const t=new ee("name");t.xform=function(e,t){return function(e){return!N(e)||e.length<2?e:Y(e)}(t)},e.push(t);const n=new ee("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new ee("timeCreated")),e.push(new ee("updated")),e.push(new ee("md5Hash",null,!0)),e.push(new ee("cacheControl",null,!0)),e.push(new ee("contentDisposition",null,!0)),e.push(new ee("contentEncoding",null,!0)),e.push(new ee("contentLanguage",null,!0)),e.push(new ee("contentType",null,!0)),e.push(new ee("metadata","customMetadata",!0)),te=e,te}function se(e,t,n){const r={type:"file"},o=n.length;for(let i=0;i<o;i++){const e=n[i];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,path=e.fullPath,r=new A(n,path);return t._makeStorageReference(r)}})}(r,e),r}function re(e,t,n){const r=J(t);if(null===r)return null;return se(e,r,n)}function ie(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}const oe="prefixes",ae="items";function ce(e,t,n){const r=J(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[oe])for(const path of n[oe]){const n=path.replace(/\/$/,""),o=e._makeStorageReference(new A(t,n));r.prefixes.push(o)}if(n[ae])for(const o of n[ae]){const n=e._makeStorageReference(new A(t,o.name));r.items.push(n)}return r}(e,t,r)}class le{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function ue(e){if(!e)throw R()}function he(e,t){return function(n,text){const r=re(e,text,t);return ue(null!==r),r}}function de(e,t){return function(n,text){const r=re(e,text,t);return ue(null!==r),function(e,t,n,r){const o=J(t);if(null===o)return null;if(!N(o.downloadTokens))return null;const c=o.downloadTokens;if(0===c.length)return null;const l=encodeURIComponent;return c.split(",").map((t=>{const o=e.bucket,path=e.fullPath;return D("/b/"+l(o)+"/o/"+l(path),n,r)+L({alt:"media",token:t})}))[0]}(r,text,e.host,e._protocol)}}function _e(e){return function(t,n){let r;var path,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new _(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new _(f.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new _(f.QUOTA_EXCEEDED,"Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(path=e.path,r=new _(f.UNAUTHORIZED,"User does not have permission to access '"+path+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function pe(e){const t=_e(e);return function(n,r){let o=t(n,r);var path;return 404===n.getStatus()&&(path=e.path,o=new _(f.OBJECT_NOT_FOUND,"Object '"+path+"' does not exist.")),o.serverResponse=r.serverResponse,o}}function fe(e,t,n){const r=D(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,c=new le(r,"GET",he(e,n),o);return c.errorHandler=pe(t),c}function ge(e,t,n,r,o){const c={};t.isRoot?c.prefix="":c.prefix=t.path+"/",n&&n.length>0&&(c.delimiter=n),r&&(c.pageToken=r),o&&(c.maxResults=o);const l=D(t.bucketOnlyServerUrl(),e.host,e._protocol),h=e.maxOperationRetryTime,d=new le(l,"GET",function(e,t){return function(n,text){const r=ce(e,t,text);return ue(null!==r),r}}(e,t.bucket),h);return d.urlParams=c,d.errorHandler=_e(t),d}function me(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function be(e,t,n,r,o){const c=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};const h=function(){let e="";for(let i=0;i<2;i++)e+=Math.random().toString().slice(2);return e}();l["Content-Type"]="multipart/related; boundary="+h;const d=me(t,r,o),_="--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+ie(d,n)+"\r\n--"+h+"\r\nContent-Type: "+d.contentType+"\r\n\r\n",f="\r\n--"+h+"--",body=Z.getBlob(_,r,f);if(null===body)throw k();const m={name:d.fullPath},T=D(c,e.host,e._protocol),R=e.maxUploadRetryTime,w=new le(T,"POST",he(e,n),R);return w.urlParams=m,w.headers=l,w.body=body.uploadData(),w.errorHandler=_e(t),w}class Te{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Re(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){ue(!1)}return ue(!!n&&-1!==(t||["active"]).indexOf(n)),n}const we=262144;function ve(e,t,n,r,o,c,l,h){const d=new Te(0,0);if(l?(d.current=l.current,d.total=l.total):(d.current=0,d.total=r.size()),r.size()!==d.total)throw new _(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");const m=d.total-d.current;let T=m;o>0&&(T=Math.min(T,o));const R=d.current,w=R+T;let v="";v=0===T?"finalize":m===T?"upload, finalize":"upload";const E={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${d.current}`},body=r.slice(R,w);if(null===body)throw k();const y=t.maxUploadRetryTime,O=new le(n,"POST",(function(e,text){const n=Re(e,["active","final"]),o=d.current+T,l=r.size();let h;return h="final"===n?he(t,c)(e,text):null,new Te(o,l,"final"===n,h)}),y);return O.headers=E,O.body=body.uploadData(),O.progressCallback=h||null,O.errorHandler=_e(e),O}const ke={STATE_CHANGED:"state_changed"},Ee={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ye(e){switch(e){case"running":case"pausing":case"canceling":return Ee.RUNNING;case"paused":return Ee.PAUSED;case"success":return Ee.SUCCESS;case"canceled":return Ee.CANCELED;default:return Ee.ERROR}}class Oe{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}function Ue(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}let xe=null;class Ae{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=m.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=m.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=m.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,body,n){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(const e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==body?this.xhr_.send(body):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(header){return this.xhr_.getResponseHeader(header)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Ce extends Ae{initXhr(){this.xhr_.responseType="text"}}function Ne(){return xe?xe():new Ce}class Ie{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=ne(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(f.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(B(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=w()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(f.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,o){const c=t.bucketOnlyServerUrl(),l=me(t,r,o),h={name:l.fullPath},d=D(c,e.host,e._protocol),_={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":l.contentType,"Content-Type":"application/json; charset=utf-8"},body=ie(l,n),f=e.maxUploadRetryTime,m=new le(d,"POST",(function(e){let t;Re(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){ue(!1)}return ue(N(t)),t}),f);return m.urlParams=h,m.headers=_,m.body=body,m.errorHandler=_e(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Ne,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const o=e.maxUploadRetryTime,c=new le(n,"POST",(function(e){const t=Re(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){ue(!1)}n||ue(!1);const o=Number(n);return ue(!isNaN(o)),new Te(o,r.size(),"final"===t)}),o);return c.headers={"X-Goog-Upload-Command":"query"},c.errorHandler=_e(t),c}(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(r,Ne,t,n);this._request=o,o.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=we*this._chunkMultiplier,t=new Te(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,o)=>{let c;try{c=ve(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const l=this._ref.storage._makeRequest(c,Ne,r,o,!1);this._request=l,l.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){2*(we*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=fe(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,Ne,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=be(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Ne,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=v(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=ye(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const o=new Oe(t||void 0,n||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const i=this._observers.indexOf(e);-1!==i&&this._observers.splice(i,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(ye(this._state)){case Ee.SUCCESS:Ue(this._resolve.bind(null,this.snapshot))();break;case Ee.CANCELED:case Ee.ERROR:Ue(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ye(this._state)){case Ee.RUNNING:case Ee.PAUSED:e.next&&Ue(e.next.bind(e,this.snapshot))();break;case Ee.SUCCESS:e.complete&&Ue(e.complete.bind(e))();break;default:e.error&&Ue(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}class Se{constructor(e,t){this._service=e,this._location=t instanceof A?t:A.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Se(e,t)}get root(){const e=new A(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y(this._location.path)}get storage(){return this._service}get parent(){const e=function(path){if(0===path.length)return null;const e=path.lastIndexOf("/");return-1===e?"":path.slice(0,e)}(this._location.path);if(null===e)return null;const t=new A(this._location.bucket,e);return new Se(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw O(e)}}function Pe(e){const t={prefixes:[],items:[]};return De(e,t).then((()=>t))}async function De(e,t,n){const r={pageToken:n},o=await Le(e,r);t.prefixes.push(...o.prefixes),t.items.push(...o.items),null!=o.nextPageToken&&await De(e,t,o.nextPageToken)}function Le(e,t){null!=t&&"number"==typeof t.maxResults&&P("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=ge(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,Ne)}function Be(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,r){const o=D(t.fullServerUrl(),e.host,e._protocol),body=ie(n,r),c=e.maxOperationRetryTime,l=new le(o,"PATCH",he(e,r),c);return l.headers={"Content-Type":"application/json; charset=utf-8"},l.body=body,l.errorHandler=pe(t),l}(e.storage,e._location,t,ne());return e.storage.makeRequestWithTokens(n,Ne)}function Me(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=D(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,c=new le(r,"GET",de(e,n),o);return c.errorHandler=pe(t),c}(e.storage,e._location,ne());return e.storage.makeRequestWithTokens(t,Ne).then((e=>{if(null===e)throw new _(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function Fe(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=D(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,o=new le(n,"DELETE",(function(e,t){}),r);return o.successCodes=[200,204],o.errorHandler=pe(t),o}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Ne)}function qe(e,t){const n=function(path,e){const t=e.split("/").filter((component=>component.length>0)).join("/");return 0===path.length?t:path+"/"+t}(e._location.path,t),r=new A(e._location.bucket,n);return new Se(e.storage,r)}function je(e,path){if(e instanceof Ve){const t=e;if(null==t._bucket)throw new _(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+d+"' property when initializing the app?");const n=new Se(t,t._bucket);return null!=path?je(n,path):n}return void 0!==path?qe(e,path):e}function He(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Ve)return new Se(e,t);throw E("To use ref(service, url), the first argument must be a Storage instance.")}return je(e,t)}function ze(e,t){const n=null==t?void 0:t[d];return null==n?null:A.makeFromBucketSpec(n,e)}class Ve{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=h,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?A.makeFromBucketSpec(r,this._host):ze(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=A.makeFromBucketSpec(this._url,e):this._bucket=ze(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(time){P("time",0,Number.POSITIVE_INFINITY,time),this._maxUploadRetryTime=time}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(time){P("time",0,Number.POSITIVE_INFINITY,time),this._maxOperationRetryTime=time}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Se(this,e)}_makeRequest(e,t,n,r,o=!0){if(this._deleted)return new C(y());{const c=function(e,t,n,r,o,c,l=!0){const h=L(e.urlParams),d=e.url+h,_=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(_,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(_,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(_,c),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(_,r),new M(d,e.method,_,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,l)}(e,this._appId,n,r,t,this._firebaseVersion,o);return this._requests.add(c),c.getPromise().then((()=>this._requests.delete(c)),(()=>this._requests.delete(c))),c}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Ge="@firebase/storage",$e="0.11.2",We="storage";function Xe(e,data,t){return function(e,data,t){return e._throwIfRoot("uploadBytesResumable"),new Ie(e,new Z(data),t)}(e=Object(c.x)(e),data,t)}function Ke(e){return function(e){e._throwIfRoot("getMetadata");const t=fe(e.storage,e._location,ne());return e.storage.makeRequestWithTokens(t,Ne)}(e=Object(c.x)(e))}function Ze(e,t){return He(e=Object(c.x)(e),t)}function Je(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken="string"==typeof o?o:Object(c.m)(o,e.app.options.projectId))}(e,t,n,r)}function Ye(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return new Ve(n,r,c,t,o.SDK_VERSION)}Object(o._registerComponent)(new l.a(We,Ye,"PUBLIC").setMultipleInstances(!0)),Object(o.registerVersion)(Ge,$e,""),Object(o.registerVersion)(Ge,$e,"esm2017");class Qe{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}class et{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Qe(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then((t=>{if(e)return e(new Qe(t,this,this._ref))}),t)}on(e,t,n,r){let o;return t&&(o="function"==typeof t?e=>t(new Qe(e,this,this._ref)):{next:t.next?e=>t.next(new Qe(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,o,n||void 0,r||void 0)}}class tt{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map((e=>new nt(e,this._service)))}get items(){return this._delegate.items.map((e=>new nt(e,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}class nt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=function(e,t){return qe(e,t)}(this._delegate,e);return new nt(t,this.storage)}get root(){return new nt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new nt(e,this.storage)}put(data,e){return this._throwIfRoot("put"),new et(Xe(this._delegate,data,e),this)}putString(e,t=V.RAW,n){this._throwIfRoot("putString");const data=$(t,e),r=Object.assign({},n);return null==r.contentType&&null!=data.contentType&&(r.contentType=data.contentType),new et(new Ie(this._delegate,new Z(data.data,!0),r),this)}listAll(){return(e=this._delegate,Pe(e=Object(c.x)(e))).then((e=>new tt(e,this.storage)));var e}list(e){return function(e,t){return Le(e=Object(c.x)(e),t)}(this._delegate,e||void 0).then((e=>new tt(e,this.storage)))}getMetadata(){return Ke(this._delegate)}updateMetadata(e){return function(e,t){return Be(e=Object(c.x)(e),t)}(this._delegate,e)}getDownloadURL(){return e=this._delegate,Me(e=Object(c.x)(e));var e}delete(){return this._throwIfRoot("delete"),e=this._delegate,Fe(e=Object(c.x)(e));var e}_throwIfRoot(e){if(""===this._delegate._location.path)throw O(e)}}class st{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(path){if(it(path))throw E("ref() expected a child path but got a URL, use refFromURL instead.");return new nt(Ze(this._delegate,path),this)}refFromURL(e){if(!it(e))throw E("refFromURL() expected a full URL but got a child path, use ref() instead.");try{A.makeFromUrl(e,this._delegate.host)}catch(e){throw E("refFromUrl() expected a valid full URL but got an invalid one.")}return new nt(Ze(this._delegate,e),this)}setMaxUploadRetryTime(time){this._delegate.maxUploadRetryTime=time}setMaxOperationRetryTime(time){this._delegate.maxOperationRetryTime=time}useEmulator(e,t,n={}){Je(this._delegate,e,t,n)}}function it(path){return/^[A-Za-z]+:\/\//.test(path)}function ot(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t});return new st(n,r)}!function(e){const t={TaskState:Ee,TaskEvent:ke,StringFormat:V,Storage:st,Reference:nt};e.INTERNAL.registerComponent(new l.a("storage-compat",ot,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion("@firebase/storage-compat","0.3.2")}(r.a)}}]);