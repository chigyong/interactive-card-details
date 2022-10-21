//Getting values from the input
function myFunction (){

    var cardnumber = parseInt(document.getElementById('cardnumber').value);
    var cardname = document.getElementById('cardname').value;
    var cardmonth = parseInt(document.getElementById('month').value);

    document.getElementById('number').innerHTML = cardnumber;
    document.getElementById('name').innerHTML = cardname;
    document.getElementById('date').innerHTML = cardmonth;

}
   







