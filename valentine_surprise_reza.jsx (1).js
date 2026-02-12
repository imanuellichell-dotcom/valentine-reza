<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ultimate Valentine For Reza 💖</title>

<style>
body {
  margin:0;
  font-family:'Segoe UI',sans-serif;
  background: radial-gradient(circle at top, #ffe6f2, #ffcce6, #ffb3d9);
  overflow-x:hidden;
  text-align:center;
  transition:2s;
}

h1,h2,h3,p{color:#c2185b}

button{
  padding:12px 28px;
  border:none;
  border-radius:40px;
  background:linear-gradient(45deg,#ff4da6,#ff80bf);
  color:white;
  font-size:16px;
  cursor:pointer;
  box-shadow:0 8px 25px rgba(255,0,128,0.4);
  transition:0.3s;
  margin:6px;
}
button:hover{transform:scale(1.08)}
.hidden{display:none}

/* Floating hearts */
.heart{
  position:fixed;
  top:-10px;
  animation:fall 6s linear infinite;
}
@keyframes fall{to{transform:translateY(110vh)}}

/* Glow effect */
.glow{
  animation:glowPulse 2s infinite alternate;
}
@keyframes glowPulse{
  from{box-shadow:0 0 10px #ff66b3}
  to{box-shadow:0 0 30px #ff1493}
}

/* Claw machine */
.claw-box{
  margin-top:30px;
  padding:20px;
  background:white;
  border-radius:30px;
  box-shadow:0 20px 50px rgba(255,0,128,0.3);
}
.claw-area{
  position:relative;
  height:220px;
}
.claw-heart{
  position:absolute;
  font-size:28px;
  cursor:pointer;
  transition:0.3s;
}
.claw-heart:hover{transform:scale(1.3)}
.big-heart{font-size:55px}

.fade{animation:fadeIn 2s ease-in}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}

.typewriter{
  overflow:hidden;
  border-right:3px solid #c2185b;
  white-space:nowrap;
  animation:typing 4s steps(40,end), blink .8s infinite;
}
@keyframes typing{from{width:0}to{width:100%}}
@keyframes blink{50%{border-color:transparent}}

</style>
</head>
<body>

<div id="start" class="fade">
<h1>💌 The Ultimate Love Surprise 💌</h1>
<p>Dwi Andhika Fitriyanto 🤍</p>
<button onclick="startGame()">Mulai Petualangan Cinta 🌸</button>
</div>

<div id="clawSection" class="hidden fade">
<h2>🎀 Love Claw Machine Extreme 🎀</h2>
<p>Tangkap hati TERBESAR untuk lanjut ke level terakhir 💗</p>
<div class="claw-box">
<div class="claw-area" id="clawArea"></div>
</div>
</div>

<div id="choice" class="hidden fade">
<h2>Kamu berhasil menangkap hati terbesar 💞</h2>
<p>Yakin mau buka isi hati ini?</p>
<button onclick="openHeart()">Buka 🤍</button>
<button onclick="openHeart()">Gamau</button>
</div>

<div id="final" class="hidden fade">
<h2 class="typewriter">Isi hati ini adalah kita 💗</h2>
<br>
<img src="1001159685.jpg" width="260" style="border-radius:30px" class="glow">

<p>
Kalau kamu sampai di titik ini...
<br><br>
Artinya kamu berhasil menyelesaikan semua level cinta yang aku buat.
Dan seperti hati terbesar yang kamu tangkap tadi...
Aku juga selalu milih kamu.
<br><br>
Bukan cuma hari ini.
Bukan cuma Valentine.
Tapi setiap hari.
<br><br>
Kamu rumah.
Kamu tenang.
Kamu tempat aku pulang.
<br><br>
Dan aku nggak mau kehilangan itu.
</p>

<h3>Will you stay with me forever? 💍</h3>
<button onclick="finalYes()">YES 💖</button>
</div>

<script>

function startGame(){
 document.getElementById('start').classList.add('hidden');
 document.getElementById('clawSection').classList.remove('hidden');
 createClaw();
}

function createClaw(){
 const area=document.getElementById('clawArea');
 for(let i=0;i<10;i++){
  let h=document.createElement('div');
  h.innerHTML="💖";
  h.className="claw-heart";
  h.style.top=Math.random()*170+"px";
  h.style.left=Math.random()*90+"%";
  h.onclick=function(){alert('Ups hampir 🤭 coba lagi')}
  area.appendChild(h);
 }
 let big=document.createElement('div');
 big.innerHTML="💗";
 big.className="claw-heart big-heart glow";
 big.style.top="70px";
 big.style.left="40%";
 big.onclick=function(){
  document.getElementById('clawSection').classList.add('hidden');
  document.getElementById('choice').classList.remove('hidden');
 }
 area.appendChild(big);
}

function openHeart(){
 document.getElementById('choice').classList.add('hidden');
 document.getElementById('final').classList.remove('hidden');
 document.body.style.background="radial-gradient(circle,#fff0f5,#ff99cc,#ff66b3)";
}

function finalYes(){
 alert('Aku tau jawabannya selalu YES 🤍💍');
 launchConfetti();
}

function createHearts(){
 const heart=document.createElement('div');
 heart.className='heart';
 heart.innerHTML='🤍';
 heart.style.left=Math.random()*100+'vw';
 heart.style.fontSize=Math.random()*20+10+'px';
 document.body.appendChild(heart);
 setTimeout(()=>{heart.remove()},6000);
}
setInterval(createHearts,400);

function launchConfetti(){
 for(let i=0;i<30;i++){
  const c=document.createElement('div');
  c.innerHTML='💞';
  c.style.position='fixed';
  c.style.left=Math.random()*100+'vw';
  c.style.top=Math.random()*100+'vh';
  c.style.fontSize='20px';
  document.body.appendChild(c);
  setTimeout(()=>{c.remove()},2000);
 }
}

</script>

</body>
</html>
