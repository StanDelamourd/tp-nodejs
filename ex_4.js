//Fonction chaine avec then et catch
function chaineTry(){
    
        myPromise("Un mot trooooooooooooop long")
        .then(res => {console.log(res)})
        .catch(err =>{console.log(err)})
};

const myPromise = (value) => {
    return new Promise((resolve, failure) => {
        if(value.length < 20){
            resolve("true");
        }else{
            failure("Oops");
        }
    });
}

//Fonction calcul avec then et catch
function calculTry(){
    
    myPromise2(20,30)
    .then(res => {console.log(res)})
    .catch(err =>{console.log(err)})
};

const myPromise2 = (a,b) => {
return new Promise((resolve, failure) => {
    if(a > b){
        const c = a-b;
        resolve(c);
    }else{
        failure("Echouer");
    }
});
}
//Fonction majorité avec then et catch
//Non réussi
function birthday(){
        myPromise3(20/12/1992)
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)})
};

const myPromise3 = (date) => {
    return new Promise((resolve, failure) => {
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
        resolve(age);
      }else{
        failure("Echec");
      }
    });
    }
  
chaineTry();
calculTry();
birthday();