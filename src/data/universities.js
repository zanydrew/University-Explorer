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
                desc: "Focuses on programming, software development, and computer systems.",
            },
            {
                id: 2,
                name: "Information Technology Engineering",
                degree: "Master",
                field: "Technology",
                duration: "2 years",
                tuition: "$600–$900/year",
                desc: "Advanced study in IT systems, networking, and software engineering.",
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
                desc: "Focus on global politics, diplomacy, and international relations.",
            },
            {
                id: 5,
                name: "Psychology",
                degree: "Bachelor",
                field: "Social Sciences",
                duration: "4 years",
                tuition: "$400–$700/year",
                desc: "Study of human behavior, mental processes, and counseling basics.",
            },
            {
                id: 6,
                name: "Environmental Science",
                degree: "Bachelor",
                field: "Science",
                duration: "4 years",
                tuition: "$400–$700/year",
                desc: "Covers ecology, conservation, and environmental management.",
            },
            {
                id: 7,
                name: "Tourism Development",
                degree: "Master",
                field: "Business",
                duration: "2 years",
                tuition: "$600–$900/year",
                desc: "Focus on sustainable tourism and hospitality management.",
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
            { id: 1, name: "Computer Science", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$400/year", desc: "Basic programming and systems." },
            { id: 2, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$350/year", desc: "Networking and IT support." },
            { id: 3, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$350/year", desc: "Management and entrepreneurship." },
            { id: 4, name: "Accounting", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$350/year", desc: "Financial accounting and auditing." },
            { id: 5, name: "Agronomy", degree: "Bachelor", field: "Agriculture", duration: "4 years", tuition: "$300/year", desc: "Crop science and farming." },
            { id: 6, name: "English", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$300/year", desc: "English teaching and communication." }
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
        image: "https://i.ytimg.com/vi/GAYkmWGFp10/maxresdefault.jpg",
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
            { id: 1, name: "Agronomy", degree: "Bachelor", field: "Agriculture", duration: "4 years", tuition: "$400/year", desc: "Crop production and soil science." },
            { id: 2, name: "Animal Science", degree: "Bachelor", field: "Agriculture", duration: "4 years", tuition: "$400/year", desc: "Livestock production." },
            { id: 3, name: "Agricultural Engineering", degree: "Bachelor", field: "Engineering", duration: "4 years", tuition: "$500/year", desc: "Engineering for farming systems." },
            { id: 4, name: "Fisheries", degree: "Bachelor", field: "Agriculture", duration: "4 years", tuition: "$400/year", desc: "Aquaculture and fisheries." },
            { id: 5, name: "Agribusiness", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$400/year", desc: "Agricultural business." }
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
            { id: 1, name: "Architecture", degree: "Bachelor", field: "Design", duration: "5 years", tuition: "$800/year", desc: "Architecture and urban design." },
            { id: 2, name: "Fine Arts", degree: "Bachelor", field: "Arts", duration: "4 years", tuition: "$600/year", desc: "Painting and sculpture." },
            { id: 3, name: "Graphic Design", degree: "Bachelor", field: "Design", duration: "4 years", tuition: "$700/year", desc: "Visual communication design." },
            { id: 4, name: "Performing Arts", degree: "Bachelor", field: "Arts", duration: "4 years", tuition: "$600/year", desc: "Dance and theater." },
            { id: 5, name: "Archaeology", degree: "Bachelor", field: "Social Sciences", duration: "4 years", tuition: "$700/year", desc: "Cultural heritage studies." }
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
            { id: 1, name: "Accounting", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$900/year" },
            { id: 2, name: "Finance & Banking", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$1000/year" },
            { id: 3, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$900/year" },
            { id: 4, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$1000/year" },
            { id: 5, name: "Tourism", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$800/year" }
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
            { id: 1, name: "Computer Science", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$900/year" },
            { id: 2, name: "Information Technology", degree: "Bachelor", field: "Technology", duration: "4 years", tuition: "$850/year" },
            { id: 3, name: "Business Administration", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$800/year" },
            { id: 4, name: "Tourism & Hospitality", degree: "Bachelor", field: "Business", duration: "4 years", tuition: "$750/year" },
            { id: 5, name: "English", degree: "Bachelor", field: "Education", duration: "4 years", tuition: "$700/year" }
        ],

        majors: ["Agronomy", "Animal Science", "Fisheries", "Agribusiness"],

        students: 4000,
        type: "Private",

        description: "Angkor University provides practical education in business, IT, and tourism in Siem Reap."
    },

];

/** Derived lookups used by filters */
export const ALL_MAJORS    = [...new Set(UNIVERSITIES.flatMap(u => u.majors))].sort()
export const ALL_LOCATIONS = [...new Set(UNIVERSITIES.map(u => u.location))].sort()
