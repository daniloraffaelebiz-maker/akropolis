(function(){
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  if(burger && menu){
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
  }

  const form = document.querySelector('form[data-reserve]');
  if(form){
    form.addEventListener('submit', (e) => {
      const required = form.querySelectorAll('[required]');
      for(const el of required){
        if(!el.value || !String(el.value).trim()){
          e.preventDefault();
          el.focus();
          alert('Vul a.u.b. alle verplichte velden in.');
          break;
        }
      }
    });
  }
})();
