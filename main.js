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
  skills(data.skills);
  achievements(data.Achievements);
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
function skills(skillInfo){
   var careerHeading=document.createElement("h2");
   careerHeading.textContent="Technical skills";
   childtwo.appendChild(careerHeading);
   var hr=document.createElement("hr");
   careerHeading.appendChild(hr);
   var skillTable=document.createElement("table");
   skillTable.border="1";
   childtwo.appendChild(skillTable);
   var tableData="";
  for(var i=0;i<skillInfo.length;i++){
  tableData+="<tr><td>"+skillInfo[i].title+"</td><td>"+skillInfo[i].info+"</td></tr>";
}
skillTable.innerHTML=tableData;
}
function achievements(ach){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Achievements";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var ul=document.createElement("ul");
  childtwo.appendChild(ul);
  var li="";
  for(var i=0;i<ach.length;i++){
    li+="<li>"+ach[i].acheiveData;+"</li>";
    ul.innerHTML=li;
  }
}
