(function(){
  // Simple lightbox: opens an overlay with clicked image
  function createLightbox(){
    const overlay = document.createElement('div');
    overlay.id = 'lw-overlay';
    overlay.style.display = 'none';
    overlay.innerHTML = '<div id="lw-box"><img id="lw-img" src="" alt=""><button id="lw-close" aria-label="Close">×</button></div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function(e){
      if(e.target.id === 'lw-overlay' || e.target.id === 'lw-close') overlay.style.display = 'none';
    });
    return overlay;
  }
  const overlay = createLightbox();
  document.addEventListener('click', function(e){
    const link = e.target.closest('a[data-lightbox]');
    if(!link) return;
    e.preventDefault();
    const img = document.getElementById('lw-img');
    img.src = link.href;
    img.alt = link.getAttribute('data-title') || '';
    overlay.style.display = 'flex';
  });
})();