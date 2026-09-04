var e,t,r,n,i,o,a,c,s,u,l,f,p,h,v,d=globalThis;function g(e){return e&&e.__esModule?e.default:e}var y={},m={},b=function(e){return e&&e.Math===Math&&e};m=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof d&&d)||b("object"==typeof m&&m)||function(){return this}()||Function("return this")();var _={},w={};_=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;E=S?j.bind(j):function(){return j.apply(j,arguments)};var O={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;r=$&&!O.call({1:2},1)?function(e){var t=$(this,e);return!!t&&t.enumerable}:O;var k={};k=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},L={},x={},M=Function.prototype,T=M.call,F=S&&M.bind.bind(T,T),N={},I=(x=S?F:function(e){return function(){return T.apply(e,arguments)}})({}.toString),A=x("".slice);N=function(e){return A(I(e),8,-1)};var D=Object,C=x("".split);L=w(function(){return!D("z").propertyIsEnumerable(0)})?function(e){return"String"===N(e)?C(e,""):D(e)}:D;var q={},R={};R=function(e){return null==e};var H=TypeError;q=function(e){if(R(e))throw new H("Can't call method on "+e);return e},P=function(e){return L(q(e))};var G={},B={},U={},z={},W="object"==typeof document&&document.all;z=void 0===W&&void 0!==W?function(e){return"function"==typeof e||e===W}:function(e){return"function"==typeof e},U=function(e){return"object"==typeof e?null!==e:z(e)};var Y={},Q={};Q=function(e,t){var r;return arguments.length<2?(r=m[e],z(r)?r:void 0):m[e]&&m[e][t]};var J={};J=x({}.isPrototypeOf);var K={},V={},X={},Z={},ee=m.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var er=m.process,en=m.Deno,ei=er&&er.versions||en&&en.version,eo=ei&&ei.v8;eo&&(i=(n=eo.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&Z&&(!(n=Z.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Z.match(/Chrome\/(\d+)/))&&(i=+n[1]),X=i;var ea=m.String;K=(V=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ec=Object;Y=K?function(e){return"symbol"==typeof e}:function(e){var t=Q("Symbol");return z(t)&&J(t.prototype,ec(e))};var es={},eu={},el={},ef=String;el=function(e){try{return ef(e)}catch(e){return"Object"}};var ep=TypeError;eu=function(e){if(z(e))return e;throw new ep(el(e)+" is not a function")},es=function(e,t){var r=e[t];return R(r)?void 0:eu(r)};var eh={},ev=TypeError;eh=function(e,t){var r,n;if("string"===t&&z(r=e.toString)&&!U(n=E(r,e))||z(r=e.valueOf)&&!U(n=E(r,e))||"string"!==t&&z(r=e.toString)&&!U(n=E(r,e)))return n;throw new ev("Can't convert object to primitive value")};var ed={},eg={},ey={};ey=!1;var em={},eb=Object.defineProperty;em=function(e,t){try{eb(m,e,{value:t,configurable:!0,writable:!0})}catch(r){m[e]=t}return t};var e_="__core-js_shared__",ew=eg=m[e_]||em(e_,{});(ew.versions||(ew.versions=[])).push({version:"3.50.0",mode:ey?"pure":"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eE=Object.create||Object;ed=function(e,t){return eg[e]||(eg[e]=t||eE(null))};var eS={},ej={},eO=Object;ej=function(e){return eO(q(e))};var e$=x({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return e$(ej(e),t)};var ek={},eP=0,eL=Math.random(),ex=x(1.1.toString);ek=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eP+eL,36)};var eM=m.Symbol,eT=ed("wks"),eF=K?eM.for||eM:eM&&eM.withoutSetter||ek,eN=TypeError,eI=function(e){return eS(eT,e)||(eT[e]=V&&eS(eM,e)?eM[e]:eF("Symbol."+e)),eT[e]}("toPrimitive");B=function(e,t){if(!U(e)||Y(e))return e;var r,n=es(e,eI);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!U(r)||Y(r))return r;throw new eN("Can't convert object to primitive value")}return void 0===t&&(t="number"),eh(e,t)},G=function(e){var t=B(e,"string");return Y(t)?t:t+""};var eA={},eD={},eC=m.document,eq=U(eC)&&U(eC.createElement);eD=function(e){return eq?eC.createElement(e):{}},eA=!_&&!w(function(){return 7!==Object.defineProperty(eD("div"),"a",{get:function(){return 7}}).a});var eR=Object.getOwnPropertyDescriptor;t=_?eR:function(e,t){if(e=P(e),t=G(t),eA)try{return eR(e,t)}catch(e){}if(eS(e,t))return k(!E(r,e,t),e[t])};var eH={},eG={};eG=_&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eU=String,ez=TypeError;eB=function(e){if(U(e))return e;throw new ez(eU(e)+" is not an object")};var eW=TypeError,eY=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,eJ="enumerable",eK="configurable",eV="writable";o=_?eG?function(e,t,r){if(eB(e),t=G(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eV in r&&!r[eV]){var n=eQ(e,t);n&&n[eV]&&(e[t]=r.value,r={configurable:eK in r?r[eK]:n[eK],enumerable:eJ in r?r[eJ]:n[eJ],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eB(e),t=G(t),eB(r),eA)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eW("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eH=_?function(e,t,r){return o(e,t,k(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=_&&Object.getOwnPropertyDescriptor,e2=eS(e0,"name"),e4=e2&&(!_||_&&e1(e0,"name").configurable),e5={},e3=x(Function.toString);z(eg.inspectSource)||(eg.inspectSource=function(e){return e3(e)}),e5=eg.inspectSource;var e7={},e8={},e6=m.WeakMap;e8=z(e6)&&/native code/.test(String(e6));var e9={},te=ed("keys");e9=function(e){return te[e]||(te[e]=ek(e))};var tt={};tt={};var tr="Object already initialized",tn=m.TypeError,ti=m.WeakMap;if(e8||eg.state){var to=eg.state||(eg.state=new ti);to.get=to.get,to.has=to.has,to.set=to.set,a=function(e,t){if(to.has(e))throw new tn(tr);return t.facade=e,to.set(e,t),t},c=function(e){return to.get(e)||{}},s=function(e){return to.has(e)}}else{var ta=e9("state");tt[ta]=!0,a=function(e,t){if(eS(e,ta))throw new tn(tr);return t.facade=e,eH(e,ta,t),t},c=function(e){return eS(e,ta)?e[ta]:{}},s=function(e){return eS(e,ta)}}var tc=(e7={set:a,get:c,has:s,enforce:function(e){return s(e)?c(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!U(t)||(r=c(t)).type!==e)throw new tn("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e7.get,tu=String,tl=Object.defineProperty,tf=x("".slice),tp=x("".replace),th=x([].join),tv=_&&!w(function(){return 8!==tl(function(){},"length",{value:8}).length}),td=String(String).split("String"),tg=eZ=function(e,t,r){"Symbol("===tf(tu(t),0,7)&&(t="["+tp(tu(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eS(e,"name")||e4&&e.name!==t)&&(_?tl(e,"name",{value:t,configurable:!0}):e.name=t),tv&&r&&eS(r,"arity")&&e.length!==r.arity&&tl(e,"length",{value:r.arity});try{r&&eS(r,"constructor")&&r.constructor?_&&tl(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tc(e);return eS(n,"source")||(n.source=th(td,"string"==typeof t?t:"")),e};Function.prototype.toString=tg(function(){return z(this)&&ts(this).source||e5(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(z(r)&&eZ(r,a,n),n.global)i?e[t]=r:em(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var ty={},tm={},tb={},t_={},tw={},tE={},tS=Math.ceil,tj=Math.floor;tE=Math.trunc||function(e){var t=+e;return(t>0?tj:tS)(t)},tw=function(e){var t=+e;return t!=t||0===t?0:tE(t)};var tO=Math.max,t$=Math.min;t_=function(e,t){var r=tw(e);return r<0?tO(r+t,0):t$(r,t)};var tk={},tP={},tL=Math.min;tP=function(e){var t=tw(e);return t>0?tL(t,0x1fffffffffffff):0},tk=function(e){return tP(e.length)};var tx=function(e){return function(t,r,n){var i,o=P(t),a=tk(o);if(0===a)return!e&&-1;var c=t_(n,a);if(e&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},tM={includes:tx(!0),indexOf:tx(!1)}.indexOf,tT=x([].push);tb=function(e,t){var r,n=P(e),i=0,o=[];for(r in n)!eS(tt,r)&&eS(n,r)&&tT(o,r);for(;t.length>i;)eS(n,r=t[i++])&&(~tM(o,r)||tT(o,r));return o};var tF=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return tb(e,tF)},l=Object.getOwnPropertySymbols;var tN=x([].concat);tm=Q("Reflect","ownKeys")||function(e){var t=u(eB(e));return l?tN(t,l(e)):t},ty=function(e,r,n){for(var i=tm(r),a=0;a<i.length;a++){var c=i[a];eS(e,c)||n&&eS(n,c)||o(e,c,t(r,c))}};var tI={},tA=/#|\.prototype\./,tD=function(e,t){var r=tq[tC(e)];return r===tH||r!==tR&&(z(t)?w(t):!!t)},tC=tD.normalize=function(e){return String(e).replace(tA,".").toLowerCase()},tq=tD.data={},tR=tD.NATIVE="N",tH=tD.POLYFILL="P";tI=tD,y=function(e,r){var n,i,o,a,c,s=e.target,u=e.global,l=e.stat;if(n=u?m:l?m[s]||em(s,{}):m[s]&&m[s].prototype)for(i in r){if(a=r[i],o=e.dontCallGetSet?(c=t(n,i))&&c.value:n[i],!tI(u?i:s+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ty(a,o)}(e.sham||o&&o.sham)&&eH(a,"sham",!0),eX(n,i,a,e)}};var tG={},tB={},tU=Function.prototype,tz=tU.apply,tW=tU.call;tB="object"==typeof Reflect&&Reflect.apply||(S?tW.bind(tz):function(){return tW.apply(tz,arguments)});var tY={},tQ={},tJ=(tQ=function(e){if("Function"===N(e))return x(e)})(tQ.bind);tY=function(e,t){return eu(e),void 0===t?e:S?tJ(e,t):function(){return e.apply(t,arguments)}};var tK={};tK=Q("document","documentElement");var tV={};tV=x([].slice);var tX={},tZ=TypeError;tX=function(e,t){if(e<t)throw new tZ("Not enough arguments");return e};var t0={};t0=/ipad|iphone|ipod/i.test(Z)&&/applewebkit/i.test(Z);var t1={},t2={},t4=function(e){return Z.slice(0,e.length)===e};t1="NODE"===(t2=t4("Bun/")?"BUN":t4("Cloudflare-Workers")?"CLOUDFLARE":t4("Deno/")?"DENO":t4("Node.js/")?"NODE":m.Bun&&"string"==typeof Bun.version?"BUN":m.Deno&&"object"==typeof Deno.version?"DENO":"process"===N(m.process)?"NODE":m.window&&m.document?"BROWSER":"REST");var t5=m.setImmediate,t3=m.clearImmediate,t7=m.process,t8=m.Dispatch,t6=m.Function,t9=m.MessageChannel,re=m.String,rt=0,rr={},rn="onreadystatechange";w(function(){f=m.location});var ri=function(e){if(eS(rr,e)){var t=rr[e];delete rr[e],t()}},ro=function(e){return function(){ri(e)}},ra=function(e){ri(e.data)},rc=function(e){m.postMessage(re(e),f.protocol+"//"+f.host)};t5&&t3||(t5=function(e){tX(arguments.length,1);var t=z(e)?e:t6(e),r=tV(arguments,1);return rr[++rt]=function(){tB(t,void 0,r)},p(rt),rt},t3=function(e){delete rr[e]},t1?p=function(e){t7.nextTick(ro(e))}:t8&&t8.now?p=function(e){t8.now(ro(e))}:t9&&!t0?(v=(h=new t9).port2,h.port1.onmessage=ra,p=tY(v.postMessage,v)):m.addEventListener&&z(m.postMessage)&&!m.importScripts&&f&&"file:"!==f.protocol&&!w(rc)?(p=rc,m.addEventListener("message",ra,!1)):p=rn in eD("script")?function(e){tK.appendChild(eD("script"))[rn]=function(){tK.removeChild(this),ri(e)}}:function(e){setTimeout(ro(e),0)});var rs=(tG={set:t5,clear:t3}).clear;y({global:!0,bind:!0,enumerable:!0,forced:m.clearImmediate!==rs},{clearImmediate:rs});var ru=tG.set,rl={},rf=m.Function,rp=/MSIE .\./.test(Z)||"BUN"===t2&&((e=m.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rl=function(e,t){var r=t?2:1;return rp?function(n,i){var o=tX(arguments.length,1)>r,a=z(n)?n:rf(n),c=o?tV(arguments,r):[],s=o?function(){tB(a,this,c)}:a;return t?e(s,i):e(s)}:e};var rh=m.setImmediate?rl(ru,!1):ru;y({global:!0,bind:!0,enumerable:!0,forced:m.setImmediate!==rh},{setImmediate:rh});let rv="https://forkify-api.herokuapp.com/api/v2/recipes/",rd=async function(e){try{let t=fetch(e),r=await Promise.race([t,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(e){throw e}},rg={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},ry=async function(e){try{let{recipe:t}=(await rd(`${rv}${e}`)).data;rg.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients}}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rm=async function(e){try{rg.search.query=e;let t=await rd(`${rv}?search=${e}`);rg.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rb=function(e=rg.search.page){rg.search.page=e;let t=(e-1)*rg.search.resultsPerPage,r=e*rg.search.resultsPerPage;return rg.search.results.slice(t,r)};var r_={};r_=import.meta.resolve("eyyUD");class rw{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${g(r_)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${g(r_)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${g(r_)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rE extends rw{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${g(r_)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${g(r_)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--update-servings btn--tiny" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${g(r_)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--update-servings btn--tiny" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${g(r_)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${g(r_)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg>
            <use href="${g(r_)}#icon-bookmark${this._data.bookmarked,""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          the directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${g(r_)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${g(r_)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?e.quantity:""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
    `}}var rS=new rE;class rj extends rw{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rO=new rj;class r$ extends rw{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>this._generateMarkupPreview(e)).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
          </div>
        </a>
      </li>
    `}}var rk=new r$;class rP extends rw{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${g(r_)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${g(r_)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${g(r_)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${g(r_)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var rL=new rP,rx=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,c,s,u,l=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(l,"_invoke",{value:(a=e,c=n,s=new k(o||[]),u=p,function(e,r){if(u===h)throw Error("Generator is already running");if(u===v){if("throw"===e)throw r;return{value:t,done:!0}}for(s.method=e,s.arg=r;;){var n=s.delegate;if(n){var i=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?d:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),d);var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,d;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,d):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,d)}(n,s);if(i){if(i===d)continue;return i}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(u===p)throw u=v,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);u=h;var o=f(a,c,s);if("normal"===o.type){if(u=s.done?v:"suspendedYield",o.arg===d)continue;return{value:o.arg,done:s.done}}"throw"===o.type&&(u=v,s.method="throw",s.arg=o.arg)}})}),l}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",v="completed",d={};function g(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(P([])));w&&w!==r&&n.call(w,a)&&(b=w);var E=m.prototype=g.prototype=Object.create(b);function S(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function j(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,c){var s=f(e[i],e,o);if("throw"===s.type)c(s.arg);else{var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,c)},function(e){r("throw",e,a,c)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,c)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function P(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(E,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(j.prototype),u(j.prototype,c,function(){return this}),e.AsyncIterator=j,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new j(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},S(E),u(E,s,"Generator"),u(E,a,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);else if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}({});try{regeneratorRuntime=rx}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rx:Function("r","regeneratorRuntime = r")(rx)}let rM=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rS.renderSpinner(),await ry(e),rS.render(rg.recipe)}catch(e){rS.renderError()}},rT=async function(){try{rk.renderSpinner();let e=rO.getQuery();if(!e)return;await rm(e),rk.render(rb()),rL.render(rg.search)}catch(e){console.log(e)}};rS.addHandlerRender(rM),rO.addHandlerSearch(rT),rL.addHandlerClick(function(e){rk.render(rb(e)),rL.render(rg.search)});
//# sourceMappingURL=Proyecto final JavaScript II.8694b00c.js.map
