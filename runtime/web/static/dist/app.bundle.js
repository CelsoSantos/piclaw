var lQ=Object.defineProperty;var nQ=(_)=>_;function dQ(_,$){this[_]=nQ.bind(null,$)}var iQ=(_,$)=>{for(var j in $)lQ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:dQ.bind($,j)})};var V8,X1,e3,rQ,M4,h3,_2,$2,j2,F6,U6,L6,Z2,N8={},G8=[],oQ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,U8=Array.isArray;function K4(_,$){for(var j in $)_[j]=$[j];return _}function H6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function L8(_,$,j){var Z,Y,Q,q={};for(Q in $)Q=="key"?Z=$[Q]:Q=="ref"?Y=$[Q]:q[Q]=$[Q];if(arguments.length>2&&(q.children=arguments.length>3?V8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Q in _.defaultProps)q[Q]===void 0&&(q[Q]=_.defaultProps[Q]);return q8(_,q,Z,Y,null)}function q8(_,$,j,Z,Y){var Q={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++e3:Y,__i:-1,__u:0};return Y==null&&X1.vnode!=null&&X1.vnode(Q),Q}function W8(_){return _.children}function Q5(_,$){this.props=_,this.context=$}function q5(_,$){if($==null)return _.__?q5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?q5(_):null}function sQ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Y=[],Q=K4({},$);Q.__v=$.__v+1,X1.vnode&&X1.vnode(Q),J6(_.__P,Q,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?q5($):j,!!(32&$.__u),Y),Q.__v=$.__v,Q.__.__k[Q.__i]=Q,K2(Z,Q,Y),$.__e=$.__=null,Q.__e!=j&&Y2(Q)}}function Y2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),Y2(_)}function W6(_){(!_.__d&&(_.__d=!0)&&M4.push(_)&&!X8.__r++||h3!=X1.debounceRendering)&&((h3=X1.debounceRendering)||_2)(X8)}function X8(){try{for(var _,$=1;M4.length;)M4.length>$&&M4.sort($2),_=M4.shift(),$=M4.length,sQ(_)}finally{M4.length=X8.__r=0}}function Q2(_,$,j,Z,Y,Q,q,K,N,G,V){var X,U,L,H,D,J,W,A=Z&&Z.__k||G8,E=$.length;for(N=aQ(j,$,A,N,E),X=0;X<E;X++)(L=j.__k[X])!=null&&(U=L.__i!=-1&&A[L.__i]||N8,L.__i=X,J=J6(_,L,U,Y,Q,q,K,N,G,V),H=L.__e,L.ref&&U.ref!=L.ref&&(U.ref&&O6(U.ref,null,L),V.push(L.ref,L.__c||H,L)),D==null&&H!=null&&(D=H),(W=!!(4&L.__u))||U.__k===L.__k?N=q2(L,N,_,W):typeof L.type=="function"&&J!==void 0?N=J:H&&(N=H.nextSibling),L.__u&=-7);return j.__e=D,N}function aQ(_,$,j,Z,Y){var Q,q,K,N,G,V=j.length,X=V,U=0;for(_.__k=Array(Y),Q=0;Q<Y;Q++)(q=$[Q])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Q]=q8(null,q,null,null,null):U8(q)?q=_.__k[Q]=q8(W8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Q]=q8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Q]=q,N=Q+U,q.__=_,q.__b=_.__b+1,K=null,(G=q.__i=tQ(q,j,N,X))!=-1&&(X--,(K=j[G])&&(K.__u|=2)),K==null||K.__v==null?(G==-1&&(Y>V?U--:Y<V&&U++),typeof q.type!="function"&&(q.__u|=4)):G!=N&&(G==N-1?U--:G==N+1?U++:(G>N?U--:U++,q.__u|=4))):_.__k[Q]=null;if(X)for(Q=0;Q<V;Q++)(K=j[Q])!=null&&(2&K.__u)==0&&(K.__e==Z&&(Z=q5(K)),G2(K,K));return Z}function q2(_,$,j,Z){var Y,Q;if(typeof _.type=="function"){for(Y=_.__k,Q=0;Y&&Q<Y.length;Q++)Y[Q]&&(Y[Q].__=_,$=q2(Y[Q],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=q5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function tQ(_,$,j,Z){var Y,Q,q,K=_.key,N=_.type,G=$[j],V=G!=null&&(2&G.__u)==0;if(G===null&&K==null||V&&K==G.key&&N==G.type)return j;if(Z>(V?1:0)){for(Y=j-1,Q=j+1;Y>=0||Q<$.length;)if((G=$[q=Y>=0?Y--:Q++])!=null&&(2&G.__u)==0&&K==G.key&&N==G.type)return q}return-1}function p3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||oQ.test($)?j:j+"px"}function Q8(_,$,j,Z,Y){var Q,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||p3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||p3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Q=$!=($=$.replace(j2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Q]=j,j?Z?j.u=Z.u:(j.u=F6,_.addEventListener($,Q?L6:U6,Q)):_.removeEventListener($,Q?L6:U6,Q);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function c3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=F6++;else if($.t<j.u)return;return j(X1.event?X1.event($):$)}}}function J6(_,$,j,Z,Y,Q,q,K,N,G){var V,X,U,L,H,D,J,W,A,E,f,y,p,l,T,k=$.type;if($.constructor!==void 0)return null;128&j.__u&&(N=!!(32&j.__u),Q=[K=$.__e=j.__e]),(V=X1.__b)&&V($);_:if(typeof k=="function")try{if(W=$.props,A=k.prototype&&k.prototype.render,E=(V=k.contextType)&&Z[V.__c],f=V?E?E.props.value:V.__:Z,j.__c?J=(X=$.__c=j.__c).__=X.__E:(A?$.__c=X=new k(W,f):($.__c=X=new Q5(W,f),X.constructor=k,X.render=_q),E&&E.sub(X),X.state||(X.state={}),X.__n=Z,U=X.__d=!0,X.__h=[],X._sb=[]),A&&X.__s==null&&(X.__s=X.state),A&&k.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=K4({},X.__s)),K4(X.__s,k.getDerivedStateFromProps(W,X.__s))),L=X.props,H=X.state,X.__v=$,U)A&&k.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),A&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(A&&k.getDerivedStateFromProps==null&&W!==L&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(W,f),$.__v==j.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(W,X.__s,f)===!1){$.__v!=j.__v&&(X.props=W,X.state=X.__s,X.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(F){F&&(F.__=$)}),G8.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&q.push(X);break _}X.componentWillUpdate!=null&&X.componentWillUpdate(W,X.__s,f),A&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(L,H,D)})}if(X.context=f,X.props=W,X.__P=_,X.__e=!1,y=X1.__r,p=0,A)X.state=X.__s,X.__d=!1,y&&y($),V=X.render(X.props,X.state,X.context),G8.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,y&&y($),V=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++p<25);X.state=X.__s,X.getChildContext!=null&&(Z=K4(K4({},Z),X.getChildContext())),A&&!U&&X.getSnapshotBeforeUpdate!=null&&(D=X.getSnapshotBeforeUpdate(L,H)),l=V!=null&&V.type===W8&&V.key==null?N2(V.props.children):V,K=Q2(_,U8(l)?l:[l],$,j,Z,Y,Q,q,K,N,G),X.base=$.__e,$.__u&=-161,X.__h.length&&q.push(X),J&&(X.__E=X.__=null)}catch(F){if($.__v=null,N||Q!=null)if(F.then){for($.__u|=N?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;Q[Q.indexOf(K)]=null,$.__e=K}else{for(T=Q.length;T--;)H6(Q[T]);B6($)}else $.__e=j.__e,$.__k=j.__k,F.then||B6($);X1.__e(F,$,j)}else Q==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=eQ(j.__e,$,j,Z,Y,Q,q,N,G);return(V=X1.diffed)&&V($),128&$.__u?void 0:K}function B6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(B6))}function K2(_,$,j){for(var Z=0;Z<j.length;Z++)O6(j[Z],j[++Z],j[++Z]);X1.__c&&X1.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(Q){Q.call(Y)})}catch(Q){X1.__e(Q,Y.__v)}})}function N2(_){return typeof _!="object"||_==null||_.__b>0?_:U8(_)?_.map(N2):K4({},_)}function eQ(_,$,j,Z,Y,Q,q,K,N){var G,V,X,U,L,H,D,J=j.props||N8,W=$.props,A=$.type;if(A=="svg"?Y="http://www.w3.org/2000/svg":A=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),Q!=null){for(G=0;G<Q.length;G++)if((L=Q[G])&&"setAttribute"in L==!!A&&(A?L.localName==A:L.nodeType==3)){_=L,Q[G]=null;break}}if(_==null){if(A==null)return document.createTextNode(W);_=document.createElementNS(Y,A,W.is&&W),K&&(X1.__m&&X1.__m($,Q),K=!1),Q=null}if(A==null)J===W||K&&_.data==W||(_.data=W);else{if(Q=Q&&V8.call(_.childNodes),!K&&Q!=null)for(J={},G=0;G<_.attributes.length;G++)J[(L=_.attributes[G]).name]=L.value;for(G in J)L=J[G],G=="dangerouslySetInnerHTML"?X=L:G=="children"||(G in W)||G=="value"&&("defaultValue"in W)||G=="checked"&&("defaultChecked"in W)||Q8(_,G,null,L,Y);for(G in W)L=W[G],G=="children"?U=L:G=="dangerouslySetInnerHTML"?V=L:G=="value"?H=L:G=="checked"?D=L:K&&typeof L!="function"||J[G]===L||Q8(_,G,L,J[G],Y);if(V)K||X&&(V.__html==X.__html||V.__html==_.innerHTML)||(_.innerHTML=V.__html),$.__k=[];else if(X&&(_.innerHTML=""),Q2($.type=="template"?_.content:_,U8(U)?U:[U],$,j,Z,A=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,Q,q,Q?Q[0]:j.__k&&q5(j,0),K,N),Q!=null)for(G=Q.length;G--;)H6(Q[G]);K||(G="value",A=="progress"&&H==null?_.removeAttribute("value"):H!=null&&(H!==_[G]||A=="progress"&&!H||A=="option"&&H!=J[G])&&Q8(_,G,H,J[G],Y),G="checked",D!=null&&D!=_[G]&&Q8(_,G,D,J[G],Y))}return _}function O6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Y){X1.__e(Y,j)}}function G2(_,$,j){var Z,Y;if(X1.unmount&&X1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||O6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Q){X1.__e(Q,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Y=0;Y<Z.length;Y++)Z[Y]&&G2(Z[Y],$,j||typeof _.type!="function");j||H6(_.__e),_.__c=_.__=_.__e=void 0}function _q(_,$,j){return this.constructor(_,j)}function x4(_,$,j){var Z,Y,Q,q;$==document&&($=document.documentElement),X1.__&&X1.__(_,$),Y=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Q=[],q=[],J6($,_=(!Z&&j||$).__k=L8(W8,null,[_]),Y||N8,N8,$.namespaceURI,!Z&&j?[j]:Y?null:$.firstChild?V8.call($.childNodes):null,Q,!Z&&j?j:Y?Y.__e:$.firstChild,Z,q),K2(Q,_,q)}function X2(_){function $(j){var Z,Y;return this.getChildContext||(Z=new Set,(Y={})[$.__c]=this,this.getChildContext=function(){return Y},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Q){this.props.value!=Q.value&&Z.forEach(function(q){q.__e=!0,W6(q)})},this.sub=function(Q){Z.add(Q);var q=Q.componentWillUnmount;Q.componentWillUnmount=function(){Z&&Z.delete(Q),q&&q.call(Q)}}),j.children}return $.__c="__cC"+Z2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}V8=G8.slice,X1={__e:function(_,$,j,Z){for(var Y,Q,q;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((Q=Y.constructor)&&Q.getDerivedStateFromError!=null&&(Y.setState(Q.getDerivedStateFromError(_)),q=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,Z||{}),q=Y.__d),q)return Y.__E=Y}catch(K){_=K}throw _}},e3=0,rQ=function(_){return _!=null&&_.constructor===void 0},Q5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=K4({},this.state),typeof _=="function"&&(_=_(K4({},j),this.props)),_&&K4(j,_),_!=null&&this.__v&&($&&this._sb.push($),W6(this))},Q5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),W6(this))},Q5.prototype.render=W8,M4=[],_2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$2=function(_,$){return _.__v.__b-$.__v.__b},X8.__r=0,j2=/(PointerCapture)$|Capture$/i,F6=0,U6=c3(!1),L6=c3(!0),Z2=0;var I4,G1,V6,l3,K5=0,V2=[],F1=X1,n3=F1.__b,d3=F1.__r,i3=F1.diffed,r3=F1.__c,o3=F1.unmount,s3=F1.__;function N5(_,$){F1.__h&&F1.__h(G1,_,K5||$),K5=0;var j=G1.__H||(G1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function g(_){return K5=1,D6(z2,_)}function D6(_,$,j){var Z=N5(I4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):z2(void 0,$),function(K){var N=Z.__N?Z.__N[0]:Z.__[0],G=Z.t(N,K);N!==G&&(Z.__N=[G,Z.__[1]],Z.__c.setState({}))}],Z.__c=G1,!G1.__f)){var Y=function(K,N,G){if(!Z.__c.__H)return!0;var V=Z.__c.__H.__.filter(function(U){return U.__c});if(V.every(function(U){return!U.__N}))return!Q||Q.call(this,K,N,G);var X=Z.__c.props!==K;return V.some(function(U){if(U.__N){var L=U.__[0];U.__=U.__N,U.__N=void 0,L!==U.__[0]&&(X=!0)}}),Q&&Q.call(this,K,N,G)||X};G1.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:q}=G1;G1.componentWillUpdate=function(K,N,G){if(this.__e){var V=Q;Q=void 0,Y(K,N,G),Q=V}q&&q.call(this,K,N,G)},G1.shouldComponentUpdate=Y}return Z.__N||Z.__}function b(_,$){var j=N5(I4++,3);!F1.__s&&A6(j.__H,$)&&(j.__=_,j.u=$,G1.__H.__h.push(j))}function P5(_,$){var j=N5(I4++,4);!F1.__s&&A6(j.__H,$)&&(j.__=_,j.u=$,G1.__h.push(j))}function x(_){return K5=5,w0(function(){return{current:_}},[])}function U2(_,$,j){K5=6,P5(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function w0(_,$){var j=N5(I4++,7);return A6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function C(_,$){return K5=8,w0(function(){return _},$)}function L2(_){var $=G1.context[_.__c],j=N5(I4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(G1)),$.props.value):_.__}function W2(_,$){F1.useDebugValue&&F1.useDebugValue($?$(_):_)}function B2(_){var $=N5(I4++,10),j=g();return $.__=_,G1.componentDidCatch||(G1.componentDidCatch=function(Z,Y){$.__&&$.__(Z,Y),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function $q(){for(var _;_=V2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(K8),$.__h.some(z6),$.__h=[]}catch(j){$.__h=[],F1.__e(j,_.__v)}}}F1.__b=function(_){G1=null,n3&&n3(_)},F1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),s3&&s3(_,$)},F1.__r=function(_){d3&&d3(_),I4=0;var $=(G1=_.__c).__H;$&&(V6===G1?($.__h=[],G1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(K8),$.__h.some(z6),$.__h=[],I4=0)),V6=G1},F1.diffed=function(_){i3&&i3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(V2.push($)!==1&&l3===F1.requestAnimationFrame||((l3=F1.requestAnimationFrame)||jq)($q)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),V6=G1=null},F1.__c=function(_,$){$.some(function(j){try{j.__h.some(K8),j.__h=j.__h.filter(function(Z){return!Z.__||z6(Z)})}catch(Z){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],F1.__e(Z,j.__v)}}),r3&&r3(_,$)},F1.unmount=function(_){o3&&o3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{K8(Z)}catch(Y){$=Y}}),j.__H=void 0,$&&F1.__e($,j.__v))};var a3=typeof requestAnimationFrame=="function";function jq(_){var $,j=function(){clearTimeout(Z),a3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);a3&&($=requestAnimationFrame(j))}function K8(_){var $=G1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),G1=$}function z6(_){var $=G1;_.__c=_.__(),G1=$}function A6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function z2(_,$){return typeof $=="function"?$(_):$}var F2=function(_,$,j,Z){var Y;$[0]=0;for(var Q=1;Q<$.length;Q++){var q=$[Q++],K=$[Q]?($[0]|=q?1:2,j[$[Q++]]):$[++Q];q===3?Z[0]=K:q===4?Z[1]=Object.assign(Z[1]||{},K):q===5?(Z[1]=Z[1]||{})[$[++Q]]=K:q===6?Z[1][$[++Q]]+=K+"":q?(Y=_.apply(K,F2(_,K,j,["",null])),Z.push(Y),K[0]?$[0]|=2:($[Q-2]=0,$[Q]=Y)):Z.push(K)}return Z},t3=new Map;function Zq(_){var $=t3.get(this);return $||($=new Map,t3.set(this,$)),($=F2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Y,Q=1,q="",K="",N=[0],G=function(U){Q===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,U,q):Q===3&&(U||q)?(N.push(3,U,q),Q=2):Q===2&&q==="..."&&U?N.push(4,U,0):Q===2&&q&&!U?N.push(5,0,!0,q):Q>=5&&((q||!U&&Q===5)&&(N.push(Q,0,q,Y),Q=6),U&&(N.push(Q,U,0,Y),Q=6)),q=""},V=0;V<j.length;V++){V&&(Q===1&&G(),G(V));for(var X=0;X<j[V].length;X++)Z=j[V][X],Q===1?Z==="<"?(G(),N=[N],Q=3):q+=Z:Q===4?q==="--"&&Z===">"?(Q=1,q=""):q=Z+q[0]:K?Z===K?K="":q+=Z:Z==='"'||Z==="'"?K=Z:Z===">"?(G(),Q=1):Q&&(Z==="="?(Q=5,Y=q,q=""):Z==="/"&&(Q<5||j[V][X+1]===">")?(G(),Q===3&&(N=N[0]),Q=N,(N=N[0]).push(2,0,Q),Q=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(G(),Q=2):q+=Z),Q===3&&q==="!--"&&(Q=4,N=N[0])}return G(),N}(_)),$),arguments,[])).length>1?$:$[0]}var B=Zq.bind(L8);var c1={};iQ(c1,{uploadWorkspaceFile:()=>z8,uploadMedia:()=>P6,updateWorkspaceFile:()=>Aq,submitAdaptiveCardAction:()=>y6,streamSidePrompt:()=>Jq,stopAutoresearch:()=>Wq,steerAgentQueueItem:()=>Hq,setWorkspaceVisibility:()=>u5,setAgentThoughtVisibility:()=>R6,sendPeerAgentMessage:()=>Vq,sendAgentMessage:()=>G5,searchPosts:()=>k6,restoreChatBranch:()=>Xq,respondToAgentRequest:()=>B8,renameWorkspaceFile:()=>g6,renameChatBranch:()=>Nq,removeAgentQueueItem:()=>Fq,pruneChatBranch:()=>Gq,moveWorkspaceEntry:()=>m6,getWorkspaceTree:()=>w5,getWorkspaceRawUrl:()=>F8,getWorkspaceFile:()=>R5,getWorkspaceDownloadUrl:()=>H8,getWorkspaceBranch:()=>Dq,getTimeline:()=>l4,getThumbnailUrl:()=>u6,getThread:()=>M6,getPostsByHashtag:()=>E6,getMediaUrl:()=>P_,getMediaText:()=>f6,getMediaInfo:()=>X5,getMediaBlob:()=>Oq,getChatBranches:()=>Kq,getAutoresearchStatus:()=>Lq,getAgents:()=>T6,getAgentThought:()=>w6,getAgentStatus:()=>C6,getAgentQueueState:()=>zq,getAgentModels:()=>S5,getAgentContext:()=>Uq,getActiveChatAgents:()=>x6,forkChatBranch:()=>y5,dismissAutoresearch:()=>Bq,deleteWorkspaceFile:()=>h6,deletePost:()=>I6,createWorkspaceFile:()=>b6,createReply:()=>qq,createPost:()=>Qq,attachWorkspaceFile:()=>v6,addToWhitelist:()=>S6,SSEClient:()=>J8});async function i0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function H2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Q of $)if(Q.startsWith("event:"))j=Q.slice(6).trim()||"message";else if(Q.startsWith("data:"))Z.push(Q.slice(5).trim());let Y=Z.join(`
`);if(!Y)return null;try{return{event:j,data:JSON.parse(Y)}}catch{return{event:j,data:Y}}}async function Yq(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Y="";while(!0){let{value:q,done:K}=await j.read();if(K)break;Y+=Z.decode(q,{stream:!0});let N=Y.split(`

`);Y=N.pop()||"";for(let G of N){let V=H2(G);if(V)$(V.event,V.data)}}Y+=Z.decode();let Q=H2(Y);if(Q)$(Q.event,Q.data)}async function l4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return i0(Z)}async function E6(_,$=50,j=0,Z=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return i0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Y}`)}async function k6(_,$=50,j=0,Z=null,Y="current",Q=null){let q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",K=Y?`&scope=${encodeURIComponent(Y)}`:"",N=Q?`&root_chat_jid=${encodeURIComponent(Q)}`:"";return i0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${K}${N}`)}async function M6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return i0(`/thread/${_}${j}`)}async function Qq(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return i0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function qq(_,$,j=[],Z=null){let Y=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return i0(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function I6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return i0(Y,{method:"DELETE"})}async function G5(_,$,j=null,Z=[],Y=null,Q=null){let q=Q?`?chat_jid=${encodeURIComponent(Q)}`:"",K={content:$,thread_id:j,media_ids:Z};if(Y==="auto"||Y==="queue"||Y==="steer")K.mode=Y;return i0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(K)})}async function x6(){return i0("/agent/active-chats")}async function Kq(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return i0(`/agent/branches${Z}`)}async function y5(_,$={}){return i0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function Nq(_,$={}){return i0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function Gq(_){return i0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function Xq(_,$={}){return i0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function Vq(_,$,j,Z="auto",Y={}){let Q={source_chat_jid:_,content:j,mode:Z,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return i0("/agent/peer-message",{method:"POST",body:JSON.stringify(Q)})}async function T6(){return i0("/agent/roster")}async function C6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/status${$}`)}async function Uq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/context${$}`)}async function Lq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/autoresearch/status${$}`)}async function Wq(_=null,$={}){return i0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function Bq(_=null){return i0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function zq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/queue-state${$}`)}async function Fq(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function Hq(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function S5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/models${$}`)}async function P6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function B8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${Z.status}`)}return Z.json()}async function y6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function Jq(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Q=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Q.error||`HTTP ${j.status}`)}let Z=null,Y=null;if(await Yq(j,(Q,q)=>{if($.onEvent?.(Q,q),Q==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Q==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Q==="side_prompt_done")Z=q;else if(Q==="side_prompt_error")Y=q}),Y){let Q=Error(Y?.error||"Side prompt failed");throw Q.payload=Y,Q}return Z}async function S6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function w6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return i0(j)}async function R6(_,$,j){return i0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function P_(_){return`/media/${_}`}function u6(_){return`/media/${_}/thumbnail`}async function X5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function f6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Oq(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function w5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return i0(Z)}async function Dq(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return i0($)}async function R5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return i0(Y)}async function Aq(_,$){return i0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function v6(_){return i0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function z8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Y=new URLSearchParams;if($)Y.set("path",$);if(j.overwrite)Y.set("overwrite","1");let Q=Y.toString(),q=Q?`/workspace/upload?${Q}`:"/workspace/upload",K=await fetch(""+q,{method:"POST",body:Z});if(!K.ok){let N=await K.json().catch(()=>({error:"Upload failed"})),G=Error(N.error||`HTTP ${K.status}`);throw G.status=K.status,G.code=N.code,G}return K.json()}async function b6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Create failed"})),Q=Error(Y.error||`HTTP ${Z.status}`);throw Q.status=Z.status,Q.code=Y.code,Q}return Z.json()}async function g6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function m6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function h6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return i0($,{method:"DELETE"})}async function u5(_,$=!1){return i0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function F8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function H8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class J8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Y=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class J2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Y=Z.canHandle(_);if(Y===!1||Y===0)continue;let Q=Y===!0?0:typeof Y==="number"?Y:0;if(Q>j)j=Q,$=Z}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var p0=new J2;var O8=null,p6=null;function Eq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function O2(){if(p6)return Promise.resolve(p6);if(!O8)O8=import(Eq()).then((_)=>{return p6=_,_}).catch((_)=>{throw O8=null,_});return O8}class D2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await O2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var c6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new D2(_,$)}};function l6(){O2().catch(()=>{})}var V5="piclaw://terminal";var kq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Mq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},D8=null,n6=null;function Iq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function xq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Y,Q)=>{let q=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!Iq(q))return $(Y,Q);if(Y instanceof Request)return $(new Request(j,Y));return $(j,Q)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Tq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!D8)D8=xq(()=>Promise.resolve($.init?.())).catch((j)=>{throw D8=null,j});return await D8,$}async function Cq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!n6)n6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await n6}async function Pq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function yq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Sq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function N4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function wq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function A2(){let _=Sq(),$=_?Mq:kq,j=N4("--bg-primary",_?"#000000":"#ffffff"),Z=N4("--text-primary",_?"#e7e9ea":"#0f1419"),Y=N4("--text-secondary",_?"#71767b":"#536471"),Q=N4("--accent-color","#1d9bf0"),q=N4("--danger-color",_?"#ff7b72":"#cf222e"),K=N4("--success-color",_?"#7ee787":"#1a7f37"),N=N4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=N4("--border-color",_?"#2f3336":"#eff3f4"),V=N4("--accent-soft-strong",wq(Q,_?"47":"33"));return{background:j,foreground:Z,cursor:Q,cursorAccent:j,selectionBackground:V,selectionForeground:Z,black:N,red:q,green:K,yellow:$.yellow,blue:Q,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class d6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,Q=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Y)}x${Math.round(Q)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Tq();if(await Cq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:A2()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=A2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Y=this.bodyEl.querySelector("canvas");if(Y instanceof HTMLElement)Y.style.backgroundColor=_.background,Y.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Pq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(yq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Y})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Y}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Y=null;try{Y=JSON.parse(String(Z.data))}catch{Y={type:"output",data:String(Z.data)}}if(Y?.type==="output"&&typeof Y.data==="string"){_.write?.(Y.data);return}if(Y?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var i6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new d6(_,$)}},r6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new d6(_,$)}};function G4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function A8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Y=Number(j?.maxTouchPoints||0),Q=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Q||Y>1||q)}function E2(_,$={}){if(G4($))return null;if(A8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Rq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function o6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function s6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function a6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function t6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function X4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Y),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function k2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Y),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function M2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Y),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let Q=j?.params&&typeof j.params==="object"?j.params:null;if(Q)for(let[q,K]of Object.entries(Q)){let N=String(q||"").trim();if(!N)continue;if(K===null||K===void 0||K==="")Z.searchParams.delete(N);else Z.searchParams.set(N,String(K))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function Rq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function uq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function I2(_,$={}){if(G4($))return null;if(A8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:uq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function f5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function fq(_){try{return JSON.parse(_)}catch{return null}}function vq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function bq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class e6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=bq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||fq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=vq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var v5=()=>{throw Error("Operation requires compiling with --exportRuntime")},gq=typeof BigUint64Array<"u",b5=Symbol();var mq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function x2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return mq.decode(Z)}catch{let Y="",Q=0;while(j-Q>1024)Y+=String.fromCharCode(...Z.subarray(Q,Q+=1024));return Y+String.fromCharCode(...Z.subarray(Q))}}function T2(_){let $={};function j(Y,Q){if(!Y)return"<yet unknown>";return x2(Y.buffer,Q)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Q,q,K,N){let G=$.memory||Z.memory;throw Error(`abort: ${j(G,Q)} at ${j(G,q)}:${K}:${N}`)},Z.trace=Z.trace||function(Q,q,...K){let N=$.memory||Z.memory;console.log(`trace: ${j(N,Q)}${q?" ":""}${K.slice(0,q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function C2(_,$){let j=$.exports,Z=j.memory,Y=j.table,Q=j.__new||v5,q=j.__pin||v5,K=j.__unpin||v5,N=j.__collect||v5,G=j.__rtti_base,V=G?(F)=>F[G>>>2]:v5;_.__new=Q,_.__pin=q,_.__unpin=K,_.__collect=N;function X(F){let I=new Uint32Array(Z.buffer);if((F>>>=0)>=V(I))throw Error(`invalid id: ${F}`);return I[(G+4>>>2)+F]}function U(F){let I=X(F);if(!(I&7))throw Error(`not an array: ${F}, flags=${I}`);return I}function L(F){return 31-Math.clz32(F>>>6&31)}function H(F){if(F==null)return 0;let I=F.length,v=Q(I<<1,2),o=new Uint16Array(Z.buffer);for(let m=0,s=v>>>1;m<I;++m)o[s+m]=F.charCodeAt(m);return v}_.__newString=H;function D(F){if(F==null)return 0;let I=new Uint8Array(F),v=Q(I.length,1);return new Uint8Array(Z.buffer).set(I,v),v}_.__newArrayBuffer=D;function J(F){if(!F)return null;let I=Z.buffer;if(new Uint32Array(I)[F+-8>>>2]!==2)throw Error(`not a string: ${F}`);return x2(I,F)}_.__getString=J;function W(F,I,v){let o=Z.buffer;if(v)switch(F){case 2:return new Float32Array(o);case 3:return new Float64Array(o)}else switch(F){case 0:return new(I?Int8Array:Uint8Array)(o);case 1:return new(I?Int16Array:Uint16Array)(o);case 2:return new(I?Int32Array:Uint32Array)(o);case 3:return new(I?BigInt64Array:BigUint64Array)(o)}throw Error(`unsupported align: ${F}`)}function A(F,I=0){let v=I,o=U(F),m=L(o),s=typeof v!=="number",r=s?v.length:v,e=Q(r<<m,o&4?F:1),Q0;if(o&4)Q0=e;else{q(e);let $0=Q(o&2?16:12,F);K(e);let K0=new Uint32Array(Z.buffer);if(K0[$0+0>>>2]=e,K0[$0+4>>>2]=e,K0[$0+8>>>2]=r<<m,o&2)K0[$0+12>>>2]=r;Q0=$0}if(s){let $0=W(m,o&2048,o&4096),K0=e>>>m;if(o&16384)for(let W0=0;W0<r;++W0)$0[K0+W0]=v[W0];else $0.set(v,K0)}return Q0}_.__newArray=A;function E(F){let I=new Uint32Array(Z.buffer),v=I[F+-8>>>2],o=U(v),m=L(o),s=o&4?F:I[F+4>>>2],r=o&2?I[F+12>>>2]:I[s+-4>>>2]>>>m;return W(m,o&2048,o&4096).subarray(s>>>=m,s+r)}_.__getArrayView=E;function f(F){let I=E(F),v=I.length,o=Array(v);for(let m=0;m<v;m++)o[m]=I[m];return o}_.__getArray=f;function y(F){let I=Z.buffer,v=new Uint32Array(I)[F+-4>>>2];return I.slice(F,F+v)}_.__getArrayBuffer=y;function p(F){if(!Y)throw Error("Operation requires compiling with --exportTable");let I=new Uint32Array(Z.buffer)[F>>>2];return Y.get(I)}_.__getFunction=p;function l(F,I,v){return new F(T(F,I,v))}function T(F,I,v){let o=Z.buffer,m=new Uint32Array(o);return new F(o,m[v+4>>>2],m[v+8>>>2]>>>I)}function k(F,I,v){_[`__get${I}`]=l.bind(null,F,v),_[`__get${I}View`]=T.bind(null,F,v)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((F)=>{k(F,F.name,31-Math.clz32(F.BYTES_PER_ELEMENT))}),gq)[BigUint64Array,BigInt64Array].forEach((F)=>{k(F,F.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Y,pq(j,_)}function P2(_){return typeof Response<"u"&&_ instanceof Response}function hq(_){return _ instanceof WebAssembly.Module}async function _$(_,$={}){if(P2(_=await _))return E8(_,$);let j=hq(_)?_:await WebAssembly.compile(_),Z=T2($),Y=await WebAssembly.instantiate(j,$),Q=C2(Z,Y);return{module:j,instance:Y,exports:Q}}async function E8(_,$={}){if(!WebAssembly.instantiateStreaming)return _$(P2(_=await _)?_.arrayBuffer():_,$);let j=T2($),Z=await WebAssembly.instantiateStreaming(_,$),Y=C2(j,Z.instance);return{...Z,exports:Y}}function pq(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Y=_[Z],Q=Z.split("."),q=$;while(Q.length>1){let G=Q.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let K=Q[0],N=K.indexOf("#");if(N>=0){let G=K.substring(0,N),V=q[G];if(typeof V>"u"||!V.prototype){let X=function(...U){return X.wrap(X.prototype.constructor(0,...U))};if(X.prototype={valueOf(){return this[b5]}},X.wrap=function(U){return Object.create(X.prototype,{[b5]:{value:U,writable:!1}})},V)Object.getOwnPropertyNames(V).forEach((U)=>Object.defineProperty(X,U,Object.getOwnPropertyDescriptor(V,U)));q[G]=X}if(K=K.substring(N+1),q=q[G].prototype,/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4))){let X=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(q,K,{get(){return X(this[b5])},set(L){U(this[b5],L)},enumerable:!0})}}else if(K==="constructor")(q[K]=function(...X){return j(X.length),Y(...X)}).original=Y;else(q[K]=function(...X){return j(X.length),Y(this[b5],...X)}).original=Y}else if(/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4)))Object.defineProperty(q,K,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==j)(q[K]=(...G)=>{return j(G.length),Y(...G)}).original=Y;else q[K]=Y}return $}var lq="/static/js/vendor/remote-display-decoder.wasm",k8=null;function y2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function S2(){if(k8)return k8;return k8=(async()=>{try{let Z=function(Y,Q,q,K,N,G,V){let X=y2(Q),U=j.__pin(j.__newArrayBuffer(X));try{return j[Y](U,q,K,N,G,V.bitsPerPixel,V.bigEndian?1:0,V.trueColor?1:0,V.redMax,V.greenMax,V.blueMax,V.redShift,V.greenShift,V.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(lq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof E8==="function"?await E8(_,{}):await _$(await _.arrayBuffer(),{})).exports;for(let Y of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Y]!=="function")throw Error(`${Y} export is missing.`);return{initFramebuffer(Y,Q){j.initFramebuffer(Y,Q)},getFramebuffer(){let Y=j.getFramebufferPtr(),Q=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Y,Q).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Y,Q,q,K,N,G){return Z("processRawRect",Y,Q,q,K,N,G)},processCopyRect(Y,Q,q,K,N,G){return j.processCopyRect(Y,Q,q,K,N,G)},processRreRect(Y,Q,q,K,N,G){return Z("processRreRect",Y,Q,q,K,N,G)},processHextileRect(Y,Q,q,K,N,G){return Z("processHextileRect",Y,Q,q,K,N,G)},processZrleTileData(Y,Q,q,K,N,G){return Z("processZrleTileData",Y,Q,q,K,N,G)},decodeRawRectToRgba(Y,Q,q,K){let N=y2(Y),G=j.__pin(j.__newArrayBuffer(N));try{let V=j.__pin(j.decodeRawRectToRgba(G,Q,q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(V))}finally{j.__unpin(V)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),k8}function U5(_,$,j){return Math.max($,Math.min(j,_))}function M8(_,$,j){let Z=new Uint8Array(6),Y=U5(Math.floor(Number($||0)),0,65535),Q=U5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=U5(Math.floor(Number(_||0)),0,255),Z[2]=Y>>8&255,Z[3]=Y&255,Z[4]=Q>>8&255,Z[5]=Q&255,Z}function j$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function w2(_,$,j,Z,Y){let Q=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Math.floor(Number(Y||0))),K=Math.max(1,Number(j?.width||0)),N=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/K,V=(Number($||0)-Number(j?.top||0))/N;return{x:U5(Math.floor(G*Q),0,Math.max(0,Q-1)),y:U5(Math.floor(V*q),0,Math.max(0,q-1))}}function R2(_,$,j,Z=0){let Y=Number(_)<0?8:16,Q=U5(Number(Z||0)|Y,0,255);return[M8(Q,$,j),M8(Number(Z||0),$,j)]}function u2(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function g5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function f2(_,$,j,Z){let Y=Math.max(1,Math.floor(Number(_||0))),Q=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),K=Math.max(1,Math.floor(Number(Z||0))),N=Math.min(Y/q,Q/K);if(!Number.isFinite(N)||N<=0)return 1;return Math.max(0.01,N)}var $$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)$$[`F${_}`]=65470+(_-1);function Z$(_){let $=[_?.key,_?.code];for(let Q of $)if(Q&&Object.prototype.hasOwnProperty.call($$,Q))return $$[Q];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Y=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Y){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var y1=Uint8Array,W_=Uint16Array,U$=Int32Array,I8=new y1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),x8=new y1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),N$=new y1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),m2=function(_,$){var j=new W_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Y=new U$(j[30]);for(var Z=1;Z<30;++Z)for(var Q=j[Z];Q<j[Z+1];++Q)Y[Q]=Q-j[Z]<<5|Z;return{b:j,r:Y}},h2=m2(I8,2),p2=h2.b,G$=h2.r;p2[28]=258,G$[258]=28;var c2=m2(x8,0),nq=c2.b,v2=c2.r,X$=new W_(32768);for(h0=0;h0<32768;++h0)r_=(h0&43690)>>1|(h0&21845)<<1,r_=(r_&52428)>>2|(r_&13107)<<2,r_=(r_&61680)>>4|(r_&3855)<<4,X$[h0]=((r_&65280)>>8|(r_&255)<<8)>>1;var r_,h0,o_=function(_,$,j){var Z=_.length,Y=0,Q=new W_($);for(;Y<Z;++Y)if(_[Y])++Q[_[Y]-1];var q=new W_($);for(Y=1;Y<$;++Y)q[Y]=q[Y-1]+Q[Y-1]<<1;var K;if(j){K=new W_(1<<$);var N=15-$;for(Y=0;Y<Z;++Y)if(_[Y]){var G=Y<<4|_[Y],V=$-_[Y],X=q[_[Y]-1]++<<V;for(var U=X|(1<<V)-1;X<=U;++X)K[X$[X]>>N]=G}}else{K=new W_(Z);for(Y=0;Y<Z;++Y)if(_[Y])K[Y]=X$[q[_[Y]-1]++]>>15-_[Y]}return K},T4=new y1(288);for(h0=0;h0<144;++h0)T4[h0]=8;var h0;for(h0=144;h0<256;++h0)T4[h0]=9;var h0;for(h0=256;h0<280;++h0)T4[h0]=7;var h0;for(h0=280;h0<288;++h0)T4[h0]=8;var h0,c5=new y1(32);for(h0=0;h0<32;++h0)c5[h0]=5;var h0,dq=o_(T4,9,0),iq=o_(T4,9,1),rq=o_(c5,5,0),oq=o_(c5,5,1),Y$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},b_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},Q$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},L$=function(_){return(_+7)/8|0},p5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new y1(_.subarray($,j))};var sq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],G_=function(_,$,j){var Z=Error($||sq[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,G_);if(!j)throw Z;return Z},aq=function(_,$,j,Z){var Y=_.length,Q=Z?Z.length:0;if(!Y||$.f&&!$.l)return j||new y1(0);var q=!j,K=q||$.i!=2,N=$.i;if(q)j=new y1(Y*3);var G=function(c0){var N0=j.length;if(c0>N0){var M0=new y1(Math.max(N0*2,c0));M0.set(j),j=M0}},V=$.f||0,X=$.p||0,U=$.b||0,L=$.l,H=$.d,D=$.m,J=$.n,W=Y*8;do{if(!L){V=b_(_,X,1);var A=b_(_,X+1,3);if(X+=3,!A){var E=L$(X)+4,f=_[E-4]|_[E-3]<<8,y=E+f;if(y>Y){if(N)G_(0);break}if(K)G(U+f);j.set(_.subarray(E,y),U),$.b=U+=f,$.p=X=y*8,$.f=V;continue}else if(A==1)L=iq,H=oq,D=9,J=5;else if(A==2){var p=b_(_,X,31)+257,l=b_(_,X+10,15)+4,T=p+b_(_,X+5,31)+1;X+=14;var k=new y1(T),F=new y1(19);for(var I=0;I<l;++I)F[N$[I]]=b_(_,X+I*3,7);X+=l*3;var v=Y$(F),o=(1<<v)-1,m=o_(F,v,1);for(var I=0;I<T;){var s=m[b_(_,X,o)];X+=s&15;var E=s>>4;if(E<16)k[I++]=E;else{var r=0,e=0;if(E==16)e=3+b_(_,X,3),X+=2,r=k[I-1];else if(E==17)e=3+b_(_,X,7),X+=3;else if(E==18)e=11+b_(_,X,127),X+=7;while(e--)k[I++]=r}}var Q0=k.subarray(0,p),$0=k.subarray(p);D=Y$(Q0),J=Y$($0),L=o_(Q0,D,1),H=o_($0,J,1)}else G_(1);if(X>W){if(N)G_(0);break}}if(K)G(U+131072);var K0=(1<<D)-1,W0=(1<<J)-1,L0=X;for(;;L0=X){var r=L[Q$(_,X)&K0],R0=r>>4;if(X+=r&15,X>W){if(N)G_(0);break}if(!r)G_(2);if(R0<256)j[U++]=R0;else if(R0==256){L0=X,L=null;break}else{var E0=R0-254;if(R0>264){var I=R0-257,z0=I8[I];E0=b_(_,X,(1<<z0)-1)+p2[I],X+=z0}var v0=H[Q$(_,X)&W0],A0=v0>>4;if(!v0)G_(3);X+=v0&15;var $0=nq[A0];if(A0>3){var z0=x8[A0];$0+=Q$(_,X)&(1<<z0)-1,X+=z0}if(X>W){if(N)G_(0);break}if(K)G(U+131072);var u0=U+E0;if(U<$0){var m0=Q-$0,O0=Math.min($0,u0);if(m0+U<0)G_(3);for(;U<O0;++U)j[U]=Z[m0+U]}for(;U<u0;++U)j[U]=j[U-$0]}}if($.l=L,$.p=L0,$.b=U,$.f=V,L)V=1,$.m=D,$.d=H,$.n=J}while(!V);return U!=j.length&&q?p5(j,0,U):j.subarray(0,U)},V4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},m5=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},q$=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Y=j.length,Q=j.slice();if(!Y)return{t:n2,l:0};if(Y==1){var q=new y1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(y,p){return y.f-p.f}),j.push({s:-1,f:25001});var K=j[0],N=j[1],G=0,V=1,X=2;j[0]={s:-1,f:K.f+N.f,l:K,r:N};while(V!=Y-1)K=j[j[G].f<j[X].f?G++:X++],N=j[G!=V&&j[G].f<j[X].f?G++:X++],j[V++]={s:-1,f:K.f+N.f,l:K,r:N};var U=Q[0].s;for(var Z=1;Z<Y;++Z)if(Q[Z].s>U)U=Q[Z].s;var L=new W_(U+1),H=V$(j[V-1],L,0);if(H>$){var Z=0,D=0,J=H-$,W=1<<J;Q.sort(function(p,l){return L[l.s]-L[p.s]||p.f-l.f});for(;Z<Y;++Z){var A=Q[Z].s;if(L[A]>$)D+=W-(1<<H-L[A]),L[A]=$;else break}D>>=J;while(D>0){var E=Q[Z].s;if(L[E]<$)D-=1<<$-L[E]++-1;else++Z}for(;Z>=0&&D;--Z){var f=Q[Z].s;if(L[f]==$)--L[f],++D}H=$}return{t:new y1(L),l:H}},V$=function(_,$,j){return _.s==-1?Math.max(V$(_.l,$,j+1),V$(_.r,$,j+1)):$[_.s]=j},b2=function(_){var $=_.length;while($&&!_[--$]);var j=new W_(++$),Z=0,Y=_[0],Q=1,q=function(N){j[Z++]=N};for(var K=1;K<=$;++K)if(_[K]==Y&&K!=$)++Q;else{if(!Y&&Q>2){for(;Q>138;Q-=138)q(32754);if(Q>2)q(Q>10?Q-11<<5|28690:Q-3<<5|12305),Q=0}else if(Q>3){q(Y),--Q;for(;Q>6;Q-=6)q(8304);if(Q>2)q(Q-3<<5|8208),Q=0}while(Q--)q(Y);Q=1,Y=_[K]}return{c:j.subarray(0,Z),n:$}},h5=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},l2=function(_,$,j){var Z=j.length,Y=L$($+2);_[Y]=Z&255,_[Y+1]=Z>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var Q=0;Q<Z;++Q)_[Y+Q+4]=j[Q];return(Y+4+Z)*8},g2=function(_,$,j,Z,Y,Q,q,K,N,G,V){V4($,V++,j),++Y[256];var X=q$(Y,15),U=X.t,L=X.l,H=q$(Q,15),D=H.t,J=H.l,W=b2(U),A=W.c,E=W.n,f=b2(D),y=f.c,p=f.n,l=new W_(19);for(var T=0;T<A.length;++T)++l[A[T]&31];for(var T=0;T<y.length;++T)++l[y[T]&31];var k=q$(l,7),F=k.t,I=k.l,v=19;for(;v>4&&!F[N$[v-1]];--v);var o=G+5<<3,m=h5(Y,T4)+h5(Q,c5)+q,s=h5(Y,U)+h5(Q,D)+q+14+3*v+h5(l,F)+2*l[16]+3*l[17]+7*l[18];if(N>=0&&o<=m&&o<=s)return l2($,V,_.subarray(N,N+G));var r,e,Q0,$0;if(V4($,V,1+(s<m)),V+=2,s<m){r=o_(U,L,0),e=U,Q0=o_(D,J,0),$0=D;var K0=o_(F,I,0);V4($,V,E-257),V4($,V+5,p-1),V4($,V+10,v-4),V+=14;for(var T=0;T<v;++T)V4($,V+3*T,F[N$[T]]);V+=3*v;var W0=[A,y];for(var L0=0;L0<2;++L0){var R0=W0[L0];for(var T=0;T<R0.length;++T){var E0=R0[T]&31;if(V4($,V,K0[E0]),V+=F[E0],E0>15)V4($,V,R0[T]>>5&127),V+=R0[T]>>12}}}else r=dq,e=T4,Q0=rq,$0=c5;for(var T=0;T<K;++T){var z0=Z[T];if(z0>255){var E0=z0>>18&31;if(m5($,V,r[E0+257]),V+=e[E0+257],E0>7)V4($,V,z0>>23&31),V+=I8[E0];var v0=z0&31;if(m5($,V,Q0[v0]),V+=$0[v0],v0>3)m5($,V,z0>>5&8191),V+=x8[v0]}else m5($,V,r[z0]),V+=e[z0]}return m5($,V,r[256]),V+e[256]},tq=new U$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),n2=new y1(0),eq=function(_,$,j,Z,Y,Q){var q=Q.z||_.length,K=new y1(Z+q+5*(1+Math.ceil(q/7000))+Y),N=K.subarray(Z,K.length-Y),G=Q.l,V=(Q.r||0)&7;if($){if(V)N[0]=Q.r>>3;var X=tq[$-1],U=X>>13,L=X&8191,H=(1<<j)-1,D=Q.p||new W_(32768),J=Q.h||new W_(H+1),W=Math.ceil(j/3),A=2*W,E=function(d0){return(_[d0]^_[d0+1]<<W^_[d0+2]<<A)&H},f=new U$(25000),y=new W_(288),p=new W_(32),l=0,T=0,k=Q.i||0,F=0,I=Q.w||0,v=0;for(;k+2<q;++k){var o=E(k),m=k&32767,s=J[o];if(D[m]=s,J[o]=m,I<=k){var r=q-k;if((l>7000||F>24576)&&(r>423||!G)){V=g2(_,N,0,f,y,p,T,F,v,k-v,V),F=l=T=0,v=k;for(var e=0;e<286;++e)y[e]=0;for(var e=0;e<30;++e)p[e]=0}var Q0=2,$0=0,K0=L,W0=m-s&32767;if(r>2&&o==E(k-W0)){var L0=Math.min(U,r)-1,R0=Math.min(32767,k),E0=Math.min(258,r);while(W0<=R0&&--K0&&m!=s){if(_[k+Q0]==_[k+Q0-W0]){var z0=0;for(;z0<E0&&_[k+z0]==_[k+z0-W0];++z0);if(z0>Q0){if(Q0=z0,$0=W0,z0>L0)break;var v0=Math.min(W0,z0-2),A0=0;for(var e=0;e<v0;++e){var u0=k-W0+e&32767,m0=D[u0],O0=u0-m0&32767;if(O0>A0)A0=O0,s=u0}}}m=s,s=D[m],W0+=m-s&32767}}if($0){f[F++]=268435456|G$[Q0]<<18|v2[$0];var c0=G$[Q0]&31,N0=v2[$0]&31;T+=I8[c0]+x8[N0],++y[257+c0],++p[N0],I=k+Q0,++l}else f[F++]=_[k],++y[_[k]]}}for(k=Math.max(k,I);k<q;++k)f[F++]=_[k],++y[_[k]];if(V=g2(_,N,G,f,y,p,T,F,v,k-v,V),!G)Q.r=V&7|N[V/8|0]<<3,V-=7,Q.h=J,Q.p=D,Q.i=k,Q.w=I}else{for(var k=Q.w||0;k<q+G;k+=65535){var M0=k+65535;if(M0>=q)N[V/8|0]=G,M0=q;V=l2(N,V+1,_.subarray(k,M0))}Q.i=q}return p5(K,0,Z+L$(V)+Y)};var d2=function(){var _=1,$=0;return{p:function(j){var Z=_,Y=$,Q=j.length|0;for(var q=0;q!=Q;){var K=Math.min(q+2655,Q);for(;q<K;++q)Y+=Z+=j[q];Z=(Z&65535)+15*(Z>>16),Y=(Y&65535)+15*(Y>>16)}_=Z,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},_K=function(_,$,j,Z,Y){if(!Y){if(Y={l:1},$.dictionary){var Q=$.dictionary.subarray(-32768),q=new y1(Q.length+_.length);q.set(Q),q.set(_,Q.length),_=q,Y.w=Q.length}}return eq(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Y)};var i2=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var $K=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=d2();Y.p($.dictionary),i2(_,2,Y.d())}},jK=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)G_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)G_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var K$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new y1(32768),this.p=new y1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)G_(5);if(this.d)G_(4);if(!this.p.length)this.p=$;else if($.length){var j=new y1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=aq(this.p,this.s,this.o);this.ondata(p5(Z,j,this.s.b),this.d),this.o=p5(Z,this.s.b-32768),this.s.b=this.o.length,this.p=p5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function r2(_,$){if(!$)$={};var j=d2();j.p(_);var Z=_K(_,$,$.dictionary?6:2,4);return $K(Z,$),i2(Z,Z.length-4,j.d()),Z}var o2=function(){function _($,j){K$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(K$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(jK(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)G_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}K$.prototype.c.call(this,j)},_}();var ZK=typeof TextDecoder<"u"&&new TextDecoder,YK=0;try{ZK.decode(n2,{stream:!0}),YK=1}catch(_){}var QK=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],qK=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],KK=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],NK=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],GK=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],XK=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],VK=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],UK=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],t2=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;t2[_]=$}function e2(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function _7(_){let $=0n,j=e2(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function LK(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)j[Y]=Number(Z&0xffn),Z>>=8n;return j}function L5(_,$,j){let Z=0n;for(let Y of $){let Q=BigInt(_)>>BigInt(j-Y)&1n;Z=Z<<1n|Q}return Z}function s2(_,$){let j=28n,Z=(1n<<j)-1n,Y=BigInt($%28);return(_<<Y|_>>j-Y)&Z}function WK(_){let $=L5(_7(_),GK,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Y=[];for(let Q of VK){j=s2(j,Q),Z=s2(Z,Q);let q=j<<28n|Z;Y.push(L5(q,XK,56))}return Y}function BK(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Y=Number(_>>Z&0x3fn),Q=(Y&32)>>4|Y&1,q=Y>>1&15;$=$<<4n|BigInt(UK[j][Q][q])}return $}function zK(_,$){let j=L5(_,KK,32)^BigInt($),Z=BK(j);return L5(Z,NK,32)}function a2(_,$){let j=WK($),Z=L5(_7(_),QK,64),Y=Z>>32n&0xffffffffn,Q=Z&0xffffffffn;for(let K of j){let N=Q,G=(Y^zK(Q,K))&0xffffffffn;Y=N,Q=G}let q=Q<<32n|Y;return LK(L5(q,qK,64),8)}function FK(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Y=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=t2[Y]}return j}function $7(_,$){let j=e2($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=FK(_),Y=new Uint8Array(16);return Y.set(a2(j.slice(0,8),Z),0),Y.set(a2(j.slice(8,16),Z),8),Y}var g_="vnc";function HK(_){return Number(_)}function JK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],j=[],Z=new Set;for(let Y of $){let Q=HK(Y);if(!Number.isFinite(Q))continue;let q=Number(Q);if(!Z.has(q))j.push(q),Z.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function z5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function OK(_,$){let j=z5(_),Z=z5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Y=new Uint8Array(j.byteLength+Z.byteLength);return Y.set(j,0),Y.set(Z,j.byteLength),Y}function DK(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Y of _||[]){let Q=z5(Y);j.set(Q,Z),Z+=Q.byteLength}return j}function AK(){return(_)=>{let $=z5(_);try{let j=[],Z=new o2((Y)=>{j.push(new Uint8Array(Y))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return DK(j)}catch(j){try{let Z=r2($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Y=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function EK(_){return new TextEncoder().encode(String(_||""))}function W5(_){return new TextDecoder().decode(z5(_))}function kK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function MK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function j7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function IK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function xK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Y=4;for(let Q of $)Z.setInt32(Y,Number(Q||0),!1),Y+=4;return new Uint8Array(j)}function Z7(_,$,j,Z=0,Y=0){let Q=new ArrayBuffer(10),q=new DataView(Q);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Z,!1),q.setUint16(4,Y,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Q)}function B5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function Q7(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function TK(_,$,j,Z){let Y=Z||F5,Q=z5(_),q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),K=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Q.byteLength<K)throw Error(`Incomplete raw rectangle payload: expected ${K} byte(s), got ${Q.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let N=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,V=0;for(let X=0;X<Math.max(0,$||0)*Math.max(0,j||0);X+=1){let U=Q7(Q,G,q,Y.bigEndian),L=B5(U>>>Y.redShift&Y.redMax,Y.redMax),H=B5(U>>>Y.greenShift&Y.greenMax,Y.greenMax),D=B5(U>>>Y.blueShift&Y.blueMax,Y.blueMax);N[V]=L,N[V+1]=H,N[V+2]=D,N[V+3]=255,G+=q,V+=4}return N}function U4(_,$,j){let Z=j||F5,Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let Q=Q7(_,$,Y,Z.bigEndian);return{rgba:[B5(Q>>>Z.redShift&Z.redMax,Z.redMax),B5(Q>>>Z.greenShift&Z.greenMax,Z.greenMax),B5(Q>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Y}}function C4(_,$,j,Z,Y,Q,q){if(!q)return;for(let K=0;K<Q;K+=1)for(let N=0;N<Y;N+=1){let G=((Z+K)*$+(j+N))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function q7(_,$,j,Z,Y,Q,q){for(let K=0;K<Q;K+=1){let N=K*Y*4,G=((Z+K)*$+j)*4;_.set(q.subarray(N,N+Y*4),G)}}function Y7(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Y=_[j++];if(Z+=Y,Y!==255)break}return{consumed:j-$,runLength:Z}}function CK(_,$,j,Z,Y,Q,q){let K=Y||F5,N=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let V=_.slice($+4,$+4+G),X;try{X=q(V)}catch{return{consumed:4+G,skipped:!0}}let U=0,L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let H=0;H<Z;H+=64){let D=Math.min(64,Z-H);for(let J=0;J<j;J+=64){let W=Math.min(64,j-J);if(X.byteLength<U+1)return null;let A=X[U++],E=A&127,f=(A&128)!==0;if(!f&&E===0){let y=W*D*N;if(X.byteLength<U+y)return null;let p=Q(X.slice(U,U+y),W,D,K);U+=y,q7(L,j,J,H,W,D,p);continue}if(!f&&E===1){let y=U4(X,U,K);if(!y)return null;U+=y.bytesPerPixel,C4(L,j,J,H,W,D,y.rgba);continue}if(!f&&E>1&&E<=16){let y=[];for(let k=0;k<E;k+=1){let F=U4(X,U,K);if(!F)return null;U+=F.bytesPerPixel,y.push(F.rgba)}let p=E<=2?1:E<=4?2:4,l=Math.ceil(W*p/8),T=l*D;if(X.byteLength<U+T)return null;for(let k=0;k<D;k+=1){let F=U+k*l;for(let I=0;I<W;I+=1){let v=I*p,o=F+(v>>3),m=8-p-(v&7),s=X[o]>>m&(1<<p)-1;C4(L,j,J+I,H+k,1,1,y[s])}}U+=T;continue}if(f&&E===0){let y=0,p=0;while(p<D){let l=U4(X,U,K);if(!l)return null;U+=l.bytesPerPixel;let T=Y7(X,U);if(!T)return null;U+=T.consumed;for(let k=0;k<T.runLength;k+=1)if(C4(L,j,J+y,H+p,1,1,l.rgba),y+=1,y>=W){if(y=0,p+=1,p>=D)break}}continue}if(f&&E>0){let y=[];for(let T=0;T<E;T+=1){let k=U4(X,U,K);if(!k)return null;U+=k.bytesPerPixel,y.push(k.rgba)}let p=0,l=0;while(l<D){if(X.byteLength<U+1)return null;let T=X[U++],k=T,F=1;if(T&128){k=T&127;let v=Y7(X,U);if(!v)return null;U+=v.consumed,F=v.runLength}let I=y[k];if(!I)return null;for(let v=0;v<F;v+=1)if(C4(L,j,J+p,H+l,1,1,I),p+=1,p>=W){if(p=0,l+=1,l>=D)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:L,decompressed:X}}function PK(_,$,j,Z,Y){let Q=Y||F5,q=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let N=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+N*(q+8);if(_.byteLength<$+G)return null;let V=$+4,X=U4(_,V,Q);if(!X)return null;V+=X.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);C4(U,j,0,0,j,Z,X.rgba);for(let L=0;L<N;L+=1){let H=U4(_,V,Q);if(!H)return null;if(V+=H.bytesPerPixel,_.byteLength<V+8)return null;let D=new DataView(_.buffer,_.byteOffset+V,8),J=D.getUint16(0,!1),W=D.getUint16(2,!1),A=D.getUint16(4,!1),E=D.getUint16(6,!1);V+=8,C4(U,j,J,W,A,E,H.rgba)}return{consumed:V-$,rgba:U}}function yK(_,$,j,Z,Y,Q){let q=Y||F5,K=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),G=$,V=[0,0,0,255],X=[255,255,255,255];for(let U=0;U<Z;U+=16){let L=Math.min(16,Z-U);for(let H=0;H<j;H+=16){let D=Math.min(16,j-H);if(_.byteLength<G+1)return null;let J=_[G++];if(J&1){let W=D*L*K;if(_.byteLength<G+W)return null;let A=Q(_.slice(G,G+W),D,L,q);G+=W,q7(N,j,H,U,D,L,A);continue}if(J&2){let W=U4(_,G,q);if(!W)return null;V=W.rgba,G+=W.bytesPerPixel}if(C4(N,j,H,U,D,L,V),J&4){let W=U4(_,G,q);if(!W)return null;X=W.rgba,G+=W.bytesPerPixel}if(J&8){if(_.byteLength<G+1)return null;let W=_[G++];for(let A=0;A<W;A+=1){let E=X;if(J&16){let F=U4(_,G,q);if(!F)return null;E=F.rgba,G+=F.bytesPerPixel}if(_.byteLength<G+2)return null;let f=_[G++],y=_[G++],p=f>>4,l=f&15,T=(y>>4)+1,k=(y&15)+1;C4(N,j,H+p,U+l,T,k,E)}}}}return{consumed:G-$,rgba:N}}var F5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class T8{protocol=g_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:TK,this.pipeline=_.pipeline||null,this.encodings=JK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...F5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:AK()}receive(_){if(_)this.buffer=OK(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),Q=W5(Y),q=kK(Q);if(!q)throw Error(`Unsupported RFB version banner: ${Q||"<empty>"}`);this.serverVersion=q,this.clientVersionText=MK(q),j.push(EK(this.clientVersionText)),$.push({type:"protocol-version",protocol:g_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+N)break;this.consume(1);let G=W5(this.consume(4+N).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let Q=Array.from(this.consume(Y));$.push({type:"security-types",protocol:g_,types:Q});let q=null;if(Q.includes(2)&&this.password!==null)q=2;else if(Q.includes(1))q=1;else if(Q.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Q.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:g_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+K)break;let N=W5(this.consume(4+K).slice(4));throw Error(N||"VNC server rejected the connection.")}if(Q===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:g_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Q!==1)throw Error(`Unsupported VNC security type ${Q}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:g_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);j.push($7(this.password,Y)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let K=W5(this.consume(4+q).slice(4));throw Error(K||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:g_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Q=Y.getUint16(0,!1),q=Y.getUint16(2,!1),K=j7(Y,4),N=Y.getUint32(20,!1);if(this.buffer.byteLength<24+N)break;let G=this.consume(24),V=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=V.getUint16(0,!1),this.framebufferHeight=V.getUint16(2,!1),this.serverPixelFormat=j7(V,4),this.serverName=W5(this.consume(N)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(IK(this.clientPixelFormat)),j.push(xK(this.encodings)),j.push(Z7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:g_,width:Q,height:q,name:this.serverName,pixelFormat:K}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),K=4,N=[],G=!1,V=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<K+12){G=!0;break}let L=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,12),H=L.getUint16(0,!1),D=L.getUint16(2,!1),J=L.getUint16(4,!1),W=L.getUint16(6,!1),A=L.getInt32(8,!1);if(K+=12,A===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),f=J*W*E;if(this.buffer.byteLength<K+f){G=!0;break}let y=this.buffer.slice(K,K+f);if(K+=f,V)this.pipeline.processRawRect(y,H,D,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:D,width:J,height:W});else N.push({kind:"rgba",x:H,y:D,width:J,height:W,rgba:this.decodeRawRect(y,J,W,this.clientPixelFormat)});continue}if(A===2){let E=PK(this.buffer,K,J,W,this.clientPixelFormat);if(!E){G=!0;break}if(V){let f=this.buffer.slice(K,K+E.consumed);this.pipeline.processRreRect(f,H,D,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:D,width:J,height:W})}else N.push({kind:"rgba",x:H,y:D,width:J,height:W,rgba:E.rgba});K+=E.consumed;continue}if(A===1){if(this.buffer.byteLength<K+4){G=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,4),f=E.getUint16(0,!1),y=E.getUint16(2,!1);if(K+=4,V)this.pipeline.processCopyRect(H,D,J,W,f,y),N.push({kind:"pipeline",x:H,y:D,width:J,height:W});else N.push({kind:"copy",x:H,y:D,width:J,height:W,srcX:f,srcY:y});continue}if(A===16){let E=CK(this.buffer,K,J,W,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){G=!0;break}if(K+=E.consumed,E.skipped)continue;if(V&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,H,D,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:D,width:J,height:W});else N.push({kind:"rgba",x:H,y:D,width:J,height:W,rgba:E.rgba});continue}if(A===5){let E=yK(this.buffer,K,J,W,this.clientPixelFormat,this.decodeRawRect);if(!E){G=!0;break}if(V){let f=this.buffer.slice(K,K+E.consumed);this.pipeline.processHextileRect(f,H,D,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:D,width:J,height:W})}else N.push({kind:"rgba",x:H,y:D,width:J,height:W,rgba:E.rgba});K+=E.consumed;continue}if(A===-223){if(this.framebufferWidth=J,this.framebufferHeight=W,V)this.pipeline.initFramebuffer(J,W);N.push({kind:"resize",x:H,y:D,width:J,height:W});continue}throw Error(`Unsupported VNC rectangle encoding ${A}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(K);let X={type:"framebuffer-update",protocol:g_,width:this.framebufferWidth,height:this.framebufferHeight,rects:N};if(V)X.framebuffer=this.pipeline.getFramebuffer();$.push(X),j.push(Z7(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:g_}),Z=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let K=W5(this.consume(q));$.push({type:"clipboard",protocol:g_,text:K}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var L4="piclaw://vnc";function SK(_){let $=String(_||"");if($===L4)return null;if(!$.startsWith(`${L4}/`))return null;let j=$.slice(`${L4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function n4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function wK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function RK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function uK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function fK(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function vK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class K7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=SK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=vK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:18px 18px 20px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:14px;box-shadow:0 16px 38px rgba(0,0,0,.22);">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host placeholder="server" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;min-height:40px;font-weight:600;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((Y)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${n4(Y.label||Y.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${n4(Y.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Y.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${n4(Y.id)}" data-target-label="${n4(Y.label||Y.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:28px 24px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);font-size:13px;color:var(--text-secondary);line-height:1.5;">
                            No saved VNC targets yet. Connect directly above.
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Y=fK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Y)return;this.authPassword=g5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Y,Y)};this.directHostInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Y of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Y.addEventListener("click",()=>{let Q=Y.getAttribute("data-target-open-tab"),q=Y.getAttribute("data-target-label")||Q||"VNC";if(!Q)return;this.openTargetTab(Q,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${n4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                        <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                        <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                            <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                            <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                        </label>
                        <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Reconnect</button>
                        <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Target</button>
                    </div>
                </div>
                <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:16px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:12px;position:relative;overflow:hidden;">
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${n4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=g5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=g5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Q=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Y}${Q}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=f2($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return w2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(M8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=j$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~j$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of R2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(u2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=Z$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??Z$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Y of _.rects||[])if(Y.kind==="resize")this.ensureCanvasSize(Y.width,Y.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Y=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Y,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new T8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Y of Z.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of Z.events||[])this.applyRemoteDisplayEvent(Y)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await S2(),Y={};if(Z)Y.pipeline=Z,Y.decodeRawRect=(K,N,G,V)=>Z.decodeRawRectToRgba(K,N,G,V);let Q=g5(this.authPassword);if(Q!==null)Y.password=Q;if(j)Y.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new T8(Y),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new e6({url:uK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(K)=>{this.applyMetrics(K)},onMessage:(K)=>{this.handleSocketMessage(K)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await wK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${n4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await RK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var W$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===L4||$.startsWith(`${L4}/`)?9000:!1},mount(_,$){return new K7(_,$)}};function B_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function $1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function H5(_,$=!1){let j=B_(_);if(j===null)return $;return j==="true"}function l5(_,$=null){let j=B_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}var F$="piclaw_theme",P8="piclaw_tint",X7="piclaw_chat_themes",d5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},V7={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},N7={default:{label:"Default",mode:"auto",light:d5,dark:V7},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},bK=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],d4={theme:"default",tint:null},U7="light",B$=!1;function y8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function O5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Q)=>Q+Q).join(""):j,Y=parseInt(Z,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${Z.toLowerCase()}`}}function gK(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Y=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let Q=parseInt(Y[1],10),q=parseInt(Y[2],10),K=parseInt(Y[3],10);if(![Q,q,K].every((G)=>Number.isFinite(G)))return null;let N=`#${[Q,q,K].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Q,g:q,b:K,hex:N}}function L7(_){return O5(_)||gK(_)}function n5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Y=Math.round(_.g+($.g-_.g)*j),Q=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Y} ${Q})`}function z$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function mK(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Q=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Y+0.7152*Q+0.0722*q}function hK(_){return mK(_)>0.4?"#000000":"#ffffff"}function W7(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function H$(_){return N7[_]||N7.default}function pK(_){return _.mode==="auto"?W7():_.mode}function B7(_,$){let j=H$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||d5}function z7(_,$,j){let Z=L7($);if(!Z)return _;let Y=O5(_.bgPrimary),Q=O5(_.bgSecondary),q=O5(_.bgHover),K=O5(_.borderColor);if(!Y||!Q||!q||!K)return _;let G=O5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:n5(Y,Z,0.08),bgSecondary:n5(Q,Z,0.12),bgHover:n5(q,Z,0.16),borderColor:n5(K,Z,0.08),accent:Z.hex,accentHover:G?n5(Z,G,0.18):Z.hex}}function cK(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Y=L7(Z),Q=Y?z$(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Y?z$(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=Y?z$(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",N=Y?hK(Y):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":q,"--accent-soft-strong":K,"--accent-contrast-text":N,"--danger-color":_.danger||d5.danger,"--success-color":_.success||d5.success,"--search-highlight-color":Q||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([V,X])=>{if(X)j.style.setProperty(V,X)})}function lK(){if(typeof document>"u")return;let _=document.documentElement;bK.forEach(($)=>_.style.removeProperty($))}function J5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function G7(_){let $=y8(d4?.theme||"default"),j=d4?.tint?String(d4.tint).trim():null,Z=B7($,_);if($==="default"&&j)Z=z7(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?V7.bgPrimary:d5.bgPrimary}function nK(_,$){if(typeof document>"u")return;let j=J5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=J5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",G7("light"));let Y=J5("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",G7("dark"));let Q=J5("msapplication-TileColor");if(Q&&_)Q.setAttribute("content",_);let q=J5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let K=J5("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function dK(){if(typeof window>"u")return;let _={...d4,mode:U7};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function F7(){try{let _=B_(X7);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function iK(_,$,j){let Z=F7();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};$1(X7,JSON.stringify(Z))}function rK(_){if(!_)return null;return F7()[_]||null}function H7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function J$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=y8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Y=H$(j),Q=pK(Y),q=B7(j,Q);d4={theme:j,tint:Z},U7=Q;let K=document.documentElement;K.dataset.theme=Q,K.dataset.colorTheme=j,K.dataset.tint=Z?String(Z):"",K.style.colorScheme=Q;let N=q;if(j==="default"&&Z)N=z7(q,Z,Q);if(j==="default"&&!Z)lK();else cK(N,Q);if(nK(N.bgPrimary,Q),dK(),$.persist!==!1)if($1(F$,j),Z)$1(P8,Z);else $1(P8,"")}function C8(){if(H$(d4.theme).mode!=="auto")return;J$(d4,{persist:!1})}function J7(){if(typeof window>"u")return()=>{};let _=H7(),$=rK(_),j=$?y8($.theme||"default"):y8(B_(F$)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Y=B_(P8);return Y?Y.trim():null})();if(J$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!B$){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",C8);else if(Y.addListener)Y.addListener(C8);return B$=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",C8);else if(Y.removeListener)Y.removeListener(C8);B$=!1}}return()=>{}}function O7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||H7(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(iK($,j||"default",Z),J$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")$1(F$,j||"default"),$1(P8,Z||"")}function D7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return W7()}var S8=/#(\w+)/g,oK=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),sK=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),aK=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),tK={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},eK=new Set(["http:","https:","mailto:",""]);function O$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function i4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!eK.has(Z.protocol))return null;return Z.href}catch{return null}}function A7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Y=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Q;while(Q=Y.nextNode())Z.push(Q);for(let q of Z){let K=q.tagName.toLowerCase();if(!sK.has(K)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let N=tK[K]||new Set;for(let G of Array.from(q.attributes)){let V=G.name.toLowerCase(),X=G.value;if(V.startsWith("on")){q.removeAttribute(G.name);continue}if(V.startsWith("data-")||V.startsWith("aria-"))continue;if(N.has(V)||aK.has(V)){if(V==="href"){let U=i4(X);if(!U)q.removeAttribute(G.name);else if(q.setAttribute(G.name,U),K==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(V==="src"){let U=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(X):X,L=i4(U,{allowDataImage:K==="img"});if(!L)q.removeAttribute(G.name);else q.setAttribute(G.name,L)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function E7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function w8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Y=E7(j);if(Y===j)break;j=Y}return j}function _N(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=[],Q=!1,q=[];for(let K of j){if(!Q&&K.trim().match(/^```mermaid\s*$/i)){Q=!0,q=[];continue}if(Q&&K.trim().match(/^```\s*$/)){let N=Z.length;Z.push(q.join(`
`)),Y.push(`@@MERMAID_BLOCK_${N}@@`),Q=!1,q=[];continue}if(Q)q.push(K);else Y.push(K)}if(Q)Y.push("```mermaid"),Y.push(...q);return{text:Y.join(`
`),blocks:Z}}function $N(_){if(!_)return _;return w8(_,5)}function jN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function ZN(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function YN(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Y=Number(Z),Q=$[Y]??"",q=$N(Q);return`<div class="mermaid-container" data-mermaid="${jN(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function k7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var QN={span:new Set(["title","class","lang","dir"])};function qN(_,$){let j=QN[_];if(!j||!$)return"";let Z=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Q;while(Q=Y.exec($)){let q=(Q[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let K=Q[2]??Q[3]??Q[4]??"";Z.push(` ${q}="${O$(K)}"`)}return Z.join("")}function M7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Y=Z.startsWith("/"),Q=Y?Z.slice(1).trim():Z,K=Q.endsWith("/")?Q.slice(0,-1).trim():Q,[N=""]=K.split(/\s+/,1),G=N.toLowerCase();if(!G||!oK.has(G))return $;if(G==="br")return Y?"":"<br>";if(Y)return`</${G}>`;let V=K.slice(N.length).trim(),X=qN(G,V);return`<${G}${X}>`})}function I7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function x7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Q)=>Q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=j.nextNode()){if(!Y.nodeValue)continue;let Q=Z(Y.nodeValue);if(Q!==Y.nodeValue)Y.nodeValue=Q}return $.body.innerHTML}function KN(_){if(!window.katex)return _;let $=(q)=>E7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let K=[],N=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let V=K.length;return K.push(G),`@@CODE_BLOCK_${V}@@`});return N=N.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let V=K.length;return K.push(G),`@@CODE_INLINE_${V}@@`}),{html:N,blocks:K}},Z=(q,K)=>{if(!K.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(N,G)=>{let V=Number(G);return K[V]??""})},Y=j(_),Q=Y.html;return Q=Q.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,K,N)=>{try{let G=katex.renderToString($(N.trim()),{displayMode:!0,throwOnError:!1});return`${K}${G}`}catch(G){return`<span class="math-error" title="${O$(G.message)}">${q}</span>`}}),Q=Q.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,K,N)=>{if(/\s$/.test(N))return q;try{let G=katex.renderToString($(N),{displayMode:!1,throwOnError:!1});return`${K}${G}`}catch(G){return`${K}<span class="math-error" title="${O$(G.message)}">$${N}$</span>`}}),Z(Q,Y.blocks)}function NN(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Y;while(Y=j.nextNode())Z.push(Y);for(let Q of Z){let q=Q.nodeValue;if(!q)continue;if(S8.lastIndex=0,!S8.test(q))continue;S8.lastIndex=0;let K=Q.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let N=q.split(S8);if(N.length<=1)continue;let G=$.createDocumentFragment();N.forEach((V,X)=>{if(X%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",V),U.textContent=`#${V}`,G.appendChild(U)}else G.appendChild($.createTextNode(V))}),Q.parentNode?.replaceChild(G,Q)}return $.body.innerHTML}function GN(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=!1;for(let Q of j){if(!Y&&Q.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,Z.push("$$");continue}if(Y&&Q.trim().match(/^```\s*$/)){Y=!1,Z.push("$$");continue}Z.push(Q)}return Z.join(`
`)}function XN(_){let $=GN(_||""),{text:j,blocks:Z}=_N($),Y=w8(j,2),q=k7(Y).replace(/</g,"&lt;");return{safeHtml:M7(q),mermaidBlocks:Z}}function z_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Y}=XN(_),Q=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Q=I7(Q),Q=x7(Q),Q=KN(Q),Q=NN(Q),Q=YN(Q,Y),Q=A7(Q,j),Q}function i5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=w8($,2),Y=k7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q=M7(Y),q=window.marked?marked.parse(Q):Q.replace(/\n/g,"<br>");return q=I7(q),q=x7(q),q=A7(q),q}function VN(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Y,Q)=>{let q=Y.trim().split(/\s+/).map((N)=>{let[G,V]=N.split(",").map(Number);return{x:G,y:V}});if(q.length<3)return`<polyline${Z}points="${Y}"${Q}/>`;let K=[`M ${q[0].x},${q[0].y}`];for(let N=1;N<q.length-1;N++){let G=q[N-1],V=q[N],X=q[N+1],U=V.x-G.x,L=V.y-G.y,H=X.x-V.x,D=X.y-V.y,J=Math.sqrt(U*U+L*L),W=Math.sqrt(H*H+D*D),A=Math.min($,J/2,W/2);if(A<0.5){K.push(`L ${V.x},${V.y}`);continue}let E=V.x-U/J*A,f=V.y-L/J*A,y=V.x+H/W*A,p=V.y+D/W*A,T=U*D-L*H>0?1:0;K.push(`L ${E},${f}`),K.push(`A ${A},${A} 0 0 ${T} ${y},${p}`)}return K.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Z}d="${K.join(" ")}"${Q}/>`})}async function W4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Y=D7()==="dark"?j["tokyo-night"]:j["github-light"],Q=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Q)try{let K=q.dataset.mermaid,N=ZN(K||""),G=w8(N,2),V=await $(G,{...Y,transparent:!0});V=VN(V),q.innerHTML=V,q.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let N=document.createElement("pre");N.className="mermaid-error",N.textContent=`Diagram error: ${K.message}`,q.innerHTML="",q.appendChild(N),q.removeAttribute("data-mermaid")}}function T7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Y=Z/1000,Q=86400000;if(Z<Q){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(Z<5*Q){let N=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${K}`}function r5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function y_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function r4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function P4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function UN(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=Z?.[1]||j,Q=Z?.[2]||"",q=Z?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),G=Y.startsWith("/")?Y:`${K?`${K}/`:""}${Y}`,V=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(V.length>0)V.pop();continue}V.push(U)}let X=V.join("/");return`${F8(X)}${Q}${q}`}function o5(_){return _?.preview||null}function LN(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Y=Z.lastIndexOf(".");if(Y<=0||Y===Z.length-1)return"none";return Z.slice(Y+1)}function WN(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function BN(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${P4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${P4(y_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${P4(r4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${P4(WN($))}</span>`),Z.push(`<span><strong>extension:</strong> ${P4(LN(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${P4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function zN(_){let $=o5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=BN(_,$);if($.kind==="image"){let Z=$.url||($.path?F8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${P4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=z_($.text||"",null,{rewriteImageSrc:(Y)=>UN(Y,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${P4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class D${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=zN(this.context)}getContent(){let _=o5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=o5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var A$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=o5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new D$(_,$)}},E$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return o5(_)||_?.path?1:!1},mount(_,$){return new D$(_,$)}};var FN=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),HN={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},JN={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function P7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function C7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class y7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=P7(j),Q=JN[Y]||"\uD83D\uDCC4",q=HN[Y]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Q}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${C7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${C7(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let N=K.querySelector("#ov-open-tab");if(N)N.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class S7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=P7(_?.path);if(!$||!FN.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new y7(_,$);return new S7(_,$)}};var ON=/\.(csv|tsv)$/i;function w7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class R7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Y=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${w7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${w7(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var M$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ON.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new R7(_,$);return new u7(_,$)}};var DN=/\.pdf$/i;function AN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class f7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${AN(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#pdf-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class v7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var I$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!DN.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new f7(_,$);return new v7(_,$)}};var EN=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function x$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class b7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${x$(Y)}" alt="${x$(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${x$(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var T$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!EN.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new b7(_,$);return new g7(_,$)}};var kN=/\.(mp4|m4v|mov|webm|ogv)$/i;function MN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${MN(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#video-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var C$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!kN.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new m7(_,$);return new h7(_,$)}};function IN(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function xN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var P$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function p7(_){let $=String(_||"").trim();return $?$:P$}function TN(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function CN(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function PN(_,$="*"){try{let j=(Q)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Q}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Q=Z.prototype.saveData;Z.prototype.saveData=function(q,K,N,G,V,X){try{if(q&&N!=null&&j({filename:q,format:K,data:N,mimeType:G,base64Encoded:Boolean(V),defaultMode:X}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Q.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Y=_.App;if(Y?.prototype&&!Y.prototype.__piclawExportPatched){let Q=Y.prototype.exportFile;Y.prototype.exportFile=function(q,K,N,G,V,X){try{if(K&&j({filename:K,data:q,mimeType:N,base64Encoded:Boolean(G),mode:V,folderId:X}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Q.apply(this,arguments)},Y.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Y?.prototype&&Y.prototype.__piclawExportPatched)}catch{return!1}}async function c7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${CN(j)}`}class l7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${xN(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#drawio-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=TN(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Y=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Q=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(PN(this.iframe.contentWindow))return;setTimeout(Q,250)};Q()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=P$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await c7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await c7(_,"image/png");else this.xmlData=p7(await _.text());else if(_.status===404)this.xmlData=P$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?p7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var y$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!IN(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new l7(_,$);return new n7(_,$)}};var yN=/\.mindmap\.ya?ml$/i,S$=String(Date.now());function d7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function w$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function SN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function wN(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let Z=document.createElement("div");Z.id="context-menu",Z.className="context-menu hidden",Z.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Z)}class i7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`,_.appendChild(Y),Y.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class r7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(d7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,SN("/static/css/mindmap.css"),await Promise.all([w$("/static/js/vendor/d3-mindmap.min.js?v="+S$),w$("/static/js/vendor/js-yaml.min.js?v="+S$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),wN(this.mindmapEl);let j=d7(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await w$("/static/js/vendor/mindmap-editor.js?v="+S$),this.disposed)return;let Y=window.__mindmapEditor;if(!Y)throw Error("__mindmapEditor not found");if(Y.mount({content:$,isDark:j,onEdit:(Q)=>{this.lastContent=Q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Q)},resolveImagePath:(Q)=>{if(Q.startsWith("data:")||Q.startsWith("http"))return Q;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Q)}`}}),this.pendingContent!==null)Y.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Y){if(console.error("[mindmap] Failed to load mindmap renderer:",Y),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var R$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!yN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new i7(_,$);return new r7(_,$)}};var RN=/\.kanban\.md$/i,uN=String(Date.now());function o7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function fN(){let _=window;if(_.preact)return;_.preact={h:L8,render:x4,Component:Q5,createContext:X2},_.preactHooks={useState:g,useEffect:b,useCallback:C,useRef:x,useMemo:w0,useReducer:D6,useContext:L2,useLayoutEffect:P5,useImperativeHandle:U2,useErrorBoundary:B2,useDebugValue:W2},_.htm={bind:()=>B}}function vN(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function bN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class s7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y),Y.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class a7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(o7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,bN("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=o7();try{if(fN(),await vN("/static/js/vendor/kanban-editor.js?v="+uN),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var u$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!RN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new s7(_,$);return new a7(_,$)}};class t7{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var r0=new t7;function e7({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Y}){let Q=x(_);Q.current=_;let q=x($);q.current=$;let K=x(j);K.current=j;let N=x(Z);N.current=Z,b(()=>{let G=new J8((X,U)=>Q.current(X,U),(X)=>q.current(X),{chatJid:Y});G.connect();let V=()=>{G.reconnectIfNeeded();let X=typeof document<"u"?document:null;if(!X||X.visibilityState==="visible")N.current?.()};return window.addEventListener("focus",V),document.addEventListener("visibilitychange",V),()=>{window.removeEventListener("focus",V),document.removeEventListener("visibilitychange",V),G.disconnect()}},[Y])}function _9(){let[_,$]=g(!1),[j,Z]=g("default"),Y=x(!1);b(()=>{let N=H5("notificationsEnabled",!1);if(Y.current=N,$(N),typeof Notification<"u")Z(Notification.permission)},[]),b(()=>{Y.current=_},[_]);let Q=C(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch{return Promise.resolve("default")}},[]),q=C(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Q();if(Z(G||"default"),G!=="granted"){Y.current=!1,$(!1),$1("notificationsEnabled","false");return}}let N=!Y.current;Y.current=N,$(N),$1("notificationsEnabled",String(N))},[Q]),K=C((N,G)=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let V=new Notification(N,{body:G});return V.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:K}}var s5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function $9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Y]=g(null),[Q,q]=g(!1),K=x(!1),N=x(null),G=x(!1),V=x(null),X=x(null),U=x(0);b(()=>{K.current=Q},[Q]),b(()=>{X.current=Z},[Z]),b(()=>{U.current+=1,V.current=null,G.current=!1,K.current=!1,q(!1)},[j]);let L=C(async(J=null)=>{let W=U.current;try{if(J){let A=await E6(J,50,0,j);if(W!==U.current)return;Y(A.posts),q(!1)}else{let A=await l4(10,null,j);if(W!==U.current)return;Y(A.posts),q(A.has_more)}}catch(A){if(W!==U.current)return;console.error("Failed to load posts:",A)}},[j]),H=C(async()=>{let J=U.current;try{let W=await l4(10,null,j);if(J!==U.current)return;Y((A)=>{if(!A||A.length===0)return W.posts;return s5([...W.posts,...A])}),q((A)=>A||W.has_more)}catch(W){if(J!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j]),D=C(async(J={})=>{let W=U.current,A=X.current;if(!A||A.length===0)return;if(G.current)return;let{preserveScroll:E=!0,preserveMode:f="top",allowRepeat:y=!1}=J,p=(k)=>{if(!E){k();return}if(f==="top")$(k);else _(k)},T=A.slice().sort((k,F)=>k.id-F.id)[0]?.id;if(!Number.isFinite(T))return;if(!y&&V.current===T)return;G.current=!0,V.current=T;try{let k=await l4(10,T,j);if(W!==U.current)return;if(k.posts.length>0)p(()=>{Y((F)=>s5([...k.posts,...F||[]])),q(k.has_more)});else q(!1)}catch(k){if(W!==U.current)return;console.error("Failed to load more posts:",k)}finally{if(W===U.current)G.current=!1}},[j,_,$]);return b(()=>{N.current=D},[D]),{posts:Z,setPosts:Y,hasMore:Q,setHasMore:q,hasMoreRef:K,loadPosts:L,refreshTimeline:H,loadMore:D,loadMoreRef:N,loadingMoreRef:G,lastBeforeIdRef:V}}function j9(){let[_,$]=g(null),[j,Z]=g({text:"",totalLines:0}),[Y,Q]=g(""),[q,K]=g({text:"",totalLines:0}),[N,G]=g(null),[V,X]=g(null),[U,L]=g(null),H=x(null),D=x(0),J=x(!1),W=x(""),A=x(""),E=x(null),f=x(null),y=x(null),p=x(null),l=x(!1),T=x(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Y,setAgentPlan:Q,agentThought:q,setAgentThought:K,pendingRequest:N,setPendingRequest:G,currentTurnId:V,setCurrentTurnId:X,steerQueuedTurnId:U,setSteerQueuedTurnId:L,lastAgentEventRef:H,lastSilenceNoticeRef:D,isAgentRunningRef:J,draftBufferRef:W,thoughtBufferRef:A,pendingRequestRef:E,stalledPostIdRef:f,currentTurnIdRef:y,steerQueuedTurnIdRef:p,thoughtExpandedRef:l,draftExpandedRef:T}}function Z9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Y=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientX,L=$.current||280,H=V.currentTarget;H.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=U,J=(A)=>{D=A.clientX;let E=Math.min(Math.max(L+(A.clientX-U),160),600);X.style.setProperty("--sidebar-width",`${E}px`),$.current=E},W=()=>{let A=Math.min(Math.max(L+(D-U),160),600);$.current=A,H.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",$1("sidebarWidth",String(Math.round(A))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,Q=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientX,H=$.current||280,D=V.currentTarget;D.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let J=(A)=>{let E=A.touches[0];if(!E)return;A.preventDefault();let f=Math.min(Math.max(H+(E.clientX-L),160),600);X.style.setProperty("--sidebar-width",`${f}px`),$.current=f},W=()=>{D.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.userSelect="",$1("sidebarWidth",String(Math.round($.current||H))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,q=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientX,L=j.current||$.current||280,H=V.currentTarget;H.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=U,J=(A)=>{D=A.clientX;let E=Math.min(Math.max(L+(A.clientX-U),200),800);X.style.setProperty("--editor-width",`${E}px`),j.current=E},W=()=>{let A=Math.min(Math.max(L+(D-U),200),800);j.current=A,H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$1("editorWidth",String(Math.round(A))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,K=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientX,H=j.current||$.current||280,D=V.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let J=(A)=>{let E=A.touches[0];if(!E)return;A.preventDefault();let f=Math.min(Math.max(H+(E.clientX-L),200),800);X.style.setProperty("--editor-width",`${f}px`),j.current=f},W=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",$1("editorWidth",String(Math.round(j.current||H))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,N=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientY,L=Z?.current||200,H=V.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=U,J=(A)=>{D=A.clientY;let E=Math.min(Math.max(L-(A.clientY-U),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${E}px`),Z)Z.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{let A=Math.min(Math.max(L-(D-U),100),window.innerHeight*0.5);if(Z)Z.current=A;H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$1("dockHeight",String(Math.round(A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,G=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientY,H=Z?.current||200,D=V.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let J=(A)=>{let E=A.touches[0];if(!E)return;A.preventDefault();let f=Math.min(Math.max(H-(E.clientY-L),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${f}px`),Z)Z.current=f;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",$1("dockHeight",String(Math.round(Z?.current||H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:Q,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:N,handleDockSplitterTouchStart:G}}function gN(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Y=!1,Q=new Map;for(let[q,K]of _.entries()){let N=q;if(Z==="dir"){if(q===$)N=j,Y=!0;else if(q.startsWith(`${$}/`))N=`${j}${q.slice($.length)}`,Y=!0}else if(q===$)N=j,Y=!0;Q.set(N,K)}return Y?Q:_}function Y9({onTabClosed:_}={}){let $=x(_);$.current=_;let[j,Z]=g(()=>r0.getTabs()),[Y,Q]=g(()=>r0.getActiveId()),[q,K]=g(()=>r0.getTabs().length>0);b(()=>{return r0.onChange((T,k)=>{Z(T),Q(k),K(T.length>0)})},[]);let[N,G]=g(()=>new Set),[V,X]=g(()=>new Map),U=C((T)=>{G((k)=>{let F=new Set(k);if(F.has(T))F.delete(T);else F.add(T);return F})},[]),L=C((T)=>{G((k)=>{if(!k.has(T))return k;let F=new Set(k);return F.delete(T),F})},[]),H=C((T)=>{X((k)=>{if(!k.has(T))return k;let F=new Map(k);return F.delete(T),F})},[]),D=C((T,k={})=>{if(!T)return;let F=typeof k?.paneOverrideId==="string"&&k.paneOverrideId.trim()?k.paneOverrideId.trim():null,I={path:T,mode:"edit"};try{if(!(F?p0.get(F):p0.resolve(I))){if(!p0.get("editor")){console.warn(`[openEditor] No pane handler for: ${T}`);return}}}catch(o){console.warn(`[openEditor] paneRegistry.resolve() error for "${T}":`,o)}let v=typeof k?.label==="string"&&k.label.trim()?k.label.trim():void 0;if(r0.open(T,v),F)X((o)=>{if(o.get(T)===F)return o;let m=new Map(o);return m.set(T,F),m})},[]),J=C(()=>{let T=r0.getActiveId();if(T){let k=r0.get(T);if(k?.dirty){if(!window.confirm(`"${k.label}" has unsaved changes. Close anyway?`))return}r0.close(T),L(T),H(T),$.current?.(T)}},[H,L]),W=C((T)=>{let k=r0.get(T);if(k?.dirty){if(!window.confirm(`"${k.label}" has unsaved changes. Close anyway?`))return}r0.close(T),L(T),H(T),$.current?.(T)},[H,L]),A=C((T)=>{r0.activate(T)},[]),E=C((T)=>{let k=r0.getTabs().filter((v)=>v.id!==T&&!v.pinned),F=k.filter((v)=>v.dirty).length;if(F>0){if(!window.confirm(`${F} unsaved tab${F>1?"s":""} will be closed. Continue?`))return}let I=k.map((v)=>v.id);r0.closeOthers(T),I.forEach((v)=>{L(v),H(v),$.current?.(v)})},[H,L]),f=C(()=>{let T=r0.getTabs().filter((I)=>!I.pinned),k=T.filter((I)=>I.dirty).length;if(k>0){if(!window.confirm(`${k} unsaved tab${k>1?"s":""} will be closed. Continue?`))return}let F=T.map((I)=>I.id);r0.closeAll(),F.forEach((I)=>{L(I),H(I),$.current?.(I)})},[H,L]),y=C((T)=>{r0.togglePin(T)},[]),p=C((T)=>{if(!T)return;X((k)=>{if(k.get(T)==="editor")return k;let F=new Map(k);return F.set(T,"editor"),F}),r0.activate(T)},[]),l=C(()=>{let T=r0.getActiveId();if(T)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:T}}))},[]);return b(()=>{let T=(k)=>{let{oldPath:F,newPath:I,type:v}=k.detail||{};if(!F||!I)return;if(v==="dir"){for(let o of r0.getTabs())if(o.path===F||o.path.startsWith(`${F}/`)){let m=`${I}${o.path.slice(F.length)}`;r0.rename(o.id,m)}}else r0.rename(F,I);X((o)=>gN(o,F,I,v))};return window.addEventListener("workspace-file-renamed",T),()=>window.removeEventListener("workspace-file-renamed",T)},[]),b(()=>{let T=(k)=>{if(r0.hasUnsaved())k.preventDefault(),k.returnValue=""};return window.addEventListener("beforeunload",T),()=>window.removeEventListener("beforeunload",T)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Y,previewTabs:N,tabPaneOverrides:V,openEditor:D,closeEditor:J,handleTabClose:W,handleTabActivate:A,handleTabCloseOthers:E,handleTabCloseAll:f,handleTabTogglePin:y,handleTabTogglePreview:U,handleTabEditSource:p,revealInExplorer:l}}function f$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=j[_]??window[Z],Q=Number(Y);return Number.isFinite(Q)?Q:$}catch{return $}}var v$=f$("warning",30000),Q9=f$("finalize",120000),b$=f$("refresh",30000),q9=30000;function K9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function N9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function G9(_=30000){let[,$]=g(0);b(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function X9(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Y)=>Z+Math.max(1,Math.ceil(Y.length/$)),0)}async function V9(_){let{panelKey:$,expanded:j,currentTurnIdRef:Z,thoughtExpandedRef:Y,draftExpandedRef:Q,setAgentThoughtVisibility:q,getAgentThought:K,thoughtBufferRef:N,draftBufferRef:G,setAgentThought:V,setAgentDraft:X}=_;if($!=="thought"&&$!=="draft")return;let U=Z.current;if($==="thought"){if(Y.current=j,U)try{await q(U,"thought",j)}catch(L){console.warn("Failed to update thought visibility:",L)}if(!j)return;try{let L=U?await K(U,"thought"):null;if(L?.text)N.current=L.text;V((H)=>({...H||{text:"",totalLines:0},fullText:N.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full thought:",L)}return}if(Q.current=j,U)try{await q(U,"draft",j)}catch(L){console.warn("Failed to update draft visibility:",L)}if(!j)return;try{let L=U?await K(U,"draft"):null;if(L?.text)G.current=L.text;X((H)=>({...H||{text:"",totalLines:0},fullText:G.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full draft:",L)}}function U9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function g$(_){return String(_||"").trim()||"web:default"}function L9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function mN(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function y4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function R8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return y4(_)?"Compacting context":"Working..."}function hN(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function u8(_,$=Date.now()){let j=mN(_);if(j===null)return null;return hN(Math.max(0,$-j))}function a5(_){return typeof _==="string"}function W9(_){return typeof _==="string"&&_.trim().length>0}function m$(_){if(!Array.isArray(_))return[];return _.filter(($)=>W9($?.chat_jid)&&W9($?.agent_name))}function B9(_){if(!Array.isArray(_))return[];return _.filter(($)=>a5($?.chat_jid)&&a5($?.agent_name))}function z9(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Z=new Map;if(Array.isArray(_)){for(let q of _)if(a5(q?.chat_jid))Z.set(q.chat_jid,q)}let Y=$.map((q)=>{if(!a5(q?.chat_jid))return q;let K=Z.get(q.chat_jid);return K?{...q,...K,is_active:K.is_active??q.is_active}:q}),Q=a5(j)?j:"";return Y.sort((q,K)=>{if(q.chat_jid===Q&&K.chat_jid!==Q)return-1;if(K.chat_jid===Q&&q.chat_jid!==Q)return 1;let N=Boolean(q.archived_at),G=Boolean(K.archived_at);if(N!==G)return N?1:-1;if(Boolean(q.is_active)!==Boolean(K.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(K.chat_jid))}),Y}var pN={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function F9(_){if(!_||typeof _!=="object")return pN;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function H9(_){let j=(Array.isArray(_)?_:[]).find((Z)=>Z?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function J9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Z=String(j),Y=_.agent_name,Q=_.agent_avatar;if(!Y&&Q===void 0)return null;let q=$||{id:Z},K=q.name||null,N=q.avatar_url??q.avatarUrl??q.avatar??null,G=!1,V=!1;if(Y&&Y!==q.name)K=Y,G=!0;if(Q!==void 0){let X=typeof Q==="string"?Q.trim():null,U=typeof N==="string"?N.trim():null,L=X||null;if(L!==(U||null))N=L,V=!0}if(!G&&!V)return null;return{agentId:Z,nameChanged:G,avatarChanged:V,resolvedName:K,resolvedAvatar:N}}function O9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Z=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Y=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Z&&_.avatar_background===Y)return _;return{name:j,avatar_url:Z,avatar_background:Y}}function D9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Z=$.user_avatar??$.userAvatar,Y=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Z===void 0&&Y===void 0)return _;let Q=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Z===void 0?_.avatar_url:typeof Z==="string"&&Z.trim()?Z.trim():null,K=Y===void 0?_.avatar_background:typeof Y==="string"&&Y.trim()?Y.trim():null;if(_.name===Q&&_.avatar_url===q&&_.avatar_background===K)return _;return{name:Q,avatar_url:q,avatar_background:K}}function cN(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function A9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Z=_.filter((Y)=>!j.has(Y?.id)&&!cN(Y));return Z.length===_.length?_:Z}function E9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Z)=>({...Z})).filter((Z)=>!j.has(Z.row_id)):[]}function k9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Z)=>j?.row_id===$[Z]?.row_id)}function S4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Z)=>Z?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function M9(_,$){let j=Array.isArray(_)?_:[],Z=$?.row_id,Y=$?.content;if(Z==null||typeof Y!=="string"||!Y.trim())return j;if(j.some((Q)=>Q?.row_id===Z))return j;return[...j,{row_id:Z,content:Y,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function I9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function x9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y}=_;try{let Q=await $();j(K9(Q));let q=Q?.user||{};Z((N)=>O9(N,q));let K=H9(Q?.agents);Y(K.name,K.avatarUrl)}catch(Q){console.warn("Failed to load agents:",Q)}}function T9(_){let{payload:$,agentsRef:j,setAgents:Z,applyBranding:Y}=_,Q=J9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!Q)return;if(Z((q)=>{let N={...q[Q.agentId]||{id:Q.agentId}};if(Q.nameChanged)N.name=Q.resolvedName;if(Q.avatarChanged)N.avatar_url=Q.resolvedAvatar;return{...q,[Q.agentId]:N}}),Q.agentId==="default")Y(Q.resolvedName,Q.resolvedAvatar,Q.avatarChanged?Date.now():null)}function C9(_){let{payload:$,setUserProfile:j}=_;j((Z)=>D9(Z,$))}function P9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Z,setSupportsThinking:Y,setActiveModelUsage:Q}=_,q=F9($);if(q.hasModel)j(q.model);if(q.hasThinkingLevel)Z(q.thinkingLevel);if(q.hasSupportsThinking)Y(q.supportsThinking);if(q.hasProviderUsage)Q(q.providerUsage)}function y9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Z,applyModelState:Y}=_,Q=$;j(Q).then((q)=>{if(Z.current!==Q)return;if(q)Y(q)}).catch(()=>{})}function S9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Z,activeChatJidRef:Y,setActiveChatAgents:Q}=_,q=$;Promise.all([j().catch(()=>({chats:[]})),Z(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([K,N])=>{if(Y.current!==q)return;let G=m$(K?.chats),V=m$(N?.chats);Q(z9(G,V,q))}).catch(()=>{if(Y.current!==q)return;Q([])})}function w9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Z}=_;j($).then((Y)=>{Z(B9(Y?.chats))}).catch(()=>{})}function R9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshContextUsage:Y,refreshAutoresearchStatus:Q,refreshQueueState:q}=_;if(!$||typeof $!=="object")return;if(j(),Z(),Y(),Q(),I9($))q()}function h$(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function u9(_,$){let j=new Map(_),Z=h$($);if(typeof $?.key==="string"&&$.key&&Z)j.set($.key,Z);else j.delete("autoresearch");return j}function f9(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Z=new Map(_),Y=h$($);if($?.options?.remove||!Y)Z.delete(j);else Z.set(j,Y);return Z}function v9(_){if(_?.options?.remove)return!0;return h$(_)?.state!=="running"}function p$(_,$){return`${_}:${$}`}function b9(_,$,j){let Z=p$($,j);if(_.has(Z))return _;let Y=new Set(_);return Y.add(Z),Y}function g9(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function f8(_,$){if(_.size===0)return _;let j=`${$}:`,Z=new Set(Array.from(_).filter((Y)=>!String(Y).startsWith(j)));return Z.size===_.size?_:Z}async function m9(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Z=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Z)throw Error("No tmux command available.");return await _.writeClipboard(Z),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function s_(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function h9(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function c$(_,$){return _&&$}function p9(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function c9(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function l9(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Z=new Set(j),Y=_.filter((Q)=>!Z.has(Q?.id));return Y.length===_.length?_:Y}function n9(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Z,dismissedQueueRowIdsRef:Y,getAgentQueueState:Q,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:K}=_,N=++j.current,G=$;Q(G).then((V)=>{if(N!==j.current)return;if(Z.current!==G)return;let X=Y.current,U=E9(V?.items,X);if(U.length){q((L)=>k9(L,U)?L:U);return}X.clear(),K(0),q((L)=>L.length===0?L:[])}).catch(()=>{if(N!==j.current)return;if(Z.current!==G)return;q((V)=>V.length===0?V:[])})}async function d9(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Z,setContextUsage:Y}=_,Q=$;try{let q=await Z(Q);if(j.current!==Q)return;if(q)Y(q)}catch(q){if(j.current!==Q)return;console.warn("Failed to fetch agent context:",q)}}async function i9(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Z,setExtensionStatusPanels:Y,setPendingExtensionPanelActions:Q}=_,q=$;try{let K=await Z(q);if(j.current!==q)return;Y((N)=>u9(N,K)),Q((N)=>f8(N,"autoresearch"))}catch(K){if(j.current!==q)return;console.warn("Failed to fetch autoresearch status:",K)}}function r9(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshQueueState:Y,refreshContextUsage:Q,refreshAutoresearchStatus:q}=_;$(),j(),Z(),Y(),Q(),q()}function o9(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Z}=_;if(s_($.current))j();Z()}function s9(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Z,minWidth:Y=160,maxWidth:Q=600,fallbackWidth:q=280}=_,K=$("sidebarWidth",null),N=Number.isFinite(K)?Math.min(Math.max(Number(K),Y),Q):q;if(j.current=N,Z)Z.style.setProperty("--sidebar-width",`${N}px`);return N}async function a9(_){let{currentHashtag:$,searchQuery:j,searchScope:Z,currentChatJid:Y,currentRootChatJid:Q,loadPosts:q,searchPosts:K,setPosts:N,setHasMore:G,scrollToBottom:V,isCancelled:X,scheduleRaf:U=(D)=>requestAnimationFrame(D),scheduleTimeout:L=(D,J)=>{setTimeout(D,J)}}=_,H=()=>{if(X())return;U(()=>{if(X())return;L(()=>{if(X())return;V()},0)})};if($){await q($);return}if(j){try{let D=await K(j,50,0,Y,Z,Q);if(X())return;N(Array.isArray(D?.results)?D.results:[]),G(!1)}catch(D){if(X())return;console.error("Failed to search:",D),N([]),G(!1)}return}try{await q(),H()}catch(D){if(X())return;console.error("Failed to load timeline:",D)}}function lN(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,refreshQueueState:Q,intervalMs:q=60000,scheduleInterval:K=(V,X)=>setInterval(V,X),clearScheduledInterval:N=(V)=>clearInterval(V)}=_;$();let G=K(()=>{j(),Z(),Y(),Q()},q);return()=>{N(G)}}function t9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y,readStoredNumber:Q,sidebarWidthRef:q,appShellRef:K,currentChatJid:N,currentRootChatJid:G,getAgentModels:V,getActiveChatAgents:X,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:H,setCurrentChatBranches:D,setActiveModel:J,setActiveThinkingLevel:W,setSupportsThinking:A,setActiveModelUsage:E,agentsRef:f,refreshQueueState:y,refreshContextUsage:p,refreshAutoresearchStatus:l}=_,T=C(async()=>{await x9({getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y})},[Y,$,j,Z]);b(()=>{T(),s9({readStoredNumber:Q,sidebarWidthRef:q,shellElement:K.current})},[K,T,Q,q]);let k=C((r)=>{T9({payload:r,agentsRef:f,setAgents:j,applyBranding:Y})},[f,Y,j]),F=C((r)=>{C9({payload:r,setUserProfile:Z})},[Z]),I=C((r)=>{P9({payload:r,setActiveModel:J,setActiveThinkingLevel:W,setSupportsThinking:A,setActiveModelUsage:E})},[J,E,W,A]),v=C(()=>{y9({currentChatJid:N,getAgentModels:V,activeChatJidRef:L,applyModelState:I})},[L,I,N,V]),o=C(()=>{S9({currentChatJid:N,getActiveChatAgents:X,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:H})},[L,N,X,U,H]),m=C(()=>{w9({currentRootChatJid:G,getChatBranches:U,setCurrentChatBranches:D})},[G,U,D]),s=C(()=>{r9({refreshModelState:v,refreshActiveChatAgents:o,refreshCurrentChatBranches:m,refreshQueueState:y,refreshContextUsage:p,refreshAutoresearchStatus:l})},[o,l,p,m,v,y]);return b(()=>lN({refreshModelAndQueueState:s,refreshModelState:v,refreshActiveChatAgents:o,refreshCurrentChatBranches:m,refreshQueueState:y}),[o,m,s,v,y]),{updateAgentProfile:k,updateUserProfile:F,applyModelState:I,refreshModelState:v,refreshActiveChatAgents:o,refreshCurrentChatBranches:m,refreshModelAndQueueState:s}}function e9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function _j(_){return String(_||"").trim()||"web:default"}function $j(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function jj(_){if(!_)return!1;return _.status!=="running"}function Zj(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function Yj(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function Qj(_){let{question:$,currentChatJid:j,streamSidePrompt:Z,resolveBtwChatJid:Y,showIntentToast:Q,btwAbortRef:q,setBtwSession:K}=_,N=String($||"").trim();if(!N)return Q("BTW needs a question","Usage: /btw <question>","warning"),!0;if(q.current)q.current.abort();let G=new AbortController;q.current=G,K({question:N,answer:"",thinking:"",error:null,model:null,status:"running"});try{let V=await Z(N,{signal:G.signal,chatJid:Y(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(X)=>{if(X==="side_prompt_start")K((U)=>U?{...U,status:"running"}:U)},onThinkingDelta:(X)=>{K((U)=>U?{...U,thinking:`${U.thinking||""}${X||""}`}:U)},onTextDelta:(X)=>{K((U)=>U?{...U,answer:`${U.answer||""}${X||""}`}:U)}});if(q.current!==G)return!0;K((X)=>X?{...X,answer:V?.result||X.answer||"",thinking:V?.thinking||X.thinking||"",model:V?.model||null,status:"success",error:null}:X)}catch(V){if(G.signal.aborted)return!0;K((X)=>X?{...X,status:"error",error:V?.payload?.error||V?.message||"BTW request failed."}:X)}finally{if(q.current===G)q.current=null}return!0}async function qj(_){let{content:$,parseBtwCommand:j,closeBtwPanel:Z,runBtwPrompt:Y,showIntentToast:Q}=_,q=j($);if(!q)return!1;if(q.type==="help")return Q("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(q.type==="clear")return Z(),Q("BTW cleared","Closed the side conversation panel.","info"),!0;if(q.type==="ask")return await Y(q.question),!0;return!1}async function Kj(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:Z,currentChatJid:Y,sendAgentMessage:Q,handleMessageResponse:q,showIntentToast:K}=_,N=j($);if(!N)return!1;try{let G=await Q("default",N,null,[],Z?"queue":null,Y);return q(G),K(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(G){return K("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning"),!1}}function nN(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:j,html:Y}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function dN(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Q=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Q==="svg")return j?{kind:Q,svg:j}:{kind:Q};return Z?{kind:Q,html:Z}:{kind:Q}}function w4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function y0(_){return typeof _==="string"&&_.trim()?_.trim():null}function Gj(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var Xj="__PICLAW_WIDGET_HOST__:";function Nj(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function l$(_,$){if(!_||_.type!=="generated_widget")return null;let j=nN(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:Gj(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function Vj(_){if(!_||typeof _!=="object")return null;let $=dN(_),j=y0(_?.widget_id)||y0(_?.widgetId)||y0(_?.tool_call_id)||y0(_?.toolCallId),Z=y0(_?.tool_call_id)||y0(_?.toolCallId),Y=y0(_?.turn_id)||y0(_?.turnId),Q=y0(_?.title)||y0(_?.name)||"Generated widget",q=y0(_?.subtitle)||"",K=y0(_?.description)||q,N=y0(_?.status),G=N==="loading"||N==="streaming"||N==="final"||N==="error"?N:"streaming";return{title:Q,subtitle:q,description:K,originPostId:w4(_?.origin_post_id)??w4(_?.originPostId),originChatJid:y0(_?.origin_chat_jid)||y0(_?.originChatJid)||y0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:Gj(_?.capabilities,!0),source:"live",status:G,turnId:Y,toolCallId:Z,width:w4(_?.width),height:w4(_?.height),error:y0(_?.error)}}function Uj(_){return l$(_,null)!==null}function F_(_){let $=y0(_?.toolCallId)||y0(_?.tool_call_id);if($)return $;let j=y0(_?.widgetId)||y0(_?.widget_id);if(j)return j;let Z=w4(_?.originPostId)??w4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function Lj(_){let j=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Q)=>typeof Q==="string"&&Q.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Y)}function Wj(_){return Lj(_)?"allow-downloads allow-scripts":"allow-downloads"}function v8(_){return{title:y0(_?.title)||"Generated widget",widgetId:y0(_?.widgetId)||y0(_?.widget_id),toolCallId:y0(_?.toolCallId)||y0(_?.tool_call_id),turnId:y0(_?.turnId)||y0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:y0(_?.status)||"final"}}function b8(_){return{...v8(_),subtitle:y0(_?.subtitle)||"",description:y0(_?.description)||"",error:y0(_?.error)||null,width:w4(_?.width),height:w4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function g8(_){return`${Xj}${JSON.stringify(b8(_))}`}function Bj(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=y0(_.text)||y0(_.content)||y0(_.message)||y0(_.prompt)||y0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=y0(j.text)||y0(j.content)||y0(j.message)||y0(j.prompt)||y0(j.value);if(Z)return Z}return null}function zj(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Fj(_){let $=y0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return y0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function iN(_){let $=v8(_);return`<script>
(function () {
  const meta = ${Nj($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {
      /* expected: parent bridge may be unavailable while the iframe is unloading. */
    }
  }

  const windowNamePrefix = ${Nj(Xj)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {
      /* expected: host window.name payload can be absent or mid-update while polling. */
    }
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function Hj(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Y:Z;if(!q)return"";let K=Lj(_),N=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,V=K?iN(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${N}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${Q.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
${V}
</head>
<body>${G}</body>
</html>`}function rN(_,$){let j=F_(_);return Boolean(_&&j===$)}function D5(_,$,j){if(!rN(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function Jj(_,$){return{..._,openedAt:$}}function Oj(_){let $=F_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function Dj(_,$,j){let Z=Vj({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Z)return _;let Y=F_(Z);if(Y&&j.dismissedSessionKeys?.has(Y))return _;let Q=F_(_),q=Boolean(Y&&Q&&Y===Q),K={...q&&_?.artifact?_.artifact:{},...Z.artifact||{}};return{...q&&_?_:{},...Z,artifact:K,source:"live",originChatJid:Z.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function Aj(_,$){if(!_||_?.source!=="live")return _||null;let j=F_($),Z=F_(_);if(j&&Z&&j!==Z)return _;return null}function Ej(_,$,j){return D5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function n$(_,$,j){if(j.errorMessage)return D5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return D5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function kj(_,$,j){return D5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function Mj(_,$,j){return D5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function Ij(_,$,j){return D5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function A5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Z=S4(_,j);return{rowId:j,items:Z.items,remainingQueueCount:Z.remainingQueueCount}}function d$(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function R4(_){return _.status==="fulfilled"?_.value:null}function m8(_){return Math.max(0,Math.min(100,_))}function xj(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Z=$.filter((J)=>J?.data?.is_bot_message).length,Y=$.filter((J)=>!J?.data?.is_bot_message).length,Q=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,K=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,N=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,V=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,X=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,L=_.modelsPayload?.supports_thinking??_.supportsThinking,H=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),D=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:K},agent:{status:H,phase:D,running:Boolean(_.isAgentTurnActive)},model:{current:X,thinkingLevel:U,supportsThinking:Boolean(L)},context:{tokens:G,contextWindow:V,percent:N},queue:{count:Q},timeline:{loadedPosts:$.length,botPosts:Z,userPosts:Y,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:m8(Math.round(N))},{key:"queue",label:"Queue",value:m8(Q*18)},{key:"activeChats",label:"Active chats",value:m8(q*12)},{key:"posts",label:"Timeline load",value:m8($.length*5)}]}}function Tj(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function Cj(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function Pj(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function yj(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function Sj(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function wj(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function Rj(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Z,getAgentStatus:Y,getAgentContext:Q,getAgentQueueState:q,getAgentModels:K,getActiveChatAgents:N,getChatBranches:G,getTimeline:V,rawPosts:X,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:D,activeModel:J,activeThinkingLevel:W,supportsThinking:A,isAgentTurnActive:E}=_,[f,y,p,l,T,k,F]=await Promise.allSettled([Y(j),Q(j),q(j),K(j),N(),G(Z),V(20,null,j)]);return xj({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Z,statusPayload:R4(f),contextPayload:R4(y),queuePayload:R4(p),modelsPayload:R4(l),activeChatsPayload:R4(T),branchesPayload:R4(k),timelinePayload:R4(F),rawPosts:X,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:D,activeModel:J,activeThinkingLevel:W,supportsThinking:A,isAgentTurnActive:E})}function uj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:Q,setFollowupQueueItems:q,showIntentToast:K,steerAgentQueueItem:N}=_,G=A5(j.current,$);if(!G)return;let{rowId:V}=G;Z.current.add(V),q((X)=>S4(X,V).items),N(V,g$(Y)).then(()=>{Q()}).catch((X)=>{console.warn("[queue] Failed to steer queued item:",X);let U=d$("steer");K(U.title,U.detail,"warning"),Z.current.delete(V),Q()})}function fj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:Q,setFollowupQueueItems:q,showIntentToast:K,clearQueuedSteerStateIfStale:N,removeAgentQueueItem:G}=_,V=A5(j.current,$);if(!V)return;let{rowId:X}=V;Z.current.add(X),N?.(V.remainingQueueCount),q((U)=>S4(U,X).items),G(X,g$(Y)).then(()=>{Q()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let L=d$("remove");K(L.title,L.detail,"warning"),Z.current.delete(X),Q()})}function vj(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Z}=_;if(!$||typeof $!=="object")return;let Y=F_($);if(Y)j.current.delete(Y);Z(Jj($,new Date().toISOString()))}function bj(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Z)=>{let Y=Oj(Z);if(Y.dismissedSessionKey)$.current.add(Y.dismissedSessionKey);return Y.nextWidget})}function gj(_){let{event:$,widget:j,currentChatJid:Z,isComposeBoxAgentActive:Y,setFloatingWidget:Q,handleCloseFloatingWidget:q,handleMessageResponse:K,showIntentToast:N,sendAgentMessage:G,buildFloatingWidgetDashboardSnapshot:V}=_,X=typeof $?.kind==="string"?$.kind:"",U=F_(j);if(!X||!U)return;if(X==="widget.close"){q();return}if(X==="widget.submit"){let L=Bj($?.payload),H=zj($?.payload),D=new Date().toISOString();if(Q((J)=>Ej(J,U,{kind:X,payload:$?.payload||null,submittedAt:D,submissionText:L})),!L){if(N("Widget submission received","The widget submitted data without a message payload yet.","info",3500),H)q();return}(async()=>{try{let J=await G("default",L,null,[],Y?"queue":null,Z);K(J),Q((A)=>n$(A,U,{submittedAt:D,submissionText:L,queued:J?.queued||null}));let W=Tj(J?.queued);if(N(W.title,W.detail,W.kind,W.durationMs),H)q()}catch(J){Q((A)=>n$(A,U,{submittedAt:D,submissionText:L,errorMessage:J?.message||"Could not send the widget message."}));let W=Cj(J?.message);N(W.title,W.detail,W.kind,W.durationMs)}})();return}if(X==="widget.ready"||X==="widget.request_refresh"){let L=new Date().toISOString(),H=Pj($?.payload||null,j?.runtimeState?.refreshCount);if(Q((D)=>kj(D,U,{kind:X,payload:$?.payload||null,eventAt:L,nextRefreshCount:H.nextRefreshCount,shouldBuildDashboard:H.shouldBuildDashboard})),X==="widget.request_refresh")if(H.shouldBuildDashboard)(async()=>{try{let D=await V($?.payload||null);Q((W)=>Mj(W,U,{dashboard:D,at:new Date().toISOString(),count:H.nextRefreshCount,echo:$?.payload||null}));let J=yj();N(J.title,J.detail,J.kind,J.durationMs)}catch(D){Q((W)=>Ij(W,U,{errorMessage:D?.message||"Could not build dashboard.",at:new Date().toISOString(),count:H.nextRefreshCount}));let J=Sj(D?.message);N(J.title,J.detail,J.kind,J.durationMs)}})();else{let D=wj();N(D.title,D.detail,D.kind,D.durationMs)}}}function oN(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function mj(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:Z,showIntentToast:Y,setPendingExtensionPanelActions:Q,refreshAutoresearchStatus:q,stopAutoresearch:K,dismissAutoresearch:N,streamSidePrompt:G,btwAbortRef:V,btwSession:X,setBtwSession:U,sendAgentMessage:L,handleMessageResponse:H,dismissedLiveWidgetKeysRef:D,setFloatingWidget:J,getAgentStatus:W,getAgentContext:A,getAgentQueueState:E,getAgentModels:f,getActiveChatAgents:y,getChatBranches:p,getTimeline:l,rawPosts:T,activeChatAgents:k,currentChatBranches:F,contextUsage:I,followupQueueItemsRef:v,activeModel:o,activeThinkingLevel:m,supportsThinking:s,isAgentTurnActive:r}=_,e=C(async(A0,u0)=>{let m0=typeof A0?.key==="string"?A0.key:"",O0=typeof u0?.key==="string"?u0.key:"",c0=p$(m0,O0);if(!m0||!O0)return;Q((N0)=>b9(N0,m0,O0));try{let N0=await m9({panel:A0,action:u0,currentChatJid:$,stopAutoresearch:K,dismissAutoresearch:N,writeClipboard:(M0)=>navigator.clipboard.writeText(M0)});if(N0.refreshAutoresearchStatus)q();if(N0.toast)Y(N0.toast.title,N0.toast.detail,N0.toast.kind,N0.toast.durationMs)}catch(N0){Y("Panel action failed",N0?.message||"Could not complete that action.","warning")}finally{Q((N0)=>g9(N0,c0))}},[$,N,q,Q,Y,K]),Q0=C(()=>{Yj({btwAbortRef:V,setBtwSession:U})},[V,U]),$0=C(async(A0)=>{return await Qj({question:A0,currentChatJid:$,streamSidePrompt:G,resolveBtwChatJid:_j,showIntentToast:Y,btwAbortRef:V,setBtwSession:U})},[V,$,U,Y,G]),K0=C(async({content:A0})=>{return await qj({content:A0,parseBtwCommand:e9,closeBtwPanel:Q0,runBtwPrompt:$0,showIntentToast:Y})},[Q0,$0,Y]),W0=C(()=>{if(X?.question)$0(X.question)},[X,$0]),L0=C(async()=>{await Kj({btwSession:X,buildBtwInjectionText:Zj,isComposeBoxAgentActive:Z,currentChatJid:$,sendAgentMessage:L,handleMessageResponse:H,showIntentToast:Y})},[X,$,H,Z,L,Y]),R0=C(async(A0=null)=>{return Rj({requestPayload:A0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:W,getAgentContext:A,getAgentQueueState:E,getAgentModels:f,getActiveChatAgents:y,getChatBranches:p,getTimeline:l,rawPosts:T,activeChatAgents:k,currentChatBranches:F,contextUsage:I,followupQueueItems:v.current,activeModel:o,activeThinkingLevel:m,supportsThinking:s,isAgentTurnActive:r})},[k,o,m,I,F,$,j,v,y,A,f,E,W,p,l,r,T,s]),E0=C((A0)=>{vj({widget:A0,dismissedLiveWidgetKeysRef:D,setFloatingWidget:J})},[D,J]),z0=C(()=>{bj({dismissedLiveWidgetKeysRef:D,setFloatingWidget:J})},[D,J]),v0=C((A0,u0)=>{gj({event:A0,widget:u0,currentChatJid:$,isComposeBoxAgentActive:Z,setFloatingWidget:J,handleCloseFloatingWidget:z0,handleMessageResponse:H,showIntentToast:Y,sendAgentMessage:L,buildFloatingWidgetDashboardSnapshot:R0})},[R0,$,z0,H,Z,L,J,Y]);return b(()=>{oN({dismissedLiveWidgetKeysRef:D,setFloatingWidget:J})},[$,D,J]),{handleExtensionPanelAction:e,closeBtwPanel:Q0,handleBtwIntercept:K0,handleBtwRetry:W0,handleBtwInject:L0,handleOpenFloatingWidget:E0,handleCloseFloatingWidget:z0,handleFloatingWidgetEvent:v0}}function hj(_={}){return G4(_)&&A8(_)}function sN(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function aN(_={},$={}){if(!hj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Y=sN({window:j});if(Y&&Y>0)Z.documentElement.style.setProperty("--app-height",`${Y}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Y}function pj(_={}){if(!hj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Y=new Set,Q=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let X of Y)$.clearTimeout?.(X);Y.clear()},q=()=>{Z=0,aN({window:$,document:j})},K=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(q)??0},N=()=>{K();for(let X of[80,220,420]){let U=$.setTimeout?.(()=>{Y.delete(U),K()},X);if(U!=null)Y.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;N()},V=$.visualViewport;return N(),$.addEventListener("focus",N),$.addEventListener("pageshow",N),$.addEventListener("resize",N),$.addEventListener("orientationchange",N),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",N,!0),V?.addEventListener?.("resize",N),V?.addEventListener?.("scroll",N),()=>{Q(),$.removeEventListener("focus",N),$.removeEventListener("pageshow",N),$.removeEventListener("resize",N),$.removeEventListener("orientationchange",N),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",N,!0),V?.removeEventListener?.("resize",N),V?.removeEventListener?.("scroll",N)}}function tN(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function s1(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:tN($,j)}var eN=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function cj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Y=()=>{_(G4({window:j,navigator:Z}))};Y();let q=eN.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",Y),()=>K.removeEventListener("change",Y);if(typeof K.addListener==="function")return K.addListener(Y),()=>K.removeListener(Y);return()=>{}});return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),()=>{for(let K of q)K();j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y)}}function lj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Y=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),Z.addEventListener?.("visibilitychange",Y),()=>{j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y),Z.removeEventListener?.("visibilitychange",Y)}}function nj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.openTab,Y=_?.popOutPane,Q=(N)=>{let G=N?.detail?.path,V=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Z?.(G,V)},q=(N)=>{let G=N?.detail?.path,V=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Y?.(G,V)},K=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return K.forEach((N)=>j.addEventListener(N,Q)),j.addEventListener("pane:popout",q),()=>{K.forEach((N)=>j.removeEventListener(N,Q)),j.removeEventListener("pane:popout",q)}}function dj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(Y)=>{if(Y?.ctrlKey&&Y.key==="`")Y.preventDefault?.(),_?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function ij(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.toggleZenMode,Y=_?.exitZenMode,Q=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(K)=>{if(K?.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault?.(),Z?.();return}if(K?.key==="Escape"&&Q())K.preventDefault?.(),Y?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function rj(_,$){let j=Array.isArray(_)?_:[];return j.find((Z)=>Z?.id===$)||j[0]||null}function oj(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function sj(_,$,j){return _||$?.label||j||"Pane"}function aj(_,$,j){let Z=Array.isArray(_)?_.length:0,Y=Boolean(j&&$?.has?.(j));return Z>1||Y}function tj(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function ej(_,$,j,Z){return _===$&&!j||Z}function _Z(_,$,j,Z,Y){return _||!$&&(j||Z&&Y)}function h8(_){let $=i$(_);return $?`@${$}`:""}function i$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function p8(_,$=""){let j=String(_||""),Z=i$(j),Y=i$($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Q=`@${Z}`;if(Z===Y)return{normalized:Z,handle:Q,canSubmit:!1,kind:"info",message:`Already using ${Q}.`};if(Z!==j.trim())return{normalized:Z,handle:Q,canSubmit:!0,kind:"info",message:`Will save as ${Q}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Q,canSubmit:!0,kind:"success",message:`Saving as ${Q}.`}}function $Z(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?h8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function _G(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Y=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Y===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function c8(_,$={}){let j=h8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Y=_G(_,$);return Y.length>0?`${j} — ${Z} • ${Y.join(" • ")}`:`${j} — ${Z}`}function jZ(_,$,j){let Z=h8(_),Y=h8($),Q=String(j||"").trim();if(Z&&Y&&Z!==Y)return`Restored archived ${Z} as ${Y} because ${Z} is already in use.`;if(Y)return`Restored ${Y}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Q||"branch"}.`}var $G="piclaw_btw_session",YZ=900,ZZ="__piclawRenameBranchFormLock__";function jG(){try{return import.meta.url}catch{return null}}function r$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function l8(_,$,j=""){let Z=_?.get?.($);return Z&&Z.trim()?Z.trim():j}function QZ(_={}){let $=_.importMetaUrl===void 0?jG():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Z=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Y=$?new URL($).searchParams.get("v"):null;if(Y&&Y.trim())return Y.trim()}catch{}try{let Q=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((N)=>String(N?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Q)return null;let K=new URL(Q,Z).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function o$(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[ZZ];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return $[ZZ]=Z,Z}function qZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function KZ(_={}){let $=typeof _.readItem==="function"?_.readItem:B_,j=_.storageKey||$G,Z=$(j);if(!Z)return null;try{let Y=JSON.parse(Z);if(!Y||typeof Y!=="object")return null;let Q=typeof Y.question==="string"?Y.question:"",q=typeof Y.answer==="string"?Y.answer:"",K=typeof Y.thinking==="string"?Y.thinking:"",N=typeof Y.error==="string"&&Y.error.trim()?Y.error:null,G=Y.status==="running"?"error":Y.status==="success"||Y.status==="error"?Y.status:"success";return{question:Q,answer:q,thinking:K,error:G==="error"?N||"BTW stream interrupted. You can retry.":N,model:null,status:G}}catch{return null}}function NZ(_,$={}){let j=$.defaultChatJid||"web:default",Z=l8(_,"chat_jid",j),Y=r$(_?.get?.("chat_only")||_?.get?.("chat-only")),Q=r$(_?.get?.("pane_popout")),q=l8(_,"pane_path"),K=l8(_,"pane_label"),N=r$(_?.get?.("branch_loader")),G=l8(_,"branch_source_chat_jid",Z);return{currentChatJid:Z,chatOnlyMode:Y,panePopoutMode:Q,panePopoutPath:q,panePopoutLabel:K,branchLoaderMode:N,branchLoaderSourceChatJid:G}}function GZ(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Z,staleUiReloadScheduledRef:Y,tabStoreHasUnsaved:Q,isAgentRunningRef:q,pendingRequestRef:K,showIntentToast:N}=_,G=typeof $==="string"&&$.trim()?$.trim():null;if(!G||!j||G===j)return!1;if(Z.current===G)return!0;Z.current=G;let V=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!Q()&&!V&&!q.current&&!K.current&&!Y.current)return Y.current=!0,N("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Y.current=!1}},350),!0;return N("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function s$(_){let{currentHashtag:$,searchQuery:j,searchOpen:Z}=_||{};return!$&&!j&&!Z}function XZ(_){let{status:$,setConnectionStatus:j,setAgentStatus:Z,setAgentDraft:Y,setAgentPlan:Q,setAgentThought:q,setPendingRequest:K,pendingRequestRef:N,clearAgentRunState:G,hasConnectedOnceRef:V,viewStateRef:X,refreshTimeline:U,refreshAgentStatus:L,refreshQueueState:H,refreshContextUsage:D}=_;if(j($),$!=="connected"){Z(null),Y({text:"",totalLines:0}),Q(""),q({text:"",totalLines:0}),K(null),N.current=null,G();return}if(!V.current){if(V.current=!0,s$(X.current))U();L(),H(),D();return}if(s$(X.current))U();L(),H(),D()}function VZ(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Z,refreshQueueState:Y,refreshAgentStatus:Q,refreshContextUsage:q,refreshAutoresearchStatus:K}=_,N=s$($.current);if(j){if(N)Z();Y(),Q(),q(),K();return}if(N)Z();Q(),q(),K()}function UZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Z,renameBranchLockUntil:Y,getFormLock:Q,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:K,now:N=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Q?.()||null;if(!G)return!1;if(Z||N<Number(Y||0)||G.inFlight||N<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),K?.(!0),!0}function LZ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function WZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Z,openRenameForm:Y,renameBranchInFlightRef:Q,renameBranchLockUntilRef:q,getFormLock:K,setIsRenamingBranch:N,renameChatBranch:G,refreshActiveChatAgents:V,refreshCurrentChatBranches:X,showIntentToast:U,closeRenameForm:L,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Z!=="string")return Y?.(),!1;let D=H(),J=K?.()||null;if(!J)return!1;if(Q.current||D<Number(q.current||0)||J.inFlight||D<Number(J.cooldownUntil||0))return!1;Q.current=!0,J.inFlight=!0,N?.(!0);try{let W=j.agent_name||"",A=p8(Z,W);if(!A.canSubmit)return U?.("Could not rename branch",A.message||"Enter a valid branch handle.","warning",4000),!1;let E=A.normalized||W,f=await G(j.chat_jid,{agentName:E});await Promise.allSettled([V?.(),X?.()]);let y=f?.branch?.agent_name||E||W;return U?.("Branch renamed",`@${y}`,"info",3500),L?.(),!0}catch(W){let A=W instanceof Error?W.message:String(W||"Could not rename branch."),E=/already in use/i.test(A||"")?`${A} Switch to or restore that existing session from the session manager.`:A;return U?.("Could not rename branch",E||"Could not rename branch.","warning",5000),!1}finally{Q.current=!1,N?.(!1);let W=H()+YZ;q.current=W;let A=K?.()||null;if(A)A.inFlight=!1,A.cooldownUntil=W}}async function BZ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Z,currentBranchRecord:Y,currentChatBranches:Q=[],activeChatAgents:q=[],pruneChatBranch:K,refreshActiveChatAgents:N,refreshCurrentChatBranches:G,showIntentToast:V,baseHref:X,chatOnlyMode:U,navigate:L,confirm:H=(p)=>window.confirm(p)}=_;if(!$)return!1;let D=typeof j==="string"&&j.trim()?j.trim():"",J=typeof Z==="string"&&Z.trim()?Z.trim():"",W=D||Y?.chat_jid||J;if(!W)return V?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let A=(Y?.chat_jid===W?Y:null)||Q.find((p)=>p?.chat_jid===W)||q.find((p)=>p?.chat_jid===W)||null;if(A?.chat_jid===(A?.root_chat_jid||A?.chat_jid))return V?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let f=`@${A?.agent_name||W}${A?.chat_jid?` — ${A.chat_jid}`:""}`;if(!H(`Prune ${f}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await K(W),await Promise.allSettled([N?.(),G?.()]);let p=A?.root_chat_jid||"web:default";V?.("Branch pruned",`${f} has been archived.`,"info",3000);let l=X4(X,p,{chatOnly:U});return L?.(l),!0}catch(p){let l=p instanceof Error?p.message:String(p||"Could not prune branch.");return V?.("Could not prune branch",l||"Could not prune branch.","warning",5000),!1}}async function zZ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:Y,refreshCurrentChatBranches:Q,showIntentToast:q,baseHref:K,chatOnlyMode:N,navigate:G}=_,V=typeof $==="string"?$.trim():"";if(!V||typeof j!=="function")return!1;try{let X=Z.find((W)=>W?.chat_jid===V)||null,U=await j(V);await Promise.allSettled([Y?.(),Q?.()]);let L=U?.branch,H=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():V,D=jZ(X?.agent_name,L?.agent_name,H);q?.("Branch restored",D,"info",4200);let J=X4(K,H,{chatOnly:N});return G?.(J),!0}catch(X){let U=X instanceof Error?X.message:String(X||"Could not restore branch.");return q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function FZ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Z,navigate:Y,baseHref:Q,isCancelled:q=()=>!1}=_;try{Z?.({status:"running",message:"Preparing a new chat branch…"});let K=await j($);if(q())return!1;let N=K?.branch,G=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let V=X4(Q,G,{chatOnly:!0});return Y?.(V,{replace:!0}),!0}catch(K){if(q())return!1;return Z?.({status:"error",message:f5(K)}),!1}}function HZ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Z,chatOnlyMode:Y,currentHref:Q,navigate:q}=_;if(!$)return!1;let K=typeof j==="string"?j.trim():"";if(!K||K===Z)return!1;let N=X4(Q,K,{chatOnly:Y});return q?.(N),!0}async function JZ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Z,dockInstanceRef:Y,terminalTabPath:Q}=_,K=(typeof j==="string"?j.trim():"")===$?Z.current:$===Q?Y.current:null;if(typeof K?.preparePopoutTransfer!=="function")return null;return await K.preparePopoutTransfer()}function OZ(_){let{panePath:$,terminalTabPath:j,dockVisible:Z,resolveTab:Y,closeTab:Q,setDockVisible:q}=_,K=Y($);if(K&&!K.dirty){Q($);return}if($===j&&Z)q(!1)}function DZ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Z,editorWidthRef:Y,dockHeightRef:Q,sidebarWidthRef:q,readStoredNumber:K}=_;if(!j||!$||!Z)return;if(!Y.current){let N=K("editorWidth",null),G=q.current||280;Y.current=Number.isFinite(N)?Number(N):G}if(Z.style.setProperty("--editor-width",`${Y.current}px`),!Q.current){let N=K("dockHeight",null);Q.current=Number.isFinite(N)?Number(N):200}Z.style.setProperty("--dock-height",`${Q.current}px`)}async function AZ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Z,refreshActiveChatAgents:Y,refreshCurrentChatBranches:Q,showIntentToast:q,navigate:K,baseHref:N}=_;try{let V=(await Z($))?.branch,X=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!X)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Y?.(),Q?.()]);let U=V?.agent_name?`@${V.agent_name}`:X;q?.("New branch created",`Switched to ${U}.`,"info",2500);let L=X4(N,X,{chatOnly:j});return K?.(L),!0}catch(G){return q?.("Could not create branch",f5(G),"warning",5000),!1}}async function EZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Z,label:Y,showIntentToast:Q,resolveSourceTransfer:q,closeSourcePaneIfTransferred:K,currentChatJid:N,baseHref:G}=_;if(!$||j)return!1;let V=typeof Z==="string"&&Z.trim()?Z.trim():"";if(!V)return!1;let X=I2(V);if(!X)return Q?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=o6(X);if(!U)return Q?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;s6(U,{title:typeof Y==="string"&&Y.trim()?`Opening ${Y}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let L=await q?.(V),H=M2(G,V,{label:typeof Y==="string"&&Y.trim()?Y.trim():void 0,chatJid:N,params:L});return a6(U,H),K?.(V),!0}catch(L){t6(U);let H=L instanceof Error?L.message:"Could not transfer pane state to the new window.";return Q?.("Could not open pane window",H,"warning",5000),!1}}async function kZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Z,currentRootChatJid:Y,forkChatBranch:Q,getActiveChatAgents:q,getChatBranches:K,setActiveChatAgents:N,setCurrentChatBranches:G,showIntentToast:V,baseHref:X}=_;if(!$||j)return!1;let U=E2(Z);if(!U)return V?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let H=k2(X,Z,{chatOnly:!0});if(!window.open(H,U.target))return V?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let L=o6(U);if(!L)return V?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;s6(L,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let D=(await Q(Z))?.branch,J=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!J)throw Error("Branch fork did not return a chat id.");try{let A=await q?.();N?.(Array.isArray(A?.chats)?A.chats:[])}catch{}try{let A=await K?.(Y);G?.(Array.isArray(A?.chats)?A.chats:[])}catch{}let W=X4(X,J,{chatOnly:!0});return a6(L,W),!0}catch(H){return t6(L),V?.("Could not open branch window",f5(H),"error",5000),!1}}function MZ(_){_(($)=>!$)}function IZ(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,navigate:Y,hasWindow:Q=typeof window<"u",currentHref:q=Q?window.location.href:"http://localhost/"}=_;return HZ({hasWindow:Q,nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,currentHref:q,navigate:Y})}function xZ(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:q,hasWindow:K=typeof window<"u"}=_;return UZ({hasWindow:K,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:q})}function TZ(_){LZ(_)}async function CZ(_){let{hasWindow:$=typeof window<"u",...j}=_;await WZ({hasWindow:$,...j})}async function PZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await BZ({hasWindow:$,baseHref:j,...Z})}async function yZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await zZ({baseHref:j,...Z})}function SZ(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:Q,hasWindow:q=typeof window<"u",baseHref:K=q?window.location.href:"http://localhost/",runBranchLoaderImpl:N=FZ}=_;if(!$||!q)return;let G=!1;return N({branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:Q,baseHref:K,isCancelled:()=>G}),()=>{G=!0}}async function wZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await AZ({baseHref:j,...Z})}async function RZ(_){let{isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:Q,tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:N,terminalTabPath:G,dockVisible:V,resolveTab:X,closeTab:U,setDockVisible:L,hasWindow:H=typeof window<"u",baseHref:D=H?window.location.href:"http://localhost/"}=_;await EZ({hasWindow:H,isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:Q,baseHref:D,resolveSourceTransfer:(J)=>JZ({panePath:J,tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:N,terminalTabPath:G}),closeSourcePaneIfTransferred:(J)=>{OZ({panePath:J,terminalTabPath:G,dockVisible:V,resolveTab:X,closeTab:U,setDockVisible:L})}})}function uZ(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:Z=nj}=_;return Z({openTab:(Y,Q)=>$(Y,Q?{label:Q}:void 0),popOutPane:(Y,Q)=>{j(Y,Q)}})}async function fZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await kZ({hasWindow:$,baseHref:j,...Z})}function vZ(_){let{hasWindow:$=typeof window<"u",...j}=_;DZ({hasWindow:$,...j})}function n8(_){return _?{..._}:{text:"",totalLines:0}}function bZ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function ZG(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function YG(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function gZ(_){return{agentStatus:_.agentStatus,agentDraft:n8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:n8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:bZ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:ZG(_.silentRecovery)}}function mZ(_){let $=_.snapshot||YG(),{refs:j,setters:Z}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Z.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Z.setAgentStatus($.agentStatus||null),Z.setAgentDraft(n8($.agentDraft)),Z.setAgentPlan($.agentPlan||""),Z.setAgentThought(n8($.agentThought)),Z.setPendingRequest($.pendingRequest||null),Z.setCurrentTurnId($.currentTurnId||null),Z.setSteerQueuedTurnId($.steerQueuedTurnId||null),Z.setFollowupQueueItems(bZ($.followupQueueItems)),Z.setActiveModel($.activeModel||null),Z.setActiveThinkingLevel($.activeThinkingLevel||null),Z.setSupportsThinking(Boolean($.supportsThinking)),Z.setActiveModelUsage($.activeModelUsage??null),Z.setContextUsage($.contextUsage??null),$}var QG=400,a$=60,hZ=220,t$="mdPreviewHeight";function qG(){try{let _=localStorage.getItem(t$),$=_?Number(_):NaN;return Number.isFinite($)&&$>=a$?$:hZ}catch{return hZ}}function d8({getContent:_,path:$,onClose:j}){let[Z,Y]=g(""),[Q,q]=g(qG),K=x(null),N=x(null),G=x(""),V=x(_);return V.current=_,b(()=>{let L=()=>{let D=V.current?.()||"";if(D===G.current)return;G.current=D;try{let J=z_(D,null,{sanitize:!1});Y(J)}catch{Y('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let H=setInterval(L,QG);return()=>clearInterval(H)},[]),b(()=>{if(K.current&&Z)W4(K.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let H=L.clientY,D=N.current?.offsetHeight||Q,J=N.current?.parentElement,W=J?J.offsetHeight*0.7:500,A=L.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=(y)=>{let p=Math.min(Math.max(D-(y.clientY-H),a$),W);q(p)},f=()=>{A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(t$,String(Math.round(N.current?.offsetHeight||Q)))}catch{}document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",f)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",f)}}
            onTouchStart=${(L)=>{L.preventDefault();let H=L.touches[0];if(!H)return;let D=H.clientY,J=N.current?.offsetHeight||Q,W=N.current?.parentElement,A=W?W.offsetHeight*0.7:500,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let f=(p)=>{let l=p.touches[0];if(!l)return;p.preventDefault();let T=Math.min(Math.max(J-(l.clientY-D),a$),A);q(T)},y=()=>{E.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(t$,String(Math.round(N.current?.offsetHeight||Q)))}catch{}document.removeEventListener("touchmove",f),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",y)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",y),document.addEventListener("touchcancel",y)}}
        ></div>
        <div class="md-preview-panel" ref=${N} style=${{height:Q+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${j} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${K}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function pZ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function KG(_){return _==="error"?"Could not open branch window":"Opening branch…"}function cZ(_){return B`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${KG(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function lZ(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Z,panePopoutHasMenuActions:Y,panePopoutTitle:Q,tabStripTabs:q,tabStripActiveId:K,handleTabActivate:N,previewTabs:G,handleTabTogglePreview:V,editorContainerRef:X,getPaneContent:U,panePopoutPath:L}=_;return B`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${j&&!Z&&B`
          <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
            ${Y?B`
                <details class="pane-popout-controls-menu">
                  <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                    <span class="pane-popout-controls-title">${Q}</span>
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="4.5 6.5 8 10 11.5 6.5" />
                    </svg>
                  </summary>
                  <div class="pane-popout-controls-panel">
                    ${q.length>1&&B`
                      <div class="pane-popout-controls-section">
                        <div class="pane-popout-controls-section-title">Open panes</div>
                        <div class="pane-popout-controls-list">
                          ${q.map((H)=>B`
                            <button
                              type="button"
                              class=${`pane-popout-controls-item${H.id===K?" active":""}`}
                              onClick=${(D)=>{N(H.id),D.currentTarget.closest("details")?.removeAttribute("open")}}
                            >
                              ${H.label}
                            </button>
                          `)}
                        </div>
                      </div>
                    `}
                    ${K&&G.has(K)&&B`
                      <button
                        type="button"
                        class="pane-popout-controls-action"
                        onClick=${(H)=>{V(K),H.currentTarget.closest("details")?.removeAttribute("open")}}
                      >
                        Hide preview
                      </button>
                    `}
                  </div>
                </details>
              `:B`
                <div class="pane-popout-controls-label" aria-label=${Q}>${Q}</div>
              `}
          </div>
        `}
        ${j?B`<div class="editor-pane-host" ref=${X}></div>`:B`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${L||"No pane path provided."}</p>
            </div>
          `}
        ${j&&K&&G.has(K)&&B`
          <${d8}
            getContent=${U}
            path=${K}
            onClose=${()=>V(K)}
          />
        `}
      </div>
    </div>
  `}function i8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function NG(_,$){let j=i8(_),Z=i8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function e$(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function _3(_,$,j=Date.now(),Z=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},Q=String($||"").trim().toLowerCase();if(!Q)return{value:"",updatedAt:j};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||j-Y.updatedAt>Z?Q:`${Y.value}${Q}`,updatedAt:j}}function GG(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Y=((Number.isInteger($)?$:0)%j+j)%j,Q=[];for(let q=0;q<j;q+=1)Q.push((Y+q)%j);return Q}function XG(_,$,j=0,Z=(Y)=>Y){let Y=i8($);if(!Y)return-1;let Q=Array.isArray(_)?_:[],q=GG(Q.length,j),K=Q.map((N)=>i8(Z(N)));for(let N of q)if(K[N].startsWith(Y))return N;for(let N of q)if(K[N].includes(Y))return N;return-1}function $3(_,$,j=-1,Z=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(j>=0&&j<Y.length){let Q=Z(Y[j]);if(NG(Q,$))return j}return XG(Y,$,0,Z)}function r8(_){return String(_||"").trim().toLowerCase()}function j3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return r8($[1]||"")}function VG(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Y=r8(Z?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),j.push(Z)}return j}function nZ(_,$,j={}){let Z=j3($);if(Z==null)return[];let Y=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return VG(_).filter((Q)=>{if(Y&&Q?.chat_jid===Y)return!1;return r8(Q?.agent_name).startsWith(Z)})}function Z3(_){let $=r8(_);return $?`@${$} `:""}function dZ(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function m_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Y,removeTitle:Q="Remove",icon:q="file"}){let K=`${_}-file-pill`,N=`${_}-file-name`,G=`${_}-file-remove`,V=q==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${K} title=${j||$} onClick=${Y}>
      ${V}
      <span class=${N}>${$}</span>
      ${Z&&B`
        <button
          class=${G}
          onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),Z()}}
          title=${Q}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var UG=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function LG({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Y=_.contextWindow,Q="Compact context",K=`${Z!=null?`Context: ${iZ(Z)} / ${iZ(Y)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,N=9,G=2*Math.PI*9,V=j/100*G,X=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${K}
            aria-label="Compact context"
            onClick=${(U)=>{U.preventDefault(),U.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${X}
                    stroke-width="2.5"
                    stroke-dasharray=${`${V} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function iZ(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function WG(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G))Y.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),K=j.slice(Q);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y}}function BG(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Y.push(V[1])}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),K=j.slice(Q);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y}}function zG(_){let $=WG(_||""),j=BG($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function Y3({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return B`
        <div class="compose-queue-stack">
            ${_.map((Y)=>{let Q=typeof Y?.content==="string"?Y.content:"",q=zG(Q);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return B`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Q}>
                            ${q.text.trim()&&B`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&B`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((K)=>B`
                                        <${m_}
                                            key=${"queue-msg-"+K}
                                            prefix="compose"
                                            label=${"msg:"+K}
                                            title=${"Message reference: "+K}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((K)=>{let N=K.split("/").pop()||K;return B`
                                            <${m_}
                                                key=${"queue-file-"+K}
                                                prefix="compose"
                                                label=${N}
                                                title=${K}
                                                onClick=${()=>Z?.(K)}
                                            />
                                        `})}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            <button
                                class="compose-queue-stack-steer-btn"
                                type="button"
                                title="Inject queued follow-up as steer"
                                aria-label="Inject queued follow-up as steer"
                                onClick=${()=>$?.(Y)}
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                    <polyline points="14 12 18 8 22 12" />
                                </svg>
                                <span>Steer</span>
                            </button>
                            <button
                                class="compose-queue-stack-close-btn"
                                type="button"
                                title="Cancel queued message"
                                aria-label="Cancel queued message"
                                onClick=${()=>j?.(Y)}
                            >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                `})}
        </div>
    `}function rZ({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Y,onSearchScopeChange:Q,onEnterSearch:q,onExitSearch:K,fileRefs:N=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:X=[],onRemoveMessageRef:U,onClearMessageRefs:L,activeModel:H=null,modelUsage:D=null,thinkingLevel:J=null,supportsThinking:W=!1,contextUsage:A=null,onContextCompact:E,notificationsEnabled:f=!1,notificationPermission:y="default",onToggleNotifications:p,onModelChange:l,onModelStateChange:T,activeEditorPath:k=null,onAttachEditorFile:F,onOpenFilePill:I,followupQueueItems:v=[],onInjectQueuedFollowup:o,onRemoveQueuedFollowup:m,onSubmitIntercept:s,onMessageResponse:r,onPopOutChat:e,isAgentActive:Q0=!1,activeChatAgents:$0=[],currentChatJid:K0="web:default",connectionStatus:W0="connected",onSetFileRefs:L0,onSetMessageRefs:R0,onSubmitError:E0,onSwitchChat:z0,onRenameSession:v0,isRenameSessionInProgress:A0=!1,onCreateSession:u0,onDeleteSession:m0,onRestoreSession:O0,showQueueStack:c0=!0,statusNotice:N0=null}){let[M0,d0]=g(""),[o0,S1]=g(""),[Y1,n0]=g([]),[V1,j1]=g(!1),[s0,U0]=g([]),[f0,t0]=g(0),[a,q0]=g(!1),[h,i]=g([]),[F0,k0]=g(0),[I0,H0]=g(!1),[C0,b0]=g(!1),[B0,S0]=g(!1),[J0,j0]=g(!1),[P,t]=g([]),[V0,D0]=g(0),[l0,e0]=g(0),[Q1,O1]=g(!1),[m1,S_]=g(0),[a1,u1]=g(null),[l1,h1]=g(()=>Date.now()),a0=x(null),n1=x(null),a_=x(null),t1=x(null),t_=x(null),h_=x(null),D1=x(null),d1=x(null),A1=x({value:"",updatedAt:0}),U1=x(0),L1=x(!1),X_=200,V_=(z)=>{let w=new Set,n=[];for(let c of z||[]){if(typeof c!=="string")continue;let x0=c.trim();if(!x0||w.has(x0))continue;w.add(x0),n.push(x0)}return n},k1=()=>{let z=B_("piclaw_compose_history");if(!z)return[];try{let w=JSON.parse(z);if(!Array.isArray(w))return[];return V_(w)}catch{return[]}},i1=(z)=>{$1("piclaw_compose_history",JSON.stringify(z))},Z1=x(k1()),M1=x(-1),e1=x(""),f1=M0.trim()||Y1.length>0||N.length>0||X.length>0,e_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),H_=typeof window<"u"&&typeof Notification<"u",_4=typeof window<"u"?Boolean(window.isSecureContext):!1,B4=H_&&_4&&y!=="denied",O_=y==="granted"&&f,w_=y4(N0),u4=R8(N0),f4=typeof N0?.detail==="string"&&N0.detail.trim()?N0.detail.trim():"",_1=w_?u8(N0,l1):null,E1=O_?"Disable notifications":"Enable notifications",z4=Y1.length>0||N.length>0||X.length>0,__=W0==="disconnected"?"Reconnecting":String(W0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(z)=>z.toUpperCase()),D_=W0==="disconnected"?"Reconnecting":`Connection: ${__}`,p1=(Array.isArray($0)?$0:[]).filter((z)=>!z?.archived_at),H1=(()=>{for(let z of Array.isArray($0)?$0:[]){let w=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(w&&w===K0)return z}return null})(),w1=Boolean(H1&&H1.chat_jid===(H1.root_chat_jid||H1.chat_jid)),q1=w0(()=>{let z=new Set,w=[];for(let n of Array.isArray($0)?$0:[]){let c=typeof n?.chat_jid==="string"?n.chat_jid.trim():"";if(!c||c===K0||z.has(c))continue;if(!(typeof n?.agent_name==="string"?n.agent_name.trim():""))continue;z.add(c),w.push(n)}return w},[$0,K0]),$_=q1.length>0,j_=$_&&typeof z0==="function",Z_=$_&&typeof O0==="function",p_=Boolean(A0||L1.current),v1=!j&&typeof v0==="function"&&!p_,R1=!j&&typeof u0==="function",Y_=!j&&typeof m0==="function"&&!w1,R_=!j&&(j_||Z_||v1||R1||Y_),W1=H||"",A_=W&&J?` (${J})`:"",K1=A_.trim()?`${J}`:"",u_=typeof D?.hint_short==="string"?D.hint_short.trim():"",E_=[K1||null,u_||null].filter(Boolean).join(" • "),v4=[W1?`Current model: ${W1}${A_}`:null,D?.plan?`Plan: ${D.plan}`:null,u_||null,D?.primary?.reset_description||null,D?.secondary?.reset_description||null].filter(Boolean),b4=C0?"Switching model…":v4.join(" • ")||`Current model: ${W1}${A_} (tap to open model picker)`,f_=(z)=>{if(!z||typeof z!=="object")return;let w=z.model??z.current;if(typeof T==="function")T({model:w??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking,provider_usage:z.provider_usage??null});if(w&&typeof l==="function")l(w)},c_=(z)=>{let w=z||a0.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},g4=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){q0(!1),U0([]);return}let w=z.toLowerCase().split(" ")[0];if(w.length<1){q0(!1),U0([]);return}let n=UG.filter((c)=>c.name.startsWith(w)||c.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===w))H0(!1),i([]),U0(n),t0(0),q0(!0);else q0(!1),U0([])},$4=(z)=>{let w=M0,n=w.indexOf(" "),c=n>=0?w.slice(n):"",x0=z.name+c;d0(x0),q0(!1),U0([]),requestAnimationFrame(()=>{let B1=a0.current;if(!B1)return;let I1=x0.length;B1.selectionStart=I1,B1.selectionEnd=I1,B1.focus()})},s4=(z)=>{if(j3(z)==null){H0(!1),i([]);return}let w=nZ(p1,z,{currentChatJid:K0});if(w.length>0&&!(w.length===1&&Z3(w[0].agent_name).trim().toLowerCase()===String(z||"").trim().toLowerCase()))q0(!1),U0([]),i(w),k0(0),H0(!0);else H0(!1),i([])},j4=(z)=>{let w=Z3(z?.agent_name);if(!w)return;d0(w),H0(!1),i([]),requestAnimationFrame(()=>{let n=a0.current;if(!n)return;let c=w.length;n.selectionStart=c,n.selectionEnd=c,n.focus()})},l_=()=>{if(j||!j_&&!Z_&&!v1&&!R1&&!Y_)return!1;return A1.current={value:"",updatedAt:0},S0(!1),q0(!1),U0([]),H0(!1),i([]),j0(!0),!0},r1=(z)=>{if(z?.preventDefault?.(),z?.stopPropagation?.(),j||!j_&&!Z_&&!v1&&!R1&&!Y_)return;if(J0){A1.current={value:"",updatedAt:0},j0(!1);return}l_()},F4=(z)=>{let w=typeof z==="string"?z.trim():"";if(j0(!1),!w||w===K0){requestAnimationFrame(()=>a0.current?.focus());return}z0?.(w)},H4=async(z)=>{let w=typeof z==="string"?z.trim():"";if(j0(!1),!w||typeof O0!=="function"){requestAnimationFrame(()=>a0.current?.focus());return}try{await O0(w)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>a0.current?.focus())}},I5=(z)=>{let n=(Array.isArray(z)?z:[]).findIndex((c)=>!c?.disabled);return n>=0?n:0},J1=w0(()=>{let z=[];for(let w of q1){let n=Boolean(w?.archived_at),c=typeof w?.agent_name==="string"?w.agent_name.trim():"",x0=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(!c||!x0)continue;z.push({type:"session",key:`session:${x0}`,label:`@${c} — ${x0}${w?.is_active?" active":""}${n?" archived":""}`,chat:w,disabled:n?!Z_:!j_})}if(R1)z.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(v1)z.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:p_});if(Y_)z.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return z},[q1,Z_,j_,R1,v1,Y_,p_]),J4=async(z)=>{if(z?.preventDefault)z.preventDefault();if(z?.stopPropagation)z.stopPropagation();if(typeof v0!=="function"||A0||L1.current)return;L1.current=!0,j0(!1);try{await v0()}catch(w){console.warn("Failed to rename session:",w)}finally{L1.current=!1}requestAnimationFrame(()=>a0.current?.focus())},a4=async()=>{if(typeof u0!=="function")return;j0(!1);try{await u0()}catch(z){console.warn("Failed to create session:",z)}requestAnimationFrame(()=>a0.current?.focus())},Q_=async()=>{if(typeof m0!=="function")return;j0(!1);try{await m0(K0)}catch(z){console.warn("Failed to delete session:",z)}requestAnimationFrame(()=>a0.current?.focus())},q_=(z)=>{if(j)S1(z);else d0(z),g4(z),s4(z);requestAnimationFrame(()=>c_())},Z4=(z)=>{let w=j?o0:M0,n=w&&!w.endsWith(`
`)?`
`:"",c=`${w}${n}${z}`.trimStart();q_(c)},m4=(z)=>{let w=z?.command?.model_label;if(w)return w;let n=z?.command?.message;if(typeof n==="string"){let c=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(c?.[1])return c[1].trim()}return null},h4=async(z)=>{if(j||C0)return;b0(!0);try{let w=await G5("default",z,null,[],null,K0),n=m4(w);f_({model:n??H??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let c=await S5(K0);if(c)f_(c)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{b0(!1)}},t4=async()=>{await h4("/cycle-model")},Y4=async(z)=>{if(!z||C0)return;if(await h4(`/model ${z}`))S0(!1)},k_=(z)=>{if(!z||z.disabled)return;if(z.type==="session"){let w=z.chat;if(w?.archived_at)H4(w.chat_jid);else F4(w.chat_jid);return}if(z.type==="action"){if(z.action==="new"){a4();return}if(z.action==="rename"){J4();return}if(z.action==="delete")Q_()}},x5=(z)=>{z.preventDefault(),z.stopPropagation(),A1.current={value:"",updatedAt:0},j0(!1),S0((w)=>!w)},O4=async()=>{if(j)return;E?.(),await M_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},p4=(z)=>{if(z==="queue"||z==="steer"||z==="auto")return z;return Q0?"queue":void 0},M_=async(z,w,n={})=>{let{includeMedia:c=!0,includeFileRefs:x0=!0,includeMessageRefs:B1=!0,clearAfterSubmit:I1=!0,recordHistory:T1=!0}=n||{},Q4=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:M0,c4=typeof Q4==="string"?Q4:"";if(!c4.trim()&&(c?Y1.length===0:!0)&&(x0?N.length===0:!0)&&(B1?X.length===0:!0))return;q0(!1),U0([]),H0(!1),i([]),j0(!1),u1(null);let e4=c?[...Y1]:[],_5=x0?[...N]:[],q4=B1?[...X]:[],b1=c4.trim();if(T1&&b1){let D4=Z1.current,z1=V_(D4.filter((n_)=>n_!==b1));if(z1.push(b1),z1.length>200)z1.splice(0,z1.length-200);Z1.current=z1,i1(z1),M1.current=-1,e1.current=""}let $5=()=>{if(c)n0([...e4]);if(x0)L0?.(_5);if(B1)R0?.(q4);d0(b1),requestAnimationFrame(()=>c_())};if(I1)d0(""),n0([]),V?.(),L?.();(async()=>{try{if(await s?.({content:b1,submitMode:w,fileRefs:_5,messageRefs:q4,mediaFiles:e4})){_?.();return}let z1=[];for(let I_ of e4){let E4=await P6(I_);z1.push(E4.id)}let n_=_5.length?`Files:
${_5.map((I_)=>`- ${I_}`).join(`
`)}`:"",j5=q4.length?`Referenced messages:
${q4.map((I_)=>`- message:${I_}`).join(`
`)}`:"",$8=z1.length?`Attachments:
${z1.map((I_,E4)=>{let j6=e4[E4]?.name||`attachment-${E4+1}`;return`- attachment:${I_} (${j6})`}).join(`
`)}`:"",Z5=[b1,n_,j5,$8].filter(Boolean).join(`

`),A4=await G5("default",Z5,null,z1,p4(w),K0);if(r?.(A4),A4?.command){f_({model:A4.command.model_label??H??null,thinking_level:A4.command.thinking_level,supports_thinking:A4.command.supports_thinking});try{let I_=await S5(K0);if(I_)f_(I_)}catch{}}_?.()}catch(D4){if(I1)$5();let z1=D4?.message||"Failed to send message.";u1(z1),E0?.(z1),console.error("Failed to post:",D4)}})()},O=(z)=>{o?.(z)},M=C((z)=>{if(j||!B0&&!J0||z?.isComposing)return!1;let w=()=>{z.preventDefault?.(),z.stopPropagation?.()},n=()=>{A1.current={value:"",updatedAt:0}};if(z.key==="Escape"){if(w(),n(),B0)S0(!1);if(J0)j0(!1);return!0}if(B0){if(z.key==="ArrowDown"){if(w(),n(),P.length>0)D0((c)=>(c+1)%P.length);return!0}if(z.key==="ArrowUp"){if(w(),n(),P.length>0)D0((c)=>(c-1+P.length)%P.length);return!0}if((z.key==="Enter"||z.key==="Tab")&&P.length>0)return w(),n(),Y4(P[Math.max(0,Math.min(V0,P.length-1))]),!0;if(e$(z)&&P.length>0){w();let c=_3(A1.current,z.key);A1.current=c;let x0=$3(P,c.value,V0,(B1)=>B1);if(x0>=0)D0(x0);return!0}}if(J0){if(z.key==="ArrowDown"){if(w(),n(),J1.length>0)e0((c)=>(c+1)%J1.length);return!0}if(z.key==="ArrowUp"){if(w(),n(),J1.length>0)e0((c)=>(c-1+J1.length)%J1.length);return!0}if((z.key==="Enter"||z.key==="Tab")&&J1.length>0)return w(),n(),k_(J1[Math.max(0,Math.min(l0,J1.length-1))]),!0;if(e$(z)&&J1.length>0){w();let c=_3(A1.current,z.key);A1.current=c;let x0=$3(J1,c.value,l0,(B1)=>B1.label);if(x0>=0)e0(x0);return!0}}return!1},[j,B0,J0,P,V0,J1,l0,Y4]),u=(z)=>{if(z.isComposing)return;if(j&&z.key==="Escape"){z.preventDefault(),S1(""),K?.();return}if(M(z))return;let w=a0.current?.value??(j?o0:M0);if(dZ(z,w,{searchMode:j,showSessionSwitcherButton:R_})){z.preventDefault(),l_();return}if(I0&&h.length>0){let n=a0.current?.value??(j?o0:M0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))H0(!1),i([]);else{if(z.key==="ArrowDown"){z.preventDefault(),k0((c)=>(c+1)%h.length);return}if(z.key==="ArrowUp"){z.preventDefault(),k0((c)=>(c-1+h.length)%h.length);return}if(z.key==="Tab"||z.key==="Enter"){z.preventDefault(),j4(h[F0]);return}if(z.key==="Escape"){z.preventDefault(),H0(!1),i([]);return}}}if(a&&s0.length>0){let n=a0.current?.value??(j?o0:M0);if(!String(n||"").startsWith("/"))q0(!1),U0([]);else{if(z.key==="ArrowDown"){z.preventDefault(),t0((c)=>(c+1)%s0.length);return}if(z.key==="ArrowUp"){z.preventDefault(),t0((c)=>(c-1+s0.length)%s0.length);return}if(z.key==="Tab"){z.preventDefault(),$4(s0[f0]);return}if(z.key==="Enter"&&!z.shiftKey){if(!w.includes(" ")){z.preventDefault();let x0=s0[f0];q0(!1),U0([]),M_(x0.name);return}}if(z.key==="Escape"){z.preventDefault(),q0(!1),U0([]);return}}}if(!j&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let n=a0.current;if(!n)return;let c=n.value||"",x0=n.selectionStart===0&&n.selectionEnd===0,B1=n.selectionStart===c.length&&n.selectionEnd===c.length;if(z.key==="ArrowUp"&&x0||z.key==="ArrowDown"&&B1){let I1=Z1.current;if(!I1.length)return;z.preventDefault();let T1=M1.current;if(z.key==="ArrowUp"){if(T1===-1)e1.current=c,T1=I1.length-1;else if(T1>0)T1-=1;M1.current=T1,q_(I1[T1]||"")}else{if(T1===-1)return;if(T1<I1.length-1)T1+=1,M1.current=T1,q_(I1[T1]||"");else M1.current=-1,q_(e1.current||""),e1.current=""}requestAnimationFrame(()=>{let Q4=a0.current;if(!Q4)return;let c4=Q4.value.length;Q4.selectionStart=c4,Q4.selectionEnd=c4});return}}if(z.key==="Enter"&&!z.shiftKey&&(z.ctrlKey||z.metaKey)){if(z.preventDefault(),j){if(w.trim())Y?.(w.trim(),Z)}else M_(w,"steer");return}if(z.key==="Enter"&&!z.shiftKey)if(z.preventDefault(),j){if(w.trim())Y?.(w.trim(),Z)}else M_(w)},S=(z)=>{let w=Array.from(z||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!w.length)return;n0((n)=>[...n,...w]),u1(null)},d=(z)=>{S(z.target.files),z.target.value=""},Y0=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),U1.current+=1,j1(!0)},G0=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),U1.current=Math.max(0,U1.current-1),U1.current===0)j1(!1)},X0=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";j1(!0)},_0=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),U1.current=0,j1(!1),S(z.dataTransfer?.files||[])},P0=(z)=>{if(j)return;let w=z.clipboardData?.items;if(!w||!w.length)return;let n=[];for(let c of w){if(c.kind!=="file")continue;let x0=c.getAsFile?.();if(x0)n.push(x0)}if(n.length>0)z.preventDefault(),S(n)},x1=(z)=>{n0((w)=>w.filter((n,c)=>c!==z))},o1=()=>{u1(null),n0([]),V?.(),L?.()},K_=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:w,longitude:n,accuracy:c}=z.coords,x0=`${w.toFixed(5)}, ${n.toFixed(5)}`,B1=Number.isFinite(c)?` ±${Math.round(c)}m`:"",I1=`https://maps.google.com/?q=${w},${n}`,T1=`Location: ${x0}${B1} ${I1}`;Z4(T1)},(z)=>{let w=z?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};b(()=>{if(!B0)return;A1.current={value:"",updatedAt:0},O1(!0),S5(K0).then((z)=>{let w=Array.isArray(z?.models)?z.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];w.sort((n,c)=>n.localeCompare(c,void 0,{sensitivity:"base"})),t(w),f_(z)}).catch((z)=>{console.warn("Failed to load model list:",z),t([])}).finally(()=>{O1(!1)})},[B0,H]),b(()=>{if(j)S0(!1),j0(!1),q0(!1),U0([]),H0(!1),i([])},[j]),b(()=>{if(J0&&!R_)j0(!1)},[J0,R_]),b(()=>{if(!B0)return;let z=P.findIndex((w)=>w===H);D0(z>=0?z:0)},[B0,P,H]),b(()=>{if(!J0)return;e0(I5(J1)),A1.current={value:"",updatedAt:0}},[J0,K0]),b(()=>{if(!B0)return;let z=(w)=>{let n=t1.current,c=t_.current,x0=w.target;if(n&&n.contains(x0))return;if(c&&c.contains(x0))return;S0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[B0]),b(()=>{if(!J0)return;let z=(w)=>{let n=h_.current,c=D1.current,x0=w.target;if(n&&n.contains(x0))return;if(c&&c.contains(x0))return;j0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[J0]),b(()=>{if(j||!B0&&!J0)return;let z=(w)=>{M(w)};return document.addEventListener("keydown",z,!0),()=>document.removeEventListener("keydown",z,!0)},[j,B0,J0,M]),b(()=>{if(!B0)return;let z=t1.current;z?.focus?.(),z?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[B0,V0,P]),b(()=>{if(!J0)return;let z=h_.current;z?.focus?.(),z?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,l0,J1.length]),b(()=>{let z=()=>{let B1=d1.current?.clientWidth||0;S_((I1)=>I1===B1?I1:B1)};z();let w=d1.current,n=0,c=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,z()})},x0=null;if(w&&typeof ResizeObserver<"u")x0=new ResizeObserver(()=>c()),x0.observe(w);if(typeof window<"u")window.addEventListener("resize",c);return()=>{if(n)cancelAnimationFrame(n);if(x0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",c)}},[j,H,H1?.agent_name,R_,A?.percent]);let T5=(z)=>{let w=z.target.value;if(u1(null),J0)j0(!1);c_(z.target),q_(w)};return b(()=>{requestAnimationFrame(()=>c_())},[M0,o0,j]),b(()=>{if(!w_)return;h1(Date.now());let z=setInterval(()=>h1(Date.now()),1000);return()=>clearInterval(z)},[w_,N0?.started_at,N0?.startedAt]),b(()=>{if(j)return;s4(M0)},[p1,K0,M0,j]),B`
        <div class="compose-box">
            ${c0&&!j&&B`
                <${Y3}
                    items=${v}
                    onInjectQueuedFollowup=${O}
                    onRemoveQueuedFollowup=${m}
                    onOpenFilePill=${I}
                />
            `}
            ${N0&&B`
                <div
                    class=${`compose-inline-status${w_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${f4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${u4}</span>
                        ${_1&&B`<span class="compose-inline-status-elapsed">${_1}</span>`}
                    </div>
                    ${f4&&B`<div class="compose-inline-status-detail">${f4}</div>`}
                </div>
            `}
            ${a1&&B`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${a1}</div>
            `}
            <div
                class=${`compose-input-wrapper${V1?" drag-active":""}`}
                onDragEnter=${Y0}
                onDragOver=${X0}
                onDragLeave=${G0}
                onDrop=${_0}
            >
                <div class="compose-input-main">
                    ${z4&&B`
                        <div class="compose-file-refs">
                            ${X.map((z)=>{return B`
                                    <${m_}
                                        key=${"msg-"+z}
                                        prefix="compose"
                                        label=${"msg:"+z}
                                        title=${"Message reference: "+z}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(z)}
                                    />
                                `})}
                            ${N.map((z)=>{let w=z.split("/").pop()||z;return B`
                                    <${m_}
                                        prefix="compose"
                                        label=${w}
                                        title=${z}
                                        onClick=${()=>I?.(z)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(z)}
                                    />
                                `})}
                            ${Y1.map((z,w)=>{let n=z?.name||`attachment-${w+1}`;return B`
                                    <${m_}
                                        key=${n+w}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>x1(w)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${o1}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof e==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>e?.()}
                            title="Open this chat in a new chat-only window"
                            aria-label="Open this chat in a new chat-only window"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 5h5v5" />
                                <path d="M10 14 19 5" />
                                <path d="M19 14v5h-5" />
                                <path d="M5 10V5h5" opacity="0" />
                                <path d="M5 19h5" />
                                <path d="M5 19v-5" />
                            </svg>
                        </button>
                    `}
                    <textarea
                        ref=${a0}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?o0:M0}
                        onInput=${T5}
                        onKeyDown=${u}
                        onPaste=${P0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${I0&&h.length>0&&B`
                        <div class="slash-autocomplete" ref=${a_}>
                            ${h.map((z,w)=>B`
                                <div
                                    key=${z.chat_jid||z.agent_name}
                                    class=${`slash-item${w===F0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),j4(z)}}
                                    onMouseEnter=${()=>k0(w)}
                                >
                                    <span class="slash-name">@${z.agent_name}</span>
                                    <span class="slash-desc">${z.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${a&&s0.length>0&&B`
                        <div class="slash-autocomplete" ref=${n1}>
                            ${s0.map((z,w)=>B`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${w===f0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),$4(z)}}
                                    onMouseEnter=${()=>t0(w)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${B0&&!j&&B`
                        <div class="compose-model-popup" ref=${t1} tabIndex="-1" onKeyDown=${M}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${Q1&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!Q1&&P.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!Q1&&P.map((z,w)=>B`
                                    <button
                                        key=${z}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${V0===w?" active":""}${H===z?" current-model":""}`}
                                        onClick=${()=>{Y4(z)}}
                                        disabled=${C0}
                                    >
                                        ${z}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{t4()}}
                                    disabled=${C0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${J0&&!j&&B`
                        <div class="compose-model-popup" ref=${h_} tabIndex="-1" onKeyDown=${M}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return $Z(H1,K0)})()}
                                    </div>
                                `}
                                ${!$_&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${$_&&q1.map((z,w)=>{let n=Boolean(z.archived_at),x0=z.chat_jid!==(z.root_chat_jid||z.chat_jid)&&!z.is_active&&!n&&typeof m0==="function",B1=c8(z,{currentChatJid:K0});return B`
                                        <div key=${z.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${n?" archived":""}${l0===w?" active":""}`}
                                                onClick=${()=>{if(n){H4(z.chat_jid);return}F4(z.chat_jid)}}
                                                disabled=${n?!Z_:!j_}
                                                title=${n?`Restore archived ${`@${z.agent_name}`}`:`Switch to ${`@${z.agent_name}`}`}
                                            >
                                                ${B1}
                                            </button>
                                            ${x0&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${z.agent_name}`}
                                                    onClick=${(I1)=>{I1.stopPropagation(),j0(!1),m0(z.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(R1||v1||Y_)&&B`
                                <div class="compose-model-popup-actions">
                                    ${R1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${J1.findIndex((z)=>z.key==="action:new")===l0?" active":""}`}
                                            onClick=${()=>{a4()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${v1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${J1.findIndex((z)=>z.key==="action:rename")===l0?" active":""}`}
                                            onClick=${(z)=>{J4(z)}}
                                            title="Rename the current branch handle"
                                            disabled=${p_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${Y_&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${J1.findIndex((z)=>z.key==="action:delete")===l0?" active":""}`}
                                            onClick=${()=>{Q_()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${d1}>
                    ${!j&&H&&B`
                    <div class="compose-meta-row">
                        ${!j&&H&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${t_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${b4}
                                    aria-label="Open model picker"
                                    onClick=${x5}
                                    disabled=${C0}
                                >
                                    ${C0?"Switching…":W1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!C0&&E_&&B`
                                        <span class="compose-model-usage-hint" title=${b4}>
                                            ${E_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&A&&A.percent!=null&&B`
                            <${LG} usage=${A} onCompact=${O4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${R_&&B`
                        ${H1?.agent_name&&B`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${H1.chat_jid||K0}
                                aria-label=${`Manage sessions for @${H1.agent_name}`}
                                onClick=${r1}
                            >@${H1.agent_name}</button>
                        `}
                        <button
                            ref=${D1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${J0?" active":""}`}
                            onClick=${r1}
                            title=${J0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${J0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(z)=>Q?.(z.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?K:q}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${e_&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${K_}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${B4&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${O_?" active":""}`}
                            onClick=${p}
                            title=${E1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${k&&F&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${F}
                                title=${`Attach open file: ${k}`}
                                type="button"
                                disabled=${N.includes(k)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${d} />
                        </label>
                    `}
                    ${(W0!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${W0!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${W0}" title=${D_}>
                                    ${__}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{M_()}}
                                    disabled=${!f1}
                                    title="Send (Enter)"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}function oZ({session:_,onClose:$,onInject:j,onRetry:Z}){let Y=x(null),Q=x(null),q=_?.thinking?i5(_.thinking):"",K=_?.answer?z_(_.answer,null,{sanitize:!1}):"";if(b(()=>{if(Y.current&&q)W4(Y.current).catch(()=>{})},[q]),b(()=>{if(Q.current&&K)W4(Q.current).catch(()=>{})},[K]),!_)return null;let N=_.status==="running",G=Boolean(String(_.answer||"").trim()),V=Boolean(String(_.thinking||"").trim()),X=$j(_),U=jj(_),L=!N&&G,H=N?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${H}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&B`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&B`<div class="btw-block btw-error">${_.error}</div>`}
            ${V&&B`
                <details class="btw-block btw-thinking" open=${N?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${X&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Q}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </div>
            `}

            ${U&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!L}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function sZ({widget:_,onClose:$,onWidgetEvent:j}){let Z=x(null),Y=x(!1),Q=w0(()=>Hj(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(b(()=>{if(!_)return;let W=(A)=>{if(A.key==="Escape")$?.()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[_,$]),b(()=>{Y.current=!1},[Q]),b(()=>{if(!_)return;let W=Z.current;if(!W)return;let A=(l)=>{let T=g8(_),k=l==="widget.init"?v8(_):b8(_);try{W.name=T}catch{}try{W.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:l,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:k},"*")}catch{}},E=()=>{A("widget.init"),A("widget.update")},f=()=>{Y.current=!0,E()};W.addEventListener("load",f);let p=[0,40,120,300,800].map((l)=>setTimeout(E,l));return()=>{W.removeEventListener("load",f),p.forEach((l)=>clearTimeout(l))}},[Q,_?.widgetId,_?.toolCallId,_?.turnId]),b(()=>{if(!_)return;let W=Z.current;if(!W?.contentWindow)return;let A=g8(_),E=b8(_);try{W.name=A}catch{}try{W.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:E},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),b(()=>{if(!_)return;let W=(A)=>{let E=A?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let f=Z.current,y=F_(_),p=F_({widgetId:E.widgetId,toolCallId:E.toolCallId});if(p&&y&&p!==y)return;if(!p&&f?.contentWindow&&A.source!==f.contentWindow)return;j?.(E,_)};return window.addEventListener("message",W),()=>window.removeEventListener("message",W)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",N=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",V=_?.source==="live"?"live":"timeline",X=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=V==="live"?`Live widget • ${X.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",H=!Q,D=Fj(_),J=Wj(_);return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${N}
                onClick=${(W)=>W.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${N}</div>
                        ${(G||L)&&B`
                            <div class="floating-widget-subtitle">${G||L}</div>
                        `}
                    </div>
                    <button
                        class="floating-widget-close"
                        type="button"
                        onClick=${()=>$?.()}
                        title="Close widget"
                        aria-label="Close widget"
                    >
                        Close
                    </button>
                </div>
                <div class="floating-widget-body">
                    ${H?B`<div class="floating-widget-empty">${D}</div>`:B`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${N}
                                name=${g8(_)}
                                sandbox=${J}
                                referrerpolicy="no-referrer"
                                srcdoc=${Q}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var aZ="PiClaw";function Q3(_,$,j=!1){let Z=_||"PiClaw",Y=Z.charAt(0).toUpperCase(),Q=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Y.charCodeAt(0)%Q.length,K=Q[q],N=Z.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",V=G?G:null,X=j||N==="PiClaw".toLowerCase()||N==="pi";return{letter:Y,color:K,image:V||(X?"/static/icon-192.png":null)}}function tZ(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function eZ(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function _Y(_){if(!_)return null;if(typeof document<"u"){let Q=document.documentElement,q=Q?.dataset?.colorTheme||"",K=Q?.dataset?.tint||"",N=getComputedStyle(Q).getPropertyValue("--accent-color")?.trim();if(N&&(K||q&&q!=="default"))return N}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Q=0;Q<j.length;Q+=1)Z=(Z*31+j.charCodeAt(Q))%2147483647;let Y=Math.abs(Z)%$.length;return $[Y]}var FG=B`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function q3({status:_,draft:$,plan:j,thought:Z,pendingRequest:Y,intent:Q,extensionPanels:q=[],pendingPanelActions:K=new Set,onExtensionPanelAction:N,turnId:G,steerQueued:V,onPanelToggle:X,showCorePanels:U=!0,showExtensionPanels:L=!0}){let J=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let F0=a,k0=F0?F0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:F0,totalLines:k0,fullText:F0}}let q0=a.text||"",h=a.fullText||a.full_text||q0,i=Number.isFinite(a.totalLines)?a.totalLines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:q0,totalLines:i,fullText:h}},W=160,A=(a)=>String(a||"").replace(/<\/?internal>/gi,""),E=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},f=(a,q0,h)=>{let i=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!i)return{text:"",omitted:0,totalLines:Number.isFinite(h)?h:0,visibleLines:0};let F0=i.split(`
`),k0=F0.length>q0?F0.slice(0,q0).join(`
`):i,I0=Number.isFinite(h)?h:F0.reduce((b0,B0)=>b0+E(B0),0),H0=k0?k0.split(`
`).reduce((b0,B0)=>b0+E(B0),0):0,C0=Math.max(I0-H0,0);return{text:k0,omitted:C0,totalLines:I0,visibleLines:H0}},y=J(j),p=J(Z),l=J($),T=Boolean(y.text)||y.totalLines>0,k=Boolean(p.text)||p.totalLines>0,F=Boolean(l.fullText?.trim()||l.text?.trim()),I=Boolean(_||F||T||k||Y||Q),v=Array.isArray(q)&&q.length>0;if((!U||!I)&&(!L||!v))return null;let[o,m]=g(new Set),[s,r]=g(null),[e,Q0]=g(()=>Date.now()),$0=(a)=>m((q0)=>{let h=new Set(q0),i=!h.has(a);if(i)h.add(a);else h.delete(a);if(typeof X==="function")X(a,i);return h});b(()=>{m(new Set),r(null)},[G]);let K0=y4(_);b(()=>{if(!K0)return;Q0(Date.now());let a=setInterval(()=>Q0(Date.now()),1000);return()=>clearInterval(a)},[K0,_?.started_at,_?.startedAt]);let W0=_?.turn_id||G,L0=_Y(W0),R0=V?"turn-dot turn-dot-queued":"turn-dot",E0=(a)=>a,z0=Boolean(_?.last_activity||_?.lastActivity),v0=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":L0,A0=Q?.kind||"info",u0=v0(A0),m0=v0(_?.kind||(K0?"warning":"info")),O0="",c0=_?.title,N0=_?.status;if(_?.type==="plan")O0=c0?`Planning: ${c0}`:"Planning...";else if(_?.type==="tool_call")O0=c0?`Running: ${c0}`:"Running tool...";else if(_?.type==="tool_status")O0=c0?`${c0}: ${N0||"Working..."}`:N0||"Working...";else if(_?.type==="error")O0=c0||"Agent error";else O0=c0||N0||"Working...";if(z0)O0="Last activity just now";let M0=({panelTitle:a,text:q0,fullText:h,totalLines:i,maxLines:F0,titleClass:k0,panelKey:I0})=>{let H0=o.has(I0),C0=h||q0||"",b0=I0==="thought"||I0==="draft"?A(C0):C0,B0=typeof F0==="number",S0=H0&&B0,J0=B0?f(b0,F0,i):{text:b0||"",omitted:0,totalLines:Number.isFinite(i)?i:0};if(!b0&&!(Number.isFinite(J0.totalLines)&&J0.totalLines>0))return null;let j0=`agent-thinking-body${B0?" agent-thinking-body-collapsible":""}`,P=B0?`--agent-thinking-collapsed-lines: ${F0};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${H0?"true":"false"}
                data-collapsible=${B0?"true":"false"}
                style=${L0?`--turn-color: ${L0};`:""}
            >
                <div class="agent-thinking-title ${k0||""}">
                    ${L0&&B`<span class=${R0} aria-hidden="true"></span>`}
                    ${a}
                    ${S0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>$0(I0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${P}
                    dangerouslySetInnerHTML=${{__html:i5(b0)}}
                />
                ${!H0&&J0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>$0(I0)}>
                        ▸ ${J0.omitted} more lines
                    </button>
                `}
                ${H0&&J0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>$0(I0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},d0=Y?.tool_call?.title,o0=d0?`Awaiting approval: ${d0}`:"Awaiting approval",S1=K0?u8(_,e):null,Y1=(a,q0,h=null)=>{let i=R8(a);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${q0?`--turn-color: ${q0};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${q0&&B`<span class=${R0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${i}</span>
                    ${h&&B`<span class="agent-status-elapsed">${h}</span>`}
                </div>
                ${a.detail&&B`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `},n0=(a,q0,h,i,F0,k0,I0,H0=8,C0=8)=>{let b0=Math.max(F0-i,0.000000001),B0=Math.max(q0-H0*2,1),S0=Math.max(h-C0*2,1),J0=Math.max(I0-k0,1),j0=I0===k0?q0/2:H0+(a.run-k0)/J0*B0,P=C0+(S0-(a.value-i)/b0*S0);return{x:j0,y:P}},V1=(a,q0,h,i,F0,k0,I0,H0=8,C0=8)=>{if(!Array.isArray(a)||a.length===0)return"";return a.map((b0,B0)=>{let{x:S0,y:J0}=n0(b0,q0,h,i,F0,k0,I0,H0,C0);return`${B0===0?"M":"L"} ${S0.toFixed(2)} ${J0.toFixed(2)}`}).join(" ")},j1=(a,q0="")=>{if(!Number.isFinite(a))return"—";return`${Math.abs(a)>=100?a.toFixed(0):a.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${q0}`},s0=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],U0=(a,q0)=>{let h=s0;if(!Array.isArray(h)||h.length===0)return"var(--accent-color)";if(h.length===1||!Number.isFinite(q0)||q0<=1)return h[0];let F0=Math.max(0,Math.min(Number.isFinite(a)?a:0,q0-1))/Math.max(1,q0-1)*(h.length-1),k0=Math.floor(F0),I0=Math.min(h.length-1,k0+1),H0=F0-k0,C0=h[k0],b0=h[I0];if(!b0||k0===I0||H0<=0.001)return C0;if(H0>=0.999)return b0;let B0=Math.round((1-H0)*1000)/10,S0=Math.round(H0*1000)/10;return`color-mix(in oklab, ${C0} ${B0}%, ${b0} ${S0}%)`},f0=(a,q0="autoresearch")=>{let h=Array.isArray(a)?a.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((P)=>Number.isFinite(P?.value)&&Number.isFinite(P?.run)):[]})).filter((j0)=>j0.points.length>0):[],i=h.map((j0,P)=>({...j0,color:U0(P,h.length)}));if(i.length===0)return null;let F0=320,k0=120,I0=i.flatMap((j0)=>j0.points),H0=I0.map((j0)=>j0.value),C0=I0.map((j0)=>j0.run),b0=Math.min(...H0),B0=Math.max(...H0),S0=Math.min(...C0),J0=Math.max(...C0);return B`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${i.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${F0} ${k0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${i.map((j0)=>{let P=j0?.key||j0?.label||"series",t=s?.panelKey===q0&&s?.seriesKey===P;return B`
                                <g key=${P}>
                                    <path
                                        class=${`agent-series-chart-line${t?" is-hovered":""}`}
                                        d=${V1(j0.points,F0,k0,b0,B0,S0,J0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>r({panelKey:q0,seriesKey:P})}
                                        onMouseLeave=${()=>r((V0)=>V0?.panelKey===q0&&V0?.seriesKey===P?null:V0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${i.flatMap((j0)=>{let P=typeof j0?.unit==="string"?j0.unit:"",t=j0?.key||j0?.label||"series";return j0.points.map((V0,D0)=>{let l0=n0(V0,F0,k0,b0,B0,S0,J0);return B`
                                    <button
                                        key=${`${t}-point-${D0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${l0.x/F0*100}%; top:${l0.y/k0*100}%;`}
                                        onMouseEnter=${()=>r({panelKey:q0,seriesKey:t,run:V0.run,value:V0.value,unit:P})}
                                        onMouseLeave=${()=>r((e0)=>e0?.panelKey===q0?null:e0)}
                                        onFocus=${()=>r({panelKey:q0,seriesKey:t,run:V0.run,value:V0.value,unit:P})}
                                        onBlur=${()=>r((e0)=>e0?.panelKey===q0?null:e0)}
                                        aria-label=${`${j0?.label||"Series"} ${j1(V0.value,P)} at run ${V0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${i.map((j0)=>{let P=j0.points[j0.points.length-1]?.value,t=typeof j0?.unit==="string"?j0.unit:"",V0=j0?.key||j0?.label||"series",D0=s?.panelKey===q0&&s?.seriesKey===V0?s:null,l0=D0&&Number.isFinite(D0.value)?D0.value:P,e0=D0&&typeof D0.unit==="string"?D0.unit:t,Q1=D0&&Number.isFinite(D0.run)?D0.run:null;return B`
                            <div key=${`${V0}-legend`} class=${`agent-series-legend-item${D0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${Q1!==null&&B`<span class="agent-series-legend-run">run ${Q1}</span>`}
                                <span class="agent-series-legend-value">${j1(l0,e0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},t0=(a)=>{if(!a)return null;let q0=typeof a?.key==="string"?a.key:`panel-${Math.random()}`,h=o.has(q0),i=a?.title||"Extension status",F0=a?.collapsed_text||"",k0=String(a?.state||"").replace(/[-_]+/g," ").replace(/^./,(t)=>t.toUpperCase()),I0=v0(a?.state==="completed"?"success":a?.state==="failed"?"error":a?.state==="stopped"?"warning":"info"),H0=typeof a?.detail_markdown==="string"?a.detail_markdown.trim():"",C0=typeof a?.last_run_text==="string"?a.last_run_text.trim():"",b0=typeof a?.tmux_command==="string"?a.tmux_command.trim():"",B0=Array.isArray(a?.series)?a.series:[],S0=Array.isArray(a?.actions)?a.actions:[],J0=Boolean(H0||b0),j0=Boolean(H0||B0.length>0||b0),P=[i,F0].filter(Boolean).join(" — ");return B`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${h?"true":"false"}
                style=${I0?`--turn-color: ${I0};`:""}
                title=${!h?P||i:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?$0(q0):null}
                    >
                        ${I0&&B`<span class=${R0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${i}</span>
                        ${F0&&B`<span class="agent-thinking-title-meta">${F0}</span>`}
                    </button>
                    ${(S0.length>0||j0&&!h)&&B`
                        <div class="agent-thinking-tools-inline">
                            ${S0.length>0&&B`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${S0.map((t)=>{let V0=`${q0}:${t?.key||""}`,D0=K?.has?.(V0);return B`
                                            <button
                                                key=${V0}
                                                class=${`agent-thinking-action-btn${t?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>N?.(a,t)}
                                                disabled=${Boolean(D0)}
                                            >
                                                ${D0?"Working…":t?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!h&&B`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${i}`}
                                    title="Expand details"
                                    onClick=${()=>$0(q0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${j0&&h&&B`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${i}`}
                        title="Collapse details"
                        onClick=${()=>$0(q0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${h&&B`
                    <div class=${`agent-thinking-autoresearch-layout${J0?"":" chart-only"}`}>
                        ${J0&&B`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${H0&&B`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:i5(H0)}}
                                    />
                                `}
                                ${b0&&B`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${b0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>N?.(a,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${FG}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${B0.length>0?B`
                                <div class="agent-series-chart-stack">
                                    ${f0(B0,q0)}
                                    ${C0&&B`<div class="agent-series-chart-note">${C0}</div>`}
                                </div>
                            `:B`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${U&&Q&&Y1(Q,u0)}
            ${L&&Array.isArray(q)&&q.map((a)=>t0(a))}
            ${U&&_?.type==="intent"&&Y1(_,m0,S1)}
            ${U&&Y&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${L0?`--turn-color: ${L0};`:""}>
                    <span class=${R0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${o0}</span>
                </div>
            `}
            ${U&&T&&M0({panelTitle:E0("Planning"),text:y.text,fullText:y.fullText,totalLines:y.totalLines,panelKey:"plan"})}
            ${U&&k&&M0({panelTitle:E0("Thoughts"),text:p.text,fullText:p.fullText,totalLines:p.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&F&&M0({panelTitle:E0("Draft"),text:l.text,fullText:l.fullText,totalLines:l.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${z0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${L0?`--turn-color: ${L0};`:""}>
                    ${L0&&B`<span class=${R0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!z0&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${O0}</span>
                </div>
            `}
        </div>
    `}function $Y({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Y,chat_jid:Q}=_,q=Z?.title||"Agent Request",K=Z?.kind||"other",N=Z?.rawInput||{},G=N.command||N.commands&&N.commands[0]||null,V=N.diff||null,X=N.fileName||N.path||null,U=Z?.description||N.description||N.explanation||null,H=(Array.isArray(Z?.locations)?Z.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),D=Array.from(new Set([X,...H].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Y});let J=async(E)=>{try{await B8(j,E,Q||null),$()}catch(f){console.error("Failed to respond to agent request:",f)}},W=async()=>{try{await S6(q,`Auto-approved: ${q}`),await B8(j,"approved",Q||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},A=Y&&Y.length>0;return B`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${q}</div>
                </div>
                ${(U||G||V||D.length>0)&&B`
                    <div class="agent-request-body">
                        ${U&&B`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${D.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${D.map((E,f)=>B`<li key=${f}>${E}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&B`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${V&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${V}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${A?Y.map((E)=>B`
                            <button 
                                key=${E.optionId||E.id||String(E)}
                                class="agent-request-btn ${E.kind==="allow_once"||E.kind==="allow_always"?"primary":""}"
                                onClick=${()=>J(E.optionId||E.id||E)}
                            >
                                ${E.name||E.label||E.optionId||E.id||String(E)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>J("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>J("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${W}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}var HG=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),JG=new Set(["text/markdown"]),OG=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),DG=new Set(["application/vnd.jgraph.mxfile"]);function t5(_){return typeof _==="string"?_.trim().toLowerCase():""}function AG(_){let $=t5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function EG(_){let $=t5(_);return!!$&&$.endsWith(".pdf")}function kG(_){let $=t5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function e5(_,$){let j=t5(_);if(AG($)||DG.has(j))return"drawio";if(EG($)||j==="application/pdf")return"pdf";if(kG($)||OG.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(HG.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function jY(_){let $=t5(_);return JG.has($)}function ZY(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function MG(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Y)=>`${Y}${Y}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function IG(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Y=Number(j[2]),Q=Number(j[3]);if(![Z,Y,Q].every((q)=>Number.isFinite(q)))return null;return{r:Z,g:Y,b:Q}}function YY(_){return MG(_)||IG(_)}function o8(_){let $=(Q)=>{let q=Q/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Y=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Y}function xG(_,$){let j=Math.max(o8(_),o8($)),Z=Math.min(o8(_),o8($));return(j+0.05)/(Z+0.05)}function TG(_,$,j="#ffffff"){let Z=YY(_);if(!Z)return j;let Y=j,Q=-1;for(let q of $){let K=YY(q);if(!K)continue;let N=xG(Z,K);if(N>Q)Y=q,Q=N}return Y}function K3(){let _=getComputedStyle(document.documentElement),$=(H,D)=>{for(let J of H){let W=_.getPropertyValue(J).trim();if(W)return W}return D},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Q=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),N=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),V=$(["--danger-color","--color-error"],"#f4212e"),X=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),L=TG(K,[j,Y],j);return{fg:j,fgMuted:Z,bgPrimary:Y,bg:Q,bgEmphasis:q,accent:K,good:N,warning:G,attention:V,border:X,fontFamily:U,buttonTextColor:L}}function QY(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Y,good:Q,warning:q,attention:K,border:N,fontFamily:G}=K3();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:N},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var CG=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),qY=!1,s8=null,KY=!1;function N3(_){_.querySelector(".adaptive-card-notice")?.remove()}function PG(_,$,j="error"){N3(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function yG(_,$=(j)=>z_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function SG(_=($)=>z_($,null)){return($,j)=>{try{let Z=yG($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function wG(_){if(KY||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=SG(),KY=!0}async function RG(){if(qY)return;if(s8)return s8;return s8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{qY=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),s8}function uG(){return globalThis.AdaptiveCards}function fG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function vG(_){return CG.has(_)}function X3(_){if(!Array.isArray(_))return[];return _.filter(fG)}function bG(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:j,data:Y,url:Z,raw:_}}function G3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>G3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${G3(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function gG(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return G3($);return typeof $==="string"?$:String($)}function mG(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Y)=>{if(Array.isArray(Y))return Y.map((K)=>Z(K));if(!Y||typeof Y!=="object")return Y;let q={...Y};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=gG(q.type,j[q.id],q);for(let[K,N]of Object.entries(q))if(Array.isArray(N)||N&&typeof N==="object")q[K]=Z(N);return q};return Z(_)}function hG(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function pG(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function cG(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Y=pG(_.completed_at||j?.submitted_at),Q=[Z||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Q}}async function NY(_,$,j){if(!vG($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await RG()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=uG();wG(Z);let Y=new Z.AdaptiveCard,Q=K3();Y.hostConfig=new Z.HostConfig(QY());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:mG($.payload,q);Y.parse(K),Y.onExecuteAction=(V)=>{let X=bG(V);if(j?.onAction)N3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(X)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let L=U instanceof Error?U.message:String(U||"Action failed.");PG(_,L||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",X)};let N=Y.render();if(!N)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Q.buttonTextColor);let G=cG($);if(G){_.classList.add("adaptive-card-finished");let V=document.createElement("div");V.className=`adaptive-card-status adaptive-card-status-${$.state}`;let X=document.createElement("span");if(X.className="adaptive-card-status-label",X.textContent=G.label,V.appendChild(X),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,V.appendChild(U)}_.appendChild(V)}if(N3(_),_.appendChild(N),G)hG(N);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function _8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>_8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${_8(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function GY(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:_8(j)})).filter(($)=>$.value)}function lG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function V3(_){if(!Array.isArray(_))return[];return _.filter(lG)}function XY(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=_8(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Y=GY(j).map(({key:Q,value:q})=>`${Q}: ${q}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function VY(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=GY(_.data),Z=j.length>0?j.slice(0,2).map(({key:Q,value:q})=>`${Q}: ${q}`).join(", "):_8(_.data)||null,Y=j.length;return{title:$,summary:Z,fields:j,fieldCount:Y,submittedAt:_.submitted_at}}function E5({children:_,className:$=""}){let j=x(null);return b(()=>{if(typeof document>"u")return;let Z=document.createElement("div");if($)Z.className=$;return document.body.appendChild(Z),j.current=Z,()=>{try{x4(null,Z)}finally{if(Z.remove(),j.current===Z)j.current=null}}},[$]),P5(()=>{let Z=j.current;if(!Z)return;return x4(_,Z),()=>{x4(null,Z)}},[_]),null}function nG(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?y_($):null},{label:"Added",value:_?.created_at?r4(_.created_at):null}].filter((Z)=>Z.value)}function dG(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Y}&name=${Z}#media=${Y}&name=${Z}`;if(j==="office"){let Q=P_(_);return`/office-viewer/?url=${encodeURIComponent(Q)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Y}&name=${Z}&readonly=1#media=${Y}&name=${Z}&readonly=1`;return null}function UY({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Y=w0(()=>e5($?.content_type,Z),[$?.content_type,Z]),Q=ZY(Y),q=w0(()=>jY($?.content_type),[$?.content_type]),[K,N]=g(Y==="text"),[G,V]=g(""),[X,U]=g(null),L=x(null),H=w0(()=>nG($),[$]),D=w0(()=>dG(_,Z,Y),[_,Z,Y]),J=w0(()=>{if(!q||!G)return"";return z_(G)},[q,G]);return b(()=>{let W=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[j]),b(()=>{if(!L.current||!J)return;W4(L.current);return},[J]),b(()=>{let W=!1;async function A(){if(Y!=="text"){N(!1),U(null);return}N(!0),U(null);try{let E=await f6(_);if(!W)V(E)}catch{if(!W)U("Failed to load text preview.")}finally{if(!W)N(!1)}}return A(),()=>{W=!0}},[_,Y]),B`
        <${E5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(W)=>{W.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Z}</div>
                            <div class="attachment-preview-subtitle">${Q}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${D&&B`
                                <a
                                    href=${D}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(W)=>W.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${P_(_)}
                                download=${Z}
                                class="attachment-preview-download"
                                onClick=${(W)=>W.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${K&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&X&&B`<div class="attachment-preview-state">${X}</div>`}
                        ${!K&&!X&&Y==="image"&&B`
                            <img class="attachment-preview-image" src=${P_(_)} alt=${Z} />
                        `}
                        ${!K&&!X&&(Y==="pdf"||Y==="office"||Y==="drawio")&&D&&B`
                            <iframe class="attachment-preview-frame" src=${D} title=${Z}></iframe>
                        `}
                        ${!K&&!X&&Y==="drawio"&&B`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!K&&!X&&Y==="text"&&q&&B`
                            <div
                                ref=${L}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:J}}
                            />
                        `}
                        ${!K&&!X&&Y==="text"&&!q&&B`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!K&&!X&&Y==="unsupported"&&B`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${H.map((W)=>B`
                            <div class="attachment-preview-meta-item" key=${W.label}>
                                <span class="attachment-preview-meta-label">${W.label}</span>
                                <span class="attachment-preview-meta-value">${W.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${E5}>
    `}function LY({src:_,onClose:$}){return b(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <${E5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${E5}>
    `}function iG({mediaId:_,onPreview:$}){let[j,Z]=g(null);if(b(()=>{X5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Y=j.filename||"file",Q=j.metadata?.size,q=Q?y_(Q):"",N=e5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${P_(_)} download=${Y} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Y}</span>
                    <span class="file-meta-row">
                        ${q&&B`<span class="file-size">${q}</span>`}
                        ${j.content_type&&B`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            <button
                class="file-attachment-preview"
                type="button"
                onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${N}
            </button>
        </div>
    `}function rG({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Y]=g(null);b(()=>{if(!Number.isFinite(j))return;X5(j).then(Y).catch(()=>{});return},[j]);let Q=Z?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?P_(j):null,N=e5(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${Q}>
            ${q?B`
                    <a href=${q} download=${Q} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${m_}
                            prefix="post"
                            label=${_.label}
                            title=${Q}
                        />
                    </a>
                `:B`
                    <${m_}
                        prefix="post"
                        label=${_.label}
                        title=${Q}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${N}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function a8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Y=Z?r4(Z):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Y&&B`
                <span class="content-annotation">Updated: ${Y}</span>
            `}
        </div>
    `}function oG({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?y_(_.size):"",Y=_.mime_type||"",Q=tG(Y),q=i4(_.uri);return B`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Q}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Y&&B`<span>${Y}</span>`}
                    ${Z&&B`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function sG({block:_}){let[$,j]=g(!1),Z=_.uri||"Embedded resource",Y=_.text||"",Q=Boolean(_.data),q=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${Y&&B`<pre class="resource-embed-content">${Y}</pre>`}
                ${Q&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&B`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(K)=>{K.preventDefault(),K.stopPropagation();let N=new Blob([Uint8Array.from(atob(_.data),(X)=>X.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(N),V=document.createElement("a");V.href=G,V.download=Z.split("/").pop()||"resource",V.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function aG({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=l$(_,$),Y=Uj(_),Q=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Z?.title||_.title||_.name||"Generated widget",K=Z?.description||_.description||_.subtitle||"",N=_.open_label||"Open widget",G=(V)=>{if(V.preventDefault(),V.stopPropagation(),!Z)return;j?.(Z)};return B`
        <div class="generated-widget-launch" onClick=${(V)=>V.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Q?` • ${String(Q).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${K&&B`<div class="generated-widget-launch-description">${K}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Y}
                    onClick=${G}
                    title=${Y?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${N}
                </button>
                <span class="generated-widget-launch-note">
                    ${Y?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function tG(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function eG({preview:_}){let $=i4(_.url),j=i4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Y=_.site_name;if(!Y&&$)try{Y=new URL($).hostname}catch{Y=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Q)=>Q.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Y||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function _X(_,$){return typeof _==="string"?_:""}var $X=1800,jX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,ZX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,YX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function QX(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function qX(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Q)=>Q.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Y=(Q,q)=>{let K=q||"idle";if(Q.dataset.copyState=K,K==="success")Q.innerHTML=ZX,Q.setAttribute("aria-label","Copied"),Q.setAttribute("title","Copied"),Q.classList.add("is-success"),Q.classList.remove("is-error");else if(K==="error")Q.innerHTML=YX,Q.setAttribute("aria-label","Copy failed"),Q.setAttribute("title","Copy failed"),Q.classList.add("is-error"),Q.classList.remove("is-success");else Q.innerHTML=jX,Q.setAttribute("aria-label","Copy code"),Q.setAttribute("title","Copy code"),Q.classList.remove("is-success","is-error")};return $.forEach((Q)=>{let q=document.createElement("div");q.className="post-code-block",Q.parentNode?.insertBefore(q,Q),q.appendChild(Q);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",Y(K,"idle"),q.appendChild(K);let N=async(G)=>{G.preventDefault(),G.stopPropagation();let X=Q.querySelector("code")?.textContent||"",U=await QX(X);Y(K,U?"success":"error");let L=j.get(K);if(L)clearTimeout(L);let H=setTimeout(()=>{Y(K,"idle"),j.delete(K)},$X);j.set(K,H)};K.addEventListener("click",N),Z.push(()=>{K.removeEventListener("click",N);let G=j.get(K);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Q,q),q.remove()})}),()=>{Z.forEach((Q)=>Q())}}function KX(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G))Y.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),K=j.slice(Q),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,fileRefs:Y}}function NX(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Y.push(X[1])}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),K=j.slice(Q),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,messageRefs:Y}}function GX(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1){let V=j[G].trim();if((V==="Images:"||V==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}}if(Z===-1)return{content:_,attachments:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim(),X=V.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||V.match(/^attachment:([^\s]+)\s+(.+)$/i);if(X){let U=X[1],L=(X[2]||"").trim()||U;Y.push({id:U,label:L,raw:V})}else Y.push({id:null,label:V,raw:V})}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let q=j.slice(0,Z),K=j.slice(Q),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,attachments:Y}}function XX(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function VX(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(XX).sort((V,X)=>X.length-V.length),Y=new RegExp(`(${Z.join("|")})`,"gi"),Q=new RegExp(`^(${Z.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),K=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),N=[],G;while(G=K.nextNode())N.push(G);for(let V of N){let X=V.nodeValue;if(!X||!Y.test(X)){Y.lastIndex=0;continue}Y.lastIndex=0;let U=V.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let L=X.split(Y).filter((D)=>D!=="");if(L.length===0)continue;let H=q.createDocumentFragment();for(let D of L)if(Q.test(D)){let J=q.createElement("mark");J.className="search-highlight-term",J.textContent=D,H.appendChild(J)}else H.appendChild(q.createTextNode(D));V.parentNode.replaceChild(H,V)}return q.body.innerHTML}function WY({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Y,agentName:Q,agentAvatarUrl:q,userName:K,userAvatarUrl:N,userAvatarBackground:G,onDelete:V,isThreadReply:X,isThreadPrev:U,isThreadNext:L,isRemoving:H,highlightQuery:D,onFileRef:J,onOpenWidget:W}){let[A,E]=g(null),f=x(null),y=_.data,p=y.type==="agent_response",l=K||"You",T=p?Q||aZ:l,k=p?Q3(Q,q,!0):Q3(l,N),F=typeof G==="string"?G.trim().toLowerCase():"",I=!p&&k.image&&(F==="clear"||F==="transparent"),v=p&&Boolean(k.image),o=`background-color: ${I||v?"transparent":k.color}`,m=y.content_meta,s=Boolean(m?.truncated),r=Boolean(m?.preview),e=s&&!r,Q0=s?{originalLength:Number.isFinite(m?.original_length)?m.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(m?.max_length)?m.max_length:0}:null,$0=y.content_blocks||[],K0=y.media_ids||[],W0=_X(y.content,y.link_previews),{content:L0,fileRefs:R0}=KX(W0),{content:E0,messageRefs:z0}=NX(L0),{content:v0,attachments:A0}=GX(E0);W0=v0;let u0=X3($0),m0=V3($0),O0=u0.length===1&&typeof u0[0]?.fallback_text==="string"?u0[0].fallback_text.trim():"",c0=m0.length===1?XY(m0[0]).trim():"",N0=Boolean(O0)&&W0?.trim()===O0||Boolean(c0)&&W0?.trim()===c0,M0=Boolean(W0)&&!e&&!N0,d0=typeof D==="string"?D.trim():"",o0=w0(()=>{if(!W0||N0)return"";let P=z_(W0,j);return d0?VX(P,d0):P},[W0,N0,d0]),S1=(P,t)=>{P.stopPropagation(),E(P_(t))},[Y1,n0]=g(null),V1=(P)=>{n0(P)},j1=(P)=>{P.stopPropagation(),V?.(_)},s0=(P,t)=>{let V0=new Set;if(!P||t.length===0)return{content:P,usedIds:V0};return{content:P.replace(/attachment:([^\s)"']+)/g,(l0,e0,Q1,O1)=>{let m1=e0.replace(/^\/+/,""),a1=t.find((l1)=>l1.name&&l1.name.toLowerCase()===m1.toLowerCase()&&!V0.has(l1.id))||t.find((l1)=>!V0.has(l1.id));if(!a1)return l0;if(V0.add(a1.id),O1.slice(Math.max(0,Q1-2),Q1)==="](")return`/media/${a1.id}`;return a1.name||"attachment"}),usedIds:V0}},U0=[],f0=[],t0=[],a=[],q0=[],h=[],i=[],F0=0;if($0.length>0)$0.forEach((P)=>{if(P?.type==="text"&&P.annotations)i.push(P.annotations);if(P?.type==="generated_widget")h.push(P);else if(P?.type==="resource_link")a.push(P);else if(P?.type==="resource")q0.push(P);else if(P?.type==="file"){let t=K0[F0++];if(t)f0.push(t),t0.push({id:t,name:P?.name||P?.filename||P?.title})}else if(P?.type==="image"||!P?.type){let t=K0[F0++];if(t){let V0=typeof P?.mime_type==="string"?P.mime_type:void 0;U0.push({id:t,annotations:P?.annotations,mimeType:V0}),t0.push({id:t,name:P?.name||P?.filename||P?.title})}}});else if(K0.length>0){let P=A0.length>0;K0.forEach((t,V0)=>{let D0=A0[V0]||null;if(t0.push({id:t,name:D0?.label||null}),P)f0.push(t);else U0.push({id:t,annotations:null})})}if(A0.length>0)A0.forEach((P)=>{if(!P?.id)return;let t=t0.find((V0)=>String(V0.id)===String(P.id));if(t&&!t.name)t.name=P.label});let{content:k0,usedIds:I0}=s0(W0,t0);W0=k0;let H0=U0.filter(({id:P})=>!I0.has(P)),C0=f0.filter((P)=>!I0.has(P)),b0=A0.length>0?A0.map((P,t)=>({id:P.id||`attachment-${t+1}`,label:P.label||`attachment-${t+1}`})):t0.map((P,t)=>({id:P.id,label:P.name||`attachment-${t+1}`})),B0=w0(()=>X3($0),[$0]),S0=w0(()=>V3($0),[$0]),J0=w0(()=>{return B0.map((P)=>`${P.card_id}:${P.state}`).join("|")},[B0]);b(()=>{if(!f.current)return;return W4(f.current),qX(f.current)},[o0]);let j0=x(null);return b(()=>{if(!j0.current||B0.length===0)return;let P=j0.current;P.innerHTML="";for(let t of B0){let V0=document.createElement("div");P.appendChild(V0),NY(V0,t,{onAction:async(D0)=>{if(D0.type==="Action.OpenUrl"){let l0=i4(D0.url||"");if(!l0)throw Error("Invalid URL");window.open(l0,"_blank","noopener,noreferrer");return}if(D0.type==="Action.Submit"){await y6({post_id:_.id,thread_id:y.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:D0.type,title:D0.title||"",data:D0.data}});return}console.warn("[post] unsupported adaptive card action:",D0.type,D0)}}).catch((D0)=>{console.error("[post] adaptive card render error:",D0),V0.textContent=t.fallback_text||"Card failed to render."})}},[J0,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${p?"agent-post":""} ${X?"thread-reply":""} ${U?"thread-prev":""} ${L?"thread-next":""} ${H?"removing":""}" onClick=${$}>
            <div class="post-avatar ${p?"agent-avatar":""} ${k.image?"has-image":""}" style=${o}>
                ${k.image?B`<img src=${k.image} alt=${T} />`:k.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${j1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${T}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(P)=>{if(P.preventDefault(),P.stopPropagation(),Z)Z(_.id)}}>${T7(_.timestamp)}</a>
                </div>
                ${e&&Q0&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${r5(Q0.originalLength)} chars
                            ${Q0.maxLength?B` • Display limit: ${r5(Q0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${r&&Q0&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${r5(Q0.maxLength)} of ${r5(Q0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(R0.length>0||z0.length>0||b0.length>0)&&B`
                    <div class="post-file-refs">
                        ${z0.map((P)=>{let t=(V0)=>{if(V0.preventDefault(),V0.stopPropagation(),Y)Y(P,_.chat_jid||null);else{let D0=document.getElementById("post-"+P);if(D0)D0.scrollIntoView({behavior:"smooth",block:"center"}),D0.classList.add("post-highlight"),setTimeout(()=>D0.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${P}`} class="post-msg-pill-link" onClick=${t}>
                                    <${m_}
                                        prefix="post"
                                        label=${"msg:"+P}
                                        title=${"Message "+P}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${R0.map((P)=>{let t=P.split("/").pop()||P;return B`
                                <${m_}
                                    prefix="post"
                                    label=${t}
                                    title=${P}
                                    onClick=${()=>J?.(P)}
                                />
                            `})}
                        ${b0.map((P)=>B`
                            <${rG}
                                key=${P.id}
                                attachment=${P}
                                onPreview=${V1}
                            />
                        `)}
                    </div>
                `}
                ${M0&&B`
                    <div 
                        ref=${f}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:o0}}
                        onClick=${(P)=>{if(P.target.classList.contains("hashtag")){P.preventDefault(),P.stopPropagation();let t=P.target.dataset.hashtag;if(t)j?.(t)}else if(P.target.tagName==="IMG")P.preventDefault(),P.stopPropagation(),E(P.target.src)}}
                    />
                `}
                ${B0.length>0&&B`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${S0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${S0.map((P,t)=>{let V0=VY(P),D0=`${P.card_id}-${t}`;return B`
                                <div key=${D0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${V0.title}</span>
                                        </div>
                                    </div>
                                    ${V0.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${V0.fields.map((l0)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${l0.key}: ${l0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${l0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${l0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${r4(V0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${h.length>0&&B`
                    <div class="generated-widget-launches">
                        ${h.map((P,t)=>B`
                            <${aG}
                                key=${P.widget_id||P.id||`${_.id}-widget-${t}`}
                                block=${P}
                                post=${_}
                                onOpenWidget=${W}
                            />
                        `)}
                    </div>
                `}
                ${i.length>0&&B`
                    ${i.map((P,t)=>B`
                        <${a8} key=${t} annotations=${P} />
                    `)}
                `}
                ${H0.length>0&&B`
                    <div class="media-preview">
                        ${H0.map(({id:P,mimeType:t})=>{let D0=typeof t==="string"&&t.toLowerCase().startsWith("image/svg")?P_(P):u6(P);return B`
                                <img 
                                    key=${P} 
                                    src=${D0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(l0)=>S1(l0,P)}
                                />
                            `})}
                    </div>
                `}
                ${H0.length>0&&B`
                    ${H0.map(({annotations:P},t)=>B`
                        ${P&&B`<${a8} key=${t} annotations=${P} />`}
                    `)}
                `}
                ${C0.length>0&&B`
                    <div class="file-attachments">
                        ${C0.map((P)=>B`
                            <${iG} key=${P} mediaId=${P} onPreview=${V1} />
                        `)}
                    </div>
                `}
                ${a.length>0&&B`
                    <div class="resource-links">
                        ${a.map((P,t)=>B`
                            <div key=${t}>
                                <${oG} block=${P} />
                                <${a8} annotations=${P.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${q0.length>0&&B`
                    <div class="resource-embeds">
                        ${q0.map((P,t)=>B`
                            <div key=${t}>
                                <${sG} block=${P} />
                                <${a8} annotations=${P.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${y.link_previews.map((P,t)=>B`
                            <${eG} key=${t} preview=${P} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&B`<${LY} src=${A} onClose=${()=>E(null)} />`}
        ${Y1&&B`
            <${UY}
                mediaId=${Y1.mediaId}
                info=${Y1.info}
                onClose=${()=>n0(null)}
            />
        `}
    `}function BY({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Y,onMessageRef:Q,onScrollToMessage:q,onFileRef:K,onOpenWidget:N,emptyMessage:G,timelineRef:V,agents:X,user:U,onDeletePost:L,reverse:H=!0,removingPostIds:D,searchQuery:J}){let[W,A]=g(!1),E=x(null),f=typeof IntersectionObserver<"u",y=C(async()=>{if(!j||!$||W)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,W,j]),p=C((m)=>{let{scrollTop:s,scrollHeight:r,clientHeight:e}=m.target,Q0=H?r-e-s:s,$0=Math.max(300,e);if(Q0<$0)y()},[H,y]);b(()=>{if(!f)return;let m=E.current,s=V?.current;if(!m||!s)return;let r=300,e=new IntersectionObserver((Q0)=>{for(let $0 of Q0){if(!$0.isIntersecting)continue;y()}},{root:s,rootMargin:`${r}px 0px ${r}px 0px`,threshold:0});return e.observe(m),()=>e.disconnect()},[f,$,j,V,y]);let l=x(y);if(l.current=y,b(()=>{if(f)return;if(!V?.current)return;let{scrollTop:m,scrollHeight:s,clientHeight:r}=V.current,e=H?s-r-m:m,Q0=Math.max(300,r);if(e<Q0)l.current?.()},[f,_,$,H,V]),b(()=>{if(!V?.current)return;if(!$||W)return;let{scrollTop:m,scrollHeight:s,clientHeight:r}=V.current,e=H?s-r-m:m,Q0=Math.max(300,r);if(s<=r+1||e<Q0)l.current?.()},[_,$,W,H,V]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let T=_.slice().sort((m,s)=>m.id-s.id),k=(m)=>{let s=m?.data?.thread_id;if(s===null||s===void 0||s==="")return null;let r=Number(s);return Number.isFinite(r)?r:null},F=new Map;for(let m=0;m<T.length;m+=1){let s=T[m],r=Number(s?.id),e=k(s);if(e!==null){let Q0=F.get(e)||{anchorIndex:-1,replyIndexes:[]};Q0.replyIndexes.push(m),F.set(e,Q0)}else if(Number.isFinite(r)){let Q0=F.get(r)||{anchorIndex:-1,replyIndexes:[]};Q0.anchorIndex=m,F.set(r,Q0)}}let I=new Map;for(let[m,s]of F.entries()){let r=new Set;if(s.anchorIndex>=0)r.add(s.anchorIndex);for(let e of s.replyIndexes)r.add(e);I.set(m,Array.from(r).sort((e,Q0)=>e-Q0))}let v=T.map((m,s)=>{let r=k(m);if(r===null)return{hasThreadPrev:!1,hasThreadNext:!1};let e=I.get(r);if(!e||e.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Q0=e.indexOf(s);if(Q0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Q0>0,hasThreadNext:Q0<e.length-1}}),o=B`<div class="timeline-sentinel" ref=${E}></div>`;return B`
        <div class="timeline ${H?"reverse":"normal"}" ref=${V} onScroll=${p}>
            <div class="timeline-content">
                ${H?o:null}
                ${T.map((m,s)=>{let r=Boolean(m.data?.thread_id&&m.data.thread_id!==m.id),e=D?.has?.(m.id),Q0=v[s]||{};return B`
                    <${WY}
                        key=${m.id}
                        post=${m}
                        isThreadReply=${r}
                        isThreadPrev=${Q0.hasThreadPrev}
                        isThreadNext=${Q0.hasThreadNext}
                        isRemoving=${e}
                        highlightQuery=${J}
                        agentName=${tZ(m.data?.agent_id,X||{})}
                        agentAvatarUrl=${eZ(m.data?.agent_id,X||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(m)}
                        onHashtagClick=${Y}
                        onMessageRef=${Q}
                        onScrollToMessage=${q}
                        onFileRef=${K}
                        onOpenWidget=${N}
                        onDelete=${L}
                    />
                `})}
                ${H?null:o}
            </div>
        </div>
    `}var t8="workspaceExplorerScale",UX=["compact","default","comfortable"],LX=new Set(UX),WX={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function zY(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return LX.has(j)?j:$}function U3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function BX(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function zX(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function L3(_={}){let $=BX(_),j=_.stored?zY(_.stored,$):$;return zX(j,_)}function FY(_){return WX[zY(_)]}function FX(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function W3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function HY(_,$,j={}){let Z=j.resolvePane;if(W3(_,Z))return!0;return FX($)}var HX=60000,AY=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function JX(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return W3($,(j)=>p0.resolve(j))}function EY(_,$,j,Z=0,Y=[]){if(!j&&AY(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Q of _.children)EY(Q,$,j,Z+1,Y);return Y}function JY(_,$,j){if(!_)return"";let Z=[],Y=(Q)=>{if(!j&&AY(Q))return;if(Z.push(Q.type==="dir"?`d:${Q.path}`:`f:${Q.path}`),Q.children&&$?.has(Q.path))for(let q of Q.children)Y(q)};return Y(_),Z.join("|")}function H3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Y=j?new Map(j.map((K)=>[K?.path,K])):new Map,Q=!j||j.length!==Z.length,q=Z.map((K)=>{let N=H3(Y.get(K.path),K);if(N!==Y.get(K.path))Q=!0;return N});return Q?{...$,children:q}:_}function z3(_,$,j){if(!_)return _;if(_.path===$)return H3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Y=_.children.map((Q)=>{let q=z3(Q,$,j);if(q!==Q)Z=!0;return q});return Z?{..._,children:Y}:_}var kY=4,B3=14,OX=8,DX=16;function MY(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=MY(Z);return _.__bytes=j,j}function IY(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=kY)return Z;let Y=Array.isArray(_.children)?_.children:[],Q=[];for(let K of Y){let N=Math.max(0,Number(K?.__bytes??K?.size??0));if(N<=0)continue;if(K.type==="dir")Q.push({kind:"dir",node:K,size:N});else Q.push({kind:"file",name:K.name,path:K.path,size:N})}Q.sort((K,N)=>N.size-K.size);let q=Q;if(Q.length>B3){let K=Q.slice(0,B3-1),N=Q.slice(B3-1),G=N.reduce((V,X)=>V+X.size,0);K.push({kind:"other",name:`+${N.length} more`,path:`${Z.path}/[other]`,size:G}),q=K}return Z.children=q.map((K)=>{if(K.kind==="dir")return IY(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Z}function OY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function xY(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Y=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Q=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Y}% ${Q}%)`}function e8(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function J3(_,$,j,Z,Y,Q){let q=Math.PI*2-0.0001,K=Q-Y>q?Y+q:Q,N=e8(_,$,Z,Y),G=e8(_,$,Z,K),V=e8(_,$,j,K),X=e8(_,$,j,Y),U=K-Y>Math.PI?1:0;return[`M ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,"Z"].join(" ")}var TY={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function CY(_,$,j){let Z=[],Y=[],Q=Math.max(0,Number($)||0),q=(K,N,G,V)=>{let X=Array.isArray(K?.children)?K.children:[];if(!X.length)return;let U=Math.max(0,Number(K.size)||0);if(U<=0)return;let L=G-N,H=N;X.forEach((D,J)=>{let W=Math.max(0,Number(D.size)||0);if(W<=0)return;let A=W/U,E=H,f=J===X.length-1?G:H+L*A;if(H=f,f-E<0.003)return;let y=TY[V];if(y){let p=xY(E,V,j);if(Z.push({key:D.path,path:D.path,label:D.name,size:W,color:p,depth:V,startAngle:E,endAngle:f,innerRadius:y[0],outerRadius:y[1],d:J3(120,120,y[0],y[1],E,f)}),V===1)Y.push({key:D.path,name:D.name,size:W,pct:Q>0?W/Q*100:0,color:p})}if(V<kY)q(D,E,f,V+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Y}}function F3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Y=F3(Z,$);if(Y)return Y}return null}function PY(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Y=TY[1];if(!Y)return{segments:[],legend:[]};let Q=-Math.PI/2,q=Math.PI*3/2,K=xY(Q,1,Z),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:K,depth:1,startAngle:Q,endAngle:q,innerRadius:Y[0],outerRadius:Y[1],d:J3(120,120,Y[0],Y[1],Q,q)}],legend:[{key:G,name:_,size:j,pct:100,color:K}]}}function DY(_,$=!1,j=!1){if(!_)return null;let Z=MY(_),Y=IY(_,0),Q=Y.size||Z,{segments:q,legend:K}=CY(Y,Q,j);if(!q.length&&Q>0){let N=PY("[files]",Y.path,Q,j);q=N.segments,K=N.legend}return{root:Y,totalSize:Q,segments:q,legend:K,truncated:$,isDarkTheme:j}}function AX({payload:_}){if(!_)return null;let[$,j]=g(null),[Z,Y]=g(_?.root?.path||"."),[Q,q]=g(()=>[_?.root?.path||"."]),[K,N]=g(!1);b(()=>{let F=_?.root?.path||".";Y(F),q([F]),j(null)},[_?.root?.path,_?.totalSize]),b(()=>{if(!Z)return;N(!0);let F=setTimeout(()=>N(!1),180);return()=>clearTimeout(F)},[Z]);let G=w0(()=>{return F3(_.root,Z)||_.root},[_?.root,Z]),V=G?.size||_.totalSize||0,{segments:X,legend:U}=w0(()=>{let F=CY(G,V,_.isDarkTheme);if(F.segments.length>0)return F;if(V<=0)return F;let I=G?.children?.length?"Total":"[files]";return PY(I,G?.path||_?.root?.path||".",V,_.isDarkTheme)},[G,V,_.isDarkTheme,_?.root?.path]),[L,H]=g(X),D=x(new Map),J=x(0);b(()=>{let F=D.current,I=new Map(X.map((s)=>[s.key,s])),v=performance.now(),o=220,m=(s)=>{let r=Math.min(1,(s-v)/220),e=r*(2-r),Q0=X.map(($0)=>{let W0=F.get($0.key)||{startAngle:$0.startAngle,endAngle:$0.startAngle,innerRadius:$0.innerRadius,outerRadius:$0.innerRadius},L0=(A0,u0)=>A0+(u0-A0)*e,R0=L0(W0.startAngle,$0.startAngle),E0=L0(W0.endAngle,$0.endAngle),z0=L0(W0.innerRadius,$0.innerRadius),v0=L0(W0.outerRadius,$0.outerRadius);return{...$0,d:J3(120,120,z0,v0,R0,E0)}});if(H(Q0),r<1)J.current=requestAnimationFrame(m)};if(J.current)cancelAnimationFrame(J.current);return J.current=requestAnimationFrame(m),D.current=I,()=>{if(J.current)cancelAnimationFrame(J.current)}},[X]);let W=L.length?L:X,A=V>0?y_(V):"0 B",E=G?.name||"",y=(E&&E!=="."?E:"Total")||"Total",p=A,l=Q.length>1,T=(F)=>{if(!F?.path)return;let I=F3(_.root,F.path);if(!I||!Array.isArray(I.children)||I.children.length===0)return;q((v)=>[...v,I.path]),Y(I.path),j(null)},k=()=>{if(!l)return;q((F)=>{let I=F.slice(0,-1);return Y(I[I.length-1]||_?.root?.path||"."),I}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${K?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${W.length}
                data-base-size=${V}>
                ${W.map((F)=>B`
                    <path
                        key=${F.key}
                        d=${F.d}
                        fill=${F.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===F.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(F)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(F)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>T(F)}
                    >
                        <title>${F.label} — ${y_(F.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${l?" is-drill":""}`}
                    onClick=${k}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${y}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${p}</text>
                </g>
            </svg>
            ${U.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((F)=>B`
                        <div key=${F.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${F.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${F.name}>${F.name}</span>
                            <span class="workspace-folder-starburst-size">${y_(F.size)}</span>
                            <span class="workspace-folder-starburst-pct">${F.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function EX({mediaId:_}){let[$,j]=g(null);if(b(()=>{if(!_)return;X5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Y=$.metadata?.size?y_($.metadata.size):"";return B`
        <a href=${P_(_)} download=${Z} class="file-attachment"
            onClick=${(Q)=>Q.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${Y&&B`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function yY({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Y,onOpenVncTab:Q,onToggleTerminal:q,terminalVisible:K=!1}){let[N,G]=g(null),[V,X]=g(new Set(["."])),[U,L]=g(null),[H,D]=g(null),[J,W]=g(""),[A,E]=g(null),[f,y]=g(null),[p,l]=g(!0),[T,k]=g(!1),[F,I]=g(null),[v,o]=g(()=>H5("workspaceShowHidden",!1)),[m,s]=g(!1),[r,e]=g(null),[Q0,$0]=g(null),[K0,W0]=g(null),[L0,R0]=g(!1),[E0,z0]=g(null),[v0,A0]=g(()=>OY()),[u0,m0]=g(()=>L3({stored:B_(t8),...U3()})),[O0,c0]=g(!1),N0=x(V),M0=x(""),d0=x(null),o0=x(0),S1=x(new Set),Y1=x(null),n0=x(new Map),V1=x(_),j1=x(Z),s0=x(null),U0=x(null),f0=x(null),t0=x(null),a=x(null),q0=x(null),h=x("."),i=x(null),F0=x({path:null,dragging:!1,startX:0,startY:0}),k0=x({path:null,dragging:!1,startX:0,startY:0}),I0=x({path:null,timer:0}),H0=x(!1),C0=x(0),b0=x(new Map),B0=x(null),S0=x(null),J0=x(null),j0=x(null),P=x(null),t=x(null),V0=x(v),D0=x($),l0=x(j??$),e0=x(0),Q1=x(K0),O1=x(m),m1=x(r),S_=x(null),a1=x({x:0,y:0}),u1=x(0),l1=x(null),h1=x(U),a0=x(H),n1=x(null),a_=x(A);V1.current=_,j1.current=Z,b(()=>{N0.current=V},[V]),b(()=>{V0.current=v},[v]),b(()=>{D0.current=$},[$]),b(()=>{l0.current=j??$},[j,$]),b(()=>{Q1.current=K0},[K0]),b(()=>{if(typeof window>"u")return;let O=()=>{m0(L3({stored:B_(t8),...U3()}))};O();let M=()=>O(),u=()=>O(),S=(_0)=>{if(!_0||_0.key===null||_0.key===t8)O()};window.addEventListener("resize",M),window.addEventListener("focus",u),window.addEventListener("storage",S);let d=window.matchMedia?.("(pointer: coarse)"),Y0=window.matchMedia?.("(hover: none)"),G0=(_0,P0)=>{if(!_0)return;if(_0.addEventListener)_0.addEventListener("change",P0);else if(_0.addListener)_0.addListener(P0)},X0=(_0,P0)=>{if(!_0)return;if(_0.removeEventListener)_0.removeEventListener("change",P0);else if(_0.removeListener)_0.removeListener(P0)};return G0(d,M),G0(Y0,M),()=>{window.removeEventListener("resize",M),window.removeEventListener("focus",u),window.removeEventListener("storage",S),X0(d,M),X0(Y0,M)}},[]),b(()=>{let O=(M)=>{let u=M?.detail?.path;if(!u)return;let S=u.split("/"),d=[];for(let Y0=1;Y0<S.length;Y0++)d.push(S.slice(0,Y0).join("/"));if(d.length)X((Y0)=>{let G0=new Set(Y0);G0.add(".");for(let X0 of d)G0.add(X0);return G0});L(u),requestAnimationFrame(()=>{let Y0=document.querySelector(`[data-path="${CSS.escape(u)}"]`);if(Y0)Y0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",O),()=>window.removeEventListener("workspace-reveal-path",O)},[]),b(()=>{O1.current=m},[m]),b(()=>{m1.current=r},[r]),b(()=>{h1.current=U},[U]),b(()=>{a0.current=H},[H]),b(()=>{a_.current=A},[A]),b(()=>{if(typeof window>"u"||typeof document>"u")return;let O=()=>A0(OY());O();let M=window.matchMedia?.("(prefers-color-scheme: dark)"),u=()=>O();if(M?.addEventListener)M.addEventListener("change",u);else if(M?.addListener)M.addListener(u);let S=typeof MutationObserver<"u"?new MutationObserver(()=>O()):null;if(S?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)S?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(M?.removeEventListener)M.removeEventListener("change",u);else if(M?.removeListener)M.removeListener(u);S?.disconnect()}},[]),b(()=>{if(!H)return;let O=a.current;if(!O)return;let M=requestAnimationFrame(()=>{try{O.focus(),O.select()}catch{}});return()=>cancelAnimationFrame(M)},[H]),b(()=>{if(!O0)return;let O=(u)=>{let S=u?.target;if(!(S instanceof Element))return;if(P.current?.contains(S))return;if(t.current?.contains(S))return;c0(!1)},M=(u)=>{if(u?.key==="Escape")c0(!1),t.current?.focus?.()};return document.addEventListener("mousedown",O),document.addEventListener("touchstart",O,{passive:!0}),document.addEventListener("keydown",M),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("touchstart",O),document.removeEventListener("keydown",M)}},[O0]);let t1=async(O,M={})=>{let u=Boolean(M?.autoOpen),S=String(O||"").trim();k(!0),E(null),y(null);try{let d=await R5(S,20000);if(u&&S&&HY(S,d,{resolvePane:(Y0)=>p0.resolve(Y0)}))return j1.current?.(S,d),d;return E(d),d}catch(d){let Y0={error:d.message||"Failed to load preview"};return E(Y0),Y0}finally{k(!1)}};s0.current=t1;let t_=async()=>{if(!D0.current)return;try{let O=await w5("",1,V0.current),M=JY(O.root,N0.current,V0.current);if(M===M0.current){l(!1);return}if(M0.current=M,d0.current=O.root,!o0.current)o0.current=requestAnimationFrame(()=>{o0.current=0,G((u)=>H3(u,d0.current)),l(!1)})}catch(O){I(O.message||"Failed to load workspace"),l(!1)}},h_=async(O)=>{if(!O)return;if(S1.current.has(O))return;S1.current.add(O);try{let M=await w5(O,1,V0.current);G((u)=>z3(u,O,M.root))}catch(M){I(M.message||"Failed to load workspace")}finally{S1.current.delete(O)}};U0.current=h_;let D1=C(()=>{let O=U;if(!O)return".";let M=n0.current?.get(O);if(M&&M.type==="dir")return M.path;if(O==="."||!O.includes("/"))return".";let u=O.split("/");return u.pop(),u.join("/")||"."},[U]),d1=C((O)=>{let M=O?.closest?.(".workspace-row");if(!M)return null;let u=M.dataset.path,S=M.dataset.type;if(!u)return null;if(S==="dir")return u;if(u.includes("/")){let d=u.split("/");return d.pop(),d.join("/")||"."}return"."},[]),A1=C((O)=>{return d1(O?.target||null)},[d1]),U1=C((O)=>{Q1.current=O,W0(O)},[]),L1=C(()=>{let O=I0.current;if(O?.timer)clearTimeout(O.timer);I0.current={path:null,timer:0}},[]),X_=C((O)=>{if(!O||O==="."){L1();return}let M=n0.current?.get(O);if(!M||M.type!=="dir"){L1();return}if(N0.current?.has(O)){L1();return}if(I0.current?.path===O)return;L1();let u=setTimeout(()=>{I0.current={path:null,timer:0},U0.current?.(O),X((S)=>{let d=new Set(S);return d.add(O),d})},600);I0.current={path:O,timer:u}},[L1]),V_=C((O,M)=>{if(a1.current={x:O,y:M},u1.current)return;u1.current=requestAnimationFrame(()=>{u1.current=0;let u=S_.current;if(!u)return;let S=a1.current;u.style.transform=`translate(${S.x+12}px, ${S.y+12}px)`})},[]),k1=C((O)=>{if(!O)return;let u=(n0.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!u)return;$0({path:O,label:u})},[]),i1=C(()=>{if($0(null),u1.current)cancelAnimationFrame(u1.current),u1.current=0;if(S_.current)S_.current.style.transform="translate(-9999px, -9999px)"},[]),Z1=C((O)=>{if(!O)return".";let M=n0.current?.get(O);if(M&&M.type==="dir")return M.path;if(O==="."||!O.includes("/"))return".";let u=O.split("/");return u.pop(),u.join("/")||"."},[]),M1=C(()=>{D(null),W("")},[]),e1=C((O)=>{if(!O)return;let u=(n0.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!u||O===".")return;D(O),W(u)},[]),f1=C(async()=>{let O=a0.current;if(!O)return;let M=(J||"").trim();if(!M){M1();return}let u=n0.current?.get(O),S=(u?.name||O.split("/").pop()||O).trim();if(M===S){M1();return}try{let Y0=(await g6(O,M))?.path||O,G0=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(M1(),I(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:O,newPath:Y0,type:u?.type||"file"}})),u?.type==="dir")X((X0)=>{let _0=new Set;for(let P0 of X0)if(P0===O)_0.add(Y0);else if(P0.startsWith(`${O}/`))_0.add(`${Y0}${P0.slice(O.length)}`);else _0.add(P0);return _0});if(L(Y0),u?.type==="dir")E(null),k(!1),y(null);else s0.current?.(Y0);U0.current?.(G0)}catch(d){I(d?.message||"Failed to rename file")}},[M1,J]),e_=C(async(O)=>{let S=O||".";for(let d=0;d<50;d+=1){let G0=`untitled${d===0?"":`-${d}`}.md`;try{let _0=(await b6(S,G0,""))?.path||(S==="."?G0:`${S}/${G0}`);if(S&&S!==".")X((P0)=>new Set([...P0,S]));L(_0),I(null),U0.current?.(S),s0.current?.(_0);return}catch(X0){if(X0?.status===409||X0?.code==="file_exists")continue;I(X0?.message||"Failed to create file");return}}I("Failed to create file (untitled name already in use).")},[]),H_=C((O)=>{if(O?.stopPropagation?.(),L0)return;let M=Z1(h1.current);e_(M)},[L0,Z1,e_]);b(()=>{if(typeof window>"u")return;let O=(M)=>{let u=M?.detail?.updates||[];if(!Array.isArray(u)||u.length===0)return;G((X0)=>{let _0=X0;for(let P0 of u){if(!P0?.root)continue;if(!_0||P0.path==="."||!P0.path)_0=P0.root;else _0=z3(_0,P0.path,P0.root)}if(_0)M0.current=JY(_0,N0.current,V0.current);return l(!1),_0});let S=h1.current;if(Boolean(S)&&u.some((X0)=>{let _0=X0?.path||"";if(!_0||_0===".")return!0;return S===_0||S.startsWith(`${_0}/`)||_0.startsWith(`${S}/`)}))b0.current.clear();if(!S||!a_.current)return;let Y0=n0.current?.get(S);if(Y0&&Y0.type==="dir")return;if(u.some((X0)=>{let _0=X0?.path||"";if(!_0||_0===".")return!0;return S===_0||S.startsWith(`${_0}/`)}))s0.current?.(S)};return window.addEventListener("workspace-update",O),()=>window.removeEventListener("workspace-update",O)},[]),Y1.current=t_;let _4=x(()=>{if(typeof window>"u")return;let O=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),M=l0.current??D0.current,u=document.visibilityState!=="hidden"&&(M||O.matches&&D0.current);u5(u,V0.current).catch(()=>{})}).current,J_=x(0),B4=x(()=>{if(J_.current)clearTimeout(J_.current);J_.current=setTimeout(()=>{J_.current=0,_4()},250)}).current;b(()=>{if(D0.current)Y1.current?.();B4()},[$,j]),b(()=>{Y1.current(),_4();let O=setInterval(()=>Y1.current(),HX),M=l5("previewHeight",null),u=Number.isFinite(M)?Math.min(Math.max(M,80),600):280;if(C0.current=u,f0.current)f0.current.style.setProperty("--preview-height",`${u}px`);let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),d=()=>B4();if(S.addEventListener)S.addEventListener("change",d);else if(S.addListener)S.addListener(d);return document.addEventListener("visibilitychange",d),()=>{if(clearInterval(O),o0.current)cancelAnimationFrame(o0.current),o0.current=0;if(S.removeEventListener)S.removeEventListener("change",d);else if(S.removeListener)S.removeListener(d);if(document.removeEventListener("visibilitychange",d),J_.current)clearTimeout(J_.current),J_.current=0;if(i.current)clearTimeout(i.current),i.current=null;u5(!1,V0.current).catch(()=>{})}},[]);let O_=w0(()=>EY(N,V,v),[N,V,v]),w_=w0(()=>new Map(O_.map((O)=>[O.node.path,O.node])),[O_]),u4=w0(()=>FY(u0),[u0]);n0.current=w_;let _1=(U?n0.current.get(U):null)?.type==="dir";b(()=>{if(!U||!_1){z0(null),B0.current=null,S0.current=null;return}let O=U,M=`${v?"hidden":"visible"}:${U}`,u=b0.current,S=u.get(M);if(S?.root){u.delete(M),u.set(M,S);let G0=DY(S.root,Boolean(S.truncated),v0);if(G0)B0.current=G0,S0.current=U,z0({loading:!1,error:null,payload:G0});return}let d=B0.current,Y0=S0.current;z0({loading:!0,error:null,payload:Y0===U?d:null}),w5(U,OX,v).then((G0)=>{if(h1.current!==O)return;let X0={root:G0?.root,truncated:Boolean(G0?.truncated)};u.delete(M),u.set(M,X0);while(u.size>DX){let P0=u.keys().next().value;if(!P0)break;u.delete(P0)}let _0=DY(X0.root,X0.truncated,v0);B0.current=_0,S0.current=U,z0({loading:!1,error:null,payload:_0})}).catch((G0)=>{if(h1.current!==O)return;z0({loading:!1,error:G0?.message||"Failed to load folder size chart",payload:Y0===U?d:null})})},[U,_1,v,v0]);let E1=Boolean(A&&A.kind==="text"&&!_1&&(!A.size||A.size<=262144)),z4=E1?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",__=Boolean(U&&U!=="."),D_=Boolean(U&&!_1),p1=Boolean(U&&!_1),H1=U&&_1?H8(U,v):null,w1=C(()=>c0(!1),[]),q1=C(async(O)=>{w1();try{await O?.()}catch(M){console.warn("[workspace-explorer] Header menu action failed:",M)}},[w1]);b(()=>{let O=J0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!O)return;if(O.innerHTML="",!U||_1||!A||A.error)return;let M={path:U,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},u=p0.resolve(M)||p0.get("workspace-preview-default");if(!u)return;let S=u.mount(O,M);return j0.current=S,()=>{if(j0.current===S)S.dispose(),j0.current=null;O.innerHTML=""}},[U,_1,A]);let $_=(O)=>{let M=O?.target;if(M instanceof Element)return M;return M?.parentElement||null},j_=(O)=>{return Boolean(O?.closest?.(".workspace-node-icon, .workspace-label-text"))},Z_=x((O)=>{let M=$_(O),u=M?.closest?.("[data-path]");if(!u)return;let S=u.dataset.path;if(!S||S===".")return;let d=Boolean(M?.closest?.("button"))||Boolean(M?.closest?.("a"))||Boolean(M?.closest?.("input")),Y0=Boolean(M?.closest?.(".workspace-caret"));if(d||Y0)return;if(a0.current===S)return;e1(S)}).current,p_=x((O)=>{if(H0.current){H0.current=!1;return}let M=$_(O),u=M?.closest?.("[data-path]");if(t0.current?.focus?.(),!u)return;let S=u.dataset.path,d=u.dataset.type,Y0=Boolean(M?.closest?.(".workspace-caret")),G0=Boolean(M?.closest?.("button"))||Boolean(M?.closest?.("a"))||Boolean(M?.closest?.("input")),X0=h1.current===S,_0=a0.current;if(_0){if(_0===S)return;M1()}let P0=d==="file"&&n1.current===S&&!Y0&&!G0;if(d==="dir"){if(n1.current=null,L(S),E(null),y(null),k(!1),!N0.current.has(S))U0.current?.(S);if(X0&&!Y0)return;X((o1)=>{let K_=new Set(o1);if(K_.has(S))K_.delete(S);else K_.add(S);return K_})}else{n1.current=null,L(S);let x1=n0.current.get(S);if(x1)V1.current?.(x1.path,x1);if(!G0&&!Y0&&JX(S))j1.current?.(S,a_.current);else{let K_=!G0&&!Y0;s0.current?.(S,{autoOpen:K_})}}}).current,v1=x(()=>{M0.current="",Y1.current(),Array.from(N0.current||[]).filter((M)=>M&&M!==".").forEach((M)=>U0.current?.(M))}).current,R1=x(()=>{n1.current=null,L(null),E(null),y(null),k(!1)}).current,Y_=x(()=>{o((O)=>{let M=!O;if(typeof window<"u")$1("workspaceShowHidden",String(M));return V0.current=M,u5(!0,M).catch(()=>{}),M0.current="",Y1.current?.(),Array.from(N0.current||[]).filter((S)=>S&&S!==".").forEach((S)=>U0.current?.(S)),M})}).current,R_=x((O)=>{if($_(O)?.closest?.("[data-path]"))return;R1()}).current,W1=C(async(O)=>{if(!O)return;let M=O.split("/").pop()||O;if(!window.confirm(`Delete "${M}"? This cannot be undone.`))return;try{await h6(O);let S=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(h1.current===O)R1();U0.current?.(S),I(null)}catch(S){E((d)=>({...d||{},error:S.message||"Failed to delete file"}))}},[R1]),A_=C((O)=>{let M=t0.current;if(!M||!O||typeof CSS>"u"||typeof CSS.escape!=="function")return;M.querySelector(`[data-path="${CSS.escape(O)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),K1=C((O)=>{let M=O_;if(!M||M.length===0)return;let u=U?M.findIndex((S)=>S.node.path===U):-1;if(O.key==="ArrowDown"){O.preventDefault();let S=Math.min(u+1,M.length-1),d=M[S];if(!d)return;if(L(d.node.path),d.node.type!=="dir")V1.current?.(d.node.path,d.node),s0.current?.(d.node.path);else E(null),k(!1),y(null);A_(d.node.path);return}if(O.key==="ArrowUp"){O.preventDefault();let S=u<=0?0:u-1,d=M[S];if(!d)return;if(L(d.node.path),d.node.type!=="dir")V1.current?.(d.node.path,d.node),s0.current?.(d.node.path);else E(null),k(!1),y(null);A_(d.node.path);return}if(O.key==="ArrowRight"&&u>=0){let S=M[u];if(S?.node?.type==="dir"&&!V.has(S.node.path))O.preventDefault(),U0.current?.(S.node.path),X((d)=>new Set([...d,S.node.path]));return}if(O.key==="ArrowLeft"&&u>=0){let S=M[u];if(S?.node?.type==="dir"&&V.has(S.node.path))O.preventDefault(),X((d)=>{let Y0=new Set(d);return Y0.delete(S.node.path),Y0});return}if(O.key==="Enter"&&u>=0){O.preventDefault();let S=M[u];if(!S)return;let d=S.node.path;if(S.node.type==="dir"){if(!N0.current.has(d))U0.current?.(d);X((G0)=>{let X0=new Set(G0);if(X0.has(d))X0.delete(d);else X0.add(d);return X0}),E(null),y(null),k(!1)}else V1.current?.(d,S.node),s0.current?.(d);return}if((O.key==="Delete"||O.key==="Backspace")&&u>=0){let S=M[u];if(!S||S.node.type==="dir")return;O.preventDefault(),W1(S.node.path);return}if(O.key==="Escape")O.preventDefault(),R1()},[R1,W1,V,O_,A_,U]),u_=C((O)=>{let M=$_(O),u=M?.closest?.(".workspace-row");if(!u)return;let S=u.dataset.type,d=u.dataset.path;if(!d||d===".")return;if(a0.current===d)return;let Y0=O?.touches?.[0];if(!Y0)return;if(F0.current={path:j_(M)?d:null,dragging:!1,startX:Y0.clientX,startY:Y0.clientY},S!=="file")return;if(i.current)clearTimeout(i.current);i.current=setTimeout(()=>{if(i.current=null,F0.current?.dragging)return;W1(d)},600)},[W1]),E_=C(()=>{if(i.current)clearTimeout(i.current),i.current=null;let O=F0.current;if(O?.dragging&&O.path){let M=Q1.current||D1(),u=l1.current;if(typeof u==="function")u(O.path,M)}F0.current={path:null,dragging:!1,startX:0,startY:0},e0.current=0,s(!1),e(null),U1(null),L1(),i1()},[D1,i1,U1,L1]),v4=C((O)=>{let M=F0.current,u=O?.touches?.[0];if(!u||!M?.path){if(i.current)clearTimeout(i.current),i.current=null;return}let S=Math.abs(u.clientX-M.startX),d=Math.abs(u.clientY-M.startY),Y0=S>8||d>8;if(Y0&&i.current)clearTimeout(i.current),i.current=null;if(!M.dragging&&Y0)M.dragging=!0,s(!0),e("move"),k1(M.path);if(M.dragging){O.preventDefault(),V_(u.clientX,u.clientY);let G0=document.elementFromPoint(u.clientX,u.clientY),X0=d1(G0)||D1();if(Q1.current!==X0)U1(X0);X_(X0)}},[d1,D1,k1,V_,U1,X_]),b4=x((O)=>{O.preventDefault();let M=f0.current;if(!M)return;let u=O.clientY,S=C0.current||280,d=O.currentTarget;d.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Y0=u,G0=(_0)=>{Y0=_0.clientY;let P0=M.clientHeight-80,x1=Math.min(Math.max(S-(_0.clientY-u),80),P0);M.style.setProperty("--preview-height",`${x1}px`),C0.current=x1},X0=()=>{let _0=M.clientHeight-80,P0=Math.min(Math.max(S-(Y0-u),80),_0);C0.current=P0,d.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$1("previewHeight",String(Math.round(P0))),document.removeEventListener("mousemove",G0),document.removeEventListener("mouseup",X0)};document.addEventListener("mousemove",G0),document.addEventListener("mouseup",X0)}).current,f_=x((O)=>{O.preventDefault();let M=f0.current;if(!M)return;let u=O.touches[0];if(!u)return;let S=u.clientY,d=C0.current||280,Y0=O.currentTarget;Y0.classList.add("dragging"),document.body.style.userSelect="none";let G0=(_0)=>{let P0=_0.touches[0];if(!P0)return;_0.preventDefault();let x1=M.clientHeight-80,o1=Math.min(Math.max(d-(P0.clientY-S),80),x1);M.style.setProperty("--preview-height",`${o1}px`),C0.current=o1},X0=()=>{Y0.classList.remove("dragging"),document.body.style.userSelect="",$1("previewHeight",String(Math.round(C0.current||d))),document.removeEventListener("touchmove",G0),document.removeEventListener("touchend",X0),document.removeEventListener("touchcancel",X0)};document.addEventListener("touchmove",G0,{passive:!1}),document.addEventListener("touchend",X0),document.addEventListener("touchcancel",X0)}).current,c_=async()=>{if(!U)return;try{let O=await v6(U);if(O.media_id)y(O.media_id)}catch(O){E((M)=>({...M||{},error:O.message||"Failed to attach"}))}},g4=async()=>{if(!U||_1)return;await W1(U)},$4=(O)=>{return Array.from(O?.dataTransfer?.types||[]).includes("Files")},s4=C((O)=>{if(!$4(O))return;if(O.preventDefault(),e0.current+=1,!O1.current)s(!0);e("upload");let M=A1(O)||D1();U1(M),X_(M)},[D1,A1,U1,X_]),j4=C((O)=>{if(!$4(O))return;if(O.preventDefault(),O.dataTransfer)O.dataTransfer.dropEffect="copy";if(!O1.current)s(!0);if(m1.current!=="upload")e("upload");let M=A1(O)||D1();if(Q1.current!==M)U1(M);X_(M)},[D1,A1,U1,X_]),l_=C((O)=>{if(!$4(O))return;if(O.preventDefault(),e0.current=Math.max(0,e0.current-1),e0.current===0)s(!1),e(null),U1(null),L1()},[U1,L1]),r1=C(async(O,M=".")=>{let u=Array.from(O||[]);if(u.length===0)return;let S=M&&M!==""?M:".",d=S!=="."?S:"workspace root";R0(!0);try{let Y0=null;for(let G0 of u)try{Y0=await z8(G0,S)}catch(X0){let _0=X0?.status,P0=X0?.code;if(_0===409||P0==="file_exists"){let x1=G0?.name||"file";if(!window.confirm(`"${x1}" already exists in ${d}. Overwrite?`))continue;Y0=await z8(G0,S,{overwrite:!0})}else throw X0}if(Y0?.path)n1.current=Y0.path,L(Y0.path),s0.current?.(Y0.path);U0.current?.(S)}catch(Y0){I(Y0.message||"Failed to upload file")}finally{R0(!1)}},[]),F4=C(async(O,M)=>{if(!O)return;let u=n0.current?.get(O);if(!u)return;let S=M&&M!==""?M:".",d=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(S===d)return;try{let G0=(await m6(O,S))?.path||O;if(u.type==="dir")X((X0)=>{let _0=new Set;for(let P0 of X0)if(P0===O)_0.add(G0);else if(P0.startsWith(`${O}/`))_0.add(`${G0}${P0.slice(O.length)}`);else _0.add(P0);return _0});if(L(G0),u.type==="dir")E(null),k(!1),y(null);else s0.current?.(G0);U0.current?.(d),U0.current?.(S)}catch(Y0){I(Y0?.message||"Failed to move entry")}},[]);l1.current=F4;let H4=C(async(O)=>{if(!$4(O))return;O.preventDefault(),e0.current=0,s(!1),e(null),W0(null),L1();let M=Array.from(O?.dataTransfer?.files||[]);if(M.length===0)return;let u=Q1.current||A1(O)||D1();await r1(M,u)},[D1,A1,r1]),I5=C((O)=>{if(O?.stopPropagation?.(),L0)return;let M=O?.currentTarget?.dataset?.uploadTarget||".";h.current=M,q0.current?.click()},[L0]),J1=C(()=>{if(L0)return;let O=h1.current,M=O?n0.current?.get(O):null;h.current=M?.type==="dir"?M.path:".",q0.current?.click()},[L0]),J4=C(()=>{q1(()=>H_(null))},[q1,H_]),a4=C(()=>{q1(()=>J1())},[q1,J1]),Q_=C(()=>{q1(()=>v1())},[q1,v1]),q_=C(()=>{q1(()=>Y_())},[q1,Y_]),Z4=C(()=>{if(!U||!E1)return;q1(()=>j1.current?.(U,A))},[q1,U,E1,A]),m4=C(()=>{if(!U||U===".")return;q1(()=>e1(U))},[q1,U,e1]),h4=C(()=>{if(!U||_1)return;q1(()=>g4())},[q1,U,_1,g4]),t4=C(()=>{if(!U||_1)return;q1(()=>c_())},[q1,U,_1,c_]),Y4=C(()=>{if(!H1)return;if(w1(),typeof window<"u")window.open(H1,"_blank","noopener")},[w1,H1]),k_=C(()=>{w1(),Y?.()},[w1,Y]),x5=C(()=>{w1(),Q?.()},[w1,Q]),O4=C(()=>{w1(),q?.()},[w1,q]),p4=C((O)=>{if(!O||O.button!==0)return;let M=O.currentTarget;if(!M||!M.dataset)return;let u=M.dataset.path;if(!u||u===".")return;if(a0.current===u)return;let S=$_(O);if(S?.closest?.("button, a, input, .workspace-caret"))return;if(!j_(S))return;O.preventDefault(),k0.current={path:u,dragging:!1,startX:O.clientX,startY:O.clientY};let d=(G0)=>{let X0=k0.current;if(!X0?.path)return;let _0=Math.abs(G0.clientX-X0.startX),P0=Math.abs(G0.clientY-X0.startY),x1=_0>4||P0>4;if(!X0.dragging&&x1)X0.dragging=!0,H0.current=!0,s(!0),e("move"),k1(X0.path),V_(G0.clientX,G0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(X0.dragging){G0.preventDefault(),V_(G0.clientX,G0.clientY);let o1=document.elementFromPoint(G0.clientX,G0.clientY),K_=d1(o1)||D1();if(Q1.current!==K_)U1(K_);X_(K_)}},Y0=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",Y0);let G0=k0.current;if(G0?.dragging&&G0.path){let X0=Q1.current||D1(),_0=l1.current;if(typeof _0==="function")_0(G0.path,X0)}k0.current={path:null,dragging:!1,startX:0,startY:0},e0.current=0,s(!1),e(null),U1(null),L1(),i1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{H0.current=!1},0)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",Y0)},[d1,D1,k1,V_,i1,U1,X_,L1]),M_=C(async(O)=>{let M=Array.from(O?.target?.files||[]);if(M.length===0)return;let u=h.current||".";if(await r1(M,u),h.current=".",O?.target)O.target.value=""},[r1]);return B`
        <aside
            class=${`workspace-sidebar${m?" workspace-drop-active":""}`}
            data-workspace-scale=${u0}
            ref=${f0}
            onDragEnter=${s4}
            onDragOver=${j4}
            onDragLeave=${l_}
            onDrop=${H4}
        >
            <input type="file" multiple style="display:none" ref=${q0} onChange=${M_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${t}
                            class=${`workspace-menu-button${O0?" active":""}`}
                            onClick=${(O)=>{O.stopPropagation(),c0((M)=>!M)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${O0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${O0&&B`
                            <div class="workspace-menu-dropdown" ref=${P} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${J4} disabled=${L0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${a4} disabled=${L0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Q_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${v?" active":""}`} role="menuitem" onClick=${q_}>
                                    ${v?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&B`<div class="workspace-menu-separator"></div>`}
                                ${U&&!_1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z4} disabled=${!E1}>Open in editor</button>
                                `}
                                ${__&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Rename selected</button>
                                `}
                                ${p1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${t4}>Download selected file</button>
                                `}
                                ${H1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y4}>Download selected folder (zip)</button>
                                `}
                                ${D_&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${h4}>Delete selected file</button>
                                `}

                                ${(Y||Q||q)&&B`<div class="workspace-menu-separator"></div>`}
                                ${Y&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Q&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${O4}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${H_} title="New file" disabled=${L0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${v1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${R_}>
                ${L0&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${p&&B`<div class="workspace-loading">Loading…</div>`}
                ${F&&B`<div class="workspace-error">${F}</div>`}
                ${N&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${t0}
                        tabIndex="0"
                        onClick=${p_}
                        onDblClick=${Z_}
                        onKeyDown=${K1}
                        onTouchStart=${u_}
                        onTouchEnd=${E_}
                        onTouchMove=${v4}
                        onTouchCancel=${E_}
                    >
                        ${O_.map(({node:O,depth:M})=>{let u=O.type==="dir",S=O.path===U,d=O.path===H,Y0=u&&V.has(O.path),G0=K0&&O.path===K0,X0=Array.isArray(O.children)&&O.children.length>0?O.children.length:Number(O.child_count)||0;return B`
                                <div
                                    key=${O.path}
                                    class=${`workspace-row${S?" selected":""}${G0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+M*u4.indentPx}px`}}
                                    data-path=${O.path}
                                    data-type=${O.type}
                                    onMouseDown=${p4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${u?Y0?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${u?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${u?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${d?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${a}
                                                value=${J}
                                                onInput=${(_0)=>W(_0?.target?.value||"")}
                                                onKeyDown=${(_0)=>{if(_0.key==="Enter")_0.preventDefault(),f1();else if(_0.key==="Escape")_0.preventDefault(),M1()}}
                                                onBlur=${M1}
                                                onClick=${(_0)=>_0.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${O.name}</span></span>`}
                                    ${u&&!Y0&&X0>0&&B`
                                        <span class="workspace-count">${X0}</span>
                                    `}
                                    ${u&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${O.path}
                                            title="Upload files to this folder"
                                            onClick=${I5}
                                            disabled=${L0}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${U&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${b4} onTouchStart=${f_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${H_} title="New file" disabled=${L0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!_1&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>E1&&j1.current?.(U,A)}
                                    title=${z4}
                                    disabled=${!E1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${g4}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${_1?B`
                                    <button class="workspace-download" onClick=${J1}
                                        title="Upload files to this folder" disabled=${L0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${H8(U,v)}
                                        title="Download folder as zip" onClick=${(O)=>O.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${c_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${T&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&B`<div class="workspace-error">${A.error}</div>`}
                    ${_1&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${E0?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${E0?.error&&B`<div class="workspace-error">${E0.error}</div>`}
                        ${E0?.payload&&E0.payload.segments?.length>0&&B`
                            <${AX} payload=${E0.payload} />
                        `}
                        ${E0?.payload&&(!E0.payload.segments||E0.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!_1&&B`
                        <div class="workspace-preview-body" ref=${J0}></div>
                    `}
                    ${f&&B`
                        <div class="workspace-download-card">
                            <${EX} mediaId=${f} />
                        </div>
                    `}
                </div>
            `}
            ${Q0&&B`
                <div class="workspace-drag-ghost" ref=${S_}>${Q0.label}</div>
            `}
        </aside>
    `}var kX=new Set(["kanban-editor","mindmap-editor"]);function MX(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function SY(_,$,j){let Z=MX(_,$,j);return Z!=null&&kX.has(Z)}var IX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,xX=/\.(csv|tsv)$/i,TX=/\.pdf$/i,CX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,wY=/\.drawio(\.xml|\.svg|\.png)?$/i;function RY({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Y,onCloseAll:Q,onTogglePin:q,onTogglePreview:K,onEditSource:N,previewTabs:G,paneOverrides:V,onToggleDock:X,dockVisible:U,onToggleZen:L,zenMode:H,onPopOutTab:D}){let[J,W]=g(null),A=x(null);b(()=>{if(!J)return;let F=(I)=>{if(I.type==="keydown"&&I.key!=="Escape")return;W(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[J]),b(()=>{let F=(I)=>{if(I.ctrlKey&&I.key==="Tab"){if(I.preventDefault(),!_.length)return;let v=_.findIndex((o)=>o.id===$);if(I.shiftKey){let o=_[(v-1+_.length)%_.length];j?.(o.id)}else{let o=_[(v+1)%_.length];j?.(o.id)}return}if((I.ctrlKey||I.metaKey)&&I.key==="w"){let v=document.querySelector(".editor-pane");if(v&&v.contains(document.activeElement)){if(I.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let E=C((F,I)=>{if(F.button===1){F.preventDefault(),Z?.(I);return}if(F.button===0)j?.(I)},[j,Z]),f=C((F,I)=>{F.preventDefault(),W({id:I,x:F.clientX,y:F.clientY})},[]),y=C((F)=>{F.preventDefault(),F.stopPropagation()},[]),p=C((F,I)=>{F.preventDefault(),F.stopPropagation(),Z?.(I)},[Z]);b(()=>{if(!$||!A.current)return;let F=A.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let l=C((F)=>{if(!(V instanceof Map))return null;return V.get(F)||null},[V]),T=w0(()=>_.find((F)=>F.id===J?.id)||null,[J?.id,_]),k=w0(()=>{let F=J?.id;if(!F)return!1;return SY(F,l(F),(I)=>p0.resolve(I))},[J?.id,l]);if(!_.length)return null;return B`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((F)=>B`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(I)=>E(I,F.id)}
                    onContextMenu=${(I)=>f(I,F.id)}
                >
                    ${F.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${F.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${y}
                        onClick=${(I)=>p(I,F.id)}
                        title=${F.dirty?"Unsaved changes":"Close"}
                        aria-label=${F.dirty?"Unsaved changes":`Close ${F.label}`}
                    >
                        ${F.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${X&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${X}
                    title=${`${U?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${U?"Hide":"Show"} terminal`}
                    aria-pressed=${U?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${L&&B`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${L}
                    title=${`${H?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${H?"Exit":"Enter"} zen mode`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${H?B`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:B`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${J&&B`
            <div class="tab-context-menu" style=${{left:J.x+"px",top:J.y+"px"}}>
                <button onClick=${()=>{Z?.(J.id),W(null)}}>Close</button>
                <button onClick=${()=>{Y?.(J.id),W(null)}}>Close Others</button>
                <button onClick=${()=>{Q?.(),W(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(J.id),W(null)}}>
                    ${T?.pinned?"Unpin":"Pin"}
                </button>
                ${k&&N&&B`
                    <button onClick=${()=>{N(J.id),W(null)}}>Edit Source</button>
                `}
                ${D&&B`
                    <button onClick=${()=>{let F=_.find((I)=>I.id===J.id);D(J.id,F?.label),W(null)}}>Open in Window</button>
                `}
                ${K&&/\.(md|mdx|markdown)$/i.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{K(J.id),W(null)}}>
                        ${G?.has(J.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${IX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(J.id),I=J.id.split("/").pop()||"document",v="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(I);window.open(v,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${xX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/csv-viewer/?path="+encodeURIComponent(J.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${TX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(J.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${CX.test(J.id)&&!wY.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/image-viewer/?path="+encodeURIComponent(J.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${wY.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(J.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function PX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Z,zenMode:Y}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Z?" chat-only":""}${Y?" zen-mode":""}`}function uY(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:Q,isRenameBranchFormOpen:q,closeRenameCurrentBranchForm:K,handleRenameCurrentBranch:N,renameBranchNameDraft:G,renameBranchNameInputRef:V,setRenameBranchNameDraft:X,renameBranchDraftState:U,isRenamingBranch:L,addFileRef:H,openEditor:D,openTerminalTab:J,openVncTab:W,hasDockPanes:A,toggleDock:E,dockVisible:f,handleSplitterMouseDown:y,handleSplitterTouchStart:p,showEditorPaneContainer:l,tabStripTabs:T,tabStripActiveId:k,handleTabActivate:F,handleTabClose:I,handleTabCloseOthers:v,handleTabCloseAll:o,handleTabTogglePin:m,handleTabTogglePreview:s,handleTabEditSource:r,previewTabs:e,tabPaneOverrides:Q0,toggleZenMode:$0,handlePopOutPane:K0,isWebAppMode:W0,editorContainerRef:L0,editorInstanceRef:R0,handleDockSplitterMouseDown:E0,handleDockSplitterTouchStart:z0,TERMINAL_TAB_PATH:v0,dockContainerRef:A0,handleEditorSplitterMouseDown:u0,handleEditorSplitterTouchStart:m0,searchQuery:O0,isIOSDevice:c0,currentBranchRecord:N0,currentChatJid:M0,currentChatBranches:d0,handleBranchPickerChange:o0,formatBranchPickerLabel:S1,openRenameCurrentBranchForm:Y1,handlePruneCurrentBranch:n0,currentHashtag:V1,handleBackToTimeline:j1,activeSearchScopeLabel:s0,posts:U0,isMainTimelineView:f0,hasMore:t0,loadMore:a,timelineRef:q0,handleHashtagClick:h,addMessageRef:i,scrollToMessage:F0,openFileFromPill:k0,handleDeletePost:I0,handleOpenFloatingWidget:H0,agents:C0,userProfile:b0,removingPostIds:B0,agentStatus:S0,isCompactionStatus:J0,agentDraft:j0,agentPlan:P,agentThought:t,pendingRequest:V0,intentToast:D0,currentTurnId:l0,steerQueued:e0,handlePanelToggle:Q1,btwSession:O1,closeBtwPanel:m1,handleBtwRetry:S_,handleBtwInject:a1,floatingWidget:u1,handleCloseFloatingWidget:l1,handleFloatingWidgetEvent:h1,extensionStatusPanels:a0,pendingExtensionPanelActions:n1,handleExtensionPanelAction:a_,searchOpen:t1,followupQueueItems:t_,handleInjectQueuedFollowup:h_,handleRemoveQueuedFollowup:D1,viewStateRef:d1,loadPosts:A1,scrollToBottom:U1,searchScope:L1,handleSearch:X_,setSearchScope:V_,enterSearchMode:k1,exitSearchMode:i1,fileRefs:Z1,removeFileRef:M1,clearFileRefs:e1,setFileRefsFromCompose:f1,messageRefs:e_,removeMessageRef:H_,clearMessageRefs:_4,setMessageRefsFromCompose:J_,handleCreateSessionFromCompose:B4,handleRestoreBranch:O_,attachActiveEditorFile:w_,followupQueueCount:u4,handleBtwIntercept:f4,handleMessageResponse:_1,handleComposeSubmitError:E1,handlePopOutChat:z4,isComposeBoxAgentActive:__,activeChatAgents:D_,connectionStatus:p1,activeModel:H1,activeModelUsage:w1,activeThinkingLevel:q1,supportsThinking:$_,contextUsage:j_,notificationsEnabled:Z_,notificationPermission:p_,handleToggleNotifications:v1,setActiveModel:R1,applyModelState:Y_,setPendingRequest:R_,pendingRequestRef:W1,toggleWorkspace:A_}=_;return B`
    <div class=${PX({workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:Q})} ref=${$}>
      ${q&&B`
        <div class="rename-branch-overlay" onPointerDown=${(K1)=>{if(K1.target===K1.currentTarget)K()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(K1)=>{K1.preventDefault(),N(G)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${V}
              value=${G}
              onInput=${(K1)=>{let u_=K1.currentTarget?.value??"";X(String(u_))}}
              onKeyDown=${(K1)=>{if(K1.key==="Escape")K1.preventDefault(),K()}}
              autocomplete="off"
              placeholder="Handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${U.kind||"info"}`}>
              ${U.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${L||!U.canSubmit}>
                ${L?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${K}
                disabled=${L}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Y&&B`
        <${yY}
          onFileSelect=${H}
          visible=${j}
          active=${j||Z}
          onOpenEditor=${D}
          onOpenTerminalTab=${J}
          onOpenVncTab=${W}
          onToggleTerminal=${A?E:void 0}
          terminalVisible=${Boolean(A&&f)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${A_}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${y} onTouchStart=${p}></div>
      `}
      ${l&&B`
        <div class="editor-pane-container">
          ${Q&&B`<div class="zen-hover-zone"></div>`}
          ${Z&&B`
            <${RY}
              tabs=${T}
              activeId=${k}
              onActivate=${F}
              onClose=${I}
              onCloseOthers=${v}
              onCloseAll=${o}
              onTogglePin=${m}
              onTogglePreview=${s}
              onEditSource=${r}
              previewTabs=${e}
              paneOverrides=${Q0}
              onToggleDock=${A?E:void 0}
              dockVisible=${A&&f}
              onToggleZen=${$0}
              zenMode=${Q}
              onPopOutTab=${W0?void 0:K0}
            />
          `}
          ${Z&&B`<div class="editor-pane-host" ref=${L0}></div>`}
          ${Z&&k&&e.has(k)&&B`
            <${d8}
              getContent=${()=>R0.current?.getContent?.()}
              path=${k}
              onClose=${()=>s(k)}
            />
          `}
          ${A&&f&&B`<div class="dock-splitter" onMouseDown=${E0} onTouchStart=${z0}></div>`}
          ${A&&B`<div class=${`dock-panel${f?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!W0&&B`
                  <button class="dock-panel-action" onClick=${()=>K0(v0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${E} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="dock-panel-body" ref=${A0}></div>
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${u0} onTouchStart=${m0}></div>
      `}
      <div class="container">
        ${O0&&c0()&&B`<div class="search-results-spacer"></div>`}
        ${Y&&B`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${N0?.agent_name?`@${N0.agent_name}`:M0}
              </span>
              <span class="chat-window-header-subtitle">${N0?.chat_jid||M0}</span>
            </div>
            <div class="chat-window-header-actions">
              ${d0.length>1&&B`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${M0}
                    onChange=${(K1)=>o0(K1.currentTarget.value)}
                  >
                    ${d0.map((K1)=>B`
                      <option key=${K1.chat_jid} value=${K1.chat_jid}>
                        ${S1(K1,{currentChatJid:M0})}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${N0?.chat_jid&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${Y1}
                  title=${L?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${L}
                >
                  ${L?"Renaming…":"Rename"}
                </button>
              `}
              ${N0?.chat_jid&&N0.chat_jid!==(N0.root_chat_jid||N0.chat_jid)&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${n0}
                  title="Prune this branch agent"
                  aria-label="Prune this branch agent"
                >
                  Prune
                </button>
              `}
              <span class="chat-window-header-badge">Chat only</span>
            </div>
          </div>
        `}
        ${(V1||O0)&&B`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${j1}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${V1?`#${V1}`:`Search: ${O0} · ${s0}`}</span>
          </div>
        `}
        <${BY}
          posts=${U0}
          hasMore=${f0?t0:!1}
          onLoadMore=${f0?a:void 0}
          timelineRef=${q0}
          onHashtagClick=${h}
          onMessageRef=${i}
          onScrollToMessage=${F0}
          onFileRef=${k0}
          onPostClick=${void 0}
          onDeletePost=${I0}
          onOpenWidget=${H0}
          emptyMessage=${V1?`No posts with #${V1}`:O0?`No results for "${O0}"`:void 0}
          agents=${C0}
          user=${b0}
          reverse=${f0}
          removingPostIds=${B0}
          searchQuery=${O0}
        />
        <${q3}
          status=${J0(S0)?null:S0}
          draft=${j0}
          plan=${P}
          thought=${t}
          pendingRequest=${V0}
          intent=${D0}
          turnId=${l0}
          steerQueued=${e0}
          onPanelToggle=${Q1}
          showExtensionPanels=${!1}
        />
        <${oZ}
          session=${O1}
          onClose=${m1}
          onRetry=${S_}
          onInject=${a1}
        />
        <${sZ}
          widget=${u1}
          onClose=${l1}
          onWidgetEvent=${h1}
        />
        <${q3}
          extensionPanels=${Array.from(a0.values())}
          pendingPanelActions=${n1}
          onExtensionPanelAction=${a_}
          turnId=${l0}
          steerQueued=${e0}
          onPanelToggle=${Q1}
          showCorePanels=${!1}
        />
        <${Y3}
          items=${t1?[]:t_}
          onInjectQueuedFollowup=${h_}
          onRemoveQueuedFollowup=${D1}
          onOpenFilePill=${k0}
        />
        <${rZ}
          onPost=${()=>{let{searchQuery:K1,searchOpen:u_}=d1.current||{};if(!K1&&!u_)A1(),U1()}}
          onFocus=${U1}
          searchMode=${t1}
          searchScope=${L1}
          onSearch=${X_}
          onSearchScopeChange=${V_}
          onEnterSearch=${k1}
          onExitSearch=${i1}
          fileRefs=${Z1}
          onRemoveFileRef=${M1}
          onClearFileRefs=${e1}
          onSetFileRefs=${f1}
          messageRefs=${e_}
          onRemoveMessageRef=${H_}
          onClearMessageRefs=${_4}
          onSetMessageRefs=${J_}
          onSwitchChat=${o0}
          onRenameSession=${N}
          isRenameSessionInProgress=${L}
          onCreateSession=${B4}
          onDeleteSession=${n0}
          onRestoreSession=${O_}
          activeEditorPath=${Y?null:k}
          onAttachEditorFile=${Y?void 0:w_}
          onOpenFilePill=${k0}
          followupQueueCount=${u4}
          followupQueueItems=${t_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${h_}
          onRemoveQueuedFollowup=${D1}
          onSubmitIntercept=${f4}
          onMessageResponse=${_1}
          onSubmitError=${E1}
          onPopOutChat=${W0?void 0:z4}
          isAgentActive=${__}
          activeChatAgents=${D_}
          currentChatJid=${M0}
          connectionStatus=${p1}
          activeModel=${H1}
          modelUsage=${w1}
          thinkingLevel=${q1}
          supportsThinking=${$_}
          contextUsage=${j_}
          notificationsEnabled=${Z_}
          notificationPermission=${p_}
          onToggleNotifications=${v1}
          onModelChange=${R1}
          onModelStateChange=${Y_}
          statusNotice=${J0(S0)?S0:null}
        />
        <${$Y}
          request=${V0}
          onRespond=${()=>{R_(null),W1.current=null}}
        />
      </div>
    </div>
  `}function yX(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function _6(_,$){return{text:_,totalLines:yX(_,$)}}function O3(_,$){return{text:$?.text||"",totalLines:X9(_),fullText:_}}function fY(_,$,j){return j==="replace"?$:`${_||""}${$}`}function vY(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function bY(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function o4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function k5(_,$){return Boolean(_)&&!Boolean($)}function gY(_,$){return _||$||null}function $6(_){return _?.turn_id||_?.turnId||null}function M5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function D3(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function mY(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function SX(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function hY(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:SX($,j),panelKey:typeof $?.key==="string"?$.key:""}}function pY(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var wX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function cY(_){return wX.has(String(_||"").trim())}function RX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function A3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(RX(_),{detail:Z})),!0}function lY(_,$,j){let Z=$?.turn_id,Y=$?.chat_jid,Q=typeof Y==="string"&&Y.trim()?Y.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Z,eventChatJid:Q,isGlobalUiEvent:q,isCurrentChatEvent:Q?Q===j:q}}function nY(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function dY(_,$,j){let{currentChatJid:Z,updateAgentProfile:Y,updateUserProfile:Q,currentTurnIdRef:q,activeChatJidRef:K,pendingRequestRef:N,draftBufferRef:G,thoughtBufferRef:V,steerQueuedTurnIdRef:X,thoughtExpandedRef:U,draftExpandedRef:L,draftThrottleRef:H,thoughtThrottleRef:D,viewStateRef:J,followupQueueItemsRef:W,dismissedQueueRowIdsRef:A,scrollToBottomRef:E,hasMoreRef:f,loadMoreRef:y,lastAgentResponseRef:p,wasAgentActiveRef:l,setActiveTurn:T,applyLiveGeneratedWidgetUpdate:k,setFloatingWidget:F,clearLastActivityFlag:I,handleUiVersionDrift:v,setAgentStatus:o,setAgentDraft:m,setAgentPlan:s,setAgentThought:r,setPendingRequest:e,clearAgentRunState:Q0,getAgentStatus:$0,noteAgentActivity:K0,showLastActivity:W0,refreshTimeline:L0,refreshModelAndQueueState:R0,refreshActiveChatAgents:E0,refreshCurrentChatBranches:z0,notifyForFinalResponse:v0,setContextUsage:A0,refreshContextUsage:u0,refreshQueueState:m0,setFollowupQueueItems:O0,clearQueuedSteerStateIfStale:c0,setSteerQueuedTurnId:N0,applyModelState:M0,getAgentContext:d0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:S1,refreshActiveEditorFromWorkspace:Y1,showIntentToast:n0,removeStalledPost:V1,setPosts:j1,preserveTimelineScrollTop:s0}=j,{turnId:U0,isCurrentChatEvent:f0}=lY(_,$,Z);if(f0)Y($),Q($);if(_==="ui_theme"){O7($);return}let t0=mY(_);if(t0.kind==="update"){if(!f0)return;if(t0.shouldAdoptTurn&&k5(U0,q.current))T(U0);k($,t0.fallbackStatus||"streaming");return}if(t0.kind==="close"){if(!f0)return;F((h)=>Aj(h,$));return}if(_?.startsWith("agent_")&&!nY(_))I();if(_==="connected"){if(v($?.app_asset_version))return;o(null),m({text:"",totalLines:0}),s(""),r({text:"",totalLines:0}),e(null),N.current=null,Q0();let h=Z;if($0(h).then((i)=>{if(K.current!==h)return;if(!i||i.status!=="active"||!i.data)return;let F0=i.data,k0=$6(F0);if(k0)T(k0);K0({clearSilence:!0}),W0(F0);let I0=M5(i.thought);if(I0)V.current=I0.text,r(I0);let H0=M5(i.draft);if(H0)G.current=H0.text,m(H0)}).catch((i)=>{console.warn("Failed to fetch agent status:",i)}),s_(J.current))L0();R0();return}if(_==="agent_status"){if(!f0){if($?.type==="done"||$?.type==="error")E0(),z0();return}if($.type==="done"||$.type==="error"){if(o4(U0,q.current))return;if($.type==="done"){if(v0(U0||q.current),s_(J.current))L0();if($.context_usage)A0($.context_usage)}if(u0(),l.current=!1,Q0(),A.current.clear(),E0(),m0(),m({text:"",totalLines:0}),s(""),r({text:"",totalLines:0}),e(null),$.type==="error")o({type:"error",title:$.title||"Agent error"}),setTimeout(()=>o(null),8000);else o(null)}else{if(U0)T(U0);if(K0({running:!0,clearSilence:!0}),$.type==="thinking")G.current="",V.current="",m({text:"",totalLines:0}),s(""),r({text:"",totalLines:0});o((h)=>{if(h&&h.type===$.type&&h.title===$.title)return h;return $})}return}if(_==="agent_steer_queued"){if(!f0)return;if(o4(U0,q.current))return;let h=gY(U0,q.current);if(!h)return;X.current=h,N0(h);return}if(_==="agent_followup_queued"){if(!f0)return;O0((h)=>M9(h,$)),m0();return}if(_==="agent_followup_consumed"){if(!f0)return;let h=A5(W.current,$);if(h)c0(h.remainingQueueCount),O0((i)=>S4(i,h.rowId).items);if(m0(),s_(J.current))L0();return}if(_==="agent_followup_removed"){if(!f0)return;let h=A5(W.current,$);if(h)A.current.add(h.rowId),c0(h.remainingQueueCount),O0((i)=>S4(i,h.rowId).items);m0();return}if(_==="agent_draft_delta"){if(!f0)return;if(o4(U0,q.current))return;if(k5(U0,q.current))T(U0);K0({running:!0,clearSilence:!0}),G.current=vY(G.current,$);let h=Date.now();if(!H.current||h-H.current>=100){H.current=h;let i=G.current;if(L.current)m((F0)=>O3(i,F0));else m(_6(i,null))}return}if(_==="agent_draft"){if(!f0)return;if(o4(U0,q.current))return;if(k5(U0,q.current))T(U0);K0({running:!0,clearSilence:!0});let h=$.text||"",i=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")s((F0)=>fY(F0,h,i));else if(!L.current)G.current=h,m(_6(h,$.total_lines));return}if(_==="agent_thought_delta"){if(!f0)return;if(o4(U0,q.current))return;if(k5(U0,q.current))T(U0);K0({running:!0,clearSilence:!0}),V.current=bY(V.current,$);let h=Date.now();if(U.current&&(!D.current||h-D.current>=100)){D.current=h;let i=V.current;r((F0)=>O3(i,F0))}return}if(_==="agent_thought"){if(!f0)return;if(o4(U0,q.current))return;if(k5(U0,q.current))T(U0);K0({running:!0,clearSilence:!0});let h=$.text||"";if(!U.current)V.current=h,r(_6(h,$.total_lines));return}if(_==="model_changed"){if(!f0)return;M0($);let h=Z;d0(h).then((i)=>{if(K.current!==h)return;if(i)A0(i)}).catch(()=>{});return}let a=hY(_,$,Z);if(a.isStatusPanelWidgetEvent){if(a.eventChatJid!==Z)return;if(!a.panelKey)return;if(o0((h)=>f9(h,$)),v9($))S1((h)=>f8(h,a.panelKey));A3(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));Y1($?.updates);return}if(cY(_)){if(!f0)return;A3(_,$);let h=pY(_,$);if(h)n0(h.title,h.detail,h.kind,h.durationMs);return}let q0=s_(J.current);if(_==="agent_response"){if(!f0)return;V1(),p.current={post:$,turnId:q.current}}if(h9(_,f0,q0))j1((h)=>p9(h,$)),E.current?.();if(_==="interaction_updated"){if(!c$(f0,q0))return;j1((h)=>c9(h,$))}if(_==="interaction_deleted"){if(!c$(f0,q0))return;let h=$?.ids||[];if(h.length){if(s0(()=>{j1((i)=>l9(i,h))}),f.current)y.current?.({preserveScroll:!0,preserveMode:"top"})}}}async function iY(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Z,wasAgentActiveRef:Y,viewStateRef:Q,refreshTimeline:q,clearAgentRunState:K,agentStatusRef:N,pendingRequestRef:G,thoughtBufferRef:V,draftBufferRef:X,setAgentStatus:U,setAgentDraft:L,setAgentPlan:H,setAgentThought:D,setPendingRequest:J,setActiveTurn:W,noteAgentActivity:A,clearLastActivityFlag:E}=_,f=$;try{let y=await j(f);if(Z.current!==f)return null;if(!y||y.status!=="active"||!y.data){if(Y.current&&s_(Q.current))q();return Y.current=!1,K(),N.current=null,U(null),L({text:"",totalLines:0}),H(""),D({text:"",totalLines:0}),J(null),G.current=null,y??null}Y.current=!0;let p=y.data;N.current=p;let l=$6(p);if(l)W(l);A({running:!0,clearSilence:!0}),E(),U(p);let T=M5(y.thought);if(T)D((F)=>{if(D3(F,T.text))return F;return V.current=T.text,T});let k=M5(y.draft);if(k)L((F)=>{if(D3(F,k.text))return F;return X.current=k.text,k});return y}catch(y){return console.warn("Failed to fetch agent status:",y),null}}async function rY(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Z,silentRecoveryRef:Y,silenceRefreshMs:Q,viewStateRef:q,refreshTimeline:K,refreshQueueState:N,refreshAgentStatus:G,now:V=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let X=Z.current||null,U=Y.current,L=V();if(U.inFlight)return null;if(U.turnId===X&&L-U.lastAttemptAt<Q)return null;U.inFlight=!0,U.lastAttemptAt=L,U.turnId=X;try{if(s_(q.current))await K();return await N(),await G()}finally{U.inFlight=!1}}function oY(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Z,lastSilenceNoticeRef:Y,agentStatusRef:Q,silenceWarningMs:q,silenceFinalizeMs:K,silenceRefreshMs:N,isCompactionStatus:G,setAgentStatus:V,reconcileSilentTurn:X,now:U=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let L=Z.current;if(!L)return;let H=U(),D=H-L,J=G(Q.current);if(D>=K){if(!J)V({type:"waiting",title:"Re-syncing after a quiet period…"});X();return}if(D>=q&&H-Y.current>=N){if(!J){let W=Math.floor(D/1000);V({type:"waiting",title:`Waiting for model… No events for ${W}s`})}Y.current=H,X()}}function sY(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:Z,currentTurnIdRef:Y,thoughtExpandedRef:Q,draftExpandedRef:q,draftBufferRef:K,thoughtBufferRef:N,pendingRequestRef:G,lastAgentResponseRef:V,stalledPostIdRef:X,scrollToBottomRef:U,setCurrentTurnId:L,setAgentDraft:H,setAgentPlan:D,setAgentThought:J,setPendingRequest:W,setAgentStatus:A,setPosts:E,dedupePosts:f,now:y=()=>Date.now(),nowIso:p=()=>new Date().toISOString()}=_;if(!$.current)return;$.current=!1,j.current=0,Z.current=null,Y.current=null,L(null),Q.current=!1,q.current=!1;let l=(K.current||"").trim();if(K.current="",N.current="",H({text:"",totalLines:0}),D(""),J({text:"",totalLines:0}),W(null),G.current=null,V.current=null,!l){A({type:"error",title:"Response stalled - No content received"});return}let k=`${l}${`

⚠️ Response may be incomplete - the model stopped responding`}`,F=y(),I=p(),v={id:F,timestamp:I,data:{type:"agent_response",content:k,agent_id:"default",is_local_stall:!0}};X.current=F,E((o)=>o?f([...o,v]):[v]),U.current?.(),A(null)}function E3(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Z=Array.isArray(_)?_:[];if(Z.includes(j))return Z;return[...Z,j]}function k3(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Z=$.trim();if(!Z)return j;if(!j.includes(Z))return j;return j.filter((Y)=>Y!==Z)}function M3(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Z of _){if(typeof Z!=="string")continue;let Y=Z.trim();if(!Y||j.has(Y))continue;j.add(Y),$.push(Y)}return $}async function aY(_){let{hashtag:$,setCurrentHashtag:j,setPosts:Z,loadPosts:Y}=_;j($),Z(null),await Y($)}async function tY(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:Z,loadPosts:Y}=_;$(null),j(null),Z(null),await Y()}async function eY(_){let{query:$,scope:j,currentChatJid:Z,currentRootChatJid:Y,searchPosts:Q,setSearchScope:q,setSearchQuery:K,setCurrentHashtag:N,setPosts:G,setHasMore:V}=_,X=typeof $==="string"?$.trim():"";if(!X)return;let U=j==="root"||j==="all"?j:"current";q(U),K(X),N(null),G(null);try{let L=await Q(X,50,0,Z,U,Y);G(Array.isArray(L?.results)?L.results:[]),V(!1)}catch(L){console.error("Failed to search:",L),G([])}}async function _Q(_){let{post:$,posts:j,currentChatJid:Z,deletePost:Y,preserveTimelineScrollTop:Q,setPosts:q,setRemovingPostIds:K,hasMoreRef:N,loadMoreRef:G,confirm:V=(W)=>window.confirm(W),showAlert:X=(W)=>alert(W),scheduleTimeout:U=(W,A)=>{setTimeout(W,A)}}=_;if(!$)return;let L=$.id,H=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():Z,D=j?.filter((W)=>W?.data?.thread_id===L&&W?.id!==L).length||0;if(D>0){if(!V(`Delete this message and its ${D} replies?`))return}let J=(W)=>{if(!W.length)return;K((A)=>{let E=new Set(A);return W.forEach((f)=>E.add(f)),E}),U(()=>{if(Q(()=>{q((A)=>A?A.filter((E)=>!W.includes(E.id)):A)}),K((A)=>{let E=new Set(A);return W.forEach((f)=>E.delete(f)),E}),N.current)G.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let W=await Y(L,D>0,H);if(W?.ids?.length)J(W.ids)}catch(W){let A=W instanceof Error?W.message:String(W||"");if(D===0&&A.includes("Replies exist")){if(!V("Delete this message and its replies?"))return;let f=await Y(L,!0,H);if(f?.ids?.length)J(f.ids);return}console.error("Failed to delete post:",W),X(`Failed to delete message: ${A}`)}}async function $Q(_){let{id:$,targetChatJid:j,currentChatJid:Z,getThread:Y,setPosts:Q,getElementById:q=(X)=>document.getElementById(X),scheduleRaf:K=(X)=>requestAnimationFrame(X),scheduleTimeout:N=(X,U)=>{setTimeout(X,U)}}=_,G=(X)=>{X.scrollIntoView({behavior:"smooth",block:"center"}),X.classList.add("post-highlight"),N(()=>X.classList.remove("post-highlight"),2000)},V=q(`post-${$}`);if(V){G(V);return}try{let X=typeof j==="string"&&j.trim()?j.trim():Z,L=(await Y($,X))?.thread?.[0];if(!L)return;Q((H)=>{if(!H)return[L];if(H.some((D)=>D.id===L.id))return H;return[...H,L]}),K(()=>{N(()=>{let H=q(`post-${$}`);if(H)G(H)},50)})}catch(X){console.error("[scrollToMessage] Failed to fetch message",$,X)}}var uX=QZ(),jQ=k6,fX=I6,vX=T6,bX=w6,gX=R6,I3=C6,x3=s1(c1,"getAgentContext",null),mX=s1(c1,"getAutoresearchStatus",null),hX=s1(c1,"stopAutoresearch",{status:"ok"}),pX=s1(c1,"dismissAutoresearch",{status:"ok"}),ZQ=s1(c1,"getAgentModels",{current:null,models:[]}),YQ=s1(c1,"getActiveChatAgents",{chats:[]}),T3=s1(c1,"getChatBranches",{chats:[]}),cX=s1(c1,"renameChatBranch",null),lX=s1(c1,"pruneChatBranch",null),nX=s1(c1,"restoreChatBranch",null),QQ=s1(c1,"getAgentQueueState",{count:0}),qQ=s1(c1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),KQ=s1(c1,"removeAgentQueueItem",{removed:!1}),dX=s1(c1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});p0.register(c6);p0.register(E$);p0.register(A$);p0.register(k$);p0.register(M$);p0.register(I$);p0.register(T$);p0.register(C$);p0.register(y$);p0.register(R$);p0.register(u$);p0.register(W$);l6();p0.register(i6);p0.register(r6);function iX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:Q,panePopoutLabel:q,branchLoaderMode:K,branchLoaderSourceChatJid:N}=w0(()=>NZ(_),[_]),[G,V]=g("disconnected"),[X,U]=g(()=>G4()),[L,H]=g(null),[D,J]=g(null),[W,A]=g(!1),[E,f]=g("current"),[y,p]=g([]),[l,T]=g([]),[k,F]=g(null),{agentStatus:I,setAgentStatus:v,agentDraft:o,setAgentDraft:m,agentPlan:s,setAgentPlan:r,agentThought:e,setAgentThought:Q0,pendingRequest:$0,setPendingRequest:K0,currentTurnId:W0,setCurrentTurnId:L0,steerQueuedTurnId:R0,setSteerQueuedTurnId:E0,lastAgentEventRef:z0,lastSilenceNoticeRef:v0,isAgentRunningRef:A0,draftBufferRef:u0,thoughtBufferRef:m0,pendingRequestRef:O0,stalledPostIdRef:c0,currentTurnIdRef:N0,steerQueuedTurnIdRef:M0,thoughtExpandedRef:d0,draftExpandedRef:o0}=j9(),[S1,Y1]=g({}),[n0,V1]=g(null),[j1,s0]=g(null),[U0,f0]=g(!1),[t0,a]=g(null),[q0,h]=g([]),[i,F0]=g([]),[k0,I0]=g(null),[H0,C0]=g(()=>new Map),[b0,B0]=g(()=>new Set),[S0,J0]=g([]),[j0,P]=g(!1),[t,V0]=g(()=>KZ()),[D0,l0]=g(null),e0=x(new Set),Q1=w0(()=>q0.find((R)=>R?.chat_jid===j)||null,[q0,j]),O1=w0(()=>i.find((R)=>R?.chat_jid===j)||Q1||null,[Q1,i,j]),m1=O1?.root_chat_jid||Q1?.root_chat_jid||j,S_=qZ(E),[a1,u1]=g(()=>({status:K?"running":"idle",message:K?"Preparing a new chat branch…":""})),l1=S0.length,h1=x(new Set),a0=x([]),n1=x(new Set),a_=x(0),t1=x({inFlight:!1,lastAttemptAt:0,turnId:null});h1.current=new Set(S0.map((R)=>R.row_id)),a0.current=S0;let{notificationsEnabled:t_,notificationPermission:h_,toggleNotifications:D1,notify:d1}=_9(),[A1,U1]=g(()=>new Set),[L1,X_]=g(()=>H5("workspaceOpen",!0)),V_=x(null),{editorOpen:k1,tabStripTabs:i1,tabStripActiveId:Z1,previewTabs:M1,tabPaneOverrides:e1,openEditor:f1,closeEditor:e_,handleTabClose:H_,handleTabActivate:_4,handleTabCloseOthers:J_,handleTabCloseAll:B4,handleTabTogglePin:O_,handleTabTogglePreview:w_,handleTabEditSource:u4,revealInExplorer:f4}=Y9({onTabClosed:(R)=>V_.current?.(R)}),_1=x(null),E1=x(null),z4=x(null),__=x(null),D_=p0.getDockPanes().length>0,[p1,H1]=g(!1),w1=C(()=>H1((R)=>!R),[]),q1=C(()=>{f1(V5,{label:"Terminal"})},[f1]),$_=C(()=>{f1(L4,{label:"VNC"})},[f1]),j_=w0(()=>rj(i1,Z1),[Z1,i1]),Z_=w0(()=>oj(e1,Z1),[e1,Z1]),p_=w0(()=>sj(q,j_,Q),[j_,q,Q]),v1=w0(()=>aj(i1,M1,Z1),[M1,Z1,i1]),R1=w0(()=>tj(Q,L4),[Q]),Y_=w0(()=>ej(Q,V5,v1,R1),[R1,v1,Q]),R_=_Z(Y,Z,k1,D_,p1),[W1,A_]=g(!1),K1=x(!1),u_=C(()=>{if(!k1||Z)return;if(K1.current=p1,p1)H1(!1);A_(!0)},[k1,Z,p1]),E_=C(()=>{if(!W1)return;if(A_(!1),K1.current)H1(!0),K1.current=!1},[W1]),v4=C(()=>{if(W1)E_();else u_()},[W1,u_,E_]);b(()=>{if(W1&&!k1)E_()},[W1,k1,E_]),b(()=>{if(!Y||!Q)return;if(r0.getActiveId()===Q)return;f1(Q,q?{label:q}:void 0)},[f1,q,Y,Q]),b(()=>{let R=_1.current;if(!R)return;if(E1.current)E1.current.dispose(),E1.current=null;let Z0=Z1;if(!Z0)return;let T0={path:Z0,mode:"edit"},N1=(Z_?p0.get(Z_):null)||p0.resolve(T0)||p0.get("editor");if(!N1){R.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let g0=N1.mount(R,T0);E1.current=g0,g0.onDirtyChange?.((P1)=>{r0.setDirty(Z0,P1)}),g0.onSaveRequest?.(()=>{}),g0.onClose?.(()=>{e_()});let N_=r0.getViewState(Z0);if(N_&&typeof g0.restoreViewState==="function")requestAnimationFrame(()=>g0.restoreViewState(N_));if(typeof g0.onViewStateChange==="function")g0.onViewStateChange((P1)=>{r0.saveViewState(Z0,P1)});return requestAnimationFrame(()=>g0.focus()),()=>{if(E1.current===g0)g0.dispose(),E1.current=null}},[Z1,Z_,e_]);let b4=C(async(R)=>{let Z0=typeof Z1==="string"?Z1.trim():"",T0=E1.current;if(!Z0||!T0?.setContent)return;if(typeof T0.isDirty==="function"&&T0.isDirty())return;if(!(Array.isArray(R)&&R.length>0?R.some((g0)=>{let N_=Array.isArray(g0?.changed_paths)?g0.changed_paths.map((g1)=>typeof g1==="string"?g1.trim():"").filter(Boolean):[];if(N_.length>0)return N_.some((g1)=>g1==="."||g1===Z0);let P1=typeof g0?.path==="string"?g0.path.trim():"";return!P1||P1==="."||P1===Z0}):!0))return;try{let g0=await R5(Z0,1e6,"edit"),N_=typeof g0?.text==="string"?g0.text:"",P1=typeof g0?.mtime==="string"&&g0.mtime.trim()?g0.mtime.trim():new Date().toISOString();T0.setContent(N_,P1)}catch(g0){console.warn("[workspace_update] Failed to refresh active pane:",g0)}},[Z1]);b(()=>{let R=z4.current;if(__.current)__.current.dispose(),__.current=null;if(!R||!D_||!p1)return;let Z0=p0.getDockPanes()[0];if(!Z0){R.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let T0=Z0.mount(R,{mode:"view"});return __.current=T0,requestAnimationFrame(()=>T0.focus?.()),()=>{if(__.current===T0)T0.dispose(),__.current=null}},[D_,p1]);let[f_,c_]=g({name:"You",avatar_url:null,avatar_background:null}),g4=x(null),$4=x(!1),s4=x(!1),j4=x(!1),l_=x(null),r1=x(j),F4=x(new Map),H4=x(j),I5=x(0),J1=x(0),J4=x({}),a4=x({name:null,avatar_url:null}),Q_=x({currentHashtag:null,searchQuery:null,searchOpen:!1}),q_=x(null),Z4=x(null),m4=x(0),h4=x(0),t4=x(0),Y4=x(null),k_=x(null),x5=x(null),O4=x(null),p4=x(0),M_=x({title:null,avatarBase:null}),O=x(null),M=x(!1),[u,S]=g(!1),d=x(0),[Y0,G0]=g(!1),[X0,_0]=g(""),P0=w0(()=>p8(X0,O1?.agent_name||""),[O1?.agent_name,X0]),x1=x(null),o1=C(()=>{if(O.current)clearTimeout(O.current),O.current=null;F(null)},[]);G9(30000),b(()=>{if(!Y0)return;requestAnimationFrame(()=>{if(Y0)x1.current?.focus(),x1.current?.select?.()})},[Y0]),b(()=>{return J7()},[]),b(()=>{return cj(U)},[]),b(()=>{$1("workspaceOpen",String(L1))},[L1]),b(()=>{return pj()},[]),b(()=>{return()=>{o1()}},[o1]),b(()=>{if(!t){$1(BTW_SESSION_KEY,"");return}$1(BTW_SESSION_KEY,JSON.stringify({question:t.question||"",answer:t.answer||"",thinking:t.thinking||"",error:t.error||null,status:t.status||"success"}))},[t]),b(()=>{J4.current=S1||{}},[S1]),b(()=>{r1.current=j},[j]),b(()=>{a4.current=f_||{name:"You",avatar_url:null,avatar_background:null}},[f_]);let K_=C((R,Z0,T0=null)=>{if(typeof document>"u")return;let N1=(R||"").trim()||"PiClaw";if(M_.current.title!==N1){document.title=N1;let v_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(v_&&v_.getAttribute("content")!==N1)v_.setAttribute("content",N1);M_.current.title=N1}let g0=document.getElementById("dynamic-favicon");if(!g0)return;let N_=g0.getAttribute("data-default")||g0.getAttribute("href")||"/favicon.ico",P1=Z0||N_,g1=Z0?`${P1}|${T0||""}`:P1;if(M_.current.avatarBase!==g1){let v_=Z0?`${P1}${P1.includes("?")?"&":"?"}v=${T0||Date.now()}`:P1;g0.setAttribute("href",v_),M_.current.avatarBase=g1}},[]),T5=C((R)=>{p((Z0)=>E3(Z0,R))},[]),z=C((R)=>{p((Z0)=>k3(Z0,R))},[]);V_.current=z;let w=C(()=>{p([])},[]),n=C((R)=>{p(M3(R))},[]),c=C((R,Z0=null,T0="info",N1=3000)=>{o1(),F({title:R,detail:Z0||null,kind:T0||"info"}),O.current=setTimeout(()=>{F((g0)=>g0?.title===R?null:g0)},N1)},[o1]),x0=C((R)=>{let Z0=U9(R,{editorOpen:k1,resolvePane:(T0)=>p0.resolve(T0)});if(Z0.kind==="open"){f1(Z0.path);return}if(Z0.kind==="toast")c(Z0.title,Z0.detail,Z0.level)},[k1,f1,c]),B1=C(()=>{let R=Z1;if(R)T5(R)},[Z1,T5]),I1=C((R)=>{T((Z0)=>E3(Z0,R))},[]),T1=C(async(R,Z0=null)=>{await $Q({id:R,targetChatJid:Z0,currentChatJid:j,getThread:M6,setPosts:U_})},[j,U_]),Q4=C((R)=>{T((Z0)=>k3(Z0,R))},[]),c4=C(()=>{T([])},[]),e4=C((R)=>{T(M3(R))},[]),_5=C((R)=>{let Z0=typeof R==="string"&&R.trim()?R.trim():"Could not send your message.";c("Compose failed",Z0,"error",5000)},[c]),q4=C((R={})=>{let Z0=Date.now();if(z0.current=Z0,R.running)A0.current=!0,P((T0)=>T0?T0:!0);if(R.clearSilence)v0.current=0},[P]),b1=C(()=>{if(O4.current)clearTimeout(O4.current),O4.current=null;p4.current=0},[]);b(()=>()=>{b1()},[b1]);let $5=C(()=>{b1(),v((R)=>{if(!R)return R;if(!(R.last_activity||R.lastActivity))return R;let{last_activity:Z0,lastActivity:T0,...N1}=R;return N1})},[b1]),D4=C((R)=>{if(!R)return;b1();let Z0=Date.now();p4.current=Z0,v({type:R.type||"active",last_activity:!0}),O4.current=setTimeout(()=>{if(p4.current!==Z0)return;v((T0)=>{if(!T0||!(T0.last_activity||T0.lastActivity))return T0;return null})},q9)},[b1]),z1=C(()=>{A0.current=!1,P(!1),z0.current=null,v0.current=0,u0.current="",m0.current="",O0.current=null,k_.current=null,N0.current=null,M0.current=null,l_.current=null,t1.current={inFlight:!1,lastAttemptAt:0,turnId:null},b1(),L0(null),E0(null),d0.current=!1,o0.current=!1},[b1,L0,E0,P]),n_=C((R)=>{if(!L9({remainingQueueCount:R,currentTurnId:N0.current,isAgentTurnActive:j0}))return;M0.current=null,E0(null)},[j0,E0]),j5=C(()=>gZ({agentStatus:I,agentDraft:o,agentPlan:s,agentThought:e,pendingRequest:$0,currentTurnId:W0,steerQueuedTurnId:R0,isAgentTurnActive:j0,followupQueueItems:S0,activeModel:n0,activeThinkingLevel:j1,supportsThinking:U0,activeModelUsage:t0,contextUsage:k0,isAgentRunning:A0.current,wasAgentActive:j4.current,draftBuffer:u0.current,thoughtBuffer:m0.current,lastAgentEvent:z0.current,lastSilenceNotice:v0.current,lastAgentResponse:k_.current,currentTurnIdRef:N0.current,steerQueuedTurnIdRef:M0.current,thoughtExpanded:d0.current,draftExpanded:o0.current,agentStatusRef:l_.current,silentRecovery:t1.current}),[n0,t0,j1,o,s,I,e,k0,W0,S0,j0,$0,R0,U0]),$8=C((R)=>{mZ({snapshot:R,clearLastActivityTimer:b1,refs:{isAgentRunningRef:A0,wasAgentActiveRef:j4,lastAgentEventRef:z0,lastSilenceNoticeRef:v0,draftBufferRef:u0,thoughtBufferRef:m0,pendingRequestRef:O0,lastAgentResponseRef:k_,currentTurnIdRef:N0,steerQueuedTurnIdRef:M0,agentStatusRef:l_,silentRecoveryRef:t1,thoughtExpandedRef:d0,draftExpandedRef:o0},setters:{setIsAgentTurnActive:P,setAgentStatus:v,setAgentDraft:m,setAgentPlan:r,setAgentThought:Q0,setPendingRequest:K0,setCurrentTurnId:L0,setSteerQueuedTurnId:E0,setFollowupQueueItems:J0,setActiveModel:V1,setActiveThinkingLevel:s0,setSupportsThinking:f0,setActiveModelUsage:a,setContextUsage:I0}})},[b1,L0,J0,P,E0]),Z5=C((R)=>{if(!R)return;if(N0.current===R)return;N0.current=R,t1.current={inFlight:!1,lastAttemptAt:0,turnId:R},L0(R),M0.current=null,E0(null),u0.current="",m0.current="",m({text:"",totalLines:0}),r(""),Q0({text:"",totalLines:0}),K0(null),O0.current=null,k_.current=null,d0.current=!1,o0.current=!1},[L0,E0]),A4=C((R)=>{if(typeof document<"u"){let v_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&v_)return}let Z0=k_.current;if(!Z0||!Z0.post)return;if(R&&Z0.turnId&&Z0.turnId!==R)return;let T0=Z0.post;if(T0.id&&Y4.current===T0.id)return;let N1=String(T0?.data?.content||"").trim();if(!N1)return;Y4.current=T0.id||Y4.current,k_.current=null;let g0=N1.replace(/\s+/g," ").slice(0,200),N_=J4.current||{},g1=(T0?.data?.agent_id?N_[T0.data.agent_id]:null)?.name||"Pi";d1(g1,g0)},[d1]),I_=C(async(R,Z0)=>{await V9({panelKey:R,expanded:Z0,currentTurnIdRef:N0,thoughtExpandedRef:d0,draftExpandedRef:o0,setAgentThoughtVisibility:gX,getAgentThought:bX,thoughtBufferRef:m0,draftBufferRef:u0,setAgentThought:Q0,setAgentDraft:m})},[]),E4=x(null),C5=C(()=>{let R=q_.current;if(!R)return;if(!(Math.abs(R.scrollTop)>150))R.scrollTop=0},[]);E4.current=C5;let j6=C((R)=>{let Z0=q_.current;if(!Z0||typeof R!=="function"){R?.();return}let{currentHashtag:T0,searchQuery:N1,searchOpen:g0}=Q_.current||{},N_=!((N1||g0)&&!T0),P1=N_?Z0.scrollHeight-Z0.scrollTop:Z0.scrollTop;R(),requestAnimationFrame(()=>{let g1=q_.current;if(!g1)return;if(N_){let v_=Math.max(g1.scrollHeight-P1,0);g1.scrollTop=v_}else{let v_=Math.max(g1.scrollHeight-g1.clientHeight,0),cQ=Math.min(P1,v_);g1.scrollTop=cQ}})},[]),j8=C((R)=>{let Z0=q_.current;if(!Z0||typeof R!=="function"){R?.();return}let T0=Z0.scrollTop;R(),requestAnimationFrame(()=>{let N1=q_.current;if(!N1)return;let g0=Math.max(N1.scrollHeight-N1.clientHeight,0);N1.scrollTop=Math.min(T0,g0)})},[]),C3=C((R)=>A9(R,h1.current),[]),{posts:Z6,setPosts:U_,hasMore:NQ,setHasMore:Y6,hasMoreRef:P3,loadPosts:d_,refreshTimeline:x_,loadMore:GQ,loadMoreRef:y3}=$9({preserveTimelineScroll:j6,preserveTimelineScrollTop:j8,chatJid:j}),Y5=w0(()=>C3(Z6),[Z6,S0,C3]),Z8=C(()=>{let R=c0.current;if(!R)return;U_((Z0)=>Z0?Z0.filter((T0)=>T0.id!==R):Z0),c0.current=null},[U_]),{handleSplitterMouseDown:XQ,handleSplitterTouchStart:VQ,handleEditorSplitterMouseDown:UQ,handleEditorSplitterTouchStart:LQ,handleDockSplitterMouseDown:WQ,handleDockSplitterTouchStart:BQ}=Z9({appShellRef:Z4,sidebarWidthRef:m4,editorWidthRef:h4,dockHeightRef:t4}),S3=C(()=>{sY({isAgentRunningRef:A0,lastSilenceNoticeRef:v0,lastAgentEventRef:z0,currentTurnIdRef:N0,thoughtExpandedRef:d0,draftExpandedRef:o0,draftBufferRef:u0,thoughtBufferRef:m0,pendingRequestRef:O0,lastAgentResponseRef:k_,stalledPostIdRef:c0,scrollToBottomRef:E4,setCurrentTurnId:L0,setAgentDraft:m,setAgentPlan:r,setAgentThought:Q0,setPendingRequest:K0,setAgentStatus:v,setPosts:U_,dedupePosts:s5})},[L0]);b(()=>{Q_.current={currentHashtag:L,searchQuery:D,searchOpen:W}},[L,D,W]);let C1=C(()=>{n9({currentChatJid:j,queueRefreshGenRef:a_,activeChatJidRef:r1,dismissedQueueRowIdsRef:n1,getAgentQueueState:QQ,setFollowupQueueItems:J0,clearQueuedSteerStateIfStale:n_})},[n_,j]),L_=C(async()=>{await d9({currentChatJid:j,activeChatJidRef:r1,getAgentContext:x3,setContextUsage:I0})},[j]),k4=C(async()=>{await i9({currentChatJid:j,activeChatJidRef:r1,getAutoresearchStatus:mX,setExtensionStatusPanels:C0,setPendingExtensionPanelActions:B0})},[j]),i_=C(async()=>{return await iY({currentChatJid:j,getAgentStatus:I3,activeChatJidRef:r1,wasAgentActiveRef:j4,viewStateRef:Q_,refreshTimeline:x_,clearAgentRunState:z1,agentStatusRef:l_,pendingRequestRef:O0,thoughtBufferRef:m0,draftBufferRef:u0,setAgentStatus:v,setAgentDraft:m,setAgentPlan:r,setAgentThought:Q0,setPendingRequest:K0,setActiveTurn:Z5,noteAgentActivity:q4,clearLastActivityFlag:$5})},[z1,$5,j,q4,x_,Z5]),w3=C(async()=>{return await rY({isAgentRunningRef:A0,pendingRequestRef:O0,currentTurnIdRef:N0,silentRecoveryRef:t1,silenceRefreshMs:b$,viewStateRef:Q_,refreshTimeline:x_,refreshQueueState:C1,refreshAgentStatus:i_})},[i_,C1,x_]);b(()=>{let R=Math.min(1000,Math.max(100,Math.floor(v$/2))),Z0=setInterval(()=>{oY({isAgentRunningRef:A0,pendingRequestRef:O0,lastAgentEventRef:z0,lastSilenceNoticeRef:v0,agentStatusRef:l_,silenceWarningMs:v$,silenceFinalizeMs:Q9,silenceRefreshMs:b$,isCompactionStatus:y4,setAgentStatus:v,reconcileSilentTurn:w3})},R);return()=>clearInterval(Z0)},[w3]);let R3=C((R)=>{return GZ({serverVersion:R,currentAppAssetVersion:uX,staleUiVersionRef:g4,staleUiReloadScheduledRef:$4,tabStoreHasUnsaved:()=>r0.hasUnsaved(),isAgentRunningRef:A0,pendingRequestRef:O0,showIntentToast:c})},[A0,O0,c]),zQ=C((R)=>{XZ({status:R,setConnectionStatus:V,setAgentStatus:v,setAgentDraft:m,setAgentPlan:r,setAgentThought:Q0,setPendingRequest:K0,pendingRequestRef:O0,clearAgentRunState:z1,hasConnectedOnceRef:s4,viewStateRef:Q_,refreshTimeline:x_,refreshAgentStatus:i_,refreshQueueState:C1,refreshContextUsage:L_})},[z1,x_,i_,C1,L_]),FQ=C(async(R)=>{await aY({hashtag:R,setCurrentHashtag:H,setPosts:U_,loadPosts:d_})},[d_]),HQ=C(async()=>{await tY({setCurrentHashtag:H,setSearchQuery:J,setPosts:U_,loadPosts:d_})},[d_]),JQ=C(async(R,Z0=E)=>{await eY({query:R,scope:Z0,currentChatJid:j,currentRootChatJid:m1,searchPosts:jQ,setSearchScope:f,setSearchQuery:J,setCurrentHashtag:H,setPosts:U_,setHasMore:Y6})},[j,m1,E]),OQ=C(()=>{A(!0),J(null),H(null),f("current"),U_([])},[]),DQ=C(()=>{A(!1),J(null),d_()},[d_]),oX=C(()=>{},[]),AQ=!L&&!D&&!W,EQ=C(async(R)=>{await _Q({post:R,posts:Y5,currentChatJid:j,deletePost:fX,preserveTimelineScrollTop:j8,setPosts:U_,setRemovingPostIds:U1,hasMoreRef:P3,loadMoreRef:y3})},[j,Y5,j8]),{updateAgentProfile:u3,updateUserProfile:f3,applyModelState:Q6,refreshModelState:sX,refreshActiveChatAgents:T_,refreshCurrentChatBranches:C_,refreshModelAndQueueState:Y8}=t9({getAgents:vX,setAgents:Y1,setUserProfile:c_,applyBranding:K_,readStoredNumber:l5,sidebarWidthRef:m4,appShellRef:Z4,currentChatJid:j,currentRootChatJid:m1,getAgentModels:ZQ,getActiveChatAgents:YQ,getChatBranches:T3,activeChatJidRef:r1,setActiveChatAgents:h,setCurrentChatBranches:F0,setActiveModel:V1,setActiveThinkingLevel:s0,setSupportsThinking:f0,setActiveModelUsage:a,agentsRef:J4,refreshQueueState:C1,refreshContextUsage:L_,refreshAutoresearchStatus:k4}),v3=j0||I!==null,kQ=C((R)=>{uj({queuedItem:R,followupQueueItemsRef:a0,dismissedQueueRowIdsRef:n1,currentChatJid:j,refreshQueueState:C1,setFollowupQueueItems:J0,showIntentToast:c,steerAgentQueueItem:qQ,removeAgentQueueItem:KQ})},[j,C1,J0,c]),MQ=C((R)=>{fj({queuedItem:R,followupQueueItemsRef:a0,dismissedQueueRowIdsRef:n1,currentChatJid:j,refreshQueueState:C1,setFollowupQueueItems:J0,showIntentToast:c,clearQueuedSteerStateIfStale:n_,steerAgentQueueItem:qQ,removeAgentQueueItem:KQ})},[n_,j,C1,J0,c]),b3=C((R)=>{R9({response:R,refreshActiveChatAgents:T_,refreshCurrentChatBranches:C_,refreshContextUsage:L_,refreshAutoresearchStatus:k4,refreshQueueState:C1})},[T_,k4,C_,L_,C1]),{handleExtensionPanelAction:IQ,closeBtwPanel:xQ,handleBtwIntercept:TQ,handleBtwRetry:CQ,handleBtwInject:PQ,handleOpenFloatingWidget:yQ,handleCloseFloatingWidget:SQ,handleFloatingWidgetEvent:wQ}=mj({currentChatJid:j,currentRootChatJid:m1,isComposeBoxAgentActive:v3,showIntentToast:c,setPendingExtensionPanelActions:B0,refreshAutoresearchStatus:k4,stopAutoresearch:hX,dismissAutoresearch:pX,streamSidePrompt:dX,btwAbortRef:x5,btwSession:t,setBtwSession:V0,sendAgentMessage:G5,handleMessageResponse:b3,dismissedLiveWidgetKeysRef:e0,setFloatingWidget:l0,getAgentStatus:I3,getAgentContext:x3,getAgentQueueState:QQ,getAgentModels:ZQ,getActiveChatAgents:YQ,getChatBranches:T3,getTimeline:l4,rawPosts:Z6,activeChatAgents:q0,currentChatBranches:i,contextUsage:k0,followupQueueItemsRef:a0,activeModel:n0,activeThinkingLevel:j1,supportsThinking:U0,isAgentTurnActive:j0});b(()=>{C0(new Map),B0(new Set)},[j]),b(()=>{let R=!1;return a9({currentHashtag:L,searchQuery:D,searchScope:E,currentChatJid:j,currentRootChatJid:m1,loadPosts:d_,searchPosts:jQ,setPosts:U_,setHasMore:Y6,scrollToBottom:C5,isCancelled:()=>R}),()=>{R=!0}},[j,L,D,E,m1,d_,C5,Y6,U_]),b(()=>{let R=H4.current||j;F4.current.set(R,j5())},[j,j5]),b(()=>{let R=H4.current||j;if(R===j)return;F4.current.set(R,j5()),H4.current=j,n1.current.clear(),$8(F4.current.get(j)||null),C1(),i_(),L_()},[j,i_,L_,C1,$8,j5]);let RQ=C(()=>{o9({viewStateRef:Q_,refreshTimeline:x_,refreshModelAndQueueState:Y8})},[Y8,x_]),g3=C((R,Z0="streaming")=>{let T0=new Date().toISOString();l0((N1)=>Dj(N1,R,{fallbackStatus:Z0,currentChatJid:j,dismissedSessionKeys:e0.current,updatedAt:T0}))},[j]),q6=C((R,Z0)=>{dY(R,Z0,{currentChatJid:j,updateAgentProfile:u3,updateUserProfile:f3,currentTurnIdRef:N0,activeChatJidRef:r1,pendingRequestRef:O0,draftBufferRef:u0,thoughtBufferRef:m0,steerQueuedTurnIdRef:M0,thoughtExpandedRef:d0,draftExpandedRef:o0,draftThrottleRef:I5,thoughtThrottleRef:J1,viewStateRef:Q_,followupQueueItemsRef:a0,dismissedQueueRowIdsRef:n1,scrollToBottomRef:E4,hasMoreRef:P3,loadMoreRef:y3,lastAgentResponseRef:k_,wasAgentActiveRef:j4,setActiveTurn:Z5,applyLiveGeneratedWidgetUpdate:g3,setFloatingWidget:l0,clearLastActivityFlag:$5,handleUiVersionDrift:R3,setAgentStatus:v,setAgentDraft:m,setAgentPlan:r,setAgentThought:Q0,setPendingRequest:K0,clearAgentRunState:z1,getAgentStatus:I3,noteAgentActivity:q4,showLastActivity:D4,refreshTimeline:x_,refreshModelAndQueueState:Y8,refreshActiveChatAgents:T_,refreshCurrentChatBranches:C_,notifyForFinalResponse:A4,setContextUsage:I0,refreshContextUsage:L_,refreshQueueState:C1,setFollowupQueueItems:J0,clearQueuedSteerStateIfStale:n_,setSteerQueuedTurnId:E0,applyModelState:Q6,getAgentContext:x3,setExtensionStatusPanels:C0,setPendingExtensionPanelActions:B0,refreshActiveEditorFromWorkspace:b4,showIntentToast:c,removeStalledPost:Z8,setPosts:U_,preserveTimelineScrollTop:j8})},[g3,Q6,z1,$5,n_,j,R3,q4,A4,T_,b4,L_,C_,Y8,C1,x_,Z8,Z5,J0,c,D4,u3,f3]);b(()=>{if(typeof window>"u")return;let R=window.__PICLAW_TEST_API||{};return R.emit=q6,R.reset=()=>{Z8(),z1(),v(null),m({text:"",totalLines:0}),r(""),Q0({text:"",totalLines:0}),K0(null)},R.finalize=()=>S3(),window.__PICLAW_TEST_API=R,()=>{if(window.__PICLAW_TEST_API===R)window.__PICLAW_TEST_API=void 0}},[z1,S3,q6,Z8]),e7({handleSseEvent:q6,handleConnectionStatusChange:zQ,loadPosts:d_,onWake:RQ,chatJid:j}),b(()=>{if(!Y5||Y5.length===0)return;let R=location.hash;if(!R||!R.startsWith("#msg-"))return;let Z0=R.slice(5);T1(Z0),history.replaceState(null,"",location.pathname+location.search)},[Y5,T1]);let K6=I!==null;b(()=>{if(G!=="connected")return;let Z0=setInterval(()=>{VZ({viewStateRef:Q_,isAgentActive:K6,refreshTimeline:x_,refreshQueueState:C1,refreshAgentStatus:i_,refreshContextUsage:L_,refreshAutoresearchStatus:k4})},K6?15000:60000);return()=>clearInterval(Z0)},[G,K6,i_,k4,L_,C1,x_]),b(()=>{return lj(()=>{i_(),L_(),C1(),k4()})},[i_,k4,L_,C1]);let uQ=C(()=>{MZ(X_)},[]),fQ=C((R)=>{IZ({nextChatJid:R,currentChatJid:j,chatOnlyMode:Z,navigate:$})},[Z,j,$]),N6=C(()=>{xZ({currentBranchRecord:O1,renameBranchInFlight:M.current,renameBranchLockUntil:d.current,getFormLock:o$,setRenameBranchNameDraft:_0,setIsRenameBranchFormOpen:G0})},[O1]),G6=C(()=>{TZ({setIsRenameBranchFormOpen:G0,setRenameBranchNameDraft:_0})},[]),vQ=C(async(R)=>{await CZ({currentBranchRecord:O1,nextName:R,openRenameForm:N6,renameBranchInFlightRef:M,renameBranchLockUntilRef:d,getFormLock:o$,setIsRenamingBranch:S,renameChatBranch:cX,refreshActiveChatAgents:T_,refreshCurrentChatBranches:C_,showIntentToast:c,closeRenameForm:G6})},[G6,O1,T_,C_,N6,S,c]),bQ=C(async(R=null)=>{await PZ({targetChatJid:R,currentChatJid:j,currentBranchRecord:O1,currentChatBranches:i,activeChatAgents:q0,pruneChatBranch:lX,refreshActiveChatAgents:T_,refreshCurrentChatBranches:C_,showIntentToast:c,chatOnlyMode:Z,navigate:$})},[q0,Z,O1,i,j,$,T_,C_,c]),gQ=C(async(R)=>{await yZ({targetChatJid:R,restoreChatBranch:nX,currentChatBranches:i,refreshActiveChatAgents:T_,refreshCurrentChatBranches:C_,showIntentToast:c,chatOnlyMode:Z,navigate:$})},[Z,i,$,T_,C_,c]);b(()=>SZ({branchLoaderMode:K,branchLoaderSourceChatJid:N,forkChatBranch:y5,setBranchLoaderState:u1,navigate:$}),[K,N,$]);let mQ=C(async()=>{await wZ({currentChatJid:j,chatOnlyMode:Z,forkChatBranch:y5,refreshActiveChatAgents:T_,refreshCurrentChatBranches:C_,showIntentToast:c,navigate:$})},[Z,j,$,T_,C_,c]),X6=C(async(R,Z0)=>{await RZ({isWebAppMode:X,path:R,label:Z0,showIntentToast:c,currentChatJid:j,tabStripActiveId:Z1,editorInstanceRef:E1,dockInstanceRef:__,terminalTabPath:V5,dockVisible:p1,resolveTab:(T0)=>r0.get(T0),closeTab:H_,setDockVisible:H1})},[j,p1,H_,X,c,Z1]);b(()=>uZ({openEditor:f1,popOutPane:(R,Z0)=>{X6(R,Z0)}}),[X6,f1]);let hQ=C(async()=>{await fZ({isWebAppMode:X,currentChatJid:j,currentRootChatJid:m1,forkChatBranch:y5,getActiveChatAgents:x6,getChatBranches:T3,setActiveChatAgents:h,setCurrentChatBranches:F0,showIntentToast:c})},[j,m1,X,c]);b(()=>{vZ({editorOpen:k1,shellElement:Z4.current,editorWidthRef:h4,dockHeightRef:t4,sidebarWidthRef:m4,readStoredNumber:l5})},[k1]),b(()=>{if(!D_||Z)return;return dj(w1)},[w1,D_,Z]),b(()=>{if(Z)return;return ij({toggleZenMode:v4,exitZenMode:E_,zenMode:W1,isZenModeActive:()=>W1})},[v4,E_,W1,Z]);let pQ=Boolean(R0&&R0===(I?.turn_id||W0)),m3=pZ({branchLoaderMode:K,panePopoutMode:Y});if(m3==="branch-loader")return cZ(a1);if(m3==="pane-popout")return lZ({appShellRef:Z4,editorOpen:k1,hidePanePopoutControls:Y_,panePopoutHasMenuActions:v1,panePopoutTitle:p_,tabStripTabs:i1,tabStripActiveId:Z1,handleTabActivate:_4,previewTabs:M1,handleTabTogglePreview:w_,editorContainerRef:_1,getPaneContent:()=>E1.current?.getContent?.(),panePopoutPath:Q});return uY({appShellRef:Z4,workspaceOpen:L1,editorOpen:k1,chatOnlyMode:Z,zenMode:W1,isRenameBranchFormOpen:Y0,closeRenameCurrentBranchForm:G6,handleRenameCurrentBranch:vQ,renameBranchNameDraft:X0,renameBranchNameInputRef:x1,setRenameBranchNameDraft:_0,renameBranchDraftState:P0,isRenamingBranch:u,addFileRef:T5,openEditor:f1,openTerminalTab:q1,openVncTab:$_,hasDockPanes:D_,toggleDock:w1,dockVisible:p1,handleSplitterMouseDown:XQ,handleSplitterTouchStart:VQ,showEditorPaneContainer:R_,tabStripTabs:i1,tabStripActiveId:Z1,handleTabActivate:_4,handleTabClose:H_,handleTabCloseOthers:J_,handleTabCloseAll:B4,handleTabTogglePin:O_,handleTabTogglePreview:w_,handleTabEditSource:u4,previewTabs:M1,tabPaneOverrides:e1,toggleZenMode:v4,handlePopOutPane:X6,isWebAppMode:X,editorContainerRef:_1,editorInstanceRef:E1,handleDockSplitterMouseDown:WQ,handleDockSplitterTouchStart:BQ,TERMINAL_TAB_PATH:V5,dockContainerRef:z4,handleEditorSplitterMouseDown:UQ,handleEditorSplitterTouchStart:LQ,searchQuery:D,isIOSDevice:N9,currentBranchRecord:O1,currentChatJid:j,currentChatBranches:i,handleBranchPickerChange:fQ,formatBranchPickerLabel:c8,openRenameCurrentBranchForm:N6,handlePruneCurrentBranch:bQ,currentHashtag:L,handleBackToTimeline:HQ,activeSearchScopeLabel:S_,posts:Y5,isMainTimelineView:AQ,hasMore:NQ,loadMore:GQ,timelineRef:q_,handleHashtagClick:FQ,addMessageRef:I1,scrollToMessage:T1,openFileFromPill:x0,handleDeletePost:EQ,handleOpenFloatingWidget:yQ,agents:S1,userProfile:f_,removingPostIds:A1,agentStatus:I,isCompactionStatus:y4,agentDraft:o,agentPlan:s,agentThought:e,pendingRequest:$0,intentToast:k,currentTurnId:W0,steerQueued:pQ,handlePanelToggle:I_,btwSession:t,closeBtwPanel:xQ,handleBtwRetry:CQ,handleBtwInject:PQ,floatingWidget:D0,handleCloseFloatingWidget:SQ,handleFloatingWidgetEvent:wQ,extensionStatusPanels:H0,pendingExtensionPanelActions:b0,handleExtensionPanelAction:IQ,searchOpen:W,followupQueueItems:S0,handleInjectQueuedFollowup:kQ,handleRemoveQueuedFollowup:MQ,viewStateRef:Q_,loadPosts:d_,scrollToBottom:C5,searchScope:E,handleSearch:JQ,setSearchScope:f,enterSearchMode:OQ,exitSearchMode:DQ,fileRefs:y,removeFileRef:z,clearFileRefs:w,setFileRefsFromCompose:n,messageRefs:l,removeMessageRef:Q4,clearMessageRefs:c4,setMessageRefsFromCompose:e4,handleCreateSessionFromCompose:mQ,handleRestoreBranch:gQ,attachActiveEditorFile:B1,followupQueueCount:l1,handleBtwIntercept:TQ,handleMessageResponse:b3,handleComposeSubmitError:_5,handlePopOutChat:hQ,isComposeBoxAgentActive:v3,activeChatAgents:q0,connectionStatus:G,activeModel:n0,activeModelUsage:t0,activeThinkingLevel:j1,supportsThinking:U0,contextUsage:k0,notificationsEnabled:t_,notificationPermission:h_,handleToggleNotifications:D1,setActiveModel:V1,applyModelState:Q6,setPendingRequest:K0,pendingRequestRef:O0,toggleWorkspace:uQ})}function rX(){let[_,$]=g(()=>typeof window>"u"?"http://localhost/":window.location.href);b(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let j=C((Y,Q={})=>{if(typeof window>"u")return;let{replace:q=!1}=Q||{},K=new URL(String(Y||""),window.location.href).toString();if(q)window.history.replaceState(null,"",K);else window.history.pushState(null,"",K);$(window.location.href)},[]),Z=w0(()=>new URL(_).searchParams,[_]);return B`<${iX} locationParams=${Z} navigate=${j} />`}x4(B`<${rX} />`,document.getElementById("app"));

//# debugId=AD0D6755A20C6F7D64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
