var Vu=Object.defineProperty;var Nu=(n)=>n;function Xu(n,i){this[n]=Nu.bind(null,i)}var un=(n,i)=>{for(var r in i)Vu(n,r,{get:i[r],enumerable:!0,configurable:!0,set:Xu.bind(i,r)})};var O=(n,i)=>()=>(n&&(i=n(n=0)),i);var Su={};un(Su,{useState:()=>w,useRef:()=>J,useReducer:()=>X_,useMemo:()=>L,useLayoutEffect:()=>Ti,useImperativeHandle:()=>Yu,useErrorBoundary:()=>Ju,useEffect:()=>t,useDebugValue:()=>Cu,useContext:()=>Lu,useCallback:()=>G,render:()=>In,html:()=>s,h:()=>sr,createContext:()=>Iu,Component:()=>ci});function Kn(n,i){for(var r in i)n[r]=i[r];return n}function fr(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function sr(n,i,r){var _,c,u,f={};for(u in i)u=="key"?_=i[u]:u=="ref"?c=i[u]:f[u]=i[u];if(arguments.length>2&&(f.children=arguments.length>3?ji.call(arguments,2):r),typeof n=="function"&&n.defaultProps!=null)for(u in n.defaultProps)f[u]===void 0&&(f[u]=n.defaultProps[u]);return Bi(n,f,_,c,null)}function Bi(n,i,r,_,c){var u={type:n,props:i,key:r,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c==null?++z_:c,__i:-1,__u:0};return c==null&&e.vnode!=null&&e.vnode(u),u}function Gi(n){return n.children}function ci(n,i){this.props=n,this.context=i}function Zn(n,i){if(i==null)return n.__?Zn(n.__,n.__i+1):null;for(var r;i<n.__k.length;i++)if((r=n.__k[i])!=null&&r.__e!=null)return r.__e;return typeof n.type=="function"?Zn(n):null}function tu(n){if(n.__P&&n.__d){var i=n.__v,r=i.__e,_=[],c=[],u=Kn({},i);u.__v=i.__v+1,e.vnode&&e.vnode(u),$r(n.__P,u,i,n.__n,n.__P.namespaceURI,32&i.__u?[r]:null,_,r==null?Zn(i):r,!!(32&i.__u),c),u.__v=i.__v,u.__.__k[u.__i]=u,P_(_,u,c),i.__e=i.__=null,u.__e!=r&&U_(u)}}function U_(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(i){if(i!=null&&i.__e!=null)return n.__e=n.__c.base=i.__e}),U_(n)}function rr(n){(!n.__d&&(n.__d=!0)&&Wn.push(n)&&!Wi.__r++||o_!=e.debounceRendering)&&((o_=e.debounceRendering)||H_)(Wi)}function Wi(){try{for(var n,i=1;Wn.length;)Wn.length>i&&Wn.sort(F_),n=Wn.shift(),i=Wn.length,tu(n)}finally{Wn.length=Wi.__r=0}}function G_(n,i,r,_,c,u,f,$,l,g,x){var o,v,K,B,k,H,y,p=_&&_.__k||Fi,V=i.length;for(l=qu(r,i,p,l,V),o=0;o<V;o++)(K=r.__k[o])!=null&&(v=K.__i!=-1&&p[K.__i]||Hi,K.__i=o,H=$r(n,K,v,c,u,f,$,l,g,x),B=K.__e,K.ref&&v.ref!=K.ref&&(v.ref&&gr(v.ref,null,K),x.push(K.ref,K.__c||B,K)),k==null&&B!=null&&(k=B),(y=!!(4&K.__u))||v.__k===K.__k?(l=T_(K,l,n,y),y&&v.__e&&(v.__e=null)):typeof K.type=="function"&&H!==void 0?l=H:B&&(l=B.nextSibling),K.__u&=-7);return r.__e=k,l}function qu(n,i,r,_,c){var u,f,$,l,g,x=r.length,o=x,v=0;for(n.__k=Array(c),u=0;u<c;u++)(f=i[u])!=null&&typeof f!="boolean"&&typeof f!="function"?(typeof f=="string"||typeof f=="number"||typeof f=="bigint"||f.constructor==String?f=n.__k[u]=Bi(null,f,null,null,null):Ui(f)?f=n.__k[u]=Bi(Gi,{children:f},null,null,null):f.constructor===void 0&&f.__b>0?f=n.__k[u]=Bi(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):n.__k[u]=f,l=u+v,f.__=n,f.__b=n.__b+1,$=null,(g=f.__i=Au(f,r,l,o))!=-1&&(o--,($=r[g])&&($.__u|=2)),$==null||$.__v==null?(g==-1&&(c>x?v--:c<x&&v++),typeof f.type!="function"&&(f.__u|=4)):g!=l&&(g==l-1?v--:g==l+1?v++:(g>l?v--:v++,f.__u|=4))):n.__k[u]=null;if(o)for(u=0;u<x;u++)($=r[u])!=null&&(2&$.__u)==0&&($.__e==_&&(_=Zn($)),V_($,$));return _}function T_(n,i,r,_){var c,u;if(typeof n.type=="function"){for(c=n.__k,u=0;c&&u<c.length;u++)c[u]&&(c[u].__=n,i=T_(c[u],i,r,_));return i}n.__e!=i&&(_&&(i&&n.type&&!i.parentNode&&(i=Zn(n)),r.insertBefore(n.__e,i||null)),i=n.__e);do i=i&&i.nextSibling;while(i!=null&&i.nodeType==8);return i}function Au(n,i,r,_){var c,u,f,$=n.key,l=n.type,g=i[r],x=g!=null&&(2&g.__u)==0;if(g===null&&$==null||x&&$==g.key&&l==g.type)return r;if(_>(x?1:0)){for(c=r-1,u=r+1;c>=0||u<i.length;)if((g=i[f=c>=0?c--:u++])!=null&&(2&g.__u)==0&&$==g.key&&l==g.type)return f}return-1}function l_(n,i,r){i[0]=="-"?n.setProperty(i,r==null?"":r):n[i]=r==null?"":typeof r!="number"||Mu.test(i)?r:r+"px"}function Ki(n,i,r,_,c){var u,f;n:if(i=="style")if(typeof r=="string")n.style.cssText=r;else{if(typeof _=="string"&&(n.style.cssText=_=""),_)for(i in _)r&&i in r||l_(n.style,i,"");if(r)for(i in r)_&&r[i]==_[i]||l_(n.style,i,r[i])}else if(i[0]=="o"&&i[1]=="n")u=i!=(i=i.replace(W_,"$1")),f=i.toLowerCase(),i=f in n||i=="onFocusOut"||i=="onFocusIn"?f.slice(2):i.slice(2),n.l||(n.l={}),n.l[i+u]=r,r?_?r[_i]=_[_i]:(r[_i]=ur,n.addEventListener(i,u?ir:nr,u)):n.removeEventListener(i,u?ir:nr,u);else{if(c=="http://www.w3.org/2000/svg")i=i.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(i!="width"&&i!="height"&&i!="href"&&i!="list"&&i!="form"&&i!="tabIndex"&&i!="download"&&i!="rowSpan"&&i!="colSpan"&&i!="role"&&i!="popover"&&i in n)try{n[i]=r==null?"":r;break n}catch($){}typeof r=="function"||(r==null||r===!1&&i[4]!="-"?n.removeAttribute(i):n.setAttribute(i,i=="popover"&&r==1?"":r))}}function w_(n){return function(i){if(this.l){var r=this.l[i.type+n];if(i[hi]==null)i[hi]=ur++;else if(i[hi]<r[_i])return;return r(e.event?e.event(i):i)}}}function $r(n,i,r,_,c,u,f,$,l,g){var x,o,v,K,B,k,H,y,p,V,T,j,P,z,R,h=i.type;if(i.constructor!==void 0)return null;128&r.__u&&(l=!!(32&r.__u),u=[$=i.__e=r.__e]),(x=e.__b)&&x(i);n:if(typeof h=="function")try{if(y=i.props,p=h.prototype&&h.prototype.render,V=(x=h.contextType)&&_[x.__c],T=x?V?V.props.value:x.__:_,r.__c?H=(o=i.__c=r.__c).__=o.__E:(p?i.__c=o=new h(y,T):(i.__c=o=new ci(y,T),o.constructor=h,o.render=Du),V&&V.sub(o),o.state||(o.state={}),o.__n=_,v=o.__d=!0,o.__h=[],o._sb=[]),p&&o.__s==null&&(o.__s=o.state),p&&h.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=Kn({},o.__s)),Kn(o.__s,h.getDerivedStateFromProps(y,o.__s))),K=o.props,B=o.state,o.__v=i,v)p&&h.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),p&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(p&&h.getDerivedStateFromProps==null&&y!==K&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(y,T),i.__v==r.__v||!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(y,o.__s,T)===!1){i.__v!=r.__v&&(o.props=y,o.state=o.__s,o.__d=!1),i.__e=r.__e,i.__k=r.__k,i.__k.some(function(b){b&&(b.__=i)}),Fi.push.apply(o.__h,o._sb),o._sb=[],o.__h.length&&f.push(o);break n}o.componentWillUpdate!=null&&o.componentWillUpdate(y,o.__s,T),p&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(K,B,k)})}if(o.context=T,o.props=y,o.__P=n,o.__e=!1,j=e.__r,P=0,p)o.state=o.__s,o.__d=!1,j&&j(i),x=o.render(o.props,o.state,o.context),Fi.push.apply(o.__h,o._sb),o._sb=[];else do o.__d=!1,j&&j(i),x=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++P<25);o.state=o.__s,o.getChildContext!=null&&(_=Kn(Kn({},_),o.getChildContext())),p&&!v&&o.getSnapshotBeforeUpdate!=null&&(k=o.getSnapshotBeforeUpdate(K,B)),z=x!=null&&x.type===Gi&&x.key==null?R_(x.props.children):x,$=G_(n,Ui(z)?z:[z],i,r,_,c,u,f,$,l,g),o.base=i.__e,i.__u&=-161,o.__h.length&&f.push(o),H&&(o.__E=o.__=null)}catch(b){if(i.__v=null,l||u!=null)if(b.then){for(i.__u|=l?160:128;$&&$.nodeType==8&&$.nextSibling;)$=$.nextSibling;u[u.indexOf($)]=null,i.__e=$}else{for(R=u.length;R--;)fr(u[R]);_r(i)}else i.__e=r.__e,i.__k=r.__k,b.then||_r(i);e.__e(b,i,r)}else u==null&&i.__v==r.__v?(i.__k=r.__k,i.__e=r.__e):$=i.__e=Zu(r.__e,i,r,_,c,u,f,l,g);return(x=e.diffed)&&x(i),128&i.__u?void 0:$}function _r(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(_r))}function P_(n,i,r){for(var _=0;_<r.length;_++)gr(r[_],r[++_],r[++_]);e.__c&&e.__c(i,n),n.some(function(c){try{n=c.__h,c.__h=[],n.some(function(u){u.call(c)})}catch(u){e.__e(u,c.__v)}})}function R_(n){return typeof n!="object"||n==null||n.__b>0?n:Ui(n)?n.map(R_):n.constructor!==void 0?null:Kn({},n)}function Zu(n,i,r,_,c,u,f,$,l){var g,x,o,v,K,B,k,H=r.props||Hi,y=i.props,p=i.type;if(p=="svg"?c="http://www.w3.org/2000/svg":p=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),u!=null){for(g=0;g<u.length;g++)if((K=u[g])&&"setAttribute"in K==!!p&&(p?K.localName==p:K.nodeType==3)){n=K,u[g]=null;break}}if(n==null){if(p==null)return document.createTextNode(y);n=document.createElementNS(c,p,y.is&&y),$&&(e.__m&&e.__m(i,u),$=!1),u=null}if(p==null)H===y||$&&n.data==y||(n.data=y);else{if(u=p=="textarea"&&y.defaultValue!=null?null:u&&ji.call(n.childNodes),!$&&u!=null)for(H={},g=0;g<n.attributes.length;g++)H[(K=n.attributes[g]).name]=K.value;for(g in H)K=H[g],g=="dangerouslySetInnerHTML"?o=K:g=="children"||(g in y)||g=="value"&&("defaultValue"in y)||g=="checked"&&("defaultChecked"in y)||Ki(n,g,null,K,c);for(g in y)K=y[g],g=="children"?v=K:g=="dangerouslySetInnerHTML"?x=K:g=="value"?B=K:g=="checked"?k=K:$&&typeof K!="function"||H[g]===K||Ki(n,g,K,H[g],c);if(x)$||o&&(x.__html==o.__html||x.__html==n.innerHTML)||(n.innerHTML=x.__html),i.__k=[];else if(o&&(n.innerHTML=""),G_(i.type=="template"?n.content:n,Ui(v)?v:[v],i,r,_,p=="foreignObject"?"http://www.w3.org/1999/xhtml":c,u,f,u?u[0]:r.__k&&Zn(r,0),$,l),u!=null)for(g=u.length;g--;)fr(u[g]);$&&p!="textarea"||(g="value",p=="progress"&&B==null?n.removeAttribute("value"):B!=null&&(B!==n[g]||p=="progress"&&!B||p=="option"&&B!=H[g])&&Ki(n,g,B,H[g],c),g="checked",k!=null&&k!=n[g]&&Ki(n,g,k,H[g],c))}return n}function gr(n,i,r){try{if(typeof n=="function"){var _=typeof n.__u=="function";_&&n.__u(),_&&i==null||(n.__u=n(i))}else n.current=i}catch(c){e.__e(c,r)}}function V_(n,i,r){var _,c;if(e.unmount&&e.unmount(n),(_=n.ref)&&(_.current&&_.current!=n.__e||gr(_,null,i)),(_=n.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(u){e.__e(u,i)}_.base=_.__P=null}if(_=n.__k)for(c=0;c<_.length;c++)_[c]&&V_(_[c],i,r||typeof n.type!="function");r||fr(n.__e),n.__c=n.__=n.__e=void 0}function Du(n,i,r){return this.constructor(n,r)}function In(n,i,r){var _,c,u,f;i==document&&(i=document.documentElement),e.__&&e.__(n,i),c=(_=typeof r=="function")?null:r&&r.__k||i.__k,u=[],f=[],$r(i,n=(!_&&r||i).__k=sr(Gi,null,[n]),c||Hi,Hi,i.namespaceURI,!_&&r?[r]:c?null:i.firstChild?ji.call(i.childNodes):null,u,!_&&r?r:c?c.__e:i.firstChild,_,f),P_(u,n,f)}function Iu(n){function i(r){var _,c;return this.getChildContext||(_=new Set,(c={})[i.__c]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){_=null},this.shouldComponentUpdate=function(u){this.props.value!=u.value&&_.forEach(function(f){f.__e=!0,rr(f)})},this.sub=function(u){_.add(u);var f=u.componentWillUnmount;u.componentWillUnmount=function(){_&&_.delete(u),f&&f.call(u)}}),r.children}return i.__c="__cC"+j_++,i.__=n,i.Provider=i.__l=(i.Consumer=function(r,_){return r.children(_)}).contextType=i,i}function Yn(n,i){a.__h&&a.__h(S,n,Dn||i),Dn=0;var r=S.__H||(S.__H={__:[],__h:[]});return n>=r.__.length&&r.__.push({}),r.__[n]}function w(n){return Dn=1,X_(Q_,n)}function X_(n,i,r){var _=Yn(jn++,2);if(_.t=n,!_.__c&&(_.__=[r?r(i):Q_(void 0,i),function($){var l=_.__N?_.__N[0]:_.__[0],g=_.t(l,$);l!==g&&(_.__N=[g,_.__[1]],_.__c.setState({}))}],_.__c=S,!S.__f)){var c=function($,l,g){if(!_.__c.__H)return!0;var x=_.__c.__H.__.filter(function(v){return v.__c});if(x.every(function(v){return!v.__N}))return!u||u.call(this,$,l,g);var o=_.__c.props!==$;return x.some(function(v){if(v.__N){var K=v.__[0];v.__=v.__N,v.__N=void 0,K!==v.__[0]&&(o=!0)}}),u&&u.call(this,$,l,g)||o};S.__f=!0;var{shouldComponentUpdate:u,componentWillUpdate:f}=S;S.componentWillUpdate=function($,l,g){if(this.__e){var x=u;u=void 0,c($,l,g),u=x}f&&f.call(this,$,l,g)},S.shouldComponentUpdate=c}return _.__N||_.__}function t(n,i){var r=Yn(jn++,3);!a.__s&&or(r.__H,i)&&(r.__=n,r.u=i,S.__H.__h.push(r))}function Ti(n,i){var r=Yn(jn++,4);!a.__s&&or(r.__H,i)&&(r.__=n,r.u=i,S.__h.push(r))}function J(n){return Dn=5,L(function(){return{current:n}},[])}function Yu(n,i,r){Dn=6,Ti(function(){if(typeof n=="function"){var _=n(i());return function(){n(null),_&&typeof _=="function"&&_()}}if(n)return n.current=i(),function(){return n.current=null}},r==null?r:r.concat(n))}function L(n,i){var r=Yn(jn++,7);return or(r.__H,i)&&(r.__=n(),r.__H=i,r.__h=n),r.__}function G(n,i){return Dn=8,L(function(){return n},i)}function Lu(n){var i=S.context[n.__c],r=Yn(jn++,9);return r.c=n,i?(r.__==null&&(r.__=!0,i.sub(S)),i.props.value):n.__}function Cu(n,i){a.useDebugValue&&a.useDebugValue(i?i(n):n)}function Ju(n){var i=Yn(jn++,10),r=w();return i.__=n,S.componentDidCatch||(S.componentDidCatch=function(_,c){i.__&&i.__(_,c),r[1](_)}),[r[0],function(){r[1](void 0)}]}function Ou(){for(var n;n=N_.shift();){var i=n.__H;if(n.__P&&i)try{i.__h.some(zi),i.__h.some(cr),i.__h=[]}catch(r){i.__h=[],a.__e(r,n.__v)}}}function Eu(n){var i,r=function(){clearTimeout(_),h_&&cancelAnimationFrame(i),setTimeout(n)},_=setTimeout(r,35);h_&&(i=requestAnimationFrame(r))}function zi(n){var i=S,r=n.__c;typeof r=="function"&&(n.__c=void 0,r()),S=i}function cr(n){var i=S;n.__c=n.__(),S=i}function or(n,i){return!n||n.length!==i.length||i.some(function(r,_){return r!==n[_]})}function Q_(n,i){return typeof i=="function"?i(n):i}function du(n){var i=B_.get(this);return i||(i=new Map,B_.set(this,i)),(i=M_(this,i.get(n)||(i.set(n,i=function(r){for(var _,c,u=1,f="",$="",l=[0],g=function(v){u===1&&(v||(f=f.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,v,f):u===3&&(v||f)?(l.push(3,v,f),u=2):u===2&&f==="..."&&v?l.push(4,v,0):u===2&&f&&!v?l.push(5,0,!0,f):u>=5&&((f||!v&&u===5)&&(l.push(u,0,f,c),u=6),v&&(l.push(u,v,0,c),u=6)),f=""},x=0;x<r.length;x++){x&&(u===1&&g(),g(x));for(var o=0;o<r[x].length;o++)_=r[x][o],u===1?_==="<"?(g(),l=[l],u=3):f+=_:u===4?f==="--"&&_===">"?(u=1,f=""):f=_+f[0]:$?_===$?$="":f+=_:_==='"'||_==="'"?$=_:_===">"?(g(),u=1):u&&(_==="="?(u=5,c=f,f=""):_==="/"&&(u<5||r[x][o+1]===">")?(g(),u===3&&(l=l[0]),u=l,(l=l[0]).push(2,0,u),u=0):_===" "||_==="\t"||_===`
`||_==="\r"?(g(),u=2):f+=_),u===3&&f==="!--"&&(u=4,l=l[0])}return g(),l}(n)),i),arguments,[])).length>1?i:i[0]}var ji,e,z_,Qu,Wn,o_,H_,F_,mi,hi,_i,W_,ur,nr,ir,j_,Hi,Fi,Mu,Ui,jn,S,ai,y_,Dn=0,N_,a,x_,b_,v_,k_,p_,K_,h_,M_=function(n,i,r,_){var c;i[0]=0;for(var u=1;u<i.length;u++){var f=i[u++],$=i[u]?(i[0]|=f?1:2,r[i[u++]]):i[++u];f===3?_[0]=$:f===4?_[1]=Object.assign(_[1]||{},$):f===5?(_[1]=_[1]||{})[i[++u]]=$:f===6?_[1][i[++u]]+=$+"":f?(c=n.apply($,M_(n,$,r,["",null])),_.push(c),$[0]?i[0]|=2:(i[u-2]=0,i[u]=c)):_.push($)}return _},B_,s;var m=O(()=>{Hi={},Fi=[],Mu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ui=Array.isArray;ji=Fi.slice,e={__e:function(n,i,r,_){for(var c,u,f;i=i.__;)if((c=i.__c)&&!c.__)try{if((u=c.constructor)&&u.getDerivedStateFromError!=null&&(c.setState(u.getDerivedStateFromError(n)),f=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(n,_||{}),f=c.__d),f)return c.__E=c}catch($){n=$}throw n}},z_=0,Qu=function(n){return n!=null&&n.constructor===void 0},ci.prototype.setState=function(n,i){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Kn({},this.state),typeof n=="function"&&(n=n(Kn({},r),this.props)),n&&Kn(r,n),n!=null&&this.__v&&(i&&this._sb.push(i),rr(this))},ci.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),rr(this))},ci.prototype.render=Gi,Wn=[],H_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F_=function(n,i){return n.__v.__b-i.__v.__b},Wi.__r=0,mi=Math.random().toString(8),hi="__d"+mi,_i="__a"+mi,W_=/(PointerCapture)$|Capture$/i,ur=0,nr=w_(!1),ir=w_(!0),j_=0;N_=[],a=e,x_=a.__b,b_=a.__r,v_=a.diffed,k_=a.__c,p_=a.unmount,K_=a.__;a.__b=function(n){S=null,x_&&x_(n)},a.__=function(n,i){n&&i.__k&&i.__k.__m&&(n.__m=i.__k.__m),K_&&K_(n,i)},a.__r=function(n){b_&&b_(n),jn=0;var i=(S=n.__c).__H;i&&(ai===S?(i.__h=[],S.__h=[],i.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(i.__h.some(zi),i.__h.some(cr),i.__h=[],jn=0)),ai=S},a.diffed=function(n){v_&&v_(n);var i=n.__c;i&&i.__H&&(i.__H.__h.length&&(N_.push(i)!==1&&y_===a.requestAnimationFrame||((y_=a.requestAnimationFrame)||Eu)(Ou)),i.__H.__.some(function(r){r.u&&(r.__H=r.u),r.u=void 0})),ai=S=null},a.__c=function(n,i){i.some(function(r){try{r.__h.some(zi),r.__h=r.__h.filter(function(_){return!_.__||cr(_)})}catch(_){i.some(function(c){c.__h&&(c.__h=[])}),i=[],a.__e(_,r.__v)}}),k_&&k_(n,i)},a.unmount=function(n){p_&&p_(n);var i,r=n.__c;r&&r.__H&&(r.__H.__.some(function(_){try{zi(_)}catch(c){i=c}}),r.__H=void 0,i&&a.__e(i,r.__v))};h_=typeof requestAnimationFrame=="function";B_=new Map;s=du.bind(sr)});function Un(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function sn(n,i){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,i)}catch{return}}function lr(n,i=!1){let r=Un(n);if(r===null)return i;return r==="true"}function wr(n,i=null){let r=Un(n);if(r===null)return i;let _=parseInt(r,10);return Number.isFinite(_)?_:i}function t_(n){let i=Un(n);if(!i)return null;try{return JSON.parse(i)}catch{return null}}function Ri(n){let i=String(n??"").trim().toLowerCase().replace(/_/g,"-");if(!i)return Ln;if(i==="zh-cn"||i==="zh"||i==="zh-hans"||i.startsWith("zh-hans"))return"zh-CN";if(i==="ja"||i.startsWith("ja-"))return"ja";if(i==="en"||i.startsWith("en-"))return"en";return Ln}function nf(){if(typeof navigator>"u")return Ln;let n=[...Array.isArray(navigator.languages)?navigator.languages:[],navigator.language].filter((i)=>typeof i==="string"&&i.length>0);for(let i of n){let r=Ri(i);if(r!==Ln)return r}return Ln}function rf(){let n=Un(Z_);if(n)return Ri(n);return nf()}function _f(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(yr,{detail:{locale:n}}))}function Pi(){if(!xr)cf();return Rn}function cf(){return Rn=rf(),xr=!0,Rn}function uf(n,i={}){let r=Ri(n);if(xr=!0,r===Rn&&i.persist===!1)return Rn;if(Rn=r,i.persist!==!1)sn(Z_,r);return _f(r),Rn}function ff(n,i){if(!i)return n;return n.replace(/\{(\w+)\}/g,(r,_)=>{let c=i[_];return c===void 0||c===null?r:String(c)})}function I_(n,i,r=Pi()){let c=au[r]?.[n]??D_[n]??n;return ff(c,i)}function Gn(n,i){return I_(n,i)}function sf(){let[n,i]=w(Pi());return t(()=>{if(typeof window>"u"||typeof window.addEventListener!=="function")return;let r=(_)=>{let c=_.detail,u=Ri(c?.locale??Pi());i(u)};return window.addEventListener(yr,r),i(Pi()),()=>window.removeEventListener(yr,r)},[]),[n,(r)=>uf(r)]}function C(){let[n,i]=sf();return{locale:n,setLocale:i,t:(r,_)=>I_(r,_,n)}}var Ln="en",q_,A_,Z_="piclaw_locale",yr="piclaw-locale-change",D_,eu,mu,au,Rn,xr=!1;var fn=O(()=>{m();q_=["en","zh-CN","ja"],A_={en:"English","zh-CN":"简体中文",ja:"日本語"},D_={"compose.placeholder":"Message (Enter to send, Shift+Enter for newline)...","compose.send":"Send","compose.stop":"Stop","compose.searchPlaceholder":"Search (Enter to run)...","compose.clearAll":"Clear all","compose.clearAllTitle":"Clear all attachments and references","compose.scope":"Scope","compose.searchScope":"Search scope","compose.scopeCurrent":"Current","compose.scopeBranchFamily":"Branch family","compose.scopeAll":"All chats","compose.filterImages":"Images","compose.filterAttachments":"Attachments","compose.search":"Search","compose.closeSearch":"Close search","compose.shareLocation":"Share location","compose.attachFile":"Attach file","compose.queueControls":"Queued follow-up controls","compose.moveUp":"Move up","compose.moveUpQueue":"Move up in queue","compose.moveDown":"Move down","compose.moveDownQueue":"Move down in queue","compose.editInCompose":"Edit in compose","compose.returnToEditor":"Return queued message to editor","compose.injectSteer":"Inject queued follow-up as steer","compose.steer":"Steer","compose.cancelQueued":"Cancel queued message","compose.resizeInput":"Resize message input","compose.resizeInputHint":"Drag to resize message input","compose.modelPicker":"Model picker","compose.sessionsAndAgents":"Sessions and agents","compose.openModelPicker":"Open model picker","compose.newBranchTitle":"Create a new branch from this chat","compose.newRootTitle":"Create a clean root session such as web:ops","compose.renameSessionTitle":"Rename the current session","compose.pruneSessionTitle":"Delete (prune) current agent/session branch","compose.filterImagesTitle":"Only show messages with images","compose.filterAttachmentsTitle":"Only show messages with attachments","compose.selectModel":"Select model","compose.loadingModels":"Loading models…","compose.noModels":"No models available.","compose.nextModel":"Next model","compose.manageSessions":"Manage sessions & agents","compose.noSessions":"No other sessions yet.","compose.newBranch":"New branch","compose.newRoot":"New root…","compose.mergeCurrent":"Merge current w/ parent","compose.renameCurrent":"Rename current…","compose.deleteCurrent":"Delete current…","compose.mergeInto":"Merge this branch into {target}","compose.mergeBlocked":"This branch cannot be merged while active or while it has children","workspace.title":"Workspace","workspace.newFile":"New file","workspace.refresh":"Refresh","workspace.actions":"Workspace actions","workspace.uploadFiles":"Upload files","workspace.reindexing":"Reindexing workspace…","workspace.deleteFile":"Delete file","workspace.download":"Download","workspace.uploadToFolder":"Upload files to this folder","workspace.addFolderHint":"Add folder hint to compose","workspace.downloadZip":"Download folder as zip","workspace.openInTab":"Open in tab","workspace.openInEditor":"Open in editor","workspace.renameSelected":"Rename selected","workspace.downloadSelectedFile":"Download selected file","workspace.downloadSelectedFolder":"Download selected folder (zip)","workspace.deleteSelectedFile":"Delete selected file","shell.settings":"Settings","shell.newChat":"New chat","shell.connecting":"Connecting…","shell.connected":"Connected","language.label":"Language","settings.title":"Settings","settings.close":"Close (Esc)","settings.filter":"Filter…","settings.loading":"Loading settings…","settings.section.general":"General","settings.section.sessions":"Sessions","settings.section.recordings":"Recordings","settings.section.compaction":"Compaction","settings.section.keyboard":"Keyboard","settings.section.workspace":"Workspace","settings.section.environment":"Environment","settings.section.providers":"Providers","settings.section.models":"Models","settings.section.theme":"Appearance","settings.section.scheduled-tasks":"Scheduled Tasks","settings.section.quick-actions":"Quick Actions","settings.section.keychain":"Keychain","settings.section.tools":"Tools","settings.section.addons":"Add-ons","settings.placeholder.recordings":"Filter recordings…","settings.placeholder.keyboard":"Filter shortcuts…","settings.placeholder.environment":"Filter environment…","settings.placeholder.models":"Filter models…","settings.placeholder.scheduled-tasks":"Filter scheduled tasks…","settings.placeholder.quick-actions":"Filter quick actions…","settings.placeholder.keychain":"Filter entries…","settings.placeholder.tools":"Filter tools…","settings.placeholder.addons":"Filter add-ons…","preview.close":"Close","preview.loading":"Loading preview…","preview.files":"Files","preview.folders":"Folders","preview.compressed":"Compressed","preview.uncompressed":"Uncompressed","preview.name":"Name","preview.type":"Type","preview.method":"Method","preview.size":"Size","post.deleteMessage":"Delete message","post.tooLarge":"Message too large to display.","post.previewTruncated":"Preview truncated.","post.submitted":"Submitted","post.discard":"Discard","post.save":"Save","post.cancel":"Cancel","post.addNote":"Add note","post.addNotePlaceholder":"Add a note…","tab.close":"Close","tab.closeOthers":"Close Others","tab.closeAll":"Close All","tab.reattach":"Reattach","tab.openInWindow":"Open in Window","tab.openInNewTab":"Open in New Tab","tab.pinned":"Pinned","tab.detached":"Detached","tab.openSeparateWindow":"Open in separate window","status.trackedVariables":"Tracked variables","status.attachToSession":"Attach to session","status.files":"Files","status.proposedDiff":"Proposed diff","status.copyTmux":"Copy tmux command","status.experimentDuration":"Experiment duration","status.sinceLastActivity":"Since last activity","annotator.title":"Annotate image","annotator.typeLabel":"Type label…","annotator.undo":"Undo","annotator.resetZoom":"Reset zoom","tree.filter":"Filter…","tree.sessionTree":"Session tree","btw.label":"BTW side conversation","btw.close":"Close BTW","btw.thinking":"Thinking","mdpreview.close":"Close preview","mdpreview.unavailable":"Preview unavailable","widget.close":"Close widget","oobe.gettingStarted":"Getting started","oobe.needsSetupTitle":"Instance needs setup","oobe.configuredTitle":"Instance is configured","oobe.needsSetupBody":"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.","oobe.configuredBody":"This instance looks configured. Review or update provider and model settings in Settings.","oobe.openSettings":"Open Settings","oobe.dismiss":"Dismiss","oobe.done":"Done","palette.placeholder":"Type to jump to an agent, workspace action, or slash command…","palette.hideWorkspace":"Hide workspace","palette.showWorkspace":"Show workspace","palette.hideWorkspaceDesc":"Hide the workspace sidebar.","palette.showWorkspaceDesc":"Show the workspace sidebar.","palette.exitChatOnly":"Exit chat-only mode","palette.chatOnly":"Chat-only mode","palette.exitChatOnlyDesc":"Return to the split workspace layout.","palette.chatOnlyDesc":"Switch to the chat-only layout.","palette.groupAgents":"Agents","palette.groupWorkspace":"Workspace","palette.groupSlash":"Slash commands","palette.hintMove":"Move","palette.hintSelect":"Select","palette.hintPopOut":"Pop out","palette.hintClose":"Close","settings.appliedNotice":"Settings applied. Changes take effect on the next turn.","settings.sessions.lifecycle":"Session Lifecycle","settings.sessions.autoRotate":"Auto-rotate sessions","settings.sessions.maxSize":"Max session size (MB)","settings.sessions.maxSizeAria":"max session size","settings.sessions.agentBehaviour":"Agent Behaviour","settings.sessions.toolBudget":"Tool use budget","settings.sessions.toolBudgetAria":"tool use budget","settings.sessions.toolBudgetHint":"max tool-call messages per turn","settings.sessions.isolation":"Session isolation","settings.sessions.isolationNone":"None — full cross-session visibility","settings.sessions.isolationSummary":"Summary — tools visible, no arguments","settings.sessions.isolationFull":"Full — sessions cannot see each other","settings.editor.heading":"Editor","settings.editor.vimMode":"Vim mode","settings.editor.showWhitespace":"Show whitespace","settings.editor.livePreview":"Markdown live preview","settings.editor.fontSize":"Font size (px)","settings.editor.fontSizeAria":"editor font size","settings.editor.fontFamily":"Font family","settings.editor.fontFamilyPlaceholder":"monospace (default)","settings.editor.localOnlyHint":"This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.","settings.appearance.syncing":"Syncing appearance…","settings.appearance.default":"Default","settings.appearance.autoLightDark":"auto (light/dark)","settings.appearance.tint":"Tint:","settings.appearance.clearTint":"Clear tint","settings.appearance.none":"none","settings.keyboard.heading":"Keyboard","settings.keyboard.hint1":"Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.","settings.keyboard.hint1b":"is reserved for dismiss/abort and cannot be rebound.","settings.keyboard.hint2mid":"and typing","settings.keyboard.hint2end":"outside the compose box open this pane.","settings.keyboard.resetAll":"Reset all to defaults","settings.keyboard.defaultColon":"Default:","settings.keyboard.save":"Save","settings.keyboard.defaultBtn":"Default","settings.keyboard.noMatch":"No shortcuts match this filter.","settings.keyboard.invalidShortcut":"Invalid shortcut: {token}. Escape is reserved and cannot be rebound.","settings.keyboard.saved":"Keyboard shortcuts saved.","settings.keyboard.resetOne":"Keyboard shortcut reset to default.","settings.keyboard.resetAllDone":"Keyboard shortcuts reset to defaults.","settings.workspace.serverApplied":"Workspace settings applied. Server-side limits affect new workspace requests immediately.","settings.workspace.browserApplied":"Browser workspace settings applied immediately in this tab.","settings.workspace.access":"Access","settings.workspace.enableTerminal":"Enable web terminal","settings.workspace.allowVnc":"Allow direct VNC targets","settings.workspace.accessHint":"Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.","settings.workspace.guardrails":"Server scan guardrails","settings.workspace.maxDepth":"Max tree depth","settings.workspace.maxDepthAria":"workspace tree max depth","settings.workspace.maxDepthHintPre":"caps all","settings.workspace.maxDepthHintPost":"requests","settings.workspace.maxEntries":"Max entries per scan","settings.workspace.maxEntriesAria":"workspace tree max entries","settings.workspace.maxEntriesHint":"truncate oversized tree walks earlier","settings.workspace.thisBrowser":"This browser","settings.workspace.refreshInterval":"Refresh interval (seconds)","settings.workspace.refreshIntervalAria":"workspace refresh interval","settings.workspace.folderDepth":"Folder preview scan depth","settings.workspace.folderDepthAria":"folder preview scan depth","settings.workspace.folderDepthHintPre":"set to","settings.workspace.folderDepthHintPost":"to disable folder size preview scans","settings.workspace.footerHint":"Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.","settings.models.thinkingLevel":"Thinking level","settings.models.noThinking":"Current model does not support thinking.","settings.models.thinkingLevelLabel":"Thinking level:","settings.models.loading":"Loading models…","settings.models.summary":"Model and provider names may wrap in narrow panes to avoid clipping.","settings.models.scopedOnly":"Scoped models only","settings.models.scopedCheckboxPre":"Use Pi","settings.models.scopedCheckboxPost":"for Piclaw model lists","settings.models.scopedHintPre":"Filters this picker and the","settings.models.scopedHintPost":"tool. TUI model selection remains unchanged.","settings.models.colModel":"Model","settings.models.colProvider":"Provider","settings.models.colContext":"Context","settings.models.colReasoning":"Reasoning","settings.models.noMatch":'No models match "{filter}"',"settings.tools.unavailable":"Tool data not available.","settings.tools.search":"Search","settings.tools.matchMode":"Match mode","settings.tools.orMode":"Any keyword (OR) — results match at least one search term","settings.tools.andMode":"All keywords (AND) — results must match every search term","settings.tools.colEnabled":"Enabled","settings.tools.colTool":"Tool","settings.tools.colCompact":"Compact","settings.tools.colKind":"Kind","settings.tools.colSummary":"Summary","settings.tools.colSource":"Source","settings.tools.disableCompaction":"Disable tool-result compaction for this tool","settings.tools.enableCompaction":"Enable tool-result compaction for this tool","settings.tools.noMatch":'No tools match "{filter}"',"settings.tools.footer":"Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; the “Compact” column controls tool-result compaction eligibility.","settings.environment.heading":"Environment","settings.environment.introPre":"Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to","settings.environment.introPost":", so subsequent tool calls inherit them.","settings.environment.refresh":"Refresh","settings.environment.addOverride":"Add override","settings.environment.valuePlaceholder":"value","settings.environment.save":"Save","settings.environment.countLine":"{count} variables visible • {overrides} overrides active • {keychain} keychain-injected variables hidden","settings.environment.overridden":"Overridden in KV","settings.environment.inherited":"Inherited from process environment","settings.environment.kindOverride":"override","settings.environment.kindProcess":"process","settings.environment.clear":"Clear","settings.environment.noMatch":'No environment variables match "{filter}".',"settings.environment.refreshedToast":"Environment refreshed.","settings.environment.savedToast":"Saved environment override for {name}.","settings.environment.clearedToast":"Cleared environment override for {name}.","settings.quickActions.loading":"Loading…","settings.quickActions.heading":"Timeline Quick Actions","settings.quickActions.intro":"Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.","settings.quickActions.enableAll":"Enable all","settings.quickActions.saving":"Saving…","settings.quickActions.saveApply":"Save & apply","settings.quickActions.workspaceCommands":"Workspace commands","settings.quickActions.noWorkspaceMatch":"No workspace commands match this filter.","settings.quickActions.slashCommands":"Slash commands","settings.quickActions.slashFallback":"slash command","settings.quickActions.noSlashMatch":"No slash commands match this filter.","settings.quickActions.savingToast":"Saving quick actions…","settings.quickActions.savedToast":"Quick Actions saved.","settings.providers.authApiKey":"API key","settings.providers.authConfigured":"Configured","settings.providers.heading":"Providers","settings.providers.tagCustom":"Custom","settings.providers.logout":"Logout","settings.providers.reconfigure":"Reconfigure","settings.providers.setUp":"Set up","settings.providers.setupHint":"Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.","settings.providers.starting":"Starting…","settings.providers.signInOAuth":"Sign in with OAuth","settings.providers.apiKeyLabel":"API Key","settings.providers.apiKeyPlaceholder":"Enter API key","settings.providers.save":"Save","settings.providers.configuring":"Configuring…","settings.providers.saveConfig":"Save configuration","settings.providers.apiKeyEmpty":"API key cannot be empty.","settings.providers.configuringToast":"Configuring {provider}…","settings.providers.configured":"{provider} configured.","settings.providers.startingOAuth":"Starting OAuth for {provider}…","settings.providers.oauthOpened":"OAuth window opened. Complete the sign-in flow, then close this message.","settings.providers.oauthStarted":"OAuth flow started for {provider}. Check the chat.","settings.providers.loggingOut":"Logging out {provider}…","settings.providers.loggedOut":"Logged out {provider}. Restart may be needed.","settings.general.identity":"Identity","settings.general.userLabel":"User","settings.general.yourName":"Your name","settings.general.agentLabel":"Agent","settings.general.agentName":"Agent name","settings.general.notifications":"Notifications","settings.general.browserNotifications":"Browser notifications","settings.general.notifSecureHint":"Use the \uD83D\uDD14 bell button in the compose bar to enable/disable notifications. Web Push requires HTTPS or localhost.","settings.general.notifInsecureHint":"⚠ Not available — requires a secure context (HTTPS or localhost). Access via SSH tunnel or reverse proxy with TLS to enable.","settings.general.display":"Display","settings.general.systemMeters":"System meters","settings.general.systemMetersHint":"CPU/memory/network meters in the status bar. This browser only.","settings.general.instanceConfig":"Instance Configuration","settings.general.composeUpload":"Compose upload (MB)","settings.general.composeUploadAria":"compose upload limit","settings.general.composeUploadHint":"chat/media attachments","settings.general.workspaceUpload":"Workspace upload (MB)","settings.general.workspaceUploadAria":"workspace upload limit","settings.general.workspaceUploadHint":"defaults to 256 MB; chunked uploads allow up to 1 GB","settings.general.authentication":"Authentication","settings.general.widgetToken":"Widget bearer token","settings.general.token":"Token","settings.general.hideToken":"Hide token","settings.general.revealToken":"Reveal token","settings.general.copyToken":"Copy token","settings.general.copied":"Copied","settings.general.regenerating":"Regenerating…","settings.general.regenerate":"Regenerate","settings.general.tokenHintPre":"Read-only token for","settings.general.tokenHintMid":"and","settings.general.tokenHintPost":". Use as","settings.general.tokenHintEnd":".","settings.general.copyFailed":"Could not copy widget token. Select the token field and copy manually.","settings.general.regenConfirm":"Regenerate the widget token? Existing macOS widgets using the old token will stop updating.","settings.general.totpTitle":"TOTP setup QR","settings.general.totpConfiguredHint":"Current web-login authenticator secret. Scan this QR to add another authenticator device.","settings.general.totpUnconfiguredHint":"TOTP is not configured for this instance yet, so no setup QR is available.","settings.general.issuer":"Issuer","settings.general.label":"Label","settings.general.secret":"Secret","settings.general.avatarUpload":"Click to upload","settings.developer.heading":"Developer","settings.developer.devMode":"Developer mode","settings.developer.localHint":"This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.","settings.developer.addonSources":"Add-on Sources","settings.developer.catalogUrl":"Catalog URL","settings.developer.catalogHint":"Primary add-on catalog URL. Leave empty to use the default","settings.developer.additionalCatalogs":"Additional catalog URLs","settings.developer.additionalHint":"Fetched in addition to the primary/default catalog. One URL per line.","settings.developer.repoUrl":"Repo URL","settings.developer.repoHintPre":"Override the git repo used for","settings.developer.repoHintPost":"installs. Leave empty for default.","settings.developer.debug":"Debug","settings.developer.logSse":"Log SSE events","settings.developer.logToolCalls":"Log tool calls","settings.developer.debugHint":"Debug flags take effect on next page reload.","settings.addons.installing":"Installing {slug}…","settings.addons.removing":"Removing {slug}…","settings.addons.installedToast":"Add-on installed.","settings.addons.removedToast":"Add-on removed.","settings.addons.restarting":"Restarting piclaw…","settings.addons.restartComplete":"Restart complete — add-ons refreshed.","settings.addons.restartTimeout":"Backend did not return in time. Reload the page manually.","settings.addons.fetching":"Fetching add-ons…","settings.addons.loadFailed":"Could not load add-ons.","settings.addons.catalogFromPre":"Catalog from","settings.addons.catalogMerged":"{count} catalog sources merged.","settings.addons.installNote":"Package-first install via Bun; restart required after install/uninstall.","settings.addons.failedFetchSingular":"Failed to fetch {count} catalog source:","settings.addons.failedFetchPlural":"Failed to fetch {count} catalog sources:","settings.addons.activeSources":"Active catalog sources ({count})","settings.addons.windowsWarning":"Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.","settings.addons.typeExtSkill":"extension + skill","settings.addons.typeSkill":"skill","settings.addons.typeExt":"extension","settings.addons.update":"Update","settings.addons.remove":"Remove","settings.addons.install":"Install","settings.addons.noMatch":'No add-ons match "{filter}"',"settings.addons.restartNotice":"Extension changes are installed but inactive until piclaw restarts.","settings.addons.restartNow":"Restart Now","settings.recordings.modeFull":"full / trusted","settings.recordings.modeMetadata":"metadata only","settings.recordings.modeRedacted":"redacted","settings.recordings.selectPrompt":"Select a recording to inspect, replay, export, or delete it.","settings.recordings.playback":"Playback","settings.recordings.refresh":"Refresh","settings.recordings.delete":"Delete","settings.recordings.status":"Status","settings.recordings.mode":"Mode","settings.recordings.chat":"Chat","settings.recordings.started":"Started","settings.recordings.ended":"Ended","settings.recordings.events":"Events","settings.recordings.redactions":"Redactions","settings.recordings.exportJson":"Export JSON","settings.recordings.exportJsonl":"Export JSONL","settings.recordings.exportHtml":"Export standalone HTML","settings.recordings.eventSummary":"Event summary","settings.recordings.inspectHint":"Open or refresh details to inspect trace events.","settings.recordings.firstEvents":"First events","settings.recordings.heading":"Session Recording","settings.recordings.intro":"Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.","settings.recordings.chatJid":"Chat JID","settings.recordings.title":"Title","settings.recordings.titlePlaceholder":"Demo recording","settings.recordings.modeLabelField":"Mode","settings.recordings.optRedacted":"Redacted","settings.recordings.optMetadata":"Metadata only","settings.recordings.optFull":"Full / trusted local","settings.recordings.includeSnapshot":"Include timeline snapshot","settings.recordings.extraKeys":"Extra redacted keys","settings.recordings.extraPatterns":"Extra regex patterns","settings.recordings.stopCurrent":"Stop current chat recording","settings.recordings.start":"Start recording","settings.recordings.redactionPreview":"Redaction preview","settings.recordings.previewRedaction":"Preview redaction","settings.recordings.loading":"Loading recordings…","settings.recordings.noneYet":"No recordings yet.","settings.recordings.noneYetHint":"Start a recording above, then use playback/export for deterministic screen capture.","settings.recordings.listLabel":"Session recordings","settings.recordings.eventsCount":"{count} events","settings.recordings.noMatch":"No recordings match “{filter}”.","settings.recordings.startedToast":"Recording started for {chat}.","settings.recordings.startFailed":"Failed to start recording.","settings.recordings.stoppedToast":"Recording stopped for {chat}.","settings.recordings.stopFailed":"Failed to stop recording.","settings.recordings.deleteConfirm":"Delete recording {id}?","settings.recordings.deletedToast":"Recording deleted.","settings.recordings.deleteFailed":"Failed to delete recording.","settings.recordings.loadOneFailed":"Failed to load recording.","settings.recordings.loadFailed":"Failed to load recordings.","settings.recordings.previewFailed":"Preview failed.","menu.title":"Menu","menu.showWorkspace":"Show workspace","menu.hideWorkspace":"Hide workspace","menu.openExplorer":"Open explorer","menu.chatOnly":"Chat-only mode","menu.exitChatOnly":"Exit chat-only mode","menu.openTerminal":"Open terminal in tab","menu.openVnc":"Open VNC in tab","menu.newFile":"New file","menu.openRecent":"Open Recent","menu.refreshTree":"Refresh tree","menu.reindex":"Reindex workspace","menu.showHidden":"Show hidden files","menu.hideHidden":"Hide hidden files","menu.scale":"Scale","menu.settings":"Settings"},eu={"compose.placeholder":"输入消息（回车发送，Shift+回车换行）...","compose.send":"发送","compose.stop":"停止","compose.searchPlaceholder":"搜索（回车运行）...","compose.clearAll":"清除全部","compose.clearAllTitle":"清除所有附件和引用","compose.scope":"范围","compose.searchScope":"搜索范围","compose.scopeCurrent":"当前","compose.scopeBranchFamily":"分支系列","compose.scopeAll":"所有聊天","compose.filterImages":"图片","compose.filterAttachments":"附件","compose.search":"搜索","compose.closeSearch":"关闭搜索","compose.shareLocation":"分享位置","compose.attachFile":"附加文件","compose.queueControls":"排队后续消息控制","compose.moveUp":"上移","compose.moveUpQueue":"在队列中上移","compose.moveDown":"下移","compose.moveDownQueue":"在队列中下移","compose.editInCompose":"在输入框中编辑","compose.returnToEditor":"将排队消息返回编辑器","compose.injectSteer":"作为引导插入排队的后续消息","compose.steer":"引导","compose.cancelQueued":"取消排队消息","compose.resizeInput":"调整消息输入框大小","compose.resizeInputHint":"拖动以调整消息输入框大小","compose.modelPicker":"模型选择器","compose.sessionsAndAgents":"会话与代理","compose.openModelPicker":"打开模型选择器","compose.newBranchTitle":"从此聊天创建新分支","compose.newRootTitle":"创建一个干净的根会话，例如 web:ops","compose.renameSessionTitle":"重命名当前会话","compose.pruneSessionTitle":"删除（修剪）当前代理/会话分支","compose.filterImagesTitle":"仅显示含图片的消息","compose.filterAttachmentsTitle":"仅显示含附件的消息","compose.selectModel":"选择模型","compose.loadingModels":"正在加载模型…","compose.noModels":"没有可用的模型。","compose.nextModel":"下一个模型","compose.manageSessions":"管理会话与代理","compose.noSessions":"暂无其他会话。","compose.newBranch":"新建分支","compose.newRoot":"新建根会话…","compose.mergeCurrent":"将当前合并到父级","compose.renameCurrent":"重命名当前…","compose.deleteCurrent":"删除当前…","compose.mergeInto":"将此分支合并到 {target}","compose.mergeBlocked":"当此分支处于活动状态或有子分支时无法合并","workspace.title":"工作区","workspace.newFile":"新建文件","workspace.refresh":"刷新","workspace.actions":"工作区操作","workspace.uploadFiles":"上传文件","workspace.reindexing":"正在重建索引…","workspace.deleteFile":"删除文件","workspace.download":"下载","workspace.uploadToFolder":"上传文件到此文件夹","workspace.addFolderHint":"将文件夹提示添加到输入框","workspace.downloadZip":"将文件夹下载为 zip","workspace.openInTab":"在标签页打开","workspace.openInEditor":"在编辑器打开","workspace.renameSelected":"重命名所选","workspace.downloadSelectedFile":"下载所选文件","workspace.downloadSelectedFolder":"下载所选文件夹（zip）","workspace.deleteSelectedFile":"删除所选文件","shell.settings":"设置","shell.newChat":"新建对话","shell.connecting":"连接中…","shell.connected":"已连接","language.label":"语言","settings.title":"设置","settings.close":"关闭（Esc）","settings.filter":"筛选…","settings.loading":"加载设置中…","settings.section.general":"常规","settings.section.sessions":"会话","settings.section.recordings":"录制","settings.section.compaction":"压缩","settings.section.keyboard":"键盘","settings.section.workspace":"工作区","settings.section.environment":"环境","settings.section.providers":"提供商","settings.section.models":"模型","settings.section.theme":"外观","settings.section.scheduled-tasks":"计划任务","settings.section.quick-actions":"快捷操作","settings.section.keychain":"密钥串","settings.section.tools":"工具","settings.section.addons":"插件","settings.placeholder.recordings":"筛选录制…","settings.placeholder.keyboard":"筛选快捷键…","settings.placeholder.environment":"筛选环境…","settings.placeholder.models":"筛选模型…","settings.placeholder.scheduled-tasks":"筛选计划任务…","settings.placeholder.quick-actions":"筛选快捷操作…","settings.placeholder.keychain":"筛选条目…","settings.placeholder.tools":"筛选工具…","settings.placeholder.addons":"筛选插件…","preview.close":"关闭","preview.loading":"正在加载预览…","preview.files":"文件","preview.folders":"文件夹","preview.compressed":"压缩后","preview.uncompressed":"未压缩","preview.name":"名称","preview.type":"类型","preview.method":"方法","preview.size":"大小","post.deleteMessage":"删除消息","post.tooLarge":"消息过大，无法显示。","post.previewTruncated":"预览已截断。","post.submitted":"已提交","post.discard":"丢弃","post.save":"保存","post.cancel":"取消","post.addNote":"添加备注","post.addNotePlaceholder":"添加备注…","tab.close":"关闭","tab.closeOthers":"关闭其他","tab.closeAll":"全部关闭","tab.reattach":"重新附加","tab.openInWindow":"在窗口中打开","tab.openInNewTab":"在新标签页打开","tab.pinned":"已固定","tab.detached":"已分离","tab.openSeparateWindow":"在独立窗口中打开","status.trackedVariables":"跟踪的变量","status.attachToSession":"附加到会话","status.files":"文件","status.proposedDiff":"建议的差异","status.copyTmux":"复制 tmux 命令","status.experimentDuration":"实验时长","status.sinceLastActivity":"自上次活动以来","annotator.title":"标注图片","annotator.typeLabel":"输入标签…","annotator.undo":"撤销","annotator.resetZoom":"重置缩放","tree.filter":"筛选…","tree.sessionTree":"会话树","btw.label":"BTW 附加对话","btw.close":"关闭 BTW","btw.thinking":"思考中","mdpreview.close":"关闭预览","mdpreview.unavailable":"预览不可用","widget.close":"关闭小部件","oobe.gettingStarted":"入门指南","oobe.needsSetupTitle":"实例需要设置","oobe.configuredTitle":"实例已配置","oobe.needsSetupBody":"此实例尚未配置。请打开“设置”并设置 AI 提供商/模型以开始发送请求。","oobe.configuredBody":"此实例看起来已配置。请在“设置”中查看或更新提供商和模型设置。","oobe.openSettings":"打开设置","oobe.dismiss":"忽略","oobe.done":"完成","palette.placeholder":"输入以跳转到代理、工作区操作或斜杠命令…","palette.hideWorkspace":"隐藏工作区","palette.showWorkspace":"显示工作区","palette.hideWorkspaceDesc":"隐藏工作区侧边栏。","palette.showWorkspaceDesc":"显示工作区侧边栏。","palette.exitChatOnly":"退出仅聊天模式","palette.chatOnly":"仅聊天模式","palette.exitChatOnlyDesc":"返回分屏工作区布局。","palette.chatOnlyDesc":"切换到仅聊天布局。","palette.groupAgents":"代理","palette.groupWorkspace":"工作区","palette.groupSlash":"斜杠命令","palette.hintMove":"移动","palette.hintSelect":"选择","palette.hintPopOut":"弹出","palette.hintClose":"关闭","settings.appliedNotice":"设置已应用。更改将在下一回合生效。","settings.sessions.lifecycle":"会话生命周期","settings.sessions.autoRotate":"自动轮换会话","settings.sessions.maxSize":"最大会话大小（MB）","settings.sessions.maxSizeAria":"最大会话大小","settings.sessions.agentBehaviour":"代理行为","settings.sessions.toolBudget":"工具使用预算","settings.sessions.toolBudgetAria":"工具使用预算","settings.sessions.toolBudgetHint":"每回合最大工具调用消息数","settings.sessions.isolation":"会话隔离","settings.sessions.isolationNone":"无 — 完全跨会话可见","settings.sessions.isolationSummary":"摘要 — 工具可见，无参数","settings.sessions.isolationFull":"完全 — 会话之间不可见","settings.editor.heading":"编辑器","settings.editor.vimMode":"Vim 模式","settings.editor.showWhitespace":"显示空白字符","settings.editor.livePreview":"Markdown 实时预览","settings.editor.fontSize":"字号（px）","settings.editor.fontSizeAria":"编辑器字号","settings.editor.fontFamily":"字体","settings.editor.fontFamilyPlaceholder":"monospace（默认）","settings.editor.localOnlyHint":"仅限此浏览器。编辑器更改存储在本地浏览器中，并在下次打开或重新加载文件标签页时生效。","settings.appearance.syncing":"正在同步外观…","settings.appearance.default":"默认","settings.appearance.autoLightDark":"自动（浅色/深色）","settings.appearance.tint":"色调：","settings.appearance.clearTint":"清除色调","settings.appearance.none":"无","settings.keyboard.heading":"键盘","settings.keyboard.hint1":"将应用级快捷键自定义为逗号分隔的绑定。更改立即生效。","settings.keyboard.hint1b":"已保留用于关闭/中止，无法重新绑定。","settings.keyboard.hint2mid":"以及键入","settings.keyboard.hint2end":"（在输入框外）可打开此面板。","settings.keyboard.resetAll":"全部重置为默认","settings.keyboard.defaultColon":"默认：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"默认","settings.keyboard.noMatch":"没有匹配此筛选的快捷键。","settings.keyboard.invalidShortcut":"无效快捷键：{token}。Escape 已保留，无法重新绑定。","settings.keyboard.saved":"快捷键已保存。","settings.keyboard.resetOne":"快捷键已重置为默认。","settings.keyboard.resetAllDone":"快捷键已全部重置为默认。","settings.workspace.serverApplied":"工作区设置已应用。服务器端限制立即影响新的工作区请求。","settings.workspace.browserApplied":"浏览器工作区设置已在此标签页立即应用。","settings.workspace.access":"访问","settings.workspace.enableTerminal":"启用 Web 终端","settings.workspace.allowVnc":"允许直接 VNC 目标","settings.workspace.accessHint":"终端访问立即更新。直接 VNC 目标策略适用于新的 VNC 请求。","settings.workspace.guardrails":"服务器扫描防护","settings.workspace.maxDepth":"最大树深度","settings.workspace.maxDepthAria":"工作区树最大深度","settings.workspace.maxDepthHintPre":"限制所有","settings.workspace.maxDepthHintPost":"请求","settings.workspace.maxEntries":"每次扫描最大条目数","settings.workspace.maxEntriesAria":"工作区树最大条目数","settings.workspace.maxEntriesHint":"更早截断超大的树遍历","settings.workspace.thisBrowser":"此浏览器","settings.workspace.refreshInterval":"刷新间隔（秒）","settings.workspace.refreshIntervalAria":"工作区刷新间隔","settings.workspace.folderDepth":"文件夹预览扫描深度","settings.workspace.folderDepthAria":"文件夹预览扫描深度","settings.workspace.folderDepthHintPre":"设为","settings.workspace.folderDepthHintPost":"以禁用文件夹大小预览扫描","settings.workspace.footerHint":"根目录和文件夹展开的树加载保持较浅；文件夹大小预览是 UI 中最深的工作区扫描。","settings.models.thinkingLevel":"思考级别","settings.models.noThinking":"当前模型不支持思考。","settings.models.thinkingLevelLabel":"思考级别：","settings.models.loading":"正在加载模型…","settings.models.summary":"在狭窄面板中，模型和提供商名称可能换行以避免裁切。","settings.models.scopedOnly":"仅限范围内模型","settings.models.scopedCheckboxPre":"使用 Pi 的","settings.models.scopedCheckboxPost":"作为 Piclaw 模型列表","settings.models.scopedHintPre":"筛选此选择器和","settings.models.scopedHintPost":"工具。TUI 模型选择保持不变。","settings.models.colModel":"模型","settings.models.colProvider":"提供商","settings.models.colContext":"上下文","settings.models.colReasoning":"推理","settings.models.noMatch":"没有匹配 “{filter}” 的模型","settings.tools.unavailable":"工具数据不可用。","settings.tools.search":"搜索","settings.tools.matchMode":"匹配模式","settings.tools.orMode":"任意关键词（OR）— 结果至少匹配一个搜索词","settings.tools.andMode":"所有关键词（AND）— 结果必须匹配每个搜索词","settings.tools.colEnabled":"已启用","settings.tools.colTool":"工具","settings.tools.colCompact":"压缩","settings.tools.colKind":"类型","settings.tools.colSummary":"摘要","settings.tools.colSource":"来源","settings.tools.disableCompaction":"为此工具禁用工具结果压缩","settings.tools.enableCompaction":"为此工具启用工具结果压缩","settings.tools.noMatch":"没有匹配 “{filter}” 的工具","settings.tools.footer":"工具激活由代理运行时管理。组复选框可折叠/展开；“压缩”列控制工具结果压缩资格。","settings.environment.heading":"环境","settings.environment.introPre":"仅显示非 keychain 环境变量。覆盖项存储在扩展 KV 中并应用于","settings.environment.introPost":"，因此后续工具调用会继承它们。","settings.environment.refresh":"刷新","settings.environment.addOverride":"添加覆盖","settings.environment.valuePlaceholder":"值","settings.environment.save":"保存","settings.environment.countLine":"{count} 个变量可见 • {overrides} 个覆盖生效 • {keychain} 个 keychain 注入变量已隐藏","settings.environment.overridden":"在 KV 中覆盖","settings.environment.inherited":"继承自进程环境","settings.environment.kindOverride":"覆盖","settings.environment.kindProcess":"进程","settings.environment.clear":"清除","settings.environment.noMatch":"没有匹配 “{filter}” 的环境变量。","settings.environment.refreshedToast":"环境已刷新。","settings.environment.savedToast":"已保存 {name} 的环境覆盖。","settings.environment.clearedToast":"已清除 {name} 的环境覆盖。","settings.quickActions.loading":"加载中…","settings.quickActions.heading":"时间线快捷操作","settings.quickActions.intro":"选择哪些操作出现在时间线预输入中。代理始终优先固定，然后是工作区命令，再是斜杠命令。","settings.quickActions.enableAll":"全部启用","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存并应用","settings.quickActions.workspaceCommands":"工作区命令","settings.quickActions.noWorkspaceMatch":"没有匹配此筛选的工作区命令。","settings.quickActions.slashCommands":"斜杠命令","settings.quickActions.slashFallback":"斜杠命令","settings.quickActions.noSlashMatch":"没有匹配此筛选的斜杠命令。","settings.quickActions.savingToast":"正在保存快捷操作…","settings.quickActions.savedToast":"快捷操作已保存。","settings.providers.authApiKey":"API 密钥","settings.providers.authConfigured":"已配置","settings.providers.heading":"提供商","settings.providers.tagCustom":"自定义","settings.providers.logout":"注销","settings.providers.reconfigure":"重新配置","settings.providers.setUp":"设置","settings.providers.setupHint":"登录流程在浏览器中打开。在狭窄面板中，设置表单会垂直堆叠以避免裁切。","settings.providers.starting":"启动中…","settings.providers.signInOAuth":"使用 OAuth 登录","settings.providers.apiKeyLabel":"API 密钥","settings.providers.apiKeyPlaceholder":"输入 API 密钥","settings.providers.save":"保存","settings.providers.configuring":"配置中…","settings.providers.saveConfig":"保存配置","settings.providers.apiKeyEmpty":"API 密钥不能为空。","settings.providers.configuringToast":"正在配置 {provider}…","settings.providers.configured":"{provider} 已配置。","settings.providers.startingOAuth":"正在为 {provider} 启动 OAuth…","settings.providers.oauthOpened":"OAuth 窗口已打开。完成登录流程，然后关闭此消息。","settings.providers.oauthStarted":"已为 {provider} 启动 OAuth 流程。请查看聊天。","settings.providers.loggingOut":"正在注销 {provider}…","settings.providers.loggedOut":"已注销 {provider}。可能需要重启。","settings.general.identity":"身份","settings.general.userLabel":"用户","settings.general.yourName":"你的名字","settings.general.agentLabel":"代理","settings.general.agentName":"代理名称","settings.general.notifications":"通知","settings.general.browserNotifications":"浏览器通知","settings.general.notifSecureHint":"使用输入栏中的 \uD83D\uDD14 铃铛按钮来启用/禁用通知。Web Push 需要 HTTPS 或 localhost。","settings.general.notifInsecureHint":"⚠ 不可用 — 需要安全上下文（HTTPS 或 localhost）。通过 SSH 隐道或带 TLS 的反向代理访问以启用。","settings.general.display":"显示","settings.general.systemMeters":"系统仪表","settings.general.systemMetersHint":"状态栏中的 CPU/内存/网络仪表。仅限此浏览器。","settings.general.instanceConfig":"实例配置","settings.general.composeUpload":"撰写上传（MB）","settings.general.composeUploadAria":"撰写上传限制","settings.general.composeUploadHint":"聊天/媒体附件","settings.general.workspaceUpload":"工作区上传（MB）","settings.general.workspaceUploadAria":"工作区上传限制","settings.general.workspaceUploadHint":"默认为 256 MB；分块上传最多允许 1 GB","settings.general.authentication":"身份验证","settings.general.widgetToken":"小部件 bearer 令牌","settings.general.token":"令牌","settings.general.hideToken":"隐藏令牌","settings.general.revealToken":"显示令牌","settings.general.copyToken":"复制令牌","settings.general.copied":"已复制","settings.general.regenerating":"正在重新生成…","settings.general.regenerate":"重新生成","settings.general.tokenHintPre":"只读令牌，用于","settings.general.tokenHintMid":"和","settings.general.tokenHintPost":"。用作","settings.general.tokenHintEnd":"。","settings.general.copyFailed":"无法复制小部件令牌。请选择令牌字段并手动复制。","settings.general.regenConfirm":"重新生成小部件令牌？使用旧令牌的现有 macOS 小部件将停止更新。","settings.general.totpTitle":"TOTP 设置二维码","settings.general.totpConfiguredHint":"当前 Web 登录验证器密钥。扫描此二维码以添加另一个验证器设备。","settings.general.totpUnconfiguredHint":"此实例尚未配置 TOTP，因此没有可用的设置二维码。","settings.general.issuer":"颁发者","settings.general.label":"标签","settings.general.secret":"密钥","settings.general.avatarUpload":"点击上传","settings.developer.heading":"开发者","settings.developer.devMode":"开发者模式","settings.developer.localHint":"仅限此浏览器。开发者模式开关和插件目录覆盖存储在本地浏览器存储中。","settings.developer.addonSources":"插件来源","settings.developer.catalogUrl":"目录 URL","settings.developer.catalogHint":"主插件目录 URL。留空以使用默认值","settings.developer.additionalCatalogs":"其他目录 URL","settings.developer.additionalHint":"在主/默认目录之外额外获取。每行一个 URL。","settings.developer.repoUrl":"仓库 URL","settings.developer.repoHintPre":"覆盖用于","settings.developer.repoHintPost":"安装的 git 仓库。留空以使用默认值。","settings.developer.debug":"调试","settings.developer.logSse":"记录 SSE 事件","settings.developer.logToolCalls":"记录工具调用","settings.developer.debugHint":"调试标志在下次页面重新加载时生效。","settings.addons.installing":"正在安装 {slug}…","settings.addons.removing":"正在移除 {slug}…","settings.addons.installedToast":"插件已安装。","settings.addons.removedToast":"插件已移除。","settings.addons.restarting":"正在重启 piclaw…","settings.addons.restartComplete":"重启完成 — 插件已刷新。","settings.addons.restartTimeout":"后端未能及时返回。请手动重新加载页面。","settings.addons.fetching":"正在获取插件…","settings.addons.loadFailed":"无法加载插件。","settings.addons.catalogFromPre":"目录来自","settings.addons.catalogMerged":"已合并 {count} 个目录来源。","settings.addons.installNote":"通过 Bun 优先安装包；安装/卸载后需要重启。","settings.addons.failedFetchSingular":"获取 {count} 个目录来源失败：","settings.addons.failedFetchPlural":"获取 {count} 个目录来源失败：","settings.addons.activeSources":"活动目录来源（{count}）","settings.addons.windowsWarning":"原生 Windows 插件安装风险更高：Bun 包安装、符号链接清理、锁定文件和重启时机都可能不如 Linux/WSL 可预测。如果可能，请优先使用 WSL 或容器。","settings.addons.typeExtSkill":"扩展 + 技能","settings.addons.typeSkill":"技能","settings.addons.typeExt":"扩展","settings.addons.update":"更新","settings.addons.remove":"移除","settings.addons.install":"安装","settings.addons.noMatch":"没有匹配 “{filter}” 的插件","settings.addons.restartNotice":"扩展更改已安装，但在 piclaw 重启之前处于非活动状态。","settings.addons.restartNow":"立即重启","settings.recordings.modeFull":"完整 / 受信任","settings.recordings.modeMetadata":"仅元数据","settings.recordings.modeRedacted":"已脱敏","settings.recordings.selectPrompt":"选择一个录制以检查、回放、导出或删除。","settings.recordings.playback":"回放","settings.recordings.refresh":"刷新","settings.recordings.delete":"删除","settings.recordings.status":"状态","settings.recordings.mode":"模式","settings.recordings.chat":"聊天","settings.recordings.started":"开始","settings.recordings.ended":"结束","settings.recordings.events":"事件","settings.recordings.redactions":"脱敏","settings.recordings.exportJson":"导出 JSON","settings.recordings.exportJsonl":"导出 JSONL","settings.recordings.exportHtml":"导出独立 HTML","settings.recordings.eventSummary":"事件摘要","settings.recordings.inspectHint":"打开或刷新详情以检查跟踪事件。","settings.recordings.firstEvents":"首批事件","settings.recordings.heading":"会话录制","settings.recordings.intro":"选择性加入的跟踪捕获，用于确定性回放和屏幕录制导出。回放绝不会调用实时代理或工具端点。","settings.recordings.chatJid":"聊天 JID","settings.recordings.title":"标题","settings.recordings.titlePlaceholder":"演示录制","settings.recordings.modeLabelField":"模式","settings.recordings.optRedacted":"已脱敏","settings.recordings.optMetadata":"仅元数据","settings.recordings.optFull":"完整 / 受信任本地","settings.recordings.includeSnapshot":"包含时间线快照","settings.recordings.extraKeys":"额外脱敏键","settings.recordings.extraPatterns":"额外正则模式","settings.recordings.stopCurrent":"停止当前聊天录制","settings.recordings.start":"开始录制","settings.recordings.redactionPreview":"脱敏预览","settings.recordings.previewRedaction":"预览脱敏","settings.recordings.loading":"正在加载录制…","settings.recordings.noneYet":"还没有录制。","settings.recordings.noneYetHint":"在上方开始录制，然后使用回放/导出进行确定性屏幕捕获。","settings.recordings.listLabel":"会话录制","settings.recordings.eventsCount":"{count} 个事件","settings.recordings.noMatch":"没有匹配 “{filter}” 的录制。","settings.recordings.startedToast":"已为 {chat} 开始录制。","settings.recordings.startFailed":"开始录制失败。","settings.recordings.stoppedToast":"已为 {chat} 停止录制。","settings.recordings.stopFailed":"停止录制失败。","settings.recordings.deleteConfirm":"删除录制 {id}？","settings.recordings.deletedToast":"录制已删除。","settings.recordings.deleteFailed":"删除录制失败。","settings.recordings.loadOneFailed":"加载录制失败。","settings.recordings.loadFailed":"加载录制失败。","settings.recordings.previewFailed":"预览失败。","menu.title":"菜单","menu.showWorkspace":"显示工作区","menu.hideWorkspace":"隐藏工作区","menu.openExplorer":"打开资源管理器","menu.chatOnly":"仅聊天模式","menu.exitChatOnly":"退出仅聊天模式","menu.openTerminal":"在标签页中打开终端","menu.openVnc":"在标签页中打开 VNC","menu.newFile":"新建文件","menu.openRecent":"打开最近文件","menu.refreshTree":"刷新目录树","menu.reindex":"重建工作区索引","menu.showHidden":"显示隐藏文件","menu.hideHidden":"隐藏隐藏文件","menu.scale":"缩放","menu.settings":"设置"},mu={"compose.placeholder":"メッセージ（Enterで送信、Shift+Enterで改行）...","compose.send":"送信","compose.stop":"停止","compose.searchPlaceholder":"検索（Enterで実行）...","compose.clearAll":"すべてクリア","compose.clearAllTitle":"すべての添付と参照をクリア","compose.scope":"範囲","compose.searchScope":"検索範囲","compose.scopeCurrent":"現在","compose.scopeBranchFamily":"ブランチファミリー","compose.scopeAll":"すべてのチャット","compose.filterImages":"画像","compose.filterAttachments":"添付","compose.search":"検索","compose.closeSearch":"検索を閉じる","compose.shareLocation":"位置を共有","compose.attachFile":"ファイルを添付","compose.queueControls":"キュー済みフォローアップの操作","compose.moveUp":"上に移動","compose.moveUpQueue":"キュー内で上に移動","compose.moveDown":"下に移動","compose.moveDownQueue":"キュー内で下に移動","compose.editInCompose":"入力欄で編集","compose.returnToEditor":"キュー済みメッセージを入力欄に戻す","compose.injectSteer":"キュー済みフォローアップをステアとして挿入","compose.steer":"ステア","compose.cancelQueued":"キュー済みメッセージをキャンセル","compose.resizeInput":"メッセージ入力欄のサイズ変更","compose.resizeInputHint":"ドラッグしてメッセージ入力欄のサイズを変更","compose.modelPicker":"モデルピッカー","compose.sessionsAndAgents":"セッションとエージェント","compose.openModelPicker":"モデルピッカーを開く","compose.newBranchTitle":"このチャットから新しいブランチを作成","compose.newRootTitle":"web:ops のようなクリーンなルートセッションを作成","compose.renameSessionTitle":"現在のセッションの名前を変更","compose.pruneSessionTitle":"現在のエージェント/セッションブランチを削除（プルーン）","compose.filterImagesTitle":"画像付きメッセージのみ表示","compose.filterAttachmentsTitle":"添付付きメッセージのみ表示","compose.selectModel":"モデルを選択","compose.loadingModels":"モデルを読み込み中…","compose.noModels":"利用可能なモデルがありません。","compose.nextModel":"次のモデル","compose.manageSessions":"セッションとエージェントを管理","compose.noSessions":"他のセッションはまだありません。","compose.newBranch":"新しいブランチ","compose.newRoot":"新しいルート…","compose.mergeCurrent":"現在を親にマージ","compose.renameCurrent":"現在の名前を変更…","compose.deleteCurrent":"現在を削除…","compose.mergeInto":"このブランチを {target} にマージ","compose.mergeBlocked":"このブランチはアクティブな間または子がある間はマージできません","workspace.title":"ワークスペース","workspace.newFile":"新規ファイル","workspace.refresh":"更新","workspace.actions":"ワークスペース操作","workspace.uploadFiles":"ファイルをアップロード","workspace.reindexing":"ワークスペースを再インデックス中…","workspace.deleteFile":"ファイルを削除","workspace.download":"ダウンロード","workspace.uploadToFolder":"このフォルダにファイルをアップロード","workspace.addFolderHint":"フォルダのヒントを入力欄に追加","workspace.downloadZip":"フォルダをzipでダウンロード","workspace.openInTab":"タブで開く","workspace.openInEditor":"エディタで開く","workspace.renameSelected":"選択項目の名前を変更","workspace.downloadSelectedFile":"選択したファイルをダウンロード","workspace.downloadSelectedFolder":"選択したフォルダをダウンロード（zip）","workspace.deleteSelectedFile":"選択したファイルを削除","shell.settings":"設定","shell.newChat":"新規チャット","shell.connecting":"接続中…","shell.connected":"接続済み","language.label":"言語","settings.title":"設定","settings.close":"閉じる（Esc）","settings.filter":"フィルター…","settings.loading":"設定を読み込み中…","settings.section.general":"一般","settings.section.sessions":"セッション","settings.section.recordings":"録画","settings.section.compaction":"圧縮","settings.section.keyboard":"キーボード","settings.section.workspace":"ワークスペース","settings.section.environment":"環境","settings.section.providers":"プロバイダー","settings.section.models":"モデル","settings.section.theme":"外観","settings.section.scheduled-tasks":"スケジュールタスク","settings.section.quick-actions":"クイックアクション","settings.section.keychain":"キーチェーン","settings.section.tools":"ツール","settings.section.addons":"アドオン","settings.placeholder.recordings":"録画をフィルター…","settings.placeholder.keyboard":"ショートカットをフィルター…","settings.placeholder.environment":"環境をフィルター…","settings.placeholder.models":"モデルをフィルター…","settings.placeholder.scheduled-tasks":"スケジュールタスクをフィルター…","settings.placeholder.quick-actions":"クイックアクションをフィルター…","settings.placeholder.keychain":"エントリをフィルター…","settings.placeholder.tools":"ツールをフィルター…","settings.placeholder.addons":"アドオンをフィルター…","preview.close":"閉じる","preview.loading":"プレビューを読み込み中…","preview.files":"ファイル","preview.folders":"フォルダ","preview.compressed":"圧縮後","preview.uncompressed":"非圧縮","preview.name":"名前","preview.type":"種類","preview.method":"方式","preview.size":"サイズ","post.deleteMessage":"メッセージを削除","post.tooLarge":"メッセージが大きすぎて表示できません。","post.previewTruncated":"プレビューは切り詰められました。","post.submitted":"送信済み","post.discard":"破棄","post.save":"保存","post.cancel":"キャンセル","post.addNote":"メモを追加","post.addNotePlaceholder":"メモを追加…","tab.close":"閉じる","tab.closeOthers":"他を閉じる","tab.closeAll":"すべて閉じる","tab.reattach":"再アタッチ","tab.openInWindow":"ウィンドウで開く","tab.openInNewTab":"新しいタブで開く","tab.pinned":"ピン留め済み","tab.detached":"分離済み","tab.openSeparateWindow":"別ウィンドウで開く","status.trackedVariables":"追跡中の変数","status.attachToSession":"セッションにアタッチ","status.files":"ファイル","status.proposedDiff":"提案された差分","status.copyTmux":"tmuxコマンドをコピー","status.experimentDuration":"実験の経過時間","status.sinceLastActivity":"最後のアクティビティから","annotator.title":"画像に注釈","annotator.typeLabel":"ラベルを入力…","annotator.undo":"元に戻す","annotator.resetZoom":"ズームをリセット","tree.filter":"フィルター…","tree.sessionTree":"セッションツリー","btw.label":"BTW サイド会話","btw.close":"BTW を閉じる","btw.thinking":"思考中","mdpreview.close":"プレビューを閉じる","mdpreview.unavailable":"プレビューを利用できません","widget.close":"ウィジェットを閉じる","oobe.gettingStarted":"はじめに","oobe.needsSetupTitle":"インスタンスのセットアップが必要","oobe.configuredTitle":"インスタンスは設定済み","oobe.needsSetupBody":"このインスタンスはまだ設定されていません。設定を開き、AIプロバイダー/モデルを設定してリクエストの送信を開始してください。","oobe.configuredBody":"このインスタンスは設定済みのようです。設定でプロバイダーとモデルの設定を確認または更新してください。","oobe.openSettings":"設定を開く","oobe.dismiss":"閉じる","oobe.done":"完了","palette.placeholder":"入力してエージェント、ワークスペース操作、またはスラッシュコマンドにジャンプ…","palette.hideWorkspace":"ワークスペースを非表示","palette.showWorkspace":"ワークスペースを表示","palette.hideWorkspaceDesc":"ワークスペースサイドバーを非表示にします。","palette.showWorkspaceDesc":"ワークスペースサイドバーを表示します。","palette.exitChatOnly":"チャットのみモードを終了","palette.chatOnly":"チャットのみモード","palette.exitChatOnlyDesc":"分割ワークスペースレイアウトに戻ります。","palette.chatOnlyDesc":"チャットのみのレイアウトに切り替えます。","palette.groupAgents":"エージェント","palette.groupWorkspace":"ワークスペース","palette.groupSlash":"スラッシュコマンド","palette.hintMove":"移動","palette.hintSelect":"選択","palette.hintPopOut":"ポップアウト","palette.hintClose":"閉じる","settings.appliedNotice":"設定を適用しました。変更は次のターンから有効になります。","settings.sessions.lifecycle":"セッションのライフサイクル","settings.sessions.autoRotate":"セッションを自動ローテーション","settings.sessions.maxSize":"最大セッションサイズ（MB）","settings.sessions.maxSizeAria":"最大セッションサイズ","settings.sessions.agentBehaviour":"エージェントの動作","settings.sessions.toolBudget":"ツール使用予算","settings.sessions.toolBudgetAria":"ツール使用予算","settings.sessions.toolBudgetHint":"1ターンあたりの最大ツール呼び出しメッセージ数","settings.sessions.isolation":"セッションの分離","settings.sessions.isolationNone":"なし — セッション間で完全に可視","settings.sessions.isolationSummary":"概要 — ツールは可視、引数は非表示","settings.sessions.isolationFull":"完全 — セッション同士は互いに見えない","settings.editor.heading":"エディター","settings.editor.vimMode":"Vim モード","settings.editor.showWhitespace":"空白文字を表示","settings.editor.livePreview":"Markdown ライブプレビュー","settings.editor.fontSize":"フォントサイズ（px）","settings.editor.fontSizeAria":"エディターのフォントサイズ","settings.editor.fontFamily":"フォントファミリー","settings.editor.fontFamilyPlaceholder":"monospace（デフォルト）","settings.editor.localOnlyHint":"このブラウザーのみ。エディターの変更はローカルブラウザーストレージに保存され、次にファイルタブを開くか再読み込みしたときに有効になります。","settings.appearance.syncing":"外観を同期中…","settings.appearance.default":"デフォルト","settings.appearance.autoLightDark":"自動（ライト/ダーク）","settings.appearance.tint":"色調：","settings.appearance.clearTint":"色調をクリア","settings.appearance.none":"なし","settings.keyboard.heading":"キーボード","settings.keyboard.hint1":"アプリ全体のショートカットをカンマ区切りのバインディングとしてカスタマイズします。変更はすぐに反映されます。","settings.keyboard.hint1b":"は閉じる/中止用に予約されており、再割り当てできません。","settings.keyboard.hint2mid":"と入力","settings.keyboard.hint2end":"を入力欄の外で押すとこのペインが開きます。","settings.keyboard.resetAll":"すべてデフォルトにリセット","settings.keyboard.defaultColon":"デフォルト：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"デフォルト","settings.keyboard.noMatch":"このフィルターに一致するショートカットはありません。","settings.keyboard.invalidShortcut":"無効なショートカット：{token}。Escape は予約されており、再割り当てできません。","settings.keyboard.saved":"キーボードショートカットを保存しました。","settings.keyboard.resetOne":"キーボードショートカットをデフォルトにリセットしました。","settings.keyboard.resetAllDone":"キーボードショートカットをすべてデフォルトにリセットしました。","settings.workspace.serverApplied":"ワークスペース設定を適用しました。サーバー側の制限は新しいワークスペースリクエストに直ちに反映されます。","settings.workspace.browserApplied":"ブラウザーのワークスペース設定はこのタブで直ちに適用されました。","settings.workspace.access":"アクセス","settings.workspace.enableTerminal":"Web ターミナルを有効化","settings.workspace.allowVnc":"直接 VNC ターゲットを許可","settings.workspace.accessHint":"ターミナルアクセスは直ちに更新されます。直接 VNC ターゲットポリシーは新しい VNC リクエストに適用されます。","settings.workspace.guardrails":"サーバースキャンのガードレール","settings.workspace.maxDepth":"最大ツリー深度","settings.workspace.maxDepthAria":"ワークスペースツリーの最大深度","settings.workspace.maxDepthHintPre":"すべての","settings.workspace.maxDepthHintPost":"リクエストを制限します","settings.workspace.maxEntries":"スキャンあたりの最大エントリ数","settings.workspace.maxEntriesAria":"ワークスペースツリーの最大エントリ数","settings.workspace.maxEntriesHint":"大きすぎるツリー走査を早めに打ち切ります","settings.workspace.thisBrowser":"このブラウザー","settings.workspace.refreshInterval":"更新間隔（秒）","settings.workspace.refreshIntervalAria":"ワークスペース更新間隔","settings.workspace.folderDepth":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthAria":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthHintPre":"","settings.workspace.folderDepthHintPost":"に設定するとフォルダサイズのプレビュースキャンを無効化します","settings.workspace.footerHint":"ルートおよびフォルダ展開のツリー読み込みは浅いままです。フォルダサイズのプレビューは UI で最も深いワークスペーススキャンです。","settings.models.thinkingLevel":"思考レベル","settings.models.noThinking":"現在のモデルは思考をサポートしていません。","settings.models.thinkingLevelLabel":"思考レベル：","settings.models.loading":"モデルを読み込み中…","settings.models.summary":"狭いペインでは、クリッピングを避けるためにモデル名とプロバイダー名が折り返される場合があります。","settings.models.scopedOnly":"スコープ付きモデルのみ","settings.models.scopedCheckboxPre":"Piclaw のモデル一覧に Pi の","settings.models.scopedCheckboxPost":"を使用","settings.models.scopedHintPre":"このピッカーと","settings.models.scopedHintPost":"ツールをフィルタリングします。TUI のモデル選択は変更されません。","settings.models.colModel":"モデル","settings.models.colProvider":"プロバイダー","settings.models.colContext":"コンテキスト","settings.models.colReasoning":"推論","settings.models.noMatch":"「{filter}」に一致するモデルはありません","settings.tools.unavailable":"ツールデータを利用できません。","settings.tools.search":"検索","settings.tools.matchMode":"マッチモード","settings.tools.orMode":"いずれかのキーワード（OR）— 少なくとも1つの検索語に一致","settings.tools.andMode":"すべてのキーワード（AND）— すべての検索語に一致","settings.tools.colEnabled":"有効","settings.tools.colTool":"ツール","settings.tools.colCompact":"コンパクト","settings.tools.colKind":"種類","settings.tools.colSummary":"概要","settings.tools.colSource":"ソース","settings.tools.disableCompaction":"このツールのツール結果コンパクションを無効化","settings.tools.enableCompaction":"このツールのツール結果コンパクションを有効化","settings.tools.noMatch":"「{filter}」に一致するツールはありません","settings.tools.footer":"ツールのアクティベーションはエージェントランタイムが管理します。グループのチェックボックスで折りたたみ/展開でき、「コンパクト」列はツール結果コンパクションの対象可否を制御します。","settings.environment.heading":"環境","settings.environment.introPre":"キーチェーン以外の環境変数のみを表示しています。オーバーライドは拡張機能の KV に保存され、","settings.environment.introPost":"に適用されるため、以降のツール呼び出しに継承されます。","settings.environment.refresh":"更新","settings.environment.addOverride":"オーバーライドを追加","settings.environment.valuePlaceholder":"値","settings.environment.save":"保存","settings.environment.countLine":"{count} 個の変数を表示 • {overrides} 個のオーバーライドが有効 • {keychain} 個のキーチェーン注入変数を非表示","settings.environment.overridden":"KV でオーバーライド","settings.environment.inherited":"プロセス環境から継承","settings.environment.kindOverride":"オーバーライド","settings.environment.kindProcess":"プロセス","settings.environment.clear":"クリア","settings.environment.noMatch":"「{filter}」に一致する環境変数はありません。","settings.environment.refreshedToast":"環境を更新しました。","settings.environment.savedToast":"{name} の環境オーバーライドを保存しました。","settings.environment.clearedToast":"{name} の環境オーバーライドをクリアしました。","settings.quickActions.loading":"読み込み中…","settings.quickActions.heading":"タイムラインクイックアクション","settings.quickActions.intro":"タイムラインのタイプアヘッドに表示するアクションを選択します。エージェントは常に最初に固定され、次にワークスペースコマンド、その次にスラッシュコマンドが表示されます。","settings.quickActions.enableAll":"すべて有効化","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存して適用","settings.quickActions.workspaceCommands":"ワークスペースコマンド","settings.quickActions.noWorkspaceMatch":"このフィルターに一致するワークスペースコマンドはありません。","settings.quickActions.slashCommands":"スラッシュコマンド","settings.quickActions.slashFallback":"スラッシュコマンド","settings.quickActions.noSlashMatch":"このフィルターに一致するスラッシュコマンドはありません。","settings.quickActions.savingToast":"クイックアクションを保存中…","settings.quickActions.savedToast":"クイックアクションを保存しました。","settings.providers.authApiKey":"API キー","settings.providers.authConfigured":"設定済み","settings.providers.heading":"プロバイダー","settings.providers.tagCustom":"カスタム","settings.providers.logout":"ログアウト","settings.providers.reconfigure":"再設定","settings.providers.setUp":"セットアップ","settings.providers.setupHint":"サインインフローはブラウザーで開きます。狭いペインではセットアップフォームが縦に積み重なってクリッピングを防ぎます。","settings.providers.starting":"開始中…","settings.providers.signInOAuth":"OAuth でサインイン","settings.providers.apiKeyLabel":"API キー","settings.providers.apiKeyPlaceholder":"API キーを入力","settings.providers.save":"保存","settings.providers.configuring":"設定中…","settings.providers.saveConfig":"設定を保存","settings.providers.apiKeyEmpty":"API キーを空にすることはできません。","settings.providers.configuringToast":"{provider} を設定中…","settings.providers.configured":"{provider} を設定しました。","settings.providers.startingOAuth":"{provider} の OAuth を開始中…","settings.providers.oauthOpened":"OAuth ウィンドウを開きました。サインインフローを完了してから、このメッセージを閉じてください。","settings.providers.oauthStarted":"{provider} の OAuth フローを開始しました。チャットを確認してください。","settings.providers.loggingOut":"{provider} をログアウト中…","settings.providers.loggedOut":"{provider} をログアウトしました。再起動が必要な場合があります。","settings.general.identity":"アイデンティティ","settings.general.userLabel":"ユーザー","settings.general.yourName":"あなたの名前","settings.general.agentLabel":"エージェント","settings.general.agentName":"エージェント名","settings.general.notifications":"通知","settings.general.browserNotifications":"ブラウザ通知","settings.general.notifSecureHint":"入力バーの \uD83D\uDD14 ベルボタンで通知を有効/無効にします。Web Push には HTTPS または localhost が必要です。","settings.general.notifInsecureHint":"⚠ 利用不可 — セキュアコンテキスト（HTTPS または localhost）が必要です。SSH トンネルまたは TLS 付きリバースプロキシ経由でアクセスして有効化してください。","settings.general.display":"表示","settings.general.systemMeters":"システムメーター","settings.general.systemMetersHint":"ステータスバーの CPU/メモリ/ネットワークメーター。このブラウザのみ。","settings.general.instanceConfig":"インスタンス設定","settings.general.composeUpload":"作成アップロード（MB）","settings.general.composeUploadAria":"作成アップロード上限","settings.general.composeUploadHint":"チャット/メディア添付","settings.general.workspaceUpload":"ワークスペースアップロード（MB）","settings.general.workspaceUploadAria":"ワークスペースアップロード上限","settings.general.workspaceUploadHint":"デフォルトは 256 MB。チャンクアップロードは最大 1 GB まで許可","settings.general.authentication":"認証","settings.general.widgetToken":"ウィジェット bearer トークン","settings.general.token":"トークン","settings.general.hideToken":"トークンを隠す","settings.general.revealToken":"トークンを表示","settings.general.copyToken":"トークンをコピー","settings.general.copied":"コピーしました","settings.general.regenerating":"再生成中…","settings.general.regenerate":"再生成","settings.general.tokenHintPre":"次の読み取り専用トークン：","settings.general.tokenHintMid":"および","settings.general.tokenHintPost":"。次として使用：","settings.general.tokenHintEnd":"。","settings.general.copyFailed":"ウィジェットトークンをコピーできませんでした。トークンフィールドを選択して手動でコピーしてください。","settings.general.regenConfirm":"ウィジェットトークンを再生成しますか？古いトークンを使用している既存の macOS ウィジェットは更新されなくなります。","settings.general.totpTitle":"TOTP セットアップ QR","settings.general.totpConfiguredHint":"現在の Web ログイン認証システムのシークレット。この QR をスキャンして別の認証デバイスを追加します。","settings.general.totpUnconfiguredHint":"このインスタンスにはまだ TOTP が設定されていないため、セットアップ QR は利用できません。","settings.general.issuer":"発行者","settings.general.label":"ラベル","settings.general.secret":"シークレット","settings.general.avatarUpload":"クリックしてアップロード","settings.developer.heading":"開発者","settings.developer.devMode":"開発者モード","settings.developer.localHint":"このブラウザのみ。開発者モードの切り替えとアドオンカタログのオーバーライドはローカルブラウザストレージに保存されます。","settings.developer.addonSources":"アドオンソース","settings.developer.catalogUrl":"カタログ URL","settings.developer.catalogHint":"プライマリアドオンカタログ URL。空のままにするとデフォルトを使用します","settings.developer.additionalCatalogs":"追加カタログ URL","settings.developer.additionalHint":"プライマリ/デフォルトカタログに加えて取得されます。1 行に 1 つの URL。","settings.developer.repoUrl":"リポジトリ URL","settings.developer.repoHintPre":"git リポジトリを上書き（","settings.developer.repoHintPost":"インストール用）。空のままでデフォルト。","settings.developer.debug":"デバッグ","settings.developer.logSse":"SSE イベントをログ記録","settings.developer.logToolCalls":"ツール呼び出しをログ記録","settings.developer.debugHint":"デバッグフラグは次回のページ再読み込み時に有効になります。","settings.addons.installing":"{slug} をインストール中…","settings.addons.removing":"{slug} を削除中…","settings.addons.installedToast":"アドオンをインストールしました。","settings.addons.removedToast":"アドオンを削除しました。","settings.addons.restarting":"piclaw を再起動中…","settings.addons.restartComplete":"再起動完了 — アドオンを更新しました。","settings.addons.restartTimeout":"バックエンドが時間内に応答しませんでした。ページを手動で再読み込みしてください。","settings.addons.fetching":"アドオンを取得中…","settings.addons.loadFailed":"アドオンを読み込めませんでした。","settings.addons.catalogFromPre":"カタログの取得元：","settings.addons.catalogMerged":"{count} 個のカタログソースをマージしました。","settings.addons.installNote":"Bun によるパッケージ優先インストール。インストール/アンインストール後に再起動が必要です。","settings.addons.failedFetchSingular":"{count} 個のカタログソースの取得に失敗しました：","settings.addons.failedFetchPlural":"{count} 個のカタログソースの取得に失敗しました：","settings.addons.activeSources":"アクティブなカタログソース（{count}）","settings.addons.windowsWarning":"ネイティブ Windows のアドオンインストールはリスクが高くなります：Bun パッケージのインストール、シンボリックリンクのクリーンアップ、ロックされたファイル、再起動のタイミングは、Linux/WSL よりも予測しにくい場合があります。可能であれば WSL またはコンテナを優先してください。","settings.addons.typeExtSkill":"拡張機能 + スキル","settings.addons.typeSkill":"スキル","settings.addons.typeExt":"拡張機能","settings.addons.update":"更新","settings.addons.remove":"削除","settings.addons.install":"インストール","settings.addons.noMatch":"「{filter}」に一致するアドオンはありません","settings.addons.restartNotice":"拡張機能の変更はインストールされましたが、piclaw が再起動するまで非アクティブです。","settings.addons.restartNow":"今すぐ再起動","settings.recordings.modeFull":"完全 / 信頼済み","settings.recordings.modeMetadata":"メタデータのみ","settings.recordings.modeRedacted":"編集済み","settings.recordings.selectPrompt":"録画を選択して検査、再生、エクスポート、または削除します。","settings.recordings.playback":"再生","settings.recordings.refresh":"更新","settings.recordings.delete":"削除","settings.recordings.status":"ステータス","settings.recordings.mode":"モード","settings.recordings.chat":"チャット","settings.recordings.started":"開始","settings.recordings.ended":"終了","settings.recordings.events":"イベント","settings.recordings.redactions":"編集","settings.recordings.exportJson":"JSON をエクスポート","settings.recordings.exportJsonl":"JSONL をエクスポート","settings.recordings.exportHtml":"スタンドアロン HTML をエクスポート","settings.recordings.eventSummary":"イベント概要","settings.recordings.inspectHint":"詳細を開くか更新してトレースイベントを検査します。","settings.recordings.firstEvents":"最初のイベント","settings.recordings.heading":"セッション録画","settings.recordings.intro":"決定論的な再生と画面録画エクスポートのためのオプトイントレースキャプチャ。再生でライブエージェントやツールのエンドポイントを呼び出すことはありません。","settings.recordings.chatJid":"チャット JID","settings.recordings.title":"タイトル","settings.recordings.titlePlaceholder":"デモ録画","settings.recordings.modeLabelField":"モード","settings.recordings.optRedacted":"編集済み","settings.recordings.optMetadata":"メタデータのみ","settings.recordings.optFull":"完全 / 信頼済みローカル","settings.recordings.includeSnapshot":"タイムラインスナップショットを含める","settings.recordings.extraKeys":"追加の編集キー","settings.recordings.extraPatterns":"追加の正規表現パターン","settings.recordings.stopCurrent":"現在のチャット録画を停止","settings.recordings.start":"録画を開始","settings.recordings.redactionPreview":"編集プレビュー","settings.recordings.previewRedaction":"編集をプレビュー","settings.recordings.loading":"録画を読み込み中…","settings.recordings.noneYet":"まだ録画がありません。","settings.recordings.noneYetHint":"上で録画を開始し、再生/エクスポートを使用して決定論的な画面キャプチャを行います。","settings.recordings.listLabel":"セッション録画","settings.recordings.eventsCount":"{count} 件のイベント","settings.recordings.noMatch":"「{filter}」に一致する録画はありません。","settings.recordings.startedToast":"{chat} の録画を開始しました。","settings.recordings.startFailed":"録画の開始に失敗しました。","settings.recordings.stoppedToast":"{chat} の録画を停止しました。","settings.recordings.stopFailed":"録画の停止に失敗しました。","settings.recordings.deleteConfirm":"録画 {id} を削除しますか？","settings.recordings.deletedToast":"録画を削除しました。","settings.recordings.deleteFailed":"録画の削除に失敗しました。","settings.recordings.loadOneFailed":"録画の読み込みに失敗しました。","settings.recordings.loadFailed":"録画の読み込みに失敗しました。","settings.recordings.previewFailed":"プレビューに失敗しました。","menu.title":"メニュー","menu.showWorkspace":"ワークスペースを表示","menu.hideWorkspace":"ワークスペースを非表示","menu.openExplorer":"エクスプローラーを開く","menu.chatOnly":"チャットのみモード","menu.exitChatOnly":"チャットのみモードを終了","menu.openTerminal":"ターミナルをタブで開く","menu.openVnc":"VNC をタブで開く","menu.newFile":"新規ファイル","menu.openRecent":"最近のファイルを開く","menu.refreshTree":"ツリーを更新","menu.reindex":"ワークスペースを再インデックス","menu.showHidden":"隠しファイルを表示","menu.hideHidden":"隠しファイルを非表示","menu.scale":"拡大縮小","menu.settings":"設定"},au={en:D_,"zh-CN":eu,ja:mu},Rn=Ln});function Y_({children:n,className:i=""}){let[r,_]=w(null);return t(()=>{if(typeof document>"u")return;let c=document.createElement("div");return c.className=i||"",document.body.appendChild(c),_(c),()=>{try{In(null,c)}finally{c.remove()}}},[]),t(()=>{if(!r)return;r.className=i||"";return},[i,r]),Ti(()=>{if(!r)return;In(n,r);return},[n,r]),null}var L_=O(()=>{m()});function br(n,i){let r=String(n.label||"").localeCompare(String(i.label||""),void 0,{sensitivity:"base"});if(r!==0)return r;return String(n.id||"").localeCompare(String(i.id||""),void 0,{sensitivity:"base"})}function Cn(n){let i=Vn.findIndex((r)=>r.id===n.id);if(i>=0)Vn[i]=n;else Vn.push(n);Vn.sort(br)}function V$(n){let i=Vn.findIndex((r)=>r.id===n);if(i>=0)Vn.splice(i,1)}function C_(){return[...Vn]}function N$(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var Vn;var fi=O(()=>{Vn=[]});function Vi(n){let i=typeof n==="string"?n.trim():"";return i?i:null}function J_(n={}){if(typeof window>"u")return;let i=Vi(n.section);try{if(window.__piclawSettingsOpenRequested=!0,i)window.__piclawSettingsRequestedSection=i;else delete window.__piclawSettingsRequestedSection}catch(r){console.debug("[settings-dialog-events] failed to record open request flags",r)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:i?{section:i}:void 0}))}function vr(){if(typeof window>"u")return null;return Vi(window.__piclawSettingsRequestedSection)}function O_(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),i=vr();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(r){console.debug("[settings-dialog-events] failed to clear open request flags",r)}return{open:n,section:i}}function d_(n=typeof window<"u"?window:null){return n||null}function Ni(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function gi(n,i){return`${n}:${i}`}function S_(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function e_(n,i){if(n.length<=i)return;n.splice(0,n.length-i)}function Nn(n){if(!n||typeof n!=="object")return null;return{...n}}function Mn(n){if(!n)return null;return Xn.find((i)=>i.id===n)||null}function kr(n,i){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${i}`)}catch(r){console.debug("[app-perf] Ignoring performance.mark failure.",r,{traceId:n,phase:i})}}function m_(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let i=Mn(n);if(!i)return;for(let r of i.phases)performance.clearMarks(`piclaw:${n}:${r.phase}`)}catch(i){console.debug("[app-perf] Ignoring performance.clearMarks failure.",i,{traceId:n})}}function E_(n,i,r){let _=Qn.get(gi(n,i));if(_&&Mn(_)?.status==="active")$i(_,"cancelled","superseded",{replacementType:n,replacementChatJid:i});let c=S_(n),u={id:c,type:n,chatJid:i,startedAt:Ni(),detail:Nn(r),phases:[],status:"active"};return Xn.push(u),e_(Xn,100),Qn.set(gi(n,i),c),kr(c,"start"),c}function $i(n,i,r,_,c){let u=Mn(n);if(!u||u.status!=="active")return;if(r)u.phases.push({phase:r,at:Ni(),detail:Nn(_)}),kr(u.id,r);if(u.status=i,u.completedAt=Ni(),u.durationMs=u.completedAt-u.startedAt,c!==void 0)u.error=c instanceof Error?c.message:String(c);let f=gi(u.type,u.chatJid);if(Qn.get(f)===u.id)Qn.delete(f);m_(u.id)}function $f(n=d_()){let i=n?.__PICLAW_PERF__;if(i)return i;if(n)n.__PICLAW_PERF__=Xi;return Xi}function Jn(n=d_()){return $f(n)}function M$(n,i,r){return Jn().ensureTrace(n,i,r)}function t$(n,i){return Jn().getActiveTraceId(n,i)}function q$(n,i,r){Jn().markTrace(n,i,r)}function A$(n,i,r="settled",_){let c=Mn(n);if(!c||c.status!=="active")return!1;let u=new Set(c.phases.map((f)=>f.phase));if(!i.every((f)=>u.has(f)))return!1;return $i(n,"completed",r,_),!0}function Z$(n,i,r="failed",_){Jn().failTrace(n,i,r,_)}function D$(n,i="cancelled",r){Jn().cancelTrace(n,i,r)}function pr(n){return Jn().recordRequest(n)}var Xn,si,Qn,Xi;var a_=O(()=>{Xn=[],si=[],Qn=new Map;Xi={startTrace(n,i,r){return E_(n,i,r)},ensureTrace(n,i,r){let _=Qn.get(gi(n,i));if(_&&Mn(_)?.status==="active")return _;return E_(n,i,r)},getActiveTraceId(n,i){let r=Qn.get(gi(n,i));return r&&Mn(r)?.status==="active"?r:null},markTrace(n,i,r){let _=Mn(n);if(!_||_.status!=="active")return;_.phases.push({phase:i,at:Ni(),detail:Nn(r)}),kr(_.id,i)},completeTrace(n,i="settled",r){$i(n,"completed",i,r)},failTrace(n,i,r="failed",_){$i(n,"failed",r,_,i)},cancelTrace(n,i="cancelled",r){$i(n,"cancelled",i,r)},recordRequest(n){let i=S_("req");return si.push({...n,id:i,detail:Nn(n.detail)}),e_(si,300),i},getTraces(){return Xn.map((n)=>({...n,detail:Nn(n.detail),phases:n.phases.map((i)=>({...i,detail:Nn(i.detail)}))}))},getRequests(){return si.map((n)=>({...n,detail:Nn(n.detail)}))},clear(){Xn.forEach((n)=>m_(n.id)),Xn.splice(0,Xn.length),si.splice(0,si.length),Qn.clear()},printSummary(){let n={traces:Xi.getTraces(),requests:Xi.getRequests()};return console.table(n.traces.map((i)=>({id:i.id,type:i.type,chatJid:i.chatJid,status:i.status,durationMs:Number(i.durationMs||0).toFixed(1),lastPhase:i.phases[i.phases.length-1]?.phase||"start"}))),n}}});function On(n){let i=Number(n||0);return Number.isFinite(i)&&i>0?i:null}function gf(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function of(n){let i=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(i)}function nc(n){let i=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(i)}function ic(n=typeof window<"u"?window:null){let i=On(n?.innerWidth)??On(n?.screen?.availWidth)??On(n?.screen?.width)??0,r=On(n?.innerHeight)??On(n?.screen?.availHeight)??On(n?.screen?.height)??0,_=i&&r?Math.min(i,r):i||r,c=i&&r?Math.max(i,r):i||r,u=gf(n),f=Number(n?.navigator?.maxTouchPoints||0),$=u||f>1;if(_>0&&_<=640)return"mobile";if(of(n)&&!nc(n))return"mobile";if(nc(n))return"tablet";if($&&_>0&&_<=1100)return"tablet";if(c>0&&c<=1180&&_>0&&_<=900)return"tablet";return"desktop"}var W0={};un(W0,{uploadWorkspaceFile:()=>v0,uploadMedia:()=>Cf,updateWorkspaceFile:()=>g0,updateScheduledTask:()=>zr,submitAdaptiveCardAction:()=>Of,streamSidePrompt:()=>Ef,stopSessionRecording:()=>Wr,stopAutoresearch:()=>qf,steerAgentQueueItem:()=>If,startSessionRecording:()=>Fr,setWorkspaceVisibility:()=>B0,setAgentThoughtVisibility:()=>ef,sessionRecordingPlaybackUrl:()=>Ur,sessionRecordingExportUrl:()=>oi,sendPeerAgentMessage:()=>Pf,sendAgentMessage:()=>Bn,searchPosts:()=>xf,saveWorkspaceSettings:()=>Nr,saveWebPushSubscription:()=>Vf,saveUiState:()=>Tr,saveQuickActionsSettings:()=>Vr,savePostAnnotations:()=>F0,saveEnvironmentOverride:()=>Mi,restoreChatBranch:()=>Tf,respondToAgentRequest:()=>Jf,reorderAgentQueueItem:()=>Yf,renameWorkspaceFile:()=>p0,renameChatJid:()=>Gf,renameChatBranch:()=>Ff,removeAgentQueueItem:()=>Df,reindexWorkspace:()=>f0,purgeChatBranch:()=>Uf,pruneChatBranch:()=>jf,previewSessionRecordingRedaction:()=>Gr,moveWorkspaceEntry:()=>K0,mergeChatBranchIntoParent:()=>Wf,getWorkspaceTree:()=>_0,getWorkspaceRawUrl:()=>_c,getWorkspaceIndexStatus:()=>u0,getWorkspaceFileStat:()=>$0,getWorkspaceFileDownloadUrl:()=>z0,getWorkspaceFile:()=>s0,getWorkspaceDownloadUrl:()=>H0,getWorkspaceBranch:()=>c0,getWebPushPublicKey:()=>Rf,getTimeline:()=>wf,getThumbnailUrl:()=>af,getThread:()=>bf,getSystemMetrics:()=>vf,getSessionRecordings:()=>Hr,getSessionRecording:()=>Qi,getScheduledTasks:()=>Br,getQuickActionsSettings:()=>Rr,getPostsByHashtag:()=>yf,getMediaUrl:()=>mf,getMediaText:()=>i0,getMediaInfo:()=>n0,getMediaBlob:()=>r0,getEnvironmentSettings:()=>Xr,getChatBranches:()=>Bf,getAutoresearchStatus:()=>tf,getAgents:()=>Xf,getAgentThought:()=>Sf,getAgentStatus:()=>Qf,getAgentQueueState:()=>Zf,getAgentModels:()=>Qr,getAgentContext:()=>Mf,getAgentCommands:()=>Pr,getActiveChatAgents:()=>hf,forkChatBranch:()=>zf,dismissAutoresearch:()=>Af,deleteWorkspaceFile:()=>h0,deleteWebPushSubscription:()=>Nf,deleteSessionRecording:()=>jr,deletePost:()=>Kf,createWorkspaceFile:()=>k0,createRootChatSession:()=>Hf,createReply:()=>pf,createPost:()=>kf,completeInstanceOobe:()=>Lf,attachWorkspaceFile:()=>o0,addToWhitelist:()=>df,SSEClient:()=>cc});function hn(n,i={}){if(String(i.method||"GET").toUpperCase()!=="GET")return D(n,i);let _=Kr.get(n);if(_)return _;let c=D(n,i).finally(()=>{Kr.delete(n)});return Kr.set(n,c),c}async function D(n,i={}){let r=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),_;try{_=await fetch(rn+n,{...i,headers:{"Content-Type":"application/json",...i.headers}})}catch(u){throw pr({method:String(i.method||"GET").toUpperCase(),url:n,startedAt:r,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-r,ok:!1,detail:{failedBeforeResponse:!0}}),u}let c=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-r;if(pr({method:String(i.method||"GET").toUpperCase(),url:n,startedAt:r,durationMs:c,status:_.status,ok:_.ok,requestId:_.headers?.get?.("x-request-id")||null,serverTiming:_.headers?.get?.("Server-Timing")||null}),!_.ok){let u=await _.json().catch(()=>({error:"Unknown error"}));throw Error(u.error||`HTTP ${_.status}`)}return _.json()}function rc(n){let i=String(n||"").split(`
`),r="message",_=[];for(let u of i)if(u.startsWith("event:"))r=u.slice(6).trim()||"message";else if(u.startsWith("data:"))_.push(u.slice(5).trim());let c=_.join(`
`);if(!c)return null;try{return{event:r,data:JSON.parse(c)}}catch{return{event:r,data:c}}}async function lf(n,i){if(!n.body)throw Error("Missing event stream body");let r=n.body.getReader(),_=new TextDecoder,c="";while(!0){let{value:f,done:$}=await r.read();if($)break;c+=_.decode(f,{stream:!0});let l=c.split(`

`);c=l.pop()||"";for(let g of l){let x=rc(g);if(x)i(x.event,x.data)}}c+=_.decode();let u=rc(c);if(u)i(u.event,u.data)}async function wf(n=10,i=null,r=null){let _=`/timeline?limit=${n}`;if(i)_+=`&before=${i}`;if(r)_+=`&chat_jid=${encodeURIComponent(r)}`;return hn(_)}async function yf(n,i=50,r=0,_=null){let c=_?`&chat_jid=${encodeURIComponent(_)}`:"";return D(`/hashtag/${encodeURIComponent(n)}?limit=${i}&offset=${r}${c}`)}async function xf(n,i=50,r=0,_=null,c="current",u=null,f=null){let $=_?`&chat_jid=${encodeURIComponent(_)}`:"",l=c?`&scope=${encodeURIComponent(c)}`:"",g=u?`&root_chat_jid=${encodeURIComponent(u)}`:"",x=f?.images?"&images=1":"",o=f?.attachments?"&attachments=1":"";return D(`/search?q=${encodeURIComponent(n)}&limit=${i}&offset=${r}${$}${l}${g}${x}${o}`)}async function bf(n,i=null){let r=i?`?chat_jid=${encodeURIComponent(i)}`:"";return D(`/thread/${n}${r}`)}async function vf(){return D("/agent/system-metrics")}async function Br(n={}){let i=new URLSearchParams;if(n?.id)i.set("id",String(n.id));if(n?.chatJid)i.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")i.set("status",String(n.status));if(n?.limit)i.set("limit",String(n.limit));if(n?.includeRunLogs)i.set("include_run_logs","1");if(n?.runLogLimit)i.set("run_log_limit",String(n.runLogLimit));let r=i.toString()?`?${i.toString()}`:"";return D(`/agent/scheduled-tasks${r}`)}async function zr(n,i,r={}){return D("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:i,allow_internal:r?.allowInternal===!0})})}async function Hr(){return D("/agent/recordings")}async function Qi(n){return D(`/agent/recordings/${encodeURIComponent(n)}`)}async function Fr(n={}){return D("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function Wr(n={}){return D("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function jr(n){return D(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function oi(n,i="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(i)}`}function Ur(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function Gr(n,i={}){return D("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...i})})}async function Tr(n){return D("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function kf(n,i=[],r=null){let _=r?`?chat_jid=${encodeURIComponent(r)}`:"";return D(`/post${_}`,{method:"POST",body:JSON.stringify({content:n,media_ids:i})})}async function pf(n,i,r=[],_=null){let c=_?`?chat_jid=${encodeURIComponent(_)}`:"";return D(`/post/reply${c}`,{method:"POST",body:JSON.stringify({thread_id:n,content:i,media_ids:r})})}async function Kf(n,i=!1,r=null){let _=r?`&chat_jid=${encodeURIComponent(r)}`:"",c=`/post/${n}?cascade=${i?"true":"false"}${_}`;return D(c,{method:"DELETE"})}async function Bn(n,i,r=null,_=[],c=null,u=null){let f=u?`?chat_jid=${encodeURIComponent(u)}`:"",$={content:i,thread_id:r,media_ids:_,client_context:{screen_hint:ic()}};if(c==="auto"||c==="queue"||c==="steer")$.mode=c;return D(`/agent/${n}/message${f}`,{method:"POST",body:JSON.stringify($)})}async function Pr(n="web:default"){let i=typeof n==="string"&&n.trim()?n.trim():"web:default";return hn(`/agent/commands?chat_jid=${encodeURIComponent(i)}`)}async function Rr(){return D("/agent/settings/quick-actions")}async function Vr(n){return D("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function Nr(n){return D("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function Xr(){return D("/agent/settings/environment")}async function Mi(n){return D("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function hf(){return D("/agent/active-chats")}async function Bf(n=null,i={}){let r=new URLSearchParams;if(n)r.set("root_chat_jid",String(n));if(i?.includeArchived)r.set("include_archived","1");let _=r.toString()?`?${r.toString()}`:"";return hn(`/agent/branches${_}`)}async function zf(n,i={}){return D("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...i?.agentName?{agent_name:i.agentName}:{}})})}async function Hf(n){return D("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function Ff(n,i={}){return D("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...i&&Object.prototype.hasOwnProperty.call(i,"agentName")?{agent_name:i.agentName}:{}})})}async function Wf(n){return D("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function jf(n){return D("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Uf(n){return D("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Gf(n,i){return D("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:i})})}async function Tf(n,i={}){return D("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...i&&Object.prototype.hasOwnProperty.call(i,"agentName")?{agent_name:i.agentName}:{}})})}async function Pf(n,i,r,_="auto",c={}){let u={source_chat_jid:n,content:r,mode:_,...c?.sourceAgentName?{source_agent_name:c.sourceAgentName}:{},...c?.targetBy==="agent_name"?{target_agent_name:i}:{target_chat_jid:i}};return D("/agent/peer-message",{method:"POST",body:JSON.stringify(u)})}async function Rf(){return D("/agent/push/vapid-public-key")}async function Vf(n,i={}){let r={subscription:n,...i?.deviceId?{device_id:i.deviceId}:{}};return D("/agent/push/subscription",{method:"POST",body:JSON.stringify(r)})}async function Nf(n,i={}){let r={subscription:n,...i?.deviceId?{device_id:i.deviceId}:{}};return D("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(r)})}async function Xf(){return hn("/agent/roster")}async function Qf(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return hn(`/agent/status${i}`)}async function Mf(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return hn(`/agent/context${i}`)}async function tf(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return hn(`/agent/autoresearch/status${i}`)}async function qf(n=null,i={}){return D("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:i?.generateReport!==!1})})}async function Af(n=null){return D("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function Zf(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return hn(`/agent/queue-state${i}`)}async function Df(n,i=null){let r=await fetch(rn+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:i||void 0})});if(!r.ok){let _=await r.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(_.error||`HTTP ${r.status}`)}return r.json()}async function If(n,i=null){let r=await fetch(rn+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:i||void 0})});if(!r.ok){let _=await r.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(_.error||`HTTP ${r.status}`)}return r.json()}async function Yf(n,i,r=null){let _=await fetch(rn+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:i,chat_jid:r||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Qr(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return hn(`/agent/models${i}`)}async function Lf(n="provider-ready"){return D("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function Cf(n){let i=new FormData;i.append("file",n);let r=await fetch(rn+"/media/upload",{method:"POST",body:i});if(!r.ok){let _=await r.json().catch(()=>({error:"Upload failed"}));throw Error(_.error||`HTTP ${r.status}`)}return r.json()}async function Jf(n,i,r=null){let _=await fetch(rn+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:i,chat_jid:r||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to respond"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Of(n){let i=await fetch(rn+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok){let r=await i.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(r.error||`HTTP ${i.status}`)}return i.json()}async function Ef(n,i={}){let r=await fetch(rn+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:i.systemPrompt||void 0,chat_jid:i.chatJid||void 0}),signal:i.signal});if(!r.ok){let u=await r.json().catch(()=>({error:"Side prompt failed"}));throw Error(u.error||`HTTP ${r.status}`)}let _=null,c=null;if(await lf(r,(u,f)=>{if(i.onEvent?.(u,f),u==="side_prompt_thinking_delta")i.onThinkingDelta?.(f?.delta||"");else if(u==="side_prompt_text_delta")i.onTextDelta?.(f?.delta||"");else if(u==="side_prompt_done")_=f;else if(u==="side_prompt_error")c=f}),c){let u=Error(c?.error||"Side prompt failed");throw u.payload=c,u}return _}async function df(n,i){let r=await fetch(rn+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:i})});if(!r.ok){let _=await r.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(_.error||`HTTP ${r.status}`)}return r.json()}async function Sf(n,i="thought"){let r=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(i)}`;return D(r)}async function ef(n,i,r){return D("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:i,expanded:Boolean(r)})})}function mf(n){return`${rn}/media/${n}`}function af(n){return`${rn}/media/${n}/thumbnail`}async function n0(n){let i=await fetch(`${rn}/media/${n}/info`);if(!i.ok)throw Error("Failed to get media info");return i.json()}async function i0(n){let i=await fetch(`${rn}/media/${n}`);if(!i.ok)throw Error("Failed to load media text");return i.text()}async function r0(n){let i=await fetch(`${rn}/media/${n}`);if(!i.ok)throw Error("Failed to load media blob");return i.blob()}async function _0(n="",i=2,r=!1){let _=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${i}&show_hidden=${r?"1":"0"}`;return D(_)}async function c0(n=""){let i=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return D(i)}async function u0(n="all"){let i=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return D(i)}async function f0(n="all"){return D("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function s0(n,i=20000,r=null){let _=r?`&mode=${encodeURIComponent(r)}`:"",c=`/workspace/file?path=${encodeURIComponent(n)}&max=${i}${_}`;return D(c)}async function $0(n){return D(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function g0(n,i){return D("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:i})})}async function o0(n){return D("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function w0(n,i="",r={}){let _=new URLSearchParams;if(i)_.set("path",i);if(r.overwrite)_.set("overwrite","1");let c=_.toString();return c?`${n}?${c}`:n}function y0(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function x0(n,i,r,_){return new Promise((c,u)=>{let f=new XMLHttpRequest;f.open("POST",rn+i);for(let[$,l]of Object.entries(r||{}))if(l!==void 0&&l!==null)f.setRequestHeader($,String(l));f.upload.onprogress=($)=>{if(typeof _==="function")_({loaded:$.lengthComputable?$.loaded:0,total:$.lengthComputable?$.total:n.size,lengthComputable:$.lengthComputable})},f.onload=()=>{try{let $=f.responseText?JSON.parse(f.responseText):{};if(f.status>=200&&f.status<300)c($);else{let l=Error($.error||`HTTP ${f.status}`);l.status=f.status,l.code=$.code,u(l)}}catch{let $=Error(`HTTP ${f.status}`);$.status=f.status,u($)}},f.onerror=()=>u(Error("Upload failed (network error)")),f.ontimeout=()=>u(Error("Upload timed out")),f.send(n)})}async function b0(n,i="",r={}){let _=y0(),c=w0("/workspace/upload-chunk",i,r),u=Math.max(1,Math.min(hr,Number(r.chunkSize)||l0)),f=Math.max(0,Number(n?.size)||0),$=Math.max(1,Math.ceil(f/u)),l=0,g=null;for(let x=0;x<$;x+=1){let o=x*u,v=Math.min(f,o+u),K=n.slice(o,v),B=K.size;if(g=await x0(K,c,{"X-Upload-Id":_,"X-Chunk-Index":x,"X-Chunk-Total":$,"X-File-Name":n?.name||"upload.bin","X-File-Size":f},(k)=>{if(typeof r.onProgress!=="function")return;let H=Math.min(f,l+(k?.loaded||0)),y=f||1;r.onProgress({loaded:H,total:y,percent:Math.round(H/y*100),chunkIndex:x,chunkTotal:$})}),l+=B,typeof r.onProgress==="function"){let k=f||1,H=f?l:k;r.onProgress({loaded:H,total:k,percent:Math.round(H/k*100),chunkIndex:x+1,chunkTotal:$})}}return g}async function v0(n,i="",r={}){if(n?.size>hr){let _=(n.size/1048576).toFixed(0),c=(hr/1048576).toFixed(0),u=Error(`File too large (${_} MB). Maximum upload size is ${c} MB.`);throw u.code="file_too_large",u}return await b0(n,i,r)}async function k0(n,i,r=""){let _=await fetch(rn+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:i,content:r})});if(!_.ok){let c=await _.json().catch(()=>({error:"Create failed"})),u=Error(c.error||`HTTP ${_.status}`);throw u.status=_.status,u.code=c.code,u}return _.json()}async function p0(n,i){let r=await fetch(rn+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:i})});if(!r.ok){let _=await r.json().catch(()=>({error:"Rename failed"})),c=Error(_.error||`HTTP ${r.status}`);throw c.status=r.status,c.code=_.code,c}return r.json()}async function K0(n,i){let r=await fetch(rn+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:i})});if(!r.ok){let _=await r.json().catch(()=>({error:"Move failed"})),c=Error(_.error||`HTTP ${r.status}`);throw c.status=r.status,c.code=_.code,c}return r.json()}async function h0(n){let i=`/workspace/file?path=${encodeURIComponent(n||"")}`;return D(i,{method:"DELETE"})}async function B0(n,i=!1){return D("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(i)})})}function _c(n,i={}){let r=new URLSearchParams({path:String(n||"")});if(i.download)r.set("download","1");return`${rn}/workspace/raw?${r.toString()}`}function z0(n){return _c(n,{download:!0})}function H0(n,i=!1){let r=`path=${encodeURIComponent(n||"")}&show_hidden=${i?"1":"0"}`;return`${rn}/workspace/download?${r}`}class cc{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,i,r={}){this.onEvent=n,this.onStatusChange=i,this.chatJid=typeof r?.chatJid==="string"&&r.chatJid.trim()?r.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(rn+"/sse/stream"+n);let i=(r)=>{this.eventSource.addEventListener(r,(_)=>{this.markActivity(),this.onEvent(r,JSON.parse(_.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),i("new_post"),i("new_reply"),i("agent_response"),i("interaction_updated"),i("interaction_deleted"),i("agent_status"),i("agent_steer_queued"),i("agent_followup_queued"),i("agent_followup_consumed"),i("agent_followup_removed"),i("workspace_update"),i("agent_draft"),i("agent_draft_delta"),i("agent_thought"),i("agent_thought_delta"),i("model_changed"),i("ui_theme"),i("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(i)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,i=60000,r=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,r+i),this.reconnectAttempts=0;let _=Math.max(this.cooldownUntil-r,0),c=Math.max(this.reconnectDelay,_);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},c),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}async function F0(n,i,r){let _=r?`?chat_jid=${encodeURIComponent(r)}`:"";return D(`/post/${n}/annotations${_}`,{method:"PATCH",body:JSON.stringify({annotations:i})})}var rn="",Kr,hr=1073741824,l0=8388608;var zn=O(()=>{a_();Kr=new Map});function U0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(qi,{detail:{enabled:Boolean(n)}}))}function sc(n){if(typeof fetch!=="function")return;Tr({ui_meters:n}).catch((i)=>{console.debug("[meters] Failed to persist meters UI state.",i)})}function G0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(j0,{detail:{collapsed:Boolean(n)}}))}function Mr(n=!1){return lr(uc,n)}function E$(n=!1){return lr(fc,n)}function ti(n,i={}){let r=i.persist!==!1,_=i.persistServer!==!1,c=Boolean(n);if(r)sn(uc,c?"true":"false");if(_)sc({enabled:c});return U0(c),c}function T0(n,i={}){let r=i.persist!==!1,_=i.persistServer!==!1,c=Boolean(n);if(r)sn(fc,c?"true":"false");if(_)sc({collapsed:c});return G0(c),c}function d$(n){let i=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")ti(Boolean(n.enabled),{persistServer:!1});else if(i==="toggle"){let r=!Mr(!1);ti(r,{persistServer:!1})}if(typeof n?.collapsed==="boolean")T0(Boolean(n.collapsed),{persistServer:!1})}var uc="piclaw_system_meters_enabled",fc="piclaw_system_meters_collapsed",qi="piclaw-meters-change",j0="piclaw-meters-collapsed-change";var $c=O(()=>{zn()});function gc(n,i){if(n===""||n===null||n===void 0)return i;let r=Number(n);return Number.isFinite(r)?r:i}function oc(n,{min:i=-1/0,max:r=1/0}={}){let _=Number.isFinite(Number(i))?Number(i):-1/0,c=Number.isFinite(Number(r))?Number(r):1/0;return Math.min(c,Math.max(_,Number(n)))}function En(n,{fallback:i=0,min:r=-1/0,max:_=1/0}={}){let c=gc(n,i);return oc(c,{min:r,max:_})}function P0(n,{direction:i=1,step:r=1,fallback:_=0,min:c=-1/0,max:u=1/0}={}){let f=En(n,{fallback:_,min:c,max:u}),$=Math.abs(gc(r,1))||1,l=Number(i)<0?-1:1;return oc(f+l*$,{min:c,max:u})}function nn({value:n,min:i,max:r,step:_=1,fallback:c,width:u="80px",disabled:f=!1,label:$,onChange:l}){let g=Number.isFinite(Number(c))?Number(c):En(n,{fallback:0,min:i,max:r}),[x,o]=w(String(n??g)),v=J(!1);t(()=>{if(!v.current)o(String(n??g))},[n,g]);let K=G((k)=>{v.current=!1;let H=En(k,{fallback:g,min:i,max:r});o(String(H)),l?.(H)},[g,i,r,l]),B=G((k)=>{v.current=!1;let H=P0(n,{direction:k,step:_,fallback:g,min:i,max:r});o(String(H)),l?.(H)},[g,r,i,l,_,n]);return s`
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
                onInput=${(k)=>{v.current=!0,o(k.target.value)}}
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
    `}var dn=O(()=>{m()});function lc(n){let i=String(n||"").trim();if(!i)return"";if(i.startsWith("http://")||i.startsWith("https://")||i.startsWith("data:")||i.startsWith("blob:"))return i;if(i.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(i.slice(11))}`;if(i.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(i))return"";if(i.startsWith("\\\\"))return"";if(i.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(i.replace(/^\.\//,""))}`}function wc({value:n,onChange:i}){let{t:r}=C(),_=J(null),[c,u]=w(lc(n));t(()=>{u(lc(n))},[n]);let f=G(($)=>{let l=$.target.files?.[0];if(!l)return;let g=new FileReader;g.onload=()=>{let x=g.result;u(x),i?.(x)},g.readAsDataURL(l)},[i]);return s`
        <div class="settings-avatar-inline" onClick=${()=>_.current?.click()} title=${r("settings.general.avatarUpload")}>
            ${c?s`<img src=${c} alt="avatar" />`:s`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${_} style="display:none" onChange=${f} />
        </div>
    `}function yc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function R0(n,i={}){let r=typeof n==="string"?n:"";if(!r)return!1;let _=i.navigator??(typeof navigator<"u"?navigator:null),c=i.document??(typeof document<"u"?document:null);if(_?.clipboard?.writeText)try{return await _.clipboard.writeText(r),!0}catch(u){}try{if(!c?.body||typeof c.createElement!=="function"||typeof c.execCommand!=="function")return!1;let u=c.createElement("textarea");u.value=r,u.setAttribute?.("readonly",""),u.style.position="fixed",u.style.left="-9999px",u.style.top="0",u.style.opacity="0",c.body.appendChild(u),u.focus?.(),u.select?.();let f=Boolean(c.execCommand("copy"));return c.body.removeChild(u),f}catch(u){return!1}}function tr({settingsData:n,setStatus:i,mergeSettingsData:r}){let{t:_}=C(),[c,u]=w(""),[f,$]=w(""),[l,g]=w(""),[x,o]=w(""),[v,K]=w(32),[B,k]=w(256),[H,y]=w(""),[p,V]=w(!1),[T,j]=w(!1),[P,z]=w(!1),[R,h]=w(()=>Mr(!1)),[b,q]=w(!1),F=J(""),N=J(null),I=J(!0);t(()=>{return I.current=!0,()=>{I.current=!1}},[]);let W=G((Q)=>{let M=yc(Q);u(M.userName),$(M.userAvatar),g(M.assistantName),o(M.assistantAvatar),K(M.composeUploadLimitMb),k(M.workspaceUploadLimitMb),y(Q?.widgetToken||""),F.current=JSON.stringify(M)},[]);t(()=>{W(n||{})},[n,W]),t(()=>{let Q=(M)=>{h(Boolean(M?.detail?.enabled))};return window.addEventListener(qi,Q),()=>window.removeEventListener(qi,Q)},[]);let A=L(()=>JSON.stringify(yc({userName:c,userAvatar:f,assistantName:l,assistantAvatar:x,composeUploadLimitMb:v,workspaceUploadLimitMb:B})),[c,f,l,x,v,B]);t(()=>{if(A===F.current)return;if(N.current)clearTimeout(N.current);return N.current=setTimeout(async()=>{if(!I.current)return;let Q=document.activeElement;if(Q&&Q.closest?.(".settings-number-stepper"))return;try{let M=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:A}),gn=await M.json().catch(()=>({}));if(!I.current)return;if(!M.ok||!gn?.ok||!gn?.settings)return;F.current=A,r?.(gn.settings),q(!0),setTimeout(()=>{if(I.current)q(!1)},4000)}catch(M){console.warn("[settings/general] Failed to persist general settings snapshot.",M)}},800),()=>{if(N.current)clearTimeout(N.current)}},[A,r]);let Y=n?.instanceTotp||{configured:!1,issuer:l||"Piclaw",label:c?`${l||"Piclaw"}:${c}`:l||"Piclaw",secret:"",otpauth:"",qrSvg:""},d=G(async()=>{if(!H)return;if(await R0(H))j(!0),setTimeout(()=>{if(I.current)j(!1)},3000);else i?.(_("settings.general.copyFailed")),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[H,i]),_n=G(async()=>{if(P)return;if(!confirm(_("settings.general.regenConfirm")))return;z(!0);try{let Q=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),M=await Q.json().catch(()=>({}));if(!Q.ok||!M?.ok||!M?.settings)throw Error(M?.error||"Failed to regenerate widget token.");y(M.settings.widgetToken||""),r?.(M.settings),q(!0),setTimeout(()=>{if(I.current)q(!1)},4000)}catch(Q){console.warn("[settings/general] Failed to regenerate widget token.",Q)}finally{if(I.current)z(!1)}},[P,r]),$n=typeof window<"u"&&window.isSecureContext,yn=H?"•".repeat(Math.min(Math.max(H.length,16),48)):"—",kn=p?H||"—":yn;return s`
        <div class="settings-section">
            ${b&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.appliedNotice")}
                </div>
            `}
            <h3>${_("settings.general.identity")}</h3>
            <div class="settings-row">
                <label>${_("settings.general.userLabel")}</label>
                <${wc} value=${f} onChange=${$} />
                <input type="text" value=${c} onInput=${(Q)=>u(Q.target.value)} placeholder=${_("settings.general.yourName")} />
            </div>
            <div class="settings-row">
                <label>${_("settings.general.agentLabel")}</label>
                <${wc} value=${x} onChange=${o} />
                <input type="text" value=${l} onInput=${(Q)=>g(Q.target.value)} placeholder=${_("settings.general.agentName")} />
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
                    <input type="checkbox" checked=${R}
                        onChange=${()=>{let Q=ti(!R);h(Q)}} />
                    <span class="settings-hint" style="margin:0">${_("settings.general.systemMetersHint")}</span>
                </div>
            </div>

            <h3 style="margin-top:20px">${_("settings.general.instanceConfig")}</h3>
            <div class="settings-row">
                <label>${_("settings.general.composeUpload")}</label>
                <${nn}
                    label=${_("settings.general.composeUploadAria")}
                    value=${v}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">${_("settings.general.composeUploadHint")}</span>
            </div>
            <div class="settings-row">
                <label>${_("settings.general.workspaceUpload")}</label>
                <${nn}
                    label=${_("settings.general.workspaceUploadAria")}
                    value=${B}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${k}
                />
                <span class="settings-hint" style="margin:0">${_("settings.general.workspaceUploadHint")}</span>
            </div>

            <h3 style="margin-top:20px">${_("settings.general.authentication")}</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>${_("settings.general.widgetToken")}</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">${_("settings.general.token")}</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${kn}</code>
                        <button class=${`settings-keychain-reveal-btn${p?" active":""}`}
                            type="button"
                            onClick=${()=>V((Q)=>!Q)}
                            disabled=${!H}
                            title=${p?_("settings.general.hideToken"):_("settings.general.revealToken")}>
                            ${p?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${d} disabled=${!H} title=${_("settings.general.copyToken")}>
                            ${T?s`<span class="settings-widget-token-copied">${_("settings.general.copied")}</span>`:s`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
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
                            ${Y.configured?_("settings.general.totpConfiguredHint"):_("settings.general.totpUnconfiguredHint")}
                        </div>
                    </div>
                </div>
                ${Y.configured?s`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:Y.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>${_("settings.general.issuer")}</label>
                                <input type="text" readonly value=${Y.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>${_("settings.general.label")}</label>
                                <input type="text" readonly value=${Y.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>${_("settings.general.secret")}</label>
                                <input type="text" readonly value=${Y.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var xc=O(()=>{m();$c();dn();fn()});var vc={};un(vc,{SessionsSection:()=>V0});function bc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function V0({settingsData:n,setStatus:i,mergeSettingsData:r}){let{t:_}=C(),[c,u]=w(!0),[f,$]=w(16),[l,g]=w(4000),[x,o]=w(3),[v,K]=w(64),[B,k]=w("none"),[H,y]=w(!1),p=J(""),V=J(null),T=J(!0);t(()=>{return T.current=!0,()=>{T.current=!1}},[]);let j=G((z)=>{let R=bc(z);u(R.sessionAutoRotate),$(R.sessionMaxSizeMb),g(R.sessionMaxLines),o(R.sessionMaxCompactions),K(R.toolUseBudget),k(R.sessionIsolation),p.current=JSON.stringify(R)},[]);t(()=>{j(n||{})},[n,j]);let P=L(()=>JSON.stringify(bc({sessionAutoRotate:c,sessionMaxSizeMb:f,sessionMaxLines:l,sessionMaxCompactions:x,toolUseBudget:v,sessionIsolation:B})),[c,f,l,x,v,B]);return t(()=>{if(P===p.current)return;if(V.current)clearTimeout(V.current);return V.current=setTimeout(async()=>{if(!T.current)return;let z=document.activeElement;if(z&&z.closest?.(".settings-number-stepper"))return;try{let R=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:P}),h=await R.json().catch(()=>({}));if(!T.current)return;if(!R.ok||!h?.ok||!h?.settings)return;p.current=P,r?.(h.settings),y(!0),setTimeout(()=>{if(T.current)y(!1)},4000)}catch(R){console.warn("[settings/sessions] Failed to persist session settings.",R)}},800),()=>{if(V.current)clearTimeout(V.current)}},[P,r]),s`
        <div class="settings-section">
            ${H&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.appliedNotice")}
                </div>
            `}
            <h3>${_("settings.sessions.lifecycle")}</h3>
            <div class="settings-row">
                <label>${_("settings.sessions.autoRotate")}</label>
                <input type="checkbox" checked=${c} onChange=${(z)=>u(z.target.checked)} />
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
                    onChange=${$}
                />
            </div>

            <h3 style="margin-top:20px">${_("settings.sessions.agentBehaviour")}</h3>
            <div class="settings-row">
                <label>${_("settings.sessions.toolBudget")}</label>
                <${nn}
                    label=${_("settings.sessions.toolBudgetAria")}
                    value=${v}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">${_("settings.sessions.toolBudgetHint")}</span>
            </div>
            <div class="settings-row">
                <label>${_("settings.sessions.isolation")}</label>
                <select value=${B} onChange=${(z)=>k(z.target.value)}>
                    <option value="none">${_("settings.sessions.isolationNone")}</option>
                    <option value="summary">${_("settings.sessions.isolationSummary")}</option>
                    <option value="full">${_("settings.sessions.isolationFull")}</option>
                </select>
            </div>
        </div>
    `}var kc=O(()=>{m();dn();fn()});var pc={};un(pc,{__recordingsSettingsTest:()=>M0,RecordingsSection:()=>Q0});function Zi(n){if(!n)return"—";let i=new Date(n);if(Number.isNaN(i.getTime()))return n;return i.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function qr(n){if(n==="full")return Gn("settings.recordings.modeFull");if(n==="metadata")return Gn("settings.recordings.modeMetadata");return Gn("settings.recordings.modeRedacted")}function Ai({children:n,type:i="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${i}`}>${n}</span>`}function N0(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function li(n){return String(n||"").split(`
`).map((i)=>i.trim()).filter(Boolean)}function X0({recording:n,details:i,onDelete:r,onRefresh:_}){let{t:c}=C();if(!n)return s`<div class="settings-task-detail-empty">${c("settings.recordings.selectPrompt")}</div>`;let u=i?.meta||n,f=Array.isArray(i?.events)?i.events:[],$=f.reduce((g,x)=>g+(Array.isArray(x.redactions)?x.redactions.length:0),0),l=f.reduce((g,x)=>{let o=x.kind||"event";return g[o]=(g[o]||0)+1,g},{});return s`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${u.title||u.id}</h4>
                    <code>${u.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(Ur(u.id),"_blank","noopener,noreferrer")}>${c("settings.recordings.playback")}</button>
                    <button onClick=${_}>${c("settings.recordings.refresh")}</button>
                    <button class="danger" onClick=${()=>r(u)}>${c("settings.recordings.delete")}</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>${c("settings.recordings.status")}</span><strong>${u.status||"—"}</strong>
                <span>${c("settings.recordings.mode")}</span><strong>${qr(u.mode)}</strong>
                <span>${c("settings.recordings.chat")}</span><code>${u.chatJid||"—"}</code>
                <span>${c("settings.recordings.started")}</span><strong>${Zi(u.startedAt)}</strong>
                <span>${c("settings.recordings.ended")}</span><strong>${Zi(u.endedAt)}</strong>
                <span>${c("settings.recordings.events")}</span><strong>${u.eventCount??f.length}</strong>
                <span>${c("settings.recordings.redactions")}</span><strong>${$}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${oi(u.id,"json")}>${c("settings.recordings.exportJson")}</a>
                <a href=${oi(u.id,"jsonl")}>${c("settings.recordings.exportJsonl")}</a>
                <a href=${oi(u.id,"html")}>${c("settings.recordings.exportHtml")}</a>
            </div>
            <h4>${c("settings.recordings.eventSummary")}</h4>
            ${f.length===0&&s`<p class="settings-hint">${c("settings.recordings.inspectHint")}</p>`}
            ${f.length>0&&s`
                <div class="settings-recording-event-summary">
                    ${Object.entries(l).map(([g,x])=>s`<${Ai}>${g}: ${x}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>${c("settings.recordings.firstEvents")}</strong>
                    <pre>${JSON.stringify(f.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function Q0({filter:n="",setStatus:i}){let{t:r}=C(),[_,c]=w([]),[u,f]=w([]),[$,l]=w(!0),[g,x]=w(null),[o,v]=w(null),[K,B]=w(null),[k,H]=w(!1),[y,p]=w(N0),[V,T]=w(""),[j,P]=w("redacted"),[z,R]=w(!0),[h,b]=w(""),[q,F]=w(""),[N,I]=w('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[W,A]=w(null);t(()=>{let X=(E)=>{let xn=String(E?.detail?.chatJid||"").trim();if(xn)p(xn)};return window.addEventListener("piclaw:current-chat-changed",X),()=>window.removeEventListener("piclaw:current-chat-changed",X)},[]);let Y=G(async(X=o)=>{l(!0),x(null);try{let E=await Hr(),xn=E.recordings||[];c(xn),f(E.active||[]);let U=xn.find((Z)=>Z.id===X)||xn[0]||null;if(v(U?.id||null),U?.id)B(await Qi(U.id));else B(null)}catch(E){x(E?.message||r("settings.recordings.loadFailed"))}finally{l(!1)}},[o]);t(()=>{Y()},[Y]);let d=L(()=>_.find((X)=>X.id===o)||null,[_,o]),_n=L(()=>u.find((X)=>X.chatJid===y)||null,[u,y]),$n=String(n||"").trim().toLowerCase(),yn=L(()=>{if(!$n)return _;return _.filter((X)=>[X.id,X.title,X.chatJid,X.status,X.mode].some((E)=>String(E||"").toLowerCase().includes($n)))},[_,$n]),kn=G(async(X)=>{if(v(X?.id||null),B(null),!X?.id)return;try{B(await Qi(X.id))}catch(E){i?.(E?.message||r("settings.recordings.loadOneFailed"),"error")}},[i]),Q=G(async()=>{if(k)return;H(!0);try{let X={keys:li(h),patterns:li(q)},E=await Fr({chat_jid:y,title:V||void 0,mode:j,include_timeline_snapshot:z,timeline_snapshot_limit:80,redaction:X});i?.(r("settings.recordings.startedToast",{chat:y}),"success"),await Y(E?.recording?.id)}catch(X){i?.(X?.message||r("settings.recordings.startFailed"),"error")}finally{H(!1)}},[k,y,h,q,z,Y,j,i,V]),M=G(async(X=_n)=>{if(!X||k)return;H(!0);try{let E=await Wr({id:X.id});i?.(r("settings.recordings.stoppedToast",{chat:X.chatJid}),"success"),await Y(E?.recording?.id)}catch(E){i?.(E?.message||r("settings.recordings.stopFailed"),"error")}finally{H(!1)}},[k,_n,Y,i]),gn=G(async(X)=>{if(!X||k)return;if(!window.confirm(r("settings.recordings.deleteConfirm",{id:X.id})+`

${X.title||""}`))return;H(!0);try{await jr(X.id),i?.(r("settings.recordings.deletedToast"),"success"),await Y(null)}catch(E){i?.(E?.message||r("settings.recordings.deleteFailed"),"error")}finally{H(!1)}},[k,Y,i]),ki=G(async()=>{try{let X=JSON.parse(N||"null"),E=await Gr(X,{mode:j,redaction:{keys:li(h),patterns:li(q)}});A(E.preview)}catch(X){A({error:X?.message||r("settings.recordings.previewFailed")})}},[h,q,j,N]);return s`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>${r("settings.recordings.heading")}</h3>
                <p class="settings-hint">${r("settings.recordings.intro")}</p>
                <div class="settings-recording-form-grid">
                    <label>${r("settings.recordings.chatJid")}<input value=${y} onInput=${(X)=>p(X.target.value)} /></label>
                    <label>${r("settings.recordings.title")}<input placeholder=${r("settings.recordings.titlePlaceholder")} value=${V} onInput=${(X)=>T(X.target.value)} /></label>
                    <label>${r("settings.recordings.modeLabelField")}<select value=${j} onChange=${(X)=>P(X.target.value)}><option value="redacted">${r("settings.recordings.optRedacted")}</option><option value="metadata">${r("settings.recordings.optMetadata")}</option><option value="full">${r("settings.recordings.optFull")}</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${z} onChange=${(X)=>R(X.target.checked)} /> ${r("settings.recordings.includeSnapshot")}</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>${r("settings.recordings.extraKeys")}<textarea rows="2" placeholder="customer_id\ninternal_code" value=${h} onInput=${(X)=>b(X.target.value)} /></label>
                    <label>${r("settings.recordings.extraPatterns")}<textarea rows="2" placeholder="ACME-[0-9]+" value=${q} onInput=${(X)=>F(X.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${_n?s`<button onClick=${()=>M(_n)} disabled=${k}>${r("settings.recordings.stopCurrent")}</button>`:s`<button onClick=${Q} disabled=${k}>${r("settings.recordings.start")}</button>`}
                    <button onClick=${()=>Y()} disabled=${$}>${r("settings.recordings.refresh")}</button>
                </div>
                ${u.length>0&&s`<div class="settings-recording-active-row">${u.map((X)=>s`<${Ai} type="active">REC ${X.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>${r("settings.recordings.redactionPreview")}</summary>
                <textarea rows="4" value=${N} onInput=${(X)=>I(X.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${ki}>${r("settings.recordings.previewRedaction")}</button></div>
                ${W&&s`<pre>${JSON.stringify(W,null,2)}</pre>`}
            </details>

            ${$&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>${r("settings.recordings.loading")}</span></div>`}
            ${g&&s`<div class="settings-error-state">${g}</div>`}
            ${!$&&!g&&_.length===0&&s`<div class="settings-empty-state"><strong>${r("settings.recordings.noneYet")}</strong><p>${r("settings.recordings.noneYetHint")}</p></div>`}
            ${!$&&!g&&_.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label=${r("settings.recordings.listLabel")}>
                        ${yn.map((X)=>s`
                            <button class=${`settings-task-row ${X.id===o?"active":""}`} onClick=${()=>kn(X)}>
                                <span class="settings-task-row-main"><strong>${X.title||X.id}</strong><span>${X.chatJid} · ${Zi(X.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${Ai} type=${X.status==="recording"?"active":"completed"}>${X.status}<//><${Ai}>${qr(X.mode)}<//></span>
                                <span class="settings-task-row-times">${r("settings.recordings.eventsCount",{count:X.eventCount||0})}</span>
                            </button>
                        `)}
                        ${yn.length===0&&s`<p class="settings-hint">${r("settings.recordings.noMatch",{filter:n})}</p>`}
                    </div>
                    <${X0} recording=${d} details=${K} onDelete=${gn} onRefresh=${()=>d&&kn(d)} />
                </div>
            `}
        </div>
    `}var M0;var Kc=O(()=>{m();fn();zn();M0={formatDateTime:Zi,modeLabel:qr,parseList:li}});var hc={};un(hc,{CompactionSection:()=>q0});function t0(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),toolResultSemanticSummaryEnabled:Boolean(n.toolResultSemanticSummaryEnabled??!0),toolResultSemanticSummaryMaxInputChars:n.toolResultSemanticSummaryMaxInputChars??12000,toolResultSemanticSummaryMaxTokens:n.toolResultSemanticSummaryMaxTokens??320,toolResultSemanticSummaryTimeoutSec:n.toolResultSemanticSummaryTimeoutSec??12,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function Ar(n){let i=String(n||"").trim();if(!i)return"—";let r=new Date(i);if(Number.isNaN(r.getTime()))return i;return r.toLocaleString()}function q0({settingsData:n,setStatus:i,mergeSettingsData:r}){let[_,c]=w(180),[u,f]=w(15),[$,l]=w(360),[g,x]=w(75),[o,v]=w(0.5),[K,B]=w(!0),[k,H]=w(!0),[y,p]=w(12000),[V,T]=w(320),[j,P]=w(12),[z,R]=w(!1),[h,b]=w(120),[q,F]=w([]),[N,I]=w([]),[W,A]=w(!1),Y=J(""),d=J(null),_n=J(!0);t(()=>{return _n.current=!0,()=>{_n.current=!1}},[]);let $n=G((Q)=>{let M=t0(Q);c(M.compactionTimeoutSec),f(M.compactionBackoffBaseMin),l(M.compactionBackoffMaxMin),x(M.compactionThresholdPercent),v(M.compactionBackoffDecayFactor),B(M.toolResultCompactionEnabled),H(M.toolResultSemanticSummaryEnabled),p(M.toolResultSemanticSummaryMaxInputChars),T(M.toolResultSemanticSummaryMaxTokens),P(M.toolResultSemanticSummaryTimeoutSec),R(M.progressWatchdogEnabled),b(M.progressWatchdogTimeoutSec),F(M.compactionBackoffs),I(M.progressWatchdogPhases),Y.current=JSON.stringify({compactionTimeoutSec:M.compactionTimeoutSec,compactionBackoffBaseMin:M.compactionBackoffBaseMin,compactionBackoffMaxMin:M.compactionBackoffMaxMin,compactionThresholdPercent:M.compactionThresholdPercent,compactionBackoffDecayFactor:M.compactionBackoffDecayFactor,toolResultCompactionEnabled:M.toolResultCompactionEnabled,toolResultSemanticSummaryEnabled:M.toolResultSemanticSummaryEnabled,toolResultSemanticSummaryMaxInputChars:M.toolResultSemanticSummaryMaxInputChars,toolResultSemanticSummaryMaxTokens:M.toolResultSemanticSummaryMaxTokens,toolResultSemanticSummaryTimeoutSec:M.toolResultSemanticSummaryTimeoutSec,progressWatchdogEnabled:M.progressWatchdogEnabled,progressWatchdogTimeoutSec:M.progressWatchdogTimeoutSec})},[]);t(()=>{$n(n||{})},[n,$n]);let yn=L(()=>JSON.stringify({compactionTimeoutSec:_,compactionBackoffBaseMin:u,compactionBackoffMaxMin:$,compactionThresholdPercent:g,compactionBackoffDecayFactor:o,toolResultCompactionEnabled:K,toolResultSemanticSummaryEnabled:k,toolResultSemanticSummaryMaxInputChars:y,toolResultSemanticSummaryMaxTokens:V,toolResultSemanticSummaryTimeoutSec:j,progressWatchdogEnabled:z,progressWatchdogTimeoutSec:h}),[_,u,$,g,o,K,k,y,V,j,z,h]);t(()=>{if(yn===Y.current)return;if(d.current)clearTimeout(d.current);return d.current=setTimeout(async()=>{if(!_n.current)return;try{i?.("Saving compaction settings…","info");let Q=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:yn}),M=await Q.json().catch(()=>({}));if(!_n.current)return;if(!Q.ok||!M?.ok||!M?.settings){i?.(M?.error||"Failed to save compaction settings.","error");return}Y.current=yn,r?.(M.settings),$n({...n||{},...M.settings||{}}),i?.("Compaction settings saved.","success"),A(!0),setTimeout(()=>{if(_n.current)A(!1),i?.(null)},4000)}catch(Q){if(console.warn("[settings/compaction] Failed to persist compaction settings.",Q),_n.current)i?.("Failed to save compaction settings.","error")}},800),()=>{if(d.current)clearTimeout(d.current)}},[yn,r,i,$n,n]);let kn=G(async(Q)=>{try{i?.(`Clearing compaction suppression for ${Q}…`,"info");let M=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:Q})}),gn=await M.json().catch(()=>({}));if(!M.ok||!gn?.ok||!gn?.settings){i?.(gn?.error||"Failed to clear compaction suppression.","error");return}r?.(gn.settings),$n({...n||{},...gn.settings||{}}),i?.(`Cleared compaction suppression for ${Q}.`,"success")}catch(M){console.warn("[settings/compaction] Failed to clear compaction suppression.",M),i?.("Failed to clear compaction suppression.","error")}},[$n,r,i,n]);return s`
        <div class="settings-section">
            ${W&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Enable tool-result compaction</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${K} onChange=${(Q)=>B(Boolean(Q.target.checked))} />
                    <span class="settings-hint" style="margin:0">When disabled, large tool results stay inline and are not externalized into searchable tool-output handles.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summaries for compacted tool results</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${k} onChange=${(Q)=>H(Boolean(Q.target.checked))} />
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
                    onChange=${T}
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
                    onChange=${P}
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
                    value=${$}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${l}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${nn}
                    label="backoff decay factor"
                    value=${Math.round(o*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(Q)=>v(Q/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${z} onChange=${(Q)=>R(Boolean(Q.target.checked))} />
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
                    disabled=${!z}
                    onChange=${b}
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
                            ${q.map((Q)=>s`
                                <tr>
                                    <td><code>${Q.chatJid}</code></td>
                                    <td>${Q.failureCount}</td>
                                    <td>${Ar(Q.backoffUntil)}</td>
                                    <td title=${Q.lastErrorMessage||""}>${Q.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>kn(Q.chatJid)}>
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
            ${N.length===0?s`
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
                            ${N.map((Q)=>s`
                                <tr>
                                    <td><code>${Q.chatJid}</code></td>
                                    <td>${Q.phase}</td>
                                    <td>${Ar(Q.startedAt)}</td>
                                    <td>${Ar(Q.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var Bc=O(()=>{m();dn()});function Hc(n){let i=String(n||"").trim().toLowerCase();if(!i)return null;let r=D0[i]||i;if(/^f(?:[1-9]|1[0-2])$/.test(r))return r;if(I0.has(r))return r;if(r.length===1)return r;if(/^[a-z0-9]+$/.test(r))return r;return null}function Sn(n){let i=String(n||"").trim();if(!i)return null;let r=i.split("+").map((u)=>u.trim()).filter(Boolean);if(!r.length)return null;let _={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let u of r){let f=u.toLowerCase(),$=Z0[f];if($){_[$]=!0;continue}if(_.key)return null;let l=Hc(u);if(!l||l==="escape")return null;_.key=l}if(!_.key)return null;let c=[];if(_.ctrl)c.push("ctrl");if(_.meta)c.push("meta");if(_.alt)c.push("alt");if(_.shift)c.push("shift");return c.push(_.key),c.join("+")}function Fc(n){return String(n||"").split(/[\n,]/).map((i)=>Sn(i)).filter((i)=>Boolean(i))}function Tn(n){return n.join(", ")}function Dr(){let n=t_(zc);if(!n||typeof n!=="object")return{};let i={};for(let r of wi){let _=n[r.id];if(!Array.isArray(_))continue;let c=_.map((u)=>Sn(String(u||""))).filter((u)=>Boolean(u));i[r.id]=[...new Set(c)]}return i}function Zr(n){if(sn(zc,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function Wc(n){return A0.get(n)}function yi(n){let i=Dr()[n];if(Array.isArray(i))return i;return[...Wc(n).defaultBindings]}function jc(n,i){let r=Dr(),_=Wc(n).defaultBindings,c=[...new Set(i.map((u)=>Sn(u)).filter((u)=>Boolean(u)))];if(c.length===_.length&&c.every((u,f)=>u===_[f]))delete r[n];else r[n]=c;Zr(r)}function Ir(n){if(!n){Zr({});return}let i=Dr();delete i[n],Zr(i)}function Di(){let n={};for(let i of wi)n[i.id]=yi(i.id);return n}function Y0(n){let i=typeof n==="string"?n:"";if(!i)return"";if(i.length===1)return i.toLowerCase();return Hc(i)||i.toLowerCase()}function L0(n){let i=Sn(n);if(!i)return null;let r={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let _ of i.split("+")){if(_==="ctrl"||_==="meta"||_==="alt"||_==="shift"){r[_]=!0;continue}r.key=_}return r.key?r:null}function C0(n,i){let r=L0(i);if(!r)return!1;if(Y0(n?.key)!==r.key)return!1;let c=!r.shift&&r.key.length===1&&/[^a-z0-9]/i.test(r.key);return Boolean(n?.ctrlKey)===r.ctrl&&Boolean(n?.metaKey)===r.meta&&Boolean(n?.altKey)===r.alt&&(c||Boolean(n?.shiftKey)===r.shift)}function yg(n,i){return yi(i).some((r)=>C0(n,r))}var zc="piclaw_keyboard_shortcuts_v1",wi,A0,Z0,D0,I0;var Uc=O(()=>{wi=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],A0=new Map(wi.map((n)=>[n.id,n])),Z0={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},D0={esc:"escape",return:"enter",spacebar:"space"},I0=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var Gc={};un(Gc,{KeyboardSection:()=>O0});function J0(n,i,r){let _=String(n||"").trim().toLowerCase();if(!_)return!0;return[i.label,i.description,r,...i.defaultBindings||[]].some((c)=>String(c||"").toLowerCase().includes(_))}function O0({filter:n="",setStatus:i}){let{t:r}=C(),[_,c]=w(()=>{let g=Di();return Object.fromEntries(Object.entries(g).map(([x,o])=>[x,Tn(o)]))});t(()=>{let g=()=>{let x=Di();c(Object.fromEntries(Object.entries(x).map(([o,v])=>[o,Tn(v)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",g),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",g)},[]);let u=L(()=>wi.filter((g)=>{let x=String(_[g.id]||"");return J0(n,g,x)}),[_,n]),f=(g)=>{let x=String(_[g]||"").trim(),v=(x?x.split(/[\n,]/).map((B)=>B.trim()).filter(Boolean):[]).filter((B)=>!Sn(B));if(v.length>0){i?.(r("settings.keyboard.invalidShortcut",{token:v[0]}),"error");return}let K=Fc(x);jc(g,K),c((B)=>({...B,[g]:Tn(yi(g))})),i?.(r("settings.keyboard.saved"),"success")},$=(g)=>{Ir(g),c((x)=>({...x,[g]:Tn(yi(g))})),i?.(r("settings.keyboard.resetOne"),"success")},l=()=>{Ir();let g=Di();c(Object.fromEntries(Object.entries(g).map(([x,o])=>[x,Tn(o)]))),i?.(r("settings.keyboard.resetAllDone"),"success")};return s`
        <div class="settings-section">
            <h3>${r("settings.keyboard.heading")}</h3>
            <p class="settings-hint">
                ${r("settings.keyboard.hint1")}
                <code>Escape</code> ${r("settings.keyboard.hint1b")}
            </p>
            <p class="settings-hint">
                <code>/help</code> ${r("settings.keyboard.hint2mid")} <code>"</code> ${r("settings.keyboard.hint2end")}
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:18px; justify-content:flex-end;">
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${l}>${r("settings.keyboard.resetAll")}</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${u.map((g)=>s`
                    <div class="settings-shortcut-card" key=${g.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${g.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${g.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">${r("settings.keyboard.defaultColon")} <code style="font-size:13px;">${Tn(g.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${_[g.id]||""}
                                placeholder=${Tn(g.defaultBindings)}
                                onInput=${(x)=>c((o)=>({...o,[g.id]:x.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>f(g.id)}>${r("settings.keyboard.save")}</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>$(g.id)}>${r("settings.keyboard.defaultBtn")}</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${u.length===0&&s`<div class="settings-hint">${r("settings.keyboard.noMatch")}</div>`}
            </div>
        </div>
    `}var Tc=O(()=>{m();Uc();fn()});function Vc(n,i=Yr){let r=Number(n);if(!Number.isFinite(r))return i;return Math.min(300,Math.max(15,Math.round(r)))}function Nc(n,i=Lr){let r=Number(n);if(!Number.isFinite(r))return i;return Math.min(8,Math.max(0,Math.round(r)))}function Cr(){return{refreshIntervalSec:Vc(wr(Pc,Yr),Yr),folderPreviewDepth:Nc(wr(Rc,Lr),Lr)}}function Xc(n={}){let i=Cr(),r={refreshIntervalSec:Vc(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:i.refreshIntervalSec,i.refreshIntervalSec),folderPreviewDepth:Nc(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:i.folderPreviewDepth,i.folderPreviewDepth)};if(sn(Pc,String(r.refreshIntervalSec)),sn(Rc,String(r.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(E0,{detail:{settings:r}}));return r}var E0="piclaw:workspace-client-settings-updated",Pc="workspaceRefreshIntervalSec",Rc="workspaceFolderPreviewDepth",Yr=60,Lr=3;var Qc=()=>{};var tc={};un(tc,{WorkspaceSection:()=>d0});function Mc(n={}){let i=n.workspaceSettings||{};return{webTerminalEnabled:i.webTerminalEnabled!==!1,vncAllowDirect:i.vncAllowDirect!==!1,treeMaxDepth:i.treeMaxDepth??4,treeMaxEntries:i.treeMaxEntries??5000}}function d0({settingsData:n,setStatus:i,mergeSettingsData:r}){let{t:_}=C(),[c,u]=w(!0),[f,$]=w(!0),[l,g]=w(4),[x,o]=w(5000),[v,K]=w(60),[B,k]=w(3),[H,y]=w(!1),[p,V]=w(!1),T=J(""),j=J(null),P=J(null),z=J(null),R=J(!0);t(()=>{return R.current=!0,()=>{if(R.current=!1,j.current)clearTimeout(j.current);if(P.current)clearTimeout(P.current);if(z.current)clearTimeout(z.current)}},[]);let h=G((F)=>{let N=Mc(F),I=Cr();u(N.webTerminalEnabled),$(N.vncAllowDirect),g(N.treeMaxDepth),o(N.treeMaxEntries),K(I.refreshIntervalSec),k(I.folderPreviewDepth),T.current=JSON.stringify(N)},[]);t(()=>{h(n||{})},[n,h]);let b=L(()=>JSON.stringify(Mc({workspaceSettings:{webTerminalEnabled:c,vncAllowDirect:f,treeMaxDepth:l,treeMaxEntries:x}})),[c,f,l,x]);t(()=>{if(b===T.current)return;if(j.current)clearTimeout(j.current);return j.current=setTimeout(async()=>{if(!R.current)return;let F=document.activeElement;if(F&&F.closest?.(".settings-number-stepper"))return;try{let N=await Nr(JSON.parse(b));if(!R.current||!N?.ok||!N?.settings)return;if(T.current=b,r?.({workspaceSettings:N.settings}),i?.(null),y(!0),P.current)clearTimeout(P.current);P.current=setTimeout(()=>{if(R.current)y(!1)},4000)}catch(N){i?.(String(N?.message||N),"error")}},800),()=>{if(j.current)clearTimeout(j.current)}},[b,r,i]);let q=G((F)=>{let N=Xc(F);if(K(N.refreshIntervalSec),k(N.folderPreviewDepth),V(!0),z.current)clearTimeout(z.current);z.current=setTimeout(()=>{if(R.current)V(!1)},3000)},[]);return s`
        <div class="settings-section">
            ${H&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.workspace.serverApplied")}
                </div>
            `}
            ${p&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.workspace.browserApplied")}
                </div>
            `}

            <h3>${_("settings.workspace.access")}</h3>
            <div class="settings-row">
                <label>${_("settings.workspace.enableTerminal")}</label>
                <input type="checkbox" checked=${c} onChange=${(F)=>u(F.target.checked)} />
            </div>
            <div class="settings-row">
                <label>${_("settings.workspace.allowVnc")}</label>
                <input type="checkbox" checked=${f} onChange=${(F)=>$(F.target.checked)} />
            </div>
            <p class="settings-hint">${_("settings.workspace.accessHint")}</p>

            <h3 style="margin-top:20px">${_("settings.workspace.guardrails")}</h3>
            <div class="settings-row">
                <label>${_("settings.workspace.maxDepth")}</label>
                <${nn}
                    label=${_("settings.workspace.maxDepthAria")}
                    value=${l}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${g}
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
                    onChange=${o}
                />
                <span class="settings-hint" style="margin:0">${_("settings.workspace.maxEntriesHint")}</span>
            </div>

            <h3 style="margin-top:20px">${_("settings.workspace.thisBrowser")}</h3>
            <div class="settings-row">
                <label>${_("settings.workspace.refreshInterval")}</label>
                <${nn}
                    label=${_("settings.workspace.refreshIntervalAria")}
                    value=${v}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(F)=>q({refreshIntervalSec:F})}
                />
            </div>
            <div class="settings-row">
                <label>${_("settings.workspace.folderDepth")}</label>
                <${nn}
                    label=${_("settings.workspace.folderDepthAria")}
                    value=${B}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(F)=>q({folderPreviewDepth:F})}
                />
                <span class="settings-hint" style="margin:0">${_("settings.workspace.folderDepthHintPre")} <code>0</code> ${_("settings.workspace.folderDepthHintPost")}</span>
            </div>
            <p class="settings-hint">${_("settings.workspace.footerHint")}</p>
        </div>
    `}var qc=O(()=>{m();zn();Qc();dn();fn()});var Ac={};un(Ac,{EnvironmentSection:()=>S0});function Jr(n={}){let i=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(i.variables)?i.variables:[],overrides:i.overrides&&typeof i.overrides==="object"?i.overrides:{},count:Number(i.count||0),overrideCount:Number(i.overrideCount||0),keychainEnvNames:Array.isArray(i.keychainEnvNames)?i.keychainEnvNames:[]}}function S0({settingsData:n,filter:i="",setStatus:r,mergeSettingsData:_}){let{t:c}=C(),[u,f]=w(()=>Jr(n||{})),[$,l]=w({}),[g,x]=w(""),[o,v]=w(""),[K,B]=w(null);t(()=>{f(Jr(n||{})),l({})},[n]);let k=G((j)=>{let P=Jr({environmentSettings:j?.settings||j});return f(P),_?.({environmentSettings:P}),l({}),P},[_]),H=G(async()=>{try{let j=await Xr();if(j?.ok)k(j.settings);r?.(c("settings.environment.refreshedToast"),"info")}catch(j){r?.(String(j?.message||j),"error")}},[k,r]),y=G(async(j,P)=>{let z=String(j||"").trim();if(!z)return;B(z);try{let R=await Mi({action:"set",name:z,value:String(P??"")});if(R?.ok)k(R.settings);if(r?.(c("settings.environment.savedToast",{name:z}),"info"),z===g.trim())x(""),v("")}catch(R){r?.(String(R?.message||R),"error")}finally{B(null)}},[k,g,r]),p=G(async(j)=>{let P=String(j||"").trim();if(!P)return;B(P);try{let z=await Mi({action:"clear",name:P});if(z?.ok)k(z.settings);r?.(c("settings.environment.clearedToast",{name:P}),"info")}catch(z){r?.(String(z?.message||z),"error")}finally{B(null)}},[k,r]),V=L(()=>{let j=String(i||"").trim().toLowerCase(),P=Array.isArray(u.variables)?u.variables:[];if(!j)return P;return P.filter((z)=>{return`${z?.name||""} ${z?.value||""} ${z?.source||""}`.toLowerCase().includes(j)})},[u.variables,i]),T=G((j,P)=>{l((z)=>({...z||{},[j]:P}))},[]);return s`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">${c("settings.environment.heading")}</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        ${c("settings.environment.introPre")} <code>process.env</code>${c("settings.environment.introPost")}
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${H}>${c("settings.environment.refresh")}</button>
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
                        value=${o}
                        placeholder=${c("settings.environment.valuePlaceholder")}
                        spellcheck="false"
                        onInput=${(j)=>v(j.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!g.trim()||K===g.trim()}
                        onClick=${()=>y(g,o)}
                    >${c("settings.environment.save")}</button>
                </div>
            </div>

            <p class="settings-hint">
                ${c("settings.environment.countLine",{count:u.count,overrides:u.overrideCount,keychain:u.keychainEnvNames.length})}
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${V.map((j)=>{let P=String(j?.name||""),z=Object.prototype.hasOwnProperty.call($,P)?$[P]:j.value,R=z!==j.value,h=K===P;return s`
                        <div class="settings-tool-row" key=${P} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${P}>${P}</span>
                            <input
                                type="text"
                                value=${z}
                                spellcheck="false"
                                onInput=${(b)=>T(P,b.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${j.overridden?c("settings.environment.overridden"):c("settings.environment.inherited")}>
                                ${j.overridden?c("settings.environment.kindOverride"):c("settings.environment.kindProcess")}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${h||!R} onClick=${()=>y(P,z)}>${c("settings.environment.save")}</button>
                                <button type="button" disabled=${h||!j.overridden} onClick=${()=>p(P)}>${c("settings.environment.clear")}</button>
                            </span>
                        </div>
                    `})}
                ${V.length===0&&s`<p class="settings-hint">${c("settings.environment.noMatch",{filter:i})}</p>`}
            </div>
        </div>
    `}var Zc=O(()=>{m();zn();fn()});var Dc={};un(Dc,{ProvidersSection:()=>m0});function e0(n){switch(n){case"oauth":return"OAuth";case"api_key":return Gn("settings.providers.authApiKey");case"custom":return Gn("settings.providers.authConfigured");default:return Gn("settings.providers.authConfigured")}}function m0({providers:n,setStatus:i}){let{t:r}=C(),[_,c]=w(null),[u,f]=w(null),[$,l]=w({}),g=G((y,p)=>{l((V)=>({...V,[y]:p}))},[]),x=G(async(y)=>{let p=($.apiKey||"").trim();if(!p){i?.(r("settings.providers.apiKeyEmpty"),"error");return}c(y),i?.(r("settings.providers.configuringToast",{provider:y}),"info");try{let V=JSON.stringify({provider:y,method:"api_key",api_key:p}),T=await Bn("default",`/login __step2 ${V}`,null,[]);if(T?.command?.status==="error"){i?.(T.command.message,"error");return}i?.(T?.command?.message||r("settings.providers.configured",{provider:y}),"success"),f(null),l({})}catch(V){i?.(String(V.message||V),"error")}finally{c(null)}},[$,i]),o=G(async(y,p)=>{c(y),i?.(r("settings.providers.configuringToast",{provider:y}),"info");try{let V={provider:y,method:"custom"};for(let P of p.customFields||[])V[P.key]=($[P.key]||"").trim();let T=JSON.stringify(V),j=await Bn("default",`/login __step2 ${T}`,null,[]);if(j?.command?.status==="error"){i?.(j.command.message,"error");return}i?.(j?.command?.message||r("settings.providers.configured",{provider:y}),"success"),f(null),l({})}catch(V){i?.(String(V.message||V),"error")}finally{c(null)}},[$,i]),v=G(async(y)=>{c(y),i?.(r("settings.providers.startingOAuth",{provider:y}),"info");try{let p=JSON.stringify({provider:y}),T=(await Bn("default",`/login __step1 ${p}`,null,[]))?.command?.message||"";if(T.includes("http")){let j=T.match(/(https?:\/\/[^\s)]+)/);if(j)window.open(j[1],"_blank","noopener"),i?.(r("settings.providers.oauthOpened"),"success");else i?.(T,"success")}else i?.(T||r("settings.providers.oauthStarted",{provider:y}),"success")}catch(p){i?.(String(p.message||p),"error")}finally{c(null)}},[i]),K=G(async(y)=>{if(_)return;c(y),i?.(r("settings.providers.loggingOut",{provider:y}),"info");try{await Bn("default",`/logout ${y}`,null,[]),i?.(r("settings.providers.loggedOut",{provider:y}),"success")}catch(p){i?.(String(p.message||p),"error")}finally{c(null)}},[_,i]),B=n||[],k=(y)=>u===y,H=(y)=>{f((p)=>p===y?null:y),l({})};return s`
        <div class="settings-section">
            <h3>${r("settings.providers.heading")}</h3>
            <div class="settings-provider-list">
                ${B.map((y)=>s`
                    <div class=${`settings-provider-card${y.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!y.configured&&H(y.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${y.name}</strong>
                                <span class="settings-provider-id">${y.id}</span>
                                ${y.configured&&s`<span class="settings-tag settings-tag-skill">${e0(y.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${y.hasOAuth&&s`<span class="settings-tag">OAuth</span>`}
                                ${y.hasApiKey&&s`<span class="settings-tag">API Key</span>`}
                                ${y.isCustom&&s`<span class="settings-tag">${r("settings.providers.tagCustom")}</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${y.configured?s`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${_===y.id} onClick=${(p)=>{p.stopPropagation(),K(y.id)}}
                                    >${_===y.id?"…":r("settings.providers.logout")}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${_===y.id} onClick=${(p)=>{p.stopPropagation(),H(y.id)}}
                                    >${r("settings.providers.reconfigure")}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${_===y.id} onClick=${(p)=>{p.stopPropagation(),H(y.id)}}
                                    >${r("settings.providers.setUp")}</button>
                                `}
                            </div>
                        </div>

                        ${k(y.id)&&s`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">${r("settings.providers.setupHint")}</p>
                                ${y.hasOAuth&&s`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${_===y.id}
                                            onClick=${()=>v(y.id)}>
                                            ${_===y.id?r("settings.providers.starting"):r("settings.providers.signInOAuth")}
                                        </button>
                                    </div>
                                `}
                                ${y.hasApiKey&&s`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>${r("settings.providers.apiKeyLabel")}</label>
                                            <input type="password" value=${$.apiKey||""}
                                                onInput=${(p)=>g("apiKey",p.target.value)}
                                                placeholder=${y.apiKeyHint||r("settings.providers.apiKeyPlaceholder")} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${_===y.id||!($.apiKey||"").trim()}
                                                onClick=${()=>x(y.id)}>
                                                ${_===y.id?"…":r("settings.providers.save")}
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
                                                disabled=${_===y.id}
                                                onClick=${()=>o(y.id,y)}>
                                                ${_===y.id?r("settings.providers.configuring"):r("settings.providers.saveConfig")}
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
    `}var Ic=O(()=>{m();zn();fn()});var Yc={};un(Yc,{ModelsSection:()=>_s});function is(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function rs({thinkingLevel:n,supportsThinking:i,provider:r,availableLevels:_,onSetLevel:c,disabled:u}){let{t:f}=C(),$=is(r)?a0:ns,l=_&&_.length>1?_:["off","minimal","low","medium","high"],g=Math.max(0,l.indexOf(n??"off"));if(!i)return s`<div class="settings-thinking-slider"><label>${f("settings.models.thinkingLevel")}</label><p class="settings-hint" style="margin:4px 0 0">${f("settings.models.noThinking")}</p></div>`;return s`
        <div class="settings-thinking-slider">
            <label>${f("settings.models.thinkingLevelLabel")} <strong>${$[l[g]]||l[g]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${l.length-1} step="1" value=${g} disabled=${u}
                    onInput=${(x)=>c(l[parseInt(x.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${l.map((x,o)=>s`<span class=${o===g?"active":""} onClick=${()=>!u&&c(x)}>${$[x]||x}</span>`)}
                </div>
            </div>
        </div>
    `}function _s({filter:n=""}){let{t:i}=C(),[r,_]=w(null),[c,u]=w(!1),[f,$]=w("off"),[l,g]=w(!1),[x,o]=w(["off"]),[v,K]=w(!1),[B,k]=w(!1),[H,y]=w(!1),p=G(async()=>{let F=await Qr();if(_(F),F.thinking_level)$(F.thinking_level);if(g(Boolean(F.supports_thinking)),K(Boolean(F.scoped_models_only)),Array.isArray(F.available_thinking_levels)&&F.available_thinking_levels.length>0)o(F.available_thinking_levels);return F},[]);t(()=>{p().catch((F)=>{console.warn("[settings/models] Failed to load models.",F),_({models:[],model_options:[]})})},[]);let V=G(async(F)=>{if(c)return;u(!0);try{await Bn("default",`/model ${F}`,null,[]),await p()}catch(N){console.error("Failed to switch model:",N)}finally{u(!1)}},[c,p]),T=G(async(F)=>{if(B)return;k(!0),K(Boolean(F));try{let N=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scopedModelsOnly:Boolean(F)})}),I=await N.json().catch(()=>({}));if(!N.ok||!I?.ok)throw Error(I?.error||"Failed to save scoped model setting.");await p()}catch(N){console.error("Failed to set scoped model filtering:",N),await p().catch((I)=>{console.warn("[settings/models] Reload after scoped model filtering failure failed.",I)})}finally{k(!1)}},[B,p]),j=G(async(F)=>{if(H)return;y(!0),$(F);try{let N=await Bn("default",`/thinking ${F}`,null,[]);if(N?.command?.thinking_level)$(N.command.thinking_level);g(N?.command?.supports_thinking!==!1),await p()}catch(N){console.error("Failed to set thinking:",N),await p().catch((I)=>{console.warn("[settings/models] Reload after thinking change failure failed.",I)})}finally{y(!1)}},[H,p]);if(!r)return s`<div class="settings-loading">${i("settings.models.loading")}</div>`;let P=r.model_options||[],z=r.current,h=P.find((F)=>F.label===z)?.provider||"",b=n.toLowerCase(),q=b?P.filter((F)=>F.label.toLowerCase().includes(b)||(F.provider||"").toLowerCase().includes(b)):P;return s`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">${i("settings.models.summary")}</div>
            <div class="settings-row" style="padding:0 0 10px 0; align-items:flex-start">
                <label>${i("settings.models.scopedOnly")}</label>
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0">
                    <label style="display:flex; align-items:center; gap:8px; font-weight:500">
                        <input type="checkbox" checked=${v} disabled=${B} onChange=${(F)=>T(F.target.checked)} />
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
                        ${q.map((F)=>s`
                            <tr class=${F.label===z?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${F.label===z} disabled=${c} onChange=${()=>V(F.label)} /></td>
                                <td>${F.name||F.label}</td><td>${F.provider}</td>
                                <td>${F.context_window?(F.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${F.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${q.length===0&&s`<tr><td colspan="5" class="settings-empty">${i("settings.models.noMatch",{filter:n})}</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${rs}
                    thinkingLevel=${f}
                    supportsThinking=${l}
                    provider=${h}
                    availableLevels=${x}
                    onSetLevel=${j}
                    disabled=${H||c} />
            </div>
        </div>
    `}var a0,ns;var Lc=O(()=>{m();zn();fn();a0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},ns={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function dr(n){let i=String(n||"").trim().toLowerCase();if(!i)return"default";if(i==="solarized-dark"||i==="solarized-light")return"solarized";if(i==="github-dark"||i==="github-light")return"github";if(i==="tokyo-night")return"tokyo";return i}function Ec(n){if(!n)return null;let i=String(n).trim();if(!i)return null;let r=i.startsWith("#")?i.slice(1):i;if(!/^[0-9a-fA-F]{3}$/.test(r)&&!/^[0-9a-fA-F]{6}$/.test(r))return null;let _=r.length===3?r.split("").map((u)=>u+u).join(""):r,c=parseInt(_,16);return{r:c>>16&255,g:c>>8&255,b:c&255,hex:`#${_.toLowerCase()}`}}function us(n,i){try{if(document.body){n.style.display="none",document.body.appendChild(n);let r=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),r}}catch{return i}return i}function fs(n){if(!n||typeof document>"u")return null;let i=String(n).trim();if(!i)return null;let r=document.createElement("div");if(r.style.color="",r.style.color=i,!r.style.color)return null;let c=us(r,r.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!c)return null;let u=parseInt(c[1],10),f=parseInt(c[2],10),$=parseInt(c[3],10);if(![u,f,$].every((g)=>Number.isFinite(g)))return null;let l=`#${[u,f,$].map((g)=>g.toString(16).padStart(2,"0")).join("")}`;return{r:u,g:f,b:$,hex:l}}function tn(n){return Ec(n)||fs(n)}function Sr(n,i,r){let _=Math.round(n.r+(i.r-n.r)*r),c=Math.round(n.g+(i.g-n.g)*r),u=Math.round(n.b+(i.b-n.b)*r);return`rgb(${_} ${c} ${u})`}function Ii(n,i){return`rgba(${n.r}, ${n.g}, ${n.b}, ${i})`}function ss(n){let i=n.r/255,r=n.g/255,_=n.b/255,c=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),u=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4),f=_<=0.03928?_/12.92:Math.pow((_+0.055)/1.055,2.4);return 0.2126*c+0.7152*u+0.0722*f}function $s(n){return ss(n)>0.4?"#000000":"#ffffff"}function dc(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function er(n){return Cc[n]||Cc.default}function gs(n){return n.mode==="auto"?dc():n.mode}function Sc(n,i){let r=er(n);if(i==="dark"&&r.dark)return r.dark;if(i==="light"&&r.light)return r.light;return r.dark||r.light||Fn}function Hn(n,i,r){let _=tn(n);if(!_)return n;return Sr(_,i,r)}function ec(n,i,r){let _=tn(i);if(!_)return n;let u=Ec(r==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:Hn(n.bgPrimary,_,0.08),bgSecondary:Hn(n.bgSecondary,_,0.12),bgHover:Hn(n.bgHover,_,0.16),textPrimary:Hn(n.textPrimary,_,r==="dark"?0.08:0.06),textSecondary:Hn(n.textSecondary,_,r==="dark"?0.12:0.1),borderColor:Hn(n.borderColor,_,0.1),accent:_.hex,accentHover:u?Sr(_,u,0.18):_.hex,warning:Hn(n.warning||Fn.warning,_,0.14),danger:Hn(n.danger,_,0.16),success:Hn(n.success,_,0.16)}}function os(n,i){let r=tn(n?.warning);if(r)return r.hex;let _=tn(i==="dark"?Ci.warning:Fn.warning)||tn(Fn.warning),c=tn(n?.accent);if(_&&c)return Sr(_,c,i==="dark"?0.18:0.14);return i==="dark"?Ci.warning:Fn.warning}function ls(n,i){if(typeof document>"u")return;let r=document.documentElement,_=n.accent,c=tn(_),u=c?Ii(c,i==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,f=c?Ii(c,i==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",$=c?Ii(c,i==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",l=c?$s(c):i==="dark"?"#000000":"#ffffff",g=c?Ii(c,i==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",x=os(n,i),o={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":_,"--accent-hover":n.accentHover||_,"--accent-color-alpha":g,"--accent-soft":f,"--accent-soft-strong":$,"--accent-contrast-text":l,"--warning-color":x,"--danger-color":n.danger||Fn.danger,"--success-color":n.success||Fn.success,"--search-highlight-color":u||"rgba(29, 155, 240, 0.2)"};Object.entries(o).forEach(([v,K])=>{if(K)r.style.setProperty(v,K)})}function ws(){if(typeof document>"u")return;let n=document.documentElement;cs.forEach((i)=>n.style.removeProperty(i))}function en(n,i={}){if(typeof document>"u")return null;let r=typeof i.id==="string"&&i.id.trim()?i.id.trim():null,_=r?document.getElementById(r):document.querySelector(`meta[name="${n}"]`);if(!_)_=document.createElement("meta"),document.head.appendChild(_);if(_.setAttribute("name",n),r)_.setAttribute("id",r);return _}function Jc(n){let i=dr(qn?.theme||"default"),r=qn?.tint?String(qn.tint).trim():null,_=Sc(i,n);if(i==="default"&&r)_=ec(_,r,n);if(_?.bgPrimary)return _.bgPrimary;return n==="dark"?Ci.bgPrimary:Fn.bgPrimary}function ys(n,i){if(typeof document>"u")return;let r=en("theme-color",{id:"dynamic-theme-color"});if(r&&n)r.removeAttribute("media"),r.setAttribute("content",n);let _=en("theme-color",{id:"theme-color-light"});if(_)_.setAttribute("media","(prefers-color-scheme: light)"),_.setAttribute("content",Jc("light"));let c=en("theme-color",{id:"theme-color-dark"});if(c)c.setAttribute("media","(prefers-color-scheme: dark)"),c.setAttribute("content",Jc("dark"));let u=en("msapplication-TileColor");if(u&&n)u.setAttribute("content",n);let f=en("msapplication-navbutton-color");if(f&&n)f.setAttribute("content",n);let $=en("apple-mobile-web-app-status-bar-style");if($)$.setAttribute("content",i==="dark"?"black-translucent":"default")}function xs(){if(typeof window>"u")return;let n={...qn,mode:Oc};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function bs(){if(typeof window>"u")return"web:default";try{let i=new URL(window.location.href).searchParams.get("chat_jid");return i&&i.trim()?i.trim():"web:default"}catch{return"web:default"}}function vs(n){if(typeof document>"u"||!n)return;let i=document.documentElement;if(i?.style)i.style.background=n;if(document.body?.style)document.body.style.background=n}function mr(n,i={}){if(typeof window>"u"||typeof document>"u")return;let r=dr(n?.theme||"default"),_=n?.tint?String(n.tint).trim():null,c=er(r),u=gs(c),f=Sc(r,u);qn={theme:r,tint:_},Oc=u;let $=document.documentElement;$.dataset.theme=u,$.dataset.colorTheme=r,$.dataset.tint=_?String(_):"",$.style.colorScheme=u;let l=f;if(r==="default"&&_)l=ec(f,_,u);if(r==="default"&&!_)ws();else ls(l,u);if(vs(l.bgPrimary),ys(l.bgPrimary,u),xs(),i.persist!==!1)if(sn(Er,r),_)sn(Li,_);else sn(Li,"")}function Yi(){if(er(qn.theme).mode!=="auto")return;mr(qn,{persist:!1})}function ks(){if(typeof window>"u")return;let n=dr(Un(Er)||"default"),i=(()=>{let r=Un(Li);return r?r.trim():null})();mr({theme:n,tint:i},{persist:!1})}function Qg(){if(typeof window>"u")return()=>{};if(ks(),window.matchMedia&&!Or){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Yi);else if(n.addListener)n.addListener(Yi);return Or=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Yi);else if(n.removeListener)n.removeListener(Yi);Or=!1}}return()=>{}}function ar(n){if(!n||typeof n!=="object")return;let i=bs(),r=n.chat_jid||n.chatJid||null,_=n.theme??n.name??n.colorTheme,c=n.tint??null;if(!r||r===i)mr({theme:_||"default",tint:c},{persist:!1});sn(Er,_||"default"),sn(Li,c||"")}function Mg(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return dc()}var Er="piclaw_theme",Li="piclaw_tint",Fn,Ci,Cc,cs,qn,Oc="light",Or=!1;var mc=O(()=>{Fn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Ci={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Cc={default:{label:"Default",mode:"auto",light:Fn,dark:Ci},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},cs=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],qn={theme:"default",tint:null}});function ps(n){return q_.map((i)=>({value:i,label:A_[i],active:i===n}))}function ac({variant:n="inline",onChange:i}={}){let{locale:r,setLocale:_,t:c}=C(),u=ps(r),f=($)=>{let l=$?.currentTarget?.value;_(l),i?.(l)};return s`
    <div class=${`language-switcher language-switcher-${n}`} role="none">
      <label class="language-switcher-label" for="language-switcher-select">${c("language.label")}</label>
      <select
        id="language-switcher-select"
        class="language-switcher-select"
        value=${r}
        aria-label=${c("language.label")}
        onClick=${($)=>$.stopPropagation()}
        onChange=${f}
      >
        ${u.map(($)=>s`
          <option key=${$.value} value=${$.value}>${$.label}</option>
        `)}
      </select>
    </div>
  `}var nu=O(()=>{m();fn()});var ru={};un(ru,{ThemeSection:()=>Ks});function iu(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function Ks({themes:n,colorKeys:i,settingsData:r,setStatus:_,mergeSettingsData:c}){let{t:u}=C(),[f,$]=w("default"),[l,g]=w(""),[x,o]=w(!1),v=J(""),K=J(null),B=J(!0);t(()=>{return B.current=!0,()=>{B.current=!1}},[]);let k=G((T)=>{let j=iu(T);$(j.uiTheme),g(j.uiTint),v.current=JSON.stringify(j)},[]);t(()=>{if(r){k(r);return}k({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[r,k]);let H=G((T,j)=>{ar({theme:T,tint:j||null}),$(T||"default"),g(j||"")},[]),y=L(()=>JSON.stringify(iu({uiTheme:f,uiTint:l})),[f,l]);t(()=>{if(y===v.current)return;if(K.current)clearTimeout(K.current);return K.current=setTimeout(async()=>{if(!B.current)return;o(!0);try{let T=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),j=await T.json().catch(()=>({}));if(!B.current)return;if(!T.ok||!j?.ok||!j?.settings){_?.(j?.error||"Failed to save appearance settings.","error");return}v.current=y,c?.(j.settings),_?.("Appearance synced across clients.","success")}catch(T){if(!B.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",T),_?.("Failed to save appearance settings.","error")}finally{if(B.current)o(!1)}},250),()=>{if(K.current)clearTimeout(K.current)}},[y,c,_]);let p=i||[],V=n||[];return s`
        <div class="settings-section">
            <div class="settings-row settings-language-row">
                <${ac} variant="inline" />
            </div>
            ${x&&s`<div class="settings-hint" style="margin:0 0 12px 0;">${u("settings.appearance.syncing")}</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${f==="default"}
                        onChange=${()=>H("default",l)} />
                    <strong>${u("settings.appearance.default")}</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">${u("settings.appearance.autoLightDark")}</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">${u("settings.appearance.tint")}</label>
                    <input type="color"
                        value=${l||"#1d9bf0"}
                        onInput=${(T)=>{let j=T.target.value;if(g(j),f==="default")ar({theme:"default",tint:j})}} />
                    ${l&&s`
                        <button class="settings-tint-clear" onClick=${()=>H("default","")}
                            title=${u("settings.appearance.clearTint")}>\u2715</button>
                    `}
                    <span class="settings-tint-hex">${l||u("settings.appearance.none")}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${p.map((T)=>s`<th class="settings-swatch-header">${T.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${V.filter((T)=>T.name!=="default").map((T)=>s`
                        <tr class=${T.name===f?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>H(T.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${T.name===f} onChange=${()=>H(T.name,"")} /></td>
                            <td><strong>${T.label}</strong></td>
                            <td>${T.mode}</td>
                            ${p.map((j)=>{let P=T.colors?.[j];return s`<td class="settings-swatch-cell">
                                    ${P?s`<span class="settings-color-swatch" style=${"background:"+P} title=${P}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var _u=O(()=>{m();mc();nu();fn()});var uu={};un(uu,{__scheduledTasksSettingsTest:()=>Ws,ScheduledTasksSection:()=>Fs});function An(n){if(!n)return"—";let i=new Date(n);if(Number.isNaN(i.getTime()))return n;return i.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function cu(n){let i=Number(n);if(!Number.isFinite(i))return"—";if(i<1000)return`${Math.round(i)}ms`;return`${(i/1000).toFixed(i<1e4?1:0)}s`}function n_(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${An(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function i_(n){let i=n?.task_kind||"agent";return i==="internal"?"internal/protected":i}function r_(n){return(n?.task_kind||"agent")==="internal"}function Bs(n){if(!n)return"";let i=String(n).replace(/\s+/g," ").trim();return i.length>180?`${i.slice(0,179)}…`:i}function mn({children:n,type:i="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${i}`}>${n}</span>`}function zs({task:n}){let i=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!i.length)return s`<p class="settings-hint">No run logs recorded yet.</p>`;return s`
        <div class="settings-task-run-list">
            ${i.map((r)=>s`
                <div class=${`settings-task-run-row settings-task-run-${r.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${mn} type=${r.status==="error"?"error":"success"}>${r.status||"unknown"}<//>
                        <span>${An(r.run_at)}</span>
                        <span>${cu(r.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${r.error_summary||Bs(r.error)||r.result_summary||r.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function Hs({task:n,onAction:i}){if(!n)return s`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let r=r_(n);return s`
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
                <span>Kind</span><strong>${i_(n)}</strong>
                <span>Schedule</span><strong>${n_(n)}</strong>
                <span>Next run</span><strong>${An(n.next_run)}</strong>
                <span>Last run</span><strong>${An(n.last_run)}</strong>
                <span>Last result</span><strong>${n.latest_run_log?.status||n.last_result||"—"}</strong>
                <span>Chat</span><code>${n.chat_jid||"—"}</code>
                <span>Model</span><code>${n.model||"default"}</code>
                ${n.cwd&&s`<span>CWD</span><code>${n.cwd}</code>`}
                ${n.timeout_sec&&s`<span>Timeout</span><strong>${n.timeout_sec}s</strong>`}
                ${r&&s`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${n.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${n.command||n.prompt||n.command_summary||n.prompt_summary||n.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${zs} task=${n} />
        </div>
    `}function Fs({filter:n="",setStatus:i}){let[r,_]=w([]),[c,u]=w({active:0,paused:0,completed:0}),[f,$]=w("all"),[l,g]=w(""),[x,o]=w(!0),[v,K]=w(null),[B,k]=w(null),[H,y]=w(null),[p,V]=w(!1),T=G(async(h={})=>{o(!0),K(null);try{let b=await Br({status:f,chatJid:l.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});_(b.tasks||[]),u(b.counts||{active:0,paused:0,completed:0});let q=h.selectedId||B,F=(b.tasks||[]).find((N)=>N.id===q)||(b.tasks||[])[0]||null;k(F?.id||null),y(F)}catch(b){K(b?.message||"Failed to load scheduled tasks.")}finally{o(!1)}},[f,l,B]);t(()=>{T()},[T]);let j=String(n||"").trim().toLowerCase(),P=L(()=>{if(!j)return r;return r.filter((h)=>[h.id,h.chat_jid,h.status,h.task_kind,h.schedule_type,h.schedule_value,h.summary,h.prompt_summary,h.command_summary,h.latest_run_log?.error_summary].some((b)=>String(b||"").toLowerCase().includes(j)))},[r,j]),z=G((h)=>{k(h?.id||null),y(h||null)},[]),R=G(async(h,b)=>{if(!b||p)return;let q=r_(b),F=b.summary||b.command_summary||b.prompt_summary||b.id,N=h==="delete"?`Delete scheduled task ${b.id}?

${F}`:`${h==="pause"?"Pause":"Resume"} scheduled task ${b.id}?

${F}`;if(!window.confirm(N))return;if(q&&!window.confirm(`Task ${b.id} is internal/protected. Continue with ${h}?`))return;V(!0),i?.(`${h==="delete"?"Deleting":h==="pause"?"Pausing":"Resuming"} ${b.id}…`,"info");try{await zr(h,b.id,{allowInternal:q}),i?.(`Scheduled task ${b.id} ${h==="delete"?"deleted":h==="pause"?"paused":"resumed"}.`,"success"),await T({selectedId:h==="delete"?null:b.id})}catch(I){i?.(I?.message||`Failed to ${h} task.`,"error")}finally{V(!1)}},[p,T,i]);return s`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${mn} type="active">Active ${c.active||0}<//>
                    <${mn} type="paused">Paused ${c.paused||0}<//>
                    <${mn} type="completed">Completed ${c.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${f} onChange=${(h)=>$(h.target.value)}>
                        ${hs.map((h)=>s`<option value=${h}>${h==="all"?"All statuses":h}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${l} onInput=${(h)=>g(h.target.value)} />
                    <button onClick=${()=>T()} disabled=${x}>Refresh</button>
                </div>
            </div>

            ${x&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${v&&s`<div class="settings-error-state">${v}</div>`}
            ${!x&&!v&&r.length===0&&s`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/r`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!x&&!v&&r.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${P.map((h)=>s`
                            <button class=${`settings-task-row ${h.id===B?"active":""}`} onClick=${()=>z(h)}>
                                <span class="settings-task-row-main">
                                    <strong>${h.summary||h.id}</strong>
                                    <span>${n_(h)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${mn} type=${h.status||"neutral"}>${h.status}<//>
                                    <${mn}>${i_(h)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${An(h.next_run)} · Last ${An(h.last_run)}${h.latest_run_log?.status?` · ${h.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${P.length===0&&s`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${Hs} task=${H&&P.some((h)=>h.id===H.id)?H:P[0]} onAction=${R} />
                </div>
            `}
        </div>
    `}var hs,Ws;var fu=O(()=>{m();zn();hs=["all","active","paused","completed"];Ws={formatDateTime:An,formatDuration:cu,labelForSchedule:n_,kindLabel:i_,isProtectedTask:r_}});function su(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function an(n){return typeof n==="string"&&n.trim().length>0}function __(n,...i){let r=su(n);if(!r)return!0;let _=i.map((c)=>su(c)).filter(Boolean);for(let c of _)if(c.startsWith(r)||c.includes(r))return!0;return!1}function $u(n){if(!Array.isArray(n))return null;let i=[],r=new Set;for(let _ of n){let c=String(_||"").trim();if(!c)continue;let u=c.toLowerCase();if(r.has(u))continue;r.add(u),i.push(c)}return i}function xi(n){let i=n&&typeof n==="object"?n:{};return{workspaceCommands:$u(i.workspaceCommands),slashCommands:$u(i.slashCommands)}}function gu(n,i){if(!Array.isArray(n))return!0;return n.some((r)=>r.toLowerCase()===i.toLowerCase())}function js(n){let i=Array.isArray(n?.commands)?n.commands:[],r=xi(n?.settings),_=String(n?.query||"");return i.filter((c)=>gu(r.workspaceCommands,c.id)).filter((c)=>__(_,c.label,c.description,...c.keywords||[])).map((c)=>({key:`workspace:${c.id}`,kind:"workspace",title:c.label,subtitle:c.description,searchText:`${c.label} ${c.description} ${(c.keywords||[]).join(" ")}`.trim(),visualHint:c.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:c.id}))}function Us(n){let i=Array.isArray(n?.agents)?n.agents:[],r=String(n?.query||""),_=new Set;return i.filter((c)=>{let u=an(c?.chat_jid)?c.chat_jid.trim():"";if(!u||_.has(u))return!1;if(c?.archived_at)return!1;return _.add(u),!0}).filter((c)=>__(r,`@${String(c?.agent_name||"").trim()}`,c?.session_name,c?.chat_jid)).map((c)=>{let u=an(c?.agent_name)?c.agent_name.trim():String(c?.chat_jid||"").replace(/^[^:]+:/,""),f=an(c?.session_name)?c.session_name.trim():"",$=String(c?.chat_jid||"").trim();return{key:`agent:${$}`,kind:"agent",title:`@${u}`,subtitle:f||$,searchText:`@${u} ${f} ${$}`.trim(),visualHint:u.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:$}})}function Gs(n){let i=Array.isArray(n?.slashCommands)?n.slashCommands:[],r=xi(n?.settings),_=String(n?.query||""),c=new Set;return i.filter((u)=>{let f=an(u?.name)?u.name.trim():"";if(!f||c.has(f.toLowerCase()))return!1;return c.add(f.toLowerCase()),gu(r.slashCommands,f)}).filter((u)=>__(_,u?.name,u?.description,u?.source)).map((u)=>{let f=String(u?.name||"").trim(),$=an(u?.description)?u.description.trim():"slash command",l=an(u?.source)?u.source.trim():"";return{key:`slash:${f}`,kind:"slash",title:f,subtitle:$,searchText:`${f} ${$} ${String(u?.source||"")}`.trim(),visualHint:"/",categoryLabel:l||"Slash",actionHint:"Insert",commandName:f}})}function Og(n){return[...Us({agents:n?.agents,query:n?.query}),...js({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...Gs({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var ni;var ou=O(()=>{ni=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var yu={};un(yu,{QuickActionsSection:()=>Ts});function lu(n,...i){let r=String(n||"").trim().toLowerCase();if(!r)return!0;return i.some((_)=>String(_||"").toLowerCase().includes(r))}function wu(n){if(!Array.isArray(n))return null;return new Set(n.map((i)=>String(i||"").trim().toLowerCase()).filter(Boolean))}function Ts({filter:n="",setStatus:i,mergeSettingsData:r}){let{t:_}=C(),[c,u]=w(()=>ni.map((z)=>z.id)),[f,$]=w([]),[l,g]=w([]),[x,o]=w(!0),[v,K]=w(!1),B=G(async()=>{o(!0);try{let[z,R]=await Promise.all([Rr(),Pr("web:default").catch(()=>({commands:[]}))]),h=xi(z?.settings),b=Array.isArray(R?.commands)?R.commands:[];g(b),u(Array.isArray(h.workspaceCommands)?h.workspaceCommands:ni.map((q)=>q.id)),$(Array.isArray(h.slashCommands)?h.slashCommands:b.map((q)=>String(q?.name||"").trim()).filter(Boolean))}catch(z){i?.(String(z?.message||z),"error")}finally{o(!1)}},[i]);t(()=>{B()},[B]);let k=L(()=>wu(c),[c]),H=L(()=>wu(f),[f]),y=L(()=>ni.filter((z)=>lu(n,z.label,z.description,...z.keywords||[])),[n]),p=L(()=>l.filter((z)=>lu(n,z?.name,z?.description,z?.source)),[l,n]),V=G((z)=>{u((R)=>{let h=new Set((Array.isArray(R)?R:[]).map((b)=>String(b||"").trim()).filter(Boolean));if(h.has(z))h.delete(z);else h.add(z);return ni.map((b)=>b.id).filter((b)=>h.has(b))})},[]),T=G((z)=>{$((R)=>{let h=new Set((Array.isArray(R)?R:[]).map((b)=>String(b||"").trim()).filter(Boolean));if(h.has(z))h.delete(z);else h.add(z);return l.map((b)=>String(b?.name||"").trim()).filter((b)=>b&&h.has(b))})},[l]),j=G(()=>{u(ni.map((z)=>z.id)),$(l.map((z)=>String(z?.name||"").trim()).filter(Boolean))},[l]),P=G(async()=>{if(v)return;K(!0),i?.(_("settings.quickActions.savingToast"),"info");try{let z=await Vr({workspaceCommands:c,slashCommands:f}),R=xi(z?.settings);r?.({quickActions:R}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:R}})),i?.(_("settings.quickActions.savedToast"),"success")}catch(z){i?.(String(z?.message||z),"error")}finally{K(!1)}},[r,v,i,f,c]);if(x)return s`<div class="settings-loading">${_("settings.quickActions.loading")}</div>`;return s`
        <div class="settings-section">
            <h3>${_("settings.quickActions.heading")}</h3>
            <p class="settings-hint">
                ${_("settings.quickActions.intro")}
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${j} disabled=${v}>${_("settings.quickActions.enableAll")}</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${P} disabled=${v}>
                    ${v?_("settings.quickActions.saving"):_("settings.quickActions.saveApply")}
                </button>
            </div>

            <h3 style="margin-top:8px;">${_("settings.quickActions.workspaceCommands")}</h3>
            <div class="settings-subsection-list">
                ${y.map((z)=>{let R=k?k.has(z.id.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${z.id}>
                            <input type="checkbox" checked=${R} onChange=${()=>V(z.id)} />
                            <div>
                                <div>${z.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${z.description}</div>
                            </div>
                        </label>
                    `})}
                ${y.length===0&&s`<div class="settings-hint">${_("settings.quickActions.noWorkspaceMatch")}</div>`}
            </div>

            <h3 style="margin-top:20px;">${_("settings.quickActions.slashCommands")}</h3>
            <div class="settings-subsection-list">
                ${p.map((z)=>{let R=String(z?.name||"").trim(),h=H?H.has(R.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${R}>
                            <input type="checkbox" checked=${h} onChange=${()=>T(R)} />
                            <div>
                                <div><code>${R}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${z?.description||_("settings.quickActions.slashFallback")}</div>
                            </div>
                        </label>
                    `})}
                ${p.length===0&&s`<div class="settings-hint">${_("settings.quickActions.noSlashMatch")}</div>`}
            </div>
        </div>
    `}var xu=O(()=>{m();zn();ou();fn()});var bu={};un(bu,{KeychainSection:()=>Vs});function Ps(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function Vs({filter:n=""}){let[i,r]=w([]),[_,c]=w(!0),[u,f]=w(null),[$,l]=w(!1),[g,x]=w(""),[o,v]=w(""),[K,B]=w(""),[k,H]=w(""),[y,p]=w(""),[V,T]=w("secret"),[j,P]=w(!1),[z,R]=w({}),[h,b]=w(null),[q,F]=w(null),[N,I]=w(null),W=J(null),A=J(null),Y=J(null),d=G(async()=>{c(!0),f(null);try{let Z=await(await fetch("/agent/keychain")).json();if(Z?.ok)r(Z.entries||[]);else f(Z?.error||"Failed to load keychain.")}catch(U){f("Failed to load keychain.")}finally{c(!1)}},[]);t(()=>{d()},[d]);let _n=G(async()=>{let U=g.trim(),Z=o;if(!U||!Z)return;P(!0);try{let on=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:U,secret:Z,type:V,username:K.trim()||void 0,userNote:k,agentNote:y})})).json();if(on?.ok)x(""),v(""),B(""),H(""),p(""),T("secret"),l(!1),await d();else f(on?.error||"Failed to add entry.")}catch{f("Failed to add entry.")}finally{P(!1)}},[g,o,K,k,y,V,d]),$n=G(async(U)=>{try{let cn=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:U})})).json();if(cn?.ok)F(null),I((on)=>on?.name===U?null:on),await d();else f(cn?.error||"Failed to delete entry.")}catch{f("Failed to delete entry.")}},[d]),yn=G(async(U)=>{let Z=U?.name;if(!Z)return;let cn=z[Z]||{},on=Object.prototype.hasOwnProperty.call(cn,"userNote")?cn.userNote:U.userNote||"",wn=Object.prototype.hasOwnProperty.call(cn,"agentNote")?cn.agentNote:U.agentNote||"";b(Z);try{let Pn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Z,userNote:on,agentNote:wn})})).json();if(Pn?.ok)R((pi)=>{let ri={...pi||{}};return delete ri[Z],ri}),await d();else f(Pn?.error||"Failed to save notes.")}catch{f("Failed to save notes.")}finally{b(null)}},[z,d]),kn=G((U,Z,cn)=>{R((on)=>({...on||{},[U]:{...(on||{})[U]||{},[Z]:cn}}))},[]),Q=G(async(U,Z,cn)=>{try{let wn=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:U,master_password:Z||void 0,totp_code:cn||void 0})})).json();if(wn?.ok)I({name:U,phase:"revealed",secret:wn.secret,username:wn.username,masterPassword:Z});else if(wn?.needs_master_password)I((pn)=>({name:U,phase:"password",masterPassword:"",error:pn?.name===U&&pn?.masterPassword?wn.error:null})),requestAnimationFrame(()=>A.current?.focus());else if(wn?.needs_totp)I((pn)=>({name:U,phase:"totp",masterPassword:Z,totpCode:"",error:pn?.name===U&&pn?.phase==="totp"&&pn?.totpCode?wn.error:null})),requestAnimationFrame(()=>Y.current?.focus());else I({name:U,phase:"error",error:wn?.error||"Failed to reveal."})}catch{I({name:U,phase:"error",error:"Failed to reveal."})}},[]),M=G((U)=>{if(N?.name===U&&N?.phase==="revealed"){I(null);return}Q(U,null,null)},[N,Q]),gn=G((U)=>{let Z=N?.masterPassword||"";if(!Z)return;Q(U,Z,null)},[N,Q]),ki=G((U)=>{let Z=N?.totpCode||"";if(Z.length<6)return;Q(U,N?.masterPassword,Z)},[N,Q]),X=G(async(U)=>{try{await navigator.clipboard.writeText(U)}catch{let Z=document.createElement("textarea");Z.value=U,Z.style.position="fixed",Z.style.opacity="0",document.body.appendChild(Z),Z.select(),document.execCommand("copy"),document.body.removeChild(Z)}},[]);t(()=>{if($)requestAnimationFrame(()=>W.current?.focus())},[$]);let E=n.toLowerCase(),xn=L(()=>{if(!E)return i;return i.filter((U)=>U.name.toLowerCase().includes(E)||(U.type||"").toLowerCase().includes(E)||(U.envVar||"").toLowerCase().includes(E)||(U.userNote||"").toLowerCase().includes(E)||(U.agentNote||"").toLowerCase().includes(E))},[i,E]);if(_)return s`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return s`
        <div class="settings-section">
            ${u&&s`
                <div class="settings-keychain-error" role="alert">
                    ${u}
                    <button class="settings-keychain-dismiss" onClick=${()=>f(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${xn.length} entr${xn.length===1?"y":"ies"}${E?` matching "${n}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>l(!$)}>
                    ${$?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${$&&s`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${W} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${g} onInput=${(U)=>x(U.target.value)}
                            class="settings-keychain-input" />
                        <select value=${V} onChange=${(U)=>T(U.target.value)}
                            class="settings-keychain-select">
                            ${Rs.map((U)=>s`<option value=${U}>${U}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${o} onInput=${(U)=>v(U.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${K} onInput=${(U)=>B(U.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${_n}
                            disabled=${j||!g.trim()||!o}>
                            ${j?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${k} onInput=${(U)=>H(U.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${y} onInput=${(U)=>p(U.target.value)}
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
                        ${xn.length===0&&s`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${E?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${xn.map((U)=>{let Z=N?.name===U.name?N:null,cn=Z?.phase==="revealed",on=Z?.phase==="password",wn=Z?.phase==="totp",pn=Z?.phase==="error",Pn=z[U.name]||{},pi=Object.prototype.hasOwnProperty.call(Pn,"userNote")?Pn.userNote:U.userNote||"",ri=Object.prototype.hasOwnProperty.call(Pn,"agentNote")?Pn.agentNote:U.agentNote||"",Ru=pi!==(U.userNote||"")||ri!==(U.agentNote||""),g_=h===U.name;return s`
                            <tr class="settings-keychain-row" key=${U.name}>
                                <td class="settings-keychain-name">${U.name}</td>
                                <td><span class="settings-keychain-type-badge">${U.type}</span></td>
                                <td class="settings-keychain-env">${U.envVar?s`<code>$${U.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Ps(U.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${cn?" active":""}`}
                                        onClick=${()=>M(U.name)}
                                        title=${cn?"Hide secret":"Reveal secret"}>
                                        ${cn?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${q===U.name?s`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>$n(U.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>F(null)}>No</button>
                                            </span>
                                        `:s`<button class="settings-keychain-delete-btn" onClick=${()=>F(U.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${U.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${pi}
                                                onInput=${(ln)=>kn(U.name,"userNote",ln.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${ri}
                                                onInput=${(ln)=>kn(U.name,"agentNote",ln.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!Ru||g_} onClick=${()=>yn(U)}>
                                            ${g_?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${on&&s`
                                <tr class="settings-keychain-prompt-row" key=${U.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${A} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${Z?.masterPassword||""}
                                                onInput=${(ln)=>I((ei)=>({...ei,masterPassword:ln.target.value}))}
                                                onKeyDown=${(ln)=>{if(ln.key==="Enter")gn(U.name);if(ln.key==="Escape")I(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>gn(U.name)}
                                                disabled=${!Z?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>I(null)}>Cancel</button>
                                            ${Z?.error&&s`<span class="settings-keychain-prompt-error">${Z.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${wn&&s`
                                <tr class="settings-keychain-prompt-row" key=${U.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${Y} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${Z?.totpCode||""}
                                                onInput=${(ln)=>I((ei)=>({...ei,totpCode:ln.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(ln)=>{if(ln.key==="Enter")ki(U.name);if(ln.key==="Escape")I(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>ki(U.name)}
                                                disabled=${(Z?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>I(null)}>Cancel</button>
                                            ${Z?.error&&s`<span class="settings-keychain-prompt-error">${Z.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${cn&&s`
                                <tr class="settings-keychain-reveal-row" key=${U.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${Z.username&&s`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${Z.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>X(Z.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${Z.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>X(Z.secret)} title="Copy secret">
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
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${Z.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var Rs;var vu=O(()=>{m();Rs=["secret","token","password","basic"]});var ku={};un(ku,{ToolsSection:()=>ts});function ts({toolsets:n,filter:i="",settingsData:r,mergeSettingsData:_}){let{t:c}=C(),u=n||[],[f,$]=w(()=>{let k={};for(let H of u)k[H.name]=!0;return k}),l=G((k)=>{$((H)=>({...H,[k]:!H[k]}))},[]),g=r?.searchMatchMode||"or",x=L(()=>{let k=Array.isArray(r?.toolResultCompactionTools)?r.toolResultCompactionTools:[];return new Set(k.filter((H)=>typeof H==="string").map((H)=>H.trim().toLowerCase()).filter(Boolean))},[r?.toolResultCompactionTools]),o=G(async()=>{let k=g==="or"?"and":"or";try{let y=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:k})})).json().catch(()=>({}));if(y?.ok&&y?.settings)_?.(y.settings)}catch(H){console.warn("[settings/tools] Failed to save search match mode.",H)}},[g,_]),v=G(async(k)=>{let H=String(k||"").trim().toLowerCase();if(!H)return;let y=new Set(x);if(y.has(H))y.delete(H);else y.add(H);try{let V=await(await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toolResultCompactionTools:Array.from(y).sort()})})).json().catch(()=>({}));if(V?.ok&&V?.settings)_?.(V.settings)}catch(p){console.warn("[settings/tools] Failed to save tool compaction settings.",p)}},[x,_]),K=i.toLowerCase(),B=L(()=>{if(!K)return u;return u.map((k)=>{let H=k.tools.filter((y)=>y.name.toLowerCase().includes(K)||k.name.toLowerCase().includes(K)||(y.summary||"").toLowerCase().includes(K));return H.length>0?{...k,tools:H}:null}).filter(Boolean)},[u,K]);if(u.length===0)return s`<div class="settings-section"><p class="settings-hint">${c("settings.tools.unavailable")}</p></div>`;return s`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">${c("settings.tools.search")}</h4>
                <div class="settings-row">
                    <label>${c("settings.tools.matchMode")}</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${g==="and"} onChange=${o} />
                        <span class="settings-hint" style="margin:0">
                            ${g==="or"?c("settings.tools.orMode"):c("settings.tools.andMode")}
                        </span>
                    </div>
                </div>
            </div>
            ${B.map((k)=>{let H=f[k.name]!==!1;return s`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${H} onChange=${()=>l(k.name)} />
                            <span class="settings-toolset-icon">${Ns[k.name]||Ms}</span>
                            <strong>${k.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${k.description}</span>
                    </div>
                    ${H&&s`<div class="settings-tool-list">
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
                                    <span class="settings-tool-kind" title=${y.kind}>${Qs[y.kind]||"?"}</span>
                                    ${y.summary&&s`<span class="settings-tool-summary">${y.summary}</span>`}
                                    ${!y.summary&&s`<span class="settings-tool-summary"></span>`}
                                    <span class="settings-tool-source">${Xs[y.name]||k.name}</span>
                                </div>
                            `})}
                    </div>`}
                </div>
            `})}
            ${B.length===0&&s`<p class="settings-hint">${c("settings.tools.noMatch",{filter:i})}</p>`}
            <p class="settings-hint">${c("settings.tools.footer")}</p>
        </div>
    `}var Ns,Xs,Qs,Ms;var pu=O(()=>{m();fn();Ns={core:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},Xs={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Qs={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},Ms=s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var Ku={};un(Ku,{AddonsSection:()=>qs});function qs({setStatus:n,filter:i=""}){let{t:r}=C(),[_,c]=w(null),[u,f]=w(!0),[$,l]=w(null),[g,x]=w(!1),[o,v]=w({runtime:"",windowsNative:!1}),[K,B]=w([]),[k,H]=w([]);function y(){let b=new URLSearchParams;try{let F=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),N=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((W)=>W.trim()).filter(Boolean),I=localStorage.getItem("piclaw_addons_repo_url");if(F)b.append("catalog_url",F);for(let W of N)b.append("catalog_url",W);if(I)b.set("repo_url",I)}catch(F){}let q=b.toString();return q?`?${q}`:""}let p=G(async()=>{try{let[b,q]=await Promise.all([fetch(`/agent/addons${y()}`),fetch("/agent/settings-data")]),F=await b.json();if(F.error)throw Error(F.error);c(F.addons||[]),B(F.sources||[]),H(F.failed_sources||[]);let N=await q.json().catch(()=>({})),I=typeof N?.runtimePlatform==="string"?N.runtimePlatform:"";v({runtime:I,windowsNative:I==="win32"})}catch(b){c(null),n?.(String(b.message||b),"error")}finally{f(!1)}},[n]);t(()=>{p()},[]);let V=G(async(b)=>{if($)return;l({slug:b,action:"install"}),n?.(r("settings.addons.installing",{slug:b}),"info");try{let F=await(await fetch(`/agent/addons/install${y()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:b})})).json();if(F.error){n?.(F.error,"error");return}x(!0);let N=[F.message,F.warning].filter(Boolean).join(" ");n?.(N||r("settings.addons.installedToast"),"success"),await p()}catch(q){n?.(String(q.message||q),"error")}finally{l(null)}},[$,p,n]),T=G(async(b)=>{if($)return;l({slug:b,action:"remove"}),n?.(r("settings.addons.removing",{slug:b}),"info");try{let F=await(await fetch(`/agent/addons/uninstall${y()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:b})})).json();if(F.error){n?.(F.error,"error");return}x(!0);let N=[F.message,F.warning].filter(Boolean).join(" ");n?.(N||r("settings.addons.removedToast"),"success"),await p()}catch(q){n?.(String(q.message||q),"error")}finally{l(null)}},[$,p,n]),j=G(async()=>{if($)return;l({slug:null,action:"restart"}),n?.(r("settings.addons.restarting"),"info");try{let q=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(q.error){n?.(q.error,"error"),l(null);return}n?.(q.message||r("settings.addons.restarting"),"success"),x(!1),(async(N=30,I=2000)=>{for(let W=0;W<N;W++){await new Promise((A)=>setTimeout(A,I));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await p(),l(null),n?.(r("settings.addons.restartComplete"),"success");return}}catch(A){}}l(null),n?.(r("settings.addons.restartTimeout"),"warning")})()}catch(b){n?.(String(b.message||b),"error"),l(null)}},[$,n,p]);if(u)return s`<div class="settings-loading">${r("settings.addons.fetching")}</div>`;if(!_)return s`<div class="settings-section"><p class="settings-hint">${r("settings.addons.loadFailed")}</p></div>`;let P=i.toLowerCase(),z=P?_.filter((b)=>b.slug.toLowerCase().includes(P)||(b.description||"").toLowerCase().includes(P)||(b.tags||[]).some((q)=>q.toLowerCase().includes(P))):_,R=$?.slug||null,h=$?$.action==="remove"?r("settings.addons.removing",{slug:$.slug}):$.action==="restart"?r("settings.addons.restarting"):r("settings.addons.installing",{slug:$.slug}):"";return s`
        <div class=${`settings-section settings-addon-panel${$?" busy":""}`} aria-busy=${$?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${K.length<=1?s`${r("settings.addons.catalogFromPre")} <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:s`${r("settings.addons.catalogMerged",{count:K.length})}`}
                        ${" "}${r("settings.addons.installNote")}
                    </p>
                    ${k.length>0&&s`
                        <div class="settings-addon-error" role="alert">
                            ${k.length>1?r("settings.addons.failedFetchPlural",{count:k.length}):r("settings.addons.failedFetchSingular",{count:k.length})}
                            ${k.map((b)=>s` <code style="font-size:0.82em;word-break:break-all">${b}</code>`)}
                        </div>
                    `}
                    ${K.length>1&&s`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">${r("settings.addons.activeSources",{count:K.length})}</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${K.map((b)=>s`<li style="word-break:break-all"><code>${b}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${o.windowsNative&&s`
                        <div class="settings-addon-error" role="alert">
                            ${r("settings.addons.windowsWarning")}
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
                ${z.map((b)=>{let q=(b.skills||[]).length>0,F=b.type==="extension",N=q&&F?r("settings.addons.typeExtSkill"):q?r("settings.addons.typeSkill"):r("settings.addons.typeExt"),I=q&&!F?"settings-tag-skill":"",W=typeof b.homepage==="string"&&b.homepage.trim()?b.homepage.trim():"";return s`
                    <div class=${`settings-addon-card${b.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${W?s`<a class="settings-addon-name-link" href=${W} target="_blank" rel="noopener noreferrer">${b.slug}</a>`:s`<strong>${b.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${I}`}>${N}</span>
                            <span class="settings-addon-version">${b.installed?b.installedVersion||"?":b.version||""}</span>
                            ${b.installKind&&s`<span class="settings-tag">${b.installKind}</span>`}
                            ${b.hasUpdate&&s`<span class="settings-tag settings-tag-skill">\u2191 ${b.version}</span>`}
                            <div class="settings-addon-actions">
                                ${b.installed?s`
                                    ${b.hasUpdate&&s`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean($)} onClick=${()=>V(b.slug)}>${R===b.slug?"…":r("settings.addons.update")}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean($)} onClick=${()=>T(b.slug)}>${R===b.slug?"…":r("settings.addons.remove")}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean($)} onClick=${()=>V(b.slug)}>${R===b.slug?"…":r("settings.addons.install")}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${b.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(b.tags||[]).map((A)=>s`<span class="settings-tag">${A}</span>`)}${(b.skills||[]).map((A)=>s`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${A}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${z.length===0&&s`<p class="settings-hint">${r("settings.addons.noMatch",{filter:i})}</p>`}
            </div>
            ${g&&s`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>${r("settings.addons.restartNotice")}</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean($)} onClick=${j}>${r("settings.addons.restartNow")}</button>
                </div>
            `}
        </div>
    `}var hu=O(()=>{m();fn()});var Cs={};function c_(n,i){try{let r=localStorage.getItem(n);return r===null?i:r==="true"}catch{return i}}function Ji(n,i){try{localStorage.setItem(n,String(i))}catch(r){}}function As(n,i){try{return localStorage.getItem(n)||i}catch{return i}}function Zs(n,i){try{localStorage.setItem(n,i)}catch(r){}}function Ds(n,i,r,_){try{return En(localStorage.getItem(n),{fallback:i,min:r,max:_})}catch{return En(i,{fallback:i,min:r,max:_})}}function Is(n,i){try{localStorage.setItem(n,String(i))}catch(r){}}function Ys(){let{t:n}=C(),[i,r]=w(()=>c_("piclaw_vim_mode",!1)),[_,c]=w(()=>c_("piclaw_show_whitespace",!0)),[u,f]=w(()=>c_("piclaw_md_live_preview",!0)),[$,l]=w(()=>Ds("piclaw_editor_font_size",13,10,24)),[g,x]=w(()=>As("piclaw_editor_font_family","")),o=G((v,K,B)=>{let k=!K;B(k),Ji(v,k)},[]);return s`
        <div class="settings-section">
            <h3>${n("settings.editor.heading")}</h3>
            <div class="settings-row">
                <label>${n("settings.editor.vimMode")}</label>
                <input type="checkbox" checked=${i}
                    onChange=${()=>{let v=!i;r(v),Ji("piclaw_vim_mode",v)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.showWhitespace")}</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let v=!_;c(v),Ji("piclaw_show_whitespace",v)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.livePreview")}</label>
                <input type="checkbox" checked=${u}
                    onChange=${()=>{let v=!u;f(v),Ji("piclaw_md_live_preview",v)}} />
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
                    onChange=${(v)=>{l(v),Is("piclaw_editor_font_size",v)}}
                />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontFamily")}</label>
                <input type="text" value=${g}
                    onInput=${(v)=>{let K=v.target.value;x(K),Zs("piclaw_editor_font_family",K)}}
                    placeholder=${n("settings.editor.fontFamilyPlaceholder")} />
            </div>
            <p class="settings-hint settings-local-only-hint">${n("settings.editor.localOnlyHint")}</p>
        </div>
    `}var Ls;var Bu=O(()=>{m();fi();dn();fn();Ls=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;Cn({id:"editor",label:"Editor",icon:Ls,component:Ys,order:150})});var Es={};function u_(n,i){try{let r=localStorage.getItem(n);return r===null?i:r==="true"}catch{return i}}function f_(n,i){try{localStorage.setItem(n,String(i))}catch(r){}}function s_(n,i){try{return localStorage.getItem(n)||i}catch{return i}}function $_(n,i){try{localStorage.setItem(n,i)}catch(r){}}function Js(){let{t:n}=C(),[i,r]=w(()=>u_("piclaw_dev_mode",!1)),[_,c]=w(()=>s_("piclaw_addons_catalog_url","")),[u,f]=w(()=>s_("piclaw_addons_catalog_urls","")),[$,l]=w(()=>s_("piclaw_addons_repo_url","")),[g,x]=w(()=>u_("piclaw_debug_sse",!1)),[o,v]=w(()=>u_("piclaw_debug_tool_calls",!1)),K=G(()=>{let B=!i;r(B),f_("piclaw_dev_mode",B)},[i]);return s`
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
                    <input type="text" value=${_}
                        onInput=${(B)=>{let k=B.target.value;c(k),$_("piclaw_addons_catalog_url",k)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.catalogHint")} (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>${n("settings.developer.additionalCatalogs")}</label>
                    <textarea
                        value=${u}
                        onInput=${(B)=>{let k=B.target.value;f(k),$_("piclaw_addons_catalog_urls",k)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.additionalHint")}</p>
                <div class="settings-row">
                    <label>${n("settings.developer.repoUrl")}</label>
                    <input type="text" value=${$}
                        onInput=${(B)=>{let k=B.target.value;l(k),$_("piclaw_addons_repo_url",k)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.repoHintPre")} <code>bun add</code> ${n("settings.developer.repoHintPost")}</p>

                <h3 style="margin-top:16px">${n("settings.developer.debug")}</h3>
                <div class="settings-row">
                    <label>${n("settings.developer.logSse")}</label>
                    <input type="checkbox" checked=${g}
                        onChange=${()=>{let B=!g;x(B),f_("piclaw_debug_sse",B)}} />
                </div>
                <div class="settings-row">
                    <label>${n("settings.developer.logToolCalls")}</label>
                    <input type="checkbox" checked=${o}
                        onChange=${()=>{let B=!o;v(B),f_("piclaw_debug_tool_calls",B)}} />
                </div>
                <p class="settings-hint">${n("settings.developer.debugHint")}</p>
            `}
        </div>
    `}var Os;var zu=O(()=>{m();fi();fn();Os=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;Cn({id:"developer",label:"Developer",icon:Os,component:Js,order:900})});var v$={};un(v$,{openSettingsDialog:()=>b$,SettingsDialogContent:()=>Si,SettingsDialog:()=>x$});function vi(n){bi.push({ts:performance.now(),label:n})}function ds(){if(!bi.length)return;let n=bi[0].ts,i=bi.map((r)=>`+${(r.ts-n).toFixed(1)}ms ${r.label}`);console.info(`[settings-dialog perf]
`+i.join(`
`));try{window.__piclawSettingsPerfLog=i}catch(r){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:i})}).catch((r)=>{})}catch(r){}bi.length=0}function ms(n){let i=di.get(n);if(i)return Promise.resolve(i);let r=Oi.get(n);if(r)return r;let _=Ss[n]().then((c)=>{return di.set(n,c),Oi.delete(n),c}).catch((c)=>{throw Oi.delete(n),c});return Oi.set(n,_),_}function Ei(n="Loading…"){return s`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function Si({onClose:n}){vi("SettingsDialogContent-render-start");let[i,r]=w(()=>vr()||"general"),[_,c]=w(Hu),[u,f]=w(null),[$,l]=w(""),[,g]=w(0),[x,o]=w(()=>Object.fromEntries(di.entries())),[v,K]=w(null),[B,k]=w({compact:!1,narrow:!1}),H=J(null),y=J(null),{t:p}=C(),V=(W)=>W?.isExtension?W.label:p(`settings.section.${W.id}`),T=(W)=>W?.isExtension?W.placeholder||p("settings.filter"):p(`settings.placeholder.${W.id}`);t(()=>{vi("SettingsDialogContent-mounted"),ds()},[]),t(()=>{let W=(A)=>{if(A.key==="Escape")n()};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[n]),t(()=>{let W=(A)=>{let Y=typeof A?.detail?.section==="string"?A.detail.section.trim():"";if(Y)r(Y),l("")};return window.addEventListener("piclaw:open-settings",W),()=>window.removeEventListener("piclaw:open-settings",W)},[]),t(()=>{let W=()=>g((A)=>A+1);return window.addEventListener("piclaw:settings-panes-changed",W),()=>window.removeEventListener("piclaw:settings-panes-changed",W)},[]),t(()=>{fetch("/agent/settings-data").then((W)=>W.json()).then((W)=>{Hu=W,c(W)}).catch(()=>c({}))},[]),t(()=>{let W=y.current;if(!W)return;let A=()=>{let Y=W.clientWidth||0;k((d)=>{let _n={compact:Y>0&&Y<=860,narrow:Y>0&&Y<=720};return d.compact===_n.compact&&d.narrow===_n.narrow?d:_n})};if(A(),typeof ResizeObserver==="function"){let Y=new ResizeObserver(()=>A());return Y.observe(W),()=>Y.disconnect()}return window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);let j=[...Wu].sort((W,A)=>(W.order??500)-(A.order??500)),z=C_().map((W)=>({id:W.id,label:W.label,icon:W.icon,searchable:W.searchable||!1,placeholder:W.searchPlaceholder,order:W.order??500,isExtension:!0,component:W.component})).sort(br),R=[...j,...z],h=R.find((W)=>W.id===i)||Wu.find((W)=>W.id===i);t(()=>{if(h?.searchable)requestAnimationFrame(()=>H.current?.focus())},[i]),t(()=>{if(h?.isExtension){K(null);return}let W=!1;if(x[i]){K(null);return}return K(i),ms(i).then((A)=>{if(W)return;o((Y)=>Y?.[i]?Y:{...Y||{},[i]:A})}).catch((A)=>{if(W)return;console.error(`[settings-dialog] Failed to lazy-load section "${i}".`,A)}).finally(()=>{if(!W)K((A)=>A===i?null:A)}),()=>{W=!0}},[i,h?.isExtension,x]);let b=G((W,A="info")=>{f(W?{text:W,type:A}:null)},[]),q=G((W)=>{r(W),l("");let A=es[W];if(A&&!Fu.has(W))Fu.add(W),A().then(()=>g((Y)=>Y+1)).catch((Y)=>{})},[]),F=G((W)=>{c((A)=>({...A||{},...W||{}}))},[]),N=()=>{if(h?.isExtension){if(!h.component)return Ei("Loading pane…");let A=h.component;return s`<${A} filter=${$} />`}let W=x[i];if(!W||v===i)return Ei(`${p("settings.loading")}`);switch(i){case"general":return s`<${W} settingsData=${_} setStatus=${b} mergeSettingsData=${F} />`;case"sessions":return s`<${W} settingsData=${_} setStatus=${b} mergeSettingsData=${F} />`;case"recordings":return s`<${W} filter=${$} setStatus=${b} />`;case"compaction":return s`<${W} settingsData=${_} setStatus=${b} mergeSettingsData=${F} />`;case"keyboard":return s`<${W} filter=${$} setStatus=${b} />`;case"workspace":return s`<${W} settingsData=${_} setStatus=${b} mergeSettingsData=${F} />`;case"environment":return s`<${W} settingsData=${_} filter=${$} setStatus=${b} mergeSettingsData=${F} />`;case"providers":return s`<${W} providers=${_?.providers} setStatus=${b} />`;case"models":return s`<${W} filter=${$} />`;case"theme":return s`<${W} themes=${_?.themes} colorKeys=${_?.colorKeys} settingsData=${_} setStatus=${b} mergeSettingsData=${F} />`;case"scheduled-tasks":return s`<${W} filter=${$} setStatus=${b} />`;case"quick-actions":return s`<${W} filter=${$} setStatus=${b} mergeSettingsData=${F} />`;case"keychain":return s`<${W} filter=${$} />`;case"tools":return s`<${W} toolsets=${_?.toolsets} filter=${$} settingsData=${_} mergeSettingsData=${F} />`;case"addons":return s`<${W} setStatus=${b} filter=${$} />`;default:return Ei(p("settings.loading"))}},I=!h;return vi("SettingsDialogContent-render-end"),s`
        <div class="settings-dialog-backdrop" onClick=${(W)=>{if(W.target===W.currentTarget)n()}}>
            <div ref=${y} data-testid="settings-dialog" class=${`settings-dialog${B.compact?" settings-dialog-compact":""}${B.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">${p("settings.title")}</span>
                    ${h?.searchable&&s`
                        <input ref=${H} type="text" class="settings-header-filter"
                            placeholder=${T(h)}
                            value=${$} onInput=${(W)=>l(W.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title=${p("settings.close")}>✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${R.map((W,A)=>{let Y=A>0&&!R[A-1].isExtension,d=W.isExtension&&Y;return s`
                                ${d&&s`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${W.id===i?"active":""}`} onClick=${()=>q(W.id)}>
                                    <span class="settings-nav-icon">${W.icon}</span>
                                    <span class="settings-nav-label">${V(W)}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${I?Ei(p("settings.loading")):N()}
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
    `}function x$(){let[n,i]=w(!1);if(t(()=>{let r=(c)=>{let u=Vi(c?.detail?.section);if(u)try{window.__piclawSettingsRequestedSection=u}catch(f){}i(!0)};window.addEventListener("piclaw:open-settings",r);let _=O_();if(_.open){if(_.section)try{window.__piclawSettingsRequestedSection=_.section}catch(c){}i(!0)}return()=>window.removeEventListener("piclaw:open-settings",r)},[]),!n)return null;return s`<${Y_} className="settings-portal"><${Si} onClose=${()=>i(!1)} /><//>`}function b$(n={}){J_(n)}var bi,Hu=null,di,Oi,Ss,es,Fu,as,n$,i$,r$,_$,c$,u$,f$,s$,$$,g$,o$,l$,w$,y$,Wu;var ju=O(()=>{m();fn();L_();fi();xc();bi=[];vi("module-eval-start");vi("imports-done");di=new Map,Oi=new Map;di.set("general",tr);Ss={general:()=>Promise.resolve(tr),sessions:()=>Promise.resolve().then(() => (kc(),vc)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => (Kc(),pc)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (Bc(),hc)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (Tc(),Gc)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (qc(),tc)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (Zc(),Ac)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (Ic(),Dc)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Lc(),Yc)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (_u(),ru)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (fu(),uu)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (xu(),yu)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (vu(),bu)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (pu(),ku)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (hu(),Ku)).then((n)=>n.AddonsSection)},es={"editor-settings":()=>Promise.resolve().then(() => (Bu(),Cs)).then(()=>{}),developer:()=>Promise.resolve().then(() => (zu(),Es)).then(()=>{})},Fu=new Set;as=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,n$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,i$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,r$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,_$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,c$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,u$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,f$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,s$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,$$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,g$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,o$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,l$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,w$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,y$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,Wu=[{id:"general",label:"General",icon:as,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:n$,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:i$,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:r$,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:u$,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:_$,searchable:!1,order:15},{id:"environment",label:"Environment",icon:c$,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:f$,searchable:!1,order:20},{id:"models",label:"Models",icon:s$,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:$$,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:g$,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:l$,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:w$,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:o$,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:y$,searchable:!0,placeholder:"Filter add-ons…",order:90}]});m();ju();fi();var k$=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function p$({label:n,body:i,filter:r=""}){return s`
    <div class="settings-section">
      <h3>${n}</h3>
      <p class="settings-hint">Mock add-on pane rendered by the settings widget fixture.</p>
      <div class="settings-addon-grid">
        ${["Credentials","Routes","Runtime options"].filter((_)=>!r||_.toLowerCase().includes(String(r).toLowerCase())).map((_)=>s`
          <div class="settings-addon-card">
            <div class="settings-addon-card-header">
              <div>
                <div class="settings-addon-name">${_}</div>
                <div class="settings-addon-subtitle">${i}</div>
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
  `}function K$(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let i of n)Cn({id:i.id,label:i.label,icon:k$,searchable:!0,searchPlaceholder:`Filter ${i.label} settings…`,order:i.id==="fixture-z-observability"?1:999,component:(r)=>s`<${p$} label=${i.label} body=${i.body} filter=${r?.filter||""} />`})}var vn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},h$={current:vn.current,models:vn.models,model_options:vn.model_options,thinking_level:vn.thinking_level,supports_thinking:vn.supports_thinking,available_thinking_levels:vn.available_thinking_levels},Uu={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},Gu={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},ii=new URLSearchParams(window.location.search).get("real")!=="1",Tu=window.fetch.bind(window);function bn(n,i=200){return new Response(JSON.stringify(n),{status:i,headers:{"Content-Type":"application/json"}})}function B$(){window.fetch=async(n,i)=>{let r=new URL(typeof n==="string"?n:n.url,window.location.href),_=String(i?.method||"GET").toUpperCase();if(!ii)return Tu(n,i);if(r.pathname==="/agent/settings-data")return bn(vn);if(r.pathname==="/agent/models")return bn(h$);if(r.pathname==="/agent/addons")return bn(Uu);if(r.pathname.startsWith("/agent/addons/"))return bn({ok:!0,message:"Fixture add-on action accepted.",...Uu});if(r.pathname==="/agent/keychain"){if(_==="GET")return bn(Gu);if(_==="POST")return bn({ok:!0,...Gu})}if(r.pathname==="/agent/settings/general")return bn({ok:!0,settings:vn});if(r.pathname==="/agent/settings/widget-token/regenerate")return bn({ok:!0,settings:{...vn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(r.pathname.startsWith("/agent/default/message"))return bn({command:{status:"success",message:"Fixture command accepted."}});if(r.pathname.startsWith("/agent/settings/"))return bn({ok:!0,settings:vn,items:[],entries:[]});if(r.pathname==="/agent/client-perf")return bn({ok:!0});return Tu(n,i)}}function z$(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function Pu(n){try{window.__piclawSettingsRequestedSection=n}catch(i){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function H$(){let n=new URLSearchParams(window.location.search),[i,r]=w(n.get("section")||"general"),[_,c]=w(Number(n.get("width")||900)),[u,f]=w(Number(n.get("height")||640)),[$,l]=w(ii),[g,x]=w(0),o=L(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),v=G((B)=>{r(B),Pu(B)},[]),K=G(()=>{ii=!ii,l(ii),x((B)=>B+1)},[]);return s`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${i} onChange=${(B)=>v(B.target.value)}>${o.map((B)=>s`<option value=${B}>${B}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${_} onInput=${(B)=>c(Number(B.target.value))} /> ${_}px</label>
        <label>Height <input type="range" min="420" max="900" value=${u} onInput=${(B)=>f(Number(B.target.value))} /> ${u}px</label>
        <button type="button" onClick=${K}>${$?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>x((B)=>B+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${_}px;--fixture-height:${u}px;`}>
        <${Si} key=${g} onClose=${()=>{}} />
      </div>
    </div>
  `}function F$(){K$(),B$(),z$();let n=new URLSearchParams(window.location.search);Pu(n.get("section")||"general");let i=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));i.id="settings-widget-fixture-root",In(s`<${H$} />`,i),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:ii})}F$();

//# debugId=A06F1BA4AF3C88C664756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
