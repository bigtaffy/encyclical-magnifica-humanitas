import{i as e,n as t,r as n}from"./refs.DhJJULGI.js";import{a as r,i,o as a,r as o,s,t as c}from"./vocab.DHpOQc-4.js";import{i as l,r as u,t as d}from"./i18n.BPulLVk5.js";var f=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),p=`①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳`,m=(t,r=`ref`)=>t?.length?`<a class="${r}" href="${e(t[0])}" target="_blank" rel="noopener" title="${l(`開啟梵蒂岡原文`,`Open the Vatican original`)}">${n(t)}</a>`:``,h=(e,t)=>`<span class="hex-icon" style="--pal:${e}">${f(t)}</span>`;function g(e,t){if(t===`sun`)return d(e.sun.name);let n=e.islands.find(e=>e.id===t);return n?d(n.name):t}function _(e,t){return e.lines.filter(e=>e.from===t||[].concat(e.to).includes(t))}var v=[``,`一`,`二`,`三`,`四`,`五`,`六`,`七`,`八`],y=[``,`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`],b=e=>v[e]?l(`第${v[e]}章`,`Chapter ${y[e]}`):``;function x(n,r){let a=i[r.palette]??`#c5b5a7`,o=_(n,r.id),s=r.items.length?`<ol class="item-list">${r.items.map((e,t)=>`<li><button type="button" data-select="item" data-id="${e.id}"><span class="circ">${p[t]}</span><span>${f(d(e.name))}</span></button></li>`).join(``)}</ol>`:``;return`
    <header class="card-head">${h(a,r.num)}
      <div><p class="eyebrow">${r.chapter?`${b(r.chapter)} · `:``}${r.ref?`<a href="${e(r.ref[0])}" target="_blank" rel="noopener">${t(r.ref)}</a>`:l(`自我檢視`,`Self-check`)}</p>
      <h2>${f(d(r.name))}</h2></div></header>
    <p class="tagline">${f(d(r.tagline))}</p>
    <p class="summary">${f(d(r.summary))}</p>
    ${s?`<h3 class="eyebrow">${l(`細項`,`Details`)}</h3>${s}`:``}
    ${o.length?`<h3 class="eyebrow">${l(`傳遞路徑`,`Paths of transmission`)}</h3><div class="chips">${o.map(e=>`<button type="button" class="chip" data-select="line" data-id="${e.id}">${f(d(e.label))}</button>`).join(``)}</div>`:``}
    ${r.taiwan&&!u?`<p class="taiwan"><b>在台灣</b>${f(r.taiwan.zh)}</p>`:``}
    ${r.reflect?`<details class="reflect"><summary>${l(`想一想`,`Reflect`)}</summary><p>${f(d(r.reflect))}</p><a class="btn ghost" href="/venite-ad-me/self-check">${l(`去填自我檢視 →`,`Take the self-check (中文) →`)}</a></details>`:``}
    <div class="card-actions"><a class="btn primary" href="${r.guideUrl}">${r.dynamic?r.result?l(`重新填寫 →`,`Retake (中文) →`):l(`填自我檢視 →`,`Take the self-check (中文) →`):l(`讀導讀 →`,`Read the guide (中文) →`)}</a></div>`}function S(t,r,i,a,o){let s=i.facts.map(e=>`<li><span>${f(d(e))}</span>${m(e.ref)}</li>`).join(``),c=i.quote?`<blockquote>${u?`“${f(i.quote.en)}”`:`「${f(i.quote.zh)}」`}${m(i.quote.ref)}</blockquote>`:``;return`
    <div class="thumb">${o?`<img src="${o}" width="160" height="160" alt="">`:``}</div>
    <p class="eyebrow"><button type="button" class="link" data-select="island" data-id="${r.id}">${r.num} ${f(d(r.name))}</button> · ${p[a]}</p>
    <h2>${f(d(i.name))}</h2>
    <p class="plain">${f(d(i.plain))}</p>
    <ul class="facts">${s}</ul>
    ${c}
    ${i.taiwan&&!u?`<p class="taiwan"><b>在台灣</b>${f(i.taiwan.zh)}</p>`:``}
    ${i.reflect&&!u?`<p class="reflect-inline"><b>想一想</b>${f(i.reflect.zh)}</p>`:``}
    <div class="card-actions">
      <a class="btn primary" href="${i.guideUrl??`/venite-ad-me/guide/${r.chapter}#${i.id}`}">${l(`讀導讀 →`,`Guide (中文) →`)}</a>
      <a class="btn ghost" href="${e(i.ref[0])}" target="_blank" rel="noopener">${l(`原文`,`Original`)} ${n([i.ref[0]])} ↗</a>
    </div>`}function C(e,t){let n=[].concat(t.to),r=t.walkers.map(e=>`${e.role===`any`?l(`各種角色輪流`,`all roles in turn`):d(a[e.role])} × ${e.n}`).join(l(`、`,`, `));return`
    <p class="eyebrow">${l(`傳遞路徑`,`Path of transmission`)} · ${m(t.ref)}</p>
    <h2 class="route"><button type="button" class="link" data-select="${t.from===`sun`?`sun`:`island`}" data-id="${t.from}">${f(g(e,t.from))}</button>
      <span aria-hidden="true">→</span> ${n.map(t=>`<button type="button" class="link" data-select="island" data-id="${t}">${f(g(e,t))}</button>`).join(l(`、`,`, `))}</h2>
    <p><span class="evidence ${t.evidence}">${f(d(o[t.evidence]))}</span></p>
    <p class="summary">${f(d(t.note))}</p>
    <dl class="kv">
      <dt>${l(`搬運`,`Carrying`)}</dt><dd>${f(d(c[t.carry]))}</dd>
      ${t.beam?`<dt>${l(`形式`,`Form`)}</dt><dd>${l(`一束光，不走人`,`A beam of light, no walkers`)}</dd>`:`<dt>${l(`傳光的人`,`Light-bearers`)}</dt><dd>${f(r)}</dd>`}
    </dl>`}function w(e,t){let n=t.relatedIsland?e.islands.find(e=>e.id===t.relatedIsland):null;return`
    <p class="eyebrow">${f(d(r[t.region]))} · ${f(d(s[t.kind]))}</p>
    <h2>${f(d(t.country))}</h2>
    <p class="source">${t.source===`document`?l(`文件本身的觀察`,`An observation of the document itself`):l(`主教團的觀察（改寫）`,`Bishops' observation (paraphrased)`)}</p>
    <p class="summary">${f(d(t.gist))} ${m(t.ref)}</p>
    <div class="card-actions">
      ${n?`<button type="button" class="btn ghost" data-select="island" data-id="${n.id}">${l(`相關的島：`,`Related island: `)}${f(d(n.name))} →</button>`:``}
      <a class="btn ghost" href="/venite-ad-me/voices">${l(`看全部聲音 →`,`All voices (中文) →`)}</a>
    </div>
    <p class="fine">${l(`改寫自文件引述的內容，不代表該主教團的正式立場。`,`Paraphrased from the document; not an official position of the conference.`)}</p>`}function T(n){let r=n.sun;return`
    <p class="eyebrow">CHAPTER I · <a href="${e(r.ref[0])}" target="_blank" rel="noopener">${t(r.ref)}</a></p>
    <h2>${f(d(r.card.title))}</h2>
    <ol class="points">${r.card.points.map(e=>`<li><span>${f(d(e))}</span> ${m(e.ref)}</li>`).join(``)}</ol>
    <div class="card-actions"><a class="btn primary" href="/venite-ad-me/guide/1">${l(`讀導讀 →`,`Read the guide (中文) →`)}</a></div>`}function E(e,t,n){if(t.line){let e=t.line;return`
      <p class="eyebrow">${l(`傳光的人`,`Light-bearer`)}</p>
      <h2>${f(n(t.role))}</h2>
      <dl class="kv">
        <dt>${l(`正在走`,`Walking`)}</dt><dd><button type="button" class="link" data-select="line" data-id="${e.id}">${f(d(e.label))}</button></dd>
        <dt>${l(`帶著`,`Carrying`)}</dt><dd>${f(d(c[e.carry]))}</dd>
      </dl>
      <p class="summary">${f(d(e.note))} ${m(e.ref)}</p>`}let r=e.islands.find(e=>e.id===t.island);return`
    <p class="eyebrow">${t.npc?l(`島上的人`,`Resident`):l(`接光的人`,`Receiving the light`)}</p>
    <h2>${t.npc?l(`禮儀島的神父`,`The priest of the Liturgy island`):u?`Waiting at ${f(d(r?.name))}`:`在${f(r?.name.zh??``)}等著接光的人`}</h2>
    <p class="summary">${t.npc?f(d(r?.tagline)):l(`每當有人帶著光走到這裡，光就交到這個人手上，點亮一支新的蠟燭。`,`Whenever someone arrives carrying the light, it is handed over here and a new candle is lit.`)}</p>
    ${r?`<button type="button" class="btn ghost" data-select="island" data-id="${r.id}">${l(`看`,`See `)}${f(d(r.name))} →</button>`:``}`}export{S as a,T as c,g as i,w as l,f as n,C as o,x as r,_ as s,p as t,E as u};