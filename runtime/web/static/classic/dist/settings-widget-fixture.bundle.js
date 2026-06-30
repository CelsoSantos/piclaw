var Gu=Object.defineProperty;var Vu=(n)=>n;function Nu(n,r){this[n]=Vu.bind(null,r)}var fn=(n,r)=>{for(var i in r)Gu(n,i,{get:r[i],enumerable:!0,configurable:!0,set:Nu.bind(r,i)})};var O=(n,r)=>()=>(n&&(r=n(n=0)),r);var du={};fn(du,{useState:()=>w,useRef:()=>C,useReducer:()=>N_,useMemo:()=>I,useLayoutEffect:()=>Rr,useImperativeHandle:()=>Iu,useErrorBoundary:()=>Ou,useEffect:()=>Q,useDebugValue:()=>Cu,useContext:()=>Yu,useCallback:()=>R,render:()=>Ln,html:()=>s,h:()=>si,createContext:()=>Lu,Component:()=>cr});function kn(n,r){for(var i in r)n[i]=r[i];return n}function fi(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function si(n,r,i){var _,c,u,f={};for(u in r)u=="key"?_=r[u]:u=="ref"?c=r[u]:f[u]=r[u];if(arguments.length>2&&(f.children=arguments.length>3?Hr.call(arguments,2):i),typeof n=="function"&&n.defaultProps!=null)for(u in n.defaultProps)f[u]===void 0&&(f[u]=n.defaultProps[u]);return pr(n,f,_,c,null)}function pr(n,r,i,_,c){var u={type:n,props:r,key:i,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c==null?++B_:c,__i:-1,__u:0};return c==null&&d.vnode!=null&&d.vnode(u),u}function jr(n){return n.children}function cr(n,r){this.props=n,this.context=r}function Dn(n,r){if(r==null)return n.__?Dn(n.__,n.__i+1):null;for(var i;r<n.__k.length;r++)if((i=n.__k[r])!=null&&i.__e!=null)return i.__e;return typeof n.type=="function"?Dn(n):null}function Mu(n){if(n.__P&&n.__d){var r=n.__v,i=r.__e,_=[],c=[],u=kn({},r);u.__v=r.__v+1,d.vnode&&d.vnode(u),gi(n.__P,u,r,n.__n,n.__P.namespaceURI,32&r.__u?[i]:null,_,i==null?Dn(r):i,!!(32&r.__u),c),u.__v=r.__v,u.__.__k[u.__i]=u,T_(_,u,c),r.__e=r.__=null,u.__e!=i&&j_(u)}}function j_(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(r){if(r!=null&&r.__e!=null)return n.__e=n.__c.base=r.__e}),j_(n)}function ii(n){(!n.__d&&(n.__d=!0)&&Wn.push(n)&&!Fr.__r++||l_!=d.debounceRendering)&&((l_=d.debounceRendering)||z_)(Fr)}function Fr(){try{for(var n,r=1;Wn.length;)Wn.length>r&&Wn.sort(F_),n=Wn.shift(),r=Wn.length,Mu(n)}finally{Wn.length=Fr.__r=0}}function R_(n,r,i,_,c,u,f,g,l,o,x){var $,h,b,v,k,F,y,p=_&&_.__k||zr,V=r.length;for(l=qu(i,r,p,l,V),$=0;$<V;$++)(b=i.__k[$])!=null&&(h=b.__i!=-1&&p[b.__i]||Br,b.__i=$,F=gi(n,b,h,c,u,f,g,l,o,x),v=b.__e,b.ref&&h.ref!=b.ref&&(h.ref&&oi(h.ref,null,b),x.push(b.ref,b.__c||v,b)),k==null&&v!=null&&(k=v),(y=!!(4&b.__u))||h.__k===b.__k?(l=U_(b,l,n,y),y&&h.__e&&(h.__e=null)):typeof b.type=="function"&&F!==void 0?l=F:v&&(l=v.nextSibling),b.__u&=-7);return i.__e=k,l}function qu(n,r,i,_,c){var u,f,g,l,o,x=i.length,$=x,h=0;for(n.__k=Array(c),u=0;u<c;u++)(f=r[u])!=null&&typeof f!="boolean"&&typeof f!="function"?(typeof f=="string"||typeof f=="number"||typeof f=="bigint"||f.constructor==String?f=n.__k[u]=pr(null,f,null,null,null):Wr(f)?f=n.__k[u]=pr(jr,{children:f},null,null,null):f.constructor===void 0&&f.__b>0?f=n.__k[u]=pr(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):n.__k[u]=f,l=u+h,f.__=n,f.__b=n.__b+1,g=null,(o=f.__i=Au(f,i,l,$))!=-1&&($--,(g=i[o])&&(g.__u|=2)),g==null||g.__v==null?(o==-1&&(c>x?h--:c<x&&h++),typeof f.type!="function"&&(f.__u|=4)):o!=l&&(o==l-1?h--:o==l+1?h++:(o>l?h--:h++,f.__u|=4))):n.__k[u]=null;if($)for(u=0;u<x;u++)(g=i[u])!=null&&(2&g.__u)==0&&(g.__e==_&&(_=Dn(g)),G_(g,g));return _}function U_(n,r,i,_){var c,u;if(typeof n.type=="function"){for(c=n.__k,u=0;c&&u<c.length;u++)c[u]&&(c[u].__=n,r=U_(c[u],r,i,_));return r}n.__e!=r&&(_&&(r&&n.type&&!r.parentNode&&(r=Dn(n)),i.insertBefore(n.__e,r||null)),r=n.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function Au(n,r,i,_){var c,u,f,g=n.key,l=n.type,o=r[i],x=o!=null&&(2&o.__u)==0;if(o===null&&g==null||x&&g==o.key&&l==o.type)return i;if(_>(x?1:0)){for(c=i-1,u=i+1;c>=0||u<r.length;)if((o=r[f=c>=0?c--:u++])!=null&&(2&o.__u)==0&&g==o.key&&l==o.type)return f}return-1}function $_(n,r,i){r[0]=="-"?n.setProperty(r,i==null?"":i):n[r]=i==null?"":typeof i!="number"||Qu.test(r)?i:i+"px"}function vr(n,r,i,_,c){var u,f;n:if(r=="style")if(typeof i=="string")n.style.cssText=i;else{if(typeof _=="string"&&(n.style.cssText=_=""),_)for(r in _)i&&r in i||$_(n.style,r,"");if(i)for(r in i)_&&i[r]==_[r]||$_(n.style,r,i[r])}else if(r[0]=="o"&&r[1]=="n")u=r!=(r=r.replace(H_,"$1")),f=r.toLowerCase(),r=f in n||r=="onFocusOut"||r=="onFocusIn"?f.slice(2):r.slice(2),n.l||(n.l={}),n.l[r+u]=i,i?_?i[_r]=_[_r]:(i[_r]=ui,n.addEventListener(r,u?ri:ni,u)):n.removeEventListener(r,u?ri:ni,u);else{if(c=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in n)try{n[r]=i==null?"":i;break n}catch(g){}typeof i=="function"||(i==null||i===!1&&r[4]!="-"?n.removeAttribute(r):n.setAttribute(r,r=="popover"&&i==1?"":i))}}function w_(n){return function(r){if(this.l){var i=this.l[r.type+n];if(r[kr]==null)r[kr]=ui++;else if(r[kr]<i[_r])return;return i(d.event?d.event(r):r)}}}function gi(n,r,i,_,c,u,f,g,l,o){var x,$,h,b,v,k,F,y,p,V,U,H,P,B,T,t=r.type;if(r.constructor!==void 0)return null;128&i.__u&&(l=!!(32&i.__u),u=[g=r.__e=i.__e]),(x=d.__b)&&x(r);n:if(typeof t=="function")try{if(y=r.props,p=t.prototype&&t.prototype.render,V=(x=t.contextType)&&_[x.__c],U=x?V?V.props.value:x.__:_,i.__c?F=($=r.__c=i.__c).__=$.__E:(p?r.__c=$=new t(y,U):(r.__c=$=new cr(y,U),$.constructor=t,$.render=Zu),V&&V.sub($),$.state||($.state={}),$.__n=_,h=$.__d=!0,$.__h=[],$._sb=[]),p&&$.__s==null&&($.__s=$.state),p&&t.getDerivedStateFromProps!=null&&($.__s==$.state&&($.__s=kn({},$.__s)),kn($.__s,t.getDerivedStateFromProps(y,$.__s))),b=$.props,v=$.state,$.__v=r,h)p&&t.getDerivedStateFromProps==null&&$.componentWillMount!=null&&$.componentWillMount(),p&&$.componentDidMount!=null&&$.__h.push($.componentDidMount);else{if(p&&t.getDerivedStateFromProps==null&&y!==b&&$.componentWillReceiveProps!=null&&$.componentWillReceiveProps(y,U),r.__v==i.__v||!$.__e&&$.shouldComponentUpdate!=null&&$.shouldComponentUpdate(y,$.__s,U)===!1){r.__v!=i.__v&&($.props=y,$.state=$.__s,$.__d=!1),r.__e=i.__e,r.__k=i.__k,r.__k.some(function(K){K&&(K.__=r)}),zr.push.apply($.__h,$._sb),$._sb=[],$.__h.length&&f.push($);break n}$.componentWillUpdate!=null&&$.componentWillUpdate(y,$.__s,U),p&&$.componentDidUpdate!=null&&$.__h.push(function(){$.componentDidUpdate(b,v,k)})}if($.context=U,$.props=y,$.__P=n,$.__e=!1,H=d.__r,P=0,p)$.state=$.__s,$.__d=!1,H&&H(r),x=$.render($.props,$.state,$.context),zr.push.apply($.__h,$._sb),$._sb=[];else do $.__d=!1,H&&H(r),x=$.render($.props,$.state,$.context),$.state=$.__s;while($.__d&&++P<25);$.state=$.__s,$.getChildContext!=null&&(_=kn(kn({},_),$.getChildContext())),p&&!h&&$.getSnapshotBeforeUpdate!=null&&(k=$.getSnapshotBeforeUpdate(b,v)),B=x!=null&&x.type===jr&&x.key==null?P_(x.props.children):x,g=R_(n,Wr(B)?B:[B],r,i,_,c,u,f,g,l,o),$.base=r.__e,r.__u&=-161,$.__h.length&&f.push($),F&&($.__E=$.__=null)}catch(K){if(r.__v=null,l||u!=null)if(K.then){for(r.__u|=l?160:128;g&&g.nodeType==8&&g.nextSibling;)g=g.nextSibling;u[u.indexOf(g)]=null,r.__e=g}else{for(T=u.length;T--;)fi(u[T]);_i(r)}else r.__e=i.__e,r.__k=i.__k,K.then||_i(r);d.__e(K,r,i)}else u==null&&r.__v==i.__v?(r.__k=i.__k,r.__e=i.__e):g=r.__e=Du(i.__e,r,i,_,c,u,f,l,o);return(x=d.diffed)&&x(r),128&r.__u?void 0:g}function _i(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(_i))}function T_(n,r,i){for(var _=0;_<i.length;_++)oi(i[_],i[++_],i[++_]);d.__c&&d.__c(r,n),n.some(function(c){try{n=c.__h,c.__h=[],n.some(function(u){u.call(c)})}catch(u){d.__e(u,c.__v)}})}function P_(n){return typeof n!="object"||n==null||n.__b>0?n:Wr(n)?n.map(P_):n.constructor!==void 0?null:kn({},n)}function Du(n,r,i,_,c,u,f,g,l){var o,x,$,h,b,v,k,F=i.props||Br,y=r.props,p=r.type;if(p=="svg"?c="http://www.w3.org/2000/svg":p=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),u!=null){for(o=0;o<u.length;o++)if((b=u[o])&&"setAttribute"in b==!!p&&(p?b.localName==p:b.nodeType==3)){n=b,u[o]=null;break}}if(n==null){if(p==null)return document.createTextNode(y);n=document.createElementNS(c,p,y.is&&y),g&&(d.__m&&d.__m(r,u),g=!1),u=null}if(p==null)F===y||g&&n.data==y||(n.data=y);else{if(u=p=="textarea"&&y.defaultValue!=null?null:u&&Hr.call(n.childNodes),!g&&u!=null)for(F={},o=0;o<n.attributes.length;o++)F[(b=n.attributes[o]).name]=b.value;for(o in F)b=F[o],o=="dangerouslySetInnerHTML"?$=b:o=="children"||(o in y)||o=="value"&&("defaultValue"in y)||o=="checked"&&("defaultChecked"in y)||vr(n,o,null,b,c);for(o in y)b=y[o],o=="children"?h=b:o=="dangerouslySetInnerHTML"?x=b:o=="value"?v=b:o=="checked"?k=b:g&&typeof b!="function"||F[o]===b||vr(n,o,b,F[o],c);if(x)g||$&&(x.__html==$.__html||x.__html==n.innerHTML)||(n.innerHTML=x.__html),r.__k=[];else if($&&(n.innerHTML=""),R_(r.type=="template"?n.content:n,Wr(h)?h:[h],r,i,_,p=="foreignObject"?"http://www.w3.org/1999/xhtml":c,u,f,u?u[0]:i.__k&&Dn(i,0),g,l),u!=null)for(o=u.length;o--;)fi(u[o]);g&&p!="textarea"||(o="value",p=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[o]||p=="progress"&&!v||p=="option"&&v!=F[o])&&vr(n,o,v,F[o],c),o="checked",k!=null&&k!=n[o]&&vr(n,o,k,F[o],c))}return n}function oi(n,r,i){try{if(typeof n=="function"){var _=typeof n.__u=="function";_&&n.__u(),_&&r==null||(n.__u=n(r))}else n.current=r}catch(c){d.__e(c,i)}}function G_(n,r,i){var _,c;if(d.unmount&&d.unmount(n),(_=n.ref)&&(_.current&&_.current!=n.__e||oi(_,null,r)),(_=n.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(u){d.__e(u,r)}_.base=_.__P=null}if(_=n.__k)for(c=0;c<_.length;c++)_[c]&&G_(_[c],r,i||typeof n.type!="function");i||fi(n.__e),n.__c=n.__=n.__e=void 0}function Zu(n,r,i){return this.constructor(n,i)}function Ln(n,r,i){var _,c,u,f;r==document&&(r=document.documentElement),d.__&&d.__(n,r),c=(_=typeof i=="function")?null:i&&i.__k||r.__k,u=[],f=[],gi(r,n=(!_&&i||r).__k=si(jr,null,[n]),c||Br,Br,r.namespaceURI,!_&&i?[i]:c?null:r.firstChild?Hr.call(r.childNodes):null,u,!_&&i?i:c?c.__e:r.firstChild,_,f),T_(u,n,f)}function Lu(n){function r(i){var _,c;return this.getChildContext||(_=new Set,(c={})[r.__c]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){_=null},this.shouldComponentUpdate=function(u){this.props.value!=u.value&&_.forEach(function(f){f.__e=!0,ii(f)})},this.sub=function(u){_.add(u);var f=u.componentWillUnmount;u.componentWillUnmount=function(){_&&_.delete(u),f&&f.call(u)}}),i.children}return r.__c="__cC"+W_++,r.__=n,r.Provider=r.__l=(r.Consumer=function(i,_){return i.children(_)}).contextType=r,r}function In(n,r){nn.__h&&nn.__h(S,n,Zn||r),Zn=0;var i=S.__H||(S.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function w(n){return Zn=1,N_(X_,n)}function N_(n,r,i){var _=In(jn++,2);if(_.t=n,!_.__c&&(_.__=[i?i(r):X_(void 0,r),function(g){var l=_.__N?_.__N[0]:_.__[0],o=_.t(l,g);l!==o&&(_.__N=[o,_.__[1]],_.__c.setState({}))}],_.__c=S,!S.__f)){var c=function(g,l,o){if(!_.__c.__H)return!0;var x=_.__c.__H.__.filter(function(h){return h.__c});if(x.every(function(h){return!h.__N}))return!u||u.call(this,g,l,o);var $=_.__c.props!==g;return x.some(function(h){if(h.__N){var b=h.__[0];h.__=h.__N,h.__N=void 0,b!==h.__[0]&&($=!0)}}),u&&u.call(this,g,l,o)||$};S.__f=!0;var{shouldComponentUpdate:u,componentWillUpdate:f}=S;S.componentWillUpdate=function(g,l,o){if(this.__e){var x=u;u=void 0,c(g,l,o),u=x}f&&f.call(this,g,l,o)},S.shouldComponentUpdate=c}return _.__N||_.__}function Q(n,r){var i=In(jn++,3);!nn.__s&&li(i.__H,r)&&(i.__=n,i.u=r,S.__H.__h.push(i))}function Rr(n,r){var i=In(jn++,4);!nn.__s&&li(i.__H,r)&&(i.__=n,i.u=r,S.__h.push(i))}function C(n){return Zn=5,I(function(){return{current:n}},[])}function Iu(n,r,i){Zn=6,Rr(function(){if(typeof n=="function"){var _=n(r());return function(){n(null),_&&typeof _=="function"&&_()}}if(n)return n.current=r(),function(){return n.current=null}},i==null?i:i.concat(n))}function I(n,r){var i=In(jn++,7);return li(i.__H,r)&&(i.__=n(),i.__H=r,i.__h=n),i.__}function R(n,r){return Zn=8,I(function(){return n},r)}function Yu(n){var r=S.context[n.__c],i=In(jn++,9);return i.c=n,r?(i.__==null&&(i.__=!0,r.sub(S)),r.props.value):n.__}function Cu(n,r){nn.useDebugValue&&nn.useDebugValue(r?r(n):n)}function Ou(n){var r=In(jn++,10),i=w();return r.__=n,S.componentDidCatch||(S.componentDidCatch=function(_,c){r.__&&r.__(_,c),i[1](_)}),[i[0],function(){i[1](void 0)}]}function Ju(){for(var n;n=V_.shift();){var r=n.__H;if(n.__P&&r)try{r.__h.some(Kr),r.__h.some(ci),r.__h=[]}catch(i){r.__h=[],nn.__e(i,n.__v)}}}function Eu(n){var r,i=function(){clearTimeout(_),p_&&cancelAnimationFrame(r),setTimeout(n)},_=setTimeout(i,35);p_&&(r=requestAnimationFrame(i))}function Kr(n){var r=S,i=n.__c;typeof i=="function"&&(n.__c=void 0,i()),S=r}function ci(n){var r=S;n.__c=n.__(),S=r}function li(n,r){return!n||n.length!==r.length||r.some(function(i,_){return i!==n[_]})}function X_(n,r){return typeof r=="function"?r(n):r}function Su(n){var r=K_.get(this);return r||(r=new Map,K_.set(this,r)),(r=Q_(this,r.get(n)||(r.set(n,r=function(i){for(var _,c,u=1,f="",g="",l=[0],o=function(h){u===1&&(h||(f=f.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,h,f):u===3&&(h||f)?(l.push(3,h,f),u=2):u===2&&f==="..."&&h?l.push(4,h,0):u===2&&f&&!h?l.push(5,0,!0,f):u>=5&&((f||!h&&u===5)&&(l.push(u,0,f,c),u=6),h&&(l.push(u,h,0,c),u=6)),f=""},x=0;x<i.length;x++){x&&(u===1&&o(),o(x));for(var $=0;$<i[x].length;$++)_=i[x][$],u===1?_==="<"?(o(),l=[l],u=3):f+=_:u===4?f==="--"&&_===">"?(u=1,f=""):f=_+f[0]:g?_===g?g="":f+=_:_==='"'||_==="'"?g=_:_===">"?(o(),u=1):u&&(_==="="?(u=5,c=f,f=""):_==="/"&&(u<5||i[x][$+1]===">")?(o(),u===3&&(l=l[0]),u=l,(l=l[0]).push(2,0,u),u=0):_===" "||_==="\t"||_===`
`||_==="\r"?(o(),u=2):f+=_),u===3&&f==="!--"&&(u=4,l=l[0])}return o(),l}(n)),r),arguments,[])).length>1?r:r[0]}var Hr,d,B_,Xu,Wn,l_,z_,F_,mr,kr,_r,H_,ui,ni,ri,W_,Br,zr,Qu,Wr,jn,S,ar,t_,Zn=0,V_,nn,y_,x_,b_,h_,v_,k_,p_,Q_=function(n,r,i,_){var c;r[0]=0;for(var u=1;u<r.length;u++){var f=r[u++],g=r[u]?(r[0]|=f?1:2,i[r[u++]]):r[++u];f===3?_[0]=g:f===4?_[1]=Object.assign(_[1]||{},g):f===5?(_[1]=_[1]||{})[r[++u]]=g:f===6?_[1][r[++u]]+=g+"":f?(c=n.apply(g,Q_(n,g,i,["",null])),_.push(c),g[0]?r[0]|=2:(r[u-2]=0,r[u]=c)):_.push(g)}return _},K_,s;var m=O(()=>{Br={},zr=[],Qu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Wr=Array.isArray;Hr=zr.slice,d={__e:function(n,r,i,_){for(var c,u,f;r=r.__;)if((c=r.__c)&&!c.__)try{if((u=c.constructor)&&u.getDerivedStateFromError!=null&&(c.setState(u.getDerivedStateFromError(n)),f=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(n,_||{}),f=c.__d),f)return c.__E=c}catch(g){n=g}throw n}},B_=0,Xu=function(n){return n!=null&&n.constructor===void 0},cr.prototype.setState=function(n,r){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=kn({},this.state),typeof n=="function"&&(n=n(kn({},i),this.props)),n&&kn(i,n),n!=null&&this.__v&&(r&&this._sb.push(r),ii(this))},cr.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ii(this))},cr.prototype.render=jr,Wn=[],z_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F_=function(n,r){return n.__v.__b-r.__v.__b},Fr.__r=0,mr=Math.random().toString(8),kr="__d"+mr,_r="__a"+mr,H_=/(PointerCapture)$|Capture$/i,ui=0,ni=w_(!1),ri=w_(!0),W_=0;V_=[],nn=d,y_=nn.__b,x_=nn.__r,b_=nn.diffed,h_=nn.__c,v_=nn.unmount,k_=nn.__;nn.__b=function(n){S=null,y_&&y_(n)},nn.__=function(n,r){n&&r.__k&&r.__k.__m&&(n.__m=r.__k.__m),k_&&k_(n,r)},nn.__r=function(n){x_&&x_(n),jn=0;var r=(S=n.__c).__H;r&&(ar===S?(r.__h=[],S.__h=[],r.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(r.__h.some(Kr),r.__h.some(ci),r.__h=[],jn=0)),ar=S},nn.diffed=function(n){b_&&b_(n);var r=n.__c;r&&r.__H&&(r.__H.__h.length&&(V_.push(r)!==1&&t_===nn.requestAnimationFrame||((t_=nn.requestAnimationFrame)||Eu)(Ju)),r.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),ar=S=null},nn.__c=function(n,r){r.some(function(i){try{i.__h.some(Kr),i.__h=i.__h.filter(function(_){return!_.__||ci(_)})}catch(_){r.some(function(c){c.__h&&(c.__h=[])}),r=[],nn.__e(_,i.__v)}}),h_&&h_(n,r)},nn.unmount=function(n){v_&&v_(n);var r,i=n.__c;i&&i.__H&&(i.__H.__.some(function(_){try{Kr(_)}catch(c){r=c}}),i.__H=void 0,r&&nn.__e(r,i.__v))};p_=typeof requestAnimationFrame=="function";K_=new Map;s=Su.bind(si)});function Rn(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function gn(n,r){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,r)}catch{return}}function $i(n,r=!1){let i=Rn(n);if(i===null)return r;return i==="true"}function wi(n,r=null){let i=Rn(n);if(i===null)return r;let _=parseInt(i,10);return Number.isFinite(_)?_:r}function M_(n){let r=Rn(n);if(!r)return null;try{return JSON.parse(r)}catch{return null}}function Tr(n){let r=String(n??"").trim().toLowerCase().replace(/_/g,"-");if(!r)return Yn;if(r==="zh-cn"||r==="zh"||r==="zh-hans"||r.startsWith("zh-hans"))return"zh-CN";if(r==="ja"||r.startsWith("ja-"))return"ja";if(r==="en"||r.startsWith("en-"))return"en";return Yn}function nf(){if(typeof navigator>"u")return Yn;let n=[...Array.isArray(navigator.languages)?navigator.languages:[],navigator.language].filter((r)=>typeof r==="string"&&r.length>0);for(let r of n){let i=Tr(r);if(i!==Yn)return i}return Yn}function rf(){let n=Rn(D_);if(n)return Tr(n);return nf()}function _f(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(ti,{detail:{locale:n}}))}function Ur(){if(!yi)cf();return Pn}function cf(){return Pn=rf(),yi=!0,Pn}function uf(n,r={}){let i=Tr(n);if(yi=!0,i===Pn&&r.persist===!1)return Pn;if(Pn=i,r.persist!==!1)gn(D_,i);return _f(i),Pn}function ff(n,r){if(!r)return n;return n.replace(/\{(\w+)\}/g,(i,_)=>{let c=r[_];return c===void 0||c===null?i:String(c)})}function L_(n,r,i=Ur()){let c=au[i]?.[n]??Z_[n]??n;return ff(c,r)}function Pr(n,r){return L_(n,r)}function sf(){let[n,r]=w(Ur());return Q(()=>{if(typeof window>"u"||typeof window.addEventListener!=="function")return;let i=(_)=>{let c=_.detail,u=Tr(c?.locale??Ur());r(u)};return window.addEventListener(ti,i),r(Ur()),()=>window.removeEventListener(ti,i)},[]),[n,(i)=>uf(i)]}function e(){let[n,r]=sf();return{locale:n,setLocale:r,t:(i,_)=>L_(i,_,n)}}var Yn="en",q_,A_,D_="piclaw_locale",ti="piclaw-locale-change",Z_,eu,mu,au,Pn,yi=!1;var wn=O(()=>{m();q_=["en","zh-CN","ja"],A_={en:"English","zh-CN":"简体中文",ja:"日本語"},Z_={"compose.placeholder":"Message (Enter to send, Shift+Enter for newline)...","compose.send":"Send","compose.stop":"Stop","compose.searchPlaceholder":"Search (Enter to run)...","compose.clearAll":"Clear all","compose.clearAllTitle":"Clear all attachments and references","compose.scope":"Scope","compose.searchScope":"Search scope","compose.scopeCurrent":"Current","compose.scopeBranchFamily":"Branch family","compose.scopeAll":"All chats","compose.filterImages":"Images","compose.filterAttachments":"Attachments","compose.search":"Search","compose.closeSearch":"Close search","compose.shareLocation":"Share location","compose.attachFile":"Attach file","compose.queueControls":"Queued follow-up controls","compose.moveUp":"Move up","compose.moveUpQueue":"Move up in queue","compose.moveDown":"Move down","compose.moveDownQueue":"Move down in queue","compose.editInCompose":"Edit in compose","compose.returnToEditor":"Return queued message to editor","compose.injectSteer":"Inject queued follow-up as steer","compose.steer":"Steer","compose.cancelQueued":"Cancel queued message","compose.resizeInput":"Resize message input","compose.resizeInputHint":"Drag to resize message input","compose.modelPicker":"Model picker","compose.sessionsAndAgents":"Sessions and agents","compose.openModelPicker":"Open model picker","compose.newBranchTitle":"Create a new branch from this chat","compose.newRootTitle":"Create a clean root session such as web:ops","compose.renameSessionTitle":"Rename the current session","compose.pruneSessionTitle":"Delete (prune) current agent/session branch","compose.filterImagesTitle":"Only show messages with images","compose.filterAttachmentsTitle":"Only show messages with attachments","compose.selectModel":"Select model","compose.loadingModels":"Loading models…","compose.noModels":"No models available.","compose.nextModel":"Next model","compose.manageSessions":"Manage sessions & agents","compose.noSessions":"No other sessions yet.","compose.newBranch":"New branch","compose.newRoot":"New root…","compose.mergeCurrent":"Merge current w/ parent","compose.renameCurrent":"Rename current…","compose.deleteCurrent":"Delete current…","compose.mergeInto":"Merge this branch into {target}","compose.mergeBlocked":"This branch cannot be merged while active or while it has children","workspace.title":"Workspace","workspace.newFile":"New file","workspace.refresh":"Refresh","workspace.actions":"Workspace actions","workspace.uploadFiles":"Upload files","workspace.reindexing":"Reindexing workspace…","workspace.deleteFile":"Delete file","workspace.download":"Download","workspace.uploadToFolder":"Upload files to this folder","workspace.addFolderHint":"Add folder hint to compose","workspace.downloadZip":"Download folder as zip","workspace.openInTab":"Open in tab","workspace.openInEditor":"Open in editor","workspace.renameSelected":"Rename selected","workspace.downloadSelectedFile":"Download selected file","workspace.downloadSelectedFolder":"Download selected folder (zip)","workspace.deleteSelectedFile":"Delete selected file","shell.settings":"Settings","shell.newChat":"New chat","shell.connecting":"Connecting…","shell.connected":"Connected","language.label":"Language","settings.title":"Settings","settings.close":"Close (Esc)","settings.filter":"Filter…","settings.loading":"Loading settings…","settings.section.general":"General","settings.section.sessions":"Sessions","settings.section.recordings":"Recordings","settings.section.compaction":"Compaction","settings.section.keyboard":"Keyboard","settings.section.workspace":"Workspace","settings.section.environment":"Environment","settings.section.providers":"Providers","settings.section.models":"Models","settings.section.theme":"Appearance","settings.section.scheduled-tasks":"Scheduled Tasks","settings.section.quick-actions":"Quick Actions","settings.section.keychain":"Keychain","settings.section.tools":"Tools","settings.section.addons":"Add-ons","settings.placeholder.recordings":"Filter recordings…","settings.placeholder.keyboard":"Filter shortcuts…","settings.placeholder.environment":"Filter environment…","settings.placeholder.models":"Filter models…","settings.placeholder.scheduled-tasks":"Filter scheduled tasks…","settings.placeholder.quick-actions":"Filter quick actions…","settings.placeholder.keychain":"Filter entries…","settings.placeholder.tools":"Filter tools…","settings.placeholder.addons":"Filter add-ons…","preview.close":"Close","preview.loading":"Loading preview…","preview.files":"Files","preview.folders":"Folders","preview.compressed":"Compressed","preview.uncompressed":"Uncompressed","preview.name":"Name","preview.type":"Type","preview.method":"Method","preview.size":"Size","post.deleteMessage":"Delete message","post.tooLarge":"Message too large to display.","post.previewTruncated":"Preview truncated.","post.submitted":"Submitted","post.discard":"Discard","post.save":"Save","post.cancel":"Cancel","post.addNote":"Add note","post.addNotePlaceholder":"Add a note…","tab.close":"Close","tab.closeOthers":"Close Others","tab.closeAll":"Close All","tab.reattach":"Reattach","tab.openInWindow":"Open in Window","tab.openInNewTab":"Open in New Tab","tab.pinned":"Pinned","tab.detached":"Detached","tab.openSeparateWindow":"Open in separate window","status.trackedVariables":"Tracked variables","status.attachToSession":"Attach to session","status.files":"Files","status.proposedDiff":"Proposed diff","status.copyTmux":"Copy tmux command","status.experimentDuration":"Experiment duration","status.sinceLastActivity":"Since last activity","annotator.title":"Annotate image","annotator.typeLabel":"Type label…","annotator.undo":"Undo","annotator.resetZoom":"Reset zoom","tree.filter":"Filter…","tree.sessionTree":"Session tree","btw.label":"BTW side conversation","btw.close":"Close BTW","btw.thinking":"Thinking","mdpreview.close":"Close preview","mdpreview.unavailable":"Preview unavailable","widget.close":"Close widget","oobe.gettingStarted":"Getting started","oobe.needsSetupTitle":"Instance needs setup","oobe.configuredTitle":"Instance is configured","oobe.needsSetupBody":"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.","oobe.configuredBody":"This instance looks configured. Review or update provider and model settings in Settings.","oobe.openSettings":"Open Settings","oobe.dismiss":"Dismiss","oobe.done":"Done","palette.placeholder":"Type to jump to an agent, workspace action, or slash command…","palette.hideWorkspace":"Hide workspace","palette.showWorkspace":"Show workspace","palette.hideWorkspaceDesc":"Hide the workspace sidebar.","palette.showWorkspaceDesc":"Show the workspace sidebar.","palette.exitChatOnly":"Exit chat-only mode","palette.chatOnly":"Chat-only mode","palette.exitChatOnlyDesc":"Return to the split workspace layout.","palette.chatOnlyDesc":"Switch to the chat-only layout.","palette.groupAgents":"Agents","palette.groupWorkspace":"Workspace","palette.groupSlash":"Slash commands","palette.hintMove":"Move","palette.hintSelect":"Select","palette.hintPopOut":"Pop out","palette.hintClose":"Close","settings.appliedNotice":"Settings applied. Changes take effect on the next turn.","settings.sessions.lifecycle":"Session Lifecycle","settings.sessions.autoRotate":"Auto-rotate sessions","settings.sessions.maxSize":"Max session size (MB)","settings.sessions.maxSizeAria":"max session size","settings.sessions.agentBehaviour":"Agent Behaviour","settings.sessions.toolBudget":"Tool use budget","settings.sessions.toolBudgetAria":"tool use budget","settings.sessions.toolBudgetHint":"max tool-call messages per turn","settings.sessions.isolation":"Session isolation","settings.sessions.isolationNone":"None — full cross-session visibility","settings.sessions.isolationSummary":"Summary — tools visible, no arguments","settings.sessions.isolationFull":"Full — sessions cannot see each other","settings.editor.heading":"Editor","settings.editor.vimMode":"Vim mode","settings.editor.showWhitespace":"Show whitespace","settings.editor.livePreview":"Markdown live preview","settings.editor.fontSize":"Font size (px)","settings.editor.fontSizeAria":"editor font size","settings.editor.fontFamily":"Font family","settings.editor.fontFamilyPlaceholder":"monospace (default)","settings.editor.localOnlyHint":"This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.","settings.appearance.syncing":"Syncing appearance…","settings.appearance.default":"Default","settings.appearance.autoLightDark":"auto (light/dark)","settings.appearance.tint":"Tint:","settings.appearance.clearTint":"Clear tint","settings.appearance.none":"none","settings.keyboard.heading":"Keyboard","settings.keyboard.hint1":"Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.","settings.keyboard.hint1b":"is reserved for dismiss/abort and cannot be rebound.","settings.keyboard.hint2mid":"and typing","settings.keyboard.hint2end":"outside the compose box open this pane.","settings.keyboard.resetAll":"Reset all to defaults","settings.keyboard.defaultColon":"Default:","settings.keyboard.save":"Save","settings.keyboard.defaultBtn":"Default","settings.keyboard.noMatch":"No shortcuts match this filter.","settings.keyboard.invalidShortcut":"Invalid shortcut: {token}. Escape is reserved and cannot be rebound.","settings.keyboard.saved":"Keyboard shortcuts saved.","settings.keyboard.resetOne":"Keyboard shortcut reset to default.","settings.keyboard.resetAllDone":"Keyboard shortcuts reset to defaults.","settings.workspace.serverApplied":"Workspace settings applied. Server-side limits affect new workspace requests immediately.","settings.workspace.browserApplied":"Browser workspace settings applied immediately in this tab.","settings.workspace.access":"Access","settings.workspace.enableTerminal":"Enable web terminal","settings.workspace.allowVnc":"Allow direct VNC targets","settings.workspace.accessHint":"Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.","settings.workspace.guardrails":"Server scan guardrails","settings.workspace.maxDepth":"Max tree depth","settings.workspace.maxDepthAria":"workspace tree max depth","settings.workspace.maxDepthHintPre":"caps all","settings.workspace.maxDepthHintPost":"requests","settings.workspace.maxEntries":"Max entries per scan","settings.workspace.maxEntriesAria":"workspace tree max entries","settings.workspace.maxEntriesHint":"truncate oversized tree walks earlier","settings.workspace.thisBrowser":"This browser","settings.workspace.refreshInterval":"Refresh interval (seconds)","settings.workspace.refreshIntervalAria":"workspace refresh interval","settings.workspace.folderDepth":"Folder preview scan depth","settings.workspace.folderDepthAria":"folder preview scan depth","settings.workspace.folderDepthHintPre":"set to","settings.workspace.folderDepthHintPost":"to disable folder size preview scans","settings.workspace.footerHint":"Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.","settings.models.thinkingLevel":"Thinking level","settings.models.noThinking":"Current model does not support thinking.","settings.models.thinkingLevelLabel":"Thinking level:","settings.models.loading":"Loading models…","settings.models.summary":"Model and provider names may wrap in narrow panes to avoid clipping.","settings.models.scopedOnly":"Scoped models only","settings.models.scopedCheckboxPre":"Use Pi","settings.models.scopedCheckboxPost":"for Piclaw model lists","settings.models.scopedHintPre":"Filters this picker and the","settings.models.scopedHintPost":"tool. TUI model selection remains unchanged.","settings.models.colModel":"Model","settings.models.colProvider":"Provider","settings.models.colContext":"Context","settings.models.colReasoning":"Reasoning","settings.models.noMatch":'No models match "{filter}"',"settings.tools.unavailable":"Tool data not available.","settings.tools.search":"Search","settings.tools.matchMode":"Match mode","settings.tools.orMode":"Any keyword (OR) — results match at least one search term","settings.tools.andMode":"All keywords (AND) — results must match every search term","settings.tools.colEnabled":"Enabled","settings.tools.colTool":"Tool","settings.tools.colCompact":"Compact","settings.tools.colKind":"Kind","settings.tools.colSummary":"Summary","settings.tools.colSource":"Source","settings.tools.disableCompaction":"Disable tool-result compaction for this tool","settings.tools.enableCompaction":"Enable tool-result compaction for this tool","settings.tools.noMatch":'No tools match "{filter}"',"settings.tools.footer":"Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; the “Compact” column controls tool-result compaction eligibility.","settings.environment.heading":"Environment","settings.environment.introPre":"Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to","settings.environment.introPost":", so subsequent tool calls inherit them.","settings.environment.refresh":"Refresh","settings.environment.addOverride":"Add override","settings.environment.valuePlaceholder":"value","settings.environment.save":"Save","settings.environment.countLine":"{count} variables visible • {overrides} overrides active • {keychain} keychain-injected variables hidden","settings.environment.overridden":"Overridden in KV","settings.environment.inherited":"Inherited from process environment","settings.environment.kindOverride":"override","settings.environment.kindProcess":"process","settings.environment.clear":"Clear","settings.environment.noMatch":'No environment variables match "{filter}".',"settings.environment.refreshedToast":"Environment refreshed.","settings.environment.savedToast":"Saved environment override for {name}.","settings.environment.clearedToast":"Cleared environment override for {name}.","settings.quickActions.loading":"Loading…","settings.quickActions.heading":"Timeline Quick Actions","settings.quickActions.intro":"Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.","settings.quickActions.enableAll":"Enable all","settings.quickActions.saving":"Saving…","settings.quickActions.saveApply":"Save & apply","settings.quickActions.workspaceCommands":"Workspace commands","settings.quickActions.noWorkspaceMatch":"No workspace commands match this filter.","settings.quickActions.slashCommands":"Slash commands","settings.quickActions.slashFallback":"slash command","settings.quickActions.noSlashMatch":"No slash commands match this filter.","settings.quickActions.savingToast":"Saving quick actions…","settings.quickActions.savedToast":"Quick Actions saved.","settings.providers.authApiKey":"API key","settings.providers.authConfigured":"Configured","settings.providers.heading":"Providers","settings.providers.tagCustom":"Custom","settings.providers.logout":"Logout","settings.providers.reconfigure":"Reconfigure","settings.providers.setUp":"Set up","settings.providers.setupHint":"Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.","settings.providers.starting":"Starting…","settings.providers.signInOAuth":"Sign in with OAuth","settings.providers.apiKeyLabel":"API Key","settings.providers.apiKeyPlaceholder":"Enter API key","settings.providers.save":"Save","settings.providers.configuring":"Configuring…","settings.providers.saveConfig":"Save configuration","settings.providers.apiKeyEmpty":"API key cannot be empty.","settings.providers.configuringToast":"Configuring {provider}…","settings.providers.configured":"{provider} configured.","settings.providers.startingOAuth":"Starting OAuth for {provider}…","settings.providers.oauthOpened":"OAuth window opened. Complete the sign-in flow, then close this message.","settings.providers.oauthStarted":"OAuth flow started for {provider}. Check the chat.","settings.providers.loggingOut":"Logging out {provider}…","settings.providers.loggedOut":"Logged out {provider}. Restart may be needed.","menu.title":"Menu","menu.showWorkspace":"Show workspace","menu.hideWorkspace":"Hide workspace","menu.openExplorer":"Open explorer","menu.chatOnly":"Chat-only mode","menu.exitChatOnly":"Exit chat-only mode","menu.openTerminal":"Open terminal in tab","menu.openVnc":"Open VNC in tab","menu.newFile":"New file","menu.openRecent":"Open Recent","menu.refreshTree":"Refresh tree","menu.reindex":"Reindex workspace","menu.showHidden":"Show hidden files","menu.hideHidden":"Hide hidden files","menu.scale":"Scale","menu.settings":"Settings"},eu={"compose.placeholder":"输入消息（回车发送，Shift+回车换行）...","compose.send":"发送","compose.stop":"停止","compose.searchPlaceholder":"搜索（回车运行）...","compose.clearAll":"清除全部","compose.clearAllTitle":"清除所有附件和引用","compose.scope":"范围","compose.searchScope":"搜索范围","compose.scopeCurrent":"当前","compose.scopeBranchFamily":"分支系列","compose.scopeAll":"所有聊天","compose.filterImages":"图片","compose.filterAttachments":"附件","compose.search":"搜索","compose.closeSearch":"关闭搜索","compose.shareLocation":"分享位置","compose.attachFile":"附加文件","compose.queueControls":"排队后续消息控制","compose.moveUp":"上移","compose.moveUpQueue":"在队列中上移","compose.moveDown":"下移","compose.moveDownQueue":"在队列中下移","compose.editInCompose":"在输入框中编辑","compose.returnToEditor":"将排队消息返回编辑器","compose.injectSteer":"作为引导插入排队的后续消息","compose.steer":"引导","compose.cancelQueued":"取消排队消息","compose.resizeInput":"调整消息输入框大小","compose.resizeInputHint":"拖动以调整消息输入框大小","compose.modelPicker":"模型选择器","compose.sessionsAndAgents":"会话与代理","compose.openModelPicker":"打开模型选择器","compose.newBranchTitle":"从此聊天创建新分支","compose.newRootTitle":"创建一个干净的根会话，例如 web:ops","compose.renameSessionTitle":"重命名当前会话","compose.pruneSessionTitle":"删除（修剪）当前代理/会话分支","compose.filterImagesTitle":"仅显示含图片的消息","compose.filterAttachmentsTitle":"仅显示含附件的消息","compose.selectModel":"选择模型","compose.loadingModels":"正在加载模型…","compose.noModels":"没有可用的模型。","compose.nextModel":"下一个模型","compose.manageSessions":"管理会话与代理","compose.noSessions":"暂无其他会话。","compose.newBranch":"新建分支","compose.newRoot":"新建根会话…","compose.mergeCurrent":"将当前合并到父级","compose.renameCurrent":"重命名当前…","compose.deleteCurrent":"删除当前…","compose.mergeInto":"将此分支合并到 {target}","compose.mergeBlocked":"当此分支处于活动状态或有子分支时无法合并","workspace.title":"工作区","workspace.newFile":"新建文件","workspace.refresh":"刷新","workspace.actions":"工作区操作","workspace.uploadFiles":"上传文件","workspace.reindexing":"正在重建索引…","workspace.deleteFile":"删除文件","workspace.download":"下载","workspace.uploadToFolder":"上传文件到此文件夹","workspace.addFolderHint":"将文件夹提示添加到输入框","workspace.downloadZip":"将文件夹下载为 zip","workspace.openInTab":"在标签页打开","workspace.openInEditor":"在编辑器打开","workspace.renameSelected":"重命名所选","workspace.downloadSelectedFile":"下载所选文件","workspace.downloadSelectedFolder":"下载所选文件夹（zip）","workspace.deleteSelectedFile":"删除所选文件","shell.settings":"设置","shell.newChat":"新建对话","shell.connecting":"连接中…","shell.connected":"已连接","language.label":"语言","settings.title":"设置","settings.close":"关闭（Esc）","settings.filter":"筛选…","settings.loading":"加载设置中…","settings.section.general":"常规","settings.section.sessions":"会话","settings.section.recordings":"录制","settings.section.compaction":"压缩","settings.section.keyboard":"键盘","settings.section.workspace":"工作区","settings.section.environment":"环境","settings.section.providers":"提供商","settings.section.models":"模型","settings.section.theme":"外观","settings.section.scheduled-tasks":"计划任务","settings.section.quick-actions":"快捷操作","settings.section.keychain":"密钥串","settings.section.tools":"工具","settings.section.addons":"插件","settings.placeholder.recordings":"筛选录制…","settings.placeholder.keyboard":"筛选快捷键…","settings.placeholder.environment":"筛选环境…","settings.placeholder.models":"筛选模型…","settings.placeholder.scheduled-tasks":"筛选计划任务…","settings.placeholder.quick-actions":"筛选快捷操作…","settings.placeholder.keychain":"筛选条目…","settings.placeholder.tools":"筛选工具…","settings.placeholder.addons":"筛选插件…","preview.close":"关闭","preview.loading":"正在加载预览…","preview.files":"文件","preview.folders":"文件夹","preview.compressed":"压缩后","preview.uncompressed":"未压缩","preview.name":"名称","preview.type":"类型","preview.method":"方法","preview.size":"大小","post.deleteMessage":"删除消息","post.tooLarge":"消息过大，无法显示。","post.previewTruncated":"预览已截断。","post.submitted":"已提交","post.discard":"丢弃","post.save":"保存","post.cancel":"取消","post.addNote":"添加备注","post.addNotePlaceholder":"添加备注…","tab.close":"关闭","tab.closeOthers":"关闭其他","tab.closeAll":"全部关闭","tab.reattach":"重新附加","tab.openInWindow":"在窗口中打开","tab.openInNewTab":"在新标签页打开","tab.pinned":"已固定","tab.detached":"已分离","tab.openSeparateWindow":"在独立窗口中打开","status.trackedVariables":"跟踪的变量","status.attachToSession":"附加到会话","status.files":"文件","status.proposedDiff":"建议的差异","status.copyTmux":"复制 tmux 命令","status.experimentDuration":"实验时长","status.sinceLastActivity":"自上次活动以来","annotator.title":"标注图片","annotator.typeLabel":"输入标签…","annotator.undo":"撤销","annotator.resetZoom":"重置缩放","tree.filter":"筛选…","tree.sessionTree":"会话树","btw.label":"BTW 附加对话","btw.close":"关闭 BTW","btw.thinking":"思考中","mdpreview.close":"关闭预览","mdpreview.unavailable":"预览不可用","widget.close":"关闭小部件","oobe.gettingStarted":"入门指南","oobe.needsSetupTitle":"实例需要设置","oobe.configuredTitle":"实例已配置","oobe.needsSetupBody":"此实例尚未配置。请打开“设置”并设置 AI 提供商/模型以开始发送请求。","oobe.configuredBody":"此实例看起来已配置。请在“设置”中查看或更新提供商和模型设置。","oobe.openSettings":"打开设置","oobe.dismiss":"忽略","oobe.done":"完成","palette.placeholder":"输入以跳转到代理、工作区操作或斜杠命令…","palette.hideWorkspace":"隐藏工作区","palette.showWorkspace":"显示工作区","palette.hideWorkspaceDesc":"隐藏工作区侧边栏。","palette.showWorkspaceDesc":"显示工作区侧边栏。","palette.exitChatOnly":"退出仅聊天模式","palette.chatOnly":"仅聊天模式","palette.exitChatOnlyDesc":"返回分屏工作区布局。","palette.chatOnlyDesc":"切换到仅聊天布局。","palette.groupAgents":"代理","palette.groupWorkspace":"工作区","palette.groupSlash":"斜杠命令","palette.hintMove":"移动","palette.hintSelect":"选择","palette.hintPopOut":"弹出","palette.hintClose":"关闭","settings.appliedNotice":"设置已应用。更改将在下一回合生效。","settings.sessions.lifecycle":"会话生命周期","settings.sessions.autoRotate":"自动轮换会话","settings.sessions.maxSize":"最大会话大小（MB）","settings.sessions.maxSizeAria":"最大会话大小","settings.sessions.agentBehaviour":"代理行为","settings.sessions.toolBudget":"工具使用预算","settings.sessions.toolBudgetAria":"工具使用预算","settings.sessions.toolBudgetHint":"每回合最大工具调用消息数","settings.sessions.isolation":"会话隔离","settings.sessions.isolationNone":"无 — 完全跨会话可见","settings.sessions.isolationSummary":"摘要 — 工具可见，无参数","settings.sessions.isolationFull":"完全 — 会话之间不可见","settings.editor.heading":"编辑器","settings.editor.vimMode":"Vim 模式","settings.editor.showWhitespace":"显示空白字符","settings.editor.livePreview":"Markdown 实时预览","settings.editor.fontSize":"字号（px）","settings.editor.fontSizeAria":"编辑器字号","settings.editor.fontFamily":"字体","settings.editor.fontFamilyPlaceholder":"monospace（默认）","settings.editor.localOnlyHint":"仅限此浏览器。编辑器更改存储在本地浏览器中，并在下次打开或重新加载文件标签页时生效。","settings.appearance.syncing":"正在同步外观…","settings.appearance.default":"默认","settings.appearance.autoLightDark":"自动（浅色/深色）","settings.appearance.tint":"色调：","settings.appearance.clearTint":"清除色调","settings.appearance.none":"无","settings.keyboard.heading":"键盘","settings.keyboard.hint1":"将应用级快捷键自定义为逗号分隔的绑定。更改立即生效。","settings.keyboard.hint1b":"已保留用于关闭/中止，无法重新绑定。","settings.keyboard.hint2mid":"以及键入","settings.keyboard.hint2end":"（在输入框外）可打开此面板。","settings.keyboard.resetAll":"全部重置为默认","settings.keyboard.defaultColon":"默认：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"默认","settings.keyboard.noMatch":"没有匹配此筛选的快捷键。","settings.keyboard.invalidShortcut":"无效快捷键：{token}。Escape 已保留，无法重新绑定。","settings.keyboard.saved":"快捷键已保存。","settings.keyboard.resetOne":"快捷键已重置为默认。","settings.keyboard.resetAllDone":"快捷键已全部重置为默认。","settings.workspace.serverApplied":"工作区设置已应用。服务器端限制立即影响新的工作区请求。","settings.workspace.browserApplied":"浏览器工作区设置已在此标签页立即应用。","settings.workspace.access":"访问","settings.workspace.enableTerminal":"启用 Web 终端","settings.workspace.allowVnc":"允许直接 VNC 目标","settings.workspace.accessHint":"终端访问立即更新。直接 VNC 目标策略适用于新的 VNC 请求。","settings.workspace.guardrails":"服务器扫描防护","settings.workspace.maxDepth":"最大树深度","settings.workspace.maxDepthAria":"工作区树最大深度","settings.workspace.maxDepthHintPre":"限制所有","settings.workspace.maxDepthHintPost":"请求","settings.workspace.maxEntries":"每次扫描最大条目数","settings.workspace.maxEntriesAria":"工作区树最大条目数","settings.workspace.maxEntriesHint":"更早截断超大的树遍历","settings.workspace.thisBrowser":"此浏览器","settings.workspace.refreshInterval":"刷新间隔（秒）","settings.workspace.refreshIntervalAria":"工作区刷新间隔","settings.workspace.folderDepth":"文件夹预览扫描深度","settings.workspace.folderDepthAria":"文件夹预览扫描深度","settings.workspace.folderDepthHintPre":"设为","settings.workspace.folderDepthHintPost":"以禁用文件夹大小预览扫描","settings.workspace.footerHint":"根目录和文件夹展开的树加载保持较浅；文件夹大小预览是 UI 中最深的工作区扫描。","settings.models.thinkingLevel":"思考级别","settings.models.noThinking":"当前模型不支持思考。","settings.models.thinkingLevelLabel":"思考级别：","settings.models.loading":"正在加载模型…","settings.models.summary":"在狭窄面板中，模型和提供商名称可能换行以避免裁切。","settings.models.scopedOnly":"仅限范围内模型","settings.models.scopedCheckboxPre":"使用 Pi 的","settings.models.scopedCheckboxPost":"作为 Piclaw 模型列表","settings.models.scopedHintPre":"筛选此选择器和","settings.models.scopedHintPost":"工具。TUI 模型选择保持不变。","settings.models.colModel":"模型","settings.models.colProvider":"提供商","settings.models.colContext":"上下文","settings.models.colReasoning":"推理","settings.models.noMatch":"没有匹配 “{filter}” 的模型","settings.tools.unavailable":"工具数据不可用。","settings.tools.search":"搜索","settings.tools.matchMode":"匹配模式","settings.tools.orMode":"任意关键词（OR）— 结果至少匹配一个搜索词","settings.tools.andMode":"所有关键词（AND）— 结果必须匹配每个搜索词","settings.tools.colEnabled":"已启用","settings.tools.colTool":"工具","settings.tools.colCompact":"压缩","settings.tools.colKind":"类型","settings.tools.colSummary":"摘要","settings.tools.colSource":"来源","settings.tools.disableCompaction":"为此工具禁用工具结果压缩","settings.tools.enableCompaction":"为此工具启用工具结果压缩","settings.tools.noMatch":"没有匹配 “{filter}” 的工具","settings.tools.footer":"工具激活由代理运行时管理。组复选框可折叠/展开；“压缩”列控制工具结果压缩资格。","settings.environment.heading":"环境","settings.environment.introPre":"仅显示非 keychain 环境变量。覆盖项存储在扩展 KV 中并应用于","settings.environment.introPost":"，因此后续工具调用会继承它们。","settings.environment.refresh":"刷新","settings.environment.addOverride":"添加覆盖","settings.environment.valuePlaceholder":"值","settings.environment.save":"保存","settings.environment.countLine":"{count} 个变量可见 • {overrides} 个覆盖生效 • {keychain} 个 keychain 注入变量已隐藏","settings.environment.overridden":"在 KV 中覆盖","settings.environment.inherited":"继承自进程环境","settings.environment.kindOverride":"覆盖","settings.environment.kindProcess":"进程","settings.environment.clear":"清除","settings.environment.noMatch":"没有匹配 “{filter}” 的环境变量。","settings.environment.refreshedToast":"环境已刷新。","settings.environment.savedToast":"已保存 {name} 的环境覆盖。","settings.environment.clearedToast":"已清除 {name} 的环境覆盖。","settings.quickActions.loading":"加载中…","settings.quickActions.heading":"时间线快捷操作","settings.quickActions.intro":"选择哪些操作出现在时间线预输入中。代理始终优先固定，然后是工作区命令，再是斜杠命令。","settings.quickActions.enableAll":"全部启用","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存并应用","settings.quickActions.workspaceCommands":"工作区命令","settings.quickActions.noWorkspaceMatch":"没有匹配此筛选的工作区命令。","settings.quickActions.slashCommands":"斜杠命令","settings.quickActions.slashFallback":"斜杠命令","settings.quickActions.noSlashMatch":"没有匹配此筛选的斜杠命令。","settings.quickActions.savingToast":"正在保存快捷操作…","settings.quickActions.savedToast":"快捷操作已保存。","settings.providers.authApiKey":"API 密钥","settings.providers.authConfigured":"已配置","settings.providers.heading":"提供商","settings.providers.tagCustom":"自定义","settings.providers.logout":"注销","settings.providers.reconfigure":"重新配置","settings.providers.setUp":"设置","settings.providers.setupHint":"登录流程在浏览器中打开。在狭窄面板中，设置表单会垂直堆叠以避免裁切。","settings.providers.starting":"启动中…","settings.providers.signInOAuth":"使用 OAuth 登录","settings.providers.apiKeyLabel":"API 密钥","settings.providers.apiKeyPlaceholder":"输入 API 密钥","settings.providers.save":"保存","settings.providers.configuring":"配置中…","settings.providers.saveConfig":"保存配置","settings.providers.apiKeyEmpty":"API 密钥不能为空。","settings.providers.configuringToast":"正在配置 {provider}…","settings.providers.configured":"{provider} 已配置。","settings.providers.startingOAuth":"正在为 {provider} 启动 OAuth…","settings.providers.oauthOpened":"OAuth 窗口已打开。完成登录流程，然后关闭此消息。","settings.providers.oauthStarted":"已为 {provider} 启动 OAuth 流程。请查看聊天。","settings.providers.loggingOut":"正在注销 {provider}…","settings.providers.loggedOut":"已注销 {provider}。可能需要重启。","menu.title":"菜单","menu.showWorkspace":"显示工作区","menu.hideWorkspace":"隐藏工作区","menu.openExplorer":"打开资源管理器","menu.chatOnly":"仅聊天模式","menu.exitChatOnly":"退出仅聊天模式","menu.openTerminal":"在标签页中打开终端","menu.openVnc":"在标签页中打开 VNC","menu.newFile":"新建文件","menu.openRecent":"打开最近文件","menu.refreshTree":"刷新目录树","menu.reindex":"重建工作区索引","menu.showHidden":"显示隐藏文件","menu.hideHidden":"隐藏隐藏文件","menu.scale":"缩放","menu.settings":"设置"},mu={"compose.placeholder":"メッセージ（Enterで送信、Shift+Enterで改行）...","compose.send":"送信","compose.stop":"停止","compose.searchPlaceholder":"検索（Enterで実行）...","compose.clearAll":"すべてクリア","compose.clearAllTitle":"すべての添付と参照をクリア","compose.scope":"範囲","compose.searchScope":"検索範囲","compose.scopeCurrent":"現在","compose.scopeBranchFamily":"ブランチファミリー","compose.scopeAll":"すべてのチャット","compose.filterImages":"画像","compose.filterAttachments":"添付","compose.search":"検索","compose.closeSearch":"検索を閉じる","compose.shareLocation":"位置を共有","compose.attachFile":"ファイルを添付","compose.queueControls":"キュー済みフォローアップの操作","compose.moveUp":"上に移動","compose.moveUpQueue":"キュー内で上に移動","compose.moveDown":"下に移動","compose.moveDownQueue":"キュー内で下に移動","compose.editInCompose":"入力欄で編集","compose.returnToEditor":"キュー済みメッセージを入力欄に戻す","compose.injectSteer":"キュー済みフォローアップをステアとして挿入","compose.steer":"ステア","compose.cancelQueued":"キュー済みメッセージをキャンセル","compose.resizeInput":"メッセージ入力欄のサイズ変更","compose.resizeInputHint":"ドラッグしてメッセージ入力欄のサイズを変更","compose.modelPicker":"モデルピッカー","compose.sessionsAndAgents":"セッションとエージェント","compose.openModelPicker":"モデルピッカーを開く","compose.newBranchTitle":"このチャットから新しいブランチを作成","compose.newRootTitle":"web:ops のようなクリーンなルートセッションを作成","compose.renameSessionTitle":"現在のセッションの名前を変更","compose.pruneSessionTitle":"現在のエージェント/セッションブランチを削除（プルーン）","compose.filterImagesTitle":"画像付きメッセージのみ表示","compose.filterAttachmentsTitle":"添付付きメッセージのみ表示","compose.selectModel":"モデルを選択","compose.loadingModels":"モデルを読み込み中…","compose.noModels":"利用可能なモデルがありません。","compose.nextModel":"次のモデル","compose.manageSessions":"セッションとエージェントを管理","compose.noSessions":"他のセッションはまだありません。","compose.newBranch":"新しいブランチ","compose.newRoot":"新しいルート…","compose.mergeCurrent":"現在を親にマージ","compose.renameCurrent":"現在の名前を変更…","compose.deleteCurrent":"現在を削除…","compose.mergeInto":"このブランチを {target} にマージ","compose.mergeBlocked":"このブランチはアクティブな間または子がある間はマージできません","workspace.title":"ワークスペース","workspace.newFile":"新規ファイル","workspace.refresh":"更新","workspace.actions":"ワークスペース操作","workspace.uploadFiles":"ファイルをアップロード","workspace.reindexing":"ワークスペースを再インデックス中…","workspace.deleteFile":"ファイルを削除","workspace.download":"ダウンロード","workspace.uploadToFolder":"このフォルダにファイルをアップロード","workspace.addFolderHint":"フォルダのヒントを入力欄に追加","workspace.downloadZip":"フォルダをzipでダウンロード","workspace.openInTab":"タブで開く","workspace.openInEditor":"エディタで開く","workspace.renameSelected":"選択項目の名前を変更","workspace.downloadSelectedFile":"選択したファイルをダウンロード","workspace.downloadSelectedFolder":"選択したフォルダをダウンロード（zip）","workspace.deleteSelectedFile":"選択したファイルを削除","shell.settings":"設定","shell.newChat":"新規チャット","shell.connecting":"接続中…","shell.connected":"接続済み","language.label":"言語","settings.title":"設定","settings.close":"閉じる（Esc）","settings.filter":"フィルター…","settings.loading":"設定を読み込み中…","settings.section.general":"一般","settings.section.sessions":"セッション","settings.section.recordings":"録画","settings.section.compaction":"圧縮","settings.section.keyboard":"キーボード","settings.section.workspace":"ワークスペース","settings.section.environment":"環境","settings.section.providers":"プロバイダー","settings.section.models":"モデル","settings.section.theme":"外観","settings.section.scheduled-tasks":"スケジュールタスク","settings.section.quick-actions":"クイックアクション","settings.section.keychain":"キーチェーン","settings.section.tools":"ツール","settings.section.addons":"アドオン","settings.placeholder.recordings":"録画をフィルター…","settings.placeholder.keyboard":"ショートカットをフィルター…","settings.placeholder.environment":"環境をフィルター…","settings.placeholder.models":"モデルをフィルター…","settings.placeholder.scheduled-tasks":"スケジュールタスクをフィルター…","settings.placeholder.quick-actions":"クイックアクションをフィルター…","settings.placeholder.keychain":"エントリをフィルター…","settings.placeholder.tools":"ツールをフィルター…","settings.placeholder.addons":"アドオンをフィルター…","preview.close":"閉じる","preview.loading":"プレビューを読み込み中…","preview.files":"ファイル","preview.folders":"フォルダ","preview.compressed":"圧縮後","preview.uncompressed":"非圧縮","preview.name":"名前","preview.type":"種類","preview.method":"方式","preview.size":"サイズ","post.deleteMessage":"メッセージを削除","post.tooLarge":"メッセージが大きすぎて表示できません。","post.previewTruncated":"プレビューは切り詰められました。","post.submitted":"送信済み","post.discard":"破棄","post.save":"保存","post.cancel":"キャンセル","post.addNote":"メモを追加","post.addNotePlaceholder":"メモを追加…","tab.close":"閉じる","tab.closeOthers":"他を閉じる","tab.closeAll":"すべて閉じる","tab.reattach":"再アタッチ","tab.openInWindow":"ウィンドウで開く","tab.openInNewTab":"新しいタブで開く","tab.pinned":"ピン留め済み","tab.detached":"分離済み","tab.openSeparateWindow":"別ウィンドウで開く","status.trackedVariables":"追跡中の変数","status.attachToSession":"セッションにアタッチ","status.files":"ファイル","status.proposedDiff":"提案された差分","status.copyTmux":"tmuxコマンドをコピー","status.experimentDuration":"実験の経過時間","status.sinceLastActivity":"最後のアクティビティから","annotator.title":"画像に注釈","annotator.typeLabel":"ラベルを入力…","annotator.undo":"元に戻す","annotator.resetZoom":"ズームをリセット","tree.filter":"フィルター…","tree.sessionTree":"セッションツリー","btw.label":"BTW サイド会話","btw.close":"BTW を閉じる","btw.thinking":"思考中","mdpreview.close":"プレビューを閉じる","mdpreview.unavailable":"プレビューを利用できません","widget.close":"ウィジェットを閉じる","oobe.gettingStarted":"はじめに","oobe.needsSetupTitle":"インスタンスのセットアップが必要","oobe.configuredTitle":"インスタンスは設定済み","oobe.needsSetupBody":"このインスタンスはまだ設定されていません。設定を開き、AIプロバイダー/モデルを設定してリクエストの送信を開始してください。","oobe.configuredBody":"このインスタンスは設定済みのようです。設定でプロバイダーとモデルの設定を確認または更新してください。","oobe.openSettings":"設定を開く","oobe.dismiss":"閉じる","oobe.done":"完了","palette.placeholder":"入力してエージェント、ワークスペース操作、またはスラッシュコマンドにジャンプ…","palette.hideWorkspace":"ワークスペースを非表示","palette.showWorkspace":"ワークスペースを表示","palette.hideWorkspaceDesc":"ワークスペースサイドバーを非表示にします。","palette.showWorkspaceDesc":"ワークスペースサイドバーを表示します。","palette.exitChatOnly":"チャットのみモードを終了","palette.chatOnly":"チャットのみモード","palette.exitChatOnlyDesc":"分割ワークスペースレイアウトに戻ります。","palette.chatOnlyDesc":"チャットのみのレイアウトに切り替えます。","palette.groupAgents":"エージェント","palette.groupWorkspace":"ワークスペース","palette.groupSlash":"スラッシュコマンド","palette.hintMove":"移動","palette.hintSelect":"選択","palette.hintPopOut":"ポップアウト","palette.hintClose":"閉じる","settings.appliedNotice":"設定を適用しました。変更は次のターンから有効になります。","settings.sessions.lifecycle":"セッションのライフサイクル","settings.sessions.autoRotate":"セッションを自動ローテーション","settings.sessions.maxSize":"最大セッションサイズ（MB）","settings.sessions.maxSizeAria":"最大セッションサイズ","settings.sessions.agentBehaviour":"エージェントの動作","settings.sessions.toolBudget":"ツール使用予算","settings.sessions.toolBudgetAria":"ツール使用予算","settings.sessions.toolBudgetHint":"1ターンあたりの最大ツール呼び出しメッセージ数","settings.sessions.isolation":"セッションの分離","settings.sessions.isolationNone":"なし — セッション間で完全に可視","settings.sessions.isolationSummary":"概要 — ツールは可視、引数は非表示","settings.sessions.isolationFull":"完全 — セッション同士は互いに見えない","settings.editor.heading":"エディター","settings.editor.vimMode":"Vim モード","settings.editor.showWhitespace":"空白文字を表示","settings.editor.livePreview":"Markdown ライブプレビュー","settings.editor.fontSize":"フォントサイズ（px）","settings.editor.fontSizeAria":"エディターのフォントサイズ","settings.editor.fontFamily":"フォントファミリー","settings.editor.fontFamilyPlaceholder":"monospace（デフォルト）","settings.editor.localOnlyHint":"このブラウザーのみ。エディターの変更はローカルブラウザーストレージに保存され、次にファイルタブを開くか再読み込みしたときに有効になります。","settings.appearance.syncing":"外観を同期中…","settings.appearance.default":"デフォルト","settings.appearance.autoLightDark":"自動（ライト/ダーク）","settings.appearance.tint":"色調：","settings.appearance.clearTint":"色調をクリア","settings.appearance.none":"なし","settings.keyboard.heading":"キーボード","settings.keyboard.hint1":"アプリ全体のショートカットをカンマ区切りのバインディングとしてカスタマイズします。変更はすぐに反映されます。","settings.keyboard.hint1b":"は閉じる/中止用に予約されており、再割り当てできません。","settings.keyboard.hint2mid":"と入力","settings.keyboard.hint2end":"を入力欄の外で押すとこのペインが開きます。","settings.keyboard.resetAll":"すべてデフォルトにリセット","settings.keyboard.defaultColon":"デフォルト：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"デフォルト","settings.keyboard.noMatch":"このフィルターに一致するショートカットはありません。","settings.keyboard.invalidShortcut":"無効なショートカット：{token}。Escape は予約されており、再割り当てできません。","settings.keyboard.saved":"キーボードショートカットを保存しました。","settings.keyboard.resetOne":"キーボードショートカットをデフォルトにリセットしました。","settings.keyboard.resetAllDone":"キーボードショートカットをすべてデフォルトにリセットしました。","settings.workspace.serverApplied":"ワークスペース設定を適用しました。サーバー側の制限は新しいワークスペースリクエストに直ちに反映されます。","settings.workspace.browserApplied":"ブラウザーのワークスペース設定はこのタブで直ちに適用されました。","settings.workspace.access":"アクセス","settings.workspace.enableTerminal":"Web ターミナルを有効化","settings.workspace.allowVnc":"直接 VNC ターゲットを許可","settings.workspace.accessHint":"ターミナルアクセスは直ちに更新されます。直接 VNC ターゲットポリシーは新しい VNC リクエストに適用されます。","settings.workspace.guardrails":"サーバースキャンのガードレール","settings.workspace.maxDepth":"最大ツリー深度","settings.workspace.maxDepthAria":"ワークスペースツリーの最大深度","settings.workspace.maxDepthHintPre":"すべての","settings.workspace.maxDepthHintPost":"リクエストを制限します","settings.workspace.maxEntries":"スキャンあたりの最大エントリ数","settings.workspace.maxEntriesAria":"ワークスペースツリーの最大エントリ数","settings.workspace.maxEntriesHint":"大きすぎるツリー走査を早めに打ち切ります","settings.workspace.thisBrowser":"このブラウザー","settings.workspace.refreshInterval":"更新間隔（秒）","settings.workspace.refreshIntervalAria":"ワークスペース更新間隔","settings.workspace.folderDepth":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthAria":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthHintPre":"","settings.workspace.folderDepthHintPost":"に設定するとフォルダサイズのプレビュースキャンを無効化します","settings.workspace.footerHint":"ルートおよびフォルダ展開のツリー読み込みは浅いままです。フォルダサイズのプレビューは UI で最も深いワークスペーススキャンです。","settings.models.thinkingLevel":"思考レベル","settings.models.noThinking":"現在のモデルは思考をサポートしていません。","settings.models.thinkingLevelLabel":"思考レベル：","settings.models.loading":"モデルを読み込み中…","settings.models.summary":"狭いペインでは、クリッピングを避けるためにモデル名とプロバイダー名が折り返される場合があります。","settings.models.scopedOnly":"スコープ付きモデルのみ","settings.models.scopedCheckboxPre":"Piclaw のモデル一覧に Pi の","settings.models.scopedCheckboxPost":"を使用","settings.models.scopedHintPre":"このピッカーと","settings.models.scopedHintPost":"ツールをフィルタリングします。TUI のモデル選択は変更されません。","settings.models.colModel":"モデル","settings.models.colProvider":"プロバイダー","settings.models.colContext":"コンテキスト","settings.models.colReasoning":"推論","settings.models.noMatch":"「{filter}」に一致するモデルはありません","settings.tools.unavailable":"ツールデータを利用できません。","settings.tools.search":"検索","settings.tools.matchMode":"マッチモード","settings.tools.orMode":"いずれかのキーワード（OR）— 少なくとも1つの検索語に一致","settings.tools.andMode":"すべてのキーワード（AND）— すべての検索語に一致","settings.tools.colEnabled":"有効","settings.tools.colTool":"ツール","settings.tools.colCompact":"コンパクト","settings.tools.colKind":"種類","settings.tools.colSummary":"概要","settings.tools.colSource":"ソース","settings.tools.disableCompaction":"このツールのツール結果コンパクションを無効化","settings.tools.enableCompaction":"このツールのツール結果コンパクションを有効化","settings.tools.noMatch":"「{filter}」に一致するツールはありません","settings.tools.footer":"ツールのアクティベーションはエージェントランタイムが管理します。グループのチェックボックスで折りたたみ/展開でき、「コンパクト」列はツール結果コンパクションの対象可否を制御します。","settings.environment.heading":"環境","settings.environment.introPre":"キーチェーン以外の環境変数のみを表示しています。オーバーライドは拡張機能の KV に保存され、","settings.environment.introPost":"に適用されるため、以降のツール呼び出しに継承されます。","settings.environment.refresh":"更新","settings.environment.addOverride":"オーバーライドを追加","settings.environment.valuePlaceholder":"値","settings.environment.save":"保存","settings.environment.countLine":"{count} 個の変数を表示 • {overrides} 個のオーバーライドが有効 • {keychain} 個のキーチェーン注入変数を非表示","settings.environment.overridden":"KV でオーバーライド","settings.environment.inherited":"プロセス環境から継承","settings.environment.kindOverride":"オーバーライド","settings.environment.kindProcess":"プロセス","settings.environment.clear":"クリア","settings.environment.noMatch":"「{filter}」に一致する環境変数はありません。","settings.environment.refreshedToast":"環境を更新しました。","settings.environment.savedToast":"{name} の環境オーバーライドを保存しました。","settings.environment.clearedToast":"{name} の環境オーバーライドをクリアしました。","settings.quickActions.loading":"読み込み中…","settings.quickActions.heading":"タイムラインクイックアクション","settings.quickActions.intro":"タイムラインのタイプアヘッドに表示するアクションを選択します。エージェントは常に最初に固定され、次にワークスペースコマンド、その次にスラッシュコマンドが表示されます。","settings.quickActions.enableAll":"すべて有効化","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存して適用","settings.quickActions.workspaceCommands":"ワークスペースコマンド","settings.quickActions.noWorkspaceMatch":"このフィルターに一致するワークスペースコマンドはありません。","settings.quickActions.slashCommands":"スラッシュコマンド","settings.quickActions.slashFallback":"スラッシュコマンド","settings.quickActions.noSlashMatch":"このフィルターに一致するスラッシュコマンドはありません。","settings.quickActions.savingToast":"クイックアクションを保存中…","settings.quickActions.savedToast":"クイックアクションを保存しました。","settings.providers.authApiKey":"API キー","settings.providers.authConfigured":"設定済み","settings.providers.heading":"プロバイダー","settings.providers.tagCustom":"カスタム","settings.providers.logout":"ログアウト","settings.providers.reconfigure":"再設定","settings.providers.setUp":"セットアップ","settings.providers.setupHint":"サインインフローはブラウザーで開きます。狭いペインではセットアップフォームが縦に積み重なってクリッピングを防ぎます。","settings.providers.starting":"開始中…","settings.providers.signInOAuth":"OAuth でサインイン","settings.providers.apiKeyLabel":"API キー","settings.providers.apiKeyPlaceholder":"API キーを入力","settings.providers.save":"保存","settings.providers.configuring":"設定中…","settings.providers.saveConfig":"設定を保存","settings.providers.apiKeyEmpty":"API キーを空にすることはできません。","settings.providers.configuringToast":"{provider} を設定中…","settings.providers.configured":"{provider} を設定しました。","settings.providers.startingOAuth":"{provider} の OAuth を開始中…","settings.providers.oauthOpened":"OAuth ウィンドウを開きました。サインインフローを完了してから、このメッセージを閉じてください。","settings.providers.oauthStarted":"{provider} の OAuth フローを開始しました。チャットを確認してください。","settings.providers.loggingOut":"{provider} をログアウト中…","settings.providers.loggedOut":"{provider} をログアウトしました。再起動が必要な場合があります。","menu.title":"メニュー","menu.showWorkspace":"ワークスペースを表示","menu.hideWorkspace":"ワークスペースを非表示","menu.openExplorer":"エクスプローラーを開く","menu.chatOnly":"チャットのみモード","menu.exitChatOnly":"チャットのみモードを終了","menu.openTerminal":"ターミナルをタブで開く","menu.openVnc":"VNC をタブで開く","menu.newFile":"新規ファイル","menu.openRecent":"最近のファイルを開く","menu.refreshTree":"ツリーを更新","menu.reindex":"ワークスペースを再インデックス","menu.showHidden":"隠しファイルを表示","menu.hideHidden":"隠しファイルを非表示","menu.scale":"拡大縮小","menu.settings":"設定"},au={en:Z_,"zh-CN":eu,ja:mu},Pn=Yn});function I_({children:n,className:r=""}){let[i,_]=w(null);return Q(()=>{if(typeof document>"u")return;let c=document.createElement("div");return c.className=r||"",document.body.appendChild(c),_(c),()=>{try{Ln(null,c)}finally{c.remove()}}},[]),Q(()=>{if(!i)return;i.className=r||"";return},[r,i]),Rr(()=>{if(!i)return;Ln(n,i);return},[n,i]),null}var Y_=O(()=>{m()});function xi(n,r){let i=String(n.label||"").localeCompare(String(r.label||""),void 0,{sensitivity:"base"});if(i!==0)return i;return String(n.id||"").localeCompare(String(r.id||""),void 0,{sensitivity:"base"})}function Cn(n){let r=Gn.findIndex((i)=>i.id===n.id);if(r>=0)Gn[r]=n;else Gn.push(n);Gn.sort(xi)}function Gg(n){let r=Gn.findIndex((i)=>i.id===n);if(r>=0)Gn.splice(r,1)}function C_(){return[...Gn]}function Vg(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var Gn;var fr=O(()=>{Gn=[]});function Gr(n){let r=typeof n==="string"?n.trim():"";return r?r:null}function O_(n={}){if(typeof window>"u")return;let r=Gr(n.section);try{if(window.__piclawSettingsOpenRequested=!0,r)window.__piclawSettingsRequestedSection=r;else delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to record open request flags",i)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:r?{section:r}:void 0}))}function bi(){if(typeof window>"u")return null;return Gr(window.__piclawSettingsRequestedSection)}function J_(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),r=bi();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to clear open request flags",i)}return{open:n,section:r}}function S_(n=typeof window<"u"?window:null){return n||null}function Vr(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function or(n,r){return`${n}:${r}`}function d_(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function e_(n,r){if(n.length<=r)return;n.splice(0,n.length-r)}function Vn(n){if(!n||typeof n!=="object")return null;return{...n}}function Qn(n){if(!n)return null;return Nn.find((r)=>r.id===n)||null}function hi(n,r){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${r}`)}catch(i){console.debug("[app-perf] Ignoring performance.mark failure.",i,{traceId:n,phase:r})}}function m_(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let r=Qn(n);if(!r)return;for(let i of r.phases)performance.clearMarks(`piclaw:${n}:${i.phase}`)}catch(r){console.debug("[app-perf] Ignoring performance.clearMarks failure.",r,{traceId:n})}}function E_(n,r,i){let _=Xn.get(or(n,r));if(_&&Qn(_)?.status==="active")gr(_,"cancelled","superseded",{replacementType:n,replacementChatJid:r});let c=d_(n),u={id:c,type:n,chatJid:r,startedAt:Vr(),detail:Vn(i),phases:[],status:"active"};return Nn.push(u),e_(Nn,100),Xn.set(or(n,r),c),hi(c,"start"),c}function gr(n,r,i,_,c){let u=Qn(n);if(!u||u.status!=="active")return;if(i)u.phases.push({phase:i,at:Vr(),detail:Vn(_)}),hi(u.id,i);if(u.status=r,u.completedAt=Vr(),u.durationMs=u.completedAt-u.startedAt,c!==void 0)u.error=c instanceof Error?c.message:String(c);let f=or(u.type,u.chatJid);if(Xn.get(f)===u.id)Xn.delete(f);m_(u.id)}function gf(n=S_()){let r=n?.__PICLAW_PERF__;if(r)return r;if(n)n.__PICLAW_PERF__=Nr;return Nr}function On(n=S_()){return gf(n)}function Qg(n,r,i){return On().ensureTrace(n,r,i)}function Mg(n,r){return On().getActiveTraceId(n,r)}function qg(n,r,i){On().markTrace(n,r,i)}function Ag(n,r,i="settled",_){let c=Qn(n);if(!c||c.status!=="active")return!1;let u=new Set(c.phases.map((f)=>f.phase));if(!r.every((f)=>u.has(f)))return!1;return gr(n,"completed",i,_),!0}function Dg(n,r,i="failed",_){On().failTrace(n,r,i,_)}function Zg(n,r="cancelled",i){On().cancelTrace(n,r,i)}function vi(n){return On().recordRequest(n)}var Nn,sr,Xn,Nr;var a_=O(()=>{Nn=[],sr=[],Xn=new Map;Nr={startTrace(n,r,i){return E_(n,r,i)},ensureTrace(n,r,i){let _=Xn.get(or(n,r));if(_&&Qn(_)?.status==="active")return _;return E_(n,r,i)},getActiveTraceId(n,r){let i=Xn.get(or(n,r));return i&&Qn(i)?.status==="active"?i:null},markTrace(n,r,i){let _=Qn(n);if(!_||_.status!=="active")return;_.phases.push({phase:r,at:Vr(),detail:Vn(i)}),hi(_.id,r)},completeTrace(n,r="settled",i){gr(n,"completed",r,i)},failTrace(n,r,i="failed",_){gr(n,"failed",i,_,r)},cancelTrace(n,r="cancelled",i){gr(n,"cancelled",r,i)},recordRequest(n){let r=d_("req");return sr.push({...n,id:r,detail:Vn(n.detail)}),e_(sr,300),r},getTraces(){return Nn.map((n)=>({...n,detail:Vn(n.detail),phases:n.phases.map((r)=>({...r,detail:Vn(r.detail)}))}))},getRequests(){return sr.map((n)=>({...n,detail:Vn(n.detail)}))},clear(){Nn.forEach((n)=>m_(n.id)),Nn.splice(0,Nn.length),sr.splice(0,sr.length),Xn.clear()},printSummary(){let n={traces:Nr.getTraces(),requests:Nr.getRequests()};return console.table(n.traces.map((r)=>({id:r.id,type:r.type,chatJid:r.chatJid,status:r.status,durationMs:Number(r.durationMs||0).toFixed(1),lastPhase:r.phases[r.phases.length-1]?.phase||"start"}))),n}}});function Jn(n){let r=Number(n||0);return Number.isFinite(r)&&r>0?r:null}function of(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function lf(n){let r=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(r)}function nc(n){let r=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(r)}function rc(n=typeof window<"u"?window:null){let r=Jn(n?.innerWidth)??Jn(n?.screen?.availWidth)??Jn(n?.screen?.width)??0,i=Jn(n?.innerHeight)??Jn(n?.screen?.availHeight)??Jn(n?.screen?.height)??0,_=r&&i?Math.min(r,i):r||i,c=r&&i?Math.max(r,i):r||i,u=of(n),f=Number(n?.navigator?.maxTouchPoints||0),g=u||f>1;if(_>0&&_<=640)return"mobile";if(lf(n)&&!nc(n))return"mobile";if(nc(n))return"tablet";if(g&&_>0&&_<=1100)return"tablet";if(c>0&&c<=1180&&_>0&&_<=900)return"tablet";return"desktop"}var H0={};fn(H0,{uploadWorkspaceFile:()=>b0,uploadMedia:()=>Cf,updateWorkspaceFile:()=>o0,updateScheduledTask:()=>Bi,submitAdaptiveCardAction:()=>Jf,streamSidePrompt:()=>Ef,stopSessionRecording:()=>Hi,stopAutoresearch:()=>qf,steerAgentQueueItem:()=>Lf,startSessionRecording:()=>Fi,setWorkspaceVisibility:()=>K0,setAgentThoughtVisibility:()=>ef,sessionRecordingPlaybackUrl:()=>ji,sessionRecordingExportUrl:()=>lr,sendPeerAgentMessage:()=>Tf,sendAgentMessage:()=>Kn,searchPosts:()=>yf,saveWorkspaceSettings:()=>Vi,saveWebPushSubscription:()=>Gf,saveUiState:()=>Ui,saveQuickActionsSettings:()=>Gi,savePostAnnotations:()=>F0,saveEnvironmentOverride:()=>Qr,restoreChatBranch:()=>Uf,respondToAgentRequest:()=>Of,reorderAgentQueueItem:()=>If,renameWorkspaceFile:()=>v0,renameChatJid:()=>Rf,renameChatBranch:()=>Ff,removeAgentQueueItem:()=>Zf,reindexWorkspace:()=>f0,purgeChatBranch:()=>jf,pruneChatBranch:()=>Wf,previewSessionRecordingRedaction:()=>Ri,moveWorkspaceEntry:()=>k0,mergeChatBranchIntoParent:()=>Hf,getWorkspaceTree:()=>_0,getWorkspaceRawUrl:()=>_c,getWorkspaceIndexStatus:()=>u0,getWorkspaceFileStat:()=>g0,getWorkspaceFileDownloadUrl:()=>B0,getWorkspaceFile:()=>s0,getWorkspaceDownloadUrl:()=>z0,getWorkspaceBranch:()=>c0,getWebPushPublicKey:()=>Pf,getTimeline:()=>wf,getThumbnailUrl:()=>af,getThread:()=>xf,getSystemMetrics:()=>bf,getSessionRecordings:()=>zi,getSessionRecording:()=>Xr,getScheduledTasks:()=>Ki,getQuickActionsSettings:()=>Pi,getPostsByHashtag:()=>tf,getMediaUrl:()=>mf,getMediaText:()=>r0,getMediaInfo:()=>n0,getMediaBlob:()=>i0,getEnvironmentSettings:()=>Ni,getChatBranches:()=>Kf,getAutoresearchStatus:()=>Mf,getAgents:()=>Nf,getAgentThought:()=>df,getAgentStatus:()=>Xf,getAgentQueueState:()=>Df,getAgentModels:()=>Xi,getAgentContext:()=>Qf,getAgentCommands:()=>Ti,getActiveChatAgents:()=>pf,forkChatBranch:()=>Bf,dismissAutoresearch:()=>Af,deleteWorkspaceFile:()=>p0,deleteWebPushSubscription:()=>Vf,deleteSessionRecording:()=>Wi,deletePost:()=>kf,createWorkspaceFile:()=>h0,createRootChatSession:()=>zf,createReply:()=>vf,createPost:()=>hf,completeInstanceOobe:()=>Yf,attachWorkspaceFile:()=>l0,addToWhitelist:()=>Sf,SSEClient:()=>cc});function pn(n,r={}){if(String(r.method||"GET").toUpperCase()!=="GET")return q(n,r);let _=ki.get(n);if(_)return _;let c=q(n,r).finally(()=>{ki.delete(n)});return ki.set(n,c),c}async function q(n,r={}){let i=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),_;try{_=await fetch(_n+n,{...r,headers:{"Content-Type":"application/json",...r.headers}})}catch(u){throw vi({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i,ok:!1,detail:{failedBeforeResponse:!0}}),u}let c=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i;if(vi({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:c,status:_.status,ok:_.ok,requestId:_.headers?.get?.("x-request-id")||null,serverTiming:_.headers?.get?.("Server-Timing")||null}),!_.ok){let u=await _.json().catch(()=>({error:"Unknown error"}));throw Error(u.error||`HTTP ${_.status}`)}return _.json()}function ic(n){let r=String(n||"").split(`
`),i="message",_=[];for(let u of r)if(u.startsWith("event:"))i=u.slice(6).trim()||"message";else if(u.startsWith("data:"))_.push(u.slice(5).trim());let c=_.join(`
`);if(!c)return null;try{return{event:i,data:JSON.parse(c)}}catch{return{event:i,data:c}}}async function $f(n,r){if(!n.body)throw Error("Missing event stream body");let i=n.body.getReader(),_=new TextDecoder,c="";while(!0){let{value:f,done:g}=await i.read();if(g)break;c+=_.decode(f,{stream:!0});let l=c.split(`

`);c=l.pop()||"";for(let o of l){let x=ic(o);if(x)r(x.event,x.data)}}c+=_.decode();let u=ic(c);if(u)r(u.event,u.data)}async function wf(n=10,r=null,i=null){let _=`/timeline?limit=${n}`;if(r)_+=`&before=${r}`;if(i)_+=`&chat_jid=${encodeURIComponent(i)}`;return pn(_)}async function tf(n,r=50,i=0,_=null){let c=_?`&chat_jid=${encodeURIComponent(_)}`:"";return q(`/hashtag/${encodeURIComponent(n)}?limit=${r}&offset=${i}${c}`)}async function yf(n,r=50,i=0,_=null,c="current",u=null,f=null){let g=_?`&chat_jid=${encodeURIComponent(_)}`:"",l=c?`&scope=${encodeURIComponent(c)}`:"",o=u?`&root_chat_jid=${encodeURIComponent(u)}`:"",x=f?.images?"&images=1":"",$=f?.attachments?"&attachments=1":"";return q(`/search?q=${encodeURIComponent(n)}&limit=${r}&offset=${i}${g}${l}${o}${x}${$}`)}async function xf(n,r=null){let i=r?`?chat_jid=${encodeURIComponent(r)}`:"";return q(`/thread/${n}${i}`)}async function bf(){return q("/agent/system-metrics")}async function Ki(n={}){let r=new URLSearchParams;if(n?.id)r.set("id",String(n.id));if(n?.chatJid)r.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")r.set("status",String(n.status));if(n?.limit)r.set("limit",String(n.limit));if(n?.includeRunLogs)r.set("include_run_logs","1");if(n?.runLogLimit)r.set("run_log_limit",String(n.runLogLimit));let i=r.toString()?`?${r.toString()}`:"";return q(`/agent/scheduled-tasks${i}`)}async function Bi(n,r,i={}){return q("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:r,allow_internal:i?.allowInternal===!0})})}async function zi(){return q("/agent/recordings")}async function Xr(n){return q(`/agent/recordings/${encodeURIComponent(n)}`)}async function Fi(n={}){return q("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function Hi(n={}){return q("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function Wi(n){return q(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function lr(n,r="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(r)}`}function ji(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function Ri(n,r={}){return q("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...r})})}async function Ui(n){return q("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function hf(n,r=[],i=null){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return q(`/post${_}`,{method:"POST",body:JSON.stringify({content:n,media_ids:r})})}async function vf(n,r,i=[],_=null){let c=_?`?chat_jid=${encodeURIComponent(_)}`:"";return q(`/post/reply${c}`,{method:"POST",body:JSON.stringify({thread_id:n,content:r,media_ids:i})})}async function kf(n,r=!1,i=null){let _=i?`&chat_jid=${encodeURIComponent(i)}`:"",c=`/post/${n}?cascade=${r?"true":"false"}${_}`;return q(c,{method:"DELETE"})}async function Kn(n,r,i=null,_=[],c=null,u=null){let f=u?`?chat_jid=${encodeURIComponent(u)}`:"",g={content:r,thread_id:i,media_ids:_,client_context:{screen_hint:rc()}};if(c==="auto"||c==="queue"||c==="steer")g.mode=c;return q(`/agent/${n}/message${f}`,{method:"POST",body:JSON.stringify(g)})}async function Ti(n="web:default"){let r=typeof n==="string"&&n.trim()?n.trim():"web:default";return pn(`/agent/commands?chat_jid=${encodeURIComponent(r)}`)}async function Pi(){return q("/agent/settings/quick-actions")}async function Gi(n){return q("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function Vi(n){return q("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function Ni(){return q("/agent/settings/environment")}async function Qr(n){return q("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function pf(){return q("/agent/active-chats")}async function Kf(n=null,r={}){let i=new URLSearchParams;if(n)i.set("root_chat_jid",String(n));if(r?.includeArchived)i.set("include_archived","1");let _=i.toString()?`?${i.toString()}`:"";return pn(`/agent/branches${_}`)}async function Bf(n,r={}){return q("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...r?.agentName?{agent_name:r.agentName}:{}})})}async function zf(n){return q("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function Ff(n,r={}){return q("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Hf(n){return q("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Wf(n){return q("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function jf(n){return q("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Rf(n,r){return q("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:r})})}async function Uf(n,r={}){return q("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Tf(n,r,i,_="auto",c={}){let u={source_chat_jid:n,content:i,mode:_,...c?.sourceAgentName?{source_agent_name:c.sourceAgentName}:{},...c?.targetBy==="agent_name"?{target_agent_name:r}:{target_chat_jid:r}};return q("/agent/peer-message",{method:"POST",body:JSON.stringify(u)})}async function Pf(){return q("/agent/push/vapid-public-key")}async function Gf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return q("/agent/push/subscription",{method:"POST",body:JSON.stringify(i)})}async function Vf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return q("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(i)})}async function Nf(){return pn("/agent/roster")}async function Xf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/status${r}`)}async function Qf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/context${r}`)}async function Mf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/autoresearch/status${r}`)}async function qf(n=null,r={}){return q("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:r?.generateReport!==!1})})}async function Af(n=null){return q("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function Df(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/queue-state${r}`)}async function Zf(n,r=null){let i=await fetch(_n+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Lf(n,r=null){let i=await fetch(_n+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function If(n,r,i=null){let _=await fetch(_n+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Xi(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/models${r}`)}async function Yf(n="provider-ready"){return q("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function Cf(n){let r=new FormData;r.append("file",n);let i=await fetch(_n+"/media/upload",{method:"POST",body:r});if(!i.ok){let _=await i.json().catch(()=>({error:"Upload failed"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Of(n,r,i=null){let _=await fetch(_n+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to respond"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Jf(n){let r=await fetch(_n+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){let i=await r.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(i.error||`HTTP ${r.status}`)}return r.json()}async function Ef(n,r={}){let i=await fetch(_n+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:r.systemPrompt||void 0,chat_jid:r.chatJid||void 0}),signal:r.signal});if(!i.ok){let u=await i.json().catch(()=>({error:"Side prompt failed"}));throw Error(u.error||`HTTP ${i.status}`)}let _=null,c=null;if(await $f(i,(u,f)=>{if(r.onEvent?.(u,f),u==="side_prompt_thinking_delta")r.onThinkingDelta?.(f?.delta||"");else if(u==="side_prompt_text_delta")r.onTextDelta?.(f?.delta||"");else if(u==="side_prompt_done")_=f;else if(u==="side_prompt_error")c=f}),c){let u=Error(c?.error||"Side prompt failed");throw u.payload=c,u}return _}async function Sf(n,r){let i=await fetch(_n+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function df(n,r="thought"){let i=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(r)}`;return q(i)}async function ef(n,r,i){return q("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:r,expanded:Boolean(i)})})}function mf(n){return`${_n}/media/${n}`}function af(n){return`${_n}/media/${n}/thumbnail`}async function n0(n){let r=await fetch(`${_n}/media/${n}/info`);if(!r.ok)throw Error("Failed to get media info");return r.json()}async function r0(n){let r=await fetch(`${_n}/media/${n}`);if(!r.ok)throw Error("Failed to load media text");return r.text()}async function i0(n){let r=await fetch(`${_n}/media/${n}`);if(!r.ok)throw Error("Failed to load media blob");return r.blob()}async function _0(n="",r=2,i=!1){let _=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${r}&show_hidden=${i?"1":"0"}`;return q(_)}async function c0(n=""){let r=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return q(r)}async function u0(n="all"){let r=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return q(r)}async function f0(n="all"){return q("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function s0(n,r=20000,i=null){let _=i?`&mode=${encodeURIComponent(i)}`:"",c=`/workspace/file?path=${encodeURIComponent(n)}&max=${r}${_}`;return q(c)}async function g0(n){return q(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function o0(n,r){return q("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:r})})}async function l0(n){return q("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function w0(n,r="",i={}){let _=new URLSearchParams;if(r)_.set("path",r);if(i.overwrite)_.set("overwrite","1");let c=_.toString();return c?`${n}?${c}`:n}function t0(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function y0(n,r,i,_){return new Promise((c,u)=>{let f=new XMLHttpRequest;f.open("POST",_n+r);for(let[g,l]of Object.entries(i||{}))if(l!==void 0&&l!==null)f.setRequestHeader(g,String(l));f.upload.onprogress=(g)=>{if(typeof _==="function")_({loaded:g.lengthComputable?g.loaded:0,total:g.lengthComputable?g.total:n.size,lengthComputable:g.lengthComputable})},f.onload=()=>{try{let g=f.responseText?JSON.parse(f.responseText):{};if(f.status>=200&&f.status<300)c(g);else{let l=Error(g.error||`HTTP ${f.status}`);l.status=f.status,l.code=g.code,u(l)}}catch{let g=Error(`HTTP ${f.status}`);g.status=f.status,u(g)}},f.onerror=()=>u(Error("Upload failed (network error)")),f.ontimeout=()=>u(Error("Upload timed out")),f.send(n)})}async function x0(n,r="",i={}){let _=t0(),c=w0("/workspace/upload-chunk",r,i),u=Math.max(1,Math.min(pi,Number(i.chunkSize)||$0)),f=Math.max(0,Number(n?.size)||0),g=Math.max(1,Math.ceil(f/u)),l=0,o=null;for(let x=0;x<g;x+=1){let $=x*u,h=Math.min(f,$+u),b=n.slice($,h),v=b.size;if(o=await y0(b,c,{"X-Upload-Id":_,"X-Chunk-Index":x,"X-Chunk-Total":g,"X-File-Name":n?.name||"upload.bin","X-File-Size":f},(k)=>{if(typeof i.onProgress!=="function")return;let F=Math.min(f,l+(k?.loaded||0)),y=f||1;i.onProgress({loaded:F,total:y,percent:Math.round(F/y*100),chunkIndex:x,chunkTotal:g})}),l+=v,typeof i.onProgress==="function"){let k=f||1,F=f?l:k;i.onProgress({loaded:F,total:k,percent:Math.round(F/k*100),chunkIndex:x+1,chunkTotal:g})}}return o}async function b0(n,r="",i={}){if(n?.size>pi){let _=(n.size/1048576).toFixed(0),c=(pi/1048576).toFixed(0),u=Error(`File too large (${_} MB). Maximum upload size is ${c} MB.`);throw u.code="file_too_large",u}return await x0(n,r,i)}async function h0(n,r,i=""){let _=await fetch(_n+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r,content:i})});if(!_.ok){let c=await _.json().catch(()=>({error:"Create failed"})),u=Error(c.error||`HTTP ${_.status}`);throw u.status=_.status,u.code=c.code,u}return _.json()}async function v0(n,r){let i=await fetch(_n+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Rename failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function k0(n,r){let i=await fetch(_n+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Move failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function p0(n){let r=`/workspace/file?path=${encodeURIComponent(n||"")}`;return q(r,{method:"DELETE"})}async function K0(n,r=!1){return q("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(r)})})}function _c(n,r={}){let i=new URLSearchParams({path:String(n||"")});if(r.download)i.set("download","1");return`${_n}/workspace/raw?${i.toString()}`}function B0(n){return _c(n,{download:!0})}function z0(n,r=!1){let i=`path=${encodeURIComponent(n||"")}&show_hidden=${r?"1":"0"}`;return`${_n}/workspace/download?${i}`}class cc{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,r,i={}){this.onEvent=n,this.onStatusChange=r,this.chatJid=typeof i?.chatJid==="string"&&i.chatJid.trim()?i.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(_n+"/sse/stream"+n);let r=(i)=>{this.eventSource.addEventListener(i,(_)=>{this.markActivity(),this.onEvent(i,JSON.parse(_.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),r("new_post"),r("new_reply"),r("agent_response"),r("interaction_updated"),r("interaction_deleted"),r("agent_status"),r("agent_steer_queued"),r("agent_followup_queued"),r("agent_followup_consumed"),r("agent_followup_removed"),r("workspace_update"),r("agent_draft"),r("agent_draft_delta"),r("agent_thought"),r("agent_thought_delta"),r("model_changed"),r("ui_theme"),r("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(r)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,r=60000,i=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,i+r),this.reconnectAttempts=0;let _=Math.max(this.cooldownUntil-i,0),c=Math.max(this.reconnectDelay,_);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},c),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}async function F0(n,r,i){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return q(`/post/${n}/annotations${_}`,{method:"PATCH",body:JSON.stringify({annotations:r})})}var _n="",ki,pi=1073741824,$0=8388608;var Bn=O(()=>{a_();ki=new Map});function j0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(qr,{detail:{enabled:Boolean(n)}}))}function sc(n){if(typeof fetch!=="function")return;Ui({ui_meters:n}).catch((r)=>{console.debug("[meters] Failed to persist meters UI state.",r)})}function R0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(W0,{detail:{collapsed:Boolean(n)}}))}function Qi(n=!1){return $i(uc,n)}function Eg(n=!1){return $i(fc,n)}function Mr(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)gn(uc,c?"true":"false");if(_)sc({enabled:c});return j0(c),c}function U0(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)gn(fc,c?"true":"false");if(_)sc({collapsed:c});return R0(c),c}function Sg(n){let r=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")Mr(Boolean(n.enabled),{persistServer:!1});else if(r==="toggle"){let i=!Qi(!1);Mr(i,{persistServer:!1})}if(typeof n?.collapsed==="boolean")U0(Boolean(n.collapsed),{persistServer:!1})}var uc="piclaw_system_meters_enabled",fc="piclaw_system_meters_collapsed",qr="piclaw-meters-change",W0="piclaw-meters-collapsed-change";var gc=O(()=>{Bn()});function oc(n,r){if(n===""||n===null||n===void 0)return r;let i=Number(n);return Number.isFinite(i)?i:r}function lc(n,{min:r=-1/0,max:i=1/0}={}){let _=Number.isFinite(Number(r))?Number(r):-1/0,c=Number.isFinite(Number(i))?Number(i):1/0;return Math.min(c,Math.max(_,Number(n)))}function En(n,{fallback:r=0,min:i=-1/0,max:_=1/0}={}){let c=oc(n,r);return lc(c,{min:i,max:_})}function T0(n,{direction:r=1,step:i=1,fallback:_=0,min:c=-1/0,max:u=1/0}={}){let f=En(n,{fallback:_,min:c,max:u}),g=Math.abs(oc(i,1))||1,l=Number(r)<0?-1:1;return lc(f+l*g,{min:c,max:u})}function rn({value:n,min:r,max:i,step:_=1,fallback:c,width:u="80px",disabled:f=!1,label:g,onChange:l}){let o=Number.isFinite(Number(c))?Number(c):En(n,{fallback:0,min:r,max:i}),[x,$]=w(String(n??o)),h=C(!1);Q(()=>{if(!h.current)$(String(n??o))},[n,o]);let b=R((k)=>{h.current=!1;let F=En(k,{fallback:o,min:r,max:i});$(String(F)),l?.(F)},[o,r,i,l]),v=R((k)=>{h.current=!1;let F=T0(n,{direction:k,step:_,fallback:o,min:r,max:i});$(String(F)),l?.(F)},[o,i,r,l,_,n]);return s`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${g||"value"}`}
                title=${`Decrease ${g||"value"}`}
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
                onInput=${(k)=>{h.current=!0,$(k.target.value)}}
                onBlur=${(k)=>b(k.target.value)}
                onKeyDown=${(k)=>{if(k.key==="Enter")k.preventDefault(),b(k.target.value),k.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${g||"value"}`}
                title=${`Increase ${g||"value"}`}
                disabled=${f}
                onClick=${()=>v(1)}
            >+</button>
        </span>
    `}var Sn=O(()=>{m()});function $c(n){let r=String(n||"").trim();if(!r)return"";if(r.startsWith("http://")||r.startsWith("https://")||r.startsWith("data:")||r.startsWith("blob:"))return r;if(r.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(r.slice(11))}`;if(r.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(r))return"";if(r.startsWith("\\\\"))return"";if(r.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(r.replace(/^\.\//,""))}`}function wc({value:n,onChange:r}){let i=C(null),[_,c]=w($c(n));Q(()=>{c($c(n))},[n]);let u=R((f)=>{let g=f.target.files?.[0];if(!g)return;let l=new FileReader;l.onload=()=>{let o=l.result;c(o),r?.(o)},l.readAsDataURL(g)},[r]);return s`
        <div class="settings-avatar-inline" onClick=${()=>i.current?.click()} title="Click to upload">
            ${_?s`<img src=${_} alt="avatar" />`:s`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${i} style="display:none" onChange=${u} />
        </div>
    `}function tc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function P0(n,r={}){let i=typeof n==="string"?n:"";if(!i)return!1;let _=r.navigator??(typeof navigator<"u"?navigator:null),c=r.document??(typeof document<"u"?document:null);if(_?.clipboard?.writeText)try{return await _.clipboard.writeText(i),!0}catch(u){}try{if(!c?.body||typeof c.createElement!=="function"||typeof c.execCommand!=="function")return!1;let u=c.createElement("textarea");u.value=i,u.setAttribute?.("readonly",""),u.style.position="fixed",u.style.left="-9999px",u.style.top="0",u.style.opacity="0",c.body.appendChild(u),u.focus?.(),u.select?.();let f=Boolean(c.execCommand("copy"));return c.body.removeChild(u),f}catch(u){return!1}}function Mi({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(""),[u,f]=w(""),[g,l]=w(""),[o,x]=w(""),[$,h]=w(32),[b,v]=w(256),[k,F]=w(""),[y,p]=w(!1),[V,U]=w(!1),[H,P]=w(!1),[B,T]=w(()=>Qi(!1)),[t,K]=w(!1),A=C(""),W=C(null),G=C(!0);Q(()=>{return G.current=!0,()=>{G.current=!1}},[]);let Z=R((J)=>{let X=tc(J);c(X.userName),f(X.userAvatar),l(X.assistantName),x(X.assistantAvatar),h(X.composeUploadLimitMb),v(X.workspaceUploadLimitMb),F(J?.widgetToken||""),A.current=JSON.stringify(X)},[]);Q(()=>{Z(n||{})},[n,Z]),Q(()=>{let J=(X)=>{T(Boolean(X?.detail?.enabled))};return window.addEventListener(qr,J),()=>window.removeEventListener(qr,J)},[]);let z=I(()=>JSON.stringify(tc({userName:_,userAvatar:u,assistantName:g,assistantAvatar:o,composeUploadLimitMb:$,workspaceUploadLimitMb:b})),[_,u,g,o,$,b]);Q(()=>{if(z===A.current)return;if(W.current)clearTimeout(W.current);return W.current=setTimeout(async()=>{if(!G.current)return;let J=document.activeElement;if(J&&J.closest?.(".settings-number-stepper"))return;try{let X=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:z}),L=await X.json().catch(()=>({}));if(!G.current)return;if(!X.ok||!L?.ok||!L?.settings)return;A.current=z,i?.(L.settings),K(!0),setTimeout(()=>{if(G.current)K(!1)},4000)}catch(X){console.warn("[settings/general] Failed to persist general settings snapshot.",X)}},800),()=>{if(W.current)clearTimeout(W.current)}},[z,i]);let M=n?.instanceTotp||{configured:!1,issuer:g||"Piclaw",label:_?`${g||"Piclaw"}:${_}`:g||"Piclaw",secret:"",otpauth:"",qrSvg:""},Y=R(async()=>{if(!k)return;if(await P0(k))U(!0),setTimeout(()=>{if(G.current)U(!1)},3000);else r?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[k,r]),E=R(async()=>{if(H)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;P(!0);try{let J=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),X=await J.json().catch(()=>({}));if(!J.ok||!X?.ok||!X?.settings)throw Error(X?.error||"Failed to regenerate widget token.");F(X.settings.widgetToken||""),i?.(X.settings),K(!0),setTimeout(()=>{if(G.current)K(!1)},4000)}catch(J){console.warn("[settings/general] Failed to regenerate widget token.",J)}finally{if(G.current)P(!1)}},[H,i]),cn=typeof window<"u"&&window.isSecureContext,on=k?"•".repeat(Math.min(Math.max(k.length,16),48)):"—",yn=y?k||"—":on;return s`
        <div class="settings-section">
            ${t&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${wc} value=${u} onChange=${f} />
                <input type="text" value=${_} onInput=${(J)=>c(J.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${wc} value=${o} onChange=${x} />
                <input type="text" value=${g} onInput=${(J)=>l(J.target.value)} placeholder="Agent name" />
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
                    <input type="checkbox" checked=${B}
                        onChange=${()=>{let J=Mr(!B);T(J)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${rn}
                    label="compose upload limit"
                    value=${$}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${h}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${rn}
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
                        <button class=${`settings-keychain-reveal-btn${y?" active":""}`}
                            type="button"
                            onClick=${()=>p((J)=>!J)}
                            disabled=${!k}
                            title=${y?"Hide token":"Reveal token"}>
                            ${y?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${Y} disabled=${!k} title="Copy token">
                            ${V?s`<span class="settings-widget-token-copied">Copied</span>`:s`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${E} disabled=${H}>${H?"Regenerating…":"Regenerate"}</button>
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
    `}var yc=O(()=>{m();gc();Sn()});var bc={};fn(bc,{SessionsSection:()=>G0});function xc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function G0({settingsData:n,setStatus:r,mergeSettingsData:i}){let{t:_}=e(),[c,u]=w(!0),[f,g]=w(16),[l,o]=w(4000),[x,$]=w(3),[h,b]=w(64),[v,k]=w("none"),[F,y]=w(!1),p=C(""),V=C(null),U=C(!0);Q(()=>{return U.current=!0,()=>{U.current=!1}},[]);let H=R((B)=>{let T=xc(B);u(T.sessionAutoRotate),g(T.sessionMaxSizeMb),o(T.sessionMaxLines),$(T.sessionMaxCompactions),b(T.toolUseBudget),k(T.sessionIsolation),p.current=JSON.stringify(T)},[]);Q(()=>{H(n||{})},[n,H]);let P=I(()=>JSON.stringify(xc({sessionAutoRotate:c,sessionMaxSizeMb:f,sessionMaxLines:l,sessionMaxCompactions:x,toolUseBudget:h,sessionIsolation:v})),[c,f,l,x,h,v]);return Q(()=>{if(P===p.current)return;if(V.current)clearTimeout(V.current);return V.current=setTimeout(async()=>{if(!U.current)return;let B=document.activeElement;if(B&&B.closest?.(".settings-number-stepper"))return;try{let T=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:P}),t=await T.json().catch(()=>({}));if(!U.current)return;if(!T.ok||!t?.ok||!t?.settings)return;p.current=P,i?.(t.settings),y(!0),setTimeout(()=>{if(U.current)y(!1)},4000)}catch(T){console.warn("[settings/sessions] Failed to persist session settings.",T)}},800),()=>{if(V.current)clearTimeout(V.current)}},[P,i]),s`
        <div class="settings-section">
            ${F&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.appliedNotice")}
                </div>
            `}
            <h3>${_("settings.sessions.lifecycle")}</h3>
            <div class="settings-row">
                <label>${_("settings.sessions.autoRotate")}</label>
                <input type="checkbox" checked=${c} onChange=${(B)=>u(B.target.checked)} />
            </div>
            <div class="settings-row">
                <label>${_("settings.sessions.maxSize")}</label>
                <${rn}
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
                <${rn}
                    label=${_("settings.sessions.toolBudgetAria")}
                    value=${h}
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
                <select value=${v} onChange=${(B)=>k(B.target.value)}>
                    <option value="none">${_("settings.sessions.isolationNone")}</option>
                    <option value="summary">${_("settings.sessions.isolationSummary")}</option>
                    <option value="full">${_("settings.sessions.isolationFull")}</option>
                </select>
            </div>
        </div>
    `}var hc=O(()=>{m();Sn();wn()});var vc={};fn(vc,{__recordingsSettingsTest:()=>Q0,RecordingsSection:()=>X0});function Dr(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function qi(n){if(n==="full")return"full / trusted";if(n==="metadata")return"metadata only";return"redacted"}function Ar({children:n,type:r="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function V0(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function $r(n){return String(n||"").split(`
`).map((r)=>r.trim()).filter(Boolean)}function N0({recording:n,details:r,onDelete:i,onRefresh:_}){if(!n)return s`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let c=r?.meta||n,u=Array.isArray(r?.events)?r.events:[],f=u.reduce((l,o)=>l+(Array.isArray(o.redactions)?o.redactions.length:0),0),g=u.reduce((l,o)=>{let x=o.kind||"event";return l[x]=(l[x]||0)+1,l},{});return s`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${c.title||c.id}</h4>
                    <code>${c.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(ji(c.id),"_blank","noopener,noreferrer")}>Playback</button>
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
                <a href=${lr(c.id,"json")}>Export JSON</a>
                <a href=${lr(c.id,"jsonl")}>Export JSONL</a>
                <a href=${lr(c.id,"html")}>Export standalone HTML</a>
            </div>
            <h4>Event summary</h4>
            ${u.length===0&&s`<p class="settings-hint">Open or refresh details to inspect trace events.</p>`}
            ${u.length>0&&s`
                <div class="settings-recording-event-summary">
                    ${Object.entries(g).map(([l,o])=>s`<${Ar}>${l}: ${o}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(u.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function X0({filter:n="",setStatus:r}){let[i,_]=w([]),[c,u]=w([]),[f,g]=w(!0),[l,o]=w(null),[x,$]=w(null),[h,b]=w(null),[v,k]=w(!1),[F,y]=w(V0),[p,V]=w(""),[U,H]=w("redacted"),[P,B]=w(!0),[T,t]=w(""),[K,A]=w(""),[W,G]=w('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[Z,z]=w(null);Q(()=>{let N=(a)=>{let sn=String(a?.detail?.chatJid||"").trim();if(sn)y(sn)};return window.addEventListener("piclaw:current-chat-changed",N),()=>window.removeEventListener("piclaw:current-chat-changed",N)},[]);let M=R(async(N=x)=>{g(!0),o(null);try{let a=await zi(),sn=a.recordings||[];_(sn),u(a.active||[]);let Hn=sn.find((j)=>j.id===N)||sn[0]||null;if($(Hn?.id||null),Hn?.id)b(await Xr(Hn.id));else b(null)}catch(a){o(a?.message||"Failed to load recordings.")}finally{g(!1)}},[x]);Q(()=>{M()},[M]);let Y=I(()=>i.find((N)=>N.id===x)||null,[i,x]),E=I(()=>c.find((N)=>N.chatJid===F)||null,[c,F]),cn=String(n||"").trim().toLowerCase(),on=I(()=>{if(!cn)return i;return i.filter((N)=>[N.id,N.title,N.chatJid,N.status,N.mode].some((a)=>String(a||"").toLowerCase().includes(cn)))},[i,cn]),yn=R(async(N)=>{if($(N?.id||null),b(null),!N?.id)return;try{b(await Xr(N.id))}catch(a){r?.(a?.message||"Failed to load recording.","error")}},[r]),J=R(async()=>{if(v)return;k(!0);try{let N={keys:$r(T),patterns:$r(K)},a=await Fi({chat_jid:F,title:p||void 0,mode:U,include_timeline_snapshot:P,timeline_snapshot_limit:80,redaction:N});r?.(`Recording started for ${F}.`,"success"),await M(a?.recording?.id)}catch(N){r?.(N?.message||"Failed to start recording.","error")}finally{k(!1)}},[v,F,T,K,P,M,U,r,p]),X=R(async(N=E)=>{if(!N||v)return;k(!0);try{let a=await Hi({id:N.id});r?.(`Recording stopped for ${N.chatJid}.`,"success"),await M(a?.recording?.id)}catch(a){r?.(a?.message||"Failed to stop recording.","error")}finally{k(!1)}},[v,E,M,r]),L=R(async(N)=>{if(!N||v)return;if(!window.confirm(`Delete recording ${N.id}?

${N.title||""}`))return;k(!0);try{await Wi(N.id),r?.("Recording deleted.","success"),await M(null)}catch(a){r?.(a?.message||"Failed to delete recording.","error")}finally{k(!1)}},[v,M,r]),bn=R(async()=>{try{let N=JSON.parse(W||"null"),a=await Ri(N,{mode:U,redaction:{keys:$r(T),patterns:$r(K)}});z(a.preview)}catch(N){z({error:N?.message||"Preview failed."})}},[T,K,U,W]);return s`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${F} onInput=${(N)=>y(N.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${p} onInput=${(N)=>V(N.target.value)} /></label>
                    <label>Mode<select value=${U} onChange=${(N)=>H(N.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${P} onChange=${(N)=>B(N.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${T} onInput=${(N)=>t(N.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${K} onInput=${(N)=>A(N.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${E?s`<button onClick=${()=>X(E)} disabled=${v}>Stop current chat recording</button>`:s`<button onClick=${J} disabled=${v}>Start recording</button>`}
                    <button onClick=${()=>M()} disabled=${f}>Refresh</button>
                </div>
                ${c.length>0&&s`<div class="settings-recording-active-row">${c.map((N)=>s`<${Ar} type="active">REC ${N.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${W} onInput=${(N)=>G(N.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${bn}>Preview redaction</button></div>
                ${Z&&s`<pre>${JSON.stringify(Z,null,2)}</pre>`}
            </details>

            ${f&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${l&&s`<div class="settings-error-state">${l}</div>`}
            ${!f&&!l&&i.length===0&&s`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!f&&!l&&i.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${on.map((N)=>s`
                            <button class=${`settings-task-row ${N.id===x?"active":""}`} onClick=${()=>yn(N)}>
                                <span class="settings-task-row-main"><strong>${N.title||N.id}</strong><span>${N.chatJid} · ${Dr(N.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${Ar} type=${N.status==="recording"?"active":"completed"}>${N.status}<//><${Ar}>${qi(N.mode)}<//></span>
                                <span class="settings-task-row-times">${N.eventCount||0} events</span>
                            </button>
                        `)}
                        ${on.length===0&&s`<p class="settings-hint">No recordings match “${n}”.</p>`}
                    </div>
                    <${N0} recording=${Y} details=${h} onDelete=${L} onRefresh=${()=>Y&&yn(Y)} />
                </div>
            `}
        </div>
    `}var Q0;var kc=O(()=>{m();Bn();Q0={formatDateTime:Dr,modeLabel:qi,parseList:$r}});var pc={};fn(pc,{CompactionSection:()=>q0});function M0(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),toolResultSemanticSummaryEnabled:Boolean(n.toolResultSemanticSummaryEnabled??!0),toolResultSemanticSummaryMaxInputChars:n.toolResultSemanticSummaryMaxInputChars??12000,toolResultSemanticSummaryMaxTokens:n.toolResultSemanticSummaryMaxTokens??320,toolResultSemanticSummaryTimeoutSec:n.toolResultSemanticSummaryTimeoutSec??12,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function Ai(n){let r=String(n||"").trim();if(!r)return"—";let i=new Date(r);if(Number.isNaN(i.getTime()))return r;return i.toLocaleString()}function q0({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(180),[u,f]=w(15),[g,l]=w(360),[o,x]=w(75),[$,h]=w(0.5),[b,v]=w(!0),[k,F]=w(!0),[y,p]=w(12000),[V,U]=w(320),[H,P]=w(12),[B,T]=w(!1),[t,K]=w(120),[A,W]=w([]),[G,Z]=w([]),[z,M]=w(!1),Y=C(""),E=C(null),cn=C(!0);Q(()=>{return cn.current=!0,()=>{cn.current=!1}},[]);let on=R((X)=>{let L=M0(X);c(L.compactionTimeoutSec),f(L.compactionBackoffBaseMin),l(L.compactionBackoffMaxMin),x(L.compactionThresholdPercent),h(L.compactionBackoffDecayFactor),v(L.toolResultCompactionEnabled),F(L.toolResultSemanticSummaryEnabled),p(L.toolResultSemanticSummaryMaxInputChars),U(L.toolResultSemanticSummaryMaxTokens),P(L.toolResultSemanticSummaryTimeoutSec),T(L.progressWatchdogEnabled),K(L.progressWatchdogTimeoutSec),W(L.compactionBackoffs),Z(L.progressWatchdogPhases),Y.current=JSON.stringify({compactionTimeoutSec:L.compactionTimeoutSec,compactionBackoffBaseMin:L.compactionBackoffBaseMin,compactionBackoffMaxMin:L.compactionBackoffMaxMin,compactionThresholdPercent:L.compactionThresholdPercent,compactionBackoffDecayFactor:L.compactionBackoffDecayFactor,toolResultCompactionEnabled:L.toolResultCompactionEnabled,toolResultSemanticSummaryEnabled:L.toolResultSemanticSummaryEnabled,toolResultSemanticSummaryMaxInputChars:L.toolResultSemanticSummaryMaxInputChars,toolResultSemanticSummaryMaxTokens:L.toolResultSemanticSummaryMaxTokens,toolResultSemanticSummaryTimeoutSec:L.toolResultSemanticSummaryTimeoutSec,progressWatchdogEnabled:L.progressWatchdogEnabled,progressWatchdogTimeoutSec:L.progressWatchdogTimeoutSec})},[]);Q(()=>{on(n||{})},[n,on]);let yn=I(()=>JSON.stringify({compactionTimeoutSec:_,compactionBackoffBaseMin:u,compactionBackoffMaxMin:g,compactionThresholdPercent:o,compactionBackoffDecayFactor:$,toolResultCompactionEnabled:b,toolResultSemanticSummaryEnabled:k,toolResultSemanticSummaryMaxInputChars:y,toolResultSemanticSummaryMaxTokens:V,toolResultSemanticSummaryTimeoutSec:H,progressWatchdogEnabled:B,progressWatchdogTimeoutSec:t}),[_,u,g,o,$,b,k,y,V,H,B,t]);Q(()=>{if(yn===Y.current)return;if(E.current)clearTimeout(E.current);return E.current=setTimeout(async()=>{if(!cn.current)return;try{r?.("Saving compaction settings…","info");let X=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:yn}),L=await X.json().catch(()=>({}));if(!cn.current)return;if(!X.ok||!L?.ok||!L?.settings){r?.(L?.error||"Failed to save compaction settings.","error");return}Y.current=yn,i?.(L.settings),on({...n||{},...L.settings||{}}),r?.("Compaction settings saved.","success"),M(!0),setTimeout(()=>{if(cn.current)M(!1),r?.(null)},4000)}catch(X){if(console.warn("[settings/compaction] Failed to persist compaction settings.",X),cn.current)r?.("Failed to save compaction settings.","error")}},800),()=>{if(E.current)clearTimeout(E.current)}},[yn,i,r,on,n]);let J=R(async(X)=>{try{r?.(`Clearing compaction suppression for ${X}…`,"info");let L=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:X})}),bn=await L.json().catch(()=>({}));if(!L.ok||!bn?.ok||!bn?.settings){r?.(bn?.error||"Failed to clear compaction suppression.","error");return}i?.(bn.settings),on({...n||{},...bn.settings||{}}),r?.(`Cleared compaction suppression for ${X}.`,"success")}catch(L){console.warn("[settings/compaction] Failed to clear compaction suppression.",L),r?.("Failed to clear compaction suppression.","error")}},[on,i,r,n]);return s`
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
                    <input type="checkbox" checked=${k} onChange=${(X)=>F(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">When enabled, compacted outputs include a semantic summary generated with the active model (preview fallback on failure).</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summary input limit (chars)</label>
                <${rn}
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
                <${rn}
                    label="semantic summary max tokens"
                    value=${V}
                    min=${64}
                    max=${4096}
                    fallback=${320}
                    width="90px"
                    disabled=${!k}
                    onChange=${U}
                />
                <span class="settings-hint" style="margin:0">Upper bound for generated summary length.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary timeout (sec)</label>
                <${rn}
                    label="semantic summary timeout"
                    value=${H}
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
                <${rn}
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
                <${rn}
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
                <${rn}
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
                <${rn}
                    label="compaction backoff max"
                    value=${g}
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
                <${rn}
                    label="backoff decay factor"
                    value=${Math.round($*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(X)=>h(X/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${B} onChange=${(X)=>T(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${rn}
                    label="watchdog timeout"
                    value=${t}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!B}
                    onChange=${K}
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
                            ${A.map((X)=>s`
                                <tr>
                                    <td><code>${X.chatJid}</code></td>
                                    <td>${X.failureCount}</td>
                                    <td>${Ai(X.backoffUntil)}</td>
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
                                    <td>${Ai(X.startedAt)}</td>
                                    <td>${Ai(X.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var Kc=O(()=>{m();Sn()});function zc(n){let r=String(n||"").trim().toLowerCase();if(!r)return null;let i=Z0[r]||r;if(/^f(?:[1-9]|1[0-2])$/.test(i))return i;if(L0.has(i))return i;if(i.length===1)return i;if(/^[a-z0-9]+$/.test(i))return i;return null}function dn(n){let r=String(n||"").trim();if(!r)return null;let i=r.split("+").map((u)=>u.trim()).filter(Boolean);if(!i.length)return null;let _={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let u of i){let f=u.toLowerCase(),g=D0[f];if(g){_[g]=!0;continue}if(_.key)return null;let l=zc(u);if(!l||l==="escape")return null;_.key=l}if(!_.key)return null;let c=[];if(_.ctrl)c.push("ctrl");if(_.meta)c.push("meta");if(_.alt)c.push("alt");if(_.shift)c.push("shift");return c.push(_.key),c.join("+")}function Fc(n){return String(n||"").split(/[\n,]/).map((r)=>dn(r)).filter((r)=>Boolean(r))}function Un(n){return n.join(", ")}function Zi(){let n=M_(Bc);if(!n||typeof n!=="object")return{};let r={};for(let i of wr){let _=n[i.id];if(!Array.isArray(_))continue;let c=_.map((u)=>dn(String(u||""))).filter((u)=>Boolean(u));r[i.id]=[...new Set(c)]}return r}function Di(n){if(gn(Bc,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function Hc(n){return A0.get(n)}function tr(n){let r=Zi()[n];if(Array.isArray(r))return r;return[...Hc(n).defaultBindings]}function Wc(n,r){let i=Zi(),_=Hc(n).defaultBindings,c=[...new Set(r.map((u)=>dn(u)).filter((u)=>Boolean(u)))];if(c.length===_.length&&c.every((u,f)=>u===_[f]))delete i[n];else i[n]=c;Di(i)}function Li(n){if(!n){Di({});return}let r=Zi();delete r[n],Di(r)}function Zr(){let n={};for(let r of wr)n[r.id]=tr(r.id);return n}function I0(n){let r=typeof n==="string"?n:"";if(!r)return"";if(r.length===1)return r.toLowerCase();return zc(r)||r.toLowerCase()}function Y0(n){let r=dn(n);if(!r)return null;let i={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let _ of r.split("+")){if(_==="ctrl"||_==="meta"||_==="alt"||_==="shift"){i[_]=!0;continue}i.key=_}return i.key?i:null}function C0(n,r){let i=Y0(r);if(!i)return!1;if(I0(n?.key)!==i.key)return!1;let c=!i.shift&&i.key.length===1&&/[^a-z0-9]/i.test(i.key);return Boolean(n?.ctrlKey)===i.ctrl&&Boolean(n?.metaKey)===i.meta&&Boolean(n?.altKey)===i.alt&&(c||Boolean(n?.shiftKey)===i.shift)}function $o(n,r){return tr(r).some((i)=>C0(n,i))}var Bc="piclaw_keyboard_shortcuts_v1",wr,A0,D0,Z0,L0;var jc=O(()=>{wr=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],A0=new Map(wr.map((n)=>[n.id,n])),D0={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},Z0={esc:"escape",return:"enter",spacebar:"space"},L0=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var Rc={};fn(Rc,{KeyboardSection:()=>J0});function O0(n,r,i){let _=String(n||"").trim().toLowerCase();if(!_)return!0;return[r.label,r.description,i,...r.defaultBindings||[]].some((c)=>String(c||"").toLowerCase().includes(_))}function J0({filter:n="",setStatus:r}){let{t:i}=e(),[_,c]=w(()=>{let o=Zr();return Object.fromEntries(Object.entries(o).map(([x,$])=>[x,Un($)]))});Q(()=>{let o=()=>{let x=Zr();c(Object.fromEntries(Object.entries(x).map(([$,h])=>[$,Un(h)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",o),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",o)},[]);let u=I(()=>wr.filter((o)=>{let x=String(_[o.id]||"");return O0(n,o,x)}),[_,n]),f=(o)=>{let x=String(_[o]||"").trim(),h=(x?x.split(/[\n,]/).map((v)=>v.trim()).filter(Boolean):[]).filter((v)=>!dn(v));if(h.length>0){r?.(i("settings.keyboard.invalidShortcut",{token:h[0]}),"error");return}let b=Fc(x);Wc(o,b),c((v)=>({...v,[o]:Un(tr(o))})),r?.(i("settings.keyboard.saved"),"success")},g=(o)=>{Li(o),c((x)=>({...x,[o]:Un(tr(o))})),r?.(i("settings.keyboard.resetOne"),"success")},l=()=>{Li();let o=Zr();c(Object.fromEntries(Object.entries(o).map(([x,$])=>[x,Un($)]))),r?.(i("settings.keyboard.resetAllDone"),"success")};return s`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${l}>${i("settings.keyboard.resetAll")}</button>
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
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>g(o.id)}>${i("settings.keyboard.defaultBtn")}</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${u.length===0&&s`<div class="settings-hint">${i("settings.keyboard.noMatch")}</div>`}
            </div>
        </div>
    `}var Uc=O(()=>{m();jc();wn()});function Gc(n,r=Ii){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(300,Math.max(15,Math.round(i)))}function Vc(n,r=Yi){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(8,Math.max(0,Math.round(i)))}function Ci(){return{refreshIntervalSec:Gc(wi(Tc,Ii),Ii),folderPreviewDepth:Vc(wi(Pc,Yi),Yi)}}function Nc(n={}){let r=Ci(),i={refreshIntervalSec:Gc(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:r.refreshIntervalSec,r.refreshIntervalSec),folderPreviewDepth:Vc(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:r.folderPreviewDepth,r.folderPreviewDepth)};if(gn(Tc,String(i.refreshIntervalSec)),gn(Pc,String(i.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(E0,{detail:{settings:i}}));return i}var E0="piclaw:workspace-client-settings-updated",Tc="workspaceRefreshIntervalSec",Pc="workspaceFolderPreviewDepth",Ii=60,Yi=3;var Xc=()=>{};var Mc={};fn(Mc,{WorkspaceSection:()=>S0});function Qc(n={}){let r=n.workspaceSettings||{};return{webTerminalEnabled:r.webTerminalEnabled!==!1,vncAllowDirect:r.vncAllowDirect!==!1,treeMaxDepth:r.treeMaxDepth??4,treeMaxEntries:r.treeMaxEntries??5000}}function S0({settingsData:n,setStatus:r,mergeSettingsData:i}){let{t:_}=e(),[c,u]=w(!0),[f,g]=w(!0),[l,o]=w(4),[x,$]=w(5000),[h,b]=w(60),[v,k]=w(3),[F,y]=w(!1),[p,V]=w(!1),U=C(""),H=C(null),P=C(null),B=C(null),T=C(!0);Q(()=>{return T.current=!0,()=>{if(T.current=!1,H.current)clearTimeout(H.current);if(P.current)clearTimeout(P.current);if(B.current)clearTimeout(B.current)}},[]);let t=R((W)=>{let G=Qc(W),Z=Ci();u(G.webTerminalEnabled),g(G.vncAllowDirect),o(G.treeMaxDepth),$(G.treeMaxEntries),b(Z.refreshIntervalSec),k(Z.folderPreviewDepth),U.current=JSON.stringify(G)},[]);Q(()=>{t(n||{})},[n,t]);let K=I(()=>JSON.stringify(Qc({workspaceSettings:{webTerminalEnabled:c,vncAllowDirect:f,treeMaxDepth:l,treeMaxEntries:x}})),[c,f,l,x]);Q(()=>{if(K===U.current)return;if(H.current)clearTimeout(H.current);return H.current=setTimeout(async()=>{if(!T.current)return;let W=document.activeElement;if(W&&W.closest?.(".settings-number-stepper"))return;try{let G=await Vi(JSON.parse(K));if(!T.current||!G?.ok||!G?.settings)return;if(U.current=K,i?.({workspaceSettings:G.settings}),r?.(null),y(!0),P.current)clearTimeout(P.current);P.current=setTimeout(()=>{if(T.current)y(!1)},4000)}catch(G){r?.(String(G?.message||G),"error")}},800),()=>{if(H.current)clearTimeout(H.current)}},[K,i,r]);let A=R((W)=>{let G=Nc(W);if(b(G.refreshIntervalSec),k(G.folderPreviewDepth),V(!0),B.current)clearTimeout(B.current);B.current=setTimeout(()=>{if(T.current)V(!1)},3000)},[]);return s`
        <div class="settings-section">
            ${F&&s`
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
                <${rn}
                    label=${_("settings.workspace.maxDepthAria")}
                    value=${l}
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
                <${rn}
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
                <${rn}
                    label=${_("settings.workspace.refreshIntervalAria")}
                    value=${h}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(W)=>A({refreshIntervalSec:W})}
                />
            </div>
            <div class="settings-row">
                <label>${_("settings.workspace.folderDepth")}</label>
                <${rn}
                    label=${_("settings.workspace.folderDepthAria")}
                    value=${v}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(W)=>A({folderPreviewDepth:W})}
                />
                <span class="settings-hint" style="margin:0">${_("settings.workspace.folderDepthHintPre")} <code>0</code> ${_("settings.workspace.folderDepthHintPost")}</span>
            </div>
            <p class="settings-hint">${_("settings.workspace.footerHint")}</p>
        </div>
    `}var qc=O(()=>{m();Bn();Xc();Sn();wn()});var Ac={};fn(Ac,{EnvironmentSection:()=>d0});function Oi(n={}){let r=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(r.variables)?r.variables:[],overrides:r.overrides&&typeof r.overrides==="object"?r.overrides:{},count:Number(r.count||0),overrideCount:Number(r.overrideCount||0),keychainEnvNames:Array.isArray(r.keychainEnvNames)?r.keychainEnvNames:[]}}function d0({settingsData:n,filter:r="",setStatus:i,mergeSettingsData:_}){let{t:c}=e(),[u,f]=w(()=>Oi(n||{})),[g,l]=w({}),[o,x]=w(""),[$,h]=w(""),[b,v]=w(null);Q(()=>{f(Oi(n||{})),l({})},[n]);let k=R((H)=>{let P=Oi({environmentSettings:H?.settings||H});return f(P),_?.({environmentSettings:P}),l({}),P},[_]),F=R(async()=>{try{let H=await Ni();if(H?.ok)k(H.settings);i?.(c("settings.environment.refreshedToast"),"info")}catch(H){i?.(String(H?.message||H),"error")}},[k,i]),y=R(async(H,P)=>{let B=String(H||"").trim();if(!B)return;v(B);try{let T=await Qr({action:"set",name:B,value:String(P??"")});if(T?.ok)k(T.settings);if(i?.(c("settings.environment.savedToast",{name:B}),"info"),B===o.trim())x(""),h("")}catch(T){i?.(String(T?.message||T),"error")}finally{v(null)}},[k,o,i]),p=R(async(H)=>{let P=String(H||"").trim();if(!P)return;v(P);try{let B=await Qr({action:"clear",name:P});if(B?.ok)k(B.settings);i?.(c("settings.environment.clearedToast",{name:P}),"info")}catch(B){i?.(String(B?.message||B),"error")}finally{v(null)}},[k,i]),V=I(()=>{let H=String(r||"").trim().toLowerCase(),P=Array.isArray(u.variables)?u.variables:[];if(!H)return P;return P.filter((B)=>{return`${B?.name||""} ${B?.value||""} ${B?.source||""}`.toLowerCase().includes(H)})},[u.variables,r]),U=R((H,P)=>{l((B)=>({...B||{},[H]:P}))},[]);return s`
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
                        value=${o}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(H)=>x(H.target.value)}
                    />
                    <input
                        type="text"
                        value=${$}
                        placeholder=${c("settings.environment.valuePlaceholder")}
                        spellcheck="false"
                        onInput=${(H)=>h(H.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!o.trim()||b===o.trim()}
                        onClick=${()=>y(o,$)}
                    >${c("settings.environment.save")}</button>
                </div>
            </div>

            <p class="settings-hint">
                ${c("settings.environment.countLine",{count:u.count,overrides:u.overrideCount,keychain:u.keychainEnvNames.length})}
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${V.map((H)=>{let P=String(H?.name||""),B=Object.prototype.hasOwnProperty.call(g,P)?g[P]:H.value,T=B!==H.value,t=b===P;return s`
                        <div class="settings-tool-row" key=${P} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${P}>${P}</span>
                            <input
                                type="text"
                                value=${B}
                                spellcheck="false"
                                onInput=${(K)=>U(P,K.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${H.overridden?c("settings.environment.overridden"):c("settings.environment.inherited")}>
                                ${H.overridden?c("settings.environment.kindOverride"):c("settings.environment.kindProcess")}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${t||!T} onClick=${()=>y(P,B)}>${c("settings.environment.save")}</button>
                                <button type="button" disabled=${t||!H.overridden} onClick=${()=>p(P)}>${c("settings.environment.clear")}</button>
                            </span>
                        </div>
                    `})}
                ${V.length===0&&s`<p class="settings-hint">${c("settings.environment.noMatch",{filter:r})}</p>`}
            </div>
        </div>
    `}var Dc=O(()=>{m();Bn();wn()});var Zc={};fn(Zc,{ProvidersSection:()=>m0});function e0(n){switch(n){case"oauth":return"OAuth";case"api_key":return Pr("settings.providers.authApiKey");case"custom":return Pr("settings.providers.authConfigured");default:return Pr("settings.providers.authConfigured")}}function m0({providers:n,setStatus:r}){let{t:i}=e(),[_,c]=w(null),[u,f]=w(null),[g,l]=w({}),o=R((y,p)=>{l((V)=>({...V,[y]:p}))},[]),x=R(async(y)=>{let p=(g.apiKey||"").trim();if(!p){r?.(i("settings.providers.apiKeyEmpty"),"error");return}c(y),r?.(i("settings.providers.configuringToast",{provider:y}),"info");try{let V=JSON.stringify({provider:y,method:"api_key",api_key:p}),U=await Kn("default",`/login __step2 ${V}`,null,[]);if(U?.command?.status==="error"){r?.(U.command.message,"error");return}r?.(U?.command?.message||i("settings.providers.configured",{provider:y}),"success"),f(null),l({})}catch(V){r?.(String(V.message||V),"error")}finally{c(null)}},[g,r]),$=R(async(y,p)=>{c(y),r?.(i("settings.providers.configuringToast",{provider:y}),"info");try{let V={provider:y,method:"custom"};for(let P of p.customFields||[])V[P.key]=(g[P.key]||"").trim();let U=JSON.stringify(V),H=await Kn("default",`/login __step2 ${U}`,null,[]);if(H?.command?.status==="error"){r?.(H.command.message,"error");return}r?.(H?.command?.message||i("settings.providers.configured",{provider:y}),"success"),f(null),l({})}catch(V){r?.(String(V.message||V),"error")}finally{c(null)}},[g,r]),h=R(async(y)=>{c(y),r?.(i("settings.providers.startingOAuth",{provider:y}),"info");try{let p=JSON.stringify({provider:y}),U=(await Kn("default",`/login __step1 ${p}`,null,[]))?.command?.message||"";if(U.includes("http")){let H=U.match(/(https?:\/\/[^\s)]+)/);if(H)window.open(H[1],"_blank","noopener"),r?.(i("settings.providers.oauthOpened"),"success");else r?.(U,"success")}else r?.(U||i("settings.providers.oauthStarted",{provider:y}),"success")}catch(p){r?.(String(p.message||p),"error")}finally{c(null)}},[r]),b=R(async(y)=>{if(_)return;c(y),r?.(i("settings.providers.loggingOut",{provider:y}),"info");try{await Kn("default",`/logout ${y}`,null,[]),r?.(i("settings.providers.loggedOut",{provider:y}),"success")}catch(p){r?.(String(p.message||p),"error")}finally{c(null)}},[_,r]),v=n||[],k=(y)=>u===y,F=(y)=>{f((p)=>p===y?null:y),l({})};return s`
        <div class="settings-section">
            <h3>${i("settings.providers.heading")}</h3>
            <div class="settings-provider-list">
                ${v.map((y)=>s`
                    <div class=${`settings-provider-card${y.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!y.configured&&F(y.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${y.name}</strong>
                                <span class="settings-provider-id">${y.id}</span>
                                ${y.configured&&s`<span class="settings-tag settings-tag-skill">${e0(y.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${y.hasOAuth&&s`<span class="settings-tag">OAuth</span>`}
                                ${y.hasApiKey&&s`<span class="settings-tag">API Key</span>`}
                                ${y.isCustom&&s`<span class="settings-tag">${i("settings.providers.tagCustom")}</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${y.configured?s`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${_===y.id} onClick=${(p)=>{p.stopPropagation(),b(y.id)}}
                                    >${_===y.id?"…":i("settings.providers.logout")}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${_===y.id} onClick=${(p)=>{p.stopPropagation(),F(y.id)}}
                                    >${i("settings.providers.reconfigure")}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${_===y.id} onClick=${(p)=>{p.stopPropagation(),F(y.id)}}
                                    >${i("settings.providers.setUp")}</button>
                                `}
                            </div>
                        </div>

                        ${k(y.id)&&s`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">${i("settings.providers.setupHint")}</p>
                                ${y.hasOAuth&&s`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${_===y.id}
                                            onClick=${()=>h(y.id)}>
                                            ${_===y.id?i("settings.providers.starting"):i("settings.providers.signInOAuth")}
                                        </button>
                                    </div>
                                `}
                                ${y.hasApiKey&&s`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>${i("settings.providers.apiKeyLabel")}</label>
                                            <input type="password" value=${g.apiKey||""}
                                                onInput=${(p)=>o("apiKey",p.target.value)}
                                                placeholder=${y.apiKeyHint||i("settings.providers.apiKeyPlaceholder")} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${_===y.id||!(g.apiKey||"").trim()}
                                                onClick=${()=>x(y.id)}>
                                                ${_===y.id?"…":i("settings.providers.save")}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${y.isCustom&&s`
                                    <div class="settings-provider-method">
                                        ${(y.customFields||[]).map((p)=>s`
                                            <div class="settings-provider-field-row">
                                                <label>${p.label}${p.required?" *":""}</label>
                                                <input type="text" value=${g[p.key]||""}
                                                    onInput=${(V)=>o(p.key,V.target.value)}
                                                    placeholder=${p.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${_===y.id}
                                                onClick=${()=>$(y.id,y)}>
                                                ${_===y.id?i("settings.providers.configuring"):i("settings.providers.saveConfig")}
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
    `}var Lc=O(()=>{m();Bn();wn()});var Ic={};fn(Ic,{ModelsSection:()=>_s});function rs(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function is({thinkingLevel:n,supportsThinking:r,provider:i,availableLevels:_,onSetLevel:c,disabled:u}){let{t:f}=e(),g=rs(i)?a0:ns,l=_&&_.length>1?_:["off","minimal","low","medium","high"],o=Math.max(0,l.indexOf(n??"off"));if(!r)return s`<div class="settings-thinking-slider"><label>${f("settings.models.thinkingLevel")}</label><p class="settings-hint" style="margin:4px 0 0">${f("settings.models.noThinking")}</p></div>`;return s`
        <div class="settings-thinking-slider">
            <label>${f("settings.models.thinkingLevelLabel")} <strong>${g[l[o]]||l[o]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${l.length-1} step="1" value=${o} disabled=${u}
                    onInput=${(x)=>c(l[parseInt(x.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${l.map((x,$)=>s`<span class=${$===o?"active":""} onClick=${()=>!u&&c(x)}>${g[x]||x}</span>`)}
                </div>
            </div>
        </div>
    `}function _s({filter:n=""}){let{t:r}=e(),[i,_]=w(null),[c,u]=w(!1),[f,g]=w("off"),[l,o]=w(!1),[x,$]=w(["off"]),[h,b]=w(!1),[v,k]=w(!1),[F,y]=w(!1),p=R(async()=>{let W=await Xi();if(_(W),W.thinking_level)g(W.thinking_level);if(o(Boolean(W.supports_thinking)),b(Boolean(W.scoped_models_only)),Array.isArray(W.available_thinking_levels)&&W.available_thinking_levels.length>0)$(W.available_thinking_levels);return W},[]);Q(()=>{p().catch((W)=>{console.warn("[settings/models] Failed to load models.",W),_({models:[],model_options:[]})})},[]);let V=R(async(W)=>{if(c)return;u(!0);try{await Kn("default",`/model ${W}`,null,[]),await p()}catch(G){console.error("Failed to switch model:",G)}finally{u(!1)}},[c,p]),U=R(async(W)=>{if(v)return;k(!0),b(Boolean(W));try{let G=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scopedModelsOnly:Boolean(W)})}),Z=await G.json().catch(()=>({}));if(!G.ok||!Z?.ok)throw Error(Z?.error||"Failed to save scoped model setting.");await p()}catch(G){console.error("Failed to set scoped model filtering:",G),await p().catch((Z)=>{console.warn("[settings/models] Reload after scoped model filtering failure failed.",Z)})}finally{k(!1)}},[v,p]),H=R(async(W)=>{if(F)return;y(!0),g(W);try{let G=await Kn("default",`/thinking ${W}`,null,[]);if(G?.command?.thinking_level)g(G.command.thinking_level);o(G?.command?.supports_thinking!==!1),await p()}catch(G){console.error("Failed to set thinking:",G),await p().catch((Z)=>{console.warn("[settings/models] Reload after thinking change failure failed.",Z)})}finally{y(!1)}},[F,p]);if(!i)return s`<div class="settings-loading">${r("settings.models.loading")}</div>`;let P=i.model_options||[],B=i.current,t=P.find((W)=>W.label===B)?.provider||"",K=n.toLowerCase(),A=K?P.filter((W)=>W.label.toLowerCase().includes(K)||(W.provider||"").toLowerCase().includes(K)):P;return s`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">${r("settings.models.summary")}</div>
            <div class="settings-row" style="padding:0 0 10px 0; align-items:flex-start">
                <label>${r("settings.models.scopedOnly")}</label>
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0">
                    <label style="display:flex; align-items:center; gap:8px; font-weight:500">
                        <input type="checkbox" checked=${h} disabled=${v} onChange=${(W)=>U(W.target.checked)} />
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
                        ${A.map((W)=>s`
                            <tr class=${W.label===B?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${W.label===B} disabled=${c} onChange=${()=>V(W.label)} /></td>
                                <td>${W.name||W.label}</td><td>${W.provider}</td>
                                <td>${W.context_window?(W.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${W.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${A.length===0&&s`<tr><td colspan="5" class="settings-empty">${r("settings.models.noMatch",{filter:n})}</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${is}
                    thinkingLevel=${f}
                    supportsThinking=${l}
                    provider=${t}
                    availableLevels=${x}
                    onSetLevel=${H}
                    disabled=${F||c} />
            </div>
        </div>
    `}var a0,ns;var Yc=O(()=>{m();Bn();wn();a0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},ns={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function Si(n){let r=String(n||"").trim().toLowerCase();if(!r)return"default";if(r==="solarized-dark"||r==="solarized-light")return"solarized";if(r==="github-dark"||r==="github-light")return"github";if(r==="tokyo-night")return"tokyo";return r}function Ec(n){if(!n)return null;let r=String(n).trim();if(!r)return null;let i=r.startsWith("#")?r.slice(1):r;if(!/^[0-9a-fA-F]{3}$/.test(i)&&!/^[0-9a-fA-F]{6}$/.test(i))return null;let _=i.length===3?i.split("").map((u)=>u+u).join(""):i,c=parseInt(_,16);return{r:c>>16&255,g:c>>8&255,b:c&255,hex:`#${_.toLowerCase()}`}}function us(n,r){try{if(document.body){n.style.display="none",document.body.appendChild(n);let i=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),i}}catch{return r}return r}function fs(n){if(!n||typeof document>"u")return null;let r=String(n).trim();if(!r)return null;let i=document.createElement("div");if(i.style.color="",i.style.color=r,!i.style.color)return null;let c=us(i,i.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!c)return null;let u=parseInt(c[1],10),f=parseInt(c[2],10),g=parseInt(c[3],10);if(![u,f,g].every((o)=>Number.isFinite(o)))return null;let l=`#${[u,f,g].map((o)=>o.toString(16).padStart(2,"0")).join("")}`;return{r:u,g:f,b:g,hex:l}}function Mn(n){return Ec(n)||fs(n)}function di(n,r,i){let _=Math.round(n.r+(r.r-n.r)*i),c=Math.round(n.g+(r.g-n.g)*i),u=Math.round(n.b+(r.b-n.b)*i);return`rgb(${_} ${c} ${u})`}function Lr(n,r){return`rgba(${n.r}, ${n.g}, ${n.b}, ${r})`}function ss(n){let r=n.r/255,i=n.g/255,_=n.b/255,c=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4),u=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),f=_<=0.03928?_/12.92:Math.pow((_+0.055)/1.055,2.4);return 0.2126*c+0.7152*u+0.0722*f}function gs(n){return ss(n)>0.4?"#000000":"#ffffff"}function Sc(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function ei(n){return Cc[n]||Cc.default}function os(n){return n.mode==="auto"?Sc():n.mode}function dc(n,r){let i=ei(n);if(r==="dark"&&i.dark)return i.dark;if(r==="light"&&i.light)return i.light;return i.dark||i.light||Fn}function zn(n,r,i){let _=Mn(n);if(!_)return n;return di(_,r,i)}function ec(n,r,i){let _=Mn(r);if(!_)return n;let u=Ec(i==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:zn(n.bgPrimary,_,0.08),bgSecondary:zn(n.bgSecondary,_,0.12),bgHover:zn(n.bgHover,_,0.16),textPrimary:zn(n.textPrimary,_,i==="dark"?0.08:0.06),textSecondary:zn(n.textSecondary,_,i==="dark"?0.12:0.1),borderColor:zn(n.borderColor,_,0.1),accent:_.hex,accentHover:u?di(_,u,0.18):_.hex,warning:zn(n.warning||Fn.warning,_,0.14),danger:zn(n.danger,_,0.16),success:zn(n.success,_,0.16)}}function ls(n,r){let i=Mn(n?.warning);if(i)return i.hex;let _=Mn(r==="dark"?Cr.warning:Fn.warning)||Mn(Fn.warning),c=Mn(n?.accent);if(_&&c)return di(_,c,r==="dark"?0.18:0.14);return r==="dark"?Cr.warning:Fn.warning}function $s(n,r){if(typeof document>"u")return;let i=document.documentElement,_=n.accent,c=Mn(_),u=c?Lr(c,r==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,f=c?Lr(c,r==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",g=c?Lr(c,r==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",l=c?gs(c):r==="dark"?"#000000":"#ffffff",o=c?Lr(c,r==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",x=ls(n,r),$={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":_,"--accent-hover":n.accentHover||_,"--accent-color-alpha":o,"--accent-soft":f,"--accent-soft-strong":g,"--accent-contrast-text":l,"--warning-color":x,"--danger-color":n.danger||Fn.danger,"--success-color":n.success||Fn.success,"--search-highlight-color":u||"rgba(29, 155, 240, 0.2)"};Object.entries($).forEach(([h,b])=>{if(b)i.style.setProperty(h,b)})}function ws(){if(typeof document>"u")return;let n=document.documentElement;cs.forEach((r)=>n.style.removeProperty(r))}function en(n,r={}){if(typeof document>"u")return null;let i=typeof r.id==="string"&&r.id.trim()?r.id.trim():null,_=i?document.getElementById(i):document.querySelector(`meta[name="${n}"]`);if(!_)_=document.createElement("meta"),document.head.appendChild(_);if(_.setAttribute("name",n),i)_.setAttribute("id",i);return _}function Oc(n){let r=Si(qn?.theme||"default"),i=qn?.tint?String(qn.tint).trim():null,_=dc(r,n);if(r==="default"&&i)_=ec(_,i,n);if(_?.bgPrimary)return _.bgPrimary;return n==="dark"?Cr.bgPrimary:Fn.bgPrimary}function ts(n,r){if(typeof document>"u")return;let i=en("theme-color",{id:"dynamic-theme-color"});if(i&&n)i.removeAttribute("media"),i.setAttribute("content",n);let _=en("theme-color",{id:"theme-color-light"});if(_)_.setAttribute("media","(prefers-color-scheme: light)"),_.setAttribute("content",Oc("light"));let c=en("theme-color",{id:"theme-color-dark"});if(c)c.setAttribute("media","(prefers-color-scheme: dark)"),c.setAttribute("content",Oc("dark"));let u=en("msapplication-TileColor");if(u&&n)u.setAttribute("content",n);let f=en("msapplication-navbutton-color");if(f&&n)f.setAttribute("content",n);let g=en("apple-mobile-web-app-status-bar-style");if(g)g.setAttribute("content",r==="dark"?"black-translucent":"default")}function ys(){if(typeof window>"u")return;let n={...qn,mode:Jc};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function xs(){if(typeof window>"u")return"web:default";try{let r=new URL(window.location.href).searchParams.get("chat_jid");return r&&r.trim()?r.trim():"web:default"}catch{return"web:default"}}function bs(n){if(typeof document>"u"||!n)return;let r=document.documentElement;if(r?.style)r.style.background=n;if(document.body?.style)document.body.style.background=n}function mi(n,r={}){if(typeof window>"u"||typeof document>"u")return;let i=Si(n?.theme||"default"),_=n?.tint?String(n.tint).trim():null,c=ei(i),u=os(c),f=dc(i,u);qn={theme:i,tint:_},Jc=u;let g=document.documentElement;g.dataset.theme=u,g.dataset.colorTheme=i,g.dataset.tint=_?String(_):"",g.style.colorScheme=u;let l=f;if(i==="default"&&_)l=ec(f,_,u);if(i==="default"&&!_)ws();else $s(l,u);if(bs(l.bgPrimary),ts(l.bgPrimary,u),ys(),r.persist!==!1)if(gn(Ei,i),_)gn(Yr,_);else gn(Yr,"")}function Ir(){if(ei(qn.theme).mode!=="auto")return;mi(qn,{persist:!1})}function hs(){if(typeof window>"u")return;let n=Si(Rn(Ei)||"default"),r=(()=>{let i=Rn(Yr);return i?i.trim():null})();mi({theme:n,tint:r},{persist:!1})}function Vo(){if(typeof window>"u")return()=>{};if(hs(),window.matchMedia&&!Ji){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Ir);else if(n.addListener)n.addListener(Ir);return Ji=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Ir);else if(n.removeListener)n.removeListener(Ir);Ji=!1}}return()=>{}}function ai(n){if(!n||typeof n!=="object")return;let r=xs(),i=n.chat_jid||n.chatJid||null,_=n.theme??n.name??n.colorTheme,c=n.tint??null;if(!i||i===r)mi({theme:_||"default",tint:c},{persist:!1});gn(Ei,_||"default"),gn(Yr,c||"")}function No(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return Sc()}var Ei="piclaw_theme",Yr="piclaw_tint",Fn,Cr,Cc,cs,qn,Jc="light",Ji=!1;var mc=O(()=>{Fn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Cr={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Cc={default:{label:"Default",mode:"auto",light:Fn,dark:Cr},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},cs=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],qn={theme:"default",tint:null}});function vs(n){return q_.map((r)=>({value:r,label:A_[r],active:r===n}))}function ac({variant:n="inline",onChange:r}={}){let{locale:i,setLocale:_,t:c}=e(),u=vs(i),f=(g)=>{let l=g?.currentTarget?.value;_(l),r?.(l)};return s`
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
  `}var nu=O(()=>{m();wn()});var iu={};fn(iu,{ThemeSection:()=>ks});function ru(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function ks({themes:n,colorKeys:r,settingsData:i,setStatus:_,mergeSettingsData:c}){let{t:u}=e(),[f,g]=w("default"),[l,o]=w(""),[x,$]=w(!1),h=C(""),b=C(null),v=C(!0);Q(()=>{return v.current=!0,()=>{v.current=!1}},[]);let k=R((U)=>{let H=ru(U);g(H.uiTheme),o(H.uiTint),h.current=JSON.stringify(H)},[]);Q(()=>{if(i){k(i);return}k({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[i,k]);let F=R((U,H)=>{ai({theme:U,tint:H||null}),g(U||"default"),o(H||"")},[]),y=I(()=>JSON.stringify(ru({uiTheme:f,uiTint:l})),[f,l]);Q(()=>{if(y===h.current)return;if(b.current)clearTimeout(b.current);return b.current=setTimeout(async()=>{if(!v.current)return;$(!0);try{let U=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),H=await U.json().catch(()=>({}));if(!v.current)return;if(!U.ok||!H?.ok||!H?.settings){_?.(H?.error||"Failed to save appearance settings.","error");return}h.current=y,c?.(H.settings),_?.("Appearance synced across clients.","success")}catch(U){if(!v.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",U),_?.("Failed to save appearance settings.","error")}finally{if(v.current)$(!1)}},250),()=>{if(b.current)clearTimeout(b.current)}},[y,c,_]);let p=r||[],V=n||[];return s`
        <div class="settings-section">
            <div class="settings-row settings-language-row">
                <${ac} variant="inline" />
            </div>
            ${x&&s`<div class="settings-hint" style="margin:0 0 12px 0;">${u("settings.appearance.syncing")}</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${f==="default"}
                        onChange=${()=>F("default",l)} />
                    <strong>${u("settings.appearance.default")}</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">${u("settings.appearance.autoLightDark")}</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">${u("settings.appearance.tint")}</label>
                    <input type="color"
                        value=${l||"#1d9bf0"}
                        onInput=${(U)=>{let H=U.target.value;if(o(H),f==="default")ai({theme:"default",tint:H})}} />
                    ${l&&s`
                        <button class="settings-tint-clear" onClick=${()=>F("default","")}
                            title=${u("settings.appearance.clearTint")}>\u2715</button>
                    `}
                    <span class="settings-tint-hex">${l||u("settings.appearance.none")}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${p.map((U)=>s`<th class="settings-swatch-header">${U.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${V.filter((U)=>U.name!=="default").map((U)=>s`
                        <tr class=${U.name===f?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>F(U.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${U.name===f} onChange=${()=>F(U.name,"")} /></td>
                            <td><strong>${U.label}</strong></td>
                            <td>${U.mode}</td>
                            ${p.map((H)=>{let P=U.colors?.[H];return s`<td class="settings-swatch-cell">
                                    ${P?s`<span class="settings-color-swatch" style=${"background:"+P} title=${P}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var _u=O(()=>{m();mc();nu();wn()});var uu={};fn(uu,{__scheduledTasksSettingsTest:()=>Hs,ScheduledTasksSection:()=>Fs});function An(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function cu(n){let r=Number(n);if(!Number.isFinite(r))return"—";if(r<1000)return`${Math.round(r)}ms`;return`${(r/1000).toFixed(r<1e4?1:0)}s`}function n_(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${An(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function r_(n){let r=n?.task_kind||"agent";return r==="internal"?"internal/protected":r}function i_(n){return(n?.task_kind||"agent")==="internal"}function Ks(n){if(!n)return"";let r=String(n).replace(/\s+/g," ").trim();return r.length>180?`${r.slice(0,179)}…`:r}function mn({children:n,type:r="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function Bs({task:n}){let r=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!r.length)return s`<p class="settings-hint">No run logs recorded yet.</p>`;return s`
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
    `}function Fs({filter:n="",setStatus:r}){let[i,_]=w([]),[c,u]=w({active:0,paused:0,completed:0}),[f,g]=w("all"),[l,o]=w(""),[x,$]=w(!0),[h,b]=w(null),[v,k]=w(null),[F,y]=w(null),[p,V]=w(!1),U=R(async(t={})=>{$(!0),b(null);try{let K=await Ki({status:f,chatJid:l.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});_(K.tasks||[]),u(K.counts||{active:0,paused:0,completed:0});let A=t.selectedId||v,W=(K.tasks||[]).find((G)=>G.id===A)||(K.tasks||[])[0]||null;k(W?.id||null),y(W)}catch(K){b(K?.message||"Failed to load scheduled tasks.")}finally{$(!1)}},[f,l,v]);Q(()=>{U()},[U]);let H=String(n||"").trim().toLowerCase(),P=I(()=>{if(!H)return i;return i.filter((t)=>[t.id,t.chat_jid,t.status,t.task_kind,t.schedule_type,t.schedule_value,t.summary,t.prompt_summary,t.command_summary,t.latest_run_log?.error_summary].some((K)=>String(K||"").toLowerCase().includes(H)))},[i,H]),B=R((t)=>{k(t?.id||null),y(t||null)},[]),T=R(async(t,K)=>{if(!K||p)return;let A=i_(K),W=K.summary||K.command_summary||K.prompt_summary||K.id,G=t==="delete"?`Delete scheduled task ${K.id}?

${W}`:`${t==="pause"?"Pause":"Resume"} scheduled task ${K.id}?

${W}`;if(!window.confirm(G))return;if(A&&!window.confirm(`Task ${K.id} is internal/protected. Continue with ${t}?`))return;V(!0),r?.(`${t==="delete"?"Deleting":t==="pause"?"Pausing":"Resuming"} ${K.id}…`,"info");try{await Bi(t,K.id,{allowInternal:A}),r?.(`Scheduled task ${K.id} ${t==="delete"?"deleted":t==="pause"?"paused":"resumed"}.`,"success"),await U({selectedId:t==="delete"?null:K.id})}catch(Z){r?.(Z?.message||`Failed to ${t} task.`,"error")}finally{V(!1)}},[p,U,r]);return s`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${mn} type="active">Active ${c.active||0}<//>
                    <${mn} type="paused">Paused ${c.paused||0}<//>
                    <${mn} type="completed">Completed ${c.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${f} onChange=${(t)=>g(t.target.value)}>
                        ${ps.map((t)=>s`<option value=${t}>${t==="all"?"All statuses":t}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${l} onInput=${(t)=>o(t.target.value)} />
                    <button onClick=${()=>U()} disabled=${x}>Refresh</button>
                </div>
            </div>

            ${x&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${h&&s`<div class="settings-error-state">${h}</div>`}
            ${!x&&!h&&i.length===0&&s`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/i`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!x&&!h&&i.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${P.map((t)=>s`
                            <button class=${`settings-task-row ${t.id===v?"active":""}`} onClick=${()=>B(t)}>
                                <span class="settings-task-row-main">
                                    <strong>${t.summary||t.id}</strong>
                                    <span>${n_(t)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${mn} type=${t.status||"neutral"}>${t.status}<//>
                                    <${mn}>${r_(t)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${An(t.next_run)} · Last ${An(t.last_run)}${t.latest_run_log?.status?` · ${t.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${P.length===0&&s`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${zs} task=${F&&P.some((t)=>t.id===F.id)?F:P[0]} onAction=${T} />
                </div>
            `}
        </div>
    `}var ps,Hs;var fu=O(()=>{m();Bn();ps=["all","active","paused","completed"];Hs={formatDateTime:An,formatDuration:cu,labelForSchedule:n_,kindLabel:r_,isProtectedTask:i_}});function su(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function an(n){return typeof n==="string"&&n.trim().length>0}function __(n,...r){let i=su(n);if(!i)return!0;let _=r.map((c)=>su(c)).filter(Boolean);for(let c of _)if(c.startsWith(i)||c.includes(i))return!0;return!1}function gu(n){if(!Array.isArray(n))return null;let r=[],i=new Set;for(let _ of n){let c=String(_||"").trim();if(!c)continue;let u=c.toLowerCase();if(i.has(u))continue;i.add(u),r.push(c)}return r}function yr(n){let r=n&&typeof n==="object"?n:{};return{workspaceCommands:gu(r.workspaceCommands),slashCommands:gu(r.slashCommands)}}function ou(n,r){if(!Array.isArray(n))return!0;return n.some((i)=>i.toLowerCase()===r.toLowerCase())}function Ws(n){let r=Array.isArray(n?.commands)?n.commands:[],i=yr(n?.settings),_=String(n?.query||"");return r.filter((c)=>ou(i.workspaceCommands,c.id)).filter((c)=>__(_,c.label,c.description,...c.keywords||[])).map((c)=>({key:`workspace:${c.id}`,kind:"workspace",title:c.label,subtitle:c.description,searchText:`${c.label} ${c.description} ${(c.keywords||[]).join(" ")}`.trim(),visualHint:c.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:c.id}))}function js(n){let r=Array.isArray(n?.agents)?n.agents:[],i=String(n?.query||""),_=new Set;return r.filter((c)=>{let u=an(c?.chat_jid)?c.chat_jid.trim():"";if(!u||_.has(u))return!1;if(c?.archived_at)return!1;return _.add(u),!0}).filter((c)=>__(i,`@${String(c?.agent_name||"").trim()}`,c?.session_name,c?.chat_jid)).map((c)=>{let u=an(c?.agent_name)?c.agent_name.trim():String(c?.chat_jid||"").replace(/^[^:]+:/,""),f=an(c?.session_name)?c.session_name.trim():"",g=String(c?.chat_jid||"").trim();return{key:`agent:${g}`,kind:"agent",title:`@${u}`,subtitle:f||g,searchText:`@${u} ${f} ${g}`.trim(),visualHint:u.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:g}})}function Rs(n){let r=Array.isArray(n?.slashCommands)?n.slashCommands:[],i=yr(n?.settings),_=String(n?.query||""),c=new Set;return r.filter((u)=>{let f=an(u?.name)?u.name.trim():"";if(!f||c.has(f.toLowerCase()))return!1;return c.add(f.toLowerCase()),ou(i.slashCommands,f)}).filter((u)=>__(_,u?.name,u?.description,u?.source)).map((u)=>{let f=String(u?.name||"").trim(),g=an(u?.description)?u.description.trim():"slash command",l=an(u?.source)?u.source.trim():"";return{key:`slash:${f}`,kind:"slash",title:f,subtitle:g,searchText:`${f} ${g} ${String(u?.source||"")}`.trim(),visualHint:"/",categoryLabel:l||"Slash",actionHint:"Insert",commandName:f}})}function Co(n){return[...js({agents:n?.agents,query:n?.query}),...Ws({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...Rs({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var nr;var lu=O(()=>{nr=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var tu={};fn(tu,{QuickActionsSection:()=>Us});function $u(n,...r){let i=String(n||"").trim().toLowerCase();if(!i)return!0;return r.some((_)=>String(_||"").toLowerCase().includes(i))}function wu(n){if(!Array.isArray(n))return null;return new Set(n.map((r)=>String(r||"").trim().toLowerCase()).filter(Boolean))}function Us({filter:n="",setStatus:r,mergeSettingsData:i}){let{t:_}=e(),[c,u]=w(()=>nr.map((B)=>B.id)),[f,g]=w([]),[l,o]=w([]),[x,$]=w(!0),[h,b]=w(!1),v=R(async()=>{$(!0);try{let[B,T]=await Promise.all([Pi(),Ti("web:default").catch(()=>({commands:[]}))]),t=yr(B?.settings),K=Array.isArray(T?.commands)?T.commands:[];o(K),u(Array.isArray(t.workspaceCommands)?t.workspaceCommands:nr.map((A)=>A.id)),g(Array.isArray(t.slashCommands)?t.slashCommands:K.map((A)=>String(A?.name||"").trim()).filter(Boolean))}catch(B){r?.(String(B?.message||B),"error")}finally{$(!1)}},[r]);Q(()=>{v()},[v]);let k=I(()=>wu(c),[c]),F=I(()=>wu(f),[f]),y=I(()=>nr.filter((B)=>$u(n,B.label,B.description,...B.keywords||[])),[n]),p=I(()=>l.filter((B)=>$u(n,B?.name,B?.description,B?.source)),[l,n]),V=R((B)=>{u((T)=>{let t=new Set((Array.isArray(T)?T:[]).map((K)=>String(K||"").trim()).filter(Boolean));if(t.has(B))t.delete(B);else t.add(B);return nr.map((K)=>K.id).filter((K)=>t.has(K))})},[]),U=R((B)=>{g((T)=>{let t=new Set((Array.isArray(T)?T:[]).map((K)=>String(K||"").trim()).filter(Boolean));if(t.has(B))t.delete(B);else t.add(B);return l.map((K)=>String(K?.name||"").trim()).filter((K)=>K&&t.has(K))})},[l]),H=R(()=>{u(nr.map((B)=>B.id)),g(l.map((B)=>String(B?.name||"").trim()).filter(Boolean))},[l]),P=R(async()=>{if(h)return;b(!0),r?.(_("settings.quickActions.savingToast"),"info");try{let B=await Gi({workspaceCommands:c,slashCommands:f}),T=yr(B?.settings);i?.({quickActions:T}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:T}})),r?.(_("settings.quickActions.savedToast"),"success")}catch(B){r?.(String(B?.message||B),"error")}finally{b(!1)}},[i,h,r,f,c]);if(x)return s`<div class="settings-loading">${_("settings.quickActions.loading")}</div>`;return s`
        <div class="settings-section">
            <h3>${_("settings.quickActions.heading")}</h3>
            <p class="settings-hint">
                ${_("settings.quickActions.intro")}
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${H} disabled=${h}>${_("settings.quickActions.enableAll")}</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${P} disabled=${h}>
                    ${h?_("settings.quickActions.saving"):_("settings.quickActions.saveApply")}
                </button>
            </div>

            <h3 style="margin-top:8px;">${_("settings.quickActions.workspaceCommands")}</h3>
            <div class="settings-subsection-list">
                ${y.map((B)=>{let T=k?k.has(B.id.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${B.id}>
                            <input type="checkbox" checked=${T} onChange=${()=>V(B.id)} />
                            <div>
                                <div>${B.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${B.description}</div>
                            </div>
                        </label>
                    `})}
                ${y.length===0&&s`<div class="settings-hint">${_("settings.quickActions.noWorkspaceMatch")}</div>`}
            </div>

            <h3 style="margin-top:20px;">${_("settings.quickActions.slashCommands")}</h3>
            <div class="settings-subsection-list">
                ${p.map((B)=>{let T=String(B?.name||"").trim(),t=F?F.has(T.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${T}>
                            <input type="checkbox" checked=${t} onChange=${()=>U(T)} />
                            <div>
                                <div><code>${T}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${B?.description||_("settings.quickActions.slashFallback")}</div>
                            </div>
                        </label>
                    `})}
                ${p.length===0&&s`<div class="settings-hint">${_("settings.quickActions.noSlashMatch")}</div>`}
            </div>
        </div>
    `}var yu=O(()=>{m();Bn();lu();wn()});var xu={};fn(xu,{KeychainSection:()=>Gs});function Ts(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function Gs({filter:n=""}){let[r,i]=w([]),[_,c]=w(!0),[u,f]=w(null),[g,l]=w(!1),[o,x]=w(""),[$,h]=w(""),[b,v]=w(""),[k,F]=w(""),[y,p]=w(""),[V,U]=w("secret"),[H,P]=w(!1),[B,T]=w({}),[t,K]=w(null),[A,W]=w(null),[G,Z]=w(null),z=C(null),M=C(null),Y=C(null),E=R(async()=>{c(!0),f(null);try{let D=await(await fetch("/agent/keychain")).json();if(D?.ok)i(D.entries||[]);else f(D?.error||"Failed to load keychain.")}catch(j){f("Failed to load keychain.")}finally{c(!1)}},[]);Q(()=>{E()},[E]);let cn=R(async()=>{let j=o.trim(),D=$;if(!j||!D)return;P(!0);try{let ln=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j,secret:D,type:V,username:b.trim()||void 0,userNote:k,agentNote:y})})).json();if(ln?.ok)x(""),h(""),v(""),F(""),p(""),U("secret"),l(!1),await E();else f(ln?.error||"Failed to add entry.")}catch{f("Failed to add entry.")}finally{P(!1)}},[o,$,b,k,y,V,E]),on=R(async(j)=>{try{let un=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j})})).json();if(un?.ok)W(null),Z((ln)=>ln?.name===j?null:ln),await E();else f(un?.error||"Failed to delete entry.")}catch{f("Failed to delete entry.")}},[E]),yn=R(async(j)=>{let D=j?.name;if(!D)return;let un=B[D]||{},ln=Object.prototype.hasOwnProperty.call(un,"userNote")?un.userNote:j.userNote||"",tn=Object.prototype.hasOwnProperty.call(un,"agentNote")?un.agentNote:j.agentNote||"";K(D);try{let Tn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:D,userNote:ln,agentNote:tn})})).json();if(Tn?.ok)T((hr)=>{let ir={...hr||{}};return delete ir[D],ir}),await E();else f(Tn?.error||"Failed to save notes.")}catch{f("Failed to save notes.")}finally{K(null)}},[B,E]),J=R((j,D,un)=>{T((ln)=>({...ln||{},[j]:{...(ln||{})[j]||{},[D]:un}}))},[]),X=R(async(j,D,un)=>{try{let tn=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j,master_password:D||void 0,totp_code:un||void 0})})).json();if(tn?.ok)Z({name:j,phase:"revealed",secret:tn.secret,username:tn.username,masterPassword:D});else if(tn?.needs_master_password)Z((vn)=>({name:j,phase:"password",masterPassword:"",error:vn?.name===j&&vn?.masterPassword?tn.error:null})),requestAnimationFrame(()=>M.current?.focus());else if(tn?.needs_totp)Z((vn)=>({name:j,phase:"totp",masterPassword:D,totpCode:"",error:vn?.name===j&&vn?.phase==="totp"&&vn?.totpCode?tn.error:null})),requestAnimationFrame(()=>Y.current?.focus());else Z({name:j,phase:"error",error:tn?.error||"Failed to reveal."})}catch{Z({name:j,phase:"error",error:"Failed to reveal."})}},[]),L=R((j)=>{if(G?.name===j&&G?.phase==="revealed"){Z(null);return}X(j,null,null)},[G,X]),bn=R((j)=>{let D=G?.masterPassword||"";if(!D)return;X(j,D,null)},[G,X]),N=R((j)=>{let D=G?.totpCode||"";if(D.length<6)return;X(j,G?.masterPassword,D)},[G,X]),a=R(async(j)=>{try{await navigator.clipboard.writeText(j)}catch{let D=document.createElement("textarea");D.value=j,D.style.position="fixed",D.style.opacity="0",document.body.appendChild(D),D.select(),document.execCommand("copy"),document.body.removeChild(D)}},[]);Q(()=>{if(g)requestAnimationFrame(()=>z.current?.focus())},[g]);let sn=n.toLowerCase(),Hn=I(()=>{if(!sn)return r;return r.filter((j)=>j.name.toLowerCase().includes(sn)||(j.type||"").toLowerCase().includes(sn)||(j.envVar||"").toLowerCase().includes(sn)||(j.userNote||"").toLowerCase().includes(sn)||(j.agentNote||"").toLowerCase().includes(sn))},[r,sn]);if(_)return s`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return s`
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
                <button class="settings-keychain-add-btn" onClick=${()=>l(!g)}>
                    ${g?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${g&&s`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${z} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${o} onInput=${(j)=>x(j.target.value)}
                            class="settings-keychain-input" />
                        <select value=${V} onChange=${(j)=>U(j.target.value)}
                            class="settings-keychain-select">
                            ${Ps.map((j)=>s`<option value=${j}>${j}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${$} onInput=${(j)=>h(j.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${b} onInput=${(j)=>v(j.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${cn}
                            disabled=${H||!o.trim()||!$}>
                            ${H?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${k} onInput=${(j)=>F(j.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${y} onInput=${(j)=>p(j.target.value)}
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
                        ${Hn.map((j)=>{let D=G?.name===j.name?G:null,un=D?.phase==="revealed",ln=D?.phase==="password",tn=D?.phase==="totp",vn=D?.phase==="error",Tn=B[j.name]||{},hr=Object.prototype.hasOwnProperty.call(Tn,"userNote")?Tn.userNote:j.userNote||"",ir=Object.prototype.hasOwnProperty.call(Tn,"agentNote")?Tn.agentNote:j.agentNote||"",Pu=hr!==(j.userNote||"")||ir!==(j.agentNote||""),o_=t===j.name;return s`
                            <tr class="settings-keychain-row" key=${j.name}>
                                <td class="settings-keychain-name">${j.name}</td>
                                <td><span class="settings-keychain-type-badge">${j.type}</span></td>
                                <td class="settings-keychain-env">${j.envVar?s`<code>$${j.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Ts(j.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${un?" active":""}`}
                                        onClick=${()=>L(j.name)}
                                        title=${un?"Hide secret":"Reveal secret"}>
                                        ${un?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${A===j.name?s`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>on(j.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>W(null)}>No</button>
                                            </span>
                                        `:s`<button class="settings-keychain-delete-btn" onClick=${()=>W(j.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${j.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${hr}
                                                onInput=${($n)=>J(j.name,"userNote",$n.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${ir}
                                                onInput=${($n)=>J(j.name,"agentNote",$n.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!Pu||o_} onClick=${()=>yn(j)}>
                                            ${o_?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${ln&&s`
                                <tr class="settings-keychain-prompt-row" key=${j.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${M} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${D?.masterPassword||""}
                                                onInput=${($n)=>Z((er)=>({...er,masterPassword:$n.target.value}))}
                                                onKeyDown=${($n)=>{if($n.key==="Enter")bn(j.name);if($n.key==="Escape")Z(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>bn(j.name)}
                                                disabled=${!D?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>Z(null)}>Cancel</button>
                                            ${D?.error&&s`<span class="settings-keychain-prompt-error">${D.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${tn&&s`
                                <tr class="settings-keychain-prompt-row" key=${j.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${Y} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${D?.totpCode||""}
                                                onInput=${($n)=>Z((er)=>({...er,totpCode:$n.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${($n)=>{if($n.key==="Enter")N(j.name);if($n.key==="Escape")Z(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>N(j.name)}
                                                disabled=${(D?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>Z(null)}>Cancel</button>
                                            ${D?.error&&s`<span class="settings-keychain-prompt-error">${D.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${un&&s`
                                <tr class="settings-keychain-reveal-row" key=${j.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${D.username&&s`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${D.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>a(D.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${D.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>a(D.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${vn&&s`
                                <tr class="settings-keychain-reveal-row" key=${j.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${D.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var Ps;var bu=O(()=>{m();Ps=["secret","token","password","basic"]});var hu={};fn(hu,{ToolsSection:()=>Ms});function Ms({toolsets:n,filter:r="",settingsData:i,mergeSettingsData:_}){let{t:c}=e(),u=n||[],[f,g]=w(()=>{let k={};for(let F of u)k[F.name]=!0;return k}),l=R((k)=>{g((F)=>({...F,[k]:!F[k]}))},[]),o=i?.searchMatchMode||"or",x=I(()=>{let k=Array.isArray(i?.toolResultCompactionTools)?i.toolResultCompactionTools:[];return new Set(k.filter((F)=>typeof F==="string").map((F)=>F.trim().toLowerCase()).filter(Boolean))},[i?.toolResultCompactionTools]),$=R(async()=>{let k=o==="or"?"and":"or";try{let y=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:k})})).json().catch(()=>({}));if(y?.ok&&y?.settings)_?.(y.settings)}catch(F){console.warn("[settings/tools] Failed to save search match mode.",F)}},[o,_]),h=R(async(k)=>{let F=String(k||"").trim().toLowerCase();if(!F)return;let y=new Set(x);if(y.has(F))y.delete(F);else y.add(F);try{let V=await(await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toolResultCompactionTools:Array.from(y).sort()})})).json().catch(()=>({}));if(V?.ok&&V?.settings)_?.(V.settings)}catch(p){console.warn("[settings/tools] Failed to save tool compaction settings.",p)}},[x,_]),b=r.toLowerCase(),v=I(()=>{if(!b)return u;return u.map((k)=>{let F=k.tools.filter((y)=>y.name.toLowerCase().includes(b)||k.name.toLowerCase().includes(b)||(y.summary||"").toLowerCase().includes(b));return F.length>0?{...k,tools:F}:null}).filter(Boolean)},[u,b]);if(u.length===0)return s`<div class="settings-section"><p class="settings-hint">${c("settings.tools.unavailable")}</p></div>`;return s`
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
            ${v.map((k)=>{let F=f[k.name]!==!1;return s`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${F} onChange=${()=>l(k.name)} />
                            <span class="settings-toolset-icon">${Vs[k.name]||Qs}</span>
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
                                            onChange=${()=>h(y.name)}
                                            title=${V?c("settings.tools.disableCompaction"):c("settings.tools.enableCompaction")}
                                        />
                                    </span>
                                    <span class="settings-tool-kind" title=${y.kind}>${Xs[y.kind]||"?"}</span>
                                    ${y.summary&&s`<span class="settings-tool-summary">${y.summary}</span>`}
                                    ${!y.summary&&s`<span class="settings-tool-summary"></span>`}
                                    <span class="settings-tool-source">${Ns[y.name]||k.name}</span>
                                </div>
                            `})}
                    </div>`}
                </div>
            `})}
            ${v.length===0&&s`<p class="settings-hint">${c("settings.tools.noMatch",{filter:r})}</p>`}
            <p class="settings-hint">${c("settings.tools.footer")}</p>
        </div>
    `}var Vs,Ns,Xs,Qs;var vu=O(()=>{m();wn();Vs={core:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},Ns={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Xs={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},Qs=s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var ku={};fn(ku,{AddonsSection:()=>qs});function qs({setStatus:n,filter:r=""}){let[i,_]=w(null),[c,u]=w(!0),[f,g]=w(null),[l,o]=w(!1),[x,$]=w({runtime:"",windowsNative:!1}),[h,b]=w([]),[v,k]=w([]);function F(){let t=new URLSearchParams;try{let A=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),W=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((Z)=>Z.trim()).filter(Boolean),G=localStorage.getItem("piclaw_addons_repo_url");if(A)t.append("catalog_url",A);for(let Z of W)t.append("catalog_url",Z);if(G)t.set("repo_url",G)}catch(A){}let K=t.toString();return K?`?${K}`:""}let y=R(async()=>{try{let[t,K]=await Promise.all([fetch(`/agent/addons${F()}`),fetch("/agent/settings-data")]),A=await t.json();if(A.error)throw Error(A.error);_(A.addons||[]),b(A.sources||[]),k(A.failed_sources||[]);let W=await K.json().catch(()=>({})),G=typeof W?.runtimePlatform==="string"?W.runtimePlatform:"";$({runtime:G,windowsNative:G==="win32"})}catch(t){_(null),n?.(String(t.message||t),"error")}finally{u(!1)}},[n]);Q(()=>{y()},[]);let p=R(async(t)=>{if(f)return;g({slug:t,action:"install"}),n?.(`Installing ${t}…`,"info");try{let A=await(await fetch(`/agent/addons/install${F()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:t})})).json();if(A.error){n?.(A.error,"error");return}o(!0);let W=[A.message,A.warning].filter(Boolean).join(" ");n?.(W||"Add-on installed.","success"),await y()}catch(K){n?.(String(K.message||K),"error")}finally{g(null)}},[f,y,n]),V=R(async(t)=>{if(f)return;g({slug:t,action:"remove"}),n?.(`Removing ${t}…`,"info");try{let A=await(await fetch(`/agent/addons/uninstall${F()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:t})})).json();if(A.error){n?.(A.error,"error");return}o(!0);let W=[A.message,A.warning].filter(Boolean).join(" ");n?.(W||"Add-on removed.","success"),await y()}catch(K){n?.(String(K.message||K),"error")}finally{g(null)}},[f,y,n]),U=R(async()=>{if(f)return;g({slug:null,action:"restart"}),n?.("Restarting piclaw…","info");try{let K=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(K.error){n?.(K.error,"error"),g(null);return}n?.(K.message||"Restarting piclaw…","success"),o(!1),(async(W=30,G=2000)=>{for(let Z=0;Z<W;Z++){await new Promise((z)=>setTimeout(z,G));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await y(),g(null),n?.("Restart complete — add-ons refreshed.","success");return}}catch(z){}}g(null),n?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(t){n?.(String(t.message||t),"error"),g(null)}},[f,n,y]);if(c)return s`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!i)return s`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let H=r.toLowerCase(),P=H?i.filter((t)=>t.slug.toLowerCase().includes(H)||(t.description||"").toLowerCase().includes(H)||(t.tags||[]).some((K)=>K.toLowerCase().includes(H))):i,B=f?.slug||null,T=f?f.action==="remove"?`Removing ${f.slug}…`:f.action==="restart"?"Restarting piclaw…":`Installing ${f.slug}…`:"";return s`
        <div class=${`settings-section settings-addon-panel${f?" busy":""}`} aria-busy=${f?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${h.length<=1?s`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:s`${h.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${v.length>0&&s`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${v.length} catalog source${v.length>1?"s":""}:
                            ${v.map((t)=>s` <code style="font-size:0.82em;word-break:break-all">${t}</code>`)}
                        </div>
                    `}
                    ${h.length>1&&s`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${h.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${h.map((t)=>s`<li style="word-break:break-all"><code>${t}</code></li>`)}
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
                ${P.map((t)=>{let K=(t.skills||[]).length>0,A=t.type==="extension",W=K&&A?"extension + skill":K?"skill":"extension",G=K&&!A?"settings-tag-skill":"",Z=typeof t.homepage==="string"&&t.homepage.trim()?t.homepage.trim():"";return s`
                    <div class=${`settings-addon-card${t.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${Z?s`<a class="settings-addon-name-link" href=${Z} target="_blank" rel="noopener noreferrer">${t.slug}</a>`:s`<strong>${t.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${G}`}>${W}</span>
                            <span class="settings-addon-version">${t.installed?t.installedVersion||"?":t.version||""}</span>
                            ${t.installKind&&s`<span class="settings-tag">${t.installKind}</span>`}
                            ${t.hasUpdate&&s`<span class="settings-tag settings-tag-skill">\u2191 ${t.version}</span>`}
                            <div class="settings-addon-actions">
                                ${t.installed?s`
                                    ${t.hasUpdate&&s`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(f)} onClick=${()=>p(t.slug)}>${B===t.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(f)} onClick=${()=>V(t.slug)}>${B===t.slug?"…":"Remove"}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(f)} onClick=${()=>p(t.slug)}>${B===t.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${t.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(t.tags||[]).map((z)=>s`<span class="settings-tag">${z}</span>`)}${(t.skills||[]).map((z)=>s`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${z}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${P.length===0&&s`<p class="settings-hint">No add-ons match "${r}"</p>`}
            </div>
            ${l&&s`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(f)} onClick=${U}>Restart Now</button>
                </div>
            `}
        </div>
    `}var pu=O(()=>{m()});var Cs={};function c_(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function Or(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function As(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function Ds(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Zs(n,r,i,_){try{return En(localStorage.getItem(n),{fallback:r,min:i,max:_})}catch{return En(r,{fallback:r,min:i,max:_})}}function Ls(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function Is(){let{t:n}=e(),[r,i]=w(()=>c_("piclaw_vim_mode",!1)),[_,c]=w(()=>c_("piclaw_show_whitespace",!0)),[u,f]=w(()=>c_("piclaw_md_live_preview",!0)),[g,l]=w(()=>Zs("piclaw_editor_font_size",13,10,24)),[o,x]=w(()=>As("piclaw_editor_font_family","")),$=R((h,b,v)=>{let k=!b;v(k),Or(h,k)},[]);return s`
        <div class="settings-section">
            <h3>${n("settings.editor.heading")}</h3>
            <div class="settings-row">
                <label>${n("settings.editor.vimMode")}</label>
                <input type="checkbox" checked=${r}
                    onChange=${()=>{let h=!r;i(h),Or("piclaw_vim_mode",h)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.showWhitespace")}</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let h=!_;c(h),Or("piclaw_show_whitespace",h)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.livePreview")}</label>
                <input type="checkbox" checked=${u}
                    onChange=${()=>{let h=!u;f(h),Or("piclaw_md_live_preview",h)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontSize")}</label>
                <${rn}
                    label=${n("settings.editor.fontSizeAria")}
                    value=${g}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(h)=>{l(h),Ls("piclaw_editor_font_size",h)}}
                />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontFamily")}</label>
                <input type="text" value=${o}
                    onInput=${(h)=>{let b=h.target.value;x(b),Ds("piclaw_editor_font_family",b)}}
                    placeholder=${n("settings.editor.fontFamilyPlaceholder")} />
            </div>
            <p class="settings-hint settings-local-only-hint">${n("settings.editor.localOnlyHint")}</p>
        </div>
    `}var Ys;var Ku=O(()=>{m();fr();Sn();wn();Ys=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;Cn({id:"editor",label:"Editor",icon:Ys,component:Is,order:150})});var Es={};function u_(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function f_(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function s_(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function g_(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Os(){let[n,r]=w(()=>u_("piclaw_dev_mode",!1)),[i,_]=w(()=>s_("piclaw_addons_catalog_url","")),[c,u]=w(()=>s_("piclaw_addons_catalog_urls","")),[f,g]=w(()=>s_("piclaw_addons_repo_url","")),[l,o]=w(()=>u_("piclaw_debug_sse",!1)),[x,$]=w(()=>u_("piclaw_debug_tool_calls",!1)),h=R(()=>{let b=!n;r(b),f_("piclaw_dev_mode",b)},[n]);return s`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${n} onChange=${h} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${n&&s`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${i}
                        onInput=${(b)=>{let v=b.target.value;_(v),g_("piclaw_addons_catalog_url",v)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${c}
                        onInput=${(b)=>{let v=b.target.value;u(v),g_("piclaw_addons_catalog_urls",v)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${f}
                        onInput=${(b)=>{let v=b.target.value;g(v),g_("piclaw_addons_repo_url",v)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${l}
                        onChange=${()=>{let b=!l;o(b),f_("piclaw_debug_sse",b)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${x}
                        onChange=${()=>{let b=!x;$(b),f_("piclaw_debug_tool_calls",b)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var Js;var Bu=O(()=>{m();fr();Js=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;Cn({id:"developer",label:"Developer",icon:Js,component:Os,order:900})});var bg={};fn(bg,{openSettingsDialog:()=>xg,SettingsDialogContent:()=>dr,SettingsDialog:()=>yg});function br(n){xr.push({ts:performance.now(),label:n})}function Ss(){if(!xr.length)return;let n=xr[0].ts,r=xr.map((i)=>`+${(i.ts-n).toFixed(1)}ms ${i.label}`);console.info(`[settings-dialog perf]
`+r.join(`
`));try{window.__piclawSettingsPerfLog=r}catch(i){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:r})}).catch((i)=>{})}catch(i){}xr.length=0}function ms(n){let r=Sr.get(n);if(r)return Promise.resolve(r);let i=Jr.get(n);if(i)return i;let _=ds[n]().then((c)=>{return Sr.set(n,c),Jr.delete(n),c}).catch((c)=>{throw Jr.delete(n),c});return Jr.set(n,_),_}function Er(n="Loading…"){return s`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function dr({onClose:n}){br("SettingsDialogContent-render-start");let[r,i]=w(()=>bi()||"general"),[_,c]=w(zu),[u,f]=w(null),[g,l]=w(""),[,o]=w(0),[x,$]=w(()=>Object.fromEntries(Sr.entries())),[h,b]=w(null),[v,k]=w({compact:!1,narrow:!1}),F=C(null),y=C(null),{t:p}=e(),V=(z)=>z?.isExtension?z.label:p(`settings.section.${z.id}`),U=(z)=>z?.isExtension?z.placeholder||p("settings.filter"):p(`settings.placeholder.${z.id}`);Q(()=>{br("SettingsDialogContent-mounted"),Ss()},[]),Q(()=>{let z=(M)=>{if(M.key==="Escape")n()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[n]),Q(()=>{let z=(M)=>{let Y=typeof M?.detail?.section==="string"?M.detail.section.trim():"";if(Y)i(Y),l("")};return window.addEventListener("piclaw:open-settings",z),()=>window.removeEventListener("piclaw:open-settings",z)},[]),Q(()=>{let z=()=>o((M)=>M+1);return window.addEventListener("piclaw:settings-panes-changed",z),()=>window.removeEventListener("piclaw:settings-panes-changed",z)},[]),Q(()=>{fetch("/agent/settings-data").then((z)=>z.json()).then((z)=>{zu=z,c(z)}).catch(()=>c({}))},[]),Q(()=>{let z=y.current;if(!z)return;let M=()=>{let Y=z.clientWidth||0;k((E)=>{let cn={compact:Y>0&&Y<=860,narrow:Y>0&&Y<=720};return E.compact===cn.compact&&E.narrow===cn.narrow?E:cn})};if(M(),typeof ResizeObserver==="function"){let Y=new ResizeObserver(()=>M());return Y.observe(z),()=>Y.disconnect()}return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]);let H=[...Hu].sort((z,M)=>(z.order??500)-(M.order??500)),B=C_().map((z)=>({id:z.id,label:z.label,icon:z.icon,searchable:z.searchable||!1,placeholder:z.searchPlaceholder,order:z.order??500,isExtension:!0,component:z.component})).sort(xi),T=[...H,...B],t=T.find((z)=>z.id===r)||Hu.find((z)=>z.id===r);Q(()=>{if(t?.searchable)requestAnimationFrame(()=>F.current?.focus())},[r]),Q(()=>{if(t?.isExtension){b(null);return}let z=!1;if(x[r]){b(null);return}return b(r),ms(r).then((M)=>{if(z)return;$((Y)=>Y?.[r]?Y:{...Y||{},[r]:M})}).catch((M)=>{if(z)return;console.error(`[settings-dialog] Failed to lazy-load section "${r}".`,M)}).finally(()=>{if(!z)b((M)=>M===r?null:M)}),()=>{z=!0}},[r,t?.isExtension,x]);let K=R((z,M="info")=>{f(z?{text:z,type:M}:null)},[]),A=R((z)=>{i(z),l("");let M=es[z];if(M&&!Fu.has(z))Fu.add(z),M().then(()=>o((Y)=>Y+1)).catch((Y)=>{})},[]),W=R((z)=>{c((M)=>({...M||{},...z||{}}))},[]),G=()=>{if(t?.isExtension){if(!t.component)return Er("Loading pane…");let M=t.component;return s`<${M} filter=${g} />`}let z=x[r];if(!z||h===r)return Er(`${p("settings.loading")}`);switch(r){case"general":return s`<${z} settingsData=${_} setStatus=${K} mergeSettingsData=${W} />`;case"sessions":return s`<${z} settingsData=${_} setStatus=${K} mergeSettingsData=${W} />`;case"recordings":return s`<${z} filter=${g} setStatus=${K} />`;case"compaction":return s`<${z} settingsData=${_} setStatus=${K} mergeSettingsData=${W} />`;case"keyboard":return s`<${z} filter=${g} setStatus=${K} />`;case"workspace":return s`<${z} settingsData=${_} setStatus=${K} mergeSettingsData=${W} />`;case"environment":return s`<${z} settingsData=${_} filter=${g} setStatus=${K} mergeSettingsData=${W} />`;case"providers":return s`<${z} providers=${_?.providers} setStatus=${K} />`;case"models":return s`<${z} filter=${g} />`;case"theme":return s`<${z} themes=${_?.themes} colorKeys=${_?.colorKeys} settingsData=${_} setStatus=${K} mergeSettingsData=${W} />`;case"scheduled-tasks":return s`<${z} filter=${g} setStatus=${K} />`;case"quick-actions":return s`<${z} filter=${g} setStatus=${K} mergeSettingsData=${W} />`;case"keychain":return s`<${z} filter=${g} />`;case"tools":return s`<${z} toolsets=${_?.toolsets} filter=${g} settingsData=${_} mergeSettingsData=${W} />`;case"addons":return s`<${z} setStatus=${K} filter=${g} />`;default:return Er(p("settings.loading"))}},Z=!t;return br("SettingsDialogContent-render-end"),s`
        <div class="settings-dialog-backdrop" onClick=${(z)=>{if(z.target===z.currentTarget)n()}}>
            <div ref=${y} data-testid="settings-dialog" class=${`settings-dialog${v.compact?" settings-dialog-compact":""}${v.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">${p("settings.title")}</span>
                    ${t?.searchable&&s`
                        <input ref=${F} type="text" class="settings-header-filter"
                            placeholder=${U(t)}
                            value=${g} onInput=${(z)=>l(z.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title=${p("settings.close")}>✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${T.map((z,M)=>{let Y=M>0&&!T[M-1].isExtension,E=z.isExtension&&Y;return s`
                                ${E&&s`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${z.id===r?"active":""}`} onClick=${()=>A(z.id)}>
                                    <span class="settings-nav-icon">${z.icon}</span>
                                    <span class="settings-nav-label">${V(z)}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${Z?Er(p("settings.loading")):G()}
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
    `}function yg(){let[n,r]=w(!1);if(Q(()=>{let i=(c)=>{let u=Gr(c?.detail?.section);if(u)try{window.__piclawSettingsRequestedSection=u}catch(f){}r(!0)};window.addEventListener("piclaw:open-settings",i);let _=J_();if(_.open){if(_.section)try{window.__piclawSettingsRequestedSection=_.section}catch(c){}r(!0)}return()=>window.removeEventListener("piclaw:open-settings",i)},[]),!n)return null;return s`<${I_} className="settings-portal"><${dr} onClose=${()=>r(!1)} /><//>`}function xg(n={}){O_(n)}var xr,zu=null,Sr,Jr,ds,es,Fu,as,ng,rg,ig,_g,cg,ug,fg,sg,gg,og,lg,$g,wg,tg,Hu;var Wu=O(()=>{m();wn();Y_();fr();yc();xr=[];br("module-eval-start");br("imports-done");Sr=new Map,Jr=new Map;Sr.set("general",Mi);ds={general:()=>Promise.resolve(Mi),sessions:()=>Promise.resolve().then(() => (hc(),bc)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => (kc(),vc)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (Kc(),pc)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (Uc(),Rc)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (qc(),Mc)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (Dc(),Ac)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (Lc(),Zc)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Yc(),Ic)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (_u(),iu)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (fu(),uu)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (yu(),tu)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (bu(),xu)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (vu(),hu)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (pu(),ku)).then((n)=>n.AddonsSection)},es={"editor-settings":()=>Promise.resolve().then(() => (Ku(),Cs)).then(()=>{}),developer:()=>Promise.resolve().then(() => (Bu(),Es)).then(()=>{})},Fu=new Set;as=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,ng=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,rg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,ig=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,_g=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,cg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,ug=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,fg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,sg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,gg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,og=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,lg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,$g=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,wg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,tg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,Hu=[{id:"general",label:"General",icon:as,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:ng,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:rg,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:ig,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:ug,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:_g,searchable:!1,order:15},{id:"environment",label:"Environment",icon:cg,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:fg,searchable:!1,order:20},{id:"models",label:"Models",icon:sg,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:gg,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:og,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:$g,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:wg,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:lg,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:tg,searchable:!0,placeholder:"Filter add-ons…",order:90}]});m();Wu();fr();var hg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function vg({label:n,body:r,filter:i=""}){return s`
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
  `}function kg(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let r of n)Cn({id:r.id,label:r.label,icon:hg,searchable:!0,searchPlaceholder:`Filter ${r.label} settings…`,order:r.id==="fixture-z-observability"?1:999,component:(i)=>s`<${vg} label=${r.label} body=${r.body} filter=${i?.filter||""} />`})}var hn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},pg={current:hn.current,models:hn.models,model_options:hn.model_options,thinking_level:hn.thinking_level,supports_thinking:hn.supports_thinking,available_thinking_levels:hn.available_thinking_levels},ju={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},Ru={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},rr=new URLSearchParams(window.location.search).get("real")!=="1",Uu=window.fetch.bind(window);function xn(n,r=200){return new Response(JSON.stringify(n),{status:r,headers:{"Content-Type":"application/json"}})}function Kg(){window.fetch=async(n,r)=>{let i=new URL(typeof n==="string"?n:n.url,window.location.href),_=String(r?.method||"GET").toUpperCase();if(!rr)return Uu(n,r);if(i.pathname==="/agent/settings-data")return xn(hn);if(i.pathname==="/agent/models")return xn(pg);if(i.pathname==="/agent/addons")return xn(ju);if(i.pathname.startsWith("/agent/addons/"))return xn({ok:!0,message:"Fixture add-on action accepted.",...ju});if(i.pathname==="/agent/keychain"){if(_==="GET")return xn(Ru);if(_==="POST")return xn({ok:!0,...Ru})}if(i.pathname==="/agent/settings/general")return xn({ok:!0,settings:hn});if(i.pathname==="/agent/settings/widget-token/regenerate")return xn({ok:!0,settings:{...hn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(i.pathname.startsWith("/agent/default/message"))return xn({command:{status:"success",message:"Fixture command accepted."}});if(i.pathname.startsWith("/agent/settings/"))return xn({ok:!0,settings:hn,items:[],entries:[]});if(i.pathname==="/agent/client-perf")return xn({ok:!0});return Uu(n,r)}}function Bg(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function Tu(n){try{window.__piclawSettingsRequestedSection=n}catch(r){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function zg(){let n=new URLSearchParams(window.location.search),[r,i]=w(n.get("section")||"general"),[_,c]=w(Number(n.get("width")||900)),[u,f]=w(Number(n.get("height")||640)),[g,l]=w(rr),[o,x]=w(0),$=I(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),h=R((v)=>{i(v),Tu(v)},[]),b=R(()=>{rr=!rr,l(rr),x((v)=>v+1)},[]);return s`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${r} onChange=${(v)=>h(v.target.value)}>${$.map((v)=>s`<option value=${v}>${v}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${_} onInput=${(v)=>c(Number(v.target.value))} /> ${_}px</label>
        <label>Height <input type="range" min="420" max="900" value=${u} onInput=${(v)=>f(Number(v.target.value))} /> ${u}px</label>
        <button type="button" onClick=${b}>${g?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>x((v)=>v+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${_}px;--fixture-height:${u}px;`}>
        <${dr} key=${o} onClose=${()=>{}} />
      </div>
    </div>
  `}function Fg(){kg(),Kg(),Bg();let n=new URLSearchParams(window.location.search);Tu(n.get("section")||"general");let r=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));r.id="settings-widget-fixture-root",Ln(s`<${zg} />`,r),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:rr})}Fg();

//# debugId=27D83ECC5C6AD5F964756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
