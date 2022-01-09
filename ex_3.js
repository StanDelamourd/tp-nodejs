//Non réussi
function birthday(date){
    return new Promise((successCallback, failureCallback) => {
      let birthdate = date;
      let today = new Date();
      let dateParts = birthdate.split("/");
      let birthDate = new Date(+dateParts[2], dateParts[1]-1, +dateParts[0]+1);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
        age--;
      }
      if(age >= 18 ){
        successCallback(age);
      }else{
        failureCallback("Echec");
      }
        
    })
  }
  function successCallback(age) {
    console.log(true);
  }
  function failureCallback(erreur){
    console.error("échouer");
  }
  
  const promise=birthday(26/12/1992);
  promise.then(successCallback, failureCallback);