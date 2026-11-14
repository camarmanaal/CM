
"use strict";

// =====================================
// HTML ELEMENTS
// =====================================

const formcontrol = document.getElementById("form-control");
const seeresult = document.getElementById("see-result");
const bw = document.getElementById("bw-btn");

const studentname = document.getElementById("name");
const studentID = document.getElementById("ID");

const btn = document.getElementById("btn");
const course1 = document.getElementById("course1");
const course2 = document.getElementById("course2");
const info = document.getElementById("info");
const resultWrapper = document.getElementById("result-wrapper");

// =====================================
// DARK / LIGHT MODE
// =====================================

bw.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("black");
});

// =====================================
// STUDENT DATABASE
// =====================================

const college = "health";
const department = "clinical nurse";

const students = [

  // SECTION A

  {name:"abdifatah muhumed mukhtar",id:1001,year:2017,course1:{assignment:30,final:0,total:30,grade:"F"},course2:{assignment:0,final:0,total:0,grade:"F"}},
  {name:"abshiro barre ismacil",id:1002,course1:{assignment:30,final:0,total:30,grade:"F"},course2:{assignment:0,final:0,total:8,grade:"F"}},
  {name:"ahmed shekh muhumed",id:29,course1:{assignment:30,final:0,total:40,grade:"D"},course2:{assignment:0,final:38,total:48,grade:"D"}},
  {name:"ayaan muhumed sahal",id:46,course1:{assignment:30,final:0,total:30,grade:"F"},course2:{assignment:0,final:38,total:50,grade:"C-"}},
  {name:"cabdi dhah xasan",id:5,course1:{assignment:30,final:26,total:76,grade:"B+"},course2:{assignment:30,final:40,total:80,grade:"A-"}},
  {name:"cabdinasir hasan mohamed",id:22,course1:{assignment:30,final:0,total:50,grade:"C-"},course2:{assignment:30,final:34,total:82,grade:"A-"}},
  {name:"caisha ismacil cali",id:41,course1:{assignment:30,final:0,total:40,grade:"D"},course2:{assignment:30,final:38,total:80,grade:"A-"}},
  {name:"casho maxamuud dubad",id:42,course1:{assignment:30,final:65,total:95,grade:"A+"},course2:{assignment:30,final:40,total:80,grade:"A-"}},
  {name:"deqo abdirisak omer",id:53,course1:{assignment:30,final:10,total:60,grade:"C"},course2:{assignment:30,final:36,total:72,grade:"B"}},
  {name:"faiza carab hirbe",id:131,course1:{assignment:30,final:10,total:60,grade:"C"},course2:{assignment:30,final:40,total:84,grade:"A-"}},
  {name:"farxiyo muktar salad",id:59,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:30,final:38,total:82,grade:"A-"}},
  {name:"fawsiya hasan muhumed",id:64,course1:{assignment:30,final:66,total:96,grade:"A"},course2:{assignment:0,final:40,total:0,grade:"D"}},
  {name:"foos cabdile muhumed",id:63,course1:{assignment:30,final:10,total:55,grade:"C-"},course2:{assignment:30,final:36,total:74,grade:"B"}},
  {name:"hamdi abdi nuur",id:70,course1:{assignment:30,final:30,total:80,grade:"A-"},course2:{assignment:30,final:38,total:86,grade:"A-"}},
  {name:"hilal cabdi maxamud",id:76,course1:{assignment:30,final:0,total:30,grade:"F"},course2:{assignment:0,final:40,total:40,grade:"D"}},
  {name:"hindi mohamed barqab",id:77,course1:{assignment:30,final:0,total:50,grade:"C-"},course2:{assignment:30,final:36,total:75,grade:"B+"}},
  {name:"husen abdi dhaqane",id:79,course1:{assignment:30,final:25,total:75,grade:"B+"},course2:{assignment:30,final:32,total:76,grade:"B+"}},
  {name:"ibrahim shed gedi",id:80,course1:{assignment:30,final:37,total:87,grade:"A-"},course2:{assignment:30,final:34,total:80,grade:"A-"}},
  {name:"istahil yarow nur",id:43,course1:{assignment:30,final:0,total:30,grade:"F"},course2:{assignment:0,final:40,total:50,grade:"C-"}},
  {name:"jamal muhumed farah",id:86,course1:{assignment:30,final:13,total:63,grade:"C"},course2:{assignment:30,final:38,total:78,grade:"B+"}},
  {name:"jamcale cabdi xusen",id:87,course1:{assignment:30,final:29,total:79,grade:"B+"},course2:{assignment:30,final:40,total:80,grade:"A-"}},
  {name:"kaaho yuusuf muxumed",id:88,course1:{assignment:30,final:0,total:30,grade:"F"},course2:{assignment:0,final:0,total:0,grade:"F"}},
  {name:"kawsar cabdi cumar",id:99,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:30,final:36,total:82,grade:"A-"}},
  {name:"kawsar cabdulahi jamac",id:98,course1:{assignment:30,final:14,total:44,grade:"D"},course2:{assignment:0,final:26,total:26,grade:"F"}},
  {name:"kawsar mohamed abdirahman",id:100,course1:{assignment:30,final:53,total:103,grade:"A+"},course2:{assignment:30,final:36,total:88,grade:"A-"}},
  {name:"khadar mohamed hamud",id:89,course1:{assignment:30,final:33,total:83,grade:"A-"},course2:{assignment:30,final:34,total:74,grade:"B"}},
  {name:"khadro sheekh cabdinur",id:9,course1:{assignment:30,final:55,total:85,grade:"A-"},course2:{assignment:30,final:34,total:82,grade:"A-"}},
  {name:"khayro cabdulahi derow",id:95,course1:{assignment:30,final:42,total:87,grade:"A-"},course2:{assignment:30,final:38,total:82,grade:"A-"}},
  {name:"mahamed muhumed ali",id:8383,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:30,final:26,total:56,grade:"C"}},
  {name:"mahamud abdulahi hasan",id:8384,course1:{assignment:30,final:16,total:71,grade:"B"},course2:{assignment:30,final:20,total:50,grade:"C"}},
  {name:"mahamed ahmed diriye",id:109,course1:{assignment:30,final:62,total:112,grade:"A+"},course2:{assignment:30,final:40,total:84,grade:"A-"}},
  {name:"mohamed abdi ibrahim",id:105,course1:{assignment:30,final:39,total:89,grade:"A-"},course2:{assignment:30,final:38,total:90,grade:"A"}},
  {name:"najmo siciid cali",id:128,course1:{assignment:30,final:62,total:112,grade:"A+"},course2:{assignment:30,final:4,total:44,grade:"D"}},
  {name:"nasri ahmed aden",id:141,course1:{assignment:30,final:0,total:45,grade:"D"},course2:{assignment:30,final:10,total:46,grade:"D"}},
  {name:"nasri rashid muhumed",id:132,course1:{assignment:30,final:13,total:58,grade:"C-"},course2:{assignment:30,final:36,total:76,grade:"B+"}},
  {name:"nastexo cali nur",id:140,course1:{assignment:30,final:26,total:76,grade:"B+"},course2:{assignment:30,final:38,total:86,grade:"A-"}},
  {name:"nimco cabdirahman hasan",id:145,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:30,final:40,total:86,grade:"A-"}},
  {name:"Nur farah yusuf",id:151,course1:{assignment:30,final:52,total:102,grade:"A+"},course2:{assignment:30,final:28,total:78,grade:"B+"}},
  {name:"ramlo raheye aman",id:156,course1:{assignment:30,final:0,total:30,grade:"F"},course2:{assignment:0,final:38,total:46,grade:"D"}},
  {name:"ridwan cabdi muse",id:158,course1:{assignment:30,final:11,total:61,grade:"C"},course2:{assignment:30,final:40,total:92,grade:"A"}},
  {name:"saytuun xasan maxamud",id:166,course1:{assignment:30,final:55,total:100,grade:"A+"},course2:{assignment:30,final:38,total:72,grade:"B"}},
  {name:"siyad jama ali",id:173,course1:{assignment:30,final:58,total:108,grade:"A+"},course2:{assignment:30,final:40,total:88,grade:"A-"}},
  {name:"wali xamdi ducale",id:185,course1:{assignment:30,final:60,total:110,grade:"A+"},course2:{assignment:30,final:38,total:78,grade:"B+"}},

  // SECTION B

  {name:"abdi mahamed dek",id:8385,course1:{assignment:0,final:0,total:20,grade:"F"},course2:{assignment:0,final:0,total:0,grade:"F"}},
  {name:"abdi shugri mahamed ",id:8386,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:0,final:38,total:60,grade:"C"}},
  {name:"cabdiwahab abdulahi farah",id:20,course1:{assignment:30,final:45,total:75,grade:"B+"},course2:{assignment:0,final:38,total:54,grade:"C-"}},
  {name:"ahmed abdi kahin",id:28,course1:{assignment:30,final:60,total:90,grade:"A+"},course2:{assignment:30,final:40,total:78,grade:"B+"}},
  {name:"amal cabdulahi omer",id:30,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:30,final:40,total:86,grade:"A-"}},
  {name:"amal ibrahim husen",id:33,course1:{assignment:30,final:40,total:90,grade:"A"},course2:{assignment:30,final:38,total:88,grade:"A-"}},
  {name:"amin mahamad ismail",id:34,course1:{assignment:30,final:60,total:90,grade:"A"},course2:{assignment:0,final:40,total:40,grade:"D"}},
  {name:"canab ahmed ali",id:38,course1:{assignment:30,final:15,total:65,grade:"C+"},course2:{assignment:30,final:40,total:72,grade:"B"}},
  {name:"Fartun abdiqadir hasan",id:60,course1:{assignment:30,final:65,total:115,grade:"A+"},course2:{assignment:30,final:34,total:74,grade:"B"}},
  {name:" ikran abdifatah ali",id:82,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:30,final:40,total:88,grade:"A-"}},
  {name:"khadar abdi xalane ",id:8388,course1:{assignment:30,final:16,total:46,grade:"D"},course2:{assignment:0,final:38,total:38,grade:"F"}},
  {name:"mahamad mahamud galow",id:900,course1:{assignment:30,final:55,total:85,grade:"A-"},course2:{assignment:30,final:40,total:86,grade:"A-"}},
  {name:"mahamd nur maydal",id:111,course1:{assignment:30,final:40,total:90,grade:"A"},course2:{assignment:30,final:40,total:90,grade:"A"}},
  {name:"mahamad dek nur",id:800,course1:{assignment:30,final:62,total:92,grade:"A"},course2:{assignment:30,final:40,total:84,grade:"A-"}},
  {name:"miski kahin abdirashid",id:115,course1:{assignment:30,final:36,total:86,grade:"A-"},course2:{assignment:30,final:40,total:86,grade:"A-"}},
  {name:"maxamad cabdi nasir ",id:104,course1:{assignment:30,final:50,total:100,grade:"A+"},course2:{assignment:30,final:36,total:80,grade:"A-"}},
  {name:"mohamed abdi omer",id:117,course1:{assignment:30,final:16,total:66,grade:"C"},course2:{assignment:30,final:12,total:42,grade:"D"}},
  {name:"nadifo moalim kayd",id:126,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:0,final:38,total:60,grade:"C"}},
  {name:"najmo mahamud dubad",id:129,course1:{assignment:30,final:70,total:100,grade:"A+"},course2:{assignment:30,final:38,total:86,grade:"A-"}},
  {name:"nastexo cabdi duwane",id:137,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:30,final:38,total:74,grade:"B"}},
  {name:"nastexo cabdiraxman cali",id:999,course1:{assignment:30,final:0,total:50,grade:"C-"},course2:{assignment:0,final:0,total:0,grade:"F"}},
  {name:"nastexo yusuf cumar",id:143,course1:{assignment:30,final:28,total:78,grade:"B+"},course2:{assignment:0,final:34,total:44,grade:"D"}},
  {name:"nimco cumar kahin",id:146,course1:{assignment:30,final:0,total:30,grade:"F"},course2:{assignment:0,final:36,total:36,grade:"F"}},
  {name:"nimco mahamud wayrax",id:147,course1:{assignment:30,final:0,total:30,grade:"F"},course2:{assignment:0,final:34,total:50,grade:"C-"}},
  {name:"nur farah abdi",id:148,course1:{assignment:30,final:53,total:103,grade:"A+"},course2:{assignment:30,final:36,total:76,grade:"B+"}},
  {name:"nuurto mahamud abdulahi",id:152,course1:{assignment:30,final:41,total:91,grade:"A"},course2:{assignment:30,final:40,total:92,grade:"A"}},
  {name:"rage ahmed abdiqadir",id:154,course1:{assignment:30,final:40,total:90,grade:"A"},course2:{assignment:30,final:40,total:76,grade:"B+"}},
  {name:"raqib cumar kahin",id:1522,course1:{assignment:30,final:25,total:55,grade:"C-"},course2:{assignment:30,final:40,total:70,grade:"B"}},
  {name:"rodo mowlid muse",id:160,course1:{assignment:30,final:60,total:110,grade:"A+"},course2:{assignment:30,final:40,total:70,grade:"B"}},
  {name:"rodo husen hasan",id:159,course1:{assignment:30,final:33,total:83,grade:"A-"},course2:{assignment:0,final:34,total:56,grade:"C-"}},
  {name:"sahro mahad sahal",id:163,course1:{assignment:30,final:20,total:70,grade:"B"},course2:{assignment:30,final:40,total:74,grade:"B"}},
  {name:"saredo mahamad omer",id:999,course1:{assignment:30,final:0,total:50,grade:"C-"},course2:{assignment:30,final:0,total:30,grade:"F"}},
  {name:"shakir ahmed hared",id:176,course1:{assignment:30,final:40,total:70,grade:"B"},course2:{assignment:0,final:38,total:38,grade:"F"}},
  {name:"shugri cabdirashid nur",id:174,course1:{assignment:30,final:0,total:50,grade:"C-"},course2:{assignment:30,final:36,total:72,grade:"B"}},
  {name:"siyado cabdi dhimbil",id:176,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:30,final:36,total:78,grade:"B+"}},
  {name:"sucdi cabdi diriye",id:178,course1:{assignment:30,final:60,total:110,grade:"A+"},course2:{assignment:0,final:40,total:54,grade:"C-"}},
  {name:"sumayo ahmed abdulahi ",id:179,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:30,final:38,total:72,grade:"B"}},
  {name:"sundus mahamed osman",id:180,course1:{assignment:30,final:65,total:115,grade:"A+"},course2:{assignment:30,final:40,total:96,grade:"A+"}},
  {name:"ubax shafi muhumed",id:183,course1:{assignment:30,final:0,total:50,grade:"C-"},course2:{assignment:0,final:38,total:48,grade:"D"}},
  {name:"wali cabdi nur",id:184,course1:{assignment:30,final:60,total:110,grade:"A+"},course2:{assignment:30,final:38,total:74,grade:"B"}},
  {name:"xared cabdulahi cabdi",id:73,course1:{assignment:30,final:70,total:120,grade:"A+"},course2:{assignment:30,final:38,total:94,grade:"A"}},
  {name:"mahamed gure jele",id:118,course1:{assignment:30,final:10,total:60,grade:"C"},course2:{assignment:30,final:40,total:78,grade:"B+"}}

];

