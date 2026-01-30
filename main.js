
const formcontrol = document.getElementById("form-control");
const seeresult = document.getElementById("see-result");
const bw = document.getElementById("bw-btn");


// formka ardayga uu galinayo magaciisa iyo ID giisa 
const studentname = document.getElementById("name");
const studentID = document.getElementById("ID");


// qaybta maadooyinka iyo dhibcaha qaabilsan 
const btn = document.getElementById("btn");
const course1 = document.getElementById("course1");
const course2 = document.getElementById("course2");
const info = document.getElementById("info");
const resultWrapper = document.getElementById("result-wrapper");



    // buttonka midabka website ka ee dark/light
bw.addEventListener("click", (event)=>{
    event.preventDefault();
    document.body.classList.toggle("black");
  
});


formcontrol.style.display = "none";
seeresult.addEventListener("click", (event)=>{
    event.preventDefault();
   
    if(formcontrol.style.display === "none"  &&  resultWrapper.style.display === "none"){
        formcontrol.style.display = "block";
           resultWrapper.style.display = "block"
    }else{
        formcontrol.style.display = "none";
           resultWrapper.style.display = "none"
    }
  
   

})

// Students database
const students = [
        {name: "mahamed",ID: 1001, college: "health", department: "clinical nurse", year: 2017, course1: {quiz: 10,assignmen: 10,test: 20,midexam: 20,final: 20,grade: "B-"},course2: {quiz: 10,assignmen: 10,test: 20,midexam: 20,final: 20,grade: "B-"}},
        {name: "abdi",ID: 1030, college: "health", department: "clinical nurse", year: 2017, course1: {quiz: 10,assignmen: 10,test: 20,midexam: 20,final: 20,grade: "B-"},course2: {quiz: 10,assignmen: 10,test: 20,midexam: 20,final: 20,grade: "B-"}},
];

btn.addEventListener("click", (event) =>{
    event.preventDefault();
    
     
    const magacaardayga = studentname.value.toLowerCase();
    const lambarkaardayga = Number(studentID.value);
      if(magacaardayga === "" || lambarkaardayga === ""){
        studentname.classList.add("casaan");
        studentID.classList.add("casaan");
        resultWrapper.style.display = "none"
        return; 
    }else{
        resultWrapper.style.display = "block"
    }


    // find the student
const found = students.find(s =>  s.name === magacaardayga && s.ID === lambarkaardayga)

    if(found){
        // show result
        //   warbixinta ardayga 1aad
        info.innerHTML =`
         <h3><span class="bb">Student Result</span></h3>
           <hr>
        <span class="bb">Name: ${found.name}</span><br>
        <span class="bb">ID: ${found.ID}</span><br>
        <span class="bb">college: ${found.college}</span><br>
        <span class="bb">departmen: ${found.department}</span><br>
        <span class="bb">year: ${found.year}</span><br>
       
            <hr>
        `
        // natiijada maadada 1aad
        course1.innerHTML = `
          
        <span class="bb">Course Name:</span> <br>
       <span class="bb"> Advanced nursing care</span><br>
           <hr> 
            
            Assignment:  ${found.course1.assignmen}<br>
            Quiz: ${found.course1.quiz}<br>
            Test: ${found.course1.test}<br>
            Mid Exam: ${found.course1.midexam}<br>
            Final: ${found.course1.final}<br>
            Grade: ${found.course1.grade}
            <br>
  
        `;
        // natiijadada maadada 2aad
        course2.innerHTML = `
         <span class="bb">Course Name:</span><br>
         <span class="bb">Nursing health assesment</span><br>
         
            <hr>
            Quiz: ${found.course2.quiz}<br>
            Assignment: ${found.course2.assignmen}<br>
            Test: ${found.course2.test}<br>
            Mid Exam: ${found.course2.midexam}<br>
            Final: ${found.course2.final}<br>
            grade: ${found.course2.grade}
        `;
     
       
        
        course1.style.display = "block"
        info.style.display = "block"
        course2.style.display = "block"
        resultWrapper.style.visibility = "visible"
        studentname.value = "";
        studentID.value = "";
         
    } else {
        info.innerHTML = `<p style="color:white;">Student not found`;
         course1.style.display = "none";
         course2.style.display = "none";
         info.style.display = "block";
           studentname.value = "";
        studentID.value = "";

  resultWrapper.style.visibility = "visible"
    }
});
const button2 = document.getElementById("showsidebar");
const showsidebar = document.getElementById("sidebar");
button2.addEventListener("click", (event)=>{
    event.preventDefault();
   showsidebar.style.display = "block"
});
function hide(){
    showsidebar.style.display = "none";
    
}


const qoral = document.querySelectorAll("#sawiro h2");
let index = 0;

for(let i = 0; i < qoral.length; i++){
    qoral[i].style.display = "none"
    qoral[index].style.display = "block"
}
function shownextimage(){
    qoral[index].style.display = "none"
    index++

if(index >= qoral.length){
    index = 0;
}
qoral[index].style.display = "block";

}
setInterval(shownextimage, 5000);