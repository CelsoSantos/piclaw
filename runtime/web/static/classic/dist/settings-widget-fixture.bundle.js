var Tu=Object.defineProperty;var Gu=(n)=>n;function Vu(n,r){this[n]=Gu.bind(null,r)}var un=(n,r)=>{for(var i in r)Tu(n,i,{get:r[i],enumerable:!0,configurable:!0,set:Vu.bind(r,i)})};var J=(n,r)=>()=>(n&&(r=n(n=0)),r);var Eu={};un(Eu,{useState:()=>w,useRef:()=>C,useReducer:()=>N_,useMemo:()=>D,useLayoutEffect:()=>kr,useImperativeHandle:()=>Iu,useErrorBoundary:()=>Yu,useEffect:()=>P,useDebugValue:()=>Du,useContext:()=>Lu,useCallback:()=>H,render:()=>Zn,html:()=>l,h:()=>ui,createContext:()=>Zu,Component:()=>ir});function bn(n,r){for(var i in r)n[i]=r[i];return n}function ci(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function ui(n,r,i){var _,c,u,f={};for(u in r)u=="key"?_=r[u]:u=="ref"?c=r[u]:f[u]=r[u];if(arguments.length>2&&(f.children=arguments.length>3?Fr.call(arguments,2):i),typeof n=="function"&&n.defaultProps!=null)for(u in n.defaultProps)f[u]===void 0&&(f[u]=n.defaultProps[u]);return vr(n,f,_,c,null)}function vr(n,r,i,_,c){var u={type:n,props:r,key:i,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c==null?++z_:c,__i:-1,__u:0};return c==null&&S.vnode!=null&&S.vnode(u),u}function jr(n){return n.children}function ir(n,r){this.props=n,this.context=r}function qn(n,r){if(r==null)return n.__?qn(n.__,n.__i+1):null;for(var i;r<n.__k.length;r++)if((i=n.__k[r])!=null&&i.__e!=null)return i.__e;return typeof n.type=="function"?qn(n):null}function Pu(n){if(n.__P&&n.__d){var r=n.__v,i=r.__e,_=[],c=[],u=bn({},r);u.__v=r.__v+1,S.vnode&&S.vnode(u),fi(n.__P,u,r,n.__n,n.__P.namespaceURI,32&r.__u?[i]:null,_,i==null?qn(r):i,!!(32&r.__u),c),u.__v=r.__v,u.__.__k[u.__i]=u,U_(_,u,c),r.__e=r.__=null,u.__e!=i&&k_(u)}}function k_(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(r){if(r!=null&&r.__e!=null)return n.__e=n.__c.base=r.__e}),k_(n)}function ni(n){(!n.__d&&(n.__d=!0)&&Wn.push(n)&&!Br.__r++||o_!=S.debounceRendering)&&((o_=S.debounceRendering)||B_)(Br)}function Br(){try{for(var n,r=1;Wn.length;)Wn.length>r&&Wn.sort(F_),n=Wn.shift(),r=Wn.length,Pu(n)}finally{Wn.length=Br.__r=0}}function R_(n,r,i,_,c,u,f,s,o,$,b){var g,v,t,h,p,x,K,W=_&&_.__k||zr,T=r.length;for(o=Qu(i,r,W,o,T),g=0;g<T;g++)(t=i.__k[g])!=null&&(v=t.__i!=-1&&W[t.__i]||pr,t.__i=g,x=fi(n,t,v,c,u,f,s,o,$,b),h=t.__e,t.ref&&v.ref!=t.ref&&(v.ref&&li(v.ref,null,t),b.push(t.ref,t.__c||h,t)),p==null&&h!=null&&(p=h),(K=!!(4&t.__u))||v.__k===t.__k?(o=H_(t,o,n,K),K&&v.__e&&(v.__e=null)):typeof t.type=="function"&&x!==void 0?o=x:h&&(o=h.nextSibling),t.__u&=-7);return i.__e=p,o}function Qu(n,r,i,_,c){var u,f,s,o,$,b=i.length,g=b,v=0;for(n.__k=Array(c),u=0;u<c;u++)(f=r[u])!=null&&typeof f!="boolean"&&typeof f!="function"?(typeof f=="string"||typeof f=="number"||typeof f=="bigint"||f.constructor==String?f=n.__k[u]=vr(null,f,null,null,null):Wr(f)?f=n.__k[u]=vr(jr,{children:f},null,null,null):f.constructor===void 0&&f.__b>0?f=n.__k[u]=vr(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):n.__k[u]=f,o=u+v,f.__=n,f.__b=n.__b+1,s=null,($=f.__i=Mu(f,i,o,g))!=-1&&(g--,(s=i[$])&&(s.__u|=2)),s==null||s.__v==null?($==-1&&(c>b?v--:c<b&&v++),typeof f.type!="function"&&(f.__u|=4)):$!=o&&($==o-1?v--:$==o+1?v++:($>o?v--:v++,f.__u|=4))):n.__k[u]=null;if(g)for(u=0;u<b;u++)(s=i[u])!=null&&(2&s.__u)==0&&(s.__e==_&&(_=qn(s)),G_(s,s));return _}function H_(n,r,i,_){var c,u;if(typeof n.type=="function"){for(c=n.__k,u=0;c&&u<c.length;u++)c[u]&&(c[u].__=n,r=H_(c[u],r,i,_));return r}n.__e!=r&&(_&&(r&&n.type&&!r.parentNode&&(r=qn(n)),i.insertBefore(n.__e,r||null)),r=n.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function Mu(n,r,i,_){var c,u,f,s=n.key,o=n.type,$=r[i],b=$!=null&&(2&$.__u)==0;if($===null&&s==null||b&&s==$.key&&o==$.type)return i;if(_>(b?1:0)){for(c=i-1,u=i+1;c>=0||u<r.length;)if(($=r[f=c>=0?c--:u++])!=null&&(2&$.__u)==0&&s==$.key&&o==$.type)return f}return-1}function g_(n,r,i){r[0]=="-"?n.setProperty(r,i==null?"":i):n[r]=i==null?"":typeof i!="number"||Xu.test(r)?i:i+"px"}function hr(n,r,i,_,c){var u,f;n:if(r=="style")if(typeof i=="string")n.style.cssText=i;else{if(typeof _=="string"&&(n.style.cssText=_=""),_)for(r in _)i&&r in i||g_(n.style,r,"");if(i)for(r in i)_&&i[r]==_[r]||g_(n.style,r,i[r])}else if(r[0]=="o"&&r[1]=="n")u=r!=(r=r.replace(W_,"$1")),f=r.toLowerCase(),r=f in n||r=="onFocusOut"||r=="onFocusIn"?f.slice(2):r.slice(2),n.l||(n.l={}),n.l[r+u]=i,i?_?i[rr]=_[rr]:(i[rr]=_i,n.addEventListener(r,u?ar:mr,u)):n.removeEventListener(r,u?ar:mr,u);else{if(c=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in n)try{n[r]=i==null?"":i;break n}catch(s){}typeof i=="function"||(i==null||i===!1&&r[4]!="-"?n.removeAttribute(r):n.setAttribute(r,r=="popover"&&i==1?"":i))}}function $_(n){return function(r){if(this.l){var i=this.l[r.type+n];if(r[br]==null)r[br]=_i++;else if(r[br]<i[rr])return;return i(S.event?S.event(r):r)}}}function fi(n,r,i,_,c,u,f,s,o,$){var b,g,v,t,h,p,x,K,W,T,F,U,z,G,Q,y=r.type;if(r.constructor!==void 0)return null;128&i.__u&&(o=!!(32&i.__u),u=[s=r.__e=i.__e]),(b=S.__b)&&b(r);n:if(typeof y=="function")try{if(K=r.props,W=y.prototype&&y.prototype.render,T=(b=y.contextType)&&_[b.__c],F=b?T?T.props.value:b.__:_,i.__c?x=(g=r.__c=i.__c).__=g.__E:(W?r.__c=g=new y(K,F):(r.__c=g=new ir(K,F),g.constructor=y,g.render=Au),T&&T.sub(g),g.state||(g.state={}),g.__n=_,v=g.__d=!0,g.__h=[],g._sb=[]),W&&g.__s==null&&(g.__s=g.state),W&&y.getDerivedStateFromProps!=null&&(g.__s==g.state&&(g.__s=bn({},g.__s)),bn(g.__s,y.getDerivedStateFromProps(K,g.__s))),t=g.props,h=g.state,g.__v=r,v)W&&y.getDerivedStateFromProps==null&&g.componentWillMount!=null&&g.componentWillMount(),W&&g.componentDidMount!=null&&g.__h.push(g.componentDidMount);else{if(W&&y.getDerivedStateFromProps==null&&K!==t&&g.componentWillReceiveProps!=null&&g.componentWillReceiveProps(K,F),r.__v==i.__v||!g.__e&&g.shouldComponentUpdate!=null&&g.shouldComponentUpdate(K,g.__s,F)===!1){r.__v!=i.__v&&(g.props=K,g.state=g.__s,g.__d=!1),r.__e=i.__e,r.__k=i.__k,r.__k.some(function(k){k&&(k.__=r)}),zr.push.apply(g.__h,g._sb),g._sb=[],g.__h.length&&f.push(g);break n}g.componentWillUpdate!=null&&g.componentWillUpdate(K,g.__s,F),W&&g.componentDidUpdate!=null&&g.__h.push(function(){g.componentDidUpdate(t,h,p)})}if(g.context=F,g.props=K,g.__P=n,g.__e=!1,U=S.__r,z=0,W)g.state=g.__s,g.__d=!1,U&&U(r),b=g.render(g.props,g.state,g.context),zr.push.apply(g.__h,g._sb),g._sb=[];else do g.__d=!1,U&&U(r),b=g.render(g.props,g.state,g.context),g.state=g.__s;while(g.__d&&++z<25);g.state=g.__s,g.getChildContext!=null&&(_=bn(bn({},_),g.getChildContext())),W&&!v&&g.getSnapshotBeforeUpdate!=null&&(p=g.getSnapshotBeforeUpdate(t,h)),G=b!=null&&b.type===jr&&b.key==null?T_(b.props.children):b,s=R_(n,Wr(G)?G:[G],r,i,_,c,u,f,s,o,$),g.base=r.__e,r.__u&=-161,g.__h.length&&f.push(g),x&&(g.__E=g.__=null)}catch(k){if(r.__v=null,o||u!=null)if(k.then){for(r.__u|=o?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;u[u.indexOf(s)]=null,r.__e=s}else{for(Q=u.length;Q--;)ci(u[Q]);ri(r)}else r.__e=i.__e,r.__k=i.__k,k.then||ri(r);S.__e(k,r,i)}else u==null&&r.__v==i.__v?(r.__k=i.__k,r.__e=i.__e):s=r.__e=qu(i.__e,r,i,_,c,u,f,o,$);return(b=S.diffed)&&b(r),128&r.__u?void 0:s}function ri(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(ri))}function U_(n,r,i){for(var _=0;_<i.length;_++)li(i[_],i[++_],i[++_]);S.__c&&S.__c(r,n),n.some(function(c){try{n=c.__h,c.__h=[],n.some(function(u){u.call(c)})}catch(u){S.__e(u,c.__v)}})}function T_(n){return typeof n!="object"||n==null||n.__b>0?n:Wr(n)?n.map(T_):n.constructor!==void 0?null:bn({},n)}function qu(n,r,i,_,c,u,f,s,o){var $,b,g,v,t,h,p,x=i.props||pr,K=r.props,W=r.type;if(W=="svg"?c="http://www.w3.org/2000/svg":W=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),u!=null){for($=0;$<u.length;$++)if((t=u[$])&&"setAttribute"in t==!!W&&(W?t.localName==W:t.nodeType==3)){n=t,u[$]=null;break}}if(n==null){if(W==null)return document.createTextNode(K);n=document.createElementNS(c,W,K.is&&K),s&&(S.__m&&S.__m(r,u),s=!1),u=null}if(W==null)x===K||s&&n.data==K||(n.data=K);else{if(u=W=="textarea"&&K.defaultValue!=null?null:u&&Fr.call(n.childNodes),!s&&u!=null)for(x={},$=0;$<n.attributes.length;$++)x[(t=n.attributes[$]).name]=t.value;for($ in x)t=x[$],$=="dangerouslySetInnerHTML"?g=t:$=="children"||($ in K)||$=="value"&&("defaultValue"in K)||$=="checked"&&("defaultChecked"in K)||hr(n,$,null,t,c);for($ in K)t=K[$],$=="children"?v=t:$=="dangerouslySetInnerHTML"?b=t:$=="value"?h=t:$=="checked"?p=t:s&&typeof t!="function"||x[$]===t||hr(n,$,t,x[$],c);if(b)s||g&&(b.__html==g.__html||b.__html==n.innerHTML)||(n.innerHTML=b.__html),r.__k=[];else if(g&&(n.innerHTML=""),R_(r.type=="template"?n.content:n,Wr(v)?v:[v],r,i,_,W=="foreignObject"?"http://www.w3.org/1999/xhtml":c,u,f,u?u[0]:i.__k&&qn(i,0),s,o),u!=null)for($=u.length;$--;)ci(u[$]);s&&W!="textarea"||($="value",W=="progress"&&h==null?n.removeAttribute("value"):h!=null&&(h!==n[$]||W=="progress"&&!h||W=="option"&&h!=x[$])&&hr(n,$,h,x[$],c),$="checked",p!=null&&p!=n[$]&&hr(n,$,p,x[$],c))}return n}function li(n,r,i){try{if(typeof n=="function"){var _=typeof n.__u=="function";_&&n.__u(),_&&r==null||(n.__u=n(r))}else n.current=r}catch(c){S.__e(c,i)}}function G_(n,r,i){var _,c;if(S.unmount&&S.unmount(n),(_=n.ref)&&(_.current&&_.current!=n.__e||li(_,null,r)),(_=n.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(u){S.__e(u,r)}_.base=_.__P=null}if(_=n.__k)for(c=0;c<_.length;c++)_[c]&&G_(_[c],r,i||typeof n.type!="function");i||ci(n.__e),n.__c=n.__=n.__e=void 0}function Au(n,r,i){return this.constructor(n,i)}function Zn(n,r,i){var _,c,u,f;r==document&&(r=document.documentElement),S.__&&S.__(n,r),c=(_=typeof i=="function")?null:i&&i.__k||r.__k,u=[],f=[],fi(r,n=(!_&&i||r).__k=ui(jr,null,[n]),c||pr,pr,r.namespaceURI,!_&&i?[i]:c?null:r.firstChild?Fr.call(r.childNodes):null,u,!_&&i?i:c?c.__e:r.firstChild,_,f),U_(u,n,f)}function Zu(n){function r(i){var _,c;return this.getChildContext||(_=new Set,(c={})[r.__c]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){_=null},this.shouldComponentUpdate=function(u){this.props.value!=u.value&&_.forEach(function(f){f.__e=!0,ni(f)})},this.sub=function(u){_.add(u);var f=u.componentWillUnmount;u.componentWillUnmount=function(){_&&_.delete(u),f&&f.call(u)}}),i.children}return r.__c="__cC"+j_++,r.__=n,r.Provider=r.__l=(r.Consumer=function(i,_){return i.children(_)}).contextType=r,r}function In(n,r){a.__h&&a.__h(d,n,An||r),An=0;var i=d.__H||(d.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function w(n){return An=1,N_(X_,n)}function N_(n,r,i){var _=In(jn++,2);if(_.t=n,!_.__c&&(_.__=[i?i(r):X_(void 0,r),function(s){var o=_.__N?_.__N[0]:_.__[0],$=_.t(o,s);o!==$&&(_.__N=[$,_.__[1]],_.__c.setState({}))}],_.__c=d,!d.__f)){var c=function(s,o,$){if(!_.__c.__H)return!0;var b=_.__c.__H.__.filter(function(v){return v.__c});if(b.every(function(v){return!v.__N}))return!u||u.call(this,s,o,$);var g=_.__c.props!==s;return b.some(function(v){if(v.__N){var t=v.__[0];v.__=v.__N,v.__N=void 0,t!==v.__[0]&&(g=!0)}}),u&&u.call(this,s,o,$)||g};d.__f=!0;var{shouldComponentUpdate:u,componentWillUpdate:f}=d;d.componentWillUpdate=function(s,o,$){if(this.__e){var b=u;u=void 0,c(s,o,$),u=b}f&&f.call(this,s,o,$)},d.shouldComponentUpdate=c}return _.__N||_.__}function P(n,r){var i=In(jn++,3);!a.__s&&si(i.__H,r)&&(i.__=n,i.u=r,d.__H.__h.push(i))}function kr(n,r){var i=In(jn++,4);!a.__s&&si(i.__H,r)&&(i.__=n,i.u=r,d.__h.push(i))}function C(n){return An=5,D(function(){return{current:n}},[])}function Iu(n,r,i){An=6,kr(function(){if(typeof n=="function"){var _=n(r());return function(){n(null),_&&typeof _=="function"&&_()}}if(n)return n.current=r(),function(){return n.current=null}},i==null?i:i.concat(n))}function D(n,r){var i=In(jn++,7);return si(i.__H,r)&&(i.__=n(),i.__H=r,i.__h=n),i.__}function H(n,r){return An=8,D(function(){return n},r)}function Lu(n){var r=d.context[n.__c],i=In(jn++,9);return i.c=n,r?(i.__==null&&(i.__=!0,r.sub(d)),r.props.value):n.__}function Du(n,r){a.useDebugValue&&a.useDebugValue(r?r(n):n)}function Yu(n){var r=In(jn++,10),i=w();return r.__=n,d.componentDidCatch||(d.componentDidCatch=function(_,c){r.__&&r.__(_,c),i[1](_)}),[i[0],function(){i[1](void 0)}]}function Cu(){for(var n;n=V_.shift();){var r=n.__H;if(n.__P&&r)try{r.__h.some(Kr),r.__h.some(ii),r.__h=[]}catch(i){r.__h=[],a.__e(i,n.__v)}}}function Ju(n){var r,i=function(){clearTimeout(_),K_&&cancelAnimationFrame(r),setTimeout(n)},_=setTimeout(i,35);K_&&(r=requestAnimationFrame(i))}function Kr(n){var r=d,i=n.__c;typeof i=="function"&&(n.__c=void 0,i()),d=r}function ii(n){var r=d;n.__c=n.__(),d=r}function si(n,r){return!n||n.length!==r.length||r.some(function(i,_){return i!==n[_]})}function X_(n,r){return typeof r=="function"?r(n):r}function Ou(n){var r=p_.get(this);return r||(r=new Map,p_.set(this,r)),(r=P_(this,r.get(n)||(r.set(n,r=function(i){for(var _,c,u=1,f="",s="",o=[0],$=function(v){u===1&&(v||(f=f.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(0,v,f):u===3&&(v||f)?(o.push(3,v,f),u=2):u===2&&f==="..."&&v?o.push(4,v,0):u===2&&f&&!v?o.push(5,0,!0,f):u>=5&&((f||!v&&u===5)&&(o.push(u,0,f,c),u=6),v&&(o.push(u,v,0,c),u=6)),f=""},b=0;b<i.length;b++){b&&(u===1&&$(),$(b));for(var g=0;g<i[b].length;g++)_=i[b][g],u===1?_==="<"?($(),o=[o],u=3):f+=_:u===4?f==="--"&&_===">"?(u=1,f=""):f=_+f[0]:s?_===s?s="":f+=_:_==='"'||_==="'"?s=_:_===">"?($(),u=1):u&&(_==="="?(u=5,c=f,f=""):_==="/"&&(u<5||i[b][g+1]===">")?($(),u===3&&(o=o[0]),u=o,(o=o[0]).push(2,0,u),u=0):_===" "||_==="\t"||_===`
`||_==="\r"?($(),u=2):f+=_),u===3&&f==="!--"&&(u=4,o=o[0])}return $(),o}(n)),r),arguments,[])).length>1?r:r[0]}var Fr,S,z_,Nu,Wn,o_,B_,F_,Sr,br,rr,W_,_i,mr,ar,j_,pr,zr,Xu,Wr,jn,d,er,w_,An=0,V_,a,y_,x_,t_,h_,b_,v_,K_,P_=function(n,r,i,_){var c;r[0]=0;for(var u=1;u<r.length;u++){var f=r[u++],s=r[u]?(r[0]|=f?1:2,i[r[u++]]):r[++u];f===3?_[0]=s:f===4?_[1]=Object.assign(_[1]||{},s):f===5?(_[1]=_[1]||{})[r[++u]]=s:f===6?_[1][r[++u]]+=s+"":f?(c=n.apply(s,P_(n,s,i,["",null])),_.push(c),s[0]?r[0]|=2:(r[u-2]=0,r[u]=c)):_.push(s)}return _},p_,l;var e=J(()=>{pr={},zr=[],Xu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Wr=Array.isArray;Fr=zr.slice,S={__e:function(n,r,i,_){for(var c,u,f;r=r.__;)if((c=r.__c)&&!c.__)try{if((u=c.constructor)&&u.getDerivedStateFromError!=null&&(c.setState(u.getDerivedStateFromError(n)),f=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(n,_||{}),f=c.__d),f)return c.__E=c}catch(s){n=s}throw n}},z_=0,Nu=function(n){return n!=null&&n.constructor===void 0},ir.prototype.setState=function(n,r){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=bn({},this.state),typeof n=="function"&&(n=n(bn({},i),this.props)),n&&bn(i,n),n!=null&&this.__v&&(r&&this._sb.push(r),ni(this))},ir.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ni(this))},ir.prototype.render=jr,Wn=[],B_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F_=function(n,r){return n.__v.__b-r.__v.__b},Br.__r=0,Sr=Math.random().toString(8),br="__d"+Sr,rr="__a"+Sr,W_=/(PointerCapture)$|Capture$/i,_i=0,mr=$_(!1),ar=$_(!0),j_=0;V_=[],a=S,y_=a.__b,x_=a.__r,t_=a.diffed,h_=a.__c,b_=a.unmount,v_=a.__;a.__b=function(n){d=null,y_&&y_(n)},a.__=function(n,r){n&&r.__k&&r.__k.__m&&(n.__m=r.__k.__m),v_&&v_(n,r)},a.__r=function(n){x_&&x_(n),jn=0;var r=(d=n.__c).__H;r&&(er===d?(r.__h=[],d.__h=[],r.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(r.__h.some(Kr),r.__h.some(ii),r.__h=[],jn=0)),er=d},a.diffed=function(n){t_&&t_(n);var r=n.__c;r&&r.__H&&(r.__H.__h.length&&(V_.push(r)!==1&&w_===a.requestAnimationFrame||((w_=a.requestAnimationFrame)||Ju)(Cu)),r.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),er=d=null},a.__c=function(n,r){r.some(function(i){try{i.__h.some(Kr),i.__h=i.__h.filter(function(_){return!_.__||ii(_)})}catch(_){r.some(function(c){c.__h&&(c.__h=[])}),r=[],a.__e(_,i.__v)}}),h_&&h_(n,r)},a.unmount=function(n){b_&&b_(n);var r,i=n.__c;i&&i.__H&&(i.__H.__.some(function(_){try{Kr(_)}catch(c){r=c}}),i.__H=void 0,r&&a.__e(r,i.__v))};K_=typeof requestAnimationFrame=="function";p_=new Map;l=Ou.bind(ui)});function kn(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function ln(n,r){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,r)}catch{return}}function oi(n,r=!1){let i=kn(n);if(i===null)return r;return i==="true"}function gi(n,r=null){let i=kn(n);if(i===null)return r;let _=parseInt(i,10);return Number.isFinite(_)?_:r}function Q_(n){let r=kn(n);if(!r)return null;try{return JSON.parse(r)}catch{return null}}function Hr(n){let r=String(n??"").trim().toLowerCase().replace(/_/g,"-");if(!r)return Ln;if(r==="zh-cn"||r==="zh"||r==="zh-hans"||r.startsWith("zh-hans"))return"zh-CN";if(r==="ja"||r.startsWith("ja-"))return"ja";if(r==="en"||r.startsWith("en-"))return"en";return Ln}function mu(){if(typeof navigator>"u")return Ln;let n=[...Array.isArray(navigator.languages)?navigator.languages:[],navigator.language].filter((r)=>typeof r==="string"&&r.length>0);for(let r of n){let i=Hr(r);if(i!==Ln)return i}return Ln}function au(){let n=kn(A_);if(n)return Hr(n);return mu()}function nf(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent($i,{detail:{locale:n}}))}function Rr(){if(!wi)rf();return Un}function rf(){return Un=au(),wi=!0,Un}function _f(n,r={}){let i=Hr(n);if(wi=!0,i===Un&&r.persist===!1)return Un;if(Un=i,r.persist!==!1)ln(A_,i);return nf(i),Un}function cf(n,r){if(!r)return n;return n.replace(/\{(\w+)\}/g,(i,_)=>{let c=r[_];return c===void 0||c===null?i:String(c)})}function uf(n,r,i=Rr()){let c=eu[i]?.[n]??Z_[n]??n;return cf(c,r)}function ff(){let[n,r]=w(Rr());return P(()=>{if(typeof window>"u")return;let i=(_)=>{let c=_.detail,u=Hr(c?.locale??Rr());r(u)};return window.addEventListener($i,i),r(Rr()),()=>window.removeEventListener($i,i)},[]),[n,(i)=>_f(i)]}function Ur(){let[n,r]=ff();return{locale:n,setLocale:r,t:(i,_)=>uf(i,_,n)}}var Ln="en",M_,q_,A_="piclaw_locale",$i="piclaw-locale-change",Z_,du,Su,eu,Un,wi=!1;var yi=J(()=>{e();M_=["en","zh-CN","ja"],q_={en:"English","zh-CN":"简体中文",ja:"日本語"},Z_={"compose.placeholder":"Message (Enter to send, Shift+Enter for newline)...","compose.send":"Send","compose.stop":"Stop","compose.searchPlaceholder":"Search (Enter to run)...","compose.clearAll":"Clear all","compose.clearAllTitle":"Clear all attachments and references","compose.scope":"Scope","compose.searchScope":"Search scope","compose.scopeCurrent":"Current","compose.scopeBranchFamily":"Branch family","compose.scopeAll":"All chats","compose.filterImages":"Images","compose.filterAttachments":"Attachments","compose.search":"Search","compose.closeSearch":"Close search","compose.shareLocation":"Share location","compose.attachFile":"Attach file","workspace.title":"Workspace","workspace.newFile":"New file","workspace.refresh":"Refresh","workspace.actions":"Workspace actions","workspace.uploadFiles":"Upload files","workspace.reindexing":"Reindexing workspace…","workspace.deleteFile":"Delete file","workspace.download":"Download","workspace.uploadToFolder":"Upload files to this folder","workspace.addFolderHint":"Add folder hint to compose","workspace.downloadZip":"Download folder as zip","workspace.openInTab":"Open in tab","workspace.openInEditor":"Open in editor","workspace.renameSelected":"Rename selected","workspace.downloadSelectedFile":"Download selected file","workspace.downloadSelectedFolder":"Download selected folder (zip)","workspace.deleteSelectedFile":"Delete selected file","shell.settings":"Settings","shell.newChat":"New chat","shell.connecting":"Connecting…","shell.connected":"Connected","language.label":"Language","settings.title":"Settings","settings.close":"Close (Esc)","settings.filter":"Filter…","settings.loading":"Loading settings…","settings.section.general":"General","settings.section.sessions":"Sessions","settings.section.recordings":"Recordings","settings.section.compaction":"Compaction","settings.section.keyboard":"Keyboard","settings.section.workspace":"Workspace","settings.section.environment":"Environment","settings.section.providers":"Providers","settings.section.models":"Models","settings.section.theme":"Appearance","settings.section.scheduled-tasks":"Scheduled Tasks","settings.section.quick-actions":"Quick Actions","settings.section.keychain":"Keychain","settings.section.tools":"Tools","settings.section.addons":"Add-ons","settings.placeholder.recordings":"Filter recordings…","settings.placeholder.keyboard":"Filter shortcuts…","settings.placeholder.environment":"Filter environment…","settings.placeholder.models":"Filter models…","settings.placeholder.scheduled-tasks":"Filter scheduled tasks…","settings.placeholder.quick-actions":"Filter quick actions…","settings.placeholder.keychain":"Filter entries…","settings.placeholder.tools":"Filter tools…","settings.placeholder.addons":"Filter add-ons…","menu.title":"Menu","menu.showWorkspace":"Show workspace","menu.hideWorkspace":"Hide workspace","menu.openExplorer":"Open explorer","menu.chatOnly":"Chat-only mode","menu.exitChatOnly":"Exit chat-only mode","menu.openTerminal":"Open terminal in tab","menu.openVnc":"Open VNC in tab","menu.newFile":"New file","menu.openRecent":"Open Recent","menu.refreshTree":"Refresh tree","menu.reindex":"Reindex workspace","menu.showHidden":"Show hidden files","menu.hideHidden":"Hide hidden files","menu.scale":"Scale","menu.settings":"Settings"},du={"compose.placeholder":"输入消息（回车发送，Shift+回车换行）...","compose.send":"发送","compose.stop":"停止","compose.searchPlaceholder":"搜索（回车运行）...","compose.clearAll":"清除全部","compose.clearAllTitle":"清除所有附件和引用","compose.scope":"范围","compose.searchScope":"搜索范围","compose.scopeCurrent":"当前","compose.scopeBranchFamily":"分支系列","compose.scopeAll":"所有聊天","compose.filterImages":"图片","compose.filterAttachments":"附件","compose.search":"搜索","compose.closeSearch":"关闭搜索","compose.shareLocation":"分享位置","compose.attachFile":"附加文件","workspace.title":"工作区","workspace.newFile":"新建文件","workspace.refresh":"刷新","workspace.actions":"工作区操作","workspace.uploadFiles":"上传文件","workspace.reindexing":"正在重建索引…","workspace.deleteFile":"删除文件","workspace.download":"下载","workspace.uploadToFolder":"上传文件到此文件夹","workspace.addFolderHint":"将文件夹提示添加到输入框","workspace.downloadZip":"将文件夹下载为 zip","workspace.openInTab":"在标签页打开","workspace.openInEditor":"在编辑器打开","workspace.renameSelected":"重命名所选","workspace.downloadSelectedFile":"下载所选文件","workspace.downloadSelectedFolder":"下载所选文件夹（zip）","workspace.deleteSelectedFile":"删除所选文件","shell.settings":"设置","shell.newChat":"新建对话","shell.connecting":"连接中…","shell.connected":"已连接","language.label":"语言","settings.title":"设置","settings.close":"关闭（Esc）","settings.filter":"筛选…","settings.loading":"加载设置中…","settings.section.general":"常规","settings.section.sessions":"会话","settings.section.recordings":"录制","settings.section.compaction":"压缩","settings.section.keyboard":"键盘","settings.section.workspace":"工作区","settings.section.environment":"环境","settings.section.providers":"提供商","settings.section.models":"模型","settings.section.theme":"外观","settings.section.scheduled-tasks":"计划任务","settings.section.quick-actions":"快捷操作","settings.section.keychain":"密钥串","settings.section.tools":"工具","settings.section.addons":"插件","settings.placeholder.recordings":"筛选录制…","settings.placeholder.keyboard":"筛选快捷键…","settings.placeholder.environment":"筛选环境…","settings.placeholder.models":"筛选模型…","settings.placeholder.scheduled-tasks":"筛选计划任务…","settings.placeholder.quick-actions":"筛选快捷操作…","settings.placeholder.keychain":"筛选条目…","settings.placeholder.tools":"筛选工具…","settings.placeholder.addons":"筛选插件…","menu.title":"菜单","menu.showWorkspace":"显示工作区","menu.hideWorkspace":"隐藏工作区","menu.openExplorer":"打开资源管理器","menu.chatOnly":"仅聊天模式","menu.exitChatOnly":"退出仅聊天模式","menu.openTerminal":"在标签页中打开终端","menu.openVnc":"在标签页中打开 VNC","menu.newFile":"新建文件","menu.openRecent":"打开最近文件","menu.refreshTree":"刷新目录树","menu.reindex":"重建工作区索引","menu.showHidden":"显示隐藏文件","menu.hideHidden":"隐藏隐藏文件","menu.scale":"缩放","menu.settings":"设置"},Su={"compose.placeholder":"メッセージ（Enterで送信、Shift+Enterで改行）...","compose.send":"送信","compose.stop":"停止","compose.searchPlaceholder":"検索（Enterで実行）...","compose.clearAll":"すべてクリア","compose.clearAllTitle":"すべての添付と参照をクリア","compose.scope":"範囲","compose.searchScope":"検索範囲","compose.scopeCurrent":"現在","compose.scopeBranchFamily":"ブランチファミリー","compose.scopeAll":"すべてのチャット","compose.filterImages":"画像","compose.filterAttachments":"添付","compose.search":"検索","compose.closeSearch":"検索を閉じる","compose.shareLocation":"位置を共有","compose.attachFile":"ファイルを添付","workspace.title":"ワークスペース","workspace.newFile":"新規ファイル","workspace.refresh":"更新","workspace.actions":"ワークスペース操作","workspace.uploadFiles":"ファイルをアップロード","workspace.reindexing":"ワークスペースを再インデックス中…","workspace.deleteFile":"ファイルを削除","workspace.download":"ダウンロード","workspace.uploadToFolder":"このフォルダにファイルをアップロード","workspace.addFolderHint":"フォルダのヒントを入力欄に追加","workspace.downloadZip":"フォルダをzipでダウンロード","workspace.openInTab":"タブで開く","workspace.openInEditor":"エディタで開く","workspace.renameSelected":"選択項目の名前を変更","workspace.downloadSelectedFile":"選択したファイルをダウンロード","workspace.downloadSelectedFolder":"選択したフォルダをダウンロード（zip）","workspace.deleteSelectedFile":"選択したファイルを削除","shell.settings":"設定","shell.newChat":"新規チャット","shell.connecting":"接続中…","shell.connected":"接続済み","language.label":"言語","settings.title":"設定","settings.close":"閉じる（Esc）","settings.filter":"フィルター…","settings.loading":"設定を読み込み中…","settings.section.general":"一般","settings.section.sessions":"セッション","settings.section.recordings":"録画","settings.section.compaction":"圧縮","settings.section.keyboard":"キーボード","settings.section.workspace":"ワークスペース","settings.section.environment":"環境","settings.section.providers":"プロバイダー","settings.section.models":"モデル","settings.section.theme":"外観","settings.section.scheduled-tasks":"スケジュールタスク","settings.section.quick-actions":"クイックアクション","settings.section.keychain":"キーチェーン","settings.section.tools":"ツール","settings.section.addons":"アドオン","settings.placeholder.recordings":"録画をフィルター…","settings.placeholder.keyboard":"ショートカットをフィルター…","settings.placeholder.environment":"環境をフィルター…","settings.placeholder.models":"モデルをフィルター…","settings.placeholder.scheduled-tasks":"スケジュールタスクをフィルター…","settings.placeholder.quick-actions":"クイックアクションをフィルター…","settings.placeholder.keychain":"エントリをフィルター…","settings.placeholder.tools":"ツールをフィルター…","settings.placeholder.addons":"アドオンをフィルター…","menu.title":"メニュー","menu.showWorkspace":"ワークスペースを表示","menu.hideWorkspace":"ワークスペースを非表示","menu.openExplorer":"エクスプローラーを開く","menu.chatOnly":"チャットのみモード","menu.exitChatOnly":"チャットのみモードを終了","menu.openTerminal":"ターミナルをタブで開く","menu.openVnc":"VNC をタブで開く","menu.newFile":"新規ファイル","menu.openRecent":"最近のファイルを開く","menu.refreshTree":"ツリーを更新","menu.reindex":"ワークスペースを再インデックス","menu.showHidden":"隠しファイルを表示","menu.hideHidden":"隠しファイルを非表示","menu.scale":"拡大縮小","menu.settings":"設定"},eu={en:Z_,"zh-CN":du,ja:Su},Un=Ln});function I_({children:n,className:r=""}){let[i,_]=w(null);return P(()=>{if(typeof document>"u")return;let c=document.createElement("div");return c.className=r||"",document.body.appendChild(c),_(c),()=>{try{Zn(null,c)}finally{c.remove()}}},[]),P(()=>{if(!i)return;i.className=r||"";return},[r,i]),kr(()=>{if(!i)return;Zn(n,i);return},[n,i]),null}var L_=J(()=>{e()});function xi(n,r){let i=String(n.label||"").localeCompare(String(r.label||""),void 0,{sensitivity:"base"});if(i!==0)return i;return String(n.id||"").localeCompare(String(r.id||""),void 0,{sensitivity:"base"})}function Dn(n){let r=Tn.findIndex((i)=>i.id===n.id);if(r>=0)Tn[r]=n;else Tn.push(n);Tn.sort(xi)}function Gs(n){let r=Tn.findIndex((i)=>i.id===n);if(r>=0)Tn.splice(r,1)}function D_(){return[...Tn]}function Vs(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var Tn;var cr=J(()=>{Tn=[]});function Tr(n){let r=typeof n==="string"?n.trim():"";return r?r:null}function Y_(n={}){if(typeof window>"u")return;let r=Tr(n.section);try{if(window.__piclawSettingsOpenRequested=!0,r)window.__piclawSettingsRequestedSection=r;else delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to record open request flags",i)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:r?{section:r}:void 0}))}function ti(){if(typeof window>"u")return null;return Tr(window.__piclawSettingsRequestedSection)}function C_(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),r=ti();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to clear open request flags",i)}return{open:n,section:r}}function O_(n=typeof window<"u"?window:null){return n||null}function Gr(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function lr(n,r){return`${n}:${r}`}function E_(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function d_(n,r){if(n.length<=r)return;n.splice(0,n.length-r)}function Gn(n){if(!n||typeof n!=="object")return null;return{...n}}function Xn(n){if(!n)return null;return Vn.find((r)=>r.id===n)||null}function hi(n,r){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${r}`)}catch(i){console.debug("[app-perf] Ignoring performance.mark failure.",i,{traceId:n,phase:r})}}function S_(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let r=Xn(n);if(!r)return;for(let i of r.phases)performance.clearMarks(`piclaw:${n}:${i.phase}`)}catch(r){console.debug("[app-perf] Ignoring performance.clearMarks failure.",r,{traceId:n})}}function J_(n,r,i){let _=Nn.get(lr(n,r));if(_&&Xn(_)?.status==="active")fr(_,"cancelled","superseded",{replacementType:n,replacementChatJid:r});let c=E_(n),u={id:c,type:n,chatJid:r,startedAt:Gr(),detail:Gn(i),phases:[],status:"active"};return Vn.push(u),d_(Vn,100),Nn.set(lr(n,r),c),hi(c,"start"),c}function fr(n,r,i,_,c){let u=Xn(n);if(!u||u.status!=="active")return;if(i)u.phases.push({phase:i,at:Gr(),detail:Gn(_)}),hi(u.id,i);if(u.status=r,u.completedAt=Gr(),u.durationMs=u.completedAt-u.startedAt,c!==void 0)u.error=c instanceof Error?c.message:String(c);let f=lr(u.type,u.chatJid);if(Nn.get(f)===u.id)Nn.delete(f);S_(u.id)}function lf(n=O_()){let r=n?.__PICLAW_PERF__;if(r)return r;if(n)n.__PICLAW_PERF__=Vr;return Vr}function Yn(n=O_()){return lf(n)}function Ps(n,r,i){return Yn().ensureTrace(n,r,i)}function Qs(n,r){return Yn().getActiveTraceId(n,r)}function Ms(n,r,i){Yn().markTrace(n,r,i)}function qs(n,r,i="settled",_){let c=Xn(n);if(!c||c.status!=="active")return!1;let u=new Set(c.phases.map((f)=>f.phase));if(!r.every((f)=>u.has(f)))return!1;return fr(n,"completed",i,_),!0}function As(n,r,i="failed",_){Yn().failTrace(n,r,i,_)}function Zs(n,r="cancelled",i){Yn().cancelTrace(n,r,i)}function bi(n){return Yn().recordRequest(n)}var Vn,ur,Nn,Vr;var e_=J(()=>{Vn=[],ur=[],Nn=new Map;Vr={startTrace(n,r,i){return J_(n,r,i)},ensureTrace(n,r,i){let _=Nn.get(lr(n,r));if(_&&Xn(_)?.status==="active")return _;return J_(n,r,i)},getActiveTraceId(n,r){let i=Nn.get(lr(n,r));return i&&Xn(i)?.status==="active"?i:null},markTrace(n,r,i){let _=Xn(n);if(!_||_.status!=="active")return;_.phases.push({phase:r,at:Gr(),detail:Gn(i)}),hi(_.id,r)},completeTrace(n,r="settled",i){fr(n,"completed",r,i)},failTrace(n,r,i="failed",_){fr(n,"failed",i,_,r)},cancelTrace(n,r="cancelled",i){fr(n,"cancelled",r,i)},recordRequest(n){let r=E_("req");return ur.push({...n,id:r,detail:Gn(n.detail)}),d_(ur,300),r},getTraces(){return Vn.map((n)=>({...n,detail:Gn(n.detail),phases:n.phases.map((r)=>({...r,detail:Gn(r.detail)}))}))},getRequests(){return ur.map((n)=>({...n,detail:Gn(n.detail)}))},clear(){Vn.forEach((n)=>S_(n.id)),Vn.splice(0,Vn.length),ur.splice(0,ur.length),Nn.clear()},printSummary(){let n={traces:Vr.getTraces(),requests:Vr.getRequests()};return console.table(n.traces.map((r)=>({id:r.id,type:r.type,chatJid:r.chatJid,status:r.status,durationMs:Number(r.durationMs||0).toFixed(1),lastPhase:r.phases[r.phases.length-1]?.phase||"start"}))),n}}});function Cn(n){let r=Number(n||0);return Number.isFinite(r)&&r>0?r:null}function sf(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function of(n){let r=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(r)}function m_(n){let r=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(r)}function a_(n=typeof window<"u"?window:null){let r=Cn(n?.innerWidth)??Cn(n?.screen?.availWidth)??Cn(n?.screen?.width)??0,i=Cn(n?.innerHeight)??Cn(n?.screen?.availHeight)??Cn(n?.screen?.height)??0,_=r&&i?Math.min(r,i):r||i,c=r&&i?Math.max(r,i):r||i,u=sf(n),f=Number(n?.navigator?.maxTouchPoints||0),s=u||f>1;if(_>0&&_<=640)return"mobile";if(of(n)&&!m_(n))return"mobile";if(m_(n))return"tablet";if(s&&_>0&&_<=1100)return"tablet";if(c>0&&c<=1180&&_>0&&_<=900)return"tablet";return"desktop"}var W0={};un(W0,{uploadWorkspaceFile:()=>t0,uploadMedia:()=>Yf,updateWorkspaceFile:()=>s0,updateScheduledTask:()=>zi,submitAdaptiveCardAction:()=>Jf,streamSidePrompt:()=>Of,stopSessionRecording:()=>Wi,stopAutoresearch:()=>Mf,steerAgentQueueItem:()=>If,startSessionRecording:()=>Fi,setWorkspaceVisibility:()=>p0,setAgentThoughtVisibility:()=>Sf,sessionRecordingPlaybackUrl:()=>ki,sessionRecordingExportUrl:()=>sr,sendPeerAgentMessage:()=>Uf,sendAgentMessage:()=>Kn,searchPosts:()=>yf,saveWorkspaceSettings:()=>Vi,saveWebPushSubscription:()=>Gf,saveUiState:()=>Hi,saveQuickActionsSettings:()=>Gi,savePostAnnotations:()=>F0,saveEnvironmentOverride:()=>Xr,restoreChatBranch:()=>Hf,respondToAgentRequest:()=>Cf,reorderAgentQueueItem:()=>Lf,renameWorkspaceFile:()=>b0,renameChatJid:()=>Rf,renameChatBranch:()=>Ff,removeAgentQueueItem:()=>Zf,reindexWorkspace:()=>u0,purgeChatBranch:()=>kf,pruneChatBranch:()=>jf,previewSessionRecordingRedaction:()=>Ri,moveWorkspaceEntry:()=>v0,mergeChatBranchIntoParent:()=>Wf,getWorkspaceTree:()=>i0,getWorkspaceRawUrl:()=>rc,getWorkspaceIndexStatus:()=>c0,getWorkspaceFileStat:()=>l0,getWorkspaceFileDownloadUrl:()=>z0,getWorkspaceFile:()=>f0,getWorkspaceDownloadUrl:()=>B0,getWorkspaceBranch:()=>_0,getWebPushPublicKey:()=>Tf,getTimeline:()=>$f,getThumbnailUrl:()=>mf,getThread:()=>xf,getSystemMetrics:()=>tf,getSessionRecordings:()=>Bi,getSessionRecording:()=>Nr,getScheduledTasks:()=>pi,getQuickActionsSettings:()=>Ti,getPostsByHashtag:()=>wf,getMediaUrl:()=>ef,getMediaText:()=>n0,getMediaInfo:()=>af,getMediaBlob:()=>r0,getEnvironmentSettings:()=>Ni,getChatBranches:()=>pf,getAutoresearchStatus:()=>Qf,getAgents:()=>Nf,getAgentThought:()=>df,getAgentStatus:()=>Xf,getAgentQueueState:()=>Af,getAgentModels:()=>Xi,getAgentContext:()=>Pf,getAgentCommands:()=>Ui,getActiveChatAgents:()=>Kf,forkChatBranch:()=>zf,dismissAutoresearch:()=>qf,deleteWorkspaceFile:()=>K0,deleteWebPushSubscription:()=>Vf,deleteSessionRecording:()=>ji,deletePost:()=>vf,createWorkspaceFile:()=>h0,createRootChatSession:()=>Bf,createReply:()=>bf,createPost:()=>hf,completeInstanceOobe:()=>Df,attachWorkspaceFile:()=>o0,addToWhitelist:()=>Ef,SSEClient:()=>ic});function vn(n,r={}){if(String(r.method||"GET").toUpperCase()!=="GET")return q(n,r);let _=vi.get(n);if(_)return _;let c=q(n,r).finally(()=>{vi.delete(n)});return vi.set(n,c),c}async function q(n,r={}){let i=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),_;try{_=await fetch(rn+n,{...r,headers:{"Content-Type":"application/json",...r.headers}})}catch(u){throw bi({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i,ok:!1,detail:{failedBeforeResponse:!0}}),u}let c=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i;if(bi({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:c,status:_.status,ok:_.ok,requestId:_.headers?.get?.("x-request-id")||null,serverTiming:_.headers?.get?.("Server-Timing")||null}),!_.ok){let u=await _.json().catch(()=>({error:"Unknown error"}));throw Error(u.error||`HTTP ${_.status}`)}return _.json()}function nc(n){let r=String(n||"").split(`
`),i="message",_=[];for(let u of r)if(u.startsWith("event:"))i=u.slice(6).trim()||"message";else if(u.startsWith("data:"))_.push(u.slice(5).trim());let c=_.join(`
`);if(!c)return null;try{return{event:i,data:JSON.parse(c)}}catch{return{event:i,data:c}}}async function gf(n,r){if(!n.body)throw Error("Missing event stream body");let i=n.body.getReader(),_=new TextDecoder,c="";while(!0){let{value:f,done:s}=await i.read();if(s)break;c+=_.decode(f,{stream:!0});let o=c.split(`

`);c=o.pop()||"";for(let $ of o){let b=nc($);if(b)r(b.event,b.data)}}c+=_.decode();let u=nc(c);if(u)r(u.event,u.data)}async function $f(n=10,r=null,i=null){let _=`/timeline?limit=${n}`;if(r)_+=`&before=${r}`;if(i)_+=`&chat_jid=${encodeURIComponent(i)}`;return vn(_)}async function wf(n,r=50,i=0,_=null){let c=_?`&chat_jid=${encodeURIComponent(_)}`:"";return q(`/hashtag/${encodeURIComponent(n)}?limit=${r}&offset=${i}${c}`)}async function yf(n,r=50,i=0,_=null,c="current",u=null,f=null){let s=_?`&chat_jid=${encodeURIComponent(_)}`:"",o=c?`&scope=${encodeURIComponent(c)}`:"",$=u?`&root_chat_jid=${encodeURIComponent(u)}`:"",b=f?.images?"&images=1":"",g=f?.attachments?"&attachments=1":"";return q(`/search?q=${encodeURIComponent(n)}&limit=${r}&offset=${i}${s}${o}${$}${b}${g}`)}async function xf(n,r=null){let i=r?`?chat_jid=${encodeURIComponent(r)}`:"";return q(`/thread/${n}${i}`)}async function tf(){return q("/agent/system-metrics")}async function pi(n={}){let r=new URLSearchParams;if(n?.id)r.set("id",String(n.id));if(n?.chatJid)r.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")r.set("status",String(n.status));if(n?.limit)r.set("limit",String(n.limit));if(n?.includeRunLogs)r.set("include_run_logs","1");if(n?.runLogLimit)r.set("run_log_limit",String(n.runLogLimit));let i=r.toString()?`?${r.toString()}`:"";return q(`/agent/scheduled-tasks${i}`)}async function zi(n,r,i={}){return q("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:r,allow_internal:i?.allowInternal===!0})})}async function Bi(){return q("/agent/recordings")}async function Nr(n){return q(`/agent/recordings/${encodeURIComponent(n)}`)}async function Fi(n={}){return q("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function Wi(n={}){return q("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function ji(n){return q(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function sr(n,r="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(r)}`}function ki(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function Ri(n,r={}){return q("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...r})})}async function Hi(n){return q("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function hf(n,r=[],i=null){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return q(`/post${_}`,{method:"POST",body:JSON.stringify({content:n,media_ids:r})})}async function bf(n,r,i=[],_=null){let c=_?`?chat_jid=${encodeURIComponent(_)}`:"";return q(`/post/reply${c}`,{method:"POST",body:JSON.stringify({thread_id:n,content:r,media_ids:i})})}async function vf(n,r=!1,i=null){let _=i?`&chat_jid=${encodeURIComponent(i)}`:"",c=`/post/${n}?cascade=${r?"true":"false"}${_}`;return q(c,{method:"DELETE"})}async function Kn(n,r,i=null,_=[],c=null,u=null){let f=u?`?chat_jid=${encodeURIComponent(u)}`:"",s={content:r,thread_id:i,media_ids:_,client_context:{screen_hint:a_()}};if(c==="auto"||c==="queue"||c==="steer")s.mode=c;return q(`/agent/${n}/message${f}`,{method:"POST",body:JSON.stringify(s)})}async function Ui(n="web:default"){let r=typeof n==="string"&&n.trim()?n.trim():"web:default";return vn(`/agent/commands?chat_jid=${encodeURIComponent(r)}`)}async function Ti(){return q("/agent/settings/quick-actions")}async function Gi(n){return q("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function Vi(n){return q("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function Ni(){return q("/agent/settings/environment")}async function Xr(n){return q("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function Kf(){return q("/agent/active-chats")}async function pf(n=null,r={}){let i=new URLSearchParams;if(n)i.set("root_chat_jid",String(n));if(r?.includeArchived)i.set("include_archived","1");let _=i.toString()?`?${i.toString()}`:"";return vn(`/agent/branches${_}`)}async function zf(n,r={}){return q("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...r?.agentName?{agent_name:r.agentName}:{}})})}async function Bf(n){return q("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function Ff(n,r={}){return q("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Wf(n){return q("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function jf(n){return q("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function kf(n){return q("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Rf(n,r){return q("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:r})})}async function Hf(n,r={}){return q("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Uf(n,r,i,_="auto",c={}){let u={source_chat_jid:n,content:i,mode:_,...c?.sourceAgentName?{source_agent_name:c.sourceAgentName}:{},...c?.targetBy==="agent_name"?{target_agent_name:r}:{target_chat_jid:r}};return q("/agent/peer-message",{method:"POST",body:JSON.stringify(u)})}async function Tf(){return q("/agent/push/vapid-public-key")}async function Gf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return q("/agent/push/subscription",{method:"POST",body:JSON.stringify(i)})}async function Vf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return q("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(i)})}async function Nf(){return vn("/agent/roster")}async function Xf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return vn(`/agent/status${r}`)}async function Pf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return vn(`/agent/context${r}`)}async function Qf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return vn(`/agent/autoresearch/status${r}`)}async function Mf(n=null,r={}){return q("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:r?.generateReport!==!1})})}async function qf(n=null){return q("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function Af(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return vn(`/agent/queue-state${r}`)}async function Zf(n,r=null){let i=await fetch(rn+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function If(n,r=null){let i=await fetch(rn+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Lf(n,r,i=null){let _=await fetch(rn+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Xi(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return vn(`/agent/models${r}`)}async function Df(n="provider-ready"){return q("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function Yf(n){let r=new FormData;r.append("file",n);let i=await fetch(rn+"/media/upload",{method:"POST",body:r});if(!i.ok){let _=await i.json().catch(()=>({error:"Upload failed"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Cf(n,r,i=null){let _=await fetch(rn+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to respond"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Jf(n){let r=await fetch(rn+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){let i=await r.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(i.error||`HTTP ${r.status}`)}return r.json()}async function Of(n,r={}){let i=await fetch(rn+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:r.systemPrompt||void 0,chat_jid:r.chatJid||void 0}),signal:r.signal});if(!i.ok){let u=await i.json().catch(()=>({error:"Side prompt failed"}));throw Error(u.error||`HTTP ${i.status}`)}let _=null,c=null;if(await gf(i,(u,f)=>{if(r.onEvent?.(u,f),u==="side_prompt_thinking_delta")r.onThinkingDelta?.(f?.delta||"");else if(u==="side_prompt_text_delta")r.onTextDelta?.(f?.delta||"");else if(u==="side_prompt_done")_=f;else if(u==="side_prompt_error")c=f}),c){let u=Error(c?.error||"Side prompt failed");throw u.payload=c,u}return _}async function Ef(n,r){let i=await fetch(rn+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function df(n,r="thought"){let i=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(r)}`;return q(i)}async function Sf(n,r,i){return q("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:r,expanded:Boolean(i)})})}function ef(n){return`${rn}/media/${n}`}function mf(n){return`${rn}/media/${n}/thumbnail`}async function af(n){let r=await fetch(`${rn}/media/${n}/info`);if(!r.ok)throw Error("Failed to get media info");return r.json()}async function n0(n){let r=await fetch(`${rn}/media/${n}`);if(!r.ok)throw Error("Failed to load media text");return r.text()}async function r0(n){let r=await fetch(`${rn}/media/${n}`);if(!r.ok)throw Error("Failed to load media blob");return r.blob()}async function i0(n="",r=2,i=!1){let _=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${r}&show_hidden=${i?"1":"0"}`;return q(_)}async function _0(n=""){let r=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return q(r)}async function c0(n="all"){let r=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return q(r)}async function u0(n="all"){return q("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function f0(n,r=20000,i=null){let _=i?`&mode=${encodeURIComponent(i)}`:"",c=`/workspace/file?path=${encodeURIComponent(n)}&max=${r}${_}`;return q(c)}async function l0(n){return q(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function s0(n,r){return q("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:r})})}async function o0(n){return q("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function $0(n,r="",i={}){let _=new URLSearchParams;if(r)_.set("path",r);if(i.overwrite)_.set("overwrite","1");let c=_.toString();return c?`${n}?${c}`:n}function w0(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function y0(n,r,i,_){return new Promise((c,u)=>{let f=new XMLHttpRequest;f.open("POST",rn+r);for(let[s,o]of Object.entries(i||{}))if(o!==void 0&&o!==null)f.setRequestHeader(s,String(o));f.upload.onprogress=(s)=>{if(typeof _==="function")_({loaded:s.lengthComputable?s.loaded:0,total:s.lengthComputable?s.total:n.size,lengthComputable:s.lengthComputable})},f.onload=()=>{try{let s=f.responseText?JSON.parse(f.responseText):{};if(f.status>=200&&f.status<300)c(s);else{let o=Error(s.error||`HTTP ${f.status}`);o.status=f.status,o.code=s.code,u(o)}}catch{let s=Error(`HTTP ${f.status}`);s.status=f.status,u(s)}},f.onerror=()=>u(Error("Upload failed (network error)")),f.ontimeout=()=>u(Error("Upload timed out")),f.send(n)})}async function x0(n,r="",i={}){let _=w0(),c=$0("/workspace/upload-chunk",r,i),u=Math.max(1,Math.min(Ki,Number(i.chunkSize)||g0)),f=Math.max(0,Number(n?.size)||0),s=Math.max(1,Math.ceil(f/u)),o=0,$=null;for(let b=0;b<s;b+=1){let g=b*u,v=Math.min(f,g+u),t=n.slice(g,v),h=t.size;if($=await y0(t,c,{"X-Upload-Id":_,"X-Chunk-Index":b,"X-Chunk-Total":s,"X-File-Name":n?.name||"upload.bin","X-File-Size":f},(p)=>{if(typeof i.onProgress!=="function")return;let x=Math.min(f,o+(p?.loaded||0)),K=f||1;i.onProgress({loaded:x,total:K,percent:Math.round(x/K*100),chunkIndex:b,chunkTotal:s})}),o+=h,typeof i.onProgress==="function"){let p=f||1,x=f?o:p;i.onProgress({loaded:x,total:p,percent:Math.round(x/p*100),chunkIndex:b+1,chunkTotal:s})}}return $}async function t0(n,r="",i={}){if(n?.size>Ki){let _=(n.size/1048576).toFixed(0),c=(Ki/1048576).toFixed(0),u=Error(`File too large (${_} MB). Maximum upload size is ${c} MB.`);throw u.code="file_too_large",u}return await x0(n,r,i)}async function h0(n,r,i=""){let _=await fetch(rn+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r,content:i})});if(!_.ok){let c=await _.json().catch(()=>({error:"Create failed"})),u=Error(c.error||`HTTP ${_.status}`);throw u.status=_.status,u.code=c.code,u}return _.json()}async function b0(n,r){let i=await fetch(rn+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Rename failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function v0(n,r){let i=await fetch(rn+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Move failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function K0(n){let r=`/workspace/file?path=${encodeURIComponent(n||"")}`;return q(r,{method:"DELETE"})}async function p0(n,r=!1){return q("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(r)})})}function rc(n,r={}){let i=new URLSearchParams({path:String(n||"")});if(r.download)i.set("download","1");return`${rn}/workspace/raw?${i.toString()}`}function z0(n){return rc(n,{download:!0})}function B0(n,r=!1){let i=`path=${encodeURIComponent(n||"")}&show_hidden=${r?"1":"0"}`;return`${rn}/workspace/download?${i}`}class ic{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,r,i={}){this.onEvent=n,this.onStatusChange=r,this.chatJid=typeof i?.chatJid==="string"&&i.chatJid.trim()?i.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(rn+"/sse/stream"+n);let r=(i)=>{this.eventSource.addEventListener(i,(_)=>{this.markActivity(),this.onEvent(i,JSON.parse(_.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),r("new_post"),r("new_reply"),r("agent_response"),r("interaction_updated"),r("interaction_deleted"),r("agent_status"),r("agent_steer_queued"),r("agent_followup_queued"),r("agent_followup_consumed"),r("agent_followup_removed"),r("workspace_update"),r("agent_draft"),r("agent_draft_delta"),r("agent_thought"),r("agent_thought_delta"),r("model_changed"),r("ui_theme"),r("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(r)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,r=60000,i=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,i+r),this.reconnectAttempts=0;let _=Math.max(this.cooldownUntil-i,0),c=Math.max(this.reconnectDelay,_);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},c),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}async function F0(n,r,i){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return q(`/post/${n}/annotations${_}`,{method:"PATCH",body:JSON.stringify({annotations:r})})}var rn="",vi,Ki=1073741824,g0=8388608;var pn=J(()=>{e_();vi=new Map});function k0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(Qr,{detail:{enabled:Boolean(n)}}))}function uc(n){if(typeof fetch!=="function")return;Hi({ui_meters:n}).catch((r)=>{console.debug("[meters] Failed to persist meters UI state.",r)})}function R0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(j0,{detail:{collapsed:Boolean(n)}}))}function Pi(n=!1){return oi(_c,n)}function Os(n=!1){return oi(cc,n)}function Pr(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)ln(_c,c?"true":"false");if(_)uc({enabled:c});return k0(c),c}function H0(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)ln(cc,c?"true":"false");if(_)uc({collapsed:c});return R0(c),c}function Es(n){let r=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")Pr(Boolean(n.enabled),{persistServer:!1});else if(r==="toggle"){let i=!Pi(!1);Pr(i,{persistServer:!1})}if(typeof n?.collapsed==="boolean")H0(Boolean(n.collapsed),{persistServer:!1})}var _c="piclaw_system_meters_enabled",cc="piclaw_system_meters_collapsed",Qr="piclaw-meters-change",j0="piclaw-meters-collapsed-change";var fc=J(()=>{pn()});function lc(n,r){if(n===""||n===null||n===void 0)return r;let i=Number(n);return Number.isFinite(i)?i:r}function sc(n,{min:r=-1/0,max:i=1/0}={}){let _=Number.isFinite(Number(r))?Number(r):-1/0,c=Number.isFinite(Number(i))?Number(i):1/0;return Math.min(c,Math.max(_,Number(n)))}function Jn(n,{fallback:r=0,min:i=-1/0,max:_=1/0}={}){let c=lc(n,r);return sc(c,{min:i,max:_})}function U0(n,{direction:r=1,step:i=1,fallback:_=0,min:c=-1/0,max:u=1/0}={}){let f=Jn(n,{fallback:_,min:c,max:u}),s=Math.abs(lc(i,1))||1,o=Number(r)<0?-1:1;return sc(f+o*s,{min:c,max:u})}function nn({value:n,min:r,max:i,step:_=1,fallback:c,width:u="80px",disabled:f=!1,label:s,onChange:o}){let $=Number.isFinite(Number(c))?Number(c):Jn(n,{fallback:0,min:r,max:i}),[b,g]=w(String(n??$)),v=C(!1);P(()=>{if(!v.current)g(String(n??$))},[n,$]);let t=H((p)=>{v.current=!1;let x=Jn(p,{fallback:$,min:r,max:i});g(String(x)),o?.(x)},[$,r,i,o]),h=H((p)=>{v.current=!1;let x=U0(n,{direction:p,step:_,fallback:$,min:r,max:i});g(String(x)),o?.(x)},[$,i,r,o,_,n]);return l`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${s||"value"}`}
                title=${`Decrease ${s||"value"}`}
                disabled=${f}
                onClick=${()=>h(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${b}
                disabled=${f}
                style=${`width:${u}`}
                onInput=${(p)=>{v.current=!0,g(p.target.value)}}
                onBlur=${(p)=>t(p.target.value)}
                onKeyDown=${(p)=>{if(p.key==="Enter")p.preventDefault(),t(p.target.value),p.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${s||"value"}`}
                title=${`Increase ${s||"value"}`}
                disabled=${f}
                onClick=${()=>h(1)}
            >+</button>
        </span>
    `}var On=J(()=>{e()});function oc(n){let r=String(n||"").trim();if(!r)return"";if(r.startsWith("http://")||r.startsWith("https://")||r.startsWith("data:")||r.startsWith("blob:"))return r;if(r.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(r.slice(11))}`;if(r.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(r))return"";if(r.startsWith("\\\\"))return"";if(r.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(r.replace(/^\.\//,""))}`}function gc({value:n,onChange:r}){let i=C(null),[_,c]=w(oc(n));P(()=>{c(oc(n))},[n]);let u=H((f)=>{let s=f.target.files?.[0];if(!s)return;let o=new FileReader;o.onload=()=>{let $=o.result;c($),r?.($)},o.readAsDataURL(s)},[r]);return l`
        <div class="settings-avatar-inline" onClick=${()=>i.current?.click()} title="Click to upload">
            ${_?l`<img src=${_} alt="avatar" />`:l`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${i} style="display:none" onChange=${u} />
        </div>
    `}function $c(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function T0(n,r={}){let i=typeof n==="string"?n:"";if(!i)return!1;let _=r.navigator??(typeof navigator<"u"?navigator:null),c=r.document??(typeof document<"u"?document:null);if(_?.clipboard?.writeText)try{return await _.clipboard.writeText(i),!0}catch(u){}try{if(!c?.body||typeof c.createElement!=="function"||typeof c.execCommand!=="function")return!1;let u=c.createElement("textarea");u.value=i,u.setAttribute?.("readonly",""),u.style.position="fixed",u.style.left="-9999px",u.style.top="0",u.style.opacity="0",c.body.appendChild(u),u.focus?.(),u.select?.();let f=Boolean(c.execCommand("copy"));return c.body.removeChild(u),f}catch(u){return!1}}function Qi({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(""),[u,f]=w(""),[s,o]=w(""),[$,b]=w(""),[g,v]=w(32),[t,h]=w(256),[p,x]=w(""),[K,W]=w(!1),[T,F]=w(!1),[U,z]=w(!1),[G,Q]=w(()=>Pi(!1)),[y,k]=w(!1),j=C(""),V=C(null),Z=C(!0);P(()=>{return Z.current=!0,()=>{Z.current=!1}},[]);let L=H((O)=>{let X=$c(O);c(X.userName),f(X.userAvatar),o(X.assistantName),b(X.assistantAvatar),v(X.composeUploadLimitMb),h(X.workspaceUploadLimitMb),x(O?.widgetToken||""),j.current=JSON.stringify(X)},[]);P(()=>{L(n||{})},[n,L]),P(()=>{let O=(X)=>{Q(Boolean(X?.detail?.enabled))};return window.addEventListener(Qr,O),()=>window.removeEventListener(Qr,O)},[]);let B=D(()=>JSON.stringify($c({userName:_,userAvatar:u,assistantName:s,assistantAvatar:$,composeUploadLimitMb:g,workspaceUploadLimitMb:t})),[_,u,s,$,g,t]);P(()=>{if(B===j.current)return;if(V.current)clearTimeout(V.current);return V.current=setTimeout(async()=>{if(!Z.current)return;let O=document.activeElement;if(O&&O.closest?.(".settings-number-stepper"))return;try{let X=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:B}),I=await X.json().catch(()=>({}));if(!Z.current)return;if(!X.ok||!I?.ok||!I?.settings)return;j.current=B,i?.(I.settings),k(!0),setTimeout(()=>{if(Z.current)k(!1)},4000)}catch(X){console.warn("[settings/general] Failed to persist general settings snapshot.",X)}},800),()=>{if(V.current)clearTimeout(V.current)}},[B,i]);let M=n?.instanceTotp||{configured:!1,issuer:s||"Piclaw",label:_?`${s||"Piclaw"}:${_}`:s||"Piclaw",secret:"",otpauth:"",qrSvg:""},Y=H(async()=>{if(!p)return;if(await T0(p))F(!0),setTimeout(()=>{if(Z.current)F(!1)},3000);else r?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[p,r]),E=H(async()=>{if(U)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;z(!0);try{let O=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),X=await O.json().catch(()=>({}));if(!O.ok||!X?.ok||!X?.settings)throw Error(X?.error||"Failed to regenerate widget token.");x(X.settings.widgetToken||""),i?.(X.settings),k(!0),setTimeout(()=>{if(Z.current)k(!1)},4000)}catch(O){console.warn("[settings/general] Failed to regenerate widget token.",O)}finally{if(Z.current)z(!1)}},[U,i]),_n=typeof window<"u"&&window.isSecureContext,sn=p?"•".repeat(Math.min(Math.max(p.length,16),48)):"—",wn=K?p||"—":sn;return l`
        <div class="settings-section">
            ${y&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${gc} value=${u} onChange=${f} />
                <input type="text" value=${_} onInput=${(O)=>c(O.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${gc} value=${$} onChange=${b} />
                <input type="text" value=${s} onInput=${(O)=>o(O.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${_n?l`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:l`
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
                    <input type="checkbox" checked=${G}
                        onChange=${()=>{let O=Pr(!G);Q(O)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${nn}
                    label="compose upload limit"
                    value=${g}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${v}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${nn}
                    label="workspace upload limit"
                    value=${t}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${h}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>Widget bearer token</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">Token</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${wn}</code>
                        <button class=${`settings-keychain-reveal-btn${K?" active":""}`}
                            type="button"
                            onClick=${()=>W((O)=>!O)}
                            disabled=${!p}
                            title=${K?"Hide token":"Reveal token"}>
                            ${K?l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${Y} disabled=${!p} title="Copy token">
                            ${T?l`<span class="settings-widget-token-copied">Copied</span>`:l`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${E} disabled=${U}>${U?"Regenerating…":"Regenerate"}</button>
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
                ${M.configured?l`
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
    `}var wc=J(()=>{e();fc();On()});var xc={};un(xc,{SessionsSection:()=>G0});function yc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function G0({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(!0),[u,f]=w(16),[s,o]=w(4000),[$,b]=w(3),[g,v]=w(64),[t,h]=w("none"),[p,x]=w(!1),K=C(""),W=C(null),T=C(!0);P(()=>{return T.current=!0,()=>{T.current=!1}},[]);let F=H((z)=>{let G=yc(z);c(G.sessionAutoRotate),f(G.sessionMaxSizeMb),o(G.sessionMaxLines),b(G.sessionMaxCompactions),v(G.toolUseBudget),h(G.sessionIsolation),K.current=JSON.stringify(G)},[]);P(()=>{F(n||{})},[n,F]);let U=D(()=>JSON.stringify(yc({sessionAutoRotate:_,sessionMaxSizeMb:u,sessionMaxLines:s,sessionMaxCompactions:$,toolUseBudget:g,sessionIsolation:t})),[_,u,s,$,g,t]);return P(()=>{if(U===K.current)return;if(W.current)clearTimeout(W.current);return W.current=setTimeout(async()=>{if(!T.current)return;let z=document.activeElement;if(z&&z.closest?.(".settings-number-stepper"))return;try{let G=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:U}),Q=await G.json().catch(()=>({}));if(!T.current)return;if(!G.ok||!Q?.ok||!Q?.settings)return;K.current=U,i?.(Q.settings),x(!0),setTimeout(()=>{if(T.current)x(!1)},4000)}catch(G){console.warn("[settings/sessions] Failed to persist session settings.",G)}},800),()=>{if(W.current)clearTimeout(W.current)}},[U,i]),l`
        <div class="settings-section">
            ${p&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${_} onChange=${(z)=>c(z.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${nn}
                    label="max session size"
                    value=${u}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${f}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${nn}
                    label="tool use budget"
                    value=${g}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${v}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${t} onChange=${(z)=>h(z.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var tc=J(()=>{e();On()});var hc={};un(hc,{__recordingsSettingsTest:()=>P0,RecordingsSection:()=>X0});function qr(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Mi(n){if(n==="full")return"full / trusted";if(n==="metadata")return"metadata only";return"redacted"}function Mr({children:n,type:r="neutral"}){return l`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function V0(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function or(n){return String(n||"").split(`
`).map((r)=>r.trim()).filter(Boolean)}function N0({recording:n,details:r,onDelete:i,onRefresh:_}){if(!n)return l`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let c=r?.meta||n,u=Array.isArray(r?.events)?r.events:[],f=u.reduce((o,$)=>o+(Array.isArray($.redactions)?$.redactions.length:0),0),s=u.reduce((o,$)=>{let b=$.kind||"event";return o[b]=(o[b]||0)+1,o},{});return l`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${c.title||c.id}</h4>
                    <code>${c.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(ki(c.id),"_blank","noopener,noreferrer")}>Playback</button>
                    <button onClick=${_}>Refresh</button>
                    <button class="danger" onClick=${()=>i(c)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${c.status||"—"}</strong>
                <span>Mode</span><strong>${Mi(c.mode)}</strong>
                <span>Chat</span><code>${c.chatJid||"—"}</code>
                <span>Started</span><strong>${qr(c.startedAt)}</strong>
                <span>Ended</span><strong>${qr(c.endedAt)}</strong>
                <span>Events</span><strong>${c.eventCount??u.length}</strong>
                <span>Redactions</span><strong>${f}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${sr(c.id,"json")}>Export JSON</a>
                <a href=${sr(c.id,"jsonl")}>Export JSONL</a>
                <a href=${sr(c.id,"html")}>Export standalone HTML</a>
            </div>
            <h4>Event summary</h4>
            ${u.length===0&&l`<p class="settings-hint">Open or refresh details to inspect trace events.</p>`}
            ${u.length>0&&l`
                <div class="settings-recording-event-summary">
                    ${Object.entries(s).map(([o,$])=>l`<${Mr}>${o}: ${$}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(u.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function X0({filter:n="",setStatus:r}){let[i,_]=w([]),[c,u]=w([]),[f,s]=w(!0),[o,$]=w(null),[b,g]=w(null),[v,t]=w(null),[h,p]=w(!1),[x,K]=w(V0),[W,T]=w(""),[F,U]=w("redacted"),[z,G]=w(!0),[Q,y]=w(""),[k,j]=w(""),[V,Z]=w('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[L,B]=w(null);P(()=>{let N=(m)=>{let fn=String(m?.detail?.chatJid||"").trim();if(fn)K(fn)};return window.addEventListener("piclaw:current-chat-changed",N),()=>window.removeEventListener("piclaw:current-chat-changed",N)},[]);let M=H(async(N=b)=>{s(!0),$(null);try{let m=await Bi(),fn=m.recordings||[];_(fn),u(m.active||[]);let Fn=fn.find((R)=>R.id===N)||fn[0]||null;if(g(Fn?.id||null),Fn?.id)t(await Nr(Fn.id));else t(null)}catch(m){$(m?.message||"Failed to load recordings.")}finally{s(!1)}},[b]);P(()=>{M()},[M]);let Y=D(()=>i.find((N)=>N.id===b)||null,[i,b]),E=D(()=>c.find((N)=>N.chatJid===x)||null,[c,x]),_n=String(n||"").trim().toLowerCase(),sn=D(()=>{if(!_n)return i;return i.filter((N)=>[N.id,N.title,N.chatJid,N.status,N.mode].some((m)=>String(m||"").toLowerCase().includes(_n)))},[i,_n]),wn=H(async(N)=>{if(g(N?.id||null),t(null),!N?.id)return;try{t(await Nr(N.id))}catch(m){r?.(m?.message||"Failed to load recording.","error")}},[r]),O=H(async()=>{if(h)return;p(!0);try{let N={keys:or(Q),patterns:or(k)},m=await Fi({chat_jid:x,title:W||void 0,mode:F,include_timeline_snapshot:z,timeline_snapshot_limit:80,redaction:N});r?.(`Recording started for ${x}.`,"success"),await M(m?.recording?.id)}catch(N){r?.(N?.message||"Failed to start recording.","error")}finally{p(!1)}},[h,x,Q,k,z,M,F,r,W]),X=H(async(N=E)=>{if(!N||h)return;p(!0);try{let m=await Wi({id:N.id});r?.(`Recording stopped for ${N.chatJid}.`,"success"),await M(m?.recording?.id)}catch(m){r?.(m?.message||"Failed to stop recording.","error")}finally{p(!1)}},[h,E,M,r]),I=H(async(N)=>{if(!N||h)return;if(!window.confirm(`Delete recording ${N.id}?

${N.title||""}`))return;p(!0);try{await ji(N.id),r?.("Recording deleted.","success"),await M(null)}catch(m){r?.(m?.message||"Failed to delete recording.","error")}finally{p(!1)}},[h,M,r]),xn=H(async()=>{try{let N=JSON.parse(V||"null"),m=await Ri(N,{mode:F,redaction:{keys:or(Q),patterns:or(k)}});B(m.preview)}catch(N){B({error:N?.message||"Preview failed."})}},[Q,k,F,V]);return l`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${x} onInput=${(N)=>K(N.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${W} onInput=${(N)=>T(N.target.value)} /></label>
                    <label>Mode<select value=${F} onChange=${(N)=>U(N.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${z} onChange=${(N)=>G(N.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${Q} onInput=${(N)=>y(N.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${k} onInput=${(N)=>j(N.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${E?l`<button onClick=${()=>X(E)} disabled=${h}>Stop current chat recording</button>`:l`<button onClick=${O} disabled=${h}>Start recording</button>`}
                    <button onClick=${()=>M()} disabled=${f}>Refresh</button>
                </div>
                ${c.length>0&&l`<div class="settings-recording-active-row">${c.map((N)=>l`<${Mr} type="active">REC ${N.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${V} onInput=${(N)=>Z(N.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${xn}>Preview redaction</button></div>
                ${L&&l`<pre>${JSON.stringify(L,null,2)}</pre>`}
            </details>

            ${f&&l`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${o&&l`<div class="settings-error-state">${o}</div>`}
            ${!f&&!o&&i.length===0&&l`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!f&&!o&&i.length>0&&l`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${sn.map((N)=>l`
                            <button class=${`settings-task-row ${N.id===b?"active":""}`} onClick=${()=>wn(N)}>
                                <span class="settings-task-row-main"><strong>${N.title||N.id}</strong><span>${N.chatJid} · ${qr(N.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${Mr} type=${N.status==="recording"?"active":"completed"}>${N.status}<//><${Mr}>${Mi(N.mode)}<//></span>
                                <span class="settings-task-row-times">${N.eventCount||0} events</span>
                            </button>
                        `)}
                        ${sn.length===0&&l`<p class="settings-hint">No recordings match “${n}”.</p>`}
                    </div>
                    <${N0} recording=${Y} details=${v} onDelete=${I} onRefresh=${()=>Y&&wn(Y)} />
                </div>
            `}
        </div>
    `}var P0;var bc=J(()=>{e();pn();P0={formatDateTime:qr,modeLabel:Mi,parseList:or}});var vc={};un(vc,{CompactionSection:()=>M0});function Q0(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),toolResultSemanticSummaryEnabled:Boolean(n.toolResultSemanticSummaryEnabled??!0),toolResultSemanticSummaryMaxInputChars:n.toolResultSemanticSummaryMaxInputChars??12000,toolResultSemanticSummaryMaxTokens:n.toolResultSemanticSummaryMaxTokens??320,toolResultSemanticSummaryTimeoutSec:n.toolResultSemanticSummaryTimeoutSec??12,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function qi(n){let r=String(n||"").trim();if(!r)return"—";let i=new Date(r);if(Number.isNaN(i.getTime()))return r;return i.toLocaleString()}function M0({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(180),[u,f]=w(15),[s,o]=w(360),[$,b]=w(75),[g,v]=w(0.5),[t,h]=w(!0),[p,x]=w(!0),[K,W]=w(12000),[T,F]=w(320),[U,z]=w(12),[G,Q]=w(!1),[y,k]=w(120),[j,V]=w([]),[Z,L]=w([]),[B,M]=w(!1),Y=C(""),E=C(null),_n=C(!0);P(()=>{return _n.current=!0,()=>{_n.current=!1}},[]);let sn=H((X)=>{let I=Q0(X);c(I.compactionTimeoutSec),f(I.compactionBackoffBaseMin),o(I.compactionBackoffMaxMin),b(I.compactionThresholdPercent),v(I.compactionBackoffDecayFactor),h(I.toolResultCompactionEnabled),x(I.toolResultSemanticSummaryEnabled),W(I.toolResultSemanticSummaryMaxInputChars),F(I.toolResultSemanticSummaryMaxTokens),z(I.toolResultSemanticSummaryTimeoutSec),Q(I.progressWatchdogEnabled),k(I.progressWatchdogTimeoutSec),V(I.compactionBackoffs),L(I.progressWatchdogPhases),Y.current=JSON.stringify({compactionTimeoutSec:I.compactionTimeoutSec,compactionBackoffBaseMin:I.compactionBackoffBaseMin,compactionBackoffMaxMin:I.compactionBackoffMaxMin,compactionThresholdPercent:I.compactionThresholdPercent,compactionBackoffDecayFactor:I.compactionBackoffDecayFactor,toolResultCompactionEnabled:I.toolResultCompactionEnabled,toolResultSemanticSummaryEnabled:I.toolResultSemanticSummaryEnabled,toolResultSemanticSummaryMaxInputChars:I.toolResultSemanticSummaryMaxInputChars,toolResultSemanticSummaryMaxTokens:I.toolResultSemanticSummaryMaxTokens,toolResultSemanticSummaryTimeoutSec:I.toolResultSemanticSummaryTimeoutSec,progressWatchdogEnabled:I.progressWatchdogEnabled,progressWatchdogTimeoutSec:I.progressWatchdogTimeoutSec})},[]);P(()=>{sn(n||{})},[n,sn]);let wn=D(()=>JSON.stringify({compactionTimeoutSec:_,compactionBackoffBaseMin:u,compactionBackoffMaxMin:s,compactionThresholdPercent:$,compactionBackoffDecayFactor:g,toolResultCompactionEnabled:t,toolResultSemanticSummaryEnabled:p,toolResultSemanticSummaryMaxInputChars:K,toolResultSemanticSummaryMaxTokens:T,toolResultSemanticSummaryTimeoutSec:U,progressWatchdogEnabled:G,progressWatchdogTimeoutSec:y}),[_,u,s,$,g,t,p,K,T,U,G,y]);P(()=>{if(wn===Y.current)return;if(E.current)clearTimeout(E.current);return E.current=setTimeout(async()=>{if(!_n.current)return;try{r?.("Saving compaction settings…","info");let X=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:wn}),I=await X.json().catch(()=>({}));if(!_n.current)return;if(!X.ok||!I?.ok||!I?.settings){r?.(I?.error||"Failed to save compaction settings.","error");return}Y.current=wn,i?.(I.settings),sn({...n||{},...I.settings||{}}),r?.("Compaction settings saved.","success"),M(!0),setTimeout(()=>{if(_n.current)M(!1),r?.(null)},4000)}catch(X){if(console.warn("[settings/compaction] Failed to persist compaction settings.",X),_n.current)r?.("Failed to save compaction settings.","error")}},800),()=>{if(E.current)clearTimeout(E.current)}},[wn,i,r,sn,n]);let O=H(async(X)=>{try{r?.(`Clearing compaction suppression for ${X}…`,"info");let I=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:X})}),xn=await I.json().catch(()=>({}));if(!I.ok||!xn?.ok||!xn?.settings){r?.(xn?.error||"Failed to clear compaction suppression.","error");return}i?.(xn.settings),sn({...n||{},...xn.settings||{}}),r?.(`Cleared compaction suppression for ${X}.`,"success")}catch(I){console.warn("[settings/compaction] Failed to clear compaction suppression.",I),r?.("Failed to clear compaction suppression.","error")}},[sn,i,r,n]);return l`
        <div class="settings-section">
            ${B&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Enable tool-result compaction</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${t} onChange=${(X)=>h(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">When disabled, large tool results stay inline and are not externalized into searchable tool-output handles.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summaries for compacted tool results</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${p} onChange=${(X)=>x(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">When enabled, compacted outputs include a semantic summary generated with the active model (preview fallback on failure).</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summary input limit (chars)</label>
                <${nn}
                    label="semantic summary input limit"
                    value=${K}
                    min=${500}
                    max=${200000}
                    fallback=${12000}
                    width="100px"
                    disabled=${!p}
                    onChange=${W}
                />
                <span class="settings-hint" style="margin:0">Maximum characters sampled from full tool output for semantic summarization.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary output max tokens</label>
                <${nn}
                    label="semantic summary max tokens"
                    value=${T}
                    min=${64}
                    max=${4096}
                    fallback=${320}
                    width="90px"
                    disabled=${!p}
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">Upper bound for generated summary length.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary timeout (sec)</label>
                <${nn}
                    label="semantic summary timeout"
                    value=${U}
                    min=${1}
                    max=${300}
                    fallback=${12}
                    width="90px"
                    disabled=${!p}
                    onChange=${z}
                />
                <span class="settings-hint" style="margin:0">Abort semantic summary generation after this timeout and fall back to preview compaction.</span>
            </div>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${nn}
                    label="compaction threshold"
                    value=${$}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${b}
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
                    value=${s}
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
                    value=${Math.round(g*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(X)=>v(X/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${G} onChange=${(X)=>Q(Boolean(X.target.checked))} />
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
                    disabled=${!G}
                    onChange=${k}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${j.length===0?l`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:l`
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
                            ${j.map((X)=>l`
                                <tr>
                                    <td><code>${X.chatJid}</code></td>
                                    <td>${X.failureCount}</td>
                                    <td>${qi(X.backoffUntil)}</td>
                                    <td title=${X.lastErrorMessage||""}>${X.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>O(X.chatJid)}>
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
            ${Z.length===0?l`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:l`
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
                            ${Z.map((X)=>l`
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
    `}var Kc=J(()=>{e();On()});function zc(n){let r=String(n||"").trim().toLowerCase();if(!r)return null;let i=Z0[r]||r;if(/^f(?:[1-9]|1[0-2])$/.test(i))return i;if(I0.has(i))return i;if(i.length===1)return i;if(/^[a-z0-9]+$/.test(i))return i;return null}function En(n){let r=String(n||"").trim();if(!r)return null;let i=r.split("+").map((u)=>u.trim()).filter(Boolean);if(!i.length)return null;let _={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let u of i){let f=u.toLowerCase(),s=A0[f];if(s){_[s]=!0;continue}if(_.key)return null;let o=zc(u);if(!o||o==="escape")return null;_.key=o}if(!_.key)return null;let c=[];if(_.ctrl)c.push("ctrl");if(_.meta)c.push("meta");if(_.alt)c.push("alt");if(_.shift)c.push("shift");return c.push(_.key),c.join("+")}function Bc(n){return String(n||"").split(/[\n,]/).map((r)=>En(r)).filter((r)=>Boolean(r))}function Rn(n){return n.join(", ")}function Zi(){let n=Q_(pc);if(!n||typeof n!=="object")return{};let r={};for(let i of gr){let _=n[i.id];if(!Array.isArray(_))continue;let c=_.map((u)=>En(String(u||""))).filter((u)=>Boolean(u));r[i.id]=[...new Set(c)]}return r}function Ai(n){if(ln(pc,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function Fc(n){return q0.get(n)}function $r(n){let r=Zi()[n];if(Array.isArray(r))return r;return[...Fc(n).defaultBindings]}function Wc(n,r){let i=Zi(),_=Fc(n).defaultBindings,c=[...new Set(r.map((u)=>En(u)).filter((u)=>Boolean(u)))];if(c.length===_.length&&c.every((u,f)=>u===_[f]))delete i[n];else i[n]=c;Ai(i)}function Ii(n){if(!n){Ai({});return}let r=Zi();delete r[n],Ai(r)}function Ar(){let n={};for(let r of gr)n[r.id]=$r(r.id);return n}function L0(n){let r=typeof n==="string"?n:"";if(!r)return"";if(r.length===1)return r.toLowerCase();return zc(r)||r.toLowerCase()}function D0(n){let r=En(n);if(!r)return null;let i={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let _ of r.split("+")){if(_==="ctrl"||_==="meta"||_==="alt"||_==="shift"){i[_]=!0;continue}i.key=_}return i.key?i:null}function Y0(n,r){let i=D0(r);if(!i)return!1;if(L0(n?.key)!==i.key)return!1;let c=!i.shift&&i.key.length===1&&/[^a-z0-9]/i.test(i.key);return Boolean(n?.ctrlKey)===i.ctrl&&Boolean(n?.metaKey)===i.meta&&Boolean(n?.altKey)===i.alt&&(c||Boolean(n?.shiftKey)===i.shift)}function oo(n,r){return $r(r).some((i)=>Y0(n,i))}var pc="piclaw_keyboard_shortcuts_v1",gr,q0,A0,Z0,I0;var jc=J(()=>{gr=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],q0=new Map(gr.map((n)=>[n.id,n])),A0={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},Z0={esc:"escape",return:"enter",spacebar:"space"},I0=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var kc={};un(kc,{KeyboardSection:()=>J0});function C0(n,r,i){let _=String(n||"").trim().toLowerCase();if(!_)return!0;return[r.label,r.description,i,...r.defaultBindings||[]].some((c)=>String(c||"").toLowerCase().includes(_))}function J0({filter:n="",setStatus:r}){let[i,_]=w(()=>{let o=Ar();return Object.fromEntries(Object.entries(o).map(([$,b])=>[$,Rn(b)]))});P(()=>{let o=()=>{let $=Ar();_(Object.fromEntries(Object.entries($).map(([b,g])=>[b,Rn(g)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",o),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",o)},[]);let c=D(()=>gr.filter((o)=>{let $=String(i[o.id]||"");return C0(n,o,$)}),[i,n]),u=(o)=>{let $=String(i[o]||"").trim(),g=($?$.split(/[\n,]/).map((t)=>t.trim()).filter(Boolean):[]).filter((t)=>!En(t));if(g.length>0){r?.(`Invalid shortcut: ${g[0]}. Escape is reserved and cannot be rebound.`,"error");return}let v=Bc($);Wc(o,v),_((t)=>({...t,[o]:Rn($r(o))})),r?.("Keyboard shortcuts saved.","success")},f=(o)=>{Ii(o),_(($)=>({...$,[o]:Rn($r(o))})),r?.("Keyboard shortcut reset to default.","success")};return l`
        <div class="settings-section">
            <h3>Keyboard</h3>
            <p class="settings-hint">
                Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.
                <code>Escape</code> is reserved for dismiss/abort and cannot be rebound.
            </p>
            <p class="settings-hint">
                <code>/help</code> and typing <code>"</code> outside the compose box open this pane.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:18px; justify-content:flex-end;">
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{Ii();let o=Ar();_(Object.fromEntries(Object.entries(o).map(([$,b])=>[$,Rn(b)]))),r?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${c.map((o)=>l`
                    <div class="settings-shortcut-card" key=${o.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${o.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${o.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${Rn(o.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${i[o.id]||""}
                                placeholder=${Rn(o.defaultBindings)}
                                onInput=${($)=>_((b)=>({...b,[o.id]:$.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>u(o.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>f(o.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${c.length===0&&l`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var Rc=J(()=>{e();jc()});function Tc(n,r=Li){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(300,Math.max(15,Math.round(i)))}function Gc(n,r=Di){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(8,Math.max(0,Math.round(i)))}function Yi(){return{refreshIntervalSec:Tc(gi(Hc,Li),Li),folderPreviewDepth:Gc(gi(Uc,Di),Di)}}function Vc(n={}){let r=Yi(),i={refreshIntervalSec:Tc(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:r.refreshIntervalSec,r.refreshIntervalSec),folderPreviewDepth:Gc(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:r.folderPreviewDepth,r.folderPreviewDepth)};if(ln(Hc,String(i.refreshIntervalSec)),ln(Uc,String(i.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(O0,{detail:{settings:i}}));return i}var O0="piclaw:workspace-client-settings-updated",Hc="workspaceRefreshIntervalSec",Uc="workspaceFolderPreviewDepth",Li=60,Di=3;var Nc=()=>{};var Pc={};un(Pc,{WorkspaceSection:()=>E0});function Xc(n={}){let r=n.workspaceSettings||{};return{webTerminalEnabled:r.webTerminalEnabled!==!1,vncAllowDirect:r.vncAllowDirect!==!1,treeMaxDepth:r.treeMaxDepth??4,treeMaxEntries:r.treeMaxEntries??5000}}function E0({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(!0),[u,f]=w(!0),[s,o]=w(4),[$,b]=w(5000),[g,v]=w(60),[t,h]=w(3),[p,x]=w(!1),[K,W]=w(!1),T=C(""),F=C(null),U=C(null),z=C(null),G=C(!0);P(()=>{return G.current=!0,()=>{if(G.current=!1,F.current)clearTimeout(F.current);if(U.current)clearTimeout(U.current);if(z.current)clearTimeout(z.current)}},[]);let Q=H((j)=>{let V=Xc(j),Z=Yi();c(V.webTerminalEnabled),f(V.vncAllowDirect),o(V.treeMaxDepth),b(V.treeMaxEntries),v(Z.refreshIntervalSec),h(Z.folderPreviewDepth),T.current=JSON.stringify(V)},[]);P(()=>{Q(n||{})},[n,Q]);let y=D(()=>JSON.stringify(Xc({workspaceSettings:{webTerminalEnabled:_,vncAllowDirect:u,treeMaxDepth:s,treeMaxEntries:$}})),[_,u,s,$]);P(()=>{if(y===T.current)return;if(F.current)clearTimeout(F.current);return F.current=setTimeout(async()=>{if(!G.current)return;let j=document.activeElement;if(j&&j.closest?.(".settings-number-stepper"))return;try{let V=await Vi(JSON.parse(y));if(!G.current||!V?.ok||!V?.settings)return;if(T.current=y,i?.({workspaceSettings:V.settings}),r?.(null),x(!0),U.current)clearTimeout(U.current);U.current=setTimeout(()=>{if(G.current)x(!1)},4000)}catch(V){r?.(String(V?.message||V),"error")}},800),()=>{if(F.current)clearTimeout(F.current)}},[y,i,r]);let k=H((j)=>{let V=Vc(j);if(v(V.refreshIntervalSec),h(V.folderPreviewDepth),W(!0),z.current)clearTimeout(z.current);z.current=setTimeout(()=>{if(G.current)W(!1)},3000)},[]);return l`
        <div class="settings-section">
            ${p&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${K&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${_} onChange=${(j)=>c(j.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${u} onChange=${(j)=>f(j.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${nn}
                    label="workspace tree max depth"
                    value=${s}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${o}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${nn}
                    label="workspace tree max entries"
                    value=${$}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${b}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${nn}
                    label="workspace refresh interval"
                    value=${g}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(j)=>k({refreshIntervalSec:j})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${nn}
                    label="folder preview scan depth"
                    value=${t}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(j)=>k({folderPreviewDepth:j})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var Qc=J(()=>{e();pn();Nc();On()});var Mc={};un(Mc,{EnvironmentSection:()=>d0});function Ci(n={}){let r=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(r.variables)?r.variables:[],overrides:r.overrides&&typeof r.overrides==="object"?r.overrides:{},count:Number(r.count||0),overrideCount:Number(r.overrideCount||0),keychainEnvNames:Array.isArray(r.keychainEnvNames)?r.keychainEnvNames:[]}}function d0({settingsData:n,filter:r="",setStatus:i,mergeSettingsData:_}){let[c,u]=w(()=>Ci(n||{})),[f,s]=w({}),[o,$]=w(""),[b,g]=w(""),[v,t]=w(null);P(()=>{u(Ci(n||{})),s({})},[n]);let h=H((F)=>{let U=Ci({environmentSettings:F?.settings||F});return u(U),_?.({environmentSettings:U}),s({}),U},[_]),p=H(async()=>{try{let F=await Ni();if(F?.ok)h(F.settings);i?.("Environment refreshed.","info")}catch(F){i?.(String(F?.message||F),"error")}},[h,i]),x=H(async(F,U)=>{let z=String(F||"").trim();if(!z)return;t(z);try{let G=await Xr({action:"set",name:z,value:String(U??"")});if(G?.ok)h(G.settings);if(i?.(`Saved environment override for ${z}.`,"info"),z===o.trim())$(""),g("")}catch(G){i?.(String(G?.message||G),"error")}finally{t(null)}},[h,o,i]),K=H(async(F)=>{let U=String(F||"").trim();if(!U)return;t(U);try{let z=await Xr({action:"clear",name:U});if(z?.ok)h(z.settings);i?.(`Cleared environment override for ${U}.`,"info")}catch(z){i?.(String(z?.message||z),"error")}finally{t(null)}},[h,i]),W=D(()=>{let F=String(r||"").trim().toLowerCase(),U=Array.isArray(c.variables)?c.variables:[];if(!F)return U;return U.filter((z)=>{return`${z?.name||""} ${z?.value||""} ${z?.source||""}`.toLowerCase().includes(F)})},[c.variables,r]),T=H((F,U)=>{s((z)=>({...z||{},[F]:U}))},[]);return l`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${p}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${o}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(F)=>$(F.target.value)}
                    />
                    <input
                        type="text"
                        value=${b}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(F)=>g(F.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!o.trim()||v===o.trim()}
                        onClick=${()=>x(o,b)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${c.count} variables visible • ${c.overrideCount} overrides active • ${c.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${W.map((F)=>{let U=String(F?.name||""),z=Object.prototype.hasOwnProperty.call(f,U)?f[U]:F.value,G=z!==F.value,Q=v===U;return l`
                        <div class="settings-tool-row" key=${U} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${U}>${U}</span>
                            <input
                                type="text"
                                value=${z}
                                spellcheck="false"
                                onInput=${(y)=>T(U,y.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${F.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${F.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${Q||!G} onClick=${()=>x(U,z)}>Save</button>
                                <button type="button" disabled=${Q||!F.overridden} onClick=${()=>K(U)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${W.length===0&&l`<p class="settings-hint">No environment variables match "${r}".</p>`}
            </div>
        </div>
    `}var qc=J(()=>{e();pn()});var Ac={};un(Ac,{ProvidersSection:()=>e0});function S0(n){switch(n){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function e0({providers:n,setStatus:r}){let[i,_]=w(null),[c,u]=w(null),[f,s]=w({}),o=H((x,K)=>{s((W)=>({...W,[x]:K}))},[]),$=H(async(x)=>{let K=(f.apiKey||"").trim();if(!K){r?.("API key cannot be empty.","error");return}_(x),r?.(`Configuring ${x}…`,"info");try{let W=JSON.stringify({provider:x,method:"api_key",api_key:K}),T=await Kn("default",`/login __step2 ${W}`,null,[]);if(T?.command?.status==="error"){r?.(T.command.message,"error");return}r?.(T?.command?.message||`${x} configured.`,"success"),u(null),s({})}catch(W){r?.(String(W.message||W),"error")}finally{_(null)}},[f,r]),b=H(async(x,K)=>{_(x),r?.(`Configuring ${x}…`,"info");try{let W={provider:x,method:"custom"};for(let U of K.customFields||[])W[U.key]=(f[U.key]||"").trim();let T=JSON.stringify(W),F=await Kn("default",`/login __step2 ${T}`,null,[]);if(F?.command?.status==="error"){r?.(F.command.message,"error");return}r?.(F?.command?.message||`${x} configured.`,"success"),u(null),s({})}catch(W){r?.(String(W.message||W),"error")}finally{_(null)}},[f,r]),g=H(async(x)=>{_(x),r?.(`Starting OAuth for ${x}…`,"info");try{let K=JSON.stringify({provider:x}),T=(await Kn("default",`/login __step1 ${K}`,null,[]))?.command?.message||"";if(T.includes("http")){let F=T.match(/(https?:\/\/[^\s)]+)/);if(F)window.open(F[1],"_blank","noopener"),r?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else r?.(T,"success")}else r?.(T||`OAuth flow started for ${x}. Check the chat.`,"success")}catch(K){r?.(String(K.message||K),"error")}finally{_(null)}},[r]),v=H(async(x)=>{if(i)return;_(x),r?.(`Logging out ${x}…`,"info");try{await Kn("default",`/logout ${x}`,null,[]),r?.(`Logged out ${x}. Restart may be needed.`,"success")}catch(K){r?.(String(K.message||K),"error")}finally{_(null)}},[i,r]),t=n||[],h=(x)=>c===x,p=(x)=>{u((K)=>K===x?null:x),s({})};return l`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${t.map((x)=>l`
                    <div class=${`settings-provider-card${x.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!x.configured&&p(x.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${x.name}</strong>
                                <span class="settings-provider-id">${x.id}</span>
                                ${x.configured&&l`<span class="settings-tag settings-tag-skill">${S0(x.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${x.hasOAuth&&l`<span class="settings-tag">OAuth</span>`}
                                ${x.hasApiKey&&l`<span class="settings-tag">API Key</span>`}
                                ${x.isCustom&&l`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${x.configured?l`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${i===x.id} onClick=${(K)=>{K.stopPropagation(),v(x.id)}}
                                    >${i===x.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${i===x.id} onClick=${(K)=>{K.stopPropagation(),p(x.id)}}
                                    >Reconfigure</button>
                                `:l`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${i===x.id} onClick=${(K)=>{K.stopPropagation(),p(x.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${h(x.id)&&l`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${x.hasOAuth&&l`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${i===x.id}
                                            onClick=${()=>g(x.id)}>
                                            ${i===x.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${x.hasApiKey&&l`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${f.apiKey||""}
                                                onInput=${(K)=>o("apiKey",K.target.value)}
                                                placeholder=${x.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===x.id||!(f.apiKey||"").trim()}
                                                onClick=${()=>$(x.id)}>
                                                ${i===x.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${x.isCustom&&l`
                                    <div class="settings-provider-method">
                                        ${(x.customFields||[]).map((K)=>l`
                                            <div class="settings-provider-field-row">
                                                <label>${K.label}${K.required?" *":""}</label>
                                                <input type="text" value=${f[K.key]||""}
                                                    onInput=${(W)=>o(K.key,W.target.value)}
                                                    placeholder=${K.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===x.id}
                                                onClick=${()=>b(x.id,x)}>
                                                ${i===x.id?"Configuring…":"Save configuration"}
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
    `}var Zc=J(()=>{e();pn()});var Ic={};un(Ic,{ModelsSection:()=>il});function nl(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function rl({thinkingLevel:n,supportsThinking:r,provider:i,availableLevels:_,onSetLevel:c,disabled:u}){let f=nl(i)?m0:a0,s=_&&_.length>1?_:["off","minimal","low","medium","high"],o=Math.max(0,s.indexOf(n??"off"));if(!r)return l`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return l`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${f[s[o]]||s[o]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${s.length-1} step="1" value=${o} disabled=${u}
                    onInput=${($)=>c(s[parseInt($.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${s.map(($,b)=>l`<span class=${b===o?"active":""} onClick=${()=>!u&&c($)}>${f[$]||$}</span>`)}
                </div>
            </div>
        </div>
    `}function il({filter:n=""}){let[r,i]=w(null),[_,c]=w(!1),[u,f]=w("off"),[s,o]=w(!1),[$,b]=w(["off"]),[g,v]=w(!1),[t,h]=w(!1),[p,x]=w(!1),K=H(async()=>{let j=await Xi();if(i(j),j.thinking_level)f(j.thinking_level);if(o(Boolean(j.supports_thinking)),v(Boolean(j.scoped_models_only)),Array.isArray(j.available_thinking_levels)&&j.available_thinking_levels.length>0)b(j.available_thinking_levels);return j},[]);P(()=>{K().catch((j)=>{console.warn("[settings/models] Failed to load models.",j),i({models:[],model_options:[]})})},[]);let W=H(async(j)=>{if(_)return;c(!0);try{await Kn("default",`/model ${j}`,null,[]),await K()}catch(V){console.error("Failed to switch model:",V)}finally{c(!1)}},[_,K]),T=H(async(j)=>{if(t)return;h(!0),v(Boolean(j));try{let V=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scopedModelsOnly:Boolean(j)})}),Z=await V.json().catch(()=>({}));if(!V.ok||!Z?.ok)throw Error(Z?.error||"Failed to save scoped model setting.");await K()}catch(V){console.error("Failed to set scoped model filtering:",V),await K().catch((Z)=>{console.warn("[settings/models] Reload after scoped model filtering failure failed.",Z)})}finally{h(!1)}},[t,K]),F=H(async(j)=>{if(p)return;x(!0),f(j);try{let V=await Kn("default",`/thinking ${j}`,null,[]);if(V?.command?.thinking_level)f(V.command.thinking_level);o(V?.command?.supports_thinking!==!1),await K()}catch(V){console.error("Failed to set thinking:",V),await K().catch((Z)=>{console.warn("[settings/models] Reload after thinking change failure failed.",Z)})}finally{x(!1)}},[p,K]);if(!r)return l`<div class="settings-loading">Loading models\u2026</div>`;let U=r.model_options||[],z=r.current,Q=U.find((j)=>j.label===z)?.provider||"",y=n.toLowerCase(),k=y?U.filter((j)=>j.label.toLowerCase().includes(y)||(j.provider||"").toLowerCase().includes(y)):U;return l`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-row" style="padding:0 0 10px 0; align-items:flex-start">
                <label>Scoped models only</label>
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0">
                    <label style="display:flex; align-items:center; gap:8px; font-weight:500">
                        <input type="checkbox" checked=${g} disabled=${t} onChange=${(j)=>T(j.target.checked)} />
                        Use Pi <code>enabledModels</code> for Piclaw model lists
                    </label>
                    <span class="settings-hint" style="margin:0">
                        Filters this picker and the <code>list_models</code> tool. TUI model selection remains unchanged.
                    </span>
                </div>
            </div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${k.map((j)=>l`
                            <tr class=${j.label===z?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${j.label===z} disabled=${_} onChange=${()=>W(j.label)} /></td>
                                <td>${j.name||j.label}</td><td>${j.provider}</td>
                                <td>${j.context_window?(j.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${j.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${k.length===0&&l`<tr><td colspan="5" class="settings-empty">No models match "${n}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${rl}
                    thinkingLevel=${u}
                    supportsThinking=${s}
                    provider=${Q}
                    availableLevels=${$}
                    onSetLevel=${F}
                    disabled=${p||_} />
            </div>
        </div>
    `}var m0,a0;var Lc=J(()=>{e();pn();m0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},a0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function Ei(n){let r=String(n||"").trim().toLowerCase();if(!r)return"default";if(r==="solarized-dark"||r==="solarized-light")return"solarized";if(r==="github-dark"||r==="github-light")return"github";if(r==="tokyo-night")return"tokyo";return r}function Jc(n){if(!n)return null;let r=String(n).trim();if(!r)return null;let i=r.startsWith("#")?r.slice(1):r;if(!/^[0-9a-fA-F]{3}$/.test(i)&&!/^[0-9a-fA-F]{6}$/.test(i))return null;let _=i.length===3?i.split("").map((u)=>u+u).join(""):i,c=parseInt(_,16);return{r:c>>16&255,g:c>>8&255,b:c&255,hex:`#${_.toLowerCase()}`}}function cl(n,r){try{if(document.body){n.style.display="none",document.body.appendChild(n);let i=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),i}}catch{return r}return r}function ul(n){if(!n||typeof document>"u")return null;let r=String(n).trim();if(!r)return null;let i=document.createElement("div");if(i.style.color="",i.style.color=r,!i.style.color)return null;let c=cl(i,i.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!c)return null;let u=parseInt(c[1],10),f=parseInt(c[2],10),s=parseInt(c[3],10);if(![u,f,s].every(($)=>Number.isFinite($)))return null;let o=`#${[u,f,s].map(($)=>$.toString(16).padStart(2,"0")).join("")}`;return{r:u,g:f,b:s,hex:o}}function Pn(n){return Jc(n)||ul(n)}function di(n,r,i){let _=Math.round(n.r+(r.r-n.r)*i),c=Math.round(n.g+(r.g-n.g)*i),u=Math.round(n.b+(r.b-n.b)*i);return`rgb(${_} ${c} ${u})`}function Zr(n,r){return`rgba(${n.r}, ${n.g}, ${n.b}, ${r})`}function fl(n){let r=n.r/255,i=n.g/255,_=n.b/255,c=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4),u=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),f=_<=0.03928?_/12.92:Math.pow((_+0.055)/1.055,2.4);return 0.2126*c+0.7152*u+0.0722*f}function ll(n){return fl(n)>0.4?"#000000":"#ffffff"}function Oc(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Si(n){return Dc[n]||Dc.default}function sl(n){return n.mode==="auto"?Oc():n.mode}function Ec(n,r){let i=Si(n);if(r==="dark"&&i.dark)return i.dark;if(r==="light"&&i.light)return i.light;return i.dark||i.light||Bn}function zn(n,r,i){let _=Pn(n);if(!_)return n;return di(_,r,i)}function dc(n,r,i){let _=Pn(r);if(!_)return n;let u=Jc(i==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:zn(n.bgPrimary,_,0.08),bgSecondary:zn(n.bgSecondary,_,0.12),bgHover:zn(n.bgHover,_,0.16),textPrimary:zn(n.textPrimary,_,i==="dark"?0.08:0.06),textSecondary:zn(n.textSecondary,_,i==="dark"?0.12:0.1),borderColor:zn(n.borderColor,_,0.1),accent:_.hex,accentHover:u?di(_,u,0.18):_.hex,warning:zn(n.warning||Bn.warning,_,0.14),danger:zn(n.danger,_,0.16),success:zn(n.success,_,0.16)}}function ol(n,r){let i=Pn(n?.warning);if(i)return i.hex;let _=Pn(r==="dark"?Dr.warning:Bn.warning)||Pn(Bn.warning),c=Pn(n?.accent);if(_&&c)return di(_,c,r==="dark"?0.18:0.14);return r==="dark"?Dr.warning:Bn.warning}function gl(n,r){if(typeof document>"u")return;let i=document.documentElement,_=n.accent,c=Pn(_),u=c?Zr(c,r==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,f=c?Zr(c,r==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",s=c?Zr(c,r==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",o=c?ll(c):r==="dark"?"#000000":"#ffffff",$=c?Zr(c,r==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",b=ol(n,r),g={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":_,"--accent-hover":n.accentHover||_,"--accent-color-alpha":$,"--accent-soft":f,"--accent-soft-strong":s,"--accent-contrast-text":o,"--warning-color":b,"--danger-color":n.danger||Bn.danger,"--success-color":n.success||Bn.success,"--search-highlight-color":u||"rgba(29, 155, 240, 0.2)"};Object.entries(g).forEach(([v,t])=>{if(t)i.style.setProperty(v,t)})}function $l(){if(typeof document>"u")return;let n=document.documentElement;_l.forEach((r)=>n.style.removeProperty(r))}function dn(n,r={}){if(typeof document>"u")return null;let i=typeof r.id==="string"&&r.id.trim()?r.id.trim():null,_=i?document.getElementById(i):document.querySelector(`meta[name="${n}"]`);if(!_)_=document.createElement("meta"),document.head.appendChild(_);if(_.setAttribute("name",n),i)_.setAttribute("id",i);return _}function Yc(n){let r=Ei(Qn?.theme||"default"),i=Qn?.tint?String(Qn.tint).trim():null,_=Ec(r,n);if(r==="default"&&i)_=dc(_,i,n);if(_?.bgPrimary)return _.bgPrimary;return n==="dark"?Dr.bgPrimary:Bn.bgPrimary}function wl(n,r){if(typeof document>"u")return;let i=dn("theme-color",{id:"dynamic-theme-color"});if(i&&n)i.removeAttribute("media"),i.setAttribute("content",n);let _=dn("theme-color",{id:"theme-color-light"});if(_)_.setAttribute("media","(prefers-color-scheme: light)"),_.setAttribute("content",Yc("light"));let c=dn("theme-color",{id:"theme-color-dark"});if(c)c.setAttribute("media","(prefers-color-scheme: dark)"),c.setAttribute("content",Yc("dark"));let u=dn("msapplication-TileColor");if(u&&n)u.setAttribute("content",n);let f=dn("msapplication-navbutton-color");if(f&&n)f.setAttribute("content",n);let s=dn("apple-mobile-web-app-status-bar-style");if(s)s.setAttribute("content",r==="dark"?"black-translucent":"default")}function yl(){if(typeof window>"u")return;let n={...Qn,mode:Cc};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function xl(){if(typeof window>"u")return"web:default";try{let r=new URL(window.location.href).searchParams.get("chat_jid");return r&&r.trim()?r.trim():"web:default"}catch{return"web:default"}}function tl(n){if(typeof document>"u"||!n)return;let r=document.documentElement;if(r?.style)r.style.background=n;if(document.body?.style)document.body.style.background=n}function ei(n,r={}){if(typeof window>"u"||typeof document>"u")return;let i=Ei(n?.theme||"default"),_=n?.tint?String(n.tint).trim():null,c=Si(i),u=sl(c),f=Ec(i,u);Qn={theme:i,tint:_},Cc=u;let s=document.documentElement;s.dataset.theme=u,s.dataset.colorTheme=i,s.dataset.tint=_?String(_):"",s.style.colorScheme=u;let o=f;if(i==="default"&&_)o=dc(f,_,u);if(i==="default"&&!_)$l();else gl(o,u);if(tl(o.bgPrimary),wl(o.bgPrimary,u),yl(),r.persist!==!1)if(ln(Oi,i),_)ln(Lr,_);else ln(Lr,"")}function Ir(){if(Si(Qn.theme).mode!=="auto")return;ei(Qn,{persist:!1})}function hl(){if(typeof window>"u")return;let n=Ei(kn(Oi)||"default"),r=(()=>{let i=kn(Lr);return i?i.trim():null})();ei({theme:n,tint:r},{persist:!1})}function ko(){if(typeof window>"u")return()=>{};if(hl(),window.matchMedia&&!Ji){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Ir);else if(n.addListener)n.addListener(Ir);return Ji=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Ir);else if(n.removeListener)n.removeListener(Ir);Ji=!1}}return()=>{}}function mi(n){if(!n||typeof n!=="object")return;let r=xl(),i=n.chat_jid||n.chatJid||null,_=n.theme??n.name??n.colorTheme,c=n.tint??null;if(!i||i===r)ei({theme:_||"default",tint:c},{persist:!1});ln(Oi,_||"default"),ln(Lr,c||"")}function Ro(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return Oc()}var Oi="piclaw_theme",Lr="piclaw_tint",Bn,Dr,Dc,_l,Qn,Cc="light",Ji=!1;var Sc=J(()=>{Bn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Dr={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Dc={default:{label:"Default",mode:"auto",light:Bn,dark:Dr},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},_l=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],Qn={theme:"default",tint:null}});function bl(n){return M_.map((r)=>({value:r,label:q_[r],active:r===n}))}function ec({variant:n="inline",onChange:r}={}){let{locale:i,setLocale:_,t:c}=Ur(),u=bl(i),f=(s)=>{let o=s?.currentTarget?.value;_(o),r?.(o)};return l`
    <div class=${`language-switcher language-switcher-${n}`} role="none">
      <label class="language-switcher-label" for="language-switcher-select">${c("language.label")}</label>
      <select
        id="language-switcher-select"
        class="language-switcher-select"
        value=${i}
        aria-label=${c("language.label")}
        onClick=${(s)=>s.stopPropagation()}
        onChange=${f}
      >
        ${u.map((s)=>l`
          <option key=${s.value} value=${s.value}>${s.label}</option>
        `)}
      </select>
    </div>
  `}var mc=J(()=>{e();yi()});var nu={};un(nu,{ThemeSection:()=>vl});function ac(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function vl({themes:n,colorKeys:r,settingsData:i,setStatus:_,mergeSettingsData:c}){let[u,f]=w("default"),[s,o]=w(""),[$,b]=w(!1),g=C(""),v=C(null),t=C(!0);P(()=>{return t.current=!0,()=>{t.current=!1}},[]);let h=H((T)=>{let F=ac(T);f(F.uiTheme),o(F.uiTint),g.current=JSON.stringify(F)},[]);P(()=>{if(i){h(i);return}h({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[i,h]);let p=H((T,F)=>{mi({theme:T,tint:F||null}),f(T||"default"),o(F||"")},[]),x=D(()=>JSON.stringify(ac({uiTheme:u,uiTint:s})),[u,s]);P(()=>{if(x===g.current)return;if(v.current)clearTimeout(v.current);return v.current=setTimeout(async()=>{if(!t.current)return;b(!0);try{let T=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:x}),F=await T.json().catch(()=>({}));if(!t.current)return;if(!T.ok||!F?.ok||!F?.settings){_?.(F?.error||"Failed to save appearance settings.","error");return}g.current=x,c?.(F.settings),_?.("Appearance synced across clients.","success")}catch(T){if(!t.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",T),_?.("Failed to save appearance settings.","error")}finally{if(t.current)b(!1)}},250),()=>{if(v.current)clearTimeout(v.current)}},[x,c,_]);let K=r||[],W=n||[];return l`
        <div class="settings-section">
            <div class="settings-row settings-language-row">
                <${ec} variant="inline" />
            </div>
            ${$&&l`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${u==="default"}
                        onChange=${()=>p("default",s)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${s||"#1d9bf0"}
                        onInput=${(T)=>{let F=T.target.value;if(o(F),u==="default")mi({theme:"default",tint:F})}} />
                    ${s&&l`
                        <button class="settings-tint-clear" onClick=${()=>p("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${s||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${K.map((T)=>l`<th class="settings-swatch-header">${T.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${W.filter((T)=>T.name!=="default").map((T)=>l`
                        <tr class=${T.name===u?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>p(T.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${T.name===u} onChange=${()=>p(T.name,"")} /></td>
                            <td><strong>${T.label}</strong></td>
                            <td>${T.mode}</td>
                            ${K.map((F)=>{let U=T.colors?.[F];return l`<td class="settings-swatch-cell">
                                    ${U?l`<span class="settings-color-swatch" style=${"background:"+U} title=${U}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var ru=J(()=>{e();Sc();mc()});var _u={};un(_u,{__scheduledTasksSettingsTest:()=>Wl,ScheduledTasksSection:()=>Fl});function Mn(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function iu(n){let r=Number(n);if(!Number.isFinite(r))return"—";if(r<1000)return`${Math.round(r)}ms`;return`${(r/1000).toFixed(r<1e4?1:0)}s`}function ai(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${Mn(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function n_(n){let r=n?.task_kind||"agent";return r==="internal"?"internal/protected":r}function r_(n){return(n?.task_kind||"agent")==="internal"}function pl(n){if(!n)return"";let r=String(n).replace(/\s+/g," ").trim();return r.length>180?`${r.slice(0,179)}…`:r}function Sn({children:n,type:r="neutral"}){return l`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function zl({task:n}){let r=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!r.length)return l`<p class="settings-hint">No run logs recorded yet.</p>`;return l`
        <div class="settings-task-run-list">
            ${r.map((i)=>l`
                <div class=${`settings-task-run-row settings-task-run-${i.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${Sn} type=${i.status==="error"?"error":"success"}>${i.status||"unknown"}<//>
                        <span>${Mn(i.run_at)}</span>
                        <span>${iu(i.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${i.error_summary||pl(i.error)||i.result_summary||i.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function Bl({task:n,onAction:r}){if(!n)return l`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let i=r_(n);return l`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${n.summary||n.id}</h4>
                    <code>${n.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${n.status==="active"&&l`<button onClick=${()=>r("pause",n)}>Pause</button>`}
                    ${n.status==="paused"&&l`<button onClick=${()=>r("resume",n)}>Resume</button>`}
                    <button class="danger" onClick=${()=>r("delete",n)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${n.status||"—"}</strong>
                <span>Kind</span><strong>${n_(n)}</strong>
                <span>Schedule</span><strong>${ai(n)}</strong>
                <span>Next run</span><strong>${Mn(n.next_run)}</strong>
                <span>Last run</span><strong>${Mn(n.last_run)}</strong>
                <span>Last result</span><strong>${n.latest_run_log?.status||n.last_result||"—"}</strong>
                <span>Chat</span><code>${n.chat_jid||"—"}</code>
                <span>Model</span><code>${n.model||"default"}</code>
                ${n.cwd&&l`<span>CWD</span><code>${n.cwd}</code>`}
                ${n.timeout_sec&&l`<span>Timeout</span><strong>${n.timeout_sec}s</strong>`}
                ${i&&l`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${n.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${n.command||n.prompt||n.command_summary||n.prompt_summary||n.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${zl} task=${n} />
        </div>
    `}function Fl({filter:n="",setStatus:r}){let[i,_]=w([]),[c,u]=w({active:0,paused:0,completed:0}),[f,s]=w("all"),[o,$]=w(""),[b,g]=w(!0),[v,t]=w(null),[h,p]=w(null),[x,K]=w(null),[W,T]=w(!1),F=H(async(y={})=>{g(!0),t(null);try{let k=await pi({status:f,chatJid:o.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});_(k.tasks||[]),u(k.counts||{active:0,paused:0,completed:0});let j=y.selectedId||h,V=(k.tasks||[]).find((Z)=>Z.id===j)||(k.tasks||[])[0]||null;p(V?.id||null),K(V)}catch(k){t(k?.message||"Failed to load scheduled tasks.")}finally{g(!1)}},[f,o,h]);P(()=>{F()},[F]);let U=String(n||"").trim().toLowerCase(),z=D(()=>{if(!U)return i;return i.filter((y)=>[y.id,y.chat_jid,y.status,y.task_kind,y.schedule_type,y.schedule_value,y.summary,y.prompt_summary,y.command_summary,y.latest_run_log?.error_summary].some((k)=>String(k||"").toLowerCase().includes(U)))},[i,U]),G=H((y)=>{p(y?.id||null),K(y||null)},[]),Q=H(async(y,k)=>{if(!k||W)return;let j=r_(k),V=k.summary||k.command_summary||k.prompt_summary||k.id,Z=y==="delete"?`Delete scheduled task ${k.id}?

${V}`:`${y==="pause"?"Pause":"Resume"} scheduled task ${k.id}?

${V}`;if(!window.confirm(Z))return;if(j&&!window.confirm(`Task ${k.id} is internal/protected. Continue with ${y}?`))return;T(!0),r?.(`${y==="delete"?"Deleting":y==="pause"?"Pausing":"Resuming"} ${k.id}…`,"info");try{await zi(y,k.id,{allowInternal:j}),r?.(`Scheduled task ${k.id} ${y==="delete"?"deleted":y==="pause"?"paused":"resumed"}.`,"success"),await F({selectedId:y==="delete"?null:k.id})}catch(L){r?.(L?.message||`Failed to ${y} task.`,"error")}finally{T(!1)}},[W,F,r]);return l`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${Sn} type="active">Active ${c.active||0}<//>
                    <${Sn} type="paused">Paused ${c.paused||0}<//>
                    <${Sn} type="completed">Completed ${c.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${f} onChange=${(y)=>s(y.target.value)}>
                        ${Kl.map((y)=>l`<option value=${y}>${y==="all"?"All statuses":y}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${o} onInput=${(y)=>$(y.target.value)} />
                    <button onClick=${()=>F()} disabled=${b}>Refresh</button>
                </div>
            </div>

            ${b&&l`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${v&&l`<div class="settings-error-state">${v}</div>`}
            ${!b&&!v&&i.length===0&&l`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/i`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!b&&!v&&i.length>0&&l`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${z.map((y)=>l`
                            <button class=${`settings-task-row ${y.id===h?"active":""}`} onClick=${()=>G(y)}>
                                <span class="settings-task-row-main">
                                    <strong>${y.summary||y.id}</strong>
                                    <span>${ai(y)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${Sn} type=${y.status||"neutral"}>${y.status}<//>
                                    <${Sn}>${n_(y)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${Mn(y.next_run)} · Last ${Mn(y.last_run)}${y.latest_run_log?.status?` · ${y.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${z.length===0&&l`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${Bl} task=${x&&z.some((y)=>y.id===x.id)?x:z[0]} onAction=${Q} />
                </div>
            `}
        </div>
    `}var Kl,Wl;var cu=J(()=>{e();pn();Kl=["all","active","paused","completed"];Wl={formatDateTime:Mn,formatDuration:iu,labelForSchedule:ai,kindLabel:n_,isProtectedTask:r_}});function uu(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function en(n){return typeof n==="string"&&n.trim().length>0}function i_(n,...r){let i=uu(n);if(!i)return!0;let _=r.map((c)=>uu(c)).filter(Boolean);for(let c of _)if(c.startsWith(i)||c.includes(i))return!0;return!1}function fu(n){if(!Array.isArray(n))return null;let r=[],i=new Set;for(let _ of n){let c=String(_||"").trim();if(!c)continue;let u=c.toLowerCase();if(i.has(u))continue;i.add(u),r.push(c)}return r}function wr(n){let r=n&&typeof n==="object"?n:{};return{workspaceCommands:fu(r.workspaceCommands),slashCommands:fu(r.slashCommands)}}function lu(n,r){if(!Array.isArray(n))return!0;return n.some((i)=>i.toLowerCase()===r.toLowerCase())}function jl(n){let r=Array.isArray(n?.commands)?n.commands:[],i=wr(n?.settings),_=String(n?.query||"");return r.filter((c)=>lu(i.workspaceCommands,c.id)).filter((c)=>i_(_,c.label,c.description,...c.keywords||[])).map((c)=>({key:`workspace:${c.id}`,kind:"workspace",title:c.label,subtitle:c.description,searchText:`${c.label} ${c.description} ${(c.keywords||[]).join(" ")}`.trim(),visualHint:c.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:c.id}))}function kl(n){let r=Array.isArray(n?.agents)?n.agents:[],i=String(n?.query||""),_=new Set;return r.filter((c)=>{let u=en(c?.chat_jid)?c.chat_jid.trim():"";if(!u||_.has(u))return!1;if(c?.archived_at)return!1;return _.add(u),!0}).filter((c)=>i_(i,`@${String(c?.agent_name||"").trim()}`,c?.session_name,c?.chat_jid)).map((c)=>{let u=en(c?.agent_name)?c.agent_name.trim():String(c?.chat_jid||"").replace(/^[^:]+:/,""),f=en(c?.session_name)?c.session_name.trim():"",s=String(c?.chat_jid||"").trim();return{key:`agent:${s}`,kind:"agent",title:`@${u}`,subtitle:f||s,searchText:`@${u} ${f} ${s}`.trim(),visualHint:u.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:s}})}function Rl(n){let r=Array.isArray(n?.slashCommands)?n.slashCommands:[],i=wr(n?.settings),_=String(n?.query||""),c=new Set;return r.filter((u)=>{let f=en(u?.name)?u.name.trim():"";if(!f||c.has(f.toLowerCase()))return!1;return c.add(f.toLowerCase()),lu(i.slashCommands,f)}).filter((u)=>i_(_,u?.name,u?.description,u?.source)).map((u)=>{let f=String(u?.name||"").trim(),s=en(u?.description)?u.description.trim():"slash command",o=en(u?.source)?u.source.trim():"";return{key:`slash:${f}`,kind:"slash",title:f,subtitle:s,searchText:`${f} ${s} ${String(u?.source||"")}`.trim(),visualHint:"/",categoryLabel:o||"Slash",actionHint:"Insert",commandName:f}})}function Mo(n){return[...kl({agents:n?.agents,query:n?.query}),...jl({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...Rl({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var mn;var su=J(()=>{mn=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var $u={};un($u,{QuickActionsSection:()=>Hl});function ou(n,...r){let i=String(n||"").trim().toLowerCase();if(!i)return!0;return r.some((_)=>String(_||"").toLowerCase().includes(i))}function gu(n){if(!Array.isArray(n))return null;return new Set(n.map((r)=>String(r||"").trim().toLowerCase()).filter(Boolean))}function Hl({filter:n="",setStatus:r,mergeSettingsData:i}){let[_,c]=w(()=>mn.map((z)=>z.id)),[u,f]=w([]),[s,o]=w([]),[$,b]=w(!0),[g,v]=w(!1),t=H(async()=>{b(!0);try{let[z,G]=await Promise.all([Ti(),Ui("web:default").catch(()=>({commands:[]}))]),Q=wr(z?.settings),y=Array.isArray(G?.commands)?G.commands:[];o(y),c(Array.isArray(Q.workspaceCommands)?Q.workspaceCommands:mn.map((k)=>k.id)),f(Array.isArray(Q.slashCommands)?Q.slashCommands:y.map((k)=>String(k?.name||"").trim()).filter(Boolean))}catch(z){r?.(String(z?.message||z),"error")}finally{b(!1)}},[r]);P(()=>{t()},[t]);let h=D(()=>gu(_),[_]),p=D(()=>gu(u),[u]),x=D(()=>mn.filter((z)=>ou(n,z.label,z.description,...z.keywords||[])),[n]),K=D(()=>s.filter((z)=>ou(n,z?.name,z?.description,z?.source)),[s,n]),W=H((z)=>{c((G)=>{let Q=new Set((Array.isArray(G)?G:[]).map((y)=>String(y||"").trim()).filter(Boolean));if(Q.has(z))Q.delete(z);else Q.add(z);return mn.map((y)=>y.id).filter((y)=>Q.has(y))})},[]),T=H((z)=>{f((G)=>{let Q=new Set((Array.isArray(G)?G:[]).map((y)=>String(y||"").trim()).filter(Boolean));if(Q.has(z))Q.delete(z);else Q.add(z);return s.map((y)=>String(y?.name||"").trim()).filter((y)=>y&&Q.has(y))})},[s]),F=H(()=>{c(mn.map((z)=>z.id)),f(s.map((z)=>String(z?.name||"").trim()).filter(Boolean))},[s]),U=H(async()=>{if(g)return;v(!0),r?.("Saving quick actions…","info");try{let z=await Gi({workspaceCommands:_,slashCommands:u}),G=wr(z?.settings);i?.({quickActions:G}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:G}})),r?.("Quick Actions saved.","success")}catch(z){r?.(String(z?.message||z),"error")}finally{v(!1)}},[i,g,r,u,_]);if($)return l`<div class="settings-loading">Loading…</div>`;return l`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${F} disabled=${g}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${U} disabled=${g}>
                    ${g?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${x.map((z)=>{let G=h?h.has(z.id.toLowerCase()):!0;return l`
                        <label class="settings-checkbox-row" key=${z.id}>
                            <input type="checkbox" checked=${G} onChange=${()=>W(z.id)} />
                            <div>
                                <div>${z.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${z.description}</div>
                            </div>
                        </label>
                    `})}
                ${x.length===0&&l`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${K.map((z)=>{let G=String(z?.name||"").trim(),Q=p?p.has(G.toLowerCase()):!0;return l`
                        <label class="settings-checkbox-row" key=${G}>
                            <input type="checkbox" checked=${Q} onChange=${()=>T(G)} />
                            <div>
                                <div><code>${G}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${z?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${K.length===0&&l`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var wu=J(()=>{e();pn();su()});var yu={};un(yu,{KeychainSection:()=>Gl});function Ul(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function Gl({filter:n=""}){let[r,i]=w([]),[_,c]=w(!0),[u,f]=w(null),[s,o]=w(!1),[$,b]=w(""),[g,v]=w(""),[t,h]=w(""),[p,x]=w(""),[K,W]=w(""),[T,F]=w("secret"),[U,z]=w(!1),[G,Q]=w({}),[y,k]=w(null),[j,V]=w(null),[Z,L]=w(null),B=C(null),M=C(null),Y=C(null),E=H(async()=>{c(!0),f(null);try{let A=await(await fetch("/agent/keychain")).json();if(A?.ok)i(A.entries||[]);else f(A?.error||"Failed to load keychain.")}catch(R){f("Failed to load keychain.")}finally{c(!1)}},[]);P(()=>{E()},[E]);let _n=H(async()=>{let R=$.trim(),A=g;if(!R||!A)return;z(!0);try{let on=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R,secret:A,type:T,username:t.trim()||void 0,userNote:p,agentNote:K})})).json();if(on?.ok)b(""),v(""),h(""),x(""),W(""),F("secret"),o(!1),await E();else f(on?.error||"Failed to add entry.")}catch{f("Failed to add entry.")}finally{z(!1)}},[$,g,t,p,K,T,E]),sn=H(async(R)=>{try{let cn=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R})})).json();if(cn?.ok)V(null),L((on)=>on?.name===R?null:on),await E();else f(cn?.error||"Failed to delete entry.")}catch{f("Failed to delete entry.")}},[E]),wn=H(async(R)=>{let A=R?.name;if(!A)return;let cn=G[A]||{},on=Object.prototype.hasOwnProperty.call(cn,"userNote")?cn.userNote:R.userNote||"",$n=Object.prototype.hasOwnProperty.call(cn,"agentNote")?cn.agentNote:R.agentNote||"";k(A);try{let Hn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A,userNote:on,agentNote:$n})})).json();if(Hn?.ok)Q((tr)=>{let nr={...tr||{}};return delete nr[A],nr}),await E();else f(Hn?.error||"Failed to save notes.")}catch{f("Failed to save notes.")}finally{k(null)}},[G,E]),O=H((R,A,cn)=>{Q((on)=>({...on||{},[R]:{...(on||{})[R]||{},[A]:cn}}))},[]),X=H(async(R,A,cn)=>{try{let $n=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R,master_password:A||void 0,totp_code:cn||void 0})})).json();if($n?.ok)L({name:R,phase:"revealed",secret:$n.secret,username:$n.username,masterPassword:A});else if($n?.needs_master_password)L((hn)=>({name:R,phase:"password",masterPassword:"",error:hn?.name===R&&hn?.masterPassword?$n.error:null})),requestAnimationFrame(()=>M.current?.focus());else if($n?.needs_totp)L((hn)=>({name:R,phase:"totp",masterPassword:A,totpCode:"",error:hn?.name===R&&hn?.phase==="totp"&&hn?.totpCode?$n.error:null})),requestAnimationFrame(()=>Y.current?.focus());else L({name:R,phase:"error",error:$n?.error||"Failed to reveal."})}catch{L({name:R,phase:"error",error:"Failed to reveal."})}},[]),I=H((R)=>{if(Z?.name===R&&Z?.phase==="revealed"){L(null);return}X(R,null,null)},[Z,X]),xn=H((R)=>{let A=Z?.masterPassword||"";if(!A)return;X(R,A,null)},[Z,X]),N=H((R)=>{let A=Z?.totpCode||"";if(A.length<6)return;X(R,Z?.masterPassword,A)},[Z,X]),m=H(async(R)=>{try{await navigator.clipboard.writeText(R)}catch{let A=document.createElement("textarea");A.value=R,A.style.position="fixed",A.style.opacity="0",document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A)}},[]);P(()=>{if(s)requestAnimationFrame(()=>B.current?.focus())},[s]);let fn=n.toLowerCase(),Fn=D(()=>{if(!fn)return r;return r.filter((R)=>R.name.toLowerCase().includes(fn)||(R.type||"").toLowerCase().includes(fn)||(R.envVar||"").toLowerCase().includes(fn)||(R.userNote||"").toLowerCase().includes(fn)||(R.agentNote||"").toLowerCase().includes(fn))},[r,fn]);if(_)return l`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return l`
        <div class="settings-section">
            ${u&&l`
                <div class="settings-keychain-error" role="alert">
                    ${u}
                    <button class="settings-keychain-dismiss" onClick=${()=>f(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${Fn.length} entr${Fn.length===1?"y":"ies"}${fn?` matching "${n}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>o(!s)}>
                    ${s?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${s&&l`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${B} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${$} onInput=${(R)=>b(R.target.value)}
                            class="settings-keychain-input" />
                        <select value=${T} onChange=${(R)=>F(R.target.value)}
                            class="settings-keychain-select">
                            ${Tl.map((R)=>l`<option value=${R}>${R}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${g} onInput=${(R)=>v(R.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${t} onInput=${(R)=>h(R.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${_n}
                            disabled=${U||!$.trim()||!g}>
                            ${U?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${p} onInput=${(R)=>x(R.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${K} onInput=${(R)=>W(R.target.value)}
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
                        ${Fn.length===0&&l`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${fn?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${Fn.map((R)=>{let A=Z?.name===R.name?Z:null,cn=A?.phase==="revealed",on=A?.phase==="password",$n=A?.phase==="totp",hn=A?.phase==="error",Hn=G[R.name]||{},tr=Object.prototype.hasOwnProperty.call(Hn,"userNote")?Hn.userNote:R.userNote||"",nr=Object.prototype.hasOwnProperty.call(Hn,"agentNote")?Hn.agentNote:R.agentNote||"",Uu=tr!==(R.userNote||"")||nr!==(R.agentNote||""),s_=y===R.name;return l`
                            <tr class="settings-keychain-row" key=${R.name}>
                                <td class="settings-keychain-name">${R.name}</td>
                                <td><span class="settings-keychain-type-badge">${R.type}</span></td>
                                <td class="settings-keychain-env">${R.envVar?l`<code>$${R.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Ul(R.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${cn?" active":""}`}
                                        onClick=${()=>I(R.name)}
                                        title=${cn?"Hide secret":"Reveal secret"}>
                                        ${cn?l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${j===R.name?l`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>sn(R.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>V(null)}>No</button>
                                            </span>
                                        `:l`<button class="settings-keychain-delete-btn" onClick=${()=>V(R.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${R.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${tr}
                                                onInput=${(gn)=>O(R.name,"userNote",gn.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${nr}
                                                onInput=${(gn)=>O(R.name,"agentNote",gn.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!Uu||s_} onClick=${()=>wn(R)}>
                                            ${s_?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${on&&l`
                                <tr class="settings-keychain-prompt-row" key=${R.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${M} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${A?.masterPassword||""}
                                                onInput=${(gn)=>L((dr)=>({...dr,masterPassword:gn.target.value}))}
                                                onKeyDown=${(gn)=>{if(gn.key==="Enter")xn(R.name);if(gn.key==="Escape")L(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>xn(R.name)}
                                                disabled=${!A?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>L(null)}>Cancel</button>
                                            ${A?.error&&l`<span class="settings-keychain-prompt-error">${A.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${$n&&l`
                                <tr class="settings-keychain-prompt-row" key=${R.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${Y} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${A?.totpCode||""}
                                                onInput=${(gn)=>L((dr)=>({...dr,totpCode:gn.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(gn)=>{if(gn.key==="Enter")N(R.name);if(gn.key==="Escape")L(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>N(R.name)}
                                                disabled=${(A?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>L(null)}>Cancel</button>
                                            ${A?.error&&l`<span class="settings-keychain-prompt-error">${A.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${cn&&l`
                                <tr class="settings-keychain-reveal-row" key=${R.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${A.username&&l`
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
                            ${hn&&l`
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
    `}var Tl;var xu=J(()=>{e();Tl=["secret","token","password","basic"]});var tu={};un(tu,{ToolsSection:()=>Ql});function Ql({toolsets:n,filter:r="",settingsData:i,mergeSettingsData:_}){let c=n||[],[u,f]=w(()=>{let h={};for(let p of c)h[p.name]=!0;return h}),s=H((h)=>{f((p)=>({...p,[h]:!p[h]}))},[]),o=i?.searchMatchMode||"or",$=D(()=>{let h=Array.isArray(i?.toolResultCompactionTools)?i.toolResultCompactionTools:[];return new Set(h.filter((p)=>typeof p==="string").map((p)=>p.trim().toLowerCase()).filter(Boolean))},[i?.toolResultCompactionTools]),b=H(async()=>{let h=o==="or"?"and":"or";try{let x=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:h})})).json().catch(()=>({}));if(x?.ok&&x?.settings)_?.(x.settings)}catch(p){console.warn("[settings/tools] Failed to save search match mode.",p)}},[o,_]),g=H(async(h)=>{let p=String(h||"").trim().toLowerCase();if(!p)return;let x=new Set($);if(x.has(p))x.delete(p);else x.add(p);try{let W=await(await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toolResultCompactionTools:Array.from(x).sort()})})).json().catch(()=>({}));if(W?.ok&&W?.settings)_?.(W.settings)}catch(K){console.warn("[settings/tools] Failed to save tool compaction settings.",K)}},[$,_]),v=r.toLowerCase(),t=D(()=>{if(!v)return c;return c.map((h)=>{let p=h.tools.filter((x)=>x.name.toLowerCase().includes(v)||h.name.toLowerCase().includes(v)||(x.summary||"").toLowerCase().includes(v));return p.length>0?{...h,tools:p}:null}).filter(Boolean)},[c,v]);if(c.length===0)return l`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return l`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${o==="and"} onChange=${b} />
                        <span class="settings-hint" style="margin:0">
                            ${o==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${t.map((h)=>{let p=u[h.name]!==!1;return l`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${p} onChange=${()=>s(h.name)} />
                            <span class="settings-toolset-icon">${Vl[h.name]||Pl}</span>
                            <strong>${h.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${h.description}</span>
                    </div>
                    ${p&&l`<div class="settings-tool-list">
                        <div class="settings-tool-row settings-tool-row-header" aria-hidden="true">
                            <span class="settings-tool-status-header">Enabled</span>
                            <span class="settings-tool-name">Tool</span>
                            <span class="settings-tool-compact-header">Compact</span>
                            <span class="settings-tool-kind">Kind</span>
                            <span class="settings-tool-summary">Summary</span>
                            <span class="settings-tool-source">Source</span>
                        </div>
                        ${h.tools.map((x)=>{let K=String(x.name||"").trim().toLowerCase(),W=$.has(K);return l`
                                <div class="settings-tool-row">
                                    <input type="checkbox" checked disabled />
                                    <span class="settings-tool-name">${x.name}</span>
                                    <span class="settings-tool-compact">
                                        <input
                                            type="checkbox"
                                            checked=${W}
                                            onChange=${()=>g(x.name)}
                                            title=${W?"Disable tool-result compaction for this tool":"Enable tool-result compaction for this tool"}
                                        />
                                    </span>
                                    <span class="settings-tool-kind" title=${x.kind}>${Xl[x.kind]||"?"}</span>
                                    ${x.summary&&l`<span class="settings-tool-summary">${x.summary}</span>`}
                                    ${!x.summary&&l`<span class="settings-tool-summary"></span>`}
                                    <span class="settings-tool-source">${Nl[x.name]||h.name}</span>
                                </div>
                            `})}
                    </div>`}
                </div>
            `})}
            ${t.length===0&&l`<p class="settings-hint">No tools match "${r}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; the “Compact” column controls tool-result compaction eligibility.</p>
        </div>
    `}var Vl,Nl,Xl,Pl;var hu=J(()=>{e();Vl={core:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},Nl={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Xl={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},Pl=l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var bu={};un(bu,{AddonsSection:()=>Ml});function Ml({setStatus:n,filter:r=""}){let[i,_]=w(null),[c,u]=w(!0),[f,s]=w(null),[o,$]=w(!1),[b,g]=w({runtime:"",windowsNative:!1}),[v,t]=w([]),[h,p]=w([]);function x(){let y=new URLSearchParams;try{let j=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),V=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((L)=>L.trim()).filter(Boolean),Z=localStorage.getItem("piclaw_addons_repo_url");if(j)y.append("catalog_url",j);for(let L of V)y.append("catalog_url",L);if(Z)y.set("repo_url",Z)}catch(j){}let k=y.toString();return k?`?${k}`:""}let K=H(async()=>{try{let[y,k]=await Promise.all([fetch(`/agent/addons${x()}`),fetch("/agent/settings-data")]),j=await y.json();if(j.error)throw Error(j.error);_(j.addons||[]),t(j.sources||[]),p(j.failed_sources||[]);let V=await k.json().catch(()=>({})),Z=typeof V?.runtimePlatform==="string"?V.runtimePlatform:"";g({runtime:Z,windowsNative:Z==="win32"})}catch(y){_(null),n?.(String(y.message||y),"error")}finally{u(!1)}},[n]);P(()=>{K()},[]);let W=H(async(y)=>{if(f)return;s({slug:y,action:"install"}),n?.(`Installing ${y}…`,"info");try{let j=await(await fetch(`/agent/addons/install${x()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:y})})).json();if(j.error){n?.(j.error,"error");return}$(!0);let V=[j.message,j.warning].filter(Boolean).join(" ");n?.(V||"Add-on installed.","success"),await K()}catch(k){n?.(String(k.message||k),"error")}finally{s(null)}},[f,K,n]),T=H(async(y)=>{if(f)return;s({slug:y,action:"remove"}),n?.(`Removing ${y}…`,"info");try{let j=await(await fetch(`/agent/addons/uninstall${x()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:y})})).json();if(j.error){n?.(j.error,"error");return}$(!0);let V=[j.message,j.warning].filter(Boolean).join(" ");n?.(V||"Add-on removed.","success"),await K()}catch(k){n?.(String(k.message||k),"error")}finally{s(null)}},[f,K,n]),F=H(async()=>{if(f)return;s({slug:null,action:"restart"}),n?.("Restarting piclaw…","info");try{let k=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(k.error){n?.(k.error,"error"),s(null);return}n?.(k.message||"Restarting piclaw…","success"),$(!1),(async(V=30,Z=2000)=>{for(let L=0;L<V;L++){await new Promise((B)=>setTimeout(B,Z));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await K(),s(null),n?.("Restart complete — add-ons refreshed.","success");return}}catch(B){}}s(null),n?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(y){n?.(String(y.message||y),"error"),s(null)}},[f,n,K]);if(c)return l`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!i)return l`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let U=r.toLowerCase(),z=U?i.filter((y)=>y.slug.toLowerCase().includes(U)||(y.description||"").toLowerCase().includes(U)||(y.tags||[]).some((k)=>k.toLowerCase().includes(U))):i,G=f?.slug||null,Q=f?f.action==="remove"?`Removing ${f.slug}…`:f.action==="restart"?"Restarting piclaw…":`Installing ${f.slug}…`:"";return l`
        <div class=${`settings-section settings-addon-panel${f?" busy":""}`} aria-busy=${f?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${v.length<=1?l`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:l`${v.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${h.length>0&&l`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${h.length} catalog source${h.length>1?"s":""}:
                            ${h.map((y)=>l` <code style="font-size:0.82em;word-break:break-all">${y}</code>`)}
                        </div>
                    `}
                    ${v.length>1&&l`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${v.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${v.map((y)=>l`<li style="word-break:break-all"><code>${y}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${b.windowsNative&&l`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            <div class="settings-addon-list">
                ${f&&l`
                    <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${Q}>
                        <div class="settings-addon-panel-overlay-card">
                            <div class="settings-spinner"></div>
                            <span>${Q}</span>
                        </div>
                    </div>
                `}
                ${z.map((y)=>{let k=(y.skills||[]).length>0,j=y.type==="extension",V=k&&j?"extension + skill":k?"skill":"extension",Z=k&&!j?"settings-tag-skill":"",L=typeof y.homepage==="string"&&y.homepage.trim()?y.homepage.trim():"";return l`
                    <div class=${`settings-addon-card${y.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${L?l`<a class="settings-addon-name-link" href=${L} target="_blank" rel="noopener noreferrer">${y.slug}</a>`:l`<strong>${y.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${Z}`}>${V}</span>
                            <span class="settings-addon-version">${y.installed?y.installedVersion||"?":y.version||""}</span>
                            ${y.installKind&&l`<span class="settings-tag">${y.installKind}</span>`}
                            ${y.hasUpdate&&l`<span class="settings-tag settings-tag-skill">\u2191 ${y.version}</span>`}
                            <div class="settings-addon-actions">
                                ${y.installed?l`
                                    ${y.hasUpdate&&l`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(f)} onClick=${()=>W(y.slug)}>${G===y.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(f)} onClick=${()=>T(y.slug)}>${G===y.slug?"…":"Remove"}</button>
                                `:l`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(f)} onClick=${()=>W(y.slug)}>${G===y.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${y.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(y.tags||[]).map((B)=>l`<span class="settings-tag">${B}</span>`)}${(y.skills||[]).map((B)=>l`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${B}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${z.length===0&&l`<p class="settings-hint">No add-ons match "${r}"</p>`}
            </div>
            ${o&&l`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(f)} onClick=${F}>Restart Now</button>
                </div>
            `}
        </div>
    `}var vu=J(()=>{e()});var Yl={};function __(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function Yr(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function ql(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function Al(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Zl(n,r,i,_){try{return Jn(localStorage.getItem(n),{fallback:r,min:i,max:_})}catch{return Jn(r,{fallback:r,min:i,max:_})}}function Il(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function Ll(){let[n,r]=w(()=>__("piclaw_vim_mode",!1)),[i,_]=w(()=>__("piclaw_show_whitespace",!0)),[c,u]=w(()=>__("piclaw_md_live_preview",!0)),[f,s]=w(()=>Zl("piclaw_editor_font_size",13,10,24)),[o,$]=w(()=>ql("piclaw_editor_font_family","")),b=H((g,v,t)=>{let h=!v;t(h),Yr(g,h)},[]);return l`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${n}
                    onChange=${()=>{let g=!n;r(g),Yr("piclaw_vim_mode",g)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${i}
                    onChange=${()=>{let g=!i;_(g),Yr("piclaw_show_whitespace",g)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${c}
                    onChange=${()=>{let g=!c;u(g),Yr("piclaw_md_live_preview",g)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${nn}
                    label="editor font size"
                    value=${f}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(g)=>{s(g),Il("piclaw_editor_font_size",g)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${o}
                    onInput=${(g)=>{let v=g.target.value;$(v),Al("piclaw_editor_font_family",v)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var Dl;var Ku=J(()=>{e();cr();On();Dl=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;Dn({id:"editor",label:"Editor",icon:Dl,component:Ll,order:150})});var Ol={};function c_(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function u_(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function f_(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function l_(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Cl(){let[n,r]=w(()=>c_("piclaw_dev_mode",!1)),[i,_]=w(()=>f_("piclaw_addons_catalog_url","")),[c,u]=w(()=>f_("piclaw_addons_catalog_urls","")),[f,s]=w(()=>f_("piclaw_addons_repo_url","")),[o,$]=w(()=>c_("piclaw_debug_sse",!1)),[b,g]=w(()=>c_("piclaw_debug_tool_calls",!1)),v=H(()=>{let t=!n;r(t),u_("piclaw_dev_mode",t)},[n]);return l`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${n} onChange=${v} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${n&&l`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${i}
                        onInput=${(t)=>{let h=t.target.value;_(h),l_("piclaw_addons_catalog_url",h)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${c}
                        onInput=${(t)=>{let h=t.target.value;u(h),l_("piclaw_addons_catalog_urls",h)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${f}
                        onInput=${(t)=>{let h=t.target.value;s(h),l_("piclaw_addons_repo_url",h)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${o}
                        onChange=${()=>{let t=!o;$(t),u_("piclaw_debug_sse",t)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${b}
                        onChange=${()=>{let t=!b;g(t),u_("piclaw_debug_tool_calls",t)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var Jl;var pu=J(()=>{e();cr();Jl=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;Dn({id:"developer",label:"Developer",icon:Jl,component:Cl,order:900})});var ts={};un(ts,{openSettingsDialog:()=>xs,SettingsDialogContent:()=>Er,SettingsDialog:()=>ys});function xr(n){yr.push({ts:performance.now(),label:n})}function El(){if(!yr.length)return;let n=yr[0].ts,r=yr.map((i)=>`+${(i.ts-n).toFixed(1)}ms ${i.label}`);console.info(`[settings-dialog perf]
`+r.join(`
`));try{window.__piclawSettingsPerfLog=r}catch(i){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:r})}).catch((i)=>{})}catch(i){}yr.length=0}function el(n){let r=Or.get(n);if(r)return Promise.resolve(r);let i=Cr.get(n);if(i)return i;let _=dl[n]().then((c)=>{return Or.set(n,c),Cr.delete(n),c}).catch((c)=>{throw Cr.delete(n),c});return Cr.set(n,_),_}function Jr(n="Loading…"){return l`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function Er({onClose:n}){xr("SettingsDialogContent-render-start");let[r,i]=w(()=>ti()||"general"),[_,c]=w(zu),[u,f]=w(null),[s,o]=w(""),[,$]=w(0),[b,g]=w(()=>Object.fromEntries(Or.entries())),[v,t]=w(null),[h,p]=w({compact:!1,narrow:!1}),x=C(null),K=C(null),{t:W}=Ur(),T=(B)=>B?.isExtension?B.label:W(`settings.section.${B.id}`),F=(B)=>B?.isExtension?B.placeholder||W("settings.filter"):W(`settings.placeholder.${B.id}`);P(()=>{xr("SettingsDialogContent-mounted"),El()},[]),P(()=>{let B=(M)=>{if(M.key==="Escape")n()};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[n]),P(()=>{let B=(M)=>{let Y=typeof M?.detail?.section==="string"?M.detail.section.trim():"";if(Y)i(Y),o("")};return window.addEventListener("piclaw:open-settings",B),()=>window.removeEventListener("piclaw:open-settings",B)},[]),P(()=>{let B=()=>$((M)=>M+1);return window.addEventListener("piclaw:settings-panes-changed",B),()=>window.removeEventListener("piclaw:settings-panes-changed",B)},[]),P(()=>{fetch("/agent/settings-data").then((B)=>B.json()).then((B)=>{zu=B,c(B)}).catch(()=>c({}))},[]),P(()=>{let B=K.current;if(!B)return;let M=()=>{let Y=B.clientWidth||0;p((E)=>{let _n={compact:Y>0&&Y<=860,narrow:Y>0&&Y<=720};return E.compact===_n.compact&&E.narrow===_n.narrow?E:_n})};if(M(),typeof ResizeObserver==="function"){let Y=new ResizeObserver(()=>M());return Y.observe(B),()=>Y.disconnect()}return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]);let U=[...Fu].sort((B,M)=>(B.order??500)-(M.order??500)),G=D_().map((B)=>({id:B.id,label:B.label,icon:B.icon,searchable:B.searchable||!1,placeholder:B.searchPlaceholder,order:B.order??500,isExtension:!0,component:B.component})).sort(xi),Q=[...U,...G],y=Q.find((B)=>B.id===r)||Fu.find((B)=>B.id===r);P(()=>{if(y?.searchable)requestAnimationFrame(()=>x.current?.focus())},[r]),P(()=>{if(y?.isExtension){t(null);return}let B=!1;if(b[r]){t(null);return}return t(r),el(r).then((M)=>{if(B)return;g((Y)=>Y?.[r]?Y:{...Y||{},[r]:M})}).catch((M)=>{if(B)return;console.error(`[settings-dialog] Failed to lazy-load section "${r}".`,M)}).finally(()=>{if(!B)t((M)=>M===r?null:M)}),()=>{B=!0}},[r,y?.isExtension,b]);let k=H((B,M="info")=>{f(B?{text:B,type:M}:null)},[]),j=H((B)=>{i(B),o("");let M=Sl[B];if(M&&!Bu.has(B))Bu.add(B),M().then(()=>$((Y)=>Y+1)).catch((Y)=>{})},[]),V=H((B)=>{c((M)=>({...M||{},...B||{}}))},[]),Z=()=>{if(y?.isExtension){if(!y.component)return Jr("Loading pane…");let M=y.component;return l`<${M} filter=${s} />`}let B=b[r];if(!B||v===r)return Jr(`${W("settings.loading")}`);switch(r){case"general":return l`<${B} settingsData=${_} setStatus=${k} mergeSettingsData=${V} />`;case"sessions":return l`<${B} settingsData=${_} setStatus=${k} mergeSettingsData=${V} />`;case"recordings":return l`<${B} filter=${s} setStatus=${k} />`;case"compaction":return l`<${B} settingsData=${_} setStatus=${k} mergeSettingsData=${V} />`;case"keyboard":return l`<${B} filter=${s} setStatus=${k} />`;case"workspace":return l`<${B} settingsData=${_} setStatus=${k} mergeSettingsData=${V} />`;case"environment":return l`<${B} settingsData=${_} filter=${s} setStatus=${k} mergeSettingsData=${V} />`;case"providers":return l`<${B} providers=${_?.providers} setStatus=${k} />`;case"models":return l`<${B} filter=${s} />`;case"theme":return l`<${B} themes=${_?.themes} colorKeys=${_?.colorKeys} settingsData=${_} setStatus=${k} mergeSettingsData=${V} />`;case"scheduled-tasks":return l`<${B} filter=${s} setStatus=${k} />`;case"quick-actions":return l`<${B} filter=${s} setStatus=${k} mergeSettingsData=${V} />`;case"keychain":return l`<${B} filter=${s} />`;case"tools":return l`<${B} toolsets=${_?.toolsets} filter=${s} settingsData=${_} mergeSettingsData=${V} />`;case"addons":return l`<${B} setStatus=${k} filter=${s} />`;default:return Jr(W("settings.loading"))}},L=!y;return xr("SettingsDialogContent-render-end"),l`
        <div class="settings-dialog-backdrop" onClick=${(B)=>{if(B.target===B.currentTarget)n()}}>
            <div ref=${K} data-testid="settings-dialog" class=${`settings-dialog${h.compact?" settings-dialog-compact":""}${h.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">${W("settings.title")}</span>
                    ${y?.searchable&&l`
                        <input ref=${x} type="text" class="settings-header-filter"
                            placeholder=${F(y)}
                            value=${s} onInput=${(B)=>o(B.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title=${W("settings.close")}>✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${Q.map((B,M)=>{let Y=M>0&&!Q[M-1].isExtension,E=B.isExtension&&Y;return l`
                                ${E&&l`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${B.id===r?"active":""}`} onClick=${()=>j(B.id)}>
                                    <span class="settings-nav-icon">${B.icon}</span>
                                    <span class="settings-nav-label">${T(B)}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${L?Jr(W("settings.loading")):Z()}
                    </main>
                </div>
                ${u&&l`
                    <div class=${`settings-status-bar settings-status-bar-${u.type}`}>
                        ${u.type==="info"&&l`<span class="settings-spinner"></span>`}
                        <span>${u.text}</span>
                        ${u.type!=="info"&&l`<button class="settings-status-dismiss" onClick=${()=>f(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function ys(){let[n,r]=w(!1);if(P(()=>{let i=(c)=>{let u=Tr(c?.detail?.section);if(u)try{window.__piclawSettingsRequestedSection=u}catch(f){}r(!0)};window.addEventListener("piclaw:open-settings",i);let _=C_();if(_.open){if(_.section)try{window.__piclawSettingsRequestedSection=_.section}catch(c){}r(!0)}return()=>window.removeEventListener("piclaw:open-settings",i)},[]),!n)return null;return l`<${I_} className="settings-portal"><${Er} onClose=${()=>r(!1)} /><//>`}function xs(n={}){Y_(n)}var yr,zu=null,Or,Cr,dl,Sl,Bu,ml,al,ns,rs,is,_s,cs,us,fs,ls,ss,os,gs,$s,ws,Fu;var Wu=J(()=>{e();yi();L_();cr();wc();yr=[];xr("module-eval-start");xr("imports-done");Or=new Map,Cr=new Map;Or.set("general",Qi);dl={general:()=>Promise.resolve(Qi),sessions:()=>Promise.resolve().then(() => (tc(),xc)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => (bc(),hc)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (Kc(),vc)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (Rc(),kc)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (Qc(),Pc)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (qc(),Mc)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (Zc(),Ac)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Lc(),Ic)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (ru(),nu)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (cu(),_u)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (wu(),$u)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (xu(),yu)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (hu(),tu)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (vu(),bu)).then((n)=>n.AddonsSection)},Sl={"editor-settings":()=>Promise.resolve().then(() => (Ku(),Yl)).then(()=>{}),developer:()=>Promise.resolve().then(() => (pu(),Ol)).then(()=>{})},Bu=new Set;ml=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,al=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,ns=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,rs=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,is=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,_s=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,cs=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,us=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,fs=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,ls=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,ss=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,os=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,gs=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,$s=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,ws=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,Fu=[{id:"general",label:"General",icon:ml,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:al,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:ns,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:rs,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:cs,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:is,searchable:!1,order:15},{id:"environment",label:"Environment",icon:_s,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:us,searchable:!1,order:20},{id:"models",label:"Models",icon:fs,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:ls,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:ss,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:gs,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:$s,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:os,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:ws,searchable:!0,placeholder:"Filter add-ons…",order:90}]});e();Wu();cr();var hs=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function bs({label:n,body:r,filter:i=""}){return l`
    <div class="settings-section">
      <h3>${n}</h3>
      <p class="settings-hint">Mock add-on pane rendered by the settings widget fixture.</p>
      <div class="settings-addon-grid">
        ${["Credentials","Routes","Runtime options"].filter((_)=>!i||_.toLowerCase().includes(String(i).toLowerCase())).map((_)=>l`
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
  `}function vs(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let r of n)Dn({id:r.id,label:r.label,icon:hs,searchable:!0,searchPlaceholder:`Filter ${r.label} settings…`,order:r.id==="fixture-z-observability"?1:999,component:(i)=>l`<${bs} label=${r.label} body=${r.body} filter=${i?.filter||""} />`})}var tn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},Ks={current:tn.current,models:tn.models,model_options:tn.model_options,thinking_level:tn.thinking_level,supports_thinking:tn.supports_thinking,available_thinking_levels:tn.available_thinking_levels},ju={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},ku={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},an=new URLSearchParams(window.location.search).get("real")!=="1",Ru=window.fetch.bind(window);function yn(n,r=200){return new Response(JSON.stringify(n),{status:r,headers:{"Content-Type":"application/json"}})}function ps(){window.fetch=async(n,r)=>{let i=new URL(typeof n==="string"?n:n.url,window.location.href),_=String(r?.method||"GET").toUpperCase();if(!an)return Ru(n,r);if(i.pathname==="/agent/settings-data")return yn(tn);if(i.pathname==="/agent/models")return yn(Ks);if(i.pathname==="/agent/addons")return yn(ju);if(i.pathname.startsWith("/agent/addons/"))return yn({ok:!0,message:"Fixture add-on action accepted.",...ju});if(i.pathname==="/agent/keychain"){if(_==="GET")return yn(ku);if(_==="POST")return yn({ok:!0,...ku})}if(i.pathname==="/agent/settings/general")return yn({ok:!0,settings:tn});if(i.pathname==="/agent/settings/widget-token/regenerate")return yn({ok:!0,settings:{...tn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(i.pathname.startsWith("/agent/default/message"))return yn({command:{status:"success",message:"Fixture command accepted."}});if(i.pathname.startsWith("/agent/settings/"))return yn({ok:!0,settings:tn,items:[],entries:[]});if(i.pathname==="/agent/client-perf")return yn({ok:!0});return Ru(n,r)}}function zs(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function Hu(n){try{window.__piclawSettingsRequestedSection=n}catch(r){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function Bs(){let n=new URLSearchParams(window.location.search),[r,i]=w(n.get("section")||"general"),[_,c]=w(Number(n.get("width")||900)),[u,f]=w(Number(n.get("height")||640)),[s,o]=w(an),[$,b]=w(0),g=D(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),v=H((h)=>{i(h),Hu(h)},[]),t=H(()=>{an=!an,o(an),b((h)=>h+1)},[]);return l`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${r} onChange=${(h)=>v(h.target.value)}>${g.map((h)=>l`<option value=${h}>${h}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${_} onInput=${(h)=>c(Number(h.target.value))} /> ${_}px</label>
        <label>Height <input type="range" min="420" max="900" value=${u} onInput=${(h)=>f(Number(h.target.value))} /> ${u}px</label>
        <button type="button" onClick=${t}>${s?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>b((h)=>h+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${_}px;--fixture-height:${u}px;`}>
        <${Er} key=${$} onClose=${()=>{}} />
      </div>
    </div>
  `}function Fs(){vs(),ps(),zs();let n=new URLSearchParams(window.location.search);Hu(n.get("section")||"general");let r=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));r.id="settings-widget-fixture-root",Zn(l`<${Bs} />`,r),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:an})}Fs();

//# debugId=6A18C31467F676A664756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
