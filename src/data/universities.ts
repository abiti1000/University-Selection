import type { University } from '../types'

export const universities: University[] = [
  {
    id: 1, name: 'Addis Ababa University', shortName: 'AAU',
    city: 'Addis Ababa', region: 'Addis Ababa', established: 1950,
    logo: '🎓', website: 'www.aau.edu.et',
    description: 'The oldest and largest university in Ethiopia, renowned for research and academic excellence.',
    departments: [
      { id: 101, name: 'Computer Science', faculty: 'College of natural and Computation sciences', duration: 4, degree: 'BSc', seats: 120, description: 'Programming, algorithms, AI, and software engineering.', careers: ['Software Engineer','Data Scientist','System Analyst'] },
      { id: 102, name: 'Medicine', faculty: 'Medicine', duration: 6, degree: 'MD', seats: 80, description: 'Clinical medicine, anatomy, pharmacology, and surgery.', careers: ['Doctor','Surgeon','Medical Researcher'] },
      { id: 103, name: 'Civil Engineering', faculty: 'Technology', duration: 5, degree: 'BSc', seats: 100, description: 'Structural design, construction management, and urban planning.', careers: ['Civil Engineer','Structural Engineer','Urban Planner'] },
      { id: 104, name: 'Law', faculty: 'Law', duration: 4, degree: 'LLB', seats: 90, description: 'Constitutional, criminal, civil, and international law.', careers: ['Lawyer','Judge','Legal Advisor'] },
      { id: 105, name: 'Economics', faculty: 'Business & Economics', duration: 4, degree: 'BA', seats: 110, description: 'Macroeconomics, development economics, and econometrics.', careers: ['Economist','Policy Analyst','Financial Consultant'] },
      { id: 106, name: 'Electrical Engineering', faculty: 'Technology', duration: 5, degree: 'BSc', seats: 90, description: 'Power systems, electronics, and telecommunications.', careers: ['Electrical Engineer','Electronics Engineer','Telecom Engineer'] },
      { id: 107, name: 'Chemistry', faculty: 'Natural Sciences', duration: 4, degree: 'BSc', seats: 80, description: 'Organic, inorganic, physical, and analytical chemistry.', careers: ['Chemist','Lab Analyst','Research Scientist'] },
      { id: 108, name: 'Philosophy', faculty: 'Humanities', duration: 4, degree: 'BA', seats: 60, description: 'Ethics, logic, metaphysics, and history of ideas.', careers: ['Academic','Policy Advisor','Writer'] },
    ],
  },
  {
    id: 2, name: 'Bahir Dar University', shortName: 'BDU',
    city: 'Bahir Dar', region: 'Amhara', established: 2000,
    logo: '🏛️', website: 'www.bdu.edu.et',
    description: 'A leading university in northern Ethiopia focusing on technology and applied sciences.',
    departments: [
      { id: 201, name: 'Water Resources Engineering', faculty: 'Technology', duration: 5, degree: 'BSc', seats: 70, description: 'Hydrology, irrigation systems, and water supply management.', careers: ['Hydraulic Engineer','Water Resources Specialist','Irrigation Engineer'] },
      { id: 202, name: 'Textile Engineering', faculty: 'Technology', duration: 4, degree: 'BSc', seats: 60, description: 'Fiber science, textile manufacturing, and quality control.', careers: ['Textile Engineer','Quality Controller','Production Manager'] },
      { id: 203, name: 'Accounting & Finance', faculty: 'Business & Economics', duration: 4, degree: 'BA', seats: 120, description: 'Financial accounting, auditing, and corporate finance.', careers: ['Accountant','Financial Analyst','Auditor'] },
      { id: 204, name: 'Biology', faculty: 'Natural Sciences', duration: 4, degree: 'BSc', seats: 80, description: 'Cell biology, ecology, genetics, and microbiology.', careers: ['Biologist','Lab Technician','Environmental Scientist'] },
      { id: 205, name: 'Computer Science', faculty: 'Computing', duration: 4, degree: 'BSc', seats: 100, description: 'Software development, networking, and database systems.', careers: ['Software Developer','Network Engineer','Database Admin'] },
      { id: 206, name: 'Industrial Engineering', faculty: 'Technology', duration: 5, degree: 'BSc', seats: 65, description: 'Process optimization, manufacturing systems, and supply chain.', careers: ['Industrial Engineer','Process Manager','Quality Engineer'] },
    ],
  },
  {
    id: 3, name: 'Hawassa University', shortName: 'HWU',
    city: 'Hawassa', region: 'Sidama', established: 2000,
    logo: '🌿', website: 'www.hu.edu.et',
    description: 'Known for agriculture, medicine, and natural sciences in southern Ethiopia.',
    departments: [
      { id: 301, name: 'Agriculture', faculty: 'Agriculture', duration: 4, degree: 'BSc', seats: 150, description: 'Crop science, soil science, agronomy, and agricultural economics.', careers: ['Agronomist','Farm Manager','Agricultural Researcher'] },
      { id: 302, name: 'Veterinary Medicine', faculty: 'Veterinary Medicine', duration: 5, degree: 'DVM', seats: 60, description: 'Animal health, surgery, epidemiology, and livestock production.', careers: ['Veterinarian','Animal Health Officer','Livestock Researcher'] },
      { id: 303, name: 'Nursing', faculty: 'Medicine & Health Sciences', duration: 4, degree: 'BSc', seats: 100, description: 'Patient care, clinical nursing, community health, and midwifery.', careers: ['Nurse','Community Health Worker','Midwife'] },
      { id: 304, name: 'Environmental Science', faculty: 'Natural Sciences', duration: 4, degree: 'BSc', seats: 70, description: 'Conservation, pollution control, GIS, and climate change.', careers: ['Environmental Scientist','Conservation Officer','GIS Analyst'] },
      { id: 305, name: 'Food Science & Technology', faculty: 'Agriculture', duration: 4, degree: 'BSc', seats: 80, description: 'Food processing, quality assurance, and nutrition.', careers: ['Food Technologist','Quality Assurance Manager','Nutritionist'] },
      { id: 306, name: 'Medicine', faculty: 'Medicine & Health Sciences', duration: 6, degree: 'MD', seats: 60, description: 'General medicine, diagnostics, clinical practice, and research.', careers: ['Doctor','Clinical Researcher','Specialist'] },
    ],
  },
  {
    id: 4, name: 'Mekelle University', shortName: 'MU',
    city: 'Mekelle', region: 'Tigray', established: 1993,
    logo: '⛰️', website: 'www.mu.edu.et',
    description: 'Comprehensive university in northern Ethiopia with strong engineering and health programs.',
    departments: [
      { id: 401, name: 'Mining Engineering', faculty: 'Technology', duration: 5, degree: 'BSc', seats: 60, description: 'Mineral extraction, mine safety, and geological surveying.', careers: ['Mining Engineer','Geologist','Safety Officer'] },
      { id: 402, name: 'Pharmacy', faculty: 'Health Sciences', duration: 5, degree: 'BPharm', seats: 70, description: 'Pharmacology, drug formulation, and clinical pharmacy.', careers: ['Pharmacist','Drug Researcher','Clinical Pharmacist'] },
      { id: 403, name: 'Architecture', faculty: 'Technology', duration: 5, degree: 'BArch', seats: 50, description: 'Architectural design, urban design, and building technology.', careers: ['Architect','Urban Designer','Interior Designer'] },
      { id: 404, name: 'Management', faculty: 'Business & Economics', duration: 4, degree: 'BA', seats: 130, description: 'Business management, organizational behavior, and strategy.', careers: ['Manager','Business Analyst','Entrepreneur'] },
      { id: 405, name: 'Geology', faculty: 'Natural Sciences', duration: 4, degree: 'BSc', seats: 55, description: 'Earth sciences, petrology, mineralogy, and geophysics.', careers: ['Geologist','Petroleum Engineer','Environmental Geologist'] },
    ],
  },
  {
    id: 5, name: 'Jimma University', shortName: 'JU',
    city: 'Jimma', region: 'Oromia', established: 1999,
    logo: '🏥', website: 'www.ju.edu.et',
    description: 'Renowned for medical sciences and public health in western Ethiopia.',
    departments: [
      { id: 501, name: 'Public Health', faculty: 'Public Health', duration: 4, degree: 'BSc', seats: 90, description: 'Epidemiology, health policy, biostatistics, and community health.', careers: ['Public Health Officer','Epidemiologist','Health Educator'] },
      { id: 502, name: 'Medical Laboratory Science', faculty: 'Health Sciences', duration: 4, degree: 'BSc', seats: 80, description: 'Clinical lab diagnostics, hematology, and microbiology.', careers: ['Lab Scientist','Pathologist','Medical Researcher'] },
      { id: 503, name: 'Information Technology', faculty: 'Computing', duration: 4, degree: 'BSc', seats: 110, description: 'IT infrastructure, cybersecurity, and information systems.', careers: ['IT Specialist','Cybersecurity Analyst','System Admin'] },
      { id: 504, name: 'Social Work', faculty: 'Social Sciences', duration: 4, degree: 'BA', seats: 100, description: 'Community development, counseling, and social welfare.', careers: ['Social Worker','Community Developer','Counselor'] },
      { id: 505, name: 'Anesthesia', faculty: 'Medicine & Health Sciences', duration: 4, degree: 'BSc', seats: 50, description: 'Anesthetic techniques, pain management, and critical care.', careers: ['Anesthetist','Pain Specialist','ICU Nurse'] },
    ],
  },
  {
    id: 6, name: 'Dire Dawa University', shortName: 'DDU',
    city: 'Dire Dawa', region: 'Dire Dawa', established: 2006,
    logo: '🏙️', website: 'www.ddu.edu.et',
    description: 'A growing university in eastern Ethiopia offering engineering, business, and health sciences.',
    departments: [
      { id: 601, name: 'Mechanical Engineering', faculty: 'Technology', duration: 5, degree: 'BSc', seats: 70, description: 'Machine design, thermodynamics, manufacturing, and mechanics.', careers: ['Mechanical Engineer','Manufacturing Engineer','Maintenance Engineer'] },
      { id: 602, name: 'Marketing Management', faculty: 'Business & Economics', duration: 4, degree: 'BA', seats: 100, description: 'Consumer behavior, branding, digital marketing, and sales strategy.', careers: ['Marketing Manager','Brand Strategist','Sales Manager'] },
      { id: 603, name: 'Midwifery', faculty: 'Medicine & Health Sciences', duration: 4, degree: 'BSc', seats: 80, description: 'Maternal care, childbirth, newborn health, and reproductive health.', careers: ['Midwife','Maternal Health Specialist','Community Health Worker'] },
      { id: 604, name: 'Computer Science', faculty: 'Computing', duration: 4, degree: 'BSc', seats: 90, description: 'Software systems, algorithms, database design, and networking.', careers: ['Software Developer','System Admin','Network Engineer'] },
    ],
  },
  {
    id: 7, name: 'Arba Minch University', shortName: 'AMU',
    city: 'Arba Minch', region: 'South Ethiopia', established: 1986,
    logo: '🌊', website: 'www.amu.edu.et',
    description: 'Nestled near lakes, known for fisheries, water technology, and health sciences.',
    departments: [
      { id: 701, name: 'Fisheries & Aquatic Sciences', faculty: 'Natural Sciences', duration: 4, degree: 'BSc', seats: 60, description: 'Fish biology, aquaculture, lake ecology, and fisheries management.', careers: ['Fisheries Officer','Aquaculture Specialist','Marine Biologist'] },
      { id: 702, name: 'Software Engineering', faculty: 'Computing', duration: 4, degree: 'BSc', seats: 90, description: 'Software lifecycle, agile methods, mobile development, and cloud computing.', careers: ['Software Engineer','Mobile Developer','Cloud Architect'] },
      { id: 703, name: 'Hydraulic & Water Resources', faculty: 'Technology', duration: 5, degree: 'BSc', seats: 65, description: 'Dam design, flood management, groundwater, and irrigation engineering.', careers: ['Hydraulic Engineer','Dam Engineer','Groundwater Specialist'] },
      { id: 704, name: 'Tourism Management', faculty: 'Business & Economics', duration: 4, degree: 'BA', seats: 80, description: 'Hospitality, ecotourism, heritage tourism, and event management.', careers: ['Tourism Officer','Hotel Manager','Event Planner'] },
    ],
  },
  {
    id: 8, name: 'Haramaya University', shortName: 'HU',
    city: 'Haramaya', region: 'Oromia', established: 1954,
    logo: '🌾', website: 'www.haramaya.edu.et',
    description: 'One of the oldest agricultural universities in Africa with strong natural science programs.',
    departments: [
      { id: 801, name: 'Plant Sciences', faculty: 'Agriculture', duration: 4, degree: 'BSc', seats: 120, description: 'Crop production, plant pathology, breeding, and biotechnology.', careers: ['Plant Scientist','Agronomist','Crop Researcher'] },
      { id: 802, name: 'Animal Sciences', faculty: 'Agriculture', duration: 4, degree: 'BSc', seats: 90, description: 'Livestock nutrition, genetics, production, and management.', careers: ['Animal Scientist','Livestock Officer','Farm Manager'] },
      { id: 803, name: 'Rural Development', faculty: 'Agriculture', duration: 4, degree: 'BA', seats: 100, description: 'Community development, agricultural extension, and rural livelihoods.', careers: ['Development Officer','Extension Agent','NGO Worker'] },
      { id: 804, name: 'Pharmacy', faculty: 'Health Sciences', duration: 5, degree: 'BPharm', seats: 60, description: 'Drug sciences, clinical pharmacy, and pharmaceutical management.', careers: ['Pharmacist','Drug Researcher','Health Inspector'] },
      { id: 805, name: 'Natural Resources Management', faculty: 'Natural Sciences', duration: 4, degree: 'BSc', seats: 75, description: 'Land use, forest management, biodiversity, and conservation.', careers: ['Natural Resources Officer','Conservation Specialist','Forester'] },
    ],
  },
  {
    id: 9, name: 'Haramaya University', shortName: 'HU',
    city: 'Haramaya', region: 'Oromia', established: 1954,
    logo: '🌾', website: 'www.haramaya.edu.et',
    description: 'One of the oldest agricultural universities in Africa with strong natural science programs.',
    departments: [
      { id: 801, name: 'Plant Sciences', faculty: 'Agriculture', duration: 4, degree: 'BSc', seats: 120, description: 'Crop production, plant pathology, breeding, and biotechnology.', careers: ['Plant Scientist','Agronomist','Crop Researcher'] },
      { id: 802, name: 'Animal Sciences', faculty: 'Agriculture', duration: 4, degree: 'BSc', seats: 90, description: 'Livestock nutrition, genetics, production, and management.', careers: ['Animal Scientist','Livestock Officer','Farm Manager'] },
      { id: 803, name: 'Rural Development', faculty: 'Agriculture', duration: 4, degree: 'BA', seats: 100, description: 'Community development, agricultural extension, and rural livelihoods.', careers: ['Development Officer','Extension Agent','NGO Worker'] },
      { id: 804, name: 'Pharmacy', faculty: 'Health Sciences', duration: 5, degree: 'BPharm', seats: 60, description: 'Drug sciences, clinical pharmacy, and pharmaceutical management.', careers: ['Pharmacist','Drug Researcher','Health Inspector'] },
      { id: 805, name: 'Natural Resources Management', faculty: 'Natural Sciences', duration: 4, degree: 'BSc', seats: 75, description: 'Land use, forest management, biodiversity, and conservation.', careers: ['Natural Resources Officer','Conservation Specialist','Forester'] },
    ],
  },
  {
     id: 10, name: 'Oda Bultum University', shortName: 'OBU',
    city: 'Chiro', region: 'Oromia', established: 2015,
    logo: '🌾', website: 'www.obu.edu.et',
    description: 'One of the new agricultural universities in Africa with strong natural science programs.',
    departments: [
      { id: 801, name: 'Plant Sciences', faculty: 'Agriculture', duration: 4, degree: 'BSc', seats: 120, description: 'Crop production, plant pathology, breeding, and biotechnology.', careers: ['Plant Scientist','Agronomist','Crop Researcher'] },
      { id: 802, name: 'Animal Sciences', faculty: 'Agriculture', duration: 4, degree: 'BSc', seats: 90, description: 'Livestock nutrition, genetics, production, and management.', careers: ['Animal Scientist','Livestock Officer','Farm Manager'] },
      { id: 803, name: 'Rural Development', faculty: 'Agriculture', duration: 4, degree: 'BA', seats: 100, description: 'Community development, agricultural extension, and rural livelihoods.', careers: ['Development Officer','Extension Agent','NGO Worker'] },
      { id: 804, name: 'Pharmacy', faculty: 'Health Sciences', duration: 5, degree: 'BPharm', seats: 60, description: 'Drug sciences, clinical pharmacy, and pharmaceutical management.', careers: ['Pharmacist','Drug Researcher','Health Inspector'] },
      { id: 805, name: 'Natural Resources Management', faculty: 'Natural Sciences', duration: 4, degree: 'BSc', seats: 75, description: 'Land use, forest management, biodiversity, and conservation.', careers: ['Natural Resources Officer','Conservation Specialist','Forester'] },
    ],
  }
]

export const allRegions = [...new Set(universities.map(u => u.region))].sort()
export const allFaculties = [
  ...new Set(
    universities.flatMap(
      (u) => u.departments?.map((d) => d.faculty) || []
    )
  ),
].sort();
