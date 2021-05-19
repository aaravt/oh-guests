var GuestName = document.getElementById("input1").value;
names_of_people.push(GuestName);
names_of_people.sort();
function search() {
    var s = document.getElementById("s1").value;
    var found =0;
    var j;
    for (let j= 0; j< names_of_people.length;j++) {
        if (s==names_of_people[j]) {
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found" +found+ "time/s";
    console.log("found name" +found+ "time/s");
}
function submit(){
    for (let   j= 1; j < 5; j++) {
  guest=document.getElementById("input" + i).value;
     guestarray.push(guest)   
    }
    arraywithcommas = []
  for (let  j= 0;  j< guestarray.length; j++) {
      guest=guestarray[j]
      arraywithcommas.push("<h4>" + guest + "</h4>")
      
  }
      document.getElementById("output").innerHTML=arraywithcommas
      arraywithoutcommas=arraywithcommas.join(" ")
      document.getElementById("outputwithoutcommas").innerHTML=arraywithoutcommas
      document.getElementById("submitbutton").style.display="none"
      document.getElementById("search_button").style.display="inline-block"