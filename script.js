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
