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
  return {
    natural: myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear(),
    unix: myDate.getTime()
  };

};
