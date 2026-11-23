
document.getElementById('quoteForm')?.addEventListener('submit',function(e){
 e.preventDefault();
 const d=new FormData(this);
 const msg=`Olá, Marcos! Gostaria de solicitar um orçamento.%0A%0A Nome: ${encodeURIComponent(d.get('nome'))}%0A Serviço: ${encodeURIComponent(d.get('servico'))}%0A Origem e destino: ${encodeURIComponent(d.get('trajeto'))}%0A Data e horário: ${encodeURIComponent(d.get('data')||'A combinar')}%0A Informações: ${encodeURIComponent(d.get('detalhes')||'Não informado')}`;
 window.open('https://wa.me/5511981087323?text='+msg,'_blank','noopener');
});

window.addEventListener("scroll",function(){document.querySelector("header")?.classList.toggle("scrolled",window.scrollY>30)},{passive:true});