document.getElementById('quoteForm')?.addEventListener('submit',function(e){
  e.preventDefault();
  const d = new FormData(this);
  const mensagem = [
    'Olá, Marcos! Gostaria de solicitar um orçamento.',
    '',
    'Nome: ' + (d.get('nome') || ''),
    'Serviço: ' + (d.get('servico') || ''),
    'Origem e destino: ' + (d.get('trajeto') || ''),
    'Data e horário: ' + (d.get('data') || 'A combinar'),
    'Informações: ' + (d.get('detalhes') || 'Não informado')
  ].join('\n');
  const url = 'https://wa.me/5511981087323?text=' + encodeURIComponent(mensagem);
  const janela = window.open(url,'_blank');
  if(janela) janela.opener = null;
  else window.location.href = url;
});
window.addEventListener('scroll',function(){document.querySelector('header')?.classList.toggle('scrolled',window.scrollY>30)},{passive:true});

/* Menu mobile acessível */
(function(){
 const button=document.querySelector('header .menu');
 const nav=document.getElementById('ms-primary-nav');
 if(!button||!nav)return;
 function close(){nav.classList.remove('mobile-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Abrir menu');}
 button.addEventListener('click',function(){
   const open=nav.classList.toggle('mobile-open');
   button.setAttribute('aria-expanded',String(open));
   button.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
 });
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!button.contains(e.target))close()});
 window.addEventListener('resize',()=>{if(window.innerWidth>800)close()},{passive:true});
})();
