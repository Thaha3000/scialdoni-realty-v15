// Scialdoni Realty v9: accessible Sell menu; applies to every page.
(function(){
  for(const item of document.querySelectorAll('.sell-nav')){
    const toggle=item.querySelector('.sell-toggle');
    if(!toggle)continue;
    toggle.addEventListener('click',function(e){e.preventDefault();const isOpen=item.classList.toggle('open');toggle.setAttribute('aria-expanded',String(isOpen));});
    item.addEventListener('keydown',function(e){if(e.key==='Escape'){item.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus()}});
  }
  document.addEventListener('click',function(e){for(const item of document.querySelectorAll('.sell-nav')) if(!item.contains(e.target)){item.classList.remove('open');item.querySelector('.sell-toggle')?.setAttribute('aria-expanded','false')}})
})();
