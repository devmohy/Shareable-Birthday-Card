window.onload = function(){
  var today = new Date();
  var year = today.getFullYear();
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October ", "November",  "December"][today.getMonth()];
  var day = today.getDate();
  document.getElementById('date').innerHTML = year + '/' + month + '/' + day + "th";
}
