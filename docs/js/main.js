'use strict';
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
/*
 * JURY CONTENT
 */
//--------------------------------------------------------------------------------------------------
const JURY_JSON = [
    {
        "name": "Jörg Brandeis",
        "position": "Managing Director",
        "company": "Brandeis Consulting",
        "image": "images/jury/jörg.webp",
        "bio": "Jörg works as a trainer for development topics related to BW/4HANA and S/4HANA. He is the author of the book SQLScript for SAP HANA and is co-organiser of the HANA Tech Nights in Mannheim.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/joerg-brandeis"
            },
            {
                "type": "bluesky",
                "url": "https://bsky.app/profile/captainabap.bsky.social"
            }
        ]
    },
    {
        "name": "Jens Gleichmann",
        "position": "HANA Expert & Managing Director",
        "company": "XLC",
        "image": "images/jury/jens_gleichmann.webp",
        "bio": "As a HANA expert and former HANA trainer for SAP with more than 10 years of experience in optimizing and migrating such systems, his focus is on the technical part of HANA.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/jens-gleichmann"
            }
        ]
    },
    {
        "name": "Anna Hartmann",
        "position": "Managing Director",
        "company": "in4MD Service GmbH",
        "image": "images/jury/anna_hartmann.webp",
        "bio": "Anna brings expertise from over a decade of working with SAP HANA databases. Since 2017, she has been actively serving as the spokeswoman for the DSAG working group 'HANA Operations,'' sharing her knowledge and experiences with the community. She is also the author of the SAP Press book 'SAP HANA Administration.'",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/anna-hartmann-a936a7108"
            }
        ]
    },
    {
        "name": "Mathias Kemeter",
        "position": "Software Development Manager",
        "company": "SAP",
        "image": "images/jury/mathias_kemeter.webp",
        "bio": "Within SAP’s database development unit, Mathias is responsible for SAP HANA’s multi-model engines. In his role is leading the development behind the spatial, graph, hierarchies, and vector engines as well as the JSON document store.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/mathiaskemeter/"
            },
            {
                "type": "bluesky",
                "url": "https://bsky.app/profile/kemeter.rocks"
            }
        ]
    },
    {
        "name": "Susen Poppe",
        "position": "SAP HANA Product Manager",
        "company": "SAP",
        "image": "images/jury/susen_poppe.webp",
        "bio": "Susen is part of the product management team responsible for SAP HANA and SAP HANA Cloud. Within the team she focusses on product roll-out and awareness topics.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/susen-poppe"
            }
        ]
    },
    {
        "name": "Witalij Rudnicki",
        "position": "Principal Developer Advocate",
        "company": "SAP",
        "image": "images/jury/witali.webp",
        "bio": "Witalij Rudnicki (aka. Vitaliy Rudnytskiy) is a Principal Developer Advocate at SAP. His main interests are in Big Data and Fast Data technologies, AI/ML, Analytics and Data Visualization. He graduated from the University of Technology in Wroclaw, Poland. Before joining SAP, he worked as a technology consultant in Europe and in the U.S.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/witalij/"
            },
            {
                "type": "bluesky",
                "url": "https://bsky.app/profile/sygyzmundovych.bsky.social"
            }
        ]
    }
]
//--------------------------------------------------------------------------------------------------
/*
 * AGENDA JSON
 */
