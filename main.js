
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
const course3 = document.getElementById("course3");
const info = document.getElementById("info");
const resultWrapper = document.getElementById("result-wrapper");



    // buttonka midabka website ka ee dark/light
bw.addEventListener("click", (event)=>{
    event.preventDefault();
    document.body.classList.toggle("black");
  
});




// Students database
const students = [
        {name: "abdifatah muhumed mukhtar",
         id: 1001,
         college: "health", 
         department: "clinical nurse", 
         year: 2017,
             course1: {assignment: 30, final: 0,bonus: null, total: 30, grade: "F"},
             course2: {assignment: 0, test: 0, final: 0, total: 0, grade: "F"},
             course3: { grade: "A"},},
            
{name: "abshiro barre ismacil",
    id: 1002,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: null,total: 30,grade: "F"},
  course2: {assignment: 0, test: 8, final: 0, total: 8, grade: "F"},
course3: {grade: "A"},},
{name: "ahmed shekh muhumed",
    id: 29,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 10,total: 40,grade: "D"},
  course2: {assignment: 0, test: 10, final: 38, total: 48, grade: "D"},
course3: {grade: "A"},},
{name: "ayaan muhumed sahal",
    id: 46,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 0,total: 30,grade: "F"},
    course2: {assignment: 0, test: 12, final: 38, total: 50, grade: "C-"},
    course3: {grade: "A"},},
{name: "cabdi dhah xasan",
    id: 5,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 26,bonus: 20,total: 76,grade: "B+"},
  course2: {assignment: 30, test: 10, final: 40, total: 80, grade: "A-"},
course3: {grade: "A"},},
{name: "cabdinasir hasan mohamed",
    id: 22,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 20,total: 50,grade: "C-"},
  course2: {assignment: 30, test: 18, final: 34, total: 82, grade: "A-"},
course3: {grade: "A"},},
{name: "caisha ismacil cali",
    id: 41,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 10,total: 40,grade: "D"},
  course2: {assignment: 30, test: 12, final: 38, total: 80, grade: "A-"},
course3: {grade: "A"},},
{name: "casho maxamuud dubad",
    id: 42,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 65,bonus: 0,total: 95,grade: "A+"},
  course2: {assignment: 30, test: 10, final: 40, total: 80, grade: "A-"},
course3: {grade: "A"},},
{name: "deqo abdirisak omer",
    id: 53,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 10,bonus: 20,total: 60,grade: "C"},
  course2: {assignment: 30, test: 6, final: 36, total: 72, grade: "B"},
course3: {grade: "A"},},
{name: "faiza carab hirbe",
    id: 131,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 10,bonus: 20,total: 60,grade: "C"},
  course2: {assignment: 30, test: 14, final: 40, total: 84, grade: "A-"},
course3: {grade: "A"},},
{name: "farxiyo muktar salad",
    id: 59,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 30, test: 14, final: 38, total: 82, grade: "A-"},
course3: {grade: "A"},},
{name: "fawsiya hasan muhumed",
    id: 64,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 66,bonus: 0,total: 96,grade: "A"},
  course2: {assignment: 0, test: 0, final: 40, total: 0, grade: "D"},
course3: {grade: "A"},},
{name: "foos cabdile muhumed",
    id: 63,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 10,bonus: 15,total: 55,grade: "C-"},
  course2: {assignment: 30, test: 8, final: 36, total: 74, grade: "B"},
course3: {grade: "A"},},
{name: "hamdi abdi nuur",
    id: 70,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 30,bonus: 20,total: 80,grade: "A-"},
  course2: {assignment: 30, test: 18, final: 38, total: 86, grade: "A-"},
course3: {grade: "A"},},
{name: "hilal cabdi maxamud",
    id: 76,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 0,total: 30,grade: "F"},
  course2: {assignment: 0, test: 0, final: 40, total: 40, grade: "D"},
course3: {grade: "A"},},
{name: "hindi mohamed barqab",
    id: 77,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 20,total: 50,grade: "C-"},
  course2: {assignment: 30, test: 9, final: 36, total: 75, grade: "B+"},
course3: {grade: "A"},},
{name: "husen abdi dhaqane",
    id: 79,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 25,bonus: 20,total: 75,grade: "B+"},
  course2: {assignment: 30, test: 14, final: 32, total: 76, grade: "B+"},
course3: {grade: "A"},},
{name: "ibrahim shed gedi",
    id: 80,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 37,bonus: 20,total: 87,grade: "A-"},
  course2: {assignment: 30, test: 16, final: 34, total: 80, grade: "A-"},
