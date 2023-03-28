function addChat() {
    let msg = document.getElementById('message');
    let msgText = msg.value;
    
    if (msgText.trim() === '') return;

    msg.value = '';
    
    let newMessageItem = document.createElement('div');
    newMessageItem.className = 'message-item2';

    let boxMensagem = document.createElement('div');
    boxMensagem.className = 'boxright';
    boxMensagem.innerHTML = 'Você diz:';

    let conteudo = document.createElement('div');
    conteudo.className = 'msg';
    conteudo.innerHTML = msgText;
    boxMensagem.appendChild(conteudo);

    const lista = document.getElementById("grupo-mensagens");
    lista.appendChild(boxMensagem);
}