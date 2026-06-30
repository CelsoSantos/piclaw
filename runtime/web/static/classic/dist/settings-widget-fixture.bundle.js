var Gu=Object.defineProperty;var Nu=(n)=>n;function Vu(n,r){this[n]=Nu.bind(null,r)}var un=(n,r)=>{for(var i in r)Gu(n,i,{get:r[i],enumerable:!0,configurable:!0,set:Vu.bind(r,i)})};var J=(n,r)=>()=>(n&&(r=n(n=0)),r);var du={};un(du,{useState:()=>y,useRef:()=>C,useReducer:()=>V_,useMemo:()=>D,useLayoutEffect:()=>kr,useImperativeHandle:()=>Lu,useErrorBoundary:()=>Cu,useEffect:()=>X,useDebugValue:()=>Yu,useContext:()=>Du,useCallback:()=>U,render:()=>In,html:()=>s,h:()=>fi,createContext:()=>Iu,Component:()=>cr});function vn(n,r){for(var i in r)n[i]=r[i];return n}function ui(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function fi(n,r,i){var _,c,u,f={};for(u in r)u=="key"?_=r[u]:u=="ref"?c=r[u]:f[u]=r[u];if(arguments.length>2&&(f.children=arguments.length>3?jr.call(arguments,2):i),typeof n=="function"&&n.defaultProps!=null)for(u in n.defaultProps)f[u]===void 0&&(f[u]=n.defaultProps[u]);return Kr(n,f,_,c,null)}function Kr(n,r,i,_,c){var u={type:n,props:r,key:i,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c==null?++z_:c,__i:-1,__u:0};return c==null&&S.vnode!=null&&S.vnode(u),u}function Hr(n){return n.children}function cr(n,r){this.props=n,this.context=r}function An(n,r){if(r==null)return n.__?An(n.__,n.__i+1):null;for(var i;r<n.__k.length;r++)if((i=n.__k[r])!=null&&i.__e!=null)return i.__e;return typeof n.type=="function"?An(n):null}function Qu(n){if(n.__P&&n.__d){var r=n.__v,i=r.__e,_=[],c=[],u=vn({},r);u.__v=r.__v+1,S.vnode&&S.vnode(u),si(n.__P,u,r,n.__n,n.__P.namespaceURI,32&r.__u?[i]:null,_,i==null?An(r):i,!!(32&r.__u),c),u.__v=r.__v,u.__.__k[u.__i]=u,U_(_,u,c),r.__e=r.__=null,u.__e!=i&&R_(u)}}function R_(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(r){if(r!=null&&r.__e!=null)return n.__e=n.__c.base=r.__e}),R_(n)}function ri(n){(!n.__d&&(n.__d=!0)&&jn.push(n)&&!Wr.__r++||o_!=S.debounceRendering)&&((o_=S.debounceRendering)||B_)(Wr)}function Wr(){try{for(var n,r=1;jn.length;)jn.length>r&&jn.sort(F_),n=jn.shift(),r=jn.length,Qu(n)}finally{jn.length=Wr.__r=0}}function H_(n,r,i,_,c,u,f,l,o,$,b){var g,v,x,h,K,t,p,W=_&&_.__k||Fr,Q=r.length;for(o=Mu(i,r,W,o,Q),g=0;g<Q;g++)(x=i.__k[g])!=null&&(v=x.__i!=-1&&W[x.__i]||Br,x.__i=g,t=si(n,x,v,c,u,f,l,o,$,b),h=x.__e,x.ref&&v.ref!=x.ref&&(v.ref&&li(v.ref,null,x),b.push(x.ref,x.__c||h,x)),K==null&&h!=null&&(K=h),(p=!!(4&x.__u))||v.__k===x.__k?(o=k_(x,o,n,p),p&&v.__e&&(v.__e=null)):typeof x.type=="function"&&t!==void 0?o=t:h&&(o=h.nextSibling),x.__u&=-7);return i.__e=K,o}function Mu(n,r,i,_,c){var u,f,l,o,$,b=i.length,g=b,v=0;for(n.__k=Array(c),u=0;u<c;u++)(f=r[u])!=null&&typeof f!="boolean"&&typeof f!="function"?(typeof f=="string"||typeof f=="number"||typeof f=="bigint"||f.constructor==String?f=n.__k[u]=Kr(null,f,null,null,null):Rr(f)?f=n.__k[u]=Kr(Hr,{children:f},null,null,null):f.constructor===void 0&&f.__b>0?f=n.__k[u]=Kr(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):n.__k[u]=f,o=u+v,f.__=n,f.__b=n.__b+1,l=null,($=f.__i=qu(f,i,o,g))!=-1&&(g--,(l=i[$])&&(l.__u|=2)),l==null||l.__v==null?($==-1&&(c>b?v--:c<b&&v++),typeof f.type!="function"&&(f.__u|=4)):$!=o&&($==o-1?v--:$==o+1?v++:($>o?v--:v++,f.__u|=4))):n.__k[u]=null;if(g)for(u=0;u<b;u++)(l=i[u])!=null&&(2&l.__u)==0&&(l.__e==_&&(_=An(l)),G_(l,l));return _}function k_(n,r,i,_){var c,u;if(typeof n.type=="function"){for(c=n.__k,u=0;c&&u<c.length;u++)c[u]&&(c[u].__=n,r=k_(c[u],r,i,_));return r}n.__e!=r&&(_&&(r&&n.type&&!r.parentNode&&(r=An(n)),i.insertBefore(n.__e,r||null)),r=n.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function qu(n,r,i,_){var c,u,f,l=n.key,o=n.type,$=r[i],b=$!=null&&(2&$.__u)==0;if($===null&&l==null||b&&l==$.key&&o==$.type)return i;if(_>(b?1:0)){for(c=i-1,u=i+1;c>=0||u<r.length;)if(($=r[f=c>=0?c--:u++])!=null&&(2&$.__u)==0&&l==$.key&&o==$.type)return f}return-1}function $_(n,r,i){r[0]=="-"?n.setProperty(r,i==null?"":i):n[r]=i==null?"":typeof i!="number"||Xu.test(r)?i:i+"px"}function vr(n,r,i,_,c){var u,f;n:if(r=="style")if(typeof i=="string")n.style.cssText=i;else{if(typeof _=="string"&&(n.style.cssText=_=""),_)for(r in _)i&&r in i||$_(n.style,r,"");if(i)for(r in i)_&&i[r]==_[r]||$_(n.style,r,i[r])}else if(r[0]=="o"&&r[1]=="n")u=r!=(r=r.replace(W_,"$1")),f=r.toLowerCase(),r=f in n||r=="onFocusOut"||r=="onFocusIn"?f.slice(2):r.slice(2),n.l||(n.l={}),n.l[r+u]=i,i?_?i[_r]=_[_r]:(i[_r]=ci,n.addEventListener(r,u?ni:ar,u)):n.removeEventListener(r,u?ni:ar,u);else{if(c=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in n)try{n[r]=i==null?"":i;break n}catch(l){}typeof i=="function"||(i==null||i===!1&&r[4]!="-"?n.removeAttribute(r):n.setAttribute(r,r=="popover"&&i==1?"":i))}}function g_(n){return function(r){if(this.l){var i=this.l[r.type+n];if(r[pr]==null)r[pr]=ci++;else if(r[pr]<i[_r])return;return i(S.event?S.event(r):r)}}}function si(n,r,i,_,c,u,f,l,o,$){var b,g,v,x,h,K,t,p,W,Q,z,H,B,G,N,w=r.type;if(r.constructor!==void 0)return null;128&i.__u&&(o=!!(32&i.__u),u=[l=r.__e=i.__e]),(b=S.__b)&&b(r);n:if(typeof w=="function")try{if(p=r.props,W=w.prototype&&w.prototype.render,Q=(b=w.contextType)&&_[b.__c],z=b?Q?Q.props.value:b.__:_,i.__c?t=(g=r.__c=i.__c).__=g.__E:(W?r.__c=g=new w(p,z):(r.__c=g=new cr(p,z),g.constructor=w,g.render=Zu),Q&&Q.sub(g),g.state||(g.state={}),g.__n=_,v=g.__d=!0,g.__h=[],g._sb=[]),W&&g.__s==null&&(g.__s=g.state),W&&w.getDerivedStateFromProps!=null&&(g.__s==g.state&&(g.__s=vn({},g.__s)),vn(g.__s,w.getDerivedStateFromProps(p,g.__s))),x=g.props,h=g.state,g.__v=r,v)W&&w.getDerivedStateFromProps==null&&g.componentWillMount!=null&&g.componentWillMount(),W&&g.componentDidMount!=null&&g.__h.push(g.componentDidMount);else{if(W&&w.getDerivedStateFromProps==null&&p!==x&&g.componentWillReceiveProps!=null&&g.componentWillReceiveProps(p,z),r.__v==i.__v||!g.__e&&g.shouldComponentUpdate!=null&&g.shouldComponentUpdate(p,g.__s,z)===!1){r.__v!=i.__v&&(g.props=p,g.state=g.__s,g.__d=!1),r.__e=i.__e,r.__k=i.__k,r.__k.some(function(R){R&&(R.__=r)}),Fr.push.apply(g.__h,g._sb),g._sb=[],g.__h.length&&f.push(g);break n}g.componentWillUpdate!=null&&g.componentWillUpdate(p,g.__s,z),W&&g.componentDidUpdate!=null&&g.__h.push(function(){g.componentDidUpdate(x,h,K)})}if(g.context=z,g.props=p,g.__P=n,g.__e=!1,H=S.__r,B=0,W)g.state=g.__s,g.__d=!1,H&&H(r),b=g.render(g.props,g.state,g.context),Fr.push.apply(g.__h,g._sb),g._sb=[];else do g.__d=!1,H&&H(r),b=g.render(g.props,g.state,g.context),g.state=g.__s;while(g.__d&&++B<25);g.state=g.__s,g.getChildContext!=null&&(_=vn(vn({},_),g.getChildContext())),W&&!v&&g.getSnapshotBeforeUpdate!=null&&(K=g.getSnapshotBeforeUpdate(x,h)),G=b!=null&&b.type===Hr&&b.key==null?T_(b.props.children):b,l=H_(n,Rr(G)?G:[G],r,i,_,c,u,f,l,o,$),g.base=r.__e,r.__u&=-161,g.__h.length&&f.push(g),t&&(g.__E=g.__=null)}catch(R){if(r.__v=null,o||u!=null)if(R.then){for(r.__u|=o?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;u[u.indexOf(l)]=null,r.__e=l}else{for(N=u.length;N--;)ui(u[N]);ii(r)}else r.__e=i.__e,r.__k=i.__k,R.then||ii(r);S.__e(R,r,i)}else u==null&&r.__v==i.__v?(r.__k=i.__k,r.__e=i.__e):l=r.__e=Au(i.__e,r,i,_,c,u,f,o,$);return(b=S.diffed)&&b(r),128&r.__u?void 0:l}function ii(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(ii))}function U_(n,r,i){for(var _=0;_<i.length;_++)li(i[_],i[++_],i[++_]);S.__c&&S.__c(r,n),n.some(function(c){try{n=c.__h,c.__h=[],n.some(function(u){u.call(c)})}catch(u){S.__e(u,c.__v)}})}function T_(n){return typeof n!="object"||n==null||n.__b>0?n:Rr(n)?n.map(T_):n.constructor!==void 0?null:vn({},n)}function Au(n,r,i,_,c,u,f,l,o){var $,b,g,v,x,h,K,t=i.props||Br,p=r.props,W=r.type;if(W=="svg"?c="http://www.w3.org/2000/svg":W=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),u!=null){for($=0;$<u.length;$++)if((x=u[$])&&"setAttribute"in x==!!W&&(W?x.localName==W:x.nodeType==3)){n=x,u[$]=null;break}}if(n==null){if(W==null)return document.createTextNode(p);n=document.createElementNS(c,W,p.is&&p),l&&(S.__m&&S.__m(r,u),l=!1),u=null}if(W==null)t===p||l&&n.data==p||(n.data=p);else{if(u=W=="textarea"&&p.defaultValue!=null?null:u&&jr.call(n.childNodes),!l&&u!=null)for(t={},$=0;$<n.attributes.length;$++)t[(x=n.attributes[$]).name]=x.value;for($ in t)x=t[$],$=="dangerouslySetInnerHTML"?g=x:$=="children"||($ in p)||$=="value"&&("defaultValue"in p)||$=="checked"&&("defaultChecked"in p)||vr(n,$,null,x,c);for($ in p)x=p[$],$=="children"?v=x:$=="dangerouslySetInnerHTML"?b=x:$=="value"?h=x:$=="checked"?K=x:l&&typeof x!="function"||t[$]===x||vr(n,$,x,t[$],c);if(b)l||g&&(b.__html==g.__html||b.__html==n.innerHTML)||(n.innerHTML=b.__html),r.__k=[];else if(g&&(n.innerHTML=""),H_(r.type=="template"?n.content:n,Rr(v)?v:[v],r,i,_,W=="foreignObject"?"http://www.w3.org/1999/xhtml":c,u,f,u?u[0]:i.__k&&An(i,0),l,o),u!=null)for($=u.length;$--;)ui(u[$]);l&&W!="textarea"||($="value",W=="progress"&&h==null?n.removeAttribute("value"):h!=null&&(h!==n[$]||W=="progress"&&!h||W=="option"&&h!=t[$])&&vr(n,$,h,t[$],c),$="checked",K!=null&&K!=n[$]&&vr(n,$,K,t[$],c))}return n}function li(n,r,i){try{if(typeof n=="function"){var _=typeof n.__u=="function";_&&n.__u(),_&&r==null||(n.__u=n(r))}else n.current=r}catch(c){S.__e(c,i)}}function G_(n,r,i){var _,c;if(S.unmount&&S.unmount(n),(_=n.ref)&&(_.current&&_.current!=n.__e||li(_,null,r)),(_=n.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(u){S.__e(u,r)}_.base=_.__P=null}if(_=n.__k)for(c=0;c<_.length;c++)_[c]&&G_(_[c],r,i||typeof n.type!="function");i||ui(n.__e),n.__c=n.__=n.__e=void 0}function Zu(n,r,i){return this.constructor(n,i)}function In(n,r,i){var _,c,u,f;r==document&&(r=document.documentElement),S.__&&S.__(n,r),c=(_=typeof i=="function")?null:i&&i.__k||r.__k,u=[],f=[],si(r,n=(!_&&i||r).__k=fi(Hr,null,[n]),c||Br,Br,r.namespaceURI,!_&&i?[i]:c?null:r.firstChild?jr.call(r.childNodes):null,u,!_&&i?i:c?c.__e:r.firstChild,_,f),U_(u,n,f)}function Iu(n){function r(i){var _,c;return this.getChildContext||(_=new Set,(c={})[r.__c]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){_=null},this.shouldComponentUpdate=function(u){this.props.value!=u.value&&_.forEach(function(f){f.__e=!0,ri(f)})},this.sub=function(u){_.add(u);var f=u.componentWillUnmount;u.componentWillUnmount=function(){_&&_.delete(u),f&&f.call(u)}}),i.children}return r.__c="__cC"+j_++,r.__=n,r.Provider=r.__l=(r.Consumer=function(i,_){return i.children(_)}).contextType=r,r}function Ln(n,r){a.__h&&a.__h(d,n,Zn||r),Zn=0;var i=d.__H||(d.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function y(n){return Zn=1,V_(P_,n)}function V_(n,r,i){var _=Ln(Rn++,2);if(_.t=n,!_.__c&&(_.__=[i?i(r):P_(void 0,r),function(l){var o=_.__N?_.__N[0]:_.__[0],$=_.t(o,l);o!==$&&(_.__N=[$,_.__[1]],_.__c.setState({}))}],_.__c=d,!d.__f)){var c=function(l,o,$){if(!_.__c.__H)return!0;var b=_.__c.__H.__.filter(function(v){return v.__c});if(b.every(function(v){return!v.__N}))return!u||u.call(this,l,o,$);var g=_.__c.props!==l;return b.some(function(v){if(v.__N){var x=v.__[0];v.__=v.__N,v.__N=void 0,x!==v.__[0]&&(g=!0)}}),u&&u.call(this,l,o,$)||g};d.__f=!0;var{shouldComponentUpdate:u,componentWillUpdate:f}=d;d.componentWillUpdate=function(l,o,$){if(this.__e){var b=u;u=void 0,c(l,o,$),u=b}f&&f.call(this,l,o,$)},d.shouldComponentUpdate=c}return _.__N||_.__}function X(n,r){var i=Ln(Rn++,3);!a.__s&&oi(i.__H,r)&&(i.__=n,i.u=r,d.__H.__h.push(i))}function kr(n,r){var i=Ln(Rn++,4);!a.__s&&oi(i.__H,r)&&(i.__=n,i.u=r,d.__h.push(i))}function C(n){return Zn=5,D(function(){return{current:n}},[])}function Lu(n,r,i){Zn=6,kr(function(){if(typeof n=="function"){var _=n(r());return function(){n(null),_&&typeof _=="function"&&_()}}if(n)return n.current=r(),function(){return n.current=null}},i==null?i:i.concat(n))}function D(n,r){var i=Ln(Rn++,7);return oi(i.__H,r)&&(i.__=n(),i.__H=r,i.__h=n),i.__}function U(n,r){return Zn=8,D(function(){return n},r)}function Du(n){var r=d.context[n.__c],i=Ln(Rn++,9);return i.c=n,r?(i.__==null&&(i.__=!0,r.sub(d)),r.props.value):n.__}function Yu(n,r){a.useDebugValue&&a.useDebugValue(r?r(n):n)}function Cu(n){var r=Ln(Rn++,10),i=y();return r.__=n,d.componentDidCatch||(d.componentDidCatch=function(_,c){r.__&&r.__(_,c),i[1](_)}),[i[0],function(){i[1](void 0)}]}function Ju(){for(var n;n=N_.shift();){var r=n.__H;if(n.__P&&r)try{r.__h.some(zr),r.__h.some(_i),r.__h=[]}catch(i){r.__h=[],a.__e(i,n.__v)}}}function Ou(n){var r,i=function(){clearTimeout(_),p_&&cancelAnimationFrame(r),setTimeout(n)},_=setTimeout(i,35);p_&&(r=requestAnimationFrame(i))}function zr(n){var r=d,i=n.__c;typeof i=="function"&&(n.__c=void 0,i()),d=r}function _i(n){var r=d;n.__c=n.__(),d=r}function oi(n,r){return!n||n.length!==r.length||r.some(function(i,_){return i!==n[_]})}function P_(n,r){return typeof r=="function"?r(n):r}function Eu(n){var r=K_.get(this);return r||(r=new Map,K_.set(this,r)),(r=X_(this,r.get(n)||(r.set(n,r=function(i){for(var _,c,u=1,f="",l="",o=[0],$=function(v){u===1&&(v||(f=f.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(0,v,f):u===3&&(v||f)?(o.push(3,v,f),u=2):u===2&&f==="..."&&v?o.push(4,v,0):u===2&&f&&!v?o.push(5,0,!0,f):u>=5&&((f||!v&&u===5)&&(o.push(u,0,f,c),u=6),v&&(o.push(u,v,0,c),u=6)),f=""},b=0;b<i.length;b++){b&&(u===1&&$(),$(b));for(var g=0;g<i[b].length;g++)_=i[b][g],u===1?_==="<"?($(),o=[o],u=3):f+=_:u===4?f==="--"&&_===">"?(u=1,f=""):f=_+f[0]:l?_===l?l="":f+=_:_==='"'||_==="'"?l=_:_===">"?($(),u=1):u&&(_==="="?(u=5,c=f,f=""):_==="/"&&(u<5||i[b][g+1]===">")?($(),u===3&&(o=o[0]),u=o,(o=o[0]).push(2,0,u),u=0):_===" "||_==="\t"||_===`
`||_==="\r"?($(),u=2):f+=_),u===3&&f==="!--"&&(u=4,o=o[0])}return $(),o}(n)),r),arguments,[])).length>1?r:r[0]}var jr,S,z_,Pu,jn,o_,B_,F_,er,pr,_r,W_,ci,ar,ni,j_,Br,Fr,Xu,Rr,Rn,d,mr,w_,Zn=0,N_,a,y_,t_,x_,h_,b_,v_,p_,X_=function(n,r,i,_){var c;r[0]=0;for(var u=1;u<r.length;u++){var f=r[u++],l=r[u]?(r[0]|=f?1:2,i[r[u++]]):r[++u];f===3?_[0]=l:f===4?_[1]=Object.assign(_[1]||{},l):f===5?(_[1]=_[1]||{})[r[++u]]=l:f===6?_[1][r[++u]]+=l+"":f?(c=n.apply(l,X_(n,l,i,["",null])),_.push(c),l[0]?r[0]|=2:(r[u-2]=0,r[u]=c)):_.push(l)}return _},K_,s;var e=J(()=>{Br={},Fr=[],Xu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Rr=Array.isArray;jr=Fr.slice,S={__e:function(n,r,i,_){for(var c,u,f;r=r.__;)if((c=r.__c)&&!c.__)try{if((u=c.constructor)&&u.getDerivedStateFromError!=null&&(c.setState(u.getDerivedStateFromError(n)),f=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(n,_||{}),f=c.__d),f)return c.__E=c}catch(l){n=l}throw n}},z_=0,Pu=function(n){return n!=null&&n.constructor===void 0},cr.prototype.setState=function(n,r){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=vn({},this.state),typeof n=="function"&&(n=n(vn({},i),this.props)),n&&vn(i,n),n!=null&&this.__v&&(r&&this._sb.push(r),ri(this))},cr.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ri(this))},cr.prototype.render=Hr,jn=[],B_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F_=function(n,r){return n.__v.__b-r.__v.__b},Wr.__r=0,er=Math.random().toString(8),pr="__d"+er,_r="__a"+er,W_=/(PointerCapture)$|Capture$/i,ci=0,ar=g_(!1),ni=g_(!0),j_=0;N_=[],a=S,y_=a.__b,t_=a.__r,x_=a.diffed,h_=a.__c,b_=a.unmount,v_=a.__;a.__b=function(n){d=null,y_&&y_(n)},a.__=function(n,r){n&&r.__k&&r.__k.__m&&(n.__m=r.__k.__m),v_&&v_(n,r)},a.__r=function(n){t_&&t_(n),Rn=0;var r=(d=n.__c).__H;r&&(mr===d?(r.__h=[],d.__h=[],r.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(r.__h.some(zr),r.__h.some(_i),r.__h=[],Rn=0)),mr=d},a.diffed=function(n){x_&&x_(n);var r=n.__c;r&&r.__H&&(r.__H.__h.length&&(N_.push(r)!==1&&w_===a.requestAnimationFrame||((w_=a.requestAnimationFrame)||Ou)(Ju)),r.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),mr=d=null},a.__c=function(n,r){r.some(function(i){try{i.__h.some(zr),i.__h=i.__h.filter(function(_){return!_.__||_i(_)})}catch(_){r.some(function(c){c.__h&&(c.__h=[])}),r=[],a.__e(_,i.__v)}}),h_&&h_(n,r)},a.unmount=function(n){b_&&b_(n);var r,i=n.__c;i&&i.__H&&(i.__H.__.some(function(_){try{zr(_)}catch(c){r=c}}),i.__H=void 0,r&&a.__e(r,i.__v))};p_=typeof requestAnimationFrame=="function";K_=new Map;s=Eu.bind(fi)});function Hn(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function sn(n,r){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,r)}catch{return}}function $i(n,r=!1){let i=Hn(n);if(i===null)return r;return i==="true"}function gi(n,r=null){let i=Hn(n);if(i===null)return r;let _=parseInt(i,10);return Number.isFinite(_)?_:r}function Q_(n){let r=Hn(n);if(!r)return null;try{return JSON.parse(r)}catch{return null}}function Tr(n){let r=String(n??"").trim().toLowerCase().replace(/_/g,"-");if(!r)return Dn;if(r==="zh-cn"||r==="zh"||r==="zh-hans"||r.startsWith("zh-hans"))return"zh-CN";if(r==="ja"||r.startsWith("ja-"))return"ja";if(r==="en"||r.startsWith("en-"))return"en";return Dn}function au(){if(typeof navigator>"u")return Dn;let n=[...Array.isArray(navigator.languages)?navigator.languages:[],navigator.language].filter((r)=>typeof r==="string"&&r.length>0);for(let r of n){let i=Tr(r);if(i!==Dn)return i}return Dn}function nf(){let n=Hn(A_);if(n)return Tr(n);return au()}function rf(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(wi,{detail:{locale:n}}))}function Ur(){if(!yi)_f();return Tn}function _f(){return Tn=nf(),yi=!0,Tn}function cf(n,r={}){let i=Tr(n);if(yi=!0,i===Tn&&r.persist===!1)return Tn;if(Tn=i,r.persist!==!1)sn(A_,i);return rf(i),Tn}function uf(n,r){if(!r)return n;return n.replace(/\{(\w+)\}/g,(i,_)=>{let c=r[_];return c===void 0||c===null?i:String(c)})}function I_(n,r,i=Ur()){let c=mu[i]?.[n]??Z_[n]??n;return uf(c,r)}function kl(n,r){return I_(n,r)}function ff(){let[n,r]=y(Ur());return X(()=>{if(typeof window>"u"||typeof window.addEventListener!=="function")return;let i=(_)=>{let c=_.detail,u=Tr(c?.locale??Ur());r(u)};return window.addEventListener(wi,i),r(Ur()),()=>window.removeEventListener(wi,i)},[]),[n,(i)=>cf(i)]}function xn(){let[n,r]=ff();return{locale:n,setLocale:r,t:(i,_)=>I_(i,_,n)}}var Dn="en",M_,q_,A_="piclaw_locale",wi="piclaw-locale-change",Z_,Su,eu,mu,Tn,yi=!1;var Yn=J(()=>{e();M_=["en","zh-CN","ja"],q_={en:"English","zh-CN":"简体中文",ja:"日本語"},Z_={"compose.placeholder":"Message (Enter to send, Shift+Enter for newline)...","compose.send":"Send","compose.stop":"Stop","compose.searchPlaceholder":"Search (Enter to run)...","compose.clearAll":"Clear all","compose.clearAllTitle":"Clear all attachments and references","compose.scope":"Scope","compose.searchScope":"Search scope","compose.scopeCurrent":"Current","compose.scopeBranchFamily":"Branch family","compose.scopeAll":"All chats","compose.filterImages":"Images","compose.filterAttachments":"Attachments","compose.search":"Search","compose.closeSearch":"Close search","compose.shareLocation":"Share location","compose.attachFile":"Attach file","compose.queueControls":"Queued follow-up controls","compose.moveUp":"Move up","compose.moveUpQueue":"Move up in queue","compose.moveDown":"Move down","compose.moveDownQueue":"Move down in queue","compose.editInCompose":"Edit in compose","compose.returnToEditor":"Return queued message to editor","compose.injectSteer":"Inject queued follow-up as steer","compose.steer":"Steer","compose.cancelQueued":"Cancel queued message","compose.resizeInput":"Resize message input","compose.resizeInputHint":"Drag to resize message input","compose.modelPicker":"Model picker","compose.sessionsAndAgents":"Sessions and agents","compose.openModelPicker":"Open model picker","compose.newBranchTitle":"Create a new branch from this chat","compose.newRootTitle":"Create a clean root session such as web:ops","compose.renameSessionTitle":"Rename the current session","compose.pruneSessionTitle":"Delete (prune) current agent/session branch","compose.filterImagesTitle":"Only show messages with images","compose.filterAttachmentsTitle":"Only show messages with attachments","compose.selectModel":"Select model","compose.loadingModels":"Loading models…","compose.noModels":"No models available.","compose.nextModel":"Next model","compose.manageSessions":"Manage sessions & agents","compose.noSessions":"No other sessions yet.","compose.newBranch":"New branch","compose.newRoot":"New root…","compose.mergeCurrent":"Merge current w/ parent","compose.renameCurrent":"Rename current…","compose.deleteCurrent":"Delete current…","compose.mergeInto":"Merge this branch into {target}","compose.mergeBlocked":"This branch cannot be merged while active or while it has children","workspace.title":"Workspace","workspace.newFile":"New file","workspace.refresh":"Refresh","workspace.actions":"Workspace actions","workspace.uploadFiles":"Upload files","workspace.reindexing":"Reindexing workspace…","workspace.deleteFile":"Delete file","workspace.download":"Download","workspace.uploadToFolder":"Upload files to this folder","workspace.addFolderHint":"Add folder hint to compose","workspace.downloadZip":"Download folder as zip","workspace.openInTab":"Open in tab","workspace.openInEditor":"Open in editor","workspace.renameSelected":"Rename selected","workspace.downloadSelectedFile":"Download selected file","workspace.downloadSelectedFolder":"Download selected folder (zip)","workspace.deleteSelectedFile":"Delete selected file","shell.settings":"Settings","shell.newChat":"New chat","shell.connecting":"Connecting…","shell.connected":"Connected","language.label":"Language","settings.title":"Settings","settings.close":"Close (Esc)","settings.filter":"Filter…","settings.loading":"Loading settings…","settings.section.general":"General","settings.section.sessions":"Sessions","settings.section.recordings":"Recordings","settings.section.compaction":"Compaction","settings.section.keyboard":"Keyboard","settings.section.workspace":"Workspace","settings.section.environment":"Environment","settings.section.providers":"Providers","settings.section.models":"Models","settings.section.theme":"Appearance","settings.section.scheduled-tasks":"Scheduled Tasks","settings.section.quick-actions":"Quick Actions","settings.section.keychain":"Keychain","settings.section.tools":"Tools","settings.section.addons":"Add-ons","settings.placeholder.recordings":"Filter recordings…","settings.placeholder.keyboard":"Filter shortcuts…","settings.placeholder.environment":"Filter environment…","settings.placeholder.models":"Filter models…","settings.placeholder.scheduled-tasks":"Filter scheduled tasks…","settings.placeholder.quick-actions":"Filter quick actions…","settings.placeholder.keychain":"Filter entries…","settings.placeholder.tools":"Filter tools…","settings.placeholder.addons":"Filter add-ons…","preview.close":"Close","preview.loading":"Loading preview…","preview.files":"Files","preview.folders":"Folders","preview.compressed":"Compressed","preview.uncompressed":"Uncompressed","preview.name":"Name","preview.type":"Type","preview.method":"Method","preview.size":"Size","post.deleteMessage":"Delete message","post.tooLarge":"Message too large to display.","post.previewTruncated":"Preview truncated.","post.submitted":"Submitted","post.discard":"Discard","post.save":"Save","post.cancel":"Cancel","post.addNote":"Add note","post.addNotePlaceholder":"Add a note…","tab.close":"Close","tab.closeOthers":"Close Others","tab.closeAll":"Close All","tab.reattach":"Reattach","tab.openInWindow":"Open in Window","tab.openInNewTab":"Open in New Tab","tab.pinned":"Pinned","tab.detached":"Detached","tab.openSeparateWindow":"Open in separate window","status.trackedVariables":"Tracked variables","status.attachToSession":"Attach to session","status.files":"Files","status.proposedDiff":"Proposed diff","status.copyTmux":"Copy tmux command","status.experimentDuration":"Experiment duration","status.sinceLastActivity":"Since last activity","annotator.title":"Annotate image","annotator.typeLabel":"Type label…","annotator.undo":"Undo","annotator.resetZoom":"Reset zoom","tree.filter":"Filter…","tree.sessionTree":"Session tree","btw.label":"BTW side conversation","btw.close":"Close BTW","btw.thinking":"Thinking","mdpreview.close":"Close preview","mdpreview.unavailable":"Preview unavailable","widget.close":"Close widget","oobe.gettingStarted":"Getting started","oobe.needsSetupTitle":"Instance needs setup","oobe.configuredTitle":"Instance is configured","oobe.needsSetupBody":"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.","oobe.configuredBody":"This instance looks configured. Review or update provider and model settings in Settings.","oobe.openSettings":"Open Settings","oobe.dismiss":"Dismiss","oobe.done":"Done","palette.placeholder":"Type to jump to an agent, workspace action, or slash command…","palette.hideWorkspace":"Hide workspace","palette.showWorkspace":"Show workspace","palette.hideWorkspaceDesc":"Hide the workspace sidebar.","palette.showWorkspaceDesc":"Show the workspace sidebar.","palette.exitChatOnly":"Exit chat-only mode","palette.chatOnly":"Chat-only mode","palette.exitChatOnlyDesc":"Return to the split workspace layout.","palette.chatOnlyDesc":"Switch to the chat-only layout.","palette.groupAgents":"Agents","palette.groupWorkspace":"Workspace","palette.groupSlash":"Slash commands","palette.hintMove":"Move","palette.hintSelect":"Select","palette.hintPopOut":"Pop out","palette.hintClose":"Close","settings.appliedNotice":"Settings applied. Changes take effect on the next turn.","settings.sessions.lifecycle":"Session Lifecycle","settings.sessions.autoRotate":"Auto-rotate sessions","settings.sessions.maxSize":"Max session size (MB)","settings.sessions.maxSizeAria":"max session size","settings.sessions.agentBehaviour":"Agent Behaviour","settings.sessions.toolBudget":"Tool use budget","settings.sessions.toolBudgetAria":"tool use budget","settings.sessions.toolBudgetHint":"max tool-call messages per turn","settings.sessions.isolation":"Session isolation","settings.sessions.isolationNone":"None — full cross-session visibility","settings.sessions.isolationSummary":"Summary — tools visible, no arguments","settings.sessions.isolationFull":"Full — sessions cannot see each other","settings.editor.heading":"Editor","settings.editor.vimMode":"Vim mode","settings.editor.showWhitespace":"Show whitespace","settings.editor.livePreview":"Markdown live preview","settings.editor.fontSize":"Font size (px)","settings.editor.fontSizeAria":"editor font size","settings.editor.fontFamily":"Font family","settings.editor.fontFamilyPlaceholder":"monospace (default)","settings.editor.localOnlyHint":"This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.","settings.appearance.syncing":"Syncing appearance…","settings.appearance.default":"Default","settings.appearance.autoLightDark":"auto (light/dark)","settings.appearance.tint":"Tint:","settings.appearance.clearTint":"Clear tint","settings.appearance.none":"none","menu.title":"Menu","menu.showWorkspace":"Show workspace","menu.hideWorkspace":"Hide workspace","menu.openExplorer":"Open explorer","menu.chatOnly":"Chat-only mode","menu.exitChatOnly":"Exit chat-only mode","menu.openTerminal":"Open terminal in tab","menu.openVnc":"Open VNC in tab","menu.newFile":"New file","menu.openRecent":"Open Recent","menu.refreshTree":"Refresh tree","menu.reindex":"Reindex workspace","menu.showHidden":"Show hidden files","menu.hideHidden":"Hide hidden files","menu.scale":"Scale","menu.settings":"Settings"},Su={"compose.placeholder":"输入消息（回车发送，Shift+回车换行）...","compose.send":"发送","compose.stop":"停止","compose.searchPlaceholder":"搜索（回车运行）...","compose.clearAll":"清除全部","compose.clearAllTitle":"清除所有附件和引用","compose.scope":"范围","compose.searchScope":"搜索范围","compose.scopeCurrent":"当前","compose.scopeBranchFamily":"分支系列","compose.scopeAll":"所有聊天","compose.filterImages":"图片","compose.filterAttachments":"附件","compose.search":"搜索","compose.closeSearch":"关闭搜索","compose.shareLocation":"分享位置","compose.attachFile":"附加文件","compose.queueControls":"排队后续消息控制","compose.moveUp":"上移","compose.moveUpQueue":"在队列中上移","compose.moveDown":"下移","compose.moveDownQueue":"在队列中下移","compose.editInCompose":"在输入框中编辑","compose.returnToEditor":"将排队消息返回编辑器","compose.injectSteer":"作为引导插入排队的后续消息","compose.steer":"引导","compose.cancelQueued":"取消排队消息","compose.resizeInput":"调整消息输入框大小","compose.resizeInputHint":"拖动以调整消息输入框大小","compose.modelPicker":"模型选择器","compose.sessionsAndAgents":"会话与代理","compose.openModelPicker":"打开模型选择器","compose.newBranchTitle":"从此聊天创建新分支","compose.newRootTitle":"创建一个干净的根会话，例如 web:ops","compose.renameSessionTitle":"重命名当前会话","compose.pruneSessionTitle":"删除（修剪）当前代理/会话分支","compose.filterImagesTitle":"仅显示含图片的消息","compose.filterAttachmentsTitle":"仅显示含附件的消息","compose.selectModel":"选择模型","compose.loadingModels":"正在加载模型…","compose.noModels":"没有可用的模型。","compose.nextModel":"下一个模型","compose.manageSessions":"管理会话与代理","compose.noSessions":"暂无其他会话。","compose.newBranch":"新建分支","compose.newRoot":"新建根会话…","compose.mergeCurrent":"将当前合并到父级","compose.renameCurrent":"重命名当前…","compose.deleteCurrent":"删除当前…","compose.mergeInto":"将此分支合并到 {target}","compose.mergeBlocked":"当此分支处于活动状态或有子分支时无法合并","workspace.title":"工作区","workspace.newFile":"新建文件","workspace.refresh":"刷新","workspace.actions":"工作区操作","workspace.uploadFiles":"上传文件","workspace.reindexing":"正在重建索引…","workspace.deleteFile":"删除文件","workspace.download":"下载","workspace.uploadToFolder":"上传文件到此文件夹","workspace.addFolderHint":"将文件夹提示添加到输入框","workspace.downloadZip":"将文件夹下载为 zip","workspace.openInTab":"在标签页打开","workspace.openInEditor":"在编辑器打开","workspace.renameSelected":"重命名所选","workspace.downloadSelectedFile":"下载所选文件","workspace.downloadSelectedFolder":"下载所选文件夹（zip）","workspace.deleteSelectedFile":"删除所选文件","shell.settings":"设置","shell.newChat":"新建对话","shell.connecting":"连接中…","shell.connected":"已连接","language.label":"语言","settings.title":"设置","settings.close":"关闭（Esc）","settings.filter":"筛选…","settings.loading":"加载设置中…","settings.section.general":"常规","settings.section.sessions":"会话","settings.section.recordings":"录制","settings.section.compaction":"压缩","settings.section.keyboard":"键盘","settings.section.workspace":"工作区","settings.section.environment":"环境","settings.section.providers":"提供商","settings.section.models":"模型","settings.section.theme":"外观","settings.section.scheduled-tasks":"计划任务","settings.section.quick-actions":"快捷操作","settings.section.keychain":"密钥串","settings.section.tools":"工具","settings.section.addons":"插件","settings.placeholder.recordings":"筛选录制…","settings.placeholder.keyboard":"筛选快捷键…","settings.placeholder.environment":"筛选环境…","settings.placeholder.models":"筛选模型…","settings.placeholder.scheduled-tasks":"筛选计划任务…","settings.placeholder.quick-actions":"筛选快捷操作…","settings.placeholder.keychain":"筛选条目…","settings.placeholder.tools":"筛选工具…","settings.placeholder.addons":"筛选插件…","preview.close":"关闭","preview.loading":"正在加载预览…","preview.files":"文件","preview.folders":"文件夹","preview.compressed":"压缩后","preview.uncompressed":"未压缩","preview.name":"名称","preview.type":"类型","preview.method":"方法","preview.size":"大小","post.deleteMessage":"删除消息","post.tooLarge":"消息过大，无法显示。","post.previewTruncated":"预览已截断。","post.submitted":"已提交","post.discard":"丢弃","post.save":"保存","post.cancel":"取消","post.addNote":"添加备注","post.addNotePlaceholder":"添加备注…","tab.close":"关闭","tab.closeOthers":"关闭其他","tab.closeAll":"全部关闭","tab.reattach":"重新附加","tab.openInWindow":"在窗口中打开","tab.openInNewTab":"在新标签页打开","tab.pinned":"已固定","tab.detached":"已分离","tab.openSeparateWindow":"在独立窗口中打开","status.trackedVariables":"跟踪的变量","status.attachToSession":"附加到会话","status.files":"文件","status.proposedDiff":"建议的差异","status.copyTmux":"复制 tmux 命令","status.experimentDuration":"实验时长","status.sinceLastActivity":"自上次活动以来","annotator.title":"标注图片","annotator.typeLabel":"输入标签…","annotator.undo":"撤销","annotator.resetZoom":"重置缩放","tree.filter":"筛选…","tree.sessionTree":"会话树","btw.label":"BTW 附加对话","btw.close":"关闭 BTW","btw.thinking":"思考中","mdpreview.close":"关闭预览","mdpreview.unavailable":"预览不可用","widget.close":"关闭小部件","oobe.gettingStarted":"入门指南","oobe.needsSetupTitle":"实例需要设置","oobe.configuredTitle":"实例已配置","oobe.needsSetupBody":"此实例尚未配置。请打开“设置”并设置 AI 提供商/模型以开始发送请求。","oobe.configuredBody":"此实例看起来已配置。请在“设置”中查看或更新提供商和模型设置。","oobe.openSettings":"打开设置","oobe.dismiss":"忽略","oobe.done":"完成","palette.placeholder":"输入以跳转到代理、工作区操作或斜杠命令…","palette.hideWorkspace":"隐藏工作区","palette.showWorkspace":"显示工作区","palette.hideWorkspaceDesc":"隐藏工作区侧边栏。","palette.showWorkspaceDesc":"显示工作区侧边栏。","palette.exitChatOnly":"退出仅聊天模式","palette.chatOnly":"仅聊天模式","palette.exitChatOnlyDesc":"返回分屏工作区布局。","palette.chatOnlyDesc":"切换到仅聊天布局。","palette.groupAgents":"代理","palette.groupWorkspace":"工作区","palette.groupSlash":"斜杠命令","palette.hintMove":"移动","palette.hintSelect":"选择","palette.hintPopOut":"弹出","palette.hintClose":"关闭","settings.appliedNotice":"设置已应用。更改将在下一回合生效。","settings.sessions.lifecycle":"会话生命周期","settings.sessions.autoRotate":"自动轮换会话","settings.sessions.maxSize":"最大会话大小（MB）","settings.sessions.maxSizeAria":"最大会话大小","settings.sessions.agentBehaviour":"代理行为","settings.sessions.toolBudget":"工具使用预算","settings.sessions.toolBudgetAria":"工具使用预算","settings.sessions.toolBudgetHint":"每回合最大工具调用消息数","settings.sessions.isolation":"会话隔离","settings.sessions.isolationNone":"无 — 完全跨会话可见","settings.sessions.isolationSummary":"摘要 — 工具可见，无参数","settings.sessions.isolationFull":"完全 — 会话之间不可见","settings.editor.heading":"编辑器","settings.editor.vimMode":"Vim 模式","settings.editor.showWhitespace":"显示空白字符","settings.editor.livePreview":"Markdown 实时预览","settings.editor.fontSize":"字号（px）","settings.editor.fontSizeAria":"编辑器字号","settings.editor.fontFamily":"字体","settings.editor.fontFamilyPlaceholder":"monospace（默认）","settings.editor.localOnlyHint":"仅限此浏览器。编辑器更改存储在本地浏览器中，并在下次打开或重新加载文件标签页时生效。","settings.appearance.syncing":"正在同步外观…","settings.appearance.default":"默认","settings.appearance.autoLightDark":"自动（浅色/深色）","settings.appearance.tint":"色调：","settings.appearance.clearTint":"清除色调","settings.appearance.none":"无","menu.title":"菜单","menu.showWorkspace":"显示工作区","menu.hideWorkspace":"隐藏工作区","menu.openExplorer":"打开资源管理器","menu.chatOnly":"仅聊天模式","menu.exitChatOnly":"退出仅聊天模式","menu.openTerminal":"在标签页中打开终端","menu.openVnc":"在标签页中打开 VNC","menu.newFile":"新建文件","menu.openRecent":"打开最近文件","menu.refreshTree":"刷新目录树","menu.reindex":"重建工作区索引","menu.showHidden":"显示隐藏文件","menu.hideHidden":"隐藏隐藏文件","menu.scale":"缩放","menu.settings":"设置"},eu={"compose.placeholder":"メッセージ（Enterで送信、Shift+Enterで改行）...","compose.send":"送信","compose.stop":"停止","compose.searchPlaceholder":"検索（Enterで実行）...","compose.clearAll":"すべてクリア","compose.clearAllTitle":"すべての添付と参照をクリア","compose.scope":"範囲","compose.searchScope":"検索範囲","compose.scopeCurrent":"現在","compose.scopeBranchFamily":"ブランチファミリー","compose.scopeAll":"すべてのチャット","compose.filterImages":"画像","compose.filterAttachments":"添付","compose.search":"検索","compose.closeSearch":"検索を閉じる","compose.shareLocation":"位置を共有","compose.attachFile":"ファイルを添付","compose.queueControls":"キュー済みフォローアップの操作","compose.moveUp":"上に移動","compose.moveUpQueue":"キュー内で上に移動","compose.moveDown":"下に移動","compose.moveDownQueue":"キュー内で下に移動","compose.editInCompose":"入力欄で編集","compose.returnToEditor":"キュー済みメッセージを入力欄に戻す","compose.injectSteer":"キュー済みフォローアップをステアとして挿入","compose.steer":"ステア","compose.cancelQueued":"キュー済みメッセージをキャンセル","compose.resizeInput":"メッセージ入力欄のサイズ変更","compose.resizeInputHint":"ドラッグしてメッセージ入力欄のサイズを変更","compose.modelPicker":"モデルピッカー","compose.sessionsAndAgents":"セッションとエージェント","compose.openModelPicker":"モデルピッカーを開く","compose.newBranchTitle":"このチャットから新しいブランチを作成","compose.newRootTitle":"web:ops のようなクリーンなルートセッションを作成","compose.renameSessionTitle":"現在のセッションの名前を変更","compose.pruneSessionTitle":"現在のエージェント/セッションブランチを削除（プルーン）","compose.filterImagesTitle":"画像付きメッセージのみ表示","compose.filterAttachmentsTitle":"添付付きメッセージのみ表示","compose.selectModel":"モデルを選択","compose.loadingModels":"モデルを読み込み中…","compose.noModels":"利用可能なモデルがありません。","compose.nextModel":"次のモデル","compose.manageSessions":"セッションとエージェントを管理","compose.noSessions":"他のセッションはまだありません。","compose.newBranch":"新しいブランチ","compose.newRoot":"新しいルート…","compose.mergeCurrent":"現在を親にマージ","compose.renameCurrent":"現在の名前を変更…","compose.deleteCurrent":"現在を削除…","compose.mergeInto":"このブランチを {target} にマージ","compose.mergeBlocked":"このブランチはアクティブな間または子がある間はマージできません","workspace.title":"ワークスペース","workspace.newFile":"新規ファイル","workspace.refresh":"更新","workspace.actions":"ワークスペース操作","workspace.uploadFiles":"ファイルをアップロード","workspace.reindexing":"ワークスペースを再インデックス中…","workspace.deleteFile":"ファイルを削除","workspace.download":"ダウンロード","workspace.uploadToFolder":"このフォルダにファイルをアップロード","workspace.addFolderHint":"フォルダのヒントを入力欄に追加","workspace.downloadZip":"フォルダをzipでダウンロード","workspace.openInTab":"タブで開く","workspace.openInEditor":"エディタで開く","workspace.renameSelected":"選択項目の名前を変更","workspace.downloadSelectedFile":"選択したファイルをダウンロード","workspace.downloadSelectedFolder":"選択したフォルダをダウンロード（zip）","workspace.deleteSelectedFile":"選択したファイルを削除","shell.settings":"設定","shell.newChat":"新規チャット","shell.connecting":"接続中…","shell.connected":"接続済み","language.label":"言語","settings.title":"設定","settings.close":"閉じる（Esc）","settings.filter":"フィルター…","settings.loading":"設定を読み込み中…","settings.section.general":"一般","settings.section.sessions":"セッション","settings.section.recordings":"録画","settings.section.compaction":"圧縮","settings.section.keyboard":"キーボード","settings.section.workspace":"ワークスペース","settings.section.environment":"環境","settings.section.providers":"プロバイダー","settings.section.models":"モデル","settings.section.theme":"外観","settings.section.scheduled-tasks":"スケジュールタスク","settings.section.quick-actions":"クイックアクション","settings.section.keychain":"キーチェーン","settings.section.tools":"ツール","settings.section.addons":"アドオン","settings.placeholder.recordings":"録画をフィルター…","settings.placeholder.keyboard":"ショートカットをフィルター…","settings.placeholder.environment":"環境をフィルター…","settings.placeholder.models":"モデルをフィルター…","settings.placeholder.scheduled-tasks":"スケジュールタスクをフィルター…","settings.placeholder.quick-actions":"クイックアクションをフィルター…","settings.placeholder.keychain":"エントリをフィルター…","settings.placeholder.tools":"ツールをフィルター…","settings.placeholder.addons":"アドオンをフィルター…","preview.close":"閉じる","preview.loading":"プレビューを読み込み中…","preview.files":"ファイル","preview.folders":"フォルダ","preview.compressed":"圧縮後","preview.uncompressed":"非圧縮","preview.name":"名前","preview.type":"種類","preview.method":"方式","preview.size":"サイズ","post.deleteMessage":"メッセージを削除","post.tooLarge":"メッセージが大きすぎて表示できません。","post.previewTruncated":"プレビューは切り詰められました。","post.submitted":"送信済み","post.discard":"破棄","post.save":"保存","post.cancel":"キャンセル","post.addNote":"メモを追加","post.addNotePlaceholder":"メモを追加…","tab.close":"閉じる","tab.closeOthers":"他を閉じる","tab.closeAll":"すべて閉じる","tab.reattach":"再アタッチ","tab.openInWindow":"ウィンドウで開く","tab.openInNewTab":"新しいタブで開く","tab.pinned":"ピン留め済み","tab.detached":"分離済み","tab.openSeparateWindow":"別ウィンドウで開く","status.trackedVariables":"追跡中の変数","status.attachToSession":"セッションにアタッチ","status.files":"ファイル","status.proposedDiff":"提案された差分","status.copyTmux":"tmuxコマンドをコピー","status.experimentDuration":"実験の経過時間","status.sinceLastActivity":"最後のアクティビティから","annotator.title":"画像に注釈","annotator.typeLabel":"ラベルを入力…","annotator.undo":"元に戻す","annotator.resetZoom":"ズームをリセット","tree.filter":"フィルター…","tree.sessionTree":"セッションツリー","btw.label":"BTW サイド会話","btw.close":"BTW を閉じる","btw.thinking":"思考中","mdpreview.close":"プレビューを閉じる","mdpreview.unavailable":"プレビューを利用できません","widget.close":"ウィジェットを閉じる","oobe.gettingStarted":"はじめに","oobe.needsSetupTitle":"インスタンスのセットアップが必要","oobe.configuredTitle":"インスタンスは設定済み","oobe.needsSetupBody":"このインスタンスはまだ設定されていません。設定を開き、AIプロバイダー/モデルを設定してリクエストの送信を開始してください。","oobe.configuredBody":"このインスタンスは設定済みのようです。設定でプロバイダーとモデルの設定を確認または更新してください。","oobe.openSettings":"設定を開く","oobe.dismiss":"閉じる","oobe.done":"完了","palette.placeholder":"入力してエージェント、ワークスペース操作、またはスラッシュコマンドにジャンプ…","palette.hideWorkspace":"ワークスペースを非表示","palette.showWorkspace":"ワークスペースを表示","palette.hideWorkspaceDesc":"ワークスペースサイドバーを非表示にします。","palette.showWorkspaceDesc":"ワークスペースサイドバーを表示します。","palette.exitChatOnly":"チャットのみモードを終了","palette.chatOnly":"チャットのみモード","palette.exitChatOnlyDesc":"分割ワークスペースレイアウトに戻ります。","palette.chatOnlyDesc":"チャットのみのレイアウトに切り替えます。","palette.groupAgents":"エージェント","palette.groupWorkspace":"ワークスペース","palette.groupSlash":"スラッシュコマンド","palette.hintMove":"移動","palette.hintSelect":"選択","palette.hintPopOut":"ポップアウト","palette.hintClose":"閉じる","settings.appliedNotice":"設定を適用しました。変更は次のターンから有効になります。","settings.sessions.lifecycle":"セッションのライフサイクル","settings.sessions.autoRotate":"セッションを自動ローテーション","settings.sessions.maxSize":"最大セッションサイズ（MB）","settings.sessions.maxSizeAria":"最大セッションサイズ","settings.sessions.agentBehaviour":"エージェントの動作","settings.sessions.toolBudget":"ツール使用予算","settings.sessions.toolBudgetAria":"ツール使用予算","settings.sessions.toolBudgetHint":"1ターンあたりの最大ツール呼び出しメッセージ数","settings.sessions.isolation":"セッションの分離","settings.sessions.isolationNone":"なし — セッション間で完全に可視","settings.sessions.isolationSummary":"概要 — ツールは可視、引数は非表示","settings.sessions.isolationFull":"完全 — セッション同士は互いに見えない","settings.editor.heading":"エディター","settings.editor.vimMode":"Vim モード","settings.editor.showWhitespace":"空白文字を表示","settings.editor.livePreview":"Markdown ライブプレビュー","settings.editor.fontSize":"フォントサイズ（px）","settings.editor.fontSizeAria":"エディターのフォントサイズ","settings.editor.fontFamily":"フォントファミリー","settings.editor.fontFamilyPlaceholder":"monospace（デフォルト）","settings.editor.localOnlyHint":"このブラウザーのみ。エディターの変更はローカルブラウザーストレージに保存され、次にファイルタブを開くか再読み込みしたときに有効になります。","settings.appearance.syncing":"外観を同期中…","settings.appearance.default":"デフォルト","settings.appearance.autoLightDark":"自動（ライト/ダーク）","settings.appearance.tint":"色調：","settings.appearance.clearTint":"色調をクリア","settings.appearance.none":"なし","menu.title":"メニュー","menu.showWorkspace":"ワークスペースを表示","menu.hideWorkspace":"ワークスペースを非表示","menu.openExplorer":"エクスプローラーを開く","menu.chatOnly":"チャットのみモード","menu.exitChatOnly":"チャットのみモードを終了","menu.openTerminal":"ターミナルをタブで開く","menu.openVnc":"VNC をタブで開く","menu.newFile":"新規ファイル","menu.openRecent":"最近のファイルを開く","menu.refreshTree":"ツリーを更新","menu.reindex":"ワークスペースを再インデックス","menu.showHidden":"隠しファイルを表示","menu.hideHidden":"隠しファイルを非表示","menu.scale":"拡大縮小","menu.settings":"設定"},mu={en:Z_,"zh-CN":Su,ja:eu},Tn=Dn});function L_({children:n,className:r=""}){let[i,_]=y(null);return X(()=>{if(typeof document>"u")return;let c=document.createElement("div");return c.className=r||"",document.body.appendChild(c),_(c),()=>{try{In(null,c)}finally{c.remove()}}},[]),X(()=>{if(!i)return;i.className=r||"";return},[r,i]),kr(()=>{if(!i)return;In(n,i);return},[n,i]),null}var D_=J(()=>{e()});function ti(n,r){let i=String(n.label||"").localeCompare(String(r.label||""),void 0,{sensitivity:"base"});if(i!==0)return i;return String(n.id||"").localeCompare(String(r.id||""),void 0,{sensitivity:"base"})}function Cn(n){let r=Gn.findIndex((i)=>i.id===n.id);if(r>=0)Gn[r]=n;else Gn.push(n);Gn.sort(ti)}function Nl(n){let r=Gn.findIndex((i)=>i.id===n);if(r>=0)Gn.splice(r,1)}function Y_(){return[...Gn]}function Vl(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var Gn;var fr=J(()=>{Gn=[]});function Gr(n){let r=typeof n==="string"?n.trim():"";return r?r:null}function C_(n={}){if(typeof window>"u")return;let r=Gr(n.section);try{if(window.__piclawSettingsOpenRequested=!0,r)window.__piclawSettingsRequestedSection=r;else delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to record open request flags",i)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:r?{section:r}:void 0}))}function xi(){if(typeof window>"u")return null;return Gr(window.__piclawSettingsRequestedSection)}function J_(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),r=xi();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to clear open request flags",i)}return{open:n,section:r}}function E_(n=typeof window<"u"?window:null){return n||null}function Nr(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function or(n,r){return`${n}:${r}`}function d_(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function S_(n,r){if(n.length<=r)return;n.splice(0,n.length-r)}function Nn(n){if(!n||typeof n!=="object")return null;return{...n}}function Xn(n){if(!n)return null;return Vn.find((r)=>r.id===n)||null}function hi(n,r){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${r}`)}catch(i){console.debug("[app-perf] Ignoring performance.mark failure.",i,{traceId:n,phase:r})}}function e_(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let r=Xn(n);if(!r)return;for(let i of r.phases)performance.clearMarks(`piclaw:${n}:${i.phase}`)}catch(r){console.debug("[app-perf] Ignoring performance.clearMarks failure.",r,{traceId:n})}}function O_(n,r,i){let _=Pn.get(or(n,r));if(_&&Xn(_)?.status==="active")lr(_,"cancelled","superseded",{replacementType:n,replacementChatJid:r});let c=d_(n),u={id:c,type:n,chatJid:r,startedAt:Nr(),detail:Nn(i),phases:[],status:"active"};return Vn.push(u),S_(Vn,100),Pn.set(or(n,r),c),hi(c,"start"),c}function lr(n,r,i,_,c){let u=Xn(n);if(!u||u.status!=="active")return;if(i)u.phases.push({phase:i,at:Nr(),detail:Nn(_)}),hi(u.id,i);if(u.status=r,u.completedAt=Nr(),u.durationMs=u.completedAt-u.startedAt,c!==void 0)u.error=c instanceof Error?c.message:String(c);let f=or(u.type,u.chatJid);if(Pn.get(f)===u.id)Pn.delete(f);e_(u.id)}function sf(n=E_()){let r=n?.__PICLAW_PERF__;if(r)return r;if(n)n.__PICLAW_PERF__=Vr;return Vr}function Jn(n=E_()){return sf(n)}function Ql(n,r,i){return Jn().ensureTrace(n,r,i)}function Ml(n,r){return Jn().getActiveTraceId(n,r)}function ql(n,r,i){Jn().markTrace(n,r,i)}function Al(n,r,i="settled",_){let c=Xn(n);if(!c||c.status!=="active")return!1;let u=new Set(c.phases.map((f)=>f.phase));if(!r.every((f)=>u.has(f)))return!1;return lr(n,"completed",i,_),!0}function Zl(n,r,i="failed",_){Jn().failTrace(n,r,i,_)}function Il(n,r="cancelled",i){Jn().cancelTrace(n,r,i)}function bi(n){return Jn().recordRequest(n)}var Vn,sr,Pn,Vr;var m_=J(()=>{Vn=[],sr=[],Pn=new Map;Vr={startTrace(n,r,i){return O_(n,r,i)},ensureTrace(n,r,i){let _=Pn.get(or(n,r));if(_&&Xn(_)?.status==="active")return _;return O_(n,r,i)},getActiveTraceId(n,r){let i=Pn.get(or(n,r));return i&&Xn(i)?.status==="active"?i:null},markTrace(n,r,i){let _=Xn(n);if(!_||_.status!=="active")return;_.phases.push({phase:r,at:Nr(),detail:Nn(i)}),hi(_.id,r)},completeTrace(n,r="settled",i){lr(n,"completed",r,i)},failTrace(n,r,i="failed",_){lr(n,"failed",i,_,r)},cancelTrace(n,r="cancelled",i){lr(n,"cancelled",r,i)},recordRequest(n){let r=d_("req");return sr.push({...n,id:r,detail:Nn(n.detail)}),S_(sr,300),r},getTraces(){return Vn.map((n)=>({...n,detail:Nn(n.detail),phases:n.phases.map((r)=>({...r,detail:Nn(r.detail)}))}))},getRequests(){return sr.map((n)=>({...n,detail:Nn(n.detail)}))},clear(){Vn.forEach((n)=>e_(n.id)),Vn.splice(0,Vn.length),sr.splice(0,sr.length),Pn.clear()},printSummary(){let n={traces:Vr.getTraces(),requests:Vr.getRequests()};return console.table(n.traces.map((r)=>({id:r.id,type:r.type,chatJid:r.chatJid,status:r.status,durationMs:Number(r.durationMs||0).toFixed(1),lastPhase:r.phases[r.phases.length-1]?.phase||"start"}))),n}}});function On(n){let r=Number(n||0);return Number.isFinite(r)&&r>0?r:null}function lf(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function of(n){let r=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(r)}function a_(n){let r=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(r)}function nc(n=typeof window<"u"?window:null){let r=On(n?.innerWidth)??On(n?.screen?.availWidth)??On(n?.screen?.width)??0,i=On(n?.innerHeight)??On(n?.screen?.availHeight)??On(n?.screen?.height)??0,_=r&&i?Math.min(r,i):r||i,c=r&&i?Math.max(r,i):r||i,u=lf(n),f=Number(n?.navigator?.maxTouchPoints||0),l=u||f>1;if(_>0&&_<=640)return"mobile";if(of(n)&&!a_(n))return"mobile";if(a_(n))return"tablet";if(l&&_>0&&_<=1100)return"tablet";if(c>0&&c<=1180&&_>0&&_<=900)return"tablet";return"desktop"}var W0={};un(W0,{uploadWorkspaceFile:()=>x0,uploadMedia:()=>Yf,updateWorkspaceFile:()=>l0,updateScheduledTask:()=>zi,submitAdaptiveCardAction:()=>Jf,streamSidePrompt:()=>Of,stopSessionRecording:()=>Wi,stopAutoresearch:()=>Mf,steerAgentQueueItem:()=>If,startSessionRecording:()=>Fi,setWorkspaceVisibility:()=>K0,setAgentThoughtVisibility:()=>Sf,sessionRecordingPlaybackUrl:()=>Ri,sessionRecordingExportUrl:()=>$r,sendPeerAgentMessage:()=>Uf,sendAgentMessage:()=>Kn,searchPosts:()=>yf,saveWorkspaceSettings:()=>Ni,saveWebPushSubscription:()=>Gf,saveUiState:()=>ki,saveQuickActionsSettings:()=>Gi,savePostAnnotations:()=>F0,saveEnvironmentOverride:()=>Xr,restoreChatBranch:()=>kf,respondToAgentRequest:()=>Cf,reorderAgentQueueItem:()=>Lf,renameWorkspaceFile:()=>b0,renameChatJid:()=>Hf,renameChatBranch:()=>Ff,removeAgentQueueItem:()=>Zf,reindexWorkspace:()=>u0,purgeChatBranch:()=>Rf,pruneChatBranch:()=>jf,previewSessionRecordingRedaction:()=>Hi,moveWorkspaceEntry:()=>v0,mergeChatBranchIntoParent:()=>Wf,getWorkspaceTree:()=>i0,getWorkspaceRawUrl:()=>ic,getWorkspaceIndexStatus:()=>c0,getWorkspaceFileStat:()=>s0,getWorkspaceFileDownloadUrl:()=>z0,getWorkspaceFile:()=>f0,getWorkspaceDownloadUrl:()=>B0,getWorkspaceBranch:()=>_0,getWebPushPublicKey:()=>Tf,getTimeline:()=>gf,getThumbnailUrl:()=>mf,getThread:()=>tf,getSystemMetrics:()=>xf,getSessionRecordings:()=>Bi,getSessionRecording:()=>Pr,getScheduledTasks:()=>Ki,getQuickActionsSettings:()=>Ti,getPostsByHashtag:()=>wf,getMediaUrl:()=>ef,getMediaText:()=>n0,getMediaInfo:()=>af,getMediaBlob:()=>r0,getEnvironmentSettings:()=>Vi,getChatBranches:()=>Kf,getAutoresearchStatus:()=>Qf,getAgents:()=>Vf,getAgentThought:()=>df,getAgentStatus:()=>Pf,getAgentQueueState:()=>Af,getAgentModels:()=>Pi,getAgentContext:()=>Xf,getAgentCommands:()=>Ui,getActiveChatAgents:()=>pf,forkChatBranch:()=>zf,dismissAutoresearch:()=>qf,deleteWorkspaceFile:()=>p0,deleteWebPushSubscription:()=>Nf,deleteSessionRecording:()=>ji,deletePost:()=>vf,createWorkspaceFile:()=>h0,createRootChatSession:()=>Bf,createReply:()=>bf,createPost:()=>hf,completeInstanceOobe:()=>Df,attachWorkspaceFile:()=>o0,addToWhitelist:()=>Ef,SSEClient:()=>_c});function pn(n,r={}){if(String(r.method||"GET").toUpperCase()!=="GET")return q(n,r);let _=vi.get(n);if(_)return _;let c=q(n,r).finally(()=>{vi.delete(n)});return vi.set(n,c),c}async function q(n,r={}){let i=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),_;try{_=await fetch(rn+n,{...r,headers:{"Content-Type":"application/json",...r.headers}})}catch(u){throw bi({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i,ok:!1,detail:{failedBeforeResponse:!0}}),u}let c=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i;if(bi({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:c,status:_.status,ok:_.ok,requestId:_.headers?.get?.("x-request-id")||null,serverTiming:_.headers?.get?.("Server-Timing")||null}),!_.ok){let u=await _.json().catch(()=>({error:"Unknown error"}));throw Error(u.error||`HTTP ${_.status}`)}return _.json()}function rc(n){let r=String(n||"").split(`
`),i="message",_=[];for(let u of r)if(u.startsWith("event:"))i=u.slice(6).trim()||"message";else if(u.startsWith("data:"))_.push(u.slice(5).trim());let c=_.join(`
`);if(!c)return null;try{return{event:i,data:JSON.parse(c)}}catch{return{event:i,data:c}}}async function $f(n,r){if(!n.body)throw Error("Missing event stream body");let i=n.body.getReader(),_=new TextDecoder,c="";while(!0){let{value:f,done:l}=await i.read();if(l)break;c+=_.decode(f,{stream:!0});let o=c.split(`

`);c=o.pop()||"";for(let $ of o){let b=rc($);if(b)r(b.event,b.data)}}c+=_.decode();let u=rc(c);if(u)r(u.event,u.data)}async function gf(n=10,r=null,i=null){let _=`/timeline?limit=${n}`;if(r)_+=`&before=${r}`;if(i)_+=`&chat_jid=${encodeURIComponent(i)}`;return pn(_)}async function wf(n,r=50,i=0,_=null){let c=_?`&chat_jid=${encodeURIComponent(_)}`:"";return q(`/hashtag/${encodeURIComponent(n)}?limit=${r}&offset=${i}${c}`)}async function yf(n,r=50,i=0,_=null,c="current",u=null,f=null){let l=_?`&chat_jid=${encodeURIComponent(_)}`:"",o=c?`&scope=${encodeURIComponent(c)}`:"",$=u?`&root_chat_jid=${encodeURIComponent(u)}`:"",b=f?.images?"&images=1":"",g=f?.attachments?"&attachments=1":"";return q(`/search?q=${encodeURIComponent(n)}&limit=${r}&offset=${i}${l}${o}${$}${b}${g}`)}async function tf(n,r=null){let i=r?`?chat_jid=${encodeURIComponent(r)}`:"";return q(`/thread/${n}${i}`)}async function xf(){return q("/agent/system-metrics")}async function Ki(n={}){let r=new URLSearchParams;if(n?.id)r.set("id",String(n.id));if(n?.chatJid)r.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")r.set("status",String(n.status));if(n?.limit)r.set("limit",String(n.limit));if(n?.includeRunLogs)r.set("include_run_logs","1");if(n?.runLogLimit)r.set("run_log_limit",String(n.runLogLimit));let i=r.toString()?`?${r.toString()}`:"";return q(`/agent/scheduled-tasks${i}`)}async function zi(n,r,i={}){return q("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:r,allow_internal:i?.allowInternal===!0})})}async function Bi(){return q("/agent/recordings")}async function Pr(n){return q(`/agent/recordings/${encodeURIComponent(n)}`)}async function Fi(n={}){return q("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function Wi(n={}){return q("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function ji(n){return q(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function $r(n,r="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(r)}`}function Ri(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function Hi(n,r={}){return q("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...r})})}async function ki(n){return q("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function hf(n,r=[],i=null){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return q(`/post${_}`,{method:"POST",body:JSON.stringify({content:n,media_ids:r})})}async function bf(n,r,i=[],_=null){let c=_?`?chat_jid=${encodeURIComponent(_)}`:"";return q(`/post/reply${c}`,{method:"POST",body:JSON.stringify({thread_id:n,content:r,media_ids:i})})}async function vf(n,r=!1,i=null){let _=i?`&chat_jid=${encodeURIComponent(i)}`:"",c=`/post/${n}?cascade=${r?"true":"false"}${_}`;return q(c,{method:"DELETE"})}async function Kn(n,r,i=null,_=[],c=null,u=null){let f=u?`?chat_jid=${encodeURIComponent(u)}`:"",l={content:r,thread_id:i,media_ids:_,client_context:{screen_hint:nc()}};if(c==="auto"||c==="queue"||c==="steer")l.mode=c;return q(`/agent/${n}/message${f}`,{method:"POST",body:JSON.stringify(l)})}async function Ui(n="web:default"){let r=typeof n==="string"&&n.trim()?n.trim():"web:default";return pn(`/agent/commands?chat_jid=${encodeURIComponent(r)}`)}async function Ti(){return q("/agent/settings/quick-actions")}async function Gi(n){return q("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function Ni(n){return q("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function Vi(){return q("/agent/settings/environment")}async function Xr(n){return q("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function pf(){return q("/agent/active-chats")}async function Kf(n=null,r={}){let i=new URLSearchParams;if(n)i.set("root_chat_jid",String(n));if(r?.includeArchived)i.set("include_archived","1");let _=i.toString()?`?${i.toString()}`:"";return pn(`/agent/branches${_}`)}async function zf(n,r={}){return q("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...r?.agentName?{agent_name:r.agentName}:{}})})}async function Bf(n){return q("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function Ff(n,r={}){return q("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Wf(n){return q("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function jf(n){return q("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Rf(n){return q("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Hf(n,r){return q("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:r})})}async function kf(n,r={}){return q("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Uf(n,r,i,_="auto",c={}){let u={source_chat_jid:n,content:i,mode:_,...c?.sourceAgentName?{source_agent_name:c.sourceAgentName}:{},...c?.targetBy==="agent_name"?{target_agent_name:r}:{target_chat_jid:r}};return q("/agent/peer-message",{method:"POST",body:JSON.stringify(u)})}async function Tf(){return q("/agent/push/vapid-public-key")}async function Gf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return q("/agent/push/subscription",{method:"POST",body:JSON.stringify(i)})}async function Nf(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return q("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(i)})}async function Vf(){return pn("/agent/roster")}async function Pf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/status${r}`)}async function Xf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/context${r}`)}async function Qf(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/autoresearch/status${r}`)}async function Mf(n=null,r={}){return q("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:r?.generateReport!==!1})})}async function qf(n=null){return q("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function Af(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/queue-state${r}`)}async function Zf(n,r=null){let i=await fetch(rn+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function If(n,r=null){let i=await fetch(rn+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Lf(n,r,i=null){let _=await fetch(rn+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Pi(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return pn(`/agent/models${r}`)}async function Df(n="provider-ready"){return q("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function Yf(n){let r=new FormData;r.append("file",n);let i=await fetch(rn+"/media/upload",{method:"POST",body:r});if(!i.ok){let _=await i.json().catch(()=>({error:"Upload failed"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function Cf(n,r,i=null){let _=await fetch(rn+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:r,chat_jid:i||void 0})});if(!_.ok){let c=await _.json().catch(()=>({error:"Failed to respond"}));throw Error(c.error||`HTTP ${_.status}`)}return _.json()}async function Jf(n){let r=await fetch(rn+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){let i=await r.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(i.error||`HTTP ${r.status}`)}return r.json()}async function Of(n,r={}){let i=await fetch(rn+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:r.systemPrompt||void 0,chat_jid:r.chatJid||void 0}),signal:r.signal});if(!i.ok){let u=await i.json().catch(()=>({error:"Side prompt failed"}));throw Error(u.error||`HTTP ${i.status}`)}let _=null,c=null;if(await $f(i,(u,f)=>{if(r.onEvent?.(u,f),u==="side_prompt_thinking_delta")r.onThinkingDelta?.(f?.delta||"");else if(u==="side_prompt_text_delta")r.onTextDelta?.(f?.delta||"");else if(u==="side_prompt_done")_=f;else if(u==="side_prompt_error")c=f}),c){let u=Error(c?.error||"Side prompt failed");throw u.payload=c,u}return _}async function Ef(n,r){let i=await fetch(rn+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function df(n,r="thought"){let i=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(r)}`;return q(i)}async function Sf(n,r,i){return q("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:r,expanded:Boolean(i)})})}function ef(n){return`${rn}/media/${n}`}function mf(n){return`${rn}/media/${n}/thumbnail`}async function af(n){let r=await fetch(`${rn}/media/${n}/info`);if(!r.ok)throw Error("Failed to get media info");return r.json()}async function n0(n){let r=await fetch(`${rn}/media/${n}`);if(!r.ok)throw Error("Failed to load media text");return r.text()}async function r0(n){let r=await fetch(`${rn}/media/${n}`);if(!r.ok)throw Error("Failed to load media blob");return r.blob()}async function i0(n="",r=2,i=!1){let _=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${r}&show_hidden=${i?"1":"0"}`;return q(_)}async function _0(n=""){let r=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return q(r)}async function c0(n="all"){let r=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return q(r)}async function u0(n="all"){return q("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function f0(n,r=20000,i=null){let _=i?`&mode=${encodeURIComponent(i)}`:"",c=`/workspace/file?path=${encodeURIComponent(n)}&max=${r}${_}`;return q(c)}async function s0(n){return q(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function l0(n,r){return q("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:r})})}async function o0(n){return q("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function g0(n,r="",i={}){let _=new URLSearchParams;if(r)_.set("path",r);if(i.overwrite)_.set("overwrite","1");let c=_.toString();return c?`${n}?${c}`:n}function w0(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function y0(n,r,i,_){return new Promise((c,u)=>{let f=new XMLHttpRequest;f.open("POST",rn+r);for(let[l,o]of Object.entries(i||{}))if(o!==void 0&&o!==null)f.setRequestHeader(l,String(o));f.upload.onprogress=(l)=>{if(typeof _==="function")_({loaded:l.lengthComputable?l.loaded:0,total:l.lengthComputable?l.total:n.size,lengthComputable:l.lengthComputable})},f.onload=()=>{try{let l=f.responseText?JSON.parse(f.responseText):{};if(f.status>=200&&f.status<300)c(l);else{let o=Error(l.error||`HTTP ${f.status}`);o.status=f.status,o.code=l.code,u(o)}}catch{let l=Error(`HTTP ${f.status}`);l.status=f.status,u(l)}},f.onerror=()=>u(Error("Upload failed (network error)")),f.ontimeout=()=>u(Error("Upload timed out")),f.send(n)})}async function t0(n,r="",i={}){let _=w0(),c=g0("/workspace/upload-chunk",r,i),u=Math.max(1,Math.min(pi,Number(i.chunkSize)||$0)),f=Math.max(0,Number(n?.size)||0),l=Math.max(1,Math.ceil(f/u)),o=0,$=null;for(let b=0;b<l;b+=1){let g=b*u,v=Math.min(f,g+u),x=n.slice(g,v),h=x.size;if($=await y0(x,c,{"X-Upload-Id":_,"X-Chunk-Index":b,"X-Chunk-Total":l,"X-File-Name":n?.name||"upload.bin","X-File-Size":f},(K)=>{if(typeof i.onProgress!=="function")return;let t=Math.min(f,o+(K?.loaded||0)),p=f||1;i.onProgress({loaded:t,total:p,percent:Math.round(t/p*100),chunkIndex:b,chunkTotal:l})}),o+=h,typeof i.onProgress==="function"){let K=f||1,t=f?o:K;i.onProgress({loaded:t,total:K,percent:Math.round(t/K*100),chunkIndex:b+1,chunkTotal:l})}}return $}async function x0(n,r="",i={}){if(n?.size>pi){let _=(n.size/1048576).toFixed(0),c=(pi/1048576).toFixed(0),u=Error(`File too large (${_} MB). Maximum upload size is ${c} MB.`);throw u.code="file_too_large",u}return await t0(n,r,i)}async function h0(n,r,i=""){let _=await fetch(rn+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r,content:i})});if(!_.ok){let c=await _.json().catch(()=>({error:"Create failed"})),u=Error(c.error||`HTTP ${_.status}`);throw u.status=_.status,u.code=c.code,u}return _.json()}async function b0(n,r){let i=await fetch(rn+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Rename failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function v0(n,r){let i=await fetch(rn+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:r})});if(!i.ok){let _=await i.json().catch(()=>({error:"Move failed"})),c=Error(_.error||`HTTP ${i.status}`);throw c.status=i.status,c.code=_.code,c}return i.json()}async function p0(n){let r=`/workspace/file?path=${encodeURIComponent(n||"")}`;return q(r,{method:"DELETE"})}async function K0(n,r=!1){return q("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(r)})})}function ic(n,r={}){let i=new URLSearchParams({path:String(n||"")});if(r.download)i.set("download","1");return`${rn}/workspace/raw?${i.toString()}`}function z0(n){return ic(n,{download:!0})}function B0(n,r=!1){let i=`path=${encodeURIComponent(n||"")}&show_hidden=${r?"1":"0"}`;return`${rn}/workspace/download?${i}`}class _c{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,r,i={}){this.onEvent=n,this.onStatusChange=r,this.chatJid=typeof i?.chatJid==="string"&&i.chatJid.trim()?i.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(rn+"/sse/stream"+n);let r=(i)=>{this.eventSource.addEventListener(i,(_)=>{this.markActivity(),this.onEvent(i,JSON.parse(_.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),r("new_post"),r("new_reply"),r("agent_response"),r("interaction_updated"),r("interaction_deleted"),r("agent_status"),r("agent_steer_queued"),r("agent_followup_queued"),r("agent_followup_consumed"),r("agent_followup_removed"),r("workspace_update"),r("agent_draft"),r("agent_draft_delta"),r("agent_thought"),r("agent_thought_delta"),r("model_changed"),r("ui_theme"),r("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(r)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,r=60000,i=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,i+r),this.reconnectAttempts=0;let _=Math.max(this.cooldownUntil-i,0),c=Math.max(this.reconnectDelay,_);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},c),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}async function F0(n,r,i){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return q(`/post/${n}/annotations${_}`,{method:"PATCH",body:JSON.stringify({annotations:r})})}var rn="",vi,pi=1073741824,$0=8388608;var zn=J(()=>{m_();vi=new Map});function R0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(Mr,{detail:{enabled:Boolean(n)}}))}function fc(n){if(typeof fetch!=="function")return;ki({ui_meters:n}).catch((r)=>{console.debug("[meters] Failed to persist meters UI state.",r)})}function H0(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(j0,{detail:{collapsed:Boolean(n)}}))}function Xi(n=!1){return $i(cc,n)}function El(n=!1){return $i(uc,n)}function Qr(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)sn(cc,c?"true":"false");if(_)fc({enabled:c});return R0(c),c}function k0(n,r={}){let i=r.persist!==!1,_=r.persistServer!==!1,c=Boolean(n);if(i)sn(uc,c?"true":"false");if(_)fc({collapsed:c});return H0(c),c}function dl(n){let r=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")Qr(Boolean(n.enabled),{persistServer:!1});else if(r==="toggle"){let i=!Xi(!1);Qr(i,{persistServer:!1})}if(typeof n?.collapsed==="boolean")k0(Boolean(n.collapsed),{persistServer:!1})}var cc="piclaw_system_meters_enabled",uc="piclaw_system_meters_collapsed",Mr="piclaw-meters-change",j0="piclaw-meters-collapsed-change";var sc=J(()=>{zn()});function lc(n,r){if(n===""||n===null||n===void 0)return r;let i=Number(n);return Number.isFinite(i)?i:r}function oc(n,{min:r=-1/0,max:i=1/0}={}){let _=Number.isFinite(Number(r))?Number(r):-1/0,c=Number.isFinite(Number(i))?Number(i):1/0;return Math.min(c,Math.max(_,Number(n)))}function En(n,{fallback:r=0,min:i=-1/0,max:_=1/0}={}){let c=lc(n,r);return oc(c,{min:i,max:_})}function U0(n,{direction:r=1,step:i=1,fallback:_=0,min:c=-1/0,max:u=1/0}={}){let f=En(n,{fallback:_,min:c,max:u}),l=Math.abs(lc(i,1))||1,o=Number(r)<0?-1:1;return oc(f+o*l,{min:c,max:u})}function nn({value:n,min:r,max:i,step:_=1,fallback:c,width:u="80px",disabled:f=!1,label:l,onChange:o}){let $=Number.isFinite(Number(c))?Number(c):En(n,{fallback:0,min:r,max:i}),[b,g]=y(String(n??$)),v=C(!1);X(()=>{if(!v.current)g(String(n??$))},[n,$]);let x=U((K)=>{v.current=!1;let t=En(K,{fallback:$,min:r,max:i});g(String(t)),o?.(t)},[$,r,i,o]),h=U((K)=>{v.current=!1;let t=U0(n,{direction:K,step:_,fallback:$,min:r,max:i});g(String(t)),o?.(t)},[$,i,r,o,_,n]);return s`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${l||"value"}`}
                title=${`Decrease ${l||"value"}`}
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
                onInput=${(K)=>{v.current=!0,g(K.target.value)}}
                onBlur=${(K)=>x(K.target.value)}
                onKeyDown=${(K)=>{if(K.key==="Enter")K.preventDefault(),x(K.target.value),K.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${l||"value"}`}
                title=${`Increase ${l||"value"}`}
                disabled=${f}
                onClick=${()=>h(1)}
            >+</button>
        </span>
    `}var dn=J(()=>{e()});function $c(n){let r=String(n||"").trim();if(!r)return"";if(r.startsWith("http://")||r.startsWith("https://")||r.startsWith("data:")||r.startsWith("blob:"))return r;if(r.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(r.slice(11))}`;if(r.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(r))return"";if(r.startsWith("\\\\"))return"";if(r.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(r.replace(/^\.\//,""))}`}function gc({value:n,onChange:r}){let i=C(null),[_,c]=y($c(n));X(()=>{c($c(n))},[n]);let u=U((f)=>{let l=f.target.files?.[0];if(!l)return;let o=new FileReader;o.onload=()=>{let $=o.result;c($),r?.($)},o.readAsDataURL(l)},[r]);return s`
        <div class="settings-avatar-inline" onClick=${()=>i.current?.click()} title="Click to upload">
            ${_?s`<img src=${_} alt="avatar" />`:s`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${i} style="display:none" onChange=${u} />
        </div>
    `}function wc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function T0(n,r={}){let i=typeof n==="string"?n:"";if(!i)return!1;let _=r.navigator??(typeof navigator<"u"?navigator:null),c=r.document??(typeof document<"u"?document:null);if(_?.clipboard?.writeText)try{return await _.clipboard.writeText(i),!0}catch(u){}try{if(!c?.body||typeof c.createElement!=="function"||typeof c.execCommand!=="function")return!1;let u=c.createElement("textarea");u.value=i,u.setAttribute?.("readonly",""),u.style.position="fixed",u.style.left="-9999px",u.style.top="0",u.style.opacity="0",c.body.appendChild(u),u.focus?.(),u.select?.();let f=Boolean(c.execCommand("copy"));return c.body.removeChild(u),f}catch(u){return!1}}function Qi({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=y(""),[u,f]=y(""),[l,o]=y(""),[$,b]=y(""),[g,v]=y(32),[x,h]=y(256),[K,t]=y(""),[p,W]=y(!1),[Q,z]=y(!1),[H,B]=y(!1),[G,N]=y(()=>Xi(!1)),[w,R]=y(!1),j=C(""),T=C(null),Z=C(!0);X(()=>{return Z.current=!0,()=>{Z.current=!1}},[]);let L=U((O)=>{let P=wc(O);c(P.userName),f(P.userAvatar),o(P.assistantName),b(P.assistantAvatar),v(P.composeUploadLimitMb),h(P.workspaceUploadLimitMb),t(O?.widgetToken||""),j.current=JSON.stringify(P)},[]);X(()=>{L(n||{})},[n,L]),X(()=>{let O=(P)=>{N(Boolean(P?.detail?.enabled))};return window.addEventListener(Mr,O),()=>window.removeEventListener(Mr,O)},[]);let F=D(()=>JSON.stringify(wc({userName:_,userAvatar:u,assistantName:l,assistantAvatar:$,composeUploadLimitMb:g,workspaceUploadLimitMb:x})),[_,u,l,$,g,x]);X(()=>{if(F===j.current)return;if(T.current)clearTimeout(T.current);return T.current=setTimeout(async()=>{if(!Z.current)return;let O=document.activeElement;if(O&&O.closest?.(".settings-number-stepper"))return;try{let P=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:F}),I=await P.json().catch(()=>({}));if(!Z.current)return;if(!P.ok||!I?.ok||!I?.settings)return;j.current=F,i?.(I.settings),R(!0),setTimeout(()=>{if(Z.current)R(!1)},4000)}catch(P){console.warn("[settings/general] Failed to persist general settings snapshot.",P)}},800),()=>{if(T.current)clearTimeout(T.current)}},[F,i]);let M=n?.instanceTotp||{configured:!1,issuer:l||"Piclaw",label:_?`${l||"Piclaw"}:${_}`:l||"Piclaw",secret:"",otpauth:"",qrSvg:""},Y=U(async()=>{if(!K)return;if(await T0(K))z(!0),setTimeout(()=>{if(Z.current)z(!1)},3000);else r?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[K,r]),E=U(async()=>{if(H)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;B(!0);try{let O=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),P=await O.json().catch(()=>({}));if(!O.ok||!P?.ok||!P?.settings)throw Error(P?.error||"Failed to regenerate widget token.");t(P.settings.widgetToken||""),i?.(P.settings),R(!0),setTimeout(()=>{if(Z.current)R(!1)},4000)}catch(O){console.warn("[settings/general] Failed to regenerate widget token.",O)}finally{if(Z.current)B(!1)}},[H,i]),_n=typeof window<"u"&&window.isSecureContext,ln=K?"•".repeat(Math.min(Math.max(K.length,16),48)):"—",wn=p?K||"—":ln;return s`
        <div class="settings-section">
            ${w&&s`
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
                <input type="text" value=${l} onInput=${(O)=>o(O.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${_n?s`
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
                    <input type="checkbox" checked=${G}
                        onChange=${()=>{let O=Qr(!G);N(O)}} />
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
                    value=${x}
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
                        <button class=${`settings-keychain-reveal-btn${p?" active":""}`}
                            type="button"
                            onClick=${()=>W((O)=>!O)}
                            disabled=${!K}
                            title=${p?"Hide token":"Reveal token"}>
                            ${p?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${Y} disabled=${!K} title="Copy token">
                            ${Q?s`<span class="settings-widget-token-copied">Copied</span>`:s`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
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
    `}var yc=J(()=>{e();sc();dn()});var xc={};un(xc,{SessionsSection:()=>G0});function tc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function G0({settingsData:n,setStatus:r,mergeSettingsData:i}){let{t:_}=xn(),[c,u]=y(!0),[f,l]=y(16),[o,$]=y(4000),[b,g]=y(3),[v,x]=y(64),[h,K]=y("none"),[t,p]=y(!1),W=C(""),Q=C(null),z=C(!0);X(()=>{return z.current=!0,()=>{z.current=!1}},[]);let H=U((G)=>{let N=tc(G);u(N.sessionAutoRotate),l(N.sessionMaxSizeMb),$(N.sessionMaxLines),g(N.sessionMaxCompactions),x(N.toolUseBudget),K(N.sessionIsolation),W.current=JSON.stringify(N)},[]);X(()=>{H(n||{})},[n,H]);let B=D(()=>JSON.stringify(tc({sessionAutoRotate:c,sessionMaxSizeMb:f,sessionMaxLines:o,sessionMaxCompactions:b,toolUseBudget:v,sessionIsolation:h})),[c,f,o,b,v,h]);return X(()=>{if(B===W.current)return;if(Q.current)clearTimeout(Q.current);return Q.current=setTimeout(async()=>{if(!z.current)return;let G=document.activeElement;if(G&&G.closest?.(".settings-number-stepper"))return;try{let N=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:B}),w=await N.json().catch(()=>({}));if(!z.current)return;if(!N.ok||!w?.ok||!w?.settings)return;W.current=B,i?.(w.settings),p(!0),setTimeout(()=>{if(z.current)p(!1)},4000)}catch(N){console.warn("[settings/sessions] Failed to persist session settings.",N)}},800),()=>{if(Q.current)clearTimeout(Q.current)}},[B,i]),s`
        <div class="settings-section">
            ${t&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${_("settings.appliedNotice")}
                </div>
            `}
            <h3>${_("settings.sessions.lifecycle")}</h3>
            <div class="settings-row">
                <label>${_("settings.sessions.autoRotate")}</label>
                <input type="checkbox" checked=${c} onChange=${(G)=>u(G.target.checked)} />
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
                    value=${v}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${x}
                />
                <span class="settings-hint" style="margin:0">${_("settings.sessions.toolBudgetHint")}</span>
            </div>
            <div class="settings-row">
                <label>${_("settings.sessions.isolation")}</label>
                <select value=${h} onChange=${(G)=>K(G.target.value)}>
                    <option value="none">${_("settings.sessions.isolationNone")}</option>
                    <option value="summary">${_("settings.sessions.isolationSummary")}</option>
                    <option value="full">${_("settings.sessions.isolationFull")}</option>
                </select>
            </div>
        </div>
    `}var hc=J(()=>{e();dn();Yn()});var bc={};un(bc,{__recordingsSettingsTest:()=>X0,RecordingsSection:()=>P0});function Ar(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Mi(n){if(n==="full")return"full / trusted";if(n==="metadata")return"metadata only";return"redacted"}function qr({children:n,type:r="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function N0(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function gr(n){return String(n||"").split(`
`).map((r)=>r.trim()).filter(Boolean)}function V0({recording:n,details:r,onDelete:i,onRefresh:_}){if(!n)return s`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let c=r?.meta||n,u=Array.isArray(r?.events)?r.events:[],f=u.reduce((o,$)=>o+(Array.isArray($.redactions)?$.redactions.length:0),0),l=u.reduce((o,$)=>{let b=$.kind||"event";return o[b]=(o[b]||0)+1,o},{});return s`
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
                    ${Object.entries(l).map(([o,$])=>s`<${qr}>${o}: ${$}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(u.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function P0({filter:n="",setStatus:r}){let[i,_]=y([]),[c,u]=y([]),[f,l]=y(!0),[o,$]=y(null),[b,g]=y(null),[v,x]=y(null),[h,K]=y(!1),[t,p]=y(N0),[W,Q]=y(""),[z,H]=y("redacted"),[B,G]=y(!0),[N,w]=y(""),[R,j]=y(""),[T,Z]=y('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[L,F]=y(null);X(()=>{let V=(m)=>{let fn=String(m?.detail?.chatJid||"").trim();if(fn)p(fn)};return window.addEventListener("piclaw:current-chat-changed",V),()=>window.removeEventListener("piclaw:current-chat-changed",V)},[]);let M=U(async(V=b)=>{l(!0),$(null);try{let m=await Bi(),fn=m.recordings||[];_(fn),u(m.active||[]);let Wn=fn.find((k)=>k.id===V)||fn[0]||null;if(g(Wn?.id||null),Wn?.id)x(await Pr(Wn.id));else x(null)}catch(m){$(m?.message||"Failed to load recordings.")}finally{l(!1)}},[b]);X(()=>{M()},[M]);let Y=D(()=>i.find((V)=>V.id===b)||null,[i,b]),E=D(()=>c.find((V)=>V.chatJid===t)||null,[c,t]),_n=String(n||"").trim().toLowerCase(),ln=D(()=>{if(!_n)return i;return i.filter((V)=>[V.id,V.title,V.chatJid,V.status,V.mode].some((m)=>String(m||"").toLowerCase().includes(_n)))},[i,_n]),wn=U(async(V)=>{if(g(V?.id||null),x(null),!V?.id)return;try{x(await Pr(V.id))}catch(m){r?.(m?.message||"Failed to load recording.","error")}},[r]),O=U(async()=>{if(h)return;K(!0);try{let V={keys:gr(N),patterns:gr(R)},m=await Fi({chat_jid:t,title:W||void 0,mode:z,include_timeline_snapshot:B,timeline_snapshot_limit:80,redaction:V});r?.(`Recording started for ${t}.`,"success"),await M(m?.recording?.id)}catch(V){r?.(V?.message||"Failed to start recording.","error")}finally{K(!1)}},[h,t,N,R,B,M,z,r,W]),P=U(async(V=E)=>{if(!V||h)return;K(!0);try{let m=await Wi({id:V.id});r?.(`Recording stopped for ${V.chatJid}.`,"success"),await M(m?.recording?.id)}catch(m){r?.(m?.message||"Failed to stop recording.","error")}finally{K(!1)}},[h,E,M,r]),I=U(async(V)=>{if(!V||h)return;if(!window.confirm(`Delete recording ${V.id}?

${V.title||""}`))return;K(!0);try{await ji(V.id),r?.("Recording deleted.","success"),await M(null)}catch(m){r?.(m?.message||"Failed to delete recording.","error")}finally{K(!1)}},[h,M,r]),tn=U(async()=>{try{let V=JSON.parse(T||"null"),m=await Hi(V,{mode:z,redaction:{keys:gr(N),patterns:gr(R)}});F(m.preview)}catch(V){F({error:V?.message||"Preview failed."})}},[N,R,z,T]);return s`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${t} onInput=${(V)=>p(V.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${W} onInput=${(V)=>Q(V.target.value)} /></label>
                    <label>Mode<select value=${z} onChange=${(V)=>H(V.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${B} onChange=${(V)=>G(V.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${N} onInput=${(V)=>w(V.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${R} onInput=${(V)=>j(V.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${E?s`<button onClick=${()=>P(E)} disabled=${h}>Stop current chat recording</button>`:s`<button onClick=${O} disabled=${h}>Start recording</button>`}
                    <button onClick=${()=>M()} disabled=${f}>Refresh</button>
                </div>
                ${c.length>0&&s`<div class="settings-recording-active-row">${c.map((V)=>s`<${qr} type="active">REC ${V.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${T} onInput=${(V)=>Z(V.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${tn}>Preview redaction</button></div>
                ${L&&s`<pre>${JSON.stringify(L,null,2)}</pre>`}
            </details>

            ${f&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${o&&s`<div class="settings-error-state">${o}</div>`}
            ${!f&&!o&&i.length===0&&s`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!f&&!o&&i.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${ln.map((V)=>s`
                            <button class=${`settings-task-row ${V.id===b?"active":""}`} onClick=${()=>wn(V)}>
                                <span class="settings-task-row-main"><strong>${V.title||V.id}</strong><span>${V.chatJid} · ${Ar(V.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${qr} type=${V.status==="recording"?"active":"completed"}>${V.status}<//><${qr}>${Mi(V.mode)}<//></span>
                                <span class="settings-task-row-times">${V.eventCount||0} events</span>
                            </button>
                        `)}
                        ${ln.length===0&&s`<p class="settings-hint">No recordings match “${n}”.</p>`}
                    </div>
                    <${V0} recording=${Y} details=${v} onDelete=${I} onRefresh=${()=>Y&&wn(Y)} />
                </div>
            `}
        </div>
    `}var X0;var vc=J(()=>{e();zn();X0={formatDateTime:Ar,modeLabel:Mi,parseList:gr}});var pc={};un(pc,{CompactionSection:()=>M0});function Q0(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),toolResultSemanticSummaryEnabled:Boolean(n.toolResultSemanticSummaryEnabled??!0),toolResultSemanticSummaryMaxInputChars:n.toolResultSemanticSummaryMaxInputChars??12000,toolResultSemanticSummaryMaxTokens:n.toolResultSemanticSummaryMaxTokens??320,toolResultSemanticSummaryTimeoutSec:n.toolResultSemanticSummaryTimeoutSec??12,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function qi(n){let r=String(n||"").trim();if(!r)return"—";let i=new Date(r);if(Number.isNaN(i.getTime()))return r;return i.toLocaleString()}function M0({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=y(180),[u,f]=y(15),[l,o]=y(360),[$,b]=y(75),[g,v]=y(0.5),[x,h]=y(!0),[K,t]=y(!0),[p,W]=y(12000),[Q,z]=y(320),[H,B]=y(12),[G,N]=y(!1),[w,R]=y(120),[j,T]=y([]),[Z,L]=y([]),[F,M]=y(!1),Y=C(""),E=C(null),_n=C(!0);X(()=>{return _n.current=!0,()=>{_n.current=!1}},[]);let ln=U((P)=>{let I=Q0(P);c(I.compactionTimeoutSec),f(I.compactionBackoffBaseMin),o(I.compactionBackoffMaxMin),b(I.compactionThresholdPercent),v(I.compactionBackoffDecayFactor),h(I.toolResultCompactionEnabled),t(I.toolResultSemanticSummaryEnabled),W(I.toolResultSemanticSummaryMaxInputChars),z(I.toolResultSemanticSummaryMaxTokens),B(I.toolResultSemanticSummaryTimeoutSec),N(I.progressWatchdogEnabled),R(I.progressWatchdogTimeoutSec),T(I.compactionBackoffs),L(I.progressWatchdogPhases),Y.current=JSON.stringify({compactionTimeoutSec:I.compactionTimeoutSec,compactionBackoffBaseMin:I.compactionBackoffBaseMin,compactionBackoffMaxMin:I.compactionBackoffMaxMin,compactionThresholdPercent:I.compactionThresholdPercent,compactionBackoffDecayFactor:I.compactionBackoffDecayFactor,toolResultCompactionEnabled:I.toolResultCompactionEnabled,toolResultSemanticSummaryEnabled:I.toolResultSemanticSummaryEnabled,toolResultSemanticSummaryMaxInputChars:I.toolResultSemanticSummaryMaxInputChars,toolResultSemanticSummaryMaxTokens:I.toolResultSemanticSummaryMaxTokens,toolResultSemanticSummaryTimeoutSec:I.toolResultSemanticSummaryTimeoutSec,progressWatchdogEnabled:I.progressWatchdogEnabled,progressWatchdogTimeoutSec:I.progressWatchdogTimeoutSec})},[]);X(()=>{ln(n||{})},[n,ln]);let wn=D(()=>JSON.stringify({compactionTimeoutSec:_,compactionBackoffBaseMin:u,compactionBackoffMaxMin:l,compactionThresholdPercent:$,compactionBackoffDecayFactor:g,toolResultCompactionEnabled:x,toolResultSemanticSummaryEnabled:K,toolResultSemanticSummaryMaxInputChars:p,toolResultSemanticSummaryMaxTokens:Q,toolResultSemanticSummaryTimeoutSec:H,progressWatchdogEnabled:G,progressWatchdogTimeoutSec:w}),[_,u,l,$,g,x,K,p,Q,H,G,w]);X(()=>{if(wn===Y.current)return;if(E.current)clearTimeout(E.current);return E.current=setTimeout(async()=>{if(!_n.current)return;try{r?.("Saving compaction settings…","info");let P=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:wn}),I=await P.json().catch(()=>({}));if(!_n.current)return;if(!P.ok||!I?.ok||!I?.settings){r?.(I?.error||"Failed to save compaction settings.","error");return}Y.current=wn,i?.(I.settings),ln({...n||{},...I.settings||{}}),r?.("Compaction settings saved.","success"),M(!0),setTimeout(()=>{if(_n.current)M(!1),r?.(null)},4000)}catch(P){if(console.warn("[settings/compaction] Failed to persist compaction settings.",P),_n.current)r?.("Failed to save compaction settings.","error")}},800),()=>{if(E.current)clearTimeout(E.current)}},[wn,i,r,ln,n]);let O=U(async(P)=>{try{r?.(`Clearing compaction suppression for ${P}…`,"info");let I=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:P})}),tn=await I.json().catch(()=>({}));if(!I.ok||!tn?.ok||!tn?.settings){r?.(tn?.error||"Failed to clear compaction suppression.","error");return}i?.(tn.settings),ln({...n||{},...tn.settings||{}}),r?.(`Cleared compaction suppression for ${P}.`,"success")}catch(I){console.warn("[settings/compaction] Failed to clear compaction suppression.",I),r?.("Failed to clear compaction suppression.","error")}},[ln,i,r,n]);return s`
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
                    <input type="checkbox" checked=${x} onChange=${(P)=>h(Boolean(P.target.checked))} />
                    <span class="settings-hint" style="margin:0">When disabled, large tool results stay inline and are not externalized into searchable tool-output handles.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summaries for compacted tool results</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${K} onChange=${(P)=>t(Boolean(P.target.checked))} />
                    <span class="settings-hint" style="margin:0">When enabled, compacted outputs include a semantic summary generated with the active model (preview fallback on failure).</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summary input limit (chars)</label>
                <${nn}
                    label="semantic summary input limit"
                    value=${p}
                    min=${500}
                    max=${200000}
                    fallback=${12000}
                    width="100px"
                    disabled=${!K}
                    onChange=${W}
                />
                <span class="settings-hint" style="margin:0">Maximum characters sampled from full tool output for semantic summarization.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary output max tokens</label>
                <${nn}
                    label="semantic summary max tokens"
                    value=${Q}
                    min=${64}
                    max=${4096}
                    fallback=${320}
                    width="90px"
                    disabled=${!K}
                    onChange=${z}
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
                    disabled=${!K}
                    onChange=${B}
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
                    value=${l}
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
                    onChange=${(P)=>v(P/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${G} onChange=${(P)=>N(Boolean(P.target.checked))} />
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
                    disabled=${!G}
                    onChange=${R}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${j.length===0?s`
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
                            ${j.map((P)=>s`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.failureCount}</td>
                                    <td>${qi(P.backoffUntil)}</td>
                                    <td title=${P.lastErrorMessage||""}>${P.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>O(P.chatJid)}>
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
            ${Z.length===0?s`
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
                            ${Z.map((P)=>s`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.phase}</td>
                                    <td>${qi(P.startedAt)}</td>
                                    <td>${qi(P.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var Kc=J(()=>{e();dn()});function Bc(n){let r=String(n||"").trim().toLowerCase();if(!r)return null;let i=Z0[r]||r;if(/^f(?:[1-9]|1[0-2])$/.test(i))return i;if(I0.has(i))return i;if(i.length===1)return i;if(/^[a-z0-9]+$/.test(i))return i;return null}function Sn(n){let r=String(n||"").trim();if(!r)return null;let i=r.split("+").map((u)=>u.trim()).filter(Boolean);if(!i.length)return null;let _={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let u of i){let f=u.toLowerCase(),l=A0[f];if(l){_[l]=!0;continue}if(_.key)return null;let o=Bc(u);if(!o||o==="escape")return null;_.key=o}if(!_.key)return null;let c=[];if(_.ctrl)c.push("ctrl");if(_.meta)c.push("meta");if(_.alt)c.push("alt");if(_.shift)c.push("shift");return c.push(_.key),c.join("+")}function Fc(n){return String(n||"").split(/[\n,]/).map((r)=>Sn(r)).filter((r)=>Boolean(r))}function kn(n){return n.join(", ")}function Zi(){let n=Q_(zc);if(!n||typeof n!=="object")return{};let r={};for(let i of wr){let _=n[i.id];if(!Array.isArray(_))continue;let c=_.map((u)=>Sn(String(u||""))).filter((u)=>Boolean(u));r[i.id]=[...new Set(c)]}return r}function Ai(n){if(sn(zc,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function Wc(n){return q0.get(n)}function yr(n){let r=Zi()[n];if(Array.isArray(r))return r;return[...Wc(n).defaultBindings]}function jc(n,r){let i=Zi(),_=Wc(n).defaultBindings,c=[...new Set(r.map((u)=>Sn(u)).filter((u)=>Boolean(u)))];if(c.length===_.length&&c.every((u,f)=>u===_[f]))delete i[n];else i[n]=c;Ai(i)}function Ii(n){if(!n){Ai({});return}let r=Zi();delete r[n],Ai(r)}function Zr(){let n={};for(let r of wr)n[r.id]=yr(r.id);return n}function L0(n){let r=typeof n==="string"?n:"";if(!r)return"";if(r.length===1)return r.toLowerCase();return Bc(r)||r.toLowerCase()}function D0(n){let r=Sn(n);if(!r)return null;let i={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let _ of r.split("+")){if(_==="ctrl"||_==="meta"||_==="alt"||_==="shift"){i[_]=!0;continue}i.key=_}return i.key?i:null}function Y0(n,r){let i=D0(r);if(!i)return!1;if(L0(n?.key)!==i.key)return!1;let c=!i.shift&&i.key.length===1&&/[^a-z0-9]/i.test(i.key);return Boolean(n?.ctrlKey)===i.ctrl&&Boolean(n?.metaKey)===i.meta&&Boolean(n?.altKey)===i.alt&&(c||Boolean(n?.shiftKey)===i.shift)}function go(n,r){return yr(r).some((i)=>Y0(n,i))}var zc="piclaw_keyboard_shortcuts_v1",wr,q0,A0,Z0,I0;var Rc=J(()=>{wr=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],q0=new Map(wr.map((n)=>[n.id,n])),A0={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},Z0={esc:"escape",return:"enter",spacebar:"space"},I0=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var Hc={};un(Hc,{KeyboardSection:()=>J0});function C0(n,r,i){let _=String(n||"").trim().toLowerCase();if(!_)return!0;return[r.label,r.description,i,...r.defaultBindings||[]].some((c)=>String(c||"").toLowerCase().includes(_))}function J0({filter:n="",setStatus:r}){let[i,_]=y(()=>{let o=Zr();return Object.fromEntries(Object.entries(o).map(([$,b])=>[$,kn(b)]))});X(()=>{let o=()=>{let $=Zr();_(Object.fromEntries(Object.entries($).map(([b,g])=>[b,kn(g)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",o),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",o)},[]);let c=D(()=>wr.filter((o)=>{let $=String(i[o.id]||"");return C0(n,o,$)}),[i,n]),u=(o)=>{let $=String(i[o]||"").trim(),g=($?$.split(/[\n,]/).map((x)=>x.trim()).filter(Boolean):[]).filter((x)=>!Sn(x));if(g.length>0){r?.(`Invalid shortcut: ${g[0]}. Escape is reserved and cannot be rebound.`,"error");return}let v=Fc($);jc(o,v),_((x)=>({...x,[o]:kn(yr(o))})),r?.("Keyboard shortcuts saved.","success")},f=(o)=>{Ii(o),_(($)=>({...$,[o]:kn(yr(o))})),r?.("Keyboard shortcut reset to default.","success")};return s`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{Ii();let o=Zr();_(Object.fromEntries(Object.entries(o).map(([$,b])=>[$,kn(b)]))),r?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${c.map((o)=>s`
                    <div class="settings-shortcut-card" key=${o.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${o.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${o.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${kn(o.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${i[o.id]||""}
                                placeholder=${kn(o.defaultBindings)}
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
                ${c.length===0&&s`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var kc=J(()=>{e();Rc()});function Gc(n,r=Li){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(300,Math.max(15,Math.round(i)))}function Nc(n,r=Di){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(8,Math.max(0,Math.round(i)))}function Yi(){return{refreshIntervalSec:Gc(gi(Uc,Li),Li),folderPreviewDepth:Nc(gi(Tc,Di),Di)}}function Vc(n={}){let r=Yi(),i={refreshIntervalSec:Gc(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:r.refreshIntervalSec,r.refreshIntervalSec),folderPreviewDepth:Nc(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:r.folderPreviewDepth,r.folderPreviewDepth)};if(sn(Uc,String(i.refreshIntervalSec)),sn(Tc,String(i.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(O0,{detail:{settings:i}}));return i}var O0="piclaw:workspace-client-settings-updated",Uc="workspaceRefreshIntervalSec",Tc="workspaceFolderPreviewDepth",Li=60,Di=3;var Pc=()=>{};var Qc={};un(Qc,{WorkspaceSection:()=>E0});function Xc(n={}){let r=n.workspaceSettings||{};return{webTerminalEnabled:r.webTerminalEnabled!==!1,vncAllowDirect:r.vncAllowDirect!==!1,treeMaxDepth:r.treeMaxDepth??4,treeMaxEntries:r.treeMaxEntries??5000}}function E0({settingsData:n,setStatus:r,mergeSettingsData:i}){let[_,c]=y(!0),[u,f]=y(!0),[l,o]=y(4),[$,b]=y(5000),[g,v]=y(60),[x,h]=y(3),[K,t]=y(!1),[p,W]=y(!1),Q=C(""),z=C(null),H=C(null),B=C(null),G=C(!0);X(()=>{return G.current=!0,()=>{if(G.current=!1,z.current)clearTimeout(z.current);if(H.current)clearTimeout(H.current);if(B.current)clearTimeout(B.current)}},[]);let N=U((j)=>{let T=Xc(j),Z=Yi();c(T.webTerminalEnabled),f(T.vncAllowDirect),o(T.treeMaxDepth),b(T.treeMaxEntries),v(Z.refreshIntervalSec),h(Z.folderPreviewDepth),Q.current=JSON.stringify(T)},[]);X(()=>{N(n||{})},[n,N]);let w=D(()=>JSON.stringify(Xc({workspaceSettings:{webTerminalEnabled:_,vncAllowDirect:u,treeMaxDepth:l,treeMaxEntries:$}})),[_,u,l,$]);X(()=>{if(w===Q.current)return;if(z.current)clearTimeout(z.current);return z.current=setTimeout(async()=>{if(!G.current)return;let j=document.activeElement;if(j&&j.closest?.(".settings-number-stepper"))return;try{let T=await Ni(JSON.parse(w));if(!G.current||!T?.ok||!T?.settings)return;if(Q.current=w,i?.({workspaceSettings:T.settings}),r?.(null),t(!0),H.current)clearTimeout(H.current);H.current=setTimeout(()=>{if(G.current)t(!1)},4000)}catch(T){r?.(String(T?.message||T),"error")}},800),()=>{if(z.current)clearTimeout(z.current)}},[w,i,r]);let R=U((j)=>{let T=Vc(j);if(v(T.refreshIntervalSec),h(T.folderPreviewDepth),W(!0),B.current)clearTimeout(B.current);B.current=setTimeout(()=>{if(G.current)W(!1)},3000)},[]);return s`
        <div class="settings-section">
            ${K&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${p&&s`
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
                    value=${l}
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
                    onChange=${(j)=>R({refreshIntervalSec:j})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${nn}
                    label="folder preview scan depth"
                    value=${x}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(j)=>R({folderPreviewDepth:j})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var Mc=J(()=>{e();zn();Pc();dn()});var qc={};un(qc,{EnvironmentSection:()=>d0});function Ci(n={}){let r=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(r.variables)?r.variables:[],overrides:r.overrides&&typeof r.overrides==="object"?r.overrides:{},count:Number(r.count||0),overrideCount:Number(r.overrideCount||0),keychainEnvNames:Array.isArray(r.keychainEnvNames)?r.keychainEnvNames:[]}}function d0({settingsData:n,filter:r="",setStatus:i,mergeSettingsData:_}){let[c,u]=y(()=>Ci(n||{})),[f,l]=y({}),[o,$]=y(""),[b,g]=y(""),[v,x]=y(null);X(()=>{u(Ci(n||{})),l({})},[n]);let h=U((z)=>{let H=Ci({environmentSettings:z?.settings||z});return u(H),_?.({environmentSettings:H}),l({}),H},[_]),K=U(async()=>{try{let z=await Vi();if(z?.ok)h(z.settings);i?.("Environment refreshed.","info")}catch(z){i?.(String(z?.message||z),"error")}},[h,i]),t=U(async(z,H)=>{let B=String(z||"").trim();if(!B)return;x(B);try{let G=await Xr({action:"set",name:B,value:String(H??"")});if(G?.ok)h(G.settings);if(i?.(`Saved environment override for ${B}.`,"info"),B===o.trim())$(""),g("")}catch(G){i?.(String(G?.message||G),"error")}finally{x(null)}},[h,o,i]),p=U(async(z)=>{let H=String(z||"").trim();if(!H)return;x(H);try{let B=await Xr({action:"clear",name:H});if(B?.ok)h(B.settings);i?.(`Cleared environment override for ${H}.`,"info")}catch(B){i?.(String(B?.message||B),"error")}finally{x(null)}},[h,i]),W=D(()=>{let z=String(r||"").trim().toLowerCase(),H=Array.isArray(c.variables)?c.variables:[];if(!z)return H;return H.filter((B)=>{return`${B?.name||""} ${B?.value||""} ${B?.source||""}`.toLowerCase().includes(z)})},[c.variables,r]),Q=U((z,H)=>{l((B)=>({...B||{},[z]:H}))},[]);return s`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${K}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${o}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(z)=>$(z.target.value)}
                    />
                    <input
                        type="text"
                        value=${b}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(z)=>g(z.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!o.trim()||v===o.trim()}
                        onClick=${()=>t(o,b)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${c.count} variables visible • ${c.overrideCount} overrides active • ${c.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${W.map((z)=>{let H=String(z?.name||""),B=Object.prototype.hasOwnProperty.call(f,H)?f[H]:z.value,G=B!==z.value,N=v===H;return s`
                        <div class="settings-tool-row" key=${H} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${H}>${H}</span>
                            <input
                                type="text"
                                value=${B}
                                spellcheck="false"
                                onInput=${(w)=>Q(H,w.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${z.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${z.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${N||!G} onClick=${()=>t(H,B)}>Save</button>
                                <button type="button" disabled=${N||!z.overridden} onClick=${()=>p(H)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${W.length===0&&s`<p class="settings-hint">No environment variables match "${r}".</p>`}
            </div>
        </div>
    `}var Ac=J(()=>{e();zn()});var Zc={};un(Zc,{ProvidersSection:()=>e0});function S0(n){switch(n){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function e0({providers:n,setStatus:r}){let[i,_]=y(null),[c,u]=y(null),[f,l]=y({}),o=U((t,p)=>{l((W)=>({...W,[t]:p}))},[]),$=U(async(t)=>{let p=(f.apiKey||"").trim();if(!p){r?.("API key cannot be empty.","error");return}_(t),r?.(`Configuring ${t}…`,"info");try{let W=JSON.stringify({provider:t,method:"api_key",api_key:p}),Q=await Kn("default",`/login __step2 ${W}`,null,[]);if(Q?.command?.status==="error"){r?.(Q.command.message,"error");return}r?.(Q?.command?.message||`${t} configured.`,"success"),u(null),l({})}catch(W){r?.(String(W.message||W),"error")}finally{_(null)}},[f,r]),b=U(async(t,p)=>{_(t),r?.(`Configuring ${t}…`,"info");try{let W={provider:t,method:"custom"};for(let H of p.customFields||[])W[H.key]=(f[H.key]||"").trim();let Q=JSON.stringify(W),z=await Kn("default",`/login __step2 ${Q}`,null,[]);if(z?.command?.status==="error"){r?.(z.command.message,"error");return}r?.(z?.command?.message||`${t} configured.`,"success"),u(null),l({})}catch(W){r?.(String(W.message||W),"error")}finally{_(null)}},[f,r]),g=U(async(t)=>{_(t),r?.(`Starting OAuth for ${t}…`,"info");try{let p=JSON.stringify({provider:t}),Q=(await Kn("default",`/login __step1 ${p}`,null,[]))?.command?.message||"";if(Q.includes("http")){let z=Q.match(/(https?:\/\/[^\s)]+)/);if(z)window.open(z[1],"_blank","noopener"),r?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else r?.(Q,"success")}else r?.(Q||`OAuth flow started for ${t}. Check the chat.`,"success")}catch(p){r?.(String(p.message||p),"error")}finally{_(null)}},[r]),v=U(async(t)=>{if(i)return;_(t),r?.(`Logging out ${t}…`,"info");try{await Kn("default",`/logout ${t}`,null,[]),r?.(`Logged out ${t}. Restart may be needed.`,"success")}catch(p){r?.(String(p.message||p),"error")}finally{_(null)}},[i,r]),x=n||[],h=(t)=>c===t,K=(t)=>{u((p)=>p===t?null:t),l({})};return s`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${x.map((t)=>s`
                    <div class=${`settings-provider-card${t.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!t.configured&&K(t.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${t.name}</strong>
                                <span class="settings-provider-id">${t.id}</span>
                                ${t.configured&&s`<span class="settings-tag settings-tag-skill">${S0(t.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${t.hasOAuth&&s`<span class="settings-tag">OAuth</span>`}
                                ${t.hasApiKey&&s`<span class="settings-tag">API Key</span>`}
                                ${t.isCustom&&s`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${t.configured?s`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${i===t.id} onClick=${(p)=>{p.stopPropagation(),v(t.id)}}
                                    >${i===t.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${i===t.id} onClick=${(p)=>{p.stopPropagation(),K(t.id)}}
                                    >Reconfigure</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${i===t.id} onClick=${(p)=>{p.stopPropagation(),K(t.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${h(t.id)&&s`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${t.hasOAuth&&s`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${i===t.id}
                                            onClick=${()=>g(t.id)}>
                                            ${i===t.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${t.hasApiKey&&s`
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
                                ${t.isCustom&&s`
                                    <div class="settings-provider-method">
                                        ${(t.customFields||[]).map((p)=>s`
                                            <div class="settings-provider-field-row">
                                                <label>${p.label}${p.required?" *":""}</label>
                                                <input type="text" value=${f[p.key]||""}
                                                    onInput=${(W)=>o(p.key,W.target.value)}
                                                    placeholder=${p.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===t.id}
                                                onClick=${()=>b(t.id,t)}>
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
    `}var Ic=J(()=>{e();zn()});var Lc={};un(Lc,{ModelsSection:()=>is});function ns(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function rs({thinkingLevel:n,supportsThinking:r,provider:i,availableLevels:_,onSetLevel:c,disabled:u}){let f=ns(i)?m0:a0,l=_&&_.length>1?_:["off","minimal","low","medium","high"],o=Math.max(0,l.indexOf(n??"off"));if(!r)return s`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return s`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${f[l[o]]||l[o]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${l.length-1} step="1" value=${o} disabled=${u}
                    onInput=${($)=>c(l[parseInt($.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${l.map(($,b)=>s`<span class=${b===o?"active":""} onClick=${()=>!u&&c($)}>${f[$]||$}</span>`)}
                </div>
            </div>
        </div>
    `}function is({filter:n=""}){let[r,i]=y(null),[_,c]=y(!1),[u,f]=y("off"),[l,o]=y(!1),[$,b]=y(["off"]),[g,v]=y(!1),[x,h]=y(!1),[K,t]=y(!1),p=U(async()=>{let j=await Pi();if(i(j),j.thinking_level)f(j.thinking_level);if(o(Boolean(j.supports_thinking)),v(Boolean(j.scoped_models_only)),Array.isArray(j.available_thinking_levels)&&j.available_thinking_levels.length>0)b(j.available_thinking_levels);return j},[]);X(()=>{p().catch((j)=>{console.warn("[settings/models] Failed to load models.",j),i({models:[],model_options:[]})})},[]);let W=U(async(j)=>{if(_)return;c(!0);try{await Kn("default",`/model ${j}`,null,[]),await p()}catch(T){console.error("Failed to switch model:",T)}finally{c(!1)}},[_,p]),Q=U(async(j)=>{if(x)return;h(!0),v(Boolean(j));try{let T=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scopedModelsOnly:Boolean(j)})}),Z=await T.json().catch(()=>({}));if(!T.ok||!Z?.ok)throw Error(Z?.error||"Failed to save scoped model setting.");await p()}catch(T){console.error("Failed to set scoped model filtering:",T),await p().catch((Z)=>{console.warn("[settings/models] Reload after scoped model filtering failure failed.",Z)})}finally{h(!1)}},[x,p]),z=U(async(j)=>{if(K)return;t(!0),f(j);try{let T=await Kn("default",`/thinking ${j}`,null,[]);if(T?.command?.thinking_level)f(T.command.thinking_level);o(T?.command?.supports_thinking!==!1),await p()}catch(T){console.error("Failed to set thinking:",T),await p().catch((Z)=>{console.warn("[settings/models] Reload after thinking change failure failed.",Z)})}finally{t(!1)}},[K,p]);if(!r)return s`<div class="settings-loading">Loading models\u2026</div>`;let H=r.model_options||[],B=r.current,N=H.find((j)=>j.label===B)?.provider||"",w=n.toLowerCase(),R=w?H.filter((j)=>j.label.toLowerCase().includes(w)||(j.provider||"").toLowerCase().includes(w)):H;return s`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-row" style="padding:0 0 10px 0; align-items:flex-start">
                <label>Scoped models only</label>
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0">
                    <label style="display:flex; align-items:center; gap:8px; font-weight:500">
                        <input type="checkbox" checked=${g} disabled=${x} onChange=${(j)=>Q(j.target.checked)} />
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
                        ${R.map((j)=>s`
                            <tr class=${j.label===B?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${j.label===B} disabled=${_} onChange=${()=>W(j.label)} /></td>
                                <td>${j.name||j.label}</td><td>${j.provider}</td>
                                <td>${j.context_window?(j.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${j.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${R.length===0&&s`<tr><td colspan="5" class="settings-empty">No models match "${n}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${rs}
                    thinkingLevel=${u}
                    supportsThinking=${l}
                    provider=${N}
                    availableLevels=${$}
                    onSetLevel=${z}
                    disabled=${K||_} />
            </div>
        </div>
    `}var m0,a0;var Dc=J(()=>{e();zn();m0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},a0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function Ei(n){let r=String(n||"").trim().toLowerCase();if(!r)return"default";if(r==="solarized-dark"||r==="solarized-light")return"solarized";if(r==="github-dark"||r==="github-light")return"github";if(r==="tokyo-night")return"tokyo";return r}function Oc(n){if(!n)return null;let r=String(n).trim();if(!r)return null;let i=r.startsWith("#")?r.slice(1):r;if(!/^[0-9a-fA-F]{3}$/.test(i)&&!/^[0-9a-fA-F]{6}$/.test(i))return null;let _=i.length===3?i.split("").map((u)=>u+u).join(""):i,c=parseInt(_,16);return{r:c>>16&255,g:c>>8&255,b:c&255,hex:`#${_.toLowerCase()}`}}function cs(n,r){try{if(document.body){n.style.display="none",document.body.appendChild(n);let i=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),i}}catch{return r}return r}function us(n){if(!n||typeof document>"u")return null;let r=String(n).trim();if(!r)return null;let i=document.createElement("div");if(i.style.color="",i.style.color=r,!i.style.color)return null;let c=cs(i,i.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!c)return null;let u=parseInt(c[1],10),f=parseInt(c[2],10),l=parseInt(c[3],10);if(![u,f,l].every(($)=>Number.isFinite($)))return null;let o=`#${[u,f,l].map(($)=>$.toString(16).padStart(2,"0")).join("")}`;return{r:u,g:f,b:l,hex:o}}function Qn(n){return Oc(n)||us(n)}function di(n,r,i){let _=Math.round(n.r+(r.r-n.r)*i),c=Math.round(n.g+(r.g-n.g)*i),u=Math.round(n.b+(r.b-n.b)*i);return`rgb(${_} ${c} ${u})`}function Ir(n,r){return`rgba(${n.r}, ${n.g}, ${n.b}, ${r})`}function fs(n){let r=n.r/255,i=n.g/255,_=n.b/255,c=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4),u=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),f=_<=0.03928?_/12.92:Math.pow((_+0.055)/1.055,2.4);return 0.2126*c+0.7152*u+0.0722*f}function ss(n){return fs(n)>0.4?"#000000":"#ffffff"}function Ec(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Si(n){return Yc[n]||Yc.default}function ls(n){return n.mode==="auto"?Ec():n.mode}function dc(n,r){let i=Si(n);if(r==="dark"&&i.dark)return i.dark;if(r==="light"&&i.light)return i.light;return i.dark||i.light||Fn}function Bn(n,r,i){let _=Qn(n);if(!_)return n;return di(_,r,i)}function Sc(n,r,i){let _=Qn(r);if(!_)return n;let u=Oc(i==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:Bn(n.bgPrimary,_,0.08),bgSecondary:Bn(n.bgSecondary,_,0.12),bgHover:Bn(n.bgHover,_,0.16),textPrimary:Bn(n.textPrimary,_,i==="dark"?0.08:0.06),textSecondary:Bn(n.textSecondary,_,i==="dark"?0.12:0.1),borderColor:Bn(n.borderColor,_,0.1),accent:_.hex,accentHover:u?di(_,u,0.18):_.hex,warning:Bn(n.warning||Fn.warning,_,0.14),danger:Bn(n.danger,_,0.16),success:Bn(n.success,_,0.16)}}function os(n,r){let i=Qn(n?.warning);if(i)return i.hex;let _=Qn(r==="dark"?Yr.warning:Fn.warning)||Qn(Fn.warning),c=Qn(n?.accent);if(_&&c)return di(_,c,r==="dark"?0.18:0.14);return r==="dark"?Yr.warning:Fn.warning}function $s(n,r){if(typeof document>"u")return;let i=document.documentElement,_=n.accent,c=Qn(_),u=c?Ir(c,r==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,f=c?Ir(c,r==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",l=c?Ir(c,r==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",o=c?ss(c):r==="dark"?"#000000":"#ffffff",$=c?Ir(c,r==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",b=os(n,r),g={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":_,"--accent-hover":n.accentHover||_,"--accent-color-alpha":$,"--accent-soft":f,"--accent-soft-strong":l,"--accent-contrast-text":o,"--warning-color":b,"--danger-color":n.danger||Fn.danger,"--success-color":n.success||Fn.success,"--search-highlight-color":u||"rgba(29, 155, 240, 0.2)"};Object.entries(g).forEach(([v,x])=>{if(x)i.style.setProperty(v,x)})}function gs(){if(typeof document>"u")return;let n=document.documentElement;_s.forEach((r)=>n.style.removeProperty(r))}function en(n,r={}){if(typeof document>"u")return null;let i=typeof r.id==="string"&&r.id.trim()?r.id.trim():null,_=i?document.getElementById(i):document.querySelector(`meta[name="${n}"]`);if(!_)_=document.createElement("meta"),document.head.appendChild(_);if(_.setAttribute("name",n),i)_.setAttribute("id",i);return _}function Cc(n){let r=Ei(Mn?.theme||"default"),i=Mn?.tint?String(Mn.tint).trim():null,_=dc(r,n);if(r==="default"&&i)_=Sc(_,i,n);if(_?.bgPrimary)return _.bgPrimary;return n==="dark"?Yr.bgPrimary:Fn.bgPrimary}function ws(n,r){if(typeof document>"u")return;let i=en("theme-color",{id:"dynamic-theme-color"});if(i&&n)i.removeAttribute("media"),i.setAttribute("content",n);let _=en("theme-color",{id:"theme-color-light"});if(_)_.setAttribute("media","(prefers-color-scheme: light)"),_.setAttribute("content",Cc("light"));let c=en("theme-color",{id:"theme-color-dark"});if(c)c.setAttribute("media","(prefers-color-scheme: dark)"),c.setAttribute("content",Cc("dark"));let u=en("msapplication-TileColor");if(u&&n)u.setAttribute("content",n);let f=en("msapplication-navbutton-color");if(f&&n)f.setAttribute("content",n);let l=en("apple-mobile-web-app-status-bar-style");if(l)l.setAttribute("content",r==="dark"?"black-translucent":"default")}function ys(){if(typeof window>"u")return;let n={...Mn,mode:Jc};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function ts(){if(typeof window>"u")return"web:default";try{let r=new URL(window.location.href).searchParams.get("chat_jid");return r&&r.trim()?r.trim():"web:default"}catch{return"web:default"}}function xs(n){if(typeof document>"u"||!n)return;let r=document.documentElement;if(r?.style)r.style.background=n;if(document.body?.style)document.body.style.background=n}function ei(n,r={}){if(typeof window>"u"||typeof document>"u")return;let i=Ei(n?.theme||"default"),_=n?.tint?String(n.tint).trim():null,c=Si(i),u=ls(c),f=dc(i,u);Mn={theme:i,tint:_},Jc=u;let l=document.documentElement;l.dataset.theme=u,l.dataset.colorTheme=i,l.dataset.tint=_?String(_):"",l.style.colorScheme=u;let o=f;if(i==="default"&&_)o=Sc(f,_,u);if(i==="default"&&!_)gs();else $s(o,u);if(xs(o.bgPrimary),ws(o.bgPrimary,u),ys(),r.persist!==!1)if(sn(Oi,i),_)sn(Dr,_);else sn(Dr,"")}function Lr(){if(Si(Mn.theme).mode!=="auto")return;ei(Mn,{persist:!1})}function hs(){if(typeof window>"u")return;let n=Ei(Hn(Oi)||"default"),r=(()=>{let i=Hn(Dr);return i?i.trim():null})();ei({theme:n,tint:r},{persist:!1})}function ko(){if(typeof window>"u")return()=>{};if(hs(),window.matchMedia&&!Ji){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Lr);else if(n.addListener)n.addListener(Lr);return Ji=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Lr);else if(n.removeListener)n.removeListener(Lr);Ji=!1}}return()=>{}}function mi(n){if(!n||typeof n!=="object")return;let r=ts(),i=n.chat_jid||n.chatJid||null,_=n.theme??n.name??n.colorTheme,c=n.tint??null;if(!i||i===r)ei({theme:_||"default",tint:c},{persist:!1});sn(Oi,_||"default"),sn(Dr,c||"")}function Uo(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return Ec()}var Oi="piclaw_theme",Dr="piclaw_tint",Fn,Yr,Yc,_s,Mn,Jc="light",Ji=!1;var ec=J(()=>{Fn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Yr={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Yc={default:{label:"Default",mode:"auto",light:Fn,dark:Yr},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},_s=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],Mn={theme:"default",tint:null}});function bs(n){return M_.map((r)=>({value:r,label:q_[r],active:r===n}))}function mc({variant:n="inline",onChange:r}={}){let{locale:i,setLocale:_,t:c}=xn(),u=bs(i),f=(l)=>{let o=l?.currentTarget?.value;_(o),r?.(o)};return s`
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
  `}var ac=J(()=>{e();Yn()});var ru={};un(ru,{ThemeSection:()=>vs});function nu(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function vs({themes:n,colorKeys:r,settingsData:i,setStatus:_,mergeSettingsData:c}){let{t:u}=xn(),[f,l]=y("default"),[o,$]=y(""),[b,g]=y(!1),v=C(""),x=C(null),h=C(!0);X(()=>{return h.current=!0,()=>{h.current=!1}},[]);let K=U((z)=>{let H=nu(z);l(H.uiTheme),$(H.uiTint),v.current=JSON.stringify(H)},[]);X(()=>{if(i){K(i);return}K({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[i,K]);let t=U((z,H)=>{mi({theme:z,tint:H||null}),l(z||"default"),$(H||"")},[]),p=D(()=>JSON.stringify(nu({uiTheme:f,uiTint:o})),[f,o]);X(()=>{if(p===v.current)return;if(x.current)clearTimeout(x.current);return x.current=setTimeout(async()=>{if(!h.current)return;g(!0);try{let z=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:p}),H=await z.json().catch(()=>({}));if(!h.current)return;if(!z.ok||!H?.ok||!H?.settings){_?.(H?.error||"Failed to save appearance settings.","error");return}v.current=p,c?.(H.settings),_?.("Appearance synced across clients.","success")}catch(z){if(!h.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",z),_?.("Failed to save appearance settings.","error")}finally{if(h.current)g(!1)}},250),()=>{if(x.current)clearTimeout(x.current)}},[p,c,_]);let W=r||[],Q=n||[];return s`
        <div class="settings-section">
            <div class="settings-row settings-language-row">
                <${mc} variant="inline" />
            </div>
            ${b&&s`<div class="settings-hint" style="margin:0 0 12px 0;">${u("settings.appearance.syncing")}</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${f==="default"}
                        onChange=${()=>t("default",o)} />
                    <strong>${u("settings.appearance.default")}</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">${u("settings.appearance.autoLightDark")}</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">${u("settings.appearance.tint")}</label>
                    <input type="color"
                        value=${o||"#1d9bf0"}
                        onInput=${(z)=>{let H=z.target.value;if($(H),f==="default")mi({theme:"default",tint:H})}} />
                    ${o&&s`
                        <button class="settings-tint-clear" onClick=${()=>t("default","")}
                            title=${u("settings.appearance.clearTint")}>\u2715</button>
                    `}
                    <span class="settings-tint-hex">${o||u("settings.appearance.none")}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${W.map((z)=>s`<th class="settings-swatch-header">${z.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${Q.filter((z)=>z.name!=="default").map((z)=>s`
                        <tr class=${z.name===f?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>t(z.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${z.name===f} onChange=${()=>t(z.name,"")} /></td>
                            <td><strong>${z.label}</strong></td>
                            <td>${z.mode}</td>
                            ${W.map((H)=>{let B=z.colors?.[H];return s`<td class="settings-swatch-cell">
                                    ${B?s`<span class="settings-color-swatch" style=${"background:"+B} title=${B}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var iu=J(()=>{e();ec();ac();Yn()});var cu={};un(cu,{__scheduledTasksSettingsTest:()=>Ws,ScheduledTasksSection:()=>Fs});function qn(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function _u(n){let r=Number(n);if(!Number.isFinite(r))return"—";if(r<1000)return`${Math.round(r)}ms`;return`${(r/1000).toFixed(r<1e4?1:0)}s`}function ai(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${qn(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function n_(n){let r=n?.task_kind||"agent";return r==="internal"?"internal/protected":r}function r_(n){return(n?.task_kind||"agent")==="internal"}function Ks(n){if(!n)return"";let r=String(n).replace(/\s+/g," ").trim();return r.length>180?`${r.slice(0,179)}…`:r}function mn({children:n,type:r="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function zs({task:n}){let r=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!r.length)return s`<p class="settings-hint">No run logs recorded yet.</p>`;return s`
        <div class="settings-task-run-list">
            ${r.map((i)=>s`
                <div class=${`settings-task-run-row settings-task-run-${i.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${mn} type=${i.status==="error"?"error":"success"}>${i.status||"unknown"}<//>
                        <span>${qn(i.run_at)}</span>
                        <span>${_u(i.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${i.error_summary||Ks(i.error)||i.result_summary||i.result||"No summary"}
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
                <span>Next run</span><strong>${qn(n.next_run)}</strong>
                <span>Last run</span><strong>${qn(n.last_run)}</strong>
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
            <${zs} task=${n} />
        </div>
    `}function Fs({filter:n="",setStatus:r}){let[i,_]=y([]),[c,u]=y({active:0,paused:0,completed:0}),[f,l]=y("all"),[o,$]=y(""),[b,g]=y(!0),[v,x]=y(null),[h,K]=y(null),[t,p]=y(null),[W,Q]=y(!1),z=U(async(w={})=>{g(!0),x(null);try{let R=await Ki({status:f,chatJid:o.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});_(R.tasks||[]),u(R.counts||{active:0,paused:0,completed:0});let j=w.selectedId||h,T=(R.tasks||[]).find((Z)=>Z.id===j)||(R.tasks||[])[0]||null;K(T?.id||null),p(T)}catch(R){x(R?.message||"Failed to load scheduled tasks.")}finally{g(!1)}},[f,o,h]);X(()=>{z()},[z]);let H=String(n||"").trim().toLowerCase(),B=D(()=>{if(!H)return i;return i.filter((w)=>[w.id,w.chat_jid,w.status,w.task_kind,w.schedule_type,w.schedule_value,w.summary,w.prompt_summary,w.command_summary,w.latest_run_log?.error_summary].some((R)=>String(R||"").toLowerCase().includes(H)))},[i,H]),G=U((w)=>{K(w?.id||null),p(w||null)},[]),N=U(async(w,R)=>{if(!R||W)return;let j=r_(R),T=R.summary||R.command_summary||R.prompt_summary||R.id,Z=w==="delete"?`Delete scheduled task ${R.id}?

${T}`:`${w==="pause"?"Pause":"Resume"} scheduled task ${R.id}?

${T}`;if(!window.confirm(Z))return;if(j&&!window.confirm(`Task ${R.id} is internal/protected. Continue with ${w}?`))return;Q(!0),r?.(`${w==="delete"?"Deleting":w==="pause"?"Pausing":"Resuming"} ${R.id}…`,"info");try{await zi(w,R.id,{allowInternal:j}),r?.(`Scheduled task ${R.id} ${w==="delete"?"deleted":w==="pause"?"paused":"resumed"}.`,"success"),await z({selectedId:w==="delete"?null:R.id})}catch(L){r?.(L?.message||`Failed to ${w} task.`,"error")}finally{Q(!1)}},[W,z,r]);return s`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${mn} type="active">Active ${c.active||0}<//>
                    <${mn} type="paused">Paused ${c.paused||0}<//>
                    <${mn} type="completed">Completed ${c.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${f} onChange=${(w)=>l(w.target.value)}>
                        ${ps.map((w)=>s`<option value=${w}>${w==="all"?"All statuses":w}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${o} onInput=${(w)=>$(w.target.value)} />
                    <button onClick=${()=>z()} disabled=${b}>Refresh</button>
                </div>
            </div>

            ${b&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${v&&s`<div class="settings-error-state">${v}</div>`}
            ${!b&&!v&&i.length===0&&s`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/i`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!b&&!v&&i.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${B.map((w)=>s`
                            <button class=${`settings-task-row ${w.id===h?"active":""}`} onClick=${()=>G(w)}>
                                <span class="settings-task-row-main">
                                    <strong>${w.summary||w.id}</strong>
                                    <span>${ai(w)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${mn} type=${w.status||"neutral"}>${w.status}<//>
                                    <${mn}>${n_(w)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${qn(w.next_run)} · Last ${qn(w.last_run)}${w.latest_run_log?.status?` · ${w.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${B.length===0&&s`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${Bs} task=${t&&B.some((w)=>w.id===t.id)?t:B[0]} onAction=${N} />
                </div>
            `}
        </div>
    `}var ps,Ws;var uu=J(()=>{e();zn();ps=["all","active","paused","completed"];Ws={formatDateTime:qn,formatDuration:_u,labelForSchedule:ai,kindLabel:n_,isProtectedTask:r_}});function fu(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function an(n){return typeof n==="string"&&n.trim().length>0}function i_(n,...r){let i=fu(n);if(!i)return!0;let _=r.map((c)=>fu(c)).filter(Boolean);for(let c of _)if(c.startsWith(i)||c.includes(i))return!0;return!1}function su(n){if(!Array.isArray(n))return null;let r=[],i=new Set;for(let _ of n){let c=String(_||"").trim();if(!c)continue;let u=c.toLowerCase();if(i.has(u))continue;i.add(u),r.push(c)}return r}function tr(n){let r=n&&typeof n==="object"?n:{};return{workspaceCommands:su(r.workspaceCommands),slashCommands:su(r.slashCommands)}}function lu(n,r){if(!Array.isArray(n))return!0;return n.some((i)=>i.toLowerCase()===r.toLowerCase())}function js(n){let r=Array.isArray(n?.commands)?n.commands:[],i=tr(n?.settings),_=String(n?.query||"");return r.filter((c)=>lu(i.workspaceCommands,c.id)).filter((c)=>i_(_,c.label,c.description,...c.keywords||[])).map((c)=>({key:`workspace:${c.id}`,kind:"workspace",title:c.label,subtitle:c.description,searchText:`${c.label} ${c.description} ${(c.keywords||[]).join(" ")}`.trim(),visualHint:c.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:c.id}))}function Rs(n){let r=Array.isArray(n?.agents)?n.agents:[],i=String(n?.query||""),_=new Set;return r.filter((c)=>{let u=an(c?.chat_jid)?c.chat_jid.trim():"";if(!u||_.has(u))return!1;if(c?.archived_at)return!1;return _.add(u),!0}).filter((c)=>i_(i,`@${String(c?.agent_name||"").trim()}`,c?.session_name,c?.chat_jid)).map((c)=>{let u=an(c?.agent_name)?c.agent_name.trim():String(c?.chat_jid||"").replace(/^[^:]+:/,""),f=an(c?.session_name)?c.session_name.trim():"",l=String(c?.chat_jid||"").trim();return{key:`agent:${l}`,kind:"agent",title:`@${u}`,subtitle:f||l,searchText:`@${u} ${f} ${l}`.trim(),visualHint:u.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:l}})}function Hs(n){let r=Array.isArray(n?.slashCommands)?n.slashCommands:[],i=tr(n?.settings),_=String(n?.query||""),c=new Set;return r.filter((u)=>{let f=an(u?.name)?u.name.trim():"";if(!f||c.has(f.toLowerCase()))return!1;return c.add(f.toLowerCase()),lu(i.slashCommands,f)}).filter((u)=>i_(_,u?.name,u?.description,u?.source)).map((u)=>{let f=String(u?.name||"").trim(),l=an(u?.description)?u.description.trim():"slash command",o=an(u?.source)?u.source.trim():"";return{key:`slash:${f}`,kind:"slash",title:f,subtitle:l,searchText:`${f} ${l} ${String(u?.source||"")}`.trim(),visualHint:"/",categoryLabel:o||"Slash",actionHint:"Insert",commandName:f}})}function Zo(n){return[...Rs({agents:n?.agents,query:n?.query}),...js({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...Hs({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var nr;var ou=J(()=>{nr=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var wu={};un(wu,{QuickActionsSection:()=>ks});function $u(n,...r){let i=String(n||"").trim().toLowerCase();if(!i)return!0;return r.some((_)=>String(_||"").toLowerCase().includes(i))}function gu(n){if(!Array.isArray(n))return null;return new Set(n.map((r)=>String(r||"").trim().toLowerCase()).filter(Boolean))}function ks({filter:n="",setStatus:r,mergeSettingsData:i}){let[_,c]=y(()=>nr.map((B)=>B.id)),[u,f]=y([]),[l,o]=y([]),[$,b]=y(!0),[g,v]=y(!1),x=U(async()=>{b(!0);try{let[B,G]=await Promise.all([Ti(),Ui("web:default").catch(()=>({commands:[]}))]),N=tr(B?.settings),w=Array.isArray(G?.commands)?G.commands:[];o(w),c(Array.isArray(N.workspaceCommands)?N.workspaceCommands:nr.map((R)=>R.id)),f(Array.isArray(N.slashCommands)?N.slashCommands:w.map((R)=>String(R?.name||"").trim()).filter(Boolean))}catch(B){r?.(String(B?.message||B),"error")}finally{b(!1)}},[r]);X(()=>{x()},[x]);let h=D(()=>gu(_),[_]),K=D(()=>gu(u),[u]),t=D(()=>nr.filter((B)=>$u(n,B.label,B.description,...B.keywords||[])),[n]),p=D(()=>l.filter((B)=>$u(n,B?.name,B?.description,B?.source)),[l,n]),W=U((B)=>{c((G)=>{let N=new Set((Array.isArray(G)?G:[]).map((w)=>String(w||"").trim()).filter(Boolean));if(N.has(B))N.delete(B);else N.add(B);return nr.map((w)=>w.id).filter((w)=>N.has(w))})},[]),Q=U((B)=>{f((G)=>{let N=new Set((Array.isArray(G)?G:[]).map((w)=>String(w||"").trim()).filter(Boolean));if(N.has(B))N.delete(B);else N.add(B);return l.map((w)=>String(w?.name||"").trim()).filter((w)=>w&&N.has(w))})},[l]),z=U(()=>{c(nr.map((B)=>B.id)),f(l.map((B)=>String(B?.name||"").trim()).filter(Boolean))},[l]),H=U(async()=>{if(g)return;v(!0),r?.("Saving quick actions…","info");try{let B=await Gi({workspaceCommands:_,slashCommands:u}),G=tr(B?.settings);i?.({quickActions:G}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:G}})),r?.("Quick Actions saved.","success")}catch(B){r?.(String(B?.message||B),"error")}finally{v(!1)}},[i,g,r,u,_]);if($)return s`<div class="settings-loading">Loading…</div>`;return s`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${z} disabled=${g}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${H} disabled=${g}>
                    ${g?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${t.map((B)=>{let G=h?h.has(B.id.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${B.id}>
                            <input type="checkbox" checked=${G} onChange=${()=>W(B.id)} />
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
                ${p.map((B)=>{let G=String(B?.name||"").trim(),N=K?K.has(G.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${G}>
                            <input type="checkbox" checked=${N} onChange=${()=>Q(G)} />
                            <div>
                                <div><code>${G}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${B?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${p.length===0&&s`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var yu=J(()=>{e();zn();ou()});var tu={};un(tu,{KeychainSection:()=>Gs});function Us(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function Gs({filter:n=""}){let[r,i]=y([]),[_,c]=y(!0),[u,f]=y(null),[l,o]=y(!1),[$,b]=y(""),[g,v]=y(""),[x,h]=y(""),[K,t]=y(""),[p,W]=y(""),[Q,z]=y("secret"),[H,B]=y(!1),[G,N]=y({}),[w,R]=y(null),[j,T]=y(null),[Z,L]=y(null),F=C(null),M=C(null),Y=C(null),E=U(async()=>{c(!0),f(null);try{let A=await(await fetch("/agent/keychain")).json();if(A?.ok)i(A.entries||[]);else f(A?.error||"Failed to load keychain.")}catch(k){f("Failed to load keychain.")}finally{c(!1)}},[]);X(()=>{E()},[E]);let _n=U(async()=>{let k=$.trim(),A=g;if(!k||!A)return;B(!0);try{let on=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:k,secret:A,type:Q,username:x.trim()||void 0,userNote:K,agentNote:p})})).json();if(on?.ok)b(""),v(""),h(""),t(""),W(""),z("secret"),o(!1),await E();else f(on?.error||"Failed to add entry.")}catch{f("Failed to add entry.")}finally{B(!1)}},[$,g,x,K,p,Q,E]),ln=U(async(k)=>{try{let cn=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:k})})).json();if(cn?.ok)T(null),L((on)=>on?.name===k?null:on),await E();else f(cn?.error||"Failed to delete entry.")}catch{f("Failed to delete entry.")}},[E]),wn=U(async(k)=>{let A=k?.name;if(!A)return;let cn=G[A]||{},on=Object.prototype.hasOwnProperty.call(cn,"userNote")?cn.userNote:k.userNote||"",gn=Object.prototype.hasOwnProperty.call(cn,"agentNote")?cn.agentNote:k.agentNote||"";R(A);try{let Un=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A,userNote:on,agentNote:gn})})).json();if(Un?.ok)N((br)=>{let ir={...br||{}};return delete ir[A],ir}),await E();else f(Un?.error||"Failed to save notes.")}catch{f("Failed to save notes.")}finally{R(null)}},[G,E]),O=U((k,A,cn)=>{N((on)=>({...on||{},[k]:{...(on||{})[k]||{},[A]:cn}}))},[]),P=U(async(k,A,cn)=>{try{let gn=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:k,master_password:A||void 0,totp_code:cn||void 0})})).json();if(gn?.ok)L({name:k,phase:"revealed",secret:gn.secret,username:gn.username,masterPassword:A});else if(gn?.needs_master_password)L((bn)=>({name:k,phase:"password",masterPassword:"",error:bn?.name===k&&bn?.masterPassword?gn.error:null})),requestAnimationFrame(()=>M.current?.focus());else if(gn?.needs_totp)L((bn)=>({name:k,phase:"totp",masterPassword:A,totpCode:"",error:bn?.name===k&&bn?.phase==="totp"&&bn?.totpCode?gn.error:null})),requestAnimationFrame(()=>Y.current?.focus());else L({name:k,phase:"error",error:gn?.error||"Failed to reveal."})}catch{L({name:k,phase:"error",error:"Failed to reveal."})}},[]),I=U((k)=>{if(Z?.name===k&&Z?.phase==="revealed"){L(null);return}P(k,null,null)},[Z,P]),tn=U((k)=>{let A=Z?.masterPassword||"";if(!A)return;P(k,A,null)},[Z,P]),V=U((k)=>{let A=Z?.totpCode||"";if(A.length<6)return;P(k,Z?.masterPassword,A)},[Z,P]),m=U(async(k)=>{try{await navigator.clipboard.writeText(k)}catch{let A=document.createElement("textarea");A.value=k,A.style.position="fixed",A.style.opacity="0",document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A)}},[]);X(()=>{if(l)requestAnimationFrame(()=>F.current?.focus())},[l]);let fn=n.toLowerCase(),Wn=D(()=>{if(!fn)return r;return r.filter((k)=>k.name.toLowerCase().includes(fn)||(k.type||"").toLowerCase().includes(fn)||(k.envVar||"").toLowerCase().includes(fn)||(k.userNote||"").toLowerCase().includes(fn)||(k.agentNote||"").toLowerCase().includes(fn))},[r,fn]);if(_)return s`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return s`
        <div class="settings-section">
            ${u&&s`
                <div class="settings-keychain-error" role="alert">
                    ${u}
                    <button class="settings-keychain-dismiss" onClick=${()=>f(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${Wn.length} entr${Wn.length===1?"y":"ies"}${fn?` matching "${n}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>o(!l)}>
                    ${l?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${l&&s`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${F} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${$} onInput=${(k)=>b(k.target.value)}
                            class="settings-keychain-input" />
                        <select value=${Q} onChange=${(k)=>z(k.target.value)}
                            class="settings-keychain-select">
                            ${Ts.map((k)=>s`<option value=${k}>${k}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${g} onInput=${(k)=>v(k.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${x} onInput=${(k)=>h(k.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${_n}
                            disabled=${H||!$.trim()||!g}>
                            ${H?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${K} onInput=${(k)=>t(k.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${p} onInput=${(k)=>W(k.target.value)}
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
                        ${Wn.length===0&&s`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${fn?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${Wn.map((k)=>{let A=Z?.name===k.name?Z:null,cn=A?.phase==="revealed",on=A?.phase==="password",gn=A?.phase==="totp",bn=A?.phase==="error",Un=G[k.name]||{},br=Object.prototype.hasOwnProperty.call(Un,"userNote")?Un.userNote:k.userNote||"",ir=Object.prototype.hasOwnProperty.call(Un,"agentNote")?Un.agentNote:k.agentNote||"",Tu=br!==(k.userNote||"")||ir!==(k.agentNote||""),l_=w===k.name;return s`
                            <tr class="settings-keychain-row" key=${k.name}>
                                <td class="settings-keychain-name">${k.name}</td>
                                <td><span class="settings-keychain-type-badge">${k.type}</span></td>
                                <td class="settings-keychain-env">${k.envVar?s`<code>$${k.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Us(k.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${cn?" active":""}`}
                                        onClick=${()=>I(k.name)}
                                        title=${cn?"Hide secret":"Reveal secret"}>
                                        ${cn?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${j===k.name?s`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>ln(k.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>T(null)}>No</button>
                                            </span>
                                        `:s`<button class="settings-keychain-delete-btn" onClick=${()=>T(k.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${k.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${br}
                                                onInput=${($n)=>O(k.name,"userNote",$n.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${ir}
                                                onInput=${($n)=>O(k.name,"agentNote",$n.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!Tu||l_} onClick=${()=>wn(k)}>
                                            ${l_?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${on&&s`
                                <tr class="settings-keychain-prompt-row" key=${k.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${M} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${A?.masterPassword||""}
                                                onInput=${($n)=>L((Sr)=>({...Sr,masterPassword:$n.target.value}))}
                                                onKeyDown=${($n)=>{if($n.key==="Enter")tn(k.name);if($n.key==="Escape")L(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>tn(k.name)}
                                                disabled=${!A?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>L(null)}>Cancel</button>
                                            ${A?.error&&s`<span class="settings-keychain-prompt-error">${A.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${gn&&s`
                                <tr class="settings-keychain-prompt-row" key=${k.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${Y} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${A?.totpCode||""}
                                                onInput=${($n)=>L((Sr)=>({...Sr,totpCode:$n.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${($n)=>{if($n.key==="Enter")V(k.name);if($n.key==="Escape")L(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>V(k.name)}
                                                disabled=${(A?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>L(null)}>Cancel</button>
                                            ${A?.error&&s`<span class="settings-keychain-prompt-error">${A.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${cn&&s`
                                <tr class="settings-keychain-reveal-row" key=${k.name+"-reveal"}>
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
                            ${bn&&s`
                                <tr class="settings-keychain-reveal-row" key=${k.name+"-error"}>
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
    `}var Ts;var xu=J(()=>{e();Ts=["secret","token","password","basic"]});var hu={};un(hu,{ToolsSection:()=>Qs});function Qs({toolsets:n,filter:r="",settingsData:i,mergeSettingsData:_}){let c=n||[],[u,f]=y(()=>{let h={};for(let K of c)h[K.name]=!0;return h}),l=U((h)=>{f((K)=>({...K,[h]:!K[h]}))},[]),o=i?.searchMatchMode||"or",$=D(()=>{let h=Array.isArray(i?.toolResultCompactionTools)?i.toolResultCompactionTools:[];return new Set(h.filter((K)=>typeof K==="string").map((K)=>K.trim().toLowerCase()).filter(Boolean))},[i?.toolResultCompactionTools]),b=U(async()=>{let h=o==="or"?"and":"or";try{let t=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:h})})).json().catch(()=>({}));if(t?.ok&&t?.settings)_?.(t.settings)}catch(K){console.warn("[settings/tools] Failed to save search match mode.",K)}},[o,_]),g=U(async(h)=>{let K=String(h||"").trim().toLowerCase();if(!K)return;let t=new Set($);if(t.has(K))t.delete(K);else t.add(K);try{let W=await(await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toolResultCompactionTools:Array.from(t).sort()})})).json().catch(()=>({}));if(W?.ok&&W?.settings)_?.(W.settings)}catch(p){console.warn("[settings/tools] Failed to save tool compaction settings.",p)}},[$,_]),v=r.toLowerCase(),x=D(()=>{if(!v)return c;return c.map((h)=>{let K=h.tools.filter((t)=>t.name.toLowerCase().includes(v)||h.name.toLowerCase().includes(v)||(t.summary||"").toLowerCase().includes(v));return K.length>0?{...h,tools:K}:null}).filter(Boolean)},[c,v]);if(c.length===0)return s`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return s`
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
            ${x.map((h)=>{let K=u[h.name]!==!1;return s`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${K} onChange=${()=>l(h.name)} />
                            <span class="settings-toolset-icon">${Ns[h.name]||Xs}</span>
                            <strong>${h.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${h.description}</span>
                    </div>
                    ${K&&s`<div class="settings-tool-list">
                        <div class="settings-tool-row settings-tool-row-header" aria-hidden="true">
                            <span class="settings-tool-status-header">Enabled</span>
                            <span class="settings-tool-name">Tool</span>
                            <span class="settings-tool-compact-header">Compact</span>
                            <span class="settings-tool-kind">Kind</span>
                            <span class="settings-tool-summary">Summary</span>
                            <span class="settings-tool-source">Source</span>
                        </div>
                        ${h.tools.map((t)=>{let p=String(t.name||"").trim().toLowerCase(),W=$.has(p);return s`
                                <div class="settings-tool-row">
                                    <input type="checkbox" checked disabled />
                                    <span class="settings-tool-name">${t.name}</span>
                                    <span class="settings-tool-compact">
                                        <input
                                            type="checkbox"
                                            checked=${W}
                                            onChange=${()=>g(t.name)}
                                            title=${W?"Disable tool-result compaction for this tool":"Enable tool-result compaction for this tool"}
                                        />
                                    </span>
                                    <span class="settings-tool-kind" title=${t.kind}>${Ps[t.kind]||"?"}</span>
                                    ${t.summary&&s`<span class="settings-tool-summary">${t.summary}</span>`}
                                    ${!t.summary&&s`<span class="settings-tool-summary"></span>`}
                                    <span class="settings-tool-source">${Vs[t.name]||h.name}</span>
                                </div>
                            `})}
                    </div>`}
                </div>
            `})}
            ${x.length===0&&s`<p class="settings-hint">No tools match "${r}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; the “Compact” column controls tool-result compaction eligibility.</p>
        </div>
    `}var Ns,Vs,Ps,Xs;var bu=J(()=>{e();Ns={core:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},Vs={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Ps={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},Xs=s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var vu={};un(vu,{AddonsSection:()=>Ms});function Ms({setStatus:n,filter:r=""}){let[i,_]=y(null),[c,u]=y(!0),[f,l]=y(null),[o,$]=y(!1),[b,g]=y({runtime:"",windowsNative:!1}),[v,x]=y([]),[h,K]=y([]);function t(){let w=new URLSearchParams;try{let j=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),T=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((L)=>L.trim()).filter(Boolean),Z=localStorage.getItem("piclaw_addons_repo_url");if(j)w.append("catalog_url",j);for(let L of T)w.append("catalog_url",L);if(Z)w.set("repo_url",Z)}catch(j){}let R=w.toString();return R?`?${R}`:""}let p=U(async()=>{try{let[w,R]=await Promise.all([fetch(`/agent/addons${t()}`),fetch("/agent/settings-data")]),j=await w.json();if(j.error)throw Error(j.error);_(j.addons||[]),x(j.sources||[]),K(j.failed_sources||[]);let T=await R.json().catch(()=>({})),Z=typeof T?.runtimePlatform==="string"?T.runtimePlatform:"";g({runtime:Z,windowsNative:Z==="win32"})}catch(w){_(null),n?.(String(w.message||w),"error")}finally{u(!1)}},[n]);X(()=>{p()},[]);let W=U(async(w)=>{if(f)return;l({slug:w,action:"install"}),n?.(`Installing ${w}…`,"info");try{let j=await(await fetch(`/agent/addons/install${t()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:w})})).json();if(j.error){n?.(j.error,"error");return}$(!0);let T=[j.message,j.warning].filter(Boolean).join(" ");n?.(T||"Add-on installed.","success"),await p()}catch(R){n?.(String(R.message||R),"error")}finally{l(null)}},[f,p,n]),Q=U(async(w)=>{if(f)return;l({slug:w,action:"remove"}),n?.(`Removing ${w}…`,"info");try{let j=await(await fetch(`/agent/addons/uninstall${t()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:w})})).json();if(j.error){n?.(j.error,"error");return}$(!0);let T=[j.message,j.warning].filter(Boolean).join(" ");n?.(T||"Add-on removed.","success"),await p()}catch(R){n?.(String(R.message||R),"error")}finally{l(null)}},[f,p,n]),z=U(async()=>{if(f)return;l({slug:null,action:"restart"}),n?.("Restarting piclaw…","info");try{let R=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(R.error){n?.(R.error,"error"),l(null);return}n?.(R.message||"Restarting piclaw…","success"),$(!1),(async(T=30,Z=2000)=>{for(let L=0;L<T;L++){await new Promise((F)=>setTimeout(F,Z));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await p(),l(null),n?.("Restart complete — add-ons refreshed.","success");return}}catch(F){}}l(null),n?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(w){n?.(String(w.message||w),"error"),l(null)}},[f,n,p]);if(c)return s`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!i)return s`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let H=r.toLowerCase(),B=H?i.filter((w)=>w.slug.toLowerCase().includes(H)||(w.description||"").toLowerCase().includes(H)||(w.tags||[]).some((R)=>R.toLowerCase().includes(H))):i,G=f?.slug||null,N=f?f.action==="remove"?`Removing ${f.slug}…`:f.action==="restart"?"Restarting piclaw…":`Installing ${f.slug}…`:"";return s`
        <div class=${`settings-section settings-addon-panel${f?" busy":""}`} aria-busy=${f?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${v.length<=1?s`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:s`${v.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${h.length>0&&s`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${h.length} catalog source${h.length>1?"s":""}:
                            ${h.map((w)=>s` <code style="font-size:0.82em;word-break:break-all">${w}</code>`)}
                        </div>
                    `}
                    ${v.length>1&&s`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${v.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${v.map((w)=>s`<li style="word-break:break-all"><code>${w}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${b.windowsNative&&s`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            <div class="settings-addon-list">
                ${f&&s`
                    <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${N}>
                        <div class="settings-addon-panel-overlay-card">
                            <div class="settings-spinner"></div>
                            <span>${N}</span>
                        </div>
                    </div>
                `}
                ${B.map((w)=>{let R=(w.skills||[]).length>0,j=w.type==="extension",T=R&&j?"extension + skill":R?"skill":"extension",Z=R&&!j?"settings-tag-skill":"",L=typeof w.homepage==="string"&&w.homepage.trim()?w.homepage.trim():"";return s`
                    <div class=${`settings-addon-card${w.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${L?s`<a class="settings-addon-name-link" href=${L} target="_blank" rel="noopener noreferrer">${w.slug}</a>`:s`<strong>${w.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${Z}`}>${T}</span>
                            <span class="settings-addon-version">${w.installed?w.installedVersion||"?":w.version||""}</span>
                            ${w.installKind&&s`<span class="settings-tag">${w.installKind}</span>`}
                            ${w.hasUpdate&&s`<span class="settings-tag settings-tag-skill">\u2191 ${w.version}</span>`}
                            <div class="settings-addon-actions">
                                ${w.installed?s`
                                    ${w.hasUpdate&&s`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(f)} onClick=${()=>W(w.slug)}>${G===w.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(f)} onClick=${()=>Q(w.slug)}>${G===w.slug?"…":"Remove"}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(f)} onClick=${()=>W(w.slug)}>${G===w.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${w.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(w.tags||[]).map((F)=>s`<span class="settings-tag">${F}</span>`)}${(w.skills||[]).map((F)=>s`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${F}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${B.length===0&&s`<p class="settings-hint">No add-ons match "${r}"</p>`}
            </div>
            ${o&&s`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(f)} onClick=${z}>Restart Now</button>
                </div>
            `}
        </div>
    `}var pu=J(()=>{e()});var Ys={};function __(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function Cr(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function qs(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function As(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Zs(n,r,i,_){try{return En(localStorage.getItem(n),{fallback:r,min:i,max:_})}catch{return En(r,{fallback:r,min:i,max:_})}}function Is(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function Ls(){let{t:n}=xn(),[r,i]=y(()=>__("piclaw_vim_mode",!1)),[_,c]=y(()=>__("piclaw_show_whitespace",!0)),[u,f]=y(()=>__("piclaw_md_live_preview",!0)),[l,o]=y(()=>Zs("piclaw_editor_font_size",13,10,24)),[$,b]=y(()=>qs("piclaw_editor_font_family","")),g=U((v,x,h)=>{let K=!x;h(K),Cr(v,K)},[]);return s`
        <div class="settings-section">
            <h3>${n("settings.editor.heading")}</h3>
            <div class="settings-row">
                <label>${n("settings.editor.vimMode")}</label>
                <input type="checkbox" checked=${r}
                    onChange=${()=>{let v=!r;i(v),Cr("piclaw_vim_mode",v)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.showWhitespace")}</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let v=!_;c(v),Cr("piclaw_show_whitespace",v)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.livePreview")}</label>
                <input type="checkbox" checked=${u}
                    onChange=${()=>{let v=!u;f(v),Cr("piclaw_md_live_preview",v)}} />
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
                    onChange=${(v)=>{o(v),Is("piclaw_editor_font_size",v)}}
                />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontFamily")}</label>
                <input type="text" value=${$}
                    onInput=${(v)=>{let x=v.target.value;b(x),As("piclaw_editor_font_family",x)}}
                    placeholder=${n("settings.editor.fontFamilyPlaceholder")} />
            </div>
            <p class="settings-hint settings-local-only-hint">${n("settings.editor.localOnlyHint")}</p>
        </div>
    `}var Ds;var Ku=J(()=>{e();fr();dn();Yn();Ds=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;Cn({id:"editor",label:"Editor",icon:Ds,component:Ls,order:150})});var Os={};function c_(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function u_(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function f_(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function s_(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Cs(){let[n,r]=y(()=>c_("piclaw_dev_mode",!1)),[i,_]=y(()=>f_("piclaw_addons_catalog_url","")),[c,u]=y(()=>f_("piclaw_addons_catalog_urls","")),[f,l]=y(()=>f_("piclaw_addons_repo_url","")),[o,$]=y(()=>c_("piclaw_debug_sse",!1)),[b,g]=y(()=>c_("piclaw_debug_tool_calls",!1)),v=U(()=>{let x=!n;r(x),u_("piclaw_dev_mode",x)},[n]);return s`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${n} onChange=${v} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${n&&s`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${i}
                        onInput=${(x)=>{let h=x.target.value;_(h),s_("piclaw_addons_catalog_url",h)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${c}
                        onInput=${(x)=>{let h=x.target.value;u(h),s_("piclaw_addons_catalog_urls",h)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${f}
                        onInput=${(x)=>{let h=x.target.value;l(h),s_("piclaw_addons_repo_url",h)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${o}
                        onChange=${()=>{let x=!o;$(x),u_("piclaw_debug_sse",x)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${b}
                        onChange=${()=>{let x=!b;g(x),u_("piclaw_debug_tool_calls",x)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var Js;var zu=J(()=>{e();fr();Js=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;Cn({id:"developer",label:"Developer",icon:Js,component:Cs,order:900})});var xl={};un(xl,{openSettingsDialog:()=>tl,SettingsDialogContent:()=>dr,SettingsDialog:()=>yl});function hr(n){xr.push({ts:performance.now(),label:n})}function Es(){if(!xr.length)return;let n=xr[0].ts,r=xr.map((i)=>`+${(i.ts-n).toFixed(1)}ms ${i.label}`);console.info(`[settings-dialog perf]
`+r.join(`
`));try{window.__piclawSettingsPerfLog=r}catch(i){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:r})}).catch((i)=>{})}catch(i){}xr.length=0}function es(n){let r=Er.get(n);if(r)return Promise.resolve(r);let i=Jr.get(n);if(i)return i;let _=ds[n]().then((c)=>{return Er.set(n,c),Jr.delete(n),c}).catch((c)=>{throw Jr.delete(n),c});return Jr.set(n,_),_}function Or(n="Loading…"){return s`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function dr({onClose:n}){hr("SettingsDialogContent-render-start");let[r,i]=y(()=>xi()||"general"),[_,c]=y(Bu),[u,f]=y(null),[l,o]=y(""),[,$]=y(0),[b,g]=y(()=>Object.fromEntries(Er.entries())),[v,x]=y(null),[h,K]=y({compact:!1,narrow:!1}),t=C(null),p=C(null),{t:W}=xn(),Q=(F)=>F?.isExtension?F.label:W(`settings.section.${F.id}`),z=(F)=>F?.isExtension?F.placeholder||W("settings.filter"):W(`settings.placeholder.${F.id}`);X(()=>{hr("SettingsDialogContent-mounted"),Es()},[]),X(()=>{let F=(M)=>{if(M.key==="Escape")n()};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[n]),X(()=>{let F=(M)=>{let Y=typeof M?.detail?.section==="string"?M.detail.section.trim():"";if(Y)i(Y),o("")};return window.addEventListener("piclaw:open-settings",F),()=>window.removeEventListener("piclaw:open-settings",F)},[]),X(()=>{let F=()=>$((M)=>M+1);return window.addEventListener("piclaw:settings-panes-changed",F),()=>window.removeEventListener("piclaw:settings-panes-changed",F)},[]),X(()=>{fetch("/agent/settings-data").then((F)=>F.json()).then((F)=>{Bu=F,c(F)}).catch(()=>c({}))},[]),X(()=>{let F=p.current;if(!F)return;let M=()=>{let Y=F.clientWidth||0;K((E)=>{let _n={compact:Y>0&&Y<=860,narrow:Y>0&&Y<=720};return E.compact===_n.compact&&E.narrow===_n.narrow?E:_n})};if(M(),typeof ResizeObserver==="function"){let Y=new ResizeObserver(()=>M());return Y.observe(F),()=>Y.disconnect()}return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]);let H=[...Wu].sort((F,M)=>(F.order??500)-(M.order??500)),G=Y_().map((F)=>({id:F.id,label:F.label,icon:F.icon,searchable:F.searchable||!1,placeholder:F.searchPlaceholder,order:F.order??500,isExtension:!0,component:F.component})).sort(ti),N=[...H,...G],w=N.find((F)=>F.id===r)||Wu.find((F)=>F.id===r);X(()=>{if(w?.searchable)requestAnimationFrame(()=>t.current?.focus())},[r]),X(()=>{if(w?.isExtension){x(null);return}let F=!1;if(b[r]){x(null);return}return x(r),es(r).then((M)=>{if(F)return;g((Y)=>Y?.[r]?Y:{...Y||{},[r]:M})}).catch((M)=>{if(F)return;console.error(`[settings-dialog] Failed to lazy-load section "${r}".`,M)}).finally(()=>{if(!F)x((M)=>M===r?null:M)}),()=>{F=!0}},[r,w?.isExtension,b]);let R=U((F,M="info")=>{f(F?{text:F,type:M}:null)},[]),j=U((F)=>{i(F),o("");let M=Ss[F];if(M&&!Fu.has(F))Fu.add(F),M().then(()=>$((Y)=>Y+1)).catch((Y)=>{})},[]),T=U((F)=>{c((M)=>({...M||{},...F||{}}))},[]),Z=()=>{if(w?.isExtension){if(!w.component)return Or("Loading pane…");let M=w.component;return s`<${M} filter=${l} />`}let F=b[r];if(!F||v===r)return Or(`${W("settings.loading")}`);switch(r){case"general":return s`<${F} settingsData=${_} setStatus=${R} mergeSettingsData=${T} />`;case"sessions":return s`<${F} settingsData=${_} setStatus=${R} mergeSettingsData=${T} />`;case"recordings":return s`<${F} filter=${l} setStatus=${R} />`;case"compaction":return s`<${F} settingsData=${_} setStatus=${R} mergeSettingsData=${T} />`;case"keyboard":return s`<${F} filter=${l} setStatus=${R} />`;case"workspace":return s`<${F} settingsData=${_} setStatus=${R} mergeSettingsData=${T} />`;case"environment":return s`<${F} settingsData=${_} filter=${l} setStatus=${R} mergeSettingsData=${T} />`;case"providers":return s`<${F} providers=${_?.providers} setStatus=${R} />`;case"models":return s`<${F} filter=${l} />`;case"theme":return s`<${F} themes=${_?.themes} colorKeys=${_?.colorKeys} settingsData=${_} setStatus=${R} mergeSettingsData=${T} />`;case"scheduled-tasks":return s`<${F} filter=${l} setStatus=${R} />`;case"quick-actions":return s`<${F} filter=${l} setStatus=${R} mergeSettingsData=${T} />`;case"keychain":return s`<${F} filter=${l} />`;case"tools":return s`<${F} toolsets=${_?.toolsets} filter=${l} settingsData=${_} mergeSettingsData=${T} />`;case"addons":return s`<${F} setStatus=${R} filter=${l} />`;default:return Or(W("settings.loading"))}},L=!w;return hr("SettingsDialogContent-render-end"),s`
        <div class="settings-dialog-backdrop" onClick=${(F)=>{if(F.target===F.currentTarget)n()}}>
            <div ref=${p} data-testid="settings-dialog" class=${`settings-dialog${h.compact?" settings-dialog-compact":""}${h.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">${W("settings.title")}</span>
                    ${w?.searchable&&s`
                        <input ref=${t} type="text" class="settings-header-filter"
                            placeholder=${z(w)}
                            value=${l} onInput=${(F)=>o(F.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title=${W("settings.close")}>✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${N.map((F,M)=>{let Y=M>0&&!N[M-1].isExtension,E=F.isExtension&&Y;return s`
                                ${E&&s`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${F.id===r?"active":""}`} onClick=${()=>j(F.id)}>
                                    <span class="settings-nav-icon">${F.icon}</span>
                                    <span class="settings-nav-label">${Q(F)}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${L?Or(W("settings.loading")):Z()}
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
    `}function yl(){let[n,r]=y(!1);if(X(()=>{let i=(c)=>{let u=Gr(c?.detail?.section);if(u)try{window.__piclawSettingsRequestedSection=u}catch(f){}r(!0)};window.addEventListener("piclaw:open-settings",i);let _=J_();if(_.open){if(_.section)try{window.__piclawSettingsRequestedSection=_.section}catch(c){}r(!0)}return()=>window.removeEventListener("piclaw:open-settings",i)},[]),!n)return null;return s`<${L_} className="settings-portal"><${dr} onClose=${()=>r(!1)} /><//>`}function tl(n={}){C_(n)}var xr,Bu=null,Er,Jr,ds,Ss,Fu,ms,as,nl,rl,il,_l,cl,ul,fl,sl,ll,ol,$l,gl,wl,Wu;var ju=J(()=>{e();Yn();D_();fr();yc();xr=[];hr("module-eval-start");hr("imports-done");Er=new Map,Jr=new Map;Er.set("general",Qi);ds={general:()=>Promise.resolve(Qi),sessions:()=>Promise.resolve().then(() => (hc(),xc)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => (vc(),bc)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (Kc(),pc)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (kc(),Hc)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (Mc(),Qc)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (Ac(),qc)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (Ic(),Zc)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Dc(),Lc)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (iu(),ru)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (uu(),cu)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (yu(),wu)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (xu(),tu)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (bu(),hu)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (pu(),vu)).then((n)=>n.AddonsSection)},Ss={"editor-settings":()=>Promise.resolve().then(() => (Ku(),Ys)).then(()=>{}),developer:()=>Promise.resolve().then(() => (zu(),Os)).then(()=>{})},Fu=new Set;ms=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,as=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,nl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,rl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,il=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,_l=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,cl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,ul=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,fl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,sl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,ll=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,ol=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,$l=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,gl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,wl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,Wu=[{id:"general",label:"General",icon:ms,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:as,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:nl,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:rl,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:cl,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:il,searchable:!1,order:15},{id:"environment",label:"Environment",icon:_l,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:ul,searchable:!1,order:20},{id:"models",label:"Models",icon:fl,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:sl,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:ll,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:$l,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:gl,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:ol,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:wl,searchable:!0,placeholder:"Filter add-ons…",order:90}]});e();ju();fr();var hl=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function bl({label:n,body:r,filter:i=""}){return s`
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
  `}function vl(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let r of n)Cn({id:r.id,label:r.label,icon:hl,searchable:!0,searchPlaceholder:`Filter ${r.label} settings…`,order:r.id==="fixture-z-observability"?1:999,component:(i)=>s`<${bl} label=${r.label} body=${r.body} filter=${i?.filter||""} />`})}var hn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},pl={current:hn.current,models:hn.models,model_options:hn.model_options,thinking_level:hn.thinking_level,supports_thinking:hn.supports_thinking,available_thinking_levels:hn.available_thinking_levels},Ru={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},Hu={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},rr=new URLSearchParams(window.location.search).get("real")!=="1",ku=window.fetch.bind(window);function yn(n,r=200){return new Response(JSON.stringify(n),{status:r,headers:{"Content-Type":"application/json"}})}function Kl(){window.fetch=async(n,r)=>{let i=new URL(typeof n==="string"?n:n.url,window.location.href),_=String(r?.method||"GET").toUpperCase();if(!rr)return ku(n,r);if(i.pathname==="/agent/settings-data")return yn(hn);if(i.pathname==="/agent/models")return yn(pl);if(i.pathname==="/agent/addons")return yn(Ru);if(i.pathname.startsWith("/agent/addons/"))return yn({ok:!0,message:"Fixture add-on action accepted.",...Ru});if(i.pathname==="/agent/keychain"){if(_==="GET")return yn(Hu);if(_==="POST")return yn({ok:!0,...Hu})}if(i.pathname==="/agent/settings/general")return yn({ok:!0,settings:hn});if(i.pathname==="/agent/settings/widget-token/regenerate")return yn({ok:!0,settings:{...hn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(i.pathname.startsWith("/agent/default/message"))return yn({command:{status:"success",message:"Fixture command accepted."}});if(i.pathname.startsWith("/agent/settings/"))return yn({ok:!0,settings:hn,items:[],entries:[]});if(i.pathname==="/agent/client-perf")return yn({ok:!0});return ku(n,r)}}function zl(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function Uu(n){try{window.__piclawSettingsRequestedSection=n}catch(r){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function Bl(){let n=new URLSearchParams(window.location.search),[r,i]=y(n.get("section")||"general"),[_,c]=y(Number(n.get("width")||900)),[u,f]=y(Number(n.get("height")||640)),[l,o]=y(rr),[$,b]=y(0),g=D(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),v=U((h)=>{i(h),Uu(h)},[]),x=U(()=>{rr=!rr,o(rr),b((h)=>h+1)},[]);return s`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${r} onChange=${(h)=>v(h.target.value)}>${g.map((h)=>s`<option value=${h}>${h}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${_} onInput=${(h)=>c(Number(h.target.value))} /> ${_}px</label>
        <label>Height <input type="range" min="420" max="900" value=${u} onInput=${(h)=>f(Number(h.target.value))} /> ${u}px</label>
        <button type="button" onClick=${x}>${l?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>b((h)=>h+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${_}px;--fixture-height:${u}px;`}>
        <${dr} key=${$} onClose=${()=>{}} />
      </div>
    </div>
  `}function Fl(){vl(),Kl(),zl();let n=new URLSearchParams(window.location.search);Uu(n.get("section")||"general");let r=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));r.id="settings-widget-fixture-root",In(s`<${Bl} />`,r),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:rr})}Fl();

//# debugId=4EF3D8D90E2A607D64756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
