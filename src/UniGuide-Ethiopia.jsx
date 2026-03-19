import { useState, useMemo, useCallback, useEffect } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const universities = [
  { id:1, name:"Addis Ababa University", shortName:"AAU", city:"Addis Ababa", region:"Addis Ababa", established:1950, logo:"🎓", description:"The oldest and largest university in Ethiopia, renowned for research and academic excellence.", website:"www.aau.edu.et",
    departments:[
      {id:101,name:"Computer Science",faculty:"Natural & Computational Sciences",duration:4,degree:"BSc",seats:120,description:"Programming, algorithms, AI, and software engineering.",careers:["Software Engineer","Data Scientist","System Analyst"]},
      {id:102,name:"Medicine",faculty:"Medicine",duration:6,degree:"MD",seats:80,description:"Clinical medicine, anatomy, pharmacology, and surgery.",careers:["Doctor","Surgeon","Medical Researcher"]},
      {id:103,name:"Civil Engineering",faculty:"Technology",duration:5,degree:"BSc",seats:100,description:"Structural design, construction management, and urban planning.",careers:["Civil Engineer","Structural Engineer","Urban Planner"]},
      {id:104,name:"Law",faculty:"Law",duration:4,degree:"LLB",seats:90,description:"Constitutional, criminal, civil, and international law.",careers:["Lawyer","Judge","Legal Advisor"]},
      {id:105,name:"Economics",faculty:"Business & Economics",duration:4,degree:"BA",seats:110,description:"Macroeconomics, development economics, and econometrics.",careers:["Economist","Policy Analyst","Financial Consultant"]},
      {id:106,name:"Electrical Engineering",faculty:"Technology",duration:5,degree:"BSc",seats:90,description:"Power systems, electronics, and telecommunications.",careers:["Electrical Engineer","Electronics Engineer","Telecom Engineer"]},
      {id:107,name:"Chemistry",faculty:"Natural Sciences",duration:4,degree:"BSc",seats:80,description:"Organic, inorganic, physical, and analytical chemistry.",careers:["Chemist","Lab Analyst","Research Scientist"]},
      {id:108,name:"Philosophy",faculty:"Humanities",duration:4,degree:"BA",seats:60,description:"Ethics, logic, metaphysics, and history of ideas.",careers:["Academic","Policy Advisor","Writer"]},
    ]},
  { id:2, name:"Bahir Dar University", shortName:"BDU", city:"Bahir Dar", region:"Amhara", established:2000, logo:"🏛️", description:"A leading university in northern Ethiopia focusing on technology and applied sciences.", website:"www.bdu.edu.et",
    departments:[
      {id:201,name:"Water Resources Engineering",faculty:"Technology",duration:5,degree:"BSc",seats:70,description:"Hydrology, irrigation systems, and water supply management.",careers:["Hydraulic Engineer","Water Resources Specialist","Irrigation Engineer"]},
      {id:202,name:"Textile Engineering",faculty:"Technology",duration:4,degree:"BSc",seats:60,description:"Fiber science, textile manufacturing, and quality control.",careers:["Textile Engineer","Quality Controller","Production Manager"]},
      {id:203,name:"Accounting & Finance",faculty:"Business & Economics",duration:4,degree:"BA",seats:120,description:"Financial accounting, auditing, and corporate finance.",careers:["Accountant","Financial Analyst","Auditor"]},
      {id:204,name:"Biology",faculty:"Natural Sciences",duration:4,degree:"BSc",seats:80,description:"Cell biology, ecology, genetics, and microbiology.",careers:["Biologist","Lab Technician","Environmental Scientist"]},
      {id:205,name:"Computer Science",faculty:"Computing",duration:4,degree:"BSc",seats:100,description:"Software development, networking, and database systems.",careers:["Software Developer","Network Engineer","Database Admin"]},
      {id:206,name:"Industrial Engineering",faculty:"Technology",duration:5,degree:"BSc",seats:65,description:"Process optimization, manufacturing systems, and supply chain.",careers:["Industrial Engineer","Process Manager","Quality Engineer"]},
    ]},
  { id:3, name:"Hawassa University", shortName:"HWU", city:"Hawassa", region:"Sidama", established:2000, logo:"🌿", description:"Known for agriculture, medicine, and natural sciences in southern Ethiopia.", website:"www.hu.edu.et",
    departments:[
      {id:301,name:"Agriculture",faculty:"Agriculture",duration:4,degree:"BSc",seats:150,description:"Crop science, soil science, agronomy, and agricultural economics.",careers:["Agronomist","Farm Manager","Agricultural Researcher"]},
      {id:302,name:"Veterinary Medicine",faculty:"Veterinary Medicine",duration:5,degree:"DVM",seats:60,description:"Animal health, surgery, epidemiology, and livestock production.",careers:["Veterinarian","Animal Health Officer","Livestock Researcher"]},
      {id:303,name:"Nursing",faculty:"Medicine & Health Sciences",duration:4,degree:"BSc",seats:100,description:"Patient care, clinical nursing, community health, and midwifery.",careers:["Nurse","Community Health Worker","Midwife"]},
      {id:304,name:"Environmental Science",faculty:"Natural Sciences",duration:4,degree:"BSc",seats:70,description:"Conservation, pollution control, GIS, and climate change.",careers:["Environmental Scientist","Conservation Officer","GIS Analyst"]},
      {id:305,name:"Food Science & Technology",faculty:"Agriculture",duration:4,degree:"BSc",seats:80,description:"Food processing, quality assurance, and nutrition.",careers:["Food Technologist","Quality Assurance Manager","Nutritionist"]},
      {id:306,name:"Medicine",faculty:"Medicine & Health Sciences",duration:6,degree:"MD",seats:60,description:"General medicine, diagnostics, clinical practice, and research.",careers:["Doctor","Clinical Researcher","Specialist"]},
    ]},
  { id:4, name:"Mekelle University", shortName:"MU", city:"Mekelle", region:"Tigray", established:1993, logo:"⛰️", description:"Comprehensive university in northern Ethiopia with strong engineering and health programs.", website:"www.mu.edu.et",
    departments:[
      {id:401,name:"Mining Engineering",faculty:"Technology",duration:5,degree:"BSc",seats:60,description:"Mineral extraction, mine safety, and geological surveying.",careers:["Mining Engineer","Geologist","Safety Officer"]},
      {id:402,name:"Pharmacy",faculty:"Health Sciences",duration:5,degree:"BPharm",seats:70,description:"Pharmacology, drug formulation, and clinical pharmacy.",careers:["Pharmacist","Drug Researcher","Clinical Pharmacist"]},
      {id:403,name:"Architecture",faculty:"Technology",duration:5,degree:"BArch",seats:50,description:"Architectural design, urban design, and building technology.",careers:["Architect","Urban Designer","Interior Designer"]},
      {id:404,name:"Management",faculty:"Business & Economics",duration:4,degree:"BA",seats:130,description:"Business management, organizational behavior, and strategy.",careers:["Manager","Business Analyst","Entrepreneur"]},
      {id:405,name:"Geology",faculty:"Natural Sciences",duration:4,degree:"BSc",seats:55,description:"Earth sciences, petrology, mineralogy, and geophysics.",careers:["Geologist","Petroleum Engineer","Environmental Geologist"]},
    ]},
  { id:5, name:"Jimma University", shortName:"JU", city:"Jimma", region:"Oromia", established:1999, logo:"🏥", description:"Renowned for medical sciences and public health in western Ethiopia.", website:"www.ju.edu.et",
    departments:[
      {id:501,name:"Public Health",faculty:"Public Health",duration:4,degree:"BSc",seats:90,description:"Epidemiology, health policy, biostatistics, and community health.",careers:["Public Health Officer","Epidemiologist","Health Educator"]},
      {id:502,name:"Medical Laboratory Science",faculty:"Health Sciences",duration:4,degree:"BSc",seats:80,description:"Clinical lab diagnostics, hematology, and microbiology.",careers:["Lab Scientist","Pathologist","Medical Researcher"]},
      {id:503,name:"Information Technology",faculty:"Computing",duration:4,degree:"BSc",seats:110,description:"IT infrastructure, cybersecurity, and information systems.",careers:["IT Specialist","Cybersecurity Analyst","System Admin"]},
      {id:504,name:"Social Work",faculty:"Social Sciences",duration:4,degree:"BA",seats:100,description:"Community development, counseling, and social welfare.",careers:["Social Worker","Community Developer","Counselor"]},
      {id:505,name:"Anesthesia",faculty:"Medicine & Health Sciences",duration:4,degree:"BSc",seats:50,description:"Anesthetic techniques, pain management, and critical care.",careers:["Anesthetist","Pain Specialist","ICU Nurse"]},
    ]},
  { id:6, name:"Dire Dawa University", shortName:"DDU", city:"Dire Dawa", region:"Dire Dawa", established:2006, logo:"🏙️", description:"A growing university in eastern Ethiopia offering engineering, business, and health sciences.", website:"www.ddu.edu.et",
    departments:[
      {id:601,name:"Mechanical Engineering",faculty:"Technology",duration:5,degree:"BSc",seats:70,description:"Machine design, thermodynamics, manufacturing, and mechanics.",careers:["Mechanical Engineer","Manufacturing Engineer","Maintenance Engineer"]},
      {id:602,name:"Marketing Management",faculty:"Business & Economics",duration:4,degree:"BA",seats:100,description:"Consumer behavior, branding, digital marketing, and sales strategy.",careers:["Marketing Manager","Brand Strategist","Sales Manager"]},
      {id:603,name:"Midwifery",faculty:"Medicine & Health Sciences",duration:4,degree:"BSc",seats:80,description:"Maternal care, childbirth, newborn health, and reproductive health.",careers:["Midwife","Maternal Health Specialist","Community Health Worker"]},
      {id:604,name:"Computer Science",faculty:"Computing",duration:4,degree:"BSc",seats:90,description:"Software systems, algorithms, database design, and networking.",careers:["Software Developer","System Admin","Network Engineer"]},
    ]},
  { id:7, name:"Arba Minch University", shortName:"AMU", city:"Arba Minch", region:"South Ethiopia", established:1986, logo:"🌊", description:"Nestled near lakes, known for fisheries, water technology, and health sciences.", website:"www.amu.edu.et",
    departments:[
      {id:701,name:"Fisheries & Aquatic Sciences",faculty:"Natural Sciences",duration:4,degree:"BSc",seats:60,description:"Fish biology, aquaculture, lake ecology, and fisheries management.",careers:["Fisheries Officer","Aquaculture Specialist","Marine Biologist"]},
      {id:702,name:"Software Engineering",faculty:"Computing",duration:4,degree:"BSc",seats:90,description:"Software lifecycle, agile methods, mobile development, and cloud computing.",careers:["Software Engineer","Mobile Developer","Cloud Architect"]},
      {id:703,name:"Hydraulic & Water Resources",faculty:"Technology",duration:5,degree:"BSc",seats:65,description:"Dam design, flood management, groundwater, and irrigation engineering.",careers:["Hydraulic Engineer","Dam Engineer","Groundwater Specialist"]},
      {id:704,name:"Tourism Management",faculty:"Business & Economics",duration:4,degree:"BA",seats:80,description:"Hospitality, ecotourism, heritage tourism, and event management.",careers:["Tourism Officer","Hotel Manager","Event Planner"]},
    ]},
  { id:8, name:"Haramaya University", shortName:"HU", city:"Haramaya", region:"Oromia", established:1954, logo:"🌾", description:"One of the oldest agricultural universities in Africa, with strong natural science programs.", website:"www.haramaya.edu.et",
    departments:[
      {id:801,name:"Plant Sciences",faculty:"Agriculture",duration:4,degree:"BSc",seats:120,description:"Crop production, plant pathology, breeding, and biotechnology.",careers:["Plant Scientist","Agronomist","Crop Researcher"]},
      {id:802,name:"Animal Sciences",faculty:"Agriculture",duration:4,degree:"BSc",seats:90,description:"Livestock nutrition, genetics, production, and management.",careers:["Animal Scientist","Livestock Officer","Farm Manager"]},
      {id:803,name:"Rural Development",faculty:"Agriculture",duration:4,degree:"BA",seats:100,description:"Community development, agricultural extension, and rural livelihoods.",careers:["Development Officer","Extension Agent","NGO Worker"]},
      {id:804,name:"Pharmacy",faculty:"Health Sciences",duration:5,degree:"BPharm",seats:60,description:"Drug sciences, clinical pharmacy, and pharmaceutical management.",careers:["Pharmacist","Drug Researcher","Health Inspector"]},
      {id:805,name:"Natural Resources Management",faculty:"Natural Sciences",duration:4,degree:"BSc",seats:75,description:"Land use, forest management, biodiversity, and conservation.",careers:["Natural Resources Officer","Conservation Specialist","Forester"]},
    ]},
];

