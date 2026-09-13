'use strict';
const AtlasLogic = (() => {
  const normalize = value => String(value).normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
  const faction = c => c.faction.split(' —')[0].split(' (')[0];
  function selectedIndex(c, selection = {}) {
    const i = selection[c.id];
    return Number.isInteger(i) && i >= 0 && i < c.forms.length ? i : c.forms.reduce((best,f,i,a) => f.overall > a[best].overall ? i : best, 0);
  }
  function list(characters, state, selection = {}) {
    return characters.filter(c => (state.series === 'All' || c.series === state.series) &&
      (state.faction === 'All' || faction(c) === state.faction) && normalize(c.name).includes(normalize(state.query)))
      .sort((a,b) => {
        // Different fictional universes never share a ranking, even in All view.
        const group = a.series.localeCompare(b.series);
        const delta = a.forms[selectedIndex(a,selection)].overall - b.forms[selectedIndex(b,selection)].overall;
        return group || (state.sort === 'power-desc' ? -delta : state.sort === 'power-asc' ? delta : 0) || a.name.localeCompare(b.name);
      });
  }
  const tier = n => n>=95 ? 'Exceptional' : n>=85 ? 'Elite' : n>=70 ? 'Advanced' : n>=55 ? 'Established' : 'Developing';
  const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  return {normalize,faction,selectedIndex,list,tier,escapeHTML};
})();
if (typeof module !== 'undefined') module.exports = AtlasLogic;
