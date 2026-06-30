var Gu=Object.defineProperty;var Vu=(n)=>n;function Nu(n,i){this[n]=Vu.bind(null,i)}var un=(n,i)=>{for(var r in i)Gu(n,r,{get:i[r],enumerable:!0,configurable:!0,set:Nu.bind(i,r)})};var O=(n,i)=>()=>(n&&(i=n(n=0)),i);var du={};un(du,{useState:()=>w,useRef:()=>C,useReducer:()=>N_,useMemo:()=>L,useLayoutEffect:()=>Ui,useImperativeHandle:()=>Yu,useErrorBoundary:()=>Ju,useEffect:()=>q,useDebugValue:()=>Cu,useContext:()=>Lu,useCallback:()=>U,render:()=>In,html:()=>s,h:()=>sr,createContext:()=>Iu,Component:()=>ci});function vn(n,i){for(var r in i)n[r]=i[r];return n}function fr(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function sr(n,i,r){var _,c,u,f={};for(u in i)u=="key"?_=i[u]:u=="ref"?c=i[u]:f[u]=i[u];if(arguments.length>2&&(f.children=arguments.length>3?Fi.call(arguments,2):r),typeof n=="function"&&n.defaultProps!=null)for(u in n.defaultProps)f[u]===void 0&&(f[u]=n.defaultProps[u]);return ki(n,f,_,c,null)}function ki(n,i,r,_,c){var u={type:n,props:i,key:r,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c==null?++B_:c,__i:-1,__u:0};return c==null&&d.vnode!=null&&d.vnode(u),u}function ji(n){return n.children}function ci(n,i){this.props=n,this.context=i}function Zn(n,i){if(i==null)return n.__?Zn(n.__,n.__i+1):null;for(var r;i<n.__k.length;i++)if((r=n.__k[i])!=null&&r.__e!=null)return r.__e;return typeof n.type=="function"?Zn(n):null}function Mu(n){if(n.__P&&n.__d){var i=n.__v,r=i.__e,_=[],c=[],u=vn({},i);u.__v=i.__v+1,d.vnode&&d.vnode(u),gr(n.__P,u,i,n.__n,n.__P.namespaceURI,32&i.__u?[r]:null,_,r==null?Zn(i):r,!!(32&i.__u),c),u.__v=i.__v,u.__.__k[u.__i]=u,P_(_,u,c),i.__e=i.__=null,u.__e!=r&&j_(u)}}function j_(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(i){if(i!=null&&i.__e!=null)return n.__e=n.__c.base=i.__e}),j_(n)}function rr(n){(!n.__d&&(n.__d=!0)&&Wn.push(n)&&!Hi.__r++||l_!=d.debounceRendering)&&((l_=d.debounceRendering)||z_)(Hi)}function Hi(){try{for(var n,i=1;Wn.length;)Wn.length>i&&Wn.sort(H_),n=Wn.shift(),i=Wn.length,Mu(n)}finally{Wn.length=Hi.__r=0}}function U_(n,i,r,_,c,u,f,g,l,$,t){var o,b,p,k,h,z,y,v=_&&_.__k||zi,G=i.length;for(l=qu(r,i,v,l,G),o=0;o<G;o++)(p=r.__k[o])!=null&&(b=p.__i!=-1&&v[p.__i]||Bi,p.__i=o,z=gr(n,p,b,c,u,f,g,l,$,t),k=p.__e,p.ref&&b.ref!=p.ref&&(b.ref&&$r(b.ref,null,p),t.push(p.ref,p.__c||k,p)),h==null&&k!=null&&(h=k),(y=!!(4&p.__u))||b.__k===p.__k?(l=R_(p,l,n,y),y&&b.__e&&(b.__e=null)):typeof p.type=="function"&&z!==void 0?l=z:k&&(l=k.nextSibling),p.__u&=-7);return r.__e=h,l}function qu(n,i,r,_,c){var u,f,g,l,$,t=r.length,o=t,b=0;for(n.__k=Array(c),u=0;u<c;u++)(f=i[u])!=null&&typeof f!="boolean"&&typeof f!="function"?(typeof f=="string"||typeof f=="number"||typeof f=="bigint"||f.constructor==String?f=n.__k[u]=ki(null,f,null,null,null):Wi(f)?f=n.__k[u]=ki(ji,{children:f},null,null,null):f.constructor===void 0&&f.__b>0?f=n.__k[u]=ki(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):n.__k[u]=f,l=u+b,f.__=n,f.__b=n.__b+1,g=null,($=f.__i=Au(f,r,l,o))!=-1&&(o--,(g=r[$])&&(g.__u|=2)),g==null||g.__v==null?($==-1&&(c>t?b--:c<t&&b++),typeof f.type!="function"&&(f.__u|=4)):$!=l&&($==l-1?b--:$==l+1?b++:($>l?b--:b++,f.__u|=4))):n.__k[u]=null;if(o)for(u=0;u<t;u++)(g=r[u])!=null&&(2&g.__u)==0&&(g.__e==_&&(_=Zn(g)),G_(g,g));return _}function R_(n,i,r,_){var c,u;if(typeof n.type=="function"){for(c=n.__k,u=0;c&&u<c.length;u++)c[u]&&(c[u].__=n,i=R_(c[u],i,r,_));return i}n.__e!=i&&(_&&(i&&n.type&&!i.parentNode&&(i=Zn(n)),r.insertBefore(n.__e,i||null)),i=n.__e);do i=i&&i.nextSibling;while(i!=null&&i.nodeType==8);return i}function Au(n,i,r,_){var c,u,f,g=n.key,l=n.type,$=i[r],t=$!=null&&(2&$.__u)==0;if($===null&&g==null||t&&g==$.key&&l==$.type)return r;if(_>(t?1:0)){for(c=r-1,u=r+1;c>=0||u<i.length;)if(($=i[f=c>=0?c--:u++])!=null&&(2&$.__u)==0&&g==$.key&&l==$.type)return f}return-1}function o_(n,i,r){i[0]=="-"?n.setProperty(i,r==null?"":r):n[i]=r==null?"":typeof r!="number"||Qu.test(i)?r:r+"px"}function vi(n,i,r,_,c){var u,f;n:if(i=="style")if(typeof r=="string")n.style.cssText=r;else{if(typeof _=="string"&&(n.style.cssText=_=""),_)for(i in _)r&&i in r||o_(n.style,i,"");if(r)for(i in r)_&&r[i]==_[i]||o_(n.style,i,r[i])}else if(i[0]=="o"&&i[1]=="n")u=i!=(i=i.replace(F_,"$1")),f=i.toLowerCase(),i=f in n||i=="onFocusOut"||i=="onFocusIn"?f.slice(2):i.slice(2),n.l||(n.l={}),n.l[i+u]=r,r?_?r[_i]=_[_i]:(r[_i]=ur,n.addEventListener(i,u?ir:nr,u)):n.removeEventListener(i,u?ir:nr,u);else{if(c=="http://www.w3.org/2000/svg")i=i.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(i!="width"&&i!="height"&&i!="href"&&i!="list"&&i!="form"&&i!="tabIndex"&&i!="download"&&i!="rowSpan"&&i!="colSpan"&&i!="role"&&i!="popover"&&i in n)try{n[i]=r==null?"":r;break n}catch(g){}typeof r=="function"||(r==null||r===!1&&i[4]!="-"?n.removeAttribute(i):n.setAttribute(i,i=="popover"&&r==1?"":r))}}function w_(n){return function(i){if(this.l){var r=this.l[i.type+n];if(i[pi]==null)i[pi]=ur++;else if(i[pi]<r[_i])return;return r(d.event?d.event(i):i)}}}function gr(n,i,r,_,c,u,f,g,l,$){var t,o,b,p,k,h,z,y,v,G,R,W,P,B,T,K=i.type;if(i.constructor!==void 0)return null;128&r.__u&&(l=!!(32&r.__u),u=[g=i.__e=r.__e]),(t=d.__b)&&t(i);n:if(typeof K=="function")try{if(y=i.props,v=K.prototype&&K.prototype.render,G=(t=K.contextType)&&_[t.__c],R=t?G?G.props.value:t.__:_,r.__c?z=(o=i.__c=r.__c).__=o.__E:(v?i.__c=o=new K(y,R):(i.__c=o=new ci(y,R),o.constructor=K,o.render=Du),G&&G.sub(o),o.state||(o.state={}),o.__n=_,b=o.__d=!0,o.__h=[],o._sb=[]),v&&o.__s==null&&(o.__s=o.state),v&&K.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=vn({},o.__s)),vn(o.__s,K.getDerivedStateFromProps(y,o.__s))),p=o.props,k=o.state,o.__v=i,b)v&&K.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),v&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(v&&K.getDerivedStateFromProps==null&&y!==p&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(y,R),i.__v==r.__v||!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(y,o.__s,R)===!1){i.__v!=r.__v&&(o.props=y,o.state=o.__s,o.__d=!1),i.__e=r.__e,i.__k=r.__k,i.__k.some(function(x){x&&(x.__=i)}),zi.push.apply(o.__h,o._sb),o._sb=[],o.__h.length&&f.push(o);break n}o.componentWillUpdate!=null&&o.componentWillUpdate(y,o.__s,R),v&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(p,k,h)})}if(o.context=R,o.props=y,o.__P=n,o.__e=!1,W=d.__r,P=0,v)o.state=o.__s,o.__d=!1,W&&W(i),t=o.render(o.props,o.state,o.context),zi.push.apply(o.__h,o._sb),o._sb=[];else do o.__d=!1,W&&W(i),t=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++P<25);o.state=o.__s,o.getChildContext!=null&&(_=vn(vn({},_),o.getChildContext())),v&&!b&&o.getSnapshotBeforeUpdate!=null&&(h=o.getSnapshotBeforeUpdate(p,k)),B=t!=null&&t.type===ji&&t.key==null?T_(t.props.children):t,g=U_(n,Wi(B)?B:[B],i,r,_,c,u,f,g,l,$),o.base=i.__e,i.__u&=-161,o.__h.length&&f.push(o),z&&(o.__E=o.__=null)}catch(x){if(i.__v=null,l||u!=null)if(x.then){for(i.__u|=l?160:128;g&&g.nodeType==8&&g.nextSibling;)g=g.nextSibling;u[u.indexOf(g)]=null,i.__e=g}else{for(T=u.length;T--;)fr(u[T]);_r(i)}else i.__e=r.__e,i.__k=r.__k,x.then||_r(i);d.__e(x,i,r)}else u==null&&i.__v==r.__v?(i.__k=r.__k,i.__e=r.__e):g=i.__e=Zu(r.__e,i,r,_,c,u,f,l,$);return(t=d.diffed)&&t(i),128&i.__u?void 0:g}function _r(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(_r))}function P_(n,i,r){for(var _=0;_<r.length;_++)$r(r[_],r[++_],r[++_]);d.__c&&d.__c(i,n),n.some(function(c){try{n=c.__h,c.__h=[],n.some(function(u){u.call(c)})}catch(u){d.__e(u,c.__v)}})}function T_(n){return typeof n!="object"||n==null||n.__b>0?n:Wi(n)?n.map(T_):n.constructor!==void 0?null:vn({},n)}function Zu(n,i,r,_,c,u,f,g,l){var $,t,o,b,p,k,h,z=r.props||Bi,y=i.props,v=i.type;if(v=="svg"?c="http://www.w3.org/2000/svg":v=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),u!=null){for($=0;$<u.length;$++)if((p=u[$])&&"setAttribute"in p==!!v&&(v?p.localName==v:p.nodeType==3)){n=p,u[$]=null;break}}if(n==null){if(v==null)return document.createTextNode(y);n=document.createElementNS(c,v,y.is&&y),g&&(d.__m&&d.__m(i,u),g=!1),u=null}if(v==null)z===y||g&&n.data==y||(n.data=y);else{if(u=v=="textarea"&&y.defaultValue!=null?null:u&&Fi.call(n.childNodes),!g&&u!=null)for(z={},$=0;$<n.attributes.length;$++)z[(p=n.attributes[$]).name]=p.value;for($ in z)p=z[$],$=="dangerouslySetInnerHTML"?o=p:$=="children"||($ in y)||$=="value"&&("defaultValue"in y)||$=="checked"&&("defaultChecked"in y)||vi(n,$,null,p,c);for($ in y)p=y[$],$=="children"?b=p:$=="dangerouslySetInnerHTML"?t=p:$=="value"?k=p:$=="checked"?h=p:g&&typeof p!="function"||z[$]===p||vi(n,$,p,z[$],c);if(t)g||o&&(t.__html==o.__html||t.__html==n.innerHTML)||(n.innerHTML=t.__html),i.__k=[];else if(o&&(n.innerHTML=""),U_(i.type=="template"?n.content:n,Wi(b)?b:[b],i,r,_,v=="foreignObject"?"http://www.w3.org/1999/xhtml":c,u,f,u?u[0]:r.__k&&Zn(r,0),g,l),u!=null)for($=u.length;$--;)fr(u[$]);g&&v!="textarea"||($="value",v=="progress"&&k==null?n.removeAttribute("value"):k!=null&&(k!==n[$]||v=="progress"&&!k||v=="option"&&k!=z[$])&&vi(n,$,k,z[$],c),$="checked",h!=null&&h!=n[$]&&vi(n,$,h,z[$],c))}return n}function $r(n,i,r){try{if(typeof n=="function"){var _=typeof n.__u=="function";_&&n.__u(),_&&i==null||(n.__u=n(i))}else n.current=i}catch(c){d.__e(c,r)}}function G_(n,i,r){var _,c;if(d.unmount&&d.unmount(n),(_=n.ref)&&(_.current&&_.current!=n.__e||$r(_,null,i)),(_=n.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(u){d.__e(u,i)}_.base=_.__P=null}if(_=n.__k)for(c=0;c<_.length;c++)_[c]&&G_(_[c],i,r||typeof n.type!="function");r||fr(n.__e),n.__c=n.__=n.__e=void 0}function Du(n,i,r){return this.constructor(n,r)}function In(n,i,r){var _,c,u,f;i==document&&(i=document.documentElement),d.__&&d.__(n,i),c=(_=typeof r=="function")?null:r&&r.__k||i.__k,u=[],f=[],gr(i,n=(!_&&r||i).__k=sr(ji,null,[n]),c||Bi,Bi,i.namespaceURI,!_&&r?[r]:c?null:i.firstChild?Fi.call(i.childNodes):null,u,!_&&r?r:c?c.__e:i.firstChild,_,f),P_(u,n,f)}function Iu(n){function i(r){var _,c;return this.getChildContext||(_=new Set,(c={})[i.__c]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){_=null},this.shouldComponentUpdate=function(u){this.props.value!=u.value&&_.forEach(function(f){f.__e=!0,rr(f)})},this.sub=function(u){_.add(u);var f=u.componentWillUnmount;u.componentWillUnmount=function(){_&&_.delete(u),f&&f.call(u)}}),r.children}return i.__c="__cC"+W_++,i.__=n,i.Provider=i.__l=(i.Consumer=function(r,_){return r.children(_)}).contextType=i,i}function Yn(n,i){a.__h&&a.__h(S,n,Dn||i),Dn=0;var r=S.__H||(S.__H={__:[],__h:[]});return n>=r.__.length&&r.__.push({}),r.__[n]}function w(n){return Dn=1,N_(X_,n)}function N_(n,i,r){var _=Yn(jn++,2);if(_.t=n,!_.__c&&(_.__=[r?r(i):X_(void 0,i),function(g){var l=_.__N?_.__N[0]:_.__[0],$=_.t(l,g);l!==$&&(_.__N=[$,_.__[1]],_.__c.setState({}))}],_.__c=S,!S.__f)){var c=function(g,l,$){if(!_.__c.__H)return!0;var t=_.__c.__H.__.filter(function(b){return b.__c});if(t.every(function(b){return!b.__N}))return!u||u.call(this,g,l,$);var o=_.__c.props!==g;return t.some(function(b){if(b.__N){var p=b.__[0];b.__=b.__N,b.__N=void 0,p!==b.__[0]&&(o=!0)}}),u&&u.call(this,g,l,$)||o};S.__f=!0;var{shouldComponentUpdate:u,componentWillUpdate:f}=S;S.componentWillUpdate=function(g,l,$){if(this.__e){var t=u;u=void 0,c(g,l,$),u=t}f&&f.call(this,g,l,$)},S.shouldComponentUpdate=c}return _.__N||_.__}function q(n,i){var r=Yn(jn++,3);!a.__s&&lr(r.__H,i)&&(r.__=n,r.u=i,S.__H.__h.push(r))}function Ui(n,i){var r=Yn(jn++,4);!a.__s&&lr(r.__H,i)&&(r.__=n,r.u=i,S.__h.push(r))}function C(n){return Dn=5,L(function(){return{current:n}},[])}function Yu(n,i,r){Dn=6,Ui(function(){if(typeof n=="function"){var _=n(i());return function(){n(null),_&&typeof _=="function"&&_()}}if(n)return n.current=i(),function(){return n.current=null}},r==null?r:r.concat(n))}function L(n,i){var r=Yn(jn++,7);return lr(r.__H,i)&&(r.__=n(),r.__H=i,r.__h=n),r.__}function U(n,i){return Dn=8,L(function(){return n},i)}function Lu(n){var i=S.context[n.__c],r=Yn(jn++,9);return r.c=n,i?(r.__==null&&(r.__=!0,i.sub(S)),i.props.value):n.__}function Cu(n,i){a.useDebugValue&&a.useDebugValue(i?i(n):n)}function Ju(n){var i=Yn(jn++,10),r=w();return i.__=n,S.componentDidCatch||(S.componentDidCatch=function(_,c){i.__&&i.__(_,c),r[1](_)}),[r[0],function(){r[1](void 0)}]}function Ou(){for(var n;n=V_.shift();){var i=n.__H;if(n.__P&&i)try{i.__h.some(Ki),i.__h.some(cr),i.__h=[]}catch(r){i.__h=[],a.__e(r,n.__v)}}}function Eu(n){var i,r=function(){clearTimeout(_),k_&&cancelAnimationFrame(i),setTimeout(n)},_=setTimeout(r,35);k_&&(i=requestAnimationFrame(r))}function Ki(n){var i=S,r=n.__c;typeof r=="function"&&(n.__c=void 0,r()),S=i}function cr(n){var i=S;n.__c=n.__(),S=i}function lr(n,i){return!n||n.length!==i.length||i.some(function(r,_){return r!==n[_]})}function X_(n,i){return typeof i=="function"?i(n):i}function Su(n){var i=K_.get(this);return i||(i=new Map,K_.set(this,i)),(i=Q_(this,i.get(n)||(i.set(n,i=function(r){for(var _,c,u=1,f="",g="",l=[0],$=function(b){u===1&&(b||(f=f.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,b,f):u===3&&(b||f)?(l.push(3,b,f),u=2):u===2&&f==="..."&&b?l.push(4,b,0):u===2&&f&&!b?l.push(5,0,!0,f):u>=5&&((f||!b&&u===5)&&(l.push(u,0,f,c),u=6),b&&(l.push(u,b,0,c),u=6)),f=""},t=0;t<r.length;t++){t&&(u===1&&$(),$(t));for(var o=0;o<r[t].length;o++)_=r[t][o],u===1?_==="<"?($(),l=[l],u=3):f+=_:u===4?f==="--"&&_===">"?(u=1,f=""):f=_+f[0]:g?_===g?g="":f+=_:_==='"'||_==="'"?g=_:_===">"?($(),u=1):u&&(_==="="?(u=5,c=f,f=""):_==="/"&&(u<5||r[t][o+1]===">")?($(),u===3&&(l=l[0]),u=l,(l=l[0]).push(2,0,u),u=0):_===" "||_==="\t"||_===`
`||_==="\r"?($(),u=2):f+=_),u===3&&f==="!--"&&(u=4,l=l[0])}return $(),l}(n)),i),arguments,[])).length>1?i:i[0]}var Fi,d,B_,Xu,Wn,l_,z_,H_,mi,pi,_i,F_,ur,nr,ir,W_,Bi,zi,Qu,Wi,jn,S,ai,y_,Dn=0,V_,a,t_,x_,b_,h_,v_,p_,k_,Q_=function(n,i,r,_){var c;i[0]=0;for(var u=1;u<i.length;u++){var f=i[u++],g=i[u]?(i[0]|=f?1:2,r[i[u++]]):i[++u];f===3?_[0]=g:f===4?_[1]=Object.assign(_[1]||{},g):f===5?(_[1]=_[1]||{})[i[++u]]=g:f===6?_[1][i[++u]]+=g+"":f?(c=n.apply(g,Q_(n,g,r,["",null])),_.push(c),g[0]?i[0]|=2:(i[u-2]=0,i[u]=c)):_.push(g)}return _},K_,s;var e=O(()=>{Bi={},zi=[],Qu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Wi=Array.isArray;Fi=zi.slice,d={__e:function(n,i,r,_){for(var c,u,f;i=i.__;)if((c=i.__c)&&!c.__)try{if((u=c.constructor)&&u.getDerivedStateFromError!=null&&(c.setState(u.getDerivedStateFromError(n)),f=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(n,_||{}),f=c.__d),f)return c.__E=c}catch(g){n=g}throw n}},B_=0,Xu=function(n){return n!=null&&n.constructor===void 0},ci.prototype.setState=function(n,i){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=vn({},this.state),typeof n=="function"&&(n=n(vn({},r),this.props)),n&&vn(r,n),n!=null&&this.__v&&(i&&this._sb.push(i),rr(this))},ci.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),rr(this))},ci.prototype.render=ji,Wn=[],z_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H_=function(n,i){return n.__v.__b-i.__v.__b},Hi.__r=0,mi=Math.random().toString(8),pi="__d"+mi,_i="__a"+mi,F_=/(PointerCapture)$|Capture$/i,ur=0,nr=w_(!1),ir=w_(!0),W_=0;V_=[],a=d,t_=a.__b,x_=a.__r,b_=a.diffed,h_=a.__c,v_=a.unmount,p_=a.__;a.__b=function(n){S=null,t_&&t_(n)},a.__=function(n,i){n&&i.__k&&i.__k.__m&&(n.__m=i.__k.__m),p_&&p_(n,i)},a.__r=function(n){x_&&x_(n),jn=0;var i=(S=n.__c).__H;i&&(ai===S?(i.__h=[],S.__h=[],i.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(i.__h.some(Ki),i.__h.some(cr),i.__h=[],jn=0)),ai=S},a.diffed=function(n){b_&&b_(n);var i=n.__c;i&&i.__H&&(i.__H.__h.length&&(V_.push(i)!==1&&y_===a.requestAnimationFrame||((y_=a.requestAnimationFrame)||Eu)(Ou)),i.__H.__.some(function(r){r.u&&(r.__H=r.u),r.u=void 0})),ai=S=null},a.__c=function(n,i){i.some(function(r){try{r.__h.some(Ki),r.__h=r.__h.filter(function(_){return!_.__||cr(_)})}catch(_){i.some(function(c){c.__h&&(c.__h=[])}),i=[],a.__e(_,r.__v)}}),h_&&h_(n,i)},a.unmount=function(n){v_&&v_(n);var i,r=n.__c;r&&r.__H&&(r.__H.__.some(function(_){try{Ki(_)}catch(c){i=c}}),r.__H=void 0,i&&a.__e(i,r.__v))};k_=typeof requestAnimationFrame=="function";K_=new Map;s=Su.bind(sr)});function Un(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function sn(n,i){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,i)}catch{return}}function or(n,i=!1){let r=Un(n);if(r===null)return i;return r==="true"}function wr(n,i=null){let r=Un(n);if(r===null)return i;let _=parseInt(r,10);return Number.isFinite(_)?_:i}function M_(n){let i=Un(n);if(!i)return null;try{return JSON.parse(i)}catch{return null}}function Pi(n){let i=String(n??"").trim().toLowerCase().replace(/_/g,"-");if(!i)return Ln;if(i==="zh-cn"||i==="zh"||i==="zh-hans"||i.startsWith("zh-hans"))return"zh-CN";if(i==="ja"||i.startsWith("ja-"))return"ja";if(i==="en"||i.startsWith("en-"))return"en";return Ln}function nf(){if(typeof navigator>"u")return Ln;let n=[...Array.isArray(navigator.languages)?navigator.languages:[],navigator.language].filter((i)=>typeof i==="string"&&i.length>0);for(let i of n){let r=Pi(i);if(r!==Ln)return r}return Ln}function rf(){let n=Un(Z_);if(n)return Pi(n);return nf()}function _f(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(yr,{detail:{locale:n}}))}function Ri(){if(!tr)cf();return Tn}function cf(){return Tn=rf(),tr=!0,Tn}function uf(n,i={}){let r=Pi(n);if(tr=!0,r===Tn&&i.persist===!1)return Tn;if(Tn=r,i.persist!==!1)sn(Z_,r);return _f(r),Tn}function ff(n,i){if(!i)return n;return n.replace(/\{(\w+)\}/g,(r,_)=>{let c=i[_];return c===void 0||c===null?r:String(c)})}function I_(n,i,r=Ri()){let c=au[r]?.[n]??D_[n]??n;return ff(c,i)}function Ti(n,i){return I_(n,i)}function sf(){let[n,i]=w(Ri());return q(()=>{if(typeof window>"u"||typeof window.addEventListener!=="function")return;let r=(_)=>{let c=_.detail,u=Pi(c?.locale??Ri());i(u)};return window.addEventListener(yr,r),i(Ri()),()=>window.removeEventListener(yr,r)},[]),[n,(r)=>uf(r)]}function J(){let[n,i]=sf();return{locale:n,setLocale:i,t:(r,_)=>I_(r,_,n)}}var Ln="en",q_,A_,Z_="piclaw_locale",yr="piclaw-locale-change",D_,eu,mu,au,Tn,tr=!1;var gn=O(()=>{e();q_=["en","zh-CN","ja"],A_={en:"English","zh-CN":"简体中文",ja:"日本語"},D_={"compose.placeholder":"Message (Enter to send, Shift+Enter for newline)...","compose.send":"Send","compose.stop":"Stop","compose.searchPlaceholder":"Search (Enter to run)...","compose.clearAll":"Clear all","compose.clearAllTitle":"Clear all attachments and references","compose.scope":"Scope","compose.searchScope":"Search scope","compose.scopeCurrent":"Current","compose.scopeBranchFamily":"Branch family","compose.scopeAll":"All chats","compose.filterImages":"Images","compose.filterAttachments":"Attachments","compose.search":"Search","compose.closeSearch":"Close search","compose.shareLocation":"Share location","compose.attachFile":"Attach file","compose.queueControls":"Queued follow-up controls","compose.moveUp":"Move up","compose.moveUpQueue":"Move up in queue","compose.moveDown":"Move down","compose.moveDownQueue":"Move down in queue","compose.editInCompose":"Edit in compose","compose.returnToEditor":"Return queued message to editor","compose.injectSteer":"Inject queued follow-up as steer","compose.steer":"Steer","compose.cancelQueued":"Cancel queued message","compose.resizeInput":"Resize message input","compose.resizeInputHint":"Drag to resize message input","compose.modelPicker":"Model picker","compose.sessionsAndAgents":"Sessions and agents","compose.openModelPicker":"Open model picker","compose.newBranchTitle":"Create a new branch from this chat","compose.newRootTitle":"Create a clean root session such as web:ops","compose.renameSessionTitle":"Rename the current session","compose.pruneSessionTitle":"Delete (prune) current agent/session branch","compose.filterImagesTitle":"Only show messages with images","compose.filterAttachmentsTitle":"Only show messages with attachments","compose.selectModel":"Select model","compose.loadingModels":"Loading models…","compose.noModels":"No models available.","compose.nextModel":"Next model","compose.manageSessions":"Manage sessions & agents","compose.noSessions":"No other sessions yet.","compose.newBranch":"New branch","compose.newRoot":"New root…","compose.mergeCurrent":"Merge current w/ parent","compose.renameCurrent":"Rename current…","compose.deleteCurrent":"Delete current…","compose.mergeInto":"Merge this branch into {target}","compose.mergeBlocked":"This branch cannot be merged while active or while it has children","workspace.title":"Workspace","workspace.newFile":"New file","workspace.refresh":"Refresh","workspace.actions":"Workspace actions","workspace.uploadFiles":"Upload files","workspace.reindexing":"Reindexing workspace…","workspace.deleteFile":"Delete file","workspace.download":"Download","workspace.uploadToFolder":"Upload files to this folder","workspace.addFolderHint":"Add folder hint to compose","workspace.downloadZip":"Download folder as zip","workspace.openInTab":"Open in tab","workspace.openInEditor":"Open in editor","workspace.renameSelected":"Rename selected","workspace.downloadSelectedFile":"Download selected file","workspace.downloadSelectedFolder":"Download selected folder (zip)","workspace.deleteSelectedFile":"Delete selected file","shell.settings":"Settings","shell.newChat":"New chat","shell.connecting":"Connecting…","shell.connected":"Connected","language.label":"Language","settings.title":"Settings","settings.close":"Close (Esc)","settings.filter":"Filter…","settings.loading":"Loading settings…","settings.section.general":"General","settings.section.sessions":"Sessions","settings.section.recordings":"Recordings","settings.section.compaction":"Compaction","settings.section.keyboard":"Keyboard","settings.section.workspace":"Workspace","settings.section.environment":"Environment","settings.section.providers":"Providers","settings.section.models":"Models","settings.section.theme":"Appearance","settings.section.scheduled-tasks":"Scheduled Tasks","settings.section.quick-actions":"Quick Actions","settings.section.keychain":"Keychain","settings.section.tools":"Tools","settings.section.addons":"Add-ons","settings.placeholder.recordings":"Filter recordings…","settings.placeholder.keyboard":"Filter shortcuts…","settings.placeholder.environment":"Filter environment…","settings.placeholder.models":"Filter models…","settings.placeholder.scheduled-tasks":"Filter scheduled tasks…","settings.placeholder.quick-actions":"Filter quick actions…","settings.placeholder.keychain":"Filter entries…","settings.placeholder.tools":"Filter tools…","settings.placeholder.addons":"Filter add-ons…","preview.close":"Close","preview.loading":"Loading preview…","preview.files":"Files","preview.folders":"Folders","preview.compressed":"Compressed","preview.uncompressed":"Uncompressed","preview.name":"Name","preview.type":"Type","preview.method":"Method","preview.size":"Size","post.deleteMessage":"Delete message","post.tooLarge":"Message too large to display.","post.previewTruncated":"Preview truncated.","post.submitted":"Submitted","post.discard":"Discard","post.save":"Save","post.cancel":"Cancel","post.addNote":"Add note","post.addNotePlaceholder":"Add a note…","tab.close":"Close","tab.closeOthers":"Close Others","tab.closeAll":"Close All","tab.reattach":"Reattach","tab.openInWindow":"Open in Window","tab.openInNewTab":"Open in New Tab","tab.pinned":"Pinned","tab.detached":"Detached","tab.openSeparateWindow":"Open in separate window","status.trackedVariables":"Tracked variables","status.attachToSession":"Attach to session","status.files":"Files","status.proposedDiff":"Proposed diff","status.copyTmux":"Copy tmux command","status.experimentDuration":"Experiment duration","status.sinceLastActivity":"Since last activity","annotator.title":"Annotate image","annotator.typeLabel":"Type label…","annotator.undo":"Undo","annotator.resetZoom":"Reset zoom","tree.filter":"Filter…","tree.sessionTree":"Session tree","btw.label":"BTW side conversation","btw.close":"Close BTW","btw.thinking":"Thinking","mdpreview.close":"Close preview","mdpreview.unavailable":"Preview unavailable","widget.close":"Close widget","oobe.gettingStarted":"Getting started","oobe.needsSetupTitle":"Instance needs setup","oobe.configuredTitle":"Instance is configured","oobe.needsSetupBody":"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.","oobe.configuredBody":"This instance looks configured. Review or update provider and model settings in Settings.","oobe.openSettings":"Open Settings","oobe.dismiss":"Dismiss","oobe.done":"Done","palette.placeholder":"Type to jump to an agent, workspace action, or slash command…","palette.hideWorkspace":"Hide workspace","palette.showWorkspace":"Show workspace","palette.hideWorkspaceDesc":"Hide the workspace sidebar.","palette.showWorkspaceDesc":"Show the workspace sidebar.","palette.exitChatOnly":"Exit chat-only mode","palette.chatOnly":"Chat-only mode","palette.exitChatOnlyDesc":"Return to the split workspace layout.","palette.chatOnlyDesc":"Switch to the chat-only layout.","palette.groupAgents":"Agents","palette.groupWorkspace":"Workspace","palette.groupSlash":"Slash commands","palette.hintMove":"Move","palette.hintSelect":"Select","palette.hintPopOut":"Pop out","palette.hintClose":"Close","settings.appliedNotice":"Settings applied. Changes take effect on the next turn.","settings.sessions.lifecycle":"Session Lifecycle","settings.sessions.autoRotate":"Auto-rotate sessions","settings.sessions.maxSize":"Max session size (MB)","settings.sessions.maxSizeAria":"max session size","settings.sessions.agentBehaviour":"Agent Behaviour","settings.sessions.toolBudget":"Tool use budget","settings.sessions.toolBudgetAria":"tool use budget","settings.sessions.toolBudgetHint":"max tool-call messages per turn","settings.sessions.isolation":"Session isolation","settings.sessions.isolationNone":"None — full cross-session visibility","settings.sessions.isolationSummary":"Summary — tools visible, no arguments","settings.sessions.isolationFull":"Full — sessions cannot see each other","settings.editor.heading":"Editor","settings.editor.vimMode":"Vim mode","settings.editor.showWhitespace":"Show whitespace","settings.editor.livePreview":"Markdown live preview","settings.editor.fontSize":"Font size (px)","settings.editor.fontSizeAria":"editor font size","settings.editor.fontFamily":"Font family","settings.editor.fontFamilyPlaceholder":"monospace (default)","settings.editor.localOnlyHint":"This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.","settings.appearance.syncing":"Syncing appearance…","settings.appearance.default":"Default","settings.appearance.autoLightDark":"auto (light/dark)","settings.appearance.tint":"Tint:","settings.appearance.clearTint":"Clear tint","settings.appearance.none":"none","settings.keyboard.heading":"Keyboard","settings.keyboard.hint1":"Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.","settings.keyboard.hint1b":"is reserved for dismiss/abort and cannot be rebound.","settings.keyboard.hint2mid":"and typing","settings.keyboard.hint2end":"outside the compose box open this pane.","settings.keyboard.resetAll":"Reset all to defaults","settings.keyboard.defaultColon":"Default:","settings.keyboard.save":"Save","settings.keyboard.defaultBtn":"Default","settings.keyboard.noMatch":"No shortcuts match this filter.","settings.keyboard.invalidShortcut":"Invalid shortcut: {token}. Escape is reserved and cannot be rebound.","settings.keyboard.saved":"Keyboard shortcuts saved.","settings.keyboard.resetOne":"Keyboard shortcut reset to default.","settings.keyboard.resetAllDone":"Keyboard shortcuts reset to defaults.","settings.workspace.serverApplied":"Workspace settings applied. Server-side limits affect new workspace requests immediately.","settings.workspace.browserApplied":"Browser workspace settings applied immediately in this tab.","settings.workspace.access":"Access","settings.workspace.enableTerminal":"Enable web terminal","settings.workspace.allowVnc":"Allow direct VNC targets","settings.workspace.accessHint":"Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.","settings.workspace.guardrails":"Server scan guardrails","settings.workspace.maxDepth":"Max tree depth","settings.workspace.maxDepthAria":"workspace tree max depth","settings.workspace.maxDepthHintPre":"caps all","settings.workspace.maxDepthHintPost":"requests","settings.workspace.maxEntries":"Max entries per scan","settings.workspace.maxEntriesAria":"workspace tree max entries","settings.workspace.maxEntriesHint":"truncate oversized tree walks earlier","settings.workspace.thisBrowser":"This browser","settings.workspace.refreshInterval":"Refresh interval (seconds)","settings.workspace.refreshIntervalAria":"workspace refresh interval","settings.workspace.folderDepth":"Folder preview scan depth","settings.workspace.folderDepthAria":"folder preview scan depth","settings.workspace.folderDepthHintPre":"set to","settings.workspace.folderDepthHintPost":"to disable folder size preview scans","settings.workspace.footerHint":"Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.","settings.models.thinkingLevel":"Thinking level","settings.models.noThinking":"Current model does not support thinking.","settings.models.thinkingLevelLabel":"Thinking level:","settings.models.loading":"Loading models…","settings.models.summary":"Model and provider names may wrap in narrow panes to avoid clipping.","settings.models.scopedOnly":"Scoped models only","settings.models.scopedCheckboxPre":"Use Pi","settings.models.scopedCheckboxPost":"for Piclaw model lists","settings.models.scopedHintPre":"Filters this picker and the","settings.models.scopedHintPost":"tool. TUI model selection remains unchanged.","settings.models.colModel":"Model","settings.models.colProvider":"Provider","settings.models.colContext":"Context","settings.models.colReasoning":"Reasoning","settings.models.noMatch":'No models match "{filter}"',"settings.tools.unavailable":"Tool data not available.","settings.tools.search":"Search","settings.tools.matchMode":"Match mode","settings.tools.orMode":"Any keyword (OR) — results match at least one search term","settings.tools.andMode":"All keywords (AND) — results must match every search term","settings.tools.colEnabled":"Enabled","settings.tools.colTool":"Tool","settings.tools.colCompact":"Compact","settings.tools.colKind":"Kind","settings.tools.colSummary":"Summary","settings.tools.colSource":"Source","settings.tools.disableCompaction":"Disable tool-result compaction for this tool","settings.tools.enableCompaction":"Enable tool-result compaction for this tool","settings.tools.noMatch":'No tools match "{filter}"',"settings.tools.footer":"Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; the “Compact” column controls tool-result compaction eligibility.","settings.environment.heading":"Environment","settings.environment.introPre":"Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to","settings.environment.introPost":", so subsequent tool calls inherit them.","settings.environment.refresh":"Refresh","settings.environment.addOverride":"Add override","settings.environment.valuePlaceholder":"value","settings.environment.save":"Save","settings.environment.countLine":"{count} variables visible • {overrides} overrides active • {keychain} keychain-injected variables hidden","settings.environment.overridden":"Overridden in KV","settings.environment.inherited":"Inherited from process environment","settings.environment.kindOverride":"override","settings.environment.kindProcess":"process","settings.environment.clear":"Clear","settings.environment.noMatch":'No environment variables match "{filter}".',"settings.environment.refreshedToast":"Environment refreshed.","settings.environment.savedToast":"Saved environment override for {name}.","settings.environment.clearedToast":"Cleared environment override for {name}.","settings.quickActions.loading":"Loading…","settings.quickActions.heading":"Timeline Quick Actions","settings.quickActions.intro":"Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.","settings.quickActions.enableAll":"Enable all","settings.quickActions.saving":"Saving…","settings.quickActions.saveApply":"Save & apply","settings.quickActions.workspaceCommands":"Workspace commands","settings.quickActions.noWorkspaceMatch":"No workspace commands match this filter.","settings.quickActions.slashCommands":"Slash commands","settings.quickActions.slashFallback":"slash command","settings.quickActions.noSlashMatch":"No slash commands match this filter.","settings.quickActions.savingToast":"Saving quick actions…","settings.quickActions.savedToast":"Quick Actions saved.","settings.providers.authApiKey":"API key","settings.providers.authConfigured":"Configured","settings.providers.heading":"Providers","settings.providers.tagCustom":"Custom","settings.providers.logout":"Logout","settings.providers.reconfigure":"Reconfigure","settings.providers.setUp":"Set up","settings.providers.setupHint":"Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.","settings.providers.starting":"Starting…","settings.providers.signInOAuth":"Sign in with OAuth","settings.providers.apiKeyLabel":"API Key","settings.providers.apiKeyPlaceholder":"Enter API key","settings.providers.save":"Save","settings.providers.configuring":"Configuring…","settings.providers.saveConfig":"Save configuration","settings.providers.apiKeyEmpty":"API key cannot be empty.","settings.providers.configuringToast":"Configuring {provider}…","settings.providers.configured":"{provider} configured.","settings.providers.startingOAuth":"Starting OAuth for {provider}…","settings.providers.oauthOpened":"OAuth window opened. Complete the sign-in flow, then close this message.","settings.providers.oauthStarted":"OAuth flow started for {provider}. Check the chat.","settings.providers.loggingOut":"Logging out {provider}…","settings.providers.loggedOut":"Logged out {provider}. Restart may be needed.","settings.general.identity":"Identity","settings.general.userLabel":"User","settings.general.yourName":"Your name","settings.general.agentLabel":"Agent","settings.general.agentName":"Agent name","settings.general.notifications":"Notifications","settings.general.browserNotifications":"Browser notifications","settings.general.notifSecureHint":"Use the \uD83D\uDD14 bell button in the compose bar to enable/disable notifications. Web Push requires HTTPS or localhost.","settings.general.notifInsecureHint":"⚠ Not available — requires a secure context (HTTPS or localhost). Access via SSH tunnel or reverse proxy with TLS to enable.","settings.general.display":"Display","settings.general.systemMeters":"System meters","settings.general.systemMetersHint":"CPU/memory/network meters in the status bar. This browser only.","settings.general.instanceConfig":"Instance Configuration","settings.general.composeUpload":"Compose upload (MB)","settings.general.composeUploadAria":"compose upload limit","settings.general.composeUploadHint":"chat/media attachments","settings.general.workspaceUpload":"Workspace upload (MB)","settings.general.workspaceUploadAria":"workspace upload limit","settings.general.workspaceUploadHint":"defaults to 256 MB; chunked uploads allow up to 1 GB","settings.general.authentication":"Authentication","settings.general.widgetToken":"Widget bearer token","settings.general.token":"Token","settings.general.hideToken":"Hide token","settings.general.revealToken":"Reveal token","settings.general.copyToken":"Copy token","settings.general.copied":"Copied","settings.general.regenerating":"Regenerating…","settings.general.regenerate":"Regenerate","settings.general.tokenHintPre":"Read-only token for","settings.general.tokenHintMid":"and","settings.general.tokenHintPost":". Use as","settings.general.tokenHintEnd":".","settings.general.copyFailed":"Could not copy widget token. Select the token field and copy manually.","settings.general.regenConfirm":"Regenerate the widget token? Existing macOS widgets using the old token will stop updating.","settings.general.totpTitle":"TOTP setup QR","settings.general.totpConfiguredHint":"Current web-login authenticator secret. Scan this QR to add another authenticator device.","settings.general.totpUnconfiguredHint":"TOTP is not configured for this instance yet, so no setup QR is available.","settings.general.issuer":"Issuer","settings.general.label":"Label","settings.general.secret":"Secret","settings.general.avatarUpload":"Click to upload","settings.developer.heading":"Developer","settings.developer.devMode":"Developer mode","settings.developer.localHint":"This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.","settings.developer.addonSources":"Add-on Sources","settings.developer.catalogUrl":"Catalog URL","settings.developer.catalogHint":"Primary add-on catalog URL. Leave empty to use the default","settings.developer.additionalCatalogs":"Additional catalog URLs","settings.developer.additionalHint":"Fetched in addition to the primary/default catalog. One URL per line.","settings.developer.repoUrl":"Repo URL","settings.developer.repoHintPre":"Override the git repo used for","settings.developer.repoHintPost":"installs. Leave empty for default.","settings.developer.debug":"Debug","settings.developer.logSse":"Log SSE events","settings.developer.logToolCalls":"Log tool calls","settings.developer.debugHint":"Debug flags take effect on next page reload.","settings.addons.installing":"Installing {slug}…","settings.addons.removing":"Removing {slug}…","settings.addons.installedToast":"Add-on installed.","settings.addons.removedToast":"Add-on removed.","settings.addons.restarting":"Restarting piclaw…","settings.addons.restartComplete":"Restart complete — add-ons refreshed.","settings.addons.restartTimeout":"Backend did not return in time. Reload the page manually.","settings.addons.fetching":"Fetching add-ons…","settings.addons.loadFailed":"Could not load add-ons.","settings.addons.catalogFromPre":"Catalog from","settings.addons.catalogMerged":"{count} catalog sources merged.","settings.addons.installNote":"Package-first install via Bun; restart required after install/uninstall.","settings.addons.failedFetchSingular":"Failed to fetch {count} catalog source:","settings.addons.failedFetchPlural":"Failed to fetch {count} catalog sources:","settings.addons.activeSources":"Active catalog sources ({count})","settings.addons.windowsWarning":"Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.","settings.addons.typeExtSkill":"extension + skill","settings.addons.typeSkill":"skill","settings.addons.typeExt":"extension","settings.addons.update":"Update","settings.addons.remove":"Remove","settings.addons.install":"Install","settings.addons.noMatch":'No add-ons match "{filter}"',"settings.addons.restartNotice":"Extension changes are installed but inactive until piclaw restarts.","settings.addons.restartNow":"Restart Now","menu.title":"Menu","menu.showWorkspace":"Show workspace","menu.hideWorkspace":"Hide workspace","menu.openExplorer":"Open explorer","menu.chatOnly":"Chat-only mode","menu.exitChatOnly":"Exit chat-only mode","menu.openTerminal":"Open terminal in tab","menu.openVnc":"Open VNC in tab","menu.newFile":"New file","menu.openRecent":"Open Recent","menu.refreshTree":"Refresh tree","menu.reindex":"Reindex workspace","menu.showHidden":"Show hidden files","menu.hideHidden":"Hide hidden files","menu.scale":"Scale","menu.settings":"Settings"},eu={"compose.placeholder":"输入消息（回车发送，Shift+回车换行）...","compose.send":"发送","compose.stop":"停止","compose.searchPlaceholder":"搜索（回车运行）...","compose.clearAll":"清除全部","compose.clearAllTitle":"清除所有附件和引用","compose.scope":"范围","compose.searchScope":"搜索范围","compose.scopeCurrent":"当前","compose.scopeBranchFamily":"分支系列","compose.scopeAll":"所有聊天","compose.filterImages":"图片","compose.filterAttachments":"附件","compose.search":"搜索","compose.closeSearch":"关闭搜索","compose.shareLocation":"分享位置","compose.attachFile":"附加文件","compose.queueControls":"排队后续消息控制","compose.moveUp":"上移","compose.moveUpQueue":"在队列中上移","compose.moveDown":"下移","compose.moveDownQueue":"在队列中下移","compose.editInCompose":"在输入框中编辑","compose.returnToEditor":"将排队消息返回编辑器","compose.injectSteer":"作为引导插入排队的后续消息","compose.steer":"引导","compose.cancelQueued":"取消排队消息","compose.resizeInput":"调整消息输入框大小","compose.resizeInputHint":"拖动以调整消息输入框大小","compose.modelPicker":"模型选择器","compose.sessionsAndAgents":"会话与代理","compose.openModelPicker":"打开模型选择器","compose.newBranchTitle":"从此聊天创建新分支","compose.newRootTitle":"创建一个干净的根会话，例如 web:ops","compose.renameSessionTitle":"重命名当前会话","compose.pruneSessionTitle":"删除（修剪）当前代理/会话分支","compose.filterImagesTitle":"仅显示含图片的消息","compose.filterAttachmentsTitle":"仅显示含附件的消息","compose.selectModel":"选择模型","compose.loadingModels":"正在加载模型…","compose.noModels":"没有可用的模型。","compose.nextModel":"下一个模型","compose.manageSessions":"管理会话与代理","compose.noSessions":"暂无其他会话。","compose.newBranch":"新建分支","compose.newRoot":"新建根会话…","compose.mergeCurrent":"将当前合并到父级","compose.renameCurrent":"重命名当前…","compose.deleteCurrent":"删除当前…","compose.mergeInto":"将此分支合并到 {target}","compose.mergeBlocked":"当此分支处于活动状态或有子分支时无法合并","workspace.title":"工作区","workspace.newFile":"新建文件","workspace.refresh":"刷新","workspace.actions":"工作区操作","workspace.uploadFiles":"上传文件","workspace.reindexing":"正在重建索引…","workspace.deleteFile":"删除文件","workspace.download":"下载","workspace.uploadToFolder":"上传文件到此文件夹","workspace.addFolderHint":"将文件夹提示添加到输入框","workspace.downloadZip":"将文件夹下载为 zip","workspace.openInTab":"在标签页打开","workspace.openInEditor":"在编辑器打开","workspace.renameSelected":"重命名所选","workspace.downloadSelectedFile":"下载所选文件","workspace.downloadSelectedFolder":"下载所选文件夹（zip）","workspace.deleteSelectedFile":"删除所选文件","shell.settings":"设置","shell.newChat":"新建对话","shell.connecting":"连接中…","shell.connected":"已连接","language.label":"语言","settings.title":"设置","settings.close":"关闭（Esc）","settings.filter":"筛选…","settings.loading":"加载设置中…","settings.section.general":"常规","settings.section.sessions":"会话","settings.section.recordings":"录制","settings.section.compaction":"压缩","settings.section.keyboard":"键盘","settings.section.workspace":"工作区","settings.section.environment":"环境","settings.section.providers":"提供商","settings.section.models":"模型","settings.section.theme":"外观","settings.section.scheduled-tasks":"计划任务","settings.section.quick-actions":"快捷操作","settings.section.keychain":"密钥串","settings.section.tools":"工具","settings.section.addons":"插件","settings.placeholder.recordings":"筛选录制…","settings.placeholder.keyboard":"筛选快捷键…","settings.placeholder.environment":"筛选环境…","settings.placeholder.models":"筛选模型…","settings.placeholder.scheduled-tasks":"筛选计划任务…","settings.placeholder.quick-actions":"筛选快捷操作…","settings.placeholder.keychain":"筛选条目…","settings.placeholder.tools":"筛选工具…","settings.placeholder.addons":"筛选插件…","preview.close":"关闭","preview.loading":"正在加载预览…","preview.files":"文件","preview.folders":"文件夹","preview.compressed":"压缩后","preview.uncompressed":"未压缩","preview.name":"名称","preview.type":"类型","preview.method":"方法","preview.size":"大小","post.deleteMessage":"删除消息","post.tooLarge":"消息过大，无法显示。","post.previewTruncated":"预览已截断。","post.submitted":"已提交","post.discard":"丢弃","post.save":"保存","post.cancel":"取消","post.addNote":"添加备注","post.addNotePlaceholder":"添加备注…","tab.close":"关闭","tab.closeOthers":"关闭其他","tab.closeAll":"全部关闭","tab.reattach":"重新附加","tab.openInWindow":"在窗口中打开","tab.openInNewTab":"在新标签页打开","tab.pinned":"已固定","tab.detached":"已分离","tab.openSeparateWindow":"在独立窗口中打开","status.trackedVariables":"跟踪的变量","status.attachToSession":"附加到会话","status.files":"文件","status.proposedDiff":"建议的差异","status.copyTmux":"复制 tmux 命令","status.experimentDuration":"实验时长","status.sinceLastActivity":"自上次活动以来","annotator.title":"标注图片","annotator.typeLabel":"输入标签…","annotator.undo":"撤销","annotator.resetZoom":"重置缩放","tree.filter":"筛选…","tree.sessionTree":"会话树","btw.label":"BTW 附加对话","btw.close":"关闭 BTW","btw.thinking":"思考中","mdpreview.close":"关闭预览","mdpreview.unavailable":"预览不可用","widget.close":"关闭小部件","oobe.gettingStarted":"入门指南","oobe.needsSetupTitle":"实例需要设置","oobe.configuredTitle":"实例已配置","oobe.needsSetupBody":"此实例尚未配置。请打开“设置”并设置 AI 提供商/模型以开始发送请求。","oobe.configuredBody":"此实例看起来已配置。请在“设置”中查看或更新提供商和模型设置。","oobe.openSettings":"打开设置","oobe.dismiss":"忽略","oobe.done":"完成","palette.placeholder":"输入以跳转到代理、工作区操作或斜杠命令…","palette.hideWorkspace":"隐藏工作区","palette.showWorkspace":"显示工作区","palette.hideWorkspaceDesc":"隐藏工作区侧边栏。","palette.showWorkspaceDesc":"显示工作区侧边栏。","palette.exitChatOnly":"退出仅聊天模式","palette.chatOnly":"仅聊天模式","palette.exitChatOnlyDesc":"返回分屏工作区布局。","palette.chatOnlyDesc":"切换到仅聊天布局。","palette.groupAgents":"代理","palette.groupWorkspace":"工作区","palette.groupSlash":"斜杠命令","palette.hintMove":"移动","palette.hintSelect":"选择","palette.hintPopOut":"弹出","palette.hintClose":"关闭","settings.appliedNotice":"设置已应用。更改将在下一回合生效。","settings.sessions.lifecycle":"会话生命周期","settings.sessions.autoRotate":"自动轮换会话","settings.sessions.maxSize":"最大会话大小（MB）","settings.sessions.maxSizeAria":"最大会话大小","settings.sessions.agentBehaviour":"代理行为","settings.sessions.toolBudget":"工具使用预算","settings.sessions.toolBudgetAria":"工具使用预算","settings.sessions.toolBudgetHint":"每回合最大工具调用消息数","settings.sessions.isolation":"会话隔离","settings.sessions.isolationNone":"无 — 完全跨会话可见","settings.sessions.isolationSummary":"摘要 — 工具可见，无参数","settings.sessions.isolationFull":"完全 — 会话之间不可见","settings.editor.heading":"编辑器","settings.editor.vimMode":"Vim 模式","settings.editor.showWhitespace":"显示空白字符","settings.editor.livePreview":"Markdown 实时预览","settings.editor.fontSize":"字号（px）","settings.editor.fontSizeAria":"编辑器字号","settings.editor.fontFamily":"字体","settings.editor.fontFamilyPlaceholder":"monospace（默认）","settings.editor.localOnlyHint":"仅限此浏览器。编辑器更改存储在本地浏览器中，并在下次打开或重新加载文件标签页时生效。","settings.appearance.syncing":"正在同步外观…","settings.appearance.default":"默认","settings.appearance.autoLightDark":"自动（浅色/深色）","settings.appearance.tint":"色调：","settings.appearance.clearTint":"清除色调","settings.appearance.none":"无","settings.keyboard.heading":"键盘","settings.keyboard.hint1":"将应用级快捷键自定义为逗号分隔的绑定。更改立即生效。","settings.keyboard.hint1b":"已保留用于关闭/中止，无法重新绑定。","settings.keyboard.hint2mid":"以及键入","settings.keyboard.hint2end":"（在输入框外）可打开此面板。","settings.keyboard.resetAll":"全部重置为默认","settings.keyboard.defaultColon":"默认：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"默认","settings.keyboard.noMatch":"没有匹配此筛选的快捷键。","settings.keyboard.invalidShortcut":"无效快捷键：{token}。Escape 已保留，无法重新绑定。","settings.keyboard.saved":"快捷键已保存。","settings.keyboard.resetOne":"快捷键已重置为默认。","settings.keyboard.resetAllDone":"快捷键已全部重置为默认。","settings.workspace.serverApplied":"工作区设置已应用。服务器端限制立即影响新的工作区请求。","settings.workspace.browserApplied":"浏览器工作区设置已在此标签页立即应用。","settings.workspace.access":"访问","settings.workspace.enableTerminal":"启用 Web 终端","settings.workspace.allowVnc":"允许直接 VNC 目标","settings.workspace.accessHint":"终端访问立即更新。直接 VNC 目标策略适用于新的 VNC 请求。","settings.workspace.guardrails":"服务器扫描防护","settings.workspace.maxDepth":"最大树深度","settings.workspace.maxDepthAria":"工作区树最大深度","settings.workspace.maxDepthHintPre":"限制所有","settings.workspace.maxDepthHintPost":"请求","settings.workspace.maxEntries":"每次扫描最大条目数","settings.workspace.maxEntriesAria":"工作区树最大条目数","settings.workspace.maxEntriesHint":"更早截断超大的树遍历","settings.workspace.thisBrowser":"此浏览器","settings.workspace.refreshInterval":"刷新间隔（秒）","settings.workspace.refreshIntervalAria":"工作区刷新间隔","settings.workspace.folderDepth":"文件夹预览扫描深度","settings.workspace.folderDepthAria":"文件夹预览扫描深度","settings.workspace.folderDepthHintPre":"设为","settings.workspace.folderDepthHintPost":"以禁用文件夹大小预览扫描","settings.workspace.footerHint":"根目录和文件夹展开的树加载保持较浅；文件夹大小预览是 UI 中最深的工作区扫描。","settings.models.thinkingLevel":"思考级别","settings.models.noThinking":"当前模型不支持思考。","settings.models.thinkingLevelLabel":"思考级别：","settings.models.loading":"正在加载模型…","settings.models.summary":"在狭窄面板中，模型和提供商名称可能换行以避免裁切。","settings.models.scopedOnly":"仅限范围内模型","settings.models.scopedCheckboxPre":"使用 Pi 的","settings.models.scopedCheckboxPost":"作为 Piclaw 模型列表","settings.models.scopedHintPre":"筛选此选择器和","settings.models.scopedHintPost":"工具。TUI 模型选择保持不变。","settings.models.colModel":"模型","settings.models.colProvider":"提供商","settings.models.colContext":"上下文","settings.models.colReasoning":"推理","settings.models.noMatch":"没有匹配 “{filter}” 的模型","settings.tools.unavailable":"工具数据不可用。","settings.tools.search":"搜索","settings.tools.matchMode":"匹配模式","settings.tools.orMode":"任意关键词（OR）— 结果至少匹配一个搜索词","settings.tools.andMode":"所有关键词（AND）— 结果必须匹配每个搜索词","settings.tools.colEnabled":"已启用","settings.tools.colTool":"工具","settings.tools.colCompact":"压缩","settings.tools.colKind":"类型","settings.tools.colSummary":"摘要","settings.tools.colSource":"来源","settings.tools.disableCompaction":"为此工具禁用工具结果压缩","settings.tools.enableCompaction":"为此工具启用工具结果压缩","settings.tools.noMatch":"没有匹配 “{filter}” 的工具","settings.tools.footer":"工具激活由代理运行时管理。组复选框可折叠/展开；“压缩”列控制工具结果压缩资格。","settings.environment.heading":"环境","settings.environment.introPre":"仅显示非 keychain 环境变量。覆盖项存储在扩展 KV 中并应用于","settings.environment.introPost":"，因此后续工具调用会继承它们。","settings.environment.refresh":"刷新","settings.environment.addOverride":"添加覆盖","settings.environment.valuePlaceholder":"值","settings.environment.save":"保存","settings.environment.countLine":"{count} 个变量可见 • {overrides} 个覆盖生效 • {keychain} 个 keychain 注入变量已隐藏","settings.environment.overridden":"在 KV 中覆盖","settings.environment.inherited":"继承自进程环境","settings.environment.kindOverride":"覆盖","settings.environment.kindProcess":"进程","settings.environment.clear":"清除","settings.environment.noMatch":"没有匹配 “{filter}” 的环境变量。","settings.environment.refreshedToast":"环境已刷新。","settings.environment.savedToast":"已保存 {name} 的环境覆盖。","settings.environment.clearedToast":"已清除 {name} 的环境覆盖。","settings.quickActions.loading":"加载中…","settings.quickActions.heading":"时间线快捷操作","settings.quickActions.intro":"选择哪些操作出现在时间线预输入中。代理始终优先固定，然后是工作区命令，再是斜杠命令。","settings.quickActions.enableAll":"全部启用","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存并应用","settings.quickActions.workspaceCommands":"工作区命令","settings.quickActions.noWorkspaceMatch":"没有匹配此筛选的工作区命令。","settings.quickActions.slashCommands":"斜杠命令","settings.quickActions.slashFallback":"斜杠命令","settings.quickActions.noSlashMatch":"没有匹配此筛选的斜杠命令。","settings.quickActions.savingToast":"正在保存快捷操作…","settings.quickActions.savedToast":"快捷操作已保存。","settings.providers.authApiKey":"API 密钥","settings.providers.authConfigured":"已配置","settings.providers.heading":"提供商","settings.providers.tagCustom":"自定义","settings.providers.logout":"注销","settings.providers.reconfigure":"重新配置","settings.providers.setUp":"设置","settings.providers.setupHint":"登录流程在浏览器中打开。在狭窄面板中，设置表单会垂直堆叠以避免裁切。","settings.providers.starting":"启动中…","settings.providers.signInOAuth":"使用 OAuth 登录","settings.providers.apiKeyLabel":"API 密钥","settings.providers.apiKeyPlaceholder":"输入 API 密钥","settings.providers.save":"保存","settings.providers.configuring":"配置中…","settings.providers.saveConfig":"保存配置","settings.providers.apiKeyEmpty":"API 密钥不能为空。","settings.providers.configuringToast":"正在配置 {provider}…","settings.providers.configured":"{provider} 已配置。","settings.providers.startingOAuth":"正在为 {provider} 启动 OAuth…","settings.providers.oauthOpened":"OAuth 窗口已打开。完成登录流程，然后关闭此消息。","settings.providers.oauthStarted":"已为 {provider} 启动 OAuth 流程。请查看聊天。","settings.providers.loggingOut":"正在注销 {provider}…","settings.providers.loggedOut":"已注销 {provider}。可能需要重启。","settings.general.identity":"身份","settings.general.userLabel":"用户","settings.general.yourName":"你的名字","settings.general.agentLabel":"代理","settings.general.agentName":"代理名称","settings.general.notifications":"通知","settings.general.browserNotifications":"浏览器通知","settings.general.notifSecureHint":"使用输入栏中的 \uD83D\uDD14 铃铛按钮来启用/禁用通知。Web Push 需要 HTTPS 或 localhost。","settings.general.notifInsecureHint":"⚠ 不可用 — 需要安全上下文（HTTPS 或 localhost）。通过 SSH 隐道或带 TLS 的反向代理访问以启用。","settings.general.display":"显示","settings.general.systemMeters":"系统仪表","settings.general.systemMetersHint":"状态栏中的 CPU/内存/网络仪表。仅限此浏览器。","settings.general.instanceConfig":"实例配置","settings.general.composeUpload":"撰写上传（MB）","settings.general.composeUploadAria":"撰写上传限制","settings.general.composeUploadHint":"聊天/媒体附件","settings.general.workspaceUpload":"工作区上传（MB）","settings.general.workspaceUploadAria":"工作区上传限制","settings.general.workspaceUploadHint":"默认为 256 MB；分块上传最多允许 1 GB","settings.general.authentication":"身份验证","settings.general.widgetToken":"小部件 bearer 令牌","settings.general.token":"令牌","settings.general.hideToken":"隐藏令牌","settings.general.revealToken":"显示令牌","settings.general.copyToken":"复制令牌","settings.general.copied":"已复制","settings.general.regenerating":"正在重新生成…","settings.general.regenerate":"重新生成","settings.general.tokenHintPre":"只读令牌，用于","settings.general.tokenHintMid":"和","settings.general.tokenHintPost":"。用作","settings.general.tokenHintEnd":"。","settings.general.copyFailed":"无法复制小部件令牌。请选择令牌字段并手动复制。","settings.general.regenConfirm":"重新生成小部件令牌？使用旧令牌的现有 macOS 小部件将停止更新。","settings.general.totpTitle":"TOTP 设置二维码","settings.general.totpConfiguredHint":"当前 Web 登录验证器密钥。扫描此二维码以添加另一个验证器设备。","settings.general.totpUnconfiguredHint":"此实例尚未配置 TOTP，因此没有可用的设置二维码。","settings.general.issuer":"颁发者","settings.general.label":"标签","settings.general.secret":"密钥","settings.general.avatarUpload":"点击上传","settings.developer.heading":"开发者","settings.developer.devMode":"开发者模式","settings.developer.localHint":"仅限此浏览器。开发者模式开关和插件目录覆盖存储在本地浏览器存储中。","settings.developer.addonSources":"插件来源","settings.developer.catalogUrl":"目录 URL","settings.developer.catalogHint":"主插件目录 URL。留空以使用默认值","settings.developer.additionalCatalogs":"其他目录 URL","settings.developer.additionalHint":"在主/默认目录之外额外获取。每行一个 URL。","settings.developer.repoUrl":"仓库 URL","settings.developer.repoHintPre":"覆盖用于","settings.developer.repoHintPost":"安装的 git 仓库。留空以使用默认值。","settings.developer.debug":"调试","settings.developer.logSse":"记录 SSE 事件","settings.developer.logToolCalls":"记录工具调用","settings.developer.debugHint":"调试标志在下次页面重新加载时生效。","settings.addons.installing":"正在安装 {slug}…","settings.addons.removing":"正在移除 {slug}…","settings.addons.installedToast":"插件已安装。","settings.addons.removedToast":"插件已移除。","settings.addons.restarting":"正在重启 piclaw…","settings.addons.restartComplete":"重启完成 — 插件已刷新。","settings.addons.restartTimeout":"后端未能及时返回。请手动重新加载页面。","settings.addons.fetching":"正在获取插件…","settings.addons.loadFailed":"无法加载插件。","settings.addons.catalogFromPre":"目录来自","settings.addons.catalogMerged":"已合并 {count} 个目录来源。","settings.addons.installNote":"通过 Bun 优先安装包；安装/卸载后需要重启。","settings.addons.failedFetchSingular":"获取 {count} 个目录来源失败：","settings.addons.failedFetchPlural":"获取 {count} 个目录来源失败：","settings.addons.activeSources":"活动目录来源（{count}）","settings.addons.windowsWarning":"原生 Windows 插件安装风险更高：Bun 包安装、符号链接清理、锁定文件和重启时机都可能不如 Linux/WSL 可预测。如果可能，请优先使用 WSL 或容器。","settings.addons.typeExtSkill":"扩展 + 技能","settings.addons.typeSkill":"技能","settings.addons.typeExt":"扩展","settings.addons.update":"更新","settings.addons.remove":"移除","settings.addons.install":"安装","settings.addons.noMatch":"没有匹配 “{filter}” 的插件","settings.addons.restartNotice":"扩展更改已安装，但在 piclaw 重启之前处于非活动状态。","settings.addons.restartNow":"立即重启","menu.title":"菜单","menu.showWorkspace":"显示工作区","menu.hideWorkspace":"隐藏工作区","menu.openExplorer":"打开资源管理器","menu.chatOnly":"仅聊天模式","menu.exitChatOnly":"退出仅聊天模式","menu.openTerminal":"在标签页中打开终端","menu.openVnc":"在标签页中打开 VNC","menu.newFile":"新建文件","menu.openRecent":"打开最近文件","menu.refreshTree":"刷新目录树","menu.reindex":"重建工作区索引","menu.showHidden":"显示隐藏文件","menu.hideHidden":"隐藏隐藏文件","menu.scale":"缩放","menu.settings":"设置"},mu={"compose.placeholder":"メッセージ（Enterで送信、Shift+Enterで改行）...","compose.send":"送信","compose.stop":"停止","compose.searchPlaceholder":"検索（Enterで実行）...","compose.clearAll":"すべてクリア","compose.clearAllTitle":"すべての添付と参照をクリア","compose.scope":"範囲","compose.searchScope":"検索範囲","compose.scopeCurrent":"現在","compose.scopeBranchFamily":"ブランチファミリー","compose.scopeAll":"すべてのチャット","compose.filterImages":"画像","compose.filterAttachments":"添付","compose.search":"検索","compose.closeSearch":"検索を閉じる","compose.shareLocation":"位置を共有","compose.attachFile":"ファイルを添付","compose.queueControls":"キュー済みフォローアップの操作","compose.moveUp":"上に移動","compose.moveUpQueue":"キュー内で上に移動","compose.moveDown":"下に移動","compose.moveDownQueue":"キュー内で下に移動","compose.editInCompose":"入力欄で編集","compose.returnToEditor":"キュー済みメッセージを入力欄に戻す","compose.injectSteer":"キュー済みフォローアップをステアとして挿入","compose.steer":"ステア","compose.cancelQueued":"キュー済みメッセージをキャンセル","compose.resizeInput":"メッセージ入力欄のサイズ変更","compose.resizeInputHint":"ドラッグしてメッセージ入力欄のサイズを変更","compose.modelPicker":"モデルピッカー","compose.sessionsAndAgents":"セッションとエージェント","compose.openModelPicker":"モデルピッカーを開く","compose.newBranchTitle":"このチャットから新しいブランチを作成","compose.newRootTitle":"web:ops のようなクリーンなルートセッションを作成","compose.renameSessionTitle":"現在のセッションの名前を変更","compose.pruneSessionTitle":"現在のエージェント/セッションブランチを削除（プルーン）","compose.filterImagesTitle":"画像付きメッセージのみ表示","compose.filterAttachmentsTitle":"添付付きメッセージのみ表示","compose.selectModel":"モデルを選択","compose.loadingModels":"モデルを読み込み中…","compose.noModels":"利用可能なモデルがありません。","compose.nextModel":"次のモデル","compose.manageSessions":"セッションとエージェントを管理","compose.noSessions":"他のセッションはまだありません。","compose.newBranch":"新しいブランチ","compose.newRoot":"新しいルート…","compose.mergeCurrent":"現在を親にマージ","compose.renameCurrent":"現在の名前を変更…","compose.deleteCurrent":"現在を削除…","compose.mergeInto":"このブランチを {target} にマージ","compose.mergeBlocked":"このブランチはアクティブな間または子がある間はマージできません","workspace.title":"ワークスペース","workspace.newFile":"新規ファイル","workspace.refresh":"更新","workspace.actions":"ワークスペース操作","workspace.uploadFiles":"ファイルをアップロード","workspace.reindexing":"ワークスペースを再インデックス中…","workspace.deleteFile":"ファイルを削除","workspace.download":"ダウンロード","workspace.uploadToFolder":"このフォルダにファイルをアップロード","workspace.addFolderHint":"フォルダのヒントを入力欄に追加","workspace.downloadZip":"フォルダをzipでダウンロード","workspace.openInTab":"タブで開く","workspace.openInEditor":"エディタで開く","workspace.renameSelected":"選択項目の名前を変更","workspace.downloadSelectedFile":"選択したファイルをダウンロード","workspace.downloadSelectedFolder":"選択したフォルダをダウンロード（zip）","workspace.deleteSelectedFile":"選択したファイルを削除","shell.settings":"設定","shell.newChat":"新規チャット","shell.connecting":"接続中…","shell.connected":"接続済み","language.label":"言語","settings.title":"設定","settings.close":"閉じる（Esc）","settings.filter":"フィルター…","settings.loading":"設定を読み込み中…","settings.section.general":"一般","settings.section.sessions":"セッション","settings.section.recordings":"録画","settings.section.compaction":"圧縮","settings.section.keyboard":"キーボード","settings.section.workspace":"ワークスペース","settings.section.environment":"環境","settings.section.providers":"プロバイダー","settings.section.models":"モデル","settings.section.theme":"外観","settings.section.scheduled-tasks":"スケジュールタスク","settings.section.quick-actions":"クイックアクション","settings.section.keychain":"キーチェーン","settings.section.tools":"ツール","settings.section.addons":"アドオン","settings.placeholder.recordings":"録画をフィルター…","settings.placeholder.keyboard":"ショートカットをフィルター…","settings.placeholder.environment":"環境をフィルター…","settings.placeholder.models":"モデルをフィルター…","settings.placeholder.scheduled-tasks":"スケジュールタスクをフィルター…","settings.placeholder.quick-actions":"クイックアクションをフィルター…","settings.placeholder.keychain":"エントリをフィルター…","settings.placeholder.tools":"ツールをフィルター…","settings.placeholder.addons":"アドオンをフィルター…","preview.close":"閉じる","preview.loading":"プレビューを読み込み中…","preview.files":"ファイル","preview.folders":"フォルダ","preview.compressed":"圧縮後","preview.uncompressed":"非圧縮","preview.name":"名前","preview.type":"種類","preview.method":"方式","preview.size":"サイズ","post.deleteMessage":"メッセージを削除","post.tooLarge":"メッセージが大きすぎて表示できません。","post.previewTruncated":"プレビューは切り詰められました。","post.submitted":"送信済み","post.discard":"破棄","post.save":"保存","post.cancel":"キャンセル","post.addNote":"メモを追加","post.addNotePlaceholder":"メモを追加…","tab.close":"閉じる","tab.closeOthers":"他を閉じる","tab.closeAll":"すべて閉じる","tab.reattach":"再アタッチ","tab.openInWindow":"ウィンドウで開く","tab.openInNewTab":"新しいタブで開く","tab.pinned":"ピン留め済み","tab.detached":"分離済み","tab.openSeparateWindow":"別ウィンドウで開く","status.trackedVariables":"追跡中の変数","status.attachToSession":"セッションにアタッチ","status.files":"ファイル","status.proposedDiff":"提案された差分","status.copyTmux":"tmuxコマンドをコピー","status.experimentDuration":"実験の経過時間","status.sinceLastActivity":"最後のアクティビティから","annotator.title":"画像に注釈","annotator.typeLabel":"ラベルを入力…","annotator.undo":"元に戻す","annotator.resetZoom":"ズームをリセット","tree.filter":"フィルター…","tree.sessionTree":"セッションツリー","btw.label":"BTW サイド会話","btw.close":"BTW を閉じる","btw.thinking":"思考中","mdpreview.close":"プレビューを閉じる","mdpreview.unavailable":"プレビューを利用できません","widget.close":"ウィジェットを閉じる","oobe.gettingStarted":"はじめに","oobe.needsSetupTitle":"インスタンスのセットアップが必要","oobe.configuredTitle":"インスタンスは設定済み","oobe.needsSetupBody":"このインスタンスはまだ設定されていません。設定を開き、AIプロバイダー/モデルを設定してリクエストの送信を開始してください。","oobe.configuredBody":"このインスタンスは設定済みのようです。設定でプロバイダーとモデルの設定を確認または更新してください。","oobe.openSettings":"設定を開く","oobe.dismiss":"閉じる","oobe.done":"完了","palette.placeholder":"入力してエージェント、ワークスペース操作、またはスラッシュコマンドにジャンプ…","palette.hideWorkspace":"ワークスペースを非表示","palette.showWorkspace":"ワークスペースを表示","palette.hideWorkspaceDesc":"ワークスペースサイドバーを非表示にします。","palette.showWorkspaceDesc":"ワークスペースサイドバーを表示します。","palette.exitChatOnly":"チャットのみモードを終了","palette.chatOnly":"チャットのみモード","palette.exitChatOnlyDesc":"分割ワークスペースレイアウトに戻ります。","palette.chatOnlyDesc":"チャットのみのレイアウトに切り替えます。","palette.groupAgents":"エージェント","palette.groupWorkspace":"ワークスペース","palette.groupSlash":"スラッシュコマンド","palette.hintMove":"移動","palette.hintSelect":"選択","palette.hintPopOut":"ポップアウト","palette.hintClose":"閉じる","settings.appliedNotice":"設定を適用しました。変更は次のターンから有効になります。","settings.sessions.lifecycle":"セッションのライフサイクル","settings.sessions.autoRotate":"セッションを自動ローテーション","settings.sessions.maxSize":"最大セッションサイズ（MB）","settings.sessions.maxSizeAria":"最大セッションサイズ","settings.sessions.agentBehaviour":"エージェントの動作","settings.sessions.toolBudget":"ツール使用予算","settings.sessions.toolBudgetAria":"ツール使用予算","settings.sessions.toolBudgetHint":"1ターンあたりの最大ツール呼び出しメッセージ数","settings.sessions.isolation":"セッションの分離","settings.sessions.isolationNone":"なし — セッション間で完全に可視","settings.sessions.isolationSummary":"概要 — ツールは可視、引数は非表示","settings.sessions.isolationFull":"完全 — セッション同士は互いに見えない","settings.editor.heading":"エディター","settings.editor.vimMode":"Vim モード","settings.editor.showWhitespace":"空白文字を表示","settings.editor.livePreview":"Markdown ライブプレビュー","settings.editor.fontSize":"フォントサイズ（px）","settings.editor.fontSizeAria":"エディターのフォントサイズ","settings.editor.fontFamily":"フォントファミリー","settings.editor.fontFamilyPlaceholder":"monospace（デフォルト）","settings.editor.localOnlyHint":"このブラウザーのみ。エディターの変更はローカルブラウザーストレージに保存され、次にファイルタブを開くか再読み込みしたときに有効になります。","settings.appearance.syncing":"外観を同期中…","settings.appearance.default":"デフォルト","settings.appearance.autoLightDark":"自動（ライト/ダーク）","settings.appearance.tint":"色調：","settings.appearance.clearTint":"色調をクリア","settings.appearance.none":"なし","settings.keyboard.heading":"キーボード","settings.keyboard.hint1":"アプリ全体のショートカットをカンマ区切りのバインディングとしてカスタマイズします。変更はすぐに反映されます。","settings.keyboard.hint1b":"は閉じる/中止用に予約されており、再割り当てできません。","settings.keyboard.hint2mid":"と入力","settings.keyboard.hint2end":"を入力欄の外で押すとこのペインが開きます。","settings.keyboard.resetAll":"すべてデフォルトにリセット","settings.keyboard.defaultColon":"デフォルト：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"デフォルト","settings.keyboard.noMatch":"このフィルターに一致するショートカットはありません。","settings.keyboard.invalidShortcut":"無効なショートカット：{token}。Escape は予約されており、再割り当てできません。","settings.keyboard.saved":"キーボードショートカットを保存しました。","settings.keyboard.resetOne":"キーボードショートカットをデフォルトにリセットしました。","settings.keyboard.resetAllDone":"キーボードショートカットをすべてデフォルトにリセットしました。","settings.workspace.serverApplied":"ワークスペース設定を適用しました。サーバー側の制限は新しいワークスペースリクエストに直ちに反映されます。","settings.workspace.browserApplied":"ブラウザーのワークスペース設定はこのタブで直ちに適用されました。","settings.workspace.access":"アクセス","settings.workspace.enableTerminal":"Web ターミナルを有効化","settings.workspace.allowVnc":"直接 VNC ターゲットを許可","settings.workspace.accessHint":"ターミナルアクセスは直ちに更新されます。直接 VNC ターゲットポリシーは新しい VNC リクエストに適用されます。","settings.workspace.guardrails":"サーバースキャンのガードレール","settings.workspace.maxDepth":"最大ツリー深度","settings.workspace.maxDepthAria":"ワークスペースツリーの最大深度","settings.workspace.maxDepthHintPre":"すべての","settings.workspace.maxDepthHintPost":"リクエストを制限します","settings.workspace.maxEntries":"スキャンあたりの最大エントリ数","settings.workspace.maxEntriesAria":"ワークスペースツリーの最大エントリ数","settings.workspace.maxEntriesHint":"大きすぎるツリー走査を早めに打ち切ります","settings.workspace.thisBrowser":"このブラウザー","settings.workspace.refreshInterval":"更新間隔（秒）","settings.workspace.refreshIntervalAria":"ワークスペース更新間隔","settings.workspace.folderDepth":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthAria":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthHintPre":"","settings.workspace.folderDepthHintPost":"に設定するとフォルダサイズのプレビュースキャンを無効化します","settings.workspace.footerHint":"ルートおよびフォルダ展開のツリー読み込みは浅いままです。フォルダサイズのプレビューは UI で最も深いワークスペーススキャンです。","settings.models.thinkingLevel":"思考レベル","settings.models.noThinking":"現在のモデルは思考をサポートしていません。","settings.models.thinkingLevelLabel":"思考レベル：","settings.models.loading":"モデルを読み込み中…","settings.models.summary":"狭いペインでは、クリッピングを避けるためにモデル名とプロバイダー名が折り返される場合があります。","settings.models.scopedOnly":"スコープ付きモデルのみ","settings.models.scopedCheckboxPre":"Piclaw のモデル一覧に Pi の","settings.models.scopedCheckboxPost":"を使用","settings.models.scopedHintPre":"このピッカーと","settings.models.scopedHintPost":"ツールをフィルタリングします。TUI のモデル選択は変更されません。","settings.models.colModel":"モデル","settings.models.colProvider":"プロバイダー","settings.models.colContext":"コンテキスト","settings.models.colReasoning":"推論","settings.models.noMatch":"「{filter}」に一致するモデルはありません","settings.tools.unavailable":"ツールデータを利用できません。","settings.tools.search":"検索","settings.tools.matchMode":"マッチモード","settings.tools.orMode":"いずれかのキーワード（OR）— 少なくとも1つの検索語に一致","settings.tools.andMode":"すべてのキーワード（AND）— すべての検索語に一致","settings.tools.colEnabled":"有効","settings.tools.colTool":"ツール","settings.tools.colCompact":"コンパクト","settings.tools.colKind":"種類","settings.tools.colSummary":"概要","settings.tools.colSource":"ソース","settings.tools.disableCompaction":"このツールのツール結果コンパクションを無効化","settings.tools.enableCompaction":"このツールのツール結果コンパクションを有効化","settings.tools.noMatch":"「{filter}」に一致するツールはありません","settings.tools.footer":"ツールのアクティベーションはエージェントランタイムが管理します。グループのチェックボックスで折りたたみ/展開でき、「コンパクト」列はツール結果コンパクションの対象可否を制御します。","settings.environment.heading":"環境","settings.environment.introPre":"キーチェーン以外の環境変数のみを表示しています。オーバーライドは拡張機能の KV に保存され、","settings.environment.introPost":"に適用されるため、以降のツール呼び出しに継承されます。","settings.environment.refresh":"更新","settings.environment.addOverride":"オーバーライドを追加","settings.environment.valuePlaceholder":"値","settings.environment.save":"保存","settings.environment.countLine":"{count} 個の変数を表示 • {overrides} 個のオーバーライドが有効 • {keychain} 個のキーチェーン注入変数を非表示","settings.environment.overridden":"KV でオーバーライド","settings.environment.inherited":"プロセス環境から継承","settings.environment.kindOverride":"オーバーライド","settings.environment.kindProcess":"プロセス","settings.environment.clear":"クリア","settings.environment.noMatch":"「{filter}」に一致する環境変数はありません。","settings.environment.refreshedToast":"環境を更新しました。","settings.environment.savedToast":"{name} の環境オーバーライドを保存しました。","settings.environment.clearedToast":"{name} の環境オーバーライドをクリアしました。","settings.quickActions.loading":"読み込み中…","settings.quickActions.heading":"タイムラインクイックアクション","settings.quickActions.intro":"タイムラインのタイプアヘッドに表示するアクションを選択します。エージェントは常に最初に固定され、次にワークスペースコマンド、その次にスラッシュコマンドが表示されます。","settings.quickActions.enableAll":"すべて有効化","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存して適用","settings.quickActions.workspaceCommands":"ワークスペースコマンド","settings.quickActions.noWorkspaceMatch":"このフィルターに一致するワークスペースコマンドはありません。","settings.quickActions.slashCommands":"スラッシュコマンド","settings.quickActions.slashFallback":"スラッシュコマンド","settings.quickActions.noSlashMatch":"このフィルターに一致するスラッシュコマンドはありません。","settings.quickActions.savingToast":"クイックアクションを保存中…","settings.quickActions.savedToast":"クイックアクションを保存しました。","settings.providers.authApiKey":"API キー","settings.providers.authConfigured":"設定済み","settings.providers.heading":"プロバイダー","settings.providers.tagCustom":"カスタム","settings.providers.logout":"ログアウト","settings.providers.reconfigure":"再設定","settings.providers.setUp":"セットアップ","settings.providers.setupHint":"サインインフローはブラウザーで開きます。狭いペインではセットアップフォームが縦に積み重なってクリッピングを防ぎます。","settings.providers.starting":"開始中…","settings.providers.signInOAuth":"OAuth でサインイン","settings.providers.apiKeyLabel":"API キー","settings.providers.apiKeyPlaceholder":"API キーを入力","settings.providers.save":"保存","settings.providers.configuring":"設定中…","settings.providers.saveConfig":"設定を保存","settings.providers.apiKeyEmpty":"API キーを空にすることはできません。","settings.providers.configuringToast":"{provider} を設定中…","settings.providers.configured":"{provider} を設定しました。","settings.providers.startingOAuth":"{provider} の OAuth を開始中…","settings.providers.oauthOpened":"OAuth ウィンドウを開きました。サインインフローを完了してから、このメッセージを閉じてください。","settings.providers.oauthStarted":"{provider} の OAuth フローを開始しました。チャットを確認してください。","settings.providers.loggingOut":"{provider} をログアウト中…","settings.providers.loggedOut":"{provider} をログアウトしました。再起動が必要な場合があります。","settings.general.identity":"アイデンティティ","settings.general.userLabel":"ユーザー","settings.general.yourName":"あなたの名前","settings.general.agentLabel":"エージェント","settings.general.agentName":"エージェント名","settings.general.notifications":"通知","settings.general.browserNotifications":"ブラウザ通知","settings.general.notifSecureHint":"入力バーの \uD83D\uDD14 ベルボタンで通知を有効/無効にします。Web Push には HTTPS または localhost が必要です。","settings.general.notifInsecureHint":"⚠ 利用不可 — セキュアコンテキスト（HTTPS または localhost）が必要です。SSH トンネルまたは TLS 付きリバースプロキシ経由でアクセスして有効化してください。","settings.general.display":"表示","settings.general.systemMeters":"システムメーター","settings.general.systemMetersHint":"ステータスバーの CPU/メモリ/ネットワークメーター。このブラウザのみ。","settings.general.instanceConfig":"インスタンス設定","settings.general.composeUpload":"作成アップロード（MB）","settings.general.composeUploadAria":"作成アップロード上限","settings.general.composeUploadHint":"チャット/メディア添付","settings.general.workspaceUpload":"ワークスペースアップロード（MB）","settings.general.workspaceUploadAria":"ワークスペースアップロード上限","settings.general.workspaceUploadHint":"デフォルトは 256 MB。チャンクアップロードは最大 1 GB まで許可","settings.general.authentication":"認証","settings.general.widgetToken":"ウィジェット bearer トークン","settings.general.token":"トークン","settings.general.hideToken":"トークンを隠す","settings.general.revealToken":"トークンを表示","settings.general.copyToken":"トークンをコピー","settings.general.copied":"コピーしました","settings.general.regenerating":"再生成中…","settings.general.regenerate":"再生成","settings.general.tokenHintPre":"次の読み取り専用トークン：","settings.general.tokenHintMid":"および","settings.general.tokenHintPost":"。次として使用：","settings.general.tokenHintEnd":"。","settings.general.copyFailed":"ウィジェットトークンをコピーできませんでした。トークンフィールドを選択して手動でコピーしてください。","settings.general.regenConfirm":"ウィジェットトークンを再生成しますか？古いトークンを使用している既存の macOS ウィジェットは更新されなくなります。","settings.general.totpTitle":"TOTP セットアップ QR","settings.general.totpConfiguredHint":"現在の Web ログイン認証システムのシークレット。この QR をスキャンして別の認証デバイスを追加します。","settings.general.totpUnconfiguredHint":"このインスタンスにはまだ TOTP が設定されていないため、セットアップ QR は利用できません。","settings.general.issuer":"発行者","settings.general.label":"ラベル","settings.general.secret":"シークレット","settings.general.avatarUpload":"クリックしてアップロード","settings.developer.heading":"開発者","settings.developer.devMode":"開発者モード","settings.developer.localHint":"このブラウザのみ。開発者モードの切り替えとアドオンカタログのオーバーライドはローカルブラウザストレージに保存されます。","settings.developer.addonSources":"アドオンソース","settings.developer.catalogUrl":"カタログ URL","settings.developer.catalogHint":"プライマリアドオンカタログ URL。空のままにするとデフォルトを使用します","settings.developer.additionalCatalogs":"追加カタログ URL","settings.developer.additionalHint":"プライマリ/デフォルトカタログに加えて取得されます。1 行に 1 つの URL。","settings.developer.repoUrl":"リポジトリ URL","settings.developer.repoHintPre":"git リポジトリを上書き（","settings.developer.repoHintPost":"インストール用）。空のままでデフォルト。","settings.developer.debug":"デバッグ","settings.developer.logSse":"SSE イベントをログ記録","settings.developer.logToolCalls":"ツール呼び出しをログ記録","settings.developer.debugHint":"デバッグフラグは次回のページ再読み込み時に有効になります。","settings.addons.installing":"{slug} をインストール中…","settings.addons.removing":"{slug} を削除中…","settings.addons.installedToast":"アドオンをインストールしました。","settings.addons.removedToast":"アドオンを削除しました。","settings.addons.restarting":"piclaw を再起動中…","settings.addons.restartComplete":"再起動完了 — アドオンを更新しました。","settings.addons.restartTimeout":"バックエンドが時間内に応答しませんでした。ページを手動で再読み込みしてください。","settings.addons.fetching":"アドオンを取得中…","settings.addons.loadFailed":"アドオンを読み込めませんでした。","settings.addons.catalogFromPre":"カタログの取得元：","settings.addons.catalogMerged":"{count} 個のカタログソースをマージしました。","settings.addons.installNote":"Bun によるパッケージ優先インストール。インストール/アンインストール後に再起動が必要です。","settings.addons.failedFetchSingular":"{count} 個のカタログソースの取得に失敗しました：","settings.addons.failedFetchPlural":"{count} 個のカタログソースの取得に失敗しました：","settings.addons.activeSources":"アクティブなカタログソース（{count}）","settings.addons.windowsWarning":"ネイティブ Windows のアドオンインストールはリスクが高くなります：Bun パッケージのインストール、シンボリックリンクのクリーンアップ、ロックされたファイル、再起動のタイミングは、Linux/WSL よりも予測しにくい場合があります。可能であれば WSL またはコンテナを優先してください。","settings.addons.typeExtSkill":"拡張機能 + スキル","settings.addons.typeSkill":"スキル","settings.addons.typeExt":"拡張機能","settings.addons.update":"更新","settings.addons.remove":"削除","settings.addons.install":"インストール","settings.addons.noMatch":"「{filter}」に一致するアドオンはありません","settings.addons.restartNotice":"拡張機能の変更はインストールされましたが、piclaw が再起動するまで非アクティブです。","settings.addons.restartNow":"今すぐ再起動","menu.title":"メニュー","menu.showWorkspace":"ワークスペースを表示","menu.hideWorkspace":"ワークスペースを非表示","menu.openExplorer":"エクスプローラーを開く","menu.chatOnly":"チャットのみモード","menu.exitChatOnly":"チャットのみモードを終了","menu.openTerminal":"ターミナルをタブで開く","menu.openVnc":"VNC をタブで開く","menu.newFile":"新規ファイル","menu.openRecent":"最近のファイルを開く","menu.refreshTree":"ツリーを更新","menu.reindex":"ワークスペースを再インデックス","menu.showHidden":"隠しファイルを表示","menu.hideHidden":"隠しファイルを非表示","menu.scale":"拡大縮小","menu.settings":"設定"},au={en:D_,"zh-CN":eu,ja:mu},Tn=Ln});function Y_({children:n,className:i=""}){let[r,_]=w(null);return q(()=>{if(typeof document>"u")return;let c=document.createElement("div");return c.className=i||"",document.body.appendChild(c),_(c),()=>{try{In(null,c)}finally{c.remove()}}},[]),q(()=>{if(!r)return;r.className=i||"";return},[i,r]),Ui(()=>{if(!r)return;In(n,r);return},[n,r]),null}var L_=O(()=>{e()});function xr(n,i){let r=String(n.label||"").localeCompare(String(i.label||""),void 0,{sensitivity:"base"});if(r!==0)return r;return String(n.id||"").localeCompare(String(i.id||""),void 0,{sensitivity:"base"})}function Cn(n){let i=Gn.findIndex((r)=>r.id===n.id);if(i>=0)Gn[i]=n;else Gn.push(n);Gn.sort(xr)}function Gg(n){let i=Gn.findIndex((r)=>r.id===n);if(i>=0)Gn.splice(i,1)}function C_(){return[...Gn]}function Vg(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var Gn;var fi=O(()=>{Gn=[]});function Gi(n){let i=typeof n==="string"?n.trim():"";return i?i:null}function J_(n={}){if(typeof window>"u")return;let i=Gi(n.section);try{if(window.__piclawSettingsOpenRequested=!0,i)window.__piclawSettingsRequestedSection=i;else delete window.__piclawSettingsRequestedSection}catch(r){console.debug("[settings-dialog-events] failed to record open request flags",r)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:i?{section:i}:void 0}))}function br(){if(typeof window>"u")return null;return Gi(window.__piclawSettingsRequestedSection)}function O_(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),i=br();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(r){console.debug("[settings-dialog-events] failed to clear open request flags",r)}return{open:n,section:i}}function S_(n=typeof window<"u"?window:null){return n||null}function Vi(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function $i(n,i){return`${n}:${i}`}function d_(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function e_(n,i){if(n.length<=i)return;n.splice(0,n.length-i)}function Vn(n){if(!n||typeof n!=="object")return null;return{...n}}function Qn(n){if(!n)return null;return Nn.find((i)=>i.id===n)||null}function hr(n,i){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${i}`)}catch(r){console.debug("[app-perf] Ignoring performance.mark failure.",r,{traceId:n,phase:i})}}function m_(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let i=Qn(n);if(!i)return;for(let r of i.phases)performance.clearMarks(`piclaw:${n}:${r.phase}`)}catch(i){console.debug("[app-perf] Ignoring performance.clearMarks failure.",i,{traceId:n})}}function E_(n,i,r){let _=Xn.get($i(n,i));if(_&&Qn(_)?.status==="active")gi(_,"cancelled","superseded",{replacementType:n,replacementChatJid:i});let c=d_(n),u={id:c,type:n,chatJid:i,startedAt:Vi(),detail:Vn(r),phases:[],status:"active"};return Nn.push(u),e_(Nn,100),Xn.set($i(n,i),c),hr(c,"start"),c}function gi(n,i,r,_,c){let u=Qn(n);if(!u||u.status!=="active")return;if(r)u.phases.push({phase:r,at:Vi(),detail:Vn(_)}),hr(u.id,r);if(u.status=i,u.completedAt=Vi(),u.durationMs=u.completedAt-u.startedAt,c!==void 0)u.error=c instanceof Error?c.message:String(c);let f=$i(u.type,u.chatJid);if(Xn.get(f)===u.id)Xn.delete(f);m_(u.id)}function gf(n=S_()){let i=n?.__PICLAW_PERF__;if(i)return i;if(n)n.__PICLAW_PERF__=Ni;return Ni}function Jn(n=S_()){return gf(n)}function Qg(n,i,r){return Jn().ensureTrace(n,i,r)}function Mg(n,i){return Jn().getActiveTraceId(n,i)}function qg(n,i,r){Jn().markTrace(n,i,r)}function Ag(n,i,r="settled",_){let c=Qn(n);if(!c||c.status!=="active")return!1;let u=new Set(c.phases.map((f)=>f.phase));if(!i.every((f)=>u.has(f)))return!1;return gi(n,"completed",r,_),!0}function Zg(n,i,r="failed",_){Jn().failTrace(n,i,r,_)}function Dg(n,i="cancelled",r){Jn().cancelTrace(n,i,r)}function vr(n){return Jn().recordRequest(n)}var Nn,si,Xn,Ni;var a_=O(()=>{Nn=[],si=[],Xn=new Map;Ni={startTrace(n,i,r){return E_(n,i,r)},ensureTrace(n,i,r){let _=Xn.get($i(n,i));if(_&&Qn(_)?.status==="active")return _;return E_(n,i,r)},getActiveTraceId(n,i){let r=Xn.get($i(n,i));return r&&Qn(r)?.status==="active"?r:null},markTrace(n,i,r){let _=Qn(n);if(!_||_.status!=="active")return;_.phases.push({phase:i,at:Vi(),detail:Vn(r)}),hr(_.id,i)},completeTrace(n,i="settled",r){gi(n,"completed",i,r)},failTrace(n,i,r="failed",_){gi(n,"failed",r,_,i)},cancelTrace(n,i="cancelled",r){gi(n,"cancelled",i,r)},recordRequest(n){let i=d_("req");return si.push({...n,id:i,detail:Vn(n.detail)}),e_(si,300),i},getTraces(){return Nn.map((n)=>({...n,detail:Vn(n.detail),phases:n.phases.map((i)=>({...i,detail:Vn(i.detail)}))}))},getRequests(){return si.map((n)=>({...n,detail:Vn(n.detail)}))},clear(){Nn.forEach((n)=>m_(n.id)),Nn.splice(0,Nn.length),si.splice(0,si.length),Xn.clear()},printSummary(){let n={traces:Ni.getTraces(),requests:Ni.getRequests()};return console.table(n.traces.map((i)=>({id:i.id,type:i.type,chatJid:i.chatJid,status:i.status,durationMs:Number(i.durationMs||0).toFixed(1),lastPhase:i.phases[i.phases.length-1]?.phase||"start"}))),n}}});function On(n){let i=Number(n||0);return Number.isFinite(i)&&i>0?i:null}function $f(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function lf(n){let i=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(i)}function nc(n){let i=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(i)}function ic(n=typeof window<"u"?window:null){let i=On(n?.innerWidth)??On(n?.screen?.availWidth)??On(n?.screen?.width)??0,r=On(n?.innerHeight)??On(n?.screen?.availHeight)??On(n?.screen?.height)??0,_=i&&r?Math.min(i,r):i||r,c=i&&r?Math.max(i,r):i||r,u=$f(n),f=Number(n?.navigator?.maxTouchPoints||0),g=u||f>1;if(_>0&&_<=640)return"mobile";if(lf(n)&&!nc(n))return"mobile";if(nc(n))return"tablet";if(g&&_>0&&_<=1100)return"tablet";if(c>0&&c<=1180&&_>0&&_<=900)return"tablet";return"desktop"}var Fs={};un(Fs,{uploadWorkspaceFile:()=>bs,uploadMedia:()=>Cf,updateWorkspaceFile:()=>$s,updateScheduledTask:()=>Br,submitAdaptiveCardAction:()=>Of,streamSidePrompt:()=>Ef,stopSessionRecording:()=>Fr,stopAutoresearch:()=>qf,steerAgentQueueItem:()=>If,startSessionRecording:()=>Hr,setWorkspaceVisibility:()=>Ks,setAgentThoughtVisibility:()=>ef,sessionRecordingPlaybackUrl:()=>jr,sessionRecordingExportUrl:()=>li,sendPeerAgentMessage:()=>Pf,sendAgentMessage:()=>kn,searchPosts:()=>tf,saveWorkspaceSettings:()=>Vr,saveWebPushSubscription:()=>Gf,saveUiState:()=>Rr,saveQuickActionsSettings:()=>Gr,savePostAnnotations:()=>Hs,saveEnvironmentOverride:()=>Qi,restoreChatBranch:()=>Rf,respondToAgentRequest:()=>Jf,reorderAgentQueueItem:()=>Yf,renameWorkspaceFile:()=>vs,renameChatJid:()=>Uf,renameChatBranch:()=>Hf,removeAgentQueueItem:()=>Df,reindexWorkspace:()=>fs,purgeChatBranch:()=>jf,pruneChatBranch:()=>Wf,previewSessionRecordingRedaction:()=>Ur,moveWorkspaceEntry:()=>ps,mergeChatBranchIntoParent:()=>Ff,getWorkspaceTree:()=>_s,getWorkspaceRawUrl:()=>_c,getWorkspaceIndexStatus:()=>us,getWorkspaceFileStat:()=>gs,getWorkspaceFileDownloadUrl:()=>Bs,getWorkspaceFile:()=>ss,getWorkspaceDownloadUrl:()=>zs,getWorkspaceBranch:()=>cs,getWebPushPublicKey:()=>Tf,getTimeline:()=>wf,getThumbnailUrl:()=>af,getThread:()=>xf,getSystemMetrics:()=>bf,getSessionRecordings:()=>zr,getSessionRecording:()=>Xi,getScheduledTasks:()=>Kr,getQuickActionsSettings:()=>Tr,getPostsByHashtag:()=>yf,getMediaUrl:()=>mf,getMediaText:()=>is,getMediaInfo:()=>ns,getMediaBlob:()=>rs,getEnvironmentSettings:()=>Nr,getChatBranches:()=>Kf,getAutoresearchStatus:()=>Mf,getAgents:()=>Nf,getAgentThought:()=>df,getAgentStatus:()=>Xf,getAgentQueueState:()=>Zf,getAgentModels:()=>Xr,getAgentContext:()=>Qf,getAgentCommands:()=>Pr,getActiveChatAgents:()=>kf,forkChatBranch:()=>Bf,dismissAutoresearch:()=>Af,deleteWorkspaceFile:()=>ks,deleteWebPushSubscription:()=>Vf,deleteSessionRecording:()=>Wr,deletePost:()=>pf,createWorkspaceFile:()=>hs,createRootChatSession:()=>zf,createReply:()=>vf,createPost:()=>hf,completeInstanceOobe:()=>Lf,attachWorkspaceFile:()=>ls,addToWhitelist:()=>Sf,SSEClient:()=>cc});function pn(n,i={}){if(String(i.method||"GET").toUpperCase()!=="GET")return A(n,i);let _=pr.get(n);if(_)return _;let c=A(n,i).finally(()=>{pr.delete(n)});return pr.set(n,c),c}async function A(n,i={}){let r=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),_;try{_=await fetch(rn+n,{...i,headers:{"Content-Type":"application/json",...i.headers}})}catch(u){throw vr({method:String(i.method||"GET").toUpperCase(),url:n,startedAt:r,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-r,ok:!1,detail:{failedBeforeResponse:!0}}),u}let c=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-r;if(vr({method:String(i.method||"GET").toUpperCase(),url:n,startedAt:r,durationMs:c,status:_.status,ok:_.ok,requestId:_.headers?.get?.("x-request-id")||null,serverTiming:_.headers?.get?.("Server-Timing")||null}),!_.ok){let u=await _.json().catch(()=>({error:"Unknown error"}));throw Error(u.error||`HTTP ${_.status}`)}return _.json()}function rc(n){let i=String(n||"").split(`
`),r="message",_=[];for(let u of i)if(u.startsWith("event:"))r=u.slice(6).trim()||"message";else if(u.startsWith("data:"))_.push(u.slice(5).trim());let c=_.join(`
`);if(!c)return null;try{return{event:r,data:JSON.parse(c)}}catch{return{event:r,data:c}}}async function of(n,i){if(!n.body)throw Error("Missing event stream body");let r=n.body.getReader(),_=new TextDecoder,c="";while(!0){let{value:f,done:g}=await r.read();if(g)break;c+=_.decode(f,{stream:!0});let l=c.split(`

`);c=l.pop()||"";for(let $ of l){let t=rc($);if(t)i(t.event,t.data)}}c+=_.decode();let u=rc(c);if(u)i(u.event,u.data)}async function wf(n=10,i=null,r=null){let _=`/timeline?limit=${n}`;if(i)_+=`&before=${i}`;if(r)_+=`&chat_jid=${encodeURIComponent(r)}`;return pn(_)}async function yf(n,i=50,r=0,_=null){let c=_?`&chat_jid=${encodeURIComponent(_)}`:"";return A(`/hashtag/${encodeURIComponent(n)}?limit=${i}&offset=${r}${c}`)}async function tf(n,i=50,r=0,_=null,c="current",u=null,f=null){let g=_?`&chat_jid=${encodeURIComponent(_)}`:"",l=c?`&scope=${encodeURIComponent(c)}`:"",$=u?`&root_chat_jid=${encodeURIComponent(u)}`:"",t=f?.images?"&images=1":"",o=f?.attachments?"&attachments=1":"";return A(`/search?q=${encodeURIComponent(n)}&limit=${i}&offset=${r}${g}${l}${$}${t}${o}`)}async function xf(n,i=null){let r=i?`?chat_jid=${encodeURIComponent(i)}`:"";return A(`/thread/${n}${r}`)}async function bf(){return A("/agent/system-metrics")}async function Kr(n={}){let i=new URLSearchParams;if(n?.id)i.set("id",String(n.id));if(n?.chatJid)i.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")i.set("status",String(n.status));if(n?.limit)i.set("limit",String(n.limit));if(n?.includeRunLogs)i.set("include_run_logs","1");if(n?.runLogLimit)i.set("run_log_limit",String(n.runLogLimit));let r=i.toString()?`?${i.toString()}`:"";return A(`/agent/scheduled-tasks${r}`)}async function Br(n,i,r={}){return A("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:i,allow_internal:r?.allowInternal===!0})})}async function zr(){return A("/agent/recordings")}async function Xi(n){return A(`/agent/recordings/${encodeURIComponent(n)}`)}async function Hr(n={}){return A("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function Fr(n={}){return A("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function Wr(n){return A(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function li(n,i="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(i)}`}function jr(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function Ur(n,i={}){return A("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...i})})}async function Rr(n){return A("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function hf(n,i=[],r=null){let _=r?`?chat_jid=${encodeURIComponent(r)}`:"";return A(`/post${_}`,{method:"POST",body:JSON.stringify({content:n,media_ids:i})})}async function vf(n,i,r=[],_=null){let c=_?`?chat_jid=${encodeURIComponent(_)}`:"";return A(`/post/reply${c}`,{method:"POST",body:JSON.stringify({thread_id:n,content:i,media_ids:r})})}async function pf(n,i=!1,r=null){let _=r?`&chat_jid=${encodeURIComponent(r)}`:"",c=`/post/${n}?cascade=${i?"true":"false"}${_}`;return A(c,{method:"DELETE"})}async function kn(n,i,r=null,_=[],c=null,u=null){let f=u?`?chat_jid=${encodeURIComponent(u)}`:"",g={content:i,thread_id:r,media_ids:_,client_context:{screen_hint:ic()}};if(c==="auto"||c==="queue"||c==="steer")g.mode=c;return A(`/agent/${n}/message${f}`,{method:"POST",body:JSON.stringify(g)})}async function Pr(n="web:default"){let i=typeof n==="string"&&n.trim()?n.trim():"web:default";return pn(`/agent/commands?chat_jid=${encodeURIComponent(i)}`)}async function Tr(){return A("/agent/settings/quick-actions")}async function Gr(n){return A("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function Vr(n){return A("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function Nr(){return A("/agent/settings/environment")}async function Qi(n){return A("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function kf(){return A("/agent/active-chats")}async function Kf(n=null,i={}){let r=new URLSearchParams;if(n)r.set("root_chat_jid",String(n));if(i?.includeArchived)r.set("include_archived","1");let _=r.toString()?`?${r.toString()}`:"";return pn(`/agent/branches${_}`)}async function Bf(n,i={}){return A("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...i?.agentName?{agent_name:i.agentName}:{}})})}async function zf(n){return A("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function Hf(n,i={}){return A("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...i&&Object.prototype.hasOwnProperty.call(i,"agentName")?{agent_name:i.agentName}:{}})})}async function Ff(n){return A("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Wf(n){return A("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function jf(n){return A("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Uf(n,i){return A("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:i})})}async function Rf(n,i={}){return A("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...i&&Object.prototype.hasOwnProperty.call(i,"agentName")?{agent_name:i.agentName}:{}})})}async function Pf(n,i,r,_="auto",c={}){let u={source_chat_jid:n,content:r,mode:_,...c?.sourceAgentName?{source_agent_name:c.sourceAgentName}:{},...c?.targetBy==="agent_name"?{target_agent_name:i}:{target_chat_jid:i}};return A("/agent/peer-message",{method:"POST",body:JSON.stringify(u)})}async function Tf(){return A("/agent/push/vapid-public-key")}async function Gf(n,i={}){let r={subscription:n,...i?.deviceId?{device_id:i.deviceId}:{}};return A("/agent/push/subscription",{method:"POST",body:JSON.stringify(r)})}async function Vf(n,i={}){let r={subscription:n,...i?.deviceId?{device_id:i.deviceId}:{}};return A("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(r)})}async function Nf(){return pn("/agent/roster")}async function Xf(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/status${i}`)}async function Qf(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/context${i}`)}async function Mf(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/autoresearch/status${i}`)}async function qf(n=null,i={}){return A("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:i?.generateReport!==!1})})}async function Af(n=null){return A("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function Zf(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/queue-state${i}`)}async function Df(n,i=null){let r=await fetch(rn+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:i||void 0})});if(!r.ok){let _=await r.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(_.error||`HTTP ${r.status}`)}return r.json()}async function If(n,i=null){let r=await fetch(rn+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:i||void 0})});if(!r.ok){let _=await r.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(_.error||`HTTP ${r.status}`)}return r.json()}async function Yf(n,i,r=null){let _=await fetch(rn+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:i,chat_jid:r||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Xr(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/models${i}`)}async function Lf(n="provider-ready"){return A("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function Cf(n){let i=new FormData;i.append("file",n);let r=await fetch(rn+"/media/upload",{method:"POST",body:i});if(!r.ok){let _=await r.json().catch(()=>({error:"Upload failed"}));throw Error(_.error||`HTTP ${r.status}`)}return r.json()}async function Jf(n,i,r=null){let _=await fetch(rn+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:i,chat_jid:r||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to respond"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Of(n){let i=await fetch(rn+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok){let r=await i.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(r.error||`HTTP ${i.status}`)}return i.json()}async function Ef(n,i={}){let r=await fetch(rn+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:i.systemPrompt||void 0,chat_jid:i.chatJid||void 0}),signal:i.signal});if(!r.ok){let u=await r.json().catch(()=>({error:"Side prompt failed"}));throw Error(u.error||`HTTP ${r.status}`)}let _=null,c=null;if(await of(r,(u,f)=>{if(i.onEvent?.(u,f),u==="side_prompt_thinking_delta")i.onThinkingDelta?.(f?.delta||"");else if(u==="side_prompt_text_delta")i.onTextDelta?.(f?.delta||"");else if(u==="side_prompt_done")_=f;else if(u==="side_prompt_error")c=f}),c){let u=Error(c?.error||"Side prompt failed");throw u.payload=c,u}return _}async function Sf(n,i){let r=await fetch(rn+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:i})});if(!r.ok){let _=await r.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(_.error||`HTTP ${r.status}`)}return r.json()}async function df(n,i="thought"){let r=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(i)}`;return A(r)}async function ef(n,i,r){return A("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:i,expanded:Boolean(r)})})}function mf(n){return`${rn}/media/${n}`}function af(n){return`${rn}/media/${n}/thumbnail`}async function ns(n){let i=await fetch(`${rn}/media/${n}/info`);if(!i.ok)throw Error("Failed to get media info");return i.json()}async function is(n){let i=await fetch(`${rn}/media/${n}`);if(!i.ok)throw Error("Failed to load media text");return i.text()}async function rs(n){let i=await fetch(`${rn}/media/${n}`);if(!i.ok)throw Error("Failed to load media blob");return i.blob()}async function _s(n="",i=2,r=!1){let _=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${i}&show_hidden=${r?"1":"0"}`;return A(_)}async function cs(n=""){let i=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return A(i)}async function us(n="all"){let i=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return A(i)}async function fs(n="all"){return A("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function ss(n,i=20000,r=null){let _=r?`&mode=${encodeURIComponent(r)}`:"",c=`/workspace/file?path=${encodeURIComponent(n)}&max=${i}${_}`;return A(c)}async function gs(n){return A(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function $s(n,i){return A("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:i})})}async function ls(n){return A("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function ws(n,i="",r={}){let _=new URLSearchParams;if(i)_.set("path",i);if(r.overwrite)_.set("overwrite","1");let c=_.toString();return c?`${n}?${c}`:n}function ys(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function ts(n,i,r,_){return new Promise((c,u)=>{let f=new XMLHttpRequest;f.open("POST",rn+i);for(let[g,l]of Object.entries(r||{}))if(l!==void 0&&l!==null)f.setRequestHeader(g,String(l));f.upload.onprogress=(g)=>{if(typeof _==="function")_({loaded:g.lengthComputable?g.loaded:0,total:g.lengthComputable?g.total:n.size,lengthComputable:g.lengthComputable})},f.onload=()=>{try{let g=f.responseText?JSON.parse(f.responseText):{};if(f.status>=200&&f.status<300)c(g);else{let l=Error(g.error||`HTTP ${f.status}`);l.status=f.status,l.code=g.code,u(l)}}catch{let g=Error(`HTTP ${f.status}`);g.status=f.status,u(g)}},f.onerror=()=>u(Error("Upload failed (network error)")),f.ontimeout=()=>u(Error("Upload timed out")),f.send(n)})}async function xs(n,i="",r={}){let _=ys(),c=ws("/workspace/upload-chunk",i,r),u=Math.max(1,Math.min(kr,Number(r.chunkSize)||os)),f=Math.max(0,Number(n?.size)||0),g=Math.max(1,Math.ceil(f/u)),l=0,$=null;for(let t=0;t<g;t+=1){let o=t*u,b=Math.min(f,o+u),p=n.slice(o,b),k=p.size;if($=await ts(p,c,{"X-Upload-Id":_,"X-Chunk-Index":t,"X-Chunk-Total":g,"X-File-Name":n?.name||"upload.bin","X-File-Size":f},(h)=>{if(typeof r.onProgress!=="function")return;let z=Math.min(f,l+(h?.loaded||0)),y=f||1;r.onProgress({loaded:z,total:y,percent:Math.round(z/y*100),chunkIndex:t,chunkTotal:g})}),l+=k,typeof r.onProgress==="function"){let h=f||1,z=f?l:h;r.onProgress({loaded:z,total:h,percent:Math.round(z/h*100),chunkIndex:t+1,chunkTotal:g})}}return $}async function bs(n,i="",r={}){if(n?.size>kr){let _=(n.size/1048576).toFixed(0),c=(kr/1048576).toFixed(0),u=Error(`File too large (${_} MB). Maximum upload size is ${c} MB.`);throw u.code="file_too_large",u}return await xs(n,i,r)}async function hs(n,i,r=""){let _=await fetch(rn+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:i,content:r})});if(!_.ok){let c=await _.json().catch(()=>({error:"Create failed"})),u=Error(c.error||`HTTP ${_.status}`);throw u.status=_.status,u.code=c.code,u}return _.json()}async function vs(n,i){let r=await fetch(rn+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:i})});if(!r.ok){let _=await r.json().catch(()=>({error:"Rename failed"})),c=Error(_.error||`HTTP ${r.status}`);throw c.status=r.status,c.code=_.code,c}return r.json()}async function ps(n,i){let r=await fetch(rn+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:i})});if(!r.ok){let _=await r.json().catch(()=>({error:"Move failed"})),c=Error(_.error||`HTTP ${r.status}`);throw c.status=r.status,c.code=_.code,c}return r.json()}async function ks(n){let i=`/workspace/file?path=${encodeURIComponent(n||"")}`;return A(i,{method:"DELETE"})}async function Ks(n,i=!1){return A("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(i)})})}function _c(n,i={}){let r=new URLSearchParams({path:String(n||"")});if(i.download)r.set("download","1");return`${rn}/workspace/raw?${r.toString()}`}function Bs(n){return _c(n,{download:!0})}function zs(n,i=!1){let r=`path=${encodeURIComponent(n||"")}&show_hidden=${i?"1":"0"}`;return`${rn}/workspace/download?${r}`}class cc{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,i,r={}){this.onEvent=n,this.onStatusChange=i,this.chatJid=typeof r?.chatJid==="string"&&r.chatJid.trim()?r.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(rn+"/sse/stream"+n);let i=(r)=>{this.eventSource.addEventListener(r,(_)=>{this.markActivity(),this.onEvent(r,JSON.parse(_.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),i("new_post"),i("new_reply"),i("agent_response"),i("interaction_updated"),i("interaction_deleted"),i("agent_status"),i("agent_steer_queued"),i("agent_followup_queued"),i("agent_followup_consumed"),i("agent_followup_removed"),i("workspace_update"),i("agent_draft"),i("agent_draft_delta"),i("agent_thought"),i("agent_thought_delta"),i("model_changed"),i("ui_theme"),i("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(i)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,i=60000,r=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,r+i),this.reconnectAttempts=0;let _=Math.max(this.cooldownUntil-r,0),c=Math.max(this.reconnectDelay,_);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},c),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}async function Hs(n,i,r){let _=r?`?chat_jid=${encodeURIComponent(r)}`:"";return A(`/post/${n}/annotations${_}`,{method:"PATCH",body:JSON.stringify({annotations:i})})}var rn="",pr,kr=1073741824,os=8388608;var Kn=O(()=>{a_();pr=new Map});function js(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(qi,{detail:{enabled:Boolean(n)}}))}function sc(n){if(typeof fetch!=="function")return;Rr({ui_meters:n}).catch((i)=>{console.debug("[meters] Failed to persist meters UI state.",i)})}function Us(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(Ws,{detail:{collapsed:Boolean(n)}}))}function Qr(n=!1){return or(uc,n)}function Eg(n=!1){return or(fc,n)}function Mi(n,i={}){let r=i.persist!==!1,_=i.persistServer!==!1,c=Boolean(n);if(r)sn(uc,c?"true":"false");if(_)sc({enabled:c});return js(c),c}function Rs(n,i={}){let r=i.persist!==!1,_=i.persistServer!==!1,c=Boolean(n);if(r)sn(fc,c?"true":"false");if(_)sc({collapsed:c});return Us(c),c}function Sg(n){let i=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")Mi(Boolean(n.enabled),{persistServer:!1});else if(i==="toggle"){let r=!Qr(!1);Mi(r,{persistServer:!1})}if(typeof n?.collapsed==="boolean")Rs(Boolean(n.collapsed),{persistServer:!1})}var uc="piclaw_system_meters_enabled",fc="piclaw_system_meters_collapsed",qi="piclaw-meters-change",Ws="piclaw-meters-collapsed-change";var gc=O(()=>{Kn()});function $c(n,i){if(n===""||n===null||n===void 0)return i;let r=Number(n);return Number.isFinite(r)?r:i}function lc(n,{min:i=-1/0,max:r=1/0}={}){let _=Number.isFinite(Number(i))?Number(i):-1/0,c=Number.isFinite(Number(r))?Number(r):1/0;return Math.min(c,Math.max(_,Number(n)))}function En(n,{fallback:i=0,min:r=-1/0,max:_=1/0}={}){let c=$c(n,i);return lc(c,{min:r,max:_})}function Ps(n,{direction:i=1,step:r=1,fallback:_=0,min:c=-1/0,max:u=1/0}={}){let f=En(n,{fallback:_,min:c,max:u}),g=Math.abs($c(r,1))||1,l=Number(i)<0?-1:1;return lc(f+l*g,{min:c,max:u})}function nn({value:n,min:i,max:r,step:_=1,fallback:c,width:u="80px",disabled:f=!1,label:g,onChange:l}){let $=Number.isFinite(Number(c))?Number(c):En(n,{fallback:0,min:i,max:r}),[t,o]=w(String(n??$)),b=C(!1);q(()=>{if(!b.current)o(String(n??$))},[n,$]);let p=U((h)=>{b.current=!1;let z=En(h,{fallback:$,min:i,max:r});o(String(z)),l?.(z)},[$,i,r,l]),k=U((h)=>{b.current=!1;let z=Ps(n,{direction:h,step:_,fallback:$,min:i,max:r});o(String(z)),l?.(z)},[$,r,i,l,_,n]);return s`
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
                value=${t}
                disabled=${f}
                style=${`width:${u}`}
                onInput=${(h)=>{b.current=!0,o(h.target.value)}}
                onBlur=${(h)=>p(h.target.value)}
                onKeyDown=${(h)=>{if(h.key==="Enter")h.preventDefault(),p(h.target.value),h.target.blur()}}
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
    `}var Sn=O(()=>{e()});function oc(n){let i=String(n||"").trim();if(!i)return"";if(i.startsWith("http://")||i.startsWith("https://")||i.startsWith("data:")||i.startsWith("blob:"))return i;if(i.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(i.slice(11))}`;if(i.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(i))return"";if(i.startsWith("\\\\"))return"";if(i.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(i.replace(/^\.\//,""))}`}function wc({value:n,onChange:i}){let{t:r}=J(),_=C(null),[c,u]=w(oc(n));q(()=>{u(oc(n))},[n]);let f=U((g)=>{let l=g.target.files?.[0];if(!l)return;let $=new FileReader;$.onload=()=>{let t=$.result;u(t),i?.(t)},$.readAsDataURL(l)},[i]);return s`
        <div class="settings-avatar-inline" onClick=${()=>_.current?.click()} title=${r("settings.general.avatarUpload")}>
            ${c?s`<img src=${c} alt="avatar" />`:s`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${_} style="display:none" onChange=${f} />
        </div>
    `}function yc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function Ts(n,i={}){let r=typeof n==="string"?n:"";if(!r)return!1;let _=i.navigator??(typeof navigator<"u"?navigator:null),c=i.document??(typeof document<"u"?document:null);if(_?.clipboard?.writeText)try{return await _.clipboard.writeText(r),!0}catch(u){}try{if(!c?.body||typeof c.createElement!=="function"||typeof c.execCommand!=="function")return!1;let u=c.createElement("textarea");u.value=r,u.setAttribute?.("readonly",""),u.style.position="fixed",u.style.left="-9999px",u.style.top="0",u.style.opacity="0",c.body.appendChild(u),u.focus?.(),u.select?.();let f=Boolean(c.execCommand("copy"));return c.body.removeChild(u),f}catch(u){return!1}}function Mr({settingsData:n,setStatus:i,mergeSettingsData:r}){let{t:_}=J(),[c,u]=w(""),[f,g]=w(""),[l,$]=w(""),[t,o]=w(""),[b,p]=w(32),[k,h]=w(256),[z,y]=w(""),[v,G]=w(!1),[R,W]=w(!1),[P,B]=w(!1),[T,K]=w(()=>Qr(!1)),[x,Z]=w(!1),H=C(""),V=C(null),D=C(!0);q(()=>{return D.current=!0,()=>{D.current=!1}},[]);let F=U((Q)=>{let M=yc(Q);u(M.userName),g(M.userAvatar),$(M.assistantName),o(M.assistantAvatar),p(M.composeUploadLimitMb),h(M.workspaceUploadLimitMb),y(Q?.widgetToken||""),H.current=JSON.stringify(M)},[]);q(()=>{F(n||{})},[n,F]),q(()=>{let Q=(M)=>{K(Boolean(M?.detail?.enabled))};return window.addEventListener(qi,Q),()=>window.removeEventListener(qi,Q)},[]);let X=L(()=>JSON.stringify(yc({userName:c,userAvatar:f,assistantName:l,assistantAvatar:t,composeUploadLimitMb:b,workspaceUploadLimitMb:k})),[c,f,l,t,b,k]);q(()=>{if(X===H.current)return;if(V.current)clearTimeout(V.current);return V.current=setTimeout(async()=>{if(!D.current)return;let Q=document.activeElement;if(Q&&Q.closest?.(".settings-number-stepper"))return;try{let M=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:X}),$n=await M.json().catch(()=>({}));if(!D.current)return;if(!M.ok||!$n?.ok||!$n?.settings)return;H.current=X,r?.($n.settings),Z(!0),setTimeout(()=>{if(D.current)Z(!1)},4000)}catch(M){console.warn("[settings/general] Failed to persist general settings snapshot.",M)}},800),()=>{if(V.current)clearTimeout(V.current)}},[X,r]);let Y=n?.instanceTotp||{configured:!1,issuer:l||"Piclaw",label:c?`${l||"Piclaw"}:${c}`:l||"Piclaw",secret:"",otpauth:"",qrSvg:""},E=U(async()=>{if(!z)return;if(await Ts(z))W(!0),setTimeout(()=>{if(D.current)W(!1)},3000);else i?.(_("settings.general.copyFailed")),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[z,i]),_n=U(async()=>{if(P)return;if(!confirm(_("settings.general.regenConfirm")))return;B(!0);try{let Q=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),M=await Q.json().catch(()=>({}));if(!Q.ok||!M?.ok||!M?.settings)throw Error(M?.error||"Failed to regenerate widget token.");y(M.settings.widgetToken||""),r?.(M.settings),Z(!0),setTimeout(()=>{if(D.current)Z(!1)},4000)}catch(Q){console.warn("[settings/general] Failed to regenerate widget token.",Q)}finally{if(D.current)B(!1)}},[P,r]),ln=typeof window<"u"&&window.isSecureContext,tn=z?"•".repeat(Math.min(Math.max(z.length,16),48)):"—",Hn=v?z||"—":tn;return s`
        <div class="settings-section">
            ${x&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.appliedNotice")}
                </div>
            `}
            <h3>${_("settings.general.identity")}</h3>
            <div class="settings-row">
                <label>${_("settings.general.userLabel")}</label>
                <${wc} value=${f} onChange=${g} />
                <input type="text" value=${c} onInput=${(Q)=>u(Q.target.value)} placeholder=${_("settings.general.yourName")} />
            </div>
            <div class="settings-row">
                <label>${_("settings.general.agentLabel")}</label>
                <${wc} value=${t} onChange=${o} />
                <input type="text" value=${l} onInput=${(Q)=>$(Q.target.value)} placeholder=${_("settings.general.agentName")} />
            </div>

            <h3 style="margin-top:20px">${_("settings.general.notifications")}</h3>
            ${ln?s`
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
                        onChange=${()=>{let Q=Mi(!T);K(Q)}} />
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
                    onChange=${p}
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
                    onChange=${h}
                />
                <span class="settings-hint" style="margin:0">${_("settings.general.workspaceUploadHint")}</span>
            </div>

            <h3 style="margin-top:20px">${_("settings.general.authentication")}</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>${_("settings.general.widgetToken")}</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">${_("settings.general.token")}</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${Hn}</code>
                        <button class=${`settings-keychain-reveal-btn${v?" active":""}`}
                            type="button"
                            onClick=${()=>G((Q)=>!Q)}
                            disabled=${!z}
                            title=${v?_("settings.general.hideToken"):_("settings.general.revealToken")}>
                            ${v?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${E} disabled=${!z} title=${_("settings.general.copyToken")}>
                            ${R?s`<span class="settings-widget-token-copied">${_("settings.general.copied")}</span>`:s`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
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
    `}var tc=O(()=>{e();gc();Sn();gn()});var bc={};un(bc,{SessionsSection:()=>Gs});function xc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function Gs({settingsData:n,setStatus:i,mergeSettingsData:r}){let{t:_}=J(),[c,u]=w(!0),[f,g]=w(16),[l,$]=w(4000),[t,o]=w(3),[b,p]=w(64),[k,h]=w("none"),[z,y]=w(!1),v=C(""),G=C(null),R=C(!0);q(()=>{return R.current=!0,()=>{R.current=!1}},[]);let W=U((B)=>{let T=xc(B);u(T.sessionAutoRotate),g(T.sessionMaxSizeMb),$(T.sessionMaxLines),o(T.sessionMaxCompactions),p(T.toolUseBudget),h(T.sessionIsolation),v.current=JSON.stringify(T)},[]);q(()=>{W(n||{})},[n,W]);let P=L(()=>JSON.stringify(xc({sessionAutoRotate:c,sessionMaxSizeMb:f,sessionMaxLines:l,sessionMaxCompactions:t,toolUseBudget:b,sessionIsolation:k})),[c,f,l,t,b,k]);return q(()=>{if(P===v.current)return;if(G.current)clearTimeout(G.current);return G.current=setTimeout(async()=>{if(!R.current)return;let B=document.activeElement;if(B&&B.closest?.(".settings-number-stepper"))return;try{let T=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:P}),K=await T.json().catch(()=>({}));if(!R.current)return;if(!T.ok||!K?.ok||!K?.settings)return;v.current=P,r?.(K.settings),y(!0),setTimeout(()=>{if(R.current)y(!1)},4000)}catch(T){console.warn("[settings/sessions] Failed to persist session settings.",T)}},800),()=>{if(G.current)clearTimeout(G.current)}},[P,r]),s`
        <div class="settings-section">
            ${z&&s`
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
                    onChange=${p}
                />
                <span class="settings-hint" style="margin:0">${_("settings.sessions.toolBudgetHint")}</span>
            </div>
            <div class="settings-row">
                <label>${_("settings.sessions.isolation")}</label>
                <select value=${k} onChange=${(B)=>h(B.target.value)}>
                    <option value="none">${_("settings.sessions.isolationNone")}</option>
                    <option value="summary">${_("settings.sessions.isolationSummary")}</option>
                    <option value="full">${_("settings.sessions.isolationFull")}</option>
                </select>
            </div>
        </div>
    `}var hc=O(()=>{e();Sn();gn()});var vc={};un(vc,{__recordingsSettingsTest:()=>Qs,RecordingsSection:()=>Xs});function Zi(n){if(!n)return"—";let i=new Date(n);if(Number.isNaN(i.getTime()))return n;return i.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function qr(n){if(n==="full")return"full / trusted";if(n==="metadata")return"metadata only";return"redacted"}function Ai({children:n,type:i="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${i}`}>${n}</span>`}function Vs(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function oi(n){return String(n||"").split(`
`).map((i)=>i.trim()).filter(Boolean)}function Ns({recording:n,details:i,onDelete:r,onRefresh:_}){if(!n)return s`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let c=i?.meta||n,u=Array.isArray(i?.events)?i.events:[],f=u.reduce((l,$)=>l+(Array.isArray($.redactions)?$.redactions.length:0),0),g=u.reduce((l,$)=>{let t=$.kind||"event";return l[t]=(l[t]||0)+1,l},{});return s`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${c.title||c.id}</h4>
                    <code>${c.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(jr(c.id),"_blank","noopener,noreferrer")}>Playback</button>
                    <button onClick=${_}>Refresh</button>
                    <button class="danger" onClick=${()=>r(c)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${c.status||"—"}</strong>
                <span>Mode</span><strong>${qr(c.mode)}</strong>
                <span>Chat</span><code>${c.chatJid||"—"}</code>
                <span>Started</span><strong>${Zi(c.startedAt)}</strong>
                <span>Ended</span><strong>${Zi(c.endedAt)}</strong>
                <span>Events</span><strong>${c.eventCount??u.length}</strong>
                <span>Redactions</span><strong>${f}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${li(c.id,"json")}>Export JSON</a>
                <a href=${li(c.id,"jsonl")}>Export JSONL</a>
                <a href=${li(c.id,"html")}>Export standalone HTML</a>
            </div>
            <h4>Event summary</h4>
            ${u.length===0&&s`<p class="settings-hint">Open or refresh details to inspect trace events.</p>`}
            ${u.length>0&&s`
                <div class="settings-recording-event-summary">
                    ${Object.entries(g).map(([l,$])=>s`<${Ai}>${l}: ${$}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(u.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function Xs({filter:n="",setStatus:i}){let[r,_]=w([]),[c,u]=w([]),[f,g]=w(!0),[l,$]=w(null),[t,o]=w(null),[b,p]=w(null),[k,h]=w(!1),[z,y]=w(Vs),[v,G]=w(""),[R,W]=w("redacted"),[P,B]=w(!0),[T,K]=w(""),[x,Z]=w(""),[H,V]=w('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[D,F]=w(null);q(()=>{let N=(m)=>{let fn=String(m?.detail?.chatJid||"").trim();if(fn)y(fn)};return window.addEventListener("piclaw:current-chat-changed",N),()=>window.removeEventListener("piclaw:current-chat-changed",N)},[]);let X=U(async(N=t)=>{g(!0),$(null);try{let m=await zr(),fn=m.recordings||[];_(fn),u(m.active||[]);let Fn=fn.find((j)=>j.id===N)||fn[0]||null;if(o(Fn?.id||null),Fn?.id)p(await Xi(Fn.id));else p(null)}catch(m){$(m?.message||"Failed to load recordings.")}finally{g(!1)}},[t]);q(()=>{X()},[X]);let Y=L(()=>r.find((N)=>N.id===t)||null,[r,t]),E=L(()=>c.find((N)=>N.chatJid===z)||null,[c,z]),_n=String(n||"").trim().toLowerCase(),ln=L(()=>{if(!_n)return r;return r.filter((N)=>[N.id,N.title,N.chatJid,N.status,N.mode].some((m)=>String(m||"").toLowerCase().includes(_n)))},[r,_n]),tn=U(async(N)=>{if(o(N?.id||null),p(null),!N?.id)return;try{p(await Xi(N.id))}catch(m){i?.(m?.message||"Failed to load recording.","error")}},[i]),Hn=U(async()=>{if(k)return;h(!0);try{let N={keys:oi(T),patterns:oi(x)},m=await Hr({chat_jid:z,title:v||void 0,mode:R,include_timeline_snapshot:P,timeline_snapshot_limit:80,redaction:N});i?.(`Recording started for ${z}.`,"success"),await X(m?.recording?.id)}catch(N){i?.(N?.message||"Failed to start recording.","error")}finally{h(!1)}},[k,z,T,x,P,X,R,i,v]),Q=U(async(N=E)=>{if(!N||k)return;h(!0);try{let m=await Fr({id:N.id});i?.(`Recording stopped for ${N.chatJid}.`,"success"),await X(m?.recording?.id)}catch(m){i?.(m?.message||"Failed to stop recording.","error")}finally{h(!1)}},[k,E,X,i]),M=U(async(N)=>{if(!N||k)return;if(!window.confirm(`Delete recording ${N.id}?

${N.title||""}`))return;h(!0);try{await Wr(N.id),i?.("Recording deleted.","success"),await X(null)}catch(m){i?.(m?.message||"Failed to delete recording.","error")}finally{h(!1)}},[k,X,i]),$n=U(async()=>{try{let N=JSON.parse(H||"null"),m=await Ur(N,{mode:R,redaction:{keys:oi(T),patterns:oi(x)}});F(m.preview)}catch(N){F({error:N?.message||"Preview failed."})}},[T,x,R,H]);return s`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${z} onInput=${(N)=>y(N.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${v} onInput=${(N)=>G(N.target.value)} /></label>
                    <label>Mode<select value=${R} onChange=${(N)=>W(N.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${P} onChange=${(N)=>B(N.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${T} onInput=${(N)=>K(N.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${x} onInput=${(N)=>Z(N.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${E?s`<button onClick=${()=>Q(E)} disabled=${k}>Stop current chat recording</button>`:s`<button onClick=${Hn} disabled=${k}>Start recording</button>`}
                    <button onClick=${()=>X()} disabled=${f}>Refresh</button>
                </div>
                ${c.length>0&&s`<div class="settings-recording-active-row">${c.map((N)=>s`<${Ai} type="active">REC ${N.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${H} onInput=${(N)=>V(N.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${$n}>Preview redaction</button></div>
                ${D&&s`<pre>${JSON.stringify(D,null,2)}</pre>`}
            </details>

            ${f&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${l&&s`<div class="settings-error-state">${l}</div>`}
            ${!f&&!l&&r.length===0&&s`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!f&&!l&&r.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${ln.map((N)=>s`
                            <button class=${`settings-task-row ${N.id===t?"active":""}`} onClick=${()=>tn(N)}>
                                <span class="settings-task-row-main"><strong>${N.title||N.id}</strong><span>${N.chatJid} · ${Zi(N.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${Ai} type=${N.status==="recording"?"active":"completed"}>${N.status}<//><${Ai}>${qr(N.mode)}<//></span>
                                <span class="settings-task-row-times">${N.eventCount||0} events</span>
                            </button>
                        `)}
                        ${ln.length===0&&s`<p class="settings-hint">No recordings match “${n}”.</p>`}
                    </div>
                    <${Ns} recording=${Y} details=${b} onDelete=${M} onRefresh=${()=>Y&&tn(Y)} />
                </div>
            `}
        </div>
    `}var Qs;var pc=O(()=>{e();Kn();Qs={formatDateTime:Zi,modeLabel:qr,parseList:oi}});var kc={};un(kc,{CompactionSection:()=>qs});function Ms(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),toolResultSemanticSummaryEnabled:Boolean(n.toolResultSemanticSummaryEnabled??!0),toolResultSemanticSummaryMaxInputChars:n.toolResultSemanticSummaryMaxInputChars??12000,toolResultSemanticSummaryMaxTokens:n.toolResultSemanticSummaryMaxTokens??320,toolResultSemanticSummaryTimeoutSec:n.toolResultSemanticSummaryTimeoutSec??12,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function Ar(n){let i=String(n||"").trim();if(!i)return"—";let r=new Date(i);if(Number.isNaN(r.getTime()))return i;return r.toLocaleString()}function qs({settingsData:n,setStatus:i,mergeSettingsData:r}){let[_,c]=w(180),[u,f]=w(15),[g,l]=w(360),[$,t]=w(75),[o,b]=w(0.5),[p,k]=w(!0),[h,z]=w(!0),[y,v]=w(12000),[G,R]=w(320),[W,P]=w(12),[B,T]=w(!1),[K,x]=w(120),[Z,H]=w([]),[V,D]=w([]),[F,X]=w(!1),Y=C(""),E=C(null),_n=C(!0);q(()=>{return _n.current=!0,()=>{_n.current=!1}},[]);let ln=U((Q)=>{let M=Ms(Q);c(M.compactionTimeoutSec),f(M.compactionBackoffBaseMin),l(M.compactionBackoffMaxMin),t(M.compactionThresholdPercent),b(M.compactionBackoffDecayFactor),k(M.toolResultCompactionEnabled),z(M.toolResultSemanticSummaryEnabled),v(M.toolResultSemanticSummaryMaxInputChars),R(M.toolResultSemanticSummaryMaxTokens),P(M.toolResultSemanticSummaryTimeoutSec),T(M.progressWatchdogEnabled),x(M.progressWatchdogTimeoutSec),H(M.compactionBackoffs),D(M.progressWatchdogPhases),Y.current=JSON.stringify({compactionTimeoutSec:M.compactionTimeoutSec,compactionBackoffBaseMin:M.compactionBackoffBaseMin,compactionBackoffMaxMin:M.compactionBackoffMaxMin,compactionThresholdPercent:M.compactionThresholdPercent,compactionBackoffDecayFactor:M.compactionBackoffDecayFactor,toolResultCompactionEnabled:M.toolResultCompactionEnabled,toolResultSemanticSummaryEnabled:M.toolResultSemanticSummaryEnabled,toolResultSemanticSummaryMaxInputChars:M.toolResultSemanticSummaryMaxInputChars,toolResultSemanticSummaryMaxTokens:M.toolResultSemanticSummaryMaxTokens,toolResultSemanticSummaryTimeoutSec:M.toolResultSemanticSummaryTimeoutSec,progressWatchdogEnabled:M.progressWatchdogEnabled,progressWatchdogTimeoutSec:M.progressWatchdogTimeoutSec})},[]);q(()=>{ln(n||{})},[n,ln]);let tn=L(()=>JSON.stringify({compactionTimeoutSec:_,compactionBackoffBaseMin:u,compactionBackoffMaxMin:g,compactionThresholdPercent:$,compactionBackoffDecayFactor:o,toolResultCompactionEnabled:p,toolResultSemanticSummaryEnabled:h,toolResultSemanticSummaryMaxInputChars:y,toolResultSemanticSummaryMaxTokens:G,toolResultSemanticSummaryTimeoutSec:W,progressWatchdogEnabled:B,progressWatchdogTimeoutSec:K}),[_,u,g,$,o,p,h,y,G,W,B,K]);q(()=>{if(tn===Y.current)return;if(E.current)clearTimeout(E.current);return E.current=setTimeout(async()=>{if(!_n.current)return;try{i?.("Saving compaction settings…","info");let Q=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:tn}),M=await Q.json().catch(()=>({}));if(!_n.current)return;if(!Q.ok||!M?.ok||!M?.settings){i?.(M?.error||"Failed to save compaction settings.","error");return}Y.current=tn,r?.(M.settings),ln({...n||{},...M.settings||{}}),i?.("Compaction settings saved.","success"),X(!0),setTimeout(()=>{if(_n.current)X(!1),i?.(null)},4000)}catch(Q){if(console.warn("[settings/compaction] Failed to persist compaction settings.",Q),_n.current)i?.("Failed to save compaction settings.","error")}},800),()=>{if(E.current)clearTimeout(E.current)}},[tn,r,i,ln,n]);let Hn=U(async(Q)=>{try{i?.(`Clearing compaction suppression for ${Q}…`,"info");let M=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:Q})}),$n=await M.json().catch(()=>({}));if(!M.ok||!$n?.ok||!$n?.settings){i?.($n?.error||"Failed to clear compaction suppression.","error");return}r?.($n.settings),ln({...n||{},...$n.settings||{}}),i?.(`Cleared compaction suppression for ${Q}.`,"success")}catch(M){console.warn("[settings/compaction] Failed to clear compaction suppression.",M),i?.("Failed to clear compaction suppression.","error")}},[ln,r,i,n]);return s`
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
                    <input type="checkbox" checked=${p} onChange=${(Q)=>k(Boolean(Q.target.checked))} />
                    <span class="settings-hint" style="margin:0">When disabled, large tool results stay inline and are not externalized into searchable tool-output handles.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summaries for compacted tool results</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${h} onChange=${(Q)=>z(Boolean(Q.target.checked))} />
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
                    disabled=${!h}
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
                    disabled=${!h}
                    onChange=${R}
                />
                <span class="settings-hint" style="margin:0">Upper bound for generated summary length.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary timeout (sec)</label>
                <${nn}
                    label="semantic summary timeout"
                    value=${W}
                    min=${1}
                    max=${300}
                    fallback=${12}
                    width="90px"
                    disabled=${!h}
                    onChange=${P}
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
                    onChange=${t}
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
                    onChange=${(Q)=>b(Q/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${B} onChange=${(Q)=>T(Boolean(Q.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${nn}
                    label="watchdog timeout"
                    value=${K}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!B}
                    onChange=${x}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${Z.length===0?s`
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
                            ${Z.map((Q)=>s`
                                <tr>
                                    <td><code>${Q.chatJid}</code></td>
                                    <td>${Q.failureCount}</td>
                                    <td>${Ar(Q.backoffUntil)}</td>
                                    <td title=${Q.lastErrorMessage||""}>${Q.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>Hn(Q.chatJid)}>
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
                            ${V.map((Q)=>s`
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
    `}var Kc=O(()=>{e();Sn()});function zc(n){let i=String(n||"").trim().toLowerCase();if(!i)return null;let r=Ds[i]||i;if(/^f(?:[1-9]|1[0-2])$/.test(r))return r;if(Is.has(r))return r;if(r.length===1)return r;if(/^[a-z0-9]+$/.test(r))return r;return null}function dn(n){let i=String(n||"").trim();if(!i)return null;let r=i.split("+").map((u)=>u.trim()).filter(Boolean);if(!r.length)return null;let _={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let u of r){let f=u.toLowerCase(),g=Zs[f];if(g){_[g]=!0;continue}if(_.key)return null;let l=zc(u);if(!l||l==="escape")return null;_.key=l}if(!_.key)return null;let c=[];if(_.ctrl)c.push("ctrl");if(_.meta)c.push("meta");if(_.alt)c.push("alt");if(_.shift)c.push("shift");return c.push(_.key),c.join("+")}function Hc(n){return String(n||"").split(/[\n,]/).map((i)=>dn(i)).filter((i)=>Boolean(i))}function Rn(n){return n.join(", ")}function Dr(){let n=M_(Bc);if(!n||typeof n!=="object")return{};let i={};for(let r of wi){let _=n[r.id];if(!Array.isArray(_))continue;let c=_.map((u)=>dn(String(u||""))).filter((u)=>Boolean(u));i[r.id]=[...new Set(c)]}return i}function Zr(n){if(sn(Bc,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function Fc(n){return As.get(n)}function yi(n){let i=Dr()[n];if(Array.isArray(i))return i;return[...Fc(n).defaultBindings]}function Wc(n,i){let r=Dr(),_=Fc(n).defaultBindings,c=[...new Set(i.map((u)=>dn(u)).filter((u)=>Boolean(u)))];if(c.length===_.length&&c.every((u,f)=>u===_[f]))delete r[n];else r[n]=c;Zr(r)}function Ir(n){if(!n){Zr({});return}let i=Dr();delete i[n],Zr(i)}function Di(){let n={};for(let i of wi)n[i.id]=yi(i.id);return n}function Ys(n){let i=typeof n==="string"?n:"";if(!i)return"";if(i.length===1)return i.toLowerCase();return zc(i)||i.toLowerCase()}function Ls(n){let i=dn(n);if(!i)return null;let r={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let _ of i.split("+")){if(_==="ctrl"||_==="meta"||_==="alt"||_==="shift"){r[_]=!0;continue}r.key=_}return r.key?r:null}function Cs(n,i){let r=Ls(i);if(!r)return!1;if(Ys(n?.key)!==r.key)return!1;let c=!r.shift&&r.key.length===1&&/[^a-z0-9]/i.test(r.key);return Boolean(n?.ctrlKey)===r.ctrl&&Boolean(n?.metaKey)===r.meta&&Boolean(n?.altKey)===r.alt&&(c||Boolean(n?.shiftKey)===r.shift)}function w$(n,i){return yi(i).some((r)=>Cs(n,r))}var Bc="piclaw_keyboard_shortcuts_v1",wi,As,Zs,Ds,Is;var jc=O(()=>{wi=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],As=new Map(wi.map((n)=>[n.id,n])),Zs={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},Ds={esc:"escape",return:"enter",spacebar:"space"},Is=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var Uc={};un(Uc,{KeyboardSection:()=>Os});function Js(n,i,r){let _=String(n||"").trim().toLowerCase();if(!_)return!0;return[i.label,i.description,r,...i.defaultBindings||[]].some((c)=>String(c||"").toLowerCase().includes(_))}function Os({filter:n="",setStatus:i}){let{t:r}=J(),[_,c]=w(()=>{let $=Di();return Object.fromEntries(Object.entries($).map(([t,o])=>[t,Rn(o)]))});q(()=>{let $=()=>{let t=Di();c(Object.fromEntries(Object.entries(t).map(([o,b])=>[o,Rn(b)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",$),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",$)},[]);let u=L(()=>wi.filter(($)=>{let t=String(_[$.id]||"");return Js(n,$,t)}),[_,n]),f=($)=>{let t=String(_[$]||"").trim(),b=(t?t.split(/[\n,]/).map((k)=>k.trim()).filter(Boolean):[]).filter((k)=>!dn(k));if(b.length>0){i?.(r("settings.keyboard.invalidShortcut",{token:b[0]}),"error");return}let p=Hc(t);Wc($,p),c((k)=>({...k,[$]:Rn(yi($))})),i?.(r("settings.keyboard.saved"),"success")},g=($)=>{Ir($),c((t)=>({...t,[$]:Rn(yi($))})),i?.(r("settings.keyboard.resetOne"),"success")},l=()=>{Ir();let $=Di();c(Object.fromEntries(Object.entries($).map(([t,o])=>[t,Rn(o)]))),i?.(r("settings.keyboard.resetAllDone"),"success")};return s`
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
                ${u.map(($)=>s`
                    <div class="settings-shortcut-card" key=${$.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${$.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${$.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">${r("settings.keyboard.defaultColon")} <code style="font-size:13px;">${Rn($.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${_[$.id]||""}
                                placeholder=${Rn($.defaultBindings)}
                                onInput=${(t)=>c((o)=>({...o,[$.id]:t.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>f($.id)}>${r("settings.keyboard.save")}</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>g($.id)}>${r("settings.keyboard.defaultBtn")}</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${u.length===0&&s`<div class="settings-hint">${r("settings.keyboard.noMatch")}</div>`}
            </div>
        </div>
    `}var Rc=O(()=>{e();jc();gn()});function Gc(n,i=Yr){let r=Number(n);if(!Number.isFinite(r))return i;return Math.min(300,Math.max(15,Math.round(r)))}function Vc(n,i=Lr){let r=Number(n);if(!Number.isFinite(r))return i;return Math.min(8,Math.max(0,Math.round(r)))}function Cr(){return{refreshIntervalSec:Gc(wr(Pc,Yr),Yr),folderPreviewDepth:Vc(wr(Tc,Lr),Lr)}}function Nc(n={}){let i=Cr(),r={refreshIntervalSec:Gc(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:i.refreshIntervalSec,i.refreshIntervalSec),folderPreviewDepth:Vc(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:i.folderPreviewDepth,i.folderPreviewDepth)};if(sn(Pc,String(r.refreshIntervalSec)),sn(Tc,String(r.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(Es,{detail:{settings:r}}));return r}var Es="piclaw:workspace-client-settings-updated",Pc="workspaceRefreshIntervalSec",Tc="workspaceFolderPreviewDepth",Yr=60,Lr=3;var Xc=()=>{};var Mc={};un(Mc,{WorkspaceSection:()=>Ss});function Qc(n={}){let i=n.workspaceSettings||{};return{webTerminalEnabled:i.webTerminalEnabled!==!1,vncAllowDirect:i.vncAllowDirect!==!1,treeMaxDepth:i.treeMaxDepth??4,treeMaxEntries:i.treeMaxEntries??5000}}function Ss({settingsData:n,setStatus:i,mergeSettingsData:r}){let{t:_}=J(),[c,u]=w(!0),[f,g]=w(!0),[l,$]=w(4),[t,o]=w(5000),[b,p]=w(60),[k,h]=w(3),[z,y]=w(!1),[v,G]=w(!1),R=C(""),W=C(null),P=C(null),B=C(null),T=C(!0);q(()=>{return T.current=!0,()=>{if(T.current=!1,W.current)clearTimeout(W.current);if(P.current)clearTimeout(P.current);if(B.current)clearTimeout(B.current)}},[]);let K=U((H)=>{let V=Qc(H),D=Cr();u(V.webTerminalEnabled),g(V.vncAllowDirect),$(V.treeMaxDepth),o(V.treeMaxEntries),p(D.refreshIntervalSec),h(D.folderPreviewDepth),R.current=JSON.stringify(V)},[]);q(()=>{K(n||{})},[n,K]);let x=L(()=>JSON.stringify(Qc({workspaceSettings:{webTerminalEnabled:c,vncAllowDirect:f,treeMaxDepth:l,treeMaxEntries:t}})),[c,f,l,t]);q(()=>{if(x===R.current)return;if(W.current)clearTimeout(W.current);return W.current=setTimeout(async()=>{if(!T.current)return;let H=document.activeElement;if(H&&H.closest?.(".settings-number-stepper"))return;try{let V=await Vr(JSON.parse(x));if(!T.current||!V?.ok||!V?.settings)return;if(R.current=x,r?.({workspaceSettings:V.settings}),i?.(null),y(!0),P.current)clearTimeout(P.current);P.current=setTimeout(()=>{if(T.current)y(!1)},4000)}catch(V){i?.(String(V?.message||V),"error")}},800),()=>{if(W.current)clearTimeout(W.current)}},[x,r,i]);let Z=U((H)=>{let V=Nc(H);if(p(V.refreshIntervalSec),h(V.folderPreviewDepth),G(!0),B.current)clearTimeout(B.current);B.current=setTimeout(()=>{if(T.current)G(!1)},3000)},[]);return s`
        <div class="settings-section">
            ${z&&s`
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
                <input type="checkbox" checked=${c} onChange=${(H)=>u(H.target.checked)} />
            </div>
            <div class="settings-row">
                <label>${_("settings.workspace.allowVnc")}</label>
                <input type="checkbox" checked=${f} onChange=${(H)=>g(H.target.checked)} />
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
                    onChange=${$}
                />
                <span class="settings-hint" style="margin:0">${_("settings.workspace.maxDepthHintPre")} <code>/workspace/tree</code> ${_("settings.workspace.maxDepthHintPost")}</span>
            </div>
            <div class="settings-row">
                <label>${_("settings.workspace.maxEntries")}</label>
                <${nn}
                    label=${_("settings.workspace.maxEntriesAria")}
                    value=${t}
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
                    value=${b}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(H)=>Z({refreshIntervalSec:H})}
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
                    onChange=${(H)=>Z({folderPreviewDepth:H})}
                />
                <span class="settings-hint" style="margin:0">${_("settings.workspace.folderDepthHintPre")} <code>0</code> ${_("settings.workspace.folderDepthHintPost")}</span>
            </div>
            <p class="settings-hint">${_("settings.workspace.footerHint")}</p>
        </div>
    `}var qc=O(()=>{e();Kn();Xc();Sn();gn()});var Ac={};un(Ac,{EnvironmentSection:()=>ds});function Jr(n={}){let i=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(i.variables)?i.variables:[],overrides:i.overrides&&typeof i.overrides==="object"?i.overrides:{},count:Number(i.count||0),overrideCount:Number(i.overrideCount||0),keychainEnvNames:Array.isArray(i.keychainEnvNames)?i.keychainEnvNames:[]}}function ds({settingsData:n,filter:i="",setStatus:r,mergeSettingsData:_}){let{t:c}=J(),[u,f]=w(()=>Jr(n||{})),[g,l]=w({}),[$,t]=w(""),[o,b]=w(""),[p,k]=w(null);q(()=>{f(Jr(n||{})),l({})},[n]);let h=U((W)=>{let P=Jr({environmentSettings:W?.settings||W});return f(P),_?.({environmentSettings:P}),l({}),P},[_]),z=U(async()=>{try{let W=await Nr();if(W?.ok)h(W.settings);r?.(c("settings.environment.refreshedToast"),"info")}catch(W){r?.(String(W?.message||W),"error")}},[h,r]),y=U(async(W,P)=>{let B=String(W||"").trim();if(!B)return;k(B);try{let T=await Qi({action:"set",name:B,value:String(P??"")});if(T?.ok)h(T.settings);if(r?.(c("settings.environment.savedToast",{name:B}),"info"),B===$.trim())t(""),b("")}catch(T){r?.(String(T?.message||T),"error")}finally{k(null)}},[h,$,r]),v=U(async(W)=>{let P=String(W||"").trim();if(!P)return;k(P);try{let B=await Qi({action:"clear",name:P});if(B?.ok)h(B.settings);r?.(c("settings.environment.clearedToast",{name:P}),"info")}catch(B){r?.(String(B?.message||B),"error")}finally{k(null)}},[h,r]),G=L(()=>{let W=String(i||"").trim().toLowerCase(),P=Array.isArray(u.variables)?u.variables:[];if(!W)return P;return P.filter((B)=>{return`${B?.name||""} ${B?.value||""} ${B?.source||""}`.toLowerCase().includes(W)})},[u.variables,i]),R=U((W,P)=>{l((B)=>({...B||{},[W]:P}))},[]);return s`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">${c("settings.environment.heading")}</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        ${c("settings.environment.introPre")} <code>process.env</code>${c("settings.environment.introPost")}
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${z}>${c("settings.environment.refresh")}</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>${c("settings.environment.addOverride")}</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${$}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(W)=>t(W.target.value)}
                    />
                    <input
                        type="text"
                        value=${o}
                        placeholder=${c("settings.environment.valuePlaceholder")}
                        spellcheck="false"
                        onInput=${(W)=>b(W.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!$.trim()||p===$.trim()}
                        onClick=${()=>y($,o)}
                    >${c("settings.environment.save")}</button>
                </div>
            </div>

            <p class="settings-hint">
                ${c("settings.environment.countLine",{count:u.count,overrides:u.overrideCount,keychain:u.keychainEnvNames.length})}
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${G.map((W)=>{let P=String(W?.name||""),B=Object.prototype.hasOwnProperty.call(g,P)?g[P]:W.value,T=B!==W.value,K=p===P;return s`
                        <div class="settings-tool-row" key=${P} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${P}>${P}</span>
                            <input
                                type="text"
                                value=${B}
                                spellcheck="false"
                                onInput=${(x)=>R(P,x.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${W.overridden?c("settings.environment.overridden"):c("settings.environment.inherited")}>
                                ${W.overridden?c("settings.environment.kindOverride"):c("settings.environment.kindProcess")}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${K||!T} onClick=${()=>y(P,B)}>${c("settings.environment.save")}</button>
                                <button type="button" disabled=${K||!W.overridden} onClick=${()=>v(P)}>${c("settings.environment.clear")}</button>
                            </span>
                        </div>
                    `})}
                ${G.length===0&&s`<p class="settings-hint">${c("settings.environment.noMatch",{filter:i})}</p>`}
            </div>
        </div>
    `}var Zc=O(()=>{e();Kn();gn()});var Dc={};un(Dc,{ProvidersSection:()=>ms});function es(n){switch(n){case"oauth":return"OAuth";case"api_key":return Ti("settings.providers.authApiKey");case"custom":return Ti("settings.providers.authConfigured");default:return Ti("settings.providers.authConfigured")}}function ms({providers:n,setStatus:i}){let{t:r}=J(),[_,c]=w(null),[u,f]=w(null),[g,l]=w({}),$=U((y,v)=>{l((G)=>({...G,[y]:v}))},[]),t=U(async(y)=>{let v=(g.apiKey||"").trim();if(!v){i?.(r("settings.providers.apiKeyEmpty"),"error");return}c(y),i?.(r("settings.providers.configuringToast",{provider:y}),"info");try{let G=JSON.stringify({provider:y,method:"api_key",api_key:v}),R=await kn("default",`/login __step2 ${G}`,null,[]);if(R?.command?.status==="error"){i?.(R.command.message,"error");return}i?.(R?.command?.message||r("settings.providers.configured",{provider:y}),"success"),f(null),l({})}catch(G){i?.(String(G.message||G),"error")}finally{c(null)}},[g,i]),o=U(async(y,v)=>{c(y),i?.(r("settings.providers.configuringToast",{provider:y}),"info");try{let G={provider:y,method:"custom"};for(let P of v.customFields||[])G[P.key]=(g[P.key]||"").trim();let R=JSON.stringify(G),W=await kn("default",`/login __step2 ${R}`,null,[]);if(W?.command?.status==="error"){i?.(W.command.message,"error");return}i?.(W?.command?.message||r("settings.providers.configured",{provider:y}),"success"),f(null),l({})}catch(G){i?.(String(G.message||G),"error")}finally{c(null)}},[g,i]),b=U(async(y)=>{c(y),i?.(r("settings.providers.startingOAuth",{provider:y}),"info");try{let v=JSON.stringify({provider:y}),R=(await kn("default",`/login __step1 ${v}`,null,[]))?.command?.message||"";if(R.includes("http")){let W=R.match(/(https?:\/\/[^\s)]+)/);if(W)window.open(W[1],"_blank","noopener"),i?.(r("settings.providers.oauthOpened"),"success");else i?.(R,"success")}else i?.(R||r("settings.providers.oauthStarted",{provider:y}),"success")}catch(v){i?.(String(v.message||v),"error")}finally{c(null)}},[i]),p=U(async(y)=>{if(_)return;c(y),i?.(r("settings.providers.loggingOut",{provider:y}),"info");try{await kn("default",`/logout ${y}`,null,[]),i?.(r("settings.providers.loggedOut",{provider:y}),"success")}catch(v){i?.(String(v.message||v),"error")}finally{c(null)}},[_,i]),k=n||[],h=(y)=>u===y,z=(y)=>{f((v)=>v===y?null:y),l({})};return s`
        <div class="settings-section">
            <h3>${r("settings.providers.heading")}</h3>
            <div class="settings-provider-list">
                ${k.map((y)=>s`
                    <div class=${`settings-provider-card${y.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!y.configured&&z(y.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${y.name}</strong>
                                <span class="settings-provider-id">${y.id}</span>
                                ${y.configured&&s`<span class="settings-tag settings-tag-skill">${es(y.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${y.hasOAuth&&s`<span class="settings-tag">OAuth</span>`}
                                ${y.hasApiKey&&s`<span class="settings-tag">API Key</span>`}
                                ${y.isCustom&&s`<span class="settings-tag">${r("settings.providers.tagCustom")}</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${y.configured?s`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${_===y.id} onClick=${(v)=>{v.stopPropagation(),p(y.id)}}
                                    >${_===y.id?"…":r("settings.providers.logout")}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${_===y.id} onClick=${(v)=>{v.stopPropagation(),z(y.id)}}
                                    >${r("settings.providers.reconfigure")}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${_===y.id} onClick=${(v)=>{v.stopPropagation(),z(y.id)}}
                                    >${r("settings.providers.setUp")}</button>
                                `}
                            </div>
                        </div>

                        ${h(y.id)&&s`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">${r("settings.providers.setupHint")}</p>
                                ${y.hasOAuth&&s`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${_===y.id}
                                            onClick=${()=>b(y.id)}>
                                            ${_===y.id?r("settings.providers.starting"):r("settings.providers.signInOAuth")}
                                        </button>
                                    </div>
                                `}
                                ${y.hasApiKey&&s`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>${r("settings.providers.apiKeyLabel")}</label>
                                            <input type="password" value=${g.apiKey||""}
                                                onInput=${(v)=>$("apiKey",v.target.value)}
                                                placeholder=${y.apiKeyHint||r("settings.providers.apiKeyPlaceholder")} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${_===y.id||!(g.apiKey||"").trim()}
                                                onClick=${()=>t(y.id)}>
                                                ${_===y.id?"…":r("settings.providers.save")}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${y.isCustom&&s`
                                    <div class="settings-provider-method">
                                        ${(y.customFields||[]).map((v)=>s`
                                            <div class="settings-provider-field-row">
                                                <label>${v.label}${v.required?" *":""}</label>
                                                <input type="text" value=${g[v.key]||""}
                                                    onInput=${(G)=>$(v.key,G.target.value)}
                                                    placeholder=${v.placeholder||""} />
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
    `}var Ic=O(()=>{e();Kn();gn()});var Yc={};un(Yc,{ModelsSection:()=>_0});function i0(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function r0({thinkingLevel:n,supportsThinking:i,provider:r,availableLevels:_,onSetLevel:c,disabled:u}){let{t:f}=J(),g=i0(r)?as:n0,l=_&&_.length>1?_:["off","minimal","low","medium","high"],$=Math.max(0,l.indexOf(n??"off"));if(!i)return s`<div class="settings-thinking-slider"><label>${f("settings.models.thinkingLevel")}</label><p class="settings-hint" style="margin:4px 0 0">${f("settings.models.noThinking")}</p></div>`;return s`
        <div class="settings-thinking-slider">
            <label>${f("settings.models.thinkingLevelLabel")} <strong>${g[l[$]]||l[$]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${l.length-1} step="1" value=${$} disabled=${u}
                    onInput=${(t)=>c(l[parseInt(t.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${l.map((t,o)=>s`<span class=${o===$?"active":""} onClick=${()=>!u&&c(t)}>${g[t]||t}</span>`)}
                </div>
            </div>
        </div>
    `}function _0({filter:n=""}){let{t:i}=J(),[r,_]=w(null),[c,u]=w(!1),[f,g]=w("off"),[l,$]=w(!1),[t,o]=w(["off"]),[b,p]=w(!1),[k,h]=w(!1),[z,y]=w(!1),v=U(async()=>{let H=await Xr();if(_(H),H.thinking_level)g(H.thinking_level);if($(Boolean(H.supports_thinking)),p(Boolean(H.scoped_models_only)),Array.isArray(H.available_thinking_levels)&&H.available_thinking_levels.length>0)o(H.available_thinking_levels);return H},[]);q(()=>{v().catch((H)=>{console.warn("[settings/models] Failed to load models.",H),_({models:[],model_options:[]})})},[]);let G=U(async(H)=>{if(c)return;u(!0);try{await kn("default",`/model ${H}`,null,[]),await v()}catch(V){console.error("Failed to switch model:",V)}finally{u(!1)}},[c,v]),R=U(async(H)=>{if(k)return;h(!0),p(Boolean(H));try{let V=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scopedModelsOnly:Boolean(H)})}),D=await V.json().catch(()=>({}));if(!V.ok||!D?.ok)throw Error(D?.error||"Failed to save scoped model setting.");await v()}catch(V){console.error("Failed to set scoped model filtering:",V),await v().catch((D)=>{console.warn("[settings/models] Reload after scoped model filtering failure failed.",D)})}finally{h(!1)}},[k,v]),W=U(async(H)=>{if(z)return;y(!0),g(H);try{let V=await kn("default",`/thinking ${H}`,null,[]);if(V?.command?.thinking_level)g(V.command.thinking_level);$(V?.command?.supports_thinking!==!1),await v()}catch(V){console.error("Failed to set thinking:",V),await v().catch((D)=>{console.warn("[settings/models] Reload after thinking change failure failed.",D)})}finally{y(!1)}},[z,v]);if(!r)return s`<div class="settings-loading">${i("settings.models.loading")}</div>`;let P=r.model_options||[],B=r.current,K=P.find((H)=>H.label===B)?.provider||"",x=n.toLowerCase(),Z=x?P.filter((H)=>H.label.toLowerCase().includes(x)||(H.provider||"").toLowerCase().includes(x)):P;return s`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">${i("settings.models.summary")}</div>
            <div class="settings-row" style="padding:0 0 10px 0; align-items:flex-start">
                <label>${i("settings.models.scopedOnly")}</label>
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0">
                    <label style="display:flex; align-items:center; gap:8px; font-weight:500">
                        <input type="checkbox" checked=${b} disabled=${k} onChange=${(H)=>R(H.target.checked)} />
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
                        ${Z.map((H)=>s`
                            <tr class=${H.label===B?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${H.label===B} disabled=${c} onChange=${()=>G(H.label)} /></td>
                                <td>${H.name||H.label}</td><td>${H.provider}</td>
                                <td>${H.context_window?(H.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${H.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${Z.length===0&&s`<tr><td colspan="5" class="settings-empty">${i("settings.models.noMatch",{filter:n})}</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${r0}
                    thinkingLevel=${f}
                    supportsThinking=${l}
                    provider=${K}
                    availableLevels=${t}
                    onSetLevel=${W}
                    disabled=${z||c} />
            </div>
        </div>
    `}var as,n0;var Lc=O(()=>{e();Kn();gn();as={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},n0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function Sr(n){let i=String(n||"").trim().toLowerCase();if(!i)return"default";if(i==="solarized-dark"||i==="solarized-light")return"solarized";if(i==="github-dark"||i==="github-light")return"github";if(i==="tokyo-night")return"tokyo";return i}function Ec(n){if(!n)return null;let i=String(n).trim();if(!i)return null;let r=i.startsWith("#")?i.slice(1):i;if(!/^[0-9a-fA-F]{3}$/.test(r)&&!/^[0-9a-fA-F]{6}$/.test(r))return null;let _=r.length===3?r.split("").map((u)=>u+u).join(""):r,c=parseInt(_,16);return{r:c>>16&255,g:c>>8&255,b:c&255,hex:`#${_.toLowerCase()}`}}function u0(n,i){try{if(document.body){n.style.display="none",document.body.appendChild(n);let r=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),r}}catch{return i}return i}function f0(n){if(!n||typeof document>"u")return null;let i=String(n).trim();if(!i)return null;let r=document.createElement("div");if(r.style.color="",r.style.color=i,!r.style.color)return null;let c=u0(r,r.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!c)return null;let u=parseInt(c[1],10),f=parseInt(c[2],10),g=parseInt(c[3],10);if(![u,f,g].every(($)=>Number.isFinite($)))return null;let l=`#${[u,f,g].map(($)=>$.toString(16).padStart(2,"0")).join("")}`;return{r:u,g:f,b:g,hex:l}}function Mn(n){return Ec(n)||f0(n)}function dr(n,i,r){let _=Math.round(n.r+(i.r-n.r)*r),c=Math.round(n.g+(i.g-n.g)*r),u=Math.round(n.b+(i.b-n.b)*r);return`rgb(${_} ${c} ${u})`}function Ii(n,i){return`rgba(${n.r}, ${n.g}, ${n.b}, ${i})`}function s0(n){let i=n.r/255,r=n.g/255,_=n.b/255,c=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),u=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4),f=_<=0.03928?_/12.92:Math.pow((_+0.055)/1.055,2.4);return 0.2126*c+0.7152*u+0.0722*f}function g0(n){return s0(n)>0.4?"#000000":"#ffffff"}function Sc(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function er(n){return Cc[n]||Cc.default}function $0(n){return n.mode==="auto"?Sc():n.mode}function dc(n,i){let r=er(n);if(i==="dark"&&r.dark)return r.dark;if(i==="light"&&r.light)return r.light;return r.dark||r.light||zn}function Bn(n,i,r){let _=Mn(n);if(!_)return n;return dr(_,i,r)}function ec(n,i,r){let _=Mn(i);if(!_)return n;let u=Ec(r==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:Bn(n.bgPrimary,_,0.08),bgSecondary:Bn(n.bgSecondary,_,0.12),bgHover:Bn(n.bgHover,_,0.16),textPrimary:Bn(n.textPrimary,_,r==="dark"?0.08:0.06),textSecondary:Bn(n.textSecondary,_,r==="dark"?0.12:0.1),borderColor:Bn(n.borderColor,_,0.1),accent:_.hex,accentHover:u?dr(_,u,0.18):_.hex,warning:Bn(n.warning||zn.warning,_,0.14),danger:Bn(n.danger,_,0.16),success:Bn(n.success,_,0.16)}}function l0(n,i){let r=Mn(n?.warning);if(r)return r.hex;let _=Mn(i==="dark"?Ci.warning:zn.warning)||Mn(zn.warning),c=Mn(n?.accent);if(_&&c)return dr(_,c,i==="dark"?0.18:0.14);return i==="dark"?Ci.warning:zn.warning}function o0(n,i){if(typeof document>"u")return;let r=document.documentElement,_=n.accent,c=Mn(_),u=c?Ii(c,i==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,f=c?Ii(c,i==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",g=c?Ii(c,i==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",l=c?g0(c):i==="dark"?"#000000":"#ffffff",$=c?Ii(c,i==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",t=l0(n,i),o={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":_,"--accent-hover":n.accentHover||_,"--accent-color-alpha":$,"--accent-soft":f,"--accent-soft-strong":g,"--accent-contrast-text":l,"--warning-color":t,"--danger-color":n.danger||zn.danger,"--success-color":n.success||zn.success,"--search-highlight-color":u||"rgba(29, 155, 240, 0.2)"};Object.entries(o).forEach(([b,p])=>{if(p)r.style.setProperty(b,p)})}function w0(){if(typeof document>"u")return;let n=document.documentElement;c0.forEach((i)=>n.style.removeProperty(i))}function en(n,i={}){if(typeof document>"u")return null;let r=typeof i.id==="string"&&i.id.trim()?i.id.trim():null,_=r?document.getElementById(r):document.querySelector(`meta[name="${n}"]`);if(!_)_=document.createElement("meta"),document.head.appendChild(_);if(_.setAttribute("name",n),r)_.setAttribute("id",r);return _}function Jc(n){let i=Sr(qn?.theme||"default"),r=qn?.tint?String(qn.tint).trim():null,_=dc(i,n);if(i==="default"&&r)_=ec(_,r,n);if(_?.bgPrimary)return _.bgPrimary;return n==="dark"?Ci.bgPrimary:zn.bgPrimary}function y0(n,i){if(typeof document>"u")return;let r=en("theme-color",{id:"dynamic-theme-color"});if(r&&n)r.removeAttribute("media"),r.setAttribute("content",n);let _=en("theme-color",{id:"theme-color-light"});if(_)_.setAttribute("media","(prefers-color-scheme: light)"),_.setAttribute("content",Jc("light"));let c=en("theme-color",{id:"theme-color-dark"});if(c)c.setAttribute("media","(prefers-color-scheme: dark)"),c.setAttribute("content",Jc("dark"));let u=en("msapplication-TileColor");if(u&&n)u.setAttribute("content",n);let f=en("msapplication-navbutton-color");if(f&&n)f.setAttribute("content",n);let g=en("apple-mobile-web-app-status-bar-style");if(g)g.setAttribute("content",i==="dark"?"black-translucent":"default")}function t0(){if(typeof window>"u")return;let n={...qn,mode:Oc};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function x0(){if(typeof window>"u")return"web:default";try{let i=new URL(window.location.href).searchParams.get("chat_jid");return i&&i.trim()?i.trim():"web:default"}catch{return"web:default"}}function b0(n){if(typeof document>"u"||!n)return;let i=document.documentElement;if(i?.style)i.style.background=n;if(document.body?.style)document.body.style.background=n}function mr(n,i={}){if(typeof window>"u"||typeof document>"u")return;let r=Sr(n?.theme||"default"),_=n?.tint?String(n.tint).trim():null,c=er(r),u=$0(c),f=dc(r,u);qn={theme:r,tint:_},Oc=u;let g=document.documentElement;g.dataset.theme=u,g.dataset.colorTheme=r,g.dataset.tint=_?String(_):"",g.style.colorScheme=u;let l=f;if(r==="default"&&_)l=ec(f,_,u);if(r==="default"&&!_)w0();else o0(l,u);if(b0(l.bgPrimary),y0(l.bgPrimary,u),t0(),i.persist!==!1)if(sn(Er,r),_)sn(Li,_);else sn(Li,"")}function Yi(){if(er(qn.theme).mode!=="auto")return;mr(qn,{persist:!1})}function h0(){if(typeof window>"u")return;let n=Sr(Un(Er)||"default"),i=(()=>{let r=Un(Li);return r?r.trim():null})();mr({theme:n,tint:i},{persist:!1})}function N$(){if(typeof window>"u")return()=>{};if(h0(),window.matchMedia&&!Or){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Yi);else if(n.addListener)n.addListener(Yi);return Or=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Yi);else if(n.removeListener)n.removeListener(Yi);Or=!1}}return()=>{}}function ar(n){if(!n||typeof n!=="object")return;let i=x0(),r=n.chat_jid||n.chatJid||null,_=n.theme??n.name??n.colorTheme,c=n.tint??null;if(!r||r===i)mr({theme:_||"default",tint:c},{persist:!1});sn(Er,_||"default"),sn(Li,c||"")}function X$(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return Sc()}var Er="piclaw_theme",Li="piclaw_tint",zn,Ci,Cc,c0,qn,Oc="light",Or=!1;var mc=O(()=>{zn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Ci={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Cc={default:{label:"Default",mode:"auto",light:zn,dark:Ci},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},c0=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],qn={theme:"default",tint:null}});function v0(n){return q_.map((i)=>({value:i,label:A_[i],active:i===n}))}function ac({variant:n="inline",onChange:i}={}){let{locale:r,setLocale:_,t:c}=J(),u=v0(r),f=(g)=>{let l=g?.currentTarget?.value;_(l),i?.(l)};return s`
    <div class=${`language-switcher language-switcher-${n}`} role="none">
      <label class="language-switcher-label" for="language-switcher-select">${c("language.label")}</label>
      <select
        id="language-switcher-select"
        class="language-switcher-select"
        value=${r}
        aria-label=${c("language.label")}
        onClick=${(g)=>g.stopPropagation()}
        onChange=${f}
      >
        ${u.map((g)=>s`
          <option key=${g.value} value=${g.value}>${g.label}</option>
        `)}
      </select>
    </div>
  `}var nu=O(()=>{e();gn()});var ru={};un(ru,{ThemeSection:()=>p0});function iu(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function p0({themes:n,colorKeys:i,settingsData:r,setStatus:_,mergeSettingsData:c}){let{t:u}=J(),[f,g]=w("default"),[l,$]=w(""),[t,o]=w(!1),b=C(""),p=C(null),k=C(!0);q(()=>{return k.current=!0,()=>{k.current=!1}},[]);let h=U((R)=>{let W=iu(R);g(W.uiTheme),$(W.uiTint),b.current=JSON.stringify(W)},[]);q(()=>{if(r){h(r);return}h({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[r,h]);let z=U((R,W)=>{ar({theme:R,tint:W||null}),g(R||"default"),$(W||"")},[]),y=L(()=>JSON.stringify(iu({uiTheme:f,uiTint:l})),[f,l]);q(()=>{if(y===b.current)return;if(p.current)clearTimeout(p.current);return p.current=setTimeout(async()=>{if(!k.current)return;o(!0);try{let R=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),W=await R.json().catch(()=>({}));if(!k.current)return;if(!R.ok||!W?.ok||!W?.settings){_?.(W?.error||"Failed to save appearance settings.","error");return}b.current=y,c?.(W.settings),_?.("Appearance synced across clients.","success")}catch(R){if(!k.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",R),_?.("Failed to save appearance settings.","error")}finally{if(k.current)o(!1)}},250),()=>{if(p.current)clearTimeout(p.current)}},[y,c,_]);let v=i||[],G=n||[];return s`
        <div class="settings-section">
            <div class="settings-row settings-language-row">
                <${ac} variant="inline" />
            </div>
            ${t&&s`<div class="settings-hint" style="margin:0 0 12px 0;">${u("settings.appearance.syncing")}</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${f==="default"}
                        onChange=${()=>z("default",l)} />
                    <strong>${u("settings.appearance.default")}</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">${u("settings.appearance.autoLightDark")}</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">${u("settings.appearance.tint")}</label>
                    <input type="color"
                        value=${l||"#1d9bf0"}
                        onInput=${(R)=>{let W=R.target.value;if($(W),f==="default")ar({theme:"default",tint:W})}} />
                    ${l&&s`
                        <button class="settings-tint-clear" onClick=${()=>z("default","")}
                            title=${u("settings.appearance.clearTint")}>\u2715</button>
                    `}
                    <span class="settings-tint-hex">${l||u("settings.appearance.none")}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${v.map((R)=>s`<th class="settings-swatch-header">${R.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${G.filter((R)=>R.name!=="default").map((R)=>s`
                        <tr class=${R.name===f?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>z(R.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${R.name===f} onChange=${()=>z(R.name,"")} /></td>
                            <td><strong>${R.label}</strong></td>
                            <td>${R.mode}</td>
                            ${v.map((W)=>{let P=R.colors?.[W];return s`<td class="settings-swatch-cell">
                                    ${P?s`<span class="settings-color-swatch" style=${"background:"+P} title=${P}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var _u=O(()=>{e();mc();nu();gn()});var uu={};un(uu,{__scheduledTasksSettingsTest:()=>F0,ScheduledTasksSection:()=>H0});function An(n){if(!n)return"—";let i=new Date(n);if(Number.isNaN(i.getTime()))return n;return i.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function cu(n){let i=Number(n);if(!Number.isFinite(i))return"—";if(i<1000)return`${Math.round(i)}ms`;return`${(i/1000).toFixed(i<1e4?1:0)}s`}function n_(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${An(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function i_(n){let i=n?.task_kind||"agent";return i==="internal"?"internal/protected":i}function r_(n){return(n?.task_kind||"agent")==="internal"}function K0(n){if(!n)return"";let i=String(n).replace(/\s+/g," ").trim();return i.length>180?`${i.slice(0,179)}…`:i}function mn({children:n,type:i="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${i}`}>${n}</span>`}function B0({task:n}){let i=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!i.length)return s`<p class="settings-hint">No run logs recorded yet.</p>`;return s`
        <div class="settings-task-run-list">
            ${i.map((r)=>s`
                <div class=${`settings-task-run-row settings-task-run-${r.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${mn} type=${r.status==="error"?"error":"success"}>${r.status||"unknown"}<//>
                        <span>${An(r.run_at)}</span>
                        <span>${cu(r.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${r.error_summary||K0(r.error)||r.result_summary||r.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function z0({task:n,onAction:i}){if(!n)return s`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let r=r_(n);return s`
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
            <${B0} task=${n} />
        </div>
    `}function H0({filter:n="",setStatus:i}){let[r,_]=w([]),[c,u]=w({active:0,paused:0,completed:0}),[f,g]=w("all"),[l,$]=w(""),[t,o]=w(!0),[b,p]=w(null),[k,h]=w(null),[z,y]=w(null),[v,G]=w(!1),R=U(async(K={})=>{o(!0),p(null);try{let x=await Kr({status:f,chatJid:l.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});_(x.tasks||[]),u(x.counts||{active:0,paused:0,completed:0});let Z=K.selectedId||k,H=(x.tasks||[]).find((V)=>V.id===Z)||(x.tasks||[])[0]||null;h(H?.id||null),y(H)}catch(x){p(x?.message||"Failed to load scheduled tasks.")}finally{o(!1)}},[f,l,k]);q(()=>{R()},[R]);let W=String(n||"").trim().toLowerCase(),P=L(()=>{if(!W)return r;return r.filter((K)=>[K.id,K.chat_jid,K.status,K.task_kind,K.schedule_type,K.schedule_value,K.summary,K.prompt_summary,K.command_summary,K.latest_run_log?.error_summary].some((x)=>String(x||"").toLowerCase().includes(W)))},[r,W]),B=U((K)=>{h(K?.id||null),y(K||null)},[]),T=U(async(K,x)=>{if(!x||v)return;let Z=r_(x),H=x.summary||x.command_summary||x.prompt_summary||x.id,V=K==="delete"?`Delete scheduled task ${x.id}?

${H}`:`${K==="pause"?"Pause":"Resume"} scheduled task ${x.id}?

${H}`;if(!window.confirm(V))return;if(Z&&!window.confirm(`Task ${x.id} is internal/protected. Continue with ${K}?`))return;G(!0),i?.(`${K==="delete"?"Deleting":K==="pause"?"Pausing":"Resuming"} ${x.id}…`,"info");try{await Br(K,x.id,{allowInternal:Z}),i?.(`Scheduled task ${x.id} ${K==="delete"?"deleted":K==="pause"?"paused":"resumed"}.`,"success"),await R({selectedId:K==="delete"?null:x.id})}catch(D){i?.(D?.message||`Failed to ${K} task.`,"error")}finally{G(!1)}},[v,R,i]);return s`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${mn} type="active">Active ${c.active||0}<//>
                    <${mn} type="paused">Paused ${c.paused||0}<//>
                    <${mn} type="completed">Completed ${c.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${f} onChange=${(K)=>g(K.target.value)}>
                        ${k0.map((K)=>s`<option value=${K}>${K==="all"?"All statuses":K}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${l} onInput=${(K)=>$(K.target.value)} />
                    <button onClick=${()=>R()} disabled=${t}>Refresh</button>
                </div>
            </div>

            ${t&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${b&&s`<div class="settings-error-state">${b}</div>`}
            ${!t&&!b&&r.length===0&&s`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/r`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!t&&!b&&r.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${P.map((K)=>s`
                            <button class=${`settings-task-row ${K.id===k?"active":""}`} onClick=${()=>B(K)}>
                                <span class="settings-task-row-main">
                                    <strong>${K.summary||K.id}</strong>
                                    <span>${n_(K)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${mn} type=${K.status||"neutral"}>${K.status}<//>
                                    <${mn}>${i_(K)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${An(K.next_run)} · Last ${An(K.last_run)}${K.latest_run_log?.status?` · ${K.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${P.length===0&&s`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${z0} task=${z&&P.some((K)=>K.id===z.id)?z:P[0]} onAction=${T} />
                </div>
            `}
        </div>
    `}var k0,F0;var fu=O(()=>{e();Kn();k0=["all","active","paused","completed"];F0={formatDateTime:An,formatDuration:cu,labelForSchedule:n_,kindLabel:i_,isProtectedTask:r_}});function su(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function an(n){return typeof n==="string"&&n.trim().length>0}function __(n,...i){let r=su(n);if(!r)return!0;let _=i.map((c)=>su(c)).filter(Boolean);for(let c of _)if(c.startsWith(r)||c.includes(r))return!0;return!1}function gu(n){if(!Array.isArray(n))return null;let i=[],r=new Set;for(let _ of n){let c=String(_||"").trim();if(!c)continue;let u=c.toLowerCase();if(r.has(u))continue;r.add(u),i.push(c)}return i}function ti(n){let i=n&&typeof n==="object"?n:{};return{workspaceCommands:gu(i.workspaceCommands),slashCommands:gu(i.slashCommands)}}function $u(n,i){if(!Array.isArray(n))return!0;return n.some((r)=>r.toLowerCase()===i.toLowerCase())}function W0(n){let i=Array.isArray(n?.commands)?n.commands:[],r=ti(n?.settings),_=String(n?.query||"");return i.filter((c)=>$u(r.workspaceCommands,c.id)).filter((c)=>__(_,c.label,c.description,...c.keywords||[])).map((c)=>({key:`workspace:${c.id}`,kind:"workspace",title:c.label,subtitle:c.description,searchText:`${c.label} ${c.description} ${(c.keywords||[]).join(" ")}`.trim(),visualHint:c.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:c.id}))}function j0(n){let i=Array.isArray(n?.agents)?n.agents:[],r=String(n?.query||""),_=new Set;return i.filter((c)=>{let u=an(c?.chat_jid)?c.chat_jid.trim():"";if(!u||_.has(u))return!1;if(c?.archived_at)return!1;return _.add(u),!0}).filter((c)=>__(r,`@${String(c?.agent_name||"").trim()}`,c?.session_name,c?.chat_jid)).map((c)=>{let u=an(c?.agent_name)?c.agent_name.trim():String(c?.chat_jid||"").replace(/^[^:]+:/,""),f=an(c?.session_name)?c.session_name.trim():"",g=String(c?.chat_jid||"").trim();return{key:`agent:${g}`,kind:"agent",title:`@${u}`,subtitle:f||g,searchText:`@${u} ${f} ${g}`.trim(),visualHint:u.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:g}})}function U0(n){let i=Array.isArray(n?.slashCommands)?n.slashCommands:[],r=ti(n?.settings),_=String(n?.query||""),c=new Set;return i.filter((u)=>{let f=an(u?.name)?u.name.trim():"";if(!f||c.has(f.toLowerCase()))return!1;return c.add(f.toLowerCase()),$u(r.slashCommands,f)}).filter((u)=>__(_,u?.name,u?.description,u?.source)).map((u)=>{let f=String(u?.name||"").trim(),g=an(u?.description)?u.description.trim():"slash command",l=an(u?.source)?u.source.trim():"";return{key:`slash:${f}`,kind:"slash",title:f,subtitle:g,searchText:`${f} ${g} ${String(u?.source||"")}`.trim(),visualHint:"/",categoryLabel:l||"Slash",actionHint:"Insert",commandName:f}})}function J$(n){return[...j0({agents:n?.agents,query:n?.query}),...W0({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...U0({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var ni;var lu=O(()=>{ni=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var yu={};un(yu,{QuickActionsSection:()=>R0});function ou(n,...i){let r=String(n||"").trim().toLowerCase();if(!r)return!0;return i.some((_)=>String(_||"").toLowerCase().includes(r))}function wu(n){if(!Array.isArray(n))return null;return new Set(n.map((i)=>String(i||"").trim().toLowerCase()).filter(Boolean))}function R0({filter:n="",setStatus:i,mergeSettingsData:r}){let{t:_}=J(),[c,u]=w(()=>ni.map((B)=>B.id)),[f,g]=w([]),[l,$]=w([]),[t,o]=w(!0),[b,p]=w(!1),k=U(async()=>{o(!0);try{let[B,T]=await Promise.all([Tr(),Pr("web:default").catch(()=>({commands:[]}))]),K=ti(B?.settings),x=Array.isArray(T?.commands)?T.commands:[];$(x),u(Array.isArray(K.workspaceCommands)?K.workspaceCommands:ni.map((Z)=>Z.id)),g(Array.isArray(K.slashCommands)?K.slashCommands:x.map((Z)=>String(Z?.name||"").trim()).filter(Boolean))}catch(B){i?.(String(B?.message||B),"error")}finally{o(!1)}},[i]);q(()=>{k()},[k]);let h=L(()=>wu(c),[c]),z=L(()=>wu(f),[f]),y=L(()=>ni.filter((B)=>ou(n,B.label,B.description,...B.keywords||[])),[n]),v=L(()=>l.filter((B)=>ou(n,B?.name,B?.description,B?.source)),[l,n]),G=U((B)=>{u((T)=>{let K=new Set((Array.isArray(T)?T:[]).map((x)=>String(x||"").trim()).filter(Boolean));if(K.has(B))K.delete(B);else K.add(B);return ni.map((x)=>x.id).filter((x)=>K.has(x))})},[]),R=U((B)=>{g((T)=>{let K=new Set((Array.isArray(T)?T:[]).map((x)=>String(x||"").trim()).filter(Boolean));if(K.has(B))K.delete(B);else K.add(B);return l.map((x)=>String(x?.name||"").trim()).filter((x)=>x&&K.has(x))})},[l]),W=U(()=>{u(ni.map((B)=>B.id)),g(l.map((B)=>String(B?.name||"").trim()).filter(Boolean))},[l]),P=U(async()=>{if(b)return;p(!0),i?.(_("settings.quickActions.savingToast"),"info");try{let B=await Gr({workspaceCommands:c,slashCommands:f}),T=ti(B?.settings);r?.({quickActions:T}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:T}})),i?.(_("settings.quickActions.savedToast"),"success")}catch(B){i?.(String(B?.message||B),"error")}finally{p(!1)}},[r,b,i,f,c]);if(t)return s`<div class="settings-loading">${_("settings.quickActions.loading")}</div>`;return s`
        <div class="settings-section">
            <h3>${_("settings.quickActions.heading")}</h3>
            <p class="settings-hint">
                ${_("settings.quickActions.intro")}
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${W} disabled=${b}>${_("settings.quickActions.enableAll")}</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${P} disabled=${b}>
                    ${b?_("settings.quickActions.saving"):_("settings.quickActions.saveApply")}
                </button>
            </div>

            <h3 style="margin-top:8px;">${_("settings.quickActions.workspaceCommands")}</h3>
            <div class="settings-subsection-list">
                ${y.map((B)=>{let T=h?h.has(B.id.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${B.id}>
                            <input type="checkbox" checked=${T} onChange=${()=>G(B.id)} />
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
                ${v.map((B)=>{let T=String(B?.name||"").trim(),K=z?z.has(T.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${T}>
                            <input type="checkbox" checked=${K} onChange=${()=>R(T)} />
                            <div>
                                <div><code>${T}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${B?.description||_("settings.quickActions.slashFallback")}</div>
                            </div>
                        </label>
                    `})}
                ${v.length===0&&s`<div class="settings-hint">${_("settings.quickActions.noSlashMatch")}</div>`}
            </div>
        </div>
    `}var tu=O(()=>{e();Kn();lu();gn()});var xu={};un(xu,{KeychainSection:()=>G0});function P0(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function G0({filter:n=""}){let[i,r]=w([]),[_,c]=w(!0),[u,f]=w(null),[g,l]=w(!1),[$,t]=w(""),[o,b]=w(""),[p,k]=w(""),[h,z]=w(""),[y,v]=w(""),[G,R]=w("secret"),[W,P]=w(!1),[B,T]=w({}),[K,x]=w(null),[Z,H]=w(null),[V,D]=w(null),F=C(null),X=C(null),Y=C(null),E=U(async()=>{c(!0),f(null);try{let I=await(await fetch("/agent/keychain")).json();if(I?.ok)r(I.entries||[]);else f(I?.error||"Failed to load keychain.")}catch(j){f("Failed to load keychain.")}finally{c(!1)}},[]);q(()=>{E()},[E]);let _n=U(async()=>{let j=$.trim(),I=o;if(!j||!I)return;P(!0);try{let on=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j,secret:I,type:G,username:p.trim()||void 0,userNote:h,agentNote:y})})).json();if(on?.ok)t(""),b(""),k(""),z(""),v(""),R("secret"),l(!1),await E();else f(on?.error||"Failed to add entry.")}catch{f("Failed to add entry.")}finally{P(!1)}},[$,o,p,h,y,G,E]),ln=U(async(j)=>{try{let cn=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j})})).json();if(cn?.ok)H(null),D((on)=>on?.name===j?null:on),await E();else f(cn?.error||"Failed to delete entry.")}catch{f("Failed to delete entry.")}},[E]),tn=U(async(j)=>{let I=j?.name;if(!I)return;let cn=B[I]||{},on=Object.prototype.hasOwnProperty.call(cn,"userNote")?cn.userNote:j.userNote||"",yn=Object.prototype.hasOwnProperty.call(cn,"agentNote")?cn.agentNote:j.agentNote||"";x(I);try{let Pn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I,userNote:on,agentNote:yn})})).json();if(Pn?.ok)T((hi)=>{let ri={...hi||{}};return delete ri[I],ri}),await E();else f(Pn?.error||"Failed to save notes.")}catch{f("Failed to save notes.")}finally{x(null)}},[B,E]),Hn=U((j,I,cn)=>{T((on)=>({...on||{},[j]:{...(on||{})[j]||{},[I]:cn}}))},[]),Q=U(async(j,I,cn)=>{try{let yn=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j,master_password:I||void 0,totp_code:cn||void 0})})).json();if(yn?.ok)D({name:j,phase:"revealed",secret:yn.secret,username:yn.username,masterPassword:I});else if(yn?.needs_master_password)D((hn)=>({name:j,phase:"password",masterPassword:"",error:hn?.name===j&&hn?.masterPassword?yn.error:null})),requestAnimationFrame(()=>X.current?.focus());else if(yn?.needs_totp)D((hn)=>({name:j,phase:"totp",masterPassword:I,totpCode:"",error:hn?.name===j&&hn?.phase==="totp"&&hn?.totpCode?yn.error:null})),requestAnimationFrame(()=>Y.current?.focus());else D({name:j,phase:"error",error:yn?.error||"Failed to reveal."})}catch{D({name:j,phase:"error",error:"Failed to reveal."})}},[]),M=U((j)=>{if(V?.name===j&&V?.phase==="revealed"){D(null);return}Q(j,null,null)},[V,Q]),$n=U((j)=>{let I=V?.masterPassword||"";if(!I)return;Q(j,I,null)},[V,Q]),N=U((j)=>{let I=V?.totpCode||"";if(I.length<6)return;Q(j,V?.masterPassword,I)},[V,Q]),m=U(async(j)=>{try{await navigator.clipboard.writeText(j)}catch{let I=document.createElement("textarea");I.value=j,I.style.position="fixed",I.style.opacity="0",document.body.appendChild(I),I.select(),document.execCommand("copy"),document.body.removeChild(I)}},[]);q(()=>{if(g)requestAnimationFrame(()=>F.current?.focus())},[g]);let fn=n.toLowerCase(),Fn=L(()=>{if(!fn)return i;return i.filter((j)=>j.name.toLowerCase().includes(fn)||(j.type||"").toLowerCase().includes(fn)||(j.envVar||"").toLowerCase().includes(fn)||(j.userNote||"").toLowerCase().includes(fn)||(j.agentNote||"").toLowerCase().includes(fn))},[i,fn]);if(_)return s`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return s`
        <div class="settings-section">
            ${u&&s`
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
                <button class="settings-keychain-add-btn" onClick=${()=>l(!g)}>
                    ${g?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${g&&s`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${F} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${$} onInput=${(j)=>t(j.target.value)}
                            class="settings-keychain-input" />
                        <select value=${G} onChange=${(j)=>R(j.target.value)}
                            class="settings-keychain-select">
                            ${T0.map((j)=>s`<option value=${j}>${j}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${o} onInput=${(j)=>b(j.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${p} onInput=${(j)=>k(j.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${_n}
                            disabled=${W||!$.trim()||!o}>
                            ${W?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${h} onInput=${(j)=>z(j.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${y} onInput=${(j)=>v(j.target.value)}
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
                        ${Fn.length===0&&s`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${fn?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${Fn.map((j)=>{let I=V?.name===j.name?V:null,cn=I?.phase==="revealed",on=I?.phase==="password",yn=I?.phase==="totp",hn=I?.phase==="error",Pn=B[j.name]||{},hi=Object.prototype.hasOwnProperty.call(Pn,"userNote")?Pn.userNote:j.userNote||"",ri=Object.prototype.hasOwnProperty.call(Pn,"agentNote")?Pn.agentNote:j.agentNote||"",Tu=hi!==(j.userNote||"")||ri!==(j.agentNote||""),$_=K===j.name;return s`
                            <tr class="settings-keychain-row" key=${j.name}>
                                <td class="settings-keychain-name">${j.name}</td>
                                <td><span class="settings-keychain-type-badge">${j.type}</span></td>
                                <td class="settings-keychain-env">${j.envVar?s`<code>$${j.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${P0(j.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${cn?" active":""}`}
                                        onClick=${()=>M(j.name)}
                                        title=${cn?"Hide secret":"Reveal secret"}>
                                        ${cn?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${Z===j.name?s`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>ln(j.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>H(null)}>No</button>
                                            </span>
                                        `:s`<button class="settings-keychain-delete-btn" onClick=${()=>H(j.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${j.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${hi}
                                                onInput=${(wn)=>Hn(j.name,"userNote",wn.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${ri}
                                                onInput=${(wn)=>Hn(j.name,"agentNote",wn.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!Tu||$_} onClick=${()=>tn(j)}>
                                            ${$_?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${on&&s`
                                <tr class="settings-keychain-prompt-row" key=${j.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${X} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${I?.masterPassword||""}
                                                onInput=${(wn)=>D((ei)=>({...ei,masterPassword:wn.target.value}))}
                                                onKeyDown=${(wn)=>{if(wn.key==="Enter")$n(j.name);if(wn.key==="Escape")D(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>$n(j.name)}
                                                disabled=${!I?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>D(null)}>Cancel</button>
                                            ${I?.error&&s`<span class="settings-keychain-prompt-error">${I.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${yn&&s`
                                <tr class="settings-keychain-prompt-row" key=${j.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${Y} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${I?.totpCode||""}
                                                onInput=${(wn)=>D((ei)=>({...ei,totpCode:wn.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(wn)=>{if(wn.key==="Enter")N(j.name);if(wn.key==="Escape")D(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>N(j.name)}
                                                disabled=${(I?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>D(null)}>Cancel</button>
                                            ${I?.error&&s`<span class="settings-keychain-prompt-error">${I.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${cn&&s`
                                <tr class="settings-keychain-reveal-row" key=${j.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${I.username&&s`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${I.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>m(I.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${I.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>m(I.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${hn&&s`
                                <tr class="settings-keychain-reveal-row" key=${j.name+"-error"}>
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
    `}var T0;var bu=O(()=>{e();T0=["secret","token","password","basic"]});var hu={};un(hu,{ToolsSection:()=>M0});function M0({toolsets:n,filter:i="",settingsData:r,mergeSettingsData:_}){let{t:c}=J(),u=n||[],[f,g]=w(()=>{let h={};for(let z of u)h[z.name]=!0;return h}),l=U((h)=>{g((z)=>({...z,[h]:!z[h]}))},[]),$=r?.searchMatchMode||"or",t=L(()=>{let h=Array.isArray(r?.toolResultCompactionTools)?r.toolResultCompactionTools:[];return new Set(h.filter((z)=>typeof z==="string").map((z)=>z.trim().toLowerCase()).filter(Boolean))},[r?.toolResultCompactionTools]),o=U(async()=>{let h=$==="or"?"and":"or";try{let y=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:h})})).json().catch(()=>({}));if(y?.ok&&y?.settings)_?.(y.settings)}catch(z){console.warn("[settings/tools] Failed to save search match mode.",z)}},[$,_]),b=U(async(h)=>{let z=String(h||"").trim().toLowerCase();if(!z)return;let y=new Set(t);if(y.has(z))y.delete(z);else y.add(z);try{let G=await(await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toolResultCompactionTools:Array.from(y).sort()})})).json().catch(()=>({}));if(G?.ok&&G?.settings)_?.(G.settings)}catch(v){console.warn("[settings/tools] Failed to save tool compaction settings.",v)}},[t,_]),p=i.toLowerCase(),k=L(()=>{if(!p)return u;return u.map((h)=>{let z=h.tools.filter((y)=>y.name.toLowerCase().includes(p)||h.name.toLowerCase().includes(p)||(y.summary||"").toLowerCase().includes(p));return z.length>0?{...h,tools:z}:null}).filter(Boolean)},[u,p]);if(u.length===0)return s`<div class="settings-section"><p class="settings-hint">${c("settings.tools.unavailable")}</p></div>`;return s`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">${c("settings.tools.search")}</h4>
                <div class="settings-row">
                    <label>${c("settings.tools.matchMode")}</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${$==="and"} onChange=${o} />
                        <span class="settings-hint" style="margin:0">
                            ${$==="or"?c("settings.tools.orMode"):c("settings.tools.andMode")}
                        </span>
                    </div>
                </div>
            </div>
            ${k.map((h)=>{let z=f[h.name]!==!1;return s`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${z} onChange=${()=>l(h.name)} />
                            <span class="settings-toolset-icon">${V0[h.name]||Q0}</span>
                            <strong>${h.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${h.description}</span>
                    </div>
                    ${z&&s`<div class="settings-tool-list">
                        <div class="settings-tool-row settings-tool-row-header" aria-hidden="true">
                            <span class="settings-tool-status-header">${c("settings.tools.colEnabled")}</span>
                            <span class="settings-tool-name">${c("settings.tools.colTool")}</span>
                            <span class="settings-tool-compact-header">${c("settings.tools.colCompact")}</span>
                            <span class="settings-tool-kind">${c("settings.tools.colKind")}</span>
                            <span class="settings-tool-summary">${c("settings.tools.colSummary")}</span>
                            <span class="settings-tool-source">${c("settings.tools.colSource")}</span>
                        </div>
                        ${h.tools.map((y)=>{let v=String(y.name||"").trim().toLowerCase(),G=t.has(v);return s`
                                <div class="settings-tool-row">
                                    <input type="checkbox" checked disabled />
                                    <span class="settings-tool-name">${y.name}</span>
                                    <span class="settings-tool-compact">
                                        <input
                                            type="checkbox"
                                            checked=${G}
                                            onChange=${()=>b(y.name)}
                                            title=${G?c("settings.tools.disableCompaction"):c("settings.tools.enableCompaction")}
                                        />
                                    </span>
                                    <span class="settings-tool-kind" title=${y.kind}>${X0[y.kind]||"?"}</span>
                                    ${y.summary&&s`<span class="settings-tool-summary">${y.summary}</span>`}
                                    ${!y.summary&&s`<span class="settings-tool-summary"></span>`}
                                    <span class="settings-tool-source">${N0[y.name]||h.name}</span>
                                </div>
                            `})}
                    </div>`}
                </div>
            `})}
            ${k.length===0&&s`<p class="settings-hint">${c("settings.tools.noMatch",{filter:i})}</p>`}
            <p class="settings-hint">${c("settings.tools.footer")}</p>
        </div>
    `}var V0,N0,X0,Q0;var vu=O(()=>{e();gn();V0={core:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},N0={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},X0={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},Q0=s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var pu={};un(pu,{AddonsSection:()=>q0});function q0({setStatus:n,filter:i=""}){let{t:r}=J(),[_,c]=w(null),[u,f]=w(!0),[g,l]=w(null),[$,t]=w(!1),[o,b]=w({runtime:"",windowsNative:!1}),[p,k]=w([]),[h,z]=w([]);function y(){let x=new URLSearchParams;try{let H=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),V=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((F)=>F.trim()).filter(Boolean),D=localStorage.getItem("piclaw_addons_repo_url");if(H)x.append("catalog_url",H);for(let F of V)x.append("catalog_url",F);if(D)x.set("repo_url",D)}catch(H){}let Z=x.toString();return Z?`?${Z}`:""}let v=U(async()=>{try{let[x,Z]=await Promise.all([fetch(`/agent/addons${y()}`),fetch("/agent/settings-data")]),H=await x.json();if(H.error)throw Error(H.error);c(H.addons||[]),k(H.sources||[]),z(H.failed_sources||[]);let V=await Z.json().catch(()=>({})),D=typeof V?.runtimePlatform==="string"?V.runtimePlatform:"";b({runtime:D,windowsNative:D==="win32"})}catch(x){c(null),n?.(String(x.message||x),"error")}finally{f(!1)}},[n]);q(()=>{v()},[]);let G=U(async(x)=>{if(g)return;l({slug:x,action:"install"}),n?.(r("settings.addons.installing",{slug:x}),"info");try{let H=await(await fetch(`/agent/addons/install${y()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:x})})).json();if(H.error){n?.(H.error,"error");return}t(!0);let V=[H.message,H.warning].filter(Boolean).join(" ");n?.(V||r("settings.addons.installedToast"),"success"),await v()}catch(Z){n?.(String(Z.message||Z),"error")}finally{l(null)}},[g,v,n]),R=U(async(x)=>{if(g)return;l({slug:x,action:"remove"}),n?.(r("settings.addons.removing",{slug:x}),"info");try{let H=await(await fetch(`/agent/addons/uninstall${y()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:x})})).json();if(H.error){n?.(H.error,"error");return}t(!0);let V=[H.message,H.warning].filter(Boolean).join(" ");n?.(V||r("settings.addons.removedToast"),"success"),await v()}catch(Z){n?.(String(Z.message||Z),"error")}finally{l(null)}},[g,v,n]),W=U(async()=>{if(g)return;l({slug:null,action:"restart"}),n?.(r("settings.addons.restarting"),"info");try{let Z=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(Z.error){n?.(Z.error,"error"),l(null);return}n?.(Z.message||r("settings.addons.restarting"),"success"),t(!1),(async(V=30,D=2000)=>{for(let F=0;F<V;F++){await new Promise((X)=>setTimeout(X,D));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await v(),l(null),n?.(r("settings.addons.restartComplete"),"success");return}}catch(X){}}l(null),n?.(r("settings.addons.restartTimeout"),"warning")})()}catch(x){n?.(String(x.message||x),"error"),l(null)}},[g,n,v]);if(u)return s`<div class="settings-loading">${r("settings.addons.fetching")}</div>`;if(!_)return s`<div class="settings-section"><p class="settings-hint">${r("settings.addons.loadFailed")}</p></div>`;let P=i.toLowerCase(),B=P?_.filter((x)=>x.slug.toLowerCase().includes(P)||(x.description||"").toLowerCase().includes(P)||(x.tags||[]).some((Z)=>Z.toLowerCase().includes(P))):_,T=g?.slug||null,K=g?g.action==="remove"?r("settings.addons.removing",{slug:g.slug}):g.action==="restart"?r("settings.addons.restarting"):r("settings.addons.installing",{slug:g.slug}):"";return s`
        <div class=${`settings-section settings-addon-panel${g?" busy":""}`} aria-busy=${g?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${p.length<=1?s`${r("settings.addons.catalogFromPre")} <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:s`${r("settings.addons.catalogMerged",{count:p.length})}`}
                        ${" "}${r("settings.addons.installNote")}
                    </p>
                    ${h.length>0&&s`
                        <div class="settings-addon-error" role="alert">
                            ${h.length>1?r("settings.addons.failedFetchPlural",{count:h.length}):r("settings.addons.failedFetchSingular",{count:h.length})}
                            ${h.map((x)=>s` <code style="font-size:0.82em;word-break:break-all">${x}</code>`)}
                        </div>
                    `}
                    ${p.length>1&&s`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">${r("settings.addons.activeSources",{count:p.length})}</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${p.map((x)=>s`<li style="word-break:break-all"><code>${x}</code></li>`)}
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
                ${g&&s`
                    <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${K}>
                        <div class="settings-addon-panel-overlay-card">
                            <div class="settings-spinner"></div>
                            <span>${K}</span>
                        </div>
                    </div>
                `}
                ${B.map((x)=>{let Z=(x.skills||[]).length>0,H=x.type==="extension",V=Z&&H?r("settings.addons.typeExtSkill"):Z?r("settings.addons.typeSkill"):r("settings.addons.typeExt"),D=Z&&!H?"settings-tag-skill":"",F=typeof x.homepage==="string"&&x.homepage.trim()?x.homepage.trim():"";return s`
                    <div class=${`settings-addon-card${x.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${F?s`<a class="settings-addon-name-link" href=${F} target="_blank" rel="noopener noreferrer">${x.slug}</a>`:s`<strong>${x.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${D}`}>${V}</span>
                            <span class="settings-addon-version">${x.installed?x.installedVersion||"?":x.version||""}</span>
                            ${x.installKind&&s`<span class="settings-tag">${x.installKind}</span>`}
                            ${x.hasUpdate&&s`<span class="settings-tag settings-tag-skill">\u2191 ${x.version}</span>`}
                            <div class="settings-addon-actions">
                                ${x.installed?s`
                                    ${x.hasUpdate&&s`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(g)} onClick=${()=>G(x.slug)}>${T===x.slug?"…":r("settings.addons.update")}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(g)} onClick=${()=>R(x.slug)}>${T===x.slug?"…":r("settings.addons.remove")}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(g)} onClick=${()=>G(x.slug)}>${T===x.slug?"…":r("settings.addons.install")}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${x.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(x.tags||[]).map((X)=>s`<span class="settings-tag">${X}</span>`)}${(x.skills||[]).map((X)=>s`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${X}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${B.length===0&&s`<p class="settings-hint">${r("settings.addons.noMatch",{filter:i})}</p>`}
            </div>
            ${$&&s`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>${r("settings.addons.restartNotice")}</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(g)} onClick=${W}>${r("settings.addons.restartNow")}</button>
                </div>
            `}
        </div>
    `}var ku=O(()=>{e();gn()});var C0={};function c_(n,i){try{let r=localStorage.getItem(n);return r===null?i:r==="true"}catch{return i}}function Ji(n,i){try{localStorage.setItem(n,String(i))}catch(r){}}function A0(n,i){try{return localStorage.getItem(n)||i}catch{return i}}function Z0(n,i){try{localStorage.setItem(n,i)}catch(r){}}function D0(n,i,r,_){try{return En(localStorage.getItem(n),{fallback:i,min:r,max:_})}catch{return En(i,{fallback:i,min:r,max:_})}}function I0(n,i){try{localStorage.setItem(n,String(i))}catch(r){}}function Y0(){let{t:n}=J(),[i,r]=w(()=>c_("piclaw_vim_mode",!1)),[_,c]=w(()=>c_("piclaw_show_whitespace",!0)),[u,f]=w(()=>c_("piclaw_md_live_preview",!0)),[g,l]=w(()=>D0("piclaw_editor_font_size",13,10,24)),[$,t]=w(()=>A0("piclaw_editor_font_family","")),o=U((b,p,k)=>{let h=!p;k(h),Ji(b,h)},[]);return s`
        <div class="settings-section">
            <h3>${n("settings.editor.heading")}</h3>
            <div class="settings-row">
                <label>${n("settings.editor.vimMode")}</label>
                <input type="checkbox" checked=${i}
                    onChange=${()=>{let b=!i;r(b),Ji("piclaw_vim_mode",b)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.showWhitespace")}</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let b=!_;c(b),Ji("piclaw_show_whitespace",b)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.livePreview")}</label>
                <input type="checkbox" checked=${u}
                    onChange=${()=>{let b=!u;f(b),Ji("piclaw_md_live_preview",b)}} />
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
                    onChange=${(b)=>{l(b),I0("piclaw_editor_font_size",b)}}
                />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontFamily")}</label>
                <input type="text" value=${$}
                    onInput=${(b)=>{let p=b.target.value;t(p),Z0("piclaw_editor_font_family",p)}}
                    placeholder=${n("settings.editor.fontFamilyPlaceholder")} />
            </div>
            <p class="settings-hint settings-local-only-hint">${n("settings.editor.localOnlyHint")}</p>
        </div>
    `}var L0;var Ku=O(()=>{e();fi();Sn();gn();L0=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;Cn({id:"editor",label:"Editor",icon:L0,component:Y0,order:150})});var E0={};function u_(n,i){try{let r=localStorage.getItem(n);return r===null?i:r==="true"}catch{return i}}function f_(n,i){try{localStorage.setItem(n,String(i))}catch(r){}}function s_(n,i){try{return localStorage.getItem(n)||i}catch{return i}}function g_(n,i){try{localStorage.setItem(n,i)}catch(r){}}function J0(){let{t:n}=J(),[i,r]=w(()=>u_("piclaw_dev_mode",!1)),[_,c]=w(()=>s_("piclaw_addons_catalog_url","")),[u,f]=w(()=>s_("piclaw_addons_catalog_urls","")),[g,l]=w(()=>s_("piclaw_addons_repo_url","")),[$,t]=w(()=>u_("piclaw_debug_sse",!1)),[o,b]=w(()=>u_("piclaw_debug_tool_calls",!1)),p=U(()=>{let k=!i;r(k),f_("piclaw_dev_mode",k)},[i]);return s`
        <div class="settings-section">
            <h3>${n("settings.developer.heading")}</h3>
            <div class="settings-row">
                <label>${n("settings.developer.devMode")}</label>
                <input type="checkbox" checked=${i} onChange=${p} />
            </div>

            <p class="settings-hint settings-local-only-hint">${n("settings.developer.localHint")}</p>

            ${i&&s`
                <h3 style="margin-top:16px">${n("settings.developer.addonSources")}</h3>
                <div class="settings-row">
                    <label>${n("settings.developer.catalogUrl")}</label>
                    <input type="text" value=${_}
                        onInput=${(k)=>{let h=k.target.value;c(h),g_("piclaw_addons_catalog_url",h)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.catalogHint")} (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>${n("settings.developer.additionalCatalogs")}</label>
                    <textarea
                        value=${u}
                        onInput=${(k)=>{let h=k.target.value;f(h),g_("piclaw_addons_catalog_urls",h)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.additionalHint")}</p>
                <div class="settings-row">
                    <label>${n("settings.developer.repoUrl")}</label>
                    <input type="text" value=${g}
                        onInput=${(k)=>{let h=k.target.value;l(h),g_("piclaw_addons_repo_url",h)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.repoHintPre")} <code>bun add</code> ${n("settings.developer.repoHintPost")}</p>

                <h3 style="margin-top:16px">${n("settings.developer.debug")}</h3>
                <div class="settings-row">
                    <label>${n("settings.developer.logSse")}</label>
                    <input type="checkbox" checked=${$}
                        onChange=${()=>{let k=!$;t(k),f_("piclaw_debug_sse",k)}} />
                </div>
                <div class="settings-row">
                    <label>${n("settings.developer.logToolCalls")}</label>
                    <input type="checkbox" checked=${o}
                        onChange=${()=>{let k=!o;b(k),f_("piclaw_debug_tool_calls",k)}} />
                </div>
                <p class="settings-hint">${n("settings.developer.debugHint")}</p>
            `}
        </div>
    `}var O0;var Bu=O(()=>{e();fi();gn();O0=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;Cn({id:"developer",label:"Developer",icon:O0,component:J0,order:900})});var bg={};un(bg,{openSettingsDialog:()=>xg,SettingsDialogContent:()=>di,SettingsDialog:()=>tg});function bi(n){xi.push({ts:performance.now(),label:n})}function S0(){if(!xi.length)return;let n=xi[0].ts,i=xi.map((r)=>`+${(r.ts-n).toFixed(1)}ms ${r.label}`);console.info(`[settings-dialog perf]
`+i.join(`
`));try{window.__piclawSettingsPerfLog=i}catch(r){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:i})}).catch((r)=>{})}catch(r){}xi.length=0}function m0(n){let i=Si.get(n);if(i)return Promise.resolve(i);let r=Oi.get(n);if(r)return r;let _=d0[n]().then((c)=>{return Si.set(n,c),Oi.delete(n),c}).catch((c)=>{throw Oi.delete(n),c});return Oi.set(n,_),_}function Ei(n="Loading…"){return s`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function di({onClose:n}){bi("SettingsDialogContent-render-start");let[i,r]=w(()=>br()||"general"),[_,c]=w(zu),[u,f]=w(null),[g,l]=w(""),[,$]=w(0),[t,o]=w(()=>Object.fromEntries(Si.entries())),[b,p]=w(null),[k,h]=w({compact:!1,narrow:!1}),z=C(null),y=C(null),{t:v}=J(),G=(F)=>F?.isExtension?F.label:v(`settings.section.${F.id}`),R=(F)=>F?.isExtension?F.placeholder||v("settings.filter"):v(`settings.placeholder.${F.id}`);q(()=>{bi("SettingsDialogContent-mounted"),S0()},[]),q(()=>{let F=(X)=>{if(X.key==="Escape")n()};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[n]),q(()=>{let F=(X)=>{let Y=typeof X?.detail?.section==="string"?X.detail.section.trim():"";if(Y)r(Y),l("")};return window.addEventListener("piclaw:open-settings",F),()=>window.removeEventListener("piclaw:open-settings",F)},[]),q(()=>{let F=()=>$((X)=>X+1);return window.addEventListener("piclaw:settings-panes-changed",F),()=>window.removeEventListener("piclaw:settings-panes-changed",F)},[]),q(()=>{fetch("/agent/settings-data").then((F)=>F.json()).then((F)=>{zu=F,c(F)}).catch(()=>c({}))},[]),q(()=>{let F=y.current;if(!F)return;let X=()=>{let Y=F.clientWidth||0;h((E)=>{let _n={compact:Y>0&&Y<=860,narrow:Y>0&&Y<=720};return E.compact===_n.compact&&E.narrow===_n.narrow?E:_n})};if(X(),typeof ResizeObserver==="function"){let Y=new ResizeObserver(()=>X());return Y.observe(F),()=>Y.disconnect()}return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[]);let W=[...Fu].sort((F,X)=>(F.order??500)-(X.order??500)),B=C_().map((F)=>({id:F.id,label:F.label,icon:F.icon,searchable:F.searchable||!1,placeholder:F.searchPlaceholder,order:F.order??500,isExtension:!0,component:F.component})).sort(xr),T=[...W,...B],K=T.find((F)=>F.id===i)||Fu.find((F)=>F.id===i);q(()=>{if(K?.searchable)requestAnimationFrame(()=>z.current?.focus())},[i]),q(()=>{if(K?.isExtension){p(null);return}let F=!1;if(t[i]){p(null);return}return p(i),m0(i).then((X)=>{if(F)return;o((Y)=>Y?.[i]?Y:{...Y||{},[i]:X})}).catch((X)=>{if(F)return;console.error(`[settings-dialog] Failed to lazy-load section "${i}".`,X)}).finally(()=>{if(!F)p((X)=>X===i?null:X)}),()=>{F=!0}},[i,K?.isExtension,t]);let x=U((F,X="info")=>{f(F?{text:F,type:X}:null)},[]),Z=U((F)=>{r(F),l("");let X=e0[F];if(X&&!Hu.has(F))Hu.add(F),X().then(()=>$((Y)=>Y+1)).catch((Y)=>{})},[]),H=U((F)=>{c((X)=>({...X||{},...F||{}}))},[]),V=()=>{if(K?.isExtension){if(!K.component)return Ei("Loading pane…");let X=K.component;return s`<${X} filter=${g} />`}let F=t[i];if(!F||b===i)return Ei(`${v("settings.loading")}`);switch(i){case"general":return s`<${F} settingsData=${_} setStatus=${x} mergeSettingsData=${H} />`;case"sessions":return s`<${F} settingsData=${_} setStatus=${x} mergeSettingsData=${H} />`;case"recordings":return s`<${F} filter=${g} setStatus=${x} />`;case"compaction":return s`<${F} settingsData=${_} setStatus=${x} mergeSettingsData=${H} />`;case"keyboard":return s`<${F} filter=${g} setStatus=${x} />`;case"workspace":return s`<${F} settingsData=${_} setStatus=${x} mergeSettingsData=${H} />`;case"environment":return s`<${F} settingsData=${_} filter=${g} setStatus=${x} mergeSettingsData=${H} />`;case"providers":return s`<${F} providers=${_?.providers} setStatus=${x} />`;case"models":return s`<${F} filter=${g} />`;case"theme":return s`<${F} themes=${_?.themes} colorKeys=${_?.colorKeys} settingsData=${_} setStatus=${x} mergeSettingsData=${H} />`;case"scheduled-tasks":return s`<${F} filter=${g} setStatus=${x} />`;case"quick-actions":return s`<${F} filter=${g} setStatus=${x} mergeSettingsData=${H} />`;case"keychain":return s`<${F} filter=${g} />`;case"tools":return s`<${F} toolsets=${_?.toolsets} filter=${g} settingsData=${_} mergeSettingsData=${H} />`;case"addons":return s`<${F} setStatus=${x} filter=${g} />`;default:return Ei(v("settings.loading"))}},D=!K;return bi("SettingsDialogContent-render-end"),s`
        <div class="settings-dialog-backdrop" onClick=${(F)=>{if(F.target===F.currentTarget)n()}}>
            <div ref=${y} data-testid="settings-dialog" class=${`settings-dialog${k.compact?" settings-dialog-compact":""}${k.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">${v("settings.title")}</span>
                    ${K?.searchable&&s`
                        <input ref=${z} type="text" class="settings-header-filter"
                            placeholder=${R(K)}
                            value=${g} onInput=${(F)=>l(F.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title=${v("settings.close")}>✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${T.map((F,X)=>{let Y=X>0&&!T[X-1].isExtension,E=F.isExtension&&Y;return s`
                                ${E&&s`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${F.id===i?"active":""}`} onClick=${()=>Z(F.id)}>
                                    <span class="settings-nav-icon">${F.icon}</span>
                                    <span class="settings-nav-label">${G(F)}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${D?Ei(v("settings.loading")):V()}
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
    `}function tg(){let[n,i]=w(!1);if(q(()=>{let r=(c)=>{let u=Gi(c?.detail?.section);if(u)try{window.__piclawSettingsRequestedSection=u}catch(f){}i(!0)};window.addEventListener("piclaw:open-settings",r);let _=O_();if(_.open){if(_.section)try{window.__piclawSettingsRequestedSection=_.section}catch(c){}i(!0)}return()=>window.removeEventListener("piclaw:open-settings",r)},[]),!n)return null;return s`<${Y_} className="settings-portal"><${di} onClose=${()=>i(!1)} /><//>`}function xg(n={}){J_(n)}var xi,zu=null,Si,Oi,d0,e0,Hu,a0,ng,ig,rg,_g,cg,ug,fg,sg,gg,$g,lg,og,wg,yg,Fu;var Wu=O(()=>{e();gn();L_();fi();tc();xi=[];bi("module-eval-start");bi("imports-done");Si=new Map,Oi=new Map;Si.set("general",Mr);d0={general:()=>Promise.resolve(Mr),sessions:()=>Promise.resolve().then(() => (hc(),bc)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => (pc(),vc)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (Kc(),kc)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (Rc(),Uc)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (qc(),Mc)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (Zc(),Ac)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (Ic(),Dc)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Lc(),Yc)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (_u(),ru)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (fu(),uu)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (tu(),yu)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (bu(),xu)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (vu(),hu)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (ku(),pu)).then((n)=>n.AddonsSection)},e0={"editor-settings":()=>Promise.resolve().then(() => (Ku(),C0)).then(()=>{}),developer:()=>Promise.resolve().then(() => (Bu(),E0)).then(()=>{})},Hu=new Set;a0=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,ng=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,ig=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,rg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,_g=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,cg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,ug=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,fg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,sg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,gg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,$g=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,lg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,og=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,wg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,yg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,Fu=[{id:"general",label:"General",icon:a0,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:ng,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:ig,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:rg,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:ug,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:_g,searchable:!1,order:15},{id:"environment",label:"Environment",icon:cg,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:fg,searchable:!1,order:20},{id:"models",label:"Models",icon:sg,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:gg,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:$g,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:og,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:wg,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:lg,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:yg,searchable:!0,placeholder:"Filter add-ons…",order:90}]});e();Wu();fi();var hg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function vg({label:n,body:i,filter:r=""}){return s`
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
  `}function pg(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let i of n)Cn({id:i.id,label:i.label,icon:hg,searchable:!0,searchPlaceholder:`Filter ${i.label} settings…`,order:i.id==="fixture-z-observability"?1:999,component:(r)=>s`<${vg} label=${i.label} body=${i.body} filter=${r?.filter||""} />`})}var bn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},kg={current:bn.current,models:bn.models,model_options:bn.model_options,thinking_level:bn.thinking_level,supports_thinking:bn.supports_thinking,available_thinking_levels:bn.available_thinking_levels},ju={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},Uu={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},ii=new URLSearchParams(window.location.search).get("real")!=="1",Ru=window.fetch.bind(window);function xn(n,i=200){return new Response(JSON.stringify(n),{status:i,headers:{"Content-Type":"application/json"}})}function Kg(){window.fetch=async(n,i)=>{let r=new URL(typeof n==="string"?n:n.url,window.location.href),_=String(i?.method||"GET").toUpperCase();if(!ii)return Ru(n,i);if(r.pathname==="/agent/settings-data")return xn(bn);if(r.pathname==="/agent/models")return xn(kg);if(r.pathname==="/agent/addons")return xn(ju);if(r.pathname.startsWith("/agent/addons/"))return xn({ok:!0,message:"Fixture add-on action accepted.",...ju});if(r.pathname==="/agent/keychain"){if(_==="GET")return xn(Uu);if(_==="POST")return xn({ok:!0,...Uu})}if(r.pathname==="/agent/settings/general")return xn({ok:!0,settings:bn});if(r.pathname==="/agent/settings/widget-token/regenerate")return xn({ok:!0,settings:{...bn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(r.pathname.startsWith("/agent/default/message"))return xn({command:{status:"success",message:"Fixture command accepted."}});if(r.pathname.startsWith("/agent/settings/"))return xn({ok:!0,settings:bn,items:[],entries:[]});if(r.pathname==="/agent/client-perf")return xn({ok:!0});return Ru(n,i)}}function Bg(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function Pu(n){try{window.__piclawSettingsRequestedSection=n}catch(i){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function zg(){let n=new URLSearchParams(window.location.search),[i,r]=w(n.get("section")||"general"),[_,c]=w(Number(n.get("width")||900)),[u,f]=w(Number(n.get("height")||640)),[g,l]=w(ii),[$,t]=w(0),o=L(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),b=U((k)=>{r(k),Pu(k)},[]),p=U(()=>{ii=!ii,l(ii),t((k)=>k+1)},[]);return s`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${i} onChange=${(k)=>b(k.target.value)}>${o.map((k)=>s`<option value=${k}>${k}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${_} onInput=${(k)=>c(Number(k.target.value))} /> ${_}px</label>
        <label>Height <input type="range" min="420" max="900" value=${u} onInput=${(k)=>f(Number(k.target.value))} /> ${u}px</label>
        <button type="button" onClick=${p}>${g?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>t((k)=>k+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${_}px;--fixture-height:${u}px;`}>
        <${di} key=${$} onClose=${()=>{}} />
      </div>
    </div>
  `}function Hg(){pg(),Kg(),Bg();let n=new URLSearchParams(window.location.search);Pu(n.get("section")||"general");let i=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));i.id="settings-widget-fixture-root",In(s`<${zg} />`,i),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:ii})}Hg();

//# debugId=EC8CAFA9E7FC5E0D64756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