const allRegions = [...new Set(universities.map(u => u.region))].sort();
const allFaculties = [...new Set(universities.flatMap(u => u.departments.map(d => d.faculty)))].sort();

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  en: { appName:"UniGuide", tagline:"Ethiopia", navHome:"Home", navUniversities:"Universities", navSearch:"Find Dept",
    heroTag:"Your University Companion", heroTitle:"Find the Right\nDepartment in Ethiopia",
    heroDesc:"Browse departments at every Ethiopian university — explore faculties, career paths, and more.",
    heroCTA1:"Search Departments", heroCTA2:"Browse Universities",
    statUniversities:"Universities", statDepartments:"Departments", statRegions:"Regions",
    featuredTitle:"Featured Universities", uniPageTitle:"All Universities", uniPageDesc:(n)=>`${n} universities across Ethiopia`,
    searchUniPlaceholder:"Search university or city…", allRegions:"All Regions", filterByRegion:"Filter by region",
    back:"← Back", availableDepts:"Departments", deptPageTitle:"Find Your Department",
    deptPageDesc:"Search all universities by department, faculty, or region",
    searchDeptPlaceholder:"Department, faculty, or university…", allFaculties:"All Faculties",
    resultsFound:(n)=>`${n} result${n!==1?"s":""} found`,
    noResults:"Search by department name, faculty, or region to get started.",
    careerPaths:"Career Paths", viewDepts:"View Departments", established:"Est.", publicLabel:"Public",
    darkMode:"🌙", lightMode:"☀️", departments:"Depts", years:"yrs", noUnisFound:"No universities match your filters.", menu:"Menu",
  },
  am: { appName:"UniGuide", tagline:"ኢትዮጵያ", navHome:"መነሻ", navUniversities:"ዩኒቨርሲቲዎች", navSearch:"ክፍል ፈልግ",
    heroTag:"የዩኒቨርሲቲ ምርጫ ረዳትህ", heroTitle:"ትክክለኛ ክፍልህን\nበኢትዮጵያ ፈልግ",
    heroDesc:"ሁሉም ኢትዮጵያዊ ዩኒቨርሲቲዎች ያሉ ክፍሎችን ቃኝ — ፋካልቲዎችን፣ የሙያ መንገዶችን እና ሌሎችንም ፈልግ።",
    heroCTA1:"ክፍሎችን ፈልግ", heroCTA2:"ዩኒቨርሲቲዎችን ቃኝ",
    statUniversities:"ዩኒቨርሲቲዎች", statDepartments:"ክፍሎች", statRegions:"ክልሎች",
    featuredTitle:"ተፈላጊ ዩኒቨርሲቲዎች", uniPageTitle:"ሁሉም ዩኒቨርሲቲዎች", uniPageDesc:(n)=>`${n} ዩኒቨርሲቲዎች`,
    searchUniPlaceholder:"ዩኒቨርሲቲ ወይም ከተማ ፈልግ…", allRegions:"ሁሉም ክልሎች", filterByRegion:"በክልል አጣራ",
    back:"← ተመለስ", availableDepts:"ክፍሎች", deptPageTitle:"ክፍልህን ፈልግ",
    deptPageDesc:"በክፍል ስም ወይም ፋካልቲ ፈልግ",
    searchDeptPlaceholder:"የክፍል ስም፣ ፋካልቲ ወይም ዩኒቨርሲቲ…", allFaculties:"ሁሉም ፋካልቲዎች",
    resultsFound:(n)=>`${n} ውጤት ተገኝቷል`,
    noResults:"የክፍል ስም፣ ፋካልቲ ወይም ዩኒቨርሲቲ ጽፈው ፈልጉ።",
    careerPaths:"የሙያ መንገዶች", viewDepts:"ክፍሎችን ይመልከቱ", established:"የተቋቋመ", publicLabel:"መንግሥታዊ",
    darkMode:"🌙", lightMode:"☀️", departments:"ክፍሎች", years:"ዓ", noUnisFound:"ምንም ዩኒቨርሲቲ አልተገኘም።", menu:"ምናሌ",
  },
  or: { appName:"UniGuide", tagline:"Itoophiyaa", navHome:"Mana", navUniversities:"Yunivarsitiiwwan", navSearch:"Kutaa",
    heroTag:"Gargaaraa Filannoo Yunivarsitiikee", heroTitle:"Kutaa Sirrii\nItoophiyaatti Barbaadi",
    heroDesc:"Kutaalee yunivarsitiiwwan Itoophiyaa hunda keessa ilaaali — faakaltii, karaalee hojii fi kkf barbaadi.",
    heroCTA1:"Kutaalee Barbaadi", heroCTA2:"Yunivarsitiiwwan Ilaaali",
    statUniversities:"Yunivarsitiiwwan", statDepartments:"Kutaalee", statRegions:"Naannoolee",
    featuredTitle:"Yunivarsitiiwwan Beekamoo", uniPageTitle:"Yunivarsitiiwwan Hunda", uniPageDesc:(n)=>`Yunivarsitiiwwan ${n}`,
    searchUniPlaceholder:"Yunivarsitiiwwan ykn magaalaa…", allRegions:"Naannoolee Hunda", filterByRegion:"Naannoon calalii",
    back:"← Deebi'i", availableDepts:"Kutaalee", deptPageTitle:"Kutaa Kee Barbaadi",
    deptPageDesc:"Maqaa kutaa ykn faakaltii barbaadaa",
    searchDeptPlaceholder:"Maqaa kutaa, faakaltii…", allFaculties:"Faakaltii Hunda",
    resultsFound:(n)=>`Bu'aa ${n} argame`,
    noResults:"Maqaa kutaa, faakaltii ykn naannoo barreessaa barbaadaa.",
    careerPaths:"Karaalee Hojii", viewDepts:"Kutaalee Ilaaali", established:"Hundeeffame", publicLabel:"Mootummaa",
    darkMode:"🌙", lightMode:"☀️", departments:"Kutaalee", years:"wag", noUnisFound:"Yunivarsitiiwwan hin jiru.", menu:"Filannoowwan",
  },
};

