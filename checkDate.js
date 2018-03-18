let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

String.prototype.isNumber = ()=>{return /^\d+$/.test(this);}
module.exports = (string) =>{
  console.log(string)
  if(!isNaN(string)){
    string= parseInt(string);
    console.log(typeof string)
  }else{
    string = string.split("%20").join(" ");
    console.log(string)
  }
  var myDate = new Date(string);
  let natural = null;
  let unix = null;
  let daysUntil = null;
  if (myDate.getDate() >= 1 && myDate.getDate() <= 31){
    natural = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear();
    unix = myDate.getTime();
    daysUntil = Math.floor((myDate.getTime() - new Date().getTime()) / (1000*60*60*24));
  }
  return {
    natural:natural,
    unix: unix,
    daysUntil: daysUntil
  };

};