//--------------------------------------------------------------------------------------------------
const AGENDA_JSON = [
    {
        "id": "id-1738091132702-565",
        "title": "NSE and Replication Filters - Optimize the data stored on HANA",
        "description": "We used NSE and Date Filters in Replication tasks to optimize the data stored on HANA from the remote tables. \n\nWe saved a lot of cost in terms of storage without compromising on the expected output. ",
        "type": "demo",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "sharath.gangadhara@bs.nttdata.com",
                "firstName": "Sharath",
                "lastName": "Machenahalli Gangadhara",
                "company": "NTT Data Business Solutions Ltd",
                "bio": "I started my career with SAP in 2004 as an intern at IBM and have been with SAP ever since. Other than SAP I have been loyal to my wife(Rosa - Microbiologist  and a Biotech start up founder) who I met 1 year into SAP Career. Infact, I met her on the day of SAP TechEd 2026. I suspect a divine connect with SAP :)\n\nI have spent major part of my career in User Interface(CAF, WD Java, VC, WD ABAP, UI5, Fiori). However every now and then, have tried my hands at SAP BPM, Sybase Mobile and NetWeaver PI. My current area of work is HANA XSA. I am currently looking to HANA developments, Datasphere and little bit of Build process automation. My passion to learn new languages has helped me move from UI to Data modelling to Cloud technologies and now with AI. \n\nI love to garden. I also love to DIY civil and carpentry tasks at home. My passion is to learn - languages and technology. In my free time - I love to watch comedy(Seinfeld and Simpsons) or vacation in midst of nature.  ",
                "hash": "7d8a7faeca882966f576030556f12ffd7a5d7cbc",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "10:50",
        "endTime": "11:10",
        "location": "room_w1"
    },
    {
        "id": "id-1739261333784-69",
        "title": "Open Source Tools to work with HANA's Multi-model Engines",
        "description": "Get to know about existing integrations of SAP HANA into Open Source clients--especially in the context of multi-model engines. The session will give a high-level overview of clients like LangChain, QGIS, Tegola, GDAL, DBeaver, GeoServer, and Cytoscape.",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "mathias.kemeter@sap.com",
                "firstName": "Mathias",
                "lastName": "Kemeter",
                "company": "SAP SE",
                "bio": "Until recently, Mathias was part of the database development unit at SAP. He has been responsible for SAP HANA’s multi-model engines and led the development behind the spatial, graph, hierarchies, and vector engines as well as the JSON document store. Today, he is part of SAP's Business AI unit--but still personally connected to the SAP HANA community.",
                "hash": "d0b38dfb9848d5b3fee78423ca9359611bf7dcaf",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "14:20",
        "endTime": "14:45",
        "location": "room_w1"
    },
    {
        "id": "id-1739429556986-257",
        "title": "SAP HANA Cloud MDS Cubes",
        "description": "MDS Cube is a new feature in SAP HANA Cloud designed for high-speed analytics in SAP Analytics Cloud reporting scenarios. It can be used to improve runtimes and reduce the resource consumption on database side significantly. This session provides an overview of the architecture and intended use cases and demonstrates the modeling, management and usage of MDS Cubes based on customer project experiences.\n",
        "type": "presentation_long",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "bastian.bremerich@sap.com",
                "firstName": "Bastian",
                "lastName": "Bremerich",
                "company": "SAP SE",
                "bio": "Bastian Bremerich works as Product Expert in SAP HANA Development. As part of the Database Competence Center he has been supporting strategic customers and internal stakeholders for 10 years. His focus is on analytical scenarios on HANA &amp; HANA Cloud.",
                "hash": "80b3598ab8331b13adeca3a9cd8bfe2c7af31e76",
                "photo": false
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "9:55",
        "endTime": "10:40",
        "location": "room_w1"
    },
    {
        "id": "id-1739804490977-495",
        "title": "A day in a life of an HANA Administrator",
        "description": "At the HANA Tech Con, I am excited to take a deep dive into highly technical SAP HANA topics. Beyond the usual high-level discussions. This session will focus on real-world performance analysis, troubleshooting, and optimization strategies for HANA administrators.\n\nCase 1:\nUsing a practical example, I will demonstrate the HANA Kernel Profiler in combination with the Statement Data Collector and other scripts from the library in SAP note 1969700. Together, we will walk through how I identified the need for profiling and the insights gained from the collected data. The specific case involves an HANA trigger with a HANA sequence lacking a cache. What are the performance implications, and how can similar issues be avoided in the future?\n\nCase 2:\nIn this customer case, I will highlight the critical role of ABAP parameters in relation to HANA performance, focusing on the Fast Data Access (FDA) feature. A misconfigured parameter caused significantly increased response times. How was the issue diagnosed, and what can be learned to prevent such problems in your own system landscape?\n\nThis session provides a deep dive into HANA performance analysis, equipping attendees with hands-on knowledge and real-world troubleshooting techniques. By following detailed examples, you will gain a structured approach to performance tuning and learn how to effectively utilize HANA diagnostic tools.",
        "type": "presentation_long",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "matthias.sander@x-l-c.de",
                "firstName": "Matthias",
                "lastName": "Sander",
                "company": "XLC - Crossload Consulting GmbH",
                "bio": "I have been working in SAP Basis since 2005 and have specialized in SAP HANA for 10 years. As a book author on HANA, I enjoy diving deep into technical details and analyzing complex issues. Honestly, I sometimes enjoy solving tricky HANA problems on a weekend more than watching Netflix.",
                "hash": "d4097bd5fec52c913f2601ddec0b403216171b5e",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "11:45",
        "endTime": "12:30",
        "location": "audimax"
    },
    {
        "id": "id-1739806461731-129",
        "title": "Mastering HANA Performance: Impact of Workload Management &amp; Partitioning",
        "description": "Partitioning in SAP HANA is often regarded as a necessity to circumvent the well-known 2-billion-row limit—but its full potential for performance optimization is frequently underestimated. In this session, we’ll demonstrate how smart partitioning strategies can dramatically improve query performance, reduce memory consumption, and enhance system scalability.\n\nBased on real-world customer scenarios, we go beyond the standard guidance from SAP Note 2044468 and explore advanced techniques such as RANGE-HASH partitioning—using hands-on examples like ACDOCA. We’ll also take a closer look at Partition Pruning: how it works, when it works, and how much of a performance boost it can actually provide. Tools like PlanViz and the EXPLAIN function will be used live to analyze and validate partitioning effectiveness.\n\nIn the second part of the session, we turn our attention to a topic that many HANA professionals have heard of but few have fully leveraged: HANA Workload Management. We’ll begin with an overview of its core features and recent enhancements introduced in HANA 2.0 SPS07, followed by a deep dive into real-world use cases to illustrate how effective workload control can stabilize systems and improve overall performance.\n\nKey topics include:\n\n- Parent and Child Workload Classes – Structuring and optimizing workload distribution\n- Analyzing Load within a Class – Identifying bottlenecks and imbalances\n- Mapping &amp; Implementation Best Practices – Assigning workloads effectively\n- Restricting Specific Application Groups – Managing targeted resource usage\n- Workarounds &amp; Temporary Fixes – Bridging the gap until a long-term solution is in place\n\nPerformance tuning doesn’t always come down to better ABAP code or application-side logic. Sometimes, the key lies in the database layer—and this is where HANA Workload Management becomes an invaluable tool. It offers immediate control and mitigation options when quick action is needed, and it complements more permanent solutions still in development.",
        "type": "presentation_detailed",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "matthias.sander@x-l-c.de",
                "firstName": "Matthias",
                "lastName": "Sander",
                "company": "XLC - Crossload Consulting GmbH",
                "bio": "I have been working in SAP Basis since 2005 and have specialized in SAP HANA for 10 years. As a book author on HANA, I enjoy diving deep into technical details and analyzing complex issues. Honestly, I sometimes enjoy solving tricky HANA problems on a weekend more than watching Netflix.",
                "hash": "d4097bd5fec52c913f2601ddec0b403216171b5e",
                "photo": true
            },
            {
                "id": "dominik.fiedler@x-l-c.de",
                "firstName": "Dominik",
                "lastName": "Fiedler",
                "company": "XLC - Crossload Consulting GmbH",
                "bio": "I started working with SAP in 2003 and with SAP Basis in 2006. After running SAP Systems on Oracle for 10 years, I made my first experiences with HANA in 2016. And after only 3 years, we already replaced all Oracle databases by HANA for our SAP workload. Since this time, HANA topics are part of my daily working challenges.",
                "hash": "3c6435e4629bbe42f0bbe9a46451be64b502a778",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "16:15",
        "endTime": "17:15",
        "location": "room_w1"
    },
    {
        "id": "id-1739867339189-120",
        "title": "Getting the Most out of HEX",
        "description": "In this presentation we invite you for a deep dive into HEX Engine query executions of Calculation Views (CV) in HANA Cloud.\nThis presentation consists of 3 parts.\nIn part 1 we introduce the query execution stack, and what happens before the CV query is routed to the HEX Engine.\nIn part 2 we give you a unique look into the HEX Engine preparation and execution phases.\nIn part 3 we provide you with troubleshooting tools for analysing issues with HEX.\nThe HEX Engine is the one-stop engine for HANA Cloud. Let us show you how to get the most out of it.",
        "type": "presentation_long",
        "extraInfo": "We will most likely change one of the presenters, due to issues with onsite prescence.\nWe would like to offer a breakout session in the afternoon to also show some demos and have more time for questions.",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "mohamed.ali.chriki@sap.com",
                "firstName": "Mohamed Ali",
                "lastName": "Chriki",
                "company": "SAP SE",
                "bio": "Mohamed Ali Chriki is a Tunisian national who started working for SAP in Paris in 2008. In 2014, he moved to SAP HANA in Walldorf, Germany. Since 2019, Mohamed has been working as a C++ developer in the HANA Calculation Engine team.",
                "hash": "6cb70af349cdcf84744178af1b71308dd82d398c",
                "photo": true
            },
            {
                "id": "elisabeth.badino@sap.com",
                "firstName": "Elisabeth",
                "lastName": "Badino",
                "company": "SAP SE",
                "bio": "I started my career with SAP in 2016 in the area of SAP BW, and moved to support our critical customers on SAP HANA in 2020. Since then, I have been part of a team that handles escalations and bugs, as well as programs for early adoption of new technologies within SAP HANA. For the past 2 years, I have exclusively worked with supporting customers on SAP HANA Cloud.\n\nAs a Danish national I studied at the IT University of Copenhagen where I received a B.Sc. in Global Business Informatics and went on to complete my M.Sc. in Information Systems at Hawaii Pacific University, with a semester spent at FH Salzburg.\n\nI look forward to sharing some of the tools with you that we use for troubleshooting in the area of Calculation View queries using the HEX Engine.",
                "hash": "fb669950f98c9fe89eb7756ccf31c0b53c7a122a",
                "photo": true
            },
            {
                "id": "m.mayr@sap.com",
                "firstName": "Manuel",
                "lastName": "Mayr",
                "company": "SAP SE",
                "bio": "Manuel Mayr is a Development Expert at SAP, where he works on the HANA Execution Engine (HEX) as part of the HANA database core team, focusing on architecture and performance-critical components. With over a decade of experience in enterprise software development, Manuel has held senior engineering roles at both IBM and SAP, contributing to the design and optimization of large-scale data processing systems.\n\nOriginally from South Tyrol, Italy, he holds a Diploma in Computer Science with a minor in Mathematics from the Technical University of Munich, and a doctorate in Computer Science from the University of Tübingen. His academic work explored compiler techniques bridging the gap between object-oriented programming and relational database systems.\n\nManuel is passionate about system internals, performance engineering, and mathematics, and enjoys advancing the boundaries of in-memory database technology.",
                "hash": "fa57a7e3b4d944c6eb411c61195e52176666adf9",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "13:30",
        "endTime": "14:15",
        "location": "audimax"
    },
    {
        "id": "id-1739885384989-490",
        "title": "SAP HANA Statement Hints",
        "description": "Execution plans are prepared for the execution of the statements. It can happen that SAP HANA SQL Optimizer chooses a wrong or non-optimal execution plan.\nYou can apply HANA statement hints to force the SAP HANA SQL Optimizer to use or to prevent a specific way to process a database request.\n It is not so easy to find a suitable hint, because incomplete HANA execution plans are stored historicized in the HANA Monitoring views, only used engines. SQL collection from the SAP Note 1969700 can help you to perform some analysis regarding HANA engine changes.\nI have gained some experiences with HANA statement hints over the last few years and would like to share these experiences with the participants.",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "kutbettin.baran@sys.aok.de",
                "firstName": "Kuto",
                "lastName": "Baran",
                "company": "AOK Systems GmbH",
                "bio": "I've been working with HANA for years and mostly support HANA performance issues for our customers. I like to share my experiences (performing workshops, trainings oder presentations) with HANA that I have gained over the last 10 years.",
                "hash": "6d8dfa750decdf41dddbab8f869e2772696e393a",
                "photo": false
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "14:20",
        "endTime": "14:45",
        "location": "audimax"
    },
    {
        "id": "id-1739896859110-353",
        "title": "HANA UX — From HANA Studio to HANA Cloud Central",
        "description": "In this talk, HANA UX Lead Johannes will give an overview of all HANA tools since the dawn of the in-memory databases at SAP. Attend this interactive session to hear the back stories of HANA tools you always wanted to know but never dared to ask.\nWhy does HANA Cockpit look so different from HANA Studio?\nWhy is there no SQL Analyzer in HANA Cockpit anymore?\nWhy is there no Performance Monitor in HANA Cloud Central – will you bring it back?\nWhy does HANA Cloud Central come without a homepage?\nJohannes also will speak about the plans for HANA Cloud Central within the GenAI age and beyond.",
        "type": "presentation_long",
        "extraInfo": "Getting back to your idea to speak about HANA Studio :)",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "johannes.osterhoff@sap.com",
                "firstName": "Johannes",
                "lastName": "Osterhoff",
                "company": "SAP SE",
                "bio": "UX Lead and Manager for HANA Tools",
                "hash": "af813ec7f2cb76f13afb519f605bb7ceb073b564",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "10:50",
        "endTime": "11:35",
        "location": "audimax"
    },
    {
        "id": "id-1739972283491-548",
        "title": "Developing calculation views in Business Application Studio",
        "description": "Are you interested in how you can develop calculation views using the graphical editor in SAP Business Application Studio (BAS) to support your analytic use cases?\nThis session gives a short introduction into calculation views and the development environment BAS followed by a live demo. After the session you should have an understanding how to develop calculation views or HANA database objects in general and what use cases can be covered by them.\n",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "jan.zwickel@sap.com",
                "firstName": "Jan",
                "lastName": "Zwickel",
                "company": "SAP SE",
                "bio": "After having worked in the global support organization of SAP I joined the SAP HANA Product Management team. Within the product management team I focus on HANA analytic topics, in particular calculation views.",
                "hash": "25fdb91fd0bdbc031b33d4b0ab2d05c1ddb59edf",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "15:40",
        "endTime": "16:05",
        "location": "room_w1"
    },
    {
        "id": "id-1739975318089-681",
        "title": "Advanced database development with Visual Studio Code",
        "description": "This session explores how developers can leverage Visual Studio Code to streamline and enhance database development on SAP HANA Cloud using the SAP HANA Database Explorer extension. You will gain insights into how this integration simplifies complex data operations and enhances productivity, making database management more efficient and intuitive.\n\nTopics will include:\n- Installing and configuring the extension for optimal use in SAP HANA Cloud projects.\n- Exploration of the features and benefits of the SAP HANA Database Explorer extension.\n- Demonstrating how to connect to SAP HANA databases directly within VS Code.\n- Navigating the database landscape effectively, including browsing schemas, tables, and views.\n- Managing connections and multiple database environments (local, cloud, server) seamlessly.\n- Crafting and executing SQL queries efficiently with integrated syntax highlighting and error checking.\n- Analyzing, visualizing, and troubleshooting SQL queries using the SAP HANA SQL Analyzer extension\n- Making use of advanced features such as the database object dependency viewer",
        "type": "presentation_long",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "jonathan.bregler@sap.com",
                "firstName": "Jonathan",
                "lastName": "Bregler",
                "company": "SAP SE",
                "bio": "Enabling developers to leverage the full power of SAP HANA Cloud.",
                "hash": "0cc1543504f5bd4a7a1a110088ccfb5e76962104",
                "photo": true
            },
            {
                "id": "thomas.grimmeisen@sap.com",
                "firstName": "Thomas",
                "lastName": "Grimmeisen",
                "company": "SAP SE",
                "bio": "I'm a developer working in HANA Developer Experience. I mainly work on providing the Database Explorer Extension to Business Application Studio and Visual Studio Code.",
                "hash": "5ae80798d6b8fd4a67dff83015c3bdd223b51996",
                "photo": false
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "9:55",
        "endTime": "10:40",
        "location": "audimax"
    },
    {
        "id": "id-1741274362245-719",
        "title": "HDI – The “magic” behind CAP - How a CAP entity becomes a database artifact",
        "description": "This talk gives first an introduction to HDI. What is HDI and how does it work?\n\nThe main part will be a Live Demo with the following steps:\n\n•\tCreating a small CAP project using the generative AI-Powered Development (Joule) with 2–3 entities.\n•\tGenerating deployable HDI artifacts and deploying them as well as some data to an SAP HANA instance.\n•\tExploring the deployed entities as database objects with data in the SQL Database Explorer.\n",
        "type": "other",
        "extraInfo": "It's more a 30 min Talk than a 20 min Talk, that's why I chose A. If it doesn't fit into the agenda, I can of course shorten it to a 20 min Spot Talk\n\nHere the \"basics\" of HDI are presented. The talk / proposal https://hanatech.cfapps.eu12.hana.ondemand.com/?sessionKey=D1w8U1uloPcvHizI&amp;viewSession=true should be planed as a Follow Up or Deep Dive session to this one, in the case that both proposals are accepted.",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "rebecca.fondermann@sap.com",
                "firstName": "Rebecca",
                "lastName": "Fondermann",
                "company": "SAP SE",
                "bio": "I joined SAP and the Hana Deployment Infrastructure (HDI) Team on March 1, 2021, where I am working as a C++ Developer on HDI Core. I initially studied chemistry and specialized in theoretical chemistry after completing my undergraduate degree. During my PhD, I learned software development and programming in C++. It was during this time that I discovered a passion for programming, which led me to pursue a career in software development rather than continuing in the field of chemistry after completing my PhD thesis. For the past 10 years, I worked for a company that develops travel search and booking software for internet booking (Player+Hub/Dataprocessing), travel agencies, and tour operators.\n\nOutside of work and programming, I am passionate about sports. Until five years ago, I participated in triathlons. Since then, I swapped the time trial bike for a MTB and now I am riding for a semi-professional team. I also enjoy being in nature through biking or hiking.\n",
                "hash": "4572afa0fd51836b5b701769607fba0beec9e790",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "16:45",
        "endTime": "17:15",
        "location": "audimax"
    },
    {
        "id": "id-1741372190857-704",
        "title": "Cluster Analysis with SQL Notebooks and Calculation Views",
        "description": "The new SQL Notebook in Business Application Studio allows execution of SQLScript and SQL statements in an interactive way similar to Jupyter Notebook for Python scripts. I will show how a cluster analysis of customer data using PAL (Predictive Analysis Library) procedures can be executed in a SQL Notebook. \n\nResults of the cluster analysis will then be enriched and prepared using Calculation Views for further evaluation and visualisation.\nIn particular, advanced modeling functions of Calculation Views like Window Functions are applied.\n\nFurthermore, I will emphasize on the role of HDI container based development in the context of Machine Learning and Data Analysis with SAP HANA.\n\nReference: \n- Blog Cluster-Analysen mit Calculation Views: https://www.brandeis.de/blog/2025/cluster-analysen-calculation-views\n- Vortrag auf Hana Tech Night: https://www.brandeis.de/blog/events/htn-10-recap",
        "type": "presentation_long",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "benedict.baur@mail.de",
                "firstName": "Benedict",
                "lastName": "Baur",
                "company": "Dr. Baur Consulting",
                "bio": "I am a freelance SAP consultant for SAP BW/4, SAP HANA Cloud and Machine Learning.\nAuthor of the book \"Machine Learning mit SAP HANA\" (Espresso Tutorials, 2022)",
                "hash": "31c22dd5f95da8399f9331406af759736d7357b4",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "11:45",
        "endTime": "12:30",
        "location": "room_w1"
    },
    {
        "id": "id-1741427607654-702",
        "title": "How to optimize the SAP HANA Memory Sizing Predictions ",
        "description": "In this 20-minute session, lets explore the possibilities on how to predict SAP HANA Memory requirements with precision by combining key DVM insights , Data inflow vs Outflow Patterns as well as regularly monitoring various Top Working Memory areas against the Data footprints  growth .\nThese techniques can help to balance between Cost vs Business needs  by avoiding any possible over provisioning of expensive HANA servers\n\nKey Topics in Agenda:\n\nSizing Approach at a high level\nAnalyze Data Footprint in Memory \nUnderstanding the Growth patterns - Top tables from Memory perspective\nExplore the various DVM options - in a logical manner for the identified tables\nKey Assumptions - Success rate/ Saving factors  from different DVM measures\nFinalize Data footprint estimations\nWorking memory Optimization\nFinalize Working Memory vs Data footprint ratios\nCalculate Overall HANA memory estimations using Working memory ratios\nMonitor &amp; Control for any Deviations to repeat the exercise with finetuned / Optimized assumptions\n\n\n\n",
        "type": "presentation_short",
        "extraInfo": "Hello Team, \n\nGiven a chance, i would like to share my experiences of handling HANA sizing topics in a Large scale Industry sector scenarios using a Spot talk of 20 min.\nI would like to have not more than 10  to 12 slides with an average o 2 min talk for about each slide.\nDue to sensitivity of information, I will not be able to do any screen share sessions nor disclose any Client specific information but would rather keep it as general as possible .",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "phani.mallavarapu@gmail.com",
                "firstName": "Aditya",
                "lastName": "Mallavarapu",
                "company": "",
                "bio": "Hello Everyone, I am Aditya Mallavarapu, I have over 19 Years of Experience  in the SAP technical space , worked with Global Customers across various Industry sectors throughout my Journey.  I was born and  brought up in India and currently living in Germany for the past 4.5 years working for a German based Large Scale retail company focusing on Architecting &amp; Optimizing the SAP workloads .\n\nI am passionate about SAP's Technical aspects and always curious about the latest Technical innovations. Recently, I've been exploring AI-based SAP/HANA Performance dashboards - an exciting area I believe has great potential to simplify complex System insights.\n\nOutside of work, I'm a happy husband and a proud father of two teenagers  :-) , and I enjoy spending time with my family exploring new travel destinations when I'm not geeking out over SAP \n\nI'm excited to meet passionate people like you in person and looking forward to further extend my Professional Network. Let's talk and share HANA :-)",
                "hash": "522619a6abcbd96fab1a97dce334fba42481eb90",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "15:15",
        "endTime": "15:40",
        "location": "audimax"
    },
    {
        "id": "id-1741457353972-404",
        "title": "10 years of XSA - Dead or Alive?",
        "description": "This year marks the 10th anniversary of the initial release of XSA (SAP HANA Extended Application Services, Advanced Model) as part of HANA 1.0 SPS 11.\nThe goal was to provide a proper replacement for the aging XS Classic development environment, which relied on the old Web IDE and Eclipse, as well as to deliver an intermediate ramp-up infrastructure for the Cloud Foundry stack in the cloud.\nBut where does XSA stand today? Has it evolved into a robust platform, or is it struggling to stay relevant?\nIt has been a wild ride for anyone developing natively on HANA on-premise, and I will shed some light on the different topics and challenges of running on XSA today.",
        "type": "presentation_short",
        "extraInfo": "I'm speaking partly as a former SAP Dev that had the pleasure of porting multiple editors from the old XSC world to the new one, as well as a developer freelancing on different customer projects that involve(d) XSA. ",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "timo.wagner@outlook.com",
                "firstName": "Timo",
                "lastName": "Wagner",
                "company": "",
                "bio": "Freelance Software Engineer mainly focusing on SAP HANA technologies.\nFormer Developer at SAP working on the SAP HANA Smart Data Integration, Agile Data Preparation and Data Hub/Data Intelligence Products \n-\nStarted my career in the SAP HANA Smart Data Integration team and developed Adapters for the DPAgent.\nWhen Eclipse needed a replacement we've developed WebIDE (XS Classic) editors for Flowgraphs, Reptasks and everything in the Remote Source area. And after a while the same with the subsequent deprecation of XSC in favor for XSA and its new WebIDE.",
                "hash": "16a5381894b1656ea012e96be98d0ec195943f0a",
                "photo": false
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "16:15",
        "endTime": "16:40",
        "location": "audimax"
    },
    {
        "id": "id-1741514276948-9",
        "title": "Database Analysis Using the SAP HANA Knowledge Graph Engine",
        "description": "Analyzing database structures within a typical SAP ERP system, particularly S4HANA, presents a significant challenge.  The intricate interconnections between tables are often obscured by encapsulated views, hard-coded procedures, and complex functions, hindering transparency and comprehensive understanding.\nFrequently, administrators and developers require insights into the underlying tables associated with specific views or procedures.  Key information such as table size, record count, and originating ABAP module are crucial for performance optimization, troubleshooting, and system planning.  Furthermore, in distributed environments, determining the optimal strategy for table distribution across multiple nodes requires a deep understanding of these interdependencies.\nConsider the efficiency gains if these complex queries could be posed in natural language and answered with equal clarity.  This is now achievable with the SAP HANA Cloud Knowledge Graph Engine.  This technology empowers users to leverage Retrieval Augmented Generation (RAG) capabilities for their question answering systems.\nThis demo shows how the SAP HANA Cloud Knowledge Graph Engine simplifies database analysis.  We will showcase practical examples of querying an S4HANA database using natural language, illustrating how this technology delivers accurate and prompt answers to complex questions regarding table relationships. This facilitates improved system understanding and supports informed decision-making.",
        "type": "demo",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "lyubov.nakryyko@sap.com",
                "firstName": "Lyubov",
                "lastName": "Nakryyko",
                "company": "SAP SE",
                "bio": "Lyubov Nakryyko\nAI Architect, SAP SE\nAs of January 2024, I have been serving as an AI Architect within the Premium Engagement Area, where I am dedicated to helping our largest customers leverage artificial intelligence to enhance business value and streamline processes. We deliver AI-empowering services, such as AI strategy, and conduct proof of concepts to assess the feasibility of AI solutions, demonstrating their potential impact.\nPreviously, I focused on Data Volume Management at SAP, assisting clients in managing data growth through strategies like data avoidance and archiving.\nAs a Product Owner of Data Science Solutions in the SAP EarlyWatch Alert Application Area, I utilized machine learning and data science to automate processes, ensuring product success and stakeholder satisfaction.\nFrom 2014 to 2021, I worked as a Senior Support Engineer at the CoE EMEA Databases and HANA Platform Team, where I provided technical expertise and support for database solutions.\nMy journey at SAP began in 2010 as a Working Student.\nMy academic background includes a Master of Arts and a Bachelor of Arts in Computational Linguistics from the University of Heidelberg, Germany, and a Bachelor of Arts in English Philology from Ivan Franko National University of Lviv, Ukraine.\nOutside of my professional pursuits, I enjoy running, tennis, climbing, hiking, and yoga, reflecting my active and adventurous spirit.\n",
                "hash": "ac7421709fc27ab8f8b6cb0a9ade040a64a52357",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "11:15",
        "endTime": "11:35",
        "location": "room_w1"
    },
    {
        "id": "id-1741600366836-434",
        "title": "SAP HANA HotSpots",
        "description": "SAP HANA HotSpots is an automation tool to capture SAP HANA Database KPIs and present the result in an interactive report so that all stakeholders (Support, System Administrator, etc.) can understand the status of the SAP HANA system intuitively.\nSee SAP Note \"2927209 - FAQ: SAP HANA HotSpots\" and the document for more information: https://pages.github.tools.sap/mcc/hsdoc/\n",
        "type": "demo",
        "extraInfo": "This tool is already used by many teams in the SAP e.g. Ariba, ECS, DLM, CoE, MCC, HANA PS for troubleshooting and daily monitoring of the system. The feedback is very positive.  I would like to present the latest development progress and also promote it to the whole HANA community. Thanks!",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "mingqian.zhong@sap.com",
                "firstName": "Tim",
                "lastName": "Zhong",
                "company": "SAP",
                "bio": "I am a SAP HANA Database Expert focusing on trouble shooting, performance tunning, configuration optimization, restore/recovery, etc.\nI am working in the SAP MCC (Mission Control Center) helping customers to quickly recover from business down situation and also provide in-depth root cause analysis with SAP HANA database problems.\nCreator of MCC SAP HANA trouble shooting tool \"SAP HANA HotSpots\"\nCreator of MCC SAP HANA tool \"SAP HANA KPI Collector\"\nCreator of SAP HANA training material \"SAP HANA Technical Review\"",
                "hash": "81c5b33ea48fa03490441178a11a7bc184d6a61a",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "15:45",
        "endTime": "16:05",
        "location": "audimax"
    },
    {
        "id": "id-1741610619483-304",
        "title": "Use SAP Business Application Studio to work on HANA Platform &amp; XS Advanced",
        "description": "\nAbstract: This presentation will explore the comprehensive capabilities of SAP Business Application Studio for developing on the SAP HANA Platform. We will cover essential topics such as configuring the Cloud Connector, exposing internal systems, creating destinations in SAP BTP Subaccount, and developing and deploying SAP HANA database projects and HDI artifacts. Attendees will gain practical insights into leveraging SAP Business Application Studio for advanced development tasks.\n\nObjectives:\nConfiguring SAP Cloud Connector to Connect to SAP BTP Subaccount\nExposing Required Internal (On-Premise) Systems using SAP Cloud connector\nCreating Destinations in SAP BTP Subaccount\nCreation of an SAP HANA Database Project Targeting HANA Platform Database\nCreation and Deployment of SAP HDI Artifacts\nDeploying the Above-Mentioned Project\n\nMethodology:\nSlides and Live Demonstrations: Use slides to visually reinforce key points and conduct real-time demonstrations of each topic, showcasing the step-by-step processes involved in configuring, developing, and deploying projects using SAP Business Application Studio.\n\nTarget Audience:\nDatabase administrators and developers.\nIT professionals involved in SAP HANA development.\nSAP HANA users looking to leverage SAP Business Application Studio for advanced development tasks.\n\nExpected Outcomes:\nAttendees will gain a thorough understanding of using SAP Business Application Studio for SAP HANA development.\nParticipants will learn practical techniques for configuring cloud connectors, exposing internal systems, creating destinations, and developing and deploying projects.\nEnhanced knowledge of the benefits and challenges associated with using SAP Business Application Studio for SAP HANA development",
        "type": "presentation_long",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "sushil.jain01@sap.com",
                "firstName": "Sushil",
                "lastName": "Jain",
                "company": "SAP SE",
                "bio": "I develop the developer tools around SAP HANA Cloud database.",
                "hash": "dd19077863cdaef86136d51f5b30bbb575498917",
                "photo": false
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "13:30",
        "endTime": "14:15",
        "location": "room_w1"
    },
    {
        "id": "id-1741641304296-956",
        "title": "Formula modeler",
        "description": "Business users are often required to maintain formulas in a web application and have the execution of these formulas pushed down to the database on published datasets(calc. views) without engaging IT teams.\n\nThis presentation demonstrates such a utility, delving into the following sub-topics\n* The data-model in HANA cloud to catalog formulas and consume these formulas on published hana-views\n* The end-to-end application hosted on SAP BTP to maintain the repository\n* Logging and reporting\n* Use cases",
        "type": "demo",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [
            {
                "id": "prabhu.dc@sposea.com",
                "firstName": "Prabhu",
                "lastName": "Dassan",
                "company": "SPOSEA B.V.",
                "bio": "SAP Analytics Developer by career | Armchair history-buff. | Gaming on rainy days.",
                "hash": "6a1f37ae7677f8767d96e5e4275f6c64f85095e8",
                "photo": true
            },
            {
                "id": "ravi.ramachandrula@sposea.com",
                "firstName": "Ravi kiran",
                "lastName": "Ramachandrula",
                "company": "SPOSEA B.V.",
                "bio": "When I'm not coding solutions to solve the world, I would be doing some art stuff ;-)",
                "hash": "c9b40c0338d99727c43241e8cad1d713ac9a4f46",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "15:15",
        "endTime": "15:35",
        "location": "room_w1"
    },
    {
        "id": "id-1742397081762-199",
        "title": "Opening Keynote",
        "description": "Opening Keynote by Organizers and Stefan Bäuerle",
        "type": "opening_note",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "9:00",
        "endTime": "9:45",
        "location": "audimax"
    },
    {
        "id": "id-1742397155243-287",
        "title": "Closing Note",
        "description": "Closing Note",
        "type": "closing_note",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "17:15",
        "endTime": "17:35",
        "location": "audimax"
    },
    {
        "id": "id-1742910586692-523",
        "title": "Lunch Break",
        "description": "Different Lunch options will be served at the nearby canteen",
        "type": "lunch_break",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "12:30",
        "endTime": "13:30",
        "location": "canteen"
    },
    {
        "id": "id-1742911472729-852",
        "title": "Coffee Break",
        "description": "Small snacks will be served.",
        "type": "coffee_break",
        "extraInfo": "",
        "accepted": true,
        "confirmed": false,
        "speakers": [],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "14:45",
        "endTime": "15:15",
        "location": "canteen"
    }
]
const AGENDA_UI_HUDDLE = {
    "id": "id-1739897198550-341",
    "title": "UI Huddle — Propose enhancements and get them implemented",
    "description": "The UI Huddle format was shaped to bring small interdisciplinary groups together searching for and helping resolve UI issues. These days, we also use UI Huddles to ideate on new UI features for HANA tools. And during the HANA Tech Con we will run the first UI Huddle in real life with customers.\nJoin our interdisciplinary group of UX designers, UI writers, product managers, and developers to ideate on the enhancements for HANA Cloud Central you always wanted to use but never dared to request.\nDuring a UI Huddle, the interdisciplinary team agrees on UI issues to be resolved and features to be implemented. These issues and features have a fix rate of 100% – guaranteed!  Participate in this highly interactive format, propose an enhancement and we will start implementing some features directly during the UI Huddle at HANA Tech Con!",
    "type": "workshop",
    "extraInfo": "Ideally this takes place in a room adjacent to the event.",
    "accepted": true,
    "confirmed": false,
    "speakers": [
        {
            "id": "johannes.osterhoff@sap.com",
            "firstName": "Johannes",
            "lastName": "Osterhoff",
            "company": "SAP SE",
            "bio": "UX Lead and Manager for HANA Tools",
            "hash": "af813ec7f2cb76f13afb519f605bb7ceb073b564",
            "photo": true
        }
    ],
    "associatedSpeakers": "",
    "presentationLinks": [],
    "startTime": "11:45",
    "endTime": "14:45",
    "location": "room_w3"
}
//--------------------------------------------------------------------------------------------------
const AGENDA_DICT = AGENDA_JSON.reduce((dic, obj) => {
    dic[obj.id] = obj;
    return dic;
}, {});
//--------------------------------------------------------------------------------------------------
const ROOM_NAME_MAPPING = {
    "audimax": "Audimax",
    "room_w1": "Room W1",
    "room_w2": "Room W2",
    "room_w3": "Room W3",
    "canteen": "Canteen"
};
//--------------------------------------------------------------------------------------------------
const ROOM_TRACK_MAPPING = {
    "audimax": "track-1",
    "room_w1": "track-2",
    "room_w2": "track-2",
    "canteen": "track-1"
};
//--------------------------------------------------------------------------------------------------
function getConferenceUnixTime(hour = 9, minute = 0) {
    hour = hour.toString().padStart(2, "0");
    minute = minute.toString().padStart(2, "0");
    return Math.floor(Date.parse(`2025-07-10T${hour}:${minute}:00+02:00`) / 1000);
}
//--------------------------------------------------------------------------------------------------
function buildSocialHTML(obj) {
    let ret = '';
    obj.socials.forEach(social => {
        ret += `
        <li>
            <a href="${social.url}"
                aria-label="${social.type} profile of ${obj.name}" rel="nofollow" target="_blank">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="images/icons/sprite.svg#${social.type}"></use>
                </svg>
            </a>
        </li>
    `;
    });

    return ret;
}
//--------------------------------------------------------------------------------------------------
function buildMemberHTML(obj) {
    let imgStr = "";
    if (obj.image !== undefined) {
        if (obj.isAgenda && obj.image.endsWith('.svg')) {
            imgStr = `<svg class="htec-jury-member-svg">
                        <use xlink:href="${obj.image}"></use>
                      </svg>`;
        } else {
            imgStr = `<img aria-hidden="true" src=\"${obj.image}\" alt=\"Image of ${obj.name}\" />`;
        }
    }

    let socialStr = obj.socials !== undefined ? `<ul>${buildSocialHTML(obj)}</ul>` : "";
    return `
    <li>
        <div class="htec-jury-member-quick">
            ${imgStr}
            <div class="htec-jury-member-info">
                <h3>${obj.name}</h3>
                <h4>${obj.position !== undefined ? obj.position + ", " : ""}${obj.company}</h4>
                ${socialStr}
            </div>
        </div>
        <div class="htec-jury-member-bio">
            <p ${obj.isAgenda !== undefined ? "class=\"htec-agenda-bio-text\"" : ""}>${obj.bio}</p>
        </div>
    </li>
    `
}
//--------------------------------------------------------------------------------------------------
function buildJury() {
    let jury = document.getElementById('jury');
    let elementHTML = '';

    elementHTML += '<ul class="htec-jury-list">';
    JURY_JSON.forEach(obj => {
        elementHTML += buildMemberHTML(obj);
    });
    elementHTML += '</ul>';

    jury.innerHTML = elementHTML;
}
//--------------------------------------------------------------------------------------------------
/*
 * AGENDA
 */
//--------------------------------------------------------------------------------------------------
function compareTimeSlots(o1, o2) {
    let hour1 = parseInt(o1.startTime.split(':')[0]);
    let min1 = parseInt(o1.startTime.split(':')[1]);

    let hour2 = parseInt(o2.startTime.split(':')[0]);
    let min2 = parseInt(o2.startTime.split(':')[1]);

    if (hour1 < hour2) {
        return -1;
    } else if (hour1 > hour2) {
        return 1;
    } else {
        if (min1 < min2) {
            return -1;
        } else if (min1 > min2) {
            return 1;
        } else {
            return 0;
        }
    }
}
//--------------------------------------------------------------------------------------------------
function emitAgendaEntry(schedule, obj, startRowOverride=undefined, endRowOverride=undefined) {
    // Extract time information
    let eventHour = parseInt(obj.endTime.split(':')[0]);
    let eventMin = parseInt(obj.endTime.split(':')[1]);
    let isEventOver = Math.floor(Date.now() / 1000) > getConferenceUnixTime(eventHour, eventMin);

    // Extract basic information
    let isMultiTrackEvent = obj.type.includes('workshop') || obj.type.includes('note') || obj.type.includes("lunch_break") || obj.type.includes('coffee_break');
    let track = ROOM_TRACK_MAPPING[obj.location];
    let gridCol = isMultiTrackEvent ? 'track-1-start / track-2-end' : track;
    let startTimeAdj = obj.startTime.replace(':', '');
    let endTimeAdj = obj.endTime.replace(':', '');

    // Extract Speakers and sort alphabetically
    let speakerNames = obj.speakers.reduce((acc, speaker) => {
        acc.push(speaker['firstName'] + ' ' + speaker['lastName']);
        return acc;
    }, []);

    speakerNames.sort();
    let speakersAcc = speakerNames.join(', ');
    if (speakersAcc === "") {
        speakersAcc = "TBD";
    }
    if (obj.type.includes('lunch_break') || obj.type.includes('coffee_break')) {
        speakersAcc = "-";
    }

    // Ensure correct format of time
    if (startTimeAdj.length === 3) {
        startTimeAdj = '0' + startTimeAdj;
    }
    if (endTimeAdj.length === 3) {
        endTimeAdj = '0' + endTimeAdj;
    }

    // Respect overrides
    if (startRowOverride !== undefined) {
        startTimeAdj = startRowOverride;
    }
    if (endRowOverride !== undefined) {
        endTimeAdj = endRowOverride;
    }

    // Emit Agenda
    schedule.innerHTML += `
    <div class="session ${obj.type.includes('workshop') ? "workshop" : ""} ${isMultiTrackEvent ? "track-multi" : track} ${isEventOver ? "event-over" : ""}" style="grid-column: ${gridCol}; grid-row: time-${startTimeAdj} / time-${endTimeAdj};">
        <h3 class="session-title"><a href="#" onclick="showAgendaDialog('${obj.id}'); return false;">${obj.title}</a></h3>
        <div class="session-info-container">
            <div class="session-time">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 16 16">
                <path fill="currentColor"
                    d="M10.2 11c-.18 0-.35-.06-.5-.18L7.4 8.96a.792.792 0 0 1-.3-.62V4.8c0-.44.36-.8.8-.8.44 0 .8.36.8.8v3.16l2.01 1.62c.34.28.4.78.12 1.12-.16.2-.39.3-.62.3Zm4.8 1.2V3.8C15 2.26 13.74 1 12.2 1H3.8C2.26 1 1 2.26 1 3.8v8.4C1 13.74 2.26 15 3.8 15h8.4c1.54 0 2.8-1.26 2.8-2.8Zm-2.8-9.6c.66 0 1.2.54 1.2 1.2v8.4c0 .66-.54 1.2-1.2 1.2H3.8c-.66 0-1.2-.54-1.2-1.2V3.8c0-.66.54-1.2 1.2-1.2h8.4Z">
                </path>
            </svg>
            <span ${obj.type.includes('workshop') ? "style=\"font-weight: bold;\"" : ""}>${obj.startTime} - ${obj.endTime}, ${ROOM_NAME_MAPPING[obj.location]}</span>
            </div>
            <div class="session-presenter">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
                <g>
                <g>
                    <path
                        d="m439.5,236c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,70-64,126.9-142.7,126.9-78.7,0-142.7-56.9-142.7-126.9 0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,86.2 71.5,157.4 163.1,166.7v57.5h-23.6c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h88c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-23.6v-57.5c91.6-9.3 163.1-80.5 163.1-166.7z" />
                    <path
                        d="m256,323.5c51,0 92.3-41.3 92.3-92.3v-127.9c0-51-41.3-92.3-92.3-92.3s-92.3,41.3-92.3,92.3v127.9c0,51 41.3,92.3 92.3,92.3zm-52.3-220.2c0-28.8 23.5-52.3 52.3-52.3s52.3,23.5 52.3,52.3v127.9c0,28.8-23.5,52.3-52.3,52.3s-52.3-23.5-52.3-52.3v-127.9z" />
                </g>
                </g>
            </svg>
            <span>${speakersAcc}</span>
            </div>
        </div>
    </div>`;
}
//--------------------------------------------------------------------------------------------------
function emitTimeSlot(schedule, hour, adjHourOverride) {
    let adjHour = hour.toString().padStart(2, "0");
    let adjHourDisplay = `${adjHour}:00`;
    if (adjHourOverride !== undefined) {
        adjHourDisplay = adjHourOverride;
    }

    schedule.innerHTML += `
    <h2 class="time-slot" style="grid-row: time-${adjHour}00;">${adjHourDisplay}</h2>
    `;
}
//--------------------------------------------------------------------------------------------------
function buildAgenda() {
    let schedule = document.getElementsByClassName('schedule')[0];

    // UI Huddle is a special event
    schedule.innerHTML += `
    <h2 class="time-slot" style="grid-row: time-0830;">Special Events</h2>
    `;
    emitAgendaEntry(schedule, AGENDA_UI_HUDDLE, '0830', '0900');

    // All other events
    let lastHour = 9;
    AGENDA_JSON.sort(compareTimeSlots).forEach(obj => {
        // Emit time slots for the agenda
        let currHour = parseInt(obj.startTime.split(':')[0]);
        while (lastHour <= currHour) {
            emitTimeSlot(schedule, lastHour);
            lastHour++;
        }

        emitAgendaEntry(schedule, obj)
    });
}
//--------------------------------------------------------------------------------------------------
function injectAgendaDialogContent(itemId) {
    let agendaObj = itemId == AGENDA_UI_HUDDLE['id'] ? AGENDA_UI_HUDDLE : AGENDA_DICT[itemId];
    document.getElementById('htec-agenda-dialog-title-inject').innerHTML = agendaObj.title;
    document.getElementById('htec-agenda-dialog-description-inject').innerHTML =
        agendaObj.description.replace(/(?:\r\n|\r|\n)/g, '<br/>');

    let speakersListHTML = document.getElementById('htec-agenda-dialog-speakers-inject');
    speakersListHTML.innerHTML = '';

    let speakersDiv = document.getElementsByClassName("agenda-dialog-speakers")[0];
    if (agendaObj.speakers.length == 0) {
        speakersDiv.style.cssText = "display: none;"
    } else {
        speakersDiv.style.cssText = "";
    }

    agendaObj.speakers.forEach(speaker => {
        let fullName = speaker.firstName + ' ' + speaker.lastName;
        speakersListHTML.innerHTML += buildMemberHTML({
                isAgenda: true,
                name: fullName,
                company: speaker.company,
                image: speaker.photo === true ? `images/speakers/${speaker.hash}.jpg` : `images/speakers/smiley.webp`,
                /*socials: [
                    {
                        name: fullName,
                        url: 'mailto:' + speaker.email,
                        type: 'mail'
                    }
                ],*/
                bio: speaker.bio || ''
            });
    });
}
//--------------------------------------------------------------------------------------------------
function showAgendaDialog(itemId) {
    injectAgendaDialogContent(itemId);

    const element = document.getElementById('htec-agenda-dialog');
    const dialog = new A11yDialog(element)

    dialog.show();
}
//--------------------------------------------------------------------------------------------------
/*
 * CONFERENCE CLOCK
 */
//--------------------------------------------------------------------------------------------------
const CONFERENCE_TIME = Date.parse('2025-07-07T00:10:00.000+01:00');
//--------------------------------------------------------------------------------------------------
function ensureTwoDigits(time) {
    return time.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
}
//--------------------------------------------------------------------------------------------------
function updateTime() {
    var delta = (CONFERENCE_TIME - Date.now()) / 1000;
    delta = Math.round(delta)

    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = delta % 60;

    document.documentElement.style.setProperty('--timer-day', "'" + ensureTwoDigits(days) + "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + ensureTwoDigits(hours) + "'");
    document.documentElement.style.setProperty('--timer-minutes', "'" + ensureTwoDigits(minutes) + "'");
    document.documentElement.style.setProperty('--timer-seconds', "'" + ensureTwoDigits(Math.round(seconds)) + "'");
    requestAnimationFrame(updateTime);
}
//--------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    let jury = document.getElementById('jury');
    if (jury)
        buildJury();

    let agenda = document.getElementById('agenda');
    if (agenda)
        buildAgenda();

    let clock = document.getElementsByClassName('clock-container');
    if (clock.length > 0)
        updateTime();
});
