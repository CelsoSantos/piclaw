var lF=Object.defineProperty;var pF=(_)=>_;function rF(_,$){this[_]=pF.bind(null,$)}var _1=(_,$)=>{for(var j in $)lF(_,j,{get:$[j],enumerable:!0,configurable:!0,set:rF.bind($,j)})};var O_=(_,$)=>()=>(_&&($=_(_=0)),$);var RG={};_1(RG,{useState:()=>C,useRef:()=>u,useReducer:()=>CG,useMemo:()=>Y0,useLayoutEffect:()=>G5,useImperativeHandle:()=>_U,useErrorBoundary:()=>GU,useEffect:()=>g,useDebugValue:()=>jU,useContext:()=>$U,useCallback:()=>R,render:()=>B$,html:()=>N,h:()=>E3,createContext:()=>eF,Component:()=>n5});function K$(_,$){for(var j in $)_[j]=$[j];return _}function H3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function E3(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?G2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return t6(_,Y,G,Z,null)}function t6(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++WG:Z,__i:-1,__u:0};return Z==null&&w_.vnode!=null&&w_.vnode(X),X}function X2(_){return _.children}function n5(_,$){this.props=_,this.context=$}function _5(_,$){if($==null)return _.__?_5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?_5(_):null}function oF(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=K$({},$);X.__v=$.__v+1,w_.vnode&&w_.vnode(X),W3(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?_5($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,TG(G,X,Z),$.__e=$.__=null,X.__e!=j&&kG(X)}}function kG(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),kG(_)}function N3(_){(!_.__d&&(_.__d=!0)&&v$.push(_)&&!j2.__r++||VG!=w_.debounceRendering)&&((VG=w_.debounceRendering)||OG)(j2)}function j2(){try{for(var _,$=1;v$.length;)v$.length>$&&v$.sort(zG),_=v$.shift(),$=v$.length,oF(_)}finally{v$.length=j2.__r=0}}function MG(_,$,j,G,Z,X,Y,V,q,Q,L){var K,F,B,U,E,D,H,k=G&&G.__k||$2,z=$.length;for(q=iF(j,$,k,q,z),K=0;K<z;K++)(B=j.__k[K])!=null&&(F=B.__i!=-1&&k[B.__i]||_2,B.__i=K,D=W3(_,B,F,Z,X,Y,V,q,Q,L),U=B.__e,B.ref&&F.ref!=B.ref&&(F.ref&&O3(F.ref,null,B),L.push(B.ref,B.__c||U,B)),E==null&&U!=null&&(E=U),(H=!!(4&B.__u))||F.__k===B.__k?(q=yG(B,q,_,H),H&&F.__e&&(F.__e=null)):typeof B.type=="function"&&D!==void 0?q=D:U&&(q=U.nextSibling),B.__u&=-7);return j.__e=E,q}function iF(_,$,j,G,Z){var X,Y,V,q,Q,L=j.length,K=L,F=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=t6(null,Y,null,null,null):Z2(Y)?Y=_.__k[X]=t6(X2,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=t6(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,q=X+F,Y.__=_,Y.__b=_.__b+1,V=null,(Q=Y.__i=sF(Y,j,q,K))!=-1&&(K--,(V=j[Q])&&(V.__u|=2)),V==null||V.__v==null?(Q==-1&&(Z>L?F--:Z<L&&F++),typeof Y.type!="function"&&(Y.__u|=4)):Q!=q&&(Q==q-1?F--:Q==q+1?F++:(Q>q?F--:F++,Y.__u|=4))):_.__k[X]=null;if(K)for(X=0;X<L;X++)(V=j[X])!=null&&(2&V.__u)==0&&(V.__e==G&&(G=_5(V)),xG(V,V));return G}function yG(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=yG(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=_5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function sF(_,$,j,G){var Z,X,Y,V=_.key,q=_.type,Q=$[j],L=Q!=null&&(2&Q.__u)==0;if(Q===null&&V==null||L&&V==Q.key&&q==Q.type)return j;if(G>(L?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((Q=$[Y=Z>=0?Z--:X++])!=null&&(2&Q.__u)==0&&V==Q.key&&q==Q.type)return Y}return-1}function qG(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||dF.test($)?j:j+"px"}function s6(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||qG(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||qG(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(JG,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[r5]=G[r5]:(j[r5]=D3,_.addEventListener($,X?B3:K3,X)):_.removeEventListener($,X?B3:K3,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(V){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function QG(_){return function($){if(this.l){var j=this.l[$.type+_];if($[a6]==null)$[a6]=D3++;else if($[a6]<j[r5])return;return j(w_.event?w_.event($):$)}}}function W3(_,$,j,G,Z,X,Y,V,q,Q){var L,K,F,B,U,E,D,H,k,z,O,I,x,A,M,W=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),X=[V=$.__e=j.__e]),(L=w_.__b)&&L($);_:if(typeof W=="function")try{if(H=$.props,k=W.prototype&&W.prototype.render,z=(L=W.contextType)&&G[L.__c],O=L?z?z.props.value:L.__:G,j.__c?D=(K=$.__c=j.__c).__=K.__E:(k?$.__c=K=new W(H,O):($.__c=K=new n5(H,O),K.constructor=W,K.render=tF),z&&z.sub(K),K.state||(K.state={}),K.__n=G,F=K.__d=!0,K.__h=[],K._sb=[]),k&&K.__s==null&&(K.__s=K.state),k&&W.getDerivedStateFromProps!=null&&(K.__s==K.state&&(K.__s=K$({},K.__s)),K$(K.__s,W.getDerivedStateFromProps(H,K.__s))),B=K.props,U=K.state,K.__v=$,F)k&&W.getDerivedStateFromProps==null&&K.componentWillMount!=null&&K.componentWillMount(),k&&K.componentDidMount!=null&&K.__h.push(K.componentDidMount);else{if(k&&W.getDerivedStateFromProps==null&&H!==B&&K.componentWillReceiveProps!=null&&K.componentWillReceiveProps(H,O),$.__v==j.__v||!K.__e&&K.shouldComponentUpdate!=null&&K.shouldComponentUpdate(H,K.__s,O)===!1){$.__v!=j.__v&&(K.props=H,K.state=K.__s,K.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(y){y&&(y.__=$)}),$2.push.apply(K.__h,K._sb),K._sb=[],K.__h.length&&Y.push(K);break _}K.componentWillUpdate!=null&&K.componentWillUpdate(H,K.__s,O),k&&K.componentDidUpdate!=null&&K.__h.push(function(){K.componentDidUpdate(B,U,E)})}if(K.context=O,K.props=H,K.__P=_,K.__e=!1,I=w_.__r,x=0,k)K.state=K.__s,K.__d=!1,I&&I($),L=K.render(K.props,K.state,K.context),$2.push.apply(K.__h,K._sb),K._sb=[];else do K.__d=!1,I&&I($),L=K.render(K.props,K.state,K.context),K.state=K.__s;while(K.__d&&++x<25);K.state=K.__s,K.getChildContext!=null&&(G=K$(K$({},G),K.getChildContext())),k&&!F&&K.getSnapshotBeforeUpdate!=null&&(E=K.getSnapshotBeforeUpdate(B,U)),A=L!=null&&L.type===X2&&L.key==null?wG(L.props.children):L,V=MG(_,Z2(A)?A:[A],$,j,G,Z,X,Y,V,q,Q),K.base=$.__e,$.__u&=-161,K.__h.length&&Y.push(K),D&&(K.__E=K.__=null)}catch(y){if($.__v=null,q||X!=null)if(y.then){for($.__u|=q?160:128;V&&V.nodeType==8&&V.nextSibling;)V=V.nextSibling;X[X.indexOf(V)]=null,$.__e=V}else{for(M=X.length;M--;)H3(X[M]);F3($)}else $.__e=j.__e,$.__k=j.__k,y.then||F3($);w_.__e(y,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):V=$.__e=aF(j.__e,$,j,G,Z,X,Y,q,Q);return(L=w_.diffed)&&L($),128&$.__u?void 0:V}function F3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(F3))}function TG(_,$,j){for(var G=0;G<j.length;G++)O3(j[G],j[++G],j[++G]);w_.__c&&w_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){w_.__e(X,Z.__v)}})}function wG(_){return typeof _!="object"||_==null||_.__b>0?_:Z2(_)?_.map(wG):K$({},_)}function aF(_,$,j,G,Z,X,Y,V,q){var Q,L,K,F,B,U,E,D=j.props||_2,H=$.props,k=$.type;if(k=="svg"?Z="http://www.w3.org/2000/svg":k=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(Q=0;Q<X.length;Q++)if((B=X[Q])&&"setAttribute"in B==!!k&&(k?B.localName==k:B.nodeType==3)){_=B,X[Q]=null;break}}if(_==null){if(k==null)return document.createTextNode(H);_=document.createElementNS(Z,k,H.is&&H),V&&(w_.__m&&w_.__m($,X),V=!1),X=null}if(k==null)D===H||V&&_.data==H||(_.data=H);else{if(X=X&&G2.call(_.childNodes),!V&&X!=null)for(D={},Q=0;Q<_.attributes.length;Q++)D[(B=_.attributes[Q]).name]=B.value;for(Q in D)B=D[Q],Q=="dangerouslySetInnerHTML"?K=B:Q=="children"||(Q in H)||Q=="value"&&("defaultValue"in H)||Q=="checked"&&("defaultChecked"in H)||s6(_,Q,null,B,Z);for(Q in H)B=H[Q],Q=="children"?F=B:Q=="dangerouslySetInnerHTML"?L=B:Q=="value"?U=B:Q=="checked"?E=B:V&&typeof B!="function"||D[Q]===B||s6(_,Q,B,D[Q],Z);if(L)V||K&&(L.__html==K.__html||L.__html==_.innerHTML)||(_.innerHTML=L.__html),$.__k=[];else if(K&&(_.innerHTML=""),MG($.type=="template"?_.content:_,Z2(F)?F:[F],$,j,G,k=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&_5(j,0),V,q),X!=null)for(Q=X.length;Q--;)H3(X[Q]);V||(Q="value",k=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[Q]||k=="progress"&&!U||k=="option"&&U!=D[Q])&&s6(_,Q,U,D[Q],Z),Q="checked",E!=null&&E!=_[Q]&&s6(_,Q,E,D[Q],Z))}return _}function O3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){w_.__e(Z,j)}}function xG(_,$,j){var G,Z;if(w_.unmount&&w_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||O3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){w_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&xG(G[Z],$,j||typeof _.type!="function");j||H3(_.__e),_.__c=_.__=_.__e=void 0}function tF(_,$,j){return this.constructor(_,j)}function B$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),w_.__&&w_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],W3($,_=(!G&&j||$).__k=E3(X2,null,[_]),Z||_2,_2,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?G2.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),TG(X,_,Y)}function eF(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,N3(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+AG++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function j5(_,$){g_.__h&&g_.__h(T_,_,$5||$),$5=0;var j=T_.__H||(T_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return $5=1,CG(PG,_)}function CG(_,$,j){var G=j5(m$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):PG(void 0,$),function(V){var q=G.__N?G.__N[0]:G.__[0],Q=G.t(q,V);q!==Q&&(G.__N=[Q,G.__[1]],G.__c.setState({}))}],G.__c=T_,!T_.__f)){var Z=function(V,q,Q){if(!G.__c.__H)return!0;var L=G.__c.__H.__.filter(function(F){return F.__c});if(L.every(function(F){return!F.__N}))return!X||X.call(this,V,q,Q);var K=G.__c.props!==V;return L.some(function(F){if(F.__N){var B=F.__[0];F.__=F.__N,F.__N=void 0,B!==F.__[0]&&(K=!0)}}),X&&X.call(this,V,q,Q)||K};T_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=T_;T_.componentWillUpdate=function(V,q,Q){if(this.__e){var L=X;X=void 0,Z(V,q,Q),X=L}Y&&Y.call(this,V,q,Q)},T_.shouldComponentUpdate=Z}return G.__N||G.__}function g(_,$){var j=j5(m$++,3);!g_.__s&&z3(j.__H,$)&&(j.__=_,j.u=$,T_.__H.__h.push(j))}function G5(_,$){var j=j5(m$++,4);!g_.__s&&z3(j.__H,$)&&(j.__=_,j.u=$,T_.__h.push(j))}function u(_){return $5=5,Y0(function(){return{current:_}},[])}function _U(_,$,j){$5=6,G5(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function Y0(_,$){var j=j5(m$++,7);return z3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function R(_,$){return $5=8,Y0(function(){return _},$)}function $U(_){var $=T_.context[_.__c],j=j5(m$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(T_)),$.props.value):_.__}function jU(_,$){g_.useDebugValue&&g_.useDebugValue($?$(_):_)}function GU(_){var $=j5(m$++,10),j=C();return $.__=_,T_.componentDidCatch||(T_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function ZU(){for(var _;_=IG.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(e6),$.__h.some(U3),$.__h=[]}catch(j){$.__h=[],g_.__e(j,_.__v)}}}function XU(_){var $,j=function(){clearTimeout(G),HG&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);HG&&($=requestAnimationFrame(j))}function e6(_){var $=T_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),T_=$}function U3(_){var $=T_;_.__c=_.__(),T_=$}function z3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function PG(_,$){return typeof $=="function"?$(_):$}function YU(_){var $=EG.get(this);return $||($=new Map,EG.set(this,$)),($=fG(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",V="",q=[0],Q=function(F){X===1&&(F||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,F,Y):X===3&&(F||Y)?(q.push(3,F,Y),X=2):X===2&&Y==="..."&&F?q.push(4,F,0):X===2&&Y&&!F?q.push(5,0,!0,Y):X>=5&&((Y||!F&&X===5)&&(q.push(X,0,Y,Z),X=6),F&&(q.push(X,F,0,Z),X=6)),Y=""},L=0;L<j.length;L++){L&&(X===1&&Q(),Q(L));for(var K=0;K<j[L].length;K++)G=j[L][K],X===1?G==="<"?(Q(),q=[q],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:V?G===V?V="":Y+=G:G==='"'||G==="'"?V=G:G===">"?(Q(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[L][K+1]===">")?(Q(),X===3&&(q=q[0]),X=q,(q=q[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(Q(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,q=q[0])}return Q(),q}(_)),$),arguments,[])).length>1?$:$[0]}var G2,w_,WG,nF,v$,VG,OG,zG,Q3,a6,r5,JG,D3,K3,B3,AG,_2,$2,dF,Z2,m$,T_,L3,LG,$5=0,IG,g_,KG,BG,NG,FG,UG,DG,HG,fG=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],V=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=V:Y===4?G[1]=Object.assign(G[1]||{},V):Y===5?(G[1]=G[1]||{})[$[++X]]=V:Y===6?G[1][$[++X]]+=V+"":Y?(Z=_.apply(V,fG(_,V,j,["",null])),G.push(Z),V[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(V)}return G},EG,N;var k0=O_(()=>{_2={},$2=[],dF=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Z2=Array.isArray;G2=$2.slice,w_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(V){_=V}throw _}},WG=0,nF=function(_){return _!=null&&_.constructor===void 0},n5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=K$({},this.state),typeof _=="function"&&(_=_(K$({},j),this.props)),_&&K$(j,_),_!=null&&this.__v&&($&&this._sb.push($),N3(this))},n5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),N3(this))},n5.prototype.render=X2,v$=[],OG=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,zG=function(_,$){return _.__v.__b-$.__v.__b},j2.__r=0,Q3=Math.random().toString(8),a6="__d"+Q3,r5="__a"+Q3,JG=/(PointerCapture)$|Capture$/i,D3=0,K3=QG(!1),B3=QG(!0),AG=0;IG=[],g_=w_,KG=g_.__b,BG=g_.__r,NG=g_.diffed,FG=g_.__c,UG=g_.unmount,DG=g_.__;g_.__b=function(_){T_=null,KG&&KG(_)},g_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),DG&&DG(_,$)},g_.__r=function(_){BG&&BG(_),m$=0;var $=(T_=_.__c).__H;$&&(L3===T_?($.__h=[],T_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(e6),$.__h.some(U3),$.__h=[],m$=0)),L3=T_},g_.diffed=function(_){NG&&NG(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(IG.push($)!==1&&LG===g_.requestAnimationFrame||((LG=g_.requestAnimationFrame)||XU)(ZU)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),L3=T_=null},g_.__c=function(_,$){$.some(function(j){try{j.__h.some(e6),j.__h=j.__h.filter(function(G){return!G.__||U3(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],g_.__e(G,j.__v)}}),FG&&FG(_,$)},g_.unmount=function(_){UG&&UG(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{e6(G)}catch(Z){$=Z}}),j.__H=void 0,$&&g_.__e($,j.__v))};HG=typeof requestAnimationFrame=="function";EG=new Map;N=YU.bind(E3)});function W1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function q_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function U$(_,$=!1){let j=W1(_);if(j===null)return $;return j==="true"}function O4(_,$=null){let j=W1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function W2(_){let $=W1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function X7(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function $X(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function EH(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function WH(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=EH(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),V=parseInt(Z[3],10);if(![X,Y,V].every((Q)=>Number.isFinite(Q)))return null;let q=`#${[X,Y,V].map((Q)=>Q.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:V,hex:q}}function z4(_){return $X(_)||WH(_)}function Y7(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function O2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function OH(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function zH(_){return OH(_)>0.4?"#000000":"#ffffff"}function jX(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function V7(_){return tZ[_]||tZ.default}function JH(_){return _.mode==="auto"?jX():_.mode}function GX(_,$){let j=V7(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||H$}function D$(_,$,j){let G=z4(_);if(!G)return _;return Y7(G,$,j)}function ZX(_,$,j){let G=z4($);if(!G)return _;let X=$X(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:D$(_.bgPrimary,G,0.08),bgSecondary:D$(_.bgSecondary,G,0.12),bgHover:D$(_.bgHover,G,0.16),textPrimary:D$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:D$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:D$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?Y7(G,X,0.18):G.hex,warning:D$(_.warning||H$.warning,G,0.14),danger:D$(_.danger,G,0.16),success:D$(_.success,G,0.16)}}function AH(_,$){let j=z4(_?.warning);if(j)return j.hex;let G=z4($==="dark"?A2.warning:H$.warning)||z4(H$.warning),Z=z4(_?.accent);if(G&&Z)return Y7(G,Z,$==="dark"?0.18:0.14);return $==="dark"?A2.warning:H$.warning}function kH(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=z4(G),X=Z?O2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?O2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",V=Z?O2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=Z?zH(Z):$==="dark"?"#000000":"#ffffff",Q=Z?O2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",L=AH(_,$),K={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":Q,"--accent-soft":Y,"--accent-soft-strong":V,"--accent-contrast-text":q,"--warning-color":L,"--danger-color":_.danger||H$.danger,"--success-color":_.success||H$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(K).forEach(([F,B])=>{if(B)j.style.setProperty(F,B)})}function MH(){if(typeof document>"u")return;let _=document.documentElement;HH.forEach(($)=>_.style.removeProperty($))}function F5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function eZ(_){let $=X7(J4?.theme||"default"),j=J4?.tint?String(J4.tint).trim():null,G=GX($,_);if($==="default"&&j)G=ZX(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?A2.bgPrimary:H$.bgPrimary}function yH(_,$){if(typeof document>"u")return;let j=F5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=F5("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",eZ("light"));let Z=F5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",eZ("dark"));let X=F5("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=F5("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let V=F5("apple-mobile-web-app-status-bar-style");if(V)V.setAttribute("content",$==="dark"?"black-translucent":"default")}function TH(){if(typeof window>"u")return;let _={...J4,mode:_X};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function wH(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function xH(_){if(typeof document>"u"||!_)return;let $=document.documentElement;if($?.style)$.style.background=_;if(document.body?.style)document.body.style.background=_}function q7(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=X7(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=V7(j),X=JH(Z),Y=GX(j,X);J4={theme:j,tint:G},_X=X;let V=document.documentElement;V.dataset.theme=X,V.dataset.colorTheme=j,V.dataset.tint=G?String(G):"",V.style.colorScheme=X;let q=Y;if(j==="default"&&G)q=ZX(Y,G,X);if(j==="default"&&!G)MH();else kH(q,X);if(xH(q.bgPrimary),yH(q.bgPrimary,X),TH(),$.persist!==!1)if(q_(Z7,j),G)q_(J2,G);else q_(J2,"")}function z2(){if(V7(J4.theme).mode!=="auto")return;q7(J4,{persist:!1})}function Q7(){if(typeof window>"u")return;let _=X7(W1(Z7)||"default"),$=(()=>{let j=W1(J2);return j?j.trim():null})();q7({theme:_,tint:$},{persist:!1})}function XX(){if(typeof window>"u")return()=>{};if(Q7(),window.matchMedia&&!G7){let _=window.matchMedia("(prefers-color-scheme: dark)");if(_.addEventListener)_.addEventListener("change",z2);else if(_.addListener)_.addListener(z2);return G7=!0,()=>{if(_.removeEventListener)_.removeEventListener("change",z2);else if(_.removeListener)_.removeListener(z2);G7=!1}}return()=>{}}function U5(_){if(!_||typeof _!=="object")return;let $=wH(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)q7({theme:G||"default",tint:Z},{persist:!1});q_(Z7,G||"default"),q_(J2,Z||"")}function YX(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return jX()}var Z7="piclaw_theme",J2="piclaw_tint",H$,A2,tZ,HH,J4,_X="light",G7=!1;var $6=O_(()=>{H$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},A2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},tZ={default:{label:"Default",mode:"auto",light:H$,dark:A2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},HH=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],J4={theme:"default",tint:null}});function UX(_=typeof window<"u"?window:null){return _||null}function M2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function Y6(_,$){return`${_}:${$}`}function DX(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function HX(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function k4(_){if(!_||typeof _!=="object")return null;return{..._}}function T4(_){if(!_)return null;return M4.find(($)=>$.id===_)||null}function K7(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function EX(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=T4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function FX(_,$,j){let G=y4.get(Y6(_,$));if(G&&T4(G)?.status==="active")X6(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=DX(_),X={id:Z,type:_,chatJid:$,startedAt:M2(),detail:k4(j),phases:[],status:"active"};return M4.push(X),HX(M4,100),y4.set(Y6(_,$),Z),K7(Z,"start"),Z}function X6(_,$,j,G,Z){let X=T4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:M2(),detail:k4(G)}),K7(X.id,j);if(X.status=$,X.completedAt=M2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=Y6(X.type,X.chatJid);if(y4.get(Y)===X.id)y4.delete(Y);EX(X.id)}function sH(_=UX()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=y2;return y2}function D5(_=UX()){return sH(_)}function WX(_,$,j){return D5().ensureTrace(_,$,j)}function T2(_,$){return D5().getActiveTraceId(_,$)}function X1(_,$,j){D5().markTrace(_,$,j)}function w2(_,$,j="settled",G){let Z=T4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return X6(_,"completed",j,G),!0}function OX(_,$,j="failed",G){D5().failTrace(_,$,j,G)}function zX(_,$="cancelled",j){D5().cancelTrace(_,$,j)}function B7(_){return D5().recordRequest(_)}var M4,Z6,y4,y2;var V6=O_(()=>{M4=[],Z6=[],y4=new Map;y2={startTrace(_,$,j){return FX(_,$,j)},ensureTrace(_,$,j){let G=y4.get(Y6(_,$));if(G&&T4(G)?.status==="active")return G;return FX(_,$,j)},getActiveTraceId(_,$){let j=y4.get(Y6(_,$));return j&&T4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=T4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:M2(),detail:k4(j)}),K7(G.id,$)},completeTrace(_,$="settled",j){X6(_,"completed",$,j)},failTrace(_,$,j="failed",G){X6(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){X6(_,"cancelled",$,j)},recordRequest(_){let $=DX("req");return Z6.push({..._,id:$,detail:k4(_.detail)}),HX(Z6,300),$},getTraces(){return M4.map((_)=>({..._,detail:k4(_.detail),phases:_.phases.map(($)=>({...$,detail:k4($.detail)}))}))},getRequests(){return Z6.map((_)=>({..._,detail:k4(_.detail)}))},clear(){M4.forEach((_)=>EX(_.id)),M4.splice(0,M4.length),Z6.splice(0,Z6.length),y4.clear()},printSummary(){let _={traces:y2.getTraces(),requests:y2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});function H5(_){let $=Number(_||0);return Number.isFinite($)&&$>0?$:null}function aH(_){try{return Boolean(_?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function tH(_){let $=String(_?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test($)}function JX(_){let $=String(_?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test($)}function AX(_=typeof window<"u"?window:null){let $=H5(_?.innerWidth)??H5(_?.screen?.availWidth)??H5(_?.screen?.width)??0,j=H5(_?.innerHeight)??H5(_?.screen?.availHeight)??H5(_?.screen?.height)??0,G=$&&j?Math.min($,j):$||j,Z=$&&j?Math.max($,j):$||j,X=aH(_),Y=Number(_?.navigator?.maxTouchPoints||0),V=X||Y>1;if(G>0&&G<=640)return"mobile";if(tH(_)&&!JX(_))return"mobile";if(JX(_))return"tablet";if(V&&G>0&&G<=1100)return"tablet";if(Z>0&&Z<=1180&&G>0&&G<=900)return"tablet";return"desktop"}var F6={};_1(F6,{uploadWorkspaceFile:()=>P2,uploadMedia:()=>P7,updateWorkspaceFile:()=>IE,updateScheduledTask:()=>H7,submitAdaptiveCardAction:()=>f7,streamSidePrompt:()=>yE,stopSessionRecording:()=>O7,stopAutoresearch:()=>WE,steerAgentQueueItem:()=>AE,startSessionRecording:()=>W7,setWorkspaceVisibility:()=>B6,setAgentThoughtVisibility:()=>wE,sessionRecordingPlaybackUrl:()=>J7,sessionRecordingExportUrl:()=>q6,sendPeerAgentMessage:()=>FE,sendAgentMessage:()=>O1,searchPosts:()=>_E,saveWorkspaceSettings:()=>y7,saveWebPushSubscription:()=>I7,saveUiState:()=>k7,saveQuickActionsSettings:()=>M7,saveEnvironmentOverride:()=>I2,restoreChatBranch:()=>NE,respondToAgentRequest:()=>E5,reorderAgentQueueItem:()=>kE,renameWorkspaceFile:()=>l7,renameChatJid:()=>BE,renameChatBranch:()=>qE,removeAgentQueueItem:()=>JE,reindexWorkspace:()=>v7,purgeChatBranch:()=>KE,pruneChatBranch:()=>LE,previewSessionRecordingRedaction:()=>A7,moveWorkspaceEntry:()=>p7,mergeChatBranchIntoParent:()=>QE,getWorkspaceTree:()=>K6,getWorkspaceRawUrl:()=>N6,getWorkspaceIndexStatus:()=>b7,getWorkspaceFileStat:()=>c7,getWorkspaceFileDownloadUrl:()=>f2,getWorkspaceFile:()=>m7,getWorkspaceDownloadUrl:()=>R2,getWorkspaceBranch:()=>u7,getWebPushPublicKey:()=>x7,getTimeline:()=>p$,getThumbnailUrl:()=>S7,getThread:()=>$E,getSystemMetrics:()=>U7,getSessionRecordings:()=>E7,getSessionRecording:()=>x2,getScheduledTasks:()=>D7,getQuickActionsSettings:()=>L6,getPostsByHashtag:()=>F7,getMediaUrl:()=>u1,getMediaText:()=>xE,getMediaInfo:()=>C2,getMediaBlob:()=>g7,getEnvironmentSettings:()=>T7,getChatBranches:()=>YE,getAutoresearchStatus:()=>EE,getAgents:()=>UE,getAgentThought:()=>TE,getAgentStatus:()=>DE,getAgentQueueState:()=>zE,getAgentModels:()=>w4,getAgentContext:()=>HE,getAgentCommands:()=>Q6,getActiveChatAgents:()=>XE,forkChatBranch:()=>VE,dismissAutoresearch:()=>OE,deleteWorkspaceFile:()=>r7,deleteWebPushSubscription:()=>C7,deleteSessionRecording:()=>z7,deletePost:()=>ZE,createWorkspaceFile:()=>h7,createRootChatSession:()=>w7,createReply:()=>GE,createPost:()=>jE,completeInstanceOobe:()=>ME,attachWorkspaceFile:()=>CE,addToWhitelist:()=>R7,SSEClient:()=>S2});async function b0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(h_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw B7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(B7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function kX(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function eH(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:V}=await j.read();if(V)break;Z+=G.decode(Y,{stream:!0});let q=Z.split(`

`);Z=q.pop()||"";for(let Q of q){let L=kX(Q);if(L)$(L.event,L.data)}}Z+=G.decode();let X=kX(Z);if(X)$(X.event,X.data)}async function p$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return b0(G)}async function F7(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return b0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function _E(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let V=G?`&chat_jid=${encodeURIComponent(G)}`:"",q=Z?`&scope=${encodeURIComponent(Z)}`:"",Q=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",L=Y?.images?"&images=1":"",K=Y?.attachments?"&attachments=1":"";return b0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${V}${q}${Q}${L}${K}`)}async function $E(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return b0(`/thread/${_}${j}`)}async function U7(){return b0("/agent/system-metrics")}async function D7(_={}){let $=new URLSearchParams;if(_?.id)$.set("id",String(_.id));if(_?.chatJid)$.set("chat_jid",String(_.chatJid));if(_?.status&&_.status!=="all")$.set("status",String(_.status));if(_?.limit)$.set("limit",String(_.limit));if(_?.includeRunLogs)$.set("include_run_logs","1");if(_?.runLogLimit)$.set("run_log_limit",String(_.runLogLimit));let j=$.toString()?`?${$.toString()}`:"";return b0(`/agent/scheduled-tasks${j}`)}async function H7(_,$,j={}){return b0("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:_,id:$,allow_internal:j?.allowInternal===!0})})}async function E7(){return b0("/agent/recordings")}async function x2(_){return b0(`/agent/recordings/${encodeURIComponent(_)}`)}async function W7(_={}){return b0("/agent/recordings/start",{method:"POST",body:JSON.stringify(_||{})})}async function O7(_={}){return b0("/agent/recordings/stop",{method:"POST",body:JSON.stringify(_||{})})}async function z7(_){return b0(`/agent/recordings/${encodeURIComponent(_)}`,{method:"DELETE"})}function q6(_,$="json"){return`/agent/recordings/${encodeURIComponent(_)}/export?format=${encodeURIComponent($)}`}function J7(_){return`/recordings/playback?id=${encodeURIComponent(_)}`}async function A7(_,$={}){return b0("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:_,...$})})}async function k7(_){return b0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function jE(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return b0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function GE(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return b0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function ZE(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return b0(Z,{method:"DELETE"})}async function O1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",V={content:$,thread_id:j,media_ids:G,client_context:{screen_hint:AX()}};if(Z==="auto"||Z==="queue"||Z==="steer")V.mode=Z;return b0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(V)})}async function Q6(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return b0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function L6(){return b0("/agent/settings/quick-actions")}async function M7(_){return b0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function y7(_){return b0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function T7(){return b0("/agent/settings/environment")}async function I2(_){return b0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function XE(){return b0("/agent/active-chats")}async function YE(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return b0(`/agent/branches${G}`)}async function VE(_,$={}){return b0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function w7(_){return b0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function qE(_,$={}){return b0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function QE(_){return b0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function LE(_){return b0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function KE(_){return b0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function BE(_,$){return b0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function NE(_,$={}){return b0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function FE(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return b0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function x7(){return b0("/agent/push/vapid-public-key")}async function I7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return b0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function C7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return b0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function UE(){return b0("/agent/roster")}async function DE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/status${$}`)}async function HE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/context${$}`)}async function EE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/autoresearch/status${$}`)}async function WE(_=null,$={}){return b0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function OE(_=null){return b0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function zE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/queue-state${$}`)}async function JE(_,$=null){let j=await fetch(h_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function AE(_,$=null){let j=await fetch(h_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function kE(_,$,j=null){let G=await fetch(h_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function w4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/models${$}`)}async function ME(_="provider-ready"){return b0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function P7(_){let $=new FormData;$.append("file",_);let j=await fetch(h_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function E5(_,$,j=null){let G=await fetch(h_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function f7(_){let $=await fetch(h_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function yE(_,$={}){let j=await fetch(h_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await eH(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function R7(_,$){let j=await fetch(h_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function TE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return b0(j)}async function wE(_,$,j){return b0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function u1(_){return`${h_}/media/${_}`}function S7(_){return`${h_}/media/${_}/thumbnail`}async function C2(_){let $=await fetch(`${h_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function xE(_){let $=await fetch(`${h_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function g7(_){let $=await fetch(`${h_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function K6(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return b0(G)}async function u7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return b0($)}async function b7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return b0($)}async function v7(_="all"){return b0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function m7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return b0(Z)}async function c7(_){return b0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function IE(_,$){return b0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function CE(_){return b0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function fE(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function RE(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function SE(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",h_+$);for(let[V,q]of Object.entries(j||{}))if(q!==void 0&&q!==null)Y.setRequestHeader(V,String(q));Y.upload.onprogress=(V)=>{if(typeof G==="function")G({loaded:V.lengthComputable?V.loaded:0,total:V.lengthComputable?V.total:_.size,lengthComputable:V.lengthComputable})},Y.onload=()=>{try{let V=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(V);else{let q=Error(V.error||`HTTP ${Y.status}`);q.status=Y.status,q.code=V.code,X(q)}}catch{let V=Error(`HTTP ${Y.status}`);V.status=Y.status,X(V)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function gE(_,$="",j={}){let G=RE(),Z=fE("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(N7,Number(j.chunkSize)||PE)),Y=Math.max(0,Number(_?.size)||0),V=Math.max(1,Math.ceil(Y/X)),q=0,Q=null;for(let L=0;L<V;L+=1){let K=L*X,F=Math.min(Y,K+X),B=_.slice(K,F),U=B.size;if(Q=await SE(B,Z,{"X-Upload-Id":G,"X-Chunk-Index":L,"X-Chunk-Total":V,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(E)=>{if(typeof j.onProgress!=="function")return;let D=Math.min(Y,q+(E?.loaded||0)),H=Y||1;j.onProgress({loaded:D,total:H,percent:Math.round(D/H*100),chunkIndex:L,chunkTotal:V})}),q+=U,typeof j.onProgress==="function"){let E=Y||1,D=Y?q:E;j.onProgress({loaded:D,total:E,percent:Math.round(D/E*100),chunkIndex:L+1,chunkTotal:V})}}return Q}async function P2(_,$="",j={}){if(_?.size>N7){let G=(_.size/1048576).toFixed(0),Z=(N7/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await gE(_,$,j)}async function h7(_,$,j=""){let G=await fetch(h_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function l7(_,$){let j=await fetch(h_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function p7(_,$){let j=await fetch(h_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function r7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return b0($,{method:"DELETE"})}async function B6(_,$=!1){return b0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function N6(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${h_}/workspace/raw?${j.toString()}`}function f2(_){return N6(_,{download:!0})}function R2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${h_}/workspace/download?${j}`}class S2{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(h_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var h_="",N7=1073741824,PE=8388608;var M_=O_(()=>{V6()});function O5(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function i1(_={}){if(typeof window>"u")return;let $=O5(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function X9(){if(typeof window>"u")return null;return O5(window.__piclawSettingsRequestedSection)}function v2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=X9();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function d$({children:_,className:$=""}){let[j,G]=C(null);return g(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{B$(null,Z)}finally{Z.remove()}}},[]),g(()=>{if(!j)return;j.className=$||"";return},[$,j]),G5(()=>{if(!j)return;B$(_,j);return},[_,j]),null}var m2=O_(()=>{k0()});function Y9(_,$){let j=String(_.label||"").localeCompare(String($.label||""),void 0,{sensitivity:"base"});if(j!==0)return j;return String(_.id||"").localeCompare(String($.id||""),void 0,{sensitivity:"base"})}function o$(_){let $=I4.findIndex((j)=>j.id===_.id);if($>=0)I4[$]=_;else I4.push(_);I4.sort(Y9)}function KY(_){let $=I4.findIndex((j)=>j.id===_);if($>=0)I4.splice($,1)}function BY(){return[...I4]}function V9(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var I4;var z5=O_(()=>{I4=[]});function XW(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(C4,{detail:{enabled:Boolean(_)}}))}function UY(_){if(typeof fetch!=="function")return;k7({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function YW(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(h2,{detail:{collapsed:Boolean(_)}}))}function z6(_=!1){return U$(NY,_)}function DY(_=!1){return U$(FY,_)}function c2(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)q_(NY,Z?"true":"false");if(G)UY({enabled:Z});return XW(Z),Z}function q9(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)q_(FY,Z?"true":"false");if(G)UY({collapsed:Z});return YW(Z),Z}function Q9(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")c2(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!z6(!1);c2(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")q9(Boolean(_.collapsed),{persistServer:!1})}var NY="piclaw_system_meters_enabled",FY="piclaw_system_meters_collapsed",C4="piclaw-meters-change",h2="piclaw-meters-collapsed-change";var l2=O_(()=>{M_()});function HY(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function EY(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function z$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=HY(_,$);return EY(Z,{min:j,max:G})}function VW(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=z$(_,{fallback:G,min:Z,max:X}),V=Math.abs(HY(j,1))||1,q=Number($)<0?-1:1;return EY(Y+q*V,{min:Z,max:X})}function v_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:V,onChange:q}){let Q=Number.isFinite(Number(Z))?Number(Z):z$(_,{fallback:0,min:$,max:j}),[L,K]=C(String(_??Q)),F=u(!1);g(()=>{if(!F.current)K(String(_??Q))},[_,Q]);let B=R((E)=>{F.current=!1;let D=z$(E,{fallback:Q,min:$,max:j});K(String(D)),q?.(D)},[Q,$,j,q]),U=R((E)=>{F.current=!1;let D=VW(_,{direction:E,step:G,fallback:Q,min:$,max:j});K(String(D)),q?.(D)},[Q,j,$,q,G,_]);return N`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${V||"value"}`}
                title=${`Decrease ${V||"value"}`}
                disabled=${Y}
                onClick=${()=>U(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${L}
                disabled=${Y}
                style=${`width:${X}`}
                onInput=${(E)=>{F.current=!0,K(E.target.value)}}
                onBlur=${(E)=>B(E.target.value)}
                onKeyDown=${(E)=>{if(E.key==="Enter")E.preventDefault(),B(E.target.value),E.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${V||"value"}`}
                title=${`Increase ${V||"value"}`}
                disabled=${Y}
                onClick=${()=>U(1)}
            >+</button>
        </span>
    `}var P4=O_(()=>{k0()});function WY(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function OY({value:_,onChange:$}){let j=u(null),[G,Z]=C(WY(_));g(()=>{Z(WY(_))},[_]);let X=R((Y)=>{let V=Y.target.files?.[0];if(!V)return;let q=new FileReader;q.onload=()=>{let Q=q.result;Z(Q),$?.(Q)},q.readAsDataURL(V)},[$]);return N`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?N`<img src=${G} alt="avatar" />`:N`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function zY(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}async function qW(_,$={}){let j=typeof _==="string"?_:"";if(!j)return!1;let G=$.navigator??(typeof navigator<"u"?navigator:null),Z=$.document??(typeof document<"u"?document:null);if(G?.clipboard?.writeText)try{return await G.clipboard.writeText(j),!0}catch(X){}try{if(!Z?.body||typeof Z.createElement!=="function"||typeof Z.execCommand!=="function")return!1;let X=Z.createElement("textarea");X.value=j,X.setAttribute?.("readonly",""),X.style.position="fixed",X.style.left="-9999px",X.style.top="0",X.style.opacity="0",Z.body.appendChild(X),X.focus?.(),X.select?.();let Y=Boolean(Z.execCommand("copy"));return Z.body.removeChild(X),Y}catch(X){return!1}}function L9({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(""),[X,Y]=C(""),[V,q]=C(""),[Q,L]=C(""),[K,F]=C(32),[B,U]=C(256),[E,D]=C(""),[H,k]=C(!1),[z,O]=C(!1),[I,x]=C(!1),[A,M]=C(()=>z6(!1)),[W,y]=C(!1),w=u(""),J=u(null),P=u(!0);g(()=>{return P.current=!0,()=>{P.current=!1}},[]);let f=R((Z0)=>{let $0=zY(Z0);Z($0.userName),Y($0.userAvatar),q($0.assistantName),L($0.assistantAvatar),F($0.composeUploadLimitMb),U($0.workspaceUploadLimitMb),D(Z0?.widgetToken||""),w.current=JSON.stringify($0)},[]);g(()=>{f(_||{})},[_,f]),g(()=>{let Z0=($0)=>{M(Boolean($0?.detail?.enabled))};return window.addEventListener(C4,Z0),()=>window.removeEventListener(C4,Z0)},[]);let b=Y0(()=>JSON.stringify(zY({userName:G,userAvatar:X,assistantName:V,assistantAvatar:Q,composeUploadLimitMb:K,workspaceUploadLimitMb:B})),[G,X,V,Q,K,B]);g(()=>{if(b===w.current)return;if(J.current)clearTimeout(J.current);return J.current=setTimeout(async()=>{if(!P.current)return;let Z0=document.activeElement;if(Z0&&Z0.closest?.(".settings-number-stepper"))return;try{let $0=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:b}),V0=await $0.json().catch(()=>({}));if(!P.current)return;if(!$0.ok||!V0?.ok||!V0?.settings)return;w.current=b,j?.(V0.settings),y(!0),setTimeout(()=>{if(P.current)y(!1)},4000)}catch($0){console.warn("[settings/general] Failed to persist general settings snapshot.",$0)}},800),()=>{if(J.current)clearTimeout(J.current)}},[b,j]);let c=_?.instanceTotp||{configured:!1,issuer:V||"Piclaw",label:G?`${V||"Piclaw"}:${G}`:V||"Piclaw",secret:"",otpauth:"",qrSvg:""},r=R(async()=>{if(!E)return;if(await qW(E))O(!0),setTimeout(()=>{if(P.current)O(!1)},3000);else $?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[E,$]),e=R(async()=>{if(I)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;x(!0);try{let Z0=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),$0=await Z0.json().catch(()=>({}));if(!Z0.ok||!$0?.ok||!$0?.settings)throw Error($0?.error||"Failed to regenerate widget token.");D($0.settings.widgetToken||""),j?.($0.settings),y(!0),setTimeout(()=>{if(P.current)y(!1)},4000)}catch(Z0){console.warn("[settings/general] Failed to regenerate widget token.",Z0)}finally{if(P.current)x(!1)}},[I,j]),m=typeof window<"u"&&window.isSecureContext,_0=E?"•".repeat(Math.min(Math.max(E.length,16),48)):"—",E0=H?E||"—":_0;return N`
        <div class="settings-section">
            ${W&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${OY} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(Z0)=>Z(Z0.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${OY} value=${Q} onChange=${L} />
                <input type="text" value=${V} onInput=${(Z0)=>q(Z0.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${m?N`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:N`
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
                    <input type="checkbox" checked=${A}
                        onChange=${()=>{let Z0=c2(!A);M(Z0)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${v_}
                    label="compose upload limit"
                    value=${K}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${v_}
                    label="workspace upload limit"
                    value=${B}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${U}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>Widget bearer token</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">Token</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${E0}</code>
                        <button class=${`settings-keychain-reveal-btn${H?" active":""}`}
                            type="button"
                            onClick=${()=>k((Z0)=>!Z0)}
                            disabled=${!E}
                            title=${H?"Hide token":"Reveal token"}>
                            ${H?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${r} disabled=${!E} title="Copy token">
                            ${z?N`<span class="settings-widget-token-copied">Copied</span>`:N`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${e} disabled=${I}>${I?"Regenerating…":"Regenerate"}</button>
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
                            ${c.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${c.configured?N`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:c.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${c.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${c.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${c.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var JY=O_(()=>{k0();l2();P4()});var kY={};_1(kY,{SessionsSection:()=>QW});function AY(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function QW({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(16),[V,q]=C(4000),[Q,L]=C(3),[K,F]=C(64),[B,U]=C("none"),[E,D]=C(!1),H=u(""),k=u(null),z=u(!0);g(()=>{return z.current=!0,()=>{z.current=!1}},[]);let O=R((x)=>{let A=AY(x);Z(A.sessionAutoRotate),Y(A.sessionMaxSizeMb),q(A.sessionMaxLines),L(A.sessionMaxCompactions),F(A.toolUseBudget),U(A.sessionIsolation),H.current=JSON.stringify(A)},[]);g(()=>{O(_||{})},[_,O]);let I=Y0(()=>JSON.stringify(AY({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:V,sessionMaxCompactions:Q,toolUseBudget:K,sessionIsolation:B})),[G,X,V,Q,K,B]);return g(()=>{if(I===H.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!z.current)return;let x=document.activeElement;if(x&&x.closest?.(".settings-number-stepper"))return;try{let A=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:I}),M=await A.json().catch(()=>({}));if(!z.current)return;if(!A.ok||!M?.ok||!M?.settings)return;H.current=I,j?.(M.settings),D(!0),setTimeout(()=>{if(z.current)D(!1)},4000)}catch(A){console.warn("[settings/sessions] Failed to persist session settings.",A)}},800),()=>{if(k.current)clearTimeout(k.current)}},[I,j]),N`
        <div class="settings-section">
            ${E&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${G} onChange=${(x)=>Z(x.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${v_}
                    label="max session size"
                    value=${X}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${Y}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${v_}
                    label="tool use budget"
                    value=${K}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${B} onChange=${(x)=>U(x.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var MY=O_(()=>{k0();P4()});var yY={};_1(yY,{__recordingsSettingsTest:()=>NW,RecordingsSection:()=>BW});function r2(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function K9(_){if(_==="full")return"full / trusted";if(_==="metadata")return"metadata only";return"redacted"}function p2({children:_,type:$="neutral"}){return N`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function LW(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function J6(_){return String(_||"").split(`
`).map(($)=>$.trim()).filter(Boolean)}function KW({recording:_,details:$,onDelete:j,onRefresh:G}){if(!_)return N`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let Z=$?.meta||_,X=Array.isArray($?.events)?$.events:[],Y=X.reduce((q,Q)=>q+(Array.isArray(Q.redactions)?Q.redactions.length:0),0),V=X.reduce((q,Q)=>{let L=Q.kind||"event";return q[L]=(q[L]||0)+1,q},{});return N`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${Z.title||Z.id}</h4>
                    <code>${Z.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(J7(Z.id),"_blank","noopener,noreferrer")}>Playback</button>
                    <button onClick=${G}>Refresh</button>
                    <button class="danger" onClick=${()=>j(Z)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${Z.status||"—"}</strong>
                <span>Mode</span><strong>${K9(Z.mode)}</strong>
                <span>Chat</span><code>${Z.chatJid||"—"}</code>
                <span>Started</span><strong>${r2(Z.startedAt)}</strong>
                <span>Ended</span><strong>${r2(Z.endedAt)}</strong>
                <span>Events</span><strong>${Z.eventCount??X.length}</strong>
                <span>Redactions</span><strong>${Y}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${q6(Z.id,"json")}>Export JSON</a>
                <a href=${q6(Z.id,"jsonl")}>Export JSONL</a>
                <a href=${q6(Z.id,"html")}>Export standalone HTML</a>
            </div>
            <h4>Event summary</h4>
            ${X.length===0&&N`<p class="settings-hint">Open or refresh details to inspect trace events.</p>`}
            ${X.length>0&&N`
                <div class="settings-recording-event-summary">
                    ${Object.entries(V).map(([q,Q])=>N`<${p2}>${q}: ${Q}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(X.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function BW({filter:_="",setStatus:$}){let[j,G]=C([]),[Z,X]=C([]),[Y,V]=C(!0),[q,Q]=C(null),[L,K]=C(null),[F,B]=C(null),[U,E]=C(!1),[D,H]=C(LW),[k,z]=C(""),[O,I]=C("redacted"),[x,A]=C(!0),[M,W]=C(""),[y,w]=C(""),[J,P]=C('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[f,b]=C(null);g(()=>{let h=(j0)=>{let Q0=String(j0?.detail?.chatJid||"").trim();if(Q0)H(Q0)};return window.addEventListener("piclaw:current-chat-changed",h),()=>window.removeEventListener("piclaw:current-chat-changed",h)},[]);let c=R(async(h=L)=>{V(!0),Q(null);try{let j0=await E7(),Q0=j0.recordings||[];G(Q0),X(j0.active||[]);let O0=Q0.find((a)=>a.id===h)||Q0[0]||null;if(K(O0?.id||null),O0?.id)B(await x2(O0.id));else B(null)}catch(j0){Q(j0?.message||"Failed to load recordings.")}finally{V(!1)}},[L]);g(()=>{c()},[c]);let r=Y0(()=>j.find((h)=>h.id===L)||null,[j,L]),e=Y0(()=>Z.find((h)=>h.chatJid===D)||null,[Z,D]),m=String(_||"").trim().toLowerCase(),_0=Y0(()=>{if(!m)return j;return j.filter((h)=>[h.id,h.title,h.chatJid,h.status,h.mode].some((j0)=>String(j0||"").toLowerCase().includes(m)))},[j,m]),E0=R(async(h)=>{if(K(h?.id||null),B(null),!h?.id)return;try{B(await x2(h.id))}catch(j0){$?.(j0?.message||"Failed to load recording.","error")}},[$]),Z0=R(async()=>{if(U)return;E(!0);try{let h={keys:J6(M),patterns:J6(y)},j0=await W7({chat_jid:D,title:k||void 0,mode:O,include_timeline_snapshot:x,timeline_snapshot_limit:80,redaction:h});$?.(`Recording started for ${D}.`,"success"),await c(j0?.recording?.id)}catch(h){$?.(h?.message||"Failed to start recording.","error")}finally{E(!1)}},[U,D,M,y,x,c,O,$,k]),$0=R(async(h=e)=>{if(!h||U)return;E(!0);try{let j0=await O7({id:h.id});$?.(`Recording stopped for ${h.chatJid}.`,"success"),await c(j0?.recording?.id)}catch(j0){$?.(j0?.message||"Failed to stop recording.","error")}finally{E(!1)}},[U,e,c,$]),V0=R(async(h)=>{if(!h||U)return;if(!window.confirm(`Delete recording ${h.id}?

${h.title||""}`))return;E(!0);try{await z7(h.id),$?.("Recording deleted.","success"),await c(null)}catch(j0){$?.(j0?.message||"Failed to delete recording.","error")}finally{E(!1)}},[U,c,$]),N0=R(async()=>{try{let h=JSON.parse(J||"null"),j0=await A7(h,{mode:O,redaction:{keys:J6(M),patterns:J6(y)}});b(j0.preview)}catch(h){b({error:h?.message||"Preview failed."})}},[M,y,O,J]);return N`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${D} onInput=${(h)=>H(h.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${k} onInput=${(h)=>z(h.target.value)} /></label>
                    <label>Mode<select value=${O} onChange=${(h)=>I(h.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${x} onChange=${(h)=>A(h.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${M} onInput=${(h)=>W(h.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${y} onInput=${(h)=>w(h.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${e?N`<button onClick=${()=>$0(e)} disabled=${U}>Stop current chat recording</button>`:N`<button onClick=${Z0} disabled=${U}>Start recording</button>`}
                    <button onClick=${()=>c()} disabled=${Y}>Refresh</button>
                </div>
                ${Z.length>0&&N`<div class="settings-recording-active-row">${Z.map((h)=>N`<${p2} type="active">REC ${h.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${J} onInput=${(h)=>P(h.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${N0}>Preview redaction</button></div>
                ${f&&N`<pre>${JSON.stringify(f,null,2)}</pre>`}
            </details>

            ${Y&&N`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${q&&N`<div class="settings-error-state">${q}</div>`}
            ${!Y&&!q&&j.length===0&&N`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!Y&&!q&&j.length>0&&N`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${_0.map((h)=>N`
                            <button class=${`settings-task-row ${h.id===L?"active":""}`} onClick=${()=>E0(h)}>
                                <span class="settings-task-row-main"><strong>${h.title||h.id}</strong><span>${h.chatJid} · ${r2(h.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${p2} type=${h.status==="recording"?"active":"completed"}>${h.status}<//><${p2}>${K9(h.mode)}<//></span>
                                <span class="settings-task-row-times">${h.eventCount||0} events</span>
                            </button>
                        `)}
                        ${_0.length===0&&N`<p class="settings-hint">No recordings match “${_}”.</p>`}
                    </div>
                    <${KW} recording=${r} details=${F} onDelete=${V0} onRefresh=${()=>r&&E0(r)} />
                </div>
            `}
        </div>
    `}var NW;var TY=O_(()=>{k0();M_();NW={formatDateTime:r2,modeLabel:K9,parseList:J6}});var wY={};_1(wY,{CompactionSection:()=>UW});function FW(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function B9(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function UW({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(180),[X,Y]=C(15),[V,q]=C(360),[Q,L]=C(75),[K,F]=C(0.5),[B,U]=C(!1),[E,D]=C(120),[H,k]=C([]),[z,O]=C([]),[I,x]=C(!1),A=u(""),M=u(null),W=u(!0);g(()=>{return W.current=!0,()=>{W.current=!1}},[]);let y=R((P)=>{let f=FW(P);Z(f.compactionTimeoutSec),Y(f.compactionBackoffBaseMin),q(f.compactionBackoffMaxMin),L(f.compactionThresholdPercent),F(f.compactionBackoffDecayFactor),U(f.progressWatchdogEnabled),D(f.progressWatchdogTimeoutSec),k(f.compactionBackoffs),O(f.progressWatchdogPhases),A.current=JSON.stringify({compactionTimeoutSec:f.compactionTimeoutSec,compactionBackoffBaseMin:f.compactionBackoffBaseMin,compactionBackoffMaxMin:f.compactionBackoffMaxMin,compactionThresholdPercent:f.compactionThresholdPercent,compactionBackoffDecayFactor:f.compactionBackoffDecayFactor,progressWatchdogEnabled:f.progressWatchdogEnabled,progressWatchdogTimeoutSec:f.progressWatchdogTimeoutSec})},[]);g(()=>{y(_||{})},[_,y]);let w=Y0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:V,compactionThresholdPercent:Q,compactionBackoffDecayFactor:K,progressWatchdogEnabled:B,progressWatchdogTimeoutSec:E}),[G,X,V,Q,K,B,E]);g(()=>{if(w===A.current)return;if(M.current)clearTimeout(M.current);return M.current=setTimeout(async()=>{if(!W.current)return;let P=document.activeElement;if(P&&P.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let f=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:w}),b=await f.json().catch(()=>({}));if(!W.current)return;if(!f.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to save compaction settings.","error");return}A.current=w,j?.(b.settings),y({..._||{},...b.settings||{}}),$?.("Compaction settings saved.","success"),x(!0),setTimeout(()=>{if(W.current)x(!1),$?.(null)},4000)}catch(f){if(console.warn("[settings/compaction] Failed to persist compaction settings.",f),W.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(M.current)clearTimeout(M.current)}},[w,j,$,y,_]);let J=R(async(P)=>{try{$?.(`Clearing compaction suppression for ${P}…`,"info");let f=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:P})}),b=await f.json().catch(()=>({}));if(!f.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to clear compaction suppression.","error");return}j?.(b.settings),y({..._||{},...b.settings||{}}),$?.(`Cleared compaction suppression for ${P}.`,"success")}catch(f){console.warn("[settings/compaction] Failed to clear compaction suppression.",f),$?.("Failed to clear compaction suppression.","error")}},[y,j,$,_]);return N`
        <div class="settings-section">
            ${I&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${v_}
                    label="compaction threshold"
                    value=${Q}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${L}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${v_}
                    label="compaction timeout"
                    value=${G}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${Z}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${v_}
                    label="compaction backoff base"
                    value=${X}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${Y}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${v_}
                    label="compaction backoff max"
                    value=${V}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${q}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${v_}
                    label="backoff decay factor"
                    value=${Math.round(K*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(P)=>F(P/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${B} onChange=${(P)=>U(Boolean(P.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${v_}
                    label="watchdog timeout"
                    value=${E}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!B}
                    onChange=${D}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${H.length===0?N`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:N`
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
                            ${H.map((P)=>N`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.failureCount}</td>
                                    <td>${B9(P.backoffUntil)}</td>
                                    <td title=${P.lastErrorMessage||""}>${P.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>J(P.chatJid)}>
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
            ${z.length===0?N`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:N`
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
                            ${z.map((P)=>N`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.phase}</td>
                                    <td>${B9(P.startedAt)}</td>
                                    <td>${B9(P.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var xY=O_(()=>{k0();P4()});function CY(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=EW[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(WW.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function J5(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),V=HW[Y];if(V){G[V]=!0;continue}if(G.key)return null;let q=CY(X);if(!q||q==="escape")return null;G.key=q}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function PY(_){return String(_||"").split(/[\n,]/).map(($)=>J5($)).filter(($)=>Boolean($))}function s$(_){return _.join(", ")}function F9(){let _=W2(IY);if(!_||typeof _!=="object")return{};let $={};for(let j of i$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>J5(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function N9(_){if(q_(IY,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function fY(_){return DW.get(_)}function A6(_){let $=F9()[_];if(Array.isArray($))return $;return[...fY(_).defaultBindings]}function RY(_,$){let j=F9(),G=fY(_).defaultBindings,Z=[...new Set($.map((X)=>J5(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;N9(j)}function U9(_){if(!_){N9({});return}let $=F9();delete $[_],N9($)}function n2(){let _={};for(let $ of i$)_[$.id]=A6($.id);return _}function OW(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return CY($)||$.toLowerCase()}function zW(_){let $=J5(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function JW(_,$){let j=zW($);if(!j)return!1;if(OW(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function J$(_,$){return A6($).some((j)=>JW(_,j))}var IY="piclaw_keyboard_shortcuts_v1",i$,DW,HW,EW,WW;var d2=O_(()=>{i$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],DW=new Map(i$.map((_)=>[_.id,_])),HW={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},EW={esc:"escape",return:"enter",spacebar:"space"},WW=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var SY={};_1(SY,{KeyboardSection:()=>kW});function AW(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function kW({filter:_="",setStatus:$}){let[j,G]=C(()=>{let q=n2();return Object.fromEntries(Object.entries(q).map(([Q,L])=>[Q,s$(L)]))});g(()=>{let q=()=>{let Q=n2();G(Object.fromEntries(Object.entries(Q).map(([L,K])=>[L,s$(K)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",q),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",q)},[]);let Z=Y0(()=>i$.filter((q)=>{let Q=String(j[q.id]||"");return AW(_,q,Q)}),[j,_]),X=(q)=>{let Q=String(j[q]||"").trim(),K=(Q?Q.split(/[\n,]/).map((B)=>B.trim()).filter(Boolean):[]).filter((B)=>!J5(B));if(K.length>0){$?.(`Invalid shortcut: ${K[0]}. Escape is reserved and cannot be rebound.`,"error");return}let F=PY(Q);RY(q,F),G((B)=>({...B,[q]:s$(A6(q))})),$?.("Keyboard shortcuts saved.","success")},Y=(q)=>{U9(q),G((Q)=>({...Q,[q]:s$(A6(q))})),$?.("Keyboard shortcut reset to default.","success")};return N`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{U9();let q=n2();G(Object.fromEntries(Object.entries(q).map(([Q,L])=>[Q,s$(L)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((q)=>N`
                    <div class="settings-shortcut-card" key=${q.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${q.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${q.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${s$(q.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[q.id]||""}
                                placeholder=${s$(q.defaultBindings)}
                                onInput=${(Q)=>G((L)=>({...L,[q.id]:Q.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>X(q.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>Y(q.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${Z.length===0&&N`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var gY=O_(()=>{k0();d2()});function uY(_,$=D9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function bY(_,$=H9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function A5(){return{refreshIntervalSec:uY(O4(i2,D9),D9),folderPreviewDepth:bY(O4(s2,H9),H9)}}function vY(_={}){let $=A5(),j={refreshIntervalSec:uY(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:bY(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(q_(i2,String(j.refreshIntervalSec)),q_(s2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(o2,{detail:{settings:j}}));return j}var o2="piclaw:workspace-client-settings-updated",i2="workspaceRefreshIntervalSec",s2="workspaceFolderPreviewDepth",D9=60,H9=3;var E9=()=>{};var cY={};_1(cY,{WorkspaceSection:()=>MW});function mY(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function MW({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(!0),[V,q]=C(4),[Q,L]=C(5000),[K,F]=C(60),[B,U]=C(3),[E,D]=C(!1),[H,k]=C(!1),z=u(""),O=u(null),I=u(null),x=u(null),A=u(!0);g(()=>{return A.current=!0,()=>{if(A.current=!1,O.current)clearTimeout(O.current);if(I.current)clearTimeout(I.current);if(x.current)clearTimeout(x.current)}},[]);let M=R((w)=>{let J=mY(w),P=A5();Z(J.webTerminalEnabled),Y(J.vncAllowDirect),q(J.treeMaxDepth),L(J.treeMaxEntries),F(P.refreshIntervalSec),U(P.folderPreviewDepth),z.current=JSON.stringify(J)},[]);g(()=>{M(_||{})},[_,M]);let W=Y0(()=>JSON.stringify(mY({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:V,treeMaxEntries:Q}})),[G,X,V,Q]);g(()=>{if(W===z.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!A.current)return;let w=document.activeElement;if(w&&w.closest?.(".settings-number-stepper"))return;try{let J=await y7(JSON.parse(W));if(!A.current||!J?.ok||!J?.settings)return;if(z.current=W,j?.({workspaceSettings:J.settings}),$?.(null),D(!0),I.current)clearTimeout(I.current);I.current=setTimeout(()=>{if(A.current)D(!1)},4000)}catch(J){$?.(String(J?.message||J),"error")}},800),()=>{if(O.current)clearTimeout(O.current)}},[W,j,$]);let y=R((w)=>{let J=vY(w);if(F(J.refreshIntervalSec),U(J.folderPreviewDepth),k(!0),x.current)clearTimeout(x.current);x.current=setTimeout(()=>{if(A.current)k(!1)},3000)},[]);return N`
        <div class="settings-section">
            ${E&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${H&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${G} onChange=${(w)=>Z(w.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${X} onChange=${(w)=>Y(w.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${v_}
                    label="workspace tree max depth"
                    value=${V}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${q}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${v_}
                    label="workspace tree max entries"
                    value=${Q}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${L}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${v_}
                    label="workspace refresh interval"
                    value=${K}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(w)=>y({refreshIntervalSec:w})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${v_}
                    label="folder preview scan depth"
                    value=${B}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(w)=>y({folderPreviewDepth:w})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var hY=O_(()=>{k0();M_();E9();P4()});var lY={};_1(lY,{EnvironmentSection:()=>yW});function W9(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function yW({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=C(()=>W9(_||{})),[Y,V]=C({}),[q,Q]=C(""),[L,K]=C(""),[F,B]=C(null);g(()=>{X(W9(_||{})),V({})},[_]);let U=R((O)=>{let I=W9({environmentSettings:O?.settings||O});return X(I),G?.({environmentSettings:I}),V({}),I},[G]),E=R(async()=>{try{let O=await T7();if(O?.ok)U(O.settings);j?.("Environment refreshed.","info")}catch(O){j?.(String(O?.message||O),"error")}},[U,j]),D=R(async(O,I)=>{let x=String(O||"").trim();if(!x)return;B(x);try{let A=await I2({action:"set",name:x,value:String(I??"")});if(A?.ok)U(A.settings);if(j?.(`Saved environment override for ${x}.`,"info"),x===q.trim())Q(""),K("")}catch(A){j?.(String(A?.message||A),"error")}finally{B(null)}},[U,q,j]),H=R(async(O)=>{let I=String(O||"").trim();if(!I)return;B(I);try{let x=await I2({action:"clear",name:I});if(x?.ok)U(x.settings);j?.(`Cleared environment override for ${I}.`,"info")}catch(x){j?.(String(x?.message||x),"error")}finally{B(null)}},[U,j]),k=Y0(()=>{let O=String($||"").trim().toLowerCase(),I=Array.isArray(Z.variables)?Z.variables:[];if(!O)return I;return I.filter((x)=>{return`${x?.name||""} ${x?.value||""} ${x?.source||""}`.toLowerCase().includes(O)})},[Z.variables,$]),z=R((O,I)=>{V((x)=>({...x||{},[O]:I}))},[]);return N`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${E}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${q}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(O)=>Q(O.target.value)}
                    />
                    <input
                        type="text"
                        value=${L}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(O)=>K(O.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!q.trim()||F===q.trim()}
                        onClick=${()=>D(q,L)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${k.map((O)=>{let I=String(O?.name||""),x=Object.prototype.hasOwnProperty.call(Y,I)?Y[I]:O.value,A=x!==O.value,M=F===I;return N`
                        <div class="settings-tool-row" key=${I} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${I}>${I}</span>
                            <input
                                type="text"
                                value=${x}
                                spellcheck="false"
                                onInput=${(W)=>z(I,W.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${O.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${O.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${M||!A} onClick=${()=>D(I,x)}>Save</button>
                                <button type="button" disabled=${M||!O.overridden} onClick=${()=>H(I)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${k.length===0&&N`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var pY=O_(()=>{k0();M_()});var rY={};_1(rY,{ProvidersSection:()=>wW});function TW(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function wW({providers:_,setStatus:$}){let[j,G]=C(null),[Z,X]=C(null),[Y,V]=C({}),q=R((D,H)=>{V((k)=>({...k,[D]:H}))},[]),Q=R(async(D)=>{let H=(Y.apiKey||"").trim();if(!H){$?.("API key cannot be empty.","error");return}G(D),$?.(`Configuring ${D}…`,"info");try{let k=JSON.stringify({provider:D,method:"api_key",api_key:H}),z=await O1("default",`/login __step2 ${k}`,null,[]);if(z?.command?.status==="error"){$?.(z.command.message,"error");return}$?.(z?.command?.message||`${D} configured.`,"success"),X(null),V({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),L=R(async(D,H)=>{G(D),$?.(`Configuring ${D}…`,"info");try{let k={provider:D,method:"custom"};for(let I of H.customFields||[])k[I.key]=(Y[I.key]||"").trim();let z=JSON.stringify(k),O=await O1("default",`/login __step2 ${z}`,null,[]);if(O?.command?.status==="error"){$?.(O.command.message,"error");return}$?.(O?.command?.message||`${D} configured.`,"success"),X(null),V({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),K=R(async(D)=>{G(D),$?.(`Starting OAuth for ${D}…`,"info");try{let H=JSON.stringify({provider:D}),z=(await O1("default",`/login __step1 ${H}`,null,[]))?.command?.message||"";if(z.includes("http")){let O=z.match(/(https?:\/\/[^\s)]+)/);if(O)window.open(O[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(z,"success")}else $?.(z||`OAuth flow started for ${D}. Check the chat.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[$]),F=R(async(D)=>{if(j)return;G(D),$?.(`Logging out ${D}…`,"info");try{await O1("default",`/logout ${D}`,null,[]),$?.(`Logged out ${D}. Restart may be needed.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[j,$]),B=_||[],U=(D)=>Z===D,E=(D)=>{X((H)=>H===D?null:D),V({})};return N`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${B.map((D)=>N`
                    <div class=${`settings-provider-card${D.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!D.configured&&E(D.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${D.name}</strong>
                                <span class="settings-provider-id">${D.id}</span>
                                ${D.configured&&N`<span class="settings-tag settings-tag-skill">${TW(D.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${D.hasOAuth&&N`<span class="settings-tag">OAuth</span>`}
                                ${D.hasApiKey&&N`<span class="settings-tag">API Key</span>`}
                                ${D.isCustom&&N`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${D.configured?N`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),F(D.id)}}
                                    >${j===D.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),E(D.id)}}
                                    >Reconfigure</button>
                                `:N`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),E(D.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(D.id)&&N`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${D.hasOAuth&&N`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===D.id}
                                            onClick=${()=>K(D.id)}>
                                            ${j===D.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${D.hasApiKey&&N`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(H)=>q("apiKey",H.target.value)}
                                                placeholder=${D.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===D.id||!(Y.apiKey||"").trim()}
                                                onClick=${()=>Q(D.id)}>
                                                ${j===D.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${D.isCustom&&N`
                                    <div class="settings-provider-method">
                                        ${(D.customFields||[]).map((H)=>N`
                                            <div class="settings-provider-field-row">
                                                <label>${H.label}${H.required?" *":""}</label>
                                                <input type="text" value=${Y[H.key]||""}
                                                    onInput=${(k)=>q(H.key,k.target.value)}
                                                    placeholder=${H.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===D.id}
                                                onClick=${()=>L(D.id,D)}>
                                                ${j===D.id?"Configuring…":"Save configuration"}
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
    `}var nY=O_(()=>{k0();M_()});var dY={};_1(dY,{ModelsSection:()=>fW});function CW(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function PW({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=CW(j)?xW:IW,V=G&&G.length>1?G:["off","minimal","low","medium","high"],q=Math.max(0,V.indexOf(_??"off"));if(!$)return N`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return N`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Y[V[q]]||V[q]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${V.length-1} step="1" value=${q} disabled=${X}
                    onInput=${(Q)=>Z(V[parseInt(Q.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${V.map((Q,L)=>N`<span class=${L===q?"active":""} onClick=${()=>!X&&Z(Q)}>${Y[Q]||Q}</span>`)}
                </div>
            </div>
        </div>
    `}function fW({filter:_=""}){let[$,j]=C(null),[G,Z]=C(!1),[X,Y]=C("off"),[V,q]=C(!1),[Q,L]=C(["off"]),[K,F]=C(!1),B=R(async()=>{let x=await w4();if(j(x),x.thinking_level)Y(x.thinking_level);if(q(Boolean(x.supports_thinking)),Array.isArray(x.available_thinking_levels)&&x.available_thinking_levels.length>0)L(x.available_thinking_levels);return x},[]);g(()=>{B().catch(()=>j({models:[],model_options:[]}))},[]);let U=R(async(x)=>{if(G)return;Z(!0);try{await O1("default",`/model ${x}`,null,[]),await B()}catch(A){console.error("Failed to switch model:",A)}finally{Z(!1)}},[G,B]),E=R(async(x)=>{if(K)return;F(!0),Y(x);try{let A=await O1("default",`/thinking ${x}`,null,[]);if(A?.command?.thinking_level)Y(A.command.thinking_level);q(A?.command?.supports_thinking!==!1),await B()}catch(A){console.error("Failed to set thinking:",A),await B().catch((M)=>{})}finally{F(!1)}},[K,B]);if(!$)return N`<div class="settings-loading">Loading models\u2026</div>`;let D=$.model_options||[],H=$.current,z=D.find((x)=>x.label===H)?.provider||"",O=_.toLowerCase(),I=O?D.filter((x)=>x.label.toLowerCase().includes(O)||(x.provider||"").toLowerCase().includes(O)):D;return N`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${I.map((x)=>N`
                            <tr class=${x.label===H?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${x.label===H} disabled=${G} onChange=${()=>U(x.label)} /></td>
                                <td>${x.name||x.label}</td><td>${x.provider}</td>
                                <td>${x.context_window?(x.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${x.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${I.length===0&&N`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${PW}
                    thinkingLevel=${X}
                    supportsThinking=${V}
                    provider=${z}
                    availableLevels=${Q}
                    onSetLevel=${E}
                    disabled=${K||G} />
            </div>
        </div>
    `}var xW,IW;var oY=O_(()=>{k0();M_();xW={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},IW={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var sY={};_1(sY,{ThemeSection:()=>RW});function iY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function RW({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=C("default"),[V,q]=C(""),[Q,L]=C(!1),K=u(""),F=u(null),B=u(!0);g(()=>{return B.current=!0,()=>{B.current=!1}},[]);let U=R((z)=>{let O=iY(z);Y(O.uiTheme),q(O.uiTint),K.current=JSON.stringify(O)},[]);g(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let E=R((z,O)=>{U5({theme:z,tint:O||null}),Y(z||"default"),q(O||"")},[]),D=Y0(()=>JSON.stringify(iY({uiTheme:X,uiTint:V})),[X,V]);g(()=>{if(D===K.current)return;if(F.current)clearTimeout(F.current);return F.current=setTimeout(async()=>{if(!B.current)return;L(!0);try{let z=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:D}),O=await z.json().catch(()=>({}));if(!B.current)return;if(!z.ok||!O?.ok||!O?.settings){G?.(O?.error||"Failed to save appearance settings.","error");return}K.current=D,Z?.(O.settings),G?.("Appearance synced across clients.","success")}catch(z){if(!B.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",z),G?.("Failed to save appearance settings.","error")}finally{if(B.current)L(!1)}},250),()=>{if(F.current)clearTimeout(F.current)}},[D,Z,G]);let H=$||[],k=_||[];return N`
        <div class="settings-section">
            ${Q&&N`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${X==="default"}
                        onChange=${()=>E("default",V)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${V||"#1d9bf0"}
                        onInput=${(z)=>{let O=z.target.value;if(q(O),X==="default")U5({theme:"default",tint:O})}} />
                    ${V&&N`
                        <button class="settings-tint-clear" onClick=${()=>E("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${V||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${H.map((z)=>N`<th class="settings-swatch-header">${z.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${k.filter((z)=>z.name!=="default").map((z)=>N`
                        <tr class=${z.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>E(z.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${z.name===X} onChange=${()=>E(z.name,"")} /></td>
                            <td><strong>${z.label}</strong></td>
                            <td>${z.mode}</td>
                            ${H.map((O)=>{let I=z.colors?.[O];return N`<td class="settings-swatch-cell">
                                    ${I?N`<span class="settings-color-swatch" style=${"background:"+I} title=${I}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var aY=O_(()=>{k0();$6()});var eY={};_1(eY,{__scheduledTasksSettingsTest:()=>mW,ScheduledTasksSection:()=>vW});function f4(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function tY(_){let $=Number(_);if(!Number.isFinite($))return"—";if($<1000)return`${Math.round($)}ms`;return`${($/1000).toFixed($<1e4?1:0)}s`}function O9(_){if(!_)return"—";if(_.schedule_type==="once")return`once · ${f4(_.schedule_value)}`;if(_.schedule_type==="interval")return`interval · ${_.schedule_value}`;if(_.schedule_type==="cron")return`cron · ${_.schedule_value}`;return`${_.schedule_type||"schedule"} · ${_.schedule_value||"—"}`}function z9(_){let $=_?.task_kind||"agent";return $==="internal"?"internal/protected":$}function J9(_){return(_?.task_kind||"agent")==="internal"}function gW(_){if(!_)return"";let $=String(_).replace(/\s+/g," ").trim();return $.length>180?`${$.slice(0,179)}…`:$}function k5({children:_,type:$="neutral"}){return N`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function uW({task:_}){let $=Array.isArray(_?.recent_run_logs)?_.recent_run_logs:[];if(!$.length)return N`<p class="settings-hint">No run logs recorded yet.</p>`;return N`
        <div class="settings-task-run-list">
            ${$.map((j)=>N`
                <div class=${`settings-task-run-row settings-task-run-${j.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${k5} type=${j.status==="error"?"error":"success"}>${j.status||"unknown"}<//>
                        <span>${f4(j.run_at)}</span>
                        <span>${tY(j.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${j.error_summary||gW(j.error)||j.result_summary||j.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function bW({task:_,onAction:$}){if(!_)return N`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let j=J9(_);return N`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${_.summary||_.id}</h4>
                    <code>${_.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${_.status==="active"&&N`<button onClick=${()=>$("pause",_)}>Pause</button>`}
                    ${_.status==="paused"&&N`<button onClick=${()=>$("resume",_)}>Resume</button>`}
                    <button class="danger" onClick=${()=>$("delete",_)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${_.status||"—"}</strong>
                <span>Kind</span><strong>${z9(_)}</strong>
                <span>Schedule</span><strong>${O9(_)}</strong>
                <span>Next run</span><strong>${f4(_.next_run)}</strong>
                <span>Last run</span><strong>${f4(_.last_run)}</strong>
                <span>Last result</span><strong>${_.latest_run_log?.status||_.last_result||"—"}</strong>
                <span>Chat</span><code>${_.chat_jid||"—"}</code>
                <span>Model</span><code>${_.model||"default"}</code>
                ${_.cwd&&N`<span>CWD</span><code>${_.cwd}</code>`}
                ${_.timeout_sec&&N`<span>Timeout</span><strong>${_.timeout_sec}s</strong>`}
                ${j&&N`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${_.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${_.command||_.prompt||_.command_summary||_.prompt_summary||_.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${uW} task=${_} />
        </div>
    `}function vW({filter:_="",setStatus:$}){let[j,G]=C([]),[Z,X]=C({active:0,paused:0,completed:0}),[Y,V]=C("all"),[q,Q]=C(""),[L,K]=C(!0),[F,B]=C(null),[U,E]=C(null),[D,H]=C(null),[k,z]=C(!1),O=R(async(W={})=>{K(!0),B(null);try{let y=await D7({status:Y,chatJid:q.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});G(y.tasks||[]),X(y.counts||{active:0,paused:0,completed:0});let w=W.selectedId||U,J=(y.tasks||[]).find((P)=>P.id===w)||(y.tasks||[])[0]||null;E(J?.id||null),H(J)}catch(y){B(y?.message||"Failed to load scheduled tasks.")}finally{K(!1)}},[Y,q,U]);g(()=>{O()},[O]);let I=String(_||"").trim().toLowerCase(),x=Y0(()=>{if(!I)return j;return j.filter((W)=>[W.id,W.chat_jid,W.status,W.task_kind,W.schedule_type,W.schedule_value,W.summary,W.prompt_summary,W.command_summary,W.latest_run_log?.error_summary].some((y)=>String(y||"").toLowerCase().includes(I)))},[j,I]),A=R((W)=>{E(W?.id||null),H(W||null)},[]),M=R(async(W,y)=>{if(!y||k)return;let w=J9(y),J=y.summary||y.command_summary||y.prompt_summary||y.id,P=W==="delete"?`Delete scheduled task ${y.id}?

${J}`:`${W==="pause"?"Pause":"Resume"} scheduled task ${y.id}?

${J}`;if(!window.confirm(P))return;if(w&&!window.confirm(`Task ${y.id} is internal/protected. Continue with ${W}?`))return;z(!0),$?.(`${W==="delete"?"Deleting":W==="pause"?"Pausing":"Resuming"} ${y.id}…`,"info");try{await H7(W,y.id,{allowInternal:w}),$?.(`Scheduled task ${y.id} ${W==="delete"?"deleted":W==="pause"?"paused":"resumed"}.`,"success"),await O({selectedId:W==="delete"?null:y.id})}catch(f){$?.(f?.message||`Failed to ${W} task.`,"error")}finally{z(!1)}},[k,O,$]);return N`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${k5} type="active">Active ${Z.active||0}<//>
                    <${k5} type="paused">Paused ${Z.paused||0}<//>
                    <${k5} type="completed">Completed ${Z.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${Y} onChange=${(W)=>V(W.target.value)}>
                        ${SW.map((W)=>N`<option value=${W}>${W==="all"?"All statuses":W}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${q} onInput=${(W)=>Q(W.target.value)} />
                    <button onClick=${()=>O()} disabled=${L}>Refresh</button>
                </div>
            </div>

            ${L&&N`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${F&&N`<div class="settings-error-state">${F}</div>`}
            ${!L&&!F&&j.length===0&&N`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/j`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!L&&!F&&j.length>0&&N`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${x.map((W)=>N`
                            <button class=${`settings-task-row ${W.id===U?"active":""}`} onClick=${()=>A(W)}>
                                <span class="settings-task-row-main">
                                    <strong>${W.summary||W.id}</strong>
                                    <span>${O9(W)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${k5} type=${W.status||"neutral"}>${W.status}<//>
                                    <${k5}>${z9(W)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${f4(W.next_run)} · Last ${f4(W.last_run)}${W.latest_run_log?.status?` · ${W.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${x.length===0&&N`<p class="settings-hint">No tasks match “${_}”.</p>`}
                    </div>
                    <${bW} task=${D&&x.some((W)=>W.id===D.id)?D:x[0]} onAction=${M} />
                </div>
            `}
        </div>
    `}var SW,mW;var _V=O_(()=>{k0();M_();SW=["all","active","paused","completed"];mW={formatDateTime:f4,formatDuration:tY,labelForSchedule:O9,kindLabel:z9,isProtectedTask:J9}});function $V(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function M5(_){return typeof _==="string"&&_.trim().length>0}function A9(_,...$){let j=$V(_);if(!j)return!0;let G=$.map((Z)=>$V(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function jV(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function t$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:jV($.workspaceCommands),slashCommands:jV($.slashCommands)}}function GV(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function cW(_){let $=Array.isArray(_?.commands)?_.commands:[],j=t$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>GV(j.workspaceCommands,Z.id)).filter((Z)=>A9(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function hW(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=M5(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>A9(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=M5(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=M5(Z?.session_name)?Z.session_name.trim():"",V=String(Z?.chat_jid||"").trim();return{key:`agent:${V}`,kind:"agent",title:`@${X}`,subtitle:Y||V,searchText:`@${X} ${Y} ${V}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:V}})}function lW(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=t$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=M5(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),GV(j.slashCommands,Y)}).filter((X)=>A9(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),V=M5(X?.description)?X.description.trim():"slash command",q=M5(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:V,searchText:`${Y} ${V} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:q||"Slash",actionHint:"Insert",commandName:Y}})}function ZV(_){return[...hW({agents:_?.agents,query:_?.query}),...cW({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...lW({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var a$;var k9=O_(()=>{a$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var VV={};_1(VV,{QuickActionsSection:()=>pW});function XV(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function YV(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function pW({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=C(()=>a$.map((x)=>x.id)),[X,Y]=C([]),[V,q]=C([]),[Q,L]=C(!0),[K,F]=C(!1),B=R(async()=>{L(!0);try{let[x,A]=await Promise.all([L6(),Q6("web:default").catch(()=>({commands:[]}))]),M=t$(x?.settings),W=Array.isArray(A?.commands)?A.commands:[];q(W),Z(Array.isArray(M.workspaceCommands)?M.workspaceCommands:a$.map((y)=>y.id)),Y(Array.isArray(M.slashCommands)?M.slashCommands:W.map((y)=>String(y?.name||"").trim()).filter(Boolean))}catch(x){$?.(String(x?.message||x),"error")}finally{L(!1)}},[$]);g(()=>{B()},[B]);let U=Y0(()=>YV(G),[G]),E=Y0(()=>YV(X),[X]),D=Y0(()=>a$.filter((x)=>XV(_,x.label,x.description,...x.keywords||[])),[_]),H=Y0(()=>V.filter((x)=>XV(_,x?.name,x?.description,x?.source)),[V,_]),k=R((x)=>{Z((A)=>{let M=new Set((Array.isArray(A)?A:[]).map((W)=>String(W||"").trim()).filter(Boolean));if(M.has(x))M.delete(x);else M.add(x);return a$.map((W)=>W.id).filter((W)=>M.has(W))})},[]),z=R((x)=>{Y((A)=>{let M=new Set((Array.isArray(A)?A:[]).map((W)=>String(W||"").trim()).filter(Boolean));if(M.has(x))M.delete(x);else M.add(x);return V.map((W)=>String(W?.name||"").trim()).filter((W)=>W&&M.has(W))})},[V]),O=R(()=>{Z(a$.map((x)=>x.id)),Y(V.map((x)=>String(x?.name||"").trim()).filter(Boolean))},[V]),I=R(async()=>{if(K)return;F(!0),$?.("Saving quick actions…","info");try{let x=await M7({workspaceCommands:G,slashCommands:X}),A=t$(x?.settings);j?.({quickActions:A}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:A}})),$?.("Quick Actions saved.","success")}catch(x){$?.(String(x?.message||x),"error")}finally{F(!1)}},[j,K,$,X,G]);if(Q)return N`<div class="settings-loading">Loading…</div>`;return N`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${O} disabled=${K}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${I} disabled=${K}>
                    ${K?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${D.map((x)=>{let A=U?U.has(x.id.toLowerCase()):!0;return N`
                        <label class="settings-checkbox-row" key=${x.id}>
                            <input type="checkbox" checked=${A} onChange=${()=>k(x.id)} />
                            <div>
                                <div>${x.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x.description}</div>
                            </div>
                        </label>
                    `})}
                ${D.length===0&&N`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${H.map((x)=>{let A=String(x?.name||"").trim(),M=E?E.has(A.toLowerCase()):!0;return N`
                        <label class="settings-checkbox-row" key=${A}>
                            <input type="checkbox" checked=${M} onChange=${()=>z(A)} />
                            <div>
                                <div><code>${A}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&N`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var qV=O_(()=>{k0();M_();k9()});var QV={};_1(QV,{KeychainSection:()=>dW});function rW(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function dW({filter:_=""}){let[$,j]=C([]),[G,Z]=C(!0),[X,Y]=C(null),[V,q]=C(!1),[Q,L]=C(""),[K,F]=C(""),[B,U]=C(""),[E,D]=C(""),[H,k]=C(""),[z,O]=C("secret"),[I,x]=C(!1),[A,M]=C({}),[W,y]=C(null),[w,J]=C(null),[P,f]=C(null),b=u(null),c=u(null),r=u(null),e=R(async()=>{Z(!0),Y(null);try{let X0=await(await fetch("/agent/keychain")).json();if(X0?.ok)j(X0.entries||[]);else Y(X0?.error||"Failed to load keychain.")}catch(a){Y("Failed to load keychain.")}finally{Z(!1)}},[]);g(()=>{e()},[e]);let m=R(async()=>{let a=Q.trim(),X0=K;if(!a||!X0)return;x(!0);try{let P0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,secret:X0,type:z,username:B.trim()||void 0,userNote:E,agentNote:H})})).json();if(P0?.ok)L(""),F(""),U(""),D(""),k(""),O("secret"),q(!1),await e();else Y(P0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{x(!1)}},[Q,K,B,E,H,z,e]),_0=R(async(a)=>{try{let W0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a})})).json();if(W0?.ok)J(null),f((P0)=>P0?.name===a?null:P0),await e();else Y(W0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[e]),E0=R(async(a)=>{let X0=a?.name;if(!X0)return;let W0=A[X0]||{},P0=Object.prototype.hasOwnProperty.call(W0,"userNote")?W0.userNote:a.userNote||"",l0=Object.prototype.hasOwnProperty.call(W0,"agentNote")?W0.agentNote:a.agentNote||"";y(X0);try{let G_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X0,userNote:P0,agentNote:l0})})).json();if(G_?.ok)M((h0)=>{let s0={...h0||{}};return delete s0[X0],s0}),await e();else Y(G_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{y(null)}},[A,e]),Z0=R((a,X0,W0)=>{M((P0)=>({...P0||{},[a]:{...(P0||{})[a]||{},[X0]:W0}}))},[]),$0=R(async(a,X0,W0)=>{try{let l0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,master_password:X0||void 0,totp_code:W0||void 0})})).json();if(l0?.ok)f({name:a,phase:"revealed",secret:l0.secret,username:l0.username,masterPassword:X0});else if(l0?.needs_master_password)f((u0)=>({name:a,phase:"password",masterPassword:"",error:u0?.name===a&&u0?.masterPassword?l0.error:null})),requestAnimationFrame(()=>c.current?.focus());else if(l0?.needs_totp)f((u0)=>({name:a,phase:"totp",masterPassword:X0,totpCode:"",error:u0?.name===a&&u0?.phase==="totp"&&u0?.totpCode?l0.error:null})),requestAnimationFrame(()=>r.current?.focus());else f({name:a,phase:"error",error:l0?.error||"Failed to reveal."})}catch{f({name:a,phase:"error",error:"Failed to reveal."})}},[]),V0=R((a)=>{if(P?.name===a&&P?.phase==="revealed"){f(null);return}$0(a,null,null)},[P,$0]),N0=R((a)=>{let X0=P?.masterPassword||"";if(!X0)return;$0(a,X0,null)},[P,$0]),h=R((a)=>{let X0=P?.totpCode||"";if(X0.length<6)return;$0(a,P?.masterPassword,X0)},[P,$0]),j0=R(async(a)=>{try{await navigator.clipboard.writeText(a)}catch{let X0=document.createElement("textarea");X0.value=a,X0.style.position="fixed",X0.style.opacity="0",document.body.appendChild(X0),X0.select(),document.execCommand("copy"),document.body.removeChild(X0)}},[]);g(()=>{if(V)requestAnimationFrame(()=>b.current?.focus())},[V]);let Q0=_.toLowerCase(),O0=Y0(()=>{if(!Q0)return $;return $.filter((a)=>a.name.toLowerCase().includes(Q0)||(a.type||"").toLowerCase().includes(Q0)||(a.envVar||"").toLowerCase().includes(Q0)||(a.userNote||"").toLowerCase().includes(Q0)||(a.agentNote||"").toLowerCase().includes(Q0))},[$,Q0]);if(G)return N`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return N`
        <div class="settings-section">
            ${X&&N`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${O0.length} entr${O0.length===1?"y":"ies"}${Q0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>q(!V)}>
                    ${V?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${V&&N`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${b} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${Q} onInput=${(a)=>L(a.target.value)}
                            class="settings-keychain-input" />
                        <select value=${z} onChange=${(a)=>O(a.target.value)}
                            class="settings-keychain-select">
                            ${nW.map((a)=>N`<option value=${a}>${a}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${K} onInput=${(a)=>F(a.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${B} onInput=${(a)=>U(a.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${m}
                            disabled=${I||!Q.trim()||!K}>
                            ${I?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${E} onInput=${(a)=>D(a.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${H} onInput=${(a)=>k(a.target.value)}
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
                        ${O0.length===0&&N`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${Q0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${O0.map((a)=>{let X0=P?.name===a.name?P:null,W0=X0?.phase==="revealed",P0=X0?.phase==="password",l0=X0?.phase==="totp",u0=X0?.phase==="error",G_=A[a.name]||{},h0=Object.prototype.hasOwnProperty.call(G_,"userNote")?G_.userNote:a.userNote||"",s0=Object.prototype.hasOwnProperty.call(G_,"agentNote")?G_.agentNote:a.agentNote||"",f0=h0!==(a.userNote||"")||s0!==(a.agentNote||""),o0=W===a.name;return N`
                            <tr class="settings-keychain-row" key=${a.name}>
                                <td class="settings-keychain-name">${a.name}</td>
                                <td><span class="settings-keychain-type-badge">${a.type}</span></td>
                                <td class="settings-keychain-env">${a.envVar?N`<code>$${a.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${rW(a.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${W0?" active":""}`}
                                        onClick=${()=>V0(a.name)}
                                        title=${W0?"Hide secret":"Reveal secret"}>
                                        ${W0?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${w===a.name?N`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>_0(a.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>J(null)}>No</button>
                                            </span>
                                        `:N`<button class="settings-keychain-delete-btn" onClick=${()=>J(a.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${a.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${h0}
                                                onInput=${(v0)=>Z0(a.name,"userNote",v0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${s0}
                                                onInput=${(v0)=>Z0(a.name,"agentNote",v0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!f0||o0} onClick=${()=>E0(a)}>
                                            ${o0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${P0&&N`
                                <tr class="settings-keychain-prompt-row" key=${a.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${c} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${X0?.masterPassword||""}
                                                onInput=${(v0)=>f((t0)=>({...t0,masterPassword:v0.target.value}))}
                                                onKeyDown=${(v0)=>{if(v0.key==="Enter")N0(a.name);if(v0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>N0(a.name)}
                                                disabled=${!X0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${X0?.error&&N`<span class="settings-keychain-prompt-error">${X0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${l0&&N`
                                <tr class="settings-keychain-prompt-row" key=${a.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${r} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${X0?.totpCode||""}
                                                onInput=${(v0)=>f((t0)=>({...t0,totpCode:v0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(v0)=>{if(v0.key==="Enter")h(a.name);if(v0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>h(a.name)}
                                                disabled=${(X0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${X0?.error&&N`<span class="settings-keychain-prompt-error">${X0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${W0&&N`
                                <tr class="settings-keychain-reveal-row" key=${a.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${X0.username&&N`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${X0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>j0(X0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${X0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>j0(X0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${u0&&N`
                                <tr class="settings-keychain-reveal-row" key=${a.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${X0.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var nW;var LV=O_(()=>{k0();nW=["secret","token","password","basic"]});var KV={};_1(KV,{ToolsSection:()=>tW});function tW({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=C(()=>{let F={};for(let B of Z)F[B.name]=!0;return F}),V=R((F)=>{Y((B)=>({...B,[F]:!B[F]}))},[]),q=j?.searchMatchMode||"or",Q=R(async()=>{let F=q==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:F})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(B){console.warn("[settings/tools] Failed to save search match mode.",B)}},[q,G]),L=$.toLowerCase(),K=Y0(()=>{if(!L)return Z;return Z.map((F)=>{let B=F.tools.filter((U)=>U.name.toLowerCase().includes(L)||F.name.toLowerCase().includes(L)||(U.summary||"").toLowerCase().includes(L));return B.length>0?{...F,tools:B}:null}).filter(Boolean)},[Z,L]);if(Z.length===0)return N`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return N`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${q==="and"} onChange=${Q} />
                        <span class="settings-hint" style="margin:0">
                            ${q==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${K.map((F)=>{let B=X[F.name]!==!1;return N`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${B} onChange=${()=>V(F.name)} />
                            <span class="settings-toolset-icon">${oW[F.name]||aW}</span>
                            <strong>${F.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${F.description}</span>
                    </div>
                    ${B&&N`<div class="settings-tool-list">${F.tools.map((U)=>N`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${sW[U.kind]||"?"}</span>
                            ${U.summary&&N`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${iW[U.name]||F.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${K.length===0&&N`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var oW,iW,sW,aW;var BV=O_(()=>{k0();oW={core:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},iW={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},sW={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},aW=N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var NV={};_1(NV,{AddonsSection:()=>eW});function eW({setStatus:_,filter:$=""}){let[j,G]=C(null),[Z,X]=C(!0),[Y,V]=C(null),[q,Q]=C(!1),[L,K]=C({runtime:"",windowsNative:!1}),[F,B]=C([]),[U,E]=C([]);function D(){let W=new URLSearchParams;try{let w=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),J=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((f)=>f.trim()).filter(Boolean),P=localStorage.getItem("piclaw_addons_repo_url");if(w)W.append("catalog_url",w);for(let f of J)W.append("catalog_url",f);if(P)W.set("repo_url",P)}catch(w){}let y=W.toString();return y?`?${y}`:""}let H=R(async()=>{try{let[W,y]=await Promise.all([fetch(`/agent/addons${D()}`),fetch("/agent/settings-data")]),w=await W.json();if(w.error)throw Error(w.error);G(w.addons||[]),B(w.sources||[]),E(w.failed_sources||[]);let J=await y.json().catch(()=>({})),P=typeof J?.runtimePlatform==="string"?J.runtimePlatform:"";K({runtime:P,windowsNative:P==="win32"})}catch(W){G(null),_?.(String(W.message||W),"error")}finally{X(!1)}},[_]);g(()=>{H()},[]);let k=R(async(W)=>{if(Y)return;V({slug:W,action:"install"}),_?.(`Installing ${W}…`,"info");try{let w=await(await fetch(`/agent/addons/install${D()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:W})})).json();if(w.error){_?.(w.error,"error");return}Q(!0);let J=[w.message,w.warning].filter(Boolean).join(" ");_?.(J||"Add-on installed.","success"),await H()}catch(y){_?.(String(y.message||y),"error")}finally{V(null)}},[Y,H,_]),z=R(async(W)=>{if(Y)return;V({slug:W,action:"remove"}),_?.(`Removing ${W}…`,"info");try{let w=await(await fetch(`/agent/addons/uninstall${D()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:W})})).json();if(w.error){_?.(w.error,"error");return}Q(!0);let J=[w.message,w.warning].filter(Boolean).join(" ");_?.(J||"Add-on removed.","success"),await H()}catch(y){_?.(String(y.message||y),"error")}finally{V(null)}},[Y,H,_]),O=R(async()=>{if(Y)return;V({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let y=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(y.error){_?.(y.error,"error"),V(null);return}_?.(y.message||"Restarting piclaw…","success"),Q(!1),(async(J=30,P=2000)=>{for(let f=0;f<J;f++){await new Promise((b)=>setTimeout(b,P));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await H(),V(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(b){}}V(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(W){_?.(String(W.message||W),"error"),V(null)}},[Y,_,H]);if(Z)return N`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return N`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let I=$.toLowerCase(),x=I?j.filter((W)=>W.slug.toLowerCase().includes(I)||(W.description||"").toLowerCase().includes(I)||(W.tags||[]).some((y)=>y.toLowerCase().includes(I))):j,A=Y?.slug||null,M=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return N`
        <div class=${`settings-section settings-addon-panel${Y?" busy":""}`} aria-busy=${Y?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${F.length<=1?N`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:N`${F.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${U.length>0&&N`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${U.length} catalog source${U.length>1?"s":""}:
                            ${U.map((W)=>N` <code style="font-size:0.82em;word-break:break-all">${W}</code>`)}
                        </div>
                    `}
                    ${F.length>1&&N`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${F.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${F.map((W)=>N`<li style="word-break:break-all"><code>${W}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${L.windowsNative&&N`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            ${Y&&N`
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${M}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${M}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${x.map((W)=>{let y=(W.skills||[]).length>0,w=W.type==="extension",J=y&&w?"extension + skill":y?"skill":"extension",P=y&&!w?"settings-tag-skill":"",f=typeof W.homepage==="string"&&W.homepage.trim()?W.homepage.trim():"";return N`
                    <div class=${`settings-addon-card${W.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${f?N`<a class="settings-addon-name-link" href=${f} target="_blank" rel="noopener noreferrer">${W.slug}</a>`:N`<strong>${W.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${P}`}>${J}</span>
                            <span class="settings-addon-version">${W.installed?W.installedVersion||"?":W.version||""}</span>
                            ${W.installKind&&N`<span class="settings-tag">${W.installKind}</span>`}
                            ${W.hasUpdate&&N`<span class="settings-tag settings-tag-skill">\u2191 ${W.version}</span>`}
                            <div class="settings-addon-actions">
                                ${W.installed?N`
                                    ${W.hasUpdate&&N`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>k(W.slug)}>${A===W.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>z(W.slug)}>${A===W.slug?"…":"Remove"}</button>
                                `:N`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>k(W.slug)}>${A===W.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${W.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(W.tags||[]).map((b)=>N`<span class="settings-tag">${b}</span>`)}${(W.skills||[]).map((b)=>N`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${b}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${x.length===0&&N`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${q&&N`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${O}>Restart Now</button>
                </div>
            `}
        </div>
    `}var FV=O_(()=>{k0()});var YO={};function M9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function a2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function _O(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function $O(_,$){try{localStorage.setItem(_,$)}catch(j){}}function jO(_,$,j,G){try{return z$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return z$($,{fallback:$,min:j,max:G})}}function GO(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function ZO(){let[_,$]=C(()=>M9("piclaw_vim_mode",!1)),[j,G]=C(()=>M9("piclaw_show_whitespace",!0)),[Z,X]=C(()=>M9("piclaw_md_live_preview",!0)),[Y,V]=C(()=>jO("piclaw_editor_font_size",13,10,24)),[q,Q]=C(()=>_O("piclaw_editor_font_family","")),L=R((K,F,B)=>{let U=!F;B(U),a2(K,U)},[]);return N`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let K=!_;$(K),a2("piclaw_vim_mode",K)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let K=!j;G(K),a2("piclaw_show_whitespace",K)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let K=!Z;X(K),a2("piclaw_md_live_preview",K)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${v_}
                    label="editor font size"
                    value=${Y}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(K)=>{V(K),GO("piclaw_editor_font_size",K)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${q}
                    onInput=${(K)=>{let F=K.target.value;Q(F),$O("piclaw_editor_font_family",F)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var XO;var UV=O_(()=>{k0();z5();P4();XO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;o$({id:"editor",label:"Editor",icon:XO,component:ZO,order:150})});var KO={};function DV(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function HV(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function VO(_,$,j,G){try{return z$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return z$($,{fallback:$,min:j,max:G})}}function qO(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function QO(){let[_,$]=C(()=>DV("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>VO("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=C(()=>DV("piclaw_mindmap_animate",!0));return N`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),HV("piclaw_mindmap_auto_expand",Y)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${v_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Y)=>{G(Y),qO("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),HV("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var LO;var EV=O_(()=>{k0();z5();P4();LO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;o$({id:"mindmap",label:"Mind Map",icon:LO,component:QO,order:170})});var FO={};function y9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function T9(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function w9(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function x9(_,$){try{localStorage.setItem(_,$)}catch(j){}}function BO(){let[_,$]=C(()=>y9("piclaw_dev_mode",!1)),[j,G]=C(()=>w9("piclaw_addons_catalog_url","")),[Z,X]=C(()=>w9("piclaw_addons_catalog_urls","")),[Y,V]=C(()=>w9("piclaw_addons_repo_url","")),[q,Q]=C(()=>y9("piclaw_debug_sse",!1)),[L,K]=C(()=>y9("piclaw_debug_tool_calls",!1)),F=R(()=>{let B=!_;$(B),T9("piclaw_dev_mode",B)},[_]);return N`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${F} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&N`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(B)=>{let U=B.target.value;G(U),x9("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(B)=>{let U=B.target.value;X(U),x9("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(B)=>{let U=B.target.value;V(U),x9("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${q}
                        onChange=${()=>{let B=!q;Q(B),T9("piclaw_debug_sse",B)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${L}
                        onChange=${()=>{let B=!L;K(B),T9("piclaw_debug_tool_calls",B)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var NO;var WV=O_(()=>{k0();z5();NO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;o$({id:"developer",label:"Developer",icon:NO,component:BO,order:900})});var kV={};_1(kV,{openSettingsDialog:()=>SO,SettingsDialogContent:()=>AV,SettingsDialog:()=>RO});function M6(_){k6.push({ts:performance.now(),label:_})}function UO(){if(!k6.length)return;let _=k6[0].ts,$=k6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}k6.length=0}function EO(_){let $=_8.get(_);if($)return Promise.resolve($);let j=t2.get(_);if(j)return j;let G=DO[_]().then((Z)=>{return _8.set(_,Z),t2.delete(_),Z}).catch((Z)=>{throw t2.delete(_),Z});return t2.set(_,G),G}function e2(_="Loading…"){return N`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function AV({onClose:_}){M6("SettingsDialogContent-render-start");let[$,j]=C(()=>X9()||"general"),[G,Z]=C(OV),[X,Y]=C(null),[V,q]=C(""),[,Q]=C(0),[L,K]=C(()=>Object.fromEntries(_8.entries())),[F,B]=C(null),[U,E]=C({compact:!1,narrow:!1}),D=u(null),H=u(null);g(()=>{M6("SettingsDialogContent-mounted"),UO()},[]),g(()=>{let J=(P)=>{if(P.key==="Escape")_()};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[_]),g(()=>{let J=(P)=>{let f=typeof P?.detail?.section==="string"?P.detail.section.trim():"";if(f)j(f),q("")};return window.addEventListener("piclaw:open-settings",J),()=>window.removeEventListener("piclaw:open-settings",J)},[]),g(()=>{let J=()=>Q((P)=>P+1);return window.addEventListener("piclaw:settings-panes-changed",J),()=>window.removeEventListener("piclaw:settings-panes-changed",J)},[]),g(()=>{fetch("/agent/settings-data").then((J)=>J.json()).then((J)=>{OV=J,Z(J)}).catch(()=>Z({}))},[]),g(()=>{let J=H.current;if(!J)return;let P=()=>{let f=J.clientWidth||0;E((b)=>{let c={compact:f>0&&f<=860,narrow:f>0&&f<=720};return b.compact===c.compact&&b.narrow===c.narrow?b:c})};if(P(),typeof ResizeObserver==="function"){let f=new ResizeObserver(()=>P());return f.observe(J),()=>f.disconnect()}return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);let k=[...JV].sort((J,P)=>(J.order??500)-(P.order??500)),O=BY().map((J)=>({id:J.id,label:J.label,icon:J.icon,searchable:J.searchable||!1,placeholder:J.searchPlaceholder,order:J.order??500,isExtension:!0,component:J.component})).sort(Y9),I=[...k,...O],x=I.find((J)=>J.id===$)||JV.find((J)=>J.id===$);g(()=>{if(x?.searchable)requestAnimationFrame(()=>D.current?.focus())},[$]),g(()=>{if(x?.isExtension){B(null);return}let J=!1;if(L[$]){B(null);return}return B($),EO($).then((P)=>{if(J)return;K((f)=>f?.[$]?f:{...f||{},[$]:P})}).catch((P)=>{if(J)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,P)}).finally(()=>{if(!J)B((P)=>P===$?null:P)}),()=>{J=!0}},[$,x?.isExtension,L]);let A=R((J,P="info")=>{Y(J?{text:J,type:P}:null)},[]),M=R((J)=>{j(J),q("");let P=HO[J];if(P&&!zV.has(J))zV.add(J),P().then(()=>Q((f)=>f+1)).catch((f)=>{})},[]),W=R((J)=>{Z((P)=>({...P||{},...J||{}}))},[]),y=()=>{if(x?.isExtension){if(!x.component)return e2("Loading pane…");let P=x.component;return N`<${P} filter=${V} />`}let J=L[$];if(!J||F===$)return e2(`Loading ${x?.label||"settings"}…`);switch($){case"general":return N`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"sessions":return N`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"compaction":return N`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"keyboard":return N`<${J} filter=${V} setStatus=${A} />`;case"workspace":return N`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"environment":return N`<${J} settingsData=${G} filter=${V} setStatus=${A} mergeSettingsData=${W} />`;case"providers":return N`<${J} providers=${G?.providers} setStatus=${A} />`;case"models":return N`<${J} filter=${V} />`;case"theme":return N`<${J} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"scheduled-tasks":return N`<${J} filter=${V} setStatus=${A} />`;case"quick-actions":return N`<${J} filter=${V} setStatus=${A} mergeSettingsData=${W} />`;case"keychain":return N`<${J} filter=${V} />`;case"tools":return N`<${J} toolsets=${G?.toolsets} filter=${V} settingsData=${G} mergeSettingsData=${W} />`;case"addons":return N`<${J} setStatus=${A} filter=${V} />`;default:return e2("Loading settings…")}},w=!x;return M6("SettingsDialogContent-render-end"),N`
        <div class="settings-dialog-backdrop" onClick=${(J)=>{if(J.target===J.currentTarget)_()}}>
            <div ref=${H} data-testid="settings-dialog" class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${x?.searchable&&N`
                        <input ref=${D} type="text" class="settings-header-filter"
                            placeholder=${x.placeholder||"Filter…"}
                            value=${V} onInput=${(J)=>q(J.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${I.map((J,P)=>{let f=P>0&&!I[P-1].isExtension,b=J.isExtension&&f;return N`
                                ${b&&N`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${J.id===$?"active":""}`} onClick=${()=>M(J.id)}>
                                    <span class="settings-nav-icon">${J.icon}</span>
                                    <span class="settings-nav-label">${J.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${w?e2("Loading settings…"):y()}
                    </main>
                </div>
                ${X&&N`
                    <div class=${`settings-status-bar settings-status-bar-${X.type}`}>
                        ${X.type==="info"&&N`<span class="settings-spinner"></span>`}
                        <span>${X.text}</span>
                        ${X.type!=="info"&&N`<button class="settings-status-dismiss" onClick=${()=>Y(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function RO(){let[_,$]=C(!1);if(g(()=>{let j=(Z)=>{let X=O5(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=v2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return N`<${d$} className="settings-portal"><${AV} onClose=${()=>$(!1)} /><//>`}function SO(_={}){i1(_)}var k6,OV=null,_8,t2,DO,HO,zV,WO,OO,zO,JO,AO,kO,MO,yO,TO,wO,xO,IO,CO,PO,fO,JV;var MV=O_(()=>{k0();m2();z5();JY();k6=[];M6("module-eval-start");M6("imports-done");_8=new Map,t2=new Map;_8.set("general",L9);DO={general:()=>Promise.resolve(L9),sessions:()=>Promise.resolve().then(() => (MY(),kY)).then((_)=>_.SessionsSection),recordings:()=>Promise.resolve().then(() => (TY(),yY)).then((_)=>_.RecordingsSection),compaction:()=>Promise.resolve().then(() => (xY(),wY)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (gY(),SY)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (hY(),cY)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (pY(),lY)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (nY(),rY)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (oY(),dY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (aY(),sY)).then((_)=>_.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (_V(),eY)).then((_)=>_.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (qV(),VV)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (LV(),QV)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (BV(),KV)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (FV(),NV)).then((_)=>_.AddonsSection)},HO={"editor-settings":()=>Promise.resolve().then(() => (UV(),YO)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (EV(),KO)).then(()=>{}),developer:()=>Promise.resolve().then(() => (WV(),FO)).then(()=>{})},zV=new Set;WO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,OO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,zO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,JO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,AO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,kO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,MO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,yO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,TO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,wO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,xO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,IO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,CO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,PO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,fO=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,JV=[{id:"general",label:"General",icon:WO,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:OO,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:zO,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:JO,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:MO,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:AO,searchable:!1,order:15},{id:"environment",label:"Environment",icon:kO,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:yO,searchable:!1,order:20},{id:"models",label:"Models",icon:TO,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:wO,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:xO,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:CO,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:PO,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:IO,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:fO,searchable:!0,placeholder:"Filter add-ons…",order:90}]});k0();class SG{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var Y_=new SG;var Y2=null,J3=null;function VU(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function gG(){if(J3)return Promise.resolve(J3);if(!Y2)Y2=import(VU()).then((_)=>{return J3=_,_}).catch((_)=>{throw Y2=null,_});return Y2}class uG{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await gG();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var A3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new uG(_,$)}};function k3(){gG().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function bG(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function V2(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var vG="piclaw:editor-popout:",qU=300000;function mG(_){try{return _?.localStorage??null}catch{return null}}function QU(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function cG(_){return typeof _==="string"?_.trim():""}function hG(_){return(typeof _==="string"?_.trim():"")||null}function lG(_){return typeof _==="string"?_:void 0}function pG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function rG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function Z5(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function LU(_,$=globalThis,j=Date.now()){let G=mG($),Z=cG(_?.path);if(!G||!Z)return null;let X={path:Z,content:lG(_?.content),mtime:pG(_?.mtime),paneOverrideId:hG(_?.paneOverrideId),viewState:rG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let V=QU(j);try{return G.setItem(`${vG}${V}`,JSON.stringify(X)),V}catch{return null}}function M3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=mG($);if(!G||!Z)return null;let X=`${vG}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;V2(Z,X);try{let V=JSON.parse(Y),q=typeof V?.capturedAt==="number"&&Number.isFinite(V.capturedAt)?V.capturedAt:j;if(q+qU<j)return null;let Q=cG(V?.path);if(!Q)return null;return{path:Q,content:lG(V?.content),mtime:pG(V?.mtime),paneOverrideId:hG(V?.paneOverrideId),viewState:rG(V?.viewState),capturedAt:q}}catch{return null}}function q2(_,$=globalThis,j=Date.now()){let G=LU(_,$,j);return G?{editor_popout:G}:null}function T1(_){try{return _(),!0}catch($){return!1}}function nG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:V,resizeObserver:q}=_;T1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),T1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),T1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),T1(()=>{V?.disconnect?.()}),T1(()=>{q?.disconnect?.()})}function dG(_){_.syncHostLayout(),T1(()=>{_.terminal?.renderer?.remeasureFont?.()}),T1(()=>{_.fitAddon?.fit?.()}),T1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function oG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)T1(()=>{j($)});return T1(()=>{G?.close?.()}),T1(()=>{Z?.dispose?.()}),T1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function l1(_){try{return _(),!0}catch($){return!1}}function iG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:V}=_;if(l1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let q=j?.querySelector?.(".terminal-live-host");if(q&&typeof q==="object"&&"style"in q)q.style.backgroundColor=Z.background,q.style.color=Z.foreground;let Q=j?.querySelector?.("canvas");if(Q&&typeof Q==="object"&&"style"in Q)Q.style.backgroundColor=Z.background,Q.style.color=Z.foreground}),l1(()=>{if(G?.options)G.options.theme=Z}),X)l1(()=>{G?.reset?.()});l1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),l1(()=>{G?.loadFonts?.()}),l1(()=>{G?.renderer?.remeasureFont?.()}),l1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),l1(()=>{V?.()}),l1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),l1(()=>{G?.refresh?.()})}var KU="/static/js/vendor/ghostty-web.js",BU="/static/js/vendor/ghostty-vt.wasm",Y5="piclaw://terminal",NU='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',FU='400 13px "FiraCode Nerd Font Mono"',UU='700 13px "FiraCode Nerd Font Mono"',$Z="x-piclaw-terminal-client",sG="piclaw_terminal_client",DU={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},HU={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},Q2=null,y3=null;function EU(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function WU(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(BU,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!EU(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function OU(){let $=await import(new URL(KU,window.location.origin).href);if(!Q2)Q2=WU(()=>Promise.resolve($.init?.())).catch((j)=>{throw Q2=null,j});return await Q2,$}async function zU(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!y3)y3=Promise.allSettled([document.fonts.load(FU),document.fonts.load(UU),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await y3}function aG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function w3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(sG)||"").trim():"";if(j)return j;let G=aG(_);return $?.setItem?.(sG,G),G}catch($){return aG(_)}}async function JU(_=w3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[$Z]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function AU(_=w3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[$Z]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function kU(_,$=null,j=w3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function MU(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function U4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function X5(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function tG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function d5(_,$){let j=tG(_),G=tG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function jZ(_){let $=X5(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return d5($,j)>=d5($,G)?"#ffffff":"#000000"}function L2(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function eG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function G1(_,$,j=4.5){let G=X5(_),Z=X5($);if(!G||!Z)return $;if(d5(G,Z)>=j)return L2(Z);let X=X5(jZ(_));if(!X)return L2(Z);let Y=X,V=1,q=0,Q=1;for(let F=0;F<14;F+=1){let B=(q+Q)/2,U=eG(Z,X,B);if(d5(G,U)>=j)Y=U,V=B,Q=B;else q=B}let L=L2(Y),K=X5(L);while(K&&d5(G,K)<j&&V<1)V=Math.min(1,V+0.01),L=L2(eG(Z,X,V)),K=X5(L);return L}function yU(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function _Z(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=MU(_,$),G=j?HU:DU,Z=U4("--bg-primary",j?"#000000":"#ffffff",$),X=U4("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=G1(Z,X||jZ(Z),7),V=U4("--accent-color","#1d9bf0",$),q=U4("--danger-color",j?"#ff7b72":"#cf222e",$),Q=U4("--success-color",j?"#7ee787":"#1a7f37",$),L=U4("--bg-hover",j?"#1d1f23":"#e8ebed",$),K=U4("--accent-soft-strong",yU(V,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:G1(Z,V,3),cursorAccent:Z,selectionBackground:K,selectionForeground:Y,black:G1(Z,L,3),red:G1(Z,q,4.5),green:G1(Z,Q,4.5),yellow:G1(Z,G.yellow,4.5),blue:G1(Z,V,4.5),magenta:G1(Z,G.magenta,4.5),cyan:G1(Z,G.cyan,4.5),white:Y,brightBlack:G1(Z,G.brightBlack,3),brightRed:G1(Z,G.brightRed,4.5),brightGreen:G1(Z,G.brightGreen,4.5),brightYellow:G1(Z,G.brightYellow,4.5),brightBlue:G1(Z,G.brightBlue,4.5),brightMagenta:G1(Z,G.brightMagenta,4.5),brightCyan:G1(Z,G.brightCyan,4.5),brightWhite:Y}}function GZ(_){let $=_?.activeElement;if(!$||$===_?.body||$===_?.documentElement)return!1;if(typeof $.blur!=="function")return!1;return $.blur(),!0}function T3(_,$){let j=[_?.inputElement,_?.textarea,_?.container,$,$?.querySelector?.("textarea")].filter((G,Z,X)=>Boolean(G)&&X.indexOf(G)===Z);for(let G of j)try{let Z=G.ownerDocument?.defaultView||window,X=typeof Z.CompositionEvent==="function"?new Z.CompositionEvent("compositionend",{data:""}):new Z.Event("compositionend");G.dispatchEvent?.(X)}catch(Z){console.debug("[terminal-pane] Failed to dispatch best-effort IME composition reset.",Z)}if(_&&typeof _==="object")_.isComposing=!1,_.pendingKeyAfterComposition=null,_.compositionJustEnded=!1}function TU(_){if(GZ(_.ownerDocument),T3(_.terminal,_.terminalHost||null),typeof _.terminal?.focus==="function")_.terminal.focus();else _.termEl?.focus?.();T3(_.terminal,_.terminalHost||null)}class x3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=Z5("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.termEl.setAttribute("inputmode","none"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await OU();if(await zU(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",$.setAttribute("inputmode","none"),this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:NU,fontSize:13,theme:_Z(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);GZ(this.ownerDocument),await j.open($),$.__terminal=j,T3(j,$),this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=_Z(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;iG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=AU().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await JU();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(kU($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){nG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){let _=this.bodyEl.querySelector(".terminal-live-host");TU({terminal:this.terminal,terminalHost:_,termEl:this.termEl,ownerDocument:this.ownerDocument})}resize(){dG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=oG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var I3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new x3(_,$)}},C3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===Y5?1e4:!1},mount(_,$){return new x3(_,$)}};function R1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function K2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function ZZ(_,$={}){if(R1($))return null;if(K2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:wU(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function P3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function f3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let V=_.document.createElement("p");if(V.setAttribute("style","margin: 0; line-height: 1.5;"),V.textContent=G,X.appendChild(Y),X.appendChild(V),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function R3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function S3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function w1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function g3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function XZ(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,V]of Object.entries(X)){let q=String(Y||"").trim();if(!q)continue;if(V===null||V===void 0||V==="")G.searchParams.delete(q);else G.searchParams.set(q,String(V))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function wU(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function xU(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function YZ(_,$={}){if(R1($))return null;if(K2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:xU(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function D4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function IU(_){try{return JSON.parse(_)}catch{return null}}function CU(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function PU(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function VZ(_){try{return _?.close?.(),!0}catch($){return!1}}class u3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;VZ(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=PU($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||IU;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,VZ(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=CU($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var o5=()=>{throw Error("Operation requires compiling with --exportRuntime")},fU=typeof BigUint64Array<"u",i5=Symbol();var RU=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function qZ(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return RU.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function QZ(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return qZ(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,V,q){let Q=$.memory||G.memory;throw Error(`abort: ${j(Q,X)} at ${j(Q,Y)}:${V}:${q}`)},G.trace=G.trace||function(X,Y,...V){let q=$.memory||G.memory;console.log(`trace: ${j(q,X)}${Y?" ":""}${V.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function LZ(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||o5,Y=j.__pin||o5,V=j.__unpin||o5,q=j.__collect||o5,Q=j.__rtti_base,L=Q?(y)=>y[Q>>>2]:o5;_.__new=X,_.__pin=Y,_.__unpin=V,_.__collect=q;function K(y){let w=new Uint32Array(G.buffer);if((y>>>=0)>=L(w))throw Error(`invalid id: ${y}`);return w[(Q+4>>>2)+y]}function F(y){let w=K(y);if(!(w&7))throw Error(`not an array: ${y}, flags=${w}`);return w}function B(y){return 31-Math.clz32(y>>>6&31)}function U(y){if(y==null)return 0;let w=y.length,J=X(w<<1,2),P=new Uint16Array(G.buffer);for(let f=0,b=J>>>1;f<w;++f)P[b+f]=y.charCodeAt(f);return J}_.__newString=U;function E(y){if(y==null)return 0;let w=new Uint8Array(y),J=X(w.length,1);return new Uint8Array(G.buffer).set(w,J),J}_.__newArrayBuffer=E;function D(y){if(!y)return null;let w=G.buffer;if(new Uint32Array(w)[y+-8>>>2]!==2)throw Error(`not a string: ${y}`);return qZ(w,y)}_.__getString=D;function H(y,w,J){let P=G.buffer;if(J)switch(y){case 2:return new Float32Array(P);case 3:return new Float64Array(P)}else switch(y){case 0:return new(w?Int8Array:Uint8Array)(P);case 1:return new(w?Int16Array:Uint16Array)(P);case 2:return new(w?Int32Array:Uint32Array)(P);case 3:return new(w?BigInt64Array:BigUint64Array)(P)}throw Error(`unsupported align: ${y}`)}function k(y,w=0){let J=w,P=F(y),f=B(P),b=typeof J!=="number",c=b?J.length:J,r=X(c<<f,P&4?y:1),e;if(P&4)e=r;else{Y(r);let m=X(P&2?16:12,y);V(r);let _0=new Uint32Array(G.buffer);if(_0[m+0>>>2]=r,_0[m+4>>>2]=r,_0[m+8>>>2]=c<<f,P&2)_0[m+12>>>2]=c;e=m}if(b){let m=H(f,P&2048,P&4096),_0=r>>>f;if(P&16384)for(let E0=0;E0<c;++E0)m[_0+E0]=J[E0];else m.set(J,_0)}return e}_.__newArray=k;function z(y){let w=new Uint32Array(G.buffer),J=w[y+-8>>>2],P=F(J),f=B(P),b=P&4?y:w[y+4>>>2],c=P&2?w[y+12>>>2]:w[b+-4>>>2]>>>f;return H(f,P&2048,P&4096).subarray(b>>>=f,b+c)}_.__getArrayView=z;function O(y){let w=z(y),J=w.length,P=Array(J);for(let f=0;f<J;f++)P[f]=w[f];return P}_.__getArray=O;function I(y){let w=G.buffer,J=new Uint32Array(w)[y+-4>>>2];return w.slice(y,y+J)}_.__getArrayBuffer=I;function x(y){if(!Z)throw Error("Operation requires compiling with --exportTable");let w=new Uint32Array(G.buffer)[y>>>2];return Z.get(w)}_.__getFunction=x;function A(y,w,J){return new y(M(y,w,J))}function M(y,w,J){let P=G.buffer,f=new Uint32Array(P);return new y(P,f[J+4>>>2],f[J+8>>>2]>>>w)}function W(y,w,J){_[`__get${w}`]=A.bind(null,y,J),_[`__get${w}View`]=M.bind(null,y,J)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((y)=>{W(y,y.name,31-Math.clz32(y.BYTES_PER_ELEMENT))}),fU)[BigUint64Array,BigInt64Array].forEach((y)=>{W(y,y.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,gU(j,_)}function KZ(_){return typeof Response<"u"&&_ instanceof Response}function SU(_){return _ instanceof WebAssembly.Module}async function b3(_,$={}){if(KZ(_=await _))return B2(_,$);let j=SU(_)?_:await WebAssembly.compile(_),G=QZ($),Z=await WebAssembly.instantiate(j,$),X=LZ(G,Z);return{module:j,instance:Z,exports:X}}async function B2(_,$={}){if(!WebAssembly.instantiateStreaming)return b3(KZ(_=await _)?_.arrayBuffer():_,$);let j=QZ($),G=await WebAssembly.instantiateStreaming(_,$),Z=LZ(j,G.instance);return{...G,exports:Z}}function gU(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let Q=X.shift();if(!Object.hasOwn(Y,Q))Y[Q]={};Y=Y[Q]}let V=X[0],q=V.indexOf("#");if(q>=0){let Q=V.substring(0,q),L=Y[Q];if(typeof L>"u"||!L.prototype){let K=function(...F){return K.wrap(K.prototype.constructor(0,...F))};if(K.prototype={valueOf(){return this[i5]}},K.wrap=function(F){return Object.create(K.prototype,{[i5]:{value:F,writable:!1}})},L)Object.getOwnPropertyNames(L).forEach((F)=>Object.defineProperty(K,F,Object.getOwnPropertyDescriptor(L,F)));Y[Q]=K}if(V=V.substring(q+1),Y=Y[Q].prototype,/^(get|set):/.test(V)){if(!Object.hasOwn(Y,V=V.substring(4))){let K=_[G.replace("set:","get:")],F=_[G.replace("get:","set:")];Object.defineProperty(Y,V,{get(){return K(this[i5])},set(B){F(this[i5],B)},enumerable:!0})}}else if(V==="constructor")(Y[V]=function(...K){return j(K.length),Z(...K)}).original=Z;else(Y[V]=function(...K){return j(K.length),Z(this[i5],...K)}).original=Z}else if(/^(get|set):/.test(V)){if(!Object.hasOwn(Y,V=V.substring(4)))Object.defineProperty(Y,V,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[V]=(...Q)=>{return j(Q.length),Z(...Q)}).original=Z;else Y[V]=Z}return $}function v3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var bU="/static/js/vendor/remote-display-decoder.wasm",N2=null;function BZ(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function NZ(){if(N2)return N2;return N2=(async()=>{try{let G=function(Z,X,Y,V,q,Q,L){let K=BZ(X),F=j.__pin(j.__newArrayBuffer(K));try{return j[Z](F,Y,V,q,Q,L.bitsPerPixel,L.bigEndian?1:0,L.trueColor?1:0,L.redMax,L.greenMax,L.blueMax,L.redShift,L.greenShift,L.blueShift)}finally{j.__unpin(F),v3(j)}},_=await fetch(bU,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof B2==="function"?await B2(_,{}):await b3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,V,q,Q){return G("processRawRect",Z,X,Y,V,q,Q)},processCopyRect(Z,X,Y,V,q,Q){return j.processCopyRect(Z,X,Y,V,q,Q)},processRreRect(Z,X,Y,V,q,Q){return G("processRreRect",Z,X,Y,V,q,Q)},processHextileRect(Z,X,Y,V,q,Q){return G("processHextileRect",Z,X,Y,V,q,Q)},processZrleTileData(Z,X,Y,V,q,Q){return G("processZrleTileData",Z,X,Y,V,q,Q)},decodeRawRectToRgba(Z,X,Y,V){let q=BZ(Z),Q=j.__pin(j.__newArrayBuffer(q));try{let L=j.__pin(j.decodeRawRectToRgba(Q,X,Y,V.bitsPerPixel,V.bigEndian?1:0,V.trueColor?1:0,V.redMax,V.greenMax,V.blueMax,V.redShift,V.greenShift,V.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(L))}finally{j.__unpin(L)}}finally{j.__unpin(Q),v3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),N2}function V5(_,$,j){return Math.max($,Math.min(j,_))}function F2(_,$,j){let G=new Uint8Array(6),Z=V5(Math.floor(Number($||0)),0,65535),X=V5(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=V5(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function c$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function c3(_){let $=c$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return c$(0);let G=Number(_?.buttons||0);if(G&1)return c$(0);if(G&4)return c$(1);if(G&2)return c$(2);return 0}function H4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if($==="pointerleave"||$==="pointerout")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function FZ(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function p1(_){return String(_||"").toLowerCase()==="touch"}function vU(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function h3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return vU(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function UZ(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!h3(_)}function DZ(_){return String(_||"").toLowerCase()!=="mouse"}function l3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),V=Math.max(1,Number(j?.width||0)),q=Math.max(1,Number(j?.height||0)),Q=(Number(_||0)-Number(j?.left||0))/V,L=(Number($||0)-Number(j?.top||0))/q;return{x:V5(Math.floor(Q*X),0,Math.max(0,X-1)),y:V5(Math.floor(L*Y),0,Math.max(0,Y-1))}}function HZ(_,$,j,G=0){let Z=Number(_)<0?8:16,X=V5(Number(G||0)|Z,0,255);return[F2(X,$,j),F2(Number(G||0),$,j)]}function EZ(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function WZ(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function E4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function OZ(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),V=Math.max(1,Math.floor(Number(G||0))),q=Math.min(Z/Y,X/V);if(!Number.isFinite(q)||q<=0)return 1;return Math.max(0.01,q)}var m3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)m3[`F${_}`]=65470+(_-1);function p3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(m3,X))return m3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var d_=Uint8Array,E1=Uint16Array,e3=Int32Array,U2=new d_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),D2=new d_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),i3=new d_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kZ=function(_,$){var j=new E1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new e3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},MZ=kZ(U2,2),yZ=MZ.b,s3=MZ.r;yZ[28]=258,s3[258]=28;var TZ=kZ(D2,0),mU=TZ.b,zZ=TZ.r,a3=new E1(32768);for(L_=0;L_<32768;++L_)r1=(L_&43690)>>1|(L_&21845)<<1,r1=(r1&52428)>>2|(r1&13107)<<2,r1=(r1&61680)>>4|(r1&3855)<<4,a3[L_]=((r1&65280)>>8|(r1&255)<<8)>>1;var r1,L_,n1=function(_,$,j){var G=_.length,Z=0,X=new E1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new E1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var V;if(j){V=new E1(1<<$);var q=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var Q=Z<<4|_[Z],L=$-_[Z],K=Y[_[Z]-1]++<<L;for(var F=K|(1<<L)-1;K<=F;++K)V[a3[K]>>q]=Q}}else{V=new E1(G);for(Z=0;Z<G;++Z)if(_[Z])V[Z]=a3[Y[_[Z]-1]++]>>15-_[Z]}return V},h$=new d_(288);for(L_=0;L_<144;++L_)h$[L_]=8;var L_;for(L_=144;L_<256;++L_)h$[L_]=9;var L_;for(L_=256;L_<280;++L_)h$[L_]=7;var L_;for(L_=280;L_<288;++L_)h$[L_]=8;var L_,e5=new d_(32);for(L_=0;L_<32;++L_)e5[L_]=5;var L_,cU=n1(h$,9,0),hU=n1(h$,9,1),lU=n1(e5,5,0),pU=n1(e5,5,1),r3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},S1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},n3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},_7=function(_){return(_+7)/8|0},t5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new d_(_.subarray($,j))};var rU=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],B1=function(_,$,j){var G=Error($||rU[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,B1);if(!j)throw G;return G},nU=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new d_(0);var Y=!j,V=Y||$.i!=2,q=$.i;if(Y)j=new d_(Z*3);var Q=function(X0){var W0=j.length;if(X0>W0){var P0=new d_(Math.max(W0*2,X0));P0.set(j),j=P0}},L=$.f||0,K=$.p||0,F=$.b||0,B=$.l,U=$.d,E=$.m,D=$.n,H=Z*8;do{if(!B){L=S1(_,K,1);var k=S1(_,K+1,3);if(K+=3,!k){var z=_7(K)+4,O=_[z-4]|_[z-3]<<8,I=z+O;if(I>Z){if(q)B1(0);break}if(V)Q(F+O);j.set(_.subarray(z,I),F),$.b=F+=O,$.p=K=I*8,$.f=L;continue}else if(k==1)B=hU,U=pU,E=9,D=5;else if(k==2){var x=S1(_,K,31)+257,A=S1(_,K+10,15)+4,M=x+S1(_,K+5,31)+1;K+=14;var W=new d_(M),y=new d_(19);for(var w=0;w<A;++w)y[i3[w]]=S1(_,K+w*3,7);K+=A*3;var J=r3(y),P=(1<<J)-1,f=n1(y,J,1);for(var w=0;w<M;){var b=f[S1(_,K,P)];K+=b&15;var z=b>>4;if(z<16)W[w++]=z;else{var c=0,r=0;if(z==16)r=3+S1(_,K,3),K+=2,c=W[w-1];else if(z==17)r=3+S1(_,K,7),K+=3;else if(z==18)r=11+S1(_,K,127),K+=7;while(r--)W[w++]=c}}var e=W.subarray(0,x),m=W.subarray(x);E=r3(e),D=r3(m),B=n1(e,E,1),U=n1(m,D,1)}else B1(1);if(K>H){if(q)B1(0);break}}if(V)Q(F+131072);var _0=(1<<E)-1,E0=(1<<D)-1,Z0=K;for(;;Z0=K){var c=B[n3(_,K)&_0],$0=c>>4;if(K+=c&15,K>H){if(q)B1(0);break}if(!c)B1(2);if($0<256)j[F++]=$0;else if($0==256){Z0=K,B=null;break}else{var V0=$0-254;if($0>264){var w=$0-257,N0=U2[w];V0=S1(_,K,(1<<N0)-1)+yZ[w],K+=N0}var h=U[n3(_,K)&E0],j0=h>>4;if(!h)B1(3);K+=h&15;var m=mU[j0];if(j0>3){var N0=D2[j0];m+=n3(_,K)&(1<<N0)-1,K+=N0}if(K>H){if(q)B1(0);break}if(V)Q(F+131072);var Q0=F+V0;if(F<m){var O0=X-m,a=Math.min(m,Q0);if(O0+F<0)B1(3);for(;F<a;++F)j[F]=G[O0+F]}for(;F<Q0;++F)j[F]=j[F-m]}}if($.l=B,$.p=Z0,$.b=F,$.f=L,B)L=1,$.m=E,$.d=U,$.n=D}while(!L);return F!=j.length&&Y?t5(j,0,F):j.subarray(0,F)},N$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},s5=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},d3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:xZ,l:0};if(Z==1){var Y=new d_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(I,x){return I.f-x.f}),j.push({s:-1,f:25001});var V=j[0],q=j[1],Q=0,L=1,K=2;j[0]={s:-1,f:V.f+q.f,l:V,r:q};while(L!=Z-1)V=j[j[Q].f<j[K].f?Q++:K++],q=j[Q!=L&&j[Q].f<j[K].f?Q++:K++],j[L++]={s:-1,f:V.f+q.f,l:V,r:q};var F=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>F)F=X[G].s;var B=new E1(F+1),U=t3(j[L-1],B,0);if(U>$){var G=0,E=0,D=U-$,H=1<<D;X.sort(function(x,A){return B[A.s]-B[x.s]||x.f-A.f});for(;G<Z;++G){var k=X[G].s;if(B[k]>$)E+=H-(1<<U-B[k]),B[k]=$;else break}E>>=D;while(E>0){var z=X[G].s;if(B[z]<$)E-=1<<$-B[z]++-1;else++G}for(;G>=0&&E;--G){var O=X[G].s;if(B[O]==$)--B[O],++E}U=$}return{t:new d_(B),l:U}},t3=function(_,$,j){return _.s==-1?Math.max(t3(_.l,$,j+1),t3(_.r,$,j+1)):$[_.s]=j},JZ=function(_){var $=_.length;while($&&!_[--$]);var j=new E1(++$),G=0,Z=_[0],X=1,Y=function(q){j[G++]=q};for(var V=1;V<=$;++V)if(_[V]==Z&&V!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[V]}return{c:j.subarray(0,G),n:$}},a5=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},wZ=function(_,$,j){var G=j.length,Z=_7($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},AZ=function(_,$,j,G,Z,X,Y,V,q,Q,L){N$($,L++,j),++Z[256];var K=d3(Z,15),F=K.t,B=K.l,U=d3(X,15),E=U.t,D=U.l,H=JZ(F),k=H.c,z=H.n,O=JZ(E),I=O.c,x=O.n,A=new E1(19);for(var M=0;M<k.length;++M)++A[k[M]&31];for(var M=0;M<I.length;++M)++A[I[M]&31];var W=d3(A,7),y=W.t,w=W.l,J=19;for(;J>4&&!y[i3[J-1]];--J);var P=Q+5<<3,f=a5(Z,h$)+a5(X,e5)+Y,b=a5(Z,F)+a5(X,E)+Y+14+3*J+a5(A,y)+2*A[16]+3*A[17]+7*A[18];if(q>=0&&P<=f&&P<=b)return wZ($,L,_.subarray(q,q+Q));var c,r,e,m;if(N$($,L,1+(b<f)),L+=2,b<f){c=n1(F,B,0),r=F,e=n1(E,D,0),m=E;var _0=n1(y,w,0);N$($,L,z-257),N$($,L+5,x-1),N$($,L+10,J-4),L+=14;for(var M=0;M<J;++M)N$($,L+3*M,y[i3[M]]);L+=3*J;var E0=[k,I];for(var Z0=0;Z0<2;++Z0){var $0=E0[Z0];for(var M=0;M<$0.length;++M){var V0=$0[M]&31;if(N$($,L,_0[V0]),L+=y[V0],V0>15)N$($,L,$0[M]>>5&127),L+=$0[M]>>12}}}else c=cU,r=h$,e=lU,m=e5;for(var M=0;M<V;++M){var N0=G[M];if(N0>255){var V0=N0>>18&31;if(s5($,L,c[V0+257]),L+=r[V0+257],V0>7)N$($,L,N0>>23&31),L+=U2[V0];var h=N0&31;if(s5($,L,e[h]),L+=m[h],h>3)s5($,L,N0>>5&8191),L+=D2[h]}else s5($,L,c[N0]),L+=r[N0]}return s5($,L,c[256]),L+r[256]},dU=new e3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),xZ=new d_(0),oU=function(_,$,j,G,Z,X){var Y=X.z||_.length,V=new d_(G+Y+5*(1+Math.ceil(Y/7000))+Z),q=V.subarray(G,V.length-Z),Q=X.l,L=(X.r||0)&7;if($){if(L)q[0]=X.r>>3;var K=dU[$-1],F=K>>13,B=K&8191,U=(1<<j)-1,E=X.p||new E1(32768),D=X.h||new E1(U+1),H=Math.ceil(j/3),k=2*H,z=function(l0){return(_[l0]^_[l0+1]<<H^_[l0+2]<<k)&U},O=new e3(25000),I=new E1(288),x=new E1(32),A=0,M=0,W=X.i||0,y=0,w=X.w||0,J=0;for(;W+2<Y;++W){var P=z(W),f=W&32767,b=D[P];if(E[f]=b,D[P]=f,w<=W){var c=Y-W;if((A>7000||y>24576)&&(c>423||!Q)){L=AZ(_,q,0,O,I,x,M,y,J,W-J,L),y=A=M=0,J=W;for(var r=0;r<286;++r)I[r]=0;for(var r=0;r<30;++r)x[r]=0}var e=2,m=0,_0=B,E0=f-b&32767;if(c>2&&P==z(W-E0)){var Z0=Math.min(F,c)-1,$0=Math.min(32767,W),V0=Math.min(258,c);while(E0<=$0&&--_0&&f!=b){if(_[W+e]==_[W+e-E0]){var N0=0;for(;N0<V0&&_[W+N0]==_[W+N0-E0];++N0);if(N0>e){if(e=N0,m=E0,N0>Z0)break;var h=Math.min(E0,N0-2),j0=0;for(var r=0;r<h;++r){var Q0=W-E0+r&32767,O0=E[Q0],a=Q0-O0&32767;if(a>j0)j0=a,b=Q0}}}f=b,b=E[f],E0+=f-b&32767}}if(m){O[y++]=268435456|s3[e]<<18|zZ[m];var X0=s3[e]&31,W0=zZ[m]&31;M+=U2[X0]+D2[W0],++I[257+X0],++x[W0],w=W+e,++A}else O[y++]=_[W],++I[_[W]]}}for(W=Math.max(W,w);W<Y;++W)O[y++]=_[W],++I[_[W]];if(L=AZ(_,q,Q,O,I,x,M,y,J,W-J,L),!Q)X.r=L&7|q[L/8|0]<<3,L-=7,X.h=D,X.p=E,X.i=W,X.w=w}else{for(var W=X.w||0;W<Y+Q;W+=65535){var P0=W+65535;if(P0>=Y)q[L/8|0]=Q,P0=Y;L=wZ(q,L+1,_.subarray(W,P0))}X.i=Y}return t5(V,0,G+_7(L)+Z)};var IZ=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var V=Math.min(Y+2655,X);for(;Y<V;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},iU=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new d_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return oU(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var CZ=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var sU=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=IZ();Z.p($.dictionary),CZ(_,2,Z.d())}},aU=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)B1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)B1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var o3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new d_(32768),this.p=new d_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)B1(5);if(this.d)B1(4);if(!this.p.length)this.p=$;else if($.length){var j=new d_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=nU(this.p,this.s,this.o);this.ondata(t5(G,j,this.s.b),this.d),this.o=t5(G,this.s.b-32768),this.s.b=this.o.length,this.p=t5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function PZ(_,$){if(!$)$={};var j=IZ();j.p(_);var G=iU(_,$,$.dictionary?6:2,4);return sU(G,$),CZ(G,G.length-4,j.d()),G}var fZ=function(){function _($,j){o3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(o3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(aU(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)B1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}o3.prototype.c.call(this,j)},_}();var tU=typeof TextDecoder<"u"&&new TextDecoder,eU=0;try{tU.decode(xZ,{stream:!0}),eU=1}catch(_){}var _D=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],$D=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],jD=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],GD=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],ZD=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],XD=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],YD=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],VD=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],gZ=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;gZ[_]=$}function uZ(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function bZ(_){let $=0n,j=uZ(_);for(let G of j)$=$<<8n|BigInt(G);return $}function qD(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function q5(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function RZ(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function QD(_){let $=q5(bZ(_),ZD,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of YD){j=RZ(j,X),G=RZ(G,X);let Y=j<<28n|G;Z.push(q5(Y,XD,56))}return Z}function LD(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(VD[j][X][Y])}return $}function KD(_,$){let j=q5(_,jD,32)^BigInt($),G=LD(j);return q5(G,GD,32)}function SZ(_,$){let j=QD($),G=q5(bZ(_),_D,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let V of j){let q=X,Q=(Z^KD(X,V))&0xffffffffn;Z=q,X=Q}let Y=X<<32n|Z;return qD(q5(Y,$D,64),8)}function BD(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=gZ[Z]}return j}function vZ(_,$){let j=uZ($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=BD(_),Z=new Uint8Array(16);return Z.set(SZ(j.slice(0,8),G),0),Z.set(SZ(j.slice(8,16),G),8),Z}var g1="vnc";function ND(_){return Number(_)}function FD(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=ND(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function K5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function UD(_,$){let j=K5(_),G=K5($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function DD(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=K5(Z);j.set(X,G),G+=X.byteLength}return j}function HD(){return(_)=>{let $=K5(_);try{let j=[],G=new fZ((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return DD(j)}catch(j){try{let G=PZ($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function ED(_){return new TextEncoder().encode(String(_||""))}function Q5(_){return new TextDecoder().decode(K5(_))}function WD(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function OD(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function mZ(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function zD(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function JD(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function cZ(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function L5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function lZ(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function AD(_,$,j,G){let Z=G||B5,X=K5(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),V=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<V)throw Error(`Incomplete raw rectangle payload: expected ${V} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let q=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),Q=0,L=0;for(let K=0;K<Math.max(0,$||0)*Math.max(0,j||0);K+=1){let F=lZ(X,Q,Y,Z.bigEndian),B=L5(F>>>Z.redShift&Z.redMax,Z.redMax),U=L5(F>>>Z.greenShift&Z.greenMax,Z.greenMax),E=L5(F>>>Z.blueShift&Z.blueMax,Z.blueMax);q[L]=B,q[L+1]=U,q[L+2]=E,q[L+3]=255,Q+=Y,L+=4}return q}function F$(_,$,j){let G=j||B5,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=lZ(_,$,Z,G.bigEndian);return{rgba:[L5(X>>>G.redShift&G.redMax,G.redMax),L5(X>>>G.greenShift&G.greenMax,G.greenMax),L5(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function l$(_,$,j,G,Z,X,Y){if(!Y)return;for(let V=0;V<X;V+=1)for(let q=0;q<Z;q+=1){let Q=((G+V)*$+(j+q))*4;_[Q]=Y[0],_[Q+1]=Y[1],_[Q+2]=Y[2],_[Q+3]=Y[3]}}function pZ(_,$,j,G,Z,X,Y){for(let V=0;V<X;V+=1){let q=V*Z*4,Q=((G+V)*$+j)*4;_.set(Y.subarray(q,q+Z*4),Q)}}function hZ(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function kD(_,$,j,G,Z,X,Y){let V=Z||B5,q=Math.max(1,Math.floor(Number(V.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let Q=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+Q)return null;let L=_.slice($+4,$+4+Q),K;try{K=Y(L)}catch{return{consumed:4+Q,skipped:!0}}let F=0,B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let E=Math.min(64,G-U);for(let D=0;D<j;D+=64){let H=Math.min(64,j-D);if(K.byteLength<F+1)return null;let k=K[F++],z=k&127,O=(k&128)!==0;if(!O&&z===0){let I=H*E*q;if(K.byteLength<F+I)return null;let x=X(K.slice(F,F+I),H,E,V);F+=I,pZ(B,j,D,U,H,E,x);continue}if(!O&&z===1){let I=F$(K,F,V);if(!I)return null;F+=I.bytesPerPixel,l$(B,j,D,U,H,E,I.rgba);continue}if(!O&&z>1&&z<=16){let I=[];for(let W=0;W<z;W+=1){let y=F$(K,F,V);if(!y)return null;F+=y.bytesPerPixel,I.push(y.rgba)}let x=z<=2?1:z<=4?2:4,A=Math.ceil(H*x/8),M=A*E;if(K.byteLength<F+M)return null;for(let W=0;W<E;W+=1){let y=F+W*A;for(let w=0;w<H;w+=1){let J=w*x,P=y+(J>>3),f=8-x-(J&7),b=K[P]>>f&(1<<x)-1;l$(B,j,D+w,U+W,1,1,I[b])}}F+=M;continue}if(O&&z===0){let I=0,x=0;while(x<E){let A=F$(K,F,V);if(!A)return null;F+=A.bytesPerPixel;let M=hZ(K,F);if(!M)return null;F+=M.consumed;for(let W=0;W<M.runLength;W+=1)if(l$(B,j,D+I,U+x,1,1,A.rgba),I+=1,I>=H){if(I=0,x+=1,x>=E)break}}continue}if(O&&z>0){let I=[];for(let M=0;M<z;M+=1){let W=F$(K,F,V);if(!W)return null;F+=W.bytesPerPixel,I.push(W.rgba)}let x=0,A=0;while(A<E){if(K.byteLength<F+1)return null;let M=K[F++],W=M,y=1;if(M&128){W=M&127;let J=hZ(K,F);if(!J)return null;F+=J.consumed,y=J.runLength}let w=I[W];if(!w)return null;for(let J=0;J<y;J+=1)if(l$(B,j,D+x,U+A,1,1,w),x+=1,x>=H){if(x=0,A+=1,A>=E)break}}continue}return{consumed:4+Q,skipped:!0}}}return{consumed:4+Q,rgba:B,decompressed:K}}function MD(_,$,j,G,Z){let X=Z||B5,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let q=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),Q=4+Y+q*(Y+8);if(_.byteLength<$+Q)return null;let L=$+4,K=F$(_,L,X);if(!K)return null;L+=K.bytesPerPixel;let F=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);l$(F,j,0,0,j,G,K.rgba);for(let B=0;B<q;B+=1){let U=F$(_,L,X);if(!U)return null;if(L+=U.bytesPerPixel,_.byteLength<L+8)return null;let E=new DataView(_.buffer,_.byteOffset+L,8),D=E.getUint16(0,!1),H=E.getUint16(2,!1),k=E.getUint16(4,!1),z=E.getUint16(6,!1);L+=8,l$(F,j,D,H,k,z,U.rgba)}return{consumed:L-$,rgba:F}}function yD(_,$,j,G,Z,X){let Y=Z||B5,V=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),q=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),Q=$,L=[0,0,0,255],K=[255,255,255,255];for(let F=0;F<G;F+=16){let B=Math.min(16,G-F);for(let U=0;U<j;U+=16){let E=Math.min(16,j-U);if(_.byteLength<Q+1)return null;let D=_[Q++];if(D&1){let H=E*B*V;if(_.byteLength<Q+H)return null;let k=X(_.slice(Q,Q+H),E,B,Y);Q+=H,pZ(q,j,U,F,E,B,k);continue}if(D&2){let H=F$(_,Q,Y);if(!H)return null;L=H.rgba,Q+=H.bytesPerPixel}if(l$(q,j,U,F,E,B,L),D&4){let H=F$(_,Q,Y);if(!H)return null;K=H.rgba,Q+=H.bytesPerPixel}if(D&8){if(_.byteLength<Q+1)return null;let H=_[Q++];for(let k=0;k<H;k+=1){let z=K;if(D&16){let y=F$(_,Q,Y);if(!y)return null;z=y.rgba,Q+=y.bytesPerPixel}if(_.byteLength<Q+2)return null;let O=_[Q++],I=_[Q++],x=O>>4,A=O&15,M=(I>>4)+1,W=(I&15)+1;l$(q,j,U+x,F+A,M,W,z)}}}}return{consumed:Q-$,rgba:q}}var B5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class H2{protocol=g1;state;framebufferWidth;framebufferHeight;serverName;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:AD,this.pipeline=_.pipeline||null,this.encodings=FD(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...B5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:HD()}receive(_){if(_)this.buffer=UD(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=Q5(Z),Y=WD(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=OD(Y),j.push(ED(this.clientVersionText)),$.push({type:"protocol-version",protocol:g1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+q)break;this.consume(1);let Q=Q5(this.consume(4+q).slice(4));throw Error(Q||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:g1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:g1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let V=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+V)break;let q=Q5(this.consume(4+V).slice(4));throw Error(q||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:g1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:g1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(vZ(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let V=Q5(this.consume(4+Y).slice(4));throw Error(V||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:g1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),V=mZ(Z,4),q=Z.getUint32(20,!1);if(this.buffer.byteLength<24+q)break;let Q=this.consume(24),L=new DataView(Q.buffer,Q.byteOffset,Q.byteLength);if(this.framebufferWidth=L.getUint16(0,!1),this.framebufferHeight=L.getUint16(2,!1),this.serverPixelFormat=mZ(L,4),this.serverName=Q5(this.consume(q)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(zD(this.clientPixelFormat)),j.push(JD(this.encodings)),j.push(cZ(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:g1,width:X,height:Y,name:this.serverName,pixelFormat:V}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),V=4,q=[],Q=!1,L=!!this.pipeline;for(let F=0;F<Y;F+=1){if(this.buffer.byteLength<V+12){Q=!0;break}let B=new DataView(this.buffer.buffer,this.buffer.byteOffset+V,12),U=B.getUint16(0,!1),E=B.getUint16(2,!1),D=B.getUint16(4,!1),H=B.getUint16(6,!1),k=B.getInt32(8,!1);if(V+=12,k===0){let z=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),O=D*H*z;if(this.buffer.byteLength<V+O){Q=!0;break}let I=this.buffer.slice(V,V+O);if(V+=O,L)this.pipeline.processRawRect(I,U,E,D,H,this.clientPixelFormat),q.push({kind:"pipeline",x:U,y:E,width:D,height:H});else q.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:this.decodeRawRect(I,D,H,this.clientPixelFormat)});continue}if(k===2){let z=MD(this.buffer,V,D,H,this.clientPixelFormat);if(!z){Q=!0;break}if(L){let O=this.buffer.slice(V,V+z.consumed);this.pipeline.processRreRect(O,U,E,D,H,this.clientPixelFormat),q.push({kind:"pipeline",x:U,y:E,width:D,height:H})}else q.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:z.rgba});V+=z.consumed;continue}if(k===1){if(this.buffer.byteLength<V+4){Q=!0;break}let z=new DataView(this.buffer.buffer,this.buffer.byteOffset+V,4),O=z.getUint16(0,!1),I=z.getUint16(2,!1);if(V+=4,L)this.pipeline.processCopyRect(U,E,D,H,O,I),q.push({kind:"pipeline",x:U,y:E,width:D,height:H});else q.push({kind:"copy",x:U,y:E,width:D,height:H,srcX:O,srcY:I});continue}if(k===16){let z=kD(this.buffer,V,D,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!z){Q=!0;break}if(V+=z.consumed,z.skipped)continue;if(L&&z.decompressed)this.pipeline.processZrleTileData(z.decompressed,U,E,D,H,this.clientPixelFormat),q.push({kind:"pipeline",x:U,y:E,width:D,height:H});else q.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:z.rgba});continue}if(k===5){let z=yD(this.buffer,V,D,H,this.clientPixelFormat,this.decodeRawRect);if(!z){Q=!0;break}if(L){let O=this.buffer.slice(V,V+z.consumed);this.pipeline.processHextileRect(O,U,E,D,H,this.clientPixelFormat),q.push({kind:"pipeline",x:U,y:E,width:D,height:H})}else q.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:z.rgba});V+=z.consumed;continue}if(k===-223){if(this.framebufferWidth=D,this.framebufferHeight=H,L)this.pipeline.initFramebuffer(D,H);q.push({kind:"resize",x:U,y:E,width:D,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${k}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(Q)break;this.consume(V);let K={type:"framebuffer-update",protocol:g1,width:this.framebufferWidth,height:this.framebufferHeight,rects:q};if(L)K.framebuffer=this.pipeline.getFramebuffer();$.push(K),j.push(cZ(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:g1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let V=Q5(this.consume(Y));$.push({type:"clipboard",protocol:g1,text:V}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var o1="piclaw://vnc";function dZ(_){let $=String(_||"").trim();return $?`${o1}/${encodeURIComponent($)}`:o1}var $7="piclaw:vnc-popout:",TD=60000;function oZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function wD(_=globalThis){let $=bG(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function iZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith($7))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{V2(_,G)}}function xD(_,$=globalThis,j=Date.now()){let G=E4(_);if(G===null)return null;let Z=oZ($);if(!Z)return null;iZ(Z,j);let X=wD($);try{return Z.setItem(`${$7}${X}`,JSON.stringify({password:G,expiresAt:j+TD})),X}catch{return null}}function ID(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=oZ($);if(!Z)return null;iZ(Z,j);let X=`${$7}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let V=JSON.parse(Y),q=Number(V?.expiresAt||0);if(!Number.isFinite(q)||q<=j)return null;return E4(V?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function CD(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:dZ(G)},X=xD($,j);if(X)Z.vnc_secret=X;return Z}function PD(_){let $=String(_||"");if($===o1)return null;if(!$.startsWith(`${o1}/`))return null;let j=$.slice(`${o1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function fD(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function RD(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function SD(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function gD(_){return String(_||"").trim()||"localhost"}function uD(_,$){let j=gD(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function bD(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function rZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function nZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function vD(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class sZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=PD($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=rZ("vnc_handoff");let j=rZ("vnc_secret"),G=ID(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=bD({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:16px 16px 18px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:12px;box-shadow:none;">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host value="localhost" placeholder="localhost" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;min-height:40px;font-weight:500;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((X)=>`
                            <div style="text-align:left;padding:14px;border:1px solid var(--border-color);border-radius:10px;background:transparent;color:inherit;display:flex;flex-direction:column;gap:10px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${d1(X.label||X.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${d1(X.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${X.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${d1(X.id)}" data-target-label="${d1(X.label||X.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:24px 20px;border:1px dashed var(--border-color);border-radius:10px;background:transparent;font-size:13px;color:var(--text-secondary);line-height:1.5;display:grid;gap:6px;">
                            <div style="font-weight:600;color:var(--text-primary);">${d1(G.title)}</div>
                            <div>${d1(G.body)}</div>
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=uD(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=E4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),V=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,V)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=RD();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:6px;">
                    <div data-vnc-session-chrome style="padding:6px 8px;border:1px solid var(--border-color);border-radius:8px;background:transparent;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                        <div data-display-info style="min-width:0;flex:1 1 240px;font-size:12px;color:var(--text-secondary);line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <input type="password" data-vnc-password placeholder="Password" autocomplete="current-password" style="width:150px;max-width:100%;padding:6px 8px;border:1px solid var(--border-color);border-radius:6px;background:transparent;color:inherit;" />
                        <button type="button" data-vnc-reconnect="1" style="padding:6px 10px;border:1px solid var(--border-color);border-radius:6px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:8px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:4px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:2px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.5;">
                            <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${d1(j)}</div>
                            <div style="font-size:12px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `:`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                    <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:10px;">
                        <div style="display:grid;gap:4px;min-width:0;">
                            <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d1($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                            <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                            <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                        </div>
                        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                            <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                                <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                                <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                            <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Target</button>
                        </div>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:10px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:8px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:4px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                            <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${d1(j)}</div>
                            <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=E4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=E4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=OZ($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return l3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(F2(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,V=new Map,q=new Set,Q=!1,L=(A)=>this.getFramebufferPointFromEvent(A)||X.get(A?.pointerId)||{x:0,y:0},K=(A)=>{if(!A||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let M=this.canvas.getBoundingClientRect?.();if(!M||!M.width||!M.height)return null;return l3(A.clientX,A.clientY,M,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},F=(A)=>{let M=Y.get(A);if(M)G.clearTimeout(M),Y.delete(A)},B=(A)=>{let M=V.get(A);if(M?.holdTimer)G.clearTimeout(M.holdTimer);V.delete(A)},U=()=>{for(let A of V.keys())B(A)},E=()=>{if(!q.size)Q=!1},D=(A,M=80)=>{let W=String(A?.pointerType||"").toLowerCase();if(!DZ(W))return;let y=Number(A?.pointerId);if(!Number.isFinite(y))return;F(y);let w=G.setTimeout(()=>{if(Y.delete(y),!Z.has(y)&&!this.pointerButtonMask)return;k({pointerId:y,pointerType:W,type:"pointercancel",clientX:A?.clientX,clientY:A?.clientY},{resetAll:!0})},M);Y.set(y,w)},H=(A=null)=>{if(!Z.size&&!this.pointerButtonMask&&!V.size)return;for(let W of Y.keys())F(W);U(),q.clear(),Q=!1;let M=A||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,M.x,M.y)},k=(A,M={})=>{if(M.resetAll){let P=Number(A?.pointerId);F(P),H(L(A));try{this.canvas?.releasePointerCapture?.(P)}catch{}return}let W=L(A),y=Number(A?.pointerId);F(y),B(y),q.delete(y),E();let w=Z.has(y),J=Z.get(y)??c3(A);if(!w&&!J&&!this.pointerButtonMask)return;if(Z.delete(y),X.delete(y),J)this.pointerButtonMask&=~J;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,W.x,W.y);try{this.canvas?.releasePointerCapture?.(y)}catch{}},z=(A)=>{if(Q)return;let M=V.get(A);if(!M||M.dragActivated)return;M.dragActivated=!0,M.holdTimer=null;let W=c$(0);if(!W)return;Z.set(A,(Z.get(A)??0)|W),this.pointerButtonMask|=W,D({pointerId:A,pointerType:"touch",clientX:M.lastClientX,clientY:M.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,M.lastPoint.x,M.lastPoint.y)},O=(A,M,W={})=>{let y=V.get(A);if(!y)return!1;let w=M||y.lastPoint||{x:0,y:0},J=Number.isFinite(W.clientX)?Number(W.clientX):y.lastClientX,P=Number.isFinite(W.clientY)?Number(W.clientY):y.lastClientY;if(q.delete(A),W.cancelled||Q){if(B(A),E(),Z.has(A)||this.pointerButtonMask)H(w);return!0}if(y.dragActivated||Z.has(A))return k({pointerId:A,pointerType:"touch",type:"pointerup",clientX:J,clientY:P}),E(),!0;let f=Date.now()-y.startedAt,b=UZ({startX:y.startClientX,startY:y.startClientY,clientX:J,clientY:P,elapsedMs:f});if(F(A),B(A),X.delete(A),E(),b){let c=c$(0);this.sendPointerEvent(c,w.x,w.y),this.sendPointerEvent(0,w.x,w.y)}else this.sendPointerEvent(this.pointerButtonMask,w.x,w.y);return!0};this.canvas.addEventListener("contextmenu",(A)=>{A.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(A)=>{let M=this.getFramebufferPointFromEvent(A);if(!M)return;let W=String(A?.pointerType||"").toLowerCase(),y=p1(W);if(X.set(A.pointerId,M),y){let w=V.get(A.pointerId);if(w){if(w.lastClientX=Number(A?.clientX||0),w.lastClientY=Number(A?.clientY||0),w.lastPoint=M,!w.dragActivated&&h3({startX:w.startClientX,startY:w.startClientY,clientX:w.lastClientX,clientY:w.lastClientY}))B(A.pointerId),V.set(A.pointerId,{...w,holdTimer:null,dragActivated:!1});if(!w.dragActivated){this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);return}}if(Q)return}if(Z.has(A.pointerId)&&H4(A)){k(A,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(A.pointerId)&&H4(A)){H(M);return}if(Z.has(A.pointerId))D(A);this.sendPointerEvent(this.pointerButtonMask,M.x,M.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(A)=>{let M=this.getFramebufferPointFromEvent(A);if(!M)return;let W=String(A?.pointerType||"").toLowerCase(),y=p1(W);if(A.preventDefault(),this.canvas?.focus?.(),X.set(A.pointerId,M),y){if(q.add(A.pointerId),q.size>1){let P=[...q];Q=!0,H(M);for(let f of P)q.add(f);Q=!0;return}B(A.pointerId);let J={startClientX:Number(A?.clientX||0),startClientY:Number(A?.clientY||0),lastClientX:Number(A?.clientX||0),lastClientY:Number(A?.clientY||0),startedAt:Date.now(),lastPoint:M,holdTimer:null,dragActivated:!1};J.holdTimer=G.setTimeout(()=>{z(A.pointerId)},260),V.set(A.pointerId,J),this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);return}if(W==="mouse")try{this.canvas?.setPointerCapture?.(A.pointerId)}catch{}let w=c3(A);if(!w)return;Z.set(A.pointerId,(Z.get(A.pointerId)??0)|w),this.pointerButtonMask|=w,D(A),this.sendPointerEvent(this.pointerButtonMask,M.x,M.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(A)=>{if(A.preventDefault(),p1(A?.pointerType)){let M=L(A);if(O(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY}))return}k(A)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(A)=>{if(A.preventDefault(),p1(A?.pointerType)){let M=L(A);if(O(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}k(A,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(A)=>{if(V.has(A.pointerId)&&p1(A?.pointerType)){O(A.pointerId,L(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!H4(A))return;k(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(A)=>{if(V.has(A.pointerId)&&p1(A?.pointerType)){O(A.pointerId,L(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!H4(A))return;k(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(A)=>{k(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(A)=>{if(!Z.size&&!this.pointerButtonMask||!H4(A))return;if(!Z.has(A.pointerId)&&!this.pointerButtonMask)return;k(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!V.has(A.pointerId))return;if(A.preventDefault?.(),p1(A?.pointerType)){let M=L(A);if(O(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY}))return}k(A,{resetAll:!Z.has(A.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!V.has(A.pointerId))return;if(A.preventDefault?.(),p1(A?.pointerType)){let M=L(A);if(O(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}k(A,{resetAll:!0})},{signal:$,passive:!1});let I=(A)=>{if(!Z.size&&!this.pointerButtonMask&&!V.size)return;if(!FZ(A))return;let M=A?.changedTouches?.[0]||A?.touches?.[0]||null,W=K(M)||X.values().next().value||V.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&V.size===1){let[y]=V.entries().next().value||[];if(Number.isFinite(y)){O(y,W,{clientX:M?.clientX,clientY:M?.clientY,cancelled:A?.type==="touchcancel"});return}}H(W)},x=(A,M={})=>{if(!Z.size&&!this.pointerButtonMask&&!V.has(A?.pointerId))return;if(!H4(A))return;if(A?.preventDefault?.(),p1(A?.pointerType)){let W=L(A);if(O(A.pointerId,W,{clientX:A?.clientX,clientY:A?.clientY,cancelled:M.resetAll===!0}))return}k(A,{resetAll:M.resetAll===!0||!Z.has(A?.pointerId)})};this.canvas.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(A)=>{x(A)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(A)=>{x(A,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!V.size)return;H()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!V.size)return;H()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")H()},{signal:$}),this.canvas.addEventListener("wheel",(A)=>{let M=this.getFramebufferPointFromEvent(A);if(!M)return;A.preventDefault();for(let W of HZ(A.deltaY,M.x,M.y,this.pointerButtonMask))this.socketBoundary?.send?.(W)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(EZ(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=p3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(WZ(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??p3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new H2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await NZ(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(V,q,Q,L)=>G.decodeRawRectToRgba(V,q,Q,L);let X=E4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new H2(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new u3({url:SD(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(V)=>{this.applyMetrics(V)},onMessage:(V)=>{this.handleSocketMessage(V)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(nZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),nZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await fD(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!vD(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return CD(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var j7={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===o1||$.startsWith(`${o1}/`)?9000:!1},mount(_,$){return new sZ(_,$)}};import{classHighlighter as mD,highlightTree as cD,StreamLanguage as N5,cssLanguage as hD,cppLanguage as lD,goLanguage as pD,htmlLanguage as rD,javascriptLanguage as nD,jsxLanguage as dD,tsxLanguage as oD,typescriptLanguage as iD,jsonLanguage as sD,markdownLanguage as aD,pythonLanguage as tD,rustLanguage as eD,StandardSQL as _H,xmlLanguage as $H,yamlLanguage as jH,dockerFile as GH,powerShell as ZH,ruby as XH,shell as YH,swift as VH,toml as qH}from"#editor-vendor/codemirror";function W4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var QH={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},LH=N5.define(YH).parser,KH=N5.define(ZH).parser,BH=N5.define(GH).parser,NH=N5.define(XH).parser,FH=N5.define(VH).parser,UH=N5.define(qH).parser;function aZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return QH[$]||String(_||"").trim()}function DH(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return nD.parser;case"ts":case"typescript":return iD.parser;case"jsx":return dD.parser;case"tsx":return oD.parser;case"py":case"python":return tD.parser;case"json":return sD.parser;case"css":return hD.parser;case"html":return rD.parser;case"xml":return $H.parser;case"yaml":case"yml":return jH.parser;case"md":case"markdown":return aD.parser;case"sql":return _H.language.parser;case"go":return pD.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return lD.parser;case"sh":case"bash":case"shell":case"zsh":return LH;case"ps1":case"powershell":return KH;case"dockerfile":return BH;case"rb":case"ruby":return NH;case"rs":case"rust":return eD.parser;case"swift":return FH;case"toml":return UH;default:return null}}function E2(_,$){let j=DH($);if(!j)return W4(_);let G=[];try{let Y=j.parse(_);cD(Y,mD,(V,q,Q)=>{if(!Q||V>=q)return;G.push({from:V,to:q,cls:Q})})}catch{return W4(_)}if(!G.length)return W4(_);G.sort((Y,V)=>Y.from-V.from||Y.to-V.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=W4(_.slice(Z,Y.from));X+=`<span class="${W4(Y.cls)}">${W4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=W4(_.slice(Z));return X}$6();var k2=/#(\w+)/g,IH=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),CH=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),PH=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),VX={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},fH=new Set(["http:","https:","mailto:",""]);function RH(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(VX[j]||new Set).has(G)||PH.has(G)}function L7(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function A4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!fH.has(G.protocol))return null;return G.href}catch{return null}}function qX(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let V=Y.tagName.toLowerCase();if(!CH.has(V)){let Q=Y.parentNode;if(!Q)continue;while(Y.firstChild)Q.insertBefore(Y.firstChild,Y);Q.removeChild(Y);continue}let q=VX[V]||new Set;for(let Q of Array.from(Y.attributes)){let L=Q.name.toLowerCase(),K=Q.value;if(L.startsWith("on")){Y.removeAttribute(Q.name);continue}if(RH(V,L)){if(L==="href"){let F=A4(K);if(!F)Y.removeAttribute(Q.name);else if(Y.setAttribute(Q.name,F),V==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(F))Y.setAttribute("target","_blank")}}else if(L==="src"){let F=V==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(K):K,B=A4(F,{allowDataImage:V==="img"});if(!B)Y.removeAttribute(Q.name);else Y.setAttribute(Q.name,B)}continue}Y.removeAttribute(Q.name)}}return j.body.innerHTML}function QX(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function j6(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=QX(j);if(Z===j)break;j=Z}return j}function SH(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function gH(_){let{text:$,frontmatter:j}=SH(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function uH(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let V of j){if(!X&&V.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&V.trim().match(/^```\s*$/)){let q=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${q}@@`),X=!1,Y=[];continue}if(X)Y.push(V);else Z.push(V)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function bH(_){if(!_)return _;return j6(_,5)}function vH(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function mH(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function cH(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=bH(X);return`<div class="mermaid-container" data-mermaid="${vH(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function LX(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function hH(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=j6(Z,2),V=X||"plaintext",q=E2(Y,X);return`<pre><code class="hljs language-${L7(V)}">${q}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var lH={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function pH(_,$){let j=lH[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let V=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${L7(V)}"`)}return G.join("")}function KX(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,V=X.endsWith("/")?X.slice(0,-1).trim():X,[q=""]=V.split(/\s+/,1),Q=q.toLowerCase();if(!Q||!IH.has(Q))return $;if(Q==="br")return Z?"":"<br>";if(Z)return`</${Q}>`;let L=V.slice(q.length).trim(),K=pH(Q,L);return`<${Q}${K}>`})}function BX(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function NX(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function rH(_){if(!window.katex)return _;let $=(Y)=>QX(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let V=[],q=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(Q)=>{let L=V.length;return V.push(Q),`@@CODE_BLOCK_${L}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(Q)=>{let L=V.length;return V.push(Q),`@@CODE_INLINE_${L}@@`}),{html:q,blocks:V}},G=(Y,V)=>{if(!V.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,Q)=>{let L=Number(Q);return V[L]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,V,q)=>{try{let Q=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${V}${Q}`}catch(Q){let L=Q instanceof Error?Q.message:String(Q);return`<span class="math-error" title="${L7(L)}">${Y}</span>`}}),G(X,Z.blocks)}function nH(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(k2.lastIndex=0,!k2.test(Y))continue;k2.lastIndex=0;let V=X.parentElement;if(V&&(V.closest("a")||V.closest("code")||V.closest("pre")))continue;let q=Y.split(k2);if(q.length<=1)continue;let Q=$.createDocumentFragment();q.forEach((L,K)=>{if(K%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",L),F.textContent=`#${L}`,Q.appendChild(F)}else Q.appendChild($.createTextNode(L))}),X.parentNode?.replaceChild(Q,X)}return $.body.innerHTML}function dH(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function oH(_){let $=gH(_||""),j=dH($),{text:G,blocks:Z}=uH(j),X=j6(G,2),V=LX(X).replace(/</g,"&lt;");return{safeHtml:KX(V),mermaidBlocks:Z}}function Z1(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=oH(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=BX(X),X=NX(X),X=hH(X),X=rH(X),X=nH(X),X=cH(X,Z),X=qX(X,j),X}function G6(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=j6($,2),Z=LX(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=KX(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=BX(Y),Y=NX(Y),Y=qX(Y),Y}function iH(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((q)=>{let[Q,L]=q.split(",").map(Number);return{x:Q,y:L}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let V=[`M ${Y[0].x},${Y[0].y}`];for(let q=1;q<Y.length-1;q++){let Q=Y[q-1],L=Y[q],K=Y[q+1],F=L.x-Q.x,B=L.y-Q.y,U=K.x-L.x,E=K.y-L.y,D=Math.sqrt(F*F+B*B),H=Math.sqrt(U*U+E*E),k=Math.min($,D/2,H/2);if(k<0.5){V.push(`L ${L.x},${L.y}`);continue}let z=L.x-F/D*k,O=L.y-B/D*k,I=L.x+U/H*k,x=L.y+E/H*k,M=F*E-B*U>0?1:0;V.push(`L ${z},${O}`),V.push(`A ${k},${k} 0 0 ${M} ${I},${x}`)}return V.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${V.join(" ")}"${X}/>`})}async function E$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=YX()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let V=Y.dataset.mermaid,q=mH(V||""),Q=j6(q,2),L=await $(Q,{...Z,transparent:!0});L=iH(L),Y.innerHTML=L,Y.removeAttribute("data-mermaid")}catch(V){console.error("Mermaid render error:",V);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${V.message}`,Y.innerHTML="",Y.appendChild(q),Y.removeAttribute("data-mermaid")}}M_();function MX(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date().getTime()-$.getTime(),Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let q=$.toLocaleDateString(void 0,{weekday:"short"}),Q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${Q}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${V}`}function U6(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function s_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function x4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function r$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function uE(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",V=String($||"").split("/").slice(0,-1).join("/"),Q=Z.startsWith("/")?Z:`${V?`${V}/`:""}${Z}`,L=[];for(let F of Q.split("/")){if(!F||F===".")continue;if(F===".."){if(L.length>0)L.pop();continue}L.push(F)}let K=L.join("/");return`${N6(K)}${X}${Y}`}function D6(_){return _?.preview||null}function bE(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function vE(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function mE(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${r$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${r$(s_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${r$(x4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${r$(vE($))}</span>`),G.push(`<span><strong>extension:</strong> ${r$(bE(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${r$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function cE(_){let $=D6(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=mE(_,$);if($.kind==="image"){let G=$.url||($.path?N6($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${r$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=Z1($.text||"",null,{rewriteImageSrc:(Z)=>uE(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${r$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class n7{container;context;disposed=!1;host;constructor(_,$){this.container=_,this.context=$,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=cE(this.context)}getContent(){let _=D6(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=D6(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var d7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=D6(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new n7(_,$)}},o7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return D6(_)||_?.path?1:!1},mount(_,$){return new n7(_,$)}};var hE=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),lE={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},pE={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function TX(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function yX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class wX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=TX(j),X=pE[Z]||"\uD83D\uDCC4",Y=lE[Z]||"Office Document",V=document.createElement("div");V.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",V.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${yX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${yX(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(V);let q=V.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class xX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var i7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=TX(_?.path);if(!$||!hE.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new wX(_,$);return new xX(_,$)}};var rE=/\.(csv|tsv)$/i;function IX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class CX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${IX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${IX(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let V=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class PX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!rE.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new CX(_,$);return new PX(_,$)}};var nE=/\.pdf$/i;function dE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class fX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${dE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class RX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!nE.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new fX(_,$);return new RX(_,$)}};var oE=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function t7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class SX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${t7(Z)}" alt="${t7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${t7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let V=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class gX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var e7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!oE.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new SX(_,$);return new gX(_,$)}};var iE=/\.(html|htm)$/i;function uX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class bX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${uX(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${uX(j)}</div>
                <div style="display:flex;gap:8px;flex-shrink:0;">
                    <button id="html-edit-btn" style="padding:5px 14px;background:var(--surface-color,rgba(148,163,184,.12));color:var(--text-primary,#e2e8f0);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;">
                        Edit Source
                    </button>
                    <button id="html-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                        onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                        Preview in Tab
                    </button>
                </div>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class vX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var _9={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!iE.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new bX(_,$);return new vX(_,$)}};var sE=/\.(mp4|m4v|mov|webm|ogv)$/i;function aE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class mX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${aE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class cX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var $9={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!sE.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new mX(_,$);return new cX(_,$)}};M_();function tE(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function hX(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:V,pollMs:q=3000,ownerDocument:Q=document}=_,L=null,K=null,F=!1,B=!1,U=!1;async function E(){if(B||U||F)return;let O=j();if(!O)return;try{let I=await c7($);if(B||U||!I?.mtime)return;if(I.mtime!==O)F=!0,H(),k()}catch(I){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",I)}}function D(){if(H(),B)return;L=setInterval(E,q)}function H(){if(L)clearInterval(L),L=null}function k(){if(K||B)return;let O=Q.createElement("div");O.className="editor-conflict-bar",O.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,O.addEventListener("click",(I)=>{let x=I.target.closest("[data-action]");if(!x)return;let A=x.getAttribute("data-action");if(A==="reload")z(),X();else if(A==="save-copy"){let M=tE($);Y(M)}else if(A==="overwrite")z(),V();else if(A==="dismiss")z()}),K=O,G.insertBefore(O,Z)}function z(){if(K)K.remove(),K=null;F=!1,D()}return{start(){D()},stop(){H()},onSaved(O){F=!1,U=!1,D()},dispose(){if(B=!0,H(),K)K.remove(),K=null}}}var eE=/\.mindmap\.ya?ml$/i,g2=String(Date.now());function _W(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function lX(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function j9(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function $W(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function jW(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="mindmap-undo" title="Undo (Ctrl+Z)" disabled>Undo</button>
        <button type="button" id="mindmap-redo" title="Redo (Ctrl+Shift+Z)" disabled>Redo</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let G=document.createElement("div");G.id="context-menu",G.className="context-menu hidden",G.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(G)}class pX{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${_W(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class rX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(lX())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,$W("/static/css/mindmap.css?v="+g2),await Promise.all([j9("/static/js/vendor/d3-mindmap.min.js?v="+g2),j9("/static/js/vendor/js-yaml.min.js?v="+g2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),jW(this.mindmapEl);let j=lX(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await j9("/static/js/vendor/mindmap-editor.js?v="+g2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=hX({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var G9={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!eE.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new pX(_,$);return new rX(_,$)}};class nX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var $_=new nX;var W5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};k0();function dX(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Z,X]=C(""),[Y,V]=C({text:"",totalLines:0}),[q,Q]=C(null),[L,K]=C(null),[F,B]=C(null),U=u(null),E=u(0),D=u(!1),H=u(""),k=u(""),z=u(!1),O=u(0),I=u(null),x=u(null),A=u(null),M=u(null),W=u(!1),y=u(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:V,pendingRequest:q,setPendingRequest:Q,currentTurnId:L,setCurrentTurnId:K,steerQueuedTurnId:F,setSteerQueuedTurnId:B,lastAgentEventRef:U,lastSilenceNoticeRef:E,isAgentRunningRef:D,draftBufferRef:H,thoughtBufferRef:k,previewResyncPendingRef:z,previewResyncGenerationRef:O,pendingRequestRef:I,stalledPostIdRef:x,currentTurnIdRef:A,steerQueuedTurnIdRef:M,thoughtExpandedRef:W,draftExpandedRef:y}}k0();var GW=0.1,tX=4,eX=4,oX=160,iX=1600,sX=200,aX=1600;function W$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function _Y(_=W$()){return _>0?Math.floor(_*GW):0}function H6(_,$=W$(),j=0){let G=_Y($)+tX+(j>0?eX+Math.max(0,j):0),Z=$>0?Math.floor($-G):iX;return Math.min(Math.max(Number(_)||0,oX),Math.max(oX,Math.min(iX,Z)))}function E6(_,$=W$(),j=0){let G=_Y($)+eX+(j>0?tX+Math.max(0,j):0),Z=$>0?Math.floor($-G):aX;return Math.min(Math.max(Number(_)||0,sX),Math.max(sX,Math.min(aX,Z)))}function $Y({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=u((L)=>{L.preventDefault();let K=_.current;if(!K)return;let F=L.clientX,B=$.current||280,U=L.currentTarget;U.classList.add("dragging"),K.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=F,D=(k)=>{E=k.clientX;let z=H6(B+(k.clientX-F),W$(),j?.current||0);K.style.setProperty("--sidebar-width",`${z}px`),$.current=z},H=()=>{let k=H6(B+(E-F),W$(),j?.current||0);$.current=k,U.classList.remove("dragging"),K.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",q_("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,X=u((L)=>{L.preventDefault();let K=_.current;if(!K)return;let F=L.touches[0];if(!F)return;let B=F.clientX,U=$.current||280,E=L.currentTarget;E.classList.add("dragging"),K.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let D=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let O=H6(U+(z.clientX-B),W$(),j?.current||0);K.style.setProperty("--sidebar-width",`${O}px`),$.current=O},H=()=>{E.classList.remove("dragging"),K.classList.remove("sidebar-resizing"),document.body.style.userSelect="",q_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,Y=u((L)=>{L.preventDefault();let K=_.current;if(!K)return;let F=L.clientX,B=j.current||$.current||280,U=L.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=F,D=(k)=>{E=k.clientX;let z=E6(B+(k.clientX-F),W$(),$?.current||0);K.style.setProperty("--editor-width",`${z}px`),j.current=z},H=()=>{let k=E6(B+(E-F),W$(),$?.current||0);j.current=k,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q_("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,V=u((L)=>{L.preventDefault();let K=_.current;if(!K)return;let F=L.touches[0];if(!F)return;let B=F.clientX,U=j.current||$.current||280,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let D=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let O=E6(U+(z.clientX-B),W$(),$?.current||0);K.style.setProperty("--editor-width",`${O}px`),j.current=O},H=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",q_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,q=u((L)=>{L.preventDefault();let K=_.current;if(!K)return;let F=L.clientY,B=G?.current||200,U=L.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=F,D=(k)=>{E=k.clientY;let z=Math.min(Math.max(B-(k.clientY-F),100),window.innerHeight*0.5);if(K.style.setProperty("--dock-height",`${z}px`),G)G.current=z;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let k=Math.min(Math.max(B-(E-F),100),window.innerHeight*0.5);if(G)G.current=k;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q_("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,Q=u((L)=>{L.preventDefault();let K=_.current;if(!K)return;let F=L.touches[0];if(!F)return;let B=F.clientY,U=G?.current||200,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let D=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let O=Math.min(Math.max(U-(z.clientY-B),100),window.innerHeight*0.5);if(K.style.setProperty("--dock-height",`${O}px`),G)G.current=O;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",q_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:V,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:Q}}k0();function Z9(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var jY=Z9("warning",30000),GY=Z9("finalize",120000),ZY=Z9("refresh",30000),XY=30000;function YY(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function W6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function VY(_=30000){let[,$]=C(0);g(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function qY(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function u2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function ZW(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function n$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function O$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function b2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.tool_name??_.toolName;if(typeof j==="string"&&j.trim())return j.trim();let G=_.status;if(typeof G==="string"&&G.trim())return G.trim();return O$(_)?"Compacting context":"Working..."}function QY(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function O6(_,$=Date.now()){let j=u2(_);if(j===null)return null;return QY(Math.max(0,$-j))}function LY(_,$=Date.now()){let j=ZW(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${QY(G)}`}k0();function yV(_={}){i1(_)}function TV(){let[_,$]=C(!1);if(g(()=>{let Z=(Y)=>{let V=O5(Y?.detail?.section);if(V)try{window.__piclawSettingsRequestedSection=V}catch(q){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=v2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=C(null);if(g(()=>{Promise.resolve().then(() => (MV(),kV)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return N`
            <div class="settings-dialog-backdrop" onClick=${()=>$(!1)}>
                <div class="settings-dialog settings-dialog-loading-shell" data-testid="settings-dialog">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;return N`
        <div class="settings-dialog-backdrop" onClick=${(Z)=>{if(Z.target===Z.currentTarget)$(!1)}}>
            <${j} onClose=${()=>$(!1)} />
        </div>
    `}k0();function gO(_,$){return new URL(String(_||""),$).toString()}function wV(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=R((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},V=gO(Z,window.location.href);if(Y)window.history.replaceState(null,"",V);else window.history.pushState(null,"",V);$(window.location.href)},[]);return{locationParams:Y0(()=>new URL(_).searchParams,[_]),navigate:j}}k0();k0();function xV(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function I9(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var uO=400,C9=60,bO=220,P9="mdPreviewHeight";function vO(){return xV(localStorage,P9,C9,bO)}function $8({getContent:_,path:$,onClose:j}){let[G,Z]=C(""),[X,Y]=C(vO),V=u(null),q=u(null),Q=u(""),L=u(_);return L.current=_,g(()=>{let B=()=>{let E=L.current?.()||"";if(E===Q.current)return;Q.current=E;try{let D=Z1(E,null);Z(D)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};B();let U=setInterval(B,uO);return()=>clearInterval(U)},[]),g(()=>{if(V.current&&G)E$(V.current).catch((B)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",B,{path:$})})},[G]),N`
        <div
            class="md-preview-splitter"
            onMouseDown=${(B)=>{B.preventDefault();let U=B.clientY,E=q.current?.offsetHeight||X,D=q.current?.parentElement,H=D?D.offsetHeight*0.7:500,k=B.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let z=(I)=>{let x=Math.min(Math.max(E-(I.clientY-U),C9),H);Y(x)},O=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I9(localStorage,P9,q.current?.offsetHeight||X),document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",O)};document.addEventListener("mousemove",z),document.addEventListener("mouseup",O)}}
            onTouchStart=${(B)=>{B.preventDefault();let U=B.touches[0];if(!U)return;let E=U.clientY,D=q.current?.offsetHeight||X,H=q.current?.parentElement,k=H?H.offsetHeight*0.7:500,z=B.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let O=(x)=>{let A=x.touches[0];if(!A)return;x.preventDefault();let M=Math.min(Math.max(D-(A.clientY-E),C9),k);Y(M)},I=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",I9(localStorage,P9,q.current?.offsetHeight||X),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}}
        ></div>
        <div class="md-preview-panel" ref=${q} style=${{height:X+"px"}}>
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
                ref=${V}
                dangerouslySetInnerHTML=${{__html:G}}
            />
        </div>
    `}function IV(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function mO(_){return _==="error"?"Could not open branch window":"Opening branch…"}function CV(_){return N`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${mO(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function PV(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:V,handleTabActivate:q,previewTabs:Q,diffTabs:L,handleTabTogglePreview:K,handleTabToggleDiff:F,editorContainerRef:B,getPaneContent:U,panePopoutPath:E}=_,D=j&&!G&&Z,H=X?`Pane window controls for ${X}`:"Pane window controls";return N`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${D&&N`
          <div class="pane-popout-hover-zone" aria-hidden="true"></div>
          <div class="pane-popout-controls" role="toolbar" aria-label=${H}>
            <details class="pane-popout-controls-menu">
              <summary
                class="pane-popout-controls-trigger pane-popout-controls-icon-button"
                aria-label=${H}
                title=${H}
              >
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 4.75h10" />
                  <path d="M5 8h8" />
                  <path d="M7 11.25h6" />
                </svg>
              </summary>
              <div class="pane-popout-controls-panel">
                ${Y.length>1&&N`
                  <div class="pane-popout-controls-section">
                    <div class="pane-popout-controls-section-title">Open panes</div>
                    <div class="pane-popout-controls-list">
                      ${Y.map((k)=>N`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${k.id===V?" active":""}`}
                          onClick=${(z)=>{q(k.id),z.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${k.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${V&&L.has(V)&&N`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{F(V),k.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${V&&Q.has(V)&&N`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{K(V),k.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide preview
                  </button>
                `}
              </div>
            </details>
          </div>
        `}
        ${j?N`<div class="editor-pane-host" ref=${B}></div>`:N`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${E||"No pane path provided."}</p>
            </div>
          `}
        ${j&&V&&Q.has(V)&&N`
          <${$8}
            getContent=${U}
            path=${V}
            onClose=${()=>K(V)}
          />
        `}
      </div>
    </div>
  `}k0();k0();function j8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function cO(_,$){let j=j8(_),G=j8($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function y6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function f9(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function hO(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function lO(_,$,j=0,G=(Z)=>Z){let Z=j8($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=hO(X.length,j),V=X.map((q)=>j8(G(q)));for(let q of Y)if(V[q].startsWith(Z))return q;for(let q of Y)if(V[q].includes(Z))return q;return-1}function R9(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(cO(X,$))return j}return lO(Z,$,0,G)}M_();function G8(_){return String(_||"").trim().toLowerCase()}function S9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return G8($[1]||"")}function pO(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=G8(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function fV(_,$,j={}){let G=S9($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return pO(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return G8(X?.agent_name).startsWith(G)})}function g9(_){let $=G8(_);return $?`@${$} `:""}function RV(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function SV(_,$,j={}){if(!_||_.isComposing)return!1;if(!RV(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function u9(_,$={}){if(!RV($))return!1;return String(_||"")==="@"}function b9(_){let $=v9(_);return $?`@${$}`:""}function v9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function Z8(_,$=""){let j=String(_||""),G=v9(j),Z=v9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function rO(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function X8(_,$={}){let j=b9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=rO(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function gV(_,$,j){let G=b9(_),Z=b9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function Y8({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function m9({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function T6(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(_?.type==="intent")return"dot";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function uV(_,$={}){return T6(_,$)==="dot"}k0();var bV=350;function nO(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function dO(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let V=nO(j);return{show:!0,statusClass:j,label:V,title:`Connection: ${V}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):bV,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!1,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function c9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):bV,[G,Z]=C(null),[X,Y]=C(()=>Date.now());return g(()=>{if(_==="disconnected"){let V=Date.now();Z((q)=>q??V),Y(V);return}Z(null),Y(Date.now())},[_]),g(()=>{if(_!=="disconnected"||G===null)return;let V=j-(Date.now()-G);if(V<=0)return;let q=0,Q=0,L=setTimeout(()=>{if(typeof requestAnimationFrame!=="function"){Y(Date.now());return}q=requestAnimationFrame(()=>{Q=requestAnimationFrame(()=>{Y(Date.now())})})},V);return()=>{if(clearTimeout(L),q)cancelAnimationFrame(q);if(Q)cancelAnimationFrame(Q)}},[_,G,j]),Y0(()=>dO(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}k0();function V1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let V=`${_}-file-pill`,q=`${_}-file-name`,Q=`${_}-file-remove`,L=Y==="message"?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Y==="folder"?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>`;return N`
    <span class=${V} title=${j||$} onClick=${Z}>
      ${L}
      <span class=${q}>${$}</span>
      ${G&&N`
        <button
          class=${Q}
          onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),G()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}async function h9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function oO(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function iO(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function l9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=R1(_),Z=oO(_),X=iO(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function vV(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let V=/[\s\n]$/.test(G)?"":" ";return`${G}${V}${Y}`}function mV(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let V=String(Y[0].transcript||"").trim();if(!V)continue;if(Y.isFinal)j=`${j} ${V}`.trim();else G=`${G} ${V}`.trim()}return{finalText:j,interimText:G}}function p9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var sO=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],cV="piclaw_compose_history";function aO(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function tO(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return cV;return`${cV}:${encodeURIComponent($)}`}function eO(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),V=Boolean(X?.archived_at);if(Y!==V)return Y?1:-1;let q=String(Z?.agent_name||"").trim(),Q=String(X?.agent_name||"").trim(),L=q.localeCompare(Q,void 0,{sensitivity:"base"});if(L!==0)return L;let K=String(Z?.chat_jid||"").trim(),F=String(X?.chat_jid||"").trim();return K.localeCompare(F,void 0,{sensitivity:"base"})}),G}function _z(_){return Boolean(_?.is_active&&!_?.archived_at)}function $z(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function hV(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"";if(!(Z.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function jz(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function lV(_,$,j={}){if(!_||j.searchMode)return!1;if(!(_.key===" "||_.key==="Spacebar"||_.code==="Space"))return!1;if(_.ctrlKey||_.metaKey||_.altKey||_.repeat)return!1;if(!j.speechButtonVisible||j.speechButtonActive)return!1;if(!j.canStartSpeech)return!1;return String($||"").trim().length===0}function Gz(_,$){if(!$||!_)return!1;return _.key===" "||_.key==="Spacebar"||_.code==="Space"}function Zz(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function Xz(_){return _==="abort"||_==="compacting"}function Yz(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1,animateSpinner:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1,animateSpinner:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1,animateSpinner:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1,animateSpinner:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!1,animateSpinner:!0}}function Vz({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Z=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Y=_.contextWindow,V="Compact context",q=X!=null?`Context: ${w6(X)} / ${w6(Y)} tokens (${Z.toFixed(0)}%)`:`Context: ${Z.toFixed(0)}%`,Q=typeof j==="string"?j.trim():"",L=typeof G==="string"?G.trim():"",K=Q?`${q} — ${L||"Smart compaction"} · ${Q}`:`${q} — ${"Compact context"}`,F=9,B=2*Math.PI*9,U=Z/100*B,E=Z>90?"var(--context-red, #ef4444)":Z>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return N`
        <button
            class=${`compose-context-pie icon-btn${Q?" is-compacting":""}`}
            type="button"
            title=${K}
            aria-label=${Q?`Smart compaction ${Q}`:"Compact context"}
            onClick=${(D)=>{D.preventDefault(),D.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${E}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${B}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${Q&&N`<span class="compose-context-pie-timer">${Q}</span>`}
        </button>
    `}function w6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function qz(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function pV(_,$){let j=Number(_?.contextWindow??_?.context_window),G=qz($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${w6(G)} tokens, but this model only fits ${w6(j)}. Compact first.`,tokens:G,contextWindow:j}}function r9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${w6($)} ctx`}function Qz(_,$){let j=typeof _==="string"?_.trim():"",G=r9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function Lz(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function dV(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let K=X.trim();if(!K)continue;let F=K.indexOf("/"),B=F>0?K.slice(0,F).trim():"",U=F>0?K.slice(F+1).trim():K;Z.push({label:K,provider:B,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",V=typeof X.id==="string"?X.id.trim():"",q=Lz(X.label,Y,V);if(!q)continue;let Q=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,L=Number(X.context_window??X.contextWindow);Z.push({label:q,provider:Y,id:V,name:Q,contextWindow:Number.isFinite(L)&&L>0?L:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function Kz(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,r9(_.contextWindow)].filter(Boolean).join(" ")}function Bz(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=dV($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function V8(_){return(typeof _==="string"?_.trim():"")||null}function rV(_){return V8(_)?.toLowerCase()??null}function nV(_,$){let j=rV(_),G=rV($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function Nz(_,$){let j=$&&typeof $==="object"?$:{},G=V8(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Z=V8(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Z&&nV(G,Z))return null;let X=V8(_??j.current??j.model);if(X&&Z&&!nV(X,Z))return null;return{label:`Routed: ${G}`,title:Z?`Requested model: ${Z} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Z,responseModel:G}}function Fz(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let V=j[Z].trim();if(!V){Z+=1;continue}if(V==="Messages:"||V.startsWith("Channel:")||V.startsWith("Chat:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(V)){X=!0,Z+=1;let q=[];while(Z<j.length){let Q=j[Z],L=Q.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(L))break;if(L.startsWith("Channel:")||L.startsWith("Chat:")||L==="Messages:")break;q.push(Q.startsWith("  ")?Q.slice(2):Q),Z+=1}if(q.length>0)G.push(q.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function oV(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function Uz(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Files:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let L=oV(Q.replace(/^\s*-\s+/,"").trim());if(L)Z.push(L)}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),V=j.slice(X);return{content:[...Y,...V].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function Dz(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Folders:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let L=oV(Q.replace(/^\s*-\s+/,"").trim());if(L)Z.push(L)}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),V=j.slice(X);return{content:[...Y,...V].join(`
`).replace(/\n{3,}/g,`

`).trim(),folderRefs:Z}}function Hz(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Referenced messages:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let L=Q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(L)Z.push(L[1])}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),V=j.slice(X);return{content:[...Y,...V].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function Ez(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Attachments:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let L=Q.replace(/^\s*-\s+/,"").trim(),K=L.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(K)Z.push({id:K[1],label:(K[2]||"").trim()||`attachment:${K[1]}`,raw:L})}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),V=j.slice(X);return{content:[...Y,...V].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function iV(_){let $=Fz(_||""),j=Uz($||""),G=Dz(j.content||""),Z=Hz(G.content||""),X=Ez(Z.content||"");return{text:X.content||"",fileRefs:j.fileRefs,folderRefs:G.folderRefs,messageRefs:Z.messageRefs,attachmentRefs:X.attachmentRefs}}function Wz(_){let $=iV(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],folderRefs:[...$.folderRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function Oz(_){let{queuedItem:$,buildDraft:j=Wz,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:V,onSetFolderRefs:q,onSetMessageRefs:Q,setContent:L,textareaRef:K,resizeTextarea:F=()=>{},scheduleTimeout:B=(k,z=0)=>setTimeout(k,z),scheduleRaf:U=(k)=>requestAnimationFrame(k),logger:E=console}=_||{};if(!$)return!1;let D=j($?.content||""),H=D.content;return E?.info?.("[compose-box] Returning queued item to editor",{text:H?.slice(0,80),fileRefs:D.fileRefs?.length,folderRefs:D.folderRefs?.length,messageRefs:D.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),V?.(D.fileRefs),q?.(D.folderRefs),Q?.(D.messageRefs),L?.(H),U(()=>{let k=K?.current;if(!k)return;if(k.value=H,typeof k.dispatchEvent==="function")k.dispatchEvent(new Event("input",{bubbles:!0}));F();let z=H.length;k.selectionStart=z,k.selectionEnd=z,k.focus()}),B(()=>{try{G?.($)}catch(k){E?.warn?.("[compose-box] Failed to remove returned queued follow-up.",k)}},0),!0}function zz({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return N`
        <div class="compose-queue-stack">
            ${_.map((Y,V)=>{let q=typeof Y?.content==="string"?Y.content:"",Q=iV(q);if(!Q.text.trim()&&Q.fileRefs.length===0&&Q.folderRefs.length===0&&Q.messageRefs.length===0&&Q.attachmentRefs.length===0)return null;let L=V>0,K=V<_.length-1,F=!0;return N`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${q}>
                            ${Q.text.trim()&&N`<div class="compose-queue-stack-text">${Q.text}</div>`}
                            ${(Q.messageRefs.length>0||Q.fileRefs.length>0||Q.folderRefs.length>0||Q.attachmentRefs.length>0)&&N`
                                <div class="compose-queue-stack-refs">
                                    ${Q.messageRefs.map((B)=>N`
                                        <${V1}
                                            key=${"queue-msg-"+B}
                                            prefix="compose"
                                            label=${"msg:"+B}
                                            title=${"Message reference: "+B}
                                            icon="message"
                                        />
                                    `)}
                                    ${Q.fileRefs.map((B)=>{let U=B.split("/").pop()||B;return N`
                                            <${V1}
                                                key=${"queue-file-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${Q.folderRefs.map((B)=>{let U=B.split("/").pop()||B;return N`
                                            <${V1}
                                                key=${"queue-folder-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                icon="folder"
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${Q.attachmentRefs.map((B)=>N`
                                        <${V1}
                                            key=${"queue-attachment-"+B.id}
                                            prefix="compose"
                                            label=${B.label}
                                            title=${B.raw}
                                        />
                                    `)}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            ${_.length>1&&N`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-up"
                                    type="button"
                                    title="Move up"
                                    aria-label="Move up in queue"
                                    disabled=${!L}
                                    onClick=${()=>L&&G?.(V,V-1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </button>
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-down"
                                    type="button"
                                    title="Move down"
                                    aria-label="Move down in queue"
                                    disabled=${!K}
                                    onClick=${()=>K&&G?.(V,V+1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            `}
                            ${F&&N`
                                <button
                                    class="compose-queue-stack-move-btn queue-edit"
                                    data-action="edit"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(B)=>{B.stopPropagation(),Z?.(Y)}}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                            `}
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
                                class="compose-queue-stack-close-btn queue-remove"
                                data-action="remove"
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
    `}function sV({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:V,fileRefs:q=[],onRemoveFileRef:Q,onClearFileRefs:L,folderRefs:K=[],onRemoveFolderRef:F,onClearFolderRefs:B,messageRefs:U=[],onRemoveMessageRef:E,onClearMessageRefs:D,activeModel:H=null,agentModelsPayload:k=null,modelUsage:z=null,thinkingLevel:O=null,supportsThinking:I=!1,contextUsage:x=null,onContextCompact:A,notificationsEnabled:M=!1,notificationPermission:W="default",onToggleNotifications:y,onModelChange:w,onModelStateChange:J,activeEditorPath:P=null,onAttachEditorFile:f,onOpenFilePill:b,followupQueueItems:c=[],onInjectQueuedFollowup:r,onRemoveQueuedFollowup:e,onMoveQueuedFollowup:m,onSubmitIntercept:_0,onMessageResponse:E0,isAgentActive:Z0=!1,activeChatAgents:$0=[],currentChatJid:V0="web:default",connectionStatus:N0="connected",stateAccessFailed:h=!1,onSetFileRefs:j0,onSetFolderRefs:Q0,onSetMessageRefs:O0,onSubmitError:a,onSwitchChat:X0,onRenameSession:W0,isRenameSessionInProgress:P0=!1,onCreateSession:l0,onCreateRootSession:u0,onDeleteSession:G_,onPurgeArchivedSession:h0,onRestoreSession:s0,showQueueStack:f0=!0,statusNotice:o0=null,extensionWorkingState:v0=null,prefillRequest:t0=null}){let[i0,F_]=C(""),[Z_,m0]=C(""),[z0,V_]=C(!1),[d0,H_]=C(!1),[D0,g0]=C("or"),[I0,r0]=C([]),[z_,Q_]=C(!1),[U_,N_]=C([]),[J_,x_]=C(0),[P_,E_]=C(!1),o_=u(null),[f_,q0]=C([]),[v,n]=C(0),[s,G0]=C(!1),[F0,y0]=C(!1),[A0,M0]=C(!1),[T0,c0]=C(!1),[S0,n0]=C([]),[e0,x0]=C(0),[w0,D_]=C(0),[__,d]=C(!1),[B0,p0]=C(!1),[j_,R_]=C(0),[F1,u_]=C(null),[z1,I_]=C(null),[A_,J1]=C(()=>l9()),[W_,k_]=C({kind:"idle",title:"",detail:""}),[A1,l_]=C(()=>Date.now()),[i_,a_]=C(0),B_=u(null),x1=u(null),U1=u(null),b1=u(null),k1=u(null),_$=u(null),h4=u(null),k$=u(null),t_=u({value:"",updatedAt:0}),m_=u(null),M1=u(""),D1=u(""),$1=u(""),M$=u(""),y$=u(!1),$$=u(!1),y_=u(!1),q1=u(0),T$=u(!1),l4=200,j$=tO(V0),p4=(T)=>{let l=new Set,i=[];for(let K0 of T||[]){if(typeof K0!=="string")continue;let R0=K0.trim();if(!R0||l.has(R0))continue;l.add(R0),i.push(R0)}return i},r4=(T=j$)=>{let l=W1(T);if(!l)return[];try{let i=JSON.parse(l);if(!Array.isArray(i))return[];return p4(i)}catch{return[]}},w$=(T,l=j$)=>{q_(l,JSON.stringify(T))},x$=u(r4(j$)),v1=u(-1),m1=u(""),n4=u("");g(()=>{x$.current=r4(j$),v1.current=-1,m1.current=""},[j$]),g(()=>{if(!j)return;fetch("/agent/settings-data").then((T)=>T.json()).then((T)=>{if(T?.searchMatchMode)g0(T.searchMatchMode)}).catch(()=>{})},[j]),g(()=>{let T=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(V0||"web:default")}`).then((i)=>i.ok?i.json():null).then((i)=>{if(T||!i?.commands)return;o_.current=i.commands.map((K0)=>({name:K0.name,description:K0.description||""}))}).catch((i)=>{console.debug("[compose] failed to fetch dynamic commands",i)}),()=>{T=!0}},[V0]),g(()=>{let T=aO(t0,n4.current,j);if(!T.shouldApply)return;n4.current=T.nextToken,u_(null),F_(T.text),H0(T.text),p_(T.text),requestAnimationFrame(()=>{C0();let l=B_.current;if(!l)return;try{l.focus({preventScroll:!0})}catch{l.focus()}let i=T.text.length;l.setSelectionRange?.(i,i)})},[t0,j]),g(()=>{J1(l9())},[]);let Q1=i0.trim()||I0.length>0||q.length>0||K.length>0||U.length>0,S_=W_.kind!=="idle",d4=W_.kind==="requesting_permission"||W_.kind==="listening",I1=!j&&Boolean(A_?.showButton),I$=W_.kind==="requesting_permission"||W_.kind==="listening",o4=I$?"Stop voice input":A_?.title||"Voice input",b5=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),v5=typeof window<"u"&&typeof Notification<"u",Y4=typeof window<"u"?Boolean(window.isSecureContext):!1,i4=v5&&Y4&&W!=="denied",s4=W==="granted"&&M,L1=O$(o0),P$=b2(o0),V4=typeof o0?.detail==="string"&&o0.detail.trim()?o0.detail.trim():"",q4=L1?O6(o0,A1):null,C1=Yz(v0,i_),H1=v0?.indicator&&typeof v0.indicator==="object"?v0.indicator:null,m5=s4?"Disable notifications":"Enable notifications",Q4=I0.length>0||q.length>0||K.length>0||U.length>0,G$=c9(h?N0:"connected"),e_=G$.label,f$=G$.title,a4=jz(Z0,Q1,L1),Z$=Zz(Z0,L1),h6=(Array.isArray($0)?$0:[]).filter((T)=>!T?.archived_at),b_=(()=>{for(let T of Array.isArray($0)?$0:[]){let l=typeof T?.chat_jid==="string"?T.chat_jid.trim():"";if(l&&l===V0)return T}return null})(),e8=Boolean(b_&&b_.chat_jid===(b_.root_chat_jid||b_.chat_jid)),_3=Boolean(e8&&(b_?.chat_jid||V0)==="web:default"),P1=(()=>{let T=typeof b_?.parent_branch_id==="string"?b_.parent_branch_id.trim():"",l=typeof b_?.branch_id==="string"?b_.branch_id.trim():"";if(!b_||!T||!l||b_.archived_at)return null;if((Array.isArray($0)?$0:[]).filter((R0)=>{let K_=typeof R0?.parent_branch_id==="string"?R0.parent_branch_id.trim():"";return K_&&K_===l}).length>0)return null;return(Array.isArray($0)?$0:[]).find((R0)=>{let K_=typeof R0?.branch_id==="string"?R0.branch_id.trim():"";return K_&&K_===T&&!R0?.archived_at})||null})(),L4=Y0(()=>eO($0,V0),[$0,V0]),R$=L4.length>0,S$=R$&&typeof X0==="function",g$=R$&&typeof s0==="function",t4=Boolean(P0||T$.current),X$=!j&&typeof W0==="function"&&!t4,Y$=!j&&typeof l0==="function",K4=!j&&typeof u0==="function",B4=!j&&!Z0&&!B0&&Boolean(P1?.chat_jid),V$=!j&&typeof G_==="function"&&!_3,l6=!j&&typeof h0==="function",q$=!j&&(S$||g$||X$||Y$||K4||B4||V$||l6),p6=Bz(H,k),c5=p6.showPicker,h5=p6.label,l5=I&&O?` (${O})`:"",$3=l5.trim()?`${O}`:"",S=Nz(H,k),p=typeof z?.hint_short==="string"?z.hint_short.trim():"",o=[$3||null,S?.label||null,p||null].filter(Boolean).join(" • "),t=[H?`Current model: ${h5}${l5}`:null,S?.title||null,z?.plan?`Plan: ${z.plan}`:null,p||null,z?.primary?.reset_description||null,z?.secondary?.reset_description||null].filter(Boolean),U0=F0?"Switching model…":t.join(" • ")||(c5?"Select a model (tap to open model picker)":`Current model: ${h5}${l5} (tap to open model picker)`),L0=!j&&(c5||x&&x.percent!=null),J0=(T)=>{if(!T||typeof T!=="object")return;let l=T.model??T.current;if(typeof J==="function")J({...T,model:l??null,thinking_level:T.thinking_level??null,thinking_level_label:T.thinking_level_label??null,supports_thinking:T.supports_thinking,provider_usage:T.provider_usage??null});if(l&&typeof w==="function")w(l)},C0=(T)=>{let l=T||B_.current;if(!l)return;l.style.height="auto",l.style.height=`${l.scrollHeight}px`,l.style.overflowY="hidden"},H0=(T)=>{if(!T.startsWith("/")||T.includes(`
`)){E_(!1),N_([]);return}let l=T.toLowerCase().split(" ")[0];if(l.length<1){E_(!1),N_([]);return}let K0=(o_.current||sO).filter((R0)=>R0.name.startsWith(l)||R0.name.replace(/-/g,"").startsWith(l.replace(/-/g,"")));if(K0.length>0&&!(K0.length===1&&K0[0].name===l))G0(!1),q0([]),N_(K0),x_(0),E_(!0);else E_(!1),N_([])},a0=(T)=>{let l=i0,i=l.indexOf(" "),K0=i>=0?l.slice(i):"",R0=T.name+K0;F_(R0),E_(!1),N_([]),requestAnimationFrame(()=>{let K_=B_.current;if(!K_)return;let n_=R0.length;K_.selectionStart=n_,K_.selectionEnd=n_,K_.focus()})},p_=(T)=>{if(u9(T,{searchMode:j,showSessionSwitcherButton:q$})){G0(!1),q0([]);return}if(S9(T)==null){G0(!1),q0([]);return}let l=fV(h6,T,{currentChatJid:V0});if(l.length>0&&!(l.length===1&&g9(l[0].agent_name).trim().toLowerCase()===String(T||"").trim().toLowerCase()))E_(!1),N_([]),q0(l),n(0),G0(!0);else G0(!1),q0([])},j1=(T)=>{let l=g9(T?.agent_name);if(!l)return;F_(l),G0(!1),q0([]),requestAnimationFrame(()=>{let i=B_.current;if(!i)return;let K0=l.length;i.selectionStart=K0,i.selectionEnd=K0,i.focus()})},Q$=()=>{if(j||!S$&&!g$&&!X$&&!Y$&&!V$)return!1;return t_.current={value:"",updatedAt:0},M0(!1),E_(!1),N_([]),G0(!1),q0([]),c0(!0),!0},sj=(T)=>{if(T?.preventDefault?.(),T?.stopPropagation?.(),j||!S$&&!g$&&!X$&&!Y$&&!V$)return;if(T0){t_.current={value:"",updatedAt:0},c0(!1);return}Q$()},aj=(T)=>{let l=typeof T==="string"?T.trim():"";if(c0(!1),!l||l===V0){requestAnimationFrame(()=>B_.current?.focus());return}X0?.(l)},tj=async(T)=>{let l=typeof T==="string"?T.trim():"";if(c0(!1),!l||typeof s0!=="function"){requestAnimationFrame(()=>B_.current?.focus());return}try{await s0(l)}catch(i){console.warn("Failed to restore session:",i),requestAnimationFrame(()=>B_.current?.focus())}},r_=Y0(()=>{let T=[];for(let l of L4){let i=Boolean(l?.archived_at),K0=typeof l?.agent_name==="string"?l.agent_name.trim():"",R0=typeof l?.chat_jid==="string"?l.chat_jid.trim():"";if(!K0||!R0)continue;T.push({type:"session",key:`session:${R0}`,label:`@${K0} — ${R0}${l?.is_active?" active":""}${i?" archived":""}`,chat:l,disabled:i?!g$:!S$})}if(Y$)T.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(K4)T.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(P1?.chat_jid)T.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!B4});if(X$)T.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:t4});if(V$)T.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return T},[L4,g$,S$,Y$,K4,P1,B4,X$,V$,t4]),ej=async(T)=>{if(T?.preventDefault)T.preventDefault();if(T?.stopPropagation)T.stopPropagation();if(typeof W0!=="function"||P0||T$.current)return;T$.current=!0,c0(!1);try{await W0()}catch(l){console.warn("Failed to rename session:",l)}finally{T$.current=!1}requestAnimationFrame(()=>B_.current?.focus())},_G=async()=>{if(typeof l0!=="function")return;c0(!1);try{await l0()}catch(T){console.warn("Failed to create session:",T)}requestAnimationFrame(()=>B_.current?.focus())},$G=async()=>{if(typeof u0!=="function")return;c0(!1);let T=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",l=String(T||"").trim();if(!l){requestAnimationFrame(()=>B_.current?.focus());return}try{await u0(l)}catch(i){console.warn("Failed to create root session:",i)}requestAnimationFrame(()=>B_.current?.focus())},jG=async()=>{let T=typeof P1?.chat_jid==="string"?P1.chat_jid.trim():"";if(!T||B0||Z0)return;c0(!1),u_(null),I_(null),p0(!0);try{let l=await O1("default","/rollup",null,[],null,V0);E0?.(l),_?.(l);let i=l?.command;if(i?.status==="error"){let R0=i?.message||"Failed to merge current session with parent.";u_(R0),a?.(R0);return}let K0=typeof i?.rolled_up_to==="string"&&i.rolled_up_to.trim()?i.rolled_up_to.trim():T;X0?.(K0)}catch(l){let i=l?.message||"Failed to merge current session with parent.";u_(i),a?.(i),console.warn("Failed to merge session with parent:",l)}finally{p0(!1)}requestAnimationFrame(()=>B_.current?.focus())},GG=async()=>{if(typeof G_!=="function")return;c0(!1);try{await G_(V0)}catch(T){console.warn("Failed to delete session:",T)}requestAnimationFrame(()=>B_.current?.focus())},u$=(T)=>{if(j)m0(T);else F_(T),H0(T),p_(T);requestAnimationFrame(()=>C0())},FF=(T)=>{let l=j?Z_:i0,i=l&&!l.endsWith(`
`)?`
`:"",K0=`${l}${i}${T}`.trimStart();u$(K0)},j3=R(()=>{requestAnimationFrame(()=>{let T=B_.current;if(!T)return;try{T.focus({preventScroll:!0})}catch{T.focus()}})},[]),c1=R(()=>{k_({kind:"idle",title:"",detail:""})},[]),G3=R((T=D1.current,l=$1.current)=>{if(j)return;u$(vV(M1.current,T,l))},[j]),h1=R(()=>{y$.current=!0;let T=m_.current;if(!T){c1();return}try{T.stop()}catch{m_.current=null,c1()}},[c1]),Z3=R(()=>{if(u_(null),I_(null),m_.current){h1();return}if(!A_?.showButton)return;if(A_.mode==="fallback"){j3(),k_({kind:"guidance",title:A_.title||"Use keyboard dictation",detail:A_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!A_?.canStart||!A_?.recognitionCtor){k_({kind:"error",title:A_?.title||"Voice input unavailable",detail:A_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let T=new A_.recognitionCtor;if(m_.current=T,M1.current=String(i0||""),D1.current="",$1.current="",M$.current="",y$.current=!1,T.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",T.interimResults=!0,T.continuous=!1,"maxAlternatives"in T)T.maxAlternatives=1;T.onstart=()=>{k_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},T.onresult=(l)=>{let{finalText:i,interimText:K0}=mV(l?.results,l?.resultIndex||0);if(i)D1.current=`${D1.current} ${i}`.trim();$1.current=K0,G3(),k_({kind:"listening",title:"Listening…",detail:K0?`Heard: ${K0}`:"Speak now. Tap the mic again to stop."})},T.onerror=(l)=>{let i=String(l?.error||"").trim();if(M$.current=i,m_.current=null,$1.current="",i==="aborted"){c1();return}k_({kind:"error",title:"Voice input failed",detail:p9(i,A_)})},T.onend=()=>{let l=M$.current,i=y$.current,K0=Boolean(D1.current.trim()||$1.current.trim());if(m_.current=null,y$.current=!1,M$.current="",$1.current.trim())D1.current=`${D1.current} ${$1.current}`.trim(),$1.current="";if(K0)G3(D1.current,"");if(l&&l!=="aborted")return;if(!K0&&!i){k_({kind:"error",title:"No speech detected",detail:p9("no-speech",A_)});return}c1()},k_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),j3(),T.start()}catch(T){m_.current=null,k_({kind:"error",title:"Voice input failed",detail:T?.message||"Could not start native browser speech recognition."})}},[G3,c1,i0,j3,A_,h1]),UF=(T)=>{let l=T?.command?.model_label;if(l)return l;let i=T?.command?.message;if(typeof i==="string"){let K0=i.match(/•\s+([^\n]+?)\s+\(current\)/);if(K0?.[1])return K0[1].trim()}return null},ZG=async(T)=>{if(j||F0)return;u_(null),I_(null),y0(!0);try{let l=await O1("default",T,null,[],null,V0),i=UF(l);return J0({model:i??H??null,thinking_level:l?.command?.thinking_level,thinking_level_label:l?.command?.thinking_level_label,supports_thinking:l?.command?.supports_thinking}),await h9(w4,V0,J0),I_(hV(T,l)),_?.(l),!0}catch(l){return console.error("Failed to switch model:",l),alert("Failed to switch model: "+l.message),!1}finally{y0(!1)}},DF=(T)=>{if(T.pointerType==="mouse")return;let l=B_.current?.value??(j?Z_:i0);if(!lV(T,l,{searchMode:j,speechButtonVisible:I1,speechButtonActive:I$,canStartSpeech:Boolean(A_?.canStart&&A_?.recognitionCtor)}))return;T.preventDefault(),$$.current=!0,y_.current=!0,Z3()},X3=(T)=>{if(!$$.current)return;if(T?.preventDefault?.(),$$.current=!1,m_.current)h1()},HF=(T)=>{if(y_.current){y_.current=!1,T.preventDefault();return}Z3()},EF=async()=>{await ZG("/cycle-model")},Y3=async(T)=>{let l=typeof T==="string"?T:typeof T?.label==="string"?T.label:"";if(!l||F0)return;let i=pV(T,x);if(i.blocked){u_(null),I_(i.note);return}if(await ZG(`/model ${l}`))M0(!1)},WF=(T)=>{if(!T||T.disabled)return;if(T.type==="session"){let l=T.chat;if(l?.archived_at)tj(l.chat_jid);else aj(l.chat_jid);return}if(T.type==="action"){if(T.action==="new"){_G();return}if(T.action==="new-root"){$G();return}if(T.action==="rollup"){jG();return}if(T.action==="rename"){ej();return}if(T.action==="delete")GG()}},OF=(T)=>{T.preventDefault(),T.stopPropagation(),t_.current={value:"",updatedAt:0},c0(!1),M0((l)=>!l)},zF=async()=>{if(j)return;A?.(),await e4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},JF=(T)=>{if(T==="queue"||T==="steer"||T==="auto")return T;return Z0?"queue":void 0},e4=async(T,l,i={})=>{let K0=typeof T==="string"?T:i0;if(/^\/settings\s*$/i.test(K0.trim())){F_(""),requestAnimationFrame(()=>C0()),i1();return}if(/^\/help\s*$/i.test(K0.trim())){F_(""),requestAnimationFrame(()=>C0()),i1({section:"keyboard"});return}let{includeMedia:R0=!0,includeFileRefs:K_=!0,includeFolderRefs:n_=!0,includeMessageRefs:c_=!0,clearAfterSubmit:f1=!0,recordHistory:y1=!0}=i||{},XG=typeof T==="string"?T:T&&typeof T?.target?.value==="string"?T.target.value:i0,YG=typeof XG==="string"?XG:"";if(!YG.trim()&&(R0?I0.length===0:!0)&&(K_?q.length===0:!0)&&(n_?K.length===0:!0)&&(c_?U.length===0:!0))return;if(m_.current)h1();c1(),E_(!1),N_([]),G0(!1),q0([]),c0(!1),u_(null),I_(null);let r6=R0?[...I0]:[],n6=K_?[...q]:[],d6=n_?[...K]:[],o6=c_?[...U]:[],N4=YG.trim();if(y1&&N4){let F4=x$.current,K1=p4(F4.filter((q3)=>q3!==N4));if(K1.push(N4),K1.length>200)K1.splice(0,K1.length-200);x$.current=K1,w$(K1),v1.current=-1,m1.current=""}let uF=()=>{if(R0)r0([...r6]);if(K_)j0?.(n6);if(n_)Q0?.(d6);if(c_)O0?.(o6);F_(N4),requestAnimationFrame(()=>C0())};if(f1)F_(""),r0([]),L?.(),B?.(),D?.();(async()=>{try{let F4=await _0?.({content:N4,submitMode:l,fileRefs:n6,folderRefs:d6,messageRefs:o6,mediaFiles:r6});if(F4){_?.(F4);return}let K1=[];for(let L$ of r6){let i6=await P7(L$);K1.push(i6.id)}let q3=n6.length?`Files:
${n6.map((L$)=>`- ${L$}`).join(`
`)}`:"",bF=d6.length?`Folders:
${d6.map((L$)=>`- ${L$}`).join(`
`)}`:"",vF=o6.length?`Referenced messages:
${o6.map((L$)=>`- message:${L$}`).join(`
`)}`:"",mF=K1.length?`Attachments:
${K1.map((L$,i6)=>{let hF=r6[i6]?.name||`attachment-${i6+1}`;return`- attachment:${L$} (${hF})`}).join(`
`)}`:"",cF=[N4,q3,bF,vF,mF].filter(Boolean).join(`

`),b$=await O1("default",cF,null,K1,JF(l),V0);if(E0?.(b$),b$?.command)J0({model:b$.command.model_label??H??null,thinking_level:b$.command.thinking_level,thinking_level_label:b$.command.thinking_level_label,supports_thinking:b$.command.supports_thinking}),await h9(w4,V0,J0);I_(hV(N4,b$)),_?.(b$)}catch(F4){if(f1)uF();let K1=F4?.message||"Failed to send message.";u_(K1),a?.(K1),console.error("Failed to post:",F4)}})()},AF=(T)=>{r?.(T)},kF=R((T)=>{Oz({queuedItem:T,onRemoveQueuedFollowup:e,setSubmitError:u_,setSubmitNotice:I_,setMediaFiles:r0,onSetFileRefs:j0,onSetFolderRefs:Q0,onSetMessageRefs:O0,setContent:F_,textareaRef:B_,resizeTextarea:C0})},[e,j0,Q0,O0,C0]),p5=R((T)=>{if(j||!A0&&!T0||T?.isComposing)return!1;let l=()=>{T.preventDefault?.(),T.stopPropagation?.()},i=()=>{t_.current={value:"",updatedAt:0}};if(T.key==="Escape"){if(l(),i(),A0)M0(!1);if(T0)c0(!1);return!0}if(A0){if(T.key==="ArrowDown"){if(l(),i(),S0.length>0)x0((K0)=>(K0+1)%S0.length);return!0}if(T.key==="ArrowUp"){if(l(),i(),S0.length>0)x0((K0)=>(K0-1+S0.length)%S0.length);return!0}if((T.key==="Enter"||T.key==="Tab")&&S0.length>0)return l(),i(),Y3(S0[Math.max(0,Math.min(e0,S0.length-1))]),!0;if(y6(T)&&S0.length>0){l();let K0=f9(t_.current,T.key);t_.current=K0;let R0=R9(S0,K0.value,e0,(K_)=>Kz(K_));if(R0>=0)x0(R0);return!0}}if(T0){if(T.key==="ArrowDown"){if(l(),i(),r_.length>0)D_((K0)=>(K0+1)%r_.length);return!0}if(T.key==="ArrowUp"){if(l(),i(),r_.length>0)D_((K0)=>(K0-1+r_.length)%r_.length);return!0}if((T.key==="Enter"||T.key==="Tab")&&r_.length>0)return l(),i(),WF(r_[Math.max(0,Math.min(w0,r_.length-1))]),!0;if(y6(T)&&r_.length>0){l();let K0=f9(t_.current,T.key);t_.current=K0;let R0=R9(r_,K0.value,w0,(K_)=>K_.label);if(R0>=0)D_(R0);return!0}}return!1},[j,A0,T0,S0,e0,r_,w0,Y3]),MF=(T)=>{if(T.isComposing)return;if(j&&T.key==="Escape"){T.preventDefault(),m0(""),V?.();return}if(p5(T))return;let l=B_.current?.value??(j?Z_:i0);if(lV(T,l,{searchMode:j,speechButtonVisible:I1,speechButtonActive:I$,canStartSpeech:Boolean(A_?.canStart&&A_?.recognitionCtor)})){T.preventDefault(),$$.current=!0,Z3();return}if(SV(T,l,{searchMode:j,showSessionSwitcherButton:q$})){T.preventDefault(),Q$();return}if(s&&f_.length>0){let i=B_.current?.value??(j?Z_:i0);if(!String(i||"").match(/^@([a-zA-Z0-9_-]*)$/))G0(!1),q0([]);else{if(T.key==="ArrowDown"){T.preventDefault(),n((K0)=>(K0+1)%f_.length);return}if(T.key==="ArrowUp"){T.preventDefault(),n((K0)=>(K0-1+f_.length)%f_.length);return}if(T.key==="Tab"||T.key==="Enter"){T.preventDefault(),j1(f_[v]);return}if(T.key==="Escape"){T.preventDefault(),G0(!1),q0([]);return}}}if(P_&&U_.length>0){let i=B_.current?.value??(j?Z_:i0);if(!String(i||"").startsWith("/"))E_(!1),N_([]);else{if(T.key==="ArrowDown"){T.preventDefault(),x_((K0)=>(K0+1)%U_.length);return}if(T.key==="ArrowUp"){T.preventDefault(),x_((K0)=>(K0-1+U_.length)%U_.length);return}if(T.key==="Tab"){T.preventDefault(),a0(U_[J_]);return}if(T.key==="Enter"&&!T.shiftKey){if(!l.includes(" ")){T.preventDefault();let R0=U_[J_];E_(!1),N_([]),e4(R0.name);return}}if(T.key==="Escape"){T.preventDefault(),E_(!1),N_([]);return}}}if(!j&&(T.key==="ArrowUp"||T.key==="ArrowDown")&&!T.metaKey&&!T.ctrlKey&&!T.altKey&&!T.shiftKey){let i=B_.current;if(!i)return;let K0=i.value||"",R0=i.selectionStart===0&&i.selectionEnd===0,K_=i.selectionStart===K0.length&&i.selectionEnd===K0.length;if(T.key==="ArrowUp"&&R0||T.key==="ArrowDown"&&K_){let n_=x$.current;if(!n_.length)return;T.preventDefault();let c_=v1.current;if(T.key==="ArrowUp"){if(c_===-1)m1.current=K0,c_=n_.length-1;else if(c_>0)c_-=1;v1.current=c_,u$(n_[c_]||"")}else{if(c_===-1)return;if(c_<n_.length-1)c_+=1,v1.current=c_,u$(n_[c_]||"");else v1.current=-1,u$(m1.current||""),m1.current=""}requestAnimationFrame(()=>{let f1=B_.current;if(!f1)return;let y1=f1.value.length;f1.selectionStart=y1,f1.selectionEnd=y1});return}}if(T.key==="Enter"&&!T.shiftKey&&(T.ctrlKey||T.metaKey)){if(T.preventDefault(),j){if(l.trim())Z?.(l.trim(),G,{images:z0,attachments:d0})}else e4(l,"steer");return}if(T.key==="Enter"&&!T.shiftKey){if(T.preventDefault(),j){if(l.trim())Z?.(l.trim(),G,{images:z0,attachments:d0})}else e4(l);return}if(T.key==="Escape"){if(A0||T0||P_||s)return;T.preventDefault(),B_.current?.blur()}},yF=(T)=>{if(Gz(T,$$.current)){if(T.preventDefault(),$$.current=!1,m_.current)h1()}},V3=(T)=>{let l=Array.from(T||[]).filter((i)=>i instanceof File&&!String(i.name||"").startsWith(".DS_Store"));if(!l.length)return;r0((i)=>[...i,...l]),u_(null)},TF=(T)=>{V3(T.target.files),T.target.value=""},wF=(T)=>{if(j)return;T.preventDefault(),T.stopPropagation(),q1.current+=1,Q_(!0)},xF=(T)=>{if(j)return;if(T.preventDefault(),T.stopPropagation(),q1.current=Math.max(0,q1.current-1),q1.current===0)Q_(!1)},IF=(T)=>{if(j)return;if(T.preventDefault(),T.stopPropagation(),T.dataTransfer)T.dataTransfer.dropEffect="copy";Q_(!0)},CF=(T)=>{if(j)return;T.preventDefault(),T.stopPropagation(),q1.current=0,Q_(!1),V3(T.dataTransfer?.files||[])},PF=(T)=>{if(j)return;let l=T.clipboardData?.items;if(!l||!l.length)return;let i=[];for(let K0 of l){if(K0.kind!=="file")continue;let R0=K0.getAsFile?.();if(R0)i.push(R0)}if(i.length>0)T.preventDefault(),V3(i)},fF=(T)=>{r0((l)=>l.filter((i,K0)=>K0!==T))},RF=()=>{u_(null),r0([]),L?.(),B?.(),D?.()},SF=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((T)=>{let{latitude:l,longitude:i,accuracy:K0}=T.coords,R0=`${l.toFixed(5)}, ${i.toFixed(5)}`,K_=Number.isFinite(K0)?` ±${Math.round(K0)}m`:"",n_=`https://maps.google.com/?q=${l},${i}`,c_=`Location: ${R0}${K_} ${n_}`;FF(c_)},(T)=>{let l=T?.message||"Unable to retrieve location.";alert(`Location error: ${l}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!A0)return;t_.current={value:"",updatedAt:0},d(!0),w4(V0).then((T)=>{n0(dV(T)),J0(T)}).catch((T)=>{console.warn("Failed to load model list:",T),n0([])}).finally(()=>{d(!1)})},[A0,H]),g(()=>{if(j)M0(!1),c0(!1),E_(!1),N_([]),G0(!1),q0([])},[j]),g(()=>{if(T0&&!q$)c0(!1)},[T0,q$]),g(()=>{if(!A0)return;let T=S0.findIndex((l)=>l?.label===H);x0(T>=0?T:0)},[A0,S0,H]),g(()=>{if(!T0)return;D_($z(r_,V0)),t_.current={value:"",updatedAt:0}},[T0,V0,r_]),g(()=>{if(!A0)return;let T=(l)=>{let i=b1.current,K0=k1.current,R0=l.target;if(i&&i.contains(R0))return;if(K0&&K0.contains(R0))return;M0(!1)};return document.addEventListener("pointerdown",T),()=>document.removeEventListener("pointerdown",T)},[A0]),g(()=>{if(!T0)return;let T=(l)=>{let i=_$.current,K0=h4.current,R0=l.target;if(i&&i.contains(R0))return;if(K0&&K0.contains(R0))return;c0(!1)};return document.addEventListener("pointerdown",T),()=>document.removeEventListener("pointerdown",T)},[T0]),g(()=>{if(j||!A0&&!T0)return;let T=(l)=>{p5(l)};return document.addEventListener("keydown",T,!0),()=>document.removeEventListener("keydown",T,!0)},[j,A0,T0,p5]),g(()=>{if(!A0)return;let T=b1.current;T?.focus?.(),T?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[A0,e0,S0]),g(()=>{if(!T0)return;let T=_$.current;T?.focus?.(),T?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[T0,w0,r_.length]),g(()=>{if(!s||!U1.current)return;U1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[s,v,f_.length]),g(()=>{if(!P_||!x1.current)return;x1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[P_,J_,U_.length]),g(()=>{let T=(i)=>{if(!i||typeof i!=="object")return!1;if(i.isContentEditable)return!0;if(typeof i.closest!=="function")return!1;return Boolean(i.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},l=(i)=>{if(i.ctrlKey||i.metaKey||i.altKey)return;let K0=B_.current;if(!K0)return;let R0=document.activeElement===K0;if(i.key==="Escape"&&!R0&&!T(i.target)){i.preventDefault(),K0.focus();return}if(i.key==="/"&&!R0&&!T(i.target))i.preventDefault(),u$("/"),requestAnimationFrame(()=>{K0.focus(),K0.selectionStart=1,K0.selectionEnd=1,H0("/")})};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),g(()=>{let T=()=>{let K_=k$.current?.clientWidth||0;R_((n_)=>n_===K_?n_:K_)};T();let l=k$.current,i=0,K0=()=>{if(i)cancelAnimationFrame(i);i=requestAnimationFrame(()=>{i=0,T()})},R0=null;if(l&&typeof ResizeObserver<"u")R0=new ResizeObserver(()=>K0()),R0.observe(l);if(typeof window<"u")window.addEventListener("resize",K0);return()=>{if(i)cancelAnimationFrame(i);if(R0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",K0)}},[j,H,b_?.agent_name,q$,x?.percent]);let gF=(T)=>{let l=T.target.value;if(m_.current&&T?.isTrusted)h1();if(u_(null),I_(null),W_.kind==="guidance"||W_.kind==="error")c1();if(T0)c0(!1);if(C0(T.target),u9(l,{searchMode:j,showSessionSwitcherButton:q$})){u$(""),requestAnimationFrame(()=>{let i=B_.current;if(!i)return;i.value="",i.selectionStart=0,i.selectionEnd=0,i.focus()}),Q$();return}u$(l)};return g(()=>{requestAnimationFrame(()=>C0())},[i0,Z_,j]),g(()=>{if(!j)return;if(m_.current)h1();return},[j,h1]),g(()=>{if(m_.current)h1();c1()},[V0,c1,h1]),g(()=>{return()=>{if(!m_.current)return;try{m_.current.stop()}catch(T){console.debug("[compose] failed to stop speech recognition during cleanup",T)}m_.current=null}},[]),g(()=>{if(!L1)return;l_(Date.now());let T=setInterval(()=>l_(Date.now()),1000);return()=>clearInterval(T)},[L1,o0?.started_at,o0?.startedAt]),g(()=>{if(a_(0),H1?.mode!=="custom"||!Array.isArray(H1.frames)||H1.frames.length<=1)return;let T=typeof H1.intervalMs==="number"&&Number.isFinite(H1.intervalMs)&&H1.intervalMs>0?H1.intervalMs:120,l=setInterval(()=>{a_((i)=>(i+1)%H1.frames.length)},T);return()=>clearInterval(l)},[H1]),g(()=>{if(j)return;p_(i0)},[h6,V0,i0,j]),N`
        <div class="compose-box" data-testid="compose-box">
            ${S_&&N`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${W_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${m9({pulsing:d4})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${W_.title}</span>
                    </div>
                    ${W_.detail&&N`<div class="compose-inline-status-detail">${W_.detail}</div>`}
                </div>
            `}
            ${f0&&!j&&N`
                <${zz}
                    items=${c}
                    onInjectQueuedFollowup=${AF}
                    onRemoveQueuedFollowup=${e}
                    onMoveQueuedFollowup=${m}
                    onReturnQueuedFollowup=${kF}
                    onOpenFilePill=${b}
                />
            `}
            ${C1.visible&&N`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${C1.indicatorText?N`<span class="compose-inline-status-glyph" aria-hidden="true">${C1.indicatorText}</span>`:C1.animateSpinner?N`<div class="compose-inline-status-spinner" aria-hidden="true"></div>`:C1.animateDot?N`<span class=${m9({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${C1.title}</span>
                    </div>
                </div>
            `}
            ${o0&&!L1&&N`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${V4||""}
                >
                    <div class="compose-inline-status-row">
                        <div class="compose-inline-status-spinner" aria-hidden="true"></div>
                        <span class="compose-inline-status-title">${P$}</span>
                        ${q4&&N`<span class="compose-inline-status-elapsed">${q4}</span>`}
                    </div>
                    ${V4&&N`<div class="compose-inline-status-detail">${V4}</div>`}
                </div>
            `}
            ${z1&&N`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:Z1(z1)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${z_?" drag-active":""}`}
                onDragEnter=${wF}
                onDragOver=${IF}
                onDragLeave=${xF}
                onDrop=${CF}
            >
                ${q$&&N`
                    <div
                        ref=${h4}
                        class="compose-session-trigger-group compose-session-trigger-top"
                    >
                        <button
                            type="button"
                            class=${`compose-session-trigger compose-session-trigger-pill${T0?" active":""}`}
                            data-testid="session-switcher"
                            onClick=${sj}
                            title=${b_?.chat_jid||V0}
                            aria-label=${b_?.agent_name?`Manage sessions for @${b_.agent_name}`:"Manage Sessions/Agents"}
                            aria-expanded=${T0?"true":"false"}
                        >
                            <span class="compose-current-agent-label active">${b_?.agent_name?`@${b_.agent_name}`:"Sessions"}</span>
                        </button>
                    </div>
                `}
                <div class="compose-input-main">
                    ${Q4&&N`
                        <div class="compose-file-refs">
                            ${U.map((T)=>{return N`
                                    <${V1}
                                        key=${"msg-"+T}
                                        prefix="compose"
                                        label=${"msg:"+T}
                                        title=${"Message reference: "+T}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>E?.(T)}
                                    />
                                `})}
                            ${q.map((T)=>{let l=T.split("/").pop()||T;return N`
                                    <${V1}
                                        prefix="compose"
                                        label=${l}
                                        title=${T}
                                        onClick=${()=>b?.(T)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>Q?.(T)}
                                    />
                                `})}
                            ${K.map((T)=>{let l=T.split("/").pop()||T;return N`
                                    <${V1}
                                        prefix="compose"
                                        label=${l}
                                        title=${T}
                                        icon="folder"
                                        onClick=${()=>b?.(T)}
                                        removeTitle="Remove folder hint"
                                        onRemove=${()=>F?.(T)}
                                    />
                                `})}
                            ${I0.map((T,l)=>{let i=T?.name||`attachment-${l+1}`;return N`
                                    <${V1}
                                        key=${i+l}
                                        prefix="compose"
                                        label=${i}
                                        title=${i}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>fF(l)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${RF}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${B_}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Z_:i0}
                        onInput=${gF}
                        onKeyDown=${MF}
                        onKeyUp=${yF}
                        onPaste=${PF}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${s&&f_.length>0&&N`
                        <div class="slash-autocomplete" ref=${U1}>
                            ${f_.map((T,l)=>N`
                                <div
                                    key=${T.chat_jid||T.agent_name}
                                    class=${`slash-item${l===v?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),j1(T)}}
                                    onMouseEnter=${()=>n(l)}
                                >
                                    <span class="slash-name">@${T.agent_name}</span>
                                    <span class="slash-desc">${T.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${P_&&U_.length>0&&N`
                        <div class="slash-autocomplete" ref=${x1}>
                            ${U_.map((T,l)=>N`
                                <div
                                    key=${T.name}
                                    class=${`slash-item${l===J_?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),a0(T)}}
                                    onMouseEnter=${()=>x_(l)}
                                >
                                    <span class="slash-name">${T.name}</span>
                                    <span class="slash-desc">${T.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${A0&&!j&&N`
                        <div class="compose-model-popup" ref=${b1} tabIndex="-1" onKeyDown=${p5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${__&&N`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!__&&S0.length===0&&N`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!__&&S0.map((T,l)=>{let i=typeof T?.label==="string"?T.label:"",K0=r9(T?.contextWindow),R0=T?.name||null,K_=pV(T,x);return N`
                                        <button
                                            key=${i}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${e0===l?" active":""}${H===i?" current-model":""}${K_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{Y3(T)}}
                                            disabled=${F0||K_.blocked}
                                            title=${[i,R0,K0,K_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${Qz(i,T?.contextWindow)}${R0?N` <span class="compose-model-popup-model-subtitle">${R0}</span>`:""}</span>
                                                ${K_.blocked&&N`<span class="compose-model-popup-model-note">${K_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{EF()}}
                                    disabled=${F0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${T0&&!j&&N`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${_$} tabIndex="-1" onKeyDown=${p5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!R$&&N`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${R$&&L4.map((T,l)=>{let i=Boolean(T.archived_at),K0=T.chat_jid===(T.root_chat_jid||T.chat_jid),R0=!K0&&!T.is_active&&!i&&typeof G_==="function",K_=i&&l6,n_=X8(T,{currentChatJid:V0});return N`
                                        <div key=${T.chat_jid} class=${`compose-model-popup-item-row${i?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${i?" archived":""}${w0===l?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(i){tj(T.chat_jid);return}aj(T.chat_jid)}}
                                                disabled=${i?!g$:!S$}
                                                title=${i?`Restore archived ${`@${T.agent_name}`}`:`Switch to ${`@${T.agent_name}`}`}
                                            >
                                                <span style=${_z(T)?"font-weight:700":""}>${n_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${T.agent_name} in new window`}
                                                aria-label=${`Open @${T.agent_name} in new window`}
                                                onClick=${(c_)=>{c_.stopPropagation(),c0(!1);let f1=new URL(window.location.href);f1.searchParams.set("chat_jid",T.chat_jid),f1.searchParams.set("chat_only","1");let y1=document.createElement("a");y1.href=f1.toString(),y1.target="_blank",y1.rel="noopener",y1.style.display="none",document.body.appendChild(y1),y1.click(),y1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(R0||K_)&&N`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${K_?K0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${K_?K0?`Permanently delete archived session @${T.agent_name}`:`Permanently delete archived branch @${T.agent_name}`:`Delete @${T.agent_name}`}
                                                    onClick=${(c_)=>{if(c_.stopPropagation(),c0(!1),K_){h0?.(T.chat_jid);return}G_(T.chat_jid)}}
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
                            ${(Y$||K4||X$||V$)&&N`
                                <div class="compose-model-popup-actions">
                                    ${Y$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${r_.findIndex((T)=>T.key==="action:new")===w0?" active":""}`}
                                            onClick=${()=>{_G()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${K4&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${r_.findIndex((T)=>T.key==="action:new-root")===w0?" active":""}`}
                                            onClick=${()=>{$G()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${P1?.chat_jid&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${r_.findIndex((T)=>T.key==="action:rollup")===w0?" active":""}`}
                                            onClick=${()=>{jG()}}
                                            title=${B4?`Merge this branch into ${P1.agent_name?`@${P1.agent_name}`:P1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!B4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${X$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${r_.findIndex((T)=>T.key==="action:rename")===w0?" active":""}`}
                                            onClick=${(T)=>{ej(T)}}
                                            title="Rename the current session"
                                            disabled=${t4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${V$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${r_.findIndex((T)=>T.key==="action:delete")===w0?" active":""}`}
                                            onClick=${()=>{GG()}}
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
                <div class="compose-footer" ref=${k$}>
                    ${G$.show&&N`
                        <span class="compose-connection-status connection-status ${G$.statusClass}" title=${f$}>
                            ${e_}
                        </span>
                    `}
                    ${L0&&N`
                    <div class="compose-meta-row">
                        ${c5&&N`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${U0}
                                    aria-label="Open model picker"
                                    onClick=${OF}
                                    disabled=${F0}
                                >
                                    ${F0?"Switching…":h5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!F0&&o&&N`
                                        <span class="compose-model-usage-hint" title=${U0}>
                                            ${o}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&x&&x.percent!=null&&N`
                            <${Vz}
                                usage=${x}
                                onCompact=${zF}
                                compactionLabel=${L1?q4||"0:00":""}
                                compactionTitle=${L1?P$||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${j&&N`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${G}
                                onChange=${(T)=>X?.(T.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${z0} onChange=${()=>V_((T)=>!T)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${d0} onChange=${()=>H_((T)=>!T)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${D0==="and"?"active":""}`}
                            onClick=${()=>{let T=D0==="or"?"and":"or";g0(T),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:T})}).catch((l)=>{})}}
                            title=${D0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${D0==="or"?"OR":"AND"}
                        </button>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?V:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?N`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:N`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${b5&&!j&&N`
                        <button
                            class="icon-btn location-btn"
                            onClick=${SF}
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
                    ${I1&&N`
                        <button
                            class=${`icon-btn voice-input-btn${I$?" active":""}${A_.mode==="fallback"?" fallback":""}`}
                            onClick=${HF}
                            onPointerDown=${DF}
                            onPointerUp=${X3}
                            onPointerCancel=${X3}
                            onPointerLeave=${X3}
                            title=${o4}
                            aria-label=${o4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${i4&&!j&&N`
                        <button
                            class=${`icon-btn notification-btn${s4?" active":""}`}
                            onClick=${y}
                            title=${m5}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&N`
                        ${P&&f&&N`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${f}
                                title=${`Attach open file: ${P}`}
                                type="button"
                                disabled=${q.includes(P)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${TF} />
                        </label>
                    `}
                    ${!j&&N`
                        <div class="compose-send-stack">
                                <button 
                                    class=${a4.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{e4()}}
                                    disabled=${a4.disabled}
                                    title=${a4.title}
                                    aria-label=${a4.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${Z$&&N`
                                    <button 
                                        class=${Z$.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(Xz(Z$.mode))e4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${Z$.disabled}
                                        title=${Z$.title}
                                        aria-label=${Z$.ariaLabel}
                                    >
                                        ${Z$.mode==="compacting"?N`
                                                <span class="compose-submit-spinner" aria-hidden="true">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                        <circle class="compose-submit-spinner-ring" cx="12" cy="12" r="10.5" stroke-width="2.25" stroke-linecap="round"></circle>
                                                        <rect class="compose-submit-spinner-stop" x="6" y="6" width="12" height="12" rx="0" fill="currentColor"></rect>
                                                    </svg>
                                                </span>
                                            `:N`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2.5"/></svg>`}
                                    </button>
                                `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}k0();function aV({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return N`
    <section class=${`oobe-panel oobe-panel-${_}`} aria-label="Getting started">
      <div class="oobe-panel-copy">
        <div class="oobe-panel-eyebrow">Getting started</div>
        <h2 class="oobe-panel-title">${Z}</h2>
        <p class="oobe-panel-body">${X}</p>
      </div>
      <div class="oobe-panel-actions">
        <button type="button" class="oobe-panel-btn oobe-panel-btn-primary" onClick=${()=>$?.()}>
          Open Settings
        </button>
        <button type="button" class="oobe-panel-btn" onClick=${()=>j?.()}>
          ${G?"Dismiss":"Done"}
        </button>
      </div>
    </section>
  `}k0();function tV(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function eV(_){return String(_||"").trim()||"web:default"}function _q(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function $q(_){if(!_)return!1;return _.status!=="running"}function jq(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function Gq({session:_,onClose:$,onInject:j,onRetry:G}){let Z=u(null),X=u(null),Y=_?.thinking?G6(_.thinking):"",V=_?.answer?Z1(_.answer,null):"";if(g(()=>{if(Z.current&&Y)E$(Z.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",E)})},[Y]),g(()=>{if(X.current&&V)E$(X.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",E)})},[V]),!_)return null;let q=_.status==="running",Q=Boolean(String(_.answer||"").trim()),L=Boolean(String(_.thinking||"").trim()),K=_q(_),F=$q(_),B=!q&&Q,U=q?"Thinking…":_.status==="error"?"Error":"Done";return N`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${U}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&N`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&N`<div class="btw-block btw-error">${_.error}</div>`}
            ${L&&N`
                <details class="btw-block btw-thinking" open=${q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${K&&N`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${X}
                        dangerouslySetInnerHTML=${{__html:V}}
                    ></div>
                </div>
            `}

            ${F&&N`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&N`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>G?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!B}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}k0();function n9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function d9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function Jz(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function Az(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function e$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function X_(_){return typeof _==="string"&&_.trim()?_.trim():null}function Xq(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var Yq="__PICLAW_WIDGET_HOST__:";function Zq(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function o9(_,$){if(!_||_.type!=="generated_widget")return null;let j=Jz(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:Xq(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function Vq(_){if(!_||typeof _!=="object")return null;let $=Az(_),j=X_(_?.widget_id)||X_(_?.widgetId)||X_(_?.tool_call_id)||X_(_?.toolCallId),G=X_(_?.tool_call_id)||X_(_?.toolCallId),Z=X_(_?.turn_id)||X_(_?.turnId),X=X_(_?.title)||X_(_?.name)||"Generated widget",Y=X_(_?.subtitle)||"",V=X_(_?.description)||Y,q=X_(_?.status),Q=q==="loading"||q==="streaming"||q==="final"||q==="error"?q:"streaming";return{title:X,subtitle:Y,description:V,originPostId:e$(_?.origin_post_id)??e$(_?.originPostId),originChatJid:X_(_?.origin_chat_jid)||X_(_?.originChatJid)||X_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:Xq(_?.capabilities,!0),source:"live",status:Q,turnId:Z,toolCallId:G,width:e$(_?.width),height:e$(_?.height),error:X_(_?.error)}}function qq(_){return o9(_,null)!==null}function N1(_){let $=X_(_?.toolCallId)||X_(_?.tool_call_id);if($)return $;let j=X_(_?.widgetId)||X_(_?.widget_id);if(j)return j;let G=e$(_?.originPostId)??e$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function Qq(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function Lq(_){return Qq(_)?"allow-downloads allow-scripts allow-same-origin allow-forms":"allow-downloads"}function q8(_){return{title:X_(_?.title)||"Generated widget",widgetId:X_(_?.widgetId)||X_(_?.widget_id),toolCallId:X_(_?.toolCallId)||X_(_?.tool_call_id),turnId:X_(_?.turnId)||X_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:X_(_?.status)||"final"}}function Q8(_){return{...q8(_),subtitle:X_(_?.subtitle)||"",description:X_(_?.description)||"",error:X_(_?.error)||null,width:e$(_?.width),height:e$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function L8(_){return`${Yq}${JSON.stringify(Q8(_))}`}function Kq(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=X_(_.text)||X_(_.content)||X_(_.message)||X_(_.prompt)||X_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=X_(j.text)||X_(j.content)||X_(j.message)||X_(j.prompt)||X_(j.value);if(G)return G}return null}function Bq(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Nq(_){let $=X_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return X_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function kz(_){let $=q8(_);return`<script>
(function () {
  const meta = ${Zq($)};
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

  const windowNamePrefix = ${Zq(Yq)};
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
</script>`}function Fq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let V=Qq(_),q=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",V?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),Q=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,L=V?kz(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${q}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${X.replace(/[<&>]/g,"")}</title>
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
${L}
</head>
<body>${Q}</body>
</html>`}k0();function Mz(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let V=$.get(Y.id);if(!V)continue;let q=Y.parentId?$.get(Y.parentId):null;if(q)q.children.push(V);else j.push(V)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let V=Y.children[0];if(V.role!=="toolResult")continue;Y.resultDetail=V.detail||null,Y.resultLength=V.contentLength||0,Y.resultId=V.id,Y.merged=!0,Y.children=V.children;for(let q of Y.children)q.parentId=Y.id;G.add(V.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),V=Y.children.length>1;for(let q=Y.children.length-1;q>=0;q--)Y.children[q].depth=V?Y.depth+1:Y.depth,X.push(Y.children[q])}return Z}function yz(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function Uq(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function y5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function Tz(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function wz(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function Dq(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function xz(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(V)=>typeof V==="string"&&Z.some((q)=>q?.id===V);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((V)=>V?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function Iz(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=Dq(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function Hq({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,V]=C(()=>({loading:!j,error:null,data:j})),[q,Q]=C(()=>j?.leafId||null),[L,K]=C(""),F=u(null),B=u(null),U=u(j?.leafId||null),E=u(null),D=u(""),H=async()=>{V((M)=>({...M,loading:!0,error:null}));try{let M=G?`?chat_jid=${encodeURIComponent(G)}`:"",W=await fetch(`/agent/session-tree${M}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),y=await W.json().catch(()=>({}));if(!W.ok)throw Error(y?.error||`HTTP ${W.status}`);V({loading:!1,error:null,data:y})}catch(M){V((W)=>({loading:!1,error:M?.message||"Failed to load tree.",data:W?.data||j||null}))}};E.current=H,g(()=>{H()},[G]);let k=Y0(()=>{let M=Y.data;if(!M||!Array.isArray(M.nodes)||M.nodes.length===0)return[];return yz(M.flat?Mz(M.nodes):M.nodes)},[Y.data]);g(()=>{let M=xz(k,q,U.current,Y.data?.leafId||null);if(M!==q)Q(M);if(U.current&&Y.data?.leafId===U.current)U.current=null},[k,q,Y.data?.leafId]);let z=Y0(()=>{let M=(L||"").trim().toLowerCase();if(!M)return k;return k.filter((W)=>{return[W.preview,W.toolInput,W.toolInputFull,W.detail,W.toolName,W.role,W.id,W.resultDetail,W.type,W.label].some((w)=>typeof w==="string"&&w.toLowerCase().includes(M))})},[k,L]),O=Y0(()=>z.find((M)=>M.id===q)||null,[z,q]),I=Y0(()=>Iz(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);g(()=>{if(B.current)B.current.scrollIntoView({block:"center",behavior:"auto"})},[q,Y.data?.leafId,z.length]),g(()=>{let M=Dq(X?.preview);if(M?.targetId)U.current=M.targetId;let W=I?.refreshDelays||[];if(!W.length)return;let y=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(D.current===y)return;D.current=y;let w=W.map((J)=>setTimeout(()=>E.current?.(),J));return()=>w.forEach((J)=>clearTimeout(J))},[G,X?.type,X?.submittedAt,X?.preview,I?.refreshDelays]);let x=(M=!1)=>{let W=O?.id,y=wz(W,M);if(!y)return;U.current=y.navigateTargetId,$?.({kind:"widget.submit",payload:y},_)},A=I?.tone||"info";return N`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>H()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
                    <input ref=${F}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${L}
                        onInput=${(M)=>K(M.currentTarget.value)}
                        onKeyDown=${(M)=>{if(M.key==="Escape")K(""),M.currentTarget.blur()}}
                    />
                    ${L&&N`<span class="session-tree-meta">${z.length} match${z.length!==1?"es":""}</span>`}
                    ${Y.error&&N`<span class="session-tree-error-inline">${Y.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${I?.text&&N`<span class=${`session-tree-host-update ${A}`}>${I.text}</span>`}
                    ${Y.data?.capped&&N`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&N`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&z.length===0&&!L&&N`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&z.length===0&&!L&&N`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&z.length===0&&L&&N`<div class="session-tree-empty">No entries match \u201c${L}\u201d</div>`}
                    ${z.map((M)=>{let W=q===M.id,y=`st-row${M.active?" active":""}${W?" selected":""}`,w=(M.children||[]).length>1,J=Tz(M);return N`
                            <button key=${M.id} ref=${M.active||W?B:null}
                                class=${y} type="button" role="treeitem" aria-selected=${W}
                                onClick=${()=>Q(M.id)}>
                                <span class="st-indent" style=${`width:${(M.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${M.active?" active":w?" branch":""}`}></span>
                                <span class=${`st-tag ${J.tagClass}`}>${J.tag}</span>
                                <span class="st-text">${J.text}</span>
                                ${M.merged&&M.resultLength>0&&N`<span class="st-size">${Uq(M.resultLength)}</span>`}
                                ${!M.merged&&M.contentLength>3000&&N`<span class="st-size">${Uq(M.contentLength)}</span>`}
                                ${M.hasThinking&&N`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${M.label&&N`<span class="st-label">${M.label}</span>`}
                                ${M.active&&N`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${O?N`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${O.id}${O.resultId?` → ${O.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${O.role||O.type||"entry"}${O.toolName?` → ${O.toolName}`:""}${O.merged?" (merged)":""}</div>
                        </div>
                        ${O.toolInputFull&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${O.toolInputFull}</pre>
                            </div>
                        `}
                        ${O.resultDetail&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${O.resultLength?` (${y5(O.resultLength)})`:""}</div>
                                <pre class="st-side-code">${O.resultDetail}</pre>
                            </div>
                        `}
                        ${O.detail&&!O.toolInput&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.role==="toolResult"?"Output":"Content"}${O.contentLength?` (${y5(O.contentLength)})`:""}</div>
                                <pre class="st-side-code">${O.detail}</pre>
                            </div>
                        `}
                        ${O.rawDetail&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${O.rawContentLength?` (${y5(O.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${O.rawDetail}</pre>
                            </div>
                        `}
                        ${O.timestamp&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(O.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(O.contentLength>0||O.hasThinking)&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${O.contentLength>0&&N`<span class="st-pill">${y5(O.contentLength)} content</span>`}
                                    ${O.hasThinking&&N`<span class="st-pill thinking">${y5(O.thinkingLength)} thinking</span>`}
                                    ${O.merged&&O.resultLength>0&&N`<span class="st-pill">${y5(O.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>x(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>x(!0)}>Navigate + summarize</button>
                        </div>
                    `:N`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function Cz(_=!1){return`floating-widget-backdrop${_?" maximized":""}`}function Pz(_=!1){return`floating-widget-pane${_?" maximized":""}`}function Eq({widget:_,onClose:$,onWidgetEvent:j}){let G=u(null),Z=u(!1),[X,Y]=C(!1),V=N1(_),q=Y0(()=>Fq(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{Y(!1)},[V]),g(()=>{if(!_)return;let O=(I)=>{if(I.key!=="Escape")return;if(X){Y(!1);return}$?.()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[X,_,$]),g(()=>{Z.current=!1},[q]),g(()=>{if(!_)return;let O=G.current;if(!O)return;let I=(y)=>{let w=L8(_),J=y==="widget.init"?q8(_):Q8(_);n9(O,w),d9(O,{__piclawGeneratedWidgetHost:!0,type:y,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:J})},x=()=>{I("widget.init"),I("widget.update")},A=()=>{Z.current=!0,x()};O.addEventListener("load",A);let W=[0,40,120,300,800].map((y)=>setTimeout(x,y));return()=>{O.removeEventListener("load",A),W.forEach((y)=>clearTimeout(y))}},[q,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let O=G.current;if(!O?.contentWindow)return;let I=L8(_),x=Q8(_);n9(O,I),d9(O,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:x});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let O=(I)=>{let x=I?.data;if(!x||x.__piclawGeneratedWidget!==!0)return;let A=G.current,M=N1(_),W=N1({widgetId:x.widgetId,toolCallId:x.toolCallId});if(W&&M&&W!==M)return;if(!W&&A?.contentWindow&&I.source!==A.contentWindow)return;j?.(x,_)};return window.addEventListener("message",O),()=>window.removeEventListener("message",O)},[_,j]),!_)return null;let L=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",F=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",B=_?.source==="live"?"live":"timeline",U=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",E=B==="live"?`Live widget • ${U.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",D=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",H=!q,k=Nq(_),z=Lq(_);return N`
        <div class=${Cz(X)} onClick=${()=>$?.()}>
            <section
                class=${Pz(X)}
                aria-label=${K}
                onClick=${(O)=>O.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${E} • ${L.toUpperCase()}</div>
                        <div class="floating-widget-title">${K}</div>
                        ${(F||D)&&N`
                            <div class="floating-widget-subtitle">${F||D}</div>
                        `}
                    </div>
                    <div class="floating-widget-header-actions">
                        <button
                            class="floating-widget-action floating-widget-maximize"
                            type="button"
                            onClick=${()=>Y((O)=>!O)}
                            title=${X?"Exit zen mode":"Enter zen mode"}
                            aria-label=${X?"Exit zen mode":"Enter zen mode"}
                            aria-pressed=${X?"true":"false"}
                        >
                            ${X?"Restore":"Maximize"}
                        </button>
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
                </div>
                <div class="floating-widget-body">
                    ${L==="session_tree"?N`<${Hq} widget=${_} onWidgetEvent=${j} />`:H?N`<div class="floating-widget-empty">${k}</div>`:N`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${K}
                                    name=${L8(_)}
                                    sandbox=${z}
                                    allow="microphone; clipboard-read; clipboard-write"
                                    referrerpolicy="no-referrer"
                                    srcdoc=${q}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}k0();m2();M_();z5();var fz=new Set,Wq=new Set,i9=new Set,R4=new Map,Oq=!1,K8=null;function Rz(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function Sz(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function zq(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return Y_.register(_),fz.add(_.id),!0}function gz(_){return zq(_)}function uz(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return o$(_),Wq.add(_.id),V9(),()=>{KY(_.id),Wq.delete(_.id),V9()}}function bz(_){if(typeof _!=="function")return()=>{};return i9.add(_),()=>{i9.delete(_)}}function Jq(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...i9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function vz(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return R4.set(_.id,_),()=>{if(R4.get(_.id)===_)R4.delete(_.id)}}function B8(_,$){for(let j of Array.from(R4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function Aq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return R4.get($)?.label||null}function kq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return R4.get($)?.note||null}function Mq(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=R4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function mz(_=typeof window<"u"?window:null){return{registerPane:gz,registerWorkspacePane:zq,registerSettingsPane:uz,registerStandaloneTabUrlResolver:bz,registerAttachmentPreview:vz,getCurrentChatJid:()=>Rz(_)}}function s9(_=typeof window<"u"?window:null){let $=mz(_);if(!_||Oq)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},Oq=!0,$}async function yq(_=typeof window<"u"?window:null){if(!_)return;if(K8)return K8;return K8=(async()=>{s9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=Sz(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(V){console.warn("[addon-web] Failed to load installed addon web entry:",Y,V)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),K8}var cz=["\t",",",";","|"];function Tq(_){return typeof _==="string"?_.trim().toLowerCase():""}function wq(_){return typeof _==="string"?_.split(";")[0]?.trim().toLowerCase()||"":""}function xq(_,$){let j=wq(_),G=Tq($);return j==="text/csv"||j==="application/csv"||j==="text/tab-separated-values"||j==="text/tsv"||G.endsWith(".csv")||G.endsWith(".tsv")||G.endsWith(".tab")}function Iq(_,$){let j=wq(_),G=Tq($);if(j==="text/tab-separated-values"||j==="text/tsv"||G.endsWith(".tsv")||G.endsWith(".tab"))return"\t";if(j==="text/csv"||j==="application/csv"||G.endsWith(".csv"))return",";return null}function hz(_,$){let j=0,G=!1;for(let Z=0;Z<_.length;Z+=1){let X=_[Z];if(X==='"')if(G&&_[Z+1]==='"')Z+=1;else G=!G;else if(!G&&X===$)j+=1}return j}function lz(_){let $=_.split(/\r?\n/).map((G)=>G.trimEnd()).filter((G)=>G.trim().length>0).slice(0,10),j={delimiter:"\t",score:-1};for(let G of cz){let Z=$.map((q)=>hz(q,G)).filter((q)=>q>0);if(!Z.length)continue;let X=Z.reduce((q,Q)=>q+Q,0)/Z.length,Y=Z.filter((q)=>Math.abs(q-X)<1).length/Z.length,V=X*Y*Z.length;if(V>j.score)j={delimiter:G,score:V}}return j.delimiter}function pz(_,$,j){let G=[],Z=[],X="",Y=!1,V=!1,q=()=>{Z.push(X),X=""},Q=()=>{if(q(),!(Z.length===1&&Z[0]===""&&G.length>0))G.push(Z);if(Z=[],G.length>=j)V=!0};for(let L=0;L<_.length;L+=1){if(V)break;let K=_[L];if(K==='"')if(Y&&_[L+1]==='"')X+='"',L+=1;else Y=!Y;else if(!Y&&K===$)q();else if(!Y&&(K===`
`||K==="\r")){if(K==="\r"&&_[L+1]===`
`)L+=1;Q()}else X+=K}if(!V&&(X.length>0||Z.length>0))Q();return{rows:G,truncatedRows:V}}function rz(_,$){return _.map((j)=>{let G=j.slice(0,$);while(G.length<$)G.push("");return G})}function Cq(_,$={}){let j=Math.max(1,$.maxRows??500),G=Math.max(1,$.maxColumns??80),Z=$.delimiter||lz(_),X=pz(_,Z,j+1),Y=X.rows.slice(0,j),V=Y.reduce((D,H)=>Math.max(D,H.length),0),q=Math.min(Math.max(1,V),G),Q=V>G,L=rz(Y,q),K=L[0]||[],F=L.slice(1),B=K.some((D)=>D.trim().length>0)&&F.length>0,U=B?K.map((D,H)=>D.trim()||`Column ${H+1}`):Array.from({length:q},(D,H)=>`Column ${H+1}`),E=B?F:L;return{delimiter:Z,headers:U,rows:E,columnCount:q,rowCount:E.length,truncatedRows:X.truncatedRows||X.rows.length>j,truncatedColumns:Q}}var nz=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/x-yaml","text/xml","text/yaml"]),dz=new Set(["text/markdown"]),oz=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),iz=new Set(["application/eml","message/rfc822"]);function _4(_){return typeof _==="string"?_.trim().toLowerCase():""}function sz(_){let $=_4(_);return!!$&&$.endsWith(".eml")}function az(_){let $=_4(_);return!!$&&$.endsWith(".pdf")}function tz(_){let $=_4(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var ez=new Set(["application/zip","application/x-zip-compressed"]);function _J(_){let $=_4(_);return!!$&&$.endsWith(".zip")}function $J(_){let $=_4(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function jJ(_){let $=_4(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")||$.endsWith(".yaml")||$.endsWith(".yml")}function x6(_,$){let j=B8(_,$);if(j?.id)return j.id;let G=_4(_);if(az($)||G==="application/pdf")return"pdf";if(tz($)||oz.has(G))return"office";if(sz($)||iz.has(G))return"eml";if(_J($)||ez.has(G))return"archive";if($J($)||G==="text/html")return"html";if(xq(G,$))return"delimited";if(jJ($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(nz.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function Pq(_){let $=_4(_);return dz.has($)}function N8(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"delimited":return"Table preview";case"archive":return"ZIP archive preview";default:return Aq(_)||"Preview unavailable"}}var GJ=new TextDecoder("utf-8",{fatal:!1});function T5(_,$){return _[$]|_[$+1]<<8}function S4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function fq(_,$,j){return GJ.decode(_.subarray($,$+j))}function ZJ(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(S4(_,j)===101010256)return j;return-1}function XJ(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(S4(_,G)===117853008)return!0;return!1}function YJ(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function VJ(_){return String(_||"").replace(/\\/g,"/").trim()}function Rq(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function Sq(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=ZJ($);if(j<0)throw Error("ZIP archive directory could not be found.");if(XJ($,j))throw Error("ZIP64 archives are not previewable yet.");let G=T5($,j+10),Z=S4($,j+12),X=S4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],V=X,q=X+Z;while(V<q){if(V+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(S4($,V)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let K=T5($,V+8),F=T5($,V+10),B=S4($,V+20),U=S4($,V+24),E=T5($,V+28),D=T5($,V+30),H=T5($,V+32),k=V+46,z=k+E+D,O=z+H;if(O>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let I=(K&2048)===2048,x=VJ(fq($,k,E)),A=fq($,z,H),M=x.endsWith("/");if(x)Y.push({path:x,isDirectory:M,compressedSize:B,uncompressedSize:U,compressionMethod:F,comment:I?A:A});V=O}Y.sort((K,F)=>{if(K.isDirectory!==F.isDirectory)return K.isDirectory?-1:1;return K.path.localeCompare(F.path)});let Q=Y.filter((K)=>!K.isDirectory),L=YJ(Y);return{entries:Y,summary:{fileCount:Q.length,directoryCount:L.size,totalEntries:Y.length,compressedBytes:Q.reduce((K,F)=>K+F.compressedSize,0),uncompressedBytes:Q.reduce((K,F)=>K+F.uncompressedSize,0)}}}function gq(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var qJ="allow-scripts";function QJ(_=!1){return`image-modal attachment-preview-modal${_?" maximized":""}`}function LJ(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function KJ(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function BJ(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function NJ(_){if(_==="\t")return"Tab";if(_===",")return"Comma";if(_===";")return"Semicolon";if(_==="|")return"Pipe";return null}function FJ(_,$=null,j=null,G=null){let Z=_?.metadata?.size,X=_?.content_type||"application/octet-stream",Y=j?.summary||null;return[{label:"Type",value:X},{label:"Syntax",value:$},{label:"Delimiter",value:G?NJ(G.delimiter):null},{label:"Rows",value:G?`${G.rowCount}${G.truncatedRows?"+":""}`:null},{label:"Columns",value:G?`${G.columnCount}${G.truncatedColumns?"+":""}`:null},{label:"Entries",value:Y?String(Y.totalEntries):null},{label:"Files",value:Y?String(Y.fileCount):null},{label:"Folders",value:Y?String(Y.directoryCount):null},{label:"Compressed",value:Y?s_(Y.compressedBytes):null},{label:"Uncompressed",value:Y?s_(Y.uncompressedBytes):null},{label:"Savings",value:gq(Y)},{label:"Size",value:typeof Z==="number"?s_(Z):null},{label:"Added",value:_?.created_at?x4(_.created_at):null}].filter((V)=>V.value)}function UJ(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function DJ(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=u1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function uq({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=Y0(()=>B8($?.content_type,G),[$?.content_type,G]),X=Y0(()=>x6($?.content_type,G),[$?.content_type,G]),Y=Z?.label||N8(X),V=Y0(()=>Pq($?.content_type),[$?.content_type]),[q,Q]=C(X==="text"||X==="html"||X==="archive"||X==="delimited"),[L,K]=C(""),[F,B]=C(null),[U,E]=C(null),[D,H]=C(null),[k,z]=C(!1),O=u(null),I=Y0(()=>UJ($,G),[$,G]),x=Y0(()=>I?aZ(I):null,[I]),A=Y0(()=>FJ($,!V?x:null,F,U),[$,V,x,F,U]),M=Y0(()=>Z?Mq(Z.id,_,G):DJ(_,G,X),[Z,_,G,X]),W=Y0(()=>kq(Z?.id||X),[Z?.id,X]),y=Y0(()=>{if(!V||!L)return"";return Z1(L)},[V,L]),w=Y0(()=>{if(V||!L||!I)return"";return E2(L,I)},[V,L,I]);return g(()=>{let J=(P)=>{if(P.key!=="Escape")return;if(k){z(!1);return}j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[k,j]),g(()=>{if(!O.current||!y)return;E$(O.current);return},[y]),g(()=>{let J=!1;async function P(){if(X!=="text"&&X!=="html"&&X!=="archive"&&X!=="delimited"){Q(!1),H(null),K(""),B(null),E(null);return}Q(!0),H(null),K(""),B(null),E(null);try{let f=await g7(_),b=new Uint8Array(await f.arrayBuffer());if(X==="text"||X==="html"||X==="delimited"){if(X==="text"&&KJ($,G)&&!LJ(b))throw Error("Attachment does not appear to contain text content.");let r=BJ(b);if(!J){if(K(r),X==="delimited")E(Cq(r,{delimiter:Iq($?.content_type,G)}))}return}let c=Sq(b);if(!J)B(c)}catch(f){if(!J){let b=f instanceof Error?f.message:String(f||"Unknown error");H(X==="archive"?`Failed to load ZIP preview. ${b}`:X==="delimited"?`Failed to load table preview. ${b}`:`Failed to load text preview. ${b}`)}}finally{if(!J)Q(!1)}}return P(),()=>{J=!0}},[_,X,$?.content_type,G]),N`
        <${d$} className="attachment-preview-portal-root">
            <div class=${QJ(k)} onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${G}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            <button
                                class="attachment-preview-zen"
                                type="button"
                                onClick=${()=>z((J)=>!J)}
                                title=${k?"Exit zen mode":"Enter zen mode"}
                                aria-label=${k?"Exit zen mode":"Enter zen mode"}
                                aria-pressed=${k?"true":"false"}
                            >
                                ${k?"Restore":"Maximize"}
                            </button>
                            ${M&&N`
                                <a
                                    href=${M}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(J)=>J.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${u1(_)}
                                download=${G}
                                class="attachment-preview-download"
                                onClick=${(J)=>J.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${q&&N`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!q&&D&&N`<div class="attachment-preview-state">${D}</div>`}
                        ${!q&&!D&&X==="image"&&N`
                            <img class="attachment-preview-image" src=${u1(_)} alt=${G} />
                        `}
                        ${!q&&!D&&X==="video"&&N`
                            <video class="attachment-preview-video" src=${u1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!q&&!D&&X==="html"&&N`
                            <iframe class="attachment-preview-frame" srcdoc=${L||""} sandbox=${qJ} title=${G}></iframe>
                        `}
                        ${!q&&!D&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&M&&N`
                            <iframe class="attachment-preview-frame" src=${M} title=${G}></iframe>
                        `}
                        ${!q&&!D&&W&&N`
                            <div class="attachment-preview-readonly-note">${W}</div>
                        `}
                        ${!q&&!D&&X==="delimited"&&U&&N`
                            <div class="attachment-preview-delimited">
                                ${(U.truncatedRows||U.truncatedColumns)&&N`
                                    <div class="attachment-preview-delimited-note">
                                        Showing first ${U.rowCount} rows and ${U.columnCount} columns.
                                        Download the file for the complete dataset.
                                    </div>
                                `}
                                <div class="attachment-preview-delimited-table-wrap">
                                    <table class="attachment-preview-delimited-table">
                                        <thead>
                                            <tr>
                                                ${U.headers.map((J,P)=>N`
                                                    <th key=${`h-${P}`}>${J}</th>
                                                `)}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${U.rows.map((J,P)=>N`
                                                <tr key=${`r-${P}`}>
                                                    ${J.map((f,b)=>N`
                                                        <td key=${`c-${P}-${b}`}>${f}</td>
                                                    `)}
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!q&&!D&&X==="archive"&&F&&N`
                            <div class="attachment-preview-archive">
                                <div class="attachment-preview-archive-summary">
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Files</span>
                                        <strong class="attachment-preview-archive-card-value">${F.summary.fileCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Folders</span>
                                        <strong class="attachment-preview-archive-card-value">${F.summary.directoryCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Compressed</span>
                                        <strong class="attachment-preview-archive-card-value">${s_(F.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${s_(F.summary.uncompressedBytes)}</strong>
                                    </div>
                                </div>
                                <div class="attachment-preview-archive-table-wrap">
                                    <table class="attachment-preview-archive-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Method</th>
                                                <th>Compressed</th>
                                                <th>Size</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${F.entries.map((J)=>N`
                                                <tr key=${J.path}>
                                                    <td class="attachment-preview-archive-name">${J.path}</td>
                                                    <td>${J.isDirectory?"Folder":"File"}</td>
                                                    <td>${J.isDirectory?"—":Rq(J.compressionMethod)}</td>
                                                    <td>${J.isDirectory?"—":s_(J.compressedSize)}</td>
                                                    <td>${J.isDirectory?"—":s_(J.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!q&&!D&&X==="text"&&V&&N`
                            <div
                                ref=${O}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:y}}
                            />
                        `}
                        ${!q&&!D&&X==="text"&&!V&&w&&N`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:w}} /></pre>
                        `}
                        ${!q&&!D&&X==="text"&&!V&&!w&&N`
                            <pre class="attachment-preview-text">${L}</pre>
                        `}
                        ${!q&&!D&&X==="unsupported"&&N`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${A.map((J)=>N`
                            <div class="attachment-preview-meta-item" key=${J.label}>
                                <span class="attachment-preview-meta-label">${J.label}</span>
                                <span class="attachment-preview-meta-value">${J.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${d$}>
    `}k0();M_();d2();k9();function HJ(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function EJ(_){if(!_||typeof _!=="object")return!0;if(HJ(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function WJ(_){if(!y6(_))return!1;if(!EJ(_?.target))return!1;return!i$.some((j)=>J$(_,j.id))}function bq(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function OJ(_){let $=[],j=new Map(a$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function vq(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function zJ(_){if(_?.imageUrl)return N`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return N`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function F8(_,$){return N`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function JJ(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function mq({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:V,onOpenVncTab:q,onToggleTerminalDock:Q,onPrefillCompose:L}){let[K,F]=C(!1),[B,U]=C(""),[E,D]=C(0),[H,k]=C([]),[z,O]=C({workspaceCommands:null,slashCommands:null}),I=u(null),x=u(null),A=R(async()=>{try{let w=await L6();O(t$(w?.settings))}catch{O({workspaceCommands:null,slashCommands:null})}},[]);g(()=>{A()},[A]),g(()=>{let w=!1;return Q6($).then((J)=>{if(w)return;k(Array.isArray(J?.commands)?J.commands:[])}).catch(()=>{if(w)return;k([])}),()=>{w=!0}},[$]);let M=Y0(()=>OJ({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:V,onOpenVncTab:q,onToggleTerminalDock:Q}),[G,V,q,Q,Z,j]),W=Y0(()=>ZV({agents:_,workspaceCommands:M,slashCommands:H,settings:z,query:B}),[_,B,z,H,M]);if(g(()=>{if(W.length===0){D(-1);return}if(!B.trim()){D(0);return}let w=B.toLowerCase().replace(/^[@/]+/,"").trim();if(!w){D(0);return}let J=0,P=0;for(let f=0;f<W.length;f++){let b=W[f],c=(b.title||"").toLowerCase().replace(/^[@/]+/,"");if(c===w){J=f;break}let r=0;if(c.startsWith(w))r=3;else if(c.includes(w))r=2;else if((b.subtitle||"").toLowerCase().includes(w))r=1;if(r>P)P=r,J=f}D(J)},[W,B]),g(()=>{if(!K)return;requestAnimationFrame(()=>x.current?.focus?.())},[K]),g(()=>{let w=(P)=>{if(!K){if(!WJ(P))return;P.preventDefault(),U(String(P.key||"")),D(0),F(!0);return}if(P.key==="Escape"){P.preventDefault(),F(!1),U("");return}if(P.key==="ArrowDown"){P.preventDefault(),D((f)=>W.length>0?(f+1+W.length)%W.length:0);return}if(P.key==="ArrowUp"){P.preventDefault(),D((f)=>W.length>0?(f-1+W.length)%W.length:0);return}if(P.key==="Enter"&&W[E]){P.preventDefault();let f=W[E],b=P.altKey;if(f){if(f.kind==="agent"&&f.chatJid)if(b)JJ(f.chatJid);else X?.(f.chatJid);else if(f.kind==="workspace"&&f.commandId){if(f.commandId==="toggle-workspace"||f.commandId==="open-explorer")Y?.();if(f.commandId==="toggle-chat-only")bq(G);if(f.commandId==="open-terminal-tab")V?.();if(f.commandId==="open-vnc-tab")q?.();if(f.commandId==="toggle-terminal-dock")Q?.();if(f.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(f.kind==="slash"&&f.commandName)L?.(f.commandName)}F(!1),U("")}},J=(P)=>{if(!K)return;if(I.current?.contains(P.target))return;F(!1),U("")};return window.addEventListener("keydown",w,!0),document.addEventListener("pointerdown",J,!0),()=>{window.removeEventListener("keydown",w,!0),document.removeEventListener("pointerdown",J,!0)}},[G,E,W,V,q,L,X,Q,Y,K]),g(()=>{let w=(J)=>{let P=t$(J?.detail?.settings);if(J?.detail?.settings){O(P);return}A()};return window.addEventListener("focus",w),window.addEventListener("piclaw:quick-actions-settings-updated",w),()=>{window.removeEventListener("focus",w),window.removeEventListener("piclaw:quick-actions-settings-updated",w)}},[A]),!K)return null;let y=null;return N`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${I}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${x}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${B}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(w)=>{U(w.currentTarget?.value||""),D(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${F8("Move","↑↓")}
                                ${F8("Select","↵")}
                                ${F8("Pop out","Alt+↵")}
                                ${F8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${W.length===0&&N`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${W.map((w,J)=>{let P=w.kind!==y;return y=w.kind,N`
                                ${P&&N`<div class="timeline-quick-actions-section">${vq(w.kind)}</div>`}
                                <button
                                    key=${w.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${w.kind}${J===E?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(w.kind==="agent"&&w.chatJid)X?.(w.chatJid);if(w.kind==="workspace"&&w.commandId==="toggle-workspace")Y?.();if(w.kind==="workspace"&&w.commandId==="open-explorer")Y?.();if(w.kind==="workspace"&&w.commandId==="toggle-chat-only")bq(G);if(w.kind==="workspace"&&w.commandId==="open-terminal-tab")V?.();if(w.kind==="workspace"&&w.commandId==="open-vnc-tab")q?.();if(w.kind==="workspace"&&w.commandId==="toggle-terminal-dock")Q?.();if(w.kind==="workspace"&&w.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(w.kind==="slash"&&w.commandName)L?.(w.commandName);F(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${zJ(w)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${w.title}</span>
                                            ${w.actionHint?N`<span class="timeline-quick-actions-item-action-hint">${w.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${w.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${w.categoryLabel||vq(w.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}k0();function cq({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[V,q]=C(!1),[Q,L]=C({top:8,left:8}),K=u(null),F=u(null),B=u(null);g(()=>{if(typeof document>"u")return;let H=document.createElement("div");return H.className="timeline-menu-portal in-chat",document.body.appendChild(H),B.current=H,()=>{H.remove(),B.current=null}},[]),g(()=>{let H=()=>{if(_){let O=document.querySelector(".workspace-sidebar");if(O){let I=O.getBoundingClientRect();L({top:I.top+8,left:I.left+8})}}else L({top:8,left:8})};H();let k=new ResizeObserver(H),z=document.querySelector(".workspace-sidebar");if(z)k.observe(z);return window.addEventListener("resize",H),()=>{k.disconnect(),window.removeEventListener("resize",H)}},[_]),g(()=>{if(B.current)B.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),g(()=>{if(!B.current)return;let H=B.current.style;H.top=`${Q.top}px`,H.left=`${Q.left}px`,H.right="auto"},[Q]),g(()=>{if(!V)return;let H=(k)=>{if(K.current?.contains(k.target))return;if(F.current?.contains(k.target))return;q(!1)};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[V]),g(()=>{if(!V)return;let H=(k)=>{if(k.key==="Escape")q(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[V]),g(()=>{q(!1)},[_]);let U=R((H)=>{q(!1),H?.()},[]),E=R(()=>{let H=new URL(window.location.href);if(j)H.searchParams.delete("chat_only");else H.searchParams.set("chat_only","1");window.location.href=H.toString()},[j]),D=N`
        <button ref=${F} class=${`timeline-menu-btn${V?" active":""}`}
            onClick=${()=>q((H)=>!H)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${V?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${V&&N`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${K} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&N`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>U(E)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(G||Z||X)&&N`<div class="workspace-menu-separator"></div>`}
                ${G&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(G)}>Open terminal in tab</button>`}
                ${Z&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(Z)}>Open VNC in tab</button>`}
                ${X&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(X)}>${Y?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return G5(()=>{if(B.current)B$(D,B.current)}),null}k0();M_();var hq="PiClaw";function a9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,V=X[Y],q=G.trim().toLowerCase(),Q=typeof $==="string"?$.trim():"",L=Q?Q:null,K=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:Z,color:V,image:L||(K?"/static/icon-192.png":null)}}function lq(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function pq(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function rq(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",V=X?.dataset?.tint||"",q=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(q&&(V||Y&&Y!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function t9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function AJ(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function nq(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return AJ($[1].trim())||null}function dq(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=t9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=t9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=t9(j.command),Y=nq(X);if(Y)return Y;if(Array.isArray(j.commands))for(let V of j.commands){let q=nq(V);if(q)return q}return null}k0();var oq={right:"3 2 8 5 3 8",down:"2 3 8 3 5 8",up:"2 7 8 7 5 2",left:"7 2 2 5 7 8"};function iq(_){return _==="down"||_==="up"||_==="left"?_:"right"}function sq(_,$=""){return["ui-disclosure-triangle",`ui-disclosure-triangle-${_}`,$.trim()].filter(Boolean).join(" ")}function s1(_="right",$=""){let j=iq(_);return N`
    <svg class=${sq(j,$)} viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <polygon points=${oq[j]}></polygon>
    </svg>
  `}function e9(_="right",$=""){let j=iq(_);return`<svg class="${sq(j,$)}" viewBox="0 0 10 10" aria-hidden="true" focusable="false"><polygon points="${oq[j]}"></polygon></svg>`}var kJ=N`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,MJ=N`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,yJ=N`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,TJ=1e4,aq=132;function wJ(_,$=aq){let j=Number.isFinite($)&&$>0?Math.floor($):aq;return String(_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`).map((G)=>G.length>j?`${G.slice(0,j)}…`:G).join(`
`)}function xJ(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function IJ(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function CJ(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function PJ(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function tq(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return n$(_)!==null}function eq(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&u2(_)!==null}function fJ(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=TJ}function RJ(_,$=Date.now()){if(!tq(_))return null;let j=n$(_);if(j===null||!fJ(j,$))return null;let G=VQ(new Date(j).toISOString(),$);return G?`${G} ago`:null}function SJ(_,$=Date.now()){if(!eq(_))return null;if(u2(_)===null)return null;return O6(_,$)}function _Q(_){return typeof _==="string"&&/^streaming output\.{3}$/i.test(_.trim())}function gJ(_){if(typeof _!=="string")return"";return _.replace(/[…]+/g,".").replace(/\s+/g," ").trim().replace(/[\s:;,.!?-]+$/g,"").toLowerCase()}function uJ(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";return $==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.toolName||_.tool_args||_.toolArgs)}function $Q(_){if(!uJ(_))return"";let $=_?.status||_?.tool_status||_?.toolStatus;if(_Q($))return"";return gJ($)}function jQ(_,$){let j=typeof _==="string"?_:"",G=typeof $==="string"?$.trim():"";if(!j||!G)return j;let Z=G.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return j.replace(new RegExp(`\\s*[:—-]\\s*${Z}\\s*$`,"i"),"")}function U8(_){return _?N`<span class="agent-tool-status-pill">${_}</span>`:null}function GQ(_){let $=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"";if($)return $;let j=typeof(_?.tool_name||_?.toolName)==="string"?String(_.tool_name||_.toolName).trim():"";if(!j)return"";let[G]=XQ(_);return G?`${j}: ${G}`:j}function bJ(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=GQ(_),Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G&&_Q(Z)?G:G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function vJ(_){let $=_?.tool_name||_?.toolName||"";return typeof $==="string"?$.trim().toLowerCase():""}function mJ(_){let $=typeof _==="string"?_.replace(/\s+/g," ").trim():"";if(!$)return"";let j=120;return $.length>j?`${$.slice(0,j)}…`:$}function ZQ(_){if(!_)return null;if(typeof _==="string")try{let $=JSON.parse(_);return ZQ($)}catch{return null}if(typeof _==="object"){let $=_,j=$.arguments||$.input||$.params||$.parameters||$.args||$.payload;return j&&typeof j==="object"?j:$}return null}function XQ(_){let $=ZQ(_?.tool_args||_?.toolArgs);if(!$)return[];let j=[],G=(Z)=>{let X=mJ(Z);if(X&&!j.includes(X))j.push(X)};if(G($.command),Array.isArray($.commands))G($.commands.filter((Z)=>typeof Z==="string").join(" && "));if(G($.path||$.filePath||$.target),Array.isArray($.paths))G($.paths.filter((Z)=>typeof Z==="string").join(", "));return G($.fileName||$.filename||$.file),G($.url),G($.query),j.sort((Z,X)=>X.length-Z.length)}function YQ(_,$){let j=typeof _==="string"?_:"";if(!j)return null;let G=XQ($);for(let Y of G){let V=j.indexOf(Y);if(V>=0)return{prefix:j.slice(0,V),argument:Y,suffix:j.slice(V+Y.length)}}let Z=vJ($);if(!Z)return null;let X=j.match(/^([^:]+:\s*)(.+)$/is);if(!X||X[1].trim().replace(/:$/,"").toLowerCase()!==Z)return null;return{prefix:X[1],argument:X[2],suffix:""}}function cJ(_,$){let j=$?.status||$?.tool_status||$?.toolStatus,G=$Q($),Z=G?jQ(_,j):typeof _==="string"?_:"",X=GQ($),Y=YQ(X,$);if(!Y?.argument)return G?N`${Z} ${U8(G)}`:Z;let V=Z.lastIndexOf(Y.argument);if(V<0)return G?N`${Z} ${U8(G)}`:Z;let q=V+Y.argument.length;return N`
        ${Z.slice(0,V)}<span class="agent-tool-argument">${Y.argument}</span>${Z.slice(q)}${G?N` ${U8(G)}`:""}
    `}function hJ(_,$){let j=YQ(_,$);if(!j?.argument)return _;let G=$?.status||$?.tool_status||$?.toolStatus,Z=$Q($),X=Z?jQ(j.suffix||"",G):j.suffix||"";return N`
        ${j.prefix}<span class="agent-tool-argument">${j.argument}</span>${X}${Z?N` ${U8(Z)}`:""}
    `}function VQ(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function _j({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:V=new Set,onExtensionPanelAction:q,turnId:Q,steerQueued:L,onPanelToggle:K,showCorePanels:F=!0,showExtensionPanels:B=!0}){let H=(v)=>{if(!v)return{text:"",totalLines:0,fullText:""};if(typeof v==="string"){let F0=v,y0=F0?F0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:F0,totalLines:y0,fullText:F0}}let n=v.text||"",s=v.fullText||v.full_text||n,G0=Number.isFinite(v.totalLines)?v.totalLines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:n,totalLines:G0,fullText:s}},k=160,z=(v)=>String(v||"").replace(/<\/?internal>/gi,""),O=(v)=>{if(!v)return 1;return Math.max(1,Math.ceil(v.length/160))},I=(v,n,s,G0={})=>{let F0=(v||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!F0)return{text:"",omitted:0,totalLines:Number.isFinite(s)?s:0,visibleLines:0};let y0=F0.split(`
`),A0=G0.direction==="tail",M0=y0.length>n?(A0?y0.slice(-n):y0.slice(0,n)).join(`
`):F0,T0=Number.isFinite(s)?s:y0.reduce((n0,e0)=>n0+O(e0),0),c0=M0?M0.split(`
`).reduce((n0,e0)=>n0+O(e0),0):0,S0=Math.max(T0-c0,0);return{text:M0,omitted:S0,totalLines:T0,visibleLines:c0}},x=H(j),A=H(G),M=H($),W=H({text:_?.output_preview||_?.outputPreview||"",fullText:_?.output_preview||_?.outputPreview||"",totalLines:_?.output_total_lines||_?.outputTotalLines}),y=Boolean(x.text)||x.totalLines>0,w=Boolean(A.text)||A.totalLines>0,J=Boolean(M.fullText?.trim()||M.text?.trim()),P=Boolean(W.fullText?.trim()||W.text?.trim()),f=Boolean(_||J||y||w||P||Z||X),b=Array.isArray(Y)&&Y.length>0,[c,r]=C(new Set),[e,m]=C(null),[_0,E0]=C({}),Z0=u(new Map),[$0,V0]=C(()=>Date.now()),N0=(v)=>r((n)=>{let s=new Set(n),G0=!s.has(v);if(G0)s.add(v);else s.delete(v);if(typeof K==="function")K(v,G0);return s});g(()=>{r(new Set),m(null)},[Q]),g(()=>{let v={},n=new Set(["thought","draft"]);for(let[s,G0]of Z0.current.entries()){if(!G0||typeof G0!=="object")continue;let F0=Number(G0.scrollHeight),y0=Number(G0.clientHeight);if(!Number.isFinite(F0)||!Number.isFinite(y0)||y0<=0)continue;if(F0>y0+1)v[s]=!0;if(n.has(s))G0.scrollTop=Math.max(0,F0-y0)}E0((s)=>{let G0=Object.keys(s||{}).filter((y0)=>s[y0]).sort(),F0=Object.keys(v).sort();if(G0.length===F0.length&&G0.every((y0,A0)=>y0===F0[A0]))return s;return v})},[M.fullText,M.text,A.fullText,A.text,W.fullText,W.text,c]),g(()=>{if(!(Array.isArray(Y)&&Y.some((s)=>s?.started_at||s?.last_activity_at)))return;let n=setInterval(()=>V0(Date.now()),1000);return()=>clearInterval(n)},[Y]);let h=Y0(()=>IJ(c),[c]);g(()=>{if(!h||typeof document>"u")return;let v=(n)=>{if(n?.defaultPrevented)return;if(n?.key!=="Escape")return;if(n?.altKey||n?.ctrlKey||n?.metaKey||n?.shiftKey)return;let s=n?.target;if(s instanceof Element){if(s.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(s.isContentEditable)return}if(r((G0)=>{if(!(G0 instanceof Set)||!G0.has(h))return G0;let F0=new Set(G0);return F0.delete(h),F0}),typeof K==="function")K(h,!1);n.preventDefault?.(),n.stopPropagation?.()};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[h,K]);let j0=O$(_),Q0=Boolean(_?.last_activity||_?.lastActivity),O0=Y0(()=>tq(_),[_]),a=Y0(()=>eq(_),[_]),X0=Y0(()=>dq(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[W0,P0]=C(null);g(()=>{if(!Boolean(a||_?.retry_at||_?.retryAt||O0))return;V0(Date.now());let n=setInterval(()=>V0(Date.now()),1000);return()=>clearInterval(n)},[O0,a,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),g(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!X0){P0(null);return}let n=!0;return u7(X0).then((s)=>{if(!n)return;if(s?.branch)P0({branch:s.branch,repoPath:s.repo_path||null,path:X0});else P0(null)}).catch(()=>{if(n)P0(null)}),()=>{n=!1}},[_?.type,X0]);let l0=_?.turn_id||Q,u0=rq(l0),G_=(v)=>v,h0=uV(_,{isLastActivity:Q0}),s0=T6(_,{isLastActivity:Q0}),f0=Y8({steerQueued:L,pulsing:h0&&s0==="dot"&&!Q0}),o0=T6(null,{pendingRequest:!0}),v0=(v)=>v==="warning"?"#f59e0b":v==="error"?"var(--danger-color)":v==="success"?"var(--success-color)":u0,t0=X?.kind||"info",i0=v0(t0),F_=v0(_?.kind||(j0?"warning":"info")),Z_=bJ(_,{isLastActivity:Q0}),m0=RJ(_,$0),z0=W0?.repoPath||"",V_=W0?.branch||"",d0=W0?PJ(z0,V_):"",H_=xJ(_?.status_hints||_?.statusHints),D0=Y0(()=>CJ(H_),[H_]),g0=Y0(()=>D0.filter((v)=>v?.key==="ssh"),[D0]),I0=Y0(()=>D0.filter((v)=>v?.key!=="ssh"),[D0]);if((!F||!f)&&(!B||!b))return null;let r0=({panelTitle:v,text:n,fullText:s,totalLines:G0,maxLines:F0,titleClass:y0,panelKey:A0})=>{let M0=c.has(A0),T0=s||n||"",c0=A0==="thought"||A0==="draft"?z(T0):T0,S0=typeof F0==="number",n0=A0==="tool-output",e0=S0?I(c0,F0,G0,{direction:n0?"tail":"head"}):{text:c0||"",omitted:0,totalLines:Number.isFinite(G0)?G0:0},x0=n0&&!M0?wJ(e0.text):c0;if(!c0&&!(Number.isFinite(e0.totalLines)&&e0.totalLines>0))return null;let w0=`agent-thinking-body${S0?" agent-thinking-body-collapsible":""}`,D_=S0?`--agent-thinking-collapsed-lines: ${F0};`:"",__=S0&&e0.omitted>0,d=Boolean(A0&&_0[A0]),B0=__||d,j_=(!M0&&B0||M0&&B0)&&N`
            <button
                class="agent-thinking-truncation"
                onClick=${()=>N0(A0)}
                title=${M0?`Show fewer ${v} lines`:`Show more ${v}`}
            >
                <span class="agent-thinking-truncation-arrow" aria-hidden="true">${s1(M0?"up":"down")}</span>
                <span>${M0?"less":"more…"}</span>
            </button>
        `;return N`
            <div
                class="agent-thinking"
                data-expanded=${M0?"true":"false"}
                data-collapsible=${S0?"true":"false"}
                data-panel-key=${A0||""}
                style=${u0?`--turn-color: ${u0};`:""}
            >
                <div class="agent-thinking-title ${y0||""}">
                    ${u0&&N`<span class=${f0} aria-hidden="true"></span>`}
                    ${v}
                    ${j_}
                </div>
                <div
                    class=${w0}
                    style=${D_}
                    ref=${(R_)=>{if(!A0)return;if(R_)Z0.current.set(A0,R_);else Z0.current.delete(A0)}}
                    dangerouslySetInnerHTML=${{__html:G6(x0)}}
                />
            </div>
        `},z_=Z?.tool_call?.title,Q_=z_?`Awaiting approval: ${z_}`:"Awaiting approval",U_=SJ(_,$0),N_=(v,n,s=null)=>{let G0=b2(v),F0=LY(v,$0),y0=[s,F0].filter(Boolean).join(" · "),A0=Y8({steerQueued:L,pulsing:O$(v)||Boolean(F0)}),M0=T6(v);return N`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${n?`--turn-color: ${n};`:""}
                title=${v?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${n&&M0==="dot"&&N`<span class=${A0} aria-hidden="true"></span>`}
                    ${M0==="spinner"&&N`<div class="agent-status-spinner" aria-hidden="true"></div>`}
                    <span class="agent-thinking-title-text">${hJ(G0,v)}</span>
                    ${y0&&N`<span class="agent-status-elapsed">${y0}</span>`}
                </div>
                ${v.detail&&N`<div class="agent-thinking-body">${v.detail}</div>`}
            </div>
        `},J_=(v,n,s,G0,F0,y0,A0,M0=8,T0=8)=>{let c0=Math.max(F0-G0,0.000000001),S0=Math.max(n-M0*2,1),n0=Math.max(s-T0*2,1),e0=Math.max(A0-y0,1),x0=A0===y0?n/2:M0+(v.run-y0)/e0*S0,w0=T0+(n0-(v.value-G0)/c0*n0);return{x:x0,y:w0}},x_=(v,n,s,G0,F0,y0,A0,M0=8,T0=8)=>{if(!Array.isArray(v)||v.length===0)return"";return v.map((c0,S0)=>{let{x:n0,y:e0}=J_(c0,n,s,G0,F0,y0,A0,M0,T0);return`${S0===0?"M":"L"} ${n0.toFixed(2)} ${e0.toFixed(2)}`}).join(" ")},P_=(v,n="")=>{if(!Number.isFinite(v))return"—";return`${Math.abs(v)>=100?v.toFixed(0):v.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${n}`},E_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],o_=(v,n)=>{let s=E_;if(!Array.isArray(s)||s.length===0)return"var(--accent-color)";if(s.length===1||!Number.isFinite(n)||n<=1)return s[0];let F0=Math.max(0,Math.min(Number.isFinite(v)?v:0,n-1))/Math.max(1,n-1)*(s.length-1),y0=Math.floor(F0),A0=Math.min(s.length-1,y0+1),M0=F0-y0,T0=s[y0],c0=s[A0];if(!c0||y0===A0||M0<=0.001)return T0;if(M0>=0.999)return c0;let S0=Math.round((1-M0)*1000)/10,n0=Math.round(M0*1000)/10;return`color-mix(in oklab, ${T0} ${S0}%, ${c0} ${n0}%)`},f_=(v,n="autoresearch")=>{let s=Array.isArray(v)?v.map((x0)=>({...x0,points:Array.isArray(x0?.points)?x0.points.filter((w0)=>Number.isFinite(w0?.value)&&Number.isFinite(w0?.run)):[]})).filter((x0)=>x0.points.length>0):[],G0=s.map((x0,w0)=>({...x0,color:o_(w0,s.length)}));if(G0.length===0)return null;let F0=320,y0=120,A0=G0.flatMap((x0)=>x0.points),M0=A0.map((x0)=>x0.value),T0=A0.map((x0)=>x0.run),c0=Math.min(...M0),S0=Math.max(...M0),n0=Math.min(...T0),e0=Math.max(...T0);return N`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${G0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${F0} ${y0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${G0.map((x0)=>{let w0=x0?.key||x0?.label||"series",D_=e?.panelKey===n&&e?.seriesKey===w0;return N`
                                <g key=${w0}>
                                    <path
                                        class=${`agent-series-chart-line${D_?" is-hovered":""}`}
                                        d=${x_(x0.points,F0,y0,c0,S0,n0,e0)}
                                        style=${`--agent-series-color: ${x0.color};`}
                                        onMouseEnter=${()=>m({panelKey:n,seriesKey:w0})}
                                        onMouseLeave=${()=>m((__)=>__?.panelKey===n&&__?.seriesKey===w0?null:__)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${G0.flatMap((x0)=>{let w0=typeof x0?.unit==="string"?x0.unit:"",D_=x0?.key||x0?.label||"series";return x0.points.map((__,d)=>{let B0=J_(__,F0,y0,c0,S0,n0,e0);return N`
                                    <button
                                        key=${`${D_}-point-${d}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${x0.color}; left:${B0.x/F0*100}%; top:${B0.y/y0*100}%;`}
                                        onMouseEnter=${()=>m({panelKey:n,seriesKey:D_,run:__.run,value:__.value,unit:w0})}
                                        onMouseLeave=${()=>m((p0)=>p0?.panelKey===n?null:p0)}
                                        onFocus=${()=>m({panelKey:n,seriesKey:D_,run:__.run,value:__.value,unit:w0})}
                                        onBlur=${()=>m((p0)=>p0?.panelKey===n?null:p0)}
                                        aria-label=${`${x0?.label||"Series"} ${P_(__.value,w0)} at run ${__.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${G0.map((x0)=>{let w0=x0.points[x0.points.length-1]?.value,D_=typeof x0?.unit==="string"?x0.unit:"",__=x0?.key||x0?.label||"series",d=e?.panelKey===n&&e?.seriesKey===__?e:null,B0=d&&Number.isFinite(d.value)?d.value:w0,p0=d&&typeof d.unit==="string"?d.unit:D_,j_=d&&Number.isFinite(d.run)?d.run:null;return N`
                            <div key=${`${__}-legend`} class=${`agent-series-legend-item${d?" is-hovered":""}`} style=${`--agent-series-color: ${x0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${x0.color};`}></span>
                                <span class="agent-series-legend-label">${x0?.label||"Series"}</span>
                                ${j_!==null&&N`<span class="agent-series-legend-run">run ${j_}</span>`}
                                <span class="agent-series-legend-value">${P_(B0,p0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},q0=(v)=>{if(!v)return null;let n=typeof v?.key==="string"?v.key:`panel-${Math.random()}`,s=c.has(n),G0=v?.title||"Extension status",F0=v?.collapsed_text||"",y0=String(v?.state||"").replace(/[-_]+/g," ").replace(/^./,(B0)=>B0.toUpperCase()),A0=v0(v?.state==="completed"?"success":v?.state==="failed"?"error":v?.state==="stopped"?"warning":"info"),M0=Y8({steerQueued:L,pulsing:v?.state==="running"}),T0=typeof v?.detail_markdown==="string"?v.detail_markdown.trim():"",c0=typeof v?.last_run_text==="string"?v.last_run_text.trim():"",S0=typeof v?.tmux_command==="string"?v.tmux_command.trim():"",n0=Array.isArray(v?.series)?v.series:[],e0=Array.isArray(v?.actions)?v.actions:[],x0=v?.started_at?O6(v,$0):null,w0=F0,D_=Boolean(T0||S0||x0),__=Boolean(T0||n0.length>0||S0),d=[G0,w0].filter(Boolean).join(" — ");return N`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${s?"true":"false"}
                style=${A0?`--turn-color: ${A0};`:""}
                title=${!s?d||G0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>__?N0(n):null}
                    >
                        ${A0&&N`<span class=${M0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${G0}</span>
                        ${w0&&N`<span class="agent-thinking-title-meta">${w0}</span>`}
                        ${x0&&N`<span class="agent-status-elapsed">${x0}</span>`}
                    </button>
                    ${(e0.length>0||__)&&N`
                        <div class="agent-thinking-tools-inline">
                            ${e0.length>0&&N`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${e0.map((B0)=>{let p0=`${n}:${B0?.key||""}`,j_=V?.has?.(p0);return N`
                                            <button
                                                key=${p0}
                                                class=${`agent-thinking-action-btn${B0?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>q?.(v,B0)}
                                                disabled=${Boolean(j_)}
                                            >
                                                ${j_?"Working…":B0?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${__&&N`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${s?"Collapse":"Expand"} ${G0}`}
                                    title=${s?"Collapse details":"Expand details"}
                                    onClick=${()=>N0(n)}
                                >
                                    ${s1(s?"down":"up")}
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${s&&N`
                    <div class=${`agent-thinking-autoresearch-layout${D_?"":" chart-only"}`}>
                        ${D_&&N`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${x0&&N`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${x0}</span>
                                        ${v?.last_activity_at&&v?.state==="running"&&N`<span title="Since last activity">⟳ ${VQ(v.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${T0&&N`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:G6(T0)}}
                                    />
                                `}
                                ${S0&&N`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${S0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>q?.(v,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${kJ}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${n0.length>0?N`
                                <div class="agent-series-chart-stack">
                                    ${f_(n0,n)}
                                    ${c0&&N`<div class="agent-series-chart-note">${c0}</div>`}
                                </div>
                            `:N`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return N`
        <div class="agent-status-panel">
            ${F&&X&&N_(X,i0)}
            ${B&&Array.isArray(Y)&&Y.map((v)=>q0(v))}
            ${F&&_?.type==="intent"&&N_(_,F_,U_)}
            ${F&&Z&&N`
                <div class="agent-status agent-status-request" aria-live="polite" style=${u0?`--turn-color: ${u0};`:""}>
                    ${o0==="dot"&&N`<span class=${f0} aria-hidden="true"></span>`}
                    ${o0==="spinner"&&N`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${Q_}</span>
                </div>
            `}
            ${F&&y&&r0({panelTitle:G_("Planning"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,panelKey:"plan"})}
            ${F&&J&&r0({panelTitle:G_("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:9,titleClass:"thought",panelKey:"draft"})}
            ${F&&w&&r0({panelTitle:G_("Thoughts"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:9,titleClass:"thought",panelKey:"thought"})}
            ${F&&P&&r0({panelTitle:G_("Output"),text:W.text,fullText:W.fullText,totalLines:W.totalLines,maxLines:6,titleClass:"tool-output",panelKey:"tool-output"})}
            ${F&&_&&_?.type!=="intent"&&N`
                <div class=${`agent-status${Q0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${d0||H_.length>0||m0?" agent-status-multiline":""}`} aria-live="polite" style=${u0?`--turn-color: ${u0};`:""}>
                    ${u0&&h0&&N`<span class=${f0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?N`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:s0==="spinner"&&N`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${cJ(Z_,_)}</span>
                        ${(d0||D0.length>0||m0)&&N`
                            <span class="agent-status-meta-row">
                                ${g0.map((v)=>N`
                                    <span key=${v.key} class="agent-status-hint-row" title=${v.title||v.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:v.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${v.label}</span>
                                    </span>
                                `)}
                                ${d0&&N`
                                    <span class="agent-status-git-row" title=${X0||d0}>
                                        <span class="agent-status-git-icon">${MJ}</span>
                                        <span class="agent-status-git-label">
                                            ${z0&&N`<span class="agent-status-git-part">${z0}</span>`}
                                            ${z0&&V_&&N`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${V_&&N`<span class="agent-status-git-part">${V_}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${I0.map((v)=>N`
                                    <span key=${v.key} class="agent-status-hint-row" title=${v.title||v.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:v.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${v.label}</span>
                                    </span>
                                `)}
                                ${m0&&N`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${Q0?"Recent activity":"Last event"} ${m0}`}>
                                        <span class="agent-status-hint-icon">${yJ}</span>
                                        <span class="agent-status-hint-label">${m0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function qQ({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",V=G?.kind||"other",q=G?.rawInput||{},Q=q.command||q.commands&&q.commands[0]||null,L=q.diff||null,K=q.fileName||q.path||null,F=G?.description||q.description||q.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((z)=>z?.path).filter((z)=>Boolean(z)),E=Array.from(new Set([K,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let D=async(z)=>{try{await E5(j,z,X||null),$()}catch(O){console.error("Failed to respond to agent request:",O)}},H=async()=>{try{await R7(Y,`Auto-approved: ${Y}`),await E5(j,"approved",X||null),$()}catch(z){console.error("Failed to add to whitelist:",z)}},k=Z&&Z.length>0;return N`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(F||Q||L||E.length>0)&&N`
                    <div class="agent-request-body">
                        ${F&&N`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${E.length>0&&N`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${E.map((z,O)=>N`<li key=${O}>${z}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${Q&&N`
                            <pre class="agent-request-command">${Q}</pre>
                        `}
                        ${L&&N`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${L}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${k?Z.map((z)=>N`
                            <button 
                                key=${z.optionId||z.id||String(z)}
                                class="agent-request-btn ${z.kind==="allow_once"||z.kind==="allow_always"?"primary":""}"
                                onClick=${()=>D(z.optionId||z.id||z)}
                            >
                                ${z.name||z.label||z.optionId||z.id||String(z)}
                            </button>
                        `):N`
                        <button class="agent-request-btn primary" onClick=${()=>D("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>D("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${H}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}k0();k0();M_();function I6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>I6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${I6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function QQ(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:I6(j)})).filter(($)=>$.value)}function lJ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function $j(_){if(!Array.isArray(_))return[];return _.filter(lJ)}function D8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=I6(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=QQ(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function LQ(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=QQ(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):I6(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function C_(_){return typeof _==="string"?_.trim():""}function KQ(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function pJ(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let V=C_(X.type);if(V==="text"){let q=C_(X.text)||C_(X.content);if(q)j.push(q);return}if(V==="resource_link"){let q=C_(X.uri),Q=C_(X.title)||C_(X.name)||q;if(q&&Q)j.push(Q===q?q:`[${Q}](${q})`);return}if(V==="resource"){let q=C_(X.title)||C_(X.name)||C_(X.uri)||"Embedded resource",Q=C_(X.text);if(Q)j.push(`### ${q}

\`\`\`
${Q}
\`\`\``);else j.push(`### ${q}`);return}if(V==="generated_widget"){let q=C_(X.title)||C_(X.name)||"Generated widget",Q=C_(X.description)||C_(X.subtitle);j.push(KQ([`### ${q}`,Q]));return}if(V==="adaptive_card"&&C_(X.fallback_text)){j.push(C_(X.fallback_text));return}if(V==="adaptive_card_submission"){let q=D8(X);if(C_(q))j.push(C_(q));return}if(V==="file"){let q=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${q}`);return}if(V==="image"||!V){let q=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${q}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return KQ(j)}function H8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return pJ(G,Z)}function BQ(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function NQ(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function FQ(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(BQ(j,"aria-disabled","true"),BQ(j,"tabindex","-1"),"disabled"in j)NQ(j,"disabled");if("readOnly"in j)NQ(j,"readOnly")}}function rJ(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function nJ(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function UQ(_){return rJ(_)||nJ(_)}function E8(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function dJ(_,$){let j=Math.max(E8(_),E8($)),G=Math.min(E8(_),E8($));return(j+0.05)/(G+0.05)}function oJ(_,$,j="#ffffff"){let G=UQ(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let V=UQ(Y);if(!V)continue;let q=dJ(G,V);if(q>X)Z=Y,X=q}return Z}function jj(){let _=getComputedStyle(document.documentElement),$=(U,E)=>{for(let D of U){let H=_.getPropertyValue(D).trim();if(H)return H}return E},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),V=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),Q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),L=$(["--danger-color","--color-error"],"#f4212e"),K=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),B=oJ(V,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:V,good:q,warning:Q,attention:L,border:K,fontFamily:F,buttonTextColor:B}}function DQ(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:V,border:q,fontFamily:Q}=jj();return{fontFamily:Q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:V,subtle:V}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:V,subtle:V}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var iJ=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),HQ=!1,W8=null,EQ=!1;function Gj(_){_.querySelector(".adaptive-card-notice")?.remove()}function sJ(_,$,j="error"){Gj(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function aJ(_,$=(j)=>Z1(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function tJ(_=($)=>Z1($,null)){return($,j)=>{try{let G=aJ($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function eJ(_){if(EQ||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=tJ(),EQ=!0}async function _A(){if(HQ)return;if(W8)return W8;return W8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{HQ=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),W8}function $A(){return globalThis.AdaptiveCards}function jA(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function GA(_){return iJ.has(_)}function Xj(_){if(!Array.isArray(_))return[];return _.filter(jA)}function ZA(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function Zj(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Zj($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${Zj(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function XA(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return Zj($);return typeof $==="string"?$:String($)}function YA(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((V)=>G(V));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=XA(Y.type,j[Y.id],Y);for(let[V,q]of Object.entries(Y))if(Array.isArray(q)||q&&typeof q==="object")Y[V]=G(q);return Y};return G(_)}function VA(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function qA(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=VA(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function WQ(_,$,j){if(!GA($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await _A()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=$A();eJ(G);let Z=new G.AdaptiveCard,X=jj();Z.hostConfig=new G.HostConfig(DQ());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,V=$.state==="active"?$.payload:YA($.payload,Y);Z.parse(V),Z.onExecuteAction=(L)=>{let K=ZA(L);if(j?.onAction)Gj(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(K)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let B=F instanceof Error?F.message:String(F||"Action failed.");sJ(_,B||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",K)};let q=Z.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let Q=qA($);if(Q){_.classList.add("adaptive-card-finished");let L=document.createElement("div");L.className=`adaptive-card-status adaptive-card-status-${$.state}`;let K=document.createElement("span");if(K.className="adaptive-card-status-label",K.textContent=Q.label,L.appendChild(K),Q.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=Q.detail,L.appendChild(F)}_.appendChild(L)}if(Gj(_),_.appendChild(q),Q)FQ(q);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}k0();m2();function OQ({src:_,onClose:$}){return g(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),N`
        <${d$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${d$}>
    `}var O8=0,Yj=null,C6={activePostId:null,speaking:!1},Vj=new Set;function Qj(_={}){return _.window??(typeof window<"u"?window:null)}function zQ(_={}){return Qj(_)?.speechSynthesis||null}function qj(){let _={...C6};for(let $ of Vj)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function Lj(){return{...C6}}function JQ(_){if(typeof _!=="function")return()=>{};return Vj.add(_),_(Lj()),()=>Vj.delete(_)}function AQ(_={}){let $=Qj(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function kQ(_){let $=H8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function MQ(_={}){let $=zQ(_);if(O8+=1,Yj=null,C6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}qj()}function yQ(_,$,j={}){let G=Qj(j),Z=zQ(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=O8+1;O8=Y;try{Z.cancel()}catch{}let V=new G.SpeechSynthesisUtterance(X);Yj=V,C6={activePostId:_,speaking:!0},qj();let q=()=>{if(Y!==O8)return;Yj=null,C6={activePostId:null,speaking:!1},qj()};V.onend=q,V.onerror=q;try{return Z.speak(V),!0}catch(Q){return console.warn("[post-speech] speak failed:",Q),q(),!1}}async function wQ(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function Kj(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(V)=>{let q=V?.clipboardData;if(!q||typeof q.setData!=="function")return;if(q.setData("text/plain",j),G)q.setData("text/html",G);if(typeof V.preventDefault==="function")V.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let V=_.execCommand("copy");return Boolean(X||V)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function TQ(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function xQ(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let q=Z.getRangeAt(0);if(q&&typeof q.intersectsNode==="function")X=Boolean(q.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let q=TQ(Z.anchorNode),Q=TQ(Z.focusNode);X=Boolean(q&&G.contains(q)||Q&&G.contains(Q))}if(!X)return!1;let V=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!V)return!1;return j.setData("text/plain",V),_?.preventDefault?.(),!0}function IQ(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function CQ(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function PQ(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function QA({mediaId:_,onPreview:$}){let[j,G]=C(null);if(g(()=>{C2(_).then(G).catch((Q)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,Q)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?s_(X):"",q=x6(j.content_type,j.filename)!=="unsupported";return N`
        <div class="file-attachment" onClick=${(Q)=>Q.stopPropagation()}>
            <a href=${u1(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${Y&&N`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&N`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            ${q&&N`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function LA(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function KA(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function BA(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function NA(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function FA(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function fQ(_){let $=NA(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():FA(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function UA(_,$){let j=fQ($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var DA={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function HA(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=DA[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function EA(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function WA({marker:_}){let[$,j]=C(!1),G=R((K)=>{K.stopPropagation(),j((F)=>!F)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",V=_?.draft_recovered,q=String(_?.severity||"warning"),Q=Y||Z||String(_?.label||_?.kind||"issue"),L=Boolean(X||Z&&Y);return N`
        <div class=${`post-outcome-pill post-outcome-pill-${q}`}>
            <div class="post-outcome-pill-header" onClick=${L?G:void 0}>
                ${L&&N`
                    <span class="post-outcome-pill-toggle" aria-hidden="true">${s1($?"down":"right")}</span>
                `}
                <span class="post-outcome-pill-label">${Q}</span>
                ${V&&N`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&L&&N`
                <div class="post-outcome-pill-detail">
                    ${Z&&N`<div><strong>${Z}</strong></div>`}
                    ${X&&X!==Z&&N`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function OA({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=C(null);g(()=>{if(!Number.isFinite(j))return;C2(j).then(Z).catch((L)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,L)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?u1(j):null,V=x6(G?.content_type,G?.filename||_?.label),q=N8(V),Q=V!=="unsupported";return N`
        <span class="attachment-pill" title=${X}>
            ${Y?N`
                    <a href=${Y} download=${X} class="attachment-pill-main" onClick=${(L)=>L.stopPropagation()}>
                        <${V1}
                            prefix="post"
                            label=${_.label}
                            title=${X}
                        />
                    </a>
                `:N`
                    <${V1}
                        prefix="post"
                        label=${_.label}
                        title=${X}
                    />
                `}
            ${Number.isFinite(j)&&G&&Q&&N`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${q}
                    onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function z8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?x4(G):null;return N`
        <div class="content-annotations">
            ${$&&$.length>0&&N`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&N`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&N`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function zA({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?s_(_.size):"",Z=_.mime_type||"",X=kA(Z),Y=A4(_.uri);return N`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(V)=>V.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${X}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&N`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&N`<span>${Z}</span>`}
                    ${G&&N`<span>${G}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function JA({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return N`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),j(!$)}}>
                ${s1($?"down":"right")} ${G}
            </button>
            ${$&&N`
                ${Z&&N`<pre class="resource-embed-content">${Z}</pre>`}
                ${X&&N`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&N`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(V)=>{V.preventDefault(),V.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(K)=>K.charCodeAt(0))],{type:Y||"application/octet-stream"}),Q=URL.createObjectURL(q),L=document.createElement("a");L.href=Q,L.download=G.split("/").pop()||"resource",L.click(),URL.revokeObjectURL(Q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function AA({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=o9(_,$),Z=qq(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",V=G?.description||_.description||_.subtitle||"",q=_.open_label||"Open widget",Q=u(!1),L=(K)=>{if(K)K.preventDefault(),K.stopPropagation();if(!G)return;j?.(G)};return g(()=>{if(!_?.auto_open||!G||!Z||Q.current)return;let K=$?.timestamp?new Date($.timestamp).getTime():0;if(K&&Date.now()-K>1e4)return;let F=`widget_opened_${_.widget_id||$?.id||""}`;if(IQ(sessionStorage,F))return;Q.current=!0,CQ(sessionStorage,F,"1"),j?.(G)},[_?.auto_open,G,Z]),N`
        <div class="generated-widget-launch" onClick=${(K)=>K.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${X?` • ${String(X).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${V&&N`<div class="generated-widget-launch-description">${V}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${L}
                    title=${Z?"Open widget in a floating pane with a zen-mode toggle":"Unsupported widget artifact"}
                >
                    ${q}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane with a zen-mode toggle.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function kA(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function MA(_){let $=A4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function yA({preview:_}){let $=A4(_.url),j=MA(_.image),G=PQ(_.site_name,$);return N`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Z)=>Z.stopPropagation()}
            style=${j}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${G||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&N`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function TA(_,$){return typeof _==="string"?_:""}var RQ=1800,wA=40,xA=24576,IA=16,CA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,PA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,fA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,RA=`
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #1a1a1a;
  }
  h1 { font-size: 1.6em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h2 { font-size: 1.35em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h3 { font-size: 1.15em; font-weight: 700; margin: 0.5em 0 0.3em; }
  h4, h5, h6 { font-size: 1em; font-weight: 700; margin: 0.5em 0 0.3em; }
  p { margin: 0.5em 0; }
  pre {
    background: #f6f8fa;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 12px 16px;
    overflow-x: auto;
    margin: 0.5em 0;
  }
  code {
    font-family: "Fira Code", "Cascadia Code", Consolas, "Courier New", monospace;
    font-size: 0.9em;
  }
  pre code { background: none; padding: 0; border: none; }
  :not(pre) > code { background: #f0f2f5; padding: 2px 5px; border-radius: 3px; }
  blockquote { border-left: 3px solid #d0d7de; margin: 0.5em 0; padding-left: 12px; color: #57606a; }
  table { border-collapse: collapse; margin: 0.5em 0; }
  th, td { border: 1px solid #d0d7de; padding: 6px 12px; text-align: left; }
  th { background: #f6f8fa; font-weight: 600; }
  ul, ol { margin: 0.4em 0; padding-left: 1.8em; }
  li { margin: 0.15em 0; }
  a { color: #0969da; text-decoration: none; }
  hr { border: none; border-top: 1px solid #d0d7de; margin: 1em 0; }
  img { max-width: 100%; }
</style>`;function SA(_,$={}){let j=typeof _==="string"?_:"",G=j?j.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`):[],Z=new TextEncoder().encode(j).byteLength,X=Number.isFinite($.lineThreshold)?$.lineThreshold:wA,Y=Number.isFinite($.byteThreshold)?$.byteThreshold:xA,V=G.length>X||Z>Y,q=Math.min(G.length,Number.isFinite($.previewLines)?$.previewLines:IA);return{shouldCollapse:V,lineCount:G.length,byteLength:Z,visibleLines:q,omittedLines:Math.max(0,G.length-q)}}async function SQ(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(Kj(document,{text:$}))return!0;if(await wQ(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function gA(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=Z1($,null),G=`<html><head>${RA}</head><body>${j}</body></html>`;if(Kj(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return SQ($)}function uA(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let V=window.getSelection?.();if(!V||V.isCollapsed)return;for(let q of $)if(xQ(Y,{root:q,selection:V}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,V)=>{let q=V||"idle";if(Y.dataset.copyState=q,q==="success")Y.innerHTML=PA,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(q==="error")Y.innerHTML=fA,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=CA,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let V=document.createElement("div");V.className="post-code-block";let q=Y.querySelector("code"),Q=SA(q?.textContent||"");if(Q.shouldCollapse){V.classList.add("post-code-block-collapsed"),V.style.setProperty("--post-code-preview-lines",String(Q.visibleLines));let F=document.createElement("button");F.type="button",F.className="post-code-expand-btn";let B=()=>{let E=V.classList.contains("post-code-block-expanded");F.innerHTML=E?`${e9("up")} <span>Collapse output</span>`:`${e9("right")} <span>Expand output · ${Q.lineCount.toLocaleString()} lines · ${s_(Q.byteLength)}${Q.omittedLines?` · ${Q.omittedLines.toLocaleString()} hidden`:""}</span>`,F.setAttribute("aria-expanded",E?"true":"false")},U=(E)=>{E.preventDefault(),E.stopPropagation(),V.classList.toggle("post-code-block-expanded"),B()};F.addEventListener("click",U),B(),V.appendChild(F),G.push(()=>F.removeEventListener("click",U))}Y.parentNode?.insertBefore(V,Y),V.appendChild(Y);let L=document.createElement("button");L.type="button",L.className="post-code-copy-btn",X(L,"idle"),V.appendChild(L);let K=async(F)=>{F.preventDefault(),F.stopPropagation();let U=Y.querySelector("code")?.textContent||"",E=await SQ(U);X(L,E?"success":"error");let D=j.get(L);if(D)clearTimeout(D);let H=setTimeout(()=>{X(L,"idle"),j.delete(L)},RQ);j.set(L,H)};L.addEventListener("click",K),G.push(()=>{L.removeEventListener("click",K);let F=j.get(L);if(F)clearTimeout(F);if(V.parentNode)V.parentNode.insertBefore(Y,V),V.remove()})}),()=>{G.forEach((Y)=>Y())}}function gQ(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function bA(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Files:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let L=gQ(Q.replace(/^\s*-\s+/,"").trim());if(L)Z.push(L)}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),V=j.slice(X),q=[...Y,...V].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,fileRefs:Z}}function vA(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Folders:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let L=gQ(Q.replace(/^\s*-\s+/,"").trim());if(L)Z.push(L)}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),V=j.slice(X),q=[...Y,...V].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,folderRefs:Z}}function mA(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Referenced messages:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let K=Q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(K)Z.push(K[1])}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),V=j.slice(X),q=[...Y,...V].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,messageRefs:Z}}function cA(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1){let L=j[Q].trim();if((L==="Images:"||L==="Attachments:")&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let L=Q.replace(/^\s*-\s+/,"").trim(),K=L.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||L.match(/^attachment:([^\s]+)\s+(.+)$/i);if(K){let F=K[1],B=(K[2]||"").trim()||F;Z.push({id:F,label:B,raw:L})}else Z.push({id:null,label:L,raw:L})}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),V=j.slice(X),q=[...Y,...V].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:Z}}function hA(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function lA(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(hA).sort((L,K)=>K.length-L.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),V=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),q=[],Q;while(Q=V.nextNode())q.push(Q);for(let L of q){let K=L.nodeValue;if(!K||!Z.test(K)){Z.lastIndex=0;continue}Z.lastIndex=0;let F=L.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let B=K.split(Z).filter((E)=>E!=="");if(B.length===0)continue;let U=Y.createDocumentFragment();for(let E of B)if(X.test(E)){let D=Y.createElement("mark");D.className="search-highlight-term",D.textContent=E,U.appendChild(D)}else U.appendChild(Y.createTextNode(E));L.parentNode.replaceChild(U,L)}return Y.body.innerHTML}function uQ({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:V,userAvatarUrl:q,userAvatarBackground:Q,onDelete:L,isThreadReply:K,isThreadPrev:F,isThreadNext:B,isRemoving:U,highlightQuery:E,onFileRef:D,onOpenWidget:H,onOpenAttachmentPreview:k}){let[z,O]=C(null),[I,x]=C("idle"),[A,M]=C(()=>Lj()),W=u(null),y=u(null),w=_.data,J=w.type==="agent_response",P=V||"You",f=J?X||hq:P,b=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",c=Boolean(J&&E&&b&&b!==f),r=J?a9(X,Y,!0):a9(P,q),e=typeof Q==="string"?Q.trim().toLowerCase():"",m=!J&&r.image&&(e==="clear"||e==="transparent"),_0=J&&Boolean(r.image),E0=`background-color: ${m||_0?"transparent":r.color}`,Z0=w.content_meta,$0=Boolean(Z0?.truncated),V0=Boolean(Z0?.preview),N0=$0&&!V0,h=$0?{originalLength:Number.isFinite(Z0?.original_length)?Z0.original_length:w.content?w.content.length:0,maxLength:Number.isFinite(Z0?.max_length)?Z0.max_length:0}:null,j0=w.content_blocks||[],Q0=w.media_ids||[],O0=fQ(j0),a=Boolean(O0?.sourceAgentName),X0=TA(w.content,w.link_previews);X0=UA(X0,j0);let{content:W0,fileRefs:P0}=bA(X0),{content:l0,folderRefs:u0}=vA(W0),{content:G_,messageRefs:h0}=mA(l0),s0=(d)=>{d?.preventDefault?.(),d?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},f0=(d)=>{if(d.key==="Enter"||d.key===" ")s0(d)},{content:o0,attachments:v0}=cA(G_);X0=o0;let t0=Xj(j0),i0=$j(j0),Z_=LA(j0)[0]||null,z0=KA(j0)[0]||null,d0=BA(j0)[0]||null,H_=t0.length===1&&typeof t0[0]?.fallback_text==="string"?t0[0].fallback_text.trim():"",D0=i0.length===1?D8(i0[0]).trim():"",g0=Boolean(H_)&&X0?.trim()===H_||Boolean(D0)&&X0?.trim()===D0,I0=Boolean(X0)&&!N0&&!g0,r0=typeof E==="string"?E.trim():"",z_=Y0(()=>{if(!X0||g0)return"";let d=Z1(X0,j);return r0?lA(d,r0):d},[X0,g0,r0]),Q_=Y0(()=>H8(_),[_]),U_=Y0(()=>AQ(),[]),N_=Y0(()=>kQ(_),[_]),J_=Boolean(A.speaking&&A.activePostId===_.id),x_=(d,B0)=>{d.stopPropagation(),O(u1(B0))},P_=(d)=>{k?.(d)},E_=(d)=>{d.stopPropagation(),L?.(_)},o_=async(d)=>{d.stopPropagation();let B0=await gA(Q_);if(x(B0?"success":"error"),y.current)clearTimeout(y.current);y.current=setTimeout(()=>{y.current=null,x("idle")},RQ)},f_=(d)=>{if(d.stopPropagation(),J_){MQ();return}yQ(_.id,N_)},q0=(d,B0)=>{let p0=new Set;if(!d||B0.length===0)return{content:d,usedIds:p0};return{content:d.replace(/attachment:([^\s)"']+)/g,(R_,F1,u_,z1)=>{let I_=F1.replace(/^\/+/,""),J1=B0.find((k_)=>k_.name&&k_.name.toLowerCase()===I_.toLowerCase()&&!p0.has(k_.id))||B0.find((k_)=>!p0.has(k_.id));if(!J1)return R_;if(p0.add(J1.id),z1.slice(Math.max(0,u_-2),u_)==="](")return`/media/${J1.id}`;return J1.name||"attachment"}),usedIds:p0}},v=[],n=[],s=[],G0=[],F0=[],y0=[],A0=[],M0=0;if(j0.length>0)j0.forEach((d)=>{if(d?.type==="text"&&d.annotations)A0.push(d.annotations);if(d?.type==="generated_widget")y0.push(d);else if(d?.type==="resource_link")G0.push(d);else if(d?.type==="resource")F0.push(d);else if(d?.type==="file"){let B0=Q0[M0++];if(B0)n.push(B0),s.push({id:B0,name:d?.name||d?.filename||d?.title})}else if(d?.type==="image"||!d?.type){let B0=Q0[M0++];if(B0){let p0=typeof d?.mime_type==="string"?d.mime_type:void 0;v.push({id:B0,annotations:d?.annotations,mimeType:p0}),s.push({id:B0,name:d?.name||d?.filename||d?.title})}}});else if(Q0.length>0){let d=v0.length>0;Q0.forEach((B0,p0)=>{let j_=v0[p0]||null;if(s.push({id:B0,name:j_?.label||null}),d)n.push(B0);else v.push({id:B0,annotations:null})})}if(v0.length>0)v0.forEach((d)=>{if(!d?.id)return;let B0=s.find((p0)=>String(p0.id)===String(d.id));if(B0&&!B0.name)B0.name=d.label});let{content:T0,usedIds:c0}=q0(X0,s);X0=T0;let S0=v.filter(({id:d})=>!c0.has(d)),n0=n.filter((d)=>!c0.has(d)),e0=v0.length>0?v0.map((d,B0)=>({id:d.id||`attachment-${B0+1}`,label:d.label||`attachment-${B0+1}`})):s.map((d,B0)=>({id:d.id,label:d.name||`attachment-${B0+1}`})),x0=Y0(()=>Xj(j0),[j0]),w0=Y0(()=>$j(j0),[j0]),D_=Y0(()=>{return x0.map((d)=>`${d.card_id}:${d.state}`).join("|")},[x0]);g(()=>{if(!W.current)return;return E$(W.current),uA(W.current)},[z_]),g(()=>{return JQ((d)=>{M(d)})},[]),g(()=>()=>{if(y.current)clearTimeout(y.current)},[]);let __=u(null);return g(()=>{if(!__.current||x0.length===0)return;let d=__.current;d.innerHTML="";for(let B0 of x0){let p0=document.createElement("div");d.appendChild(p0),WQ(p0,B0,{onAction:async(j_)=>{if(j_.type==="Action.OpenUrl"){let R_=A4(j_.url||"");if(!R_)throw Error("Invalid URL");window.open(R_,"_blank","noopener,noreferrer");return}if(j_.type==="Action.Submit"){await f7({post_id:_.id,thread_id:w.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:B0.card_id,action:{type:j_.type,title:j_.title||"",data:j_.data}});return}console.warn("[post] unsupported adaptive card action:",j_.type,j_)}}).catch((j_)=>{console.error("[post] adaptive card render error:",j_),p0.textContent=B0.fallback_text||"Card failed to render."})}},[D_,_.id]),N`
        <div id=${`post-${_.id}`} class="post ${J?"agent-post":""} ${K?"thread-reply":""} ${F?"thread-prev":""} ${B?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${J?"agent-avatar":""} ${r.image?"has-image":""}" style=${E0}>
                ${r.image?N`<img src=${r.image} alt=${f} />`:r.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${J&&U_&&N_&&N`
                        <button
                            class=${`post-action-btn post-speak-btn${J_?" is-active":""}`}
                            type="button"
                            title=${J_?"Stop reading aloud":"Read aloud"}
                            aria-label=${J_?"Stop reading aloud":"Read aloud"}
                            onClick=${f_}
                        >
                            ${J_?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${I==="success"?" is-success":I==="error"?" is-error":""}`}
                        type="button"
                        title=${I==="success"?"Copied":I==="error"?"Copy failed":"Copy message"}
                        aria-label=${I==="success"?"Copied":I==="error"?"Copy failed":"Copy message"}
                        onClick=${o_}
                        disabled=${!Q_}
                    >
                        ${I==="success"?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:I==="error"?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${E_}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${f}</span>
                    ${a&&N`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${O0?.sourceChatJid||""}`.trim()}
                        >
                            @${O0?.sourceAgentName}
                        </span>
                    `}
                    ${c&&N`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${b} and reference this message`}
                            onClick=${s0}
                            onKeyDown=${f0}
                        >
                            @${b}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${s0}>${MX(_.timestamp)}</a>
                    ${Z_&&N`
                        <span
                            class="post-recovery-chip"
                            title=${HA(Z_)}
                        >
                            recovered
                        </span>
                    `}
                    ${z0&&N`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${EA(z0)}
                        >
                            timeout
                        </span>
                    `}
                    ${d0&&N`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(d0.severity||"warning")}${d0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(d0.label||d0.kind||"issue")}
                        >
                            ${String(d0.label||d0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${d0&&N`
                    <${WA} marker=${d0} />
                `}
                ${N0&&h&&N`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${U6(h.originalLength)} chars
                            ${h.maxLength?N` • Display limit: ${U6(h.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${V0&&h&&N`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${U6(h.maxLength)} of ${U6(h.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(P0.length>0||u0.length>0||h0.length>0||e0.length>0)&&N`
                    <div class="post-file-refs">
                        ${h0.map((d)=>{let B0=(p0)=>{if(p0.preventDefault(),p0.stopPropagation(),Z)Z(d,_.chat_jid||null);else{let j_=document.getElementById("post-"+d);if(j_)j_.scrollIntoView({behavior:"smooth",block:"center"}),j_.classList.add("post-highlight"),setTimeout(()=>j_.classList.remove("post-highlight"),2000)}};return N`
                                <a href=${`#msg-${d}`} class="post-msg-pill-link" onClick=${B0}>
                                    <${V1}
                                        prefix="post"
                                        label=${"msg:"+d}
                                        title=${"Message "+d}
                                        icon="message"
                                        onClick=${B0}
                                    />
                                </a>
                            `})}
                        ${P0.map((d)=>{let B0=d.split("/").pop()||d;return N`
                                <${V1}
                                    prefix="post"
                                    label=${B0}
                                    title=${d}
                                    onClick=${()=>D?.(d)}
                                />
                            `})}
                        ${u0.map((d)=>{let B0=d.split("/").pop()||d;return N`
                                <${V1}
                                    prefix="post"
                                    label=${B0}
                                    title=${d}
                                    icon="folder"
                                />
                            `})}
                        ${e0.map((d)=>N`
                            <${OA}
                                key=${d.id}
                                attachment=${d}
                                onPreview=${P_}
                            />
                        `)}
                    </div>
                `}
                ${I0&&N`
                    <div 
                        ref=${W}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:z_}}
                        onClick=${(d)=>{if(d.target.classList.contains("hashtag")){d.preventDefault(),d.stopPropagation();let B0=d.target.dataset.hashtag;if(B0)j?.(B0)}else if(d.target.tagName==="IMG")d.preventDefault(),d.stopPropagation(),O(d.target.src)}}
                    />
                `}
                ${x0.length>0&&N`
                    <div ref=${__} class="post-adaptive-cards" />
                `}
                ${w0.length>0&&N`
                    <div class="post-adaptive-card-submissions">
                        ${w0.map((d,B0)=>{let p0=LQ(d),j_=`${d.card_id}-${B0}`;return N`
                                <div key=${j_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${p0.title}</span>
                                        </div>
                                    </div>
                                    ${p0.fields.length>0&&N`
                                        <div class="adaptive-card-submission-fields">
                                            ${p0.fields.map((R_)=>N`
                                                <span class="adaptive-card-submission-field" title=${`${R_.key}: ${R_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${R_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${R_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${x4(p0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${y0.length>0&&N`
                    <div class="generated-widget-launches">
                        ${y0.map((d,B0)=>N`
                            <${AA}
                                key=${d.widget_id||d.id||`${_.id}-widget-${B0}`}
                                block=${d}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${A0.length>0&&N`
                    ${A0.map((d,B0)=>N`
                        <${z8} key=${B0} annotations=${d} />
                    `)}
                `}
                ${S0.length>0&&N`
                    <div class="media-preview">
                        ${S0.map(({id:d,mimeType:B0})=>{let j_=typeof B0==="string"&&B0.toLowerCase().startsWith("image/svg")?u1(d):S7(d);return N`
                                <img
                                    key=${d}
                                    src=${j_}
                                    alt="Media"
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(R_)=>x_(R_,d)}
                                />
                            `})}
                    </div>
                `}
                ${S0.length>0&&N`
                    ${S0.map(({annotations:d},B0)=>N`
                        ${d&&N`<${z8} key=${B0} annotations=${d} />`}
                    `)}
                `}
                ${n0.length>0&&N`
                    <div class="file-attachments">
                        ${n0.map((d)=>N`
                            <${QA} key=${d} mediaId=${d} onPreview=${P_} />
                        `)}
                    </div>
                `}
                ${G0.length>0&&N`
                    <div class="resource-links">
                        ${G0.map((d,B0)=>N`
                            <div key=${B0}>
                                <${zA} block=${d} />
                                <${z8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${F0.length>0&&N`
                    <div class="resource-embeds">
                        ${F0.map((d,B0)=>N`
                            <div key=${B0}>
                                <${JA} block=${d} />
                                <${z8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${w.link_previews?.length>0&&N`
                    <div class="link-previews">
                        ${w.link_previews.map((d,B0)=>N`
                            <${yA} key=${B0} preview=${d} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${z&&N`<${OQ} src=${z} onClose=${()=>O(null)} />`}

    `}function bQ({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:V,onOpenWidget:q,onOpenAttachmentPreview:Q,emptyMessage:L,timelineRef:K,agents:F,user:B,onDeletePost:U,reverse:E=!0,removingPostIds:D,searchQuery:H}){let[k,z]=C(!1),O=u(null),I=typeof IntersectionObserver<"u",x=R(async()=>{if(!j||!$||k)return;z(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{z(!1)}},[$,k,j]),A=R((b)=>{let{scrollTop:c,scrollHeight:r,clientHeight:e}=b.target,m=E?r-e-c:c,_0=Math.max(300,e);if(m<_0)x()},[E,x]);g(()=>{if(!I)return;let b=O.current,c=K?.current;if(!b||!c)return;let r=300,e=new IntersectionObserver((m)=>{for(let _0 of m){if(!_0.isIntersecting)continue;x()}},{root:c,rootMargin:`${r}px 0px ${r}px 0px`,threshold:0});return e.observe(b),()=>e.disconnect()},[I,$,j,K,x]);let M=u(x);if(M.current=x,g(()=>{if(I)return;if(!K?.current)return;let{scrollTop:b,scrollHeight:c,clientHeight:r}=K.current,e=E?c-r-b:b,m=Math.max(300,r);if(e<m)M.current?.()},[I,_,$,E,K]),g(()=>{if(!K?.current)return;if(!$||k)return;let{scrollTop:b,scrollHeight:c,clientHeight:r}=K.current,e=E?c-r-b:b,m=Math.max(300,r);if(c<=r+1||e<m)M.current?.()},[_,$,k,E,K]),!_)return N`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return N`
            <div class="timeline" ref=${K}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${L||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let W=_.slice().sort((b,c)=>b.id-c.id),y=(b)=>{let c=b?.data?.thread_id;if(c===null||c===void 0||c==="")return null;let r=Number(c);return Number.isFinite(r)?r:null},w=new Map;for(let b=0;b<W.length;b+=1){let c=W[b],r=Number(c?.id),e=y(c);if(e!==null){let m=w.get(e)||{anchorIndex:-1,replyIndexes:[]};m.replyIndexes.push(b),w.set(e,m)}else if(Number.isFinite(r)){let m=w.get(r)||{anchorIndex:-1,replyIndexes:[]};m.anchorIndex=b,w.set(r,m)}}let J=new Map;for(let[b,c]of w.entries()){let r=new Set;if(c.anchorIndex>=0)r.add(c.anchorIndex);for(let e of c.replyIndexes)r.add(e);J.set(b,Array.from(r).sort((e,m)=>e-m))}let P=W.map((b,c)=>{let r=y(b);if(r===null)return{hasThreadPrev:!1,hasThreadNext:!1};let e=J.get(r);if(!e||e.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let m=e.indexOf(c);if(m<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:m>0,hasThreadNext:m<e.length-1}}),f=N`<div class="timeline-sentinel" ref=${O}></div>`;return N`
        <div class="timeline ${E?"reverse":"normal"}" ref=${K} onScroll=${A}>
            <div class="timeline-content">
                ${E?f:null}
                ${W.map((b,c)=>{let r=Boolean(b.data?.thread_id&&b.data.thread_id!==b.id),e=D?.has?.(b.id),m=P[c]||{};return N`
                    <${uQ}
                        key=${b.id}
                        post=${b}
                        isThreadReply=${r}
                        isThreadPrev=${m.hasThreadPrev}
                        isThreadNext=${m.hasThreadNext}
                        isRemoving=${e}
                        highlightQuery=${H}
                        agentName=${lq(b.data?.agent_id,F||{})}
                        agentAvatarUrl=${pq(b.data?.agent_id,F||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>G?.(b)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${V}
                        onOpenWidget=${q}
                        onDelete=${U}
                        onOpenAttachmentPreview=${Q}
                    />
                `})}
                ${E?null:f}
            </div>
        </div>
    `}k0();M_();function vQ(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var J8="workspaceExplorerScale",pA=["compact","default","comfortable"],rA=new Set(pA),nA={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function mQ(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return rA.has(j)?j:$}function Bj(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function dA(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function oA(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function Nj(_={}){let $=dA(_),j=_.stored?mQ(_.stored,$):$;return oA(j,_)}function cQ(_){return nA[mQ(_)]}E9();function iA(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function Fj(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function hQ(_,$,j={}){let G=j.resolvePane;if(Fj(_,G))return!0;return iA($)}var dQ=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function sA(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return Fj($,(j)=>Y_.resolve(j))}function oQ(_,$,j,G=0,Z=[]){if(!j&&dQ(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)oQ(X,$,j,G+1,Z);return Z}function lQ(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&dQ(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function Ej(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((V)=>[V?.path,V])):new Map,X=!j||j.length!==G.length,Y=G.map((V)=>{let q=Ej(Z.get(V.path),V);if(q!==Z.get(V.path))X=!0;return q});return X?{...$,children:Y}:_}function Dj(_,$,j){if(!_)return _;if(_.path===$)return Ej(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=Dj(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var iQ=4,Uj=14,aA=16;function sQ(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=sQ(G);return _.__bytes=j,j}function aQ(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=iQ)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let V of Z){let q=Math.max(0,Number(V?.__bytes??V?.size??0));if(q<=0)continue;if(V.type==="dir")X.push({kind:"dir",node:V,size:q});else X.push({kind:"file",name:V.name,path:V.path,size:q})}X.sort((V,q)=>q.size-V.size);let Y=X;if(X.length>Uj){let V=X.slice(0,Uj-1),q=X.slice(Uj-1),Q=q.reduce((L,K)=>L+K.size,0);V.push({kind:"other",name:`+${q.length} more`,path:`${G.path}/[other]`,size:Q}),Y=V}return G.children=Y.map((V)=>{if(V.kind==="dir")return aQ(V.node,$+1);return{name:V.name,path:V.path,size:V.size,children:[]}}),G}function pQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function tQ(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function A8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function Wj(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,V=X-Z>Y?Z+Y:X,q=A8(_,$,G,Z),Q=A8(_,$,G,V),L=A8(_,$,j,V),K=A8(_,$,j,Z),F=V-Z>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${G} ${G} 0 ${F} 1 ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`L ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,"Z"].join(" ")}var eQ={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function _L(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(V,q,Q,L)=>{let K=Array.isArray(V?.children)?V.children:[];if(!K.length)return;let F=Math.max(0,Number(V.size)||0);if(F<=0)return;let B=Q-q,U=q;K.forEach((E,D)=>{let H=Math.max(0,Number(E.size)||0);if(H<=0)return;let k=H/F,z=U,O=D===K.length-1?Q:U+B*k;if(U=O,O-z<0.003)return;let I=eQ[L];if(I){let x=tQ(z,L,j);if(G.push({key:E.path,path:E.path,label:E.name,size:H,color:x,depth:L,startAngle:z,endAngle:O,innerRadius:I[0],outerRadius:I[1],d:Wj(120,120,I[0],I[1],z,O)}),L===1)Z.push({key:E.path,name:E.name,size:H,pct:X>0?H/X*100:0,color:x})}if(L<iQ)Y(E,z,O,L+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function Hj(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=Hj(G,$);if(Z)return Z}return null}function $L(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=eQ[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,V=tQ(X,1,G),Q=`${$||"."}/[files]`;return{segments:[{key:Q,path:Q,label:_,size:j,color:V,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:Wj(120,120,Z[0],Z[1],X,Y)}],legend:[{key:Q,name:_,size:j,pct:100,color:V}]}}function rQ(_,$=!1,j=!1){if(!_)return null;let G=sQ(_),Z=aQ(_,0),X=Z.size||G,{segments:Y,legend:V}=_L(Z,X,j);if(!Y.length&&X>0){let q=$L("[files]",Z.path,X,j);Y=q.segments,V=q.legend}return{root:Z,totalSize:X,segments:Y,legend:V,truncated:$,isDarkTheme:j}}function tA({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Z]=C(_?.root?.path||"."),[X,Y]=C(()=>[_?.root?.path||"."]),[V,q]=C(!1);g(()=>{let y=_?.root?.path||".";Z(y),Y([y]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!G)return;q(!0);let y=setTimeout(()=>q(!1),180);return()=>clearTimeout(y)},[G]);let Q=Y0(()=>{return Hj(_.root,G)||_.root},[_?.root,G]),L=Q?.size||_.totalSize||0,{segments:K,legend:F}=Y0(()=>{let y=_L(Q,L,_.isDarkTheme);if(y.segments.length>0)return y;if(L<=0)return y;let w=Q?.children?.length?"Total":"[files]";return $L(w,Q?.path||_?.root?.path||".",L,_.isDarkTheme)},[Q,L,_.isDarkTheme,_?.root?.path]),[B,U]=C(K),E=u(new Map),D=u(0);g(()=>{let y=E.current,w=new Map(K.map((b)=>[b.key,b])),J=performance.now(),P=220,f=(b)=>{let c=Math.min(1,(b-J)/220),r=c*(2-c),e=K.map((m)=>{let E0=y.get(m.key)||{startAngle:m.startAngle,endAngle:m.startAngle,innerRadius:m.innerRadius,outerRadius:m.innerRadius},Z0=(j0,Q0)=>j0+(Q0-j0)*r,$0=Z0(E0.startAngle,m.startAngle),V0=Z0(E0.endAngle,m.endAngle),N0=Z0(E0.innerRadius,m.innerRadius),h=Z0(E0.outerRadius,m.outerRadius);return{...m,d:Wj(120,120,N0,h,$0,V0)}});if(U(e),c<1)D.current=requestAnimationFrame(f)};if(D.current)cancelAnimationFrame(D.current);return D.current=requestAnimationFrame(f),E.current=w,()=>{if(D.current)cancelAnimationFrame(D.current)}},[K]);let H=B.length?B:K,k=L>0?s_(L):"0 B",z=Q?.name||"",I=(z&&z!=="."?z:"Total")||"Total",x=k,A=X.length>1,M=(y)=>{if(!y?.path)return;let w=Hj(_.root,y.path);if(!w||!Array.isArray(w.children)||w.children.length===0)return;Y((J)=>[...J,w.path]),Z(w.path),j(null)},W=()=>{if(!A)return;Y((y)=>{let w=y.slice(0,-1);return Z(w[w.length-1]||_?.root?.path||"."),w}),j(null)};return N`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${V?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${Q?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${L}>
                ${H.map((y)=>N`
                    <path
                        key=${y.key}
                        d=${y.d}
                        fill=${y.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===y.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(y)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(y)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>M(y)}
                    >
                        <title>${y.label} — ${s_(y.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${A?" is-drill":""}`}
                    onClick=${W}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${I}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${x}</text>
                </g>
            </svg>
            ${F.length>0&&N`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((y)=>N`
                        <div key=${y.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${y.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${y.name}>${y.name}</span>
                            <span class="workspace-folder-starburst-size">${s_(y.size)}</span>
                            <span class="workspace-folder-starburst-pct">${y.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&N`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function nQ(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function jL(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function eA(_){if(!_)return"Workspace index status";let $=[jL(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function _k(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function $k(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function jk(_,$=null){let j=_k(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:$k(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function GL({onFileSelect:_,onFolderSelect:$,visible:j=!0,active:G=void 0,onOpenEditor:Z,onOpenTerminalTab:X,onOpenVncTab:Y,onToggleTerminal:V,terminalVisible:q=!1}){let[Q,L]=C(null),[K,F]=C(new Set(["."])),[B,U]=C(null),[E,D]=C(null),[H,k]=C(""),[z,O]=C(null),[,I]=C(null),[x,A]=C(!0),[M,W]=C(!1),[y,w]=C(null),[J,P]=C(()=>U$("workspaceShowHidden",!1)),[f,b]=C(!1),[c,r]=C(null),[e,m]=C(null),[_0,E0]=C(null),[Z0,$0]=C(!1),[V0,N0]=C(null),[h,j0]=C(null),[Q0,O0]=C(null),[a,X0]=C(!1),[W0,P0]=C(()=>A5()),[l0,u0]=C(()=>pQ()),[G_,h0]=C(()=>Nj({stored:W1(J8),...Bj()})),[s0,f0]=C(!1),o0=Math.max(15000,(Number(W0?.refreshIntervalSec)||60)*1000),v0=Math.max(0,Number(W0?.folderPreviewDepth)||0),t0=u(K),i0=u(""),F_=u(null),Z_=u(0),m0=u(new Set),z0=u(null),V_=u(null),d0=u(new Map),H_=u(_),D0=u($),g0=u(Z),I0=u(null),r0=u(null),z_=u(null),Q_=u(null),U_=u(null),N_=u(null),J_=u("."),x_=u(0),P_=u({path:null,dragging:!1,startX:0,startY:0}),E_=u({path:null,dragging:!1,startX:0,startY:0}),o_=u({path:null,timer:0}),f_=u(!1),q0=u(0),v=u(new Map),n=u(null),s=u(null),G0=u(null),F0=u(null),y0=u(null),A0=u(null),M0=u(J),T0=u(j),c0=u(G??j),S0=u(0),n0=u(_0),e0=u(f),x0=u(c),w0=u(null),D_=u({x:0,y:0}),__=u(0),d=u(null),B0=u(B),p0=u(E),j_=u(null),R_=u(z);H_.current=_,D0.current=$,g0.current=Z,g(()=>{t0.current=K},[K]),g(()=>{M0.current=J},[J]),g(()=>{T0.current=j},[j]),g(()=>{c0.current=G??j},[G,j]),g(()=>{n0.current=_0},[_0]);let F1=R(()=>{if(!x_.current)return;clearTimeout(x_.current),x_.current=0},[]);g(()=>()=>F1(),[F1]),g(()=>{if(typeof window>"u")return;let S=()=>{h0(Nj({stored:W1(J8),...Bj()}))};S();let p=()=>S(),o=()=>S(),t=(H0)=>{if(!H0||H0.key===null||H0.key===J8)S()};window.addEventListener("resize",p),window.addEventListener("focus",o),window.addEventListener("storage",t);let U0=window.matchMedia?.("(pointer: coarse)"),L0=window.matchMedia?.("(hover: none)"),J0=(H0,a0)=>{if(!H0)return;if(H0.addEventListener)H0.addEventListener("change",a0);else if(H0.addListener)H0.addListener(a0)},C0=(H0,a0)=>{if(!H0)return;if(H0.removeEventListener)H0.removeEventListener("change",a0);else if(H0.removeListener)H0.removeListener(a0)};return J0(U0,p),J0(L0,p),()=>{window.removeEventListener("resize",p),window.removeEventListener("focus",o),window.removeEventListener("storage",t),C0(U0,p),C0(L0,p)}},[]),g(()=>{if(typeof window>"u")return;let S=()=>{P0(A5())},p=(U0)=>{if(!U0||U0.key===null||U0.key===i2||U0.key===s2)S()},o=()=>S(),t=(U0)=>{let L0=U0?.detail?.settings;if(L0&&typeof L0==="object"){P0({refreshIntervalSec:Number(L0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(L0.folderPreviewDepth)||0)});return}S()};return window.addEventListener("focus",o),window.addEventListener("storage",p),window.addEventListener(o2,t),()=>{window.removeEventListener("focus",o),window.removeEventListener("storage",p),window.removeEventListener(o2,t)}},[]),g(()=>{let S=(p)=>{let o=p?.detail?.path;if(!o)return;let t=o.split("/"),U0=[];for(let L0=1;L0<t.length;L0++)U0.push(t.slice(0,L0).join("/"));if(U0.length)F((L0)=>{let J0=new Set(L0);J0.add(".");for(let C0 of U0)J0.add(C0);return J0});U(o),requestAnimationFrame(()=>{let L0=document.querySelector(`[data-path="${CSS.escape(o)}"]`);if(L0)L0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",S),()=>window.removeEventListener("workspace-reveal-path",S)},[]),g(()=>{e0.current=f},[f]),g(()=>{x0.current=c},[c]),g(()=>{B0.current=B},[B]),g(()=>{p0.current=E},[E]),g(()=>{R_.current=z},[z]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let S=()=>u0(pQ());S();let p=window.matchMedia?.("(prefers-color-scheme: dark)"),o=()=>S();if(p?.addEventListener)p.addEventListener("change",o);else if(p?.addListener)p.addListener(o);let t=typeof MutationObserver<"u"?new MutationObserver(()=>S()):null;if(t?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)t?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(p?.removeEventListener)p.removeEventListener("change",o);else if(p?.removeListener)p.removeListener(o);t?.disconnect()}},[]),g(()=>{if(!E)return;let S=U_.current;if(!S)return;let p=requestAnimationFrame(()=>{vQ(S)});return()=>cancelAnimationFrame(p)},[E]),g(()=>{if(!s0)return;let S=(o)=>{let t=o?.target;if(!(t instanceof Element))return;if(y0.current?.contains(t))return;if(A0.current?.contains(t))return;f0(!1)},p=(o)=>{if(o?.key==="Escape")f0(!1),A0.current?.focus?.()};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S,{passive:!0}),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S),document.removeEventListener("keydown",p)}},[s0]);let u_=async(S,p={})=>{let o=Boolean(p?.autoOpen),t=String(S||"").trim();W(!0),O(null),I(null);try{let U0=await m7(t,20000);if(o&&t&&hQ(t,U0,{resolvePane:(L0)=>Y_.resolve(L0)}))return g0.current?.(t,U0),U0;return O(U0),U0}catch(U0){let L0={error:U0.message||"Failed to load preview"};return O(L0),L0}finally{W(!1)}};I0.current=u_;let z1=R(async()=>{try{let S=await b7("all");return O0(S),S}catch(S){return console.warn("[workspace-explorer] Failed to load workspace index status:",S),null}},[]);V_.current=z1;let I_=R(()=>{V_.current?.()},[]),A_=async()=>{if(!T0.current)return;try{let S=await K6("",1,M0.current),p=lQ(S.root,t0.current,M0.current);if(p===i0.current){A(!1);return}if(i0.current=p,F_.current=S.root,!Z_.current)Z_.current=requestAnimationFrame(()=>{Z_.current=0,L((o)=>Ej(o,F_.current)),A(!1)})}catch(S){w(S.message||"Failed to load workspace"),A(!1)}},J1=async(S)=>{if(!S)return;if(m0.current.has(S))return;m0.current.add(S);try{let p=await K6(S,1,M0.current);L((o)=>Dj(o,S,p.root))}catch(p){w(p.message||"Failed to load workspace")}finally{m0.current.delete(S)}};r0.current=J1;let W_=R(()=>{let S=B;if(!S)return".";let p=d0.current?.get(S);if(p&&p.type==="dir")return p.path;if(S==="."||!S.includes("/"))return".";let o=S.split("/");return o.pop(),o.join("/")||"."},[B]),k_=R((S)=>{let p=S?.closest?.(".workspace-row");if(!p)return null;let o=p.dataset.path,t=p.dataset.type;if(!o)return null;if(t==="dir")return o;if(o.includes("/")){let U0=o.split("/");return U0.pop(),U0.join("/")||"."}return"."},[]),A1=R((S)=>{return k_(S?.target||null)},[k_]),l_=R((S)=>{n0.current=S,E0(S)},[]),i_=R(()=>{let S=o_.current;if(S?.timer)clearTimeout(S.timer);o_.current={path:null,timer:0}},[]),a_=R((S)=>{if(!S||S==="."){i_();return}let p=d0.current?.get(S);if(!p||p.type!=="dir"){i_();return}if(t0.current?.has(S)){i_();return}if(o_.current?.path===S)return;i_();let o=setTimeout(()=>{o_.current={path:null,timer:0},r0.current?.(S),F((t)=>{let U0=new Set(t);return U0.add(S),U0})},600);o_.current={path:S,timer:o}},[i_]),B_=R((S,p)=>{if(D_.current={x:S,y:p},__.current)return;__.current=requestAnimationFrame(()=>{__.current=0;let o=w0.current;if(!o)return;let t=D_.current;o.style.transform=`translate(${t.x+12}px, ${t.y+12}px)`})},[]),x1=R((S)=>{if(!S)return;let o=(d0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!o)return;m({path:S,label:o})},[]),U1=R(()=>{if(m(null),__.current)cancelAnimationFrame(__.current),__.current=0;if(w0.current)w0.current.style.transform="translate(-9999px, -9999px)"},[]),b1=R((S)=>{if(!S)return".";let p=d0.current?.get(S);if(p&&p.type==="dir")return p.path;if(S==="."||!S.includes("/"))return".";let o=S.split("/");return o.pop(),o.join("/")||"."},[]),k1=R(()=>{D(null),k("")},[]),_$=R((S)=>{if(!S)return;let o=(d0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!o||S===".")return;D(S),k(o)},[]),h4=R(async()=>{let S=p0.current;if(!S)return;let p=(H||"").trim();if(!p){k1();return}let o=d0.current?.get(S),t=(o?.name||S.split("/").pop()||S).trim();if(p===t){k1();return}try{let L0=(await l7(S,p))?.path||S,J0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(k1(),w(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:S,newPath:L0,type:o?.type||"file"}})),o?.type==="dir")F((C0)=>{let H0=new Set;for(let a0 of C0)if(a0===S)H0.add(L0);else if(a0.startsWith(`${S}/`))H0.add(`${L0}${a0.slice(S.length)}`);else H0.add(a0);return H0});if(U(L0),o?.type==="dir")O(null),W(!1),I(null);else I0.current?.(L0);r0.current?.(J0),I_()}catch(U0){w(U0?.message||"Failed to rename file")}},[k1,H,I_]),k$=R(async(S)=>{let t=S||".";for(let U0=0;U0<50;U0+=1){let J0=`untitled${U0===0?"":`-${U0}`}.md`;try{let H0=(await h7(t,J0,""))?.path||(t==="."?J0:`${t}/${J0}`);if(t&&t!==".")F((a0)=>new Set([...a0,t]));U(H0),w(null),r0.current?.(t),I0.current?.(H0),I_();return}catch(C0){if(C0?.status===409||C0?.code==="file_exists")continue;w(C0?.message||"Failed to create file");return}}w("Failed to create file (untitled name already in use).")},[]),t_=R((S)=>{if(S?.stopPropagation?.(),Z0)return;let p=b1(B0.current);k$(p)},[Z0,b1,k$]);g(()=>{if(typeof window>"u")return;let S=(p)=>{let o=p?.detail?.updates||[];if(!Array.isArray(o)||o.length===0)return;L((C0)=>{let H0=C0;for(let a0 of o){if(!a0?.root)continue;if(!H0||a0.path==="."||!a0.path)H0=a0.root;else H0=Dj(H0,a0.path,a0.root)}if(H0)i0.current=lQ(H0,t0.current,M0.current);return A(!1),H0});let t=B0.current;if(Boolean(t)&&o.some((C0)=>{let H0=C0?.path||"";if(!H0||H0===".")return!0;return t===H0||t.startsWith(`${H0}/`)||H0.startsWith(`${t}/`)}))v.current.clear();if(I_(),!t||!R_.current)return;let L0=d0.current?.get(t);if(L0&&L0.type==="dir")return;if(o.some((C0)=>{let H0=C0?.path||"";if(!H0||H0===".")return!0;return t===H0||t.startsWith(`${H0}/`)}))I0.current?.(t)};return window.addEventListener("workspace-update",S),()=>window.removeEventListener("workspace-update",S)},[]),z0.current=A_;let m_=u(()=>{if(typeof window>"u")return;let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),p=c0.current??T0.current,o=document.visibilityState!=="hidden"&&(p||S.matches&&T0.current);B6(o,M0.current).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",t,{visible:o,showHidden:M0.current})})}).current,M1=u(0),D1=u(()=>{if(M1.current)clearTimeout(M1.current);M1.current=setTimeout(()=>{M1.current=0,m_()},250)}).current;g(()=>{if(T0.current)z0.current?.(),V_.current?.();D1()},[j,G]),g(()=>{z0.current(),V_.current?.();let S=setInterval(()=>{z0.current(),V_.current?.()},o0);return()=>clearInterval(S)},[o0]),g(()=>{m_();let S=O4("previewHeight",null),p=Number.isFinite(S)?Math.min(Math.max(S,80),600):280;if(q0.current=p,z_.current)z_.current.style.setProperty("--preview-height",`${p}px`);let o=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),t=()=>D1();if(o.addEventListener)o.addEventListener("change",t);else if(o.addListener)o.addListener(t);return document.addEventListener("visibilitychange",t),()=>{if(Z_.current)cancelAnimationFrame(Z_.current),Z_.current=0;if(o.removeEventListener)o.removeEventListener("change",t);else if(o.removeListener)o.removeListener(t);if(document.removeEventListener("visibilitychange",t),M1.current)clearTimeout(M1.current),M1.current=0;B6(!1,M0.current).catch((U0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",U0,{showHidden:M0.current})})}},[]);let $1=Y0(()=>oQ(Q,K,J),[Q,K,J]),M$=Y0(()=>new Map($1.map((S)=>[S.node.path,S.node])),[$1]),y$=Y0(()=>cQ(G_),[G_]);d0.current=M$;let y_=(B?d0.current.get(B):null)?.type==="dir";g(()=>{if(!B||!y_){j0(null),n.current=null,s.current=null;return}if(v0<=0){j0({loading:!1,error:null,payload:null,disabled:!0}),n.current=null,s.current=null;return}let S=B,p=`${J?"hidden":"visible"}:${v0}:${B}`,o=v.current,t=o.get(p);if(t?.root){o.delete(p),o.set(p,t);let J0=rQ(t.root,Boolean(t.truncated),l0);if(J0)n.current=J0,s.current=B,j0({loading:!1,error:null,payload:J0,disabled:!1});return}let U0=n.current,L0=s.current;j0({loading:!0,error:null,payload:L0===B?U0:null,disabled:!1}),K6(B,v0,J).then((J0)=>{if(B0.current!==S)return;let C0={root:J0?.root,truncated:Boolean(J0?.truncated)};o.delete(p),o.set(p,C0);while(o.size>aA){let a0=o.keys().next().value;if(!a0)break;o.delete(a0)}let H0=rQ(C0.root,C0.truncated,l0);n.current=H0,s.current=B,j0({loading:!1,error:null,payload:H0,disabled:!1})}).catch((J0)=>{if(B0.current!==S)return;j0({loading:!1,error:J0?.message||"Failed to load folder size chart",payload:L0===B?U0:null,disabled:!1})})},[B,y_,J,l0,v0]);let q1=Boolean(z&&z.kind==="text"&&!y_&&(!z.size||z.size<=262144)),T$=q1?"Open in editor":z?.size>262144?"File too large to edit":"File is not editable",l4=Boolean(B&&!y_&&sA(B)),j$=Boolean(B&&B!=="."),p4=Boolean(B&&!y_),r4=Boolean(B&&!y_),w$=B&&y_?R2(B,J):null,x$=jL(Q0),v1=eA(Q0),m1=Q0?.state||"never_indexed",n4=m1!=="ready",Q1=R(()=>f0(!1),[]),S_=R(async(S)=>{Q1();try{await S?.()}catch(p){console.warn("[workspace-explorer] Header menu action failed:",p)}},[Q1]),d4=R(async(S)=>{S?.stopPropagation?.(),X0(!0),O0((p)=>({scope:"all",last_indexed_at:p?.last_indexed_at||null,last_error:null,indexed_file_count:p?.indexed_file_count||0,roots:p?.roots||[],updated_at:p?.updated_at||null,state:"indexing"}));try{let p=await v7("all");O0(p),w(null),i0.current="",z0.current?.()}catch(p){let o=p?.message||"Failed to reindex workspace";O0((t)=>({scope:"all",last_indexed_at:t?.last_indexed_at||null,last_error:o,indexed_file_count:t?.indexed_file_count||0,roots:t?.roots||[],updated_at:t?.updated_at||null,state:"failed"})),w(o)}finally{X0(!1)}},[]);g(()=>{let S=G0.current;if(F0.current)F0.current.dispose(),F0.current=null;if(!S)return;if(S.innerHTML="",!B||y_||!z||z.error)return;let p={path:B,content:typeof z.text==="string"?z.text:void 0,mtime:z.mtime,size:z.size,preview:z,mode:"view"},o=Y_.resolve(p)||Y_.get("workspace-preview-default");if(!o)return;let t=o.mount(S,p);return F0.current=t,()=>{if(F0.current===t)t.dispose(),F0.current=null;S.innerHTML=""}},[B,y_,z]);let I1=(S)=>{let p=S?.target;if(p instanceof Element)return p;return p?.parentElement||null},I$=(S)=>{return Boolean(S?.closest?.(".workspace-node-icon, .workspace-label-text"))},o4=(S)=>{if(!S)return!1;if(S.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(S.isContentEditable)},b5=u((S)=>{let p=I1(S),o=p?.closest?.("[data-path]");if(!o)return;let t=o.dataset.path;if(!t||t===".")return;let U0=Boolean(p?.closest?.("button"))||Boolean(p?.closest?.("a"))||Boolean(p?.closest?.("input")),L0=Boolean(p?.closest?.(".workspace-caret"));if(U0||L0)return;if(p0.current===t)return;_$(t)}).current,v5=u((S)=>{if(f_.current){f_.current=!1;return}let p=I1(S),o=p?.closest?.("[data-path]");if(Q_.current?.focus?.(),!o)return;let t=o.dataset.path,U0=o.dataset.type,L0=Boolean(p?.closest?.(".workspace-caret")),J0=Boolean(p?.closest?.("button"))||Boolean(p?.closest?.("a"))||Boolean(p?.closest?.("input")),C0=B0.current===t,H0=p0.current;if(H0){if(H0===t)return;k1()}if(U0==="dir"){if(j_.current=null,U(t),O(null),I(null),W(!1),!t0.current.has(t))r0.current?.(t);if(C0&&!L0)return;F((p_)=>{let j1=new Set(p_);if(j1.has(t))j1.delete(t);else j1.add(t);return j1})}else{j_.current=null,U(t);let a0=d0.current.get(t);if(a0)H_.current?.(a0.path,a0);if(!J0&&!L0)I0.current?.(t)}}).current,Y4=u(()=>{i0.current="",z0.current(),V_.current?.(),Array.from(t0.current||[]).filter((p)=>p&&p!==".").forEach((p)=>r0.current?.(p))}).current,C$=u(()=>{j_.current=null,U(null),O(null),I(null),W(!1)}).current,i4=u(()=>{P((S)=>{let p=!S;if(typeof window<"u")q_("workspaceShowHidden",String(p));return M0.current=p,B6(!0,p).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",t,{showHidden:p})}),i0.current="",z0.current?.(),Array.from(t0.current||[]).filter((t)=>t&&t!==".").forEach((t)=>r0.current?.(t)),p})}).current,s4=u((S)=>{if(I1(S)?.closest?.("[data-path]"))return;C$()}).current,L1=R(async(S)=>{if(!S)return;let p=S.split("/").pop()||S;if(!window.confirm(`Delete "${p}"? This cannot be undone.`))return;try{await r7(S);let t=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(B0.current===S)C$();r0.current?.(t),w(null),I_()}catch(t){O((U0)=>({...U0||{},error:t.message||"Failed to delete file"}))}},[C$]),P$=R((S)=>{let p=Q_.current;if(!p||!S||typeof CSS>"u"||typeof CSS.escape!=="function")return;p.querySelector(`[data-path="${CSS.escape(S)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),V4=R((S)=>{let p=I1(S);if(p0.current||o4(p))return;let o=$1;if(!o||o.length===0)return;let t=B?o.findIndex((U0)=>U0.node.path===B):-1;if(S.key==="ArrowDown"){S.preventDefault();let U0=Math.min(t+1,o.length-1),L0=o[U0];if(!L0)return;if(U(L0.node.path),L0.node.type!=="dir")H_.current?.(L0.node.path,L0.node),I0.current?.(L0.node.path);else O(null),W(!1),I(null);P$(L0.node.path);return}if(S.key==="ArrowUp"){S.preventDefault();let U0=t<=0?0:t-1,L0=o[U0];if(!L0)return;if(U(L0.node.path),L0.node.type!=="dir")H_.current?.(L0.node.path,L0.node),I0.current?.(L0.node.path);else O(null),W(!1),I(null);P$(L0.node.path);return}if(S.key==="ArrowRight"&&t>=0){let U0=o[t];if(U0?.node?.type==="dir"&&!K.has(U0.node.path))S.preventDefault(),r0.current?.(U0.node.path),F((L0)=>new Set([...L0,U0.node.path]));return}if(S.key==="ArrowLeft"&&t>=0){let U0=o[t];if(U0?.node?.type==="dir"&&K.has(U0.node.path))S.preventDefault(),F((L0)=>{let J0=new Set(L0);return J0.delete(U0.node.path),J0});return}if(S.key==="Enter"&&t>=0){S.preventDefault();let U0=o[t];if(!U0)return;let L0=U0.node.path;if(U0.node.type==="dir"){if(!t0.current.has(L0))r0.current?.(L0);F((C0)=>{let H0=new Set(C0);if(H0.has(L0))H0.delete(L0);else H0.add(L0);return H0}),O(null),I(null),W(!1)}else H_.current?.(L0,U0.node),I0.current?.(L0);return}if((S.key==="Delete"||S.key==="Backspace")&&t>=0){let U0=o[t];if(!U0||U0.node.type==="dir")return;S.preventDefault(),L1(U0.node.path);return}if(S.key==="Escape")S.preventDefault(),C$()},[C$,L1,K,$1,P$,B]),q4=R((S)=>{let p=jk(S,p0.current);if(!p)return;P_.current={path:p.dragPath,dragging:!1,startX:p.startX,startY:p.startY}},[]),C1=R(()=>{let S=P_.current;if(S?.dragging&&S.path){let p=n0.current||W_(),o=d.current;if(typeof o==="function")o(S.path,p)}P_.current={path:null,dragging:!1,startX:0,startY:0},S0.current=0,b(!1),r(null),l_(null),i_(),U1()},[W_,U1,l_,i_]),H1=R((S)=>{let p=P_.current,o=S?.touches?.[0];if(!o||!p?.path)return;let t=Math.abs(o.clientX-p.startX),U0=Math.abs(o.clientY-p.startY),L0=t>8||U0>8;if(!p.dragging&&L0)p.dragging=!0,b(!0),r("move"),x1(p.path);if(p.dragging){S.preventDefault(),B_(o.clientX,o.clientY);let J0=document.elementFromPoint(o.clientX,o.clientY),C0=k_(J0)||W_();if(n0.current!==C0)l_(C0);a_(C0)}},[k_,W_,x1,B_,l_,a_]),m5=u((S)=>{S.preventDefault();let p=z_.current;if(!p)return;let o=S.clientY,t=q0.current||280,U0=S.currentTarget;U0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let L0=o,J0=(H0)=>{L0=H0.clientY;let a0=p.clientHeight-80,p_=Math.min(Math.max(t-(H0.clientY-o),80),a0);p.style.setProperty("--preview-height",`${p_}px`),q0.current=p_},C0=()=>{let H0=p.clientHeight-80,a0=Math.min(Math.max(t-(L0-o),80),H0);q0.current=a0,U0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q_("previewHeight",String(Math.round(a0))),document.removeEventListener("mousemove",J0),document.removeEventListener("mouseup",C0)};document.addEventListener("mousemove",J0),document.addEventListener("mouseup",C0)}).current,Q4=u((S)=>{S.preventDefault();let p=z_.current;if(!p)return;let o=S.touches[0];if(!o)return;let t=o.clientY,U0=q0.current||280,L0=S.currentTarget;L0.classList.add("dragging"),document.body.style.userSelect="none";let J0=(H0)=>{let a0=H0.touches[0];if(!a0)return;H0.preventDefault();let p_=p.clientHeight-80,j1=Math.min(Math.max(U0-(a0.clientY-t),80),p_);p.style.setProperty("--preview-height",`${j1}px`),q0.current=j1},C0=()=>{L0.classList.remove("dragging"),document.body.style.userSelect="",q_("previewHeight",String(Math.round(q0.current||U0))),document.removeEventListener("touchmove",J0),document.removeEventListener("touchend",C0),document.removeEventListener("touchcancel",C0)};document.addEventListener("touchmove",J0,{passive:!1}),document.addEventListener("touchend",C0),document.addEventListener("touchcancel",C0)}).current,G$=R((S=B)=>{if(!S)return;nQ(f2(S))},[B]),e_=async()=>{if(!B||y_)return;await L1(B)},f$=(S)=>{return Array.from(S?.dataTransfer?.types||[]).includes("Files")},a4=R((S)=>{if(!f$(S))return;if(S.preventDefault(),S0.current+=1,!e0.current)b(!0);r("upload");let p=A1(S)||W_();l_(p),a_(p)},[W_,A1,l_,a_]),Z$=R((S)=>{if(!f$(S))return;if(S.preventDefault(),S.dataTransfer)S.dataTransfer.dropEffect="copy";if(!e0.current)b(!0);if(x0.current!=="upload")r("upload");let p=A1(S)||W_();if(n0.current!==p)l_(p);a_(p)},[W_,A1,l_,a_]),h6=R((S)=>{if(!f$(S))return;if(S.preventDefault(),S0.current=Math.max(0,S0.current-1),S0.current===0)b(!1),r(null),l_(null),i_()},[l_,i_]),b_=R(async(S,p=".")=>{let o=Array.from(S||[]);if(o.length===0)return;let t=p&&p!==""?p:".",U0=t!=="."?t:"workspace root";F1(),$0(!0),N0({current:0,total:o.length,name:"",percent:0,done:!1,error:null});try{let L0=null;for(let J0=0;J0<o.length;J0++){let C0=o[J0],H0=C0?.name||`file ${J0+1}`;N0((p_)=>({...p_,current:J0+1,name:H0,percent:0}));let a0=(p_)=>N0((j1)=>({...j1,percent:p_.percent}));try{L0=await P2(C0,t,{onProgress:a0})}catch(p_){let j1=p_?.status,Q$=p_?.code;if(j1===409||Q$==="file_exists"){if(!window.confirm(`"${H0}" already exists in ${U0}. Overwrite?`))continue;L0=await P2(C0,t,{overwrite:!0,onProgress:a0})}else throw p_}}if(L0?.path)j_.current=L0.path,U(L0.path),I0.current?.(L0.path);r0.current?.(t),I_(),N0((J0)=>({...J0,done:!0})),F1(),x_.current=window.setTimeout(()=>{x_.current=0,N0(null)},1500)}catch(L0){w(L0.message||"Failed to upload file"),N0((J0)=>J0?{...J0,error:L0.message||"Upload failed"}:null),F1(),x_.current=window.setTimeout(()=>{x_.current=0,N0(null)},4000)}finally{$0(!1)}},[F1]),e8=R(async(S,p)=>{if(!S)return;let o=d0.current?.get(S);if(!o)return;let t=p&&p!==""?p:".",U0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(t===U0)return;try{let J0=(await p7(S,t))?.path||S;if(o.type==="dir")F((C0)=>{let H0=new Set;for(let a0 of C0)if(a0===S)H0.add(J0);else if(a0.startsWith(`${S}/`))H0.add(`${J0}${a0.slice(S.length)}`);else H0.add(a0);return H0});if(U(J0),o.type==="dir")O(null),W(!1),I(null);else I0.current?.(J0);r0.current?.(U0),r0.current?.(t),I_()}catch(L0){w(L0?.message||"Failed to move entry")}},[]);d.current=e8;let _3=R(async(S)=>{if(!f$(S))return;S.preventDefault(),S0.current=0,b(!1),r(null),E0(null),i_();let p=Array.from(S?.dataTransfer?.files||[]);if(p.length===0)return;let o=n0.current||A1(S)||W_();await b_(p,o)},[W_,A1,b_]),P1=R((S)=>{if(S?.stopPropagation?.(),Z0)return;let p=S?.currentTarget?.dataset?.uploadTarget||".";J_.current=p,N_.current?.click()},[Z0]),L4=R((S)=>{S?.preventDefault?.(),S?.stopPropagation?.();let p=S?.currentTarget?.dataset?.folderHintTarget||B0.current||".";if(!p)return;D0.current?.(p,d0.current.get(p))},[]),R$=R(()=>{if(Z0)return;let S=B0.current,p=S?d0.current?.get(S):null;J_.current=p?.type==="dir"?p.path:".",N_.current?.click()},[Z0]),S$=R(()=>{S_(()=>t_(null))},[S_,t_]),g$=R(()=>{S_(()=>R$())},[S_,R$]),t4=R(()=>{S_(()=>Y4())},[S_,Y4]),X$=R(()=>{S_(()=>i4())},[S_,i4]),Y$=R(()=>{if(!B||!l4)return;S_(()=>g0.current?.(B,z))},[S_,B,l4,z]),K4=R(()=>{if(!B||!q1)return;S_(()=>g0.current?.(B,z))},[S_,B,q1,z]),B4=R(()=>{if(!B||B===".")return;S_(()=>_$(B))},[S_,B,_$]),V$=R(()=>{if(!B||y_)return;S_(()=>e_())},[S_,B,y_,e_]),l6=R(()=>{if(!B||y_)return;S_(()=>G$())},[S_,B,y_,G$]),q$=R(()=>{if(!w$)return;Q1(),nQ(w$)},[Q1,w$]),p6=R(()=>{Q1(),X?.()},[Q1,X]),c5=R(()=>{Q1(),Y?.()},[Q1,Y]),h5=R(()=>{Q1(),V?.()},[Q1,V]),l5=R((S)=>{if(!S||S.button!==0)return;let p=S.currentTarget;if(!p||!p.dataset)return;let o=p.dataset.path;if(!o||o===".")return;if(p0.current===o)return;let t=I1(S);if(t?.closest?.("button, a, input, .workspace-caret"))return;if(!I$(t))return;S.preventDefault(),E_.current={path:o,dragging:!1,startX:S.clientX,startY:S.clientY};let U0=(J0)=>{let C0=E_.current;if(!C0?.path)return;let H0=Math.abs(J0.clientX-C0.startX),a0=Math.abs(J0.clientY-C0.startY),p_=H0>4||a0>4;if(!C0.dragging&&p_)C0.dragging=!0,f_.current=!0,b(!0),r("move"),x1(C0.path),B_(J0.clientX,J0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(C0.dragging){J0.preventDefault(),B_(J0.clientX,J0.clientY);let j1=document.elementFromPoint(J0.clientX,J0.clientY),Q$=k_(j1)||W_();if(n0.current!==Q$)l_(Q$);a_(Q$)}},L0=()=>{document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",L0);let J0=E_.current;if(J0?.dragging&&J0.path){let C0=n0.current||W_(),H0=d.current;if(typeof H0==="function")H0(J0.path,C0)}E_.current={path:null,dragging:!1,startX:0,startY:0},S0.current=0,b(!1),r(null),l_(null),i_(),U1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{f_.current=!1},0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",L0)},[k_,W_,x1,B_,U1,l_,a_,i_]),$3=R(async(S)=>{let p=Array.from(S?.target?.files||[]);if(p.length===0)return;let o=J_.current||".";if(await b_(p,o),J_.current=".",S?.target)S.target.value=""},[b_]);return N`
        <aside
            class=${`workspace-sidebar${f?" workspace-drop-active":""}`}
            data-workspace-scale=${G_}
            ref=${z_}
            onDragEnter=${a4}
            onDragOver=${Z$}
            onDragLeave=${h6}
            onDrop=${_3}
        >
            <input type="file" multiple style="display:none" ref=${N_} onChange=${$3} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${A0}
                            class=${`workspace-menu-button${s0?" active":""}`}
                            onClick=${(S)=>{S.stopPropagation(),f0((p)=>!p)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${s0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${s0&&N`
                            <div class="workspace-menu-dropdown" ref=${y0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${S$} disabled=${Z0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${g$} disabled=${Z0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${t4}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>S_(()=>d4())} disabled=${a}>
                                    ${a?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${J?" active":""}`} role="menuitem" onClick=${X$}>
                                    ${J?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(X||Y||V)&&N`<div class="workspace-menu-separator"></div>`}
                                ${X&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${p6}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${V&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${h5}>
                                        ${q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${B&&N`<div class="workspace-menu-separator"></div>`}
                                ${l4&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y$}>Open in tab</button>
                                `}
                                ${B&&!y_&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${K4} disabled=${!q1}>Open in editor</button>
                                `}
                                ${j$&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B4}>Rename selected</button>
                                `}
                                ${r4&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l6}>Download selected file</button>
                                `}
                                ${w$&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q$}>Download selected folder (zip)</button>
                                `}
                                ${p4&&N`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${V$}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{f0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${t_} title="New file" disabled=${Z0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${Y4} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${n4&&N`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${m1}`} title=${v1}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${x$}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${s4}>
                ${V0&&N`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${V0.error?N`<span class="workspace-upload-strip-error">${V0.error}</span>`:V0.done?N`<span>Done</span>`:N`<span>${V0.total>1?`Uploading ${V0.current}/${V0.total}: ${V0.name}`:`Uploading ${V0.name}`}${V0.percent>0?` (${V0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!V0.done&&!V0.error&&N`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${V0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${x&&N`<div class="workspace-loading">Loading…</div>`}
                ${y&&N`<div class="workspace-error">${y}</div>`}
                ${Q&&N`
                    <div
                        class="workspace-tree-list"
                        ref=${Q_}
                        tabIndex="0"
                        onClick=${v5}
                        onDblClick=${b5}
                        onKeyDown=${V4}
                        onTouchStart=${q4}
                        onTouchEnd=${C1}
                        onTouchMove=${H1}
                        onTouchCancel=${C1}
                    >
                        ${$1.map(({node:S,depth:p})=>{let o=S.type==="dir",t=S.path===B,U0=S.path===E,L0=o&&K.has(S.path),J0=_0&&S.path===_0,C0=Array.isArray(S.children)&&S.children.length>0?S.children.length:Number(S.child_count)||0;return N`
                                <div
                                    key=${S.path}
                                    class=${`workspace-row${t?" selected":""}${J0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+p*y$.indentPx}px`}}
                                    data-path=${S.path}
                                    data-type=${S.type}
                                    onMouseDown=${l5}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${o?s1(L0?"down":"right"):null}
                                    </span>
                                    <svg class=${`workspace-node-icon${o?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${o?N`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:N`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${U0?N`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${U_}
                                                value=${H}
                                                onInput=${(H0)=>k(H0?.target?.value||"")}
                                                onKeyDown=${(H0)=>{if(H0.stopPropagation(),H0.key==="Enter")H0.preventDefault(),h4();else if(H0.key==="Escape")H0.preventDefault(),k1()}}
                                                onBlur=${k1}
                                                onClick=${(H0)=>H0.stopPropagation()}
                                            />
                                        `:N`<span class="workspace-label"><span class="workspace-label-text">${S.name}</span></span>`}
                                    ${o&&!L0&&C0>0&&N`
                                        <span class="workspace-count">${C0}</span>
                                    `}
                                    ${o&&N`
                                        <button
                                            class="workspace-folder-upload"
                                            data-folder-hint-target=${S.path}
                                            title="Add folder hint to compose"
                                            aria-label=${`Add folder hint for ${S.path}`}
                                            onClick=${L4}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                                <path d="M12 11v6"/>
                                                <path d="M9 14h6"/>
                                            </svg>
                                        </button>
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${S.path}
                                            title="Upload files to this folder"
                                            onClick=${P1}
                                            disabled=${Z0}
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
            ${B&&N`
                <div class="workspace-preview-splitter-h" onMouseDown=${m5} onTouchStart=${Q4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${B}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${t_} title="New file" disabled=${Z0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!y_&&N`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>q1&&g0.current?.(B,z)}
                                    title=${T$}
                                    disabled=${!q1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${e_}
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
                            ${y_?N`
                                    <button
                                        class="workspace-download"
                                        data-folder-hint-target=${B}
                                        onClick=${L4}
                                        title="Add folder hint to compose"
                                        aria-label=${`Add folder hint for ${B}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                            <path d="M12 11v6"/>
                                            <path d="M9 14h6"/>
                                        </svg>
                                    </button>
                                    <button class="workspace-download" onClick=${R$}
                                        title="Upload files to this folder" disabled=${Z0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${R2(B,J)} download
                                        title="Download folder as zip" onClick=${(S)=>S.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:N`<a class="workspace-download" href=${f2(B)} download
                                        title="Download" onClick=${(S)=>S.stopPropagation()}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </a>`}
                        </div>
                    </div>
                    ${M&&N`<div class="workspace-loading">Loading preview…</div>`}
                    ${z?.error&&N`<div class="workspace-error">${z.error}</div>`}
                    ${y_&&N`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${h?.disabled&&N`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${h?.loading&&N`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${h?.error&&N`<div class="workspace-error">${h.error}</div>`}
                        ${h?.payload&&h.payload.segments?.length>0&&N`
                            <${tA} payload=${h.payload} />
                        `}
                        ${h?.payload&&(!h.payload.segments||h.payload.segments.length===0)&&N`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${z&&!z.error&&!y_&&N`
                        <div class="workspace-preview-body" ref=${G0}></div>
                    `}
                </div>
            `}
            ${e&&N`
                <div class="workspace-drag-ghost" ref=${w0}>${e.label}</div>
            `}
        </aside>
    `}k0();var Gk=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function k8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function ZL(_,$,j){let G=k8(_,$,j);return G!=null&&Gk.has(G)}function XL(_,$,j){return k8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function YL(_,$,j){return k8(_,$,j)==="editor"}var Zk=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,Xk=/\.(csv|tsv)$/i,Yk=/\.pdf$/i,Vk=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function qk(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=Jq(j,{hasPopOutTab:$});if(G)return G;if(Zk.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(Xk.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(Yk.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(Vk.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function VL({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:V,onToggleDiff:q,onEditSource:Q,previewTabs:L,diffTabs:K,paneOverrides:F,detachedTabs:B,onReattachTab:U,onToggleDock:E,dockVisible:D,onToggleZen:H,zenMode:k,onPopOutTab:z}){let[O,I]=C(null),x=u(null);g(()=>{if(!O)return;let m=(_0)=>{if(_0.type==="keydown"&&_0.key!=="Escape")return;I(null)};return document.addEventListener("click",m),document.addEventListener("keydown",m),()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",m)}},[O]),g(()=>{let m=(_0)=>{if(_0.ctrlKey&&_0.key==="Tab"){if(_0.preventDefault(),!_.length)return;let E0=_.findIndex((Z0)=>Z0.id===$);if(_0.shiftKey){let Z0=_[(E0-1+_.length)%_.length];j?.(Z0.id)}else{let Z0=_[(E0+1)%_.length];j?.(Z0.id)}return}if((_0.ctrlKey||_0.metaKey)&&_0.key==="w"){let E0=document.querySelector(".editor-pane");if(E0&&E0.contains(document.activeElement)){if(_0.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[_,$,j,G]);let A=R((m,_0)=>{if(m.button===0){j?.(_0);return}if(m.button===1)m.preventDefault(),G?.(_0)},[j,G]),M=R((m,_0)=>{if(m.defaultPrevented)return;if(m.button===0)j?.(_0)},[j]),W=R((m,_0)=>{m.preventDefault(),I({id:_0,x:m.clientX,y:m.clientY})},[]),y=R((m)=>{m.stopPropagation()},[]),w=R((m,_0)=>{m.preventDefault(),m.stopPropagation(),G?.(_0)},[G]);g(()=>{if(!$||!x.current)return;let m=x.current.querySelector(".tab-item.active");if(m)m.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let J=R((m)=>{if(!(F instanceof Map))return null;return F.get(m)||null},[F]),P=Y0(()=>_.find((m)=>m.id===O?.id)||null,[O?.id,_]),f=Y0(()=>{let m=O?.id;if(!m)return!1;return ZL(m,J(m),(_0)=>Y_.resolve(_0))},[O?.id,J]),b=Y0(()=>{let m=O?.id;if(!m)return"Edit Source";return XL(m,J(m),(_0)=>Y_.resolve(_0))},[O?.id,J]),c=Y0(()=>{let m=O?.id;if(!m||!(B instanceof Map))return!1;return B.has(m)},[O?.id,B]),r=Y0(()=>{let m=O?.id;if(!m||!(K instanceof Set))return!1;return K.has(m)},[O?.id,K]),e=Y0(()=>{let m=O?.id;if(!m)return!1;let _0=_.find((Z0)=>Z0.id===m)||null;if(!_0)return!1;return YL(m,J(m),(Z0)=>Y_.resolve(Z0))&&Boolean(_0.dirty||r)},[O?.id,r,J,_]);if(!_.length)return null;return N`
        <div class="tab-strip" ref=${x} role="tablist">
            ${_.map((m)=>N`
                <div
                    key=${m.id}
                    class=${`tab-item${m.id===$?" active":""}${m.dirty?" dirty":""}${m.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${m.id===$}
                    title=${m.path}
                    onMouseDown=${(_0)=>A(_0,m.id)}
                    onClick=${(_0)=>M(_0,m.id)}
                    onContextMenu=${(_0)=>W(_0,m.id)}
                >
                    ${m.pinned&&N`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${m.label}</span>
                    ${B instanceof Map&&B.has(m.id)&&N`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${y}
                        onMouseDown=${y}
                        onClick=${(_0)=>w(_0,m.id)}
                        title=${m.dirty?"Unsaved changes":"Close"}
                        aria-label=${m.dirty?"Unsaved changes":`Close ${m.label}`}
                    >
                        ${m.dirty?N`<span class="tab-dirty-dot" aria-hidden="true"></span>`:N`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${E&&N`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${D?" active":""}`}
                    onClick=${E}
                    title=${`${D?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${D?"Hide":"Show"} terminal`}
                    aria-pressed=${D?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${H&&N`
                <button
                    class=${`tab-strip-zen-toggle${k?" active":""}`}
                    onClick=${H}
                    title=${`${k?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${k?"Exit":"Enter"} zen mode`}
                    aria-pressed=${k?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${k?N`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:N`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${O&&N`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{G?.(O.id),I(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),I(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),I(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(O.id),I(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${f&&Q&&N`
                    <button onClick=${()=>{Q(O.id),I(null)}}>${b}</button>
                `}
                ${c&&U&&N`
                    <button onClick=${()=>{U(O.id),I(null)}}>Reattach</button>
                `}
                ${z&&!c&&N`
                    <button onClick=${()=>{let m=_.find((_0)=>_0.id===O.id);z(O.id,m?.label),I(null)}}>Open in Window</button>
                `}
                ${e&&q&&N`
                    <hr />
                    <button onClick=${()=>{j?.(O.id),q(O.id),I(null)}}>${r?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${V&&/\.(md|mdx|markdown)$/i.test(O.id)&&N`
                    <hr />
                    <button onClick=${()=>{V(O.id),I(null)}}>
                        ${L?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let m=qk(O.id,{hasPopOutTab:typeof z==="function"});if(!m)return null;return N`
                        <hr />
                        <button onClick=${()=>{window.open(m,"_blank","noopener"),I(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}k0();M_();l2();function g4(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function M8(_,$=30){return g4(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function w5(_,$=56,j=16,G={}){let Z=g4(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let V=(j/2).toFixed(2);return`M 0 ${V} L ${$} ${V}`}if(Z.length===1){let V=(Z[0]-X)/(Y-X),q=(j-V*j).toFixed(2);return`M 0 ${q} L ${$} ${q}`}return Z.map((V,q)=>{let Q=q/(Z.length-1||1)*$,L=(V-X)/(Y-X),K=j-L*j;return`${q===0?"M":"L"} ${Q.toFixed(2)} ${K.toFixed(2)}`}).join(" ")}function $4(_){return`${Math.round(Number(_)||0)}%`}function Oj(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function Qk(_){let $=[`CPU ${$4(_?.cpu_percent)}`,`RAM ${$4(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${Oj(_?.buffer_cache_bytes)}`);if(QL(_))$.push(`VRAM ${$4(_?.vram_percent)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${$4(_?.swap_percent)}`);return $.join(" • ")}function qL(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function Lk(_){return qL(_)>0&&g4(_?.process_rss_series_bytes).length>0}function QL(_){return _?.vram_percent!==null&&_?.vram_percent!==void 0&&Number.isFinite(Number(_?.vram_percent))&&Number(_?.vram_total_bytes)>0&&Number(_?.vram_used_bytes)>=0&&g4(_?.vram_series).length>0}function Kk(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function LL({mode:_="overlay"}){let[$,j]=C(()=>z6(!1)),[G,Z]=C(()=>DY(!1)),[X,Y]=C(()=>Kk()),[V,q]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],vram_percent:null,vram_series:[],vram_total_bytes:0,vram_used_bytes:0,gpu_provider:null,buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[Q,L]=C(!1);g(()=>{let w=(P)=>{j(Boolean(P?.detail?.enabled))},J=(P)=>{Z(Boolean(P?.detail?.collapsed))};return window.addEventListener(C4,w),window.addEventListener(h2,J),()=>{window.removeEventListener(C4,w),window.removeEventListener(h2,J)}},[]),g(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let w=window.matchMedia("(max-width: 900px)"),J=()=>Y(Boolean(w.matches));if(J(),typeof w.addEventListener==="function")return w.addEventListener("change",J),()=>w.removeEventListener("change",J);return w.addListener(J),()=>w.removeListener(J)},[]);let F=_==="overlay";g(()=>{if(!$||!F)return;let w=!1,J=0,P=async()=>{L((f)=>f||V.cpu_series.length>0?f:!0);try{let f=await U7();if(w)return;q({cpu_percent:Number(f?.cpu_percent)||0,ram_percent:Number(f?.ram_percent)||0,swap_percent:Number.isFinite(Number(f?.swap_percent))?Number(f?.swap_percent):null,vram_percent:Number.isFinite(Number(f?.vram_percent))?Number(f?.vram_percent):null,cpu_series:M8(f?.cpu_series),ram_series:M8(f?.ram_series),swap_series:M8(f?.swap_series),vram_series:M8(f?.vram_series),vram_total_bytes:Number(f?.vram_total_bytes)||0,vram_used_bytes:Number(f?.vram_used_bytes)||0,gpu_provider:typeof f?.gpu_provider==="string"&&f.gpu_provider.trim()?f.gpu_provider.trim():null,buffer_cache_bytes:Number.isFinite(Number(f?.buffer_cache_bytes))?Number(f?.buffer_cache_bytes):null,buffer_cache_series_bytes:g4(f?.buffer_cache_series_bytes),process_rss_series_bytes:g4(f?.process_rss_series_bytes),process_memory:{rss_bytes:Number(f?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(f?.process_memory?.vm_rss_bytes))?Number(f?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(f?.swap_total_bytes)||0,swap_used_bytes:Number(f?.swap_used_bytes)||0,sample_interval_ms:Number(f?.sample_interval_ms)||2000,platform:String(f?.platform||"")})}catch{if(w)return}finally{if(!w)L(!1)}};return P(),J=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;P()},Math.max(1000,Number(V.sample_interval_ms)||2000)),()=>{if(w=!0,J)window.clearInterval(J)}},[$,F]);let B=Y0(()=>w5(V.cpu_series,56,16,{min:0,max:100}),[V.cpu_series]),U=Y0(()=>w5(V.ram_series,56,16,{min:0,max:100}),[V.ram_series]),E=Y0(()=>w5(V.swap_series,56,16,{min:0,max:100}),[V.swap_series]),D=Y0(()=>w5(V.vram_series,56,16,{min:0,max:100}),[V.vram_series]),H=Y0(()=>w5(V.buffer_cache_series_bytes),[V.buffer_cache_series_bytes]),k=Y0(()=>w5(V.process_rss_series_bytes),[V.process_rss_series_bytes]),z=Number(V.buffer_cache_bytes)>0&&g4(V.buffer_cache_series_bytes).length>0,O=Number.isFinite(Number(V.swap_percent))&&V.swap_total_bytes>0,I=QL(V),x=qL(V),A=Lk(V),M=Y0(()=>Qk(V),[V]);if(!$||!F)return null;let W=G?"Show system meters":Q?"Updating system meters… Click to collapse.":"System meters — click to collapse.",y=(w)=>{w?.stopPropagation?.();let J=!G;Z(J),q9(J)};return N`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${W}
                aria-label=${W}
                aria-expanded=${G?"false":"true"}
                onClick=${y}
            >
                ${G?N`<span class="system-meters-collapse-tab" aria-hidden="true">${s1("left")}</span>`:X?N`<span class="system-meters-compact-summary">${M}</span>`:N`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${B}></path>
                                </svg>
                                <span class="system-meters-value">${$4(V.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${$4(V.ram_percent)}</span>
                            </div>
                            ${A&&N`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${k}></path>
                                    </svg>
                                    <span class="system-meters-value">${Oj(x)}</span>
                                </div>
                            `}
                            ${I&&N`
                                <div class="system-meters-row vram" title=${V.gpu_provider?`GPU telemetry: ${V.gpu_provider}`:"GPU memory telemetry"}>
                                    <span class="system-meters-label">VRAM</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${$4(V.vram_percent)}</span>
                                </div>
                            `}
                            ${z&&N`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${H}></path>
                                    </svg>
                                    <span class="system-meters-value">${Oj(V.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${O&&N`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${$4(V.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function Bk(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function Nk(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function Fk(_){let{id:$,scrollToBottom:j,getElementById:G=(Q)=>document.getElementById(Q),scheduleRaf:Z=(Q)=>requestAnimationFrame(Q),scheduleTimeout:X=(Q,L)=>{setTimeout(Q,L)},maxAttempts:Y=12}=_,V=(Q)=>{Q.scrollIntoView({behavior:"smooth",block:"center"}),Q.classList.add("post-highlight"),X(()=>Q.classList.remove("post-highlight"),2000)},q=(Q)=>{let L=G(`post-${$}`);if(L){V(L);return}if(Q<=0){j?.();return}Z(()=>{X(()=>q(Q-1),40)})};q(Y)}function Uk(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(q)=>Fk({id:q,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let V=Nk($);if(V){Z(V);return}G()}function KL(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:V,handleRenameCurrentBranch:q,renameBranchNameDraft:Q,renameBranchNameInputRef:L,setRenameBranchNameDraft:K,renameBranchDraftState:F,isRenamingBranch:B,addFileRef:U,addFolderRef:E,openEditor:D,openTerminalTab:H,openVncTab:k,hasDockPanes:z,toggleDock:O,dockVisible:I,handleSplitterMouseDown:x,handleSplitterTouchStart:A,showEditorPaneContainer:M,tabStripTabs:W,tabStripActiveId:y,handleTabActivate:w,handleTabClose:J,handleTabCloseOthers:P,handleTabCloseAll:f,handleTabTogglePin:b,handleTabTogglePreview:c,handleTabToggleDiff:r,handleTabEditSource:e,handleReattachPane:m,previewTabs:_0,diffTabs:E0,tabPaneOverrides:Z0,toggleZenMode:$0,handlePopOutPane:V0,isWebAppMode:N0,editorContainerRef:h,editorInstanceRef:j0,detachedTabs:Q0,activeDetachedTab:O0,detachedDockPane:a,handleDockSplitterMouseDown:X0,handleDockSplitterTouchStart:W0,TERMINAL_TAB_PATH:P0,dockContainerRef:l0,handleEditorSplitterMouseDown:u0,handleEditorSplitterTouchStart:G_,searchQuery:h0,isIOSDevice:s0,currentBranchRecord:f0,currentChatJid:o0,currentChatBranches:v0,handleBranchPickerChange:t0,formatBranchPickerLabel:i0,openRenameCurrentBranchForm:F_,handlePruneCurrentBranch:Z_,handlePurgeArchivedBranch:m0,currentHashtag:z0,handleBackToTimeline:V_,activeSearchScopeLabel:d0,oobePanelState:H_,composePrefillRequest:D0,requestComposePrefill:g0,handleOobeSetupProvider:I0,handleOobeShowModelPicker:r0,handleOobeOpenWorkspace:z_,handleDismissProviderMissingOobe:Q_,handleCompleteProviderReadyOobe:U_,posts:N_,isMainTimelineView:J_,hasMore:x_,loadMore:P_,timelineRef:E_,handleHashtagClick:o_,addMessageRef:f_,scrollToMessage:q0,openFileFromPill:v,openTimelineFileFromPill:n,handleDeletePost:s,handleOpenFloatingWidget:G0,agents:F0,userProfile:y0,removingPostIds:A0,agentStatus:M0,isCompactionStatus:T0,agentDraft:c0,agentPlan:S0,agentThought:n0,pendingRequest:e0,intentToast:x0,currentTurnId:w0,steerQueued:D_,handlePanelToggle:__,btwSession:d,closeBtwPanel:B0,handleBtwRetry:p0,handleBtwInject:j_,floatingWidget:R_,handleCloseFloatingWidget:F1,handleFloatingWidgetEvent:u_,attachmentPreview:z1,setAttachmentPreview:I_,extensionStatusPanels:A_,pendingExtensionPanelActions:J1,handleExtensionPanelAction:W_,searchOpen:k_,followupQueueItems:A1,handleInjectQueuedFollowup:l_,handleRemoveQueuedFollowup:i_,handleMoveQueuedFollowup:a_,viewStateRef:B_,loadPosts:x1,scrollToBottom:U1,searchScope:b1,handleSearch:k1,handleSearchScopeChange:_$,setSearchScope:h4,enterSearchMode:k$,exitSearchMode:t_,fileRefs:m_,removeFileRef:M1,clearFileRefs:D1,setFileRefsFromCompose:$1,folderRefs:M$,removeFolderRef:y$,clearFolderRefs:$$,setFolderRefsFromCompose:y_,messageRefs:q1,removeMessageRef:T$,clearMessageRefs:l4,setMessageRefsFromCompose:j$,handleCreateSessionFromCompose:p4,handleCreateRootSessionFromCompose:r4,handleRestoreBranch:w$,attachActiveEditorFile:x$,followupQueueCount:v1,handleBtwIntercept:m1,handleMessageResponse:n4,handleComposeSubmitError:Q1,isComposeBoxAgentActive:S_,activeChatAgents:d4,connectionStatus:I1,stateAccessFailed:I$,activeModel:o4,agentModelsPayload:b5,activeModelUsage:v5,activeThinkingLevel:Y4,supportsThinking:C$,contextUsage:i4,extensionWorkingState:s4,notificationsEnabled:L1,notificationPermission:P$,handleToggleNotifications:V4,setActiveModel:q4,applyModelState:C1,setPendingRequest:H1,pendingRequestRef:m5,toggleWorkspace:Q4}=_,G$=()=>{if(s0())return;U1()};return N`
    <div class=${Bk({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${LL} mode="overlay" />
      ${Y&&N`
        <div class="rename-branch-overlay" onPointerDown=${(e_)=>{if(e_.target===e_.currentTarget)V()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(e_)=>{e_.preventDefault(),q(Q)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${L}
              value=${Q}
              onInput=${(e_)=>{let f$=e_.currentTarget?.value??"";K(String(f$))}}
              onKeyDown=${(e_)=>{if(e_.key==="Escape")e_.preventDefault(),V()}}
              autocomplete="off"
              placeholder="Session handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${F.kind||"info"}`}>
              ${F.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${B||!F.canSubmit}>
                ${B?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${V}
                disabled=${B}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&N`
        <${GL}
          onFileSelect=${U}
          onFolderSelect=${E}
          visible=${j}
          active=${j||G}
          onOpenEditor=${D}
          onOpenTerminalTab=${H}
          onOpenVncTab=${k}
          onToggleTerminal=${z?O:void 0}
          terminalVisible=${Boolean(z&&I)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${Q4}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${x} onTouchStart=${A}></div>
      `}
      ${M&&N`
        <div class="editor-pane-container">
          ${X&&N`<div class="zen-hover-zone"></div>`}
          ${G&&N`
            <${VL}
              tabs=${W}
              activeId=${y}
              onActivate=${w}
              onClose=${J}
              onCloseOthers=${P}
              onCloseAll=${f}
              onTogglePin=${b}
              onTogglePreview=${c}
              onToggleDiff=${r}
              onEditSource=${e}
              previewTabs=${_0}
              diffTabs=${E0}
              paneOverrides=${Z0}
              detachedTabs=${Q0}
              onReattachTab=${m}
              onToggleDock=${z?O:void 0}
              dockVisible=${z&&I}
              onToggleZen=${$0}
              zenMode=${X}
              onPopOutTab=${N0?void 0:V0}
            />
          `}
          ${G&&O0&&N`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${O0.label||O0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>m(O0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!O0&&N`<div class="editor-pane-host" ref=${h}></div>`}
          ${G&&!O0&&y&&_0.has(y)&&N`
            <${$8}
              getContent=${()=>j0.current?.getContent?.()}
              path=${y}
              onClose=${()=>c(y)}
            />
          `}
          ${z&&I&&N`<div class="dock-splitter" onMouseDown=${X0} onTouchStart=${W0}></div>`}
          ${z&&N`<div class=${`dock-panel${I?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!N0&&!a&&N`
                  <button class="dock-panel-action" onClick=${()=>V0(P0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${a&&N`
                  <button class="dock-panel-action" onClick=${()=>m(P0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${O} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${a?N`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>m(P0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:N`<div class="dock-panel-body" ref=${l0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${u0} onTouchStart=${G_}></div>
      `}
      <${cq}
        workspaceOpen=${j}
        toggleWorkspace=${Q4}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${H}
        onOpenVncTab=${k}
        onToggleTerminal=${z?O:void 0}
        terminalVisible=${Boolean(z&&I)}
      />
      <${mq}
        activeChatAgents=${d4}
        currentChatJid=${o0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(z&&I)}
        onSwitchChat=${t0}
        onToggleWorkspace=${Q4}
        onOpenTerminalTab=${H}
        onOpenVncTab=${k}
        onToggleTerminalDock=${z?O:void 0}
        onPrefillCompose=${g0}
      />
      <div class="container">
        ${h0&&s0()&&N`<div class="search-results-spacer"></div>`}
        ${(z0||h0)&&N`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${V_}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${z0?`#${z0}`:`Search: ${h0} · ${d0}`}</span>
          </div>
        `}
        ${H_?.kind&&H_.kind!=="hidden"&&N`
          <${aV}
            kind=${H_.kind}
            onSetupProvider=${I0}
            onShowModelPicker=${r0}
            onOpenWorkspace=${z_}
            onDismiss=${H_.kind==="provider-missing"?Q_:U_}
          />
        `}
        <${bQ}
          posts=${N_}
          hasMore=${J_?x_:!1}
          onLoadMore=${J_?P_:void 0}
          timelineRef=${E_}
          onHashtagClick=${o_}
          onMessageRef=${f_}
          onScrollToMessage=${q0}
          onFileRef=${n||v}
          onPostClick=${void 0}
          onDeletePost=${s}
          onOpenWidget=${G0}
          onOpenAttachmentPreview=${I_}
          emptyMessage=${z0?`No posts with #${z0}`:h0?`No results for "${h0}"`:void 0}
          agents=${F0}
          user=${y0}
          reverse=${J_}
          removingPostIds=${A0}
          searchQuery=${h0}
        />
        <${_j}
          status=${T0(M0)?null:M0}
          draft=${c0}
          plan=${S0}
          thought=${n0}
          pendingRequest=${e0}
          intent=${x0}
          turnId=${w0}
          steerQueued=${D_}
          onPanelToggle=${__}
          showExtensionPanels=${!1}
        />
        <${Gq}
          session=${d}
          onClose=${B0}
          onRetry=${p0}
          onInject=${j_}
        />
        <${Eq}
          widget=${R_}
          onClose=${F1}
          onWidgetEvent=${u_}
        />
        ${z1&&N`
          <${uq}
            mediaId=${z1.mediaId}
            info=${z1.info}
            onClose=${()=>I_(null)}
          />
        `}
        <${TV} />
        <${_j}
          extensionPanels=${Array.from(A_.values())}
          pendingPanelActions=${J1}
          onExtensionPanelAction=${W_}
          turnId=${w0}
          steerQueued=${D_}
          onPanelToggle=${__}
          showCorePanels=${!1}
        />
        <${sV}
          onPost=${(e_)=>{Uk({response:e_,viewStateRef:B_,scrollToBottom:U1})}}
          onFocus=${G$}
          searchMode=${k_}
          searchScope=${b1}
          onSearch=${k1}
          onSearchScopeChange=${_$||h4}
          onEnterSearch=${k$}
          onExitSearch=${t_}
          fileRefs=${m_}
          onRemoveFileRef=${M1}
          onClearFileRefs=${D1}
          onSetFileRefs=${$1}
          folderRefs=${M$}
          onRemoveFolderRef=${y$}
          onClearFolderRefs=${$$}
          onSetFolderRefs=${y_}
          messageRefs=${q1}
          onRemoveMessageRef=${T$}
          onClearMessageRefs=${l4}
          onSetMessageRefs=${j$}
          onSwitchChat=${t0}
          onRenameSession=${q}
          isRenameSessionInProgress=${B}
          onCreateSession=${p4}
          onCreateRootSession=${r4}
          onDeleteSession=${Z_}
          onPurgeArchivedSession=${m0}
          onRestoreSession=${w$}
          activeEditorPath=${Z?null:y}
          onAttachEditorFile=${Z?void 0:x$}
          onOpenFilePill=${v}
          followupQueueCount=${v1}
          followupQueueItems=${A1}
          onInjectQueuedFollowup=${l_}
          onRemoveQueuedFollowup=${i_}
          onMoveQueuedFollowup=${a_}
          onSubmitIntercept=${m1}
          onMessageResponse=${n4}
          onSubmitError=${Q1}
          isAgentActive=${S_}
          activeChatAgents=${d4}
          currentChatJid=${o0}
          connectionStatus=${I1}
          stateAccessFailed=${I$}
          activeModel=${o4}
          agentModelsPayload=${b5}
          modelUsage=${v5}
          thinkingLevel=${Y4}
          supportsThinking=${C$}
          contextUsage=${i4}
          notificationsEnabled=${L1}
          notificationPermission=${P$}
          onToggleNotifications=${V4}
          onModelChange=${q4}
          onModelStateChange=${C1}
          statusNotice=${T0(M0)?M0:null}
          extensionWorkingState=${s4}
          prefillRequest=${D0}
        />
        <${qQ}
          request=${e0}
          onRespond=${()=>{H1(null),m5.current=null}}
        />
      </div>
    </div>
  `}function BL(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,V=IV({branchLoaderMode:$,panePopoutMode:j}),q=Y?.renderBranchLoaderMode||CV,Q=Y?.renderPanePopoutMode||PV,L=Y?.renderMainShell||KL;if(V==="branch-loader")return q(G);if(V==="pane-popout")return Q(Z);return L(X)}var T8="piclaw_btw_session",FL=900,NL="__piclawRenameBranchFormLock__";function Dk(){try{return import.meta.url}catch{return null}}function zj(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function Hk(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function y8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function UL(_={}){let $=_.importMetaUrl===void 0?Dk():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=Hk($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((Q)=>String(Q?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let q=new URL(Y,G).searchParams.get("v");return q&&q.trim()?q.trim():null}catch{return null}}function DL(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[NL];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[NL]=G,G}function HL(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function EL(_={}){let $=typeof _.readItem==="function"?_.readItem:W1,j=_.storageKey||T8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",V=typeof Z.thinking==="string"?Z.thinking:"",q=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,Q=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:V,error:Q==="error"?q||"BTW stream interrupted. You can retry.":q,model:null,status:Q}}catch{return null}}function WL(_,$={}){let j=$.defaultChatJid||"web:default",G=y8(_,"chat_jid",j),Z=zj(_?.get?.("chat_only")||_?.get?.("chat-only")),X=zj(_?.get?.("pane_popout")),Y=y8(_,"pane_path"),V=y8(_,"pane_label"),q=zj(_?.get?.("branch_loader")),Q=y8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:V,branchLoaderMode:q,branchLoaderSourceChatJid:Q}}function OL(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function zL(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function Jj(_,$,j){return _||$?.label||j||"Pane"}function JL(_,$,j){return`${Jj(_,$,j)} · PiClaw`}function AL(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function kL(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function ML(_,$,j,G){return _===$&&!j||G}function yL(_,$,j,G,Z){return _||!$&&(j||G&&Z)}M_();function Ek(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Y1(_,$,j){let G=_?.[$];return typeof G==="function"?G:Ek($,j)}var TL=!1,wL=!1,xL=!1;function Wk(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function Ok(_=typeof window<"u"?window:null){if(!_||wL)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),wL=!0}function zk(){Y_.register(A3),Y_.register(o7),Y_.register(d7),Y_.register(i7),Y_.register(s7),Y_.register(a7),Y_.register(e7),Y_.register(_9),Y_.register($9),Y_.register(G9),Y_.register(j7),k3(),Y_.register(I3),Y_.register(C3)}function Jk(_=typeof window<"u"?window:null){if(!_||xL)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;xL=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function IL(){if(TL)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(Wk($),Ok(_),s9(_),_)try{let j=await Promise.resolve().then(() => (k0(),RG));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}zk(),await yq(_),Jk(_),TL=!0}function Ak(_=F6){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:Y1(_,"getAgentContext",null),getAutoresearchStatus:Y1(_,"getAutoresearchStatus",null),stopAutoresearch:Y1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:Y1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:Y1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:Y1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:Y1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:Y1(_,"getChatBranches",{chats:[]}),renameChatBranch:Y1(_,"renameChatBranch",null),pruneChatBranch:Y1(_,"pruneChatBranch",null),restoreChatBranch:Y1(_,"restoreChatBranch",null),getAgentQueueState:Y1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:Y1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:Y1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:Y1(_,"streamSidePrompt",null)}}var CL=Ak(F6);function PL(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:V,shellState:q,agentState:Q,composeState:L,modelState:K}=_,F={appShellRef:q.appShellRef,editorOpen:q.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:q.tabStripTabs,tabStripActiveId:q.tabStripActiveId,handleTabActivate:q.handleTabActivate,previewTabs:q.previewTabs,diffTabs:q.diffTabs,handleTabTogglePreview:q.handleTabTogglePreview,handleTabToggleDiff:q.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:q.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},B={appShellRef:q.appShellRef,workspaceOpen:q.workspaceOpen,editorOpen:q.editorOpen,chatOnlyMode:q.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:q.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:q.renameBranchNameDraft,renameBranchNameInputRef:q.renameBranchNameInputRef,setRenameBranchNameDraft:q.setRenameBranchNameDraft,renameBranchDraftState:q.renameBranchDraftState,isRenamingBranch:q.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:q.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:q.TERMINAL_TAB_PATH,isIOSDevice:q.isIOSDevice,currentBranchRecord:q.currentBranchRecord,currentChatJid:q.currentChatJid,currentChatBranches:q.currentChatBranches,formatBranchPickerLabel:q.formatBranchPickerLabel,activeSearchScopeLabel:q.activeSearchScopeLabel,currentHashtag:q.currentHashtag,searchQuery:q.searchQuery,oobePanelState:q.oobePanelState,composePrefillRequest:q.composePrefillRequest,requestComposePrefill:q.requestComposePrefill,handleOobeSetupProvider:q.handleOobeSetupProvider,handleOobeShowModelPicker:q.handleOobeShowModelPicker,handleOobeOpenWorkspace:q.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:q.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:q.handleCompleteProviderReadyOobe,posts:q.posts,hasMore:q.hasMore,loadMore:q.loadMore,timelineRef:q.timelineRef,agents:q.agents,userProfile:q.userProfile,removingPostIds:q.removingPostIds,extensionStatusPanels:q.extensionStatusPanels,pendingExtensionPanelActions:q.pendingExtensionPanelActions,searchOpen:q.searchOpen,followupQueueItems:q.followupQueueItems,viewStateRef:q.viewStateRef,loadPosts:q.loadPosts,scrollToBottom:q.scrollToBottom,searchScope:q.searchScope,tabStripTabs:q.tabStripTabs,tabStripActiveId:q.tabStripActiveId,handleTabActivate:q.handleTabActivate,previewTabs:q.previewTabs,diffTabs:q.diffTabs,handleTabTogglePreview:q.handleTabTogglePreview,handleTabToggleDiff:q.handleTabToggleDiff,panePopoutPath:q.panePopoutPath,tabPaneOverrides:q.tabPaneOverrides,handleTabClose:q.handleTabClose,handleTabCloseOthers:q.handleTabCloseOthers,handleTabCloseAll:q.handleTabCloseAll,handleTabTogglePin:q.handleTabTogglePin,handleTabEditSource:q.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:q.openEditor,openTerminalTab:q.openTerminalTab,openVncTab:q.openVncTab,fileRefs:L.fileRefs,folderRefs:L.folderRefs,messageRefs:L.messageRefs,followupQueueCount:L.followupQueueCount,attachmentPreview:L.attachmentPreview,setAttachmentPreview:L.setAttachmentPreview,extensionWorkingState:L.extensionWorkingState,activeChatAgents:K.activeChatAgents,connectionStatus:K.connectionStatus,stateAccessFailed:K.stateAccessFailed,activeModel:K.activeModel,activeModelUsage:K.activeModelUsage,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,contextUsage:K.contextUsage,notificationsEnabled:K.notificationsEnabled,notificationPermission:K.notificationPermission,handleToggleNotifications:K.handleToggleNotifications,setActiveModel:K.setActiveModel,applyModelState:K.applyModelState,setPendingRequest:Q.setPendingRequest,pendingRequestRef:Q.pendingRequestRef,...G,...Z,...X,...Y,...V,...Q,...L,...K};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:F,mainShellOptions:B}}function kk(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function fL(_){let $=kk({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return PL({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,folderRefs:_.surface.folderRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,stateAccessFailed:_.surface.stateAccessFailed,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}k0();var SL="(min-width: 1024px) and (orientation: landscape)";function Aj(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function RL(_,$){let j=Aj(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function Mk(_,$,j){let G=Aj(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function P6(_=typeof window<"u"?window:null){let $=Aj(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function gL(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function uL(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||P6($),Y=gL(X),V=RL($,Y);if(typeof V==="boolean")return V;if(G&&X==="desktop"){let q=RL($,"workspaceOpen");if(typeof q==="boolean")return q}return Z}function bL(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||P6(j);Mk(j,gL(Z),Boolean(_))}$6();var yk=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function vL(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(R1({window:j,navigator:G}))};Z();let Y=yk.map((V)=>{try{return j.matchMedia?.(V)??null}catch{return null}}).filter(Boolean).map((V)=>{if(typeof V.addEventListener==="function")return V.addEventListener("change",Z),()=>V.removeEventListener("change",Z);if(typeof V.addListener==="function")return V.addListener(Z),()=>V.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let V of Y)V();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function w8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function mL(_={}){return R1(_)&&K2(_)}function Tk(_){let $=_?.activeElement;if(!$)return!1;let j=String($.tagName||$.nodeName||"").toLowerCase();if(j==="textarea"||j==="select")return!0;if(j==="input"){let G=String($.type||"text").toLowerCase();return!["button","checkbox","color","file","hidden","image","radio","range","reset","submit"].includes(G)}if($.isContentEditable===!0)return!0;if(typeof $.closest==="function")try{return Boolean($.closest('[contenteditable="true"], [contenteditable="plaintext-only"]'))}catch(G){console.debug("[mobile-viewport] Ignoring activeElement.closest failure during keyboard detection.",G)}return!1}function wk(_={},$={}){let j=_.window??(typeof window<"u"?window:null),G=Number(j?.visualViewport?.height||0),Z=Number(j?.innerHeight||0),X=Number.isFinite(G)&&G>0,Y=Number.isFinite(Z)&&Z>0;if(X){if($.keyboardActive===!0){let V=Number(j?.visualViewport?.offsetTop||0),q=G+Math.max(0,Number.isFinite(V)?V:0);return Math.round(q)}if($.ignoreStandaloneChromeGap===!0&&Y&&Z>G)return Math.round(Z);return Math.round(G)}if(Y)return Math.round(Z);return null}function xk(_={},$={}){if(!mL(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=Tk(G),X=wk({window:j},{ignoreStandaloneChromeGap:!0,keyboardActive:Z});if(X&&X>0)G.documentElement.style.setProperty("--app-height",`${X}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(Y){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",Y)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(Y){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",Y)}}return X}function cL(_={}){if(!mL(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let K of Z)$.clearTimeout?.(K);Z.clear()},Y=()=>{G=0,xk({window:$,document:j})},V=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},q=()=>{V();for(let K of[80,220,420]){let F=$.setTimeout?.(()=>{Z.delete(F),V()},K);if(F!=null)Z.add(F)}},Q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},L=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",Q),j.addEventListener("focusin",q,!0),L?.addEventListener?.("resize",q),L?.addEventListener?.("scroll",q),()=>{X(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",Q),j.removeEventListener("focusin",q,!0),L?.removeEventListener?.("resize",q),L?.removeEventListener?.("scroll",q)}}var kj="resume-layout-settling",Ik=220,x5=new WeakMap;function Ck(_){if(!_){q_(T8,"");return}q_(T8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function Pk(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function fk(_,$={}){if(!_)return()=>{};let{durationMs:j=Ik,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=x5.get(_);if(X)Z(X);_.classList.add(kj);let Y=G(()=>{if(x5.get(_)===Y)_.classList.remove(kj),x5.delete(_)},j);return x5.set(_,Y),()=>{let V=x5.get(_);if(V)Z(V),x5.delete(_);_.classList.remove(kj)}}function Rk(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function hL(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:V,agents:q,agentsRef:Q,currentChatJid:L,activeChatJidRef:K,userProfile:F,userProfileRef:B,brandingRef:U,panePopoutMode:E=!1}=_;VY(30000),g(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),g(()=>XX(),[]),g(()=>vL(Z),[Z]),g(()=>{let k=()=>{},z=w8(()=>{Q7(),k(),k=fk(G.current)});return()=>{z(),k()}},[G]);let D=u(P6());return g(()=>{bL(X,{bucket:D.current})},[X]),g(()=>{if(typeof window>"u"||!window.matchMedia)return;let k=window.matchMedia(SL),z=()=>{let O=P6(window);if(D.current===O)return;let I=D.current;if(D.current=O,I==="desktop"&&O==="narrow")Y(!1)};if(k.addEventListener)k.addEventListener("change",z);else if(k.addListener)k.addListener(z);return()=>{if(k.removeEventListener)k.removeEventListener("change",z);else if(k.removeListener)k.removeListener(z)}},[Y]),g(()=>cL(),[]),g(()=>{Ck(V)},[V]),g(()=>{Q.current=q||{}},[q,Q]),g(()=>{K.current=L},[K,L]),g(()=>{B.current=F||{name:"You",avatar_url:null,avatar_background:null}},[F,B]),{applyBranding:R((k,z,O=null)=>{if(typeof document>"u")return;let I=(k||"").trim()||"PiClaw";if(U.current.title!==I){if(Pk({panePopoutMode:E,search:typeof window<"u"?window.location.search:""})){document.title=I;let A=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(A&&A.getAttribute("content")!==I)A.setAttribute("content",I)}U.current.title=I}let x=z?`${z}|${O||""}`:"";if(U.current.avatarBase!==x){U.current.avatarBase=x;let A=O||Date.now();Rk(document,A)}},[U])}}k0();function lL(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function Mj(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function x8(_,$){let j=Array.isArray(_)?_:[],G=Mj($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function I8(_,$){let j=Array.isArray(_)?_:[],G=Mj($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function C8(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=Mj(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function pL(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function rL(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function yj(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:V,setCurrentHashtag:q,setPosts:Q,setHasMore:L}=_,K=typeof $==="string"?$.trim():"";if(!K)return;let F=j==="root"||j==="all"?j:"current";Y(F),V(K),q(null),Q(null);try{let B=await X(K,50,0,G,F,Z,_.filters);Q(Array.isArray(B?.results)?B.results:[]),L(!1)}catch(B){console.error("Failed to search:",B),Q([])}}async function nL(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:V,hasMoreRef:q,loadMoreRef:Q,confirm:L=(H)=>window.confirm(H),showAlert:K=(H)=>alert(H),scheduleTimeout:F=(H,k)=>{setTimeout(H,k)}}=_;if(!$)return;let B=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,E=j?.filter((H)=>H?.data?.thread_id===B&&H?.id!==B).length||0;if(E>0){if(!L(`Delete this message and its ${E} replies?`))return}let D=(H)=>{if(!H.length)return;V((k)=>{let z=new Set(k);return H.forEach((O)=>z.add(O)),z}),F(()=>{if(X(()=>{Y((k)=>k?k.filter((z)=>!H.includes(z.id)):k)}),V((k)=>{let z=new Set(k);return H.forEach((O)=>z.delete(O)),z}),q.current)Q.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let H=await Z(B,E>0,U);if(H?.ids?.length)D(H.ids)}catch(H){let k=H instanceof Error?H.message:String(H||"");if(E===0&&k.includes("Replies exist")){if(!L("Delete this message and its replies?"))return;let O=await Z(B,!0,U);if(O?.ids?.length)D(O.ids);return}console.error("Failed to delete post:",H),K(`Failed to delete message: ${k}`)}}async function dL(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(K)=>document.getElementById(K),scheduleRaf:V=(K)=>requestAnimationFrame(K),scheduleTimeout:q=(K,F)=>{setTimeout(K,F)}}=_,Q=(K)=>{K.scrollIntoView({behavior:"smooth",block:"center"}),K.classList.add("post-highlight"),q(()=>K.classList.remove("post-highlight"),2000)},L=Y(`post-${$}`);if(L){Q(L);return}try{let K=typeof j==="string"&&j.trim()?j.trim():G,B=(await Z($,K))?.thread?.[0];if(!B)return;X((U)=>{if(!U)return[B];if(U.some((E)=>E.id===B.id))return U;return[...U,B]}),V(()=>{q(()=>{let U=Y(`post-${$}`);if(U)Q(U)},50)})}catch(K){console.error("[scrollToMessage] Failed to fetch message",$,K)}}function Sk(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function gk(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:V,setSearchQuery:q,setSearchOpen:Q,setMessageRefs:L,navigate:K,chatOnlyMode:F,baseHref:B=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let E=typeof j==="string"&&j.trim()?j.trim():G,D=E!==G,H=Boolean(Y||X||Z);if(!D&&!H)return L((k)=>x8(k,U)),!0;if(L([U]),V?.(null),q?.(null),Q?.(!1),D&&typeof K==="function"){let k=w1(B,E,{chatOnly:F});K(k)}return!0}function oL(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:V,setFolderRefs:q,setMessageRefs:Q,currentChatJid:L,currentHashtag:K,searchQuery:F,searchOpen:B,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:D,navigate:H,chatOnlyMode:k,baseHref:z,getThread:O,setPosts:I}=_,x=R(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);g(()=>{return()=>{x()}},[x]);let A=R((h)=>{V((j0)=>x8(j0,h))},[V]),M=R((h)=>{V((j0)=>I8(j0,h))},[V]),W=R(()=>{V([])},[V]),y=R((h)=>{V(C8(h))},[V]),w=R((h)=>{q((j0)=>x8(j0,h))},[q]),J=R((h)=>{q((j0)=>I8(j0,h))},[q]),P=R(()=>{q([])},[q]),f=R((h)=>{q(C8(h))},[q]),b=R((h,j0=null,Q0="info",O0=3000)=>{x(),$({title:h,detail:j0||null,kind:Q0||"info"}),j.current=setTimeout(()=>{$((a)=>a?.title===h?null:a)},O0)},[x,j,$]),c=R((h,{autoOpenEditor:j0=!1}={})=>{let Q0=lL(h,{editorOpen:G,autoOpenEditor:j0,resolvePane:X});if(Q0.kind==="open"){Z(Q0.path);return}if(Q0.kind==="toast")b(Q0.title,Q0.detail,Q0.level)},[G,Z,X,b]),r=R((h)=>{c(h,{autoOpenEditor:!1})},[c]),e=R((h)=>{c(h,{autoOpenEditor:!0})},[c]),m=R(()=>{let h=Y;if(h)A(h)},[A,Y]),_0=R((h,j0=null)=>{gk({id:h,targetChatJid:j0,currentChatJid:L,currentHashtag:K,searchQuery:F,searchOpen:B,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:D,setMessageRefs:Q,navigate:H,chatOnlyMode:k,baseHref:z})},[z,k,L,K,H,B,F,U,Q,D,E]),E0=R(async(h,j0=null)=>{await dL({id:h,targetChatJid:j0,currentChatJid:L,getThread:O,setPosts:I})},[L,O,I]),Z0=R((h)=>{Q((j0)=>I8(j0,h))},[Q]),$0=R(()=>{Q([])},[Q]),V0=R((h)=>{Q(C8(h))},[Q]),N0=R((h)=>{b("Compose failed",Sk(h),"error",5000)},[b]);return{clearIntentToast:x,addFileRef:A,removeFileRef:M,clearFileRefs:W,setFileRefsFromCompose:y,addFolderRef:w,removeFolderRef:J,clearFolderRefs:P,setFolderRefsFromCompose:f,showIntentToast:b,openFileFromPill:r,openTimelineFileFromPill:e,attachActiveEditorFile:m,addMessageRef:_0,scrollToMessage:E0,removeMessageRef:Z0,clearMessageRefs:$0,setMessageRefsFromCompose:V0,handleComposeSubmitError:N0}}k0();async function iL(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:V,thoughtBufferRef:q,draftBufferRef:Q,setAgentThought:L,setAgentDraft:K}=_;if($!=="thought"&&$!=="draft")return;let F=G.current;if($==="thought"){if(Z.current=j,F)try{await Y(F,"thought",j)}catch(B){console.warn("Failed to update thought visibility:",B)}if(!j)return;try{let B=F?await V(F,"thought"):null;if(B?.text)q.current=B.text;L((U)=>({...U||{text:"",totalLines:0},fullText:q.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full thought:",B)}return}if(X.current=j,F)try{await Y(F,"draft",j)}catch(B){console.warn("Failed to update draft visibility:",B)}if(!j)return;try{let B=F?await V(F,"draft"):null;if(B?.text)Q.current=B.text;K((U)=>({...U||{text:"",totalLines:0},fullText:Q.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full draft:",B)}}function uk(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function bk(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function sL(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:V,setAgentStatus:q,draftBufferRef:Q,thoughtBufferRef:L,pendingRequestRef:K,lastAgentResponseRef:F,currentTurnIdRef:B,steerQueuedTurnIdRef:U,agentStatusRef:E,silentRecoveryRef:D,thoughtExpandedRef:H,draftExpandedRef:k,setCurrentTurnId:z,setSteerQueuedTurnId:O,currentTurnIdRefForPanel:I,setAgentThoughtVisibility:x,getAgentThought:A,setAgentThought:M,setAgentDraft:W}=_,y=R((c={})=>{let r=Number(c.atMs),e=Number.isFinite(r)&&r>0?r:Date.now();if(Z.current=e,c.running)Y.current=!0,V((m)=>m?m:!0);if(c.clearSilence)X.current=0},[Y,Z,X,V]),w=R(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);g(()=>()=>{w()},[w]);let J=R(()=>{w(),q((c)=>uk(c))},[w,q]),P=R((c)=>{if(!c)return;w();let r=Date.now();G.current=r,q(bk(c)),j.current=setTimeout(()=>{if(G.current!==r)return;q((e)=>{if(!e||!(e.last_activity||e.lastActivity))return e;return null})},$)},[w,j,G,$,q]),f=R(()=>{Y.current=!1,V(!1),Z.current=null,X.current=0,Q.current="",L.current="",K.current=null,F.current=null,B.current=null,U.current=null,E.current=null,D.current={inFlight:!1,lastAttemptAt:0,turnId:null},w(),z(null),O(null),H.current=!1,k.current=!1},[E,w,B,Q,k,Y,Z,F,X,K,z,V,O,D,U,L,H]),b=R(async(c,r)=>{await iL({panelKey:c,expanded:r,currentTurnIdRef:I,thoughtExpandedRef:H,draftExpandedRef:k,setAgentThoughtVisibility:x,getAgentThought:A,thoughtBufferRef:L,draftBufferRef:Q,setAgentThought:M,setAgentDraft:W})},[I,Q,k,A,W,M,x,L,H]);return{noteAgentActivity:y,clearLastActivityTimer:w,clearLastActivityFlag:J,showLastActivity:P,clearAgentRunState:f,handlePanelToggle:b}}k0();function P8(_){return _?{..._}:{text:"",totalLines:0}}function aL(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function vk(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function mk(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function tL(_){return{agentStatus:_.agentStatus,agentDraft:P8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:P8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:aL(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:vk(_.silentRecovery)}}function eL(_){let $=_.snapshot||mk(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(P8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(P8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(aL($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function Tj(_){return String(_||"").trim()||"web:default"}function _K({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function ck(_){return _K(_)}function hk(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function $K(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:V,agentPlan:q,agentThought:Q,pendingRequest:L,pendingRequestRef:K,followupQueueItems:F,activeModel:B,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:D,contextUsage:H,isAgentRunningRef:k,wasAgentActiveRef:z,draftBufferRef:O,thoughtBufferRef:I,lastAgentEventRef:x,lastSilenceNoticeRef:A,lastAgentResponseRef:M,currentTurnIdRef:W,thoughtExpandedRef:y,draftExpandedRef:w,agentStatusRef:J,silentRecoveryRef:P,clearLastActivityTimer:f,setIsAgentTurnActive:b,setAgentStatus:c,setAgentDraft:r,setAgentPlan:e,setAgentThought:m,setPendingRequest:_0,setCurrentTurnId:E0,setFollowupQueueItems:Z0,setActiveModel:$0,setActiveThinkingLevel:V0,setSupportsThinking:N0,setActiveModelUsage:h,setContextUsage:j0,lastNotifiedIdRef:Q0,agentsRef:O0,notify:a,shouldNotifyLocallyForChat:X0}=_,W0=R((h0)=>{if(!ck({remainingQueueCount:h0,steerQueuedTurnId:Z.current,currentTurnId:W.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,W,X,Z]),P0=R(()=>tL({agentStatus:Y,agentDraft:V,agentPlan:q,agentThought:Q,pendingRequest:L,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:F,activeModel:B,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:D,contextUsage:H,isAgentRunning:k.current,wasAgentActive:z.current,draftBuffer:O.current,thoughtBuffer:I.current,lastAgentEvent:x.current,lastSilenceNotice:A.current,lastAgentResponse:M.current,currentTurnIdRef:W.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:y.current,draftExpanded:w.current,agentStatusRef:J.current,silentRecovery:P.current}),[B,D,U,V,q,Y,Q,H,G,F,$,L,j,E,k,z,O,I,x,A,M,W,Z,y,w,J,P]),l0=R((h0)=>{eL({snapshot:h0,clearLastActivityTimer:f,refs:{isAgentRunningRef:k,wasAgentActiveRef:z,lastAgentEventRef:x,lastSilenceNoticeRef:A,draftBufferRef:O,thoughtBufferRef:I,pendingRequestRef:K,lastAgentResponseRef:M,currentTurnIdRef:W,steerQueuedTurnIdRef:Z,agentStatusRef:J,silentRecoveryRef:P,thoughtExpandedRef:y,draftExpandedRef:w},setters:{setIsAgentTurnActive:b,setAgentStatus:c,setAgentDraft:r,setAgentPlan:e,setAgentThought:m,setPendingRequest:_0,setCurrentTurnId:E0,setSteerQueuedTurnId:X,setFollowupQueueItems:Z0,setActiveModel:$0,setActiveThinkingLevel:V0,setSupportsThinking:N0,setActiveModelUsage:h,setContextUsage:j0}})},[J,f,W,O,w,k,x,M,A,K,$0,h,V0,r,e,c,m,j0,E0,Z0,b,_0,X,N0,P,Z,I,y,z]),u0=R((h0)=>{if(!h0)return;if(W.current===h0)return;W.current=h0,P.current={inFlight:!1,lastAttemptAt:0,turnId:h0},E0(h0),Z.current=null,X(null),O.current="",I.current="",r({text:"",totalLines:0}),e(""),m({text:"",totalLines:0}),_0(null),K.current=null,M.current=null,y.current=!1,w.current=!1},[W,O,w,M,K,r,e,m,E0,_0,X,P,Z,I,y]),G_=R((h0)=>{let s0=M.current;if(!s0||!s0.post)return;if(h0&&s0.turnId&&s0.turnId!==h0)return;let f0=s0.post,o0=typeof f0?.chat_jid==="string"&&f0.chat_jid.trim()?f0.chat_jid.trim():"";if(!o0||!X0(o0))return;if(f0.id&&Q0.current===f0.id)return;let v0=hk(f0);if(!v0)return;Q0.current=f0.id||Q0.current,M.current=null;let t0=O0.current||{},F_=(f0?.data?.agent_id?t0[f0.data.agent_id]:null)?.name||"Pi";a(F_,v0,{sourceLabel:"Local"})},[O0,M,Q0,a,X0]);return{clearQueuedSteerStateIfStale:W0,snapshotCurrentChatPaneState:P0,restoreChatPaneState:l0,setActiveTurn:u0,notifyForFinalResponse:G_}}k0();function f8(_){return _?.turn_id||_?.turnId||null}function I5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function wj(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function xj(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function R8(_,$){return{text:_,totalLines:xj(_,$)}}function Ij(_,$){return{text:$?.text||"",totalLines:qY(_),fullText:_}}function jK(_,$,j){return j==="replace"?$:`${_||""}${$}`}function GK(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function ZK(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function a1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function XK(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function Cj(_,$){return _&&$}function YK(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function VK(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function qK(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function QK(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:V,agentStatusRef:q,pendingRequestRef:Q,thoughtBufferRef:L,draftBufferRef:K,setAgentStatus:F,setAgentDraft:B,setAgentPlan:U,setAgentThought:E,setPendingRequest:D,setActiveTurn:H,noteAgentActivity:k,clearLastActivityFlag:z,onStateAccessResult:O}=_,I=$;try{let x=await j(I);if(O?.(!1),G.current!==I)return null;if(!x||x.status!=="active"||!x.data){if(Z.current&&a1(X.current))Y();return Z.current=!1,V(),q.current=null,F(null),B({text:"",totalLines:0}),U(""),E({text:"",totalLines:0}),D(null),Q.current=null,x??null}Z.current=!0;let A=x.data;q.current=A;let M=f8(A);if(M)H(M);k({running:!0,clearSilence:!0,atMs:n$(A)??Date.now()}),z(),F(A);let W=I5(x.thought);if(W)E((w)=>{if(wj(w,W.text))return w;return L.current=W.text,W});let y=I5(x.draft);if(y)B((w)=>{if(wj(w,y.text))return w;return K.current=y.text,y});return x}catch(x){return O?.(!0),console.warn("Failed to fetch agent status:",x),null}}async function LK(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:V,refreshQueueState:q,refreshAgentStatus:Q,now:L=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let K=G.current||null,F=Z.current,B=L();if(F.inFlight)return null;if(F.turnId===K&&B-F.lastAttemptAt<X)return null;F.inFlight=!0,F.lastAttemptAt=B,F.turnId=K;try{if(a1(Y.current))await V();return await q(),await Q()}finally{F.inFlight=!1}}function lk(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function KK(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:V,silenceRefreshMs:q,isCompactionStatus:Q,setAgentStatus:L,reconcileSilentTurn:K,now:F=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let B=G.current;if(!B)return;let U=F(),E=U-B,D=X.current,H=Q(D),k=lk(D);if(E>=V){if(!H&&!k)L({type:"waiting",title:"Re-syncing after a quiet period…"});K();return}if(E>=Y&&U-Z.current>=q){if(!H&&!k){let z=Math.floor(E/1000);L({type:"waiting",title:`Waiting for model… No events for ${z}s`})}Z.current=U,K()}}function pk(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function BK(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:V,thoughtBufferRef:q,pendingRequestRef:Q,lastAgentResponseRef:L,agentStatusRef:K,stalledPostIdRef:F,scrollToBottomRef:B,setCurrentTurnId:U,setAgentDraft:E,setAgentPlan:D,setAgentThought:H,setPendingRequest:k,setAgentStatus:z,setPosts:O,dedupePosts:I,now:x=()=>Date.now(),nowIso:A=()=>new Date().toISOString()}=_;if(!$.current)return;let M=pk(K.current);$.current=!1,j.current=0,G.current=null,K.current=null,Z.current=null,U(null),X.current=!1,Y.current=!1;let W=(V.current||"").trim();if(V.current="",q.current="",D(""),H({text:"",totalLines:0}),k(null),Q.current=null,L.current=null,!W){E({text:"",totalLines:0}),z({type:"error",title:"Response stalled - No content received"});return}E({text:W,totalLines:xj(W,null),fullText:W});let y=W,w=x(),J=A(),P={id:w,timestamp:J,data:{type:"agent_response",content:y,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:M?.summary||"",tool_title:M?.title||"",tool_name:M?.toolName||"",tool_status:M?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};F.current=w,O((f)=>f?I([...f,P]):[P]),B.current?.(),z(null)}function rk(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function nk(_){BK(_)}function NK(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;g(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function FK(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:V,draftExpandedRef:q,draftBufferRef:Q,thoughtBufferRef:L,pendingRequestRef:K,lastAgentResponseRef:F,agentStatusRef:B,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:D,setAgentPlan:H,setAgentThought:k,setPendingRequest:z,setAgentStatus:O,dedupePosts:I}=_,x=R(()=>{rk({stalledPostIdRef:$,setPosts:j})},[j,$]),A=R(()=>{nk({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:V,draftExpandedRef:q,draftBufferRef:Q,thoughtBufferRef:L,pendingRequestRef:K,lastAgentResponseRef:F,agentStatusRef:B,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:D,setAgentPlan:H,setAgentThought:k,setPendingRequest:z,setAgentStatus:O,setPosts:j,dedupePosts:I})},[Y,I,Q,q,G,X,F,B,Z,K,U,D,H,O,k,E,z,j,$,L,V]);return{removeStalledPost:x,finalizeStalledResponse:A}}function dk(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function ok(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function UK(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:V}=_,{applyBranding:q}=hL($),Q=oL(j);dk({removeFileRefRef:V,composeReferenceActions:Q});let L=sL(G),K=$K({...Z,clearLastActivityTimer:L.clearLastActivityTimer}),F=FK(X);return NK(Y),ok({applyBranding:q,composeReferenceActions:Q,agentActivity:L,chatPaneRuntime:K,recoveryCallbacks:F})}k0();k0();M_();var S8=new Map,Pj=new Map;function DK(){return Date.now()}function f6(_){return String(_||"").trim()}function HK(_,$=600000){return Boolean(_&&DK()-_.cachedAt<=$)}function ik(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function EK(_,$){return S8.delete(_),S8.set(_,$),ik(S8),$}function g8(_,$){let j=f6(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:DK()};return EK(j,G)}function fj(_,$={}){let j=f6(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=S8.get(j)||null;if(!HK(Z,G))return null;return EK(j,Z)}function WK(_,$,j=5){if(!Array.isArray(_))return[];let G=f6($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let V of _){let q=f6(V?.chat_jid);if(!q||q===G||X.has(q))continue;if(X.add(q),Y.push(q),Y.length>=Z)break}return Y}async function OK(_){let $=Array.from(new Set((_.chatJids||[]).map((V)=>f6(V)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((V)=>!HK(fj(V,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let V=Z[X++],q=Pj.get(V);if(q){await q;continue}let Q=(async()=>{try{let L=await _.fetchTimeline(V);g8(V,L)}catch(L){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",L,{chatJid:V})}finally{Pj.delete(V)}})();Pj.set(V,Q),await Q}});await Promise.all(Y)}function zK(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let V=Y?.id;if(typeof V==="number"&&Number.isFinite(V)&&V<Z)Z=V}if(!Number.isFinite(Z))return W5([...G,...j]);let X=j.filter((Y)=>{let V=Y?.id;return typeof V==="number"&&Number.isFinite(V)&&V<Z});return W5([...G,...X])}function JK({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=C(null),[V,q]=C(!1),Q=u(!1),L=u(null),K=u(!1),F=u(null),B=u(null),U=u(0),E=u(0);g(()=>{Q.current=V},[V]),g(()=>{B.current=X},[X]);let D=!G&&!Z,H=u(D);g(()=>{H.current=D},[D]),g(()=>{U.current+=1,Y(null),B.current=null,F.current=null,K.current=!1,Q.current=!1,q(!1),E.current=0},[j]);let k=R((M,W)=>{if(!D)return;g8(j,{posts:Array.isArray(M)?M:[],has_more:Boolean(W)})},[j,D]),z=R((M,W)=>{B.current=Array.isArray(M)?M:[],Q.current=Boolean(W),Y(B.current),q(Q.current),k(B.current,Q.current)},[k]),O=R(async(M=null)=>{let W=U.current;try{if(M){let P=await F7(M,50,0,j);if(W!==U.current)return;Y(P.posts),q(!1);return}let y=(P)=>{if(W!==U.current)return;let f=Array.isArray(P?.posts)?P.posts:[],b=Boolean(P?.has_more);z(f,b)},w=fj(j);if(w){z(w.posts,w.has_more);let P=E.current;p$(10,null,j).then((f)=>{if(W!==U.current||E.current!==P)return;if(!H.current)return;let b=Array.isArray(f?.posts)?f.posts:[],c=Boolean(f?.has_more);z(zK(B.current,b),c)}).catch((f)=>{if(W!==U.current)return;console.error("Failed to refresh cached timeline:",f)});return}let J=await p$(10,null,j);y(J)}catch(y){if(W!==U.current)return;throw console.error("Failed to load posts:",y),y}},[j,z]),I=R(async()=>{let M=U.current;try{let W=await p$(10,null,j);if(M!==U.current)return;z(zK(B.current,W?.posts),Boolean(W?.has_more))}catch(W){if(M!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j,z]),x=R(async(M={})=>{let W=U.current,y=B.current;if(!y||y.length===0)return;if(K.current)return;let{preserveScroll:w=!0,preserveMode:J="top",allowRepeat:P=!1}=M,f=(r)=>{if(!w){r();return}if(J==="top")$(r);else _(r)},c=y.slice().sort((r,e)=>r.id-e.id)[0]?.id;if(!Number.isFinite(c))return;if(!P&&F.current===c)return;K.current=!0,F.current=c;try{let r=await p$(10,c,j);if(W!==U.current)return;if(E.current+=1,r.posts.length>0)f(()=>{let e=W5([...r.posts,...B.current||[]]);z(e,r.has_more)});else z(B.current||[],!1)}catch(r){if(W!==U.current)return;console.error("Failed to load more posts:",r)}finally{if(W===U.current)K.current=!1}},[j,_,$,z]);g(()=>{L.current=x},[x]);let A=R((M)=>{Y((W)=>{let y=typeof M==="function"?M(W):M;if(B.current=y,Array.isArray(y)){if(E.current+=1,D)g8(j,{posts:y,has_more:Q.current})}return y})},[j,D]);return{posts:X,setPosts:A,hasMore:V,setHasMore:q,hasMoreRef:Q,loadPosts:O,refreshTimeline:I,loadMore:x,loadMoreRef:L,loadingMoreRef:K,lastBeforeIdRef:F}}k0();function sk(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function AK(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!sk(Z));return G.length===_.length?_:G}function kK(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function MK(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function j4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function yK(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function TK(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function ak(_,$=150){return Math.abs(_)<=$}function wK(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=R(()=>{let q=$.current;if(!q)return;if(ak(q.scrollTop))q.scrollTop=0},[$]),X=R((q)=>{let Q=$.current;if(!Q||typeof q!=="function"){q?.();return}let{currentHashtag:L,searchQuery:K,searchOpen:F}=j.current||{},B=!((K||F)&&!L),U=B?Q.scrollHeight-Q.scrollTop:Q.scrollTop;q(),requestAnimationFrame(()=>{let E=$.current;if(!E)return;if(B){let D=Math.max(E.scrollHeight-U,0);E.scrollTop=D}else{let D=Math.max(E.scrollHeight-E.clientHeight,0),H=Math.min(U,D);E.scrollTop=H}})},[$,j]),Y=R((q)=>{let Q=$.current;if(!Q||typeof q!=="function"){q?.();return}let L=Q.scrollTop;q(),requestAnimationFrame(()=>{let K=$.current;if(!K)return;let F=Math.max(K.scrollHeight-K.clientHeight,0);K.scrollTop=Math.min(L,F)})},[$]),V=R((q)=>{return AK(q,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:V}}function tk(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function ek(_){_.scrollToBottomRef.current=_.scrollToBottom}function xK(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:V}=_,q=u(null),{scrollToBottom:Q,preserveTimelineScroll:L,preserveTimelineScrollTop:K,filterQueuedPosts:F}=wK({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});ek({scrollToBottomRef:q,scrollToBottom:Q});let{posts:B,setPosts:U,hasMore:E,setHasMore:D,hasMoreRef:H,loadPosts:k,refreshTimeline:z,loadMore:O,loadMoreRef:I}=JK({preserveTimelineScroll:L,preserveTimelineScrollTop:K,chatJid:Z,currentHashtag:X,searchQuery:Y}),x=Y0(()=>tk({rawPosts:B,followupQueueItems:V,filterQueuedPosts:F}),[F,V,B]);return{scrollToBottomRef:q,scrollToBottom:Q,preserveTimelineScroll:L,preserveTimelineScrollTop:K,rawPosts:B,setPosts:U,hasMore:E,setHasMore:D,hasMoreRef:H,loadPosts:k,refreshTimeline:z,loadMore:O,loadMoreRef:I,posts:x}}k0();function _M(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function IK(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:V,loadPosts:q,searchPosts:Q,setCurrentHashtag:L,setSearchQuery:K,setSearchOpen:F,setSearchScope:B,setPosts:U,setHasMore:E,preserveTimelineScrollTop:D,setRemovingPostIds:H,deletePost:k,hasMoreRef:z,loadMoreRef:O}=_,I=R(async(P)=>{await pL({hashtag:P,setCurrentHashtag:L,setPosts:U,loadPosts:q})},[q,L,U]),x=R(async()=>{await rL({setCurrentHashtag:L,setSearchQuery:K,setPosts:U,loadPosts:q})},[q,L,U,K]),A=R(async(P,f=Z,b)=>{await yj({query:P,scope:f,currentChatJid:X,currentRootChatJid:Y,searchPosts:Q,setSearchScope:B,setSearchQuery:K,setCurrentHashtag:L,setPosts:U,setHasMore:E,filters:b})},[X,Y,Q,Z,L,E,U,K,B]),M=R((P)=>{if(B(P),j&&j.trim())yj({query:j,scope:P,currentChatJid:X,currentRootChatJid:Y,searchPosts:Q,setSearchScope:B,setSearchQuery:K,setCurrentHashtag:L,setPosts:U,setHasMore:E})},[X,Y,Q,j,L,E,U,K,B]),W=R(()=>{F(!0),K(null),L(null),B("current"),U([])},[L,U,F,K,B]),y=R(()=>{F(!1),K(null),q()},[q,F,K]),w=Y0(()=>_M({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),J=R(async(P)=>{await nL({post:P,posts:V,currentChatJid:X,deletePost:k,preserveTimelineScrollTop:D,setPosts:U,setRemovingPostIds:H,hasMoreRef:z,loadMoreRef:O})},[X,k,z,O,V,D,U,H]);return{handleHashtagClick:I,handleBackToTimeline:x,handleSearch:A,handleSearchScopeChange:M,enterSearchMode:W,exitSearchMode:y,isMainTimelineView:w,handleDeletePost:J}}k0();function Rj(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function CK(_,$){let j=new Map(_),G=Rj($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function PK(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=Rj($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function fK(_){if(_?.options?.remove)return!0;return Rj(_)?.state!=="running"}function Sj(_,$){return`${_}:${$}`}function RK(_,$,j){let G=Sj($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function SK(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function u8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function gK(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var uK="piclaw:ctx:";function G4(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function u4(_,$){let j=G4(_),G=G4($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function C5(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{q_(uK+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function bK(_){if(!_)return null;return W2(uK+_)}async function vK(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:V}=_,q=++j.current,Q=$;try{let L=await X(Q);if(q!==j.current)return;if(G.current!==Q)return;let K=Z.current,F=Array.isArray(L?.items)?L.items:[],B=kK(F,K);if(B.length){Y((U)=>MK(U,B)?U:B);return}if(F.length>0)return;K.clear(),V(0),Y((U)=>U.length===0?U:[])}catch{if(q!==j.current)return;if(G.current!==Q)return;Y((L)=>L.length===0?L:[])}}async function mK(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=G4(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((V)=>u4(V,Y)?V:Y),C5(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function cK(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let V=await G(Y);if(j.current!==Y)return;Z((q)=>CK(q,V)),X((q)=>u8(q,"autoresearch"))}catch(V){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",V)}}function hK(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function lK(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(a1($.current))j();G()}V6();var b8=new Map,v8=new Map,$M=250,pK=1500,rK=300000;function P5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function jM(_,$){return`${_}:${$}`}function GM(_){for(let[$,j]of v8.entries())if(_-j>rK)v8.delete($)}function ZM(_){for(let[$,j]of b8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>rK)b8.delete($)}}function nK(_=P5()){GM(_),ZM(_)}function dK(_){let{chatJid:$,nowMs:j=P5()}=_;if(!$)return;v8.set($,j),nK(j)}function R6(_,$=pK,j=P5()){if(!_)return!1;let G=v8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function A$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=$M,activationWindowMs:X=pK,nowMs:Y=P5()}=_;nK(Y);let V=jM($,j),q=b8.get(V)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(b8.set(V,q),q.inFlight)return await q.inFlight;if(Boolean(T2("thread-switch",j)||R6(j,X,Y))&&Number.isFinite(q.lastCompletedAt)&&Y-q.lastCompletedAt<=Z)return q.lastValue;let L=Promise.resolve().then(G).then((K)=>{return q.lastCompletedAt=P5(),q.lastValue=K??null,q.inFlight=null,K}).catch((K)=>{throw q.lastCompletedAt=P5(),q.inFlight=null,K});return q.inFlight=L,await L}function oK(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:V,showIntentToast:q}=_,Q=typeof $==="string"&&$.trim()?$.trim():null;if(!Q||!j||Q===j)return!1;if(G.current===Q)return!0;G.current=Q;let L=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!L&&!Y.current&&!V.current&&!Z.current);return q("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function gj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function iK(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:V,setPendingRequest:q,pendingRequestRef:Q,clearAgentRunState:L,hasConnectedOnceRef:K,viewStateRef:F,refreshTimeline:B,refreshAgentStatus:U,refreshQueueState:E,refreshContextUsage:D}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),V({text:"",totalLines:0}),q(null),Q.current=null,L();return}if(!K.current){if(K.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),V({text:"",totalLines:0}),q(null),Q.current=null,L(),R6($))return;if(gj(F.current))B();U(),E(),D();return}if(gj(F.current))B();U(),E(),D()}function sK(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:V}=_,q=gj($.current);if(j){if(q)G();Z(),X(),Y(),V();return}if(q)G();X(),Y(),V()}function XM(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function aK(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:V,getAgentContext:q,setContextUsage:Q,getAutoresearchStatus:L,setExtensionStatusPanels:K,setPendingExtensionPanelActions:F,getAgentStatus:B,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:D,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:I,setAgentStatus:x,setAgentDraft:A,setAgentPlan:M,setAgentThought:W,setPendingRequest:y,setActiveTurn:w,noteAgentActivity:J,clearLastActivityFlag:P,isAgentRunningRef:f,currentTurnIdRef:b,silentRecoveryRef:c,silenceRefreshMs:r,lastAgentEventRef:e,lastSilenceNoticeRef:m,silenceWarningMs:_0,silenceFinalizeMs:E0,isCompactionStatus:Z0,serverVersionContext:$0,setConnectionStatus:V0,setStateAccessFailed:N0,setPendingRequestForConnection:h,hasConnectedOnceRef:j0}=_,Q0=R(()=>{return A$({kind:"queue-state",chatJid:$,run:async()=>{return await vK({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:V}),null}})},[j,V,$,Z,X,G,Y]),O0=R(async()=>{await A$({kind:"context-usage",chatJid:$,run:async()=>{return await mK({currentChatJid:$,activeChatJidRef:j,getAgentContext:q,setContextUsage:Q}),null}})},[j,$,q,Q]),a=R(async()=>{await A$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await cK({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:L,setExtensionStatusPanels:K,setPendingExtensionPanelActions:F}),null}})},[j,$,L,K,F]),X0=R(async()=>{return await A$({kind:"agent-status",chatJid:$,run:async()=>{return await QK({currentChatJid:$,getAgentStatus:B,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:D,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:I,setAgentStatus:x,setAgentDraft:A,setAgentPlan:M,setAgentThought:W,setPendingRequest:y,setActiveTurn:w,noteAgentActivity:J,clearLastActivityFlag:P,onStateAccessResult:N0})}})},[j,k,H,P,$,I,B,J,z,D,w,A,M,x,W,y,N0,O,E,U]),W0=R(async()=>{return await LK({isAgentRunningRef:f,pendingRequestRef:z,currentTurnIdRef:b,silentRecoveryRef:c,silenceRefreshMs:r,viewStateRef:E,refreshTimeline:D,refreshQueueState:Q0,refreshAgentStatus:X0})},[b,f,z,X0,Q0,D,r,c,E]);g(()=>{let u0=XM(_0),G_=setInterval(()=>{KK({isAgentRunningRef:f,pendingRequestRef:z,lastAgentEventRef:e,lastSilenceNoticeRef:m,agentStatusRef:k,silenceWarningMs:_0,silenceFinalizeMs:E0,silenceRefreshMs:r,isCompactionStatus:Z0,setAgentStatus:x,reconcileSilentTurn:W0})},u0);return()=>clearInterval(G_)},[k,f,Z0,e,m,z,W0,x,E0,r,_0]);let P0=R((u0)=>{return oK({serverVersion:u0,...$0})},[$0]),l0=R((u0)=>{if(u0==="connected")N0(!1);iK({currentChatJid:$,status:u0,setConnectionStatus:V0,setAgentStatus:x,setAgentDraft:A,setAgentPlan:M,setAgentThought:W,setPendingRequest:h,pendingRequestRef:z,clearAgentRunState:H,hasConnectedOnceRef:j0,viewStateRef:E,refreshTimeline:D,refreshAgentStatus:X0,refreshQueueState:Q0,refreshContextUsage:O0})},[H,$,j0,z,X0,O0,Q0,D,A,M,x,W,V0,h,N0,E]);return{refreshQueueState:Q0,refreshContextUsage:O0,refreshAutoresearchStatus:a,refreshAgentStatus:X0,handleUiVersionDrift:P0,handleConnectionStatusChange:l0}}k0();function S6(_){return typeof _==="string"}function g6(_){return typeof _==="string"&&_.trim().length>0}function m8(_){if(!g6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function uj(_){if(!Array.isArray(_))return[];return _.filter(($)=>g6($?.chat_jid)&&g6($?.agent_name))}function tK(_){if(!Array.isArray(_))return[];return _.filter(($)=>S6($?.chat_jid)&&S6($?.agent_name))}function eK(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(S6(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!S6(Y?.chat_jid))return Y;let V=G.get(Y.chat_jid);return V?{...Y,...V,is_active:V.is_active??Y.is_active}:Y}),X=S6(j)?j:"";return Z.sort((Y,V)=>{if(Y.chat_jid===X&&V.chat_jid!==X)return-1;if(V.chat_jid===X&&Y.chat_jid!==X)return 1;let q=Boolean(Y.archived_at),Q=Boolean(V.archived_at);if(q!==Q)return q?1:-1;if(Boolean(Y.is_active)!==Boolean(V.is_active))return Y.is_active?-1:1;let L=m8(Y.updated_at)||m8(Y.created_at),K=m8(V.updated_at)||m8(V.created_at);if(L!==K)return K-L;let F=g6(Y.agent_name)?Y.agent_name.trim():"",B=g6(V.agent_name)?V.agent_name.trim():"",U=F.localeCompare(B,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Y.chat_jid).localeCompare(String(V.chat_jid))}),Z}var YM={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function _B(_){if(!_||typeof _!=="object")return YM;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function $B(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function jB(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},V=Y.name||null,q=Y.avatar_url??Y.avatarUrl??Y.avatar??null,Q=!1,L=!1;if(Z&&Z!==Y.name)V=Z,Q=!0;if(X!==void 0){let K=typeof X==="string"?X.trim():null,F=typeof q==="string"?q.trim():null,B=K||null;if(B!==(F||null))q=B,L=!0}if(!Q&&!L)return null;return{agentId:G,nameChanged:Q,avatarChanged:L,resolvedName:V,resolvedAvatar:q}}function GB(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function ZB(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,V=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===V)return _;return{name:X,avatar_url:Y,avatar_background:V}}async function YB(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(YY(X));let Y=X?.user||{};G((q)=>GB(q,Y));let V=$B(X?.agents);Z(V.name,V.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function VB(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=jB($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let q={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)q.name=X.resolvedName;if(X.avatarChanged)q.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:q}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function qB(_){let{payload:$,setUserProfile:j}=_;j((G)=>ZB(G,$))}function XB(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function QB(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:V}=_;if($&&typeof $==="object")Y?.((Q)=>XB(Q,$)?Q:$),V?.(!0);let q=_B($);if(q.hasModel)j((Q)=>Object.is(Q,q.model)?Q:q.model);if(q.hasThinkingLevel){let Q=q.thinkingLevelLabel??q.thinkingLevel;G((L)=>Object.is(L,Q)?L:Q)}if(q.hasSupportsThinking)Z((Q)=>Q===q.supportsThinking?Q:q.supportsThinking);if(q.hasProviderUsage)X((Q)=>XB(Q,q.providerUsage)?Q:q.providerUsage)}async function LB(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[V,q]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let Q=uj(V?.chats),L=uj(q?.chats),K=eK(Q,L,Y);return X(K),K}catch{if(Z.current!==Y)return[];return X([]),[]}}async function KB(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(tK(Z?.chats))}catch{G([])}}function BB(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),TK($))Y()}function NB(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,V=$("sidebarWidth",null),q=Number.isFinite(V)?Math.min(Math.max(Number(V),Z),X):Y;if(j.current=q,G)G.style.setProperty("--sidebar-width",`${q}px`);return q}async function FB(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:V,setPosts:q,setHasMore:Q,scrollToBottom:L,isCancelled:K,scheduleRaf:F=(O)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(O);return}setTimeout(O,0)},scheduleTimeout:B=(O,I)=>{setTimeout(O,I)},onTimelineLoadStart:U,onTimelineDataReady:E,onTimelineFirstPaint:D,onTimelineError:H}=_,k=(O)=>{if(K())return;F(()=>{if(K())return;F(()=>{if(K())return;D?.(O)})})},z=()=>{if(K())return;F(()=>{if(K())return;B(()=>{if(K())return;L()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Y($),K())return;E?.({mode:"hashtag",hashtag:$}),k({mode:"hashtag"})}catch(O){if(K())return;throw H?.(O,{mode:"hashtag",hashtag:$}),O}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let O=await V(j,50,0,Z,G,X);if(K())return;q(Array.isArray(O?.results)?O.results:[]),Q(!1),E?.({mode:"search",resultCount:Array.isArray(O?.results)?O.results.length:0}),k({mode:"search"})}catch(O){if(K())return;H?.(O,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",O),q([]),Q(!1)}return}U?.({mode:"timeline"});try{if(await Y(),K())return;E?.({mode:"timeline"}),k({mode:"timeline"}),z()}catch(O){if(K())return;H?.(O,{mode:"timeline"}),console.error("Failed to load timeline:",O)}}V6();M_();function VM(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:V=60000,scheduleInterval:q=(K,F)=>setInterval(K,F),clearScheduledInterval:Q=(K)=>clearInterval(K)}=_;if(Y)$();let L=q(()=>{j(),G(),Z(),X()},V);return()=>{Q(L)}}function qM(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:V=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:V}),G(),Z(),X(),Y()}function QM(_){let $=WK(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;OK({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>p$(10,null,j))})}function UB(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:V,currentChatJid:q,currentRootChatJid:Q,getAgentModels:L,getAgentContext:K,getActiveChatAgents:F,getChatBranches:B,activeChatJidRef:U,setActiveChatAgents:E,setCurrentChatBranches:D,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:I,setHasLoadedAgentModels:x,agentsRef:A,refreshQueueState:M,refreshContextUsage:W,refreshAutoresearchStatus:y,setContextUsage:w,setExtensionWorkingState:J}=_,P=R(async()=>{await YB({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);g(()=>{P(),NB({readStoredNumber:X,sidebarWidthRef:Y,shellElement:V.current,maxWidth:H6(Number.POSITIVE_INFINITY)})},[V,P,X,Y]);let f=R(($0)=>{QB({payload:$0,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:I,setHasLoadedAgentModels:x})},[H,O,k,I,x,z]),b=R(()=>T2("thread-switch",q),[q]),c=R(()=>{return A$({kind:"model-state",chatJid:q,run:async()=>{let $0=b();if($0)X1($0,"runtime-hydration-start",{phase:"model-state"});let V0=q;try{let[h,j0]=await Promise.all([(async()=>{let O0=$0||b();if(O0)X1(O0,"model-request-start",{chatJid:V0});let a=await L(V0);if(O0)X1(O0,"model-request-ready",{chatJid:V0,hasCurrent:Boolean(a?.current),modelCount:Array.isArray(a?.models)?a.models.length:0});return a})(),K(V0).catch(()=>null)]);if(U.current&&U.current!==V0)return null;f(h);let Q0=G4(j0);if(Q0&&Q0.percent!=null)w((O0)=>u4(O0,Q0)?O0:Q0),C5(V0,Q0)}catch{if(U.current&&U.current!==V0)return null;f(null)}let N0=$0||b();if(N0)X1(N0,"runtime-hydration-ready",{chatJid:q}),w2(N0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:q});return null}})},[U,f,q,K,L,b,w]);g(()=>{dK({chatJid:q}),H(null),k(null),z(!1),O(null),x(!1),I(null),J({message:null,indicator:null,visible:!0});let $0=bK(q);if($0)w($0);else w(null);c()},[q,c,H,O,k,I,w,J,x,z]);let r=R(($0)=>{VB({payload:$0,agentsRef:A,setAgents:j,applyBranding:Z})},[A,Z,j]),e=R(($0)=>{qB({payload:$0,setUserProfile:G})},[G]),m=R(($0)=>{let V0=Boolean($0?.prewarmRecent),N0=Number.isFinite($0?.prewarmLimit)?Number($0?.prewarmLimit):5;return A$({kind:"active-chat-agents",chatJid:q,run:async()=>{let h=b(),j0=await LB({currentChatJid:q,getActiveChatAgents:async()=>{if(h)X1(h,"active-chat-list-request-start",{chatJid:q});let Q0=await F(q);if(h)X1(h,"active-chat-list-request-ready",{rowCount:Array.isArray(Q0?.chats)?Q0.chats.length:0});return Q0},getChatBranches:async(Q0,O0)=>{if(h)X1(h,"branch-list-request-start",{rootChatJid:Q0});let a=await B(Q0,O0);if(h)X1(h,"branch-list-request-ready",{rootChatJid:Q0,rowCount:Array.isArray(a?.chats)?a.chats.length:0});return a},activeChatJidRef:U,setActiveChatAgents:E});if(V0)QM({chats:j0,currentChatJid:q,prewarmLimit:N0});return null}})},[U,q,F,B,b,E]),_0=R(()=>{return A$({kind:"current-chat-branches",chatJid:q,run:async()=>{let $0=b();return await KB({currentRootChatJid:Q,getChatBranches:async(V0,N0)=>{if($0)X1($0,"root-branch-request-start",{rootChatJid:V0});let h=await B(V0,N0);if($0)X1($0,"root-branch-request-ready",{rootChatJid:V0,rowCount:Array.isArray(h?.chats)?h.chats.length:0});return h},setCurrentChatBranches:D}),null}})},[q,Q,B,b,D]),E0=R(()=>{hK({refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:M,refreshContextUsage:W,refreshAutoresearchStatus:y})},[m,y,W,_0,c,M]),Z0=R(()=>{qM({refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:M,refreshContextUsage:W,refreshAutoresearchStatus:y,prewarmLimit:5})},[m,y,W,_0,c,M]);return g(()=>VM({refreshModelAndQueueState:E0,refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:M,runImmediately:!1}),[m,_0,E0,c,M]),g(()=>{let $0=setInterval(()=>{c()},5000);return()=>clearInterval($0)},[c]),{updateAgentProfile:r,updateUserProfile:e,applyModelState:f,refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshModelAndQueueState:E0,refreshPostPaintThreadState:Z0}}k0();function LM(_,$){let j=N1(_);return Boolean(_&&j===$)}function f5(_,$,j){if(!LM(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function DB(_,$){return{..._,openedAt:$}}function HB(_){let $=N1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function EB(_,$,j){let G=Vq({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=N1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=N1(_),Y=Boolean(Z&&X&&Z===X),V={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:V,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function WB(_,$){if(!_||_?.source!=="live")return _||null;let j=N1($),G=N1(_);if(j&&G&&j!==G)return _;return null}function OB(_,$,j){return f5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function bj(_,$,j){if(j.errorMessage)return f5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return f5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function zB(_,$,j){return f5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function JB(_,$,j){return f5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function AB(_,$,j){return f5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}V6();function KM(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function kB(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function MB(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:V,setPosts:q,setHasMore:Q,scrollToBottom:L,setExtensionStatusPanels:K,setPendingExtensionPanelActions:F,setExtensionWorkingState:B,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:E,snapshotCurrentChatPaneState:D,restoreChatPaneState:H,dismissedQueueRowIdsRef:k,refreshAgentStatus:z,viewStateRef:O,refreshTimeline:I,refreshModelAndQueueState:x,refreshPostPaintThreadState:A,setFloatingWidget:M,dismissedLiveWidgetKeysRef:W}=_;g(()=>{KM({setExtensionStatusPanels:K,setPendingExtensionPanelActions:F,setExtensionWorkingState:B})},[$,K,F,B]),g(()=>{let J=!1,P=WX("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return X1(P,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),FB({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:V,setPosts:q,setHasMore:Q,scrollToBottom:L,isCancelled:()=>J,onTimelineLoadStart:(f)=>{X1(P,"timeline-load-start",f||null)},onTimelineDataReady:(f)=>{X1(P,"timeline-data-ready",f||null)},onTimelineFirstPaint:(f)=>{X1(P,"timeline-first-paint",f||null),w2(P,["runtime-hydration-ready","timeline-first-paint"],"settled",f||null),kB({refreshAgentStatus:z,refreshPostPaintThreadState:A})},onTimelineError:(f,b)=>{OX(P,f,"timeline-load-failed",b||null),kB({refreshAgentStatus:z,refreshPostPaintThreadState:A})}}),()=>{J=!0,zX(P,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,L,V,Q,q,z,A]),g(()=>{let J=U.current||$;E.current.set(J,D())},[E,$,U,D]),g(()=>{let J=U.current||$;if(J===$)return;E.current.set(J,D()),U.current=$,k.current.clear(),H(E.current.get($)||null)},[E,$,k,U,H,D]);let y=R(()=>{lK({viewStateRef:O,refreshTimeline:I,refreshModelAndQueueState:x})},[x,I,O]),w=R((J,P="streaming")=>{let f=new Date().toISOString();M((b)=>EB(b,J,{fallbackStatus:P,currentChatJid:$,dismissedSessionKeys:W.current,updatedAt:f}))},[$,W,M]);return{refreshCurrentView:y,applyLiveGeneratedWidgetUpdate:w}}k0();k0();M_();function BM({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!W6(),V=Z.visibilityState&&Z.visibilityState!=="visible",q=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return V=!0,!0;return!1},Q=()=>{if(q())return;if(V)V=!1,X(),$?.()},L=()=>{if(q())return;if(V){Q();return}if(Y)_.reconnectIfNeeded()},K=()=>{Q()},F=()=>{Q()};return G.addEventListener("focus",L),G.addEventListener("pageshow",K),Z.addEventListener("visibilitychange",F),()=>{G.removeEventListener("focus",L),G.removeEventListener("pageshow",K),Z.removeEventListener("visibilitychange",F)}}function yB({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=u(_);X.current=_;let Y=u($);Y.current=$;let V=u(j);V.current=j;let q=u(G);q.current=G,g(()=>{let Q=new S2((K,F)=>X.current(K,F),(K)=>Y.current(K),{chatJid:Z});Q.connect();let L=BM({sse:Q,onWake:()=>q.current?.()});return()=>{L(),Q.disconnect()}},[Z])}$6();l2();function b4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function R5(_,$){return Boolean(_)&&!Boolean($)}function TB(_,$){return _||$||null}function wB(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function S5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=j4(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function vj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function NM(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function xB(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:NM($,j),panelKey:typeof $?.key==="string"?$.key:""}}function FM(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function IB(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=FM($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function CB(_,$){if(_!=="extension_ui_status")return null;if($?.key!=="context_usage")return null;let j=typeof $?.text==="string"?$.text.trim():"";if(!j)return null;try{let G=JSON.parse(j);if(!G||typeof G!=="object")return null;let Z=G,X=Z.tokens==null?null:Number(Z.tokens),Y=Z.contextWindow==null?null:Number(Z.contextWindow),V=Z.percent==null?null:Number(Z.percent);return{tokens:Number.isFinite(X)?X:null,contextWindow:Number.isFinite(Y)?Y:null,percent:Number.isFinite(V)?V:null,estimated:Z.estimated===!0,source:typeof Z.source==="string"?Z.source:null,phase:typeof Z.phase==="string"?Z.phase:null}}catch{return null}}function PB(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var UM=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function fB(_){return UM.has(String(_||"").trim())}function DM(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function c8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(DM(_),{detail:G})),!0}function RB(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function SB(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function gB(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:V,pendingRequestRef:q,draftBufferRef:Q,thoughtBufferRef:L,previewResyncPendingRef:K,previewResyncGenerationRef:F,steerQueuedTurnIdRef:B,thoughtExpandedRef:U,draftExpandedRef:E,draftThrottleRef:D,thoughtThrottleRef:H,viewStateRef:k,followupQueueItemsRef:z,dismissedQueueRowIdsRef:O,scrollToBottomRef:I,hasMoreRef:x,loadMoreRef:A,lastAgentResponseRef:M,wasAgentActiveRef:W,setActiveTurn:y,applyLiveGeneratedWidgetUpdate:w,setFloatingWidget:J,clearLastActivityFlag:P,handleUiVersionDrift:f,setAgentStatus:b,setAgentDraft:c,setAgentPlan:r,setAgentThought:e,setPendingRequest:m,clearAgentRunState:_0,getAgentStatus:E0,noteAgentActivity:Z0,showLastActivity:$0,refreshTimeline:V0,refreshModelAndQueueState:N0,refreshActiveChatAgents:h,refreshCurrentChatBranches:j0,notifyForFinalResponse:Q0,setContextUsage:O0,refreshContextUsage:a,refreshQueueState:X0,setFollowupQueueItems:W0,clearQueuedSteerStateIfStale:P0,setSteerQueuedTurnId:l0,applyModelState:u0,getAgentContext:G_,setExtensionStatusPanels:h0,setPendingExtensionPanelActions:s0,setExtensionWorkingState:f0,refreshActiveEditorFromWorkspace:o0,showIntentToast:v0,removeStalledPost:t0,setPosts:i0,preserveTimelineScrollTop:F_,openEditor:Z_}=j,{turnId:m0,isCurrentChatEvent:z0}=RB(_,$,G);if(z0)Z($),X($);if(_==="ui_theme"){U5($);return}if(_==="ui_meters"){Q9($);return}if(_==="ui_open_tab"){let D0=typeof $?.path==="string"?$.path.trim():"",g0=typeof $?.label==="string"?$.label.trim():void 0;if(D0==="piclaw://settings"){let I0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:I0?{section:I0}:void 0}));return}if(D0&&typeof Z_==="function")Z_(D0,g0?{label:g0}:void 0);return}let V_=wB(_);if(V_.kind==="update"){if(!z0)return;if(V_.shouldAdoptTurn&&R5(m0,Y.current))y(m0);w($,V_.fallbackStatus||"streaming");return}if(V_.kind==="close"){if(!z0)return;J((D0)=>WB(D0,$));return}if(_?.startsWith("agent_")&&!SB(_))P();if(_==="connected"){if(f($?.app_asset_version))return;if($?.ui_theme){let I0=$.ui_theme.theme||"default",r0=$.ui_theme.tint||null;U5({theme:I0,tint:r0})}if($?.ui_meters)Q9($.ui_meters);let D0=F.current+1;if(F.current=D0,K.current=!0,Q.current="",L.current="",b(null),c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0}),f0({message:null,indicator:null,visible:!0}),m(null),q.current=null,_0(),R6(G)){if(F.current===D0)K.current=!1;return}let g0=G;if(E0(g0).then((I0)=>{if(V.current!==g0)return;if(!I0||I0.status!=="active"||!I0.data)return;let r0=I0.data,z_=f8(r0);if(z_)y(z_);b(r0),Z0({clearSilence:!0,atMs:n$(r0)??Date.now()}),$0(r0);let Q_=I5(I0.thought);if(Q_)L.current=Q_.text,e(Q_);let U_=I5(I0.draft);if(U_)Q.current=U_.text,c(U_)}).catch((I0)=>{console.warn("Failed to fetch agent status:",I0)}).finally(()=>{if(F.current===D0)K.current=!1}),a1(k.current))V0();N0();return}if(_==="agent_status"){if(!z0){if($?.type==="done"||$?.type==="error")h(),j0();return}let D0=G4($.context_usage);if(D0&&D0.percent!=null)O0((g0)=>u4(g0,D0)?g0:D0),C5(G,D0);if($.type==="context_usage")return;if($.type==="done"||$.type==="error"){if(b4(m0,Y.current))return;if($.type==="done"){if(Q0(m0||Y.current),a1(k.current))V0()}if(a(),W.current=!1,_0(),O.current.clear(),h(),N0(),c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0}),f0({message:null,indicator:null,visible:!0}),m(null),$.type==="error")b({type:"error",title:$.title||"Agent error"}),setTimeout(()=>b(null),8000);else b(null)}else{if(m0)y(m0);if(Z0({running:!0,clearSilence:!0,atMs:n$($)??Date.now()}),$.type==="thinking")Q.current="",L.current="",c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0});b($)}return}if(_==="agent_steer_queued"){if(!z0)return;if(b4(m0,Y.current))return;let D0=TB(m0,Y.current);if(!D0)return;B.current=D0,l0(D0);return}if(_==="agent_followup_queued"){if(!z0)return;W0((D0)=>yK(D0,$)),X0();return}if(_==="agent_followup_consumed"){if(!z0)return;let D0=S5(z.current,$);if(D0)P0(D0.remainingQueueCount),W0((g0)=>j4(g0,D0.rowId).items);if(X0(),a1(k.current))V0();return}if(_==="agent_followup_removed"){if(!z0)return;let D0=S5(z.current,$);if(D0)O.current.add(D0.rowId),P0(D0.remainingQueueCount),W0((g0)=>j4(g0,D0.rowId).items);X0();return}if(_==="agent_draft_delta"){if(!z0)return;if(K.current)return;if(b4(m0,Y.current))return;if(R5(m0,Y.current))y(m0);Z0({running:!0,clearSilence:!0}),Q.current=GK(Q.current,$);let D0=Date.now();if(!D.current||D0-D.current>=100){D.current=D0;let g0=Q.current;if(E.current)c((I0)=>Ij(g0,I0));else c(R8(g0,null))}return}if(_==="agent_draft"){if(!z0)return;if(K.current)return;if(b4(m0,Y.current))return;if(R5(m0,Y.current))y(m0);Z0({running:!0,clearSilence:!0});let D0=$.text||"",g0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")r((I0)=>jK(I0,D0,g0));else if(!E.current)Q.current=D0,c(R8(D0,$.total_lines));return}if(_==="agent_thought_delta"){if(!z0)return;if(K.current)return;if(b4(m0,Y.current))return;if(R5(m0,Y.current))y(m0);Z0({running:!0,clearSilence:!0}),L.current=ZK(L.current,$);let D0=Date.now();if(U.current&&(!H.current||D0-H.current>=100)){H.current=D0;let g0=L.current;e((I0)=>Ij(g0,I0))}return}if(_==="agent_thought"){if(!z0)return;if(K.current)return;if(b4(m0,Y.current))return;if(R5(m0,Y.current))y(m0);Z0({running:!0,clearSilence:!0});let D0=$.text||"";if(!U.current)L.current=D0,e(R8(D0,$.total_lines));return}if(_==="model_changed"){if(!z0)return;u0($);let D0=G;G_(D0).then((g0)=>{if(V.current!==D0)return;let I0=G4(g0);if(I0&&I0.percent!=null)O0((r0)=>u4(r0,I0)?r0:I0),C5(D0,I0)}).catch(()=>{if(V.current!==D0)return});return}let d0=xB(_,$,G);if(d0.isStatusPanelWidgetEvent){if(d0.eventChatJid!==G)return;if(!d0.panelKey)return;if(h0((D0)=>PK(D0,$)),fK($))s0((D0)=>u8(D0,d0.panelKey));c8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));o0($?.updates);return}if(fB(_)){if(_==="extension_ui_title"){h(),j0(),c8(_,$);return}if(!z0)return;let D0=CB(_,$);if(D0&&D0.percent!=null)O0((I0)=>u4(I0,D0)?I0:D0);f0((I0)=>{return IB(I0,_,$)??I0}),c8(_,$);let g0=PB(_,$);if(g0)v0(g0.title,g0.detail,g0.kind,g0.durationMs);return}let H_=a1(k.current);if(_==="agent_response"){if(!z0)return;f0({message:null,indicator:null,visible:!0}),t0(),M.current={post:$,turnId:Y.current}}if(XK(_,z0,H_))i0((D0)=>YK(D0,$)),I.current?.();if(_==="interaction_updated"){if(!Cj(z0,H_))return;i0((D0)=>VK(D0,$))}if(_==="interaction_deleted"){if(!Cj(z0,H_))return;let D0=$?.ids||[];if(D0.length){if(F_(()=>{i0((g0)=>qK(g0,D0))}),x.current)A.current?.({preserveScroll:!0,preserveMode:"top"})}}}function HM(_){return _?15000:60000}function uB(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:V,updateUserProfile:q,currentTurnIdRef:Q,activeChatJidRef:L,pendingRequestRef:K,draftBufferRef:F,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:D,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:I,followupQueueItemsRef:x,dismissedQueueRowIdsRef:A,scrollToBottomRef:M,hasMoreRef:W,loadMoreRef:y,lastAgentResponseRef:w,wasAgentActiveRef:J,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:b,clearLastActivityFlag:c,handleUiVersionDrift:r,setAgentStatus:e,setAgentDraft:m,setAgentPlan:_0,setAgentThought:E0,setPendingRequest:Z0,clearAgentRunState:$0,getAgentStatus:V0,noteAgentActivity:N0,showLastActivity:h,refreshTimeline:j0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:O0,refreshCurrentChatBranches:a,notifyForFinalResponse:X0,setContextUsage:W0,refreshContextUsage:P0,refreshQueueState:l0,setFollowupQueueItems:u0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:h0,applyModelState:s0,getAgentContext:f0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:v0,setExtensionWorkingState:t0,refreshActiveEditorFromWorkspace:i0,showIntentToast:F_,removeStalledPost:Z_,setPosts:m0,preserveTimelineScrollTop:z0,openEditor:V_,finalizeStalledResponse:d0,connectionStatus:H_,agentStatus:D0,refreshAgentStatus:g0,refreshAutoresearchStatus:I0}=_,r0=R((Q_,U_)=>{gB(Q_,U_,{currentChatJid:$,updateAgentProfile:V,updateUserProfile:q,currentTurnIdRef:Q,activeChatJidRef:L,pendingRequestRef:K,draftBufferRef:F,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:D,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:I,followupQueueItemsRef:x,dismissedQueueRowIdsRef:A,scrollToBottomRef:M,hasMoreRef:W,loadMoreRef:y,lastAgentResponseRef:w,wasAgentActiveRef:J,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:b,clearLastActivityFlag:c,handleUiVersionDrift:r,setAgentStatus:e,setAgentDraft:m,setAgentPlan:_0,setAgentThought:E0,setPendingRequest:Z0,clearAgentRunState:$0,getAgentStatus:V0,noteAgentActivity:N0,showLastActivity:h,refreshTimeline:j0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:O0,refreshCurrentChatBranches:a,notifyForFinalResponse:X0,setContextUsage:W0,refreshContextUsage:P0,refreshQueueState:l0,setFollowupQueueItems:u0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:h0,applyModelState:s0,getAgentContext:f0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:v0,setExtensionWorkingState:t0,refreshActiveEditorFromWorkspace:i0,showIntentToast:F_,removeStalledPost:Z_,setPosts:m0,preserveTimelineScrollTop:z0,openEditor:V_})},[L,f,s0,$0,c,G_,$,Q,A,F,k,z,x,f0,V0,r,W,w,y,N0,X0,K,z0,E,U,O0,i0,P0,a,Q0,l0,j0,Z_,M,P,m,_0,e,E0,W0,o0,t0,b,u0,v0,Z0,m0,h0,F_,h,D,B,H,O,V,q,I,J,V_]);g(()=>{if(typeof window>"u")return;let Q_=window.__PICLAW_TEST_API||{};return Q_.emit=r0,Q_.reset=()=>{Z_(),$0(),e(null),m({text:"",totalLines:0}),_0(""),E0({text:"",totalLines:0}),t0({message:null,indicator:null,visible:!0}),Z0(null)},Q_.finalize=()=>d0(),window.__PICLAW_TEST_API=Q_,()=>{if(window.__PICLAW_TEST_API===Q_)window.__PICLAW_TEST_API=void 0}},[$0,d0,r0,Z_,m,_0,e,E0,t0,Z0]),yB({handleSseEvent:r0,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),g(()=>{if(!j||j.length===0)return;let Q_=location.hash;if(!Q_||!Q_.startsWith("#msg-"))return;let U_=Q_.slice(5);G(U_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let z_=D0!==null;g(()=>{if(H_!=="connected")return;let Q_=HM(z_),U_=setInterval(()=>{sK({viewStateRef:I,isAgentActive:z_,refreshTimeline:j0,refreshQueueState:l0,refreshAgentStatus:g0,refreshContextUsage:P0,refreshAutoresearchStatus:I0})},Q_);return()=>clearInterval(U_)},[H_,z_,g0,I0,P0,l0,j0,I]),g(()=>{return w8(()=>{g0(),P0(),l0(),I0()})},[g0,I0,P0,l0])}function EM(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setStateAccessFailed:_.setStateAccessFailed,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function WM(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function OM(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function zM(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function bB(_){let $=aK(EM(_)),j=UB(WM({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=MB(OM({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return uB(zM({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}k0();var vB="piclaw:pane-host-transfer:",JM=300000;function mB(_){try{return _?.localStorage??null}catch{return null}}function cB(_){return typeof _==="string"?_.trim():""}function hB(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function AM(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function kM(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function MM(_,$=globalThis,j=Date.now()){let G=mB($),Z=cB(_?.path),X=hB(_?.payload);if(!G||!Z||!X)return null;let Y=AM(j);try{return G.setItem(`${vB}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function mj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=mB($);if(!G||!Z)return null;let X=`${vB}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;kM(Z,X);try{let V=JSON.parse(Y),q=typeof V?.capturedAt==="number"&&Number.isFinite(V.capturedAt)?V.capturedAt:j;if(q+JM<j)return null;let Q=cB(V?.path),L=hB(V?.payload);if(!Q||!L)return null;return{path:Q,payload:L,capturedAt:q}}catch{return null}}function h8(_,$=globalThis,j=Date.now()){let G=MM(_,$,j);return G?{pane_transfer:G}:null}function lB(_=globalThis,$=Date.now()){let j=Z5("pane_transfer",_);return mj(j,_,$)}function v4(_){return typeof _==="string"?_.trim():""}function yM(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function cj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(yM($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function TM(_){try{return _?.(),!0}catch($){return!1}}function g5(_,$=typeof window<"u"?window:null){let j=cj($),G=v4(_?.panePath),Z=v4(_?.paneInstanceId),X=v4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function pB(_,$=typeof window<"u"?window:null){let j=cj($),G=v4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function rB(_,$,j,G){let Z=cj(_),X=v4($?.panePath),Y=v4($?.paneInstanceId),V=v4($?.paneWindowId);if(!Z||!X||!Y||!V)return null;let q=Z.get(V)||null;if(!q)return null;if(q.panePath!==X||q.paneInstanceId!==Y)return null;if(typeof q.instance?.moveHost!=="function")return null;if(!await q.instance.moveHost(j,G))return null;return Z.delete(V),TM(q.releaseSourceHost),q.instance}d2();function u6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function nB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(L)=>{let K=L?.detail?.path,F=typeof L?.detail?.label==="string"&&L.detail.label.trim()?L.detail.label.trim():void 0;if(K)G?.(K,F)},V=(L)=>{let K=L?.detail?.path,F=typeof L?.detail?.label==="string"&&L.detail.label.trim()?L.detail.label.trim():void 0;if(K)Z?.(K,F)},q=(L)=>{let K=L?.detail?.path,F=typeof L?.detail?.label==="string"&&L.detail.label.trim()?L.detail.label.trim():void 0;if(K)X?.(K,F)},Q=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return Q.forEach((L)=>j.addEventListener(L,Y)),j.addEventListener("html-viewer:edit-source",V),j.addEventListener("pane:popout",q),()=>{Q.forEach((L)=>j.removeEventListener(L,Y)),j.removeEventListener("html-viewer:edit-source",V),j.removeEventListener("pane:popout",q)}}function dB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(u6(Z?.target))return;if(!J$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function oB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(V)=>{if(J$(V,"toggleZenMode")){V.preventDefault?.(),G?.();return}if(u6(V?.target))return;if(V?.key==="Escape"&&X())V.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function iB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(u6(Z?.target))return;if(J$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(J$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function sB(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(u6(G?.target))return;if(!J$(G,"openSettings"))return;G.preventDefault(),i1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function aB(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(u6(G?.target))return;if(!J$(G,"openHelp"))return;G.preventDefault(),i1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function tB(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:V,now:q=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let Q=X?.()||null;if(!Q)return!1;if(G||q<Number(Z||0)||Q.inFlight||q<Number(Q.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),V?.(!0),!0}function eB(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function _N(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:V,setIsRenamingBranch:q,renameChatBranch:Q,refreshActiveChatAgents:L,refreshCurrentChatBranches:K,navigate:F,baseHref:B,chatOnlyMode:U,showIntentToast:E,closeRenameForm:D,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let k=H(),z=V?.()||null;if(!z)return!1;if(X.current||k<Number(Y.current||0)||z.inFlight||k<Number(z.cooldownUntil||0))return!1;X.current=!0,z.inFlight=!0,q?.(!0);try{let O=j.agent_name||"",I=Z8(G,O);if(!I.canSubmit)return E?.("Could not rename session",I.message||"Enter a valid session handle.","warning",4000),!1;let x=I.normalized||O,A=await Q(j.chat_jid,{agentName:x});await Promise.allSettled([L?.(),K?.()]);let M=A?.branch?.agent_name||x||O;return E?.("Session renamed",`@${M}`,"info",3500),D?.(),!0}catch(O){let I=O instanceof Error?O.message:String(O||"Could not rename session."),x=/already in use/i.test(I||"")?`${I} Switch to or restore that existing session from the session manager.`:I;return E?.("Could not rename session",x||"Could not rename session.","warning",5000),!1}finally{X.current=!1,q?.(!1);let O=H()+FL;Y.current=O;let I=V?.()||null;if(I)I.inFlight=!1,I.cooldownUntil=O}}async function $N(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:V,refreshActiveChatAgents:q,refreshCurrentChatBranches:Q,showIntentToast:L,baseHref:K,chatOnlyMode:F,navigate:B,confirm:U=(M)=>window.confirm(M)}=_;if(!$)return!1;let E=typeof j==="string"&&j.trim()?j.trim():"",D=typeof G==="string"&&G.trim()?G.trim():"",H=E||Z?.chat_jid||D;if(!H)return L?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let k=(Z?.chat_jid===H?Z:null)||X.find((M)=>M?.chat_jid===H)||Y.find((M)=>M?.chat_jid===H)||null,z=k?.chat_jid===(k?.root_chat_jid||k?.chat_jid),O=Boolean(z&&H==="web:default"),I=Boolean(z&&X.some((M)=>{let W=typeof M?.chat_jid==="string"?M.chat_jid.trim():"",y=typeof M?.root_chat_jid==="string"?M.root_chat_jid.trim():W;return W&&W!==H&&y===H&&!M?.archived_at}));if(O)return L?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(I)return L?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let x=`@${k?.agent_name||H}${k?.chat_jid?` — ${k.chat_jid}`:""}`;if(!U(z?`Archive ${x}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${x}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await V(H),await Promise.allSettled([q?.(),Q?.()]);let M=z?"web:default":k?.root_chat_jid||"web:default";L?.(z?"Session archived":"Branch pruned",`${x} has been archived.`,"info",3000);let W=w1(K,M,{chatOnly:F});return B?.(W),!0}catch(M){let W=M instanceof Error?M.message:String(M||"Could not prune branch.");return L?.("Could not prune branch",W||"Could not prune branch.","warning",5000),!1}}async function jN(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:V=(E)=>window.confirm(E)}=_,q=typeof $==="string"?$.trim():"";if(!q||typeof j!=="function")return!1;let Q=G.find((E)=>E?.chat_jid===q)||null;if(!Boolean(Q?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let K=Boolean(Q?.chat_jid&&Q.chat_jid===(Q.root_chat_jid||Q.chat_jid)),F=`@${Q?.agent_name||q}`;if(!V(`Permanently delete ${F}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${K?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(q),await Promise.allSettled([Z?.(),X?.()]),Y?.(K?"Archived session deleted":"Archived branch deleted",`${F} was permanently deleted.`,"info",4000),!0}catch(E){let D=E instanceof Error?E.message:String(E||`Could not permanently delete archived ${K?"session":"branch"}.`);return Y?.("Could not delete branch",D||`Could not permanently delete archived ${K?"session":"branch"}.`,"warning",5000),!1}}async function GN(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:V,chatOnlyMode:q,navigate:Q}=_,L=typeof $==="string"?$.trim():"";if(!L||typeof j!=="function")return!1;try{let K=G.find((H)=>H?.chat_jid===L)||null,F=await j(L);await Promise.allSettled([Z?.(),X?.()]);let B=F?.branch,U=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():L,E=gV(K?.agent_name,B?.agent_name,U);Y?.("Branch restored",E,"info",4200);let D=w1(V,U,{chatOnly:q});return Q?.(D),!0}catch(K){let F=K instanceof Error?K.message:String(K||"Could not restore branch.");return Y?.("Could not restore branch",F||"Could not restore branch.","warning",5000),!1}}async function ZN(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let V=await j($);if(Y())return!1;let q=V?.branch,Q=typeof q?.chat_jid==="string"&&q.chat_jid.trim()?q.chat_jid.trim():null;if(!Q)throw Error("Branch fork did not return a chat id.");let L=w1(X,Q,{chatOnly:!0});return Z?.(L,{replace:!0}),!0}catch(V){if(Y())return!1;return G?.({status:"error",message:D4(V)}),!1}}function YN(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let V=typeof j==="string"?j.trim():"";if(!V||V===G)return!1;let q=w1(X,V,{chatOnly:Z});return Y?.(q),!0}function wM(_){return typeof _==="string"?_.trim():""}function xM(_){return new Promise(($)=>setTimeout($,_))}async function XN(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function VN(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:V,resolveTab:q,buildEditorPopoutTransfer:Q}=_,L=$===X&&Boolean(q?.($));if($===X&&!L){let E=Z.current;if(await XN(E,$),typeof E?.preparePopoutTransfer!=="function")return null;return await E.preparePopoutTransfer()}let K=()=>wM(V?.()??j),F=K(),B=G.current;if(F!==$)Y?.($);let U=F===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let E=0;E<12;E+=1){if(E>0)await xM(16);else await Promise.resolve();let D=K(),H=G.current,k=D===$,z=H!==B;if(!k||typeof H?.preparePopoutTransfer!=="function")continue;if(F===$||z||E>0){U=H;break}}if(await XN(U,$),typeof U?.preparePopoutTransfer==="function"){let E=await U.preparePopoutTransfer();if(E)return E}return Q?.($)??null}function qN(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,V=Z($);if(V&&!V.dirty){X($);return}if($===j&&G)Y(!1)}function QN(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:V}=_;if(!j||!$||!G)return;if(!Z.current){let q=V("editorWidth",null),Q=Y.current||280,L=Number.isFinite(q)?Number(q):Q;Z.current=E6(L,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let q=V("dockHeight",null);X.current=Number.isFinite(q)?Number(q):200}G.style.setProperty("--dock-height",`${X.current}px`)}M_();async function LN(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function KN(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:V,baseHref:q}=_;if(typeof V==="function")try{let Q=g3(q,$,{chatOnly:j});return V(Q),!0}catch(Q){return Y?.("Could not create branch",D4(Q),"warning",5000),!1}try{let L=(await G($))?.branch,K=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():null;if(!K)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let F=L?.agent_name?`@${L.agent_name}`:K;Y?.("New branch created",`Switched to ${F}.`,"info",2500);let B=w1(q,K,{chatOnly:j});return V?.(B),!0}catch(Q){return Y?.("Could not create branch",D4(Q),"warning",5000),!1}}async function BN(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:V,baseHref:q}=_,Q=String($||"").trim();if(!Q)return!1;try{let F=(await(typeof G==="function"?G:w7)(Q))?.branch,B=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!B)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let U=F?.agent_name?`@${F.agent_name}`:B;Y?.("Root session created",`Switched to ${U}.`,"info",2500);let E=w1(q,B,{chatOnly:j});return V?.(E),!0}catch(L){return Y?.("Could not create root session",D4(L),"warning",5000),!1}}async function NN(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:V,onPaneWindowOpened:q,currentChatJid:Q,baseHref:L}=_;if(!$||j)return!1;let K=typeof G==="string"&&G.trim()?G.trim():"";if(!K)return!1;let F=YZ(K);if(!F)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=P3(F);if(!B)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;f3(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Y?.(K),E=Boolean(U&&Object.keys(U).length>0),D=XZ(L,K,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:Q,params:U});if(R3(B,D),q?.(K,B,U||null),E&&!q)V?.(K);return!0}catch(U){S3(B);let E=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",E,"warning",5000),!1}}async function FN(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:V,setActiveChatAgents:q,setCurrentChatBranches:Q,showIntentToast:L,baseHref:K}=_;if(!$||j)return!1;let F=ZZ(G);if(!F)return L?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(F.mode==="tab"){let U=g3(K,G,{chatOnly:!0});if(!window.open(U,F.target))return L?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let B=P3(F);if(!B)return L?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;f3(B,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await X(G))?.branch,D=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");let H=await LN(()=>Y?.());if(H)q?.(Array.isArray(H?.chats)?H.chats:[]);let k=await LN(()=>V?.(Z));if(k)Q?.(Array.isArray(k?.chats)?k.chats:[]);let z=w1(K,D,{chatOnly:!0});return R3(B,z),!0}catch(U){return S3(B),L?.("Could not open branch window",D4(U),"error",5000),!1}}function IM(_){_(($)=>!$)}function CM(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return YN({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function PM(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:V=typeof window<"u"}=_;return tB({hasWindow:V,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function fM(_){eB(_)}async function RM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await _N({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function SM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await $N({hasWindow:$,baseHref:j,...G})}async function gM(_){await jN(_)}async function uM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await GN({baseHref:j,...G})}function bM(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:V=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:q=ZN}=_;if(!$||!Y)return;let Q=!1;return q({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:V,isCancelled:()=>Q}),()=>{Q=!0}}async function vM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await KN({baseHref:j,...G})}async function mM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await BN({baseHref:j,...G})}async function cM(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:V,editorInstanceRef:q,dockInstanceRef:Q,terminalTabPath:L,tabPaneOverrides:K,buildPaneDetachTransfer:F,registerDetachedPaneWindow:B,dockVisible:U,resolveTab:E,closeTab:D,setDockVisible:H,hasWindow:k=typeof window<"u",baseHref:z=k?window.location.href:"http://localhost/"}=_,O=F?.(j)||null;return await NN({hasWindow:k,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:z,resolveSourceTransfer:async(I)=>{let x=await VN({panePath:I,activateTab:Y,getActiveTabId:()=>$_.getActiveId(),tabStripActiveId:V,editorInstanceRef:q,dockInstanceRef:Q,terminalTabPath:L,resolveTab:E,buildEditorPopoutTransfer:(y)=>{if(!y||y===L)return null;let w=q.current,J=typeof w?.getContent==="function"?w.getContent():void 0,P=typeof w?.isDirty==="function"?w.isDirty():!1,f=K instanceof Map?K.get(y)||null:null,b=$_.getViewState(y)||null;return q2({path:y,content:P?J:void 0,paneOverrideId:f,viewState:b})}}),A=I===L&&!E(I)?Q.current:q.current,M=typeof A?.exportHostTransferState==="function"?A.exportHostTransferState():null,W=M?h8({path:I,payload:M}):null;if(O?.paneInstanceId&&O?.paneWindowId&&A&&I!==L&&M?.kind!=="terminal")g5({panePath:I,paneInstanceId:O.paneInstanceId,paneWindowId:O.paneWindowId,instance:A,releaseSourceHost:()=>{if(I===L){if(Q.current===A)Q.current=null;if(q.current===A)q.current=null;return}if(q.current===A)q.current=null}});return{...x||{},...W||{},...O?.params||{}}},onPaneWindowOpened:B?(I,x,A)=>{B(I,G,x,A)}:void 0,closeSourcePaneIfTransferred:B?void 0:(I)=>{qN({panePath:I,terminalTabPath:L,dockVisible:U,resolveTab:E,closeTab:D,setDockVisible:H})}})}function hM(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=nB}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function lM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await FN({hasWindow:$,baseHref:j,...G})}function pM(_){let{hasWindow:$=typeof window<"u",...j}=_;QN({hasWindow:$,...j})}function UN(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:V,getFormLock:q,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:L,setIsRenamingBranch:K,renameChatBranch:F,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,currentChatBranches:D,activeChatAgents:H,pruneChatBranch:k,purgeChatBranch:z,restoreChatBranch:O,branchLoaderMode:I,branchLoaderSourceChatJid:x,forkChatBranch:A,createRootChatSession:M,setBranchLoaderState:W,currentRootChatJid:y,isWebAppMode:w,getActiveChatAgents:J,getChatBranches:P,setActiveChatAgents:f,setCurrentChatBranches:b,openEditor:c,activateTab:r,tabStripActiveId:e,editorInstanceRef:m,dockInstanceRef:_0,terminalTabPath:E0,tabPaneOverrides:Z0,buildPaneDetachTransfer:$0,registerDetachedPaneWindow:V0,dockVisible:N0,resolveTab:h,closeTab:j0,setDockVisible:Q0,editorOpen:O0,shellElement:a,editorWidthRef:X0,dockHeightRef:W0,sidebarWidthRef:P0,readStoredNumber:l0}=_,u0=R(()=>{IM($)},[$]),G_=R((z0)=>{CM({nextChatJid:z0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),h0=R(()=>{PM({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:V.current,getFormLock:q,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:L})},[X,q,Y,V,L,Q]),s0=R(()=>{fM({setIsRenameBranchFormOpen:L,setRenameBranchNameDraft:Q})},[L,Q]),f0=R(async(z0)=>{await RM({currentBranchRecord:X,nextName:z0,openRenameForm:h0,renameBranchInFlightRef:Y,renameBranchLockUntilRef:V,getFormLock:q,setIsRenamingBranch:K,renameChatBranch:F,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,navigate:Z,chatOnlyMode:G,showIntentToast:E,closeRenameForm:s0})},[s0,X,G,q,Z,h0,B,U,Y,V,F,K,E]),o0=R(async(z0=null)=>{await SM({targetChatJid:z0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:D,activeChatAgents:H,pruneChatBranch:k,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[H,G,X,D,j,Z,k,B,U,E]),v0=R(async(z0)=>{await gM({targetChatJid:z0,purgeChatBranch:z,currentChatBranches:D,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E})},[D,z,B,U,E]),t0=R(async(z0)=>{await uM({targetChatJid:z0,restoreChatBranch:O,currentChatBranches:D,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[G,D,Z,B,U,O,E]);g(()=>bM({branchLoaderMode:I,branchLoaderSourceChatJid:x,forkChatBranch:A,setBranchLoaderState:W,navigate:Z}),[I,x,A,Z,W]);let i0=R(async()=>{await vM({currentChatJid:j,chatOnlyMode:G,forkChatBranch:A,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,j,A,Z,B,U,E]),F_=R(async(z0)=>{await mM({rootName:z0,chatOnlyMode:G,createRootChatSession:M,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,M,Z,B,U,E]),Z_=R(async(z0,V_)=>{return await cM({isWebAppMode:w,path:z0,label:V_,showIntentToast:E,currentChatJid:j,activateTab:r,tabStripActiveId:e,editorInstanceRef:m,dockInstanceRef:_0,terminalTabPath:E0,tabPaneOverrides:Z0,buildPaneDetachTransfer:$0,registerDetachedPaneWindow:V0,dockVisible:N0,resolveTab:h,closeTab:j0,setDockVisible:Q0})},[r,$0,j0,j,_0,N0,m,w,V0,h,Q0,E,Z0,e,E0]);g(()=>hM({openEditor:c,popOutPane:(z0,V_)=>{Z_(z0,V_)}}),[Z_,c]);let m0=R(async()=>{await lM({isWebAppMode:w,currentChatJid:j,currentRootChatJid:y,forkChatBranch:A,getActiveChatAgents:J,getChatBranches:P,setActiveChatAgents:f,setCurrentChatBranches:b,showIntentToast:E})},[j,y,A,J,P,w,f,b,E]);return g(()=>{pM({editorOpen:O0,shellElement:a,editorWidthRef:X0,dockHeightRef:W0,sidebarWidthRef:P0,readStoredNumber:l0})},[W0,O0,X0,l0,a,P0]),{toggleWorkspace:u0,handleBranchPickerChange:G_,openRenameCurrentBranchForm:h0,closeRenameCurrentBranchForm:s0,handleRenameCurrentBranch:f0,handlePruneCurrentBranch:o0,handlePurgeArchivedBranch:v0,handleRestoreBranch:t0,handleCreateSessionFromCompose:i0,handleCreateRootSessionFromCompose:F_,handlePopOutPane:Z_,handlePopOutChat:m0}}k0();function Z4(_){return _.status==="fulfilled"?_.value:null}function l8(_){return Math.max(0,Math.min(100,_))}function DN(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((D)=>D?.data?.is_bot_message).length,Z=$.filter((D)=>!D?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,V=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,q=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,Q=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,L=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,K=_.modelsPayload?.current??_.activeModel??null,F=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,B=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),E=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:V},agent:{status:U,phase:E,running:Boolean(_.isAgentTurnActive)},model:{current:K,thinkingLevel:F,supportsThinking:Boolean(B)},context:{tokens:Q,contextWindow:L,percent:q},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:l8(Math.round(q))},{key:"queue",label:"Queue",value:l8(X*18)},{key:"activeChats",label:"Active chats",value:l8(Y*12)},{key:"posts",label:"Timeline load",value:l8($.length*5)}]}}function HN(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function EN(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function WN(_,$){return{shouldBuildDashboard:_?.buildDashboard!==!1,nextRefreshCount:Number($||0)+1}}function ON(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function zN(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function JN(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function AN(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:V,getActiveChatAgents:q,getChatBranches:Q,getTimeline:L,rawPosts:K,activeChatAgents:F,currentChatBranches:B,contextUsage:U,followupQueueItems:E,activeModel:D,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:z}=_,[O,I,x,A,M,W,y]=await Promise.allSettled([Z(j),X(j),Y(j),V(j),q(),Q(G),L(20,null,j)]);return DN({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:Z4(O),contextPayload:Z4(I),queuePayload:Z4(x),modelsPayload:Z4(A),activeChatsPayload:Z4(M),branchesPayload:Z4(W),timelinePayload:Z4(y),rawPosts:K,activeChatAgents:F,currentChatBranches:B,contextUsage:U,followupQueueItems:E,activeModel:D,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:z})}function kN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:V,steerAgentQueueItem:q}=_,Q=S5(j.current,$);if(!Q)return;let{rowId:L}=Q;G.current.add(L),Y((K)=>j4(K,L).items),q(L,Tj(Z)).then(()=>{X()}).catch((K)=>{console.warn("[queue] Failed to steer queued item:",K);let F=vj("steer");V(F.title,F.detail,"warning"),G.current.delete(L),X()})}function MN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:V,clearQueuedSteerStateIfStale:q,removeAgentQueueItem:Q}=_,L=S5(j.current,$);if(!L)return;let{rowId:K}=L;G.current.add(K),q?.(L.remainingQueueCount),Y((F)=>j4(F,K).items),Q(K,Tj(Z)).then(()=>{X()}).catch((F)=>{console.warn("[queue] Failed to remove queued item:",F);let B=vj("remove");V(B.title,B.detail,"warning"),G.current.delete(K),X()})}function yN(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=N1($);if(Z)j.current.delete(Z);G(DB($,new Date().toISOString()))}function TN(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=HB(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function wN(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:V,showIntentToast:q,sendAgentMessage:Q,buildFloatingWidgetDashboardSnapshot:L}=_,K=typeof $?.kind==="string"?$.kind:"",F=N1(j);if(!K||!F)return;if(K==="widget.close"){Y();return}if(K==="widget.submit"){let B=Kq($?.payload),U=Bq($?.payload),E=new Date().toISOString();if(X((D)=>OB(D,F,{kind:K,payload:$?.payload||null,submittedAt:E,submissionText:B})),!B){if(q("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Y();return}(async()=>{try{let D=await Q("default",B,null,[],Z?"queue":null,G);V(D),X((k)=>bj(k,F,{submittedAt:E,submissionText:B,queued:D?.queued||null}));let H=HN(D?.queued);if(q(H.title,H.detail,H.kind,H.durationMs),U)Y()}catch(D){X((k)=>bj(k,F,{submittedAt:E,submissionText:B,errorMessage:D?.message||"Could not send the widget message."}));let H=EN(D?.message);q(H.title,H.detail,H.kind,H.durationMs)}})();return}if(K==="widget.ready"||K==="widget.request_refresh"){let B=new Date().toISOString(),U=WN($?.payload||null,j?.runtimeState?.refreshCount);if(X((E)=>zB(E,F,{kind:K,payload:$?.payload||null,eventAt:B,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),K==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let E=await L($?.payload||null);X((H)=>JB(H,F,{dashboard:E,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let D=ON();q(D.title,D.detail,D.kind,D.durationMs)}catch(E){X((H)=>AB(H,F,{errorMessage:E?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let D=zN(E?.message);q(D.title,D.detail,D.kind,D.durationMs)}})();else{let E=JN();q(E.title,E.detail,E.kind,E.durationMs)}}}function rM(_,$=kN){$(_)}function nM(_,$=MN){$(_)}function dM(_,$,j=BB){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function xN(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:V,steerAgentQueueItem:q,removeAgentQueueItem:Q,refreshActiveChatAgents:L,refreshCurrentChatBranches:K,refreshContextUsage:F,refreshAutoresearchStatus:B}=_,U=R((k)=>{rM({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:q,removeAgentQueueItem:Q})},[$,G,j,Z,Q,X,Y,q]),E=R((k)=>{nM({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:V,steerAgentQueueItem:q,removeAgentQueueItem:Q})},[V,$,G,j,Z,Q,X,Y,q]),D=R(async(k,z)=>{X((O)=>{if(!Array.isArray(O)||k<0||z<0||k>=O.length||z>=O.length||k===z)return O;let I=[...O],[x]=I.splice(k,1);return I.splice(z,0,x),I});try{let{reorderAgentQueueItem:O}=await Promise.resolve().then(() => (M_(),F6));await O(k,z,$)}catch(O){console.warn("Failed to persist queue reorder:",O),Z()}},[$,Z,X]),H=R((k)=>{dM(k,{refreshActiveChatAgents:L,refreshCurrentChatBranches:K,refreshContextUsage:F,refreshAutoresearchStatus:B,refreshQueueState:Z})},[L,B,F,K,Z]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:E,handleMoveQueuedFollowup:D,handleMessageResponse:H}}k0();function IN(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function CN(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:V}=_,q=String($||"").trim();if(!q)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let Q=new AbortController;Y.current=Q,V({question:q,answer:"",thinking:"",error:null,model:null,status:"running"});try{let L=await G(q,{signal:Q.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(K)=>{if(K==="side_prompt_start")V((F)=>F?{...F,status:"running"}:F)},onThinkingDelta:(K)=>{V((F)=>F?{...F,thinking:`${F.thinking||""}${K||""}`}:F)},onTextDelta:(K)=>{V((F)=>F?{...F,answer:`${F.answer||""}${K||""}`}:F)}});if(Y.current!==Q)return!0;V((K)=>K?{...K,answer:L?.result||K.answer||"",thinking:L?.thinking||K.thinking||"",model:L?.model||null,status:"success",error:null}:K)}catch(L){if(Q.signal.aborted)return!0;V((K)=>K?{...K,status:"error",error:L?.payload?.error||L?.message||"BTW request failed."}:K)}finally{if(Y.current===Q)Y.current=null}return!0}async function PN(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function fN(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:V}=_,q=j($);if(!q)return!1;try{let Q=await X("default",q,null,[],G?"queue":null,Z);return Y(Q),V(Q?.queued==="followup"?"BTW queued":"BTW injected",Q?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(Q){return V("BTW inject failed",Q?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function oM(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function iM(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function RN(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Y,stopAutoresearch:V,dismissAutoresearch:q,streamSidePrompt:Q,btwAbortRef:L,btwSession:K,setBtwSession:F,sendAgentMessage:B,handleMessageResponse:U,dismissedLiveWidgetKeysRef:E,setFloatingWidget:D,getAgentStatus:H,getAgentContext:k,getAgentQueueState:z,getAgentModels:O,getActiveChatAgents:I,getChatBranches:x,getTimeline:A,rawPosts:M,activeChatAgents:W,currentChatBranches:y,contextUsage:w,followupQueueItemsRef:J,activeModel:P,activeThinkingLevel:f,supportsThinking:b,isAgentTurnActive:c}=_,r=R(async(j0,Q0)=>{let O0=typeof j0?.key==="string"?j0.key:"",a=typeof Q0?.key==="string"?Q0.key:"",X0=Sj(O0,a);if(!O0||!a)return;X((W0)=>RK(W0,O0,a));try{let W0=await gK({panel:j0,action:Q0,currentChatJid:$,stopAutoresearch:V,dismissAutoresearch:q,writeClipboard:async(P0)=>{if(!await oM(P0))throw Error("Clipboard access is unavailable.")}});if(W0.refreshAutoresearchStatus)Y();if(W0.toast)Z(W0.toast.title,W0.toast.detail,W0.toast.kind,W0.toast.durationMs)}catch(W0){Z("Panel action failed",W0?.message||"Could not complete that action.","warning")}finally{X((W0)=>SK(W0,X0))}},[$,q,Y,X,Z,V]),e=R(()=>{IN({btwAbortRef:L,setBtwSession:F})},[L,F]),m=R(async(j0)=>{return await CN({question:j0,currentChatJid:$,streamSidePrompt:Q,resolveBtwChatJid:eV,showIntentToast:Z,btwAbortRef:L,setBtwSession:F})},[L,$,F,Z,Q]),_0=R(async({content:j0})=>{return await PN({content:j0,parseBtwCommand:tV,closeBtwPanel:e,runBtwPrompt:m,showIntentToast:Z})},[e,m,Z]),E0=R(()=>{if(K?.question)m(K.question)},[K,m]),Z0=R(async()=>{await fN({btwSession:K,buildBtwInjectionText:jq,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:B,handleMessageResponse:U,showIntentToast:Z})},[K,$,U,G,B,Z]),$0=R(async(j0=null)=>{return AN({requestPayload:j0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:H,getAgentContext:k,getAgentQueueState:z,getAgentModels:O,getActiveChatAgents:I,getChatBranches:x,getTimeline:A,rawPosts:M,activeChatAgents:W,currentChatBranches:y,contextUsage:w,followupQueueItems:J.current,activeModel:P,activeThinkingLevel:f,supportsThinking:b,isAgentTurnActive:c})},[W,P,f,w,y,$,j,J,I,k,O,z,H,x,A,c,M,b]),V0=R((j0)=>{yN({widget:j0,dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[E,D]),N0=R(()=>{TN({dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[E,D]),h=R((j0,Q0)=>{wN({event:j0,widget:Q0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:D,handleCloseFloatingWidget:N0,handleMessageResponse:U,showIntentToast:Z,sendAgentMessage:B,buildFloatingWidgetDashboardSnapshot:$0})},[$0,$,N0,U,G,B,D,Z]);return g(()=>{iM({dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[$,E,D]),{handleExtensionPanelAction:r,closeBtwPanel:e,handleBtwIntercept:_0,handleBtwRetry:E0,handleBtwInject:Z0,handleOpenFloatingWidget:V0,handleCloseFloatingWidget:N0,handleFloatingWidgetEvent:h}}k0();function sM(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function aM(_){return!_}function SN(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:V,nextChat:q}=_;g(()=>{if(!sM({hasDockPanes:$,chatOnlyMode:j}))return;return dB(G)},[j,$,G]),g(()=>{if(!aM(j))return;return oB({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),g(()=>{if(typeof V!=="function"&&typeof q!=="function")return;return iB({previousChat:V,nextChat:q})},[q,V]),g(()=>aB(),[]),g(()=>sB(),[])}function tM(_){return Boolean(_&&typeof _.closest==="function")}function gN(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function eM(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function _y(){return{lastTriggeredAt:0,accumX:0}}function hj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var $y=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),jy=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function uN(_){if(!_||!tM(_))return!1;let $=_.closest($y);if(!$)return!0;return Boolean($.closest(jy))}function vN(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function lj(_){let $=vN(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function bN(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function Gy(_){let $=vN(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:bN(_.candidates,G)},next:{chatJid:Z,name:bN(_.candidates,Z)}}}function Zy(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function Xy(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function Yy(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let V=$<0,q=V?G.next:G.prev,Q=_.querySelector(".chat-swipe-chevron");if(Q)Q.textContent=V?"›":"‹",Q.style.order=V?"2":"0";let L=_.querySelector(".chat-swipe-name");if(L)L.textContent=q?.name??""}function b6(_){_.style.display="none",_.style.opacity="0"}function mN(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,V=$.current;if(!V)return()=>{};let q=X(),Q=typeof Y==="function"?Y():!1;if(!q&&!Q)return()=>{};let L=eM(),K=_y(),F=null,B={prev:null,next:null},U=!1;function E(){B=Gy({candidates:j,currentChatJid:G})}E();function D(){if(!F)F=Xy(V);return F}function H(M){let W=M==="next"?B.next:B.prev;if(W)Z(W.chatJid)}function k(M){U=String(M.pointerType||"").toLowerCase()==="pen"}function z(M){if(hj(L),E(),!q)return;if(M.touches.length!==1)return;if(U)return;if(gN())return;if(!uN(M.target))return;let W=M.touches[0];L.active=!0,L.startX=W.clientX,L.startY=W.clientY,L.lastX=W.clientX,L.lastY=W.clientY,L.startedAt=Date.now()}function O(M){if(!L.active||L.cancelled)return;if(gN()){L.cancelled=!0,b6(D());return}let W=M.touches[0];if(!W)return;L.lastX=W.clientX,L.lastY=W.clientY;let y=L.lastX-L.startX,w=L.lastY-L.startY;if(!L.horizontalLocked){if(Math.abs(w)>16&&Math.abs(w)>=Math.abs(y)){L.cancelled=!0,b6(D());return}if(Math.abs(y)>12&&Math.abs(y)>Math.abs(w)*1.15)L.horizontalLocked=!0}if(L.horizontalLocked){if(M.cancelable)M.preventDefault();Yy(D(),y,V.clientWidth,B)}}function I(){if(!L.active)return;let M=L.lastX-L.startX,W=L.lastY-L.startY,y=!L.cancelled&&Zy({dx:M,dy:W});if(b6(D()),hj(L),y)H(M<0?"next":"prev")}function x(){b6(D()),hj(L)}function A(M){if(q)return;if(!Q)return;if(!uN(M.target))return;let{deltaX:W,deltaY:y}=M;if(!Number.isFinite(W)||Math.abs(W)<72)return;if(Math.abs(W)<=Math.abs(y)*1.35)return;if(M.cancelable)M.preventDefault();let w=Date.now();if(w-K.lastTriggeredAt<450)return;K.lastTriggeredAt=w,H(W>0?"next":"prev")}return V.addEventListener("pointerdown",k,{passive:!0}),V.addEventListener("touchstart",z,{passive:!0}),V.addEventListener("touchmove",O,{passive:!1}),V.addEventListener("touchend",I,{passive:!0}),V.addEventListener("touchcancel",x,{passive:!0}),V.addEventListener("wheel",A,{passive:!1}),()=>{if(V.removeEventListener("pointerdown",k),V.removeEventListener("touchstart",z),V.removeEventListener("touchmove",O),V.removeEventListener("touchend",I),V.removeEventListener("touchcancel",x),V.removeEventListener("wheel",A),F)b6(F),F.remove(),F=null}}function Vy(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function qy(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function Qy(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function Ly(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=lj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=lj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function cN(_){let $=xN(Vy(_)),j=RN(qy({..._,handleMessageResponse:$.handleMessageResponse})),G=UN(Qy(_));return SN(Ly({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function Ky(_,$){return Boolean(_||$!==null)}function By(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function Ny(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:V,refs:q,setters:Q,services:L,helpers:K}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:q.activeChatJidRef,queueRefreshGenRef:q.queueRefreshGenRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,getAgentQueueState:L.getAgentQueueState,setFollowupQueueItems:Q.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:L.getAgentContext,setContextUsage:Q.setContextUsage,getAutoresearchStatus:L.getAutoresearchStatus,setExtensionStatusPanels:Q.setExtensionStatusPanels,setPendingExtensionPanelActions:Q.setPendingExtensionPanelActions,setExtensionWorkingState:Q.setExtensionWorkingState,getAgentStatus:L.getAgentStatus,wasAgentActiveRef:q.wasAgentActiveRef,viewStateRef:q.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:q.agentStatusRef,pendingRequestRef:q.pendingRequestRef,thoughtBufferRef:q.thoughtBufferRef,draftBufferRef:q.draftBufferRef,previewResyncPendingRef:q.previewResyncPendingRef,previewResyncGenerationRef:q.previewResyncGenerationRef,setAgentStatus:Q.setAgentStatus,setAgentDraft:Q.setAgentDraft,setAgentPlan:Q.setAgentPlan,setAgentThought:Q.setAgentThought,setPendingRequest:Q.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:q.isAgentRunningRef,currentTurnIdRef:q.currentTurnIdRef,silentRecoveryRef:q.silentRecoveryRef,silenceRefreshMs:L.silenceRefreshMs,lastAgentEventRef:q.lastAgentEventRef,lastSilenceNoticeRef:q.lastSilenceNoticeRef,silenceWarningMs:L.silenceWarningMs,silenceFinalizeMs:L.silenceFinalizeMs,isCompactionStatus:L.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:L.currentAppAssetVersion,staleUiVersionRef:q.staleUiVersionRef,staleUiReloadScheduledRef:q.staleUiReloadScheduledRef,tabStoreHasUnsaved:L.tabStoreHasUnsaved,isAgentRunningRef:q.isAgentRunningRef,pendingRequestRef:q.pendingRequestRef,showIntentToast:$},setConnectionStatus:Q.setConnectionStatus,setStateAccessFailed:Q.setStateAccessFailed,hasConnectedOnceRef:q.hasConnectedOnceRef,getAgents:L.getAgents,setAgents:Q.setAgents,setUserProfile:Q.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:K.readStoredNumber,sidebarWidthRef:q.sidebarWidthRef,appShellRef:q.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:L.getAgentModels,getActiveChatAgents:L.getActiveChatAgents,getChatBranches:L.getChatBranches,setActiveChatAgents:Q.setActiveChatAgents,setCurrentChatBranches:Q.setCurrentChatBranches,setActiveModel:Q.setActiveModel,setActiveThinkingLevel:Q.setActiveThinkingLevel,setSupportsThinking:Q.setSupportsThinking,setActiveModelUsage:Q.setActiveModelUsage,setAgentModelsPayload:Q.setAgentModelsPayload,setHasLoadedAgentModels:Q.setHasLoadedAgentModels,agentsRef:q.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:L.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:q.paneStateOwnerChatJidRef,chatPaneStateByChatRef:q.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:Q.setFloatingWidget,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:q.draftThrottleRef,thoughtThrottleRef:q.thoughtThrottleRef,followupQueueItemsRef:q.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:q.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:Q.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:V.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{Q.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:L.agentStatus,thoughtExpandedRef:q.thoughtExpandedRef,draftExpandedRef:q.draftExpandedRef,steerQueuedTurnIdRef:q.steerQueuedTurnIdRef}}function hN(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:V,setters:q,services:Q,helpers:L}=_,K=X.composeReferenceActions.showIntentToast,F=IK({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:Q.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:q.setRemovingPostIds,deletePost:Q.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),B=bB(Ny(_,K)),U=Ky(Q.isAgentTurnActive,Q.agentStatus),E=cN({currentChatJid:$.currentChatJid,followupQueueItemsRef:V.followupQueueItemsRef,dismissedQueueRowIdsRef:V.dismissedQueueRowIdsRef,setFollowupQueueItems:q.setFollowupQueueItems,showIntentToast:K,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:Q.steerAgentQueueItem,removeAgentQueueItem:Q.removeAgentQueueItem,refreshQueueState:B.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:B.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:B.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:B.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:B.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:q.setPendingExtensionPanelActions,stopAutoresearch:Q.stopAutoresearch,dismissAutoresearch:Q.dismissAutoresearch,streamSidePrompt:Q.streamSidePrompt,btwAbortRef:V.btwAbortRef,btwSession:G.btwSession,setBtwSession:q.setBtwSession,sendAgentMessage:Q.sendAgentMessage,dismissedLiveWidgetKeysRef:V.dismissedLiveWidgetKeysRef,setFloatingWidget:q.setFloatingWidget,getAgentStatus:Q.getAgentStatus,getAgentContext:Q.getAgentContext,getAgentQueueState:Q.getAgentQueueState,getAgentModels:Q.getAgentModels,getActiveChatAgents:Q.getActiveChatAgents,getChatBranches:Q.getChatBranches,getTimeline:Q.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:Q.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:V.renameBranchInFlightRef,renameBranchLockUntilRef:V.renameBranchLockUntilRef,getFormLock:L.getFormLock,setRenameBranchNameDraft:q.setRenameBranchNameDraft,setIsRenameBranchFormOpen:q.setIsRenameBranchFormOpen,setIsRenamingBranch:q.setIsRenamingBranch,renameChatBranch:Q.renameChatBranch,pruneChatBranch:Q.pruneChatBranch,purgeChatBranch:Q.purgeChatBranch,restoreChatBranch:Q.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:Q.forkChatBranch,createRootChatSession:Q.createRootChatSession,setBranchLoaderState:q.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:q.setActiveChatAgents,setCurrentChatBranches:q.setCurrentChatBranches,openEditor:Q.openEditor,tabStripActiveId:Q.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:Q.terminalTabPath,tabPaneOverrides:Q.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:Q.resolveTab,closeTab:Q.closeTab,setDockVisible:Y.setDockVisible,editorOpen:Q.editorOpen,shellElement:V.appShellRef.current,editorWidthRef:V.editorWidthRef,dockHeightRef:V.dockHeightRef,sidebarWidthRef:V.sidebarWidthRef,readStoredNumber:L.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode});return By({agentStatusLifecycleBundle:B,actionBundle:E,timelineViewActions:F,isComposeBoxAgentActive:U})}k0();M_();k0();function lN(_){try{return _?.focus?.(),!0}catch($){return!1}}function v6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function pj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function pN(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function rN(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function X4(_=typeof window<"u"?window:null){let $=_?.localStorage,j=v6($,"piclaw.notifications.deviceId");if(j)return j;let G=rN("device");return pj($,"piclaw.notifications.deviceId",G),v6($,"piclaw.notifications.deviceId")||G}function m6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=v6($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=rN("client");if(pj($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=v6($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function nN(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function rj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():X4($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():m6($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),V=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),Q=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:Q,hasFocus:V,updatedAtMs:Y}}function dN(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return pj(j,nN(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function oN(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return pN(j,nN(G,Z)),!0}function Fy(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():X4($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,V=[],q=[];for(let Q=0;Q<j.length;Q+=1){let L=j.key(Q);if(!L||!L.startsWith(Y))continue;let K=v6(j,L);if(!K){q.push(L);continue}try{let F=JSON.parse(K),B=Number(F?.updatedAtMs);if(!Number.isFinite(B)||Z-B>X){q.push(L);continue}let U=typeof F?.chatJid==="string"?F.chatJid.trim():"",E=typeof F?.clientId==="string"?F.clientId.trim():"";if(!U||!E){q.push(L);continue}V.push({deviceId:G,clientId:E,chatJid:U,visibilityState:F?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(F?.hasFocus),updatedAtMs:B})}catch{q.push(L)}}return q.forEach((Q)=>pN(j,Q)),V.sort((Q,L)=>Q.clientId.localeCompare(L.clientId))}function iN(_={}){let $=rj(_),j=$.chatJid;if(!j)return!1;let G=Fy({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,V)=>Y.clientId.localeCompare(V.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function Uy(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function Dy(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=Uy(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function Hy(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function p8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function aN(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function Ey(_){let $=await aN(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await x7(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Hy(Z)})}async function sN(_,$){if(!p8(_))return!1;let j=await Ey(_);return await I7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function Wy(_,$){if(!p8(_))return!1;let G=await(await aN(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await C7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function Oy(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function zy(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function tN(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Z,X]=C("default"),Y=u(!1),V=u(null),q=u(null);g(()=>{let B=U$("notificationsEnabled",!1);if(Y.current=B,G(B),typeof window<"u")V.current=X4(window),q.current=m6(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&B){Y.current=!1,G(!1),q_("notificationsEnabled","false");return}if(U==="granted"&&B&&typeof window<"u"&&p8(window))sN(window,V.current||X4(window)).catch((E)=>{console.warn("Failed to refresh stored web push subscription:",E)})},[]),g(()=>{Y.current=j},[j]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let B=V.current||X4(window),U=q.current||m6(window);V.current=B,q.current=U;let E=(z=!0,O="fetch")=>{let I=rj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:B,clientId:U});if(z)dN(I,window);else oN({deviceId:B,clientId:U},window);let x={device_id:B,client_id:U,chat_jid:$,visibility_state:I.visibilityState,has_focus:I.hasFocus,active:z};if(!z&&O==="beacon"&&zy(x,window))return;Oy(x,{runtimeWindow:window,keepalive:!z||O==="keepalive"})},D=()=>E(!0),H=()=>E(!1,"beacon");E(!0);let k=setInterval(()=>E(!0),15000);return document.addEventListener("visibilitychange",D),window.addEventListener("focus",D),window.addEventListener("blur",D),window.addEventListener("pageshow",D),window.addEventListener("pagehide",H),window.addEventListener("beforeunload",H),()=>{clearInterval(k),document.removeEventListener("visibilitychange",D),window.removeEventListener("focus",D),window.removeEventListener("blur",D),window.removeEventListener("pageshow",D),window.removeEventListener("pagehide",H),window.removeEventListener("beforeunload",H),E(!1,"beacon")}},[$]);let Q=R(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let B=Notification.requestPermission();if(B&&typeof B.then==="function")return B;return Promise.resolve(B)}catch(B){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",B),Promise.resolve("default")}},[]),L=R(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let E=await Q();if(X(E||"default"),E!=="granted"){Y.current=!1,G(!1),q_("notificationsEnabled","false");return}}let B=!Y.current;Y.current=B,G(B),q_("notificationsEnabled",String(B));let U=V.current||X4(window);if(V.current=U,p8(window))try{if(B)await sN(window,U);else await Wy(window,U)}catch(E){if(console.warn("Failed to sync web push notifications:",E),B)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[Q]),K=R((B,U,E={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let D=new Notification(Dy(B,E?.sourceLabel||"",window),{body:U});return D.onclick=()=>{lN(window)},!0}catch(D){return console.debug("[use-notifications] Local notification creation failed.",D,{title:typeof B==="string"?B:null}),!1}},[]),F=R((B)=>{if(typeof window>"u"||typeof document>"u")return!1;return iN({chatJid:typeof B==="string"&&B.trim()?B.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:V.current||X4(window),clientId:q.current||m6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:L,notify:K,shouldNotifyLocallyForChat:F}}function Jy(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function Ay(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function ky(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function eN(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=C("disconnected"),[X,Y]=C(!1),[V,q]=C(()=>R1()),[Q,L]=C(null),[K,F]=C(null),[B,U]=C(!1),[E,D]=C("current"),[H,k]=C([]),[z,O]=C([]),[I,x]=C([]),[A,M]=C(null),[W,y]=C({}),[w,J]=C(null),[P,f]=C(null),[b,c]=C(!1),[r,e]=C(null),[m,_0]=C(null),[E0,Z0]=C(!1),[$0,V0]=C([]),[N0,h]=C([]),[j0,Q0]=C(null),[O0,a]=C(()=>new Map),[X0,W0]=C(()=>new Set),[P0,l0]=C(()=>({message:null,indicator:null,visible:!0})),[u0,G_]=C([]),[h0,s0]=C(!1),[f0,o0]=C(()=>EL()),[v0,t0]=C(null),[i0,F_]=C(null),Z_=u(new Set),m0=Y0(()=>Jy({activeChatAgents:$0,currentChatBranches:N0,currentChatJid:$}),[$0,N0,$]),z0=Y0(()=>ky($,m0),[m0,$]),V_=HL(E),[d0,H_]=C(()=>Ay(j)),D0=u0.length,g0=u(new Set),I0=u([]),r0=u(new Set),z_=u(0),Q_=u({inFlight:!1,lastAttemptAt:0,turnId:null});g0.current=new Set(u0.map((b1)=>b1.row_id)),I0.current=u0;let{notificationsEnabled:U_,notificationPermission:N_,toggleNotifications:J_,notify:x_,shouldNotifyLocallyForChat:P_}=tN({chatJid:$}),[E_,o_]=C(()=>new Set),[f_,q0]=C(()=>uL({allowLegacyFallback:!0,defaultValue:!1})),[v,n]=C({name:"You",avatar_url:null,avatar_background:null}),s=u(null),G0=u(!1),F0=u(!1),y0=u(!1),A0=u(null),M0=u($),T0=u(new Map),c0=u($),S0=u(0),n0=u(0),e0=u({}),x0=u({name:null,avatar_url:null}),w0=u({currentHashtag:null,searchQuery:null,searchOpen:!1}),D_=u(null),__=u(null),d=u(0),B0=u(0),p0=u(0),j_=u(null),R_=u(null),F1=u(null),u_=u(null),z1=u(0),I_=u({title:null,avatarBase:null}),A_=u(null),J1=u(!1),[W_,k_]=C(!1),A1=u(0),[l_,i_]=C(!1),[a_,B_]=C(""),x1=Y0(()=>Z8(a_,m0?.agent_name||""),[m0?.agent_name,a_]),U1=u(null);return{connectionStatus:G,setConnectionStatus:Z,stateAccessFailed:X,setStateAccessFailed:Y,isWebAppMode:V,setIsWebAppMode:q,currentHashtag:Q,setCurrentHashtag:L,searchQuery:K,setSearchQuery:F,searchOpen:B,setSearchOpen:U,searchScope:E,setSearchScope:D,fileRefs:H,setFileRefs:k,folderRefs:z,setFolderRefs:O,messageRefs:I,setMessageRefs:x,intentToast:A,setIntentToast:M,agents:W,setAgents:y,activeModel:w,setActiveModel:J,activeThinkingLevel:P,setActiveThinkingLevel:f,supportsThinking:b,setSupportsThinking:c,activeModelUsage:r,setActiveModelUsage:e,agentModelsPayload:m,setAgentModelsPayload:_0,hasLoadedAgentModels:E0,setHasLoadedAgentModels:Z0,activeChatAgents:$0,setActiveChatAgents:V0,currentChatBranches:N0,setCurrentChatBranches:h,contextUsage:j0,setContextUsage:Q0,extensionStatusPanels:O0,setExtensionStatusPanels:a,pendingExtensionPanelActions:X0,setPendingExtensionPanelActions:W0,extensionWorkingState:P0,setExtensionWorkingState:l0,followupQueueItems:u0,setFollowupQueueItems:G_,isAgentTurnActive:h0,setIsAgentTurnActive:s0,btwSession:f0,setBtwSession:o0,floatingWidget:v0,setFloatingWidget:t0,attachmentPreview:i0,setAttachmentPreview:F_,dismissedLiveWidgetKeysRef:Z_,currentBranchRecord:m0,currentRootChatJid:z0,activeSearchScopeLabel:V_,branchLoaderState:d0,setBranchLoaderState:H_,followupQueueCount:D0,followupQueueRowIdsRef:g0,followupQueueItemsRef:I0,dismissedQueueRowIdsRef:r0,queueRefreshGenRef:z_,silentRecoveryRef:Q_,notificationsEnabled:U_,notificationPermission:N_,handleToggleNotifications:J_,notify:x_,shouldNotifyLocallyForChat:P_,removingPostIds:E_,setRemovingPostIds:o_,workspaceOpen:f_,setWorkspaceOpen:q0,userProfile:v,setUserProfile:n,staleUiVersionRef:s,staleUiReloadScheduledRef:G0,hasConnectedOnceRef:F0,wasAgentActiveRef:y0,agentStatusRef:A0,activeChatJidRef:M0,chatPaneStateByChatRef:T0,paneStateOwnerChatJidRef:c0,draftThrottleRef:S0,thoughtThrottleRef:n0,agentsRef:e0,userProfileRef:x0,viewStateRef:w0,timelineRef:D_,appShellRef:__,sidebarWidthRef:d,editorWidthRef:B0,dockHeightRef:p0,lastNotifiedIdRef:j_,lastAgentResponseRef:R_,btwAbortRef:F1,lastActivityTimerRef:u_,lastActivityTokenRef:z1,brandingRef:I_,intentToastTimerRef:A_,renameBranchInFlightRef:J1,isRenamingBranch:W_,setIsRenamingBranch:k_,renameBranchLockUntilRef:A1,isRenameBranchFormOpen:l_,setIsRenameBranchFormOpen:i_,renameBranchNameDraft:a_,setRenameBranchNameDraft:B_,renameBranchDraftState:x1,renameBranchNameInputRef:U1}}k0();k0();function My(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,V]of _.entries()){let q=Y;if(G==="dir"){if(Y===$)q=j,Z=!0;else if(Y.startsWith(`${$}/`))q=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)q=j,Z=!0;X.set(q,V)}return Z?X:_}function _F(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let V=Y;if(G==="dir"){if(Y===$)V=j,Z=!0;else if(Y.startsWith(`${$}/`))V=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)V=j,Z=!0;X.add(V)}return Z?X:_}function $F({onTabClosed:_}={}){let $=u(_);$.current=_;let[j,G]=C(()=>$_.getTabs()),[Z,X]=C(()=>$_.getActiveId()),[Y,V]=C(()=>$_.getTabs().length>0);g(()=>{return $_.onChange((J,P)=>{G(J),X(P),V(J.length>0)})},[]);let[q,Q]=C(()=>new Set),[L,K]=C(()=>new Set),[F,B]=C(()=>new Map),U=R((J)=>{Q((P)=>{let f=new Set(P);if(f.has(J))f.delete(J);else f.add(J);return f})},[]),E=R((J)=>{Q((P)=>{if(!P.has(J))return P;let f=new Set(P);return f.delete(J),f})},[]),D=R((J)=>{K((P)=>{if(!P.has(J))return P;let f=new Set(P);return f.delete(J),f})},[]),H=R((J)=>{B((P)=>{if(!P.has(J))return P;let f=new Map(P);return f.delete(J),f})},[]),k=R((J,P={})=>{if(!J)return;let f=typeof P?.paneOverrideId==="string"&&P.paneOverrideId.trim()?P.paneOverrideId.trim():null,b={path:J,mode:"edit"};try{if(!(f?Y_.get(f):Y_.resolve(b))){if(!Y_.get("editor")){console.warn(`[openEditor] No pane handler for: ${J}`);return}}}catch(m){console.warn(`[openEditor] paneRegistry.resolve() error for "${J}":`,m)}let c=typeof P?.label==="string"&&P.label.trim()?P.label.trim():void 0,r=P?.viewState&&typeof P.viewState==="object"?P.viewState:null,e=P?.diffMode==="saved"?"saved":null;if($_.open(J,c),r)$_.saveViewState(J,r);if(f)B((m)=>{if(m.get(J)===f)return m;let _0=new Map(m);return _0.set(J,f),_0});if(e==="saved")K((m)=>{if(m.has(J))return m;let _0=new Set(m);return _0.add(J),_0})},[]),z=R(()=>{let J=$_.getActiveId();if(J){let P=$_.get(J);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}$_.close(J),E(J),D(J),H(J),$.current?.(J)}},[D,H,E]),O=R((J)=>{let P=$_.get(J);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}$_.close(J),E(J),D(J),H(J),$.current?.(J)},[D,H,E]),I=R((J)=>{$_.activate(J)},[]),x=R((J)=>{let P=$_.getTabs().filter((c)=>c.id!==J&&!c.pinned),f=P.filter((c)=>c.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let b=P.map((c)=>c.id);$_.closeOthers(J),b.forEach((c)=>{E(c),D(c),H(c),$.current?.(c)})},[D,H,E]),A=R(()=>{let J=$_.getTabs().filter((b)=>!b.pinned),P=J.filter((b)=>b.dirty).length;if(P>0){if(!window.confirm(`${P} unsaved tab${P>1?"s":""} will be closed. Continue?`))return}let f=J.map((b)=>b.id);$_.closeAll(),f.forEach((b)=>{E(b),D(b),H(b),$.current?.(b)})},[D,H,E]),M=R((J)=>{$_.togglePin(J)},[]),W=R((J)=>{if(!J)return;K((P)=>{let f=new Set(P);if(f.has(J))f.delete(J);else f.add(J);return f}),$_.activate(J)},[]),y=R((J)=>{if(!J)return;B((P)=>{if(P.get(J)==="editor")return P;let f=new Map(P);return f.set(J,"editor"),f}),$_.activate(J)},[]),w=R(()=>{let J=$_.getActiveId();if(J)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:J}}))},[]);return g(()=>{let J=(P)=>{let{oldPath:f,newPath:b,type:c}=P.detail||{};if(!f||!b)return;if(c==="dir"){for(let r of $_.getTabs())if(r.path===f||r.path.startsWith(`${f}/`)){let e=`${b}${r.path.slice(f.length)}`;$_.rename(r.id,e)}}else $_.rename(f,b);Q((r)=>_F(r,f,b,c)),K((r)=>_F(r,f,b,c)),B((r)=>My(r,f,b,c))};return window.addEventListener("workspace-file-renamed",J),()=>window.removeEventListener("workspace-file-renamed",J)},[]),g(()=>{let J=(P)=>{if($_.hasUnsaved())P.preventDefault(),P.returnValue=""};return window.addEventListener("beforeunload",J),()=>window.removeEventListener("beforeunload",J)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:q,diffTabs:L,tabPaneOverrides:F,openEditor:k,closeEditor:z,handleTabClose:O,handleTabActivate:I,handleTabCloseOthers:x,handleTabCloseAll:A,handleTabTogglePin:M,handleTabTogglePreview:U,handleTabToggleDiff:W,handleTabEditSource:y,revealInExplorer:w}}k0();function t1(_){return typeof _==="string"&&_.trim()?_.trim():null}function yy(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function m4(_="pane"){let $=yy();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function jF(_){let $=t1(_?.paneInstanceId),j=t1(_?.paneWindowId);if(!$||!j)return{};let G=t1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function GF(_={}){let $=new URLSearchParams(_.search||"");return{panePath:t1($.get("pane_path"))||t1(_.panePath),paneLabel:t1($.get("pane_label"))||t1(_.paneLabel),paneInstanceId:t1($.get("pane_instance_id")),paneWindowId:t1($.get("pane_window_id")),paneSourceWindowId:t1($.get("pane_source_window_id"))}}function c4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function e1(_){return typeof _==="string"&&_.trim()?_.trim():null}function ZF(_){let $=e1(_?.panePath),j=e1(_?.paneInstanceId),G=e1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=e1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:e1(_?.label),sourceWindowId:e1(_?.sourceWindowId)}}function nj(_,$){if(!_||!$)return!1;return e1($.panePath)===_.panePath&&e1($.paneInstanceId)===_.paneInstanceId&&e1($.paneWindowId)===_.ownerWindowId}function dj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:e1($)||new Date().toISOString(),label:_.label||null}}function r8(_){try{return _?.close?.(),!0}catch($){return!1}}function oj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function Ty(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function XF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var wy=400;function xy(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function Iy(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return xy(j).some((Z)=>Z==="."||Z===_)})}async function YF(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function Cy(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function o8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function VF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function n8(_){if(!VF(_))return!1;return o8(_?.runtimeNavigator)}function d8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return o8(_?.runtimeNavigator)}function u5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function Py(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",V=_?.allowLiveTransfer!==!1,q=_?.instance||null,Q=typeof q?.exportHostTransferState==="function"?q.exportHostTransferState():null,L=$===Y,K=Q&&!L?h8({path:$,payload:Q},j,G):null,F=null;if($!==Y){let B=Q&&typeof Q==="object"?typeof Q.mtime==="string"?Q.mtime:Q.mtime===null?null:void 0:void 0,U=typeof q?.isDirty==="function"?q.isDirty():!1,E=typeof q?.getContent==="function"?q.getContent():void 0;F=q2({path:$,content:U?E:void 0,mtime:B,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...F?.editor_popout?{editorPopoutToken:F.editor_popout}:{},...K?.pane_transfer?{paneTransferToken:K.pane_transfer}:{},...L&&Q?{paneTransferPayload:Q}:{},...V?{}:{allowLiveTransfer:!1}}}function fy(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",V=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,q=X?M3(X,j,G):null,Q=V?{panePath:$,path:$,payload:V,capturedAt:G}:Y?mj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:q?.path===$?q:null,hostTransfer:Q?.path===$?Q:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function qF(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:V,previewTabs:q,diffTabs:Q,tabPaneOverrides:L,terminalTabPath:K,vncTabPrefix:F,openEditor:B,closeEditor:U,getWorkspaceFile:E}=_,D=u(null),H=u(null),k=u(null),z=u(null),O=u((()=>{if(!$)return null;let q0=Z5("editor_popout");return M3(q0)})()),I=u((()=>{if(!$)return null;return lB()})()),x=u(GF({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),A=u(x.current.paneWindowId||m4("pane-window")),M=u(new Map),W=u(new Map),y=u(new Map),w=u(new Map),J=u(!1),P=u(new Map),f=u(m4("pane-instance")),b=u(new Map),c=u(new Map),r=u(new Set),[e,m]=C(()=>new Map),_0=u(e);_0.current=e;let[E0,Z0]=C(()=>new Map),$0=u(E0);$0.current=E0;let[V0,N0]=C(null),h=u(V0);h.current=V0;let[j0,Q0]=C(null),O0=u(j0);O0.current=j0;let a=Y_.getDockPanes().length>0,[X0,W0]=C(!1),P0=R(()=>W0((q0)=>!q0),[]),l0=R(()=>{B(K,{label:"Terminal"})},[B,K]),u0=R(()=>{B(F,{label:"VNC"})},[B,F]),G_=R((q0)=>{let v=typeof q0==="string"?q0.trim():"";if(!v)return m4("pane-instance");if(v===K&&!$_.get(v)){if(!f.current)f.current=m4("pane-instance");return f.current}let s=P.current.get(v);if(s)return s;let G0=m4("pane-instance");return P.current.set(v,G0),G0},[K]),h0=Y0(()=>!$&&V?E0.get(V)||null:null,[E0,$,V]),s0=!$?j0:null,f0=R((q0)=>{if(!q0)return;pB(q0),c.current.delete(q0),r.current.delete(q0),N0((v)=>v?.panePath===q0?null:v),m((v)=>{if(!v.has(q0))return v;let n=new Map(v);return n.delete(q0),n})},[]),o0=R((q0)=>{if(!q0)return;b.current.delete(q0),c.current.delete(q0),r.current.delete(q0),f0(q0),Q0((v)=>v?.panePath===q0?null:v),Z0((v)=>{if(!v.has(q0))return v;let n=new Map(v);return n.delete(q0),n})},[f0]),v0=R((q0,v={})=>{let n=typeof q0==="string"?q0.trim():"";if(!n)return!1;if(d8({panePath:n,terminalTabPath:K}))return!1;let s=b.current.get(n),G0=Boolean($0.current.get(n)),F0=Boolean(O0.current?.panePath===n);if(o0(n),n===K&&F0&&!G0)W0(!0);else if(n===K&&G0)B(n,{label:"Terminal"});else if($_.get(n))$_.activate(n);else B(n);if(v.closeDetachedWindow!==!1&&s&&typeof s.close==="function")r8(s);return!0},[o0,B,W0,K]),t0=R(()=>{if($)return;if(!Cy())return;let q0=Date.now();for(let[v,n]of c.current.entries()){if(n>q0)continue;c.current.delete(v),v0(v,{closeDetachedWindow:!1})}},[$,v0]),i0=R((q0,v={})=>{let n=typeof q0==="string"?q0.trim():"";if(!n)return!1;let s={panePath:n,terminalTabPath:K,allowLiveTransfer:v.allowLiveTransfer,reason:v.reason};if(n8(s))return b.current.delete(n),c.current.delete(n),r.current.add(n),!0;if(!VF(s))return v0(n,{closeDetachedWindow:!1});return c.current.set(n,Date.now()+wy),t0(),!0},[t0,v0,K]),F_=R((q0)=>{let v=typeof q0==="string"?q0.trim():"";if(!v)return null;let n=G_(v),s=m4("pane-window");return{paneInstanceId:n,paneWindowId:s,params:jF({paneInstanceId:n,paneWindowId:s,paneSourceWindowId:A.current})}},[G_]),Z_=R((q0,v,n,s)=>{let G0=typeof q0==="string"?q0.trim():"";if(!G0||!s)return;let F0=ZF({panePath:G0,paneInstanceId:s.pane_instance_id,ownerWindowId:s.pane_window_id,sourceWindowId:s.pane_source_window_id,label:v});if(!F0)return;if(b.current.set(G0,n||null),G0===K&&!$_.get(G0)){N0(F0);return}m((A0)=>{let M0=new Map(A0);return M0.set(G0,F0),M0})},[K]),m0=R((q0,v)=>{let n=typeof q0?.panePath==="string"?q0.panePath.trim():"";if(!n)return!1;let s=b.current.get(n);if(s&&v&&s!==v)return!1;let G0=_0.current.get(n)||null;if(nj(G0,q0)){let T0=H.current,c0=u5({panePath:n,terminalTabPath:K});if(c0&&T0&&typeof T0.moveHost==="function")g5({panePath:n,paneInstanceId:G0.paneInstanceId,paneWindowId:G0.ownerWindowId,instance:T0,releaseSourceHost:()=>{if(H.current===T0)H.current=null}});if(c0&&H.current)H.current=null;let S0=dj(G0);if(!S0)return!1;return m((n0)=>{if(!n0.has(n))return n0;let e0=new Map(n0);return e0.delete(n),e0}),Z0((n0)=>{let e0=new Map(n0);return e0.set(n,S0),e0}),XF({panePath:n,terminalTabPath:K,closeTab:(n0)=>$_.close(n0),sourceHost:"tab"}),!0}if(n!==K)return!1;let F0=h.current,y0=z.current,A0=u5({panePath:n,terminalTabPath:K});if(A0&&F0&&y0&&typeof y0.moveHost==="function")g5({panePath:n,paneInstanceId:F0.paneInstanceId,paneWindowId:F0.ownerWindowId,instance:y0,releaseSourceHost:()=>{if(z.current===y0)z.current=null}});if(A0&&z.current)z.current=null;if(!nj(F0,q0))return!1;let M0=dj(F0);if(!M0)return!1;return N0(null),Q0(M0),XF({panePath:n,terminalTabPath:K,setDockVisible:W0,sourceHost:"dock"}),!0},[W0,K]),z0=R((q0=!1,v=!0)=>{if(!$)return!1;let n=x.current;if(!c4(n))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(J.current){if(q0)r8(window);return!0}let s=n.panePath||j,G0=s===K?z.current||H.current:H.current,F0=v&&u5({panePath:s,terminalTabPath:K}),y0=Py({panePath:s,paneInstanceId:n.paneInstanceId,paneOverrideId:s===K?null:typeof L?.get==="function"?L.get(s)||null:null,terminalTabPath:K,viewState:s===K?null:$_.getViewState(s)||null,allowLiveTransfer:F0,instance:G0});if(!y0)return!1;if(F0&&y0.paneTransferToken&&typeof G0?.moveHost==="function"){if(z.current===G0)z.current=null;if(H.current===G0)H.current=null}if(!oj(window.opener,y0,window.location.origin))return!1;if(J.current=!0,q0)r8(window);return!0},[$,j,L,K]),V_=R(()=>z0(!0,!0),[z0]);g(()=>{if(!$||typeof window>"u")return;let q0=()=>{let v=x.current,n=c4(v)?v.panePath||j||"":"";if(n8({panePath:n,terminalTabPath:K,allowLiveTransfer:!1,reason:"closed-window"}))return;z0(!1,!1)};return window.addEventListener("pagehide",q0),window.addEventListener("beforeunload",q0),()=>{window.removeEventListener("pagehide",q0),window.removeEventListener("beforeunload",q0)}},[$,z0]);let d0=Y0(()=>OL(Y,V),[V,Y]),H_=Y0(()=>zL(L,V),[L,V]),D0=Y0(()=>Jj(G,d0,j),[d0,G,j]),g0=Y0(()=>V&&Q.has(V)?"saved":null,[Q,V]),I0=u(g0);g(()=>{I0.current=g0},[g0]);let r0=Y0(()=>AL(Y,q,Q,V),[Q,q,V,Y]),z_=Y0(()=>kL(j,F),[j,F]),Q_=Y0(()=>ML(j,K,r0,z_),[z_,r0,j,K]),U_=yL($,Z,X,a,X0),[N_,J_]=C(!1),x_=u(!1),P_=R(()=>{if(!X||Z)return;if(x_.current=X0,X0)W0(!1);J_(!0)},[Z,X0,X]),E_=R(()=>{if(!N_)return;if(J_(!1),x_.current)W0(!0),x_.current=!1},[N_]),o_=R(()=>{if(N_){E_();return}P_()},[P_,E_,N_]);g(()=>{if(N_&&!X)E_()},[X,E_,N_]),g(()=>{let q0=new Set(Y.map((s)=>s.id)),v=new Set(_0.current.keys()),n=new Set($0.current.keys());for(let s of Array.from(P.current.keys()))if(!Ty({panePath:s,openTabIds:q0,pendingDetachedTabPaths:v,detachedTabPaths:n,terminalTabPath:K,hasPendingDetachedDockPane:Boolean(h.current),hasDetachedDockPane:Boolean(O0.current)}))P.current.delete(s)},[Y,K]),g(()=>{if($||typeof window>"u")return;let q0=(v)=>{if(v.origin!==window.location.origin)return;let n=v.data;if(!n||typeof n!=="object")return;if(n.type==="piclaw-pane-detach-claim"){m0({panePath:n.panePath,paneInstanceId:n.paneInstanceId,paneWindowId:n.paneWindowId},v.source);return}if(n.type!=="piclaw-pane-reattach-request")return;let s=fy({payload:n}),G0=s?.panePath||"";if(!G0)return;if(s?.editorTransfer)M.current.set(G0,s.editorTransfer);if(s?.hostTransfer)if(W.current.set(G0,s.hostTransfer),s.allowLiveTransfer&&v.source)y.current.set(G0,v.source);else y.current.delete(G0);let F0=$0.current.get(G0)||null,y0=G0===K?O0.current:null,A0=u5({panePath:G0,terminalTabPath:K}),M0=F0||y0;if(!M0)return;if(s?.paneInstanceId&&s.paneInstanceId!==M0.paneInstanceId)return;if(d8({panePath:G0,terminalTabPath:K})){y.current.delete(G0),w.current.delete(G0),W.current.delete(G0),M.current.delete(G0);return}if(s?.hostTransfer&&s.allowLiveTransfer&&A0)w.current.set(G0,{panePath:G0,paneInstanceId:M0.paneInstanceId,paneWindowId:M0.ownerWindowId});else w.current.delete(G0);if(n8({panePath:G0,terminalTabPath:K,allowLiveTransfer:s?.allowLiveTransfer,reason:"message"})){y.current.delete(G0),b.current.delete(G0),c.current.delete(G0),r.current.add(G0);return}i0(G0,{allowLiveTransfer:s?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",q0),()=>window.removeEventListener("message",q0)},[m0,$,i0,K]),g(()=>{if($||typeof window>"u"||typeof document>"u")return;let q0=()=>t0();window.addEventListener("focus",q0),window.addEventListener("pageshow",q0),document.addEventListener("visibilitychange",q0);let v=setInterval(()=>{t0();for(let[n,s]of b.current.entries()){if(!s||!s.closed)continue;if(n===K?Boolean(h.current):_0.current.has(n)){b.current.delete(n),f0(n);continue}if(d8({panePath:n,terminalTabPath:K})){o0(n);continue}if(n8({panePath:n,terminalTabPath:K,allowLiveTransfer:!1,reason:"closed-window"})){b.current.delete(n),c.current.delete(n),r.current.add(n);continue}if(r.current.has(n)){b.current.delete(n);continue}i0(n,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",q0),window.removeEventListener("pageshow",q0),document.removeEventListener("visibilitychange",q0),clearInterval(v)}},[o0,f0,t0,$,i0,K]),g(()=>{if(!$||!j)return;if($_.getActiveId()===j)return;let v=O.current?.path===j?O.current:null,n=I.current?.path===j?I.current:null;B(j,{...G?{label:G}:{},...v?.paneOverrideId?{paneOverrideId:v.paneOverrideId}:{},...v?.viewState?{viewState:v.viewState}:{},...n?.payload?.diffMode?{diffMode:n.payload.diffMode}:{}})},[B,G,$,j]),g(()=>{if(!$)return;let q0=x.current;if(!c4(q0))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;oj(window.opener,{type:"piclaw-pane-detach-claim",panePath:q0.panePath,paneInstanceId:q0.paneInstanceId,paneWindowId:q0.paneWindowId},window.location.origin)},[$]),g(()=>{let q0=D.current;if(!q0)return;if(H.current)H.current.dispose(),H.current=null;let v=V;if(!v)return;if(!$&&h0?.panePath===v){q0.innerHTML="";return}let n=O.current?.path===v?O.current:null,s=M.current.get(v)||null,G0=n||s,F0=I.current?.path===v?I.current:null,y0=W.current.get(v)||null,A0=F0||y0,M0=H_||G0?.paneOverrideId||null,T0=A0?.payload?{...A0.payload}:null;if(I0.current)T0={...T0||{},diffMode:I0.current};else if(T0&&"diffMode"in T0)delete T0.diffMode;let c0={path:v,mode:"edit",...G0?.content!==void 0?{content:G0.content}:{},...G0?.mtime!==void 0?{mtime:G0.mtime}:{},...T0?{transferState:T0}:{}},S0=(M0?Y_.get(M0):null)||Y_.resolve(c0)||Y_.get("editor");if(!S0){q0.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let n0=null,e0=!1,x0=(w0)=>{n0=w0,H.current=w0,w0.onDirtyChange?.((d)=>{$_.setDirty(v,d)}),w0.onSaveRequest?.(()=>{}),w0.onClose?.(()=>{U()});let D_=$_.getViewState(v);if(D_&&typeof w0.restoreViewState==="function")requestAnimationFrame(()=>w0.restoreViewState(D_));if(typeof w0.onViewStateChange==="function")w0.onViewStateChange((d)=>{$_.saveViewState(v,d)});let __=x.current;if($&&c4(__)&&typeof w0?.moveHost==="function"&&u5({panePath:v,terminalTabPath:K}))g5({panePath:v,paneInstanceId:__.paneInstanceId||"",paneWindowId:__.paneWindowId||"",instance:w0,releaseSourceHost:()=>{if(z.current===w0)z.current=null;if(H.current===w0)H.current=null}});YF(w0,{path:v,hostMode:$?"popout":"main",transferState:T0}).catch((d)=>{console.warn("[pane-attach] afterAttachToHost failed:",d)}),requestAnimationFrame(()=>w0.focus?.())};return(async()=>{let w0=x.current,D_=$&&c4(w0)&&w0.panePath===v?{panePath:v,paneInstanceId:w0.paneInstanceId||"",paneWindowId:w0.paneWindowId||""}:null,__=w.current.get(v)||null,d=u5({panePath:v,terminalTabPath:K})?D_||__:null,B0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:y.current.get(v)||null,p0=$?"popout":"main";if(A0&&d&&B0)try{let j_=await rB(B0,d,q0,{path:v,hostMode:p0,transferState:T0});if(!e0&&j_){if(x0(j_),n)O.current=null;if(s)M.current.delete(v);if(F0)I.current=null;if(y0)W.current.delete(v);y.current.delete(v),w.current.delete(v);return}}catch(j_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",j_)}if(e0)return;if(x0(S0.mount(q0,c0)),n)O.current=null;if(s)M.current.delete(v);if(F0)I.current=null;if(y0)W.current.delete(v);y.current.delete(v),w.current.delete(v)})(),()=>{if(e0=!0,H.current===n0)n0.dispose(),H.current=null}},[h0,H_,U,$,V]),g(()=>{let q0=V,v=H.current;if(!q0||typeof v?.setDiffMode!=="function")return;v.setDiffMode(g0)},[g0,V]);let f_=R(async(q0)=>{let v=typeof V==="string"?V.trim():"",n=H.current;if(!v||!n?.setContent)return;if(typeof n.isDirty==="function"&&n.isDirty())return;if(!Iy(v,q0))return;try{let s=await E(v,1e6,"edit"),G0=typeof s?.text==="string"?s.text:"",F0=typeof s?.mtime==="string"&&s.mtime.trim()?s.mtime.trim():new Date().toISOString();n.setContent(G0,F0)}catch(s){console.warn("[workspace_update] Failed to refresh active pane:",s)}},[E,V]);return g(()=>{let q0=k.current;if(z.current)z.current.dispose(),z.current=null;if(!q0||!a||!X0)return;if(!$&&s0?.panePath===K){q0.innerHTML="";return}let v=Y_.getDockPanes()[0];if(!v){q0.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let n=I.current?.path===K?I.current:null,s=W.current.get(K)||null,G0=n||s,F0=v.mount(q0,{mode:"view",...G0?.payload?{transferState:G0.payload}:{}});if(z.current=F0,YF(F0,{path:K,hostMode:$?"popout":"main",transferState:G0?.payload||null}).catch((y0)=>{console.warn("[pane-attach] afterAttachToHost failed:",y0)}),n)I.current=null;if(s)W.current.delete(K);return requestAnimationFrame(()=>F0.focus?.()),()=>{if(z.current===F0)F0.dispose(),z.current=null}},[s0,X0,a,$,K]),{editorContainerRef:D,editorInstanceRef:H,dockContainerRef:k,dockInstanceRef:z,hasDockPanes:a,dockVisible:X0,setDockVisible:W0,toggleDock:P0,openTerminalTab:l0,openVncTab:u0,panePopoutTitle:D0,panePopoutHasMenuActions:r0,hidePanePopoutControls:Q_,showEditorPaneContainer:U_,zenMode:N_,exitZenMode:E_,toggleZenMode:o_,refreshActiveEditorFromWorkspace:f_,detachedTabs:E0,activeDetachedTab:h0,detachedDockPane:s0,buildPaneDetachTransfer:F_,registerDetachedPaneWindow:Z_,reattachPane:v0,requestPanePopoutReattach:V_,canReattachPanePopout:$&&c4(x.current)&&!d8({panePath:j||"",terminalTabPath:K})}}function Ry(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function QF(_){let $=u(null),j=$F({onTabClosed:(Z)=>$.current?.(Z)}),G=qF({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return Ry({removeFileRefRef:$,editorState:j,paneRuntime:G})}M_();var s8=1280,a8=820;function i8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function c6(_){return typeof _==="string"&&_.trim()?_.trim():null}function Sy(_){let $=c6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function gy(_){if(_.isMobile)return!1;let $=i8(_.windowWidth),j=i8(_.windowHeight);if($===null||j===null)return!1;if($<s8||j<a8)return!1;let G=i8(_.screenWidth),Z=i8(_.screenHeight);if(G!==null&&G<s8)return!1;if(Z!==null&&Z<a8)return!1;return!0}function uy(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function by(_){if(!_||_.kind!=="custom")return null;let $=c6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=c6(j.path);if(!Sy(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:c6(_.chat_jid),path:G,label:c6(j.label),target:Z}}async function vy(_,$,j){await E5(_,$,j||void 0)}async function LF(_,$){let j=by(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||vy,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:s8,height:a8};if(j.target==="popout"){if(!gy({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:uy(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${s8}×${a8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let q=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:q,opened:q,reason:q?void 0:"popout_failed",detail:q?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var ij="piclaw:oobe:provider-missing:dismissed";function my(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function cy(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function KF(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=my(G),Y=X>0,V=cy(G),q=Y||V;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:V};if(q)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:V};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:V}}var hy=UL();await IL();var{searchPosts:ly,deletePost:py,getAgents:ry,getAgentThought:BF,setAgentThoughtVisibility:NF,getAgentStatus:ny,getAgentContext:dy,getAutoresearchStatus:oy,stopAutoresearch:iy,dismissAutoresearch:sy,getAgentModels:ay,getActiveChatAgents:ty,getChatBranches:ey,renameChatBranch:_T,pruneChatBranch:$T,purgeChatBranch:jT,restoreChatBranch:GT,getAgentQueueState:ZT,steerAgentQueueItem:XT,removeAgentQueueItem:YT,streamSidePrompt:VT,getWorkspaceFile:qT,getThread:QT,getTimeline:LT,sendAgentMessage:KT,forkChatBranch:BT,createRootChatSession:NT}=CL;function FT({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:V,branchLoaderSourceChatJid:q}=Y0(()=>WL(_),[_]);g(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let Q=eN({currentChatJid:j,branchLoaderMode:V}),[L,K]=C(()=>U$(ij,!1)),[F,B]=C(null),U=R((f0)=>{let o0=typeof f0==="string"?f0:"";if(!o0.trim())return;B({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:o0})},[]),{agentStatus:E,setAgentStatus:D,agentDraft:H,setAgentDraft:k,agentPlan:z,setAgentPlan:O,agentThought:I,setAgentThought:x,pendingRequest:A,setPendingRequest:M,currentTurnId:W,setCurrentTurnId:y,steerQueuedTurnId:w,setSteerQueuedTurnId:J,lastAgentEventRef:P,lastSilenceNoticeRef:f,isAgentRunningRef:b,draftBufferRef:c,thoughtBufferRef:r,previewResyncPendingRef:e,previewResyncGenerationRef:m,pendingRequestRef:_0,stalledPostIdRef:E0,currentTurnIdRef:Z0,steerQueuedTurnIdRef:$0,thoughtExpandedRef:V0,draftExpandedRef:N0}=dX(),h=QF({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:Y5,vncTabPrefix:o1,getWorkspaceFile:qT}),j0=xK({timelineRef:Q.timelineRef,viewStateRef:Q.viewStateRef,followupQueueRowIdsRef:Q.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:Q.currentHashtag,searchQuery:Q.searchQuery,followupQueueItems:Q.followupQueueItems,onIdentity:R((f0)=>{if(!f0)return;let{assistant_name:o0,assistant_avatar_url:v0}=f0;if(o0||v0)Q.setAgents((m0)=>{let z0=m0.default||{id:"default"},V_=o0&&!z0.name,d0=v0&&!z0.avatar_url;if(!V_&&!d0)return m0;return{...m0,["default"]:{...z0,...V_?{name:o0}:{},...d0?{avatar_url:v0}:{}}}});let{user_name:t0,user_avatar_url:i0,user_avatar_background:F_}=f0;if(t0||i0||F_)Q.setUserProfile((Z_)=>{let m0=t0&&!Z_.name,z0=i0&&!Z_.avatar_url,V_=F_&&!Z_.avatar_background;if(!m0&&!z0&&!V_)return Z_;return{...Z_,...m0?{name:t0}:{},...z0?{avatar_url:i0}:{},...V_?{avatar_background:F_}:{}}})},[Q.setAgents,Q.setUserProfile])}),Q0=UK({environment:{isRenameBranchFormOpen:Q.isRenameBranchFormOpen,renameBranchNameInputRef:Q.renameBranchNameInputRef,appShellRef:Q.appShellRef,setIsWebAppMode:Q.setIsWebAppMode,workspaceOpen:Q.workspaceOpen,setWorkspaceOpen:Q.setWorkspaceOpen,btwSession:Q.btwSession,agents:Q.agents,agentsRef:Q.agentsRef,currentChatJid:j,activeChatJidRef:Q.activeChatJidRef,userProfile:Q.userProfile,userProfileRef:Q.userProfileRef,brandingRef:Q.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:Q.setIntentToast,intentToastTimerRef:Q.intentToastTimerRef,editorOpen:h.editorState.editorOpen,openEditor:h.editorState.openEditor,resolvePane:(f0)=>Y_.resolve(f0),tabStripActiveId:h.editorState.tabStripActiveId,setFileRefs:Q.setFileRefs,setFolderRefs:Q.setFolderRefs,setMessageRefs:Q.setMessageRefs,currentChatJid:j,currentHashtag:Q.currentHashtag,searchQuery:Q.searchQuery,searchOpen:Q.searchOpen,setCurrentHashtag:Q.setCurrentHashtag,setSearchQuery:Q.setSearchQuery,setSearchOpen:Q.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:QT,setPosts:j0.setPosts},agentActivity:{lastActivityTtlMs:XY,lastActivityTimerRef:Q.lastActivityTimerRef,lastActivityTokenRef:Q.lastActivityTokenRef,lastAgentEventRef:P,lastSilenceNoticeRef:f,isAgentRunningRef:b,setIsAgentTurnActive:Q.setIsAgentTurnActive,setAgentStatus:D,draftBufferRef:c,thoughtBufferRef:r,pendingRequestRef:_0,lastAgentResponseRef:Q.lastAgentResponseRef,currentTurnIdRef:Z0,steerQueuedTurnIdRef:$0,agentStatusRef:Q.agentStatusRef,silentRecoveryRef:Q.silentRecoveryRef,thoughtExpandedRef:V0,draftExpandedRef:N0,setCurrentTurnId:y,setSteerQueuedTurnId:J,currentTurnIdRefForPanel:Z0,setAgentThoughtVisibility:NF,getAgentThought:BF,setAgentThought:x,setAgentDraft:k},chatPaneRuntime:{isAgentTurnActive:Q.isAgentTurnActive,steerQueuedTurnId:w,currentTurnId:W,steerQueuedTurnIdRef:$0,setSteerQueuedTurnId:J,agentStatus:E,agentDraft:H,agentPlan:z,agentThought:I,pendingRequest:A,pendingRequestRef:_0,followupQueueItems:Q.followupQueueItems,activeModel:Q.activeModel,activeThinkingLevel:Q.activeThinkingLevel,supportsThinking:Q.supportsThinking,activeModelUsage:Q.activeModelUsage,contextUsage:Q.contextUsage,isAgentRunningRef:b,wasAgentActiveRef:Q.wasAgentActiveRef,draftBufferRef:c,thoughtBufferRef:r,lastAgentEventRef:P,lastSilenceNoticeRef:f,lastAgentResponseRef:Q.lastAgentResponseRef,currentTurnIdRef:Z0,thoughtExpandedRef:V0,draftExpandedRef:N0,agentStatusRef:Q.agentStatusRef,silentRecoveryRef:Q.silentRecoveryRef,setIsAgentTurnActive:Q.setIsAgentTurnActive,setAgentStatus:D,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:M,setCurrentTurnId:y,setFollowupQueueItems:Q.setFollowupQueueItems,setActiveModel:Q.setActiveModel,setActiveThinkingLevel:Q.setActiveThinkingLevel,setSupportsThinking:Q.setSupportsThinking,setActiveModelUsage:Q.setActiveModelUsage,setContextUsage:Q.setContextUsage,lastNotifiedIdRef:Q.lastNotifiedIdRef,agentsRef:Q.agentsRef,notify:Q.notify,shouldNotifyLocallyForChat:Q.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:b,lastSilenceNoticeRef:f,lastAgentEventRef:P,currentTurnIdRef:Z0,thoughtExpandedRef:V0,draftExpandedRef:N0,draftBufferRef:c,thoughtBufferRef:r,pendingRequestRef:_0,lastAgentResponseRef:Q.lastAgentResponseRef,agentStatusRef:Q.agentStatusRef,stalledPostIdRef:E0,scrollToBottomRef:j0.scrollToBottomRef,setCurrentTurnId:y,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:M,setAgentStatus:D,setPosts:j0.setPosts,dedupePosts:W5},viewState:{viewStateRef:Q.viewStateRef,currentHashtag:Q.currentHashtag,searchQuery:Q.searchQuery,searchOpen:Q.searchOpen},removeFileRefRef:h.removeFileRefRef}),O0=$Y({appShellRef:Q.appShellRef,sidebarWidthRef:Q.sidebarWidthRef,editorWidthRef:Q.editorWidthRef,dockHeightRef:Q.dockHeightRef}),{chatRefreshLifecycle:a,timelineViewActions:X0,isComposeBoxAgentActive:W0,followupActions:P0,sidepanelActions:l0,branchPaneActions:u0}=hN({routeState:{currentChatJid:j,currentRootChatJid:Q.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:V,branchLoaderSourceChatJid:q,isWebAppMode:Q.isWebAppMode},searchState:{currentHashtag:Q.currentHashtag,setCurrentHashtag:Q.setCurrentHashtag,searchQuery:Q.searchQuery,setSearchQuery:Q.setSearchQuery,searchOpen:Q.searchOpen,setSearchOpen:Q.setSearchOpen,searchScope:Q.searchScope,setSearchScope:Q.setSearchScope},shellState:{activeChatAgents:Q.activeChatAgents,currentChatBranches:Q.currentChatBranches,currentBranchRecord:Q.currentBranchRecord,contextUsage:Q.contextUsage,activeModel:Q.activeModel,activeThinkingLevel:Q.activeThinkingLevel,supportsThinking:Q.supportsThinking,activeModelUsage:Q.activeModelUsage,connectionStatus:Q.connectionStatus,notificationsEnabled:Q.notificationsEnabled,notificationPermission:Q.notificationPermission,workspaceOpen:Q.workspaceOpen,setWorkspaceOpen:Q.setWorkspaceOpen,userProfile:Q.userProfile,agents:Q.agents,removingPostIds:Q.removingPostIds,btwSession:Q.btwSession},timeline:j0,interaction:Q0,paneRuntime:h.paneRuntime,refs:{activeChatJidRef:Q.activeChatJidRef,queueRefreshGenRef:Q.queueRefreshGenRef,dismissedQueueRowIdsRef:Q.dismissedQueueRowIdsRef,wasAgentActiveRef:Q.wasAgentActiveRef,viewStateRef:Q.viewStateRef,agentStatusRef:Q.agentStatusRef,pendingRequestRef:_0,thoughtBufferRef:r,draftBufferRef:c,previewResyncPendingRef:e,previewResyncGenerationRef:m,isAgentRunningRef:b,currentTurnIdRef:Z0,silentRecoveryRef:Q.silentRecoveryRef,lastAgentEventRef:P,lastSilenceNoticeRef:f,staleUiVersionRef:Q.staleUiVersionRef,staleUiReloadScheduledRef:Q.staleUiReloadScheduledRef,hasConnectedOnceRef:Q.hasConnectedOnceRef,sidebarWidthRef:Q.sidebarWidthRef,appShellRef:Q.appShellRef,agentsRef:Q.agentsRef,paneStateOwnerChatJidRef:Q.paneStateOwnerChatJidRef,chatPaneStateByChatRef:Q.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:Q.dismissedLiveWidgetKeysRef,draftThrottleRef:Q.draftThrottleRef,thoughtThrottleRef:Q.thoughtThrottleRef,followupQueueItemsRef:Q.followupQueueItemsRef,lastAgentResponseRef:Q.lastAgentResponseRef,thoughtExpandedRef:V0,draftExpandedRef:N0,steerQueuedTurnIdRef:$0,btwAbortRef:Q.btwAbortRef,renameBranchInFlightRef:Q.renameBranchInFlightRef,renameBranchLockUntilRef:Q.renameBranchLockUntilRef,editorWidthRef:Q.editorWidthRef,dockHeightRef:Q.dockHeightRef},setters:{setFollowupQueueItems:Q.setFollowupQueueItems,setContextUsage:Q.setContextUsage,setExtensionStatusPanels:Q.setExtensionStatusPanels,setPendingExtensionPanelActions:Q.setPendingExtensionPanelActions,setExtensionWorkingState:Q.setExtensionWorkingState,setAgentStatus:D,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:M,setConnectionStatus:Q.setConnectionStatus,setStateAccessFailed:Q.setStateAccessFailed,setAgents:Q.setAgents,setUserProfile:Q.setUserProfile,setActiveChatAgents:Q.setActiveChatAgents,setCurrentChatBranches:Q.setCurrentChatBranches,setActiveModel:Q.setActiveModel,setActiveThinkingLevel:Q.setActiveThinkingLevel,setSupportsThinking:Q.setSupportsThinking,setActiveModelUsage:Q.setActiveModelUsage,setAgentModelsPayload:Q.setAgentModelsPayload,setHasLoadedAgentModels:Q.setHasLoadedAgentModels,setHasMore:j0.setHasMore,setFloatingWidget:Q.setFloatingWidget,setSteerQueuedTurnId:J,setRemovingPostIds:Q.setRemovingPostIds,setBtwSession:Q.setBtwSession,setWorkspaceOpen:Q.setWorkspaceOpen,setRenameBranchNameDraft:Q.setRenameBranchNameDraft,setIsRenameBranchFormOpen:Q.setIsRenameBranchFormOpen,setIsRenamingBranch:Q.setIsRenamingBranch},services:{searchPosts:ly,deletePost:py,getAgentQueueState:ZT,getAgentContext:dy,getAutoresearchStatus:oy,getAgentStatus:ny,getAgents:ry,getAgentModels:ay,getActiveChatAgents:ty,getChatBranches:ey,getTimeline:LT,stopAutoresearch:iy,dismissAutoresearch:sy,streamSidePrompt:VT,sendAgentMessage:KT,renameChatBranch:_T,pruneChatBranch:$T,purgeChatBranch:jT,restoreChatBranch:GT,forkChatBranch:BT,createRootChatSession:NT,steerAgentQueueItem:XT,removeAgentQueueItem:YT,getAgentThought:BF,setAgentThoughtVisibility:NF,silenceRefreshMs:ZY,silenceWarningMs:jY,silenceFinalizeMs:GY,isCompactionStatus:O$,currentAppAssetVersion:hy,tabStoreHasUnsaved:()=>$_.hasUnsaved(),agentStatus:E,isAgentTurnActive:Q.isAgentTurnActive,openEditor:h.editorState.openEditor,activateTab:h.editorState.handleTabActivate,tabStripActiveId:h.editorState.tabStripActiveId,terminalTabPath:Y5,resolveTab:(f0)=>$_.get(f0),closeTab:h.editorState.handleTabClose,editorOpen:h.editorState.editorOpen},helpers:{getFormLock:DL,readStoredNumber:O4}});g(()=>{return mN({timelineRef:Q.timelineRef,activeChatAgents:Q.activeChatAgents,currentChatJid:j,onSwitch:(f0)=>u0.handleBranchPickerChange(f0),isIOSDevice:W6,isLikelySafari:o8})},[Q.timelineRef,Q.activeChatAgents,j,u0.handleBranchPickerChange]);let G_=Y0(()=>KF({panePopoutMode:Z,modelsLoaded:Q.hasLoadedAgentModels,modelPayload:Q.agentModelsPayload,providerMissingDismissed:L}),[Z,Q.hasLoadedAgentModels,Q.agentModelsPayload,L]),h0=R(()=>{yV()},[]),s0=R(()=>{K(!0),q_(ij,"true")},[]);return g(()=>{if(!Z||typeof document>"u")return;document.title=JL(Y,h.paneRuntime.activePaneTab,X)},[h.paneRuntime.activePaneTab,Y,Z,X]),g(()=>{if(typeof window>"u")return;let f0=(o0)=>{LF(o0,{currentChatJid:j,openEditor:h.editorState.openEditor,popOutPane:u0.handlePopOutPane,showIntentToast:Q0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",f0),()=>{window.removeEventListener("piclaw-extension-ui:request",f0)}},[u0.handlePopOutPane,j,Q0.composeReferenceActions.showIntentToast,h.editorState.openEditor]),BL(fL({routeState:{branchLoaderMode:V,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:h.paneRuntime,splitters:O0,orchestration:{branchPaneActions:u0,timelineViewActions:X0,sidepanelActions:l0,followupActions:P0,chatRefreshLifecycle:a,isComposeBoxAgentActive:W0},interaction:Q0,timeline:j0,surface:{...Q,oobePanelState:G_,composePrefillRequest:F,requestComposePrefill:U,handleOobeSetupProvider:h0,handleOobeShowModelPicker:h0,handleOobeOpenWorkspace:h0,handleDismissProviderMissingOobe:s0},editorState:h.editorState,agentState:{agentStatus:E,agentDraft:H,agentPlan:z,agentThought:I,pendingRequest:A,currentTurnId:W,steerQueuedTurnId:w,setPendingRequest:M,pendingRequestRef:_0,isCompactionStatus:O$},helpers:{formatBranchPickerLabel:X8,isIOSDevice:W6,terminalTabPath:Y5}}))}function UT(){let{locationParams:_,navigate:$}=wV();return N`<${FT} locationParams=${_} navigate=${$} />`}var t8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(t8){if(B$(null,t8),t8.replaceChildren(),B$(N`<${UT} />`,t8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=B8F5B4237A89679264756E2164756E21
//# sourceMappingURL=app.bundle.js.map
