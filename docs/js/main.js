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
        "name": "Rebecca Fondermann",
        "position": "C++ Senior Developer",
        "company": "SAP",
        "image": "images/jury/rebecca_fondermann.webp",
        "bio": "Rebecca joined SAP and the Hana Deployment Infrastructure (HDI) Team on March 1, 2021, where she is working as C++ Senior Developer on HDI Core. She initially studied chemistry and specialized in theoretical chemistry after completing her undergraduate degree. During her PhD, she learned software development and programming in C++. It was during this time that Rebecca discovered a passion for programming, which led her to pursue a career in software development rather than continuing in the field of chemistry after completing her PhD thesis.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/rebecca-fondermann-42859a154/"
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
    },
    {
        "name": "Alexander Boehm",
        "position": "HANA Chief Architect",
        "company": "SAP",
        "image": "images/jury/boehm.webp",
        "bio": "Dr. Alexander Böhm is a Distinguished Engineer at SAP and one of the chief architects for the SAP HANA Cloud database management system. His specific focus is on system performance and core database topics. He drives strategic, tactical, and operational projects, including design and architectural changes of the database kernel for key stakeholders, i.e. SAP S/4HANA. Additionally, he is overseeing the evolution of the HANA core database management system with respect to novel hardware and technology as well as cloud-based system deployments.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/alexanderb42/"
            }
        ]
    }
]
//--------------------------------------------------------------------------------------------------
const AGENDA_JSON = [
    {
        "id": "id-1771346373249-652",
        "title": "Bridging Python and SAP HANA: Inside the sqlalchemy-hana Open-Source Dialec",
        "description": "SQLAlchemy is Python's standard database toolkit and ORM. Alembic provides version-controlled schema migrations. sqlalchemy-hana is the open-source dialect that brings SAP HANA support to both tools.\n\nIn this session, we will explain how sqlalchemy-hana connects Python applications to SAP HANA. You'll learn how the dialect translates SQLAlchemy's database-agnostic API into HANA-specific SQL, and how we handle the quirks that make HANA unique.\n\nTopics covered:\n• What sqlalchemy-hana does and how it integrates with SQLAlchemy's architecture\n• Alembic support: Running schema migrations against SAP HANA databases\n• Async support: How we added aiohdbcli for non-blocking database operations\n• Vector support: Working with HANA's REAL_VECTOR type for modern workloads\n\nWhether you're a Python developer working with SAP HANA or curious about how database dialects work, this session will give you practical insights into bridging two different technology worlds.\n ",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "kai.harder@sap.com",
                "firstName": "Kai",
                "lastName": "Harder",
                "company": "SAP",
                "bio": "Passionate python developer",
                "hash": "a0bbe54727cf99557dff48bc1810b235dad75d48e489f3c99dff1002caa62696",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "15:25",
        "endTime": "15:50",
        "location": "audimax"
    },
    {
        "id": "id-1770973129667-534",
        "title": "Real World Uses Cases of HANA Cloud",
        "description": "SAP HANA Cloud is more than a managed database—it is a multi-model data platform supporting transactional, analytical, and hybrid workloads at scale. But how does it perform under real production constraints?\n\nThis session presents real-world implementations across industries, focusing on architecture blueprints, workload management strategies, data integration patterns, and performance optimization in live enterprise landscapes. We will discuss concrete design decisions, trade-offs, sizing considerations, and operational challenges encountered in production environments.\n\nAlthough structured around business use cases, this is a technically deep session aimed at architects and engineers who want practical, production-grade insights into scaling and operating SAP HANA Cloud successfully.",
        "type": "presentation_long",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "matthias.stemmler@sap.com",
                "firstName": "matthias",
                "lastName": "stemmler",
                "company": "SAP Deutschland SE &amp; Co KG",
                "bio": "I have been working in the data space for over 27 years, helping organizations design and implement modern data architectures—from traditional data warehouses to data lakes and cloud-based platforms.\n\nThroughout my career, I have taken on roles as a technical consultant, project manager, and architect, delivering numerous data platform initiatives with a strong focus on making data truly usable and valuable for the business.\n\nI have been involved with SAP HANA since its early days and have led the implementation of native HANA solutions for several customers. Today, I am responsible for the go-to-market for SAP HANA Cloud in the Middle &amp; Eastern Europe (MEE) region, supporting organizations in transforming their data strategies towards the cloud.\n\nIn my sessions, I share practical insights from real-world projects, discuss challenges and lessons learned, and value open, experience-driven exchange.",
                "hash": "0b075b3c99919a43ec23403cac88e009b9c1dbbb3675bf2c0edcf8037e6c7e53",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "14:05",
        "endTime": "14:50",
        "location": "room_w1"
    },
    {
        "id": "id-1772647796084-672",
        "title": "Simplify HANA Central Administration using Joule - for Free",
        "description": "We demonstrate the free availability of Joule for HANA administration\nDemonstrate the reduction in barrier to know HANA concepts to perform HANA administration ex: Alert monitoring\nUsage of Joule assistant to build complex SQL queries and query SAP knowledgebase",
        "type": "presentation_short",
        "extraInfo": "The idea is to keep it as a live demo. \nWe can use a trial account and use the option to manually trigger alert and demo same using the AI assitant",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "sharath.gangadhara@nttdata.com",
                "firstName": "Sharath ",
                "lastName": "M Gangadhara",
                "company": "NTT DATA Business Solutions Private Limited",
                "bio": "Speaker and technology practitioner focused on applying AI in SAP HANA Cloud. Passionate about translating emerging AI capabilities into practical solutions that enhance efficiency, insight, and user experience.",
                "hash": "02c41255f3c8e124354f4173c967c8e9705f48d650c1f928bda8415d398b245f",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "16:00",
        "endTime": "16:25",
        "location": "room_w1"
    },
    {
        "id": "id-1772707351922-907",
        "title": "Selective Data Replication from S/4 HANA into HANA Cloud",
        "description": "On a big Project at Leonhard Weiss (potantial co-speaker) we implemented a replacement of SAP ETM which retired end of 2025.\nFor this full fledged BTP Custom Software solution we made use of the power of HANA (with SDA) by Replicating a selective subset of Master Data from S/4 HANA into our very own HANA Cloud while converting, matching, delta detecting and updating our own records.\nWe are happy to share what we did, what we learned and how other similar projects could benefit from it.",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "julian.mayer@cbs-consulting.de",
                "firstName": "Julian",
                "lastName": "Mayer",
                "company": "cbs Corporate Business Solutions Unternehmensberatung GmbH",
                "bio": "Cloud Solution Architect envisioning and Implementing real SAP BTP Cloud Solutions not just on SAP HANA Cloud but rather leveraging the power of HANA Cloud",
                "hash": "9c8e667bafac6890a98955911d51ce4e9542b5545aa862c4fb12dc32235d8190",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "11:00",
        "endTime": "11:25",
        "location": "audimax"
    },
    {
        "id": "id-1772827366833-466",
        "title": "SDI and SDQ - Forgotten Knowledge?",
        "description": "While their sister product Smart Data Access (SDA) is quite known in the HANA world, Smart Data Integration (SDI) and especially Smart Data Quality (SDQ) seem to be living a far less glamorous life.\nIn this session, I will give you a glimpse into what those are about and how you can start using them.\nWith SDI, I will show you what you can do with it in regards to connectivity to foreign sources (e.g. other relational databases, OData or files) as well as how to move data in batches or real-time using hdbreptasks and hdbflowgraphs.\nI will show some architectural and practical differences to SDA and where you can start in case the right set of adapters isn't available for your connectivity needs. The SDI Adapter SDK has been around for quite some time and is also used by 3rd parties to build and sell custom adapters (e.g. for Kafka).\nAfter moving the data into HANA, we can then further increase its quality with SDQ by applying some Cleansing rules on person names and addresses. Using SDQ, the cleansed data can then be matched and deduplicated to ensure a single source of truth.",
        "type": "presentation_long",
        "extraInfo": "This time I will manage to fill the full time of the slot ;) \nIn case you prefer a smaller 20min session I can also just focus on either SDI or SDQ. ",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "timo.wagner@outlook.com",
                "firstName": "Timo",
                "lastName": "Wagner",
                "company": "",
                "bio": "Freelance Software Engineer mainly focusing on SAP HANA technologies.\nFormer Developer at SAP working on the SAP HANA Smart Data Integration, Agile Data Preparation and Data Hub/Data Intelligence Products\n-\nStarted my career in the SAP HANA Smart Data Integration team and developed Adapters for the DPAgent.\nWhen Eclipse needed a replacement we've developed WebIDE (XS Classic) editors for Flowgraphs, Reptasks and everything in the Remote Source area.\nAnd after a while the same with the subsequent deprecation of XSC in favor for XSA and its new WebIDE.",
                "hash": "fd7f18f6487faf5f32772932f0b2b75012a3dfb8d25820093a5764c344ba4eb3",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "13:00",
        "endTime": "13:45",
        "location": "room_w1"
    },
    {
        "id": "id-1773061903699-987",
        "title": "AI assistance for innovation adoption-SAP tool for Data Capacity Excellence",
        "description": "AI Assistance for innovation adoption gives you the flexibility to use dashboards focused on high-interest topics, offering issue resolution and optimization recommendations. With predefined key performance indicators (KPIs) and other relevant insights, you can assess the health of your SAP systems, highlight optimization opportunities, and view recommendations with their associated business impact. Awareness alone isn’t enough, so this tool provides guided actions that integrate seamlessly with SAP Cloud ALM for service. Through integration with project and task management in SAP Cloud ALM, it creates tasks that effectively guide issue resolution and feature enhancements, providing step-by-step direction to improve system performance. The dashboards update to reflect the latest status and progress, ensuring a continuous feedback loop.",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "pankaj.acharya@sap.com",
                "firstName": "Pankaj Kumar",
                "lastName": "Acharya",
                "company": "SAP",
                "bio": "I’m Pankaj Kumar Acharya, and I joined the CoE Data Volume Management team on 1st September. I bring over 17 years of SAP experience across multiple domains and hold a Bachelor of Technology in Computer Science and Engineering. I live in Mülheim an der Ruhr with my wife and our 12‑year‑old daughter, Aaria. \nOutside of work, I enjoy spending time with family and friends; watching Hollywood and Bollywood movies, especially fantasy, action, and sci‑fi; listening to music; trekking; and experimenting in the kitchen to cook new Indian dishes for my daughter. \nA fun fact about me is that I can never remember my own mobile number; I always have to look it up.",
                "hash": "ef45a6790f582d1b81c84ae823d1615d1b77721b7f107291877f0f60c7ce00f3",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "13:30",
        "endTime": "13:55",
        "location": "audimax"
    },
    {
        "id": "id-1773282667527-516",
        "title": "HANA UI Huddle",
        "description": "We would like to run a one-day interactive session to facilitate direct conversations between HANA users/partners and HANA designers/developers. HANA designers/developers will organize the session; people can drop by anytime throughout the day and talk with the organizers. They can describe their pain points when using HANA tooling products (such as HANA Cloud Central), propose ideas to improve these products, and also have the opportunity to review new features and provide feedback.\n\nKey Takeaways (our highlights): \n•\tInteractive: Two-way communication between HANA designers/developers and HANA users\n•\tCollaborative: The format allows everyone to participate and contribute to HANA as a product\n•\tInclusive: Potentially everyone has a chance to participate in the activity because it lasts for the whole day\n\nSession Level: Beginner, Intermediate, Advanced\n",
        "type": "other",
        "extraInfo": "We would like to request a room for this activity with necessary equipment (tables, projector, stickers, pens); alternatively, a public area easily accessible to all participants with three booths. We also plan to create posters and banners to promote the activity and attract more participants.",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "niamh.leypoldt@sap.com",
                "firstName": "Niamh",
                "lastName": "Leypoldt",
                "company": "SAP",
                "bio": "",
                "hash": "c871866950059ff4db6664c85bb6eaff20be0c0e3b353e6347d58af9b63f7585",
                "photo": true
            },
            {
                "id": "snezhina.velcheva@sap.com",
                "firstName": "Snezhina",
                "lastName": "Velcheva",
                "company": "SAP",
                "bio": "Snezhina Velcheva is a Senior User Assistance Developer on the PTX HANA Design team. AI is her passion, and she is always looking for smarter, faster ways to work — with a habit of automating everything she can.",
                "hash": "561b0700326c0badc50b79cdcca9dc9f954760a82b8db1987aee74de128e0b2e",
                "photo": true
            },
            {
                "id": "iman.ahmadpour@sap.com",
                "firstName": "Iman",
                "lastName": "Ahmadpour",
                "company": "SAP",
                "bio": "I'm a UX designer with a technical background, having transitioned from the development world to the design realm. Nowadays, I focus on integrating AI tooling into my daily UX design work, enhancing user experiences with innovative solutions.",
                "hash": "4530f244966c0b1ed7068e836dd375089fb2576b544af8ccfd3e12ebf2999b22",
                "photo": true
            },
            {
                "id": "vasco.alexander.schmidt@sap.com",
                "firstName": "Vasco Alexander",
                "lastName": "Schmidt",
                "company": "SAP SE",
                "bio": "Head of Design, SAP HANA",
                "hash": "22d93019b7f2f68928612d74b6106045b37c8ffcd2d26b0dc6453dcc1797840a",
                "photo": true
            },
            {
                "id": "vivian.nagel@sap.com",
                "firstName": "Vivian",
                "lastName": "Nagel",
                "company": "SAP SE",
                "bio": "I’m a dual student at SAP in the field of Digital Media.\nDuring my 2,5 years at SAP, I’ve had the opportunity to work across five different teams from Marketing, UX-Design, creating prototypes and user flows in Figma, to User Research, where I conducted projects such as an eye-tracking study for my bachelor’s thesis. I also enjoy video editing and spent an international practical phase in Barcelona optimizing email campaigns.\nOutside of work, I love baking and doing sports, so I’m always up for a Calisthenics, Tennis or Padel session on campus😊\n",
                "hash": "6eff5cb228b7fc4a211528b23e79d131a37c8aad9c170e81f293c260067eaf57",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "09:50",
        "endTime": "16:25",
        "location": "room_w3"
    },
    {
        "id": "id-1773304610881-469",
        "title": "How to secure your SAP HANA Cloud",
        "description": "Many organizations moving to SAP HANA Cloud assume that security is simply \"handled by SAP.\" After all, infrastructure is managed, patches are applied automatically, and the platform meets enterprise-grade compliance standards. But this assumption, comfortable as it may be, is one of the most dangerous misconceptions in cloud adoption today.\n\nThis session takes a direct, practical look at SAP HANA Cloud security through the lens of real customer projects. Drawing on more than a decade of HANA experience, spanning on-premise deployments, hybrid landscapes, and fully cloud-based environments, the talk unpacks four of the most common security myths that still cause real problems in production systems.",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "anna.hartmann@in4md-service.de",
                "firstName": "Anna",
                "lastName": "Hartmann",
                "company": "in4MD Service GmbH",
                "bio": "Anna brings expertise from over a decade of working with SAP HANA databases. Since 2017, she has been actively serving as the spokeswoman for the DSAG working group 'HANA Operations,'' sharing her knowledge and experiences with the community. She is also the author of the SAP Press book 'SAP HANA Administration.'",
                "hash": "6a59537ec8bcc75741e7d20157fc0c37582da3feb61fbeca5d62e6066f264836",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "15:25",
        "endTime": "15:50",
        "location": "room_w1"
    },
    {
        "id": "id-1773331566604-62",
        "title": "SAP Reimagined Certifications for SAP HANA - What’s in it for me?",
        "description": "The SAP Reimagined Certification program changed everything we know about SAP certifications. SAP moved away from 80 theoretical exam questions to a new practical exam setup that is designed to reflect day-to-day project work. The SAP HANA certifications are affected by this change as well.\nIn this spot talk I will explain what is new for the SAP Certified - Database Administrator - SAP HANA (C_DBADM) and SAP Certified - Data Engineer - SAP HANA (C_HAMOD) certification and the Stay Certified assessments for SAP HANA.",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "henricus.bouten@sap.com",
                "firstName": "Henricus",
                "lastName": "Bouten",
                "company": "SAP",
                "bio": "I’ve spent more than three decades immersed in the SAP ecosystem, witnessing firsthand the shifts that shaped the industry. For the last 15+ years, SAP HANA has been my world; as the owner of the SAP HANA Administration courses and tcertification, I’m committed to empowering the next generation of admins.\n\nWhen the SAP laptop closes, the soldering iron comes out. At home I’m Linux-only advocate, only using Windows to let in fresh air. A re-collector of Commodore computers I owned in the past. Whether I’m deep in a restoration project or firing up my C64 Ultimate Founders Edition, I find my balance in the perfect mix of cutting-edge enterprise tech and classic 8-bit heritage.",
                "hash": "6aae7c634953c54ead4697879981622685b55b7e8e60a35ca989866fc12a45fc",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "16:00",
        "endTime": "16:25",
        "location": "audimax"
    },
    {
        "id": "id-1773349703177-907",
        "title": "The Role of Indexes in SAP HANA Performance",
        "description": "this session explains how indexes influence SAP HANA performance, when it makes sense to create an index, and the distinctions between index types. Through practical examples, attendees will see how different indexing approaches affect query speed, data retrieval, and resource usage in real-world scenarios.",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "kutbettin.baran@sys.aok.de",
                "firstName": "Kuto",
                "lastName": "Baran",
                "company": "AOK Systems GmbH",
                "bio": "I focus on HANA performance, supporting our customers through troubleshooting and analysis. Beyond the technical work, I enjoy sharing experiences and learning together with the community in workshops and presentations.",
                "hash": "49ff36d8f0677e813b626b6acebcaec5edaf610a981c83ca8408009951bc040c",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "13:00",
        "endTime": "13:25",
        "location": "audimax"
    },
    {
        "id": "id-1773396472377-852",
        "title": "Combining AI Agents with the power of SAP HANA Predictive Analysis Library",
        "description": "Discover how to enhance AI agents with SAP HANA's embedded machine learning capabilities. In this session, you'll learn to equip code-based AI agents with predictive models built using the SAP HANA Predictive Analysis Library. See how to integrate custom machine learning models as agent tools, empowering your agents to derive insights from your data and make smarter, data-driven decisions. The technology stack of this agent includes SAP BTP, SAP HANA Cloud and the Python SDKs for both SAP HANA and the Generative AI Hub.",
        "type": "presentation_long",
        "extraInfo": "Any of the session types would work for this talk; we can adjust it accordingly :)",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "nora.von.thenen@sap.com",
                "firstName": "Nora",
                "lastName": "von Thenen",
                "company": "SAP SE",
                "bio": "Nora von Thenen is a Developer Advocate at SAP specializing in AI, with a Master's in Computer Science and Engineering. Since joining SAP in 2017, she has made it her mission to turn complex AI concepts into something developers can actually build with. Through hands-on workshops, CodeJams, and as a speaker at major tech events, including the Developer Keynote at SAP TechEd, she is committed to helping developers make the most of AI. ",
                "hash": "c6b8a044674f641322e0fc6ed8152c6685d7b479030d6585b93f43aab760e53f",
                "photo": true
            },
            {
                "id": "witalij.rudnicki@sap.com",
                "firstName": "Witalij",
                "lastName": "Rudnicki",
                "company": "SAP Polska Sp. z o.o.",
                "bio": "Witalij Rudnicki (aka Vitaliy Rudnytskiy) is a Developer Advocate at SAP. He specializes in Big and Fast Data, AI/ML, and Analytics.",
                "hash": "ef6c52f753829fa0e2d0ce1d498b5f90c5cb53048a40b36586ef16b7ed5960fc",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "9:50",
        "endTime": "10:35",
        "location": "audimax"
    },
    {
        "id": "id-1773398365690-567",
        "title": "Adaptive Dictionary Scan in HEX: Smarter Column Store Queries in SAP HANA",
        "description": "The HANA Execution Engine (HEX) is the modern SQL processing engine designed to deliver\nhigh performance and scalability for SAP HANA workloads. Over the past years, HEX has\nexpanded its capabilities and has become the default engine for SAP HANA Cloud.\n \nWith SAP HANA Cloud 2025.QRC4 the adaptive dictionary scan has been introduced to the\ncolumn store table scan in HEX as another mechanism for more adaptive filter predicate\nevaluation to further improve performance of query plans with changing query parameters\non a skewed data distribution.\n \nIn this session, we explain the various access paths into the column store data structures,\nand introduce the motivation and concept of the adaptive dictionary scan.\nWe will discuss how it integrates with other runtime adaptive mechanisms and what benefits\ncan be expected.\n \nThe session will cover:\n- A short technical deep dive into the processing of a search on a column store table\n- What role do the actual data distribution and query parameters play\n- How do adaptive mechanisms improve query performance\n- Practical guidance for understanding how a query has been processed by analyzing the query plan\n \nJoin us to learn how the adaptive dictionary scan completes the runtime adaptivity in the column\nstore table scan in the continuous evolution of SAP HANA's query processing technology.",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "oliver.horn@sap.com",
                "firstName": "Oliver",
                "lastName": "Horn",
                "company": "SAP SE",
                "bio": "Equipped with more than 10 years of SAP HANA column store table search experience.",
                "hash": "df6ee634a0e15683dd44995ed66e8d97f62b246a70010a35c493e39b75694236",
                "photo": true
            },
            {
                "id": "cheng-lun.li@sap.com",
                "firstName": "Cheng-Lun",
                "lastName": "Li",
                "company": "SAP SE",
                "bio": "A normal software engineer",
                "hash": "fff30c70bbea44b97371d15246a1b92ca989b81beac7fdde8d2ce12320e4365d",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "11:35",
        "endTime": "12:00",
        "location": "audimax"
    },
    {
        "id": "id-1773410159317-233",
        "title": "The Hidden Data Science Platform Inside SAP HANA",
        "description": "SAP HANA is more than a high-performance enterprise database. It also offers built-in capabilities for advanced analytics and machine learning directly where business data lives.\nThis session explores how SAP HANA supports data science through PAL, APL, and embedded ML scenarios. It shows when in-database machine learning makes sense, when external ML platforms are better, and how both can be combined in modern AI architectures.\nKey Takeaways:\nUnderstand SAP HANA’s built-in machine learning capabilities\nLearn when to use HANA ML versus external ML platforms\nExplore architecture patterns for enterprise AI workflows",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "marla.ellinger@sapfioneer.com",
                "firstName": "Marla",
                "lastName": "Ellinger",
                "company": "SAP Fioneer",
                "bio": "I'm a SAP AI Data Engineer at SAP Fioneer and a SAP Mentor with over 10 years of hands-on experience. My current playground involves SAP Business Data Cloud (BDC), BTP, SAP HANA Cloud, and SAP Business AI. ",
                "hash": "8e67c500c4ec404b0ab078480f2a7b5eb6e899ea7f671139dcc7fc25c08b2336",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "11:00",
        "endTime": "11:25",
        "location": "room_w1"
    },
    {
        "id": "id-1773411650077-951",
        "title": "Real-time Data Integration and Observability",
        "description": "1) FeRDI : Real-time data repository using SAP HANA Cloud updated by raw data tables from all transactional systems continuously. This scalable solution is the primary source for analytical and some transactional systems, ensuring access to current information. \nSAP Datasphere exposes HANA Cloud &amp; Business Warehouse  data to cloud analytical tools without persistent storage. \nDatasphere to provide not only raw transactional tables (such as VBAK and VBAP), but also Foundational Data Products representing business concepts such as Sales Orders.\n\n2) Near Real-Time Data Observability with dbt and Apache Airflow\nBecause FeRDI integrates enterprise data in real time, it enables near real-time data observability. Using dbt and Apache Airflow, ZEISS will run operational data quality checks that detect inconsistencies as data enters the platform and notify data creators to correct issues at the source (MVP in progress)\n\nBenefits:\nMinimizes bad data exposure\nReduces costly downstream corrections\nCreates immediate feedback loops for faster issue resolution\n\nSession Level: Intermediate\n\nKey Takeaways\nEnable real-time data accessibility from all transactional systems in a single platform\nEnd-to-end data observability across the enterprise data landscape",
        "type": "presentation_long",
        "extraInfo": "We can show demos\nWe are open to a another session format, but given that the topic is a bit complex with the non-SAP tools over HANA Cloud, would be difficult to reduce the time.",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "kush.kashyap@zeiss.com",
                "firstName": "Kush ",
                "lastName": "Kashyap",
                "company": "ZEISS Group",
                "bio": "BI Architecture &amp; Integration Lead at Carl Zeiss AG",
                "hash": "c4f91923ac58b76b922eaa83116236668551b78b445535130750c340b64f9842",
                "photo": true
            },
            {
                "id": "jacob.pribil@zeiss.com",
                "firstName": "Jacob",
                "lastName": "Pribil",
                "company": "ZEISS Group",
                "bio": "I am a motivated and curious person with a strong interest in technology and software development. I enjoy solving problems and finding ways to make processes more efficient. Currently we are developing an automated application for executing test cases and assessing data integrity. This application should help save time, reduce manual work, and improve the reliability of source data",
                "hash": "3ec0065d45074f98d4ca756f5f2d2fe0130a86ae870b69db72996a9a1d3fef91",
                "photo": true
            },
            {
                "id": "ashish.yadav@zeiss.com",
                "firstName": "Ashish Singh",
                "lastName": "Yadav",
                "company": "ZEISS Group",
                "bio": "I’m an SAP Architect with 10+ years of experience working with SAP HANA and enterprise data platforms. I’ve helped organizations design efficient data products, improve performance, and deliver real-time insights. I enjoy breaking down complex topics into practical concepts and sharing real-world experiences with the community.",
                "hash": "d4ebae44b2f8831c196a8d1ddf17c9afb42efcbed3ef4c75ebe183ed26ad69cb",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "14:05",
        "endTime": "14:50",
        "location": "audimax"
    },
    {
        "id": "id-1773433941283-20",
        "title": "From Data to Meaning- Grounded AI with SAP HANA Cloud Vector Engine",
        "description": "In this session, we explore how SAP HANA Cloud Vector Engine enables grounded AI using vector embeddings and semantic search. We will see how enterprise data can be transformed into meaningful context for RAG applications. ",
        "type": "presentation_short",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "nil@mindeed.io",
                "firstName": "Nil",
                "lastName": "Peksen",
                "company": "Mindeed B.V",
                "bio": "Nil Peksen is a freelance SAP Data &amp; Analytics Architect with two decades of experience in the SAP ecosystem. In a world where AI is changing everything, she believes the real value lies in grounding it with the right data and In this talk, she walks through how SAP HANA Cloud Vector Engine enables exactly that, turning raw enterprise data into meaningful, context aware AI.",
                "hash": "1f22b3c23a08ff816b8a6183a9f3caab823eeec942be318b83a29fbea2bcda17",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "11:35",
        "endTime": "12:00",
        "location": "room_w1"
    },
    {
        "id": "id-1774941808252-960",
        "title": "From Bold Promises to Operational Reality – A Community-Driven Journey",
        "description": "SAP HANA: From Bold Promises to Operational Reality – A Community-Driven Journey\n\nWhen SAP HANA was first introduced, it promised a world of dramatically reduced complexity and a new simplicity in database operations—but reality turned out to be far more nuanced and exciting. This keynote takes you on a personal as well as a customer-driven journey from early fascination and community-driven experiences to running mission-critical global landscapes at scale. \nThrough real-world insights from the customer perspective—covering adoption, architecture, performance, automation, and continuous evolution—you’ll discover how HANA reshaped not just technology, but the role of the people behind it.",
        "type": "keynote",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "christian.braukmueller@evonik.com",
                "firstName": "Christian",
                "lastName": "Braukmüller",
                "company": "Evonik Industries AG",
                "bio": "Fascinated by the energy, openness, and empathy of the global SAP community, Christian actively contributes as an SAP Mentor, frequent conference speaker at events such as SAP TechEd, DSAG and Community driven events.\nFor him, the community is more than a network—it’s a space for reflection, challenge, and continuous growth alongside some of the brightest minds in the field. \nWe all and SAP wouldn't be where they are without this spirit of customers, partners and SAP employees sharing there toughts in fruitful discussions.\nHis journey with SAP HANA began early, working as an independent consultant, helping customers shape and implement their individual HANA strategies—long before many organizations fully realized its potential - or before they just had to make the step to finally get on S/4HANA.\n\nToday, Christian leads an SAP Landscape Architecture team at Evonik,\nThis team is responsible for SAP HANA, hybrid architectures (On-Premise &amp; SAP BTP), automation, and integration. His focus is on building resilient, future-ready SAP environments that bridge innovation with real-world business value.\nEvonik presented their SAP strategy at the last DSAG Userconference (see link)\n\nWhether interacting with SAP as a Customer, DSAG Spokesman, SAP Mentor, organizing community events, speaking on stage, or engaging in peer exchange, Christian remains a community participant at heart—firmly convinced that collaboration is the fastest path to reasonable adoption and innovation.",
                "hash": "30d0214c8838c80e6beb4e387d9226d5b65290a3d0e84f8c3d6448a04e3a0db1",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "9:00",
        "endTime": "9:40",
        "location": "audimax"
    },
    {
        "id": "id-1774942342225-84",
        "title": "Closing Key-Note: HANA at 15: Maturity, Modernization, and the AI Era ",
        "description": "For over 15 years, SAP HANA has been the high-performance engine under the hood of the world’s most critical business processes. But as we move into 2026, the engine is evolving into the brain of the business. This presentation explores the shifting landscape of SAP HANA, moving beyond its role as the foundation of S/4HANA to its emergence as a standalone, agent-ready data platform. We will look at the transition from XSA to BTP and how modern tooling like VS Code is democratizing HANA development. Finally, we’ll discuss the \"memory\" of AI. How HANA ML, Knowledge Graph, and long-term history are turning the database into a living context for the next generation of business applications.",
        "type": "keynote",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "thomas.jung@sap.com",
                "firstName": "Thomas",
                "lastName": "Jung",
                "company": "SAP Labs, LLC",
                "bio": "I started as an ABAP developer nearly three decades ago. Over the years, I’ve worn a lot of SAP hats: developer, product expert, book author, and now Head of Developer Advocacy. What ties it all together? Helping other developers make sense of SAP’s ever-evolving tech stack.\n\nThese days, I lead a team focused on making life a little easier for SAP developers. We create tutorials, blog posts, videos, sample code, and show up at in-person events, all aimed at cutting through the noise and helping you actually build things. No fluff. Just tools and content that make you more effective.",
                "hash": "d190d3884bb7f2d69a23296b5c39ae9d178990d97bde311e80cb258d90e50090",
                "photo": true
            },
            {
                "id": "witalij.rudnicki@sap.com",
                "firstName": "Witalij",
                "lastName": "Rudnicki",
                "company": "SAP Polska Sp. z o.o.",
                "bio": "Witalij Rudnicki (aka Vitaliy Rudnytskiy) is a Developer Advocate at SAP. He specializes in Big and Fast Data, AI/ML, and Analytics.",
                "hash": "ef6c52f753829fa0e2d0ce1d498b5f90c5cb53048a40b36586ef16b7ed5960fc",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "16:40",
        "endTime": "17:20",
        "location": "audimax"
    },
    {
        "id": "id-1775060242937-366",
        "title": "Coffee Break",
        "description": "Time to network",
        "type": "catering",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "displayStartTime": "10:30",
        "startTime": "10:40",
        "endTime": "11:00",
        "location": "canteen"
    },
    {
        "id": "id-1781012262388-636",
        "title": "HC Performance &amp; Scalability: Inside the SAP–Intel Co-Engineering Journey",
        "description": "SAP HANA Cloud Performance &amp; Scalability: Inside the SAP–Intel Co-Engineering Journey\nSAP and Intel are jointly driving continuous innovation to advance SAP HANA Cloud performance and scalability, enabling enterprises to process ever-growing data volumes with higher efficiency and predictable performance at scale. In this session, we provide an inside look into the co-engineering efforts that translate directly into measurable gains across compute efficiency, memory utilization, and system scalability.\n\nWe will share concrete examples of jointly developed optimizations targeting real-world enterprise workloads, illustrating how customers can accelerate both transactional and analytical processing while maintaining consistent performance under demanding conditions. These optimizations leverage key Intel architecture capabilities, including Intel® AVX-512, Intel® AMX, and Intel® TSX, to maximize throughput, improve parallelism, and enhance efficiency for modern data and AI workloads. A key focus of this session is the ability of SAP HANA Cloud to scale seamlessly across a wide spectrum of deployment sizes—from compact instances with as few as 2 vCPUs to large-scale configurations with up to 12 TB of memory—while delivering consistent and predictable performance characteristics. In addition, we will highlight the SAP Natural Language Processing (NLP) service and demonstrate how developers benefit from running SAP NLP on Intel-optimized platforms, showcasing improvements in performance, efficiency, and responsiveness for AI-driven applications.\n\nJoin us to gain deeper technical insight into how SAP and Intel co-innovate to optimize SAP HANA Cloud, and how these advancements empower developers with high-performance infrastructure for next-generation data processing and AI services.\n",
        "type": "presentation_long",
        "extraInfo": "Intel has applied to become a platinum sponsor for HANA Tech Con 2026",
        "accepted": true,
        "confirmed": true,
        "speakers": [
            {
                "id": "jan.krueger@intel.com",
                "firstName": "Jan",
                "lastName": "Krüger",
                "company": "Intel Inc.",
                "bio": "I am a technology leader with over 15 years at Intel, specializing in technical strategy, enterprise software, cloud platforms, and partner management. As Technical Account Director for SAP within Intel’s Partner Sales Group, I coordinate global technical programs and align Intel’s technology roadmap with SAP strategy, driving technology integration, joint solution development, and performance optimization across SAP HANA, S/4HANA, SAP BTP, Cloud ERP, and cloud infrastructure.\n\nI have led strategic initiatives including enabling SAP support for Intel’s latest CPU generations, advancing SAP’s early adoption of Intel Optane Technology, and influencing SAP Cloud Infrastructure strategy. My work has been recognized with multiple Intel Achievement Awards for exceeding performance, innovation, and business impact goals.",
                "hash": "1e4c22c53b86356ce163ea0e60f369396e8ba271a4827681f5373e82aba815b4",
                "photo": true
            },
            {
                "id": "thomas.willhalm@intel.com",
                "firstName": "Thomas",
                "lastName": "Willhalm",
                "company": "Intel Inc.",
                "bio": "Thomas Willhalm is a Senior Principal Engineer at Intel, based at SAP’s headquarters in Walldorf, where he has been working for over two decades. Together with his team, he drives the optimization of SAP software to fully leverage Intel hardware platforms. His work spans both enabling current product performance and shaping future architectures through close collaboration and feedback. Over the years, Thomas has contributed to key innovations including Intel AVX-512, Intel Optane persistent memory, and, most recently, CXL-based memory technologies.",
                "hash": "e9320fd3206fbd782726f755da53ad849f8f7975315cfe9f2a91ed9e7ed014d5",
                "photo": true
            }
        ],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "9:50",
        "endTime": "10:35",
        "location": "room_w1"
    },
    {
        "id": "id-1742910586692-523",
        "title": "Lunch Break",
        "description": "Different Lunch options will be served at the nearby canteen",
        "type": "catering",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "12:00",
        "endTime": "13:00",
        "location": "canteen"
    },
    {
        "id": "id-1742911472729-852",
        "title": "Coffee Break",
        "description": "Small snacks will be served.",
        "type": "catering",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "14:50",
        "endTime": "15:20",
        "location": "canteen"
    },
    {
        "id": "id-1750154514911-756",
        "title": "Meet the Expert",
        "description": "General Slot for Expert Corners in the 1 Floor (Lobby/Atrium)",
        "type": "expert_corner",
        "extraInfo": "",
        "accepted": true,
        "confirmed": true,
        "speakers": [],
        "associatedSpeakers": "",
        "presentationLinks": [],
        "startTime": "09:50",
        "endTime": "16:25",
        "location": "experts_1"
    }
]
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
 * CONFERENCE CLOCK
 */
