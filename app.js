/* ---------- icons ---------- */
function garmentIcon(type){
  const common='viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"';
  const map={
    tshirt:`<svg ${common}><path d="M22 10 13 14 6 25l11 6 4-7v28h22V24l4 7 11-6-7-11-9-4c-2 5-18 5-20 0Z"/></svg>`,
    tank:`<svg ${common}><path d="M23 9c0 7-4 9-8 11v32h34V20c-4-2-8-4-8-11l-6 3h-6l-6-3Z"/><path d="M25 14c1 7 13 7 14 0"/></svg>`,
    shirt:`<svg ${common}><path d="M21 9 10 15l5 14 7-3v27h20V26l7 3 5-14-11-6-6 8H27l-6-8Z"/><path d="m27 17 5 7 5-7M32 24v29M29 31h6"/></svg>`,
    polo:`<svg ${common}><path d="M22 10 12 15 7 27l11 5 4-8v28h20V24l4 8 11-5-5-12-10-5-5 8H27l-5-8Z"/><path d="m27 18 5 6 5-6"/></svg>`,
    sweater:`<svg ${common}><path d="M21 10 9 17l7 12 7-4v27h18V25l7 4 7-12-12-7c-3 5-19 5-22 0Z"/></svg>`,
    jacket:`<svg ${common}><path d="M23 9 11 16l4 34 12 3 5-25 5 25 12-3 4-34-12-7-9 12-9-12Z"/><path d="M32 21v7"/></svg>`,
    pants:`<svg ${common}><path d="M18 9h28l2 43H36l-4-26-4 26H16l2-43Z"/><path d="M20 17h24"/></svg>`,
    shorts:`<svg ${common}><path d="M17 10h30l2 29-14 3-3-14-3 14-14-3 2-29Z"/><path d="M18 18h28"/></svg>`,
    shoes:`<svg ${common}><path d="M7 39c7 0 12-2 17-10 3 6 10 9 17 10 4 1 7 4 7 8H10c-3 0-5-2-5-4 0-2 1-3 2-4Z"/><path d="M39 36c4 2 9 3 14 3 4 1 6 4 6 8H47"/></svg>`,
    umbrella:`<svg ${common}><path d="M9 29c3-12 12-19 23-19s20 7 23 19c-5-3-9-3-14 0-5-3-9-3-14 0-5-3-9-3-14 0Z"/><path d="M32 10v35c0 7 10 7 10 0"/></svg>`
  };
  return map[type]||map.tshirt;
}

/* ---------- data ---------- */
const pieces=[
{id:'tshirt',label:'T-shirt',group:'top'},
{id:'tank',label:'Débardeur',group:'top'},
{id:'shirt',label:'Chemise',group:'top'},
{id:'polo',label:'Polo',group:'top'},
{id:'sweater',label:'Pull / sweat',group:'top'},
{id:'jacket',label:'Veste',group:'outer'},
{id:'pants',label:'Pantalon / jean',group:'bottom',sub:'Jean inclus'},
{id:'shorts',label:'Short',group:'bottom'}
];

const families={
'Noir':{'Noir':'#171717','Noir délavé':'#4a4c4e'},
'Blanc':{'Blanc':'#f7f7f2','Écru':'#eee5d1','Crème':'#f3e5c6'},
'Gris':{'Gris clair':'#c7c9c6','Gris moyen':'#8f9291','Anthracite':'#4e5052'},
'Beige':{'Sable':'#d9c3a4','Taupe':'#a8957e','Lin':'#d9ccb4'},
'Marron':{'Camel':'#b57943','Cognac':'#9b5a31','Chocolat':'#5a3928','Noisette':'#856046'},
'Rouge':{'Écarlate':'#ee003d','Carmin':'#a61b31','Bordeaux':'#6f2331','Brique':'#ad4d3b','Grenat':'#67202a'},
'Orange':{'Orange':'#ed7c2d','Terracotta':'#bb6246','Rouille':'#9d5030','Corail':'#e98070'},
'Jaune':{'Citron':'#ffeb2e','Jaune pâle':'#f0df9f','Moutarde':'#c69120','Ocre':'#c88c31','Doré':'#d2a13a'},
'Vert':{'Kaki':'#73754c','Olive':'#7b7c45','Forêt':'#244c37','Sauge':'#9da88e','Menthe':'#b8d5c0'},
'Bleu':{'Bleu marine':'#233a55','Bleu ciel':'#91c3e5','Bleu roi':'#3159a3','Bleu pétrole':'#2d636d','Denim':'#587996'},
'Violet':{'Prune':'#6f4163','Aubergine':'#513344','Lilas':'#baa6cf','Lavande':'#a79cca'},
'Rose':{'Rose poudré':'#d8aba9','Vieux rose':'#b98382','Fuchsia':'#d60073','Saumon':'#e78d7b'}
};
const familyHex={
'Noir':'#171717','Blanc':'#f5f5ef','Gris':'#999','Beige':'#d4bea0','Marron':'#79513a',
'Rouge':'#ee003d','Orange':'#ef7d2c','Jaune':'#ffe500','Vert':'#35c97d','Bleu':'#3c75b5','Violet':'#9e239d','Rose':'#f40063'
};
const familyOrder=['Noir','Vert','Rouge','Bleu','Jaune','Violet','Rose','Blanc','Gris','Beige','Marron','Orange'];

