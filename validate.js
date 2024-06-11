//Seu JavaScript de validação aqui

const form = document.getElementById('form');
const campos = document.querySelectorAll('.formcontato__input');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// Função para repetir o erro
function setError(index){
  campos[index].style.borderBottom = '2px solid red';
  spans[index].style.display = 'block';
}


function removeError(index){
  campos[index].style.borderBottom = '';
  spans[index].style.display = 'none';
}

function nameValidate(){
  if(campos[0].value.length < 3){
    setError(0);
  } else{
    removeError(0);
  }
}

function emailValidate(){
  if(!emailRegex.test(campos[1].value)){
    
    setError(1);
    

  }else{
    removeError(1);
  }
}

function assuntoValidate(){
  if(campos[2].value.length < 3){
    setError(2);
  } else{
    removeError(2);
  }
}
