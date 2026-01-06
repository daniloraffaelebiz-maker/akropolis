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
      let ok = true;
      required.forEach(el => {
        if(!el.value || !String(el.value).trim()){
          ok = false;
          el.focus();
        }
      });
      if(!ok){
        e.preventDefault();
        alert('Vul a.u.b. alle verplichte velden in.');
      }
    });
  }
})();