var Xf=Object.defineProperty;var Nf=(n)=>n;function Qf(n,i){this[n]=Nf.bind(null,i)}var un=(n,i)=>{for(var _ in i)Xf(n,_,{get:i[_],enumerable:!0,configurable:!0,set:Qf.bind(i,_)})};var O=(n,i)=>()=>(n&&(i=n(n=0)),i);var mf={};un(mf,{useState:()=>w,useRef:()=>J,useReducer:()=>Nr,useMemo:()=>C,useLayoutEffect:()=>Ti,useImperativeHandle:()=>Cf,useErrorBoundary:()=>Ef,useEffect:()=>q,useDebugValue:()=>Of,useContext:()=>Jf,useCallback:()=>j,render:()=>Dn,html:()=>s,h:()=>g_,createContext:()=>Lf,Component:()=>fi});function Kn(n,i){for(var _ in i)n[_]=i[_];return n}function s_(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function g_(n,i,_){var r,c,f,u={};for(f in i)f=="key"?r=i[f]:f=="ref"?c=i[f]:u[f]=i[f];if(arguments.length>2&&(u.children=arguments.length>3?ji.call(arguments,2):_),typeof n=="function"&&n.defaultProps!=null)for(f in n.defaultProps)u[f]===void 0&&(u[f]=n.defaultProps[f]);return Hi(n,u,r,c,null)}function Hi(n,i,_,r,c){var f={type:n,props:i,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c==null?++zr:c,__i:-1,__u:0};return c==null&&S.vnode!=null&&S.vnode(f),f}function Gi(n){return n.children}function fi(n,i){this.props=n,this.context=i}function In(n,i){if(i==null)return n.__?In(n.__,n.__i+1):null;for(var _;i<n.__k.length;i++)if((_=n.__k[i])!=null&&_.__e!=null)return _.__e;return typeof n.type=="function"?In(n):null}function Af(n){if(n.__P&&n.__d){var i=n.__v,_=i.__e,r=[],c=[],f=Kn({},i);f.__v=i.__v+1,S.vnode&&S.vnode(f),$_(n.__P,f,i,n.__n,n.__P.namespaceURI,32&i.__u?[_]:null,r,_==null?In(i):_,!!(32&i.__u),c),f.__v=i.__v,f.__.__k[f.__i]=f,Pr(r,f,c),i.__e=i.__=null,f.__e!=_&&Ur(f)}}function Ur(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(i){if(i!=null&&i.__e!=null)return n.__e=n.__c.base=i.__e}),Ur(n)}function r_(n){(!n.__d&&(n.__d=!0)&&jn.push(n)&&!Wi.__r++||lr!=S.debounceRendering)&&((lr=S.debounceRendering)||Fr)(Wi)}function Wi(){try{for(var n,i=1;jn.length;)jn.length>i&&jn.sort(hr),n=jn.shift(),i=jn.length,Af(n)}finally{jn.length=Wi.__r=0}}function Gr(n,i,_,r,c,f,u,g,l,$,k){var o,b,p,K,t,z,y,v=r&&r.__k||hi,R=i.length;for(l=Zf(_,i,v,l,R),o=0;o<R;o++)(p=_.__k[o])!=null&&(b=p.__i!=-1&&v[p.__i]||Fi,p.__i=o,z=$_(n,p,b,c,f,u,g,l,$,k),K=p.__e,p.ref&&b.ref!=p.ref&&(b.ref&&o_(b.ref,null,p),k.push(p.ref,p.__c||K,p)),t==null&&K!=null&&(t=K),(y=!!(4&p.__u))||b.__k===p.__k?(l=Tr(p,l,n,y),y&&b.__e&&(b.__e=null)):typeof p.type=="function"&&z!==void 0?l=z:K&&(l=K.nextSibling),p.__u&=-7);return _.__e=t,l}function Zf(n,i,_,r,c){var f,u,g,l,$,k=_.length,o=k,b=0;for(n.__k=Array(c),f=0;f<c;f++)(u=i[f])!=null&&typeof u!="boolean"&&typeof u!="function"?(typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?u=n.__k[f]=Hi(null,u,null,null,null):Ui(u)?u=n.__k[f]=Hi(Gi,{children:u},null,null,null):u.constructor===void 0&&u.__b>0?u=n.__k[f]=Hi(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):n.__k[f]=u,l=f+b,u.__=n,u.__b=n.__b+1,g=null,($=u.__i=If(u,_,l,o))!=-1&&(o--,(g=_[$])&&(g.__u|=2)),g==null||g.__v==null?($==-1&&(c>k?b--:c<k&&b++),typeof u.type!="function"&&(u.__u|=4)):$!=l&&($==l-1?b--:$==l+1?b++:($>l?b--:b++,u.__u|=4))):n.__k[f]=null;if(o)for(f=0;f<k;f++)(g=_[f])!=null&&(2&g.__u)==0&&(g.__e==r&&(r=In(g)),Vr(g,g));return r}function Tr(n,i,_,r){var c,f;if(typeof n.type=="function"){for(c=n.__k,f=0;c&&f<c.length;f++)c[f]&&(c[f].__=n,i=Tr(c[f],i,_,r));return i}n.__e!=i&&(r&&(i&&n.type&&!i.parentNode&&(i=In(n)),_.insertBefore(n.__e,i||null)),i=n.__e);do i=i&&i.nextSibling;while(i!=null&&i.nodeType==8);return i}function If(n,i,_,r){var c,f,u,g=n.key,l=n.type,$=i[_],k=$!=null&&(2&$.__u)==0;if($===null&&g==null||k&&g==$.key&&l==$.type)return _;if(r>(k?1:0)){for(c=_-1,f=_+1;c>=0||f<i.length;)if(($=i[u=c>=0?c--:f++])!=null&&(2&$.__u)==0&&g==$.key&&l==$.type)return u}return-1}function wr(n,i,_){i[0]=="-"?n.setProperty(i,_==null?"":_):n[i]=_==null?"":typeof _!="number"||qf.test(i)?_:_+"px"}function Ki(n,i,_,r,c){var f,u;n:if(i=="style")if(typeof _=="string")n.style.cssText=_;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(i in r)_&&i in _||wr(n.style,i,"");if(_)for(i in _)r&&_[i]==r[i]||wr(n.style,i,_[i])}else if(i[0]=="o"&&i[1]=="n")f=i!=(i=i.replace(Wr,"$1")),u=i.toLowerCase(),i=u in n||i=="onFocusOut"||i=="onFocusIn"?u.slice(2):i.slice(2),n.l||(n.l={}),n.l[i+f]=_,_?r?_[ci]=r[ci]:(_[ci]=u_,n.addEventListener(i,f?__:i_,f)):n.removeEventListener(i,f?__:i_,f);else{if(c=="http://www.w3.org/2000/svg")i=i.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(i!="width"&&i!="height"&&i!="href"&&i!="list"&&i!="form"&&i!="tabIndex"&&i!="download"&&i!="rowSpan"&&i!="colSpan"&&i!="role"&&i!="popover"&&i in n)try{n[i]=_==null?"":_;break n}catch(g){}typeof _=="function"||(_==null||_===!1&&i[4]!="-"?n.removeAttribute(i):n.setAttribute(i,i=="popover"&&_==1?"":_))}}function yr(n){return function(i){if(this.l){var _=this.l[i.type+n];if(i[Bi]==null)i[Bi]=u_++;else if(i[Bi]<_[ci])return;return _(S.event?S.event(i):i)}}}function $_(n,i,_,r,c,f,u,g,l,$){var k,o,b,p,K,t,z,y,v,R,G,h,T,H,P,V=i.type;if(i.constructor!==void 0)return null;128&_.__u&&(l=!!(32&_.__u),f=[g=i.__e=_.__e]),(k=S.__b)&&k(i);n:if(typeof V=="function")try{if(y=i.props,v=V.prototype&&V.prototype.render,R=(k=V.contextType)&&r[k.__c],G=k?R?R.props.value:k.__:r,_.__c?z=(o=i.__c=_.__c).__=o.__E:(v?i.__c=o=new V(y,G):(i.__c=o=new fi(y,G),o.constructor=V,o.render=Df),R&&R.sub(o),o.state||(o.state={}),o.__n=r,b=o.__d=!0,o.__h=[],o._sb=[]),v&&o.__s==null&&(o.__s=o.state),v&&V.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=Kn({},o.__s)),Kn(o.__s,V.getDerivedStateFromProps(y,o.__s))),p=o.props,K=o.state,o.__v=i,b)v&&V.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),v&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(v&&V.getDerivedStateFromProps==null&&y!==p&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(y,G),i.__v==_.__v||!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(y,o.__s,G)===!1){i.__v!=_.__v&&(o.props=y,o.state=o.__s,o.__d=!1),i.__e=_.__e,i.__k=_.__k,i.__k.some(function(x){x&&(x.__=i)}),hi.push.apply(o.__h,o._sb),o._sb=[],o.__h.length&&u.push(o);break n}o.componentWillUpdate!=null&&o.componentWillUpdate(y,o.__s,G),v&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(p,K,t)})}if(o.context=G,o.props=y,o.__P=n,o.__e=!1,h=S.__r,T=0,v)o.state=o.__s,o.__d=!1,h&&h(i),k=o.render(o.props,o.state,o.context),hi.push.apply(o.__h,o._sb),o._sb=[];else do o.__d=!1,h&&h(i),k=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++T<25);o.state=o.__s,o.getChildContext!=null&&(r=Kn(Kn({},r),o.getChildContext())),v&&!b&&o.getSnapshotBeforeUpdate!=null&&(t=o.getSnapshotBeforeUpdate(p,K)),H=k!=null&&k.type===Gi&&k.key==null?Rr(k.props.children):k,g=Gr(n,Ui(H)?H:[H],i,_,r,c,f,u,g,l,$),o.base=i.__e,i.__u&=-161,o.__h.length&&u.push(o),z&&(o.__E=o.__=null)}catch(x){if(i.__v=null,l||f!=null)if(x.then){for(i.__u|=l?160:128;g&&g.nodeType==8&&g.nextSibling;)g=g.nextSibling;f[f.indexOf(g)]=null,i.__e=g}else{for(P=f.length;P--;)s_(f[P]);c_(i)}else i.__e=_.__e,i.__k=_.__k,x.then||c_(i);S.__e(x,i,_)}else f==null&&i.__v==_.__v?(i.__k=_.__k,i.__e=_.__e):g=i.__e=Yf(_.__e,i,_,r,c,f,u,l,$);return(k=S.diffed)&&k(i),128&i.__u?void 0:g}function c_(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(c_))}function Pr(n,i,_){for(var r=0;r<_.length;r++)o_(_[r],_[++r],_[++r]);S.__c&&S.__c(i,n),n.some(function(c){try{n=c.__h,c.__h=[],n.some(function(f){f.call(c)})}catch(f){S.__e(f,c.__v)}})}function Rr(n){return typeof n!="object"||n==null||n.__b>0?n:Ui(n)?n.map(Rr):n.constructor!==void 0?null:Kn({},n)}function Yf(n,i,_,r,c,f,u,g,l){var $,k,o,b,p,K,t,z=_.props||Fi,y=i.props,v=i.type;if(v=="svg"?c="http://www.w3.org/2000/svg":v=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),f!=null){for($=0;$<f.length;$++)if((p=f[$])&&"setAttribute"in p==!!v&&(v?p.localName==v:p.nodeType==3)){n=p,f[$]=null;break}}if(n==null){if(v==null)return document.createTextNode(y);n=document.createElementNS(c,v,y.is&&y),g&&(S.__m&&S.__m(i,f),g=!1),f=null}if(v==null)z===y||g&&n.data==y||(n.data=y);else{if(f=v=="textarea"&&y.defaultValue!=null?null:f&&ji.call(n.childNodes),!g&&f!=null)for(z={},$=0;$<n.attributes.length;$++)z[(p=n.attributes[$]).name]=p.value;for($ in z)p=z[$],$=="dangerouslySetInnerHTML"?o=p:$=="children"||($ in y)||$=="value"&&("defaultValue"in y)||$=="checked"&&("defaultChecked"in y)||Ki(n,$,null,p,c);for($ in y)p=y[$],$=="children"?b=p:$=="dangerouslySetInnerHTML"?k=p:$=="value"?K=p:$=="checked"?t=p:g&&typeof p!="function"||z[$]===p||Ki(n,$,p,z[$],c);if(k)g||o&&(k.__html==o.__html||k.__html==n.innerHTML)||(n.innerHTML=k.__html),i.__k=[];else if(o&&(n.innerHTML=""),Gr(i.type=="template"?n.content:n,Ui(b)?b:[b],i,_,r,v=="foreignObject"?"http://www.w3.org/1999/xhtml":c,f,u,f?f[0]:_.__k&&In(_,0),g,l),f!=null)for($=f.length;$--;)s_(f[$]);g&&v!="textarea"||($="value",v=="progress"&&K==null?n.removeAttribute("value"):K!=null&&(K!==n[$]||v=="progress"&&!K||v=="option"&&K!=z[$])&&Ki(n,$,K,z[$],c),$="checked",t!=null&&t!=n[$]&&Ki(n,$,t,z[$],c))}return n}function o_(n,i,_){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&i==null||(n.__u=n(i))}else n.current=i}catch(c){S.__e(c,_)}}function Vr(n,i,_){var r,c;if(S.unmount&&S.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||o_(r,null,i)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(f){S.__e(f,i)}r.base=r.__P=null}if(r=n.__k)for(c=0;c<r.length;c++)r[c]&&Vr(r[c],i,_||typeof n.type!="function");_||s_(n.__e),n.__c=n.__=n.__e=void 0}function Df(n,i,_){return this.constructor(n,_)}function Dn(n,i,_){var r,c,f,u;i==document&&(i=document.documentElement),S.__&&S.__(n,i),c=(r=typeof _=="function")?null:_&&_.__k||i.__k,f=[],u=[],$_(i,n=(!r&&_||i).__k=g_(Gi,null,[n]),c||Fi,Fi,i.namespaceURI,!r&&_?[_]:c?null:i.firstChild?ji.call(i.childNodes):null,f,!r&&_?_:c?c.__e:i.firstChild,r,u),Pr(f,n,u)}function Lf(n){function i(_){var r,c;return this.getChildContext||(r=new Set,(c={})[i.__c]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(f){this.props.value!=f.value&&r.forEach(function(u){u.__e=!0,r_(u)})},this.sub=function(f){r.add(f);var u=f.componentWillUnmount;f.componentWillUnmount=function(){r&&r.delete(f),u&&u.call(f)}}),_.children}return i.__c="__cC"+jr++,i.__=n,i.Provider=i.__l=(i.Consumer=function(_,r){return _.children(r)}).contextType=i,i}function Ln(n,i){a.__h&&a.__h(d,n,Yn||i),Yn=0;var _=d.__H||(d.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({}),_.__[n]}function w(n){return Yn=1,Nr(Qr,n)}function Nr(n,i,_){var r=Ln(Un++,2);if(r.t=n,!r.__c&&(r.__=[_?_(i):Qr(void 0,i),function(g){var l=r.__N?r.__N[0]:r.__[0],$=r.t(l,g);l!==$&&(r.__N=[$,r.__[1]],r.__c.setState({}))}],r.__c=d,!d.__f)){var c=function(g,l,$){if(!r.__c.__H)return!0;var k=r.__c.__H.__.filter(function(b){return b.__c});if(k.every(function(b){return!b.__N}))return!f||f.call(this,g,l,$);var o=r.__c.props!==g;return k.some(function(b){if(b.__N){var p=b.__[0];b.__=b.__N,b.__N=void 0,p!==b.__[0]&&(o=!0)}}),f&&f.call(this,g,l,$)||o};d.__f=!0;var{shouldComponentUpdate:f,componentWillUpdate:u}=d;d.componentWillUpdate=function(g,l,$){if(this.__e){var k=f;f=void 0,c(g,l,$),f=k}u&&u.call(this,g,l,$)},d.shouldComponentUpdate=c}return r.__N||r.__}function q(n,i){var _=Ln(Un++,3);!a.__s&&l_(_.__H,i)&&(_.__=n,_.u=i,d.__H.__h.push(_))}function Ti(n,i){var _=Ln(Un++,4);!a.__s&&l_(_.__H,i)&&(_.__=n,_.u=i,d.__h.push(_))}function J(n){return Yn=5,C(function(){return{current:n}},[])}function Cf(n,i,_){Yn=6,Ti(function(){if(typeof n=="function"){var r=n(i());return function(){n(null),r&&typeof r=="function"&&r()}}if(n)return n.current=i(),function(){return n.current=null}},_==null?_:_.concat(n))}function C(n,i){var _=Ln(Un++,7);return l_(_.__H,i)&&(_.__=n(),_.__H=i,_.__h=n),_.__}function j(n,i){return Yn=8,C(function(){return n},i)}function Jf(n){var i=d.context[n.__c],_=Ln(Un++,9);return _.c=n,i?(_.__==null&&(_.__=!0,i.sub(d)),i.props.value):n.__}function Of(n,i){a.useDebugValue&&a.useDebugValue(i?i(n):n)}function Ef(n){var i=Ln(Un++,10),_=w();return i.__=n,d.componentDidCatch||(d.componentDidCatch=function(r,c){i.__&&i.__(r,c),_[1](r)}),[_[0],function(){_[1](void 0)}]}function df(){for(var n;n=Xr.shift();){var i=n.__H;if(n.__P&&i)try{i.__h.some(zi),i.__h.some(f_),i.__h=[]}catch(_){i.__h=[],a.__e(_,n.__v)}}}function Sf(n){var i,_=function(){clearTimeout(r),Br&&cancelAnimationFrame(i),setTimeout(n)},r=setTimeout(_,35);Br&&(i=requestAnimationFrame(_))}function zi(n){var i=d,_=n.__c;typeof _=="function"&&(n.__c=void 0,_()),d=i}function f_(n){var i=d;n.__c=n.__(),d=i}function l_(n,i){return!n||n.length!==i.length||i.some(function(_,r){return _!==n[r]})}function Qr(n,i){return typeof i=="function"?i(n):i}function ef(n){var i=Hr.get(this);return i||(i=new Map,Hr.set(this,i)),(i=Mr(this,i.get(n)||(i.set(n,i=function(_){for(var r,c,f=1,u="",g="",l=[0],$=function(b){f===1&&(b||(u=u.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,b,u):f===3&&(b||u)?(l.push(3,b,u),f=2):f===2&&u==="..."&&b?l.push(4,b,0):f===2&&u&&!b?l.push(5,0,!0,u):f>=5&&((u||!b&&f===5)&&(l.push(f,0,u,c),f=6),b&&(l.push(f,b,0,c),f=6)),u=""},k=0;k<_.length;k++){k&&(f===1&&$(),$(k));for(var o=0;o<_[k].length;o++)r=_[k][o],f===1?r==="<"?($(),l=[l],f=3):u+=r:f===4?u==="--"&&r===">"?(f=1,u=""):u=r+u[0]:g?r===g?g="":u+=r:r==='"'||r==="'"?g=r:r===">"?($(),f=1):f&&(r==="="?(f=5,c=u,u=""):r==="/"&&(f<5||_[k][o+1]===">")?($(),f===3&&(l=l[0]),f=l,(l=l[0]).push(2,0,f),f=0):r===" "||r==="\t"||r===`
`||r==="\r"?($(),f=2):u+=r),f===3&&u==="!--"&&(f=4,l=l[0])}return $(),l}(n)),i),arguments,[])).length>1?i:i[0]}var ji,S,zr,Mf,jn,lr,Fr,hr,ai,Bi,ci,Wr,u_,i_,__,jr,Fi,hi,qf,Ui,Un,d,n_,xr,Yn=0,Xr,a,kr,br,tr,vr,pr,Kr,Br,Mr=function(n,i,_,r){var c;i[0]=0;for(var f=1;f<i.length;f++){var u=i[f++],g=i[f]?(i[0]|=u?1:2,_[i[f++]]):i[++f];u===3?r[0]=g:u===4?r[1]=Object.assign(r[1]||{},g):u===5?(r[1]=r[1]||{})[i[++f]]=g:u===6?r[1][i[++f]]+=g+"":u?(c=n.apply(g,Mr(n,g,_,["",null])),r.push(c),g[0]?i[0]|=2:(i[f-2]=0,i[f]=c)):r.push(g)}return r},Hr,s;var e=O(()=>{Fi={},hi=[],qf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ui=Array.isArray;ji=hi.slice,S={__e:function(n,i,_,r){for(var c,f,u;i=i.__;)if((c=i.__c)&&!c.__)try{if((f=c.constructor)&&f.getDerivedStateFromError!=null&&(c.setState(f.getDerivedStateFromError(n)),u=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(n,r||{}),u=c.__d),u)return c.__E=c}catch(g){n=g}throw n}},zr=0,Mf=function(n){return n!=null&&n.constructor===void 0},fi.prototype.setState=function(n,i){var _;_=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Kn({},this.state),typeof n=="function"&&(n=n(Kn({},_),this.props)),n&&Kn(_,n),n!=null&&this.__v&&(i&&this._sb.push(i),r_(this))},fi.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),r_(this))},fi.prototype.render=Gi,jn=[],Fr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,hr=function(n,i){return n.__v.__b-i.__v.__b},Wi.__r=0,ai=Math.random().toString(8),Bi="__d"+ai,ci="__a"+ai,Wr=/(PointerCapture)$|Capture$/i,u_=0,i_=yr(!1),__=yr(!0),jr=0;Xr=[],a=S,kr=a.__b,br=a.__r,tr=a.diffed,vr=a.__c,pr=a.unmount,Kr=a.__;a.__b=function(n){d=null,kr&&kr(n)},a.__=function(n,i){n&&i.__k&&i.__k.__m&&(n.__m=i.__k.__m),Kr&&Kr(n,i)},a.__r=function(n){br&&br(n),Un=0;var i=(d=n.__c).__H;i&&(n_===d?(i.__h=[],d.__h=[],i.__.some(function(_){_.__N&&(_.__=_.__N),_.u=_.__N=void 0})):(i.__h.some(zi),i.__h.some(f_),i.__h=[],Un=0)),n_=d},a.diffed=function(n){tr&&tr(n);var i=n.__c;i&&i.__H&&(i.__H.__h.length&&(Xr.push(i)!==1&&xr===a.requestAnimationFrame||((xr=a.requestAnimationFrame)||Sf)(df)),i.__H.__.some(function(_){_.u&&(_.__H=_.u),_.u=void 0})),n_=d=null},a.__c=function(n,i){i.some(function(_){try{_.__h.some(zi),_.__h=_.__h.filter(function(r){return!r.__||f_(r)})}catch(r){i.some(function(c){c.__h&&(c.__h=[])}),i=[],a.__e(r,_.__v)}}),vr&&vr(n,i)},a.unmount=function(n){pr&&pr(n);var i,_=n.__c;_&&_.__H&&(_.__H.__.some(function(r){try{zi(r)}catch(c){i=c}}),_.__H=void 0,i&&a.__e(i,_.__v))};Br=typeof requestAnimationFrame=="function";Hr=new Map;s=ef.bind(g_)});function Gn(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function gn(n,i){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,i)}catch{return}}function w_(n,i=!1){let _=Gn(n);if(_===null)return i;return _==="true"}function y_(n,i=null){let _=Gn(n);if(_===null)return i;let r=parseInt(_,10);return Number.isFinite(r)?r:i}function qr(n){let i=Gn(n);if(!i)return null;try{return JSON.parse(i)}catch{return null}}function Ri(n){let i=String(n??"").trim().toLowerCase().replace(/_/g,"-");if(!i)return Cn;if(i==="zh-cn"||i==="zh"||i==="zh-hans"||i.startsWith("zh-hans"))return"zh-CN";if(i==="ja"||i.startsWith("ja-"))return"ja";if(i==="en"||i.startsWith("en-"))return"en";return Cn}function _u(){if(typeof navigator>"u")return Cn;let n=[...Array.isArray(navigator.languages)?navigator.languages:[],navigator.language].filter((i)=>typeof i==="string"&&i.length>0);for(let i of n){let _=Ri(i);if(_!==Cn)return _}return Cn}function ru(){let n=Gn(Ir);if(n)return Ri(n);return _u()}function cu(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(x_,{detail:{locale:n}}))}function Pi(){if(!k_)fu();return Rn}function fu(){return Rn=ru(),k_=!0,Rn}function uu(n,i={}){let _=Ri(n);if(k_=!0,_===Rn&&i.persist===!1)return Rn;if(Rn=_,i.persist!==!1)gn(Ir,_);return cu(_),Rn}function su(n,i){if(!i)return n;return n.replace(/\{(\w+)\}/g,(_,r)=>{let c=i[r];return c===void 0||c===null?_:String(c)})}function Dr(n,i,_=Pi()){let c=iu[_]?.[n]??Yr[n]??n;return su(c,i)}function bn(n,i){return Dr(n,i)}function gu(){let[n,i]=w(Pi());return q(()=>{if(typeof window>"u"||typeof window.addEventListener!=="function")return;let _=(r)=>{let c=r.detail,f=Ri(c?.locale??Pi());i(f)};return window.addEventListener(x_,_),i(Pi()),()=>window.removeEventListener(x_,_)},[]),[n,(_)=>uu(_)]}function L(){let[n,i]=gu();return{locale:n,setLocale:i,t:(_,r)=>Dr(_,r,n)}}var Cn="en",Ar,Zr,Ir="piclaw_locale",x_="piclaw-locale-change",Yr,af,nu,iu,Rn,k_=!1;var cn=O(()=>{e();Ar=["en","zh-CN","ja"],Zr={en:"English","zh-CN":"简体中文",ja:"日本語"},Yr={"compose.placeholder":"Message (Enter to send, Shift+Enter for newline)...","compose.send":"Send","compose.stop":"Stop","compose.searchPlaceholder":"Search (Enter to run)...","compose.clearAll":"Clear all","compose.clearAllTitle":"Clear all attachments and references","compose.scope":"Scope","compose.searchScope":"Search scope","compose.scopeCurrent":"Current","compose.scopeBranchFamily":"Branch family","compose.scopeAll":"All chats","compose.filterImages":"Images","compose.filterAttachments":"Attachments","compose.search":"Search","compose.closeSearch":"Close search","compose.shareLocation":"Share location","compose.attachFile":"Attach file","compose.queueControls":"Queued follow-up controls","compose.moveUp":"Move up","compose.moveUpQueue":"Move up in queue","compose.moveDown":"Move down","compose.moveDownQueue":"Move down in queue","compose.editInCompose":"Edit in compose","compose.returnToEditor":"Return queued message to editor","compose.injectSteer":"Inject queued follow-up as steer","compose.steer":"Steer","compose.cancelQueued":"Cancel queued message","compose.resizeInput":"Resize message input","compose.resizeInputHint":"Drag to resize message input","compose.modelPicker":"Model picker","compose.sessionsAndAgents":"Sessions and agents","compose.openModelPicker":"Open model picker","compose.newBranchTitle":"Create a new branch from this chat","compose.newRootTitle":"Create a clean root session such as web:ops","compose.renameSessionTitle":"Rename the current session","compose.pruneSessionTitle":"Delete (prune) current agent/session branch","compose.filterImagesTitle":"Only show messages with images","compose.filterAttachmentsTitle":"Only show messages with attachments","compose.selectModel":"Select model","compose.loadingModels":"Loading models…","compose.noModels":"No models available.","compose.nextModel":"Next model","compose.manageSessions":"Manage sessions & agents","compose.noSessions":"No other sessions yet.","compose.newBranch":"New branch","compose.newRoot":"New root…","compose.mergeCurrent":"Merge current w/ parent","compose.renameCurrent":"Rename current…","compose.deleteCurrent":"Delete current…","compose.mergeInto":"Merge this branch into {target}","compose.mergeBlocked":"This branch cannot be merged while active or while it has children","workspace.title":"Workspace","workspace.newFile":"New file","workspace.refresh":"Refresh","workspace.actions":"Workspace actions","workspace.uploadFiles":"Upload files","workspace.reindexing":"Reindexing workspace…","workspace.deleteFile":"Delete file","workspace.download":"Download","workspace.uploadToFolder":"Upload files to this folder","workspace.addFolderHint":"Add folder hint to compose","workspace.downloadZip":"Download folder as zip","workspace.openInTab":"Open in tab","workspace.openInEditor":"Open in editor","workspace.renameSelected":"Rename selected","workspace.downloadSelectedFile":"Download selected file","workspace.downloadSelectedFolder":"Download selected folder (zip)","workspace.deleteSelectedFile":"Delete selected file","shell.settings":"Settings","shell.newChat":"New chat","shell.connecting":"Connecting…","shell.connected":"Connected","language.label":"Language","settings.title":"Settings","settings.close":"Close (Esc)","settings.filter":"Filter…","settings.loading":"Loading settings…","settings.section.general":"General","settings.section.sessions":"Sessions","settings.section.recordings":"Recordings","settings.section.compaction":"Compaction","settings.section.keyboard":"Keyboard","settings.section.workspace":"Workspace","settings.section.environment":"Environment","settings.section.providers":"Providers","settings.section.models":"Models","settings.section.theme":"Appearance","settings.section.scheduled-tasks":"Scheduled Tasks","settings.section.quick-actions":"Quick Actions","settings.section.keychain":"Keychain","settings.section.tools":"Tools","settings.section.addons":"Add-ons","settings.placeholder.recordings":"Filter recordings…","settings.placeholder.keyboard":"Filter shortcuts…","settings.placeholder.environment":"Filter environment…","settings.placeholder.models":"Filter models…","settings.placeholder.scheduled-tasks":"Filter scheduled tasks…","settings.placeholder.quick-actions":"Filter quick actions…","settings.placeholder.keychain":"Filter entries…","settings.placeholder.tools":"Filter tools…","settings.placeholder.addons":"Filter add-ons…","preview.close":"Close","preview.loading":"Loading preview…","preview.files":"Files","preview.folders":"Folders","preview.compressed":"Compressed","preview.uncompressed":"Uncompressed","preview.name":"Name","preview.type":"Type","preview.method":"Method","preview.size":"Size","post.deleteMessage":"Delete message","post.tooLarge":"Message too large to display.","post.previewTruncated":"Preview truncated.","post.submitted":"Submitted","post.discard":"Discard","post.save":"Save","post.cancel":"Cancel","post.addNote":"Add note","post.addNotePlaceholder":"Add a note…","tab.close":"Close","tab.closeOthers":"Close Others","tab.closeAll":"Close All","tab.reattach":"Reattach","tab.openInWindow":"Open in Window","tab.openInNewTab":"Open in New Tab","tab.pinned":"Pinned","tab.detached":"Detached","tab.openSeparateWindow":"Open in separate window","status.trackedVariables":"Tracked variables","status.attachToSession":"Attach to session","status.files":"Files","status.proposedDiff":"Proposed diff","status.copyTmux":"Copy tmux command","status.experimentDuration":"Experiment duration","status.sinceLastActivity":"Since last activity","annotator.title":"Annotate image","annotator.typeLabel":"Type label…","annotator.undo":"Undo","annotator.resetZoom":"Reset zoom","tree.filter":"Filter…","tree.sessionTree":"Session tree","btw.label":"BTW side conversation","btw.close":"Close BTW","btw.thinking":"Thinking","mdpreview.close":"Close preview","mdpreview.unavailable":"Preview unavailable","widget.close":"Close widget","oobe.gettingStarted":"Getting started","oobe.needsSetupTitle":"Instance needs setup","oobe.configuredTitle":"Instance is configured","oobe.needsSetupBody":"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.","oobe.configuredBody":"This instance looks configured. Review or update provider and model settings in Settings.","oobe.openSettings":"Open Settings","oobe.dismiss":"Dismiss","oobe.done":"Done","palette.placeholder":"Type to jump to an agent, workspace action, or slash command…","palette.hideWorkspace":"Hide workspace","palette.showWorkspace":"Show workspace","palette.hideWorkspaceDesc":"Hide the workspace sidebar.","palette.showWorkspaceDesc":"Show the workspace sidebar.","palette.exitChatOnly":"Exit chat-only mode","palette.chatOnly":"Chat-only mode","palette.exitChatOnlyDesc":"Return to the split workspace layout.","palette.chatOnlyDesc":"Switch to the chat-only layout.","palette.groupAgents":"Agents","palette.groupWorkspace":"Workspace","palette.groupSlash":"Slash commands","palette.hintMove":"Move","palette.hintSelect":"Select","palette.hintPopOut":"Pop out","palette.hintClose":"Close","settings.appliedNotice":"Settings applied. Changes take effect on the next turn.","settings.sessions.lifecycle":"Session Lifecycle","settings.sessions.autoRotate":"Auto-rotate sessions","settings.sessions.maxSize":"Max session size (MB)","settings.sessions.maxSizeAria":"max session size","settings.sessions.agentBehaviour":"Agent Behaviour","settings.sessions.toolBudget":"Tool use budget","settings.sessions.toolBudgetAria":"tool use budget","settings.sessions.toolBudgetHint":"max tool-call messages per turn","settings.sessions.isolation":"Session isolation","settings.sessions.isolationNone":"None — full cross-session visibility","settings.sessions.isolationSummary":"Summary — tools visible, no arguments","settings.sessions.isolationFull":"Full — sessions cannot see each other","settings.editor.heading":"Editor","settings.editor.vimMode":"Vim mode","settings.editor.showWhitespace":"Show whitespace","settings.editor.livePreview":"Markdown live preview","settings.editor.fontSize":"Font size (px)","settings.editor.fontSizeAria":"editor font size","settings.editor.fontFamily":"Font family","settings.editor.fontFamilyPlaceholder":"monospace (default)","settings.editor.localOnlyHint":"This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.","settings.appearance.syncing":"Syncing appearance…","settings.appearance.default":"Default","settings.appearance.autoLightDark":"auto (light/dark)","settings.appearance.tint":"Tint:","settings.appearance.clearTint":"Clear tint","settings.appearance.none":"none","settings.keyboard.heading":"Keyboard","settings.keyboard.hint1":"Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.","settings.keyboard.hint1b":"is reserved for dismiss/abort and cannot be rebound.","settings.keyboard.hint2mid":"and typing","settings.keyboard.hint2end":"outside the compose box open this pane.","settings.keyboard.resetAll":"Reset all to defaults","settings.keyboard.defaultColon":"Default:","settings.keyboard.save":"Save","settings.keyboard.defaultBtn":"Default","settings.keyboard.noMatch":"No shortcuts match this filter.","settings.keyboard.invalidShortcut":"Invalid shortcut: {token}. Escape is reserved and cannot be rebound.","settings.keyboard.saved":"Keyboard shortcuts saved.","settings.keyboard.resetOne":"Keyboard shortcut reset to default.","settings.keyboard.resetAllDone":"Keyboard shortcuts reset to defaults.","settings.workspace.serverApplied":"Workspace settings applied. Server-side limits affect new workspace requests immediately.","settings.workspace.browserApplied":"Browser workspace settings applied immediately in this tab.","settings.workspace.access":"Access","settings.workspace.enableTerminal":"Enable web terminal","settings.workspace.allowVnc":"Allow direct VNC targets","settings.workspace.accessHint":"Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.","settings.workspace.guardrails":"Server scan guardrails","settings.workspace.maxDepth":"Max tree depth","settings.workspace.maxDepthAria":"workspace tree max depth","settings.workspace.maxDepthHintPre":"caps all","settings.workspace.maxDepthHintPost":"requests","settings.workspace.maxEntries":"Max entries per scan","settings.workspace.maxEntriesAria":"workspace tree max entries","settings.workspace.maxEntriesHint":"truncate oversized tree walks earlier","settings.workspace.thisBrowser":"This browser","settings.workspace.refreshInterval":"Refresh interval (seconds)","settings.workspace.refreshIntervalAria":"workspace refresh interval","settings.workspace.folderDepth":"Folder preview scan depth","settings.workspace.folderDepthAria":"folder preview scan depth","settings.workspace.folderDepthHintPre":"set to","settings.workspace.folderDepthHintPost":"to disable folder size preview scans","settings.workspace.footerHint":"Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.","settings.models.thinkingLevel":"Thinking level","settings.models.noThinking":"Current model does not support thinking.","settings.models.thinkingLevelLabel":"Thinking level:","settings.models.loading":"Loading models…","settings.models.summary":"Model and provider names may wrap in narrow panes to avoid clipping.","settings.models.scopedOnly":"Scoped models only","settings.models.scopedCheckboxPre":"Use Pi","settings.models.scopedCheckboxPost":"for Piclaw model lists","settings.models.scopedHintPre":"Filters this picker and the","settings.models.scopedHintPost":"tool. TUI model selection remains unchanged.","settings.models.colModel":"Model","settings.models.colProvider":"Provider","settings.models.colContext":"Context","settings.models.colReasoning":"Reasoning","settings.models.noMatch":'No models match "{filter}"',"settings.tools.unavailable":"Tool data not available.","settings.tools.search":"Search","settings.tools.matchMode":"Match mode","settings.tools.orMode":"Any keyword (OR) — results match at least one search term","settings.tools.andMode":"All keywords (AND) — results must match every search term","settings.tools.colEnabled":"Enabled","settings.tools.colTool":"Tool","settings.tools.colCompact":"Compact","settings.tools.colKind":"Kind","settings.tools.colSummary":"Summary","settings.tools.colSource":"Source","settings.tools.disableCompaction":"Disable tool-result compaction for this tool","settings.tools.enableCompaction":"Enable tool-result compaction for this tool","settings.tools.noMatch":'No tools match "{filter}"',"settings.tools.footer":"Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; the “Compact” column controls tool-result compaction eligibility.","settings.environment.heading":"Environment","settings.environment.introPre":"Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to","settings.environment.introPost":", so subsequent tool calls inherit them.","settings.environment.refresh":"Refresh","settings.environment.addOverride":"Add override","settings.environment.valuePlaceholder":"value","settings.environment.save":"Save","settings.environment.countLine":"{count} variables visible • {overrides} overrides active • {keychain} keychain-injected variables hidden","settings.environment.overridden":"Overridden in KV","settings.environment.inherited":"Inherited from process environment","settings.environment.kindOverride":"override","settings.environment.kindProcess":"process","settings.environment.clear":"Clear","settings.environment.noMatch":'No environment variables match "{filter}".',"settings.environment.refreshedToast":"Environment refreshed.","settings.environment.savedToast":"Saved environment override for {name}.","settings.environment.clearedToast":"Cleared environment override for {name}.","settings.quickActions.loading":"Loading…","settings.quickActions.heading":"Timeline Quick Actions","settings.quickActions.intro":"Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.","settings.quickActions.enableAll":"Enable all","settings.quickActions.saving":"Saving…","settings.quickActions.saveApply":"Save & apply","settings.quickActions.workspaceCommands":"Workspace commands","settings.quickActions.noWorkspaceMatch":"No workspace commands match this filter.","settings.quickActions.slashCommands":"Slash commands","settings.quickActions.slashFallback":"slash command","settings.quickActions.noSlashMatch":"No slash commands match this filter.","settings.quickActions.savingToast":"Saving quick actions…","settings.quickActions.savedToast":"Quick Actions saved.","settings.providers.authApiKey":"API key","settings.providers.authConfigured":"Configured","settings.providers.heading":"Providers","settings.providers.tagCustom":"Custom","settings.providers.logout":"Logout","settings.providers.reconfigure":"Reconfigure","settings.providers.setUp":"Set up","settings.providers.setupHint":"Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.","settings.providers.starting":"Starting…","settings.providers.signInOAuth":"Sign in with OAuth","settings.providers.apiKeyLabel":"API Key","settings.providers.apiKeyPlaceholder":"Enter API key","settings.providers.save":"Save","settings.providers.configuring":"Configuring…","settings.providers.saveConfig":"Save configuration","settings.providers.apiKeyEmpty":"API key cannot be empty.","settings.providers.configuringToast":"Configuring {provider}…","settings.providers.configured":"{provider} configured.","settings.providers.startingOAuth":"Starting OAuth for {provider}…","settings.providers.oauthOpened":"OAuth window opened. Complete the sign-in flow, then close this message.","settings.providers.oauthStarted":"OAuth flow started for {provider}. Check the chat.","settings.providers.loggingOut":"Logging out {provider}…","settings.providers.loggedOut":"Logged out {provider}. Restart may be needed.","settings.general.identity":"Identity","settings.general.userLabel":"User","settings.general.yourName":"Your name","settings.general.agentLabel":"Agent","settings.general.agentName":"Agent name","settings.general.notifications":"Notifications","settings.general.browserNotifications":"Browser notifications","settings.general.notifSecureHint":"Use the \uD83D\uDD14 bell button in the compose bar to enable/disable notifications. Web Push requires HTTPS or localhost.","settings.general.notifInsecureHint":"⚠ Not available — requires a secure context (HTTPS or localhost). Access via SSH tunnel or reverse proxy with TLS to enable.","settings.general.display":"Display","settings.general.systemMeters":"System meters","settings.general.systemMetersHint":"CPU/memory/network meters in the status bar. This browser only.","settings.general.instanceConfig":"Instance Configuration","settings.general.composeUpload":"Compose upload (MB)","settings.general.composeUploadAria":"compose upload limit","settings.general.composeUploadHint":"chat/media attachments","settings.general.workspaceUpload":"Workspace upload (MB)","settings.general.workspaceUploadAria":"workspace upload limit","settings.general.workspaceUploadHint":"defaults to 256 MB; chunked uploads allow up to 1 GB","settings.general.authentication":"Authentication","settings.general.widgetToken":"Widget bearer token","settings.general.token":"Token","settings.general.hideToken":"Hide token","settings.general.revealToken":"Reveal token","settings.general.copyToken":"Copy token","settings.general.copied":"Copied","settings.general.regenerating":"Regenerating…","settings.general.regenerate":"Regenerate","settings.general.tokenHintPre":"Read-only token for","settings.general.tokenHintMid":"and","settings.general.tokenHintPost":". Use as","settings.general.tokenHintEnd":".","settings.general.copyFailed":"Could not copy widget token. Select the token field and copy manually.","settings.general.regenConfirm":"Regenerate the widget token? Existing macOS widgets using the old token will stop updating.","settings.general.totpTitle":"TOTP setup QR","settings.general.totpConfiguredHint":"Current web-login authenticator secret. Scan this QR to add another authenticator device.","settings.general.totpUnconfiguredHint":"TOTP is not configured for this instance yet, so no setup QR is available.","settings.general.issuer":"Issuer","settings.general.label":"Label","settings.general.secret":"Secret","settings.general.avatarUpload":"Click to upload","settings.developer.heading":"Developer","settings.developer.devMode":"Developer mode","settings.developer.localHint":"This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.","settings.developer.addonSources":"Add-on Sources","settings.developer.catalogUrl":"Catalog URL","settings.developer.catalogHint":"Primary add-on catalog URL. Leave empty to use the default","settings.developer.additionalCatalogs":"Additional catalog URLs","settings.developer.additionalHint":"Fetched in addition to the primary/default catalog. One URL per line.","settings.developer.repoUrl":"Repo URL","settings.developer.repoHintPre":"Override the git repo used for","settings.developer.repoHintPost":"installs. Leave empty for default.","settings.developer.debug":"Debug","settings.developer.logSse":"Log SSE events","settings.developer.logToolCalls":"Log tool calls","settings.developer.debugHint":"Debug flags take effect on next page reload.","settings.addons.installing":"Installing {slug}…","settings.addons.removing":"Removing {slug}…","settings.addons.installedToast":"Add-on installed.","settings.addons.removedToast":"Add-on removed.","settings.addons.restarting":"Restarting piclaw…","settings.addons.restartComplete":"Restart complete — add-ons refreshed.","settings.addons.restartTimeout":"Backend did not return in time. Reload the page manually.","settings.addons.fetching":"Fetching add-ons…","settings.addons.loadFailed":"Could not load add-ons.","settings.addons.catalogFromPre":"Catalog from","settings.addons.catalogMerged":"{count} catalog sources merged.","settings.addons.installNote":"Package-first install via Bun; restart required after install/uninstall.","settings.addons.failedFetchSingular":"Failed to fetch {count} catalog source:","settings.addons.failedFetchPlural":"Failed to fetch {count} catalog sources:","settings.addons.activeSources":"Active catalog sources ({count})","settings.addons.windowsWarning":"Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.","settings.addons.typeExtSkill":"extension + skill","settings.addons.typeSkill":"skill","settings.addons.typeExt":"extension","settings.addons.update":"Update","settings.addons.remove":"Remove","settings.addons.install":"Install","settings.addons.noMatch":'No add-ons match "{filter}"',"settings.addons.restartNotice":"Extension changes are installed but inactive until piclaw restarts.","settings.addons.restartNow":"Restart Now","settings.recordings.modeFull":"full / trusted","settings.recordings.modeMetadata":"metadata only","settings.recordings.modeRedacted":"redacted","settings.recordings.selectPrompt":"Select a recording to inspect, replay, export, or delete it.","settings.recordings.playback":"Playback","settings.recordings.refresh":"Refresh","settings.recordings.delete":"Delete","settings.recordings.status":"Status","settings.recordings.mode":"Mode","settings.recordings.chat":"Chat","settings.recordings.started":"Started","settings.recordings.ended":"Ended","settings.recordings.events":"Events","settings.recordings.redactions":"Redactions","settings.recordings.exportJson":"Export JSON","settings.recordings.exportJsonl":"Export JSONL","settings.recordings.exportHtml":"Export standalone HTML","settings.recordings.eventSummary":"Event summary","settings.recordings.inspectHint":"Open or refresh details to inspect trace events.","settings.recordings.firstEvents":"First events","settings.recordings.heading":"Session Recording","settings.recordings.intro":"Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.","settings.recordings.chatJid":"Chat JID","settings.recordings.title":"Title","settings.recordings.titlePlaceholder":"Demo recording","settings.recordings.modeLabelField":"Mode","settings.recordings.optRedacted":"Redacted","settings.recordings.optMetadata":"Metadata only","settings.recordings.optFull":"Full / trusted local","settings.recordings.includeSnapshot":"Include timeline snapshot","settings.recordings.extraKeys":"Extra redacted keys","settings.recordings.extraPatterns":"Extra regex patterns","settings.recordings.stopCurrent":"Stop current chat recording","settings.recordings.start":"Start recording","settings.recordings.redactionPreview":"Redaction preview","settings.recordings.previewRedaction":"Preview redaction","settings.recordings.loading":"Loading recordings…","settings.recordings.noneYet":"No recordings yet.","settings.recordings.noneYetHint":"Start a recording above, then use playback/export for deterministic screen capture.","settings.recordings.listLabel":"Session recordings","settings.recordings.eventsCount":"{count} events","settings.recordings.noMatch":"No recordings match “{filter}”.","settings.recordings.startedToast":"Recording started for {chat}.","settings.recordings.startFailed":"Failed to start recording.","settings.recordings.stoppedToast":"Recording stopped for {chat}.","settings.recordings.stopFailed":"Failed to stop recording.","settings.recordings.deleteConfirm":"Delete recording {id}?","settings.recordings.deletedToast":"Recording deleted.","settings.recordings.deleteFailed":"Failed to delete recording.","settings.recordings.loadOneFailed":"Failed to load recording.","settings.recordings.loadFailed":"Failed to load recordings.","settings.recordings.previewFailed":"Preview failed.","settings.keychain.loadFailed":"Failed to load keychain.","settings.keychain.addFailed":"Failed to add entry.","settings.keychain.deleteFailed":"Failed to delete entry.","settings.keychain.saveNotesFailed":"Failed to save notes.","settings.keychain.revealFailed":"Failed to reveal.","settings.keychain.loading":"Loading keychain…","settings.keychain.entryCountSingular":"{count} entry","settings.keychain.entryCountPlural":"{count} entries","settings.keychain.matchingFilter":' matching "{filter}"',"settings.keychain.encryptedSuffix":", encrypted at rest.","settings.keychain.clickPrefix":"Click","settings.keychain.revealSuffix":"to reveal.","settings.keychain.cancel":"Cancel","settings.keychain.addEntry":"+ Add entry","settings.keychain.namePlaceholder":"Entry name (e.g. github/my-token)","settings.keychain.secretPlaceholder":"Secret value","settings.keychain.usernamePlaceholder":"Username (optional)","settings.keychain.saving":"Saving…","settings.keychain.save":"Save","settings.keychain.userNotePlaceholder":"User note (visible in this UI only)","settings.keychain.agentNotePlaceholder":"Agent note (safe to expose to agents)","settings.keychain.noMatchFilter":"No entries match the filter.","settings.keychain.noEntries":"No keychain entries.","settings.keychain.hideSecret":"Hide secret","settings.keychain.revealSecret":"Reveal secret","settings.keychain.deleteQ":"Delete?","settings.keychain.yes":"Yes","settings.keychain.no":"No","settings.keychain.deleteTitle":"Delete","settings.keychain.userNote":"User note","settings.keychain.agentNote":"Agent-readable note","settings.keychain.userNoteHint":"Human/UI note only","settings.keychain.agentNoteHint":"Safe guidance for agents","settings.keychain.saveNotes":"Save notes","settings.keychain.masterPassword":"Master password:","settings.keychain.masterPasswordPlaceholder":"Enter keychain master password","settings.keychain.unlock":"Unlock","settings.keychain.totpCode":"TOTP code:","settings.keychain.verify":"Verify","settings.keychain.username":"Username","settings.keychain.copyUsername":"Copy username","settings.keychain.secret":"Secret","settings.keychain.copySecret":"Copy secret","settings.tasks.internalProtected":"internal/protected","settings.tasks.noRunLogs":"No run logs recorded yet.","settings.tasks.noSummary":"No summary","settings.tasks.selectPrompt":"Select a task to inspect schedule, status, and run history.","settings.tasks.pause":"Pause","settings.tasks.resume":"Resume","settings.tasks.delete":"Delete","settings.tasks.status":"Status","settings.tasks.kind":"Kind","settings.tasks.schedule":"Schedule","settings.tasks.nextRun":"Next run","settings.tasks.lastRun":"Last run","settings.tasks.lastResult":"Last result","settings.tasks.chat":"Chat","settings.tasks.model":"Model","settings.tasks.cwd":"CWD","settings.tasks.timeout":"Timeout","settings.tasks.protection":"Protection","settings.tasks.protectionHint":"Internal task actions require explicit confirmation.","settings.tasks.command":"Command","settings.tasks.prompt":"Prompt","settings.tasks.recentRuns":"Recent runs","settings.tasks.activeLabel":"Active","settings.tasks.pausedLabel":"Paused","settings.tasks.completedLabel":"Completed","settings.tasks.allStatuses":"All statuses","settings.tasks.filterChatPlaceholder":"Filter chat JID…","settings.tasks.refresh":"Refresh","settings.tasks.loading":"Loading scheduled tasks…","settings.tasks.noneFound":"No scheduled tasks found.","settings.tasks.noneFoundHint":"Tasks created with reminders, `/tasks`, or the scheduler tool will appear here.","settings.tasks.listLabel":"Scheduled tasks","settings.tasks.next":"Next","settings.tasks.last":"Last","settings.tasks.noMatch":"No tasks match “{filter}”.","settings.tasks.confirmDelete":"Delete scheduled task {id}?","settings.tasks.confirmPause":"Pause scheduled task {id}?","settings.tasks.confirmResume":"Resume scheduled task {id}?","settings.tasks.confirmProtected":"Task {id} is internal/protected. Continue with {action}?","settings.tasks.deleting":"Deleting {id}…","settings.tasks.pausing":"Pausing {id}…","settings.tasks.resuming":"Resuming {id}…","settings.tasks.deletedToast":"Scheduled task {id} deleted.","settings.tasks.pausedToast":"Scheduled task {id} paused.","settings.tasks.resumedToast":"Scheduled task {id} resumed.","settings.tasks.actionFailed":"Failed to {action} task.","settings.tasks.loadFailed":"Failed to load scheduled tasks.","menu.title":"Menu","menu.showWorkspace":"Show workspace","menu.hideWorkspace":"Hide workspace","menu.openExplorer":"Open explorer","menu.chatOnly":"Chat-only mode","menu.exitChatOnly":"Exit chat-only mode","menu.openTerminal":"Open terminal in tab","menu.openVnc":"Open VNC in tab","menu.newFile":"New file","menu.openRecent":"Open Recent","menu.refreshTree":"Refresh tree","menu.reindex":"Reindex workspace","menu.showHidden":"Show hidden files","menu.hideHidden":"Hide hidden files","menu.scale":"Scale","menu.settings":"Settings"},af={"compose.placeholder":"输入消息（回车发送，Shift+回车换行）...","compose.send":"发送","compose.stop":"停止","compose.searchPlaceholder":"搜索（回车运行）...","compose.clearAll":"清除全部","compose.clearAllTitle":"清除所有附件和引用","compose.scope":"范围","compose.searchScope":"搜索范围","compose.scopeCurrent":"当前","compose.scopeBranchFamily":"分支系列","compose.scopeAll":"所有聊天","compose.filterImages":"图片","compose.filterAttachments":"附件","compose.search":"搜索","compose.closeSearch":"关闭搜索","compose.shareLocation":"分享位置","compose.attachFile":"附加文件","compose.queueControls":"排队后续消息控制","compose.moveUp":"上移","compose.moveUpQueue":"在队列中上移","compose.moveDown":"下移","compose.moveDownQueue":"在队列中下移","compose.editInCompose":"在输入框中编辑","compose.returnToEditor":"将排队消息返回编辑器","compose.injectSteer":"作为引导插入排队的后续消息","compose.steer":"引导","compose.cancelQueued":"取消排队消息","compose.resizeInput":"调整消息输入框大小","compose.resizeInputHint":"拖动以调整消息输入框大小","compose.modelPicker":"模型选择器","compose.sessionsAndAgents":"会话与代理","compose.openModelPicker":"打开模型选择器","compose.newBranchTitle":"从此聊天创建新分支","compose.newRootTitle":"创建一个干净的根会话，例如 web:ops","compose.renameSessionTitle":"重命名当前会话","compose.pruneSessionTitle":"删除（修剪）当前代理/会话分支","compose.filterImagesTitle":"仅显示含图片的消息","compose.filterAttachmentsTitle":"仅显示含附件的消息","compose.selectModel":"选择模型","compose.loadingModels":"正在加载模型…","compose.noModels":"没有可用的模型。","compose.nextModel":"下一个模型","compose.manageSessions":"管理会话与代理","compose.noSessions":"暂无其他会话。","compose.newBranch":"新建分支","compose.newRoot":"新建根会话…","compose.mergeCurrent":"将当前合并到父级","compose.renameCurrent":"重命名当前…","compose.deleteCurrent":"删除当前…","compose.mergeInto":"将此分支合并到 {target}","compose.mergeBlocked":"当此分支处于活动状态或有子分支时无法合并","workspace.title":"工作区","workspace.newFile":"新建文件","workspace.refresh":"刷新","workspace.actions":"工作区操作","workspace.uploadFiles":"上传文件","workspace.reindexing":"正在重建索引…","workspace.deleteFile":"删除文件","workspace.download":"下载","workspace.uploadToFolder":"上传文件到此文件夹","workspace.addFolderHint":"将文件夹提示添加到输入框","workspace.downloadZip":"将文件夹下载为 zip","workspace.openInTab":"在标签页打开","workspace.openInEditor":"在编辑器打开","workspace.renameSelected":"重命名所选","workspace.downloadSelectedFile":"下载所选文件","workspace.downloadSelectedFolder":"下载所选文件夹（zip）","workspace.deleteSelectedFile":"删除所选文件","shell.settings":"设置","shell.newChat":"新建对话","shell.connecting":"连接中…","shell.connected":"已连接","language.label":"语言","settings.title":"设置","settings.close":"关闭（Esc）","settings.filter":"筛选…","settings.loading":"加载设置中…","settings.section.general":"常规","settings.section.sessions":"会话","settings.section.recordings":"录制","settings.section.compaction":"压缩","settings.section.keyboard":"键盘","settings.section.workspace":"工作区","settings.section.environment":"环境","settings.section.providers":"提供商","settings.section.models":"模型","settings.section.theme":"外观","settings.section.scheduled-tasks":"计划任务","settings.section.quick-actions":"快捷操作","settings.section.keychain":"密钥串","settings.section.tools":"工具","settings.section.addons":"插件","settings.placeholder.recordings":"筛选录制…","settings.placeholder.keyboard":"筛选快捷键…","settings.placeholder.environment":"筛选环境…","settings.placeholder.models":"筛选模型…","settings.placeholder.scheduled-tasks":"筛选计划任务…","settings.placeholder.quick-actions":"筛选快捷操作…","settings.placeholder.keychain":"筛选条目…","settings.placeholder.tools":"筛选工具…","settings.placeholder.addons":"筛选插件…","preview.close":"关闭","preview.loading":"正在加载预览…","preview.files":"文件","preview.folders":"文件夹","preview.compressed":"压缩后","preview.uncompressed":"未压缩","preview.name":"名称","preview.type":"类型","preview.method":"方法","preview.size":"大小","post.deleteMessage":"删除消息","post.tooLarge":"消息过大，无法显示。","post.previewTruncated":"预览已截断。","post.submitted":"已提交","post.discard":"丢弃","post.save":"保存","post.cancel":"取消","post.addNote":"添加备注","post.addNotePlaceholder":"添加备注…","tab.close":"关闭","tab.closeOthers":"关闭其他","tab.closeAll":"全部关闭","tab.reattach":"重新附加","tab.openInWindow":"在窗口中打开","tab.openInNewTab":"在新标签页打开","tab.pinned":"已固定","tab.detached":"已分离","tab.openSeparateWindow":"在独立窗口中打开","status.trackedVariables":"跟踪的变量","status.attachToSession":"附加到会话","status.files":"文件","status.proposedDiff":"建议的差异","status.copyTmux":"复制 tmux 命令","status.experimentDuration":"实验时长","status.sinceLastActivity":"自上次活动以来","annotator.title":"标注图片","annotator.typeLabel":"输入标签…","annotator.undo":"撤销","annotator.resetZoom":"重置缩放","tree.filter":"筛选…","tree.sessionTree":"会话树","btw.label":"BTW 附加对话","btw.close":"关闭 BTW","btw.thinking":"思考中","mdpreview.close":"关闭预览","mdpreview.unavailable":"预览不可用","widget.close":"关闭小部件","oobe.gettingStarted":"入门指南","oobe.needsSetupTitle":"实例需要设置","oobe.configuredTitle":"实例已配置","oobe.needsSetupBody":"此实例尚未配置。请打开“设置”并设置 AI 提供商/模型以开始发送请求。","oobe.configuredBody":"此实例看起来已配置。请在“设置”中查看或更新提供商和模型设置。","oobe.openSettings":"打开设置","oobe.dismiss":"忽略","oobe.done":"完成","palette.placeholder":"输入以跳转到代理、工作区操作或斜杠命令…","palette.hideWorkspace":"隐藏工作区","palette.showWorkspace":"显示工作区","palette.hideWorkspaceDesc":"隐藏工作区侧边栏。","palette.showWorkspaceDesc":"显示工作区侧边栏。","palette.exitChatOnly":"退出仅聊天模式","palette.chatOnly":"仅聊天模式","palette.exitChatOnlyDesc":"返回分屏工作区布局。","palette.chatOnlyDesc":"切换到仅聊天布局。","palette.groupAgents":"代理","palette.groupWorkspace":"工作区","palette.groupSlash":"斜杠命令","palette.hintMove":"移动","palette.hintSelect":"选择","palette.hintPopOut":"弹出","palette.hintClose":"关闭","settings.appliedNotice":"设置已应用。更改将在下一回合生效。","settings.sessions.lifecycle":"会话生命周期","settings.sessions.autoRotate":"自动轮换会话","settings.sessions.maxSize":"最大会话大小（MB）","settings.sessions.maxSizeAria":"最大会话大小","settings.sessions.agentBehaviour":"代理行为","settings.sessions.toolBudget":"工具使用预算","settings.sessions.toolBudgetAria":"工具使用预算","settings.sessions.toolBudgetHint":"每回合最大工具调用消息数","settings.sessions.isolation":"会话隔离","settings.sessions.isolationNone":"无 — 完全跨会话可见","settings.sessions.isolationSummary":"摘要 — 工具可见，无参数","settings.sessions.isolationFull":"完全 — 会话之间不可见","settings.editor.heading":"编辑器","settings.editor.vimMode":"Vim 模式","settings.editor.showWhitespace":"显示空白字符","settings.editor.livePreview":"Markdown 实时预览","settings.editor.fontSize":"字号（px）","settings.editor.fontSizeAria":"编辑器字号","settings.editor.fontFamily":"字体","settings.editor.fontFamilyPlaceholder":"monospace（默认）","settings.editor.localOnlyHint":"仅限此浏览器。编辑器更改存储在本地浏览器中，并在下次打开或重新加载文件标签页时生效。","settings.appearance.syncing":"正在同步外观…","settings.appearance.default":"默认","settings.appearance.autoLightDark":"自动（浅色/深色）","settings.appearance.tint":"色调：","settings.appearance.clearTint":"清除色调","settings.appearance.none":"无","settings.keyboard.heading":"键盘","settings.keyboard.hint1":"将应用级快捷键自定义为逗号分隔的绑定。更改立即生效。","settings.keyboard.hint1b":"已保留用于关闭/中止，无法重新绑定。","settings.keyboard.hint2mid":"以及键入","settings.keyboard.hint2end":"（在输入框外）可打开此面板。","settings.keyboard.resetAll":"全部重置为默认","settings.keyboard.defaultColon":"默认：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"默认","settings.keyboard.noMatch":"没有匹配此筛选的快捷键。","settings.keyboard.invalidShortcut":"无效快捷键：{token}。Escape 已保留，无法重新绑定。","settings.keyboard.saved":"快捷键已保存。","settings.keyboard.resetOne":"快捷键已重置为默认。","settings.keyboard.resetAllDone":"快捷键已全部重置为默认。","settings.workspace.serverApplied":"工作区设置已应用。服务器端限制立即影响新的工作区请求。","settings.workspace.browserApplied":"浏览器工作区设置已在此标签页立即应用。","settings.workspace.access":"访问","settings.workspace.enableTerminal":"启用 Web 终端","settings.workspace.allowVnc":"允许直接 VNC 目标","settings.workspace.accessHint":"终端访问立即更新。直接 VNC 目标策略适用于新的 VNC 请求。","settings.workspace.guardrails":"服务器扫描防护","settings.workspace.maxDepth":"最大树深度","settings.workspace.maxDepthAria":"工作区树最大深度","settings.workspace.maxDepthHintPre":"限制所有","settings.workspace.maxDepthHintPost":"请求","settings.workspace.maxEntries":"每次扫描最大条目数","settings.workspace.maxEntriesAria":"工作区树最大条目数","settings.workspace.maxEntriesHint":"更早截断超大的树遍历","settings.workspace.thisBrowser":"此浏览器","settings.workspace.refreshInterval":"刷新间隔（秒）","settings.workspace.refreshIntervalAria":"工作区刷新间隔","settings.workspace.folderDepth":"文件夹预览扫描深度","settings.workspace.folderDepthAria":"文件夹预览扫描深度","settings.workspace.folderDepthHintPre":"设为","settings.workspace.folderDepthHintPost":"以禁用文件夹大小预览扫描","settings.workspace.footerHint":"根目录和文件夹展开的树加载保持较浅；文件夹大小预览是 UI 中最深的工作区扫描。","settings.models.thinkingLevel":"思考级别","settings.models.noThinking":"当前模型不支持思考。","settings.models.thinkingLevelLabel":"思考级别：","settings.models.loading":"正在加载模型…","settings.models.summary":"在狭窄面板中，模型和提供商名称可能换行以避免裁切。","settings.models.scopedOnly":"仅限范围内模型","settings.models.scopedCheckboxPre":"使用 Pi 的","settings.models.scopedCheckboxPost":"作为 Piclaw 模型列表","settings.models.scopedHintPre":"筛选此选择器和","settings.models.scopedHintPost":"工具。TUI 模型选择保持不变。","settings.models.colModel":"模型","settings.models.colProvider":"提供商","settings.models.colContext":"上下文","settings.models.colReasoning":"推理","settings.models.noMatch":"没有匹配 “{filter}” 的模型","settings.tools.unavailable":"工具数据不可用。","settings.tools.search":"搜索","settings.tools.matchMode":"匹配模式","settings.tools.orMode":"任意关键词（OR）— 结果至少匹配一个搜索词","settings.tools.andMode":"所有关键词（AND）— 结果必须匹配每个搜索词","settings.tools.colEnabled":"已启用","settings.tools.colTool":"工具","settings.tools.colCompact":"压缩","settings.tools.colKind":"类型","settings.tools.colSummary":"摘要","settings.tools.colSource":"来源","settings.tools.disableCompaction":"为此工具禁用工具结果压缩","settings.tools.enableCompaction":"为此工具启用工具结果压缩","settings.tools.noMatch":"没有匹配 “{filter}” 的工具","settings.tools.footer":"工具激活由代理运行时管理。组复选框可折叠/展开；“压缩”列控制工具结果压缩资格。","settings.environment.heading":"环境","settings.environment.introPre":"仅显示非 keychain 环境变量。覆盖项存储在扩展 KV 中并应用于","settings.environment.introPost":"，因此后续工具调用会继承它们。","settings.environment.refresh":"刷新","settings.environment.addOverride":"添加覆盖","settings.environment.valuePlaceholder":"值","settings.environment.save":"保存","settings.environment.countLine":"{count} 个变量可见 • {overrides} 个覆盖生效 • {keychain} 个 keychain 注入变量已隐藏","settings.environment.overridden":"在 KV 中覆盖","settings.environment.inherited":"继承自进程环境","settings.environment.kindOverride":"覆盖","settings.environment.kindProcess":"进程","settings.environment.clear":"清除","settings.environment.noMatch":"没有匹配 “{filter}” 的环境变量。","settings.environment.refreshedToast":"环境已刷新。","settings.environment.savedToast":"已保存 {name} 的环境覆盖。","settings.environment.clearedToast":"已清除 {name} 的环境覆盖。","settings.quickActions.loading":"加载中…","settings.quickActions.heading":"时间线快捷操作","settings.quickActions.intro":"选择哪些操作出现在时间线预输入中。代理始终优先固定，然后是工作区命令，再是斜杠命令。","settings.quickActions.enableAll":"全部启用","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存并应用","settings.quickActions.workspaceCommands":"工作区命令","settings.quickActions.noWorkspaceMatch":"没有匹配此筛选的工作区命令。","settings.quickActions.slashCommands":"斜杠命令","settings.quickActions.slashFallback":"斜杠命令","settings.quickActions.noSlashMatch":"没有匹配此筛选的斜杠命令。","settings.quickActions.savingToast":"正在保存快捷操作…","settings.quickActions.savedToast":"快捷操作已保存。","settings.providers.authApiKey":"API 密钥","settings.providers.authConfigured":"已配置","settings.providers.heading":"提供商","settings.providers.tagCustom":"自定义","settings.providers.logout":"注销","settings.providers.reconfigure":"重新配置","settings.providers.setUp":"设置","settings.providers.setupHint":"登录流程在浏览器中打开。在狭窄面板中，设置表单会垂直堆叠以避免裁切。","settings.providers.starting":"启动中…","settings.providers.signInOAuth":"使用 OAuth 登录","settings.providers.apiKeyLabel":"API 密钥","settings.providers.apiKeyPlaceholder":"输入 API 密钥","settings.providers.save":"保存","settings.providers.configuring":"配置中…","settings.providers.saveConfig":"保存配置","settings.providers.apiKeyEmpty":"API 密钥不能为空。","settings.providers.configuringToast":"正在配置 {provider}…","settings.providers.configured":"{provider} 已配置。","settings.providers.startingOAuth":"正在为 {provider} 启动 OAuth…","settings.providers.oauthOpened":"OAuth 窗口已打开。完成登录流程，然后关闭此消息。","settings.providers.oauthStarted":"已为 {provider} 启动 OAuth 流程。请查看聊天。","settings.providers.loggingOut":"正在注销 {provider}…","settings.providers.loggedOut":"已注销 {provider}。可能需要重启。","settings.general.identity":"身份","settings.general.userLabel":"用户","settings.general.yourName":"你的名字","settings.general.agentLabel":"代理","settings.general.agentName":"代理名称","settings.general.notifications":"通知","settings.general.browserNotifications":"浏览器通知","settings.general.notifSecureHint":"使用输入栏中的 \uD83D\uDD14 铃铛按钮来启用/禁用通知。Web Push 需要 HTTPS 或 localhost。","settings.general.notifInsecureHint":"⚠ 不可用 — 需要安全上下文（HTTPS 或 localhost）。通过 SSH 隐道或带 TLS 的反向代理访问以启用。","settings.general.display":"显示","settings.general.systemMeters":"系统仪表","settings.general.systemMetersHint":"状态栏中的 CPU/内存/网络仪表。仅限此浏览器。","settings.general.instanceConfig":"实例配置","settings.general.composeUpload":"撰写上传（MB）","settings.general.composeUploadAria":"撰写上传限制","settings.general.composeUploadHint":"聊天/媒体附件","settings.general.workspaceUpload":"工作区上传（MB）","settings.general.workspaceUploadAria":"工作区上传限制","settings.general.workspaceUploadHint":"默认为 256 MB；分块上传最多允许 1 GB","settings.general.authentication":"身份验证","settings.general.widgetToken":"小部件 bearer 令牌","settings.general.token":"令牌","settings.general.hideToken":"隐藏令牌","settings.general.revealToken":"显示令牌","settings.general.copyToken":"复制令牌","settings.general.copied":"已复制","settings.general.regenerating":"正在重新生成…","settings.general.regenerate":"重新生成","settings.general.tokenHintPre":"只读令牌，用于","settings.general.tokenHintMid":"和","settings.general.tokenHintPost":"。用作","settings.general.tokenHintEnd":"。","settings.general.copyFailed":"无法复制小部件令牌。请选择令牌字段并手动复制。","settings.general.regenConfirm":"重新生成小部件令牌？使用旧令牌的现有 macOS 小部件将停止更新。","settings.general.totpTitle":"TOTP 设置二维码","settings.general.totpConfiguredHint":"当前 Web 登录验证器密钥。扫描此二维码以添加另一个验证器设备。","settings.general.totpUnconfiguredHint":"此实例尚未配置 TOTP，因此没有可用的设置二维码。","settings.general.issuer":"颁发者","settings.general.label":"标签","settings.general.secret":"密钥","settings.general.avatarUpload":"点击上传","settings.developer.heading":"开发者","settings.developer.devMode":"开发者模式","settings.developer.localHint":"仅限此浏览器。开发者模式开关和插件目录覆盖存储在本地浏览器存储中。","settings.developer.addonSources":"插件来源","settings.developer.catalogUrl":"目录 URL","settings.developer.catalogHint":"主插件目录 URL。留空以使用默认值","settings.developer.additionalCatalogs":"其他目录 URL","settings.developer.additionalHint":"在主/默认目录之外额外获取。每行一个 URL。","settings.developer.repoUrl":"仓库 URL","settings.developer.repoHintPre":"覆盖用于","settings.developer.repoHintPost":"安装的 git 仓库。留空以使用默认值。","settings.developer.debug":"调试","settings.developer.logSse":"记录 SSE 事件","settings.developer.logToolCalls":"记录工具调用","settings.developer.debugHint":"调试标志在下次页面重新加载时生效。","settings.addons.installing":"正在安装 {slug}…","settings.addons.removing":"正在移除 {slug}…","settings.addons.installedToast":"插件已安装。","settings.addons.removedToast":"插件已移除。","settings.addons.restarting":"正在重启 piclaw…","settings.addons.restartComplete":"重启完成 — 插件已刷新。","settings.addons.restartTimeout":"后端未能及时返回。请手动重新加载页面。","settings.addons.fetching":"正在获取插件…","settings.addons.loadFailed":"无法加载插件。","settings.addons.catalogFromPre":"目录来自","settings.addons.catalogMerged":"已合并 {count} 个目录来源。","settings.addons.installNote":"通过 Bun 优先安装包；安装/卸载后需要重启。","settings.addons.failedFetchSingular":"获取 {count} 个目录来源失败：","settings.addons.failedFetchPlural":"获取 {count} 个目录来源失败：","settings.addons.activeSources":"活动目录来源（{count}）","settings.addons.windowsWarning":"原生 Windows 插件安装风险更高：Bun 包安装、符号链接清理、锁定文件和重启时机都可能不如 Linux/WSL 可预测。如果可能，请优先使用 WSL 或容器。","settings.addons.typeExtSkill":"扩展 + 技能","settings.addons.typeSkill":"技能","settings.addons.typeExt":"扩展","settings.addons.update":"更新","settings.addons.remove":"移除","settings.addons.install":"安装","settings.addons.noMatch":"没有匹配 “{filter}” 的插件","settings.addons.restartNotice":"扩展更改已安装，但在 piclaw 重启之前处于非活动状态。","settings.addons.restartNow":"立即重启","settings.recordings.modeFull":"完整 / 受信任","settings.recordings.modeMetadata":"仅元数据","settings.recordings.modeRedacted":"已脱敏","settings.recordings.selectPrompt":"选择一个录制以检查、回放、导出或删除。","settings.recordings.playback":"回放","settings.recordings.refresh":"刷新","settings.recordings.delete":"删除","settings.recordings.status":"状态","settings.recordings.mode":"模式","settings.recordings.chat":"聊天","settings.recordings.started":"开始","settings.recordings.ended":"结束","settings.recordings.events":"事件","settings.recordings.redactions":"脱敏","settings.recordings.exportJson":"导出 JSON","settings.recordings.exportJsonl":"导出 JSONL","settings.recordings.exportHtml":"导出独立 HTML","settings.recordings.eventSummary":"事件摘要","settings.recordings.inspectHint":"打开或刷新详情以检查跟踪事件。","settings.recordings.firstEvents":"首批事件","settings.recordings.heading":"会话录制","settings.recordings.intro":"选择性加入的跟踪捕获，用于确定性回放和屏幕录制导出。回放绝不会调用实时代理或工具端点。","settings.recordings.chatJid":"聊天 JID","settings.recordings.title":"标题","settings.recordings.titlePlaceholder":"演示录制","settings.recordings.modeLabelField":"模式","settings.recordings.optRedacted":"已脱敏","settings.recordings.optMetadata":"仅元数据","settings.recordings.optFull":"完整 / 受信任本地","settings.recordings.includeSnapshot":"包含时间线快照","settings.recordings.extraKeys":"额外脱敏键","settings.recordings.extraPatterns":"额外正则模式","settings.recordings.stopCurrent":"停止当前聊天录制","settings.recordings.start":"开始录制","settings.recordings.redactionPreview":"脱敏预览","settings.recordings.previewRedaction":"预览脱敏","settings.recordings.loading":"正在加载录制…","settings.recordings.noneYet":"还没有录制。","settings.recordings.noneYetHint":"在上方开始录制，然后使用回放/导出进行确定性屏幕捕获。","settings.recordings.listLabel":"会话录制","settings.recordings.eventsCount":"{count} 个事件","settings.recordings.noMatch":"没有匹配 “{filter}” 的录制。","settings.recordings.startedToast":"已为 {chat} 开始录制。","settings.recordings.startFailed":"开始录制失败。","settings.recordings.stoppedToast":"已为 {chat} 停止录制。","settings.recordings.stopFailed":"停止录制失败。","settings.recordings.deleteConfirm":"删除录制 {id}？","settings.recordings.deletedToast":"录制已删除。","settings.recordings.deleteFailed":"删除录制失败。","settings.recordings.loadOneFailed":"加载录制失败。","settings.recordings.loadFailed":"加载录制失败。","settings.recordings.previewFailed":"预览失败。","settings.keychain.loadFailed":"加载密钥链失败。","settings.keychain.addFailed":"添加条目失败。","settings.keychain.deleteFailed":"删除条目失败。","settings.keychain.saveNotesFailed":"保存备注失败。","settings.keychain.revealFailed":"显示失败。","settings.keychain.loading":"正在加载密钥链…","settings.keychain.entryCountSingular":"{count} 个条目","settings.keychain.entryCountPlural":"{count} 个条目","settings.keychain.matchingFilter":' 匹配 "{filter}"',"settings.keychain.encryptedSuffix":"，静态加密。","settings.keychain.clickPrefix":"点击","settings.keychain.revealSuffix":"以显示。","settings.keychain.cancel":"取消","settings.keychain.addEntry":"+ 添加条目","settings.keychain.namePlaceholder":"条目名称（例如 github/my-token）","settings.keychain.secretPlaceholder":"密钥值","settings.keychain.usernamePlaceholder":"用户名（可选）","settings.keychain.saving":"正在保存…","settings.keychain.save":"保存","settings.keychain.userNotePlaceholder":"用户备注（仅在此界面可见）","settings.keychain.agentNotePlaceholder":"代理备注（可安全暴露给代理）","settings.keychain.noMatchFilter":"没有条目匹配筛选条件。","settings.keychain.noEntries":"没有密钥链条目。","settings.keychain.hideSecret":"隐藏密钥","settings.keychain.revealSecret":"显示密钥","settings.keychain.deleteQ":"删除？","settings.keychain.yes":"是","settings.keychain.no":"否","settings.keychain.deleteTitle":"删除","settings.keychain.userNote":"用户备注","settings.keychain.agentNote":"代理可读备注","settings.keychain.userNoteHint":"仅限人工/界面备注","settings.keychain.agentNoteHint":"给代理的安全指引","settings.keychain.saveNotes":"保存备注","settings.keychain.masterPassword":"主密码：","settings.keychain.masterPasswordPlaceholder":"输入密钥链主密码","settings.keychain.unlock":"解锁","settings.keychain.totpCode":"TOTP 代码：","settings.keychain.verify":"验证","settings.keychain.username":"用户名","settings.keychain.copyUsername":"复制用户名","settings.keychain.secret":"密钥","settings.keychain.copySecret":"复制密钥","settings.tasks.internalProtected":"内部/受保护","settings.tasks.noRunLogs":"尚未记录运行日志。","settings.tasks.noSummary":"无摘要","settings.tasks.selectPrompt":"选择一个任务以查看计划、状态和运行历史。","settings.tasks.pause":"暂停","settings.tasks.resume":"恢复","settings.tasks.delete":"删除","settings.tasks.status":"状态","settings.tasks.kind":"类型","settings.tasks.schedule":"计划","settings.tasks.nextRun":"下次运行","settings.tasks.lastRun":"上次运行","settings.tasks.lastResult":"上次结果","settings.tasks.chat":"聊天","settings.tasks.model":"模型","settings.tasks.cwd":"工作目录","settings.tasks.timeout":"超时","settings.tasks.protection":"保护","settings.tasks.protectionHint":"内部任务操作需要明确确认。","settings.tasks.command":"命令","settings.tasks.prompt":"提示","settings.tasks.recentRuns":"最近运行","settings.tasks.activeLabel":"活动","settings.tasks.pausedLabel":"已暂停","settings.tasks.completedLabel":"已完成","settings.tasks.allStatuses":"所有状态","settings.tasks.filterChatPlaceholder":"筛选聊天 JID…","settings.tasks.refresh":"刷新","settings.tasks.loading":"正在加载计划任务…","settings.tasks.noneFound":"未找到计划任务。","settings.tasks.noneFoundHint":"通过提醒、`/tasks` 或调度工具创建的任务将显示在此处。","settings.tasks.listLabel":"计划任务","settings.tasks.next":"下次","settings.tasks.last":"上次","settings.tasks.noMatch":"没有任务匹配 “{filter}”。","settings.tasks.confirmDelete":"删除计划任务 {id}？","settings.tasks.confirmPause":"暂停计划任务 {id}？","settings.tasks.confirmResume":"恢复计划任务 {id}？","settings.tasks.confirmProtected":"任务 {id} 是内部/受保护的。继续执行 {action}？","settings.tasks.deleting":"正在删除 {id}…","settings.tasks.pausing":"正在暂停 {id}…","settings.tasks.resuming":"正在恢复 {id}…","settings.tasks.deletedToast":"计划任务 {id} 已删除。","settings.tasks.pausedToast":"计划任务 {id} 已暂停。","settings.tasks.resumedToast":"计划任务 {id} 已恢复。","settings.tasks.actionFailed":"执行 {action} 任务失败。","settings.tasks.loadFailed":"加载计划任务失败。","menu.title":"菜单","menu.showWorkspace":"显示工作区","menu.hideWorkspace":"隐藏工作区","menu.openExplorer":"打开资源管理器","menu.chatOnly":"仅聊天模式","menu.exitChatOnly":"退出仅聊天模式","menu.openTerminal":"在标签页中打开终端","menu.openVnc":"在标签页中打开 VNC","menu.newFile":"新建文件","menu.openRecent":"打开最近文件","menu.refreshTree":"刷新目录树","menu.reindex":"重建工作区索引","menu.showHidden":"显示隐藏文件","menu.hideHidden":"隐藏隐藏文件","menu.scale":"缩放","menu.settings":"设置"},nu={"compose.placeholder":"メッセージ（Enterで送信、Shift+Enterで改行）...","compose.send":"送信","compose.stop":"停止","compose.searchPlaceholder":"検索（Enterで実行）...","compose.clearAll":"すべてクリア","compose.clearAllTitle":"すべての添付と参照をクリア","compose.scope":"範囲","compose.searchScope":"検索範囲","compose.scopeCurrent":"現在","compose.scopeBranchFamily":"ブランチファミリー","compose.scopeAll":"すべてのチャット","compose.filterImages":"画像","compose.filterAttachments":"添付","compose.search":"検索","compose.closeSearch":"検索を閉じる","compose.shareLocation":"位置を共有","compose.attachFile":"ファイルを添付","compose.queueControls":"キュー済みフォローアップの操作","compose.moveUp":"上に移動","compose.moveUpQueue":"キュー内で上に移動","compose.moveDown":"下に移動","compose.moveDownQueue":"キュー内で下に移動","compose.editInCompose":"入力欄で編集","compose.returnToEditor":"キュー済みメッセージを入力欄に戻す","compose.injectSteer":"キュー済みフォローアップをステアとして挿入","compose.steer":"ステア","compose.cancelQueued":"キュー済みメッセージをキャンセル","compose.resizeInput":"メッセージ入力欄のサイズ変更","compose.resizeInputHint":"ドラッグしてメッセージ入力欄のサイズを変更","compose.modelPicker":"モデルピッカー","compose.sessionsAndAgents":"セッションとエージェント","compose.openModelPicker":"モデルピッカーを開く","compose.newBranchTitle":"このチャットから新しいブランチを作成","compose.newRootTitle":"web:ops のようなクリーンなルートセッションを作成","compose.renameSessionTitle":"現在のセッションの名前を変更","compose.pruneSessionTitle":"現在のエージェント/セッションブランチを削除（プルーン）","compose.filterImagesTitle":"画像付きメッセージのみ表示","compose.filterAttachmentsTitle":"添付付きメッセージのみ表示","compose.selectModel":"モデルを選択","compose.loadingModels":"モデルを読み込み中…","compose.noModels":"利用可能なモデルがありません。","compose.nextModel":"次のモデル","compose.manageSessions":"セッションとエージェントを管理","compose.noSessions":"他のセッションはまだありません。","compose.newBranch":"新しいブランチ","compose.newRoot":"新しいルート…","compose.mergeCurrent":"現在を親にマージ","compose.renameCurrent":"現在の名前を変更…","compose.deleteCurrent":"現在を削除…","compose.mergeInto":"このブランチを {target} にマージ","compose.mergeBlocked":"このブランチはアクティブな間または子がある間はマージできません","workspace.title":"ワークスペース","workspace.newFile":"新規ファイル","workspace.refresh":"更新","workspace.actions":"ワークスペース操作","workspace.uploadFiles":"ファイルをアップロード","workspace.reindexing":"ワークスペースを再インデックス中…","workspace.deleteFile":"ファイルを削除","workspace.download":"ダウンロード","workspace.uploadToFolder":"このフォルダにファイルをアップロード","workspace.addFolderHint":"フォルダのヒントを入力欄に追加","workspace.downloadZip":"フォルダをzipでダウンロード","workspace.openInTab":"タブで開く","workspace.openInEditor":"エディタで開く","workspace.renameSelected":"選択項目の名前を変更","workspace.downloadSelectedFile":"選択したファイルをダウンロード","workspace.downloadSelectedFolder":"選択したフォルダをダウンロード（zip）","workspace.deleteSelectedFile":"選択したファイルを削除","shell.settings":"設定","shell.newChat":"新規チャット","shell.connecting":"接続中…","shell.connected":"接続済み","language.label":"言語","settings.title":"設定","settings.close":"閉じる（Esc）","settings.filter":"フィルター…","settings.loading":"設定を読み込み中…","settings.section.general":"一般","settings.section.sessions":"セッション","settings.section.recordings":"録画","settings.section.compaction":"圧縮","settings.section.keyboard":"キーボード","settings.section.workspace":"ワークスペース","settings.section.environment":"環境","settings.section.providers":"プロバイダー","settings.section.models":"モデル","settings.section.theme":"外観","settings.section.scheduled-tasks":"スケジュールタスク","settings.section.quick-actions":"クイックアクション","settings.section.keychain":"キーチェーン","settings.section.tools":"ツール","settings.section.addons":"アドオン","settings.placeholder.recordings":"録画をフィルター…","settings.placeholder.keyboard":"ショートカットをフィルター…","settings.placeholder.environment":"環境をフィルター…","settings.placeholder.models":"モデルをフィルター…","settings.placeholder.scheduled-tasks":"スケジュールタスクをフィルター…","settings.placeholder.quick-actions":"クイックアクションをフィルター…","settings.placeholder.keychain":"エントリをフィルター…","settings.placeholder.tools":"ツールをフィルター…","settings.placeholder.addons":"アドオンをフィルター…","preview.close":"閉じる","preview.loading":"プレビューを読み込み中…","preview.files":"ファイル","preview.folders":"フォルダ","preview.compressed":"圧縮後","preview.uncompressed":"非圧縮","preview.name":"名前","preview.type":"種類","preview.method":"方式","preview.size":"サイズ","post.deleteMessage":"メッセージを削除","post.tooLarge":"メッセージが大きすぎて表示できません。","post.previewTruncated":"プレビューは切り詰められました。","post.submitted":"送信済み","post.discard":"破棄","post.save":"保存","post.cancel":"キャンセル","post.addNote":"メモを追加","post.addNotePlaceholder":"メモを追加…","tab.close":"閉じる","tab.closeOthers":"他を閉じる","tab.closeAll":"すべて閉じる","tab.reattach":"再アタッチ","tab.openInWindow":"ウィンドウで開く","tab.openInNewTab":"新しいタブで開く","tab.pinned":"ピン留め済み","tab.detached":"分離済み","tab.openSeparateWindow":"別ウィンドウで開く","status.trackedVariables":"追跡中の変数","status.attachToSession":"セッションにアタッチ","status.files":"ファイル","status.proposedDiff":"提案された差分","status.copyTmux":"tmuxコマンドをコピー","status.experimentDuration":"実験の経過時間","status.sinceLastActivity":"最後のアクティビティから","annotator.title":"画像に注釈","annotator.typeLabel":"ラベルを入力…","annotator.undo":"元に戻す","annotator.resetZoom":"ズームをリセット","tree.filter":"フィルター…","tree.sessionTree":"セッションツリー","btw.label":"BTW サイド会話","btw.close":"BTW を閉じる","btw.thinking":"思考中","mdpreview.close":"プレビューを閉じる","mdpreview.unavailable":"プレビューを利用できません","widget.close":"ウィジェットを閉じる","oobe.gettingStarted":"はじめに","oobe.needsSetupTitle":"インスタンスのセットアップが必要","oobe.configuredTitle":"インスタンスは設定済み","oobe.needsSetupBody":"このインスタンスはまだ設定されていません。設定を開き、AIプロバイダー/モデルを設定してリクエストの送信を開始してください。","oobe.configuredBody":"このインスタンスは設定済みのようです。設定でプロバイダーとモデルの設定を確認または更新してください。","oobe.openSettings":"設定を開く","oobe.dismiss":"閉じる","oobe.done":"完了","palette.placeholder":"入力してエージェント、ワークスペース操作、またはスラッシュコマンドにジャンプ…","palette.hideWorkspace":"ワークスペースを非表示","palette.showWorkspace":"ワークスペースを表示","palette.hideWorkspaceDesc":"ワークスペースサイドバーを非表示にします。","palette.showWorkspaceDesc":"ワークスペースサイドバーを表示します。","palette.exitChatOnly":"チャットのみモードを終了","palette.chatOnly":"チャットのみモード","palette.exitChatOnlyDesc":"分割ワークスペースレイアウトに戻ります。","palette.chatOnlyDesc":"チャットのみのレイアウトに切り替えます。","palette.groupAgents":"エージェント","palette.groupWorkspace":"ワークスペース","palette.groupSlash":"スラッシュコマンド","palette.hintMove":"移動","palette.hintSelect":"選択","palette.hintPopOut":"ポップアウト","palette.hintClose":"閉じる","settings.appliedNotice":"設定を適用しました。変更は次のターンから有効になります。","settings.sessions.lifecycle":"セッションのライフサイクル","settings.sessions.autoRotate":"セッションを自動ローテーション","settings.sessions.maxSize":"最大セッションサイズ（MB）","settings.sessions.maxSizeAria":"最大セッションサイズ","settings.sessions.agentBehaviour":"エージェントの動作","settings.sessions.toolBudget":"ツール使用予算","settings.sessions.toolBudgetAria":"ツール使用予算","settings.sessions.toolBudgetHint":"1ターンあたりの最大ツール呼び出しメッセージ数","settings.sessions.isolation":"セッションの分離","settings.sessions.isolationNone":"なし — セッション間で完全に可視","settings.sessions.isolationSummary":"概要 — ツールは可視、引数は非表示","settings.sessions.isolationFull":"完全 — セッション同士は互いに見えない","settings.editor.heading":"エディター","settings.editor.vimMode":"Vim モード","settings.editor.showWhitespace":"空白文字を表示","settings.editor.livePreview":"Markdown ライブプレビュー","settings.editor.fontSize":"フォントサイズ（px）","settings.editor.fontSizeAria":"エディターのフォントサイズ","settings.editor.fontFamily":"フォントファミリー","settings.editor.fontFamilyPlaceholder":"monospace（デフォルト）","settings.editor.localOnlyHint":"このブラウザーのみ。エディターの変更はローカルブラウザーストレージに保存され、次にファイルタブを開くか再読み込みしたときに有効になります。","settings.appearance.syncing":"外観を同期中…","settings.appearance.default":"デフォルト","settings.appearance.autoLightDark":"自動（ライト/ダーク）","settings.appearance.tint":"色調：","settings.appearance.clearTint":"色調をクリア","settings.appearance.none":"なし","settings.keyboard.heading":"キーボード","settings.keyboard.hint1":"アプリ全体のショートカットをカンマ区切りのバインディングとしてカスタマイズします。変更はすぐに反映されます。","settings.keyboard.hint1b":"は閉じる/中止用に予約されており、再割り当てできません。","settings.keyboard.hint2mid":"と入力","settings.keyboard.hint2end":"を入力欄の外で押すとこのペインが開きます。","settings.keyboard.resetAll":"すべてデフォルトにリセット","settings.keyboard.defaultColon":"デフォルト：","settings.keyboard.save":"保存","settings.keyboard.defaultBtn":"デフォルト","settings.keyboard.noMatch":"このフィルターに一致するショートカットはありません。","settings.keyboard.invalidShortcut":"無効なショートカット：{token}。Escape は予約されており、再割り当てできません。","settings.keyboard.saved":"キーボードショートカットを保存しました。","settings.keyboard.resetOne":"キーボードショートカットをデフォルトにリセットしました。","settings.keyboard.resetAllDone":"キーボードショートカットをすべてデフォルトにリセットしました。","settings.workspace.serverApplied":"ワークスペース設定を適用しました。サーバー側の制限は新しいワークスペースリクエストに直ちに反映されます。","settings.workspace.browserApplied":"ブラウザーのワークスペース設定はこのタブで直ちに適用されました。","settings.workspace.access":"アクセス","settings.workspace.enableTerminal":"Web ターミナルを有効化","settings.workspace.allowVnc":"直接 VNC ターゲットを許可","settings.workspace.accessHint":"ターミナルアクセスは直ちに更新されます。直接 VNC ターゲットポリシーは新しい VNC リクエストに適用されます。","settings.workspace.guardrails":"サーバースキャンのガードレール","settings.workspace.maxDepth":"最大ツリー深度","settings.workspace.maxDepthAria":"ワークスペースツリーの最大深度","settings.workspace.maxDepthHintPre":"すべての","settings.workspace.maxDepthHintPost":"リクエストを制限します","settings.workspace.maxEntries":"スキャンあたりの最大エントリ数","settings.workspace.maxEntriesAria":"ワークスペースツリーの最大エントリ数","settings.workspace.maxEntriesHint":"大きすぎるツリー走査を早めに打ち切ります","settings.workspace.thisBrowser":"このブラウザー","settings.workspace.refreshInterval":"更新間隔（秒）","settings.workspace.refreshIntervalAria":"ワークスペース更新間隔","settings.workspace.folderDepth":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthAria":"フォルダプレビューのスキャン深度","settings.workspace.folderDepthHintPre":"","settings.workspace.folderDepthHintPost":"に設定するとフォルダサイズのプレビュースキャンを無効化します","settings.workspace.footerHint":"ルートおよびフォルダ展開のツリー読み込みは浅いままです。フォルダサイズのプレビューは UI で最も深いワークスペーススキャンです。","settings.models.thinkingLevel":"思考レベル","settings.models.noThinking":"現在のモデルは思考をサポートしていません。","settings.models.thinkingLevelLabel":"思考レベル：","settings.models.loading":"モデルを読み込み中…","settings.models.summary":"狭いペインでは、クリッピングを避けるためにモデル名とプロバイダー名が折り返される場合があります。","settings.models.scopedOnly":"スコープ付きモデルのみ","settings.models.scopedCheckboxPre":"Piclaw のモデル一覧に Pi の","settings.models.scopedCheckboxPost":"を使用","settings.models.scopedHintPre":"このピッカーと","settings.models.scopedHintPost":"ツールをフィルタリングします。TUI のモデル選択は変更されません。","settings.models.colModel":"モデル","settings.models.colProvider":"プロバイダー","settings.models.colContext":"コンテキスト","settings.models.colReasoning":"推論","settings.models.noMatch":"「{filter}」に一致するモデルはありません","settings.tools.unavailable":"ツールデータを利用できません。","settings.tools.search":"検索","settings.tools.matchMode":"マッチモード","settings.tools.orMode":"いずれかのキーワード（OR）— 少なくとも1つの検索語に一致","settings.tools.andMode":"すべてのキーワード（AND）— すべての検索語に一致","settings.tools.colEnabled":"有効","settings.tools.colTool":"ツール","settings.tools.colCompact":"コンパクト","settings.tools.colKind":"種類","settings.tools.colSummary":"概要","settings.tools.colSource":"ソース","settings.tools.disableCompaction":"このツールのツール結果コンパクションを無効化","settings.tools.enableCompaction":"このツールのツール結果コンパクションを有効化","settings.tools.noMatch":"「{filter}」に一致するツールはありません","settings.tools.footer":"ツールのアクティベーションはエージェントランタイムが管理します。グループのチェックボックスで折りたたみ/展開でき、「コンパクト」列はツール結果コンパクションの対象可否を制御します。","settings.environment.heading":"環境","settings.environment.introPre":"キーチェーン以外の環境変数のみを表示しています。オーバーライドは拡張機能の KV に保存され、","settings.environment.introPost":"に適用されるため、以降のツール呼び出しに継承されます。","settings.environment.refresh":"更新","settings.environment.addOverride":"オーバーライドを追加","settings.environment.valuePlaceholder":"値","settings.environment.save":"保存","settings.environment.countLine":"{count} 個の変数を表示 • {overrides} 個のオーバーライドが有効 • {keychain} 個のキーチェーン注入変数を非表示","settings.environment.overridden":"KV でオーバーライド","settings.environment.inherited":"プロセス環境から継承","settings.environment.kindOverride":"オーバーライド","settings.environment.kindProcess":"プロセス","settings.environment.clear":"クリア","settings.environment.noMatch":"「{filter}」に一致する環境変数はありません。","settings.environment.refreshedToast":"環境を更新しました。","settings.environment.savedToast":"{name} の環境オーバーライドを保存しました。","settings.environment.clearedToast":"{name} の環境オーバーライドをクリアしました。","settings.quickActions.loading":"読み込み中…","settings.quickActions.heading":"タイムラインクイックアクション","settings.quickActions.intro":"タイムラインのタイプアヘッドに表示するアクションを選択します。エージェントは常に最初に固定され、次にワークスペースコマンド、その次にスラッシュコマンドが表示されます。","settings.quickActions.enableAll":"すべて有効化","settings.quickActions.saving":"保存中…","settings.quickActions.saveApply":"保存して適用","settings.quickActions.workspaceCommands":"ワークスペースコマンド","settings.quickActions.noWorkspaceMatch":"このフィルターに一致するワークスペースコマンドはありません。","settings.quickActions.slashCommands":"スラッシュコマンド","settings.quickActions.slashFallback":"スラッシュコマンド","settings.quickActions.noSlashMatch":"このフィルターに一致するスラッシュコマンドはありません。","settings.quickActions.savingToast":"クイックアクションを保存中…","settings.quickActions.savedToast":"クイックアクションを保存しました。","settings.providers.authApiKey":"API キー","settings.providers.authConfigured":"設定済み","settings.providers.heading":"プロバイダー","settings.providers.tagCustom":"カスタム","settings.providers.logout":"ログアウト","settings.providers.reconfigure":"再設定","settings.providers.setUp":"セットアップ","settings.providers.setupHint":"サインインフローはブラウザーで開きます。狭いペインではセットアップフォームが縦に積み重なってクリッピングを防ぎます。","settings.providers.starting":"開始中…","settings.providers.signInOAuth":"OAuth でサインイン","settings.providers.apiKeyLabel":"API キー","settings.providers.apiKeyPlaceholder":"API キーを入力","settings.providers.save":"保存","settings.providers.configuring":"設定中…","settings.providers.saveConfig":"設定を保存","settings.providers.apiKeyEmpty":"API キーを空にすることはできません。","settings.providers.configuringToast":"{provider} を設定中…","settings.providers.configured":"{provider} を設定しました。","settings.providers.startingOAuth":"{provider} の OAuth を開始中…","settings.providers.oauthOpened":"OAuth ウィンドウを開きました。サインインフローを完了してから、このメッセージを閉じてください。","settings.providers.oauthStarted":"{provider} の OAuth フローを開始しました。チャットを確認してください。","settings.providers.loggingOut":"{provider} をログアウト中…","settings.providers.loggedOut":"{provider} をログアウトしました。再起動が必要な場合があります。","settings.general.identity":"アイデンティティ","settings.general.userLabel":"ユーザー","settings.general.yourName":"あなたの名前","settings.general.agentLabel":"エージェント","settings.general.agentName":"エージェント名","settings.general.notifications":"通知","settings.general.browserNotifications":"ブラウザ通知","settings.general.notifSecureHint":"入力バーの \uD83D\uDD14 ベルボタンで通知を有効/無効にします。Web Push には HTTPS または localhost が必要です。","settings.general.notifInsecureHint":"⚠ 利用不可 — セキュアコンテキスト（HTTPS または localhost）が必要です。SSH トンネルまたは TLS 付きリバースプロキシ経由でアクセスして有効化してください。","settings.general.display":"表示","settings.general.systemMeters":"システムメーター","settings.general.systemMetersHint":"ステータスバーの CPU/メモリ/ネットワークメーター。このブラウザのみ。","settings.general.instanceConfig":"インスタンス設定","settings.general.composeUpload":"作成アップロード（MB）","settings.general.composeUploadAria":"作成アップロード上限","settings.general.composeUploadHint":"チャット/メディア添付","settings.general.workspaceUpload":"ワークスペースアップロード（MB）","settings.general.workspaceUploadAria":"ワークスペースアップロード上限","settings.general.workspaceUploadHint":"デフォルトは 256 MB。チャンクアップロードは最大 1 GB まで許可","settings.general.authentication":"認証","settings.general.widgetToken":"ウィジェット bearer トークン","settings.general.token":"トークン","settings.general.hideToken":"トークンを隠す","settings.general.revealToken":"トークンを表示","settings.general.copyToken":"トークンをコピー","settings.general.copied":"コピーしました","settings.general.regenerating":"再生成中…","settings.general.regenerate":"再生成","settings.general.tokenHintPre":"次の読み取り専用トークン：","settings.general.tokenHintMid":"および","settings.general.tokenHintPost":"。次として使用：","settings.general.tokenHintEnd":"。","settings.general.copyFailed":"ウィジェットトークンをコピーできませんでした。トークンフィールドを選択して手動でコピーしてください。","settings.general.regenConfirm":"ウィジェットトークンを再生成しますか？古いトークンを使用している既存の macOS ウィジェットは更新されなくなります。","settings.general.totpTitle":"TOTP セットアップ QR","settings.general.totpConfiguredHint":"現在の Web ログイン認証システムのシークレット。この QR をスキャンして別の認証デバイスを追加します。","settings.general.totpUnconfiguredHint":"このインスタンスにはまだ TOTP が設定されていないため、セットアップ QR は利用できません。","settings.general.issuer":"発行者","settings.general.label":"ラベル","settings.general.secret":"シークレット","settings.general.avatarUpload":"クリックしてアップロード","settings.developer.heading":"開発者","settings.developer.devMode":"開発者モード","settings.developer.localHint":"このブラウザのみ。開発者モードの切り替えとアドオンカタログのオーバーライドはローカルブラウザストレージに保存されます。","settings.developer.addonSources":"アドオンソース","settings.developer.catalogUrl":"カタログ URL","settings.developer.catalogHint":"プライマリアドオンカタログ URL。空のままにするとデフォルトを使用します","settings.developer.additionalCatalogs":"追加カタログ URL","settings.developer.additionalHint":"プライマリ/デフォルトカタログに加えて取得されます。1 行に 1 つの URL。","settings.developer.repoUrl":"リポジトリ URL","settings.developer.repoHintPre":"git リポジトリを上書き（","settings.developer.repoHintPost":"インストール用）。空のままでデフォルト。","settings.developer.debug":"デバッグ","settings.developer.logSse":"SSE イベントをログ記録","settings.developer.logToolCalls":"ツール呼び出しをログ記録","settings.developer.debugHint":"デバッグフラグは次回のページ再読み込み時に有効になります。","settings.addons.installing":"{slug} をインストール中…","settings.addons.removing":"{slug} を削除中…","settings.addons.installedToast":"アドオンをインストールしました。","settings.addons.removedToast":"アドオンを削除しました。","settings.addons.restarting":"piclaw を再起動中…","settings.addons.restartComplete":"再起動完了 — アドオンを更新しました。","settings.addons.restartTimeout":"バックエンドが時間内に応答しませんでした。ページを手動で再読み込みしてください。","settings.addons.fetching":"アドオンを取得中…","settings.addons.loadFailed":"アドオンを読み込めませんでした。","settings.addons.catalogFromPre":"カタログの取得元：","settings.addons.catalogMerged":"{count} 個のカタログソースをマージしました。","settings.addons.installNote":"Bun によるパッケージ優先インストール。インストール/アンインストール後に再起動が必要です。","settings.addons.failedFetchSingular":"{count} 個のカタログソースの取得に失敗しました：","settings.addons.failedFetchPlural":"{count} 個のカタログソースの取得に失敗しました：","settings.addons.activeSources":"アクティブなカタログソース（{count}）","settings.addons.windowsWarning":"ネイティブ Windows のアドオンインストールはリスクが高くなります：Bun パッケージのインストール、シンボリックリンクのクリーンアップ、ロックされたファイル、再起動のタイミングは、Linux/WSL よりも予測しにくい場合があります。可能であれば WSL またはコンテナを優先してください。","settings.addons.typeExtSkill":"拡張機能 + スキル","settings.addons.typeSkill":"スキル","settings.addons.typeExt":"拡張機能","settings.addons.update":"更新","settings.addons.remove":"削除","settings.addons.install":"インストール","settings.addons.noMatch":"「{filter}」に一致するアドオンはありません","settings.addons.restartNotice":"拡張機能の変更はインストールされましたが、piclaw が再起動するまで非アクティブです。","settings.addons.restartNow":"今すぐ再起動","settings.recordings.modeFull":"完全 / 信頼済み","settings.recordings.modeMetadata":"メタデータのみ","settings.recordings.modeRedacted":"編集済み","settings.recordings.selectPrompt":"録画を選択して検査、再生、エクスポート、または削除します。","settings.recordings.playback":"再生","settings.recordings.refresh":"更新","settings.recordings.delete":"削除","settings.recordings.status":"ステータス","settings.recordings.mode":"モード","settings.recordings.chat":"チャット","settings.recordings.started":"開始","settings.recordings.ended":"終了","settings.recordings.events":"イベント","settings.recordings.redactions":"編集","settings.recordings.exportJson":"JSON をエクスポート","settings.recordings.exportJsonl":"JSONL をエクスポート","settings.recordings.exportHtml":"スタンドアロン HTML をエクスポート","settings.recordings.eventSummary":"イベント概要","settings.recordings.inspectHint":"詳細を開くか更新してトレースイベントを検査します。","settings.recordings.firstEvents":"最初のイベント","settings.recordings.heading":"セッション録画","settings.recordings.intro":"決定論的な再生と画面録画エクスポートのためのオプトイントレースキャプチャ。再生でライブエージェントやツールのエンドポイントを呼び出すことはありません。","settings.recordings.chatJid":"チャット JID","settings.recordings.title":"タイトル","settings.recordings.titlePlaceholder":"デモ録画","settings.recordings.modeLabelField":"モード","settings.recordings.optRedacted":"編集済み","settings.recordings.optMetadata":"メタデータのみ","settings.recordings.optFull":"完全 / 信頼済みローカル","settings.recordings.includeSnapshot":"タイムラインスナップショットを含める","settings.recordings.extraKeys":"追加の編集キー","settings.recordings.extraPatterns":"追加の正規表現パターン","settings.recordings.stopCurrent":"現在のチャット録画を停止","settings.recordings.start":"録画を開始","settings.recordings.redactionPreview":"編集プレビュー","settings.recordings.previewRedaction":"編集をプレビュー","settings.recordings.loading":"録画を読み込み中…","settings.recordings.noneYet":"まだ録画がありません。","settings.recordings.noneYetHint":"上で録画を開始し、再生/エクスポートを使用して決定論的な画面キャプチャを行います。","settings.recordings.listLabel":"セッション録画","settings.recordings.eventsCount":"{count} 件のイベント","settings.recordings.noMatch":"「{filter}」に一致する録画はありません。","settings.recordings.startedToast":"{chat} の録画を開始しました。","settings.recordings.startFailed":"録画の開始に失敗しました。","settings.recordings.stoppedToast":"{chat} の録画を停止しました。","settings.recordings.stopFailed":"録画の停止に失敗しました。","settings.recordings.deleteConfirm":"録画 {id} を削除しますか？","settings.recordings.deletedToast":"録画を削除しました。","settings.recordings.deleteFailed":"録画の削除に失敗しました。","settings.recordings.loadOneFailed":"録画の読み込みに失敗しました。","settings.recordings.loadFailed":"録画の読み込みに失敗しました。","settings.recordings.previewFailed":"プレビューに失敗しました。","settings.keychain.loadFailed":"キーチェーンの読み込みに失敗しました。","settings.keychain.addFailed":"エントリの追加に失敗しました。","settings.keychain.deleteFailed":"エントリの削除に失敗しました。","settings.keychain.saveNotesFailed":"メモの保存に失敗しました。","settings.keychain.revealFailed":"表示に失敗しました。","settings.keychain.loading":"キーチェーンを読み込み中…","settings.keychain.entryCountSingular":"{count} 件のエントリ","settings.keychain.entryCountPlural":"{count} 件のエントリ","settings.keychain.matchingFilter":" 「{filter}」に一致","settings.keychain.encryptedSuffix":"、保存時に暗号化。","settings.keychain.clickPrefix":"クリック","settings.keychain.revealSuffix":"で表示。","settings.keychain.cancel":"キャンセル","settings.keychain.addEntry":"+ エントリを追加","settings.keychain.namePlaceholder":"エントリ名（例：github/my-token）","settings.keychain.secretPlaceholder":"シークレット値","settings.keychain.usernamePlaceholder":"ユーザー名（任意）","settings.keychain.saving":"保存中…","settings.keychain.save":"保存","settings.keychain.userNotePlaceholder":"ユーザーメモ（この UI でのみ表示）","settings.keychain.agentNotePlaceholder":"エージェントメモ（エージェントに公開しても安全）","settings.keychain.noMatchFilter":"フィルターに一致するエントリはありません。","settings.keychain.noEntries":"キーチェーンエントリがありません。","settings.keychain.hideSecret":"シークレットを非表示","settings.keychain.revealSecret":"シークレットを表示","settings.keychain.deleteQ":"削除しますか？","settings.keychain.yes":"はい","settings.keychain.no":"いいえ","settings.keychain.deleteTitle":"削除","settings.keychain.userNote":"ユーザーメモ","settings.keychain.agentNote":"エージェント読み取り可能メモ","settings.keychain.userNoteHint":"人間/UI メモのみ","settings.keychain.agentNoteHint":"エージェント向けの安全なガイダンス","settings.keychain.saveNotes":"メモを保存","settings.keychain.masterPassword":"マスターパスワード：","settings.keychain.masterPasswordPlaceholder":"キーチェーンのマスターパスワードを入力","settings.keychain.unlock":"ロック解除","settings.keychain.totpCode":"TOTP コード：","settings.keychain.verify":"検証","settings.keychain.username":"ユーザー名","settings.keychain.copyUsername":"ユーザー名をコピー","settings.keychain.secret":"シークレット","settings.keychain.copySecret":"シークレットをコピー","settings.tasks.internalProtected":"内部/保護済み","settings.tasks.noRunLogs":"まだ実行ログが記録されていません。","settings.tasks.noSummary":"概要なし","settings.tasks.selectPrompt":"タスクを選択してスケジュール、ステータス、実行履歴を確認します。","settings.tasks.pause":"一時停止","settings.tasks.resume":"再開","settings.tasks.delete":"削除","settings.tasks.status":"ステータス","settings.tasks.kind":"種類","settings.tasks.schedule":"スケジュール","settings.tasks.nextRun":"次回実行","settings.tasks.lastRun":"前回実行","settings.tasks.lastResult":"前回の結果","settings.tasks.chat":"チャット","settings.tasks.model":"モデル","settings.tasks.cwd":"作業ディレクトリ","settings.tasks.timeout":"タイムアウト","settings.tasks.protection":"保護","settings.tasks.protectionHint":"内部タスクの操作には明示的な確認が必要です。","settings.tasks.command":"コマンド","settings.tasks.prompt":"プロンプト","settings.tasks.recentRuns":"最近の実行","settings.tasks.activeLabel":"アクティブ","settings.tasks.pausedLabel":"一時停止","settings.tasks.completedLabel":"完了","settings.tasks.allStatuses":"すべてのステータス","settings.tasks.filterChatPlaceholder":"チャット JID をフィルター…","settings.tasks.refresh":"更新","settings.tasks.loading":"スケジュールタスクを読み込み中…","settings.tasks.noneFound":"スケジュールされたタスクが見つかりません。","settings.tasks.noneFoundHint":"リマインダー、`/tasks`、またはスケジューラツールで作成されたタスクがここに表示されます。","settings.tasks.listLabel":"スケジュールされたタスク","settings.tasks.next":"次回","settings.tasks.last":"前回","settings.tasks.noMatch":"「{filter}」に一致するタスクはありません。","settings.tasks.confirmDelete":"スケジュールタスク {id} を削除しますか？","settings.tasks.confirmPause":"スケジュールタスク {id} を一時停止しますか？","settings.tasks.confirmResume":"スケジュールタスク {id} を再開しますか？","settings.tasks.confirmProtected":"タスク {id} は内部/保護済みです。{action} を続行しますか？","settings.tasks.deleting":"{id} を削除中…","settings.tasks.pausing":"{id} を一時停止中…","settings.tasks.resuming":"{id} を再開中…","settings.tasks.deletedToast":"スケジュールタスク {id} を削除しました。","settings.tasks.pausedToast":"スケジュールタスク {id} を一時停止しました。","settings.tasks.resumedToast":"スケジュールタスク {id} を再開しました。","settings.tasks.actionFailed":"{action} タスクに失敗しました。","settings.tasks.loadFailed":"スケジュールタスクの読み込みに失敗しました。","menu.title":"メニュー","menu.showWorkspace":"ワークスペースを表示","menu.hideWorkspace":"ワークスペースを非表示","menu.openExplorer":"エクスプローラーを開く","menu.chatOnly":"チャットのみモード","menu.exitChatOnly":"チャットのみモードを終了","menu.openTerminal":"ターミナルをタブで開く","menu.openVnc":"VNC をタブで開く","menu.newFile":"新規ファイル","menu.openRecent":"最近のファイルを開く","menu.refreshTree":"ツリーを更新","menu.reindex":"ワークスペースを再インデックス","menu.showHidden":"隠しファイルを表示","menu.hideHidden":"隠しファイルを非表示","menu.scale":"拡大縮小","menu.settings":"設定"},iu={en:Yr,"zh-CN":af,ja:nu},Rn=Cn});function Lr({children:n,className:i=""}){let[_,r]=w(null);return q(()=>{if(typeof document>"u")return;let c=document.createElement("div");return c.className=i||"",document.body.appendChild(c),r(c),()=>{try{Dn(null,c)}finally{c.remove()}}},[]),q(()=>{if(!_)return;_.className=i||"";return},[i,_]),Ti(()=>{if(!_)return;Dn(n,_);return},[n,_]),null}var Cr=O(()=>{e()});function b_(n,i){let _=String(n.label||"").localeCompare(String(i.label||""),void 0,{sensitivity:"base"});if(_!==0)return _;return String(n.id||"").localeCompare(String(i.id||""),void 0,{sensitivity:"base"})}function Jn(n){let i=Vn.findIndex((_)=>_.id===n.id);if(i>=0)Vn[i]=n;else Vn.push(n);Vn.sort(b_)}function Vg(n){let i=Vn.findIndex((_)=>_.id===n);if(i>=0)Vn.splice(i,1)}function Jr(){return[...Vn]}function Xg(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var Vn;var si=O(()=>{Vn=[]});function Vi(n){let i=typeof n==="string"?n.trim():"";return i?i:null}function Or(n={}){if(typeof window>"u")return;let i=Vi(n.section);try{if(window.__piclawSettingsOpenRequested=!0,i)window.__piclawSettingsRequestedSection=i;else delete window.__piclawSettingsRequestedSection}catch(_){console.debug("[settings-dialog-events] failed to record open request flags",_)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:i?{section:i}:void 0}))}function t_(){if(typeof window>"u")return null;return Vi(window.__piclawSettingsRequestedSection)}function Er(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),i=t_();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(_){console.debug("[settings-dialog-events] failed to clear open request flags",_)}return{open:n,section:i}}function Sr(n=typeof window<"u"?window:null){return n||null}function Xi(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function oi(n,i){return`${n}:${i}`}function er(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function mr(n,i){if(n.length<=i)return;n.splice(0,n.length-i)}function Xn(n){if(!n||typeof n!=="object")return null;return{...n}}function Mn(n){if(!n)return null;return Nn.find((i)=>i.id===n)||null}function v_(n,i){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${i}`)}catch(_){console.debug("[app-perf] Ignoring performance.mark failure.",_,{traceId:n,phase:i})}}function ar(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let i=Mn(n);if(!i)return;for(let _ of i.phases)performance.clearMarks(`piclaw:${n}:${_.phase}`)}catch(i){console.debug("[app-perf] Ignoring performance.clearMarks failure.",i,{traceId:n})}}function dr(n,i,_){let r=Qn.get(oi(n,i));if(r&&Mn(r)?.status==="active")$i(r,"cancelled","superseded",{replacementType:n,replacementChatJid:i});let c=er(n),f={id:c,type:n,chatJid:i,startedAt:Xi(),detail:Xn(_),phases:[],status:"active"};return Nn.push(f),mr(Nn,100),Qn.set(oi(n,i),c),v_(c,"start"),c}function $i(n,i,_,r,c){let f=Mn(n);if(!f||f.status!=="active")return;if(_)f.phases.push({phase:_,at:Xi(),detail:Xn(r)}),v_(f.id,_);if(f.status=i,f.completedAt=Xi(),f.durationMs=f.completedAt-f.startedAt,c!==void 0)f.error=c instanceof Error?c.message:String(c);let u=oi(f.type,f.chatJid);if(Qn.get(u)===f.id)Qn.delete(u);ar(f.id)}function $u(n=Sr()){let i=n?.__PICLAW_PERF__;if(i)return i;if(n)n.__PICLAW_PERF__=Ni;return Ni}function On(n=Sr()){return $u(n)}function Mg(n,i,_){return On().ensureTrace(n,i,_)}function qg(n,i){return On().getActiveTraceId(n,i)}function Ag(n,i,_){On().markTrace(n,i,_)}function Zg(n,i,_="settled",r){let c=Mn(n);if(!c||c.status!=="active")return!1;let f=new Set(c.phases.map((u)=>u.phase));if(!i.every((u)=>f.has(u)))return!1;return $i(n,"completed",_,r),!0}function Ig(n,i,_="failed",r){On().failTrace(n,i,_,r)}function Yg(n,i="cancelled",_){On().cancelTrace(n,i,_)}function p_(n){return On().recordRequest(n)}var Nn,gi,Qn,Ni;var nc=O(()=>{Nn=[],gi=[],Qn=new Map;Ni={startTrace(n,i,_){return dr(n,i,_)},ensureTrace(n,i,_){let r=Qn.get(oi(n,i));if(r&&Mn(r)?.status==="active")return r;return dr(n,i,_)},getActiveTraceId(n,i){let _=Qn.get(oi(n,i));return _&&Mn(_)?.status==="active"?_:null},markTrace(n,i,_){let r=Mn(n);if(!r||r.status!=="active")return;r.phases.push({phase:i,at:Xi(),detail:Xn(_)}),v_(r.id,i)},completeTrace(n,i="settled",_){$i(n,"completed",i,_)},failTrace(n,i,_="failed",r){$i(n,"failed",_,r,i)},cancelTrace(n,i="cancelled",_){$i(n,"cancelled",i,_)},recordRequest(n){let i=er("req");return gi.push({...n,id:i,detail:Xn(n.detail)}),mr(gi,300),i},getTraces(){return Nn.map((n)=>({...n,detail:Xn(n.detail),phases:n.phases.map((i)=>({...i,detail:Xn(i.detail)}))}))},getRequests(){return gi.map((n)=>({...n,detail:Xn(n.detail)}))},clear(){Nn.forEach((n)=>ar(n.id)),Nn.splice(0,Nn.length),gi.splice(0,gi.length),Qn.clear()},printSummary(){let n={traces:Ni.getTraces(),requests:Ni.getRequests()};return console.table(n.traces.map((i)=>({id:i.id,type:i.type,chatJid:i.chatJid,status:i.status,durationMs:Number(i.durationMs||0).toFixed(1),lastPhase:i.phases[i.phases.length-1]?.phase||"start"}))),n}}});function En(n){let i=Number(n||0);return Number.isFinite(i)&&i>0?i:null}function ou(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function lu(n){let i=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(i)}function ic(n){let i=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(i)}function _c(n=typeof window<"u"?window:null){let i=En(n?.innerWidth)??En(n?.screen?.availWidth)??En(n?.screen?.width)??0,_=En(n?.innerHeight)??En(n?.screen?.availHeight)??En(n?.screen?.height)??0,r=i&&_?Math.min(i,_):i||_,c=i&&_?Math.max(i,_):i||_,f=ou(n),u=Number(n?.navigator?.maxTouchPoints||0),g=f||u>1;if(r>0&&r<=640)return"mobile";if(lu(n)&&!ic(n))return"mobile";if(ic(n))return"tablet";if(g&&r>0&&r<=1100)return"tablet";if(c>0&&c<=1180&&r>0&&r<=900)return"tablet";return"desktop"}var Ws={};un(Ws,{uploadWorkspaceFile:()=>ts,uploadMedia:()=>Ju,updateWorkspaceFile:()=>os,updateScheduledTask:()=>z_,submitAdaptiveCardAction:()=>Eu,streamSidePrompt:()=>du,stopSessionRecording:()=>W_,stopAutoresearch:()=>Au,steerAgentQueueItem:()=>Du,startSessionRecording:()=>h_,setWorkspaceVisibility:()=>Hs,setAgentThoughtVisibility:()=>mu,sessionRecordingPlaybackUrl:()=>U_,sessionRecordingExportUrl:()=>li,sendPeerAgentMessage:()=>Pu,sendAgentMessage:()=>Hn,searchPosts:()=>ku,saveWorkspaceSettings:()=>X_,saveWebPushSubscription:()=>Vu,saveUiState:()=>T_,saveQuickActionsSettings:()=>V_,savePostAnnotations:()=>hs,saveEnvironmentOverride:()=>Mi,restoreChatBranch:()=>Tu,respondToAgentRequest:()=>Ou,reorderAgentQueueItem:()=>Lu,renameWorkspaceFile:()=>ps,renameChatJid:()=>Gu,renameChatBranch:()=>hu,removeAgentQueueItem:()=>Yu,reindexWorkspace:()=>ss,purgeChatBranch:()=>Uu,pruneChatBranch:()=>ju,previewSessionRecordingRedaction:()=>G_,moveWorkspaceEntry:()=>Ks,mergeChatBranchIntoParent:()=>Wu,getWorkspaceTree:()=>cs,getWorkspaceRawUrl:()=>cc,getWorkspaceIndexStatus:()=>us,getWorkspaceFileStat:()=>$s,getWorkspaceFileDownloadUrl:()=>zs,getWorkspaceFile:()=>gs,getWorkspaceDownloadUrl:()=>Fs,getWorkspaceBranch:()=>fs,getWebPushPublicKey:()=>Ru,getTimeline:()=>yu,getThumbnailUrl:()=>ns,getThread:()=>bu,getSystemMetrics:()=>tu,getSessionRecordings:()=>F_,getSessionRecording:()=>Qi,getScheduledTasks:()=>H_,getQuickActionsSettings:()=>R_,getPostsByHashtag:()=>xu,getMediaUrl:()=>au,getMediaText:()=>_s,getMediaInfo:()=>is,getMediaBlob:()=>rs,getEnvironmentSettings:()=>N_,getChatBranches:()=>Hu,getAutoresearchStatus:()=>qu,getAgents:()=>Nu,getAgentThought:()=>eu,getAgentStatus:()=>Qu,getAgentQueueState:()=>Iu,getAgentModels:()=>Q_,getAgentContext:()=>Mu,getAgentCommands:()=>P_,getActiveChatAgents:()=>Bu,forkChatBranch:()=>zu,dismissAutoresearch:()=>Zu,deleteWorkspaceFile:()=>Bs,deleteWebPushSubscription:()=>Xu,deleteSessionRecording:()=>j_,deletePost:()=>Ku,createWorkspaceFile:()=>vs,createRootChatSession:()=>Fu,createReply:()=>pu,createPost:()=>vu,completeInstanceOobe:()=>Cu,attachWorkspaceFile:()=>ls,addToWhitelist:()=>Su,SSEClient:()=>fc});function Bn(n,i={}){if(String(i.method||"GET").toUpperCase()!=="GET")return Z(n,i);let r=K_.get(n);if(r)return r;let c=Z(n,i).finally(()=>{K_.delete(n)});return K_.set(n,c),c}async function Z(n,i={}){let _=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),r;try{r=await fetch(_n+n,{...i,headers:{"Content-Type":"application/json",...i.headers}})}catch(f){throw p_({method:String(i.method||"GET").toUpperCase(),url:n,startedAt:_,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-_,ok:!1,detail:{failedBeforeResponse:!0}}),f}let c=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-_;if(p_({method:String(i.method||"GET").toUpperCase(),url:n,startedAt:_,durationMs:c,status:r.status,ok:r.ok,requestId:r.headers?.get?.("x-request-id")||null,serverTiming:r.headers?.get?.("Server-Timing")||null}),!r.ok){let f=await r.json().catch(()=>({error:"Unknown error"}));throw Error(f.error||`HTTP ${r.status}`)}return r.json()}function rc(n){let i=String(n||"").split(`
`),_="message",r=[];for(let f of i)if(f.startsWith("event:"))_=f.slice(6).trim()||"message";else if(f.startsWith("data:"))r.push(f.slice(5).trim());let c=r.join(`
`);if(!c)return null;try{return{event:_,data:JSON.parse(c)}}catch{return{event:_,data:c}}}async function wu(n,i){if(!n.body)throw Error("Missing event stream body");let _=n.body.getReader(),r=new TextDecoder,c="";while(!0){let{value:u,done:g}=await _.read();if(g)break;c+=r.decode(u,{stream:!0});let l=c.split(`

`);c=l.pop()||"";for(let $ of l){let k=rc($);if(k)i(k.event,k.data)}}c+=r.decode();let f=rc(c);if(f)i(f.event,f.data)}async function yu(n=10,i=null,_=null){let r=`/timeline?limit=${n}`;if(i)r+=`&before=${i}`;if(_)r+=`&chat_jid=${encodeURIComponent(_)}`;return Bn(r)}async function xu(n,i=50,_=0,r=null){let c=r?`&chat_jid=${encodeURIComponent(r)}`:"";return Z(`/hashtag/${encodeURIComponent(n)}?limit=${i}&offset=${_}${c}`)}async function ku(n,i=50,_=0,r=null,c="current",f=null,u=null){let g=r?`&chat_jid=${encodeURIComponent(r)}`:"",l=c?`&scope=${encodeURIComponent(c)}`:"",$=f?`&root_chat_jid=${encodeURIComponent(f)}`:"",k=u?.images?"&images=1":"",o=u?.attachments?"&attachments=1":"";return Z(`/search?q=${encodeURIComponent(n)}&limit=${i}&offset=${_}${g}${l}${$}${k}${o}`)}async function bu(n,i=null){let _=i?`?chat_jid=${encodeURIComponent(i)}`:"";return Z(`/thread/${n}${_}`)}async function tu(){return Z("/agent/system-metrics")}async function H_(n={}){let i=new URLSearchParams;if(n?.id)i.set("id",String(n.id));if(n?.chatJid)i.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")i.set("status",String(n.status));if(n?.limit)i.set("limit",String(n.limit));if(n?.includeRunLogs)i.set("include_run_logs","1");if(n?.runLogLimit)i.set("run_log_limit",String(n.runLogLimit));let _=i.toString()?`?${i.toString()}`:"";return Z(`/agent/scheduled-tasks${_}`)}async function z_(n,i,_={}){return Z("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:i,allow_internal:_?.allowInternal===!0})})}async function F_(){return Z("/agent/recordings")}async function Qi(n){return Z(`/agent/recordings/${encodeURIComponent(n)}`)}async function h_(n={}){return Z("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function W_(n={}){return Z("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function j_(n){return Z(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function li(n,i="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(i)}`}function U_(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function G_(n,i={}){return Z("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...i})})}async function T_(n){return Z("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function vu(n,i=[],_=null){let r=_?`?chat_jid=${encodeURIComponent(_)}`:"";return Z(`/post${r}`,{method:"POST",body:JSON.stringify({content:n,media_ids:i})})}async function pu(n,i,_=[],r=null){let c=r?`?chat_jid=${encodeURIComponent(r)}`:"";return Z(`/post/reply${c}`,{method:"POST",body:JSON.stringify({thread_id:n,content:i,media_ids:_})})}async function Ku(n,i=!1,_=null){let r=_?`&chat_jid=${encodeURIComponent(_)}`:"",c=`/post/${n}?cascade=${i?"true":"false"}${r}`;return Z(c,{method:"DELETE"})}async function Hn(n,i,_=null,r=[],c=null,f=null){let u=f?`?chat_jid=${encodeURIComponent(f)}`:"",g={content:i,thread_id:_,media_ids:r,client_context:{screen_hint:_c()}};if(c==="auto"||c==="queue"||c==="steer")g.mode=c;return Z(`/agent/${n}/message${u}`,{method:"POST",body:JSON.stringify(g)})}async function P_(n="web:default"){let i=typeof n==="string"&&n.trim()?n.trim():"web:default";return Bn(`/agent/commands?chat_jid=${encodeURIComponent(i)}`)}async function R_(){return Z("/agent/settings/quick-actions")}async function V_(n){return Z("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function X_(n){return Z("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function N_(){return Z("/agent/settings/environment")}async function Mi(n){return Z("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function Bu(){return Z("/agent/active-chats")}async function Hu(n=null,i={}){let _=new URLSearchParams;if(n)_.set("root_chat_jid",String(n));if(i?.includeArchived)_.set("include_archived","1");let r=_.toString()?`?${_.toString()}`:"";return Bn(`/agent/branches${r}`)}async function zu(n,i={}){return Z("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...i?.agentName?{agent_name:i.agentName}:{}})})}async function Fu(n){return Z("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function hu(n,i={}){return Z("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...i&&Object.prototype.hasOwnProperty.call(i,"agentName")?{agent_name:i.agentName}:{}})})}async function Wu(n){return Z("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function ju(n){return Z("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Uu(n){return Z("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Gu(n,i){return Z("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:i})})}async function Tu(n,i={}){return Z("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...i&&Object.prototype.hasOwnProperty.call(i,"agentName")?{agent_name:i.agentName}:{}})})}async function Pu(n,i,_,r="auto",c={}){let f={source_chat_jid:n,content:_,mode:r,...c?.sourceAgentName?{source_agent_name:c.sourceAgentName}:{},...c?.targetBy==="agent_name"?{target_agent_name:i}:{target_chat_jid:i}};return Z("/agent/peer-message",{method:"POST",body:JSON.stringify(f)})}async function Ru(){return Z("/agent/push/vapid-public-key")}async function Vu(n,i={}){let _={subscription:n,...i?.deviceId?{device_id:i.deviceId}:{}};return Z("/agent/push/subscription",{method:"POST",body:JSON.stringify(_)})}async function Xu(n,i={}){let _={subscription:n,...i?.deviceId?{device_id:i.deviceId}:{}};return Z("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(_)})}async function Nu(){return Bn("/agent/roster")}async function Qu(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return Bn(`/agent/status${i}`)}async function Mu(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return Bn(`/agent/context${i}`)}async function qu(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return Bn(`/agent/autoresearch/status${i}`)}async function Au(n=null,i={}){return Z("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:i?.generateReport!==!1})})}async function Zu(n=null){return Z("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function Iu(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return Bn(`/agent/queue-state${i}`)}async function Yu(n,i=null){let _=await fetch(_n+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:i||void 0})});if(!_.ok){let r=await _.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(r.error||`HTTP ${_.status}`)}return _.json()}async function Du(n,i=null){let _=await fetch(_n+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:i||void 0})});if(!_.ok){let r=await _.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(r.error||`HTTP ${_.status}`)}return _.json()}async function Lu(n,i,_=null){let r=await fetch(_n+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:i,chat_jid:_||void 0})});if(!r.ok){let c=await r.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(c.error||`HTTP ${r.status}`)}return r.json()}async function Q_(n=null){let i=n?`?chat_jid=${encodeURIComponent(n)}`:"";return Bn(`/agent/models${i}`)}async function Cu(n="provider-ready"){return Z("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function Ju(n){let i=new FormData;i.append("file",n);let _=await fetch(_n+"/media/upload",{method:"POST",body:i});if(!_.ok){let r=await _.json().catch(()=>({error:"Upload failed"}));throw Error(r.error||`HTTP ${_.status}`)}return _.json()}async function Ou(n,i,_=null){let r=await fetch(_n+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:i,chat_jid:_||void 0})});if(!r.ok){let c=await r.json().catch(()=>({error:"Failed to respond"}));throw Error(c.error||`HTTP ${r.status}`)}return r.json()}async function Eu(n){let i=await fetch(_n+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok){let _=await i.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(_.error||`HTTP ${i.status}`)}return i.json()}async function du(n,i={}){let _=await fetch(_n+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:i.systemPrompt||void 0,chat_jid:i.chatJid||void 0}),signal:i.signal});if(!_.ok){let f=await _.json().catch(()=>({error:"Side prompt failed"}));throw Error(f.error||`HTTP ${_.status}`)}let r=null,c=null;if(await wu(_,(f,u)=>{if(i.onEvent?.(f,u),f==="side_prompt_thinking_delta")i.onThinkingDelta?.(u?.delta||"");else if(f==="side_prompt_text_delta")i.onTextDelta?.(u?.delta||"");else if(f==="side_prompt_done")r=u;else if(f==="side_prompt_error")c=u}),c){let f=Error(c?.error||"Side prompt failed");throw f.payload=c,f}return r}async function Su(n,i){let _=await fetch(_n+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:i})});if(!_.ok){let r=await _.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(r.error||`HTTP ${_.status}`)}return _.json()}async function eu(n,i="thought"){let _=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(i)}`;return Z(_)}async function mu(n,i,_){return Z("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:i,expanded:Boolean(_)})})}function au(n){return`${_n}/media/${n}`}function ns(n){return`${_n}/media/${n}/thumbnail`}async function is(n){let i=await fetch(`${_n}/media/${n}/info`);if(!i.ok)throw Error("Failed to get media info");return i.json()}async function _s(n){let i=await fetch(`${_n}/media/${n}`);if(!i.ok)throw Error("Failed to load media text");return i.text()}async function rs(n){let i=await fetch(`${_n}/media/${n}`);if(!i.ok)throw Error("Failed to load media blob");return i.blob()}async function cs(n="",i=2,_=!1){let r=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${i}&show_hidden=${_?"1":"0"}`;return Z(r)}async function fs(n=""){let i=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return Z(i)}async function us(n="all"){let i=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return Z(i)}async function ss(n="all"){return Z("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function gs(n,i=20000,_=null){let r=_?`&mode=${encodeURIComponent(_)}`:"",c=`/workspace/file?path=${encodeURIComponent(n)}&max=${i}${r}`;return Z(c)}async function $s(n){return Z(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function os(n,i){return Z("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:i})})}async function ls(n){return Z("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function ys(n,i="",_={}){let r=new URLSearchParams;if(i)r.set("path",i);if(_.overwrite)r.set("overwrite","1");let c=r.toString();return c?`${n}?${c}`:n}function xs(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function ks(n,i,_,r){return new Promise((c,f)=>{let u=new XMLHttpRequest;u.open("POST",_n+i);for(let[g,l]of Object.entries(_||{}))if(l!==void 0&&l!==null)u.setRequestHeader(g,String(l));u.upload.onprogress=(g)=>{if(typeof r==="function")r({loaded:g.lengthComputable?g.loaded:0,total:g.lengthComputable?g.total:n.size,lengthComputable:g.lengthComputable})},u.onload=()=>{try{let g=u.responseText?JSON.parse(u.responseText):{};if(u.status>=200&&u.status<300)c(g);else{let l=Error(g.error||`HTTP ${u.status}`);l.status=u.status,l.code=g.code,f(l)}}catch{let g=Error(`HTTP ${u.status}`);g.status=u.status,f(g)}},u.onerror=()=>f(Error("Upload failed (network error)")),u.ontimeout=()=>f(Error("Upload timed out")),u.send(n)})}async function bs(n,i="",_={}){let r=xs(),c=ys("/workspace/upload-chunk",i,_),f=Math.max(1,Math.min(B_,Number(_.chunkSize)||ws)),u=Math.max(0,Number(n?.size)||0),g=Math.max(1,Math.ceil(u/f)),l=0,$=null;for(let k=0;k<g;k+=1){let o=k*f,b=Math.min(u,o+f),p=n.slice(o,b),K=p.size;if($=await ks(p,c,{"X-Upload-Id":r,"X-Chunk-Index":k,"X-Chunk-Total":g,"X-File-Name":n?.name||"upload.bin","X-File-Size":u},(t)=>{if(typeof _.onProgress!=="function")return;let z=Math.min(u,l+(t?.loaded||0)),y=u||1;_.onProgress({loaded:z,total:y,percent:Math.round(z/y*100),chunkIndex:k,chunkTotal:g})}),l+=K,typeof _.onProgress==="function"){let t=u||1,z=u?l:t;_.onProgress({loaded:z,total:t,percent:Math.round(z/t*100),chunkIndex:k+1,chunkTotal:g})}}return $}async function ts(n,i="",_={}){if(n?.size>B_){let r=(n.size/1048576).toFixed(0),c=(B_/1048576).toFixed(0),f=Error(`File too large (${r} MB). Maximum upload size is ${c} MB.`);throw f.code="file_too_large",f}return await bs(n,i,_)}async function vs(n,i,_=""){let r=await fetch(_n+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:i,content:_})});if(!r.ok){let c=await r.json().catch(()=>({error:"Create failed"})),f=Error(c.error||`HTTP ${r.status}`);throw f.status=r.status,f.code=c.code,f}return r.json()}async function ps(n,i){let _=await fetch(_n+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:i})});if(!_.ok){let r=await _.json().catch(()=>({error:"Rename failed"})),c=Error(r.error||`HTTP ${_.status}`);throw c.status=_.status,c.code=r.code,c}return _.json()}async function Ks(n,i){let _=await fetch(_n+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:i})});if(!_.ok){let r=await _.json().catch(()=>({error:"Move failed"})),c=Error(r.error||`HTTP ${_.status}`);throw c.status=_.status,c.code=r.code,c}return _.json()}async function Bs(n){let i=`/workspace/file?path=${encodeURIComponent(n||"")}`;return Z(i,{method:"DELETE"})}async function Hs(n,i=!1){return Z("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(i)})})}function cc(n,i={}){let _=new URLSearchParams({path:String(n||"")});if(i.download)_.set("download","1");return`${_n}/workspace/raw?${_.toString()}`}function zs(n){return cc(n,{download:!0})}function Fs(n,i=!1){let _=`path=${encodeURIComponent(n||"")}&show_hidden=${i?"1":"0"}`;return`${_n}/workspace/download?${_}`}class fc{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,i,_={}){this.onEvent=n,this.onStatusChange=i,this.chatJid=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(_n+"/sse/stream"+n);let i=(_)=>{this.eventSource.addEventListener(_,(r)=>{this.markActivity(),this.onEvent(_,JSON.parse(r.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),i("new_post"),i("new_reply"),i("agent_response"),i("interaction_updated"),i("interaction_deleted"),i("agent_status"),i("agent_steer_queued"),i("agent_followup_queued"),i("agent_followup_consumed"),i("agent_followup_removed"),i("workspace_update"),i("agent_draft"),i("agent_draft_delta"),i("agent_thought"),i("agent_thought_delta"),i("model_changed"),i("ui_theme"),i("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(i)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,i=60000,_=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,_+i),this.reconnectAttempts=0;let r=Math.max(this.cooldownUntil-_,0),c=Math.max(this.reconnectDelay,r);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},c),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}async function hs(n,i,_){let r=_?`?chat_jid=${encodeURIComponent(_)}`:"";return Z(`/post/${n}/annotations${r}`,{method:"PATCH",body:JSON.stringify({annotations:i})})}var _n="",K_,B_=1073741824,ws=8388608;var zn=O(()=>{nc();K_=new Map});function Us(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(Ai,{detail:{enabled:Boolean(n)}}))}function gc(n){if(typeof fetch!=="function")return;T_({ui_meters:n}).catch((i)=>{console.debug("[meters] Failed to persist meters UI state.",i)})}function Gs(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(js,{detail:{collapsed:Boolean(n)}}))}function M_(n=!1){return w_(uc,n)}function dg(n=!1){return w_(sc,n)}function qi(n,i={}){let _=i.persist!==!1,r=i.persistServer!==!1,c=Boolean(n);if(_)gn(uc,c?"true":"false");if(r)gc({enabled:c});return Us(c),c}function Ts(n,i={}){let _=i.persist!==!1,r=i.persistServer!==!1,c=Boolean(n);if(_)gn(sc,c?"true":"false");if(r)gc({collapsed:c});return Gs(c),c}function Sg(n){let i=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")qi(Boolean(n.enabled),{persistServer:!1});else if(i==="toggle"){let _=!M_(!1);qi(_,{persistServer:!1})}if(typeof n?.collapsed==="boolean")Ts(Boolean(n.collapsed),{persistServer:!1})}var uc="piclaw_system_meters_enabled",sc="piclaw_system_meters_collapsed",Ai="piclaw-meters-change",js="piclaw-meters-collapsed-change";var $c=O(()=>{zn()});function oc(n,i){if(n===""||n===null||n===void 0)return i;let _=Number(n);return Number.isFinite(_)?_:i}function lc(n,{min:i=-1/0,max:_=1/0}={}){let r=Number.isFinite(Number(i))?Number(i):-1/0,c=Number.isFinite(Number(_))?Number(_):1/0;return Math.min(c,Math.max(r,Number(n)))}function dn(n,{fallback:i=0,min:_=-1/0,max:r=1/0}={}){let c=oc(n,i);return lc(c,{min:_,max:r})}function Ps(n,{direction:i=1,step:_=1,fallback:r=0,min:c=-1/0,max:f=1/0}={}){let u=dn(n,{fallback:r,min:c,max:f}),g=Math.abs(oc(_,1))||1,l=Number(i)<0?-1:1;return lc(u+l*g,{min:c,max:f})}function nn({value:n,min:i,max:_,step:r=1,fallback:c,width:f="80px",disabled:u=!1,label:g,onChange:l}){let $=Number.isFinite(Number(c))?Number(c):dn(n,{fallback:0,min:i,max:_}),[k,o]=w(String(n??$)),b=J(!1);q(()=>{if(!b.current)o(String(n??$))},[n,$]);let p=j((t)=>{b.current=!1;let z=dn(t,{fallback:$,min:i,max:_});o(String(z)),l?.(z)},[$,i,_,l]),K=j((t)=>{b.current=!1;let z=Ps(n,{direction:t,step:r,fallback:$,min:i,max:_});o(String(z)),l?.(z)},[$,_,i,l,r,n]);return s`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${g||"value"}`}
                title=${`Decrease ${g||"value"}`}
                disabled=${u}
                onClick=${()=>K(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${k}
                disabled=${u}
                style=${`width:${f}`}
                onInput=${(t)=>{b.current=!0,o(t.target.value)}}
                onBlur=${(t)=>p(t.target.value)}
                onKeyDown=${(t)=>{if(t.key==="Enter")t.preventDefault(),p(t.target.value),t.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${g||"value"}`}
                title=${`Increase ${g||"value"}`}
                disabled=${u}
                onClick=${()=>K(1)}
            >+</button>
        </span>
    `}var Sn=O(()=>{e()});function wc(n){let i=String(n||"").trim();if(!i)return"";if(i.startsWith("http://")||i.startsWith("https://")||i.startsWith("data:")||i.startsWith("blob:"))return i;if(i.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(i.slice(11))}`;if(i.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(i))return"";if(i.startsWith("\\\\"))return"";if(i.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(i.replace(/^\.\//,""))}`}function yc({value:n,onChange:i}){let{t:_}=L(),r=J(null),[c,f]=w(wc(n));q(()=>{f(wc(n))},[n]);let u=j((g)=>{let l=g.target.files?.[0];if(!l)return;let $=new FileReader;$.onload=()=>{let k=$.result;f(k),i?.(k)},$.readAsDataURL(l)},[i]);return s`
        <div class="settings-avatar-inline" onClick=${()=>r.current?.click()} title=${_("settings.general.avatarUpload")}>
            ${c?s`<img src=${c} alt="avatar" />`:s`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${r} style="display:none" onChange=${u} />
        </div>
    `}function xc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function Rs(n,i={}){let _=typeof n==="string"?n:"";if(!_)return!1;let r=i.navigator??(typeof navigator<"u"?navigator:null),c=i.document??(typeof document<"u"?document:null);if(r?.clipboard?.writeText)try{return await r.clipboard.writeText(_),!0}catch(f){}try{if(!c?.body||typeof c.createElement!=="function"||typeof c.execCommand!=="function")return!1;let f=c.createElement("textarea");f.value=_,f.setAttribute?.("readonly",""),f.style.position="fixed",f.style.left="-9999px",f.style.top="0",f.style.opacity="0",c.body.appendChild(f),f.focus?.(),f.select?.();let u=Boolean(c.execCommand("copy"));return c.body.removeChild(f),u}catch(f){return!1}}function q_({settingsData:n,setStatus:i,mergeSettingsData:_}){let{t:r}=L(),[c,f]=w(""),[u,g]=w(""),[l,$]=w(""),[k,o]=w(""),[b,p]=w(32),[K,t]=w(256),[z,y]=w(""),[v,R]=w(!1),[G,h]=w(!1),[T,H]=w(!1),[P,V]=w(()=>M_(!1)),[x,U]=w(!1),F=J(""),N=J(null),Y=J(!0);q(()=>{return Y.current=!0,()=>{Y.current=!1}},[]);let B=j((M)=>{let X=xc(M);f(X.userName),g(X.userAvatar),$(X.assistantName),o(X.assistantAvatar),p(X.composeUploadLimitMb),t(X.workspaceUploadLimitMb),y(M?.widgetToken||""),F.current=JSON.stringify(X)},[]);q(()=>{B(n||{})},[n,B]),q(()=>{let M=(X)=>{V(Boolean(X?.detail?.enabled))};return window.addEventListener(Ai,M),()=>window.removeEventListener(Ai,M)},[]);let A=C(()=>JSON.stringify(xc({userName:c,userAvatar:u,assistantName:l,assistantAvatar:k,composeUploadLimitMb:b,workspaceUploadLimitMb:K})),[c,u,l,k,b,K]);q(()=>{if(A===F.current)return;if(N.current)clearTimeout(N.current);return N.current=setTimeout(async()=>{if(!Y.current)return;let M=document.activeElement;if(M&&M.closest?.(".settings-number-stepper"))return;try{let X=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:A}),on=await X.json().catch(()=>({}));if(!Y.current)return;if(!X.ok||!on?.ok||!on?.settings)return;F.current=A,_?.(on.settings),U(!0),setTimeout(()=>{if(Y.current)U(!1)},4000)}catch(X){console.warn("[settings/general] Failed to persist general settings snapshot.",X)}},800),()=>{if(N.current)clearTimeout(N.current)}},[A,_]);let D=n?.instanceTotp||{configured:!1,issuer:l||"Piclaw",label:c?`${l||"Piclaw"}:${c}`:l||"Piclaw",secret:"",otpauth:"",qrSvg:""},rn=j(async()=>{if(!z)return;if(await Rs(z))h(!0),setTimeout(()=>{if(Y.current)h(!1)},3000);else i?.(r("settings.general.copyFailed")),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[z,i]),E=j(async()=>{if(T)return;if(!confirm(r("settings.general.regenConfirm")))return;H(!0);try{let M=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),X=await M.json().catch(()=>({}));if(!M.ok||!X?.ok||!X?.settings)throw Error(X?.error||"Failed to regenerate widget token.");y(X.settings.widgetToken||""),_?.(X.settings),U(!0),setTimeout(()=>{if(Y.current)U(!1)},4000)}catch(M){console.warn("[settings/general] Failed to regenerate widget token.",M)}finally{if(Y.current)H(!1)}},[T,_]),$n=typeof window<"u"&&window.isSecureContext,xn=z?"•".repeat(Math.min(Math.max(z.length,16),48)):"—",Wn=v?z||"—":xn;return s`
        <div class="settings-section">
            ${x&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${r("settings.appliedNotice")}
                </div>
            `}
            <h3>${r("settings.general.identity")}</h3>
            <div class="settings-row">
                <label>${r("settings.general.userLabel")}</label>
                <${yc} value=${u} onChange=${g} />
                <input type="text" value=${c} onInput=${(M)=>f(M.target.value)} placeholder=${r("settings.general.yourName")} />
            </div>
            <div class="settings-row">
                <label>${r("settings.general.agentLabel")}</label>
                <${yc} value=${k} onChange=${o} />
                <input type="text" value=${l} onInput=${(M)=>$(M.target.value)} placeholder=${r("settings.general.agentName")} />
            </div>

            <h3 style="margin-top:20px">${r("settings.general.notifications")}</h3>
            ${$n?s`
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
                    <input type="checkbox" checked=${P}
                        onChange=${()=>{let M=qi(!P);V(M)}} />
                    <span class="settings-hint" style="margin:0">${r("settings.general.systemMetersHint")}</span>
                </div>
            </div>

            <h3 style="margin-top:20px">${r("settings.general.instanceConfig")}</h3>
            <div class="settings-row">
                <label>${r("settings.general.composeUpload")}</label>
                <${nn}
                    label=${r("settings.general.composeUploadAria")}
                    value=${b}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${p}
                />
                <span class="settings-hint" style="margin:0">${r("settings.general.composeUploadHint")}</span>
            </div>
            <div class="settings-row">
                <label>${r("settings.general.workspaceUpload")}</label>
                <${nn}
                    label=${r("settings.general.workspaceUploadAria")}
                    value=${K}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${t}
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
                        <button class=${`settings-keychain-reveal-btn${v?" active":""}`}
                            type="button"
                            onClick=${()=>R((M)=>!M)}
                            disabled=${!z}
                            title=${v?r("settings.general.hideToken"):r("settings.general.revealToken")}>
                            ${v?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${rn} disabled=${!z} title=${r("settings.general.copyToken")}>
                            ${G?s`<span class="settings-widget-token-copied">${r("settings.general.copied")}</span>`:s`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
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
                            ${D.configured?r("settings.general.totpConfiguredHint"):r("settings.general.totpUnconfiguredHint")}
                        </div>
                    </div>
                </div>
                ${D.configured?s`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:D.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>${r("settings.general.issuer")}</label>
                                <input type="text" readonly value=${D.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>${r("settings.general.label")}</label>
                                <input type="text" readonly value=${D.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>${r("settings.general.secret")}</label>
                                <input type="text" readonly value=${D.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var kc=O(()=>{e();$c();Sn();cn()});var tc={};un(tc,{SessionsSection:()=>Vs});function bc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function Vs({settingsData:n,setStatus:i,mergeSettingsData:_}){let{t:r}=L(),[c,f]=w(!0),[u,g]=w(16),[l,$]=w(4000),[k,o]=w(3),[b,p]=w(64),[K,t]=w("none"),[z,y]=w(!1),v=J(""),R=J(null),G=J(!0);q(()=>{return G.current=!0,()=>{G.current=!1}},[]);let h=j((H)=>{let P=bc(H);f(P.sessionAutoRotate),g(P.sessionMaxSizeMb),$(P.sessionMaxLines),o(P.sessionMaxCompactions),p(P.toolUseBudget),t(P.sessionIsolation),v.current=JSON.stringify(P)},[]);q(()=>{h(n||{})},[n,h]);let T=C(()=>JSON.stringify(bc({sessionAutoRotate:c,sessionMaxSizeMb:u,sessionMaxLines:l,sessionMaxCompactions:k,toolUseBudget:b,sessionIsolation:K})),[c,u,l,k,b,K]);return q(()=>{if(T===v.current)return;if(R.current)clearTimeout(R.current);return R.current=setTimeout(async()=>{if(!G.current)return;let H=document.activeElement;if(H&&H.closest?.(".settings-number-stepper"))return;try{let P=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:T}),V=await P.json().catch(()=>({}));if(!G.current)return;if(!P.ok||!V?.ok||!V?.settings)return;v.current=T,_?.(V.settings),y(!0),setTimeout(()=>{if(G.current)y(!1)},4000)}catch(P){console.warn("[settings/sessions] Failed to persist session settings.",P)}},800),()=>{if(R.current)clearTimeout(R.current)}},[T,_]),s`
        <div class="settings-section">
            ${z&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${r("settings.appliedNotice")}
                </div>
            `}
            <h3>${r("settings.sessions.lifecycle")}</h3>
            <div class="settings-row">
                <label>${r("settings.sessions.autoRotate")}</label>
                <input type="checkbox" checked=${c} onChange=${(H)=>f(H.target.checked)} />
            </div>
            <div class="settings-row">
                <label>${r("settings.sessions.maxSize")}</label>
                <${nn}
                    label=${r("settings.sessions.maxSizeAria")}
                    value=${u}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${g}
                />
            </div>

            <h3 style="margin-top:20px">${r("settings.sessions.agentBehaviour")}</h3>
            <div class="settings-row">
                <label>${r("settings.sessions.toolBudget")}</label>
                <${nn}
                    label=${r("settings.sessions.toolBudgetAria")}
                    value=${b}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${p}
                />
                <span class="settings-hint" style="margin:0">${r("settings.sessions.toolBudgetHint")}</span>
            </div>
            <div class="settings-row">
                <label>${r("settings.sessions.isolation")}</label>
                <select value=${K} onChange=${(H)=>t(H.target.value)}>
                    <option value="none">${r("settings.sessions.isolationNone")}</option>
                    <option value="summary">${r("settings.sessions.isolationSummary")}</option>
                    <option value="full">${r("settings.sessions.isolationFull")}</option>
                </select>
            </div>
        </div>
    `}var vc=O(()=>{e();Sn();cn()});var pc={};un(pc,{__recordingsSettingsTest:()=>Ms,RecordingsSection:()=>Qs});function Ii(n){if(!n)return"—";let i=new Date(n);if(Number.isNaN(i.getTime()))return n;return i.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function A_(n){if(n==="full")return bn("settings.recordings.modeFull");if(n==="metadata")return bn("settings.recordings.modeMetadata");return bn("settings.recordings.modeRedacted")}function Zi({children:n,type:i="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${i}`}>${n}</span>`}function Xs(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function wi(n){return String(n||"").split(`
`).map((i)=>i.trim()).filter(Boolean)}function Ns({recording:n,details:i,onDelete:_,onRefresh:r}){let{t:c}=L();if(!n)return s`<div class="settings-task-detail-empty">${c("settings.recordings.selectPrompt")}</div>`;let f=i?.meta||n,u=Array.isArray(i?.events)?i.events:[],g=u.reduce(($,k)=>$+(Array.isArray(k.redactions)?k.redactions.length:0),0),l=u.reduce(($,k)=>{let o=k.kind||"event";return $[o]=($[o]||0)+1,$},{});return s`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${f.title||f.id}</h4>
                    <code>${f.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(U_(f.id),"_blank","noopener,noreferrer")}>${c("settings.recordings.playback")}</button>
                    <button onClick=${r}>${c("settings.recordings.refresh")}</button>
                    <button class="danger" onClick=${()=>_(f)}>${c("settings.recordings.delete")}</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>${c("settings.recordings.status")}</span><strong>${f.status||"—"}</strong>
                <span>${c("settings.recordings.mode")}</span><strong>${A_(f.mode)}</strong>
                <span>${c("settings.recordings.chat")}</span><code>${f.chatJid||"—"}</code>
                <span>${c("settings.recordings.started")}</span><strong>${Ii(f.startedAt)}</strong>
                <span>${c("settings.recordings.ended")}</span><strong>${Ii(f.endedAt)}</strong>
                <span>${c("settings.recordings.events")}</span><strong>${f.eventCount??u.length}</strong>
                <span>${c("settings.recordings.redactions")}</span><strong>${g}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${li(f.id,"json")}>${c("settings.recordings.exportJson")}</a>
                <a href=${li(f.id,"jsonl")}>${c("settings.recordings.exportJsonl")}</a>
                <a href=${li(f.id,"html")}>${c("settings.recordings.exportHtml")}</a>
            </div>
            <h4>${c("settings.recordings.eventSummary")}</h4>
            ${u.length===0&&s`<p class="settings-hint">${c("settings.recordings.inspectHint")}</p>`}
            ${u.length>0&&s`
                <div class="settings-recording-event-summary">
                    ${Object.entries(l).map(([$,k])=>s`<${Zi}>${$}: ${k}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>${c("settings.recordings.firstEvents")}</strong>
                    <pre>${JSON.stringify(u.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function Qs({filter:n="",setStatus:i}){let{t:_}=L(),[r,c]=w([]),[f,u]=w([]),[g,l]=w(!0),[$,k]=w(null),[o,b]=w(null),[p,K]=w(null),[t,z]=w(!1),[y,v]=w(Xs),[R,G]=w(""),[h,T]=w("redacted"),[H,P]=w(!0),[V,x]=w(""),[U,F]=w(""),[N,Y]=w('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[B,A]=w(null);q(()=>{let Q=(m)=>{let sn=String(m?.detail?.chatJid||"").trim();if(sn)v(sn)};return window.addEventListener("piclaw:current-chat-changed",Q),()=>window.removeEventListener("piclaw:current-chat-changed",Q)},[]);let D=j(async(Q=o)=>{l(!0),k(null);try{let m=await F_(),sn=m.recordings||[];c(sn),u(m.active||[]);let vn=sn.find((W)=>W.id===Q)||sn[0]||null;if(b(vn?.id||null),vn?.id)K(await Qi(vn.id));else K(null)}catch(m){k(m?.message||_("settings.recordings.loadFailed"))}finally{l(!1)}},[o]);q(()=>{D()},[D]);let rn=C(()=>r.find((Q)=>Q.id===o)||null,[r,o]),E=C(()=>f.find((Q)=>Q.chatJid===y)||null,[f,y]),$n=String(n||"").trim().toLowerCase(),xn=C(()=>{if(!$n)return r;return r.filter((Q)=>[Q.id,Q.title,Q.chatJid,Q.status,Q.mode].some((m)=>String(m||"").toLowerCase().includes($n)))},[r,$n]),Wn=j(async(Q)=>{if(b(Q?.id||null),K(null),!Q?.id)return;try{K(await Qi(Q.id))}catch(m){i?.(m?.message||_("settings.recordings.loadOneFailed"),"error")}},[i]),M=j(async()=>{if(t)return;z(!0);try{let Q={keys:wi(V),patterns:wi(U)},m=await h_({chat_jid:y,title:R||void 0,mode:h,include_timeline_snapshot:H,timeline_snapshot_limit:80,redaction:Q});i?.(_("settings.recordings.startedToast",{chat:y}),"success"),await D(m?.recording?.id)}catch(Q){i?.(Q?.message||_("settings.recordings.startFailed"),"error")}finally{z(!1)}},[t,y,V,U,H,D,h,i,R]),X=j(async(Q=E)=>{if(!Q||t)return;z(!0);try{let m=await W_({id:Q.id});i?.(_("settings.recordings.stoppedToast",{chat:Q.chatJid}),"success"),await D(m?.recording?.id)}catch(m){i?.(m?.message||_("settings.recordings.stopFailed"),"error")}finally{z(!1)}},[t,E,D,i]),on=j(async(Q)=>{if(!Q||t)return;if(!window.confirm(_("settings.recordings.deleteConfirm",{id:Q.id})+`

${Q.title||""}`))return;z(!0);try{await j_(Q.id),i?.(_("settings.recordings.deletedToast"),"success"),await D(null)}catch(m){i?.(m?.message||_("settings.recordings.deleteFailed"),"error")}finally{z(!1)}},[t,D,i]),vi=j(async()=>{try{let Q=JSON.parse(N||"null"),m=await G_(Q,{mode:h,redaction:{keys:wi(V),patterns:wi(U)}});A(m.preview)}catch(Q){A({error:Q?.message||_("settings.recordings.previewFailed")})}},[V,U,h,N]);return s`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>${_("settings.recordings.heading")}</h3>
                <p class="settings-hint">${_("settings.recordings.intro")}</p>
                <div class="settings-recording-form-grid">
                    <label>${_("settings.recordings.chatJid")}<input value=${y} onInput=${(Q)=>v(Q.target.value)} /></label>
                    <label>${_("settings.recordings.title")}<input placeholder=${_("settings.recordings.titlePlaceholder")} value=${R} onInput=${(Q)=>G(Q.target.value)} /></label>
                    <label>${_("settings.recordings.modeLabelField")}<select value=${h} onChange=${(Q)=>T(Q.target.value)}><option value="redacted">${_("settings.recordings.optRedacted")}</option><option value="metadata">${_("settings.recordings.optMetadata")}</option><option value="full">${_("settings.recordings.optFull")}</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${H} onChange=${(Q)=>P(Q.target.checked)} /> ${_("settings.recordings.includeSnapshot")}</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>${_("settings.recordings.extraKeys")}<textarea rows="2" placeholder="customer_id\ninternal_code" value=${V} onInput=${(Q)=>x(Q.target.value)} /></label>
                    <label>${_("settings.recordings.extraPatterns")}<textarea rows="2" placeholder="ACME-[0-9]+" value=${U} onInput=${(Q)=>F(Q.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${E?s`<button onClick=${()=>X(E)} disabled=${t}>${_("settings.recordings.stopCurrent")}</button>`:s`<button onClick=${M} disabled=${t}>${_("settings.recordings.start")}</button>`}
                    <button onClick=${()=>D()} disabled=${g}>${_("settings.recordings.refresh")}</button>
                </div>
                ${f.length>0&&s`<div class="settings-recording-active-row">${f.map((Q)=>s`<${Zi} type="active">REC ${Q.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>${_("settings.recordings.redactionPreview")}</summary>
                <textarea rows="4" value=${N} onInput=${(Q)=>Y(Q.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${vi}>${_("settings.recordings.previewRedaction")}</button></div>
                ${B&&s`<pre>${JSON.stringify(B,null,2)}</pre>`}
            </details>

            ${g&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>${_("settings.recordings.loading")}</span></div>`}
            ${$&&s`<div class="settings-error-state">${$}</div>`}
            ${!g&&!$&&r.length===0&&s`<div class="settings-empty-state"><strong>${_("settings.recordings.noneYet")}</strong><p>${_("settings.recordings.noneYetHint")}</p></div>`}
            ${!g&&!$&&r.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label=${_("settings.recordings.listLabel")}>
                        ${xn.map((Q)=>s`
                            <button class=${`settings-task-row ${Q.id===o?"active":""}`} onClick=${()=>Wn(Q)}>
                                <span class="settings-task-row-main"><strong>${Q.title||Q.id}</strong><span>${Q.chatJid} · ${Ii(Q.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${Zi} type=${Q.status==="recording"?"active":"completed"}>${Q.status}<//><${Zi}>${A_(Q.mode)}<//></span>
                                <span class="settings-task-row-times">${_("settings.recordings.eventsCount",{count:Q.eventCount||0})}</span>
                            </button>
                        `)}
                        ${xn.length===0&&s`<p class="settings-hint">${_("settings.recordings.noMatch",{filter:n})}</p>`}
                    </div>
                    <${Ns} recording=${rn} details=${p} onDelete=${on} onRefresh=${()=>rn&&Wn(rn)} />
                </div>
            `}
        </div>
    `}var Ms;var Kc=O(()=>{e();cn();zn();Ms={formatDateTime:Ii,modeLabel:A_,parseList:wi}});var Bc={};un(Bc,{CompactionSection:()=>As});function qs(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),toolResultSemanticSummaryEnabled:Boolean(n.toolResultSemanticSummaryEnabled??!0),toolResultSemanticSummaryMaxInputChars:n.toolResultSemanticSummaryMaxInputChars??12000,toolResultSemanticSummaryMaxTokens:n.toolResultSemanticSummaryMaxTokens??320,toolResultSemanticSummaryTimeoutSec:n.toolResultSemanticSummaryTimeoutSec??12,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function Z_(n){let i=String(n||"").trim();if(!i)return"—";let _=new Date(i);if(Number.isNaN(_.getTime()))return i;return _.toLocaleString()}function As({settingsData:n,setStatus:i,mergeSettingsData:_}){let[r,c]=w(180),[f,u]=w(15),[g,l]=w(360),[$,k]=w(75),[o,b]=w(0.5),[p,K]=w(!0),[t,z]=w(!0),[y,v]=w(12000),[R,G]=w(320),[h,T]=w(12),[H,P]=w(!1),[V,x]=w(120),[U,F]=w([]),[N,Y]=w([]),[B,A]=w(!1),D=J(""),rn=J(null),E=J(!0);q(()=>{return E.current=!0,()=>{E.current=!1}},[]);let $n=j((M)=>{let X=qs(M);c(X.compactionTimeoutSec),u(X.compactionBackoffBaseMin),l(X.compactionBackoffMaxMin),k(X.compactionThresholdPercent),b(X.compactionBackoffDecayFactor),K(X.toolResultCompactionEnabled),z(X.toolResultSemanticSummaryEnabled),v(X.toolResultSemanticSummaryMaxInputChars),G(X.toolResultSemanticSummaryMaxTokens),T(X.toolResultSemanticSummaryTimeoutSec),P(X.progressWatchdogEnabled),x(X.progressWatchdogTimeoutSec),F(X.compactionBackoffs),Y(X.progressWatchdogPhases),D.current=JSON.stringify({compactionTimeoutSec:X.compactionTimeoutSec,compactionBackoffBaseMin:X.compactionBackoffBaseMin,compactionBackoffMaxMin:X.compactionBackoffMaxMin,compactionThresholdPercent:X.compactionThresholdPercent,compactionBackoffDecayFactor:X.compactionBackoffDecayFactor,toolResultCompactionEnabled:X.toolResultCompactionEnabled,toolResultSemanticSummaryEnabled:X.toolResultSemanticSummaryEnabled,toolResultSemanticSummaryMaxInputChars:X.toolResultSemanticSummaryMaxInputChars,toolResultSemanticSummaryMaxTokens:X.toolResultSemanticSummaryMaxTokens,toolResultSemanticSummaryTimeoutSec:X.toolResultSemanticSummaryTimeoutSec,progressWatchdogEnabled:X.progressWatchdogEnabled,progressWatchdogTimeoutSec:X.progressWatchdogTimeoutSec})},[]);q(()=>{$n(n||{})},[n,$n]);let xn=C(()=>JSON.stringify({compactionTimeoutSec:r,compactionBackoffBaseMin:f,compactionBackoffMaxMin:g,compactionThresholdPercent:$,compactionBackoffDecayFactor:o,toolResultCompactionEnabled:p,toolResultSemanticSummaryEnabled:t,toolResultSemanticSummaryMaxInputChars:y,toolResultSemanticSummaryMaxTokens:R,toolResultSemanticSummaryTimeoutSec:h,progressWatchdogEnabled:H,progressWatchdogTimeoutSec:V}),[r,f,g,$,o,p,t,y,R,h,H,V]);q(()=>{if(xn===D.current)return;if(rn.current)clearTimeout(rn.current);return rn.current=setTimeout(async()=>{if(!E.current)return;try{i?.("Saving compaction settings…","info");let M=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:xn}),X=await M.json().catch(()=>({}));if(!E.current)return;if(!M.ok||!X?.ok||!X?.settings){i?.(X?.error||"Failed to save compaction settings.","error");return}D.current=xn,_?.(X.settings),$n({...n||{},...X.settings||{}}),i?.("Compaction settings saved.","success"),A(!0),setTimeout(()=>{if(E.current)A(!1),i?.(null)},4000)}catch(M){if(console.warn("[settings/compaction] Failed to persist compaction settings.",M),E.current)i?.("Failed to save compaction settings.","error")}},800),()=>{if(rn.current)clearTimeout(rn.current)}},[xn,_,i,$n,n]);let Wn=j(async(M)=>{try{i?.(`Clearing compaction suppression for ${M}…`,"info");let X=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:M})}),on=await X.json().catch(()=>({}));if(!X.ok||!on?.ok||!on?.settings){i?.(on?.error||"Failed to clear compaction suppression.","error");return}_?.(on.settings),$n({...n||{},...on.settings||{}}),i?.(`Cleared compaction suppression for ${M}.`,"success")}catch(X){console.warn("[settings/compaction] Failed to clear compaction suppression.",X),i?.("Failed to clear compaction suppression.","error")}},[$n,_,i,n]);return s`
        <div class="settings-section">
            ${B&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Enable tool-result compaction</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${p} onChange=${(M)=>K(Boolean(M.target.checked))} />
                    <span class="settings-hint" style="margin:0">When disabled, large tool results stay inline and are not externalized into searchable tool-output handles.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Semantic summaries for compacted tool results</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${t} onChange=${(M)=>z(Boolean(M.target.checked))} />
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
                    disabled=${!t}
                    onChange=${v}
                />
                <span class="settings-hint" style="margin:0">Maximum characters sampled from full tool output for semantic summarization.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary output max tokens</label>
                <${nn}
                    label="semantic summary max tokens"
                    value=${R}
                    min=${64}
                    max=${4096}
                    fallback=${320}
                    width="90px"
                    disabled=${!t}
                    onChange=${G}
                />
                <span class="settings-hint" style="margin:0">Upper bound for generated summary length.</span>
            </div>
            <div class="settings-row">
                <label>Semantic summary timeout (sec)</label>
                <${nn}
                    label="semantic summary timeout"
                    value=${h}
                    min=${1}
                    max=${300}
                    fallback=${12}
                    width="90px"
                    disabled=${!t}
                    onChange=${T}
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
                    onChange=${k}
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
                    value=${f}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${u}
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
                    onChange=${(M)=>b(M/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${H} onChange=${(M)=>P(Boolean(M.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${nn}
                    label="watchdog timeout"
                    value=${V}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!H}
                    onChange=${x}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${U.length===0?s`
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
                            ${U.map((M)=>s`
                                <tr>
                                    <td><code>${M.chatJid}</code></td>
                                    <td>${M.failureCount}</td>
                                    <td>${Z_(M.backoffUntil)}</td>
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
                            ${N.map((M)=>s`
                                <tr>
                                    <td><code>${M.chatJid}</code></td>
                                    <td>${M.phase}</td>
                                    <td>${Z_(M.startedAt)}</td>
                                    <td>${Z_(M.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var Hc=O(()=>{e();Sn()});function Fc(n){let i=String(n||"").trim().toLowerCase();if(!i)return null;let _=Ys[i]||i;if(/^f(?:[1-9]|1[0-2])$/.test(_))return _;if(Ds.has(_))return _;if(_.length===1)return _;if(/^[a-z0-9]+$/.test(_))return _;return null}function en(n){let i=String(n||"").trim();if(!i)return null;let _=i.split("+").map((f)=>f.trim()).filter(Boolean);if(!_.length)return null;let r={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let f of _){let u=f.toLowerCase(),g=Is[u];if(g){r[g]=!0;continue}if(r.key)return null;let l=Fc(f);if(!l||l==="escape")return null;r.key=l}if(!r.key)return null;let c=[];if(r.ctrl)c.push("ctrl");if(r.meta)c.push("meta");if(r.alt)c.push("alt");if(r.shift)c.push("shift");return c.push(r.key),c.join("+")}function hc(n){return String(n||"").split(/[\n,]/).map((i)=>en(i)).filter((i)=>Boolean(i))}function Tn(n){return n.join(", ")}function Y_(){let n=qr(zc);if(!n||typeof n!=="object")return{};let i={};for(let _ of yi){let r=n[_.id];if(!Array.isArray(r))continue;let c=r.map((f)=>en(String(f||""))).filter((f)=>Boolean(f));i[_.id]=[...new Set(c)]}return i}function I_(n){if(gn(zc,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function Wc(n){return Zs.get(n)}function xi(n){let i=Y_()[n];if(Array.isArray(i))return i;return[...Wc(n).defaultBindings]}function jc(n,i){let _=Y_(),r=Wc(n).defaultBindings,c=[...new Set(i.map((f)=>en(f)).filter((f)=>Boolean(f)))];if(c.length===r.length&&c.every((f,u)=>f===r[u]))delete _[n];else _[n]=c;I_(_)}function D_(n){if(!n){I_({});return}let i=Y_();delete i[n],I_(i)}function Yi(){let n={};for(let i of yi)n[i.id]=xi(i.id);return n}function Ls(n){let i=typeof n==="string"?n:"";if(!i)return"";if(i.length===1)return i.toLowerCase();return Fc(i)||i.toLowerCase()}function Cs(n){let i=en(n);if(!i)return null;let _={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let r of i.split("+")){if(r==="ctrl"||r==="meta"||r==="alt"||r==="shift"){_[r]=!0;continue}_.key=r}return _.key?_:null}function Js(n,i){let _=Cs(i);if(!_)return!1;if(Ls(n?.key)!==_.key)return!1;let c=!_.shift&&_.key.length===1&&/[^a-z0-9]/i.test(_.key);return Boolean(n?.ctrlKey)===_.ctrl&&Boolean(n?.metaKey)===_.meta&&Boolean(n?.altKey)===_.alt&&(c||Boolean(n?.shiftKey)===_.shift)}function x$(n,i){return xi(i).some((_)=>Js(n,_))}var zc="piclaw_keyboard_shortcuts_v1",yi,Zs,Is,Ys,Ds;var Uc=O(()=>{yi=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],Zs=new Map(yi.map((n)=>[n.id,n])),Is={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},Ys={esc:"escape",return:"enter",spacebar:"space"},Ds=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var Gc={};un(Gc,{KeyboardSection:()=>Es});function Os(n,i,_){let r=String(n||"").trim().toLowerCase();if(!r)return!0;return[i.label,i.description,_,...i.defaultBindings||[]].some((c)=>String(c||"").toLowerCase().includes(r))}function Es({filter:n="",setStatus:i}){let{t:_}=L(),[r,c]=w(()=>{let $=Yi();return Object.fromEntries(Object.entries($).map(([k,o])=>[k,Tn(o)]))});q(()=>{let $=()=>{let k=Yi();c(Object.fromEntries(Object.entries(k).map(([o,b])=>[o,Tn(b)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",$),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",$)},[]);let f=C(()=>yi.filter(($)=>{let k=String(r[$.id]||"");return Os(n,$,k)}),[r,n]),u=($)=>{let k=String(r[$]||"").trim(),b=(k?k.split(/[\n,]/).map((K)=>K.trim()).filter(Boolean):[]).filter((K)=>!en(K));if(b.length>0){i?.(_("settings.keyboard.invalidShortcut",{token:b[0]}),"error");return}let p=hc(k);jc($,p),c((K)=>({...K,[$]:Tn(xi($))})),i?.(_("settings.keyboard.saved"),"success")},g=($)=>{D_($),c((k)=>({...k,[$]:Tn(xi($))})),i?.(_("settings.keyboard.resetOne"),"success")},l=()=>{D_();let $=Yi();c(Object.fromEntries(Object.entries($).map(([k,o])=>[k,Tn(o)]))),i?.(_("settings.keyboard.resetAllDone"),"success")};return s`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${l}>${_("settings.keyboard.resetAll")}</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${f.map(($)=>s`
                    <div class="settings-shortcut-card" key=${$.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${$.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${$.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">${_("settings.keyboard.defaultColon")} <code style="font-size:13px;">${Tn($.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${r[$.id]||""}
                                placeholder=${Tn($.defaultBindings)}
                                onInput=${(k)=>c((o)=>({...o,[$.id]:k.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>u($.id)}>${_("settings.keyboard.save")}</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>g($.id)}>${_("settings.keyboard.defaultBtn")}</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${f.length===0&&s`<div class="settings-hint">${_("settings.keyboard.noMatch")}</div>`}
            </div>
        </div>
    `}var Tc=O(()=>{e();Uc();cn()});function Vc(n,i=L_){let _=Number(n);if(!Number.isFinite(_))return i;return Math.min(300,Math.max(15,Math.round(_)))}function Xc(n,i=C_){let _=Number(n);if(!Number.isFinite(_))return i;return Math.min(8,Math.max(0,Math.round(_)))}function J_(){return{refreshIntervalSec:Vc(y_(Pc,L_),L_),folderPreviewDepth:Xc(y_(Rc,C_),C_)}}function Nc(n={}){let i=J_(),_={refreshIntervalSec:Vc(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:i.refreshIntervalSec,i.refreshIntervalSec),folderPreviewDepth:Xc(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:i.folderPreviewDepth,i.folderPreviewDepth)};if(gn(Pc,String(_.refreshIntervalSec)),gn(Rc,String(_.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(ds,{detail:{settings:_}}));return _}var ds="piclaw:workspace-client-settings-updated",Pc="workspaceRefreshIntervalSec",Rc="workspaceFolderPreviewDepth",L_=60,C_=3;var Qc=()=>{};var qc={};un(qc,{WorkspaceSection:()=>Ss});function Mc(n={}){let i=n.workspaceSettings||{};return{webTerminalEnabled:i.webTerminalEnabled!==!1,vncAllowDirect:i.vncAllowDirect!==!1,treeMaxDepth:i.treeMaxDepth??4,treeMaxEntries:i.treeMaxEntries??5000}}function Ss({settingsData:n,setStatus:i,mergeSettingsData:_}){let{t:r}=L(),[c,f]=w(!0),[u,g]=w(!0),[l,$]=w(4),[k,o]=w(5000),[b,p]=w(60),[K,t]=w(3),[z,y]=w(!1),[v,R]=w(!1),G=J(""),h=J(null),T=J(null),H=J(null),P=J(!0);q(()=>{return P.current=!0,()=>{if(P.current=!1,h.current)clearTimeout(h.current);if(T.current)clearTimeout(T.current);if(H.current)clearTimeout(H.current)}},[]);let V=j((F)=>{let N=Mc(F),Y=J_();f(N.webTerminalEnabled),g(N.vncAllowDirect),$(N.treeMaxDepth),o(N.treeMaxEntries),p(Y.refreshIntervalSec),t(Y.folderPreviewDepth),G.current=JSON.stringify(N)},[]);q(()=>{V(n||{})},[n,V]);let x=C(()=>JSON.stringify(Mc({workspaceSettings:{webTerminalEnabled:c,vncAllowDirect:u,treeMaxDepth:l,treeMaxEntries:k}})),[c,u,l,k]);q(()=>{if(x===G.current)return;if(h.current)clearTimeout(h.current);return h.current=setTimeout(async()=>{if(!P.current)return;let F=document.activeElement;if(F&&F.closest?.(".settings-number-stepper"))return;try{let N=await X_(JSON.parse(x));if(!P.current||!N?.ok||!N?.settings)return;if(G.current=x,_?.({workspaceSettings:N.settings}),i?.(null),y(!0),T.current)clearTimeout(T.current);T.current=setTimeout(()=>{if(P.current)y(!1)},4000)}catch(N){i?.(String(N?.message||N),"error")}},800),()=>{if(h.current)clearTimeout(h.current)}},[x,_,i]);let U=j((F)=>{let N=Nc(F);if(p(N.refreshIntervalSec),t(N.folderPreviewDepth),R(!0),H.current)clearTimeout(H.current);H.current=setTimeout(()=>{if(P.current)R(!1)},3000)},[]);return s`
        <div class="settings-section">
            ${z&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${r("settings.workspace.serverApplied")}
                </div>
            `}
            ${v&&s`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    ${r("settings.workspace.browserApplied")}
                </div>
            `}

            <h3>${r("settings.workspace.access")}</h3>
            <div class="settings-row">
                <label>${r("settings.workspace.enableTerminal")}</label>
                <input type="checkbox" checked=${c} onChange=${(F)=>f(F.target.checked)} />
            </div>
            <div class="settings-row">
                <label>${r("settings.workspace.allowVnc")}</label>
                <input type="checkbox" checked=${u} onChange=${(F)=>g(F.target.checked)} />
            </div>
            <p class="settings-hint">${r("settings.workspace.accessHint")}</p>

            <h3 style="margin-top:20px">${r("settings.workspace.guardrails")}</h3>
            <div class="settings-row">
                <label>${r("settings.workspace.maxDepth")}</label>
                <${nn}
                    label=${r("settings.workspace.maxDepthAria")}
                    value=${l}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${$}
                />
                <span class="settings-hint" style="margin:0">${r("settings.workspace.maxDepthHintPre")} <code>/workspace/tree</code> ${r("settings.workspace.maxDepthHintPost")}</span>
            </div>
            <div class="settings-row">
                <label>${r("settings.workspace.maxEntries")}</label>
                <${nn}
                    label=${r("settings.workspace.maxEntriesAria")}
                    value=${k}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${o}
                />
                <span class="settings-hint" style="margin:0">${r("settings.workspace.maxEntriesHint")}</span>
            </div>

            <h3 style="margin-top:20px">${r("settings.workspace.thisBrowser")}</h3>
            <div class="settings-row">
                <label>${r("settings.workspace.refreshInterval")}</label>
                <${nn}
                    label=${r("settings.workspace.refreshIntervalAria")}
                    value=${b}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(F)=>U({refreshIntervalSec:F})}
                />
            </div>
            <div class="settings-row">
                <label>${r("settings.workspace.folderDepth")}</label>
                <${nn}
                    label=${r("settings.workspace.folderDepthAria")}
                    value=${K}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(F)=>U({folderPreviewDepth:F})}
                />
                <span class="settings-hint" style="margin:0">${r("settings.workspace.folderDepthHintPre")} <code>0</code> ${r("settings.workspace.folderDepthHintPost")}</span>
            </div>
            <p class="settings-hint">${r("settings.workspace.footerHint")}</p>
        </div>
    `}var Ac=O(()=>{e();zn();Qc();Sn();cn()});var Zc={};un(Zc,{EnvironmentSection:()=>es});function O_(n={}){let i=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(i.variables)?i.variables:[],overrides:i.overrides&&typeof i.overrides==="object"?i.overrides:{},count:Number(i.count||0),overrideCount:Number(i.overrideCount||0),keychainEnvNames:Array.isArray(i.keychainEnvNames)?i.keychainEnvNames:[]}}function es({settingsData:n,filter:i="",setStatus:_,mergeSettingsData:r}){let{t:c}=L(),[f,u]=w(()=>O_(n||{})),[g,l]=w({}),[$,k]=w(""),[o,b]=w(""),[p,K]=w(null);q(()=>{u(O_(n||{})),l({})},[n]);let t=j((h)=>{let T=O_({environmentSettings:h?.settings||h});return u(T),r?.({environmentSettings:T}),l({}),T},[r]),z=j(async()=>{try{let h=await N_();if(h?.ok)t(h.settings);_?.(c("settings.environment.refreshedToast"),"info")}catch(h){_?.(String(h?.message||h),"error")}},[t,_]),y=j(async(h,T)=>{let H=String(h||"").trim();if(!H)return;K(H);try{let P=await Mi({action:"set",name:H,value:String(T??"")});if(P?.ok)t(P.settings);if(_?.(c("settings.environment.savedToast",{name:H}),"info"),H===$.trim())k(""),b("")}catch(P){_?.(String(P?.message||P),"error")}finally{K(null)}},[t,$,_]),v=j(async(h)=>{let T=String(h||"").trim();if(!T)return;K(T);try{let H=await Mi({action:"clear",name:T});if(H?.ok)t(H.settings);_?.(c("settings.environment.clearedToast",{name:T}),"info")}catch(H){_?.(String(H?.message||H),"error")}finally{K(null)}},[t,_]),R=C(()=>{let h=String(i||"").trim().toLowerCase(),T=Array.isArray(f.variables)?f.variables:[];if(!h)return T;return T.filter((H)=>{return`${H?.name||""} ${H?.value||""} ${H?.source||""}`.toLowerCase().includes(h)})},[f.variables,i]),G=j((h,T)=>{l((H)=>({...H||{},[h]:T}))},[]);return s`
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
                        onInput=${(h)=>k(h.target.value)}
                    />
                    <input
                        type="text"
                        value=${o}
                        placeholder=${c("settings.environment.valuePlaceholder")}
                        spellcheck="false"
                        onInput=${(h)=>b(h.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!$.trim()||p===$.trim()}
                        onClick=${()=>y($,o)}
                    >${c("settings.environment.save")}</button>
                </div>
            </div>

            <p class="settings-hint">
                ${c("settings.environment.countLine",{count:f.count,overrides:f.overrideCount,keychain:f.keychainEnvNames.length})}
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${R.map((h)=>{let T=String(h?.name||""),H=Object.prototype.hasOwnProperty.call(g,T)?g[T]:h.value,P=H!==h.value,V=p===T;return s`
                        <div class="settings-tool-row" key=${T} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${T}>${T}</span>
                            <input
                                type="text"
                                value=${H}
                                spellcheck="false"
                                onInput=${(x)=>G(T,x.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${h.overridden?c("settings.environment.overridden"):c("settings.environment.inherited")}>
                                ${h.overridden?c("settings.environment.kindOverride"):c("settings.environment.kindProcess")}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${V||!P} onClick=${()=>y(T,H)}>${c("settings.environment.save")}</button>
                                <button type="button" disabled=${V||!h.overridden} onClick=${()=>v(T)}>${c("settings.environment.clear")}</button>
                            </span>
                        </div>
                    `})}
                ${R.length===0&&s`<p class="settings-hint">${c("settings.environment.noMatch",{filter:i})}</p>`}
            </div>
        </div>
    `}var Ic=O(()=>{e();zn();cn()});var Yc={};un(Yc,{ProvidersSection:()=>as});function ms(n){switch(n){case"oauth":return"OAuth";case"api_key":return bn("settings.providers.authApiKey");case"custom":return bn("settings.providers.authConfigured");default:return bn("settings.providers.authConfigured")}}function as({providers:n,setStatus:i}){let{t:_}=L(),[r,c]=w(null),[f,u]=w(null),[g,l]=w({}),$=j((y,v)=>{l((R)=>({...R,[y]:v}))},[]),k=j(async(y)=>{let v=(g.apiKey||"").trim();if(!v){i?.(_("settings.providers.apiKeyEmpty"),"error");return}c(y),i?.(_("settings.providers.configuringToast",{provider:y}),"info");try{let R=JSON.stringify({provider:y,method:"api_key",api_key:v}),G=await Hn("default",`/login __step2 ${R}`,null,[]);if(G?.command?.status==="error"){i?.(G.command.message,"error");return}i?.(G?.command?.message||_("settings.providers.configured",{provider:y}),"success"),u(null),l({})}catch(R){i?.(String(R.message||R),"error")}finally{c(null)}},[g,i]),o=j(async(y,v)=>{c(y),i?.(_("settings.providers.configuringToast",{provider:y}),"info");try{let R={provider:y,method:"custom"};for(let T of v.customFields||[])R[T.key]=(g[T.key]||"").trim();let G=JSON.stringify(R),h=await Hn("default",`/login __step2 ${G}`,null,[]);if(h?.command?.status==="error"){i?.(h.command.message,"error");return}i?.(h?.command?.message||_("settings.providers.configured",{provider:y}),"success"),u(null),l({})}catch(R){i?.(String(R.message||R),"error")}finally{c(null)}},[g,i]),b=j(async(y)=>{c(y),i?.(_("settings.providers.startingOAuth",{provider:y}),"info");try{let v=JSON.stringify({provider:y}),G=(await Hn("default",`/login __step1 ${v}`,null,[]))?.command?.message||"";if(G.includes("http")){let h=G.match(/(https?:\/\/[^\s)]+)/);if(h)window.open(h[1],"_blank","noopener"),i?.(_("settings.providers.oauthOpened"),"success");else i?.(G,"success")}else i?.(G||_("settings.providers.oauthStarted",{provider:y}),"success")}catch(v){i?.(String(v.message||v),"error")}finally{c(null)}},[i]),p=j(async(y)=>{if(r)return;c(y),i?.(_("settings.providers.loggingOut",{provider:y}),"info");try{await Hn("default",`/logout ${y}`,null,[]),i?.(_("settings.providers.loggedOut",{provider:y}),"success")}catch(v){i?.(String(v.message||v),"error")}finally{c(null)}},[r,i]),K=n||[],t=(y)=>f===y,z=(y)=>{u((v)=>v===y?null:y),l({})};return s`
        <div class="settings-section">
            <h3>${_("settings.providers.heading")}</h3>
            <div class="settings-provider-list">
                ${K.map((y)=>s`
                    <div class=${`settings-provider-card${y.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!y.configured&&z(y.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${y.name}</strong>
                                <span class="settings-provider-id">${y.id}</span>
                                ${y.configured&&s`<span class="settings-tag settings-tag-skill">${ms(y.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${y.hasOAuth&&s`<span class="settings-tag">OAuth</span>`}
                                ${y.hasApiKey&&s`<span class="settings-tag">API Key</span>`}
                                ${y.isCustom&&s`<span class="settings-tag">${_("settings.providers.tagCustom")}</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${y.configured?s`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${r===y.id} onClick=${(v)=>{v.stopPropagation(),p(y.id)}}
                                    >${r===y.id?"…":_("settings.providers.logout")}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${r===y.id} onClick=${(v)=>{v.stopPropagation(),z(y.id)}}
                                    >${_("settings.providers.reconfigure")}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${r===y.id} onClick=${(v)=>{v.stopPropagation(),z(y.id)}}
                                    >${_("settings.providers.setUp")}</button>
                                `}
                            </div>
                        </div>

                        ${t(y.id)&&s`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">${_("settings.providers.setupHint")}</p>
                                ${y.hasOAuth&&s`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${r===y.id}
                                            onClick=${()=>b(y.id)}>
                                            ${r===y.id?_("settings.providers.starting"):_("settings.providers.signInOAuth")}
                                        </button>
                                    </div>
                                `}
                                ${y.hasApiKey&&s`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>${_("settings.providers.apiKeyLabel")}</label>
                                            <input type="password" value=${g.apiKey||""}
                                                onInput=${(v)=>$("apiKey",v.target.value)}
                                                placeholder=${y.apiKeyHint||_("settings.providers.apiKeyPlaceholder")} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${r===y.id||!(g.apiKey||"").trim()}
                                                onClick=${()=>k(y.id)}>
                                                ${r===y.id?"…":_("settings.providers.save")}
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
                                                    onInput=${(R)=>$(v.key,R.target.value)}
                                                    placeholder=${v.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${r===y.id}
                                                onClick=${()=>o(y.id,y)}>
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
    `}var Dc=O(()=>{e();zn();cn()});var Lc={};un(Lc,{ModelsSection:()=>c0});function _0(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function r0({thinkingLevel:n,supportsThinking:i,provider:_,availableLevels:r,onSetLevel:c,disabled:f}){let{t:u}=L(),g=_0(_)?n0:i0,l=r&&r.length>1?r:["off","minimal","low","medium","high"],$=Math.max(0,l.indexOf(n??"off"));if(!i)return s`<div class="settings-thinking-slider"><label>${u("settings.models.thinkingLevel")}</label><p class="settings-hint" style="margin:4px 0 0">${u("settings.models.noThinking")}</p></div>`;return s`
        <div class="settings-thinking-slider">
            <label>${u("settings.models.thinkingLevelLabel")} <strong>${g[l[$]]||l[$]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${l.length-1} step="1" value=${$} disabled=${f}
                    onInput=${(k)=>c(l[parseInt(k.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${l.map((k,o)=>s`<span class=${o===$?"active":""} onClick=${()=>!f&&c(k)}>${g[k]||k}</span>`)}
                </div>
            </div>
        </div>
    `}function c0({filter:n=""}){let{t:i}=L(),[_,r]=w(null),[c,f]=w(!1),[u,g]=w("off"),[l,$]=w(!1),[k,o]=w(["off"]),[b,p]=w(!1),[K,t]=w(!1),[z,y]=w(!1),v=j(async()=>{let F=await Q_();if(r(F),F.thinking_level)g(F.thinking_level);if($(Boolean(F.supports_thinking)),p(Boolean(F.scoped_models_only)),Array.isArray(F.available_thinking_levels)&&F.available_thinking_levels.length>0)o(F.available_thinking_levels);return F},[]);q(()=>{v().catch((F)=>{console.warn("[settings/models] Failed to load models.",F),r({models:[],model_options:[]})})},[]);let R=j(async(F)=>{if(c)return;f(!0);try{await Hn("default",`/model ${F}`,null,[]),await v()}catch(N){console.error("Failed to switch model:",N)}finally{f(!1)}},[c,v]),G=j(async(F)=>{if(K)return;t(!0),p(Boolean(F));try{let N=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scopedModelsOnly:Boolean(F)})}),Y=await N.json().catch(()=>({}));if(!N.ok||!Y?.ok)throw Error(Y?.error||"Failed to save scoped model setting.");await v()}catch(N){console.error("Failed to set scoped model filtering:",N),await v().catch((Y)=>{console.warn("[settings/models] Reload after scoped model filtering failure failed.",Y)})}finally{t(!1)}},[K,v]),h=j(async(F)=>{if(z)return;y(!0),g(F);try{let N=await Hn("default",`/thinking ${F}`,null,[]);if(N?.command?.thinking_level)g(N.command.thinking_level);$(N?.command?.supports_thinking!==!1),await v()}catch(N){console.error("Failed to set thinking:",N),await v().catch((Y)=>{console.warn("[settings/models] Reload after thinking change failure failed.",Y)})}finally{y(!1)}},[z,v]);if(!_)return s`<div class="settings-loading">${i("settings.models.loading")}</div>`;let T=_.model_options||[],H=_.current,V=T.find((F)=>F.label===H)?.provider||"",x=n.toLowerCase(),U=x?T.filter((F)=>F.label.toLowerCase().includes(x)||(F.provider||"").toLowerCase().includes(x)):T;return s`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">${i("settings.models.summary")}</div>
            <div class="settings-row" style="padding:0 0 10px 0; align-items:flex-start">
                <label>${i("settings.models.scopedOnly")}</label>
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0">
                    <label style="display:flex; align-items:center; gap:8px; font-weight:500">
                        <input type="checkbox" checked=${b} disabled=${K} onChange=${(F)=>G(F.target.checked)} />
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
                        ${U.map((F)=>s`
                            <tr class=${F.label===H?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${F.label===H} disabled=${c} onChange=${()=>R(F.label)} /></td>
                                <td>${F.name||F.label}</td><td>${F.provider}</td>
                                <td>${F.context_window?(F.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${F.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${U.length===0&&s`<tr><td colspan="5" class="settings-empty">${i("settings.models.noMatch",{filter:n})}</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${r0}
                    thinkingLevel=${u}
                    supportsThinking=${l}
                    provider=${V}
                    availableLevels=${k}
                    onSetLevel=${h}
                    disabled=${z||c} />
            </div>
        </div>
    `}var n0,i0;var Cc=O(()=>{e();zn();cn();n0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},i0={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function S_(n){let i=String(n||"").trim().toLowerCase();if(!i)return"default";if(i==="solarized-dark"||i==="solarized-light")return"solarized";if(i==="github-dark"||i==="github-light")return"github";if(i==="tokyo-night")return"tokyo";return i}function dc(n){if(!n)return null;let i=String(n).trim();if(!i)return null;let _=i.startsWith("#")?i.slice(1):i;if(!/^[0-9a-fA-F]{3}$/.test(_)&&!/^[0-9a-fA-F]{6}$/.test(_))return null;let r=_.length===3?_.split("").map((f)=>f+f).join(""):_,c=parseInt(r,16);return{r:c>>16&255,g:c>>8&255,b:c&255,hex:`#${r.toLowerCase()}`}}function u0(n,i){try{if(document.body){n.style.display="none",document.body.appendChild(n);let _=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),_}}catch{return i}return i}function s0(n){if(!n||typeof document>"u")return null;let i=String(n).trim();if(!i)return null;let _=document.createElement("div");if(_.style.color="",_.style.color=i,!_.style.color)return null;let c=u0(_,_.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!c)return null;let f=parseInt(c[1],10),u=parseInt(c[2],10),g=parseInt(c[3],10);if(![f,u,g].every(($)=>Number.isFinite($)))return null;let l=`#${[f,u,g].map(($)=>$.toString(16).padStart(2,"0")).join("")}`;return{r:f,g:u,b:g,hex:l}}function qn(n){return dc(n)||s0(n)}function e_(n,i,_){let r=Math.round(n.r+(i.r-n.r)*_),c=Math.round(n.g+(i.g-n.g)*_),f=Math.round(n.b+(i.b-n.b)*_);return`rgb(${r} ${c} ${f})`}function Di(n,i){return`rgba(${n.r}, ${n.g}, ${n.b}, ${i})`}function g0(n){let i=n.r/255,_=n.g/255,r=n.b/255,c=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),f=_<=0.03928?_/12.92:Math.pow((_+0.055)/1.055,2.4),u=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4);return 0.2126*c+0.7152*f+0.0722*u}function $0(n){return g0(n)>0.4?"#000000":"#ffffff"}function Sc(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function m_(n){return Jc[n]||Jc.default}function o0(n){return n.mode==="auto"?Sc():n.mode}function ec(n,i){let _=m_(n);if(i==="dark"&&_.dark)return _.dark;if(i==="light"&&_.light)return _.light;return _.dark||_.light||hn}function Fn(n,i,_){let r=qn(n);if(!r)return n;return e_(r,i,_)}function mc(n,i,_){let r=qn(i);if(!r)return n;let f=dc(_==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:Fn(n.bgPrimary,r,0.08),bgSecondary:Fn(n.bgSecondary,r,0.12),bgHover:Fn(n.bgHover,r,0.16),textPrimary:Fn(n.textPrimary,r,_==="dark"?0.08:0.06),textSecondary:Fn(n.textSecondary,r,_==="dark"?0.12:0.1),borderColor:Fn(n.borderColor,r,0.1),accent:r.hex,accentHover:f?e_(r,f,0.18):r.hex,warning:Fn(n.warning||hn.warning,r,0.14),danger:Fn(n.danger,r,0.16),success:Fn(n.success,r,0.16)}}function l0(n,i){let _=qn(n?.warning);if(_)return _.hex;let r=qn(i==="dark"?Ji.warning:hn.warning)||qn(hn.warning),c=qn(n?.accent);if(r&&c)return e_(r,c,i==="dark"?0.18:0.14);return i==="dark"?Ji.warning:hn.warning}function w0(n,i){if(typeof document>"u")return;let _=document.documentElement,r=n.accent,c=qn(r),f=c?Di(c,i==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,u=c?Di(c,i==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",g=c?Di(c,i==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",l=c?$0(c):i==="dark"?"#000000":"#ffffff",$=c?Di(c,i==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",k=l0(n,i),o={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":r,"--accent-hover":n.accentHover||r,"--accent-color-alpha":$,"--accent-soft":u,"--accent-soft-strong":g,"--accent-contrast-text":l,"--warning-color":k,"--danger-color":n.danger||hn.danger,"--success-color":n.success||hn.success,"--search-highlight-color":f||"rgba(29, 155, 240, 0.2)"};Object.entries(o).forEach(([b,p])=>{if(p)_.style.setProperty(b,p)})}function y0(){if(typeof document>"u")return;let n=document.documentElement;f0.forEach((i)=>n.style.removeProperty(i))}function mn(n,i={}){if(typeof document>"u")return null;let _=typeof i.id==="string"&&i.id.trim()?i.id.trim():null,r=_?document.getElementById(_):document.querySelector(`meta[name="${n}"]`);if(!r)r=document.createElement("meta"),document.head.appendChild(r);if(r.setAttribute("name",n),_)r.setAttribute("id",_);return r}function Oc(n){let i=S_(An?.theme||"default"),_=An?.tint?String(An.tint).trim():null,r=ec(i,n);if(i==="default"&&_)r=mc(r,_,n);if(r?.bgPrimary)return r.bgPrimary;return n==="dark"?Ji.bgPrimary:hn.bgPrimary}function x0(n,i){if(typeof document>"u")return;let _=mn("theme-color",{id:"dynamic-theme-color"});if(_&&n)_.removeAttribute("media"),_.setAttribute("content",n);let r=mn("theme-color",{id:"theme-color-light"});if(r)r.setAttribute("media","(prefers-color-scheme: light)"),r.setAttribute("content",Oc("light"));let c=mn("theme-color",{id:"theme-color-dark"});if(c)c.setAttribute("media","(prefers-color-scheme: dark)"),c.setAttribute("content",Oc("dark"));let f=mn("msapplication-TileColor");if(f&&n)f.setAttribute("content",n);let u=mn("msapplication-navbutton-color");if(u&&n)u.setAttribute("content",n);let g=mn("apple-mobile-web-app-status-bar-style");if(g)g.setAttribute("content",i==="dark"?"black-translucent":"default")}function k0(){if(typeof window>"u")return;let n={...An,mode:Ec};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function b0(){if(typeof window>"u")return"web:default";try{let i=new URL(window.location.href).searchParams.get("chat_jid");return i&&i.trim()?i.trim():"web:default"}catch{return"web:default"}}function t0(n){if(typeof document>"u"||!n)return;let i=document.documentElement;if(i?.style)i.style.background=n;if(document.body?.style)document.body.style.background=n}function a_(n,i={}){if(typeof window>"u"||typeof document>"u")return;let _=S_(n?.theme||"default"),r=n?.tint?String(n.tint).trim():null,c=m_(_),f=o0(c),u=ec(_,f);An={theme:_,tint:r},Ec=f;let g=document.documentElement;g.dataset.theme=f,g.dataset.colorTheme=_,g.dataset.tint=r?String(r):"",g.style.colorScheme=f;let l=u;if(_==="default"&&r)l=mc(u,r,f);if(_==="default"&&!r)y0();else w0(l,f);if(t0(l.bgPrimary),x0(l.bgPrimary,f),k0(),i.persist!==!1)if(gn(d_,_),r)gn(Ci,r);else gn(Ci,"")}function Li(){if(m_(An.theme).mode!=="auto")return;a_(An,{persist:!1})}function v0(){if(typeof window>"u")return;let n=S_(Gn(d_)||"default"),i=(()=>{let _=Gn(Ci);return _?_.trim():null})();a_({theme:n,tint:i},{persist:!1})}function Q$(){if(typeof window>"u")return()=>{};if(v0(),window.matchMedia&&!E_){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Li);else if(n.addListener)n.addListener(Li);return E_=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Li);else if(n.removeListener)n.removeListener(Li);E_=!1}}return()=>{}}function nr(n){if(!n||typeof n!=="object")return;let i=b0(),_=n.chat_jid||n.chatJid||null,r=n.theme??n.name??n.colorTheme,c=n.tint??null;if(!_||_===i)a_({theme:r||"default",tint:c},{persist:!1});gn(d_,r||"default"),gn(Ci,c||"")}function M$(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return Sc()}var d_="piclaw_theme",Ci="piclaw_tint",hn,Ji,Jc,f0,An,Ec="light",E_=!1;var ac=O(()=>{hn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Ji={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Jc={default:{label:"Default",mode:"auto",light:hn,dark:Ji},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},f0=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],An={theme:"default",tint:null}});function p0(n){return Ar.map((i)=>({value:i,label:Zr[i],active:i===n}))}function nf({variant:n="inline",onChange:i}={}){let{locale:_,setLocale:r,t:c}=L(),f=p0(_),u=(g)=>{let l=g?.currentTarget?.value;r(l),i?.(l)};return s`
    <div class=${`language-switcher language-switcher-${n}`} role="none">
      <label class="language-switcher-label" for="language-switcher-select">${c("language.label")}</label>
      <select
        id="language-switcher-select"
        class="language-switcher-select"
        value=${_}
        aria-label=${c("language.label")}
        onClick=${(g)=>g.stopPropagation()}
        onChange=${u}
      >
        ${f.map((g)=>s`
          <option key=${g.value} value=${g.value}>${g.label}</option>
        `)}
      </select>
    </div>
  `}var _f=O(()=>{e();cn()});var cf={};un(cf,{ThemeSection:()=>K0});function rf(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function K0({themes:n,colorKeys:i,settingsData:_,setStatus:r,mergeSettingsData:c}){let{t:f}=L(),[u,g]=w("default"),[l,$]=w(""),[k,o]=w(!1),b=J(""),p=J(null),K=J(!0);q(()=>{return K.current=!0,()=>{K.current=!1}},[]);let t=j((G)=>{let h=rf(G);g(h.uiTheme),$(h.uiTint),b.current=JSON.stringify(h)},[]);q(()=>{if(_){t(_);return}t({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[_,t]);let z=j((G,h)=>{nr({theme:G,tint:h||null}),g(G||"default"),$(h||"")},[]),y=C(()=>JSON.stringify(rf({uiTheme:u,uiTint:l})),[u,l]);q(()=>{if(y===b.current)return;if(p.current)clearTimeout(p.current);return p.current=setTimeout(async()=>{if(!K.current)return;o(!0);try{let G=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),h=await G.json().catch(()=>({}));if(!K.current)return;if(!G.ok||!h?.ok||!h?.settings){r?.(h?.error||"Failed to save appearance settings.","error");return}b.current=y,c?.(h.settings),r?.("Appearance synced across clients.","success")}catch(G){if(!K.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",G),r?.("Failed to save appearance settings.","error")}finally{if(K.current)o(!1)}},250),()=>{if(p.current)clearTimeout(p.current)}},[y,c,r]);let v=i||[],R=n||[];return s`
        <div class="settings-section">
            <div class="settings-row settings-language-row">
                <${nf} variant="inline" />
            </div>
            ${k&&s`<div class="settings-hint" style="margin:0 0 12px 0;">${f("settings.appearance.syncing")}</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${u==="default"}
                        onChange=${()=>z("default",l)} />
                    <strong>${f("settings.appearance.default")}</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">${f("settings.appearance.autoLightDark")}</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">${f("settings.appearance.tint")}</label>
                    <input type="color"
                        value=${l||"#1d9bf0"}
                        onInput=${(G)=>{let h=G.target.value;if($(h),u==="default")nr({theme:"default",tint:h})}} />
                    ${l&&s`
                        <button class="settings-tint-clear" onClick=${()=>z("default","")}
                            title=${f("settings.appearance.clearTint")}>\u2715</button>
                    `}
                    <span class="settings-tint-hex">${l||f("settings.appearance.none")}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${v.map((G)=>s`<th class="settings-swatch-header">${G.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${R.filter((G)=>G.name!=="default").map((G)=>s`
                        <tr class=${G.name===u?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>z(G.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${G.name===u} onChange=${()=>z(G.name,"")} /></td>
                            <td><strong>${G.label}</strong></td>
                            <td>${G.mode}</td>
                            ${v.map((h)=>{let T=G.colors?.[h];return s`<td class="settings-swatch-cell">
                                    ${T?s`<span class="settings-color-swatch" style=${"background:"+T} title=${T}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var ff=O(()=>{e();ac();_f();cn()});var sf={};un(sf,{__scheduledTasksSettingsTest:()=>W0,ScheduledTasksSection:()=>h0});function Zn(n){if(!n)return"—";let i=new Date(n);if(Number.isNaN(i.getTime()))return n;return i.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function uf(n){let i=Number(n);if(!Number.isFinite(i))return"—";if(i<1000)return`${Math.round(i)}ms`;return`${(i/1000).toFixed(i<1e4?1:0)}s`}function ir(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${Zn(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function _r(n){let i=n?.task_kind||"agent";return i==="internal"?bn("settings.tasks.internalProtected"):i}function rr(n){return(n?.task_kind||"agent")==="internal"}function H0(n){if(!n)return"";let i=String(n).replace(/\s+/g," ").trim();return i.length>180?`${i.slice(0,179)}…`:i}function an({children:n,type:i="neutral"}){return s`<span class=${`settings-task-pill settings-task-pill-${i}`}>${n}</span>`}function z0({task:n}){let{t:i}=L(),_=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!_.length)return s`<p class="settings-hint">${i("settings.tasks.noRunLogs")}</p>`;return s`
        <div class="settings-task-run-list">
            ${_.map((r)=>s`
                <div class=${`settings-task-run-row settings-task-run-${r.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${an} type=${r.status==="error"?"error":"success"}>${r.status||"unknown"}<//>
                        <span>${Zn(r.run_at)}</span>
                        <span>${uf(r.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${r.error_summary||H0(r.error)||r.result_summary||r.result||i("settings.tasks.noSummary")}
                    </div>
                </div>
            `)}
        </div>
    `}function F0({task:n,onAction:i}){let{t:_}=L();if(!n)return s`<div class="settings-task-detail-empty">${_("settings.tasks.selectPrompt")}</div>`;let r=rr(n);return s`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${n.summary||n.id}</h4>
                    <code>${n.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${n.status==="active"&&s`<button onClick=${()=>i("pause",n)}>${_("settings.tasks.pause")}</button>`}
                    ${n.status==="paused"&&s`<button onClick=${()=>i("resume",n)}>${_("settings.tasks.resume")}</button>`}
                    <button class="danger" onClick=${()=>i("delete",n)}>${_("settings.tasks.delete")}</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>${_("settings.tasks.status")}</span><strong>${n.status||"—"}</strong>
                <span>${_("settings.tasks.kind")}</span><strong>${_r(n)}</strong>
                <span>${_("settings.tasks.schedule")}</span><strong>${ir(n)}</strong>
                <span>${_("settings.tasks.nextRun")}</span><strong>${Zn(n.next_run)}</strong>
                <span>${_("settings.tasks.lastRun")}</span><strong>${Zn(n.last_run)}</strong>
                <span>${_("settings.tasks.lastResult")}</span><strong>${n.latest_run_log?.status||n.last_result||"—"}</strong>
                <span>${_("settings.tasks.chat")}</span><code>${n.chat_jid||"—"}</code>
                <span>${_("settings.tasks.model")}</span><code>${n.model||"default"}</code>
                ${n.cwd&&s`<span>${_("settings.tasks.cwd")}</span><code>${n.cwd}</code>`}
                ${n.timeout_sec&&s`<span>${_("settings.tasks.timeout")}</span><strong>${n.timeout_sec}s</strong>`}
                ${r&&s`<span>${_("settings.tasks.protection")}</span><strong>${_("settings.tasks.protectionHint")}</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${n.task_kind==="shell"?_("settings.tasks.command"):_("settings.tasks.prompt")}</strong>
                <pre>${n.command||n.prompt||n.command_summary||n.prompt_summary||n.summary||"—"}</pre>
            </div>
            <h4>${_("settings.tasks.recentRuns")}</h4>
            <${z0} task=${n} />
        </div>
    `}function h0({filter:n="",setStatus:i}){let{t:_}=L(),[r,c]=w([]),[f,u]=w({active:0,paused:0,completed:0}),[g,l]=w("all"),[$,k]=w(""),[o,b]=w(!0),[p,K]=w(null),[t,z]=w(null),[y,v]=w(null),[R,G]=w(!1),h=j(async(x={})=>{b(!0),K(null);try{let U=await H_({status:g,chatJid:$.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});c(U.tasks||[]),u(U.counts||{active:0,paused:0,completed:0});let F=x.selectedId||t,N=(U.tasks||[]).find((Y)=>Y.id===F)||(U.tasks||[])[0]||null;z(N?.id||null),v(N)}catch(U){K(U?.message||_("settings.tasks.loadFailed"))}finally{b(!1)}},[g,$,t]);q(()=>{h()},[h]);let T=String(n||"").trim().toLowerCase(),H=C(()=>{if(!T)return r;return r.filter((x)=>[x.id,x.chat_jid,x.status,x.task_kind,x.schedule_type,x.schedule_value,x.summary,x.prompt_summary,x.command_summary,x.latest_run_log?.error_summary].some((U)=>String(U||"").toLowerCase().includes(T)))},[r,T]),P=j((x)=>{z(x?.id||null),v(x||null)},[]),V=j(async(x,U)=>{if(!U||R)return;let F=rr(U),N=U.summary||U.command_summary||U.prompt_summary||U.id,Y=x==="delete"?_("settings.tasks.confirmDelete",{id:U.id})+`

${N}`:(x==="pause"?_("settings.tasks.confirmPause",{id:U.id}):_("settings.tasks.confirmResume",{id:U.id}))+`

${N}`;if(!window.confirm(Y))return;if(F&&!window.confirm(_("settings.tasks.confirmProtected",{id:U.id,action:x})))return;G(!0),i?.(x==="delete"?_("settings.tasks.deleting",{id:U.id}):x==="pause"?_("settings.tasks.pausing",{id:U.id}):_("settings.tasks.resuming",{id:U.id}),"info");try{await z_(x,U.id,{allowInternal:F}),i?.(x==="delete"?_("settings.tasks.deletedToast",{id:U.id}):x==="pause"?_("settings.tasks.pausedToast",{id:U.id}):_("settings.tasks.resumedToast",{id:U.id}),"success"),await h({selectedId:x==="delete"?null:U.id})}catch(B){i?.(B?.message||_("settings.tasks.actionFailed",{action:x}),"error")}finally{G(!1)}},[R,h,i]);return s`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${an} type="active">${_("settings.tasks.activeLabel")} ${f.active||0}<//>
                    <${an} type="paused">${_("settings.tasks.pausedLabel")} ${f.paused||0}<//>
                    <${an} type="completed">${_("settings.tasks.completedLabel")} ${f.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${g} onChange=${(x)=>l(x.target.value)}>
                        ${B0.map((x)=>s`<option value=${x}>${x==="all"?_("settings.tasks.allStatuses"):x}</option>`)}
                    </select>
                    <input type="text" placeholder=${_("settings.tasks.filterChatPlaceholder")} value=${$} onInput=${(x)=>k(x.target.value)} />
                    <button onClick=${()=>h()} disabled=${o}>${_("settings.tasks.refresh")}</button>
                </div>
            </div>

            ${o&&s`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>${_("settings.tasks.loading")}</span></div>`}
            ${p&&s`<div class="settings-error-state">${p}</div>`}
            ${!o&&!p&&r.length===0&&s`
                <div class="settings-empty-state">
                    <strong>${_("settings.tasks.noneFound")}</strong>
                    <p>${_("settings.tasks.noneFoundHint")}</p>
                </div>
            `}
            ${!o&&!p&&r.length>0&&s`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label=${_("settings.tasks.listLabel")}>
                        ${H.map((x)=>s`
                            <button class=${`settings-task-row ${x.id===t?"active":""}`} onClick=${()=>P(x)}>
                                <span class="settings-task-row-main">
                                    <strong>${x.summary||x.id}</strong>
                                    <span>${ir(x)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${an} type=${x.status||"neutral"}>${x.status}<//>
                                    <${an}>${_r(x)}<//>
                                </span>
                                <span class="settings-task-row-times">${_("settings.tasks.next")} ${Zn(x.next_run)} · ${_("settings.tasks.last")} ${Zn(x.last_run)}${x.latest_run_log?.status?` · ${x.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${H.length===0&&s`<p class="settings-hint">${_("settings.tasks.noMatch",{filter:n})}</p>`}
                    </div>
                    <${F0} task=${y&&H.some((x)=>x.id===y.id)?y:H[0]} onAction=${V} />
                </div>
            `}
        </div>
    `}var B0,W0;var gf=O(()=>{e();zn();cn();B0=["all","active","paused","completed"];W0={formatDateTime:Zn,formatDuration:uf,labelForSchedule:ir,kindLabel:_r,isProtectedTask:rr}});function $f(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function ni(n){return typeof n==="string"&&n.trim().length>0}function cr(n,...i){let _=$f(n);if(!_)return!0;let r=i.map((c)=>$f(c)).filter(Boolean);for(let c of r)if(c.startsWith(_)||c.includes(_))return!0;return!1}function of(n){if(!Array.isArray(n))return null;let i=[],_=new Set;for(let r of n){let c=String(r||"").trim();if(!c)continue;let f=c.toLowerCase();if(_.has(f))continue;_.add(f),i.push(c)}return i}function ki(n){let i=n&&typeof n==="object"?n:{};return{workspaceCommands:of(i.workspaceCommands),slashCommands:of(i.slashCommands)}}function lf(n,i){if(!Array.isArray(n))return!0;return n.some((_)=>_.toLowerCase()===i.toLowerCase())}function j0(n){let i=Array.isArray(n?.commands)?n.commands:[],_=ki(n?.settings),r=String(n?.query||"");return i.filter((c)=>lf(_.workspaceCommands,c.id)).filter((c)=>cr(r,c.label,c.description,...c.keywords||[])).map((c)=>({key:`workspace:${c.id}`,kind:"workspace",title:c.label,subtitle:c.description,searchText:`${c.label} ${c.description} ${(c.keywords||[]).join(" ")}`.trim(),visualHint:c.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:c.id}))}function U0(n){let i=Array.isArray(n?.agents)?n.agents:[],_=String(n?.query||""),r=new Set;return i.filter((c)=>{let f=ni(c?.chat_jid)?c.chat_jid.trim():"";if(!f||r.has(f))return!1;if(c?.archived_at)return!1;return r.add(f),!0}).filter((c)=>cr(_,`@${String(c?.agent_name||"").trim()}`,c?.session_name,c?.chat_jid)).map((c)=>{let f=ni(c?.agent_name)?c.agent_name.trim():String(c?.chat_jid||"").replace(/^[^:]+:/,""),u=ni(c?.session_name)?c.session_name.trim():"",g=String(c?.chat_jid||"").trim();return{key:`agent:${g}`,kind:"agent",title:`@${f}`,subtitle:u||g,searchText:`@${f} ${u} ${g}`.trim(),visualHint:f.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:g}})}function G0(n){let i=Array.isArray(n?.slashCommands)?n.slashCommands:[],_=ki(n?.settings),r=String(n?.query||""),c=new Set;return i.filter((f)=>{let u=ni(f?.name)?f.name.trim():"";if(!u||c.has(u.toLowerCase()))return!1;return c.add(u.toLowerCase()),lf(_.slashCommands,u)}).filter((f)=>cr(r,f?.name,f?.description,f?.source)).map((f)=>{let u=String(f?.name||"").trim(),g=ni(f?.description)?f.description.trim():"slash command",l=ni(f?.source)?f.source.trim():"";return{key:`slash:${u}`,kind:"slash",title:u,subtitle:g,searchText:`${u} ${g} ${String(f?.source||"")}`.trim(),visualHint:"/",categoryLabel:l||"Slash",actionHint:"Insert",commandName:u}})}function d$(n){return[...U0({agents:n?.agents,query:n?.query}),...j0({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...G0({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var ii;var wf=O(()=>{ii=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var kf={};un(kf,{QuickActionsSection:()=>T0});function yf(n,...i){let _=String(n||"").trim().toLowerCase();if(!_)return!0;return i.some((r)=>String(r||"").toLowerCase().includes(_))}function xf(n){if(!Array.isArray(n))return null;return new Set(n.map((i)=>String(i||"").trim().toLowerCase()).filter(Boolean))}function T0({filter:n="",setStatus:i,mergeSettingsData:_}){let{t:r}=L(),[c,f]=w(()=>ii.map((H)=>H.id)),[u,g]=w([]),[l,$]=w([]),[k,o]=w(!0),[b,p]=w(!1),K=j(async()=>{o(!0);try{let[H,P]=await Promise.all([R_(),P_("web:default").catch(()=>({commands:[]}))]),V=ki(H?.settings),x=Array.isArray(P?.commands)?P.commands:[];$(x),f(Array.isArray(V.workspaceCommands)?V.workspaceCommands:ii.map((U)=>U.id)),g(Array.isArray(V.slashCommands)?V.slashCommands:x.map((U)=>String(U?.name||"").trim()).filter(Boolean))}catch(H){i?.(String(H?.message||H),"error")}finally{o(!1)}},[i]);q(()=>{K()},[K]);let t=C(()=>xf(c),[c]),z=C(()=>xf(u),[u]),y=C(()=>ii.filter((H)=>yf(n,H.label,H.description,...H.keywords||[])),[n]),v=C(()=>l.filter((H)=>yf(n,H?.name,H?.description,H?.source)),[l,n]),R=j((H)=>{f((P)=>{let V=new Set((Array.isArray(P)?P:[]).map((x)=>String(x||"").trim()).filter(Boolean));if(V.has(H))V.delete(H);else V.add(H);return ii.map((x)=>x.id).filter((x)=>V.has(x))})},[]),G=j((H)=>{g((P)=>{let V=new Set((Array.isArray(P)?P:[]).map((x)=>String(x||"").trim()).filter(Boolean));if(V.has(H))V.delete(H);else V.add(H);return l.map((x)=>String(x?.name||"").trim()).filter((x)=>x&&V.has(x))})},[l]),h=j(()=>{f(ii.map((H)=>H.id)),g(l.map((H)=>String(H?.name||"").trim()).filter(Boolean))},[l]),T=j(async()=>{if(b)return;p(!0),i?.(r("settings.quickActions.savingToast"),"info");try{let H=await V_({workspaceCommands:c,slashCommands:u}),P=ki(H?.settings);_?.({quickActions:P}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:P}})),i?.(r("settings.quickActions.savedToast"),"success")}catch(H){i?.(String(H?.message||H),"error")}finally{p(!1)}},[_,b,i,u,c]);if(k)return s`<div class="settings-loading">${r("settings.quickActions.loading")}</div>`;return s`
        <div class="settings-section">
            <h3>${r("settings.quickActions.heading")}</h3>
            <p class="settings-hint">
                ${r("settings.quickActions.intro")}
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${h} disabled=${b}>${r("settings.quickActions.enableAll")}</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${T} disabled=${b}>
                    ${b?r("settings.quickActions.saving"):r("settings.quickActions.saveApply")}
                </button>
            </div>

            <h3 style="margin-top:8px;">${r("settings.quickActions.workspaceCommands")}</h3>
            <div class="settings-subsection-list">
                ${y.map((H)=>{let P=t?t.has(H.id.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${H.id}>
                            <input type="checkbox" checked=${P} onChange=${()=>R(H.id)} />
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
                ${v.map((H)=>{let P=String(H?.name||"").trim(),V=z?z.has(P.toLowerCase()):!0;return s`
                        <label class="settings-checkbox-row" key=${P}>
                            <input type="checkbox" checked=${V} onChange=${()=>G(P)} />
                            <div>
                                <div><code>${P}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${H?.description||r("settings.quickActions.slashFallback")}</div>
                            </div>
                        </label>
                    `})}
                ${v.length===0&&s`<div class="settings-hint">${r("settings.quickActions.noSlashMatch")}</div>`}
            </div>
        </div>
    `}var bf=O(()=>{e();zn();wf();cn()});var tf={};un(tf,{KeychainSection:()=>V0});function P0(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function V0({filter:n=""}){let{t:i}=L(),[_,r]=w([]),[c,f]=w(!0),[u,g]=w(null),[l,$]=w(!1),[k,o]=w(""),[b,p]=w(""),[K,t]=w(""),[z,y]=w(""),[v,R]=w(""),[G,h]=w("secret"),[T,H]=w(!1),[P,V]=w({}),[x,U]=w(null),[F,N]=w(null),[Y,B]=w(null),A=J(null),D=J(null),rn=J(null),E=j(async()=>{f(!0),g(null);try{let I=await(await fetch("/agent/keychain")).json();if(I?.ok)r(I.entries||[]);else g(I?.error||i("settings.keychain.loadFailed"))}catch(W){g(i("settings.keychain.loadFailed"))}finally{f(!1)}},[]);q(()=>{E()},[E]);let $n=j(async()=>{let W=k.trim(),I=b;if(!W||!I)return;H(!0);try{let ln=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:W,secret:I,type:G,username:K.trim()||void 0,userNote:z,agentNote:v})})).json();if(ln?.ok)o(""),p(""),t(""),y(""),R(""),h("secret"),$(!1),await E();else g(ln?.error||i("settings.keychain.addFailed"))}catch{g(i("settings.keychain.addFailed"))}finally{H(!1)}},[k,b,K,z,v,G,E]),xn=j(async(W)=>{try{let fn=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:W})})).json();if(fn?.ok)N(null),B((ln)=>ln?.name===W?null:ln),await E();else g(fn?.error||i("settings.keychain.deleteFailed"))}catch{g(i("settings.keychain.deleteFailed"))}},[E]),Wn=j(async(W)=>{let I=W?.name;if(!I)return;let fn=P[I]||{},ln=Object.prototype.hasOwnProperty.call(fn,"userNote")?fn.userNote:W.userNote||"",yn=Object.prototype.hasOwnProperty.call(fn,"agentNote")?fn.agentNote:W.agentNote||"";U(I);try{let Pn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I,userNote:ln,agentNote:yn})})).json();if(Pn?.ok)V((pi)=>{let ri={...pi||{}};return delete ri[I],ri}),await E();else g(Pn?.error||i("settings.keychain.saveNotesFailed"))}catch{g(i("settings.keychain.saveNotesFailed"))}finally{U(null)}},[P,E]),M=j((W,I,fn)=>{V((ln)=>({...ln||{},[W]:{...(ln||{})[W]||{},[I]:fn}}))},[]),X=j(async(W,I,fn)=>{try{let yn=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:W,master_password:I||void 0,totp_code:fn||void 0})})).json();if(yn?.ok)B({name:W,phase:"revealed",secret:yn.secret,username:yn.username,masterPassword:I});else if(yn?.needs_master_password)B((pn)=>({name:W,phase:"password",masterPassword:"",error:pn?.name===W&&pn?.masterPassword?yn.error:null})),requestAnimationFrame(()=>D.current?.focus());else if(yn?.needs_totp)B((pn)=>({name:W,phase:"totp",masterPassword:I,totpCode:"",error:pn?.name===W&&pn?.phase==="totp"&&pn?.totpCode?yn.error:null})),requestAnimationFrame(()=>rn.current?.focus());else B({name:W,phase:"error",error:yn?.error||i("settings.keychain.revealFailed")})}catch{B({name:W,phase:"error",error:i("settings.keychain.revealFailed")})}},[]),on=j((W)=>{if(Y?.name===W&&Y?.phase==="revealed"){B(null);return}X(W,null,null)},[Y,X]),vi=j((W)=>{let I=Y?.masterPassword||"";if(!I)return;X(W,I,null)},[Y,X]),Q=j((W)=>{let I=Y?.totpCode||"";if(I.length<6)return;X(W,Y?.masterPassword,I)},[Y,X]),m=j(async(W)=>{try{await navigator.clipboard.writeText(W)}catch{let I=document.createElement("textarea");I.value=W,I.style.position="fixed",I.style.opacity="0",document.body.appendChild(I),I.select(),document.execCommand("copy"),document.body.removeChild(I)}},[]);q(()=>{if(l)requestAnimationFrame(()=>A.current?.focus())},[l]);let sn=n.toLowerCase(),vn=C(()=>{if(!sn)return _;return _.filter((W)=>W.name.toLowerCase().includes(sn)||(W.type||"").toLowerCase().includes(sn)||(W.envVar||"").toLowerCase().includes(sn)||(W.userNote||"").toLowerCase().includes(sn)||(W.agentNote||"").toLowerCase().includes(sn))},[_,sn]);if(c)return s`<div class="settings-section"><div class="settings-loading">${i("settings.keychain.loading")}</div></div>`;return s`
        <div class="settings-section">
            ${u&&s`
                <div class="settings-keychain-error" role="alert">
                    ${u}
                    <button class="settings-keychain-dismiss" onClick=${()=>g(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${vn.length===1?i("settings.keychain.entryCountSingular",{count:vn.length}):i("settings.keychain.entryCountPlural",{count:vn.length})}${sn?i("settings.keychain.matchingFilter",{filter:n}):""}${i("settings.keychain.encryptedSuffix")}</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${i("settings.keychain.clickPrefix")}</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>${i("settings.keychain.revealSuffix")}</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>$(!l)}>
                    ${l?i("settings.keychain.cancel"):i("settings.keychain.addEntry")}
                </button>
            </div>

            ${l&&s`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${A} type="text" placeholder=${i("settings.keychain.namePlaceholder")}
                            value=${k} onInput=${(W)=>o(W.target.value)}
                            class="settings-keychain-input" />
                        <select value=${G} onChange=${(W)=>h(W.target.value)}
                            class="settings-keychain-select">
                            ${R0.map((W)=>s`<option value=${W}>${W}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder=${i("settings.keychain.secretPlaceholder")}
                            value=${b} onInput=${(W)=>p(W.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder=${i("settings.keychain.usernamePlaceholder")}
                            value=${K} onInput=${(W)=>t(W.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${$n}
                            disabled=${T||!k.trim()||!b}>
                            ${T?i("settings.keychain.saving"):i("settings.keychain.save")}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder=${i("settings.keychain.userNotePlaceholder")}
                            value=${z} onInput=${(W)=>y(W.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder=${i("settings.keychain.agentNotePlaceholder")}
                            value=${v} onInput=${(W)=>R(W.target.value)}
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
                        ${vn.length===0&&s`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${sn?i("settings.keychain.noMatchFilter"):i("settings.keychain.noEntries")}
                            </td></tr>
                        `}
                        ${vn.map((W)=>{let I=Y?.name===W.name?Y:null,fn=I?.phase==="revealed",ln=I?.phase==="password",yn=I?.phase==="totp",pn=I?.phase==="error",Pn=P[W.name]||{},pi=Object.prototype.hasOwnProperty.call(Pn,"userNote")?Pn.userNote:W.userNote||"",ri=Object.prototype.hasOwnProperty.call(Pn,"agentNote")?Pn.agentNote:W.agentNote||"",Vf=pi!==(W.userNote||"")||ri!==(W.agentNote||""),or=x===W.name;return s`
                            <tr class="settings-keychain-row" key=${W.name}>
                                <td class="settings-keychain-name">${W.name}</td>
                                <td><span class="settings-keychain-type-badge">${W.type}</span></td>
                                <td class="settings-keychain-env">${W.envVar?s`<code>$${W.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${P0(W.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${fn?" active":""}`}
                                        onClick=${()=>on(W.name)}
                                        title=${fn?i("settings.keychain.hideSecret"):i("settings.keychain.revealSecret")}>
                                        ${fn?s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:s`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${F===W.name?s`
                                            <span class="settings-keychain-confirm">${i("settings.keychain.deleteQ")}
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>xn(W.name)}>${i("settings.keychain.yes")}</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>N(null)}>${i("settings.keychain.no")}</button>
                                            </span>
                                        `:s`<button class="settings-keychain-delete-btn" onClick=${()=>N(W.name)} title=${i("settings.keychain.deleteTitle")}>🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${W.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">${i("settings.keychain.userNote")}</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder=${i("settings.keychain.userNoteHint")}
                                                value=${pi}
                                                onInput=${(wn)=>M(W.name,"userNote",wn.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">${i("settings.keychain.agentNote")}</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder=${i("settings.keychain.agentNoteHint")}
                                                value=${ri}
                                                onInput=${(wn)=>M(W.name,"agentNote",wn.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!Vf||or} onClick=${()=>Wn(W)}>
                                            ${or?i("settings.keychain.saving"):i("settings.keychain.saveNotes")}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${ln&&s`
                                <tr class="settings-keychain-prompt-row" key=${W.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">${i("settings.keychain.masterPassword")}</span>
                                            <input ref=${D} type="password" autocomplete="off"
                                                placeholder=${i("settings.keychain.masterPasswordPlaceholder")}
                                                class="settings-keychain-prompt-input"
                                                value=${I?.masterPassword||""}
                                                onInput=${(wn)=>B((mi)=>({...mi,masterPassword:wn.target.value}))}
                                                onKeyDown=${(wn)=>{if(wn.key==="Enter")vi(W.name);if(wn.key==="Escape")B(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>vi(W.name)}
                                                disabled=${!I?.masterPassword}>${i("settings.keychain.unlock")}</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>B(null)}>${i("settings.keychain.cancel")}</button>
                                            ${I?.error&&s`<span class="settings-keychain-prompt-error">${I.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${yn&&s`
                                <tr class="settings-keychain-prompt-row" key=${W.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">${i("settings.keychain.totpCode")}</span>
                                            <input ref=${rn} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${I?.totpCode||""}
                                                onInput=${(wn)=>B((mi)=>({...mi,totpCode:wn.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(wn)=>{if(wn.key==="Enter")Q(W.name);if(wn.key==="Escape")B(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>Q(W.name)}
                                                disabled=${(I?.totpCode||"").length<6}>${i("settings.keychain.verify")}</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>B(null)}>${i("settings.keychain.cancel")}</button>
                                            ${I?.error&&s`<span class="settings-keychain-prompt-error">${I.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${fn&&s`
                                <tr class="settings-keychain-reveal-row" key=${W.name+"-reveal"}>
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
                                <tr class="settings-keychain-reveal-row" key=${W.name+"-error"}>
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
    `}var R0;var vf=O(()=>{e();cn();R0=["secret","token","password","basic"]});var pf={};un(pf,{ToolsSection:()=>q0});function q0({toolsets:n,filter:i="",settingsData:_,mergeSettingsData:r}){let{t:c}=L(),f=n||[],[u,g]=w(()=>{let t={};for(let z of f)t[z.name]=!0;return t}),l=j((t)=>{g((z)=>({...z,[t]:!z[t]}))},[]),$=_?.searchMatchMode||"or",k=C(()=>{let t=Array.isArray(_?.toolResultCompactionTools)?_.toolResultCompactionTools:[];return new Set(t.filter((z)=>typeof z==="string").map((z)=>z.trim().toLowerCase()).filter(Boolean))},[_?.toolResultCompactionTools]),o=j(async()=>{let t=$==="or"?"and":"or";try{let y=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:t})})).json().catch(()=>({}));if(y?.ok&&y?.settings)r?.(y.settings)}catch(z){console.warn("[settings/tools] Failed to save search match mode.",z)}},[$,r]),b=j(async(t)=>{let z=String(t||"").trim().toLowerCase();if(!z)return;let y=new Set(k);if(y.has(z))y.delete(z);else y.add(z);try{let R=await(await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toolResultCompactionTools:Array.from(y).sort()})})).json().catch(()=>({}));if(R?.ok&&R?.settings)r?.(R.settings)}catch(v){console.warn("[settings/tools] Failed to save tool compaction settings.",v)}},[k,r]),p=i.toLowerCase(),K=C(()=>{if(!p)return f;return f.map((t)=>{let z=t.tools.filter((y)=>y.name.toLowerCase().includes(p)||t.name.toLowerCase().includes(p)||(y.summary||"").toLowerCase().includes(p));return z.length>0?{...t,tools:z}:null}).filter(Boolean)},[f,p]);if(f.length===0)return s`<div class="settings-section"><p class="settings-hint">${c("settings.tools.unavailable")}</p></div>`;return s`
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
            ${K.map((t)=>{let z=u[t.name]!==!1;return s`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${z} onChange=${()=>l(t.name)} />
                            <span class="settings-toolset-icon">${X0[t.name]||M0}</span>
                            <strong>${t.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${t.description}</span>
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
                        ${t.tools.map((y)=>{let v=String(y.name||"").trim().toLowerCase(),R=k.has(v);return s`
                                <div class="settings-tool-row">
                                    <input type="checkbox" checked disabled />
                                    <span class="settings-tool-name">${y.name}</span>
                                    <span class="settings-tool-compact">
                                        <input
                                            type="checkbox"
                                            checked=${R}
                                            onChange=${()=>b(y.name)}
                                            title=${R?c("settings.tools.disableCompaction"):c("settings.tools.enableCompaction")}
                                        />
                                    </span>
                                    <span class="settings-tool-kind" title=${y.kind}>${Q0[y.kind]||"?"}</span>
                                    ${y.summary&&s`<span class="settings-tool-summary">${y.summary}</span>`}
                                    ${!y.summary&&s`<span class="settings-tool-summary"></span>`}
                                    <span class="settings-tool-source">${N0[y.name]||t.name}</span>
                                </div>
                            `})}
                    </div>`}
                </div>
            `})}
            ${K.length===0&&s`<p class="settings-hint">${c("settings.tools.noMatch",{filter:i})}</p>`}
            <p class="settings-hint">${c("settings.tools.footer")}</p>
        </div>
    `}var X0,N0,Q0,M0;var Kf=O(()=>{e();cn();X0={core:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},N0={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Q0={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},M0=s`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var Bf={};un(Bf,{AddonsSection:()=>A0});function A0({setStatus:n,filter:i=""}){let{t:_}=L(),[r,c]=w(null),[f,u]=w(!0),[g,l]=w(null),[$,k]=w(!1),[o,b]=w({runtime:"",windowsNative:!1}),[p,K]=w([]),[t,z]=w([]);function y(){let x=new URLSearchParams;try{let F=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),N=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((B)=>B.trim()).filter(Boolean),Y=localStorage.getItem("piclaw_addons_repo_url");if(F)x.append("catalog_url",F);for(let B of N)x.append("catalog_url",B);if(Y)x.set("repo_url",Y)}catch(F){}let U=x.toString();return U?`?${U}`:""}let v=j(async()=>{try{let[x,U]=await Promise.all([fetch(`/agent/addons${y()}`),fetch("/agent/settings-data")]),F=await x.json();if(F.error)throw Error(F.error);c(F.addons||[]),K(F.sources||[]),z(F.failed_sources||[]);let N=await U.json().catch(()=>({})),Y=typeof N?.runtimePlatform==="string"?N.runtimePlatform:"";b({runtime:Y,windowsNative:Y==="win32"})}catch(x){c(null),n?.(String(x.message||x),"error")}finally{u(!1)}},[n]);q(()=>{v()},[]);let R=j(async(x)=>{if(g)return;l({slug:x,action:"install"}),n?.(_("settings.addons.installing",{slug:x}),"info");try{let F=await(await fetch(`/agent/addons/install${y()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:x})})).json();if(F.error){n?.(F.error,"error");return}k(!0);let N=[F.message,F.warning].filter(Boolean).join(" ");n?.(N||_("settings.addons.installedToast"),"success"),await v()}catch(U){n?.(String(U.message||U),"error")}finally{l(null)}},[g,v,n]),G=j(async(x)=>{if(g)return;l({slug:x,action:"remove"}),n?.(_("settings.addons.removing",{slug:x}),"info");try{let F=await(await fetch(`/agent/addons/uninstall${y()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:x})})).json();if(F.error){n?.(F.error,"error");return}k(!0);let N=[F.message,F.warning].filter(Boolean).join(" ");n?.(N||_("settings.addons.removedToast"),"success"),await v()}catch(U){n?.(String(U.message||U),"error")}finally{l(null)}},[g,v,n]),h=j(async()=>{if(g)return;l({slug:null,action:"restart"}),n?.(_("settings.addons.restarting"),"info");try{let U=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(U.error){n?.(U.error,"error"),l(null);return}n?.(U.message||_("settings.addons.restarting"),"success"),k(!1),(async(N=30,Y=2000)=>{for(let B=0;B<N;B++){await new Promise((A)=>setTimeout(A,Y));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await v(),l(null),n?.(_("settings.addons.restartComplete"),"success");return}}catch(A){}}l(null),n?.(_("settings.addons.restartTimeout"),"warning")})()}catch(x){n?.(String(x.message||x),"error"),l(null)}},[g,n,v]);if(f)return s`<div class="settings-loading">${_("settings.addons.fetching")}</div>`;if(!r)return s`<div class="settings-section"><p class="settings-hint">${_("settings.addons.loadFailed")}</p></div>`;let T=i.toLowerCase(),H=T?r.filter((x)=>x.slug.toLowerCase().includes(T)||(x.description||"").toLowerCase().includes(T)||(x.tags||[]).some((U)=>U.toLowerCase().includes(T))):r,P=g?.slug||null,V=g?g.action==="remove"?_("settings.addons.removing",{slug:g.slug}):g.action==="restart"?_("settings.addons.restarting"):_("settings.addons.installing",{slug:g.slug}):"";return s`
        <div class=${`settings-section settings-addon-panel${g?" busy":""}`} aria-busy=${g?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${p.length<=1?s`${_("settings.addons.catalogFromPre")} <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:s`${_("settings.addons.catalogMerged",{count:p.length})}`}
                        ${" "}${_("settings.addons.installNote")}
                    </p>
                    ${t.length>0&&s`
                        <div class="settings-addon-error" role="alert">
                            ${t.length>1?_("settings.addons.failedFetchPlural",{count:t.length}):_("settings.addons.failedFetchSingular",{count:t.length})}
                            ${t.map((x)=>s` <code style="font-size:0.82em;word-break:break-all">${x}</code>`)}
                        </div>
                    `}
                    ${p.length>1&&s`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">${_("settings.addons.activeSources",{count:p.length})}</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${p.map((x)=>s`<li style="word-break:break-all"><code>${x}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${o.windowsNative&&s`
                        <div class="settings-addon-error" role="alert">
                            ${_("settings.addons.windowsWarning")}
                        </div>
                    `}
                </div>
            </div>
            <div class="settings-addon-list">
                ${g&&s`
                    <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${V}>
                        <div class="settings-addon-panel-overlay-card">
                            <div class="settings-spinner"></div>
                            <span>${V}</span>
                        </div>
                    </div>
                `}
                ${H.map((x)=>{let U=(x.skills||[]).length>0,F=x.type==="extension",N=U&&F?_("settings.addons.typeExtSkill"):U?_("settings.addons.typeSkill"):_("settings.addons.typeExt"),Y=U&&!F?"settings-tag-skill":"",B=typeof x.homepage==="string"&&x.homepage.trim()?x.homepage.trim():"";return s`
                    <div class=${`settings-addon-card${x.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${B?s`<a class="settings-addon-name-link" href=${B} target="_blank" rel="noopener noreferrer">${x.slug}</a>`:s`<strong>${x.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${Y}`}>${N}</span>
                            <span class="settings-addon-version">${x.installed?x.installedVersion||"?":x.version||""}</span>
                            ${x.installKind&&s`<span class="settings-tag">${x.installKind}</span>`}
                            ${x.hasUpdate&&s`<span class="settings-tag settings-tag-skill">\u2191 ${x.version}</span>`}
                            <div class="settings-addon-actions">
                                ${x.installed?s`
                                    ${x.hasUpdate&&s`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(g)} onClick=${()=>R(x.slug)}>${P===x.slug?"…":_("settings.addons.update")}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(g)} onClick=${()=>G(x.slug)}>${P===x.slug?"…":_("settings.addons.remove")}</button>
                                `:s`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(g)} onClick=${()=>R(x.slug)}>${P===x.slug?"…":_("settings.addons.install")}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${x.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(x.tags||[]).map((A)=>s`<span class="settings-tag">${A}</span>`)}${(x.skills||[]).map((A)=>s`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${A}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${H.length===0&&s`<p class="settings-hint">${_("settings.addons.noMatch",{filter:i})}</p>`}
            </div>
            ${$&&s`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>${_("settings.addons.restartNotice")}</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(g)} onClick=${h}>${_("settings.addons.restartNow")}</button>
                </div>
            `}
        </div>
    `}var Hf=O(()=>{e();cn()});var J0={};function fr(n,i){try{let _=localStorage.getItem(n);return _===null?i:_==="true"}catch{return i}}function Oi(n,i){try{localStorage.setItem(n,String(i))}catch(_){}}function Z0(n,i){try{return localStorage.getItem(n)||i}catch{return i}}function I0(n,i){try{localStorage.setItem(n,i)}catch(_){}}function Y0(n,i,_,r){try{return dn(localStorage.getItem(n),{fallback:i,min:_,max:r})}catch{return dn(i,{fallback:i,min:_,max:r})}}function D0(n,i){try{localStorage.setItem(n,String(i))}catch(_){}}function L0(){let{t:n}=L(),[i,_]=w(()=>fr("piclaw_vim_mode",!1)),[r,c]=w(()=>fr("piclaw_show_whitespace",!0)),[f,u]=w(()=>fr("piclaw_md_live_preview",!0)),[g,l]=w(()=>Y0("piclaw_editor_font_size",13,10,24)),[$,k]=w(()=>Z0("piclaw_editor_font_family","")),o=j((b,p,K)=>{let t=!p;K(t),Oi(b,t)},[]);return s`
        <div class="settings-section">
            <h3>${n("settings.editor.heading")}</h3>
            <div class="settings-row">
                <label>${n("settings.editor.vimMode")}</label>
                <input type="checkbox" checked=${i}
                    onChange=${()=>{let b=!i;_(b),Oi("piclaw_vim_mode",b)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.showWhitespace")}</label>
                <input type="checkbox" checked=${r}
                    onChange=${()=>{let b=!r;c(b),Oi("piclaw_show_whitespace",b)}} />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.livePreview")}</label>
                <input type="checkbox" checked=${f}
                    onChange=${()=>{let b=!f;u(b),Oi("piclaw_md_live_preview",b)}} />
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
                    onChange=${(b)=>{l(b),D0("piclaw_editor_font_size",b)}}
                />
            </div>
            <div class="settings-row">
                <label>${n("settings.editor.fontFamily")}</label>
                <input type="text" value=${$}
                    onInput=${(b)=>{let p=b.target.value;k(p),I0("piclaw_editor_font_family",p)}}
                    placeholder=${n("settings.editor.fontFamilyPlaceholder")} />
            </div>
            <p class="settings-hint settings-local-only-hint">${n("settings.editor.localOnlyHint")}</p>
        </div>
    `}var C0;var zf=O(()=>{e();si();Sn();cn();C0=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;Jn({id:"editor",label:"Editor",icon:C0,component:L0,order:150})});var d0={};function ur(n,i){try{let _=localStorage.getItem(n);return _===null?i:_==="true"}catch{return i}}function sr(n,i){try{localStorage.setItem(n,String(i))}catch(_){}}function gr(n,i){try{return localStorage.getItem(n)||i}catch{return i}}function $r(n,i){try{localStorage.setItem(n,i)}catch(_){}}function O0(){let{t:n}=L(),[i,_]=w(()=>ur("piclaw_dev_mode",!1)),[r,c]=w(()=>gr("piclaw_addons_catalog_url","")),[f,u]=w(()=>gr("piclaw_addons_catalog_urls","")),[g,l]=w(()=>gr("piclaw_addons_repo_url","")),[$,k]=w(()=>ur("piclaw_debug_sse",!1)),[o,b]=w(()=>ur("piclaw_debug_tool_calls",!1)),p=j(()=>{let K=!i;_(K),sr("piclaw_dev_mode",K)},[i]);return s`
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
                    <input type="text" value=${r}
                        onInput=${(K)=>{let t=K.target.value;c(t),$r("piclaw_addons_catalog_url",t)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.catalogHint")} (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>${n("settings.developer.additionalCatalogs")}</label>
                    <textarea
                        value=${f}
                        onInput=${(K)=>{let t=K.target.value;u(t),$r("piclaw_addons_catalog_urls",t)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.additionalHint")}</p>
                <div class="settings-row">
                    <label>${n("settings.developer.repoUrl")}</label>
                    <input type="text" value=${g}
                        onInput=${(K)=>{let t=K.target.value;l(t),$r("piclaw_addons_repo_url",t)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">${n("settings.developer.repoHintPre")} <code>bun add</code> ${n("settings.developer.repoHintPost")}</p>

                <h3 style="margin-top:16px">${n("settings.developer.debug")}</h3>
                <div class="settings-row">
                    <label>${n("settings.developer.logSse")}</label>
                    <input type="checkbox" checked=${$}
                        onChange=${()=>{let K=!$;k(K),sr("piclaw_debug_sse",K)}} />
                </div>
                <div class="settings-row">
                    <label>${n("settings.developer.logToolCalls")}</label>
                    <input type="checkbox" checked=${o}
                        onChange=${()=>{let K=!o;b(K),sr("piclaw_debug_tool_calls",K)}} />
                </div>
                <p class="settings-hint">${n("settings.developer.debugHint")}</p>
            `}
        </div>
    `}var E0;var Ff=O(()=>{e();si();cn();E0=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;Jn({id:"developer",label:"Developer",icon:E0,component:O0,order:900})});var tg={};un(tg,{openSettingsDialog:()=>bg,SettingsDialogContent:()=>ei,SettingsDialog:()=>kg});function ti(n){bi.push({ts:performance.now(),label:n})}function S0(){if(!bi.length)return;let n=bi[0].ts,i=bi.map((_)=>`+${(_.ts-n).toFixed(1)}ms ${_.label}`);console.info(`[settings-dialog perf]
`+i.join(`
`));try{window.__piclawSettingsPerfLog=i}catch(_){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:i})}).catch((_)=>{})}catch(_){}bi.length=0}function a0(n){let i=Si.get(n);if(i)return Promise.resolve(i);let _=Ei.get(n);if(_)return _;let r=e0[n]().then((c)=>{return Si.set(n,c),Ei.delete(n),c}).catch((c)=>{throw Ei.delete(n),c});return Ei.set(n,r),r}function di(n="Loading…"){return s`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function ei({onClose:n}){ti("SettingsDialogContent-render-start");let[i,_]=w(()=>t_()||"general"),[r,c]=w(hf),[f,u]=w(null),[g,l]=w(""),[,$]=w(0),[k,o]=w(()=>Object.fromEntries(Si.entries())),[b,p]=w(null),[K,t]=w({compact:!1,narrow:!1}),z=J(null),y=J(null),{t:v}=L(),R=(B)=>B?.isExtension?B.label:v(`settings.section.${B.id}`),G=(B)=>B?.isExtension?B.placeholder||v("settings.filter"):v(`settings.placeholder.${B.id}`);q(()=>{ti("SettingsDialogContent-mounted"),S0()},[]),q(()=>{let B=(A)=>{if(A.key==="Escape")n()};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[n]),q(()=>{let B=(A)=>{let D=typeof A?.detail?.section==="string"?A.detail.section.trim():"";if(D)_(D),l("")};return window.addEventListener("piclaw:open-settings",B),()=>window.removeEventListener("piclaw:open-settings",B)},[]),q(()=>{let B=()=>$((A)=>A+1);return window.addEventListener("piclaw:settings-panes-changed",B),()=>window.removeEventListener("piclaw:settings-panes-changed",B)},[]),q(()=>{fetch("/agent/settings-data").then((B)=>B.json()).then((B)=>{hf=B,c(B)}).catch(()=>c({}))},[]),q(()=>{let B=y.current;if(!B)return;let A=()=>{let D=B.clientWidth||0;t((rn)=>{let E={compact:D>0&&D<=860,narrow:D>0&&D<=720};return rn.compact===E.compact&&rn.narrow===E.narrow?rn:E})};if(A(),typeof ResizeObserver==="function"){let D=new ResizeObserver(()=>A());return D.observe(B),()=>D.disconnect()}return window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);let h=[...jf].sort((B,A)=>(B.order??500)-(A.order??500)),H=Jr().map((B)=>({id:B.id,label:B.label,icon:B.icon,searchable:B.searchable||!1,placeholder:B.searchPlaceholder,order:B.order??500,isExtension:!0,component:B.component})).sort(b_),P=[...h,...H],V=P.find((B)=>B.id===i)||jf.find((B)=>B.id===i);q(()=>{if(V?.searchable)requestAnimationFrame(()=>z.current?.focus())},[i]),q(()=>{if(V?.isExtension){p(null);return}let B=!1;if(k[i]){p(null);return}return p(i),a0(i).then((A)=>{if(B)return;o((D)=>D?.[i]?D:{...D||{},[i]:A})}).catch((A)=>{if(B)return;console.error(`[settings-dialog] Failed to lazy-load section "${i}".`,A)}).finally(()=>{if(!B)p((A)=>A===i?null:A)}),()=>{B=!0}},[i,V?.isExtension,k]);let x=j((B,A="info")=>{u(B?{text:B,type:A}:null)},[]),U=j((B)=>{_(B),l("");let A=m0[B];if(A&&!Wf.has(B))Wf.add(B),A().then(()=>$((D)=>D+1)).catch((D)=>{})},[]),F=j((B)=>{c((A)=>({...A||{},...B||{}}))},[]),N=()=>{if(V?.isExtension){if(!V.component)return di("Loading pane…");let A=V.component;return s`<${A} filter=${g} />`}let B=k[i];if(!B||b===i)return di(`${v("settings.loading")}`);switch(i){case"general":return s`<${B} settingsData=${r} setStatus=${x} mergeSettingsData=${F} />`;case"sessions":return s`<${B} settingsData=${r} setStatus=${x} mergeSettingsData=${F} />`;case"recordings":return s`<${B} filter=${g} setStatus=${x} />`;case"compaction":return s`<${B} settingsData=${r} setStatus=${x} mergeSettingsData=${F} />`;case"keyboard":return s`<${B} filter=${g} setStatus=${x} />`;case"workspace":return s`<${B} settingsData=${r} setStatus=${x} mergeSettingsData=${F} />`;case"environment":return s`<${B} settingsData=${r} filter=${g} setStatus=${x} mergeSettingsData=${F} />`;case"providers":return s`<${B} providers=${r?.providers} setStatus=${x} />`;case"models":return s`<${B} filter=${g} />`;case"theme":return s`<${B} themes=${r?.themes} colorKeys=${r?.colorKeys} settingsData=${r} setStatus=${x} mergeSettingsData=${F} />`;case"scheduled-tasks":return s`<${B} filter=${g} setStatus=${x} />`;case"quick-actions":return s`<${B} filter=${g} setStatus=${x} mergeSettingsData=${F} />`;case"keychain":return s`<${B} filter=${g} />`;case"tools":return s`<${B} toolsets=${r?.toolsets} filter=${g} settingsData=${r} mergeSettingsData=${F} />`;case"addons":return s`<${B} setStatus=${x} filter=${g} />`;default:return di(v("settings.loading"))}},Y=!V;return ti("SettingsDialogContent-render-end"),s`
        <div class="settings-dialog-backdrop" onClick=${(B)=>{if(B.target===B.currentTarget)n()}}>
            <div ref=${y} data-testid="settings-dialog" class=${`settings-dialog${K.compact?" settings-dialog-compact":""}${K.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">${v("settings.title")}</span>
                    ${V?.searchable&&s`
                        <input ref=${z} type="text" class="settings-header-filter"
                            placeholder=${G(V)}
                            value=${g} onInput=${(B)=>l(B.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title=${v("settings.close")}>✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${P.map((B,A)=>{let D=A>0&&!P[A-1].isExtension,rn=B.isExtension&&D;return s`
                                ${rn&&s`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${B.id===i?"active":""}`} onClick=${()=>U(B.id)}>
                                    <span class="settings-nav-icon">${B.icon}</span>
                                    <span class="settings-nav-label">${R(B)}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${Y?di(v("settings.loading")):N()}
                    </main>
                </div>
                ${f&&s`
                    <div class=${`settings-status-bar settings-status-bar-${f.type}`}>
                        ${f.type==="info"&&s`<span class="settings-spinner"></span>`}
                        <span>${f.text}</span>
                        ${f.type!=="info"&&s`<button class="settings-status-dismiss" onClick=${()=>u(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function kg(){let[n,i]=w(!1);if(q(()=>{let _=(c)=>{let f=Vi(c?.detail?.section);if(f)try{window.__piclawSettingsRequestedSection=f}catch(u){}i(!0)};window.addEventListener("piclaw:open-settings",_);let r=Er();if(r.open){if(r.section)try{window.__piclawSettingsRequestedSection=r.section}catch(c){}i(!0)}return()=>window.removeEventListener("piclaw:open-settings",_)},[]),!n)return null;return s`<${Lr} className="settings-portal"><${ei} onClose=${()=>i(!1)} /><//>`}function bg(n={}){Or(n)}var bi,hf=null,Si,Ei,e0,m0,Wf,ng,ig,_g,rg,cg,fg,ug,sg,gg,$g,og,lg,wg,yg,xg,jf;var Uf=O(()=>{e();cn();Cr();si();kc();bi=[];ti("module-eval-start");ti("imports-done");Si=new Map,Ei=new Map;Si.set("general",q_);e0={general:()=>Promise.resolve(q_),sessions:()=>Promise.resolve().then(() => (vc(),tc)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => (Kc(),pc)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (Hc(),Bc)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (Tc(),Gc)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (Ac(),qc)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (Ic(),Zc)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (Dc(),Yc)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Cc(),Lc)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (ff(),cf)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (gf(),sf)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (bf(),kf)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (vf(),tf)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (Kf(),pf)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (Hf(),Bf)).then((n)=>n.AddonsSection)},m0={"editor-settings":()=>Promise.resolve().then(() => (zf(),J0)).then(()=>{}),developer:()=>Promise.resolve().then(() => (Ff(),d0)).then(()=>{})},Wf=new Set;ng=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,ig=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,_g=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,rg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,cg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,fg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,ug=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,sg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,gg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,$g=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,og=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,lg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,wg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,yg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,xg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,jf=[{id:"general",label:"General",icon:ng,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:ig,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:_g,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:rg,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:ug,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:cg,searchable:!1,order:15},{id:"environment",label:"Environment",icon:fg,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:sg,searchable:!1,order:20},{id:"models",label:"Models",icon:gg,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:$g,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:og,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:wg,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:yg,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:lg,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:xg,searchable:!0,placeholder:"Filter add-ons…",order:90}]});e();Uf();si();var vg=s`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function pg({label:n,body:i,filter:_=""}){return s`
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
  `}function Kg(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let i of n)Jn({id:i.id,label:i.label,icon:vg,searchable:!0,searchPlaceholder:`Filter ${i.label} settings…`,order:i.id==="fixture-z-observability"?1:999,component:(_)=>s`<${pg} label=${i.label} body=${i.body} filter=${_?.filter||""} />`})}var tn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},Bg={current:tn.current,models:tn.models,model_options:tn.model_options,thinking_level:tn.thinking_level,supports_thinking:tn.supports_thinking,available_thinking_levels:tn.available_thinking_levels},Gf={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},Tf={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},_i=new URLSearchParams(window.location.search).get("real")!=="1",Pf=window.fetch.bind(window);function kn(n,i=200){return new Response(JSON.stringify(n),{status:i,headers:{"Content-Type":"application/json"}})}function Hg(){window.fetch=async(n,i)=>{let _=new URL(typeof n==="string"?n:n.url,window.location.href),r=String(i?.method||"GET").toUpperCase();if(!_i)return Pf(n,i);if(_.pathname==="/agent/settings-data")return kn(tn);if(_.pathname==="/agent/models")return kn(Bg);if(_.pathname==="/agent/addons")return kn(Gf);if(_.pathname.startsWith("/agent/addons/"))return kn({ok:!0,message:"Fixture add-on action accepted.",...Gf});if(_.pathname==="/agent/keychain"){if(r==="GET")return kn(Tf);if(r==="POST")return kn({ok:!0,...Tf})}if(_.pathname==="/agent/settings/general")return kn({ok:!0,settings:tn});if(_.pathname==="/agent/settings/widget-token/regenerate")return kn({ok:!0,settings:{...tn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(_.pathname.startsWith("/agent/default/message"))return kn({command:{status:"success",message:"Fixture command accepted."}});if(_.pathname.startsWith("/agent/settings/"))return kn({ok:!0,settings:tn,items:[],entries:[]});if(_.pathname==="/agent/client-perf")return kn({ok:!0});return Pf(n,i)}}function zg(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function Rf(n){try{window.__piclawSettingsRequestedSection=n}catch(i){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function Fg(){let n=new URLSearchParams(window.location.search),[i,_]=w(n.get("section")||"general"),[r,c]=w(Number(n.get("width")||900)),[f,u]=w(Number(n.get("height")||640)),[g,l]=w(_i),[$,k]=w(0),o=C(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),b=j((K)=>{_(K),Rf(K)},[]),p=j(()=>{_i=!_i,l(_i),k((K)=>K+1)},[]);return s`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${i} onChange=${(K)=>b(K.target.value)}>${o.map((K)=>s`<option value=${K}>${K}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${r} onInput=${(K)=>c(Number(K.target.value))} /> ${r}px</label>
        <label>Height <input type="range" min="420" max="900" value=${f} onInput=${(K)=>u(Number(K.target.value))} /> ${f}px</label>
        <button type="button" onClick=${p}>${g?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>k((K)=>K+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${r}px;--fixture-height:${f}px;`}>
        <${ei} key=${$} onClose=${()=>{}} />
      </div>
    </div>
  `}function hg(){Kg(),Hg(),zg();let n=new URLSearchParams(window.location.search);Rf(n.get("section")||"general");let i=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));i.id="settings-widget-fixture-root",Dn(s`<${Fg} />`,i),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:_i})}hg();

//# debugId=D2F1E1E50845314964756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
