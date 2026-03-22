const PROJECTS = [
    {
        title: 'VitaTrack',
        description: 'A medical-oriented application that analyzes food contents using LLMs and image recognition, enabling automated dietary tracking, nutritional insights, and recommendation generation.',
        role: 'Led backend architecture and overall system design. Built and deployed a secure backend and CI/CD pipeline with automated testing and deployment. Developed infrastructure supporting image ingestion, analysis workflows, and persistent data tracking. Contributed selectively to frontend implementation.',
        time: '10/2024 - 12/2024',
        stack: 'Java, Spring Boot, React Native, AWS, CI/CD',
        links: [
            ['Git', 'https://github.com/RudolphSedlin/VitaTrack'],
        ],
        images: ['/images/VitaTrackLogo.png', '/images/VitaTrackHome.png', '/images/VitaTrackAlternatives.png'],
    },

{
    title: 'Anti-Copy-Paster-Python',
    description: 'A PyCharm plugin that detects copy-paste patterns in real time and recommends structural refactoring through method extraction.',
    role: 'Improved TensorFlow-based prediction models, enhanced preprocessing and refactoring heuristics, and redesigned configuration interfaces for usability and control.',
    time: '10/2023 - 05/2024',
    stack: 'Java, TensorFlow, IntelliJ Platform SDK',
    links: [
        ['Website', 'https://se4airesearch.github.io/AntiCopyPaster_Python_Website_Fall2023/'],
        ['Git', 'https://github.com/SE4AIResearch/AntiCopyPaster_Python_Fall2023'],
    ],
    images: ['/images/ACP.gif', '/images/ACPsettings.png', '/images/advancedsettings.png'],
},

{
    title: 'Phi-Op',
    description: 'A query abstraction layer that separates grouping attributes from aggregate operations, simplifying complex SQL queries and reducing reliance on expensive joins.',
    role: 'Designed and implemented the system end-to-end, including query transformation logic and execution strategy.',
    time: '10/2023 - 12/2023',
    stack: 'Python, SQL, PostgreSQL',
    links: [],
    images: [],
},

{
    title: 'Zenpower3',
    description: 'A Linux kernel driver for exposing hardware telemetry (temperature, voltage, current, power) on AMD Zen processors.',
    role: 'Contributed hardware specifications, validation data, benchmarking, and diagnostics for Zen 3 (Cezanne and Vermeer), improving sensor reporting accuracy and reliability.',
    time: '08/2021 - 10/2021',
    stack: 'C, Linux Kernel, Hardware Diagnostics',
    links: [
        ['Git', 'https://git.exozy.me/a/zenpower3'],
    ],
    images: ['/images/Zenpower.png'],
},

{
    title: 'PublicParkAdventures',
    description: 'A web application for discovering and reviewing public parks with an emphasis on social interaction and detailed park metadata.',
    role: 'Led backend development and contributed to frontend features, including implementation of structured review systems.',
    time: '10/2024 - 12/2024',
    stack: 'Node.js, Express, MongoDB, React',
    links: [],
    images: ['/images/PublicParkAdventuresHome.png', '/images/PublicParkAdventuresNearMe.png', '/images/PublicParkAdventuresParkPage.png', '/images/PublicParkAdventuresReviews.png'],
},

{
    title: 'Ducks In A Row',
    description: 'A task management and scheduling application.',
    role: 'Developed backend services and database architecture.',
    time: '10/2023 - 12/2023',
    stack: 'Node.js, Express, MongoDB',
    links: [
        ['Git', 'https://github.com/hamc24/CS546_fall23_group_17_FP'],
    ],
    images: [],
},

{
    title: 'Android Teletype',
    description: 'An Android messaging application using gRPC and REST to support communication across multiple chatrooms.',
    role: 'Developed core application components as part of an exploratory project focused on communication protocols and mobile systems.',
    time: '11/2024 - 12/2024',
    stack: 'Java, Kotlin, Android, gRPC, REST',
    links: [],
    images: ['/images/AndroidTeletypeChatroom.png', '/images/AndroidTeletypeLandscape.png'],
},

{
    title: 'Zen Alchemist 8086',
    description: 'A custom 16-bit processor and assembler featuring a structured instruction set with support for arithmetic, control flow, and memory operations.',
    role: 'Designed and implemented both the processor architecture and an accompanying assembler with flexible syntax, label resolution, and support for structured program definition. The ISA was inspired by early x86 systems while simplifying and extending key aspects such as register availability and instruction encoding for clarity and usability.',
    time: '11/2022 - 12/2022',
    stack: 'Java, Assembly, Computer Architecture, Microprocessor Design',
    links: [],
    images: ['/images/ZenAlchemist8086.png'],
},

{
    title: 'PLaF',
    description: 'An interpreter implemented in OCaml featuring a type system, recursion, and object-oriented constructs.',
    role: 'Implemented core language features including type checking and execution semantics.',
    time: '01/2023 - 05/2023',
    stack: 'OCaml, Language Design',
    links: [],
    images: [],
},

{
    title: 'UptimesElectric',
    description: 'A C++ application for evaluating uptime patterns across distributed electric vehicle charging stations.',
    role: 'Designed and implemented the system in its entirety.',
    time: '01/2025',
    stack: 'C++, Simulation',
    links: [],
    images: [],
},
]

export default PROJECTS;