const pairings={
'Moutarde':['Blanc','Bleu','Beige','Vert','Rouge','Noir','Gris','Marron'],
'Ocre':['Blanc','Bleu','Beige','Marron','Vert','Noir','Rouge'],
'Citron':['Blanc','Bleu','Gris','Noir','Vert','Beige'],
'Jaune pâle':['Blanc','Bleu','Beige','Gris','Vert','Rose'],
'Doré':['Noir','Blanc','Bleu','Marron','Beige','Vert'],
'Écarlate':['Blanc','Bleu','Noir','Gris','Beige','Marron'],
'Bordeaux':['Blanc','Beige','Bleu','Gris','Noir','Vert','Marron'],
'Carmin':['Blanc','Bleu','Beige','Noir','Gris','Marron'],
'Brique':['Blanc','Beige','Bleu','Vert','Marron','Noir'],
'Grenat':['Blanc','Beige','Bleu','Gris','Noir','Vert'],
'Bleu marine':['Blanc','Beige','Marron','Jaune','Rouge','Vert','Gris'],
'Bleu ciel':['Blanc','Beige','Bleu','Marron','Gris','Jaune','Rose'],
'Bleu roi':['Blanc','Beige','Gris','Noir','Marron','Rouge'],
'Bleu pétrole':['Blanc','Beige','Marron','Gris','Jaune','Vert'],
'Denim':['Blanc','Beige','Marron','Gris','Rouge','Vert','Jaune','Noir'],
'Kaki':['Blanc','Beige','Marron','Noir','Gris','Bleu','Rouge'],
'Olive':['Blanc','Beige','Marron','Noir','Bleu','Rouge'],
'Forêt':['Blanc','Beige','Marron','Gris','Bleu','Rouge'],
'Sauge':['Blanc','Beige','Marron','Gris','Rose','Bleu'],
'Menthe':['Blanc','Beige','Gris','Bleu','Rose'],
'Camel':['Blanc','Bleu','Noir','Vert','Beige','Rouge','Gris'],
'Cognac':['Blanc','Bleu','Beige','Vert','Noir','Gris'],
'Chocolat':['Blanc','Beige','Bleu','Vert','Gris','Rose'],
'Noisette':['Blanc','Beige','Bleu','Vert','Gris'],
'Noir':['Blanc','Gris','Beige','Rouge','Bleu','Vert','Jaune','Rose','Violet','Orange','Marron'],
'Noir délavé':['Blanc','Gris','Beige','Bleu','Rouge','Vert','Marron'],
'Blanc':['Bleu','Noir','Beige','Marron','Vert','Rouge','Jaune','Rose','Violet','Orange','Gris'],
'Écru':['Bleu','Marron','Vert','Beige','Rouge','Jaune','Gris','Noir'],
'Crème':['Marron','Bleu','Vert','Beige','Rouge','Jaune','Gris'],
'Gris clair':['Blanc','Bleu','Noir','Rouge','Vert','Rose','Marron','Jaune'],
'Gris moyen':['Blanc','Bleu','Noir','Rouge','Vert','Beige','Marron'],
'Anthracite':['Blanc','Beige','Bleu','Rouge','Vert','Rose','Jaune'],
'Sable':['Blanc','Bleu','Marron','Vert','Noir','Rouge','Jaune'],
'Taupe':['Blanc','Bleu','Marron','Vert','Noir','Rose'],
'Lin':['Blanc','Bleu','Marron','Vert','Rouge','Jaune'],
'Orange':['Blanc','Bleu','Beige','Marron','Noir','Vert'],
'Terracotta':['Blanc','Beige','Bleu','Vert','Marron','Noir'],
'Rouille':['Blanc','Beige','Bleu','Vert','Marron','Noir'],
'Corail':['Blanc','Beige','Bleu','Gris','Vert'],
'Prune':['Blanc','Beige','Gris','Noir','Bleu','Rose'],
'Aubergine':['Blanc','Beige','Gris','Noir','Bleu','Vert'],
'Lilas':['Blanc','Gris','Beige','Bleu','Rose'],
'Lavande':['Blanc','Gris','Beige','Bleu','Rose'],
'Rose poudré':['Blanc','Beige','Gris','Bleu','Marron','Vert'],
'Vieux rose':['Blanc','Beige','Gris','Bleu','Marron','Vert'],
'Fuchsia':['Blanc','Noir','Gris','Bleu','Beige'],
'Saumon':['Blanc','Beige','Bleu','Gris','Vert']
};
const preferred={
'Blanc':['Blanc','Écru','Crème'],'Bleu':['Bleu marine','Bleu ciel','Denim','Bleu pétrole','Bleu roi'],
'Beige':['Lin','Sable','Taupe'],'Vert':['Kaki','Sauge','Olive','Forêt','Menthe'],
'Rouge':['Bordeaux','Brique','Grenat','Carmin','Écarlate'],'Noir':['Noir','Noir délavé'],
'Gris':['Gris clair','Anthracite','Gris moyen'],'Marron':['Camel','Cognac','Noisette','Chocolat'],
'Jaune':['Moutarde','Ocre','Jaune pâle','Doré','Citron'],'Rose':['Rose poudré','Vieux rose','Saumon','Fuchsia'],
'Violet':['Prune','Lavande','Lilas','Aubergine'],'Orange':['Terracotta','Rouille','Corail','Orange']
};

const styles=[
{id:'auto',label:'Stylia choisit'},
{id:'simple',label:'Simple'},
{id:'summer',label:'Été'},
{id:'smart',label:'Plus habillé'},
{id:'contrast',label:'Contraste'}
];

/* Préférence dressing : pour les bas, Stylia privilégie bleu, noir et blanc. */
const bottomFamilyPriority=['Bleu','Noir','Blanc','Gris','Beige','Marron','Vert','Rouge','Jaune','Violet','Rose','Orange'];

function preferredBottomShade(index=0){
  const fam=bottomFamilyPriority[index] || bottomFamilyPriority[0];
  return pick(fam,0);
}

const state={
 piece:null,family:null,shade:null,style:'auto',
 looks:[],activeLook:0,changeGroup:'top',ownedOnly:false
};

