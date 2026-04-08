export const UNIVERSITIES = [
    {
        id: 1,
        name: "Royal University of Phnom Penh",
        shortName: "RUPP",
        image: "https://3.bp.blogspot.com/_oN2ovDH18dI/TNKOkWSZeVI/AAAAAAAAAJU/BMk5LbwR9a8/s1600/rupp.jpg",
        // image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
        logo: "https://www.rupp.edu.kh/logo/rupp_logo.png",
        location: "Phnom Penh, Cambodia",
        address: "Russian Federation Boulevard (110), Toul Kork, Phnom Penh, Cambodia",
        phone: "+855 23 883 640",
        email: "info@rupp.edu.kh",
        website: "https://www.rupp.edu.kh/",

        degree: ["Bachelor", "Master"],
        admissionDate: "Varies (usually Oct–Nov intake)",

        // Realistic public university pricing (approximate range in Cambodia)
        priceMin: 300,
        priceMax: 800,

        programsCount: 7,

        programs: [
            {
                id: 1,
                name: "Computer Science",
                degree: "Bachelor",
                field: "Technology",
                duration: "4 years",
                tuition: "$400–$800/year",
                desc: "Focuses on programming, software development, and computer systems."
                , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]

            },
            {
                id: 2,
                name: "Information Technology Engineering",
                degree: "Master",
                field: "Technology",
                duration: "2 years",
                tuition: "$600–$900/year",
                desc: "Advanced study in IT systems, networking, and software engineering."
                , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]
            },
            {
                id: 3,
                name: "English for Education",
                degree: "Bachelor",
                field: "Education",
                duration: "4 years",
                tuition: "$300–$600/year",
                desc: "Training teachers in English language and pedagogy.",
            },
            {
                id: 4,
                name: "International Studies",
                degree: "Bachelor",
                field: "Social Sciences",
                duration: "4 years",
                tuition: "$400–$700/year",
                desc: "Focus on global politics, diplomacy, and international relations."
                , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]
            },
            {
                id: 5,
                name: "Psychology",
                degree: "Bachelor",
                field: "Social Sciences",
                duration: "4 years",
                tuition: "$400–$700/year",
                desc: "Study of human behavior, mental processes, and counseling basics."
                , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]
            },
            {
                id: 6,
                name: "Environmental Science",
                degree: "Bachelor",
                field: "Science",
                duration: "4 years",
                tuition: "$400–$700/year",
                desc: "Covers ecology, conservation, and environmental management."
                , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]
            },
            {
                id: 7,
                name: "Tourism Development",
                degree: "Master",
                field: "Business",
                duration: "2 years",
                tuition: "$600–$900/year",
                desc: "Focus on sustainable tourism and hospitality management."
                , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]
            }
        ],

        students: 30000, // updated
        type: "Public",

        accreditation: "Ministry of Education, Youth and Sport (Cambodia)",

        description: "The Royal University of Phnom Penh, founded in 1960, is the oldest and largest public university in Cambodia. It offers a wide range of programs in science, social sciences, humanities, engineering, and languages, and is a member of the ASEAN University Network.",

        majors: [
            "Computer Science",
            "Information Technology",
            "Environmental Science",
            "Psychology",
            "International Studies",
            "Education",
            "Tourism Development"
        ],

        eligibility: [
            "High school diploma or equivalent",
            "Pass national Bac II exam (for Cambodian students)",
            "Meet university-specific requirements for chosen program"
        ],

        documents: [
            "High school diploma / transcripts",
            "Application form",
            "Passport or national ID",
            "Photos",
        ],

        steps: [
            "Visit the official RUPP website or campus",
            "Fill out the application form",
            "Submit required documents",
            "Pay registration fee",
            "Wait for admission confirmation",
        ]
    },
    {
        id: 2,
        name: "Institute of Technology of Cambodia",
        shortName: "ITC",
        image: "https://itc.edu.kh/wp-content/uploads/2022/02/photo_2022-02-04_08-54-18.jpg",
        logo: "https://itc.edu.kh/wp-content/uploads/2021/02/cropped-Logo-ITC.png",

        location: "Phnom Penh, Cambodia",
        address: "Russian Federation Blvd (110), Toul Kork, Phnom Penh",
        phone: "+855 23 880 370",
        email: "info@itc.edu.kh",
        website: "https://itc.edu.kh/",

        degree: ["Bachelor", "Engineer", "Master"],
        admissionDate: "Around Oct–Nov (after Bac II)",

        priceMin: 0,
        priceMax: 600, // many are scholarship-based

        programsCount: 6,

        programs: [
            { id: 1, name: "Civil Engineering", degree: "Engineer", field: "Engineering", duration: "5 years", tuition: "Free–$500/year", desc: "Focus on construction, structures, and infrastructure." },
            { id: 2, name: "Electrical Engineering", degree: "Engineer", field: "Engineering", duration: "5 years", tuition: "Free–$500/year", desc: "Covers power systems and electronics." },
            { id: 3, name: "Mechanical Engineering", degree: "Engineer", field: "Engineering", duration: "5 years", tuition: "Free–$500/year", desc: "Focus on machines, thermodynamics, and design." },
            { id: 4, name: "Chemical Engineering", degree: "Engineer", field: "Engineering", duration: "5 years", tuition: "Free–$500/year", desc: "Covers industrial chemical processes." },
            { id: 5, name: "Information & Communication Engineering", degree: "Engineer", field: "Technology", duration: "5 years", tuition: "Free–$500/year", desc: "Focus on IT systems and telecommunications." },
            { id: 6, name: "Environmental Engineering", degree: "Engineer", field: "Engineering", duration: "5 years", tuition: "Free–$500/year", desc: "Focus on sustainability and environment." }
        ],

        students: 4000,
        type: "Public",

        accreditation: "Ministry of Education, Youth and Sport",

        description: "ITC (Sala Techno) is Cambodia’s top engineering university, known for competitive entrance exams and strong technical training.",

        majors: ["Civil", "Electrical", "Mechanical", "Chemical", "ICT", "Environmental Engineering"],

        eligibility: [
            "Pass Bac II exam",
            "Pass ITC entrance exam",
            "Strong background in Math & Physics"
        ],

        documents: [
            "Application form",
            "Bac II certificate",
            "Transcript",
            "ID card",
            "Photos"
        ],

        steps: [
            "Register for ITC entrance exam",
            "Take exam",
            "Wait for results",
            "Submit documents",
            "Enroll"
        ]
    },
    {
        id: 3,
        name: "Chea Sim University of Kamchaymear",
        shortName: "CSUK",
        image: "https://itc.edu.kh/wp-content/uploads/2022/02/photo_2022-02-04_08-54-18.jpg",
        logo: "https://www.developmentaid.org/files/organizationLogos/chea-sim-university-of-kamchaymear-129296.jpg",

        location: "Prey Veng, Cambodia",
        address: "Kamchay Mear District, Prey Veng Province",
        phone: "+855 23 220 182",
        email: "info@csuk.edu.kh",
        website: "https://csuk.edu.kh/",

        degree: ["Associate", "Bachelor"],
        admissionDate: "Oct–Nov",

        priceMin: 250,
        priceMax: 600,

        programsCount: 6,

        programs: [
            { id: 1, name: "Computer Science", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$400/year", desc: "Basic programming and systems." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]},
            { id: 2, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$350/year", desc: "Networking and IT support." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]},
            { id: 3, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$350/year", desc: "Management and entrepreneurship." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]},
            { id: 4, name: "Accounting", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$350/year", desc: "Financial accounting and auditing." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]},
            { id: 5, name: "Agronomy", degree: "Bachelor", field: "Agriculture", duration: "4 years", tuition: "$300/year", desc: "Crop science and farming." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]},
            { id: 6, name: "English", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$300/year", desc: "English teaching and communication." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]}
        ],

        students: 3000,
        type: "Public",

        accreditation: "Ministry of Education, Youth and Sport",

        description: "CSUK provides affordable education for rural students with a focus on practical and community-based skills.",

        majors: ["IT", "Business", "Accounting", "Agriculture", "English"],

        eligibility: [
            "High school diploma",
            "Pass entrance exam (if required)"
        ],

        documents: [
            "Application form",
            "High school certificate",
            "Transcript",
            "ID card"
        ],

        steps: ["Apply", "Submit documents", "Enroll"]
    },
    {
        id: 4,
        name: "National Institute of Agriculture",
        shortName: "NIA",
        // image: "https://i.ytimg.com/vi/GAYkmWGFp10/maxresdefault.jpg",
        image: "https://scontent.fpnh2-1.fna.fbcdn.net/v/t39.30808-6/468532388_546710621487292_591321336264002671_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=25d718&_nc_ohc=tbM_WaCFRG0Q7kNvwHqvC6g&_nc_oc=AdoQIP3ij6pnQM5TLmyNPDtl9b-v1llRDEeyVeOdFhYCMm81520i0SeXuoynrPbabRA&_nc_zt=23&_nc_ht=scontent.fpnh2-1.fna&_nc_gid=xJV5V43dKaSiMQDTKpKRxA&_nc_ss=7a389&oh=00_Af16tRPS6N9zZIc2pfhb2FUAlG_wJi9xoSbMN2tsJXhnCw&oe=69DC5308",
        logo: "https://cambodianbamboostudies.com/assets/img/nia-logo.png",
        location: "Phnom Penh, Cambodia",
        address: "Prek Leap, Chroy Changvar, Phnom Penh",
        phone: "+855 23 428 167",
        email: "info@nia.gov.kh",
        website: "http://www.nia.gov.kh/",

        degree: ["Associate", "Bachelor"],
        admissionDate: "Nov",

        priceMin: 200,
        priceMax: 600,

        programsCount: 5,

        programs: [
             { id: 2, name: "Animal Science", degree: "Bachelor", field: "Agriculture", duration: "4 years", tuition: "$400/year", desc: "Livestock production." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"] },
            { id: 3, name: "Agricultural Engineering", degree: "Bachelor", field: "Engineering", duration: "4 years", tuition: "$500/year", desc: "Engineering for farming systems." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]},
            { id: 4, name: "Fisheries", degree: "Bachelor", field: "Agriculture", duration: "4 years", tuition: "$400/year", desc: "Aquaculture and fisheries." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]},
            { id: 5, name: "Agribusiness", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$400/year", desc: "Agricultural business.", curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"] }
        ],

        students: 9300,
        type: "Public",

        accreditation: "Ministry of Agriculture",

        description: "NIA specializes in agriculture and rural development, supporting Cambodia’s farming sector.",

        majors: ["Agronomy", "Animal Science", "Fisheries", "Agribusiness"],

        eligibility: ["High school diploma"],

        documents: ["Application form", "Transcript", "ID"],

        steps: ["Apply", "Submit docs", "Enroll"]
    },


    {
        id: 5,
        name: "Royal University of Fine Arts",
        shortName: "RUFA",
        image: "https://c8.alamy.com/comp/MMYJNM/royal-university-of-fine-arts-phnom-penh-cambodia-MMYJNM.jpg",
        logo: "        https://www.standyou.com/uploads/20230926151124_file_RC.png",
        location: "Phnom Penh, Cambodia",
        address: "Street 19, Daun Penh, Phnom Penh",
        phone: "+855 23 986 417",
        website: "http://www.rufa.edu.kh/",

        degree: ["Bachelor"],
        admissionDate: "Oct",

        priceMin: 400,
        priceMax: 1000,

        programsCount: 5,

        programs: [
            { id: 1, name: "Architecture", degree: "Bachelor", field: "Design", duration: "5 years", tuition: "$800/year", desc: "Architecture and urban design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"] },
            { id: 2, name: "Fine Arts", degree: "Bachelor", field: "Arts", duration: "4 years", tuition: "$600/year", desc: "Painting and sculpture." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]},
            { id: 3, name: "Graphic Design", degree: "Bachelor", field: "Design", duration: "4 years", tuition: "$700/year", desc: "Visual communication design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"] },
            { id: 4, name: "Performing Arts", degree: "Bachelor", field: "Arts", duration: "4 years", tuition: "$600/year", desc: "Dance and theater." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]},
            { id: 5, name: "Archaeology", degree: "Bachelor", field: "Social Sciences", duration: "4 years", tuition: "$700/year", desc: "Cultural heritage studies." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]}
        ],

        students: 2000,
        type: "Public",

        majors: ["Agronomy", "Animal Science", "Fisheries", "Agribusiness"],

        accreditation: "Ministry of Education",

        description: "RUFA is Cambodia’s leading institution for arts, culture, and heritage.",

        eligibility: ["High school diploma", "Portfolio / audition (some programs)"]
    },

    {
        id: 6,
        name: "Vanda Institute",
        shortName: "VI",
        image: "https://cccbic.org/businesses-covers/4-cover.jpg",
        logo: "        https://www.puthisastra.edu.kh/wp-content/uploads/2019/01/14.vanda_.png",
        location: "Phnom Penh, Cambodia",
        address: "Mao Tse Toung Blvd, Phnom Penh",
        phone: "+855 23 213 563",
        website: "http://www.vanda.edu.kh/",

        degree: ["Associate", "Bachelor", "Master"],
        admissionDate: "Oct",

        priceMin: 400,
        priceMax: 1200,

        programsCount: 5,

        programs: [
            { id: 1, name: "Accounting", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$900/year" , desc: "Architecture and urban design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"] },
            { id: 2, name: "Finance & Banking", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$1000/year", desc: "Architecture and urban design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]  },
            { id: 3, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$900/year" , desc: "Architecture and urban design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"] },
            { id: 4, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$1000/year", desc: "Architecture and urban design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]  },
            { id: 5, name: "Tourism", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$800/year" , desc: "Architecture and urban design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"] }
        ],

        majors: ["Agronomy", "Animal Science", "Fisheries", "Agribusiness"],

        students: 5000,
        type: "Private",

        description: "Vanda Institute is a well-known private university specializing in business and finance."
    },

    {
        id: 7,
        name: "Angkor University",
        shortName: "AU",
        image: "https://angkor.edu.kh/assets/images/au2024.jpg",
        logo: "https://www.standyou.com/uploads/20230926163555_file_AU.jpeg",
        location: "Siem Reap, Cambodia",
        address: "Siem Reap City",
        phone: "+855 17 671 825",
        website: "http://www.angkor.edu.kh/",

        degree: ["Associate", "Bachelor"],
        admissionDate: "Oct",

        priceMin: 400,
        priceMax: 1000,

        programsCount: 5,

        programs: [
            { id: 1, name: "Computer Science", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$900/year" , desc: "Architecture and urban design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"] },
            { id: 2, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$850/year", desc: "Architecture and urban design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]  },
            { id: 3, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$800/year", desc: "Architecture and urban design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"]  },
            { id: 4, name: "Tourism & Hospitality", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$750/year" , desc: "Architecture and urban design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"] },
            { id: 5, name: "English", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$700/year" , desc: "Architecture and urban design." , curriculum: ["Algorithms & Data Structures","Operating Systems","Machine Learning","Software Engineering","Computer Networks","Capstone Project"], requirements: ["SAT 1300+","GPA 3.5+","Math & Science prerequisites","Statement of Purpose"], careers: ["Software Engineer","Data Scientist","Product Manager","CTO / Startup Founder"] }
        ],

        majors: ["Agronomy", "Animal Science", "Fisheries", "Agribusiness"],

        students: 4000,
        type: "Private",

        description: "Angkor University provides practical education in business, IT, and tourism in Siem Reap."
    },
    {
        id: 8,
        name: "University of Battambang",
        shortName: "NUBB",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mClnM7pUf5r0csrKTh-bJmdi67xUp1sqMg&s",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe-sRdYcra_FPeJh1Cai11GeejN9j_I6uzwg&s",
        location: "Battambang, Cambodia",
        address: "Battambang City",
        phone: "+855 17 671 825",
        website: "http://www.nubb.edu.kh/",

        degree: ["Associate", "Bachelor"],
        admissionDate: "Oct",

        priceMin: 400,
        priceMax: 1000,

        programsCount: 5,

        programs: [
            { id: 1, name: "Computer Science", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$900/year" },
            { id: 2, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$850/year" },
            { id: 3, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$800/year" },
            { id: 4, name: "Tourism & Hospitality", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$750/year" },
            { id: 5, name: "English", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$700/year" }
        ],

        students: 4000,
        type: "Private",

        description: "The National University Of Battambang (NUBB) was founded by SAMDECH KROLAHOM SAR KHENG, Deputy Prime Minister, Minister Of Interior, in 2007 with the vision of providing opportunities to students living in rural areas, especially in north-western Cambodia"
    },
    {
    id: 9,
    name: "University of Management and Economics",
    shortName: "UME",
    image: "https://www.ume.edu.kh/images/Image-Slide-2024.gif",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7qJVcs0hSV1LSPzEz3JFpG7fil6OwypEfg&s",
    location: "Kampong Cham, Cambodia",
    address: "National Road 7, Boeung Snay Village, Sangkat Sambour Meas, Kampong Cham City, Cambodia",
    phone: "+855 77 777 000",
    website: "https://ume.edu.kh/",

    degree: ["Associate", "Bachelor", "Master"],
    admissionDate: "Oct",

    priceMin: 350,
    priceMax: 900,

    programsCount: 5,

    programs: [
        { id: 1, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$700/year" },
        { id: 2, name: "Accounting", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$650/year" },
        { id: 3, name: "Finance and Banking", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$750/year" },
        { id: 4, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$800/year" },
        { id: 5, name: "English", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$600/year" }
    ],

    students: 2000,
    type: "Private",

    description: "The University of Management and Economics (UME) is a private higher education institution located in Kampong Cham City, Cambodia. It focuses on business, finance, and technology education, providing affordable programs for students in central provinces."
    },
    {
    id: 10,
    name: "Saint Paul Institute",
    shortName: "SPI",
    image: "https://spi.edu.kh/wp-content/uploads/slider/cache/71693bf026f04c628e1786b4291de82b/SPI-Campus-no-logo-Crop.png",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAVZa-qTINpjVxq0Wd6QNQ4qc9ERAxQItjw&s",
    location: "Takeo, Cambodia",
    address: "Angkorki Village, Tapam Commune, Tramkok District, Takeo Province, Cambodia",
    phone: "+855 78 556 552",
    website: "https://spi.edu.kh/",

    degree: ["Associate", "Bachelor"],
    admissionDate: "Oct",

    priceMin: 400,
    priceMax: 1200,

    programsCount: 5,

    programs: [
        { id: 1, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$900/year" },
        { id: 2, name: "Agronomy", degree: "Bachelor", field: "Agriculture", duration: "4 years", tuition: "$850/year" },
        { id: 3, name: "Tourism Management", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$800/year" },
        { id: 4, name: "English Literature", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$750/year" },
        { id: 5, name: "Social Work", degree: "Bachelor", field: "Social Science", duration: "4 years", tuition: "$700/year" }
    ],

    students: 300,
    type: "Private",

    description: "Saint Paul Institute (SPI) is a private Catholic higher education institution in Takeo Province, Cambodia, founded in 2009. It offers programs such as IT, agronomy, tourism, English, and social work, focusing on practical and community-based education."
},
{
    id: 11,
    name: "Svay Rieng University",
    shortName: "SRU",
    image: "https://academics-bucket-sj19asxm-prod.s3.ap-southeast-1.amazonaws.com/5307b327-dc56-419d-b7d9-af98149a4722/feature-image.jpg",
    logo: "https://academics-bucket-sj19asxm-prod.s3.ap-southeast-1.amazonaws.com/5307b327-dc56-419d-b7d9-af98149a4722/5307b327-dc56-419d-b7d9-af98149a4722.png",
    location: "Svay Rieng, Cambodia",
    address: "National Road 1, Svay Rieng City, Svay Rieng Province, Cambodia",
    phone: "+855 44 944 333",
    website: "https://sru.edu.kh/",

    degree: ["Associate", "Bachelor"],
    admissionDate: "Oct",

    priceMin: 300,
    priceMax: 700,

    programsCount: 5,

    programs: [
        { id: 1, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$600/year" },
        { id: 2, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$550/year" },
        { id: 3, name: "Accounting", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$500/year" },
        { id: 4, name: "English", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$450/year" },
        { id: 5, name: "Agriculture", degree: "Bachelor", field: "Agriculture", duration: "4 years", tuition: "$400/year" }
    ],

    students: 3000,
    type: "Public",

    description: "Svay Rieng University (SRU) is a public university established in 1997 in Svay Rieng Province, Cambodia. It provides higher education opportunities for students in the southeastern region, offering programs in IT, business, agriculture, and education."
},
{
    id: 12,
    name: "Khemarak University",
    shortName: "KU",
    image: "https://academics-bucket-sj19asxm-prod.s3.ap-southeast-1.amazonaws.com/5dab4b09-2fd9-4303-bc7b-71c3afb53947/feature-image.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRKRFe9P0yztFB_Xw4UuTkmGeZaHzhEP0TA&s",
    location: "Koh Kong, Cambodia",
    address: "Koh Kong City, Koh Kong Province, Cambodia",
    phone: "+855 12 900 200",
    website: "https://khemarak.edu.kh/",

    degree: ["Associate", "Bachelor"],
    admissionDate: "Oct",

    priceMin: 350,
    priceMax: 900,

    programsCount: 5,

    programs: [
        { id: 1, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$800/year" },
        { id: 2, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$700/year" },
        { id: 3, name: "Accounting", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$650/year" },
        { id: 4, name: "English", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$600/year" },
        { id: 5, name: "Tourism Management", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$750/year" }
    ],

    students: 1500,
    type: "Private",

    description: "Khemarak University is a private higher education institution located in Koh Kong Province, Cambodia. It offers programs in business, IT, tourism, and English, supporting students in coastal and remote regions."
    },
    {
    id: 13,
    name: "Life University",
    shortName: "LU",
    image: "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/gallery/1741063945_67c68709d0adf.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREwk_PQArLX4ey5jEh3VEQg0iMmQxsPcoHA&s",
    location: "Preah Sihanouk, Cambodia",
    address: "Sihanoukville City, Preah Sihanouk Province, Cambodia",
    phone: "+855 11 888 999",
    website: "https://lifeun.edu.kh/",

    degree: ["Associate", "Bachelor"],
    admissionDate: "Oct",

    priceMin: 400,
    priceMax: 1000,

    programsCount: 5,

    programs: [
        { id: 1, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$900/year" },
        { id: 2, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$850/year" },
        { id: 3, name: "Accounting", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$800/year" },
        { id: 4, name: "English", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$750/year" },
        { id: 5, name: "Hospitality Management", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$900/year" }
    ],

    students: 1200,
    type: "Private",

    description: "Life University is a private university in Sihanoukville, Cambodia. It provides higher education focused on business, IT, and hospitality, supporting the growing economic and tourism sector of the coastal region."
    },
    {
    id: 14,
    name: "International University",
    shortName: "IU",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4fHMC0wLiseerwSQzjXdQ_bv8_jK_7Mn7A&s",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNBvRhz78tL4VfPYP-jkjbdFzqXj-Wk3pkA&s",
    location: "Phnom Penh, Cambodia",
    address: "Toul Kork, Phnom Penh, Cambodia",
    phone: "+855 23 123 4567",
    website: "https://iu.edu.kh/",

    degree: ["Associate", "Bachelor", "Master"],
    admissionDate: "Oct",

    priceMin: 500,
    priceMax: 1200,

    programsCount: 5,

    programs: [
        { id: 1, name: "International Business", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$800/year" },
        { id: 2, name: "Computer Science", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$900/year" },
        { id: 3, name: "Law", degree: "Bachelor", field: "Law", duration: "4 years", tuition: "$850/year" },
        { id: 4, name: "English Studies", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$700/year" },
        { id: 5, name: "Health Science", degree: "Bachelor", field: "Health", duration: "4 years", tuition: "$950/year" }
    ],

    students: 3000,
    type: "Private",

    description: "International University (IU) is one of Cambodia’s established private universities in Phnom Penh offering a wide range of international‑oriented programs in business, technology, law, languages and health sciences."
},
{
    id: 15,
    name: "CamEd Business School",
    shortName: "CamEd",
    image: "https://cam-ed.edu.kh/wp-content/uploads/2025/09/camed-buidling-2025-scaled-800x475.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehklNakIQonazmCvM-5F5uPojgP3aUKHnHg&s",
    location: "Phnom Penh, Cambodia",
    address: "Phnom Penh, Cambodia",
    phone: "+855 23 987 6543",
    website: "https://cam-ed.edu.kh/",

    degree: ["Bachelor", "Master"],
    admissionDate: "Oct",

    priceMin: 800,
    priceMax: 1500,

    programsCount: 3,

    programs: [
        { id: 1, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$1200/year" },
        { id: 2, name: "Accounting & Finance", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$1300/year" },
        { id: 3, name: "MBA", degree: "Master", field: "Business", duration: "2 years", tuition: "$1500/year" }
    ],

    students: 1500,
    type: "Private",

    description: "CamEd Business School specializes in business and finance programs in Cambodia, offering internationally relevant business degrees with strong professional outcomes."
},
{
    id: 16,
    name: "University of South‑East Asia",
    shortName: "USEA",
    image: "https://www.usea.edu.kh/assets/usea_building-CK_I5vxJ.png",
    logo: "https://www.usea.edu.kh/assets/logo_update-BeRv3I2d.png",
    location: "Siem Reap, Cambodia",
    address: "Siem Reap City, Siem Reap Province, Cambodia",
    phone: "+855 63 777 888",
    website: "https://usea.edu.kh/",

    degree: ["Associate", "Bachelor"],
    admissionDate: "Oct",

    priceMin: 300,
    priceMax: 800,

    programsCount: 5,

    programs: [
        { id: 1, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$650/year" },
        { id: 2, name: "Tourism", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$700/year" },
        { id: 3, name: "IT", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$750/year" },
        { id: 4, name: "English", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$600/year" },
        { id: 5, name: "Accounting", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$650/year" }
    ],

    students: 2200,
    type: "Private",

    description: "University of South‑East Asia in Siem Reap offers a variety of programs in business, tourism and technology to students in the northwest region of Cambodia."
}

];

/** Derived lookups used by filters */
export const ALL_MAJORS    = [...new Set(UNIVERSITIES.flatMap(u => u.majors))].sort()
export const ALL_LOCATIONS = [...new Set(UNIVERSITIES.map(u => u.location))].sort()
export const TOTAL_STUDENTS = UNIVERSITIES.reduce((sum, university) => sum + university.students, 0);