course3: {grade: "A"},},
{name: "istahil yarow nur",
    id: 43,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 0,total: 30,grade: "F"},
  course2: {assignment: 0, test: 10, final: 40, total: 50, grade: "C-"},
course3: {grade: "A"},},
{name: "jamal muhumed farah",
    id: 86,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 13,bonus: 20,total: 63,grade: "C"},
  course2: {assignment: 30, test: 10, final: 38, total: 78, grade: "B+"},
course3: {grade: "A"},},
{name: "jamcale cabdi xusen",
    id: 87,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 29,bonus: 20,total: 79,grade: "B+"},
  course2: {assignment: 30, test: 10, final: 40, total: 80, grade: "A-"},
course3: {grade: "A"},},
{name: "kaaho yuusuf muxumed",
    id: 88,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 30,total: 30,grade: "F"},
  course2: {assignment: 0, test: 0, final: 0, total: 0, grade: "F"},
course3: {grade: "A"},},
{name: "kawsar cabdi cumar",
    id: 99,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 30, test: 16, final: 36, total: 82, grade: "A-"},
course3: {grade: "A"},},
{name: "kawsar cabdulahi jamac",
    id: 98,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 14,bonus: 0,total: 44,grade: "D"},
  course2: {assignment: 0, test: 0, final: 26, total: 26, grade: "F"},
course3: {grade: "A"},},
{name: "kawsar mohamed abdirahman",
    id: 100,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 53,bonus: 20,total: 103,grade: "A+"},
  course2: {assignment: 30, test: 22, final: 36, total: 88, grade: "A-"},
course3: {grade: "A"},},
{name: "khadar mohamed hamud",
    id: 89,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 33,bonus: 20,total: 83,grade: "A-"},
  course2: {assignment: 30, test: 10, final: 34, total: 74, grade: "B"},
course3: {grade: "A"},},
{name: "khadro sheekh cabdinur",
    id: 9,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 55,bonus: null,total: 85,grade: "A-"},
  course2: {assignment: 30, test: 18, final: 34, total: 82, grade: "A-"},
course3: {grade: "A"},},
{name: "khayro cabdulahi derow",
    id: 95,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 42,bonus: 15,total: 87,grade: "A-"},
  course2: {assignment: 30, test: 14, final: 38, total: 82, grade: "A-"},
course3: {grade: "A"},},
{name: "mahamed muhumed ali",
    id: 8383,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 30, test: 0, final: 26, total: 56, grade: "C"},
course3: {grade: "A"},},
{name: "mahamud abdulahi hasan",
    id: 8384,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 16,bonus: 25,total: 71,grade: "B"},
  course2: {assignment: 30, test: 0, final: 20, total: 50, grade: "C"},
course3: {grade: "A"},},
{name: "mahamed ahmed diriye",
    id: 109,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 62,bonus: 20,total: 112,grade: "A+"},
  course2: {assignment: 30, test: 14, final: 40, total: 84, grade: "A-"},
course3: {grade: "A"},},
{name: "mohamed abdi ibrahim",
    id: 105,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 39,bonus: 20,total: 89,grade: "A-"},
  course2: {assignment: 30, test: 22, final: 38, total: 90, grade: "A"},
course3: {grade: "A"},},
{name: "najmo siciid cali",
    id: 128,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 62,bonus: 20,total: 112,grade: "A+"},
  course2: {assignment: 30, test: 10, final: 4, total: 44, grade: "D"},
course3: {grade: "A"},},
{name: "nasri ahmed aden",
    id: 141,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 15,total: 45,grade: "D"},
  course2: {assignment: 30, test: 6, final: 10, total: 46, grade: "D"},
course3: {grade: "A"},},
{name: "nasri rashid muhumed",
    id: 132,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 13,bonus: 15,total: 58,grade: "C-"},
  course2: {assignment: 30, test: 10, final: 36, total: 76, grade: "B+"},
course3: {grade: "A"},},
{name: "nastexo cali nur",
    id: 140,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 26,bonus: 20,total: 76,grade: "B+"},
  course2: {assignment: 30, test: 18, final: 38, total: 86, grade: "A-"},
course3: {grade: "A"},},
{name: "nimco cabdirahman hasan",
    id: 145,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 30, test: 16, final: 40, total: 86, grade: "A-"},