/* ---------- bus Stylia → 3615 ---------- */
const STYLIA_SNAPSHOT_KEY='lenaic-stylia-snapshot-v1';
let lastValidatedSignature='';
function styliaLocalDateKey(date=new Date()){
 const d=new Date(date);
 return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function outfitPayload(look){
 if(!look)return null;
 const part=k=>look[k]?{piece:look[k].piece,shade:look[k].shade,icon:look[k].icon||null}:null;
 return {
  date:styliaLocalDateKey(),
  generatedAt:new Date().toISOString(),
  name:look.name||'Tenue Stylia',
  kind:look.kind||null,
  why:look.why||'',
  top:part('top'),
  bottom:part('bottom'),
  outer:part('outer'),
  shoes:part('shoes'),
  accessory:part('accessory'),
  rain:Boolean(clermontWeather?.rain),
  season:clermontWeather?.season||clermontSeason(),
  weatherReady:Boolean(clermontWeather?.ready)
 };
}
function outfitSignature(payload){
 const core={date:payload?.date||'',name:payload?.name||'',top:payload?.top||null,bottom:payload?.bottom||null,outer:payload?.outer||null,shoes:payload?.shoes||null,accessory:payload?.accessory||null};
 return JSON.stringify(core);
}
function persistValidatedOutfit(look){
 const payload=outfitPayload(look);
 if(!payload)return null;
 payload.status='validated';
 payload.validatedAt=new Date().toISOString();
 const signature=outfitSignature(payload);
 lastValidatedSignature=signature;
 try{localStorage.setItem(STYLIA_SNAPSHOT_KEY,JSON.stringify(payload))}catch(e){}
 if(window.LenaicBus){
  LenaicBus.publish('outfit.validated',payload,{source:'stylia',target:'3615'});
 }
 return payload;
}
function readValidatedOutfit(){
 try{return JSON.parse(localStorage.getItem(STYLIA_SNAPSHOT_KEY)||'null')}catch(e){return null}
}
function currentLookIsValidated(){
 const look=state.looks[state.activeLook];
 const current=outfitPayload(look);
 const saved=readValidatedOutfit();
 if(!current||!saved)return false;
 return outfitSignature(current)===outfitSignature(saved) && saved.date===styliaLocalDateKey();
}
function renderValidationState(){
 const btn=$('validateLookBtn');
 const hint=$('validationHint');
 if(!btn||!hint)return;
 const validated=currentLookIsValidated();
 btn.classList.toggle('validated',validated);
 btn.textContent=validated?'Tenue du jour validée pour 3615':'Valider cette tenue pour 3615';
 hint.textContent=validated
   ?'Cette tenue est bien celle envoyée au 3615 pour aujourd’hui.'
   :'Choisis explicitement cette tenue pour qu’elle apparaisse sur l’accueil du 3615.';
}

/* Stylia utilise silencieusement la météo de Clermont-Ferrand pour choisir
   les couches et accessoires. Rien de météo n'est affiché dans l'interface. */
const clermontWeather={
  ready:false,
  season:null,
  temperature:null,
  apparent:null,
  max:null,
  min:null,
  rain:false
};

function clermontSeason(){
  const month=Number(new Intl.DateTimeFormat('en-GB',{
    timeZone:'Europe/Paris',month:'numeric'
  }).format(new Date()));
  if([12,1,2].includes(month))return 'winter';
  if([3,4,5].includes(month))return 'spring';
  if([6,7,8].includes(month))return 'summer';
  return 'autumn';
}

async function loadClermontWeather(){
  clermontWeather.season=clermontSeason();
  try{
    const url='https://api.open-meteo.com/v1/forecast'
      +'?latitude=45.775882&longitude=3.082285'
      +'&current=temperature_2m,apparent_temperature,precipitation,rain,weather_code'
      +'&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,weather_code'
      +'&timezone=Europe%2FParis&forecast_days=1';
    const r=await fetch(url,{cache:'no-store'});
    if(!r.ok)throw new Error('weather unavailable');
    const d=await r.json();
    clermontWeather.temperature=d.current?.temperature_2m ?? null;
    clermontWeather.apparent=d.current?.apparent_temperature ?? clermontWeather.temperature;
    clermontWeather.max=d.daily?.temperature_2m_max?.[0] ?? clermontWeather.temperature;
    clermontWeather.min=d.daily?.temperature_2m_min?.[0] ?? clermontWeather.temperature;
    const prob=d.daily?.precipitation_probability_max?.[0] ?? 0;
    const sum=d.daily?.precipitation_sum?.[0] ?? 0;
    const rainNow=(d.current?.rain ?? 0)>0 || (d.current?.precipitation ?? 0)>0;
    const code=d.current?.weather_code ?? d.daily?.weather_code?.[0] ?? 0;
    const rainyCode=[51,53,55,56,57,61,63,65,66,67,80,81,82,95,96,99].includes(code);
    clermontWeather.rain=rainNow || sum>=0.5 || prob>=55 || rainyCode;
    clermontWeather.ready=true;
  }catch(e){
    // Si l'accès réseau échoue, la saison reste le filet de sécurité.
    clermontWeather.ready=false;
  }
  return clermontWeather;
}
const weatherPromise=loadClermontWeather();

function weatherProfile(){
  const season=clermontWeather.season||clermontSeason();
  const apparent=clermontWeather.apparent;
  const max=clermontWeather.max;
  const ref=Number.isFinite(max)?max:(Number.isFinite(apparent)?apparent:null);

  if(season==='summer'){
    if(ref!==null && ref<16)return 'summer-cool';
    return 'summer';
  }
  if(season==='winter'){
    if(ref!==null && ref>=17)return 'winter-mild';
    return 'winter';
  }
  if(ref!==null && ref>=24)return 'warm';
  if(ref!==null && ref<=10)return 'cold';
  return season;
}

const $=id=>document.getElementById(id);
function familyOfShade(s){return Object.keys(families).find(f=>Object.keys(families[f]).includes(s))}
function shadeHex(s){const f=familyOfShade(s);return f?families[f][s]:'#eee'}
function pieceById(id){return pieces.find(p=>p.id===id)}

function withAgreement(item){
  if(!item) return '';
  const piece=item.piece || '';
  const shade=(item.shade || '').toLowerCase();

  const feminineSingular=new Set(['Chemise','Surchemise','Veste']);
  const femininePlural=new Set(['Baskets','Sandales']);
  const masculinePlural=new Set(['Mocassins']);

  const fs={
    'blanc':'blanche','noir':'noire','gris':'grise','écru':'écrue','doré':'dorée','bleu':'bleue','vert':'verte','violet':'violette'
  };
  const fp={
    'blanc':'blanches','noir':'noires','gris':'grises','écru':'écrues','doré':'dorées'
  };
  const mp={
    'blanc':'blancs','noir':'noirs','gris':'gris','écru':'écrus','doré':'dorés'
  };

  let agreed=shade;
  if(feminineSingular.has(piece)) agreed=fs[shade] || shade;
  else if(femininePlural.has(piece)) agreed=fp[shade] || shade;
  else if(masculinePlural.has(piece)) agreed=mp[shade] || shade;

  return `${piece} ${agreed}`;
}

function possessiveForPiece(piece){
  return ['Chemise','Surchemise','Veste'].includes(piece) ? 'ta' : 'ton';
}
function pick(fam,idx=0){const a=preferred[fam]||Object.keys(families[fam]||{});return a[idx]||a[0]}
function toast(t){$('toast').textContent=t;$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),1500)}

