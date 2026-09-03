(function(){
  const style=document.createElement('style');
  style.textContent=`
    :root{--fairy:#ffb7df;--cream:#fff3d1;--lav:#c7b1ff;--deep:#120b1b}
    body:before{content:'';position:fixed;inset:0;pointer-events:none;z-index:0;background:
      radial-gradient(circle at 18% 9%,rgba(255,183,223,.18) 0 1px,transparent 2px),
      radial-gradient(circle at 77% 16%,rgba(255,243,209,.2) 0 1px,transparent 2px),
      radial-gradient(circle at 42% 42%,rgba(199,177,255,.14) 0 1px,transparent 2px),
      radial-gradient(circle at 90% 61%,rgba(255,183,223,.15) 0 1px,transparent 2px);
      background-size:120px 150px,170px 190px,210px 230px,160px 180px;animation:starDrift 18s linear infinite}
    @keyframes starDrift{from{background-position:0 0,0 0,0 0,0 0}to{background-position:35px 70px,-40px 80px,30px -60px,-50px 50px}}
    .app{position:relative;z-index:1}
    .top{padding:4px 4px 12px}
    .brand{font-family:Georgia,serif;font-size:25px;letter-spacing:-.7px;text-shadow:0 0 18px rgba(255,183,223,.3)}
    .sub{font-size:13px}
    .hero{border-radius:30px;background:linear-gradient(145deg,rgba(91,39,76,.94),rgba(48,36,72,.96) 55%,rgba(31,45,68,.96));border-color:#a65f91;box-shadow:0 20px 60px rgba(0,0,0,.42),inset 0 1px 0 rgba(255,255,255,.12)}
    .hero:before{content:'✦ ･ﾟ✧ ｡ﾟ';position:absolute;left:18px;top:10px;color:#ffe7a7aa;font-size:14px;letter-spacing:7px;animation:twinkle 2.8s ease-in-out infinite}
    .hero:after{content:'✦';right:4px;top:-17px;font-size:120px;color:#ffe7a733;transform:rotate(10deg);animation:orbital 8s ease-in-out infinite}
    @keyframes twinkle{0%,100%{opacity:.35;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}
    @keyframes orbital{0%,100%{transform:rotate(10deg) scale(1);opacity:.35}50%{transform:rotate(-4deg) scale(1.06);opacity:.7}}
    .orb{border-radius:28px;box-shadow:0 0 0 5px rgba(255,183,223,.08),0 12px 35px rgba(240,123,184,.28);position:relative;animation:orbPulse 3s ease-in-out infinite}
    @keyframes orbPulse{0%,100%{transform:translateY(0);box-shadow:0 0 0 5px rgba(255,183,223,.08),0 12px 35px rgba(240,123,184,.28)}50%{transform:translateY(-3px);box-shadow:0 0 0 8px rgba(255,183,223,.10),0 16px 40px rgba(240,123,184,.35)}}
    .orb:after{content:'✧';position:absolute;right:-5px;top:-9px;color:#fff0ad;font-size:18px;animation:twinkle 1.8s infinite}
    .game-banner{border-radius:20px;background:linear-gradient(90deg,rgba(57,33,67,.95),rgba(35,29,49,.95));border-color:#79557d;box-shadow:inset 0 1px rgba(255,255,255,.06)}
    .game-banner .emoji{filter:drop-shadow(0 0 8px rgba(255,183,223,.35));animation:bob 2.4s ease-in-out infinite}
    @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
    .section h2{font-family:Georgia,serif;font-size:21px;letter-spacing:-.3px}
    .card{border-radius:22px;background:linear-gradient(145deg,rgba(45,30,53,.95),rgba(29,20,34,.97));box-shadow:0 12px 30px rgba(0,0,0,.25),inset 0 1px rgba(255,255,255,.05)}
    .featured{border-radius:24px;position:relative;overflow:hidden}
    .featured:after{content:'☽  ✦  ♡';position:absolute;right:14px;top:10px;color:#ffe7a744;font-size:14px;letter-spacing:4px;animation:twinkle 3s ease-in-out infinite}
    .questcard{border-radius:20px!important;position:relative;overflow:hidden;animation:cardIn .42s ease both}
    .questcard:nth-child(2){animation-delay:.06s}.questcard:nth-child(3){animation-delay:.12s}.questcard:nth-child(4){animation-delay:.18s}.questcard:nth-child(5){animation-delay:.24s}.questcard:nth-child(6){animation-delay:.30s}
    @keyframes cardIn{from{opacity:0;transform:translateY(10px) scale(.985)}to{opacity:1;transform:translateY(0) scale(1)}}
    .questcard:after{content:'✦';position:absolute;right:7px;bottom:4px;color:#fff1c414;font-size:28px;animation:twinkle 2.5s ease-in-out infinite}
    .btn{border-radius:16px;letter-spacing:.1px;transition:transform .15s,box-shadow .15s}
    .btn:active{transform:translateY(2px) scale(.98)}
    .btn:not(:disabled):hover{box-shadow:0 10px 28px rgba(238,118,180,.28)}
    .streak{position:relative;overflow:hidden}
    .streak:after{content:'☄';position:absolute;right:18px;top:8px;color:#ffe39a25;font-size:58px;transform:rotate(-18deg);animation:meteor 4s ease-in-out infinite}
    @keyframes meteor{0%,100%{transform:translate(0,0) rotate(-18deg);opacity:.3}50%{transform:translate(-5px,5px) rotate(-12deg);opacity:.65}}
    .chest{border-radius:23px}
    .chest:before{content:'✧  ✦  ✧';position:absolute;right:18px;top:8px;color:#ffe7a744;letter-spacing:7px;font-size:13px;animation:twinkle 2.2s ease-in-out infinite}
    .tabs{padding-bottom:env(safe-area-inset-bottom);background:rgba(18,11,27,.94);border-top:1px solid #694d70;box-shadow:0 -10px 30px rgba(0,0,0,.18)}
    .tabs button{font-family:Georgia,serif;font-size:11px;transition:transform .18s,color .18s}
    .tabs button.active{color:#fff1ca;text-shadow:0 0 12px rgba(255,210,130,.4);transform:translateY(-3px) scale(1.04)}
    .whimsy-float{position:fixed;pointer-events:none;z-index:2;opacity:.65;font-size:18px;animation:floaty 7s ease-in-out infinite}
    @keyframes floaty{0%,100%{transform:translateY(0) rotate(-5deg);opacity:.35}50%{transform:translateY(-16px) rotate(6deg);opacity:.8}}
    .f1{left:5%;top:23%}.f2{right:5%;top:39%;animation-delay:1.7s}.f3{left:8%;top:68%;animation-delay:3.1s}.f4{right:9%;top:79%;animation-delay:4.4s}
    .questcard .check.done{box-shadow:0 0 18px rgba(114,227,173,.3);animation:donePop .35s ease}
    @keyframes donePop{0%{transform:scale(.8);opacity:.6}65%{transform:scale(1.14)}100%{transform:scale(1)}}
    .reward .xp{font-size:13px;text-shadow:0 0 8px rgba(255,211,110,.18)}
    .pill{border-color:#8d618f;background:rgba(55,34,63,.8);color:#ffe9b0}
    @media(max-width:420px){.app{padding-top:20px}.brand{font-size:23px}}
    @media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.001ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important}}
  `;
  document.head.appendChild(style);
  ['✦','✧','☽','♡'].forEach((x,i)=>{const e=document.createElement('div');e.className='whimsy-float f'+(i+1);e.textContent=x;document.body.appendChild(e)});
})();