// Shared student information
students.forEach(student => {
    student.college = college;
    student.department = department;
});

// =====================================
// STUDENT RESULT DISPLAY
// =====================================

btn.addEventListener("click", (event) => {
    event.preventDefault();

    const magacaardayga = studentname.value.trim().toLowerCase();
    const idText = studentID.value.trim();
    const lambarkaardayga = Number(idText);

    studentname.classList.remove("casaan");
    studentID.classList.remove("casaan");

    if (
        magacaardayga === "" ||
        idText === "" ||
        !Number.isInteger(lambarkaardayga)
    ) {
        if (magacaardayga === "") {
            studentname.classList.add("casaan");
        }

        if (
            idText === "" ||
            !Number.isInteger(lambarkaardayga)
        ) {
            studentID.classList.add("casaan");
        }

        resultWrapper.style.display = "none";
        return;
    }

    resultWrapper.style.display = "block";

    // Find student by ID
    const found = students.find(
        student => student.id === lambarkaardayga
    );

    if (found) {

        // STUDENT INFORMATION
        info.innerHTML = `
            <h3>
                <span class="bb">Student Result</span>
            </h3>
            <hr>

            <span class="bb">Name: ${found.name}</span><br>
            <span class="bb">ID: ${found.id}</span><br>
            <span class="bb">College: ${found.college}</span><br>
            <span class="bb">Department: ${found.department}</span><br>
            <span class="bb">Year: ${found.year ?? "N/A"}</span><br>

            <hr>
        `;

        // COURSE 1: ADVANCED NURSING CARE
        course1.innerHTML = `
            <span class="bb">Course Name:</span><br>
            <span class="bb">community health</span><br>
            <hr>

            <li class="xariq">
                Assignment: ${found.course1.assignment}
            </li>

            <li class="xariq">
                Final: ${found.course1.final}
            </li>

            <li class="xariq">
                Total: ${found.course1.total}
            </li>

            <li class="xariq">
                <span class="bb">
                    Grade: ${found.course1.grade}
                </span>
            </li>
        `;

        // COURSE 2: CHILD HEALTH
        course2.innerHTML = `
            <span class="bb">Course Name:</span><br>
            <span class="bb">child health</span><br>
            <hr>

            <li class="xariq">
                Assignment: ${found.course2.assignment}
            </li>

            <li class="xariq">
                Final: ${found.course2.final}
            </li>

            <li class="xariq">
                Total: ${found.course2.total}
            </li>

            <li class="xariq">
                <span class="bb">
                    Grade: ${found.course2.grade}
                </span>
            </li>
        `;

        // SHOW RESULTS
        info.style.display = "block";
        course1.style.display = "block";
        course2.style.display = "block";

        resultWrapper.style.visibility = "hidden";

        studentname.value = "";
        studentID.value = "";

    } else {

        // STUDENT NOT FOUND
        info.innerHTML = `
            <p style="color:white;">
                Natiijo lama helin.
                Fadlan hubi ID-gaaga inuu saxan yahay.
            </p>
        `;

        info.style.display = "block";
        course1.style.display = "none";
        course2.style.display = "none";

        resultWrapper.style.visibility = "visible";

        studentname.value = "";
        studentID.value = "";
    }
});

// =====================================
// SIDEBAR CONTROLS
// =====================================

const button2 = document.getElementById("showsidebar");
const showsidebar = document.getElementById("sidebar");

button2.addEventListener("click", (event) => {
    event.preventDefault();
    showsidebar.style.display = "block";
});

function hide() {
    showsidebar.style.display = "none";
}

// =====================================
// AUTOMATIC TEXT SLIDESHOW
// =====================================

const qoral = document.querySelectorAll("#sawiro h2");
let index = 0;

qoral.forEach((item, i) => {
    item.style.display = i === index ? "block" : "none";
});

function shownextimage() {
    if (qoral.length === 0) return;

    qoral[index].style.display = "none";

    index++;

    if (index >= qoral.length) {
        index = 0;
    }

    qoral[index].style.display = "block";
}

if (qoral.length > 0) {
    setInterval(shownextimage, 5000);
}