//--------------------------------------------------------------------------------------------------
const CONFERENCE_TIME = Date.parse('2026-07-16T09:00:00.000+02:00');
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

    let clock = document.getElementsByClassName('clock-container');
    if (clock.length > 0)
        updateTime();
});
//--------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.htec-burger-menu');
    const menu = document.getElementById('site-menu');

    if (!burger || !menu) return;

    // Initial state
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('data-menu-collapsible', 'true');

    function openMenu() {
        menu.classList.add('is-open');
        burger.classList.add('is-active');
        burger.setAttribute('aria-expanded', 'true');

        // Prevent background scroll
        document.documentElement.classList.add('nav-open');

        // Focus first link for accessibility
        const firstLink = menu.querySelector('a');
        if (firstLink) firstLink.focus();
        trapFocus(true);
    }

    function closeMenu() {
        menu.classList.remove('is-open');
        burger.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
        document.documentElement.classList.remove('nav-open');
        trapFocus(false);
    }

    function toggleMenu() {
        const isOpen = burger.getAttribute('aria-expanded') === 'true';
        isOpen ? closeMenu() : openMenu();
    }

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            burger.focus();
        }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (burger.getAttribute('aria-expanded') === 'true') {
            if (!menu.contains(e.target) && !burger.contains(e.target)) {
                closeMenu();
            }
        }
    });

    // Simple focus trap while menu is open
    let focusable = [];
    function trapFocus(enable) {
        if (!enable) {
            document.removeEventListener('keydown', handleTab);
            return;
        }
        focusable = Array.from(
            menu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
        );
        if (focusable.length) {
            document.addEventListener('keydown', handleTab);
        }
    }

    function handleTab(e) {
        if (e.key !== 'Tab') return;
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});
//--------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // selects and stores the deferred elements
  const deferredElements = document.querySelectorAll(".deferred");

  // creates the observer
  const elementObserver = new IntersectionObserver(
    (entries, observer) =>
      // callback function
      {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("deferred");
            observer.unobserve(entry.target);
          }
        });
      },

    // properties of the observer
    {
      root: null,
      rootMargin: "200px 0px",
      threshold: 0,
    }
  );

  // starts observing the deferred elements
  deferredElements.forEach((element) => elementObserver.observe(element));

  // Fade-in on scroll for sections
  const fadeInSections = document.querySelectorAll(".fade-in-section");
  if (fadeInSections.length > 0) {
    const fadeObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.1,
      }
    );
    fadeInSections.forEach((el) => fadeObserver.observe(el));
  }

  // Staggered fade-in for impressions gallery items
  const galleryItems = document.querySelectorAll(".htec-impressions-gal > div");
  if (galleryItems.length > 0) {
    const galleryObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -30px 0px",
        threshold: 0.05,
      }
    );
    galleryItems.forEach((el) => galleryObserver.observe(el));
  }
});