// ─── THEME ───────────────────────────────────────────────────────────────────
const lightTh = {
  bg:"#f4f6f3", surface:"#fff", surfaceHover:"#f7faf6", border:"#e2e8df", borderStrong:"#c8d4c3",
  text:"#1a1f18", textMuted:"#5a6657", textSubtle:"#3d4a3a",
  headerBg:"#fff", shadow:"0 2px 8px rgba(26,60,20,0.07)", shadowLg:"0 12px 36px rgba(26,60,20,0.12)",
  inputBg:"#fff", accentBg:"#f0f7ee", accentBorder:"#b8d4b2", accentText:"#1a5c12",
  pillBg:"#eef4ec", pillText:"#3a5436",
  bGreen:["#dcfce7","#166534"], bBlue:["#dbeafe","#1e40af"], bAmber:["#fef9c3","#854d0e"], bPurple:["#f3e8ff","#6b21a8"],
  tagBg:"#f1f5f0", tagText:"#4a5e47",
};
const darkTh = {
  bg:"#0d1410", surface:"#162014", surfaceHover:"#1c2a18", border:"#2a3d26", borderStrong:"#3a5434",
  text:"#e8f0e5", textMuted:"#8aab82", textSubtle:"#b8ceb4",
  headerBg:"#111a0e", shadow:"0 2px 12px rgba(0,0,0,0.4)", shadowLg:"0 16px 48px rgba(0,0,0,0.5)",
  inputBg:"#162014", accentBg:"#0c2010", accentBorder:"#2d5228", accentText:"#6fcf62",
  pillBg:"#1a2e16", pillText:"#8fcf86",
  bGreen:["#14532d","#86efac"], bBlue:["#1e3a5f","#93c5fd"], bAmber:["#451a03","#fcd34d"], bPurple:["#2e1065","#c4b5fd"],
  tagBg:"#1a2e16", tagText:"#8aab82",
};

