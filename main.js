// function getfile(file,callback){
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status == "200"){
//   callback(xhr.responseText);
//     }
//   };
//   xhr.send(null);
// }
// getfile("data.json",function(text){
//   var data = JSON.parse(text);
//   console.log(data);
// })

function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
          reject(new Error('error'));
        }
    })
  })
}
var newfile=loadJSON("data.json");
  newfile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
})
var childtwo=document.querySelector(".childtwo");
function career(careerObj){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="careerObjective";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=careerObj.info;
  childtwo.appendChild(p);
}
function education(edu){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="educational qualification";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  for(var i=0;i<edu.length;i++){
  eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childtwo.appendChild(eduH3);
    var eduUl=document.createElement("ul");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institute;
    eduUl.appendChild(eduLi);
    childtwo.appendChild(eduUl);
    var eduLi2=document.createElement("li2");
    eduLi2.textContent=edu[i].data;
    eduUl.appendChild(eduLi2);
    childtwo.appendChild(eduUl);
  }
}
