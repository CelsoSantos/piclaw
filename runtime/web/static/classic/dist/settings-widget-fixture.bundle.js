var Nu=Object.defineProperty;var Xu=(n)=>n;function Qu(n,i){this[n]=Xu.bind(null,i)}var fn=(n,i)=>{for(var _ in i)Nu(n,_,{get:i[_],enumerable:!0,configurable:!0,set:Qu.bind(i,_)})};var O=(n,i)=>()=>(n&&(i=n(n=0)),i);var eu={};fn(eu,{useState:()=>w,useRef:()=>J,useReducer:()=>Qr,useMemo:()=>C,useLayoutEffect:()=>Ti,useImperativeHandle:()=>tu,useErrorBoundary:()=>Ou,useEffect:()=>q,useDebugValue:()=>Ju,useContext:()=>Cu,useCallback:()=>G,render:()=>Ln,html:()=>s,h:()=>$_,createContext:()=>Lu,Component:()=>ui});function Kn(n,i){for(var _ in i)n[_]=i[_];return n}function s_(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function $_(n,i,_){var r,c,u,f={};for(u in i)u=="key"?r=i[u]:u=="ref"?c=i[u]:f[u]=i[u];if(arguments.length>2&&(f.children=arguments.length>3?Ui.call(arguments,2):_),typeof n=="function"&&n.defaultProps!=null)for(u in n.defaultProps)f[u]===void 0&&(f[u]=n.defaultProps[u]);return zi(n,f,r,c,null)}function zi(n,i,_,r,c){var u={type:n,props:i,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c==null?++Hr:c,__i:-1,__u:0};return c==null&&S.vnode!=null&&S.vnode(u),u}function Pi(n){return n.children}function ui(n,i){this.props=n,this.context=i}function In(n,i){if(i==null)return n.__?In(n.__,n.__i+1):null;for(var _;i<n.__k.length;i++)if((_=n.__k[i])!=null&&_.__e!=null)return _.__e;return typeof n.type=="function"?In(n):null}function Au(n){if(n.__P&&n.__d){var i=n.__v,_=i.__e,r=[],c=[],u=Kn({},i);u.__v=i.__v+1,S.vnode&&S.vnode(u),g_(n.__P,u,i,n.__n,n.__P.namespaceURI,32&i.__u?[_]:null,r,_==null?In(i):_,!!(32&i.__u),c),u.__v=i.__v,u.__.__k[u.__i]=u,Rr(r,u,c),i.__e=i.__=null,u.__e!=_&&Gr(u)}}function Gr(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(i){if(i!=null&&i.__e!=null)return n.__e=n.__c.base=i.__e}),Gr(n)}function r_(n){(!n.__d&&(n.__d=!0)&&jn.push(n)&&!ji.__r++||lr!=S.debounceRendering)&&((lr=S.debounceRendering)||Fr)(ji)}function ji(){try{for(var n,i=1;jn.length;)jn.length>i&&jn.sort(Wr),n=jn.shift(),i=jn.length,Au(n)}finally{jn.length=ji.__r=0}}function Pr(n,i,_,r,c,u,f,$,o,g,x){var l,v,K,B,k,F,y,p=r&&r.__k||Wi,V=i.length;for(o=Zu(_,i,p,o,V),l=0;l<V;l++)(K=_.__k[l])!=null&&(v=K.__i!=-1&&p[K.__i]||Fi,K.__i=l,F=g_(n,K,v,c,u,f,$,o,g,x),B=K.__e,K.ref&&v.ref!=K.ref&&(v.ref&&o_(v.ref,null,K),x.push(K.ref,K.__c||B,K)),k==null&&B!=null&&(k=B),(y=!!(4&K.__u))||v.__k===K.__k?(o=Tr(K,o,n,y),y&&v.__e&&(v.__e=null)):typeof K.type=="function"&&F!==void 0?o=F:B&&(o=B.nextSibling),K.__u&=-7);return _.__e=k,o}function Zu(n,i,_,r,c){var u,f,$,o,g,x=_.length,l=x,v=0;for(n.__k=Array(c),u=0;u<c;u++)(f=i[u])!=null&&typeof f!="boolean"&&typeof f!="function"?(typeof f=="string"||typeof f=="number"||typeof f=="bigint"||f.constructor==String?f=n.__k[u]=zi(null,f,null,null,null):Gi(f)?f=n.__k[u]=zi(Pi,{children:f},null,null,null):f.constructor===void 0&&f.__b>0?f=n.__k[u]=zi(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):n.__k[u]=f,o=u+v,f.__=n,f.__b=n.__b+1,$=null,(g=f.__i=Du(f,_,o,l))!=-1&&(l--,($=_[g])&&($.__u|=2)),$==null||$.__v==null?(g==-1&&(c>x?v--:c<x&&v++),typeof f.type!="function"&&(f.__u|=4)):g!=o&&(g==o-1?v--:g==o+1?v++:(g>o?v--:v++,f.__u|=4))):n.__k[u]=null;if(l)for(u=0;u<x;u++)($=_[u])!=null&&(2&$.__u)==0&&($.__e==r&&(r=In($)),Nr($,$));return r}function Tr(n,i,_,r){var c,u;if(typeof n.type=="function"){for(c=n.__k,u=0;c&&u<c.length;u++)c[u]&&(c[u].__=n,i=Tr(c[u],i,_,r));return i}n.__e!=i&&(r&&(i&&n.type&&!i.parentNode&&(i=In(n)),_.insertBefore(n.__e,i||null)),i=n.__e);do i=i&&i.nextSibling;while(i!=null&&i.nodeType==8);return i}function Du(n,i,_,r){var c,u,f,$=n.key,o=n.type,g=i[_],x=g!=null&&(2&g.__u)==0;if(g===null&&$==null||x&&$==g.key&&o==g.type)return _;if(r>(x?1:0)){for(c=_-1,u=_+1;c>=0||u<i.length;)if((g=i[f=c>=0?c--:u++])!=null&&(2&g.__u)==0&&$==g.key&&o==g.type)return f}return-1}function wr(n,i,_){i[0]=="-"?n.setProperty(i,_==null?"":_):n[i]=_==null?"":typeof _!="number"||qu.test(i)?_:_+"px"}function hi(n,i,_,r,c){var u,f;n:if(i=="style")if(typeof _=="string")n.style.cssText=_;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(i in r)_&&i in _||wr(n.style,i,"");if(_)for(i in _)r&&_[i]==r[i]||wr(n.style,i,_[i])}else if(i[0]=="o"&&i[1]=="n")u=i!=(i=i.replace(jr,"$1")),f=i.toLowerCase(),i=f in n||i=="onFocusOut"||i=="onFocusIn"?f.slice(2):i.slice(2),n.l||(n.l={}),n.l[i+u]=_,_?r?_[ci]=r[ci]:(_[ci]=f_,n.addEventListener(i,u?__:i_,u)):n.removeEventListener(i,u?__:i_,u);else{if(c=="http://www.w3.org/2000/svg")i=i.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(i!="width"&&i!="height"&&i!="href"&&i!="list"&&i!="form"&&i!="tabIndex"&&i!="download"&&i!="rowSpan"&&i!="colSpan"&&i!="role"&&i!="popover"&&i in n)try{n[i]=_==null?"":_;break n}catch($){}typeof _=="function"||(_==null||_===!1&&i[4]!="-"?n.removeAttribute(i):n.setAttribute(i,i=="popover"&&_==1?"":_))}}function yr(n){return function(i){if(this.l){var _=this.l[i.type+n];if(i[Bi]==null)i[Bi]=f_++;else if(i[Bi]<_[ci])return;return _(S.event?S.event(i):i)}}}function g_(n,i,_,r,c,u,f,$,o,g){var x,l,v,K,B,k,F,y,p,V,P,j,T,H,R,h=i.type;if(i.constructor!==void 0)return null;128&_.__u&&(o=!!(32&_.__u),u=[$=i.__e=_.__e]),(x=S.__b)&&x(i);n:if(typeof h=="function")try{if(y=i.props,p=h.prototype&&h.prototype.render,V=(x=h.contextType)&&r[x.__c],P=x?V?V.props.value:x.__:r,_.__c?F=(l=i.__c=_.__c).__=l.__E:(p?i.__c=l=new h(y,P):(i.__c=l=new ui(y,P),l.constructor=h,l.render=Yu),V&&V.sub(l),l.state||(l.state={}),l.__n=r,v=l.__d=!0,l.__h=[],l._sb=[]),p&&l.__s==null&&(l.__s=l.state),p&&h.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Kn({},l.__s)),Kn(l.__s,h.getDerivedStateFromProps(y,l.__s))),K=l.props,B=l.state,l.__v=i,v)p&&h.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),p&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(p&&h.getDerivedStateFromProps==null&&y!==K&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(y,P),i.__v==_.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(y,l.__s,P)===!1){i.__v!=_.__v&&(l.props=y,l.state=l.__s,l.__d=!1),i.__e=_.__e,i.__k=_.__k,i.__k.some(function(b){b&&(b.__=i)}),Wi.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&f.push(l);break n}l.componentWillUpdate!=null&&l.componentWillUpdate(y,l.__s,P),p&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(K,B,k)})}if(l.context=P,l.props=y,l.__P=n,l.__e=!1,j=S.__r,T=0,p)l.state=l.__s,l.__d=!1,j&&j(i),x=l.render(l.props,l.state,l.context),Wi.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,j&&j(i),x=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++T<25);l.state=l.__s,l.getChildContext!=null&&(r=Kn(Kn({},r),l.getChildContext())),p&&!v&&l.getSnapshotBeforeUpdate!=null&&(k=l.getSnapshotBeforeUpdate(K,B)),H=x!=null&&x.type===Pi&&x.key==null?Vr(x.props.children):x,$=Pr(n,Gi(H)?H:[H],i,_,r,c,u,f,$,o,g),l.base=i.__e,i.__u&=-161,l.__h.length&&f.push(l),F&&(l.__E=l.__=null)}catch(b){if(i.__v=null,o||u!=null)if(b.then){for(i.__u|=o?160:128;$&&$.nodeType==8&&$.nextSibling;)$=$.nextSibling;u[u.indexOf($)]=null,i.__e=$}else{for(R=u.length;R--;)s_(u[R]);c_(i)}else i.__e=_.__e,i.__k=_.__k,b.then||c_(i);S.__e(b,i,_)}else u==null&&i.__v==_.__v?(i.__k=_.__k,i.__e=_.__e):$=i.__e=Iu(_.__e,i,_,r,c,u,f,o,g);return(x=S.diffed)&&x(i),128&i.__u?void 0:$}function c_(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(c_))}function Rr(n,i,_){for(var r=0;r<_.length;r++)o_(_[r],_[++r],_[++r]);S.__c&&S.__c(i,n),n.some(function(c){try{n=c.__h,c.__h=[],n.some(function(u){u.call(c)})}catch(u){S.__e(u,c.__v)}})}function Vr(n){return typeof n!="object"||n==null||n.__b>0?n:Gi(n)?n.map(Vr):n.constructor!==void 0?null:Kn({},n)}function Iu(n,i,_,r,c,u,f,$,o){var g,x,l,v,K,B,k,F=_.props||Fi,y=i.props,p=i.type;if(p=="svg"?c="http://www.w3.org/2000/svg":p=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),u!=null){for(g=0;g<u.length;g++)if((K=u[g])&&"setAttribute"in K==!!p&&(p?K.localName==p:K.nodeType==3)){n=K,u[g]=null;break}}if(n==null){if(p==null)return document.createTextNode(y);n=document.createElementNS(c,p,y.is&&y),$&&(S.__m&&S.__m(i,u),$=!1),u=null}if(p==null)F===y||$&&n.data==y||(n.data=y);else{if(u=p=="textarea"&&y.defaultValue!=null?null:u&&Ui.call(n.childNodes),!$&&u!=null)for(F={},g=0;g<n.attributes.length;g++)F[(K=n.attributes[g]).name]=K.value;for(g in F)K=F[g],g=="dangerouslySetInnerHTML"?l=K:g=="children"||(g in y)||g=="value"&&("defaultValue"in y)||g=="checked"&&("defaultChecked"in y)||hi(n,g,null,K,c);for(g in y)K=y[g],g=="children"?v=K:g=="dangerouslySetInnerHTML"?x=K:g=="value"?B=K:g=="checked"?k=K:$&&typeof K!="function"||F[g]===K||hi(n,g,K,F[g],c);if(x)$||l&&(x.__html==l.__html||x.__html==n.innerHTML)||(n.innerHTML=x.__html),i.__k=[];else if(l&&(n.innerHTML=""),Pr(i.type=="template"?n.content:n,Gi(v)?v:[v],i,_,r,p=="foreignObject"?"http://www.w3.org/1999/xhtml":c,u,f,u?u[0]:_.__k&&In(_,0),$,o),u!=null)for(g=u.length;g--;)s_(u[g]);$&&p!="textarea"||(g="value",p=="progress"&&B==null?n.removeAttribute("value"):B!=null&&(B!==n[g]||p=="progress"&&!B||p=="option"&&B!=F[g])&&hi(n,g,B,F[g],c),g="checked",k!=null&&k!=n[g]&&hi(n,g,k,F[g],c))}return n}function o_(n,i,_){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&i==null||(n.__u=n(i))}else n.current=i}catch(c){S.__e(c,_)}}function Nr(n,i,_){var r,c;if(S.unmount&&S.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||o_(r,null,i)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(u){S.__e(u,i)}r.base=r.__P=null}if(r=n.__k)for(c=0;c<r.length;c++)r[c]&&Nr(r[c],i,_||typeof n.type!="function");_||s_(n.__e),n.__c=n.__=n.__e=void 0}function Yu(n,i,_){return this.constructor(n,_)}function Ln(n,i,_){var r,c,u,f;i==document&&(i=document.documentElement),S.__&&S.__(n,i),c=(r=typeof _=="function")?null:_&&_.__k||i.__k,u=[],f=[],g_(i,n=(!r&&_||i).__k=$_(Pi,null,[n]),c||Fi,Fi,i.namespaceURI,!r&&_?[_]:c?null:i.firstChild?Ui.call(i.childNodes):null,u,!r&&_?_:c?c.__e:i.firstChild,r,f),Rr(u,n,f)}function Lu(n){function i(_){var r,c;return this.getChildContext||(r=new Set,(c={})[i.__c]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(u){this.props.value!=u.value&&r.forEach(function(f){f.__e=!0,r_(f)})},this.sub=function(u){r.add(u);var f=u.componentWillUnmount;u.componentWillUnmount=function(){r&&r.delete(u),f&&f.call(u)}}),_.children}return i.__c="__cC"+Ur++,i.__=n,i.Provider=i.__l=(i.Consumer=function(_,r){return _.children(r)}).contextType=i,i}function tn(n,i){a.__h&&a.__h(d,n,Yn||i),Yn=0;var _=d.__H||(d.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({}),_.__[n]}function w(n){return Yn=1,Qr(Mr,n)}function Qr(n,i,_){var r=tn(Un++,2);if(r.t=n,!r.__c&&(r.__=[_?_(i):Mr(void 0,i),function($){var o=r.__N?r.__N[0]:r.__[0],g=r.t(o,$);o!==g&&(r.__N=[g,r.__[1]],r.__c.setState({}))}],r.__c=d,!d.__f)){var c=function($,o,g){if(!r.__c.__H)return!0;var x=r.__c.__H.__.filter(function(v){return v.__c});if(x.every(function(v){return!v.__N}))return!u||u.call(this,$,o,g);var l=r.__c.props!==$;return x.some(function(v){if(v.__N){var K=v.__[0];v.__=v.__N,v.__N=void 0,K!==v.__[0]&&(l=!0)}}),u&&u.call(this,$,o,g)||l};d.__f=!0;var{shouldComponentUpdate:u,componentWillUpdate:f}=d;d.componentWillUpdate=function($,o,g){if(this.__e){var x=u;u=void 0,c($,o,g),u=x}f&&f.call(this,$,o,g)},d.shouldComponentUpdate=c}return r.__N||r.__}function q(n,i){var _=tn(Un++,3);!a.__s&&l_(_.__H,i)&&(_.__=n,_.u=i,d.__H.__h.push(_))}function Ti(n,i){var _=tn(Un++,4);!a.__s&&l_(_.__H,i)&&(_.__=n,_.u=i,d.__h.push(_))}function J(n){return Yn=5,C(function(){return{current:n}},[])}function tu(n,i,_){Yn=6,Ti(function(){if(typeof n=="function"){var r=n(i());return function(){n(null),r&&typeof r=="function"&&r()}}if(n)return n.current=i(),function(){return n.current=null}},_==null?_:_.concat(n))}function C(n,i){var _=tn(Un++,7);return l_(_.__H,i)&&(_.__=n(),_.__H=i,_.__h=n),_.__}function G(n,i){return Yn=8,C(function(){return n},i)}function Cu(n){var i=d.context[n.__c],_=tn(Un++,9);return _.c=n,i?(_.__==null&&(_.__=!0,i.sub(d)),i.props.value):n.__}function Ju(n,i){a.useDebugValue&&a.useDebugValue(i?i(n):n)}function Ou(n){var i=tn(Un++,10),_=w();return i.__=n,d.componentDidCatch||(d.componentDidCatch=function(r,c){i.__&&i.__(r,c),_[1](r)}),[_[0],function(){_[1](void 0)}]}function Eu(){for(var n;n=Xr.shift();){var i=n.__H;if(n.__P&&i)try{i.__h.some(Hi),i.__h.some(u_),i.__h=[]}catch(_){i.__h=[],a.__e(_,n.__v)}}}function du(n){var i,_=function(){clearTimeout(r),Br&&cancelAnimationFrame(i),setTimeout(n)},r=setTimeout(_,35);Br&&(i=requestAnimationFrame(_))}function Hi(n){var i=d,_=n.__c;typeof _=="function"&&(n.__c=void 0,_()),d=i}function u_(n){var i=d;n.__c=n.__(),d=i}function l_(n,i){return!n||n.length!==i.length||i.some(function(_,r){return _!==n[r]})}function Mr(n,i){return typeof i=="function"?i(n):i}function Su(n){var i=zr.get(this);return i||(i=new Map,zr.set(this,i)),(i=qr(this,i.get(n)||(i.set(n,i=function(_){for(var r,c,u=1,f="",$="",o=[0],g=function(v){u===1&&(v||(f=f.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(0,v,f):u===3&&(v||f)?(o.push(3,v,f),u=2):u===2&&f==="..."&&v?o.push(4,v,0):u===2&&f&&!v?o.push(5,0,!0,f):u>=5&&((f||!v&&u===5)&&(o.push(u,0,f,c),u=6),v&&(o.push(u,v,0,c),u=6)),f=""},x=0;x<_.length;x++){x&&(u===1&&g(),g(x));for(var l=0;l<_[x].length;l++)r=_[x][l],u===1?r==="<"?(g(),o=[o],u=3):f+=r:u===4?f==="--"&&r===">"?(u=1,f=""):f=r+f[0]:$?r===$?$="":f+=r:r==='"'||r==="'"?$=r:r===">"?(g(),u=1):u&&(r==="="?(u=5,c=f,f=""):r==="/"&&(u<5||_[x][l+1]===">")?(g(),u===3&&(o=o[0]),u=o,(o=o[0]).push(2,0,u),u=0):r===" "||r==="\t"||r===`
`||r==="\r"?(g(),u=2):f+=r),u===3&&f==="!--"&&(u=4,o=o[0])}return g(),o}(n)),i),arguments,[])).length>1?i:i[0]}var Ui,S,Hr,Mu,jn,lr,Fr,Wr,ai,Bi,ci,jr,f_,i_,__,Ur,Fi,Wi,qu,Gi,Un,d,n_,xr,Yn=0,Xr,a,br,vr,kr,pr,Kr,hr,Br,qr=function(n,i,_,r){var c;i[0]=0;for(var u=1;u<i.length;u++){var f=i[u++],$=i[u]?(i[0]|=f?1:2,_[i[u++]]):i[++u];f===3?r[0]=$:f===4?r[1]=Object.assign(r[1]||{},$):f===5?(r[1]=r[1]||{})[i[++u]]=$:f===6?r[1][i[++u]]+=$+"":f?(c=n.apply($,qr(n,$,_,["",null])),r.push(c),$[0]?i[0]|=2:(i[u-2]=0,i[u]=c)):r.push($)}return r},zr,s;var e=O(()=>{Fi={},Wi=[],qu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Gi=Array.isArray;Ui=Wi.slice,S={__e:function(n,i,_,r){for(var c,u,f;i=i.__;)if((c=i.__c)&&!c.__)try{if((u=c.constructor)&&u.getDerivedStateFromError!=null&&(c.setState(u.getDerivedStateFromError(n)),f=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(n,r||{}),f=c.__d),f)return c.__E=c}catch($){n=$}throw n}},Hr=0,Mu=function(n){return n!=null&&n.constructor===void 0},ui.prototype.setState=function(n,i){var _;_=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Kn({},this.state),typeof n=="function"&&(n=n(Kn({},_),this.props)),n&&Kn(_,n),n!=null&&this.__v&&(i&&this._sb.push(i),r_(this))},ui.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),r_(this))},ui.prototype.render=Pi,jn=[],Fr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Wr=function(n,i){return n.__v.__b-i.__v.__b},ji.__r=0,ai=Math.random().toString(8),Bi="__d"+ai,ci="__a"+ai,jr=/(PointerCapture)$|Capture$/i,f_=0,i_=yr(!1),__=yr(!0),Ur=0;Xr=[],a=S,br=a.__b,vr=a.__r,kr=a.diffed,pr=a.__c,Kr=a.unmount,hr=a.__;a.__b=function(n){d=null,br&&br(n)},a.__=function(n,i){n&&i.__k&&i.__k.__m&&(n.__m=i.__k.__m),hr&&hr(n,i)},a.__r=function(n){vr&&vr(n),Un=0;var i=(d=n.__c).__H;i&&(n_===d?(i.__h=[],d.__h=[],i.__.some(function(_){_.__N&&(_.__=_.__N),_.u=_.__N=void 0})):(i.__h.some(Hi),i.__h.some(u_),i.__h=[],Un=0)),n_=d},a.diffed=function(n){kr&&kr(n);var i=n.__c;i&&i.__H&&(i.__H.__h.length&&(Xr.push(i)!==1&&xr===a.requestAnimationFrame||((xr=a.requestAnimationFrame)||du)(Eu)),i.__H.__.some(function(_){_.u&&(_.__H=_.u),_.u=void 0})),n_=d=null},a.__c=function(n,i){i.some(function(_){try{_.__h.some(Hi),_.__h=_.__h.filter(function(r){return!r.__||u_(r)})}catch(r){i.some(function(c){c.__h&&(c.__h=[])}),i=[],a.__e(r,_.__v)}}),pr&&pr(n,i)},a.unmount=function(n){Kr&&Kr(n);var i,_=n.__c;_&&_.__H&&(_.__H.__.some(function(r){try{Hi(r)}catch(c){i=c}}),_.__H=void 0,i&&a.__e(i,_.__v))};Br=typeof requestAnimationFrame=="function";zr=new Map;s=Su.bind($_)});function Gn(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function $n(n,i){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,i)}catch{return}}function w_(n,i=!1){let _=Gn(n);if(_===null)return i;return _==="true"}function y_(n,i=null){let _=Gn(n);if(_===null)return i;let r=parseInt(_,10);return Number.isFinite(r)?r:i}function Ar(n){let i=Gn(n);if(!i)return null;try{return JSON.parse(i)}catch{return null}}function Vi(n){let i=String(n??"").trim().toLowerCase().replace(/_/g,"-");if(!i)return Cn;if(i==="zh-cn"||i==="zh"||i==="zh-hans"||i.startsWith("zh-hans"))return"zh-CN";if(i==="ja"||i.startsWith("ja-"))return"ja";if(i==="en"||i.startsWith("en-"))return"en";return Cn}function _f(){if(typeof navigator>"u")return Cn;let n=[...Array.isArray(navigator.languages)?navigator.languages:[],navigator.language].filter((i)=>typeof i==="string"&&i.length>0);for(let i of n){let _=Vi(i);if(_!==Cn)return _}return Cn}function rf(){let n=Gn(Ir);if(n)return Vi(n);return _f()}function cf(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(x_,{detail:{locale:n}}))}function Ri(){if(!b_)uf();return Vn}function uf(){return Vn=rf(),b_=!0,Vn}function ff(n,i={}){let _=Vi(n);if(b_=!0,_===Vn&&i.persist===!1)return Vn;if(Vn=_,i.persist!==!1)$n(Ir,_);return cf(_),Vn}function sf(n,i){if(!i)return n;return n.replace(/\{(\w+)\}/g,(_,r)=>{let c=i[r];return c===void 0||c===null?_:String(c)})}function Lr(n,i,_=Ri()){let c=nf[_]?.[n]??Yr[n]??n;return sf(c,i)}function Pn(n,i){return Lr(n,i)}function $f(){let[n,i]=w(Ri());return q(()=>{if(typeof window>"u"||typeof window.addEventListener!=="function")return;let _=(r)=>{let c=r.detail,u=Vi(c?.locale??Ri());i(u)};return window.addEventListener(x_,_),i(Ri()),()=>window.removeEventListener(x_,_)},[]),[n,(_)=>ff(_)]}function t(){let[n,i]=$f();return{locale:n,setLocale:i,t:(_,r)=>Lr(_,r,n)}}var Cn="en",Zr,Dr,Ir="piclaw_locale",x_="piclaw-locale-change",Yr,mu,au,nf,Vn,b_=!1;var cn=O(()=>{e();Zr=["en","zh-CN","ja"],Dr={en:"English","zh-CN":"简体中文",ja:"日本語"},Yr={"compose.placeholder":"Message (Enter to send, Shift+Enter for newline)...","compose.send":"Send","compose.stop":"Stop","compose.searchPlaceholder":"Search (Enter to run)...","compose.clearAll":"Clear all","compose.clearAllTitle":"Clear all attachments and references","compose.scope":"Scope","compose.searchScope":"Search scope","compose.scopeCurrent":"Current","compose.scopeBranchFamily":"Branch family","compose.scopeAll":"All chats","compose.filterImages":"Images","compose.filterAttachments":"Attachments","compose.search":"Search","compose.closeSearch":"Close search","compose.shareLocation":"Share location","compose.attachFile":"Attach file","compose.queueControls":"Queued follow-up controls","compose.moveUp":"Move up","compose.moveUpQueue":"Move up in queue","compose.moveDown":"Move down","compose.moveDownQueue":"Move down in queue","compose.editInCompose":"Edit in compose","compose.returnToEditor":"Return queued message to editor","compose.injectSteer":"Inject queued follow-up as steer","compose.steer":"Steer","compose.cancelQueued":"Cancel queued message","compose.resizeInput":"Resize message input","compose.resizeInputHint":"Drag to resize message input","compose.modelPicker":"Model picker","compose.sessionsAndAgents":"Sessions and agents","compose.openModelPicker":"Open model picker","compose.newBranchTitle":"Create a new branch from this chat","compose.newRootTitle":"Create a clean root session such as web:ops","compose.renameSessionTitle":"Rename the current session","compose.pruneSessionTitle":"Delete (prune) current agent/session branch","compose.filterImagesTitle":"Only show messages with images","compose.filterAttachmentsTitle":"Only show messages with attachments","compose.selectModel":"Select model","compose.loadingModels":"Loading models…","compose.noModels":"No models available.","compose.nextModel":"Next model","compose.manageSessions":"Manage sessions & agents","compose.noSessions":"No other sessions yet.","compose.newBranch":"New branch","compose.newRoot":"New root…","compose.mergeCurrent":"Merge current w/ parent","compose.renameCurrent":"Rename current…","compose.deleteCurrent":"Delete current…","compose.mergeInto":"Merge this branch into {target}","compose.mergeBlocked":"This branch cannot be merged while active or while it has children","workspace.title":"Workspace","workspace.newFile":"New file","workspace.refresh":"Refresh","workspace.actions":"Workspace actions","workspace.uploadFiles":"Upload files","workspace.reindexing":"Reindexing workspace…","workspace.deleteFile":"Delete file","workspace.download":"Download","workspace.uploadToFolder":"Upload files to this folder","workspace.addFolderHint":"Add folder hint to compose","workspace.downloadZip":"Download folder as zip","workspace.openInTab":"Open in tab","workspace.openInEditor":"Open in editor","workspace.renameSelected":"Rename selected","workspace.downloadSelectedFile":"Download selected file","workspace.downloadSelectedFolder":"Download selected folder (zip)","workspace.deleteSelectedFile":"Delete selected file","shell.settings":"Settings","shell.newChat":"New chat","shell.connecting":"Connecting…","shell.connected":"Connected","language.label":"Language","settings.title":"Settings","settings.close":"Close (Esc)","settings.filter":"Filter…","settings.loading":"Loading settings…","settings.section.general":"General","settings.section.sessions":"Sessions","settings.section.recordings":"Recordings","settings.section.compaction":"Compaction","settings.section.keyboard":"Keyboard","settings.section.workspace":"Workspace","settings.section.environment":"Environment","settings.section.providers":"Providers","settings.section.models":"Models","settings.section.theme":"Appearance","settings.section.scheduled-tasks":"Scheduled Tasks","settings.section.quick-actions":"Quick Actions","settings.section.keychain":"Keychain","settings.section.tools":"Tools","settings.section.addons":"Add-ons","settings.placeholder.recordings":"Filter recordings…","settings.placeholder.keyboard":"Filter shortcuts…","settings.placeholder.environment":"Filter environment…","settings.placeholder.models":"Filter models…","settings.placeholder.scheduled-tasks":"Filter scheduled tasks…","settings.placeholder.quick-actions":"Filter quick actions…","settings.placeholder.keychain":"Filter entries…","settings.placeholder.tools":"Filter tools…","settings.placeholder.addons":"Filter add-ons…","preview.close":"Close","preview.loading":"Loading preview…","preview.files":"Files","preview.folders":"Folders","preview.compressed":"Compressed","preview.uncompressed":"Uncompressed","preview.name":"Name","preview.type":"Type","preview.method":"Method","preview.size":"Size","post.deleteMessage":"Delete message","post.tooLarge":"Message too large to display.","post.previewTruncated":"Preview truncated.","post.submitted":"Submitted","post.discard":"Discard","post.save":"Save","post.cancel":"Cancel","post.addNote":"Add note","post.addNotePlaceholder":"Add a note…","tab.close":"Close","tab.closeOthers":"Close Others","tab.closeAll":"Close All","tab.reattach":"Reattach","tab.openInWindow":"Open in Window","tab.openInNewTab":"Open in New Tab","tab.pinned":"Pinned","tab.detached":"Detached","tab.openSeparateWindow":"Open in separate window","status.trackedVariables":"Tracked variables","status.attachToSession":"Attach to session","status.files":"Files","status.proposedDiff":"Proposed diff","status.copyTmux":"Copy tmux command","status.experimentDuration":"Experiment duration","status.sinceLastActivity":"Since last activity","annotator.title":"Annotate image","annotator.typeLabel":"Type label…","annotator.undo":"Undo","annotator.resetZoom":"Reset zoom","tree.filter":"Filter…","tree.sessionTree":"Session tree","btw.label":"BTW side conversation","btw.close":"Close BTW","btw.thinking":"Thinking","mdpreview.close":"Close preview","mdpreview.unavailable":"Preview unavailable","widget.close":"Close widget","oobe.gettingStarted":"Getting started","oobe.needsSetupTitle":"Instance needs setup","oobe.configuredTitle":"Instance is configured","oobe.needsSetupBody":"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.","oobe.configuredBody":"This instance looks configured. Review or update provider and model settings in Settings.","oobe.openSettings":"Open Settings","oobe.dismiss":"Dismiss","oobe.done":"Done","palette.placeholder":"Type to jump to an agent, workspace action, or slash command…","palette.hideWorkspace":"Hide workspace","palette.showWorkspace":"Show workspace","palette.hideWorkspaceDesc":"Hide the workspace sidebar.","palette.showWorkspaceDesc":"Show the workspace sidebar.","palette.exitChatOnly":"Exit chat-only mode","palette.chatOnly":"Chat-only mode","palette.exitChatOnlyDesc":"Return to the split workspace layout.","palette.chatOnlyDesc":"Switch to the chat-only layout.","palette.groupAgents":"Agents","palette.groupWorkspace":"Workspace","palette.groupSlash":"Slash commands","palette.hintMove":"Move","palette.hintSelect":"Select","palette.hintPopOut":"Pop out","palette.hintClose":"Close","settings.appliedNotice":"Settings applied. Changes take effect on the next turn.","settings.sessions.lifecycle":"Session Lifecycle","settings.sessions.autoRotate":"Auto-rotate sessions","settings.sessions.maxSize":"Max session size (MB)","settings.sessions.maxSizeAria":"max session size","settings.sessions.agentBehaviour":"Agent Behaviour","settings.sessions.toolBudget":"Tool use budget","settings.sessions.toolBudgetAria":"tool use budget","settings.sessions.toolBudgetHint":"max tool-call messages per turn","settings.sessions.isolation":"Session isolation","settings.sessions.isolationNone":"None — full cross-session visibility","settings.sessions.isolationSummary":"Summary — tools visible, no arguments","settings.sessions.isolationFull":"Full — sessions cannot see each other","settings.editor.heading":"Editor","settings.editor.vimMode":"Vim mode","settings.editor.showWhitespace":"Show whitespace","settings.editor.livePreview":"Markdown live preview","settings.editor.fontSize":"Font size (px)","settings.editor.fontSizeAria":"editor font size","settings.editor.fontFamily":"Font family","settings.editor.fontFamilyPlaceholder":"monospace (default)","settings.editor.localOnlyHint":"This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.","settings.appearance.syncing":"Syncing appearance…","settings.appearance.default":"Default","settings.appearance.autoLightDark":"auto (light/dark)","settings.appearance.tint":"Tint:","settings.appearance.clearTint":"Clear tint","settings.appearance.none":"none","settings.keyboard.heading":"Keyboard","settings.keyboard.hint1":"Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.","settings.keyboard.hint1b":"is reserved for dismiss/abort and cannot be rebound.","settings.keyboard.hint2mid":"and typing","settings.keyboard.hint2end":"outside the compose box open this pane.","settings.keyboard.resetAll":"Reset all to defaults","settings.keyboard.defaultColon":"Default:","settings.keyboard.save":"Save","settings.keyboard.defaultBtn":"Default","settings.keyboard.noMatch":"No shortcuts match this filter.","settings.keyboard.invalidShortcut":"Invalid shortcut: {token}. Escape is reserved and cannot be rebound.","settings.keyboard.saved":"Keyboard shortcuts saved.","settings.keyboard.resetOne":"Keyboard shortcut reset to default.","settings.keyboard.resetAllDone":"Keyboard shortcuts reset to defaults.","settings.workspace.serverApplied":"Workspace settings applied. Server-side limits affect new workspace requests immediately.","settings.workspace.browserApplied":"Browser workspace settings applied immediately in this tab.","settings.workspace.access":"Access","settings.workspace.enableTerminal":"Enable web terminal","settings.workspace.allowVnc":"Allow direct VNC targets","settings.workspace.accessHint":"Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.","settings.workspace.guardrails":"Server scan guardrails","settings.workspace.maxDepth":"Max tree depth","settings.workspace.maxDepthAria":"workspace tree max depth","settings.workspace.maxDepthHintPre":"caps all","settings.workspace.maxDepthHintPost":"requests","settings.workspace.maxEntries":"Max entries per scan","settings.workspace.maxEntriesAria":"workspace tree max entries","settings.workspace.maxEntriesHint":"truncate oversized tree walks earlier","settings.workspace.thisBrowser":"This browser","settings.workspace.refreshInterval":"Refresh interval (seconds)","settings.workspace.refreshIntervalAria":"workspace refresh interval","settings.workspace.folderDepth":"Folder preview scan depth","settings.workspace.folderDepthAria":"folder preview scan depth","settings.workspace.folderDepthHintPre":"set to","settings.workspace.folderDepthHintPost":"to disable folder size preview scans","settings.workspace.footerHint":"Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.","settings.models.thinkingLevel":"Thinking level","settings.models.noThinking":"Current model does not support thinking.","settings.models.thinkingLevelLabel":"Thinking level:","settings.models.loading":"Loading models…","settings.models.summary":"Model and provider names may wrap in narrow panes to avoid clipping.","settings.models.scopedOnly":"Scoped models only","settings.models.scopedCheckboxPre":"Use Pi","settings.models.scopedCheckboxPost":"for Piclaw model lists","settings.models.scopedHintPre":"Filters this picker and the","settings.models.scopedHintPost":"tool. TUI model selection remains unchanged.","settings.models.colModel":"Model","settings.models.colProvider":"Provider","settings.models.colContext":"Context","settings.models.colReasoning":"Reasoning","settings.models.noMatch":'No models match "{filter}"',"settings.tools.unavailable":"Tool data not available.","settings.tools.search":"Search","settings.tools.matchMode":"Match mode","settings.tools.orMode":"Any keyword (OR) — results match at least one search term","settings.tools.andMode":"All keywords (AND) — results must match every search term","settings.tools.colEnabled":"Enabled","settings.tools.colTool":"Tool","settings.tools.colCompact":"Compact","settings.tools.colKind":"Kind","settings.tools.colSummary":"Summary","settings.tools.colSource":"Source","settings.tools.disableCompaction":"Disable tool-result compaction for this tool","settings.tools.enableCompaction":"Enable tool-result compaction for this tool","settings.tools.noMatch":'No tools match "{filter}"',"settings.tools.footer":"Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; the “Compact” column controls tool-result compaction eligibility.","settings.environment.heading":"Environment","settings.environment.introPre":"Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to","settings.environment.introPost":", so subsequent tool calls inherit them.","settings.environment.refresh":"Refresh","settings.environment.addOverride":"Add override","settings.environment.valuePlaceholder":"value","settings.environment.save":"Save","settings.environment.countLine":"{count} variables visible • {overrides} overrides active • {keychain} keychain-injected variables hidden","settings.environment.overridden":"Overridden in KV","settings.environment.inherited":"Inherited from process environment","settings.environment.kindOverride":"override","settings.environment.kindProcess":"process","settings.environment.clear":"Clear","settings.environment.noMatch":'No environment variables match "{filter}".',"settings.environment.refreshedToast":"Environment refreshed.","settings.environment.savedToast":"Saved environment override for {name}.","settings.environment.clearedToast":"Cleared environment override for {name}.","settings.quickActions.loading":"Loading…","settings.quickActions.heading":"Timeline Quick Actions","settings.quickActions.intro":"Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.","settings.quickActions.enableAll":"Enable all","settings.quickActions.saving":"Saving…","settings.quickActions.saveApply":"Save & apply","settings.quickActions.workspaceCommands":"Workspace commands","settings.quickActions.noWorkspaceMatch":"No workspace commands match this filter.","settings.quickActions.slashCommands":"Slash commands","settings.quickActions.slashFallback":"slash command","settings.quickActions.noSlashMatch":"No slash commands match this filter.","settings.quickActions.savingToast":"Saving quick actions…","settings.quickActions.savedToast":"Quick Actions saved.","settings.providers.authApiKey":"API key","settings.providers.authConfigured":"Configured","settings.providers.heading":"Providers","settings.providers.tagCustom":"Custom","settings.providers.logout":"Logout","settings.providers.reconfigure":"Reconfigure","settings.providers.setUp":"Set up","settings.providers.setupHint":"Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.","settings.providers.starting":"Starting…","settings.providers.signInOAuth":"Sign in with OAuth","settings.providers.apiKeyLabel":"API Key","settings.providers.apiKeyPlaceholder":"Enter API key","settings.providers.save":"Save","settings.providers.configuring":"Configuring…","settings.providers.saveConfig":"Save configuration","settings.providers.apiKeyEmpty":"API key cannot be empty.","settings.providers.configuringToast":"Configuring {provider}…","settings.providers.configured":"{provider} configured.","settings.providers.startingOAuth":"Starting OAuth for {provider}…","settings.providers.oauthOpened":"OAuth window opened. Complete the sign-in flow, then close this message.","settings.providers.oauthStarted":"OAuth flow started for {provider}. Check the chat.","settings.providers.loggingOut":"Logging out {provider}…","settings.providers.loggedOut":"Logged out {provider}. Restart may be needed.","settings.general.identity":"Identity","settings.general.userLabel":"User","settings.general.yourName":"Your name","settings.general.agentLabel":"Agent","settings.general.agentName":"Agent name","settings.general.notifications":"Notifications","settings.general.browserNotifications":"Browser notifications","settings.general.notifSecureHint":"Use the \uD83D\uDD14 bell button in the compose bar to enable/disable notifications. Web Push requires HTTPS or localhost.","settings.general.notifInsecureHint":"⚠ Not available — requires a secure context (HTTPS or localhost). Access via SSH tunnel or reverse proxy with TLS to enable.","settings.general.display":"Display","settings.general.systemMeters":"System meters","settings.general.systemMetersHint":"CPU/memory/network meters in the status bar. This browser only.","settings.general.instanceConfig":"Instance Configuration","settings.general.composeUpload":"Compose upload (MB)","settings.general.composeUploadAria":"compose upload limit","settings.general.composeUploadHint":"chat/media attachments","settings.general.workspaceUpload":"Workspace upload (MB)","settings.general.workspaceUploadAria":"workspace upload limit","settings.general.workspaceUploadHint":"defaults to 256 MB; chunked uploads allow up to 1 GB","settings.general.authentication":"Authentication","settings.general.widgetToken":"Widget bearer token","settings.general.token":"Token","settings.general.hideToken":"Hide token","settings.general.revealToken":"Reveal token","settings.general.copyToken":"Copy token","settings.general.copied":"Copied","settings.general.regenerating":"Regenerating…","settings.general.regenerate":"Regenerate","settings.general.tokenHintPre":"Read-only token for","settings.general.tokenHintMid":"and","settings.general.tokenHintPost":". Use as","settings.general.tokenHintEnd":".","settings.general.copyFailed":"Could not copy widget token. Select the token field and copy manually.","settings.general.regenConfirm":"Regenerate the widget token? Existing macOS widgets using the old token will stop updating.","settings.general.totpTitle":"TOTP setup QR","settings.general.totpConfiguredHint":"Current web-login authenticator secret. Scan this QR to add another authenticator device.","settings.general.totpUnconfiguredHint":"TOTP is not configured for this instance yet, so no setup QR is available.","settings.general.issuer":"Issuer","settings.general.label":"Label","settings.general.secret":"Secret","settings.general.avatarUpload":"Click to upload","settings.developer.heading":"Developer","settings.developer.devMode":"Developer mode","settings.developer.localHint":"This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.","settings.developer.addonSources":"Add-on Sources","settings.developer.catalogUrl":"Catalog URL","settings.developer.catalogHint":"Primary add-on catalog URL. Leave empty to use the default","settings.developer.additionalCatalogs":"Additional catalog URLs","settings.developer.additionalHint":"Fetched in addition to the primary/default catalog. One URL per line.","settings.developer.repoUrl":"Repo URL","settings.developer.repoHintPre":"Override the git repo used for","settings.developer.repoHintPost":"installs. Leave empty for default.","settings.developer.debug":"Debug","settings.developer.logSse":"Log SSE events","settings.developer.logToolCalls":"Log tool calls","settings.developer.debugHint":"Debug flags take effect on next page reload.","settings.addons.installing":"Installing {slug}…","settings.addons.removing":"Removing {slug}…","settings.addons.installedToast":"Add-on installed.","settings.addons.removedToast":"Add-on removed.","settings.addons.restarting":"Restarting piclaw…","settings.addons.restartComplete":"Restart complete — add-ons refreshed.","settings.addons.restartTimeout":"Backend did not return in time. Reload the page manually.","settings.addons.fetching":"Fetching add-ons…","settings.addons.loadFailed":"Could not load add-ons.","settings.addons.catalogFromPre":"Catalog from","settings.addons.catalogMerged":"{count} catalog sources merged.","settings.addons.installNote":"Package-first install via Bun; restart required after install/uninstall.","settings.addons.failedFetchSingular":"Failed to fetch {count} catalog source:","settings.addons.failedFetchPlural":"Failed to fetch {count} catalog sources:","settings.addons.activeSources":"Active catalog sources ({count})","settings.addons.windowsWarning":"Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.","settings.addons.typeExtSkill":"extension + skill","settings.addons.typeSkill":"skill","settings.addons.typeExt":"extension","settings.addons.update":"Update","settings.addons.remove":"Remove","settings.addons.install":"Install","settings.addons.noMatch":'No add-ons match "{filter}"',"settings.addons.restartNotice":"Extension changes are installed but inactive until piclaw restarts.","settings.addons.restartNow":"Restart Now","settings.recordings.modeFull":"full / trusted","settings.recordings.modeMetadata":"metadata only","settings.recordings.modeRedacted":"redacted","settings.recordings.selectPrompt":"Select a recording to inspect, replay, export, or delete it.","settings.recordings.playback":"Playback","settings.recordings.refresh":"Refresh","settings.recordings.delete":"Delete","settings.recordings.status":"Status","settings.recordings.mode":"Mode","settings.recordings.chat":"Chat","settings.recordings.started":"Started","settings.recordings.ended":"Ended","settings.recordings.events":"Events","settings.recordings.redactions":"Redactions","settings.recordings.exportJson":"Export JSON","settings.recordings.exportJsonl":"Export JSONL","settings.recordings.exportHtml":"Export standalone HTML","settings.recordings.eventSummary":"Event summary","settings.recordings.inspectHint":"Open or refresh details to inspect trace events.","settings.recordings.firstEvents":"First events","settings.recordings.heading":"Session Recording","settings.recordings.intro":"Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.","settings.recordings.chatJid":"Chat JID","settings.recordings.title":"Title","settings.recordings.titlePlaceholder":"Demo recording","settings.recordings.modeLabelField":"Mode","settings.recordings.optRedacted":"Redacted","settings.recordings.optMetadata":"Metadata only","settings.recordings.optFull":"Full / trusted local","settings.recordings.includeSnapshot":"Include timeline snapshot","settings.recordings.extraKeys":"Extra redacted keys","settings.recordings.extraPatterns":"Extra regex patterns","settings.recordings.stopCurrent":"Stop current chat recording","settings.recordings.start":"Start recording","settings.recordings.redactionPreview":"Redaction preview","settings.recordings.previewRedaction":"Preview redaction","settings.recordings.loading":"Loading recordings…","settings.recordings.noneYet":"No recordings yet.","settings.recordings.noneYetHint":"Start a recording above, then use playback/export for deterministic screen capture.","settings.recordings.listLabel":"Session recordings","settings.recordings.eventsCount":"{count} events","settings.recordings.noMatch":"No recordings match “{filter}”.","settings.recordings.startedToast":"Recording started for {chat}.","settings.recordings.startFailed":"Failed to start recording.","settings.recordings.stoppedToast":"Recording stopped for {chat}.","settings.recordings.stopFailed":"Failed to stop recording.","settings.recordings.deleteConfirm":"Delete recording {id}?","settings.recordings.deletedToast":"Recording deleted.","settings.recordings.deleteFailed":"Failed to delete recording.","settings.recordings.loadOneFailed":"Failed to load recording.","settings.recordings.loadFailed":"Failed to load recordings.","settings.recordings.previewFailed":"Preview failed.","settings.keychain.loadFailed":"Failed to load keychain.","settings.keychain.addFailed":"Failed to add entry.","settings.keychain.deleteFailed":"Failed to delete entry.","settings.keychain.saveNotesFailed":"Failed to save notes.","settings.keychain.revealFailed":"Failed to reveal.","settings.keychain.loading":"Loading keychain…","settings.keychain.entryCountSingular":"{count} entry","settings.keychain.entryCountPlural":"{count} entries","settings.keychain.matchingFilter":' matching "{filter}"',"settings.keychain.encryptedSuffix":", encrypted at rest.","settings.keychain.clickPrefix":"Click","settings.keychain.revealSuffix":"to reveal.","settings.keychain.cancel":"Cancel","settings.keychain.addEntry":"+ Add entry","settings.keychain.namePlaceholder":"Entry name (e.g. github/my-token)","settings.keychain.secretPlaceholder":"Secret value","settings.keychain.usernamePlaceholder":"Username (optional)","settings.keychain.saving":"Saving…","settings.keychain.save":"Save","settings.keychain.userNotePlaceholder":"User note (visible in this UI only)","settings.keychain.agentNotePlaceholder":"Agent note (safe to expose to agents)","settings.keychain.noMatchFilter":"No entries match the filter.","settings.keychain.noEntries":"No keychain entries.","settings.keychain.hideSecret":"Hide secret","settings.keychain.revealSecret":"Reveal secret","settings.keychain.deleteQ":"Delete?","settings.keychain.yes":"Yes","settings.keychain.no":"No","settings.keychain.deleteTitle":"Delete","settings.keychain.userNote":"User note","settings.keychain.agentNote":"Agent-readable note","settings.keychain.userNoteHint":"Human/UI note only","settings.keychain.agentNoteHint":"Safe guidance for agents","settings.keychain.saveNotes":"Save notes","settings.keychain.masterPassword":"Master password:","settings.keychain.masterPasswordPlaceholder":"Enter keychain master password","settings.keychain.unlock":"Unlock","settings.keychain.totpCode":"TOTP code:","settings.keychain.verify":"Verify","settings.keychain.username":"Username","settings.keychain.copyUsername":"Copy username","settings.keychain.secret":"Secret","settings.keychain.copySecret":"Copy secret","menu.title":"Menu","menu.showWorkspace":"Show workspace","menu.hideWorkspace":"Hide workspace","menu.openExplorer":"Open explorer","menu.chatOnly":"Chat-only mode","menu.exitChatOnly":"Exit chat-only mode","menu.openTerminal":"Open terminal in tab","menu.openVnc":"Open VNC in tab","menu.newFile":"New file","menu.openRecent":"Open Recent","menu.refreshTree":"Refresh tree","menu.reindex":"Reindex workspace","menu.showHidden":"Show hidden files","menu.hideHidden":"Hide hidden files","menu.scale":"Scale","menu.settings":"Settings"},mu={"compose.placeholder":"输入消息（回车发送，Shift+回车换行）...","compose.send":"发送","compose.stop":"停止","compose.searchPlaceholder":"搜索（回车运行）...","compose.clearAll":"清除全部","compose.clearAllTitle":"清除所有附件和引用","compose.scope":"范围","compose.searchScope":"搜索范围","compose.scopeCurrent":"当前","compose.scopeBranchFamily":"分支系列","compose.scopeAll":"所有聊天","compose.filterImages":"图片","compose.filterAttachments":"附件","compose.search":"搜索","compose.closeSearch":"关闭搜索","compose.shareLocation":"分享位置","compose.attachFile":"附加文件","compose.queueControls":"排队后续消息控制","compose.moveUp":"上移","compose.moveUpQueue":"在队列中上移","compose.moveDown":"下移","compose.moveDownQueue":"在队列中下移","compose.editInCompose":"在输入框中编辑","compose.returnToEditor":"将排队消息返回编辑器","compose.injectSteer":"作为引导插入排队的后续消息","compose.steer":"引导","compose.cancelQueued":"取消排队消息","compose.resizeInput":"调整消息输入框大小","compose.resizeInputHint":"拖动以调整消息输入框大小","compose.modelPicker":"模型选择器","compose.sessionsAndAgents":"会话与代理","compose.openModelPicker":"打开模型选择器","compose.newBranchTitle":"从此聊天创建新分支","compose.newRootTitle":"创建一个干净的根会话，例如 web:ops","compose.renameSessionTitle":"重命名当前会话","compose.pruneSessionTitle":"删除（修剪）当前代理/会话分支","compose.filterImagesTitle":"仅显示含图片的消息","compose.filterAttachmentsTitle":"仅显示含附件的消息","compose.selectModel":"选择模型","compose.loadingModels":"正在加载模型…","compose.noModels":"没有可用的模型。","compose.nextModel":"下一个模型","compose.manageSessions":"管理会话与代理","compose.noSessions":"暂无其他会话。","compose.newBranch":"新建分支","compose.newRoot":"新建根会话…","compose.mergeCurrent":"将当前合并到父级","compose.renameCurrent":"重命名当前…","compose.deleteCurrent":"删除当前…","compose.mergeInto":"将此分支合并到 {target}","compose.mergeBlocked":"当此分支处于活动状态或有子分支时无法合并","workspace.title":"工作区","workspace.newFile":"新建文件","workspace.refresh":"刷新","workspace.actions":"工作区操作","workspace.uploadFiles":"上传文件","workspace.reindexing":"正在重建索引…","workspace.deleteFile":"删除文件","workspace.download":"下载","workspace.uploadToFolder":"上传文件到此文件夹","workspace.addFolderHint":"将文件夹提示添加到输入框","workspace.downloadZip":"将文件夹下载为 zip","workspace.openInTab":"在标签页打开","workspace.openInEditor":"在编辑器打开","workspace.renameSelected":"重命名所选","workspace.downloadSelectedFile":"下载所选文件","workspace.downloadSelectedFolder":"下载所选文件夹（zip）","workspace.deleteSelectedFile":"删除所选文件","shell.settings":"设置","shell.newChat":"新建对话","shell.connecting":"连接中…","shell.connected":"已连接","language.label":"语言","settings.title":"设置","settings.close":"关闭（Esc）","settings.filter":"筛选…","settings.loading":"加载设置中…","settings.section.general":"常规","settings.section.sessions":"会话","settings.section.recordings":"录制","settings.section.compaction":"压缩","settings.section.keyboard":"键盘","settings.section.workspace":"工作区","settings.section.environment":"环境","settings.section.providers":"提供商","settings.section.models":"模型","settings.section.theme":"外观","settings.section.scheduled-tasks":"计划任务","settings.section.quick-actions":"快捷操作","settings.section.keychain":"密钥串","settings.section.tools":"工具","settings.section.addons":"插件","settings.placeholder.recordings":"筛选录制…","settings.placeholder.keyboard":"筛选快捷键…","settings.placeholder.environment":"筛选环境…","settings.placeholder.models":"筛选模型…","settings.placeholder.scheduled-tasks":"筛选计划任务…","settings.placeholder.quick-actions":"筛选快捷操作…","settings.placeholder.keychain":"筛选条目…","settings.placeholder.tools":"筛选工具…","settings.placeholder.addons":"筛选插件…","preview.close":"关闭","preview.loading":"正在加载预览…","preview.files":"文件","preview.folders":"文件夹","preview.compressed":"压缩后","preview.uncompressed":"未压缩","preview.name":"名称","preview.type":"类型","preview.method":"方法","preview.size":"大小","post.deleteMessage":"删除消息","post.tooLarge":"消息过大，无法显示。","post.previewTruncated":"预览已截断。","post.submitted":"已提交","post.discard":"丢弃","post.save":"保存","post.cancel":"取消","post.addNote":"添加备注","post.addNotePlaceholder":"添加备注…","tab.close":"关闭","tab.closeOthers":"关闭其他","tab.closeAll":"全部关闭","tab.reattach":"重新附加","tab.openInWindow":"在窗口中打开","tab.openInNewTab":"在新标签页打开","tab.pinned":"已固定","tab.detached":"已分离","tab.openSeparateWindow":"在独立窗口中打开","status.trackedVariables":"跟踪的变量","status.attachToSession":"附加到会话","status.files":"文件","status.proposedDiff":"建议的差异","status.copyTmux":"复制 tmux 命令","status.experimentDuration":"实验时长","status.sinceLastActivity":"自上次活动以来","annotator.title":"标注图片","annotator.typeLabel":"输入标签…","annotator.undo":"撤销","annotator.resetZoom":"重置缩放","tree.filter":"筛选…","tree.sessionTree":"会话树","btw.label":"BTW 附加对话","btw.close":"关闭 BTW","btw.thinking":"思考中","mdpreview.close":"关闭预览","mdpreview.unavailable":"预览不可用","widget.close":"关闭小部件","oobe.gettingStarted":"入门指南","oobe.needsSetupTitle":"实例需要设置","oobe.configuredTitle":"实例已配置","oobe.needsSetupBody":"此实例尚未配置。请打开“设置”并设置 AI 提供商/模型以开始发送请求。","oobe.configuredBody":"此实例看起来已配置。请在“设置”中查看或更新提供商和模型设置。","oobe.openSettings":"打开设置","oobe.dismiss":"忽略","oobe.done":"完成","palette.placeholder":"输入以跳转到代理、工作区操作或斜杠命令…","palette.hideWorkspace":"隐藏工作区","palette.showWorkspace":"显示工作区","palette.hideWorkspaceDesc":"隐藏工作区侧边栏。","palette.showWorkspaceDesc":"显示工作区侧边栏。","palette.exitChatOnly":"退出仅聊天模式","palette.chatOnly":"仅聊天模式","palette.exitChatOnlyDesc":"返回分屏工作区布局。","palette.chatOnlyDesc":"切换到仅聊天布局。","palette.groupAgents":"代理","palette.groupWorkspace":"工作区","palette.groupSlash":"斜杠命令","palette.hintMove":"移动","palette.hintSelect":"选择","palette.hintPopOut":"弹出","palette.hintClose":"关闭","settings.appliedNotice":"设置已应用。更改将在下一回合生效。","settings.sessions.lifecycle":"会话生命周期","settings.sessions.autoRotate":"自动轮换会话","settings.sessions.maxSize":"最大会话大小（MB）","settings.sessions.maxSizeAria":"最大会话大小","settings.sessions.agentBehaviour":"代理行为","settings.sessions.toolBudget":"工具使用预算","settings.sessions.toolBudgetAria":"工具使用预算","settings.sessions.toolBudgetHint":"每回合最大工具调用消息数","settings.sessions.isolation":"会话隔离","settings.sessions.isolationNone":"无 — 完全跨会话可见","settings.sessions.isolationSummary":"摘要 — 工具可见，无参数","settings.sessions.isolationFull":"完全 — 会话之间不可见","settings.editor.heading":"编辑器","settings.editor.vimMode":"Vim 模式","settings.editor.showWhitespace":"显示空白字符","settings.editor.livePreview":"Markdown 实时预览","settings.editor.fontSize":"字号（px）","settings.editor.fontSizeAria":"编辑器字号","settings.editor.fontFamily":"字体","settings.editor.fontFamilyPlaceholder":"monospace（默认）","settings.editor.localOnlyHint":"仅限此浏览器。编辑器更改存储在本地浏览器中，并在下次打开或重新加载文件标签页时生效。","settings.appearance.syncing":"正在同步外观…","settings.appearance.default":"默认","settings.appearance.autoLightDark":"自动（浅色/深色）","settings.appearance.tint":"色调：","settings.appearance.clearTint":"清除色调","settings.appearance.none":"无","settings.keyboard.heading":"键盘","settings.keyboard.hint1":"将应用级快捷键自定义为逗号分隔的绑定。更改立即生效。","settings.keyboard.hint1b":"已保留用于关闭/中止，无法重新绑定。","settings.keyboard.hint2mid":"以及键入","settings.keyboard.hint2end":"（在输入框外）可打开此面板。","settings.keyboard.resetAll":"全部重置为默认","settings.keyboard.defaultColon":"默认：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"默认","settings.keyboard.noMatch":"没有匹配此筛选的快捷键。","settings.keyboard.invalidShortcut":"无效快捷键：{token}。Escape 已保留，无法重新绑定。","settings.keyboard.saved":"快捷键已保存。","settings.keyboard.resetOne":"快捷键已重置为默认。","settings.keyboard.resetAllDone":"快捷键已全部重置为默认。","settings.workspace.serverApplied":"工作区设置已应用。服务器端限制立即影响新的工作区请求。","settings.workspace.browserApplied":"浏览器工作区设置已在此标签页立即应用。","settings.workspace.access":"访问","settings.workspace.enableTerminal":"启用 Web 终端","settings.workspace.allowVnc":"允许直接 VNC 目标","settings.workspace.accessHint":"终端访问立即更新。直接 VNC 目标策略适用于新的 VNC 请求。","settings.workspace.guardrails":"服务器扫描防护","settings.workspace.maxDepth":"最大树深度","settings.workspace.maxDepthAria":"工作区树最大深度","settings.workspace.maxDepthHintPre":"限制所有","settings.workspace.maxDepthHintPost":"请求","settings.workspace.maxEntries":"每次扫描最大条目数","settings.workspace.maxEntriesAria":"工作区树最大条目数","settings.workspace.maxEntriesHint":"更早截断超大的树遍历","settings.workspace.thisBrowser":"此浏览器","settings.workspace.refreshInterval":"刷新间隔（秒）","settings.workspace.refreshIntervalAria":"工作区刷新间隔","settings.workspace.folderDepth":"文件夹预览扫描深度","settings.workspace.folderDepthAria":"文件夹预览扫描深度","settings.workspace.folderDepthHintPre":"设为","settings.workspace.folderDepthHintPost":"以禁用文件夹大小预览扫描","settings.workspace.footerHint":"根目录和文件夹展开的树加载保持较浅；文件夹大小预览是 UI 中最深的工作区扫描。","settings.models.thinkingLevel":"思考级别","settings.models.noThinking":"当前模型不支持思考。","settings.models.thinkingLevelLabel":"思考级别：","settings.models.loading":"正在加载模型…","settings.models.summary":"在狭窄面板中，模型和提供商名称可能换行以避免裁切。","settings.models.scopedOnly":"仅限范围内模型","settings.models.scopedCheckboxPre":"使用 Pi 的","settings.models.scopedCheckboxPost":"作为 Piclaw 模型列表","settings.models.scopedHintPre":"筛选此选择器和","settings.models.scopedHintPost":"工具。TUI 模型选择保持不变。","settings.models.colModel":"模型","settings.models.colProvider":"提供商","settings.models.colContext":"上下文","settings.models.colReasoning":"推理","settings.models.noMatch":"没有匹配 “{filter}” 的模型","settings.tools.unavailable":"工具数据不可用。","settings.tools.search":"搜索","settings.tools.matchMode":"匹配模式","settings.tools.orMode":"任意关键词（OR）— 结果至少匹配一个搜索词","settings.tools.andMode":"所有关键词（AND）— 结果必须匹配每个搜索词","settings.tools.colEnabled":"已启用","settings.tools.colTool":"工具","settings.tools.colCompact":"压缩","settings.tools.colKind":"类型","settings.tools.colSummary":"摘要","settings.tools.colSource":"来源","settings.tools.disableCompaction":"为此工具禁用工具结果压缩","settings.tools.enableCompaction":"为此工具启用工具结果压缩","settings.tools.noMatch":"没有匹配 “{filter}” 的工具","settings.tools.footer":"工具激活由代理运行时管理。组复选框可折叠/展开；“压缩”列控制工具结果压缩资格。","settings.environment.heading":"环境","settings.environment.introPre":"仅显示非 keychain 环境变量。覆盖项存储在扩展 KV 中并应用于","settings.environment.introPost":"，因此后续工具调用会继承它们。","settings.environment.refresh":"刷新","settings.environment.addOverride":"添加覆盖","settings.environment.valuePlaceholder":"值","settings.environment.save":"保存","settings.environment.countLine":"{count} 个变量可见 • {overrides} 个覆盖生效 • {keychain} 个 keychain 注入变量已隐藏","settings.environment.overridden":"在 KV 中覆盖","settings.environment.inherited":"继承自进程环境","settings.environment.kindOverride":"覆盖","settings.environment.kindProcess":"进程","settings.environment.clear":"清除","settings.environment.noMatch":"没有匹配 “{filter}” 的环境变量。","settings.environment.refreshedToast":"环境已刷新。","settings.environment.savedToast":"已保存 {name} 的环境覆盖。","settings.environment.clearedToast":"已清除 {name} 的环境覆盖。","settings.quickActions.loading":"加载中…","settings.quickActions.heading":"时间线快捷操作","settings.quickActions.intro":"选择哪些操作出现在时间线预输入中。代理始终优先固定，然后是工作区命令，再是斜杠命令。","settings.quickActions.enableAll":"全部启用","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存并应用","settings.quickActions.workspaceCommands":"工作区命令","settings.quickActions.noWorkspaceMatch":"没有匹配此筛选的工作区命令。","settings.quickActions.slashCommands":"斜杠命令","settings.quickActions.slashFallback":"斜杠命令","settings.quickActions.noSlashMatch":"没有匹配此筛选的斜杠命令。","settings.quickActions.savingToast":"正在保存快捷操作…","settings.quickActions.savedToast":"快捷操作已保存。","settings.providers.authApiKey":"API 密钥","settings.providers.authConfigured":"已配置","settings.providers.heading":"提供商","settings.providers.tagCustom":"自定义","settings.providers.logout":"注销","settings.providers.reconfigure":"重新配置","settings.providers.setUp":"设置","settings.providers.setupHint":"登录流程在浏览器中打开。在狭窄面板中，设置表单会垂直堆叠以避免裁切。","settings.providers.starting":"启动中…","settings.providers.signInOAuth":"使用 OAuth 登录","settings.providers.apiKeyLabel":"API 密钥","settings.providers.apiKeyPlaceholder":"输入 API 密钥","settings.providers.save":"保存","settings.providers.configuring":"配置中…","settings.providers.saveConfig":"保存配置","settings.providers.apiKeyEmpty":"API 密钥不能为空。","settings.providers.configuringToast":"正在配置 {provider}…","settings.providers.configured":"{provider} 已配置。","settings.providers.startingOAuth":"正在为 {provider} 启动 OAuth…","settings.providers.oauthOpened":"OAuth 窗口已打开。完成登录流程，然后关闭此消息。","settings.providers.oauthStarted":"已为 {provider} 启动 OAuth 流程。请查看聊天。","settings.providers.loggingOut":"正在注销 {provider}…","settings.providers.loggedOut":"已注销 {provider}。可能需要重启。","settings.general.identity":"身份","settings.general.userLabel":"用户","settings.general.yourName":"你的名字","settings.general.agentLabel":"代理","settings.general.agentName":"代理名称","settings.general.notifications":"通知","settings.general.browserNotifications":"浏览器通知","settings.general.notifSecureHint":"使用输入栏中的 \uD83D\uDD14 铃铛按钮来启用/禁用通知。Web Push 需要 HTTPS 或 localhost。","settings.general.notifInsecureHint":"⚠ 不可用 — 需要安全上下文（HTTPS 或 localhost）。通过 SSH 隐道或带 TLS 的反向代理访问以启用。","settings.general.display":"显示","settings.general.systemMeters":"系统仪表","settings.general.systemMetersHint":"状态栏中的 CPU/内存/网络仪表。仅限此浏览器。","settings.general.instanceConfig":"实例配置","settings.general.composeUpload":"撰写上传（MB）","settings.general.composeUploadAria":"撰写上传限制","settings.general.composeUploadHint":"聊天/媒体附件","settings.general.workspaceUpload":"工作区上传（MB）","settings.general.workspaceUploadAria":"工作区上传限制","settings.general.workspaceUploadHint":"默认为 256 MB；分块上传最多允许 1 GB","settings.general.authentication":"身份验证","settings.general.widgetToken":"小部件 bearer 令牌","settings.general.token":"令牌","settings.general.hideToken":"隐藏令牌","settings.general.revealToken":"显示令牌","settings.general.copyToken":"复制令牌","settings.general.copied":"已复制","settings.general.regenerating":"正在重新生成…","settings.general.regenerate":"重新生成","settings.general.tokenHintPre":"只读令牌，用于","settings.general.tokenHintMid":"和","settings.general.tokenHintPost":"。用作","settings.general.tokenHintEnd":"。","settings.general.copyFailed":"无法复制小部件令牌。请选择令牌字段并手动复制。","settings.general.regenConfirm":"重新生成小部件令牌？使用旧令牌的现有 macOS 小部件将停止更新。","settings.general.totpTitle":"TOTP 设置二维码","settings.general.totpConfiguredHint":"当前 Web 登录验证器密钥。扫描此二维码以添加另一个验证器设备。","settings.general.totpUnconfiguredHint":"此实例尚未配置 TOTP，因此没有可用的设置二维码。","settings.general.issuer":"颁发者","settings.general.label":"标签","settings.general.secret":"密钥","settings.general.avatarUpload":"点击上传","settings.developer.heading":"开发者","settings.developer.devMode":"开发者模式","settings.developer.localHint":"仅限此浏览器。开发者模式开关和插件目录覆盖存储在本地浏览器存储中。","settings.developer.addonSources":"插件来源","settings.developer.catalogUrl":"目录 URL","settings.developer.catalogHint":"主插件目录 URL。留空以使用默认值","settings.developer.additionalCatalogs":"其他目录 URL","settings.developer.additionalHint":"在主/默认目录之外额外获取。每行一个 URL。","settings.developer.repoUrl":"仓库 URL","settings.developer.repoHintPre":"覆盖用于","settings.developer.repoHintPost":"安装的 git 仓库。留空以使用默认值。","settings.developer.debug":"调试","settings.developer.logSse":"记录 SSE 事件","settings.developer.logToolCalls":"记录工具调用","settings.developer.debugHint":"调试标志在下次页面重新加载时生效。","settings.addons.installing":"正在安装 {slug}…","settings.addons.removing":"正在移除 {slug}…","settings.addons.installedToast":"插件已安装。","settings.addons.removedToast":"插件已移除。","settings.addons.restarting":"正在重启 piclaw…","settings.addons.restartComplete":"重启完成 — 插件已刷新。","settings.addons.restartTimeout":"后端未能及时返回。请手动重新加载页面。","settings.addons.fetching":"正在获取插件…","settings.addons.loadFailed":"无法加载插件。","settings.addons.catalogFromPre":"目录来自","settings.addons.catalogMerged":"已合并 {count} 个目录来源。","settings.addons.installNote":"通过 Bun 优先安装包；安装/卸载后需要重启。","settings.addons.failedFetchSingular":"获取 {count} 个目录来源失败：","settings.addons.failedFetchPlural":"获取 {count} 个目录来源失败：","settings.addons.activeSources":"活动目录来源（{count}）","settings.addons.windowsWarning":"原生 Windows 插件安装风险更高：Bun 包安装、符号链接清理、锁定文件和重启时机都可能不如 Linux/WSL 可预测。如果可能，请优先使用 WSL 或容器。","settings.addons.typeExtSkill":"扩展 + 技能","settings.addons.typeSkill":"技能","settings.addons.typeExt":"扩展","settings.addons.update":"更新","settings.addons.remove":"移除","settings.addons.install":"安装","settings.addons.noMatch":"没有匹配 “{filter}” 的插件","settings.addons.restartNotice":"扩展更改已安装，但在 piclaw 重启之前处于非活动状态。","settings.addons.restartNow":"立即重启","settings.recordings.modeFull":"完整 / 受信任","settings.recordings.modeMetadata":"仅元数据","settings.recordings.modeRedacted":"已脱敏","settings.recordings.selectPrompt":"选择一个录制以检查、回放、导出或删除。","settings.recordings.playback":"回放","settings.recordings.refresh":"刷新","settings.recordings.delete":"删除","settings.recordings.status":"状态","settings.recordings.mode":"模式","settings.recordings.chat":"聊天","settings.recordings.started":"开始","settings.recordings.ended":"结束","settings.recordings.events":"事件","settings.recordings.redactions":"脱敏","settings.recordings.exportJson":"导出 JSON","settings.recordings.exportJsonl":"导出 JSONL","settings.recordings.exportHtml":"导出独立 HTML","settings.recordings.eventSummary":"事件摘要","settings.recordings.inspectHint":"打开或刷新详情以检查跟踪事件。","settings.recordings.firstEvents":"首批事件","settings.recordings.heading":"会话录制","settings.recordings.intro":"选择性加入的跟踪捕获，用于确定性回放和屏幕录制导出。回放绝不会调用实时代理或工具端点。","settings.recordings.chatJid":"聊天 JID","settings.recordings.title":"标题","settings.recordings.titlePlaceholder":"演示录制","settings.recordings.modeLabelField":"模式","settings.recordings.optRedacted":"已脱敏","settings.recordings.optMetadata":"仅元数据","settings.recordings.optFull":"完整 / 受信任本地","settings.recordings.includeSnapshot":"包含时间线快照","settings.recordings.extraKeys":"额外脱敏键","settings.recordings.extraPatterns":"额外正则模式","settings.recordings.stopCurrent":"停止当前聊天录制","settings.recordings.start":"开始录制","settings.recordings.redactionPreview":"脱敏预览","settings.recordings.previewRedaction":"预览脱敏","settings.recordings.loading":"正在加载录制…","settings.recordings.noneYet":"还没有录制。","settings.recordings.noneYetHint":"在上方开始录制，然后使用回放/导出进行确定性屏幕捕获。","settings.recordings.listLabel":"会话录制","settings.recordings.eventsCount":"{count} 个事件","settings.recordings.noMatch":"没有匹配 “{filter}” 的录制。","settings.recordings.startedToast":"已为 {chat} 开始录制。","settings.recordings.startFailed":"开始录制失败。","settings.recordings.stoppedToast":"已为 {chat} 停止录制。","settings.recordings.stopFailed":"停止录制失败。","settings.recordings.deleteConfirm":"删除录制 {id}？","settings.recordings.deletedToast":"录制已删除。","settings.recordings.deleteFailed":"删除录制失败。","settings.recordings.loadOneFailed":"加载录制失败。","settings.recordings.loadFailed":"加载录制失败。","settings.recordings.previewFailed":"预览失败。","settings.keychain.loadFailed":"加载密钥链失败。","settings.keychain.addFailed":"添加条目失败。","settings.keychain.deleteFailed":"删除条目失败。","settings.keychain.saveNotesFailed":"保存备注失败。","settings.keychain.revealFailed":"显示失败。","settings.keychain.loading":"正在加载密钥链…","settings.keychain.entryCountSingular":"{count} 个条目","settings.keychain.entryCountPlural":"{count} 个条目","settings.keychain.matchingFilter":' 匹配 "{filter}"',"settings.keychain.encryptedSuffix":"，静态加密。","settings.keychain.clickPrefix":"点击","settings.keychain.revealSuffix":"以显示。","settings.keychain.cancel":"取消","settings.keychain.addEntry":"+ 添加条目","settings.keychain.namePlaceholder":"条目名称（例如 github/my-token）","settings.keychain.secretPlaceholder":"密钥值","settings.keychain.usernamePlaceholder":"用户名（可选）","settings.keychain.saving":"正在保存…","settings.keychain.save":"保存","settings.keychain.userNotePlaceholder":"用户备注（仅在此界面可见）","settings.keychain.agentNotePlaceholder":"代理备注（可安全暴露给代理）","settings.keychain.noMatchFilter":"没有条目匹配筛选条件。","settings.keychain.noEntries":"没有密钥链条目。","settings.keychain.hideSecret":"隐藏密钥","settings.keychain.revealSecret":"显示密钥","settings.keychain.deleteQ":"删除？","settings.keychain.yes":"是","settings.keychain.no":"否","settings.keychain.deleteTitle":"删除","settings.keychain.userNote":"用户备注","settings.keychain.agentNote":"代理可读备注","settings.keychain.userNoteHint":"仅限人工/界面备注","settings.keychain.agentNoteHint":"给代理的安全指引","settings.keychain.saveNotes":"保存备注","settings.keychain.masterPassword":"主密码：","settings.keychain.masterPasswordPlaceholder":"输入密钥链主密码","settings.keychain.unlock":"解锁","settings.keychain.totpCode":"TOTP 代码：","settings.keychain.verify":"验证","settings.keychain.username":"用户名","settings.keychain.copyUsername":"复制用户名","settings.keychain.secret":"密钥","settings.keychain.copySecret":"复制密钥","menu.title":"菜单","menu.showWorkspace":"显示工作区","menu.hideWorkspace":"隐藏工作区","menu.openExplorer":"打开资源管理器","menu.chatOnly":"仅聊天模式","menu.exitChatOnly":"退出仅聊天模式","menu.openTerminal":"在标签页中打开终端","menu.openVnc":"在标签页中打开 VNC","menu.newFile":"新建文件","menu.openRecent":"打开最近文件","menu.refreshTree":"刷新目录树","menu.reindex":"重建工作区索引","menu.showHidden":"显示隐藏文件","menu.hideHidden":"隐藏隐藏文件","menu.scale":"缩放","menu.settings":"设置"},au={"compose.placeholder":"メッセージ（Enterで送信、Shift+Enterで改行）...","compose.send":"送信","compose.stop":"停止","compose.searchPlaceholder":"検索（Enterで実行）...","compose.clearAll":"すべてクリア","compose.clearAllTitle":"すべての添付と参照をクリア","compose.scope":"範囲","compose.searchScope":"検索範囲","compose.scopeCurrent":"現在","compose.scopeBranchFamily":"ブランチファミリー","compose.scopeAll":"すべてのチャット","compose.filterImages":"画像","compose.filterAttachments":"添付","compose.search":"検索","compose.closeSearch":"検索を閉じる","compose.shareLocation":"位置を共有","compose.attachFile":"ファイルを添付","compose.queueControls":"キュー済みフォローアップの操作","compose.moveUp":"上に移動","compose.moveUpQueue":"キュー内で上に移動","compose.moveDown":"下に移動","compose.moveDownQueue":"キュー内で下に移動","compose.editInCompose":"入力欄で編集","compose.returnToEditor":"キュー済みメッセージを入力欄に戻す","compose.injectSteer":"キュー済みフォローアップをステアとして挿入","compose.steer":"ステア","compose.cancelQueued":"キュー済みメッセージをキャンセル","compose.resizeInput":"メッセージ入力欄のサイズ変更","compose.resizeInputHint":"ドラッグしてメッセージ入力欄のサイズを変更","compose.modelPicker":"モデルピッカー","compose.sessionsAndAgents":"セッションとエージェント","compose.openModelPicker":"モデルピッカーを開く","compose.newBranchTitle":"このチャットから新しいブランチを作成","compose.newRootTitle":"web:ops のようなクリーンなルートセッションを作成","compose.renameSessionTitle":"現在のセッションの名前を変更","compose.pruneSessionTitle":"現在のエージェント/セッションブランチを削除（プルーン）","compose.filterImagesTitle":"画像付きメッセージのみ表示","compose.filterAttachmentsTitle":"添付付きメッセージのみ表示","compose.selectModel":"モデルを選択","compose.loadingModels":"モデルを読み込み中…","compose.noModels":"利用可能なモデルがありません。","compose.nextModel":"次のモデル","compose.manageSessions":"セッションとエージェントを管理","compose.noSessions":"他のセッションはまだありません。","compose.newBranch":"新しいブランチ","compose.newRoot":"新しいルート…","compose.mergeCurrent":"現在を親にマージ","compose.renameCurrent":"現在の名前を変更…","compose.deleteCurrent":"現在を削除…","compose.mergeInto":"このブランチを {target} にマージ","compose.mergeBlocked":"このブランチはアクティブな間または子がある間はマージできません","workspace.title":"ワークスペース","workspace.newFile":"新規ファイル","workspace.refresh":"更新","workspace.actions":"ワークスペース操作","workspace.uploadFiles":"ファイルをアップロード","workspace.reindexing":"ワークスペースを再インデックス中…","workspace.deleteFile":"ファイルを削除","workspace.download":"ダウンロード","workspace.uploadToFolder":"このフォルダにファイルをアップロード","workspace.addFolderHint":"フォルダのヒントを入力欄に追加","workspace.downloadZip":"フォルダをzipでダウンロード","workspace.openInTab":"タブで開く","workspace.openInEditor":"エディタで開く","workspace.renameSelected":"選択項目の名前を変更","workspace.downloadSelectedFile":"選択したファイルをダウンロード","workspace.downloadSelectedFolder":"選択したフォルダをダウンロード（zip）","workspace.deleteSelectedFile":"選択したファイルを削除","shell.settings":"設定","shell.newChat":"新規チャット","shell.connecting":"接続中…","shell.connected":"接続済み","language.label":"言語","settings.title":"設定","settings.close":"閉じる（Esc）","settings.filter":"フィルター…","settings.loading":"設定を読み込み中…","settings.section.general":"一般","settings.section.sessions":"セッション","settings.section.recordings":"録画","settings.section.compaction":"圧縮","settings.section.keyboard":"キーボード","settings.section.workspace":"ワークスペース","settings.section.environment":"環境","settings.section.providers":"プロバイダー","settings.section.models":"モデル","settings.section.theme":"外観","settings.section.scheduled-tasks":"スケジュールタスク","settings.section.quick-actions":"クイックアクション","settings.section.keychain":"キーチェーン","settings.section.tools":"ツール","settings.section.addons":"アドオン","settings.placeholder.recordings":"録画をフィルター…","settings.placeholder.keyboard":"ショートカットをフィルター…","settings.placeholder.environment":"環境をフィルター…","settings.placeholder.models":"モデルをフィルター…","settings.placeholder.scheduled-tasks":"スケジュールタスクをフィルター…","settings.placeholder.quick-actions":"クイックアクションをフィルター…","settings.placeholder.keychain":"エントリをフィルター…","settings.placeholder.tools":"ツールをフィルター…","settings.placeholder.addons":"アドオンをフィルター…","preview.close":"閉じる","preview.loading":"プレビューを読み込み中…","preview.files":"ファイル","preview.folders":"フォルダ","preview.compressed":"圧縮後","preview.uncompressed":"非圧縮","preview.name":"名前","preview.type":"種類","preview.method":"方式","preview.size":"サイズ","post.deleteMessage":"メッセージを削除","post.tooLarge":"メッセージが大きすぎて表示できません。","post.previewTruncated":"プレビューは切り詰められました。","post.submitted":"送信済み","post.discard":"破棄","post.save":"保存","post.cancel":"キャンセル","post.addNote":"メモを追加","post.addNotePlaceholder":"メモを追加…","tab.close":"閉じる","tab.closeOthers":"他を閉じる","tab.closeAll":"すべて閉じる","tab.reattach":"再アタッチ","tab.openInWindow":"ウィンドウで開く","tab.openInNewTab":"新しいタブで開く","tab.pinned":"ピン留め済み","tab.detached":"分離済み","tab.openSeparateWindow":"別ウィンドウで開く","status.trackedVariables":"追跡中の変数","status.attachToSession":"セッションにアタッチ","status.files":"ファイル","status.proposedDiff":"提案された差分","status.copyTmux":"tmuxコマンドをコピー","status.experimentDuration":"実験の経過時間","status.sinceLastActivity":"最後のアクティビティから","annotator.title":"画像に注釈","annotator.typeLabel":"ラベルを入力…","annotator.undo":"元に戻す","annotator.resetZoom":"ズームをリセット","tree.filter":"フィルター…","tree.sessionTree":"セッションツリー","btw.label":"BTW サイド会話","btw.close":"BTW を閉じる","btw.thinking":"思考中","mdpreview.close":"プレビューを閉じる","mdpreview.unavailable":"プレビューを利用できません","widget.close":"ウィジェットを閉じる","oobe.gettingStarted":"はじめに","oobe.needsSetupTitle":"インスタンスのセットアップが必要","oobe.configuredTitle":"インスタンスは設定済み","oobe.needsSetupBody":"このインスタンスはまだ設定されていません。設定を開き、AIプロバイダー/モデルを設定してリクエストの送信を開始してください。","oobe.configuredBody":"このインスタンスは設定済みのようです。設定でプロバイダーとモデルの設定を確認または更新してください。","oobe.openSettings":"設定を開く","oobe.dismiss":"閉じる","oobe.done":"完了","palette.placeholder":"入力してエージェント、ワークスペース操作、またはスラッシュコマンドにジャンプ…","palette.hideWorkspace":"ワークスペースを非表示","palette.showWorkspace":"ワークスペースを表示","palette.hideWorkspaceDesc":"ワークスペースサイドバーを非表示にします。","palette.showWorkspaceDesc":"ワークスペースサイドバーを表示します。","palette.exitChatOnly":"チャットのみモードを終了","palette.chatOnly":"チャットのみモード","palette.exitChatOnlyDesc":"分割ワークスペースレイアウトに戻ります。","palette.chatOnlyDesc":"チャットのみのレイアウトに切り替えます。","palette.groupAgents":"エージェント","palette.groupWorkspace":"ワークスペース","palette.groupSlash":"スラッシュコマンド","palette.hintMove":"移動","palette.hintSelect":"選択","palette.hintPopOut":"ポップアウト","palette.hintClose":"閉じる","settings.appliedNotice":"設定を適用しました。変更は次のターンから有効になります。","settings.sessions.lifecycle":"セッションのライフサイクル","settings.sessions.autoRotate":"セッションを自動ローテーション","settings.sessions.maxSize":"最大セッションサイズ（MB）","settings.sessions.maxSizeAria":"最大セッションサイズ","settings.sessions.agentBehaviour":"エージェントの動作","settings.sessions.toolBudget":"ツール使用予算","settings.sessions.toolBudgetAria":"ツール使用予算","settings.sessions.toolBudgetHint":"1ターンあたりの最大ツール呼び出しメッセージ数","settings.sessions.isolation":"セッションの分離","settings.sessions.isolationNone":"なし — セッション間で完全に可視","settings.sessions.isolationSummary":"概要 — ツールは可視、引数は非表示","settings.sessions.isolationFull":"完全 — セッション同士は互いに見えない","settings.editor.heading":"エディター","settings.editor.vimMode":"Vim モード","settings.editor.showWhitespace":"空白文字を表示","settings.editor.livePreview":"Markdown ライブプレビュー","settings.editor.fontSize":"フォントサイズ（px）","settings.editor.fontSizeAria":"エディターのフォントサイズ","settings.editor.fontFamily":"フォントファミリー","settings.editor.fontFamilyPlaceholder":"monospace（デフォルト）","settings.editor.localOnlyHint":"このブラウザーのみ。エディターの変更はローカルブラウザーストレージに保存され、次にファイルタブを開くか再読み込みしたときに有効になります。","settings.appearance.syncing":"外観を同期中…","settings.appearance.default":"デフォルト","settings.appearance.autoLightDark":"自動（ライト/ダーク）","settings.appearance.tint":"色調：","settings.appearance.clearTint":"色調をクリア","settings.appearance.none":"なし","settings.keyboard.heading":"キーボード","settings.keyboard.hint1":"アプリ全体のショートカットをカンマ区切りのバインディングとしてカスタマイズします。変更はすぐに反映されます。","settings.keyboard.hint1b":"は閉じる/中止用に予約されており、再割り当てできません。","settings.keyboard.hint2mid":"と入力","settings.keyboard.hint2end":"を入力欄の外で押すとこのペインが開きます。","settings.keyboard.resetAll":"すべてデフォルトにリセット","settings.keyboard.defaultColon":"デフォルト：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"デフォルト","settings.keyboard.noMatch":"このフィルターに一致するショートカットはありません。","settings.keyboard.invalidShortcut":"無効なショートカット：{token}。Escape は予約されており、再割り当てできません。","settings.keyboard.saved":"キーボードショートカットを保存しました。","settings.keyboard.resetOne":"キーボードショートカットをデフォルトにリセットしました。","settings.keyboard.resetAllDone":"キーボードショートカットをすべてデフォルトにリセットしました。","settings.workspace.serverApplied":"ワークスペース設定を適用しました。サーバー側の制限は新しいワークスペースリクエストに直ちに反映されます。","settings.workspace.browserApplied":"ブラウザーのワークスペース設定はこのタブで直ちに適用されました。","settings.workspace.access":"アクセス","settings.workspace.enableTerminal":"Web ターミナルを有効化","settings.workspace.allowVnc":"直接 VNC ターゲットを許可","settings.workspace.accessHint":"ターミナルアクセスは直ちに更新されます。直接 VNC ターゲットポリシーは新しい VNC リクエストに適用されます。","settings.workspace.guardrails":"サーバースキャンのガードレール","settings.workspace.maxDepth":"最大ツリー深度","settings.workspace.maxDepthAria":"ワークスペースツリーの最大深度","settings.workspace.maxDepthHintPre":"すべての","settings.workspace.maxDepthHintPost":"リクエストを制限します","settings.workspace.maxEntries":"スキャンあたりの最大エントリ数","settings.workspace.maxEntriesAria":"ワークスペースツリーの最大エントリ数","settings.workspace.maxEntriesHint":"大きすぎるツリー走査を早めに打ち切ります","settings.workspace.thisBrowser":"このブラウザー","settings.workspace.refreshInterval":"更新間隔（秒）","settings.workspace.refreshIntervalAria":"ワークスペース更新間隔","settings.workspace.folderDepth":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthAria":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthHintPre":"","settings.workspace.folderDepthHintPost":"に設定するとフォルダサイズのプレビュースキャンを無効化します","settings.workspace.footerHint":"ルートおよびフォルダ展開のツリー読み込みは浅いままです。フォルダサイズのプレビューは UI で最も深いワークスペーススキャンです。","settings.models.thinkingLevel":"思考レベル","settings.models.noThinking":"現在のモデルは思考をサポートしていません。","settings.models.thinkingLevelLabel":"思考レベル：","settings.models.loading":"モデルを読み込み中…","settings.models.summary":"狭いペインでは、クリッピングを避けるためにモデル名とプロバイダー名が折り返される場合があります。","settings.models.scopedOnly":"スコープ付きモデルのみ","settings.models.scopedCheckboxPre":"Piclaw のモデル一覧に Pi の","settings.models.scopedCheckboxPost":"を使用","settings.models.scopedHintPre":"このピッカーと","settings.models.scopedHintPost":"ツールをフィルタリングします。TUI のモデル選択は変更されません。","settings.models.colModel":"モデル","settings.models.colProvider":"プロバイダー","settings.models.colContext":"コンテキスト","settings.models.colReasoning":"推論","settings.models.noMatch":"「{filter}」に一致するモデルはありません","settings.tools.unavailable":"ツールデータを利用できません。","settings.tools.search":"検索","settings.tools.matchMode":"マッチモード","settings.tools.orMode":"いずれかのキーワード（OR）— 少なくとも1つの検索語に一致","settings.tools.andMode":"すべてのキーワード（AND）— すべての検索語に一致","settings.tools.colEnabled":"有効","settings.tools.colTool":"ツール","settings.tools.colCompact":"コンパクト","settings.tools.colKind":"種類","settings.tools.colSummary":"概要","settings.tools.colSource":"ソース","settings.tools.disableCompaction":"このツールのツール結果コンパクションを無効化","settings.tools.enableCompaction":"このツールのツール結果コンパクションを有効化","settings.tools.noMatch":"「{filter}」に一致するツールはありません","settings.tools.footer":"ツールのアクティベーションはエージェントランタイムが管理します。グループのチェックボックスで折りたたみ/展開でき、「コンパクト」列はツール結果コンパクションの対象可否を制御します。","settings.environment.heading":"環境","settings.environment.introPre":"キーチェーン以外の環境変数のみを表示しています。オーバーライドは拡張機能の KV に保存され、","settings.environment.introPost":"に適用されるため、以降のツール呼び出しに継承されます。","settings.environment.refresh":"更新","settings.environment.addOverride":"オーバーライドを追加","settings.environment.valuePlaceholder":"値","settings.environment.save":"保存","settings.environment.countLine":"{count} 個の変数を表示 • {overrides} 個のオーバーライドが有効 • {keychain} 個のキーチェーン注入変数を非表示","settings.environment.overridden":"KV でオーバーライド","settings.environment.inherited":"プロセス環境から継承","settings.environment.kindOverride":"オーバーライド","settings.environment.kindProcess":"プロセス","settings.environment.clear":"クリア","settings.environment.noMatch":"「{filter}」に一致する環境変数はありません。","settings.environment.refreshedToast":"環境を更新しました。","settings.environment.savedToast":"{name} の環境オーバーライドを保存しました。","settings.environment.clearedToast":"{name} の環境オーバーライドをクリアしました。","settings.quickActions.loading":"読み込み中…","settings.quickActions.heading":"タイムラインクイックアクション","settings.quickActions.intro":"タイムラインのタイプアヘッドに表示するアクションを選択します。エージェントは常に最初に固定され、次にワークスペースコマンド、その次にスラッシュコマンドが表示されます。","settings.quickActions.enableAll":"すべて有効化","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存して適用","settings.quickActions.workspaceCommands":"ワークスペースコマンド","settings.quickActions.noWorkspaceMatch":"このフィルターに一致するワークスペースコマンドはありません。","settings.quickActions.slashCommands":"スラッシュコマンド","settings.quickActions.slashFallback":"スラッシュコマンド","settings.quickActions.noSlashMatch":"このフィルターに一致するスラッシュコマンドはありません。","settings.quickActions.savingToast":"クイックアクションを保存中…","settings.quickActions.savedToast":"クイックアクションを保存しました。","settings.providers.authApiKey":"API キー","settings.providers.authConfigured":"設定済み","settings.providers.heading":"プロバイダー","settings.providers.tagCustom":"カスタム","settings.providers.logout":"ログアウト","settings.providers.reconfigure":"再設定","settings.providers.setUp":"セットアップ","settings.providers.setupHint":"サインインフローはブラウザーで開きます。狭いペインではセットアップフォームが縦に積み重なってクリッピングを防ぎます。","settings.providers.starting":"開始中…","settings.providers.signInOAuth":"OAuth でサインイン","settings.providers.apiKeyLabel":"API キー","settings.providers.apiKeyPlaceholder":"API キーを入力","settings.providers.save":"保存","settings.providers.configuring":"設定中…","settings.providers.saveConfig":"設定を保存","settings.providers.apiKeyEmpty":"API キーを空にすることはできません。","settings.providers.configuringToast":"{provider} を設定中…","settings.providers.configured":"{provider} を設定しました。","settings.providers.startingOAuth":"{provider} の OAuth を開始中…","settings.providers.oauthOpened":"OAuth ウィンドウを開きました。サインインフローを完了してから、このメッセージを閉じてください。","settings.providers.oauthStarted":"{provider} の OAuth フローを開始しました。チャットを確認してください。","settings.providers.loggingOut":"{provider} をログアウト中…","settings.providers.loggedOut":"{provider} をログアウトしました。再起動が必要な場合があります。","settings.general.identity":"アイデンティティ","settings.general.userLabel":"ユーザー","settings.general.yourName":"あなたの名前","settings.general.agentLabel":"エージェント","settings.general.agentName":"エージェント名","settings.general.notifications":"通知","settings.general.browserNotifications":"ブラウザ通知","settings.general.notifSecureHint":"入力バーの \uD83D\uDD14 ベルボタンで通知を有効/無効にします。Web Push には HTTPS または localhost が必要です。","settings.general.notifInsecureHint":"⚠ 利用不可 — セキュアコンテキスト（HTTPS または localhost）が必要です。SSH トンネルまたは TLS 付きリバースプロキシ経由でアクセスして有効化してください。","settings.general.display":"表示","settings.general.systemMeters":"システムメーター","settings.general.systemMetersHint":"ステータスバーの CPU/メモリ/ネットワークメーター。このブラウザのみ。","settings.general.instanceConfig":"インスタンス設定","settings.general.composeUpload":"作成アップロード（MB）","settings.general.composeUploadAria":"作成アップロード上限","settings.general.composeUploadHint":"チャット/メディア添付","settings.general.workspaceUpload":"ワークスペースアップロード（MB）","settings.general.workspaceUploadAria":"ワークスペースアップロード上限","settings.general.workspaceUploadHint":"デフォルトは 256 MB。チャンクアップロードは最大 1 GB まで許可","settings.general.authentication":"認証","settings.general.widgetToken":"ウィジェット bearer トークン","settings.general.token":"トークン","settings.general.hideToken":"トークンを隠す","settings.general.revealToken":"トークンを表示","settings.general.copyToken":"トークンをコピー","settings.general.copied":"コピーしました","settings.general.regenerating":"再生成中…","settings.general.regenerate":"再生成","settings.general.tokenHintPre":"次の読み取り専用トークン：","settings.general.tokenHintMid":"および","settings.general.tokenHintPost":"。次として使用：","settings.general.tokenHintEnd":"。","settings.general.copyFailed":"ウィジェットトークンをコピーできませんでした。トークンフィールドを選択して手動でコピーしてください。","settings.general.regenConfirm":"ウィジェットトークンを再生成しますか？古いトークンを使用している既存の macOS ウィジェットは更新されなくなります。","settings.general.totpTitle":"TOTP セットアップ QR","settings.general.totpConfiguredHint":"現在の Web ログイン認証システムのシークレット。この QR をスキャンして別の認証デバイスを追加します。","settings.general.totpUnconfiguredHint":"このインスタンスにはまだ TOTP が設定されていないため、セットアップ QR は利用できません。","settings.general.issuer":"発行者","settings.general.label":"ラベル","settings.general.secret":"シークレット","settings.general.avatarUpload":"クリックしてアップロード","settings.developer.heading":"開発者","settings.developer.devMode":"開発者モード","settings.developer.localHint":"このブラウザのみ。開発者モードの切り替えとアドオンカタログのオーバーライドはローカルブラウザストレージに保存されます。","settings.developer.addonSources":"アドオンソース","settings.developer.catalogUrl":"カタログ URL","settings.developer.catalogHint":"プライマリアドオンカタログ URL。空のままにするとデフォルトを使用します","settings.developer.additionalCatalogs":"追加カタログ URL","settings.developer.additionalHint":"プライマリ/デフォルトカタログに加えて取得されます。1 行に 1 つの URL。","settings.developer.repoUrl":"リポジトリ URL","settings.developer.repoHintPre":"git リポジトリを上書き（","settings.developer.repoHintPost":"インストール用）。空のままでデフォルト。","settings.developer.debug":"デバッグ","settings.developer.logSse":"SSE イベントをログ記録","settings.developer.logToolCalls":"ツール呼び出しをログ記録","settings.developer.debugHint":"デバッグフラグは次回のページ再読み込み時に有効になります。","settings.addons.installing":"{slug} をインストール中…","settings.addons.removing":"{slug} を削除中…","settings.addons.installedToast":"アドオンをインストールしました。","settings.addons.removedToast":"アドオンを削除しました。","settings.addons.restarting":"piclaw を再起動中…","settings.addons.restartComplete":"再起動完了 — アドオンを更新しました。","settings.addons.restartTimeout":"バックエンドが時間内に応答しませんでした。ページを手動で再読み込みしてください。","settings.addons.fetching":"アドオンを取得中…","settings.addons.loadFailed":"アドオンを読み込めませんでした。","settings.addons.catalogFromPre":"カタログの取得元：","settings.addons.catalogMerged":"{count} 個のカタログソースをマージしました。","settings.addons.installNote":"Bun によるパッケージ優先インストール。インストール/アンインストール後に再起動が必要です。","settings.addons.failedFetchSingular":"{count} 個のカタログソースの取得に失敗しました：","settings.addons.failedFetchPlural":"{count} 個のカタログソースの取得に失敗しました：","settings.addons.activeSources":"アクティブなカタログソース（{count}）","settings.addons.windowsWarning":"ネイティブ Windows のアドオンインストールはリスクが高くなります：Bun パッケージのインストール、シンボリックリンクのクリーンアップ、ロックされたファイル、再起動のタイミングは、Linux/WSL よりも予測しにくい場合があります。可能であれば WSL またはコンテナを優先してください。","settings.addons.typeExtSkill":"拡張機能 + スキル","settings.addons.typeSkill":"スキル","settings.addons.typeExt":"拡張機能","settings.addons.update":"更新","settings.addons.remove":"削除","settings.addons.install":"インストール","settings.addons.noMatch":"「{filter}」に一致するアドオンはありません","settings.addons.restartNotice":"拡張機能の変更はインストールされましたが、piclaw が再起動するまで非アクティブです。","settings.addons.restartNow":"今すぐ再起動","settings.recordings.modeFull":"完全 / 信頼済み","settings.recordings.modeMetadata":"メタデータのみ","settings.recordings.modeRedacted":"編集済み","settings.recordings.selectPrompt":"録画を選択して検査、再生、エクスポート、または削除します。","settings.recordings.playback":"再生","settings.recordings.refresh":"更新","settings.recordings.delete":"削除","settings.recordings.status":"ステータス","settings.recordings.mode":"モード","settings.recordings.chat":"チャット","settings.recordings.started":"開始","settings.recordings.ended":"終了","settings.recordings.events":"イベント","settings.recordings.redactions":"編集","settings.recordings.exportJson":"JSON をエクスポート","settings.recordings.exportJsonl":"JSONL をエクスポート","settings.recordings.exportHtml":"スタンドアロン HTML をエクスポート","settings.recordings.eventSummary":"イベント概要","settings.recordings.inspectHint":"詳細を開くか更新してトレースイベントを検査します。","settings.recordings.firstEvents":"最初のイベント","settings.recordings.heading":"セッション録画","settings.recordings.intro":"決定論的な再生と画面録画エクスポートのためのオプトイントレースキャプチャ。再生でライブエージェントやツールのエンドポイントを呼び出すことはありません。","settings.recordings.chatJid":"チャット JID","settings.recordings.title":"タイトル","settings.recordings.titlePlaceholder":"デモ録画","settings.recordings.modeLabelField":"モード","settings.recordings.optRedacted":"編集済み","settings.recordings.optMetadata":"メタデータのみ","settings.recordings.optFull":"完全 / 信頼済みローカル","settings.recordings.includeSnapshot":"タイムラインスナップショットを含める","settings.recordings.extraKeys":"追加の編集キー","settings.recordings.extraPatterns":"追加の正規表現パターン","settings.recordings.stopCurrent":"現在のチャット録画を停止","settings.recordings.start":"録画を開始","settings.recordings.redactionPreview":"編集プレビュー","settings.recordings.previewRedaction":"編集をプレビュー","settings.recordings.loading":"録画を読み込み中…","settings.recordings.noneYet":"まだ録画がありません。","settings.recordings.noneYetHint":"上で録画を開始し、再生/エクスポートを使用して決定論的な画面キャプチャを行います。","settings.recordings.listLabel":"セッション録画","settings.recordings.eventsCount":"{count} 件のイベント","settings.recordings.noMatch":"「{filter}」に一致する録画はありません。","settings.recordings.startedToast":"{chat} の録画を開始しました。","settings.recordings.startFailed":"録画の開始に失敗しました。","settings.recordings.stoppedToast":"{chat} の録画を停止しました。","settings.recordings.stopFailed":"録画の停止に失敗しました。","settings.recordings.deleteConfirm":"録画 {id} を削除しますか？","settings.recordings.deletedToast":"録画を削除しました。","settings.recordings.deleteFailed":"録画の削除に失敗しました。","settings.recordings.loadOneFailed":"録画の読み込みに失敗しました。","settings.recordings.loadFailed":"録画の読み込みに失敗しました。","settings.recordings.previewFailed":"プレビューに失敗しました。","settings.keychain.loadFailed":"キーチェーンの読み込みに失敗しました。","settings.keychain.addFailed":"エントリの追加に失敗しました。","settings.keychain.deleteFailed":"エントリの削除に失敗しました。","settings.keychain.saveNotesFailed":"メモの保存に失敗しました。","settings.keychain.revealFailed":"表示に失敗しました。","settings.keychain.loading":"キーチェーンを読み込み中…","settings.keychain.entryCountSingular":"{count} 件のエントリ","settings.keychain.entryCountPlural":"{count} 件のエントリ","settings.keychain.matchingFilter":" 「{filter}」に一致","settings.keychain.encryptedSuffix":"、保存時に暗号化。","settings.keychain.clickPrefix":"クリック","settings.keychain.revealSuffix":"で表示。","settings.keychain.cancel":"キャンセル","settings.keychain.addEntry":"+ エントリを追加","settings.keychain.namePlaceholder":"エントリ名（例：github/my-token）","settings.keychain.secretPlaceholder":"シークレット値","settings.keychain.usernamePlaceholder":"ユーザー名（任意）","settings.keychain.saving":"保存中…","settings.keychain.save":"保存","settings.keychain.userNotePlaceholder":"ユーザーメモ（この UI でのみ表示）","settings.keychain.agentNotePlaceholder":"エージェントメモ（エージェントに公開しても安全）","settings.keychain.noMatchFilter":"フィルターに一致するエントリはありません。","settings.keychain.noEntries":"キーチェーンエントリがありません。","settings.keychain.hideSecret":"シークレットを非表示","settings.keychain.revealSecret":"シークレットを表示","settings.keychain.deleteQ":"削除しますか？","settings.keychain.yes":"はい","settings.keychain.no":"いいえ","settings.keychain.deleteTitle":"削除","settings.keychain.userNote":"ユーザーメモ","settings.keychain.agentNote":"エージェント読み取り可能メモ","settings.keychain.userNoteHint":"人間/UI メモのみ","settings.keychain.agentNoteHint":"エージェント向けの安全なガイダンス","settings.keychain.saveNotes":"メモを保存","settings.keychain.masterPassword":"マスターパスワード：","settings.keychain.masterPasswordPlaceholder":"キーチェーンのマスターパスワードを入力","settings.keychain.unlock":"ロック解除","settings.keychain.totpCode":"TOTP コード：","settings.keychain.verify":"検証","settings.keychain.username":"ユーザー名","settings.keychain.copyUsername":"ユーザー名をコピー","settings.keychain.secret":"シークレット","settings.keychain.copySecret":"シークレットをコピー","menu.title":"メニュー","menu.showWorkspace":"ワークスペースを表示","menu.hideWorkspace":"ワークスペースを非表示","menu.openExplorer":"エクスプローラーを開く","menu.chatOnly":"チャットのみモード","menu.exitChatOnly":"チャットのみモードを終了","menu.openTerminal":"ターミナルをタブで開く","menu.openVnc":"VNC をタブで開く","menu.newFile":"新規ファイル","menu.openRecent":"最近のファイルを開く","menu.refreshTree":"ツリーを更新","menu.reindex":"ワークスペースを再インデックス","menu.showHidden":"隠しファイルを表示","menu.hideHidden":"隠しファイルを非表示","menu.scale":"拡大縮小","menu.settings":"設定"},nf={en:Yr,"zh-CN":mu,ja:au},Vn=Cn});function tr({children:n,className:i=""}){let[_,r]=w(null);return q(()=>{if(typeof document>"u")return;let c=document.createElement("div");return c.className=i||"",document.body.appendChild(c),r(c),()=>{try{Ln(null,c)}finally{c.remove()}}},[]),q(()=>{if(!_)return;_.className=i||"";return},[i,_]),Ti(()=>{if(!_)return;Ln(n,_);return},[n,_]),null}var Cr=O(()=>{e()});function v_(n,i){let _=String(n.label||"").localeCompare(String(i.label||""),void 0,{sensitivity:"base"});if(_!==0)return _;return String(n.id||"").localeCompare(String(i.id||""),void 0,{sensitivity:"base"})}function Jn(n){let i=Nn.findIndex((_)=>_.id===n.id);if(i>=0)Nn[i]=n;else Nn.push(n);Nn.sort(v_)}function N$(n){let i=Nn.findIndex((_)=>_.id===n);if(i>=0)Nn.splice(i,1)}function Jr(){return[...Nn]}function X$(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var Nn;var si=O(()=>{Nn=[]});function Ni(n){let i=typeof n==="string"?n.trim():"";return i?i:null}function Or(n={}){if(typeof window>"u")return;let i=Ni(n.section);try{if(window.__piclawSettingsOpenRequested=!0,i)window.__piclawSettingsRequestedSection=i;else delete window.__piclawSettingsRequestedSection}catch(_){console.debug("[settings-dialog-events] failed to record open request flags",_)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:i?{section:i}:void 0}))}function k_(){if(typeof window>"u")return null;return Ni(window.__piclawSettingsRequestedSection)}function Er(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),i=k_();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(_){console.debug("[settings-dialog-events] failed to clear open request flags",_)}return{open:n,section:i}}function Sr(n=typeof window<"u"?window:null){return n||null}function Xi(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function oi(n,i){return`${n}:${i}`}function er(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function mr(n,i){if(n.length<=i)return;n.splice(0,n.length-i)}function Xn(n){if(!n||typeof n!=="object")return null;return{...n}}function qn(n){if(!n)return null;return Qn.find((i)=>i.id===n)||null}function p_(n,i){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${i}`)}catch(_){console.debug("[app-perf] Ignoring performance.mark failure.",_,{traceId:n,phase:i})}}function ar(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let i=qn(n);if(!i)return;for(let _ of i.phases)performance.clearMarks(`piclaw:${n}:${_.phase}`)}catch(i){console.debug("[app-perf] Ignoring performance.clearMarks failure.",i,{traceId:n})}}function dr(n,i,_){let r=Mn.get(oi(n,i));if(r&&qn(r)?.status==="active")gi(r,"cancelled","superseded",{replacementType:n,replacementChatJid:i});let c=er(n),u={id:c,type:n,chatJid:i,startedAt:Xi(),detail:Xn(_),phases:[],status:"active"};return Qn.push(u),mr(Qn,100),Mn.set(oi(n,i),c),p_(c,"start"),c}function gi(n,i,_,r,c){let u=qn(n);if(!u||u.status!=="active")return;if(_)u.phases.push({phase:_,at:Xi(),detail:Xn(r)}),p_(u.id,_);if(u.status=i,u.completedAt=Xi(),u.durationMs=u.completedAt-u.startedAt,c!==void 0)u.error=c instanceof Error?c.message:String(c);let f=oi(u.type,u.chatJid);if(Mn.get(f)===u.id)Mn.delete(f);ar(u.id)}function gf(n=Sr()){let i=n?.__PICLAW_PERF__;if(i)return i;if(n)n.__PICLAW_PERF__=Qi;return Qi}function On(n=Sr()){return gf(n)}function q$(n,i,_){return On().ensureTrace(n,i,_)}function A$(n,i){return On().getActiveTraceId(n,i)}function Z$(n,i,_){On().markTrace(n,i,_)}function D$(n,i,_="settled",r){let c=qn(n);if(!c||c.status!=="active")return!1;let u=new Set(c.phases.map((f)=>f.phase));if(!i.every((f)=>u.has(f)))return!1;return gi(n,"completed",_,r),!0}function I$(n,i,_="failed",r){On().failTrace(n,i,_,r)}function Y$(n,i="cancelled",_){On().cancelTrace(n,i,_)}function K_(n){return On().recordRequest(n)}var Qn,$i,Mn,Qi;var nc=O(()=>{Qn=[],$i=[],Mn=new Map;Qi={startTrace(n,i,_){return dr(n,i,_)},ensureTrace(n,i,_){let r=Mn.get(oi(n,i));if(r&&qn(r)?.status==="active")return r;return dr(n,i,_)},getActiveTraceId(n,i){let _=Mn.get(oi(n,i));return _&&qn(_)?.status==="active"?_:null},markTrace(n,i,_){let r=qn(n);if(!r||r.status!=="active")return;r.phases.push({phase:i,at:Xi(),detail:Xn(_)}),p_(r.id,i)},completeTrace(n,i="settled",_){gi(n,"completed",i,_)},failTrace(n,i,_="failed",r){gi(n,"failed",_,r,i)},cancelTrace(n,i="cancelled",_){gi(n,"cancelled",i,_)},recordRequest(n){let i=er("req");return $i.push({...n,id:i,detail:Xn(n.detail)}),mr($i,300),i},getTraces(){return Qn.map((n)=>({...n,detail:Xn(n.detail),phases:n.phases.map((i)=>({...i,detail:Xn(i.detail)}))}))},getRequests(){return $i.map((n)=>({...n,detail:Xn(n.detail)}))},clear(){Qn.forEach((n)=>ar(n.id)),Qn.splice(0,Qn.length),$i.splice(0,$i.length),Mn.clear()},printSummary(){let n={traces:Qi.getTraces(),requests:Qi.getRequests()};return console.table(n.traces.map((i)=>({id:i.id,type:i.type,chatJid:i.chatJid,status:i.status,durationMs:Number(i.durationMs||0).toFixed(1),lastPhase:i.phases[i.phases.length-1]?.phase||"start"}))),n}}});function En(n){let i=Number(n||0);return Number.isFinite(i)&&i>0?i:null}function of(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function lf(n){let i=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(i)}function ic(n){let i=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(i)}function _c(n=typeof window<"u"?window:null){let i=En(n?.innerWidth)??En(n?.screen?.availWidth)??En(n?.screen?.width)??0,_=En(n?.innerHeight)??En(n?.screen?.availHeight)??En(n?.screen?.height)??0,r=i&&_?Math.min(i,_):i||_,c=i&&_?Math.max(i,_):i||_,u=of(n),f=Number(n?.navigator?.maxTouchPoints||0),$=u||f>1;if(r>0&&r<=640)return"mobile";if(lf(n)&&!ic(n))return"mobile";if(ic(n))return"tablet";if($&&r>0&&r<=1100)return"tablet";if(c>0&&c<=1180&&r>0&&r<=900)return"tablet";return"desktop"}var j0={};fn(j0,{uploadWorkspaceFile:()=>k0,uploadMedia:()=>Jf,updateWorkspaceFile:()=>o0,updateScheduledTask:()=>H_,submitAdaptiveCardAction:()=>Ef,streamSidePrompt:()=>df,stopSessionRecording:()=>j_,stopAutoresearch:()=>Zf,steerAgentQueueItem:()=>Lf,startSessionRecording:()=>W_,setWorkspaceVisibility:()=>z0,setAgentThoughtVisibility:()=>mf,sessionRecordingPlaybackUrl:()=>G_,sessionRecordingExportUrl:()=>li,sendPeerAgentMessage:()=>Rf,sendAgentMessage:()=>Bn,searchPosts:()=>bf,saveWorkspaceSettings:()=>X_,saveWebPushSubscription:()=>Nf,saveUiState:()=>T_,saveQuickActionsSettings:()=>N_,savePostAnnotations:()=>W0,saveEnvironmentOverride:()=>qi,restoreChatBranch:()=>Tf,respondToAgentRequest:()=>Of,reorderAgentQueueItem:()=>tf,renameWorkspaceFile:()=>K0,renameChatJid:()=>Pf,renameChatBranch:()=>Wf,removeAgentQueueItem:()=>Yf,reindexWorkspace:()=>s0,purgeChatBranch:()=>Gf,pruneChatBranch:()=>Uf,previewSessionRecordingRedaction:()=>P_,moveWorkspaceEntry:()=>h0,mergeChatBranchIntoParent:()=>jf,getWorkspaceTree:()=>c0,getWorkspaceRawUrl:()=>cc,getWorkspaceIndexStatus:()=>f0,getWorkspaceFileStat:()=>g0,getWorkspaceFileDownloadUrl:()=>H0,getWorkspaceFile:()=>$0,getWorkspaceDownloadUrl:()=>F0,getWorkspaceBranch:()=>u0,getWebPushPublicKey:()=>Vf,getTimeline:()=>yf,getThumbnailUrl:()=>n0,getThread:()=>vf,getSystemMetrics:()=>kf,getSessionRecordings:()=>F_,getSessionRecording:()=>Mi,getScheduledTasks:()=>z_,getQuickActionsSettings:()=>V_,getPostsByHashtag:()=>xf,getMediaUrl:()=>af,getMediaText:()=>_0,getMediaInfo:()=>i0,getMediaBlob:()=>r0,getEnvironmentSettings:()=>Q_,getChatBranches:()=>zf,getAutoresearchStatus:()=>Af,getAgents:()=>Qf,getAgentThought:()=>ef,getAgentStatus:()=>Mf,getAgentQueueState:()=>If,getAgentModels:()=>M_,getAgentContext:()=>qf,getAgentCommands:()=>R_,getActiveChatAgents:()=>Bf,forkChatBranch:()=>Hf,dismissAutoresearch:()=>Df,deleteWorkspaceFile:()=>B0,deleteWebPushSubscription:()=>Xf,deleteSessionRecording:()=>U_,deletePost:()=>hf,createWorkspaceFile:()=>p0,createRootChatSession:()=>Ff,createReply:()=>Kf,createPost:()=>pf,completeInstanceOobe:()=>Cf,attachWorkspaceFile:()=>l0,addToWhitelist:()=>Sf,SSEClient:()=>uc});function hn(n,i={}){if(String(i.method||"GET").toUpperCase()!=="GET")return D(n,i);let r=h_.get(n);if(r)return r;let c=D(n,i).finally(()=>{h_.delete(n)});return h_.set(n,c),c}async function D(n,i={}){let _=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),r;try{r=await fetch(_n+n,{...i,headers:{"Content-Type":"application/json",...i.headers}})}catch(u){throw K_({method:String(i.method||"GET").toUpperCase(),url:n,startedAt:_,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-_,ok:!1,detail:{failedBeforeResponse:!0}}),u}let c=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-_;if(K_({method:String(i.method||"GET").toUpperCase(),url:n,startedAt:_,durationMs:c,status:r.status,ok:r.ok,requestId:r.headers?.get?.("x-request-id")||null,serverTiming:r.headers?.get?.("Server-Timing")||null}),!r.ok){let u=await r.json().catch(()=>({error:"Unknown error"}));throw Error(u.error||`HTTP ${r.status}`)}return r.json()}function rc(n){let i=String(n||"").split(`
`),_="message",r=[];for(let u of i)if(u.startsWith("event:"))_=u.slice(6).trim()||"message";else if(u.startsWith("data:"))r.push(u.slice(5).trim());let c=r.join(`
`);if(!c)return null;try{return{event:_,data:JSON.parse(c)}}catch{return{event:_,data:c}}}async function wf(n,i){if(!n.body)throw Error("Missing event stream body");let _=n.body.getReader(),r=new TextDecoder,c="";while(!0){let{value:f,done:$}=await _.read();if($)break;c+=r.decode(f,{stream:!0});let o=c.split(`

`);c=o.pop()||"";for(let g of o){let x=rc(g);if(x)i(x.event,x.data)}}c+=r.decode();let u=rc(c);if(u)i(u.event,u.data)}async function yf(n=10,i=null,_=null){let r=`/timeline?limit=${n}`;if(i)r+=`&before=${i}`;if(_)r+=`&chat_jid=${encodeURIComponent(_)}`;return hn(r)}async function xf(n,i=50,_=0,r=null){let c=r?`&chat_jid=${encodeURIComponent(r)}`:"";return D(`/hashtag/${encodeURIComponent(n)}?limit=${i}&offset=${_}${c}`)}async function bf(n,i=50,_=0,r=null,c="current",u=null,f=null){let $=r?`&chat_jid=${encodeURIComponent(r)}`:"",o=c?`&scope=${encodeURIComponent(c)}`:"",g=u?`&root_chat_jid=${encodeURIComponent(u)}`:"",x=f?.images?"&images=1":"",l=f?.attachments?"&attachments=1":"";return D(`/search?q=${encodeURIComponent(n)}&limit=${i}&offset=${_}${$}${o}${g}${x}${l}`)}async function vf(n,i=null){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return D(`/thread/${n}${_}`)}async function kf(){return D("/agent/system-metrics")}async function z_(n={}){let i=new URLSearchParams;if(n?.id)i.set("id",String(n.id));if(n?.chatJid)i.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")i.set("status",String(n.status));if(n?.limit)i.set("limit",String(n.limit));if(n?.includeRunLogs)i.set("include_run_logs","1");if(n?.runLogLimit)i.set("run_log_limit",String(n.runLogLimit));let _=i.toString()?`?${i.toString()}`:"";return D(`/agent/scheduled-tasks${_}`)}async function H_(n,i,_={}){return D("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:i,allow_internal:_?.allowInternal===!0})})}async function F_(){return D("/agent/recordings")}async function Mi(n){return D(`/agent/recordings/${encodeURIComponent(n)}`)}async function W_(n={}){return D("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function j_(n={}){return D("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function U_(n){return D(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function li(n,i="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(i)}`}function G_(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function P_(n,i={}){return D("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...i})})}async function T_(n){return D("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function pf(n,i=[],_=null){let r=_?`?chat_jid=${encodeURIComponent(_)}`:"";return D(`/post${r}`,{method:"POST",body:JSON.stringify({content:n,media_ids:i})})}async function Kf(n,i,_=[],r=null){let c=r?`?chat_jid=${encodeURIComponent(r)}`:"";return D(`/post/reply${c}`,{method:"POST",body:JSON.stringify({thread_id:n,content:i,media_ids:_})})}async function hf(n,i=!1,_=null){let r=_?`&chat_jid=${encodeURIComponent(_)}`:"",c=`/post/${n}?cascade=${i?"true":"false"}${r}`;return D(c,{method:"DELETE"})}async function Bn(n,i,_=null,r=[],c=null,u=null){let f=u?`?chat_jid=${encodeURIComponent(u)}`:"",$={content:i,thread_id:_,media_ids:r,client_context:{screen_hint:_c()}};if(c==="auto"||c==="queue"||c==="steer")$.mode=c;return D(`/agent/${n}/message${f}`,{method:"POST",body:JSON.stringify($)})}async function R_(n="web:default"){let i=typeof n==="string"&&n.trim()?n.trim():"web:default";return hn(`/agent/commands?chat_jid=${encodeURIComponent(i)}`)}async function V_(){return D("/agent/settings/quick-actions")}async function N_(n){return D("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function X_(n){return D("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function Q_(){return D("/agent/settings/environment")}async function qi(n){return D("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function Bf(){return D("/agent/active-chats")}async function zf(n=null,i={}){let _=new URLSearchParams;if(n)_.set("root_chat_jid",String(n));if(i?.includeArchived)_.set("include_archived","1");let r=_.toString()?`?${_.toString()}`:"";return hn(`/agent/branches${r}`)}async function Hf(n,i={}){return D("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...i?.agentName?{agent_name:i.agentName}:{}})})}async function Ff(n){return D("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function Wf(n,i={}){return D("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...i&&Object.prototype.hasOwnProperty.call(i,"agentName")?{agent_name:i.agentName}:{}})})}async function jf(n){return D("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Uf(n){return D("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Gf(n){return D("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Pf(n,i){return D("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:i})})}async function Tf(n,i={}){return D("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...i&&Object.prototype.hasOwnProperty.call(i,"agentName")?{agent_name:i.agentName}:{}})})}async function Rf(n,i,_,r="auto",c={}){let u={source_chat_jid:n,content:_,mode:r,...c?.sourceAgentName?{source_agent_name:c.sourceAgentName}:{},...c?.targetBy==="agent_name"?{target_agent_name:i}:{target_chat_jid:i}};return D("/agent/peer-message",{method:"POST",body:JSON.stringify(u)})}async function Vf(){return D("/agent/push/vapid-public-key")}async function Nf(n,i={}){let _={subscription:n,...i?.deviceId?{device_id:i.deviceId}:{}};return D("/agent/push/subscription",{method:"POST",body:JSON.stringify(_)})}async function Xf(n,i={}){let _={subscription:n,...i?.deviceId?{device_id:i.deviceId}:{}};return D("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(_)})}async function Qf(){return hn("/agent/roster")}async function Mf(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return hn(`/agent/status${i}`)}async function qf(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return hn(`/agent/context${i}`)}async function Af(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return hn(`/agent/autoresearch/status${i}`)}async function Zf(n=null,i={}){return D("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:i?.generateReport!==!1})})}async function Df(n=null){return D("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function If(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return hn(`/agent/queue-state${i}`)}async function Yf(n,i=null){let _=await fetch(_n+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:i||void 0})});if(!_.ok){let r=await _.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(r.error||`HTTP ${_.status}`)}return _.json()}async function Lf(n,i=null){let _=await fetch(_n+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:i||void 0})});if(!_.ok){let r=await _.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(r.error||`HTTP ${_.status}`)}return _.json()}async function tf(n,i,_=null){let r=await fetch(_n+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:i,chat_jid:_||void 0})});if(!r.ok){let c=await r.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(c.error||`HTTP ${r.status}`)}return r.json()}async function M_(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return hn(`/agent/models${i}`)}async function Cf(n="provider-ready"){return D("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function Jf(n){let i=new FormData;i.append("file",n);let _=await fetch(_n+"/media/upload",{method:"POST",body:i});if(!_.ok){let r=await _.json().catch(()=>({error:"Upload failed"}));throw Error(r.error||`HTTP ${_.status}`)}return _.json()}async function Of(n,i,_=null){let r=await fetch(_n+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:i,chat_jid:_||void 0})});if(!r.ok){let c=await r.json().catch(()=>({error:"Failed to respond"}));throw Error(c.error||`HTTP ${r.status}`)}return r.json()}async function Ef(n){let i=await fetch(_n+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok){let _=await i.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function df(n,i={}){let _=await fetch(_n+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:i.systemPrompt||void 0,chat_jid:i.chatJid||void 0}),signal:i.signal});if(!_.ok){let u=await _.json().catch(()=>({error:"Side prompt failed"}));throw Error(u.error||`HTTP ${_.status}`)}let r=null,c=null;if(await wf(_,(u,f)=>{if(i.onEvent?.(u,f),u==="side_prompt_thinking_delta")i.onThinkingDelta?.(f?.delta||"");else if(u==="side_prompt_text_delta")i.onTextDelta?.(f?.delta||"");else if(u==="side_prompt_done")r=f;else if(u==="side_prompt_error")c=f}),c){let u=Error(c?.error||"Side prompt failed");throw u.payload=c,u}return r}async function Sf(n,i){let _=await fetch(_n+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:i})});if(!_.ok){let r=await _.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(r.error||`HTTP ${_.status}`)}return _.json()}async function ef(n,i="thought"){let _=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(i)}`;return D(_)}async function mf(n,i,_){return D("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:i,expanded:Boolean(_)})})}function af(n){return`${_n}/media/${n}`}function n0(n){return`${_n}/media/${n}/thumbnail`}async function i0(n){let i=await fetch(`${_n}/media/${n}/info`);if(!i.ok)throw Error("Failed to get media info");return i.json()}async function _0(n){let i=await fetch(`${_n}/media/${n}`);if(!i.ok)throw Error("Failed to load media text");return i.text()}async function r0(n){let i=await fetch(`${_n}/media/${n}`);if(!i.ok)throw Error("Failed to load media blob");return i.blob()}async function c0(n="",i=2,_=!1){let r=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${i}&show_hidden=${_?"1":"0"}`;return D(r)}async function u0(n=""){let i=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return D(i)}async function f0(n="all"){let i=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return D(i)}async function s0(n="all"){return D("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function $0(n,i=20000,_=null){let r=_?`&mode=${encodeURIComponent(_)}`:"",c=`/workspace/file?path=${encodeURIComponent(n)}&max=${i}${r}`;return D(c)}async function g0(n){return D(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function o0(n,i){return D("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:i})})}async function l0(n){return D("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function y0(n,i="",_={}){let r=new URLSearchParams;if(i)r.set("path",i);if(_.overwrite)r.set("overwrite","1");let c=r.toString();return c?`${n}?${c}`:n}function x0(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function b0(n,i,_,r){return new Promise((c,u)=>{let f=new XMLHttpRequest;f.open("POST",_n+i);for(let[$,o]of Object.entries(_||{}))if(o!==void 0&&o!==null)f.setRequestHeader($,String(o));f.upload.onprogress=($)=>{if(typeof r==="function")r({loaded:$.lengthComputable?$.loaded:0,total:$.lengthComputable?$.total:n.size,lengthComputable:$.lengthComputable})},f.onload=()=>{try{let $=f.responseText?JSON.parse(f.responseText):{};if(f.status>=200&&f.status<300)c($);else{let o=Error($.error||`HTTP ${f.status}`);o.status=f.status,o.code=$.code,u(o)}}catch{let $=Error(`HTTP ${f.status}`);$.status=f.status,u($)}},f.onerror=()=>u(Error("Upload failed (network error)")),f.ontimeout=()=>u(Error("Upload timed out")),f.send(n)})}async function v0(n,i="",_={}){let r=x0(),c=y0("/workspace/upload-chunk",i,_),u=Math.max(1,Math.min(B_,Number(_.chunkSize)||w0)),f=Math.max(0,Number(n?.size)||0),$=Math.max(1,Math.ceil(f/u)),o=0,g=null;for(let x=0;x<$;x+=1){let l=x*u,v=Math.min(f,l+u),K=n.slice(l,v),B=K.size;if(g=await b0(K,c,{"X-Upload-Id":r,"X-Chunk-Index":x,"X-Chunk-Total":$,"X-File-Name":n?.name||"upload.bin","X-File-Size":f},(k)=>{if(typeof _.onProgress!=="function")return;let F=Math.min(f,o+(k?.loaded||0)),y=f||1;_.onProgress({loaded:F,total:y,percent:Math.round(F/y*100),chunkIndex:x,chunkTotal:$})}),o+=B,typeof _.onProgress==="function"){let k=f||1,F=f?o:k;_.onProgress({loaded:F,total:k,percent:Math.round(F/k*100),chunkIndex:x+1,chunkTotal:$})}}return g}async function k0(n,i="",_={}){if(n?.size>B_){let r=(n.size/1048576).toFixed(0),c=(B_/1048576).toFixed(0),u=Error(`File too large (${r} MB). Maximum upload size is ${c} MB.`);throw u.code="file_too_large",u}return await v0(n,i,_)}async function p0(n,i,_=""){let r=await fetch(_n+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:i,content:_})});if(!r.ok){let c=await r.json().catch(()=>({error:"Create failed"})),u=Error(c.error||`HTTP ${r.status}`);throw u.status=r.status,u.code=c.code,u}return r.json()}async function K0(n,i){let _=await fetch(_n+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:i})});if(!_.ok){let r=await _.json().catch(()=>({error:"Rename failed"})),c=Error(r.error||`HTTP ${_.status}`);throw c.status=_.status,c.code=r.code,c}return _.json()}async function h0(n,i){let _=await fetch(_n+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:i})});if(!_.ok){let r=await _.json().catch(()=>({error:"Move failed"})),c=Error(r.error||`HTTP ${_.status}`);throw c.status=_.status,c.code=r.code,c}return _.json()}async function B0(n){let i=`/workspace/file?path=${encodeURIComponent(n||"")}`;return D(i,{method:"DELETE"})}async function z0(n,i=!1){return D("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(i)})})}function cc(n,i={}){let _=new URLSearchParams({path:String(n||"")});if(i.download)_.set("download","1");return`${_n}/workspace/raw?${_.toString()}`}function H0(n){return cc(n,{download:!0})}function F0(n,i=!1){let _=`path=${encodeURIComponent(n||"")}&show_hidden=${i?"1":"0"}`;return`${_n}/workspace/download?${_}`}class uc{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,i,_={}){this.onEvent=n,this.onStatusChange=i,this.chatJid=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(_n+"/sse/stream"+n);let i=(_)=>{this.eventSource.addEventListener(_,(r)=>{this.markActivity(),this.onEvent(_,JSON.parse(r.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),i("new_post"),i("new_reply"),i("agent_response"),i("interaction_updated"),i("interaction_deleted"),i("agent_status"),i("agent_steer_queued"),i("agent_followup_queued"),i("agent_followup_consumed"),i("agent_followup_removed"),i("workspace_update"),i("agent_draft"),i("agent_draft_delta"),i("agent_thought"),i("agent_thought_delta"),i("model_changed"),i("ui_theme"),i("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(i)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,i=60000,_=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,_+i),this.reconnectAttempts=0;let r=Math.max(this.cooldownUntil-_,0),c=Math.max(this.reconnectDelay,r);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},c),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}async function W0(n,i,_){let r=_?`?chat_jid=${encodeURIComponent(_)}`:"";return D(`/post/${n}/annotations${r}`,{method:"PATCH",body:JSON.stringify({annotations:i})})}var _n="",h_,B_=1073741824,w0=8388608;var zn=O(()=>{nc();h_=new Map});function G0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(Zi,{detail:{enabled:Boolean(n)}}))}function $c(n){if(typeof fetch!=="function")return;T_({ui_meters:n}).catch((i)=>{console.debug("[meters] Failed to persist meters UI state.",i)})}function P0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(U0,{detail:{collapsed:Boolean(n)}}))}function q_(n=!1){return w_(fc,n)}function d$(n=!1){return w_(sc,n)}function Ai(n,i={}){let _=i.persist!==!1,r=i.persistServer!==!1,c=Boolean(n);if(_)$n(fc,c?"true":"false");if(r)$c({enabled:c});return G0(c),c}function T0(n,i={}){let _=i.persist!==!1,r=i.persistServer!==!1,c=Boolean(n);if(_)$n(sc,c?"true":"false");if(r)$c({collapsed:c});return P0(c),c}function S$(n){let i=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")Ai(Boolean(n.enabled),{persistServer:!1});else if(i==="toggle"){let _=!q_(!1);Ai(_,{persistServer:!1})}if(typeof n?.collapsed==="boolean")T0(Boolean(n.collapsed),{persistServer:!1})}var fc="piclaw_system_meters_enabled",sc="piclaw_system_meters_collapsed",Zi="piclaw-meters-change",U0="piclaw-meters-collapsed-change";var gc=O(()=>{zn()});function oc(n,i){if(n===""||n===null||n===void 0)return i;let _=Number(n);return Number.isFinite(_)?_:i}function lc(n,{min:i=-1/0,max:_=1/0}={}){let r=Number.isFinite(Number(i))?Number(i):-1/0,c=Number.isFinite(Number(_))?Number(_):1/0;return Math.min(c,Math.max(r,Number(n)))}function dn(n,{fallback:i=0,min:_=-1/0,max:r=1/0}={}){let c=oc(n,i);return lc(c,{min:_,max:r})}function R0(n,{direction:i=1,step:_=1,fallback:r=0,min:c=-1/0,max:u=1/0}={}){let f=dn(n,{fallback:r,min:c,max:u}),$=Math.abs(oc(_,1))||1,o=Number(i)<0?-1:1;return lc(f+o*$,{min:c,max:u})}function nn({value:n,min:i,max:_,step:r=1,fallback:c,width:u="80px",disabled:f=!1,label:$,onChange:o}){let g=Number.isFinite(Number(c))?Number(c):dn(n,{fallback:0,min:i,max:_}),[x,l]=w(String(n??g)),v=J(!1);q(()=>{if(!v.current)l(String(n??g))},[n,g]);let K=G((k)=>{v.current=!1;let F=dn(k,{fallback:g,min:i,max:_});l(String(F)),o?.(F)},[g,i,_,o]),B=G((k)=>{v.current=!1;let F=R0(n,{direction:k,step:r,fallback:g,min:i,max:_});l(String(F)),o?.(F)},[g,_,i,o,r,n]);return s`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${$||"value"}`}
                title=${`Decrease ${$||"value"}`}
                disabled=${f}
                onClick=${()=>B(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${x}
                disabled=${f}
                style=${`width:${u}`}
                onInput=${(k)=>{v.current=!0,l(k.target.value)}}
                onBlur=${(k)=>K(k.target.value)}
                onKeyDown=${(k)=>{if(k.key==="Enter")k.preventDefault(),K(k.target.value),k.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${$||"value"}`}
                title=${`Increase ${$||"value"}`}
                disabled=${f}
                onClick=${()=>B(1)}
            >+</button>
        </span>
    `}var Sn=O(()=>{e()});function wc(n){let i=String(n||"").trim();if(!i)return"";if(i.startsWith("http://")||i.startsWith("https://")||i.startsWith("data:")||i.startsWith("blob:"))return i;if(i.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(i.slice(11))}`;if(i.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(i))return"";if(i.startsWith("\\\\"))return"";if(i.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(i.replace(/^\.\//,""))}`}function yc({value:n,onChange:i}){let{t:_}=t(),r=J(null),[c,u]=w(wc(n));q(()=>{u(wc(n))},[n]);let f=G(($)=>{let o=$.target.files?.[0];if(!o)return;let g=new FileReader;g.onload=()=>{let x=g.result;u(x),i?.(x)},g.readAsDataURL(o)},[i]);return s`
        <div class="settings-avatar-inline" onClick=${()=>r.current?.click()} title=${_("settings.general.avatarUpload")}>
            ${c?s`<img src=${c} alt="avatar" />`:s`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${r} style="display:none" onChange=${f} />
        </div>
    `}function xc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function V0(n,i={}){let _=typeof n==="string"?n:"";if(!_)return!1;let r=i.navigator??(typeof navigator<"u"?navigator:null),c=i.document??(typeof document<"u"?document:null);if(r?.clipboard?.writeText)try{return await r.clipboard.writeText(_),!0}catch(u){}try{if(!c?.body||typeof c.createElement!=="function"||typeof c.execCommand!=="function")return!1;let u=c.createElement("textarea");u.value=_,u.setAttribute?.("readonly",""),u.style.position="fixed",u.style.left="-9999px",u.style.top="0",u.style.opacity="0",c.body.appendChild(u),u.focus?.(),u.select?.();let f=Boolean(c.execCommand("copy"));return c.body.removeChild(u),f}catch(u){return!1}}function A_({settingsData:n,setStatus:i,mergeSettingsData:_}){let{t:r}=t(),[c,u]=w(""),[f,$]=w(""),[o,g]=w(""),[x,l]=w(""),[v,K]=w(32),[B,k]=w(256),[F,y]=w(""),[p,V]=w(!1),[P,j]=w(!1),[T,H]=w(!1),[R,h]=w(()=>q_(!1)),[b,A]=w(!1),W=J(""),Q=J(null),Y=J(!0);q(()=>{return Y.current=!0,()=>{Y.current=!1}},[]);let z=G((M)=>{let N=xc(M);u(N.userName),$(N.userAvatar),g(N.assistantName),l(N.assistantAvatar),K(N.composeUploadLimitMb),k(N.workspaceUploadLimitMb),y(M?.widgetToken||""),W.current=JSON.stringify(N)},[]);q(()=>{z(n||{})},[n,z]),q(()=>{let M=(N)=>{h(Boolean(N?.detail?.enabled))};return window.addEventListener(Zi,M),()=>window.removeEventListener(Zi,M)},[]);let Z=C(()=>JSON.stringify(xc({userName:c,userAvatar:f,assistantName:o,assistantAvatar:x,composeUploadLimitMb:v,workspaceUploadLimitMb:B})),[c,f,o,x,v,B]);q(()=>{if(Z===W.current)return;if(Q.current)clearTimeout(Q.current);return Q.current=setTimeout(async()=>{if(!Y.current)return;let M=document.activeElement;if(M&&M.closest?.(".settings-number-stepper"))return;try{let N=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:Z}),on=await N.json().catch(()=>({}));if(!Y.current)return;if(!N.ok||!on?.ok||!on?.settings)return;W.current=Z,_?.(on.settings),A(!0),setTimeout(()=>{if(Y.current)A(!1)},4000)}catch(N){console.warn("[settings/general] Failed to persist general settings snapshot.",N)}},800),()=>{if(Q.current)clearTimeout(Q.current)}},[Z,_]);let L=n?.instanceTotp||{configured:!1,issuer:o||"Piclaw",label:c?`${o||"Piclaw"}:${c}`:o||"Piclaw",secret:"",otpauth:"",qrSvg:""},rn=G(async()=>{if(!F)return;if(await V0(F))j(!0),setTimeout(()=>{if(Y.current)j(!1)},3000);else i?.(r("settings.general.copyFailed")),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[F,i]),E=G(async()=>{if(T)return;if(!confirm(r("settings.general.regenConfirm")))return;H(!0);try{let M=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),N=await M.json().catch(()=>({}));if(!M.ok||!N?.ok||!N?.settings)throw Error(N?.error||"Failed to regenerate widget token.");y(N.settings.widgetToken||""),_?.(N.settings),A(!0),setTimeout(()=>{if(Y.current)A(!1)},4000)}catch(M){console.warn("[settings/general] Failed to regenerate widget token.",M)}finally{if(Y.current)H(!1)}},[T,_]),gn=typeof window<"u"&&window.isSecureContext,xn=F?"•".repeat(Math.min(Math.max(F.length,16),48)):"—",Wn=p?F||"—":xn;return s`
        <div class="settings-section">
            ${b&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${r("settings.appliedNotice")}
                </div>
            `}
            <h3>${r("settings.general.identity")}</h3>
            <div class="settings-row">
                <label>${r("settings.general.userLabel")}</label>
                <${yc} value=${f} onChange=${$} />
                <input type="text" value=${c} onInput=${(M)=>u(M.target.value)} placeholder=${r("settings.general.yourName")} />
            </div>
            <div class="settings-row">
                <label>${r("settings.general.agentLabel")}</label>
                <${yc} value=${x} onChange=${l} />
                <input type="text" value=${o} onInput=${(M)=>g(M.target.value)} placeholder=${r("settings.general.agentName")} />
            </div>

            <h3 style="margin-top:20px">${r("settings.general.notifications")}</h3>
            ${gn?s`
                <div class="settings-row">
                    <label>${r("settings.general.browserNotifications")}</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            ${r("settings.general.notifSecureHint")}
                        </span>
                    </div>
                </div>
            `:s`
                <div class="settings-row">
                    <label>${r("settings.general.browserNotifications")}</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0; color: var(--error-color, #e55)">
                            ${r("settings.general.notifInsecureHint")}
                        </span>
                    </div>
                </div>
            `}

            <h3 style="margin-top:20px">${r("settings.general.display")}</h3>
            <div class="settings-row">
                <label>${r("settings.general.systemMeters")}</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${R}
                        onChange=${()=>{let M=Ai(!R);h(M)}} />
                    <span class="settings-hint" style="margin:0">${r("settings.general.systemMetersHint")}</span>
                </div>
            </div>

            <h3 style="margin-top:20px">${r("settings.general.instanceConfig")}</h3>
            <div class="settings-row">
                <label>${r("settings.general.composeUpload")}</label>
                <${nn}
                    label=${r("settings.general.composeUploadAria")}
                    value=${v}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">${r("settings.general.composeUploadHint")}</span>
            </div>
            <div class="settings-row">
                <label>${r("settings.general.workspaceUpload")}</label>
                <${nn}
                    label=${r("settings.general.workspaceUploadAria")}
                    value=${B}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${k}
                />
                <span class="settings-hint" style="margin:0">${r("settings.general.workspaceUploadHint")}</span>
            </div>

            <h3 style="margin-top:20px">${r("settings.general.authentication")}</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>${r("settings.general.widgetToken")}</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">${r("settings.general.token")}</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${Wn}</code>
                        <button class=${`settings-keychain-reveal-btn${p?" active":""}`}
                            type="button"
                            onClick=${()=>V((M)=>!M)}
                            disabled=${!F}
                            title=${p?r("settings.general.hideToken"):r("settings.general.revealToken")}>
                            ${p?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${rn} disabled=${!F} title=${r("settings.general.copyToken")}>
                            ${P?s`<span class="settings-widget-token-copied">${r("settings.general.copied")}</span>`:s`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${E} disabled=${T}>${T?r("settings.general.regenerating"):r("settings.general.regenerate")}</button>
                    </div>
                </div>
                <span class="settings-hint" style="margin:6px 0 0 0;">
                    ${r("settings.general.tokenHintPre")} <code>GET /api/state</code> ${r("settings.general.tokenHintMid")} <code>GET /api/state/events</code>${r("settings.general.tokenHintPost")} <code>Authorization: Bearer …</code>${r("settings.general.tokenHintEnd")}
                </span>
            </div>
            <div class="settings-totp-panel">
                <div class="settings-totp-header">
                    <div>
                        <strong>${r("settings.general.totpTitle")}</strong>
                        <div class="settings-hint" style="margin:6px 0 0 0;">
                            ${L.configured?r("settings.general.totpConfiguredHint"):r("settings.general.totpUnconfiguredHint")}
                        </div>
                    </div>
                </div>
                ${L.configured?s`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:L.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>${r("settings.general.issuer")}</label>
                                <input type="text" readonly value=${L.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>${r("settings.general.label")}</label>
                                <input type="text" readonly value=${L.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>${r("settings.general.secret")}</label>
                                <input type="text" readonly value=${L.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var bc=O(()=>{e();gc();Sn();cn()});var kc={};fn(kc,{SessionsSection:()=>N0});function vc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function N0({settingsData:n,setStatus:i,mergeSettingsData:_}){let{t:r}=t(),[c,u]=w(!0),[f,$]=w(16),[o,g]=w(4000),[x,l]=w(3),[v,K]=w(64),[B,k]=w("none"),[F,y]=w(!1),p=J(""),V=J(null),P=J(!0);q(()=>{return P.current=!0,()=>{P.current=!1}},[]);let j=G((H)=>{let R=vc(H);u(R.sessionAutoRotate),$(R.sessionMaxSizeMb),g(R.sessionMaxLines),l(R.sessionMaxCompactions),K(R.toolUseBudget),k(R.sessionIsolation),p.current=JSON.stringify(R)},[]);q(()=>{j(n||{})},[n,j]);let T=C(()=>JSON.stringify(vc({sessionAutoRotate:c,sessionMaxSizeMb:f,sessionMaxLines:o,sessionMaxCompactions:x,toolUseBudget:v,sessionIsolation:B})),[c,f,o,x,v,B]);return q(()=>{if(T===p.current)return;if(V.current)clearTimeout(V.current);return V.current=setTimeout(async()=>{if(!P.current)return;let H=document.activeElement;if(H&&H.closest?.(".settings-number-stepper"))return;try{let R=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:T}),h=await R.json().catch(()=>({}));if(!P.current)return;if(!R.ok||!h?.ok||!h?.settings)return;p.current=T,_?.(h.settings),y(!0),setTimeout(()=>{if(P.current)y(!1)},4000)}catch(R){console.warn("[settings/sessions] Failed to persist session settings.",R)}},800),()=>{if(V.current)clearTimeout(V.current)}},[T,_]),s`
        <div class="settings-section">
            ${F&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${r("settings.appliedNotice")}
                </div>
            `}
            <h3>${r("settings.sessions.lifecycle")}</h3>
            <div class="settings-row">
                <label>${r("settings.sessions.autoRotate")}</label>
                <input type="checkbox" checked=${c} onChange=${(H)=>u(H.target.checked)} />
            </div>
            <div class="settings-row">
                <label>${r("settings.sessions.maxSize")}</label>
                <${nn}
                    label=${r("settings.sessions.maxSizeAria")}
                    value=${f}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${$}
                />
            </div>

            <h3 style="margin-top:20px">${r("settings.sessions.agentBehaviour")}</h3>
            <div class="settings-row">
                <label>${r("settings.sessions.toolBudget")}</label>
                <${nn}
                    label=${r("settings.sessions.toolBudgetAria")}
                    value=${v}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">${r("settings.sessions.toolBudgetHint")}</span>
            </div>
            <div class="settings-row">
                <label>${r("settings.sessions.isolation")}</label>
                <select value=${B} onChange=${(H)=>k(H.target.value)}>
                    <option value="none">${r("settings.sessions.isolationNone")}</option>
                    <option value="summary">${r("settings.sessions.isolationSummary")}</option>
                    <option value="full">${r("settings.sessions.isolationFull")}</option>
                </select>
            </div>
        </div>
    `}var pc=O(()=>{e();Sn();cn()});var Kc={};fn(Kc,{__recordingsSettingsTest:()=>q0,RecordingsSection:()=>M0});function Ii(n){if(!n)return"—";let i=new Date(n);if(Number.isNaN(i.getTime()))return n;return i.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Z_(n){if(n==="full")return Pn("settings.recordings.modeFull");if(n==="metadata")return Pn("settings.recordings.modeMetadata");return Pn("settings.recordings.modeRedacted")}function Di({children:n,type:i="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${i}`}>${n}</span>`}function X0(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function wi(n){return String(n||"").split(`
`).map((i)=>i.trim()).filter(Boolean)}function Q0({recording:n,details:i,onDelete:_,onRefresh:r}){let{t:c}=t();if(!n)return s`<div class="settings-task-detail-empty">${c("settings.recordings.selectPrompt")}</div>`;let u=i?.meta||n,f=Array.isArray(i?.events)?i.events:[],$=f.reduce((g,x)=>g+(Array.isArray(x.redactions)?x.redactions.length:0),0),o=f.reduce((g,x)=>{let l=x.kind||"event";return g[l]=(g[l]||0)+1,g},{});return s`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${u.title||u.id}</h4>
                    <code>${u.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(G_(u.id),"_blank","noopener,noreferrer")}>${c("settings.recordings.playback")}</button>
                    <button onClick=${r}>${c("settings.recordings.refresh")}</button>
                    <button class="danger" onClick=${()=>_(u)}>${c("settings.recordings.delete")}</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>${c("settings.recordings.status")}</span><strong>${u.status||"—"}</strong>
                <span>${c("settings.recordings.mode")}</span><strong>${Z_(u.mode)}</strong>
                <span>${c("settings.recordings.chat")}</span><code>${u.chatJid||"—"}</code>
                <span>${c("settings.recordings.started")}</span><strong>${Ii(u.startedAt)}</strong>
                <span>${c("settings.recordings.ended")}</span><strong>${Ii(u.endedAt)}</strong>
                <span>${c("settings.recordings.events")}</span><strong>${u.eventCount??f.length}</strong>
                <span>${c("settings.recordings.redactions")}</span><strong>${$}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${li(u.id,"json")}>${c("settings.recordings.exportJson")}</a>
                <a href=${li(u.id,"jsonl")}>${c("settings.recordings.exportJsonl")}</a>
                <a href=${li(u.id,"html")}>${c("settings.recordings.exportHtml")}</a>
            </div>
            <h4>${c("settings.recordings.eventSummary")}</h4>
            ${f.length===0&&s`<p class="settings-hint">${c("settings.recordings.inspectHint")}</p>`}
            ${f.length>0&&s`
                <div class="settings-recording-event-summary">
                    ${Object.entries(o).map(([g,x])=>s`<${Di}>${g}: ${x}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>${c("settings.recordings.firstEvents")}</strong>
                    <pre>${JSON.stringify(f.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function M0({filter:n="",setStatus:i}){let{t:_}=t(),[r,c]=w([]),[u,f]=w([]),[$,o]=w(!0),[g,x]=w(null),[l,v]=w(null),[K,B]=w(null),[k,F]=w(!1),[y,p]=w(X0),[V,P]=w(""),[j,T]=w("redacted"),[H,R]=w(!0),[h,b]=w(""),[A,W]=w(""),[Q,Y]=w('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[z,Z]=w(null);q(()=>{let X=(m)=>{let sn=String(m?.detail?.chatJid||"").trim();if(sn)p(sn)};return window.addEventListener("piclaw:current-chat-changed",X),()=>window.removeEventListener("piclaw:current-chat-changed",X)},[]);let L=G(async(X=l)=>{o(!0),x(null);try{let m=await F_(),sn=m.recordings||[];c(sn),f(m.active||[]);let kn=sn.find((U)=>U.id===X)||sn[0]||null;if(v(kn?.id||null),kn?.id)B(await Mi(kn.id));else B(null)}catch(m){x(m?.message||_("settings.recordings.loadFailed"))}finally{o(!1)}},[l]);q(()=>{L()},[L]);let rn=C(()=>r.find((X)=>X.id===l)||null,[r,l]),E=C(()=>u.find((X)=>X.chatJid===y)||null,[u,y]),gn=String(n||"").trim().toLowerCase(),xn=C(()=>{if(!gn)return r;return r.filter((X)=>[X.id,X.title,X.chatJid,X.status,X.mode].some((m)=>String(m||"").toLowerCase().includes(gn)))},[r,gn]),Wn=G(async(X)=>{if(v(X?.id||null),B(null),!X?.id)return;try{B(await Mi(X.id))}catch(m){i?.(m?.message||_("settings.recordings.loadOneFailed"),"error")}},[i]),M=G(async()=>{if(k)return;F(!0);try{let X={keys:wi(h),patterns:wi(A)},m=await W_({chat_jid:y,title:V||void 0,mode:j,include_timeline_snapshot:H,timeline_snapshot_limit:80,redaction:X});i?.(_("settings.recordings.startedToast",{chat:y}),"success"),await L(m?.recording?.id)}catch(X){i?.(X?.message||_("settings.recordings.startFailed"),"error")}finally{F(!1)}},[k,y,h,A,H,L,j,i,V]),N=G(async(X=E)=>{if(!X||k)return;F(!0);try{let m=await j_({id:X.id});i?.(_("settings.recordings.stoppedToast",{chat:X.chatJid}),"success"),await L(m?.recording?.id)}catch(m){i?.(m?.message||_("settings.recordings.stopFailed"),"error")}finally{F(!1)}},[k,E,L,i]),on=G(async(X)=>{if(!X||k)return;if(!window.confirm(_("settings.recordings.deleteConfirm",{id:X.id})+`

${X.title||""}`))return;F(!0);try{await U_(X.id),i?.(_("settings.recordings.deletedToast"),"success"),await L(null)}catch(m){i?.(m?.message||_("settings.recordings.deleteFailed"),"error")}finally{F(!1)}},[k,L,i]),pi=G(async()=>{try{let X=JSON.parse(Q||"null"),m=await P_(X,{mode:j,redaction:{keys:wi(h),patterns:wi(A)}});Z(m.preview)}catch(X){Z({error:X?.message||_("settings.recordings.previewFailed")})}},[h,A,j,Q]);return s`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>${_("settings.recordings.heading")}</h3>
                <p class="settings-hint">${_("settings.recordings.intro")}</p>
                <div class="settings-recording-form-grid">
                    <label>${_("settings.recordings.chatJid")}<input value=${y} onInput=${(X)=>p(X.target.value)} /></label>
                    <label>${_("settings.recordings.title")}<input placeholder=${_("settings.recordings.titlePlaceholder")} value=${V} onInput=${(X)=>P(X.target.value)} /></label>
                    <label>${_("settings.recordings.modeLabelField")}<select value=${j} onChange=${(X)=>T(X.target.value)}><option value="redacted">${_("settings.recordings.optRedacted")}</option><option value="metadata">${_("settings.recordings.optMetadata")}</option><option value="full">${_("settings.recordings.optFull")}</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${H} onChange=${(X)=>R(X.target.checked)} /> ${_("settings.recordings.includeSnapshot")}</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>${_("settings.recordings.extraKeys")}<textarea rows="2" placeholder="customer_id\ninternal_code" value=${h} onInput=${(X)=>b(X.target.value)} /></label>
                    <label>${_("settings.recordings.extraPatterns")}<textarea rows="2" placeholder="ACME-[0-9]+" value=${A} onInput=${(X)=>W(X.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${E?s`<button onClick=${()=>N(E)} disabled=${k}>${_("settings.recordings.stopCurrent")}</button>`:s`<button onClick=${M} disabled=${k}>${_("settings.recordings.start")}</button>`}
                    <button onClick=${()=>L()} disabled=${$}>${_("settings.recordings.refresh")}</button>
                </div>
                ${u.length>0&&s`<div class="settings-recording-active-row">${u.map((X)=>s`<${Di} type="active">REC ${X.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>${_("settings.recordings.redactionPreview")}</summary>
                <textarea rows="4" value=${Q} onInput=${(X)=>Y(X.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${pi}>${_("settings.recordings.previewRedaction")}</button></div>
                ${z&&s`<pre>${JSON.stringify(z,null,2)}</pre>`}
            </details>

            ${$&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>${_("settings.recordings.loading")}</span></div>`}
            ${g&&s`<div class="settings-error-state">${g}</div>`}
            ${!$&&!g&&r.length===0&&s`<div class="settings-empty-state"><strong>${_("settings.recordings.noneYet")}</strong><p>${_("settings.recordings.noneYetHint")}</p></div>`}
            ${!$&&!g&&r.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label=${_("settings.recordings.listLabel")}>
                        ${xn.map((X)=>s`
                            <button class=${`settings-task-row ${X.id===l?"active":""}`} onClick=${()=>Wn(X)}>
                                <span class="settings-task-row-main"><strong>${X.title||X.id}</strong><span>${X.chatJid} · ${Ii(X.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${Di} type=${X.status==="recording"?"active":"completed"}>${X.status}<//><${Di}>${Z_(X.mode)}<//></span>
                                <span class="settings-task-row-times">${_("settings.recordings.eventsCount",{count:X.eventCount||0})}</span>
                            </button>
                        `)}
                        ${xn.length===0&&s`<p class="settings-hint">${_("settings.recordings.noMatch",{filter:n})}</p>`}
                    </div>
                    <${Q0} recording=${rn} details=${K} onDelete=${on} onRefresh=${()=>rn&&Wn(rn)} />
                </div>
            `}
        </div>
    `}var q0;var hc=O(()=>{e();cn();zn();q0={formatDateTime:Ii,modeLabel:Z_,parseList:wi}});var Bc={};fn(Bc,{CompactionSection:()=>Z0});function A0(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),toolResultSemanticSummaryEnabled:Boolean(n.toolResultSemanticSummaryEnabled??!0),toolResultSemanticSummaryMaxInputChars:n.toolResultSemanticSummaryMaxInputChars??12000,toolResultSemanticSummaryMaxTokens:n.toolResultSemanticSummaryMaxTokens??320,toolResultSemanticSummaryTimeoutSec:n.toolResultSemanticSummaryTimeoutSec??12,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function D_(n){let i=String(n||"").trim();if(!i)return"—";let _=new Date(i);if(Number.isNaN(_.getTime()))return i;return _.toLocaleString()}function Z0({settingsData:n,setStatus:i,mergeSettingsData:_}){let[r,c]=w(180),[u,f]=w(15),[$,o]=w(360),[g,x]=w(75),[l,v]=w(0.5),[K,B]=w(!0),[k,F]=w(!0),[y,p]=w(12000),[V,P]=w(320),[j,T]=w(12),[H,R]=w(!1),[h,b]=w(120),[A,W]=w([]),[Q,Y]=w([]),[z,Z]=w(!1),L=J(""),rn=J(null),E=J(!0);q(()=>{return E.current=!0,()=>{E.current=!1}},[]);let gn=G((M)=>{let N=A0(M);c(N.compactionTimeoutSec),f(N.compactionBackoffBaseMin),o(N.compactionBackoffMaxMin),x(N.compactionThresholdPercent),v(N.compactionBackoffDecayFactor),B(N.toolResultCompactionEnabled),F(N.toolResultSemanticSummaryEnabled),p(N.toolResultSemanticSummaryMaxInputChars),P(N.toolResultSemanticSummaryMaxTokens),T(N.toolResultSemanticSummaryTimeoutSec),R(N.progressWatchdogEnabled),b(N.progressWatchdogTimeoutSec),W(N.compactionBackoffs),Y(N.progressWatchdogPhases),L.current=JSON.stringify({compactionTimeoutSec:N.compactionTimeoutSec,compactionBackoffBaseMin:N.compactionBackoffBaseMin,compactionBackoffMaxMin:N.compactionBackoffMaxMin,compactionThresholdPercent:N.compactionThresholdPercent,compactionBackoffDecayFactor:N.compactionBackoffDecayFactor,toolResultCompactionEnabled:N.toolResultCompactionEnabled,toolResultSemanticSummaryEnabled:N.toolResultSemanticSummaryEnabled,toolResultSemanticSummaryMaxInputChars:N.toolResultSemanticSummaryMaxInputChars,toolResultSemanticSummaryMaxTokens:N.toolResultSemanticSummaryMaxTokens,toolResultSemanticSummaryTimeoutSec:N.toolResultSemanticSummaryTimeoutSec,progressWatchdogEnabled:N.progressWatchdogEnabled,progressWatchdogTimeoutSec:N.progressWatchdogTimeoutSec})},[]);q(()=>{gn(n||{})},[n,gn]);let xn=C(()=>JSON.stringify({compactionTimeoutSec:r,compactionBackoffBaseMin:u,compactionBackoffMaxMin:$,compactionThresholdPercent:g,compactionBackoffDecayFactor:l,toolResultCompactionEnabled:K,toolResultSemanticSummaryEnabled:k,toolResultSemanticSummaryMaxInputChars:y,toolResultSemanticSummaryMaxTokens:V,toolResultSemanticSummaryTimeoutSec:j,progressWatchdogEnabled:H,progressWatchdogTimeoutSec:h}),[r,u,$,g,l,K,k,y,V,j,H,h]);q(()=>{if(xn===L.current)return;if(rn.current)clearTimeout(rn.current);return rn.current=setTimeout(async()=>{if(!E.current)return;try{i?.("Saving compaction settings…","info");let M=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:xn}),N=await M.json().catch(()=>({}));if(!E.current)return;if(!M.ok||!N?.ok||!N?.settings){i?.(N?.error||"Failed to save compaction settings.","error");return}L.current=xn,_?.(N.settings),gn({...n||{},...N.settings||{}}),i?.("Compaction settings saved.","success"),Z(!0),setTimeout(()=>{if(E.current)Z(!1),i?.(null)},4000)}catch(M){if(console.warn("[settings/compaction] Failed to persist compaction settings.",M),E.current)i?.("Failed to save compaction settings.","error")}},800),()=>{if(rn.current)clearTimeout(rn.current)}},[xn,_,i,gn,n]);let Wn=G(async(M)=>{try{i?.(`Clearing compaction suppression for ${M}…`,"info");let N=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:M})}),on=await N.json().catch(()=>({}));if(!N.ok||!on?.ok||!on?.settings){i?.(on?.error||"Failed to clear compaction suppression.","error");return}_?.(on.settings),gn({...n||{},...on.settings||{}}),i?.(`Cleared compaction suppression for ${M}.`,"success")}catch(N){console.warn("[settings/compaction] Failed to clear compaction suppression.",N),i?.("Failed to clear compaction suppression.","error")}},[gn,_,i,n]);return s`
        <div class="settings-section">
            ${z&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Enable tool-result compaction</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${K} onChange=${(M)=>B(Boolean(M.target.checked))} />
                    <span class="settings-hint" style="margin:0">When disabled, large tool results stay inline and are not externalized into searchable tool-output handles.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summaries for compacted tool results</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${k} onChange=${(M)=>F(Boolean(M.target.checked))} />
                    <span class="settings-hint" style="margin:0">When enabled, compacted outputs include a semantic summary generated with the active model (preview fallback on failure).</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summary input limit (chars)</label>
                <${nn}
                    label="semantic summary input limit"
                    value=${y}
                    min=${500}
                    max=${200000}
                    fallback=${12000}
                    width="100px"
                    disabled=${!k}
                    onChange=${p}
                />
                <span class="settings-hint" style="margin:0">Maximum characters sampled from full tool output for semantic summarization.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary output max tokens</label>
                <${nn}
                    label="semantic summary max tokens"
                    value=${V}
                    min=${64}
                    max=${4096}
                    fallback=${320}
                    width="90px"
                    disabled=${!k}
                    onChange=${P}
                />
                <span class="settings-hint" style="margin:0">Upper bound for generated summary length.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary timeout (sec)</label>
                <${nn}
                    label="semantic summary timeout"
                    value=${j}
                    min=${1}
                    max=${300}
                    fallback=${12}
                    width="90px"
                    disabled=${!k}
                    onChange=${T}
                />
                <span class="settings-hint" style="margin:0">Abort semantic summary generation after this timeout and fall back to preview compaction.</span>
            </div>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${nn}
                    label="compaction threshold"
                    value=${g}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${x}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${nn}
                    label="compaction timeout"
                    value=${r}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${c}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${nn}
                    label="compaction backoff base"
                    value=${u}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${f}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${nn}
                    label="compaction backoff max"
                    value=${$}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${o}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${nn}
                    label="backoff decay factor"
                    value=${Math.round(l*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(M)=>v(M/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${H} onChange=${(M)=>R(Boolean(M.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${nn}
                    label="watchdog timeout"
                    value=${h}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!H}
                    onChange=${b}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${A.length===0?s`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:s`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Failures</th>
                                <th>Suppressed until</th>
                                <th>Last error</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${A.map((M)=>s`
                                <tr>
                                    <td><code>${M.chatJid}</code></td>
                                    <td>${M.failureCount}</td>
                                    <td>${D_(M.backoffUntil)}</td>
                                    <td title=${M.lastErrorMessage||""}>${M.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>Wn(M.chatJid)}>
                                            Clear
                                        </button>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}

            <h3 style="margin-top:20px">Live watchdog phases</h3>
            ${Q.length===0?s`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:s`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Phase</th>
                                <th>Started</th>
                                <th>Last heartbeat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Q.map((M)=>s`
                                <tr>
                                    <td><code>${M.chatJid}</code></td>
                                    <td>${M.phase}</td>
                                    <td>${D_(M.startedAt)}</td>
                                    <td>${D_(M.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var zc=O(()=>{e();Sn()});function Fc(n){let i=String(n||"").trim().toLowerCase();if(!i)return null;let _=Y0[i]||i;if(/^f(?:[1-9]|1[0-2])$/.test(_))return _;if(L0.has(_))return _;if(_.length===1)return _;if(/^[a-z0-9]+$/.test(_))return _;return null}function en(n){let i=String(n||"").trim();if(!i)return null;let _=i.split("+").map((u)=>u.trim()).filter(Boolean);if(!_.length)return null;let r={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let u of _){let f=u.toLowerCase(),$=I0[f];if($){r[$]=!0;continue}if(r.key)return null;let o=Fc(u);if(!o||o==="escape")return null;r.key=o}if(!r.key)return null;let c=[];if(r.ctrl)c.push("ctrl");if(r.meta)c.push("meta");if(r.alt)c.push("alt");if(r.shift)c.push("shift");return c.push(r.key),c.join("+")}function Wc(n){return String(n||"").split(/[\n,]/).map((i)=>en(i)).filter((i)=>Boolean(i))}function Tn(n){return n.join(", ")}function Y_(){let n=Ar(Hc);if(!n||typeof n!=="object")return{};let i={};for(let _ of yi){let r=n[_.id];if(!Array.isArray(r))continue;let c=r.map((u)=>en(String(u||""))).filter((u)=>Boolean(u));i[_.id]=[...new Set(c)]}return i}function I_(n){if($n(Hc,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function jc(n){return D0.get(n)}function xi(n){let i=Y_()[n];if(Array.isArray(i))return i;return[...jc(n).defaultBindings]}function Uc(n,i){let _=Y_(),r=jc(n).defaultBindings,c=[...new Set(i.map((u)=>en(u)).filter((u)=>Boolean(u)))];if(c.length===r.length&&c.every((u,f)=>u===r[f]))delete _[n];else _[n]=c;I_(_)}function L_(n){if(!n){I_({});return}let i=Y_();delete i[n],I_(i)}function Yi(){let n={};for(let i of yi)n[i.id]=xi(i.id);return n}function t0(n){let i=typeof n==="string"?n:"";if(!i)return"";if(i.length===1)return i.toLowerCase();return Fc(i)||i.toLowerCase()}function C0(n){let i=en(n);if(!i)return null;let _={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let r of i.split("+")){if(r==="ctrl"||r==="meta"||r==="alt"||r==="shift"){_[r]=!0;continue}_.key=r}return _.key?_:null}function J0(n,i){let _=C0(i);if(!_)return!1;if(t0(n?.key)!==_.key)return!1;let c=!_.shift&&_.key.length===1&&/[^a-z0-9]/i.test(_.key);return Boolean(n?.ctrlKey)===_.ctrl&&Boolean(n?.metaKey)===_.meta&&Boolean(n?.altKey)===_.alt&&(c||Boolean(n?.shiftKey)===_.shift)}function xg(n,i){return xi(i).some((_)=>J0(n,_))}var Hc="piclaw_keyboard_shortcuts_v1",yi,D0,I0,Y0,L0;var Gc=O(()=>{yi=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],D0=new Map(yi.map((n)=>[n.id,n])),I0={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},Y0={esc:"escape",return:"enter",spacebar:"space"},L0=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var Pc={};fn(Pc,{KeyboardSection:()=>E0});function O0(n,i,_){let r=String(n||"").trim().toLowerCase();if(!r)return!0;return[i.label,i.description,_,...i.defaultBindings||[]].some((c)=>String(c||"").toLowerCase().includes(r))}function E0({filter:n="",setStatus:i}){let{t:_}=t(),[r,c]=w(()=>{let g=Yi();return Object.fromEntries(Object.entries(g).map(([x,l])=>[x,Tn(l)]))});q(()=>{let g=()=>{let x=Yi();c(Object.fromEntries(Object.entries(x).map(([l,v])=>[l,Tn(v)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",g),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",g)},[]);let u=C(()=>yi.filter((g)=>{let x=String(r[g.id]||"");return O0(n,g,x)}),[r,n]),f=(g)=>{let x=String(r[g]||"").trim(),v=(x?x.split(/[\n,]/).map((B)=>B.trim()).filter(Boolean):[]).filter((B)=>!en(B));if(v.length>0){i?.(_("settings.keyboard.invalidShortcut",{token:v[0]}),"error");return}let K=Wc(x);Uc(g,K),c((B)=>({...B,[g]:Tn(xi(g))})),i?.(_("settings.keyboard.saved"),"success")},$=(g)=>{L_(g),c((x)=>({...x,[g]:Tn(xi(g))})),i?.(_("settings.keyboard.resetOne"),"success")},o=()=>{L_();let g=Yi();c(Object.fromEntries(Object.entries(g).map(([x,l])=>[x,Tn(l)]))),i?.(_("settings.keyboard.resetAllDone"),"success")};return s`
        <div class="settings-section">
            <h3>${_("settings.keyboard.heading")}</h3>
            <p class="settings-hint">
                ${_("settings.keyboard.hint1")}
                <code>Escape</code> ${_("settings.keyboard.hint1b")}
            </p>
            <p class="settings-hint">
                <code>/help</code> ${_("settings.keyboard.hint2mid")} <code>"</code> ${_("settings.keyboard.hint2end")}
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:18px; justify-content:flex-end;">
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${o}>${_("settings.keyboard.resetAll")}</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${u.map((g)=>s`
                    <div class="settings-shortcut-card" key=${g.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${g.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${g.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">${_("settings.keyboard.defaultColon")} <code style="font-size:13px;">${Tn(g.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${r[g.id]||""}
                                placeholder=${Tn(g.defaultBindings)}
                                onInput=${(x)=>c((l)=>({...l,[g.id]:x.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>f(g.id)}>${_("settings.keyboard.save")}</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>$(g.id)}>${_("settings.keyboard.defaultBtn")}</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${u.length===0&&s`<div class="settings-hint">${_("settings.keyboard.noMatch")}</div>`}
            </div>
        </div>
    `}var Tc=O(()=>{e();Gc();cn()});function Nc(n,i=t_){let _=Number(n);if(!Number.isFinite(_))return i;return Math.min(300,Math.max(15,Math.round(_)))}function Xc(n,i=C_){let _=Number(n);if(!Number.isFinite(_))return i;return Math.min(8,Math.max(0,Math.round(_)))}function J_(){return{refreshIntervalSec:Nc(y_(Rc,t_),t_),folderPreviewDepth:Xc(y_(Vc,C_),C_)}}function Qc(n={}){let i=J_(),_={refreshIntervalSec:Nc(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:i.refreshIntervalSec,i.refreshIntervalSec),folderPreviewDepth:Xc(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:i.folderPreviewDepth,i.folderPreviewDepth)};if($n(Rc,String(_.refreshIntervalSec)),$n(Vc,String(_.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(d0,{detail:{settings:_}}));return _}var d0="piclaw:workspace-client-settings-updated",Rc="workspaceRefreshIntervalSec",Vc="workspaceFolderPreviewDepth",t_=60,C_=3;var Mc=()=>{};var Ac={};fn(Ac,{WorkspaceSection:()=>S0});function qc(n={}){let i=n.workspaceSettings||{};return{webTerminalEnabled:i.webTerminalEnabled!==!1,vncAllowDirect:i.vncAllowDirect!==!1,treeMaxDepth:i.treeMaxDepth??4,treeMaxEntries:i.treeMaxEntries??5000}}function S0({settingsData:n,setStatus:i,mergeSettingsData:_}){let{t:r}=t(),[c,u]=w(!0),[f,$]=w(!0),[o,g]=w(4),[x,l]=w(5000),[v,K]=w(60),[B,k]=w(3),[F,y]=w(!1),[p,V]=w(!1),P=J(""),j=J(null),T=J(null),H=J(null),R=J(!0);q(()=>{return R.current=!0,()=>{if(R.current=!1,j.current)clearTimeout(j.current);if(T.current)clearTimeout(T.current);if(H.current)clearTimeout(H.current)}},[]);let h=G((W)=>{let Q=qc(W),Y=J_();u(Q.webTerminalEnabled),$(Q.vncAllowDirect),g(Q.treeMaxDepth),l(Q.treeMaxEntries),K(Y.refreshIntervalSec),k(Y.folderPreviewDepth),P.current=JSON.stringify(Q)},[]);q(()=>{h(n||{})},[n,h]);let b=C(()=>JSON.stringify(qc({workspaceSettings:{webTerminalEnabled:c,vncAllowDirect:f,treeMaxDepth:o,treeMaxEntries:x}})),[c,f,o,x]);q(()=>{if(b===P.current)return;if(j.current)clearTimeout(j.current);return j.current=setTimeout(async()=>{if(!R.current)return;let W=document.activeElement;if(W&&W.closest?.(".settings-number-stepper"))return;try{let Q=await X_(JSON.parse(b));if(!R.current||!Q?.ok||!Q?.settings)return;if(P.current=b,_?.({workspaceSettings:Q.settings}),i?.(null),y(!0),T.current)clearTimeout(T.current);T.current=setTimeout(()=>{if(R.current)y(!1)},4000)}catch(Q){i?.(String(Q?.message||Q),"error")}},800),()=>{if(j.current)clearTimeout(j.current)}},[b,_,i]);let A=G((W)=>{let Q=Qc(W);if(K(Q.refreshIntervalSec),k(Q.folderPreviewDepth),V(!0),H.current)clearTimeout(H.current);H.current=setTimeout(()=>{if(R.current)V(!1)},3000)},[]);return s`
        <div class="settings-section">
            ${F&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${r("settings.workspace.serverApplied")}
                </div>
            `}
            ${p&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${r("settings.workspace.browserApplied")}
                </div>
            `}

            <h3>${r("settings.workspace.access")}</h3>
            <div class="settings-row">
                <label>${r("settings.workspace.enableTerminal")}</label>
                <input type="checkbox" checked=${c} onChange=${(W)=>u(W.target.checked)} />
            </div>
            <div class="settings-row">
                <label>${r("settings.workspace.allowVnc")}</label>
                <input type="checkbox" checked=${f} onChange=${(W)=>$(W.target.checked)} />
            </div>
            <p class="settings-hint">${r("settings.workspace.accessHint")}</p>

            <h3 style="margin-top:20px">${r("settings.workspace.guardrails")}</h3>
            <div class="settings-row">
                <label>${r("settings.workspace.maxDepth")}</label>
                <${nn}
                    label=${r("settings.workspace.maxDepthAria")}
                    value=${o}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${g}
                />
                <span class="settings-hint" style="margin:0">${r("settings.workspace.maxDepthHintPre")} <code>/workspace/tree</code> ${r("settings.workspace.maxDepthHintPost")}</span>
            </div>
            <div class="settings-row">
                <label>${r("settings.workspace.maxEntries")}</label>
                <${nn}
                    label=${r("settings.workspace.maxEntriesAria")}
                    value=${x}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${l}
                />
                <span class="settings-hint" style="margin:0">${r("settings.workspace.maxEntriesHint")}</span>
            </div>

            <h3 style="margin-top:20px">${r("settings.workspace.thisBrowser")}</h3>
            <div class="settings-row">
                <label>${r("settings.workspace.refreshInterval")}</label>
                <${nn}
                    label=${r("settings.workspace.refreshIntervalAria")}
                    value=${v}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(W)=>A({refreshIntervalSec:W})}
                />
            </div>
            <div class="settings-row">
                <label>${r("settings.workspace.folderDepth")}</label>
                <${nn}
                    label=${r("settings.workspace.folderDepthAria")}
                    value=${B}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(W)=>A({folderPreviewDepth:W})}
                />
                <span class="settings-hint" style="margin:0">${r("settings.workspace.folderDepthHintPre")} <code>0</code> ${r("settings.workspace.folderDepthHintPost")}</span>
            </div>
            <p class="settings-hint">${r("settings.workspace.footerHint")}</p>
        </div>
    `}var Zc=O(()=>{e();zn();Mc();Sn();cn()});var Dc={};fn(Dc,{EnvironmentSection:()=>e0});function O_(n={}){let i=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(i.variables)?i.variables:[],overrides:i.overrides&&typeof i.overrides==="object"?i.overrides:{},count:Number(i.count||0),overrideCount:Number(i.overrideCount||0),keychainEnvNames:Array.isArray(i.keychainEnvNames)?i.keychainEnvNames:[]}}function e0({settingsData:n,filter:i="",setStatus:_,mergeSettingsData:r}){let{t:c}=t(),[u,f]=w(()=>O_(n||{})),[$,o]=w({}),[g,x]=w(""),[l,v]=w(""),[K,B]=w(null);q(()=>{f(O_(n||{})),o({})},[n]);let k=G((j)=>{let T=O_({environmentSettings:j?.settings||j});return f(T),r?.({environmentSettings:T}),o({}),T},[r]),F=G(async()=>{try{let j=await Q_();if(j?.ok)k(j.settings);_?.(c("settings.environment.refreshedToast"),"info")}catch(j){_?.(String(j?.message||j),"error")}},[k,_]),y=G(async(j,T)=>{let H=String(j||"").trim();if(!H)return;B(H);try{let R=await qi({action:"set",name:H,value:String(T??"")});if(R?.ok)k(R.settings);if(_?.(c("settings.environment.savedToast",{name:H}),"info"),H===g.trim())x(""),v("")}catch(R){_?.(String(R?.message||R),"error")}finally{B(null)}},[k,g,_]),p=G(async(j)=>{let T=String(j||"").trim();if(!T)return;B(T);try{let H=await qi({action:"clear",name:T});if(H?.ok)k(H.settings);_?.(c("settings.environment.clearedToast",{name:T}),"info")}catch(H){_?.(String(H?.message||H),"error")}finally{B(null)}},[k,_]),V=C(()=>{let j=String(i||"").trim().toLowerCase(),T=Array.isArray(u.variables)?u.variables:[];if(!j)return T;return T.filter((H)=>{return`${H?.name||""} ${H?.value||""} ${H?.source||""}`.toLowerCase().includes(j)})},[u.variables,i]),P=G((j,T)=>{o((H)=>({...H||{},[j]:T}))},[]);return s`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">${c("settings.environment.heading")}</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        ${c("settings.environment.introPre")} <code>process.env</code>${c("settings.environment.introPost")}
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${F}>${c("settings.environment.refresh")}</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>${c("settings.environment.addOverride")}</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${g}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(j)=>x(j.target.value)}
                    />
                    <input
                        type="text"
                        value=${l}
                        placeholder=${c("settings.environment.valuePlaceholder")}
                        spellcheck="false"
                        onInput=${(j)=>v(j.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!g.trim()||K===g.trim()}
                        onClick=${()=>y(g,l)}
                    >${c("settings.environment.save")}</button>
                </div>
            </div>

            <p class="settings-hint">
                ${c("settings.environment.countLine",{count:u.count,overrides:u.overrideCount,keychain:u.keychainEnvNames.length})}
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${V.map((j)=>{let T=String(j?.name||""),H=Object.prototype.hasOwnProperty.call($,T)?$[T]:j.value,R=H!==j.value,h=K===T;return s`
                        <div class="settings-tool-row" key=${T} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${T}>${T}</span>
                            <input
                                type="text"
                                value=${H}
                                spellcheck="false"
                                onInput=${(b)=>P(T,b.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${j.overridden?c("settings.environment.overridden"):c("settings.environment.inherited")}>
                                ${j.overridden?c("settings.environment.kindOverride"):c("settings.environment.kindProcess")}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${h||!R} onClick=${()=>y(T,H)}>${c("settings.environment.save")}</button>
                                <button type="button" disabled=${h||!j.overridden} onClick=${()=>p(T)}>${c("settings.environment.clear")}</button>
                            </span>
                        </div>
                    `})}
                ${V.length===0&&s`<p class="settings-hint">${c("settings.environment.noMatch",{filter:i})}</p>`}
            </div>
        </div>
    `}var Ic=O(()=>{e();zn();cn()});var Yc={};fn(Yc,{ProvidersSection:()=>a0});function m0(n){switch(n){case"oauth":return"OAuth";case"api_key":return Pn("settings.providers.authApiKey");case"custom":return Pn("settings.providers.authConfigured");default:return Pn("settings.providers.authConfigured")}}function a0({providers:n,setStatus:i}){let{t:_}=t(),[r,c]=w(null),[u,f]=w(null),[$,o]=w({}),g=G((y,p)=>{o((V)=>({...V,[y]:p}))},[]),x=G(async(y)=>{let p=($.apiKey||"").trim();if(!p){i?.(_("settings.providers.apiKeyEmpty"),"error");return}c(y),i?.(_("settings.providers.configuringToast",{provider:y}),"info");try{let V=JSON.stringify({provider:y,method:"api_key",api_key:p}),P=await Bn("default",`/login __step2 ${V}`,null,[]);if(P?.command?.status==="error"){i?.(P.command.message,"error");return}i?.(P?.command?.message||_("settings.providers.configured",{provider:y}),"success"),f(null),o({})}catch(V){i?.(String(V.message||V),"error")}finally{c(null)}},[$,i]),l=G(async(y,p)=>{c(y),i?.(_("settings.providers.configuringToast",{provider:y}),"info");try{let V={provider:y,method:"custom"};for(let T of p.customFields||[])V[T.key]=($[T.key]||"").trim();let P=JSON.stringify(V),j=await Bn("default",`/login __step2 ${P}`,null,[]);if(j?.command?.status==="error"){i?.(j.command.message,"error");return}i?.(j?.command?.message||_("settings.providers.configured",{provider:y}),"success"),f(null),o({})}catch(V){i?.(String(V.message||V),"error")}finally{c(null)}},[$,i]),v=G(async(y)=>{c(y),i?.(_("settings.providers.startingOAuth",{provider:y}),"info");try{let p=JSON.stringify({provider:y}),P=(await Bn("default",`/login __step1 ${p}`,null,[]))?.command?.message||"";if(P.includes("http")){let j=P.match(/(https?:\/\/[^\s)]+)/);if(j)window.open(j[1],"_blank","noopener"),i?.(_("settings.providers.oauthOpened"),"success");else i?.(P,"success")}else i?.(P||_("settings.providers.oauthStarted",{provider:y}),"success")}catch(p){i?.(String(p.message||p),"error")}finally{c(null)}},[i]),K=G(async(y)=>{if(r)return;c(y),i?.(_("settings.providers.loggingOut",{provider:y}),"info");try{await Bn("default",`/logout ${y}`,null,[]),i?.(_("settings.providers.loggedOut",{provider:y}),"success")}catch(p){i?.(String(p.message||p),"error")}finally{c(null)}},[r,i]),B=n||[],k=(y)=>u===y,F=(y)=>{f((p)=>p===y?null:y),o({})};return s`
        <div class="settings-section">
            <h3>${_("settings.providers.heading")}</h3>
            <div class="settings-provider-list">
                ${B.map((y)=>s`
                    <div class=${`settings-provider-card${y.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!y.configured&&F(y.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${y.name}</strong>
                                <span class="settings-provider-id">${y.id}</span>
                                ${y.configured&&s`<span class="settings-tag settings-tag-skill">${m0(y.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${y.hasOAuth&&s`<span class="settings-tag">OAuth</span>`}
                                ${y.hasApiKey&&s`<span class="settings-tag">API Key</span>`}
                                ${y.isCustom&&s`<span class="settings-tag">${_("settings.providers.tagCustom")}</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${y.configured?s`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${r===y.id} onClick=${(p)=>{p.stopPropagation(),K(y.id)}}
                                    >${r===y.id?"…":_("settings.providers.logout")}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${r===y.id} onClick=${(p)=>{p.stopPropagation(),F(y.id)}}
                                    >${_("settings.providers.reconfigure")}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${r===y.id} onClick=${(p)=>{p.stopPropagation(),F(y.id)}}
                                    >${_("settings.providers.setUp")}</button>
                                `}
                            </div>
                        </div>

                        ${k(y.id)&&s`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">${_("settings.providers.setupHint")}</p>
                                ${y.hasOAuth&&s`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${r===y.id}
                                            onClick=${()=>v(y.id)}>
                                            ${r===y.id?_("settings.providers.starting"):_("settings.providers.signInOAuth")}
                                        </button>
                                    </div>
                                `}
                                ${y.hasApiKey&&s`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>${_("settings.providers.apiKeyLabel")}</label>
                                            <input type="password" value=${$.apiKey||""}
                                                onInput=${(p)=>g("apiKey",p.target.value)}
                                                placeholder=${y.apiKeyHint||_("settings.providers.apiKeyPlaceholder")} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${r===y.id||!($.apiKey||"").trim()}
                                                onClick=${()=>x(y.id)}>
                                                ${r===y.id?"…":_("settings.providers.save")}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${y.isCustom&&s`
                                    <div class="settings-provider-method">
                                        ${(y.customFields||[]).map((p)=>s`
                                            <div class="settings-provider-field-row">
                                                <label>${p.label}${p.required?" *":""}</label>
                                                <input type="text" value=${$[p.key]||""}
                                                    onInput=${(V)=>g(p.key,V.target.value)}
                                                    placeholder=${p.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${r===y.id}
                                                onClick=${()=>l(y.id,y)}>
                                                ${r===y.id?_("settings.providers.configuring"):_("settings.providers.saveConfig")}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                    </div>
                `)}
            </div>
        </div>
    `}var Lc=O(()=>{e();zn();cn()});var tc={};fn(tc,{ModelsSection:()=>cs});function _s(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function rs({thinkingLevel:n,supportsThinking:i,provider:_,availableLevels:r,onSetLevel:c,disabled:u}){let{t:f}=t(),$=_s(_)?ns:is,o=r&&r.length>1?r:["off","minimal","low","medium","high"],g=Math.max(0,o.indexOf(n??"off"));if(!i)return s`<div class="settings-thinking-slider"><label>${f("settings.models.thinkingLevel")}</label><p class="settings-hint" style="margin:4px 0 0">${f("settings.models.noThinking")}</p></div>`;return s`
        <div class="settings-thinking-slider">
            <label>${f("settings.models.thinkingLevelLabel")} <strong>${$[o[g]]||o[g]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${o.length-1} step="1" value=${g} disabled=${u}
                    onInput=${(x)=>c(o[parseInt(x.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${o.map((x,l)=>s`<span class=${l===g?"active":""} onClick=${()=>!u&&c(x)}>${$[x]||x}</span>`)}
                </div>
            </div>
        </div>
    `}function cs({filter:n=""}){let{t:i}=t(),[_,r]=w(null),[c,u]=w(!1),[f,$]=w("off"),[o,g]=w(!1),[x,l]=w(["off"]),[v,K]=w(!1),[B,k]=w(!1),[F,y]=w(!1),p=G(async()=>{let W=await M_();if(r(W),W.thinking_level)$(W.thinking_level);if(g(Boolean(W.supports_thinking)),K(Boolean(W.scoped_models_only)),Array.isArray(W.available_thinking_levels)&&W.available_thinking_levels.length>0)l(W.available_thinking_levels);return W},[]);q(()=>{p().catch((W)=>{console.warn("[settings/models] Failed to load models.",W),r({models:[],model_options:[]})})},[]);let V=G(async(W)=>{if(c)return;u(!0);try{await Bn("default",`/model ${W}`,null,[]),await p()}catch(Q){console.error("Failed to switch model:",Q)}finally{u(!1)}},[c,p]),P=G(async(W)=>{if(B)return;k(!0),K(Boolean(W));try{let Q=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scopedModelsOnly:Boolean(W)})}),Y=await Q.json().catch(()=>({}));if(!Q.ok||!Y?.ok)throw Error(Y?.error||"Failed to save scoped model setting.");await p()}catch(Q){console.error("Failed to set scoped model filtering:",Q),await p().catch((Y)=>{console.warn("[settings/models] Reload after scoped model filtering failure failed.",Y)})}finally{k(!1)}},[B,p]),j=G(async(W)=>{if(F)return;y(!0),$(W);try{let Q=await Bn("default",`/thinking ${W}`,null,[]);if(Q?.command?.thinking_level)$(Q.command.thinking_level);g(Q?.command?.supports_thinking!==!1),await p()}catch(Q){console.error("Failed to set thinking:",Q),await p().catch((Y)=>{console.warn("[settings/models] Reload after thinking change failure failed.",Y)})}finally{y(!1)}},[F,p]);if(!_)return s`<div class="settings-loading">${i("settings.models.loading")}</div>`;let T=_.model_options||[],H=_.current,h=T.find((W)=>W.label===H)?.provider||"",b=n.toLowerCase(),A=b?T.filter((W)=>W.label.toLowerCase().includes(b)||(W.provider||"").toLowerCase().includes(b)):T;return s`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">${i("settings.models.summary")}</div>
            <div class="settings-row" style="padding:0 0 10px 0; align-items:flex-start">
                <label>${i("settings.models.scopedOnly")}</label>
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0">
                    <label style="display:flex; align-items:center; gap:8px; font-weight:500">
                        <input type="checkbox" checked=${v} disabled=${B} onChange=${(W)=>P(W.target.checked)} />
                        ${i("settings.models.scopedCheckboxPre")} <code>enabledModels</code> ${i("settings.models.scopedCheckboxPost")}
                    </label>
                    <span class="settings-hint" style="margin:0">
                        ${i("settings.models.scopedHintPre")} <code>list_models</code> ${i("settings.models.scopedHintPost")}
                    </span>
                </div>
            </div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>${i("settings.models.colModel")}</th><th>${i("settings.models.colProvider")}</th><th>${i("settings.models.colContext")}</th><th style="text-align:center">${i("settings.models.colReasoning")}</th></tr></thead>
                    <tbody>
                        ${A.map((W)=>s`
                            <tr class=${W.label===H?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${W.label===H} disabled=${c} onChange=${()=>V(W.label)} /></td>
                                <td>${W.name||W.label}</td><td>${W.provider}</td>
                                <td>${W.context_window?(W.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${W.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${A.length===0&&s`<tr><td colspan="5" class="settings-empty">${i("settings.models.noMatch",{filter:n})}</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${rs}
                    thinkingLevel=${f}
                    supportsThinking=${o}
                    provider=${h}
                    availableLevels=${x}
                    onSetLevel=${j}
                    disabled=${F||c} />
            </div>
        </div>
    `}var ns,is;var Cc=O(()=>{e();zn();cn();ns={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},is={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function S_(n){let i=String(n||"").trim().toLowerCase();if(!i)return"default";if(i==="solarized-dark"||i==="solarized-light")return"solarized";if(i==="github-dark"||i==="github-light")return"github";if(i==="tokyo-night")return"tokyo";return i}function dc(n){if(!n)return null;let i=String(n).trim();if(!i)return null;let _=i.startsWith("#")?i.slice(1):i;if(!/^[0-9a-fA-F]{3}$/.test(_)&&!/^[0-9a-fA-F]{6}$/.test(_))return null;let r=_.length===3?_.split("").map((u)=>u+u).join(""):_,c=parseInt(r,16);return{r:c>>16&255,g:c>>8&255,b:c&255,hex:`#${r.toLowerCase()}`}}function fs(n,i){try{if(document.body){n.style.display="none",document.body.appendChild(n);let _=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),_}}catch{return i}return i}function ss(n){if(!n||typeof document>"u")return null;let i=String(n).trim();if(!i)return null;let _=document.createElement("div");if(_.style.color="",_.style.color=i,!_.style.color)return null;let c=fs(_,_.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!c)return null;let u=parseInt(c[1],10),f=parseInt(c[2],10),$=parseInt(c[3],10);if(![u,f,$].every((g)=>Number.isFinite(g)))return null;let o=`#${[u,f,$].map((g)=>g.toString(16).padStart(2,"0")).join("")}`;return{r:u,g:f,b:$,hex:o}}function An(n){return dc(n)||ss(n)}function e_(n,i,_){let r=Math.round(n.r+(i.r-n.r)*_),c=Math.round(n.g+(i.g-n.g)*_),u=Math.round(n.b+(i.b-n.b)*_);return`rgb(${r} ${c} ${u})`}function Li(n,i){return`rgba(${n.r}, ${n.g}, ${n.b}, ${i})`}function $s(n){let i=n.r/255,_=n.g/255,r=n.b/255,c=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),u=_<=0.03928?_/12.92:Math.pow((_+0.055)/1.055,2.4),f=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4);return 0.2126*c+0.7152*u+0.0722*f}function gs(n){return $s(n)>0.4?"#000000":"#ffffff"}function Sc(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function m_(n){return Jc[n]||Jc.default}function os(n){return n.mode==="auto"?Sc():n.mode}function ec(n,i){let _=m_(n);if(i==="dark"&&_.dark)return _.dark;if(i==="light"&&_.light)return _.light;return _.dark||_.light||Fn}function Hn(n,i,_){let r=An(n);if(!r)return n;return e_(r,i,_)}function mc(n,i,_){let r=An(i);if(!r)return n;let u=dc(_==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:Hn(n.bgPrimary,r,0.08),bgSecondary:Hn(n.bgSecondary,r,0.12),bgHover:Hn(n.bgHover,r,0.16),textPrimary:Hn(n.textPrimary,r,_==="dark"?0.08:0.06),textSecondary:Hn(n.textSecondary,r,_==="dark"?0.12:0.1),borderColor:Hn(n.borderColor,r,0.1),accent:r.hex,accentHover:u?e_(r,u,0.18):r.hex,warning:Hn(n.warning||Fn.warning,r,0.14),danger:Hn(n.danger,r,0.16),success:Hn(n.success,r,0.16)}}function ls(n,i){let _=An(n?.warning);if(_)return _.hex;let r=An(i==="dark"?Ji.warning:Fn.warning)||An(Fn.warning),c=An(n?.accent);if(r&&c)return e_(r,c,i==="dark"?0.18:0.14);return i==="dark"?Ji.warning:Fn.warning}function ws(n,i){if(typeof document>"u")return;let _=document.documentElement,r=n.accent,c=An(r),u=c?Li(c,i==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,f=c?Li(c,i==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",$=c?Li(c,i==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",o=c?gs(c):i==="dark"?"#000000":"#ffffff",g=c?Li(c,i==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",x=ls(n,i),l={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":r,"--accent-hover":n.accentHover||r,"--accent-color-alpha":g,"--accent-soft":f,"--accent-soft-strong":$,"--accent-contrast-text":o,"--warning-color":x,"--danger-color":n.danger||Fn.danger,"--success-color":n.success||Fn.success,"--search-highlight-color":u||"rgba(29, 155, 240, 0.2)"};Object.entries(l).forEach(([v,K])=>{if(K)_.style.setProperty(v,K)})}function ys(){if(typeof document>"u")return;let n=document.documentElement;us.forEach((i)=>n.style.removeProperty(i))}function mn(n,i={}){if(typeof document>"u")return null;let _=typeof i.id==="string"&&i.id.trim()?i.id.trim():null,r=_?document.getElementById(_):document.querySelector(`meta[name="${n}"]`);if(!r)r=document.createElement("meta"),document.head.appendChild(r);if(r.setAttribute("name",n),_)r.setAttribute("id",_);return r}function Oc(n){let i=S_(Zn?.theme||"default"),_=Zn?.tint?String(Zn.tint).trim():null,r=ec(i,n);if(i==="default"&&_)r=mc(r,_,n);if(r?.bgPrimary)return r.bgPrimary;return n==="dark"?Ji.bgPrimary:Fn.bgPrimary}function xs(n,i){if(typeof document>"u")return;let _=mn("theme-color",{id:"dynamic-theme-color"});if(_&&n)_.removeAttribute("media"),_.setAttribute("content",n);let r=mn("theme-color",{id:"theme-color-light"});if(r)r.setAttribute("media","(prefers-color-scheme: light)"),r.setAttribute("content",Oc("light"));let c=mn("theme-color",{id:"theme-color-dark"});if(c)c.setAttribute("media","(prefers-color-scheme: dark)"),c.setAttribute("content",Oc("dark"));let u=mn("msapplication-TileColor");if(u&&n)u.setAttribute("content",n);let f=mn("msapplication-navbutton-color");if(f&&n)f.setAttribute("content",n);let $=mn("apple-mobile-web-app-status-bar-style");if($)$.setAttribute("content",i==="dark"?"black-translucent":"default")}function bs(){if(typeof window>"u")return;let n={...Zn,mode:Ec};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function vs(){if(typeof window>"u")return"web:default";try{let i=new URL(window.location.href).searchParams.get("chat_jid");return i&&i.trim()?i.trim():"web:default"}catch{return"web:default"}}function ks(n){if(typeof document>"u"||!n)return;let i=document.documentElement;if(i?.style)i.style.background=n;if(document.body?.style)document.body.style.background=n}function a_(n,i={}){if(typeof window>"u"||typeof document>"u")return;let _=S_(n?.theme||"default"),r=n?.tint?String(n.tint).trim():null,c=m_(_),u=os(c),f=ec(_,u);Zn={theme:_,tint:r},Ec=u;let $=document.documentElement;$.dataset.theme=u,$.dataset.colorTheme=_,$.dataset.tint=r?String(r):"",$.style.colorScheme=u;let o=f;if(_==="default"&&r)o=mc(f,r,u);if(_==="default"&&!r)ys();else ws(o,u);if(ks(o.bgPrimary),xs(o.bgPrimary,u),bs(),i.persist!==!1)if($n(d_,_),r)$n(Ci,r);else $n(Ci,"")}function ti(){if(m_(Zn.theme).mode!=="auto")return;a_(Zn,{persist:!1})}function ps(){if(typeof window>"u")return;let n=S_(Gn(d_)||"default"),i=(()=>{let _=Gn(Ci);return _?_.trim():null})();a_({theme:n,tint:i},{persist:!1})}function Mg(){if(typeof window>"u")return()=>{};if(ps(),window.matchMedia&&!E_){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",ti);else if(n.addListener)n.addListener(ti);return E_=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",ti);else if(n.removeListener)n.removeListener(ti);E_=!1}}return()=>{}}function nr(n){if(!n||typeof n!=="object")return;let i=vs(),_=n.chat_jid||n.chatJid||null,r=n.theme??n.name??n.colorTheme,c=n.tint??null;if(!_||_===i)a_({theme:r||"default",tint:c},{persist:!1});$n(d_,r||"default"),$n(Ci,c||"")}function qg(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return Sc()}var d_="piclaw_theme",Ci="piclaw_tint",Fn,Ji,Jc,us,Zn,Ec="light",E_=!1;var ac=O(()=>{Fn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Ji={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Jc={default:{label:"Default",mode:"auto",light:Fn,dark:Ji},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},us=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],Zn={theme:"default",tint:null}});function Ks(n){return Zr.map((i)=>({value:i,label:Dr[i],active:i===n}))}function nu({variant:n="inline",onChange:i}={}){let{locale:_,setLocale:r,t:c}=t(),u=Ks(_),f=($)=>{let o=$?.currentTarget?.value;r(o),i?.(o)};return s`
    <div class=${`language-switcher language-switcher-${n}`} role="none">
      <label class="language-switcher-label" for="language-switcher-select">${c("language.label")}</label>
      <select
        id="language-switcher-select"
        class="language-switcher-select"
        value=${_}
        aria-label=${c("language.label")}
        onClick=${($)=>$.stopPropagation()}
        onChange=${f}
      >
        ${u.map(($)=>s`
          <option key=${$.value} value=${$.value}>${$.label}</option>
        `)}
      </select>
    </div>
  `}var iu=O(()=>{e();cn()});var ru={};fn(ru,{ThemeSection:()=>hs});function _u(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function hs({themes:n,colorKeys:i,settingsData:_,setStatus:r,mergeSettingsData:c}){let{t:u}=t(),[f,$]=w("default"),[o,g]=w(""),[x,l]=w(!1),v=J(""),K=J(null),B=J(!0);q(()=>{return B.current=!0,()=>{B.current=!1}},[]);let k=G((P)=>{let j=_u(P);$(j.uiTheme),g(j.uiTint),v.current=JSON.stringify(j)},[]);q(()=>{if(_){k(_);return}k({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[_,k]);let F=G((P,j)=>{nr({theme:P,tint:j||null}),$(P||"default"),g(j||"")},[]),y=C(()=>JSON.stringify(_u({uiTheme:f,uiTint:o})),[f,o]);q(()=>{if(y===v.current)return;if(K.current)clearTimeout(K.current);return K.current=setTimeout(async()=>{if(!B.current)return;l(!0);try{let P=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),j=await P.json().catch(()=>({}));if(!B.current)return;if(!P.ok||!j?.ok||!j?.settings){r?.(j?.error||"Failed to save appearance settings.","error");return}v.current=y,c?.(j.settings),r?.("Appearance synced across clients.","success")}catch(P){if(!B.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",P),r?.("Failed to save appearance settings.","error")}finally{if(B.current)l(!1)}},250),()=>{if(K.current)clearTimeout(K.current)}},[y,c,r]);let p=i||[],V=n||[];return s`
        <div class="settings-section">
            <div class="settings-row settings-language-row">
                <${nu} variant="inline" />
            </div>
            ${x&&s`<div class="settings-hint" style="margin:0 0 12px 0;">${u("settings.appearance.syncing")}</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${f==="default"}
                        onChange=${()=>F("default",o)} />
                    <strong>${u("settings.appearance.default")}</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">${u("settings.appearance.autoLightDark")}</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">${u("settings.appearance.tint")}</label>
                    <input type="color"
                        value=${o||"#1d9bf0"}
                        onInput=${(P)=>{let j=P.target.value;if(g(j),f==="default")nr({theme:"default",tint:j})}} />
                    ${o&&s`
                        <button class="settings-tint-clear" onClick=${()=>F("default","")}
                            title=${u("settings.appearance.clearTint")}>\u2715</button>
                    `}
                    <span class="settings-tint-hex">${o||u("settings.appearance.none")}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${p.map((P)=>s`<th class="settings-swatch-header">${P.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${V.filter((P)=>P.name!=="default").map((P)=>s`
                        <tr class=${P.name===f?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>F(P.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${P.name===f} onChange=${()=>F(P.name,"")} /></td>
                            <td><strong>${P.label}</strong></td>
                            <td>${P.mode}</td>
                            ${p.map((j)=>{let T=P.colors?.[j];return s`<td class="settings-swatch-cell">
                                    ${T?s`<span class="settings-color-swatch" style=${"background:"+T} title=${T}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var cu=O(()=>{e();ac();iu();cn()});var fu={};fn(fu,{__scheduledTasksSettingsTest:()=>js,ScheduledTasksSection:()=>Ws});function Dn(n){if(!n)return"—";let i=new Date(n);if(Number.isNaN(i.getTime()))return n;return i.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function uu(n){let i=Number(n);if(!Number.isFinite(i))return"—";if(i<1000)return`${Math.round(i)}ms`;return`${(i/1000).toFixed(i<1e4?1:0)}s`}function ir(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${Dn(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function _r(n){let i=n?.task_kind||"agent";return i==="internal"?"internal/protected":i}function rr(n){return(n?.task_kind||"agent")==="internal"}function zs(n){if(!n)return"";let i=String(n).replace(/\s+/g," ").trim();return i.length>180?`${i.slice(0,179)}…`:i}function an({children:n,type:i="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${i}`}>${n}</span>`}function Hs({task:n}){let i=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!i.length)return s`<p class="settings-hint">No run logs recorded yet.</p>`;return s`
        <div class="settings-task-run-list">
            ${i.map((_)=>s`
                <div class=${`settings-task-run-row settings-task-run-${_.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${an} type=${_.status==="error"?"error":"success"}>${_.status||"unknown"}<//>
                        <span>${Dn(_.run_at)}</span>
                        <span>${uu(_.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${_.error_summary||zs(_.error)||_.result_summary||_.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function Fs({task:n,onAction:i}){if(!n)return s`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let _=rr(n);return s`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${n.summary||n.id}</h4>
                    <code>${n.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${n.status==="active"&&s`<button onClick=${()=>i("pause",n)}>Pause</button>`}
                    ${n.status==="paused"&&s`<button onClick=${()=>i("resume",n)}>Resume</button>`}
                    <button class="danger" onClick=${()=>i("delete",n)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${n.status||"—"}</strong>
                <span>Kind</span><strong>${_r(n)}</strong>
                <span>Schedule</span><strong>${ir(n)}</strong>
                <span>Next run</span><strong>${Dn(n.next_run)}</strong>
                <span>Last run</span><strong>${Dn(n.last_run)}</strong>
                <span>Last result</span><strong>${n.latest_run_log?.status||n.last_result||"—"}</strong>
                <span>Chat</span><code>${n.chat_jid||"—"}</code>
                <span>Model</span><code>${n.model||"default"}</code>
                ${n.cwd&&s`<span>CWD</span><code>${n.cwd}</code>`}
                ${n.timeout_sec&&s`<span>Timeout</span><strong>${n.timeout_sec}s</strong>`}
                ${_&&s`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${n.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${n.command||n.prompt||n.command_summary||n.prompt_summary||n.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${Hs} task=${n} />
        </div>
    `}function Ws({filter:n="",setStatus:i}){let[_,r]=w([]),[c,u]=w({active:0,paused:0,completed:0}),[f,$]=w("all"),[o,g]=w(""),[x,l]=w(!0),[v,K]=w(null),[B,k]=w(null),[F,y]=w(null),[p,V]=w(!1),P=G(async(h={})=>{l(!0),K(null);try{let b=await z_({status:f,chatJid:o.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});r(b.tasks||[]),u(b.counts||{active:0,paused:0,completed:0});let A=h.selectedId||B,W=(b.tasks||[]).find((Q)=>Q.id===A)||(b.tasks||[])[0]||null;k(W?.id||null),y(W)}catch(b){K(b?.message||"Failed to load scheduled tasks.")}finally{l(!1)}},[f,o,B]);q(()=>{P()},[P]);let j=String(n||"").trim().toLowerCase(),T=C(()=>{if(!j)return _;return _.filter((h)=>[h.id,h.chat_jid,h.status,h.task_kind,h.schedule_type,h.schedule_value,h.summary,h.prompt_summary,h.command_summary,h.latest_run_log?.error_summary].some((b)=>String(b||"").toLowerCase().includes(j)))},[_,j]),H=G((h)=>{k(h?.id||null),y(h||null)},[]),R=G(async(h,b)=>{if(!b||p)return;let A=rr(b),W=b.summary||b.command_summary||b.prompt_summary||b.id,Q=h==="delete"?`Delete scheduled task ${b.id}?

${W}`:`${h==="pause"?"Pause":"Resume"} scheduled task ${b.id}?

${W}`;if(!window.confirm(Q))return;if(A&&!window.confirm(`Task ${b.id} is internal/protected. Continue with ${h}?`))return;V(!0),i?.(`${h==="delete"?"Deleting":h==="pause"?"Pausing":"Resuming"} ${b.id}…`,"info");try{await H_(h,b.id,{allowInternal:A}),i?.(`Scheduled task ${b.id} ${h==="delete"?"deleted":h==="pause"?"paused":"resumed"}.`,"success"),await P({selectedId:h==="delete"?null:b.id})}catch(Y){i?.(Y?.message||`Failed to ${h} task.`,"error")}finally{V(!1)}},[p,P,i]);return s`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${an} type="active">Active ${c.active||0}<//>
                    <${an} type="paused">Paused ${c.paused||0}<//>
                    <${an} type="completed">Completed ${c.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${f} onChange=${(h)=>$(h.target.value)}>
                        ${Bs.map((h)=>s`<option value=${h}>${h==="all"?"All statuses":h}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${o} onInput=${(h)=>g(h.target.value)} />
                    <button onClick=${()=>P()} disabled=${x}>Refresh</button>
                </div>
            </div>

            ${x&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${v&&s`<div class="settings-error-state">${v}</div>`}
            ${!x&&!v&&_.length===0&&s`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/_`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!x&&!v&&_.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${T.map((h)=>s`
                            <button class=${`settings-task-row ${h.id===B?"active":""}`} onClick=${()=>H(h)}>
                                <span class="settings-task-row-main">
                                    <strong>${h.summary||h.id}</strong>
                                    <span>${ir(h)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${an} type=${h.status||"neutral"}>${h.status}<//>
                                    <${an}>${_r(h)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${Dn(h.next_run)} · Last ${Dn(h.last_run)}${h.latest_run_log?.status?` · ${h.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${T.length===0&&s`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${Fs} task=${F&&T.some((h)=>h.id===F.id)?F:T[0]} onAction=${R} />
                </div>
            `}
        </div>
    `}var Bs,js;var su=O(()=>{e();zn();Bs=["all","active","paused","completed"];js={formatDateTime:Dn,formatDuration:uu,labelForSchedule:ir,kindLabel:_r,isProtectedTask:rr}});function $u(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function ni(n){return typeof n==="string"&&n.trim().length>0}function cr(n,...i){let _=$u(n);if(!_)return!0;let r=i.map((c)=>$u(c)).filter(Boolean);for(let c of r)if(c.startsWith(_)||c.includes(_))return!0;return!1}function gu(n){if(!Array.isArray(n))return null;let i=[],_=new Set;for(let r of n){let c=String(r||"").trim();if(!c)continue;let u=c.toLowerCase();if(_.has(u))continue;_.add(u),i.push(c)}return i}function bi(n){let i=n&&typeof n==="object"?n:{};return{workspaceCommands:gu(i.workspaceCommands),slashCommands:gu(i.slashCommands)}}function ou(n,i){if(!Array.isArray(n))return!0;return n.some((_)=>_.toLowerCase()===i.toLowerCase())}function Us(n){let i=Array.isArray(n?.commands)?n.commands:[],_=bi(n?.settings),r=String(n?.query||"");return i.filter((c)=>ou(_.workspaceCommands,c.id)).filter((c)=>cr(r,c.label,c.description,...c.keywords||[])).map((c)=>({key:`workspace:${c.id}`,kind:"workspace",title:c.label,subtitle:c.description,searchText:`${c.label} ${c.description} ${(c.keywords||[]).join(" ")}`.trim(),visualHint:c.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:c.id}))}function Gs(n){let i=Array.isArray(n?.agents)?n.agents:[],_=String(n?.query||""),r=new Set;return i.filter((c)=>{let u=ni(c?.chat_jid)?c.chat_jid.trim():"";if(!u||r.has(u))return!1;if(c?.archived_at)return!1;return r.add(u),!0}).filter((c)=>cr(_,`@${String(c?.agent_name||"").trim()}`,c?.session_name,c?.chat_jid)).map((c)=>{let u=ni(c?.agent_name)?c.agent_name.trim():String(c?.chat_jid||"").replace(/^[^:]+:/,""),f=ni(c?.session_name)?c.session_name.trim():"",$=String(c?.chat_jid||"").trim();return{key:`agent:${$}`,kind:"agent",title:`@${u}`,subtitle:f||$,searchText:`@${u} ${f} ${$}`.trim(),visualHint:u.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:$}})}function Ps(n){let i=Array.isArray(n?.slashCommands)?n.slashCommands:[],_=bi(n?.settings),r=String(n?.query||""),c=new Set;return i.filter((u)=>{let f=ni(u?.name)?u.name.trim():"";if(!f||c.has(f.toLowerCase()))return!1;return c.add(f.toLowerCase()),ou(_.slashCommands,f)}).filter((u)=>cr(r,u?.name,u?.description,u?.source)).map((u)=>{let f=String(u?.name||"").trim(),$=ni(u?.description)?u.description.trim():"slash command",o=ni(u?.source)?u.source.trim():"";return{key:`slash:${f}`,kind:"slash",title:f,subtitle:$,searchText:`${f} ${$} ${String(u?.source||"")}`.trim(),visualHint:"/",categoryLabel:o||"Slash",actionHint:"Insert",commandName:f}})}function Eg(n){return[...Gs({agents:n?.agents,query:n?.query}),...Us({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...Ps({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var ii;var lu=O(()=>{ii=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var xu={};fn(xu,{QuickActionsSection:()=>Ts});function wu(n,...i){let _=String(n||"").trim().toLowerCase();if(!_)return!0;return i.some((r)=>String(r||"").toLowerCase().includes(_))}function yu(n){if(!Array.isArray(n))return null;return new Set(n.map((i)=>String(i||"").trim().toLowerCase()).filter(Boolean))}function Ts({filter:n="",setStatus:i,mergeSettingsData:_}){let{t:r}=t(),[c,u]=w(()=>ii.map((H)=>H.id)),[f,$]=w([]),[o,g]=w([]),[x,l]=w(!0),[v,K]=w(!1),B=G(async()=>{l(!0);try{let[H,R]=await Promise.all([V_(),R_("web:default").catch(()=>({commands:[]}))]),h=bi(H?.settings),b=Array.isArray(R?.commands)?R.commands:[];g(b),u(Array.isArray(h.workspaceCommands)?h.workspaceCommands:ii.map((A)=>A.id)),$(Array.isArray(h.slashCommands)?h.slashCommands:b.map((A)=>String(A?.name||"").trim()).filter(Boolean))}catch(H){i?.(String(H?.message||H),"error")}finally{l(!1)}},[i]);q(()=>{B()},[B]);let k=C(()=>yu(c),[c]),F=C(()=>yu(f),[f]),y=C(()=>ii.filter((H)=>wu(n,H.label,H.description,...H.keywords||[])),[n]),p=C(()=>o.filter((H)=>wu(n,H?.name,H?.description,H?.source)),[o,n]),V=G((H)=>{u((R)=>{let h=new Set((Array.isArray(R)?R:[]).map((b)=>String(b||"").trim()).filter(Boolean));if(h.has(H))h.delete(H);else h.add(H);return ii.map((b)=>b.id).filter((b)=>h.has(b))})},[]),P=G((H)=>{$((R)=>{let h=new Set((Array.isArray(R)?R:[]).map((b)=>String(b||"").trim()).filter(Boolean));if(h.has(H))h.delete(H);else h.add(H);return o.map((b)=>String(b?.name||"").trim()).filter((b)=>b&&h.has(b))})},[o]),j=G(()=>{u(ii.map((H)=>H.id)),$(o.map((H)=>String(H?.name||"").trim()).filter(Boolean))},[o]),T=G(async()=>{if(v)return;K(!0),i?.(r("settings.quickActions.savingToast"),"info");try{let H=await N_({workspaceCommands:c,slashCommands:f}),R=bi(H?.settings);_?.({quickActions:R}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:R}})),i?.(r("settings.quickActions.savedToast"),"success")}catch(H){i?.(String(H?.message||H),"error")}finally{K(!1)}},[_,v,i,f,c]);if(x)return s`<div class="settings-loading">${r("settings.quickActions.loading")}</div>`;return s`
        <div class="settings-section">
            <h3>${r("settings.quickActions.heading")}</h3>
            <p class="settings-hint">
                ${r("settings.quickActions.intro")}
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${j} disabled=${v}>${r("settings.quickActions.enableAll")}</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${T} disabled=${v}>
                    ${v?r("settings.quickActions.saving"):r("settings.quickActions.saveApply")}
                </button>
            </div>

            <h3 style="margin-top:8px;">${r("settings.quickActions.workspaceCommands")}</h3>
            <div class="settings-subsection-list">
                ${y.map((H)=>{let R=k?k.has(H.id.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${H.id}>
                            <input type="checkbox" checked=${R} onChange=${()=>V(H.id)} />
                            <div>
                                <div>${H.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${H.description}</div>
                            </div>
                        </label>
                    `})}
                ${y.length===0&&s`<div class="settings-hint">${r("settings.quickActions.noWorkspaceMatch")}</div>`}
            </div>

            <h3 style="margin-top:20px;">${r("settings.quickActions.slashCommands")}</h3>
            <div class="settings-subsection-list">
                ${p.map((H)=>{let R=String(H?.name||"").trim(),h=F?F.has(R.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${R}>
                            <input type="checkbox" checked=${h} onChange=${()=>P(R)} />
                            <div>
                                <div><code>${R}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${H?.description||r("settings.quickActions.slashFallback")}</div>
                            </div>
                        </label>
                    `})}
                ${p.length===0&&s`<div class="settings-hint">${r("settings.quickActions.noSlashMatch")}</div>`}
            </div>
        </div>
    `}var bu=O(()=>{e();zn();lu();cn()});var vu={};fn(vu,{KeychainSection:()=>Ns});function Rs(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function Ns({filter:n=""}){let{t:i}=t(),[_,r]=w([]),[c,u]=w(!0),[f,$]=w(null),[o,g]=w(!1),[x,l]=w(""),[v,K]=w(""),[B,k]=w(""),[F,y]=w(""),[p,V]=w(""),[P,j]=w("secret"),[T,H]=w(!1),[R,h]=w({}),[b,A]=w(null),[W,Q]=w(null),[Y,z]=w(null),Z=J(null),L=J(null),rn=J(null),E=G(async()=>{u(!0),$(null);try{let I=await(await fetch("/agent/keychain")).json();if(I?.ok)r(I.entries||[]);else $(I?.error||i("settings.keychain.loadFailed"))}catch(U){$(i("settings.keychain.loadFailed"))}finally{u(!1)}},[]);q(()=>{E()},[E]);let gn=G(async()=>{let U=x.trim(),I=v;if(!U||!I)return;H(!0);try{let ln=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:U,secret:I,type:P,username:B.trim()||void 0,userNote:F,agentNote:p})})).json();if(ln?.ok)l(""),K(""),k(""),y(""),V(""),j("secret"),g(!1),await E();else $(ln?.error||i("settings.keychain.addFailed"))}catch{$(i("settings.keychain.addFailed"))}finally{H(!1)}},[x,v,B,F,p,P,E]),xn=G(async(U)=>{try{let un=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:U})})).json();if(un?.ok)Q(null),z((ln)=>ln?.name===U?null:ln),await E();else $(un?.error||i("settings.keychain.deleteFailed"))}catch{$(i("settings.keychain.deleteFailed"))}},[E]),Wn=G(async(U)=>{let I=U?.name;if(!I)return;let un=R[I]||{},ln=Object.prototype.hasOwnProperty.call(un,"userNote")?un.userNote:U.userNote||"",yn=Object.prototype.hasOwnProperty.call(un,"agentNote")?un.agentNote:U.agentNote||"";A(I);try{let Rn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I,userNote:ln,agentNote:yn})})).json();if(Rn?.ok)h((Ki)=>{let ri={...Ki||{}};return delete ri[I],ri}),await E();else $(Rn?.error||i("settings.keychain.saveNotesFailed"))}catch{$(i("settings.keychain.saveNotesFailed"))}finally{A(null)}},[R,E]),M=G((U,I,un)=>{h((ln)=>({...ln||{},[U]:{...(ln||{})[U]||{},[I]:un}}))},[]),N=G(async(U,I,un)=>{try{let yn=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:U,master_password:I||void 0,totp_code:un||void 0})})).json();if(yn?.ok)z({name:U,phase:"revealed",secret:yn.secret,username:yn.username,masterPassword:I});else if(yn?.needs_master_password)z((pn)=>({name:U,phase:"password",masterPassword:"",error:pn?.name===U&&pn?.masterPassword?yn.error:null})),requestAnimationFrame(()=>L.current?.focus());else if(yn?.needs_totp)z((pn)=>({name:U,phase:"totp",masterPassword:I,totpCode:"",error:pn?.name===U&&pn?.phase==="totp"&&pn?.totpCode?yn.error:null})),requestAnimationFrame(()=>rn.current?.focus());else z({name:U,phase:"error",error:yn?.error||i("settings.keychain.revealFailed")})}catch{z({name:U,phase:"error",error:i("settings.keychain.revealFailed")})}},[]),on=G((U)=>{if(Y?.name===U&&Y?.phase==="revealed"){z(null);return}N(U,null,null)},[Y,N]),pi=G((U)=>{let I=Y?.masterPassword||"";if(!I)return;N(U,I,null)},[Y,N]),X=G((U)=>{let I=Y?.totpCode||"";if(I.length<6)return;N(U,Y?.masterPassword,I)},[Y,N]),m=G(async(U)=>{try{await navigator.clipboard.writeText(U)}catch{let I=document.createElement("textarea");I.value=U,I.style.position="fixed",I.style.opacity="0",document.body.appendChild(I),I.select(),document.execCommand("copy"),document.body.removeChild(I)}},[]);q(()=>{if(o)requestAnimationFrame(()=>Z.current?.focus())},[o]);let sn=n.toLowerCase(),kn=C(()=>{if(!sn)return _;return _.filter((U)=>U.name.toLowerCase().includes(sn)||(U.type||"").toLowerCase().includes(sn)||(U.envVar||"").toLowerCase().includes(sn)||(U.userNote||"").toLowerCase().includes(sn)||(U.agentNote||"").toLowerCase().includes(sn))},[_,sn]);if(c)return s`<div class="settings-section"><div class="settings-loading">${i("settings.keychain.loading")}</div></div>`;return s`
        <div class="settings-section">
            ${f&&s`
                <div class="settings-keychain-error" role="alert">
                    ${f}
                    <button class="settings-keychain-dismiss" onClick=${()=>$(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${kn.length===1?i("settings.keychain.entryCountSingular",{count:kn.length}):i("settings.keychain.entryCountPlural",{count:kn.length})}${sn?i("settings.keychain.matchingFilter",{filter:n}):""}${i("settings.keychain.encryptedSuffix")}</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${i("settings.keychain.clickPrefix")}</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>${i("settings.keychain.revealSuffix")}</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>g(!o)}>
                    ${o?i("settings.keychain.cancel"):i("settings.keychain.addEntry")}
                </button>
            </div>

            ${o&&s`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${Z} type="text" placeholder=${i("settings.keychain.namePlaceholder")}
                            value=${x} onInput=${(U)=>l(U.target.value)}
                            class="settings-keychain-input" />
                        <select value=${P} onChange=${(U)=>j(U.target.value)}
                            class="settings-keychain-select">
                            ${Vs.map((U)=>s`<option value=${U}>${U}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder=${i("settings.keychain.secretPlaceholder")}
                            value=${v} onInput=${(U)=>K(U.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder=${i("settings.keychain.usernamePlaceholder")}
                            value=${B} onInput=${(U)=>k(U.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${gn}
                            disabled=${T||!x.trim()||!v}>
                            ${T?i("settings.keychain.saving"):i("settings.keychain.save")}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder=${i("settings.keychain.userNotePlaceholder")}
                            value=${F} onInput=${(U)=>y(U.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder=${i("settings.keychain.agentNotePlaceholder")}
                            value=${p} onInput=${(U)=>V(U.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                    </div>
                </div>
            `}

            <div class="settings-keychain-table-wrap">
                <table class="settings-table settings-keychain-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Env var</th>
                            <th>Updated</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${kn.length===0&&s`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${sn?i("settings.keychain.noMatchFilter"):i("settings.keychain.noEntries")}
                            </td></tr>
                        `}
                        ${kn.map((U)=>{let I=Y?.name===U.name?Y:null,un=I?.phase==="revealed",ln=I?.phase==="password",yn=I?.phase==="totp",pn=I?.phase==="error",Rn=R[U.name]||{},Ki=Object.prototype.hasOwnProperty.call(Rn,"userNote")?Rn.userNote:U.userNote||"",ri=Object.prototype.hasOwnProperty.call(Rn,"agentNote")?Rn.agentNote:U.agentNote||"",Vu=Ki!==(U.userNote||"")||ri!==(U.agentNote||""),or=b===U.name;return s`
                            <tr class="settings-keychain-row" key=${U.name}>
                                <td class="settings-keychain-name">${U.name}</td>
                                <td><span class="settings-keychain-type-badge">${U.type}</span></td>
                                <td class="settings-keychain-env">${U.envVar?s`<code>$${U.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Rs(U.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${un?" active":""}`}
                                        onClick=${()=>on(U.name)}
                                        title=${un?i("settings.keychain.hideSecret"):i("settings.keychain.revealSecret")}>
                                        ${un?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${W===U.name?s`
                                            <span class="settings-keychain-confirm">${i("settings.keychain.deleteQ")}
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>xn(U.name)}>${i("settings.keychain.yes")}</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>Q(null)}>${i("settings.keychain.no")}</button>
                                            </span>
                                        `:s`<button class="settings-keychain-delete-btn" onClick=${()=>Q(U.name)} title=${i("settings.keychain.deleteTitle")}>🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${U.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">${i("settings.keychain.userNote")}</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder=${i("settings.keychain.userNoteHint")}
                                                value=${Ki}
                                                onInput=${(wn)=>M(U.name,"userNote",wn.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">${i("settings.keychain.agentNote")}</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder=${i("settings.keychain.agentNoteHint")}
                                                value=${ri}
                                                onInput=${(wn)=>M(U.name,"agentNote",wn.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!Vu||or} onClick=${()=>Wn(U)}>
                                            ${or?i("settings.keychain.saving"):i("settings.keychain.saveNotes")}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${ln&&s`
                                <tr class="settings-keychain-prompt-row" key=${U.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">${i("settings.keychain.masterPassword")}</span>
                                            <input ref=${L} type="password" autocomplete="off"
                                                placeholder=${i("settings.keychain.masterPasswordPlaceholder")}
                                                class="settings-keychain-prompt-input"
                                                value=${I?.masterPassword||""}
                                                onInput=${(wn)=>z((mi)=>({...mi,masterPassword:wn.target.value}))}
                                                onKeyDown=${(wn)=>{if(wn.key==="Enter")pi(U.name);if(wn.key==="Escape")z(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>pi(U.name)}
                                                disabled=${!I?.masterPassword}>${i("settings.keychain.unlock")}</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>z(null)}>${i("settings.keychain.cancel")}</button>
                                            ${I?.error&&s`<span class="settings-keychain-prompt-error">${I.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${yn&&s`
                                <tr class="settings-keychain-prompt-row" key=${U.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">${i("settings.keychain.totpCode")}</span>
                                            <input ref=${rn} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${I?.totpCode||""}
                                                onInput=${(wn)=>z((mi)=>({...mi,totpCode:wn.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(wn)=>{if(wn.key==="Enter")X(U.name);if(wn.key==="Escape")z(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>X(U.name)}
                                                disabled=${(I?.totpCode||"").length<6}>${i("settings.keychain.verify")}</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>z(null)}>${i("settings.keychain.cancel")}</button>
                                            ${I?.error&&s`<span class="settings-keychain-prompt-error">${I.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${un&&s`
                                <tr class="settings-keychain-reveal-row" key=${U.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${I.username&&s`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">${i("settings.keychain.username")}</span>
                                                    <code class="settings-keychain-reveal-value">${I.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>m(I.username)} title=${i("settings.keychain.copyUsername")}>
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">${i("settings.keychain.secret")}</span>
                                                <code class="settings-keychain-reveal-value">${I.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>m(I.secret)} title=${i("settings.keychain.copySecret")}>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${pn&&s`
                                <tr class="settings-keychain-reveal-row" key=${U.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${I.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var Vs;var ku=O(()=>{e();cn();Vs=["secret","token","password","basic"]});var pu={};fn(pu,{ToolsSection:()=>As});function As({toolsets:n,filter:i="",settingsData:_,mergeSettingsData:r}){let{t:c}=t(),u=n||[],[f,$]=w(()=>{let k={};for(let F of u)k[F.name]=!0;return k}),o=G((k)=>{$((F)=>({...F,[k]:!F[k]}))},[]),g=_?.searchMatchMode||"or",x=C(()=>{let k=Array.isArray(_?.toolResultCompactionTools)?_.toolResultCompactionTools:[];return new Set(k.filter((F)=>typeof F==="string").map((F)=>F.trim().toLowerCase()).filter(Boolean))},[_?.toolResultCompactionTools]),l=G(async()=>{let k=g==="or"?"and":"or";try{let y=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:k})})).json().catch(()=>({}));if(y?.ok&&y?.settings)r?.(y.settings)}catch(F){console.warn("[settings/tools] Failed to save search match mode.",F)}},[g,r]),v=G(async(k)=>{let F=String(k||"").trim().toLowerCase();if(!F)return;let y=new Set(x);if(y.has(F))y.delete(F);else y.add(F);try{let V=await(await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toolResultCompactionTools:Array.from(y).sort()})})).json().catch(()=>({}));if(V?.ok&&V?.settings)r?.(V.settings)}catch(p){console.warn("[settings/tools] Failed to save tool compaction settings.",p)}},[x,r]),K=i.toLowerCase(),B=C(()=>{if(!K)return u;return u.map((k)=>{let F=k.tools.filter((y)=>y.name.toLowerCase().includes(K)||k.name.toLowerCase().includes(K)||(y.summary||"").toLowerCase().includes(K));return F.length>0?{...k,tools:F}:null}).filter(Boolean)},[u,K]);if(u.length===0)return s`<div class="settings-section"><p class="settings-hint">${c("settings.tools.unavailable")}</p></div>`;return s`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">${c("settings.tools.search")}</h4>
                <div class="settings-row">
                    <label>${c("settings.tools.matchMode")}</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${g==="and"} onChange=${l} />
                        <span class="settings-hint" style="margin:0">
                            ${g==="or"?c("settings.tools.orMode"):c("settings.tools.andMode")}
                        </span>
                    </div>
                </div>
            </div>
            ${B.map((k)=>{let F=f[k.name]!==!1;return s`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${F} onChange=${()=>o(k.name)} />
                            <span class="settings-toolset-icon">${Xs[k.name]||qs}</span>
                            <strong>${k.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${k.description}</span>
                    </div>
                    ${F&&s`<div class="settings-tool-list">
                        <div class="settings-tool-row settings-tool-row-header" aria-hidden="true">
                            <span class="settings-tool-status-header">${c("settings.tools.colEnabled")}</span>
                            <span class="settings-tool-name">${c("settings.tools.colTool")}</span>
                            <span class="settings-tool-compact-header">${c("settings.tools.colCompact")}</span>
                            <span class="settings-tool-kind">${c("settings.tools.colKind")}</span>
                            <span class="settings-tool-summary">${c("settings.tools.colSummary")}</span>
                            <span class="settings-tool-source">${c("settings.tools.colSource")}</span>
                        </div>
                        ${k.tools.map((y)=>{let p=String(y.name||"").trim().toLowerCase(),V=x.has(p);return s`
                                <div class="settings-tool-row">
                                    <input type="checkbox" checked disabled />
                                    <span class="settings-tool-name">${y.name}</span>
                                    <span class="settings-tool-compact">
                                        <input
                                            type="checkbox"
                                            checked=${V}
                                            onChange=${()=>v(y.name)}
                                            title=${V?c("settings.tools.disableCompaction"):c("settings.tools.enableCompaction")}
                                        />
                                    </span>
                                    <span class="settings-tool-kind" title=${y.kind}>${Ms[y.kind]||"?"}</span>
                                    ${y.summary&&s`<span class="settings-tool-summary">${y.summary}</span>`}
                                    ${!y.summary&&s`<span class="settings-tool-summary"></span>`}
                                    <span class="settings-tool-source">${Qs[y.name]||k.name}</span>
                                </div>
                            `})}
                    </div>`}
                </div>
            `})}
            ${B.length===0&&s`<p class="settings-hint">${c("settings.tools.noMatch",{filter:i})}</p>`}
            <p class="settings-hint">${c("settings.tools.footer")}</p>
        </div>
    `}var Xs,Qs,Ms,qs;var Ku=O(()=>{e();cn();Xs={core:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},Qs={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Ms={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},qs=s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var hu={};fn(hu,{AddonsSection:()=>Zs});function Zs({setStatus:n,filter:i=""}){let{t:_}=t(),[r,c]=w(null),[u,f]=w(!0),[$,o]=w(null),[g,x]=w(!1),[l,v]=w({runtime:"",windowsNative:!1}),[K,B]=w([]),[k,F]=w([]);function y(){let b=new URLSearchParams;try{let W=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),Q=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((z)=>z.trim()).filter(Boolean),Y=localStorage.getItem("piclaw_addons_repo_url");if(W)b.append("catalog_url",W);for(let z of Q)b.append("catalog_url",z);if(Y)b.set("repo_url",Y)}catch(W){}let A=b.toString();return A?`?${A}`:""}let p=G(async()=>{try{let[b,A]=await Promise.all([fetch(`/agent/addons${y()}`),fetch("/agent/settings-data")]),W=await b.json();if(W.error)throw Error(W.error);c(W.addons||[]),B(W.sources||[]),F(W.failed_sources||[]);let Q=await A.json().catch(()=>({})),Y=typeof Q?.runtimePlatform==="string"?Q.runtimePlatform:"";v({runtime:Y,windowsNative:Y==="win32"})}catch(b){c(null),n?.(String(b.message||b),"error")}finally{f(!1)}},[n]);q(()=>{p()},[]);let V=G(async(b)=>{if($)return;o({slug:b,action:"install"}),n?.(_("settings.addons.installing",{slug:b}),"info");try{let W=await(await fetch(`/agent/addons/install${y()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:b})})).json();if(W.error){n?.(W.error,"error");return}x(!0);let Q=[W.message,W.warning].filter(Boolean).join(" ");n?.(Q||_("settings.addons.installedToast"),"success"),await p()}catch(A){n?.(String(A.message||A),"error")}finally{o(null)}},[$,p,n]),P=G(async(b)=>{if($)return;o({slug:b,action:"remove"}),n?.(_("settings.addons.removing",{slug:b}),"info");try{let W=await(await fetch(`/agent/addons/uninstall${y()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:b})})).json();if(W.error){n?.(W.error,"error");return}x(!0);let Q=[W.message,W.warning].filter(Boolean).join(" ");n?.(Q||_("settings.addons.removedToast"),"success"),await p()}catch(A){n?.(String(A.message||A),"error")}finally{o(null)}},[$,p,n]),j=G(async()=>{if($)return;o({slug:null,action:"restart"}),n?.(_("settings.addons.restarting"),"info");try{let A=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(A.error){n?.(A.error,"error"),o(null);return}n?.(A.message||_("settings.addons.restarting"),"success"),x(!1),(async(Q=30,Y=2000)=>{for(let z=0;z<Q;z++){await new Promise((Z)=>setTimeout(Z,Y));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await p(),o(null),n?.(_("settings.addons.restartComplete"),"success");return}}catch(Z){}}o(null),n?.(_("settings.addons.restartTimeout"),"warning")})()}catch(b){n?.(String(b.message||b),"error"),o(null)}},[$,n,p]);if(u)return s`<div class="settings-loading">${_("settings.addons.fetching")}</div>`;if(!r)return s`<div class="settings-section"><p class="settings-hint">${_("settings.addons.loadFailed")}</p></div>`;let T=i.toLowerCase(),H=T?r.filter((b)=>b.slug.toLowerCase().includes(T)||(b.description||"").toLowerCase().includes(T)||(b.tags||[]).some((A)=>A.toLowerCase().includes(T))):r,R=$?.slug||null,h=$?$.action==="remove"?_("settings.addons.removing",{slug:$.slug}):$.action==="restart"?_("settings.addons.restarting"):_("settings.addons.installing",{slug:$.slug}):"";return s`
        <div class=${`settings-section settings-addon-panel${$?" busy":""}`} aria-busy=${$?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${K.length<=1?s`${_("settings.addons.catalogFromPre")} <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:s`${_("settings.addons.catalogMerged",{count:K.length})}`}
                        ${" "}${_("settings.addons.installNote")}
                    </p>
                    ${k.length>0&&s`
                        <div class="settings-addon-error" role="alert">
                            ${k.length>1?_("settings.addons.failedFetchPlural",{count:k.length}):_("settings.addons.failedFetchSingular",{count:k.length})}
                            ${k.map((b)=>s` <code style="font-size:0.82em;word-break:break-all">${b}</code>`)}
                        </div>
                    `}
                    ${K.length>1&&s`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">${_("settings.addons.activeSources",{count:K.length})}</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${K.map((b)=>s`<li style="word-break:break-all"><code>${b}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${l.windowsNative&&s`
                        <div class="settings-addon-error" role="alert">
                            ${_("settings.addons.windowsWarning")}
                        </div>
                    `}
                </div>
            </div>
            <div class="settings-addon-list">
                ${$&&s`
                    <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${h}>
                        <div class="settings-addon-panel-overlay-card">
                            <div class="settings-spinner"></div>
                            <span>${h}</span>
                        </div>
                    </div>
                `}
                ${H.map((b)=>{let A=(b.skills||[]).length>0,W=b.type==="extension",Q=A&&W?_("settings.addons.typeExtSkill"):A?_("settings.addons.typeSkill"):_("settings.addons.typeExt"),Y=A&&!W?"settings-tag-skill":"",z=typeof b.homepage==="string"&&b.homepage.trim()?b.homepage.trim():"";return s`
                    <div class=${`settings-addon-card${b.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${z?s`<a class="settings-addon-name-link" href=${z} target="_blank" rel="noopener noreferrer">${b.slug}</a>`:s`<strong>${b.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${Y}`}>${Q}</span>
                            <span class="settings-addon-version">${b.installed?b.installedVersion||"?":b.version||""}</span>
                            ${b.installKind&&s`<span class="settings-tag">${b.installKind}</span>`}
                            ${b.hasUpdate&&s`<span class="settings-tag settings-tag-skill">\u2191 ${b.version}</span>`}
                            <div class="settings-addon-actions">
                                ${b.installed?s`
                                    ${b.hasUpdate&&s`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean($)} onClick=${()=>V(b.slug)}>${R===b.slug?"…":_("settings.addons.update")}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean($)} onClick=${()=>P(b.slug)}>${R===b.slug?"…":_("settings.addons.remove")}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean($)} onClick=${()=>V(b.slug)}>${R===b.slug?"…":_("settings.addons.install")}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${b.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(b.tags||[]).map((Z)=>s`<span class="settings-tag">${Z}</span>`)}${(b.skills||[]).map((Z)=>s`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${Z}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${H.length===0&&s`<p class="settings-hint">${_("settings.addons.noMatch",{filter:i})}</p>`}
            </div>
            ${g&&s`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>${_("settings.addons.restartNotice")}</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean($)} onClick=${j}>${_("settings.addons.restartNow")}</button>
                </div>
            `}
        </div>
    `}var Bu=O(()=>{e();cn()});var Js={};function ur(n,i){try{let _=localStorage.getItem(n);return _===null?i:_==="true"}catch{return i}}function Oi(n,i){try{localStorage.setItem(n,String(i))}catch(_){}}function Ds(n,i){try{return localStorage.getItem(n)||i}catch{return i}}function Is(n,i){try{localStorage.setItem(n,i)}catch(_){}}function Ys(n,i,_,r){try{return dn(localStorage.getItem(n),{fallback:i,min:_,max:r})}catch{return dn(i,{fallback:i,min:_,max:r})}}function Ls(n,i){try{localStorage.setItem(n,String(i))}catch(_){}}function ts(){let{t:n}=t(),[i,_]=w(()=>ur("piclaw_vim_mode",!1)),[r,c]=w(()=>ur("piclaw_show_whitespace",!0)),[u,f]=w(()=>ur("piclaw_md_live_preview",!0)),[$,o]=w(()=>Ys("piclaw_editor_font_size",13,10,24)),[g,x]=w(()=>Ds("piclaw_editor_font_family","")),l=G((v,K,B)=>{let k=!K;B(k),Oi(v,k)},[]);return s`
        <div class="settings-section">
            <h3>${n("settings.editor.heading")}</h3>
            <div class="settings-row">
                <label>${n("settings.editor.vimMode")}</label>
                <input type="checkbox" checked=${i}
                    onChange=${()=>{let v=!i;_(v),Oi("piclaw_vim_mode",v)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.showWhitespace")}</label>
                <input type="checkbox" checked=${r}
                    onChange=${()=>{let v=!r;c(v),Oi("piclaw_show_whitespace",v)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.livePreview")}</label>
                <input type="checkbox" checked=${u}
                    onChange=${()=>{let v=!u;f(v),Oi("piclaw_md_live_preview",v)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontSize")}</label>
                <${nn}
                    label=${n("settings.editor.fontSizeAria")}
                    value=${$}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(v)=>{o(v),Ls("piclaw_editor_font_size",v)}}
                />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontFamily")}</label>
                <input type="text" value=${g}
                    onInput=${(v)=>{let K=v.target.value;x(K),Is("piclaw_editor_font_family",K)}}
                    placeholder=${n("settings.editor.fontFamilyPlaceholder")} />
            </div>
            <p class="settings-hint settings-local-only-hint">${n("settings.editor.localOnlyHint")}</p>
        </div>
    `}var Cs;var zu=O(()=>{e();si();Sn();cn();Cs=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;Jn({id:"editor",label:"Editor",icon:Cs,component:ts,order:150})});var ds={};function fr(n,i){try{let _=localStorage.getItem(n);return _===null?i:_==="true"}catch{return i}}function sr(n,i){try{localStorage.setItem(n,String(i))}catch(_){}}function $r(n,i){try{return localStorage.getItem(n)||i}catch{return i}}function gr(n,i){try{localStorage.setItem(n,i)}catch(_){}}function Os(){let{t:n}=t(),[i,_]=w(()=>fr("piclaw_dev_mode",!1)),[r,c]=w(()=>$r("piclaw_addons_catalog_url","")),[u,f]=w(()=>$r("piclaw_addons_catalog_urls","")),[$,o]=w(()=>$r("piclaw_addons_repo_url","")),[g,x]=w(()=>fr("piclaw_debug_sse",!1)),[l,v]=w(()=>fr("piclaw_debug_tool_calls",!1)),K=G(()=>{let B=!i;_(B),sr("piclaw_dev_mode",B)},[i]);return s`
        <div class="settings-section">
            <h3>${n("settings.developer.heading")}</h3>
            <div class="settings-row">
                <label>${n("settings.developer.devMode")}</label>
                <input type="checkbox" checked=${i} onChange=${K} />
            </div>

            <p class="settings-hint settings-local-only-hint">${n("settings.developer.localHint")}</p>

            ${i&&s`
                <h3 style="margin-top:16px">${n("settings.developer.addonSources")}</h3>
                <div class="settings-row">
                    <label>${n("settings.developer.catalogUrl")}</label>
                    <input type="text" value=${r}
                        onInput=${(B)=>{let k=B.target.value;c(k),gr("piclaw_addons_catalog_url",k)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.catalogHint")} (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>${n("settings.developer.additionalCatalogs")}</label>
                    <textarea
                        value=${u}
                        onInput=${(B)=>{let k=B.target.value;f(k),gr("piclaw_addons_catalog_urls",k)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.additionalHint")}</p>
                <div class="settings-row">
                    <label>${n("settings.developer.repoUrl")}</label>
                    <input type="text" value=${$}
                        onInput=${(B)=>{let k=B.target.value;o(k),gr("piclaw_addons_repo_url",k)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.repoHintPre")} <code>bun add</code> ${n("settings.developer.repoHintPost")}</p>

                <h3 style="margin-top:16px">${n("settings.developer.debug")}</h3>
                <div class="settings-row">
                    <label>${n("settings.developer.logSse")}</label>
                    <input type="checkbox" checked=${g}
                        onChange=${()=>{let B=!g;x(B),sr("piclaw_debug_sse",B)}} />
                </div>
                <div class="settings-row">
                    <label>${n("settings.developer.logToolCalls")}</label>
                    <input type="checkbox" checked=${l}
                        onChange=${()=>{let B=!l;v(B),sr("piclaw_debug_tool_calls",B)}} />
                </div>
                <p class="settings-hint">${n("settings.developer.debugHint")}</p>
            `}
        </div>
    `}var Es;var Hu=O(()=>{e();si();cn();Es=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;Jn({id:"developer",label:"Developer",icon:Es,component:Os,order:900})});var k$={};fn(k$,{openSettingsDialog:()=>v$,SettingsDialogContent:()=>ei,SettingsDialog:()=>b$});function ki(n){vi.push({ts:performance.now(),label:n})}function Ss(){if(!vi.length)return;let n=vi[0].ts,i=vi.map((_)=>`+${(_.ts-n).toFixed(1)}ms ${_.label}`);console.info(`[settings-dialog perf]
`+i.join(`
`));try{window.__piclawSettingsPerfLog=i}catch(_){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:i})}).catch((_)=>{})}catch(_){}vi.length=0}function as(n){let i=Si.get(n);if(i)return Promise.resolve(i);let _=Ei.get(n);if(_)return _;let r=es[n]().then((c)=>{return Si.set(n,c),Ei.delete(n),c}).catch((c)=>{throw Ei.delete(n),c});return Ei.set(n,r),r}function di(n="Loading…"){return s`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function ei({onClose:n}){ki("SettingsDialogContent-render-start");let[i,_]=w(()=>k_()||"general"),[r,c]=w(Fu),[u,f]=w(null),[$,o]=w(""),[,g]=w(0),[x,l]=w(()=>Object.fromEntries(Si.entries())),[v,K]=w(null),[B,k]=w({compact:!1,narrow:!1}),F=J(null),y=J(null),{t:p}=t(),V=(z)=>z?.isExtension?z.label:p(`settings.section.${z.id}`),P=(z)=>z?.isExtension?z.placeholder||p("settings.filter"):p(`settings.placeholder.${z.id}`);q(()=>{ki("SettingsDialogContent-mounted"),Ss()},[]),q(()=>{let z=(Z)=>{if(Z.key==="Escape")n()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[n]),q(()=>{let z=(Z)=>{let L=typeof Z?.detail?.section==="string"?Z.detail.section.trim():"";if(L)_(L),o("")};return window.addEventListener("piclaw:open-settings",z),()=>window.removeEventListener("piclaw:open-settings",z)},[]),q(()=>{let z=()=>g((Z)=>Z+1);return window.addEventListener("piclaw:settings-panes-changed",z),()=>window.removeEventListener("piclaw:settings-panes-changed",z)},[]),q(()=>{fetch("/agent/settings-data").then((z)=>z.json()).then((z)=>{Fu=z,c(z)}).catch(()=>c({}))},[]),q(()=>{let z=y.current;if(!z)return;let Z=()=>{let L=z.clientWidth||0;k((rn)=>{let E={compact:L>0&&L<=860,narrow:L>0&&L<=720};return rn.compact===E.compact&&rn.narrow===E.narrow?rn:E})};if(Z(),typeof ResizeObserver==="function"){let L=new ResizeObserver(()=>Z());return L.observe(z),()=>L.disconnect()}return window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)},[]);let j=[...ju].sort((z,Z)=>(z.order??500)-(Z.order??500)),H=Jr().map((z)=>({id:z.id,label:z.label,icon:z.icon,searchable:z.searchable||!1,placeholder:z.searchPlaceholder,order:z.order??500,isExtension:!0,component:z.component})).sort(v_),R=[...j,...H],h=R.find((z)=>z.id===i)||ju.find((z)=>z.id===i);q(()=>{if(h?.searchable)requestAnimationFrame(()=>F.current?.focus())},[i]),q(()=>{if(h?.isExtension){K(null);return}let z=!1;if(x[i]){K(null);return}return K(i),as(i).then((Z)=>{if(z)return;l((L)=>L?.[i]?L:{...L||{},[i]:Z})}).catch((Z)=>{if(z)return;console.error(`[settings-dialog] Failed to lazy-load section "${i}".`,Z)}).finally(()=>{if(!z)K((Z)=>Z===i?null:Z)}),()=>{z=!0}},[i,h?.isExtension,x]);let b=G((z,Z="info")=>{f(z?{text:z,type:Z}:null)},[]),A=G((z)=>{_(z),o("");let Z=ms[z];if(Z&&!Wu.has(z))Wu.add(z),Z().then(()=>g((L)=>L+1)).catch((L)=>{})},[]),W=G((z)=>{c((Z)=>({...Z||{},...z||{}}))},[]),Q=()=>{if(h?.isExtension){if(!h.component)return di("Loading pane…");let Z=h.component;return s`<${Z} filter=${$} />`}let z=x[i];if(!z||v===i)return di(`${p("settings.loading")}`);switch(i){case"general":return s`<${z} settingsData=${r} setStatus=${b} mergeSettingsData=${W} />`;case"sessions":return s`<${z} settingsData=${r} setStatus=${b} mergeSettingsData=${W} />`;case"recordings":return s`<${z} filter=${$} setStatus=${b} />`;case"compaction":return s`<${z} settingsData=${r} setStatus=${b} mergeSettingsData=${W} />`;case"keyboard":return s`<${z} filter=${$} setStatus=${b} />`;case"workspace":return s`<${z} settingsData=${r} setStatus=${b} mergeSettingsData=${W} />`;case"environment":return s`<${z} settingsData=${r} filter=${$} setStatus=${b} mergeSettingsData=${W} />`;case"providers":return s`<${z} providers=${r?.providers} setStatus=${b} />`;case"models":return s`<${z} filter=${$} />`;case"theme":return s`<${z} themes=${r?.themes} colorKeys=${r?.colorKeys} settingsData=${r} setStatus=${b} mergeSettingsData=${W} />`;case"scheduled-tasks":return s`<${z} filter=${$} setStatus=${b} />`;case"quick-actions":return s`<${z} filter=${$} setStatus=${b} mergeSettingsData=${W} />`;case"keychain":return s`<${z} filter=${$} />`;case"tools":return s`<${z} toolsets=${r?.toolsets} filter=${$} settingsData=${r} mergeSettingsData=${W} />`;case"addons":return s`<${z} setStatus=${b} filter=${$} />`;default:return di(p("settings.loading"))}},Y=!h;return ki("SettingsDialogContent-render-end"),s`
        <div class="settings-dialog-backdrop" onClick=${(z)=>{if(z.target===z.currentTarget)n()}}>
            <div ref=${y} data-testid="settings-dialog" class=${`settings-dialog${B.compact?" settings-dialog-compact":""}${B.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">${p("settings.title")}</span>
                    ${h?.searchable&&s`
                        <input ref=${F} type="text" class="settings-header-filter"
                            placeholder=${P(h)}
                            value=${$} onInput=${(z)=>o(z.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title=${p("settings.close")}>✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${R.map((z,Z)=>{let L=Z>0&&!R[Z-1].isExtension,rn=z.isExtension&&L;return s`
                                ${rn&&s`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${z.id===i?"active":""}`} onClick=${()=>A(z.id)}>
                                    <span class="settings-nav-icon">${z.icon}</span>
                                    <span class="settings-nav-label">${V(z)}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${Y?di(p("settings.loading")):Q()}
                    </main>
                </div>
                ${u&&s`
                    <div class=${`settings-status-bar settings-status-bar-${u.type}`}>
                        ${u.type==="info"&&s`<span class="settings-spinner"></span>`}
                        <span>${u.text}</span>
                        ${u.type!=="info"&&s`<button class="settings-status-dismiss" onClick=${()=>f(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function b$(){let[n,i]=w(!1);if(q(()=>{let _=(c)=>{let u=Ni(c?.detail?.section);if(u)try{window.__piclawSettingsRequestedSection=u}catch(f){}i(!0)};window.addEventListener("piclaw:open-settings",_);let r=Er();if(r.open){if(r.section)try{window.__piclawSettingsRequestedSection=r.section}catch(c){}i(!0)}return()=>window.removeEventListener("piclaw:open-settings",_)},[]),!n)return null;return s`<${tr} className="settings-portal"><${ei} onClose=${()=>i(!1)} /><//>`}function v$(n={}){Or(n)}var vi,Fu=null,Si,Ei,es,ms,Wu,n$,i$,_$,r$,c$,u$,f$,s$,$$,g$,o$,l$,w$,y$,x$,ju;var Uu=O(()=>{e();cn();Cr();si();bc();vi=[];ki("module-eval-start");ki("imports-done");Si=new Map,Ei=new Map;Si.set("general",A_);es={general:()=>Promise.resolve(A_),sessions:()=>Promise.resolve().then(() => (pc(),kc)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => (hc(),Kc)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (zc(),Bc)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (Tc(),Pc)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (Zc(),Ac)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (Ic(),Dc)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (Lc(),Yc)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Cc(),tc)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (cu(),ru)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (su(),fu)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (bu(),xu)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (ku(),vu)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (Ku(),pu)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (Bu(),hu)).then((n)=>n.AddonsSection)},ms={"editor-settings":()=>Promise.resolve().then(() => (zu(),Js)).then(()=>{}),developer:()=>Promise.resolve().then(() => (Hu(),ds)).then(()=>{})},Wu=new Set;n$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,i$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,_$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,r$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,c$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,u$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,f$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,s$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,$$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,g$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,o$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,l$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,w$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,y$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,x$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,ju=[{id:"general",label:"General",icon:n$,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:i$,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:_$,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:r$,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:f$,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:c$,searchable:!1,order:15},{id:"environment",label:"Environment",icon:u$,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:s$,searchable:!1,order:20},{id:"models",label:"Models",icon:$$,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:g$,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:o$,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:w$,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:y$,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:l$,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:x$,searchable:!0,placeholder:"Filter add-ons…",order:90}]});e();Uu();si();var p$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function K$({label:n,body:i,filter:_=""}){return s`
    <div class="settings-section">
      <h3>${n}</h3>
      <p class="settings-hint">Mock add-on pane rendered by the settings widget fixture.</p>
      <div class="settings-addon-grid">
        ${["Credentials","Routes","Runtime options"].filter((r)=>!_||r.toLowerCase().includes(String(_).toLowerCase())).map((r)=>s`
          <div class="settings-addon-card">
            <div class="settings-addon-card-header">
              <div>
                <div class="settings-addon-name">${r}</div>
                <div class="settings-addon-subtitle">${i}</div>
              </div>
              <span class="settings-addon-enabled">fixture</span>
            </div>
            <div class="settings-row settings-row-vertical">
              <label>Mock field</label>
              <input type="text" value=${`${n.toLowerCase().replace(/\s+/g,"-")}:${r.toLowerCase().replace(/\s+/g,"-")}`} readonly />
            </div>
          </div>
        `)}
      </div>
    </div>
  `}function h$(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let i of n)Jn({id:i.id,label:i.label,icon:p$,searchable:!0,searchPlaceholder:`Filter ${i.label} settings…`,order:i.id==="fixture-z-observability"?1:999,component:(_)=>s`<${K$} label=${i.label} body=${i.body} filter=${_?.filter||""} />`})}var vn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},B$={current:vn.current,models:vn.models,model_options:vn.model_options,thinking_level:vn.thinking_level,supports_thinking:vn.supports_thinking,available_thinking_levels:vn.available_thinking_levels},Gu={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},Pu={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},_i=new URLSearchParams(window.location.search).get("real")!=="1",Tu=window.fetch.bind(window);function bn(n,i=200){return new Response(JSON.stringify(n),{status:i,headers:{"Content-Type":"application/json"}})}function z$(){window.fetch=async(n,i)=>{let _=new URL(typeof n==="string"?n:n.url,window.location.href),r=String(i?.method||"GET").toUpperCase();if(!_i)return Tu(n,i);if(_.pathname==="/agent/settings-data")return bn(vn);if(_.pathname==="/agent/models")return bn(B$);if(_.pathname==="/agent/addons")return bn(Gu);if(_.pathname.startsWith("/agent/addons/"))return bn({ok:!0,message:"Fixture add-on action accepted.",...Gu});if(_.pathname==="/agent/keychain"){if(r==="GET")return bn(Pu);if(r==="POST")return bn({ok:!0,...Pu})}if(_.pathname==="/agent/settings/general")return bn({ok:!0,settings:vn});if(_.pathname==="/agent/settings/widget-token/regenerate")return bn({ok:!0,settings:{...vn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(_.pathname.startsWith("/agent/default/message"))return bn({command:{status:"success",message:"Fixture command accepted."}});if(_.pathname.startsWith("/agent/settings/"))return bn({ok:!0,settings:vn,items:[],entries:[]});if(_.pathname==="/agent/client-perf")return bn({ok:!0});return Tu(n,i)}}function H$(){let n=document.createElement("style");n.textContent=`
    html, body, #settings-widget-fixture-root { margin: 0; width: 100%; height: 100%; overflow: hidden; background: var(--bg-primary, #111827); color: var(--text-primary, #e5e7eb); }
    .settings-fixture-shell { height: 100vh; display: grid; grid-template-rows: auto minmax(0, 1fr); background: var(--bg-primary, #111827); }
    .settings-fixture-toolbar { position: relative; z-index: 2600; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding: 8px 10px; border-bottom: 1px solid var(--border-color, rgba(148,163,184,.22)); background: var(--bg-secondary, #0f172a); font: 12px var(--font-sans, system-ui, sans-serif); }
    .settings-fixture-toolbar strong { margin-right: 4px; }
    .settings-fixture-toolbar button, .settings-fixture-toolbar select, .settings-fixture-toolbar input { border: 1px solid var(--border-color, rgba(148,163,184,.28)); border-radius: 7px; background: var(--bg-primary, #111827); color: inherit; padding: 5px 8px; font: inherit; }
    .settings-fixture-toolbar input[type="range"] { padding: 0; width: 120px; }
    .settings-fixture-canvas { position: relative; min-height: 0; overflow: hidden; }
    .settings-fixture-canvas .settings-dialog-backdrop { position: absolute; inset: 0; background: color-mix(in srgb, var(--bg-primary, #111827) 82%, transparent); }
    .settings-fixture-canvas .settings-dialog { width: min(var(--fixture-width, 900px), 96vw); height: min(var(--fixture-height, 640px), 94%); max-width: none; max-height: none; }
    .settings-fixture-note { opacity: .72; }
  `,document.head.appendChild(n)}function Ru(n){try{window.__piclawSettingsRequestedSection=n}catch(i){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function F$(){let n=new URLSearchParams(window.location.search),[i,_]=w(n.get("section")||"general"),[r,c]=w(Number(n.get("width")||900)),[u,f]=w(Number(n.get("height")||640)),[$,o]=w(_i),[g,x]=w(0),l=C(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),v=G((B)=>{_(B),Ru(B)},[]),K=G(()=>{_i=!_i,o(_i),x((B)=>B+1)},[]);return s`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${i} onChange=${(B)=>v(B.target.value)}>${l.map((B)=>s`<option value=${B}>${B}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${r} onInput=${(B)=>c(Number(B.target.value))} /> ${r}px</label>
        <label>Height <input type="range" min="420" max="900" value=${u} onInput=${(B)=>f(Number(B.target.value))} /> ${u}px</label>
        <button type="button" onClick=${K}>${$?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>x((B)=>B+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${r}px;--fixture-height:${u}px;`}>
        <${ei} key=${g} onClose=${()=>{}} />
      </div>
    </div>
  `}function W$(){h$(),z$(),H$();let n=new URLSearchParams(window.location.search);Ru(n.get("section")||"general");let i=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));i.id="settings-widget-fixture-root",Ln(s`<${F$} />`,i),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:_i})}W$();

//# debugId=A5C78B16A4FA969A64756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
