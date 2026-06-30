var Gu=Object.defineProperty;var Vu=(n)=>n;function Nu(n,r){this[n]=Vu.bind(null,r)}var un=(n,r)=>{for(var i in r)Gu(n,i,{get:r[i],enumerable:!0,configurable:!0,set:Nu.bind(r,i)})};var O=(n,r)=>()=>(n&&(r=n(n=0)),r);var du={};un(du,{useState:()=>y,useRef:()=>C,useReducer:()=>N_,useMemo:()=>Y,useLayoutEffect:()=>jr,useImperativeHandle:()=>Iu,useErrorBoundary:()=>Ou,useEffect:()=>M,useDebugValue:()=>Cu,useContext:()=>Yu,useCallback:()=>j,render:()=>Ln,html:()=>s,h:()=>si,createContext:()=>Lu,Component:()=>cr});function vn(n,r){for(var i in r)n[i]=r[i];return n}function fi(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function si(n,r,i){var _,c,u,f={};for(u in r)u=="key"?_=r[u]:u=="ref"?c=r[u]:f[u]=r[u];if(arguments.length>2&&(f.children=arguments.length>3?Hr.call(arguments,2):i),typeof n=="function"&&n.defaultProps!=null)for(u in n.defaultProps)f[u]===void 0&&(f[u]=n.defaultProps[u]);return pr(n,f,_,c,null)}function pr(n,r,i,_,c){var u={type:n,props:r,key:i,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c==null?++B_:c,__i:-1,__u:0};return c==null&&d.vnode!=null&&d.vnode(u),u}function Rr(n){return n.children}function cr(n,r){this.props=n,this.context=r}function Dn(n,r){if(r==null)return n.__?Dn(n.__,n.__i+1):null;for(var i;r<n.__k.length;r++)if((i=n.__k[r])!=null&&i.__e!=null)return i.__e;return typeof n.type=="function"?Dn(n):null}function Mu(n){if(n.__P&&n.__d){var r=n.__v,i=r.__e,_=[],c=[],u=vn({},r);u.__v=r.__v+1,d.vnode&&d.vnode(u),gi(n.__P,u,r,n.__n,n.__P.namespaceURI,32&r.__u?[i]:null,_,i==null?Dn(r):i,!!(32&r.__u),c),u.__v=r.__v,u.__.__k[u.__i]=u,P_(_,u,c),r.__e=r.__=null,u.__e!=i&&R_(u)}}function R_(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(r){if(r!=null&&r.__e!=null)return n.__e=n.__c.base=r.__e}),R_(n)}function ii(n){(!n.__d&&(n.__d=!0)&&Wn.push(n)&&!Fr.__r++||$_!=d.debounceRendering)&&(($_=d.debounceRendering)||z_)(Fr)}function Fr(){try{for(var n,r=1;Wn.length;)Wn.length>r&&Wn.sort(F_),n=Wn.shift(),r=Wn.length,Mu(n)}finally{Wn.length=Fr.__r=0}}function j_(n,r,i,_,c,u,f,g,$,o,x){var l,b,h,k,p,B,t,v=_&&_.__k||zr,G=r.length;for($=qu(i,r,v,$,G),l=0;l<G;l++)(h=i.__k[l])!=null&&(b=h.__i!=-1&&v[h.__i]||Br,h.__i=l,B=gi(n,h,b,c,u,f,g,$,o,x),k=h.__e,h.ref&&b.ref!=h.ref&&(b.ref&&oi(b.ref,null,h),x.push(h.ref,h.__c||k,h)),p==null&&k!=null&&(p=k),(t=!!(4&h.__u))||b.__k===h.__k?($=U_(h,$,n,t),t&&b.__e&&(b.__e=null)):typeof h.type=="function"&&B!==void 0?$=B:k&&($=k.nextSibling),h.__u&=-7);return i.__e=p,$}function qu(n,r,i,_,c){var u,f,g,$,o,x=i.length,l=x,b=0;for(n.__k=Array(c),u=0;u<c;u++)(f=r[u])!=null&&typeof f!="boolean"&&typeof f!="function"?(typeof f=="string"||typeof f=="number"||typeof f=="bigint"||f.constructor==String?f=n.__k[u]=pr(null,f,null,null,null):Wr(f)?f=n.__k[u]=pr(Rr,{children:f},null,null,null):f.constructor===void 0&&f.__b>0?f=n.__k[u]=pr(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):n.__k[u]=f,$=u+b,f.__=n,f.__b=n.__b+1,g=null,(o=f.__i=Au(f,i,$,l))!=-1&&(l--,(g=i[o])&&(g.__u|=2)),g==null||g.__v==null?(o==-1&&(c>x?b--:c<x&&b++),typeof f.type!="function"&&(f.__u|=4)):o!=$&&(o==$-1?b--:o==$+1?b++:(o>$?b--:b++,f.__u|=4))):n.__k[u]=null;if(l)for(u=0;u<x;u++)(g=i[u])!=null&&(2&g.__u)==0&&(g.__e==_&&(_=Dn(g)),G_(g,g));return _}function U_(n,r,i,_){var c,u;if(typeof n.type=="function"){for(c=n.__k,u=0;c&&u<c.length;u++)c[u]&&(c[u].__=n,r=U_(c[u],r,i,_));return r}n.__e!=r&&(_&&(r&&n.type&&!r.parentNode&&(r=Dn(n)),i.insertBefore(n.__e,r||null)),r=n.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function Au(n,r,i,_){var c,u,f,g=n.key,$=n.type,o=r[i],x=o!=null&&(2&o.__u)==0;if(o===null&&g==null||x&&g==o.key&&$==o.type)return i;if(_>(x?1:0)){for(c=i-1,u=i+1;c>=0||u<r.length;)if((o=r[f=c>=0?c--:u++])!=null&&(2&o.__u)==0&&g==o.key&&$==o.type)return f}return-1}function l_(n,r,i){r[0]=="-"?n.setProperty(r,i==null?"":i):n[r]=i==null?"":typeof i!="number"||Qu.test(r)?i:i+"px"}function vr(n,r,i,_,c){var u,f;n:if(r=="style")if(typeof i=="string")n.style.cssText=i;else{if(typeof _=="string"&&(n.style.cssText=_=""),_)for(r in _)i&&r in i||l_(n.style,r,"");if(i)for(r in i)_&&i[r]==_[r]||l_(n.style,r,i[r])}else if(r[0]=="o"&&r[1]=="n")u=r!=(r=r.replace(H_,"$1")),f=r.toLowerCase(),r=f in n||r=="onFocusOut"||r=="onFocusIn"?f.slice(2):r.slice(2),n.l||(n.l={}),n.l[r+u]=i,i?_?i[_r]=_[_r]:(i[_r]=ui,n.addEventListener(r,u?ri:ni,u)):n.removeEventListener(r,u?ri:ni,u);else{if(c=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in n)try{n[r]=i==null?"":i;break n}catch(g){}typeof i=="function"||(i==null||i===!1&&r[4]!="-"?n.removeAttribute(r):n.setAttribute(r,r=="popover"&&i==1?"":i))}}function w_(n){return function(r){if(this.l){var i=this.l[r.type+n];if(r[kr]==null)r[kr]=ui++;else if(r[kr]<i[_r])return;return i(d.event?d.event(r):r)}}}function gi(n,r,i,_,c,u,f,g,$,o){var x,l,b,h,k,p,B,t,v,G,U,H,P,K,T,w=r.type;if(r.constructor!==void 0)return null;128&i.__u&&($=!!(32&i.__u),u=[g=r.__e=i.__e]),(x=d.__b)&&x(r);n:if(typeof w=="function")try{if(t=r.props,v=w.prototype&&w.prototype.render,G=(x=w.contextType)&&_[x.__c],U=x?G?G.props.value:x.__:_,i.__c?B=(l=r.__c=i.__c).__=l.__E:(v?r.__c=l=new w(t,U):(r.__c=l=new cr(t,U),l.constructor=w,l.render=Zu),G&&G.sub(l),l.state||(l.state={}),l.__n=_,b=l.__d=!0,l.__h=[],l._sb=[]),v&&l.__s==null&&(l.__s=l.state),v&&w.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=vn({},l.__s)),vn(l.__s,w.getDerivedStateFromProps(t,l.__s))),h=l.props,k=l.state,l.__v=r,b)v&&w.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),v&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(v&&w.getDerivedStateFromProps==null&&t!==h&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(t,U),r.__v==i.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(t,l.__s,U)===!1){r.__v!=i.__v&&(l.props=t,l.state=l.__s,l.__d=!1),r.__e=i.__e,r.__k=i.__k,r.__k.some(function(z){z&&(z.__=r)}),zr.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&f.push(l);break n}l.componentWillUpdate!=null&&l.componentWillUpdate(t,l.__s,U),v&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(h,k,p)})}if(l.context=U,l.props=t,l.__P=n,l.__e=!1,H=d.__r,P=0,v)l.state=l.__s,l.__d=!1,H&&H(r),x=l.render(l.props,l.state,l.context),zr.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,H&&H(r),x=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++P<25);l.state=l.__s,l.getChildContext!=null&&(_=vn(vn({},_),l.getChildContext())),v&&!b&&l.getSnapshotBeforeUpdate!=null&&(p=l.getSnapshotBeforeUpdate(h,k)),K=x!=null&&x.type===Rr&&x.key==null?T_(x.props.children):x,g=j_(n,Wr(K)?K:[K],r,i,_,c,u,f,g,$,o),l.base=r.__e,r.__u&=-161,l.__h.length&&f.push(l),B&&(l.__E=l.__=null)}catch(z){if(r.__v=null,$||u!=null)if(z.then){for(r.__u|=$?160:128;g&&g.nodeType==8&&g.nextSibling;)g=g.nextSibling;u[u.indexOf(g)]=null,r.__e=g}else{for(T=u.length;T--;)fi(u[T]);_i(r)}else r.__e=i.__e,r.__k=i.__k,z.then||_i(r);d.__e(z,r,i)}else u==null&&r.__v==i.__v?(r.__k=i.__k,r.__e=i.__e):g=r.__e=Du(i.__e,r,i,_,c,u,f,$,o);return(x=d.diffed)&&x(r),128&r.__u?void 0:g}function _i(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(_i))}function P_(n,r,i){for(var _=0;_<i.length;_++)oi(i[_],i[++_],i[++_]);d.__c&&d.__c(r,n),n.some(function(c){try{n=c.__h,c.__h=[],n.some(function(u){u.call(c)})}catch(u){d.__e(u,c.__v)}})}function T_(n){return typeof n!="object"||n==null||n.__b>0?n:Wr(n)?n.map(T_):n.constructor!==void 0?null:vn({},n)}function Du(n,r,i,_,c,u,f,g,$){var o,x,l,b,h,k,p,B=i.props||Br,t=r.props,v=r.type;if(v=="svg"?c="http://www.w3.org/2000/svg":v=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),u!=null){for(o=0;o<u.length;o++)if((h=u[o])&&"setAttribute"in h==!!v&&(v?h.localName==v:h.nodeType==3)){n=h,u[o]=null;break}}if(n==null){if(v==null)return document.createTextNode(t);n=document.createElementNS(c,v,t.is&&t),g&&(d.__m&&d.__m(r,u),g=!1),u=null}if(v==null)B===t||g&&n.data==t||(n.data=t);else{if(u=v=="textarea"&&t.defaultValue!=null?null:u&&Hr.call(n.childNodes),!g&&u!=null)for(B={},o=0;o<n.attributes.length;o++)B[(h=n.attributes[o]).name]=h.value;for(o in B)h=B[o],o=="dangerouslySetInnerHTML"?l=h:o=="children"||(o in t)||o=="value"&&("defaultValue"in t)||o=="checked"&&("defaultChecked"in t)||vr(n,o,null,h,c);for(o in t)h=t[o],o=="children"?b=h:o=="dangerouslySetInnerHTML"?x=h:o=="value"?k=h:o=="checked"?p=h:g&&typeof h!="function"||B[o]===h||vr(n,o,h,B[o],c);if(x)g||l&&(x.__html==l.__html||x.__html==n.innerHTML)||(n.innerHTML=x.__html),r.__k=[];else if(l&&(n.innerHTML=""),j_(r.type=="template"?n.content:n,Wr(b)?b:[b],r,i,_,v=="foreignObject"?"http://www.w3.org/1999/xhtml":c,u,f,u?u[0]:i.__k&&Dn(i,0),g,$),u!=null)for(o=u.length;o--;)fi(u[o]);g&&v!="textarea"||(o="value",v=="progress"&&k==null?n.removeAttribute("value"):k!=null&&(k!==n[o]||v=="progress"&&!k||v=="option"&&k!=B[o])&&vr(n,o,k,B[o],c),o="checked",p!=null&&p!=n[o]&&vr(n,o,p,B[o],c))}return n}function oi(n,r,i){try{if(typeof n=="function"){var _=typeof n.__u=="function";_&&n.__u(),_&&r==null||(n.__u=n(r))}else n.current=r}catch(c){d.__e(c,i)}}function G_(n,r,i){var _,c;if(d.unmount&&d.unmount(n),(_=n.ref)&&(_.current&&_.current!=n.__e||oi(_,null,r)),(_=n.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(u){d.__e(u,r)}_.base=_.__P=null}if(_=n.__k)for(c=0;c<_.length;c++)_[c]&&G_(_[c],r,i||typeof n.type!="function");i||fi(n.__e),n.__c=n.__=n.__e=void 0}function Zu(n,r,i){return this.constructor(n,i)}function Ln(n,r,i){var _,c,u,f;r==document&&(r=document.documentElement),d.__&&d.__(n,r),c=(_=typeof i=="function")?null:i&&i.__k||r.__k,u=[],f=[],gi(r,n=(!_&&i||r).__k=si(Rr,null,[n]),c||Br,Br,r.namespaceURI,!_&&i?[i]:c?null:r.firstChild?Hr.call(r.childNodes):null,u,!_&&i?i:c?c.__e:r.firstChild,_,f),P_(u,n,f)}function Lu(n){function r(i){var _,c;return this.getChildContext||(_=new Set,(c={})[r.__c]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){_=null},this.shouldComponentUpdate=function(u){this.props.value!=u.value&&_.forEach(function(f){f.__e=!0,ii(f)})},this.sub=function(u){_.add(u);var f=u.componentWillUnmount;u.componentWillUnmount=function(){_&&_.delete(u),f&&f.call(u)}}),i.children}return r.__c="__cC"+W_++,r.__=n,r.Provider=r.__l=(r.Consumer=function(i,_){return i.children(_)}).contextType=r,r}function In(n,r){a.__h&&a.__h(S,n,Zn||r),Zn=0;var i=S.__H||(S.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function y(n){return Zn=1,N_(X_,n)}function N_(n,r,i){var _=In(Rn++,2);if(_.t=n,!_.__c&&(_.__=[i?i(r):X_(void 0,r),function(g){var $=_.__N?_.__N[0]:_.__[0],o=_.t($,g);$!==o&&(_.__N=[o,_.__[1]],_.__c.setState({}))}],_.__c=S,!S.__f)){var c=function(g,$,o){if(!_.__c.__H)return!0;var x=_.__c.__H.__.filter(function(b){return b.__c});if(x.every(function(b){return!b.__N}))return!u||u.call(this,g,$,o);var l=_.__c.props!==g;return x.some(function(b){if(b.__N){var h=b.__[0];b.__=b.__N,b.__N=void 0,h!==b.__[0]&&(l=!0)}}),u&&u.call(this,g,$,o)||l};S.__f=!0;var{shouldComponentUpdate:u,componentWillUpdate:f}=S;S.componentWillUpdate=function(g,$,o){if(this.__e){var x=u;u=void 0,c(g,$,o),u=x}f&&f.call(this,g,$,o)},S.shouldComponentUpdate=c}return _.__N||_.__}function M(n,r){var i=In(Rn++,3);!a.__s&&$i(i.__H,r)&&(i.__=n,i.u=r,S.__H.__h.push(i))}function jr(n,r){var i=In(Rn++,4);!a.__s&&$i(i.__H,r)&&(i.__=n,i.u=r,S.__h.push(i))}function C(n){return Zn=5,Y(function(){return{current:n}},[])}function Iu(n,r,i){Zn=6,jr(function(){if(typeof n=="function"){var _=n(r());return function(){n(null),_&&typeof _=="function"&&_()}}if(n)return n.current=r(),function(){return n.current=null}},i==null?i:i.concat(n))}function Y(n,r){var i=In(Rn++,7);return $i(i.__H,r)&&(i.__=n(),i.__H=r,i.__h=n),i.__}function j(n,r){return Zn=8,Y(function(){return n},r)}function Yu(n){var r=S.context[n.__c],i=In(Rn++,9);return i.c=n,r?(i.__==null&&(i.__=!0,r.sub(S)),r.props.value):n.__}function Cu(n,r){a.useDebugValue&&a.useDebugValue(r?r(n):n)}function Ou(n){var r=In(Rn++,10),i=y();return r.__=n,S.componentDidCatch||(S.componentDidCatch=function(_,c){r.__&&r.__(_,c),i[1](_)}),[i[0],function(){i[1](void 0)}]}function Ju(){for(var n;n=V_.shift();){var r=n.__H;if(n.__P&&r)try{r.__h.some(Kr),r.__h.some(ci),r.__h=[]}catch(i){r.__h=[],a.__e(i,n.__v)}}}function Eu(n){var r,i=function(){clearTimeout(_),p_&&cancelAnimationFrame(r),setTimeout(n)},_=setTimeout(i,35);p_&&(r=requestAnimationFrame(i))}function Kr(n){var r=S,i=n.__c;typeof i=="function"&&(n.__c=void 0,i()),S=r}function ci(n){var r=S;n.__c=n.__(),S=r}function $i(n,r){return!n||n.length!==r.length||r.some(function(i,_){return i!==n[_]})}function X_(n,r){return typeof r=="function"?r(n):r}function Su(n){var r=K_.get(this);return r||(r=new Map,K_.set(this,r)),(r=Q_(this,r.get(n)||(r.set(n,r=function(i){for(var _,c,u=1,f="",g="",$=[0],o=function(b){u===1&&(b||(f=f.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?$.push(0,b,f):u===3&&(b||f)?($.push(3,b,f),u=2):u===2&&f==="..."&&b?$.push(4,b,0):u===2&&f&&!b?$.push(5,0,!0,f):u>=5&&((f||!b&&u===5)&&($.push(u,0,f,c),u=6),b&&($.push(u,b,0,c),u=6)),f=""},x=0;x<i.length;x++){x&&(u===1&&o(),o(x));for(var l=0;l<i[x].length;l++)_=i[x][l],u===1?_==="<"?(o(),$=[$],u=3):f+=_:u===4?f==="--"&&_===">"?(u=1,f=""):f=_+f[0]:g?_===g?g="":f+=_:_==='"'||_==="'"?g=_:_===">"?(o(),u=1):u&&(_==="="?(u=5,c=f,f=""):_==="/"&&(u<5||i[x][l+1]===">")?(o(),u===3&&($=$[0]),u=$,($=$[0]).push(2,0,u),u=0):_===" "||_==="\t"||_===`
`||_==="\r"?(o(),u=2):f+=_),u===3&&f==="!--"&&(u=4,$=$[0])}return o(),$}(n)),r),arguments,[])).length>1?r:r[0]}var Hr,d,B_,Xu,Wn,$_,z_,F_,mr,kr,_r,H_,ui,ni,ri,W_,Br,zr,Qu,Wr,Rn,S,ar,y_,Zn=0,V_,a,t_,x_,b_,h_,v_,k_,p_,Q_=function(n,r,i,_){var c;r[0]=0;for(var u=1;u<r.length;u++){var f=r[u++],g=r[u]?(r[0]|=f?1:2,i[r[u++]]):r[++u];f===3?_[0]=g:f===4?_[1]=Object.assign(_[1]||{},g):f===5?(_[1]=_[1]||{})[r[++u]]=g:f===6?_[1][r[++u]]+=g+"":f?(c=n.apply(g,Q_(n,g,i,["",null])),_.push(c),g[0]?r[0]|=2:(r[u-2]=0,r[u]=c)):_.push(g)}return _},K_,s;var e=O(()=>{Br={},zr=[],Qu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Wr=Array.isArray;Hr=zr.slice,d={__e:function(n,r,i,_){for(var c,u,f;r=r.__;)if((c=r.__c)&&!c.__)try{if((u=c.constructor)&&u.getDerivedStateFromError!=null&&(c.setState(u.getDerivedStateFromError(n)),f=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(n,_||{}),f=c.__d),f)return c.__E=c}catch(g){n=g}throw n}},B_=0,Xu=function(n){return n!=null&&n.constructor===void 0},cr.prototype.setState=function(n,r){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=vn({},this.state),typeof n=="function"&&(n=n(vn({},i),this.props)),n&&vn(i,n),n!=null&&this.__v&&(r&&this._sb.push(r),ii(this))},cr.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ii(this))},cr.prototype.render=Rr,Wn=[],z_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F_=function(n,r){return n.__v.__b-r.__v.__b},Fr.__r=0,mr=Math.random().toString(8),kr="__d"+mr,_r="__a"+mr,H_=/(PointerCapture)$|Capture$/i,ui=0,ni=w_(!1),ri=w_(!0),W_=0;V_=[],a=d,t_=a.__b,x_=a.__r,b_=a.diffed,h_=a.__c,v_=a.unmount,k_=a.__;a.__b=function(n){S=null,t_&&t_(n)},a.__=function(n,r){n&&r.__k&&r.__k.__m&&(n.__m=r.__k.__m),k_&&k_(n,r)},a.__r=function(n){x_&&x_(n),Rn=0;var r=(S=n.__c).__H;r&&(ar===S?(r.__h=[],S.__h=[],r.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(r.__h.some(Kr),r.__h.some(ci),r.__h=[],Rn=0)),ar=S},a.diffed=function(n){b_&&b_(n);var r=n.__c;r&&r.__H&&(r.__H.__h.length&&(V_.push(r)!==1&&y_===a.requestAnimationFrame||((y_=a.requestAnimationFrame)||Eu)(Ju)),r.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),ar=S=null},a.__c=function(n,r){r.some(function(i){try{i.__h.some(Kr),i.__h=i.__h.filter(function(_){return!_.__||ci(_)})}catch(_){r.some(function(c){c.__h&&(c.__h=[])}),r=[],a.__e(_,i.__v)}}),h_&&h_(n,r)},a.unmount=function(n){v_&&v_(n);var r,i=n.__c;i&&i.__H&&(i.__H.__.some(function(_){try{Kr(_)}catch(c){r=c}}),i.__H=void 0,r&&a.__e(r,i.__v))};p_=typeof requestAnimationFrame=="function";K_=new Map;s=Su.bind(si)});function jn(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function sn(n,r){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,r)}catch{return}}function li(n,r=!1){let i=jn(n);if(i===null)return r;return i==="true"}function wi(n,r=null){let i=jn(n);if(i===null)return r;let _=parseInt(i,10);return Number.isFinite(_)?_:r}function M_(n){let r=jn(n);if(!r)return null;try{return JSON.parse(r)}catch{return null}}function Pr(n){let r=String(n??"").trim().toLowerCase().replace(/_/g,"-");if(!r)return Yn;if(r==="zh-cn"||r==="zh"||r==="zh-hans"||r.startsWith("zh-hans"))return"zh-CN";if(r==="ja"||r.startsWith("ja-"))return"ja";if(r==="en"||r.startsWith("en-"))return"en";return Yn}function nf(){if(typeof navigator>"u")return Yn;let n=[...Array.isArray(navigator.languages)?navigator.languages:[],navigator.language].filter((r)=>typeof r==="string"&&r.length>0);for(let r of n){let i=Pr(r);if(i!==Yn)return i}return Yn}function rf(){let n=jn(D_);if(n)return Pr(n);return nf()}function _f(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(yi,{detail:{locale:n}}))}function Ur(){if(!ti)cf();return Tn}function cf(){return Tn=rf(),ti=!0,Tn}function uf(n,r={}){let i=Pr(n);if(ti=!0,i===Tn&&r.persist===!1)return Tn;if(Tn=i,r.persist!==!1)sn(D_,i);return _f(i),Tn}function ff(n,r){if(!r)return n;return n.replace(/\{(\w+)\}/g,(i,_)=>{let c=r[_];return c===void 0||c===null?i:String(c)})}function L_(n,r,i=Ur()){let c=au[i]?.[n]??Z_[n]??n;return ff(c,r)}function Tr(n,r){return L_(n,r)}function sf(){let[n,r]=y(Ur());return M(()=>{if(typeof window>"u"||typeof window.addEventListener!=="function")return;let i=(_)=>{let c=_.detail,u=Pr(c?.locale??Ur());r(u)};return window.addEventListener(yi,i),r(Ur()),()=>window.removeEventListener(yi,i)},[]),[n,(i)=>uf(i)]}function J(){let[n,r]=sf();return{locale:n,setLocale:r,t:(i,_)=>L_(i,_,n)}}var Yn="en",q_,A_,D_="piclaw_locale",yi="piclaw-locale-change",Z_,eu,mu,au,Tn,ti=!1;var on=O(()=>{e();q_=["en","zh-CN","ja"],A_={en:"English","zh-CN":"简体中文",ja:"日本語"},Z_={"compose.placeholder":"Message (Enter to send, Shift+Enter for newline)...","compose.send":"Send","compose.stop":"Stop","compose.searchPlaceholder":"Search (Enter to run)...","compose.clearAll":"Clear all","compose.clearAllTitle":"Clear all attachments and references","compose.scope":"Scope","compose.searchScope":"Search scope","compose.scopeCurrent":"Current","compose.scopeBranchFamily":"Branch family","compose.scopeAll":"All chats","compose.filterImages":"Images","compose.filterAttachments":"Attachments","compose.search":"Search","compose.closeSearch":"Close search","compose.shareLocation":"Share location","compose.attachFile":"Attach file","compose.queueControls":"Queued follow-up controls","compose.moveUp":"Move up","compose.moveUpQueue":"Move up in queue","compose.moveDown":"Move down","compose.moveDownQueue":"Move down in queue","compose.editInCompose":"Edit in compose","compose.returnToEditor":"Return queued message to editor","compose.injectSteer":"Inject queued follow-up as steer","compose.steer":"Steer","compose.cancelQueued":"Cancel queued message","compose.resizeInput":"Resize message input","compose.resizeInputHint":"Drag to resize message input","compose.modelPicker":"Model picker","compose.sessionsAndAgents":"Sessions and agents","compose.openModelPicker":"Open model picker","compose.newBranchTitle":"Create a new branch from this chat","compose.newRootTitle":"Create a clean root session such as web:ops","compose.renameSessionTitle":"Rename the current session","compose.pruneSessionTitle":"Delete (prune) current agent/session branch","compose.filterImagesTitle":"Only show messages with images","compose.filterAttachmentsTitle":"Only show messages with attachments","compose.selectModel":"Select model","compose.loadingModels":"Loading models…","compose.noModels":"No models available.","compose.nextModel":"Next model","compose.manageSessions":"Manage sessions & agents","compose.noSessions":"No other sessions yet.","compose.newBranch":"New branch","compose.newRoot":"New root…","compose.mergeCurrent":"Merge current w/ parent","compose.renameCurrent":"Rename current…","compose.deleteCurrent":"Delete current…","compose.mergeInto":"Merge this branch into {target}","compose.mergeBlocked":"This branch cannot be merged while active or while it has children","workspace.title":"Workspace","workspace.newFile":"New file","workspace.refresh":"Refresh","workspace.actions":"Workspace actions","workspace.uploadFiles":"Upload files","workspace.reindexing":"Reindexing workspace…","workspace.deleteFile":"Delete file","workspace.download":"Download","workspace.uploadToFolder":"Upload files to this folder","workspace.addFolderHint":"Add folder hint to compose","workspace.downloadZip":"Download folder as zip","workspace.openInTab":"Open in tab","workspace.openInEditor":"Open in editor","workspace.renameSelected":"Rename selected","workspace.downloadSelectedFile":"Download selected file","workspace.downloadSelectedFolder":"Download selected folder (zip)","workspace.deleteSelectedFile":"Delete selected file","shell.settings":"Settings","shell.newChat":"New chat","shell.connecting":"Connecting…","shell.connected":"Connected","language.label":"Language","settings.title":"Settings","settings.close":"Close (Esc)","settings.filter":"Filter…","settings.loading":"Loading settings…","settings.section.general":"General","settings.section.sessions":"Sessions","settings.section.recordings":"Recordings","settings.section.compaction":"Compaction","settings.section.keyboard":"Keyboard","settings.section.workspace":"Workspace","settings.section.environment":"Environment","settings.section.providers":"Providers","settings.section.models":"Models","settings.section.theme":"Appearance","settings.section.scheduled-tasks":"Scheduled Tasks","settings.section.quick-actions":"Quick Actions","settings.section.keychain":"Keychain","settings.section.tools":"Tools","settings.section.addons":"Add-ons","settings.placeholder.recordings":"Filter recordings…","settings.placeholder.keyboard":"Filter shortcuts…","settings.placeholder.environment":"Filter environment…","settings.placeholder.models":"Filter models…","settings.placeholder.scheduled-tasks":"Filter scheduled tasks…","settings.placeholder.quick-actions":"Filter quick actions…","settings.placeholder.keychain":"Filter entries…","settings.placeholder.tools":"Filter tools…","settings.placeholder.addons":"Filter add-ons…","preview.close":"Close","preview.loading":"Loading preview…","preview.files":"Files","preview.folders":"Folders","preview.compressed":"Compressed","preview.uncompressed":"Uncompressed","preview.name":"Name","preview.type":"Type","preview.method":"Method","preview.size":"Size","post.deleteMessage":"Delete message","post.tooLarge":"Message too large to display.","post.previewTruncated":"Preview truncated.","post.submitted":"Submitted","post.discard":"Discard","post.save":"Save","post.cancel":"Cancel","post.addNote":"Add note","post.addNotePlaceholder":"Add a note…","tab.close":"Close","tab.closeOthers":"Close Others","tab.closeAll":"Close All","tab.reattach":"Reattach","tab.openInWindow":"Open in Window","tab.openInNewTab":"Open in New Tab","tab.pinned":"Pinned","tab.detached":"Detached","tab.openSeparateWindow":"Open in separate window","status.trackedVariables":"Tracked variables","status.attachToSession":"Attach to session","status.files":"Files","status.proposedDiff":"Proposed diff","status.copyTmux":"Copy tmux command","status.experimentDuration":"Experiment duration","status.sinceLastActivity":"Since last activity","annotator.title":"Annotate image","annotator.typeLabel":"Type label…","annotator.undo":"Undo","annotator.resetZoom":"Reset zoom","tree.filter":"Filter…","tree.sessionTree":"Session tree","btw.label":"BTW side conversation","btw.close":"Close BTW","btw.thinking":"Thinking","mdpreview.close":"Close preview","mdpreview.unavailable":"Preview unavailable","widget.close":"Close widget","oobe.gettingStarted":"Getting started","oobe.needsSetupTitle":"Instance needs setup","oobe.configuredTitle":"Instance is configured","oobe.needsSetupBody":"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.","oobe.configuredBody":"This instance looks configured. Review or update provider and model settings in Settings.","oobe.openSettings":"Open Settings","oobe.dismiss":"Dismiss","oobe.done":"Done","palette.placeholder":"Type to jump to an agent, workspace action, or slash command…","palette.hideWorkspace":"Hide workspace","palette.showWorkspace":"Show workspace","palette.hideWorkspaceDesc":"Hide the workspace sidebar.","palette.showWorkspaceDesc":"Show the workspace sidebar.","palette.exitChatOnly":"Exit chat-only mode","palette.chatOnly":"Chat-only mode","palette.exitChatOnlyDesc":"Return to the split workspace layout.","palette.chatOnlyDesc":"Switch to the chat-only layout.","palette.groupAgents":"Agents","palette.groupWorkspace":"Workspace","palette.groupSlash":"Slash commands","palette.hintMove":"Move","palette.hintSelect":"Select","palette.hintPopOut":"Pop out","palette.hintClose":"Close","settings.appliedNotice":"Settings applied. Changes take effect on the next turn.","settings.sessions.lifecycle":"Session Lifecycle","settings.sessions.autoRotate":"Auto-rotate sessions","settings.sessions.maxSize":"Max session size (MB)","settings.sessions.maxSizeAria":"max session size","settings.sessions.agentBehaviour":"Agent Behaviour","settings.sessions.toolBudget":"Tool use budget","settings.sessions.toolBudgetAria":"tool use budget","settings.sessions.toolBudgetHint":"max tool-call messages per turn","settings.sessions.isolation":"Session isolation","settings.sessions.isolationNone":"None — full cross-session visibility","settings.sessions.isolationSummary":"Summary — tools visible, no arguments","settings.sessions.isolationFull":"Full — sessions cannot see each other","settings.editor.heading":"Editor","settings.editor.vimMode":"Vim mode","settings.editor.showWhitespace":"Show whitespace","settings.editor.livePreview":"Markdown live preview","settings.editor.fontSize":"Font size (px)","settings.editor.fontSizeAria":"editor font size","settings.editor.fontFamily":"Font family","settings.editor.fontFamilyPlaceholder":"monospace (default)","settings.editor.localOnlyHint":"This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.","settings.appearance.syncing":"Syncing appearance…","settings.appearance.default":"Default","settings.appearance.autoLightDark":"auto (light/dark)","settings.appearance.tint":"Tint:","settings.appearance.clearTint":"Clear tint","settings.appearance.none":"none","settings.keyboard.heading":"Keyboard","settings.keyboard.hint1":"Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.","settings.keyboard.hint1b":"is reserved for dismiss/abort and cannot be rebound.","settings.keyboard.hint2mid":"and typing","settings.keyboard.hint2end":"outside the compose box open this pane.","settings.keyboard.resetAll":"Reset all to defaults","settings.keyboard.defaultColon":"Default:","settings.keyboard.save":"Save","settings.keyboard.defaultBtn":"Default","settings.keyboard.noMatch":"No shortcuts match this filter.","settings.keyboard.invalidShortcut":"Invalid shortcut: {token}. Escape is reserved and cannot be rebound.","settings.keyboard.saved":"Keyboard shortcuts saved.","settings.keyboard.resetOne":"Keyboard shortcut reset to default.","settings.keyboard.resetAllDone":"Keyboard shortcuts reset to defaults.","settings.workspace.serverApplied":"Workspace settings applied. Server-side limits affect new workspace requests immediately.","settings.workspace.browserApplied":"Browser workspace settings applied immediately in this tab.","settings.workspace.access":"Access","settings.workspace.enableTerminal":"Enable web terminal","settings.workspace.allowVnc":"Allow direct VNC targets","settings.workspace.accessHint":"Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.","settings.workspace.guardrails":"Server scan guardrails","settings.workspace.maxDepth":"Max tree depth","settings.workspace.maxDepthAria":"workspace tree max depth","settings.workspace.maxDepthHintPre":"caps all","settings.workspace.maxDepthHintPost":"requests","settings.workspace.maxEntries":"Max entries per scan","settings.workspace.maxEntriesAria":"workspace tree max entries","settings.workspace.maxEntriesHint":"truncate oversized tree walks earlier","settings.workspace.thisBrowser":"This browser","settings.workspace.refreshInterval":"Refresh interval (seconds)","settings.workspace.refreshIntervalAria":"workspace refresh interval","settings.workspace.folderDepth":"Folder preview scan depth","settings.workspace.folderDepthAria":"folder preview scan depth","settings.workspace.folderDepthHintPre":"set to","settings.workspace.folderDepthHintPost":"to disable folder size preview scans","settings.workspace.footerHint":"Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.","settings.models.thinkingLevel":"Thinking level","settings.models.noThinking":"Current model does not support thinking.","settings.models.thinkingLevelLabel":"Thinking level:","settings.models.loading":"Loading models…","settings.models.summary":"Model and provider names may wrap in narrow panes to avoid clipping.","settings.models.scopedOnly":"Scoped models only","settings.models.scopedCheckboxPre":"Use Pi","settings.models.scopedCheckboxPost":"for Piclaw model lists","settings.models.scopedHintPre":"Filters this picker and the","settings.models.scopedHintPost":"tool. TUI model selection remains unchanged.","settings.models.colModel":"Model","settings.models.colProvider":"Provider","settings.models.colContext":"Context","settings.models.colReasoning":"Reasoning","settings.models.noMatch":'No models match "{filter}"',"settings.tools.unavailable":"Tool data not available.","settings.tools.search":"Search","settings.tools.matchMode":"Match mode","settings.tools.orMode":"Any keyword (OR) — results match at least one search term","settings.tools.andMode":"All keywords (AND) — results must match every search term","settings.tools.colEnabled":"Enabled","settings.tools.colTool":"Tool","settings.tools.colCompact":"Compact","settings.tools.colKind":"Kind","settings.tools.colSummary":"Summary","settings.tools.colSource":"Source","settings.tools.disableCompaction":"Disable tool-result compaction for this tool","settings.tools.enableCompaction":"Enable tool-result compaction for this tool","settings.tools.noMatch":'No tools match "{filter}"',"settings.tools.footer":"Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; the “Compact” column controls tool-result compaction eligibility.","settings.environment.heading":"Environment","settings.environment.introPre":"Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to","settings.environment.introPost":", so subsequent tool calls inherit them.","settings.environment.refresh":"Refresh","settings.environment.addOverride":"Add override","settings.environment.valuePlaceholder":"value","settings.environment.save":"Save","settings.environment.countLine":"{count} variables visible • {overrides} overrides active • {keychain} keychain-injected variables hidden","settings.environment.overridden":"Overridden in KV","settings.environment.inherited":"Inherited from process environment","settings.environment.kindOverride":"override","settings.environment.kindProcess":"process","settings.environment.clear":"Clear","settings.environment.noMatch":'No environment variables match "{filter}".',"settings.environment.refreshedToast":"Environment refreshed.","settings.environment.savedToast":"Saved environment override for {name}.","settings.environment.clearedToast":"Cleared environment override for {name}.","settings.quickActions.loading":"Loading…","settings.quickActions.heading":"Timeline Quick Actions","settings.quickActions.intro":"Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.","settings.quickActions.enableAll":"Enable all","settings.quickActions.saving":"Saving…","settings.quickActions.saveApply":"Save & apply","settings.quickActions.workspaceCommands":"Workspace commands","settings.quickActions.noWorkspaceMatch":"No workspace commands match this filter.","settings.quickActions.slashCommands":"Slash commands","settings.quickActions.slashFallback":"slash command","settings.quickActions.noSlashMatch":"No slash commands match this filter.","settings.quickActions.savingToast":"Saving quick actions…","settings.quickActions.savedToast":"Quick Actions saved.","settings.providers.authApiKey":"API key","settings.providers.authConfigured":"Configured","settings.providers.heading":"Providers","settings.providers.tagCustom":"Custom","settings.providers.logout":"Logout","settings.providers.reconfigure":"Reconfigure","settings.providers.setUp":"Set up","settings.providers.setupHint":"Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.","settings.providers.starting":"Starting…","settings.providers.signInOAuth":"Sign in with OAuth","settings.providers.apiKeyLabel":"API Key","settings.providers.apiKeyPlaceholder":"Enter API key","settings.providers.save":"Save","settings.providers.configuring":"Configuring…","settings.providers.saveConfig":"Save configuration","settings.providers.apiKeyEmpty":"API key cannot be empty.","settings.providers.configuringToast":"Configuring {provider}…","settings.providers.configured":"{provider} configured.","settings.providers.startingOAuth":"Starting OAuth for {provider}…","settings.providers.oauthOpened":"OAuth window opened. Complete the sign-in flow, then close this message.","settings.providers.oauthStarted":"OAuth flow started for {provider}. Check the chat.","settings.providers.loggingOut":"Logging out {provider}…","settings.providers.loggedOut":"Logged out {provider}. Restart may be needed.","settings.general.identity":"Identity","settings.general.userLabel":"User","settings.general.yourName":"Your name","settings.general.agentLabel":"Agent","settings.general.agentName":"Agent name","settings.general.notifications":"Notifications","settings.general.browserNotifications":"Browser notifications","settings.general.notifSecureHint":"Use the \uD83D\uDD14 bell button in the compose bar to enable/disable notifications. Web Push requires HTTPS or localhost.","settings.general.notifInsecureHint":"⚠ Not available — requires a secure context (HTTPS or localhost). Access via SSH tunnel or reverse proxy with TLS to enable.","settings.general.display":"Display","settings.general.systemMeters":"System meters","settings.general.systemMetersHint":"CPU/memory/network meters in the status bar. This browser only.","settings.general.instanceConfig":"Instance Configuration","settings.general.composeUpload":"Compose upload (MB)","settings.general.composeUploadAria":"compose upload limit","settings.general.composeUploadHint":"chat/media attachments","settings.general.workspaceUpload":"Workspace upload (MB)","settings.general.workspaceUploadAria":"workspace upload limit","settings.general.workspaceUploadHint":"defaults to 256 MB; chunked uploads allow up to 1 GB","settings.general.authentication":"Authentication","settings.general.widgetToken":"Widget bearer token","settings.general.token":"Token","settings.general.hideToken":"Hide token","settings.general.revealToken":"Reveal token","settings.general.copyToken":"Copy token","settings.general.copied":"Copied","settings.general.regenerating":"Regenerating…","settings.general.regenerate":"Regenerate","settings.general.tokenHintPre":"Read-only token for","settings.general.tokenHintMid":"and","settings.general.tokenHintPost":". Use as","settings.general.tokenHintEnd":".","settings.general.copyFailed":"Could not copy widget token. Select the token field and copy manually.","settings.general.regenConfirm":"Regenerate the widget token? Existing macOS widgets using the old token will stop updating.","settings.general.totpTitle":"TOTP setup QR","settings.general.totpConfiguredHint":"Current web-login authenticator secret. Scan this QR to add another authenticator device.","settings.general.totpUnconfiguredHint":"TOTP is not configured for this instance yet, so no setup QR is available.","settings.general.issuer":"Issuer","settings.general.label":"Label","settings.general.secret":"Secret","settings.general.avatarUpload":"Click to upload","menu.title":"Menu","menu.showWorkspace":"Show workspace","menu.hideWorkspace":"Hide workspace","menu.openExplorer":"Open explorer","menu.chatOnly":"Chat-only mode","menu.exitChatOnly":"Exit chat-only mode","menu.openTerminal":"Open terminal in tab","menu.openVnc":"Open VNC in tab","menu.newFile":"New file","menu.openRecent":"Open Recent","menu.refreshTree":"Refresh tree","menu.reindex":"Reindex workspace","menu.showHidden":"Show hidden files","menu.hideHidden":"Hide hidden files","menu.scale":"Scale","menu.settings":"Settings"},eu={"compose.placeholder":"输入消息（回车发送，Shift+回车换行）...","compose.send":"发送","compose.stop":"停止","compose.searchPlaceholder":"搜索（回车运行）...","compose.clearAll":"清除全部","compose.clearAllTitle":"清除所有附件和引用","compose.scope":"范围","compose.searchScope":"搜索范围","compose.scopeCurrent":"当前","compose.scopeBranchFamily":"分支系列","compose.scopeAll":"所有聊天","compose.filterImages":"图片","compose.filterAttachments":"附件","compose.search":"搜索","compose.closeSearch":"关闭搜索","compose.shareLocation":"分享位置","compose.attachFile":"附加文件","compose.queueControls":"排队后续消息控制","compose.moveUp":"上移","compose.moveUpQueue":"在队列中上移","compose.moveDown":"下移","compose.moveDownQueue":"在队列中下移","compose.editInCompose":"在输入框中编辑","compose.returnToEditor":"将排队消息返回编辑器","compose.injectSteer":"作为引导插入排队的后续消息","compose.steer":"引导","compose.cancelQueued":"取消排队消息","compose.resizeInput":"调整消息输入框大小","compose.resizeInputHint":"拖动以调整消息输入框大小","compose.modelPicker":"模型选择器","compose.sessionsAndAgents":"会话与代理","compose.openModelPicker":"打开模型选择器","compose.newBranchTitle":"从此聊天创建新分支","compose.newRootTitle":"创建一个干净的根会话，例如 web:ops","compose.renameSessionTitle":"重命名当前会话","compose.pruneSessionTitle":"删除（修剪）当前代理/会话分支","compose.filterImagesTitle":"仅显示含图片的消息","compose.filterAttachmentsTitle":"仅显示含附件的消息","compose.selectModel":"选择模型","compose.loadingModels":"正在加载模型…","compose.noModels":"没有可用的模型。","compose.nextModel":"下一个模型","compose.manageSessions":"管理会话与代理","compose.noSessions":"暂无其他会话。","compose.newBranch":"新建分支","compose.newRoot":"新建根会话…","compose.mergeCurrent":"将当前合并到父级","compose.renameCurrent":"重命名当前…","compose.deleteCurrent":"删除当前…","compose.mergeInto":"将此分支合并到 {target}","compose.mergeBlocked":"当此分支处于活动状态或有子分支时无法合并","workspace.title":"工作区","workspace.newFile":"新建文件","workspace.refresh":"刷新","workspace.actions":"工作区操作","workspace.uploadFiles":"上传文件","workspace.reindexing":"正在重建索引…","workspace.deleteFile":"删除文件","workspace.download":"下载","workspace.uploadToFolder":"上传文件到此文件夹","workspace.addFolderHint":"将文件夹提示添加到输入框","workspace.downloadZip":"将文件夹下载为 zip","workspace.openInTab":"在标签页打开","workspace.openInEditor":"在编辑器打开","workspace.renameSelected":"重命名所选","workspace.downloadSelectedFile":"下载所选文件","workspace.downloadSelectedFolder":"下载所选文件夹（zip）","workspace.deleteSelectedFile":"删除所选文件","shell.settings":"设置","shell.newChat":"新建对话","shell.connecting":"连接中…","shell.connected":"已连接","language.label":"语言","settings.title":"设置","settings.close":"关闭（Esc）","settings.filter":"筛选…","settings.loading":"加载设置中…","settings.section.general":"常规","settings.section.sessions":"会话","settings.section.recordings":"录制","settings.section.compaction":"压缩","settings.section.keyboard":"键盘","settings.section.workspace":"工作区","settings.section.environment":"环境","settings.section.providers":"提供商","settings.section.models":"模型","settings.section.theme":"外观","settings.section.scheduled-tasks":"计划任务","settings.section.quick-actions":"快捷操作","settings.section.keychain":"密钥串","settings.section.tools":"工具","settings.section.addons":"插件","settings.placeholder.recordings":"筛选录制…","settings.placeholder.keyboard":"筛选快捷键…","settings.placeholder.environment":"筛选环境…","settings.placeholder.models":"筛选模型…","settings.placeholder.scheduled-tasks":"筛选计划任务…","settings.placeholder.quick-actions":"筛选快捷操作…","settings.placeholder.keychain":"筛选条目…","settings.placeholder.tools":"筛选工具…","settings.placeholder.addons":"筛选插件…","preview.close":"关闭","preview.loading":"正在加载预览…","preview.files":"文件","preview.folders":"文件夹","preview.compressed":"压缩后","preview.uncompressed":"未压缩","preview.name":"名称","preview.type":"类型","preview.method":"方法","preview.size":"大小","post.deleteMessage":"删除消息","post.tooLarge":"消息过大，无法显示。","post.previewTruncated":"预览已截断。","post.submitted":"已提交","post.discard":"丢弃","post.save":"保存","post.cancel":"取消","post.addNote":"添加备注","post.addNotePlaceholder":"添加备注…","tab.close":"关闭","tab.closeOthers":"关闭其他","tab.closeAll":"全部关闭","tab.reattach":"重新附加","tab.openInWindow":"在窗口中打开","tab.openInNewTab":"在新标签页打开","tab.pinned":"已固定","tab.detached":"已分离","tab.openSeparateWindow":"在独立窗口中打开","status.trackedVariables":"跟踪的变量","status.attachToSession":"附加到会话","status.files":"文件","status.proposedDiff":"建议的差异","status.copyTmux":"复制 tmux 命令","status.experimentDuration":"实验时长","status.sinceLastActivity":"自上次活动以来","annotator.title":"标注图片","annotator.typeLabel":"输入标签…","annotator.undo":"撤销","annotator.resetZoom":"重置缩放","tree.filter":"筛选…","tree.sessionTree":"会话树","btw.label":"BTW 附加对话","btw.close":"关闭 BTW","btw.thinking":"思考中","mdpreview.close":"关闭预览","mdpreview.unavailable":"预览不可用","widget.close":"关闭小部件","oobe.gettingStarted":"入门指南","oobe.needsSetupTitle":"实例需要设置","oobe.configuredTitle":"实例已配置","oobe.needsSetupBody":"此实例尚未配置。请打开“设置”并设置 AI 提供商/模型以开始发送请求。","oobe.configuredBody":"此实例看起来已配置。请在“设置”中查看或更新提供商和模型设置。","oobe.openSettings":"打开设置","oobe.dismiss":"忽略","oobe.done":"完成","palette.placeholder":"输入以跳转到代理、工作区操作或斜杠命令…","palette.hideWorkspace":"隐藏工作区","palette.showWorkspace":"显示工作区","palette.hideWorkspaceDesc":"隐藏工作区侧边栏。","palette.showWorkspaceDesc":"显示工作区侧边栏。","palette.exitChatOnly":"退出仅聊天模式","palette.chatOnly":"仅聊天模式","palette.exitChatOnlyDesc":"返回分屏工作区布局。","palette.chatOnlyDesc":"切换到仅聊天布局。","palette.groupAgents":"代理","palette.groupWorkspace":"工作区","palette.groupSlash":"斜杠命令","palette.hintMove":"移动","palette.hintSelect":"选择","palette.hintPopOut":"弹出","palette.hintClose":"关闭","settings.appliedNotice":"设置已应用。更改将在下一回合生效。","settings.sessions.lifecycle":"会话生命周期","settings.sessions.autoRotate":"自动轮换会话","settings.sessions.maxSize":"最大会话大小（MB）","settings.sessions.maxSizeAria":"最大会话大小","settings.sessions.agentBehaviour":"代理行为","settings.sessions.toolBudget":"工具使用预算","settings.sessions.toolBudgetAria":"工具使用预算","settings.sessions.toolBudgetHint":"每回合最大工具调用消息数","settings.sessions.isolation":"会话隔离","settings.sessions.isolationNone":"无 — 完全跨会话可见","settings.sessions.isolationSummary":"摘要 — 工具可见，无参数","settings.sessions.isolationFull":"完全 — 会话之间不可见","settings.editor.heading":"编辑器","settings.editor.vimMode":"Vim 模式","settings.editor.showWhitespace":"显示空白字符","settings.editor.livePreview":"Markdown 实时预览","settings.editor.fontSize":"字号（px）","settings.editor.fontSizeAria":"编辑器字号","settings.editor.fontFamily":"字体","settings.editor.fontFamilyPlaceholder":"monospace（默认）","settings.editor.localOnlyHint":"仅限此浏览器。编辑器更改存储在本地浏览器中，并在下次打开或重新加载文件标签页时生效。","settings.appearance.syncing":"正在同步外观…","settings.appearance.default":"默认","settings.appearance.autoLightDark":"自动（浅色/深色）","settings.appearance.tint":"色调：","settings.appearance.clearTint":"清除色调","settings.appearance.none":"无","settings.keyboard.heading":"键盘","settings.keyboard.hint1":"将应用级快捷键自定义为逗号分隔的绑定。更改立即生效。","settings.keyboard.hint1b":"已保留用于关闭/中止，无法重新绑定。","settings.keyboard.hint2mid":"以及键入","settings.keyboard.hint2end":"（在输入框外）可打开此面板。","settings.keyboard.resetAll":"全部重置为默认","settings.keyboard.defaultColon":"默认：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"默认","settings.keyboard.noMatch":"没有匹配此筛选的快捷键。","settings.keyboard.invalidShortcut":"无效快捷键：{token}。Escape 已保留，无法重新绑定。","settings.keyboard.saved":"快捷键已保存。","settings.keyboard.resetOne":"快捷键已重置为默认。","settings.keyboard.resetAllDone":"快捷键已全部重置为默认。","settings.workspace.serverApplied":"工作区设置已应用。服务器端限制立即影响新的工作区请求。","settings.workspace.browserApplied":"浏览器工作区设置已在此标签页立即应用。","settings.workspace.access":"访问","settings.workspace.enableTerminal":"启用 Web 终端","settings.workspace.allowVnc":"允许直接 VNC 目标","settings.workspace.accessHint":"终端访问立即更新。直接 VNC 目标策略适用于新的 VNC 请求。","settings.workspace.guardrails":"服务器扫描防护","settings.workspace.maxDepth":"最大树深度","settings.workspace.maxDepthAria":"工作区树最大深度","settings.workspace.maxDepthHintPre":"限制所有","settings.workspace.maxDepthHintPost":"请求","settings.workspace.maxEntries":"每次扫描最大条目数","settings.workspace.maxEntriesAria":"工作区树最大条目数","settings.workspace.maxEntriesHint":"更早截断超大的树遍历","settings.workspace.thisBrowser":"此浏览器","settings.workspace.refreshInterval":"刷新间隔（秒）","settings.workspace.refreshIntervalAria":"工作区刷新间隔","settings.workspace.folderDepth":"文件夹预览扫描深度","settings.workspace.folderDepthAria":"文件夹预览扫描深度","settings.workspace.folderDepthHintPre":"设为","settings.workspace.folderDepthHintPost":"以禁用文件夹大小预览扫描","settings.workspace.footerHint":"根目录和文件夹展开的树加载保持较浅；文件夹大小预览是 UI 中最深的工作区扫描。","settings.models.thinkingLevel":"思考级别","settings.models.noThinking":"当前模型不支持思考。","settings.models.thinkingLevelLabel":"思考级别：","settings.models.loading":"正在加载模型…","settings.models.summary":"在狭窄面板中，模型和提供商名称可能换行以避免裁切。","settings.models.scopedOnly":"仅限范围内模型","settings.models.scopedCheckboxPre":"使用 Pi 的","settings.models.scopedCheckboxPost":"作为 Piclaw 模型列表","settings.models.scopedHintPre":"筛选此选择器和","settings.models.scopedHintPost":"工具。TUI 模型选择保持不变。","settings.models.colModel":"模型","settings.models.colProvider":"提供商","settings.models.colContext":"上下文","settings.models.colReasoning":"推理","settings.models.noMatch":"没有匹配 “{filter}” 的模型","settings.tools.unavailable":"工具数据不可用。","settings.tools.search":"搜索","settings.tools.matchMode":"匹配模式","settings.tools.orMode":"任意关键词（OR）— 结果至少匹配一个搜索词","settings.tools.andMode":"所有关键词（AND）— 结果必须匹配每个搜索词","settings.tools.colEnabled":"已启用","settings.tools.colTool":"工具","settings.tools.colCompact":"压缩","settings.tools.colKind":"类型","settings.tools.colSummary":"摘要","settings.tools.colSource":"来源","settings.tools.disableCompaction":"为此工具禁用工具结果压缩","settings.tools.enableCompaction":"为此工具启用工具结果压缩","settings.tools.noMatch":"没有匹配 “{filter}” 的工具","settings.tools.footer":"工具激活由代理运行时管理。组复选框可折叠/展开；“压缩”列控制工具结果压缩资格。","settings.environment.heading":"环境","settings.environment.introPre":"仅显示非 keychain 环境变量。覆盖项存储在扩展 KV 中并应用于","settings.environment.introPost":"，因此后续工具调用会继承它们。","settings.environment.refresh":"刷新","settings.environment.addOverride":"添加覆盖","settings.environment.valuePlaceholder":"值","settings.environment.save":"保存","settings.environment.countLine":"{count} 个变量可见 • {overrides} 个覆盖生效 • {keychain} 个 keychain 注入变量已隐藏","settings.environment.overridden":"在 KV 中覆盖","settings.environment.inherited":"继承自进程环境","settings.environment.kindOverride":"覆盖","settings.environment.kindProcess":"进程","settings.environment.clear":"清除","settings.environment.noMatch":"没有匹配 “{filter}” 的环境变量。","settings.environment.refreshedToast":"环境已刷新。","settings.environment.savedToast":"已保存 {name} 的环境覆盖。","settings.environment.clearedToast":"已清除 {name} 的环境覆盖。","settings.quickActions.loading":"加载中…","settings.quickActions.heading":"时间线快捷操作","settings.quickActions.intro":"选择哪些操作出现在时间线预输入中。代理始终优先固定，然后是工作区命令，再是斜杠命令。","settings.quickActions.enableAll":"全部启用","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存并应用","settings.quickActions.workspaceCommands":"工作区命令","settings.quickActions.noWorkspaceMatch":"没有匹配此筛选的工作区命令。","settings.quickActions.slashCommands":"斜杠命令","settings.quickActions.slashFallback":"斜杠命令","settings.quickActions.noSlashMatch":"没有匹配此筛选的斜杠命令。","settings.quickActions.savingToast":"正在保存快捷操作…","settings.quickActions.savedToast":"快捷操作已保存。","settings.providers.authApiKey":"API 密钥","settings.providers.authConfigured":"已配置","settings.providers.heading":"提供商","settings.providers.tagCustom":"自定义","settings.providers.logout":"注销","settings.providers.reconfigure":"重新配置","settings.providers.setUp":"设置","settings.providers.setupHint":"登录流程在浏览器中打开。在狭窄面板中，设置表单会垂直堆叠以避免裁切。","settings.providers.starting":"启动中…","settings.providers.signInOAuth":"使用 OAuth 登录","settings.providers.apiKeyLabel":"API 密钥","settings.providers.apiKeyPlaceholder":"输入 API 密钥","settings.providers.save":"保存","settings.providers.configuring":"配置中…","settings.providers.saveConfig":"保存配置","settings.providers.apiKeyEmpty":"API 密钥不能为空。","settings.providers.configuringToast":"正在配置 {provider}…","settings.providers.configured":"{provider} 已配置。","settings.providers.startingOAuth":"正在为 {provider} 启动 OAuth…","settings.providers.oauthOpened":"OAuth 窗口已打开。完成登录流程，然后关闭此消息。","settings.providers.oauthStarted":"已为 {provider} 启动 OAuth 流程。请查看聊天。","settings.providers.loggingOut":"正在注销 {provider}…","settings.providers.loggedOut":"已注销 {provider}。可能需要重启。","settings.general.identity":"身份","settings.general.userLabel":"用户","settings.general.yourName":"你的名字","settings.general.agentLabel":"代理","settings.general.agentName":"代理名称","settings.general.notifications":"通知","settings.general.browserNotifications":"浏览器通知","settings.general.notifSecureHint":"使用输入栏中的 \uD83D\uDD14 铃铛按钮来启用/禁用通知。Web Push 需要 HTTPS 或 localhost。","settings.general.notifInsecureHint":"⚠ 不可用 — 需要安全上下文（HTTPS 或 localhost）。通过 SSH 隐道或带 TLS 的反向代理访问以启用。","settings.general.display":"显示","settings.general.systemMeters":"系统仪表","settings.general.systemMetersHint":"状态栏中的 CPU/内存/网络仪表。仅限此浏览器。","settings.general.instanceConfig":"实例配置","settings.general.composeUpload":"撰写上传（MB）","settings.general.composeUploadAria":"撰写上传限制","settings.general.composeUploadHint":"聊天/媒体附件","settings.general.workspaceUpload":"工作区上传（MB）","settings.general.workspaceUploadAria":"工作区上传限制","settings.general.workspaceUploadHint":"默认为 256 MB；分块上传最多允许 1 GB","settings.general.authentication":"身份验证","settings.general.widgetToken":"小部件 bearer 令牌","settings.general.token":"令牌","settings.general.hideToken":"隐藏令牌","settings.general.revealToken":"显示令牌","settings.general.copyToken":"复制令牌","settings.general.copied":"已复制","settings.general.regenerating":"正在重新生成…","settings.general.regenerate":"重新生成","settings.general.tokenHintPre":"只读令牌，用于","settings.general.tokenHintMid":"和","settings.general.tokenHintPost":"。用作","settings.general.tokenHintEnd":"。","settings.general.copyFailed":"无法复制小部件令牌。请选择令牌字段并手动复制。","settings.general.regenConfirm":"重新生成小部件令牌？使用旧令牌的现有 macOS 小部件将停止更新。","settings.general.totpTitle":"TOTP 设置二维码","settings.general.totpConfiguredHint":"当前 Web 登录验证器密钥。扫描此二维码以添加另一个验证器设备。","settings.general.totpUnconfiguredHint":"此实例尚未配置 TOTP，因此没有可用的设置二维码。","settings.general.issuer":"颁发者","settings.general.label":"标签","settings.general.secret":"密钥","settings.general.avatarUpload":"点击上传","menu.title":"菜单","menu.showWorkspace":"显示工作区","menu.hideWorkspace":"隐藏工作区","menu.openExplorer":"打开资源管理器","menu.chatOnly":"仅聊天模式","menu.exitChatOnly":"退出仅聊天模式","menu.openTerminal":"在标签页中打开终端","menu.openVnc":"在标签页中打开 VNC","menu.newFile":"新建文件","menu.openRecent":"打开最近文件","menu.refreshTree":"刷新目录树","menu.reindex":"重建工作区索引","menu.showHidden":"显示隐藏文件","menu.hideHidden":"隐藏隐藏文件","menu.scale":"缩放","menu.settings":"设置"},mu={"compose.placeholder":"メッセージ（Enterで送信、Shift+Enterで改行）...","compose.send":"送信","compose.stop":"停止","compose.searchPlaceholder":"検索（Enterで実行）...","compose.clearAll":"すべてクリア","compose.clearAllTitle":"すべての添付と参照をクリア","compose.scope":"範囲","compose.searchScope":"検索範囲","compose.scopeCurrent":"現在","compose.scopeBranchFamily":"ブランチファミリー","compose.scopeAll":"すべてのチャット","compose.filterImages":"画像","compose.filterAttachments":"添付","compose.search":"検索","compose.closeSearch":"検索を閉じる","compose.shareLocation":"位置を共有","compose.attachFile":"ファイルを添付","compose.queueControls":"キュー済みフォローアップの操作","compose.moveUp":"上に移動","compose.moveUpQueue":"キュー内で上に移動","compose.moveDown":"下に移動","compose.moveDownQueue":"キュー内で下に移動","compose.editInCompose":"入力欄で編集","compose.returnToEditor":"キュー済みメッセージを入力欄に戻す","compose.injectSteer":"キュー済みフォローアップをステアとして挿入","compose.steer":"ステア","compose.cancelQueued":"キュー済みメッセージをキャンセル","compose.resizeInput":"メッセージ入力欄のサイズ変更","compose.resizeInputHint":"ドラッグしてメッセージ入力欄のサイズを変更","compose.modelPicker":"モデルピッカー","compose.sessionsAndAgents":"セッションとエージェント","compose.openModelPicker":"モデルピッカーを開く","compose.newBranchTitle":"このチャットから新しいブランチを作成","compose.newRootTitle":"web:ops のようなクリーンなルートセッションを作成","compose.renameSessionTitle":"現在のセッションの名前を変更","compose.pruneSessionTitle":"現在のエージェント/セッションブランチを削除（プルーン）","compose.filterImagesTitle":"画像付きメッセージのみ表示","compose.filterAttachmentsTitle":"添付付きメッセージのみ表示","compose.selectModel":"モデルを選択","compose.loadingModels":"モデルを読み込み中…","compose.noModels":"利用可能なモデルがありません。","compose.nextModel":"次のモデル","compose.manageSessions":"セッションとエージェントを管理","compose.noSessions":"他のセッションはまだありません。","compose.newBranch":"新しいブランチ","compose.newRoot":"新しいルート…","compose.mergeCurrent":"現在を親にマージ","compose.renameCurrent":"現在の名前を変更…","compose.deleteCurrent":"現在を削除…","compose.mergeInto":"このブランチを {target} にマージ","compose.mergeBlocked":"このブランチはアクティブな間または子がある間はマージできません","workspace.title":"ワークスペース","workspace.newFile":"新規ファイル","workspace.refresh":"更新","workspace.actions":"ワークスペース操作","workspace.uploadFiles":"ファイルをアップロード","workspace.reindexing":"ワークスペースを再インデックス中…","workspace.deleteFile":"ファイルを削除","workspace.download":"ダウンロード","workspace.uploadToFolder":"このフォルダにファイルをアップロード","workspace.addFolderHint":"フォルダのヒントを入力欄に追加","workspace.downloadZip":"フォルダをzipでダウンロード","workspace.openInTab":"タブで開く","workspace.openInEditor":"エディタで開く","workspace.renameSelected":"選択項目の名前を変更","workspace.downloadSelectedFile":"選択したファイルをダウンロード","workspace.downloadSelectedFolder":"選択したフォルダをダウンロード（zip）","workspace.deleteSelectedFile":"選択したファイルを削除","shell.settings":"設定","shell.newChat":"新規チャット","shell.connecting":"接続中…","shell.connected":"接続済み","language.label":"言語","settings.title":"設定","settings.close":"閉じる（Esc）","settings.filter":"フィルター…","settings.loading":"設定を読み込み中…","settings.section.general":"一般","settings.section.sessions":"セッション","settings.section.recordings":"録画","settings.section.compaction":"圧縮","settings.section.keyboard":"キーボード","settings.section.workspace":"ワークスペース","settings.section.environment":"環境","settings.section.providers":"プロバイダー","settings.section.models":"モデル","settings.section.theme":"外観","settings.section.scheduled-tasks":"スケジュールタスク","settings.section.quick-actions":"クイックアクション","settings.section.keychain":"キーチェーン","settings.section.tools":"ツール","settings.section.addons":"アドオン","settings.placeholder.recordings":"録画をフィルター…","settings.placeholder.keyboard":"ショートカットをフィルター…","settings.placeholder.environment":"環境をフィルター…","settings.placeholder.models":"モデルをフィルター…","settings.placeholder.scheduled-tasks":"スケジュールタスクをフィルター…","settings.placeholder.quick-actions":"クイックアクションをフィルター…","settings.placeholder.keychain":"エントリをフィルター…","settings.placeholder.tools":"ツールをフィルター…","settings.placeholder.addons":"アドオンをフィルター…","preview.close":"閉じる","preview.loading":"プレビューを読み込み中…","preview.files":"ファイル","preview.folders":"フォルダ","preview.compressed":"圧縮後","preview.uncompressed":"非圧縮","preview.name":"名前","preview.type":"種類","preview.method":"方式","preview.size":"サイズ","post.deleteMessage":"メッセージを削除","post.tooLarge":"メッセージが大きすぎて表示できません。","post.previewTruncated":"プレビューは切り詰められました。","post.submitted":"送信済み","post.discard":"破棄","post.save":"保存","post.cancel":"キャンセル","post.addNote":"メモを追加","post.addNotePlaceholder":"メモを追加…","tab.close":"閉じる","tab.closeOthers":"他を閉じる","tab.closeAll":"すべて閉じる","tab.reattach":"再アタッチ","tab.openInWindow":"ウィンドウで開く","tab.openInNewTab":"新しいタブで開く","tab.pinned":"ピン留め済み","tab.detached":"分離済み","tab.openSeparateWindow":"別ウィンドウで開く","status.trackedVariables":"追跡中の変数","status.attachToSession":"セッションにアタッチ","status.files":"ファイル","status.proposedDiff":"提案された差分","status.copyTmux":"tmuxコマンドをコピー","status.experimentDuration":"実験の経過時間","status.sinceLastActivity":"最後のアクティビティから","annotator.title":"画像に注釈","annotator.typeLabel":"ラベルを入力…","annotator.undo":"元に戻す","annotator.resetZoom":"ズームをリセット","tree.filter":"フィルター…","tree.sessionTree":"セッションツリー","btw.label":"BTW サイド会話","btw.close":"BTW を閉じる","btw.thinking":"思考中","mdpreview.close":"プレビューを閉じる","mdpreview.unavailable":"プレビューを利用できません","widget.close":"ウィジェットを閉じる","oobe.gettingStarted":"はじめに","oobe.needsSetupTitle":"インスタンスのセットアップが必要","oobe.configuredTitle":"インスタンスは設定済み","oobe.needsSetupBody":"このインスタンスはまだ設定されていません。設定を開き、AIプロバイダー/モデルを設定してリクエストの送信を開始してください。","oobe.configuredBody":"このインスタンスは設定済みのようです。設定でプロバイダーとモデルの設定を確認または更新してください。","oobe.openSettings":"設定を開く","oobe.dismiss":"閉じる","oobe.done":"完了","palette.placeholder":"入力してエージェント、ワークスペース操作、またはスラッシュコマンドにジャンプ…","palette.hideWorkspace":"ワークスペースを非表示","palette.showWorkspace":"ワークスペースを表示","palette.hideWorkspaceDesc":"ワークスペースサイドバーを非表示にします。","palette.showWorkspaceDesc":"ワークスペースサイドバーを表示します。","palette.exitChatOnly":"チャットのみモードを終了","palette.chatOnly":"チャットのみモード","palette.exitChatOnlyDesc":"分割ワークスペースレイアウトに戻ります。","palette.chatOnlyDesc":"チャットのみのレイアウトに切り替えます。","palette.groupAgents":"エージェント","palette.groupWorkspace":"ワークスペース","palette.groupSlash":"スラッシュコマンド","palette.hintMove":"移動","palette.hintSelect":"選択","palette.hintPopOut":"ポップアウト","palette.hintClose":"閉じる","settings.appliedNotice":"設定を適用しました。変更は次のターンから有効になります。","settings.sessions.lifecycle":"セッションのライフサイクル","settings.sessions.autoRotate":"セッションを自動ローテーション","settings.sessions.maxSize":"最大セッションサイズ（MB）","settings.sessions.maxSizeAria":"最大セッションサイズ","settings.sessions.agentBehaviour":"エージェントの動作","settings.sessions.toolBudget":"ツール使用予算","settings.sessions.toolBudgetAria":"ツール使用予算","settings.sessions.toolBudgetHint":"1ターンあたりの最大ツール呼び出しメッセージ数","settings.sessions.isolation":"セッションの分離","settings.sessions.isolationNone":"なし — セッション間で完全に可視","settings.sessions.isolationSummary":"概要 — ツールは可視、引数は非表示","settings.sessions.isolationFull":"完全 — セッション同士は互いに見えない","settings.editor.heading":"エディター","settings.editor.vimMode":"Vim モード","settings.editor.showWhitespace":"空白文字を表示","settings.editor.livePreview":"Markdown ライブプレビュー","settings.editor.fontSize":"フォントサイズ（px）","settings.editor.fontSizeAria":"エディターのフォントサイズ","settings.editor.fontFamily":"フォントファミリー","settings.editor.fontFamilyPlaceholder":"monospace（デフォルト）","settings.editor.localOnlyHint":"このブラウザーのみ。エディターの変更はローカルブラウザーストレージに保存され、次にファイルタブを開くか再読み込みしたときに有効になります。","settings.appearance.syncing":"外観を同期中…","settings.appearance.default":"デフォルト","settings.appearance.autoLightDark":"自動（ライト/ダーク）","settings.appearance.tint":"色調：","settings.appearance.clearTint":"色調をクリア","settings.appearance.none":"なし","settings.keyboard.heading":"キーボード","settings.keyboard.hint1":"アプリ全体のショートカットをカンマ区切りのバインディングとしてカスタマイズします。変更はすぐに反映されます。","settings.keyboard.hint1b":"は閉じる/中止用に予約されており、再割り当てできません。","settings.keyboard.hint2mid":"と入力","settings.keyboard.hint2end":"を入力欄の外で押すとこのペインが開きます。","settings.keyboard.resetAll":"すべてデフォルトにリセット","settings.keyboard.defaultColon":"デフォルト：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"デフォルト","settings.keyboard.noMatch":"このフィルターに一致するショートカットはありません。","settings.keyboard.invalidShortcut":"無効なショートカット：{token}。Escape は予約されており、再割り当てできません。","settings.keyboard.saved":"キーボードショートカットを保存しました。","settings.keyboard.resetOne":"キーボードショートカットをデフォルトにリセットしました。","settings.keyboard.resetAllDone":"キーボードショートカットをすべてデフォルトにリセットしました。","settings.workspace.serverApplied":"ワークスペース設定を適用しました。サーバー側の制限は新しいワークスペースリクエストに直ちに反映されます。","settings.workspace.browserApplied":"ブラウザーのワークスペース設定はこのタブで直ちに適用されました。","settings.workspace.access":"アクセス","settings.workspace.enableTerminal":"Web ターミナルを有効化","settings.workspace.allowVnc":"直接 VNC ターゲットを許可","settings.workspace.accessHint":"ターミナルアクセスは直ちに更新されます。直接 VNC ターゲットポリシーは新しい VNC リクエストに適用されます。","settings.workspace.guardrails":"サーバースキャンのガードレール","settings.workspace.maxDepth":"最大ツリー深度","settings.workspace.maxDepthAria":"ワークスペースツリーの最大深度","settings.workspace.maxDepthHintPre":"すべての","settings.workspace.maxDepthHintPost":"リクエストを制限します","settings.workspace.maxEntries":"スキャンあたりの最大エントリ数","settings.workspace.maxEntriesAria":"ワークスペースツリーの最大エントリ数","settings.workspace.maxEntriesHint":"大きすぎるツリー走査を早めに打ち切ります","settings.workspace.thisBrowser":"このブラウザー","settings.workspace.refreshInterval":"更新間隔（秒）","settings.workspace.refreshIntervalAria":"ワークスペース更新間隔","settings.workspace.folderDepth":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthAria":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthHintPre":"","settings.workspace.folderDepthHintPost":"に設定するとフォルダサイズのプレビュースキャンを無効化します","settings.workspace.footerHint":"ルートおよびフォルダ展開のツリー読み込みは浅いままです。フォルダサイズのプレビューは UI で最も深いワークスペーススキャンです。","settings.models.thinkingLevel":"思考レベル","settings.models.noThinking":"現在のモデルは思考をサポートしていません。","settings.models.thinkingLevelLabel":"思考レベル：","settings.models.loading":"モデルを読み込み中…","settings.models.summary":"狭いペインでは、クリッピングを避けるためにモデル名とプロバイダー名が折り返される場合があります。","settings.models.scopedOnly":"スコープ付きモデルのみ","settings.models.scopedCheckboxPre":"Piclaw のモデル一覧に Pi の","settings.models.scopedCheckboxPost":"を使用","settings.models.scopedHintPre":"このピッカーと","settings.models.scopedHintPost":"ツールをフィルタリングします。TUI のモデル選択は変更されません。","settings.models.colModel":"モデル","settings.models.colProvider":"プロバイダー","settings.models.colContext":"コンテキスト","settings.models.colReasoning":"推論","settings.models.noMatch":"「{filter}」に一致するモデルはありません","settings.tools.unavailable":"ツールデータを利用できません。","settings.tools.search":"検索","settings.tools.matchMode":"マッチモード","settings.tools.orMode":"いずれかのキーワード（OR）— 少なくとも1つの検索語に一致","settings.tools.andMode":"すべてのキーワード（AND）— すべての検索語に一致","settings.tools.colEnabled":"有効","settings.tools.colTool":"ツール","settings.tools.colCompact":"コンパクト","settings.tools.colKind":"種類","settings.tools.colSummary":"概要","settings.tools.colSource":"ソース","settings.tools.disableCompaction":"このツールのツール結果コンパクションを無効化","settings.tools.enableCompaction":"このツールのツール結果コンパクションを有効化","settings.tools.noMatch":"「{filter}」に一致するツールはありません","settings.tools.footer":"ツールのアクティベーションはエージェントランタイムが管理します。グループのチェックボックスで折りたたみ/展開でき、「コンパクト」列はツール結果コンパクションの対象可否を制御します。","settings.environment.heading":"環境","settings.environment.introPre":"キーチェーン以外の環境変数のみを表示しています。オーバーライドは拡張機能の KV に保存され、","settings.environment.introPost":"に適用されるため、以降のツール呼び出しに継承されます。","settings.environment.refresh":"更新","settings.environment.addOverride":"オーバーライドを追加","settings.environment.valuePlaceholder":"値","settings.environment.save":"保存","settings.environment.countLine":"{count} 個の変数を表示 • {overrides} 個のオーバーライドが有効 • {keychain} 個のキーチェーン注入変数を非表示","settings.environment.overridden":"KV でオーバーライド","settings.environment.inherited":"プロセス環境から継承","settings.environment.kindOverride":"オーバーライド","settings.environment.kindProcess":"プロセス","settings.environment.clear":"クリア","settings.environment.noMatch":"「{filter}」に一致する環境変数はありません。","settings.environment.refreshedToast":"環境を更新しました。","settings.environment.savedToast":"{name} の環境オーバーライドを保存しました。","settings.environment.clearedToast":"{name} の環境オーバーライドをクリアしました。","settings.quickActions.loading":"読み込み中…","settings.quickActions.heading":"タイムラインクイックアクション","settings.quickActions.intro":"タイムラインのタイプアヘッドに表示するアクションを選択します。エージェントは常に最初に固定され、次にワークスペースコマンド、その次にスラッシュコマンドが表示されます。","settings.quickActions.enableAll":"すべて有効化","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存して適用","settings.quickActions.workspaceCommands":"ワークスペースコマンド","settings.quickActions.noWorkspaceMatch":"このフィルターに一致するワークスペースコマンドはありません。","settings.quickActions.slashCommands":"スラッシュコマンド","settings.quickActions.slashFallback":"スラッシュコマンド","settings.quickActions.noSlashMatch":"このフィルターに一致するスラッシュコマンドはありません。","settings.quickActions.savingToast":"クイックアクションを保存中…","settings.quickActions.savedToast":"クイックアクションを保存しました。","settings.providers.authApiKey":"API キー","settings.providers.authConfigured":"設定済み","settings.providers.heading":"プロバイダー","settings.providers.tagCustom":"カスタム","settings.providers.logout":"ログアウト","settings.providers.reconfigure":"再設定","settings.providers.setUp":"セットアップ","settings.providers.setupHint":"サインインフローはブラウザーで開きます。狭いペインではセットアップフォームが縦に積み重なってクリッピングを防ぎます。","settings.providers.starting":"開始中…","settings.providers.signInOAuth":"OAuth でサインイン","settings.providers.apiKeyLabel":"API キー","settings.providers.apiKeyPlaceholder":"API キーを入力","settings.providers.save":"保存","settings.providers.configuring":"設定中…","settings.providers.saveConfig":"設定を保存","settings.providers.apiKeyEmpty":"API キーを空にすることはできません。","settings.providers.configuringToast":"{provider} を設定中…","settings.providers.configured":"{provider} を設定しました。","settings.providers.startingOAuth":"{provider} の OAuth を開始中…","settings.providers.oauthOpened":"OAuth ウィンドウを開きました。サインインフローを完了してから、このメッセージを閉じてください。","settings.providers.oauthStarted":"{provider} の OAuth フローを開始しました。チャットを確認してください。","settings.providers.loggingOut":"{provider} をログアウト中…","settings.providers.loggedOut":"{provider} をログアウトしました。再起動が必要な場合があります。","settings.general.identity":"アイデンティティ","settings.general.userLabel":"ユーザー","settings.general.yourName":"あなたの名前","settings.general.agentLabel":"エージェント","settings.general.agentName":"エージェント名","settings.general.notifications":"通知","settings.general.browserNotifications":"ブラウザ通知","settings.general.notifSecureHint":"入力バーの \uD83D\uDD14 ベルボタンで通知を有効/無効にします。Web Push には HTTPS または localhost が必要です。","settings.general.notifInsecureHint":"⚠ 利用不可 — セキュアコンテキスト（HTTPS または localhost）が必要です。SSH トンネルまたは TLS 付きリバースプロキシ経由でアクセスして有効化してください。","settings.general.display":"表示","settings.general.systemMeters":"システムメーター","settings.general.systemMetersHint":"ステータスバーの CPU/メモリ/ネットワークメーター。このブラウザのみ。","settings.general.instanceConfig":"インスタンス設定","settings.general.composeUpload":"作成アップロード（MB）","settings.general.composeUploadAria":"作成アップロード上限","settings.general.composeUploadHint":"チャット/メディア添付","settings.general.workspaceUpload":"ワークスペースアップロード（MB）","settings.general.workspaceUploadAria":"ワークスペースアップロード上限","settings.general.workspaceUploadHint":"デフォルトは 256 MB。チャンクアップロードは最大 1 GB まで許可","settings.general.authentication":"認証","settings.general.widgetToken":"ウィジェット bearer トークン","settings.general.token":"トークン","settings.general.hideToken":"トークンを隠す","settings.general.revealToken":"トークンを表示","settings.general.copyToken":"トークンをコピー","settings.general.copied":"コピーしました","settings.general.regenerating":"再生成中…","settings.general.regenerate":"再生成","settings.general.tokenHintPre":"次の読み取り専用トークン：","settings.general.tokenHintMid":"および","settings.general.tokenHintPost":"。次として使用：","settings.general.tokenHintEnd":"。","settings.general.copyFailed":"ウィジェットトークンをコピーできませんでした。トークンフィールドを選択して手動でコピーしてください。","settings.general.regenConfirm":"ウィジェットトークンを再生成しますか？古いトークンを使用している既存の macOS ウィジェットは更新されなくなります。","settings.general.totpTitle":"TOTP セットアップ QR","settings.general.totpConfiguredHint":"現在の Web ログイン認証システムのシークレット。この QR をスキャンして別の認証デバイスを追加します。","settings.general.totpUnconfiguredHint":"このインスタンスにはまだ TOTP が設定されていないため、セットアップ QR は利用できません。","settings.general.issuer":"発行者","settings.general.label":"ラベル","settings.general.secret":"シークレット","settings.general.avatarUpload":"クリックしてアップロード","menu.title":"メニュー","menu.showWorkspace":"ワークスペースを表示","menu.hideWorkspace":"ワークスペースを非表示","menu.openExplorer":"エクスプローラーを開く","menu.chatOnly":"チャットのみモード","menu.exitChatOnly":"チャットのみモードを終了","menu.openTerminal":"ターミナルをタブで開く","menu.openVnc":"VNC をタブで開く","menu.newFile":"新規ファイル","menu.openRecent":"最近のファイルを開く","menu.refreshTree":"ツリーを更新","menu.reindex":"ワークスペースを再インデックス","menu.showHidden":"隠しファイルを表示","menu.hideHidden":"隠しファイルを非表示","menu.scale":"拡大縮小","menu.settings":"設定"},au={en:Z_,"zh-CN":eu,ja:mu},Tn=Yn});function I_({children:n,className:r=""}){let[i,_]=y(null);return M(()=>{if(typeof document>"u")return;let c=document.createElement("div");return c.className=r||"",document.body.appendChild(c),_(c),()=>{try{Ln(null,c)}finally{c.remove()}}},[]),M(()=>{if(!i)return;i.className=r||"";return},[r,i]),jr(()=>{if(!i)return;Ln(n,i);return},[n,i]),null}var Y_=O(()=>{e()});function xi(n,r){let i=String(n.label||"").localeCompare(String(r.label||""),void 0,{sensitivity:"base"});if(i!==0)return i;return String(n.id||"").localeCompare(String(r.id||""),void 0,{sensitivity:"base"})}function Cn(n){let r=Gn.findIndex((i)=>i.id===n.id);if(r>=0)Gn[r]=n;else Gn.push(n);Gn.sort(xi)}function Gg(n){let r=Gn.findIndex((i)=>i.id===n);if(r>=0)Gn.splice(r,1)}function C_(){return[...Gn]}function Vg(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var Gn;var fr=O(()=>{Gn=[]});function Gr(n){let r=typeof n==="string"?n.trim():"";return r?r:null}function O_(n={}){if(typeof window>"u")return;let r=Gr(n.section);try{if(window.__piclawSettingsOpenRequested=!0,r)window.__piclawSettingsRequestedSection=r;else delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to record open request flags",i)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:r?{section:r}:void 0}))}function bi(){if(typeof window>"u")return null;return Gr(window.__piclawSettingsRequestedSection)}function J_(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),r=bi();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to clear open request flags",i)}return{open:n,section:r}}function S_(n=typeof window<"u"?window:null){return n||null}function Vr(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function or(n,r){return`${n}:${r}`}function d_(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function e_(n,r){if(n.length<=r)return;n.splice(0,n.length-r)}function Vn(n){if(!n||typeof n!=="object")return null;return{...n}}function Qn(n){if(!n)return null;return Nn.find((r)=>r.id===n)||null}function hi(n,r){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${r}`)}catch(i){console.debug("[app-perf] Ignoring performance.mark failure.",i,{traceId:n,phase:r})}}function m_(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let r=Qn(n);if(!r)return;for(let i of r.phases)performance.clearMarks(`piclaw:${n}:${i.phase}`)}catch(r){console.debug("[app-perf] Ignoring performance.clearMarks failure.",r,{traceId:n})}}function E_(n,r,i){let _=Xn.get(or(n,r));if(_&&Qn(_)?.status==="active")gr(_,"cancelled","superseded",{replacementType:n,replacementChatJid:r});let c=d_(n),u={id:c,type:n,chatJid:r,startedAt:Vr(),detail:Vn(i),phases:[],status:"active"};return Nn.push(u),e_(Nn,100),Xn.set(or(n,r),c),hi(c,"start"),c}function gr(n,r,i,_,c){let u=Qn(n);if(!u||u.status!=="active")return;if(i)u.phases.push({phase:i,at:Vr(),detail:Vn(_)}),hi(u.id,i);if(u.status=r,u.completedAt=Vr(),u.durationMs=u.completedAt-u.startedAt,c!==void 0)u.error=c instanceof Error?c.message:String(c);let f=or(u.type,u.chatJid);if(Xn.get(f)===u.id)Xn.delete(f);m_(u.id)}function gf(n=S_()){let r=n?.__PICLAW_PERF__;if(r)return r;if(n)n.__PICLAW_PERF__=Nr;return Nr}function On(n=S_()){return gf(n)}function Qg(n,r,i){return On().ensureTrace(n,r,i)}function Mg(n,r){return On().getActiveTraceId(n,r)}function qg(n,r,i){On().markTrace(n,r,i)}function Ag(n,r,i="settled",_){let c=Qn(n);if(!c||c.status!=="active")return!1;let u=new Set(c.phases.map((f)=>f.phase));if(!r.every((f)=>u.has(f)))return!1;return gr(n,"completed",i,_),!0}function Dg(n,r,i="failed",_){On().failTrace(n,r,i,_)}function Zg(n,r="cancelled",i){On().cancelTrace(n,r,i)}function vi(n){return On().recordRequest(n)}var Nn,sr,Xn,Nr;var a_=O(()=>{Nn=[],sr=[],Xn=new Map;Nr={startTrace(n,r,i){return E_(n,r,i)},ensureTrace(n,r,i){let _=Xn.get(or(n,r));if(_&&Qn(_)?.status==="active")return _;return E_(n,r,i)},getActiveTraceId(n,r){let i=Xn.get(or(n,r));return i&&Qn(i)?.status==="active"?i:null},markTrace(n,r,i){let _=Qn(n);if(!_||_.status!=="active")return;_.phases.push({phase:r,at:Vr(),detail:Vn(i)}),hi(_.id,r)},completeTrace(n,r="settled",i){gr(n,"completed",r,i)},failTrace(n,r,i="failed",_){gr(n,"failed",i,_,r)},cancelTrace(n,r="cancelled",i){gr(n,"cancelled",r,i)},recordRequest(n){let r=d_("req");return sr.push({...n,id:r,detail:Vn(n.detail)}),e_(sr,300),r},getTraces(){return Nn.map((n)=>({...n,detail:Vn(n.detail),phases:n.phases.map((r)=>({...r,detail:Vn(r.detail)}))}))},getRequests(){return sr.map((n)=>({...n,detail:Vn(n.detail)}))},clear(){Nn.forEach((n)=>m_(n.id)),Nn.splice(0,Nn.length),sr.splice(0,sr.length),Xn.clear()},printSummary(){let n={traces:Nr.getTraces(),requests:Nr.getRequests()};return console.table(n.traces.map((r)=>({id:r.id,type:r.type,chatJid:r.chatJid,status:r.status,durationMs:Number(r.durationMs||0).toFixed(1),lastPhase:r.phases[r.phases.length-1]?.phase||"start"}))),n}}});function Jn(n){let r=Number(n||0);return Number.isFinite(r)&&r>0?r:null}function of(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function $f(n){let r=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(r)}function nc(n){let r=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(r)}function rc(n=typeof window<"u"?window:null){let r=Jn(n?.innerWidth)??Jn(n?.screen?.availWidth)??Jn(n?.screen?.width)??0,i=Jn(n?.innerHeight)??Jn(n?.screen?.availHeight)??Jn(n?.screen?.height)??0,_=r&&i?Math.min(r,i):r||i,c=r&&i?Math.max(r,i):r||i,u=of(n),f=Number(n?.navigator?.maxTouchPoints||0),g=u||f>1;if(_>0&&_<=640)return"mobile";if($f(n)&&!nc(n))return"mobile";if(nc(n))return"tablet";if(g&&_>0&&_<=1100)return"tablet";if(c>0&&c<=1180&&_>0&&_<=900)return"tablet";return"desktop"}var H0={};un(H0,{uploadWorkspaceFile:()=>b0,uploadMedia:()=>Cf,updateWorkspaceFile:()=>o0,updateScheduledTask:()=>Bi,submitAdaptiveCardAction:()=>Jf,streamSidePrompt:()=>Ef,stopSessionRecording:()=>Hi,stopAutoresearch:()=>qf,steerAgentQueueItem:()=>Lf,startSessionRecording:()=>Fi,setWorkspaceVisibility:()=>K0,setAgentThoughtVisibility:()=>ef,sessionRecordingPlaybackUrl:()=>Ri,sessionRecordingExportUrl:()=>$r,sendPeerAgentMessage:()=>Pf,sendAgentMessage:()=>pn,searchPosts:()=>tf,saveWorkspaceSettings:()=>Vi,saveWebPushSubscription:()=>Gf,saveUiState:()=>Ui,saveQuickActionsSettings:()=>Gi,savePostAnnotations:()=>F0,saveEnvironmentOverride:()=>Qr,restoreChatBranch:()=>Uf,respondToAgentRequest:()=>Of,reorderAgentQueueItem:()=>If,renameWorkspaceFile:()=>v0,renameChatJid:()=>jf,renameChatBranch:()=>Ff,removeAgentQueueItem:()=>Zf,reindexWorkspace:()=>f0,purgeChatBranch:()=>Rf,pruneChatBranch:()=>Wf,previewSessionRecordingRedaction:()=>ji,moveWorkspaceEntry:()=>k0,mergeChatBranchIntoParent:()=>Hf,getWorkspaceTree:()=>_0,getWorkspaceRawUrl:()=>_c,getWorkspaceIndexStatus:()=>u0,getWorkspaceFileStat:()=>g0,getWorkspaceFileDownloadUrl:()=>B0,getWorkspaceFile:()=>s0,getWorkspaceDownloadUrl:()=>z0,getWorkspaceBranch:()=>c0,getWebPushPublicKey:()=>Tf,getTimeline:()=>wf,getThumbnailUrl:()=>af,getThread:()=>xf,getSystemMetrics:()=>bf,getSessionRecordings:()=>zi,getSessionRecording:()=>Xr,getScheduledTasks:()=>Ki,getQuickActionsSettings:()=>Ti,getPostsByHashtag:()=>yf,getMediaUrl:()=>mf,getMediaText:()=>r0,getMediaInfo:()=>n0,getMediaBlob:()=>i0,getEnvironmentSettings:()=>Ni,getChatBranches:()=>Kf,getAutoresearchStatus:()=>Mf,getAgents:()=>Nf,getAgentThought:()=>df,getAgentStatus:()=>Xf,getAgentQueueState:()=>Df,getAgentModels:()=>Xi,getAgentContext:()=>Qf,getAgentCommands:()=>Pi,getActiveChatAgents:()=>pf,forkChatBranch:()=>Bf,dismissAutoresearch:()=>Af,deleteWorkspaceFile:()=>p0,deleteWebPushSubscription:()=>Vf,deleteSessionRecording:()=>Wi,deletePost:()=>kf,createWorkspaceFile:()=>h0,createRootChatSession:()=>zf,createReply:()=>vf,createPost:()=>hf,completeInstanceOobe:()=>Yf,attachWorkspaceFile:()=>$0,addToWhitelist:()=>Sf,SSEClient:()=>cc});function kn(n,r={}){if(String(r.method||"GET").toUpperCase()!=="GET")return D(n,r);let _=ki.get(n);if(_)return _;let c=D(n,r).finally(()=>{ki.delete(n)});return ki.set(n,c),c}async function D(n,r={}){let i=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),_;try{_=await fetch(rn+n,{...r,headers:{"Content-Type":"application/json",...r.headers}})}catch(u){throw vi({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i,ok:!1,detail:{failedBeforeResponse:!0}}),u}let c=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i;if(vi({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:c,status:_.status,ok:_.ok,requestId:_.headers?.get?.("x-request-id")||null,serverTiming:_.headers?.get?.("Server-Timing")||null}),!_.ok){let u=await _.json().catch(()=>({error:"Unknown error"}));throw Error(u.error||`HTTP ${_.status}`)}return _.json()}function ic(n){let r=String(n||"").split(`
`),i="message",_=[];for(let u of r)if(u.startsWith("event:"))i=u.slice(6).trim()||"message";else if(u.startsWith("data:"))_.push(u.slice(5).trim());let c=_.join(`
`);if(!c)return null;try{return{event:i,data:JSON.parse(c)}}catch{return{event:i,data:c}}}async function lf(n,r){if(!n.body)throw Error("Missing event stream body");let i=n.body.getReader(),_=new TextDecoder,c="";while(!0){let{value:f,done:g}=await i.read();if(g)break;c+=_.decode(f,{stream:!0});let $=c.split(`

`);c=$.pop()||"";for(let o of $){let x=ic(o);if(x)r(x.event,x.data)}}c+=_.decode();let u=ic(c);if(u)r(u.event,u.data)}async function wf(n=10,r=null,i=null){let _=`/timeline?limit=${n}`;if(r)_+=`&before=${r}`;if(i)_+=`&chat_jid=${encodeURIComponent(i)}`;return kn(_)}async function yf(n,r=50,i=0,_=null){let c=_?`&chat_jid=${encodeURIComponent(_)}`:"";return D(`/hashtag/${encodeURIComponent(n)}?limit=${r}&offset=${i}${c}`)}async function tf(n,r=50,i=0,_=null,c="current",u=null,f=null){let g=_?`&chat_jid=${encodeURIComponent(_)}`:"",$=c?`&scope=${encodeURIComponent(c)}`:"",o=u?`&root_chat_jid=${encodeURIComponent(u)}`:"",x=f?.images?"&images=1":"",l=f?.attachments?"&attachments=1":"";return D(`/search?q=${encodeURIComponent(n)}&limit=${r}&offset=${i}${g}${$}${o}${x}${l}`)}async function xf(n,r=null){let i=r?`?chat_jid=${encodeURIComponent(r)}`:"";return D(`/thread/${n}${i}`)}async function bf(){return D("/agent/system-metrics")}async function Ki(n={}){let r=new URLSearchParams;if(n?.id)r.set("id",String(n.id));if(n?.chatJid)r.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")r.set("status",String(n.status));if(n?.limit)r.set("limit",String(n.limit));if(n?.includeRunLogs)r.set("include_run_logs","1");if(n?.runLogLimit)r.set("run_log_limit",String(n.runLogLimit));let i=r.toString()?`?${r.toString()}`:"";return D(`/agent/scheduled-tasks${i}`)}async function Bi(n,r,i={}){return D("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:r,allow_internal:i?.allowInternal===!0})})}async function zi(){return D("/agent/recordings")}async function Xr(n){return D(`/agent/recordings/${encodeURIComponent(n)}`)}async function Fi(n={}){return D("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function Hi(n={}){return D("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function Wi(n){return D(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function $r(n,r="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(r)}`}function Ri(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function ji(n,r={}){return D("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...r})})}async function Ui(n){return D("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function hf(n,r=[],i=null){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return D(`/post${_}`,{method:"POST",body:JSON.stringify({content:n,media_ids:r})})}async function vf(n,r,i=[],_=null){let c=_?`?chat_jid=${encodeURIComponent(_)}`:"";return D(`/post/reply${c}`,{method:"POST",body:JSON.stringify({thread_id:n,content:r,media_ids:i})})}async function kf(n,r=!1,i=null){let _=i?`&chat_jid=${encodeURIComponent(i)}`:"",c=`/post/${n}?cascade=${r?"true":"false"}${_}`;return D(c,{method:"DELETE"})}async function pn(n,r,i=null,_=[],c=null,u=null){let f=u?`?chat_jid=${encodeURIComponent(u)}`:"",g={content:r,thread_id:i,media_ids:_,client_context:{screen_hint:rc()}};if(c==="auto"||c==="queue"||c==="steer")g.mode=c;return D(`/agent/${n}/message${f}`,{method:"POST",body:JSON.stringify(g)})}async function Pi(n="web:default"){let r=typeof n==="string"&&n.trim()?n.trim():"web:default";return kn(`/agent/commands?chat_jid=${encodeURIComponent(r)}`)}async function Ti(){return D("/agent/settings/quick-actions")}async function Gi(n){return D("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function Vi(n){return D("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function Ni(){return D("/agent/settings/environment")}async function Qr(n){return D("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function pf(){return D("/agent/active-chats")}async function Kf(n=null,r={}){let i=new URLSearchParams;if(n)i.set("root_chat_jid",String(n));if(r?.includeArchived)i.set("include_archived","1");let _=i.toString()?`?${i.toString()}`:"";return kn(`/agent/branches${_}`)}async function Bf(n,r={}){return D("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...r?.agentName?{agent_name:r.agentName}:{}})})}async function zf(n){return D("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function Ff(n,r={}){return D("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Hf(n){return D("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Wf(n){return D("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Rf(n){return D("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function jf(n,r){return D("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:r})})}async function Uf(n,r={}){return D("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Pf(n,r,i,_="auto",c={}){let u={source_chat_jid:n,content:i,mode:_,...c?.sourceAgentName?{source_agent_name:c.sourceAgentName}:{},...c?.targetBy==="agent_name"?{target_agent_name:r}:{target_chat_jid:r}};return D("/agent/peer-message",{method:"POST",body:JSON.stringify(u)})}async function Tf(){return D("/agent/push/vapid-public-key")}async function Gf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return D("/agent/push/subscription",{method:"POST",body:JSON.stringify(i)})}async function Vf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return D("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(i)})}async function Nf(){return kn("/agent/roster")}async function Xf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return kn(`/agent/status${r}`)}async function Qf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return kn(`/agent/context${r}`)}async function Mf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return kn(`/agent/autoresearch/status${r}`)}async function qf(n=null,r={}){return D("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:r?.generateReport!==!1})})}async function Af(n=null){return D("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function Df(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return kn(`/agent/queue-state${r}`)}async function Zf(n,r=null){let i=await fetch(rn+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Lf(n,r=null){let i=await fetch(rn+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function If(n,r,i=null){let _=await fetch(rn+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Xi(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return kn(`/agent/models${r}`)}async function Yf(n="provider-ready"){return D("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function Cf(n){let r=new FormData;r.append("file",n);let i=await fetch(rn+"/media/upload",{method:"POST",body:r});if(!i.ok){let _=await i.json().catch(()=>({error:"Upload failed"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Of(n,r,i=null){let _=await fetch(rn+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to respond"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Jf(n){let r=await fetch(rn+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){let i=await r.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(i.error||`HTTP ${r.status}`)}return r.json()}async function Ef(n,r={}){let i=await fetch(rn+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:r.systemPrompt||void 0,chat_jid:r.chatJid||void 0}),signal:r.signal});if(!i.ok){let u=await i.json().catch(()=>({error:"Side prompt failed"}));throw Error(u.error||`HTTP ${i.status}`)}let _=null,c=null;if(await lf(i,(u,f)=>{if(r.onEvent?.(u,f),u==="side_prompt_thinking_delta")r.onThinkingDelta?.(f?.delta||"");else if(u==="side_prompt_text_delta")r.onTextDelta?.(f?.delta||"");else if(u==="side_prompt_done")_=f;else if(u==="side_prompt_error")c=f}),c){let u=Error(c?.error||"Side prompt failed");throw u.payload=c,u}return _}async function Sf(n,r){let i=await fetch(rn+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function df(n,r="thought"){let i=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(r)}`;return D(i)}async function ef(n,r,i){return D("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:r,expanded:Boolean(i)})})}function mf(n){return`${rn}/media/${n}`}function af(n){return`${rn}/media/${n}/thumbnail`}async function n0(n){let r=await fetch(`${rn}/media/${n}/info`);if(!r.ok)throw Error("Failed to get media info");return r.json()}async function r0(n){let r=await fetch(`${rn}/media/${n}`);if(!r.ok)throw Error("Failed to load media text");return r.text()}async function i0(n){let r=await fetch(`${rn}/media/${n}`);if(!r.ok)throw Error("Failed to load media blob");return r.blob()}async function _0(n="",r=2,i=!1){let _=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${r}&show_hidden=${i?"1":"0"}`;return D(_)}async function c0(n=""){let r=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return D(r)}async function u0(n="all"){let r=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return D(r)}async function f0(n="all"){return D("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function s0(n,r=20000,i=null){let _=i?`&mode=${encodeURIComponent(i)}`:"",c=`/workspace/file?path=${encodeURIComponent(n)}&max=${r}${_}`;return D(c)}async function g0(n){return D(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function o0(n,r){return D("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:r})})}async function $0(n){return D("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function w0(n,r="",i={}){let _=new URLSearchParams;if(r)_.set("path",r);if(i.overwrite)_.set("overwrite","1");let c=_.toString();return c?`${n}?${c}`:n}function y0(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function t0(n,r,i,_){return new Promise((c,u)=>{let f=new XMLHttpRequest;f.open("POST",rn+r);for(let[g,$]of Object.entries(i||{}))if($!==void 0&&$!==null)f.setRequestHeader(g,String($));f.upload.onprogress=(g)=>{if(typeof _==="function")_({loaded:g.lengthComputable?g.loaded:0,total:g.lengthComputable?g.total:n.size,lengthComputable:g.lengthComputable})},f.onload=()=>{try{let g=f.responseText?JSON.parse(f.responseText):{};if(f.status>=200&&f.status<300)c(g);else{let $=Error(g.error||`HTTP ${f.status}`);$.status=f.status,$.code=g.code,u($)}}catch{let g=Error(`HTTP ${f.status}`);g.status=f.status,u(g)}},f.onerror=()=>u(Error("Upload failed (network error)")),f.ontimeout=()=>u(Error("Upload timed out")),f.send(n)})}async function x0(n,r="",i={}){let _=y0(),c=w0("/workspace/upload-chunk",r,i),u=Math.max(1,Math.min(pi,Number(i.chunkSize)||l0)),f=Math.max(0,Number(n?.size)||0),g=Math.max(1,Math.ceil(f/u)),$=0,o=null;for(let x=0;x<g;x+=1){let l=x*u,b=Math.min(f,l+u),h=n.slice(l,b),k=h.size;if(o=await t0(h,c,{"X-Upload-Id":_,"X-Chunk-Index":x,"X-Chunk-Total":g,"X-File-Name":n?.name||"upload.bin","X-File-Size":f},(p)=>{if(typeof i.onProgress!=="function")return;let B=Math.min(f,$+(p?.loaded||0)),t=f||1;i.onProgress({loaded:B,total:t,percent:Math.round(B/t*100),chunkIndex:x,chunkTotal:g})}),$+=k,typeof i.onProgress==="function"){let p=f||1,B=f?$:p;i.onProgress({loaded:B,total:p,percent:Math.round(B/p*100),chunkIndex:x+1,chunkTotal:g})}}return o}async function b0(n,r="",i={}){if(n?.size>pi){let _=(n.size/1048576).toFixed(0),c=(pi/1048576).toFixed(0),u=Error(`File too large (${_} MB). Maximum upload size is ${c} MB.`);throw u.code="file_too_large",u}return await x0(n,r,i)}async function h0(n,r,i=""){let _=await fetch(rn+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r,content:i})});if(!_.ok){let c=await _.json().catch(()=>({error:"Create failed"})),u=Error(c.error||`HTTP ${_.status}`);throw u.status=_.status,u.code=c.code,u}return _.json()}async function v0(n,r){let i=await fetch(rn+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Rename failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function k0(n,r){let i=await fetch(rn+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Move failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function p0(n){let r=`/workspace/file?path=${encodeURIComponent(n||"")}`;return D(r,{method:"DELETE"})}async function K0(n,r=!1){return D("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(r)})})}function _c(n,r={}){let i=new URLSearchParams({path:String(n||"")});if(r.download)i.set("download","1");return`${rn}/workspace/raw?${i.toString()}`}function B0(n){return _c(n,{download:!0})}function z0(n,r=!1){let i=`path=${encodeURIComponent(n||"")}&show_hidden=${r?"1":"0"}`;return`${rn}/workspace/download?${i}`}class cc{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,r,i={}){this.onEvent=n,this.onStatusChange=r,this.chatJid=typeof i?.chatJid==="string"&&i.chatJid.trim()?i.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(rn+"/sse/stream"+n);let r=(i)=>{this.eventSource.addEventListener(i,(_)=>{this.markActivity(),this.onEvent(i,JSON.parse(_.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),r("new_post"),r("new_reply"),r("agent_response"),r("interaction_updated"),r("interaction_deleted"),r("agent_status"),r("agent_steer_queued"),r("agent_followup_queued"),r("agent_followup_consumed"),r("agent_followup_removed"),r("workspace_update"),r("agent_draft"),r("agent_draft_delta"),r("agent_thought"),r("agent_thought_delta"),r("model_changed"),r("ui_theme"),r("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(r)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,r=60000,i=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,i+r),this.reconnectAttempts=0;let _=Math.max(this.cooldownUntil-i,0),c=Math.max(this.reconnectDelay,_);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},c),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}async function F0(n,r,i){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return D(`/post/${n}/annotations${_}`,{method:"PATCH",body:JSON.stringify({annotations:r})})}var rn="",ki,pi=1073741824,l0=8388608;var Kn=O(()=>{a_();ki=new Map});function R0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(qr,{detail:{enabled:Boolean(n)}}))}function sc(n){if(typeof fetch!=="function")return;Ui({ui_meters:n}).catch((r)=>{console.debug("[meters] Failed to persist meters UI state.",r)})}function j0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(W0,{detail:{collapsed:Boolean(n)}}))}function Qi(n=!1){return li(uc,n)}function Eg(n=!1){return li(fc,n)}function Mr(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)sn(uc,c?"true":"false");if(_)sc({enabled:c});return R0(c),c}function U0(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)sn(fc,c?"true":"false");if(_)sc({collapsed:c});return j0(c),c}function Sg(n){let r=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")Mr(Boolean(n.enabled),{persistServer:!1});else if(r==="toggle"){let i=!Qi(!1);Mr(i,{persistServer:!1})}if(typeof n?.collapsed==="boolean")U0(Boolean(n.collapsed),{persistServer:!1})}var uc="piclaw_system_meters_enabled",fc="piclaw_system_meters_collapsed",qr="piclaw-meters-change",W0="piclaw-meters-collapsed-change";var gc=O(()=>{Kn()});function oc(n,r){if(n===""||n===null||n===void 0)return r;let i=Number(n);return Number.isFinite(i)?i:r}function $c(n,{min:r=-1/0,max:i=1/0}={}){let _=Number.isFinite(Number(r))?Number(r):-1/0,c=Number.isFinite(Number(i))?Number(i):1/0;return Math.min(c,Math.max(_,Number(n)))}function En(n,{fallback:r=0,min:i=-1/0,max:_=1/0}={}){let c=oc(n,r);return $c(c,{min:i,max:_})}function P0(n,{direction:r=1,step:i=1,fallback:_=0,min:c=-1/0,max:u=1/0}={}){let f=En(n,{fallback:_,min:c,max:u}),g=Math.abs(oc(i,1))||1,$=Number(r)<0?-1:1;return $c(f+$*g,{min:c,max:u})}function nn({value:n,min:r,max:i,step:_=1,fallback:c,width:u="80px",disabled:f=!1,label:g,onChange:$}){let o=Number.isFinite(Number(c))?Number(c):En(n,{fallback:0,min:r,max:i}),[x,l]=y(String(n??o)),b=C(!1);M(()=>{if(!b.current)l(String(n??o))},[n,o]);let h=j((p)=>{b.current=!1;let B=En(p,{fallback:o,min:r,max:i});l(String(B)),$?.(B)},[o,r,i,$]),k=j((p)=>{b.current=!1;let B=P0(n,{direction:p,step:_,fallback:o,min:r,max:i});l(String(B)),$?.(B)},[o,i,r,$,_,n]);return s`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${g||"value"}`}
                title=${`Decrease ${g||"value"}`}
                disabled=${f}
                onClick=${()=>k(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${x}
                disabled=${f}
                style=${`width:${u}`}
                onInput=${(p)=>{b.current=!0,l(p.target.value)}}
                onBlur=${(p)=>h(p.target.value)}
                onKeyDown=${(p)=>{if(p.key==="Enter")p.preventDefault(),h(p.target.value),p.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${g||"value"}`}
                title=${`Increase ${g||"value"}`}
                disabled=${f}
                onClick=${()=>k(1)}
            >+</button>
        </span>
    `}var Sn=O(()=>{e()});function lc(n){let r=String(n||"").trim();if(!r)return"";if(r.startsWith("http://")||r.startsWith("https://")||r.startsWith("data:")||r.startsWith("blob:"))return r;if(r.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(r.slice(11))}`;if(r.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(r))return"";if(r.startsWith("\\\\"))return"";if(r.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(r.replace(/^\.\//,""))}`}function wc({value:n,onChange:r}){let{t:i}=J(),_=C(null),[c,u]=y(lc(n));M(()=>{u(lc(n))},[n]);let f=j((g)=>{let $=g.target.files?.[0];if(!$)return;let o=new FileReader;o.onload=()=>{let x=o.result;u(x),r?.(x)},o.readAsDataURL($)},[r]);return s`
        <div class="settings-avatar-inline" onClick=${()=>_.current?.click()} title=${i("settings.general.avatarUpload")}>
            ${c?s`<img src=${c} alt="avatar" />`:s`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${_} style="display:none" onChange=${f} />
        </div>
    `}function yc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function T0(n,r={}){let i=typeof n==="string"?n:"";if(!i)return!1;let _=r.navigator??(typeof navigator<"u"?navigator:null),c=r.document??(typeof document<"u"?document:null);if(_?.clipboard?.writeText)try{return await _.clipboard.writeText(i),!0}catch(u){}try{if(!c?.body||typeof c.createElement!=="function"||typeof c.execCommand!=="function")return!1;let u=c.createElement("textarea");u.value=i,u.setAttribute?.("readonly",""),u.style.position="fixed",u.style.left="-9999px",u.style.top="0",u.style.opacity="0",c.body.appendChild(u),u.focus?.(),u.select?.();let f=Boolean(c.execCommand("copy"));return c.body.removeChild(u),f}catch(u){return!1}}function Mi({settingsData:n,setStatus:r,mergeSettingsData:i}){let{t:_}=J(),[c,u]=y(""),[f,g]=y(""),[$,o]=y(""),[x,l]=y(""),[b,h]=y(32),[k,p]=y(256),[B,t]=y(""),[v,G]=y(!1),[U,H]=y(!1),[P,K]=y(!1),[T,w]=y(()=>Qi(!1)),[z,q]=y(!1),W=C(""),V=C(null),Z=C(!0);M(()=>{return Z.current=!0,()=>{Z.current=!1}},[]);let F=j((X)=>{let Q=yc(X);u(Q.userName),g(Q.userAvatar),o(Q.assistantName),l(Q.assistantAvatar),h(Q.composeUploadLimitMb),p(Q.workspaceUploadLimitMb),t(X?.widgetToken||""),W.current=JSON.stringify(Q)},[]);M(()=>{F(n||{})},[n,F]),M(()=>{let X=(Q)=>{w(Boolean(Q?.detail?.enabled))};return window.addEventListener(qr,X),()=>window.removeEventListener(qr,X)},[]);let A=Y(()=>JSON.stringify(yc({userName:c,userAvatar:f,assistantName:$,assistantAvatar:x,composeUploadLimitMb:b,workspaceUploadLimitMb:k})),[c,f,$,x,b,k]);M(()=>{if(A===W.current)return;if(V.current)clearTimeout(V.current);return V.current=setTimeout(async()=>{if(!Z.current)return;let X=document.activeElement;if(X&&X.closest?.(".settings-number-stepper"))return;try{let Q=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:A}),gn=await Q.json().catch(()=>({}));if(!Z.current)return;if(!Q.ok||!gn?.ok||!gn?.settings)return;W.current=A,i?.(gn.settings),q(!0),setTimeout(()=>{if(Z.current)q(!1)},4000)}catch(Q){console.warn("[settings/general] Failed to persist general settings snapshot.",Q)}},800),()=>{if(V.current)clearTimeout(V.current)}},[A,i]);let I=n?.instanceTotp||{configured:!1,issuer:$||"Piclaw",label:c?`${$||"Piclaw"}:${c}`:$||"Piclaw",secret:"",otpauth:"",qrSvg:""},E=j(async()=>{if(!B)return;if(await T0(B))H(!0),setTimeout(()=>{if(Z.current)H(!1)},3000);else r?.(_("settings.general.copyFailed")),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[B,r]),_n=j(async()=>{if(P)return;if(!confirm(_("settings.general.regenConfirm")))return;K(!0);try{let X=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),Q=await X.json().catch(()=>({}));if(!X.ok||!Q?.ok||!Q?.settings)throw Error(Q?.error||"Failed to regenerate widget token.");t(Q.settings.widgetToken||""),i?.(Q.settings),q(!0),setTimeout(()=>{if(Z.current)q(!1)},4000)}catch(X){console.warn("[settings/general] Failed to regenerate widget token.",X)}finally{if(Z.current)K(!1)}},[P,i]),$n=typeof window<"u"&&window.isSecureContext,tn=B?"•".repeat(Math.min(Math.max(B.length,16),48)):"—",Fn=v?B||"—":tn;return s`
        <div class="settings-section">
            ${z&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.appliedNotice")}
                </div>
            `}
            <h3>${_("settings.general.identity")}</h3>
            <div class="settings-row">
                <label>${_("settings.general.userLabel")}</label>
                <${wc} value=${f} onChange=${g} />
                <input type="text" value=${c} onInput=${(X)=>u(X.target.value)} placeholder=${_("settings.general.yourName")} />
            </div>
            <div class="settings-row">
                <label>${_("settings.general.agentLabel")}</label>
                <${wc} value=${x} onChange=${l} />
                <input type="text" value=${$} onInput=${(X)=>o(X.target.value)} placeholder=${_("settings.general.agentName")} />
            </div>

            <h3 style="margin-top:20px">${_("settings.general.notifications")}</h3>
            ${$n?s`
                <div class="settings-row">
                    <label>${_("settings.general.browserNotifications")}</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            ${_("settings.general.notifSecureHint")}
                        </span>
                    </div>
                </div>
            `:s`
                <div class="settings-row">
                    <label>${_("settings.general.browserNotifications")}</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0; color: var(--error-color, #e55)">
                            ${_("settings.general.notifInsecureHint")}
                        </span>
                    </div>
                </div>
            `}

            <h3 style="margin-top:20px">${_("settings.general.display")}</h3>
            <div class="settings-row">
                <label>${_("settings.general.systemMeters")}</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${T}
                        onChange=${()=>{let X=Mr(!T);w(X)}} />
                    <span class="settings-hint" style="margin:0">${_("settings.general.systemMetersHint")}</span>
                </div>
            </div>

            <h3 style="margin-top:20px">${_("settings.general.instanceConfig")}</h3>
            <div class="settings-row">
                <label>${_("settings.general.composeUpload")}</label>
                <${nn}
                    label=${_("settings.general.composeUploadAria")}
                    value=${b}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${h}
                />
                <span class="settings-hint" style="margin:0">${_("settings.general.composeUploadHint")}</span>
            </div>
            <div class="settings-row">
                <label>${_("settings.general.workspaceUpload")}</label>
                <${nn}
                    label=${_("settings.general.workspaceUploadAria")}
                    value=${k}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${p}
                />
                <span class="settings-hint" style="margin:0">${_("settings.general.workspaceUploadHint")}</span>
            </div>

            <h3 style="margin-top:20px">${_("settings.general.authentication")}</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>${_("settings.general.widgetToken")}</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">${_("settings.general.token")}</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${Fn}</code>
                        <button class=${`settings-keychain-reveal-btn${v?" active":""}`}
                            type="button"
                            onClick=${()=>G((X)=>!X)}
                            disabled=${!B}
                            title=${v?_("settings.general.hideToken"):_("settings.general.revealToken")}>
                            ${v?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${E} disabled=${!B} title=${_("settings.general.copyToken")}>
                            ${U?s`<span class="settings-widget-token-copied">${_("settings.general.copied")}</span>`:s`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${_n} disabled=${P}>${P?_("settings.general.regenerating"):_("settings.general.regenerate")}</button>
                    </div>
                </div>
                <span class="settings-hint" style="margin:6px 0 0 0;">
                    ${_("settings.general.tokenHintPre")} <code>GET /api/state</code> ${_("settings.general.tokenHintMid")} <code>GET /api/state/events</code>${_("settings.general.tokenHintPost")} <code>Authorization: Bearer …</code>${_("settings.general.tokenHintEnd")}
                </span>
            </div>
            <div class="settings-totp-panel">
                <div class="settings-totp-header">
                    <div>
                        <strong>${_("settings.general.totpTitle")}</strong>
                        <div class="settings-hint" style="margin:6px 0 0 0;">
                            ${I.configured?_("settings.general.totpConfiguredHint"):_("settings.general.totpUnconfiguredHint")}
                        </div>
                    </div>
                </div>
                ${I.configured?s`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:I.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>${_("settings.general.issuer")}</label>
                                <input type="text" readonly value=${I.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>${_("settings.general.label")}</label>
                                <input type="text" readonly value=${I.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>${_("settings.general.secret")}</label>
                                <input type="text" readonly value=${I.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var tc=O(()=>{e();gc();Sn();on()});var bc={};un(bc,{SessionsSection:()=>G0});function xc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function G0({settingsData:n,setStatus:r,mergeSettingsData:i}){let{t:_}=J(),[c,u]=y(!0),[f,g]=y(16),[$,o]=y(4000),[x,l]=y(3),[b,h]=y(64),[k,p]=y("none"),[B,t]=y(!1),v=C(""),G=C(null),U=C(!0);M(()=>{return U.current=!0,()=>{U.current=!1}},[]);let H=j((K)=>{let T=xc(K);u(T.sessionAutoRotate),g(T.sessionMaxSizeMb),o(T.sessionMaxLines),l(T.sessionMaxCompactions),h(T.toolUseBudget),p(T.sessionIsolation),v.current=JSON.stringify(T)},[]);M(()=>{H(n||{})},[n,H]);let P=Y(()=>JSON.stringify(xc({sessionAutoRotate:c,sessionMaxSizeMb:f,sessionMaxLines:$,sessionMaxCompactions:x,toolUseBudget:b,sessionIsolation:k})),[c,f,$,x,b,k]);return M(()=>{if(P===v.current)return;if(G.current)clearTimeout(G.current);return G.current=setTimeout(async()=>{if(!U.current)return;let K=document.activeElement;if(K&&K.closest?.(".settings-number-stepper"))return;try{let T=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:P}),w=await T.json().catch(()=>({}));if(!U.current)return;if(!T.ok||!w?.ok||!w?.settings)return;v.current=P,i?.(w.settings),t(!0),setTimeout(()=>{if(U.current)t(!1)},4000)}catch(T){console.warn("[settings/sessions] Failed to persist session settings.",T)}},800),()=>{if(G.current)clearTimeout(G.current)}},[P,i]),s`
        <div class="settings-section">
            ${B&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.appliedNotice")}
                </div>
            `}
            <h3>${_("settings.sessions.lifecycle")}</h3>
            <div class="settings-row">
                <label>${_("settings.sessions.autoRotate")}</label>
                <input type="checkbox" checked=${c} onChange=${(K)=>u(K.target.checked)} />
            </div>
            <div class="settings-row">
                <label>${_("settings.sessions.maxSize")}</label>
                <${nn}
                    label=${_("settings.sessions.maxSizeAria")}
                    value=${f}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${g}
                />
            </div>

            <h3 style="margin-top:20px">${_("settings.sessions.agentBehaviour")}</h3>
            <div class="settings-row">
                <label>${_("settings.sessions.toolBudget")}</label>
                <${nn}
                    label=${_("settings.sessions.toolBudgetAria")}
                    value=${b}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${h}
                />
                <span class="settings-hint" style="margin:0">${_("settings.sessions.toolBudgetHint")}</span>
            </div>
            <div class="settings-row">
                <label>${_("settings.sessions.isolation")}</label>
                <select value=${k} onChange=${(K)=>p(K.target.value)}>
                    <option value="none">${_("settings.sessions.isolationNone")}</option>
                    <option value="summary">${_("settings.sessions.isolationSummary")}</option>
                    <option value="full">${_("settings.sessions.isolationFull")}</option>
                </select>
            </div>
        </div>
    `}var hc=O(()=>{e();Sn();on()});var vc={};un(vc,{__recordingsSettingsTest:()=>Q0,RecordingsSection:()=>X0});function Dr(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function qi(n){if(n==="full")return"full / trusted";if(n==="metadata")return"metadata only";return"redacted"}function Ar({children:n,type:r="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function V0(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function lr(n){return String(n||"").split(`
`).map((r)=>r.trim()).filter(Boolean)}function N0({recording:n,details:r,onDelete:i,onRefresh:_}){if(!n)return s`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let c=r?.meta||n,u=Array.isArray(r?.events)?r.events:[],f=u.reduce(($,o)=>$+(Array.isArray(o.redactions)?o.redactions.length:0),0),g=u.reduce(($,o)=>{let x=o.kind||"event";return $[x]=($[x]||0)+1,$},{});return s`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${c.title||c.id}</h4>
                    <code>${c.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(Ri(c.id),"_blank","noopener,noreferrer")}>Playback</button>
                    <button onClick=${_}>Refresh</button>
                    <button class="danger" onClick=${()=>i(c)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${c.status||"—"}</strong>
                <span>Mode</span><strong>${qi(c.mode)}</strong>
                <span>Chat</span><code>${c.chatJid||"—"}</code>
                <span>Started</span><strong>${Dr(c.startedAt)}</strong>
                <span>Ended</span><strong>${Dr(c.endedAt)}</strong>
                <span>Events</span><strong>${c.eventCount??u.length}</strong>
                <span>Redactions</span><strong>${f}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${$r(c.id,"json")}>Export JSON</a>
                <a href=${$r(c.id,"jsonl")}>Export JSONL</a>
                <a href=${$r(c.id,"html")}>Export standalone HTML</a>
            </div>
            <h4>Event summary</h4>
            ${u.length===0&&s`<p class="settings-hint">Open or refresh details to inspect trace events.</p>`}
            ${u.length>0&&s`
                <div class="settings-recording-event-summary">
                    ${Object.entries(g).map(([$,o])=>s`<${Ar}>${$}: ${o}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(u.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function X0({filter:n="",setStatus:r}){let[i,_]=y([]),[c,u]=y([]),[f,g]=y(!0),[$,o]=y(null),[x,l]=y(null),[b,h]=y(null),[k,p]=y(!1),[B,t]=y(V0),[v,G]=y(""),[U,H]=y("redacted"),[P,K]=y(!0),[T,w]=y(""),[z,q]=y(""),[W,V]=y('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[Z,F]=y(null);M(()=>{let N=(m)=>{let fn=String(m?.detail?.chatJid||"").trim();if(fn)t(fn)};return window.addEventListener("piclaw:current-chat-changed",N),()=>window.removeEventListener("piclaw:current-chat-changed",N)},[]);let A=j(async(N=x)=>{g(!0),o(null);try{let m=await zi(),fn=m.recordings||[];_(fn),u(m.active||[]);let Hn=fn.find((R)=>R.id===N)||fn[0]||null;if(l(Hn?.id||null),Hn?.id)h(await Xr(Hn.id));else h(null)}catch(m){o(m?.message||"Failed to load recordings.")}finally{g(!1)}},[x]);M(()=>{A()},[A]);let I=Y(()=>i.find((N)=>N.id===x)||null,[i,x]),E=Y(()=>c.find((N)=>N.chatJid===B)||null,[c,B]),_n=String(n||"").trim().toLowerCase(),$n=Y(()=>{if(!_n)return i;return i.filter((N)=>[N.id,N.title,N.chatJid,N.status,N.mode].some((m)=>String(m||"").toLowerCase().includes(_n)))},[i,_n]),tn=j(async(N)=>{if(l(N?.id||null),h(null),!N?.id)return;try{h(await Xr(N.id))}catch(m){r?.(m?.message||"Failed to load recording.","error")}},[r]),Fn=j(async()=>{if(k)return;p(!0);try{let N={keys:lr(T),patterns:lr(z)},m=await Fi({chat_jid:B,title:v||void 0,mode:U,include_timeline_snapshot:P,timeline_snapshot_limit:80,redaction:N});r?.(`Recording started for ${B}.`,"success"),await A(m?.recording?.id)}catch(N){r?.(N?.message||"Failed to start recording.","error")}finally{p(!1)}},[k,B,T,z,P,A,U,r,v]),X=j(async(N=E)=>{if(!N||k)return;p(!0);try{let m=await Hi({id:N.id});r?.(`Recording stopped for ${N.chatJid}.`,"success"),await A(m?.recording?.id)}catch(m){r?.(m?.message||"Failed to stop recording.","error")}finally{p(!1)}},[k,E,A,r]),Q=j(async(N)=>{if(!N||k)return;if(!window.confirm(`Delete recording ${N.id}?

${N.title||""}`))return;p(!0);try{await Wi(N.id),r?.("Recording deleted.","success"),await A(null)}catch(m){r?.(m?.message||"Failed to delete recording.","error")}finally{p(!1)}},[k,A,r]),gn=j(async()=>{try{let N=JSON.parse(W||"null"),m=await ji(N,{mode:U,redaction:{keys:lr(T),patterns:lr(z)}});F(m.preview)}catch(N){F({error:N?.message||"Preview failed."})}},[T,z,U,W]);return s`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${B} onInput=${(N)=>t(N.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${v} onInput=${(N)=>G(N.target.value)} /></label>
                    <label>Mode<select value=${U} onChange=${(N)=>H(N.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${P} onChange=${(N)=>K(N.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${T} onInput=${(N)=>w(N.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${z} onInput=${(N)=>q(N.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${E?s`<button onClick=${()=>X(E)} disabled=${k}>Stop current chat recording</button>`:s`<button onClick=${Fn} disabled=${k}>Start recording</button>`}
                    <button onClick=${()=>A()} disabled=${f}>Refresh</button>
                </div>
                ${c.length>0&&s`<div class="settings-recording-active-row">${c.map((N)=>s`<${Ar} type="active">REC ${N.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${W} onInput=${(N)=>V(N.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${gn}>Preview redaction</button></div>
                ${Z&&s`<pre>${JSON.stringify(Z,null,2)}</pre>`}
            </details>

            ${f&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${$&&s`<div class="settings-error-state">${$}</div>`}
            ${!f&&!$&&i.length===0&&s`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!f&&!$&&i.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${$n.map((N)=>s`
                            <button class=${`settings-task-row ${N.id===x?"active":""}`} onClick=${()=>tn(N)}>
                                <span class="settings-task-row-main"><strong>${N.title||N.id}</strong><span>${N.chatJid} · ${Dr(N.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${Ar} type=${N.status==="recording"?"active":"completed"}>${N.status}<//><${Ar}>${qi(N.mode)}<//></span>
                                <span class="settings-task-row-times">${N.eventCount||0} events</span>
                            </button>
                        `)}
                        ${$n.length===0&&s`<p class="settings-hint">No recordings match “${n}”.</p>`}
                    </div>
                    <${N0} recording=${I} details=${b} onDelete=${Q} onRefresh=${()=>I&&tn(I)} />
                </div>
            `}
        </div>
    `}var Q0;var kc=O(()=>{e();Kn();Q0={formatDateTime:Dr,modeLabel:qi,parseList:lr}});var pc={};un(pc,{CompactionSection:()=>q0});function M0(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),toolResultSemanticSummaryEnabled:Boolean(n.toolResultSemanticSummaryEnabled??!0),toolResultSemanticSummaryMaxInputChars:n.toolResultSemanticSummaryMaxInputChars??12000,toolResultSemanticSummaryMaxTokens:n.toolResultSemanticSummaryMaxTokens??320,toolResultSemanticSummaryTimeoutSec:n.toolResultSemanticSummaryTimeoutSec??12,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function Ai(n){let r=String(n||"").trim();if(!r)return"—";let i=new Date(r);if(Number.isNaN(i.getTime()))return r;return i.toLocaleString()}function q0({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=y(180),[u,f]=y(15),[g,$]=y(360),[o,x]=y(75),[l,b]=y(0.5),[h,k]=y(!0),[p,B]=y(!0),[t,v]=y(12000),[G,U]=y(320),[H,P]=y(12),[K,T]=y(!1),[w,z]=y(120),[q,W]=y([]),[V,Z]=y([]),[F,A]=y(!1),I=C(""),E=C(null),_n=C(!0);M(()=>{return _n.current=!0,()=>{_n.current=!1}},[]);let $n=j((X)=>{let Q=M0(X);c(Q.compactionTimeoutSec),f(Q.compactionBackoffBaseMin),$(Q.compactionBackoffMaxMin),x(Q.compactionThresholdPercent),b(Q.compactionBackoffDecayFactor),k(Q.toolResultCompactionEnabled),B(Q.toolResultSemanticSummaryEnabled),v(Q.toolResultSemanticSummaryMaxInputChars),U(Q.toolResultSemanticSummaryMaxTokens),P(Q.toolResultSemanticSummaryTimeoutSec),T(Q.progressWatchdogEnabled),z(Q.progressWatchdogTimeoutSec),W(Q.compactionBackoffs),Z(Q.progressWatchdogPhases),I.current=JSON.stringify({compactionTimeoutSec:Q.compactionTimeoutSec,compactionBackoffBaseMin:Q.compactionBackoffBaseMin,compactionBackoffMaxMin:Q.compactionBackoffMaxMin,compactionThresholdPercent:Q.compactionThresholdPercent,compactionBackoffDecayFactor:Q.compactionBackoffDecayFactor,toolResultCompactionEnabled:Q.toolResultCompactionEnabled,toolResultSemanticSummaryEnabled:Q.toolResultSemanticSummaryEnabled,toolResultSemanticSummaryMaxInputChars:Q.toolResultSemanticSummaryMaxInputChars,toolResultSemanticSummaryMaxTokens:Q.toolResultSemanticSummaryMaxTokens,toolResultSemanticSummaryTimeoutSec:Q.toolResultSemanticSummaryTimeoutSec,progressWatchdogEnabled:Q.progressWatchdogEnabled,progressWatchdogTimeoutSec:Q.progressWatchdogTimeoutSec})},[]);M(()=>{$n(n||{})},[n,$n]);let tn=Y(()=>JSON.stringify({compactionTimeoutSec:_,compactionBackoffBaseMin:u,compactionBackoffMaxMin:g,compactionThresholdPercent:o,compactionBackoffDecayFactor:l,toolResultCompactionEnabled:h,toolResultSemanticSummaryEnabled:p,toolResultSemanticSummaryMaxInputChars:t,toolResultSemanticSummaryMaxTokens:G,toolResultSemanticSummaryTimeoutSec:H,progressWatchdogEnabled:K,progressWatchdogTimeoutSec:w}),[_,u,g,o,l,h,p,t,G,H,K,w]);M(()=>{if(tn===I.current)return;if(E.current)clearTimeout(E.current);return E.current=setTimeout(async()=>{if(!_n.current)return;try{r?.("Saving compaction settings…","info");let X=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:tn}),Q=await X.json().catch(()=>({}));if(!_n.current)return;if(!X.ok||!Q?.ok||!Q?.settings){r?.(Q?.error||"Failed to save compaction settings.","error");return}I.current=tn,i?.(Q.settings),$n({...n||{},...Q.settings||{}}),r?.("Compaction settings saved.","success"),A(!0),setTimeout(()=>{if(_n.current)A(!1),r?.(null)},4000)}catch(X){if(console.warn("[settings/compaction] Failed to persist compaction settings.",X),_n.current)r?.("Failed to save compaction settings.","error")}},800),()=>{if(E.current)clearTimeout(E.current)}},[tn,i,r,$n,n]);let Fn=j(async(X)=>{try{r?.(`Clearing compaction suppression for ${X}…`,"info");let Q=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:X})}),gn=await Q.json().catch(()=>({}));if(!Q.ok||!gn?.ok||!gn?.settings){r?.(gn?.error||"Failed to clear compaction suppression.","error");return}i?.(gn.settings),$n({...n||{},...gn.settings||{}}),r?.(`Cleared compaction suppression for ${X}.`,"success")}catch(Q){console.warn("[settings/compaction] Failed to clear compaction suppression.",Q),r?.("Failed to clear compaction suppression.","error")}},[$n,i,r,n]);return s`
        <div class="settings-section">
            ${F&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Enable tool-result compaction</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${h} onChange=${(X)=>k(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">When disabled, large tool results stay inline and are not externalized into searchable tool-output handles.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summaries for compacted tool results</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${p} onChange=${(X)=>B(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">When enabled, compacted outputs include a semantic summary generated with the active model (preview fallback on failure).</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summary input limit (chars)</label>
                <${nn}
                    label="semantic summary input limit"
                    value=${t}
                    min=${500}
                    max=${200000}
                    fallback=${12000}
                    width="100px"
                    disabled=${!p}
                    onChange=${v}
                />
                <span class="settings-hint" style="margin:0">Maximum characters sampled from full tool output for semantic summarization.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary output max tokens</label>
                <${nn}
                    label="semantic summary max tokens"
                    value=${G}
                    min=${64}
                    max=${4096}
                    fallback=${320}
                    width="90px"
                    disabled=${!p}
                    onChange=${U}
                />
                <span class="settings-hint" style="margin:0">Upper bound for generated summary length.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary timeout (sec)</label>
                <${nn}
                    label="semantic summary timeout"
                    value=${H}
                    min=${1}
                    max=${300}
                    fallback=${12}
                    width="90px"
                    disabled=${!p}
                    onChange=${P}
                />
                <span class="settings-hint" style="margin:0">Abort semantic summary generation after this timeout and fall back to preview compaction.</span>
            </div>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${nn}
                    label="compaction threshold"
                    value=${o}
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
                    value=${_}
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
                    value=${g}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${$}
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
                    onChange=${(X)=>b(X/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${K} onChange=${(X)=>T(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${nn}
                    label="watchdog timeout"
                    value=${w}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!K}
                    onChange=${z}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${q.length===0?s`
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
                            ${q.map((X)=>s`
                                <tr>
                                    <td><code>${X.chatJid}</code></td>
                                    <td>${X.failureCount}</td>
                                    <td>${Ai(X.backoffUntil)}</td>
                                    <td title=${X.lastErrorMessage||""}>${X.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>Fn(X.chatJid)}>
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
            ${V.length===0?s`
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
                            ${V.map((X)=>s`
                                <tr>
                                    <td><code>${X.chatJid}</code></td>
                                    <td>${X.phase}</td>
                                    <td>${Ai(X.startedAt)}</td>
                                    <td>${Ai(X.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var Kc=O(()=>{e();Sn()});function zc(n){let r=String(n||"").trim().toLowerCase();if(!r)return null;let i=Z0[r]||r;if(/^f(?:[1-9]|1[0-2])$/.test(i))return i;if(L0.has(i))return i;if(i.length===1)return i;if(/^[a-z0-9]+$/.test(i))return i;return null}function dn(n){let r=String(n||"").trim();if(!r)return null;let i=r.split("+").map((u)=>u.trim()).filter(Boolean);if(!i.length)return null;let _={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let u of i){let f=u.toLowerCase(),g=D0[f];if(g){_[g]=!0;continue}if(_.key)return null;let $=zc(u);if(!$||$==="escape")return null;_.key=$}if(!_.key)return null;let c=[];if(_.ctrl)c.push("ctrl");if(_.meta)c.push("meta");if(_.alt)c.push("alt");if(_.shift)c.push("shift");return c.push(_.key),c.join("+")}function Fc(n){return String(n||"").split(/[\n,]/).map((r)=>dn(r)).filter((r)=>Boolean(r))}function Un(n){return n.join(", ")}function Zi(){let n=M_(Bc);if(!n||typeof n!=="object")return{};let r={};for(let i of wr){let _=n[i.id];if(!Array.isArray(_))continue;let c=_.map((u)=>dn(String(u||""))).filter((u)=>Boolean(u));r[i.id]=[...new Set(c)]}return r}function Di(n){if(sn(Bc,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function Hc(n){return A0.get(n)}function yr(n){let r=Zi()[n];if(Array.isArray(r))return r;return[...Hc(n).defaultBindings]}function Wc(n,r){let i=Zi(),_=Hc(n).defaultBindings,c=[...new Set(r.map((u)=>dn(u)).filter((u)=>Boolean(u)))];if(c.length===_.length&&c.every((u,f)=>u===_[f]))delete i[n];else i[n]=c;Di(i)}function Li(n){if(!n){Di({});return}let r=Zi();delete r[n],Di(r)}function Zr(){let n={};for(let r of wr)n[r.id]=yr(r.id);return n}function I0(n){let r=typeof n==="string"?n:"";if(!r)return"";if(r.length===1)return r.toLowerCase();return zc(r)||r.toLowerCase()}function Y0(n){let r=dn(n);if(!r)return null;let i={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let _ of r.split("+")){if(_==="ctrl"||_==="meta"||_==="alt"||_==="shift"){i[_]=!0;continue}i.key=_}return i.key?i:null}function C0(n,r){let i=Y0(r);if(!i)return!1;if(I0(n?.key)!==i.key)return!1;let c=!i.shift&&i.key.length===1&&/[^a-z0-9]/i.test(i.key);return Boolean(n?.ctrlKey)===i.ctrl&&Boolean(n?.metaKey)===i.meta&&Boolean(n?.altKey)===i.alt&&(c||Boolean(n?.shiftKey)===i.shift)}function wo(n,r){return yr(r).some((i)=>C0(n,i))}var Bc="piclaw_keyboard_shortcuts_v1",wr,A0,D0,Z0,L0;var Rc=O(()=>{wr=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],A0=new Map(wr.map((n)=>[n.id,n])),D0={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},Z0={esc:"escape",return:"enter",spacebar:"space"},L0=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var jc={};un(jc,{KeyboardSection:()=>J0});function O0(n,r,i){let _=String(n||"").trim().toLowerCase();if(!_)return!0;return[r.label,r.description,i,...r.defaultBindings||[]].some((c)=>String(c||"").toLowerCase().includes(_))}function J0({filter:n="",setStatus:r}){let{t:i}=J(),[_,c]=y(()=>{let o=Zr();return Object.fromEntries(Object.entries(o).map(([x,l])=>[x,Un(l)]))});M(()=>{let o=()=>{let x=Zr();c(Object.fromEntries(Object.entries(x).map(([l,b])=>[l,Un(b)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",o),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",o)},[]);let u=Y(()=>wr.filter((o)=>{let x=String(_[o.id]||"");return O0(n,o,x)}),[_,n]),f=(o)=>{let x=String(_[o]||"").trim(),b=(x?x.split(/[\n,]/).map((k)=>k.trim()).filter(Boolean):[]).filter((k)=>!dn(k));if(b.length>0){r?.(i("settings.keyboard.invalidShortcut",{token:b[0]}),"error");return}let h=Fc(x);Wc(o,h),c((k)=>({...k,[o]:Un(yr(o))})),r?.(i("settings.keyboard.saved"),"success")},g=(o)=>{Li(o),c((x)=>({...x,[o]:Un(yr(o))})),r?.(i("settings.keyboard.resetOne"),"success")},$=()=>{Li();let o=Zr();c(Object.fromEntries(Object.entries(o).map(([x,l])=>[x,Un(l)]))),r?.(i("settings.keyboard.resetAllDone"),"success")};return s`
        <div class="settings-section">
            <h3>${i("settings.keyboard.heading")}</h3>
            <p class="settings-hint">
                ${i("settings.keyboard.hint1")}
                <code>Escape</code> ${i("settings.keyboard.hint1b")}
            </p>
            <p class="settings-hint">
                <code>/help</code> ${i("settings.keyboard.hint2mid")} <code>"</code> ${i("settings.keyboard.hint2end")}
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:18px; justify-content:flex-end;">
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${$}>${i("settings.keyboard.resetAll")}</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${u.map((o)=>s`
                    <div class="settings-shortcut-card" key=${o.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${o.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${o.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">${i("settings.keyboard.defaultColon")} <code style="font-size:13px;">${Un(o.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${_[o.id]||""}
                                placeholder=${Un(o.defaultBindings)}
                                onInput=${(x)=>c((l)=>({...l,[o.id]:x.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>f(o.id)}>${i("settings.keyboard.save")}</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>g(o.id)}>${i("settings.keyboard.defaultBtn")}</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${u.length===0&&s`<div class="settings-hint">${i("settings.keyboard.noMatch")}</div>`}
            </div>
        </div>
    `}var Uc=O(()=>{e();Rc();on()});function Gc(n,r=Ii){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(300,Math.max(15,Math.round(i)))}function Vc(n,r=Yi){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(8,Math.max(0,Math.round(i)))}function Ci(){return{refreshIntervalSec:Gc(wi(Pc,Ii),Ii),folderPreviewDepth:Vc(wi(Tc,Yi),Yi)}}function Nc(n={}){let r=Ci(),i={refreshIntervalSec:Gc(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:r.refreshIntervalSec,r.refreshIntervalSec),folderPreviewDepth:Vc(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:r.folderPreviewDepth,r.folderPreviewDepth)};if(sn(Pc,String(i.refreshIntervalSec)),sn(Tc,String(i.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(E0,{detail:{settings:i}}));return i}var E0="piclaw:workspace-client-settings-updated",Pc="workspaceRefreshIntervalSec",Tc="workspaceFolderPreviewDepth",Ii=60,Yi=3;var Xc=()=>{};var Mc={};un(Mc,{WorkspaceSection:()=>S0});function Qc(n={}){let r=n.workspaceSettings||{};return{webTerminalEnabled:r.webTerminalEnabled!==!1,vncAllowDirect:r.vncAllowDirect!==!1,treeMaxDepth:r.treeMaxDepth??4,treeMaxEntries:r.treeMaxEntries??5000}}function S0({settingsData:n,setStatus:r,mergeSettingsData:i}){let{t:_}=J(),[c,u]=y(!0),[f,g]=y(!0),[$,o]=y(4),[x,l]=y(5000),[b,h]=y(60),[k,p]=y(3),[B,t]=y(!1),[v,G]=y(!1),U=C(""),H=C(null),P=C(null),K=C(null),T=C(!0);M(()=>{return T.current=!0,()=>{if(T.current=!1,H.current)clearTimeout(H.current);if(P.current)clearTimeout(P.current);if(K.current)clearTimeout(K.current)}},[]);let w=j((W)=>{let V=Qc(W),Z=Ci();u(V.webTerminalEnabled),g(V.vncAllowDirect),o(V.treeMaxDepth),l(V.treeMaxEntries),h(Z.refreshIntervalSec),p(Z.folderPreviewDepth),U.current=JSON.stringify(V)},[]);M(()=>{w(n||{})},[n,w]);let z=Y(()=>JSON.stringify(Qc({workspaceSettings:{webTerminalEnabled:c,vncAllowDirect:f,treeMaxDepth:$,treeMaxEntries:x}})),[c,f,$,x]);M(()=>{if(z===U.current)return;if(H.current)clearTimeout(H.current);return H.current=setTimeout(async()=>{if(!T.current)return;let W=document.activeElement;if(W&&W.closest?.(".settings-number-stepper"))return;try{let V=await Vi(JSON.parse(z));if(!T.current||!V?.ok||!V?.settings)return;if(U.current=z,i?.({workspaceSettings:V.settings}),r?.(null),t(!0),P.current)clearTimeout(P.current);P.current=setTimeout(()=>{if(T.current)t(!1)},4000)}catch(V){r?.(String(V?.message||V),"error")}},800),()=>{if(H.current)clearTimeout(H.current)}},[z,i,r]);let q=j((W)=>{let V=Nc(W);if(h(V.refreshIntervalSec),p(V.folderPreviewDepth),G(!0),K.current)clearTimeout(K.current);K.current=setTimeout(()=>{if(T.current)G(!1)},3000)},[]);return s`
        <div class="settings-section">
            ${B&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.workspace.serverApplied")}
                </div>
            `}
            ${v&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.workspace.browserApplied")}
                </div>
            `}

            <h3>${_("settings.workspace.access")}</h3>
            <div class="settings-row">
                <label>${_("settings.workspace.enableTerminal")}</label>
                <input type="checkbox" checked=${c} onChange=${(W)=>u(W.target.checked)} />
            </div>
            <div class="settings-row">
                <label>${_("settings.workspace.allowVnc")}</label>
                <input type="checkbox" checked=${f} onChange=${(W)=>g(W.target.checked)} />
            </div>
            <p class="settings-hint">${_("settings.workspace.accessHint")}</p>

            <h3 style="margin-top:20px">${_("settings.workspace.guardrails")}</h3>
            <div class="settings-row">
                <label>${_("settings.workspace.maxDepth")}</label>
                <${nn}
                    label=${_("settings.workspace.maxDepthAria")}
                    value=${$}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${o}
                />
                <span class="settings-hint" style="margin:0">${_("settings.workspace.maxDepthHintPre")} <code>/workspace/tree</code> ${_("settings.workspace.maxDepthHintPost")}</span>
            </div>
            <div class="settings-row">
                <label>${_("settings.workspace.maxEntries")}</label>
                <${nn}
                    label=${_("settings.workspace.maxEntriesAria")}
                    value=${x}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${l}
                />
                <span class="settings-hint" style="margin:0">${_("settings.workspace.maxEntriesHint")}</span>
            </div>

            <h3 style="margin-top:20px">${_("settings.workspace.thisBrowser")}</h3>
            <div class="settings-row">
                <label>${_("settings.workspace.refreshInterval")}</label>
                <${nn}
                    label=${_("settings.workspace.refreshIntervalAria")}
                    value=${b}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(W)=>q({refreshIntervalSec:W})}
                />
            </div>
            <div class="settings-row">
                <label>${_("settings.workspace.folderDepth")}</label>
                <${nn}
                    label=${_("settings.workspace.folderDepthAria")}
                    value=${k}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(W)=>q({folderPreviewDepth:W})}
                />
                <span class="settings-hint" style="margin:0">${_("settings.workspace.folderDepthHintPre")} <code>0</code> ${_("settings.workspace.folderDepthHintPost")}</span>
            </div>
            <p class="settings-hint">${_("settings.workspace.footerHint")}</p>
        </div>
    `}var qc=O(()=>{e();Kn();Xc();Sn();on()});var Ac={};un(Ac,{EnvironmentSection:()=>d0});function Oi(n={}){let r=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(r.variables)?r.variables:[],overrides:r.overrides&&typeof r.overrides==="object"?r.overrides:{},count:Number(r.count||0),overrideCount:Number(r.overrideCount||0),keychainEnvNames:Array.isArray(r.keychainEnvNames)?r.keychainEnvNames:[]}}function d0({settingsData:n,filter:r="",setStatus:i,mergeSettingsData:_}){let{t:c}=J(),[u,f]=y(()=>Oi(n||{})),[g,$]=y({}),[o,x]=y(""),[l,b]=y(""),[h,k]=y(null);M(()=>{f(Oi(n||{})),$({})},[n]);let p=j((H)=>{let P=Oi({environmentSettings:H?.settings||H});return f(P),_?.({environmentSettings:P}),$({}),P},[_]),B=j(async()=>{try{let H=await Ni();if(H?.ok)p(H.settings);i?.(c("settings.environment.refreshedToast"),"info")}catch(H){i?.(String(H?.message||H),"error")}},[p,i]),t=j(async(H,P)=>{let K=String(H||"").trim();if(!K)return;k(K);try{let T=await Qr({action:"set",name:K,value:String(P??"")});if(T?.ok)p(T.settings);if(i?.(c("settings.environment.savedToast",{name:K}),"info"),K===o.trim())x(""),b("")}catch(T){i?.(String(T?.message||T),"error")}finally{k(null)}},[p,o,i]),v=j(async(H)=>{let P=String(H||"").trim();if(!P)return;k(P);try{let K=await Qr({action:"clear",name:P});if(K?.ok)p(K.settings);i?.(c("settings.environment.clearedToast",{name:P}),"info")}catch(K){i?.(String(K?.message||K),"error")}finally{k(null)}},[p,i]),G=Y(()=>{let H=String(r||"").trim().toLowerCase(),P=Array.isArray(u.variables)?u.variables:[];if(!H)return P;return P.filter((K)=>{return`${K?.name||""} ${K?.value||""} ${K?.source||""}`.toLowerCase().includes(H)})},[u.variables,r]),U=j((H,P)=>{$((K)=>({...K||{},[H]:P}))},[]);return s`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">${c("settings.environment.heading")}</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        ${c("settings.environment.introPre")} <code>process.env</code>${c("settings.environment.introPost")}
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${B}>${c("settings.environment.refresh")}</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>${c("settings.environment.addOverride")}</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${o}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(H)=>x(H.target.value)}
                    />
                    <input
                        type="text"
                        value=${l}
                        placeholder=${c("settings.environment.valuePlaceholder")}
                        spellcheck="false"
                        onInput=${(H)=>b(H.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!o.trim()||h===o.trim()}
                        onClick=${()=>t(o,l)}
                    >${c("settings.environment.save")}</button>
                </div>
            </div>

            <p class="settings-hint">
                ${c("settings.environment.countLine",{count:u.count,overrides:u.overrideCount,keychain:u.keychainEnvNames.length})}
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${G.map((H)=>{let P=String(H?.name||""),K=Object.prototype.hasOwnProperty.call(g,P)?g[P]:H.value,T=K!==H.value,w=h===P;return s`
                        <div class="settings-tool-row" key=${P} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${P}>${P}</span>
                            <input
                                type="text"
                                value=${K}
                                spellcheck="false"
                                onInput=${(z)=>U(P,z.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${H.overridden?c("settings.environment.overridden"):c("settings.environment.inherited")}>
                                ${H.overridden?c("settings.environment.kindOverride"):c("settings.environment.kindProcess")}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${w||!T} onClick=${()=>t(P,K)}>${c("settings.environment.save")}</button>
                                <button type="button" disabled=${w||!H.overridden} onClick=${()=>v(P)}>${c("settings.environment.clear")}</button>
                            </span>
                        </div>
                    `})}
                ${G.length===0&&s`<p class="settings-hint">${c("settings.environment.noMatch",{filter:r})}</p>`}
            </div>
        </div>
    `}var Dc=O(()=>{e();Kn();on()});var Zc={};un(Zc,{ProvidersSection:()=>m0});function e0(n){switch(n){case"oauth":return"OAuth";case"api_key":return Tr("settings.providers.authApiKey");case"custom":return Tr("settings.providers.authConfigured");default:return Tr("settings.providers.authConfigured")}}function m0({providers:n,setStatus:r}){let{t:i}=J(),[_,c]=y(null),[u,f]=y(null),[g,$]=y({}),o=j((t,v)=>{$((G)=>({...G,[t]:v}))},[]),x=j(async(t)=>{let v=(g.apiKey||"").trim();if(!v){r?.(i("settings.providers.apiKeyEmpty"),"error");return}c(t),r?.(i("settings.providers.configuringToast",{provider:t}),"info");try{let G=JSON.stringify({provider:t,method:"api_key",api_key:v}),U=await pn("default",`/login __step2 ${G}`,null,[]);if(U?.command?.status==="error"){r?.(U.command.message,"error");return}r?.(U?.command?.message||i("settings.providers.configured",{provider:t}),"success"),f(null),$({})}catch(G){r?.(String(G.message||G),"error")}finally{c(null)}},[g,r]),l=j(async(t,v)=>{c(t),r?.(i("settings.providers.configuringToast",{provider:t}),"info");try{let G={provider:t,method:"custom"};for(let P of v.customFields||[])G[P.key]=(g[P.key]||"").trim();let U=JSON.stringify(G),H=await pn("default",`/login __step2 ${U}`,null,[]);if(H?.command?.status==="error"){r?.(H.command.message,"error");return}r?.(H?.command?.message||i("settings.providers.configured",{provider:t}),"success"),f(null),$({})}catch(G){r?.(String(G.message||G),"error")}finally{c(null)}},[g,r]),b=j(async(t)=>{c(t),r?.(i("settings.providers.startingOAuth",{provider:t}),"info");try{let v=JSON.stringify({provider:t}),U=(await pn("default",`/login __step1 ${v}`,null,[]))?.command?.message||"";if(U.includes("http")){let H=U.match(/(https?:\/\/[^\s)]+)/);if(H)window.open(H[1],"_blank","noopener"),r?.(i("settings.providers.oauthOpened"),"success");else r?.(U,"success")}else r?.(U||i("settings.providers.oauthStarted",{provider:t}),"success")}catch(v){r?.(String(v.message||v),"error")}finally{c(null)}},[r]),h=j(async(t)=>{if(_)return;c(t),r?.(i("settings.providers.loggingOut",{provider:t}),"info");try{await pn("default",`/logout ${t}`,null,[]),r?.(i("settings.providers.loggedOut",{provider:t}),"success")}catch(v){r?.(String(v.message||v),"error")}finally{c(null)}},[_,r]),k=n||[],p=(t)=>u===t,B=(t)=>{f((v)=>v===t?null:t),$({})};return s`
        <div class="settings-section">
            <h3>${i("settings.providers.heading")}</h3>
            <div class="settings-provider-list">
                ${k.map((t)=>s`
                    <div class=${`settings-provider-card${t.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!t.configured&&B(t.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${t.name}</strong>
                                <span class="settings-provider-id">${t.id}</span>
                                ${t.configured&&s`<span class="settings-tag settings-tag-skill">${e0(t.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${t.hasOAuth&&s`<span class="settings-tag">OAuth</span>`}
                                ${t.hasApiKey&&s`<span class="settings-tag">API Key</span>`}
                                ${t.isCustom&&s`<span class="settings-tag">${i("settings.providers.tagCustom")}</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${t.configured?s`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${_===t.id} onClick=${(v)=>{v.stopPropagation(),h(t.id)}}
                                    >${_===t.id?"…":i("settings.providers.logout")}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${_===t.id} onClick=${(v)=>{v.stopPropagation(),B(t.id)}}
                                    >${i("settings.providers.reconfigure")}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${_===t.id} onClick=${(v)=>{v.stopPropagation(),B(t.id)}}
                                    >${i("settings.providers.setUp")}</button>
                                `}
                            </div>
                        </div>

                        ${p(t.id)&&s`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">${i("settings.providers.setupHint")}</p>
                                ${t.hasOAuth&&s`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${_===t.id}
                                            onClick=${()=>b(t.id)}>
                                            ${_===t.id?i("settings.providers.starting"):i("settings.providers.signInOAuth")}
                                        </button>
                                    </div>
                                `}
                                ${t.hasApiKey&&s`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>${i("settings.providers.apiKeyLabel")}</label>
                                            <input type="password" value=${g.apiKey||""}
                                                onInput=${(v)=>o("apiKey",v.target.value)}
                                                placeholder=${t.apiKeyHint||i("settings.providers.apiKeyPlaceholder")} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${_===t.id||!(g.apiKey||"").trim()}
                                                onClick=${()=>x(t.id)}>
                                                ${_===t.id?"…":i("settings.providers.save")}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${t.isCustom&&s`
                                    <div class="settings-provider-method">
                                        ${(t.customFields||[]).map((v)=>s`
                                            <div class="settings-provider-field-row">
                                                <label>${v.label}${v.required?" *":""}</label>
                                                <input type="text" value=${g[v.key]||""}
                                                    onInput=${(G)=>o(v.key,G.target.value)}
                                                    placeholder=${v.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${_===t.id}
                                                onClick=${()=>l(t.id,t)}>
                                                ${_===t.id?i("settings.providers.configuring"):i("settings.providers.saveConfig")}
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
    `}var Lc=O(()=>{e();Kn();on()});var Ic={};un(Ic,{ModelsSection:()=>_s});function rs(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function is({thinkingLevel:n,supportsThinking:r,provider:i,availableLevels:_,onSetLevel:c,disabled:u}){let{t:f}=J(),g=rs(i)?a0:ns,$=_&&_.length>1?_:["off","minimal","low","medium","high"],o=Math.max(0,$.indexOf(n??"off"));if(!r)return s`<div class="settings-thinking-slider"><label>${f("settings.models.thinkingLevel")}</label><p class="settings-hint" style="margin:4px 0 0">${f("settings.models.noThinking")}</p></div>`;return s`
        <div class="settings-thinking-slider">
            <label>${f("settings.models.thinkingLevelLabel")} <strong>${g[$[o]]||$[o]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${$.length-1} step="1" value=${o} disabled=${u}
                    onInput=${(x)=>c($[parseInt(x.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${$.map((x,l)=>s`<span class=${l===o?"active":""} onClick=${()=>!u&&c(x)}>${g[x]||x}</span>`)}
                </div>
            </div>
        </div>
    `}function _s({filter:n=""}){let{t:r}=J(),[i,_]=y(null),[c,u]=y(!1),[f,g]=y("off"),[$,o]=y(!1),[x,l]=y(["off"]),[b,h]=y(!1),[k,p]=y(!1),[B,t]=y(!1),v=j(async()=>{let W=await Xi();if(_(W),W.thinking_level)g(W.thinking_level);if(o(Boolean(W.supports_thinking)),h(Boolean(W.scoped_models_only)),Array.isArray(W.available_thinking_levels)&&W.available_thinking_levels.length>0)l(W.available_thinking_levels);return W},[]);M(()=>{v().catch((W)=>{console.warn("[settings/models] Failed to load models.",W),_({models:[],model_options:[]})})},[]);let G=j(async(W)=>{if(c)return;u(!0);try{await pn("default",`/model ${W}`,null,[]),await v()}catch(V){console.error("Failed to switch model:",V)}finally{u(!1)}},[c,v]),U=j(async(W)=>{if(k)return;p(!0),h(Boolean(W));try{let V=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scopedModelsOnly:Boolean(W)})}),Z=await V.json().catch(()=>({}));if(!V.ok||!Z?.ok)throw Error(Z?.error||"Failed to save scoped model setting.");await v()}catch(V){console.error("Failed to set scoped model filtering:",V),await v().catch((Z)=>{console.warn("[settings/models] Reload after scoped model filtering failure failed.",Z)})}finally{p(!1)}},[k,v]),H=j(async(W)=>{if(B)return;t(!0),g(W);try{let V=await pn("default",`/thinking ${W}`,null,[]);if(V?.command?.thinking_level)g(V.command.thinking_level);o(V?.command?.supports_thinking!==!1),await v()}catch(V){console.error("Failed to set thinking:",V),await v().catch((Z)=>{console.warn("[settings/models] Reload after thinking change failure failed.",Z)})}finally{t(!1)}},[B,v]);if(!i)return s`<div class="settings-loading">${r("settings.models.loading")}</div>`;let P=i.model_options||[],K=i.current,w=P.find((W)=>W.label===K)?.provider||"",z=n.toLowerCase(),q=z?P.filter((W)=>W.label.toLowerCase().includes(z)||(W.provider||"").toLowerCase().includes(z)):P;return s`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">${r("settings.models.summary")}</div>
            <div class="settings-row" style="padding:0 0 10px 0; align-items:flex-start">
                <label>${r("settings.models.scopedOnly")}</label>
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0">
                    <label style="display:flex; align-items:center; gap:8px; font-weight:500">
                        <input type="checkbox" checked=${b} disabled=${k} onChange=${(W)=>U(W.target.checked)} />
                        ${r("settings.models.scopedCheckboxPre")} <code>enabledModels</code> ${r("settings.models.scopedCheckboxPost")}
                    </label>
                    <span class="settings-hint" style="margin:0">
                        ${r("settings.models.scopedHintPre")} <code>list_models</code> ${r("settings.models.scopedHintPost")}
                    </span>
                </div>
            </div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>${r("settings.models.colModel")}</th><th>${r("settings.models.colProvider")}</th><th>${r("settings.models.colContext")}</th><th style="text-align:center">${r("settings.models.colReasoning")}</th></tr></thead>
                    <tbody>
                        ${q.map((W)=>s`
                            <tr class=${W.label===K?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${W.label===K} disabled=${c} onChange=${()=>G(W.label)} /></td>
                                <td>${W.name||W.label}</td><td>${W.provider}</td>
                                <td>${W.context_window?(W.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${W.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${q.length===0&&s`<tr><td colspan="5" class="settings-empty">${r("settings.models.noMatch",{filter:n})}</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${is}
                    thinkingLevel=${f}
                    supportsThinking=${$}
                    provider=${w}
                    availableLevels=${x}
                    onSetLevel=${H}
                    disabled=${B||c} />
            </div>
        </div>
    `}var a0,ns;var Yc=O(()=>{e();Kn();on();a0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},ns={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function Si(n){let r=String(n||"").trim().toLowerCase();if(!r)return"default";if(r==="solarized-dark"||r==="solarized-light")return"solarized";if(r==="github-dark"||r==="github-light")return"github";if(r==="tokyo-night")return"tokyo";return r}function Ec(n){if(!n)return null;let r=String(n).trim();if(!r)return null;let i=r.startsWith("#")?r.slice(1):r;if(!/^[0-9a-fA-F]{3}$/.test(i)&&!/^[0-9a-fA-F]{6}$/.test(i))return null;let _=i.length===3?i.split("").map((u)=>u+u).join(""):i,c=parseInt(_,16);return{r:c>>16&255,g:c>>8&255,b:c&255,hex:`#${_.toLowerCase()}`}}function us(n,r){try{if(document.body){n.style.display="none",document.body.appendChild(n);let i=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),i}}catch{return r}return r}function fs(n){if(!n||typeof document>"u")return null;let r=String(n).trim();if(!r)return null;let i=document.createElement("div");if(i.style.color="",i.style.color=r,!i.style.color)return null;let c=us(i,i.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!c)return null;let u=parseInt(c[1],10),f=parseInt(c[2],10),g=parseInt(c[3],10);if(![u,f,g].every((o)=>Number.isFinite(o)))return null;let $=`#${[u,f,g].map((o)=>o.toString(16).padStart(2,"0")).join("")}`;return{r:u,g:f,b:g,hex:$}}function Mn(n){return Ec(n)||fs(n)}function di(n,r,i){let _=Math.round(n.r+(r.r-n.r)*i),c=Math.round(n.g+(r.g-n.g)*i),u=Math.round(n.b+(r.b-n.b)*i);return`rgb(${_} ${c} ${u})`}function Lr(n,r){return`rgba(${n.r}, ${n.g}, ${n.b}, ${r})`}function ss(n){let r=n.r/255,i=n.g/255,_=n.b/255,c=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4),u=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),f=_<=0.03928?_/12.92:Math.pow((_+0.055)/1.055,2.4);return 0.2126*c+0.7152*u+0.0722*f}function gs(n){return ss(n)>0.4?"#000000":"#ffffff"}function Sc(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function ei(n){return Cc[n]||Cc.default}function os(n){return n.mode==="auto"?Sc():n.mode}function dc(n,r){let i=ei(n);if(r==="dark"&&i.dark)return i.dark;if(r==="light"&&i.light)return i.light;return i.dark||i.light||zn}function Bn(n,r,i){let _=Mn(n);if(!_)return n;return di(_,r,i)}function ec(n,r,i){let _=Mn(r);if(!_)return n;let u=Ec(i==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:Bn(n.bgPrimary,_,0.08),bgSecondary:Bn(n.bgSecondary,_,0.12),bgHover:Bn(n.bgHover,_,0.16),textPrimary:Bn(n.textPrimary,_,i==="dark"?0.08:0.06),textSecondary:Bn(n.textSecondary,_,i==="dark"?0.12:0.1),borderColor:Bn(n.borderColor,_,0.1),accent:_.hex,accentHover:u?di(_,u,0.18):_.hex,warning:Bn(n.warning||zn.warning,_,0.14),danger:Bn(n.danger,_,0.16),success:Bn(n.success,_,0.16)}}function $s(n,r){let i=Mn(n?.warning);if(i)return i.hex;let _=Mn(r==="dark"?Cr.warning:zn.warning)||Mn(zn.warning),c=Mn(n?.accent);if(_&&c)return di(_,c,r==="dark"?0.18:0.14);return r==="dark"?Cr.warning:zn.warning}function ls(n,r){if(typeof document>"u")return;let i=document.documentElement,_=n.accent,c=Mn(_),u=c?Lr(c,r==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,f=c?Lr(c,r==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",g=c?Lr(c,r==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",$=c?gs(c):r==="dark"?"#000000":"#ffffff",o=c?Lr(c,r==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",x=$s(n,r),l={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":_,"--accent-hover":n.accentHover||_,"--accent-color-alpha":o,"--accent-soft":f,"--accent-soft-strong":g,"--accent-contrast-text":$,"--warning-color":x,"--danger-color":n.danger||zn.danger,"--success-color":n.success||zn.success,"--search-highlight-color":u||"rgba(29, 155, 240, 0.2)"};Object.entries(l).forEach(([b,h])=>{if(h)i.style.setProperty(b,h)})}function ws(){if(typeof document>"u")return;let n=document.documentElement;cs.forEach((r)=>n.style.removeProperty(r))}function en(n,r={}){if(typeof document>"u")return null;let i=typeof r.id==="string"&&r.id.trim()?r.id.trim():null,_=i?document.getElementById(i):document.querySelector(`meta[name="${n}"]`);if(!_)_=document.createElement("meta"),document.head.appendChild(_);if(_.setAttribute("name",n),i)_.setAttribute("id",i);return _}function Oc(n){let r=Si(qn?.theme||"default"),i=qn?.tint?String(qn.tint).trim():null,_=dc(r,n);if(r==="default"&&i)_=ec(_,i,n);if(_?.bgPrimary)return _.bgPrimary;return n==="dark"?Cr.bgPrimary:zn.bgPrimary}function ys(n,r){if(typeof document>"u")return;let i=en("theme-color",{id:"dynamic-theme-color"});if(i&&n)i.removeAttribute("media"),i.setAttribute("content",n);let _=en("theme-color",{id:"theme-color-light"});if(_)_.setAttribute("media","(prefers-color-scheme: light)"),_.setAttribute("content",Oc("light"));let c=en("theme-color",{id:"theme-color-dark"});if(c)c.setAttribute("media","(prefers-color-scheme: dark)"),c.setAttribute("content",Oc("dark"));let u=en("msapplication-TileColor");if(u&&n)u.setAttribute("content",n);let f=en("msapplication-navbutton-color");if(f&&n)f.setAttribute("content",n);let g=en("apple-mobile-web-app-status-bar-style");if(g)g.setAttribute("content",r==="dark"?"black-translucent":"default")}function ts(){if(typeof window>"u")return;let n={...qn,mode:Jc};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function xs(){if(typeof window>"u")return"web:default";try{let r=new URL(window.location.href).searchParams.get("chat_jid");return r&&r.trim()?r.trim():"web:default"}catch{return"web:default"}}function bs(n){if(typeof document>"u"||!n)return;let r=document.documentElement;if(r?.style)r.style.background=n;if(document.body?.style)document.body.style.background=n}function mi(n,r={}){if(typeof window>"u"||typeof document>"u")return;let i=Si(n?.theme||"default"),_=n?.tint?String(n.tint).trim():null,c=ei(i),u=os(c),f=dc(i,u);qn={theme:i,tint:_},Jc=u;let g=document.documentElement;g.dataset.theme=u,g.dataset.colorTheme=i,g.dataset.tint=_?String(_):"",g.style.colorScheme=u;let $=f;if(i==="default"&&_)$=ec(f,_,u);if(i==="default"&&!_)ws();else ls($,u);if(bs($.bgPrimary),ys($.bgPrimary,u),ts(),r.persist!==!1)if(sn(Ei,i),_)sn(Yr,_);else sn(Yr,"")}function Ir(){if(ei(qn.theme).mode!=="auto")return;mi(qn,{persist:!1})}function hs(){if(typeof window>"u")return;let n=Si(jn(Ei)||"default"),r=(()=>{let i=jn(Yr);return i?i.trim():null})();mi({theme:n,tint:r},{persist:!1})}function No(){if(typeof window>"u")return()=>{};if(hs(),window.matchMedia&&!Ji){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Ir);else if(n.addListener)n.addListener(Ir);return Ji=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Ir);else if(n.removeListener)n.removeListener(Ir);Ji=!1}}return()=>{}}function ai(n){if(!n||typeof n!=="object")return;let r=xs(),i=n.chat_jid||n.chatJid||null,_=n.theme??n.name??n.colorTheme,c=n.tint??null;if(!i||i===r)mi({theme:_||"default",tint:c},{persist:!1});sn(Ei,_||"default"),sn(Yr,c||"")}function Xo(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return Sc()}var Ei="piclaw_theme",Yr="piclaw_tint",zn,Cr,Cc,cs,qn,Jc="light",Ji=!1;var mc=O(()=>{zn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Cr={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Cc={default:{label:"Default",mode:"auto",light:zn,dark:Cr},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},cs=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],qn={theme:"default",tint:null}});function vs(n){return q_.map((r)=>({value:r,label:A_[r],active:r===n}))}function ac({variant:n="inline",onChange:r}={}){let{locale:i,setLocale:_,t:c}=J(),u=vs(i),f=(g)=>{let $=g?.currentTarget?.value;_($),r?.($)};return s`
    <div class=${`language-switcher language-switcher-${n}`} role="none">
      <label class="language-switcher-label" for="language-switcher-select">${c("language.label")}</label>
      <select
        id="language-switcher-select"
        class="language-switcher-select"
        value=${i}
        aria-label=${c("language.label")}
        onClick=${(g)=>g.stopPropagation()}
        onChange=${f}
      >
        ${u.map((g)=>s`
          <option key=${g.value} value=${g.value}>${g.label}</option>
        `)}
      </select>
    </div>
  `}var nu=O(()=>{e();on()});var iu={};un(iu,{ThemeSection:()=>ks});function ru(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function ks({themes:n,colorKeys:r,settingsData:i,setStatus:_,mergeSettingsData:c}){let{t:u}=J(),[f,g]=y("default"),[$,o]=y(""),[x,l]=y(!1),b=C(""),h=C(null),k=C(!0);M(()=>{return k.current=!0,()=>{k.current=!1}},[]);let p=j((U)=>{let H=ru(U);g(H.uiTheme),o(H.uiTint),b.current=JSON.stringify(H)},[]);M(()=>{if(i){p(i);return}p({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[i,p]);let B=j((U,H)=>{ai({theme:U,tint:H||null}),g(U||"default"),o(H||"")},[]),t=Y(()=>JSON.stringify(ru({uiTheme:f,uiTint:$})),[f,$]);M(()=>{if(t===b.current)return;if(h.current)clearTimeout(h.current);return h.current=setTimeout(async()=>{if(!k.current)return;l(!0);try{let U=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:t}),H=await U.json().catch(()=>({}));if(!k.current)return;if(!U.ok||!H?.ok||!H?.settings){_?.(H?.error||"Failed to save appearance settings.","error");return}b.current=t,c?.(H.settings),_?.("Appearance synced across clients.","success")}catch(U){if(!k.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",U),_?.("Failed to save appearance settings.","error")}finally{if(k.current)l(!1)}},250),()=>{if(h.current)clearTimeout(h.current)}},[t,c,_]);let v=r||[],G=n||[];return s`
        <div class="settings-section">
            <div class="settings-row settings-language-row">
                <${ac} variant="inline" />
            </div>
            ${x&&s`<div class="settings-hint" style="margin:0 0 12px 0;">${u("settings.appearance.syncing")}</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${f==="default"}
                        onChange=${()=>B("default",$)} />
                    <strong>${u("settings.appearance.default")}</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">${u("settings.appearance.autoLightDark")}</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">${u("settings.appearance.tint")}</label>
                    <input type="color"
                        value=${$||"#1d9bf0"}
                        onInput=${(U)=>{let H=U.target.value;if(o(H),f==="default")ai({theme:"default",tint:H})}} />
                    ${$&&s`
                        <button class="settings-tint-clear" onClick=${()=>B("default","")}
                            title=${u("settings.appearance.clearTint")}>\u2715</button>
                    `}
                    <span class="settings-tint-hex">${$||u("settings.appearance.none")}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${v.map((U)=>s`<th class="settings-swatch-header">${U.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${G.filter((U)=>U.name!=="default").map((U)=>s`
                        <tr class=${U.name===f?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>B(U.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${U.name===f} onChange=${()=>B(U.name,"")} /></td>
                            <td><strong>${U.label}</strong></td>
                            <td>${U.mode}</td>
                            ${v.map((H)=>{let P=U.colors?.[H];return s`<td class="settings-swatch-cell">
                                    ${P?s`<span class="settings-color-swatch" style=${"background:"+P} title=${P}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var _u=O(()=>{e();mc();nu();on()});var uu={};un(uu,{__scheduledTasksSettingsTest:()=>Hs,ScheduledTasksSection:()=>Fs});function An(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function cu(n){let r=Number(n);if(!Number.isFinite(r))return"—";if(r<1000)return`${Math.round(r)}ms`;return`${(r/1000).toFixed(r<1e4?1:0)}s`}function n_(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${An(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function r_(n){let r=n?.task_kind||"agent";return r==="internal"?"internal/protected":r}function i_(n){return(n?.task_kind||"agent")==="internal"}function Ks(n){if(!n)return"";let r=String(n).replace(/\s+/g," ").trim();return r.length>180?`${r.slice(0,179)}…`:r}function mn({children:n,type:r="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function Bs({task:n}){let r=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!r.length)return s`<p class="settings-hint">No run logs recorded yet.</p>`;return s`
        <div class="settings-task-run-list">
            ${r.map((i)=>s`
                <div class=${`settings-task-run-row settings-task-run-${i.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${mn} type=${i.status==="error"?"error":"success"}>${i.status||"unknown"}<//>
                        <span>${An(i.run_at)}</span>
                        <span>${cu(i.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${i.error_summary||Ks(i.error)||i.result_summary||i.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function zs({task:n,onAction:r}){if(!n)return s`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let i=i_(n);return s`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${n.summary||n.id}</h4>
                    <code>${n.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${n.status==="active"&&s`<button onClick=${()=>r("pause",n)}>Pause</button>`}
                    ${n.status==="paused"&&s`<button onClick=${()=>r("resume",n)}>Resume</button>`}
                    <button class="danger" onClick=${()=>r("delete",n)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${n.status||"—"}</strong>
                <span>Kind</span><strong>${r_(n)}</strong>
                <span>Schedule</span><strong>${n_(n)}</strong>
                <span>Next run</span><strong>${An(n.next_run)}</strong>
                <span>Last run</span><strong>${An(n.last_run)}</strong>
                <span>Last result</span><strong>${n.latest_run_log?.status||n.last_result||"—"}</strong>
                <span>Chat</span><code>${n.chat_jid||"—"}</code>
                <span>Model</span><code>${n.model||"default"}</code>
                ${n.cwd&&s`<span>CWD</span><code>${n.cwd}</code>`}
                ${n.timeout_sec&&s`<span>Timeout</span><strong>${n.timeout_sec}s</strong>`}
                ${i&&s`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${n.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${n.command||n.prompt||n.command_summary||n.prompt_summary||n.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${Bs} task=${n} />
        </div>
    `}function Fs({filter:n="",setStatus:r}){let[i,_]=y([]),[c,u]=y({active:0,paused:0,completed:0}),[f,g]=y("all"),[$,o]=y(""),[x,l]=y(!0),[b,h]=y(null),[k,p]=y(null),[B,t]=y(null),[v,G]=y(!1),U=j(async(w={})=>{l(!0),h(null);try{let z=await Ki({status:f,chatJid:$.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});_(z.tasks||[]),u(z.counts||{active:0,paused:0,completed:0});let q=w.selectedId||k,W=(z.tasks||[]).find((V)=>V.id===q)||(z.tasks||[])[0]||null;p(W?.id||null),t(W)}catch(z){h(z?.message||"Failed to load scheduled tasks.")}finally{l(!1)}},[f,$,k]);M(()=>{U()},[U]);let H=String(n||"").trim().toLowerCase(),P=Y(()=>{if(!H)return i;return i.filter((w)=>[w.id,w.chat_jid,w.status,w.task_kind,w.schedule_type,w.schedule_value,w.summary,w.prompt_summary,w.command_summary,w.latest_run_log?.error_summary].some((z)=>String(z||"").toLowerCase().includes(H)))},[i,H]),K=j((w)=>{p(w?.id||null),t(w||null)},[]),T=j(async(w,z)=>{if(!z||v)return;let q=i_(z),W=z.summary||z.command_summary||z.prompt_summary||z.id,V=w==="delete"?`Delete scheduled task ${z.id}?

${W}`:`${w==="pause"?"Pause":"Resume"} scheduled task ${z.id}?

${W}`;if(!window.confirm(V))return;if(q&&!window.confirm(`Task ${z.id} is internal/protected. Continue with ${w}?`))return;G(!0),r?.(`${w==="delete"?"Deleting":w==="pause"?"Pausing":"Resuming"} ${z.id}…`,"info");try{await Bi(w,z.id,{allowInternal:q}),r?.(`Scheduled task ${z.id} ${w==="delete"?"deleted":w==="pause"?"paused":"resumed"}.`,"success"),await U({selectedId:w==="delete"?null:z.id})}catch(Z){r?.(Z?.message||`Failed to ${w} task.`,"error")}finally{G(!1)}},[v,U,r]);return s`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${mn} type="active">Active ${c.active||0}<//>
                    <${mn} type="paused">Paused ${c.paused||0}<//>
                    <${mn} type="completed">Completed ${c.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${f} onChange=${(w)=>g(w.target.value)}>
                        ${ps.map((w)=>s`<option value=${w}>${w==="all"?"All statuses":w}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${$} onInput=${(w)=>o(w.target.value)} />
                    <button onClick=${()=>U()} disabled=${x}>Refresh</button>
                </div>
            </div>

            ${x&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${b&&s`<div class="settings-error-state">${b}</div>`}
            ${!x&&!b&&i.length===0&&s`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/i`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!x&&!b&&i.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${P.map((w)=>s`
                            <button class=${`settings-task-row ${w.id===k?"active":""}`} onClick=${()=>K(w)}>
                                <span class="settings-task-row-main">
                                    <strong>${w.summary||w.id}</strong>
                                    <span>${n_(w)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${mn} type=${w.status||"neutral"}>${w.status}<//>
                                    <${mn}>${r_(w)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${An(w.next_run)} · Last ${An(w.last_run)}${w.latest_run_log?.status?` · ${w.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${P.length===0&&s`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${zs} task=${B&&P.some((w)=>w.id===B.id)?B:P[0]} onAction=${T} />
                </div>
            `}
        </div>
    `}var ps,Hs;var fu=O(()=>{e();Kn();ps=["all","active","paused","completed"];Hs={formatDateTime:An,formatDuration:cu,labelForSchedule:n_,kindLabel:r_,isProtectedTask:i_}});function su(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function an(n){return typeof n==="string"&&n.trim().length>0}function __(n,...r){let i=su(n);if(!i)return!0;let _=r.map((c)=>su(c)).filter(Boolean);for(let c of _)if(c.startsWith(i)||c.includes(i))return!0;return!1}function gu(n){if(!Array.isArray(n))return null;let r=[],i=new Set;for(let _ of n){let c=String(_||"").trim();if(!c)continue;let u=c.toLowerCase();if(i.has(u))continue;i.add(u),r.push(c)}return r}function tr(n){let r=n&&typeof n==="object"?n:{};return{workspaceCommands:gu(r.workspaceCommands),slashCommands:gu(r.slashCommands)}}function ou(n,r){if(!Array.isArray(n))return!0;return n.some((i)=>i.toLowerCase()===r.toLowerCase())}function Ws(n){let r=Array.isArray(n?.commands)?n.commands:[],i=tr(n?.settings),_=String(n?.query||"");return r.filter((c)=>ou(i.workspaceCommands,c.id)).filter((c)=>__(_,c.label,c.description,...c.keywords||[])).map((c)=>({key:`workspace:${c.id}`,kind:"workspace",title:c.label,subtitle:c.description,searchText:`${c.label} ${c.description} ${(c.keywords||[]).join(" ")}`.trim(),visualHint:c.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:c.id}))}function Rs(n){let r=Array.isArray(n?.agents)?n.agents:[],i=String(n?.query||""),_=new Set;return r.filter((c)=>{let u=an(c?.chat_jid)?c.chat_jid.trim():"";if(!u||_.has(u))return!1;if(c?.archived_at)return!1;return _.add(u),!0}).filter((c)=>__(i,`@${String(c?.agent_name||"").trim()}`,c?.session_name,c?.chat_jid)).map((c)=>{let u=an(c?.agent_name)?c.agent_name.trim():String(c?.chat_jid||"").replace(/^[^:]+:/,""),f=an(c?.session_name)?c.session_name.trim():"",g=String(c?.chat_jid||"").trim();return{key:`agent:${g}`,kind:"agent",title:`@${u}`,subtitle:f||g,searchText:`@${u} ${f} ${g}`.trim(),visualHint:u.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:g}})}function js(n){let r=Array.isArray(n?.slashCommands)?n.slashCommands:[],i=tr(n?.settings),_=String(n?.query||""),c=new Set;return r.filter((u)=>{let f=an(u?.name)?u.name.trim():"";if(!f||c.has(f.toLowerCase()))return!1;return c.add(f.toLowerCase()),ou(i.slashCommands,f)}).filter((u)=>__(_,u?.name,u?.description,u?.source)).map((u)=>{let f=String(u?.name||"").trim(),g=an(u?.description)?u.description.trim():"slash command",$=an(u?.source)?u.source.trim():"";return{key:`slash:${f}`,kind:"slash",title:f,subtitle:g,searchText:`${f} ${g} ${String(u?.source||"")}`.trim(),visualHint:"/",categoryLabel:$||"Slash",actionHint:"Insert",commandName:f}})}function Oo(n){return[...Rs({agents:n?.agents,query:n?.query}),...Ws({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...js({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var nr;var $u=O(()=>{nr=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var yu={};un(yu,{QuickActionsSection:()=>Us});function lu(n,...r){let i=String(n||"").trim().toLowerCase();if(!i)return!0;return r.some((_)=>String(_||"").toLowerCase().includes(i))}function wu(n){if(!Array.isArray(n))return null;return new Set(n.map((r)=>String(r||"").trim().toLowerCase()).filter(Boolean))}function Us({filter:n="",setStatus:r,mergeSettingsData:i}){let{t:_}=J(),[c,u]=y(()=>nr.map((K)=>K.id)),[f,g]=y([]),[$,o]=y([]),[x,l]=y(!0),[b,h]=y(!1),k=j(async()=>{l(!0);try{let[K,T]=await Promise.all([Ti(),Pi("web:default").catch(()=>({commands:[]}))]),w=tr(K?.settings),z=Array.isArray(T?.commands)?T.commands:[];o(z),u(Array.isArray(w.workspaceCommands)?w.workspaceCommands:nr.map((q)=>q.id)),g(Array.isArray(w.slashCommands)?w.slashCommands:z.map((q)=>String(q?.name||"").trim()).filter(Boolean))}catch(K){r?.(String(K?.message||K),"error")}finally{l(!1)}},[r]);M(()=>{k()},[k]);let p=Y(()=>wu(c),[c]),B=Y(()=>wu(f),[f]),t=Y(()=>nr.filter((K)=>lu(n,K.label,K.description,...K.keywords||[])),[n]),v=Y(()=>$.filter((K)=>lu(n,K?.name,K?.description,K?.source)),[$,n]),G=j((K)=>{u((T)=>{let w=new Set((Array.isArray(T)?T:[]).map((z)=>String(z||"").trim()).filter(Boolean));if(w.has(K))w.delete(K);else w.add(K);return nr.map((z)=>z.id).filter((z)=>w.has(z))})},[]),U=j((K)=>{g((T)=>{let w=new Set((Array.isArray(T)?T:[]).map((z)=>String(z||"").trim()).filter(Boolean));if(w.has(K))w.delete(K);else w.add(K);return $.map((z)=>String(z?.name||"").trim()).filter((z)=>z&&w.has(z))})},[$]),H=j(()=>{u(nr.map((K)=>K.id)),g($.map((K)=>String(K?.name||"").trim()).filter(Boolean))},[$]),P=j(async()=>{if(b)return;h(!0),r?.(_("settings.quickActions.savingToast"),"info");try{let K=await Gi({workspaceCommands:c,slashCommands:f}),T=tr(K?.settings);i?.({quickActions:T}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:T}})),r?.(_("settings.quickActions.savedToast"),"success")}catch(K){r?.(String(K?.message||K),"error")}finally{h(!1)}},[i,b,r,f,c]);if(x)return s`<div class="settings-loading">${_("settings.quickActions.loading")}</div>`;return s`
        <div class="settings-section">
            <h3>${_("settings.quickActions.heading")}</h3>
            <p class="settings-hint">
                ${_("settings.quickActions.intro")}
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${H} disabled=${b}>${_("settings.quickActions.enableAll")}</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${P} disabled=${b}>
                    ${b?_("settings.quickActions.saving"):_("settings.quickActions.saveApply")}
                </button>
            </div>

            <h3 style="margin-top:8px;">${_("settings.quickActions.workspaceCommands")}</h3>
            <div class="settings-subsection-list">
                ${t.map((K)=>{let T=p?p.has(K.id.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${K.id}>
                            <input type="checkbox" checked=${T} onChange=${()=>G(K.id)} />
                            <div>
                                <div>${K.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${K.description}</div>
                            </div>
                        </label>
                    `})}
                ${t.length===0&&s`<div class="settings-hint">${_("settings.quickActions.noWorkspaceMatch")}</div>`}
            </div>

            <h3 style="margin-top:20px;">${_("settings.quickActions.slashCommands")}</h3>
            <div class="settings-subsection-list">
                ${v.map((K)=>{let T=String(K?.name||"").trim(),w=B?B.has(T.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${T}>
                            <input type="checkbox" checked=${w} onChange=${()=>U(T)} />
                            <div>
                                <div><code>${T}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${K?.description||_("settings.quickActions.slashFallback")}</div>
                            </div>
                        </label>
                    `})}
                ${v.length===0&&s`<div class="settings-hint">${_("settings.quickActions.noSlashMatch")}</div>`}
            </div>
        </div>
    `}var tu=O(()=>{e();Kn();$u();on()});var xu={};un(xu,{KeychainSection:()=>Gs});function Ps(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function Gs({filter:n=""}){let[r,i]=y([]),[_,c]=y(!0),[u,f]=y(null),[g,$]=y(!1),[o,x]=y(""),[l,b]=y(""),[h,k]=y(""),[p,B]=y(""),[t,v]=y(""),[G,U]=y("secret"),[H,P]=y(!1),[K,T]=y({}),[w,z]=y(null),[q,W]=y(null),[V,Z]=y(null),F=C(null),A=C(null),I=C(null),E=j(async()=>{c(!0),f(null);try{let L=await(await fetch("/agent/keychain")).json();if(L?.ok)i(L.entries||[]);else f(L?.error||"Failed to load keychain.")}catch(R){f("Failed to load keychain.")}finally{c(!1)}},[]);M(()=>{E()},[E]);let _n=j(async()=>{let R=o.trim(),L=l;if(!R||!L)return;P(!0);try{let ln=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R,secret:L,type:G,username:h.trim()||void 0,userNote:p,agentNote:t})})).json();if(ln?.ok)x(""),b(""),k(""),B(""),v(""),U("secret"),$(!1),await E();else f(ln?.error||"Failed to add entry.")}catch{f("Failed to add entry.")}finally{P(!1)}},[o,l,h,p,t,G,E]),$n=j(async(R)=>{try{let cn=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R})})).json();if(cn?.ok)W(null),Z((ln)=>ln?.name===R?null:ln),await E();else f(cn?.error||"Failed to delete entry.")}catch{f("Failed to delete entry.")}},[E]),tn=j(async(R)=>{let L=R?.name;if(!L)return;let cn=K[L]||{},ln=Object.prototype.hasOwnProperty.call(cn,"userNote")?cn.userNote:R.userNote||"",yn=Object.prototype.hasOwnProperty.call(cn,"agentNote")?cn.agentNote:R.agentNote||"";z(L);try{let Pn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:L,userNote:ln,agentNote:yn})})).json();if(Pn?.ok)T((hr)=>{let ir={...hr||{}};return delete ir[L],ir}),await E();else f(Pn?.error||"Failed to save notes.")}catch{f("Failed to save notes.")}finally{z(null)}},[K,E]),Fn=j((R,L,cn)=>{T((ln)=>({...ln||{},[R]:{...(ln||{})[R]||{},[L]:cn}}))},[]),X=j(async(R,L,cn)=>{try{let yn=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R,master_password:L||void 0,totp_code:cn||void 0})})).json();if(yn?.ok)Z({name:R,phase:"revealed",secret:yn.secret,username:yn.username,masterPassword:L});else if(yn?.needs_master_password)Z((hn)=>({name:R,phase:"password",masterPassword:"",error:hn?.name===R&&hn?.masterPassword?yn.error:null})),requestAnimationFrame(()=>A.current?.focus());else if(yn?.needs_totp)Z((hn)=>({name:R,phase:"totp",masterPassword:L,totpCode:"",error:hn?.name===R&&hn?.phase==="totp"&&hn?.totpCode?yn.error:null})),requestAnimationFrame(()=>I.current?.focus());else Z({name:R,phase:"error",error:yn?.error||"Failed to reveal."})}catch{Z({name:R,phase:"error",error:"Failed to reveal."})}},[]),Q=j((R)=>{if(V?.name===R&&V?.phase==="revealed"){Z(null);return}X(R,null,null)},[V,X]),gn=j((R)=>{let L=V?.masterPassword||"";if(!L)return;X(R,L,null)},[V,X]),N=j((R)=>{let L=V?.totpCode||"";if(L.length<6)return;X(R,V?.masterPassword,L)},[V,X]),m=j(async(R)=>{try{await navigator.clipboard.writeText(R)}catch{let L=document.createElement("textarea");L.value=R,L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select(),document.execCommand("copy"),document.body.removeChild(L)}},[]);M(()=>{if(g)requestAnimationFrame(()=>F.current?.focus())},[g]);let fn=n.toLowerCase(),Hn=Y(()=>{if(!fn)return r;return r.filter((R)=>R.name.toLowerCase().includes(fn)||(R.type||"").toLowerCase().includes(fn)||(R.envVar||"").toLowerCase().includes(fn)||(R.userNote||"").toLowerCase().includes(fn)||(R.agentNote||"").toLowerCase().includes(fn))},[r,fn]);if(_)return s`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return s`
        <div class="settings-section">
            ${u&&s`
                <div class="settings-keychain-error" role="alert">
                    ${u}
                    <button class="settings-keychain-dismiss" onClick=${()=>f(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${Hn.length} entr${Hn.length===1?"y":"ies"}${fn?` matching "${n}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>$(!g)}>
                    ${g?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${g&&s`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${F} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${o} onInput=${(R)=>x(R.target.value)}
                            class="settings-keychain-input" />
                        <select value=${G} onChange=${(R)=>U(R.target.value)}
                            class="settings-keychain-select">
                            ${Ts.map((R)=>s`<option value=${R}>${R}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${l} onInput=${(R)=>b(R.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${h} onInput=${(R)=>k(R.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${_n}
                            disabled=${H||!o.trim()||!l}>
                            ${H?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${p} onInput=${(R)=>B(R.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${t} onInput=${(R)=>v(R.target.value)}
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
                        ${Hn.length===0&&s`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${fn?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${Hn.map((R)=>{let L=V?.name===R.name?V:null,cn=L?.phase==="revealed",ln=L?.phase==="password",yn=L?.phase==="totp",hn=L?.phase==="error",Pn=K[R.name]||{},hr=Object.prototype.hasOwnProperty.call(Pn,"userNote")?Pn.userNote:R.userNote||"",ir=Object.prototype.hasOwnProperty.call(Pn,"agentNote")?Pn.agentNote:R.agentNote||"",Tu=hr!==(R.userNote||"")||ir!==(R.agentNote||""),o_=w===R.name;return s`
                            <tr class="settings-keychain-row" key=${R.name}>
                                <td class="settings-keychain-name">${R.name}</td>
                                <td><span class="settings-keychain-type-badge">${R.type}</span></td>
                                <td class="settings-keychain-env">${R.envVar?s`<code>$${R.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Ps(R.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${cn?" active":""}`}
                                        onClick=${()=>Q(R.name)}
                                        title=${cn?"Hide secret":"Reveal secret"}>
                                        ${cn?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${q===R.name?s`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>$n(R.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>W(null)}>No</button>
                                            </span>
                                        `:s`<button class="settings-keychain-delete-btn" onClick=${()=>W(R.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${R.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${hr}
                                                onInput=${(wn)=>Fn(R.name,"userNote",wn.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${ir}
                                                onInput=${(wn)=>Fn(R.name,"agentNote",wn.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!Tu||o_} onClick=${()=>tn(R)}>
                                            ${o_?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${ln&&s`
                                <tr class="settings-keychain-prompt-row" key=${R.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${A} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${L?.masterPassword||""}
                                                onInput=${(wn)=>Z((er)=>({...er,masterPassword:wn.target.value}))}
                                                onKeyDown=${(wn)=>{if(wn.key==="Enter")gn(R.name);if(wn.key==="Escape")Z(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>gn(R.name)}
                                                disabled=${!L?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>Z(null)}>Cancel</button>
                                            ${L?.error&&s`<span class="settings-keychain-prompt-error">${L.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${yn&&s`
                                <tr class="settings-keychain-prompt-row" key=${R.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${I} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${L?.totpCode||""}
                                                onInput=${(wn)=>Z((er)=>({...er,totpCode:wn.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(wn)=>{if(wn.key==="Enter")N(R.name);if(wn.key==="Escape")Z(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>N(R.name)}
                                                disabled=${(L?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>Z(null)}>Cancel</button>
                                            ${L?.error&&s`<span class="settings-keychain-prompt-error">${L.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${cn&&s`
                                <tr class="settings-keychain-reveal-row" key=${R.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${L.username&&s`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${L.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>m(L.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${L.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>m(L.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${hn&&s`
                                <tr class="settings-keychain-reveal-row" key=${R.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${L.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var Ts;var bu=O(()=>{e();Ts=["secret","token","password","basic"]});var hu={};un(hu,{ToolsSection:()=>Ms});function Ms({toolsets:n,filter:r="",settingsData:i,mergeSettingsData:_}){let{t:c}=J(),u=n||[],[f,g]=y(()=>{let p={};for(let B of u)p[B.name]=!0;return p}),$=j((p)=>{g((B)=>({...B,[p]:!B[p]}))},[]),o=i?.searchMatchMode||"or",x=Y(()=>{let p=Array.isArray(i?.toolResultCompactionTools)?i.toolResultCompactionTools:[];return new Set(p.filter((B)=>typeof B==="string").map((B)=>B.trim().toLowerCase()).filter(Boolean))},[i?.toolResultCompactionTools]),l=j(async()=>{let p=o==="or"?"and":"or";try{let t=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:p})})).json().catch(()=>({}));if(t?.ok&&t?.settings)_?.(t.settings)}catch(B){console.warn("[settings/tools] Failed to save search match mode.",B)}},[o,_]),b=j(async(p)=>{let B=String(p||"").trim().toLowerCase();if(!B)return;let t=new Set(x);if(t.has(B))t.delete(B);else t.add(B);try{let G=await(await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toolResultCompactionTools:Array.from(t).sort()})})).json().catch(()=>({}));if(G?.ok&&G?.settings)_?.(G.settings)}catch(v){console.warn("[settings/tools] Failed to save tool compaction settings.",v)}},[x,_]),h=r.toLowerCase(),k=Y(()=>{if(!h)return u;return u.map((p)=>{let B=p.tools.filter((t)=>t.name.toLowerCase().includes(h)||p.name.toLowerCase().includes(h)||(t.summary||"").toLowerCase().includes(h));return B.length>0?{...p,tools:B}:null}).filter(Boolean)},[u,h]);if(u.length===0)return s`<div class="settings-section"><p class="settings-hint">${c("settings.tools.unavailable")}</p></div>`;return s`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">${c("settings.tools.search")}</h4>
                <div class="settings-row">
                    <label>${c("settings.tools.matchMode")}</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${o==="and"} onChange=${l} />
                        <span class="settings-hint" style="margin:0">
                            ${o==="or"?c("settings.tools.orMode"):c("settings.tools.andMode")}
                        </span>
                    </div>
                </div>
            </div>
            ${k.map((p)=>{let B=f[p.name]!==!1;return s`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${B} onChange=${()=>$(p.name)} />
                            <span class="settings-toolset-icon">${Vs[p.name]||Qs}</span>
                            <strong>${p.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${p.description}</span>
                    </div>
                    ${B&&s`<div class="settings-tool-list">
                        <div class="settings-tool-row settings-tool-row-header" aria-hidden="true">
                            <span class="settings-tool-status-header">${c("settings.tools.colEnabled")}</span>
                            <span class="settings-tool-name">${c("settings.tools.colTool")}</span>
                            <span class="settings-tool-compact-header">${c("settings.tools.colCompact")}</span>
                            <span class="settings-tool-kind">${c("settings.tools.colKind")}</span>
                            <span class="settings-tool-summary">${c("settings.tools.colSummary")}</span>
                            <span class="settings-tool-source">${c("settings.tools.colSource")}</span>
                        </div>
                        ${p.tools.map((t)=>{let v=String(t.name||"").trim().toLowerCase(),G=x.has(v);return s`
                                <div class="settings-tool-row">
                                    <input type="checkbox" checked disabled />
                                    <span class="settings-tool-name">${t.name}</span>
                                    <span class="settings-tool-compact">
                                        <input
                                            type="checkbox"
                                            checked=${G}
                                            onChange=${()=>b(t.name)}
                                            title=${G?c("settings.tools.disableCompaction"):c("settings.tools.enableCompaction")}
                                        />
                                    </span>
                                    <span class="settings-tool-kind" title=${t.kind}>${Xs[t.kind]||"?"}</span>
                                    ${t.summary&&s`<span class="settings-tool-summary">${t.summary}</span>`}
                                    ${!t.summary&&s`<span class="settings-tool-summary"></span>`}
                                    <span class="settings-tool-source">${Ns[t.name]||p.name}</span>
                                </div>
                            `})}
                    </div>`}
                </div>
            `})}
            ${k.length===0&&s`<p class="settings-hint">${c("settings.tools.noMatch",{filter:r})}</p>`}
            <p class="settings-hint">${c("settings.tools.footer")}</p>
        </div>
    `}var Vs,Ns,Xs,Qs;var vu=O(()=>{e();on();Vs={core:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},Ns={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Xs={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},Qs=s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var ku={};un(ku,{AddonsSection:()=>qs});function qs({setStatus:n,filter:r=""}){let[i,_]=y(null),[c,u]=y(!0),[f,g]=y(null),[$,o]=y(!1),[x,l]=y({runtime:"",windowsNative:!1}),[b,h]=y([]),[k,p]=y([]);function B(){let w=new URLSearchParams;try{let q=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),W=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((Z)=>Z.trim()).filter(Boolean),V=localStorage.getItem("piclaw_addons_repo_url");if(q)w.append("catalog_url",q);for(let Z of W)w.append("catalog_url",Z);if(V)w.set("repo_url",V)}catch(q){}let z=w.toString();return z?`?${z}`:""}let t=j(async()=>{try{let[w,z]=await Promise.all([fetch(`/agent/addons${B()}`),fetch("/agent/settings-data")]),q=await w.json();if(q.error)throw Error(q.error);_(q.addons||[]),h(q.sources||[]),p(q.failed_sources||[]);let W=await z.json().catch(()=>({})),V=typeof W?.runtimePlatform==="string"?W.runtimePlatform:"";l({runtime:V,windowsNative:V==="win32"})}catch(w){_(null),n?.(String(w.message||w),"error")}finally{u(!1)}},[n]);M(()=>{t()},[]);let v=j(async(w)=>{if(f)return;g({slug:w,action:"install"}),n?.(`Installing ${w}…`,"info");try{let q=await(await fetch(`/agent/addons/install${B()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:w})})).json();if(q.error){n?.(q.error,"error");return}o(!0);let W=[q.message,q.warning].filter(Boolean).join(" ");n?.(W||"Add-on installed.","success"),await t()}catch(z){n?.(String(z.message||z),"error")}finally{g(null)}},[f,t,n]),G=j(async(w)=>{if(f)return;g({slug:w,action:"remove"}),n?.(`Removing ${w}…`,"info");try{let q=await(await fetch(`/agent/addons/uninstall${B()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:w})})).json();if(q.error){n?.(q.error,"error");return}o(!0);let W=[q.message,q.warning].filter(Boolean).join(" ");n?.(W||"Add-on removed.","success"),await t()}catch(z){n?.(String(z.message||z),"error")}finally{g(null)}},[f,t,n]),U=j(async()=>{if(f)return;g({slug:null,action:"restart"}),n?.("Restarting piclaw…","info");try{let z=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(z.error){n?.(z.error,"error"),g(null);return}n?.(z.message||"Restarting piclaw…","success"),o(!1),(async(W=30,V=2000)=>{for(let Z=0;Z<W;Z++){await new Promise((F)=>setTimeout(F,V));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await t(),g(null),n?.("Restart complete — add-ons refreshed.","success");return}}catch(F){}}g(null),n?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(w){n?.(String(w.message||w),"error"),g(null)}},[f,n,t]);if(c)return s`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!i)return s`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let H=r.toLowerCase(),P=H?i.filter((w)=>w.slug.toLowerCase().includes(H)||(w.description||"").toLowerCase().includes(H)||(w.tags||[]).some((z)=>z.toLowerCase().includes(H))):i,K=f?.slug||null,T=f?f.action==="remove"?`Removing ${f.slug}…`:f.action==="restart"?"Restarting piclaw…":`Installing ${f.slug}…`:"";return s`
        <div class=${`settings-section settings-addon-panel${f?" busy":""}`} aria-busy=${f?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${b.length<=1?s`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:s`${b.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${k.length>0&&s`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${k.length} catalog source${k.length>1?"s":""}:
                            ${k.map((w)=>s` <code style="font-size:0.82em;word-break:break-all">${w}</code>`)}
                        </div>
                    `}
                    ${b.length>1&&s`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${b.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${b.map((w)=>s`<li style="word-break:break-all"><code>${w}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${x.windowsNative&&s`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            <div class="settings-addon-list">
                ${f&&s`
                    <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${T}>
                        <div class="settings-addon-panel-overlay-card">
                            <div class="settings-spinner"></div>
                            <span>${T}</span>
                        </div>
                    </div>
                `}
                ${P.map((w)=>{let z=(w.skills||[]).length>0,q=w.type==="extension",W=z&&q?"extension + skill":z?"skill":"extension",V=z&&!q?"settings-tag-skill":"",Z=typeof w.homepage==="string"&&w.homepage.trim()?w.homepage.trim():"";return s`
                    <div class=${`settings-addon-card${w.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${Z?s`<a class="settings-addon-name-link" href=${Z} target="_blank" rel="noopener noreferrer">${w.slug}</a>`:s`<strong>${w.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${V}`}>${W}</span>
                            <span class="settings-addon-version">${w.installed?w.installedVersion||"?":w.version||""}</span>
                            ${w.installKind&&s`<span class="settings-tag">${w.installKind}</span>`}
                            ${w.hasUpdate&&s`<span class="settings-tag settings-tag-skill">\u2191 ${w.version}</span>`}
                            <div class="settings-addon-actions">
                                ${w.installed?s`
                                    ${w.hasUpdate&&s`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(f)} onClick=${()=>v(w.slug)}>${K===w.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(f)} onClick=${()=>G(w.slug)}>${K===w.slug?"…":"Remove"}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(f)} onClick=${()=>v(w.slug)}>${K===w.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${w.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(w.tags||[]).map((F)=>s`<span class="settings-tag">${F}</span>`)}${(w.skills||[]).map((F)=>s`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${F}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${P.length===0&&s`<p class="settings-hint">No add-ons match "${r}"</p>`}
            </div>
            ${$&&s`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(f)} onClick=${U}>Restart Now</button>
                </div>
            `}
        </div>
    `}var pu=O(()=>{e()});var Cs={};function c_(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function Or(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function As(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function Ds(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Zs(n,r,i,_){try{return En(localStorage.getItem(n),{fallback:r,min:i,max:_})}catch{return En(r,{fallback:r,min:i,max:_})}}function Ls(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function Is(){let{t:n}=J(),[r,i]=y(()=>c_("piclaw_vim_mode",!1)),[_,c]=y(()=>c_("piclaw_show_whitespace",!0)),[u,f]=y(()=>c_("piclaw_md_live_preview",!0)),[g,$]=y(()=>Zs("piclaw_editor_font_size",13,10,24)),[o,x]=y(()=>As("piclaw_editor_font_family","")),l=j((b,h,k)=>{let p=!h;k(p),Or(b,p)},[]);return s`
        <div class="settings-section">
            <h3>${n("settings.editor.heading")}</h3>
            <div class="settings-row">
                <label>${n("settings.editor.vimMode")}</label>
                <input type="checkbox" checked=${r}
                    onChange=${()=>{let b=!r;i(b),Or("piclaw_vim_mode",b)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.showWhitespace")}</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let b=!_;c(b),Or("piclaw_show_whitespace",b)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.livePreview")}</label>
                <input type="checkbox" checked=${u}
                    onChange=${()=>{let b=!u;f(b),Or("piclaw_md_live_preview",b)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontSize")}</label>
                <${nn}
                    label=${n("settings.editor.fontSizeAria")}
                    value=${g}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(b)=>{$(b),Ls("piclaw_editor_font_size",b)}}
                />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontFamily")}</label>
                <input type="text" value=${o}
                    onInput=${(b)=>{let h=b.target.value;x(h),Ds("piclaw_editor_font_family",h)}}
                    placeholder=${n("settings.editor.fontFamilyPlaceholder")} />
            </div>
            <p class="settings-hint settings-local-only-hint">${n("settings.editor.localOnlyHint")}</p>
        </div>
    `}var Ys;var Ku=O(()=>{e();fr();Sn();on();Ys=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;Cn({id:"editor",label:"Editor",icon:Ys,component:Is,order:150})});var Es={};function u_(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function f_(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function s_(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function g_(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Os(){let[n,r]=y(()=>u_("piclaw_dev_mode",!1)),[i,_]=y(()=>s_("piclaw_addons_catalog_url","")),[c,u]=y(()=>s_("piclaw_addons_catalog_urls","")),[f,g]=y(()=>s_("piclaw_addons_repo_url","")),[$,o]=y(()=>u_("piclaw_debug_sse",!1)),[x,l]=y(()=>u_("piclaw_debug_tool_calls",!1)),b=j(()=>{let h=!n;r(h),f_("piclaw_dev_mode",h)},[n]);return s`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${n} onChange=${b} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${n&&s`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${i}
                        onInput=${(h)=>{let k=h.target.value;_(k),g_("piclaw_addons_catalog_url",k)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${c}
                        onInput=${(h)=>{let k=h.target.value;u(k),g_("piclaw_addons_catalog_urls",k)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${f}
                        onInput=${(h)=>{let k=h.target.value;g(k),g_("piclaw_addons_repo_url",k)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${$}
                        onChange=${()=>{let h=!$;o(h),f_("piclaw_debug_sse",h)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${x}
                        onChange=${()=>{let h=!x;l(h),f_("piclaw_debug_tool_calls",h)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var Js;var Bu=O(()=>{e();fr();Js=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;Cn({id:"developer",label:"Developer",icon:Js,component:Os,order:900})});var bg={};un(bg,{openSettingsDialog:()=>xg,SettingsDialogContent:()=>dr,SettingsDialog:()=>tg});function br(n){xr.push({ts:performance.now(),label:n})}function Ss(){if(!xr.length)return;let n=xr[0].ts,r=xr.map((i)=>`+${(i.ts-n).toFixed(1)}ms ${i.label}`);console.info(`[settings-dialog perf]
`+r.join(`
`));try{window.__piclawSettingsPerfLog=r}catch(i){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:r})}).catch((i)=>{})}catch(i){}xr.length=0}function ms(n){let r=Sr.get(n);if(r)return Promise.resolve(r);let i=Jr.get(n);if(i)return i;let _=ds[n]().then((c)=>{return Sr.set(n,c),Jr.delete(n),c}).catch((c)=>{throw Jr.delete(n),c});return Jr.set(n,_),_}function Er(n="Loading…"){return s`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function dr({onClose:n}){br("SettingsDialogContent-render-start");let[r,i]=y(()=>bi()||"general"),[_,c]=y(zu),[u,f]=y(null),[g,$]=y(""),[,o]=y(0),[x,l]=y(()=>Object.fromEntries(Sr.entries())),[b,h]=y(null),[k,p]=y({compact:!1,narrow:!1}),B=C(null),t=C(null),{t:v}=J(),G=(F)=>F?.isExtension?F.label:v(`settings.section.${F.id}`),U=(F)=>F?.isExtension?F.placeholder||v("settings.filter"):v(`settings.placeholder.${F.id}`);M(()=>{br("SettingsDialogContent-mounted"),Ss()},[]),M(()=>{let F=(A)=>{if(A.key==="Escape")n()};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[n]),M(()=>{let F=(A)=>{let I=typeof A?.detail?.section==="string"?A.detail.section.trim():"";if(I)i(I),$("")};return window.addEventListener("piclaw:open-settings",F),()=>window.removeEventListener("piclaw:open-settings",F)},[]),M(()=>{let F=()=>o((A)=>A+1);return window.addEventListener("piclaw:settings-panes-changed",F),()=>window.removeEventListener("piclaw:settings-panes-changed",F)},[]),M(()=>{fetch("/agent/settings-data").then((F)=>F.json()).then((F)=>{zu=F,c(F)}).catch(()=>c({}))},[]),M(()=>{let F=t.current;if(!F)return;let A=()=>{let I=F.clientWidth||0;p((E)=>{let _n={compact:I>0&&I<=860,narrow:I>0&&I<=720};return E.compact===_n.compact&&E.narrow===_n.narrow?E:_n})};if(A(),typeof ResizeObserver==="function"){let I=new ResizeObserver(()=>A());return I.observe(F),()=>I.disconnect()}return window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);let H=[...Hu].sort((F,A)=>(F.order??500)-(A.order??500)),K=C_().map((F)=>({id:F.id,label:F.label,icon:F.icon,searchable:F.searchable||!1,placeholder:F.searchPlaceholder,order:F.order??500,isExtension:!0,component:F.component})).sort(xi),T=[...H,...K],w=T.find((F)=>F.id===r)||Hu.find((F)=>F.id===r);M(()=>{if(w?.searchable)requestAnimationFrame(()=>B.current?.focus())},[r]),M(()=>{if(w?.isExtension){h(null);return}let F=!1;if(x[r]){h(null);return}return h(r),ms(r).then((A)=>{if(F)return;l((I)=>I?.[r]?I:{...I||{},[r]:A})}).catch((A)=>{if(F)return;console.error(`[settings-dialog] Failed to lazy-load section "${r}".`,A)}).finally(()=>{if(!F)h((A)=>A===r?null:A)}),()=>{F=!0}},[r,w?.isExtension,x]);let z=j((F,A="info")=>{f(F?{text:F,type:A}:null)},[]),q=j((F)=>{i(F),$("");let A=es[F];if(A&&!Fu.has(F))Fu.add(F),A().then(()=>o((I)=>I+1)).catch((I)=>{})},[]),W=j((F)=>{c((A)=>({...A||{},...F||{}}))},[]),V=()=>{if(w?.isExtension){if(!w.component)return Er("Loading pane…");let A=w.component;return s`<${A} filter=${g} />`}let F=x[r];if(!F||b===r)return Er(`${v("settings.loading")}`);switch(r){case"general":return s`<${F} settingsData=${_} setStatus=${z} mergeSettingsData=${W} />`;case"sessions":return s`<${F} settingsData=${_} setStatus=${z} mergeSettingsData=${W} />`;case"recordings":return s`<${F} filter=${g} setStatus=${z} />`;case"compaction":return s`<${F} settingsData=${_} setStatus=${z} mergeSettingsData=${W} />`;case"keyboard":return s`<${F} filter=${g} setStatus=${z} />`;case"workspace":return s`<${F} settingsData=${_} setStatus=${z} mergeSettingsData=${W} />`;case"environment":return s`<${F} settingsData=${_} filter=${g} setStatus=${z} mergeSettingsData=${W} />`;case"providers":return s`<${F} providers=${_?.providers} setStatus=${z} />`;case"models":return s`<${F} filter=${g} />`;case"theme":return s`<${F} themes=${_?.themes} colorKeys=${_?.colorKeys} settingsData=${_} setStatus=${z} mergeSettingsData=${W} />`;case"scheduled-tasks":return s`<${F} filter=${g} setStatus=${z} />`;case"quick-actions":return s`<${F} filter=${g} setStatus=${z} mergeSettingsData=${W} />`;case"keychain":return s`<${F} filter=${g} />`;case"tools":return s`<${F} toolsets=${_?.toolsets} filter=${g} settingsData=${_} mergeSettingsData=${W} />`;case"addons":return s`<${F} setStatus=${z} filter=${g} />`;default:return Er(v("settings.loading"))}},Z=!w;return br("SettingsDialogContent-render-end"),s`
        <div class="settings-dialog-backdrop" onClick=${(F)=>{if(F.target===F.currentTarget)n()}}>
            <div ref=${t} data-testid="settings-dialog" class=${`settings-dialog${k.compact?" settings-dialog-compact":""}${k.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">${v("settings.title")}</span>
                    ${w?.searchable&&s`
                        <input ref=${B} type="text" class="settings-header-filter"
                            placeholder=${U(w)}
                            value=${g} onInput=${(F)=>$(F.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title=${v("settings.close")}>✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${T.map((F,A)=>{let I=A>0&&!T[A-1].isExtension,E=F.isExtension&&I;return s`
                                ${E&&s`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${F.id===r?"active":""}`} onClick=${()=>q(F.id)}>
                                    <span class="settings-nav-icon">${F.icon}</span>
                                    <span class="settings-nav-label">${G(F)}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${Z?Er(v("settings.loading")):V()}
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
    `}function tg(){let[n,r]=y(!1);if(M(()=>{let i=(c)=>{let u=Gr(c?.detail?.section);if(u)try{window.__piclawSettingsRequestedSection=u}catch(f){}r(!0)};window.addEventListener("piclaw:open-settings",i);let _=J_();if(_.open){if(_.section)try{window.__piclawSettingsRequestedSection=_.section}catch(c){}r(!0)}return()=>window.removeEventListener("piclaw:open-settings",i)},[]),!n)return null;return s`<${I_} className="settings-portal"><${dr} onClose=${()=>r(!1)} /><//>`}function xg(n={}){O_(n)}var xr,zu=null,Sr,Jr,ds,es,Fu,as,ng,rg,ig,_g,cg,ug,fg,sg,gg,og,$g,lg,wg,yg,Hu;var Wu=O(()=>{e();on();Y_();fr();tc();xr=[];br("module-eval-start");br("imports-done");Sr=new Map,Jr=new Map;Sr.set("general",Mi);ds={general:()=>Promise.resolve(Mi),sessions:()=>Promise.resolve().then(() => (hc(),bc)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => (kc(),vc)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (Kc(),pc)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (Uc(),jc)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (qc(),Mc)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (Dc(),Ac)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (Lc(),Zc)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Yc(),Ic)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (_u(),iu)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (fu(),uu)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (tu(),yu)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (bu(),xu)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (vu(),hu)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (pu(),ku)).then((n)=>n.AddonsSection)},es={"editor-settings":()=>Promise.resolve().then(() => (Ku(),Cs)).then(()=>{}),developer:()=>Promise.resolve().then(() => (Bu(),Es)).then(()=>{})},Fu=new Set;as=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,ng=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,rg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,ig=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,_g=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,cg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,ug=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,fg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,sg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,gg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,og=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,$g=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,lg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,wg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,yg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,Hu=[{id:"general",label:"General",icon:as,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:ng,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:rg,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:ig,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:ug,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:_g,searchable:!1,order:15},{id:"environment",label:"Environment",icon:cg,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:fg,searchable:!1,order:20},{id:"models",label:"Models",icon:sg,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:gg,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:og,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:lg,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:wg,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:$g,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:yg,searchable:!0,placeholder:"Filter add-ons…",order:90}]});e();Wu();fr();var hg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function vg({label:n,body:r,filter:i=""}){return s`
    <div class="settings-section">
      <h3>${n}</h3>
      <p class="settings-hint">Mock add-on pane rendered by the settings widget fixture.</p>
      <div class="settings-addon-grid">
        ${["Credentials","Routes","Runtime options"].filter((_)=>!i||_.toLowerCase().includes(String(i).toLowerCase())).map((_)=>s`
          <div class="settings-addon-card">
            <div class="settings-addon-card-header">
              <div>
                <div class="settings-addon-name">${_}</div>
                <div class="settings-addon-subtitle">${r}</div>
              </div>
              <span class="settings-addon-enabled">fixture</span>
            </div>
            <div class="settings-row settings-row-vertical">
              <label>Mock field</label>
              <input type="text" value=${`${n.toLowerCase().replace(/\s+/g,"-")}:${_.toLowerCase().replace(/\s+/g,"-")}`} readonly />
            </div>
          </div>
        `)}
      </div>
    </div>
  `}function kg(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let r of n)Cn({id:r.id,label:r.label,icon:hg,searchable:!0,searchPlaceholder:`Filter ${r.label} settings…`,order:r.id==="fixture-z-observability"?1:999,component:(i)=>s`<${vg} label=${r.label} body=${r.body} filter=${i?.filter||""} />`})}var bn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},pg={current:bn.current,models:bn.models,model_options:bn.model_options,thinking_level:bn.thinking_level,supports_thinking:bn.supports_thinking,available_thinking_levels:bn.available_thinking_levels},Ru={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},ju={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},rr=new URLSearchParams(window.location.search).get("real")!=="1",Uu=window.fetch.bind(window);function xn(n,r=200){return new Response(JSON.stringify(n),{status:r,headers:{"Content-Type":"application/json"}})}function Kg(){window.fetch=async(n,r)=>{let i=new URL(typeof n==="string"?n:n.url,window.location.href),_=String(r?.method||"GET").toUpperCase();if(!rr)return Uu(n,r);if(i.pathname==="/agent/settings-data")return xn(bn);if(i.pathname==="/agent/models")return xn(pg);if(i.pathname==="/agent/addons")return xn(Ru);if(i.pathname.startsWith("/agent/addons/"))return xn({ok:!0,message:"Fixture add-on action accepted.",...Ru});if(i.pathname==="/agent/keychain"){if(_==="GET")return xn(ju);if(_==="POST")return xn({ok:!0,...ju})}if(i.pathname==="/agent/settings/general")return xn({ok:!0,settings:bn});if(i.pathname==="/agent/settings/widget-token/regenerate")return xn({ok:!0,settings:{...bn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(i.pathname.startsWith("/agent/default/message"))return xn({command:{status:"success",message:"Fixture command accepted."}});if(i.pathname.startsWith("/agent/settings/"))return xn({ok:!0,settings:bn,items:[],entries:[]});if(i.pathname==="/agent/client-perf")return xn({ok:!0});return Uu(n,r)}}function Bg(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function Pu(n){try{window.__piclawSettingsRequestedSection=n}catch(r){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function zg(){let n=new URLSearchParams(window.location.search),[r,i]=y(n.get("section")||"general"),[_,c]=y(Number(n.get("width")||900)),[u,f]=y(Number(n.get("height")||640)),[g,$]=y(rr),[o,x]=y(0),l=Y(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),b=j((k)=>{i(k),Pu(k)},[]),h=j(()=>{rr=!rr,$(rr),x((k)=>k+1)},[]);return s`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${r} onChange=${(k)=>b(k.target.value)}>${l.map((k)=>s`<option value=${k}>${k}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${_} onInput=${(k)=>c(Number(k.target.value))} /> ${_}px</label>
        <label>Height <input type="range" min="420" max="900" value=${u} onInput=${(k)=>f(Number(k.target.value))} /> ${u}px</label>
        <button type="button" onClick=${h}>${g?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>x((k)=>k+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${_}px;--fixture-height:${u}px;`}>
        <${dr} key=${o} onClose=${()=>{}} />
      </div>
    </div>
  `}function Fg(){kg(),Kg(),Bg();let n=new URLSearchParams(window.location.search);Pu(n.get("section")||"general");let r=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));r.id="settings-widget-fixture-root",Ln(s`<${zg} />`,r),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:rr})}Fg();

//# debugId=18B33D89B1B328B164756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
