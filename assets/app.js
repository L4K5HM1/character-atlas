'use strict';
(() => {
  const {characters,series} = AtlasData;
  const {escapeHTML:esc,selectedIndex,list,tier,faction} = AtlasLogic;
  const state = {query:'',series:'Bleach',faction:'All',sort:'power-desc'};
  const selection = {};
  const grid = document.getElementById('grid');
  const colors = {Bleach:'#ef728c',Naruto:'#f2a134','One Piece':'#66b7ed'};
  function restoreFocus(id) { if(id) document.getElementById(id)?.focus(); }
  function card(c) {
    const index = selectedIndex(c,selection), form = c.forms[index];
    return `<article class="card" style="--aura:${colors[c.series]}" aria-labelledby="name-${c.id}">
      <div class="card-meta"><span>${esc(c.series)}</span><span>${tier(form.overall)}</span></div>
      <h3 id="name-${c.id}">${esc(c.name)}</h3><p class="faction">${esc(c.faction)}</p>
      <div class="form-pills" role="group" aria-label="Forms of ${esc(c.name)}">${c.forms.map((f,i) =>
        `<button type="button" class="form-pill" id="form-${c.id}-${i}" data-id="${c.id}" data-form="${i}" aria-pressed="${i===index}">${esc(f.name)}</button>`).join('')}</div>
      <div class="score"><span>Within-series estimate</span><strong>${form.overall}<small>/100</small></strong></div>
      <meter min="0" max="100" value="${form.overall}" aria-label="${esc(c.name)} editorial score">${form.overall}</meter>
      <p class="ranking-note">${esc(form.note)}</p>
      <details><summary>Reading context</summary><p>${esc(c.context)}</p>
      <a href="${series[c.series].url}">${esc(series[c.series].label)}</a>
      <p>The reference identifies the story. The score is an editorial judgment, not a published statistic.</p></details></article>`;
  }
  function render() {
    const focus = document.activeElement?.id, results = list(characters,state,selection);
    let previous = '';
    grid.innerHTML = results.map(c => {
      const heading = c.series!==previous ? `<h2 class="series-heading">${esc(c.series)}<small>${esc(series[c.series].cutoff)}</small></h2>` : '';
      previous=c.series; return heading+card(c);
    }).join('') || '<p class="empty">No characters match. Try another name or clear the filters.</p>';
    document.getElementById('resultCount').textContent = `${results.length} of ${characters.length} characters · strongest listed form selected by default`;
    restoreFocus(focus);
  }
  function renderControls() {
    const focus=document.activeElement?.id;
    document.getElementById('seriesChips').innerHTML=['All',...Object.keys(series)].map((s,i)=>
      `<button type="button" class="chip" id="series-${i}" data-series="${s}" aria-pressed="${state.series===s}">${s==='All'?'All · grouped by series':s}</button>`).join('');
    const pool=characters.filter(c=>state.series==='All'||c.series===state.series);
    document.getElementById('factionChips').innerHTML=['All',...new Set(pool.map(faction))].map((f,i)=>
      `<button type="button" class="chip" id="faction-${i}" data-faction="${esc(f)}" aria-pressed="${state.faction===f}">${esc(f)}</button>`).join('');
    restoreFocus(focus);
  }
  document.getElementById('seriesChips').addEventListener('click',e=>{
    const b=e.target.closest('[data-series]'); if(!b)return;
    state.series=b.dataset.series;state.faction='All';renderControls();render();
  });
  document.getElementById('factionChips').addEventListener('click',e=>{
    const b=e.target.closest('[data-faction]');if(!b)return;
    state.faction=b.dataset.faction;renderControls();render();
  });
  grid.addEventListener('click',e=>{
    const b=e.target.closest('[data-form]');if(!b)return;
    selection[b.dataset.id]=Number(b.dataset.form);render();
  });
  document.getElementById('searchInput').addEventListener('input',e=>{state.query=e.target.value;render();});
  document.getElementById('sortSel').addEventListener('change',e=>{state.sort=e.target.value;render();});
  document.getElementById('reset').addEventListener('click',()=>{
    Object.assign(state,{query:'',series:'Bleach',faction:'All',sort:'power-desc'});
    Object.keys(selection).forEach(k=>delete selection[k]);
    document.getElementById('searchInput').value='';document.getElementById('sortSel').value=state.sort;
    renderControls();render();
  });
  renderControls();render();
})();
