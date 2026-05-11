var xt=Object.defineProperty;var bt=(n)=>n;function vt(n,r){this[n]=bt.bind(null,r)}var rn=(n,r)=>{for(var i in r)xt(n,i,{get:r[i],enumerable:!0,configurable:!0,set:vt.bind(r,i)})};var q=(n,r)=>()=>(n&&(r=n(n=0)),r);var Gt={};rn(Gt,{useState:()=>g,useRef:()=>Q,useReducer:()=>Bc,useMemo:()=>C,useLayoutEffect:()=>Br,useImperativeHandle:()=>Rt,useErrorBoundary:()=>jt,useEffect:()=>L,useDebugValue:()=>Nt,useContext:()=>Mt,useCallback:()=>F,render:()=>An,html:()=>l,h:()=>mr,createContext:()=>Wt,Component:()=>mn});function gn(n,r){for(var i in r)n[i]=r[i];return n}function ar(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function mr(n,r,i){var c,o,t,s={};for(t in r)t=="key"?c=r[t]:t=="ref"?o=r[t]:s[t]=r[t];if(arguments.length>2&&(s.children=arguments.length>3?vr.call(arguments,2):i),typeof n=="function"&&n.defaultProps!=null)for(t in n.defaultProps)s[t]===void 0&&(s[t]=n.defaultProps[t]);return hr(n,s,c,o,null)}function hr(n,r,i,c,o){var t={type:n,props:r,key:i,ref:c,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o==null?++ec:o,__i:-1,__u:0};return o==null&&Y.vnode!=null&&Y.vnode(t),t}function kr(n){return n.children}function mn(n,r){this.props=n,this.context=r}function Pn(n,r){if(r==null)return n.__?Pn(n.__,n.__i+1):null;for(var i;r<n.__k.length;r++)if((i=n.__k[r])!=null&&i.__e!=null)return i.__e;return typeof n.type=="function"?Pn(n):null}function Bt(n){if(n.__P&&n.__d){var r=n.__v,i=r.__e,c=[],o=[],t=gn({},r);t.__v=r.__v+1,Y.vnode&&Y.vnode(t),ni(n.__P,t,r,n.__n,n.__P.namespaceURI,32&r.__u?[i]:null,c,i==null?Pn(r):i,!!(32&r.__u),o),t.__v=r.__v,t.__.__k[t.__i]=t,bc(c,t,o),r.__e=r.__=null,t.__e!=i&&wc(t)}}function wc(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(r){if(r!=null&&r.__e!=null)return n.__e=n.__c.base=r.__e}),wc(n)}function Or(n){(!n.__d&&(n.__d=!0)&&bn.push(n)&&!br.__r++||mi!=Y.debounceRendering)&&((mi=Y.debounceRendering)||gc)(br)}function br(){try{for(var n,r=1;bn.length;)bn.length>r&&bn.sort(pc),n=bn.shift(),r=bn.length,Bt(n)}finally{bn.length=br.__r=0}}function yc(n,r,i,c,o,t,s,u,_,e,x){var f,y,$,v,z,w,d,R=c&&c.__k||xr,M=r.length;for(_=Tt(i,r,R,_,M),f=0;f<M;f++)($=i.__k[f])!=null&&(y=$.__i!=-1&&R[$.__i]||yr,$.__i=f,w=ni(n,$,y,o,t,s,u,_,e,x),v=$.__e,$.ref&&y.ref!=$.ref&&(y.ref&&ri(y.ref,null,$),x.push($.ref,$.__c||v,$)),z==null&&v!=null&&(z=v),(d=!!(4&$.__u))||y.__k===$.__k?(_=xc($,_,n,d),d&&y.__e&&(y.__e=null)):typeof $.type=="function"&&w!==void 0?_=w:v&&(_=v.nextSibling),$.__u&=-7);return i.__e=z,_}function Tt(n,r,i,c,o){var t,s,u,_,e,x=i.length,f=x,y=0;for(n.__k=Array(o),t=0;t<o;t++)(s=r[t])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=n.__k[t]=hr(null,s,null,null,null):dr(s)?s=n.__k[t]=hr(kr,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=n.__k[t]=hr(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):n.__k[t]=s,_=t+y,s.__=n,s.__b=n.__b+1,u=null,(e=s.__i=Ft(s,i,_,f))!=-1&&(f--,(u=i[e])&&(u.__u|=2)),u==null||u.__v==null?(e==-1&&(o>x?y--:o<x&&y++),typeof s.type!="function"&&(s.__u|=4)):e!=_&&(e==_-1?y--:e==_+1?y++:(e>_?y--:y++,s.__u|=4))):n.__k[t]=null;if(f)for(t=0;t<x;t++)(u=i[t])!=null&&(2&u.__u)==0&&(u.__e==c&&(c=Pn(u)),dc(u,u));return c}function xc(n,r,i,c){var o,t;if(typeof n.type=="function"){for(o=n.__k,t=0;o&&t<o.length;t++)o[t]&&(o[t].__=n,r=xc(o[t],r,i,c));return r}n.__e!=r&&(c&&(r&&n.type&&!r.parentNode&&(r=Pn(n)),i.insertBefore(n.__e,r||null)),r=n.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function Ft(n,r,i,c){var o,t,s,u=n.key,_=n.type,e=r[i],x=e!=null&&(2&e.__u)==0;if(e===null&&u==null||x&&u==e.key&&_==e.type)return i;if(c>(x?1:0)){for(o=i-1,t=i+1;o>=0||t<r.length;)if((e=r[s=o>=0?o--:t++])!=null&&(2&e.__u)==0&&u==e.key&&_==e.type)return s}return-1}function nc(n,r,i){r[0]=="-"?n.setProperty(r,i==null?"":i):n[r]=i==null?"":typeof i!="number"||kt.test(r)?i:i+"px"}function pr(n,r,i,c,o){var t,s;n:if(r=="style")if(typeof i=="string")n.style.cssText=i;else{if(typeof c=="string"&&(n.style.cssText=c=""),c)for(r in c)i&&r in i||nc(n.style,r,"");if(i)for(r in i)c&&i[r]==c[r]||nc(n.style,r,i[r])}else if(r[0]=="o"&&r[1]=="n")t=r!=(r=r.replace($c,"$1")),s=r.toLowerCase(),r=s in n||r=="onFocusOut"||r=="onFocusIn"?s.slice(2):r.slice(2),n.l||(n.l={}),n.l[r+t]=i,i?c?i[an]=c[an]:(i[an]=Sr,n.addEventListener(r,t?Yr:Zr,t)):n.removeEventListener(r,t?Yr:Zr,t);else{if(o=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in n)try{n[r]=i==null?"":i;break n}catch(u){}typeof i=="function"||(i==null||i===!1&&r[4]!="-"?n.removeAttribute(r):n.setAttribute(r,r=="popover"&&i==1?"":i))}}function rc(n){return function(r){if(this.l){var i=this.l[r.type+n];if(r[$r]==null)r[$r]=Sr++;else if(r[$r]<i[an])return;return i(Y.event?Y.event(r):r)}}}function ni(n,r,i,c,o,t,s,u,_,e){var x,f,y,$,v,z,w,d,R,M,k,W,h,B,G,p=r.type;if(r.constructor!==void 0)return null;128&i.__u&&(_=!!(32&i.__u),t=[u=r.__e=i.__e]),(x=Y.__b)&&x(r);n:if(typeof p=="function")try{if(d=r.props,R=p.prototype&&p.prototype.render,M=(x=p.contextType)&&c[x.__c],k=x?M?M.props.value:x.__:c,i.__c?w=(f=r.__c=i.__c).__=f.__E:(R?r.__c=f=new p(d,k):(r.__c=f=new mn(d,k),f.constructor=p,f.render=Kt),M&&M.sub(f),f.state||(f.state={}),f.__n=c,y=f.__d=!0,f.__h=[],f._sb=[]),R&&f.__s==null&&(f.__s=f.state),R&&p.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=gn({},f.__s)),gn(f.__s,p.getDerivedStateFromProps(d,f.__s))),$=f.props,v=f.state,f.__v=r,y)R&&p.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),R&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(R&&p.getDerivedStateFromProps==null&&d!==$&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(d,k),r.__v==i.__v||!f.__e&&f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(d,f.__s,k)===!1){r.__v!=i.__v&&(f.props=d,f.state=f.__s,f.__d=!1),r.__e=i.__e,r.__k=i.__k,r.__k.some(function(K){K&&(K.__=r)}),xr.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&s.push(f);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(d,f.__s,k),R&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate($,v,z)})}if(f.context=k,f.props=d,f.__P=n,f.__e=!1,W=Y.__r,h=0,R)f.state=f.__s,f.__d=!1,W&&W(r),x=f.render(f.props,f.state,f.context),xr.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,W&&W(r),x=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++h<25);f.state=f.__s,f.getChildContext!=null&&(c=gn(gn({},c),f.getChildContext())),R&&!y&&f.getSnapshotBeforeUpdate!=null&&(z=f.getSnapshotBeforeUpdate($,v)),B=x!=null&&x.type===kr&&x.key==null?vc(x.props.children):x,u=yc(n,dr(B)?B:[B],r,i,c,o,t,s,u,_,e),f.base=r.__e,r.__u&=-161,f.__h.length&&s.push(f),w&&(f.__E=f.__=null)}catch(K){if(r.__v=null,_||t!=null)if(K.then){for(r.__u|=_?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;t[t.indexOf(u)]=null,r.__e=u}else{for(G=t.length;G--;)ar(t[G]);Jr(r)}else r.__e=i.__e,r.__k=i.__k,K.then||Jr(r);Y.__e(K,r,i)}else t==null&&r.__v==i.__v?(r.__k=i.__k,r.__e=i.__e):u=r.__e=zt(i.__e,r,i,c,o,t,s,_,e);return(x=Y.diffed)&&x(r),128&r.__u?void 0:u}function Jr(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Jr))}function bc(n,r,i){for(var c=0;c<i.length;c++)ri(i[c],i[++c],i[++c]);Y.__c&&Y.__c(r,n),n.some(function(o){try{n=o.__h,o.__h=[],n.some(function(t){t.call(o)})}catch(t){Y.__e(t,o.__v)}})}function vc(n){return typeof n!="object"||n==null||n.__b>0?n:dr(n)?n.map(vc):gn({},n)}function zt(n,r,i,c,o,t,s,u,_){var e,x,f,y,$,v,z,w=i.props||yr,d=r.props,R=r.type;if(R=="svg"?o="http://www.w3.org/2000/svg":R=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),t!=null){for(e=0;e<t.length;e++)if(($=t[e])&&"setAttribute"in $==!!R&&(R?$.localName==R:$.nodeType==3)){n=$,t[e]=null;break}}if(n==null){if(R==null)return document.createTextNode(d);n=document.createElementNS(o,R,d.is&&d),u&&(Y.__m&&Y.__m(r,t),u=!1),t=null}if(R==null)w===d||u&&n.data==d||(n.data=d);else{if(t=t&&vr.call(n.childNodes),!u&&t!=null)for(w={},e=0;e<n.attributes.length;e++)w[($=n.attributes[e]).name]=$.value;for(e in w)$=w[e],e=="dangerouslySetInnerHTML"?f=$:e=="children"||(e in d)||e=="value"&&("defaultValue"in d)||e=="checked"&&("defaultChecked"in d)||pr(n,e,null,$,o);for(e in d)$=d[e],e=="children"?y=$:e=="dangerouslySetInnerHTML"?x=$:e=="value"?v=$:e=="checked"?z=$:u&&typeof $!="function"||w[e]===$||pr(n,e,$,w[e],o);if(x)u||f&&(x.__html==f.__html||x.__html==n.innerHTML)||(n.innerHTML=x.__html),r.__k=[];else if(f&&(n.innerHTML=""),yc(r.type=="template"?n.content:n,dr(y)?y:[y],r,i,c,R=="foreignObject"?"http://www.w3.org/1999/xhtml":o,t,s,t?t[0]:i.__k&&Pn(i,0),u,_),t!=null)for(e=t.length;e--;)ar(t[e]);u||(e="value",R=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[e]||R=="progress"&&!v||R=="option"&&v!=w[e])&&pr(n,e,v,w[e],o),e="checked",z!=null&&z!=n[e]&&pr(n,e,z,w[e],o))}return n}function ri(n,r,i){try{if(typeof n=="function"){var c=typeof n.__u=="function";c&&n.__u(),c&&r==null||(n.__u=n(r))}else n.current=r}catch(o){Y.__e(o,i)}}function dc(n,r,i){var c,o;if(Y.unmount&&Y.unmount(n),(c=n.ref)&&(c.current&&c.current!=n.__e||ri(c,null,r)),(c=n.__c)!=null){if(c.componentWillUnmount)try{c.componentWillUnmount()}catch(t){Y.__e(t,r)}c.base=c.__P=null}if(c=n.__k)for(o=0;o<c.length;o++)c[o]&&dc(c[o],r,i||typeof n.type!="function");i||ar(n.__e),n.__c=n.__=n.__e=void 0}function Kt(n,r,i){return this.constructor(n,i)}function An(n,r,i){var c,o,t,s;r==document&&(r=document.documentElement),Y.__&&Y.__(n,r),o=(c=typeof i=="function")?null:i&&i.__k||r.__k,t=[],s=[],ni(r,n=(!c&&i||r).__k=mr(kr,null,[n]),o||yr,yr,r.namespaceURI,!c&&i?[i]:o?null:r.firstChild?vr.call(r.childNodes):null,t,!c&&i?i:o?o.__e:r.firstChild,c,s),bc(t,n,s)}function Wt(n){function r(i){var c,o;return this.getChildContext||(c=new Set,(o={})[r.__c]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){c=null},this.shouldComponentUpdate=function(t){this.props.value!=t.value&&c.forEach(function(s){s.__e=!0,Or(s)})},this.sub=function(t){c.add(t);var s=t.componentWillUnmount;t.componentWillUnmount=function(){c&&c.delete(t),s&&s.call(t)}}),i.children}return r.__c="__cC"+hc++,r.__=n,r.Provider=r.__l=(r.Consumer=function(i,c){return i.children(c)}).contextType=r,r}function Xn(n,r){J.__h&&J.__h(Z,n,Vn||r),Vn=0;var i=Z.__H||(Z.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function g(n){return Vn=1,Bc(Tc,n)}function Bc(n,r,i){var c=Xn(vn++,2);if(c.t=n,!c.__c&&(c.__=[i?i(r):Tc(void 0,r),function(u){var _=c.__N?c.__N[0]:c.__[0],e=c.t(_,u);_!==e&&(c.__N=[e,c.__[1]],c.__c.setState({}))}],c.__c=Z,!Z.__f)){var o=function(u,_,e){if(!c.__c.__H)return!0;var x=c.__c.__H.__.filter(function(y){return y.__c});if(x.every(function(y){return!y.__N}))return!t||t.call(this,u,_,e);var f=c.__c.props!==u;return x.some(function(y){if(y.__N){var $=y.__[0];y.__=y.__N,y.__N=void 0,$!==y.__[0]&&(f=!0)}}),t&&t.call(this,u,_,e)||f};Z.__f=!0;var{shouldComponentUpdate:t,componentWillUpdate:s}=Z;Z.componentWillUpdate=function(u,_,e){if(this.__e){var x=t;t=void 0,o(u,_,e),t=x}s&&s.call(this,u,_,e)},Z.shouldComponentUpdate=o}return c.__N||c.__}function L(n,r){var i=Xn(vn++,3);!J.__s&&ii(i.__H,r)&&(i.__=n,i.u=r,Z.__H.__h.push(i))}function Br(n,r){var i=Xn(vn++,4);!J.__s&&ii(i.__H,r)&&(i.__=n,i.u=r,Z.__h.push(i))}function Q(n){return Vn=5,C(function(){return{current:n}},[])}function Rt(n,r,i){Vn=6,Br(function(){if(typeof n=="function"){var c=n(r());return function(){n(null),c&&typeof c=="function"&&c()}}if(n)return n.current=r(),function(){return n.current=null}},i==null?i:i.concat(n))}function C(n,r){var i=Xn(vn++,7);return ii(i.__H,r)&&(i.__=n(),i.__H=r,i.__h=n),i.__}function F(n,r){return Vn=8,C(function(){return n},r)}function Mt(n){var r=Z.context[n.__c],i=Xn(vn++,9);return i.c=n,r?(i.__==null&&(i.__=!0,r.sub(Z)),r.props.value):n.__}function Nt(n,r){J.useDebugValue&&J.useDebugValue(r?r(n):n)}function jt(n){var r=Xn(vn++,10),i=g();return r.__=n,Z.componentDidCatch||(Z.componentDidCatch=function(c,o){r.__&&r.__(c,o),i[1](c)}),[i[0],function(){i[1](void 0)}]}function Ut(){for(var n;n=kc.shift();){var r=n.__H;if(n.__P&&r)try{r.__h.some(wr),r.__h.some(Er),r.__h=[]}catch(i){r.__h=[],J.__e(i,n.__v)}}}function Ht(n){var r,i=function(){clearTimeout(c),_c&&cancelAnimationFrame(r),setTimeout(n)},c=setTimeout(i,35);_c&&(r=requestAnimationFrame(i))}function wr(n){var r=Z,i=n.__c;typeof i=="function"&&(n.__c=void 0,i()),Z=r}function Er(n){var r=Z;n.__c=n.__(),Z=r}function ii(n,r){return!n||n.length!==r.length||r.some(function(i,c){return i!==n[c]})}function Tc(n,r){return typeof r=="function"?r(n):r}function Lt(n){var r=fc.get(this);return r||(r=new Map,fc.set(this,r)),(r=Fc(this,r.get(n)||(r.set(n,r=function(i){for(var c,o,t=1,s="",u="",_=[0],e=function(y){t===1&&(y||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?_.push(0,y,s):t===3&&(y||s)?(_.push(3,y,s),t=2):t===2&&s==="..."&&y?_.push(4,y,0):t===2&&s&&!y?_.push(5,0,!0,s):t>=5&&((s||!y&&t===5)&&(_.push(t,0,s,o),t=6),y&&(_.push(t,y,0,o),t=6)),s=""},x=0;x<i.length;x++){x&&(t===1&&e(),e(x));for(var f=0;f<i[x].length;f++)c=i[x][f],t===1?c==="<"?(e(),_=[_],t=3):s+=c:t===4?s==="--"&&c===">"?(t=1,s=""):s=c+s[0]:u?c===u?u="":s+=c:c==='"'||c==="'"?u=c:c===">"?(e(),t=1):t&&(c==="="?(t=5,o=s,s=""):c==="/"&&(t<5||i[x][f+1]===">")?(e(),t===3&&(_=_[0]),t=_,(_=_[0]).push(2,0,t),t=0):c===" "||c==="\t"||c===`
`||c==="\r"?(e(),t=2):s+=c),t===3&&s==="!--"&&(t=4,_=_[0])}return e(),_}(n)),r),arguments,[])).length>1?r:r[0]}var vr,Y,ec,dt,bn,mi,gc,pc,Dr,$r,an,$c,Sr,Zr,Yr,hc,yr,xr,kt,dr,vn,Z,Ir,ic,Vn=0,kc,J,cc,oc,tc,sc,lc,uc,_c,Fc=function(n,r,i,c){var o;r[0]=0;for(var t=1;t<r.length;t++){var s=r[t++],u=r[t]?(r[0]|=s?1:2,i[r[t++]]):r[++t];s===3?c[0]=u:s===4?c[1]=Object.assign(c[1]||{},u):s===5?(c[1]=c[1]||{})[r[++t]]=u:s===6?c[1][r[++t]]+=u+"":s?(o=n.apply(u,Fc(n,u,i,["",null])),c.push(o),u[0]?r[0]|=2:(r[t-2]=0,r[t]=o)):c.push(u)}return c},fc,l;var E=q(()=>{yr={},xr=[],kt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,dr=Array.isArray;vr=xr.slice,Y={__e:function(n,r,i,c){for(var o,t,s;r=r.__;)if((o=r.__c)&&!o.__)try{if((t=o.constructor)&&t.getDerivedStateFromError!=null&&(o.setState(t.getDerivedStateFromError(n)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(n,c||{}),s=o.__d),s)return o.__E=o}catch(u){n=u}throw n}},ec=0,dt=function(n){return n!=null&&n.constructor===void 0},mn.prototype.setState=function(n,r){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=gn({},this.state),typeof n=="function"&&(n=n(gn({},i),this.props)),n&&gn(i,n),n!=null&&this.__v&&(r&&this._sb.push(r),Or(this))},mn.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Or(this))},mn.prototype.render=kr,bn=[],gc=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,pc=function(n,r){return n.__v.__b-r.__v.__b},br.__r=0,Dr=Math.random().toString(8),$r="__d"+Dr,an="__a"+Dr,$c=/(PointerCapture)$|Capture$/i,Sr=0,Zr=rc(!1),Yr=rc(!0),hc=0;kc=[],J=Y,cc=J.__b,oc=J.__r,tc=J.diffed,sc=J.__c,lc=J.unmount,uc=J.__;J.__b=function(n){Z=null,cc&&cc(n)},J.__=function(n,r){n&&r.__k&&r.__k.__m&&(n.__m=r.__k.__m),uc&&uc(n,r)},J.__r=function(n){oc&&oc(n),vn=0;var r=(Z=n.__c).__H;r&&(Ir===Z?(r.__h=[],Z.__h=[],r.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(r.__h.some(wr),r.__h.some(Er),r.__h=[],vn=0)),Ir=Z},J.diffed=function(n){tc&&tc(n);var r=n.__c;r&&r.__H&&(r.__H.__h.length&&(kc.push(r)!==1&&ic===J.requestAnimationFrame||((ic=J.requestAnimationFrame)||Ht)(Ut)),r.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),Ir=Z=null},J.__c=function(n,r){r.some(function(i){try{i.__h.some(wr),i.__h=i.__h.filter(function(c){return!c.__||Er(c)})}catch(c){r.some(function(o){o.__h&&(o.__h=[])}),r=[],J.__e(c,i.__v)}}),sc&&sc(n,r)},J.unmount=function(n){lc&&lc(n);var r,i=n.__c;i&&i.__H&&(i.__H.__.some(function(c){try{wr(c)}catch(o){r=o}}),i.__H=void 0,r&&J.__e(r,i.__v))};_c=typeof requestAnimationFrame=="function";fc=new Map;l=Lt.bind(mr)});function zc({children:n,className:r=""}){let[i,c]=g(null);return L(()=>{if(typeof document>"u")return;let o=document.createElement("div");return o.className=r||"",document.body.appendChild(o),c(o),()=>{try{An(null,o)}finally{o.remove()}}},[]),L(()=>{if(!i)return;i.className=r||"";return},[r,i]),Br(()=>{if(!i)return;An(n,i);return},[n,i]),null}var Kc=q(()=>{E()});function ci(n,r){let i=String(n.label||"").localeCompare(String(r.label||""),void 0,{sensitivity:"base"});if(i!==0)return i;return String(n.id||"").localeCompare(String(r.id||""),void 0,{sensitivity:"base"})}function dn(n){let r=zn.findIndex((i)=>i.id===n.id);if(r>=0)zn[r]=n;else zn.push(n);zn.sort(ci)}function s_(n){let r=zn.findIndex((i)=>i.id===n);if(r>=0)zn.splice(r,1)}function Wc(){return[...zn]}function l_(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var zn;var Cn=q(()=>{zn=[]});function Tr(n){let r=typeof n==="string"?n.trim():"";return r?r:null}function Rc(n={}){if(typeof window>"u")return;let r=Tr(n.section);try{if(window.__piclawSettingsOpenRequested=!0,r)window.__piclawSettingsRequestedSection=r;else delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to record open request flags",i)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:r?{section:r}:void 0}))}function oi(){if(typeof window>"u")return null;return Tr(window.__piclawSettingsRequestedSection)}function Mc(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),r=oi();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to clear open request flags",i)}return{open:n,section:r}}function jc(n=typeof window<"u"?window:null){return n||null}function Fr(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function cr(n,r){return`${n}:${r}`}function Uc(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function Hc(n,r){if(n.length<=r)return;n.splice(0,n.length-r)}function Kn(n){if(!n||typeof n!=="object")return null;return{...n}}function Mn(n){if(!n)return null;return Wn.find((r)=>r.id===n)||null}function ti(n,r){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${r}`)}catch(i){console.debug("[app-perf] Ignoring performance.mark failure.",i,{traceId:n,phase:r})}}function Lc(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let r=Mn(n);if(!r)return;for(let i of r.phases)performance.clearMarks(`piclaw:${n}:${i.phase}`)}catch(r){console.debug("[app-perf] Ignoring performance.clearMarks failure.",r,{traceId:n})}}function Nc(n,r,i){let c=Rn.get(cr(n,r));if(c&&Mn(c)?.status==="active")ir(c,"cancelled","superseded",{replacementType:n,replacementChatJid:r});let o=Uc(n),t={id:o,type:n,chatJid:r,startedAt:Fr(),detail:Kn(i),phases:[],status:"active"};return Wn.push(t),Hc(Wn,100),Rn.set(cr(n,r),o),ti(o,"start"),o}function ir(n,r,i,c,o){let t=Mn(n);if(!t||t.status!=="active")return;if(i)t.phases.push({phase:i,at:Fr(),detail:Kn(c)}),ti(t.id,i);if(t.status=r,t.completedAt=Fr(),t.durationMs=t.completedAt-t.startedAt,o!==void 0)t.error=o instanceof Error?o.message:String(o);let s=cr(t.type,t.chatJid);if(Rn.get(s)===t.id)Rn.delete(s);Lc(t.id)}function Pt(n=jc()){let r=n?.__PICLAW_PERF__;if(r)return r;if(n)n.__PICLAW_PERF__=zr;return zr}function Qn(n=jc()){return Pt(n)}function f_(n,r,i){return Qn().ensureTrace(n,r,i)}function e_(n,r){return Qn().getActiveTraceId(n,r)}function g_(n,r,i){Qn().markTrace(n,r,i)}function p_(n,r,i="settled",c){let o=Mn(n);if(!o||o.status!=="active")return!1;let t=new Set(o.phases.map((s)=>s.phase));if(!r.every((s)=>t.has(s)))return!1;return ir(n,"completed",i,c),!0}function $_(n,r,i="failed",c){Qn().failTrace(n,r,i,c)}function h_(n,r="cancelled",i){Qn().cancelTrace(n,r,i)}function si(n){return Qn().recordRequest(n)}var Wn,rr,Rn,zr;var Gc=q(()=>{Wn=[],rr=[],Rn=new Map;zr={startTrace(n,r,i){return Nc(n,r,i)},ensureTrace(n,r,i){let c=Rn.get(cr(n,r));if(c&&Mn(c)?.status==="active")return c;return Nc(n,r,i)},getActiveTraceId(n,r){let i=Rn.get(cr(n,r));return i&&Mn(i)?.status==="active"?i:null},markTrace(n,r,i){let c=Mn(n);if(!c||c.status!=="active")return;c.phases.push({phase:r,at:Fr(),detail:Kn(i)}),ti(c.id,r)},completeTrace(n,r="settled",i){ir(n,"completed",r,i)},failTrace(n,r,i="failed",c){ir(n,"failed",i,c,r)},cancelTrace(n,r="cancelled",i){ir(n,"cancelled",r,i)},recordRequest(n){let r=Uc("req");return rr.push({...n,id:r,detail:Kn(n.detail)}),Hc(rr,300),r},getTraces(){return Wn.map((n)=>({...n,detail:Kn(n.detail),phases:n.phases.map((r)=>({...r,detail:Kn(r.detail)}))}))},getRequests(){return rr.map((n)=>({...n,detail:Kn(n.detail)}))},clear(){Wn.forEach((n)=>Lc(n.id)),Wn.splice(0,Wn.length),rr.splice(0,rr.length),Rn.clear()},printSummary(){let n={traces:zr.getTraces(),requests:zr.getRequests()};return console.table(n.traces.map((r)=>({id:r.id,type:r.type,chatJid:r.chatJid,status:r.status,durationMs:Number(r.durationMs||0).toFixed(1),lastPhase:r.phases[r.phases.length-1]?.phase||"start"}))),n}}});function qn(n){let r=Number(n||0);return Number.isFinite(r)&&r>0?r:null}function Vt(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function At(n){let r=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(r)}function Pc(n){let r=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(r)}function Vc(n=typeof window<"u"?window:null){let r=qn(n?.innerWidth)??qn(n?.screen?.availWidth)??qn(n?.screen?.width)??0,i=qn(n?.innerHeight)??qn(n?.screen?.availHeight)??qn(n?.screen?.height)??0,c=r&&i?Math.min(r,i):r||i,o=r&&i?Math.max(r,i):r||i,t=Vt(n),s=Number(n?.navigator?.maxTouchPoints||0),u=t||s>1;if(c>0&&c<=640)return"mobile";if(At(n)&&!Pc(n))return"mobile";if(Pc(n))return"tablet";if(u&&c>0&&c<=1100)return"tablet";if(o>0&&o<=1180&&c>0&&c<=900)return"tablet";return"desktop"}var ms={};rn(ms,{uploadWorkspaceFile:()=>Is,uploadMedia:()=>vs,updateWorkspaceFile:()=>Vs,updateScheduledTask:()=>_i,submitAdaptiveCardAction:()=>ks,streamSidePrompt:()=>Bs,stopSessionRecording:()=>gi,stopAutoresearch:()=>ps,steerAgentQueueItem:()=>ys,startSessionRecording:()=>ei,setWorkspaceVisibility:()=>Es,setAgentThoughtVisibility:()=>zs,sessionRecordingPlaybackUrl:()=>$i,sessionRecordingExportUrl:()=>or,sendPeerAgentMessage:()=>ts,sendAgentMessage:()=>pn,searchPosts:()=>qt,saveWorkspaceSettings:()=>vi,saveWebPushSubscription:()=>ls,saveUiState:()=>wi,saveQuickActionsSettings:()=>bi,saveEnvironmentOverride:()=>Wr,restoreChatBranch:()=>os,respondToAgentRequest:()=>ds,reorderAgentQueueItem:()=>xs,renameWorkspaceFile:()=>Ys,renameChatJid:()=>cs,renameChatBranch:()=>mt,removeAgentQueueItem:()=>ws,reindexWorkspace:()=>Ls,purgeChatBranch:()=>is,pruneChatBranch:()=>rs,previewSessionRecordingRedaction:()=>hi,moveWorkspaceEntry:()=>Os,mergeChatBranchIntoParent:()=>ns,getWorkspaceTree:()=>js,getWorkspaceRawUrl:()=>Xc,getWorkspaceIndexStatus:()=>Hs,getWorkspaceFileStat:()=>Ps,getWorkspaceFileDownloadUrl:()=>Ss,getWorkspaceFile:()=>Gs,getWorkspaceDownloadUrl:()=>as,getWorkspaceBranch:()=>Us,getWebPushPublicKey:()=>ss,getTimeline:()=>Ct,getThumbnailUrl:()=>Ws,getThread:()=>Dt,getSystemMetrics:()=>It,getSessionRecordings:()=>fi,getSessionRecording:()=>Kr,getScheduledTasks:()=>ui,getQuickActionsSettings:()=>xi,getPostsByHashtag:()=>Qt,getMediaUrl:()=>Ks,getMediaText:()=>Ms,getMediaInfo:()=>Rs,getMediaBlob:()=>Ns,getEnvironmentSettings:()=>di,getChatBranches:()=>Et,getAutoresearchStatus:()=>gs,getAgents:()=>_s,getAgentThought:()=>Fs,getAgentStatus:()=>fs,getAgentQueueState:()=>hs,getAgentModels:()=>ki,getAgentContext:()=>es,getAgentCommands:()=>yi,getActiveChatAgents:()=>Jt,forkChatBranch:()=>St,dismissAutoresearch:()=>$s,deleteWorkspaceFile:()=>Js,deleteWebPushSubscription:()=>us,deleteSessionRecording:()=>pi,deletePost:()=>Ot,createWorkspaceFile:()=>Zs,createRootChatSession:()=>at,createReply:()=>Yt,createPost:()=>Zt,completeInstanceOobe:()=>bs,attachWorkspaceFile:()=>As,addToWhitelist:()=>Ts,SSEClient:()=>Cc});async function H(n,r={}){let i=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),c;try{c=await fetch(a+n,{...r,headers:{"Content-Type":"application/json",...r.headers}})}catch(t){throw si({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i,ok:!1,detail:{failedBeforeResponse:!0}}),t}let o=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i;if(si({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:o,status:c.status,ok:c.ok,requestId:c.headers?.get?.("x-request-id")||null,serverTiming:c.headers?.get?.("Server-Timing")||null}),!c.ok){let t=await c.json().catch(()=>({error:"Unknown error"}));throw Error(t.error||`HTTP ${c.status}`)}return c.json()}function Ac(n){let r=String(n||"").split(`
`),i="message",c=[];for(let t of r)if(t.startsWith("event:"))i=t.slice(6).trim()||"message";else if(t.startsWith("data:"))c.push(t.slice(5).trim());let o=c.join(`
`);if(!o)return null;try{return{event:i,data:JSON.parse(o)}}catch{return{event:i,data:o}}}async function Xt(n,r){if(!n.body)throw Error("Missing event stream body");let i=n.body.getReader(),c=new TextDecoder,o="";while(!0){let{value:s,done:u}=await i.read();if(u)break;o+=c.decode(s,{stream:!0});let _=o.split(`

`);o=_.pop()||"";for(let e of _){let x=Ac(e);if(x)r(x.event,x.data)}}o+=c.decode();let t=Ac(o);if(t)r(t.event,t.data)}async function Ct(n=10,r=null,i=null){let c=`/timeline?limit=${n}`;if(r)c+=`&before=${r}`;if(i)c+=`&chat_jid=${encodeURIComponent(i)}`;return H(c)}async function Qt(n,r=50,i=0,c=null){let o=c?`&chat_jid=${encodeURIComponent(c)}`:"";return H(`/hashtag/${encodeURIComponent(n)}?limit=${r}&offset=${i}${o}`)}async function qt(n,r=50,i=0,c=null,o="current",t=null,s=null){let u=c?`&chat_jid=${encodeURIComponent(c)}`:"",_=o?`&scope=${encodeURIComponent(o)}`:"",e=t?`&root_chat_jid=${encodeURIComponent(t)}`:"",x=s?.images?"&images=1":"",f=s?.attachments?"&attachments=1":"";return H(`/search?q=${encodeURIComponent(n)}&limit=${r}&offset=${i}${u}${_}${e}${x}${f}`)}async function Dt(n,r=null){let i=r?`?chat_jid=${encodeURIComponent(r)}`:"";return H(`/thread/${n}${i}`)}async function It(){return H("/agent/system-metrics")}async function ui(n={}){let r=new URLSearchParams;if(n?.id)r.set("id",String(n.id));if(n?.chatJid)r.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")r.set("status",String(n.status));if(n?.limit)r.set("limit",String(n.limit));if(n?.includeRunLogs)r.set("include_run_logs","1");if(n?.runLogLimit)r.set("run_log_limit",String(n.runLogLimit));let i=r.toString()?`?${r.toString()}`:"";return H(`/agent/scheduled-tasks${i}`)}async function _i(n,r,i={}){return H("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:r,allow_internal:i?.allowInternal===!0})})}async function fi(){return H("/agent/recordings")}async function Kr(n){return H(`/agent/recordings/${encodeURIComponent(n)}`)}async function ei(n={}){return H("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function gi(n={}){return H("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function pi(n){return H(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function or(n,r="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(r)}`}function $i(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function hi(n,r={}){return H("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...r})})}async function wi(n){return H("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function Zt(n,r=[],i=null){let c=i?`?chat_jid=${encodeURIComponent(i)}`:"";return H(`/post${c}`,{method:"POST",body:JSON.stringify({content:n,media_ids:r})})}async function Yt(n,r,i=[],c=null){let o=c?`?chat_jid=${encodeURIComponent(c)}`:"";return H(`/post/reply${o}`,{method:"POST",body:JSON.stringify({thread_id:n,content:r,media_ids:i})})}async function Ot(n,r=!1,i=null){let c=i?`&chat_jid=${encodeURIComponent(i)}`:"",o=`/post/${n}?cascade=${r?"true":"false"}${c}`;return H(o,{method:"DELETE"})}async function pn(n,r,i=null,c=[],o=null,t=null){let s=t?`?chat_jid=${encodeURIComponent(t)}`:"",u={content:r,thread_id:i,media_ids:c,client_context:{screen_hint:Vc()}};if(o==="auto"||o==="queue"||o==="steer")u.mode=o;return H(`/agent/${n}/message${s}`,{method:"POST",body:JSON.stringify(u)})}async function yi(n="web:default"){let r=typeof n==="string"&&n.trim()?n.trim():"web:default";return H(`/agent/commands?chat_jid=${encodeURIComponent(r)}`)}async function xi(){return H("/agent/settings/quick-actions")}async function bi(n){return H("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function vi(n){return H("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function di(){return H("/agent/settings/environment")}async function Wr(n){return H("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function Jt(){return H("/agent/active-chats")}async function Et(n=null,r={}){let i=new URLSearchParams;if(n)i.set("root_chat_jid",String(n));if(r?.includeArchived)i.set("include_archived","1");let c=i.toString()?`?${i.toString()}`:"";return H(`/agent/branches${c}`)}async function St(n,r={}){return H("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...r?.agentName?{agent_name:r.agentName}:{}})})}async function at(n){return H("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function mt(n,r={}){return H("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function ns(n){return H("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function rs(n){return H("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function is(n){return H("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function cs(n,r){return H("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:r})})}async function os(n,r={}){return H("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function ts(n,r,i,c="auto",o={}){let t={source_chat_jid:n,content:i,mode:c,...o?.sourceAgentName?{source_agent_name:o.sourceAgentName}:{},...o?.targetBy==="agent_name"?{target_agent_name:r}:{target_chat_jid:r}};return H("/agent/peer-message",{method:"POST",body:JSON.stringify(t)})}async function ss(){return H("/agent/push/vapid-public-key")}async function ls(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return H("/agent/push/subscription",{method:"POST",body:JSON.stringify(i)})}async function us(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return H("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(i)})}async function _s(){return H("/agent/roster")}async function fs(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return H(`/agent/status${r}`)}async function es(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return H(`/agent/context${r}`)}async function gs(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return H(`/agent/autoresearch/status${r}`)}async function ps(n=null,r={}){return H("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:r?.generateReport!==!1})})}async function $s(n=null){return H("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function hs(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return H(`/agent/queue-state${r}`)}async function ws(n,r=null){let i=await fetch(a+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let c=await i.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function ys(n,r=null){let i=await fetch(a+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let c=await i.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function xs(n,r,i=null){let c=await fetch(a+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:r,chat_jid:i||void 0})});if(!c.ok){let o=await c.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(o.error||`HTTP ${c.status}`)}return c.json()}async function ki(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return H(`/agent/models${r}`)}async function bs(n="provider-ready"){return H("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function vs(n){let r=new FormData;r.append("file",n);let i=await fetch(a+"/media/upload",{method:"POST",body:r});if(!i.ok){let c=await i.json().catch(()=>({error:"Upload failed"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function ds(n,r,i=null){let c=await fetch(a+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:r,chat_jid:i||void 0})});if(!c.ok){let o=await c.json().catch(()=>({error:"Failed to respond"}));throw Error(o.error||`HTTP ${c.status}`)}return c.json()}async function ks(n){let r=await fetch(a+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){let i=await r.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(i.error||`HTTP ${r.status}`)}return r.json()}async function Bs(n,r={}){let i=await fetch(a+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:r.systemPrompt||void 0,chat_jid:r.chatJid||void 0}),signal:r.signal});if(!i.ok){let t=await i.json().catch(()=>({error:"Side prompt failed"}));throw Error(t.error||`HTTP ${i.status}`)}let c=null,o=null;if(await Xt(i,(t,s)=>{if(r.onEvent?.(t,s),t==="side_prompt_thinking_delta")r.onThinkingDelta?.(s?.delta||"");else if(t==="side_prompt_text_delta")r.onTextDelta?.(s?.delta||"");else if(t==="side_prompt_done")c=s;else if(t==="side_prompt_error")o=s}),o){let t=Error(o?.error||"Side prompt failed");throw t.payload=o,t}return c}async function Ts(n,r){let i=await fetch(a+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:r})});if(!i.ok){let c=await i.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function Fs(n,r="thought"){let i=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(r)}`;return H(i)}async function zs(n,r,i){return H("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:r,expanded:Boolean(i)})})}function Ks(n){return`${a}/media/${n}`}function Ws(n){return`${a}/media/${n}/thumbnail`}async function Rs(n){let r=await fetch(`${a}/media/${n}/info`);if(!r.ok)throw Error("Failed to get media info");return r.json()}async function Ms(n){let r=await fetch(`${a}/media/${n}`);if(!r.ok)throw Error("Failed to load media text");return r.text()}async function Ns(n){let r=await fetch(`${a}/media/${n}`);if(!r.ok)throw Error("Failed to load media blob");return r.blob()}async function js(n="",r=2,i=!1){let c=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${r}&show_hidden=${i?"1":"0"}`;return H(c)}async function Us(n=""){let r=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return H(r)}async function Hs(n="all"){let r=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return H(r)}async function Ls(n="all"){return H("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function Gs(n,r=20000,i=null){let c=i?`&mode=${encodeURIComponent(i)}`:"",o=`/workspace/file?path=${encodeURIComponent(n)}&max=${r}${c}`;return H(o)}async function Ps(n){return H(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function Vs(n,r){return H("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:r})})}async function As(n){return H("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function Cs(n,r="",i={}){let c=new URLSearchParams;if(r)c.set("path",r);if(i.overwrite)c.set("overwrite","1");let o=c.toString();return o?`${n}?${o}`:n}function Qs(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function qs(n,r,i,c){return new Promise((o,t)=>{let s=new XMLHttpRequest;s.open("POST",a+r);for(let[u,_]of Object.entries(i||{}))if(_!==void 0&&_!==null)s.setRequestHeader(u,String(_));s.upload.onprogress=(u)=>{if(typeof c==="function")c({loaded:u.lengthComputable?u.loaded:0,total:u.lengthComputable?u.total:n.size,lengthComputable:u.lengthComputable})},s.onload=()=>{try{let u=s.responseText?JSON.parse(s.responseText):{};if(s.status>=200&&s.status<300)o(u);else{let _=Error(u.error||`HTTP ${s.status}`);_.status=s.status,_.code=u.code,t(_)}}catch{let u=Error(`HTTP ${s.status}`);u.status=s.status,t(u)}},s.onerror=()=>t(Error("Upload failed (network error)")),s.ontimeout=()=>t(Error("Upload timed out")),s.send(n)})}async function Ds(n,r="",i={}){let c=Qs(),o=Cs("/workspace/upload-chunk",r,i),t=Math.max(1,Math.min(li,Number(i.chunkSize)||Xs)),s=Math.max(0,Number(n?.size)||0),u=Math.max(1,Math.ceil(s/t)),_=0,e=null;for(let x=0;x<u;x+=1){let f=x*t,y=Math.min(s,f+t),$=n.slice(f,y),v=$.size;if(e=await qs($,o,{"X-Upload-Id":c,"X-Chunk-Index":x,"X-Chunk-Total":u,"X-File-Name":n?.name||"upload.bin","X-File-Size":s},(z)=>{if(typeof i.onProgress!=="function")return;let w=Math.min(s,_+(z?.loaded||0)),d=s||1;i.onProgress({loaded:w,total:d,percent:Math.round(w/d*100),chunkIndex:x,chunkTotal:u})}),_+=v,typeof i.onProgress==="function"){let z=s||1,w=s?_:z;i.onProgress({loaded:w,total:z,percent:Math.round(w/z*100),chunkIndex:x+1,chunkTotal:u})}}return e}async function Is(n,r="",i={}){if(n?.size>li){let c=(n.size/1048576).toFixed(0),o=(li/1048576).toFixed(0),t=Error(`File too large (${c} MB). Maximum upload size is ${o} MB.`);throw t.code="file_too_large",t}return await Ds(n,r,i)}async function Zs(n,r,i=""){let c=await fetch(a+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r,content:i})});if(!c.ok){let o=await c.json().catch(()=>({error:"Create failed"})),t=Error(o.error||`HTTP ${c.status}`);throw t.status=c.status,t.code=o.code,t}return c.json()}async function Ys(n,r){let i=await fetch(a+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r})});if(!i.ok){let c=await i.json().catch(()=>({error:"Rename failed"})),o=Error(c.error||`HTTP ${i.status}`);throw o.status=i.status,o.code=c.code,o}return i.json()}async function Os(n,r){let i=await fetch(a+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:r})});if(!i.ok){let c=await i.json().catch(()=>({error:"Move failed"})),o=Error(c.error||`HTTP ${i.status}`);throw o.status=i.status,o.code=c.code,o}return i.json()}async function Js(n){let r=`/workspace/file?path=${encodeURIComponent(n||"")}`;return H(r,{method:"DELETE"})}async function Es(n,r=!1){return H("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(r)})})}function Xc(n,r={}){let i=new URLSearchParams({path:String(n||"")});if(r.download)i.set("download","1");return`${a}/workspace/raw?${i.toString()}`}function Ss(n){return Xc(n,{download:!0})}function as(n,r=!1){let i=`path=${encodeURIComponent(n||"")}&show_hidden=${r?"1":"0"}`;return`${a}/workspace/download?${i}`}class Cc{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,r,i={}){this.onEvent=n,this.onStatusChange=r,this.chatJid=typeof i?.chatJid==="string"&&i.chatJid.trim()?i.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(a+"/sse/stream"+n);let r=(i)=>{this.eventSource.addEventListener(i,(c)=>{this.markActivity(),this.onEvent(i,JSON.parse(c.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),r("new_post"),r("new_reply"),r("agent_response"),r("interaction_updated"),r("interaction_deleted"),r("agent_status"),r("agent_steer_queued"),r("agent_followup_queued"),r("agent_followup_consumed"),r("agent_followup_removed"),r("workspace_update"),r("agent_draft"),r("agent_draft_delta"),r("agent_thought"),r("agent_thought_delta"),r("model_changed"),r("ui_theme"),r("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(r)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,r=60000,i=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,i+r),this.reconnectAttempts=0;let c=Math.max(this.cooldownUntil-i,0),o=Math.max(this.reconnectDelay,c);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},o),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var a="",li=1073741824,Xs=8388608;var $n=q(()=>{Gc()});function Dn(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function tn(n,r){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,r)}catch{return}}function Bi(n,r=!1){let i=Dn(n);if(i===null)return r;return i==="true"}function Ti(n,r=null){let i=Dn(n);if(i===null)return r;let c=parseInt(i,10);return Number.isFinite(c)?c:r}function Qc(n){let r=Dn(n);if(!r)return null;try{return JSON.parse(r)}catch{return null}}function rl(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(Mr,{detail:{enabled:Boolean(n)}}))}function Ic(n){if(typeof fetch!=="function")return;wi({ui_meters:n}).catch((r)=>{console.debug("[meters] Failed to persist meters UI state.",r)})}function il(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(nl,{detail:{collapsed:Boolean(n)}}))}function Fi(n=!1){return Bi(qc,n)}function B_(n=!1){return Bi(Dc,n)}function Rr(n,r={}){let i=r.persist!==!1,c=r.persistServer!==!1,o=Boolean(n);if(i)tn(qc,o?"true":"false");if(c)Ic({enabled:o});return rl(o),o}function cl(n,r={}){let i=r.persist!==!1,c=r.persistServer!==!1,o=Boolean(n);if(i)tn(Dc,o?"true":"false");if(c)Ic({collapsed:o});return il(o),o}function T_(n){let r=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")Rr(Boolean(n.enabled),{persistServer:!1});else if(r==="toggle"){let i=!Fi(!1);Rr(i,{persistServer:!1})}if(typeof n?.collapsed==="boolean")cl(Boolean(n.collapsed),{persistServer:!1})}var qc="piclaw_system_meters_enabled",Dc="piclaw_system_meters_collapsed",Mr="piclaw-meters-change",nl="piclaw-meters-collapsed-change";var Zc=q(()=>{$n()});function Yc(n,r){if(n===""||n===null||n===void 0)return r;let i=Number(n);return Number.isFinite(i)?i:r}function Oc(n,{min:r=-1/0,max:i=1/0}={}){let c=Number.isFinite(Number(r))?Number(r):-1/0,o=Number.isFinite(Number(i))?Number(i):1/0;return Math.min(o,Math.max(c,Number(n)))}function hn(n,{fallback:r=0,min:i=-1/0,max:c=1/0}={}){let o=Yc(n,r);return Oc(o,{min:i,max:c})}function ol(n,{direction:r=1,step:i=1,fallback:c=0,min:o=-1/0,max:t=1/0}={}){let s=hn(n,{fallback:c,min:o,max:t}),u=Math.abs(Yc(i,1))||1,_=Number(r)<0?-1:1;return Oc(s+_*u,{min:o,max:t})}function S({value:n,min:r,max:i,step:c=1,fallback:o,width:t="80px",disabled:s=!1,label:u,onChange:_}){let e=Number.isFinite(Number(o))?Number(o):hn(n,{fallback:0,min:r,max:i}),[x,f]=g(String(n??e)),y=Q(!1);L(()=>{if(!y.current)f(String(n??e))},[n,e]);let $=F((z)=>{y.current=!1;let w=hn(z,{fallback:e,min:r,max:i});f(String(w)),_?.(w)},[e,r,i,_]),v=F((z)=>{y.current=!1;let w=ol(n,{direction:z,step:c,fallback:e,min:r,max:i});f(String(w)),_?.(w)},[e,i,r,_,c,n]);return l`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${u||"value"}`}
                title=${`Decrease ${u||"value"}`}
                disabled=${s}
                onClick=${()=>v(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${x}
                disabled=${s}
                style=${`width:${t}`}
                onInput=${(z)=>{y.current=!0,f(z.target.value)}}
                onBlur=${(z)=>$(z.target.value)}
                onKeyDown=${(z)=>{if(z.key==="Enter")z.preventDefault(),$(z.target.value),z.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${u||"value"}`}
                title=${`Increase ${u||"value"}`}
                disabled=${s}
                onClick=${()=>v(1)}
            >+</button>
        </span>
    `}var Nn=q(()=>{E()});function Jc(n){let r=String(n||"").trim();if(!r)return"";if(r.startsWith("http://")||r.startsWith("https://")||r.startsWith("data:")||r.startsWith("blob:"))return r;if(r.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(r.slice(11))}`;if(r.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(r))return"";if(r.startsWith("\\\\"))return"";if(r.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(r.replace(/^\.\//,""))}`}function Ec({value:n,onChange:r}){let i=Q(null),[c,o]=g(Jc(n));L(()=>{o(Jc(n))},[n]);let t=F((s)=>{let u=s.target.files?.[0];if(!u)return;let _=new FileReader;_.onload=()=>{let e=_.result;o(e),r?.(e)},_.readAsDataURL(u)},[r]);return l`
        <div class="settings-avatar-inline" onClick=${()=>i.current?.click()} title="Click to upload">
            ${c?l`<img src=${c} alt="avatar" />`:l`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${i} style="display:none" onChange=${t} />
        </div>
    `}function Sc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function tl(n,r={}){let i=typeof n==="string"?n:"";if(!i)return!1;let c=r.navigator??(typeof navigator<"u"?navigator:null),o=r.document??(typeof document<"u"?document:null);if(c?.clipboard?.writeText)try{return await c.clipboard.writeText(i),!0}catch(t){}try{if(!o?.body||typeof o.createElement!=="function"||typeof o.execCommand!=="function")return!1;let t=o.createElement("textarea");t.value=i,t.setAttribute?.("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",t.style.opacity="0",o.body.appendChild(t),t.focus?.(),t.select?.();let s=Boolean(o.execCommand("copy"));return o.body.removeChild(t),s}catch(t){return!1}}function zi({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,o]=g(""),[t,s]=g(""),[u,_]=g(""),[e,x]=g(""),[f,y]=g(32),[$,v]=g(256),[z,w]=g(""),[d,R]=g(!1),[M,k]=g(!1),[W,h]=g(!1),[B,G]=g(()=>Fi(!1)),[p,K]=g(!1),U=Q(""),b=Q(null),N=Q(!0);L(()=>{return N.current=!0,()=>{N.current=!1}},[]);let P=F((I)=>{let D=Sc(I);o(D.userName),s(D.userAvatar),_(D.assistantName),x(D.assistantAvatar),y(D.composeUploadLimitMb),v(D.workspaceUploadLimitMb),w(I?.widgetToken||""),U.current=JSON.stringify(D)},[]);L(()=>{P(n||{})},[n,P]),L(()=>{let I=(D)=>{G(Boolean(D?.detail?.enabled))};return window.addEventListener(Mr,I),()=>window.removeEventListener(Mr,I)},[]);let V=C(()=>JSON.stringify(Sc({userName:c,userAvatar:t,assistantName:u,assistantAvatar:e,composeUploadLimitMb:f,workspaceUploadLimitMb:$})),[c,t,u,e,f,$]);L(()=>{if(V===U.current)return;if(b.current)clearTimeout(b.current);return b.current=setTimeout(async()=>{if(!N.current)return;let I=document.activeElement;if(I&&I.closest?.(".settings-number-stepper"))return;try{let D=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:V}),Tn=await D.json().catch(()=>({}));if(!N.current)return;if(!D.ok||!Tn?.ok||!Tn?.settings)return;U.current=V,i?.(Tn.settings),K(!0),setTimeout(()=>{if(N.current)K(!1)},4000)}catch(D){console.warn("[settings/general] Failed to persist general settings snapshot.",D)}},800),()=>{if(b.current)clearTimeout(b.current)}},[V,i]);let A=n?.instanceTotp||{configured:!1,issuer:u||"Piclaw",label:c?`${u||"Piclaw"}:${c}`:u||"Piclaw",secret:"",otpauth:"",qrSvg:""},m=F(async()=>{if(!z)return;if(await tl(z))k(!0),setTimeout(()=>{if(N.current)k(!1)},3000);else r?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[z,r]),on=F(async()=>{if(W)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;h(!0);try{let I=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),D=await I.json().catch(()=>({}));if(!I.ok||!D?.ok||!D?.settings)throw Error(D?.error||"Failed to regenerate widget token.");w(D.settings.widgetToken||""),i?.(D.settings),K(!0),setTimeout(()=>{if(N.current)K(!1)},4000)}catch(I){console.warn("[settings/general] Failed to regenerate widget token.",I)}finally{if(N.current)h(!1)}},[W,i]),Bn=typeof window<"u"&&window.isSecureContext,Ln=z?"•".repeat(Math.min(Math.max(z.length,16),48)):"—",Gn=d?z||"—":Ln;return l`
        <div class="settings-section">
            ${p&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${Ec} value=${t} onChange=${s} />
                <input type="text" value=${c} onInput=${(I)=>o(I.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${Ec} value=${e} onChange=${x} />
                <input type="text" value=${u} onInput=${(I)=>_(I.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${Bn?l`
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
                    <input type="checkbox" checked=${B}
                        onChange=${()=>{let I=Rr(!B);G(I)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${S}
                    label="compose upload limit"
                    value=${f}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${y}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${S}
                    label="workspace upload limit"
                    value=${$}
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
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${Gn}</code>
                        <button class=${`settings-keychain-reveal-btn${d?" active":""}`}
                            type="button"
                            onClick=${()=>R((I)=>!I)}
                            disabled=${!z}
                            title=${d?"Hide token":"Reveal token"}>
                            ${d?l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${m} disabled=${!z} title="Copy token">
                            ${M?l`<span class="settings-widget-token-copied">Copied</span>`:l`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${on} disabled=${W}>${W?"Regenerating…":"Regenerate"}</button>
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
                            ${A.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${A.configured?l`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:A.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${A.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${A.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${A.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var ac=q(()=>{E();Zc();Nn()});var no={};rn(no,{SessionsSection:()=>sl});function mc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function sl({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,o]=g(!0),[t,s]=g(16),[u,_]=g(4000),[e,x]=g(3),[f,y]=g(64),[$,v]=g("none"),[z,w]=g(!1),d=Q(""),R=Q(null),M=Q(!0);L(()=>{return M.current=!0,()=>{M.current=!1}},[]);let k=F((h)=>{let B=mc(h);o(B.sessionAutoRotate),s(B.sessionMaxSizeMb),_(B.sessionMaxLines),x(B.sessionMaxCompactions),y(B.toolUseBudget),v(B.sessionIsolation),d.current=JSON.stringify(B)},[]);L(()=>{k(n||{})},[n,k]);let W=C(()=>JSON.stringify(mc({sessionAutoRotate:c,sessionMaxSizeMb:t,sessionMaxLines:u,sessionMaxCompactions:e,toolUseBudget:f,sessionIsolation:$})),[c,t,u,e,f,$]);return L(()=>{if(W===d.current)return;if(R.current)clearTimeout(R.current);return R.current=setTimeout(async()=>{if(!M.current)return;let h=document.activeElement;if(h&&h.closest?.(".settings-number-stepper"))return;try{let B=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:W}),G=await B.json().catch(()=>({}));if(!M.current)return;if(!B.ok||!G?.ok||!G?.settings)return;d.current=W,i?.(G.settings),w(!0),setTimeout(()=>{if(M.current)w(!1)},4000)}catch(B){console.warn("[settings/sessions] Failed to persist session settings.",B)}},800),()=>{if(R.current)clearTimeout(R.current)}},[W,i]),l`
        <div class="settings-section">
            ${z&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${c} onChange=${(h)=>o(h.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${S}
                    label="max session size"
                    value=${t}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${s}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${S}
                    label="tool use budget"
                    value=${f}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${y}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${$} onChange=${(h)=>v(h.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var ro=q(()=>{E();Nn()});var io={};rn(io,{__recordingsSettingsTest:()=>fl,RecordingsSection:()=>_l});function jr(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Ki(n){if(n==="full")return"full / trusted";if(n==="metadata")return"metadata only";return"redacted"}function Nr({children:n,type:r="neutral"}){return l`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function ll(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function tr(n){return String(n||"").split(`
`).map((r)=>r.trim()).filter(Boolean)}function ul({recording:n,details:r,onDelete:i,onRefresh:c}){if(!n)return l`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let o=r?.meta||n,t=Array.isArray(r?.events)?r.events:[],s=t.reduce((_,e)=>_+(Array.isArray(e.redactions)?e.redactions.length:0),0),u=t.reduce((_,e)=>{let x=e.kind||"event";return _[x]=(_[x]||0)+1,_},{});return l`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${o.title||o.id}</h4>
                    <code>${o.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open($i(o.id),"_blank","noopener,noreferrer")}>Playback</button>
                    <button onClick=${c}>Refresh</button>
                    <button class="danger" onClick=${()=>i(o)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${o.status||"—"}</strong>
                <span>Mode</span><strong>${Ki(o.mode)}</strong>
                <span>Chat</span><code>${o.chatJid||"—"}</code>
                <span>Started</span><strong>${jr(o.startedAt)}</strong>
                <span>Ended</span><strong>${jr(o.endedAt)}</strong>
                <span>Events</span><strong>${o.eventCount??t.length}</strong>
                <span>Redactions</span><strong>${s}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${or(o.id,"json")}>Export JSON</a>
                <a href=${or(o.id,"jsonl")}>Export JSONL</a>
                <a href=${or(o.id,"html")}>Export standalone HTML</a>
            </div>
            <h4>Event summary</h4>
            ${t.length===0&&l`<p class="settings-hint">Open or refresh details to inspect trace events.</p>`}
            ${t.length>0&&l`
                <div class="settings-recording-event-summary">
                    ${Object.entries(u).map(([_,e])=>l`<${Nr}>${_}: ${e}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(t.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function _l({filter:n="",setStatus:r}){let[i,c]=g([]),[o,t]=g([]),[s,u]=g(!0),[_,e]=g(null),[x,f]=g(null),[y,$]=g(null),[v,z]=g(!1),[w,d]=g(ll),[R,M]=g(""),[k,W]=g("redacted"),[h,B]=g(!0),[G,p]=g(""),[K,U]=g(""),[b,N]=g('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[P,V]=g(null);L(()=>{let j=(O)=>{let cn=String(O?.detail?.chatJid||"").trim();if(cn)d(cn)};return window.addEventListener("piclaw:current-chat-changed",j),()=>window.removeEventListener("piclaw:current-chat-changed",j)},[]);let A=F(async(j=x)=>{u(!0),e(null);try{let O=await fi(),cn=O.recordings||[];c(cn),t(O.active||[]);let xn=cn.find((T)=>T.id===j)||cn[0]||null;if(f(xn?.id||null),xn?.id)$(await Kr(xn.id));else $(null)}catch(O){e(O?.message||"Failed to load recordings.")}finally{u(!1)}},[x]);L(()=>{A()},[A]);let m=C(()=>i.find((j)=>j.id===x)||null,[i,x]),on=C(()=>o.find((j)=>j.chatJid===w)||null,[o,w]),Bn=String(n||"").trim().toLowerCase(),Ln=C(()=>{if(!Bn)return i;return i.filter((j)=>[j.id,j.title,j.chatJid,j.status,j.mode].some((O)=>String(O||"").toLowerCase().includes(Bn)))},[i,Bn]),Gn=F(async(j)=>{if(f(j?.id||null),$(null),!j?.id)return;try{$(await Kr(j.id))}catch(O){r?.(O?.message||"Failed to load recording.","error")}},[r]),I=F(async()=>{if(v)return;z(!0);try{let j={keys:tr(G),patterns:tr(K)},O=await ei({chat_jid:w,title:R||void 0,mode:k,include_timeline_snapshot:h,timeline_snapshot_limit:80,redaction:j});r?.(`Recording started for ${w}.`,"success"),await A(O?.recording?.id)}catch(j){r?.(j?.message||"Failed to start recording.","error")}finally{z(!1)}},[v,w,G,K,h,A,k,r,R]),D=F(async(j=on)=>{if(!j||v)return;z(!0);try{let O=await gi({id:j.id});r?.(`Recording stopped for ${j.chatJid}.`,"success"),await A(O?.recording?.id)}catch(O){r?.(O?.message||"Failed to stop recording.","error")}finally{z(!1)}},[v,on,A,r]),Tn=F(async(j)=>{if(!j||v)return;if(!window.confirm(`Delete recording ${j.id}?

${j.title||""}`))return;z(!0);try{await pi(j.id),r?.("Recording deleted.","success"),await A(null)}catch(O){r?.(O?.message||"Failed to delete recording.","error")}finally{z(!1)}},[v,A,r]),er=F(async()=>{try{let j=JSON.parse(b||"null"),O=await hi(j,{mode:k,redaction:{keys:tr(G),patterns:tr(K)}});V(O.preview)}catch(j){V({error:j?.message||"Preview failed."})}},[G,K,k,b]);return l`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${w} onInput=${(j)=>d(j.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${R} onInput=${(j)=>M(j.target.value)} /></label>
                    <label>Mode<select value=${k} onChange=${(j)=>W(j.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${h} onChange=${(j)=>B(j.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${G} onInput=${(j)=>p(j.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${K} onInput=${(j)=>U(j.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${on?l`<button onClick=${()=>D(on)} disabled=${v}>Stop current chat recording</button>`:l`<button onClick=${I} disabled=${v}>Start recording</button>`}
                    <button onClick=${()=>A()} disabled=${s}>Refresh</button>
                </div>
                ${o.length>0&&l`<div class="settings-recording-active-row">${o.map((j)=>l`<${Nr} type="active">REC ${j.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${b} onInput=${(j)=>N(j.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${er}>Preview redaction</button></div>
                ${P&&l`<pre>${JSON.stringify(P,null,2)}</pre>`}
            </details>

            ${s&&l`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${_&&l`<div class="settings-error-state">${_}</div>`}
            ${!s&&!_&&i.length===0&&l`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!s&&!_&&i.length>0&&l`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${Ln.map((j)=>l`
                            <button class=${`settings-task-row ${j.id===x?"active":""}`} onClick=${()=>Gn(j)}>
                                <span class="settings-task-row-main"><strong>${j.title||j.id}</strong><span>${j.chatJid} · ${jr(j.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${Nr} type=${j.status==="recording"?"active":"completed"}>${j.status}<//><${Nr}>${Ki(j.mode)}<//></span>
                                <span class="settings-task-row-times">${j.eventCount||0} events</span>
                            </button>
                        `)}
                        ${Ln.length===0&&l`<p class="settings-hint">No recordings match “${n}”.</p>`}
                    </div>
                    <${ul} recording=${m} details=${y} onDelete=${Tn} onRefresh=${()=>m&&Gn(m)} />
                </div>
            `}
        </div>
    `}var fl;var co=q(()=>{E();$n();fl={formatDateTime:jr,modeLabel:Ki,parseList:tr}});var oo={};rn(oo,{CompactionSection:()=>gl});function el(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function Wi(n){let r=String(n||"").trim();if(!r)return"—";let i=new Date(r);if(Number.isNaN(i.getTime()))return r;return i.toLocaleString()}function gl({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,o]=g(180),[t,s]=g(15),[u,_]=g(360),[e,x]=g(75),[f,y]=g(0.5),[$,v]=g(!0),[z,w]=g(!1),[d,R]=g(120),[M,k]=g([]),[W,h]=g([]),[B,G]=g(!1),p=Q(""),K=Q(null),U=Q(!0);L(()=>{return U.current=!0,()=>{U.current=!1}},[]);let b=F((V)=>{let A=el(V);o(A.compactionTimeoutSec),s(A.compactionBackoffBaseMin),_(A.compactionBackoffMaxMin),x(A.compactionThresholdPercent),y(A.compactionBackoffDecayFactor),v(A.toolResultCompactionEnabled),w(A.progressWatchdogEnabled),R(A.progressWatchdogTimeoutSec),k(A.compactionBackoffs),h(A.progressWatchdogPhases),p.current=JSON.stringify({compactionTimeoutSec:A.compactionTimeoutSec,compactionBackoffBaseMin:A.compactionBackoffBaseMin,compactionBackoffMaxMin:A.compactionBackoffMaxMin,compactionThresholdPercent:A.compactionThresholdPercent,compactionBackoffDecayFactor:A.compactionBackoffDecayFactor,toolResultCompactionEnabled:A.toolResultCompactionEnabled,progressWatchdogEnabled:A.progressWatchdogEnabled,progressWatchdogTimeoutSec:A.progressWatchdogTimeoutSec})},[]);L(()=>{b(n||{})},[n,b]);let N=C(()=>JSON.stringify({compactionTimeoutSec:c,compactionBackoffBaseMin:t,compactionBackoffMaxMin:u,compactionThresholdPercent:e,compactionBackoffDecayFactor:f,toolResultCompactionEnabled:$,progressWatchdogEnabled:z,progressWatchdogTimeoutSec:d}),[c,t,u,e,f,$,z,d]);L(()=>{if(N===p.current)return;if(K.current)clearTimeout(K.current);return K.current=setTimeout(async()=>{if(!U.current)return;let V=document.activeElement;if(V&&V.closest?.(".settings-number-stepper"))return;try{r?.("Saving compaction settings…","info");let A=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:N}),m=await A.json().catch(()=>({}));if(!U.current)return;if(!A.ok||!m?.ok||!m?.settings){r?.(m?.error||"Failed to save compaction settings.","error");return}p.current=N,i?.(m.settings),b({...n||{},...m.settings||{}}),r?.("Compaction settings saved.","success"),G(!0),setTimeout(()=>{if(U.current)G(!1),r?.(null)},4000)}catch(A){if(console.warn("[settings/compaction] Failed to persist compaction settings.",A),U.current)r?.("Failed to save compaction settings.","error")}},800),()=>{if(K.current)clearTimeout(K.current)}},[N,i,r,b,n]);let P=F(async(V)=>{try{r?.(`Clearing compaction suppression for ${V}…`,"info");let A=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:V})}),m=await A.json().catch(()=>({}));if(!A.ok||!m?.ok||!m?.settings){r?.(m?.error||"Failed to clear compaction suppression.","error");return}i?.(m.settings),b({...n||{},...m.settings||{}}),r?.(`Cleared compaction suppression for ${V}.`,"success")}catch(A){console.warn("[settings/compaction] Failed to clear compaction suppression.",A),r?.("Failed to clear compaction suppression.","error")}},[b,i,r,n]);return l`
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
                    <input type="checkbox" checked=${$} onChange=${(V)=>v(Boolean(V.target.checked))} />
                    <span class="settings-hint" style="margin:0">When disabled, large tool results stay inline and are not externalized into searchable tool-output handles.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${S}
                    label="compaction threshold"
                    value=${e}
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
                <${S}
                    label="compaction timeout"
                    value=${c}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${o}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${S}
                    label="compaction backoff base"
                    value=${t}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${s}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${S}
                    label="compaction backoff max"
                    value=${u}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${_}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${S}
                    label="backoff decay factor"
                    value=${Math.round(f*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(V)=>y(V/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${z} onChange=${(V)=>w(Boolean(V.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${S}
                    label="watchdog timeout"
                    value=${d}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!z}
                    onChange=${R}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${M.length===0?l`
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
                            ${M.map((V)=>l`
                                <tr>
                                    <td><code>${V.chatJid}</code></td>
                                    <td>${V.failureCount}</td>
                                    <td>${Wi(V.backoffUntil)}</td>
                                    <td title=${V.lastErrorMessage||""}>${V.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>P(V.chatJid)}>
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
            ${W.length===0?l`
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
                            ${W.map((V)=>l`
                                <tr>
                                    <td><code>${V.chatJid}</code></td>
                                    <td>${V.phase}</td>
                                    <td>${Wi(V.startedAt)}</td>
                                    <td>${Wi(V.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var to=q(()=>{E();Nn()});function lo(n){let r=String(n||"").trim().toLowerCase();if(!r)return null;let i=hl[r]||r;if(/^f(?:[1-9]|1[0-2])$/.test(i))return i;if(wl.has(i))return i;if(i.length===1)return i;if(/^[a-z0-9]+$/.test(i))return i;return null}function In(n){let r=String(n||"").trim();if(!r)return null;let i=r.split("+").map((t)=>t.trim()).filter(Boolean);if(!i.length)return null;let c={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let t of i){let s=t.toLowerCase(),u=$l[s];if(u){c[u]=!0;continue}if(c.key)return null;let _=lo(t);if(!_||_==="escape")return null;c.key=_}if(!c.key)return null;let o=[];if(c.ctrl)o.push("ctrl");if(c.meta)o.push("meta");if(c.alt)o.push("alt");if(c.shift)o.push("shift");return o.push(c.key),o.join("+")}function uo(n){return String(n||"").split(/[\n,]/).map((r)=>In(r)).filter((r)=>Boolean(r))}function kn(n){return n.join(", ")}function Mi(){let n=Qc(so);if(!n||typeof n!=="object")return{};let r={};for(let i of sr){let c=n[i.id];if(!Array.isArray(c))continue;let o=c.map((t)=>In(String(t||""))).filter((t)=>Boolean(t));r[i.id]=[...new Set(o)]}return r}function Ri(n){if(tn(so,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function _o(n){return pl.get(n)}function lr(n){let r=Mi()[n];if(Array.isArray(r))return r;return[..._o(n).defaultBindings]}function fo(n,r){let i=Mi(),c=_o(n).defaultBindings,o=[...new Set(r.map((t)=>In(t)).filter((t)=>Boolean(t)))];if(o.length===c.length&&o.every((t,s)=>t===c[s]))delete i[n];else i[n]=o;Ri(i)}function Ni(n){if(!n){Ri({});return}let r=Mi();delete r[n],Ri(r)}function Ur(){let n={};for(let r of sr)n[r.id]=lr(r.id);return n}function yl(n){let r=typeof n==="string"?n:"";if(!r)return"";if(r.length===1)return r.toLowerCase();return lo(r)||r.toLowerCase()}function xl(n){let r=In(n);if(!r)return null;let i={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let c of r.split("+")){if(c==="ctrl"||c==="meta"||c==="alt"||c==="shift"){i[c]=!0;continue}i.key=c}return i.key?i:null}function bl(n,r){let i=xl(r);if(!i)return!1;if(yl(n?.key)!==i.key)return!1;let o=!i.shift&&i.key.length===1&&/[^a-z0-9]/i.test(i.key);return Boolean(n?.ctrlKey)===i.ctrl&&Boolean(n?.metaKey)===i.meta&&Boolean(n?.altKey)===i.alt&&(o||Boolean(n?.shiftKey)===i.shift)}function A_(n,r){return lr(r).some((i)=>bl(n,i))}var so="piclaw_keyboard_shortcuts_v1",sr,pl,$l,hl,wl;var eo=q(()=>{sr=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],pl=new Map(sr.map((n)=>[n.id,n])),$l={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},hl={esc:"escape",return:"enter",spacebar:"space"},wl=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var go={};rn(go,{KeyboardSection:()=>dl});function vl(n,r,i){let c=String(n||"").trim().toLowerCase();if(!c)return!0;return[r.label,r.description,i,...r.defaultBindings||[]].some((o)=>String(o||"").toLowerCase().includes(c))}function dl({filter:n="",setStatus:r}){let[i,c]=g(()=>{let _=Ur();return Object.fromEntries(Object.entries(_).map(([e,x])=>[e,kn(x)]))});L(()=>{let _=()=>{let e=Ur();c(Object.fromEntries(Object.entries(e).map(([x,f])=>[x,kn(f)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",_),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",_)},[]);let o=C(()=>sr.filter((_)=>{let e=String(i[_.id]||"");return vl(n,_,e)}),[i,n]),t=(_)=>{let e=String(i[_]||"").trim(),f=(e?e.split(/[\n,]/).map(($)=>$.trim()).filter(Boolean):[]).filter(($)=>!In($));if(f.length>0){r?.(`Invalid shortcut: ${f[0]}. Escape is reserved and cannot be rebound.`,"error");return}let y=uo(e);fo(_,y),c(($)=>({...$,[_]:kn(lr(_))})),r?.("Keyboard shortcuts saved.","success")},s=(_)=>{Ni(_),c((e)=>({...e,[_]:kn(lr(_))})),r?.("Keyboard shortcut reset to default.","success")};return l`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{Ni();let _=Ur();c(Object.fromEntries(Object.entries(_).map(([e,x])=>[e,kn(x)]))),r?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${o.map((_)=>l`
                    <div class="settings-shortcut-card" key=${_.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${_.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${_.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${kn(_.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${i[_.id]||""}
                                placeholder=${kn(_.defaultBindings)}
                                onInput=${(e)=>c((x)=>({...x,[_.id]:e.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>t(_.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>s(_.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${o.length===0&&l`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var po=q(()=>{E();eo()});function wo(n,r=ji){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(300,Math.max(15,Math.round(i)))}function yo(n,r=Ui){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(8,Math.max(0,Math.round(i)))}function Hi(){return{refreshIntervalSec:wo(Ti($o,ji),ji),folderPreviewDepth:yo(Ti(ho,Ui),Ui)}}function xo(n={}){let r=Hi(),i={refreshIntervalSec:wo(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:r.refreshIntervalSec,r.refreshIntervalSec),folderPreviewDepth:yo(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:r.folderPreviewDepth,r.folderPreviewDepth)};if(tn($o,String(i.refreshIntervalSec)),tn(ho,String(i.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(kl,{detail:{settings:i}}));return i}var kl="piclaw:workspace-client-settings-updated",$o="workspaceRefreshIntervalSec",ho="workspaceFolderPreviewDepth",ji=60,Ui=3;var bo=()=>{};var ko={};rn(ko,{WorkspaceSection:()=>Bl});function vo(n={}){let r=n.workspaceSettings||{};return{webTerminalEnabled:r.webTerminalEnabled!==!1,vncAllowDirect:r.vncAllowDirect!==!1,treeMaxDepth:r.treeMaxDepth??4,treeMaxEntries:r.treeMaxEntries??5000}}function Bl({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,o]=g(!0),[t,s]=g(!0),[u,_]=g(4),[e,x]=g(5000),[f,y]=g(60),[$,v]=g(3),[z,w]=g(!1),[d,R]=g(!1),M=Q(""),k=Q(null),W=Q(null),h=Q(null),B=Q(!0);L(()=>{return B.current=!0,()=>{if(B.current=!1,k.current)clearTimeout(k.current);if(W.current)clearTimeout(W.current);if(h.current)clearTimeout(h.current)}},[]);let G=F((U)=>{let b=vo(U),N=Hi();o(b.webTerminalEnabled),s(b.vncAllowDirect),_(b.treeMaxDepth),x(b.treeMaxEntries),y(N.refreshIntervalSec),v(N.folderPreviewDepth),M.current=JSON.stringify(b)},[]);L(()=>{G(n||{})},[n,G]);let p=C(()=>JSON.stringify(vo({workspaceSettings:{webTerminalEnabled:c,vncAllowDirect:t,treeMaxDepth:u,treeMaxEntries:e}})),[c,t,u,e]);L(()=>{if(p===M.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!B.current)return;let U=document.activeElement;if(U&&U.closest?.(".settings-number-stepper"))return;try{let b=await vi(JSON.parse(p));if(!B.current||!b?.ok||!b?.settings)return;if(M.current=p,i?.({workspaceSettings:b.settings}),r?.(null),w(!0),W.current)clearTimeout(W.current);W.current=setTimeout(()=>{if(B.current)w(!1)},4000)}catch(b){r?.(String(b?.message||b),"error")}},800),()=>{if(k.current)clearTimeout(k.current)}},[p,i,r]);let K=F((U)=>{let b=xo(U);if(y(b.refreshIntervalSec),v(b.folderPreviewDepth),R(!0),h.current)clearTimeout(h.current);h.current=setTimeout(()=>{if(B.current)R(!1)},3000)},[]);return l`
        <div class="settings-section">
            ${z&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${d&&l`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${c} onChange=${(U)=>o(U.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${t} onChange=${(U)=>s(U.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${S}
                    label="workspace tree max depth"
                    value=${u}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${_}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${S}
                    label="workspace tree max entries"
                    value=${e}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${x}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${S}
                    label="workspace refresh interval"
                    value=${f}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(U)=>K({refreshIntervalSec:U})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${S}
                    label="folder preview scan depth"
                    value=${$}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(U)=>K({folderPreviewDepth:U})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var Bo=q(()=>{E();$n();bo();Nn()});var To={};rn(To,{EnvironmentSection:()=>Tl});function Li(n={}){let r=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(r.variables)?r.variables:[],overrides:r.overrides&&typeof r.overrides==="object"?r.overrides:{},count:Number(r.count||0),overrideCount:Number(r.overrideCount||0),keychainEnvNames:Array.isArray(r.keychainEnvNames)?r.keychainEnvNames:[]}}function Tl({settingsData:n,filter:r="",setStatus:i,mergeSettingsData:c}){let[o,t]=g(()=>Li(n||{})),[s,u]=g({}),[_,e]=g(""),[x,f]=g(""),[y,$]=g(null);L(()=>{t(Li(n||{})),u({})},[n]);let v=F((k)=>{let W=Li({environmentSettings:k?.settings||k});return t(W),c?.({environmentSettings:W}),u({}),W},[c]),z=F(async()=>{try{let k=await di();if(k?.ok)v(k.settings);i?.("Environment refreshed.","info")}catch(k){i?.(String(k?.message||k),"error")}},[v,i]),w=F(async(k,W)=>{let h=String(k||"").trim();if(!h)return;$(h);try{let B=await Wr({action:"set",name:h,value:String(W??"")});if(B?.ok)v(B.settings);if(i?.(`Saved environment override for ${h}.`,"info"),h===_.trim())e(""),f("")}catch(B){i?.(String(B?.message||B),"error")}finally{$(null)}},[v,_,i]),d=F(async(k)=>{let W=String(k||"").trim();if(!W)return;$(W);try{let h=await Wr({action:"clear",name:W});if(h?.ok)v(h.settings);i?.(`Cleared environment override for ${W}.`,"info")}catch(h){i?.(String(h?.message||h),"error")}finally{$(null)}},[v,i]),R=C(()=>{let k=String(r||"").trim().toLowerCase(),W=Array.isArray(o.variables)?o.variables:[];if(!k)return W;return W.filter((h)=>{return`${h?.name||""} ${h?.value||""} ${h?.source||""}`.toLowerCase().includes(k)})},[o.variables,r]),M=F((k,W)=>{u((h)=>({...h||{},[k]:W}))},[]);return l`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${z}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${_}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(k)=>e(k.target.value)}
                    />
                    <input
                        type="text"
                        value=${x}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(k)=>f(k.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!_.trim()||y===_.trim()}
                        onClick=${()=>w(_,x)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${o.count} variables visible • ${o.overrideCount} overrides active • ${o.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${R.map((k)=>{let W=String(k?.name||""),h=Object.prototype.hasOwnProperty.call(s,W)?s[W]:k.value,B=h!==k.value,G=y===W;return l`
                        <div class="settings-tool-row" key=${W} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${W}>${W}</span>
                            <input
                                type="text"
                                value=${h}
                                spellcheck="false"
                                onInput=${(p)=>M(W,p.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${k.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${k.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${G||!B} onClick=${()=>w(W,h)}>Save</button>
                                <button type="button" disabled=${G||!k.overridden} onClick=${()=>d(W)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${R.length===0&&l`<p class="settings-hint">No environment variables match "${r}".</p>`}
            </div>
        </div>
    `}var Fo=q(()=>{E();$n()});var zo={};rn(zo,{ProvidersSection:()=>zl});function Fl(n){switch(n){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function zl({providers:n,setStatus:r}){let[i,c]=g(null),[o,t]=g(null),[s,u]=g({}),_=F((w,d)=>{u((R)=>({...R,[w]:d}))},[]),e=F(async(w)=>{let d=(s.apiKey||"").trim();if(!d){r?.("API key cannot be empty.","error");return}c(w),r?.(`Configuring ${w}…`,"info");try{let R=JSON.stringify({provider:w,method:"api_key",api_key:d}),M=await pn("default",`/login __step2 ${R}`,null,[]);if(M?.command?.status==="error"){r?.(M.command.message,"error");return}r?.(M?.command?.message||`${w} configured.`,"success"),t(null),u({})}catch(R){r?.(String(R.message||R),"error")}finally{c(null)}},[s,r]),x=F(async(w,d)=>{c(w),r?.(`Configuring ${w}…`,"info");try{let R={provider:w,method:"custom"};for(let W of d.customFields||[])R[W.key]=(s[W.key]||"").trim();let M=JSON.stringify(R),k=await pn("default",`/login __step2 ${M}`,null,[]);if(k?.command?.status==="error"){r?.(k.command.message,"error");return}r?.(k?.command?.message||`${w} configured.`,"success"),t(null),u({})}catch(R){r?.(String(R.message||R),"error")}finally{c(null)}},[s,r]),f=F(async(w)=>{c(w),r?.(`Starting OAuth for ${w}…`,"info");try{let d=JSON.stringify({provider:w}),M=(await pn("default",`/login __step1 ${d}`,null,[]))?.command?.message||"";if(M.includes("http")){let k=M.match(/(https?:\/\/[^\s)]+)/);if(k)window.open(k[1],"_blank","noopener"),r?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else r?.(M,"success")}else r?.(M||`OAuth flow started for ${w}. Check the chat.`,"success")}catch(d){r?.(String(d.message||d),"error")}finally{c(null)}},[r]),y=F(async(w)=>{if(i)return;c(w),r?.(`Logging out ${w}…`,"info");try{await pn("default",`/logout ${w}`,null,[]),r?.(`Logged out ${w}. Restart may be needed.`,"success")}catch(d){r?.(String(d.message||d),"error")}finally{c(null)}},[i,r]),$=n||[],v=(w)=>o===w,z=(w)=>{t((d)=>d===w?null:w),u({})};return l`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${$.map((w)=>l`
                    <div class=${`settings-provider-card${w.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!w.configured&&z(w.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${w.name}</strong>
                                <span class="settings-provider-id">${w.id}</span>
                                ${w.configured&&l`<span class="settings-tag settings-tag-skill">${Fl(w.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${w.hasOAuth&&l`<span class="settings-tag">OAuth</span>`}
                                ${w.hasApiKey&&l`<span class="settings-tag">API Key</span>`}
                                ${w.isCustom&&l`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${w.configured?l`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${i===w.id} onClick=${(d)=>{d.stopPropagation(),y(w.id)}}
                                    >${i===w.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${i===w.id} onClick=${(d)=>{d.stopPropagation(),z(w.id)}}
                                    >Reconfigure</button>
                                `:l`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${i===w.id} onClick=${(d)=>{d.stopPropagation(),z(w.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${v(w.id)&&l`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${w.hasOAuth&&l`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${i===w.id}
                                            onClick=${()=>f(w.id)}>
                                            ${i===w.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${w.hasApiKey&&l`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${s.apiKey||""}
                                                onInput=${(d)=>_("apiKey",d.target.value)}
                                                placeholder=${w.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===w.id||!(s.apiKey||"").trim()}
                                                onClick=${()=>e(w.id)}>
                                                ${i===w.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${w.isCustom&&l`
                                    <div class="settings-provider-method">
                                        ${(w.customFields||[]).map((d)=>l`
                                            <div class="settings-provider-field-row">
                                                <label>${d.label}${d.required?" *":""}</label>
                                                <input type="text" value=${s[d.key]||""}
                                                    onInput=${(R)=>_(d.key,R.target.value)}
                                                    placeholder=${d.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===w.id}
                                                onClick=${()=>x(w.id,w)}>
                                                ${i===w.id?"Configuring…":"Save configuration"}
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
    `}var Ko=q(()=>{E();$n()});var Wo={};rn(Wo,{ModelsSection:()=>Nl});function Rl(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function Ml({thinkingLevel:n,supportsThinking:r,provider:i,availableLevels:c,onSetLevel:o,disabled:t}){let s=Rl(i)?Kl:Wl,u=c&&c.length>1?c:["off","minimal","low","medium","high"],_=Math.max(0,u.indexOf(n??"off"));if(!r)return l`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return l`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${s[u[_]]||u[_]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${u.length-1} step="1" value=${_} disabled=${t}
                    onInput=${(e)=>o(u[parseInt(e.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${u.map((e,x)=>l`<span class=${x===_?"active":""} onClick=${()=>!t&&o(e)}>${s[e]||e}</span>`)}
                </div>
            </div>
        </div>
    `}function Nl({filter:n=""}){let[r,i]=g(null),[c,o]=g(!1),[t,s]=g("off"),[u,_]=g(!1),[e,x]=g(["off"]),[f,y]=g(!1),$=F(async()=>{let h=await ki();if(i(h),h.thinking_level)s(h.thinking_level);if(_(Boolean(h.supports_thinking)),Array.isArray(h.available_thinking_levels)&&h.available_thinking_levels.length>0)x(h.available_thinking_levels);return h},[]);L(()=>{$().catch(()=>i({models:[],model_options:[]}))},[]);let v=F(async(h)=>{if(c)return;o(!0);try{await pn("default",`/model ${h}`,null,[]),await $()}catch(B){console.error("Failed to switch model:",B)}finally{o(!1)}},[c,$]),z=F(async(h)=>{if(f)return;y(!0),s(h);try{let B=await pn("default",`/thinking ${h}`,null,[]);if(B?.command?.thinking_level)s(B.command.thinking_level);_(B?.command?.supports_thinking!==!1),await $()}catch(B){console.error("Failed to set thinking:",B),await $().catch((G)=>{})}finally{y(!1)}},[f,$]);if(!r)return l`<div class="settings-loading">Loading models\u2026</div>`;let w=r.model_options||[],d=r.current,M=w.find((h)=>h.label===d)?.provider||"",k=n.toLowerCase(),W=k?w.filter((h)=>h.label.toLowerCase().includes(k)||(h.provider||"").toLowerCase().includes(k)):w;return l`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${W.map((h)=>l`
                            <tr class=${h.label===d?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${h.label===d} disabled=${c} onChange=${()=>v(h.label)} /></td>
                                <td>${h.name||h.label}</td><td>${h.provider}</td>
                                <td>${h.context_window?(h.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${h.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${W.length===0&&l`<tr><td colspan="5" class="settings-empty">No models match "${n}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${Ml}
                    thinkingLevel=${t}
                    supportsThinking=${u}
                    provider=${M}
                    availableLevels=${e}
                    onSetLevel=${z}
                    disabled=${f||c} />
            </div>
        </div>
    `}var Kl,Wl;var Ro=q(()=>{E();$n();Kl={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},Wl={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function Vi(n){let r=String(n||"").trim().toLowerCase();if(!r)return"default";if(r==="solarized-dark"||r==="solarized-light")return"solarized";if(r==="github-dark"||r==="github-light")return"github";if(r==="tokyo-night")return"tokyo";return r}function Uo(n){if(!n)return null;let r=String(n).trim();if(!r)return null;let i=r.startsWith("#")?r.slice(1):r;if(!/^[0-9a-fA-F]{3}$/.test(i)&&!/^[0-9a-fA-F]{6}$/.test(i))return null;let c=i.length===3?i.split("").map((t)=>t+t).join(""):i,o=parseInt(c,16);return{r:o>>16&255,g:o>>8&255,b:o&255,hex:`#${c.toLowerCase()}`}}function Ul(n,r){try{if(document.body){n.style.display="none",document.body.appendChild(n);let i=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),i}}catch{return r}return r}function Hl(n){if(!n||typeof document>"u")return null;let r=String(n).trim();if(!r)return null;let i=document.createElement("div");if(i.style.color="",i.style.color=r,!i.style.color)return null;let o=Ul(i,i.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!o)return null;let t=parseInt(o[1],10),s=parseInt(o[2],10),u=parseInt(o[3],10);if(![t,s,u].every((e)=>Number.isFinite(e)))return null;let _=`#${[t,s,u].map((e)=>e.toString(16).padStart(2,"0")).join("")}`;return{r:t,g:s,b:u,hex:_}}function jn(n){return Uo(n)||Hl(n)}function Ai(n,r,i){let c=Math.round(n.r+(r.r-n.r)*i),o=Math.round(n.g+(r.g-n.g)*i),t=Math.round(n.b+(r.b-n.b)*i);return`rgb(${c} ${o} ${t})`}function Hr(n,r){return`rgba(${n.r}, ${n.g}, ${n.b}, ${r})`}function Ll(n){let r=n.r/255,i=n.g/255,c=n.b/255,o=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4),t=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),s=c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);return 0.2126*o+0.7152*t+0.0722*s}function Gl(n){return Ll(n)>0.4?"#000000":"#ffffff"}function Ho(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Xi(n){return Mo[n]||Mo.default}function Pl(n){return n.mode==="auto"?Ho():n.mode}function Lo(n,r){let i=Xi(n);if(r==="dark"&&i.dark)return i.dark;if(r==="light"&&i.light)return i.light;return i.dark||i.light||yn}function wn(n,r,i){let c=jn(n);if(!c)return n;return Ai(c,r,i)}function Go(n,r,i){let c=jn(r);if(!c)return n;let t=Uo(i==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:wn(n.bgPrimary,c,0.08),bgSecondary:wn(n.bgSecondary,c,0.12),bgHover:wn(n.bgHover,c,0.16),textPrimary:wn(n.textPrimary,c,i==="dark"?0.08:0.06),textSecondary:wn(n.textSecondary,c,i==="dark"?0.12:0.1),borderColor:wn(n.borderColor,c,0.1),accent:c.hex,accentHover:t?Ai(c,t,0.18):c.hex,warning:wn(n.warning||yn.warning,c,0.14),danger:wn(n.danger,c,0.16),success:wn(n.success,c,0.16)}}function Vl(n,r){let i=jn(n?.warning);if(i)return i.hex;let c=jn(r==="dark"?Pr.warning:yn.warning)||jn(yn.warning),o=jn(n?.accent);if(c&&o)return Ai(c,o,r==="dark"?0.18:0.14);return r==="dark"?Pr.warning:yn.warning}function Al(n,r){if(typeof document>"u")return;let i=document.documentElement,c=n.accent,o=jn(c),t=o?Hr(o,r==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,s=o?Hr(o,r==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",u=o?Hr(o,r==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",_=o?Gl(o):r==="dark"?"#000000":"#ffffff",e=o?Hr(o,r==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",x=Vl(n,r),f={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":c,"--accent-hover":n.accentHover||c,"--accent-color-alpha":e,"--accent-soft":s,"--accent-soft-strong":u,"--accent-contrast-text":_,"--warning-color":x,"--danger-color":n.danger||yn.danger,"--success-color":n.success||yn.success,"--search-highlight-color":t||"rgba(29, 155, 240, 0.2)"};Object.entries(f).forEach(([y,$])=>{if($)i.style.setProperty(y,$)})}function Xl(){if(typeof document>"u")return;let n=document.documentElement;jl.forEach((r)=>n.style.removeProperty(r))}function Zn(n,r={}){if(typeof document>"u")return null;let i=typeof r.id==="string"&&r.id.trim()?r.id.trim():null,c=i?document.getElementById(i):document.querySelector(`meta[name="${n}"]`);if(!c)c=document.createElement("meta"),document.head.appendChild(c);if(c.setAttribute("name",n),i)c.setAttribute("id",i);return c}function No(n){let r=Vi(Un?.theme||"default"),i=Un?.tint?String(Un.tint).trim():null,c=Lo(r,n);if(r==="default"&&i)c=Go(c,i,n);if(c?.bgPrimary)return c.bgPrimary;return n==="dark"?Pr.bgPrimary:yn.bgPrimary}function Cl(n,r){if(typeof document>"u")return;let i=Zn("theme-color",{id:"dynamic-theme-color"});if(i&&n)i.removeAttribute("media"),i.setAttribute("content",n);let c=Zn("theme-color",{id:"theme-color-light"});if(c)c.setAttribute("media","(prefers-color-scheme: light)"),c.setAttribute("content",No("light"));let o=Zn("theme-color",{id:"theme-color-dark"});if(o)o.setAttribute("media","(prefers-color-scheme: dark)"),o.setAttribute("content",No("dark"));let t=Zn("msapplication-TileColor");if(t&&n)t.setAttribute("content",n);let s=Zn("msapplication-navbutton-color");if(s&&n)s.setAttribute("content",n);let u=Zn("apple-mobile-web-app-status-bar-style");if(u)u.setAttribute("content",r==="dark"?"black-translucent":"default")}function Ql(){if(typeof window>"u")return;let n={...Un,mode:jo};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function ql(){if(typeof window>"u")return"web:default";try{let r=new URL(window.location.href).searchParams.get("chat_jid");return r&&r.trim()?r.trim():"web:default"}catch{return"web:default"}}function Dl(n){if(typeof document>"u"||!n)return;let r=document.documentElement;if(r?.style)r.style.background=n;if(document.body?.style)document.body.style.background=n}function Ci(n,r={}){if(typeof window>"u"||typeof document>"u")return;let i=Vi(n?.theme||"default"),c=n?.tint?String(n.tint).trim():null,o=Xi(i),t=Pl(o),s=Lo(i,t);Un={theme:i,tint:c},jo=t;let u=document.documentElement;u.dataset.theme=t,u.dataset.colorTheme=i,u.dataset.tint=c?String(c):"",u.style.colorScheme=t;let _=s;if(i==="default"&&c)_=Go(s,c,t);if(i==="default"&&!c)Xl();else Al(_,t);if(Dl(_.bgPrimary),Cl(_.bgPrimary,t),Ql(),r.persist!==!1)if(tn(Pi,i),c)tn(Gr,c);else tn(Gr,"")}function Lr(){if(Xi(Un.theme).mode!=="auto")return;Ci(Un,{persist:!1})}function Il(){if(typeof window>"u")return;let n=Vi(Dn(Pi)||"default"),r=(()=>{let i=Dn(Gr);return i?i.trim():null})();Ci({theme:n,tint:r},{persist:!1})}function cf(){if(typeof window>"u")return()=>{};if(Il(),window.matchMedia&&!Gi){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Lr);else if(n.addListener)n.addListener(Lr);return Gi=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Lr);else if(n.removeListener)n.removeListener(Lr);Gi=!1}}return()=>{}}function Qi(n){if(!n||typeof n!=="object")return;let r=ql(),i=n.chat_jid||n.chatJid||null,c=n.theme??n.name??n.colorTheme,o=n.tint??null;if(!i||i===r)Ci({theme:c||"default",tint:o},{persist:!1});tn(Pi,c||"default"),tn(Gr,o||"")}function of(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return Ho()}var Pi="piclaw_theme",Gr="piclaw_tint",yn,Pr,Mo,jl,Un,jo="light",Gi=!1;var Po=q(()=>{yn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Pr={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Mo={default:{label:"Default",mode:"auto",light:yn,dark:Pr},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},jl=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],Un={theme:"default",tint:null}});var Ao={};rn(Ao,{ThemeSection:()=>Zl});function Vo(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function Zl({themes:n,colorKeys:r,settingsData:i,setStatus:c,mergeSettingsData:o}){let[t,s]=g("default"),[u,_]=g(""),[e,x]=g(!1),f=Q(""),y=Q(null),$=Q(!0);L(()=>{return $.current=!0,()=>{$.current=!1}},[]);let v=F((M)=>{let k=Vo(M);s(k.uiTheme),_(k.uiTint),f.current=JSON.stringify(k)},[]);L(()=>{if(i){v(i);return}v({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[i,v]);let z=F((M,k)=>{Qi({theme:M,tint:k||null}),s(M||"default"),_(k||"")},[]),w=C(()=>JSON.stringify(Vo({uiTheme:t,uiTint:u})),[t,u]);L(()=>{if(w===f.current)return;if(y.current)clearTimeout(y.current);return y.current=setTimeout(async()=>{if(!$.current)return;x(!0);try{let M=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:w}),k=await M.json().catch(()=>({}));if(!$.current)return;if(!M.ok||!k?.ok||!k?.settings){c?.(k?.error||"Failed to save appearance settings.","error");return}f.current=w,o?.(k.settings),c?.("Appearance synced across clients.","success")}catch(M){if(!$.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",M),c?.("Failed to save appearance settings.","error")}finally{if($.current)x(!1)}},250),()=>{if(y.current)clearTimeout(y.current)}},[w,o,c]);let d=r||[],R=n||[];return l`
        <div class="settings-section">
            ${e&&l`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${t==="default"}
                        onChange=${()=>z("default",u)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${u||"#1d9bf0"}
                        onInput=${(M)=>{let k=M.target.value;if(_(k),t==="default")Qi({theme:"default",tint:k})}} />
                    ${u&&l`
                        <button class="settings-tint-clear" onClick=${()=>z("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${u||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${d.map((M)=>l`<th class="settings-swatch-header">${M.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${R.filter((M)=>M.name!=="default").map((M)=>l`
                        <tr class=${M.name===t?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>z(M.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${M.name===t} onChange=${()=>z(M.name,"")} /></td>
                            <td><strong>${M.label}</strong></td>
                            <td>${M.mode}</td>
                            ${d.map((k)=>{let W=M.colors?.[k];return l`<td class="settings-swatch-cell">
                                    ${W?l`<span class="settings-color-swatch" style=${"background:"+W} title=${W}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var Xo=q(()=>{E();Po()});var Qo={};rn(Qo,{__scheduledTasksSettingsTest:()=>al,ScheduledTasksSection:()=>Sl});function Hn(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Co(n){let r=Number(n);if(!Number.isFinite(r))return"—";if(r<1000)return`${Math.round(r)}ms`;return`${(r/1000).toFixed(r<1e4?1:0)}s`}function qi(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${Hn(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function Di(n){let r=n?.task_kind||"agent";return r==="internal"?"internal/protected":r}function Ii(n){return(n?.task_kind||"agent")==="internal"}function Ol(n){if(!n)return"";let r=String(n).replace(/\s+/g," ").trim();return r.length>180?`${r.slice(0,179)}…`:r}function Yn({children:n,type:r="neutral"}){return l`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function Jl({task:n}){let r=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!r.length)return l`<p class="settings-hint">No run logs recorded yet.</p>`;return l`
        <div class="settings-task-run-list">
            ${r.map((i)=>l`
                <div class=${`settings-task-run-row settings-task-run-${i.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${Yn} type=${i.status==="error"?"error":"success"}>${i.status||"unknown"}<//>
                        <span>${Hn(i.run_at)}</span>
                        <span>${Co(i.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${i.error_summary||Ol(i.error)||i.result_summary||i.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function El({task:n,onAction:r}){if(!n)return l`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let i=Ii(n);return l`
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
                <span>Kind</span><strong>${Di(n)}</strong>
                <span>Schedule</span><strong>${qi(n)}</strong>
                <span>Next run</span><strong>${Hn(n.next_run)}</strong>
                <span>Last run</span><strong>${Hn(n.last_run)}</strong>
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
            <${Jl} task=${n} />
        </div>
    `}function Sl({filter:n="",setStatus:r}){let[i,c]=g([]),[o,t]=g({active:0,paused:0,completed:0}),[s,u]=g("all"),[_,e]=g(""),[x,f]=g(!0),[y,$]=g(null),[v,z]=g(null),[w,d]=g(null),[R,M]=g(!1),k=F(async(p={})=>{f(!0),$(null);try{let K=await ui({status:s,chatJid:_.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});c(K.tasks||[]),t(K.counts||{active:0,paused:0,completed:0});let U=p.selectedId||v,b=(K.tasks||[]).find((N)=>N.id===U)||(K.tasks||[])[0]||null;z(b?.id||null),d(b)}catch(K){$(K?.message||"Failed to load scheduled tasks.")}finally{f(!1)}},[s,_,v]);L(()=>{k()},[k]);let W=String(n||"").trim().toLowerCase(),h=C(()=>{if(!W)return i;return i.filter((p)=>[p.id,p.chat_jid,p.status,p.task_kind,p.schedule_type,p.schedule_value,p.summary,p.prompt_summary,p.command_summary,p.latest_run_log?.error_summary].some((K)=>String(K||"").toLowerCase().includes(W)))},[i,W]),B=F((p)=>{z(p?.id||null),d(p||null)},[]),G=F(async(p,K)=>{if(!K||R)return;let U=Ii(K),b=K.summary||K.command_summary||K.prompt_summary||K.id,N=p==="delete"?`Delete scheduled task ${K.id}?

${b}`:`${p==="pause"?"Pause":"Resume"} scheduled task ${K.id}?

${b}`;if(!window.confirm(N))return;if(U&&!window.confirm(`Task ${K.id} is internal/protected. Continue with ${p}?`))return;M(!0),r?.(`${p==="delete"?"Deleting":p==="pause"?"Pausing":"Resuming"} ${K.id}…`,"info");try{await _i(p,K.id,{allowInternal:U}),r?.(`Scheduled task ${K.id} ${p==="delete"?"deleted":p==="pause"?"paused":"resumed"}.`,"success"),await k({selectedId:p==="delete"?null:K.id})}catch(P){r?.(P?.message||`Failed to ${p} task.`,"error")}finally{M(!1)}},[R,k,r]);return l`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${Yn} type="active">Active ${o.active||0}<//>
                    <${Yn} type="paused">Paused ${o.paused||0}<//>
                    <${Yn} type="completed">Completed ${o.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${s} onChange=${(p)=>u(p.target.value)}>
                        ${Yl.map((p)=>l`<option value=${p}>${p==="all"?"All statuses":p}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${_} onInput=${(p)=>e(p.target.value)} />
                    <button onClick=${()=>k()} disabled=${x}>Refresh</button>
                </div>
            </div>

            ${x&&l`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${y&&l`<div class="settings-error-state">${y}</div>`}
            ${!x&&!y&&i.length===0&&l`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/i`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!x&&!y&&i.length>0&&l`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${h.map((p)=>l`
                            <button class=${`settings-task-row ${p.id===v?"active":""}`} onClick=${()=>B(p)}>
                                <span class="settings-task-row-main">
                                    <strong>${p.summary||p.id}</strong>
                                    <span>${qi(p)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${Yn} type=${p.status||"neutral"}>${p.status}<//>
                                    <${Yn}>${Di(p)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${Hn(p.next_run)} · Last ${Hn(p.last_run)}${p.latest_run_log?.status?` · ${p.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${h.length===0&&l`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${El} task=${w&&h.some((p)=>p.id===w.id)?w:h[0]} onAction=${G} />
                </div>
            `}
        </div>
    `}var Yl,al;var qo=q(()=>{E();$n();Yl=["all","active","paused","completed"];al={formatDateTime:Hn,formatDuration:Co,labelForSchedule:qi,kindLabel:Di,isProtectedTask:Ii}});function Do(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function On(n){return typeof n==="string"&&n.trim().length>0}function Zi(n,...r){let i=Do(n);if(!i)return!0;let c=r.map((o)=>Do(o)).filter(Boolean);for(let o of c)if(o.startsWith(i)||o.includes(i))return!0;return!1}function Io(n){if(!Array.isArray(n))return null;let r=[],i=new Set;for(let c of n){let o=String(c||"").trim();if(!o)continue;let t=o.toLowerCase();if(i.has(t))continue;i.add(t),r.push(o)}return r}function ur(n){let r=n&&typeof n==="object"?n:{};return{workspaceCommands:Io(r.workspaceCommands),slashCommands:Io(r.slashCommands)}}function Zo(n,r){if(!Array.isArray(n))return!0;return n.some((i)=>i.toLowerCase()===r.toLowerCase())}function ml(n){let r=Array.isArray(n?.commands)?n.commands:[],i=ur(n?.settings),c=String(n?.query||"");return r.filter((o)=>Zo(i.workspaceCommands,o.id)).filter((o)=>Zi(c,o.label,o.description,...o.keywords||[])).map((o)=>({key:`workspace:${o.id}`,kind:"workspace",title:o.label,subtitle:o.description,searchText:`${o.label} ${o.description} ${(o.keywords||[]).join(" ")}`.trim(),visualHint:o.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:o.id}))}function nu(n){let r=Array.isArray(n?.agents)?n.agents:[],i=String(n?.query||""),c=new Set;return r.filter((o)=>{let t=On(o?.chat_jid)?o.chat_jid.trim():"";if(!t||c.has(t))return!1;if(o?.archived_at)return!1;return c.add(t),!0}).filter((o)=>Zi(i,`@${String(o?.agent_name||"").trim()}`,o?.session_name,o?.chat_jid)).map((o)=>{let t=On(o?.agent_name)?o.agent_name.trim():String(o?.chat_jid||"").replace(/^[^:]+:/,""),s=On(o?.session_name)?o.session_name.trim():"",u=String(o?.chat_jid||"").trim();return{key:`agent:${u}`,kind:"agent",title:`@${t}`,subtitle:s||u,searchText:`@${t} ${s} ${u}`.trim(),visualHint:t.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:u}})}function ru(n){let r=Array.isArray(n?.slashCommands)?n.slashCommands:[],i=ur(n?.settings),c=String(n?.query||""),o=new Set;return r.filter((t)=>{let s=On(t?.name)?t.name.trim():"";if(!s||o.has(s.toLowerCase()))return!1;return o.add(s.toLowerCase()),Zo(i.slashCommands,s)}).filter((t)=>Zi(c,t?.name,t?.description,t?.source)).map((t)=>{let s=String(t?.name||"").trim(),u=On(t?.description)?t.description.trim():"slash command",_=On(t?.source)?t.source.trim():"";return{key:`slash:${s}`,kind:"slash",title:s,subtitle:u,searchText:`${s} ${u} ${String(t?.source||"")}`.trim(),visualHint:"/",categoryLabel:_||"Slash",actionHint:"Insert",commandName:s}})}function ff(n){return[...nu({agents:n?.agents,query:n?.query}),...ml({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...ru({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var Jn;var Yo=q(()=>{Jn=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var Eo={};rn(Eo,{QuickActionsSection:()=>iu});function Oo(n,...r){let i=String(n||"").trim().toLowerCase();if(!i)return!0;return r.some((c)=>String(c||"").toLowerCase().includes(i))}function Jo(n){if(!Array.isArray(n))return null;return new Set(n.map((r)=>String(r||"").trim().toLowerCase()).filter(Boolean))}function iu({filter:n="",setStatus:r,mergeSettingsData:i}){let[c,o]=g(()=>Jn.map((h)=>h.id)),[t,s]=g([]),[u,_]=g([]),[e,x]=g(!0),[f,y]=g(!1),$=F(async()=>{x(!0);try{let[h,B]=await Promise.all([xi(),yi("web:default").catch(()=>({commands:[]}))]),G=ur(h?.settings),p=Array.isArray(B?.commands)?B.commands:[];_(p),o(Array.isArray(G.workspaceCommands)?G.workspaceCommands:Jn.map((K)=>K.id)),s(Array.isArray(G.slashCommands)?G.slashCommands:p.map((K)=>String(K?.name||"").trim()).filter(Boolean))}catch(h){r?.(String(h?.message||h),"error")}finally{x(!1)}},[r]);L(()=>{$()},[$]);let v=C(()=>Jo(c),[c]),z=C(()=>Jo(t),[t]),w=C(()=>Jn.filter((h)=>Oo(n,h.label,h.description,...h.keywords||[])),[n]),d=C(()=>u.filter((h)=>Oo(n,h?.name,h?.description,h?.source)),[u,n]),R=F((h)=>{o((B)=>{let G=new Set((Array.isArray(B)?B:[]).map((p)=>String(p||"").trim()).filter(Boolean));if(G.has(h))G.delete(h);else G.add(h);return Jn.map((p)=>p.id).filter((p)=>G.has(p))})},[]),M=F((h)=>{s((B)=>{let G=new Set((Array.isArray(B)?B:[]).map((p)=>String(p||"").trim()).filter(Boolean));if(G.has(h))G.delete(h);else G.add(h);return u.map((p)=>String(p?.name||"").trim()).filter((p)=>p&&G.has(p))})},[u]),k=F(()=>{o(Jn.map((h)=>h.id)),s(u.map((h)=>String(h?.name||"").trim()).filter(Boolean))},[u]),W=F(async()=>{if(f)return;y(!0),r?.("Saving quick actions…","info");try{let h=await bi({workspaceCommands:c,slashCommands:t}),B=ur(h?.settings);i?.({quickActions:B}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:B}})),r?.("Quick Actions saved.","success")}catch(h){r?.(String(h?.message||h),"error")}finally{y(!1)}},[i,f,r,t,c]);if(e)return l`<div class="settings-loading">Loading…</div>`;return l`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${k} disabled=${f}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${W} disabled=${f}>
                    ${f?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${w.map((h)=>{let B=v?v.has(h.id.toLowerCase()):!0;return l`
                        <label class="settings-checkbox-row" key=${h.id}>
                            <input type="checkbox" checked=${B} onChange=${()=>R(h.id)} />
                            <div>
                                <div>${h.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${h.description}</div>
                            </div>
                        </label>
                    `})}
                ${w.length===0&&l`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${d.map((h)=>{let B=String(h?.name||"").trim(),G=z?z.has(B.toLowerCase()):!0;return l`
                        <label class="settings-checkbox-row" key=${B}>
                            <input type="checkbox" checked=${G} onChange=${()=>M(B)} />
                            <div>
                                <div><code>${B}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${h?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${d.length===0&&l`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var So=q(()=>{E();$n();Yo()});var ao={};rn(ao,{KeychainSection:()=>tu});function cu(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function tu({filter:n=""}){let[r,i]=g([]),[c,o]=g(!0),[t,s]=g(null),[u,_]=g(!1),[e,x]=g(""),[f,y]=g(""),[$,v]=g(""),[z,w]=g(""),[d,R]=g(""),[M,k]=g("secret"),[W,h]=g(!1),[B,G]=g({}),[p,K]=g(null),[U,b]=g(null),[N,P]=g(null),V=Q(null),A=Q(null),m=Q(null),on=F(async()=>{o(!0),s(null);try{let X=await(await fetch("/agent/keychain")).json();if(X?.ok)i(X.entries||[]);else s(X?.error||"Failed to load keychain.")}catch(T){s("Failed to load keychain.")}finally{o(!1)}},[]);L(()=>{on()},[on]);let Bn=F(async()=>{let T=e.trim(),X=f;if(!T||!X)return;h(!0);try{let sn=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T,secret:X,type:M,username:$.trim()||void 0,userNote:z,agentNote:d})})).json();if(sn?.ok)x(""),y(""),v(""),w(""),R(""),k("secret"),_(!1),await on();else s(sn?.error||"Failed to add entry.")}catch{s("Failed to add entry.")}finally{h(!1)}},[e,f,$,z,d,M,on]),Ln=F(async(T)=>{try{let nn=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T})})).json();if(nn?.ok)b(null),P((sn)=>sn?.name===T?null:sn),await on();else s(nn?.error||"Failed to delete entry.")}catch{s("Failed to delete entry.")}},[on]),Gn=F(async(T)=>{let X=T?.name;if(!X)return;let nn=B[X]||{},sn=Object.prototype.hasOwnProperty.call(nn,"userNote")?nn.userNote:T.userNote||"",un=Object.prototype.hasOwnProperty.call(nn,"agentNote")?nn.agentNote:T.agentNote||"";K(X);try{let Fn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X,userNote:sn,agentNote:un})})).json();if(Fn?.ok)G((gr)=>{let Sn={...gr||{}};return delete Sn[X],Sn}),await on();else s(Fn?.error||"Failed to save notes.")}catch{s("Failed to save notes.")}finally{K(null)}},[B,on]),I=F((T,X,nn)=>{G((sn)=>({...sn||{},[T]:{...(sn||{})[T]||{},[X]:nn}}))},[]),D=F(async(T,X,nn)=>{try{let un=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T,master_password:X||void 0,totp_code:nn||void 0})})).json();if(un?.ok)P({name:T,phase:"revealed",secret:un.secret,username:un.username,masterPassword:X});else if(un?.needs_master_password)P((en)=>({name:T,phase:"password",masterPassword:"",error:en?.name===T&&en?.masterPassword?un.error:null})),requestAnimationFrame(()=>A.current?.focus());else if(un?.needs_totp)P((en)=>({name:T,phase:"totp",masterPassword:X,totpCode:"",error:en?.name===T&&en?.phase==="totp"&&en?.totpCode?un.error:null})),requestAnimationFrame(()=>m.current?.focus());else P({name:T,phase:"error",error:un?.error||"Failed to reveal."})}catch{P({name:T,phase:"error",error:"Failed to reveal."})}},[]),Tn=F((T)=>{if(N?.name===T&&N?.phase==="revealed"){P(null);return}D(T,null,null)},[N,D]),er=F((T)=>{let X=N?.masterPassword||"";if(!X)return;D(T,X,null)},[N,D]),j=F((T)=>{let X=N?.totpCode||"";if(X.length<6)return;D(T,N?.masterPassword,X)},[N,D]),O=F(async(T)=>{try{await navigator.clipboard.writeText(T)}catch{let X=document.createElement("textarea");X.value=T,X.style.position="fixed",X.style.opacity="0",document.body.appendChild(X),X.select(),document.execCommand("copy"),document.body.removeChild(X)}},[]);L(()=>{if(u)requestAnimationFrame(()=>V.current?.focus())},[u]);let cn=n.toLowerCase(),xn=C(()=>{if(!cn)return r;return r.filter((T)=>T.name.toLowerCase().includes(cn)||(T.type||"").toLowerCase().includes(cn)||(T.envVar||"").toLowerCase().includes(cn)||(T.userNote||"").toLowerCase().includes(cn)||(T.agentNote||"").toLowerCase().includes(cn))},[r,cn]);if(c)return l`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return l`
        <div class="settings-section">
            ${t&&l`
                <div class="settings-keychain-error" role="alert">
                    ${t}
                    <button class="settings-keychain-dismiss" onClick=${()=>s(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${xn.length} entr${xn.length===1?"y":"ies"}${cn?` matching "${n}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>_(!u)}>
                    ${u?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${u&&l`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${V} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${e} onInput=${(T)=>x(T.target.value)}
                            class="settings-keychain-input" />
                        <select value=${M} onChange=${(T)=>k(T.target.value)}
                            class="settings-keychain-select">
                            ${ou.map((T)=>l`<option value=${T}>${T}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${f} onInput=${(T)=>y(T.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${$} onInput=${(T)=>v(T.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${Bn}
                            disabled=${W||!e.trim()||!f}>
                            ${W?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${z} onInput=${(T)=>w(T.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${d} onInput=${(T)=>R(T.target.value)}
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
                        ${xn.length===0&&l`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${cn?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${xn.map((T)=>{let X=N?.name===T.name?N:null,nn=X?.phase==="revealed",sn=X?.phase==="password",un=X?.phase==="totp",en=X?.phase==="error",Fn=B[T.name]||{},gr=Object.prototype.hasOwnProperty.call(Fn,"userNote")?Fn.userNote:T.userNote||"",Sn=Object.prototype.hasOwnProperty.call(Fn,"agentNote")?Fn.agentNote:T.agentNote||"",yt=gr!==(T.userNote||"")||Sn!==(T.agentNote||""),ai=p===T.name;return l`
                            <tr class="settings-keychain-row" key=${T.name}>
                                <td class="settings-keychain-name">${T.name}</td>
                                <td><span class="settings-keychain-type-badge">${T.type}</span></td>
                                <td class="settings-keychain-env">${T.envVar?l`<code>$${T.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${cu(T.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${nn?" active":""}`}
                                        onClick=${()=>Tn(T.name)}
                                        title=${nn?"Hide secret":"Reveal secret"}>
                                        ${nn?l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:l`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${U===T.name?l`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>Ln(T.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>b(null)}>No</button>
                                            </span>
                                        `:l`<button class="settings-keychain-delete-btn" onClick=${()=>b(T.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${T.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${gr}
                                                onInput=${(ln)=>I(T.name,"userNote",ln.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${Sn}
                                                onInput=${(ln)=>I(T.name,"agentNote",ln.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!yt||ai} onClick=${()=>Gn(T)}>
                                            ${ai?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${sn&&l`
                                <tr class="settings-keychain-prompt-row" key=${T.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${A} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${X?.masterPassword||""}
                                                onInput=${(ln)=>P((qr)=>({...qr,masterPassword:ln.target.value}))}
                                                onKeyDown=${(ln)=>{if(ln.key==="Enter")er(T.name);if(ln.key==="Escape")P(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>er(T.name)}
                                                disabled=${!X?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>P(null)}>Cancel</button>
                                            ${X?.error&&l`<span class="settings-keychain-prompt-error">${X.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${un&&l`
                                <tr class="settings-keychain-prompt-row" key=${T.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${m} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${X?.totpCode||""}
                                                onInput=${(ln)=>P((qr)=>({...qr,totpCode:ln.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(ln)=>{if(ln.key==="Enter")j(T.name);if(ln.key==="Escape")P(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>j(T.name)}
                                                disabled=${(X?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>P(null)}>Cancel</button>
                                            ${X?.error&&l`<span class="settings-keychain-prompt-error">${X.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${nn&&l`
                                <tr class="settings-keychain-reveal-row" key=${T.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${X.username&&l`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${X.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>O(X.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${X.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>O(X.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${en&&l`
                                <tr class="settings-keychain-reveal-row" key=${T.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${X.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var ou;var mo=q(()=>{E();ou=["secret","token","password","basic"]});var nt={};rn(nt,{ToolsSection:()=>fu});function fu({toolsets:n,filter:r="",settingsData:i,mergeSettingsData:c}){let o=n||[],[t,s]=g(()=>{let y={};for(let $ of o)y[$.name]=!0;return y}),u=F((y)=>{s(($)=>({...$,[y]:!$[y]}))},[]),_=i?.searchMatchMode||"or",e=F(async()=>{let y=_==="or"?"and":"or";try{let v=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:y})})).json().catch(()=>({}));if(v?.ok&&v?.settings)c?.(v.settings)}catch($){console.warn("[settings/tools] Failed to save search match mode.",$)}},[_,c]),x=r.toLowerCase(),f=C(()=>{if(!x)return o;return o.map((y)=>{let $=y.tools.filter((v)=>v.name.toLowerCase().includes(x)||y.name.toLowerCase().includes(x)||(v.summary||"").toLowerCase().includes(x));return $.length>0?{...y,tools:$}:null}).filter(Boolean)},[o,x]);if(o.length===0)return l`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return l`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${_==="and"} onChange=${e} />
                        <span class="settings-hint" style="margin:0">
                            ${_==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${f.map((y)=>{let $=t[y.name]!==!1;return l`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${$} onChange=${()=>u(y.name)} />
                            <span class="settings-toolset-icon">${su[y.name]||_u}</span>
                            <strong>${y.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${y.description}</span>
                    </div>
                    ${$&&l`<div class="settings-tool-list">${y.tools.map((v)=>l`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${v.name}</span>
                            <span class="settings-tool-kind" title=${v.kind}>${uu[v.kind]||"?"}</span>
                            ${v.summary&&l`<span class="settings-tool-summary">${v.summary}</span>`}
                            <span class="settings-tool-source">${lu[v.name]||y.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${f.length===0&&l`<p class="settings-hint">No tools match "${r}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var su,lu,uu,_u;var rt=q(()=>{E();su={core:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},lu={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},uu={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},_u=l`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var it={};rn(it,{AddonsSection:()=>eu});function eu({setStatus:n,filter:r=""}){let[i,c]=g(null),[o,t]=g(!0),[s,u]=g(null),[_,e]=g(!1),[x,f]=g({runtime:"",windowsNative:!1}),[y,$]=g([]),[v,z]=g([]);function w(){let p=new URLSearchParams;try{let U=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),b=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((P)=>P.trim()).filter(Boolean),N=localStorage.getItem("piclaw_addons_repo_url");if(U)p.append("catalog_url",U);for(let P of b)p.append("catalog_url",P);if(N)p.set("repo_url",N)}catch(U){}let K=p.toString();return K?`?${K}`:""}let d=F(async()=>{try{let[p,K]=await Promise.all([fetch(`/agent/addons${w()}`),fetch("/agent/settings-data")]),U=await p.json();if(U.error)throw Error(U.error);c(U.addons||[]),$(U.sources||[]),z(U.failed_sources||[]);let b=await K.json().catch(()=>({})),N=typeof b?.runtimePlatform==="string"?b.runtimePlatform:"";f({runtime:N,windowsNative:N==="win32"})}catch(p){c(null),n?.(String(p.message||p),"error")}finally{t(!1)}},[n]);L(()=>{d()},[]);let R=F(async(p)=>{if(s)return;u({slug:p,action:"install"}),n?.(`Installing ${p}…`,"info");try{let U=await(await fetch(`/agent/addons/install${w()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:p})})).json();if(U.error){n?.(U.error,"error");return}e(!0);let b=[U.message,U.warning].filter(Boolean).join(" ");n?.(b||"Add-on installed.","success"),await d()}catch(K){n?.(String(K.message||K),"error")}finally{u(null)}},[s,d,n]),M=F(async(p)=>{if(s)return;u({slug:p,action:"remove"}),n?.(`Removing ${p}…`,"info");try{let U=await(await fetch(`/agent/addons/uninstall${w()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:p})})).json();if(U.error){n?.(U.error,"error");return}e(!0);let b=[U.message,U.warning].filter(Boolean).join(" ");n?.(b||"Add-on removed.","success"),await d()}catch(K){n?.(String(K.message||K),"error")}finally{u(null)}},[s,d,n]),k=F(async()=>{if(s)return;u({slug:null,action:"restart"}),n?.("Restarting piclaw…","info");try{let K=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(K.error){n?.(K.error,"error"),u(null);return}n?.(K.message||"Restarting piclaw…","success"),e(!1),(async(b=30,N=2000)=>{for(let P=0;P<b;P++){await new Promise((V)=>setTimeout(V,N));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await d(),u(null),n?.("Restart complete — add-ons refreshed.","success");return}}catch(V){}}u(null),n?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(p){n?.(String(p.message||p),"error"),u(null)}},[s,n,d]);if(o)return l`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!i)return l`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let W=r.toLowerCase(),h=W?i.filter((p)=>p.slug.toLowerCase().includes(W)||(p.description||"").toLowerCase().includes(W)||(p.tags||[]).some((K)=>K.toLowerCase().includes(W))):i,B=s?.slug||null,G=s?s.action==="remove"?`Removing ${s.slug}…`:s.action==="restart"?"Restarting piclaw…":`Installing ${s.slug}…`:"";return l`
        <div class=${`settings-section settings-addon-panel${s?" busy":""}`} aria-busy=${s?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${y.length<=1?l`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:l`${y.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${v.length>0&&l`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${v.length} catalog source${v.length>1?"s":""}:
                            ${v.map((p)=>l` <code style="font-size:0.82em;word-break:break-all">${p}</code>`)}
                        </div>
                    `}
                    ${y.length>1&&l`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${y.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${y.map((p)=>l`<li style="word-break:break-all"><code>${p}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${x.windowsNative&&l`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            <div class="settings-addon-list">
                ${s&&l`
                    <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${G}>
                        <div class="settings-addon-panel-overlay-card">
                            <div class="settings-spinner"></div>
                            <span>${G}</span>
                        </div>
                    </div>
                `}
                ${h.map((p)=>{let K=(p.skills||[]).length>0,U=p.type==="extension",b=K&&U?"extension + skill":K?"skill":"extension",N=K&&!U?"settings-tag-skill":"",P=typeof p.homepage==="string"&&p.homepage.trim()?p.homepage.trim():"";return l`
                    <div class=${`settings-addon-card${p.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${P?l`<a class="settings-addon-name-link" href=${P} target="_blank" rel="noopener noreferrer">${p.slug}</a>`:l`<strong>${p.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${N}`}>${b}</span>
                            <span class="settings-addon-version">${p.installed?p.installedVersion||"?":p.version||""}</span>
                            ${p.installKind&&l`<span class="settings-tag">${p.installKind}</span>`}
                            ${p.hasUpdate&&l`<span class="settings-tag settings-tag-skill">\u2191 ${p.version}</span>`}
                            <div class="settings-addon-actions">
                                ${p.installed?l`
                                    ${p.hasUpdate&&l`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(s)} onClick=${()=>R(p.slug)}>${B===p.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(s)} onClick=${()=>M(p.slug)}>${B===p.slug?"…":"Remove"}</button>
                                `:l`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(s)} onClick=${()=>R(p.slug)}>${B===p.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${p.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(p.tags||[]).map((V)=>l`<span class="settings-tag">${V}</span>`)}${(p.skills||[]).map((V)=>l`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${V}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${h.length===0&&l`<p class="settings-hint">No add-ons match "${r}"</p>`}
            </div>
            ${_&&l`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(s)} onClick=${k}>Restart Now</button>
                </div>
            `}
        </div>
    `}var ct=q(()=>{E()});var xu={};function Yi(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function Vr(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function gu(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function pu(n,r){try{localStorage.setItem(n,r)}catch(i){}}function $u(n,r,i,c){try{return hn(localStorage.getItem(n),{fallback:r,min:i,max:c})}catch{return hn(r,{fallback:r,min:i,max:c})}}function hu(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function wu(){let[n,r]=g(()=>Yi("piclaw_vim_mode",!1)),[i,c]=g(()=>Yi("piclaw_show_whitespace",!0)),[o,t]=g(()=>Yi("piclaw_md_live_preview",!0)),[s,u]=g(()=>$u("piclaw_editor_font_size",13,10,24)),[_,e]=g(()=>gu("piclaw_editor_font_family","")),x=F((f,y,$)=>{let v=!y;$(v),Vr(f,v)},[]);return l`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${n}
                    onChange=${()=>{let f=!n;r(f),Vr("piclaw_vim_mode",f)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${i}
                    onChange=${()=>{let f=!i;c(f),Vr("piclaw_show_whitespace",f)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${o}
                    onChange=${()=>{let f=!o;t(f),Vr("piclaw_md_live_preview",f)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${S}
                    label="editor font size"
                    value=${s}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(f)=>{u(f),hu("piclaw_editor_font_size",f)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${_}
                    onInput=${(f)=>{let y=f.target.value;e(y),pu("piclaw_editor_font_family",y)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var yu;var ot=q(()=>{E();Cn();Nn();yu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;dn({id:"editor",label:"Editor",icon:yu,component:wu,order:150})});var Bu={};function tt(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function st(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function bu(n,r,i,c){try{return hn(localStorage.getItem(n),{fallback:r,min:i,max:c})}catch{return hn(r,{fallback:r,min:i,max:c})}}function vu(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function du(){let[n,r]=g(()=>tt("piclaw_mindmap_auto_expand",!0)),[i,c]=g(()=>bu("piclaw_mindmap_node_spacing",40,20,100)),[o,t]=g(()=>tt("piclaw_mindmap_animate",!0));return l`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${n}
                    onChange=${()=>{let s=!n;r(s),st("piclaw_mindmap_auto_expand",s)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${S}
                    label="node spacing"
                    value=${i}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(s)=>{c(s),vu("piclaw_mindmap_node_spacing",s)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${o}
                    onChange=${()=>{let s=!o;t(s),st("piclaw_mindmap_animate",s)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var ku;var lt=q(()=>{E();Cn();Nn();ku=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;dn({id:"mindmap",label:"Mind Map",icon:ku,component:du,order:170})});var zu={};function Oi(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function Ji(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function Ei(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function Si(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Tu(){let[n,r]=g(()=>Oi("piclaw_dev_mode",!1)),[i,c]=g(()=>Ei("piclaw_addons_catalog_url","")),[o,t]=g(()=>Ei("piclaw_addons_catalog_urls","")),[s,u]=g(()=>Ei("piclaw_addons_repo_url","")),[_,e]=g(()=>Oi("piclaw_debug_sse",!1)),[x,f]=g(()=>Oi("piclaw_debug_tool_calls",!1)),y=F(()=>{let $=!n;r($),Ji("piclaw_dev_mode",$)},[n]);return l`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${n} onChange=${y} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${n&&l`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${i}
                        onInput=${($)=>{let v=$.target.value;c(v),Si("piclaw_addons_catalog_url",v)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${o}
                        onInput=${($)=>{let v=$.target.value;t(v),Si("piclaw_addons_catalog_urls",v)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${s}
                        onInput=${($)=>{let v=$.target.value;u(v),Si("piclaw_addons_repo_url",v)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${_}
                        onChange=${()=>{let $=!_;e($),Ji("piclaw_debug_sse",$)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${x}
                        onChange=${()=>{let $=!x;f($),Ji("piclaw_debug_tool_calls",$)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var Fu;var ut=q(()=>{E();Cn();Fu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;dn({id:"developer",label:"Developer",icon:Fu,component:Tu,order:900})});var Ou={};rn(Ou,{openSettingsDialog:()=>Yu,SettingsDialogContent:()=>Qr,SettingsDialog:()=>Zu});function fr(n){_r.push({ts:performance.now(),label:n})}function Ku(){if(!_r.length)return;let n=_r[0].ts,r=_r.map((i)=>`+${(i.ts-n).toFixed(1)}ms ${i.label}`);console.info(`[settings-dialog perf]
`+r.join(`
`));try{window.__piclawSettingsPerfLog=r}catch(i){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:r})}).catch((i)=>{})}catch(i){}_r.length=0}function Mu(n){let r=Cr.get(n);if(r)return Promise.resolve(r);let i=Ar.get(n);if(i)return i;let c=Wu[n]().then((o)=>{return Cr.set(n,o),Ar.delete(n),o}).catch((o)=>{throw Ar.delete(n),o});return Ar.set(n,c),c}function Xr(n="Loading…"){return l`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function Qr({onClose:n}){fr("SettingsDialogContent-render-start");let[r,i]=g(()=>oi()||"general"),[c,o]=g(_t),[t,s]=g(null),[u,_]=g(""),[,e]=g(0),[x,f]=g(()=>Object.fromEntries(Cr.entries())),[y,$]=g(null),[v,z]=g({compact:!1,narrow:!1}),w=Q(null),d=Q(null);L(()=>{fr("SettingsDialogContent-mounted"),Ku()},[]),L(()=>{let b=(N)=>{if(N.key==="Escape")n()};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[n]),L(()=>{let b=(N)=>{let P=typeof N?.detail?.section==="string"?N.detail.section.trim():"";if(P)i(P),_("")};return window.addEventListener("piclaw:open-settings",b),()=>window.removeEventListener("piclaw:open-settings",b)},[]),L(()=>{let b=()=>e((N)=>N+1);return window.addEventListener("piclaw:settings-panes-changed",b),()=>window.removeEventListener("piclaw:settings-panes-changed",b)},[]),L(()=>{fetch("/agent/settings-data").then((b)=>b.json()).then((b)=>{_t=b,o(b)}).catch(()=>o({}))},[]),L(()=>{let b=d.current;if(!b)return;let N=()=>{let P=b.clientWidth||0;z((V)=>{let A={compact:P>0&&P<=860,narrow:P>0&&P<=720};return V.compact===A.compact&&V.narrow===A.narrow?V:A})};if(N(),typeof ResizeObserver==="function"){let P=new ResizeObserver(()=>N());return P.observe(b),()=>P.disconnect()}return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]);let R=[...et].sort((b,N)=>(b.order??500)-(N.order??500)),k=Wc().map((b)=>({id:b.id,label:b.label,icon:b.icon,searchable:b.searchable||!1,placeholder:b.searchPlaceholder,order:b.order??500,isExtension:!0,component:b.component})).sort(ci),W=[...R,...k],h=W.find((b)=>b.id===r)||et.find((b)=>b.id===r);L(()=>{if(h?.searchable)requestAnimationFrame(()=>w.current?.focus())},[r]),L(()=>{if(h?.isExtension){$(null);return}let b=!1;if(x[r]){$(null);return}return $(r),Mu(r).then((N)=>{if(b)return;f((P)=>P?.[r]?P:{...P||{},[r]:N})}).catch((N)=>{if(b)return;console.error(`[settings-dialog] Failed to lazy-load section "${r}".`,N)}).finally(()=>{if(!b)$((N)=>N===r?null:N)}),()=>{b=!0}},[r,h?.isExtension,x]);let B=F((b,N="info")=>{s(b?{text:b,type:N}:null)},[]),G=F((b)=>{i(b),_("");let N=Ru[b];if(N&&!ft.has(b))ft.add(b),N().then(()=>e((P)=>P+1)).catch((P)=>{})},[]),p=F((b)=>{o((N)=>({...N||{},...b||{}}))},[]),K=()=>{if(h?.isExtension){if(!h.component)return Xr("Loading pane…");let N=h.component;return l`<${N} filter=${u} />`}let b=x[r];if(!b||y===r)return Xr(`Loading ${h?.label||"settings"}…`);switch(r){case"general":return l`<${b} settingsData=${c} setStatus=${B} mergeSettingsData=${p} />`;case"sessions":return l`<${b} settingsData=${c} setStatus=${B} mergeSettingsData=${p} />`;case"recordings":return l`<${b} filter=${u} setStatus=${B} />`;case"compaction":return l`<${b} settingsData=${c} setStatus=${B} mergeSettingsData=${p} />`;case"keyboard":return l`<${b} filter=${u} setStatus=${B} />`;case"workspace":return l`<${b} settingsData=${c} setStatus=${B} mergeSettingsData=${p} />`;case"environment":return l`<${b} settingsData=${c} filter=${u} setStatus=${B} mergeSettingsData=${p} />`;case"providers":return l`<${b} providers=${c?.providers} setStatus=${B} />`;case"models":return l`<${b} filter=${u} />`;case"theme":return l`<${b} themes=${c?.themes} colorKeys=${c?.colorKeys} settingsData=${c} setStatus=${B} mergeSettingsData=${p} />`;case"scheduled-tasks":return l`<${b} filter=${u} setStatus=${B} />`;case"quick-actions":return l`<${b} filter=${u} setStatus=${B} mergeSettingsData=${p} />`;case"keychain":return l`<${b} filter=${u} />`;case"tools":return l`<${b} toolsets=${c?.toolsets} filter=${u} settingsData=${c} mergeSettingsData=${p} />`;case"addons":return l`<${b} setStatus=${B} filter=${u} />`;default:return Xr("Loading settings…")}},U=!h;return fr("SettingsDialogContent-render-end"),l`
        <div class="settings-dialog-backdrop" onClick=${(b)=>{if(b.target===b.currentTarget)n()}}>
            <div ref=${d} data-testid="settings-dialog" class=${`settings-dialog${v.compact?" settings-dialog-compact":""}${v.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${h?.searchable&&l`
                        <input ref=${w} type="text" class="settings-header-filter"
                            placeholder=${h.placeholder||"Filter…"}
                            value=${u} onInput=${(b)=>_(b.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${W.map((b,N)=>{let P=N>0&&!W[N-1].isExtension,V=b.isExtension&&P;return l`
                                ${V&&l`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${b.id===r?"active":""}`} onClick=${()=>G(b.id)}>
                                    <span class="settings-nav-icon">${b.icon}</span>
                                    <span class="settings-nav-label">${b.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${U?Xr("Loading settings…"):K()}
                    </main>
                </div>
                ${t&&l`
                    <div class=${`settings-status-bar settings-status-bar-${t.type}`}>
                        ${t.type==="info"&&l`<span class="settings-spinner"></span>`}
                        <span>${t.text}</span>
                        ${t.type!=="info"&&l`<button class="settings-status-dismiss" onClick=${()=>s(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function Zu(){let[n,r]=g(!1);if(L(()=>{let i=(o)=>{let t=Tr(o?.detail?.section);if(t)try{window.__piclawSettingsRequestedSection=t}catch(s){}r(!0)};window.addEventListener("piclaw:open-settings",i);let c=Mc();if(c.open){if(c.section)try{window.__piclawSettingsRequestedSection=c.section}catch(o){}r(!0)}return()=>window.removeEventListener("piclaw:open-settings",i)},[]),!n)return null;return l`<${zc} className="settings-portal"><${Qr} onClose=${()=>r(!1)} /><//>`}function Yu(n={}){Rc(n)}var _r,_t=null,Cr,Ar,Wu,Ru,ft,Nu,ju,Uu,Hu,Lu,Gu,Pu,Vu,Au,Xu,Cu,Qu,qu,Du,Iu,et;var gt=q(()=>{E();Kc();Cn();ac();_r=[];fr("module-eval-start");fr("imports-done");Cr=new Map,Ar=new Map;Cr.set("general",zi);Wu={general:()=>Promise.resolve(zi),sessions:()=>Promise.resolve().then(() => (ro(),no)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => (co(),io)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (to(),oo)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (po(),go)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (Bo(),ko)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (Fo(),To)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (Ko(),zo)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Ro(),Wo)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (Xo(),Ao)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (qo(),Qo)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (So(),Eo)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (mo(),ao)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (rt(),nt)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (ct(),it)).then((n)=>n.AddonsSection)},Ru={"editor-settings":()=>Promise.resolve().then(() => (ot(),xu)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (lt(),Bu)).then(()=>{}),developer:()=>Promise.resolve().then(() => (ut(),zu)).then(()=>{})},ft=new Set;Nu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,ju=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,Uu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,Hu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,Lu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,Gu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,Pu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,Vu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,Au=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,Xu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,Cu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,Qu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,qu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,Du=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,Iu=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,et=[{id:"general",label:"General",icon:Nu,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:ju,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:Uu,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:Hu,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:Pu,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:Lu,searchable:!1,order:15},{id:"environment",label:"Environment",icon:Gu,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:Vu,searchable:!1,order:20},{id:"models",label:"Models",icon:Au,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:Xu,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:Cu,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:qu,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:Du,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:Qu,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:Iu,searchable:!0,placeholder:"Filter add-ons…",order:90}]});E();gt();Cn();var Ju=l`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function Eu({label:n,body:r,filter:i=""}){return l`
    <div class="settings-section">
      <h3>${n}</h3>
      <p class="settings-hint">Mock add-on pane rendered by the settings widget fixture.</p>
      <div class="settings-addon-grid">
        ${["Credentials","Routes","Runtime options"].filter((c)=>!i||c.toLowerCase().includes(String(i).toLowerCase())).map((c)=>l`
          <div class="settings-addon-card">
            <div class="settings-addon-card-header">
              <div>
                <div class="settings-addon-name">${c}</div>
                <div class="settings-addon-subtitle">${r}</div>
              </div>
              <span class="settings-addon-enabled">fixture</span>
            </div>
            <div class="settings-row settings-row-vertical">
              <label>Mock field</label>
              <input type="text" value=${`${n.toLowerCase().replace(/\s+/g,"-")}:${c.toLowerCase().replace(/\s+/g,"-")}`} readonly />
            </div>
          </div>
        `)}
      </div>
    </div>
  `}function Su(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let r of n)dn({id:r.id,label:r.label,icon:Ju,searchable:!0,searchPlaceholder:`Filter ${r.label} settings…`,order:r.id==="fixture-z-observability"?1:999,component:(i)=>l`<${Eu} label=${r.label} body=${r.body} filter=${i?.filter||""} />`})}var fn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},au={current:fn.current,models:fn.models,model_options:fn.model_options,thinking_level:fn.thinking_level,supports_thinking:fn.supports_thinking,available_thinking_levels:fn.available_thinking_levels},pt={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},$t={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},En=new URLSearchParams(window.location.search).get("real")!=="1",ht=window.fetch.bind(window);function _n(n,r=200){return new Response(JSON.stringify(n),{status:r,headers:{"Content-Type":"application/json"}})}function mu(){window.fetch=async(n,r)=>{let i=new URL(typeof n==="string"?n:n.url,window.location.href),c=String(r?.method||"GET").toUpperCase();if(!En)return ht(n,r);if(i.pathname==="/agent/settings-data")return _n(fn);if(i.pathname==="/agent/models")return _n(au);if(i.pathname==="/agent/addons")return _n(pt);if(i.pathname.startsWith("/agent/addons/"))return _n({ok:!0,message:"Fixture add-on action accepted.",...pt});if(i.pathname==="/agent/keychain"){if(c==="GET")return _n($t);if(c==="POST")return _n({ok:!0,...$t})}if(i.pathname==="/agent/settings/general")return _n({ok:!0,settings:fn});if(i.pathname==="/agent/settings/widget-token/regenerate")return _n({ok:!0,settings:{...fn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(i.pathname.startsWith("/agent/default/message"))return _n({command:{status:"success",message:"Fixture command accepted."}});if(i.pathname.startsWith("/agent/settings/"))return _n({ok:!0,settings:fn,items:[],entries:[]});if(i.pathname==="/agent/client-perf")return _n({ok:!0});return ht(n,r)}}function n_(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function wt(n){try{window.__piclawSettingsRequestedSection=n}catch(r){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function r_(){let n=new URLSearchParams(window.location.search),[r,i]=g(n.get("section")||"general"),[c,o]=g(Number(n.get("width")||900)),[t,s]=g(Number(n.get("height")||640)),[u,_]=g(En),[e,x]=g(0),f=C(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),y=F((v)=>{i(v),wt(v)},[]),$=F(()=>{En=!En,_(En),x((v)=>v+1)},[]);return l`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${r} onChange=${(v)=>y(v.target.value)}>${f.map((v)=>l`<option value=${v}>${v}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${c} onInput=${(v)=>o(Number(v.target.value))} /> ${c}px</label>
        <label>Height <input type="range" min="420" max="900" value=${t} onInput=${(v)=>s(Number(v.target.value))} /> ${t}px</label>
        <button type="button" onClick=${$}>${u?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>x((v)=>v+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${c}px;--fixture-height:${t}px;`}>
        <${Qr} key=${e} onClose=${()=>{}} />
      </div>
    </div>
  `}function i_(){Su(),mu(),n_();let n=new URLSearchParams(window.location.search);wt(n.get("section")||"general");let r=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));r.id="settings-widget-fixture-root",An(l`<${r_} />`,r),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:En})}i_();

//# debugId=5E55A90415594AE864756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
