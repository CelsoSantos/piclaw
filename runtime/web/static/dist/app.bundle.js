var lQ=Object.defineProperty;var nQ=(_)=>_;function dQ(_,$){this[_]=nQ.bind(null,$)}var iQ=(_,$)=>{for(var j in $)lQ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:dQ.bind($,j)})};var X8,G1,t3,rQ,I4,m3,e3,_2,$2,B6,X6,V6,j2,K8={},N8=[],oQ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,V8=Array.isArray;function G4(_,$){for(var j in $)_[j]=$[j];return _}function z6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function U8(_,$,j){var Z,Y,Q,q={};for(Q in $)Q=="key"?Z=$[Q]:Q=="ref"?Y=$[Q]:q[Q]=$[Q];if(arguments.length>2&&(q.children=arguments.length>3?X8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Q in _.defaultProps)q[Q]===void 0&&(q[Q]=_.defaultProps[Q]);return Q8(_,q,Z,Y,null)}function Q8(_,$,j,Z,Y){var Q={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++t3:Y,__i:-1,__u:0};return Y==null&&G1.vnode!=null&&G1.vnode(Q),Q}function L8(_){return _.children}function Y5(_,$){this.props=_,this.context=$}function Q5(_,$){if($==null)return _.__?Q5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?Q5(_):null}function sQ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Y=[],Q=G4({},$);Q.__v=$.__v+1,G1.vnode&&G1.vnode(Q),F6(_.__P,Q,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?Q5($):j,!!(32&$.__u),Y),Q.__v=$.__v,Q.__.__k[Q.__i]=Q,q2(Z,Q,Y),$.__e=$.__=null,Q.__e!=j&&Z2(Q)}}function Z2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),Z2(_)}function U6(_){(!_.__d&&(_.__d=!0)&&I4.push(_)&&!G8.__r++||m3!=G1.debounceRendering)&&((m3=G1.debounceRendering)||e3)(G8)}function G8(){try{for(var _,$=1;I4.length;)I4.length>$&&I4.sort(_2),_=I4.shift(),$=I4.length,sQ(_)}finally{I4.length=G8.__r=0}}function Y2(_,$,j,Z,Y,Q,q,K,N,G,V){var X,U,L,H,O,J,W,D=Z&&Z.__k||N8,E=$.length;for(N=aQ(j,$,D,N,E),X=0;X<E;X++)(L=j.__k[X])!=null&&(U=L.__i!=-1&&D[L.__i]||K8,L.__i=X,J=F6(_,L,U,Y,Q,q,K,N,G,V),H=L.__e,L.ref&&U.ref!=L.ref&&(U.ref&&H6(U.ref,null,L),V.push(L.ref,L.__c||H,L)),O==null&&H!=null&&(O=H),(W=!!(4&L.__u))||U.__k===L.__k?N=Q2(L,N,_,W):typeof L.type=="function"&&J!==void 0?N=J:H&&(N=H.nextSibling),L.__u&=-7);return j.__e=O,N}function aQ(_,$,j,Z,Y){var Q,q,K,N,G,V=j.length,X=V,U=0;for(_.__k=Array(Y),Q=0;Q<Y;Q++)(q=$[Q])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Q]=Q8(null,q,null,null,null):V8(q)?q=_.__k[Q]=Q8(L8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Q]=Q8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Q]=q,N=Q+U,q.__=_,q.__b=_.__b+1,K=null,(G=q.__i=tQ(q,j,N,X))!=-1&&(X--,(K=j[G])&&(K.__u|=2)),K==null||K.__v==null?(G==-1&&(Y>V?U--:Y<V&&U++),typeof q.type!="function"&&(q.__u|=4)):G!=N&&(G==N-1?U--:G==N+1?U++:(G>N?U--:U++,q.__u|=4))):_.__k[Q]=null;if(X)for(Q=0;Q<V;Q++)(K=j[Q])!=null&&(2&K.__u)==0&&(K.__e==Z&&(Z=Q5(K)),N2(K,K));return Z}function Q2(_,$,j,Z){var Y,Q;if(typeof _.type=="function"){for(Y=_.__k,Q=0;Y&&Q<Y.length;Q++)Y[Q]&&(Y[Q].__=_,$=Q2(Y[Q],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=Q5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function tQ(_,$,j,Z){var Y,Q,q,K=_.key,N=_.type,G=$[j],V=G!=null&&(2&G.__u)==0;if(G===null&&K==null||V&&K==G.key&&N==G.type)return j;if(Z>(V?1:0)){for(Y=j-1,Q=j+1;Y>=0||Q<$.length;)if((G=$[q=Y>=0?Y--:Q++])!=null&&(2&G.__u)==0&&K==G.key&&N==G.type)return q}return-1}function h3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||oQ.test($)?j:j+"px"}function Y8(_,$,j,Z,Y){var Q,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||h3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||h3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Q=$!=($=$.replace($2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Q]=j,j?Z?j.u=Z.u:(j.u=B6,_.addEventListener($,Q?V6:X6,Q)):_.removeEventListener($,Q?V6:X6,Q);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function p3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=B6++;else if($.t<j.u)return;return j(G1.event?G1.event($):$)}}}function F6(_,$,j,Z,Y,Q,q,K,N,G){var V,X,U,L,H,O,J,W,D,E,u,y,c,l,T,I=$.type;if($.constructor!==void 0)return null;128&j.__u&&(N=!!(32&j.__u),Q=[K=$.__e=j.__e]),(V=G1.__b)&&V($);_:if(typeof I=="function")try{if(W=$.props,D=I.prototype&&I.prototype.render,E=(V=I.contextType)&&Z[V.__c],u=V?E?E.props.value:V.__:Z,j.__c?J=(X=$.__c=j.__c).__=X.__E:(D?$.__c=X=new I(W,u):($.__c=X=new Y5(W,u),X.constructor=I,X.render=_q),E&&E.sub(X),X.state||(X.state={}),X.__n=Z,U=X.__d=!0,X.__h=[],X._sb=[]),D&&X.__s==null&&(X.__s=X.state),D&&I.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=G4({},X.__s)),G4(X.__s,I.getDerivedStateFromProps(W,X.__s))),L=X.props,H=X.state,X.__v=$,U)D&&I.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),D&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(D&&I.getDerivedStateFromProps==null&&W!==L&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(W,u),$.__v==j.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(W,X.__s,u)===!1){$.__v!=j.__v&&(X.props=W,X.state=X.__s,X.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(z){z&&(z.__=$)}),N8.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&q.push(X);break _}X.componentWillUpdate!=null&&X.componentWillUpdate(W,X.__s,u),D&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(L,H,O)})}if(X.context=u,X.props=W,X.__P=_,X.__e=!1,y=G1.__r,c=0,D)X.state=X.__s,X.__d=!1,y&&y($),V=X.render(X.props,X.state,X.context),N8.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,y&&y($),V=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++c<25);X.state=X.__s,X.getChildContext!=null&&(Z=G4(G4({},Z),X.getChildContext())),D&&!U&&X.getSnapshotBeforeUpdate!=null&&(O=X.getSnapshotBeforeUpdate(L,H)),l=V!=null&&V.type===L8&&V.key==null?K2(V.props.children):V,K=Y2(_,V8(l)?l:[l],$,j,Z,Y,Q,q,K,N,G),X.base=$.__e,$.__u&=-161,X.__h.length&&q.push(X),J&&(X.__E=X.__=null)}catch(z){if($.__v=null,N||Q!=null)if(z.then){for($.__u|=N?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;Q[Q.indexOf(K)]=null,$.__e=K}else{for(T=Q.length;T--;)z6(Q[T]);L6($)}else $.__e=j.__e,$.__k=j.__k,z.then||L6($);G1.__e(z,$,j)}else Q==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=eQ(j.__e,$,j,Z,Y,Q,q,N,G);return(V=G1.diffed)&&V($),128&$.__u?void 0:K}function L6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(L6))}function q2(_,$,j){for(var Z=0;Z<j.length;Z++)H6(j[Z],j[++Z],j[++Z]);G1.__c&&G1.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(Q){Q.call(Y)})}catch(Q){G1.__e(Q,Y.__v)}})}function K2(_){return typeof _!="object"||_==null||_.__b>0?_:V8(_)?_.map(K2):G4({},_)}function eQ(_,$,j,Z,Y,Q,q,K,N){var G,V,X,U,L,H,O,J=j.props||K8,W=$.props,D=$.type;if(D=="svg"?Y="http://www.w3.org/2000/svg":D=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),Q!=null){for(G=0;G<Q.length;G++)if((L=Q[G])&&"setAttribute"in L==!!D&&(D?L.localName==D:L.nodeType==3)){_=L,Q[G]=null;break}}if(_==null){if(D==null)return document.createTextNode(W);_=document.createElementNS(Y,D,W.is&&W),K&&(G1.__m&&G1.__m($,Q),K=!1),Q=null}if(D==null)J===W||K&&_.data==W||(_.data=W);else{if(Q=Q&&X8.call(_.childNodes),!K&&Q!=null)for(J={},G=0;G<_.attributes.length;G++)J[(L=_.attributes[G]).name]=L.value;for(G in J)L=J[G],G=="dangerouslySetInnerHTML"?X=L:G=="children"||(G in W)||G=="value"&&("defaultValue"in W)||G=="checked"&&("defaultChecked"in W)||Y8(_,G,null,L,Y);for(G in W)L=W[G],G=="children"?U=L:G=="dangerouslySetInnerHTML"?V=L:G=="value"?H=L:G=="checked"?O=L:K&&typeof L!="function"||J[G]===L||Y8(_,G,L,J[G],Y);if(V)K||X&&(V.__html==X.__html||V.__html==_.innerHTML)||(_.innerHTML=V.__html),$.__k=[];else if(X&&(_.innerHTML=""),Y2($.type=="template"?_.content:_,V8(U)?U:[U],$,j,Z,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,Q,q,Q?Q[0]:j.__k&&Q5(j,0),K,N),Q!=null)for(G=Q.length;G--;)z6(Q[G]);K||(G="value",D=="progress"&&H==null?_.removeAttribute("value"):H!=null&&(H!==_[G]||D=="progress"&&!H||D=="option"&&H!=J[G])&&Y8(_,G,H,J[G],Y),G="checked",O!=null&&O!=_[G]&&Y8(_,G,O,J[G],Y))}return _}function H6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Y){G1.__e(Y,j)}}function N2(_,$,j){var Z,Y;if(G1.unmount&&G1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||H6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Q){G1.__e(Q,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Y=0;Y<Z.length;Y++)Z[Y]&&N2(Z[Y],$,j||typeof _.type!="function");j||z6(_.__e),_.__c=_.__=_.__e=void 0}function _q(_,$,j){return this.constructor(_,j)}function x4(_,$,j){var Z,Y,Q,q;$==document&&($=document.documentElement),G1.__&&G1.__(_,$),Y=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Q=[],q=[],F6($,_=(!Z&&j||$).__k=U8(L8,null,[_]),Y||K8,K8,$.namespaceURI,!Z&&j?[j]:Y?null:$.firstChild?X8.call($.childNodes):null,Q,!Z&&j?j:Y?Y.__e:$.firstChild,Z,q),q2(Q,_,q)}function G2(_){function $(j){var Z,Y;return this.getChildContext||(Z=new Set,(Y={})[$.__c]=this,this.getChildContext=function(){return Y},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Q){this.props.value!=Q.value&&Z.forEach(function(q){q.__e=!0,U6(q)})},this.sub=function(Q){Z.add(Q);var q=Q.componentWillUnmount;Q.componentWillUnmount=function(){Z&&Z.delete(Q),q&&q.call(Q)}}),j.children}return $.__c="__cC"+j2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}X8=N8.slice,G1={__e:function(_,$,j,Z){for(var Y,Q,q;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((Q=Y.constructor)&&Q.getDerivedStateFromError!=null&&(Y.setState(Q.getDerivedStateFromError(_)),q=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,Z||{}),q=Y.__d),q)return Y.__E=Y}catch(K){_=K}throw _}},t3=0,rQ=function(_){return _!=null&&_.constructor===void 0},Y5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=G4({},this.state),typeof _=="function"&&(_=_(G4({},j),this.props)),_&&G4(j,_),_!=null&&this.__v&&($&&this._sb.push($),U6(this))},Y5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),U6(this))},Y5.prototype.render=L8,I4=[],e3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_2=function(_,$){return _.__v.__b-$.__v.__b},G8.__r=0,$2=/(PointerCapture)$|Capture$/i,B6=0,X6=p3(!1),V6=p3(!0),j2=0;var M4,N1,G6,c3,q5=0,X2=[],z1=G1,l3=z1.__b,n3=z1.__r,d3=z1.diffed,i3=z1.__c,r3=z1.unmount,o3=z1.__;function K5(_,$){z1.__h&&z1.__h(N1,_,q5||$),q5=0;var j=N1.__H||(N1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function g(_){return q5=1,J6(B2,_)}function J6(_,$,j){var Z=K5(M4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):B2(void 0,$),function(K){var N=Z.__N?Z.__N[0]:Z.__[0],G=Z.t(N,K);N!==G&&(Z.__N=[G,Z.__[1]],Z.__c.setState({}))}],Z.__c=N1,!N1.__f)){var Y=function(K,N,G){if(!Z.__c.__H)return!0;var V=Z.__c.__H.__.filter(function(U){return U.__c});if(V.every(function(U){return!U.__N}))return!Q||Q.call(this,K,N,G);var X=Z.__c.props!==K;return V.some(function(U){if(U.__N){var L=U.__[0];U.__=U.__N,U.__N=void 0,L!==U.__[0]&&(X=!0)}}),Q&&Q.call(this,K,N,G)||X};N1.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:q}=N1;N1.componentWillUpdate=function(K,N,G){if(this.__e){var V=Q;Q=void 0,Y(K,N,G),Q=V}q&&q.call(this,K,N,G)},N1.shouldComponentUpdate=Y}return Z.__N||Z.__}function v(_,$){var j=K5(M4++,3);!z1.__s&&O6(j.__H,$)&&(j.__=_,j.u=$,N1.__H.__h.push(j))}function x5(_,$){var j=K5(M4++,4);!z1.__s&&O6(j.__H,$)&&(j.__=_,j.u=$,N1.__h.push(j))}function x(_){return q5=5,S0(function(){return{current:_}},[])}function V2(_,$,j){q5=6,x5(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function S0(_,$){var j=K5(M4++,7);return O6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function C(_,$){return q5=8,S0(function(){return _},$)}function U2(_){var $=N1.context[_.__c],j=K5(M4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(N1)),$.props.value):_.__}function L2(_,$){z1.useDebugValue&&z1.useDebugValue($?$(_):_)}function W2(_){var $=K5(M4++,10),j=g();return $.__=_,N1.componentDidCatch||(N1.componentDidCatch=function(Z,Y){$.__&&$.__(Z,Y),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function $q(){for(var _;_=X2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(q8),$.__h.some(W6),$.__h=[]}catch(j){$.__h=[],z1.__e(j,_.__v)}}}z1.__b=function(_){N1=null,l3&&l3(_)},z1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),o3&&o3(_,$)},z1.__r=function(_){n3&&n3(_),M4=0;var $=(N1=_.__c).__H;$&&(G6===N1?($.__h=[],N1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(q8),$.__h.some(W6),$.__h=[],M4=0)),G6=N1},z1.diffed=function(_){d3&&d3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(X2.push($)!==1&&c3===z1.requestAnimationFrame||((c3=z1.requestAnimationFrame)||jq)($q)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),G6=N1=null},z1.__c=function(_,$){$.some(function(j){try{j.__h.some(q8),j.__h=j.__h.filter(function(Z){return!Z.__||W6(Z)})}catch(Z){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],z1.__e(Z,j.__v)}}),i3&&i3(_,$)},z1.unmount=function(_){r3&&r3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{q8(Z)}catch(Y){$=Y}}),j.__H=void 0,$&&z1.__e($,j.__v))};var s3=typeof requestAnimationFrame=="function";function jq(_){var $,j=function(){clearTimeout(Z),s3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);s3&&($=requestAnimationFrame(j))}function q8(_){var $=N1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),N1=$}function W6(_){var $=N1;_.__c=_.__(),N1=$}function O6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function B2(_,$){return typeof $=="function"?$(_):$}var z2=function(_,$,j,Z){var Y;$[0]=0;for(var Q=1;Q<$.length;Q++){var q=$[Q++],K=$[Q]?($[0]|=q?1:2,j[$[Q++]]):$[++Q];q===3?Z[0]=K:q===4?Z[1]=Object.assign(Z[1]||{},K):q===5?(Z[1]=Z[1]||{})[$[++Q]]=K:q===6?Z[1][$[++Q]]+=K+"":q?(Y=_.apply(K,z2(_,K,j,["",null])),Z.push(Y),K[0]?$[0]|=2:($[Q-2]=0,$[Q]=Y)):Z.push(K)}return Z},a3=new Map;function Zq(_){var $=a3.get(this);return $||($=new Map,a3.set(this,$)),($=z2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Y,Q=1,q="",K="",N=[0],G=function(U){Q===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,U,q):Q===3&&(U||q)?(N.push(3,U,q),Q=2):Q===2&&q==="..."&&U?N.push(4,U,0):Q===2&&q&&!U?N.push(5,0,!0,q):Q>=5&&((q||!U&&Q===5)&&(N.push(Q,0,q,Y),Q=6),U&&(N.push(Q,U,0,Y),Q=6)),q=""},V=0;V<j.length;V++){V&&(Q===1&&G(),G(V));for(var X=0;X<j[V].length;X++)Z=j[V][X],Q===1?Z==="<"?(G(),N=[N],Q=3):q+=Z:Q===4?q==="--"&&Z===">"?(Q=1,q=""):q=Z+q[0]:K?Z===K?K="":q+=Z:Z==='"'||Z==="'"?K=Z:Z===">"?(G(),Q=1):Q&&(Z==="="?(Q=5,Y=q,q=""):Z==="/"&&(Q<5||j[V][X+1]===">")?(G(),Q===3&&(N=N[0]),Q=N,(N=N[0]).push(2,0,Q),Q=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(G(),Q=2):q+=Z),Q===3&&q==="!--"&&(Q=4,N=N[0])}return G(),N}(_)),$),arguments,[])).length>1?$:$[0]}var B=Zq.bind(U8);var p1={};iQ(p1,{uploadWorkspaceFile:()=>B8,uploadMedia:()=>T6,updateWorkspaceFile:()=>Aq,submitAdaptiveCardAction:()=>C6,streamSidePrompt:()=>Jq,stopAutoresearch:()=>Wq,steerAgentQueueItem:()=>Hq,setWorkspaceVisibility:()=>S5,setAgentThoughtVisibility:()=>S6,sendPeerAgentMessage:()=>Vq,sendAgentMessage:()=>N5,searchPosts:()=>A6,restoreChatBranch:()=>Xq,respondToAgentRequest:()=>W8,renameWorkspaceFile:()=>v6,renameChatBranch:()=>Nq,removeAgentQueueItem:()=>Fq,pruneChatBranch:()=>Gq,moveWorkspaceEntry:()=>b6,getWorkspaceTree:()=>P5,getWorkspaceRawUrl:()=>z8,getWorkspaceFile:()=>y5,getWorkspaceDownloadUrl:()=>F8,getWorkspaceBranch:()=>Dq,getTimeline:()=>n4,getThumbnailUrl:()=>w6,getThread:()=>E6,getPostsByHashtag:()=>D6,getMediaUrl:()=>y_,getMediaText:()=>R6,getMediaInfo:()=>G5,getMediaBlob:()=>Oq,getChatBranches:()=>Kq,getAutoresearchStatus:()=>Lq,getAgents:()=>M6,getAgentThought:()=>y6,getAgentStatus:()=>x6,getAgentQueueState:()=>zq,getAgentModels:()=>C5,getAgentContext:()=>Uq,getActiveChatAgents:()=>I6,forkChatBranch:()=>T5,dismissAutoresearch:()=>Bq,deleteWorkspaceFile:()=>g6,deletePost:()=>k6,createWorkspaceFile:()=>f6,createReply:()=>qq,createPost:()=>Qq,attachWorkspaceFile:()=>u6,addToWhitelist:()=>P6,SSEClient:()=>H8});async function i0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function F2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Q of $)if(Q.startsWith("event:"))j=Q.slice(6).trim()||"message";else if(Q.startsWith("data:"))Z.push(Q.slice(5).trim());let Y=Z.join(`
`);if(!Y)return null;try{return{event:j,data:JSON.parse(Y)}}catch{return{event:j,data:Y}}}async function Yq(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Y="";while(!0){let{value:q,done:K}=await j.read();if(K)break;Y+=Z.decode(q,{stream:!0});let N=Y.split(`

`);Y=N.pop()||"";for(let G of N){let V=F2(G);if(V)$(V.event,V.data)}}Y+=Z.decode();let Q=F2(Y);if(Q)$(Q.event,Q.data)}async function n4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return i0(Z)}async function D6(_,$=50,j=0,Z=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return i0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Y}`)}async function A6(_,$=50,j=0,Z=null,Y="current",Q=null){let q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",K=Y?`&scope=${encodeURIComponent(Y)}`:"",N=Q?`&root_chat_jid=${encodeURIComponent(Q)}`:"";return i0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${K}${N}`)}async function E6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return i0(`/thread/${_}${j}`)}async function Qq(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return i0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function qq(_,$,j=[],Z=null){let Y=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return i0(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function k6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return i0(Y,{method:"DELETE"})}async function N5(_,$,j=null,Z=[],Y=null,Q=null){let q=Q?`?chat_jid=${encodeURIComponent(Q)}`:"",K={content:$,thread_id:j,media_ids:Z};if(Y==="auto"||Y==="queue"||Y==="steer")K.mode=Y;return i0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(K)})}async function I6(){return i0("/agent/active-chats")}async function Kq(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return i0(`/agent/branches${Z}`)}async function T5(_,$={}){return i0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function Nq(_,$={}){return i0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function Gq(_){return i0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function Xq(_,$={}){return i0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function Vq(_,$,j,Z="auto",Y={}){let Q={source_chat_jid:_,content:j,mode:Z,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return i0("/agent/peer-message",{method:"POST",body:JSON.stringify(Q)})}async function M6(){return i0("/agent/roster")}async function x6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/status${$}`)}async function Uq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/context${$}`)}async function Lq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/autoresearch/status${$}`)}async function Wq(_=null,$={}){return i0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function Bq(_=null){return i0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function zq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/queue-state${$}`)}async function Fq(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function Hq(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function C5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/models${$}`)}async function T6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function W8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${Z.status}`)}return Z.json()}async function C6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function Jq(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Q=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Q.error||`HTTP ${j.status}`)}let Z=null,Y=null;if(await Yq(j,(Q,q)=>{if($.onEvent?.(Q,q),Q==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Q==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Q==="side_prompt_done")Z=q;else if(Q==="side_prompt_error")Y=q}),Y){let Q=Error(Y?.error||"Side prompt failed");throw Q.payload=Y,Q}return Z}async function P6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function y6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return i0(j)}async function S6(_,$,j){return i0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function y_(_){return`/media/${_}`}function w6(_){return`/media/${_}/thumbnail`}async function G5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function R6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Oq(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function P5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return i0(Z)}async function Dq(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return i0($)}async function y5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return i0(Y)}async function Aq(_,$){return i0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function u6(_){return i0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function B8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Y=new URLSearchParams;if($)Y.set("path",$);if(j.overwrite)Y.set("overwrite","1");let Q=Y.toString(),q=Q?`/workspace/upload?${Q}`:"/workspace/upload",K=await fetch(""+q,{method:"POST",body:Z});if(!K.ok){let N=await K.json().catch(()=>({error:"Upload failed"})),G=Error(N.error||`HTTP ${K.status}`);throw G.status=K.status,G.code=N.code,G}return K.json()}async function f6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Create failed"})),Q=Error(Y.error||`HTTP ${Z.status}`);throw Q.status=Z.status,Q.code=Y.code,Q}return Z.json()}async function v6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function b6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function g6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return i0($,{method:"DELETE"})}async function S5(_,$=!1){return i0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function z8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function F8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class H8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Y=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class H2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Y=Z.canHandle(_);if(Y===!1||Y===0)continue;let Q=Y===!0?0:typeof Y==="number"?Y:0;if(Q>j)j=Q,$=Z}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var h0=new H2;var J8=null,m6=null;function Eq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function J2(){if(m6)return Promise.resolve(m6);if(!J8)J8=import(Eq()).then((_)=>{return m6=_,_}).catch((_)=>{throw J8=null,_});return J8}class O2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await J2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var h6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new O2(_,$)}};function p6(){J2().catch(()=>{})}var X5="piclaw://terminal";var kq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Iq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},O8=null,c6=null;function Mq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function xq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Y,Q)=>{let q=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!Mq(q))return $(Y,Q);if(Y instanceof Request)return $(new Request(j,Y));return $(j,Q)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Tq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!O8)O8=xq(()=>Promise.resolve($.init?.())).catch((j)=>{throw O8=null,j});return await O8,$}async function Cq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!c6)c6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await c6}async function Pq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function yq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Sq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function X4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function wq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function D2(){let _=Sq(),$=_?Iq:kq,j=X4("--bg-primary",_?"#000000":"#ffffff"),Z=X4("--text-primary",_?"#e7e9ea":"#0f1419"),Y=X4("--text-secondary",_?"#71767b":"#536471"),Q=X4("--accent-color","#1d9bf0"),q=X4("--danger-color",_?"#ff7b72":"#cf222e"),K=X4("--success-color",_?"#7ee787":"#1a7f37"),N=X4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=X4("--border-color",_?"#2f3336":"#eff3f4"),V=X4("--accent-soft-strong",wq(Q,_?"47":"33"));return{background:j,foreground:Z,cursor:Q,cursorAccent:j,selectionBackground:V,selectionForeground:Z,black:N,red:q,green:K,yellow:$.yellow,blue:Q,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class l6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,Q=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Y)}x${Math.round(Q)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Tq();if(await Cq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:D2()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=D2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Y=this.bodyEl.querySelector("canvas");if(Y instanceof HTMLElement)Y.style.backgroundColor=_.background,Y.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Pq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(yq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Y})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Y}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Y=null;try{Y=JSON.parse(String(Z.data))}catch{Y={type:"output",data:String(Z.data)}}if(Y?.type==="output"&&typeof Y.data==="string"){_.write?.(Y.data);return}if(Y?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var n6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new l6(_,$)}},d6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new l6(_,$)}};function V4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function D8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Y=Number(j?.maxTouchPoints||0),Q=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Q||Y>1||q)}function A2(_,$={}){if(V4($))return null;if(D8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Rq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function i6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function r6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function o6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function s6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function U4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Y),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function E2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Y),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function k2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Y),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let Q=j?.params&&typeof j.params==="object"?j.params:null;if(Q)for(let[q,K]of Object.entries(Q)){let N=String(q||"").trim();if(!N)continue;if(K===null||K===void 0||K==="")Z.searchParams.delete(N);else Z.searchParams.set(N,String(K))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function Rq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function uq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function I2(_,$={}){if(V4($))return null;if(D8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:uq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function w5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function fq(_){try{return JSON.parse(_)}catch{return null}}function vq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function bq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class a6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=bq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||fq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=vq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var R5=()=>{throw Error("Operation requires compiling with --exportRuntime")},gq=typeof BigUint64Array<"u",u5=Symbol();var mq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function M2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return mq.decode(Z)}catch{let Y="",Q=0;while(j-Q>1024)Y+=String.fromCharCode(...Z.subarray(Q,Q+=1024));return Y+String.fromCharCode(...Z.subarray(Q))}}function x2(_){let $={};function j(Y,Q){if(!Y)return"<yet unknown>";return M2(Y.buffer,Q)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Q,q,K,N){let G=$.memory||Z.memory;throw Error(`abort: ${j(G,Q)} at ${j(G,q)}:${K}:${N}`)},Z.trace=Z.trace||function(Q,q,...K){let N=$.memory||Z.memory;console.log(`trace: ${j(N,Q)}${q?" ":""}${K.slice(0,q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function T2(_,$){let j=$.exports,Z=j.memory,Y=j.table,Q=j.__new||R5,q=j.__pin||R5,K=j.__unpin||R5,N=j.__collect||R5,G=j.__rtti_base,V=G?(z)=>z[G>>>2]:R5;_.__new=Q,_.__pin=q,_.__unpin=K,_.__collect=N;function X(z){let k=new Uint32Array(Z.buffer);if((z>>>=0)>=V(k))throw Error(`invalid id: ${z}`);return k[(G+4>>>2)+z]}function U(z){let k=X(z);if(!(k&7))throw Error(`not an array: ${z}, flags=${k}`);return k}function L(z){return 31-Math.clz32(z>>>6&31)}function H(z){if(z==null)return 0;let k=z.length,f=Q(k<<1,2),i=new Uint16Array(Z.buffer);for(let b=0,o=f>>>1;b<k;++b)i[o+b]=z.charCodeAt(b);return f}_.__newString=H;function O(z){if(z==null)return 0;let k=new Uint8Array(z),f=Q(k.length,1);return new Uint8Array(Z.buffer).set(k,f),f}_.__newArrayBuffer=O;function J(z){if(!z)return null;let k=Z.buffer;if(new Uint32Array(k)[z+-8>>>2]!==2)throw Error(`not a string: ${z}`);return M2(k,z)}_.__getString=J;function W(z,k,f){let i=Z.buffer;if(f)switch(z){case 2:return new Float32Array(i);case 3:return new Float64Array(i)}else switch(z){case 0:return new(k?Int8Array:Uint8Array)(i);case 1:return new(k?Int16Array:Uint16Array)(i);case 2:return new(k?Int32Array:Uint32Array)(i);case 3:return new(k?BigInt64Array:BigUint64Array)(i)}throw Error(`unsupported align: ${z}`)}function D(z,k=0){let f=k,i=U(z),b=L(i),o=typeof f!=="number",r=o?f.length:f,t=Q(r<<b,i&4?z:1),Y0;if(i&4)Y0=t;else{q(t);let $0=Q(i&2?16:12,z);K(t);let q0=new Uint32Array(Z.buffer);if(q0[$0+0>>>2]=t,q0[$0+4>>>2]=t,q0[$0+8>>>2]=r<<b,i&2)q0[$0+12>>>2]=r;Y0=$0}if(o){let $0=W(b,i&2048,i&4096),q0=t>>>b;if(i&16384)for(let W0=0;W0<r;++W0)$0[q0+W0]=f[W0];else $0.set(f,q0)}return Y0}_.__newArray=D;function E(z){let k=new Uint32Array(Z.buffer),f=k[z+-8>>>2],i=U(f),b=L(i),o=i&4?z:k[z+4>>>2],r=i&2?k[z+12>>>2]:k[o+-4>>>2]>>>b;return W(b,i&2048,i&4096).subarray(o>>>=b,o+r)}_.__getArrayView=E;function u(z){let k=E(z),f=k.length,i=Array(f);for(let b=0;b<f;b++)i[b]=k[b];return i}_.__getArray=u;function y(z){let k=Z.buffer,f=new Uint32Array(k)[z+-4>>>2];return k.slice(z,z+f)}_.__getArrayBuffer=y;function c(z){if(!Y)throw Error("Operation requires compiling with --exportTable");let k=new Uint32Array(Z.buffer)[z>>>2];return Y.get(k)}_.__getFunction=c;function l(z,k,f){return new z(T(z,k,f))}function T(z,k,f){let i=Z.buffer,b=new Uint32Array(i);return new z(i,b[f+4>>>2],b[f+8>>>2]>>>k)}function I(z,k,f){_[`__get${k}`]=l.bind(null,z,f),_[`__get${k}View`]=T.bind(null,z,f)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((z)=>{I(z,z.name,31-Math.clz32(z.BYTES_PER_ELEMENT))}),gq)[BigUint64Array,BigInt64Array].forEach((z)=>{I(z,z.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Y,pq(j,_)}function C2(_){return typeof Response<"u"&&_ instanceof Response}function hq(_){return _ instanceof WebAssembly.Module}async function t6(_,$={}){if(C2(_=await _))return A8(_,$);let j=hq(_)?_:await WebAssembly.compile(_),Z=x2($),Y=await WebAssembly.instantiate(j,$),Q=T2(Z,Y);return{module:j,instance:Y,exports:Q}}async function A8(_,$={}){if(!WebAssembly.instantiateStreaming)return t6(C2(_=await _)?_.arrayBuffer():_,$);let j=x2($),Z=await WebAssembly.instantiateStreaming(_,$),Y=T2(j,Z.instance);return{...Z,exports:Y}}function pq(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Y=_[Z],Q=Z.split("."),q=$;while(Q.length>1){let G=Q.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let K=Q[0],N=K.indexOf("#");if(N>=0){let G=K.substring(0,N),V=q[G];if(typeof V>"u"||!V.prototype){let X=function(...U){return X.wrap(X.prototype.constructor(0,...U))};if(X.prototype={valueOf(){return this[u5]}},X.wrap=function(U){return Object.create(X.prototype,{[u5]:{value:U,writable:!1}})},V)Object.getOwnPropertyNames(V).forEach((U)=>Object.defineProperty(X,U,Object.getOwnPropertyDescriptor(V,U)));q[G]=X}if(K=K.substring(N+1),q=q[G].prototype,/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4))){let X=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(q,K,{get(){return X(this[u5])},set(L){U(this[u5],L)},enumerable:!0})}}else if(K==="constructor")(q[K]=function(...X){return j(X.length),Y(...X)}).original=Y;else(q[K]=function(...X){return j(X.length),Y(this[u5],...X)}).original=Y}else if(/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4)))Object.defineProperty(q,K,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==j)(q[K]=(...G)=>{return j(G.length),Y(...G)}).original=Y;else q[K]=Y}return $}var lq="/static/js/vendor/remote-display-decoder.wasm",E8=null;function P2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function y2(){if(E8)return E8;return E8=(async()=>{try{let Z=function(Y,Q,q,K,N,G,V){let X=P2(Q),U=j.__pin(j.__newArrayBuffer(X));try{return j[Y](U,q,K,N,G,V.bitsPerPixel,V.bigEndian?1:0,V.trueColor?1:0,V.redMax,V.greenMax,V.blueMax,V.redShift,V.greenShift,V.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(lq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof A8==="function"?await A8(_,{}):await t6(await _.arrayBuffer(),{})).exports;for(let Y of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Y]!=="function")throw Error(`${Y} export is missing.`);return{initFramebuffer(Y,Q){j.initFramebuffer(Y,Q)},getFramebuffer(){let Y=j.getFramebufferPtr(),Q=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Y,Q).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Y,Q,q,K,N,G){return Z("processRawRect",Y,Q,q,K,N,G)},processCopyRect(Y,Q,q,K,N,G){return j.processCopyRect(Y,Q,q,K,N,G)},processRreRect(Y,Q,q,K,N,G){return Z("processRreRect",Y,Q,q,K,N,G)},processHextileRect(Y,Q,q,K,N,G){return Z("processHextileRect",Y,Q,q,K,N,G)},processZrleTileData(Y,Q,q,K,N,G){return Z("processZrleTileData",Y,Q,q,K,N,G)},decodeRawRectToRgba(Y,Q,q,K){let N=P2(Y),G=j.__pin(j.__newArrayBuffer(N));try{let V=j.__pin(j.decodeRawRectToRgba(G,Q,q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(V))}finally{j.__unpin(V)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),E8}function V5(_,$,j){return Math.max($,Math.min(j,_))}function k8(_,$,j){let Z=new Uint8Array(6),Y=V5(Math.floor(Number($||0)),0,65535),Q=V5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=V5(Math.floor(Number(_||0)),0,255),Z[2]=Y>>8&255,Z[3]=Y&255,Z[4]=Q>>8&255,Z[5]=Q&255,Z}function _$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function S2(_,$,j,Z,Y){let Q=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Math.floor(Number(Y||0))),K=Math.max(1,Number(j?.width||0)),N=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/K,V=(Number($||0)-Number(j?.top||0))/N;return{x:V5(Math.floor(G*Q),0,Math.max(0,Q-1)),y:V5(Math.floor(V*q),0,Math.max(0,q-1))}}function w2(_,$,j,Z=0){let Y=Number(_)<0?8:16,Q=V5(Number(Z||0)|Y,0,255);return[k8(Q,$,j),k8(Number(Z||0),$,j)]}function R2(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function f5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function u2(_,$,j,Z){let Y=Math.max(1,Math.floor(Number(_||0))),Q=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),K=Math.max(1,Math.floor(Number(Z||0))),N=Math.min(Y/q,Q/K);if(!Number.isFinite(N)||N<=0)return 1;return Math.max(0.01,N)}var e6={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)e6[`F${_}`]=65470+(_-1);function $$(_){let $=[_?.key,_?.code];for(let Q of $)if(Q&&Object.prototype.hasOwnProperty.call(e6,Q))return e6[Q];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Y=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Y){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var P1=Uint8Array,W_=Uint16Array,X$=Int32Array,I8=new P1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),M8=new P1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),q$=new P1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),g2=function(_,$){var j=new W_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Y=new X$(j[30]);for(var Z=1;Z<30;++Z)for(var Q=j[Z];Q<j[Z+1];++Q)Y[Q]=Q-j[Z]<<5|Z;return{b:j,r:Y}},m2=g2(I8,2),h2=m2.b,K$=m2.r;h2[28]=258,K$[258]=28;var p2=g2(M8,0),nq=p2.b,f2=p2.r,N$=new W_(32768);for(m0=0;m0<32768;++m0)o_=(m0&43690)>>1|(m0&21845)<<1,o_=(o_&52428)>>2|(o_&13107)<<2,o_=(o_&61680)>>4|(o_&3855)<<4,N$[m0]=((o_&65280)>>8|(o_&255)<<8)>>1;var o_,m0,s_=function(_,$,j){var Z=_.length,Y=0,Q=new W_($);for(;Y<Z;++Y)if(_[Y])++Q[_[Y]-1];var q=new W_($);for(Y=1;Y<$;++Y)q[Y]=q[Y-1]+Q[Y-1]<<1;var K;if(j){K=new W_(1<<$);var N=15-$;for(Y=0;Y<Z;++Y)if(_[Y]){var G=Y<<4|_[Y],V=$-_[Y],X=q[_[Y]-1]++<<V;for(var U=X|(1<<V)-1;X<=U;++X)K[N$[X]>>N]=G}}else{K=new W_(Z);for(Y=0;Y<Z;++Y)if(_[Y])K[Y]=N$[q[_[Y]-1]++]>>15-_[Y]}return K},T4=new P1(288);for(m0=0;m0<144;++m0)T4[m0]=8;var m0;for(m0=144;m0<256;++m0)T4[m0]=9;var m0;for(m0=256;m0<280;++m0)T4[m0]=7;var m0;for(m0=280;m0<288;++m0)T4[m0]=8;var m0,m5=new P1(32);for(m0=0;m0<32;++m0)m5[m0]=5;var m0,dq=s_(T4,9,0),iq=s_(T4,9,1),rq=s_(m5,5,0),oq=s_(m5,5,1),j$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},m_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},Z$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},V$=function(_){return(_+7)/8|0},g5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new P1(_.subarray($,j))};var sq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],X_=function(_,$,j){var Z=Error($||sq[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,X_);if(!j)throw Z;return Z},aq=function(_,$,j,Z){var Y=_.length,Q=Z?Z.length:0;if(!Y||$.f&&!$.l)return j||new P1(0);var q=!j,K=q||$.i!=2,N=$.i;if(q)j=new P1(Y*3);var G=function(p0){var K0=j.length;if(p0>K0){var I0=new P1(Math.max(K0*2,p0));I0.set(j),j=I0}},V=$.f||0,X=$.p||0,U=$.b||0,L=$.l,H=$.d,O=$.m,J=$.n,W=Y*8;do{if(!L){V=m_(_,X,1);var D=m_(_,X+1,3);if(X+=3,!D){var E=V$(X)+4,u=_[E-4]|_[E-3]<<8,y=E+u;if(y>Y){if(N)X_(0);break}if(K)G(U+u);j.set(_.subarray(E,y),U),$.b=U+=u,$.p=X=y*8,$.f=V;continue}else if(D==1)L=iq,H=oq,O=9,J=5;else if(D==2){var c=m_(_,X,31)+257,l=m_(_,X+10,15)+4,T=c+m_(_,X+5,31)+1;X+=14;var I=new P1(T),z=new P1(19);for(var k=0;k<l;++k)z[q$[k]]=m_(_,X+k*3,7);X+=l*3;var f=j$(z),i=(1<<f)-1,b=s_(z,f,1);for(var k=0;k<T;){var o=b[m_(_,X,i)];X+=o&15;var E=o>>4;if(E<16)I[k++]=E;else{var r=0,t=0;if(E==16)t=3+m_(_,X,3),X+=2,r=I[k-1];else if(E==17)t=3+m_(_,X,7),X+=3;else if(E==18)t=11+m_(_,X,127),X+=7;while(t--)I[k++]=r}}var Y0=I.subarray(0,c),$0=I.subarray(c);O=j$(Y0),J=j$($0),L=s_(Y0,O,1),H=s_($0,J,1)}else X_(1);if(X>W){if(N)X_(0);break}}if(K)G(U+131072);var q0=(1<<O)-1,W0=(1<<J)-1,L0=X;for(;;L0=X){var r=L[Z$(_,X)&q0],w0=r>>4;if(X+=r&15,X>W){if(N)X_(0);break}if(!r)X_(2);if(w0<256)j[U++]=w0;else if(w0==256){L0=X,L=null;break}else{var E0=w0-254;if(w0>264){var k=w0-257,z0=I8[k];E0=m_(_,X,(1<<z0)-1)+h2[k],X+=z0}var v0=H[Z$(_,X)&W0],A0=v0>>4;if(!v0)X_(3);X+=v0&15;var $0=nq[A0];if(A0>3){var z0=M8[A0];$0+=Z$(_,X)&(1<<z0)-1,X+=z0}if(X>W){if(N)X_(0);break}if(K)G(U+131072);var R0=U+E0;if(U<$0){var g0=Q-$0,O0=Math.min($0,R0);if(g0+U<0)X_(3);for(;U<O0;++U)j[U]=Z[g0+U]}for(;U<R0;++U)j[U]=j[U-$0]}}if($.l=L,$.p=L0,$.b=U,$.f=V,L)V=1,$.m=O,$.d=H,$.n=J}while(!V);return U!=j.length&&q?g5(j,0,U):j.subarray(0,U)},L4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},v5=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},Y$=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Y=j.length,Q=j.slice();if(!Y)return{t:l2,l:0};if(Y==1){var q=new P1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(y,c){return y.f-c.f}),j.push({s:-1,f:25001});var K=j[0],N=j[1],G=0,V=1,X=2;j[0]={s:-1,f:K.f+N.f,l:K,r:N};while(V!=Y-1)K=j[j[G].f<j[X].f?G++:X++],N=j[G!=V&&j[G].f<j[X].f?G++:X++],j[V++]={s:-1,f:K.f+N.f,l:K,r:N};var U=Q[0].s;for(var Z=1;Z<Y;++Z)if(Q[Z].s>U)U=Q[Z].s;var L=new W_(U+1),H=G$(j[V-1],L,0);if(H>$){var Z=0,O=0,J=H-$,W=1<<J;Q.sort(function(c,l){return L[l.s]-L[c.s]||c.f-l.f});for(;Z<Y;++Z){var D=Q[Z].s;if(L[D]>$)O+=W-(1<<H-L[D]),L[D]=$;else break}O>>=J;while(O>0){var E=Q[Z].s;if(L[E]<$)O-=1<<$-L[E]++-1;else++Z}for(;Z>=0&&O;--Z){var u=Q[Z].s;if(L[u]==$)--L[u],++O}H=$}return{t:new P1(L),l:H}},G$=function(_,$,j){return _.s==-1?Math.max(G$(_.l,$,j+1),G$(_.r,$,j+1)):$[_.s]=j},v2=function(_){var $=_.length;while($&&!_[--$]);var j=new W_(++$),Z=0,Y=_[0],Q=1,q=function(N){j[Z++]=N};for(var K=1;K<=$;++K)if(_[K]==Y&&K!=$)++Q;else{if(!Y&&Q>2){for(;Q>138;Q-=138)q(32754);if(Q>2)q(Q>10?Q-11<<5|28690:Q-3<<5|12305),Q=0}else if(Q>3){q(Y),--Q;for(;Q>6;Q-=6)q(8304);if(Q>2)q(Q-3<<5|8208),Q=0}while(Q--)q(Y);Q=1,Y=_[K]}return{c:j.subarray(0,Z),n:$}},b5=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},c2=function(_,$,j){var Z=j.length,Y=V$($+2);_[Y]=Z&255,_[Y+1]=Z>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var Q=0;Q<Z;++Q)_[Y+Q+4]=j[Q];return(Y+4+Z)*8},b2=function(_,$,j,Z,Y,Q,q,K,N,G,V){L4($,V++,j),++Y[256];var X=Y$(Y,15),U=X.t,L=X.l,H=Y$(Q,15),O=H.t,J=H.l,W=v2(U),D=W.c,E=W.n,u=v2(O),y=u.c,c=u.n,l=new W_(19);for(var T=0;T<D.length;++T)++l[D[T]&31];for(var T=0;T<y.length;++T)++l[y[T]&31];var I=Y$(l,7),z=I.t,k=I.l,f=19;for(;f>4&&!z[q$[f-1]];--f);var i=G+5<<3,b=b5(Y,T4)+b5(Q,m5)+q,o=b5(Y,U)+b5(Q,O)+q+14+3*f+b5(l,z)+2*l[16]+3*l[17]+7*l[18];if(N>=0&&i<=b&&i<=o)return c2($,V,_.subarray(N,N+G));var r,t,Y0,$0;if(L4($,V,1+(o<b)),V+=2,o<b){r=s_(U,L,0),t=U,Y0=s_(O,J,0),$0=O;var q0=s_(z,k,0);L4($,V,E-257),L4($,V+5,c-1),L4($,V+10,f-4),V+=14;for(var T=0;T<f;++T)L4($,V+3*T,z[q$[T]]);V+=3*f;var W0=[D,y];for(var L0=0;L0<2;++L0){var w0=W0[L0];for(var T=0;T<w0.length;++T){var E0=w0[T]&31;if(L4($,V,q0[E0]),V+=z[E0],E0>15)L4($,V,w0[T]>>5&127),V+=w0[T]>>12}}}else r=dq,t=T4,Y0=rq,$0=m5;for(var T=0;T<K;++T){var z0=Z[T];if(z0>255){var E0=z0>>18&31;if(v5($,V,r[E0+257]),V+=t[E0+257],E0>7)L4($,V,z0>>23&31),V+=I8[E0];var v0=z0&31;if(v5($,V,Y0[v0]),V+=$0[v0],v0>3)v5($,V,z0>>5&8191),V+=M8[v0]}else v5($,V,r[z0]),V+=t[z0]}return v5($,V,r[256]),V+t[256]},tq=new X$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),l2=new P1(0),eq=function(_,$,j,Z,Y,Q){var q=Q.z||_.length,K=new P1(Z+q+5*(1+Math.ceil(q/7000))+Y),N=K.subarray(Z,K.length-Y),G=Q.l,V=(Q.r||0)&7;if($){if(V)N[0]=Q.r>>3;var X=tq[$-1],U=X>>13,L=X&8191,H=(1<<j)-1,O=Q.p||new W_(32768),J=Q.h||new W_(H+1),W=Math.ceil(j/3),D=2*W,E=function(d0){return(_[d0]^_[d0+1]<<W^_[d0+2]<<D)&H},u=new X$(25000),y=new W_(288),c=new W_(32),l=0,T=0,I=Q.i||0,z=0,k=Q.w||0,f=0;for(;I+2<q;++I){var i=E(I),b=I&32767,o=J[i];if(O[b]=o,J[i]=b,k<=I){var r=q-I;if((l>7000||z>24576)&&(r>423||!G)){V=b2(_,N,0,u,y,c,T,z,f,I-f,V),z=l=T=0,f=I;for(var t=0;t<286;++t)y[t]=0;for(var t=0;t<30;++t)c[t]=0}var Y0=2,$0=0,q0=L,W0=b-o&32767;if(r>2&&i==E(I-W0)){var L0=Math.min(U,r)-1,w0=Math.min(32767,I),E0=Math.min(258,r);while(W0<=w0&&--q0&&b!=o){if(_[I+Y0]==_[I+Y0-W0]){var z0=0;for(;z0<E0&&_[I+z0]==_[I+z0-W0];++z0);if(z0>Y0){if(Y0=z0,$0=W0,z0>L0)break;var v0=Math.min(W0,z0-2),A0=0;for(var t=0;t<v0;++t){var R0=I-W0+t&32767,g0=O[R0],O0=R0-g0&32767;if(O0>A0)A0=O0,o=R0}}}b=o,o=O[b],W0+=b-o&32767}}if($0){u[z++]=268435456|K$[Y0]<<18|f2[$0];var p0=K$[Y0]&31,K0=f2[$0]&31;T+=I8[p0]+M8[K0],++y[257+p0],++c[K0],k=I+Y0,++l}else u[z++]=_[I],++y[_[I]]}}for(I=Math.max(I,k);I<q;++I)u[z++]=_[I],++y[_[I]];if(V=b2(_,N,G,u,y,c,T,z,f,I-f,V),!G)Q.r=V&7|N[V/8|0]<<3,V-=7,Q.h=J,Q.p=O,Q.i=I,Q.w=k}else{for(var I=Q.w||0;I<q+G;I+=65535){var I0=I+65535;if(I0>=q)N[V/8|0]=G,I0=q;V=c2(N,V+1,_.subarray(I,I0))}Q.i=q}return g5(K,0,Z+V$(V)+Y)};var n2=function(){var _=1,$=0;return{p:function(j){var Z=_,Y=$,Q=j.length|0;for(var q=0;q!=Q;){var K=Math.min(q+2655,Q);for(;q<K;++q)Y+=Z+=j[q];Z=(Z&65535)+15*(Z>>16),Y=(Y&65535)+15*(Y>>16)}_=Z,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},_K=function(_,$,j,Z,Y){if(!Y){if(Y={l:1},$.dictionary){var Q=$.dictionary.subarray(-32768),q=new P1(Q.length+_.length);q.set(Q),q.set(_,Q.length),_=q,Y.w=Q.length}}return eq(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Y)};var d2=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var $K=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=n2();Y.p($.dictionary),d2(_,2,Y.d())}},jK=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)X_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)X_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var Q$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new P1(32768),this.p=new P1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)X_(5);if(this.d)X_(4);if(!this.p.length)this.p=$;else if($.length){var j=new P1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=aq(this.p,this.s,this.o);this.ondata(g5(Z,j,this.s.b),this.d),this.o=g5(Z,this.s.b-32768),this.s.b=this.o.length,this.p=g5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function i2(_,$){if(!$)$={};var j=n2();j.p(_);var Z=_K(_,$,$.dictionary?6:2,4);return $K(Z,$),d2(Z,Z.length-4,j.d()),Z}var r2=function(){function _($,j){Q$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(Q$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(jK(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)X_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}Q$.prototype.c.call(this,j)},_}();var ZK=typeof TextDecoder<"u"&&new TextDecoder,YK=0;try{ZK.decode(l2,{stream:!0}),YK=1}catch(_){}var QK=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],qK=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],KK=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],NK=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],GK=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],XK=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],VK=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],UK=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],a2=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;a2[_]=$}function t2(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function e2(_){let $=0n,j=t2(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function LK(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)j[Y]=Number(Z&0xffn),Z>>=8n;return j}function U5(_,$,j){let Z=0n;for(let Y of $){let Q=BigInt(_)>>BigInt(j-Y)&1n;Z=Z<<1n|Q}return Z}function o2(_,$){let j=28n,Z=(1n<<j)-1n,Y=BigInt($%28);return(_<<Y|_>>j-Y)&Z}function WK(_){let $=U5(e2(_),GK,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Y=[];for(let Q of VK){j=o2(j,Q),Z=o2(Z,Q);let q=j<<28n|Z;Y.push(U5(q,XK,56))}return Y}function BK(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Y=Number(_>>Z&0x3fn),Q=(Y&32)>>4|Y&1,q=Y>>1&15;$=$<<4n|BigInt(UK[j][Q][q])}return $}function zK(_,$){let j=U5(_,KK,32)^BigInt($),Z=BK(j);return U5(Z,NK,32)}function s2(_,$){let j=WK($),Z=U5(e2(_),QK,64),Y=Z>>32n&0xffffffffn,Q=Z&0xffffffffn;for(let K of j){let N=Q,G=(Y^zK(Q,K))&0xffffffffn;Y=N,Q=G}let q=Q<<32n|Y;return LK(U5(q,qK,64),8)}function FK(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Y=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=a2[Y]}return j}function _7(_,$){let j=t2($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=FK(_),Y=new Uint8Array(16);return Y.set(s2(j.slice(0,8),Z),0),Y.set(s2(j.slice(8,16),Z),8),Y}var h_="vnc";function HK(_){return Number(_)}function JK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],j=[],Z=new Set;for(let Y of $){let Q=HK(Y);if(!Number.isFinite(Q))continue;let q=Number(Q);if(!Z.has(q))j.push(q),Z.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function B5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function OK(_,$){let j=B5(_),Z=B5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Y=new Uint8Array(j.byteLength+Z.byteLength);return Y.set(j,0),Y.set(Z,j.byteLength),Y}function DK(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Y of _||[]){let Q=B5(Y);j.set(Q,Z),Z+=Q.byteLength}return j}function AK(){return(_)=>{let $=B5(_);try{let j=[],Z=new r2((Y)=>{j.push(new Uint8Array(Y))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return DK(j)}catch(j){try{let Z=i2($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Y=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function EK(_){return new TextEncoder().encode(String(_||""))}function L5(_){return new TextDecoder().decode(B5(_))}function kK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function IK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function $7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function MK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function xK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Y=4;for(let Q of $)Z.setInt32(Y,Number(Q||0),!1),Y+=4;return new Uint8Array(j)}function j7(_,$,j,Z=0,Y=0){let Q=new ArrayBuffer(10),q=new DataView(Q);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Z,!1),q.setUint16(4,Y,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Q)}function W5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function Y7(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function TK(_,$,j,Z){let Y=Z||z5,Q=B5(_),q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),K=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Q.byteLength<K)throw Error(`Incomplete raw rectangle payload: expected ${K} byte(s), got ${Q.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let N=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,V=0;for(let X=0;X<Math.max(0,$||0)*Math.max(0,j||0);X+=1){let U=Y7(Q,G,q,Y.bigEndian),L=W5(U>>>Y.redShift&Y.redMax,Y.redMax),H=W5(U>>>Y.greenShift&Y.greenMax,Y.greenMax),O=W5(U>>>Y.blueShift&Y.blueMax,Y.blueMax);N[V]=L,N[V+1]=H,N[V+2]=O,N[V+3]=255,G+=q,V+=4}return N}function W4(_,$,j){let Z=j||z5,Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let Q=Y7(_,$,Y,Z.bigEndian);return{rgba:[W5(Q>>>Z.redShift&Z.redMax,Z.redMax),W5(Q>>>Z.greenShift&Z.greenMax,Z.greenMax),W5(Q>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Y}}function C4(_,$,j,Z,Y,Q,q){if(!q)return;for(let K=0;K<Q;K+=1)for(let N=0;N<Y;N+=1){let G=((Z+K)*$+(j+N))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function Q7(_,$,j,Z,Y,Q,q){for(let K=0;K<Q;K+=1){let N=K*Y*4,G=((Z+K)*$+j)*4;_.set(q.subarray(N,N+Y*4),G)}}function Z7(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Y=_[j++];if(Z+=Y,Y!==255)break}return{consumed:j-$,runLength:Z}}function CK(_,$,j,Z,Y,Q,q){let K=Y||z5,N=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let V=_.slice($+4,$+4+G),X;try{X=q(V)}catch{return{consumed:4+G,skipped:!0}}let U=0,L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let H=0;H<Z;H+=64){let O=Math.min(64,Z-H);for(let J=0;J<j;J+=64){let W=Math.min(64,j-J);if(X.byteLength<U+1)return null;let D=X[U++],E=D&127,u=(D&128)!==0;if(!u&&E===0){let y=W*O*N;if(X.byteLength<U+y)return null;let c=Q(X.slice(U,U+y),W,O,K);U+=y,Q7(L,j,J,H,W,O,c);continue}if(!u&&E===1){let y=W4(X,U,K);if(!y)return null;U+=y.bytesPerPixel,C4(L,j,J,H,W,O,y.rgba);continue}if(!u&&E>1&&E<=16){let y=[];for(let I=0;I<E;I+=1){let z=W4(X,U,K);if(!z)return null;U+=z.bytesPerPixel,y.push(z.rgba)}let c=E<=2?1:E<=4?2:4,l=Math.ceil(W*c/8),T=l*O;if(X.byteLength<U+T)return null;for(let I=0;I<O;I+=1){let z=U+I*l;for(let k=0;k<W;k+=1){let f=k*c,i=z+(f>>3),b=8-c-(f&7),o=X[i]>>b&(1<<c)-1;C4(L,j,J+k,H+I,1,1,y[o])}}U+=T;continue}if(u&&E===0){let y=0,c=0;while(c<O){let l=W4(X,U,K);if(!l)return null;U+=l.bytesPerPixel;let T=Z7(X,U);if(!T)return null;U+=T.consumed;for(let I=0;I<T.runLength;I+=1)if(C4(L,j,J+y,H+c,1,1,l.rgba),y+=1,y>=W){if(y=0,c+=1,c>=O)break}}continue}if(u&&E>0){let y=[];for(let T=0;T<E;T+=1){let I=W4(X,U,K);if(!I)return null;U+=I.bytesPerPixel,y.push(I.rgba)}let c=0,l=0;while(l<O){if(X.byteLength<U+1)return null;let T=X[U++],I=T,z=1;if(T&128){I=T&127;let f=Z7(X,U);if(!f)return null;U+=f.consumed,z=f.runLength}let k=y[I];if(!k)return null;for(let f=0;f<z;f+=1)if(C4(L,j,J+c,H+l,1,1,k),c+=1,c>=W){if(c=0,l+=1,l>=O)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:L,decompressed:X}}function PK(_,$,j,Z,Y){let Q=Y||z5,q=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let N=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+N*(q+8);if(_.byteLength<$+G)return null;let V=$+4,X=W4(_,V,Q);if(!X)return null;V+=X.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);C4(U,j,0,0,j,Z,X.rgba);for(let L=0;L<N;L+=1){let H=W4(_,V,Q);if(!H)return null;if(V+=H.bytesPerPixel,_.byteLength<V+8)return null;let O=new DataView(_.buffer,_.byteOffset+V,8),J=O.getUint16(0,!1),W=O.getUint16(2,!1),D=O.getUint16(4,!1),E=O.getUint16(6,!1);V+=8,C4(U,j,J,W,D,E,H.rgba)}return{consumed:V-$,rgba:U}}function yK(_,$,j,Z,Y,Q){let q=Y||z5,K=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),G=$,V=[0,0,0,255],X=[255,255,255,255];for(let U=0;U<Z;U+=16){let L=Math.min(16,Z-U);for(let H=0;H<j;H+=16){let O=Math.min(16,j-H);if(_.byteLength<G+1)return null;let J=_[G++];if(J&1){let W=O*L*K;if(_.byteLength<G+W)return null;let D=Q(_.slice(G,G+W),O,L,q);G+=W,Q7(N,j,H,U,O,L,D);continue}if(J&2){let W=W4(_,G,q);if(!W)return null;V=W.rgba,G+=W.bytesPerPixel}if(C4(N,j,H,U,O,L,V),J&4){let W=W4(_,G,q);if(!W)return null;X=W.rgba,G+=W.bytesPerPixel}if(J&8){if(_.byteLength<G+1)return null;let W=_[G++];for(let D=0;D<W;D+=1){let E=X;if(J&16){let z=W4(_,G,q);if(!z)return null;E=z.rgba,G+=z.bytesPerPixel}if(_.byteLength<G+2)return null;let u=_[G++],y=_[G++],c=u>>4,l=u&15,T=(y>>4)+1,I=(y&15)+1;C4(N,j,H+c,U+l,T,I,E)}}}}return{consumed:G-$,rgba:N}}var z5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class x8{protocol=h_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:TK,this.pipeline=_.pipeline||null,this.encodings=JK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...z5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:AK()}receive(_){if(_)this.buffer=OK(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),Q=L5(Y),q=kK(Q);if(!q)throw Error(`Unsupported RFB version banner: ${Q||"<empty>"}`);this.serverVersion=q,this.clientVersionText=IK(q),j.push(EK(this.clientVersionText)),$.push({type:"protocol-version",protocol:h_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+N)break;this.consume(1);let G=L5(this.consume(4+N).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let Q=Array.from(this.consume(Y));$.push({type:"security-types",protocol:h_,types:Q});let q=null;if(Q.includes(2)&&this.password!==null)q=2;else if(Q.includes(1))q=1;else if(Q.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Q.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:h_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+K)break;let N=L5(this.consume(4+K).slice(4));throw Error(N||"VNC server rejected the connection.")}if(Q===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:h_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Q!==1)throw Error(`Unsupported VNC security type ${Q}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:h_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);j.push(_7(this.password,Y)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let K=L5(this.consume(4+q).slice(4));throw Error(K||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:h_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Q=Y.getUint16(0,!1),q=Y.getUint16(2,!1),K=$7(Y,4),N=Y.getUint32(20,!1);if(this.buffer.byteLength<24+N)break;let G=this.consume(24),V=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=V.getUint16(0,!1),this.framebufferHeight=V.getUint16(2,!1),this.serverPixelFormat=$7(V,4),this.serverName=L5(this.consume(N)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(MK(this.clientPixelFormat)),j.push(xK(this.encodings)),j.push(j7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:h_,width:Q,height:q,name:this.serverName,pixelFormat:K}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),K=4,N=[],G=!1,V=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<K+12){G=!0;break}let L=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,12),H=L.getUint16(0,!1),O=L.getUint16(2,!1),J=L.getUint16(4,!1),W=L.getUint16(6,!1),D=L.getInt32(8,!1);if(K+=12,D===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),u=J*W*E;if(this.buffer.byteLength<K+u){G=!0;break}let y=this.buffer.slice(K,K+u);if(K+=u,V)this.pipeline.processRawRect(y,H,O,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:O,width:J,height:W});else N.push({kind:"rgba",x:H,y:O,width:J,height:W,rgba:this.decodeRawRect(y,J,W,this.clientPixelFormat)});continue}if(D===2){let E=PK(this.buffer,K,J,W,this.clientPixelFormat);if(!E){G=!0;break}if(V){let u=this.buffer.slice(K,K+E.consumed);this.pipeline.processRreRect(u,H,O,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:O,width:J,height:W})}else N.push({kind:"rgba",x:H,y:O,width:J,height:W,rgba:E.rgba});K+=E.consumed;continue}if(D===1){if(this.buffer.byteLength<K+4){G=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,4),u=E.getUint16(0,!1),y=E.getUint16(2,!1);if(K+=4,V)this.pipeline.processCopyRect(H,O,J,W,u,y),N.push({kind:"pipeline",x:H,y:O,width:J,height:W});else N.push({kind:"copy",x:H,y:O,width:J,height:W,srcX:u,srcY:y});continue}if(D===16){let E=CK(this.buffer,K,J,W,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){G=!0;break}if(K+=E.consumed,E.skipped)continue;if(V&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,H,O,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:O,width:J,height:W});else N.push({kind:"rgba",x:H,y:O,width:J,height:W,rgba:E.rgba});continue}if(D===5){let E=yK(this.buffer,K,J,W,this.clientPixelFormat,this.decodeRawRect);if(!E){G=!0;break}if(V){let u=this.buffer.slice(K,K+E.consumed);this.pipeline.processHextileRect(u,H,O,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:O,width:J,height:W})}else N.push({kind:"rgba",x:H,y:O,width:J,height:W,rgba:E.rgba});K+=E.consumed;continue}if(D===-223){if(this.framebufferWidth=J,this.framebufferHeight=W,V)this.pipeline.initFramebuffer(J,W);N.push({kind:"resize",x:H,y:O,width:J,height:W});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(K);let X={type:"framebuffer-update",protocol:h_,width:this.framebufferWidth,height:this.framebufferHeight,rects:N};if(V)X.framebuffer=this.pipeline.getFramebuffer();$.push(X),j.push(j7(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:h_}),Z=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let K=L5(this.consume(q));$.push({type:"clipboard",protocol:h_,text:K}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var B4="piclaw://vnc";function SK(_){let $=String(_||"");if($===B4)return null;if(!$.startsWith(`${B4}/`))return null;let j=$.slice(`${B4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function wK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function RK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function uK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function fK(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function vK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class q7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=SK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=vK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${d4(Y.label||Y.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${d4(Y.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Y.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${d4(Y.id)}" data-target-label="${d4(Y.label||Y.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Y=fK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Y)return;this.authPassword=f5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Y,Y)};this.directHostInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Y of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Y.addEventListener("click",()=>{let Q=Y.getAttribute("data-target-open-tab"),q=Y.getAttribute("data-target-label")||Q||"VNC";if(!Q)return;this.openTargetTab(Q,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${d4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=f5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=f5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Q=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Y}${Q}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=u2($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return S2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(k8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=_$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~_$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of w2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(R2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=$$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??$$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Y of _.rects||[])if(Y.kind==="resize")this.ensureCanvasSize(Y.width,Y.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Y=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Y,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new x8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Y of Z.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of Z.events||[])this.applyRemoteDisplayEvent(Y)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await y2(),Y={};if(Z)Y.pipeline=Z,Y.decodeRawRect=(K,N,G,V)=>Z.decodeRawRectToRgba(K,N,G,V);let Q=f5(this.authPassword);if(Q!==null)Y.password=Q;if(j)Y.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new x8(Y),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new a6({url:uK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(K)=>{this.applyMetrics(K)},onMessage:(K)=>{this.handleSocketMessage(K)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await wK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await RK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var U$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===B4||$.startsWith(`${B4}/`)?9000:!1},mount(_,$){return new q7(_,$)}};function B_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function $1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function F5(_,$=!1){let j=B_(_);if(j===null)return $;return j==="true"}function h5(_,$=null){let j=B_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}var B$="piclaw_theme",C8="piclaw_tint",G7="piclaw_chat_themes",c5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},X7={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},K7={default:{label:"Default",mode:"auto",light:c5,dark:X7},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},bK=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],i4={theme:"default",tint:null},V7="light",L$=!1;function P8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function J5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Q)=>Q+Q).join(""):j,Y=parseInt(Z,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${Z.toLowerCase()}`}}function gK(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Y=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let Q=parseInt(Y[1],10),q=parseInt(Y[2],10),K=parseInt(Y[3],10);if(![Q,q,K].every((G)=>Number.isFinite(G)))return null;let N=`#${[Q,q,K].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Q,g:q,b:K,hex:N}}function U7(_){return J5(_)||gK(_)}function p5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Y=Math.round(_.g+($.g-_.g)*j),Q=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Y} ${Q})`}function W$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function mK(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Q=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Y+0.7152*Q+0.0722*q}function hK(_){return mK(_)>0.4?"#000000":"#ffffff"}function L7(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function z$(_){return K7[_]||K7.default}function pK(_){return _.mode==="auto"?L7():_.mode}function W7(_,$){let j=z$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||c5}function B7(_,$,j){let Z=U7($);if(!Z)return _;let Y=J5(_.bgPrimary),Q=J5(_.bgSecondary),q=J5(_.bgHover),K=J5(_.borderColor);if(!Y||!Q||!q||!K)return _;let G=J5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:p5(Y,Z,0.08),bgSecondary:p5(Q,Z,0.12),bgHover:p5(q,Z,0.16),borderColor:p5(K,Z,0.08),accent:Z.hex,accentHover:G?p5(Z,G,0.18):Z.hex}}function cK(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Y=U7(Z),Q=Y?W$(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Y?W$(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=Y?W$(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",N=Y?hK(Y):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":q,"--accent-soft-strong":K,"--accent-contrast-text":N,"--danger-color":_.danger||c5.danger,"--success-color":_.success||c5.success,"--search-highlight-color":Q||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([V,X])=>{if(X)j.style.setProperty(V,X)})}function lK(){if(typeof document>"u")return;let _=document.documentElement;bK.forEach(($)=>_.style.removeProperty($))}function H5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function N7(_){let $=P8(i4?.theme||"default"),j=i4?.tint?String(i4.tint).trim():null,Z=W7($,_);if($==="default"&&j)Z=B7(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?X7.bgPrimary:c5.bgPrimary}function nK(_,$){if(typeof document>"u")return;let j=H5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=H5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",N7("light"));let Y=H5("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",N7("dark"));let Q=H5("msapplication-TileColor");if(Q&&_)Q.setAttribute("content",_);let q=H5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let K=H5("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function dK(){if(typeof window>"u")return;let _={...i4,mode:V7};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function z7(){try{let _=B_(G7);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function iK(_,$,j){let Z=z7();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};$1(G7,JSON.stringify(Z))}function rK(_){if(!_)return null;return z7()[_]||null}function F7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function F$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=P8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Y=z$(j),Q=pK(Y),q=W7(j,Q);i4={theme:j,tint:Z},V7=Q;let K=document.documentElement;K.dataset.theme=Q,K.dataset.colorTheme=j,K.dataset.tint=Z?String(Z):"",K.style.colorScheme=Q;let N=q;if(j==="default"&&Z)N=B7(q,Z,Q);if(j==="default"&&!Z)lK();else cK(N,Q);if(nK(N.bgPrimary,Q),dK(),$.persist!==!1)if($1(B$,j),Z)$1(C8,Z);else $1(C8,"")}function T8(){if(z$(i4.theme).mode!=="auto")return;F$(i4,{persist:!1})}function H7(){if(typeof window>"u")return()=>{};let _=F7(),$=rK(_),j=$?P8($.theme||"default"):P8(B_(B$)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Y=B_(C8);return Y?Y.trim():null})();if(F$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!L$){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",T8);else if(Y.addListener)Y.addListener(T8);return L$=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",T8);else if(Y.removeListener)Y.removeListener(T8);L$=!1}}return()=>{}}function J7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||F7(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(iK($,j||"default",Z),F$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")$1(B$,j||"default"),$1(C8,Z||"")}function O7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return L7()}var y8=/#(\w+)/g,oK=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),sK=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),aK=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),tK={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},eK=new Set(["http:","https:","mailto:",""]);function H$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function r4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!eK.has(Z.protocol))return null;return Z.href}catch{return null}}function D7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Y=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Q;while(Q=Y.nextNode())Z.push(Q);for(let q of Z){let K=q.tagName.toLowerCase();if(!sK.has(K)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let N=tK[K]||new Set;for(let G of Array.from(q.attributes)){let V=G.name.toLowerCase(),X=G.value;if(V.startsWith("on")){q.removeAttribute(G.name);continue}if(V.startsWith("data-")||V.startsWith("aria-"))continue;if(N.has(V)||aK.has(V)){if(V==="href"){let U=r4(X);if(!U)q.removeAttribute(G.name);else if(q.setAttribute(G.name,U),K==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(V==="src"){let U=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(X):X,L=r4(U,{allowDataImage:K==="img"});if(!L)q.removeAttribute(G.name);else q.setAttribute(G.name,L)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function A7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function S8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Y=A7(j);if(Y===j)break;j=Y}return j}function _N(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=[],Q=!1,q=[];for(let K of j){if(!Q&&K.trim().match(/^```mermaid\s*$/i)){Q=!0,q=[];continue}if(Q&&K.trim().match(/^```\s*$/)){let N=Z.length;Z.push(q.join(`
`)),Y.push(`@@MERMAID_BLOCK_${N}@@`),Q=!1,q=[];continue}if(Q)q.push(K);else Y.push(K)}if(Q)Y.push("```mermaid"),Y.push(...q);return{text:Y.join(`
`),blocks:Z}}function $N(_){if(!_)return _;return S8(_,5)}function jN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function ZN(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function YN(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Y=Number(Z),Q=$[Y]??"",q=$N(Q);return`<div class="mermaid-container" data-mermaid="${jN(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function E7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var QN={span:new Set(["title","class","lang","dir"])};function qN(_,$){let j=QN[_];if(!j||!$)return"";let Z=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Q;while(Q=Y.exec($)){let q=(Q[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let K=Q[2]??Q[3]??Q[4]??"";Z.push(` ${q}="${H$(K)}"`)}return Z.join("")}function k7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Y=Z.startsWith("/"),Q=Y?Z.slice(1).trim():Z,K=Q.endsWith("/")?Q.slice(0,-1).trim():Q,[N=""]=K.split(/\s+/,1),G=N.toLowerCase();if(!G||!oK.has(G))return $;if(G==="br")return Y?"":"<br>";if(Y)return`</${G}>`;let V=K.slice(N.length).trim(),X=qN(G,V);return`<${G}${X}>`})}function I7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function M7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Q)=>Q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=j.nextNode()){if(!Y.nodeValue)continue;let Q=Z(Y.nodeValue);if(Q!==Y.nodeValue)Y.nodeValue=Q}return $.body.innerHTML}function KN(_){if(!window.katex)return _;let $=(q)=>A7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let K=[],N=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let V=K.length;return K.push(G),`@@CODE_BLOCK_${V}@@`});return N=N.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let V=K.length;return K.push(G),`@@CODE_INLINE_${V}@@`}),{html:N,blocks:K}},Z=(q,K)=>{if(!K.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(N,G)=>{let V=Number(G);return K[V]??""})},Y=j(_),Q=Y.html;return Q=Q.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,K,N)=>{try{let G=katex.renderToString($(N.trim()),{displayMode:!0,throwOnError:!1});return`${K}${G}`}catch(G){return`<span class="math-error" title="${H$(G.message)}">${q}</span>`}}),Q=Q.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,K,N)=>{if(/\s$/.test(N))return q;try{let G=katex.renderToString($(N),{displayMode:!1,throwOnError:!1});return`${K}${G}`}catch(G){return`${K}<span class="math-error" title="${H$(G.message)}">$${N}$</span>`}}),Z(Q,Y.blocks)}function NN(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Y;while(Y=j.nextNode())Z.push(Y);for(let Q of Z){let q=Q.nodeValue;if(!q)continue;if(y8.lastIndex=0,!y8.test(q))continue;y8.lastIndex=0;let K=Q.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let N=q.split(y8);if(N.length<=1)continue;let G=$.createDocumentFragment();N.forEach((V,X)=>{if(X%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",V),U.textContent=`#${V}`,G.appendChild(U)}else G.appendChild($.createTextNode(V))}),Q.parentNode?.replaceChild(G,Q)}return $.body.innerHTML}function GN(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=!1;for(let Q of j){if(!Y&&Q.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,Z.push("$$");continue}if(Y&&Q.trim().match(/^```\s*$/)){Y=!1,Z.push("$$");continue}Z.push(Q)}return Z.join(`
`)}function XN(_){let $=GN(_||""),{text:j,blocks:Z}=_N($),Y=S8(j,2),q=E7(Y).replace(/</g,"&lt;");return{safeHtml:k7(q),mermaidBlocks:Z}}function z_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Y}=XN(_),Q=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Q=I7(Q),Q=M7(Q),Q=KN(Q),Q=NN(Q),Q=YN(Q,Y),Q=D7(Q,j),Q}function l5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=S8($,2),Y=E7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q=k7(Y),q=window.marked?marked.parse(Q):Q.replace(/\n/g,"<br>");return q=I7(q),q=M7(q),q=D7(q),q}function VN(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Y,Q)=>{let q=Y.trim().split(/\s+/).map((N)=>{let[G,V]=N.split(",").map(Number);return{x:G,y:V}});if(q.length<3)return`<polyline${Z}points="${Y}"${Q}/>`;let K=[`M ${q[0].x},${q[0].y}`];for(let N=1;N<q.length-1;N++){let G=q[N-1],V=q[N],X=q[N+1],U=V.x-G.x,L=V.y-G.y,H=X.x-V.x,O=X.y-V.y,J=Math.sqrt(U*U+L*L),W=Math.sqrt(H*H+O*O),D=Math.min($,J/2,W/2);if(D<0.5){K.push(`L ${V.x},${V.y}`);continue}let E=V.x-U/J*D,u=V.y-L/J*D,y=V.x+H/W*D,c=V.y+O/W*D,T=U*O-L*H>0?1:0;K.push(`L ${E},${u}`),K.push(`A ${D},${D} 0 0 ${T} ${y},${c}`)}return K.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Z}d="${K.join(" ")}"${Q}/>`})}async function z4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Y=O7()==="dark"?j["tokyo-night"]:j["github-light"],Q=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Q)try{let K=q.dataset.mermaid,N=ZN(K||""),G=S8(N,2),V=await $(G,{...Y,transparent:!0});V=VN(V),q.innerHTML=V,q.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let N=document.createElement("pre");N.className="mermaid-error",N.textContent=`Diagram error: ${K.message}`,q.innerHTML="",q.appendChild(N),q.removeAttribute("data-mermaid")}}function x7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Y=Z/1000,Q=86400000;if(Z<Q){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(Z<5*Q){let N=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${K}`}function n5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function S_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function o4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function P4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function UN(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=Z?.[1]||j,Q=Z?.[2]||"",q=Z?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),G=Y.startsWith("/")?Y:`${K?`${K}/`:""}${Y}`,V=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(V.length>0)V.pop();continue}V.push(U)}let X=V.join("/");return`${z8(X)}${Q}${q}`}function d5(_){return _?.preview||null}function LN(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Y=Z.lastIndexOf(".");if(Y<=0||Y===Z.length-1)return"none";return Z.slice(Y+1)}function WN(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function BN(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${P4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${P4(S_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${P4(o4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${P4(WN($))}</span>`),Z.push(`<span><strong>extension:</strong> ${P4(LN(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${P4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function zN(_){let $=d5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=BN(_,$);if($.kind==="image"){let Z=$.url||($.path?z8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${P4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=z_($.text||"",null,{rewriteImageSrc:(Y)=>UN(Y,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${P4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class J${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=zN(this.context)}getContent(){let _=d5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=d5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var O$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=d5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new J$(_,$)}},D$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return d5(_)||_?.path?1:!1},mount(_,$){return new J$(_,$)}};var FN=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),HN={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},JN={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function C7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function T7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class P7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=C7(j),Q=JN[Y]||"\uD83D\uDCC4",q=HN[Y]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Q}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${T7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${T7(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let N=K.querySelector("#ov-open-tab");if(N)N.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class y7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var A$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=C7(_?.path);if(!$||!FN.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new P7(_,$);return new y7(_,$)}};var ON=/\.(csv|tsv)$/i;function S7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class w7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Y=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${S7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${S7(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class R7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var E$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ON.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new w7(_,$);return new R7(_,$)}};var DN=/\.pdf$/i;function AN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class u7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
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
        `,_.appendChild(Y);let Q=Y.querySelector("#pdf-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!DN.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new u7(_,$);return new f7(_,$)}};var EN=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function I$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${I$(Y)}" alt="${I$(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${I$(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class b7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var M$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!EN.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new v7(_,$);return new b7(_,$)}};var kN=/\.(mp4|m4v|mov|webm|ogv)$/i;function IN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class g7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${IN(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#video-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class m7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var x$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!kN.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new g7(_,$);return new m7(_,$)}};function MN(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function xN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var T$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function h7(_){let $=String(_||"").trim();return $?$:T$}function TN(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function CN(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function PN(_,$="*"){try{let j=(Q)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Q}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Q=Z.prototype.saveData;Z.prototype.saveData=function(q,K,N,G,V,X){try{if(q&&N!=null&&j({filename:q,format:K,data:N,mimeType:G,base64Encoded:Boolean(V),defaultMode:X}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Q.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Y=_.App;if(Y?.prototype&&!Y.prototype.__piclawExportPatched){let Q=Y.prototype.exportFile;Y.prototype.exportFile=function(q,K,N,G,V,X){try{if(K&&j({filename:K,data:q,mimeType:N,base64Encoded:Boolean(G),mode:V,folderId:X}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Q.apply(this,arguments)},Y.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Y?.prototype&&Y.prototype.__piclawExportPatched)}catch{return!1}}async function p7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${CN(j)}`}class c7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
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
        `,_.appendChild(Y);let Q=Y.querySelector("#drawio-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class l7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=TN(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Y=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Q=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(PN(this.iframe.contentWindow))return;setTimeout(Q,250)};Q()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=T$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await p7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await p7(_,"image/png");else this.xmlData=h7(await _.text());else if(_.status===404)this.xmlData=T$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?h7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var C$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!MN(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new c7(_,$);return new l7(_,$)}};var yN=/\.mindmap\.ya?ml$/i,P$=String(Date.now());function n7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function y$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function SN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function wN(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Z)}class d7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
            </div>`,_.appendChild(Y),Y.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class i7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(n7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,SN("/static/css/mindmap.css"),await Promise.all([y$("/static/js/vendor/d3-mindmap.min.js?v="+P$),y$("/static/js/vendor/js-yaml.min.js?v="+P$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),wN(this.mindmapEl);let j=n7(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await y$("/static/js/vendor/mindmap-editor.js?v="+P$),this.disposed)return;let Y=window.__mindmapEditor;if(!Y)throw Error("__mindmapEditor not found");if(Y.mount({content:$,isDark:j,onEdit:(Q)=>{this.lastContent=Q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Q)},resolveImagePath:(Q)=>{if(Q.startsWith("data:")||Q.startsWith("http"))return Q;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Q)}`}}),this.pendingContent!==null)Y.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Y){if(console.error("[mindmap] Failed to load mindmap renderer:",Y),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var S$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!yN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new d7(_,$);return new i7(_,$)}};var RN=/\.kanban\.md$/i,uN=String(Date.now());function r7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function fN(){let _=window;if(_.preact)return;_.preact={h:U8,render:x4,Component:Y5,createContext:G2},_.preactHooks={useState:g,useEffect:v,useCallback:C,useRef:x,useMemo:S0,useReducer:J6,useContext:U2,useLayoutEffect:x5,useImperativeHandle:V2,useErrorBoundary:W2,useDebugValue:L2},_.htm={bind:()=>B}}function vN(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function bN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class o7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
        `,_.appendChild(Y),Y.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class s7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(r7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,bN("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=r7();try{if(fN(),await vN("/static/js/vendor/kanban-editor.js?v="+uN),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var w$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!RN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new o7(_,$);return new s7(_,$)}};class a7{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var r0=new a7;function t7({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Y}){let Q=x(_);Q.current=_;let q=x($);q.current=$;let K=x(j);K.current=j;let N=x(Z);N.current=Z,v(()=>{let G=new H8((X,U)=>Q.current(X,U),(X)=>q.current(X),{chatJid:Y});G.connect();let V=()=>{G.reconnectIfNeeded();let X=typeof document<"u"?document:null;if(!X||X.visibilityState==="visible")N.current?.()};return window.addEventListener("focus",V),document.addEventListener("visibilitychange",V),()=>{window.removeEventListener("focus",V),document.removeEventListener("visibilitychange",V),G.disconnect()}},[Y])}function e7(){let[_,$]=g(!1),[j,Z]=g("default"),Y=x(!1);v(()=>{let N=F5("notificationsEnabled",!1);if(Y.current=N,$(N),typeof Notification<"u")Z(Notification.permission)},[]),v(()=>{Y.current=_},[_]);let Q=C(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch{return Promise.resolve("default")}},[]),q=C(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Q();if(Z(G||"default"),G!=="granted"){Y.current=!1,$(!1),$1("notificationsEnabled","false");return}}let N=!Y.current;Y.current=N,$(N),$1("notificationsEnabled",String(N))},[Q]),K=C((N,G)=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let V=new Notification(N,{body:G});return V.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:K}}var i5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function _9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Y]=g(null),[Q,q]=g(!1),K=x(!1),N=x(null),G=x(!1),V=x(null),X=x(null),U=x(0);v(()=>{K.current=Q},[Q]),v(()=>{X.current=Z},[Z]),v(()=>{U.current+=1,V.current=null,G.current=!1,K.current=!1,q(!1)},[j]);let L=C(async(J=null)=>{let W=U.current;try{if(J){let D=await D6(J,50,0,j);if(W!==U.current)return;Y(D.posts),q(!1)}else{let D=await n4(10,null,j);if(W!==U.current)return;Y(D.posts),q(D.has_more)}}catch(D){if(W!==U.current)return;console.error("Failed to load posts:",D)}},[j]),H=C(async()=>{let J=U.current;try{let W=await n4(10,null,j);if(J!==U.current)return;Y((D)=>{if(!D||D.length===0)return W.posts;return i5([...W.posts,...D])}),q((D)=>D||W.has_more)}catch(W){if(J!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j]),O=C(async(J={})=>{let W=U.current,D=X.current;if(!D||D.length===0)return;if(G.current)return;let{preserveScroll:E=!0,preserveMode:u="top",allowRepeat:y=!1}=J,c=(I)=>{if(!E){I();return}if(u==="top")$(I);else _(I)},T=D.slice().sort((I,z)=>I.id-z.id)[0]?.id;if(!Number.isFinite(T))return;if(!y&&V.current===T)return;G.current=!0,V.current=T;try{let I=await n4(10,T,j);if(W!==U.current)return;if(I.posts.length>0)c(()=>{Y((z)=>i5([...I.posts,...z||[]])),q(I.has_more)});else q(!1)}catch(I){if(W!==U.current)return;console.error("Failed to load more posts:",I)}finally{if(W===U.current)G.current=!1}},[j,_,$]);return v(()=>{N.current=O},[O]),{posts:Z,setPosts:Y,hasMore:Q,setHasMore:q,hasMoreRef:K,loadPosts:L,refreshTimeline:H,loadMore:O,loadMoreRef:N,loadingMoreRef:G,lastBeforeIdRef:V}}function $9(){let[_,$]=g(null),[j,Z]=g({text:"",totalLines:0}),[Y,Q]=g(""),[q,K]=g({text:"",totalLines:0}),[N,G]=g(null),[V,X]=g(null),[U,L]=g(null),H=x(null),O=x(0),J=x(!1),W=x(""),D=x(""),E=x(null),u=x(null),y=x(null),c=x(null),l=x(!1),T=x(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Y,setAgentPlan:Q,agentThought:q,setAgentThought:K,pendingRequest:N,setPendingRequest:G,currentTurnId:V,setCurrentTurnId:X,steerQueuedTurnId:U,setSteerQueuedTurnId:L,lastAgentEventRef:H,lastSilenceNoticeRef:O,isAgentRunningRef:J,draftBufferRef:W,thoughtBufferRef:D,pendingRequestRef:E,stalledPostIdRef:u,currentTurnIdRef:y,steerQueuedTurnIdRef:c,thoughtExpandedRef:l,draftExpandedRef:T}}function j9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Y=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientX,L=$.current||280,H=V.currentTarget;H.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let O=U,J=(D)=>{O=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),160),600);X.style.setProperty("--sidebar-width",`${E}px`),$.current=E},W=()=>{let D=Math.min(Math.max(L+(O-U),160),600);$.current=D,H.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",$1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,Q=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientX,H=$.current||280,O=V.currentTarget;O.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let u=Math.min(Math.max(H+(E.clientX-L),160),600);X.style.setProperty("--sidebar-width",`${u}px`),$.current=u},W=()=>{O.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.userSelect="",$1("sidebarWidth",String(Math.round($.current||H))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,q=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientX,L=j.current||$.current||280,H=V.currentTarget;H.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let O=U,J=(D)=>{O=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),200),800);X.style.setProperty("--editor-width",`${E}px`),j.current=E},W=()=>{let D=Math.min(Math.max(L+(O-U),200),800);j.current=D,H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,K=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientX,H=j.current||$.current||280,O=V.currentTarget;O.classList.add("dragging"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let u=Math.min(Math.max(H+(E.clientX-L),200),800);X.style.setProperty("--editor-width",`${u}px`),j.current=u},W=()=>{O.classList.remove("dragging"),document.body.style.userSelect="",$1("editorWidth",String(Math.round(j.current||H))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,N=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientY,L=Z?.current||200,H=V.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let O=U,J=(D)=>{O=D.clientY;let E=Math.min(Math.max(L-(D.clientY-U),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${E}px`),Z)Z.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{let D=Math.min(Math.max(L-(O-U),100),window.innerHeight*0.5);if(Z)Z.current=D;H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,G=x((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientY,H=Z?.current||200,O=V.currentTarget;O.classList.add("dragging"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let u=Math.min(Math.max(H-(E.clientY-L),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${u}px`),Z)Z.current=u;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{O.classList.remove("dragging"),document.body.style.userSelect="",$1("dockHeight",String(Math.round(Z?.current||H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:Q,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:N,handleDockSplitterTouchStart:G}}function gN(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Y=!1,Q=new Map;for(let[q,K]of _.entries()){let N=q;if(Z==="dir"){if(q===$)N=j,Y=!0;else if(q.startsWith(`${$}/`))N=`${j}${q.slice($.length)}`,Y=!0}else if(q===$)N=j,Y=!0;Q.set(N,K)}return Y?Q:_}function Z9({onTabClosed:_}={}){let $=x(_);$.current=_;let[j,Z]=g(()=>r0.getTabs()),[Y,Q]=g(()=>r0.getActiveId()),[q,K]=g(()=>r0.getTabs().length>0);v(()=>{return r0.onChange((T,I)=>{Z(T),Q(I),K(T.length>0)})},[]);let[N,G]=g(()=>new Set),[V,X]=g(()=>new Map),U=C((T)=>{G((I)=>{let z=new Set(I);if(z.has(T))z.delete(T);else z.add(T);return z})},[]),L=C((T)=>{G((I)=>{if(!I.has(T))return I;let z=new Set(I);return z.delete(T),z})},[]),H=C((T)=>{X((I)=>{if(!I.has(T))return I;let z=new Map(I);return z.delete(T),z})},[]),O=C((T,I={})=>{if(!T)return;let z=typeof I?.paneOverrideId==="string"&&I.paneOverrideId.trim()?I.paneOverrideId.trim():null,k={path:T,mode:"edit"};try{if(!(z?h0.get(z):h0.resolve(k))){if(!h0.get("editor")){console.warn(`[openEditor] No pane handler for: ${T}`);return}}}catch(i){console.warn(`[openEditor] paneRegistry.resolve() error for "${T}":`,i)}let f=typeof I?.label==="string"&&I.label.trim()?I.label.trim():void 0;if(r0.open(T,f),z)X((i)=>{if(i.get(T)===z)return i;let b=new Map(i);return b.set(T,z),b})},[]),J=C(()=>{let T=r0.getActiveId();if(T){let I=r0.get(T);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}r0.close(T),L(T),H(T),$.current?.(T)}},[H,L]),W=C((T)=>{let I=r0.get(T);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}r0.close(T),L(T),H(T),$.current?.(T)},[H,L]),D=C((T)=>{r0.activate(T)},[]),E=C((T)=>{let I=r0.getTabs().filter((f)=>f.id!==T&&!f.pinned),z=I.filter((f)=>f.dirty).length;if(z>0){if(!window.confirm(`${z} unsaved tab${z>1?"s":""} will be closed. Continue?`))return}let k=I.map((f)=>f.id);r0.closeOthers(T),k.forEach((f)=>{L(f),H(f),$.current?.(f)})},[H,L]),u=C(()=>{let T=r0.getTabs().filter((k)=>!k.pinned),I=T.filter((k)=>k.dirty).length;if(I>0){if(!window.confirm(`${I} unsaved tab${I>1?"s":""} will be closed. Continue?`))return}let z=T.map((k)=>k.id);r0.closeAll(),z.forEach((k)=>{L(k),H(k),$.current?.(k)})},[H,L]),y=C((T)=>{r0.togglePin(T)},[]),c=C((T)=>{if(!T)return;X((I)=>{if(I.get(T)==="editor")return I;let z=new Map(I);return z.set(T,"editor"),z}),r0.activate(T)},[]),l=C(()=>{let T=r0.getActiveId();if(T)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:T}}))},[]);return v(()=>{let T=(I)=>{let{oldPath:z,newPath:k,type:f}=I.detail||{};if(!z||!k)return;if(f==="dir"){for(let i of r0.getTabs())if(i.path===z||i.path.startsWith(`${z}/`)){let b=`${k}${i.path.slice(z.length)}`;r0.rename(i.id,b)}}else r0.rename(z,k);X((i)=>gN(i,z,k,f))};return window.addEventListener("workspace-file-renamed",T),()=>window.removeEventListener("workspace-file-renamed",T)},[]),v(()=>{let T=(I)=>{if(r0.hasUnsaved())I.preventDefault(),I.returnValue=""};return window.addEventListener("beforeunload",T),()=>window.removeEventListener("beforeunload",T)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Y,previewTabs:N,tabPaneOverrides:V,openEditor:O,closeEditor:J,handleTabClose:W,handleTabActivate:D,handleTabCloseOthers:E,handleTabCloseAll:u,handleTabTogglePin:y,handleTabTogglePreview:U,handleTabEditSource:c,revealInExplorer:l}}function R$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=j[_]??window[Z],Q=Number(Y);return Number.isFinite(Q)?Q:$}catch{return $}}var u$=R$("warning",30000),Y9=R$("finalize",120000),f$=R$("refresh",30000),Q9=30000;function q9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function K9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function N9(_=30000){let[,$]=g(0);v(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function G9(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Y)=>Z+Math.max(1,Math.ceil(Y.length/$)),0)}async function X9(_){let{panelKey:$,expanded:j,currentTurnIdRef:Z,thoughtExpandedRef:Y,draftExpandedRef:Q,setAgentThoughtVisibility:q,getAgentThought:K,thoughtBufferRef:N,draftBufferRef:G,setAgentThought:V,setAgentDraft:X}=_;if($!=="thought"&&$!=="draft")return;let U=Z.current;if($==="thought"){if(Y.current=j,U)try{await q(U,"thought",j)}catch(L){console.warn("Failed to update thought visibility:",L)}if(!j)return;try{let L=U?await K(U,"thought"):null;if(L?.text)N.current=L.text;V((H)=>({...H||{text:"",totalLines:0},fullText:N.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full thought:",L)}return}if(Q.current=j,U)try{await q(U,"draft",j)}catch(L){console.warn("Failed to update draft visibility:",L)}if(!j)return;try{let L=U?await K(U,"draft"):null;if(L?.text)G.current=L.text;X((H)=>({...H||{text:"",totalLines:0},fullText:G.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full draft:",L)}}function v$(_){return String(_||"").trim()||"web:default"}function V9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function mN(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function y4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function w8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return y4(_)?"Compacting context":"Working..."}function hN(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function R8(_,$=Date.now()){let j=mN(_);if(j===null)return null;return hN(Math.max(0,$-j))}function r5(_){return typeof _==="string"}function U9(_){return typeof _==="string"&&_.trim().length>0}function b$(_){if(!Array.isArray(_))return[];return _.filter(($)=>U9($?.chat_jid)&&U9($?.agent_name))}function L9(_){if(!Array.isArray(_))return[];return _.filter(($)=>r5($?.chat_jid)&&r5($?.agent_name))}function W9(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Z=new Map;if(Array.isArray(_)){for(let q of _)if(r5(q?.chat_jid))Z.set(q.chat_jid,q)}let Y=$.map((q)=>{if(!r5(q?.chat_jid))return q;let K=Z.get(q.chat_jid);return K?{...q,...K,is_active:K.is_active??q.is_active}:q}),Q=r5(j)?j:"";return Y.sort((q,K)=>{if(q.chat_jid===Q&&K.chat_jid!==Q)return-1;if(K.chat_jid===Q&&q.chat_jid!==Q)return 1;let N=Boolean(q.archived_at),G=Boolean(K.archived_at);if(N!==G)return N?1:-1;if(Boolean(q.is_active)!==Boolean(K.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(K.chat_jid))}),Y}var pN={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function B9(_){if(!_||typeof _!=="object")return pN;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function z9(_){let j=(Array.isArray(_)?_:[]).find((Z)=>Z?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function F9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Z=String(j),Y=_.agent_name,Q=_.agent_avatar;if(!Y&&Q===void 0)return null;let q=$||{id:Z},K=q.name||null,N=q.avatar_url??q.avatarUrl??q.avatar??null,G=!1,V=!1;if(Y&&Y!==q.name)K=Y,G=!0;if(Q!==void 0){let X=typeof Q==="string"?Q.trim():null,U=typeof N==="string"?N.trim():null,L=X||null;if(L!==(U||null))N=L,V=!0}if(!G&&!V)return null;return{agentId:Z,nameChanged:G,avatarChanged:V,resolvedName:K,resolvedAvatar:N}}function H9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Z=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Y=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Z&&_.avatar_background===Y)return _;return{name:j,avatar_url:Z,avatar_background:Y}}function J9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Z=$.user_avatar??$.userAvatar,Y=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Z===void 0&&Y===void 0)return _;let Q=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Z===void 0?_.avatar_url:typeof Z==="string"&&Z.trim()?Z.trim():null,K=Y===void 0?_.avatar_background:typeof Y==="string"&&Y.trim()?Y.trim():null;if(_.name===Q&&_.avatar_url===q&&_.avatar_background===K)return _;return{name:Q,avatar_url:q,avatar_background:K}}function cN(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function O9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Z=_.filter((Y)=>!j.has(Y?.id)&&!cN(Y));return Z.length===_.length?_:Z}function D9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Z)=>({...Z})).filter((Z)=>!j.has(Z.row_id)):[]}function A9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Z)=>j?.row_id===$[Z]?.row_id)}function S4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Z)=>Z?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function E9(_,$){let j=Array.isArray(_)?_:[],Z=$?.row_id,Y=$?.content;if(Z==null||typeof Y!=="string"||!Y.trim())return j;if(j.some((Q)=>Q?.row_id===Z))return j;return[...j,{row_id:Z,content:Y,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function k9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function I9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y}=_;try{let Q=await $();j(q9(Q));let q=Q?.user||{};Z((N)=>H9(N,q));let K=z9(Q?.agents);Y(K.name,K.avatarUrl)}catch(Q){console.warn("Failed to load agents:",Q)}}function M9(_){let{payload:$,agentsRef:j,setAgents:Z,applyBranding:Y}=_,Q=F9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!Q)return;if(Z((q)=>{let N={...q[Q.agentId]||{id:Q.agentId}};if(Q.nameChanged)N.name=Q.resolvedName;if(Q.avatarChanged)N.avatar_url=Q.resolvedAvatar;return{...q,[Q.agentId]:N}}),Q.agentId==="default")Y(Q.resolvedName,Q.resolvedAvatar,Q.avatarChanged?Date.now():null)}function x9(_){let{payload:$,setUserProfile:j}=_;j((Z)=>J9(Z,$))}function T9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Z,setSupportsThinking:Y,setActiveModelUsage:Q}=_,q=B9($);if(q.hasModel)j(q.model);if(q.hasThinkingLevel)Z(q.thinkingLevel);if(q.hasSupportsThinking)Y(q.supportsThinking);if(q.hasProviderUsage)Q(q.providerUsage)}function C9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Z,applyModelState:Y}=_,Q=$;j(Q).then((q)=>{if(Z.current!==Q)return;if(q)Y(q)}).catch(()=>{})}function P9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Z,activeChatJidRef:Y,setActiveChatAgents:Q}=_,q=$;Promise.all([j().catch(()=>({chats:[]})),Z(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([K,N])=>{if(Y.current!==q)return;let G=b$(K?.chats),V=b$(N?.chats);Q(W9(G,V,q))}).catch(()=>{if(Y.current!==q)return;Q([])})}function y9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Z}=_;j($).then((Y)=>{Z(L9(Y?.chats))}).catch(()=>{})}function S9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshContextUsage:Y,refreshAutoresearchStatus:Q,refreshQueueState:q}=_;if(!$||typeof $!=="object")return;if(j(),Z(),Y(),Q(),k9($))q()}function g$(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function w9(_,$){let j=new Map(_),Z=g$($);if(typeof $?.key==="string"&&$.key&&Z)j.set($.key,Z);else j.delete("autoresearch");return j}function R9(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Z=new Map(_),Y=g$($);if($?.options?.remove||!Y)Z.delete(j);else Z.set(j,Y);return Z}function u9(_){if(_?.options?.remove)return!0;return g$(_)?.state!=="running"}function m$(_,$){return`${_}:${$}`}function f9(_,$,j){let Z=m$($,j);if(_.has(Z))return _;let Y=new Set(_);return Y.add(Z),Y}function v9(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function u8(_,$){if(_.size===0)return _;let j=`${$}:`,Z=new Set(Array.from(_).filter((Y)=>!String(Y).startsWith(j)));return Z.size===_.size?_:Z}async function b9(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Z=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Z)throw Error("No tmux command available.");return await _.writeClipboard(Z),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function a_(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function g9(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function h$(_,$){return _&&$}function m9(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function h9(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function p9(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Z=new Set(j),Y=_.filter((Q)=>!Z.has(Q?.id));return Y.length===_.length?_:Y}function c9(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Z,dismissedQueueRowIdsRef:Y,getAgentQueueState:Q,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:K}=_,N=++j.current,G=$;Q(G).then((V)=>{if(N!==j.current)return;if(Z.current!==G)return;let X=Y.current,U=D9(V?.items,X);if(U.length){q((L)=>A9(L,U)?L:U);return}X.clear(),K(0),q((L)=>L.length===0?L:[])}).catch(()=>{if(N!==j.current)return;if(Z.current!==G)return;q((V)=>V.length===0?V:[])})}async function l9(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Z,setContextUsage:Y}=_,Q=$;try{let q=await Z(Q);if(j.current!==Q)return;if(q)Y(q)}catch(q){if(j.current!==Q)return;console.warn("Failed to fetch agent context:",q)}}async function n9(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Z,setExtensionStatusPanels:Y,setPendingExtensionPanelActions:Q}=_,q=$;try{let K=await Z(q);if(j.current!==q)return;Y((N)=>w9(N,K)),Q((N)=>u8(N,"autoresearch"))}catch(K){if(j.current!==q)return;console.warn("Failed to fetch autoresearch status:",K)}}function d9(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshQueueState:Y,refreshContextUsage:Q,refreshAutoresearchStatus:q}=_;$(),j(),Z(),Y(),Q(),q()}function i9(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Z}=_;if(a_($.current))j();Z()}function r9(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Z,minWidth:Y=160,maxWidth:Q=600,fallbackWidth:q=280}=_,K=$("sidebarWidth",null),N=Number.isFinite(K)?Math.min(Math.max(Number(K),Y),Q):q;if(j.current=N,Z)Z.style.setProperty("--sidebar-width",`${N}px`);return N}async function o9(_){let{currentHashtag:$,searchQuery:j,searchScope:Z,currentChatJid:Y,currentRootChatJid:Q,loadPosts:q,searchPosts:K,setPosts:N,setHasMore:G,scrollToBottom:V,isCancelled:X,scheduleRaf:U=(O)=>requestAnimationFrame(O),scheduleTimeout:L=(O,J)=>{setTimeout(O,J)}}=_,H=()=>{if(X())return;U(()=>{if(X())return;L(()=>{if(X())return;V()},0)})};if($){await q($);return}if(j){try{let O=await K(j,50,0,Y,Z,Q);if(X())return;N(Array.isArray(O?.results)?O.results:[]),G(!1)}catch(O){if(X())return;console.error("Failed to search:",O),N([]),G(!1)}return}try{await q(),H()}catch(O){if(X())return;console.error("Failed to load timeline:",O)}}function lN(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,refreshQueueState:Q,intervalMs:q=60000,scheduleInterval:K=(V,X)=>setInterval(V,X),clearScheduledInterval:N=(V)=>clearInterval(V)}=_;$();let G=K(()=>{j(),Z(),Y(),Q()},q);return()=>{N(G)}}function s9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y,readStoredNumber:Q,sidebarWidthRef:q,appShellRef:K,currentChatJid:N,currentRootChatJid:G,getAgentModels:V,getActiveChatAgents:X,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:H,setCurrentChatBranches:O,setActiveModel:J,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E,agentsRef:u,refreshQueueState:y,refreshContextUsage:c,refreshAutoresearchStatus:l}=_,T=C(async()=>{await I9({getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y})},[Y,$,j,Z]);v(()=>{T(),r9({readStoredNumber:Q,sidebarWidthRef:q,shellElement:K.current})},[K,T,Q,q]);let I=C((r)=>{M9({payload:r,agentsRef:u,setAgents:j,applyBranding:Y})},[u,Y,j]),z=C((r)=>{x9({payload:r,setUserProfile:Z})},[Z]),k=C((r)=>{T9({payload:r,setActiveModel:J,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E})},[J,E,W,D]),f=C(()=>{C9({currentChatJid:N,getAgentModels:V,activeChatJidRef:L,applyModelState:k})},[L,k,N,V]),i=C(()=>{P9({currentChatJid:N,getActiveChatAgents:X,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:H})},[L,N,X,U,H]),b=C(()=>{y9({currentRootChatJid:G,getChatBranches:U,setCurrentChatBranches:O})},[G,U,O]),o=C(()=>{d9({refreshModelState:f,refreshActiveChatAgents:i,refreshCurrentChatBranches:b,refreshQueueState:y,refreshContextUsage:c,refreshAutoresearchStatus:l})},[i,l,c,b,f,y]);return v(()=>lN({refreshModelAndQueueState:o,refreshModelState:f,refreshActiveChatAgents:i,refreshCurrentChatBranches:b,refreshQueueState:y}),[i,b,o,f,y]),{updateAgentProfile:I,updateUserProfile:z,applyModelState:k,refreshModelState:f,refreshActiveChatAgents:i,refreshCurrentChatBranches:b,refreshModelAndQueueState:o}}function a9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function t9(_){return String(_||"").trim()||"web:default"}function e9(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function _j(_){if(!_)return!1;return _.status!=="running"}function $j(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function jj(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function Zj(_){let{question:$,currentChatJid:j,streamSidePrompt:Z,resolveBtwChatJid:Y,showIntentToast:Q,btwAbortRef:q,setBtwSession:K}=_,N=String($||"").trim();if(!N)return Q("BTW needs a question","Usage: /btw <question>","warning"),!0;if(q.current)q.current.abort();let G=new AbortController;q.current=G,K({question:N,answer:"",thinking:"",error:null,model:null,status:"running"});try{let V=await Z(N,{signal:G.signal,chatJid:Y(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(X)=>{if(X==="side_prompt_start")K((U)=>U?{...U,status:"running"}:U)},onThinkingDelta:(X)=>{K((U)=>U?{...U,thinking:`${U.thinking||""}${X||""}`}:U)},onTextDelta:(X)=>{K((U)=>U?{...U,answer:`${U.answer||""}${X||""}`}:U)}});if(q.current!==G)return!0;K((X)=>X?{...X,answer:V?.result||X.answer||"",thinking:V?.thinking||X.thinking||"",model:V?.model||null,status:"success",error:null}:X)}catch(V){if(G.signal.aborted)return!0;K((X)=>X?{...X,status:"error",error:V?.payload?.error||V?.message||"BTW request failed."}:X)}finally{if(q.current===G)q.current=null}return!0}async function Yj(_){let{content:$,parseBtwCommand:j,closeBtwPanel:Z,runBtwPrompt:Y,showIntentToast:Q}=_,q=j($);if(!q)return!1;if(q.type==="help")return Q("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(q.type==="clear")return Z(),Q("BTW cleared","Closed the side conversation panel.","info"),!0;if(q.type==="ask")return await Y(q.question),!0;return!1}async function Qj(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:Z,currentChatJid:Y,sendAgentMessage:Q,handleMessageResponse:q,showIntentToast:K}=_,N=j($);if(!N)return!1;try{let G=await Q("default",N,null,[],Z?"queue":null,Y);return q(G),K(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(G){return K("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning"),!1}}function nN(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:j,html:Y}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function dN(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Q=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Q==="svg")return j?{kind:Q,svg:j}:{kind:Q};return Z?{kind:Q,html:Z}:{kind:Q}}function w4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function P0(_){return typeof _==="string"&&_.trim()?_.trim():null}function Kj(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var Nj="__PICLAW_WIDGET_HOST__:";function qj(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function p$(_,$){if(!_||_.type!=="generated_widget")return null;let j=nN(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:Kj(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function Gj(_){if(!_||typeof _!=="object")return null;let $=dN(_),j=P0(_?.widget_id)||P0(_?.widgetId)||P0(_?.tool_call_id)||P0(_?.toolCallId),Z=P0(_?.tool_call_id)||P0(_?.toolCallId),Y=P0(_?.turn_id)||P0(_?.turnId),Q=P0(_?.title)||P0(_?.name)||"Generated widget",q=P0(_?.subtitle)||"",K=P0(_?.description)||q,N=P0(_?.status),G=N==="loading"||N==="streaming"||N==="final"||N==="error"?N:"streaming";return{title:Q,subtitle:q,description:K,originPostId:w4(_?.origin_post_id)??w4(_?.originPostId),originChatJid:P0(_?.origin_chat_jid)||P0(_?.originChatJid)||P0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:Kj(_?.capabilities,!0),source:"live",status:G,turnId:Y,toolCallId:Z,width:w4(_?.width),height:w4(_?.height),error:P0(_?.error)}}function Xj(_){return p$(_,null)!==null}function F_(_){let $=P0(_?.toolCallId)||P0(_?.tool_call_id);if($)return $;let j=P0(_?.widgetId)||P0(_?.widget_id);if(j)return j;let Z=w4(_?.originPostId)??w4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function Vj(_){let j=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Q)=>typeof Q==="string"&&Q.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Y)}function Uj(_){return Vj(_)?"allow-downloads allow-scripts":"allow-downloads"}function f8(_){return{title:P0(_?.title)||"Generated widget",widgetId:P0(_?.widgetId)||P0(_?.widget_id),toolCallId:P0(_?.toolCallId)||P0(_?.tool_call_id),turnId:P0(_?.turnId)||P0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:P0(_?.status)||"final"}}function v8(_){return{...f8(_),subtitle:P0(_?.subtitle)||"",description:P0(_?.description)||"",error:P0(_?.error)||null,width:w4(_?.width),height:w4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function b8(_){return`${Nj}${JSON.stringify(v8(_))}`}function Lj(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=P0(_.text)||P0(_.content)||P0(_.message)||P0(_.prompt)||P0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=P0(j.text)||P0(j.content)||P0(j.message)||P0(j.prompt)||P0(j.value);if(Z)return Z}return null}function Wj(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Bj(_){let $=P0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return P0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function iN(_){let $=f8(_);return`<script>
(function () {
  const meta = ${qj($)};
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

  const windowNamePrefix = ${qj(Nj)};
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
</script>`}function zj(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Y:Z;if(!q)return"";let K=Vj(_),N=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,V=K?iN(_):"";return`<!doctype html>
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
</html>`}function rN(_,$){let j=F_(_);return Boolean(_&&j===$)}function O5(_,$,j){if(!rN(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function Fj(_,$){return{..._,openedAt:$}}function Hj(_){let $=F_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function Jj(_,$,j){let Z=Gj({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Z)return _;let Y=F_(Z);if(Y&&j.dismissedSessionKeys?.has(Y))return _;let Q=F_(_),q=Boolean(Y&&Q&&Y===Q),K={...q&&_?.artifact?_.artifact:{},...Z.artifact||{}};return{...q&&_?_:{},...Z,artifact:K,source:"live",originChatJid:Z.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function Oj(_,$){if(!_||_?.source!=="live")return _||null;let j=F_($),Z=F_(_);if(j&&Z&&j!==Z)return _;return null}function Dj(_,$,j){return O5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function c$(_,$,j){if(j.errorMessage)return O5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return O5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function Aj(_,$,j){return O5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function Ej(_,$,j){return O5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function kj(_,$,j){return O5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function D5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Z=S4(_,j);return{rowId:j,items:Z.items,remainingQueueCount:Z.remainingQueueCount}}function l$(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function R4(_){return _.status==="fulfilled"?_.value:null}function g8(_){return Math.max(0,Math.min(100,_))}function Ij(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Z=$.filter((J)=>J?.data?.is_bot_message).length,Y=$.filter((J)=>!J?.data?.is_bot_message).length,Q=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,K=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,N=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,V=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,X=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,L=_.modelsPayload?.supports_thinking??_.supportsThinking,H=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),O=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:K},agent:{status:H,phase:O,running:Boolean(_.isAgentTurnActive)},model:{current:X,thinkingLevel:U,supportsThinking:Boolean(L)},context:{tokens:G,contextWindow:V,percent:N},queue:{count:Q},timeline:{loadedPosts:$.length,botPosts:Z,userPosts:Y,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:g8(Math.round(N))},{key:"queue",label:"Queue",value:g8(Q*18)},{key:"activeChats",label:"Active chats",value:g8(q*12)},{key:"posts",label:"Timeline load",value:g8($.length*5)}]}}function Mj(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function xj(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function Tj(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function Cj(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function Pj(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function yj(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function Sj(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Z,getAgentStatus:Y,getAgentContext:Q,getAgentQueueState:q,getAgentModels:K,getActiveChatAgents:N,getChatBranches:G,getTimeline:V,rawPosts:X,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:O,activeModel:J,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E}=_,[u,y,c,l,T,I,z]=await Promise.allSettled([Y(j),Q(j),q(j),K(j),N(),G(Z),V(20,null,j)]);return Ij({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Z,statusPayload:R4(u),contextPayload:R4(y),queuePayload:R4(c),modelsPayload:R4(l),activeChatsPayload:R4(T),branchesPayload:R4(I),timelinePayload:R4(z),rawPosts:X,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:O,activeModel:J,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E})}function wj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:Q,setFollowupQueueItems:q,showIntentToast:K,steerAgentQueueItem:N}=_,G=D5(j.current,$);if(!G)return;let{rowId:V}=G;Z.current.add(V),q((X)=>S4(X,V).items),N(V,v$(Y)).then(()=>{Q()}).catch((X)=>{console.warn("[queue] Failed to steer queued item:",X);let U=l$("steer");K(U.title,U.detail,"warning"),Z.current.delete(V),Q()})}function Rj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:Q,setFollowupQueueItems:q,showIntentToast:K,clearQueuedSteerStateIfStale:N,removeAgentQueueItem:G}=_,V=D5(j.current,$);if(!V)return;let{rowId:X}=V;Z.current.add(X),N?.(V.remainingQueueCount),q((U)=>S4(U,X).items),G(X,v$(Y)).then(()=>{Q()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let L=l$("remove");K(L.title,L.detail,"warning"),Z.current.delete(X),Q()})}function uj(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Z}=_;if(!$||typeof $!=="object")return;let Y=F_($);if(Y)j.current.delete(Y);Z(Fj($,new Date().toISOString()))}function fj(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Z)=>{let Y=Hj(Z);if(Y.dismissedSessionKey)$.current.add(Y.dismissedSessionKey);return Y.nextWidget})}function vj(_){let{event:$,widget:j,currentChatJid:Z,isComposeBoxAgentActive:Y,setFloatingWidget:Q,handleCloseFloatingWidget:q,handleMessageResponse:K,showIntentToast:N,sendAgentMessage:G,buildFloatingWidgetDashboardSnapshot:V}=_,X=typeof $?.kind==="string"?$.kind:"",U=F_(j);if(!X||!U)return;if(X==="widget.close"){q();return}if(X==="widget.submit"){let L=Lj($?.payload),H=Wj($?.payload),O=new Date().toISOString();if(Q((J)=>Dj(J,U,{kind:X,payload:$?.payload||null,submittedAt:O,submissionText:L})),!L){if(N("Widget submission received","The widget submitted data without a message payload yet.","info",3500),H)q();return}(async()=>{try{let J=await G("default",L,null,[],Y?"queue":null,Z);K(J),Q((D)=>c$(D,U,{submittedAt:O,submissionText:L,queued:J?.queued||null}));let W=Mj(J?.queued);if(N(W.title,W.detail,W.kind,W.durationMs),H)q()}catch(J){Q((D)=>c$(D,U,{submittedAt:O,submissionText:L,errorMessage:J?.message||"Could not send the widget message."}));let W=xj(J?.message);N(W.title,W.detail,W.kind,W.durationMs)}})();return}if(X==="widget.ready"||X==="widget.request_refresh"){let L=new Date().toISOString(),H=Tj($?.payload||null,j?.runtimeState?.refreshCount);if(Q((O)=>Aj(O,U,{kind:X,payload:$?.payload||null,eventAt:L,nextRefreshCount:H.nextRefreshCount,shouldBuildDashboard:H.shouldBuildDashboard})),X==="widget.request_refresh")if(H.shouldBuildDashboard)(async()=>{try{let O=await V($?.payload||null);Q((W)=>Ej(W,U,{dashboard:O,at:new Date().toISOString(),count:H.nextRefreshCount,echo:$?.payload||null}));let J=Cj();N(J.title,J.detail,J.kind,J.durationMs)}catch(O){Q((W)=>kj(W,U,{errorMessage:O?.message||"Could not build dashboard.",at:new Date().toISOString(),count:H.nextRefreshCount}));let J=Pj(O?.message);N(J.title,J.detail,J.kind,J.durationMs)}})();else{let O=yj();N(O.title,O.detail,O.kind,O.durationMs)}}}function oN(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function bj(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:Z,showIntentToast:Y,setPendingExtensionPanelActions:Q,refreshAutoresearchStatus:q,stopAutoresearch:K,dismissAutoresearch:N,streamSidePrompt:G,btwAbortRef:V,btwSession:X,setBtwSession:U,sendAgentMessage:L,handleMessageResponse:H,dismissedLiveWidgetKeysRef:O,setFloatingWidget:J,getAgentStatus:W,getAgentContext:D,getAgentQueueState:E,getAgentModels:u,getActiveChatAgents:y,getChatBranches:c,getTimeline:l,rawPosts:T,activeChatAgents:I,currentChatBranches:z,contextUsage:k,followupQueueItemsRef:f,activeModel:i,activeThinkingLevel:b,supportsThinking:o,isAgentTurnActive:r}=_,t=C(async(A0,R0)=>{let g0=typeof A0?.key==="string"?A0.key:"",O0=typeof R0?.key==="string"?R0.key:"",p0=m$(g0,O0);if(!g0||!O0)return;Q((K0)=>f9(K0,g0,O0));try{let K0=await b9({panel:A0,action:R0,currentChatJid:$,stopAutoresearch:K,dismissAutoresearch:N,writeClipboard:(I0)=>navigator.clipboard.writeText(I0)});if(K0.refreshAutoresearchStatus)q();if(K0.toast)Y(K0.toast.title,K0.toast.detail,K0.toast.kind,K0.toast.durationMs)}catch(K0){Y("Panel action failed",K0?.message||"Could not complete that action.","warning")}finally{Q((K0)=>v9(K0,p0))}},[$,N,q,Q,Y,K]),Y0=C(()=>{jj({btwAbortRef:V,setBtwSession:U})},[V,U]),$0=C(async(A0)=>{return await Zj({question:A0,currentChatJid:$,streamSidePrompt:G,resolveBtwChatJid:t9,showIntentToast:Y,btwAbortRef:V,setBtwSession:U})},[V,$,U,Y,G]),q0=C(async({content:A0})=>{return await Yj({content:A0,parseBtwCommand:a9,closeBtwPanel:Y0,runBtwPrompt:$0,showIntentToast:Y})},[Y0,$0,Y]),W0=C(()=>{if(X?.question)$0(X.question)},[X,$0]),L0=C(async()=>{await Qj({btwSession:X,buildBtwInjectionText:$j,isComposeBoxAgentActive:Z,currentChatJid:$,sendAgentMessage:L,handleMessageResponse:H,showIntentToast:Y})},[X,$,H,Z,L,Y]),w0=C(async(A0=null)=>{return Sj({requestPayload:A0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:W,getAgentContext:D,getAgentQueueState:E,getAgentModels:u,getActiveChatAgents:y,getChatBranches:c,getTimeline:l,rawPosts:T,activeChatAgents:I,currentChatBranches:z,contextUsage:k,followupQueueItems:f.current,activeModel:i,activeThinkingLevel:b,supportsThinking:o,isAgentTurnActive:r})},[I,i,b,k,z,$,j,f,y,D,u,E,W,c,l,r,T,o]),E0=C((A0)=>{uj({widget:A0,dismissedLiveWidgetKeysRef:O,setFloatingWidget:J})},[O,J]),z0=C(()=>{fj({dismissedLiveWidgetKeysRef:O,setFloatingWidget:J})},[O,J]),v0=C((A0,R0)=>{vj({event:A0,widget:R0,currentChatJid:$,isComposeBoxAgentActive:Z,setFloatingWidget:J,handleCloseFloatingWidget:z0,handleMessageResponse:H,showIntentToast:Y,sendAgentMessage:L,buildFloatingWidgetDashboardSnapshot:w0})},[w0,$,z0,H,Z,L,J,Y]);return v(()=>{oN({dismissedLiveWidgetKeysRef:O,setFloatingWidget:J})},[$,O,J]),{handleExtensionPanelAction:t,closeBtwPanel:Y0,handleBtwIntercept:q0,handleBtwRetry:W0,handleBtwInject:L0,handleOpenFloatingWidget:E0,handleCloseFloatingWidget:z0,handleFloatingWidgetEvent:v0}}function gj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function n$(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Z=Array.isArray(_)?_:[];if(Z.includes(j))return Z;return[...Z,j]}function d$(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Z=$.trim();if(!Z)return j;if(!j.includes(Z))return j;return j.filter((Y)=>Y!==Z)}function i$(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Z of _){if(typeof Z!=="string")continue;let Y=Z.trim();if(!Y||j.has(Y))continue;j.add(Y),$.push(Y)}return $}async function mj(_){let{hashtag:$,setCurrentHashtag:j,setPosts:Z,loadPosts:Y}=_;j($),Z(null),await Y($)}async function hj(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:Z,loadPosts:Y}=_;$(null),j(null),Z(null),await Y()}async function pj(_){let{query:$,scope:j,currentChatJid:Z,currentRootChatJid:Y,searchPosts:Q,setSearchScope:q,setSearchQuery:K,setCurrentHashtag:N,setPosts:G,setHasMore:V}=_,X=typeof $==="string"?$.trim():"";if(!X)return;let U=j==="root"||j==="all"?j:"current";q(U),K(X),N(null),G(null);try{let L=await Q(X,50,0,Z,U,Y);G(Array.isArray(L?.results)?L.results:[]),V(!1)}catch(L){console.error("Failed to search:",L),G([])}}async function cj(_){let{post:$,posts:j,currentChatJid:Z,deletePost:Y,preserveTimelineScrollTop:Q,setPosts:q,setRemovingPostIds:K,hasMoreRef:N,loadMoreRef:G,confirm:V=(W)=>window.confirm(W),showAlert:X=(W)=>alert(W),scheduleTimeout:U=(W,D)=>{setTimeout(W,D)}}=_;if(!$)return;let L=$.id,H=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():Z,O=j?.filter((W)=>W?.data?.thread_id===L&&W?.id!==L).length||0;if(O>0){if(!V(`Delete this message and its ${O} replies?`))return}let J=(W)=>{if(!W.length)return;K((D)=>{let E=new Set(D);return W.forEach((u)=>E.add(u)),E}),U(()=>{if(Q(()=>{q((D)=>D?D.filter((E)=>!W.includes(E.id)):D)}),K((D)=>{let E=new Set(D);return W.forEach((u)=>E.delete(u)),E}),N.current)G.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let W=await Y(L,O>0,H);if(W?.ids?.length)J(W.ids)}catch(W){let D=W instanceof Error?W.message:String(W||"");if(O===0&&D.includes("Replies exist")){if(!V("Delete this message and its replies?"))return;let u=await Y(L,!0,H);if(u?.ids?.length)J(u.ids);return}console.error("Failed to delete post:",W),X(`Failed to delete message: ${D}`)}}async function lj(_){let{id:$,targetChatJid:j,currentChatJid:Z,getThread:Y,setPosts:Q,getElementById:q=(X)=>document.getElementById(X),scheduleRaf:K=(X)=>requestAnimationFrame(X),scheduleTimeout:N=(X,U)=>{setTimeout(X,U)}}=_,G=(X)=>{X.scrollIntoView({behavior:"smooth",block:"center"}),X.classList.add("post-highlight"),N(()=>X.classList.remove("post-highlight"),2000)},V=q(`post-${$}`);if(V){G(V);return}try{let X=typeof j==="string"&&j.trim()?j.trim():Z,L=(await Y($,X))?.thread?.[0];if(!L)return;Q((H)=>{if(!H)return[L];if(H.some((O)=>O.id===L.id))return H;return[...H,L]}),K(()=>{N(()=>{let H=q(`post-${$}`);if(H)G(H)},50)})}catch(X){console.error("[scrollToMessage] Failed to fetch message",$,X)}}function sN(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function nj(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:Z,openEditor:Y,resolvePane:Q,tabStripActiveId:q,setFileRefs:K,setMessageRefs:N,currentChatJid:G,getThread:V,setPosts:X}=_,U=C(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);v(()=>{return()=>{U()}},[U]);let L=C((z)=>{K((k)=>n$(k,z))},[K]),H=C((z)=>{K((k)=>d$(k,z))},[K]),O=C(()=>{K([])},[K]),J=C((z)=>{K(i$(z))},[K]),W=C((z,k=null,f="info",i=3000)=>{U(),$({title:z,detail:k||null,kind:f||"info"}),j.current=setTimeout(()=>{$((b)=>b?.title===z?null:b)},i)},[U,j,$]),D=C((z)=>{let k=gj(z,{editorOpen:Z,resolvePane:Q});if(k.kind==="open"){Y(k.path);return}if(k.kind==="toast")W(k.title,k.detail,k.level)},[Z,Y,Q,W]),E=C(()=>{let z=q;if(z)L(z)},[L,q]),u=C((z)=>{N((k)=>n$(k,z))},[N]),y=C(async(z,k=null)=>{await lj({id:z,targetChatJid:k,currentChatJid:G,getThread:V,setPosts:X})},[G,V,X]),c=C((z)=>{N((k)=>d$(k,z))},[N]),l=C(()=>{N([])},[N]),T=C((z)=>{N(i$(z))},[N]),I=C((z)=>{W("Compose failed",sN(z),"error",5000)},[W]);return{clearIntentToast:U,addFileRef:L,removeFileRef:H,clearFileRefs:O,setFileRefsFromCompose:J,showIntentToast:W,openFileFromPill:D,attachActiveEditorFile:E,addMessageRef:u,scrollToMessage:y,removeMessageRef:c,clearMessageRefs:l,setMessageRefsFromCompose:T,handleComposeSubmitError:I}}function dj(_={}){return V4(_)&&D8(_)}function aN(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function tN(_={},$={}){if(!dj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Y=aN({window:j});if(Y&&Y>0)Z.documentElement.style.setProperty("--app-height",`${Y}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Y}function ij(_={}){if(!dj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Y=new Set,Q=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let X of Y)$.clearTimeout?.(X);Y.clear()},q=()=>{Z=0,tN({window:$,document:j})},K=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(q)??0},N=()=>{K();for(let X of[80,220,420]){let U=$.setTimeout?.(()=>{Y.delete(U),K()},X);if(U!=null)Y.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;N()},V=$.visualViewport;return N(),$.addEventListener("focus",N),$.addEventListener("pageshow",N),$.addEventListener("resize",N),$.addEventListener("orientationchange",N),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",N,!0),V?.addEventListener?.("resize",N),V?.addEventListener?.("scroll",N),()=>{Q(),$.removeEventListener("focus",N),$.removeEventListener("pageshow",N),$.removeEventListener("resize",N),$.removeEventListener("orientationchange",N),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",N,!0),V?.removeEventListener?.("resize",N),V?.removeEventListener?.("scroll",N)}}function eN(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function o1(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:eN($,j)}var _G=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function rj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Y=()=>{_(V4({window:j,navigator:Z}))};Y();let q=_G.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",Y),()=>K.removeEventListener("change",Y);if(typeof K.addListener==="function")return K.addListener(Y),()=>K.removeListener(Y);return()=>{}});return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),()=>{for(let K of q)K();j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y)}}function oj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Y=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),Z.addEventListener?.("visibilitychange",Y),()=>{j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y),Z.removeEventListener?.("visibilitychange",Y)}}function sj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.openTab,Y=_?.popOutPane,Q=(N)=>{let G=N?.detail?.path,V=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Z?.(G,V)},q=(N)=>{let G=N?.detail?.path,V=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Y?.(G,V)},K=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return K.forEach((N)=>j.addEventListener(N,Q)),j.addEventListener("pane:popout",q),()=>{K.forEach((N)=>j.removeEventListener(N,Q)),j.removeEventListener("pane:popout",q)}}function aj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(Y)=>{if(Y?.ctrlKey&&Y.key==="`")Y.preventDefault?.(),_?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function tj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.toggleZenMode,Y=_?.exitZenMode,Q=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(K)=>{if(K?.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault?.(),Z?.();return}if(K?.key==="Escape"&&Q())K.preventDefault?.(),Y?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function ej(_,$){let j=Array.isArray(_)?_:[];return j.find((Z)=>Z?.id===$)||j[0]||null}function _Z(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function $Z(_,$,j){return _||$?.label||j||"Pane"}function jZ(_,$,j){let Z=Array.isArray(_)?_.length:0,Y=Boolean(j&&$?.has?.(j));return Z>1||Y}function ZZ(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function YZ(_,$,j,Z){return _===$&&!j||Z}function QZ(_,$,j,Z,Y){return _||!$&&(j||Z&&Y)}function m8(_){let $=r$(_);return $?`@${$}`:""}function r$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function h8(_,$=""){let j=String(_||""),Z=r$(j),Y=r$($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Q=`@${Z}`;if(Z===Y)return{normalized:Z,handle:Q,canSubmit:!1,kind:"info",message:`Already using ${Q}.`};if(Z!==j.trim())return{normalized:Z,handle:Q,canSubmit:!0,kind:"info",message:`Will save as ${Q}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Q,canSubmit:!0,kind:"success",message:`Saving as ${Q}.`}}function qZ(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?m8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function $G(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Y=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Y===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function p8(_,$={}){let j=m8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Y=$G(_,$);return Y.length>0?`${j} — ${Z} • ${Y.join(" • ")}`:`${j} — ${Z}`}function KZ(_,$,j){let Z=m8(_),Y=m8($),Q=String(j||"").trim();if(Z&&Y&&Z!==Y)return`Restored archived ${Z} as ${Y} because ${Z} is already in use.`;if(Y)return`Restored ${Y}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Q||"branch"}.`}var jG="piclaw_btw_session",GZ=900,NZ="__piclawRenameBranchFormLock__";function ZG(){try{return import.meta.url}catch{return null}}function o$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function c8(_,$,j=""){let Z=_?.get?.($);return Z&&Z.trim()?Z.trim():j}function XZ(_={}){let $=_.importMetaUrl===void 0?ZG():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Z=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Y=$?new URL($).searchParams.get("v"):null;if(Y&&Y.trim())return Y.trim()}catch{}try{let Q=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((N)=>String(N?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Q)return null;let K=new URL(Q,Z).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function s$(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[NZ];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return $[NZ]=Z,Z}function VZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function UZ(_={}){let $=typeof _.readItem==="function"?_.readItem:B_,j=_.storageKey||jG,Z=$(j);if(!Z)return null;try{let Y=JSON.parse(Z);if(!Y||typeof Y!=="object")return null;let Q=typeof Y.question==="string"?Y.question:"",q=typeof Y.answer==="string"?Y.answer:"",K=typeof Y.thinking==="string"?Y.thinking:"",N=typeof Y.error==="string"&&Y.error.trim()?Y.error:null,G=Y.status==="running"?"error":Y.status==="success"||Y.status==="error"?Y.status:"success";return{question:Q,answer:q,thinking:K,error:G==="error"?N||"BTW stream interrupted. You can retry.":N,model:null,status:G}}catch{return null}}function LZ(_,$={}){let j=$.defaultChatJid||"web:default",Z=c8(_,"chat_jid",j),Y=o$(_?.get?.("chat_only")||_?.get?.("chat-only")),Q=o$(_?.get?.("pane_popout")),q=c8(_,"pane_path"),K=c8(_,"pane_label"),N=o$(_?.get?.("branch_loader")),G=c8(_,"branch_source_chat_jid",Z);return{currentChatJid:Z,chatOnlyMode:Y,panePopoutMode:Q,panePopoutPath:q,panePopoutLabel:K,branchLoaderMode:N,branchLoaderSourceChatJid:G}}function WZ(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Z,staleUiReloadScheduledRef:Y,tabStoreHasUnsaved:Q,isAgentRunningRef:q,pendingRequestRef:K,showIntentToast:N}=_,G=typeof $==="string"&&$.trim()?$.trim():null;if(!G||!j||G===j)return!1;if(Z.current===G)return!0;Z.current=G;let V=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!Q()&&!V&&!q.current&&!K.current&&!Y.current)return Y.current=!0,N("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Y.current=!1}},350),!0;return N("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function a$(_){let{currentHashtag:$,searchQuery:j,searchOpen:Z}=_||{};return!$&&!j&&!Z}function BZ(_){let{status:$,setConnectionStatus:j,setAgentStatus:Z,setAgentDraft:Y,setAgentPlan:Q,setAgentThought:q,setPendingRequest:K,pendingRequestRef:N,clearAgentRunState:G,hasConnectedOnceRef:V,viewStateRef:X,refreshTimeline:U,refreshAgentStatus:L,refreshQueueState:H,refreshContextUsage:O}=_;if(j($),$!=="connected"){Z(null),Y({text:"",totalLines:0}),Q(""),q({text:"",totalLines:0}),K(null),N.current=null,G();return}if(!V.current){if(V.current=!0,a$(X.current))U();L(),H(),O();return}if(a$(X.current))U();L(),H(),O()}function zZ(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Z,refreshQueueState:Y,refreshAgentStatus:Q,refreshContextUsage:q,refreshAutoresearchStatus:K}=_,N=a$($.current);if(j){if(N)Z();Y(),Q(),q(),K();return}if(N)Z();Q(),q(),K()}function FZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Z,renameBranchLockUntil:Y,getFormLock:Q,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:K,now:N=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Q?.()||null;if(!G)return!1;if(Z||N<Number(Y||0)||G.inFlight||N<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),K?.(!0),!0}function HZ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function JZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Z,openRenameForm:Y,renameBranchInFlightRef:Q,renameBranchLockUntilRef:q,getFormLock:K,setIsRenamingBranch:N,renameChatBranch:G,refreshActiveChatAgents:V,refreshCurrentChatBranches:X,showIntentToast:U,closeRenameForm:L,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Z!=="string")return Y?.(),!1;let O=H(),J=K?.()||null;if(!J)return!1;if(Q.current||O<Number(q.current||0)||J.inFlight||O<Number(J.cooldownUntil||0))return!1;Q.current=!0,J.inFlight=!0,N?.(!0);try{let W=j.agent_name||"",D=h8(Z,W);if(!D.canSubmit)return U?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let E=D.normalized||W,u=await G(j.chat_jid,{agentName:E});await Promise.allSettled([V?.(),X?.()]);let y=u?.branch?.agent_name||E||W;return U?.("Branch renamed",`@${y}`,"info",3500),L?.(),!0}catch(W){let D=W instanceof Error?W.message:String(W||"Could not rename branch."),E=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return U?.("Could not rename branch",E||"Could not rename branch.","warning",5000),!1}finally{Q.current=!1,N?.(!1);let W=H()+GZ;q.current=W;let D=K?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=W}}async function OZ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Z,currentBranchRecord:Y,currentChatBranches:Q=[],activeChatAgents:q=[],pruneChatBranch:K,refreshActiveChatAgents:N,refreshCurrentChatBranches:G,showIntentToast:V,baseHref:X,chatOnlyMode:U,navigate:L,confirm:H=(c)=>window.confirm(c)}=_;if(!$)return!1;let O=typeof j==="string"&&j.trim()?j.trim():"",J=typeof Z==="string"&&Z.trim()?Z.trim():"",W=O||Y?.chat_jid||J;if(!W)return V?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Y?.chat_jid===W?Y:null)||Q.find((c)=>c?.chat_jid===W)||q.find((c)=>c?.chat_jid===W)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return V?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let u=`@${D?.agent_name||W}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!H(`Prune ${u}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await K(W),await Promise.allSettled([N?.(),G?.()]);let c=D?.root_chat_jid||"web:default";V?.("Branch pruned",`${u} has been archived.`,"info",3000);let l=U4(X,c,{chatOnly:U});return L?.(l),!0}catch(c){let l=c instanceof Error?c.message:String(c||"Could not prune branch.");return V?.("Could not prune branch",l||"Could not prune branch.","warning",5000),!1}}async function DZ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:Y,refreshCurrentChatBranches:Q,showIntentToast:q,baseHref:K,chatOnlyMode:N,navigate:G}=_,V=typeof $==="string"?$.trim():"";if(!V||typeof j!=="function")return!1;try{let X=Z.find((W)=>W?.chat_jid===V)||null,U=await j(V);await Promise.allSettled([Y?.(),Q?.()]);let L=U?.branch,H=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():V,O=KZ(X?.agent_name,L?.agent_name,H);q?.("Branch restored",O,"info",4200);let J=U4(K,H,{chatOnly:N});return G?.(J),!0}catch(X){let U=X instanceof Error?X.message:String(X||"Could not restore branch.");return q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function AZ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Z,navigate:Y,baseHref:Q,isCancelled:q=()=>!1}=_;try{Z?.({status:"running",message:"Preparing a new chat branch…"});let K=await j($);if(q())return!1;let N=K?.branch,G=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let V=U4(Q,G,{chatOnly:!0});return Y?.(V,{replace:!0}),!0}catch(K){if(q())return!1;return Z?.({status:"error",message:w5(K)}),!1}}function EZ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Z,chatOnlyMode:Y,currentHref:Q,navigate:q}=_;if(!$)return!1;let K=typeof j==="string"?j.trim():"";if(!K||K===Z)return!1;let N=U4(Q,K,{chatOnly:Y});return q?.(N),!0}async function kZ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Z,dockInstanceRef:Y,terminalTabPath:Q}=_,K=(typeof j==="string"?j.trim():"")===$?Z.current:$===Q?Y.current:null;if(typeof K?.preparePopoutTransfer!=="function")return null;return await K.preparePopoutTransfer()}function IZ(_){let{panePath:$,terminalTabPath:j,dockVisible:Z,resolveTab:Y,closeTab:Q,setDockVisible:q}=_,K=Y($);if(K&&!K.dirty){Q($);return}if($===j&&Z)q(!1)}function MZ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Z,editorWidthRef:Y,dockHeightRef:Q,sidebarWidthRef:q,readStoredNumber:K}=_;if(!j||!$||!Z)return;if(!Y.current){let N=K("editorWidth",null),G=q.current||280;Y.current=Number.isFinite(N)?Number(N):G}if(Z.style.setProperty("--editor-width",`${Y.current}px`),!Q.current){let N=K("dockHeight",null);Q.current=Number.isFinite(N)?Number(N):200}Z.style.setProperty("--dock-height",`${Q.current}px`)}async function xZ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Z,refreshActiveChatAgents:Y,refreshCurrentChatBranches:Q,showIntentToast:q,navigate:K,baseHref:N}=_;try{let V=(await Z($))?.branch,X=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!X)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Y?.(),Q?.()]);let U=V?.agent_name?`@${V.agent_name}`:X;q?.("New branch created",`Switched to ${U}.`,"info",2500);let L=U4(N,X,{chatOnly:j});return K?.(L),!0}catch(G){return q?.("Could not create branch",w5(G),"warning",5000),!1}}async function TZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Z,label:Y,showIntentToast:Q,resolveSourceTransfer:q,closeSourcePaneIfTransferred:K,currentChatJid:N,baseHref:G}=_;if(!$||j)return!1;let V=typeof Z==="string"&&Z.trim()?Z.trim():"";if(!V)return!1;let X=I2(V);if(!X)return Q?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=i6(X);if(!U)return Q?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;r6(U,{title:typeof Y==="string"&&Y.trim()?`Opening ${Y}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let L=await q?.(V),H=k2(G,V,{label:typeof Y==="string"&&Y.trim()?Y.trim():void 0,chatJid:N,params:L});return o6(U,H),K?.(V),!0}catch(L){s6(U);let H=L instanceof Error?L.message:"Could not transfer pane state to the new window.";return Q?.("Could not open pane window",H,"warning",5000),!1}}async function CZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Z,currentRootChatJid:Y,forkChatBranch:Q,getActiveChatAgents:q,getChatBranches:K,setActiveChatAgents:N,setCurrentChatBranches:G,showIntentToast:V,baseHref:X}=_;if(!$||j)return!1;let U=A2(Z);if(!U)return V?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let H=E2(X,Z,{chatOnly:!0});if(!window.open(H,U.target))return V?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let L=i6(U);if(!L)return V?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;r6(L,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let O=(await Q(Z))?.branch,J=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!J)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();N?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await K?.(Y);G?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let W=U4(X,J,{chatOnly:!0});return o6(L,W),!0}catch(H){return s6(L),V?.("Could not open branch window",w5(H),"error",5000),!1}}function PZ(_){_(($)=>!$)}function yZ(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,navigate:Y,hasWindow:Q=typeof window<"u",currentHref:q=Q?window.location.href:"http://localhost/"}=_;return EZ({hasWindow:Q,nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,currentHref:q,navigate:Y})}function SZ(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:q,hasWindow:K=typeof window<"u"}=_;return FZ({hasWindow:K,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:q})}function wZ(_){HZ(_)}async function RZ(_){let{hasWindow:$=typeof window<"u",...j}=_;await JZ({hasWindow:$,...j})}async function uZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await OZ({hasWindow:$,baseHref:j,...Z})}async function fZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await DZ({baseHref:j,...Z})}function vZ(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:Q,hasWindow:q=typeof window<"u",baseHref:K=q?window.location.href:"http://localhost/",runBranchLoaderImpl:N=AZ}=_;if(!$||!q)return;let G=!1;return N({branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:Q,baseHref:K,isCancelled:()=>G}),()=>{G=!0}}async function bZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await xZ({baseHref:j,...Z})}async function gZ(_){let{isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:Q,tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:N,terminalTabPath:G,dockVisible:V,resolveTab:X,closeTab:U,setDockVisible:L,hasWindow:H=typeof window<"u",baseHref:O=H?window.location.href:"http://localhost/"}=_;await TZ({hasWindow:H,isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:Q,baseHref:O,resolveSourceTransfer:(J)=>kZ({panePath:J,tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:N,terminalTabPath:G}),closeSourcePaneIfTransferred:(J)=>{IZ({panePath:J,terminalTabPath:G,dockVisible:V,resolveTab:X,closeTab:U,setDockVisible:L})}})}function mZ(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:Z=sj}=_;return Z({openTab:(Y,Q)=>$(Y,Q?{label:Q}:void 0),popOutPane:(Y,Q)=>{j(Y,Q)}})}async function hZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await CZ({hasWindow:$,baseHref:j,...Z})}function pZ(_){let{hasWindow:$=typeof window<"u",...j}=_;MZ({hasWindow:$,...j})}function l8(_){return _?{..._}:{text:"",totalLines:0}}function cZ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function YG(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function QG(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function lZ(_){return{agentStatus:_.agentStatus,agentDraft:l8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:l8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:cZ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:YG(_.silentRecovery)}}function nZ(_){let $=_.snapshot||QG(),{refs:j,setters:Z}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Z.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Z.setAgentStatus($.agentStatus||null),Z.setAgentDraft(l8($.agentDraft)),Z.setAgentPlan($.agentPlan||""),Z.setAgentThought(l8($.agentThought)),Z.setPendingRequest($.pendingRequest||null),Z.setCurrentTurnId($.currentTurnId||null),Z.setSteerQueuedTurnId($.steerQueuedTurnId||null),Z.setFollowupQueueItems(cZ($.followupQueueItems)),Z.setActiveModel($.activeModel||null),Z.setActiveThinkingLevel($.activeThinkingLevel||null),Z.setSupportsThinking(Boolean($.supportsThinking)),Z.setActiveModelUsage($.activeModelUsage??null),Z.setContextUsage($.contextUsage??null),$}var qG=400,t$=60,dZ=220,e$="mdPreviewHeight";function KG(){try{let _=localStorage.getItem(e$),$=_?Number(_):NaN;return Number.isFinite($)&&$>=t$?$:dZ}catch{return dZ}}function n8({getContent:_,path:$,onClose:j}){let[Z,Y]=g(""),[Q,q]=g(KG),K=x(null),N=x(null),G=x(""),V=x(_);return V.current=_,v(()=>{let L=()=>{let O=V.current?.()||"";if(O===G.current)return;G.current=O;try{let J=z_(O,null,{sanitize:!1});Y(J)}catch{Y('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let H=setInterval(L,qG);return()=>clearInterval(H)},[]),v(()=>{if(K.current&&Z)z4(K.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let H=L.clientY,O=N.current?.offsetHeight||Q,J=N.current?.parentElement,W=J?J.offsetHeight*0.7:500,D=L.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=(y)=>{let c=Math.min(Math.max(O-(y.clientY-H),t$),W);q(c)},u=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(e$,String(Math.round(N.current?.offsetHeight||Q)))}catch{}document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",u)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",u)}}
            onTouchStart=${(L)=>{L.preventDefault();let H=L.touches[0];if(!H)return;let O=H.clientY,J=N.current?.offsetHeight||Q,W=N.current?.parentElement,D=W?W.offsetHeight*0.7:500,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let u=(c)=>{let l=c.touches[0];if(!l)return;c.preventDefault();let T=Math.min(Math.max(J-(l.clientY-O),t$),D);q(T)},y=()=>{E.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(e$,String(Math.round(N.current?.offsetHeight||Q)))}catch{}document.removeEventListener("touchmove",u),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",y)};document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",y),document.addEventListener("touchcancel",y)}}
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
    `}function iZ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function NG(_){return _==="error"?"Could not open branch window":"Opening branch…"}function rZ(_){return B`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${NG(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function oZ(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Z,panePopoutHasMenuActions:Y,panePopoutTitle:Q,tabStripTabs:q,tabStripActiveId:K,handleTabActivate:N,previewTabs:G,handleTabTogglePreview:V,editorContainerRef:X,getPaneContent:U,panePopoutPath:L}=_;return B`
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
                              onClick=${(O)=>{N(H.id),O.currentTarget.closest("details")?.removeAttribute("open")}}
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
          <${n8}
            getContent=${U}
            path=${K}
            onClose=${()=>V(K)}
          />
        `}
      </div>
    </div>
  `}function d8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function GG(_,$){let j=d8(_),Z=d8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function _3(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function $3(_,$,j=Date.now(),Z=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},Q=String($||"").trim().toLowerCase();if(!Q)return{value:"",updatedAt:j};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||j-Y.updatedAt>Z?Q:`${Y.value}${Q}`,updatedAt:j}}function XG(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Y=((Number.isInteger($)?$:0)%j+j)%j,Q=[];for(let q=0;q<j;q+=1)Q.push((Y+q)%j);return Q}function VG(_,$,j=0,Z=(Y)=>Y){let Y=d8($);if(!Y)return-1;let Q=Array.isArray(_)?_:[],q=XG(Q.length,j),K=Q.map((N)=>d8(Z(N)));for(let N of q)if(K[N].startsWith(Y))return N;for(let N of q)if(K[N].includes(Y))return N;return-1}function j3(_,$,j=-1,Z=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(j>=0&&j<Y.length){let Q=Z(Y[j]);if(GG(Q,$))return j}return VG(Y,$,0,Z)}function i8(_){return String(_||"").trim().toLowerCase()}function Z3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return i8($[1]||"")}function UG(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Y=i8(Z?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),j.push(Z)}return j}function sZ(_,$,j={}){let Z=Z3($);if(Z==null)return[];let Y=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return UG(_).filter((Q)=>{if(Y&&Q?.chat_jid===Y)return!1;return i8(Q?.agent_name).startsWith(Z)})}function Y3(_){let $=i8(_);return $?`@${$} `:""}function aZ(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function p_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Y,removeTitle:Q="Remove",icon:q="file"}){let K=`${_}-file-pill`,N=`${_}-file-name`,G=`${_}-file-remove`,V=q==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  `}var LG=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function WG({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Y=_.contextWindow,Q="Compact context",K=`${Z!=null?`Context: ${tZ(Z)} / ${tZ(Y)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,N=9,G=2*Math.PI*9,V=j/100*G,X=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
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
    `}function tZ(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function BG(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G))Y.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),K=j.slice(Q);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y}}function zG(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Y.push(V[1])}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),K=j.slice(Q);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y}}function FG(_){let $=BG(_||""),j=zG($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function Q3({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return B`
        <div class="compose-queue-stack">
            ${_.map((Y)=>{let Q=typeof Y?.content==="string"?Y.content:"",q=FG(Q);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return B`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Q}>
                            ${q.text.trim()&&B`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&B`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((K)=>B`
                                        <${p_}
                                            key=${"queue-msg-"+K}
                                            prefix="compose"
                                            label=${"msg:"+K}
                                            title=${"Message reference: "+K}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((K)=>{let N=K.split("/").pop()||K;return B`
                                            <${p_}
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
    `}function eZ({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Y,onSearchScopeChange:Q,onEnterSearch:q,onExitSearch:K,fileRefs:N=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:X=[],onRemoveMessageRef:U,onClearMessageRefs:L,activeModel:H=null,modelUsage:O=null,thinkingLevel:J=null,supportsThinking:W=!1,contextUsage:D=null,onContextCompact:E,notificationsEnabled:u=!1,notificationPermission:y="default",onToggleNotifications:c,onModelChange:l,onModelStateChange:T,activeEditorPath:I=null,onAttachEditorFile:z,onOpenFilePill:k,followupQueueItems:f=[],onInjectQueuedFollowup:i,onRemoveQueuedFollowup:b,onSubmitIntercept:o,onMessageResponse:r,onPopOutChat:t,isAgentActive:Y0=!1,activeChatAgents:$0=[],currentChatJid:q0="web:default",connectionStatus:W0="connected",onSetFileRefs:L0,onSetMessageRefs:w0,onSubmitError:E0,onSwitchChat:z0,onRenameSession:v0,isRenameSessionInProgress:A0=!1,onCreateSession:R0,onDeleteSession:g0,onRestoreSession:O0,showQueueStack:p0=!0,statusNotice:K0=null}){let[I0,d0]=g(""),[o0,y1]=g(""),[Z1,n0]=g([]),[X1,j1]=g(!1),[s0,V0]=g([]),[u0,t0]=g(0),[s,Q0]=g(!1),[p,d]=g([]),[F0,k0]=g(0),[M0,H0]=g(!1),[T0,b0]=g(!1),[B0,y0]=g(!1),[J0,j0]=g(!1),[P,a]=g([]),[X0,D0]=g(0),[c0,e0]=g(0),[Y1,O1]=g(!1),[b1,w_]=g(0),[s1,R1]=g(null),[c1,g1]=g(()=>Date.now()),a0=x(null),l1=x(null),t_=x(null),a1=x(null),e_=x(null),c_=x(null),D1=x(null),n1=x(null),A1=x({value:"",updatedAt:0}),V1=x(0),U1=x(!1),V_=200,U_=(F)=>{let w=new Set,m=[];for(let _0 of F||[]){if(typeof _0!=="string")continue;let x0=_0.trim();if(!x0||w.has(x0))continue;w.add(x0),m.push(x0)}return m},M1=()=>{let F=B_("piclaw_compose_history");if(!F)return[];try{let w=JSON.parse(F);if(!Array.isArray(w))return[];return U_(w)}catch{return[]}},d1=(F)=>{$1("piclaw_compose_history",JSON.stringify(F))},Q1=x(M1()),I1=x(-1),t1=x(""),m1=I0.trim()||Z1.length>0||N.length>0||X.length>0,_4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),H_=typeof window<"u"&&typeof Notification<"u",$4=typeof window<"u"?Boolean(window.isSecureContext):!1,F4=H_&&$4&&y!=="denied",O_=y==="granted"&&u,R_=y4(K0),u4=w8(K0),f4=typeof K0?.detail==="string"&&K0.detail.trim()?K0.detail.trim():"",_1=R_?R8(K0,c1):null,E1=O_?"Disable notifications":"Enable notifications",H4=Z1.length>0||N.length>0||X.length>0,e1=W0==="disconnected"?"Reconnecting":String(W0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),D_=W0==="disconnected"?"Reconnecting":`Connection: ${e1}`,h1=(Array.isArray($0)?$0:[]).filter((F)=>!F?.archived_at),F1=(()=>{for(let F of Array.isArray($0)?$0:[]){let w=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(w&&w===q0)return F}return null})(),S1=Boolean(F1&&F1.chat_jid===(F1.root_chat_jid||F1.chat_jid)),q1=S0(()=>{let F=new Set,w=[];for(let m of Array.isArray($0)?$0:[]){let _0=typeof m?.chat_jid==="string"?m.chat_jid.trim():"";if(!_0||_0===q0||F.has(_0))continue;if(!(typeof m?.agent_name==="string"?m.agent_name.trim():""))continue;F.add(_0),w.push(m)}return w},[$0,q0]),__=q1.length>0,$_=__&&typeof z0==="function",j_=__&&typeof O0==="function",l_=Boolean(A0||U1.current),u1=!j&&typeof v0==="function"&&!l_,w1=!j&&typeof R0==="function",Z_=!j&&typeof g0==="function"&&!S1,u_=!j&&($_||j_||u1||w1||Z_),L1=H||"",A_=W&&J?` (${J})`:"",K1=A_.trim()?`${J}`:"",f_=typeof O?.hint_short==="string"?O.hint_short.trim():"",E_=[K1||null,f_||null].filter(Boolean).join(" • "),v4=[L1?`Current model: ${L1}${A_}`:null,O?.plan?`Plan: ${O.plan}`:null,f_||null,O?.primary?.reset_description||null,O?.secondary?.reset_description||null].filter(Boolean),b4=T0?"Switching model…":v4.join(" • ")||`Current model: ${L1}${A_} (tap to open model picker)`,v_=(F)=>{if(!F||typeof F!=="object")return;let w=F.model??F.current;if(typeof T==="function")T({model:w??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(w&&typeof l==="function")l(w)},n_=(F)=>{let w=F||a0.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},g4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){Q0(!1),V0([]);return}let w=F.toLowerCase().split(" ")[0];if(w.length<1){Q0(!1),V0([]);return}let m=LG.filter((_0)=>_0.name.startsWith(w)||_0.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(m.length>0&&!(m.length===1&&m[0].name===w))H0(!1),d([]),V0(m),t0(0),Q0(!0);else Q0(!1),V0([])},j4=(F)=>{let w=I0,m=w.indexOf(" "),_0=m>=0?w.slice(m):"",x0=F.name+_0;d0(x0),Q0(!1),V0([]),requestAnimationFrame(()=>{let W1=a0.current;if(!W1)return;let J1=x0.length;W1.selectionStart=J1,W1.selectionEnd=J1,W1.focus()})},a4=(F)=>{if(Z3(F)==null){H0(!1),d([]);return}let w=sZ(h1,F,{currentChatJid:q0});if(w.length>0&&!(w.length===1&&Y3(w[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))Q0(!1),V0([]),d(w),k0(0),H0(!0);else H0(!1),d([])},Z4=(F)=>{let w=Y3(F?.agent_name);if(!w)return;d0(w),H0(!1),d([]),requestAnimationFrame(()=>{let m=a0.current;if(!m)return;let _0=w.length;m.selectionStart=_0,m.selectionEnd=_0,m.focus()})},d_=()=>{if(j||!$_&&!j_&&!u1&&!w1&&!Z_)return!1;return A1.current={value:"",updatedAt:0},y0(!1),Q0(!1),V0([]),H0(!1),d([]),j0(!0),!0},i1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!$_&&!j_&&!u1&&!w1&&!Z_)return;if(J0){A1.current={value:"",updatedAt:0},j0(!1);return}d_()},J4=(F)=>{let w=typeof F==="string"?F.trim():"";if(j0(!1),!w||w===q0){requestAnimationFrame(()=>a0.current?.focus());return}z0?.(w)},O4=async(F)=>{let w=typeof F==="string"?F.trim():"";if(j0(!1),!w||typeof O0!=="function"){requestAnimationFrame(()=>a0.current?.focus());return}try{await O0(w)}catch(m){console.warn("Failed to restore session:",m),requestAnimationFrame(()=>a0.current?.focus())}},I5=(F)=>{let m=(Array.isArray(F)?F:[]).findIndex((_0)=>!_0?.disabled);return m>=0?m:0},H1=S0(()=>{let F=[];for(let w of q1){let m=Boolean(w?.archived_at),_0=typeof w?.agent_name==="string"?w.agent_name.trim():"",x0=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(!_0||!x0)continue;F.push({type:"session",key:`session:${x0}`,label:`@${_0} — ${x0}${w?.is_active?" active":""}${m?" archived":""}`,chat:w,disabled:m?!j_:!$_})}if(w1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(u1)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:l_});if(Z_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[q1,j_,$_,w1,u1,Z_,l_]),D4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof v0!=="function"||A0||U1.current)return;U1.current=!0,j0(!1);try{await v0()}catch(w){console.warn("Failed to rename session:",w)}finally{U1.current=!1}requestAnimationFrame(()=>a0.current?.focus())},t4=async()=>{if(typeof R0!=="function")return;j0(!1);try{await R0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>a0.current?.focus())},Y_=async()=>{if(typeof g0!=="function")return;j0(!1);try{await g0(q0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>a0.current?.focus())},Q_=(F)=>{if(j)y1(F);else d0(F),g4(F),a4(F);requestAnimationFrame(()=>n_())},Y4=(F)=>{let w=j?o0:I0,m=w&&!w.endsWith(`
`)?`
`:"",_0=`${w}${m}${F}`.trimStart();Q_(_0)},m4=(F)=>{let w=F?.command?.model_label;if(w)return w;let m=F?.command?.message;if(typeof m==="string"){let _0=m.match(/•\s+([^\n]+?)\s+\(current\)/);if(_0?.[1])return _0[1].trim()}return null},h4=async(F)=>{if(j||T0)return;b0(!0);try{let w=await N5("default",F,null,[],null,q0),m=m4(w);v_({model:m??H??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let _0=await C5(q0);if(_0)v_(_0)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{b0(!1)}},e4=async()=>{await h4("/cycle-model")},Q4=async(F)=>{if(!F||T0)return;if(await h4(`/model ${F}`))y0(!1)},k_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let w=F.chat;if(w?.archived_at)O4(w.chat_jid);else J4(w.chat_jid);return}if(F.type==="action"){if(F.action==="new"){t4();return}if(F.action==="rename"){D4();return}if(F.action==="delete")Y_()}},M5=(F)=>{F.preventDefault(),F.stopPropagation(),A1.current={value:"",updatedAt:0},j0(!1),y0((w)=>!w)},A4=async()=>{if(j)return;E?.(),await I_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},p4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return Y0?"queue":void 0},I_=async(F,w,m={})=>{let{includeMedia:_0=!0,includeFileRefs:x0=!0,includeMessageRefs:W1=!0,clearAfterSubmit:J1=!0,recordHistory:f1=!0}=m||{},q4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:I0,c4=typeof q4==="string"?q4:"";if(!c4.trim()&&(_0?Z1.length===0:!0)&&(x0?N.length===0:!0)&&(W1?X.length===0:!0))return;Q0(!1),V0([]),H0(!1),d([]),j0(!1),R1(null);let _5=_0?[...Z1]:[],K4=x0?[...N]:[],r1=W1?[...X]:[],b_=c4.trim();if(f1&&b_){let K_=Q1.current,k1=U_(K_.filter((E4)=>E4!==b_));if(k1.push(b_),k1.length>200)k1.splice(0,k1.length-200);Q1.current=k1,d1(k1),I1.current=-1,t1.current=""}let e5=()=>{if(_0)n0([..._5]);if(x0)L0?.(K4);if(W1)w0?.(r1);d0(b_),requestAnimationFrame(()=>n_())};if(J1)d0(""),n0([]),V?.(),L?.();(async()=>{try{if(await o?.({content:b_,submitMode:w,fileRefs:K4,messageRefs:r1,mediaFiles:_5})){_?.();return}let k1=[];for(let N_ of _5){let N4=await T6(N_);k1.push(N4.id)}let E4=K4.length?`Files:
${K4.map((N_)=>`- ${N_}`).join(`
`)}`:"",_8=r1.length?`Referenced messages:
${r1.map((N_)=>`- message:${N_}`).join(`
`)}`:"",$5=k1.length?`Attachments:
${k1.map((N_,N4)=>{let j5=_5[N4]?.name||`attachment-${N4+1}`;return`- attachment:${N_} (${j5})`}).join(`
`)}`:"",$8=[b_,E4,_8,$5].filter(Boolean).join(`

`),l4=await N5("default",$8,null,k1,p4(w),q0);if(r?.(l4),l4?.command){v_({model:l4.command.model_label??H??null,thinking_level:l4.command.thinking_level,supports_thinking:l4.command.supports_thinking});try{let N_=await C5(q0);if(N_)v_(N_)}catch{}}_?.()}catch(K_){if(J1)e5();let k1=K_?.message||"Failed to send message.";R1(k1),E0?.(k1),console.error("Failed to post:",K_)}})()},A=(F)=>{i?.(F)},M=C((F)=>{if(j||!B0&&!J0||F?.isComposing)return!1;let w=()=>{F.preventDefault?.(),F.stopPropagation?.()},m=()=>{A1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(w(),m(),B0)y0(!1);if(J0)j0(!1);return!0}if(B0){if(F.key==="ArrowDown"){if(w(),m(),P.length>0)D0((_0)=>(_0+1)%P.length);return!0}if(F.key==="ArrowUp"){if(w(),m(),P.length>0)D0((_0)=>(_0-1+P.length)%P.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&P.length>0)return w(),m(),Q4(P[Math.max(0,Math.min(X0,P.length-1))]),!0;if(_3(F)&&P.length>0){w();let _0=$3(A1.current,F.key);A1.current=_0;let x0=j3(P,_0.value,X0,(W1)=>W1);if(x0>=0)D0(x0);return!0}}if(J0){if(F.key==="ArrowDown"){if(w(),m(),H1.length>0)e0((_0)=>(_0+1)%H1.length);return!0}if(F.key==="ArrowUp"){if(w(),m(),H1.length>0)e0((_0)=>(_0-1+H1.length)%H1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&H1.length>0)return w(),m(),k_(H1[Math.max(0,Math.min(c0,H1.length-1))]),!0;if(_3(F)&&H1.length>0){w();let _0=$3(A1.current,F.key);A1.current=_0;let x0=j3(H1,_0.value,c0,(W1)=>W1.label);if(x0>=0)e0(x0);return!0}}return!1},[j,B0,J0,P,X0,H1,c0,Q4]),R=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),y1(""),K?.();return}if(M(F))return;let w=a0.current?.value??(j?o0:I0);if(aZ(F,w,{searchMode:j,showSessionSwitcherButton:u_})){F.preventDefault(),d_();return}if(M0&&p.length>0){let m=a0.current?.value??(j?o0:I0);if(!String(m||"").match(/^@([a-zA-Z0-9_-]*)$/))H0(!1),d([]);else{if(F.key==="ArrowDown"){F.preventDefault(),k0((_0)=>(_0+1)%p.length);return}if(F.key==="ArrowUp"){F.preventDefault(),k0((_0)=>(_0-1+p.length)%p.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),Z4(p[F0]);return}if(F.key==="Escape"){F.preventDefault(),H0(!1),d([]);return}}}if(s&&s0.length>0){let m=a0.current?.value??(j?o0:I0);if(!String(m||"").startsWith("/"))Q0(!1),V0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),t0((_0)=>(_0+1)%s0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),t0((_0)=>(_0-1+s0.length)%s0.length);return}if(F.key==="Tab"){F.preventDefault(),j4(s0[u0]);return}if(F.key==="Enter"&&!F.shiftKey){if(!w.includes(" ")){F.preventDefault();let x0=s0[u0];Q0(!1),V0([]),I_(x0.name);return}}if(F.key==="Escape"){F.preventDefault(),Q0(!1),V0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let m=a0.current;if(!m)return;let _0=m.value||"",x0=m.selectionStart===0&&m.selectionEnd===0,W1=m.selectionStart===_0.length&&m.selectionEnd===_0.length;if(F.key==="ArrowUp"&&x0||F.key==="ArrowDown"&&W1){let J1=Q1.current;if(!J1.length)return;F.preventDefault();let f1=I1.current;if(F.key==="ArrowUp"){if(f1===-1)t1.current=_0,f1=J1.length-1;else if(f1>0)f1-=1;I1.current=f1,Q_(J1[f1]||"")}else{if(f1===-1)return;if(f1<J1.length-1)f1+=1,I1.current=f1,Q_(J1[f1]||"");else I1.current=-1,Q_(t1.current||""),t1.current=""}requestAnimationFrame(()=>{let q4=a0.current;if(!q4)return;let c4=q4.value.length;q4.selectionStart=c4,q4.selectionEnd=c4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(w.trim())Y?.(w.trim(),Z)}else I_(w,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(w.trim())Y?.(w.trim(),Z)}else I_(w)},S=(F)=>{let w=Array.from(F||[]).filter((m)=>m instanceof File&&!String(m.name||"").startsWith(".DS_Store"));if(!w.length)return;n0((m)=>[...m,...w]),R1(null)},n=(F)=>{S(F.target.files),F.target.value=""},Z0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),V1.current+=1,j1(!0)},N0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),V1.current=Math.max(0,V1.current-1),V1.current===0)j1(!1)},G0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";j1(!0)},e=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),V1.current=0,j1(!1),S(F.dataTransfer?.files||[])},C0=(F)=>{if(j)return;let w=F.clipboardData?.items;if(!w||!w.length)return;let m=[];for(let _0 of w){if(_0.kind!=="file")continue;let x0=_0.getAsFile?.();if(x0)m.push(x0)}if(m.length>0)F.preventDefault(),S(m)},x1=(F)=>{n0((w)=>w.filter((m,_0)=>_0!==F))},M_=()=>{R1(null),n0([]),V?.(),L?.()},q_=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:w,longitude:m,accuracy:_0}=F.coords,x0=`${w.toFixed(5)}, ${m.toFixed(5)}`,W1=Number.isFinite(_0)?` ±${Math.round(_0)}m`:"",J1=`https://maps.google.com/?q=${w},${m}`,f1=`Location: ${x0}${W1} ${J1}`;Y4(f1)},(F)=>{let w=F?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!B0)return;A1.current={value:"",updatedAt:0},O1(!0),C5(q0).then((F)=>{let w=Array.isArray(F?.models)?F.models.filter((m)=>typeof m==="string"&&m.trim().length>0):[];w.sort((m,_0)=>m.localeCompare(_0,void 0,{sensitivity:"base"})),a(w),v_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),a([])}).finally(()=>{O1(!1)})},[B0,H]),v(()=>{if(j)y0(!1),j0(!1),Q0(!1),V0([]),H0(!1),d([])},[j]),v(()=>{if(J0&&!u_)j0(!1)},[J0,u_]),v(()=>{if(!B0)return;let F=P.findIndex((w)=>w===H);D0(F>=0?F:0)},[B0,P,H]),v(()=>{if(!J0)return;e0(I5(H1)),A1.current={value:"",updatedAt:0}},[J0,q0]),v(()=>{if(!B0)return;let F=(w)=>{let m=a1.current,_0=e_.current,x0=w.target;if(m&&m.contains(x0))return;if(_0&&_0.contains(x0))return;y0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[B0]),v(()=>{if(!J0)return;let F=(w)=>{let m=c_.current,_0=D1.current,x0=w.target;if(m&&m.contains(x0))return;if(_0&&_0.contains(x0))return;j0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[J0]),v(()=>{if(j||!B0&&!J0)return;let F=(w)=>{M(w)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,B0,J0,M]),v(()=>{if(!B0)return;let F=a1.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[B0,X0,P]),v(()=>{if(!J0)return;let F=c_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,c0,H1.length]),v(()=>{let F=()=>{let W1=n1.current?.clientWidth||0;w_((J1)=>J1===W1?J1:W1)};F();let w=n1.current,m=0,_0=()=>{if(m)cancelAnimationFrame(m);m=requestAnimationFrame(()=>{m=0,F()})},x0=null;if(w&&typeof ResizeObserver<"u")x0=new ResizeObserver(()=>_0()),x0.observe(w);if(typeof window<"u")window.addEventListener("resize",_0);return()=>{if(m)cancelAnimationFrame(m);if(x0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",_0)}},[j,H,F1?.agent_name,u_,D?.percent]);let t5=(F)=>{let w=F.target.value;if(R1(null),J0)j0(!1);n_(F.target),Q_(w)};return v(()=>{requestAnimationFrame(()=>n_())},[I0,o0,j]),v(()=>{if(!R_)return;g1(Date.now());let F=setInterval(()=>g1(Date.now()),1000);return()=>clearInterval(F)},[R_,K0?.started_at,K0?.startedAt]),v(()=>{if(j)return;a4(I0)},[h1,q0,I0,j]),B`
        <div class="compose-box">
            ${p0&&!j&&B`
                <${Q3}
                    items=${f}
                    onInjectQueuedFollowup=${A}
                    onRemoveQueuedFollowup=${b}
                    onOpenFilePill=${k}
                />
            `}
            ${K0&&B`
                <div
                    class=${`compose-inline-status${R_?" compaction":""}`}
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
            ${s1&&B`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${s1}</div>
            `}
            <div
                class=${`compose-input-wrapper${X1?" drag-active":""}`}
                onDragEnter=${Z0}
                onDragOver=${G0}
                onDragLeave=${N0}
                onDrop=${e}
            >
                <div class="compose-input-main">
                    ${H4&&B`
                        <div class="compose-file-refs">
                            ${X.map((F)=>{return B`
                                    <${p_}
                                        key=${"msg-"+F}
                                        prefix="compose"
                                        label=${"msg:"+F}
                                        title=${"Message reference: "+F}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(F)}
                                    />
                                `})}
                            ${N.map((F)=>{let w=F.split("/").pop()||F;return B`
                                    <${p_}
                                        prefix="compose"
                                        label=${w}
                                        title=${F}
                                        onClick=${()=>k?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(F)}
                                    />
                                `})}
                            ${Z1.map((F,w)=>{let m=F?.name||`attachment-${w+1}`;return B`
                                    <${p_}
                                        key=${m+w}
                                        prefix="compose"
                                        label=${m}
                                        title=${m}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>x1(w)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${M_}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof t==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>t?.()}
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
                        value=${j?o0:I0}
                        onInput=${t5}
                        onKeyDown=${R}
                        onPaste=${C0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${M0&&p.length>0&&B`
                        <div class="slash-autocomplete" ref=${t_}>
                            ${p.map((F,w)=>B`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${w===F0?" active":""}`}
                                    onMouseDown=${(m)=>{m.preventDefault(),Z4(F)}}
                                    onMouseEnter=${()=>k0(w)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${s&&s0.length>0&&B`
                        <div class="slash-autocomplete" ref=${l1}>
                            ${s0.map((F,w)=>B`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${w===u0?" active":""}`}
                                    onMouseDown=${(m)=>{m.preventDefault(),j4(F)}}
                                    onMouseEnter=${()=>t0(w)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${B0&&!j&&B`
                        <div class="compose-model-popup" ref=${a1} tabIndex="-1" onKeyDown=${M}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${Y1&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!Y1&&P.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!Y1&&P.map((F,w)=>B`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${X0===w?" active":""}${H===F?" current-model":""}`}
                                        onClick=${()=>{Q4(F)}}
                                        disabled=${T0}
                                    >
                                        ${F}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{e4()}}
                                    disabled=${T0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${J0&&!j&&B`
                        <div class="compose-model-popup" ref=${c_} tabIndex="-1" onKeyDown=${M}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return qZ(F1,q0)})()}
                                    </div>
                                `}
                                ${!__&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${__&&q1.map((F,w)=>{let m=Boolean(F.archived_at),x0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!m&&typeof g0==="function",W1=p8(F,{currentChatJid:q0});return B`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${m?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${m?" archived":""}${c0===w?" active":""}`}
                                                onClick=${()=>{if(m){O4(F.chat_jid);return}J4(F.chat_jid)}}
                                                disabled=${m?!j_:!$_}
                                                title=${m?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${W1}
                                            </button>
                                            ${x0&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(J1)=>{J1.stopPropagation(),j0(!1),g0(F.chat_jid)}}
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
                            ${(w1||u1||Z_)&&B`
                                <div class="compose-model-popup-actions">
                                    ${w1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${H1.findIndex((F)=>F.key==="action:new")===c0?" active":""}`}
                                            onClick=${()=>{t4()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${u1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${H1.findIndex((F)=>F.key==="action:rename")===c0?" active":""}`}
                                            onClick=${(F)=>{D4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${l_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${Z_&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${H1.findIndex((F)=>F.key==="action:delete")===c0?" active":""}`}
                                            onClick=${()=>{Y_()}}
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
                <div class="compose-footer" ref=${n1}>
                    ${!j&&H&&B`
                    <div class="compose-meta-row">
                        ${!j&&H&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${e_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${b4}
                                    aria-label="Open model picker"
                                    onClick=${M5}
                                    disabled=${T0}
                                >
                                    ${T0?"Switching…":L1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!T0&&E_&&B`
                                        <span class="compose-model-usage-hint" title=${b4}>
                                            ${E_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&B`
                            <${WG} usage=${D} onCompact=${A4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${u_&&B`
                        ${F1?.agent_name&&B`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${F1.chat_jid||q0}
                                aria-label=${`Manage sessions for @${F1.agent_name}`}
                                onClick=${i1}
                            >@${F1.agent_name}</button>
                        `}
                        <button
                            ref=${D1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${J0?" active":""}`}
                            onClick=${i1}
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
                                onChange=${(F)=>Q?.(F.currentTarget.value)}
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
                    ${_4&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${q_}
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
                    ${F4&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${O_?" active":""}`}
                            onClick=${c}
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
                        ${I&&z&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${z}
                                title=${`Attach open file: ${I}`}
                                type="button"
                                disabled=${N.includes(I)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${n} />
                        </label>
                    `}
                    ${(W0!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${W0!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${W0}" title=${D_}>
                                    ${e1}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{I_()}}
                                    disabled=${!m1}
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
    `}function _Y({session:_,onClose:$,onInject:j,onRetry:Z}){let Y=x(null),Q=x(null),q=_?.thinking?l5(_.thinking):"",K=_?.answer?z_(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(Y.current&&q)z4(Y.current).catch(()=>{})},[q]),v(()=>{if(Q.current&&K)z4(Q.current).catch(()=>{})},[K]),!_)return null;let N=_.status==="running",G=Boolean(String(_.answer||"").trim()),V=Boolean(String(_.thinking||"").trim()),X=e9(_),U=_j(_),L=!N&&G,H=N?"Thinking…":_.status==="error"?"Error":"Done";return B`
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
    `}function $Y({widget:_,onClose:$,onWidgetEvent:j}){let Z=x(null),Y=x(!1),Q=S0(()=>zj(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(v(()=>{if(!_)return;let W=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[_,$]),v(()=>{Y.current=!1},[Q]),v(()=>{if(!_)return;let W=Z.current;if(!W)return;let D=(l)=>{let T=b8(_),I=l==="widget.init"?f8(_):v8(_);try{W.name=T}catch{}try{W.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:l,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I},"*")}catch{}},E=()=>{D("widget.init"),D("widget.update")},u=()=>{Y.current=!0,E()};W.addEventListener("load",u);let c=[0,40,120,300,800].map((l)=>setTimeout(E,l));return()=>{W.removeEventListener("load",u),c.forEach((l)=>clearTimeout(l))}},[Q,_?.widgetId,_?.toolCallId,_?.turnId]),v(()=>{if(!_)return;let W=Z.current;if(!W?.contentWindow)return;let D=b8(_),E=v8(_);try{W.name=D}catch{}try{W.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:E},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),v(()=>{if(!_)return;let W=(D)=>{let E=D?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let u=Z.current,y=F_(_),c=F_({widgetId:E.widgetId,toolCallId:E.toolCallId});if(c&&y&&c!==y)return;if(!c&&u?.contentWindow&&D.source!==u.contentWindow)return;j?.(E,_)};return window.addEventListener("message",W),()=>window.removeEventListener("message",W)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",N=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",V=_?.source==="live"?"live":"timeline",X=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=V==="live"?`Live widget • ${X.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",H=!Q,O=Bj(_),J=Uj(_);return B`
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
                    ${H?B`<div class="floating-widget-empty">${O}</div>`:B`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${N}
                                name=${b8(_)}
                                sandbox=${J}
                                referrerpolicy="no-referrer"
                                srcdoc=${Q}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var jY="PiClaw";function q3(_,$,j=!1){let Z=_||"PiClaw",Y=Z.charAt(0).toUpperCase(),Q=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Y.charCodeAt(0)%Q.length,K=Q[q],N=Z.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",V=G?G:null,X=j||N==="PiClaw".toLowerCase()||N==="pi";return{letter:Y,color:K,image:V||(X?"/static/icon-192.png":null)}}function ZY(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function YY(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function QY(_){if(!_)return null;if(typeof document<"u"){let Q=document.documentElement,q=Q?.dataset?.colorTheme||"",K=Q?.dataset?.tint||"",N=getComputedStyle(Q).getPropertyValue("--accent-color")?.trim();if(N&&(K||q&&q!=="default"))return N}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Q=0;Q<j.length;Q+=1)Z=(Z*31+j.charCodeAt(Q))%2147483647;let Y=Math.abs(Z)%$.length;return $[Y]}var HG=B`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function K3({status:_,draft:$,plan:j,thought:Z,pendingRequest:Y,intent:Q,extensionPanels:q=[],pendingPanelActions:K=new Set,onExtensionPanelAction:N,turnId:G,steerQueued:V,onPanelToggle:X,showCorePanels:U=!0,showExtensionPanels:L=!0}){let J=(s)=>{if(!s)return{text:"",totalLines:0,fullText:""};if(typeof s==="string"){let F0=s,k0=F0?F0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:F0,totalLines:k0,fullText:F0}}let Q0=s.text||"",p=s.fullText||s.full_text||Q0,d=Number.isFinite(s.totalLines)?s.totalLines:p?p.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Q0,totalLines:d,fullText:p}},W=160,D=(s)=>String(s||"").replace(/<\/?internal>/gi,""),E=(s)=>{if(!s)return 1;return Math.max(1,Math.ceil(s.length/160))},u=(s,Q0,p)=>{let d=(s||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!d)return{text:"",omitted:0,totalLines:Number.isFinite(p)?p:0,visibleLines:0};let F0=d.split(`
`),k0=F0.length>Q0?F0.slice(0,Q0).join(`
`):d,M0=Number.isFinite(p)?p:F0.reduce((b0,B0)=>b0+E(B0),0),H0=k0?k0.split(`
`).reduce((b0,B0)=>b0+E(B0),0):0,T0=Math.max(M0-H0,0);return{text:k0,omitted:T0,totalLines:M0,visibleLines:H0}},y=J(j),c=J(Z),l=J($),T=Boolean(y.text)||y.totalLines>0,I=Boolean(c.text)||c.totalLines>0,z=Boolean(l.fullText?.trim()||l.text?.trim()),k=Boolean(_||z||T||I||Y||Q),f=Array.isArray(q)&&q.length>0;if((!U||!k)&&(!L||!f))return null;let[i,b]=g(new Set),[o,r]=g(null),[t,Y0]=g(()=>Date.now()),$0=(s)=>b((Q0)=>{let p=new Set(Q0),d=!p.has(s);if(d)p.add(s);else p.delete(s);if(typeof X==="function")X(s,d);return p});v(()=>{b(new Set),r(null)},[G]);let q0=y4(_);v(()=>{if(!q0)return;Y0(Date.now());let s=setInterval(()=>Y0(Date.now()),1000);return()=>clearInterval(s)},[q0,_?.started_at,_?.startedAt]);let W0=_?.turn_id||G,L0=QY(W0),w0=V?"turn-dot turn-dot-queued":"turn-dot",E0=(s)=>s,z0=Boolean(_?.last_activity||_?.lastActivity),v0=(s)=>s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":L0,A0=Q?.kind||"info",R0=v0(A0),g0=v0(_?.kind||(q0?"warning":"info")),O0="",p0=_?.title,K0=_?.status;if(_?.type==="plan")O0=p0?`Planning: ${p0}`:"Planning...";else if(_?.type==="tool_call")O0=p0?`Running: ${p0}`:"Running tool...";else if(_?.type==="tool_status")O0=p0?`${p0}: ${K0||"Working..."}`:K0||"Working...";else if(_?.type==="error")O0=p0||"Agent error";else O0=p0||K0||"Working...";if(z0)O0="Last activity just now";let I0=({panelTitle:s,text:Q0,fullText:p,totalLines:d,maxLines:F0,titleClass:k0,panelKey:M0})=>{let H0=i.has(M0),T0=p||Q0||"",b0=M0==="thought"||M0==="draft"?D(T0):T0,B0=typeof F0==="number",y0=H0&&B0,J0=B0?u(b0,F0,d):{text:b0||"",omitted:0,totalLines:Number.isFinite(d)?d:0};if(!b0&&!(Number.isFinite(J0.totalLines)&&J0.totalLines>0))return null;let j0=`agent-thinking-body${B0?" agent-thinking-body-collapsible":""}`,P=B0?`--agent-thinking-collapsed-lines: ${F0};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${H0?"true":"false"}
                data-collapsible=${B0?"true":"false"}
                style=${L0?`--turn-color: ${L0};`:""}
            >
                <div class="agent-thinking-title ${k0||""}">
                    ${L0&&B`<span class=${w0} aria-hidden="true"></span>`}
                    ${s}
                    ${y0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${s} panel`}
                            onClick=${()=>$0(M0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${P}
                    dangerouslySetInnerHTML=${{__html:l5(b0)}}
                />
                ${!H0&&J0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>$0(M0)}>
                        ▸ ${J0.omitted} more lines
                    </button>
                `}
                ${H0&&J0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>$0(M0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},d0=Y?.tool_call?.title,o0=d0?`Awaiting approval: ${d0}`:"Awaiting approval",y1=q0?R8(_,t):null,Z1=(s,Q0,p=null)=>{let d=w8(s);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${Q0?`--turn-color: ${Q0};`:""}
                title=${s?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${Q0&&B`<span class=${w0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${d}</span>
                    ${p&&B`<span class="agent-status-elapsed">${p}</span>`}
                </div>
                ${s.detail&&B`<div class="agent-thinking-body">${s.detail}</div>`}
            </div>
        `},n0=(s,Q0,p,d,F0,k0,M0,H0=8,T0=8)=>{let b0=Math.max(F0-d,0.000000001),B0=Math.max(Q0-H0*2,1),y0=Math.max(p-T0*2,1),J0=Math.max(M0-k0,1),j0=M0===k0?Q0/2:H0+(s.run-k0)/J0*B0,P=T0+(y0-(s.value-d)/b0*y0);return{x:j0,y:P}},X1=(s,Q0,p,d,F0,k0,M0,H0=8,T0=8)=>{if(!Array.isArray(s)||s.length===0)return"";return s.map((b0,B0)=>{let{x:y0,y:J0}=n0(b0,Q0,p,d,F0,k0,M0,H0,T0);return`${B0===0?"M":"L"} ${y0.toFixed(2)} ${J0.toFixed(2)}`}).join(" ")},j1=(s,Q0="")=>{if(!Number.isFinite(s))return"—";return`${Math.abs(s)>=100?s.toFixed(0):s.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${Q0}`},s0=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],V0=(s,Q0)=>{let p=s0;if(!Array.isArray(p)||p.length===0)return"var(--accent-color)";if(p.length===1||!Number.isFinite(Q0)||Q0<=1)return p[0];let F0=Math.max(0,Math.min(Number.isFinite(s)?s:0,Q0-1))/Math.max(1,Q0-1)*(p.length-1),k0=Math.floor(F0),M0=Math.min(p.length-1,k0+1),H0=F0-k0,T0=p[k0],b0=p[M0];if(!b0||k0===M0||H0<=0.001)return T0;if(H0>=0.999)return b0;let B0=Math.round((1-H0)*1000)/10,y0=Math.round(H0*1000)/10;return`color-mix(in oklab, ${T0} ${B0}%, ${b0} ${y0}%)`},u0=(s,Q0="autoresearch")=>{let p=Array.isArray(s)?s.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((P)=>Number.isFinite(P?.value)&&Number.isFinite(P?.run)):[]})).filter((j0)=>j0.points.length>0):[],d=p.map((j0,P)=>({...j0,color:V0(P,p.length)}));if(d.length===0)return null;let F0=320,k0=120,M0=d.flatMap((j0)=>j0.points),H0=M0.map((j0)=>j0.value),T0=M0.map((j0)=>j0.run),b0=Math.min(...H0),B0=Math.max(...H0),y0=Math.min(...T0),J0=Math.max(...T0);return B`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${d.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${F0} ${k0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${d.map((j0)=>{let P=j0?.key||j0?.label||"series",a=o?.panelKey===Q0&&o?.seriesKey===P;return B`
                                <g key=${P}>
                                    <path
                                        class=${`agent-series-chart-line${a?" is-hovered":""}`}
                                        d=${X1(j0.points,F0,k0,b0,B0,y0,J0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>r({panelKey:Q0,seriesKey:P})}
                                        onMouseLeave=${()=>r((X0)=>X0?.panelKey===Q0&&X0?.seriesKey===P?null:X0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${d.flatMap((j0)=>{let P=typeof j0?.unit==="string"?j0.unit:"",a=j0?.key||j0?.label||"series";return j0.points.map((X0,D0)=>{let c0=n0(X0,F0,k0,b0,B0,y0,J0);return B`
                                    <button
                                        key=${`${a}-point-${D0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${c0.x/F0*100}%; top:${c0.y/k0*100}%;`}
                                        onMouseEnter=${()=>r({panelKey:Q0,seriesKey:a,run:X0.run,value:X0.value,unit:P})}
                                        onMouseLeave=${()=>r((e0)=>e0?.panelKey===Q0?null:e0)}
                                        onFocus=${()=>r({panelKey:Q0,seriesKey:a,run:X0.run,value:X0.value,unit:P})}
                                        onBlur=${()=>r((e0)=>e0?.panelKey===Q0?null:e0)}
                                        aria-label=${`${j0?.label||"Series"} ${j1(X0.value,P)} at run ${X0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${d.map((j0)=>{let P=j0.points[j0.points.length-1]?.value,a=typeof j0?.unit==="string"?j0.unit:"",X0=j0?.key||j0?.label||"series",D0=o?.panelKey===Q0&&o?.seriesKey===X0?o:null,c0=D0&&Number.isFinite(D0.value)?D0.value:P,e0=D0&&typeof D0.unit==="string"?D0.unit:a,Y1=D0&&Number.isFinite(D0.run)?D0.run:null;return B`
                            <div key=${`${X0}-legend`} class=${`agent-series-legend-item${D0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${Y1!==null&&B`<span class="agent-series-legend-run">run ${Y1}</span>`}
                                <span class="agent-series-legend-value">${j1(c0,e0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},t0=(s)=>{if(!s)return null;let Q0=typeof s?.key==="string"?s.key:`panel-${Math.random()}`,p=i.has(Q0),d=s?.title||"Extension status",F0=s?.collapsed_text||"",k0=String(s?.state||"").replace(/[-_]+/g," ").replace(/^./,(a)=>a.toUpperCase()),M0=v0(s?.state==="completed"?"success":s?.state==="failed"?"error":s?.state==="stopped"?"warning":"info"),H0=typeof s?.detail_markdown==="string"?s.detail_markdown.trim():"",T0=typeof s?.last_run_text==="string"?s.last_run_text.trim():"",b0=typeof s?.tmux_command==="string"?s.tmux_command.trim():"",B0=Array.isArray(s?.series)?s.series:[],y0=Array.isArray(s?.actions)?s.actions:[],J0=Boolean(H0||b0),j0=Boolean(H0||B0.length>0||b0),P=[d,F0].filter(Boolean).join(" — ");return B`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${p?"true":"false"}
                style=${M0?`--turn-color: ${M0};`:""}
                title=${!p?P||d:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?$0(Q0):null}
                    >
                        ${M0&&B`<span class=${w0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${d}</span>
                        ${F0&&B`<span class="agent-thinking-title-meta">${F0}</span>`}
                    </button>
                    ${(y0.length>0||j0&&!p)&&B`
                        <div class="agent-thinking-tools-inline">
                            ${y0.length>0&&B`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${y0.map((a)=>{let X0=`${Q0}:${a?.key||""}`,D0=K?.has?.(X0);return B`
                                            <button
                                                key=${X0}
                                                class=${`agent-thinking-action-btn${a?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>N?.(s,a)}
                                                disabled=${Boolean(D0)}
                                            >
                                                ${D0?"Working…":a?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!p&&B`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${d}`}
                                    title="Expand details"
                                    onClick=${()=>$0(Q0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${j0&&p&&B`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${d}`}
                        title="Collapse details"
                        onClick=${()=>$0(Q0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${p&&B`
                    <div class=${`agent-thinking-autoresearch-layout${J0?"":" chart-only"}`}>
                        ${J0&&B`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${H0&&B`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:l5(H0)}}
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
                                                onClick=${()=>N?.(s,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${HG}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${B0.length>0?B`
                                <div class="agent-series-chart-stack">
                                    ${u0(B0,Q0)}
                                    ${T0&&B`<div class="agent-series-chart-note">${T0}</div>`}
                                </div>
                            `:B`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${U&&Q&&Z1(Q,R0)}
            ${L&&Array.isArray(q)&&q.map((s)=>t0(s))}
            ${U&&_?.type==="intent"&&Z1(_,g0,y1)}
            ${U&&Y&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${L0?`--turn-color: ${L0};`:""}>
                    <span class=${w0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${o0}</span>
                </div>
            `}
            ${U&&T&&I0({panelTitle:E0("Planning"),text:y.text,fullText:y.fullText,totalLines:y.totalLines,panelKey:"plan"})}
            ${U&&I&&I0({panelTitle:E0("Thoughts"),text:c.text,fullText:c.fullText,totalLines:c.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&z&&I0({panelTitle:E0("Draft"),text:l.text,fullText:l.fullText,totalLines:l.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${z0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${L0?`--turn-color: ${L0};`:""}>
                    ${L0&&B`<span class=${w0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!z0&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${O0}</span>
                </div>
            `}
        </div>
    `}function qY({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Y,chat_jid:Q}=_,q=Z?.title||"Agent Request",K=Z?.kind||"other",N=Z?.rawInput||{},G=N.command||N.commands&&N.commands[0]||null,V=N.diff||null,X=N.fileName||N.path||null,U=Z?.description||N.description||N.explanation||null,H=(Array.isArray(Z?.locations)?Z.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),O=Array.from(new Set([X,...H].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Y});let J=async(E)=>{try{await W8(j,E,Q||null),$()}catch(u){console.error("Failed to respond to agent request:",u)}},W=async()=>{try{await P6(q,`Auto-approved: ${q}`),await W8(j,"approved",Q||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},D=Y&&Y.length>0;return B`
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
                ${(U||G||V||O.length>0)&&B`
                    <div class="agent-request-body">
                        ${U&&B`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${O.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${O.map((E,u)=>B`<li key=${u}>${E}</li>`)}
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
                    ${D?Y.map((E)=>B`
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
    `}var JG=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),OG=new Set(["text/markdown"]),DG=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),AG=new Set(["application/vnd.jgraph.mxfile"]);function o5(_){return typeof _==="string"?_.trim().toLowerCase():""}function EG(_){let $=o5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function kG(_){let $=o5(_);return!!$&&$.endsWith(".pdf")}function IG(_){let $=o5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function s5(_,$){let j=o5(_);if(EG($)||AG.has(j))return"drawio";if(kG($)||j==="application/pdf")return"pdf";if(IG($)||DG.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(JG.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function KY(_){let $=o5(_);return OG.has($)}function NY(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function MG(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Y)=>`${Y}${Y}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function xG(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Y=Number(j[2]),Q=Number(j[3]);if(![Z,Y,Q].every((q)=>Number.isFinite(q)))return null;return{r:Z,g:Y,b:Q}}function GY(_){return MG(_)||xG(_)}function r8(_){let $=(Q)=>{let q=Q/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Y=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Y}function TG(_,$){let j=Math.max(r8(_),r8($)),Z=Math.min(r8(_),r8($));return(j+0.05)/(Z+0.05)}function CG(_,$,j="#ffffff"){let Z=GY(_);if(!Z)return j;let Y=j,Q=-1;for(let q of $){let K=GY(q);if(!K)continue;let N=TG(Z,K);if(N>Q)Y=q,Q=N}return Y}function N3(){let _=getComputedStyle(document.documentElement),$=(H,O)=>{for(let J of H){let W=_.getPropertyValue(J).trim();if(W)return W}return O},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Q=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),N=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),V=$(["--danger-color","--color-error"],"#f4212e"),X=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),L=CG(K,[j,Y],j);return{fg:j,fgMuted:Z,bgPrimary:Y,bg:Q,bgEmphasis:q,accent:K,good:N,warning:G,attention:V,border:X,fontFamily:U,buttonTextColor:L}}function XY(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Y,good:Q,warning:q,attention:K,border:N,fontFamily:G}=N3();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:N},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var PG=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),VY=!1,o8=null,UY=!1;function G3(_){_.querySelector(".adaptive-card-notice")?.remove()}function yG(_,$,j="error"){G3(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function SG(_,$=(j)=>z_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function wG(_=($)=>z_($,null)){return($,j)=>{try{let Z=SG($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function RG(_){if(UY||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=wG(),UY=!0}async function uG(){if(VY)return;if(o8)return o8;return o8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{VY=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),o8}function fG(){return globalThis.AdaptiveCards}function vG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function bG(_){return PG.has(_)}function V3(_){if(!Array.isArray(_))return[];return _.filter(vG)}function gG(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:j,data:Y,url:Z,raw:_}}function X3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>X3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${X3(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function mG(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return X3($);return typeof $==="string"?$:String($)}function hG(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Y)=>{if(Array.isArray(Y))return Y.map((K)=>Z(K));if(!Y||typeof Y!=="object")return Y;let q={...Y};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=mG(q.type,j[q.id],q);for(let[K,N]of Object.entries(q))if(Array.isArray(N)||N&&typeof N==="object")q[K]=Z(N);return q};return Z(_)}function pG(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function cG(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function lG(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Y=cG(_.completed_at||j?.submitted_at),Q=[Z||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Q}}async function LY(_,$,j){if(!bG($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await uG()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=fG();RG(Z);let Y=new Z.AdaptiveCard,Q=N3();Y.hostConfig=new Z.HostConfig(XY());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:hG($.payload,q);Y.parse(K),Y.onExecuteAction=(V)=>{let X=gG(V);if(j?.onAction)G3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(X)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let L=U instanceof Error?U.message:String(U||"Action failed.");yG(_,L||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",X)};let N=Y.render();if(!N)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Q.buttonTextColor);let G=lG($);if(G){_.classList.add("adaptive-card-finished");let V=document.createElement("div");V.className=`adaptive-card-status adaptive-card-status-${$.state}`;let X=document.createElement("span");if(X.className="adaptive-card-status-label",X.textContent=G.label,V.appendChild(X),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,V.appendChild(U)}_.appendChild(V)}if(G3(_),_.appendChild(N),G)pG(N);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function a5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>a5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${a5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function WY(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:a5(j)})).filter(($)=>$.value)}function nG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function U3(_){if(!Array.isArray(_))return[];return _.filter(nG)}function BY(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=a5(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Y=WY(j).map(({key:Q,value:q})=>`${Q}: ${q}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function zY(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=WY(_.data),Z=j.length>0?j.slice(0,2).map(({key:Q,value:q})=>`${Q}: ${q}`).join(", "):a5(_.data)||null,Y=j.length;return{title:$,summary:Z,fields:j,fieldCount:Y,submittedAt:_.submitted_at}}function A5({children:_,className:$=""}){let j=x(null);return v(()=>{if(typeof document>"u")return;let Z=document.createElement("div");if($)Z.className=$;return document.body.appendChild(Z),j.current=Z,()=>{try{x4(null,Z)}finally{if(Z.remove(),j.current===Z)j.current=null}}},[$]),x5(()=>{let Z=j.current;if(!Z)return;return x4(_,Z),()=>{x4(null,Z)}},[_]),null}function dG(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?S_($):null},{label:"Added",value:_?.created_at?o4(_.created_at):null}].filter((Z)=>Z.value)}function iG(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Y}&name=${Z}#media=${Y}&name=${Z}`;if(j==="office"){let Q=y_(_);return`/office-viewer/?url=${encodeURIComponent(Q)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Y}&name=${Z}&readonly=1#media=${Y}&name=${Z}&readonly=1`;return null}function FY({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Y=S0(()=>s5($?.content_type,Z),[$?.content_type,Z]),Q=NY(Y),q=S0(()=>KY($?.content_type),[$?.content_type]),[K,N]=g(Y==="text"),[G,V]=g(""),[X,U]=g(null),L=x(null),H=S0(()=>dG($),[$]),O=S0(()=>iG(_,Z,Y),[_,Z,Y]),J=S0(()=>{if(!q||!G)return"";return z_(G)},[q,G]);return v(()=>{let W=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[j]),v(()=>{if(!L.current||!J)return;z4(L.current);return},[J]),v(()=>{let W=!1;async function D(){if(Y!=="text"){N(!1),U(null);return}N(!0),U(null);try{let E=await R6(_);if(!W)V(E)}catch{if(!W)U("Failed to load text preview.")}finally{if(!W)N(!1)}}return D(),()=>{W=!0}},[_,Y]),B`
        <${A5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(W)=>{W.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Z}</div>
                            <div class="attachment-preview-subtitle">${Q}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${O&&B`
                                <a
                                    href=${O}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(W)=>W.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${y_(_)}
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
                            <img class="attachment-preview-image" src=${y_(_)} alt=${Z} />
                        `}
                        ${!K&&!X&&(Y==="pdf"||Y==="office"||Y==="drawio")&&O&&B`
                            <iframe class="attachment-preview-frame" src=${O} title=${Z}></iframe>
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
        </${A5}>
    `}function HY({src:_,onClose:$}){return v(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <${A5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${A5}>
    `}function rG({mediaId:_,onPreview:$}){let[j,Z]=g(null);if(v(()=>{G5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Y=j.filename||"file",Q=j.metadata?.size,q=Q?S_(Q):"",N=s5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${y_(_)} download=${Y} class="file-attachment-main">
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
    `}function oG({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Y]=g(null);v(()=>{if(!Number.isFinite(j))return;G5(j).then(Y).catch(()=>{});return},[j]);let Q=Z?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?y_(j):null,N=s5(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${Q}>
            ${q?B`
                    <a href=${q} download=${Q} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${p_}
                            prefix="post"
                            label=${_.label}
                            title=${Q}
                        />
                    </a>
                `:B`
                    <${p_}
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
    `}function s8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Y=Z?o4(Z):null;return B`
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
    `}function sG({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?S_(_.size):"",Y=_.mime_type||"",Q=eG(Y),q=r4(_.uri);return B`
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
    `}function aG({block:_}){let[$,j]=g(!1),Z=_.uri||"Embedded resource",Y=_.text||"",Q=Boolean(_.data),q=_.mime_type||"";return B`
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
    `}function tG({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=p$(_,$),Y=Xj(_),Q=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Z?.title||_.title||_.name||"Generated widget",K=Z?.description||_.description||_.subtitle||"",N=_.open_label||"Open widget",G=(V)=>{if(V.preventDefault(),V.stopPropagation(),!Z)return;j?.(Z)};return B`
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
    `}function eG(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function _X({preview:_}){let $=r4(_.url),j=r4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Y=_.site_name;if(!Y&&$)try{Y=new URL($).hostname}catch{Y=$}return B`
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
    `}function $X(_,$){return typeof _==="string"?_:""}var jX=1800,ZX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,YX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,QX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function qX(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function KX(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Q)=>Q.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Y=(Q,q)=>{let K=q||"idle";if(Q.dataset.copyState=K,K==="success")Q.innerHTML=YX,Q.setAttribute("aria-label","Copied"),Q.setAttribute("title","Copied"),Q.classList.add("is-success"),Q.classList.remove("is-error");else if(K==="error")Q.innerHTML=QX,Q.setAttribute("aria-label","Copy failed"),Q.setAttribute("title","Copy failed"),Q.classList.add("is-error"),Q.classList.remove("is-success");else Q.innerHTML=ZX,Q.setAttribute("aria-label","Copy code"),Q.setAttribute("title","Copy code"),Q.classList.remove("is-success","is-error")};return $.forEach((Q)=>{let q=document.createElement("div");q.className="post-code-block",Q.parentNode?.insertBefore(q,Q),q.appendChild(Q);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",Y(K,"idle"),q.appendChild(K);let N=async(G)=>{G.preventDefault(),G.stopPropagation();let X=Q.querySelector("code")?.textContent||"",U=await qX(X);Y(K,U?"success":"error");let L=j.get(K);if(L)clearTimeout(L);let H=setTimeout(()=>{Y(K,"idle"),j.delete(K)},jX);j.set(K,H)};K.addEventListener("click",N),Z.push(()=>{K.removeEventListener("click",N);let G=j.get(K);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Q,q),q.remove()})}),()=>{Z.forEach((Q)=>Q())}}function NX(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G))Y.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),K=j.slice(Q),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,fileRefs:Y}}function GX(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Y.push(X[1])}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),K=j.slice(Q),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,messageRefs:Y}}function XX(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1){let V=j[G].trim();if((V==="Images:"||V==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}}if(Z===-1)return{content:_,attachments:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim(),X=V.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||V.match(/^attachment:([^\s]+)\s+(.+)$/i);if(X){let U=X[1],L=(X[2]||"").trim()||U;Y.push({id:U,label:L,raw:V})}else Y.push({id:null,label:V,raw:V})}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let q=j.slice(0,Z),K=j.slice(Q),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,attachments:Y}}function VX(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function UX(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(VX).sort((V,X)=>X.length-V.length),Y=new RegExp(`(${Z.join("|")})`,"gi"),Q=new RegExp(`^(${Z.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),K=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),N=[],G;while(G=K.nextNode())N.push(G);for(let V of N){let X=V.nodeValue;if(!X||!Y.test(X)){Y.lastIndex=0;continue}Y.lastIndex=0;let U=V.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let L=X.split(Y).filter((O)=>O!=="");if(L.length===0)continue;let H=q.createDocumentFragment();for(let O of L)if(Q.test(O)){let J=q.createElement("mark");J.className="search-highlight-term",J.textContent=O,H.appendChild(J)}else H.appendChild(q.createTextNode(O));V.parentNode.replaceChild(H,V)}return q.body.innerHTML}function JY({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Y,agentName:Q,agentAvatarUrl:q,userName:K,userAvatarUrl:N,userAvatarBackground:G,onDelete:V,isThreadReply:X,isThreadPrev:U,isThreadNext:L,isRemoving:H,highlightQuery:O,onFileRef:J,onOpenWidget:W}){let[D,E]=g(null),u=x(null),y=_.data,c=y.type==="agent_response",l=K||"You",T=c?Q||jY:l,I=c?q3(Q,q,!0):q3(l,N),z=typeof G==="string"?G.trim().toLowerCase():"",k=!c&&I.image&&(z==="clear"||z==="transparent"),f=c&&Boolean(I.image),i=`background-color: ${k||f?"transparent":I.color}`,b=y.content_meta,o=Boolean(b?.truncated),r=Boolean(b?.preview),t=o&&!r,Y0=o?{originalLength:Number.isFinite(b?.original_length)?b.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(b?.max_length)?b.max_length:0}:null,$0=y.content_blocks||[],q0=y.media_ids||[],W0=$X(y.content,y.link_previews),{content:L0,fileRefs:w0}=NX(W0),{content:E0,messageRefs:z0}=GX(L0),{content:v0,attachments:A0}=XX(E0);W0=v0;let R0=V3($0),g0=U3($0),O0=R0.length===1&&typeof R0[0]?.fallback_text==="string"?R0[0].fallback_text.trim():"",p0=g0.length===1?BY(g0[0]).trim():"",K0=Boolean(O0)&&W0?.trim()===O0||Boolean(p0)&&W0?.trim()===p0,I0=Boolean(W0)&&!t&&!K0,d0=typeof O==="string"?O.trim():"",o0=S0(()=>{if(!W0||K0)return"";let P=z_(W0,j);return d0?UX(P,d0):P},[W0,K0,d0]),y1=(P,a)=>{P.stopPropagation(),E(y_(a))},[Z1,n0]=g(null),X1=(P)=>{n0(P)},j1=(P)=>{P.stopPropagation(),V?.(_)},s0=(P,a)=>{let X0=new Set;if(!P||a.length===0)return{content:P,usedIds:X0};return{content:P.replace(/attachment:([^\s)"']+)/g,(c0,e0,Y1,O1)=>{let b1=e0.replace(/^\/+/,""),s1=a.find((c1)=>c1.name&&c1.name.toLowerCase()===b1.toLowerCase()&&!X0.has(c1.id))||a.find((c1)=>!X0.has(c1.id));if(!s1)return c0;if(X0.add(s1.id),O1.slice(Math.max(0,Y1-2),Y1)==="](")return`/media/${s1.id}`;return s1.name||"attachment"}),usedIds:X0}},V0=[],u0=[],t0=[],s=[],Q0=[],p=[],d=[],F0=0;if($0.length>0)$0.forEach((P)=>{if(P?.type==="text"&&P.annotations)d.push(P.annotations);if(P?.type==="generated_widget")p.push(P);else if(P?.type==="resource_link")s.push(P);else if(P?.type==="resource")Q0.push(P);else if(P?.type==="file"){let a=q0[F0++];if(a)u0.push(a),t0.push({id:a,name:P?.name||P?.filename||P?.title})}else if(P?.type==="image"||!P?.type){let a=q0[F0++];if(a){let X0=typeof P?.mime_type==="string"?P.mime_type:void 0;V0.push({id:a,annotations:P?.annotations,mimeType:X0}),t0.push({id:a,name:P?.name||P?.filename||P?.title})}}});else if(q0.length>0){let P=A0.length>0;q0.forEach((a,X0)=>{let D0=A0[X0]||null;if(t0.push({id:a,name:D0?.label||null}),P)u0.push(a);else V0.push({id:a,annotations:null})})}if(A0.length>0)A0.forEach((P)=>{if(!P?.id)return;let a=t0.find((X0)=>String(X0.id)===String(P.id));if(a&&!a.name)a.name=P.label});let{content:k0,usedIds:M0}=s0(W0,t0);W0=k0;let H0=V0.filter(({id:P})=>!M0.has(P)),T0=u0.filter((P)=>!M0.has(P)),b0=A0.length>0?A0.map((P,a)=>({id:P.id||`attachment-${a+1}`,label:P.label||`attachment-${a+1}`})):t0.map((P,a)=>({id:P.id,label:P.name||`attachment-${a+1}`})),B0=S0(()=>V3($0),[$0]),y0=S0(()=>U3($0),[$0]),J0=S0(()=>{return B0.map((P)=>`${P.card_id}:${P.state}`).join("|")},[B0]);v(()=>{if(!u.current)return;return z4(u.current),KX(u.current)},[o0]);let j0=x(null);return v(()=>{if(!j0.current||B0.length===0)return;let P=j0.current;P.innerHTML="";for(let a of B0){let X0=document.createElement("div");P.appendChild(X0),LY(X0,a,{onAction:async(D0)=>{if(D0.type==="Action.OpenUrl"){let c0=r4(D0.url||"");if(!c0)throw Error("Invalid URL");window.open(c0,"_blank","noopener,noreferrer");return}if(D0.type==="Action.Submit"){await C6({post_id:_.id,thread_id:y.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:a.card_id,action:{type:D0.type,title:D0.title||"",data:D0.data}});return}console.warn("[post] unsupported adaptive card action:",D0.type,D0)}}).catch((D0)=>{console.error("[post] adaptive card render error:",D0),X0.textContent=a.fallback_text||"Card failed to render."})}},[J0,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${c?"agent-post":""} ${X?"thread-reply":""} ${U?"thread-prev":""} ${L?"thread-next":""} ${H?"removing":""}" onClick=${$}>
            <div class="post-avatar ${c?"agent-avatar":""} ${I.image?"has-image":""}" style=${i}>
                ${I.image?B`<img src=${I.image} alt=${T} />`:I.letter}
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
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(P)=>{if(P.preventDefault(),P.stopPropagation(),Z)Z(_.id)}}>${x7(_.timestamp)}</a>
                </div>
                ${t&&Y0&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${n5(Y0.originalLength)} chars
                            ${Y0.maxLength?B` • Display limit: ${n5(Y0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${r&&Y0&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${n5(Y0.maxLength)} of ${n5(Y0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(w0.length>0||z0.length>0||b0.length>0)&&B`
                    <div class="post-file-refs">
                        ${z0.map((P)=>{let a=(X0)=>{if(X0.preventDefault(),X0.stopPropagation(),Y)Y(P,_.chat_jid||null);else{let D0=document.getElementById("post-"+P);if(D0)D0.scrollIntoView({behavior:"smooth",block:"center"}),D0.classList.add("post-highlight"),setTimeout(()=>D0.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${P}`} class="post-msg-pill-link" onClick=${a}>
                                    <${p_}
                                        prefix="post"
                                        label=${"msg:"+P}
                                        title=${"Message "+P}
                                        icon="message"
                                        onClick=${a}
                                    />
                                </a>
                            `})}
                        ${w0.map((P)=>{let a=P.split("/").pop()||P;return B`
                                <${p_}
                                    prefix="post"
                                    label=${a}
                                    title=${P}
                                    onClick=${()=>J?.(P)}
                                />
                            `})}
                        ${b0.map((P)=>B`
                            <${oG}
                                key=${P.id}
                                attachment=${P}
                                onPreview=${X1}
                            />
                        `)}
                    </div>
                `}
                ${I0&&B`
                    <div 
                        ref=${u}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:o0}}
                        onClick=${(P)=>{if(P.target.classList.contains("hashtag")){P.preventDefault(),P.stopPropagation();let a=P.target.dataset.hashtag;if(a)j?.(a)}else if(P.target.tagName==="IMG")P.preventDefault(),P.stopPropagation(),E(P.target.src)}}
                    />
                `}
                ${B0.length>0&&B`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${y0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${y0.map((P,a)=>{let X0=zY(P),D0=`${P.card_id}-${a}`;return B`
                                <div key=${D0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${X0.title}</span>
                                        </div>
                                    </div>
                                    ${X0.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${X0.fields.map((c0)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${c0.key}: ${c0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${c0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${c0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${o4(X0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${p.length>0&&B`
                    <div class="generated-widget-launches">
                        ${p.map((P,a)=>B`
                            <${tG}
                                key=${P.widget_id||P.id||`${_.id}-widget-${a}`}
                                block=${P}
                                post=${_}
                                onOpenWidget=${W}
                            />
                        `)}
                    </div>
                `}
                ${d.length>0&&B`
                    ${d.map((P,a)=>B`
                        <${s8} key=${a} annotations=${P} />
                    `)}
                `}
                ${H0.length>0&&B`
                    <div class="media-preview">
                        ${H0.map(({id:P,mimeType:a})=>{let D0=typeof a==="string"&&a.toLowerCase().startsWith("image/svg")?y_(P):w6(P);return B`
                                <img 
                                    key=${P} 
                                    src=${D0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(c0)=>y1(c0,P)}
                                />
                            `})}
                    </div>
                `}
                ${H0.length>0&&B`
                    ${H0.map(({annotations:P},a)=>B`
                        ${P&&B`<${s8} key=${a} annotations=${P} />`}
                    `)}
                `}
                ${T0.length>0&&B`
                    <div class="file-attachments">
                        ${T0.map((P)=>B`
                            <${rG} key=${P} mediaId=${P} onPreview=${X1} />
                        `)}
                    </div>
                `}
                ${s.length>0&&B`
                    <div class="resource-links">
                        ${s.map((P,a)=>B`
                            <div key=${a}>
                                <${sG} block=${P} />
                                <${s8} annotations=${P.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Q0.length>0&&B`
                    <div class="resource-embeds">
                        ${Q0.map((P,a)=>B`
                            <div key=${a}>
                                <${aG} block=${P} />
                                <${s8} annotations=${P.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${y.link_previews.map((P,a)=>B`
                            <${_X} key=${a} preview=${P} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&B`<${HY} src=${D} onClose=${()=>E(null)} />`}
        ${Z1&&B`
            <${FY}
                mediaId=${Z1.mediaId}
                info=${Z1.info}
                onClose=${()=>n0(null)}
            />
        `}
    `}function OY({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Y,onMessageRef:Q,onScrollToMessage:q,onFileRef:K,onOpenWidget:N,emptyMessage:G,timelineRef:V,agents:X,user:U,onDeletePost:L,reverse:H=!0,removingPostIds:O,searchQuery:J}){let[W,D]=g(!1),E=x(null),u=typeof IntersectionObserver<"u",y=C(async()=>{if(!j||!$||W)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,W,j]),c=C((b)=>{let{scrollTop:o,scrollHeight:r,clientHeight:t}=b.target,Y0=H?r-t-o:o,$0=Math.max(300,t);if(Y0<$0)y()},[H,y]);v(()=>{if(!u)return;let b=E.current,o=V?.current;if(!b||!o)return;let r=300,t=new IntersectionObserver((Y0)=>{for(let $0 of Y0){if(!$0.isIntersecting)continue;y()}},{root:o,rootMargin:`${r}px 0px ${r}px 0px`,threshold:0});return t.observe(b),()=>t.disconnect()},[u,$,j,V,y]);let l=x(y);if(l.current=y,v(()=>{if(u)return;if(!V?.current)return;let{scrollTop:b,scrollHeight:o,clientHeight:r}=V.current,t=H?o-r-b:b,Y0=Math.max(300,r);if(t<Y0)l.current?.()},[u,_,$,H,V]),v(()=>{if(!V?.current)return;if(!$||W)return;let{scrollTop:b,scrollHeight:o,clientHeight:r}=V.current,t=H?o-r-b:b,Y0=Math.max(300,r);if(o<=r+1||t<Y0)l.current?.()},[_,$,W,H,V]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let T=_.slice().sort((b,o)=>b.id-o.id),I=(b)=>{let o=b?.data?.thread_id;if(o===null||o===void 0||o==="")return null;let r=Number(o);return Number.isFinite(r)?r:null},z=new Map;for(let b=0;b<T.length;b+=1){let o=T[b],r=Number(o?.id),t=I(o);if(t!==null){let Y0=z.get(t)||{anchorIndex:-1,replyIndexes:[]};Y0.replyIndexes.push(b),z.set(t,Y0)}else if(Number.isFinite(r)){let Y0=z.get(r)||{anchorIndex:-1,replyIndexes:[]};Y0.anchorIndex=b,z.set(r,Y0)}}let k=new Map;for(let[b,o]of z.entries()){let r=new Set;if(o.anchorIndex>=0)r.add(o.anchorIndex);for(let t of o.replyIndexes)r.add(t);k.set(b,Array.from(r).sort((t,Y0)=>t-Y0))}let f=T.map((b,o)=>{let r=I(b);if(r===null)return{hasThreadPrev:!1,hasThreadNext:!1};let t=k.get(r);if(!t||t.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Y0=t.indexOf(o);if(Y0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Y0>0,hasThreadNext:Y0<t.length-1}}),i=B`<div class="timeline-sentinel" ref=${E}></div>`;return B`
        <div class="timeline ${H?"reverse":"normal"}" ref=${V} onScroll=${c}>
            <div class="timeline-content">
                ${H?i:null}
                ${T.map((b,o)=>{let r=Boolean(b.data?.thread_id&&b.data.thread_id!==b.id),t=O?.has?.(b.id),Y0=f[o]||{};return B`
                    <${JY}
                        key=${b.id}
                        post=${b}
                        isThreadReply=${r}
                        isThreadPrev=${Y0.hasThreadPrev}
                        isThreadNext=${Y0.hasThreadNext}
                        isRemoving=${t}
                        highlightQuery=${J}
                        agentName=${ZY(b.data?.agent_id,X||{})}
                        agentAvatarUrl=${YY(b.data?.agent_id,X||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(b)}
                        onHashtagClick=${Y}
                        onMessageRef=${Q}
                        onScrollToMessage=${q}
                        onFileRef=${K}
                        onOpenWidget=${N}
                        onDelete=${L}
                    />
                `})}
                ${H?null:i}
            </div>
        </div>
    `}var a8="workspaceExplorerScale",LX=["compact","default","comfortable"],WX=new Set(LX),BX={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function DY(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return WX.has(j)?j:$}function L3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function zX(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function FX(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function W3(_={}){let $=zX(_),j=_.stored?DY(_.stored,$):$;return FX(j,_)}function AY(_){return BX[DY(_)]}function HX(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function B3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function EY(_,$,j={}){let Z=j.resolvePane;if(B3(_,Z))return!0;return HX($)}var JX=60000,xY=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function OX(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return B3($,(j)=>h0.resolve(j))}function TY(_,$,j,Z=0,Y=[]){if(!j&&xY(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Q of _.children)TY(Q,$,j,Z+1,Y);return Y}function kY(_,$,j){if(!_)return"";let Z=[],Y=(Q)=>{if(!j&&xY(Q))return;if(Z.push(Q.type==="dir"?`d:${Q.path}`:`f:${Q.path}`),Q.children&&$?.has(Q.path))for(let q of Q.children)Y(q)};return Y(_),Z.join("|")}function J3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Y=j?new Map(j.map((K)=>[K?.path,K])):new Map,Q=!j||j.length!==Z.length,q=Z.map((K)=>{let N=J3(Y.get(K.path),K);if(N!==Y.get(K.path))Q=!0;return N});return Q?{...$,children:q}:_}function F3(_,$,j){if(!_)return _;if(_.path===$)return J3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Y=_.children.map((Q)=>{let q=F3(Q,$,j);if(q!==Q)Z=!0;return q});return Z?{..._,children:Y}:_}var CY=4,z3=14,DX=8,AX=16;function PY(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=PY(Z);return _.__bytes=j,j}function yY(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=CY)return Z;let Y=Array.isArray(_.children)?_.children:[],Q=[];for(let K of Y){let N=Math.max(0,Number(K?.__bytes??K?.size??0));if(N<=0)continue;if(K.type==="dir")Q.push({kind:"dir",node:K,size:N});else Q.push({kind:"file",name:K.name,path:K.path,size:N})}Q.sort((K,N)=>N.size-K.size);let q=Q;if(Q.length>z3){let K=Q.slice(0,z3-1),N=Q.slice(z3-1),G=N.reduce((V,X)=>V+X.size,0);K.push({kind:"other",name:`+${N.length} more`,path:`${Z.path}/[other]`,size:G}),q=K}return Z.children=q.map((K)=>{if(K.kind==="dir")return yY(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Z}function IY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function SY(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Y=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Q=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Y}% ${Q}%)`}function t8(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function O3(_,$,j,Z,Y,Q){let q=Math.PI*2-0.0001,K=Q-Y>q?Y+q:Q,N=t8(_,$,Z,Y),G=t8(_,$,Z,K),V=t8(_,$,j,K),X=t8(_,$,j,Y),U=K-Y>Math.PI?1:0;return[`M ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,"Z"].join(" ")}var wY={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function RY(_,$,j){let Z=[],Y=[],Q=Math.max(0,Number($)||0),q=(K,N,G,V)=>{let X=Array.isArray(K?.children)?K.children:[];if(!X.length)return;let U=Math.max(0,Number(K.size)||0);if(U<=0)return;let L=G-N,H=N;X.forEach((O,J)=>{let W=Math.max(0,Number(O.size)||0);if(W<=0)return;let D=W/U,E=H,u=J===X.length-1?G:H+L*D;if(H=u,u-E<0.003)return;let y=wY[V];if(y){let c=SY(E,V,j);if(Z.push({key:O.path,path:O.path,label:O.name,size:W,color:c,depth:V,startAngle:E,endAngle:u,innerRadius:y[0],outerRadius:y[1],d:O3(120,120,y[0],y[1],E,u)}),V===1)Y.push({key:O.path,name:O.name,size:W,pct:Q>0?W/Q*100:0,color:c})}if(V<CY)q(O,E,u,V+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Y}}function H3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Y=H3(Z,$);if(Y)return Y}return null}function uY(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Y=wY[1];if(!Y)return{segments:[],legend:[]};let Q=-Math.PI/2,q=Math.PI*3/2,K=SY(Q,1,Z),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:K,depth:1,startAngle:Q,endAngle:q,innerRadius:Y[0],outerRadius:Y[1],d:O3(120,120,Y[0],Y[1],Q,q)}],legend:[{key:G,name:_,size:j,pct:100,color:K}]}}function MY(_,$=!1,j=!1){if(!_)return null;let Z=PY(_),Y=yY(_,0),Q=Y.size||Z,{segments:q,legend:K}=RY(Y,Q,j);if(!q.length&&Q>0){let N=uY("[files]",Y.path,Q,j);q=N.segments,K=N.legend}return{root:Y,totalSize:Q,segments:q,legend:K,truncated:$,isDarkTheme:j}}function EX({payload:_}){if(!_)return null;let[$,j]=g(null),[Z,Y]=g(_?.root?.path||"."),[Q,q]=g(()=>[_?.root?.path||"."]),[K,N]=g(!1);v(()=>{let z=_?.root?.path||".";Y(z),q([z]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Z)return;N(!0);let z=setTimeout(()=>N(!1),180);return()=>clearTimeout(z)},[Z]);let G=S0(()=>{return H3(_.root,Z)||_.root},[_?.root,Z]),V=G?.size||_.totalSize||0,{segments:X,legend:U}=S0(()=>{let z=RY(G,V,_.isDarkTheme);if(z.segments.length>0)return z;if(V<=0)return z;let k=G?.children?.length?"Total":"[files]";return uY(k,G?.path||_?.root?.path||".",V,_.isDarkTheme)},[G,V,_.isDarkTheme,_?.root?.path]),[L,H]=g(X),O=x(new Map),J=x(0);v(()=>{let z=O.current,k=new Map(X.map((o)=>[o.key,o])),f=performance.now(),i=220,b=(o)=>{let r=Math.min(1,(o-f)/220),t=r*(2-r),Y0=X.map(($0)=>{let W0=z.get($0.key)||{startAngle:$0.startAngle,endAngle:$0.startAngle,innerRadius:$0.innerRadius,outerRadius:$0.innerRadius},L0=(A0,R0)=>A0+(R0-A0)*t,w0=L0(W0.startAngle,$0.startAngle),E0=L0(W0.endAngle,$0.endAngle),z0=L0(W0.innerRadius,$0.innerRadius),v0=L0(W0.outerRadius,$0.outerRadius);return{...$0,d:O3(120,120,z0,v0,w0,E0)}});if(H(Y0),r<1)J.current=requestAnimationFrame(b)};if(J.current)cancelAnimationFrame(J.current);return J.current=requestAnimationFrame(b),O.current=k,()=>{if(J.current)cancelAnimationFrame(J.current)}},[X]);let W=L.length?L:X,D=V>0?S_(V):"0 B",E=G?.name||"",y=(E&&E!=="."?E:"Total")||"Total",c=D,l=Q.length>1,T=(z)=>{if(!z?.path)return;let k=H3(_.root,z.path);if(!k||!Array.isArray(k.children)||k.children.length===0)return;q((f)=>[...f,k.path]),Y(k.path),j(null)},I=()=>{if(!l)return;q((z)=>{let k=z.slice(0,-1);return Y(k[k.length-1]||_?.root?.path||"."),k}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${K?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${W.length}
                data-base-size=${V}>
                ${W.map((z)=>B`
                    <path
                        key=${z.key}
                        d=${z.d}
                        fill=${z.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===z.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(z)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(z)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>T(z)}
                    >
                        <title>${z.label} — ${S_(z.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${l?" is-drill":""}`}
                    onClick=${I}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${c}</text>
                </g>
            </svg>
            ${U.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((z)=>B`
                        <div key=${z.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${z.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${z.name}>${z.name}</span>
                            <span class="workspace-folder-starburst-size">${S_(z.size)}</span>
                            <span class="workspace-folder-starburst-pct">${z.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function kX({mediaId:_}){let[$,j]=g(null);if(v(()=>{if(!_)return;G5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Y=$.metadata?.size?S_($.metadata.size):"";return B`
        <a href=${y_(_)} download=${Z} class="file-attachment"
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
    `}function fY({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Y,onOpenVncTab:Q,onToggleTerminal:q,terminalVisible:K=!1}){let[N,G]=g(null),[V,X]=g(new Set(["."])),[U,L]=g(null),[H,O]=g(null),[J,W]=g(""),[D,E]=g(null),[u,y]=g(null),[c,l]=g(!0),[T,I]=g(!1),[z,k]=g(null),[f,i]=g(()=>F5("workspaceShowHidden",!1)),[b,o]=g(!1),[r,t]=g(null),[Y0,$0]=g(null),[q0,W0]=g(null),[L0,w0]=g(!1),[E0,z0]=g(null),[v0,A0]=g(()=>IY()),[R0,g0]=g(()=>W3({stored:B_(a8),...L3()})),[O0,p0]=g(!1),K0=x(V),I0=x(""),d0=x(null),o0=x(0),y1=x(new Set),Z1=x(null),n0=x(new Map),X1=x(_),j1=x(Z),s0=x(null),V0=x(null),u0=x(null),t0=x(null),s=x(null),Q0=x(null),p=x("."),d=x(null),F0=x({path:null,dragging:!1,startX:0,startY:0}),k0=x({path:null,dragging:!1,startX:0,startY:0}),M0=x({path:null,timer:0}),H0=x(!1),T0=x(0),b0=x(new Map),B0=x(null),y0=x(null),J0=x(null),j0=x(null),P=x(null),a=x(null),X0=x(f),D0=x($),c0=x(j??$),e0=x(0),Y1=x(q0),O1=x(b),b1=x(r),w_=x(null),s1=x({x:0,y:0}),R1=x(0),c1=x(null),g1=x(U),a0=x(H),l1=x(null),t_=x(D);X1.current=_,j1.current=Z,v(()=>{K0.current=V},[V]),v(()=>{X0.current=f},[f]),v(()=>{D0.current=$},[$]),v(()=>{c0.current=j??$},[j,$]),v(()=>{Y1.current=q0},[q0]),v(()=>{if(typeof window>"u")return;let A=()=>{g0(W3({stored:B_(a8),...L3()}))};A();let M=()=>A(),R=()=>A(),S=(e)=>{if(!e||e.key===null||e.key===a8)A()};window.addEventListener("resize",M),window.addEventListener("focus",R),window.addEventListener("storage",S);let n=window.matchMedia?.("(pointer: coarse)"),Z0=window.matchMedia?.("(hover: none)"),N0=(e,C0)=>{if(!e)return;if(e.addEventListener)e.addEventListener("change",C0);else if(e.addListener)e.addListener(C0)},G0=(e,C0)=>{if(!e)return;if(e.removeEventListener)e.removeEventListener("change",C0);else if(e.removeListener)e.removeListener(C0)};return N0(n,M),N0(Z0,M),()=>{window.removeEventListener("resize",M),window.removeEventListener("focus",R),window.removeEventListener("storage",S),G0(n,M),G0(Z0,M)}},[]),v(()=>{let A=(M)=>{let R=M?.detail?.path;if(!R)return;let S=R.split("/"),n=[];for(let Z0=1;Z0<S.length;Z0++)n.push(S.slice(0,Z0).join("/"));if(n.length)X((Z0)=>{let N0=new Set(Z0);N0.add(".");for(let G0 of n)N0.add(G0);return N0});L(R),requestAnimationFrame(()=>{let Z0=document.querySelector(`[data-path="${CSS.escape(R)}"]`);if(Z0)Z0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",A),()=>window.removeEventListener("workspace-reveal-path",A)},[]),v(()=>{O1.current=b},[b]),v(()=>{b1.current=r},[r]),v(()=>{g1.current=U},[U]),v(()=>{a0.current=H},[H]),v(()=>{t_.current=D},[D]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let A=()=>A0(IY());A();let M=window.matchMedia?.("(prefers-color-scheme: dark)"),R=()=>A();if(M?.addEventListener)M.addEventListener("change",R);else if(M?.addListener)M.addListener(R);let S=typeof MutationObserver<"u"?new MutationObserver(()=>A()):null;if(S?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)S?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(M?.removeEventListener)M.removeEventListener("change",R);else if(M?.removeListener)M.removeListener(R);S?.disconnect()}},[]),v(()=>{if(!H)return;let A=s.current;if(!A)return;let M=requestAnimationFrame(()=>{try{A.focus(),A.select()}catch{}});return()=>cancelAnimationFrame(M)},[H]),v(()=>{if(!O0)return;let A=(R)=>{let S=R?.target;if(!(S instanceof Element))return;if(P.current?.contains(S))return;if(a.current?.contains(S))return;p0(!1)},M=(R)=>{if(R?.key==="Escape")p0(!1),a.current?.focus?.()};return document.addEventListener("mousedown",A),document.addEventListener("touchstart",A,{passive:!0}),document.addEventListener("keydown",M),()=>{document.removeEventListener("mousedown",A),document.removeEventListener("touchstart",A),document.removeEventListener("keydown",M)}},[O0]);let a1=async(A,M={})=>{let R=Boolean(M?.autoOpen),S=String(A||"").trim();I(!0),E(null),y(null);try{let n=await y5(S,20000);if(R&&S&&EY(S,n,{resolvePane:(Z0)=>h0.resolve(Z0)}))return j1.current?.(S,n),n;return E(n),n}catch(n){let Z0={error:n.message||"Failed to load preview"};return E(Z0),Z0}finally{I(!1)}};s0.current=a1;let e_=async()=>{if(!D0.current)return;try{let A=await P5("",1,X0.current),M=kY(A.root,K0.current,X0.current);if(M===I0.current){l(!1);return}if(I0.current=M,d0.current=A.root,!o0.current)o0.current=requestAnimationFrame(()=>{o0.current=0,G((R)=>J3(R,d0.current)),l(!1)})}catch(A){k(A.message||"Failed to load workspace"),l(!1)}},c_=async(A)=>{if(!A)return;if(y1.current.has(A))return;y1.current.add(A);try{let M=await P5(A,1,X0.current);G((R)=>F3(R,A,M.root))}catch(M){k(M.message||"Failed to load workspace")}finally{y1.current.delete(A)}};V0.current=c_;let D1=C(()=>{let A=U;if(!A)return".";let M=n0.current?.get(A);if(M&&M.type==="dir")return M.path;if(A==="."||!A.includes("/"))return".";let R=A.split("/");return R.pop(),R.join("/")||"."},[U]),n1=C((A)=>{let M=A?.closest?.(".workspace-row");if(!M)return null;let R=M.dataset.path,S=M.dataset.type;if(!R)return null;if(S==="dir")return R;if(R.includes("/")){let n=R.split("/");return n.pop(),n.join("/")||"."}return"."},[]),A1=C((A)=>{return n1(A?.target||null)},[n1]),V1=C((A)=>{Y1.current=A,W0(A)},[]),U1=C(()=>{let A=M0.current;if(A?.timer)clearTimeout(A.timer);M0.current={path:null,timer:0}},[]),V_=C((A)=>{if(!A||A==="."){U1();return}let M=n0.current?.get(A);if(!M||M.type!=="dir"){U1();return}if(K0.current?.has(A)){U1();return}if(M0.current?.path===A)return;U1();let R=setTimeout(()=>{M0.current={path:null,timer:0},V0.current?.(A),X((S)=>{let n=new Set(S);return n.add(A),n})},600);M0.current={path:A,timer:R}},[U1]),U_=C((A,M)=>{if(s1.current={x:A,y:M},R1.current)return;R1.current=requestAnimationFrame(()=>{R1.current=0;let R=w_.current;if(!R)return;let S=s1.current;R.style.transform=`translate(${S.x+12}px, ${S.y+12}px)`})},[]),M1=C((A)=>{if(!A)return;let R=(n0.current?.get(A)?.name||A.split("/").pop()||A).trim();if(!R)return;$0({path:A,label:R})},[]),d1=C(()=>{if($0(null),R1.current)cancelAnimationFrame(R1.current),R1.current=0;if(w_.current)w_.current.style.transform="translate(-9999px, -9999px)"},[]),Q1=C((A)=>{if(!A)return".";let M=n0.current?.get(A);if(M&&M.type==="dir")return M.path;if(A==="."||!A.includes("/"))return".";let R=A.split("/");return R.pop(),R.join("/")||"."},[]),I1=C(()=>{O(null),W("")},[]),t1=C((A)=>{if(!A)return;let R=(n0.current?.get(A)?.name||A.split("/").pop()||A).trim();if(!R||A===".")return;O(A),W(R)},[]),m1=C(async()=>{let A=a0.current;if(!A)return;let M=(J||"").trim();if(!M){I1();return}let R=n0.current?.get(A),S=(R?.name||A.split("/").pop()||A).trim();if(M===S){I1();return}try{let Z0=(await v6(A,M))?.path||A,N0=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(I1(),k(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:A,newPath:Z0,type:R?.type||"file"}})),R?.type==="dir")X((G0)=>{let e=new Set;for(let C0 of G0)if(C0===A)e.add(Z0);else if(C0.startsWith(`${A}/`))e.add(`${Z0}${C0.slice(A.length)}`);else e.add(C0);return e});if(L(Z0),R?.type==="dir")E(null),I(!1),y(null);else s0.current?.(Z0);V0.current?.(N0)}catch(n){k(n?.message||"Failed to rename file")}},[I1,J]),_4=C(async(A)=>{let S=A||".";for(let n=0;n<50;n+=1){let N0=`untitled${n===0?"":`-${n}`}.md`;try{let e=(await f6(S,N0,""))?.path||(S==="."?N0:`${S}/${N0}`);if(S&&S!==".")X((C0)=>new Set([...C0,S]));L(e),k(null),V0.current?.(S),s0.current?.(e);return}catch(G0){if(G0?.status===409||G0?.code==="file_exists")continue;k(G0?.message||"Failed to create file");return}}k("Failed to create file (untitled name already in use).")},[]),H_=C((A)=>{if(A?.stopPropagation?.(),L0)return;let M=Q1(g1.current);_4(M)},[L0,Q1,_4]);v(()=>{if(typeof window>"u")return;let A=(M)=>{let R=M?.detail?.updates||[];if(!Array.isArray(R)||R.length===0)return;G((G0)=>{let e=G0;for(let C0 of R){if(!C0?.root)continue;if(!e||C0.path==="."||!C0.path)e=C0.root;else e=F3(e,C0.path,C0.root)}if(e)I0.current=kY(e,K0.current,X0.current);return l(!1),e});let S=g1.current;if(Boolean(S)&&R.some((G0)=>{let e=G0?.path||"";if(!e||e===".")return!0;return S===e||S.startsWith(`${e}/`)||e.startsWith(`${S}/`)}))b0.current.clear();if(!S||!t_.current)return;let Z0=n0.current?.get(S);if(Z0&&Z0.type==="dir")return;if(R.some((G0)=>{let e=G0?.path||"";if(!e||e===".")return!0;return S===e||S.startsWith(`${e}/`)}))s0.current?.(S)};return window.addEventListener("workspace-update",A),()=>window.removeEventListener("workspace-update",A)},[]),Z1.current=e_;let $4=x(()=>{if(typeof window>"u")return;let A=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),M=c0.current??D0.current,R=document.visibilityState!=="hidden"&&(M||A.matches&&D0.current);S5(R,X0.current).catch(()=>{})}).current,J_=x(0),F4=x(()=>{if(J_.current)clearTimeout(J_.current);J_.current=setTimeout(()=>{J_.current=0,$4()},250)}).current;v(()=>{if(D0.current)Z1.current?.();F4()},[$,j]),v(()=>{Z1.current(),$4();let A=setInterval(()=>Z1.current(),JX),M=h5("previewHeight",null),R=Number.isFinite(M)?Math.min(Math.max(M,80),600):280;if(T0.current=R,u0.current)u0.current.style.setProperty("--preview-height",`${R}px`);let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),n=()=>F4();if(S.addEventListener)S.addEventListener("change",n);else if(S.addListener)S.addListener(n);return document.addEventListener("visibilitychange",n),()=>{if(clearInterval(A),o0.current)cancelAnimationFrame(o0.current),o0.current=0;if(S.removeEventListener)S.removeEventListener("change",n);else if(S.removeListener)S.removeListener(n);if(document.removeEventListener("visibilitychange",n),J_.current)clearTimeout(J_.current),J_.current=0;if(d.current)clearTimeout(d.current),d.current=null;S5(!1,X0.current).catch(()=>{})}},[]);let O_=S0(()=>TY(N,V,f),[N,V,f]),R_=S0(()=>new Map(O_.map((A)=>[A.node.path,A.node])),[O_]),u4=S0(()=>AY(R0),[R0]);n0.current=R_;let _1=(U?n0.current.get(U):null)?.type==="dir";v(()=>{if(!U||!_1){z0(null),B0.current=null,y0.current=null;return}let A=U,M=`${f?"hidden":"visible"}:${U}`,R=b0.current,S=R.get(M);if(S?.root){R.delete(M),R.set(M,S);let N0=MY(S.root,Boolean(S.truncated),v0);if(N0)B0.current=N0,y0.current=U,z0({loading:!1,error:null,payload:N0});return}let n=B0.current,Z0=y0.current;z0({loading:!0,error:null,payload:Z0===U?n:null}),P5(U,DX,f).then((N0)=>{if(g1.current!==A)return;let G0={root:N0?.root,truncated:Boolean(N0?.truncated)};R.delete(M),R.set(M,G0);while(R.size>AX){let C0=R.keys().next().value;if(!C0)break;R.delete(C0)}let e=MY(G0.root,G0.truncated,v0);B0.current=e,y0.current=U,z0({loading:!1,error:null,payload:e})}).catch((N0)=>{if(g1.current!==A)return;z0({loading:!1,error:N0?.message||"Failed to load folder size chart",payload:Z0===U?n:null})})},[U,_1,f,v0]);let E1=Boolean(D&&D.kind==="text"&&!_1&&(!D.size||D.size<=262144)),H4=E1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",e1=Boolean(U&&U!=="."),D_=Boolean(U&&!_1),h1=Boolean(U&&!_1),F1=U&&_1?F8(U,f):null,S1=C(()=>p0(!1),[]),q1=C(async(A)=>{S1();try{await A?.()}catch(M){console.warn("[workspace-explorer] Header menu action failed:",M)}},[S1]);v(()=>{let A=J0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!A)return;if(A.innerHTML="",!U||_1||!D||D.error)return;let M={path:U,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},R=h0.resolve(M)||h0.get("workspace-preview-default");if(!R)return;let S=R.mount(A,M);return j0.current=S,()=>{if(j0.current===S)S.dispose(),j0.current=null;A.innerHTML=""}},[U,_1,D]);let __=(A)=>{let M=A?.target;if(M instanceof Element)return M;return M?.parentElement||null},$_=(A)=>{return Boolean(A?.closest?.(".workspace-node-icon, .workspace-label-text"))},j_=x((A)=>{let M=__(A),R=M?.closest?.("[data-path]");if(!R)return;let S=R.dataset.path;if(!S||S===".")return;let n=Boolean(M?.closest?.("button"))||Boolean(M?.closest?.("a"))||Boolean(M?.closest?.("input")),Z0=Boolean(M?.closest?.(".workspace-caret"));if(n||Z0)return;if(a0.current===S)return;t1(S)}).current,l_=x((A)=>{if(H0.current){H0.current=!1;return}let M=__(A),R=M?.closest?.("[data-path]");if(t0.current?.focus?.(),!R)return;let S=R.dataset.path,n=R.dataset.type,Z0=Boolean(M?.closest?.(".workspace-caret")),N0=Boolean(M?.closest?.("button"))||Boolean(M?.closest?.("a"))||Boolean(M?.closest?.("input")),G0=g1.current===S,e=a0.current;if(e){if(e===S)return;I1()}let C0=n==="file"&&l1.current===S&&!Z0&&!N0;if(n==="dir"){if(l1.current=null,L(S),E(null),y(null),I(!1),!K0.current.has(S))V0.current?.(S);if(G0&&!Z0)return;X((M_)=>{let q_=new Set(M_);if(q_.has(S))q_.delete(S);else q_.add(S);return q_})}else{l1.current=null,L(S);let x1=n0.current.get(S);if(x1)X1.current?.(x1.path,x1);if(!N0&&!Z0&&OX(S))j1.current?.(S,t_.current);else{let q_=!N0&&!Z0;s0.current?.(S,{autoOpen:q_})}}}).current,u1=x(()=>{I0.current="",Z1.current(),Array.from(K0.current||[]).filter((M)=>M&&M!==".").forEach((M)=>V0.current?.(M))}).current,w1=x(()=>{l1.current=null,L(null),E(null),y(null),I(!1)}).current,Z_=x(()=>{i((A)=>{let M=!A;if(typeof window<"u")$1("workspaceShowHidden",String(M));return X0.current=M,S5(!0,M).catch(()=>{}),I0.current="",Z1.current?.(),Array.from(K0.current||[]).filter((S)=>S&&S!==".").forEach((S)=>V0.current?.(S)),M})}).current,u_=x((A)=>{if(__(A)?.closest?.("[data-path]"))return;w1()}).current,L1=C(async(A)=>{if(!A)return;let M=A.split("/").pop()||A;if(!window.confirm(`Delete "${M}"? This cannot be undone.`))return;try{await g6(A);let S=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(g1.current===A)w1();V0.current?.(S),k(null)}catch(S){E((n)=>({...n||{},error:S.message||"Failed to delete file"}))}},[w1]),A_=C((A)=>{let M=t0.current;if(!M||!A||typeof CSS>"u"||typeof CSS.escape!=="function")return;M.querySelector(`[data-path="${CSS.escape(A)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),K1=C((A)=>{let M=O_;if(!M||M.length===0)return;let R=U?M.findIndex((S)=>S.node.path===U):-1;if(A.key==="ArrowDown"){A.preventDefault();let S=Math.min(R+1,M.length-1),n=M[S];if(!n)return;if(L(n.node.path),n.node.type!=="dir")X1.current?.(n.node.path,n.node),s0.current?.(n.node.path);else E(null),I(!1),y(null);A_(n.node.path);return}if(A.key==="ArrowUp"){A.preventDefault();let S=R<=0?0:R-1,n=M[S];if(!n)return;if(L(n.node.path),n.node.type!=="dir")X1.current?.(n.node.path,n.node),s0.current?.(n.node.path);else E(null),I(!1),y(null);A_(n.node.path);return}if(A.key==="ArrowRight"&&R>=0){let S=M[R];if(S?.node?.type==="dir"&&!V.has(S.node.path))A.preventDefault(),V0.current?.(S.node.path),X((n)=>new Set([...n,S.node.path]));return}if(A.key==="ArrowLeft"&&R>=0){let S=M[R];if(S?.node?.type==="dir"&&V.has(S.node.path))A.preventDefault(),X((n)=>{let Z0=new Set(n);return Z0.delete(S.node.path),Z0});return}if(A.key==="Enter"&&R>=0){A.preventDefault();let S=M[R];if(!S)return;let n=S.node.path;if(S.node.type==="dir"){if(!K0.current.has(n))V0.current?.(n);X((N0)=>{let G0=new Set(N0);if(G0.has(n))G0.delete(n);else G0.add(n);return G0}),E(null),y(null),I(!1)}else X1.current?.(n,S.node),s0.current?.(n);return}if((A.key==="Delete"||A.key==="Backspace")&&R>=0){let S=M[R];if(!S||S.node.type==="dir")return;A.preventDefault(),L1(S.node.path);return}if(A.key==="Escape")A.preventDefault(),w1()},[w1,L1,V,O_,A_,U]),f_=C((A)=>{let M=__(A),R=M?.closest?.(".workspace-row");if(!R)return;let S=R.dataset.type,n=R.dataset.path;if(!n||n===".")return;if(a0.current===n)return;let Z0=A?.touches?.[0];if(!Z0)return;if(F0.current={path:$_(M)?n:null,dragging:!1,startX:Z0.clientX,startY:Z0.clientY},S!=="file")return;if(d.current)clearTimeout(d.current);d.current=setTimeout(()=>{if(d.current=null,F0.current?.dragging)return;L1(n)},600)},[L1]),E_=C(()=>{if(d.current)clearTimeout(d.current),d.current=null;let A=F0.current;if(A?.dragging&&A.path){let M=Y1.current||D1(),R=c1.current;if(typeof R==="function")R(A.path,M)}F0.current={path:null,dragging:!1,startX:0,startY:0},e0.current=0,o(!1),t(null),V1(null),U1(),d1()},[D1,d1,V1,U1]),v4=C((A)=>{let M=F0.current,R=A?.touches?.[0];if(!R||!M?.path){if(d.current)clearTimeout(d.current),d.current=null;return}let S=Math.abs(R.clientX-M.startX),n=Math.abs(R.clientY-M.startY),Z0=S>8||n>8;if(Z0&&d.current)clearTimeout(d.current),d.current=null;if(!M.dragging&&Z0)M.dragging=!0,o(!0),t("move"),M1(M.path);if(M.dragging){A.preventDefault(),U_(R.clientX,R.clientY);let N0=document.elementFromPoint(R.clientX,R.clientY),G0=n1(N0)||D1();if(Y1.current!==G0)V1(G0);V_(G0)}},[n1,D1,M1,U_,V1,V_]),b4=x((A)=>{A.preventDefault();let M=u0.current;if(!M)return;let R=A.clientY,S=T0.current||280,n=A.currentTarget;n.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Z0=R,N0=(e)=>{Z0=e.clientY;let C0=M.clientHeight-80,x1=Math.min(Math.max(S-(e.clientY-R),80),C0);M.style.setProperty("--preview-height",`${x1}px`),T0.current=x1},G0=()=>{let e=M.clientHeight-80,C0=Math.min(Math.max(S-(Z0-R),80),e);T0.current=C0,n.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$1("previewHeight",String(Math.round(C0))),document.removeEventListener("mousemove",N0),document.removeEventListener("mouseup",G0)};document.addEventListener("mousemove",N0),document.addEventListener("mouseup",G0)}).current,v_=x((A)=>{A.preventDefault();let M=u0.current;if(!M)return;let R=A.touches[0];if(!R)return;let S=R.clientY,n=T0.current||280,Z0=A.currentTarget;Z0.classList.add("dragging"),document.body.style.userSelect="none";let N0=(e)=>{let C0=e.touches[0];if(!C0)return;e.preventDefault();let x1=M.clientHeight-80,M_=Math.min(Math.max(n-(C0.clientY-S),80),x1);M.style.setProperty("--preview-height",`${M_}px`),T0.current=M_},G0=()=>{Z0.classList.remove("dragging"),document.body.style.userSelect="",$1("previewHeight",String(Math.round(T0.current||n))),document.removeEventListener("touchmove",N0),document.removeEventListener("touchend",G0),document.removeEventListener("touchcancel",G0)};document.addEventListener("touchmove",N0,{passive:!1}),document.addEventListener("touchend",G0),document.addEventListener("touchcancel",G0)}).current,n_=async()=>{if(!U)return;try{let A=await u6(U);if(A.media_id)y(A.media_id)}catch(A){E((M)=>({...M||{},error:A.message||"Failed to attach"}))}},g4=async()=>{if(!U||_1)return;await L1(U)},j4=(A)=>{return Array.from(A?.dataTransfer?.types||[]).includes("Files")},a4=C((A)=>{if(!j4(A))return;if(A.preventDefault(),e0.current+=1,!O1.current)o(!0);t("upload");let M=A1(A)||D1();V1(M),V_(M)},[D1,A1,V1,V_]),Z4=C((A)=>{if(!j4(A))return;if(A.preventDefault(),A.dataTransfer)A.dataTransfer.dropEffect="copy";if(!O1.current)o(!0);if(b1.current!=="upload")t("upload");let M=A1(A)||D1();if(Y1.current!==M)V1(M);V_(M)},[D1,A1,V1,V_]),d_=C((A)=>{if(!j4(A))return;if(A.preventDefault(),e0.current=Math.max(0,e0.current-1),e0.current===0)o(!1),t(null),V1(null),U1()},[V1,U1]),i1=C(async(A,M=".")=>{let R=Array.from(A||[]);if(R.length===0)return;let S=M&&M!==""?M:".",n=S!=="."?S:"workspace root";w0(!0);try{let Z0=null;for(let N0 of R)try{Z0=await B8(N0,S)}catch(G0){let e=G0?.status,C0=G0?.code;if(e===409||C0==="file_exists"){let x1=N0?.name||"file";if(!window.confirm(`"${x1}" already exists in ${n}. Overwrite?`))continue;Z0=await B8(N0,S,{overwrite:!0})}else throw G0}if(Z0?.path)l1.current=Z0.path,L(Z0.path),s0.current?.(Z0.path);V0.current?.(S)}catch(Z0){k(Z0.message||"Failed to upload file")}finally{w0(!1)}},[]),J4=C(async(A,M)=>{if(!A)return;let R=n0.current?.get(A);if(!R)return;let S=M&&M!==""?M:".",n=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(S===n)return;try{let N0=(await b6(A,S))?.path||A;if(R.type==="dir")X((G0)=>{let e=new Set;for(let C0 of G0)if(C0===A)e.add(N0);else if(C0.startsWith(`${A}/`))e.add(`${N0}${C0.slice(A.length)}`);else e.add(C0);return e});if(L(N0),R.type==="dir")E(null),I(!1),y(null);else s0.current?.(N0);V0.current?.(n),V0.current?.(S)}catch(Z0){k(Z0?.message||"Failed to move entry")}},[]);c1.current=J4;let O4=C(async(A)=>{if(!j4(A))return;A.preventDefault(),e0.current=0,o(!1),t(null),W0(null),U1();let M=Array.from(A?.dataTransfer?.files||[]);if(M.length===0)return;let R=Y1.current||A1(A)||D1();await i1(M,R)},[D1,A1,i1]),I5=C((A)=>{if(A?.stopPropagation?.(),L0)return;let M=A?.currentTarget?.dataset?.uploadTarget||".";p.current=M,Q0.current?.click()},[L0]),H1=C(()=>{if(L0)return;let A=g1.current,M=A?n0.current?.get(A):null;p.current=M?.type==="dir"?M.path:".",Q0.current?.click()},[L0]),D4=C(()=>{q1(()=>H_(null))},[q1,H_]),t4=C(()=>{q1(()=>H1())},[q1,H1]),Y_=C(()=>{q1(()=>u1())},[q1,u1]),Q_=C(()=>{q1(()=>Z_())},[q1,Z_]),Y4=C(()=>{if(!U||!E1)return;q1(()=>j1.current?.(U,D))},[q1,U,E1,D]),m4=C(()=>{if(!U||U===".")return;q1(()=>t1(U))},[q1,U,t1]),h4=C(()=>{if(!U||_1)return;q1(()=>g4())},[q1,U,_1,g4]),e4=C(()=>{if(!U||_1)return;q1(()=>n_())},[q1,U,_1,n_]),Q4=C(()=>{if(!F1)return;if(S1(),typeof window<"u")window.open(F1,"_blank","noopener")},[S1,F1]),k_=C(()=>{S1(),Y?.()},[S1,Y]),M5=C(()=>{S1(),Q?.()},[S1,Q]),A4=C(()=>{S1(),q?.()},[S1,q]),p4=C((A)=>{if(!A||A.button!==0)return;let M=A.currentTarget;if(!M||!M.dataset)return;let R=M.dataset.path;if(!R||R===".")return;if(a0.current===R)return;let S=__(A);if(S?.closest?.("button, a, input, .workspace-caret"))return;if(!$_(S))return;A.preventDefault(),k0.current={path:R,dragging:!1,startX:A.clientX,startY:A.clientY};let n=(N0)=>{let G0=k0.current;if(!G0?.path)return;let e=Math.abs(N0.clientX-G0.startX),C0=Math.abs(N0.clientY-G0.startY),x1=e>4||C0>4;if(!G0.dragging&&x1)G0.dragging=!0,H0.current=!0,o(!0),t("move"),M1(G0.path),U_(N0.clientX,N0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(G0.dragging){N0.preventDefault(),U_(N0.clientX,N0.clientY);let M_=document.elementFromPoint(N0.clientX,N0.clientY),q_=n1(M_)||D1();if(Y1.current!==q_)V1(q_);V_(q_)}},Z0=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",Z0);let N0=k0.current;if(N0?.dragging&&N0.path){let G0=Y1.current||D1(),e=c1.current;if(typeof e==="function")e(N0.path,G0)}k0.current={path:null,dragging:!1,startX:0,startY:0},e0.current=0,o(!1),t(null),V1(null),U1(),d1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{H0.current=!1},0)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",Z0)},[n1,D1,M1,U_,d1,V1,V_,U1]),I_=C(async(A)=>{let M=Array.from(A?.target?.files||[]);if(M.length===0)return;let R=p.current||".";if(await i1(M,R),p.current=".",A?.target)A.target.value=""},[i1]);return B`
        <aside
            class=${`workspace-sidebar${b?" workspace-drop-active":""}`}
            data-workspace-scale=${R0}
            ref=${u0}
            onDragEnter=${a4}
            onDragOver=${Z4}
            onDragLeave=${d_}
            onDrop=${O4}
        >
            <input type="file" multiple style="display:none" ref=${Q0} onChange=${I_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${a}
                            class=${`workspace-menu-button${O0?" active":""}`}
                            onClick=${(A)=>{A.stopPropagation(),p0((M)=>!M)}}
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
                                <button class="workspace-menu-item" role="menuitem" onClick=${D4} disabled=${L0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${t4} disabled=${L0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Y_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${f?" active":""}`} role="menuitem" onClick=${Q_}>
                                    ${f?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&B`<div class="workspace-menu-separator"></div>`}
                                ${U&&!_1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y4} disabled=${!E1}>Open in editor</button>
                                `}
                                ${e1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Rename selected</button>
                                `}
                                ${h1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${e4}>Download selected file</button>
                                `}
                                ${F1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q4}>Download selected folder (zip)</button>
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
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${A4}>
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
                    <button class="workspace-refresh" onClick=${u1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${u_}>
                ${L0&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${c&&B`<div class="workspace-loading">Loading…</div>`}
                ${z&&B`<div class="workspace-error">${z}</div>`}
                ${N&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${t0}
                        tabIndex="0"
                        onClick=${l_}
                        onDblClick=${j_}
                        onKeyDown=${K1}
                        onTouchStart=${f_}
                        onTouchEnd=${E_}
                        onTouchMove=${v4}
                        onTouchCancel=${E_}
                    >
                        ${O_.map(({node:A,depth:M})=>{let R=A.type==="dir",S=A.path===U,n=A.path===H,Z0=R&&V.has(A.path),N0=q0&&A.path===q0,G0=Array.isArray(A.children)&&A.children.length>0?A.children.length:Number(A.child_count)||0;return B`
                                <div
                                    key=${A.path}
                                    class=${`workspace-row${S?" selected":""}${N0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+M*u4.indentPx}px`}}
                                    data-path=${A.path}
                                    data-type=${A.type}
                                    onMouseDown=${p4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${R?Z0?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${R?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${R?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${n?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${s}
                                                value=${J}
                                                onInput=${(e)=>W(e?.target?.value||"")}
                                                onKeyDown=${(e)=>{if(e.key==="Enter")e.preventDefault(),m1();else if(e.key==="Escape")e.preventDefault(),I1()}}
                                                onBlur=${I1}
                                                onClick=${(e)=>e.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${A.name}</span></span>`}
                                    ${R&&!Z0&&G0>0&&B`
                                        <span class="workspace-count">${G0}</span>
                                    `}
                                    ${R&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${A.path}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${b4} onTouchStart=${v_}></div>
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
                                    onClick=${()=>E1&&j1.current?.(U,D)}
                                    title=${H4}
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
                                    <button class="workspace-download" onClick=${H1}
                                        title="Upload files to this folder" disabled=${L0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${F8(U,f)}
                                        title="Download folder as zip" onClick=${(A)=>A.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${n_} title="Download">
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
                    ${D?.error&&B`<div class="workspace-error">${D.error}</div>`}
                    ${_1&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${E0?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${E0?.error&&B`<div class="workspace-error">${E0.error}</div>`}
                        ${E0?.payload&&E0.payload.segments?.length>0&&B`
                            <${EX} payload=${E0.payload} />
                        `}
                        ${E0?.payload&&(!E0.payload.segments||E0.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!_1&&B`
                        <div class="workspace-preview-body" ref=${J0}></div>
                    `}
                    ${u&&B`
                        <div class="workspace-download-card">
                            <${kX} mediaId=${u} />
                        </div>
                    `}
                </div>
            `}
            ${Y0&&B`
                <div class="workspace-drag-ghost" ref=${w_}>${Y0.label}</div>
            `}
        </aside>
    `}var IX=new Set(["kanban-editor","mindmap-editor"]);function MX(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function vY(_,$,j){let Z=MX(_,$,j);return Z!=null&&IX.has(Z)}var xX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,TX=/\.(csv|tsv)$/i,CX=/\.pdf$/i,PX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,bY=/\.drawio(\.xml|\.svg|\.png)?$/i;function gY({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Y,onCloseAll:Q,onTogglePin:q,onTogglePreview:K,onEditSource:N,previewTabs:G,paneOverrides:V,onToggleDock:X,dockVisible:U,onToggleZen:L,zenMode:H,onPopOutTab:O}){let[J,W]=g(null),D=x(null);v(()=>{if(!J)return;let z=(k)=>{if(k.type==="keydown"&&k.key!=="Escape")return;W(null)};return document.addEventListener("click",z),document.addEventListener("keydown",z),()=>{document.removeEventListener("click",z),document.removeEventListener("keydown",z)}},[J]),v(()=>{let z=(k)=>{if(k.ctrlKey&&k.key==="Tab"){if(k.preventDefault(),!_.length)return;let f=_.findIndex((i)=>i.id===$);if(k.shiftKey){let i=_[(f-1+_.length)%_.length];j?.(i.id)}else{let i=_[(f+1)%_.length];j?.(i.id)}return}if((k.ctrlKey||k.metaKey)&&k.key==="w"){let f=document.querySelector(".editor-pane");if(f&&f.contains(document.activeElement)){if(k.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[_,$,j,Z]);let E=C((z,k)=>{if(z.button===1){z.preventDefault(),Z?.(k);return}if(z.button===0)j?.(k)},[j,Z]),u=C((z,k)=>{z.preventDefault(),W({id:k,x:z.clientX,y:z.clientY})},[]),y=C((z)=>{z.preventDefault(),z.stopPropagation()},[]),c=C((z,k)=>{z.preventDefault(),z.stopPropagation(),Z?.(k)},[Z]);v(()=>{if(!$||!D.current)return;let z=D.current.querySelector(".tab-item.active");if(z)z.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let l=C((z)=>{if(!(V instanceof Map))return null;return V.get(z)||null},[V]),T=S0(()=>_.find((z)=>z.id===J?.id)||null,[J?.id,_]),I=S0(()=>{let z=J?.id;if(!z)return!1;return vY(z,l(z),(k)=>h0.resolve(k))},[J?.id,l]);if(!_.length)return null;return B`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((z)=>B`
                <div
                    key=${z.id}
                    class=${`tab-item${z.id===$?" active":""}${z.dirty?" dirty":""}${z.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${z.id===$}
                    title=${z.path}
                    onMouseDown=${(k)=>E(k,z.id)}
                    onContextMenu=${(k)=>u(k,z.id)}
                >
                    ${z.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${z.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${y}
                        onClick=${(k)=>c(k,z.id)}
                        title=${z.dirty?"Unsaved changes":"Close"}
                        aria-label=${z.dirty?"Unsaved changes":`Close ${z.label}`}
                    >
                        ${z.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
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
                ${I&&N&&B`
                    <button onClick=${()=>{N(J.id),W(null)}}>Edit Source</button>
                `}
                ${O&&B`
                    <button onClick=${()=>{let z=_.find((k)=>k.id===J.id);O(J.id,z?.label),W(null)}}>Open in Window</button>
                `}
                ${K&&/\.(md|mdx|markdown)$/i.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{K(J.id),W(null)}}>
                        ${G?.has(J.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${xX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(J.id),k=J.id.split("/").pop()||"document",f="/office-viewer/?url="+encodeURIComponent(z)+"&name="+encodeURIComponent(k);window.open(f,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${TX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/csv-viewer/?path="+encodeURIComponent(J.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${CX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(J.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${PX.test(J.id)&&!bY.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/image-viewer/?path="+encodeURIComponent(J.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${bY.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/drawio/edit?path="+encodeURIComponent(J.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function yX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Z,zenMode:Y}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Z?" chat-only":""}${Y?" zen-mode":""}`}function mY(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:Q,isRenameBranchFormOpen:q,closeRenameCurrentBranchForm:K,handleRenameCurrentBranch:N,renameBranchNameDraft:G,renameBranchNameInputRef:V,setRenameBranchNameDraft:X,renameBranchDraftState:U,isRenamingBranch:L,addFileRef:H,openEditor:O,openTerminalTab:J,openVncTab:W,hasDockPanes:D,toggleDock:E,dockVisible:u,handleSplitterMouseDown:y,handleSplitterTouchStart:c,showEditorPaneContainer:l,tabStripTabs:T,tabStripActiveId:I,handleTabActivate:z,handleTabClose:k,handleTabCloseOthers:f,handleTabCloseAll:i,handleTabTogglePin:b,handleTabTogglePreview:o,handleTabEditSource:r,previewTabs:t,tabPaneOverrides:Y0,toggleZenMode:$0,handlePopOutPane:q0,isWebAppMode:W0,editorContainerRef:L0,editorInstanceRef:w0,handleDockSplitterMouseDown:E0,handleDockSplitterTouchStart:z0,TERMINAL_TAB_PATH:v0,dockContainerRef:A0,handleEditorSplitterMouseDown:R0,handleEditorSplitterTouchStart:g0,searchQuery:O0,isIOSDevice:p0,currentBranchRecord:K0,currentChatJid:I0,currentChatBranches:d0,handleBranchPickerChange:o0,formatBranchPickerLabel:y1,openRenameCurrentBranchForm:Z1,handlePruneCurrentBranch:n0,currentHashtag:X1,handleBackToTimeline:j1,activeSearchScopeLabel:s0,posts:V0,isMainTimelineView:u0,hasMore:t0,loadMore:s,timelineRef:Q0,handleHashtagClick:p,addMessageRef:d,scrollToMessage:F0,openFileFromPill:k0,handleDeletePost:M0,handleOpenFloatingWidget:H0,agents:T0,userProfile:b0,removingPostIds:B0,agentStatus:y0,isCompactionStatus:J0,agentDraft:j0,agentPlan:P,agentThought:a,pendingRequest:X0,intentToast:D0,currentTurnId:c0,steerQueued:e0,handlePanelToggle:Y1,btwSession:O1,closeBtwPanel:b1,handleBtwRetry:w_,handleBtwInject:s1,floatingWidget:R1,handleCloseFloatingWidget:c1,handleFloatingWidgetEvent:g1,extensionStatusPanels:a0,pendingExtensionPanelActions:l1,handleExtensionPanelAction:t_,searchOpen:a1,followupQueueItems:e_,handleInjectQueuedFollowup:c_,handleRemoveQueuedFollowup:D1,viewStateRef:n1,loadPosts:A1,scrollToBottom:V1,searchScope:U1,handleSearch:V_,setSearchScope:U_,enterSearchMode:M1,exitSearchMode:d1,fileRefs:Q1,removeFileRef:I1,clearFileRefs:t1,setFileRefsFromCompose:m1,messageRefs:_4,removeMessageRef:H_,clearMessageRefs:$4,setMessageRefsFromCompose:J_,handleCreateSessionFromCompose:F4,handleRestoreBranch:O_,attachActiveEditorFile:R_,followupQueueCount:u4,handleBtwIntercept:f4,handleMessageResponse:_1,handleComposeSubmitError:E1,handlePopOutChat:H4,isComposeBoxAgentActive:e1,activeChatAgents:D_,connectionStatus:h1,activeModel:F1,activeModelUsage:S1,activeThinkingLevel:q1,supportsThinking:__,contextUsage:$_,notificationsEnabled:j_,notificationPermission:l_,handleToggleNotifications:u1,setActiveModel:w1,applyModelState:Z_,setPendingRequest:u_,pendingRequestRef:L1,toggleWorkspace:A_}=_;return B`
    <div class=${yX({workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:Q})} ref=${$}>
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
              onInput=${(K1)=>{let f_=K1.currentTarget?.value??"";X(String(f_))}}
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
        <${fY}
          onFileSelect=${H}
          visible=${j}
          active=${j||Z}
          onOpenEditor=${O}
          onOpenTerminalTab=${J}
          onOpenVncTab=${W}
          onToggleTerminal=${D?E:void 0}
          terminalVisible=${Boolean(D&&u)}
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
        <div class="workspace-splitter" onMouseDown=${y} onTouchStart=${c}></div>
      `}
      ${l&&B`
        <div class="editor-pane-container">
          ${Q&&B`<div class="zen-hover-zone"></div>`}
          ${Z&&B`
            <${gY}
              tabs=${T}
              activeId=${I}
              onActivate=${z}
              onClose=${k}
              onCloseOthers=${f}
              onCloseAll=${i}
              onTogglePin=${b}
              onTogglePreview=${o}
              onEditSource=${r}
              previewTabs=${t}
              paneOverrides=${Y0}
              onToggleDock=${D?E:void 0}
              dockVisible=${D&&u}
              onToggleZen=${$0}
              zenMode=${Q}
              onPopOutTab=${W0?void 0:q0}
            />
          `}
          ${Z&&B`<div class="editor-pane-host" ref=${L0}></div>`}
          ${Z&&I&&t.has(I)&&B`
            <${n8}
              getContent=${()=>w0.current?.getContent?.()}
              path=${I}
              onClose=${()=>o(I)}
            />
          `}
          ${D&&u&&B`<div class="dock-splitter" onMouseDown=${E0} onTouchStart=${z0}></div>`}
          ${D&&B`<div class=${`dock-panel${u?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!W0&&B`
                  <button class="dock-panel-action" onClick=${()=>q0(v0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
        <div class="editor-splitter" onMouseDown=${R0} onTouchStart=${g0}></div>
      `}
      <div class="container">
        ${O0&&p0()&&B`<div class="search-results-spacer"></div>`}
        ${Y&&B`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${K0?.agent_name?`@${K0.agent_name}`:I0}
              </span>
              <span class="chat-window-header-subtitle">${K0?.chat_jid||I0}</span>
            </div>
            <div class="chat-window-header-actions">
              ${d0.length>1&&B`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${I0}
                    onChange=${(K1)=>o0(K1.currentTarget.value)}
                  >
                    ${d0.map((K1)=>B`
                      <option key=${K1.chat_jid} value=${K1.chat_jid}>
                        ${y1(K1,{currentChatJid:I0})}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${K0?.chat_jid&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${Z1}
                  title=${L?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${L}
                >
                  ${L?"Renaming…":"Rename"}
                </button>
              `}
              ${K0?.chat_jid&&K0.chat_jid!==(K0.root_chat_jid||K0.chat_jid)&&B`
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
        ${(X1||O0)&&B`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${j1}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${X1?`#${X1}`:`Search: ${O0} · ${s0}`}</span>
          </div>
        `}
        <${OY}
          posts=${V0}
          hasMore=${u0?t0:!1}
          onLoadMore=${u0?s:void 0}
          timelineRef=${Q0}
          onHashtagClick=${p}
          onMessageRef=${d}
          onScrollToMessage=${F0}
          onFileRef=${k0}
          onPostClick=${void 0}
          onDeletePost=${M0}
          onOpenWidget=${H0}
          emptyMessage=${X1?`No posts with #${X1}`:O0?`No results for "${O0}"`:void 0}
          agents=${T0}
          user=${b0}
          reverse=${u0}
          removingPostIds=${B0}
          searchQuery=${O0}
        />
        <${K3}
          status=${J0(y0)?null:y0}
          draft=${j0}
          plan=${P}
          thought=${a}
          pendingRequest=${X0}
          intent=${D0}
          turnId=${c0}
          steerQueued=${e0}
          onPanelToggle=${Y1}
          showExtensionPanels=${!1}
        />
        <${_Y}
          session=${O1}
          onClose=${b1}
          onRetry=${w_}
          onInject=${s1}
        />
        <${$Y}
          widget=${R1}
          onClose=${c1}
          onWidgetEvent=${g1}
        />
        <${K3}
          extensionPanels=${Array.from(a0.values())}
          pendingPanelActions=${l1}
          onExtensionPanelAction=${t_}
          turnId=${c0}
          steerQueued=${e0}
          onPanelToggle=${Y1}
          showCorePanels=${!1}
        />
        <${Q3}
          items=${a1?[]:e_}
          onInjectQueuedFollowup=${c_}
          onRemoveQueuedFollowup=${D1}
          onOpenFilePill=${k0}
        />
        <${eZ}
          onPost=${()=>{let{searchQuery:K1,searchOpen:f_}=n1.current||{};if(!K1&&!f_)A1(),V1()}}
          onFocus=${V1}
          searchMode=${a1}
          searchScope=${U1}
          onSearch=${V_}
          onSearchScopeChange=${U_}
          onEnterSearch=${M1}
          onExitSearch=${d1}
          fileRefs=${Q1}
          onRemoveFileRef=${I1}
          onClearFileRefs=${t1}
          onSetFileRefs=${m1}
          messageRefs=${_4}
          onRemoveMessageRef=${H_}
          onClearMessageRefs=${$4}
          onSetMessageRefs=${J_}
          onSwitchChat=${o0}
          onRenameSession=${N}
          isRenameSessionInProgress=${L}
          onCreateSession=${F4}
          onDeleteSession=${n0}
          onRestoreSession=${O_}
          activeEditorPath=${Y?null:I}
          onAttachEditorFile=${Y?void 0:R_}
          onOpenFilePill=${k0}
          followupQueueCount=${u4}
          followupQueueItems=${e_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${c_}
          onRemoveQueuedFollowup=${D1}
          onSubmitIntercept=${f4}
          onMessageResponse=${_1}
          onSubmitError=${E1}
          onPopOutChat=${W0?void 0:H4}
          isAgentActive=${e1}
          activeChatAgents=${D_}
          currentChatJid=${I0}
          connectionStatus=${h1}
          activeModel=${F1}
          modelUsage=${S1}
          thinkingLevel=${q1}
          supportsThinking=${__}
          contextUsage=${$_}
          notificationsEnabled=${j_}
          notificationPermission=${l_}
          onToggleNotifications=${u1}
          onModelChange=${w1}
          onModelStateChange=${Z_}
          statusNotice=${J0(y0)?y0:null}
        />
        <${qY}
          request=${X0}
          onRespond=${()=>{u_(null),L1.current=null}}
        />
      </div>
    </div>
  `}function SX(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function e8(_,$){return{text:_,totalLines:SX(_,$)}}function D3(_,$){return{text:$?.text||"",totalLines:G9(_),fullText:_}}function hY(_,$,j){return j==="replace"?$:`${_||""}${$}`}function pY(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function cY(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function s4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function E5(_,$){return Boolean(_)&&!Boolean($)}function lY(_,$){return _||$||null}function _6(_){return _?.turn_id||_?.turnId||null}function k5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function A3(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function nY(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function wX(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function dY(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:wX($,j),panelKey:typeof $?.key==="string"?$.key:""}}function iY(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var RX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function rY(_){return RX.has(String(_||"").trim())}function uX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function E3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(uX(_),{detail:Z})),!0}function oY(_,$,j){let Z=$?.turn_id,Y=$?.chat_jid,Q=typeof Y==="string"&&Y.trim()?Y.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Z,eventChatJid:Q,isGlobalUiEvent:q,isCurrentChatEvent:Q?Q===j:q}}function sY(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function aY(_,$,j){let{currentChatJid:Z,updateAgentProfile:Y,updateUserProfile:Q,currentTurnIdRef:q,activeChatJidRef:K,pendingRequestRef:N,draftBufferRef:G,thoughtBufferRef:V,steerQueuedTurnIdRef:X,thoughtExpandedRef:U,draftExpandedRef:L,draftThrottleRef:H,thoughtThrottleRef:O,viewStateRef:J,followupQueueItemsRef:W,dismissedQueueRowIdsRef:D,scrollToBottomRef:E,hasMoreRef:u,loadMoreRef:y,lastAgentResponseRef:c,wasAgentActiveRef:l,setActiveTurn:T,applyLiveGeneratedWidgetUpdate:I,setFloatingWidget:z,clearLastActivityFlag:k,handleUiVersionDrift:f,setAgentStatus:i,setAgentDraft:b,setAgentPlan:o,setAgentThought:r,setPendingRequest:t,clearAgentRunState:Y0,getAgentStatus:$0,noteAgentActivity:q0,showLastActivity:W0,refreshTimeline:L0,refreshModelAndQueueState:w0,refreshActiveChatAgents:E0,refreshCurrentChatBranches:z0,notifyForFinalResponse:v0,setContextUsage:A0,refreshContextUsage:R0,refreshQueueState:g0,setFollowupQueueItems:O0,clearQueuedSteerStateIfStale:p0,setSteerQueuedTurnId:K0,applyModelState:I0,getAgentContext:d0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:y1,refreshActiveEditorFromWorkspace:Z1,showIntentToast:n0,removeStalledPost:X1,setPosts:j1,preserveTimelineScrollTop:s0}=j,{turnId:V0,isCurrentChatEvent:u0}=oY(_,$,Z);if(u0)Y($),Q($);if(_==="ui_theme"){J7($);return}let t0=nY(_);if(t0.kind==="update"){if(!u0)return;if(t0.shouldAdoptTurn&&E5(V0,q.current))T(V0);I($,t0.fallbackStatus||"streaming");return}if(t0.kind==="close"){if(!u0)return;z((p)=>Oj(p,$));return}if(_?.startsWith("agent_")&&!sY(_))k();if(_==="connected"){if(f($?.app_asset_version))return;i(null),b({text:"",totalLines:0}),o(""),r({text:"",totalLines:0}),t(null),N.current=null,Y0();let p=Z;if($0(p).then((d)=>{if(K.current!==p)return;if(!d||d.status!=="active"||!d.data)return;let F0=d.data,k0=_6(F0);if(k0)T(k0);q0({clearSilence:!0}),W0(F0);let M0=k5(d.thought);if(M0)V.current=M0.text,r(M0);let H0=k5(d.draft);if(H0)G.current=H0.text,b(H0)}).catch((d)=>{console.warn("Failed to fetch agent status:",d)}),a_(J.current))L0();w0();return}if(_==="agent_status"){if(!u0){if($?.type==="done"||$?.type==="error")E0(),z0();return}if($.type==="done"||$.type==="error"){if(s4(V0,q.current))return;if($.type==="done"){if(v0(V0||q.current),a_(J.current))L0();if($.context_usage)A0($.context_usage)}if(R0(),l.current=!1,Y0(),D.current.clear(),E0(),g0(),b({text:"",totalLines:0}),o(""),r({text:"",totalLines:0}),t(null),$.type==="error")i({type:"error",title:$.title||"Agent error"}),setTimeout(()=>i(null),8000);else i(null)}else{if(V0)T(V0);if(q0({running:!0,clearSilence:!0}),$.type==="thinking")G.current="",V.current="",b({text:"",totalLines:0}),o(""),r({text:"",totalLines:0});i((p)=>{if(p&&p.type===$.type&&p.title===$.title)return p;return $})}return}if(_==="agent_steer_queued"){if(!u0)return;if(s4(V0,q.current))return;let p=lY(V0,q.current);if(!p)return;X.current=p,K0(p);return}if(_==="agent_followup_queued"){if(!u0)return;O0((p)=>E9(p,$)),g0();return}if(_==="agent_followup_consumed"){if(!u0)return;let p=D5(W.current,$);if(p)p0(p.remainingQueueCount),O0((d)=>S4(d,p.rowId).items);if(g0(),a_(J.current))L0();return}if(_==="agent_followup_removed"){if(!u0)return;let p=D5(W.current,$);if(p)D.current.add(p.rowId),p0(p.remainingQueueCount),O0((d)=>S4(d,p.rowId).items);g0();return}if(_==="agent_draft_delta"){if(!u0)return;if(s4(V0,q.current))return;if(E5(V0,q.current))T(V0);q0({running:!0,clearSilence:!0}),G.current=pY(G.current,$);let p=Date.now();if(!H.current||p-H.current>=100){H.current=p;let d=G.current;if(L.current)b((F0)=>D3(d,F0));else b(e8(d,null))}return}if(_==="agent_draft"){if(!u0)return;if(s4(V0,q.current))return;if(E5(V0,q.current))T(V0);q0({running:!0,clearSilence:!0});let p=$.text||"",d=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")o((F0)=>hY(F0,p,d));else if(!L.current)G.current=p,b(e8(p,$.total_lines));return}if(_==="agent_thought_delta"){if(!u0)return;if(s4(V0,q.current))return;if(E5(V0,q.current))T(V0);q0({running:!0,clearSilence:!0}),V.current=cY(V.current,$);let p=Date.now();if(U.current&&(!O.current||p-O.current>=100)){O.current=p;let d=V.current;r((F0)=>D3(d,F0))}return}if(_==="agent_thought"){if(!u0)return;if(s4(V0,q.current))return;if(E5(V0,q.current))T(V0);q0({running:!0,clearSilence:!0});let p=$.text||"";if(!U.current)V.current=p,r(e8(p,$.total_lines));return}if(_==="model_changed"){if(!u0)return;I0($);let p=Z;d0(p).then((d)=>{if(K.current!==p)return;if(d)A0(d)}).catch(()=>{});return}let s=dY(_,$,Z);if(s.isStatusPanelWidgetEvent){if(s.eventChatJid!==Z)return;if(!s.panelKey)return;if(o0((p)=>R9(p,$)),u9($))y1((p)=>u8(p,s.panelKey));E3(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));Z1($?.updates);return}if(rY(_)){if(!u0)return;E3(_,$);let p=iY(_,$);if(p)n0(p.title,p.detail,p.kind,p.durationMs);return}let Q0=a_(J.current);if(_==="agent_response"){if(!u0)return;X1(),c.current={post:$,turnId:q.current}}if(g9(_,u0,Q0))j1((p)=>m9(p,$)),E.current?.();if(_==="interaction_updated"){if(!h$(u0,Q0))return;j1((p)=>h9(p,$))}if(_==="interaction_deleted"){if(!h$(u0,Q0))return;let p=$?.ids||[];if(p.length){if(s0(()=>{j1((d)=>p9(d,p))}),u.current)y.current?.({preserveScroll:!0,preserveMode:"top"})}}}async function tY(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Z,wasAgentActiveRef:Y,viewStateRef:Q,refreshTimeline:q,clearAgentRunState:K,agentStatusRef:N,pendingRequestRef:G,thoughtBufferRef:V,draftBufferRef:X,setAgentStatus:U,setAgentDraft:L,setAgentPlan:H,setAgentThought:O,setPendingRequest:J,setActiveTurn:W,noteAgentActivity:D,clearLastActivityFlag:E}=_,u=$;try{let y=await j(u);if(Z.current!==u)return null;if(!y||y.status!=="active"||!y.data){if(Y.current&&a_(Q.current))q();return Y.current=!1,K(),N.current=null,U(null),L({text:"",totalLines:0}),H(""),O({text:"",totalLines:0}),J(null),G.current=null,y??null}Y.current=!0;let c=y.data;N.current=c;let l=_6(c);if(l)W(l);D({running:!0,clearSilence:!0}),E(),U(c);let T=k5(y.thought);if(T)O((z)=>{if(A3(z,T.text))return z;return V.current=T.text,T});let I=k5(y.draft);if(I)L((z)=>{if(A3(z,I.text))return z;return X.current=I.text,I});return y}catch(y){return console.warn("Failed to fetch agent status:",y),null}}async function eY(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Z,silentRecoveryRef:Y,silenceRefreshMs:Q,viewStateRef:q,refreshTimeline:K,refreshQueueState:N,refreshAgentStatus:G,now:V=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let X=Z.current||null,U=Y.current,L=V();if(U.inFlight)return null;if(U.turnId===X&&L-U.lastAttemptAt<Q)return null;U.inFlight=!0,U.lastAttemptAt=L,U.turnId=X;try{if(a_(q.current))await K();return await N(),await G()}finally{U.inFlight=!1}}function _Q(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Z,lastSilenceNoticeRef:Y,agentStatusRef:Q,silenceWarningMs:q,silenceFinalizeMs:K,silenceRefreshMs:N,isCompactionStatus:G,setAgentStatus:V,reconcileSilentTurn:X,now:U=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let L=Z.current;if(!L)return;let H=U(),O=H-L,J=G(Q.current);if(O>=K){if(!J)V({type:"waiting",title:"Re-syncing after a quiet period…"});X();return}if(O>=q&&H-Y.current>=N){if(!J){let W=Math.floor(O/1000);V({type:"waiting",title:`Waiting for model… No events for ${W}s`})}Y.current=H,X()}}function $Q(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:Z,currentTurnIdRef:Y,thoughtExpandedRef:Q,draftExpandedRef:q,draftBufferRef:K,thoughtBufferRef:N,pendingRequestRef:G,lastAgentResponseRef:V,stalledPostIdRef:X,scrollToBottomRef:U,setCurrentTurnId:L,setAgentDraft:H,setAgentPlan:O,setAgentThought:J,setPendingRequest:W,setAgentStatus:D,setPosts:E,dedupePosts:u,now:y=()=>Date.now(),nowIso:c=()=>new Date().toISOString()}=_;if(!$.current)return;$.current=!1,j.current=0,Z.current=null,Y.current=null,L(null),Q.current=!1,q.current=!1;let l=(K.current||"").trim();if(K.current="",N.current="",H({text:"",totalLines:0}),O(""),J({text:"",totalLines:0}),W(null),G.current=null,V.current=null,!l){D({type:"error",title:"Response stalled - No content received"});return}let I=`${l}${`

⚠️ Response may be incomplete - the model stopped responding`}`,z=y(),k=c(),f={id:z,timestamp:k,data:{type:"agent_response",content:I,agent_id:"default",is_local_stall:!0}};X.current=z,E((i)=>i?u([...i,f]):[f]),U.current?.(),D(null)}var fX=XZ(),jQ=A6,vX=k6,bX=M6,gX=y6,mX=S6,k3=x6,I3=o1(p1,"getAgentContext",null),hX=o1(p1,"getAutoresearchStatus",null),pX=o1(p1,"stopAutoresearch",{status:"ok"}),cX=o1(p1,"dismissAutoresearch",{status:"ok"}),ZQ=o1(p1,"getAgentModels",{current:null,models:[]}),YQ=o1(p1,"getActiveChatAgents",{chats:[]}),M3=o1(p1,"getChatBranches",{chats:[]}),lX=o1(p1,"renameChatBranch",null),nX=o1(p1,"pruneChatBranch",null),dX=o1(p1,"restoreChatBranch",null),QQ=o1(p1,"getAgentQueueState",{count:0}),qQ=o1(p1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),KQ=o1(p1,"removeAgentQueueItem",{removed:!1}),iX=o1(p1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});h0.register(h6);h0.register(D$);h0.register(O$);h0.register(A$);h0.register(E$);h0.register(k$);h0.register(M$);h0.register(x$);h0.register(C$);h0.register(S$);h0.register(w$);h0.register(U$);p6();h0.register(n6);h0.register(d6);function rX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:Q,panePopoutLabel:q,branchLoaderMode:K,branchLoaderSourceChatJid:N}=S0(()=>LZ(_),[_]),[G,V]=g("disconnected"),[X,U]=g(()=>V4()),[L,H]=g(null),[O,J]=g(null),[W,D]=g(!1),[E,u]=g("current"),[y,c]=g([]),[l,T]=g([]),[I,z]=g(null),{agentStatus:k,setAgentStatus:f,agentDraft:i,setAgentDraft:b,agentPlan:o,setAgentPlan:r,agentThought:t,setAgentThought:Y0,pendingRequest:$0,setPendingRequest:q0,currentTurnId:W0,setCurrentTurnId:L0,steerQueuedTurnId:w0,setSteerQueuedTurnId:E0,lastAgentEventRef:z0,lastSilenceNoticeRef:v0,isAgentRunningRef:A0,draftBufferRef:R0,thoughtBufferRef:g0,pendingRequestRef:O0,stalledPostIdRef:p0,currentTurnIdRef:K0,steerQueuedTurnIdRef:I0,thoughtExpandedRef:d0,draftExpandedRef:o0}=$9(),[y1,Z1]=g({}),[n0,X1]=g(null),[j1,s0]=g(null),[V0,u0]=g(!1),[t0,s]=g(null),[Q0,p]=g([]),[d,F0]=g([]),[k0,M0]=g(null),[H0,T0]=g(()=>new Map),[b0,B0]=g(()=>new Set),[y0,J0]=g([]),[j0,P]=g(!1),[a,X0]=g(()=>UZ()),[D0,c0]=g(null),e0=x(new Set),Y1=S0(()=>Q0.find((h)=>h?.chat_jid===j)||null,[Q0,j]),O1=S0(()=>d.find((h)=>h?.chat_jid===j)||Y1||null,[Y1,d,j]),b1=O1?.root_chat_jid||Y1?.root_chat_jid||j,w_=VZ(E),[s1,R1]=g(()=>({status:K?"running":"idle",message:K?"Preparing a new chat branch…":""})),c1=y0.length,g1=x(new Set),a0=x([]),l1=x(new Set),t_=x(0),a1=x({inFlight:!1,lastAttemptAt:0,turnId:null});g1.current=new Set(y0.map((h)=>h.row_id)),a0.current=y0;let{notificationsEnabled:e_,notificationPermission:c_,toggleNotifications:D1,notify:n1}=e7(),[A1,V1]=g(()=>new Set),[U1,V_]=g(()=>F5("workspaceOpen",!0)),U_=x(null),{editorOpen:M1,tabStripTabs:d1,tabStripActiveId:Q1,previewTabs:I1,tabPaneOverrides:t1,openEditor:m1,closeEditor:_4,handleTabClose:H_,handleTabActivate:$4,handleTabCloseOthers:J_,handleTabCloseAll:F4,handleTabTogglePin:O_,handleTabTogglePreview:R_,handleTabEditSource:u4,revealInExplorer:f4}=Z9({onTabClosed:(h)=>U_.current?.(h)}),_1=x(null),E1=x(null),H4=x(null),e1=x(null),D_=h0.getDockPanes().length>0,[h1,F1]=g(!1),S1=C(()=>F1((h)=>!h),[]),q1=C(()=>{m1(X5,{label:"Terminal"})},[m1]),__=C(()=>{m1(B4,{label:"VNC"})},[m1]),$_=S0(()=>ej(d1,Q1),[Q1,d1]),j_=S0(()=>_Z(t1,Q1),[t1,Q1]),l_=S0(()=>$Z(q,$_,Q),[$_,q,Q]),u1=S0(()=>jZ(d1,I1,Q1),[I1,Q1,d1]),w1=S0(()=>ZZ(Q,B4),[Q]),Z_=S0(()=>YZ(Q,X5,u1,w1),[w1,u1,Q]),u_=QZ(Y,Z,M1,D_,h1),[L1,A_]=g(!1),K1=x(!1),f_=C(()=>{if(!M1||Z)return;if(K1.current=h1,h1)F1(!1);A_(!0)},[M1,Z,h1]),E_=C(()=>{if(!L1)return;if(A_(!1),K1.current)F1(!0),K1.current=!1},[L1]),v4=C(()=>{if(L1)E_();else f_()},[L1,f_,E_]);v(()=>{if(L1&&!M1)E_()},[L1,M1,E_]),v(()=>{if(!Y||!Q)return;if(r0.getActiveId()===Q)return;m1(Q,q?{label:q}:void 0)},[m1,q,Y,Q]),v(()=>{let h=_1.current;if(!h)return;if(E1.current)E1.current.dispose(),E1.current=null;let U0=Q1;if(!U0)return;let f0={path:U0,mode:"edit"},B1=(j_?h0.get(j_):null)||h0.resolve(f0)||h0.get("editor");if(!B1){h.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let l0=B1.mount(h,f0);E1.current=l0,l0.onDirtyChange?.((C1)=>{r0.setDirty(U0,C1)}),l0.onSaveRequest?.(()=>{}),l0.onClose?.(()=>{_4()});let G_=r0.getViewState(U0);if(G_&&typeof l0.restoreViewState==="function")requestAnimationFrame(()=>l0.restoreViewState(G_));if(typeof l0.onViewStateChange==="function")l0.onViewStateChange((C1)=>{r0.saveViewState(U0,C1)});return requestAnimationFrame(()=>l0.focus()),()=>{if(E1.current===l0)l0.dispose(),E1.current=null}},[Q1,j_,_4]);let b4=C(async(h)=>{let U0=typeof Q1==="string"?Q1.trim():"",f0=E1.current;if(!U0||!f0?.setContent)return;if(typeof f0.isDirty==="function"&&f0.isDirty())return;if(!(Array.isArray(h)&&h.length>0?h.some((l0)=>{let G_=Array.isArray(l0?.changed_paths)?l0.changed_paths.map((v1)=>typeof v1==="string"?v1.trim():"").filter(Boolean):[];if(G_.length>0)return G_.some((v1)=>v1==="."||v1===U0);let C1=typeof l0?.path==="string"?l0.path.trim():"";return!C1||C1==="."||C1===U0}):!0))return;try{let l0=await y5(U0,1e6,"edit"),G_=typeof l0?.text==="string"?l0.text:"",C1=typeof l0?.mtime==="string"&&l0.mtime.trim()?l0.mtime.trim():new Date().toISOString();f0.setContent(G_,C1)}catch(l0){console.warn("[workspace_update] Failed to refresh active pane:",l0)}},[Q1]);v(()=>{let h=H4.current;if(e1.current)e1.current.dispose(),e1.current=null;if(!h||!D_||!h1)return;let U0=h0.getDockPanes()[0];if(!U0){h.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let f0=U0.mount(h,{mode:"view"});return e1.current=f0,requestAnimationFrame(()=>f0.focus?.()),()=>{if(e1.current===f0)f0.dispose(),e1.current=null}},[D_,h1]);let[v_,n_]=g({name:"You",avatar_url:null,avatar_background:null}),g4=x(null),j4=x(!1),a4=x(!1),Z4=x(!1),d_=x(null),i1=x(j),J4=x(new Map),O4=x(j),I5=x(0),H1=x(0),D4=x({}),t4=x({name:null,avatar_url:null}),Y_=x({currentHashtag:null,searchQuery:null,searchOpen:!1}),Q_=x(null),Y4=x(null),m4=x(0),h4=x(0),e4=x(0),Q4=x(null),k_=x(null),M5=x(null),A4=x(null),p4=x(0),I_=x({title:null,avatarBase:null}),A=x(null),M=x(!1),[R,S]=g(!1),n=x(0),[Z0,N0]=g(!1),[G0,e]=g(""),C0=S0(()=>h8(G0,O1?.agent_name||""),[O1?.agent_name,G0]),x1=x(null);N9(30000),v(()=>{if(!Z0)return;requestAnimationFrame(()=>{if(Z0)x1.current?.focus(),x1.current?.select?.()})},[Z0]),v(()=>{return H7()},[]),v(()=>{return rj(U)},[]),v(()=>{$1("workspaceOpen",String(U1))},[U1]),v(()=>{return ij()},[]),v(()=>{if(!a){$1(BTW_SESSION_KEY,"");return}$1(BTW_SESSION_KEY,JSON.stringify({question:a.question||"",answer:a.answer||"",thinking:a.thinking||"",error:a.error||null,status:a.status||"success"}))},[a]),v(()=>{D4.current=y1||{}},[y1]),v(()=>{i1.current=j},[j]),v(()=>{t4.current=v_||{name:"You",avatar_url:null,avatar_background:null}},[v_]);let M_=C((h,U0,f0=null)=>{if(typeof document>"u")return;let B1=(h||"").trim()||"PiClaw";if(I_.current.title!==B1){document.title=B1;let g_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(g_&&g_.getAttribute("content")!==B1)g_.setAttribute("content",B1);I_.current.title=B1}let l0=document.getElementById("dynamic-favicon");if(!l0)return;let G_=l0.getAttribute("data-default")||l0.getAttribute("href")||"/favicon.ico",C1=U0||G_,v1=U0?`${C1}|${f0||""}`:C1;if(I_.current.avatarBase!==v1){let g_=U0?`${C1}${C1.includes("?")?"&":"?"}v=${f0||Date.now()}`:C1;l0.setAttribute("href",g_),I_.current.avatarBase=v1}},[]),{addFileRef:q_,removeFileRef:t5,clearFileRefs:F,setFileRefsFromCompose:w,showIntentToast:m,openFileFromPill:_0,attachActiveEditorFile:x0,addMessageRef:W1,scrollToMessage:J1,removeMessageRef:f1,clearMessageRefs:q4,setMessageRefsFromCompose:c4,handleComposeSubmitError:_5}=nj({setIntentToast:z,intentToastTimerRef:A,editorOpen:M1,openEditor:m1,resolvePane:(h)=>h0.resolve(h),tabStripActiveId:Q1,setFileRefs:c,setMessageRefs:T,currentChatJid:j,getThread:E6,setPosts:x_});U_.current=t5;let K4=C((h={})=>{let U0=Date.now();if(z0.current=U0,h.running)A0.current=!0,P((f0)=>f0?f0:!0);if(h.clearSilence)v0.current=0},[P]),r1=C(()=>{if(A4.current)clearTimeout(A4.current),A4.current=null;p4.current=0},[]);v(()=>()=>{r1()},[r1]);let b_=C(()=>{r1(),f((h)=>{if(!h)return h;if(!(h.last_activity||h.lastActivity))return h;let{last_activity:U0,lastActivity:f0,...B1}=h;return B1})},[r1]),e5=C((h)=>{if(!h)return;r1();let U0=Date.now();p4.current=U0,f({type:h.type||"active",last_activity:!0}),A4.current=setTimeout(()=>{if(p4.current!==U0)return;f((f0)=>{if(!f0||!(f0.last_activity||f0.lastActivity))return f0;return null})},Q9)},[r1]),K_=C(()=>{A0.current=!1,P(!1),z0.current=null,v0.current=0,R0.current="",g0.current="",O0.current=null,k_.current=null,K0.current=null,I0.current=null,d_.current=null,a1.current={inFlight:!1,lastAttemptAt:0,turnId:null},r1(),L0(null),E0(null),d0.current=!1,o0.current=!1},[r1,L0,E0,P]),k1=C((h)=>{if(!V9({remainingQueueCount:h,currentTurnId:K0.current,isAgentTurnActive:j0}))return;I0.current=null,E0(null)},[j0,E0]),E4=C(()=>lZ({agentStatus:k,agentDraft:i,agentPlan:o,agentThought:t,pendingRequest:$0,currentTurnId:W0,steerQueuedTurnId:w0,isAgentTurnActive:j0,followupQueueItems:y0,activeModel:n0,activeThinkingLevel:j1,supportsThinking:V0,activeModelUsage:t0,contextUsage:k0,isAgentRunning:A0.current,wasAgentActive:Z4.current,draftBuffer:R0.current,thoughtBuffer:g0.current,lastAgentEvent:z0.current,lastSilenceNotice:v0.current,lastAgentResponse:k_.current,currentTurnIdRef:K0.current,steerQueuedTurnIdRef:I0.current,thoughtExpanded:d0.current,draftExpanded:o0.current,agentStatusRef:d_.current,silentRecovery:a1.current}),[n0,t0,j1,i,o,k,t,k0,W0,y0,j0,$0,w0,V0]),_8=C((h)=>{nZ({snapshot:h,clearLastActivityTimer:r1,refs:{isAgentRunningRef:A0,wasAgentActiveRef:Z4,lastAgentEventRef:z0,lastSilenceNoticeRef:v0,draftBufferRef:R0,thoughtBufferRef:g0,pendingRequestRef:O0,lastAgentResponseRef:k_,currentTurnIdRef:K0,steerQueuedTurnIdRef:I0,agentStatusRef:d_,silentRecoveryRef:a1,thoughtExpandedRef:d0,draftExpandedRef:o0},setters:{setIsAgentTurnActive:P,setAgentStatus:f,setAgentDraft:b,setAgentPlan:r,setAgentThought:Y0,setPendingRequest:q0,setCurrentTurnId:L0,setSteerQueuedTurnId:E0,setFollowupQueueItems:J0,setActiveModel:X1,setActiveThinkingLevel:s0,setSupportsThinking:u0,setActiveModelUsage:s,setContextUsage:M0}})},[r1,L0,J0,P,E0]),$5=C((h)=>{if(!h)return;if(K0.current===h)return;K0.current=h,a1.current={inFlight:!1,lastAttemptAt:0,turnId:h},L0(h),I0.current=null,E0(null),R0.current="",g0.current="",b({text:"",totalLines:0}),r(""),Y0({text:"",totalLines:0}),q0(null),O0.current=null,k_.current=null,d0.current=!1,o0.current=!1},[L0,E0]),$8=C((h)=>{if(typeof document<"u"){let g_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&g_)return}let U0=k_.current;if(!U0||!U0.post)return;if(h&&U0.turnId&&U0.turnId!==h)return;let f0=U0.post;if(f0.id&&Q4.current===f0.id)return;let B1=String(f0?.data?.content||"").trim();if(!B1)return;Q4.current=f0.id||Q4.current,k_.current=null;let l0=B1.replace(/\s+/g," ").slice(0,200),G_=D4.current||{},v1=(f0?.data?.agent_id?G_[f0.data.agent_id]:null)?.name||"Pi";n1(v1,l0)},[n1]),l4=C(async(h,U0)=>{await X9({panelKey:h,expanded:U0,currentTurnIdRef:K0,thoughtExpandedRef:d0,draftExpandedRef:o0,setAgentThoughtVisibility:mX,getAgentThought:gX,thoughtBufferRef:g0,draftBufferRef:R0,setAgentThought:Y0,setAgentDraft:b})},[]),N_=x(null),N4=C(()=>{let h=Q_.current;if(!h)return;if(!(Math.abs(h.scrollTop)>150))h.scrollTop=0},[]);N_.current=N4;let x3=C((h)=>{let U0=Q_.current;if(!U0||typeof h!=="function"){h?.();return}let{currentHashtag:f0,searchQuery:B1,searchOpen:l0}=Y_.current||{},G_=!((B1||l0)&&!f0),C1=G_?U0.scrollHeight-U0.scrollTop:U0.scrollTop;h(),requestAnimationFrame(()=>{let v1=Q_.current;if(!v1)return;if(G_){let g_=Math.max(v1.scrollHeight-C1,0);v1.scrollTop=g_}else{let g_=Math.max(v1.scrollHeight-v1.clientHeight,0),cQ=Math.min(C1,g_);v1.scrollTop=cQ}})},[]),j5=C((h)=>{let U0=Q_.current;if(!U0||typeof h!=="function"){h?.();return}let f0=U0.scrollTop;h(),requestAnimationFrame(()=>{let B1=Q_.current;if(!B1)return;let l0=Math.max(B1.scrollHeight-B1.clientHeight,0);B1.scrollTop=Math.min(f0,l0)})},[]),T3=C((h)=>O9(h,g1.current),[]),{posts:$6,setPosts:x_,hasMore:NQ,setHasMore:j6,hasMoreRef:C3,loadPosts:i_,refreshTimeline:T_,loadMore:GQ,loadMoreRef:P3}=_9({preserveTimelineScroll:x3,preserveTimelineScrollTop:j5,chatJid:j}),Z5=S0(()=>T3($6),[$6,y0,T3]),j8=C(()=>{let h=p0.current;if(!h)return;x_((U0)=>U0?U0.filter((f0)=>f0.id!==h):U0),p0.current=null},[x_]),{handleSplitterMouseDown:XQ,handleSplitterTouchStart:VQ,handleEditorSplitterMouseDown:UQ,handleEditorSplitterTouchStart:LQ,handleDockSplitterMouseDown:WQ,handleDockSplitterTouchStart:BQ}=j9({appShellRef:Y4,sidebarWidthRef:m4,editorWidthRef:h4,dockHeightRef:e4}),y3=C(()=>{$Q({isAgentRunningRef:A0,lastSilenceNoticeRef:v0,lastAgentEventRef:z0,currentTurnIdRef:K0,thoughtExpandedRef:d0,draftExpandedRef:o0,draftBufferRef:R0,thoughtBufferRef:g0,pendingRequestRef:O0,lastAgentResponseRef:k_,stalledPostIdRef:p0,scrollToBottomRef:N_,setCurrentTurnId:L0,setAgentDraft:b,setAgentPlan:r,setAgentThought:Y0,setPendingRequest:q0,setAgentStatus:f,setPosts:x_,dedupePosts:i5})},[L0]);v(()=>{Y_.current={currentHashtag:L,searchQuery:O,searchOpen:W}},[L,O,W]);let T1=C(()=>{c9({currentChatJid:j,queueRefreshGenRef:t_,activeChatJidRef:i1,dismissedQueueRowIdsRef:l1,getAgentQueueState:QQ,setFollowupQueueItems:J0,clearQueuedSteerStateIfStale:k1})},[k1,j]),L_=C(async()=>{await l9({currentChatJid:j,activeChatJidRef:i1,getAgentContext:I3,setContextUsage:M0})},[j]),k4=C(async()=>{await n9({currentChatJid:j,activeChatJidRef:i1,getAutoresearchStatus:hX,setExtensionStatusPanels:T0,setPendingExtensionPanelActions:B0})},[j]),r_=C(async()=>{return await tY({currentChatJid:j,getAgentStatus:k3,activeChatJidRef:i1,wasAgentActiveRef:Z4,viewStateRef:Y_,refreshTimeline:T_,clearAgentRunState:K_,agentStatusRef:d_,pendingRequestRef:O0,thoughtBufferRef:g0,draftBufferRef:R0,setAgentStatus:f,setAgentDraft:b,setAgentPlan:r,setAgentThought:Y0,setPendingRequest:q0,setActiveTurn:$5,noteAgentActivity:K4,clearLastActivityFlag:b_})},[K_,b_,j,K4,T_,$5]),S3=C(async()=>{return await eY({isAgentRunningRef:A0,pendingRequestRef:O0,currentTurnIdRef:K0,silentRecoveryRef:a1,silenceRefreshMs:f$,viewStateRef:Y_,refreshTimeline:T_,refreshQueueState:T1,refreshAgentStatus:r_})},[r_,T1,T_]);v(()=>{let h=Math.min(1000,Math.max(100,Math.floor(u$/2))),U0=setInterval(()=>{_Q({isAgentRunningRef:A0,pendingRequestRef:O0,lastAgentEventRef:z0,lastSilenceNoticeRef:v0,agentStatusRef:d_,silenceWarningMs:u$,silenceFinalizeMs:Y9,silenceRefreshMs:f$,isCompactionStatus:y4,setAgentStatus:f,reconcileSilentTurn:S3})},h);return()=>clearInterval(U0)},[S3]);let w3=C((h)=>{return WZ({serverVersion:h,currentAppAssetVersion:fX,staleUiVersionRef:g4,staleUiReloadScheduledRef:j4,tabStoreHasUnsaved:()=>r0.hasUnsaved(),isAgentRunningRef:A0,pendingRequestRef:O0,showIntentToast:m})},[A0,O0,m]),zQ=C((h)=>{BZ({status:h,setConnectionStatus:V,setAgentStatus:f,setAgentDraft:b,setAgentPlan:r,setAgentThought:Y0,setPendingRequest:q0,pendingRequestRef:O0,clearAgentRunState:K_,hasConnectedOnceRef:a4,viewStateRef:Y_,refreshTimeline:T_,refreshAgentStatus:r_,refreshQueueState:T1,refreshContextUsage:L_})},[K_,T_,r_,T1,L_]),FQ=C(async(h)=>{await mj({hashtag:h,setCurrentHashtag:H,setPosts:x_,loadPosts:i_})},[i_]),HQ=C(async()=>{await hj({setCurrentHashtag:H,setSearchQuery:J,setPosts:x_,loadPosts:i_})},[i_]),JQ=C(async(h,U0=E)=>{await pj({query:h,scope:U0,currentChatJid:j,currentRootChatJid:b1,searchPosts:jQ,setSearchScope:u,setSearchQuery:J,setCurrentHashtag:H,setPosts:x_,setHasMore:j6})},[j,b1,E]),OQ=C(()=>{D(!0),J(null),H(null),u("current"),x_([])},[]),DQ=C(()=>{D(!1),J(null),i_()},[i_]),sX=C(()=>{},[]),AQ=!L&&!O&&!W,EQ=C(async(h)=>{await cj({post:h,posts:Z5,currentChatJid:j,deletePost:vX,preserveTimelineScrollTop:j5,setPosts:x_,setRemovingPostIds:V1,hasMoreRef:C3,loadMoreRef:P3})},[j,Z5,j5]),{updateAgentProfile:R3,updateUserProfile:u3,applyModelState:Z6,refreshModelState:aX,refreshActiveChatAgents:C_,refreshCurrentChatBranches:P_,refreshModelAndQueueState:Z8}=s9({getAgents:bX,setAgents:Z1,setUserProfile:n_,applyBranding:M_,readStoredNumber:h5,sidebarWidthRef:m4,appShellRef:Y4,currentChatJid:j,currentRootChatJid:b1,getAgentModels:ZQ,getActiveChatAgents:YQ,getChatBranches:M3,activeChatJidRef:i1,setActiveChatAgents:p,setCurrentChatBranches:F0,setActiveModel:X1,setActiveThinkingLevel:s0,setSupportsThinking:u0,setActiveModelUsage:s,agentsRef:D4,refreshQueueState:T1,refreshContextUsage:L_,refreshAutoresearchStatus:k4}),f3=j0||k!==null,kQ=C((h)=>{wj({queuedItem:h,followupQueueItemsRef:a0,dismissedQueueRowIdsRef:l1,currentChatJid:j,refreshQueueState:T1,setFollowupQueueItems:J0,showIntentToast:m,steerAgentQueueItem:qQ,removeAgentQueueItem:KQ})},[j,T1,J0,m]),IQ=C((h)=>{Rj({queuedItem:h,followupQueueItemsRef:a0,dismissedQueueRowIdsRef:l1,currentChatJid:j,refreshQueueState:T1,setFollowupQueueItems:J0,showIntentToast:m,clearQueuedSteerStateIfStale:k1,steerAgentQueueItem:qQ,removeAgentQueueItem:KQ})},[k1,j,T1,J0,m]),v3=C((h)=>{S9({response:h,refreshActiveChatAgents:C_,refreshCurrentChatBranches:P_,refreshContextUsage:L_,refreshAutoresearchStatus:k4,refreshQueueState:T1})},[C_,k4,P_,L_,T1]),{handleExtensionPanelAction:MQ,closeBtwPanel:xQ,handleBtwIntercept:TQ,handleBtwRetry:CQ,handleBtwInject:PQ,handleOpenFloatingWidget:yQ,handleCloseFloatingWidget:SQ,handleFloatingWidgetEvent:wQ}=bj({currentChatJid:j,currentRootChatJid:b1,isComposeBoxAgentActive:f3,showIntentToast:m,setPendingExtensionPanelActions:B0,refreshAutoresearchStatus:k4,stopAutoresearch:pX,dismissAutoresearch:cX,streamSidePrompt:iX,btwAbortRef:M5,btwSession:a,setBtwSession:X0,sendAgentMessage:N5,handleMessageResponse:v3,dismissedLiveWidgetKeysRef:e0,setFloatingWidget:c0,getAgentStatus:k3,getAgentContext:I3,getAgentQueueState:QQ,getAgentModels:ZQ,getActiveChatAgents:YQ,getChatBranches:M3,getTimeline:n4,rawPosts:$6,activeChatAgents:Q0,currentChatBranches:d,contextUsage:k0,followupQueueItemsRef:a0,activeModel:n0,activeThinkingLevel:j1,supportsThinking:V0,isAgentTurnActive:j0});v(()=>{T0(new Map),B0(new Set)},[j]),v(()=>{let h=!1;return o9({currentHashtag:L,searchQuery:O,searchScope:E,currentChatJid:j,currentRootChatJid:b1,loadPosts:i_,searchPosts:jQ,setPosts:x_,setHasMore:j6,scrollToBottom:N4,isCancelled:()=>h}),()=>{h=!0}},[j,L,O,E,b1,i_,N4,j6,x_]),v(()=>{let h=O4.current||j;J4.current.set(h,E4())},[j,E4]),v(()=>{let h=O4.current||j;if(h===j)return;J4.current.set(h,E4()),O4.current=j,l1.current.clear(),_8(J4.current.get(j)||null),T1(),r_(),L_()},[j,r_,L_,T1,_8,E4]);let RQ=C(()=>{i9({viewStateRef:Y_,refreshTimeline:T_,refreshModelAndQueueState:Z8})},[Z8,T_]),b3=C((h,U0="streaming")=>{let f0=new Date().toISOString();c0((B1)=>Jj(B1,h,{fallbackStatus:U0,currentChatJid:j,dismissedSessionKeys:e0.current,updatedAt:f0}))},[j]),Y6=C((h,U0)=>{aY(h,U0,{currentChatJid:j,updateAgentProfile:R3,updateUserProfile:u3,currentTurnIdRef:K0,activeChatJidRef:i1,pendingRequestRef:O0,draftBufferRef:R0,thoughtBufferRef:g0,steerQueuedTurnIdRef:I0,thoughtExpandedRef:d0,draftExpandedRef:o0,draftThrottleRef:I5,thoughtThrottleRef:H1,viewStateRef:Y_,followupQueueItemsRef:a0,dismissedQueueRowIdsRef:l1,scrollToBottomRef:N_,hasMoreRef:C3,loadMoreRef:P3,lastAgentResponseRef:k_,wasAgentActiveRef:Z4,setActiveTurn:$5,applyLiveGeneratedWidgetUpdate:b3,setFloatingWidget:c0,clearLastActivityFlag:b_,handleUiVersionDrift:w3,setAgentStatus:f,setAgentDraft:b,setAgentPlan:r,setAgentThought:Y0,setPendingRequest:q0,clearAgentRunState:K_,getAgentStatus:k3,noteAgentActivity:K4,showLastActivity:e5,refreshTimeline:T_,refreshModelAndQueueState:Z8,refreshActiveChatAgents:C_,refreshCurrentChatBranches:P_,notifyForFinalResponse:$8,setContextUsage:M0,refreshContextUsage:L_,refreshQueueState:T1,setFollowupQueueItems:J0,clearQueuedSteerStateIfStale:k1,setSteerQueuedTurnId:E0,applyModelState:Z6,getAgentContext:I3,setExtensionStatusPanels:T0,setPendingExtensionPanelActions:B0,refreshActiveEditorFromWorkspace:b4,showIntentToast:m,removeStalledPost:j8,setPosts:x_,preserveTimelineScrollTop:j5})},[b3,Z6,K_,b_,k1,j,w3,K4,$8,C_,b4,L_,P_,Z8,T1,T_,j8,$5,J0,m,e5,R3,u3]);v(()=>{if(typeof window>"u")return;let h=window.__PICLAW_TEST_API||{};return h.emit=Y6,h.reset=()=>{j8(),K_(),f(null),b({text:"",totalLines:0}),r(""),Y0({text:"",totalLines:0}),q0(null)},h.finalize=()=>y3(),window.__PICLAW_TEST_API=h,()=>{if(window.__PICLAW_TEST_API===h)window.__PICLAW_TEST_API=void 0}},[K_,y3,Y6,j8]),t7({handleSseEvent:Y6,handleConnectionStatusChange:zQ,loadPosts:i_,onWake:RQ,chatJid:j}),v(()=>{if(!Z5||Z5.length===0)return;let h=location.hash;if(!h||!h.startsWith("#msg-"))return;let U0=h.slice(5);J1(U0),history.replaceState(null,"",location.pathname+location.search)},[Z5,J1]);let Q6=k!==null;v(()=>{if(G!=="connected")return;let U0=setInterval(()=>{zZ({viewStateRef:Y_,isAgentActive:Q6,refreshTimeline:T_,refreshQueueState:T1,refreshAgentStatus:r_,refreshContextUsage:L_,refreshAutoresearchStatus:k4})},Q6?15000:60000);return()=>clearInterval(U0)},[G,Q6,r_,k4,L_,T1,T_]),v(()=>{return oj(()=>{r_(),L_(),T1(),k4()})},[r_,k4,L_,T1]);let uQ=C(()=>{PZ(V_)},[]),fQ=C((h)=>{yZ({nextChatJid:h,currentChatJid:j,chatOnlyMode:Z,navigate:$})},[Z,j,$]),q6=C(()=>{SZ({currentBranchRecord:O1,renameBranchInFlight:M.current,renameBranchLockUntil:n.current,getFormLock:s$,setRenameBranchNameDraft:e,setIsRenameBranchFormOpen:N0})},[O1]),K6=C(()=>{wZ({setIsRenameBranchFormOpen:N0,setRenameBranchNameDraft:e})},[]),vQ=C(async(h)=>{await RZ({currentBranchRecord:O1,nextName:h,openRenameForm:q6,renameBranchInFlightRef:M,renameBranchLockUntilRef:n,getFormLock:s$,setIsRenamingBranch:S,renameChatBranch:lX,refreshActiveChatAgents:C_,refreshCurrentChatBranches:P_,showIntentToast:m,closeRenameForm:K6})},[K6,O1,C_,P_,q6,S,m]),bQ=C(async(h=null)=>{await uZ({targetChatJid:h,currentChatJid:j,currentBranchRecord:O1,currentChatBranches:d,activeChatAgents:Q0,pruneChatBranch:nX,refreshActiveChatAgents:C_,refreshCurrentChatBranches:P_,showIntentToast:m,chatOnlyMode:Z,navigate:$})},[Q0,Z,O1,d,j,$,C_,P_,m]),gQ=C(async(h)=>{await fZ({targetChatJid:h,restoreChatBranch:dX,currentChatBranches:d,refreshActiveChatAgents:C_,refreshCurrentChatBranches:P_,showIntentToast:m,chatOnlyMode:Z,navigate:$})},[Z,d,$,C_,P_,m]);v(()=>vZ({branchLoaderMode:K,branchLoaderSourceChatJid:N,forkChatBranch:T5,setBranchLoaderState:R1,navigate:$}),[K,N,$]);let mQ=C(async()=>{await bZ({currentChatJid:j,chatOnlyMode:Z,forkChatBranch:T5,refreshActiveChatAgents:C_,refreshCurrentChatBranches:P_,showIntentToast:m,navigate:$})},[Z,j,$,C_,P_,m]),N6=C(async(h,U0)=>{await gZ({isWebAppMode:X,path:h,label:U0,showIntentToast:m,currentChatJid:j,tabStripActiveId:Q1,editorInstanceRef:E1,dockInstanceRef:e1,terminalTabPath:X5,dockVisible:h1,resolveTab:(f0)=>r0.get(f0),closeTab:H_,setDockVisible:F1})},[j,h1,H_,X,m,Q1]);v(()=>mZ({openEditor:m1,popOutPane:(h,U0)=>{N6(h,U0)}}),[N6,m1]);let hQ=C(async()=>{await hZ({isWebAppMode:X,currentChatJid:j,currentRootChatJid:b1,forkChatBranch:T5,getActiveChatAgents:I6,getChatBranches:M3,setActiveChatAgents:p,setCurrentChatBranches:F0,showIntentToast:m})},[j,b1,X,m]);v(()=>{pZ({editorOpen:M1,shellElement:Y4.current,editorWidthRef:h4,dockHeightRef:e4,sidebarWidthRef:m4,readStoredNumber:h5})},[M1]),v(()=>{if(!D_||Z)return;return aj(S1)},[S1,D_,Z]),v(()=>{if(Z)return;return tj({toggleZenMode:v4,exitZenMode:E_,zenMode:L1,isZenModeActive:()=>L1})},[v4,E_,L1,Z]);let pQ=Boolean(w0&&w0===(k?.turn_id||W0)),g3=iZ({branchLoaderMode:K,panePopoutMode:Y});if(g3==="branch-loader")return rZ(s1);if(g3==="pane-popout")return oZ({appShellRef:Y4,editorOpen:M1,hidePanePopoutControls:Z_,panePopoutHasMenuActions:u1,panePopoutTitle:l_,tabStripTabs:d1,tabStripActiveId:Q1,handleTabActivate:$4,previewTabs:I1,handleTabTogglePreview:R_,editorContainerRef:_1,getPaneContent:()=>E1.current?.getContent?.(),panePopoutPath:Q});return mY({appShellRef:Y4,workspaceOpen:U1,editorOpen:M1,chatOnlyMode:Z,zenMode:L1,isRenameBranchFormOpen:Z0,closeRenameCurrentBranchForm:K6,handleRenameCurrentBranch:vQ,renameBranchNameDraft:G0,renameBranchNameInputRef:x1,setRenameBranchNameDraft:e,renameBranchDraftState:C0,isRenamingBranch:R,addFileRef:q_,openEditor:m1,openTerminalTab:q1,openVncTab:__,hasDockPanes:D_,toggleDock:S1,dockVisible:h1,handleSplitterMouseDown:XQ,handleSplitterTouchStart:VQ,showEditorPaneContainer:u_,tabStripTabs:d1,tabStripActiveId:Q1,handleTabActivate:$4,handleTabClose:H_,handleTabCloseOthers:J_,handleTabCloseAll:F4,handleTabTogglePin:O_,handleTabTogglePreview:R_,handleTabEditSource:u4,previewTabs:I1,tabPaneOverrides:t1,toggleZenMode:v4,handlePopOutPane:N6,isWebAppMode:X,editorContainerRef:_1,editorInstanceRef:E1,handleDockSplitterMouseDown:WQ,handleDockSplitterTouchStart:BQ,TERMINAL_TAB_PATH:X5,dockContainerRef:H4,handleEditorSplitterMouseDown:UQ,handleEditorSplitterTouchStart:LQ,searchQuery:O,isIOSDevice:K9,currentBranchRecord:O1,currentChatJid:j,currentChatBranches:d,handleBranchPickerChange:fQ,formatBranchPickerLabel:p8,openRenameCurrentBranchForm:q6,handlePruneCurrentBranch:bQ,currentHashtag:L,handleBackToTimeline:HQ,activeSearchScopeLabel:w_,posts:Z5,isMainTimelineView:AQ,hasMore:NQ,loadMore:GQ,timelineRef:Q_,handleHashtagClick:FQ,addMessageRef:W1,scrollToMessage:J1,openFileFromPill:_0,handleDeletePost:EQ,handleOpenFloatingWidget:yQ,agents:y1,userProfile:v_,removingPostIds:A1,agentStatus:k,isCompactionStatus:y4,agentDraft:i,agentPlan:o,agentThought:t,pendingRequest:$0,intentToast:I,currentTurnId:W0,steerQueued:pQ,handlePanelToggle:l4,btwSession:a,closeBtwPanel:xQ,handleBtwRetry:CQ,handleBtwInject:PQ,floatingWidget:D0,handleCloseFloatingWidget:SQ,handleFloatingWidgetEvent:wQ,extensionStatusPanels:H0,pendingExtensionPanelActions:b0,handleExtensionPanelAction:MQ,searchOpen:W,followupQueueItems:y0,handleInjectQueuedFollowup:kQ,handleRemoveQueuedFollowup:IQ,viewStateRef:Y_,loadPosts:i_,scrollToBottom:N4,searchScope:E,handleSearch:JQ,setSearchScope:u,enterSearchMode:OQ,exitSearchMode:DQ,fileRefs:y,removeFileRef:t5,clearFileRefs:F,setFileRefsFromCompose:w,messageRefs:l,removeMessageRef:f1,clearMessageRefs:q4,setMessageRefsFromCompose:c4,handleCreateSessionFromCompose:mQ,handleRestoreBranch:gQ,attachActiveEditorFile:x0,followupQueueCount:c1,handleBtwIntercept:TQ,handleMessageResponse:v3,handleComposeSubmitError:_5,handlePopOutChat:hQ,isComposeBoxAgentActive:f3,activeChatAgents:Q0,connectionStatus:G,activeModel:n0,activeModelUsage:t0,activeThinkingLevel:j1,supportsThinking:V0,contextUsage:k0,notificationsEnabled:e_,notificationPermission:c_,handleToggleNotifications:D1,setActiveModel:X1,applyModelState:Z6,setPendingRequest:q0,pendingRequestRef:O0,toggleWorkspace:uQ})}function oX(){let[_,$]=g(()=>typeof window>"u"?"http://localhost/":window.location.href);v(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let j=C((Y,Q={})=>{if(typeof window>"u")return;let{replace:q=!1}=Q||{},K=new URL(String(Y||""),window.location.href).toString();if(q)window.history.replaceState(null,"",K);else window.history.pushState(null,"",K);$(window.location.href)},[]),Z=S0(()=>new URL(_).searchParams,[_]);return B`<${rX} locationParams=${Z} navigate=${j} />`}x4(B`<${oX} />`,document.getElementById("app"));

//# debugId=9D41512A5CC62FAB64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