/* ---------- render quiz ---------- */
function renderPieces(){
 $('pieceGrid').innerHTML='';
 pieces.forEach(p=>{
  const b=document.createElement('button');
  b.className='piece'+(state.piece===p.id?' selected':'');
  b.innerHTML=`${garmentIcon(p.id)}<span>${p.label}</span>${p.sub?`<small>${p.sub}</small>`:''}`;
  b.onclick=()=>{
    state.piece=p.id;
    renderPieces();
    $('colorSection').classList.remove('hidden');
    updateStepper(2);
    setTimeout(()=>$('colorSection').scrollIntoView({behavior:'smooth',block:'center'}),80);
  };
  $('pieceGrid').appendChild(b);
 });
}
function renderColors(){
 $('colorGrid').innerHTML='';
 familyOrder.forEach(f=>{
  const b=document.createElement('button');
  b.className='color-choice'+(state.family===f?' selected':'');
  b.innerHTML=`<span class="color-ball" style="background:${familyHex[f]}"></span><span>${f}</span>`;
  b.onclick=()=>{
    state.family=f;state.shade=null;
    renderColors();renderShades();
    $('shadeSection').classList.remove('hidden');
    $('styleSection').classList.add('hidden');$('seeLooks').classList.add('hidden');
    $('shadeHelp').textContent=`Affinons le ${f.toLowerCase()}.`;
    updateStepper(3);
    setTimeout(()=>$('shadeSection').scrollIntoView({behavior:'smooth',block:'center'}),80);
  };
  $('colorGrid').appendChild(b);
 });
}
function renderShades(){
 $('shadeRow').innerHTML='';
 if(!state.family)return;
 Object.entries(families[state.family]).forEach(([s,c])=>{
  const b=document.createElement('button');
  b.className='shade'+(state.shade===s?' selected':'');
  b.innerHTML=`<div class="shade-ball" style="background:${c}"></div><div>${s}</div>`;
  b.onclick=()=>{
    state.shade=s;renderShades();
    $('styleSection').classList.remove('hidden');$('seeLooks').classList.remove('hidden');
    updateStepper(4);
    setTimeout(()=>$('styleSection').scrollIntoView({behavior:'smooth',block:'center'}),80);
  };
  $('shadeRow').appendChild(b);
 });
}
function renderStyles(){
 $('styleChips').innerHTML='';
 styles.forEach(s=>{
  const b=document.createElement('button');
  b.className='style-chip'+(state.style===s.id?' selected':'');
  b.textContent=s.label;
  b.onclick=()=>{state.style=s.id;renderStyles()};
  $('styleChips').appendChild(b);
 });
}
function updateStepper(n){
 document.querySelectorAll('.step').forEach((el,i)=>{
   el.classList.toggle('on',i+1===n);
   el.classList.toggle('done',i+1<n);
 });
}
renderPieces();renderColors();renderStyles();

/* ---------- looks ---------- */
function baseItem(){
 const p=pieceById(state.piece);
 return {group:p.group,piece:p.label,shade:state.shade,icon:p.id};
}
function basePalette(){return pairings[state.shade]||['Blanc','Bleu','Beige','Noir','Gris','Marron','Vert']}

function preserveBase(group){
  return pieceById(state.piece)?.group===group;
}

function applySeasonAndWeather(look){
  const profile=weatherProfile();

  /* L'utilisateur peut toujours partir de la pièce qu'il a choisie.
     Les corrections saisonnières ne remplacent que les pièces proposées par Stylia. */
  if(profile==='summer' || profile==='warm'){
    if(!preserveBase('top') && look.top && ['Pull / sweat'].includes(look.top.piece)){
      look.top={group:'top',piece:'T-shirt',shade:look.top.shade,icon:'tshirt'};
    }
    if(!preserveBase('bottom') && look.bottom?.piece==='Pantalon / jean' && profile==='summer'){
      // On garde un pantalon léger possible, mais certains looks basculent vers le short.
      if(look.kind==='summer')look.bottom={group:'bottom',piece:'Short',shade:look.bottom.shade,icon:'shorts'};
    }
    if(!preserveBase('outer') && profile==='summer'){
      look.outer=null;
    }
  }

  if(profile==='summer-cool'){
    if(!preserveBase('top') && look.top?.piece==='Pull / sweat'){
      look.top={group:'top',piece:'T-shirt',shade:look.top.shade,icon:'tshirt'};
    }
    if(!preserveBase('outer') && !look.outer){
      look.outer={group:'outer',piece:'Surchemise',shade:'Bleu marine',icon:'jacket'};
    }
  }

  if(profile==='autumn' || profile==='spring'){
    if(!preserveBase('top') && look.top?.piece==='Débardeur'){
      look.top={group:'top',piece:'T-shirt',shade:look.top.shade,icon:'tshirt'};
    }
    if(!preserveBase('outer') && !look.outer && look.kind!=='summer'){
      look.outer={group:'outer',piece:'Surchemise',shade:'Bleu marine',icon:'jacket'};
    }
  }

  if(profile==='cold' || profile==='winter'){
    if(!preserveBase('top') && look.top && ['T-shirt','Débardeur'].includes(look.top.piece)){
      look.top={group:'top',piece:'Pull / sweat',shade:look.top.shade,icon:'sweater'};
    }
    if(!preserveBase('bottom') && look.bottom?.piece==='Short'){
      look.bottom={group:'bottom',piece:'Pantalon / jean',shade:look.bottom.shade,icon:'pants'};
    }
    if(!preserveBase('outer')){
      const shade=look.outer?.shade || 'Bleu marine';
      look.outer={group:'outer',piece:'Veste',shade,icon:'jacket'};
    }
  }

  if(profile==='winter-mild'){
    if(!preserveBase('top') && look.top?.piece==='Débardeur'){
      look.top={group:'top',piece:'Chemise',shade:look.top.shade,icon:'shirt'};
    }
    if(!preserveBase('outer') && !look.outer){
      look.outer={group:'outer',piece:'Veste',shade:'Bleu marine',icon:'jacket'};
    }
  }

  if(clermontWeather.rain){
    look.accessory={group:'accessory',piece:'Parapluie',shade:'Noir',icon:'umbrella'};
  }else{
    look.accessory=null;
  }
  return look;
}

