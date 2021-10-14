 function submit(){
    
    const firstName= document.getElementById('first_name').value;
    const lastName= document.getElementById('last_name').value;
    const email= document.getElementById('email').value;  
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ "firstName": firstName, "lastName": lastName, "email": email }),
      redirect: 'follow'
    };
  
    fetch("https://peaceful-thicket-55164.herokuapp.com/save-details", requestOptions)
      .then(json => {
         alert('Record sent successfully');
         console.log(json);
      })
      .catch(err => {
         alert('Error saving details');
         console.log(err);
      })
 }

 document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
   console.log('HERE');
   e.preventDefault(); 
   submit();
 });