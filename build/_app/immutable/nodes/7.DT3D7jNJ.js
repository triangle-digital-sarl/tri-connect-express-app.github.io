import{_ as a}from"../chunks/preload-helper.BQ24v_F8.js";import{i as I,d as T,e as m,f as L,s as O,c as w,n as l}from"../chunks/scheduler.zdcxGOUJ.js";import{o as V,l as p,p as $,k as d,S as y,i as C,q as h,g as A,d as P,r as E,u as v,v as S,w as g,x as D}from"../chunks/index.NpxvWpjU.js";import{p as q}from"../chunks/stores.BEDCKwjI.js";function R(r,t){const n=t.token={};function c(e,_,o,u){if(t.token!==n)return;t.resolved=u;let s=t.ctx;o!==void 0&&(s=s.slice(),s[o]=u);const i=e&&(t.current=e)(s);let b=!1;t.block&&(t.blocks?t.blocks.forEach((k,f)=>{f!==_&&k&&(V(),p(k,1,1,()=>{t.blocks[f]===k&&(t.blocks[f]=null)}),$())}):t.block.d(1),i.c(),d(i,1),i.m(t.mount(),t.anchor),b=!0),t.block=i,t.blocks&&(t.blocks[_]=i),b&&L()}if(I(r)){const e=T();if(r.then(_=>{m(e),c(t.then,1,t.value,_),m(null)},_=>{if(m(e),c(t.catch,2,t.error,_),m(null),!t.hasCatch)throw _}),t.current!==t.pending)return c(t.pending,0),!0}else{if(t.current!==t.then)return c(t.then,1,t.value,r),!0;t.resolved=r}}function x(r,t,n){const c=t.slice(),{resolved:e}=r;r.current===r.then&&(c[r.value]=e),r.current===r.catch&&(c[r.error]=e),r.block.p(c,n)}function B(r){return{c:l,l,m:l,p:l,i:l,o:l,d:l}}function G(r){let t,n,c;var e=r[3].default;function _(o,u){return{}}return e&&(t=E(e,_())),{c(){t&&v(t.$$.fragment),n=h()},l(o){t&&S(t.$$.fragment,o),n=h()},m(o,u){t&&g(t,o,u),A(o,n,u),c=!0},p(o,u){if(u&1&&e!==(e=o[3].default)){if(t){V();const s=t;p(s.$$.fragment,1,0,()=>{D(s,1)}),$()}e?(t=E(e,_()),v(t.$$.fragment),d(t.$$.fragment,1),g(t,n.parentNode,n)):t=null}},i(o){c||(t&&d(t.$$.fragment,o),c=!0)},o(o){t&&p(t.$$.fragment,o),c=!1},d(o){o&&P(n),t&&D(t,o)}}}function N(r){return{c:l,l,m:l,p:l,i:l,o:l,d:l}}function M(r){let t,n,c,e={ctx:r,current:null,token:null,hasCatch:!1,pending:N,then:G,catch:B,value:3,blocks:[,,,]};return R(n=r[1][r[0]],e),{c(){t=h(),e.block.c()},l(_){t=h(),e.block.l(_)},m(_,o){A(_,t,o),e.block.m(_,e.anchor=o),e.mount=()=>t.parentNode,e.anchor=t,c=!0},p(_,[o]){r=_,e.ctx=r,o&1&&n!==(n=r[1][r[0]])&&R(n,e)||x(e,r,o)},i(_){c||(d(e.block),c=!0)},o(_){for(let o=0;o<3;o+=1){const u=e.blocks[o];p(u)}c=!1},d(_){_&&P(t),e.block.d(_),e.token=null,e=null}}}function Q(r,t,n){let c,e;w(r,q,o=>n(2,e=o));const _={"01_Introduction_and_Goals":a(()=>import("../chunks/01_Introduction_and_Goals.D1dliLjf.js"),__vite__mapDeps([0,1,2]),import.meta.url),"02_Architecture_Constraints":a(()=>import("../chunks/02_Architecture_Constraints.CFTz0bHG.js"),__vite__mapDeps([3,1,2]),import.meta.url),"03_Context_and_scope":a(()=>import("../chunks/03_Context_and_scope.Dm5PIDqZ.js"),__vite__mapDeps([4,1,2]),import.meta.url),"04_Solution_Strategy":a(()=>import("../chunks/04_Solution_Strategy.DPg_3F3a.js"),__vite__mapDeps([5,1,2]),import.meta.url),"05_Building_Block_View":a(()=>import("../chunks/05_Building_Block_View.B2t5lHcX.js"),__vite__mapDeps([6,1,2]),import.meta.url),"06_Runtime_View":a(()=>import("../chunks/06_Runtime_View.KJpEaIvu.js"),__vite__mapDeps([7,1,2]),import.meta.url),"07_Deployment_View":a(()=>import("../chunks/07_Deployment_View.DLe1rkFE.js"),__vite__mapDeps([8,1,2]),import.meta.url),"08_Crosscutting_Concepts":a(()=>import("../chunks/08_Crosscutting_Concepts.LfAnSuzB.js"),__vite__mapDeps([9,1,2]),import.meta.url),"09_Architecture_Decisions":a(()=>import("../chunks/09_Architecture_Decisions.D8IADqgw.js"),__vite__mapDeps([10,1,2]),import.meta.url),"10_QualityRequirements":a(()=>import("../chunks/10_QualityRequirements.9RIFrDCo.js"),__vite__mapDeps([11,1,2]),import.meta.url),"11_Risks_and_Technical_Debt":a(()=>import("../chunks/11_Risks_and_Technical_Debt._PFrxKGI.js"),__vite__mapDeps([12,1,2]),import.meta.url),"12_Glossary":a(()=>import("../chunks/12_Glossary.BhWdyACm.js"),__vite__mapDeps([13,1,2]),import.meta.url)};return r.$$.update=()=>{r.$$.dirty&4&&n(0,c=e.params.sub_sections)},[c,_,e]}class J extends y{constructor(t){super(),C(this,t,Q,M,O,{})}}export{J as component};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/01_Introduction_and_Goals.D1dliLjf.js","../chunks/scheduler.zdcxGOUJ.js","../chunks/index.NpxvWpjU.js","../chunks/02_Architecture_Constraints.CFTz0bHG.js","../chunks/03_Context_and_scope.Dm5PIDqZ.js","../chunks/04_Solution_Strategy.DPg_3F3a.js","../chunks/05_Building_Block_View.B2t5lHcX.js","../chunks/06_Runtime_View.KJpEaIvu.js","../chunks/07_Deployment_View.DLe1rkFE.js","../chunks/08_Crosscutting_Concepts.LfAnSuzB.js","../chunks/09_Architecture_Decisions.D8IADqgw.js","../chunks/10_QualityRequirements.9RIFrDCo.js","../chunks/11_Risks_and_Technical_Debt._PFrxKGI.js","../chunks/12_Glossary.BhWdyACm.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