function makeLook(name,kind,why,mods={}){
 const base=baseItem(), fams=basePalette();
 const o={name,kind,why,top:null,bottom:null,outer:null,shoes:null};
 o[base.group]=base;
 const f0=mods.f0||fams[0],f1=mods.f1||fams[1]||fams[0],f2=mods.f2||fams[2]||fams[0];
 if(!o.top)o.top={group:'top',piece:mods.topPiece||'T-shirt',shade:mods.topShade||pick(f0),icon:mods.topIcon||'tshirt'};
 if(!o.bottom)o.bottom={group:'bottom',piece:mods.bottomPiece||'Pantalon / jean',shade:mods.bottomShade||preferredBottomShade(0),icon:mods.bottomIcon||'pants'};
 if(mods.outer!==false && !o.outer)o.outer={group:'outer',piece:mods.outerPiece||'Surchemise',shade:mods.outerShade||pick(f1),icon:'jacket'};
 if(!o.shoes)o.shoes={group:'shoes',piece:mods.shoePiece||'Baskets',shade:mods.shoeShade||'Blanc',icon:'shoes'};
 return applySeasonAndWeather(o);
}
function buildLooks(){
 let looks;
 if(state.shade==='Moutarde'){
  looks=[
   makeLook('Simple','simple','Le blanc éclaire le moutarde et le bleu marine crée le contraste principal.',{topShade:'Blanc',outerShade:'Bleu marine',bottomShade:'Bleu marine',shoeShade:'Blanc'}),
   makeLook('Été','summer','Écru et blanc gardent l’ensemble léger, lumineux et facile à porter.',{topPiece:'Chemise',topIcon:'shirt',topShade:'Écru',outer:false,bottomShade:'Blanc',shoeShade:'Blanc'}),
   makeLook('Plus habillé','smart','Le bleu marine, le noir et le cognac donnent un rendu plus structuré.',{topPiece:'Polo',topIcon:'polo',topShade:'Bleu marine',outer:false,bottomShade:'Noir',shoePiece:'Mocassins',shoeShade:'Cognac'}),
   makeLook('Contraste','contrast','Le noir donne plus de caractère tout en gardant le moutarde comme pièce forte.',{topShade:'Noir',outer:false,bottomShade:'Noir',shoeShade:'Blanc'})
  ];
 }else{
  const fams=basePalette();
  looks=[
    makeLook('Simple','simple','Une base claire et une couleur secondaire nette gardent la tenue équilibrée.',{f0:fams[0],bottomShade:'Bleu marine',shoeShade:'Blanc'}),
    makeLook('Été','summer','Des tons plus légers et peu de couches donnent un ensemble frais.',{topPiece:'Chemise',topIcon:'shirt',outer:false,f0:fams[0],bottomShade:'Blanc',shoeShade:'Blanc'}),
    makeLook('Plus habillé','smart','Une pièce supérieure plus structurée et des teintes profondes rendent le look plus soigné.',{topPiece:'Polo',topIcon:'polo',outerPiece:'Veste',f0:fams[0],bottomShade:'Noir',shoePiece:'Mocassins',shoeShade:'Cognac'}),
    makeLook('Contraste','contrast','Une teinte plus franche crée un contraste lisible autour de ta pièce de départ.',{f0:fams[1]||fams[0],bottomShade:'Noir',shoeShade:'Blanc'})
  ];
 }
 const wanted={simple:'Simple',summer:'Été',smart:'Plus habillé',contrast:'Contraste'}[state.style];
 if(wanted)looks.sort((a,b)=>(a.name===wanted?-1:b.name===wanted?1:0));
 return looks;
}
function figureHTML(look){
  const topColor=look.top?shadeHex(look.top.shade):'#eeeeee';
  const bottomColor=look.bottom?shadeHex(look.bottom.shade):'#dddddd';
  const outerColor=look.outer?shadeHex(look.outer.shade):null;
  const shoeColor=look.shoes?shadeHex(look.shoes.shade):'#ffffff';
  const topIcon=look.top?.icon || 'tshirt';
  const modelSrc=document.querySelector('.model-photo-source')?.dataset.src || '';

  function topSvg(){
    if(!look.top) return '';

    if(topIcon==='tank'){
      return `
        <!-- couverture légèrement plus large que le torse -->
        <path fill="${topColor}" opacity=".98" d="
          M188 278 Q218 298 258 301 Q298 298 328 278
          L353 300 L344 390 L365 703
          Q310 722 258 724 Q206 722 151 703
          L172 390 L163 300 Z"/>
        <path class="cloth" fill="${topColor}" d="
          M196 286 Q219 303 258 305 Q297 303 320 286
          L343 304 Q338 349 329 386
          L351 695 Q307 713 258 715 Q209 713 165 695
          L187 386 Q178 349 173 304 Z"/>
        <path class="seam" d="M210 292 Q258 334 306 292"/>
      `;
    }

    if(topIcon==='sweater'){
      return `
        <!-- sous-couche de couverture -->
        <path fill="${topColor}" opacity=".98" d="
          M164 280 Q214 306 258 308 Q302 306 352 280
          L407 307 Q439 327 454 368
          L427 616 Q416 700 402 764
          L337 752 L335 706
          Q300 721 258 723 Q216 721 181 706
          L179 752 L114 764
          Q100 700 89 616 L62 368
          Q77 327 109 307 Z"/>
        <path class="cloth" fill="${topColor}" d="
          M175 292 Q215 314 258 314 Q301 314 341 292
          L395 318 Q422 335 437 371
          L411 604 Q400 681 389 745 L346 735 L344 691
          Q304 708 258 710 Q212 708 172 691
          L170 735 L127 745 Q116 681 105 604
          L79 371 Q94 335 121 318 Z"/>
        <path class="seam" d="M207 300 Q258 341 309 300"/>
      `;
    }

    // T-shirt / chemise / polo : manches plus larges et plus basses,
    // corps légèrement plus long pour recouvrir entièrement le torse nu.
    const coverage = `
      <path fill="${topColor}" opacity=".98" d="
        M158 279 Q211 307 258 309 Q305 307 358 279
        L406 307 Q440 327 454 366
        L434 447 L407 548 L349 519
        L371 716 Q314 735 258 737 Q202 735 145 716
        L167 519 L109 548 L82 447 L62 366
        Q76 327 110 307 Z"/>
    `;
    const base = `
      ${coverage}
      <path class="cloth" fill="${topColor}" d="
        M165 292 Q214 317 258 318 Q302 317 351 292
        L392 316 Q420 332 434 368
        L419 432 L395 525 L348 501 L365 732
        Q310 742 258 744 Q206 742 151 732
        L168 501 L121 525 L97 432 L82 368
        Q96 332 124 316 Z"/>
    `;

    if(topIcon==='shirt'){
      return base + `
        <path class="seam" d="M258 316 L258 701"/>
        <path class="seam" d="M218 305 L258 350 L298 305"/>
        <circle class="button" cx="258" cy="382" r="3.5"/>
        <circle class="button" cx="258" cy="438" r="3.5"/>
        <circle class="button" cx="258" cy="494" r="3.5"/>
        <circle class="button" cx="258" cy="550" r="3.5"/>
        <circle class="button" cx="258" cy="606" r="3.5"/>
        <circle class="button" cx="258" cy="662" r="3.5"/>
      `;
    }

    if(topIcon==='polo'){
      return base + `
        <path class="seam" d="M216 304 L258 349 L300 304"/>
        <path class="seam" d="M258 349 L258 420"/>
        <circle class="button" cx="258" cy="375" r="3.5"/>
        <circle class="button" cx="258" cy="404" r="3.5"/>
      `;
    }

    return base + `<path class="seam" d="M209 302 Q258 344 307 302"/>`;
  }

  function outerSvg(){
    if(!look.outer) return '';

    return `
      <!-- grande sous-couche : la surchemise déborde volontairement du corps -->
      <path fill="${outerColor}" opacity=".98" d="
        M104 298 Q76 317 60 361
        L39 493 L18 617 L5 741
        L86 753 L128 624 L159 500 L173 396
        L162 321 Z"/>
      <path fill="${outerColor}" opacity=".98" d="
        M412 298 Q440 317 456 361
        L477 493 L498 617 L511 741
        L430 753 L388 624 L357 500 L343 396
        L354 321 Z"/>
      <path fill="${outerColor}" opacity=".98" d="
        M139 290 Q191 308 232 312 L249 349
        L238 713 Q194 727 143 706
        L136 438 L114 489 L85 472 L60 361
        Q80 316 110 302 Z"/>
      <path fill="${outerColor}" opacity=".98" d="
        M377 290 Q325 308 284 312 L267 349
        L278 713 Q322 727 373 706
        L380 438 L402 489 L431 472 L456 361
        Q436 316 406 302 Z"/>

      <!-- couche visible avec coutures -->
      <path class="cloth" fill="${outerColor}" d="
        M124 316 Q96 331 82 369
        L64 489 L44 602 L29 719
        L73 733 L112 612 L139 494 L157 413
        L151 338 Z"/>
      <path class="cloth" fill="${outerColor}" d="
        M392 316 Q420 331 434 369
        L452 489 L472 602 L487 719
        L443 733 L404 612 L377 494 L359 413
        L365 338 Z"/>
      <path class="cloth" fill="${outerColor}" d="
        M151 305 Q194 318 229 320
        L244 356 L233 704
        Q191 718 153 698
        L151 430 L132 474 L105 457 L83 369
        Q100 332 124 319 Z"/>
      <path class="cloth" fill="${outerColor}" d="
        M365 305 Q322 318 287 320
        L272 356 L283 704
        Q325 718 363 698
        L365 430 L384 474 L411 457 L433 369
        Q416 332 392 319 Z"/>
      <path class="seam" d="M229 320 L244 356 L233 704"/>
      <path class="seam" d="M287 320 L272 356 L283 704"/>
    `;
  }

  function bottomSvg(){
    if(!look.bottom) return '';

    if(look.bottom.piece==='Short'){
      return `
        <!-- sous-couche : taille et cuisses légèrement plus larges -->
        <path fill="${bottomColor}" opacity=".98" d="
          M104 662 Q188 694 258 694 Q328 694 412 662
          L421 822
          Q414 887 394 949
          Q345 971 291 960
          L258 856
          L225 960
          Q171 971 122 949
          Q102 887 95 822 Z"/>
        <path class="cloth" fill="${bottomColor}" d="
          M114 650 Q191 688 258 688 Q325 688 402 650
          L404 814
          Q398 868 383 924
          Q345 951 300 945
          L258 836
          L216 945
          Q171 951 133 924
          Q118 868 112 814 Z"/>
        <path class="cloth" fill="${bottomColor}" d="
          M128 680 Q190 707 258 707 Q326 707 388 680
          L378 782 Q319 811 258 809 Q197 811 138 782 Z"/>
        <path class="seam" d="M258 724 L258 835"/>
        <path class="seam" d="M138 714 Q258 747 378 714"/>
      `;
    }

    return `
      <!-- sous-couche pantalon : plus large que les jambes et jusqu'aux chevilles -->
      <path fill="${bottomColor}" opacity=".98" d="
        M101 640 Q183 675 251 678
        L252 846 L226 991 L209 1144 L196 1354
        L128 1354 L117 1140 L101 986 L84 811 Z"/>
      <path fill="${bottomColor}" opacity=".98" d="
        M415 640 Q333 675 265 678
        L264 846 L290 991 L307 1144 L320 1354
        L388 1354 L399 1140 L415 986 L432 811 Z"/>
      <path fill="${bottomColor}" opacity=".98" d="
        M101 640 Q258 695 415 640
        L393 795 Q326 836 258 833 Q190 836 123 795 Z"/>

      <path class="cloth" fill="${bottomColor}" d="
        M117 652 Q186 684 253 686
        L253 842 L229 980 L213 1131 L201 1338
        L143 1338 L132 1130 L118 982 L103 820 Z"/>
      <path class="cloth" fill="${bottomColor}" d="
        M399 652 Q330 684 263 686
        L263 842 L287 980 L303 1131 L315 1338
        L373 1338 L384 1130 L398 982 L413 820 Z"/>
      <path class="cloth" fill="${bottomColor}" d="
        M117 652 Q258 697 399 652
        L379 783 Q323 824 258 820 Q193 824 137 783 Z"/>
      <path class="seam" d="M258 699 L258 820"/>
      <path class="seam" d="M130 705 Q258 739 386 705"/>
    `;
  }

  function shoesSvg(){
    if(!look.shoes) return '';
    return `
      <!-- sous-couche chaussures : couvre totalement les pieds -->
      <path fill="${shoeColor}" opacity=".99" d="
        M96 1353 Q132 1343 175 1355
        L200 1419 Q190 1465 143 1482
        L67 1478 Q43 1470 43 1445
        Q49 1407 96 1353 Z"/>
      <path fill="${shoeColor}" opacity=".99" d="
        M420 1353 Q384 1343 341 1355
        L316 1419 Q326 1465 373 1482
        L449 1478 Q473 1470 473 1445
        Q467 1407 420 1353 Z"/>

      <path class="cloth" fill="${shoeColor}" d="
        M111 1371 Q135 1362 167 1370
        L190 1419 Q181 1454 144 1467
        L82 1464 Q59 1458 59 1441
        Q64 1411 111 1371 Z"/>
      <path class="cloth" fill="${shoeColor}" d="
        M405 1371 Q381 1362 349 1370
        L326 1419 Q335 1454 372 1467
        L434 1464 Q457 1458 457 1441
        Q452 1411 405 1371 Z"/>
      <path class="shoe-line" d="M72 1431 Q124 1447 180 1426"/>
      <path class="shoe-line" d="M444 1431 Q392 1447 336 1426"/>
    `;
  }

  return `<div class="figure">
    <img class="model-photo" src="${modelSrc}" alt="" aria-hidden="true">
    <svg class="clothes-svg" viewBox="0 0 516 1523" preserveAspectRatio="none" aria-hidden="true">
      ${topSvg()}
      ${outerSvg()}
      ${bottomSvg()}
      ${shoesSvg()}
    </svg>
    ${look.accessory?`<div class="fig-umbrella">${garmentIcon('umbrella')}</div>`:''}
  </div>`;
}
function lookLabelTwoLines(item){
  const full=withAgreement(item);
  const idx=full.lastIndexOf(' ');
  if(idx===-1) return full;
  return `${full.slice(0, idx)}<br>${full.slice(idx+1)}`;
}

