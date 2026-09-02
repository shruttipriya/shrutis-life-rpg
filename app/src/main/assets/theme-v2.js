(function(){
  var css = `
:root{
 --bg:#f7f0fb;--panel:#fffaf7;--panel2:#f2e9fb;--text:#3f3150;--muted:#806f8d;
 --pink:#e98db7;--gold:#d99a38;--mint:#69bfa0;--purple:#8b72c6;--blue:#8da9df;
 --line:#dfcfe7;--red:#d9798e;--shadow:0 8px 24px rgba(112,83,130,.10)
}
html,body{background:#f7f0fb!important;color:var(--text)!important}
body{
 background:
 radial-gradient(circle at 8% 5%,rgba(255,209,226,.75) 0,transparent 24%),
 radial-gradient(circle at 94% 12%,rgba(203,193,250,.7) 0,transparent 25%),
 radial-gradient(circle at 50% 100%,rgba(255,222,190,.45) 0,transparent 30%),
 linear-gradient(180deg,#f3eafa 0%,#fff8f3 58%,#f7effb 100%)!important;
 font-family:system-ui,-apple-system,"Segoe UI",sans-serif!important;
}
.app{max-width:720px;padding:18px 14px 110px!important}
.top{margin-bottom:18px!important}.brand{font-size:25px!important;font-weight:900!important;color:#4b3760!important;letter-spacing:-.5px!important}.sub,.tiny{color:var(--muted)!important}.pill{background:rgba(255,255,255,.58)!important;border:1px solid #d8c4e3!important;color:#705b7f!important}
.hero{border:1px solid #d8b9df!important;border-radius:26px!important;padding:18px!important;background:linear-gradient(135deg,#fff8f5 0%,#f7edff 58%,#eeeafd 100%)!important;box-shadow:0 12px 30px rgba(113,76,130,.12)!important}
.hero:after{color:#8d72c633!important}.orb{background:linear-gradient(145deg,#f4a7c8,#9c88d8)!important;box-shadow:0 8px 20px rgba(173,113,173,.20)!important}.hero h1{color:#49365e!important}.coins{color:#c58b2c!important}
.xpbar{background:#e8dced!important}.xpfill{background:linear-gradient(90deg,#e88eb9,#9d86d8,#77c5a7)!important}
.game-banner{border:1px solid #dfcde5!important;background:rgba(255,250,247,.78)!important;box-shadow:0 6px 18px rgba(115,82,129,.07)!important}.game-banner b{color:#4e3b61!important}
.section{margin-top:22px!important}.section h2{color:#4b3860!important;font-weight:900!important}
.card,.stat{background:rgba(255,250,247,.88)!important;border:1px solid #dfcfe7!important;box-shadow:var(--shadow)!important;color:var(--text)!important}
.featured{background:linear-gradient(135deg,#fff8f5,#f6ecff 62%,#eeeaff)!important;border-color:#d8b8e2!important}.featured .tiny{color:#80668d!important}.feature-title b,.qtitle{color:#49365c!important}.feature-title span,.qdesc{color:#806f8d!important}
.meter,.bar{background:#eadff0!important}.meter i,.bar i{background:linear-gradient(90deg,#e58fb8,#9a82d4)!important}
.btn{background:linear-gradient(90deg,#e88db9,#9a82d4)!important;box-shadow:0 6px 16px rgba(154,116,178,.18)!important}.btn.gold{background:linear-gradient(90deg,#f0bd63,#e8a94b)!important;color:#49321b!important}.btn.dark{background:#eee5f1!important;color:#5b4768!important}
.grid{gap:10px!important}.tag{background:#f1dfec!important;color:#95607e!important}.check{background:#fbf7fb!important;border-color:#d7c5df!important;color:#5d4869!important}.reward .xp{color:#c58b2c!important}.coinreward{color:#b48735!important}
.streak{background:linear-gradient(135deg,#f8e9f4,#ece9fa)!important;border-color:#d8c7e1!important}.streakline{color:#b27a37!important}
.chest{background:linear-gradient(135deg,#fff0df,#eee7fa)!important;border-color:#ddc3b0!important}.chest:after{color:#d3a86633!important}
.shopgrid{gap:10px!important}.shopitem{background:rgba(255,250,247,.9)!important}.shopicon{font-size:30px}.price{color:#c58b2c!important}
input,select,textarea{background:#fffafc!important;border-color:#d9c7e0!important;color:#4b385c!important}label{color:#806f8d!important}
.job{border-left-color:#e18db5!important}.badge{background:#f0e5f4!important}
.tabs{background:rgba(255,250,247,.94)!important;border-top:1px solid #dccbe4!important;box-shadow:0 -6px 22px rgba(106,76,121,.08)!important}.tabs button{color:#8c7897!important;font-size:11px!important}.tabs button.active{color:#5a3f70!important}
.toast{background:#fff8f4!important;border-color:#d7b9dd!important;color:#50385f!important;box-shadow:0 12px 30px rgba(95,64,110,.16)!important}.confetti{opacity:.55!important}
@media(max-width:420px){.app{padding-left:11px!important;padding-right:11px!important}.brand{font-size:22px!important}.card,.stat{padding:12px!important}.tabs button{padding-left:9px!important;padding-right:9px!important}}
`;
  var s=document.createElement('style');s.id='theme-v2';s.textContent=css;document.head.appendChild(s);
  document.documentElement.style.colorScheme='light';
})();
