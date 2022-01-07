function chaine(a, b){
    return new Promise((successCallback, failureCallback) => {
      if(a > b){
          const c = a-b;
        successCallback(c);
      }else{
        failureCallback("Echec");
      }
    })
  }
  function successCallback(c) {
    console.log(c);
  }
  function failureCallback(erreur){
    console.error("échouer");
  }
  
  const promise=chaine(40,30);
  promise.then(successCallback, failureCallback);