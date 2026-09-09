(function(){
  'use strict';

  // Logic-only repair layer. Existing UI, icons and animations remain untouched.
  var MAIN_KEY='shruti_life_rpg_v2';
  var BONUS_KEY='shruti_bonus_v2';
  var D=new Date().toISOString().slice(0,10);
  var M=[
    ['🧴','Nighttime skincare','Cleanse + moisturise. Future-you gets the glow.',25,20],
    ['🛁','Take that bath / shower','Fresh body, fresh reset. Stop postponing it.',30,25],
    ['✨','10-minute room rescue','Set a timer and clear only the obvious mess.',20,15],
    ['💧','Drink a proper glass of water','Right now. Not tomorrow.',10,10],
    ['🌙','20-minute no-phone wind-down','Put the phone away before sleep wins.',25,20],
    ['🧘','5-minute stretch','Neck, shoulders, back, legs. Tiny counts.',15,12],
    ['🎒','Make tomorrow easier','Prep clothes, bag or breakfast.',20,15],
    ['🪥','Full bedtime reset','Brush + floss/mouthwash + skincare.',30,25]
  ];

  function loadMain(){try{return JSON.parse(localStorage.getItem(MAIN_KEY)||'null')||{};}catch(e){return {};}}
  function saveMain(d){localStorage.setItem(MAIN_KEY,JSON.stringify(d));}
  function legacy(){try{return JSON.parse(localStorage.getItem(BONUS_KEY)||'null');}catch(e){return null;}}
  function bonusChestKey(){return BONUS_KEY+'_ch_'+D;}
  function pick(){var a=M.slice(),n=+D.replaceAll('-','');for(var i=a.length-1;i;i--){n=(n*9301+49297)%233280;var j=n%(i+1),t=a[i];a[i]=a[j];a[j]=t;}return a.slice(0,5);}
  var missions=pick();

  function ensure(d){
    d.xp=Number(d.xp)||0;d.coins=Number(d.coins)||0;d.totalCoins=Number(d.totalCoins)||0;
    d.days=d.days||{};d.wildDays=d.wildDays||{};d.bonusDays=d.bonusDays||{};
    d.bonusMissionDays=d.bonusMissionDays||{};d.bonusChestDays=d.bonusChestDays||{};
    d.stats=Object.assign({focus:10,wisdom:10,discipline:10,strength:10,confidence:10},d.stats||{});
    d.totalSelfCare=Number(d.totalSelfCare)||0;d.combo=Number(d.combo)||0;d.bestCombo=Number(d.bestCombo)||0;
    return d;
  }

  function migrate(){
    var d=ensure(loadMain());
    if(!d._bonusLogicMigratedV3){
      var old=legacy();
      if(old){
        d.xp+=Number(old.xp)||0;
        d.coins+=Number(old.coins)||0;
        d.totalCoins+=Number(old.coins)||0;
        d.bonusMissionDays[D]=d.bonusMissionDays[D]||{};
        Object.keys(old.done||{}).forEach(function(id){if(old.done[id])d.bonusMissionDays[D][id]=true;});
        if(localStorage.getItem(bonusChestKey()))d.bonusChestDays[D]=true;
      }
      d._bonusLogicMigratedV3=true;saveMain(d);
      if(typeof window.render==='function')window.render();
    }
    return d;
  }

  function toast(t,big){
    if(typeof window.pop==='function'){window.pop(t,!!big);return;}
    var e=document.createElement('div');e.className='toast';e.textContent=t;document.body.appendChild(e);setTimeout(function(){e.remove();},1650);
  }
  function bonusDoneCount(d){return Object.values(d.bonusMissionDays[D]||{}).filter(Boolean).length;}

  function patchBonusUI(){
    var board=document.getElementById('bonusBoard');if(!board)return;
    var d=ensure(loadMain()),done=d.bonusMissionDays[D]||{};
    board.querySelectorAll('.bbb').forEach(function(btn){var id=btn.getAttribute('data-id');if(done[id]){btn.disabled=true;btn.textContent='✓';var row=btn.closest('.bbm');if(row)row.classList.add('done');}});
    var count=bonusDoneCount(d),all=board.querySelectorAll('.bbs');
    if(all.length>1)all[1].textContent=count+'/3 complete'+(count>=3?' · 🎉 CHEST READY':'');
    var chestBtn=board.querySelector('#bbch');
    if(chestBtn){var claimed=!!d.bonusChestDays[D]||!!localStorage.getItem(bonusChestKey());chestBtn.disabled=claimed;chestBtn.textContent=claimed?'✓ CLAIMED':'OPEN';}
  }

  function handleBonusMission(id){
    var d=ensure(loadMain()),map=d.bonusMissionDays[D]=d.bonusMissionDays[D]||{};
    if(map[id]){patchBonusUI();return;}
    var x=missions.find(function(a){return a[0]===id;});
    if(!x){toast('Could not find that bonus mission.');return;}
    map[id]=true;d.xp+=x[3];d.coins+=x[4];d.totalCoins+=x[4];saveMain(d);
    if(typeof window.render==='function')window.render();patchBonusUI();
    toast(x[0]+' '+x[1]+' +'+x[3]+' XP · +'+x[4]+' coins!',true);
  }

  function handleBonusChest(){
    var d=ensure(loadMain());
    if(d.bonusChestDays[D]||localStorage.getItem(bonusChestKey())){patchBonusUI();return;}
    if(bonusDoneCount(d)<3){toast('✨ Complete 3 bonus missions first!');return;}
    var n=35+Math.floor(Math.random()*31);d.bonusChestDays[D]=true;d.xp+=n;d.coins+=n;d.totalCoins+=n;
    saveMain(d);localStorage.setItem(bonusChestKey(),'1');
    if(typeof window.render==='function')window.render();patchBonusUI();
    toast('🎉 CHEST! +'+n+' XP · +'+n+' coins',true);
  }

  function handleSpecialQuest(){
    var d=ensure(loadMain());
    if(d.wildDays[D]){if(typeof window.render==='function')window.render();return;}
    d.wildDays[D]=true;d.xp+=15;d.coins+=10;d.totalCoins+=10;saveMain(d);
    if(typeof window.render==='function')window.render();
    toast('🎲 Special quest cleared! +15 XP · +10 🪙',true);
  }

  function handleMainChest(){
    var d=ensure(loadMain());
    if(d.bonusDays[D]){if(typeof window.render==='function')window.render();return;}
    var mainDone=Object.values(d.days[D]||{}).some(Boolean),bonusDone=bonusDoneCount(d)>0,specialDone=!!d.wildDays[D];
    if(!mainDone&&!bonusDone&&!specialDone){toast('✨ Complete a quest first, then open the chest!');return;}
    var r=25+Math.floor(Math.random()*51),x=10+Math.floor(Math.random()*31);
    d.bonusDays[D]=true;d.coins+=r;d.totalCoins+=r;d.xp+=x;saveMain(d);
    if(typeof window.render==='function')window.render();
    toast('🎁 MYSTERY CHEST! +'+x+' XP · +'+r+' 🪙',true);
  }

  document.addEventListener('click',function(e){
    var t=e.target;if(!(t instanceof Element))return;
    if(t.closest('#wildBtn')){e.preventDefault();e.stopImmediatePropagation();handleSpecialQuest();return;}
    if(t.closest('#bonusBtn')){e.preventDefault();e.stopImmediatePropagation();handleMainChest();return;}
    var bm=t.closest('#bonusBoard .bbb');if(bm){e.preventDefault();e.stopImmediatePropagation();handleBonusMission(bm.getAttribute('data-id'));return;}
    var bc=t.closest('#bonusBoard #bbch');if(bc){e.preventDefault();e.stopImmediatePropagation();handleBonusChest();return;}
  },true);

  var observer=new MutationObserver(function(){patchBonusUI();});
  observer.observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(function(){migrate();patchBonusUI();},0);
  setTimeout(function(){patchBonusUI();},500);
})();