course3: {grade: "A"},},
{name: "Nur farah yusuf",
    id: 151,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 52,bonus: 20,total: 102,grade: "A+"},
  course2: {assignment: 30, test: 20, final: 28, total: 78, grade: "B+"},
course3: {grade: "A"},},
{name: "ramlo raheye aman",
    id: 156,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: null,total: 30,grade: "F"},
  course2: {assignment: 0, test: 8, final: 38, total: 46, grade: "D"},
course3: {grade: "A"},},
{name: "ridwan cabdi muse",
    id: 158,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 11,bonus: 20,total: 61,grade: "C"},
  course2: {assignment: 30, test: 22, final: 40, total: 92, grade: "A"},
course3: {grade: "A"},},
{name: "saytuun xasan maxamud",
    id: 166,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 55,bonus: 15,total: 100,grade: "A+"},
  course2: {assignment: 30, test: 4, final: 38, total: 72, grade: "B"},
course3: {grade: "A"},},
{name: "siyad jama ali",
    id: 173,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 58,bonus: 20,total: 108,grade: "A+"},
  course2: {assignment: 30, test: 18, final: 40, total: 88, grade: "A-"},
course3: {grade: "A"},},
{name: "wali xamdi ducale",
    id: 185,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 60,bonus: 20,total: 110,grade: "A+"},
  course2: {assignment: 30, test: 10, final: 38, total: 78, grade: "B+"},
course3: {grade: "A"},},







//SECTION B//






{name: "abdi mahamed dek",
    id: 8385,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 0,final: 0,bonus: 20,total: 20,grade: "F"},
  course2: {assignment: 0, test: 0, final: 0, total: 0, grade: "F"},
course3: {grade: "A"},},
{name: "abdi shugri mahamed ",
    id: 8386,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 0, test: 22, final: 38, total: 60, grade: "C"},
course3: {grade: "A"},},
{name: "cabdiwahab abdulahi farah",
    id: 20,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 45,bonus: null,total: 75,grade: "B+"},
  course2: {assignment: 0, test: 16, final: 38, total: 54, grade: "C-"},
course3: {grade: "A"},},
{name: "ahmed abdi kahin",
    id: 28,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 60,bonus: null,total: 90,grade: "A+"},
  course2: {assignment: 30, test: 8, final: 40, total: 78, grade: "B+"},
course3: {grade: "A"},},
{name: "amal cabdulahi omer",
    id: 30,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 30, test: 16, final: 40, total: 86, grade: "A-"},
course3: {grade: "A"},},
{name: "amal ibrahim husen",
    id: 33,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 40,bonus: 20,total: 90,grade: "A"},
  course2: {assignment: 30, test: 20, final: 38, total: 88, grade: "A-"},
course3: {grade: "A"},},
{name: "amin mahamad ismail",
    id: 34,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 60,bonus: null,total: 90,grade: "A"},
  course2: {assignment: 0, test: 0, final: 40, total: 40, grade: "D"},
course3: {grade: "A"},},
{name: "canab ahmed ali",
    id: 38,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 15,bonus: 20,total: 65,grade: "C+"},
  course2: {assignment: 30, test: 2, final: 40, total: 72, grade: "B"},
course3: {grade: "A"},},
{name: "Fartun abdiqadir hasan",
    id: 60,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 65,bonus: 20,total: 115,grade: "A+"},
  course2: {assignment: 30, test: 10, final: 34, total: 74, grade: "B"},
course3: {grade: "A"},},
{name: " ikran abdifatah ali",
    id: 82,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 30, test: 18, final: 40, total: 88, grade: "A-"},
course3: {grade: "A"},},
{name: "khadar abdi xalane ",
    id: 8388,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 16,bonus: 0,total: 46,grade: "D"},
  course2: {assignment: 0, test: 0, final: 38, total: 38, grade: "F"},
course3: {grade: "A"},},
{name: "mahamad mahamud galow",
    id: 900,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 55,bonus: 0,total: 85,grade: "A-"},
  course2: {assignment: 30, test: 16, final: 40, total: 86, grade: "A-"},
course3: {grade: "A"},},
{name: "mahamd nur maydal",
    id: 111,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 40,bonus: 20,total: 90,grade: "A"},
  course2: {assignment: 30, test: 20, final: 40, total: 90, grade: "A"},
course3: {grade: "A"},},
{name: "mahamad dek nur",
    id: 800,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 62,bonus: 0,total: 92,grade: "A"},
  course2: {assignment: 30, test: 14, final: 40, total: 84, grade: "A-"},
