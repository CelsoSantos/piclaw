var Tu=Object.defineProperty;var Gu=(n)=>n;function Vu(n,r){this[n]=Gu.bind(null,r)}var _n=(n,r)=>{for(var i in r)Tu(n,i,{get:r[i],enumerable:!0,configurable:!0,set:Vu.bind(r,i)})};var D=(n,r)=>()=>(n&&(r=n(n=0)),r);var Eu={};_n(Eu,{useState:()=>w,useRef:()=>L,useReducer:()=>G_,useMemo:()=>I,useLayoutEffect:()=>kr,useImperativeHandle:()=>Iu,useErrorBoundary:()=>Yu,useEffect:()=>P,useDebugValue:()=>Du,useContext:()=>Lu,useCallback:()=>H,render:()=>Zn,html:()=>l,h:()=>ci,createContext:()=>Zu,Component:()=>ir});function bn(n,r){for(var i in r)n[i]=r[i];return n}function _i(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function ci(n,r,i){var _,c,u,f={};for(u in r)u=="key"?_=r[u]:u=="ref"?c=r[u]:f[u]=r[u];if(arguments.length>2&&(f.children=arguments.length>3?Fr.call(arguments,2):i),typeof n=="function"&&n.defaultProps!=null)for(u in n.defaultProps)f[u]===void 0&&(f[u]=n.defaultProps[u]);return vr(n,f,_,c,null)}function vr(n,r,i,_,c){var u={type:n,props:r,key:i,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c==null?++K_:c,__i:-1,__u:0};return c==null&&E.vnode!=null&&E.vnode(u),u}function jr(n){return n.children}function ir(n,r){this.props=n,this.context=r}function qn(n,r){if(r==null)return n.__?qn(n.__,n.__i+1):null;for(var i;r<n.__k.length;r++)if((i=n.__k[r])!=null&&i.__e!=null)return i.__e;return typeof n.type=="function"?qn(n):null}function Pu(n){if(n.__P&&n.__d){var r=n.__v,i=r.__e,_=[],c=[],u=bn({},r);u.__v=r.__v+1,E.vnode&&E.vnode(u),ui(n.__P,u,r,n.__n,n.__P.namespaceURI,32&r.__u?[i]:null,_,i==null?qn(r):i,!!(32&r.__u),c),u.__v=r.__v,u.__.__k[u.__i]=u,R_(_,u,c),r.__e=r.__=null,u.__e!=i&&W_(u)}}function W_(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(r){if(r!=null&&r.__e!=null)return n.__e=n.__c.base=r.__e}),W_(n)}function ar(n){(!n.__d&&(n.__d=!0)&&Wn.push(n)&&!Br.__r++||l_!=E.debounceRendering)&&((l_=E.debounceRendering)||p_)(Br)}function Br(){try{for(var n,r=1;Wn.length;)Wn.length>r&&Wn.sort(z_),n=Wn.shift(),r=Wn.length,Pu(n)}finally{Wn.length=Br.__r=0}}function j_(n,r,i,_,c,u,f,s,o,$,v){var g,K,h,b,B,t,p,j=_&&_.__k||zr,V=r.length;for(o=Qu(i,r,j,o,V),g=0;g<V;g++)(h=i.__k[g])!=null&&(K=h.__i!=-1&&j[h.__i]||pr,h.__i=g,t=ui(n,h,K,c,u,f,s,o,$,v),b=h.__e,h.ref&&K.ref!=h.ref&&(K.ref&&fi(K.ref,null,h),v.push(h.ref,h.__c||b,h)),B==null&&b!=null&&(B=b),(p=!!(4&h.__u))||K.__k===h.__k?(o=k_(h,o,n,p),p&&K.__e&&(K.__e=null)):typeof h.type=="function"&&t!==void 0?o=t:b&&(o=b.nextSibling),h.__u&=-7);return i.__e=B,o}function Qu(n,r,i,_,c){var u,f,s,o,$,v=i.length,g=v,K=0;for(n.__k=Array(c),u=0;u<c;u++)(f=r[u])!=null&&typeof f!="boolean"&&typeof f!="function"?(typeof f=="string"||typeof f=="number"||typeof f=="bigint"||f.constructor==String?f=n.__k[u]=vr(null,f,null,null,null):Wr(f)?f=n.__k[u]=vr(jr,{children:f},null,null,null):f.constructor===void 0&&f.__b>0?f=n.__k[u]=vr(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):n.__k[u]=f,o=u+K,f.__=n,f.__b=n.__b+1,s=null,($=f.__i=Mu(f,i,o,g))!=-1&&(g--,(s=i[$])&&(s.__u|=2)),s==null||s.__v==null?($==-1&&(c>v?K--:c<v&&K++),typeof f.type!="function"&&(f.__u|=4)):$!=o&&($==o-1?K--:$==o+1?K++:($>o?K--:K++,f.__u|=4))):n.__k[u]=null;if(g)for(u=0;u<v;u++)(s=i[u])!=null&&(2&s.__u)==0&&(s.__e==_&&(_=qn(s)),U_(s,s));return _}function k_(n,r,i,_){var c,u;if(typeof n.type=="function"){for(c=n.__k,u=0;c&&u<c.length;u++)c[u]&&(c[u].__=n,r=k_(c[u],r,i,_));return r}n.__e!=r&&(_&&(r&&n.type&&!r.parentNode&&(r=qn(n)),i.insertBefore(n.__e,r||null)),r=n.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function Mu(n,r,i,_){var c,u,f,s=n.key,o=n.type,$=r[i],v=$!=null&&(2&$.__u)==0;if($===null&&s==null||v&&s==$.key&&o==$.type)return i;if(_>(v?1:0)){for(c=i-1,u=i+1;c>=0||u<r.length;)if(($=r[f=c>=0?c--:u++])!=null&&(2&$.__u)==0&&s==$.key&&o==$.type)return f}return-1}function s_(n,r,i){r[0]=="-"?n.setProperty(r,i==null?"":i):n[r]=i==null?"":typeof i!="number"||Xu.test(r)?i:i+"px"}function hr(n,r,i,_,c){var u,f;n:if(r=="style")if(typeof i=="string")n.style.cssText=i;else{if(typeof _=="string"&&(n.style.cssText=_=""),_)for(r in _)i&&r in i||s_(n.style,r,"");if(i)for(r in i)_&&i[r]==_[r]||s_(n.style,r,i[r])}else if(r[0]=="o"&&r[1]=="n")u=r!=(r=r.replace(B_,"$1")),f=r.toLowerCase(),r=f in n||r=="onFocusOut"||r=="onFocusIn"?f.slice(2):r.slice(2),n.l||(n.l={}),n.l[r+u]=i,i?_?i[rr]=_[rr]:(i[rr]=ii,n.addEventListener(r,u?mr:er,u)):n.removeEventListener(r,u?mr:er,u);else{if(c=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in n)try{n[r]=i==null?"":i;break n}catch(s){}typeof i=="function"||(i==null||i===!1&&r[4]!="-"?n.removeAttribute(r):n.setAttribute(r,r=="popover"&&i==1?"":i))}}function o_(n){return function(r){if(this.l){var i=this.l[r.type+n];if(r[br]==null)r[br]=ii++;else if(r[br]<i[rr])return;return i(E.event?E.event(r):r)}}}function ui(n,r,i,_,c,u,f,s,o,$){var v,g,K,h,b,B,t,p,j,V,F,U,z,k,Q,y=r.type;if(r.constructor!==void 0)return null;128&i.__u&&(o=!!(32&i.__u),u=[s=r.__e=i.__e]),(v=E.__b)&&v(r);n:if(typeof y=="function")try{if(p=r.props,j=y.prototype&&y.prototype.render,V=(v=y.contextType)&&_[v.__c],F=v?V?V.props.value:v.__:_,i.__c?t=(g=r.__c=i.__c).__=g.__E:(j?r.__c=g=new y(p,F):(r.__c=g=new ir(p,F),g.constructor=y,g.render=Au),V&&V.sub(g),g.state||(g.state={}),g.__n=_,K=g.__d=!0,g.__h=[],g._sb=[]),j&&g.__s==null&&(g.__s=g.state),j&&y.getDerivedStateFromProps!=null&&(g.__s==g.state&&(g.__s=bn({},g.__s)),bn(g.__s,y.getDerivedStateFromProps(p,g.__s))),h=g.props,b=g.state,g.__v=r,K)j&&y.getDerivedStateFromProps==null&&g.componentWillMount!=null&&g.componentWillMount(),j&&g.componentDidMount!=null&&g.__h.push(g.componentDidMount);else{if(j&&y.getDerivedStateFromProps==null&&p!==h&&g.componentWillReceiveProps!=null&&g.componentWillReceiveProps(p,F),r.__v==i.__v||!g.__e&&g.shouldComponentUpdate!=null&&g.shouldComponentUpdate(p,g.__s,F)===!1){r.__v!=i.__v&&(g.props=p,g.state=g.__s,g.__d=!1),r.__e=i.__e,r.__k=i.__k,r.__k.some(function(T){T&&(T.__=r)}),zr.push.apply(g.__h,g._sb),g._sb=[],g.__h.length&&f.push(g);break n}g.componentWillUpdate!=null&&g.componentWillUpdate(p,g.__s,F),j&&g.componentDidUpdate!=null&&g.__h.push(function(){g.componentDidUpdate(h,b,B)})}if(g.context=F,g.props=p,g.__P=n,g.__e=!1,U=E.__r,z=0,j)g.state=g.__s,g.__d=!1,U&&U(r),v=g.render(g.props,g.state,g.context),zr.push.apply(g.__h,g._sb),g._sb=[];else do g.__d=!1,U&&U(r),v=g.render(g.props,g.state,g.context),g.state=g.__s;while(g.__d&&++z<25);g.state=g.__s,g.getChildContext!=null&&(_=bn(bn({},_),g.getChildContext())),j&&!K&&g.getSnapshotBeforeUpdate!=null&&(B=g.getSnapshotBeforeUpdate(h,b)),k=v!=null&&v.type===jr&&v.key==null?H_(v.props.children):v,s=j_(n,Wr(k)?k:[k],r,i,_,c,u,f,s,o,$),g.base=r.__e,r.__u&=-161,g.__h.length&&f.push(g),t&&(g.__E=g.__=null)}catch(T){if(r.__v=null,o||u!=null)if(T.then){for(r.__u|=o?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;u[u.indexOf(s)]=null,r.__e=s}else{for(Q=u.length;Q--;)_i(u[Q]);ni(r)}else r.__e=i.__e,r.__k=i.__k,T.then||ni(r);E.__e(T,r,i)}else u==null&&r.__v==i.__v?(r.__k=i.__k,r.__e=i.__e):s=r.__e=qu(i.__e,r,i,_,c,u,f,o,$);return(v=E.diffed)&&v(r),128&r.__u?void 0:s}function ni(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(ni))}function R_(n,r,i){for(var _=0;_<i.length;_++)fi(i[_],i[++_],i[++_]);E.__c&&E.__c(r,n),n.some(function(c){try{n=c.__h,c.__h=[],n.some(function(u){u.call(c)})}catch(u){E.__e(u,c.__v)}})}function H_(n){return typeof n!="object"||n==null||n.__b>0?n:Wr(n)?n.map(H_):n.constructor!==void 0?null:bn({},n)}function qu(n,r,i,_,c,u,f,s,o){var $,v,g,K,h,b,B,t=i.props||pr,p=r.props,j=r.type;if(j=="svg"?c="http://www.w3.org/2000/svg":j=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),u!=null){for($=0;$<u.length;$++)if((h=u[$])&&"setAttribute"in h==!!j&&(j?h.localName==j:h.nodeType==3)){n=h,u[$]=null;break}}if(n==null){if(j==null)return document.createTextNode(p);n=document.createElementNS(c,j,p.is&&p),s&&(E.__m&&E.__m(r,u),s=!1),u=null}if(j==null)t===p||s&&n.data==p||(n.data=p);else{if(u=j=="textarea"&&p.defaultValue!=null?null:u&&Fr.call(n.childNodes),!s&&u!=null)for(t={},$=0;$<n.attributes.length;$++)t[(h=n.attributes[$]).name]=h.value;for($ in t)h=t[$],$=="dangerouslySetInnerHTML"?g=h:$=="children"||($ in p)||$=="value"&&("defaultValue"in p)||$=="checked"&&("defaultChecked"in p)||hr(n,$,null,h,c);for($ in p)h=p[$],$=="children"?K=h:$=="dangerouslySetInnerHTML"?v=h:$=="value"?b=h:$=="checked"?B=h:s&&typeof h!="function"||t[$]===h||hr(n,$,h,t[$],c);if(v)s||g&&(v.__html==g.__html||v.__html==n.innerHTML)||(n.innerHTML=v.__html),r.__k=[];else if(g&&(n.innerHTML=""),j_(r.type=="template"?n.content:n,Wr(K)?K:[K],r,i,_,j=="foreignObject"?"http://www.w3.org/1999/xhtml":c,u,f,u?u[0]:i.__k&&qn(i,0),s,o),u!=null)for($=u.length;$--;)_i(u[$]);s&&j!="textarea"||($="value",j=="progress"&&b==null?n.removeAttribute("value"):b!=null&&(b!==n[$]||j=="progress"&&!b||j=="option"&&b!=t[$])&&hr(n,$,b,t[$],c),$="checked",B!=null&&B!=n[$]&&hr(n,$,B,t[$],c))}return n}function fi(n,r,i){try{if(typeof n=="function"){var _=typeof n.__u=="function";_&&n.__u(),_&&r==null||(n.__u=n(r))}else n.current=r}catch(c){E.__e(c,i)}}function U_(n,r,i){var _,c;if(E.unmount&&E.unmount(n),(_=n.ref)&&(_.current&&_.current!=n.__e||fi(_,null,r)),(_=n.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(u){E.__e(u,r)}_.base=_.__P=null}if(_=n.__k)for(c=0;c<_.length;c++)_[c]&&U_(_[c],r,i||typeof n.type!="function");i||_i(n.__e),n.__c=n.__=n.__e=void 0}function Au(n,r,i){return this.constructor(n,i)}function Zn(n,r,i){var _,c,u,f;r==document&&(r=document.documentElement),E.__&&E.__(n,r),c=(_=typeof i=="function")?null:i&&i.__k||r.__k,u=[],f=[],ui(r,n=(!_&&i||r).__k=ci(jr,null,[n]),c||pr,pr,r.namespaceURI,!_&&i?[i]:c?null:r.firstChild?Fr.call(r.childNodes):null,u,!_&&i?i:c?c.__e:r.firstChild,_,f),R_(u,n,f)}function Zu(n){function r(i){var _,c;return this.getChildContext||(_=new Set,(c={})[r.__c]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){_=null},this.shouldComponentUpdate=function(u){this.props.value!=u.value&&_.forEach(function(f){f.__e=!0,ar(f)})},this.sub=function(u){_.add(u);var f=u.componentWillUnmount;u.componentWillUnmount=function(){_&&_.delete(u),f&&f.call(u)}}),i.children}return r.__c="__cC"+F_++,r.__=n,r.Provider=r.__l=(r.Consumer=function(i,_){return i.children(_)}).contextType=r,r}function In(n,r){e.__h&&e.__h(O,n,An||r),An=0;var i=O.__H||(O.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function w(n){return An=1,G_(V_,n)}function G_(n,r,i){var _=In(jn++,2);if(_.t=n,!_.__c&&(_.__=[i?i(r):V_(void 0,r),function(s){var o=_.__N?_.__N[0]:_.__[0],$=_.t(o,s);o!==$&&(_.__N=[$,_.__[1]],_.__c.setState({}))}],_.__c=O,!O.__f)){var c=function(s,o,$){if(!_.__c.__H)return!0;var v=_.__c.__H.__.filter(function(K){return K.__c});if(v.every(function(K){return!K.__N}))return!u||u.call(this,s,o,$);var g=_.__c.props!==s;return v.some(function(K){if(K.__N){var h=K.__[0];K.__=K.__N,K.__N=void 0,h!==K.__[0]&&(g=!0)}}),u&&u.call(this,s,o,$)||g};O.__f=!0;var{shouldComponentUpdate:u,componentWillUpdate:f}=O;O.componentWillUpdate=function(s,o,$){if(this.__e){var v=u;u=void 0,c(s,o,$),u=v}f&&f.call(this,s,o,$)},O.shouldComponentUpdate=c}return _.__N||_.__}function P(n,r){var i=In(jn++,3);!e.__s&&li(i.__H,r)&&(i.__=n,i.u=r,O.__H.__h.push(i))}function kr(n,r){var i=In(jn++,4);!e.__s&&li(i.__H,r)&&(i.__=n,i.u=r,O.__h.push(i))}function L(n){return An=5,I(function(){return{current:n}},[])}function Iu(n,r,i){An=6,kr(function(){if(typeof n=="function"){var _=n(r());return function(){n(null),_&&typeof _=="function"&&_()}}if(n)return n.current=r(),function(){return n.current=null}},i==null?i:i.concat(n))}function I(n,r){var i=In(jn++,7);return li(i.__H,r)&&(i.__=n(),i.__H=r,i.__h=n),i.__}function H(n,r){return An=8,I(function(){return n},r)}function Lu(n){var r=O.context[n.__c],i=In(jn++,9);return i.c=n,r?(i.__==null&&(i.__=!0,r.sub(O)),r.props.value):n.__}function Du(n,r){e.useDebugValue&&e.useDebugValue(r?r(n):n)}function Yu(n){var r=In(jn++,10),i=w();return r.__=n,O.componentDidCatch||(O.componentDidCatch=function(_,c){r.__&&r.__(_,c),i[1](_)}),[i[0],function(){i[1](void 0)}]}function Cu(){for(var n;n=T_.shift();){var r=n.__H;if(n.__P&&r)try{r.__h.some(Kr),r.__h.some(ri),r.__h=[]}catch(i){r.__h=[],e.__e(i,n.__v)}}}function Ju(n){var r,i=function(){clearTimeout(_),b_&&cancelAnimationFrame(r),setTimeout(n)},_=setTimeout(i,35);b_&&(r=requestAnimationFrame(i))}function Kr(n){var r=O,i=n.__c;typeof i=="function"&&(n.__c=void 0,i()),O=r}function ri(n){var r=O;n.__c=n.__(),O=r}function li(n,r){return!n||n.length!==r.length||r.some(function(i,_){return i!==n[_]})}function V_(n,r){return typeof r=="function"?r(n):r}function Ou(n){var r=v_.get(this);return r||(r=new Map,v_.set(this,r)),(r=N_(this,r.get(n)||(r.set(n,r=function(i){for(var _,c,u=1,f="",s="",o=[0],$=function(K){u===1&&(K||(f=f.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(0,K,f):u===3&&(K||f)?(o.push(3,K,f),u=2):u===2&&f==="..."&&K?o.push(4,K,0):u===2&&f&&!K?o.push(5,0,!0,f):u>=5&&((f||!K&&u===5)&&(o.push(u,0,f,c),u=6),K&&(o.push(u,K,0,c),u=6)),f=""},v=0;v<i.length;v++){v&&(u===1&&$(),$(v));for(var g=0;g<i[v].length;g++)_=i[v][g],u===1?_==="<"?($(),o=[o],u=3):f+=_:u===4?f==="--"&&_===">"?(u=1,f=""):f=_+f[0]:s?_===s?s="":f+=_:_==='"'||_==="'"?s=_:_===">"?($(),u=1):u&&(_==="="?(u=5,c=f,f=""):_==="/"&&(u<5||i[v][g+1]===">")?($(),u===3&&(o=o[0]),u=o,(o=o[0]).push(2,0,u),u=0):_===" "||_==="\t"||_===`
`||_==="\r"?($(),u=2):f+=_),u===3&&f==="!--"&&(u=4,o=o[0])}return $(),o}(n)),r),arguments,[])).length>1?r:r[0]}var Fr,E,K_,Nu,Wn,l_,p_,z_,dr,br,rr,B_,ii,er,mr,F_,pr,zr,Xu,Wr,jn,O,Sr,g_,An=0,T_,e,$_,w_,y_,t_,x_,h_,b_,N_=function(n,r,i,_){var c;r[0]=0;for(var u=1;u<r.length;u++){var f=r[u++],s=r[u]?(r[0]|=f?1:2,i[r[u++]]):r[++u];f===3?_[0]=s:f===4?_[1]=Object.assign(_[1]||{},s):f===5?(_[1]=_[1]||{})[r[++u]]=s:f===6?_[1][r[++u]]+=s+"":f?(c=n.apply(s,N_(n,s,i,["",null])),_.push(c),s[0]?r[0]|=2:(r[u-2]=0,r[u]=c)):_.push(s)}return _},v_,l;var d=D(()=>{pr={},zr=[],Xu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Wr=Array.isArray;Fr=zr.slice,E={__e:function(n,r,i,_){for(var c,u,f;r=r.__;)if((c=r.__c)&&!c.__)try{if((u=c.constructor)&&u.getDerivedStateFromError!=null&&(c.setState(u.getDerivedStateFromError(n)),f=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(n,_||{}),f=c.__d),f)return c.__E=c}catch(s){n=s}throw n}},K_=0,Nu=function(n){return n!=null&&n.constructor===void 0},ir.prototype.setState=function(n,r){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=bn({},this.state),typeof n=="function"&&(n=n(bn({},i),this.props)),n&&bn(i,n),n!=null&&this.__v&&(r&&this._sb.push(r),ar(this))},ir.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ar(this))},ir.prototype.render=jr,Wn=[],p_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z_=function(n,r){return n.__v.__b-r.__v.__b},Br.__r=0,dr=Math.random().toString(8),br="__d"+dr,rr="__a"+dr,B_=/(PointerCapture)$|Capture$/i,ii=0,er=o_(!1),mr=o_(!0),F_=0;T_=[],e=E,$_=e.__b,w_=e.__r,y_=e.diffed,t_=e.__c,x_=e.unmount,h_=e.__;e.__b=function(n){O=null,$_&&$_(n)},e.__=function(n,r){n&&r.__k&&r.__k.__m&&(n.__m=r.__k.__m),h_&&h_(n,r)},e.__r=function(n){w_&&w_(n),jn=0;var r=(O=n.__c).__H;r&&(Sr===O?(r.__h=[],O.__h=[],r.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(r.__h.some(Kr),r.__h.some(ri),r.__h=[],jn=0)),Sr=O},e.diffed=function(n){y_&&y_(n);var r=n.__c;r&&r.__H&&(r.__H.__h.length&&(T_.push(r)!==1&&g_===e.requestAnimationFrame||((g_=e.requestAnimationFrame)||Ju)(Cu)),r.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),Sr=O=null},e.__c=function(n,r){r.some(function(i){try{i.__h.some(Kr),i.__h=i.__h.filter(function(_){return!_.__||ri(_)})}catch(_){r.some(function(c){c.__h&&(c.__h=[])}),r=[],e.__e(_,i.__v)}}),t_&&t_(n,r)},e.unmount=function(n){x_&&x_(n);var r,i=n.__c;i&&i.__H&&(i.__H.__.some(function(_){try{Kr(_)}catch(c){r=c}}),i.__H=void 0,r&&e.__e(r,i.__v))};b_=typeof requestAnimationFrame=="function";v_=new Map;l=Ou.bind(ci)});function X_({children:n,className:r=""}){let[i,_]=w(null);return P(()=>{if(typeof document>"u")return;let c=document.createElement("div");return c.className=r||"",document.body.appendChild(c),_(c),()=>{try{Zn(null,c)}finally{c.remove()}}},[]),P(()=>{if(!i)return;i.className=r||"";return},[r,i]),kr(()=>{if(!i)return;Zn(n,i);return},[n,i]),null}var P_=D(()=>{d()});function si(n,r){let i=String(n.label||"").localeCompare(String(r.label||""),void 0,{sensitivity:"base"});if(i!==0)return i;return String(n.id||"").localeCompare(String(r.id||""),void 0,{sensitivity:"base"})}function Ln(n){let r=Un.findIndex((i)=>i.id===n.id);if(r>=0)Un[r]=n;else Un.push(n);Un.sort(si)}function Rs(n){let r=Un.findIndex((i)=>i.id===n);if(r>=0)Un.splice(r,1)}function Q_(){return[...Un]}function Hs(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var Un;var _r=D(()=>{Un=[]});function Rr(n){let r=typeof n==="string"?n.trim():"";return r?r:null}function M_(n={}){if(typeof window>"u")return;let r=Rr(n.section);try{if(window.__piclawSettingsOpenRequested=!0,r)window.__piclawSettingsRequestedSection=r;else delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to record open request flags",i)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:r?{section:r}:void 0}))}function oi(){if(typeof window>"u")return null;return Rr(window.__piclawSettingsRequestedSection)}function q_(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),r=oi();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to clear open request flags",i)}return{open:n,section:r}}function Z_(n=typeof window<"u"?window:null){return n||null}function Hr(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function lr(n,r){return`${n}:${r}`}function I_(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function L_(n,r){if(n.length<=r)return;n.splice(0,n.length-r)}function Tn(n){if(!n||typeof n!=="object")return null;return{...n}}function Nn(n){if(!n)return null;return Gn.find((r)=>r.id===n)||null}function gi(n,r){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${r}`)}catch(i){console.debug("[app-perf] Ignoring performance.mark failure.",i,{traceId:n,phase:r})}}function D_(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let r=Nn(n);if(!r)return;for(let i of r.phases)performance.clearMarks(`piclaw:${n}:${i.phase}`)}catch(r){console.debug("[app-perf] Ignoring performance.clearMarks failure.",r,{traceId:n})}}function A_(n,r,i){let _=Vn.get(lr(n,r));if(_&&Nn(_)?.status==="active")fr(_,"cancelled","superseded",{replacementType:n,replacementChatJid:r});let c=I_(n),u={id:c,type:n,chatJid:r,startedAt:Hr(),detail:Tn(i),phases:[],status:"active"};return Gn.push(u),L_(Gn,100),Vn.set(lr(n,r),c),gi(c,"start"),c}function fr(n,r,i,_,c){let u=Nn(n);if(!u||u.status!=="active")return;if(i)u.phases.push({phase:i,at:Hr(),detail:Tn(_)}),gi(u.id,i);if(u.status=r,u.completedAt=Hr(),u.durationMs=u.completedAt-u.startedAt,c!==void 0)u.error=c instanceof Error?c.message:String(c);let f=lr(u.type,u.chatJid);if(Vn.get(f)===u.id)Vn.delete(f);D_(u.id)}function du(n=Z_()){let r=n?.__PICLAW_PERF__;if(r)return r;if(n)n.__PICLAW_PERF__=Ur;return Ur}function Dn(n=Z_()){return du(n)}function Gs(n,r,i){return Dn().ensureTrace(n,r,i)}function Vs(n,r){return Dn().getActiveTraceId(n,r)}function Ns(n,r,i){Dn().markTrace(n,r,i)}function Xs(n,r,i="settled",_){let c=Nn(n);if(!c||c.status!=="active")return!1;let u=new Set(c.phases.map((f)=>f.phase));if(!r.every((f)=>u.has(f)))return!1;return fr(n,"completed",i,_),!0}function Ps(n,r,i="failed",_){Dn().failTrace(n,r,i,_)}function Qs(n,r="cancelled",i){Dn().cancelTrace(n,r,i)}function $i(n){return Dn().recordRequest(n)}var Gn,ur,Vn,Ur;var Y_=D(()=>{Gn=[],ur=[],Vn=new Map;Ur={startTrace(n,r,i){return A_(n,r,i)},ensureTrace(n,r,i){let _=Vn.get(lr(n,r));if(_&&Nn(_)?.status==="active")return _;return A_(n,r,i)},getActiveTraceId(n,r){let i=Vn.get(lr(n,r));return i&&Nn(i)?.status==="active"?i:null},markTrace(n,r,i){let _=Nn(n);if(!_||_.status!=="active")return;_.phases.push({phase:r,at:Hr(),detail:Tn(i)}),gi(_.id,r)},completeTrace(n,r="settled",i){fr(n,"completed",r,i)},failTrace(n,r,i="failed",_){fr(n,"failed",i,_,r)},cancelTrace(n,r="cancelled",i){fr(n,"cancelled",r,i)},recordRequest(n){let r=I_("req");return ur.push({...n,id:r,detail:Tn(n.detail)}),L_(ur,300),r},getTraces(){return Gn.map((n)=>({...n,detail:Tn(n.detail),phases:n.phases.map((r)=>({...r,detail:Tn(r.detail)}))}))},getRequests(){return ur.map((n)=>({...n,detail:Tn(n.detail)}))},clear(){Gn.forEach((n)=>D_(n.id)),Gn.splice(0,Gn.length),ur.splice(0,ur.length),Vn.clear()},printSummary(){let n={traces:Ur.getTraces(),requests:Ur.getRequests()};return console.table(n.traces.map((r)=>({id:r.id,type:r.type,chatJid:r.chatJid,status:r.status,durationMs:Number(r.durationMs||0).toFixed(1),lastPhase:r.phases[r.phases.length-1]?.phase||"start"}))),n}}});function Yn(n){let r=Number(n||0);return Number.isFinite(r)&&r>0?r:null}function Su(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function eu(n){let r=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(r)}function C_(n){let r=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(r)}function J_(n=typeof window<"u"?window:null){let r=Yn(n?.innerWidth)??Yn(n?.screen?.availWidth)??Yn(n?.screen?.width)??0,i=Yn(n?.innerHeight)??Yn(n?.screen?.availHeight)??Yn(n?.screen?.height)??0,_=r&&i?Math.min(r,i):r||i,c=r&&i?Math.max(r,i):r||i,u=Su(n),f=Number(n?.navigator?.maxTouchPoints||0),s=u||f>1;if(_>0&&_<=640)return"mobile";if(eu(n)&&!C_(n))return"mobile";if(C_(n))return"tablet";if(s&&_>0&&_<=1100)return"tablet";if(c>0&&c<=1180&&_>0&&_<=900)return"tablet";return"desktop"}var y0={};_n(y0,{uploadWorkspaceFile:()=>c0,uploadMedia:()=>Nf,updateWorkspaceFile:()=>ef,updateScheduledTask:()=>xi,submitAdaptiveCardAction:()=>Pf,streamSidePrompt:()=>Qf,stopSessionRecording:()=>vi,stopAutoresearch:()=>kf,steerAgentQueueItem:()=>Tf,startSessionRecording:()=>bi,setWorkspaceVisibility:()=>o0,setAgentThoughtVisibility:()=>Af,sessionRecordingPlaybackUrl:()=>pi,sessionRecordingExportUrl:()=>sr,sendPeerAgentMessage:()=>vf,sendAgentMessage:()=>Kn,searchPosts:()=>rf,saveWorkspaceSettings:()=>ki,saveWebPushSubscription:()=>pf,saveUiState:()=>Bi,saveQuickActionsSettings:()=>ji,savePostAnnotations:()=>w0,saveEnvironmentOverride:()=>Gr,restoreChatBranch:()=>bf,respondToAgentRequest:()=>Xf,reorderAgentQueueItem:()=>Gf,renameWorkspaceFile:()=>f0,renameChatJid:()=>hf,renameChatBranch:()=>wf,removeAgentQueueItem:()=>Uf,reindexWorkspace:()=>Ef,purgeChatBranch:()=>xf,pruneChatBranch:()=>tf,previewSessionRecordingRedaction:()=>zi,moveWorkspaceEntry:()=>l0,mergeChatBranchIntoParent:()=>yf,getWorkspaceTree:()=>Cf,getWorkspaceRawUrl:()=>E_,getWorkspaceIndexStatus:()=>Of,getWorkspaceFileStat:()=>Sf,getWorkspaceFileDownloadUrl:()=>g0,getWorkspaceFile:()=>df,getWorkspaceDownloadUrl:()=>$0,getWorkspaceBranch:()=>Jf,getWebPushPublicKey:()=>Kf,getTimeline:()=>au,getThumbnailUrl:()=>If,getThread:()=>_f,getSystemMetrics:()=>cf,getSessionRecordings:()=>hi,getSessionRecording:()=>Tr,getScheduledTasks:()=>ti,getQuickActionsSettings:()=>Wi,getPostsByHashtag:()=>nf,getMediaUrl:()=>Zf,getMediaText:()=>Df,getMediaInfo:()=>Lf,getMediaBlob:()=>Yf,getEnvironmentSettings:()=>Ri,getChatBranches:()=>of,getAutoresearchStatus:()=>jf,getAgents:()=>Bf,getAgentThought:()=>qf,getAgentStatus:()=>Ff,getAgentQueueState:()=>Hf,getAgentModels:()=>Hi,getAgentContext:()=>Wf,getAgentCommands:()=>Fi,getActiveChatAgents:()=>sf,forkChatBranch:()=>gf,dismissAutoresearch:()=>Rf,deleteWorkspaceFile:()=>s0,deleteWebPushSubscription:()=>zf,deleteSessionRecording:()=>Ki,deletePost:()=>lf,createWorkspaceFile:()=>u0,createRootChatSession:()=>$f,createReply:()=>ff,createPost:()=>uf,completeInstanceOobe:()=>Vf,attachWorkspaceFile:()=>mf,addToWhitelist:()=>Mf,SSEClient:()=>d_});function vn(n,r={}){if(String(r.method||"GET").toUpperCase()!=="GET")return q(n,r);let _=wi.get(n);if(_)return _;let c=q(n,r).finally(()=>{wi.delete(n)});return wi.set(n,c),c}async function q(n,r={}){let i=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),_;try{_=await fetch(nn+n,{...r,headers:{"Content-Type":"application/json",...r.headers}})}catch(u){throw $i({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i,ok:!1,detail:{failedBeforeResponse:!0}}),u}let c=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i;if($i({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:c,status:_.status,ok:_.ok,requestId:_.headers?.get?.("x-request-id")||null,serverTiming:_.headers?.get?.("Server-Timing")||null}),!_.ok){let u=await _.json().catch(()=>({error:"Unknown error"}));throw Error(u.error||`HTTP ${_.status}`)}return _.json()}function O_(n){let r=String(n||"").split(`
`),i="message",_=[];for(let u of r)if(u.startsWith("event:"))i=u.slice(6).trim()||"message";else if(u.startsWith("data:"))_.push(u.slice(5).trim());let c=_.join(`
`);if(!c)return null;try{return{event:i,data:JSON.parse(c)}}catch{return{event:i,data:c}}}async function mu(n,r){if(!n.body)throw Error("Missing event stream body");let i=n.body.getReader(),_=new TextDecoder,c="";while(!0){let{value:f,done:s}=await i.read();if(s)break;c+=_.decode(f,{stream:!0});let o=c.split(`

`);c=o.pop()||"";for(let $ of o){let v=O_($);if(v)r(v.event,v.data)}}c+=_.decode();let u=O_(c);if(u)r(u.event,u.data)}async function au(n=10,r=null,i=null){let _=`/timeline?limit=${n}`;if(r)_+=`&before=${r}`;if(i)_+=`&chat_jid=${encodeURIComponent(i)}`;return vn(_)}async function nf(n,r=50,i=0,_=null){let c=_?`&chat_jid=${encodeURIComponent(_)}`:"";return q(`/hashtag/${encodeURIComponent(n)}?limit=${r}&offset=${i}${c}`)}async function rf(n,r=50,i=0,_=null,c="current",u=null,f=null){let s=_?`&chat_jid=${encodeURIComponent(_)}`:"",o=c?`&scope=${encodeURIComponent(c)}`:"",$=u?`&root_chat_jid=${encodeURIComponent(u)}`:"",v=f?.images?"&images=1":"",g=f?.attachments?"&attachments=1":"";return q(`/search?q=${encodeURIComponent(n)}&limit=${r}&offset=${i}${s}${o}${$}${v}${g}`)}async function _f(n,r=null){let i=r?`?chat_jid=${encodeURIComponent(r)}`:"";return q(`/thread/${n}${i}`)}async function cf(){return q("/agent/system-metrics")}async function ti(n={}){let r=new URLSearchParams;if(n?.id)r.set("id",String(n.id));if(n?.chatJid)r.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")r.set("status",String(n.status));if(n?.limit)r.set("limit",String(n.limit));if(n?.includeRunLogs)r.set("include_run_logs","1");if(n?.runLogLimit)r.set("run_log_limit",String(n.runLogLimit));let i=r.toString()?`?${r.toString()}`:"";return q(`/agent/scheduled-tasks${i}`)}async function xi(n,r,i={}){return q("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:r,allow_internal:i?.allowInternal===!0})})}async function hi(){return q("/agent/recordings")}async function Tr(n){return q(`/agent/recordings/${encodeURIComponent(n)}`)}async function bi(n={}){return q("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function vi(n={}){return q("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function Ki(n){return q(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function sr(n,r="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(r)}`}function pi(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function zi(n,r={}){return q("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...r})})}async function Bi(n){return q("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function uf(n,r=[],i=null){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return q(`/post${_}`,{method:"POST",body:JSON.stringify({content:n,media_ids:r})})}async function ff(n,r,i=[],_=null){let c=_?`?chat_jid=${encodeURIComponent(_)}`:"";return q(`/post/reply${c}`,{method:"POST",body:JSON.stringify({thread_id:n,content:r,media_ids:i})})}async function lf(n,r=!1,i=null){let _=i?`&chat_jid=${encodeURIComponent(i)}`:"",c=`/post/${n}?cascade=${r?"true":"false"}${_}`;return q(c,{method:"DELETE"})}async function Kn(n,r,i=null,_=[],c=null,u=null){let f=u?`?chat_jid=${encodeURIComponent(u)}`:"",s={content:r,thread_id:i,media_ids:_,client_context:{screen_hint:J_()}};if(c==="auto"||c==="queue"||c==="steer")s.mode=c;return q(`/agent/${n}/message${f}`,{method:"POST",body:JSON.stringify(s)})}async function Fi(n="web:default"){let r=typeof n==="string"&&n.trim()?n.trim():"web:default";return vn(`/agent/commands?chat_jid=${encodeURIComponent(r)}`)}async function Wi(){return q("/agent/settings/quick-actions")}async function ji(n){return q("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function ki(n){return q("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function Ri(){return q("/agent/settings/environment")}async function Gr(n){return q("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function sf(){return q("/agent/active-chats")}async function of(n=null,r={}){let i=new URLSearchParams;if(n)i.set("root_chat_jid",String(n));if(r?.includeArchived)i.set("include_archived","1");let _=i.toString()?`?${i.toString()}`:"";return vn(`/agent/branches${_}`)}async function gf(n,r={}){return q("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...r?.agentName?{agent_name:r.agentName}:{}})})}async function $f(n){return q("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function wf(n,r={}){return q("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function yf(n){return q("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function tf(n){return q("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function xf(n){return q("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function hf(n,r){return q("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:r})})}async function bf(n,r={}){return q("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function vf(n,r,i,_="auto",c={}){let u={source_chat_jid:n,content:i,mode:_,...c?.sourceAgentName?{source_agent_name:c.sourceAgentName}:{},...c?.targetBy==="agent_name"?{target_agent_name:r}:{target_chat_jid:r}};return q("/agent/peer-message",{method:"POST",body:JSON.stringify(u)})}async function Kf(){return q("/agent/push/vapid-public-key")}async function pf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return q("/agent/push/subscription",{method:"POST",body:JSON.stringify(i)})}async function zf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return q("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(i)})}async function Bf(){return vn("/agent/roster")}async function Ff(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return vn(`/agent/status${r}`)}async function Wf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return vn(`/agent/context${r}`)}async function jf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return vn(`/agent/autoresearch/status${r}`)}async function kf(n=null,r={}){return q("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:r?.generateReport!==!1})})}async function Rf(n=null){return q("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function Hf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return vn(`/agent/queue-state${r}`)}async function Uf(n,r=null){let i=await fetch(nn+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Tf(n,r=null){let i=await fetch(nn+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Gf(n,r,i=null){let _=await fetch(nn+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Hi(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return vn(`/agent/models${r}`)}async function Vf(n="provider-ready"){return q("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function Nf(n){let r=new FormData;r.append("file",n);let i=await fetch(nn+"/media/upload",{method:"POST",body:r});if(!i.ok){let _=await i.json().catch(()=>({error:"Upload failed"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Xf(n,r,i=null){let _=await fetch(nn+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to respond"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Pf(n){let r=await fetch(nn+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){let i=await r.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(i.error||`HTTP ${r.status}`)}return r.json()}async function Qf(n,r={}){let i=await fetch(nn+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:r.systemPrompt||void 0,chat_jid:r.chatJid||void 0}),signal:r.signal});if(!i.ok){let u=await i.json().catch(()=>({error:"Side prompt failed"}));throw Error(u.error||`HTTP ${i.status}`)}let _=null,c=null;if(await mu(i,(u,f)=>{if(r.onEvent?.(u,f),u==="side_prompt_thinking_delta")r.onThinkingDelta?.(f?.delta||"");else if(u==="side_prompt_text_delta")r.onTextDelta?.(f?.delta||"");else if(u==="side_prompt_done")_=f;else if(u==="side_prompt_error")c=f}),c){let u=Error(c?.error||"Side prompt failed");throw u.payload=c,u}return _}async function Mf(n,r){let i=await fetch(nn+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function qf(n,r="thought"){let i=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(r)}`;return q(i)}async function Af(n,r,i){return q("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:r,expanded:Boolean(i)})})}function Zf(n){return`${nn}/media/${n}`}function If(n){return`${nn}/media/${n}/thumbnail`}async function Lf(n){let r=await fetch(`${nn}/media/${n}/info`);if(!r.ok)throw Error("Failed to get media info");return r.json()}async function Df(n){let r=await fetch(`${nn}/media/${n}`);if(!r.ok)throw Error("Failed to load media text");return r.text()}async function Yf(n){let r=await fetch(`${nn}/media/${n}`);if(!r.ok)throw Error("Failed to load media blob");return r.blob()}async function Cf(n="",r=2,i=!1){let _=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${r}&show_hidden=${i?"1":"0"}`;return q(_)}async function Jf(n=""){let r=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return q(r)}async function Of(n="all"){let r=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return q(r)}async function Ef(n="all"){return q("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function df(n,r=20000,i=null){let _=i?`&mode=${encodeURIComponent(i)}`:"",c=`/workspace/file?path=${encodeURIComponent(n)}&max=${r}${_}`;return q(c)}async function Sf(n){return q(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function ef(n,r){return q("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:r})})}async function mf(n){return q("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function n0(n,r="",i={}){let _=new URLSearchParams;if(r)_.set("path",r);if(i.overwrite)_.set("overwrite","1");let c=_.toString();return c?`${n}?${c}`:n}function r0(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function i0(n,r,i,_){return new Promise((c,u)=>{let f=new XMLHttpRequest;f.open("POST",nn+r);for(let[s,o]of Object.entries(i||{}))if(o!==void 0&&o!==null)f.setRequestHeader(s,String(o));f.upload.onprogress=(s)=>{if(typeof _==="function")_({loaded:s.lengthComputable?s.loaded:0,total:s.lengthComputable?s.total:n.size,lengthComputable:s.lengthComputable})},f.onload=()=>{try{let s=f.responseText?JSON.parse(f.responseText):{};if(f.status>=200&&f.status<300)c(s);else{let o=Error(s.error||`HTTP ${f.status}`);o.status=f.status,o.code=s.code,u(o)}}catch{let s=Error(`HTTP ${f.status}`);s.status=f.status,u(s)}},f.onerror=()=>u(Error("Upload failed (network error)")),f.ontimeout=()=>u(Error("Upload timed out")),f.send(n)})}async function _0(n,r="",i={}){let _=r0(),c=n0("/workspace/upload-chunk",r,i),u=Math.max(1,Math.min(yi,Number(i.chunkSize)||af)),f=Math.max(0,Number(n?.size)||0),s=Math.max(1,Math.ceil(f/u)),o=0,$=null;for(let v=0;v<s;v+=1){let g=v*u,K=Math.min(f,g+u),h=n.slice(g,K),b=h.size;if($=await i0(h,c,{"X-Upload-Id":_,"X-Chunk-Index":v,"X-Chunk-Total":s,"X-File-Name":n?.name||"upload.bin","X-File-Size":f},(B)=>{if(typeof i.onProgress!=="function")return;let t=Math.min(f,o+(B?.loaded||0)),p=f||1;i.onProgress({loaded:t,total:p,percent:Math.round(t/p*100),chunkIndex:v,chunkTotal:s})}),o+=b,typeof i.onProgress==="function"){let B=f||1,t=f?o:B;i.onProgress({loaded:t,total:B,percent:Math.round(t/B*100),chunkIndex:v+1,chunkTotal:s})}}return $}async function c0(n,r="",i={}){if(n?.size>yi){let _=(n.size/1048576).toFixed(0),c=(yi/1048576).toFixed(0),u=Error(`File too large (${_} MB). Maximum upload size is ${c} MB.`);throw u.code="file_too_large",u}return await _0(n,r,i)}async function u0(n,r,i=""){let _=await fetch(nn+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r,content:i})});if(!_.ok){let c=await _.json().catch(()=>({error:"Create failed"})),u=Error(c.error||`HTTP ${_.status}`);throw u.status=_.status,u.code=c.code,u}return _.json()}async function f0(n,r){let i=await fetch(nn+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Rename failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function l0(n,r){let i=await fetch(nn+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Move failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function s0(n){let r=`/workspace/file?path=${encodeURIComponent(n||"")}`;return q(r,{method:"DELETE"})}async function o0(n,r=!1){return q("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(r)})})}function E_(n,r={}){let i=new URLSearchParams({path:String(n||"")});if(r.download)i.set("download","1");return`${nn}/workspace/raw?${i.toString()}`}function g0(n){return E_(n,{download:!0})}function $0(n,r=!1){let i=`path=${encodeURIComponent(n||"")}&show_hidden=${r?"1":"0"}`;return`${nn}/workspace/download?${i}`}class d_{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,r,i={}){this.onEvent=n,this.onStatusChange=r,this.chatJid=typeof i?.chatJid==="string"&&i.chatJid.trim()?i.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(nn+"/sse/stream"+n);let r=(i)=>{this.eventSource.addEventListener(i,(_)=>{this.markActivity(),this.onEvent(i,JSON.parse(_.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),r("new_post"),r("new_reply"),r("agent_response"),r("interaction_updated"),r("interaction_deleted"),r("agent_status"),r("agent_steer_queued"),r("agent_followup_queued"),r("agent_followup_consumed"),r("agent_followup_removed"),r("workspace_update"),r("agent_draft"),r("agent_draft_delta"),r("agent_thought"),r("agent_thought_delta"),r("model_changed"),r("ui_theme"),r("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(r)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,r=60000,i=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,i+r),this.reconnectAttempts=0;let _=Math.max(this.cooldownUntil-i,0),c=Math.max(this.reconnectDelay,_);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},c),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}async function w0(n,r,i){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return q(`/post/${n}/annotations${_}`,{method:"PATCH",body:JSON.stringify({annotations:r})})}var nn="",wi,yi=1073741824,af=8388608;var pn=D(()=>{Y_();wi=new Map});function kn(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function un(n,r){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,r)}catch{return}}function Ui(n,r=!1){let i=kn(n);if(i===null)return r;return i==="true"}function Ti(n,r=null){let i=kn(n);if(i===null)return r;let _=parseInt(i,10);return Number.isFinite(_)?_:r}function S_(n){let r=kn(n);if(!r)return null;try{return JSON.parse(r)}catch{return null}}function x0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(Nr,{detail:{enabled:Boolean(n)}}))}function a_(n){if(typeof fetch!=="function")return;Bi({ui_meters:n}).catch((r)=>{console.debug("[meters] Failed to persist meters UI state.",r)})}function h0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(t0,{detail:{collapsed:Boolean(n)}}))}function Gi(n=!1){return Ui(e_,n)}function Ys(n=!1){return Ui(m_,n)}function Vr(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)un(e_,c?"true":"false");if(_)a_({enabled:c});return x0(c),c}function b0(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)un(m_,c?"true":"false");if(_)a_({collapsed:c});return h0(c),c}function Cs(n){let r=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")Vr(Boolean(n.enabled),{persistServer:!1});else if(r==="toggle"){let i=!Gi(!1);Vr(i,{persistServer:!1})}if(typeof n?.collapsed==="boolean")b0(Boolean(n.collapsed),{persistServer:!1})}var e_="piclaw_system_meters_enabled",m_="piclaw_system_meters_collapsed",Nr="piclaw-meters-change",t0="piclaw-meters-collapsed-change";var nc=D(()=>{pn()});function rc(n,r){if(n===""||n===null||n===void 0)return r;let i=Number(n);return Number.isFinite(i)?i:r}function ic(n,{min:r=-1/0,max:i=1/0}={}){let _=Number.isFinite(Number(r))?Number(r):-1/0,c=Number.isFinite(Number(i))?Number(i):1/0;return Math.min(c,Math.max(_,Number(n)))}function Cn(n,{fallback:r=0,min:i=-1/0,max:_=1/0}={}){let c=rc(n,r);return ic(c,{min:i,max:_})}function v0(n,{direction:r=1,step:i=1,fallback:_=0,min:c=-1/0,max:u=1/0}={}){let f=Cn(n,{fallback:_,min:c,max:u}),s=Math.abs(rc(i,1))||1,o=Number(r)<0?-1:1;return ic(f+o*s,{min:c,max:u})}function m({value:n,min:r,max:i,step:_=1,fallback:c,width:u="80px",disabled:f=!1,label:s,onChange:o}){let $=Number.isFinite(Number(c))?Number(c):Cn(n,{fallback:0,min:r,max:i}),[v,g]=w(String(n??$)),K=L(!1);P(()=>{if(!K.current)g(String(n??$))},[n,$]);let h=H((B)=>{K.current=!1;let t=Cn(B,{fallback:$,min:r,max:i});g(String(t)),o?.(t)},[$,r,i,o]),b=H((B)=>{K.current=!1;let t=v0(n,{direction:B,step:_,fallback:$,min:r,max:i});g(String(t)),o?.(t)},[$,i,r,o,_,n]);return l`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${s||"value"}`}
                title=${`Decrease ${s||"value"}`}
                disabled=${f}
                onClick=${()=>b(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${v}
                disabled=${f}
                style=${`width:${u}`}
                onInput=${(B)=>{K.current=!0,g(B.target.value)}}
                onBlur=${(B)=>h(B.target.value)}
                onKeyDown=${(B)=>{if(B.key==="Enter")B.preventDefault(),h(B.target.value),B.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${s||"value"}`}
                title=${`Increase ${s||"value"}`}
                disabled=${f}
                onClick=${()=>b(1)}
            >+</button>
        </span>
    `}var Jn=D(()=>{d()});function _c(n){let r=String(n||"").trim();if(!r)return"";if(r.startsWith("http://")||r.startsWith("https://")||r.startsWith("data:")||r.startsWith("blob:"))return r;if(r.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(r.slice(11))}`;if(r.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(r))return"";if(r.startsWith("\\\\"))return"";if(r.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(r.replace(/^\.\//,""))}`}function cc({value:n,onChange:r}){let i=L(null),[_,c]=w(_c(n));P(()=>{c(_c(n))},[n]);let u=H((f)=>{let s=f.target.files?.[0];if(!s)return;let o=new FileReader;o.onload=()=>{let $=o.result;c($),r?.($)},o.readAsDataURL(s)},[r]);return l`
        <div class="settings-avatar-inline" onClick=${()=>i.current?.click()} title="Click to upload">
            ${_?l`<img src=${_} alt="avatar" />`:l`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${i} style="display:none" onChange=${u} />
        </div>
    `}function uc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function K0(n,r={}){let i=typeof n==="string"?n:"";if(!i)return!1;let _=r.navigator??(typeof navigator<"u"?navigator:null),c=r.document??(typeof document<"u"?document:null);if(_?.clipboard?.writeText)try{return await _.clipboard.writeText(i),!0}catch(u){}try{if(!c?.body||typeof c.createElement!=="function"||typeof c.execCommand!=="function")return!1;let u=c.createElement("textarea");u.value=i,u.setAttribute?.("readonly",""),u.style.position="fixed",u.style.left="-9999px",u.style.top="0",u.style.opacity="0",c.body.appendChild(u),u.focus?.(),u.select?.();let f=Boolean(c.execCommand("copy"));return c.body.removeChild(u),f}catch(u){return!1}}function Vi({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(""),[u,f]=w(""),[s,o]=w(""),[$,v]=w(""),[g,K]=w(32),[h,b]=w(256),[B,t]=w(""),[p,j]=w(!1),[V,F]=w(!1),[U,z]=w(!1),[k,Q]=w(()=>Gi(!1)),[y,T]=w(!1),W=L(""),x=L(null),G=L(!0);P(()=>{return G.current=!0,()=>{G.current=!1}},[]);let M=H((Y)=>{let X=uc(Y);c(X.userName),f(X.userAvatar),o(X.assistantName),v(X.assistantAvatar),K(X.composeUploadLimitMb),b(X.workspaceUploadLimitMb),t(Y?.widgetToken||""),W.current=JSON.stringify(X)},[]);P(()=>{M(n||{})},[n,M]),P(()=>{let Y=(X)=>{Q(Boolean(X?.detail?.enabled))};return window.addEventListener(Nr,Y),()=>window.removeEventListener(Nr,Y)},[]);let C=I(()=>JSON.stringify(uc({userName:_,userAvatar:u,assistantName:s,assistantAvatar:$,composeUploadLimitMb:g,workspaceUploadLimitMb:h})),[_,u,s,$,g,h]);P(()=>{if(C===W.current)return;if(x.current)clearTimeout(x.current);return x.current=setTimeout(async()=>{if(!G.current)return;let Y=document.activeElement;if(Y&&Y.closest?.(".settings-number-stepper"))return;try{let X=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:C}),Z=await X.json().catch(()=>({}));if(!G.current)return;if(!X.ok||!Z?.ok||!Z?.settings)return;W.current=C,i?.(Z.settings),T(!0),setTimeout(()=>{if(G.current)T(!1)},4000)}catch(X){console.warn("[settings/general] Failed to persist general settings snapshot.",X)}},800),()=>{if(x.current)clearTimeout(x.current)}},[C,i]);let J=n?.instanceTotp||{configured:!1,issuer:s||"Piclaw",label:_?`${s||"Piclaw"}:${_}`:s||"Piclaw",secret:"",otpauth:"",qrSvg:""},gn=H(async()=>{if(!B)return;if(await K0(B))F(!0),setTimeout(()=>{if(G.current)F(!1)},3000);else r?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[B,r]),a=H(async()=>{if(U)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;z(!0);try{let Y=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),X=await Y.json().catch(()=>({}));if(!Y.ok||!X?.ok||!X?.settings)throw Error(X?.error||"Failed to regenerate widget token.");t(X.settings.widgetToken||""),i?.(X.settings),T(!0),setTimeout(()=>{if(G.current)T(!1)},4000)}catch(Y){console.warn("[settings/general] Failed to regenerate widget token.",Y)}finally{if(G.current)z(!1)}},[U,i]),fn=typeof window<"u"&&window.isSecureContext,ln=B?"•".repeat(Math.min(Math.max(B.length,16),48)):"—",wn=p?B||"—":ln;return l`
        <div class="settings-section">
            ${y&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${cc} value=${u} onChange=${f} />
                <input type="text" value=${_} onInput=${(Y)=>c(Y.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${cc} value=${$} onChange=${v} />
                <input type="text" value=${s} onInput=${(Y)=>o(Y.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${fn?l`
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
                    <input type="checkbox" checked=${k}
                        onChange=${()=>{let Y=Vr(!k);Q(Y)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${m}
                    label="compose upload limit"
                    value=${g}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${m}
                    label="workspace upload limit"
                    value=${h}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${b}
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
                        <button class=${`settings-keychain-reveal-btn${p?" active":""}`}
                            type="button"
                            onClick=${()=>j((Y)=>!Y)}
                            disabled=${!B}
                            title=${p?"Hide token":"Reveal token"}>
                            ${p?l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${gn} disabled=${!B} title="Copy token">
                            ${V?l`<span class="settings-widget-token-copied">Copied</span>`:l`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${a} disabled=${U}>${U?"Regenerating…":"Regenerate"}</button>
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
                            ${J.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${J.configured?l`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:J.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${J.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${J.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${J.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var fc=D(()=>{d();nc();Jn()});var sc={};_n(sc,{SessionsSection:()=>p0});function lc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function p0({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(!0),[u,f]=w(16),[s,o]=w(4000),[$,v]=w(3),[g,K]=w(64),[h,b]=w("none"),[B,t]=w(!1),p=L(""),j=L(null),V=L(!0);P(()=>{return V.current=!0,()=>{V.current=!1}},[]);let F=H((z)=>{let k=lc(z);c(k.sessionAutoRotate),f(k.sessionMaxSizeMb),o(k.sessionMaxLines),v(k.sessionMaxCompactions),K(k.toolUseBudget),b(k.sessionIsolation),p.current=JSON.stringify(k)},[]);P(()=>{F(n||{})},[n,F]);let U=I(()=>JSON.stringify(lc({sessionAutoRotate:_,sessionMaxSizeMb:u,sessionMaxLines:s,sessionMaxCompactions:$,toolUseBudget:g,sessionIsolation:h})),[_,u,s,$,g,h]);return P(()=>{if(U===p.current)return;if(j.current)clearTimeout(j.current);return j.current=setTimeout(async()=>{if(!V.current)return;let z=document.activeElement;if(z&&z.closest?.(".settings-number-stepper"))return;try{let k=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:U}),Q=await k.json().catch(()=>({}));if(!V.current)return;if(!k.ok||!Q?.ok||!Q?.settings)return;p.current=U,i?.(Q.settings),t(!0),setTimeout(()=>{if(V.current)t(!1)},4000)}catch(k){console.warn("[settings/sessions] Failed to persist session settings.",k)}},800),()=>{if(j.current)clearTimeout(j.current)}},[U,i]),l`
        <div class="settings-section">
            ${B&&l`
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
                <${m}
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
                <${m}
                    label="tool use budget"
                    value=${g}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${h} onChange=${(z)=>b(z.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var oc=D(()=>{d();Jn()});var gc={};_n(gc,{__recordingsSettingsTest:()=>W0,RecordingsSection:()=>F0});function Pr(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Ni(n){if(n==="full")return"full / trusted";if(n==="metadata")return"metadata only";return"redacted"}function Xr({children:n,type:r="neutral"}){return l`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function z0(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function or(n){return String(n||"").split(`
`).map((r)=>r.trim()).filter(Boolean)}function B0({recording:n,details:r,onDelete:i,onRefresh:_}){if(!n)return l`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let c=r?.meta||n,u=Array.isArray(r?.events)?r.events:[],f=u.reduce((o,$)=>o+(Array.isArray($.redactions)?$.redactions.length:0),0),s=u.reduce((o,$)=>{let v=$.kind||"event";return o[v]=(o[v]||0)+1,o},{});return l`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${c.title||c.id}</h4>
                    <code>${c.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(pi(c.id),"_blank","noopener,noreferrer")}>Playback</button>
                    <button onClick=${_}>Refresh</button>
                    <button class="danger" onClick=${()=>i(c)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${c.status||"—"}</strong>
                <span>Mode</span><strong>${Ni(c.mode)}</strong>
                <span>Chat</span><code>${c.chatJid||"—"}</code>
                <span>Started</span><strong>${Pr(c.startedAt)}</strong>
                <span>Ended</span><strong>${Pr(c.endedAt)}</strong>
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
                    ${Object.entries(s).map(([o,$])=>l`<${Xr}>${o}: ${$}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(u.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function F0({filter:n="",setStatus:r}){let[i,_]=w([]),[c,u]=w([]),[f,s]=w(!0),[o,$]=w(null),[v,g]=w(null),[K,h]=w(null),[b,B]=w(!1),[t,p]=w(z0),[j,V]=w(""),[F,U]=w("redacted"),[z,k]=w(!0),[Q,y]=w(""),[T,W]=w(""),[x,G]=w('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[M,C]=w(null);P(()=>{let N=(S)=>{let cn=String(S?.detail?.chatJid||"").trim();if(cn)p(cn)};return window.addEventListener("piclaw:current-chat-changed",N),()=>window.removeEventListener("piclaw:current-chat-changed",N)},[]);let J=H(async(N=v)=>{s(!0),$(null);try{let S=await hi(),cn=S.recordings||[];_(cn),u(S.active||[]);let Fn=cn.find((R)=>R.id===N)||cn[0]||null;if(g(Fn?.id||null),Fn?.id)h(await Tr(Fn.id));else h(null)}catch(S){$(S?.message||"Failed to load recordings.")}finally{s(!1)}},[v]);P(()=>{J()},[J]);let gn=I(()=>i.find((N)=>N.id===v)||null,[i,v]),a=I(()=>c.find((N)=>N.chatJid===t)||null,[c,t]),fn=String(n||"").trim().toLowerCase(),ln=I(()=>{if(!fn)return i;return i.filter((N)=>[N.id,N.title,N.chatJid,N.status,N.mode].some((S)=>String(S||"").toLowerCase().includes(fn)))},[i,fn]),wn=H(async(N)=>{if(g(N?.id||null),h(null),!N?.id)return;try{h(await Tr(N.id))}catch(S){r?.(S?.message||"Failed to load recording.","error")}},[r]),Y=H(async()=>{if(b)return;B(!0);try{let N={keys:or(Q),patterns:or(T)},S=await bi({chat_jid:t,title:j||void 0,mode:F,include_timeline_snapshot:z,timeline_snapshot_limit:80,redaction:N});r?.(`Recording started for ${t}.`,"success"),await J(S?.recording?.id)}catch(N){r?.(N?.message||"Failed to start recording.","error")}finally{B(!1)}},[b,t,Q,T,z,J,F,r,j]),X=H(async(N=a)=>{if(!N||b)return;B(!0);try{let S=await vi({id:N.id});r?.(`Recording stopped for ${N.chatJid}.`,"success"),await J(S?.recording?.id)}catch(S){r?.(S?.message||"Failed to stop recording.","error")}finally{B(!1)}},[b,a,J,r]),Z=H(async(N)=>{if(!N||b)return;if(!window.confirm(`Delete recording ${N.id}?

${N.title||""}`))return;B(!0);try{await Ki(N.id),r?.("Recording deleted.","success"),await J(null)}catch(S){r?.(S?.message||"Failed to delete recording.","error")}finally{B(!1)}},[b,J,r]),tn=H(async()=>{try{let N=JSON.parse(x||"null"),S=await zi(N,{mode:F,redaction:{keys:or(Q),patterns:or(T)}});C(S.preview)}catch(N){C({error:N?.message||"Preview failed."})}},[Q,T,F,x]);return l`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${t} onInput=${(N)=>p(N.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${j} onInput=${(N)=>V(N.target.value)} /></label>
                    <label>Mode<select value=${F} onChange=${(N)=>U(N.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${z} onChange=${(N)=>k(N.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${Q} onInput=${(N)=>y(N.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${T} onInput=${(N)=>W(N.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${a?l`<button onClick=${()=>X(a)} disabled=${b}>Stop current chat recording</button>`:l`<button onClick=${Y} disabled=${b}>Start recording</button>`}
                    <button onClick=${()=>J()} disabled=${f}>Refresh</button>
                </div>
                ${c.length>0&&l`<div class="settings-recording-active-row">${c.map((N)=>l`<${Xr} type="active">REC ${N.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${x} onInput=${(N)=>G(N.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${tn}>Preview redaction</button></div>
                ${M&&l`<pre>${JSON.stringify(M,null,2)}</pre>`}
            </details>

            ${f&&l`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${o&&l`<div class="settings-error-state">${o}</div>`}
            ${!f&&!o&&i.length===0&&l`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!f&&!o&&i.length>0&&l`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${ln.map((N)=>l`
                            <button class=${`settings-task-row ${N.id===v?"active":""}`} onClick=${()=>wn(N)}>
                                <span class="settings-task-row-main"><strong>${N.title||N.id}</strong><span>${N.chatJid} · ${Pr(N.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${Xr} type=${N.status==="recording"?"active":"completed"}>${N.status}<//><${Xr}>${Ni(N.mode)}<//></span>
                                <span class="settings-task-row-times">${N.eventCount||0} events</span>
                            </button>
                        `)}
                        ${ln.length===0&&l`<p class="settings-hint">No recordings match “${n}”.</p>`}
                    </div>
                    <${B0} recording=${gn} details=${K} onDelete=${Z} onRefresh=${()=>gn&&wn(gn)} />
                </div>
            `}
        </div>
    `}var W0;var $c=D(()=>{d();pn();W0={formatDateTime:Pr,modeLabel:Ni,parseList:or}});var wc={};_n(wc,{CompactionSection:()=>k0});function j0(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),toolResultSemanticSummaryEnabled:Boolean(n.toolResultSemanticSummaryEnabled??!0),toolResultSemanticSummaryMaxInputChars:n.toolResultSemanticSummaryMaxInputChars??12000,toolResultSemanticSummaryMaxTokens:n.toolResultSemanticSummaryMaxTokens??320,toolResultSemanticSummaryTimeoutSec:n.toolResultSemanticSummaryTimeoutSec??12,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function Xi(n){let r=String(n||"").trim();if(!r)return"—";let i=new Date(r);if(Number.isNaN(i.getTime()))return r;return i.toLocaleString()}function k0({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(180),[u,f]=w(15),[s,o]=w(360),[$,v]=w(75),[g,K]=w(0.5),[h,b]=w(!0),[B,t]=w(!0),[p,j]=w(12000),[V,F]=w(320),[U,z]=w(12),[k,Q]=w(!1),[y,T]=w(120),[W,x]=w([]),[G,M]=w([]),[C,J]=w(!1),gn=L(""),a=L(null),fn=L(!0);P(()=>{return fn.current=!0,()=>{fn.current=!1}},[]);let ln=H((X)=>{let Z=j0(X);c(Z.compactionTimeoutSec),f(Z.compactionBackoffBaseMin),o(Z.compactionBackoffMaxMin),v(Z.compactionThresholdPercent),K(Z.compactionBackoffDecayFactor),b(Z.toolResultCompactionEnabled),t(Z.toolResultSemanticSummaryEnabled),j(Z.toolResultSemanticSummaryMaxInputChars),F(Z.toolResultSemanticSummaryMaxTokens),z(Z.toolResultSemanticSummaryTimeoutSec),Q(Z.progressWatchdogEnabled),T(Z.progressWatchdogTimeoutSec),x(Z.compactionBackoffs),M(Z.progressWatchdogPhases),gn.current=JSON.stringify({compactionTimeoutSec:Z.compactionTimeoutSec,compactionBackoffBaseMin:Z.compactionBackoffBaseMin,compactionBackoffMaxMin:Z.compactionBackoffMaxMin,compactionThresholdPercent:Z.compactionThresholdPercent,compactionBackoffDecayFactor:Z.compactionBackoffDecayFactor,toolResultCompactionEnabled:Z.toolResultCompactionEnabled,toolResultSemanticSummaryEnabled:Z.toolResultSemanticSummaryEnabled,toolResultSemanticSummaryMaxInputChars:Z.toolResultSemanticSummaryMaxInputChars,toolResultSemanticSummaryMaxTokens:Z.toolResultSemanticSummaryMaxTokens,toolResultSemanticSummaryTimeoutSec:Z.toolResultSemanticSummaryTimeoutSec,progressWatchdogEnabled:Z.progressWatchdogEnabled,progressWatchdogTimeoutSec:Z.progressWatchdogTimeoutSec})},[]);P(()=>{ln(n||{})},[n,ln]);let wn=I(()=>JSON.stringify({compactionTimeoutSec:_,compactionBackoffBaseMin:u,compactionBackoffMaxMin:s,compactionThresholdPercent:$,compactionBackoffDecayFactor:g,toolResultCompactionEnabled:h,toolResultSemanticSummaryEnabled:B,toolResultSemanticSummaryMaxInputChars:p,toolResultSemanticSummaryMaxTokens:V,toolResultSemanticSummaryTimeoutSec:U,progressWatchdogEnabled:k,progressWatchdogTimeoutSec:y}),[_,u,s,$,g,h,B,p,V,U,k,y]);P(()=>{if(wn===gn.current)return;if(a.current)clearTimeout(a.current);return a.current=setTimeout(async()=>{if(!fn.current)return;try{r?.("Saving compaction settings…","info");let X=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:wn}),Z=await X.json().catch(()=>({}));if(!fn.current)return;if(!X.ok||!Z?.ok||!Z?.settings){r?.(Z?.error||"Failed to save compaction settings.","error");return}gn.current=wn,i?.(Z.settings),ln({...n||{},...Z.settings||{}}),r?.("Compaction settings saved.","success"),J(!0),setTimeout(()=>{if(fn.current)J(!1),r?.(null)},4000)}catch(X){if(console.warn("[settings/compaction] Failed to persist compaction settings.",X),fn.current)r?.("Failed to save compaction settings.","error")}},800),()=>{if(a.current)clearTimeout(a.current)}},[wn,i,r,ln,n]);let Y=H(async(X)=>{try{r?.(`Clearing compaction suppression for ${X}…`,"info");let Z=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:X})}),tn=await Z.json().catch(()=>({}));if(!Z.ok||!tn?.ok||!tn?.settings){r?.(tn?.error||"Failed to clear compaction suppression.","error");return}i?.(tn.settings),ln({...n||{},...tn.settings||{}}),r?.(`Cleared compaction suppression for ${X}.`,"success")}catch(Z){console.warn("[settings/compaction] Failed to clear compaction suppression.",Z),r?.("Failed to clear compaction suppression.","error")}},[ln,i,r,n]);return l`
        <div class="settings-section">
            ${C&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Enable tool-result compaction</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${h} onChange=${(X)=>b(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">When disabled, large tool results stay inline and are not externalized into searchable tool-output handles.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summaries for compacted tool results</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${B} onChange=${(X)=>t(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">When enabled, compacted outputs include a semantic summary generated with the active model (preview fallback on failure).</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summary input limit (chars)</label>
                <${m}
                    label="semantic summary input limit"
                    value=${p}
                    min=${500}
                    max=${200000}
                    fallback=${12000}
                    width="100px"
                    disabled=${!B}
                    onChange=${j}
                />
                <span class="settings-hint" style="margin:0">Maximum characters sampled from full tool output for semantic summarization.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary output max tokens</label>
                <${m}
                    label="semantic summary max tokens"
                    value=${V}
                    min=${64}
                    max=${4096}
                    fallback=${320}
                    width="90px"
                    disabled=${!B}
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">Upper bound for generated summary length.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary timeout (sec)</label>
                <${m}
                    label="semantic summary timeout"
                    value=${U}
                    min=${1}
                    max=${300}
                    fallback=${12}
                    width="90px"
                    disabled=${!B}
                    onChange=${z}
                />
                <span class="settings-hint" style="margin:0">Abort semantic summary generation after this timeout and fall back to preview compaction.</span>
            </div>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${m}
                    label="compaction threshold"
                    value=${$}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${v}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${m}
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
                <${m}
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
                <${m}
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
                <${m}
                    label="backoff decay factor"
                    value=${Math.round(g*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(X)=>K(X/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${k} onChange=${(X)=>Q(Boolean(X.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${m}
                    label="watchdog timeout"
                    value=${y}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!k}
                    onChange=${T}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${W.length===0?l`
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
                            ${W.map((X)=>l`
                                <tr>
                                    <td><code>${X.chatJid}</code></td>
                                    <td>${X.failureCount}</td>
                                    <td>${Xi(X.backoffUntil)}</td>
                                    <td title=${X.lastErrorMessage||""}>${X.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>Y(X.chatJid)}>
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
            ${G.length===0?l`
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
                            ${G.map((X)=>l`
                                <tr>
                                    <td><code>${X.chatJid}</code></td>
                                    <td>${X.phase}</td>
                                    <td>${Xi(X.startedAt)}</td>
                                    <td>${Xi(X.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var yc=D(()=>{d();Jn()});function xc(n){let r=String(n||"").trim().toLowerCase();if(!r)return null;let i=U0[r]||r;if(/^f(?:[1-9]|1[0-2])$/.test(i))return i;if(T0.has(i))return i;if(i.length===1)return i;if(/^[a-z0-9]+$/.test(i))return i;return null}function On(n){let r=String(n||"").trim();if(!r)return null;let i=r.split("+").map((u)=>u.trim()).filter(Boolean);if(!i.length)return null;let _={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let u of i){let f=u.toLowerCase(),s=H0[f];if(s){_[s]=!0;continue}if(_.key)return null;let o=xc(u);if(!o||o==="escape")return null;_.key=o}if(!_.key)return null;let c=[];if(_.ctrl)c.push("ctrl");if(_.meta)c.push("meta");if(_.alt)c.push("alt");if(_.shift)c.push("shift");return c.push(_.key),c.join("+")}function hc(n){return String(n||"").split(/[\n,]/).map((r)=>On(r)).filter((r)=>Boolean(r))}function Rn(n){return n.join(", ")}function Qi(){let n=S_(tc);if(!n||typeof n!=="object")return{};let r={};for(let i of gr){let _=n[i.id];if(!Array.isArray(_))continue;let c=_.map((u)=>On(String(u||""))).filter((u)=>Boolean(u));r[i.id]=[...new Set(c)]}return r}function Pi(n){if(un(tc,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function bc(n){return R0.get(n)}function $r(n){let r=Qi()[n];if(Array.isArray(r))return r;return[...bc(n).defaultBindings]}function vc(n,r){let i=Qi(),_=bc(n).defaultBindings,c=[...new Set(r.map((u)=>On(u)).filter((u)=>Boolean(u)))];if(c.length===_.length&&c.every((u,f)=>u===_[f]))delete i[n];else i[n]=c;Pi(i)}function Mi(n){if(!n){Pi({});return}let r=Qi();delete r[n],Pi(r)}function Qr(){let n={};for(let r of gr)n[r.id]=$r(r.id);return n}function G0(n){let r=typeof n==="string"?n:"";if(!r)return"";if(r.length===1)return r.toLowerCase();return xc(r)||r.toLowerCase()}function V0(n){let r=On(n);if(!r)return null;let i={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let _ of r.split("+")){if(_==="ctrl"||_==="meta"||_==="alt"||_==="shift"){i[_]=!0;continue}i.key=_}return i.key?i:null}function N0(n,r){let i=V0(r);if(!i)return!1;if(G0(n?.key)!==i.key)return!1;let c=!i.shift&&i.key.length===1&&/[^a-z0-9]/i.test(i.key);return Boolean(n?.ctrlKey)===i.ctrl&&Boolean(n?.metaKey)===i.meta&&Boolean(n?.altKey)===i.alt&&(c||Boolean(n?.shiftKey)===i.shift)}function fo(n,r){return $r(r).some((i)=>N0(n,i))}var tc="piclaw_keyboard_shortcuts_v1",gr,R0,H0,U0,T0;var Kc=D(()=>{gr=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],R0=new Map(gr.map((n)=>[n.id,n])),H0={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},U0={esc:"escape",return:"enter",spacebar:"space"},T0=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var pc={};_n(pc,{KeyboardSection:()=>P0});function X0(n,r,i){let _=String(n||"").trim().toLowerCase();if(!_)return!0;return[r.label,r.description,i,...r.defaultBindings||[]].some((c)=>String(c||"").toLowerCase().includes(_))}function P0({filter:n="",setStatus:r}){let[i,_]=w(()=>{let o=Qr();return Object.fromEntries(Object.entries(o).map(([$,v])=>[$,Rn(v)]))});P(()=>{let o=()=>{let $=Qr();_(Object.fromEntries(Object.entries($).map(([v,g])=>[v,Rn(g)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",o),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",o)},[]);let c=I(()=>gr.filter((o)=>{let $=String(i[o.id]||"");return X0(n,o,$)}),[i,n]),u=(o)=>{let $=String(i[o]||"").trim(),g=($?$.split(/[\n,]/).map((h)=>h.trim()).filter(Boolean):[]).filter((h)=>!On(h));if(g.length>0){r?.(`Invalid shortcut: ${g[0]}. Escape is reserved and cannot be rebound.`,"error");return}let K=hc($);vc(o,K),_((h)=>({...h,[o]:Rn($r(o))})),r?.("Keyboard shortcuts saved.","success")},f=(o)=>{Mi(o),_(($)=>({...$,[o]:Rn($r(o))})),r?.("Keyboard shortcut reset to default.","success")};return l`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{Mi();let o=Qr();_(Object.fromEntries(Object.entries(o).map(([$,v])=>[$,Rn(v)]))),r?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
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
                                onInput=${($)=>_((v)=>({...v,[o.id]:$.target.value}))}
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
    `}var zc=D(()=>{d();Kc()});function Wc(n,r=qi){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(300,Math.max(15,Math.round(i)))}function jc(n,r=Ai){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(8,Math.max(0,Math.round(i)))}function Zi(){return{refreshIntervalSec:Wc(Ti(Bc,qi),qi),folderPreviewDepth:jc(Ti(Fc,Ai),Ai)}}function kc(n={}){let r=Zi(),i={refreshIntervalSec:Wc(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:r.refreshIntervalSec,r.refreshIntervalSec),folderPreviewDepth:jc(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:r.folderPreviewDepth,r.folderPreviewDepth)};if(un(Bc,String(i.refreshIntervalSec)),un(Fc,String(i.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(Q0,{detail:{settings:i}}));return i}var Q0="piclaw:workspace-client-settings-updated",Bc="workspaceRefreshIntervalSec",Fc="workspaceFolderPreviewDepth",qi=60,Ai=3;var Rc=()=>{};var Uc={};_n(Uc,{WorkspaceSection:()=>M0});function Hc(n={}){let r=n.workspaceSettings||{};return{webTerminalEnabled:r.webTerminalEnabled!==!1,vncAllowDirect:r.vncAllowDirect!==!1,treeMaxDepth:r.treeMaxDepth??4,treeMaxEntries:r.treeMaxEntries??5000}}function M0({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=w(!0),[u,f]=w(!0),[s,o]=w(4),[$,v]=w(5000),[g,K]=w(60),[h,b]=w(3),[B,t]=w(!1),[p,j]=w(!1),V=L(""),F=L(null),U=L(null),z=L(null),k=L(!0);P(()=>{return k.current=!0,()=>{if(k.current=!1,F.current)clearTimeout(F.current);if(U.current)clearTimeout(U.current);if(z.current)clearTimeout(z.current)}},[]);let Q=H((W)=>{let x=Hc(W),G=Zi();c(x.webTerminalEnabled),f(x.vncAllowDirect),o(x.treeMaxDepth),v(x.treeMaxEntries),K(G.refreshIntervalSec),b(G.folderPreviewDepth),V.current=JSON.stringify(x)},[]);P(()=>{Q(n||{})},[n,Q]);let y=I(()=>JSON.stringify(Hc({workspaceSettings:{webTerminalEnabled:_,vncAllowDirect:u,treeMaxDepth:s,treeMaxEntries:$}})),[_,u,s,$]);P(()=>{if(y===V.current)return;if(F.current)clearTimeout(F.current);return F.current=setTimeout(async()=>{if(!k.current)return;let W=document.activeElement;if(W&&W.closest?.(".settings-number-stepper"))return;try{let x=await ki(JSON.parse(y));if(!k.current||!x?.ok||!x?.settings)return;if(V.current=y,i?.({workspaceSettings:x.settings}),r?.(null),t(!0),U.current)clearTimeout(U.current);U.current=setTimeout(()=>{if(k.current)t(!1)},4000)}catch(x){r?.(String(x?.message||x),"error")}},800),()=>{if(F.current)clearTimeout(F.current)}},[y,i,r]);let T=H((W)=>{let x=kc(W);if(K(x.refreshIntervalSec),b(x.folderPreviewDepth),j(!0),z.current)clearTimeout(z.current);z.current=setTimeout(()=>{if(k.current)j(!1)},3000)},[]);return l`
        <div class="settings-section">
            ${B&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${p&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${_} onChange=${(W)=>c(W.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${u} onChange=${(W)=>f(W.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${m}
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
                <${m}
                    label="workspace tree max entries"
                    value=${$}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${v}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${m}
                    label="workspace refresh interval"
                    value=${g}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(W)=>T({refreshIntervalSec:W})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${m}
                    label="folder preview scan depth"
                    value=${h}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(W)=>T({folderPreviewDepth:W})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var Tc=D(()=>{d();pn();Rc();Jn()});var Gc={};_n(Gc,{EnvironmentSection:()=>q0});function Ii(n={}){let r=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(r.variables)?r.variables:[],overrides:r.overrides&&typeof r.overrides==="object"?r.overrides:{},count:Number(r.count||0),overrideCount:Number(r.overrideCount||0),keychainEnvNames:Array.isArray(r.keychainEnvNames)?r.keychainEnvNames:[]}}function q0({settingsData:n,filter:r="",setStatus:i,mergeSettingsData:_}){let[c,u]=w(()=>Ii(n||{})),[f,s]=w({}),[o,$]=w(""),[v,g]=w(""),[K,h]=w(null);P(()=>{u(Ii(n||{})),s({})},[n]);let b=H((F)=>{let U=Ii({environmentSettings:F?.settings||F});return u(U),_?.({environmentSettings:U}),s({}),U},[_]),B=H(async()=>{try{let F=await Ri();if(F?.ok)b(F.settings);i?.("Environment refreshed.","info")}catch(F){i?.(String(F?.message||F),"error")}},[b,i]),t=H(async(F,U)=>{let z=String(F||"").trim();if(!z)return;h(z);try{let k=await Gr({action:"set",name:z,value:String(U??"")});if(k?.ok)b(k.settings);if(i?.(`Saved environment override for ${z}.`,"info"),z===o.trim())$(""),g("")}catch(k){i?.(String(k?.message||k),"error")}finally{h(null)}},[b,o,i]),p=H(async(F)=>{let U=String(F||"").trim();if(!U)return;h(U);try{let z=await Gr({action:"clear",name:U});if(z?.ok)b(z.settings);i?.(`Cleared environment override for ${U}.`,"info")}catch(z){i?.(String(z?.message||z),"error")}finally{h(null)}},[b,i]),j=I(()=>{let F=String(r||"").trim().toLowerCase(),U=Array.isArray(c.variables)?c.variables:[];if(!F)return U;return U.filter((z)=>{return`${z?.name||""} ${z?.value||""} ${z?.source||""}`.toLowerCase().includes(F)})},[c.variables,r]),V=H((F,U)=>{s((z)=>({...z||{},[F]:U}))},[]);return l`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${B}>Refresh</button>
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
                        value=${v}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(F)=>g(F.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!o.trim()||K===o.trim()}
                        onClick=${()=>t(o,v)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${c.count} variables visible • ${c.overrideCount} overrides active • ${c.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${j.map((F)=>{let U=String(F?.name||""),z=Object.prototype.hasOwnProperty.call(f,U)?f[U]:F.value,k=z!==F.value,Q=K===U;return l`
                        <div class="settings-tool-row" key=${U} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${U}>${U}</span>
                            <input
                                type="text"
                                value=${z}
                                spellcheck="false"
                                onInput=${(y)=>V(U,y.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${F.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${F.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${Q||!k} onClick=${()=>t(U,z)}>Save</button>
                                <button type="button" disabled=${Q||!F.overridden} onClick=${()=>p(U)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${j.length===0&&l`<p class="settings-hint">No environment variables match "${r}".</p>`}
            </div>
        </div>
    `}var Vc=D(()=>{d();pn()});var Nc={};_n(Nc,{ProvidersSection:()=>Z0});function A0(n){switch(n){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function Z0({providers:n,setStatus:r}){let[i,_]=w(null),[c,u]=w(null),[f,s]=w({}),o=H((t,p)=>{s((j)=>({...j,[t]:p}))},[]),$=H(async(t)=>{let p=(f.apiKey||"").trim();if(!p){r?.("API key cannot be empty.","error");return}_(t),r?.(`Configuring ${t}…`,"info");try{let j=JSON.stringify({provider:t,method:"api_key",api_key:p}),V=await Kn("default",`/login __step2 ${j}`,null,[]);if(V?.command?.status==="error"){r?.(V.command.message,"error");return}r?.(V?.command?.message||`${t} configured.`,"success"),u(null),s({})}catch(j){r?.(String(j.message||j),"error")}finally{_(null)}},[f,r]),v=H(async(t,p)=>{_(t),r?.(`Configuring ${t}…`,"info");try{let j={provider:t,method:"custom"};for(let U of p.customFields||[])j[U.key]=(f[U.key]||"").trim();let V=JSON.stringify(j),F=await Kn("default",`/login __step2 ${V}`,null,[]);if(F?.command?.status==="error"){r?.(F.command.message,"error");return}r?.(F?.command?.message||`${t} configured.`,"success"),u(null),s({})}catch(j){r?.(String(j.message||j),"error")}finally{_(null)}},[f,r]),g=H(async(t)=>{_(t),r?.(`Starting OAuth for ${t}…`,"info");try{let p=JSON.stringify({provider:t}),V=(await Kn("default",`/login __step1 ${p}`,null,[]))?.command?.message||"";if(V.includes("http")){let F=V.match(/(https?:\/\/[^\s)]+)/);if(F)window.open(F[1],"_blank","noopener"),r?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else r?.(V,"success")}else r?.(V||`OAuth flow started for ${t}. Check the chat.`,"success")}catch(p){r?.(String(p.message||p),"error")}finally{_(null)}},[r]),K=H(async(t)=>{if(i)return;_(t),r?.(`Logging out ${t}…`,"info");try{await Kn("default",`/logout ${t}`,null,[]),r?.(`Logged out ${t}. Restart may be needed.`,"success")}catch(p){r?.(String(p.message||p),"error")}finally{_(null)}},[i,r]),h=n||[],b=(t)=>c===t,B=(t)=>{u((p)=>p===t?null:t),s({})};return l`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${h.map((t)=>l`
                    <div class=${`settings-provider-card${t.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!t.configured&&B(t.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${t.name}</strong>
                                <span class="settings-provider-id">${t.id}</span>
                                ${t.configured&&l`<span class="settings-tag settings-tag-skill">${A0(t.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${t.hasOAuth&&l`<span class="settings-tag">OAuth</span>`}
                                ${t.hasApiKey&&l`<span class="settings-tag">API Key</span>`}
                                ${t.isCustom&&l`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${t.configured?l`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${i===t.id} onClick=${(p)=>{p.stopPropagation(),K(t.id)}}
                                    >${i===t.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${i===t.id} onClick=${(p)=>{p.stopPropagation(),B(t.id)}}
                                    >Reconfigure</button>
                                `:l`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${i===t.id} onClick=${(p)=>{p.stopPropagation(),B(t.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${b(t.id)&&l`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${t.hasOAuth&&l`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${i===t.id}
                                            onClick=${()=>g(t.id)}>
                                            ${i===t.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${t.hasApiKey&&l`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${f.apiKey||""}
                                                onInput=${(p)=>o("apiKey",p.target.value)}
                                                placeholder=${t.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===t.id||!(f.apiKey||"").trim()}
                                                onClick=${()=>$(t.id)}>
                                                ${i===t.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${t.isCustom&&l`
                                    <div class="settings-provider-method">
                                        ${(t.customFields||[]).map((p)=>l`
                                            <div class="settings-provider-field-row">
                                                <label>${p.label}${p.required?" *":""}</label>
                                                <input type="text" value=${f[p.key]||""}
                                                    onInput=${(j)=>o(p.key,j.target.value)}
                                                    placeholder=${p.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===t.id}
                                                onClick=${()=>v(t.id,t)}>
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
    `}var Xc=D(()=>{d();pn()});var Pc={};_n(Pc,{ModelsSection:()=>C0});function D0(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function Y0({thinkingLevel:n,supportsThinking:r,provider:i,availableLevels:_,onSetLevel:c,disabled:u}){let f=D0(i)?I0:L0,s=_&&_.length>1?_:["off","minimal","low","medium","high"],o=Math.max(0,s.indexOf(n??"off"));if(!r)return l`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return l`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${f[s[o]]||s[o]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${s.length-1} step="1" value=${o} disabled=${u}
                    onInput=${($)=>c(s[parseInt($.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${s.map(($,v)=>l`<span class=${v===o?"active":""} onClick=${()=>!u&&c($)}>${f[$]||$}</span>`)}
                </div>
            </div>
        </div>
    `}function C0({filter:n=""}){let[r,i]=w(null),[_,c]=w(!1),[u,f]=w("off"),[s,o]=w(!1),[$,v]=w(["off"]),[g,K]=w(!1),[h,b]=w(!1),[B,t]=w(!1),p=H(async()=>{let W=await Hi();if(i(W),W.thinking_level)f(W.thinking_level);if(o(Boolean(W.supports_thinking)),K(Boolean(W.scoped_models_only)),Array.isArray(W.available_thinking_levels)&&W.available_thinking_levels.length>0)v(W.available_thinking_levels);return W},[]);P(()=>{p().catch((W)=>{console.warn("[settings/models] Failed to load models.",W),i({models:[],model_options:[]})})},[]);let j=H(async(W)=>{if(_)return;c(!0);try{await Kn("default",`/model ${W}`,null,[]),await p()}catch(x){console.error("Failed to switch model:",x)}finally{c(!1)}},[_,p]),V=H(async(W)=>{if(h)return;b(!0),K(Boolean(W));try{let x=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scopedModelsOnly:Boolean(W)})}),G=await x.json().catch(()=>({}));if(!x.ok||!G?.ok)throw Error(G?.error||"Failed to save scoped model setting.");await p()}catch(x){console.error("Failed to set scoped model filtering:",x),await p().catch((G)=>{console.warn("[settings/models] Reload after scoped model filtering failure failed.",G)})}finally{b(!1)}},[h,p]),F=H(async(W)=>{if(B)return;t(!0),f(W);try{let x=await Kn("default",`/thinking ${W}`,null,[]);if(x?.command?.thinking_level)f(x.command.thinking_level);o(x?.command?.supports_thinking!==!1),await p()}catch(x){console.error("Failed to set thinking:",x),await p().catch((G)=>{console.warn("[settings/models] Reload after thinking change failure failed.",G)})}finally{t(!1)}},[B,p]);if(!r)return l`<div class="settings-loading">Loading models\u2026</div>`;let U=r.model_options||[],z=r.current,Q=U.find((W)=>W.label===z)?.provider||"",y=n.toLowerCase(),T=y?U.filter((W)=>W.label.toLowerCase().includes(y)||(W.provider||"").toLowerCase().includes(y)):U;return l`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-row" style="padding:0 0 10px 0; align-items:flex-start">
                <label>Scoped models only</label>
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0">
                    <label style="display:flex; align-items:center; gap:8px; font-weight:500">
                        <input type="checkbox" checked=${g} disabled=${h} onChange=${(W)=>V(W.target.checked)} />
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
                        ${T.map((W)=>l`
                            <tr class=${W.label===z?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${W.label===z} disabled=${_} onChange=${()=>j(W.label)} /></td>
                                <td>${W.name||W.label}</td><td>${W.provider}</td>
                                <td>${W.context_window?(W.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${W.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${T.length===0&&l`<tr><td colspan="5" class="settings-empty">No models match "${n}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${Y0}
                    thinkingLevel=${u}
                    supportsThinking=${s}
                    provider=${Q}
                    availableLevels=${$}
                    onSetLevel=${F}
                    disabled=${B||_} />
            </div>
        </div>
    `}var I0,L0;var Qc=D(()=>{d();pn();I0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},L0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function Yi(n){let r=String(n||"").trim().toLowerCase();if(!r)return"default";if(r==="solarized-dark"||r==="solarized-light")return"solarized";if(r==="github-dark"||r==="github-light")return"github";if(r==="tokyo-night")return"tokyo";return r}function Zc(n){if(!n)return null;let r=String(n).trim();if(!r)return null;let i=r.startsWith("#")?r.slice(1):r;if(!/^[0-9a-fA-F]{3}$/.test(i)&&!/^[0-9a-fA-F]{6}$/.test(i))return null;let _=i.length===3?i.split("").map((u)=>u+u).join(""):i,c=parseInt(_,16);return{r:c>>16&255,g:c>>8&255,b:c&255,hex:`#${_.toLowerCase()}`}}function O0(n,r){try{if(document.body){n.style.display="none",document.body.appendChild(n);let i=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),i}}catch{return r}return r}function E0(n){if(!n||typeof document>"u")return null;let r=String(n).trim();if(!r)return null;let i=document.createElement("div");if(i.style.color="",i.style.color=r,!i.style.color)return null;let c=O0(i,i.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!c)return null;let u=parseInt(c[1],10),f=parseInt(c[2],10),s=parseInt(c[3],10);if(![u,f,s].every(($)=>Number.isFinite($)))return null;let o=`#${[u,f,s].map(($)=>$.toString(16).padStart(2,"0")).join("")}`;return{r:u,g:f,b:s,hex:o}}function Xn(n){return Zc(n)||E0(n)}function Ci(n,r,i){let _=Math.round(n.r+(r.r-n.r)*i),c=Math.round(n.g+(r.g-n.g)*i),u=Math.round(n.b+(r.b-n.b)*i);return`rgb(${_} ${c} ${u})`}function Mr(n,r){return`rgba(${n.r}, ${n.g}, ${n.b}, ${r})`}function d0(n){let r=n.r/255,i=n.g/255,_=n.b/255,c=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4),u=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),f=_<=0.03928?_/12.92:Math.pow((_+0.055)/1.055,2.4);return 0.2126*c+0.7152*u+0.0722*f}function S0(n){return d0(n)>0.4?"#000000":"#ffffff"}function Ic(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Ji(n){return Mc[n]||Mc.default}function e0(n){return n.mode==="auto"?Ic():n.mode}function Lc(n,r){let i=Ji(n);if(r==="dark"&&i.dark)return i.dark;if(r==="light"&&i.light)return i.light;return i.dark||i.light||Bn}function zn(n,r,i){let _=Xn(n);if(!_)return n;return Ci(_,r,i)}function Dc(n,r,i){let _=Xn(r);if(!_)return n;let u=Zc(i==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:zn(n.bgPrimary,_,0.08),bgSecondary:zn(n.bgSecondary,_,0.12),bgHover:zn(n.bgHover,_,0.16),textPrimary:zn(n.textPrimary,_,i==="dark"?0.08:0.06),textSecondary:zn(n.textSecondary,_,i==="dark"?0.12:0.1),borderColor:zn(n.borderColor,_,0.1),accent:_.hex,accentHover:u?Ci(_,u,0.18):_.hex,warning:zn(n.warning||Bn.warning,_,0.14),danger:zn(n.danger,_,0.16),success:zn(n.success,_,0.16)}}function m0(n,r){let i=Xn(n?.warning);if(i)return i.hex;let _=Xn(r==="dark"?Zr.warning:Bn.warning)||Xn(Bn.warning),c=Xn(n?.accent);if(_&&c)return Ci(_,c,r==="dark"?0.18:0.14);return r==="dark"?Zr.warning:Bn.warning}function a0(n,r){if(typeof document>"u")return;let i=document.documentElement,_=n.accent,c=Xn(_),u=c?Mr(c,r==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,f=c?Mr(c,r==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",s=c?Mr(c,r==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",o=c?S0(c):r==="dark"?"#000000":"#ffffff",$=c?Mr(c,r==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",v=m0(n,r),g={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":_,"--accent-hover":n.accentHover||_,"--accent-color-alpha":$,"--accent-soft":f,"--accent-soft-strong":s,"--accent-contrast-text":o,"--warning-color":v,"--danger-color":n.danger||Bn.danger,"--success-color":n.success||Bn.success,"--search-highlight-color":u||"rgba(29, 155, 240, 0.2)"};Object.entries(g).forEach(([K,h])=>{if(h)i.style.setProperty(K,h)})}function nl(){if(typeof document>"u")return;let n=document.documentElement;J0.forEach((r)=>n.style.removeProperty(r))}function En(n,r={}){if(typeof document>"u")return null;let i=typeof r.id==="string"&&r.id.trim()?r.id.trim():null,_=i?document.getElementById(i):document.querySelector(`meta[name="${n}"]`);if(!_)_=document.createElement("meta"),document.head.appendChild(_);if(_.setAttribute("name",n),i)_.setAttribute("id",i);return _}function qc(n){let r=Yi(Pn?.theme||"default"),i=Pn?.tint?String(Pn.tint).trim():null,_=Lc(r,n);if(r==="default"&&i)_=Dc(_,i,n);if(_?.bgPrimary)return _.bgPrimary;return n==="dark"?Zr.bgPrimary:Bn.bgPrimary}function rl(n,r){if(typeof document>"u")return;let i=En("theme-color",{id:"dynamic-theme-color"});if(i&&n)i.removeAttribute("media"),i.setAttribute("content",n);let _=En("theme-color",{id:"theme-color-light"});if(_)_.setAttribute("media","(prefers-color-scheme: light)"),_.setAttribute("content",qc("light"));let c=En("theme-color",{id:"theme-color-dark"});if(c)c.setAttribute("media","(prefers-color-scheme: dark)"),c.setAttribute("content",qc("dark"));let u=En("msapplication-TileColor");if(u&&n)u.setAttribute("content",n);let f=En("msapplication-navbutton-color");if(f&&n)f.setAttribute("content",n);let s=En("apple-mobile-web-app-status-bar-style");if(s)s.setAttribute("content",r==="dark"?"black-translucent":"default")}function il(){if(typeof window>"u")return;let n={...Pn,mode:Ac};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function _l(){if(typeof window>"u")return"web:default";try{let r=new URL(window.location.href).searchParams.get("chat_jid");return r&&r.trim()?r.trim():"web:default"}catch{return"web:default"}}function cl(n){if(typeof document>"u"||!n)return;let r=document.documentElement;if(r?.style)r.style.background=n;if(document.body?.style)document.body.style.background=n}function Oi(n,r={}){if(typeof window>"u"||typeof document>"u")return;let i=Yi(n?.theme||"default"),_=n?.tint?String(n.tint).trim():null,c=Ji(i),u=e0(c),f=Lc(i,u);Pn={theme:i,tint:_},Ac=u;let s=document.documentElement;s.dataset.theme=u,s.dataset.colorTheme=i,s.dataset.tint=_?String(_):"",s.style.colorScheme=u;let o=f;if(i==="default"&&_)o=Dc(f,_,u);if(i==="default"&&!_)nl();else a0(o,u);if(cl(o.bgPrimary),rl(o.bgPrimary,u),il(),r.persist!==!1)if(un(Di,i),_)un(Ar,_);else un(Ar,"")}function qr(){if(Ji(Pn.theme).mode!=="auto")return;Oi(Pn,{persist:!1})}function ul(){if(typeof window>"u")return;let n=Yi(kn(Di)||"default"),r=(()=>{let i=kn(Ar);return i?i.trim():null})();Oi({theme:n,tint:r},{persist:!1})}function Fo(){if(typeof window>"u")return()=>{};if(ul(),window.matchMedia&&!Li){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",qr);else if(n.addListener)n.addListener(qr);return Li=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",qr);else if(n.removeListener)n.removeListener(qr);Li=!1}}return()=>{}}function Ei(n){if(!n||typeof n!=="object")return;let r=_l(),i=n.chat_jid||n.chatJid||null,_=n.theme??n.name??n.colorTheme,c=n.tint??null;if(!i||i===r)Oi({theme:_||"default",tint:c},{persist:!1});un(Di,_||"default"),un(Ar,c||"")}function Wo(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return Ic()}var Di="piclaw_theme",Ar="piclaw_tint",Bn,Zr,Mc,J0,Pn,Ac="light",Li=!1;var Yc=D(()=>{Bn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Zr={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Mc={default:{label:"Default",mode:"auto",light:Bn,dark:Zr},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},J0=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],Pn={theme:"default",tint:null}});function Lr(n){let r=String(n??"").trim().toLowerCase().replace(/_/g,"-");if(!r)return dn;if(r==="zh-cn"||r==="zh"||r==="zh-hans"||r.startsWith("zh-hans"))return"zh-CN";if(r==="ja"||r.startsWith("ja-"))return"ja";if(r==="en"||r.startsWith("en-"))return"en";return dn}function ol(){if(typeof navigator>"u")return dn;let n=[...Array.isArray(navigator.languages)?navigator.languages:[],navigator.language].filter((r)=>typeof r==="string"&&r.length>0);for(let r of n){let i=Lr(r);if(i!==dn)return i}return dn}function gl(){let n=kn(Oc);if(n)return Lr(n);return ol()}function $l(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(di,{detail:{locale:n}}))}function Ir(){if(!Si)wl();return Qn}function wl(){return Qn=gl(),Si=!0,Qn}function yl(n,r={}){let i=Lr(n);if(Si=!0,i===Qn&&r.persist===!1)return Qn;if(Qn=i,r.persist!==!1)un(Oc,i);return $l(i),Qn}function tl(n,r){if(!r)return n;return n.replace(/\{(\w+)\}/g,(i,_)=>{let c=r[_];return c===void 0||c===null?i:String(c)})}function xl(n,r,i=Ir()){let c=sl[i]?.[n]??Ec[n]??n;return tl(c,r)}function hl(){let[n,r]=w(Ir());return P(()=>{if(typeof window>"u")return;let i=(_)=>{let c=_.detail,u=Lr(c?.locale??Ir());r(u)};return window.addEventListener(di,i),r(Ir()),()=>window.removeEventListener(di,i)},[]),[n,(i)=>yl(i)]}function dc(){let[n,r]=hl();return{locale:n,setLocale:r,t:(i,_)=>xl(i,_,n)}}var dn="en",Cc,Jc,Oc="piclaw_locale",di="piclaw-locale-change",Ec,fl,ll,sl,Qn,Si=!1;var Sc=D(()=>{d();Cc=["en","zh-CN","ja"],Jc={en:"English","zh-CN":"简体中文",ja:"日本語"},Ec={"compose.placeholder":"Message (Enter to send, Shift+Enter for newline)...","compose.send":"Send","compose.stop":"Stop","compose.searchPlaceholder":"Search (Enter to run)...","compose.clearAll":"Clear all","compose.clearAllTitle":"Clear all attachments and references","compose.scope":"Scope","compose.searchScope":"Search scope","compose.scopeCurrent":"Current","compose.scopeBranchFamily":"Branch family","compose.scopeAll":"All chats","compose.filterImages":"Images","compose.filterAttachments":"Attachments","compose.search":"Search","compose.closeSearch":"Close search","compose.shareLocation":"Share location","compose.attachFile":"Attach file","workspace.title":"Workspace","workspace.newFile":"New file","workspace.refresh":"Refresh","workspace.actions":"Workspace actions","workspace.uploadFiles":"Upload files","workspace.reindexing":"Reindexing workspace…","workspace.deleteFile":"Delete file","workspace.download":"Download","workspace.uploadToFolder":"Upload files to this folder","workspace.addFolderHint":"Add folder hint to compose","workspace.downloadZip":"Download folder as zip","workspace.openInTab":"Open in tab","workspace.openInEditor":"Open in editor","workspace.renameSelected":"Rename selected","workspace.downloadSelectedFile":"Download selected file","workspace.downloadSelectedFolder":"Download selected folder (zip)","workspace.deleteSelectedFile":"Delete selected file","shell.settings":"Settings","shell.newChat":"New chat","shell.connecting":"Connecting…","shell.connected":"Connected","language.label":"Language","menu.title":"Menu","menu.showWorkspace":"Show workspace","menu.hideWorkspace":"Hide workspace","menu.openExplorer":"Open explorer","menu.chatOnly":"Chat-only mode","menu.exitChatOnly":"Exit chat-only mode","menu.openTerminal":"Open terminal in tab","menu.openVnc":"Open VNC in tab","menu.newFile":"New file","menu.openRecent":"Open Recent","menu.refreshTree":"Refresh tree","menu.reindex":"Reindex workspace","menu.showHidden":"Show hidden files","menu.hideHidden":"Hide hidden files","menu.scale":"Scale","menu.settings":"Settings"},fl={"compose.placeholder":"输入消息（回车发送，Shift+回车换行）...","compose.send":"发送","compose.stop":"停止","compose.searchPlaceholder":"搜索（回车运行）...","compose.clearAll":"清除全部","compose.clearAllTitle":"清除所有附件和引用","compose.scope":"范围","compose.searchScope":"搜索范围","compose.scopeCurrent":"当前","compose.scopeBranchFamily":"分支系列","compose.scopeAll":"所有聊天","compose.filterImages":"图片","compose.filterAttachments":"附件","compose.search":"搜索","compose.closeSearch":"关闭搜索","compose.shareLocation":"分享位置","compose.attachFile":"附加文件","workspace.title":"工作区","workspace.newFile":"新建文件","workspace.refresh":"刷新","workspace.actions":"工作区操作","workspace.uploadFiles":"上传文件","workspace.reindexing":"正在重建索引…","workspace.deleteFile":"删除文件","workspace.download":"下载","workspace.uploadToFolder":"上传文件到此文件夹","workspace.addFolderHint":"将文件夹提示添加到输入框","workspace.downloadZip":"将文件夹下载为 zip","workspace.openInTab":"在标签页打开","workspace.openInEditor":"在编辑器打开","workspace.renameSelected":"重命名所选","workspace.downloadSelectedFile":"下载所选文件","workspace.downloadSelectedFolder":"下载所选文件夹（zip）","workspace.deleteSelectedFile":"删除所选文件","shell.settings":"设置","shell.newChat":"新建对话","shell.connecting":"连接中…","shell.connected":"已连接","language.label":"语言","menu.title":"菜单","menu.showWorkspace":"显示工作区","menu.hideWorkspace":"隐藏工作区","menu.openExplorer":"打开资源管理器","menu.chatOnly":"仅聊天模式","menu.exitChatOnly":"退出仅聊天模式","menu.openTerminal":"在标签页中打开终端","menu.openVnc":"在标签页中打开 VNC","menu.newFile":"新建文件","menu.openRecent":"打开最近文件","menu.refreshTree":"刷新目录树","menu.reindex":"重建工作区索引","menu.showHidden":"显示隐藏文件","menu.hideHidden":"隐藏隐藏文件","menu.scale":"缩放","menu.settings":"设置"},ll={"compose.placeholder":"メッセージ（Enterで送信、Shift+Enterで改行）...","compose.send":"送信","compose.stop":"停止","compose.searchPlaceholder":"検索（Enterで実行）...","compose.clearAll":"すべてクリア","compose.clearAllTitle":"すべての添付と参照をクリア","compose.scope":"範囲","compose.searchScope":"検索範囲","compose.scopeCurrent":"現在","compose.scopeBranchFamily":"ブランチファミリー","compose.scopeAll":"すべてのチャット","compose.filterImages":"画像","compose.filterAttachments":"添付","compose.search":"検索","compose.closeSearch":"検索を閉じる","compose.shareLocation":"位置を共有","compose.attachFile":"ファイルを添付","workspace.title":"ワークスペース","workspace.newFile":"新規ファイル","workspace.refresh":"更新","workspace.actions":"ワークスペース操作","workspace.uploadFiles":"ファイルをアップロード","workspace.reindexing":"ワークスペースを再インデックス中…","workspace.deleteFile":"ファイルを削除","workspace.download":"ダウンロード","workspace.uploadToFolder":"このフォルダにファイルをアップロード","workspace.addFolderHint":"フォルダのヒントを入力欄に追加","workspace.downloadZip":"フォルダをzipでダウンロード","workspace.openInTab":"タブで開く","workspace.openInEditor":"エディタで開く","workspace.renameSelected":"選択項目の名前を変更","workspace.downloadSelectedFile":"選択したファイルをダウンロード","workspace.downloadSelectedFolder":"選択したフォルダをダウンロード（zip）","workspace.deleteSelectedFile":"選択したファイルを削除","shell.settings":"設定","shell.newChat":"新規チャット","shell.connecting":"接続中…","shell.connected":"接続済み","language.label":"言語","menu.title":"メニュー","menu.showWorkspace":"ワークスペースを表示","menu.hideWorkspace":"ワークスペースを非表示","menu.openExplorer":"エクスプローラーを開く","menu.chatOnly":"チャットのみモード","menu.exitChatOnly":"チャットのみモードを終了","menu.openTerminal":"ターミナルをタブで開く","menu.openVnc":"VNC をタブで開く","menu.newFile":"新規ファイル","menu.openRecent":"最近のファイルを開く","menu.refreshTree":"ツリーを更新","menu.reindex":"ワークスペースを再インデックス","menu.showHidden":"隠しファイルを表示","menu.hideHidden":"隠しファイルを非表示","menu.scale":"拡大縮小","menu.settings":"設定"},sl={en:Ec,"zh-CN":fl,ja:ll},Qn=dn});function bl(n){return Cc.map((r)=>({value:r,label:Jc[r],active:r===n}))}function ec({variant:n="inline",onChange:r}={}){let{locale:i,setLocale:_,t:c}=dc(),u=bl(i),f=(s)=>{let o=s?.currentTarget?.value;_(o),r?.(o)};return l`
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
  `}var mc=D(()=>{d();Sc()});var nu={};_n(nu,{ThemeSection:()=>vl});function ac(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function vl({themes:n,colorKeys:r,settingsData:i,setStatus:_,mergeSettingsData:c}){let[u,f]=w("default"),[s,o]=w(""),[$,v]=w(!1),g=L(""),K=L(null),h=L(!0);P(()=>{return h.current=!0,()=>{h.current=!1}},[]);let b=H((V)=>{let F=ac(V);f(F.uiTheme),o(F.uiTint),g.current=JSON.stringify(F)},[]);P(()=>{if(i){b(i);return}b({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[i,b]);let B=H((V,F)=>{Ei({theme:V,tint:F||null}),f(V||"default"),o(F||"")},[]),t=I(()=>JSON.stringify(ac({uiTheme:u,uiTint:s})),[u,s]);P(()=>{if(t===g.current)return;if(K.current)clearTimeout(K.current);return K.current=setTimeout(async()=>{if(!h.current)return;v(!0);try{let V=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:t}),F=await V.json().catch(()=>({}));if(!h.current)return;if(!V.ok||!F?.ok||!F?.settings){_?.(F?.error||"Failed to save appearance settings.","error");return}g.current=t,c?.(F.settings),_?.("Appearance synced across clients.","success")}catch(V){if(!h.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",V),_?.("Failed to save appearance settings.","error")}finally{if(h.current)v(!1)}},250),()=>{if(K.current)clearTimeout(K.current)}},[t,c,_]);let p=r||[],j=n||[];return l`
        <div class="settings-section">
            <div class="settings-row settings-language-row">
                <${ec} variant="inline" />
            </div>
            ${$&&l`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${u==="default"}
                        onChange=${()=>B("default",s)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${s||"#1d9bf0"}
                        onInput=${(V)=>{let F=V.target.value;if(o(F),u==="default")Ei({theme:"default",tint:F})}} />
                    ${s&&l`
                        <button class="settings-tint-clear" onClick=${()=>B("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${s||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${p.map((V)=>l`<th class="settings-swatch-header">${V.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${j.filter((V)=>V.name!=="default").map((V)=>l`
                        <tr class=${V.name===u?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>B(V.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${V.name===u} onChange=${()=>B(V.name,"")} /></td>
                            <td><strong>${V.label}</strong></td>
                            <td>${V.mode}</td>
                            ${p.map((F)=>{let U=V.colors?.[F];return l`<td class="settings-swatch-cell">
                                    ${U?l`<span class="settings-color-swatch" style=${"background:"+U} title=${U}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var ru=D(()=>{d();Yc();mc()});var _u={};_n(_u,{__scheduledTasksSettingsTest:()=>Wl,ScheduledTasksSection:()=>Fl});function Mn(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function iu(n){let r=Number(n);if(!Number.isFinite(r))return"—";if(r<1000)return`${Math.round(r)}ms`;return`${(r/1000).toFixed(r<1e4?1:0)}s`}function ei(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${Mn(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function mi(n){let r=n?.task_kind||"agent";return r==="internal"?"internal/protected":r}function ai(n){return(n?.task_kind||"agent")==="internal"}function pl(n){if(!n)return"";let r=String(n).replace(/\s+/g," ").trim();return r.length>180?`${r.slice(0,179)}…`:r}function Sn({children:n,type:r="neutral"}){return l`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function zl({task:n}){let r=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!r.length)return l`<p class="settings-hint">No run logs recorded yet.</p>`;return l`
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
    `}function Bl({task:n,onAction:r}){if(!n)return l`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let i=ai(n);return l`
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
                <span>Kind</span><strong>${mi(n)}</strong>
                <span>Schedule</span><strong>${ei(n)}</strong>
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
    `}function Fl({filter:n="",setStatus:r}){let[i,_]=w([]),[c,u]=w({active:0,paused:0,completed:0}),[f,s]=w("all"),[o,$]=w(""),[v,g]=w(!0),[K,h]=w(null),[b,B]=w(null),[t,p]=w(null),[j,V]=w(!1),F=H(async(y={})=>{g(!0),h(null);try{let T=await ti({status:f,chatJid:o.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});_(T.tasks||[]),u(T.counts||{active:0,paused:0,completed:0});let W=y.selectedId||b,x=(T.tasks||[]).find((G)=>G.id===W)||(T.tasks||[])[0]||null;B(x?.id||null),p(x)}catch(T){h(T?.message||"Failed to load scheduled tasks.")}finally{g(!1)}},[f,o,b]);P(()=>{F()},[F]);let U=String(n||"").trim().toLowerCase(),z=I(()=>{if(!U)return i;return i.filter((y)=>[y.id,y.chat_jid,y.status,y.task_kind,y.schedule_type,y.schedule_value,y.summary,y.prompt_summary,y.command_summary,y.latest_run_log?.error_summary].some((T)=>String(T||"").toLowerCase().includes(U)))},[i,U]),k=H((y)=>{B(y?.id||null),p(y||null)},[]),Q=H(async(y,T)=>{if(!T||j)return;let W=ai(T),x=T.summary||T.command_summary||T.prompt_summary||T.id,G=y==="delete"?`Delete scheduled task ${T.id}?

${x}`:`${y==="pause"?"Pause":"Resume"} scheduled task ${T.id}?

${x}`;if(!window.confirm(G))return;if(W&&!window.confirm(`Task ${T.id} is internal/protected. Continue with ${y}?`))return;V(!0),r?.(`${y==="delete"?"Deleting":y==="pause"?"Pausing":"Resuming"} ${T.id}…`,"info");try{await xi(y,T.id,{allowInternal:W}),r?.(`Scheduled task ${T.id} ${y==="delete"?"deleted":y==="pause"?"paused":"resumed"}.`,"success"),await F({selectedId:y==="delete"?null:T.id})}catch(M){r?.(M?.message||`Failed to ${y} task.`,"error")}finally{V(!1)}},[j,F,r]);return l`
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
                    <button onClick=${()=>F()} disabled=${v}>Refresh</button>
                </div>
            </div>

            ${v&&l`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${K&&l`<div class="settings-error-state">${K}</div>`}
            ${!v&&!K&&i.length===0&&l`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/i`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!v&&!K&&i.length>0&&l`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${z.map((y)=>l`
                            <button class=${`settings-task-row ${y.id===b?"active":""}`} onClick=${()=>k(y)}>
                                <span class="settings-task-row-main">
                                    <strong>${y.summary||y.id}</strong>
                                    <span>${ei(y)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${Sn} type=${y.status||"neutral"}>${y.status}<//>
                                    <${Sn}>${mi(y)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${Mn(y.next_run)} · Last ${Mn(y.last_run)}${y.latest_run_log?.status?` · ${y.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${z.length===0&&l`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${Bl} task=${t&&z.some((y)=>y.id===t.id)?t:z[0]} onAction=${Q} />
                </div>
            `}
        </div>
    `}var Kl,Wl;var cu=D(()=>{d();pn();Kl=["all","active","paused","completed"];Wl={formatDateTime:Mn,formatDuration:iu,labelForSchedule:ei,kindLabel:mi,isProtectedTask:ai}});function uu(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function en(n){return typeof n==="string"&&n.trim().length>0}function n_(n,...r){let i=uu(n);if(!i)return!0;let _=r.map((c)=>uu(c)).filter(Boolean);for(let c of _)if(c.startsWith(i)||c.includes(i))return!0;return!1}function fu(n){if(!Array.isArray(n))return null;let r=[],i=new Set;for(let _ of n){let c=String(_||"").trim();if(!c)continue;let u=c.toLowerCase();if(i.has(u))continue;i.add(u),r.push(c)}return r}function wr(n){let r=n&&typeof n==="object"?n:{};return{workspaceCommands:fu(r.workspaceCommands),slashCommands:fu(r.slashCommands)}}function lu(n,r){if(!Array.isArray(n))return!0;return n.some((i)=>i.toLowerCase()===r.toLowerCase())}function jl(n){let r=Array.isArray(n?.commands)?n.commands:[],i=wr(n?.settings),_=String(n?.query||"");return r.filter((c)=>lu(i.workspaceCommands,c.id)).filter((c)=>n_(_,c.label,c.description,...c.keywords||[])).map((c)=>({key:`workspace:${c.id}`,kind:"workspace",title:c.label,subtitle:c.description,searchText:`${c.label} ${c.description} ${(c.keywords||[]).join(" ")}`.trim(),visualHint:c.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:c.id}))}function kl(n){let r=Array.isArray(n?.agents)?n.agents:[],i=String(n?.query||""),_=new Set;return r.filter((c)=>{let u=en(c?.chat_jid)?c.chat_jid.trim():"";if(!u||_.has(u))return!1;if(c?.archived_at)return!1;return _.add(u),!0}).filter((c)=>n_(i,`@${String(c?.agent_name||"").trim()}`,c?.session_name,c?.chat_jid)).map((c)=>{let u=en(c?.agent_name)?c.agent_name.trim():String(c?.chat_jid||"").replace(/^[^:]+:/,""),f=en(c?.session_name)?c.session_name.trim():"",s=String(c?.chat_jid||"").trim();return{key:`agent:${s}`,kind:"agent",title:`@${u}`,subtitle:f||s,searchText:`@${u} ${f} ${s}`.trim(),visualHint:u.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:s}})}function Rl(n){let r=Array.isArray(n?.slashCommands)?n.slashCommands:[],i=wr(n?.settings),_=String(n?.query||""),c=new Set;return r.filter((u)=>{let f=en(u?.name)?u.name.trim():"";if(!f||c.has(f.toLowerCase()))return!1;return c.add(f.toLowerCase()),lu(i.slashCommands,f)}).filter((u)=>n_(_,u?.name,u?.description,u?.source)).map((u)=>{let f=String(u?.name||"").trim(),s=en(u?.description)?u.description.trim():"slash command",o=en(u?.source)?u.source.trim():"";return{key:`slash:${f}`,kind:"slash",title:f,subtitle:s,searchText:`${f} ${s} ${String(u?.source||"")}`.trim(),visualHint:"/",categoryLabel:o||"Slash",actionHint:"Insert",commandName:f}})}function Mo(n){return[...kl({agents:n?.agents,query:n?.query}),...jl({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...Rl({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var mn;var su=D(()=>{mn=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var $u={};_n($u,{QuickActionsSection:()=>Hl});function ou(n,...r){let i=String(n||"").trim().toLowerCase();if(!i)return!0;return r.some((_)=>String(_||"").toLowerCase().includes(i))}function gu(n){if(!Array.isArray(n))return null;return new Set(n.map((r)=>String(r||"").trim().toLowerCase()).filter(Boolean))}function Hl({filter:n="",setStatus:r,mergeSettingsData:i}){let[_,c]=w(()=>mn.map((z)=>z.id)),[u,f]=w([]),[s,o]=w([]),[$,v]=w(!0),[g,K]=w(!1),h=H(async()=>{v(!0);try{let[z,k]=await Promise.all([Wi(),Fi("web:default").catch(()=>({commands:[]}))]),Q=wr(z?.settings),y=Array.isArray(k?.commands)?k.commands:[];o(y),c(Array.isArray(Q.workspaceCommands)?Q.workspaceCommands:mn.map((T)=>T.id)),f(Array.isArray(Q.slashCommands)?Q.slashCommands:y.map((T)=>String(T?.name||"").trim()).filter(Boolean))}catch(z){r?.(String(z?.message||z),"error")}finally{v(!1)}},[r]);P(()=>{h()},[h]);let b=I(()=>gu(_),[_]),B=I(()=>gu(u),[u]),t=I(()=>mn.filter((z)=>ou(n,z.label,z.description,...z.keywords||[])),[n]),p=I(()=>s.filter((z)=>ou(n,z?.name,z?.description,z?.source)),[s,n]),j=H((z)=>{c((k)=>{let Q=new Set((Array.isArray(k)?k:[]).map((y)=>String(y||"").trim()).filter(Boolean));if(Q.has(z))Q.delete(z);else Q.add(z);return mn.map((y)=>y.id).filter((y)=>Q.has(y))})},[]),V=H((z)=>{f((k)=>{let Q=new Set((Array.isArray(k)?k:[]).map((y)=>String(y||"").trim()).filter(Boolean));if(Q.has(z))Q.delete(z);else Q.add(z);return s.map((y)=>String(y?.name||"").trim()).filter((y)=>y&&Q.has(y))})},[s]),F=H(()=>{c(mn.map((z)=>z.id)),f(s.map((z)=>String(z?.name||"").trim()).filter(Boolean))},[s]),U=H(async()=>{if(g)return;K(!0),r?.("Saving quick actions…","info");try{let z=await ji({workspaceCommands:_,slashCommands:u}),k=wr(z?.settings);i?.({quickActions:k}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:k}})),r?.("Quick Actions saved.","success")}catch(z){r?.(String(z?.message||z),"error")}finally{K(!1)}},[i,g,r,u,_]);if($)return l`<div class="settings-loading">Loading…</div>`;return l`
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
                ${t.map((z)=>{let k=b?b.has(z.id.toLowerCase()):!0;return l`
                        <label class="settings-checkbox-row" key=${z.id}>
                            <input type="checkbox" checked=${k} onChange=${()=>j(z.id)} />
                            <div>
                                <div>${z.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${z.description}</div>
                            </div>
                        </label>
                    `})}
                ${t.length===0&&l`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${p.map((z)=>{let k=String(z?.name||"").trim(),Q=B?B.has(k.toLowerCase()):!0;return l`
                        <label class="settings-checkbox-row" key=${k}>
                            <input type="checkbox" checked=${Q} onChange=${()=>V(k)} />
                            <div>
                                <div><code>${k}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${z?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${p.length===0&&l`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var wu=D(()=>{d();pn();su()});var yu={};_n(yu,{KeychainSection:()=>Gl});function Ul(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function Gl({filter:n=""}){let[r,i]=w([]),[_,c]=w(!0),[u,f]=w(null),[s,o]=w(!1),[$,v]=w(""),[g,K]=w(""),[h,b]=w(""),[B,t]=w(""),[p,j]=w(""),[V,F]=w("secret"),[U,z]=w(!1),[k,Q]=w({}),[y,T]=w(null),[W,x]=w(null),[G,M]=w(null),C=L(null),J=L(null),gn=L(null),a=H(async()=>{c(!0),f(null);try{let A=await(await fetch("/agent/keychain")).json();if(A?.ok)i(A.entries||[]);else f(A?.error||"Failed to load keychain.")}catch(R){f("Failed to load keychain.")}finally{c(!1)}},[]);P(()=>{a()},[a]);let fn=H(async()=>{let R=$.trim(),A=g;if(!R||!A)return;z(!0);try{let sn=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R,secret:A,type:V,username:h.trim()||void 0,userNote:B,agentNote:p})})).json();if(sn?.ok)v(""),K(""),b(""),t(""),j(""),F("secret"),o(!1),await a();else f(sn?.error||"Failed to add entry.")}catch{f("Failed to add entry.")}finally{z(!1)}},[$,g,h,B,p,V,a]),ln=H(async(R)=>{try{let rn=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R})})).json();if(rn?.ok)x(null),M((sn)=>sn?.name===R?null:sn),await a();else f(rn?.error||"Failed to delete entry.")}catch{f("Failed to delete entry.")}},[a]),wn=H(async(R)=>{let A=R?.name;if(!A)return;let rn=k[A]||{},sn=Object.prototype.hasOwnProperty.call(rn,"userNote")?rn.userNote:R.userNote||"",$n=Object.prototype.hasOwnProperty.call(rn,"agentNote")?rn.agentNote:R.agentNote||"";T(A);try{let Hn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A,userNote:sn,agentNote:$n})})).json();if(Hn?.ok)Q((xr)=>{let nr={...xr||{}};return delete nr[A],nr}),await a();else f(Hn?.error||"Failed to save notes.")}catch{f("Failed to save notes.")}finally{T(null)}},[k,a]),Y=H((R,A,rn)=>{Q((sn)=>({...sn||{},[R]:{...(sn||{})[R]||{},[A]:rn}}))},[]),X=H(async(R,A,rn)=>{try{let $n=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R,master_password:A||void 0,totp_code:rn||void 0})})).json();if($n?.ok)M({name:R,phase:"revealed",secret:$n.secret,username:$n.username,masterPassword:A});else if($n?.needs_master_password)M((hn)=>({name:R,phase:"password",masterPassword:"",error:hn?.name===R&&hn?.masterPassword?$n.error:null})),requestAnimationFrame(()=>J.current?.focus());else if($n?.needs_totp)M((hn)=>({name:R,phase:"totp",masterPassword:A,totpCode:"",error:hn?.name===R&&hn?.phase==="totp"&&hn?.totpCode?$n.error:null})),requestAnimationFrame(()=>gn.current?.focus());else M({name:R,phase:"error",error:$n?.error||"Failed to reveal."})}catch{M({name:R,phase:"error",error:"Failed to reveal."})}},[]),Z=H((R)=>{if(G?.name===R&&G?.phase==="revealed"){M(null);return}X(R,null,null)},[G,X]),tn=H((R)=>{let A=G?.masterPassword||"";if(!A)return;X(R,A,null)},[G,X]),N=H((R)=>{let A=G?.totpCode||"";if(A.length<6)return;X(R,G?.masterPassword,A)},[G,X]),S=H(async(R)=>{try{await navigator.clipboard.writeText(R)}catch{let A=document.createElement("textarea");A.value=R,A.style.position="fixed",A.style.opacity="0",document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A)}},[]);P(()=>{if(s)requestAnimationFrame(()=>C.current?.focus())},[s]);let cn=n.toLowerCase(),Fn=I(()=>{if(!cn)return r;return r.filter((R)=>R.name.toLowerCase().includes(cn)||(R.type||"").toLowerCase().includes(cn)||(R.envVar||"").toLowerCase().includes(cn)||(R.userNote||"").toLowerCase().includes(cn)||(R.agentNote||"").toLowerCase().includes(cn))},[r,cn]);if(_)return l`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return l`
        <div class="settings-section">
            ${u&&l`
                <div class="settings-keychain-error" role="alert">
                    ${u}
                    <button class="settings-keychain-dismiss" onClick=${()=>f(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${Fn.length} entr${Fn.length===1?"y":"ies"}${cn?` matching "${n}"`:""}, encrypted at rest.</span>
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
                        <input ref=${C} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${$} onInput=${(R)=>v(R.target.value)}
                            class="settings-keychain-input" />
                        <select value=${V} onChange=${(R)=>F(R.target.value)}
                            class="settings-keychain-select">
                            ${Tl.map((R)=>l`<option value=${R}>${R}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${g} onInput=${(R)=>K(R.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${h} onInput=${(R)=>b(R.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${fn}
                            disabled=${U||!$.trim()||!g}>
                            ${U?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${B} onInput=${(R)=>t(R.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${p} onInput=${(R)=>j(R.target.value)}
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
                                ${cn?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${Fn.map((R)=>{let A=G?.name===R.name?G:null,rn=A?.phase==="revealed",sn=A?.phase==="password",$n=A?.phase==="totp",hn=A?.phase==="error",Hn=k[R.name]||{},xr=Object.prototype.hasOwnProperty.call(Hn,"userNote")?Hn.userNote:R.userNote||"",nr=Object.prototype.hasOwnProperty.call(Hn,"agentNote")?Hn.agentNote:R.agentNote||"",Uu=xr!==(R.userNote||"")||nr!==(R.agentNote||""),f_=y===R.name;return l`
                            <tr class="settings-keychain-row" key=${R.name}>
                                <td class="settings-keychain-name">${R.name}</td>
                                <td><span class="settings-keychain-type-badge">${R.type}</span></td>
                                <td class="settings-keychain-env">${R.envVar?l`<code>$${R.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Ul(R.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${rn?" active":""}`}
                                        onClick=${()=>Z(R.name)}
                                        title=${rn?"Hide secret":"Reveal secret"}>
                                        ${rn?l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${W===R.name?l`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>ln(R.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>x(null)}>No</button>
                                            </span>
                                        `:l`<button class="settings-keychain-delete-btn" onClick=${()=>x(R.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${R.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${xr}
                                                onInput=${(on)=>Y(R.name,"userNote",on.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${nr}
                                                onInput=${(on)=>Y(R.name,"agentNote",on.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!Uu||f_} onClick=${()=>wn(R)}>
                                            ${f_?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${sn&&l`
                                <tr class="settings-keychain-prompt-row" key=${R.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${J} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${A?.masterPassword||""}
                                                onInput=${(on)=>M((Er)=>({...Er,masterPassword:on.target.value}))}
                                                onKeyDown=${(on)=>{if(on.key==="Enter")tn(R.name);if(on.key==="Escape")M(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>tn(R.name)}
                                                disabled=${!A?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>M(null)}>Cancel</button>
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
                                            <input ref=${gn} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${A?.totpCode||""}
                                                onInput=${(on)=>M((Er)=>({...Er,totpCode:on.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(on)=>{if(on.key==="Enter")N(R.name);if(on.key==="Escape")M(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>N(R.name)}
                                                disabled=${(A?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>M(null)}>Cancel</button>
                                            ${A?.error&&l`<span class="settings-keychain-prompt-error">${A.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${rn&&l`
                                <tr class="settings-keychain-reveal-row" key=${R.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${A.username&&l`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${A.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>S(A.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${A.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>S(A.secret)} title="Copy secret">
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
    `}var Tl;var tu=D(()=>{d();Tl=["secret","token","password","basic"]});var xu={};_n(xu,{ToolsSection:()=>Ql});function Ql({toolsets:n,filter:r="",settingsData:i,mergeSettingsData:_}){let c=n||[],[u,f]=w(()=>{let b={};for(let B of c)b[B.name]=!0;return b}),s=H((b)=>{f((B)=>({...B,[b]:!B[b]}))},[]),o=i?.searchMatchMode||"or",$=I(()=>{let b=Array.isArray(i?.toolResultCompactionTools)?i.toolResultCompactionTools:[];return new Set(b.filter((B)=>typeof B==="string").map((B)=>B.trim().toLowerCase()).filter(Boolean))},[i?.toolResultCompactionTools]),v=H(async()=>{let b=o==="or"?"and":"or";try{let t=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:b})})).json().catch(()=>({}));if(t?.ok&&t?.settings)_?.(t.settings)}catch(B){console.warn("[settings/tools] Failed to save search match mode.",B)}},[o,_]),g=H(async(b)=>{let B=String(b||"").trim().toLowerCase();if(!B)return;let t=new Set($);if(t.has(B))t.delete(B);else t.add(B);try{let j=await(await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toolResultCompactionTools:Array.from(t).sort()})})).json().catch(()=>({}));if(j?.ok&&j?.settings)_?.(j.settings)}catch(p){console.warn("[settings/tools] Failed to save tool compaction settings.",p)}},[$,_]),K=r.toLowerCase(),h=I(()=>{if(!K)return c;return c.map((b)=>{let B=b.tools.filter((t)=>t.name.toLowerCase().includes(K)||b.name.toLowerCase().includes(K)||(t.summary||"").toLowerCase().includes(K));return B.length>0?{...b,tools:B}:null}).filter(Boolean)},[c,K]);if(c.length===0)return l`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return l`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${o==="and"} onChange=${v} />
                        <span class="settings-hint" style="margin:0">
                            ${o==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${h.map((b)=>{let B=u[b.name]!==!1;return l`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${B} onChange=${()=>s(b.name)} />
                            <span class="settings-toolset-icon">${Vl[b.name]||Pl}</span>
                            <strong>${b.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${b.description}</span>
                    </div>
                    ${B&&l`<div class="settings-tool-list">
                        <div class="settings-tool-row settings-tool-row-header" aria-hidden="true">
                            <span class="settings-tool-status-header">Enabled</span>
                            <span class="settings-tool-name">Tool</span>
                            <span class="settings-tool-compact-header">Compact</span>
                            <span class="settings-tool-kind">Kind</span>
                            <span class="settings-tool-summary">Summary</span>
                            <span class="settings-tool-source">Source</span>
                        </div>
                        ${b.tools.map((t)=>{let p=String(t.name||"").trim().toLowerCase(),j=$.has(p);return l`
                                <div class="settings-tool-row">
                                    <input type="checkbox" checked disabled />
                                    <span class="settings-tool-name">${t.name}</span>
                                    <span class="settings-tool-compact">
                                        <input
                                            type="checkbox"
                                            checked=${j}
                                            onChange=${()=>g(t.name)}
                                            title=${j?"Disable tool-result compaction for this tool":"Enable tool-result compaction for this tool"}
                                        />
                                    </span>
                                    <span class="settings-tool-kind" title=${t.kind}>${Xl[t.kind]||"?"}</span>
                                    ${t.summary&&l`<span class="settings-tool-summary">${t.summary}</span>`}
                                    ${!t.summary&&l`<span class="settings-tool-summary"></span>`}
                                    <span class="settings-tool-source">${Nl[t.name]||b.name}</span>
                                </div>
                            `})}
                    </div>`}
                </div>
            `})}
            ${h.length===0&&l`<p class="settings-hint">No tools match "${r}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; the “Compact” column controls tool-result compaction eligibility.</p>
        </div>
    `}var Vl,Nl,Xl,Pl;var hu=D(()=>{d();Vl={core:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},Nl={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Xl={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},Pl=l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var bu={};_n(bu,{AddonsSection:()=>Ml});function Ml({setStatus:n,filter:r=""}){let[i,_]=w(null),[c,u]=w(!0),[f,s]=w(null),[o,$]=w(!1),[v,g]=w({runtime:"",windowsNative:!1}),[K,h]=w([]),[b,B]=w([]);function t(){let y=new URLSearchParams;try{let W=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),x=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((M)=>M.trim()).filter(Boolean),G=localStorage.getItem("piclaw_addons_repo_url");if(W)y.append("catalog_url",W);for(let M of x)y.append("catalog_url",M);if(G)y.set("repo_url",G)}catch(W){}let T=y.toString();return T?`?${T}`:""}let p=H(async()=>{try{let[y,T]=await Promise.all([fetch(`/agent/addons${t()}`),fetch("/agent/settings-data")]),W=await y.json();if(W.error)throw Error(W.error);_(W.addons||[]),h(W.sources||[]),B(W.failed_sources||[]);let x=await T.json().catch(()=>({})),G=typeof x?.runtimePlatform==="string"?x.runtimePlatform:"";g({runtime:G,windowsNative:G==="win32"})}catch(y){_(null),n?.(String(y.message||y),"error")}finally{u(!1)}},[n]);P(()=>{p()},[]);let j=H(async(y)=>{if(f)return;s({slug:y,action:"install"}),n?.(`Installing ${y}…`,"info");try{let W=await(await fetch(`/agent/addons/install${t()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:y})})).json();if(W.error){n?.(W.error,"error");return}$(!0);let x=[W.message,W.warning].filter(Boolean).join(" ");n?.(x||"Add-on installed.","success"),await p()}catch(T){n?.(String(T.message||T),"error")}finally{s(null)}},[f,p,n]),V=H(async(y)=>{if(f)return;s({slug:y,action:"remove"}),n?.(`Removing ${y}…`,"info");try{let W=await(await fetch(`/agent/addons/uninstall${t()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:y})})).json();if(W.error){n?.(W.error,"error");return}$(!0);let x=[W.message,W.warning].filter(Boolean).join(" ");n?.(x||"Add-on removed.","success"),await p()}catch(T){n?.(String(T.message||T),"error")}finally{s(null)}},[f,p,n]),F=H(async()=>{if(f)return;s({slug:null,action:"restart"}),n?.("Restarting piclaw…","info");try{let T=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(T.error){n?.(T.error,"error"),s(null);return}n?.(T.message||"Restarting piclaw…","success"),$(!1),(async(x=30,G=2000)=>{for(let M=0;M<x;M++){await new Promise((C)=>setTimeout(C,G));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await p(),s(null),n?.("Restart complete — add-ons refreshed.","success");return}}catch(C){}}s(null),n?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(y){n?.(String(y.message||y),"error"),s(null)}},[f,n,p]);if(c)return l`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!i)return l`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let U=r.toLowerCase(),z=U?i.filter((y)=>y.slug.toLowerCase().includes(U)||(y.description||"").toLowerCase().includes(U)||(y.tags||[]).some((T)=>T.toLowerCase().includes(U))):i,k=f?.slug||null,Q=f?f.action==="remove"?`Removing ${f.slug}…`:f.action==="restart"?"Restarting piclaw…":`Installing ${f.slug}…`:"";return l`
        <div class=${`settings-section settings-addon-panel${f?" busy":""}`} aria-busy=${f?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${K.length<=1?l`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:l`${K.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${b.length>0&&l`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${b.length} catalog source${b.length>1?"s":""}:
                            ${b.map((y)=>l` <code style="font-size:0.82em;word-break:break-all">${y}</code>`)}
                        </div>
                    `}
                    ${K.length>1&&l`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${K.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${K.map((y)=>l`<li style="word-break:break-all"><code>${y}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${v.windowsNative&&l`
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
                ${z.map((y)=>{let T=(y.skills||[]).length>0,W=y.type==="extension",x=T&&W?"extension + skill":T?"skill":"extension",G=T&&!W?"settings-tag-skill":"",M=typeof y.homepage==="string"&&y.homepage.trim()?y.homepage.trim():"";return l`
                    <div class=${`settings-addon-card${y.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${M?l`<a class="settings-addon-name-link" href=${M} target="_blank" rel="noopener noreferrer">${y.slug}</a>`:l`<strong>${y.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${G}`}>${x}</span>
                            <span class="settings-addon-version">${y.installed?y.installedVersion||"?":y.version||""}</span>
                            ${y.installKind&&l`<span class="settings-tag">${y.installKind}</span>`}
                            ${y.hasUpdate&&l`<span class="settings-tag settings-tag-skill">\u2191 ${y.version}</span>`}
                            <div class="settings-addon-actions">
                                ${y.installed?l`
                                    ${y.hasUpdate&&l`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(f)} onClick=${()=>j(y.slug)}>${k===y.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(f)} onClick=${()=>V(y.slug)}>${k===y.slug?"…":"Remove"}</button>
                                `:l`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(f)} onClick=${()=>j(y.slug)}>${k===y.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${y.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(y.tags||[]).map((C)=>l`<span class="settings-tag">${C}</span>`)}${(y.skills||[]).map((C)=>l`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${C}</span>`)}</div>
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
    `}var vu=D(()=>{d()});var Yl={};function r_(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function Dr(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function ql(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function Al(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Zl(n,r,i,_){try{return Cn(localStorage.getItem(n),{fallback:r,min:i,max:_})}catch{return Cn(r,{fallback:r,min:i,max:_})}}function Il(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function Ll(){let[n,r]=w(()=>r_("piclaw_vim_mode",!1)),[i,_]=w(()=>r_("piclaw_show_whitespace",!0)),[c,u]=w(()=>r_("piclaw_md_live_preview",!0)),[f,s]=w(()=>Zl("piclaw_editor_font_size",13,10,24)),[o,$]=w(()=>ql("piclaw_editor_font_family","")),v=H((g,K,h)=>{let b=!K;h(b),Dr(g,b)},[]);return l`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${n}
                    onChange=${()=>{let g=!n;r(g),Dr("piclaw_vim_mode",g)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${i}
                    onChange=${()=>{let g=!i;_(g),Dr("piclaw_show_whitespace",g)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${c}
                    onChange=${()=>{let g=!c;u(g),Dr("piclaw_md_live_preview",g)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${m}
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
                    onInput=${(g)=>{let K=g.target.value;$(K),Al("piclaw_editor_font_family",K)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var Dl;var Ku=D(()=>{d();_r();Jn();Dl=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;Ln({id:"editor",label:"Editor",icon:Dl,component:Ll,order:150})});var Ol={};function i_(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function __(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function c_(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function u_(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Cl(){let[n,r]=w(()=>i_("piclaw_dev_mode",!1)),[i,_]=w(()=>c_("piclaw_addons_catalog_url","")),[c,u]=w(()=>c_("piclaw_addons_catalog_urls","")),[f,s]=w(()=>c_("piclaw_addons_repo_url","")),[o,$]=w(()=>i_("piclaw_debug_sse",!1)),[v,g]=w(()=>i_("piclaw_debug_tool_calls",!1)),K=H(()=>{let h=!n;r(h),__("piclaw_dev_mode",h)},[n]);return l`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${n} onChange=${K} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${n&&l`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${i}
                        onInput=${(h)=>{let b=h.target.value;_(b),u_("piclaw_addons_catalog_url",b)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${c}
                        onInput=${(h)=>{let b=h.target.value;u(b),u_("piclaw_addons_catalog_urls",b)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${f}
                        onInput=${(h)=>{let b=h.target.value;s(b),u_("piclaw_addons_repo_url",b)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${o}
                        onChange=${()=>{let h=!o;$(h),__("piclaw_debug_sse",h)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${v}
                        onChange=${()=>{let h=!v;g(h),__("piclaw_debug_tool_calls",h)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var Jl;var pu=D(()=>{d();_r();Jl=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;Ln({id:"developer",label:"Developer",icon:Jl,component:Cl,order:900})});var xs={};_n(xs,{openSettingsDialog:()=>ts,SettingsDialogContent:()=>Or,SettingsDialog:()=>ys});function tr(n){yr.push({ts:performance.now(),label:n})}function El(){if(!yr.length)return;let n=yr[0].ts,r=yr.map((i)=>`+${(i.ts-n).toFixed(1)}ms ${i.label}`);console.info(`[settings-dialog perf]
`+r.join(`
`));try{window.__piclawSettingsPerfLog=r}catch(i){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:r})}).catch((i)=>{})}catch(i){}yr.length=0}function el(n){let r=Jr.get(n);if(r)return Promise.resolve(r);let i=Yr.get(n);if(i)return i;let _=dl[n]().then((c)=>{return Jr.set(n,c),Yr.delete(n),c}).catch((c)=>{throw Yr.delete(n),c});return Yr.set(n,_),_}function Cr(n="Loading…"){return l`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function Or({onClose:n}){tr("SettingsDialogContent-render-start");let[r,i]=w(()=>oi()||"general"),[_,c]=w(zu),[u,f]=w(null),[s,o]=w(""),[,$]=w(0),[v,g]=w(()=>Object.fromEntries(Jr.entries())),[K,h]=w(null),[b,B]=w({compact:!1,narrow:!1}),t=L(null),p=L(null);P(()=>{tr("SettingsDialogContent-mounted"),El()},[]),P(()=>{let x=(G)=>{if(G.key==="Escape")n()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[n]),P(()=>{let x=(G)=>{let M=typeof G?.detail?.section==="string"?G.detail.section.trim():"";if(M)i(M),o("")};return window.addEventListener("piclaw:open-settings",x),()=>window.removeEventListener("piclaw:open-settings",x)},[]),P(()=>{let x=()=>$((G)=>G+1);return window.addEventListener("piclaw:settings-panes-changed",x),()=>window.removeEventListener("piclaw:settings-panes-changed",x)},[]),P(()=>{fetch("/agent/settings-data").then((x)=>x.json()).then((x)=>{zu=x,c(x)}).catch(()=>c({}))},[]),P(()=>{let x=p.current;if(!x)return;let G=()=>{let M=x.clientWidth||0;B((C)=>{let J={compact:M>0&&M<=860,narrow:M>0&&M<=720};return C.compact===J.compact&&C.narrow===J.narrow?C:J})};if(G(),typeof ResizeObserver==="function"){let M=new ResizeObserver(()=>G());return M.observe(x),()=>M.disconnect()}return window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[]);let j=[...Fu].sort((x,G)=>(x.order??500)-(G.order??500)),F=Q_().map((x)=>({id:x.id,label:x.label,icon:x.icon,searchable:x.searchable||!1,placeholder:x.searchPlaceholder,order:x.order??500,isExtension:!0,component:x.component})).sort(si),U=[...j,...F],z=U.find((x)=>x.id===r)||Fu.find((x)=>x.id===r);P(()=>{if(z?.searchable)requestAnimationFrame(()=>t.current?.focus())},[r]),P(()=>{if(z?.isExtension){h(null);return}let x=!1;if(v[r]){h(null);return}return h(r),el(r).then((G)=>{if(x)return;g((M)=>M?.[r]?M:{...M||{},[r]:G})}).catch((G)=>{if(x)return;console.error(`[settings-dialog] Failed to lazy-load section "${r}".`,G)}).finally(()=>{if(!x)h((G)=>G===r?null:G)}),()=>{x=!0}},[r,z?.isExtension,v]);let k=H((x,G="info")=>{f(x?{text:x,type:G}:null)},[]),Q=H((x)=>{i(x),o("");let G=Sl[x];if(G&&!Bu.has(x))Bu.add(x),G().then(()=>$((M)=>M+1)).catch((M)=>{})},[]),y=H((x)=>{c((G)=>({...G||{},...x||{}}))},[]),T=()=>{if(z?.isExtension){if(!z.component)return Cr("Loading pane…");let G=z.component;return l`<${G} filter=${s} />`}let x=v[r];if(!x||K===r)return Cr(`Loading ${z?.label||"settings"}…`);switch(r){case"general":return l`<${x} settingsData=${_} setStatus=${k} mergeSettingsData=${y} />`;case"sessions":return l`<${x} settingsData=${_} setStatus=${k} mergeSettingsData=${y} />`;case"recordings":return l`<${x} filter=${s} setStatus=${k} />`;case"compaction":return l`<${x} settingsData=${_} setStatus=${k} mergeSettingsData=${y} />`;case"keyboard":return l`<${x} filter=${s} setStatus=${k} />`;case"workspace":return l`<${x} settingsData=${_} setStatus=${k} mergeSettingsData=${y} />`;case"environment":return l`<${x} settingsData=${_} filter=${s} setStatus=${k} mergeSettingsData=${y} />`;case"providers":return l`<${x} providers=${_?.providers} setStatus=${k} />`;case"models":return l`<${x} filter=${s} />`;case"theme":return l`<${x} themes=${_?.themes} colorKeys=${_?.colorKeys} settingsData=${_} setStatus=${k} mergeSettingsData=${y} />`;case"scheduled-tasks":return l`<${x} filter=${s} setStatus=${k} />`;case"quick-actions":return l`<${x} filter=${s} setStatus=${k} mergeSettingsData=${y} />`;case"keychain":return l`<${x} filter=${s} />`;case"tools":return l`<${x} toolsets=${_?.toolsets} filter=${s} settingsData=${_} mergeSettingsData=${y} />`;case"addons":return l`<${x} setStatus=${k} filter=${s} />`;default:return Cr("Loading settings…")}},W=!z;return tr("SettingsDialogContent-render-end"),l`
        <div class="settings-dialog-backdrop" onClick=${(x)=>{if(x.target===x.currentTarget)n()}}>
            <div ref=${p} data-testid="settings-dialog" class=${`settings-dialog${b.compact?" settings-dialog-compact":""}${b.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${z?.searchable&&l`
                        <input ref=${t} type="text" class="settings-header-filter"
                            placeholder=${z.placeholder||"Filter…"}
                            value=${s} onInput=${(x)=>o(x.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${U.map((x,G)=>{let M=G>0&&!U[G-1].isExtension,C=x.isExtension&&M;return l`
                                ${C&&l`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${x.id===r?"active":""}`} onClick=${()=>Q(x.id)}>
                                    <span class="settings-nav-icon">${x.icon}</span>
                                    <span class="settings-nav-label">${x.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${W?Cr("Loading settings…"):T()}
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
    `}function ys(){let[n,r]=w(!1);if(P(()=>{let i=(c)=>{let u=Rr(c?.detail?.section);if(u)try{window.__piclawSettingsRequestedSection=u}catch(f){}r(!0)};window.addEventListener("piclaw:open-settings",i);let _=q_();if(_.open){if(_.section)try{window.__piclawSettingsRequestedSection=_.section}catch(c){}r(!0)}return()=>window.removeEventListener("piclaw:open-settings",i)},[]),!n)return null;return l`<${X_} className="settings-portal"><${Or} onClose=${()=>r(!1)} /><//>`}function ts(n={}){M_(n)}var yr,zu=null,Jr,Yr,dl,Sl,Bu,ml,al,ns,rs,is,_s,cs,us,fs,ls,ss,os,gs,$s,ws,Fu;var Wu=D(()=>{d();P_();_r();fc();yr=[];tr("module-eval-start");tr("imports-done");Jr=new Map,Yr=new Map;Jr.set("general",Vi);dl={general:()=>Promise.resolve(Vi),sessions:()=>Promise.resolve().then(() => (oc(),sc)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => ($c(),gc)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (yc(),wc)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (zc(),pc)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (Tc(),Uc)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (Vc(),Gc)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (Xc(),Nc)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Qc(),Pc)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (ru(),nu)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (cu(),_u)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (wu(),$u)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (tu(),yu)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (hu(),xu)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (vu(),bu)).then((n)=>n.AddonsSection)},Sl={"editor-settings":()=>Promise.resolve().then(() => (Ku(),Yl)).then(()=>{}),developer:()=>Promise.resolve().then(() => (pu(),Ol)).then(()=>{})},Bu=new Set;ml=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,al=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,ns=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,rs=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,is=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,_s=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,cs=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,us=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,fs=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,ls=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,ss=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,os=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,gs=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,$s=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,ws=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,Fu=[{id:"general",label:"General",icon:ml,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:al,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:ns,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:rs,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:cs,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:is,searchable:!1,order:15},{id:"environment",label:"Environment",icon:_s,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:us,searchable:!1,order:20},{id:"models",label:"Models",icon:fs,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:ls,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:ss,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:gs,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:$s,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:os,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:ws,searchable:!0,placeholder:"Filter add-ons…",order:90}]});d();Wu();_r();var hs=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function bs({label:n,body:r,filter:i=""}){return l`
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
  `}function vs(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let r of n)Ln({id:r.id,label:r.label,icon:hs,searchable:!0,searchPlaceholder:`Filter ${r.label} settings…`,order:r.id==="fixture-z-observability"?1:999,component:(i)=>l`<${bs} label=${r.label} body=${r.body} filter=${i?.filter||""} />`})}var xn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},Ks={current:xn.current,models:xn.models,model_options:xn.model_options,thinking_level:xn.thinking_level,supports_thinking:xn.supports_thinking,available_thinking_levels:xn.available_thinking_levels},ju={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},ku={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},an=new URLSearchParams(window.location.search).get("real")!=="1",Ru=window.fetch.bind(window);function yn(n,r=200){return new Response(JSON.stringify(n),{status:r,headers:{"Content-Type":"application/json"}})}function ps(){window.fetch=async(n,r)=>{let i=new URL(typeof n==="string"?n:n.url,window.location.href),_=String(r?.method||"GET").toUpperCase();if(!an)return Ru(n,r);if(i.pathname==="/agent/settings-data")return yn(xn);if(i.pathname==="/agent/models")return yn(Ks);if(i.pathname==="/agent/addons")return yn(ju);if(i.pathname.startsWith("/agent/addons/"))return yn({ok:!0,message:"Fixture add-on action accepted.",...ju});if(i.pathname==="/agent/keychain"){if(_==="GET")return yn(ku);if(_==="POST")return yn({ok:!0,...ku})}if(i.pathname==="/agent/settings/general")return yn({ok:!0,settings:xn});if(i.pathname==="/agent/settings/widget-token/regenerate")return yn({ok:!0,settings:{...xn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(i.pathname.startsWith("/agent/default/message"))return yn({command:{status:"success",message:"Fixture command accepted."}});if(i.pathname.startsWith("/agent/settings/"))return yn({ok:!0,settings:xn,items:[],entries:[]});if(i.pathname==="/agent/client-perf")return yn({ok:!0});return Ru(n,r)}}function zs(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function Hu(n){try{window.__piclawSettingsRequestedSection=n}catch(r){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function Bs(){let n=new URLSearchParams(window.location.search),[r,i]=w(n.get("section")||"general"),[_,c]=w(Number(n.get("width")||900)),[u,f]=w(Number(n.get("height")||640)),[s,o]=w(an),[$,v]=w(0),g=I(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),K=H((b)=>{i(b),Hu(b)},[]),h=H(()=>{an=!an,o(an),v((b)=>b+1)},[]);return l`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${r} onChange=${(b)=>K(b.target.value)}>${g.map((b)=>l`<option value=${b}>${b}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${_} onInput=${(b)=>c(Number(b.target.value))} /> ${_}px</label>
        <label>Height <input type="range" min="420" max="900" value=${u} onInput=${(b)=>f(Number(b.target.value))} /> ${u}px</label>
        <button type="button" onClick=${h}>${s?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>v((b)=>b+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${_}px;--fixture-height:${u}px;`}>
        <${Or} key=${$} onClose=${()=>{}} />
      </div>
    </div>
  `}function Fs(){vs(),ps(),zs();let n=new URLSearchParams(window.location.search);Hu(n.get("section")||"general");let r=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));r.id="settings-widget-fixture-root",Zn(l`<${Bs} />`,r),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:an})}Fs();

//# debugId=38062D6B069B688464756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
