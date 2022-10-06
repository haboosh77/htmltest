
function fetchdata(){
fetch('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true')
  .then( (response)=> {
    if(!response.ok){
        throw Error('Error');
    }
    return response.json();
  })
  .then(data =>{
    const html=data.map(user =>{
        return `
        <div class="myData">

        <img src="avatar.jpg" alt="Avatar" class="avatar">
       <p>${user.fname} ${user.lname} </p>
       <button type="button" class="tab-button-body" data-id="3">
       <span>Category3</span>
         </button>
            </div>`
        
    }).join("");
    document.querySelector("#myData").insertAdjacentHTML("afterbegin",html);
  })
  
  .catch(function (err) {
    console.log(err);
  });

//   var mainContainer = document.getElementById("myData");
//   for (var i = 0; i < data.length; i++) {
//     // append each person to our page
//   }
//   var div = document.createElement("div");
//   div.innerHTML = 'Name: ' + data[i].fname + ' ' + data[i].lname;
//   mainContainer.appendChild(div);
//   function appendData(data) {
   
//     var mainContainer = document.getElementById("myData");
//     for (var i = 0; i < data.length; i++) {
//       var div = document.createElement("div");
//       div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//       mainContainer.appendChild(div);
//     }
//   }
}

fetchdata();
//   <script>
//   fetch('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true')
//       .then(function (response) {
//           return response.json();
//       })
//       .then(function (data) {
         
//           appendData(data);
//          return  <div class="myData">
//           <p>name: ${data.fname}</p>

//           </div>

//       })
//       .catch(function (err) {
//           console.log('error: ' + err);
//       });
//   function appendData(data) {
//       var mainContainer = document.getElementById("myData");
//       for (var i = 0; i < data.length; i++) {
//           var div = document.createElement("div");
//           document.querySelector("#myData").insertAdjacentHTML('afterbegin',html)
//           div.insertAdjacentHTML = 'Name: ' + data[i].fname + ' ' + data[i].lname;
//           mainContainer.appendChild(div);
//       }
//   }
// </script>