/* 夜讀誌 NOCTURNE — interactions */
(function(){
  // mobile nav toggle
  var t=document.querySelector('.navtoggle'),n=document.querySelector('nav.main');
  if(t&&n){t.addEventListener('click',function(){n.classList.toggle('open');
    t.setAttribute('aria-expanded',n.classList.contains('open'));});}

  // subscribe form (static demo — no backend)
  document.querySelectorAll('form[data-demo]').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var note=f.querySelector('.formnote');
      if(note){note.textContent='感謝您的訂閱意願,我們已收到——本誌為作品集展示站,實際電子報尚未開通。';note.style.display='block';}
      f.reset();
    });
  });
})();
