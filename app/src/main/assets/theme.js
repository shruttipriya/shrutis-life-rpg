(function(){
  var css = `
  :root{
    --bg:#f3edf7;--panel:#fff9fd;--panel2:#f7eff9;--text:#3b2445;--muted:#806d87;
    --pink:#d98ab7;--gold:#c99a45;--mint:#78bfa6;--purple:#8e79c9;--blue:#9caedb;
    --line:#dec9e0;--red:#d98a9b;--shadow:0 10px 28px rgba(91,57,102,.12)
  }
  body{
    background:
      radial-gradient(circle at 8% 8%,rgba(255,207,230,.95) 0 7%,transparent 25%),
      radial-gradient(circle at 92% 18%,rgba(205,194,244,.9) 0 8%,transparent 27%),
      radial-gradient(circle at 50% 92%,rgba(255,226,190,.55) 0 5%,transparent 23%),
      linear-gradient(145deg,#eee5f5 0%,#f8edf5 48%,#e9e7f7 100%);
    color:var(--text)
  }
  .app{padding-top:20px}
  .brand{font-family:Georgia,'Times New Roman',serif;font-weight:800;letter-spacing:-.5px;color:#4a2857;text-shadow:0 2px 0 #fff}
  .sub,.tiny{color:var(--muted)}
  .pill{background:rgba(255,255,255,.55);border-color:#d5b9d9;color:#76517e}
  .hero{background:linear-gradient(135deg,rgba(255,250,255,.94),rgba(242,229,248,.96) 55%,rgba(224,226,248,.94));border-color:#d49bc4;box-shadow:0 16px 40px rgba(111,73,124,.14)}
  .hero:after{color:#c9a4d033}
  .orb{background:linear-gradient(145deg,#ef9fc7,#9d8be1);box-shadow:0 9px 24px rgba(169,116,177,.25)}
  .hero h1{color:#4b2859}
  .xpbar,.meter,.bar{background:#ead9eb}
  .xpfill{background:linear-gradient(90deg,#df8dbd,#a990df,#d6b06b)}
  .game-banner{background:rgba(255,249,253,.72);border-color:#d9c2df;box-shadow:var(--shadow)}
  .card,.stat{background:rgba(255,250,254,.78);border-color:var(--line);box-shadow:var(--shadow)}
  .featured{background:linear-gradient(135deg,#f6e8f5,#eee7fa 60%,#f6eadf);border-color:#d1a6d0}
  .streak{background:linear-gradient(135deg,#f3e5f2,#e8e5f5);border-color:#cfb4d1}
  .chest{background:linear-gradient(135deg,#f7e9df,#eee5f6 62%,#e3e8f6);border-color:#d4b59d}
  .chest:after{color:#c9a76b33}
  .tag{background:#f0ddeb;color:#8d5276}
  .check{background:#fff8fd;border-color:#d4bfd8;color:#62456c}
  .check.done{background:var(--mint);border-color:var(--mint);color:#fff}
  .btn{background:linear-gradient(90deg,#df82b6,#9d87db);box-shadow:0 7px 18px rgba(160,108,174,.18)}
  .btn.gold{background:linear-gradient(90deg,#e0b35c,#f1d083);color:#543817}
  .btn.dark{background:#e7dceb;color:#674b70}
  input,select,textarea{background:#fffafd;border-color:#d8c4dc;color:var(--text)}
  .tabs{background:rgba(255,249,254,.9);border-top-color:#d9c4dd;box-shadow:0 -8px 24px rgba(87,55,98,.08)}
  .tabs button{color:#927d98}
  .tabs button.active{color:#4d2858}
  .shopitem{background:rgba(255,250,254,.82)}
  .badge{background:#eee1f0}
  .toast{background:#fff7fd;color:#512d5d;border-color:#d5a9ca;box-shadow:0 14px 35px rgba(70,43,78,.16)}
  @keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
  .feature-icon,.game-banner .emoji{animation:floaty 3s ease-in-out infinite}
  `;
  var s=document.createElement('style');s.id='grownup-theme';s.textContent=css;document.head.appendChild(s);
})();
