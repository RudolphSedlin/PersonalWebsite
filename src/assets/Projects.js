const PROJECTS = [
    {
        title: 'VitaTrack',
        description:  'VitaTrack is a medical software for analyzing the contents of foodstuffs using LLMs and image recognition. Simply take a photograph, and have all the relevant food data anaylzed and added for your reflection. It also supports the ability to see cumulative food statistics, get alternative food suggestions, and provide general dietary goals.',
        role: 'Operated as Backend Lead, Project Lead, and Scrum Master. Managed the overall project architecture. Developed and remotely deployed a secure and robust backend and CI/CD pipeline. Contributed to the front-end in places.',
        time: '10/2024 - 12/2024',
        links: [
            ['Git', 'https://github.com/RudolphSedlin/VitaTrack'],
        ],
        images: ['/images/VitaTrackLogo.png', '/images/VitaTrackHome.png', '/images/VitaTrackAlternatives.png'],
    },

    {
        title: 'PublicParkAdventures',
        description:  'Public-Park-Adventures is an interactive web application allows users to access public park information, search for parks, and make in-depth reviews. We placed special emphasis on the social aspects of browsing for parks, as well as specializing in various park details that would make more generic resources like Google Maps less adapted.',
        role: 'Operated as the backend lead and a front-end developer. Laid the foundation for complex user reviews.',
        time: '10/2024 - 12/2024',
        links: [],
        images: ['/images/PublicParkAdventuresHome.png', '/images/PublicParkAdventuresNearMe.png', '/images/PublicParkAdventuresParkPage.png',  '/images/PublicParkAdventuresReviews.png'],
    },

    {
        title: 'Android Teletype',
        description:  'Android Teletype is a small Android app that uses gRPC and REST to exchange text messages between users across multiple disjoint chatrooms.',
        role: 'This was mostly an academic learning exercise, so my development of this is only partial. Still, I am happy with it.',
        time: '11/2024 - 12/2024',
        links: [],
        images: ['/images/AndroidTeletypeChatroom.png', '/images/AndroidTeletypeLandscape.png',],
    },

    {
        title: 'Anti-Copy-Paster-Python',
        description:  'AntiCopyPasterPython is a plugin for Pycharm that tracks the copying and pasting carried out by the developer and suggests extracting duplicates into a new method as soon as they are introduced in the code.',
        role: 'Implemented new Tensorflow prediction models, upgraded refactoring heuristics and preprocessing, and upgraded the user settings interface.',
        time: '10/2023 - 05/2024',
        links: [
            ['Website', 'https://se4airesearch.github.io/AntiCopyPaster_Python_Website_Fall2023/'],
            ['Git', 'https://github.com/SE4AIResearch/AntiCopyPaster_Python_Fall2023'],
        ],
       images: ['/images/ACP.gif', '/images/ACPsettings.png', '/images/advancedsettings.png'],
    },

    {
        title: 'Ducks In A Row',
        description: 'A website used for managing tasks and creating schedules.',
        role: 'Developed backend and database services for Ducks In A Row',
        time: '10/2023 - 12/2023',
        links: [
            ['Git', 'https://github.com/hamc24/CS546_fall23_group_17_FP'],
        ],
        images: [],
    },

    {
        title: 'Phi-Op',
        description:  'Phi-Op an extension for performing a separation between grouping attributes and aggregate functions for SQL, as performing similar queries otherwise requires extensive table-joining, ruining performance and making the query unintuitive.',
        role: 'Developed all components.',
        time: '10/2023 - 12/2023',
        links: [],
        images: [],
    },

    {
        title: 'Zen Alchemist 8086',
        description:  'A 16-bit microprocessor with 16 general-purpose registers capable of common arithmetic operations like multiplication and division, register move, load/store, conditional and unconditional branching, and HALT. It is also packaged with an assembler with support for labels, comments, and premade program data segments.',
        role: 'Developed in entirety. I drew inspiration from early 8086 designs, hoping to make an homage to early x86 processors with few registers and no ISA extensions.',
        time: '11/2022 - 12/2022',
        links: [],
        images: ['/images/ZenAlchemist8086.png'],
    },

    {
        title: 'Zenpower3',
        description:  'Zenpower3 is a Linux kernel driver for reading temperature, voltage(SVI2), current(SVI2) and power(SVI2) for AMD Zen family CPUs, now with Zen 3 support!',
        role: 'Contributed hardware specifications, test data, benchmarking, and diagnostics to the development of Zenpower3 for reporting hardware sensor data on AMD Cezanne and Vermeer processors in Linux.',
        time: '08/2021 - 10/2021',
        links: [
            ['Git', 'https://git.exozy.me/a/zenpower3'],
        ],
        images: ['/images/Zenpower.png'],
    },
]

export default PROJECTS;
