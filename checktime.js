let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

String.prototype.isNumber = function(){return /^\d+$/.test(this);}
module.exports = (string) =>{
  console.log(string)
  if(string.isNumber()){
    string= parseInt(string);
  }else{
    string = string.replace("%20", " ")
  }
  var myDate = new Date(string);
  return {natural: myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear(), unix: myDate.getTime()};

}
