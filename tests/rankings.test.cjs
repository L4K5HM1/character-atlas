const test = require('node:test');
const assert = require('node:assert/strict');
const {characters,series} = require('../assets/data.js');
const logic = require('../assets/logic.js');
const state = {query:'',series:'All',faction:'All',sort:'power-desc'};
const character = id => characters.find(c => c.id === id);
const score = (id,i) => character(id).forms[i ?? logic.selectedIndex(character(id))].overall;
test('unique identities, valid forms and explanatory notes', () => {
  assert.equal(new Set(characters.map(c=>c.id)).size,characters.length);
  for (const c of characters) {
    assert.ok(series[c.series]); assert.ok(c.forms.length);
    for(const f of c.forms) { assert.ok(Number.isInteger(f.overall) && f.overall>=0 && f.overall<=100); assert.ok(f.note.length>20); }
  }
});
test('important form-specific ranking regressions', () => {
  assert.ok(score('kyoraku',1)>score('kyoraku',0));
  assert.ok(score('guy')<score('pain'));
  assert.ok(score('hashirama')<score('obito',1));
  assert.equal(score('naruto'),score('sasuke'));
  assert.equal(score('whitebeard'),score('roger'));
  assert.ok(score('zoro')<score('kaido'));
  assert.ok(score('kenpachi')>score('unohana'));
});
test('default to strongest listed and reject invalid selection', () => {
  assert.equal(logic.selectedIndex(character('ichigo')),3);
  for(const value of [-1,99,NaN,1.5,'1']) assert.equal(logic.selectedIndex(character('ichigo'),{ichigo:value}),3);
  assert.equal(logic.selectedIndex(character('ichigo'),{ichigo:0}),0);
});
test('all-series view groups rather than creating a universal leaderboard', () => {
  const rows = logic.list(characters,state);
  const groups = rows.map(c=>c.series).filter((s,i,a)=>i===0||s!==a[i-1]);
  assert.equal(groups.length,3);
});
test('search handles accents, whitespace and no matches', () => {
  const sample=[{...character('ichigo'),name:'Tōshirō'}];
  assert.equal(logic.list(sample,{...state,query:'  toshiro  '}).length,1);
  assert.equal(logic.list(characters,{...state,query:'no such person'}).length,0);
  assert.ok(logic.list(characters,{...state,series:'Naruto'}).every(c=>c.series==='Naruto'));
});
test('earlier form changes sorting without mutating data', () => {
  const original=JSON.stringify(characters);
  const rows=logic.list(characters,{...state,series:'Bleach'},{ichigo:0});
  assert.ok(rows.findIndex(c=>c.id==='ichigo')>rows.findIndex(c=>c.id==='aizen'));
  assert.equal(JSON.stringify(characters),original);
});
test('renderer escapes authored strings',()=>{
  assert.equal(logic.escapeHTML('<img onerror="x">'), '&lt;img onerror=&quot;x&quot;&gt;');
});