function renderLookCarousel(){
 $('lookCarousel').innerHTML='';
 state.looks.forEach((look,i)=>{
   const card=document.createElement('button');
   card.className=`look-card ${look.kind}${i===state.activeLook?' active':''}`;
   const parts=['top','bottom','outer','shoes','accessory'].filter(k=>look[k]);
   card.innerHTML=`
    <div class="look-name">${look.name}</div>
    <div class="look-sub">${look.kind==='simple'?'Le basique qui marche toujours':look.kind==='summer'?'Frais et décontracté':look.kind==='smart'?'Élégant au quotidien':'Audacieux et stylé'}</div>
    <div class="look-layout">
      <div class="look-parts">
        ${parts.map(k=>`<div class="part"><span class="part-dot" style="background:${shadeHex(look[k].shade)}"></span><span>${lookLabelTwoLines(look[k])}</span></div>`).join('')}
      </div>
      <div class="mini-person">${figureHTML(look)}</div>
    </div>
    <div class="look-btn">Voir ce look →</div>`;
   card.onclick=()=>{state.activeLook=i;renderResults();scrollFeature()};
   $('lookCarousel').appendChild(card);
 });
 $('lookDots').innerHTML=state.looks.map((_,i)=>`<i class="${i===state.activeLook?'on':''}"></i>`).join('');
}
function scrollFeature(){setTimeout(()=>$('featureName').scrollIntoView({behavior:'smooth',block:'center'}),50)}

