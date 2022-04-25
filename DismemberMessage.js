function stringDesm(params) {
  document.querySelector('._1LbR4 ._13NKt').focus();
  
  const string = params; //String que usaremos como exemplo
  let z = 0;
  for (let index = string.length; index > 0; index--) {
      let elementAdd = ''; //Reescrever a variavel assim que o resultado for apresentado no devtools 
      for (z = 0; z < index; z++) {
          let element = string[z];
          if (z == (index - 1) && element.indexOf(' ') == 0) {
              index--;
          } else {
              elementAdd = elementAdd.concat(element);
          }
      }
      let message = elementAdd + "\n";
      document.execCommand("InsertText", false, message);
  }
  document.querySelector('._4sWnG').click();
}
stringDesm('');