course3: {grade: "A"},},
{name: "miski kahin abdirashid",
    id: 115,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 36,bonus: 20,total: 86,grade: "A-"},
  course2: {assignment: 30, test: 16, final: 40, total: 86, grade: "A-"},
course3: {grade: "A"},},
{name: "maxamad cabdi nasir ",
    id: 104,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 50,bonus: 20,total: 100,grade: "A+"},
  course2: {assignment: 30, test: 14, final: 36, total: 80, grade: "A-"},
course3: {grade: "A"},},
{name: "mohamed abdi omer",
    id: 117,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 16,bonus: 20,total: 66,grade: "C"},
  course2: {assignment: 30, test: 0, final: 12, total: 42, grade: "D"},
course3: {grade: "A"},},
{name: "nadifo moalim kayd",
    id: 126,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 0, test: 22, final: 38, total: 60, grade: "C"},
course3: {grade: "A"},},
{name: "najmo mahamud dubad",
    id: 129,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 0,total: 100,grade: "A+"},
  course2: {assignment: 30, test: 18, final: 38, total: 86, grade: "A-"},
course3: {grade: "A"},},
{name: "nastexo cabdi duwane",
    id: 137,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 30, test: 6, final: 38, total: 74, grade: "B"},
course3: {grade: "A"},},
{name: "nastexo cabdiraxman cali",
    id: 999,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 20,total: 50,grade: "C-"},
  course2: {assignment: 0, test: 0, final: 0, total: 0, grade: "F"},
course3: {grade: "A"},},
{name: "nastexo yusuf cumar",
    id: 143,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 28,bonus: 20,total: 78,grade: "B+"},
  course2: {assignment: 0, test: 10, final: 34, total: 44, grade: "D"},
course3: {grade: "A"},},
{name: "nimco cumar kahin",
    id: 146,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 0,total: 30,grade: "F"},
  course2: {assignment: 0, test: 0, final: 36, total: 36, grade: "F"},
course3: {grade: "A"},},
{name: "nimco mahamud wayrax",
    id: 147,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 0,total: 30,grade: "F"},
  course2: {assignment: 0, test: 16, final: 34, total: 50, grade: "C-"},
course3: {grade: "A"},},
{name: "nur farah abdi",
    id: 148,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 53,bonus: 20,total: 103,grade: "A+"},
  course2: {assignment: 30, test: 10, final: 36, total: 76, grade: "B+"},
course3: {grade: "A"},},
{name: "nuurto mahamud abdulahi",
    id: 152,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 41,bonus: 20,total: 91,grade: "A"},
  course2: {assignment: 30, test: 22, final: 40, total: 92, grade: "A"},
course3: {grade: "A"},},
{name: "rage ahmed abdiqadir",
    id: 154,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 40,bonus: 20,total: 90,grade: "A"},
  course2: {assignment: 30, test: 6, final: 40, total: 76, grade: "B+"},
course3: {grade: "A"},},
{name: "raqib cumar kahin",
    id: 1522,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 25,bonus: 0,total: 55,grade: "C-"},
  course2: {assignment: 30, test: 0, final: 40, total: 70, grade: "B"},
course3: {grade: "A"},},
{name: "rodo mowlid muse",
    id: 160,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 60,bonus: 20,total: 110,grade: "A+"},
  course2: {assignment: 30, test: 0, final: 40, total: 70, grade: "B"},
course3: {grade: "A"},},
{name: "rodo husen hasan",
    id: 159,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 33,bonus: 20,total: 83,grade: "A-"},
  course2: {assignment: 0, test: 22, final: 34, total: 56, grade: "C-"},
course3: {grade: "A"},},
{name: "sahro mahad sahal",
    id: 163,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 20,bonus: 20,total: 70,grade: "B"},
  course2: {assignment: 30, test: 4, final: 40, total: 74, grade: "B"},
course3: {grade: "A"},},
{name: "saredo mahamad omer",
    id: 999,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 20,total: 50,grade: "C-"},
  course2: {assignment: 30, test: 0, final: 0, total: 30, grade: "F"},
course3: {grade: "A"},},
{name: "shakir ahmed hared",
    id: 176,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 40,bonus: 0,total: 70,grade: "B"},
  course2: {assignment: 0, test: 0, final: 38, total: 38, grade: "F"},
course3: {grade: "A"},},
{name: "shugri cabdirashid nur",
    id: 174,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 20,total: 50,grade: "C-"},
  course2: {assignment: 30, test: 6, final: 36, total: 72, grade: "B"},
