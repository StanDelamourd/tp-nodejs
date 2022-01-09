//Fonction chaine avec try et catch
async function chaineTry(){
    try{
    const firstPromise = myPromise("Un mot trooooooooooooop long");
    console.log(firstPromise);
    const secondPromise = myPromise("court");
    console.log(secondPromise);
    } catch(e) {
        console.log(e);
    }
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

//Fonction calcul avec try et catch
async function calculTry(){
try{
    const firstPromise2 = myPromise2(25,37);
    console.log(firstPromise2);
    const secondPromise2 = myPromise2(42,17);
    console.log(secondPromise2);
    } catch(e) { 
        console.log(e);
    }
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
//Fonction majorité avec try et catch
//Non réussi
//  async function birthday(){
//     try {
//     const firstPromise3 = myPromise3(20/12/1992);
//     console.log(firstPromise3);
//     const secondPromise3 = myPromise3(15/05/2007);
//     console.log(secondPromise3);
//     } catch(err) {
//         console.log(err)
//     }
//  };

// const myPromise3 = (date) => {
// return new Promise((resolve, failure) => {
// let birthdate = date;
//   let today = new Date();
//   let dateParts = birthdate.split("/");
//   let birthDate = new Date(+dateParts[2], dateParts[1]-1, +dateParts[0]+1);
//   let age = today.getFullYear() - birthDate.getFullYear();
//   let m = today.getMonth() - birthDate.getMonth();
//   if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
//     age--;
//   }
//   if(age >= 18 ){
//     resolve(age);
//   }else{
//     failure("Echec");
//   }
// });
// }

chaineTry();
calculTry();
// birthday();