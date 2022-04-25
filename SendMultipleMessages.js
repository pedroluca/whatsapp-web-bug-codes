function stringDesm(text, laps) {
  document.querySelector('._1LbR4 ._13NKt').focus();
  
  const string = text; //String que usaremos como exemplo
  let z = 0;
  for (let index = 0; index < laps; index++) {
      let message = string + "\n";
      document.execCommand("InsertText", false, message);
      document.querySelector('._4sWnG').click();
  }
}
stringDesm('', );