const l=document.getElementById("music-container"),v=document.getElementById("play"),I=document.getElementById("prev"),S=document.getElementById("next"),t=document.getElementById("audio"),B=document.getElementById("progress"),C=document.getElementById("progress-container"),u=document.getElementById("title"),k=document.querySelector("#currTime"),m=document.querySelector(".play-img"),g=document.querySelector(".pause-img"),s=[{name:"Luminous Dream",fileName:"Vibe 01 - Have It Your Way.mp3"},{name:"Fire Inside",fileName:"Vibe 02 - Fire inside.mp3"},{name:"Have It Your Way",fileName:"Vibe 03 - Luminous Dream.mp3"},{name:"You Color Me In",fileName:"Vibe 04 - You Color Me In.mp3"}];let r,c=0,a=!1;const p="https://cdn.jsdelivr.net/gh/diligent-ground-zero/the-wave@2.0/music/";function y(){return r||(r=new(window.AudioContext||window.webkitAudioContext)),r}function d(e){a=!0,u.innerText=e.name,t.src=p+e.fileName,t.load(),t.oncanplaythrough=()=>{a=!1}}function f(){if(a)return;l.classList.add("play"),m.style.display="none",g.style.display="block";const e=y();e.state==="suspended"?e.resume().then(()=>{t.play().catch(console.error)}):t.play().catch(console.error)}function h(){console.log(),l.classList.remove("play"),m.style.display="block",g.style.display="none",t.pause()}function x(){c=(c-1+s.length)%s.length,d(s[c])}function E(){c=(c+1)%s.length,d(s[c])}function b(e){const{duration:n,currentTime:o}=e.srcElement,i=o/n*100;B.style.width=`${i}%`}function P(e){const n=this.clientWidth,o=e.offsetX,i=t.duration;t.currentTime=o/n*i}function w(e){const{currentTime:n}=e.srcElement,o=Math.floor(n/60).toString().padStart(2,"0"),i=Math.floor(n%60).toString().padStart(2,"0");k.innerHTML=`${o}:${i}`}function M(){if(console.log("Initializing music player..."),!u||!t){console.error("Required elements not found. Aborting initialization.");return}return s.forEach(e=>{const n=document.createElement("link");n.href=p+e.fileName,n.as="audio",n.rel="prefetch",document.head.appendChild(n)}),console.log("Loading initial song..."),d(s[c]),console.log("Adding event listeners..."),I.addEventListener("click",x),S.addEventListener("click",E),t.addEventListener("timeupdate",b),C.addEventListener("click",P),t.addEventListener("ended",E),t.addEventListener("timeupdate",w),v.addEventListener("click",()=>{console.log("Play button clicked"),l.classList.contains("play")?h():f()}),console.log("Music player initialized successfully"),{ensureAudioContext:y,playSong:f,pauseSong:h,audio:t}}document.addEventListener("DOMContentLoaded",()=>{const{ensureAudioContext:e,playSong:n,pauseSong:o}=M(),i=L=>{L.target.closest(".play-btn")&&e().resume().then(()=>{document.getElementById("music-container").classList.contains("play")?o():n()})};document.addEventListener("click",i)});
