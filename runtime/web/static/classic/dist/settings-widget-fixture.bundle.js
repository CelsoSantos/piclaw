var Gu=Object.defineProperty;var Pu=(n)=>n;function Vu(n,r){this[n]=Pu.bind(null,r)}var fn=(n,r)=>{for(var i in r)Gu(n,i,{get:r[i],enumerable:!0,configurable:!0,set:Vu.bind(r,i)})};var O=(n,r)=>()=>(n&&(r=n(n=0)),r);var Su={};fn(Su,{useState:()=>w,useRef:()=>C,useReducer:()=>V_,useMemo:()=>L,useLayoutEffect:()=>Rr,useImperativeHandle:()=>Iu,useErrorBoundary:()=>Cu,useEffect:()=>Q,useDebugValue:()=>Yu,useContext:()=>Lu,useCallback:()=>U,render:()=>In,html:()=>s,h:()=>fi,createContext:()=>Zu,Component:()=>cr});function vn(n,r){for(var i in r)n[i]=r[i];return n}function ui(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function fi(n,r,i){var _,c,u,f={};for(u in r)u=="key"?_=r[u]:u=="ref"?c=r[u]:f[u]=r[u];if(arguments.length>2&&(f.children=arguments.length>3?Hr.call(arguments,2):i),typeof n=="function"&&n.defaultProps!=null)for(u in n.defaultProps)f[u]===void 0&&(f[u]=n.defaultProps[u]);return kr(n,f,_,c,null)}function kr(n,r,i,_,c){var u={type:n,props:r,key:i,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c==null?++K_:c,__i:-1,__u:0};return c==null&&d.vnode!=null&&d.vnode(u),u}function jr(n){return n.children}function cr(n,r){this.props=n,this.context=r}function Dn(n,r){if(r==null)return n.__?Dn(n.__,n.__i+1):null;for(var i;r<n.__k.length;r++)if((i=n.__k[r])!=null&&i.__e!=null)return i.__e;return typeof n.type=="function"?Dn(n):null}function Qu(n){if(n.__P&&n.__d){var r=n.__v,i=r.__e,_=[],c=[],u=vn({},r);u.__v=r.__v+1,d.vnode&&d.vnode(u),si(n.__P,u,r,n.__n,n.__P.namespaceURI,32&r.__u?[i]:null,_,i==null?Dn(r):i,!!(32&r.__u),c),u.__v=r.__v,u.__.__k[u.__i]=u,U_(_,u,c),r.__e=r.__=null,u.__e!=i&&W_(u)}}function W_(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(r){if(r!=null&&r.__e!=null)return n.__e=n.__c.base=r.__e}),W_(n)}function ri(n){(!n.__d&&(n.__d=!0)&&Wn.push(n)&&!Fr.__r++||o_!=d.debounceRendering)&&((o_=d.debounceRendering)||B_)(Fr)}function Fr(){try{for(var n,r=1;Wn.length;)Wn.length>r&&Wn.sort(z_),n=Wn.shift(),r=Wn.length,Qu(n)}finally{Wn.length=Fr.__r=0}}function j_(n,r,i,_,c,u,f,l,g,o,x){var $,p,b,v,k,t,h,F=_&&_.__k||zr,N=r.length;for(g=Mu(i,r,F,g,N),$=0;$<N;$++)(b=i.__k[$])!=null&&(p=b.__i!=-1&&F[b.__i]||Br,b.__i=$,t=si(n,b,p,c,u,f,l,g,o,x),v=b.__e,b.ref&&p.ref!=b.ref&&(p.ref&&li(p.ref,null,b),x.push(b.ref,b.__c||v,b)),k==null&&v!=null&&(k=v),(h=!!(4&b.__u))||p.__k===b.__k?(g=R_(b,g,n,h),h&&p.__e&&(p.__e=null)):typeof b.type=="function"&&t!==void 0?g=t:v&&(g=v.nextSibling),b.__u&=-7);return i.__e=k,g}function Mu(n,r,i,_,c){var u,f,l,g,o,x=i.length,$=x,p=0;for(n.__k=Array(c),u=0;u<c;u++)(f=r[u])!=null&&typeof f!="boolean"&&typeof f!="function"?(typeof f=="string"||typeof f=="number"||typeof f=="bigint"||f.constructor==String?f=n.__k[u]=kr(null,f,null,null,null):Wr(f)?f=n.__k[u]=kr(jr,{children:f},null,null,null):f.constructor===void 0&&f.__b>0?f=n.__k[u]=kr(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):n.__k[u]=f,g=u+p,f.__=n,f.__b=n.__b+1,l=null,(o=f.__i=qu(f,i,g,$))!=-1&&($--,(l=i[o])&&(l.__u|=2)),l==null||l.__v==null?(o==-1&&(c>x?p--:c<x&&p++),typeof f.type!="function"&&(f.__u|=4)):o!=g&&(o==g-1?p--:o==g+1?p++:(o>g?p--:p++,f.__u|=4))):n.__k[u]=null;if($)for(u=0;u<x;u++)(l=i[u])!=null&&(2&l.__u)==0&&(l.__e==_&&(_=Dn(l)),G_(l,l));return _}function R_(n,r,i,_){var c,u;if(typeof n.type=="function"){for(c=n.__k,u=0;c&&u<c.length;u++)c[u]&&(c[u].__=n,r=R_(c[u],r,i,_));return r}n.__e!=r&&(_&&(r&&n.type&&!r.parentNode&&(r=Dn(n)),i.insertBefore(n.__e,r||null)),r=n.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function qu(n,r,i,_){var c,u,f,l=n.key,g=n.type,o=r[i],x=o!=null&&(2&o.__u)==0;if(o===null&&l==null||x&&l==o.key&&g==o.type)return i;if(_>(x?1:0)){for(c=i-1,u=i+1;c>=0||u<r.length;)if((o=r[f=c>=0?c--:u++])!=null&&(2&o.__u)==0&&l==o.key&&g==o.type)return f}return-1}function $_(n,r,i){r[0]=="-"?n.setProperty(r,i==null?"":i):n[r]=i==null?"":typeof i!="number"||Xu.test(r)?i:i+"px"}function pr(n,r,i,_,c){var u,f;n:if(r=="style")if(typeof i=="string")n.style.cssText=i;else{if(typeof _=="string"&&(n.style.cssText=_=""),_)for(r in _)i&&r in i||$_(n.style,r,"");if(i)for(r in i)_&&i[r]==_[r]||$_(n.style,r,i[r])}else if(r[0]=="o"&&r[1]=="n")u=r!=(r=r.replace(F_,"$1")),f=r.toLowerCase(),r=f in n||r=="onFocusOut"||r=="onFocusIn"?f.slice(2):r.slice(2),n.l||(n.l={}),n.l[r+u]=i,i?_?i[_r]=_[_r]:(i[_r]=ci,n.addEventListener(r,u?ni:ar,u)):n.removeEventListener(r,u?ni:ar,u);else{if(c=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in n)try{n[r]=i==null?"":i;break n}catch(l){}typeof i=="function"||(i==null||i===!1&&r[4]!="-"?n.removeAttribute(r):n.setAttribute(r,r=="popover"&&i==1?"":i))}}function g_(n){return function(r){if(this.l){var i=this.l[r.type+n];if(r[vr]==null)r[vr]=ci++;else if(r[vr]<i[_r])return;return i(d.event?d.event(r):r)}}}function si(n,r,i,_,c,u,f,l,g,o){var x,$,p,b,v,k,t,h,F,N,K,j,B,T,P,y=r.type;if(r.constructor!==void 0)return null;128&i.__u&&(g=!!(32&i.__u),u=[l=r.__e=i.__e]),(x=d.__b)&&x(r);n:if(typeof y=="function")try{if(h=r.props,F=y.prototype&&y.prototype.render,N=(x=y.contextType)&&_[x.__c],K=x?N?N.props.value:x.__:_,i.__c?t=($=r.__c=i.__c).__=$.__E:(F?r.__c=$=new y(h,K):(r.__c=$=new cr(h,K),$.constructor=y,$.render=Du),N&&N.sub($),$.state||($.state={}),$.__n=_,p=$.__d=!0,$.__h=[],$._sb=[]),F&&$.__s==null&&($.__s=$.state),F&&y.getDerivedStateFromProps!=null&&($.__s==$.state&&($.__s=vn({},$.__s)),vn($.__s,y.getDerivedStateFromProps(h,$.__s))),b=$.props,v=$.state,$.__v=r,p)F&&y.getDerivedStateFromProps==null&&$.componentWillMount!=null&&$.componentWillMount(),F&&$.componentDidMount!=null&&$.__h.push($.componentDidMount);else{if(F&&y.getDerivedStateFromProps==null&&h!==b&&$.componentWillReceiveProps!=null&&$.componentWillReceiveProps(h,K),r.__v==i.__v||!$.__e&&$.shouldComponentUpdate!=null&&$.shouldComponentUpdate(h,$.__s,K)===!1){r.__v!=i.__v&&($.props=h,$.state=$.__s,$.__d=!1),r.__e=i.__e,r.__k=i.__k,r.__k.some(function(H){H&&(H.__=r)}),zr.push.apply($.__h,$._sb),$._sb=[],$.__h.length&&f.push($);break n}$.componentWillUpdate!=null&&$.componentWillUpdate(h,$.__s,K),F&&$.componentDidUpdate!=null&&$.__h.push(function(){$.componentDidUpdate(b,v,k)})}if($.context=K,$.props=h,$.__P=n,$.__e=!1,j=d.__r,B=0,F)$.state=$.__s,$.__d=!1,j&&j(r),x=$.render($.props,$.state,$.context),zr.push.apply($.__h,$._sb),$._sb=[];else do $.__d=!1,j&&j(r),x=$.render($.props,$.state,$.context),$.state=$.__s;while($.__d&&++B<25);$.state=$.__s,$.getChildContext!=null&&(_=vn(vn({},_),$.getChildContext())),F&&!p&&$.getSnapshotBeforeUpdate!=null&&(k=$.getSnapshotBeforeUpdate(b,v)),T=x!=null&&x.type===jr&&x.key==null?T_(x.props.children):x,l=j_(n,Wr(T)?T:[T],r,i,_,c,u,f,l,g,o),$.base=r.__e,r.__u&=-161,$.__h.length&&f.push($),t&&($.__E=$.__=null)}catch(H){if(r.__v=null,g||u!=null)if(H.then){for(r.__u|=g?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;u[u.indexOf(l)]=null,r.__e=l}else{for(P=u.length;P--;)ui(u[P]);ii(r)}else r.__e=i.__e,r.__k=i.__k,H.then||ii(r);d.__e(H,r,i)}else u==null&&r.__v==i.__v?(r.__k=i.__k,r.__e=i.__e):l=r.__e=Au(i.__e,r,i,_,c,u,f,g,o);return(x=d.diffed)&&x(r),128&r.__u?void 0:l}function ii(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(ii))}function U_(n,r,i){for(var _=0;_<i.length;_++)li(i[_],i[++_],i[++_]);d.__c&&d.__c(r,n),n.some(function(c){try{n=c.__h,c.__h=[],n.some(function(u){u.call(c)})}catch(u){d.__e(u,c.__v)}})}function T_(n){return typeof n!="object"||n==null||n.__b>0?n:Wr(n)?n.map(T_):n.constructor!==void 0?null:vn({},n)}function Au(n,r,i,_,c,u,f,l,g){var o,x,$,p,b,v,k,t=i.props||Br,h=r.props,F=r.type;if(F=="svg"?c="http://www.w3.org/2000/svg":F=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),u!=null){for(o=0;o<u.length;o++)if((b=u[o])&&"setAttribute"in b==!!F&&(F?b.localName==F:b.nodeType==3)){n=b,u[o]=null;break}}if(n==null){if(F==null)return document.createTextNode(h);n=document.createElementNS(c,F,h.is&&h),l&&(d.__m&&d.__m(r,u),l=!1),u=null}if(F==null)t===h||l&&n.data==h||(n.data=h);else{if(u=F=="textarea"&&h.defaultValue!=null?null:u&&Hr.call(n.childNodes),!l&&u!=null)for(t={},o=0;o<n.attributes.length;o++)t[(b=n.attributes[o]).name]=b.value;for(o in t)b=t[o],o=="dangerouslySetInnerHTML"?$=b:o=="children"||(o in h)||o=="value"&&("defaultValue"in h)||o=="checked"&&("defaultChecked"in h)||pr(n,o,null,b,c);for(o in h)b=h[o],o=="children"?p=b:o=="dangerouslySetInnerHTML"?x=b:o=="value"?v=b:o=="checked"?k=b:l&&typeof b!="function"||t[o]===b||pr(n,o,b,t[o],c);if(x)l||$&&(x.__html==$.__html||x.__html==n.innerHTML)||(n.innerHTML=x.__html),r.__k=[];else if($&&(n.innerHTML=""),j_(r.type=="template"?n.content:n,Wr(p)?p:[p],r,i,_,F=="foreignObject"?"http://www.w3.org/1999/xhtml":c,u,f,u?u[0]:i.__k&&Dn(i,0),l,g),u!=null)for(o=u.length;o--;)ui(u[o]);l&&F!="textarea"||(o="value",F=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[o]||F=="progress"&&!v||F=="option"&&v!=t[o])&&pr(n,o,v,t[o],c),o="checked",k!=null&&k!=n[o]&&pr(n,o,k,t[o],c))}return n}function li(n,r,i){try{if(typeof n=="function"){var _=typeof n.__u=="function";_&&n.__u(),_&&r==null||(n.__u=n(r))}else n.current=r}catch(c){d.__e(c,i)}}function G_(n,r,i){var _,c;if(d.unmount&&d.unmount(n),(_=n.ref)&&(_.current&&_.current!=n.__e||li(_,null,r)),(_=n.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(u){d.__e(u,r)}_.base=_.__P=null}if(_=n.__k)for(c=0;c<_.length;c++)_[c]&&G_(_[c],r,i||typeof n.type!="function");i||ui(n.__e),n.__c=n.__=n.__e=void 0}function Du(n,r,i){return this.constructor(n,i)}function In(n,r,i){var _,c,u,f;r==document&&(r=document.documentElement),d.__&&d.__(n,r),c=(_=typeof i=="function")?null:i&&i.__k||r.__k,u=[],f=[],si(r,n=(!_&&i||r).__k=fi(jr,null,[n]),c||Br,Br,r.namespaceURI,!_&&i?[i]:c?null:r.firstChild?Hr.call(r.childNodes):null,u,!_&&i?i:c?c.__e:r.firstChild,_,f),U_(u,n,f)}function Zu(n){function r(i){var _,c;return this.getChildContext||(_=new Set,(c={})[r.__c]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){_=null},this.shouldComponentUpdate=function(u){this.props.value!=u.value&&_.forEach(function(f){f.__e=!0,ri(f)})},this.sub=function(u){_.add(u);var f=u.componentWillUnmount;u.componentWillUnmount=function(){_&&_.delete(u),f&&f.call(u)}}),i.children}return r.__c="__cC"+H_++,r.__=n,r.Provider=r.__l=(r.Consumer=function(i,_){return i.children(_)}).contextType=r,r}function Ln(n,r){a.__h&&a.__h(S,n,Zn||r),Zn=0;var i=S.__H||(S.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function w(n){return Zn=1,V_(N_,n)}function V_(n,r,i){var _=Ln(jn++,2);if(_.t=n,!_.__c&&(_.__=[i?i(r):N_(void 0,r),function(l){var g=_.__N?_.__N[0]:_.__[0],o=_.t(g,l);g!==o&&(_.__N=[o,_.__[1]],_.__c.setState({}))}],_.__c=S,!S.__f)){var c=function(l,g,o){if(!_.__c.__H)return!0;var x=_.__c.__H.__.filter(function(p){return p.__c});if(x.every(function(p){return!p.__N}))return!u||u.call(this,l,g,o);var $=_.__c.props!==l;return x.some(function(p){if(p.__N){var b=p.__[0];p.__=p.__N,p.__N=void 0,b!==p.__[0]&&($=!0)}}),u&&u.call(this,l,g,o)||$};S.__f=!0;var{shouldComponentUpdate:u,componentWillUpdate:f}=S;S.componentWillUpdate=function(l,g,o){if(this.__e){var x=u;u=void 0,c(l,g,o),u=x}f&&f.call(this,l,g,o)},S.shouldComponentUpdate=c}return _.__N||_.__}function Q(n,r){var i=Ln(jn++,3);!a.__s&&oi(i.__H,r)&&(i.__=n,i.u=r,S.__H.__h.push(i))}function Rr(n,r){var i=Ln(jn++,4);!a.__s&&oi(i.__H,r)&&(i.__=n,i.u=r,S.__h.push(i))}function C(n){return Zn=5,L(function(){return{current:n}},[])}function Iu(n,r,i){Zn=6,Rr(function(){if(typeof n=="function"){var _=n(r());return function(){n(null),_&&typeof _=="function"&&_()}}if(n)return n.current=r(),function(){return n.current=null}},i==null?i:i.concat(n))}function L(n,r){var i=Ln(jn++,7);return oi(i.__H,r)&&(i.__=n(),i.__H=r,i.__h=n),i.__}function U(n,r){return Zn=8,L(function(){return n},r)}function Lu(n){var r=S.context[n.__c],i=Ln(jn++,9);return i.c=n,r?(i.__==null&&(i.__=!0,r.sub(S)),r.props.value):n.__}function Yu(n,r){a.useDebugValue&&a.useDebugValue(r?r(n):n)}function Cu(n){var r=Ln(jn++,10),i=w();return r.__=n,S.componentDidCatch||(S.componentDidCatch=function(_,c){r.__&&r.__(_,c),i[1](_)}),[i[0],function(){i[1](void 0)}]}function Ou(){for(var n;n=P_.shift();){var r=n.__H;if(n.__P&&r)try{r.__h.some(Kr),r.__h.some(_i),r.__h=[]}catch(i){r.__h=[],a.__e(i,n.__v)}}}function Ju(n){var r,i=function(){clearTimeout(_),v_&&cancelAnimationFrame(r),setTimeout(n)},_=setTimeout(i,35);v_&&(r=requestAnimationFrame(i))}function Kr(n){var r=S,i=n.__c;typeof i=="function"&&(n.__c=void 0,i()),S=r}function _i(n){var r=S;n.__c=n.__(),S=r}function oi(n,r){return!n||n.length!==r.length||r.some(function(i,_){return i!==n[_]})}function N_(n,r){return typeof r=="function"?r(n):r}function Eu(n){var r=k_.get(this);return r||(r=new Map,k_.set(this,r)),(r=X_(this,r.get(n)||(r.set(n,r=function(i){for(var _,c,u=1,f="",l="",g=[0],o=function(p){u===1&&(p||(f=f.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?g.push(0,p,f):u===3&&(p||f)?(g.push(3,p,f),u=2):u===2&&f==="..."&&p?g.push(4,p,0):u===2&&f&&!p?g.push(5,0,!0,f):u>=5&&((f||!p&&u===5)&&(g.push(u,0,f,c),u=6),p&&(g.push(u,p,0,c),u=6)),f=""},x=0;x<i.length;x++){x&&(u===1&&o(),o(x));for(var $=0;$<i[x].length;$++)_=i[x][$],u===1?_==="<"?(o(),g=[g],u=3):f+=_:u===4?f==="--"&&_===">"?(u=1,f=""):f=_+f[0]:l?_===l?l="":f+=_:_==='"'||_==="'"?l=_:_===">"?(o(),u=1):u&&(_==="="?(u=5,c=f,f=""):_==="/"&&(u<5||i[x][$+1]===">")?(o(),u===3&&(g=g[0]),u=g,(g=g[0]).push(2,0,u),u=0):_===" "||_==="\t"||_===`
`||_==="\r"?(o(),u=2):f+=_),u===3&&f==="!--"&&(u=4,g=g[0])}return o(),g}(n)),r),arguments,[])).length>1?r:r[0]}var Hr,d,K_,Nu,Wn,o_,B_,z_,er,vr,_r,F_,ci,ar,ni,H_,Br,zr,Xu,Wr,jn,S,mr,w_,Zn=0,P_,a,y_,t_,x_,b_,h_,p_,v_,X_=function(n,r,i,_){var c;r[0]=0;for(var u=1;u<r.length;u++){var f=r[u++],l=r[u]?(r[0]|=f?1:2,i[r[u++]]):r[++u];f===3?_[0]=l:f===4?_[1]=Object.assign(_[1]||{},l):f===5?(_[1]=_[1]||{})[r[++u]]=l:f===6?_[1][r[++u]]+=l+"":f?(c=n.apply(l,X_(n,l,i,["",null])),_.push(c),l[0]?r[0]|=2:(r[u-2]=0,r[u]=c)):_.push(l)}return _},k_,s;var e=O(()=>{Br={},zr=[],Xu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Wr=Array.isArray;Hr=zr.slice,d={__e:function(n,r,i,_){for(var c,u,f;r=r.__;)if((c=r.__c)&&!c.__)try{if((u=c.constructor)&&u.getDerivedStateFromError!=null&&(c.setState(u.getDerivedStateFromError(n)),f=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(n,_||{}),f=c.__d),f)return c.__E=c}catch(l){n=l}throw n}},K_=0,Nu=function(n){return n!=null&&n.constructor===void 0},cr.prototype.setState=function(n,r){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=vn({},this.state),typeof n=="function"&&(n=n(vn({},i),this.props)),n&&vn(i,n),n!=null&&this.__v&&(r&&this._sb.push(r),ri(this))},cr.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ri(this))},cr.prototype.render=jr,Wn=[],B_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z_=function(n,r){return n.__v.__b-r.__v.__b},Fr.__r=0,er=Math.random().toString(8),vr="__d"+er,_r="__a"+er,F_=/(PointerCapture)$|Capture$/i,ci=0,ar=g_(!1),ni=g_(!0),H_=0;P_=[],a=d,y_=a.__b,t_=a.__r,x_=a.diffed,b_=a.__c,h_=a.unmount,p_=a.__;a.__b=function(n){S=null,y_&&y_(n)},a.__=function(n,r){n&&r.__k&&r.__k.__m&&(n.__m=r.__k.__m),p_&&p_(n,r)},a.__r=function(n){t_&&t_(n),jn=0;var r=(S=n.__c).__H;r&&(mr===S?(r.__h=[],S.__h=[],r.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(r.__h.some(Kr),r.__h.some(_i),r.__h=[],jn=0)),mr=S},a.diffed=function(n){x_&&x_(n);var r=n.__c;r&&r.__H&&(r.__H.__h.length&&(P_.push(r)!==1&&w_===a.requestAnimationFrame||((w_=a.requestAnimationFrame)||Ju)(Ou)),r.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),mr=S=null},a.__c=function(n,r){r.some(function(i){try{i.__h.some(Kr),i.__h=i.__h.filter(function(_){return!_.__||_i(_)})}catch(_){r.some(function(c){c.__h&&(c.__h=[])}),r=[],a.__e(_,i.__v)}}),b_&&b_(n,r)},a.unmount=function(n){h_&&h_(n);var r,i=n.__c;i&&i.__H&&(i.__H.__.some(function(_){try{Kr(_)}catch(c){r=c}}),i.__H=void 0,r&&a.__e(r,i.__v))};v_=typeof requestAnimationFrame=="function";k_=new Map;s=Eu.bind(fi)});function Rn(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function ln(n,r){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,r)}catch{return}}function $i(n,r=!1){let i=Rn(n);if(i===null)return r;return i==="true"}function gi(n,r=null){let i=Rn(n);if(i===null)return r;let _=parseInt(i,10);return Number.isFinite(_)?_:r}function Q_(n){let r=Rn(n);if(!r)return null;try{return JSON.parse(r)}catch{return null}}function Tr(n){let r=String(n??"").trim().toLowerCase().replace(/_/g,"-");if(!r)return Yn;if(r==="zh-cn"||r==="zh"||r==="zh-hans"||r.startsWith("zh-hans"))return"zh-CN";if(r==="ja"||r.startsWith("ja-"))return"ja";if(r==="en"||r.startsWith("en-"))return"en";return Yn}function au(){if(typeof navigator>"u")return Yn;let n=[...Array.isArray(navigator.languages)?navigator.languages:[],navigator.language].filter((r)=>typeof r==="string"&&r.length>0);for(let r of n){let i=Tr(r);if(i!==Yn)return i}return Yn}function nf(){let n=Rn(A_);if(n)return Tr(n);return au()}function rf(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(wi,{detail:{locale:n}}))}function Ur(){if(!yi)_f();return Gn}function _f(){return Gn=nf(),yi=!0,Gn}function cf(n,r={}){let i=Tr(n);if(yi=!0,i===Gn&&r.persist===!1)return Gn;if(Gn=i,r.persist!==!1)ln(A_,i);return rf(i),Gn}function uf(n,r){if(!r)return n;return n.replace(/\{(\w+)\}/g,(i,_)=>{let c=r[_];return c===void 0||c===null?i:String(c)})}function Z_(n,r,i=Ur()){let c=mu[i]?.[n]??D_[n]??n;return uf(c,r)}function Rl(n,r){return Z_(n,r)}function ff(){let[n,r]=w(Ur());return Q(()=>{if(typeof window>"u"||typeof window.addEventListener!=="function")return;let i=(_)=>{let c=_.detail,u=Tr(c?.locale??Ur());r(u)};return window.addEventListener(wi,i),r(Ur()),()=>window.removeEventListener(wi,i)},[]),[n,(i)=>cf(i)]}function _n(){let[n,r]=ff();return{locale:n,setLocale:r,t:(i,_)=>Z_(i,_,n)}}var Yn="en",M_,q_,A_="piclaw_locale",wi="piclaw-locale-change",D_,du,eu,mu,Gn,yi=!1;var bn=O(()=>{e();M_=["en","zh-CN","ja"],q_={en:"English","zh-CN":"简体中文",ja:"日本語"},D_={"compose.placeholder":"Message (Enter to send, Shift+Enter for newline)...","compose.send":"Send","compose.stop":"Stop","compose.searchPlaceholder":"Search (Enter to run)...","compose.clearAll":"Clear all","compose.clearAllTitle":"Clear all attachments and references","compose.scope":"Scope","compose.searchScope":"Search scope","compose.scopeCurrent":"Current","compose.scopeBranchFamily":"Branch family","compose.scopeAll":"All chats","compose.filterImages":"Images","compose.filterAttachments":"Attachments","compose.search":"Search","compose.closeSearch":"Close search","compose.shareLocation":"Share location","compose.attachFile":"Attach file","compose.queueControls":"Queued follow-up controls","compose.moveUp":"Move up","compose.moveUpQueue":"Move up in queue","compose.moveDown":"Move down","compose.moveDownQueue":"Move down in queue","compose.editInCompose":"Edit in compose","compose.returnToEditor":"Return queued message to editor","compose.injectSteer":"Inject queued follow-up as steer","compose.steer":"Steer","compose.cancelQueued":"Cancel queued message","compose.resizeInput":"Resize message input","compose.resizeInputHint":"Drag to resize message input","compose.modelPicker":"Model picker","compose.sessionsAndAgents":"Sessions and agents","compose.openModelPicker":"Open model picker","compose.newBranchTitle":"Create a new branch from this chat","compose.newRootTitle":"Create a clean root session such as web:ops","compose.renameSessionTitle":"Rename the current session","compose.pruneSessionTitle":"Delete (prune) current agent/session branch","compose.filterImagesTitle":"Only show messages with images","compose.filterAttachmentsTitle":"Only show messages with attachments","compose.selectModel":"Select model","compose.loadingModels":"Loading models…","compose.noModels":"No models available.","compose.nextModel":"Next model","compose.manageSessions":"Manage sessions & agents","compose.noSessions":"No other sessions yet.","compose.newBranch":"New branch","compose.newRoot":"New root…","compose.mergeCurrent":"Merge current w/ parent","compose.renameCurrent":"Rename current…","compose.deleteCurrent":"Delete current…","compose.mergeInto":"Merge this branch into {target}","compose.mergeBlocked":"This branch cannot be merged while active or while it has children","workspace.title":"Workspace","workspace.newFile":"New file","workspace.refresh":"Refresh","workspace.actions":"Workspace actions","workspace.uploadFiles":"Upload files","workspace.reindexing":"Reindexing workspace…","workspace.deleteFile":"Delete file","workspace.download":"Download","workspace.uploadToFolder":"Upload files to this folder","workspace.addFolderHint":"Add folder hint to compose","workspace.downloadZip":"Download folder as zip","workspace.openInTab":"Open in tab","workspace.openInEditor":"Open in editor","workspace.renameSelected":"Rename selected","workspace.downloadSelectedFile":"Download selected file","workspace.downloadSelectedFolder":"Download selected folder (zip)","workspace.deleteSelectedFile":"Delete selected file","shell.settings":"Settings","shell.newChat":"New chat","shell.connecting":"Connecting…","shell.connected":"Connected","language.label":"Language","settings.title":"Settings","settings.close":"Close (Esc)","settings.filter":"Filter…","settings.loading":"Loading settings…","settings.section.general":"General","settings.section.sessions":"Sessions","settings.section.recordings":"Recordings","settings.section.compaction":"Compaction","settings.section.keyboard":"Keyboard","settings.section.workspace":"Workspace","settings.section.environment":"Environment","settings.section.providers":"Providers","settings.section.models":"Models","settings.section.theme":"Appearance","settings.section.scheduled-tasks":"Scheduled Tasks","settings.section.quick-actions":"Quick Actions","settings.section.keychain":"Keychain","settings.section.tools":"Tools","settings.section.addons":"Add-ons","settings.placeholder.recordings":"Filter recordings…","settings.placeholder.keyboard":"Filter shortcuts…","settings.placeholder.environment":"Filter environment…","settings.placeholder.models":"Filter models…","settings.placeholder.scheduled-tasks":"Filter scheduled tasks…","settings.placeholder.quick-actions":"Filter quick actions…","settings.placeholder.keychain":"Filter entries…","settings.placeholder.tools":"Filter tools…","settings.placeholder.addons":"Filter add-ons…","preview.close":"Close","preview.loading":"Loading preview…","preview.files":"Files","preview.folders":"Folders","preview.compressed":"Compressed","preview.uncompressed":"Uncompressed","preview.name":"Name","preview.type":"Type","preview.method":"Method","preview.size":"Size","post.deleteMessage":"Delete message","post.tooLarge":"Message too large to display.","post.previewTruncated":"Preview truncated.","post.submitted":"Submitted","post.discard":"Discard","post.save":"Save","post.cancel":"Cancel","post.addNote":"Add note","post.addNotePlaceholder":"Add a note…","tab.close":"Close","tab.closeOthers":"Close Others","tab.closeAll":"Close All","tab.reattach":"Reattach","tab.openInWindow":"Open in Window","tab.openInNewTab":"Open in New Tab","tab.pinned":"Pinned","tab.detached":"Detached","tab.openSeparateWindow":"Open in separate window","status.trackedVariables":"Tracked variables","status.attachToSession":"Attach to session","status.files":"Files","status.proposedDiff":"Proposed diff","status.copyTmux":"Copy tmux command","status.experimentDuration":"Experiment duration","status.sinceLastActivity":"Since last activity","annotator.title":"Annotate image","annotator.typeLabel":"Type label…","annotator.undo":"Undo","annotator.resetZoom":"Reset zoom","tree.filter":"Filter…","tree.sessionTree":"Session tree","btw.label":"BTW side conversation","btw.close":"Close BTW","btw.thinking":"Thinking","mdpreview.close":"Close preview","mdpreview.unavailable":"Preview unavailable","widget.close":"Close widget","oobe.gettingStarted":"Getting started","oobe.needsSetupTitle":"Instance needs setup","oobe.configuredTitle":"Instance is configured","oobe.needsSetupBody":"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.","oobe.configuredBody":"This instance looks configured. Review or update provider and model settings in Settings.","oobe.openSettings":"Open Settings","oobe.dismiss":"Dismiss","oobe.done":"Done","palette.placeholder":"Type to jump to an agent, workspace action, or slash command…","palette.hideWorkspace":"Hide workspace","palette.showWorkspace":"Show workspace","palette.hideWorkspaceDesc":"Hide the workspace sidebar.","palette.showWorkspaceDesc":"Show the workspace sidebar.","palette.exitChatOnly":"Exit chat-only mode","palette.chatOnly":"Chat-only mode","palette.exitChatOnlyDesc":"Return to the split workspace layout.","palette.chatOnlyDesc":"Switch to the chat-only layout.","palette.groupAgents":"Agents","palette.groupWorkspace":"Workspace","palette.groupSlash":"Slash commands","palette.hintMove":"Move","palette.hintSelect":"Select","palette.hintPopOut":"Pop out","palette.hintClose":"Close","settings.appliedNotice":"Settings applied. Changes take effect on the next turn.","settings.sessions.lifecycle":"Session Lifecycle","settings.sessions.autoRotate":"Auto-rotate sessions","settings.sessions.maxSize":"Max session size (MB)","settings.sessions.maxSizeAria":"max session size","settings.sessions.agentBehaviour":"Agent Behaviour","settings.sessions.toolBudget":"Tool use budget","settings.sessions.toolBudgetAria":"tool use budget","settings.sessions.toolBudgetHint":"max tool-call messages per turn","settings.sessions.isolation":"Session isolation","settings.sessions.isolationNone":"None — full cross-session visibility","settings.sessions.isolationSummary":"Summary — tools visible, no arguments","settings.sessions.isolationFull":"Full — sessions cannot see each other","settings.editor.heading":"Editor","settings.editor.vimMode":"Vim mode","settings.editor.showWhitespace":"Show whitespace","settings.editor.livePreview":"Markdown live preview","settings.editor.fontSize":"Font size (px)","settings.editor.fontSizeAria":"editor font size","settings.editor.fontFamily":"Font family","settings.editor.fontFamilyPlaceholder":"monospace (default)","settings.editor.localOnlyHint":"This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.","settings.appearance.syncing":"Syncing appearance…","settings.appearance.default":"Default","settings.appearance.autoLightDark":"auto (light/dark)","settings.appearance.tint":"Tint:","settings.appearance.clearTint":"Clear tint","settings.appearance.none":"none","settings.keyboard.heading":"Keyboard","settings.keyboard.hint1":"Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.","settings.keyboard.hint1b":"is reserved for dismiss/abort and cannot be rebound.","settings.keyboard.hint2mid":"and typing","settings.keyboard.hint2end":"outside the compose box open this pane.","settings.keyboard.resetAll":"Reset all to defaults","settings.keyboard.defaultColon":"Default:","settings.keyboard.save":"Save","settings.keyboard.defaultBtn":"Default","settings.keyboard.noMatch":"No shortcuts match this filter.","settings.keyboard.invalidShortcut":"Invalid shortcut: {token}. Escape is reserved and cannot be rebound.","settings.keyboard.saved":"Keyboard shortcuts saved.","settings.keyboard.resetOne":"Keyboard shortcut reset to default.","settings.keyboard.resetAllDone":"Keyboard shortcuts reset to defaults.","settings.workspace.serverApplied":"Workspace settings applied. Server-side limits affect new workspace requests immediately.","settings.workspace.browserApplied":"Browser workspace settings applied immediately in this tab.","settings.workspace.access":"Access","settings.workspace.enableTerminal":"Enable web terminal","settings.workspace.allowVnc":"Allow direct VNC targets","settings.workspace.accessHint":"Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.","settings.workspace.guardrails":"Server scan guardrails","settings.workspace.maxDepth":"Max tree depth","settings.workspace.maxDepthAria":"workspace tree max depth","settings.workspace.maxDepthHintPre":"caps all","settings.workspace.maxDepthHintPost":"requests","settings.workspace.maxEntries":"Max entries per scan","settings.workspace.maxEntriesAria":"workspace tree max entries","settings.workspace.maxEntriesHint":"truncate oversized tree walks earlier","settings.workspace.thisBrowser":"This browser","settings.workspace.refreshInterval":"Refresh interval (seconds)","settings.workspace.refreshIntervalAria":"workspace refresh interval","settings.workspace.folderDepth":"Folder preview scan depth","settings.workspace.folderDepthAria":"folder preview scan depth","settings.workspace.folderDepthHintPre":"set to","settings.workspace.folderDepthHintPost":"to disable folder size preview scans","settings.workspace.footerHint":"Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.","settings.models.thinkingLevel":"Thinking level","settings.models.noThinking":"Current model does not support thinking.","settings.models.thinkingLevelLabel":"Thinking level:","settings.models.loading":"Loading models…","settings.models.summary":"Model and provider names may wrap in narrow panes to avoid clipping.","settings.models.scopedOnly":"Scoped models only","settings.models.scopedCheckboxPre":"Use Pi","settings.models.scopedCheckboxPost":"for Piclaw model lists","settings.models.scopedHintPre":"Filters this picker and the","settings.models.scopedHintPost":"tool. TUI model selection remains unchanged.","settings.models.colModel":"Model","settings.models.colProvider":"Provider","settings.models.colContext":"Context","settings.models.colReasoning":"Reasoning","settings.models.noMatch":'No models match "{filter}"',"settings.tools.unavailable":"Tool data not available.","settings.tools.search":"Search","settings.tools.matchMode":"Match mode","settings.tools.orMode":"Any keyword (OR) — results match at least one search term","settings.tools.andMode":"All keywords (AND) — results must match every search term","settings.tools.colEnabled":"Enabled","settings.tools.colTool":"Tool","settings.tools.colCompact":"Compact","settings.tools.colKind":"Kind","settings.tools.colSummary":"Summary","settings.tools.colSource":"Source","settings.tools.disableCompaction":"Disable tool-result compaction for this tool","settings.tools.enableCompaction":"Enable tool-result compaction for this tool","settings.tools.noMatch":'No tools match "{filter}"',"settings.tools.footer":"Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; the “Compact” column controls tool-result compaction eligibility.","menu.title":"Menu","menu.showWorkspace":"Show workspace","menu.hideWorkspace":"Hide workspace","menu.openExplorer":"Open explorer","menu.chatOnly":"Chat-only mode","menu.exitChatOnly":"Exit chat-only mode","menu.openTerminal":"Open terminal in tab","menu.openVnc":"Open VNC in tab","menu.newFile":"New file","menu.openRecent":"Open Recent","menu.refreshTree":"Refresh tree","menu.reindex":"Reindex workspace","menu.showHidden":"Show hidden files","menu.hideHidden":"Hide hidden files","menu.scale":"Scale","menu.settings":"Settings"},du={"compose.placeholder":"输入消息（回车发送，Shift+回车换行）...","compose.send":"发送","compose.stop":"停止","compose.searchPlaceholder":"搜索（回车运行）...","compose.clearAll":"清除全部","compose.clearAllTitle":"清除所有附件和引用","compose.scope":"范围","compose.searchScope":"搜索范围","compose.scopeCurrent":"当前","compose.scopeBranchFamily":"分支系列","compose.scopeAll":"所有聊天","compose.filterImages":"图片","compose.filterAttachments":"附件","compose.search":"搜索","compose.closeSearch":"关闭搜索","compose.shareLocation":"分享位置","compose.attachFile":"附加文件","compose.queueControls":"排队后续消息控制","compose.moveUp":"上移","compose.moveUpQueue":"在队列中上移","compose.moveDown":"下移","compose.moveDownQueue":"在队列中下移","compose.editInCompose":"在输入框中编辑","compose.returnToEditor":"将排队消息返回编辑器","compose.injectSteer":"作为引导插入排队的后续消息","compose.steer":"引导","compose.cancelQueued":"取消排队消息","compose.resizeInput":"调整消息输入框大小","compose.resizeInputHint":"拖动以调整消息输入框大小","compose.modelPicker":"模型选择器","compose.sessionsAndAgents":"会话与代理","compose.openModelPicker":"打开模型选择器","compose.newBranchTitle":"从此聊天创建新分支","compose.newRootTitle":"创建一个干净的根会话，例如 web:ops","compose.renameSessionTitle":"重命名当前会话","compose.pruneSessionTitle":"删除（修剪）当前代理/会话分支","compose.filterImagesTitle":"仅显示含图片的消息","compose.filterAttachmentsTitle":"仅显示含附件的消息","compose.selectModel":"选择模型","compose.loadingModels":"正在加载模型…","compose.noModels":"没有可用的模型。","compose.nextModel":"下一个模型","compose.manageSessions":"管理会话与代理","compose.noSessions":"暂无其他会话。","compose.newBranch":"新建分支","compose.newRoot":"新建根会话…","compose.mergeCurrent":"将当前合并到父级","compose.renameCurrent":"重命名当前…","compose.deleteCurrent":"删除当前…","compose.mergeInto":"将此分支合并到 {target}","compose.mergeBlocked":"当此分支处于活动状态或有子分支时无法合并","workspace.title":"工作区","workspace.newFile":"新建文件","workspace.refresh":"刷新","workspace.actions":"工作区操作","workspace.uploadFiles":"上传文件","workspace.reindexing":"正在重建索引…","workspace.deleteFile":"删除文件","workspace.download":"下载","workspace.uploadToFolder":"上传文件到此文件夹","workspace.addFolderHint":"将文件夹提示添加到输入框","workspace.downloadZip":"将文件夹下载为 zip","workspace.openInTab":"在标签页打开","workspace.openInEditor":"在编辑器打开","workspace.renameSelected":"重命名所选","workspace.downloadSelectedFile":"下载所选文件","workspace.downloadSelectedFolder":"下载所选文件夹（zip）","workspace.deleteSelectedFile":"删除所选文件","shell.settings":"设置","shell.newChat":"新建对话","shell.connecting":"连接中…","shell.connected":"已连接","language.label":"语言","settings.title":"设置","settings.close":"关闭（Esc）","settings.filter":"筛选…","settings.loading":"加载设置中…","settings.section.general":"常规","settings.section.sessions":"会话","settings.section.recordings":"录制","settings.section.compaction":"压缩","settings.section.keyboard":"键盘","settings.section.workspace":"工作区","settings.section.environment":"环境","settings.section.providers":"提供商","settings.section.models":"模型","settings.section.theme":"外观","settings.section.scheduled-tasks":"计划任务","settings.section.quick-actions":"快捷操作","settings.section.keychain":"密钥串","settings.section.tools":"工具","settings.section.addons":"插件","settings.placeholder.recordings":"筛选录制…","settings.placeholder.keyboard":"筛选快捷键…","settings.placeholder.environment":"筛选环境…","settings.placeholder.models":"筛选模型…","settings.placeholder.scheduled-tasks":"筛选计划任务…","settings.placeholder.quick-actions":"筛选快捷操作…","settings.placeholder.keychain":"筛选条目…","settings.placeholder.tools":"筛选工具…","settings.placeholder.addons":"筛选插件…","preview.close":"关闭","preview.loading":"正在加载预览…","preview.files":"文件","preview.folders":"文件夹","preview.compressed":"压缩后","preview.uncompressed":"未压缩","preview.name":"名称","preview.type":"类型","preview.method":"方法","preview.size":"大小","post.deleteMessage":"删除消息","post.tooLarge":"消息过大，无法显示。","post.previewTruncated":"预览已截断。","post.submitted":"已提交","post.discard":"丢弃","post.save":"保存","post.cancel":"取消","post.addNote":"添加备注","post.addNotePlaceholder":"添加备注…","tab.close":"关闭","tab.closeOthers":"关闭其他","tab.closeAll":"全部关闭","tab.reattach":"重新附加","tab.openInWindow":"在窗口中打开","tab.openInNewTab":"在新标签页打开","tab.pinned":"已固定","tab.detached":"已分离","tab.openSeparateWindow":"在独立窗口中打开","status.trackedVariables":"跟踪的变量","status.attachToSession":"附加到会话","status.files":"文件","status.proposedDiff":"建议的差异","status.copyTmux":"复制 tmux 命令","status.experimentDuration":"实验时长","status.sinceLastActivity":"自上次活动以来","annotator.title":"标注图片","annotator.typeLabel":"输入标签…","annotator.undo":"撤销","annotator.resetZoom":"重置缩放","tree.filter":"筛选…","tree.sessionTree":"会话树","btw.label":"BTW 附加对话","btw.close":"关闭 BTW","btw.thinking":"思考中","mdpreview.close":"关闭预览","mdpreview.unavailable":"预览不可用","widget.close":"关闭小部件","oobe.gettingStarted":"入门指南","oobe.needsSetupTitle":"实例需要设置","oobe.configuredTitle":"实例已配置","oobe.needsSetupBody":"此实例尚未配置。请打开“设置”并设置 AI 提供商/模型以开始发送请求。","oobe.configuredBody":"此实例看起来已配置。请在“设置”中查看或更新提供商和模型设置。","oobe.openSettings":"打开设置","oobe.dismiss":"忽略","oobe.done":"完成","palette.placeholder":"输入以跳转到代理、工作区操作或斜杠命令…","palette.hideWorkspace":"隐藏工作区","palette.showWorkspace":"显示工作区","palette.hideWorkspaceDesc":"隐藏工作区侧边栏。","palette.showWorkspaceDesc":"显示工作区侧边栏。","palette.exitChatOnly":"退出仅聊天模式","palette.chatOnly":"仅聊天模式","palette.exitChatOnlyDesc":"返回分屏工作区布局。","palette.chatOnlyDesc":"切换到仅聊天布局。","palette.groupAgents":"代理","palette.groupWorkspace":"工作区","palette.groupSlash":"斜杠命令","palette.hintMove":"移动","palette.hintSelect":"选择","palette.hintPopOut":"弹出","palette.hintClose":"关闭","settings.appliedNotice":"设置已应用。更改将在下一回合生效。","settings.sessions.lifecycle":"会话生命周期","settings.sessions.autoRotate":"自动轮换会话","settings.sessions.maxSize":"最大会话大小（MB）","settings.sessions.maxSizeAria":"最大会话大小","settings.sessions.agentBehaviour":"代理行为","settings.sessions.toolBudget":"工具使用预算","settings.sessions.toolBudgetAria":"工具使用预算","settings.sessions.toolBudgetHint":"每回合最大工具调用消息数","settings.sessions.isolation":"会话隔离","settings.sessions.isolationNone":"无 — 完全跨会话可见","settings.sessions.isolationSummary":"摘要 — 工具可见，无参数","settings.sessions.isolationFull":"完全 — 会话之间不可见","settings.editor.heading":"编辑器","settings.editor.vimMode":"Vim 模式","settings.editor.showWhitespace":"显示空白字符","settings.editor.livePreview":"Markdown 实时预览","settings.editor.fontSize":"字号（px）","settings.editor.fontSizeAria":"编辑器字号","settings.editor.fontFamily":"字体","settings.editor.fontFamilyPlaceholder":"monospace（默认）","settings.editor.localOnlyHint":"仅限此浏览器。编辑器更改存储在本地浏览器中，并在下次打开或重新加载文件标签页时生效。","settings.appearance.syncing":"正在同步外观…","settings.appearance.default":"默认","settings.appearance.autoLightDark":"自动（浅色/深色）","settings.appearance.tint":"色调：","settings.appearance.clearTint":"清除色调","settings.appearance.none":"无","settings.keyboard.heading":"键盘","settings.keyboard.hint1":"将应用级快捷键自定义为逗号分隔的绑定。更改立即生效。","settings.keyboard.hint1b":"已保留用于关闭/中止，无法重新绑定。","settings.keyboard.hint2mid":"以及键入","settings.keyboard.hint2end":"（在输入框外）可打开此面板。","settings.keyboard.resetAll":"全部重置为默认","settings.keyboard.defaultColon":"默认：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"默认","settings.keyboard.noMatch":"没有匹配此筛选的快捷键。","settings.keyboard.invalidShortcut":"无效快捷键：{token}。Escape 已保留，无法重新绑定。","settings.keyboard.saved":"快捷键已保存。","settings.keyboard.resetOne":"快捷键已重置为默认。","settings.keyboard.resetAllDone":"快捷键已全部重置为默认。","settings.workspace.serverApplied":"工作区设置已应用。服务器端限制立即影响新的工作区请求。","settings.workspace.browserApplied":"浏览器工作区设置已在此标签页立即应用。","settings.workspace.access":"访问","settings.workspace.enableTerminal":"启用 Web 终端","settings.workspace.allowVnc":"允许直接 VNC 目标","settings.workspace.accessHint":"终端访问立即更新。直接 VNC 目标策略适用于新的 VNC 请求。","settings.workspace.guardrails":"服务器扫描防护","settings.workspace.maxDepth":"最大树深度","settings.workspace.maxDepthAria":"工作区树最大深度","settings.workspace.maxDepthHintPre":"限制所有","settings.workspace.maxDepthHintPost":"请求","settings.workspace.maxEntries":"每次扫描最大条目数","settings.workspace.maxEntriesAria":"工作区树最大条目数","settings.workspace.maxEntriesHint":"更早截断超大的树遍历","settings.workspace.thisBrowser":"此浏览器","settings.workspace.refreshInterval":"刷新间隔（秒）","settings.workspace.refreshIntervalAria":"工作区刷新间隔","settings.workspace.folderDepth":"文件夹预览扫描深度","settings.workspace.folderDepthAria":"文件夹预览扫描深度","settings.workspace.folderDepthHintPre":"设为","settings.workspace.folderDepthHintPost":"以禁用文件夹大小预览扫描","settings.workspace.footerHint":"根目录和文件夹展开的树加载保持较浅；文件夹大小预览是 UI 中最深的工作区扫描。","settings.models.thinkingLevel":"思考级别","settings.models.noThinking":"当前模型不支持思考。","settings.models.thinkingLevelLabel":"思考级别：","settings.models.loading":"正在加载模型…","settings.models.summary":"在狭窄面板中，模型和提供商名称可能换行以避免裁切。","settings.models.scopedOnly":"仅限范围内模型","settings.models.scopedCheckboxPre":"使用 Pi 的","settings.models.scopedCheckboxPost":"作为 Piclaw 模型列表","settings.models.scopedHintPre":"筛选此选择器和","settings.models.scopedHintPost":"工具。TUI 模型选择保持不变。","settings.models.colModel":"模型","settings.models.colProvider":"提供商","settings.models.colContext":"上下文","settings.models.colReasoning":"推理","settings.models.noMatch":"没有匹配 “{filter}” 的模型","settings.tools.unavailable":"工具数据不可用。","settings.tools.search":"搜索","settings.tools.matchMode":"匹配模式","settings.tools.orMode":"任意关键词（OR）— 结果至少匹配一个搜索词","settings.tools.andMode":"所有关键词（AND）— 结果必须匹配每个搜索词","settings.tools.colEnabled":"已启用","settings.tools.colTool":"工具","settings.tools.colCompact":"压缩","settings.tools.colKind":"类型","settings.tools.colSummary":"摘要","settings.tools.colSource":"来源","settings.tools.disableCompaction":"为此工具禁用工具结果压缩","settings.tools.enableCompaction":"为此工具启用工具结果压缩","settings.tools.noMatch":"没有匹配 “{filter}” 的工具","settings.tools.footer":"工具激活由代理运行时管理。组复选框可折叠/展开；“压缩”列控制工具结果压缩资格。","menu.title":"菜单","menu.showWorkspace":"显示工作区","menu.hideWorkspace":"隐藏工作区","menu.openExplorer":"打开资源管理器","menu.chatOnly":"仅聊天模式","menu.exitChatOnly":"退出仅聊天模式","menu.openTerminal":"在标签页中打开终端","menu.openVnc":"在标签页中打开 VNC","menu.newFile":"新建文件","menu.openRecent":"打开最近文件","menu.refreshTree":"刷新目录树","menu.reindex":"重建工作区索引","menu.showHidden":"显示隐藏文件","menu.hideHidden":"隐藏隐藏文件","menu.scale":"缩放","menu.settings":"设置"},eu={"compose.placeholder":"メッセージ（Enterで送信、Shift+Enterで改行）...","compose.send":"送信","compose.stop":"停止","compose.searchPlaceholder":"検索（Enterで実行）...","compose.clearAll":"すべてクリア","compose.clearAllTitle":"すべての添付と参照をクリア","compose.scope":"範囲","compose.searchScope":"検索範囲","compose.scopeCurrent":"現在","compose.scopeBranchFamily":"ブランチファミリー","compose.scopeAll":"すべてのチャット","compose.filterImages":"画像","compose.filterAttachments":"添付","compose.search":"検索","compose.closeSearch":"検索を閉じる","compose.shareLocation":"位置を共有","compose.attachFile":"ファイルを添付","compose.queueControls":"キュー済みフォローアップの操作","compose.moveUp":"上に移動","compose.moveUpQueue":"キュー内で上に移動","compose.moveDown":"下に移動","compose.moveDownQueue":"キュー内で下に移動","compose.editInCompose":"入力欄で編集","compose.returnToEditor":"キュー済みメッセージを入力欄に戻す","compose.injectSteer":"キュー済みフォローアップをステアとして挿入","compose.steer":"ステア","compose.cancelQueued":"キュー済みメッセージをキャンセル","compose.resizeInput":"メッセージ入力欄のサイズ変更","compose.resizeInputHint":"ドラッグしてメッセージ入力欄のサイズを変更","compose.modelPicker":"モデルピッカー","compose.sessionsAndAgents":"セッションとエージェント","compose.openModelPicker":"モデルピッカーを開く","compose.newBranchTitle":"このチャットから新しいブランチを作成","compose.newRootTitle":"web:ops のようなクリーンなルートセッションを作成","compose.renameSessionTitle":"現在のセッションの名前を変更","compose.pruneSessionTitle":"現在のエージェント/セッションブランチを削除（プルーン）","compose.filterImagesTitle":"画像付きメッセージのみ表示","compose.filterAttachmentsTitle":"添付付きメッセージのみ表示","compose.selectModel":"モデルを選択","compose.loadingModels":"モデルを読み込み中…","compose.noModels":"利用可能なモデルがありません。","compose.nextModel":"次のモデル","compose.manageSessions":"セッションとエージェントを管理","compose.noSessions":"他のセッションはまだありません。","compose.newBranch":"新しいブランチ","compose.newRoot":"新しいルート…","compose.mergeCurrent":"現在を親にマージ","compose.renameCurrent":"現在の名前を変更…","compose.deleteCurrent":"現在を削除…","compose.mergeInto":"このブランチを {target} にマージ","compose.mergeBlocked":"このブランチはアクティブな間または子がある間はマージできません","workspace.title":"ワークスペース","workspace.newFile":"新規ファイル","workspace.refresh":"更新","workspace.actions":"ワークスペース操作","workspace.uploadFiles":"ファイルをアップロード","workspace.reindexing":"ワークスペースを再インデックス中…","workspace.deleteFile":"ファイルを削除","workspace.download":"ダウンロード","workspace.uploadToFolder":"このフォルダにファイルをアップロード","workspace.addFolderHint":"フォルダのヒントを入力欄に追加","workspace.downloadZip":"フォルダをzipでダウンロード","workspace.openInTab":"タブで開く","workspace.openInEditor":"エディタで開く","workspace.renameSelected":"選択項目の名前を変更","workspace.downloadSelectedFile":"選択したファイルをダウンロード","workspace.downloadSelectedFolder":"選択したフォルダをダウンロード（zip）","workspace.deleteSelectedFile":"選択したファイルを削除","shell.settings":"設定","shell.newChat":"新規チャット","shell.connecting":"接続中…","shell.connected":"接続済み","language.label":"言語","settings.title":"設定","settings.close":"閉じる（Esc）","settings.filter":"フィルター…","settings.loading":"設定を読み込み中…","settings.section.general":"一般","settings.section.sessions":"セッション","settings.section.recordings":"録画","settings.section.compaction":"圧縮","settings.section.keyboard":"キーボード","settings.section.workspace":"ワークスペース","settings.section.environment":"環境","settings.section.providers":"プロバイダー","settings.section.models":"モデル","settings.section.theme":"外観","settings.section.scheduled-tasks":"スケジュールタスク","settings.section.quick-actions":"クイックアクション","settings.section.keychain":"キーチェーン","settings.section.tools":"ツール","settings.section.addons":"アドオン","settings.placeholder.recordings":"録画をフィルター…","settings.placeholder.keyboard":"ショートカットをフィルター…","settings.placeholder.environment":"環境をフィルター…","settings.placeholder.models":"モデルをフィルター…","settings.placeholder.scheduled-tasks":"スケジュールタスクをフィルター…","settings.placeholder.quick-actions":"クイックアクションをフィルター…","settings.placeholder.keychain":"エントリをフィルター…","settings.placeholder.tools":"ツールをフィルター…","settings.placeholder.addons":"アドオンをフィルター…","preview.close":"閉じる","preview.loading":"プレビューを読み込み中…","preview.files":"ファイル","preview.folders":"フォルダ","preview.compressed":"圧縮後","preview.uncompressed":"非圧縮","preview.name":"名前","preview.type":"種類","preview.method":"方式","preview.size":"サイズ","post.deleteMessage":"メッセージを削除","post.tooLarge":"メッセージが大きすぎて表示できません。","post.previewTruncated":"プレビューは切り詰められました。","post.submitted":"送信済み","post.discard":"破棄","post.save":"保存","post.cancel":"キャンセル","post.addNote":"メモを追加","post.addNotePlaceholder":"メモを追加…","tab.close":"閉じる","tab.closeOthers":"他を閉じる","tab.closeAll":"すべて閉じる","tab.reattach":"再アタッチ","tab.openInWindow":"ウィンドウで開く","tab.openInNewTab":"新しいタブで開く","tab.pinned":"ピン留め済み","tab.detached":"分離済み","tab.openSeparateWindow":"別ウィンドウで開く","status.trackedVariables":"追跡中の変数","status.attachToSession":"セッションにアタッチ","status.files":"ファイル","status.proposedDiff":"提案された差分","status.copyTmux":"tmuxコマンドをコピー","status.experimentDuration":"実験の経過時間","status.sinceLastActivity":"最後のアクティビティから","annotator.title":"画像に注釈","annotator.typeLabel":"ラベルを入力…","annotator.undo":"元に戻す","annotator.resetZoom":"ズームをリセット","tree.filter":"フィルター…","tree.sessionTree":"セッションツリー","btw.label":"BTW サイド会話","btw.close":"BTW を閉じる","btw.thinking":"思考中","mdpreview.close":"プレビューを閉じる","mdpreview.unavailable":"プレビューを利用できません","widget.close":"ウィジェットを閉じる","oobe.gettingStarted":"はじめに","oobe.needsSetupTitle":"インスタンスのセットアップが必要","oobe.configuredTitle":"インスタンスは設定済み","oobe.needsSetupBody":"このインスタンスはまだ設定されていません。設定を開き、AIプロバイダー/モデルを設定してリクエストの送信を開始してください。","oobe.configuredBody":"このインスタンスは設定済みのようです。設定でプロバイダーとモデルの設定を確認または更新してください。","oobe.openSettings":"設定を開く","oobe.dismiss":"閉じる","oobe.done":"完了","palette.placeholder":"入力してエージェント、ワークスペース操作、またはスラッシュコマンドにジャンプ…","palette.hideWorkspace":"ワークスペースを非表示","palette.showWorkspace":"ワークスペースを表示","palette.hideWorkspaceDesc":"ワークスペースサイドバーを非表示にします。","palette.showWorkspaceDesc":"ワークスペースサイドバーを表示します。","palette.exitChatOnly":"チャットのみモードを終了","palette.chatOnly":"チャットのみモード","palette.exitChatOnlyDesc":"分割ワークスペースレイアウトに戻ります。","palette.chatOnlyDesc":"チャットのみのレイアウトに切り替えます。","palette.groupAgents":"エージェント","palette.groupWorkspace":"ワークスペース","palette.groupSlash":"スラッシュコマンド","palette.hintMove":"移動","palette.hintSelect":"選択","palette.hintPopOut":"ポップアウト","palette.hintClose":"閉じる","settings.appliedNotice":"設定を適用しました。変更は次のターンから有効になります。","settings.sessions.lifecycle":"セッションのライフサイクル","settings.sessions.autoRotate":"セッションを自動ローテーション","settings.sessions.maxSize":"最大セッションサイズ（MB）","settings.sessions.maxSizeAria":"最大セッションサイズ","settings.sessions.agentBehaviour":"エージェントの動作","settings.sessions.toolBudget":"ツール使用予算","settings.sessions.toolBudgetAria":"ツール使用予算","settings.sessions.toolBudgetHint":"1ターンあたりの最大ツール呼び出しメッセージ数","settings.sessions.isolation":"セッションの分離","settings.sessions.isolationNone":"なし — セッション間で完全に可視","settings.sessions.isolationSummary":"概要 — ツールは可視、引数は非表示","settings.sessions.isolationFull":"完全 — セッション同士は互いに見えない","settings.editor.heading":"エディター","settings.editor.vimMode":"Vim モード","settings.editor.showWhitespace":"空白文字を表示","settings.editor.livePreview":"Markdown ライブプレビュー","settings.editor.fontSize":"フォントサイズ（px）","settings.editor.fontSizeAria":"エディターのフォントサイズ","settings.editor.fontFamily":"フォントファミリー","settings.editor.fontFamilyPlaceholder":"monospace（デフォルト）","settings.editor.localOnlyHint":"このブラウザーのみ。エディターの変更はローカルブラウザーストレージに保存され、次にファイルタブを開くか再読み込みしたときに有効になります。","settings.appearance.syncing":"外観を同期中…","settings.appearance.default":"デフォルト","settings.appearance.autoLightDark":"自動（ライト/ダーク）","settings.appearance.tint":"色調：","settings.appearance.clearTint":"色調をクリア","settings.appearance.none":"なし","settings.keyboard.heading":"キーボード","settings.keyboard.hint1":"アプリ全体のショートカットをカンマ区切りのバインディングとしてカスタマイズします。変更はすぐに反映されます。","settings.keyboard.hint1b":"は閉じる/中止用に予約されており、再割り当てできません。","settings.keyboard.hint2mid":"と入力","settings.keyboard.hint2end":"を入力欄の外で押すとこのペインが開きます。","settings.keyboard.resetAll":"すべてデフォルトにリセット","settings.keyboard.defaultColon":"デフォルト：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"デフォルト","settings.keyboard.noMatch":"このフィルターに一致するショートカットはありません。","settings.keyboard.invalidShortcut":"無効なショートカット：{token}。Escape は予約されており、再割り当てできません。","settings.keyboard.saved":"キーボードショートカットを保存しました。","settings.keyboard.resetOne":"キーボードショートカットをデフォルトにリセットしました。","settings.keyboard.resetAllDone":"キーボードショートカットをすべてデフォルトにリセットしました。","settings.workspace.serverApplied":"ワークスペース設定を適用しました。サーバー側の制限は新しいワークスペースリクエストに直ちに反映されます。","settings.workspace.browserApplied":"ブラウザーのワークスペース設定はこのタブで直ちに適用されました。","settings.workspace.access":"アクセス","settings.workspace.enableTerminal":"Web ターミナルを有効化","settings.workspace.allowVnc":"直接 VNC ターゲットを許可","settings.workspace.accessHint":"ターミナルアクセスは直ちに更新されます。直接 VNC ターゲットポリシーは新しい VNC リクエストに適用されます。","settings.workspace.guardrails":"サーバースキャンのガードレール","settings.workspace.maxDepth":"最大ツリー深度","settings.workspace.maxDepthAria":"ワークスペースツリーの最大深度","settings.workspace.maxDepthHintPre":"すべての","settings.workspace.maxDepthHintPost":"リクエストを制限します","settings.workspace.maxEntries":"スキャンあたりの最大エントリ数","settings.workspace.maxEntriesAria":"ワークスペースツリーの最大エントリ数","settings.workspace.maxEntriesHint":"大きすぎるツリー走査を早めに打ち切ります","settings.workspace.thisBrowser":"このブラウザー","settings.workspace.refreshInterval":"更新間隔（秒）","settings.workspace.refreshIntervalAria":"ワークスペース更新間隔","settings.workspace.folderDepth":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthAria":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthHintPre":"","settings.workspace.folderDepthHintPost":"に設定するとフォルダサイズのプレビュースキャンを無効化します","settings.workspace.footerHint":"ルートおよびフォルダ展開のツリー読み込みは浅いままです。フォルダサイズのプレビューは UI で最も深いワークスペーススキャンです。","settings.models.thinkingLevel":"思考レベル","settings.models.noThinking":"現在のモデルは思考をサポートしていません。","settings.models.thinkingLevelLabel":"思考レベル：","settings.models.loading":"モデルを読み込み中…","settings.models.summary":"狭いペインでは、クリッピングを避けるためにモデル名とプロバイダー名が折り返される場合があります。","settings.models.scopedOnly":"スコープ付きモデルのみ","settings.models.scopedCheckboxPre":"Piclaw のモデル一覧に Pi の","settings.models.scopedCheckboxPost":"を使用","settings.models.scopedHintPre":"このピッカーと","settings.models.scopedHintPost":"ツールをフィルタリングします。TUI のモデル選択は変更されません。","settings.models.colModel":"モデル","settings.models.colProvider":"プロバイダー","settings.models.colContext":"コンテキスト","settings.models.colReasoning":"推論","settings.models.noMatch":"「{filter}」に一致するモデルはありません","settings.tools.unavailable":"ツールデータを利用できません。","settings.tools.search":"検索","settings.tools.matchMode":"マッチモード","settings.tools.orMode":"いずれかのキーワード（OR）— 少なくとも1つの検索語に一致","settings.tools.andMode":"すべてのキーワード（AND）— すべての検索語に一致","settings.tools.colEnabled":"有効","settings.tools.colTool":"ツール","settings.tools.colCompact":"コンパクト","settings.tools.colKind":"種類","settings.tools.colSummary":"概要","settings.tools.colSource":"ソース","settings.tools.disableCompaction":"このツールのツール結果コンパクションを無効化","settings.tools.enableCompaction":"このツールのツール結果コンパクションを有効化","settings.tools.noMatch":"「{filter}」に一致するツールはありません","settings.tools.footer":"ツールのアクティベーションはエージェントランタイムが管理します。グループのチェックボックスで折りたたみ/展開でき、「コンパクト」列はツール結果コンパクションの対象可否を制御します。","menu.title":"メニュー","menu.showWorkspace":"ワークスペースを表示","menu.hideWorkspace":"ワークスペースを非表示","menu.openExplorer":"エクスプローラーを開く","menu.chatOnly":"チャットのみモード","menu.exitChatOnly":"チャットのみモードを終了","menu.openTerminal":"ターミナルをタブで開く","menu.openVnc":"VNC をタブで開く","menu.newFile":"新規ファイル","menu.openRecent":"最近のファイルを開く","menu.refreshTree":"ツリーを更新","menu.reindex":"ワークスペースを再インデックス","menu.showHidden":"隠しファイルを表示","menu.hideHidden":"隠しファイルを非表示","menu.scale":"拡大縮小","menu.settings":"設定"},mu={en:D_,"zh-CN":du,ja:eu},Gn=Yn});function I_({children:n,className:r=""}){let[i,_]=w(null);return Q(()=>{if(typeof document>"u")return;let c=document.createElement("div");return c.className=r||"",document.body.appendChild(c),_(c),()=>{try{In(null,c)}finally{c.remove()}}},[]),Q(()=>{if(!i)return;i.className=r||"";return},[r,i]),Rr(()=>{if(!i)return;In(n,i);return},[n,i]),null}var L_=O(()=>{e()});function ti(n,r){let i=String(n.label||"").localeCompare(String(r.label||""),void 0,{sensitivity:"base"});if(i!==0)return i;return String(n.id||"").localeCompare(String(r.id||""),void 0,{sensitivity:"base"})}function Cn(n){let r=Pn.findIndex((i)=>i.id===n.id);if(r>=0)Pn[r]=n;else Pn.push(n);Pn.sort(ti)}function Pl(n){let r=Pn.findIndex((i)=>i.id===n);if(r>=0)Pn.splice(r,1)}function Y_(){return[...Pn]}function Vl(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var Pn;var fr=O(()=>{Pn=[]});function Gr(n){let r=typeof n==="string"?n.trim():"";return r?r:null}function C_(n={}){if(typeof window>"u")return;let r=Gr(n.section);try{if(window.__piclawSettingsOpenRequested=!0,r)window.__piclawSettingsRequestedSection=r;else delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to record open request flags",i)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:r?{section:r}:void 0}))}function xi(){if(typeof window>"u")return null;return Gr(window.__piclawSettingsRequestedSection)}function O_(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),r=xi();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to clear open request flags",i)}return{open:n,section:r}}function E_(n=typeof window<"u"?window:null){return n||null}function Pr(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function or(n,r){return`${n}:${r}`}function S_(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function d_(n,r){if(n.length<=r)return;n.splice(0,n.length-r)}function Vn(n){if(!n||typeof n!=="object")return null;return{...n}}function Qn(n){if(!n)return null;return Nn.find((r)=>r.id===n)||null}function bi(n,r){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${r}`)}catch(i){console.debug("[app-perf] Ignoring performance.mark failure.",i,{traceId:n,phase:r})}}function e_(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let r=Qn(n);if(!r)return;for(let i of r.phases)performance.clearMarks(`piclaw:${n}:${i.phase}`)}catch(r){console.debug("[app-perf] Ignoring performance.clearMarks failure.",r,{traceId:n})}}function J_(n,r,i){let _=Xn.get(or(n,r));if(_&&Qn(_)?.status==="active")lr(_,"cancelled","superseded",{replacementType:n,replacementChatJid:r});let c=S_(n),u={id:c,type:n,chatJid:r,startedAt:Pr(),detail:Vn(i),phases:[],status:"active"};return Nn.push(u),d_(Nn,100),Xn.set(or(n,r),c),bi(c,"start"),c}function lr(n,r,i,_,c){let u=Qn(n);if(!u||u.status!=="active")return;if(i)u.phases.push({phase:i,at:Pr(),detail:Vn(_)}),bi(u.id,i);if(u.status=r,u.completedAt=Pr(),u.durationMs=u.completedAt-u.startedAt,c!==void 0)u.error=c instanceof Error?c.message:String(c);let f=or(u.type,u.chatJid);if(Xn.get(f)===u.id)Xn.delete(f);e_(u.id)}function sf(n=E_()){let r=n?.__PICLAW_PERF__;if(r)return r;if(n)n.__PICLAW_PERF__=Vr;return Vr}function On(n=E_()){return sf(n)}function Ql(n,r,i){return On().ensureTrace(n,r,i)}function Ml(n,r){return On().getActiveTraceId(n,r)}function ql(n,r,i){On().markTrace(n,r,i)}function Al(n,r,i="settled",_){let c=Qn(n);if(!c||c.status!=="active")return!1;let u=new Set(c.phases.map((f)=>f.phase));if(!r.every((f)=>u.has(f)))return!1;return lr(n,"completed",i,_),!0}function Dl(n,r,i="failed",_){On().failTrace(n,r,i,_)}function Zl(n,r="cancelled",i){On().cancelTrace(n,r,i)}function hi(n){return On().recordRequest(n)}var Nn,sr,Xn,Vr;var m_=O(()=>{Nn=[],sr=[],Xn=new Map;Vr={startTrace(n,r,i){return J_(n,r,i)},ensureTrace(n,r,i){let _=Xn.get(or(n,r));if(_&&Qn(_)?.status==="active")return _;return J_(n,r,i)},getActiveTraceId(n,r){let i=Xn.get(or(n,r));return i&&Qn(i)?.status==="active"?i:null},markTrace(n,r,i){let _=Qn(n);if(!_||_.status!=="active")return;_.phases.push({phase:r,at:Pr(),detail:Vn(i)}),bi(_.id,r)},completeTrace(n,r="settled",i){lr(n,"completed",r,i)},failTrace(n,r,i="failed",_){lr(n,"failed",i,_,r)},cancelTrace(n,r="cancelled",i){lr(n,"cancelled",r,i)},recordRequest(n){let r=S_("req");return sr.push({...n,id:r,detail:Vn(n.detail)}),d_(sr,300),r},getTraces(){return Nn.map((n)=>({...n,detail:Vn(n.detail),phases:n.phases.map((r)=>({...r,detail:Vn(r.detail)}))}))},getRequests(){return sr.map((n)=>({...n,detail:Vn(n.detail)}))},clear(){Nn.forEach((n)=>e_(n.id)),Nn.splice(0,Nn.length),sr.splice(0,sr.length),Xn.clear()},printSummary(){let n={traces:Vr.getTraces(),requests:Vr.getRequests()};return console.table(n.traces.map((r)=>({id:r.id,type:r.type,chatJid:r.chatJid,status:r.status,durationMs:Number(r.durationMs||0).toFixed(1),lastPhase:r.phases[r.phases.length-1]?.phase||"start"}))),n}}});function Jn(n){let r=Number(n||0);return Number.isFinite(r)&&r>0?r:null}function lf(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function of(n){let r=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(r)}function a_(n){let r=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(r)}function nc(n=typeof window<"u"?window:null){let r=Jn(n?.innerWidth)??Jn(n?.screen?.availWidth)??Jn(n?.screen?.width)??0,i=Jn(n?.innerHeight)??Jn(n?.screen?.availHeight)??Jn(n?.screen?.height)??0,_=r&&i?Math.min(r,i):r||i,c=r&&i?Math.max(r,i):r||i,u=lf(n),f=Number(n?.navigator?.maxTouchPoints||0),l=u||f>1;if(_>0&&_<=640)return"mobile";if(of(n)&&!a_(n))return"mobile";if(a_(n))return"tablet";if(l&&_>0&&_<=1100)return"tablet";if(c>0&&c<=1180&&_>0&&_<=900)return"tablet";return"desktop"}var F0={};fn(F0,{uploadWorkspaceFile:()=>x0,uploadMedia:()=>Yf,updateWorkspaceFile:()=>l0,updateScheduledTask:()=>Ki,submitAdaptiveCardAction:()=>Of,streamSidePrompt:()=>Jf,stopSessionRecording:()=>Fi,stopAutoresearch:()=>Mf,steerAgentQueueItem:()=>Zf,startSessionRecording:()=>zi,setWorkspaceVisibility:()=>k0,setAgentThoughtVisibility:()=>df,sessionRecordingPlaybackUrl:()=>Wi,sessionRecordingExportUrl:()=>$r,sendPeerAgentMessage:()=>Uf,sendAgentMessage:()=>Kn,searchPosts:()=>yf,saveWorkspaceSettings:()=>Pi,saveWebPushSubscription:()=>Gf,saveUiState:()=>Ri,saveQuickActionsSettings:()=>Gi,savePostAnnotations:()=>z0,saveEnvironmentOverride:()=>Xr,restoreChatBranch:()=>Rf,respondToAgentRequest:()=>Cf,reorderAgentQueueItem:()=>If,renameWorkspaceFile:()=>h0,renameChatJid:()=>jf,renameChatBranch:()=>zf,removeAgentQueueItem:()=>Df,reindexWorkspace:()=>u0,purgeChatBranch:()=>Wf,pruneChatBranch:()=>Hf,previewSessionRecordingRedaction:()=>ji,moveWorkspaceEntry:()=>p0,mergeChatBranchIntoParent:()=>Ff,getWorkspaceTree:()=>i0,getWorkspaceRawUrl:()=>ic,getWorkspaceIndexStatus:()=>c0,getWorkspaceFileStat:()=>s0,getWorkspaceFileDownloadUrl:()=>K0,getWorkspaceFile:()=>f0,getWorkspaceDownloadUrl:()=>B0,getWorkspaceBranch:()=>_0,getWebPushPublicKey:()=>Tf,getTimeline:()=>gf,getThumbnailUrl:()=>mf,getThread:()=>tf,getSystemMetrics:()=>xf,getSessionRecordings:()=>Bi,getSessionRecording:()=>Nr,getScheduledTasks:()=>ki,getQuickActionsSettings:()=>Ti,getPostsByHashtag:()=>wf,getMediaUrl:()=>ef,getMediaText:()=>n0,getMediaInfo:()=>af,getMediaBlob:()=>r0,getEnvironmentSettings:()=>Vi,getChatBranches:()=>kf,getAutoresearchStatus:()=>Qf,getAgents:()=>Vf,getAgentThought:()=>Sf,getAgentStatus:()=>Nf,getAgentQueueState:()=>Af,getAgentModels:()=>Ni,getAgentContext:()=>Xf,getAgentCommands:()=>Ui,getActiveChatAgents:()=>vf,forkChatBranch:()=>Kf,dismissAutoresearch:()=>qf,deleteWorkspaceFile:()=>v0,deleteWebPushSubscription:()=>Pf,deleteSessionRecording:()=>Hi,deletePost:()=>pf,createWorkspaceFile:()=>b0,createRootChatSession:()=>Bf,createReply:()=>hf,createPost:()=>bf,completeInstanceOobe:()=>Lf,attachWorkspaceFile:()=>o0,addToWhitelist:()=>Ef,SSEClient:()=>_c});function kn(n,r={}){if(String(r.method||"GET").toUpperCase()!=="GET")return q(n,r);let _=pi.get(n);if(_)return _;let c=q(n,r).finally(()=>{pi.delete(n)});return pi.set(n,c),c}async function q(n,r={}){let i=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),_;try{_=await fetch(rn+n,{...r,headers:{"Content-Type":"application/json",...r.headers}})}catch(u){throw hi({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i,ok:!1,detail:{failedBeforeResponse:!0}}),u}let c=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i;if(hi({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:c,status:_.status,ok:_.ok,requestId:_.headers?.get?.("x-request-id")||null,serverTiming:_.headers?.get?.("Server-Timing")||null}),!_.ok){let u=await _.json().catch(()=>({error:"Unknown error"}));throw Error(u.error||`HTTP ${_.status}`)}return _.json()}function rc(n){let r=String(n||"").split(`
`),i="message",_=[];for(let u of r)if(u.startsWith("event:"))i=u.slice(6).trim()||"message";else if(u.startsWith("data:"))_.push(u.slice(5).trim());let c=_.join(`
`);if(!c)return null;try{return{event:i,data:JSON.parse(c)}}catch{return{event:i,data:c}}}async function $f(n,r){if(!n.body)throw Error("Missing event stream body");let i=n.body.getReader(),_=new TextDecoder,c="";while(!0){let{value:f,done:l}=await i.read();if(l)break;c+=_.decode(f,{stream:!0});let g=c.split(`

`);c=g.pop()||"";for(let o of g){let x=rc(o);if(x)r(x.event,x.data)}}c+=_.decode();let u=rc(c);if(u)r(u.event,u.data)}async function gf(n=10,r=null,i=null){let _=`/timeline?limit=${n}`;if(r)_+=`&before=${r}`;if(i)_+=`&chat_jid=${encodeURIComponent(i)}`;return kn(_)}async function wf(n,r=50,i=0,_=null){let c=_?`&chat_jid=${encodeURIComponent(_)}`:"";return q(`/hashtag/${encodeURIComponent(n)}?limit=${r}&offset=${i}${c}`)}async function yf(n,r=50,i=0,_=null,c="current",u=null,f=null){let l=_?`&chat_jid=${encodeURIComponent(_)}`:"",g=c?`&scope=${encodeURIComponent(c)}`:"",o=u?`&root_chat_jid=${encodeURIComponent(u)}`:"",x=f?.images?"&images=1":"",$=f?.attachments?"&attachments=1":"";return q(`/search?q=${encodeURIComponent(n)}&limit=${r}&offset=${i}${l}${g}${o}${x}${$}`)}async function tf(n,r=null){let i=r?`?chat_jid=${encodeURIComponent(r)}`:"";return q(`/thread/${n}${i}`)}async function xf(){return q("/agent/system-metrics")}async function ki(n={}){let r=new URLSearchParams;if(n?.id)r.set("id",String(n.id));if(n?.chatJid)r.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")r.set("status",String(n.status));if(n?.limit)r.set("limit",String(n.limit));if(n?.includeRunLogs)r.set("include_run_logs","1");if(n?.runLogLimit)r.set("run_log_limit",String(n.runLogLimit));let i=r.toString()?`?${r.toString()}`:"";return q(`/agent/scheduled-tasks${i}`)}async function Ki(n,r,i={}){return q("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:r,allow_internal:i?.allowInternal===!0})})}async function Bi(){return q("/agent/recordings")}async function Nr(n){return q(`/agent/recordings/${encodeURIComponent(n)}`)}async function zi(n={}){return q("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function Fi(n={}){return q("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function Hi(n){return q(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function $r(n,r="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(r)}`}function Wi(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function ji(n,r={}){return q("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...r})})}async function Ri(n){return q("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function bf(n,r=[],i=null){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return q(`/post${_}`,{method:"POST",body:JSON.stringify({content:n,media_ids:r})})}async function hf(n,r,i=[],_=null){let c=_?`?chat_jid=${encodeURIComponent(_)}`:"";return q(`/post/reply${c}`,{method:"POST",body:JSON.stringify({thread_id:n,content:r,media_ids:i})})}async function pf(n,r=!1,i=null){let _=i?`&chat_jid=${encodeURIComponent(i)}`:"",c=`/post/${n}?cascade=${r?"true":"false"}${_}`;return q(c,{method:"DELETE"})}async function Kn(n,r,i=null,_=[],c=null,u=null){let f=u?`?chat_jid=${encodeURIComponent(u)}`:"",l={content:r,thread_id:i,media_ids:_,client_context:{screen_hint:nc()}};if(c==="auto"||c==="queue"||c==="steer")l.mode=c;return q(`/agent/${n}/message${f}`,{method:"POST",body:JSON.stringify(l)})}async function Ui(n="web:default"){let r=typeof n==="string"&&n.trim()?n.trim():"web:default";return kn(`/agent/commands?chat_jid=${encodeURIComponent(r)}`)}async function Ti(){return q("/agent/settings/quick-actions")}async function Gi(n){return q("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function Pi(n){return q("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function Vi(){return q("/agent/settings/environment")}async function Xr(n){return q("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function vf(){return q("/agent/active-chats")}async function kf(n=null,r={}){let i=new URLSearchParams;if(n)i.set("root_chat_jid",String(n));if(r?.includeArchived)i.set("include_archived","1");let _=i.toString()?`?${i.toString()}`:"";return kn(`/agent/branches${_}`)}async function Kf(n,r={}){return q("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...r?.agentName?{agent_name:r.agentName}:{}})})}async function Bf(n){return q("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function zf(n,r={}){return q("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Ff(n){return q("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Hf(n){return q("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Wf(n){return q("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function jf(n,r){return q("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:r})})}async function Rf(n,r={}){return q("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Uf(n,r,i,_="auto",c={}){let u={source_chat_jid:n,content:i,mode:_,...c?.sourceAgentName?{source_agent_name:c.sourceAgentName}:{},...c?.targetBy==="agent_name"?{target_agent_name:r}:{target_chat_jid:r}};return q("/agent/peer-message",{method:"POST",body:JSON.stringify(u)})}async function Tf(){return q("/agent/push/vapid-public-key")}async function Gf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return q("/agent/push/subscription",{method:"POST",body:JSON.stringify(i)})}async function Pf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return q("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(i)})}async function Vf(){return kn("/agent/roster")}async function Nf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return kn(`/agent/status${r}`)}async function Xf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return kn(`/agent/context${r}`)}async function Qf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return kn(`/agent/autoresearch/status${r}`)}async function Mf(n=null,r={}){return q("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:r?.generateReport!==!1})})}async function qf(n=null){return q("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function Af(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return kn(`/agent/queue-state${r}`)}async function Df(n,r=null){let i=await fetch(rn+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Zf(n,r=null){let i=await fetch(rn+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function If(n,r,i=null){let _=await fetch(rn+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Ni(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return kn(`/agent/models${r}`)}async function Lf(n="provider-ready"){return q("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function Yf(n){let r=new FormData;r.append("file",n);let i=await fetch(rn+"/media/upload",{method:"POST",body:r});if(!i.ok){let _=await i.json().catch(()=>({error:"Upload failed"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Cf(n,r,i=null){let _=await fetch(rn+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to respond"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Of(n){let r=await fetch(rn+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){let i=await r.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(i.error||`HTTP ${r.status}`)}return r.json()}async function Jf(n,r={}){let i=await fetch(rn+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:r.systemPrompt||void 0,chat_jid:r.chatJid||void 0}),signal:r.signal});if(!i.ok){let u=await i.json().catch(()=>({error:"Side prompt failed"}));throw Error(u.error||`HTTP ${i.status}`)}let _=null,c=null;if(await $f(i,(u,f)=>{if(r.onEvent?.(u,f),u==="side_prompt_thinking_delta")r.onThinkingDelta?.(f?.delta||"");else if(u==="side_prompt_text_delta")r.onTextDelta?.(f?.delta||"");else if(u==="side_prompt_done")_=f;else if(u==="side_prompt_error")c=f}),c){let u=Error(c?.error||"Side prompt failed");throw u.payload=c,u}return _}async function Ef(n,r){let i=await fetch(rn+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Sf(n,r="thought"){let i=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(r)}`;return q(i)}async function df(n,r,i){return q("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:r,expanded:Boolean(i)})})}function ef(n){return`${rn}/media/${n}`}function mf(n){return`${rn}/media/${n}/thumbnail`}async function af(n){let r=await fetch(`${rn}/media/${n}/info`);if(!r.ok)throw Error("Failed to get media info");return r.json()}async function n0(n){let r=await fetch(`${rn}/media/${n}`);if(!r.ok)throw Error("Failed to load media text");return r.text()}async function r0(n){let r=await fetch(`${rn}/media/${n}`);if(!r.ok)throw Error("Failed to load media blob");return r.blob()}async function i0(n="",r=2,i=!1){let _=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${r}&show_hidden=${i?"1":"0"}`;return q(_)}async function _0(n=""){let r=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return q(r)}async function c0(n="all"){let r=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return q(r)}async function u0(n="all"){return q("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function f0(n,r=20000,i=null){let _=i?`&mode=${encodeURIComponent(i)}`:"",c=`/workspace/file?path=${encodeURIComponent(n)}&max=${r}${_}`;return q(c)}async function s0(n){return q(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function l0(n,r){return q("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:r})})}async function o0(n){return q("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function g0(n,r="",i={}){let _=new URLSearchParams;if(r)_.set("path",r);if(i.overwrite)_.set("overwrite","1");let c=_.toString();return c?`${n}?${c}`:n}function w0(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function y0(n,r,i,_){return new Promise((c,u)=>{let f=new XMLHttpRequest;f.open("POST",rn+r);for(let[l,g]of Object.entries(i||{}))if(g!==void 0&&g!==null)f.setRequestHeader(l,String(g));f.upload.onprogress=(l)=>{if(typeof _==="function")_({loaded:l.lengthComputable?l.loaded:0,total:l.lengthComputable?l.total:n.size,lengthComputable:l.lengthComputable})},f.onload=()=>{try{let l=f.responseText?JSON.parse(f.responseText):{};if(f.status>=200&&f.status<300)c(l);else{let g=Error(l.error||`HTTP ${f.status}`);g.status=f.status,g.code=l.code,u(g)}}catch{let l=Error(`HTTP ${f.status}`);l.status=f.status,u(l)}},f.onerror=()=>u(Error("Upload failed (network error)")),f.ontimeout=()=>u(Error("Upload timed out")),f.send(n)})}async function t0(n,r="",i={}){let _=w0(),c=g0("/workspace/upload-chunk",r,i),u=Math.max(1,Math.min(vi,Number(i.chunkSize)||$0)),f=Math.max(0,Number(n?.size)||0),l=Math.max(1,Math.ceil(f/u)),g=0,o=null;for(let x=0;x<l;x+=1){let $=x*u,p=Math.min(f,$+u),b=n.slice($,p),v=b.size;if(o=await y0(b,c,{"X-Upload-Id":_,"X-Chunk-Index":x,"X-Chunk-Total":l,"X-File-Name":n?.name||"upload.bin","X-File-Size":f},(k)=>{if(typeof i.onProgress!=="function")return;let t=Math.min(f,g+(k?.loaded||0)),h=f||1;i.onProgress({loaded:t,total:h,percent:Math.round(t/h*100),chunkIndex:x,chunkTotal:l})}),g+=v,typeof i.onProgress==="function"){let k=f||1,t=f?g:k;i.onProgress({loaded:t,total:k,percent:Math.round(t/k*100),chunkIndex:x+1,chunkTotal:l})}}return o}async function x0(n,r="",i={}){if(n?.size>vi){let _=(n.size/1048576).toFixed(0),c=(vi/1048576).toFixed(0),u=Error(`File too large (${_} MB). Maximum upload size is ${c} MB.`);throw u.code="file_too_large",u}return await t0(n,r,i)}async function b0(n,r,i=""){let _=await fetch(rn+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r,content:i})});if(!_.ok){let c=await _.json().catch(()=>({error:"Create failed"})),u=Error(c.error||`HTTP ${_.status}`);throw u.status=_.status,u.code=c.code,u}return _.json()}async function h0(n,r){let i=await fetch(rn+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Rename failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function p0(n,r){let i=await fetch(rn+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Move failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function v0(n){let r=`/workspace/file?path=${encodeURIComponent(n||"")}`;return q(r,{method:"DELETE"})}async function k0(n,r=!1){return q("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(r)})})}function ic(n,r={}){let i=new URLSearchParams({path:String(n||"")});if(r.download)i.set("download","1");return`${rn}/workspace/raw?${i.toString()}`}function K0(n){return ic(n,{download:!0})}function B0(n,r=!1){let i=`path=${encodeURIComponent(n||"")}&show_hidden=${r?"1":"0"}`;return`${rn}/workspace/download?${i}`}class _c{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,r,i={}){this.onEvent=n,this.onStatusChange=r,this.chatJid=typeof i?.chatJid==="string"&&i.chatJid.trim()?i.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(rn+"/sse/stream"+n);let r=(i)=>{this.eventSource.addEventListener(i,(_)=>{this.markActivity(),this.onEvent(i,JSON.parse(_.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),r("new_post"),r("new_reply"),r("agent_response"),r("interaction_updated"),r("interaction_deleted"),r("agent_status"),r("agent_steer_queued"),r("agent_followup_queued"),r("agent_followup_consumed"),r("agent_followup_removed"),r("workspace_update"),r("agent_draft"),r("agent_draft_delta"),r("agent_thought"),r("agent_thought_delta"),r("model_changed"),r("ui_theme"),r("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(r)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,r=60000,i=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,i+r),this.reconnectAttempts=0;let _=Math.max(this.cooldownUntil-i,0),c=Math.max(this.reconnectDelay,_);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},c),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}async function z0(n,r,i){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return q(`/post/${n}/annotations${_}`,{method:"PATCH",body:JSON.stringify({annotations:r})})}var rn="",pi,vi=1073741824,$0=8388608;var Bn=O(()=>{m_();pi=new Map});function W0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(Mr,{detail:{enabled:Boolean(n)}}))}function fc(n){if(typeof fetch!=="function")return;Ri({ui_meters:n}).catch((r)=>{console.debug("[meters] Failed to persist meters UI state.",r)})}function j0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(H0,{detail:{collapsed:Boolean(n)}}))}function Xi(n=!1){return $i(cc,n)}function El(n=!1){return $i(uc,n)}function Qr(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)ln(cc,c?"true":"false");if(_)fc({enabled:c});return W0(c),c}function R0(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)ln(uc,c?"true":"false");if(_)fc({collapsed:c});return j0(c),c}function Sl(n){let r=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")Qr(Boolean(n.enabled),{persistServer:!1});else if(r==="toggle"){let i=!Xi(!1);Qr(i,{persistServer:!1})}if(typeof n?.collapsed==="boolean")R0(Boolean(n.collapsed),{persistServer:!1})}var cc="piclaw_system_meters_enabled",uc="piclaw_system_meters_collapsed",Mr="piclaw-meters-change",H0="piclaw-meters-collapsed-change";var sc=O(()=>{Bn()});function lc(n,r){if(n===""||n===null||n===void 0)return r;let i=Number(n);return Number.isFinite(i)?i:r}function oc(n,{min:r=-1/0,max:i=1/0}={}){let _=Number.isFinite(Number(r))?Number(r):-1/0,c=Number.isFinite(Number(i))?Number(i):1/0;return Math.min(c,Math.max(_,Number(n)))}function En(n,{fallback:r=0,min:i=-1/0,max:_=1/0}={}){let c=lc(n,r);return oc(c,{min:i,max:_})}function U0(n,{direction:r=1,step:i=1,fallback:_=0,min:c=-1/0,max:u=1/0}={}){let f=En(n,{fallback:_,min:c,max:u}),l=Math.abs(lc(i,1))||1,g=Number(r)<0?-1:1;return oc(f+g*l,{min:c,max:u})}function nn({value:n,min:r,max:i,step:_=1,fallback:c,width:u="80px",disabled:f=!1,label:l,onChange:g}){let o=Number.isFinite(Number(c))?Number(c):En(n,{fallback:0,min:r,max:i}),[x,$]=w(String(n??o)),p=C(!1);Q(()=>{if(!p.current)$(String(n??o))},[n,o]);let b=U((k)=>{p.current=!1;let t=En(k,{fallback:o,min:r,max:i});$(String(t)),g?.(t)},[o,r,i,g]),v=U((k)=>{p.current=!1;let t=U0(n,{direction:k,step:_,fallback:o,min:r,max:i});$(String(t)),g?.(t)},[o,i,r,g,_,n]);return s`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${l||"value"}`}
                title=${`Decrease ${l||"value"}`}
                disabled=${f}
                onClick=${()=>v(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${x}
                disabled=${f}
                style=${`width:${u}`}
                onInput=${(k)=>{p.current=!0,$(k.target.value)}}
                onBlur=${(k)=>b(k.target.value)}
                onKeyDown=${(k)=>{if(k.key==="Enter")k.preventDefault(),b(k.target.value),k.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${l||"value"}`}
                title=${`Increase ${l||"value"}`}
                disabled=${f}
                onClick=${()=>v(1)}
            >+</button>
        </span>
    `}var Sn=O(()=>{e()});function $c(n){let r=String(n||"").trim();if(!r)return"";if(r.startsWith("http://")||r.startsWith("https://")||r.startsWith("data:")||r.startsWith("blob:"))return r;if(r.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(r.slice(11))}`;if(r.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(r))return"";if(r.startsWith("\\\\"))return"";if(r.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(r.replace(/^\.\//,""))}`}function gc({value:n,onChange:r}){let i=C(null),[_,c]=w($c(n));Q(()=>{c($c(n))},[n]);let u=U((f)=>{let l=f.target.files?.[0];if(!l)return;let g=new FileReader;g.onload=()=>{let o=g.result;c(o),r?.(o)},g.readAsDataURL(l)},[r]);return s`
        <div class="settings-avatar-inline" onClick=${()=>i.current?.click()} title="Click to upload">
            ${_?s`<img src=${_} alt="avatar" />`:s`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${i} style="display:none" onChange=${u} />
        </div>
    `}function wc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function T0(n,r={}){let i=typeof n==="string"?n:"";if(!i)return!1;let _=r.navigator??(typeof navigator<"u"?navigator:null),c=r.document??(typeof document<"u"?document:null);if(_?.clipboard?.writeText)try{return await _.clipboard.writeText(i),!0}catch(u){}try{if(!c?.body||typeof c.createElement!=="function"||typeof c.execCommand!=="function")return!1;let u=c.createElement("textarea");u.value=i,u.setAttribute?.("readonly",""),u.style.position="fixed",u.style.left="-9999px",u.style.top="0",u.style.opacity="0",c.body.appendChild(u),u.focus?.(),u.select?.();let f=Boolean(c.execCommand("copy"));return c.body.removeChild(u),f}catch(u){return!1}}function Qi({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(""),[u,f]=w(""),[l,g]=w(""),[o,x]=w(""),[$,p]=w(32),[b,v]=w(256),[k,t]=w(""),[h,F]=w(!1),[N,K]=w(!1),[j,B]=w(!1),[T,P]=w(()=>Xi(!1)),[y,H]=w(!1),D=C(""),W=C(null),G=C(!0);Q(()=>{return G.current=!0,()=>{G.current=!1}},[]);let Z=U((J)=>{let X=wc(J);c(X.userName),f(X.userAvatar),g(X.assistantName),x(X.assistantAvatar),p(X.composeUploadLimitMb),v(X.workspaceUploadLimitMb),t(J?.widgetToken||""),D.current=JSON.stringify(X)},[]);Q(()=>{Z(n||{})},[n,Z]),Q(()=>{let J=(X)=>{P(Boolean(X?.detail?.enabled))};return window.addEventListener(Mr,J),()=>window.removeEventListener(Mr,J)},[]);let z=L(()=>JSON.stringify(wc({userName:_,userAvatar:u,assistantName:l,assistantAvatar:o,composeUploadLimitMb:$,workspaceUploadLimitMb:b})),[_,u,l,o,$,b]);Q(()=>{if(z===D.current)return;if(W.current)clearTimeout(W.current);return W.current=setTimeout(async()=>{if(!G.current)return;let J=document.activeElement;if(J&&J.closest?.(".settings-number-stepper"))return;try{let X=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:z}),I=await X.json().catch(()=>({}));if(!G.current)return;if(!X.ok||!I?.ok||!I?.settings)return;D.current=z,i?.(I.settings),H(!0),setTimeout(()=>{if(G.current)H(!1)},4000)}catch(X){console.warn("[settings/general] Failed to persist general settings snapshot.",X)}},800),()=>{if(W.current)clearTimeout(W.current)}},[z,i]);let M=n?.instanceTotp||{configured:!1,issuer:l||"Piclaw",label:_?`${l||"Piclaw"}:${_}`:l||"Piclaw",secret:"",otpauth:"",qrSvg:""},Y=U(async()=>{if(!k)return;if(await T0(k))K(!0),setTimeout(()=>{if(G.current)K(!1)},3000);else r?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[k,r]),E=U(async()=>{if(j)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;B(!0);try{let J=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),X=await J.json().catch(()=>({}));if(!J.ok||!X?.ok||!X?.settings)throw Error(X?.error||"Failed to regenerate widget token.");t(X.settings.widgetToken||""),i?.(X.settings),H(!0),setTimeout(()=>{if(G.current)H(!1)},4000)}catch(J){console.warn("[settings/general] Failed to regenerate widget token.",J)}finally{if(G.current)B(!1)}},[j,i]),cn=typeof window<"u"&&window.isSecureContext,on=k?"•".repeat(Math.min(Math.max(k.length,16),48)):"—",yn=h?k||"—":on;return s`
        <div class="settings-section">
            ${y&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${gc} value=${u} onChange=${f} />
                <input type="text" value=${_} onInput=${(J)=>c(J.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${gc} value=${o} onChange=${x} />
                <input type="text" value=${l} onInput=${(J)=>g(J.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${cn?s`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:s`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0; color: var(--error-color, #e55)">
                            ⚠ Not available — requires a secure context (HTTPS or localhost).
                            Access via SSH tunnel or reverse proxy with TLS to enable.
                        </span>
                    </div>
                </div>
            `}

            <h3 style="margin-top:20px">Display</h3>
            <div class="settings-row">
                <label>System meters</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${T}
                        onChange=${()=>{let J=Qr(!T);P(J)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${nn}
                    label="compose upload limit"
                    value=${$}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${p}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${nn}
                    label="workspace upload limit"
                    value=${b}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${v}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>Widget bearer token</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">Token</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${yn}</code>
                        <button class=${`settings-keychain-reveal-btn${h?" active":""}`}
                            type="button"
                            onClick=${()=>F((J)=>!J)}
                            disabled=${!k}
                            title=${h?"Hide token":"Reveal token"}>
                            ${h?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${Y} disabled=${!k} title="Copy token">
                            ${N?s`<span class="settings-widget-token-copied">Copied</span>`:s`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${E} disabled=${j}>${j?"Regenerating…":"Regenerate"}</button>
                    </div>
                </div>
                <span class="settings-hint" style="margin:6px 0 0 0;">
                    Read-only token for <code>GET /api/state</code> and <code>GET /api/state/events</code>. Use as <code>Authorization: Bearer …</code>.
                </span>
            </div>
            <div class="settings-totp-panel">
                <div class="settings-totp-header">
                    <div>
                        <strong>TOTP setup QR</strong>
                        <div class="settings-hint" style="margin:6px 0 0 0;">
                            ${M.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${M.configured?s`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:M.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${M.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${M.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${M.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var yc=O(()=>{e();sc();Sn()});var xc={};fn(xc,{SessionsSection:()=>G0});function tc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function G0({settingsData:n,setStatus:r,mergeSettingsData:i}){let{t:_}=_n(),[c,u]=w(!0),[f,l]=w(16),[g,o]=w(4000),[x,$]=w(3),[p,b]=w(64),[v,k]=w("none"),[t,h]=w(!1),F=C(""),N=C(null),K=C(!0);Q(()=>{return K.current=!0,()=>{K.current=!1}},[]);let j=U((T)=>{let P=tc(T);u(P.sessionAutoRotate),l(P.sessionMaxSizeMb),o(P.sessionMaxLines),$(P.sessionMaxCompactions),b(P.toolUseBudget),k(P.sessionIsolation),F.current=JSON.stringify(P)},[]);Q(()=>{j(n||{})},[n,j]);let B=L(()=>JSON.stringify(tc({sessionAutoRotate:c,sessionMaxSizeMb:f,sessionMaxLines:g,sessionMaxCompactions:x,toolUseBudget:p,sessionIsolation:v})),[c,f,g,x,p,v]);return Q(()=>{if(B===F.current)return;if(N.current)clearTimeout(N.current);return N.current=setTimeout(async()=>{if(!K.current)return;let T=document.activeElement;if(T&&T.closest?.(".settings-number-stepper"))return;try{let P=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:B}),y=await P.json().catch(()=>({}));if(!K.current)return;if(!P.ok||!y?.ok||!y?.settings)return;F.current=B,i?.(y.settings),h(!0),setTimeout(()=>{if(K.current)h(!1)},4000)}catch(P){console.warn("[settings/sessions] Failed to persist session settings.",P)}},800),()=>{if(N.current)clearTimeout(N.current)}},[B,i]),s`
        <div class="settings-section">
            ${t&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.appliedNotice")}
                </div>
            `}
            <h3>${_("settings.sessions.lifecycle")}</h3>
            <div class="settings-row">
                <label>${_("settings.sessions.autoRotate")}</label>
                <input type="checkbox" checked=${c} onChange=${(T)=>u(T.target.checked)} />
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
                    onChange=${l}
                />
            </div>

            <h3 style="margin-top:20px">${_("settings.sessions.agentBehaviour")}</h3>
            <div class="settings-row">
                <label>${_("settings.sessions.toolBudget")}</label>
                <${nn}
                    label=${_("settings.sessions.toolBudgetAria")}
                    value=${p}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${b}
                />
                <span class="settings-hint" style="margin:0">${_("settings.sessions.toolBudgetHint")}</span>
            </div>
            <div class="settings-row">
                <label>${_("settings.sessions.isolation")}</label>
                <select value=${v} onChange=${(T)=>k(T.target.value)}>
                    <option value="none">${_("settings.sessions.isolationNone")}</option>
                    <option value="summary">${_("settings.sessions.isolationSummary")}</option>
                    <option value="full">${_("settings.sessions.isolationFull")}</option>
                </select>
            </div>
        </div>
    `}var bc=O(()=>{e();Sn();bn()});var hc={};fn(hc,{__recordingsSettingsTest:()=>X0,RecordingsSection:()=>N0});function Ar(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Mi(n){if(n==="full")return"full / trusted";if(n==="metadata")return"metadata only";return"redacted"}function qr({children:n,type:r="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function P0(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function gr(n){return String(n||"").split(`
`).map((r)=>r.trim()).filter(Boolean)}function V0({recording:n,details:r,onDelete:i,onRefresh:_}){if(!n)return s`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let c=r?.meta||n,u=Array.isArray(r?.events)?r.events:[],f=u.reduce((g,o)=>g+(Array.isArray(o.redactions)?o.redactions.length:0),0),l=u.reduce((g,o)=>{let x=o.kind||"event";return g[x]=(g[x]||0)+1,g},{});return s`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${c.title||c.id}</h4>
                    <code>${c.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(Wi(c.id),"_blank","noopener,noreferrer")}>Playback</button>
                    <button onClick=${_}>Refresh</button>
                    <button class="danger" onClick=${()=>i(c)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${c.status||"—"}</strong>
                <span>Mode</span><strong>${Mi(c.mode)}</strong>
                <span>Chat</span><code>${c.chatJid||"—"}</code>
                <span>Started</span><strong>${Ar(c.startedAt)}</strong>
                <span>Ended</span><strong>${Ar(c.endedAt)}</strong>
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
                    ${Object.entries(l).map(([g,o])=>s`<${qr}>${g}: ${o}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(u.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function N0({filter:n="",setStatus:r}){let[i,_]=w([]),[c,u]=w([]),[f,l]=w(!0),[g,o]=w(null),[x,$]=w(null),[p,b]=w(null),[v,k]=w(!1),[t,h]=w(P0),[F,N]=w(""),[K,j]=w("redacted"),[B,T]=w(!0),[P,y]=w(""),[H,D]=w(""),[W,G]=w('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[Z,z]=w(null);Q(()=>{let V=(m)=>{let sn=String(m?.detail?.chatJid||"").trim();if(sn)h(sn)};return window.addEventListener("piclaw:current-chat-changed",V),()=>window.removeEventListener("piclaw:current-chat-changed",V)},[]);let M=U(async(V=x)=>{l(!0),o(null);try{let m=await Bi(),sn=m.recordings||[];_(sn),u(m.active||[]);let Hn=sn.find((R)=>R.id===V)||sn[0]||null;if($(Hn?.id||null),Hn?.id)b(await Nr(Hn.id));else b(null)}catch(m){o(m?.message||"Failed to load recordings.")}finally{l(!1)}},[x]);Q(()=>{M()},[M]);let Y=L(()=>i.find((V)=>V.id===x)||null,[i,x]),E=L(()=>c.find((V)=>V.chatJid===t)||null,[c,t]),cn=String(n||"").trim().toLowerCase(),on=L(()=>{if(!cn)return i;return i.filter((V)=>[V.id,V.title,V.chatJid,V.status,V.mode].some((m)=>String(m||"").toLowerCase().includes(cn)))},[i,cn]),yn=U(async(V)=>{if($(V?.id||null),b(null),!V?.id)return;try{b(await Nr(V.id))}catch(m){r?.(m?.message||"Failed to load recording.","error")}},[r]),J=U(async()=>{if(v)return;k(!0);try{let V={keys:gr(P),patterns:gr(H)},m=await zi({chat_jid:t,title:F||void 0,mode:K,include_timeline_snapshot:B,timeline_snapshot_limit:80,redaction:V});r?.(`Recording started for ${t}.`,"success"),await M(m?.recording?.id)}catch(V){r?.(V?.message||"Failed to start recording.","error")}finally{k(!1)}},[v,t,P,H,B,M,K,r,F]),X=U(async(V=E)=>{if(!V||v)return;k(!0);try{let m=await Fi({id:V.id});r?.(`Recording stopped for ${V.chatJid}.`,"success"),await M(m?.recording?.id)}catch(m){r?.(m?.message||"Failed to stop recording.","error")}finally{k(!1)}},[v,E,M,r]),I=U(async(V)=>{if(!V||v)return;if(!window.confirm(`Delete recording ${V.id}?

${V.title||""}`))return;k(!0);try{await Hi(V.id),r?.("Recording deleted.","success"),await M(null)}catch(m){r?.(m?.message||"Failed to delete recording.","error")}finally{k(!1)}},[v,M,r]),xn=U(async()=>{try{let V=JSON.parse(W||"null"),m=await ji(V,{mode:K,redaction:{keys:gr(P),patterns:gr(H)}});z(m.preview)}catch(V){z({error:V?.message||"Preview failed."})}},[P,H,K,W]);return s`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${t} onInput=${(V)=>h(V.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${F} onInput=${(V)=>N(V.target.value)} /></label>
                    <label>Mode<select value=${K} onChange=${(V)=>j(V.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${B} onChange=${(V)=>T(V.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${P} onInput=${(V)=>y(V.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${H} onInput=${(V)=>D(V.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${E?s`<button onClick=${()=>X(E)} disabled=${v}>Stop current chat recording</button>`:s`<button onClick=${J} disabled=${v}>Start recording</button>`}
                    <button onClick=${()=>M()} disabled=${f}>Refresh</button>
                </div>
                ${c.length>0&&s`<div class="settings-recording-active-row">${c.map((V)=>s`<${qr} type="active">REC ${V.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${W} onInput=${(V)=>G(V.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${xn}>Preview redaction</button></div>
                ${Z&&s`<pre>${JSON.stringify(Z,null,2)}</pre>`}
            </details>

            ${f&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${g&&s`<div class="settings-error-state">${g}</div>`}
            ${!f&&!g&&i.length===0&&s`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!f&&!g&&i.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${on.map((V)=>s`
                            <button class=${`settings-task-row ${V.id===x?"active":""}`} onClick=${()=>yn(V)}>
                                <span class="settings-task-row-main"><strong>${V.title||V.id}</strong><span>${V.chatJid} · ${Ar(V.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${qr} type=${V.status==="recording"?"active":"completed"}>${V.status}<//><${qr}>${Mi(V.mode)}<//></span>
                                <span class="settings-task-row-times">${V.eventCount||0} events</span>
                            </button>
                        `)}
                        ${on.length===0&&s`<p class="settings-hint">No recordings match “${n}”.</p>`}
                    </div>
                    <${V0} recording=${Y} details=${p} onDelete=${I} onRefresh=${()=>Y&&yn(Y)} />
                </div>
            `}
        </div>
    `}var X0;var pc=O(()=>{e();Bn();X0={formatDateTime:Ar,modeLabel:Mi,parseList:gr}});var vc={};fn(vc,{CompactionSection:()=>M0});function Q0(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),toolResultSemanticSummaryEnabled:Boolean(n.toolResultSemanticSummaryEnabled??!0),toolResultSemanticSummaryMaxInputChars:n.toolResultSemanticSummaryMaxInputChars??12000,toolResultSemanticSummaryMaxTokens:n.toolResultSemanticSummaryMaxTokens??320,toolResultSemanticSummaryTimeoutSec:n.toolResultSemanticSummaryTimeoutSec??12,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function qi(n){let r=String(n||"").trim();if(!r)return"—";let i=new Date(r);if(Number.isNaN(i.getTime()))return r;return i.toLocaleString()}function M0({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(180),[u,f]=w(15),[l,g]=w(360),[o,x]=w(75),[$,p]=w(0.5),[b,v]=w(!0),[k,t]=w(!0),[h,F]=w(12000),[N,K]=w(320),[j,B]=w(12),[T,P]=w(!1),[y,H]=w(120),[D,W]=w([]),[G,Z]=w([]),[z,M]=w(!1),Y=C(""),E=C(null),cn=C(!0);Q(()=>{return cn.current=!0,()=>{cn.current=!1}},[]);let on=U((X)=>{let I=Q0(X);c(I.compactionTimeoutSec),f(I.compactionBackoffBaseMin),g(I.compactionBackoffMaxMin),x(I.compactionThresholdPercent),p(I.compactionBackoffDecayFactor),v(I.toolResultCompactionEnabled),t(I.toolResultSemanticSummaryEnabled),F(I.toolResultSemanticSummaryMaxInputChars),K(I.toolResultSemanticSummaryMaxTokens),B(I.toolResultSemanticSummaryTimeoutSec),P(I.progressWatchdogEnabled),H(I.progressWatchdogTimeoutSec),W(I.compactionBackoffs),Z(I.progressWatchdogPhases),Y.current=JSON.stringify({compactionTimeoutSec:I.compactionTimeoutSec,compactionBackoffBaseMin:I.compactionBackoffBaseMin,compactionBackoffMaxMin:I.compactionBackoffMaxMin,compactionThresholdPercent:I.compactionThresholdPercent,compactionBackoffDecayFactor:I.compactionBackoffDecayFactor,toolResultCompactionEnabled:I.toolResultCompactionEnabled,toolResultSemanticSummaryEnabled:I.toolResultSemanticSummaryEnabled,toolResultSemanticSummaryMaxInputChars:I.toolResultSemanticSummaryMaxInputChars,toolResultSemanticSummaryMaxTokens:I.toolResultSemanticSummaryMaxTokens,toolResultSemanticSummaryTimeoutSec:I.toolResultSemanticSummaryTimeoutSec,progressWatchdogEnabled:I.progressWatchdogEnabled,progressWatchdogTimeoutSec:I.progressWatchdogTimeoutSec})},[]);Q(()=>{on(n||{})},[n,on]);let yn=L(()=>JSON.stringify({compactionTimeoutSec:_,compactionBackoffBaseMin:u,compactionBackoffMaxMin:l,compactionThresholdPercent:o,compactionBackoffDecayFactor:$,toolResultCompactionEnabled:b,toolResultSemanticSummaryEnabled:k,toolResultSemanticSummaryMaxInputChars:h,toolResultSemanticSummaryMaxTokens:N,toolResultSemanticSummaryTimeoutSec:j,progressWatchdogEnabled:T,progressWatchdogTimeoutSec:y}),[_,u,l,o,$,b,k,h,N,j,T,y]);Q(()=>{if(yn===Y.current)return;if(E.current)clearTimeout(E.current);return E.current=setTimeout(async()=>{if(!cn.current)return;try{r?.("Saving compaction settings…","info");let X=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:yn}),I=await X.json().catch(()=>({}));if(!cn.current)return;if(!X.ok||!I?.ok||!I?.settings){r?.(I?.error||"Failed to save compaction settings.","error");return}Y.current=yn,i?.(I.settings),on({...n||{},...I.settings||{}}),r?.("Compaction settings saved.","success"),M(!0),setTimeout(()=>{if(cn.current)M(!1),r?.(null)},4000)}catch(X){if(console.warn("[settings/compaction] Failed to persist compaction settings.",X),cn.current)r?.("Failed to save compaction settings.","error")}},800),()=>{if(E.current)clearTimeout(E.current)}},[yn,i,r,on,n]);let J=U(async(X)=>{try{r?.(`Clearing compaction suppression for ${X}…`,"info");let I=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:X})}),xn=await I.json().catch(()=>({}));if(!I.ok||!xn?.ok||!xn?.settings){r?.(xn?.error||"Failed to clear compaction suppression.","error");return}i?.(xn.settings),on({...n||{},...xn.settings||{}}),r?.(`Cleared compaction suppression for ${X}.`,"success")}catch(I){console.warn("[settings/compaction] Failed to clear compaction suppression.",I),r?.("Failed to clear compaction suppression.","error")}},[on,i,r,n]);return s`
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
                    <input type="checkbox" checked=${b} onChange=${(X)=>v(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">When disabled, large tool results stay inline and are not externalized into searchable tool-output handles.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summaries for compacted tool results</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${k} onChange=${(X)=>t(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">When enabled, compacted outputs include a semantic summary generated with the active model (preview fallback on failure).</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summary input limit (chars)</label>
                <${nn}
                    label="semantic summary input limit"
                    value=${h}
                    min=${500}
                    max=${200000}
                    fallback=${12000}
                    width="100px"
                    disabled=${!k}
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">Maximum characters sampled from full tool output for semantic summarization.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary output max tokens</label>
                <${nn}
                    label="semantic summary max tokens"
                    value=${N}
                    min=${64}
                    max=${4096}
                    fallback=${320}
                    width="90px"
                    disabled=${!k}
                    onChange=${K}
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
                    onChange=${B}
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
                    value=${l}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${g}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${nn}
                    label="backoff decay factor"
                    value=${Math.round($*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(X)=>p(X/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${T} onChange=${(X)=>P(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${nn}
                    label="watchdog timeout"
                    value=${y}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!T}
                    onChange=${H}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${D.length===0?s`
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
                            ${D.map((X)=>s`
                                <tr>
                                    <td><code>${X.chatJid}</code></td>
                                    <td>${X.failureCount}</td>
                                    <td>${qi(X.backoffUntil)}</td>
                                    <td title=${X.lastErrorMessage||""}>${X.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>J(X.chatJid)}>
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
            ${G.length===0?s`
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
                            ${G.map((X)=>s`
                                <tr>
                                    <td><code>${X.chatJid}</code></td>
                                    <td>${X.phase}</td>
                                    <td>${qi(X.startedAt)}</td>
                                    <td>${qi(X.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var kc=O(()=>{e();Sn()});function Bc(n){let r=String(n||"").trim().toLowerCase();if(!r)return null;let i=D0[r]||r;if(/^f(?:[1-9]|1[0-2])$/.test(i))return i;if(Z0.has(i))return i;if(i.length===1)return i;if(/^[a-z0-9]+$/.test(i))return i;return null}function dn(n){let r=String(n||"").trim();if(!r)return null;let i=r.split("+").map((u)=>u.trim()).filter(Boolean);if(!i.length)return null;let _={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let u of i){let f=u.toLowerCase(),l=A0[f];if(l){_[l]=!0;continue}if(_.key)return null;let g=Bc(u);if(!g||g==="escape")return null;_.key=g}if(!_.key)return null;let c=[];if(_.ctrl)c.push("ctrl");if(_.meta)c.push("meta");if(_.alt)c.push("alt");if(_.shift)c.push("shift");return c.push(_.key),c.join("+")}function zc(n){return String(n||"").split(/[\n,]/).map((r)=>dn(r)).filter((r)=>Boolean(r))}function Un(n){return n.join(", ")}function Di(){let n=Q_(Kc);if(!n||typeof n!=="object")return{};let r={};for(let i of wr){let _=n[i.id];if(!Array.isArray(_))continue;let c=_.map((u)=>dn(String(u||""))).filter((u)=>Boolean(u));r[i.id]=[...new Set(c)]}return r}function Ai(n){if(ln(Kc,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function Fc(n){return q0.get(n)}function yr(n){let r=Di()[n];if(Array.isArray(r))return r;return[...Fc(n).defaultBindings]}function Hc(n,r){let i=Di(),_=Fc(n).defaultBindings,c=[...new Set(r.map((u)=>dn(u)).filter((u)=>Boolean(u)))];if(c.length===_.length&&c.every((u,f)=>u===_[f]))delete i[n];else i[n]=c;Ai(i)}function Zi(n){if(!n){Ai({});return}let r=Di();delete r[n],Ai(r)}function Dr(){let n={};for(let r of wr)n[r.id]=yr(r.id);return n}function I0(n){let r=typeof n==="string"?n:"";if(!r)return"";if(r.length===1)return r.toLowerCase();return Bc(r)||r.toLowerCase()}function L0(n){let r=dn(n);if(!r)return null;let i={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let _ of r.split("+")){if(_==="ctrl"||_==="meta"||_==="alt"||_==="shift"){i[_]=!0;continue}i.key=_}return i.key?i:null}function Y0(n,r){let i=L0(r);if(!i)return!1;if(I0(n?.key)!==i.key)return!1;let c=!i.shift&&i.key.length===1&&/[^a-z0-9]/i.test(i.key);return Boolean(n?.ctrlKey)===i.ctrl&&Boolean(n?.metaKey)===i.meta&&Boolean(n?.altKey)===i.alt&&(c||Boolean(n?.shiftKey)===i.shift)}function go(n,r){return yr(r).some((i)=>Y0(n,i))}var Kc="piclaw_keyboard_shortcuts_v1",wr,q0,A0,D0,Z0;var Wc=O(()=>{wr=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],q0=new Map(wr.map((n)=>[n.id,n])),A0={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},D0={esc:"escape",return:"enter",spacebar:"space"},Z0=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var jc={};fn(jc,{KeyboardSection:()=>O0});function C0(n,r,i){let _=String(n||"").trim().toLowerCase();if(!_)return!0;return[r.label,r.description,i,...r.defaultBindings||[]].some((c)=>String(c||"").toLowerCase().includes(_))}function O0({filter:n="",setStatus:r}){let{t:i}=_n(),[_,c]=w(()=>{let o=Dr();return Object.fromEntries(Object.entries(o).map(([x,$])=>[x,Un($)]))});Q(()=>{let o=()=>{let x=Dr();c(Object.fromEntries(Object.entries(x).map(([$,p])=>[$,Un(p)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",o),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",o)},[]);let u=L(()=>wr.filter((o)=>{let x=String(_[o.id]||"");return C0(n,o,x)}),[_,n]),f=(o)=>{let x=String(_[o]||"").trim(),p=(x?x.split(/[\n,]/).map((v)=>v.trim()).filter(Boolean):[]).filter((v)=>!dn(v));if(p.length>0){r?.(i("settings.keyboard.invalidShortcut",{token:p[0]}),"error");return}let b=zc(x);Hc(o,b),c((v)=>({...v,[o]:Un(yr(o))})),r?.(i("settings.keyboard.saved"),"success")},l=(o)=>{Zi(o),c((x)=>({...x,[o]:Un(yr(o))})),r?.(i("settings.keyboard.resetOne"),"success")},g=()=>{Zi();let o=Dr();c(Object.fromEntries(Object.entries(o).map(([x,$])=>[x,Un($)]))),r?.(i("settings.keyboard.resetAllDone"),"success")};return s`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${g}>${i("settings.keyboard.resetAll")}</button>
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
                                onInput=${(x)=>c(($)=>({...$,[o.id]:x.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>f(o.id)}>${i("settings.keyboard.save")}</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>l(o.id)}>${i("settings.keyboard.defaultBtn")}</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${u.length===0&&s`<div class="settings-hint">${i("settings.keyboard.noMatch")}</div>`}
            </div>
        </div>
    `}var Rc=O(()=>{e();Wc();bn()});function Gc(n,r=Ii){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(300,Math.max(15,Math.round(i)))}function Pc(n,r=Li){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(8,Math.max(0,Math.round(i)))}function Yi(){return{refreshIntervalSec:Gc(gi(Uc,Ii),Ii),folderPreviewDepth:Pc(gi(Tc,Li),Li)}}function Vc(n={}){let r=Yi(),i={refreshIntervalSec:Gc(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:r.refreshIntervalSec,r.refreshIntervalSec),folderPreviewDepth:Pc(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:r.folderPreviewDepth,r.folderPreviewDepth)};if(ln(Uc,String(i.refreshIntervalSec)),ln(Tc,String(i.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(J0,{detail:{settings:i}}));return i}var J0="piclaw:workspace-client-settings-updated",Uc="workspaceRefreshIntervalSec",Tc="workspaceFolderPreviewDepth",Ii=60,Li=3;var Nc=()=>{};var Qc={};fn(Qc,{WorkspaceSection:()=>E0});function Xc(n={}){let r=n.workspaceSettings||{};return{webTerminalEnabled:r.webTerminalEnabled!==!1,vncAllowDirect:r.vncAllowDirect!==!1,treeMaxDepth:r.treeMaxDepth??4,treeMaxEntries:r.treeMaxEntries??5000}}function E0({settingsData:n,setStatus:r,mergeSettingsData:i}){let{t:_}=_n(),[c,u]=w(!0),[f,l]=w(!0),[g,o]=w(4),[x,$]=w(5000),[p,b]=w(60),[v,k]=w(3),[t,h]=w(!1),[F,N]=w(!1),K=C(""),j=C(null),B=C(null),T=C(null),P=C(!0);Q(()=>{return P.current=!0,()=>{if(P.current=!1,j.current)clearTimeout(j.current);if(B.current)clearTimeout(B.current);if(T.current)clearTimeout(T.current)}},[]);let y=U((W)=>{let G=Xc(W),Z=Yi();u(G.webTerminalEnabled),l(G.vncAllowDirect),o(G.treeMaxDepth),$(G.treeMaxEntries),b(Z.refreshIntervalSec),k(Z.folderPreviewDepth),K.current=JSON.stringify(G)},[]);Q(()=>{y(n||{})},[n,y]);let H=L(()=>JSON.stringify(Xc({workspaceSettings:{webTerminalEnabled:c,vncAllowDirect:f,treeMaxDepth:g,treeMaxEntries:x}})),[c,f,g,x]);Q(()=>{if(H===K.current)return;if(j.current)clearTimeout(j.current);return j.current=setTimeout(async()=>{if(!P.current)return;let W=document.activeElement;if(W&&W.closest?.(".settings-number-stepper"))return;try{let G=await Pi(JSON.parse(H));if(!P.current||!G?.ok||!G?.settings)return;if(K.current=H,i?.({workspaceSettings:G.settings}),r?.(null),h(!0),B.current)clearTimeout(B.current);B.current=setTimeout(()=>{if(P.current)h(!1)},4000)}catch(G){r?.(String(G?.message||G),"error")}},800),()=>{if(j.current)clearTimeout(j.current)}},[H,i,r]);let D=U((W)=>{let G=Vc(W);if(b(G.refreshIntervalSec),k(G.folderPreviewDepth),N(!0),T.current)clearTimeout(T.current);T.current=setTimeout(()=>{if(P.current)N(!1)},3000)},[]);return s`
        <div class="settings-section">
            ${t&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.workspace.serverApplied")}
                </div>
            `}
            ${F&&s`
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
                <input type="checkbox" checked=${f} onChange=${(W)=>l(W.target.checked)} />
            </div>
            <p class="settings-hint">${_("settings.workspace.accessHint")}</p>

            <h3 style="margin-top:20px">${_("settings.workspace.guardrails")}</h3>
            <div class="settings-row">
                <label>${_("settings.workspace.maxDepth")}</label>
                <${nn}
                    label=${_("settings.workspace.maxDepthAria")}
                    value=${g}
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
                    onChange=${$}
                />
                <span class="settings-hint" style="margin:0">${_("settings.workspace.maxEntriesHint")}</span>
            </div>

            <h3 style="margin-top:20px">${_("settings.workspace.thisBrowser")}</h3>
            <div class="settings-row">
                <label>${_("settings.workspace.refreshInterval")}</label>
                <${nn}
                    label=${_("settings.workspace.refreshIntervalAria")}
                    value=${p}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(W)=>D({refreshIntervalSec:W})}
                />
            </div>
            <div class="settings-row">
                <label>${_("settings.workspace.folderDepth")}</label>
                <${nn}
                    label=${_("settings.workspace.folderDepthAria")}
                    value=${v}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(W)=>D({folderPreviewDepth:W})}
                />
                <span class="settings-hint" style="margin:0">${_("settings.workspace.folderDepthHintPre")} <code>0</code> ${_("settings.workspace.folderDepthHintPost")}</span>
            </div>
            <p class="settings-hint">${_("settings.workspace.footerHint")}</p>
        </div>
    `}var Mc=O(()=>{e();Bn();Nc();Sn();bn()});var qc={};fn(qc,{EnvironmentSection:()=>S0});function Ci(n={}){let r=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(r.variables)?r.variables:[],overrides:r.overrides&&typeof r.overrides==="object"?r.overrides:{},count:Number(r.count||0),overrideCount:Number(r.overrideCount||0),keychainEnvNames:Array.isArray(r.keychainEnvNames)?r.keychainEnvNames:[]}}function S0({settingsData:n,filter:r="",setStatus:i,mergeSettingsData:_}){let[c,u]=w(()=>Ci(n||{})),[f,l]=w({}),[g,o]=w(""),[x,$]=w(""),[p,b]=w(null);Q(()=>{u(Ci(n||{})),l({})},[n]);let v=U((K)=>{let j=Ci({environmentSettings:K?.settings||K});return u(j),_?.({environmentSettings:j}),l({}),j},[_]),k=U(async()=>{try{let K=await Vi();if(K?.ok)v(K.settings);i?.("Environment refreshed.","info")}catch(K){i?.(String(K?.message||K),"error")}},[v,i]),t=U(async(K,j)=>{let B=String(K||"").trim();if(!B)return;b(B);try{let T=await Xr({action:"set",name:B,value:String(j??"")});if(T?.ok)v(T.settings);if(i?.(`Saved environment override for ${B}.`,"info"),B===g.trim())o(""),$("")}catch(T){i?.(String(T?.message||T),"error")}finally{b(null)}},[v,g,i]),h=U(async(K)=>{let j=String(K||"").trim();if(!j)return;b(j);try{let B=await Xr({action:"clear",name:j});if(B?.ok)v(B.settings);i?.(`Cleared environment override for ${j}.`,"info")}catch(B){i?.(String(B?.message||B),"error")}finally{b(null)}},[v,i]),F=L(()=>{let K=String(r||"").trim().toLowerCase(),j=Array.isArray(c.variables)?c.variables:[];if(!K)return j;return j.filter((B)=>{return`${B?.name||""} ${B?.value||""} ${B?.source||""}`.toLowerCase().includes(K)})},[c.variables,r]),N=U((K,j)=>{l((B)=>({...B||{},[K]:j}))},[]);return s`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${k}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${g}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(K)=>o(K.target.value)}
                    />
                    <input
                        type="text"
                        value=${x}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(K)=>$(K.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!g.trim()||p===g.trim()}
                        onClick=${()=>t(g,x)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${c.count} variables visible • ${c.overrideCount} overrides active • ${c.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${F.map((K)=>{let j=String(K?.name||""),B=Object.prototype.hasOwnProperty.call(f,j)?f[j]:K.value,T=B!==K.value,P=p===j;return s`
                        <div class="settings-tool-row" key=${j} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${j}>${j}</span>
                            <input
                                type="text"
                                value=${B}
                                spellcheck="false"
                                onInput=${(y)=>N(j,y.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${K.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${K.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${P||!T} onClick=${()=>t(j,B)}>Save</button>
                                <button type="button" disabled=${P||!K.overridden} onClick=${()=>h(j)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${F.length===0&&s`<p class="settings-hint">No environment variables match "${r}".</p>`}
            </div>
        </div>
    `}var Ac=O(()=>{e();Bn()});var Dc={};fn(Dc,{ProvidersSection:()=>e0});function d0(n){switch(n){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function e0({providers:n,setStatus:r}){let[i,_]=w(null),[c,u]=w(null),[f,l]=w({}),g=U((t,h)=>{l((F)=>({...F,[t]:h}))},[]),o=U(async(t)=>{let h=(f.apiKey||"").trim();if(!h){r?.("API key cannot be empty.","error");return}_(t),r?.(`Configuring ${t}…`,"info");try{let F=JSON.stringify({provider:t,method:"api_key",api_key:h}),N=await Kn("default",`/login __step2 ${F}`,null,[]);if(N?.command?.status==="error"){r?.(N.command.message,"error");return}r?.(N?.command?.message||`${t} configured.`,"success"),u(null),l({})}catch(F){r?.(String(F.message||F),"error")}finally{_(null)}},[f,r]),x=U(async(t,h)=>{_(t),r?.(`Configuring ${t}…`,"info");try{let F={provider:t,method:"custom"};for(let j of h.customFields||[])F[j.key]=(f[j.key]||"").trim();let N=JSON.stringify(F),K=await Kn("default",`/login __step2 ${N}`,null,[]);if(K?.command?.status==="error"){r?.(K.command.message,"error");return}r?.(K?.command?.message||`${t} configured.`,"success"),u(null),l({})}catch(F){r?.(String(F.message||F),"error")}finally{_(null)}},[f,r]),$=U(async(t)=>{_(t),r?.(`Starting OAuth for ${t}…`,"info");try{let h=JSON.stringify({provider:t}),N=(await Kn("default",`/login __step1 ${h}`,null,[]))?.command?.message||"";if(N.includes("http")){let K=N.match(/(https?:\/\/[^\s)]+)/);if(K)window.open(K[1],"_blank","noopener"),r?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else r?.(N,"success")}else r?.(N||`OAuth flow started for ${t}. Check the chat.`,"success")}catch(h){r?.(String(h.message||h),"error")}finally{_(null)}},[r]),p=U(async(t)=>{if(i)return;_(t),r?.(`Logging out ${t}…`,"info");try{await Kn("default",`/logout ${t}`,null,[]),r?.(`Logged out ${t}. Restart may be needed.`,"success")}catch(h){r?.(String(h.message||h),"error")}finally{_(null)}},[i,r]),b=n||[],v=(t)=>c===t,k=(t)=>{u((h)=>h===t?null:t),l({})};return s`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${b.map((t)=>s`
                    <div class=${`settings-provider-card${t.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!t.configured&&k(t.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${t.name}</strong>
                                <span class="settings-provider-id">${t.id}</span>
                                ${t.configured&&s`<span class="settings-tag settings-tag-skill">${d0(t.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${t.hasOAuth&&s`<span class="settings-tag">OAuth</span>`}
                                ${t.hasApiKey&&s`<span class="settings-tag">API Key</span>`}
                                ${t.isCustom&&s`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${t.configured?s`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${i===t.id} onClick=${(h)=>{h.stopPropagation(),p(t.id)}}
                                    >${i===t.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${i===t.id} onClick=${(h)=>{h.stopPropagation(),k(t.id)}}
                                    >Reconfigure</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${i===t.id} onClick=${(h)=>{h.stopPropagation(),k(t.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${v(t.id)&&s`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${t.hasOAuth&&s`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${i===t.id}
                                            onClick=${()=>$(t.id)}>
                                            ${i===t.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${t.hasApiKey&&s`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${f.apiKey||""}
                                                onInput=${(h)=>g("apiKey",h.target.value)}
                                                placeholder=${t.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===t.id||!(f.apiKey||"").trim()}
                                                onClick=${()=>o(t.id)}>
                                                ${i===t.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${t.isCustom&&s`
                                    <div class="settings-provider-method">
                                        ${(t.customFields||[]).map((h)=>s`
                                            <div class="settings-provider-field-row">
                                                <label>${h.label}${h.required?" *":""}</label>
                                                <input type="text" value=${f[h.key]||""}
                                                    onInput=${(F)=>g(h.key,F.target.value)}
                                                    placeholder=${h.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===t.id}
                                                onClick=${()=>x(t.id,t)}>
                                                ${i===t.id?"Configuring…":"Save configuration"}
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
    `}var Zc=O(()=>{e();Bn()});var Ic={};fn(Ic,{ModelsSection:()=>is});function ns(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function rs({thinkingLevel:n,supportsThinking:r,provider:i,availableLevels:_,onSetLevel:c,disabled:u}){let{t:f}=_n(),l=ns(i)?m0:a0,g=_&&_.length>1?_:["off","minimal","low","medium","high"],o=Math.max(0,g.indexOf(n??"off"));if(!r)return s`<div class="settings-thinking-slider"><label>${f("settings.models.thinkingLevel")}</label><p class="settings-hint" style="margin:4px 0 0">${f("settings.models.noThinking")}</p></div>`;return s`
        <div class="settings-thinking-slider">
            <label>${f("settings.models.thinkingLevelLabel")} <strong>${l[g[o]]||g[o]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${g.length-1} step="1" value=${o} disabled=${u}
                    onInput=${(x)=>c(g[parseInt(x.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${g.map((x,$)=>s`<span class=${$===o?"active":""} onClick=${()=>!u&&c(x)}>${l[x]||x}</span>`)}
                </div>
            </div>
        </div>
    `}function is({filter:n=""}){let{t:r}=_n(),[i,_]=w(null),[c,u]=w(!1),[f,l]=w("off"),[g,o]=w(!1),[x,$]=w(["off"]),[p,b]=w(!1),[v,k]=w(!1),[t,h]=w(!1),F=U(async()=>{let W=await Ni();if(_(W),W.thinking_level)l(W.thinking_level);if(o(Boolean(W.supports_thinking)),b(Boolean(W.scoped_models_only)),Array.isArray(W.available_thinking_levels)&&W.available_thinking_levels.length>0)$(W.available_thinking_levels);return W},[]);Q(()=>{F().catch((W)=>{console.warn("[settings/models] Failed to load models.",W),_({models:[],model_options:[]})})},[]);let N=U(async(W)=>{if(c)return;u(!0);try{await Kn("default",`/model ${W}`,null,[]),await F()}catch(G){console.error("Failed to switch model:",G)}finally{u(!1)}},[c,F]),K=U(async(W)=>{if(v)return;k(!0),b(Boolean(W));try{let G=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scopedModelsOnly:Boolean(W)})}),Z=await G.json().catch(()=>({}));if(!G.ok||!Z?.ok)throw Error(Z?.error||"Failed to save scoped model setting.");await F()}catch(G){console.error("Failed to set scoped model filtering:",G),await F().catch((Z)=>{console.warn("[settings/models] Reload after scoped model filtering failure failed.",Z)})}finally{k(!1)}},[v,F]),j=U(async(W)=>{if(t)return;h(!0),l(W);try{let G=await Kn("default",`/thinking ${W}`,null,[]);if(G?.command?.thinking_level)l(G.command.thinking_level);o(G?.command?.supports_thinking!==!1),await F()}catch(G){console.error("Failed to set thinking:",G),await F().catch((Z)=>{console.warn("[settings/models] Reload after thinking change failure failed.",Z)})}finally{h(!1)}},[t,F]);if(!i)return s`<div class="settings-loading">${r("settings.models.loading")}</div>`;let B=i.model_options||[],T=i.current,y=B.find((W)=>W.label===T)?.provider||"",H=n.toLowerCase(),D=H?B.filter((W)=>W.label.toLowerCase().includes(H)||(W.provider||"").toLowerCase().includes(H)):B;return s`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">${r("settings.models.summary")}</div>
            <div class="settings-row" style="padding:0 0 10px 0; align-items:flex-start">
                <label>${r("settings.models.scopedOnly")}</label>
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0">
                    <label style="display:flex; align-items:center; gap:8px; font-weight:500">
                        <input type="checkbox" checked=${p} disabled=${v} onChange=${(W)=>K(W.target.checked)} />
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
                        ${D.map((W)=>s`
                            <tr class=${W.label===T?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${W.label===T} disabled=${c} onChange=${()=>N(W.label)} /></td>
                                <td>${W.name||W.label}</td><td>${W.provider}</td>
                                <td>${W.context_window?(W.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${W.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${D.length===0&&s`<tr><td colspan="5" class="settings-empty">${r("settings.models.noMatch",{filter:n})}</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${rs}
                    thinkingLevel=${f}
                    supportsThinking=${g}
                    provider=${y}
                    availableLevels=${x}
                    onSetLevel=${j}
                    disabled=${t||c} />
            </div>
        </div>
    `}var m0,a0;var Lc=O(()=>{e();Bn();bn();m0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},a0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function Ei(n){let r=String(n||"").trim().toLowerCase();if(!r)return"default";if(r==="solarized-dark"||r==="solarized-light")return"solarized";if(r==="github-dark"||r==="github-light")return"github";if(r==="tokyo-night")return"tokyo";return r}function Jc(n){if(!n)return null;let r=String(n).trim();if(!r)return null;let i=r.startsWith("#")?r.slice(1):r;if(!/^[0-9a-fA-F]{3}$/.test(i)&&!/^[0-9a-fA-F]{6}$/.test(i))return null;let _=i.length===3?i.split("").map((u)=>u+u).join(""):i,c=parseInt(_,16);return{r:c>>16&255,g:c>>8&255,b:c&255,hex:`#${_.toLowerCase()}`}}function cs(n,r){try{if(document.body){n.style.display="none",document.body.appendChild(n);let i=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),i}}catch{return r}return r}function us(n){if(!n||typeof document>"u")return null;let r=String(n).trim();if(!r)return null;let i=document.createElement("div");if(i.style.color="",i.style.color=r,!i.style.color)return null;let c=cs(i,i.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!c)return null;let u=parseInt(c[1],10),f=parseInt(c[2],10),l=parseInt(c[3],10);if(![u,f,l].every((o)=>Number.isFinite(o)))return null;let g=`#${[u,f,l].map((o)=>o.toString(16).padStart(2,"0")).join("")}`;return{r:u,g:f,b:l,hex:g}}function Mn(n){return Jc(n)||us(n)}function Si(n,r,i){let _=Math.round(n.r+(r.r-n.r)*i),c=Math.round(n.g+(r.g-n.g)*i),u=Math.round(n.b+(r.b-n.b)*i);return`rgb(${_} ${c} ${u})`}function Zr(n,r){return`rgba(${n.r}, ${n.g}, ${n.b}, ${r})`}function fs(n){let r=n.r/255,i=n.g/255,_=n.b/255,c=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4),u=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),f=_<=0.03928?_/12.92:Math.pow((_+0.055)/1.055,2.4);return 0.2126*c+0.7152*u+0.0722*f}function ss(n){return fs(n)>0.4?"#000000":"#ffffff"}function Ec(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function di(n){return Yc[n]||Yc.default}function ls(n){return n.mode==="auto"?Ec():n.mode}function Sc(n,r){let i=di(n);if(r==="dark"&&i.dark)return i.dark;if(r==="light"&&i.light)return i.light;return i.dark||i.light||Fn}function zn(n,r,i){let _=Mn(n);if(!_)return n;return Si(_,r,i)}function dc(n,r,i){let _=Mn(r);if(!_)return n;let u=Jc(i==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:zn(n.bgPrimary,_,0.08),bgSecondary:zn(n.bgSecondary,_,0.12),bgHover:zn(n.bgHover,_,0.16),textPrimary:zn(n.textPrimary,_,i==="dark"?0.08:0.06),textSecondary:zn(n.textSecondary,_,i==="dark"?0.12:0.1),borderColor:zn(n.borderColor,_,0.1),accent:_.hex,accentHover:u?Si(_,u,0.18):_.hex,warning:zn(n.warning||Fn.warning,_,0.14),danger:zn(n.danger,_,0.16),success:zn(n.success,_,0.16)}}function os(n,r){let i=Mn(n?.warning);if(i)return i.hex;let _=Mn(r==="dark"?Yr.warning:Fn.warning)||Mn(Fn.warning),c=Mn(n?.accent);if(_&&c)return Si(_,c,r==="dark"?0.18:0.14);return r==="dark"?Yr.warning:Fn.warning}function $s(n,r){if(typeof document>"u")return;let i=document.documentElement,_=n.accent,c=Mn(_),u=c?Zr(c,r==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,f=c?Zr(c,r==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",l=c?Zr(c,r==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",g=c?ss(c):r==="dark"?"#000000":"#ffffff",o=c?Zr(c,r==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",x=os(n,r),$={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":_,"--accent-hover":n.accentHover||_,"--accent-color-alpha":o,"--accent-soft":f,"--accent-soft-strong":l,"--accent-contrast-text":g,"--warning-color":x,"--danger-color":n.danger||Fn.danger,"--success-color":n.success||Fn.success,"--search-highlight-color":u||"rgba(29, 155, 240, 0.2)"};Object.entries($).forEach(([p,b])=>{if(b)i.style.setProperty(p,b)})}function gs(){if(typeof document>"u")return;let n=document.documentElement;_s.forEach((r)=>n.style.removeProperty(r))}function en(n,r={}){if(typeof document>"u")return null;let i=typeof r.id==="string"&&r.id.trim()?r.id.trim():null,_=i?document.getElementById(i):document.querySelector(`meta[name="${n}"]`);if(!_)_=document.createElement("meta"),document.head.appendChild(_);if(_.setAttribute("name",n),i)_.setAttribute("id",i);return _}function Cc(n){let r=Ei(qn?.theme||"default"),i=qn?.tint?String(qn.tint).trim():null,_=Sc(r,n);if(r==="default"&&i)_=dc(_,i,n);if(_?.bgPrimary)return _.bgPrimary;return n==="dark"?Yr.bgPrimary:Fn.bgPrimary}function ws(n,r){if(typeof document>"u")return;let i=en("theme-color",{id:"dynamic-theme-color"});if(i&&n)i.removeAttribute("media"),i.setAttribute("content",n);let _=en("theme-color",{id:"theme-color-light"});if(_)_.setAttribute("media","(prefers-color-scheme: light)"),_.setAttribute("content",Cc("light"));let c=en("theme-color",{id:"theme-color-dark"});if(c)c.setAttribute("media","(prefers-color-scheme: dark)"),c.setAttribute("content",Cc("dark"));let u=en("msapplication-TileColor");if(u&&n)u.setAttribute("content",n);let f=en("msapplication-navbutton-color");if(f&&n)f.setAttribute("content",n);let l=en("apple-mobile-web-app-status-bar-style");if(l)l.setAttribute("content",r==="dark"?"black-translucent":"default")}function ys(){if(typeof window>"u")return;let n={...qn,mode:Oc};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function ts(){if(typeof window>"u")return"web:default";try{let r=new URL(window.location.href).searchParams.get("chat_jid");return r&&r.trim()?r.trim():"web:default"}catch{return"web:default"}}function xs(n){if(typeof document>"u"||!n)return;let r=document.documentElement;if(r?.style)r.style.background=n;if(document.body?.style)document.body.style.background=n}function ei(n,r={}){if(typeof window>"u"||typeof document>"u")return;let i=Ei(n?.theme||"default"),_=n?.tint?String(n.tint).trim():null,c=di(i),u=ls(c),f=Sc(i,u);qn={theme:i,tint:_},Oc=u;let l=document.documentElement;l.dataset.theme=u,l.dataset.colorTheme=i,l.dataset.tint=_?String(_):"",l.style.colorScheme=u;let g=f;if(i==="default"&&_)g=dc(f,_,u);if(i==="default"&&!_)gs();else $s(g,u);if(xs(g.bgPrimary),ws(g.bgPrimary,u),ys(),r.persist!==!1)if(ln(Ji,i),_)ln(Lr,_);else ln(Lr,"")}function Ir(){if(di(qn.theme).mode!=="auto")return;ei(qn,{persist:!1})}function bs(){if(typeof window>"u")return;let n=Ei(Rn(Ji)||"default"),r=(()=>{let i=Rn(Lr);return i?i.trim():null})();ei({theme:n,tint:r},{persist:!1})}function Go(){if(typeof window>"u")return()=>{};if(bs(),window.matchMedia&&!Oi){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Ir);else if(n.addListener)n.addListener(Ir);return Oi=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Ir);else if(n.removeListener)n.removeListener(Ir);Oi=!1}}return()=>{}}function mi(n){if(!n||typeof n!=="object")return;let r=ts(),i=n.chat_jid||n.chatJid||null,_=n.theme??n.name??n.colorTheme,c=n.tint??null;if(!i||i===r)ei({theme:_||"default",tint:c},{persist:!1});ln(Ji,_||"default"),ln(Lr,c||"")}function Po(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return Ec()}var Ji="piclaw_theme",Lr="piclaw_tint",Fn,Yr,Yc,_s,qn,Oc="light",Oi=!1;var ec=O(()=>{Fn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Yr={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Yc={default:{label:"Default",mode:"auto",light:Fn,dark:Yr},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},_s=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],qn={theme:"default",tint:null}});function hs(n){return M_.map((r)=>({value:r,label:q_[r],active:r===n}))}function mc({variant:n="inline",onChange:r}={}){let{locale:i,setLocale:_,t:c}=_n(),u=hs(i),f=(l)=>{let g=l?.currentTarget?.value;_(g),r?.(g)};return s`
    <div class=${`language-switcher language-switcher-${n}`} role="none">
      <label class="language-switcher-label" for="language-switcher-select">${c("language.label")}</label>
      <select
        id="language-switcher-select"
        class="language-switcher-select"
        value=${i}
        aria-label=${c("language.label")}
        onClick=${(l)=>l.stopPropagation()}
        onChange=${f}
      >
        ${u.map((l)=>s`
          <option key=${l.value} value=${l.value}>${l.label}</option>
        `)}
      </select>
    </div>
  `}var ac=O(()=>{e();bn()});var ru={};fn(ru,{ThemeSection:()=>ps});function nu(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function ps({themes:n,colorKeys:r,settingsData:i,setStatus:_,mergeSettingsData:c}){let{t:u}=_n(),[f,l]=w("default"),[g,o]=w(""),[x,$]=w(!1),p=C(""),b=C(null),v=C(!0);Q(()=>{return v.current=!0,()=>{v.current=!1}},[]);let k=U((K)=>{let j=nu(K);l(j.uiTheme),o(j.uiTint),p.current=JSON.stringify(j)},[]);Q(()=>{if(i){k(i);return}k({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[i,k]);let t=U((K,j)=>{mi({theme:K,tint:j||null}),l(K||"default"),o(j||"")},[]),h=L(()=>JSON.stringify(nu({uiTheme:f,uiTint:g})),[f,g]);Q(()=>{if(h===p.current)return;if(b.current)clearTimeout(b.current);return b.current=setTimeout(async()=>{if(!v.current)return;$(!0);try{let K=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:h}),j=await K.json().catch(()=>({}));if(!v.current)return;if(!K.ok||!j?.ok||!j?.settings){_?.(j?.error||"Failed to save appearance settings.","error");return}p.current=h,c?.(j.settings),_?.("Appearance synced across clients.","success")}catch(K){if(!v.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",K),_?.("Failed to save appearance settings.","error")}finally{if(v.current)$(!1)}},250),()=>{if(b.current)clearTimeout(b.current)}},[h,c,_]);let F=r||[],N=n||[];return s`
        <div class="settings-section">
            <div class="settings-row settings-language-row">
                <${mc} variant="inline" />
            </div>
            ${x&&s`<div class="settings-hint" style="margin:0 0 12px 0;">${u("settings.appearance.syncing")}</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${f==="default"}
                        onChange=${()=>t("default",g)} />
                    <strong>${u("settings.appearance.default")}</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">${u("settings.appearance.autoLightDark")}</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">${u("settings.appearance.tint")}</label>
                    <input type="color"
                        value=${g||"#1d9bf0"}
                        onInput=${(K)=>{let j=K.target.value;if(o(j),f==="default")mi({theme:"default",tint:j})}} />
                    ${g&&s`
                        <button class="settings-tint-clear" onClick=${()=>t("default","")}
                            title=${u("settings.appearance.clearTint")}>\u2715</button>
                    `}
                    <span class="settings-tint-hex">${g||u("settings.appearance.none")}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${F.map((K)=>s`<th class="settings-swatch-header">${K.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${N.filter((K)=>K.name!=="default").map((K)=>s`
                        <tr class=${K.name===f?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>t(K.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${K.name===f} onChange=${()=>t(K.name,"")} /></td>
                            <td><strong>${K.label}</strong></td>
                            <td>${K.mode}</td>
                            ${F.map((j)=>{let B=K.colors?.[j];return s`<td class="settings-swatch-cell">
                                    ${B?s`<span class="settings-color-swatch" style=${"background:"+B} title=${B}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var iu=O(()=>{e();ec();ac();bn()});var cu={};fn(cu,{__scheduledTasksSettingsTest:()=>Fs,ScheduledTasksSection:()=>zs});function An(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function _u(n){let r=Number(n);if(!Number.isFinite(r))return"—";if(r<1000)return`${Math.round(r)}ms`;return`${(r/1000).toFixed(r<1e4?1:0)}s`}function ai(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${An(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function n_(n){let r=n?.task_kind||"agent";return r==="internal"?"internal/protected":r}function r_(n){return(n?.task_kind||"agent")==="internal"}function ks(n){if(!n)return"";let r=String(n).replace(/\s+/g," ").trim();return r.length>180?`${r.slice(0,179)}…`:r}function mn({children:n,type:r="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function Ks({task:n}){let r=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!r.length)return s`<p class="settings-hint">No run logs recorded yet.</p>`;return s`
        <div class="settings-task-run-list">
            ${r.map((i)=>s`
                <div class=${`settings-task-run-row settings-task-run-${i.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${mn} type=${i.status==="error"?"error":"success"}>${i.status||"unknown"}<//>
                        <span>${An(i.run_at)}</span>
                        <span>${_u(i.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${i.error_summary||ks(i.error)||i.result_summary||i.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function Bs({task:n,onAction:r}){if(!n)return s`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let i=r_(n);return s`
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
                <span>Kind</span><strong>${n_(n)}</strong>
                <span>Schedule</span><strong>${ai(n)}</strong>
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
            <${Ks} task=${n} />
        </div>
    `}function zs({filter:n="",setStatus:r}){let[i,_]=w([]),[c,u]=w({active:0,paused:0,completed:0}),[f,l]=w("all"),[g,o]=w(""),[x,$]=w(!0),[p,b]=w(null),[v,k]=w(null),[t,h]=w(null),[F,N]=w(!1),K=U(async(y={})=>{$(!0),b(null);try{let H=await ki({status:f,chatJid:g.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});_(H.tasks||[]),u(H.counts||{active:0,paused:0,completed:0});let D=y.selectedId||v,W=(H.tasks||[]).find((G)=>G.id===D)||(H.tasks||[])[0]||null;k(W?.id||null),h(W)}catch(H){b(H?.message||"Failed to load scheduled tasks.")}finally{$(!1)}},[f,g,v]);Q(()=>{K()},[K]);let j=String(n||"").trim().toLowerCase(),B=L(()=>{if(!j)return i;return i.filter((y)=>[y.id,y.chat_jid,y.status,y.task_kind,y.schedule_type,y.schedule_value,y.summary,y.prompt_summary,y.command_summary,y.latest_run_log?.error_summary].some((H)=>String(H||"").toLowerCase().includes(j)))},[i,j]),T=U((y)=>{k(y?.id||null),h(y||null)},[]),P=U(async(y,H)=>{if(!H||F)return;let D=r_(H),W=H.summary||H.command_summary||H.prompt_summary||H.id,G=y==="delete"?`Delete scheduled task ${H.id}?

${W}`:`${y==="pause"?"Pause":"Resume"} scheduled task ${H.id}?

${W}`;if(!window.confirm(G))return;if(D&&!window.confirm(`Task ${H.id} is internal/protected. Continue with ${y}?`))return;N(!0),r?.(`${y==="delete"?"Deleting":y==="pause"?"Pausing":"Resuming"} ${H.id}…`,"info");try{await Ki(y,H.id,{allowInternal:D}),r?.(`Scheduled task ${H.id} ${y==="delete"?"deleted":y==="pause"?"paused":"resumed"}.`,"success"),await K({selectedId:y==="delete"?null:H.id})}catch(Z){r?.(Z?.message||`Failed to ${y} task.`,"error")}finally{N(!1)}},[F,K,r]);return s`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${mn} type="active">Active ${c.active||0}<//>
                    <${mn} type="paused">Paused ${c.paused||0}<//>
                    <${mn} type="completed">Completed ${c.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${f} onChange=${(y)=>l(y.target.value)}>
                        ${vs.map((y)=>s`<option value=${y}>${y==="all"?"All statuses":y}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${g} onInput=${(y)=>o(y.target.value)} />
                    <button onClick=${()=>K()} disabled=${x}>Refresh</button>
                </div>
            </div>

            ${x&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${p&&s`<div class="settings-error-state">${p}</div>`}
            ${!x&&!p&&i.length===0&&s`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/i`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!x&&!p&&i.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${B.map((y)=>s`
                            <button class=${`settings-task-row ${y.id===v?"active":""}`} onClick=${()=>T(y)}>
                                <span class="settings-task-row-main">
                                    <strong>${y.summary||y.id}</strong>
                                    <span>${ai(y)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${mn} type=${y.status||"neutral"}>${y.status}<//>
                                    <${mn}>${n_(y)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${An(y.next_run)} · Last ${An(y.last_run)}${y.latest_run_log?.status?` · ${y.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${B.length===0&&s`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${Bs} task=${t&&B.some((y)=>y.id===t.id)?t:B[0]} onAction=${P} />
                </div>
            `}
        </div>
    `}var vs,Fs;var uu=O(()=>{e();Bn();vs=["all","active","paused","completed"];Fs={formatDateTime:An,formatDuration:_u,labelForSchedule:ai,kindLabel:n_,isProtectedTask:r_}});function fu(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function an(n){return typeof n==="string"&&n.trim().length>0}function i_(n,...r){let i=fu(n);if(!i)return!0;let _=r.map((c)=>fu(c)).filter(Boolean);for(let c of _)if(c.startsWith(i)||c.includes(i))return!0;return!1}function su(n){if(!Array.isArray(n))return null;let r=[],i=new Set;for(let _ of n){let c=String(_||"").trim();if(!c)continue;let u=c.toLowerCase();if(i.has(u))continue;i.add(u),r.push(c)}return r}function tr(n){let r=n&&typeof n==="object"?n:{};return{workspaceCommands:su(r.workspaceCommands),slashCommands:su(r.slashCommands)}}function lu(n,r){if(!Array.isArray(n))return!0;return n.some((i)=>i.toLowerCase()===r.toLowerCase())}function Hs(n){let r=Array.isArray(n?.commands)?n.commands:[],i=tr(n?.settings),_=String(n?.query||"");return r.filter((c)=>lu(i.workspaceCommands,c.id)).filter((c)=>i_(_,c.label,c.description,...c.keywords||[])).map((c)=>({key:`workspace:${c.id}`,kind:"workspace",title:c.label,subtitle:c.description,searchText:`${c.label} ${c.description} ${(c.keywords||[]).join(" ")}`.trim(),visualHint:c.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:c.id}))}function Ws(n){let r=Array.isArray(n?.agents)?n.agents:[],i=String(n?.query||""),_=new Set;return r.filter((c)=>{let u=an(c?.chat_jid)?c.chat_jid.trim():"";if(!u||_.has(u))return!1;if(c?.archived_at)return!1;return _.add(u),!0}).filter((c)=>i_(i,`@${String(c?.agent_name||"").trim()}`,c?.session_name,c?.chat_jid)).map((c)=>{let u=an(c?.agent_name)?c.agent_name.trim():String(c?.chat_jid||"").replace(/^[^:]+:/,""),f=an(c?.session_name)?c.session_name.trim():"",l=String(c?.chat_jid||"").trim();return{key:`agent:${l}`,kind:"agent",title:`@${u}`,subtitle:f||l,searchText:`@${u} ${f} ${l}`.trim(),visualHint:u.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:l}})}function js(n){let r=Array.isArray(n?.slashCommands)?n.slashCommands:[],i=tr(n?.settings),_=String(n?.query||""),c=new Set;return r.filter((u)=>{let f=an(u?.name)?u.name.trim():"";if(!f||c.has(f.toLowerCase()))return!1;return c.add(f.toLowerCase()),lu(i.slashCommands,f)}).filter((u)=>i_(_,u?.name,u?.description,u?.source)).map((u)=>{let f=String(u?.name||"").trim(),l=an(u?.description)?u.description.trim():"slash command",g=an(u?.source)?u.source.trim():"";return{key:`slash:${f}`,kind:"slash",title:f,subtitle:l,searchText:`${f} ${l} ${String(u?.source||"")}`.trim(),visualHint:"/",categoryLabel:g||"Slash",actionHint:"Insert",commandName:f}})}function Lo(n){return[...Ws({agents:n?.agents,query:n?.query}),...Hs({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...js({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var nr;var ou=O(()=>{nr=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var wu={};fn(wu,{QuickActionsSection:()=>Rs});function $u(n,...r){let i=String(n||"").trim().toLowerCase();if(!i)return!0;return r.some((_)=>String(_||"").toLowerCase().includes(i))}function gu(n){if(!Array.isArray(n))return null;return new Set(n.map((r)=>String(r||"").trim().toLowerCase()).filter(Boolean))}function Rs({filter:n="",setStatus:r,mergeSettingsData:i}){let[_,c]=w(()=>nr.map((B)=>B.id)),[u,f]=w([]),[l,g]=w([]),[o,x]=w(!0),[$,p]=w(!1),b=U(async()=>{x(!0);try{let[B,T]=await Promise.all([Ti(),Ui("web:default").catch(()=>({commands:[]}))]),P=tr(B?.settings),y=Array.isArray(T?.commands)?T.commands:[];g(y),c(Array.isArray(P.workspaceCommands)?P.workspaceCommands:nr.map((H)=>H.id)),f(Array.isArray(P.slashCommands)?P.slashCommands:y.map((H)=>String(H?.name||"").trim()).filter(Boolean))}catch(B){r?.(String(B?.message||B),"error")}finally{x(!1)}},[r]);Q(()=>{b()},[b]);let v=L(()=>gu(_),[_]),k=L(()=>gu(u),[u]),t=L(()=>nr.filter((B)=>$u(n,B.label,B.description,...B.keywords||[])),[n]),h=L(()=>l.filter((B)=>$u(n,B?.name,B?.description,B?.source)),[l,n]),F=U((B)=>{c((T)=>{let P=new Set((Array.isArray(T)?T:[]).map((y)=>String(y||"").trim()).filter(Boolean));if(P.has(B))P.delete(B);else P.add(B);return nr.map((y)=>y.id).filter((y)=>P.has(y))})},[]),N=U((B)=>{f((T)=>{let P=new Set((Array.isArray(T)?T:[]).map((y)=>String(y||"").trim()).filter(Boolean));if(P.has(B))P.delete(B);else P.add(B);return l.map((y)=>String(y?.name||"").trim()).filter((y)=>y&&P.has(y))})},[l]),K=U(()=>{c(nr.map((B)=>B.id)),f(l.map((B)=>String(B?.name||"").trim()).filter(Boolean))},[l]),j=U(async()=>{if($)return;p(!0),r?.("Saving quick actions…","info");try{let B=await Gi({workspaceCommands:_,slashCommands:u}),T=tr(B?.settings);i?.({quickActions:T}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:T}})),r?.("Quick Actions saved.","success")}catch(B){r?.(String(B?.message||B),"error")}finally{p(!1)}},[i,$,r,u,_]);if(o)return s`<div class="settings-loading">Loading…</div>`;return s`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${K} disabled=${$}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${j} disabled=${$}>
                    ${$?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${t.map((B)=>{let T=v?v.has(B.id.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${B.id}>
                            <input type="checkbox" checked=${T} onChange=${()=>F(B.id)} />
                            <div>
                                <div>${B.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${B.description}</div>
                            </div>
                        </label>
                    `})}
                ${t.length===0&&s`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${h.map((B)=>{let T=String(B?.name||"").trim(),P=k?k.has(T.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${T}>
                            <input type="checkbox" checked=${P} onChange=${()=>N(T)} />
                            <div>
                                <div><code>${T}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${B?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${h.length===0&&s`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var yu=O(()=>{e();Bn();ou()});var tu={};fn(tu,{KeychainSection:()=>Gs});function Us(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function Gs({filter:n=""}){let[r,i]=w([]),[_,c]=w(!0),[u,f]=w(null),[l,g]=w(!1),[o,x]=w(""),[$,p]=w(""),[b,v]=w(""),[k,t]=w(""),[h,F]=w(""),[N,K]=w("secret"),[j,B]=w(!1),[T,P]=w({}),[y,H]=w(null),[D,W]=w(null),[G,Z]=w(null),z=C(null),M=C(null),Y=C(null),E=U(async()=>{c(!0),f(null);try{let A=await(await fetch("/agent/keychain")).json();if(A?.ok)i(A.entries||[]);else f(A?.error||"Failed to load keychain.")}catch(R){f("Failed to load keychain.")}finally{c(!1)}},[]);Q(()=>{E()},[E]);let cn=U(async()=>{let R=o.trim(),A=$;if(!R||!A)return;B(!0);try{let $n=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R,secret:A,type:N,username:b.trim()||void 0,userNote:k,agentNote:h})})).json();if($n?.ok)x(""),p(""),v(""),t(""),F(""),K("secret"),g(!1),await E();else f($n?.error||"Failed to add entry.")}catch{f("Failed to add entry.")}finally{B(!1)}},[o,$,b,k,h,N,E]),on=U(async(R)=>{try{let un=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R})})).json();if(un?.ok)W(null),Z(($n)=>$n?.name===R?null:$n),await E();else f(un?.error||"Failed to delete entry.")}catch{f("Failed to delete entry.")}},[E]),yn=U(async(R)=>{let A=R?.name;if(!A)return;let un=T[A]||{},$n=Object.prototype.hasOwnProperty.call(un,"userNote")?un.userNote:R.userNote||"",wn=Object.prototype.hasOwnProperty.call(un,"agentNote")?un.agentNote:R.agentNote||"";H(A);try{let Tn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A,userNote:$n,agentNote:wn})})).json();if(Tn?.ok)P((hr)=>{let ir={...hr||{}};return delete ir[A],ir}),await E();else f(Tn?.error||"Failed to save notes.")}catch{f("Failed to save notes.")}finally{H(null)}},[T,E]),J=U((R,A,un)=>{P(($n)=>({...$n||{},[R]:{...($n||{})[R]||{},[A]:un}}))},[]),X=U(async(R,A,un)=>{try{let wn=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R,master_password:A||void 0,totp_code:un||void 0})})).json();if(wn?.ok)Z({name:R,phase:"revealed",secret:wn.secret,username:wn.username,masterPassword:A});else if(wn?.needs_master_password)Z((pn)=>({name:R,phase:"password",masterPassword:"",error:pn?.name===R&&pn?.masterPassword?wn.error:null})),requestAnimationFrame(()=>M.current?.focus());else if(wn?.needs_totp)Z((pn)=>({name:R,phase:"totp",masterPassword:A,totpCode:"",error:pn?.name===R&&pn?.phase==="totp"&&pn?.totpCode?wn.error:null})),requestAnimationFrame(()=>Y.current?.focus());else Z({name:R,phase:"error",error:wn?.error||"Failed to reveal."})}catch{Z({name:R,phase:"error",error:"Failed to reveal."})}},[]),I=U((R)=>{if(G?.name===R&&G?.phase==="revealed"){Z(null);return}X(R,null,null)},[G,X]),xn=U((R)=>{let A=G?.masterPassword||"";if(!A)return;X(R,A,null)},[G,X]),V=U((R)=>{let A=G?.totpCode||"";if(A.length<6)return;X(R,G?.masterPassword,A)},[G,X]),m=U(async(R)=>{try{await navigator.clipboard.writeText(R)}catch{let A=document.createElement("textarea");A.value=R,A.style.position="fixed",A.style.opacity="0",document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A)}},[]);Q(()=>{if(l)requestAnimationFrame(()=>z.current?.focus())},[l]);let sn=n.toLowerCase(),Hn=L(()=>{if(!sn)return r;return r.filter((R)=>R.name.toLowerCase().includes(sn)||(R.type||"").toLowerCase().includes(sn)||(R.envVar||"").toLowerCase().includes(sn)||(R.userNote||"").toLowerCase().includes(sn)||(R.agentNote||"").toLowerCase().includes(sn))},[r,sn]);if(_)return s`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return s`
        <div class="settings-section">
            ${u&&s`
                <div class="settings-keychain-error" role="alert">
                    ${u}
                    <button class="settings-keychain-dismiss" onClick=${()=>f(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${Hn.length} entr${Hn.length===1?"y":"ies"}${sn?` matching "${n}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>g(!l)}>
                    ${l?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${l&&s`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${z} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${o} onInput=${(R)=>x(R.target.value)}
                            class="settings-keychain-input" />
                        <select value=${N} onChange=${(R)=>K(R.target.value)}
                            class="settings-keychain-select">
                            ${Ts.map((R)=>s`<option value=${R}>${R}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${$} onInput=${(R)=>p(R.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${b} onInput=${(R)=>v(R.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${cn}
                            disabled=${j||!o.trim()||!$}>
                            ${j?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${k} onInput=${(R)=>t(R.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${h} onInput=${(R)=>F(R.target.value)}
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
                                ${sn?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${Hn.map((R)=>{let A=G?.name===R.name?G:null,un=A?.phase==="revealed",$n=A?.phase==="password",wn=A?.phase==="totp",pn=A?.phase==="error",Tn=T[R.name]||{},hr=Object.prototype.hasOwnProperty.call(Tn,"userNote")?Tn.userNote:R.userNote||"",ir=Object.prototype.hasOwnProperty.call(Tn,"agentNote")?Tn.agentNote:R.agentNote||"",Tu=hr!==(R.userNote||"")||ir!==(R.agentNote||""),l_=y===R.name;return s`
                            <tr class="settings-keychain-row" key=${R.name}>
                                <td class="settings-keychain-name">${R.name}</td>
                                <td><span class="settings-keychain-type-badge">${R.type}</span></td>
                                <td class="settings-keychain-env">${R.envVar?s`<code>$${R.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Us(R.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${un?" active":""}`}
                                        onClick=${()=>I(R.name)}
                                        title=${un?"Hide secret":"Reveal secret"}>
                                        ${un?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${D===R.name?s`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>on(R.name)}>Yes</button>
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
                                                onInput=${(gn)=>J(R.name,"userNote",gn.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${ir}
                                                onInput=${(gn)=>J(R.name,"agentNote",gn.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!Tu||l_} onClick=${()=>yn(R)}>
                                            ${l_?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${$n&&s`
                                <tr class="settings-keychain-prompt-row" key=${R.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${M} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${A?.masterPassword||""}
                                                onInput=${(gn)=>Z((dr)=>({...dr,masterPassword:gn.target.value}))}
                                                onKeyDown=${(gn)=>{if(gn.key==="Enter")xn(R.name);if(gn.key==="Escape")Z(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>xn(R.name)}
                                                disabled=${!A?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>Z(null)}>Cancel</button>
                                            ${A?.error&&s`<span class="settings-keychain-prompt-error">${A.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${wn&&s`
                                <tr class="settings-keychain-prompt-row" key=${R.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${Y} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${A?.totpCode||""}
                                                onInput=${(gn)=>Z((dr)=>({...dr,totpCode:gn.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(gn)=>{if(gn.key==="Enter")V(R.name);if(gn.key==="Escape")Z(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>V(R.name)}
                                                disabled=${(A?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>Z(null)}>Cancel</button>
                                            ${A?.error&&s`<span class="settings-keychain-prompt-error">${A.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${un&&s`
                                <tr class="settings-keychain-reveal-row" key=${R.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${A.username&&s`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${A.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>m(A.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${A.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>m(A.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${pn&&s`
                                <tr class="settings-keychain-reveal-row" key=${R.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${A.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var Ts;var xu=O(()=>{e();Ts=["secret","token","password","basic"]});var bu={};fn(bu,{ToolsSection:()=>Qs});function Qs({toolsets:n,filter:r="",settingsData:i,mergeSettingsData:_}){let{t:c}=_n(),u=n||[],[f,l]=w(()=>{let k={};for(let t of u)k[t.name]=!0;return k}),g=U((k)=>{l((t)=>({...t,[k]:!t[k]}))},[]),o=i?.searchMatchMode||"or",x=L(()=>{let k=Array.isArray(i?.toolResultCompactionTools)?i.toolResultCompactionTools:[];return new Set(k.filter((t)=>typeof t==="string").map((t)=>t.trim().toLowerCase()).filter(Boolean))},[i?.toolResultCompactionTools]),$=U(async()=>{let k=o==="or"?"and":"or";try{let h=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:k})})).json().catch(()=>({}));if(h?.ok&&h?.settings)_?.(h.settings)}catch(t){console.warn("[settings/tools] Failed to save search match mode.",t)}},[o,_]),p=U(async(k)=>{let t=String(k||"").trim().toLowerCase();if(!t)return;let h=new Set(x);if(h.has(t))h.delete(t);else h.add(t);try{let N=await(await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toolResultCompactionTools:Array.from(h).sort()})})).json().catch(()=>({}));if(N?.ok&&N?.settings)_?.(N.settings)}catch(F){console.warn("[settings/tools] Failed to save tool compaction settings.",F)}},[x,_]),b=r.toLowerCase(),v=L(()=>{if(!b)return u;return u.map((k)=>{let t=k.tools.filter((h)=>h.name.toLowerCase().includes(b)||k.name.toLowerCase().includes(b)||(h.summary||"").toLowerCase().includes(b));return t.length>0?{...k,tools:t}:null}).filter(Boolean)},[u,b]);if(u.length===0)return s`<div class="settings-section"><p class="settings-hint">${c("settings.tools.unavailable")}</p></div>`;return s`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">${c("settings.tools.search")}</h4>
                <div class="settings-row">
                    <label>${c("settings.tools.matchMode")}</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${o==="and"} onChange=${$} />
                        <span class="settings-hint" style="margin:0">
                            ${o==="or"?c("settings.tools.orMode"):c("settings.tools.andMode")}
                        </span>
                    </div>
                </div>
            </div>
            ${v.map((k)=>{let t=f[k.name]!==!1;return s`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${t} onChange=${()=>g(k.name)} />
                            <span class="settings-toolset-icon">${Ps[k.name]||Xs}</span>
                            <strong>${k.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${k.description}</span>
                    </div>
                    ${t&&s`<div class="settings-tool-list">
                        <div class="settings-tool-row settings-tool-row-header" aria-hidden="true">
                            <span class="settings-tool-status-header">${c("settings.tools.colEnabled")}</span>
                            <span class="settings-tool-name">${c("settings.tools.colTool")}</span>
                            <span class="settings-tool-compact-header">${c("settings.tools.colCompact")}</span>
                            <span class="settings-tool-kind">${c("settings.tools.colKind")}</span>
                            <span class="settings-tool-summary">${c("settings.tools.colSummary")}</span>
                            <span class="settings-tool-source">${c("settings.tools.colSource")}</span>
                        </div>
                        ${k.tools.map((h)=>{let F=String(h.name||"").trim().toLowerCase(),N=x.has(F);return s`
                                <div class="settings-tool-row">
                                    <input type="checkbox" checked disabled />
                                    <span class="settings-tool-name">${h.name}</span>
                                    <span class="settings-tool-compact">
                                        <input
                                            type="checkbox"
                                            checked=${N}
                                            onChange=${()=>p(h.name)}
                                            title=${N?c("settings.tools.disableCompaction"):c("settings.tools.enableCompaction")}
                                        />
                                    </span>
                                    <span class="settings-tool-kind" title=${h.kind}>${Ns[h.kind]||"?"}</span>
                                    ${h.summary&&s`<span class="settings-tool-summary">${h.summary}</span>`}
                                    ${!h.summary&&s`<span class="settings-tool-summary"></span>`}
                                    <span class="settings-tool-source">${Vs[h.name]||k.name}</span>
                                </div>
                            `})}
                    </div>`}
                </div>
            `})}
            ${v.length===0&&s`<p class="settings-hint">${c("settings.tools.noMatch",{filter:r})}</p>`}
            <p class="settings-hint">${c("settings.tools.footer")}</p>
        </div>
    `}var Ps,Vs,Ns,Xs;var hu=O(()=>{e();bn();Ps={core:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},Vs={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Ns={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},Xs=s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var pu={};fn(pu,{AddonsSection:()=>Ms});function Ms({setStatus:n,filter:r=""}){let[i,_]=w(null),[c,u]=w(!0),[f,l]=w(null),[g,o]=w(!1),[x,$]=w({runtime:"",windowsNative:!1}),[p,b]=w([]),[v,k]=w([]);function t(){let y=new URLSearchParams;try{let D=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),W=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((Z)=>Z.trim()).filter(Boolean),G=localStorage.getItem("piclaw_addons_repo_url");if(D)y.append("catalog_url",D);for(let Z of W)y.append("catalog_url",Z);if(G)y.set("repo_url",G)}catch(D){}let H=y.toString();return H?`?${H}`:""}let h=U(async()=>{try{let[y,H]=await Promise.all([fetch(`/agent/addons${t()}`),fetch("/agent/settings-data")]),D=await y.json();if(D.error)throw Error(D.error);_(D.addons||[]),b(D.sources||[]),k(D.failed_sources||[]);let W=await H.json().catch(()=>({})),G=typeof W?.runtimePlatform==="string"?W.runtimePlatform:"";$({runtime:G,windowsNative:G==="win32"})}catch(y){_(null),n?.(String(y.message||y),"error")}finally{u(!1)}},[n]);Q(()=>{h()},[]);let F=U(async(y)=>{if(f)return;l({slug:y,action:"install"}),n?.(`Installing ${y}…`,"info");try{let D=await(await fetch(`/agent/addons/install${t()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:y})})).json();if(D.error){n?.(D.error,"error");return}o(!0);let W=[D.message,D.warning].filter(Boolean).join(" ");n?.(W||"Add-on installed.","success"),await h()}catch(H){n?.(String(H.message||H),"error")}finally{l(null)}},[f,h,n]),N=U(async(y)=>{if(f)return;l({slug:y,action:"remove"}),n?.(`Removing ${y}…`,"info");try{let D=await(await fetch(`/agent/addons/uninstall${t()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:y})})).json();if(D.error){n?.(D.error,"error");return}o(!0);let W=[D.message,D.warning].filter(Boolean).join(" ");n?.(W||"Add-on removed.","success"),await h()}catch(H){n?.(String(H.message||H),"error")}finally{l(null)}},[f,h,n]),K=U(async()=>{if(f)return;l({slug:null,action:"restart"}),n?.("Restarting piclaw…","info");try{let H=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(H.error){n?.(H.error,"error"),l(null);return}n?.(H.message||"Restarting piclaw…","success"),o(!1),(async(W=30,G=2000)=>{for(let Z=0;Z<W;Z++){await new Promise((z)=>setTimeout(z,G));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await h(),l(null),n?.("Restart complete — add-ons refreshed.","success");return}}catch(z){}}l(null),n?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(y){n?.(String(y.message||y),"error"),l(null)}},[f,n,h]);if(c)return s`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!i)return s`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let j=r.toLowerCase(),B=j?i.filter((y)=>y.slug.toLowerCase().includes(j)||(y.description||"").toLowerCase().includes(j)||(y.tags||[]).some((H)=>H.toLowerCase().includes(j))):i,T=f?.slug||null,P=f?f.action==="remove"?`Removing ${f.slug}…`:f.action==="restart"?"Restarting piclaw…":`Installing ${f.slug}…`:"";return s`
        <div class=${`settings-section settings-addon-panel${f?" busy":""}`} aria-busy=${f?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${p.length<=1?s`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:s`${p.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${v.length>0&&s`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${v.length} catalog source${v.length>1?"s":""}:
                            ${v.map((y)=>s` <code style="font-size:0.82em;word-break:break-all">${y}</code>`)}
                        </div>
                    `}
                    ${p.length>1&&s`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${p.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${p.map((y)=>s`<li style="word-break:break-all"><code>${y}</code></li>`)}
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
                    <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${P}>
                        <div class="settings-addon-panel-overlay-card">
                            <div class="settings-spinner"></div>
                            <span>${P}</span>
                        </div>
                    </div>
                `}
                ${B.map((y)=>{let H=(y.skills||[]).length>0,D=y.type==="extension",W=H&&D?"extension + skill":H?"skill":"extension",G=H&&!D?"settings-tag-skill":"",Z=typeof y.homepage==="string"&&y.homepage.trim()?y.homepage.trim():"";return s`
                    <div class=${`settings-addon-card${y.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${Z?s`<a class="settings-addon-name-link" href=${Z} target="_blank" rel="noopener noreferrer">${y.slug}</a>`:s`<strong>${y.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${G}`}>${W}</span>
                            <span class="settings-addon-version">${y.installed?y.installedVersion||"?":y.version||""}</span>
                            ${y.installKind&&s`<span class="settings-tag">${y.installKind}</span>`}
                            ${y.hasUpdate&&s`<span class="settings-tag settings-tag-skill">\u2191 ${y.version}</span>`}
                            <div class="settings-addon-actions">
                                ${y.installed?s`
                                    ${y.hasUpdate&&s`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(f)} onClick=${()=>F(y.slug)}>${T===y.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(f)} onClick=${()=>N(y.slug)}>${T===y.slug?"…":"Remove"}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(f)} onClick=${()=>F(y.slug)}>${T===y.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${y.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(y.tags||[]).map((z)=>s`<span class="settings-tag">${z}</span>`)}${(y.skills||[]).map((z)=>s`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${z}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${B.length===0&&s`<p class="settings-hint">No add-ons match "${r}"</p>`}
            </div>
            ${g&&s`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(f)} onClick=${K}>Restart Now</button>
                </div>
            `}
        </div>
    `}var vu=O(()=>{e()});var Ys={};function __(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function Cr(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function qs(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function As(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Ds(n,r,i,_){try{return En(localStorage.getItem(n),{fallback:r,min:i,max:_})}catch{return En(r,{fallback:r,min:i,max:_})}}function Zs(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function Is(){let{t:n}=_n(),[r,i]=w(()=>__("piclaw_vim_mode",!1)),[_,c]=w(()=>__("piclaw_show_whitespace",!0)),[u,f]=w(()=>__("piclaw_md_live_preview",!0)),[l,g]=w(()=>Ds("piclaw_editor_font_size",13,10,24)),[o,x]=w(()=>qs("piclaw_editor_font_family","")),$=U((p,b,v)=>{let k=!b;v(k),Cr(p,k)},[]);return s`
        <div class="settings-section">
            <h3>${n("settings.editor.heading")}</h3>
            <div class="settings-row">
                <label>${n("settings.editor.vimMode")}</label>
                <input type="checkbox" checked=${r}
                    onChange=${()=>{let p=!r;i(p),Cr("piclaw_vim_mode",p)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.showWhitespace")}</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let p=!_;c(p),Cr("piclaw_show_whitespace",p)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.livePreview")}</label>
                <input type="checkbox" checked=${u}
                    onChange=${()=>{let p=!u;f(p),Cr("piclaw_md_live_preview",p)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontSize")}</label>
                <${nn}
                    label=${n("settings.editor.fontSizeAria")}
                    value=${l}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(p)=>{g(p),Zs("piclaw_editor_font_size",p)}}
                />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontFamily")}</label>
                <input type="text" value=${o}
                    onInput=${(p)=>{let b=p.target.value;x(b),As("piclaw_editor_font_family",b)}}
                    placeholder=${n("settings.editor.fontFamilyPlaceholder")} />
            </div>
            <p class="settings-hint settings-local-only-hint">${n("settings.editor.localOnlyHint")}</p>
        </div>
    `}var Ls;var ku=O(()=>{e();fr();Sn();bn();Ls=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;Cn({id:"editor",label:"Editor",icon:Ls,component:Is,order:150})});var Js={};function c_(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function u_(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function f_(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function s_(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Cs(){let[n,r]=w(()=>c_("piclaw_dev_mode",!1)),[i,_]=w(()=>f_("piclaw_addons_catalog_url","")),[c,u]=w(()=>f_("piclaw_addons_catalog_urls","")),[f,l]=w(()=>f_("piclaw_addons_repo_url","")),[g,o]=w(()=>c_("piclaw_debug_sse",!1)),[x,$]=w(()=>c_("piclaw_debug_tool_calls",!1)),p=U(()=>{let b=!n;r(b),u_("piclaw_dev_mode",b)},[n]);return s`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${n} onChange=${p} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${n&&s`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${i}
                        onInput=${(b)=>{let v=b.target.value;_(v),s_("piclaw_addons_catalog_url",v)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${c}
                        onInput=${(b)=>{let v=b.target.value;u(v),s_("piclaw_addons_catalog_urls",v)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${f}
                        onInput=${(b)=>{let v=b.target.value;l(v),s_("piclaw_addons_repo_url",v)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${g}
                        onChange=${()=>{let b=!g;o(b),u_("piclaw_debug_sse",b)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${x}
                        onChange=${()=>{let b=!x;$(b),u_("piclaw_debug_tool_calls",b)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var Os;var Ku=O(()=>{e();fr();Os=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;Cn({id:"developer",label:"Developer",icon:Os,component:Cs,order:900})});var xl={};fn(xl,{openSettingsDialog:()=>tl,SettingsDialogContent:()=>Sr,SettingsDialog:()=>yl});function br(n){xr.push({ts:performance.now(),label:n})}function Es(){if(!xr.length)return;let n=xr[0].ts,r=xr.map((i)=>`+${(i.ts-n).toFixed(1)}ms ${i.label}`);console.info(`[settings-dialog perf]
`+r.join(`
`));try{window.__piclawSettingsPerfLog=r}catch(i){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:r})}).catch((i)=>{})}catch(i){}xr.length=0}function es(n){let r=Er.get(n);if(r)return Promise.resolve(r);let i=Or.get(n);if(i)return i;let _=Ss[n]().then((c)=>{return Er.set(n,c),Or.delete(n),c}).catch((c)=>{throw Or.delete(n),c});return Or.set(n,_),_}function Jr(n="Loading…"){return s`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function Sr({onClose:n}){br("SettingsDialogContent-render-start");let[r,i]=w(()=>xi()||"general"),[_,c]=w(Bu),[u,f]=w(null),[l,g]=w(""),[,o]=w(0),[x,$]=w(()=>Object.fromEntries(Er.entries())),[p,b]=w(null),[v,k]=w({compact:!1,narrow:!1}),t=C(null),h=C(null),{t:F}=_n(),N=(z)=>z?.isExtension?z.label:F(`settings.section.${z.id}`),K=(z)=>z?.isExtension?z.placeholder||F("settings.filter"):F(`settings.placeholder.${z.id}`);Q(()=>{br("SettingsDialogContent-mounted"),Es()},[]),Q(()=>{let z=(M)=>{if(M.key==="Escape")n()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[n]),Q(()=>{let z=(M)=>{let Y=typeof M?.detail?.section==="string"?M.detail.section.trim():"";if(Y)i(Y),g("")};return window.addEventListener("piclaw:open-settings",z),()=>window.removeEventListener("piclaw:open-settings",z)},[]),Q(()=>{let z=()=>o((M)=>M+1);return window.addEventListener("piclaw:settings-panes-changed",z),()=>window.removeEventListener("piclaw:settings-panes-changed",z)},[]),Q(()=>{fetch("/agent/settings-data").then((z)=>z.json()).then((z)=>{Bu=z,c(z)}).catch(()=>c({}))},[]),Q(()=>{let z=h.current;if(!z)return;let M=()=>{let Y=z.clientWidth||0;k((E)=>{let cn={compact:Y>0&&Y<=860,narrow:Y>0&&Y<=720};return E.compact===cn.compact&&E.narrow===cn.narrow?E:cn})};if(M(),typeof ResizeObserver==="function"){let Y=new ResizeObserver(()=>M());return Y.observe(z),()=>Y.disconnect()}return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]);let j=[...Fu].sort((z,M)=>(z.order??500)-(M.order??500)),T=Y_().map((z)=>({id:z.id,label:z.label,icon:z.icon,searchable:z.searchable||!1,placeholder:z.searchPlaceholder,order:z.order??500,isExtension:!0,component:z.component})).sort(ti),P=[...j,...T],y=P.find((z)=>z.id===r)||Fu.find((z)=>z.id===r);Q(()=>{if(y?.searchable)requestAnimationFrame(()=>t.current?.focus())},[r]),Q(()=>{if(y?.isExtension){b(null);return}let z=!1;if(x[r]){b(null);return}return b(r),es(r).then((M)=>{if(z)return;$((Y)=>Y?.[r]?Y:{...Y||{},[r]:M})}).catch((M)=>{if(z)return;console.error(`[settings-dialog] Failed to lazy-load section "${r}".`,M)}).finally(()=>{if(!z)b((M)=>M===r?null:M)}),()=>{z=!0}},[r,y?.isExtension,x]);let H=U((z,M="info")=>{f(z?{text:z,type:M}:null)},[]),D=U((z)=>{i(z),g("");let M=ds[z];if(M&&!zu.has(z))zu.add(z),M().then(()=>o((Y)=>Y+1)).catch((Y)=>{})},[]),W=U((z)=>{c((M)=>({...M||{},...z||{}}))},[]),G=()=>{if(y?.isExtension){if(!y.component)return Jr("Loading pane…");let M=y.component;return s`<${M} filter=${l} />`}let z=x[r];if(!z||p===r)return Jr(`${F("settings.loading")}`);switch(r){case"general":return s`<${z} settingsData=${_} setStatus=${H} mergeSettingsData=${W} />`;case"sessions":return s`<${z} settingsData=${_} setStatus=${H} mergeSettingsData=${W} />`;case"recordings":return s`<${z} filter=${l} setStatus=${H} />`;case"compaction":return s`<${z} settingsData=${_} setStatus=${H} mergeSettingsData=${W} />`;case"keyboard":return s`<${z} filter=${l} setStatus=${H} />`;case"workspace":return s`<${z} settingsData=${_} setStatus=${H} mergeSettingsData=${W} />`;case"environment":return s`<${z} settingsData=${_} filter=${l} setStatus=${H} mergeSettingsData=${W} />`;case"providers":return s`<${z} providers=${_?.providers} setStatus=${H} />`;case"models":return s`<${z} filter=${l} />`;case"theme":return s`<${z} themes=${_?.themes} colorKeys=${_?.colorKeys} settingsData=${_} setStatus=${H} mergeSettingsData=${W} />`;case"scheduled-tasks":return s`<${z} filter=${l} setStatus=${H} />`;case"quick-actions":return s`<${z} filter=${l} setStatus=${H} mergeSettingsData=${W} />`;case"keychain":return s`<${z} filter=${l} />`;case"tools":return s`<${z} toolsets=${_?.toolsets} filter=${l} settingsData=${_} mergeSettingsData=${W} />`;case"addons":return s`<${z} setStatus=${H} filter=${l} />`;default:return Jr(F("settings.loading"))}},Z=!y;return br("SettingsDialogContent-render-end"),s`
        <div class="settings-dialog-backdrop" onClick=${(z)=>{if(z.target===z.currentTarget)n()}}>
            <div ref=${h} data-testid="settings-dialog" class=${`settings-dialog${v.compact?" settings-dialog-compact":""}${v.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">${F("settings.title")}</span>
                    ${y?.searchable&&s`
                        <input ref=${t} type="text" class="settings-header-filter"
                            placeholder=${K(y)}
                            value=${l} onInput=${(z)=>g(z.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title=${F("settings.close")}>✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${P.map((z,M)=>{let Y=M>0&&!P[M-1].isExtension,E=z.isExtension&&Y;return s`
                                ${E&&s`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${z.id===r?"active":""}`} onClick=${()=>D(z.id)}>
                                    <span class="settings-nav-icon">${z.icon}</span>
                                    <span class="settings-nav-label">${N(z)}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${Z?Jr(F("settings.loading")):G()}
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
    `}function yl(){let[n,r]=w(!1);if(Q(()=>{let i=(c)=>{let u=Gr(c?.detail?.section);if(u)try{window.__piclawSettingsRequestedSection=u}catch(f){}r(!0)};window.addEventListener("piclaw:open-settings",i);let _=O_();if(_.open){if(_.section)try{window.__piclawSettingsRequestedSection=_.section}catch(c){}r(!0)}return()=>window.removeEventListener("piclaw:open-settings",i)},[]),!n)return null;return s`<${I_} className="settings-portal"><${Sr} onClose=${()=>r(!1)} /><//>`}function tl(n={}){C_(n)}var xr,Bu=null,Er,Or,Ss,ds,zu,ms,as,nl,rl,il,_l,cl,ul,fl,sl,ll,ol,$l,gl,wl,Fu;var Hu=O(()=>{e();bn();L_();fr();yc();xr=[];br("module-eval-start");br("imports-done");Er=new Map,Or=new Map;Er.set("general",Qi);Ss={general:()=>Promise.resolve(Qi),sessions:()=>Promise.resolve().then(() => (bc(),xc)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => (pc(),hc)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (kc(),vc)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (Rc(),jc)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (Mc(),Qc)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (Ac(),qc)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (Zc(),Dc)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Lc(),Ic)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (iu(),ru)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (uu(),cu)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (yu(),wu)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (xu(),tu)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (hu(),bu)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (vu(),pu)).then((n)=>n.AddonsSection)},ds={"editor-settings":()=>Promise.resolve().then(() => (ku(),Ys)).then(()=>{}),developer:()=>Promise.resolve().then(() => (Ku(),Js)).then(()=>{})},zu=new Set;ms=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,as=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,nl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,rl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,il=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,_l=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,cl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,ul=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,fl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,sl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,ll=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,ol=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,$l=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,gl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,wl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,Fu=[{id:"general",label:"General",icon:ms,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:as,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:nl,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:rl,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:cl,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:il,searchable:!1,order:15},{id:"environment",label:"Environment",icon:_l,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:ul,searchable:!1,order:20},{id:"models",label:"Models",icon:fl,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:sl,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:ll,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:$l,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:gl,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:ol,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:wl,searchable:!0,placeholder:"Filter add-ons…",order:90}]});e();Hu();fr();var bl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function hl({label:n,body:r,filter:i=""}){return s`
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
  `}function pl(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let r of n)Cn({id:r.id,label:r.label,icon:bl,searchable:!0,searchPlaceholder:`Filter ${r.label} settings…`,order:r.id==="fixture-z-observability"?1:999,component:(i)=>s`<${hl} label=${r.label} body=${r.body} filter=${i?.filter||""} />`})}var hn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},vl={current:hn.current,models:hn.models,model_options:hn.model_options,thinking_level:hn.thinking_level,supports_thinking:hn.supports_thinking,available_thinking_levels:hn.available_thinking_levels},Wu={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},ju={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},rr=new URLSearchParams(window.location.search).get("real")!=="1",Ru=window.fetch.bind(window);function tn(n,r=200){return new Response(JSON.stringify(n),{status:r,headers:{"Content-Type":"application/json"}})}function kl(){window.fetch=async(n,r)=>{let i=new URL(typeof n==="string"?n:n.url,window.location.href),_=String(r?.method||"GET").toUpperCase();if(!rr)return Ru(n,r);if(i.pathname==="/agent/settings-data")return tn(hn);if(i.pathname==="/agent/models")return tn(vl);if(i.pathname==="/agent/addons")return tn(Wu);if(i.pathname.startsWith("/agent/addons/"))return tn({ok:!0,message:"Fixture add-on action accepted.",...Wu});if(i.pathname==="/agent/keychain"){if(_==="GET")return tn(ju);if(_==="POST")return tn({ok:!0,...ju})}if(i.pathname==="/agent/settings/general")return tn({ok:!0,settings:hn});if(i.pathname==="/agent/settings/widget-token/regenerate")return tn({ok:!0,settings:{...hn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(i.pathname.startsWith("/agent/default/message"))return tn({command:{status:"success",message:"Fixture command accepted."}});if(i.pathname.startsWith("/agent/settings/"))return tn({ok:!0,settings:hn,items:[],entries:[]});if(i.pathname==="/agent/client-perf")return tn({ok:!0});return Ru(n,r)}}function Kl(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function Uu(n){try{window.__piclawSettingsRequestedSection=n}catch(r){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function Bl(){let n=new URLSearchParams(window.location.search),[r,i]=w(n.get("section")||"general"),[_,c]=w(Number(n.get("width")||900)),[u,f]=w(Number(n.get("height")||640)),[l,g]=w(rr),[o,x]=w(0),$=L(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),p=U((v)=>{i(v),Uu(v)},[]),b=U(()=>{rr=!rr,g(rr),x((v)=>v+1)},[]);return s`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${r} onChange=${(v)=>p(v.target.value)}>${$.map((v)=>s`<option value=${v}>${v}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${_} onInput=${(v)=>c(Number(v.target.value))} /> ${_}px</label>
        <label>Height <input type="range" min="420" max="900" value=${u} onInput=${(v)=>f(Number(v.target.value))} /> ${u}px</label>
        <button type="button" onClick=${b}>${l?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>x((v)=>v+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${_}px;--fixture-height:${u}px;`}>
        <${Sr} key=${o} onClose=${()=>{}} />
      </div>
    </div>
  `}function zl(){pl(),kl(),Kl();let n=new URLSearchParams(window.location.search);Uu(n.get("section")||"general");let r=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));r.id="settings-widget-fixture-root",In(s`<${Bl} />`,r),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:rr})}zl();

//# debugId=B925A85956D4017C64756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
