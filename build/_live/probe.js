window.__e=[];window.addEventListener('error',e=>window.__e.push(String(e.message)));
setTimeout(()=>{
  const r={errs:window.__e, cardsDefault:document.querySelectorAll('.q-card').length};
  try{ setLecture('all'); r.cardsAll=document.querySelectorAll('.q-card').length;
       r.lecOpts=document.querySelectorAll('#lec-select option').length;
       setLecture('01'); r.L01=document.querySelectorAll('.q-card').length;
       setLecture('20'); r.L20=document.querySelectorAll('.q-card').length;
  }catch(e){ r.fatal=String(e); }
  console.log('PROBE'+JSON.stringify(r));
},3000);
