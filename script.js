document.querySelectorAll('.objects button').forEach(b=>b.addEventListener('click',()=>{let t=document.getElementById('toast');t.textContent=b.dataset.note;t.classList.add('toast');setTimeout(()=>t.classList.remove('toast'),2200)}));
document.getElementById('envelopeWrap').addEventListener('click',()=>document.getElementById('envelopeWrap').classList.add('open'));
document.getElementById('storyEnvelopeWrap').addEventListener('click',()=>document.getElementById('storyEnvelopeWrap').classList.add('open'));
document.getElementById('music').addEventListener('click',e=>{const song=document.getElementById('bgSong');if(song.paused){song.play();e.currentTarget.textContent='♪';e.currentTarget.classList.add('playing')}else{song.pause();e.currentTarget.textContent='♫';e.currentTarget.classList.remove('playing')}});
// Gentle reveal for sections as they enter the viewport.
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('seen')}),{threshold:.15});
document.querySelectorAll('.section-heading,.story-content,.heavy-content,.home-copy,.future-copy,.ending-copy').forEach(x=>obs.observe(x));