function renderFeature(){
 const look=state.looks[state.activeLook];
 $('featureName').textContent=look.name;
 $('featureWhy').textContent=look.why;
 const order=[['top','Haut'],['bottom','Bas'],['outer','Veste'],['shoes','Chaussures'],['accessory','Accessoire']];
 $('featureList').innerHTML='';
 order.forEach(([k,label],i)=>{
  if(!look[k])return;
  const d=document.createElement('div');d.className='feature-item';
  d.innerHTML=`<div class="rank">${i+1}</div><div style="display:flex;align-items:center;gap:9px"><div class="sw" style="background:${shadeHex(look[k].shade)}"></div><div><strong>${withAgreement(look[k])}</strong><small>${label}</small></div></div><div class="arrow">›</div>`;
  if(k!=='accessory'){
    d.onclick=()=>{state.changeGroup=k;renderChange();$('replacements').scrollIntoView({behavior:'smooth',block:'center'})};
  }else{
    d.style.cursor='default';
  }
  $('featureList').appendChild(d);
 });
}
function candidateItems(group){
 const fams=group==='bottom' ? bottomFamilyPriority : basePalette();
 let kinds=group==='top'?[['T-shirt','tshirt'],['Débardeur','tank'],['Chemise','shirt'],['Polo','polo']]
   :group==='bottom'?[['Pantalon / jean','pants'],['Short','shorts']]
   :group==='outer'?[['Surchemise','jacket'],['Veste','jacket'],['Blouson','jacket']]
   :[['Baskets','shoes'],['Mocassins','shoes'],['Sandales','shoes']];
 let arr=[];
 fams.slice(0,7).forEach((f,fi)=>{
  const sh=group==='bottom'
    ? (f==='Bleu' ? 'Bleu marine' : f==='Noir' ? 'Noir' : f==='Blanc' ? 'Blanc' : pick(f))
    : pick(f);
  kinds.forEach(([piece,iconName],ki)=>{
    if(group==='shoes'&&!['Blanc','Beige','Marron','Noir','Bleu','Gris'].includes(f))return;
    arr.push({group,piece,shade:sh,icon:iconName,rank:fi*10+ki});
  });
 });
 if(state.shade==='Moutarde'&&group==='top'){
  arr=[
   ['T-shirt','Blanc','tshirt'],['T-shirt','Bleu marine','tshirt'],['Chemise','Écru','shirt'],
   ['Chemise','Bleu ciel','shirt'],['Débardeur','Blanc','tank'],['T-shirt','Kaki','tshirt'],['T-shirt','Bordeaux','tshirt']
  ].map((x,i)=>({group,piece:x[0],shade:x[1],icon:x[2],rank:i}));
 }
 if(state.shade==='Moutarde'&&group==='shoes'){
  arr=[
   ['Baskets','Blanc'],['Baskets','Écru'],['Mocassins','Cognac'],['Baskets','Bleu marine'],['Sandales','Camel']
  ].map((x,i)=>({group,piece:x[0],shade:x[1],icon:'shoes',rank:i}));
 }
 const profile=weatherProfile();
 if(group==='top'){
   if(profile==='summer' || profile==='summer-cool' || profile==='warm'){
     arr=arr.filter(x=>x.piece!=='Pull / sweat');
   }
   if(profile==='winter' || profile==='cold'){
     arr=arr.filter(x=>!['T-shirt','Débardeur'].includes(x.piece));
     if(!arr.some(x=>x.piece==='Pull / sweat')){
       arr.unshift({group:'top',piece:'Pull / sweat',shade:pick(basePalette()[0]),icon:'sweater',rank:-20});
     }
   }
 }
 if(group==='bottom' && (profile==='winter' || profile==='cold')){
   arr=arr.filter(x=>x.piece!=='Short');
 }
 return arr.sort((a,b)=>a.rank-b.rank).slice(0,10);
}
function wardrobe(){return JSON.parse(localStorage.getItem('stylia_wardrobe')||'[]')}
function saveWardrobe(a){localStorage.setItem('stylia_wardrobe',JSON.stringify(a))}
function itemKey(it){return `${it.group}|${it.piece}|${it.shade}|${it.icon||''}`}
function isOwned(it){return wardrobe().includes(itemKey(it))}
function toggleOwned(it){
 let a=wardrobe(),k=itemKey(it);
 a=a.includes(k)?a.filter(x=>x!==k):[...a,k];
 saveWardrobe(a);toast(a.includes(k)?'Ajouté au dressing':'Retiré du dressing');renderChange();
}
function renderChange(){
 const tabs=[['top','Haut'],['bottom','Bas'],['outer','Veste'],['shoes','Chaussures']];
 $('changeTabs').innerHTML='';
 tabs.forEach(([g,l])=>{
   const b=document.createElement('button');b.className='tab'+(state.changeGroup===g?' active':'');b.textContent=l;
   b.onclick=()=>{state.changeGroup=g;renderChange()};
   $('changeTabs').appendChild(b);
 });
 const look=state.looks[state.activeLook];
 let items=candidateItems(state.changeGroup);
 if(state.ownedOnly)items=items.filter(isOwned);
 $('replacements').innerHTML='';
 if(!items.length){
  $('replacements').innerHTML='<div style="color:#111;font-size:12px;padding:10px 0">Aucune pièce correspondante dans ton dressing.</div>';
 }else{
  items.forEach(it=>{
   const b=document.createElement('button');
   const current=look[state.changeGroup]&&look[state.changeGroup].piece===it.piece&&look[state.changeGroup].shade===it.shade;
   b.className='rep'+(current?' selected':'');
   b.innerHTML=`<div class="rep-preview" style="color:#111">${garmentIcon(it.icon)}<span style="position:absolute"></span></div><strong>${withAgreement(it)}</strong><small>Alternative</small>`;
   b.querySelector('.rep-preview').style.background=`linear-gradient(145deg,#fff,${shadeHex(it.shade)}22)`;
   b.onclick=()=>{
     look[state.changeGroup]={...it};
     renderResults();toast('Pièce remplacée');
   };
   b.oncontextmenu=e=>{e.preventDefault();toggleOwned(it)};
   b.title='Appui long/clic droit : ajouter au dressing';
   $('replacements').appendChild(b);
  });
 }
 $('ownedOnlyBtn').textContent=`Mon dressing seulement : ${state.ownedOnly?'oui':'non'}`;
}
function renderResults(){
 renderLookCarousel();renderFeature();renderChange();renderValidationState();
}
async function showResults(){
 if(!state.piece||!state.family||!state.shade)return;
 await weatherPromise;
 state.looks=buildLooks();state.activeLook=0;state.changeGroup='top';
 $('quizView').style.display='none';$('resultsView').classList.add('show');
 const selectedPiece=pieceById(state.piece);
 $('resultPossessive').textContent=possessiveForPiece(selectedPiece.label);
 $('resultPiece').textContent=withAgreement({piece:selectedPiece.label,shade:state.shade}).toLowerCase();
 renderResults();
 setNav('looksNav');
 window.scrollTo({top:0,behavior:'smooth'});
}
$('seeLooks').onclick=showResults;