// ─── useWindowSize hook ───────────────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Badge({ children, color="green", th }) {
  const map = { green:th.bGreen, blue:th.bBlue, amber:th.bAmber, purple:th.bPurple };
  const [bg,fg] = map[color];
  return <span style={{background:bg,color:fg,padding:"3px 9px",borderRadius:20,fontSize:11,fontWeight:700,display:"inline-flex",alignItems:"center",whiteSpace:"nowrap",lineHeight:1.4}}>{children}</span>;
}

function RegionPills({ selected, onSelect, th, t }) {
  return (
    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
      {["All",...allRegions].map(r => {
        const active = selected===r;
        return (
          <button key={r} onClick={()=>onSelect(r)} style={{background:active?"#2d7a22":th.pillBg,color:active?"#fff":th.pillText,border:`1.5px solid ${active?"#2d7a22":th.border}`,borderRadius:24,padding:"6px 14px",fontSize:12,fontWeight:600,cursor:"pointer",transition:"all 0.18s",whiteSpace:"nowrap"}}>
            {r==="All"?t.allRegions:r}
          </button>
        );
      })}
    </div>
  );
}

function DeptRow({ dept, th, t, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{borderBottom:`1px solid ${th.border}`,animationDelay:`${index*20}ms`,animation:"fadeSlideIn 0.3s ease both"}}>
      <div onClick={()=>setOpen(o=>!o)}
        style={{display:"flex",alignItems:"center",gap:8,padding:"13px 16px",cursor:"pointer",background:open?th.accentBg:"transparent",transition:"background 0.15s"}}
        onMouseEnter={e=>{if(!open)e.currentTarget.style.background=th.surfaceHover}}
        onMouseLeave={e=>{if(!open)e.currentTarget.style.background="transparent"}}
      >
        {/* Main info - takes all space */}
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontWeight:700,fontSize:14,color:th.text,lineHeight:1.3}}>{dept.name}</div>
          <div style={{fontSize:11,color:th.textMuted,marginTop:3,display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
            <Badge color="blue" th={th}>{dept.degree}</Badge>
            <span>⏱ {dept.duration} {t.years}</span>
            <span>👥 {dept.seats}</span>
          </div>
        </div>
        {/* Chevron */}
        <span style={{fontSize:14,color:th.textMuted,transform:open?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s",display:"inline-block",flexShrink:0,marginLeft:4}}>▾</span>
      </div>
      {open && (
        <div style={{padding:"0 16px 16px",background:th.accentBg,borderTop:`1px dashed ${th.accentBorder}`,animation:"expandIn 0.2s ease"}}>
          <p style={{margin:"12px 0 10px",fontSize:13,color:th.textSubtle,lineHeight:1.65}}>{dept.description}</p>
          <div style={{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:6}}>
            <span style={{fontSize:12,fontWeight:700,color:th.accentText,whiteSpace:"nowrap"}}>💼 {t.careerPaths}:</span>
            <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
              {dept.careers.map(c=><Badge key={c} color="green" th={th}>{c}</Badge>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FacultyGroup({ faculty, depts, th, t }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{border:`1px solid ${th.border}`,borderRadius:12,overflow:"hidden",boxShadow:th.shadow}}>
      <div onClick={()=>setOpen(o=>!o)}
        style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"11px 16px",background:th.surface,cursor:"pointer",borderBottom:open?`1px solid ${th.border}`:"none",transition:"background 0.15s"}}
        onMouseEnter={e=>e.currentTarget.style.background=th.surfaceHover}
        onMouseLeave={e=>e.currentTarget.style.background=th.surface}
      >
        <div style={{display:"flex",alignItems:"center",gap:8,minWidth:0}}>
          <span style={{flexShrink:0}}>📂</span>
          <span style={{fontWeight:700,fontSize:13,color:th.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{faculty}</span>
          <span style={{background:th.tagBg,color:th.tagText,borderRadius:12,padding:"2px 7px",fontSize:11,fontWeight:600,flexShrink:0}}>{depts.length}</span>
        </div>
        <span style={{fontSize:12,color:th.textMuted,transform:open?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s",display:"inline-block",flexShrink:0,marginLeft:8}}>▾</span>
      </div>
      {open && <div style={{background:th.surface}}>{depts.map((d,i)=><DeptRow key={d.id} dept={d} th={th} t={t} index={i}/>)}</div>}
    </div>
  );
}

function UniCard({ uni, onView, th, t }) {
  return (
    <div style={{background:th.surface,border:`1px solid ${th.border}`,borderRadius:16,padding:"18px",boxShadow:th.shadow,transition:"all 0.2s",display:"flex",flexDirection:"column"}}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=th.shadowLg;e.currentTarget.style.borderColor="#2d7a22"}}
      onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=th.shadow;e.currentTarget.style.borderColor=th.border}}
    >
      <div style={{display:"flex",alignItems:"flex-start",gap:12,marginBottom:10}}>
        <div style={{fontSize:28,flexShrink:0,background:th.accentBg,borderRadius:10,width:46,height:46,display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid ${th.accentBorder}`}}>{uni.logo}</div>
        <div style={{minWidth:0}}>
          <h3 style={{margin:0,fontSize:14,fontWeight:800,color:th.text,lineHeight:1.25}}>{uni.name}</h3>
          <p style={{margin:"3px 0 0",fontSize:12,color:th.textMuted}}>📍 {uni.city}, {uni.region}</p>
        </div>
      </div>
      <p style={{margin:"0 0 12px",fontSize:13,color:th.textSubtle,lineHeight:1.6,flex:1}}>{uni.description}</p>
      <div style={{display:"flex",gap:5,flexWrap:"wrap",marginBottom:14}}>
        <Badge color="green" th={th}>{t.publicLabel}</Badge>
        <Badge color="blue" th={th}>{t.established} {uni.established}</Badge>
        <Badge color="purple" th={th}>{uni.departments.length} {t.departments}</Badge>
      </div>
      <button onClick={()=>onView(uni)} style={{width:"100%",background:"linear-gradient(135deg,#2d7a22,#1f5c18)",color:"#fff",border:"none",borderRadius:10,padding:"11px 0",fontWeight:700,fontSize:13,cursor:"pointer",transition:"opacity 0.15s"}}
        onMouseEnter={e=>e.currentTarget.style.opacity="0.88"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}
      >{t.viewDepts} →</button>
    </div>
  );
}

// ─── PAGES ───────────────────────────────────────────────────────────────────

function HomePage({ onNav, onViewUni, th, t, isMobile }) {
  const total = universities.reduce((a,u)=>a+u.departments.length,0);
  return (
    <div style={{animation:"fadeUp 0.4s ease"}}>
      {/* Hero */}
      <div style={{background:"linear-gradient(135deg,#0f3d08 0%,#1a5c12 50%,#2d7a22 100%)",borderRadius:16,padding:isMobile?"28px 22px":"52px 44px",color:"#fff",marginBottom:24,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-40,right:-40,width:180,height:180,background:"rgba(255,255,255,0.04)",borderRadius:"50%",pointerEvents:"none"}}/>
        <p style={{margin:"0 0 8px",fontSize:10,fontWeight:700,letterSpacing:3,opacity:0.65,textTransform:"uppercase"}}>{t.heroTag}</p>
        <h1 style={{margin:"0 0 12px",fontSize:isMobile?26:36,fontWeight:900,lineHeight:1.2,whiteSpace:"pre-line"}}>{t.heroTitle}</h1>
        <p style={{margin:"0 0 22px",fontSize:isMobile?13:15,opacity:0.82,maxWidth:500,lineHeight:1.7}}>{t.heroDesc}</p>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          <button onClick={()=>onNav("search")} style={{background:"#fff",color:"#1a5c12",border:"none",borderRadius:10,padding:isMobile?"11px 18px":"13px 24px",fontWeight:800,fontSize:isMobile?13:14,cursor:"pointer"}}>🔍 {t.heroCTA1}</button>
          <button onClick={()=>onNav("universities")} style={{background:"rgba(255,255,255,0.13)",color:"#fff",border:"2px solid rgba(255,255,255,0.3)",borderRadius:10,padding:isMobile?"11px 18px":"13px 24px",fontWeight:700,fontSize:isMobile?13:14,cursor:"pointer"}}>🏛️ {t.heroCTA2}</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:24}}>
        {[["🏛️",universities.length,t.statUniversities],["📚",total,t.statDepartments],["🗺️",allRegions.length,t.statRegions]].map(([icon,val,label])=>(
          <div key={String(label)} style={{background:th.surface,border:`1px solid ${th.border}`,borderRadius:12,padding:isMobile?"14px 8px":"20px 16px",textAlign:"center",boxShadow:th.shadow}}>
            <div style={{fontSize:isMobile?20:26,marginBottom:4}}>{icon}</div>
            <div style={{fontSize:isMobile?22:30,fontWeight:900,color:"#2d7a22"}}>{val}</div>
            <div style={{fontSize:isMobile?10:13,color:th.textMuted,marginTop:2}}>{label}</div>
          </div>
        ))}
      </div>

      <h2 style={{fontWeight:800,fontSize:isMobile?17:20,color:th.text,marginBottom:14}}>{t.featuredTitle}</h2>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(auto-fill,minmax(280px,1fr))",gap:14}}>
        {universities.slice(0,isMobile?3:4).map(u=><UniCard key={u.id} uni={u} onView={onViewUni} th={th} t={t}/>)}
      </div>
    </div>
  );
}

function UniversitiesPage({ onViewUni, th, t, isMobile }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const filtered = useMemo(()=>universities.filter(u=>(region==="All"||u.region===region)&&(!search||u.name.toLowerCase().includes(search.toLowerCase())||u.city.toLowerCase().includes(search.toLowerCase()))),[search,region]);
  return (
    <div style={{animation:"fadeUp 0.4s ease"}}>
      <div style={{marginBottom:18}}>
        <h2 style={{fontWeight:800,fontSize:isMobile?20:26,margin:"0 0 3px",color:th.text}}>{t.uniPageTitle}</h2>
        <p style={{color:th.textMuted,margin:0,fontSize:13}}>{t.uniPageDesc(universities.length)}</p>
      </div>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder={t.searchUniPlaceholder}
        style={{width:"100%",background:th.inputBg,border:`1.5px solid ${th.border}`,color:th.text,borderRadius:10,padding:"11px 14px",fontSize:14,outline:"none",marginBottom:14,fontFamily:"inherit"}}
        onFocus={e=>e.target.style.borderColor="#2d7a22"} onBlur={e=>e.target.style.borderColor=th.border}/>
      <p style={{fontSize:11,fontWeight:700,color:th.textMuted,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.05em"}}>📍 {t.filterByRegion}</p>
      <div style={{marginBottom:20}}><RegionPills selected={region} onSelect={setRegion} th={th} t={t}/></div>
      {filtered.length>0?(
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(auto-fill,minmax(280px,1fr))",gap:14}}>
          {filtered.map(u=><UniCard key={u.id} uni={u} onView={onViewUni} th={th} t={t}/>)}
        </div>
      ):(
        <div style={{textAlign:"center",padding:"50px 20px",color:th.textMuted}}><div style={{fontSize:40,marginBottom:10}}>🏛️</div><p>{t.noUnisFound}</p></div>
      )}
    </div>
  );
}

function UniDetailPage({ uni, onBack, th, t, isMobile }) {
  const grouped = uni.departments.reduce((acc,d)=>{if(!acc[d.faculty])acc[d.faculty]=[];acc[d.faculty].push(d);return acc;},{});
  return (
    <div style={{animation:"fadeUp 0.4s ease"}}>
      <button onClick={onBack} style={{background:th.pillBg,border:`1px solid ${th.border}`,borderRadius:8,padding:"8px 14px",cursor:"pointer",fontWeight:600,fontSize:13,color:th.textMuted,marginBottom:18,fontFamily:"inherit"}}>
        {t.back}
      </button>
      <div style={{background:th.surface,border:`1px solid ${th.border}`,borderRadius:14,padding:isMobile?"16px":"24px",marginBottom:20,boxShadow:th.shadow}}>
        <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12}}>
          <div style={{fontSize:32,background:th.accentBg,borderRadius:12,width:52,height:52,display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid ${th.accentBorder}`,flexShrink:0}}>{uni.logo}</div>
          <div style={{minWidth:0}}>
            <h2 style={{margin:0,fontSize:isMobile?17:22,fontWeight:900,color:th.text,lineHeight:1.2}}>{uni.name}</h2>
            <p style={{margin:"3px 0 0",fontSize:12,color:th.textMuted}}>📍 {uni.city}, {uni.region} · {t.established} {uni.established}</p>
          </div>
        </div>
        <p style={{color:th.textSubtle,lineHeight:1.7,marginBottom:12,fontSize:13}}>{uni.description}</p>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          <Badge color="green" th={th}>{t.publicLabel}</Badge>
          <Badge color="purple" th={th}>{uni.departments.length} {t.departments}</Badge>
          <Badge color="blue" th={th}>🌐 {uni.website}</Badge>
        </div>
      </div>
      <h3 style={{fontWeight:800,fontSize:isMobile?15:18,color:th.text,margin:"0 0 12px"}}>📚 {t.availableDepts}</h3>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {Object.entries(grouped).map(([faculty,depts])=>(
          <FacultyGroup key={faculty} faculty={faculty} depts={depts} th={th} t={t}/>
        ))}
      </div>
    </div>
  );
}

function SearchPage({ th, t, isMobile }) {
  const [query, setQuery] = useState("");
  const [faculty, setFaculty] = useState("All");
  const [region, setRegion] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  const results = useMemo(()=>{
    if(!query&&faculty==="All"&&region==="All")return[];
    const out=[];
    universities.forEach(uni=>{
      if(region!=="All"&&uni.region!==region)return;
      uni.departments.forEach(dept=>{
        const mQ=!query||dept.name.toLowerCase().includes(query.toLowerCase())||uni.name.toLowerCase().includes(query.toLowerCase())||dept.faculty.toLowerCase().includes(query.toLowerCase());
        const mF=faculty==="All"||dept.faculty===faculty;
        if(mQ&&mF)out.push({dept,uni});
      });
    });
    return out;
  },[query,faculty,region]);

  const iSt = {width:"100%",background:th.inputBg,border:`1.5px solid ${th.border}`,color:th.text,borderRadius:10,padding:"11px 14px",fontSize:14,outline:"none",fontFamily:"inherit"};

  return (
    <div style={{animation:"fadeUp 0.4s ease"}}>
      <div style={{marginBottom:18}}>
        <h2 style={{fontWeight:800,fontSize:isMobile?20:26,margin:"0 0 3px",color:th.text}}>{t.deptPageTitle}</h2>
        <p style={{color:th.textMuted,margin:0,fontSize:13}}>{t.deptPageDesc}</p>
      </div>
      <div style={{background:th.surface,borderRadius:12,padding:16,border:`1px solid ${th.border}`,marginBottom:20,boxShadow:th.shadow}}>
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder={`🔍 ${t.searchDeptPlaceholder}`} style={{...iSt,marginBottom:10}}
          onFocus={e=>e.target.style.borderColor="#2d7a22"} onBlur={e=>e.target.style.borderColor=th.border}/>
        <select value={faculty} onChange={e=>setFaculty(e.target.value)} style={{...iSt,marginBottom:12}}>
          <option value="All">{t.allFaculties}</option>
          {allFaculties.map(f=><option key={f} value={f}>{f}</option>)}
        </select>
        <p style={{fontSize:11,fontWeight:700,color:th.textMuted,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.05em"}}>📍 {t.filterByRegion}</p>
        <RegionPills selected={region} onSelect={setRegion} th={th} t={t}/>
      </div>

      {results.length>0?(
        <>
          <p style={{color:th.textMuted,marginBottom:12,fontWeight:600,fontSize:13}}>{t.resultsFound(results.length)}</p>
          <div style={{border:`1px solid ${th.border}`,borderRadius:12,overflow:"hidden",boxShadow:th.shadow}}>
            {results.map(({dept,uni},i)=>{
              const exp=expandedId===dept.id;
              return (
                <div key={`${uni.id}-${dept.id}`} style={{borderBottom:i<results.length-1?`1px solid ${th.border}`:"none",background:exp?th.accentBg:th.surface,transition:"background 0.15s"}}>
                  <div onClick={()=>setExpandedId(exp?null:dept.id)}
                    style={{display:"flex",alignItems:"center",gap:8,padding:"13px 16px",cursor:"pointer"}}
                    onMouseEnter={e=>{if(!exp)e.currentTarget.style.background=th.surfaceHover}}
                    onMouseLeave={e=>{if(!exp)e.currentTarget.style.background="transparent"}}
                  >
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontWeight:700,fontSize:14,color:th.text}}>{dept.name}</div>
                      <div style={{fontSize:11,color:th.textMuted,marginTop:3,display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
                        <Badge color="blue" th={th}>{dept.degree}</Badge>
                        <span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>🏛️ {isMobile?uni.shortName:uni.name}</span>
                      </div>
                    </div>
                    <span style={{fontSize:14,color:th.textMuted,transform:exp?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s",display:"inline-block",flexShrink:0}}>▾</span>
                  </div>
                  {exp&&(
                    <div style={{padding:"0 16px 16px",borderTop:`1px dashed ${th.accentBorder}`,animation:"expandIn 0.2s ease"}}>
                      <div style={{fontSize:12,color:th.textMuted,marginBottom:8}}>📍 {uni.name} · {dept.faculty} · ⏱ {dept.duration} {t.years} · 👥 {dept.seats}</div>
                      <p style={{margin:"0 0 10px",fontSize:13,color:th.textSubtle,lineHeight:1.65}}>{dept.description}</p>
                      <div style={{display:"flex",alignItems:"flex-start",flexWrap:"wrap",gap:6}}>
                        <span style={{fontSize:12,fontWeight:700,color:th.accentText,whiteSpace:"nowrap"}}>💼 {t.careerPaths}:</span>
                        <div style={{display:"flex",flexWrap:"wrap",gap:5}}>{dept.careers.map(c=><Badge key={c} color="green" th={th}>{c}</Badge>)}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      ):(
        <div style={{textAlign:"center",padding:"50px 20px",color:th.textMuted}}>
          <div style={{fontSize:48,marginBottom:12}}>🔍</div>
          <p style={{fontSize:14,maxWidth:320,margin:"0 auto",lineHeight:1.6}}>{t.noResults}</p>
        </div>
      )}
    </div>
  );
}

// ─── MOBILE BOTTOM NAV ────────────────────────────────────────────────────────
function BottomNav({ view, onNav, t, th }) {
  const items = [["home","🏠",t.navHome],["universities","🏛️",t.navUniversities],["search","🔍",t.navSearch]];
  return (
    <nav style={{position:"fixed",bottom:0,left:0,right:0,background:th.headerBg,borderTop:`1px solid ${th.border}`,display:"flex",zIndex:400,boxShadow:"0 -4px 16px rgba(0,0,0,0.1)"}}>
      {items.map(([v,icon,label])=>(
        <button key={v} onClick={()=>onNav(v)} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px 4px",border:"none",background:"transparent",cursor:"pointer",color:view===v?"#2d7a22":th.textMuted,fontFamily:"inherit",transition:"color 0.15s",gap:2}}>
          <span style={{fontSize:20}}>{icon}</span>
          <span style={{fontSize:10,fontWeight:600}}>{label}</span>
        </button>
      ))}
    </nav>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState("home");
  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(false);
  const [selectedUni, setSelectedUni] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const th = dark ? darkTh : lightTh;
  const t = T[lang];
  const isMobile = useIsMobile();

  const navigate = useCallback((v) => { setView(v); setMobileMenuOpen(false); }, []);
  const viewUni = useCallback((uni) => { setSelectedUni(uni); setView("uni-detail"); }, []);

  const langOpts = [["en","EN","🇬🇧"],["am","አማ","🇪🇹"],["or","ORO","🌿"]];

  return (
    <div style={{fontFamily:"'Outfit','Segoe UI',system-ui,sans-serif",minHeight:"100vh",background:th.bg,color:th.text,transition:"background 0.3s,color 0.3s",display:"flex",flexDirection:"column"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeSlideIn{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
        @keyframes expandIn{from{opacity:0;transform:scaleY(0.96)}to{opacity:1;transform:scaleY(1)}}
        @keyframes slideDown{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
        input,select,button{font-family:inherit}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-thumb{background:${th.borderStrong};border-radius:99px}
      `}</style>

      {/* ── HEADER ── */}
      <header style={{background:th.headerBg,borderBottom:`1px solid ${th.border}`,position:"sticky",top:0,zIndex:300,boxShadow:dark?"0 1px 12px rgba(0,0,0,0.5)":"0 1px 6px rgba(26,60,20,0.08)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",padding:"0 16px",display:"flex",alignItems:"center",justifyContent:"space-between",height:56}}>

          {/* Logo */}
          <div onClick={()=>navigate("home")} style={{display:"flex",alignItems:"center",gap:7,cursor:"pointer",flexShrink:0}}>
            <span style={{fontSize:20}}>🇪🇹</span>
            <span style={{fontWeight:900,fontSize:15,color:th.text,letterSpacing:"-0.02em"}}>{t.appName}</span>
            <span style={{fontWeight:500,fontSize:11,color:"#2d7a22"}}>{t.tagline}</span>
          </div>

          {/* Desktop nav */}
          {!isMobile && (
            <nav style={{display:"flex",gap:2}}>
              {[["home",t.navHome],["universities",t.navUniversities],["search",t.navSearch]].map(([v,label])=>(
                <button key={v} onClick={()=>navigate(v)} style={{background:view===v?"#2d7a22":"transparent",color:view===v?"#fff":th.textMuted,border:"none",borderRadius:8,padding:"7px 13px",fontWeight:600,fontSize:13,cursor:"pointer",transition:"all 0.18s",whiteSpace:"nowrap"}}>{label}</button>
              ))}
            </nav>
          )}

          {/* Right controls */}
          <div style={{display:"flex",gap:6,alignItems:"center",flexShrink:0}}>
            {/* Language toggle */}
            <div style={{display:"flex",gap:2,background:th.bg,borderRadius:9,padding:2,border:`1px solid ${th.border}`}}>
              {langOpts.map(([code,label,flag])=>(
                <button key={code} onClick={()=>setLang(code)} style={{background:lang===code?"#2d7a22":"transparent",color:lang===code?"#fff":th.textMuted,border:"none",borderRadius:6,padding:isMobile?"4px 6px":"5px 8px",fontWeight:700,fontSize:10,cursor:"pointer",transition:"all 0.2s",whiteSpace:"nowrap"}}>{flag}{!isMobile&&" "+label}</button>
              ))}
            </div>
            {/* Dark toggle */}
            <button onClick={()=>setDark(d=>!d)} style={{background:th.pillBg,border:`1px solid ${th.border}`,borderRadius:7,padding:"6px 10px",cursor:"pointer",fontSize:14,color:th.textMuted,transition:"all 0.2s"}}>
              {dark?t.lightMode:t.darkMode}
            </button>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main style={{maxWidth:1100,margin:"0 auto",padding:isMobile?"20px 14px 90px":"32px 24px",flex:1,width:"100%"}}>
        {view==="home"         && <HomePage onNav={navigate} onViewUni={viewUni} th={th} t={t} isMobile={isMobile}/>}
        {view==="universities" && <UniversitiesPage onViewUni={viewUni} th={th} t={t} isMobile={isMobile}/>}
        {view==="uni-detail"   && selectedUni && <UniDetailPage uni={selectedUni} onBack={()=>navigate("universities")} th={th} t={t} isMobile={isMobile}/>}
        {view==="search"       && <SearchPage th={th} t={t} isMobile={isMobile}/>}
      </main>

      {/* ── FOOTER (desktop only) ── */}
      {!isMobile && (
        <footer style={{borderTop:`1px solid ${th.border}`,padding:"18px 24px",textAlign:"center",color:th.textMuted,fontSize:12,background:th.headerBg}}>
          🇪🇹 UniGuide Ethiopia — Helping students find their path · 2025
        </footer>
      )}

      {/* ── MOBILE BOTTOM NAV ── */}
      {isMobile && <BottomNav view={view} onNav={navigate} t={t} th={th}/>}
    </div>
  );
}
