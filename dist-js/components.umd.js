(function(b,v){typeof exports=="object"&&typeof module<"u"?v(exports):typeof define=="function"&&define.amd?define(["exports"],v):(b=typeof globalThis<"u"?globalThis:b||self,v(b.Components={}))})(this,function(b){"use strict";var jn=Object.defineProperty;var Fn=(b,v,y)=>v in b?jn(b,v,{enumerable:!0,configurable:!0,writable:!0,value:y}):b[v]=y;var L=(b,v,y)=>(Fn(b,typeof v!="symbol"?v+"":v,y),y),Fr=(b,v,y)=>{if(!v.has(b))throw TypeError("Cannot "+y)};var S=(b,v,y)=>(Fr(b,v,"read from private field"),y?y.call(b):v.get(b)),Te=(b,v,y)=>{if(v.has(b))throw TypeError("Cannot add the same private member more than once");v instanceof WeakSet?v.add(b):v.set(b,y)},Le=(b,v,y,et)=>(Fr(b,v,"write to private field"),et?et.call(b,y):v.set(b,y),y);var U,O,Hr;const v="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(v);const y=2,et="[",qr="]",Kt={},rt=Symbol(),Pe=["touchstart","touchmove","touchend"];function Wr(e){console.warn("hydration_mismatch")}let ht=!1;function Ot(e){ht=e}let Zt=null,Tt;function Yr(e){Zt=e,Tt=e&&e[0]}function Me(e){if(e.nodeType!==8)return e;var t=e;if(t.data!==et)return e;for(var r=[],o=0;(t=t.nextSibling)!==null;){if(t.nodeType===8){var n=t.data;if(n===et)o+=1;else if(n[0]===qr){if(o===0)return Zt=r,Tt=r[0],t;o-=1}}r.push(t)}throw Wr(),Kt}var ot=Array.isArray,Kr=Array.from,Lt=Object.keys,Zr=Object.isFrozen,F=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Jr=Object.getOwnPropertyDescriptors,Gr=Object.prototype,Xr=Array.prototype,Qr=Object.getPrototypeOf;const ft=2,Re=4,Jt=8,to=16,B=32,Gt=64,q=128,Pt=256,P=512,N=1024,W=2048,ze=4096,nt=8192,eo=16384,E=Symbol("$state"),ro=Symbol("$state.frozen");function oo(e){return e===this.v}function no(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function so(e){return!no(e,this.v)}function io(){throw new Error("effect_in_unowned_derived")}function lo(){throw new Error("effect_update_depth_exceeded")}function ao(){throw new Error("hydration_failed")}function uo(){throw new Error("state_unsafe_mutation")}function st(e){return{f:0,reactions:null,equals:oo,v:e,version:0}}function Ue(e){var r;const t=st(e);return t.equals=so,x!==null&&x.l!==null&&((r=x.l).s??(r.s=[])).push(t),t}function V(e,t){var r=e.v!==rt;return!M&&r&&k!==null&&te()&&k.f&ft&&uo(),e.equals(t)||(e.v=t,e.version++,te()&&r&&_!==null&&_.f&P&&!(_.f&B)&&(w!==null&&w.includes(e)?(T(_,N),Ut(_)):I===null?go([e]):I.push(e)),ne(e,N,!0)),t}function pt(e,t=!0,r=null,o){if(typeof e=="object"&&e!=null){let n=e;if((Zr(n)||ro in n)&&(n=co(n)),E in n){const i=n[E];if(i.t===n||i.p===n)return i.p}const s=Qr(n);if(s===Gr||s===Xr){const i=new Proxy(n,ho);return F(n,E,{value:{s:new Map,v:st(0),a:ot(n),i:t,p:i,t:n},writable:!0,enumerable:!1}),i}}return e}function Xt(e,t){if(typeof e=="object"&&e!=null&&E in e){const r=t.get(e);if(r!==void 0)return r;if(ot(e)){const o=[];t.set(e,o);for(const n of e)o.push(Xt(n,t));return o}else{const o={},n=Reflect.ownKeys(e),s=Jr(e);t.set(e,o);for(const i of n)if(i!==E)if(s[i].get)F(o,i,s[i]);else{const a=e[i];o[i]=Xt(a,t)}return o}}return e}function co(e){return Xt(e,new Map)}function Be(e,t=1){V(e,e.v+t)}const ho={defineProperty(e,t,r){if(r.value){const o=e[E],n=o.s.get(t);n!==void 0&&V(n,pt(r.value,o.i,o))}return Reflect.defineProperty(e,t,r)},deleteProperty(e,t){const r=e[E],o=r.s.get(t),n=r.a,s=delete e[t];if(n&&s){const i=r.s.get("length"),a=e.length-1;i!==void 0&&i.v!==a&&V(i,a)}return o!==void 0&&V(o,rt),s&&Be(r.v),s},get(e,t,r){var s;if(t===E)return Reflect.get(e,E);const o=e[E];let n=o.s.get(t);if(n===void 0&&(!(t in e)||(s=Ne(e,t))!=null&&s.writable)&&(n=(o.i?st:Ue)(pt(e[t],o.i,o)),o.s.set(t,n)),n!==void 0){const i=K(n);return i===rt?void 0:i}return Reflect.get(e,t,r)},getOwnPropertyDescriptor(e,t){const r=Reflect.getOwnPropertyDescriptor(e,t);if(r&&"value"in r){const n=e[E].s.get(t);n&&(r.value=K(n))}return r},has(e,t){var s;if(t===E)return!0;const r=e[E],o=Reflect.has(e,t);let n=r.s.get(t);return(n!==void 0||_!==null&&(!o||(s=Ne(e,t))!=null&&s.writable))&&(n===void 0&&(n=(r.i?st:Ue)(o?pt(e[t],r.i,r):rt),r.s.set(t,n)),K(n)===rt)?!1:o},set(e,t,r,o){const n=e[E];let s=n.s.get(t);s===void 0&&(yo(()=>o[t]),s=n.s.get(t)),s!==void 0&&V(s,pt(r,n.i,n));const i=n.a,a=!(t in e);if(i&&t==="length")for(let l=r;l<e.length;l+=1){const u=n.s.get(l+"");u!==void 0&&V(u,rt)}if(e[t]=r,a){if(i){const l=n.s.get("length"),u=e.length;l!==void 0&&l.v!==u&&V(l,u)}Be(n.v)}return!0},ownKeys(e){const t=e[E];return K(t.v),Reflect.ownKeys(e)}};function fo(e){for(var t=0;t<e.length;t++)e[t]()}let Mt=!1,Qt=[];function Ve(){Mt=!1;const e=Qt.slice();Qt=[],fo(e)}function po(e){Mt||(Mt=!0,queueMicrotask(Ve)),Qt.push(e)}function bo(){Mt&&Ve()}function Ie(e){ee(e);var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)vo(t[r])}}function De(e,t){Ie(e);var r=qe(e),o=(at||e.f&q)&&e.deps!==null?W:P;T(e,o);var n=e.equals(r);return n||(e.v=r,ne(e,N,t)),n}function vo(e){Ie(e),zt(e,0),T(e,nt),e.first=e.last=e.deps=e.reactions=e.fn=null}const He=0,mo=1;let Nt=He,bt=!1,it=!1;function je(e){it=e}function Fe(e){M=e}let Y=[],lt=0,k=null,_=null,w=null,A=0,I=null;function go(e){I=e}let M=!1,at=!1,x=null;function te(){return x!==null&&x.l===null}function Rt(e){var m;var t=e.f,r=(t&N)!==0,o=(t&q)!==0;if(r&&!o)return!0;var n=(t&Pt)!==0;if(t&W||r&&o){var s=e.deps;if(s!==null)for(var i=s.length,a,l,u=0;u<i;u++){var d=s[u];!r&&Rt(d)&&(a=De(d,!0));var c=d.version;if(o){if(c>e.version)return e.version=c,!a;!at&&!((m=d==null?void 0:d.reactions)!=null&&m.includes(e))&&(l=d.reactions,l===null?d.reactions=[e]:l.push(e))}else{if(e.f&N)return!0;n&&(c>e.version&&(e.version=c,r=!0),l=d.reactions,l===null?d.reactions=[e]:l.includes(e)||l.push(e))}}o||T(e,P),n&&(e.f^=Pt)}return r}function _o(e,t,r){throw e}function qe(e){const t=w,r=A,o=I,n=k,s=at,i=M;w=null,A=0,I=null,k=e,at=!it&&(e.f&q)!==0,M=!1;try{let a=(0,e.fn)(),l=e.deps;if(w!==null){let u;if(l!==null){const d=l.length,c=A===0?w:l.slice(0,A).concat(w),g=c.length>16&&d-A>1?new Set(c):null;for(u=A;u<d;u++){const C=l[u];(g!==null?!g.has(C):!c.includes(C))&&We(e,C)}}if(l!==null&&A>0)for(l.length=A+w.length,u=0;u<w.length;u++)l[A+u]=w[u];else e.deps=l=w;if(!at)for(u=A;u<l.length;u++){const d=l[u],c=d.reactions;c===null?d.reactions=[e]:c[c.length-1]!==e&&c.push(e)}}else l!==null&&A<l.length&&(zt(e,A),l.length=A);return a}finally{w=t,A=r,I=o,k=n,at=s,M=i}}function We(e,t){const r=t.reactions;let o=0;if(r!==null){o=r.length-1;const n=r.indexOf(e);n!==-1&&(o===0?t.reactions=null:(r[n]=r[o],r.pop()))}o===0&&t.f&ft&&(T(t,W),t.f&(q|Pt)||(t.f^=Pt),zt(t,0))}function zt(e,t){const r=e.deps;if(r!==null){const o=t===0?null:r.slice(0,t);let n;for(n=t;n<r.length;n++){const s=r[n];(o===null||!o.includes(s))&&We(e,s)}}}function ee(e,t=!0){let r=e.first;e.first=null,e.last=null;for(var o;r!==null;)o=r.next,ie(r,t),r=o}function re(e){var t=e.f;if(!(t&nt)){T(e,P);var r=e.ctx,o=_,n=x;_=e,x=r;try{t&to||ee(e),Xe(e);var s=qe(e);e.teardown=typeof s=="function"?s:null}catch(i){_o(i)}finally{_=o,x=n}}}function Ye(){lt>1e3&&(lt=0,lo()),lt++}function Ke(e){const t=e.length;if(t!==0){Ye();var r=it;it=!0;try{for(var o=0;o<t;o++){var n=e[o];if(n.first===null&&!(n.f&B))Ze([n]);else{var s=[];Je(n,s),Ze(s)}}}finally{it=r}}}function Ze(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var o=e[r];!(o.f&(nt|ze))&&Rt(o)&&re(o)}}function $o(){if(bt=!1,lt>1001)return;const e=Y;Y=[],Ke(e),bt||(lt=0)}function Ut(e){Nt===He&&(bt||(bt=!0,queueMicrotask($o)));for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&B){if(!(r&P))return;T(t,W)}}Y.push(t)}function Je(e,t){var r=e.first,o=[];t:for(;r!==null;){var n=r.f,s=(n&(nt|ze))===0,i=n&B,a=(n&P)!==0,l=r.first;if(s&&(!i||!a)){if(i&&T(r,P),n&Jt){if(!i&&Rt(r)&&(re(r),l=r.first),l!==null){r=l;continue}}else if(n&Re)if(i||a){if(l!==null){r=l;continue}}else o.push(r)}var u=r.next;if(u===null){let m=r.parent;for(;m!==null;){if(e===m)break t;var d=m.next;if(d!==null){r=d;continue t}m=m.parent}}r=u}for(var c=0;c<o.length;c++)l=o[c],t.push(l),Je(l,t)}function oe(e,t=!0){var r=Nt,o=Y;try{Ye();const s=[];Nt=mo,Y=s,bt=!1,t&&Ke(o);var n=e==null?void 0:e();return bo(),(Y.length>0||s.length>0)&&oe(),lt=0,n}finally{Nt=r,Y=o}}function K(e){const t=e.f;if(t&nt)return e.v;if(k!==null&&!(k.f&(B|Gt))&&!M){const r=(k.f&q)!==0,o=k.deps;w===null&&o!==null&&o[A]===e&&!(r&&_!==null)?A++:(o===null||A===0||o[A-1]!==e)&&(w===null?w=[e]:w[w.length-1]!==e&&w.push(e)),I!==null&&_!==null&&_.f&P&&!(_.f&B)&&I.includes(e)&&(T(_,N),Ut(_))}return t&ft&&Rt(e)&&De(e,!1),e.v}function ne(e,t,r){var o=e.reactions;if(o!==null)for(var n=te(),s=o.length,i=0;i<s;i++){var a=o[i],l=a.f;if(!(l&N||(!r||!n)&&a===_)){T(a,t);var u=(l&W)!==0,d=(l&q)!==0;(l&P||u&&d)&&(a.f&ft?ne(a,W,r):Ut(a))}}}function yo(e){const t=M;try{return M=!0,e()}finally{M=t}}const wo=~(N|W|P);function T(e,t){e.f=e.f&wo|t}function Ao(e,t=!1,r){x={p:x,c:null,e:null,m:!1,s:e,x:null,l:null},t||(x.l={s:null,u:null,r1:[],r2:st(!1)})}function Eo(e){const t=x;if(t!==null){const o=t.e;if(o!==null){t.e=null;for(var r=0;r<o.length;r++)ko(o[r])}x=t.p,t.m=!0}return{}}function xo(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Co(e){if(ot(e))for(var t=0;t<e.length;t++){var r=e[t];r.isConnected&&r.remove()}else e.isConnected&&e.remove()}function Ge(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Bt(e,t,r){var o=(e&Gt)!==0,n={ctx:x,deps:null,dom:null,f:e|N,first:null,fn:t,last:null,next:null,parent:o?null:_,prev:null,teardown:null,transitions:null};if(k!==null&&!o){var s=k.f;s&ft&&(s&q&&io(),_!==null&&Ge(n,_)),Ge(n,k)}if(r){var i=it;try{je(!0),re(n),n.f|=eo}finally{je(i)}}else Ut(n);return n}function So(e){const t=Bt(Gt,e,!0);return()=>{ie(t)}}function ko(e){return Bt(Re,e,!1)}function se(e){return Bt(Jt,e,!0)}function Oo(e){return se(e)}function To(e){return Bt(Jt|B,e,!0)}function Xe(e){var t=e.teardown;if(t!==null){const r=M;Fe(!0);try{t.call(null)}finally{Fe(r)}}}function ie(e,t=!0){var r=e.dom;if(r!==null&&t&&Co(r),ee(e,t),zt(e,0),T(e,nt),e.transitions)for(const i of e.transitions)i.stop();Xe(e);var o=e.parent;if(o!==null&&e.f&B&&o.first!==null){var n=e.prev,s=e.next;n!==null?s!==null?(n.next=s,s.prev=n):(n.next=null,o.last=n):s!==null?(s.prev=null,o.first=s):(o.first=null,o.last=null)}e.next=e.prev=e.teardown=e.ctx=e.dom=e.deps=e.parent=e.fn=null}var Qe;function tr(){if(Qe===void 0){Qe=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__nodeValue=" "}}function er(){return document.createTextNode("")}function Lo(e){const t=e.firstChild;return ht?t===null?e.appendChild(er()):Me(t):t}function Po(e){e.textContent=""}function Mo(e,t,r,o){function n(s){if(o.capture||le(t,s),!s.cancelBubble)return r.call(this,s)}return e.startsWith("pointer")||e==="wheel"?po(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function No(e,t,r,o,n){var s={capture:o,passive:n},i=Mo(e,t,r,s);(t===document.body||t===window||t===document)&&se(()=>()=>{t.removeEventListener(e,i,s)})}function Ro(e){for(var t=0;t<e.length;t++)rr.add(e[t]);for(var r of ae)r(e)}function le(e,t){var jr;var r=e.ownerDocument,o=t.type,n=((jr=t.composedPath)==null?void 0:jr.call(t))||[],s=n[0]||t.target;t.target!==s&&F(t,"target",{configurable:!0,value:s});var i=0,a=t.__root;if(a){var l=n.indexOf(a);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var u=n.indexOf(e);if(u===-1)return;l<=u&&(i=l+1)}s=n[i]||t.target,F(t,"currentTarget",{configurable:!0,get(){return s||r}});try{for(var d,c=[];s!==null;){var m=s.parentNode||s.host||null;try{var g=s["__"+o];if(g!==void 0&&!s.disabled)if(ot(g)){var[C,...j]=g;C.apply(s,[t,...j])}else g.call(s,t)}catch(Yt){d?c.push(Yt):d=Yt}if(t.cancelBubble||m===e||m===null||s===e)break;s=m}if(d){for(let Yt of c)queueMicrotask(()=>{throw Yt});throw d}}finally{t.__root=e,s=e}}const rr=new Set,ae=new Set;function zo(e,t){const r=e.__nodeValue,o=ue(t);ht&&e.nodeValue===o?e.__nodeValue=o:r!==o&&(e.nodeValue=o,e.__nodeValue=o)}function ue(e){return typeof e=="string"?e:e==null?"":e+""}function or(e,t){const r=t.anchor??t.target.appendChild(er());return oe(()=>nr(e,{...t,anchor:r}),!1)}function Uo(e,t){const r=t.target,o=Zt;try{return oe(()=>{Ot(!0);for(var n=r.firstChild;n&&(n.nodeType!==8||n.data!==et);)n=n.nextSibling;if(!n)throw Kt;const s=Me(n),i=nr(e,{...t,anchor:s});return Ot(!1),i},!1)}catch(n){if(n===Kt)return t.recover===!1&&ao(),tr(),Po(r),Ot(!1),or(e,t);throw n}finally{Ot(!!o),Yr(o)}}function nr(e,{target:t,anchor:r,props:o={},events:n,context:s,intro:i=!1}){tr();const a=new Set,l=le.bind(null,t),u=le.bind(null,document),d=g=>{for(let C=0;C<g.length;C++){const j=g[C];a.has(j)||(a.add(j),t.addEventListener(j,l,Pe.includes(j)?{passive:!0}:void 0),document.addEventListener(j,u,Pe.includes(j)?{passive:!0}:void 0))}};d(Kr(rr)),ae.add(d);let c;const m=So(()=>(To(()=>{if(s){Ao({});var g=x;g.c=s}n&&(o.$$events=n),c=e(r,o)||{},s&&Eo()}),()=>{for(const g of a)t.removeEventListener(g,l);ae.delete(d),ce.delete(c)}));return ce.set(c,m),c}let ce=new WeakMap;function Bo(e){const t=ce.get(e);t==null||t()}function sr(e,t=_){var r=t.dom;return r===null?t.dom=e:(ot(r)||(r=t.dom=[r]),ot(e)?r.push(...e):r.push(e)),e}function Vo(e,t){var r=(t&y)!==0,o;return()=>{if(ht)return sr(Tt),Tt;o||(o=xo(e),o=o.firstChild);var n=r?document.importNode(o,!0):o.cloneNode(!0);return sr(n),n}}function ir(e,t){ht||e.before(t)}function Io(e){return new Do(e)}class Do{constructor(t){Te(this,U,void 0);Te(this,O,void 0);const r=pt({...t.props||{},$$events:{}},!1);Le(this,O,(t.hydrate?Uo:or)(t.component,{target:t.target,props:r,context:t.context,intro:t.intro,recover:t.recover})),Le(this,U,r.$$events);for(const o of Object.keys(S(this,O)))o==="$set"||o==="$destroy"||o==="$on"||F(this,o,{get(){return S(this,O)[o]},set(n){S(this,O)[o]=n},enumerable:!0});S(this,O).$set=o=>{Object.assign(r,o)},S(this,O).$destroy=()=>{Bo(S(this,O))}}$set(t){S(this,O).$set(t)}$on(t,r){S(this,U)[t]=S(this,U)[t]||[];const o=(...n)=>r.call(this,...n);return S(this,U)[t].push(o),()=>{S(this,U)[t]=S(this,U)[t].filter(n=>n!==o)}}$destroy(){S(this,O).$destroy()}}U=new WeakMap,O=new WeakMap;let lr;typeof HTMLElement=="function"&&(lr=class extends HTMLElement{constructor(t,r,o){super();L(this,"$$ctor");L(this,"$$s");L(this,"$$c");L(this,"$$cn",!1);L(this,"$$d",{});L(this,"$$r",!1);L(this,"$$p_d",{});L(this,"$$l",{});L(this,"$$l_u",new Map);L(this,"$$me");this.$$ctor=t,this.$$s=r,o&&this.attachShadow({mode:"open"})}addEventListener(t,r,o){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(r),this.$$c){const n=this.$$c.$on(t,r);this.$$l_u.set(r,n)}super.addEventListener(t,r,o)}removeEventListener(t,r,o){if(super.removeEventListener(t,r,o),this.$$c){const n=this.$$l_u.get(r);n&&(n(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(n){return s=>{const i=document.createElement("slot");n!=="default"&&(i.name=n),ir(s,i)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const r={},o=Ho(this);for(const n of this.$$s)n in o&&(n==="default"&&!this.$$d.children?(this.$$d.children=t(n),r.default=!0):r[n]=t(n));for(const n of this.attributes){const s=this.$$g_p(n.name);s in this.$$d||(this.$$d[s]=Vt(s,n.value,this.$$p_d,"toProp"))}for(const n in this.$$p_d)!(n in this.$$d)&&this[n]!==void 0&&(this.$$d[n]=this[n],delete this[n]);this.$$c=Io({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:r,$$host:this}}),this.$$me=se(()=>{var n;this.$$r=!0;for(const s of Lt(this.$$c)){if(!((n=this.$$p_d[s])!=null&&n.reflect))continue;this.$$d[s]=this.$$c[s];const i=Vt(s,this.$$d[s],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,i)}this.$$r=!1});for(const n in this.$$l)for(const s of this.$$l[n]){const i=this.$$c.$on(n,s);this.$$l_u.set(s,i)}this.$$l={}}}attributeChangedCallback(t,r,o){var n;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Vt(t,o,this.$$p_d,"toProp"),(n=this.$$c)==null||n.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),ie(this.$$me),this.$$c=void 0)})}$$g_p(t){return Lt(this.$$p_d).find(r=>this.$$p_d[r].attribute===t||!this.$$p_d[r].attribute&&r.toLowerCase()===t)||t}});function Vt(e,t,r,o){var s;const n=(s=r[e])==null?void 0:s.type;if(t=n==="Boolean"&&typeof t!="boolean"?t!=null:t,!o||!r[e])return t;if(o==="toAttribute")switch(n){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(n){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Ho(e){const t={};return e.childNodes.forEach(r=>{t[r.slot||"default"]=!0}),t}function jo(e,t,r,o,n,s){let i=class extends lr{constructor(){super(e,r,n),this.$$p_d=t}static get observedAttributes(){return Lt(t).map(a=>(t[a].attribute||a).toLowerCase())}};return Lt(t).forEach(a=>{F(i.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){var u;l=Vt(a,l,t),this.$$d[a]=l,(u=this.$$c)==null||u.$set({[a]:l})}})}),o.forEach(a=>{F(i.prototype,a,{get(){var l;return(l=this.$$c)==null?void 0:l[a]}})}),e.element=i,i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=globalThis,de=It.ShadowRoot&&(It.ShadyCSS===void 0||It.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),ar=new WeakMap;let ur=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(de&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=ar.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ar.set(r,t))}return t}toString(){return this.cssText}};const Fo=e=>new ur(typeof e=="string"?e:e+"",void 0,he),Dt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,n,s)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new ur(r,e,he)},qo=(e,t)=>{if(de)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),n=It.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)}},cr=de?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Fo(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Wo,defineProperty:Yo,getOwnPropertyDescriptor:Ko,getOwnPropertyNames:Zo,getOwnPropertySymbols:Jo,getPrototypeOf:Go}=Object,D=globalThis,dr=D.trustedTypes,Xo=dr?dr.emptyScript:"",fe=D.reactiveElementPolyfillSupport,vt=(e,t)=>e,Ht={toAttribute(e,t){switch(t){case Boolean:e=e?Xo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},pe=(e,t)=>!Wo(e,t),hr={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:pe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),D.litPropertyMetadata??(D.litPropertyMetadata=new WeakMap);class ut extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=hr){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(t,o,r);n!==void 0&&Yo(this.prototype,t,n)}}static getPropertyDescriptor(t,r,o){const{get:n,set:s}=Ko(this.prototype,t)??{get(){return this[r]},set(i){this[r]=i}};return{get(){return n==null?void 0:n.call(this)},set(i){const a=n==null?void 0:n.call(this);s.call(this,i),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??hr}static _$Ei(){if(this.hasOwnProperty(vt("elementProperties")))return;const t=Go(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(vt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vt("properties"))){const r=this.properties,o=[...Zo(r),...Jo(r)];for(const n of o)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,n]of r)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const n=this._$Eu(r,o);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)r.unshift(cr(n))}else t!==void 0&&r.push(cr(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qo(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostConnected)==null?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EC(t,r){var s;const o=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,o);if(n!==void 0&&o.reflect===!0){const i=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:Ht).toAttribute(r,o.type);this._$Em=t,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,r){var s;const o=this.constructor,n=o._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const i=o.getPropertyOptions(n),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((s=i.converter)==null?void 0:s.fromAttribute)!==void 0?i.converter:Ht;this._$Em=n,this[n]=a.fromAttribute(r,i.type),this._$Em=null}}requestUpdate(t,r,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??pe)(this[t],r))return;this.P(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,o){this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,i]of n)i.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],i)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(o=this._$EO)==null||o.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdated)==null?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}ut.elementStyles=[],ut.shadowRootOptions={mode:"open"},ut[vt("elementProperties")]=new Map,ut[vt("finalized")]=new Map,fe==null||fe({ReactiveElement:ut}),(D.reactiveElementVersions??(D.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=globalThis,jt=mt.trustedTypes,fr=jt?jt.createPolicy("lit-html",{createHTML:e=>e}):void 0,pr="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,br="?"+H,Qo=`<${br}>`,Z=document,gt=()=>Z.createComment(""),_t=e=>e===null||typeof e!="object"&&typeof e!="function",vr=Array.isArray,tn=e=>vr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",be=`[ 	
\f\r]`,$t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mr=/-->/g,gr=/>/g,J=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_r=/'/g,$r=/"/g,yr=/^(?:script|style|textarea|title)$/i,en=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ve=en(1),G=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),wr=new WeakMap,X=Z.createTreeWalker(Z,129);function Ar(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return fr!==void 0?fr.createHTML(t):t}const rn=(e,t)=>{const r=e.length-1,o=[];let n,s=t===2?"<svg>":"",i=$t;for(let a=0;a<r;a++){const l=e[a];let u,d,c=-1,m=0;for(;m<l.length&&(i.lastIndex=m,d=i.exec(l),d!==null);)m=i.lastIndex,i===$t?d[1]==="!--"?i=mr:d[1]!==void 0?i=gr:d[2]!==void 0?(yr.test(d[2])&&(n=RegExp("</"+d[2],"g")),i=J):d[3]!==void 0&&(i=J):i===J?d[0]===">"?(i=n??$t,c=-1):d[1]===void 0?c=-2:(c=i.lastIndex-d[2].length,u=d[1],i=d[3]===void 0?J:d[3]==='"'?$r:_r):i===$r||i===_r?i=J:i===mr||i===gr?i=$t:(i=J,n=void 0);const g=i===J&&e[a+1].startsWith("/>")?" ":"";s+=i===$t?l+Qo:c>=0?(o.push(u),l.slice(0,c)+pr+l.slice(c)+H+g):l+H+(c===-2?a:g)}return[Ar(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),o]};class yt{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let s=0,i=0;const a=t.length-1,l=this.parts,[u,d]=rn(t,r);if(this.el=yt.createElement(u,o),X.currentNode=this.el.content,r===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=X.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(pr)){const m=d[i++],g=n.getAttribute(c).split(H),C=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:C[2],strings:g,ctor:C[1]==="."?nn:C[1]==="?"?sn:C[1]==="@"?ln:Ft}),n.removeAttribute(c)}else c.startsWith(H)&&(l.push({type:6,index:s}),n.removeAttribute(c));if(yr.test(n.tagName)){const c=n.textContent.split(H),m=c.length-1;if(m>0){n.textContent=jt?jt.emptyScript:"";for(let g=0;g<m;g++)n.append(c[g],gt()),X.nextNode(),l.push({type:2,index:++s});n.append(c[m],gt())}}}else if(n.nodeType===8)if(n.data===br)l.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(H,c+1))!==-1;)l.push({type:7,index:s}),c+=H.length-1}s++}}static createElement(t,r){const o=Z.createElement("template");return o.innerHTML=t,o}}function ct(e,t,r=e,o){var i,a;if(t===G)return t;let n=o!==void 0?(i=r._$Co)==null?void 0:i[o]:r._$Cl;const s=_t(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),s===void 0?n=void 0:(n=new s(e),n._$AT(e,r,o)),o!==void 0?(r._$Co??(r._$Co=[]))[o]=n:r._$Cl=n),n!==void 0&&(t=ct(e,n._$AS(e,t.values),n,o)),t}class on{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,n=((t==null?void 0:t.creationScope)??Z).importNode(r,!0);X.currentNode=n;let s=X.nextNode(),i=0,a=0,l=o[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new wt(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new an(s,this,t)),this._$AV.push(u),l=o[++a]}i!==(l==null?void 0:l.index)&&(s=X.nextNode(),i++)}return X.currentNode=Z,n}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class wt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,o,n){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ct(this,t,r),_t(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==G&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):tn(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==$&&_t(this._$AH)?this._$AA.nextSibling.data=t:this.T(Z.createTextNode(t)),this._$AH=t}$(t){var s;const{values:r,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=yt.createElement(Ar(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(r);else{const i=new on(n,this),a=i.u(this.options);i.p(r),this.T(a),this._$AH=i}}_$AC(t){let r=wr.get(t.strings);return r===void 0&&wr.set(t.strings,r=new yt(t)),r}k(t){vr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const s of t)n===r.length?r.push(o=new wt(this.S(gt()),this.S(gt()),this,this.options)):o=r[n],o._$AI(s),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Ft{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,n,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=$}_$AI(t,r=this,o,n){const s=this.strings;let i=!1;if(s===void 0)t=ct(this,t,r,0),i=!_t(t)||t!==this._$AH&&t!==G,i&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=ct(this,a[o+l],r,l),u===G&&(u=this._$AH[l]),i||(i=!_t(u)||u!==this._$AH[l]),u===$?t=$:t!==$&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}i&&!n&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class nn extends Ft{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class sn extends Ft{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class ln extends Ft{constructor(t,r,o,n,s){super(t,r,o,n,s),this.type=5}_$AI(t,r=this){if((t=ct(this,t,r,0)??$)===G)return;const o=this._$AH,n=t===$&&o!==$||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==$&&(o===$||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class an{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ct(this,t)}}const me=mt.litHtmlPolyfillSupport;me==null||me(yt,wt),(mt.litHtmlVersions??(mt.litHtmlVersions=[])).push("3.1.3");const un=(e,t,r)=>{const o=(r==null?void 0:r.renderBefore)??t;let n=o._$litPart$;if(n===void 0){const s=(r==null?void 0:r.renderBefore)??null;o._$litPart$=n=new wt(t.insertBefore(gt(),s),s,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let At=class extends ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=un(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return G}};At._$litElement$=!0,At.finalized=!0,(Hr=globalThis.litElementHydrateSupport)==null||Hr.call(globalThis,{LitElement:At});const ge=globalThis.litElementPolyfillSupport;ge==null||ge({LitElement:At}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");var cn=Dt`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const _e=new Set,dn=new MutationObserver(Sr),dt=new Map;let Er=document.documentElement.dir||"ltr",xr=document.documentElement.lang||navigator.language,Q;dn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Cr(...e){e.map(t=>{const r=t.$code.toLowerCase();dt.has(r)?dt.set(r,Object.assign(Object.assign({},dt.get(r)),t)):dt.set(r,t),Q||(Q=t)}),Sr()}function Sr(){Er=document.documentElement.dir||"ltr",xr=document.documentElement.lang||navigator.language,[..._e.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let hn=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){_e.add(this.host)}hostDisconnected(){_e.delete(this.host)}dir(){return`${this.host.dir||Er}`.toLowerCase()}lang(){return`${this.host.lang||xr}`.toLowerCase()}getTranslationData(t){var r,o;const n=new Intl.Locale(t.replace(/_/g,"-")),s=n==null?void 0:n.language.toLowerCase(),i=(o=(r=n==null?void 0:n.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",a=dt.get(`${s}-${i}`),l=dt.get(s);return{locale:n,language:s,region:i,primary:a,secondary:l}}exists(t,r){var o;const{primary:n,secondary:s}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(n&&n[t]||s&&s[t]||r.includeFallback&&Q&&Q[t])}term(t,...r){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(n&&n[t])s=n[t];else if(Q&&Q[t])s=Q[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...r):s}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,r)}};var kr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Cr(kr);var fn=kr,Or=class extends hn{};Cr(fn);var $e=Dt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Tr=Object.defineProperty,pn=Object.defineProperties,bn=Object.getOwnPropertyDescriptor,vn=Object.getOwnPropertyDescriptors,Lr=Object.getOwnPropertySymbols,mn=Object.prototype.hasOwnProperty,gn=Object.prototype.propertyIsEnumerable,Pr=(e,t,r)=>t in e?Tr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Et=(e,t)=>{for(var r in t||(t={}))mn.call(t,r)&&Pr(e,r,t[r]);if(Lr)for(var r of Lr(t))gn.call(t,r)&&Pr(e,r,t[r]);return e},Mr=(e,t)=>pn(e,vn(t)),h=(e,t,r,o)=>{for(var n=o>1?void 0:o?bn(t,r):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&Tr(t,r,n),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _n={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:pe},$n=(e=_n,t,r)=>{const{kind:o,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(r.name,e),o==="accessor"){const{name:i}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,l,e)},init(a){return a!==void 0&&this.P(i,void 0,e),a}}}if(o==="setter"){const{name:i}=r;return function(a){const l=this[i];t.call(this,a),this.requestUpdate(i,l,e)}}throw Error("Unsupported decorator location: "+o)};function f(e){return(t,r)=>typeof r=="object"?$n(e,t,r):((o,n,s)=>{const i=n.hasOwnProperty(s);return n.constructor.createProperty(s,i?{...o,wrapped:!0}:o),i?Object.getOwnPropertyDescriptor(n,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye(e){return f({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yn=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wn(e,t){return(r,o,n)=>{const s=i=>{var a;return((a=i.renderRoot)==null?void 0:a.querySelector(e))??null};return yn(r,o,{get(){return s(this)}})}}var tt=class extends At{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,Et({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){customElements.define(e,class extends t{},r);return}let n=" (unknown version)",s=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in o&&o.version&&(s=" v"+o.version),!(n&&s&&n===s)&&console.warn(`Attempted to register <${e}>${n}, but <${e}>${s} has already been registered.`)}};tt.version="2.15.1",tt.dependencies={},h([f()],tt.prototype,"dir",2),h([f()],tt.prototype,"lang",2);var Nr=class extends tt{constructor(){super(...arguments),this.localize=new Or(this)}render(){return ve`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Nr.styles=[$e,cn];var xt=new WeakMap,Ct=new WeakMap,St=new WeakMap,we=new WeakSet,qt=new WeakMap,An=class{constructor(e,t){this.handleFormData=r=>{const o=this.options.disabled(this.host),n=this.options.name(this.host),s=this.options.value(this.host),i=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!i&&typeof n=="string"&&n.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(a=>{r.formData.append(n,a.toString())}):r.formData.append(n,s.toString()))},this.handleFormSubmit=r=>{var o;const n=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=xt.get(this.form))==null||o.forEach(i=>{this.setUserInteracted(i,!0)})),this.form&&!this.form.noValidate&&!n&&!s(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),qt.set(this.host,[])},this.handleInteraction=r=>{const o=qt.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Et({form:r=>{const o=r.form;if(o){const s=r.getRootNode().querySelector(`#${o}`);if(s)return s}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),qt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),qt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,xt.has(this.form)?xt.get(this.form).add(this.host):xt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ct.has(this.form)||(Ct.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),St.has(this.form)||(St.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=xt.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ct.has(this.form)&&(this.form.reportValidity=Ct.get(this.form),Ct.delete(this.form)),St.has(this.form)&&(this.form.checkValidity=St.get(this.form),St.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?we.add(e):we.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!we.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Ae=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Mr(Et({},Ae),{valid:!1,valueMissing:!0})),Object.freeze(Mr(Et({},Ae),{valid:!1,customError:!0}));var En=Dt`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,xn=Dt`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ee="";function Rr(e){Ee=e}function Cn(e=""){if(!Ee){const t=[...document.getElementsByTagName("script")],r=t.find(o=>o.hasAttribute("data-shoelace"));if(r)Rr(r.getAttribute("data-shoelace"));else{const o=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let n="";o&&(n=o.getAttribute("src")),Rr(n.split("/").slice(0,-1).join("/"))}}return Ee.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Sn={name:"default",resolver:e=>Cn(`assets/icons/${e}.svg`)},kn=Sn,zr={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},On={name:"system",resolver:e=>e in zr?`data:image/svg+xml,${encodeURIComponent(zr[e])}`:""},Tn=On,Ln=[kn,Tn],xe=[];function Pn(e){xe.push(e)}function Mn(e){xe=xe.filter(t=>t!==e)}function Ur(e){return Ln.find(t=>t.name===e)}function Ce(e,t){const r=Et({waitUntilFirstUpdate:!1},t);return(o,n)=>{const{update:s}=o,i=Array.isArray(e)?e:[e];o.update=function(a){i.forEach(l=>{const u=l;if(a.has(u)){const d=a.get(u),c=this[u];d!==c&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](d,c)}}),s.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn=(e,t)=>(e==null?void 0:e._$litType$)!==void 0;var kt=Symbol(),Wt=Symbol(),Se,ke=new Map,R=class extends tt{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(t!=null&&t.spriteSheet){this.svg=ve`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(n),this.svg}try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?kt:Wt}catch{return Wt}try{const n=document.createElement("div");n.innerHTML=await o.text();const s=n.firstElementChild;if(((r=s==null?void 0:s.tagName)==null?void 0:r.toLowerCase())!=="svg")return kt;Se||(Se=new DOMParser);const a=Se.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):kt}catch{return kt}}connectedCallback(){super.connectedCallback(),Pn(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Mn(this)}getIconSource(){const e=Ur(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?Ur(this.library):void 0;if(!t){this.svg=null;return}let n=ke.get(t);if(n||(n=this.resolveIcon(t,o),ke.set(t,n)),!this.initialRender)return;const s=await n;if(s===Wt&&ke.delete(t),t===this.getIconSource().url){if(Nn(s)){this.svg=s;return}switch(s){case Wt:case kt:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=o==null?void 0:o.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};R.styles=[$e,xn],h([ye()],R.prototype,"svg",2),h([f({reflect:!0})],R.prototype,"name",2),h([f()],R.prototype,"src",2),h([f()],R.prototype,"label",2),h([f({reflect:!0})],R.prototype,"library",2),h([Ce("label")],R.prototype,"handleLabelChange",1),h([Ce(["name","src","library"])],R.prototype,"setIcon",1);var Rn=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Un=e=>(...t)=>({_$litDirective$:e,values:t});class Bn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vn=Un(class extends Bn{constructor(e){var t;if(super(e),e.type!==zn.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,n;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(t)}const r=e.element.classList;for(const s of this.st)s in t||(r.remove(s),this.st.delete(s));for(const s in t){const i=!!t[s];i===this.st.has(s)||(n=this.nt)!=null&&n.has(s)||(i?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return G}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Br=Symbol.for(""),In=e=>{if((e==null?void 0:e.r)===Br)return e==null?void 0:e._$litStatic$},Vr=(e,...t)=>({_$litStatic$:t.reduce((r,o,n)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[n+1],e[0]),r:Br}),Ir=new Map,Dn=e=>(t,...r)=>{const o=r.length;let n,s;const i=[],a=[];let l,u=0,d=!1;for(;u<o;){for(l=t[u];u<o&&(s=r[u],(n=In(s))!==void 0);)l+=n+t[++u],d=!0;u!==o&&a.push(s),i.push(l),u++}if(u===o&&i.push(t[o]),d){const c=i.join("$$lit$$");(t=Ir.get(c))===void 0&&(i.raw=i,Ir.set(c,t=i)),r=a}return e(t,...r)},Oe=Dn(ve);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=e=>e??$;var p=class extends tt{constructor(){super(...arguments),this.formControlController=new An(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Rn(this,"[default]","prefix","suffix"),this.localize=new Or(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ae}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Vr`a`:Vr`button`;return Oe`
      <${t}
        part="base"
        class=${Vn({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${z(e?void 0:this.disabled)}
        type=${z(e?void 0:this.type)}
        title=${this.title}
        name=${z(e?void 0:this.name)}
        value=${z(e?void 0:this.value)}
        href=${z(e?this.href:void 0)}
        target=${z(e?this.target:void 0)}
        download=${z(e?this.download:void 0)}
        rel=${z(e?this.rel:void 0)}
        role=${z(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Oe` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Oe`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};p.styles=[$e,En],p.dependencies={"sl-icon":R,"sl-spinner":Nr},h([wn(".button")],p.prototype,"button",2),h([ye()],p.prototype,"hasFocus",2),h([ye()],p.prototype,"invalid",2),h([f()],p.prototype,"title",2),h([f({reflect:!0})],p.prototype,"variant",2),h([f({reflect:!0})],p.prototype,"size",2),h([f({type:Boolean,reflect:!0})],p.prototype,"caret",2),h([f({type:Boolean,reflect:!0})],p.prototype,"disabled",2),h([f({type:Boolean,reflect:!0})],p.prototype,"loading",2),h([f({type:Boolean,reflect:!0})],p.prototype,"outline",2),h([f({type:Boolean,reflect:!0})],p.prototype,"pill",2),h([f({type:Boolean,reflect:!0})],p.prototype,"circle",2),h([f()],p.prototype,"type",2),h([f()],p.prototype,"name",2),h([f()],p.prototype,"value",2),h([f()],p.prototype,"href",2),h([f()],p.prototype,"target",2),h([f()],p.prototype,"rel",2),h([f()],p.prototype,"download",2),h([f()],p.prototype,"form",2),h([f({attribute:"formaction"})],p.prototype,"formAction",2),h([f({attribute:"formenctype"})],p.prototype,"formEnctype",2),h([f({attribute:"formmethod"})],p.prototype,"formMethod",2),h([f({attribute:"formnovalidate",type:Boolean})],p.prototype,"formNoValidate",2),h([f({attribute:"formtarget"})],p.prototype,"formTarget",2),h([Ce("disabled",{waitUntilFirstUpdate:!0})],p.prototype,"handleDisabledChange",1),p.define("sl-button");var Hn=Vo('<sl-button variant="primary" role="button" tabindex="0"> </sl-button>',2);function Dr(e){let t=st(0);function r(){V(t,K(t)+1)}var o=Hn();o.__click=r;var n=Lo(o);Oo(()=>zo(n,`Clicked ${ue(K(t))} ${ue(K(t)===1?"time":"times")}`)),No("keypress",o,r,!1),ir(e,o)}Ro(["click"]),customElements.define("my-counter",jo(Dr,{},[],[],!0)),b.Counter=Dr,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