/* ---------- save / drawers ---------- */
function saveCurrentLook(){
 const look=state.looks[state.activeLook];if(!look)return;
 const a=JSON.parse(localStorage.getItem('stylia_saved')||'[]');
 a.unshift({date:new Date().toISOString(),look});
 localStorage.setItem('stylia_saved',JSON.stringify(a.slice(0,30)));
 toast('Look enregistré dans les favoris');
}
$('saveCurrent').onclick=saveCurrentLook;
$('validateLookBtn').onclick=()=>{
 const look=state.looks[state.activeLook];
 if(!look)return toast('Compose d’abord une tenue');
 persistValidatedOutfit(look);
 renderValidationState();
 toast('Tenue validée · envoyée au 3615');
};

function openDrawer(mode){
 $('drawer').classList.add('show');
 if(mode==='wardrobe'){
  $('drawerTitle').textContent='Ma garde-robe';
  const a=wardrobe();
  $('drawerBody').innerHTML=a.length?a.map(k=>{
    const [group,piece,shade,ico]=k.split('|');
    return `<div class="saved"><strong>${withAgreement({piece,shade})}</strong><div class="saved-pills"><span class="saved-pill"><i style="background:${shadeHex(shade)}"></i>${group}</span></div></div>`;
  }).join(''):'<div class="empty">Ton dressing est vide.<br>Dans « Changer une pièce », fais un appui long sur un vêtement ou utilise le bouton d’ajout.</div>';
 }else{
  $('drawerTitle').textContent='Mes looks favoris';
  const a=JSON.parse(localStorage.getItem('stylia_saved')||'[]');
  $('drawerBody').innerHTML=a.length?a.map(x=>{
    const parts=['top','bottom','outer','shoes','accessory'].filter(k=>x.look[k]);
    return `<div class="saved"><strong>${x.look.name}</strong><div class="saved-pills">${parts.map(k=>`<span class="saved-pill"><i style="background:${shadeHex(x.look[k].shade)}"></i>${withAgreement(x.look[k])}</span>`).join('')}</div></div>`;
  }).join(''):'<div class="empty">Aucun look enregistré pour le moment.</div>';
 }
}
function closeDrawer(){$('drawer').classList.remove('show')}
$('closeDrawer').onclick=closeDrawer;$('backdrop').onclick=closeDrawer;
$('wardrobeTop').onclick=()=>openDrawer('wardrobe');$('favTop').onclick=()=>openDrawer('saved');
$('wardrobeNav').onclick=()=>{setNav('wardrobeNav');openDrawer('wardrobe')};
$('favoritesNav').onclick=()=>{setNav('favoritesNav');openDrawer('saved')};

$('addCurrentToWardrobe').onclick=()=>{
 const look=state.looks[state.activeLook];
 const it=look[state.changeGroup];
 if(!it)return toast('Aucune pièce dans cette catégorie');
 let a=wardrobe(),k=itemKey(it);
 if(!a.includes(k)){a.push(k);saveWardrobe(a);toast('Pièce ajoutée au dressing')}
 else toast('Cette pièce est déjà dans ton dressing');
};
$('ownedOnlyBtn').onclick=()=>{state.ownedOnly=!state.ownedOnly;renderChange()};

function setNav(id){
 document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.id===id));
}
function resetQuiz(){
 Object.assign(state,{piece:null,family:null,shade:null,style:'auto',looks:[],activeLook:0,changeGroup:'top',ownedOnly:false});
 $('quizView').style.display='block';$('resultsView').classList.remove('show');
 $('colorSection').classList.add('hidden');$('shadeSection').classList.add('hidden');$('styleSection').classList.add('hidden');$('seeLooks').classList.add('hidden');
 renderPieces();renderColors();renderShades();renderStyles();updateStepper(1);setNav('homeNav');window.scrollTo({top:0,behavior:'smooth'});
}
$('plusNav').onclick=resetQuiz;
$('homeNav').onclick=resetQuiz;
$('looksNav').onclick=()=>{if(state.looks.length){$('quizView').style.display='none';$('resultsView').classList.add('show');setNav('looksNav');window.scrollTo({top:0,behavior:'smooth'})}else toast('Compose d’abord une tenue')};