course3: {grade: "A"},},
{name: "siyado cabdi dhimbil",
    id: 176,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 30, test: 12, final: 36, total: 78, grade: "B+"},
course3: {grade: "A"},},
{name: "sucdi cabdi diriye",
    id: 178,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 60,bonus: 20,total: 110,grade: "A+"},
  course2: {assignment: 0, test: 14, final: 40, total: 54, grade: "C-"},
course3: {grade: "A"},},
{name: "sumayo ahmed abdulahi ",
    id: 179,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 30, test: 4, final: 38, total: 72, grade: "B"},
course3: {grade: "A"},},
{name: "sundus mahamed osman",
    id: 180,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 65,bonus: 20,total: 115,grade: "A+"},
  course2: {assignment: 30, test: 26, final: 40, total: 96, grade: "A+"},
course3: {grade: "A"},},
{name: "ubax shafi muhumed",
    id: 183,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 0,bonus: 20,total: 50,grade: "C-"},
  course2: {assignment: 0, test: 10, final: 38, total: 48, grade: "D"},
course3: {grade: "A"},},
{name: "wali cabdi nur",
    id: 184,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final:60,bonus: 20,total: 110,grade: "A+"},
  course2: {assignment: 30, test: 6, final: 38, total: 74, grade: "B"},
course3: {grade: "A"},},
{name: "xared cabdulahi cabdi",
    id: 73,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 70,bonus: 20,total: 120,grade: "A+"},
  course2: {assignment: 30, test: 26, final: 38, total: 94, grade: "A"},
course3: {grade: "A"},},

{name: "mahamed gure jele",
    id: 118,
    college: "health", 
    department: "clinical nurse",
    course1:{assignment: 30,final: 10,bonus: 20,total: 60,grade: "C"},
  course2: {assignment: 30, test: 8, final: 40, total: 78, grade: "B+"},
course3: {grade: "A"},},

];
// form validation
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
const found = students.find(s =>  s.id === lambarkaardayga)

    if(found){
        // show result
        //   warbixinta ardayga 1aad
        info.innerHTML =`
         <h3><span class="bb">Student Result</span></h3>
           <hr>
        <span class="bb">Name: ${found.name}</span><br>
        <span class="bb">ID: ${found.id}</span><br>
        <span class="bb">college: ${found.college}</span><br>
        <span class="bb">departmen: ${found.department}</span><br>
        <span class="bb">year: ${found.year}</span><br>
       
            <hr>
        `
        // natiijada maadada 1aad
        course1.innerHTML = `
          
        <span class="bb">Course Name:</span> <br>
       <span class="bb">Advanced Nursing Care </span><br>
           <hr> 
            
            <li class="xariq">Assignment:  ${found.course1.assignment}<br></li>
            <li class="xariq">final: ${found.course1.final}<br></li>
            <li class="xariq">bonus: ${found.course1.bonus}<br></li>
            <li class="xariq">Total: ${found.course1.total}<br></li>
            <li class="xariq"><span class="bb">Grade: ${found.course1.grade}</li>
            <br>
  
        `;
        // natiijadada maadada 2aad
        course2.innerHTML = `
         <span class="bb">Course Name:</span><br>
         <span class="bb">Nursing Health Assessement</span><br>
         
            <hr>
          
            <li class="xariq">Assignment: ${found.course2.assignment}<br></li>
            <li class="xariq">test: ${found.course2.test}<br></li>
            <li class="xariq">Final: ${found.course2.final}<br></li>
            <li class="xariq">Total: ${found.course2.total}<br></li>
            <li class="xariq"><span class="bb">Grade: ${found.course2.grade}</li>
        `;
        course3.innerHTML = `
         <span class="bb">Course Name:</span><br>
         <span class="bb">community health nursing</span><br>
         
            <hr>
            
            <li class="xariq"><span class="bb">Grade: ${found.course3.grade}</li>
             
        `;
     
       
        
        course1.style.display = "block"
        info.style.display = "block"
        course2.style.display = "block"
        course3.style.display = "block"
        resultWrapper.style.visibility = "visible"
        studentname.value = "";
        studentID.value = "";
         
    } else {
        info.innerHTML = `<p style="color:white;">natiijo lama helin fadlan hubi ID gaada inuu saxanyahay`;
         course1.style.display = "none";
         course2.style.display = "none";
         course3.style.display = "none";
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
