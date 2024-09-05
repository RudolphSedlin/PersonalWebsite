const QUALIFICATIONS = [
    ['Programming / Scripting Languages',
        [
            ['AArch64', 'I have used AArch64 assembly extensively for Computer Organization coursework, and have also hosted laboratory work on the subject as a Course Assistant on the subject.'],
            ['C', 'I have used C extensively for Systems Programming and Linux kernel programming tasks, and have taught it as a Course Assistant at Stevens Institute of Technology for years, indiciative of my own understanding of the subject as well.'],
            ['C++', 'I have used C++ for Algorithms coursework.'],
            ['Erlang', 'I used Erlang to learn how implement concurrent systems with messages for synchronization.'],
            ['Groovy', 'I experimented with Groovy to better learn scripting with apps running in the JVM.'],
            ['Java', 'My first programming language. Used extensively for Anti-Copy-Paster-Python, where the source-code is entirely in Java.'],
            ['Javascript', 'I used Javascript extensively for various web development projects like Ducks in a Row, as well as this website of course.'],
            ['MATLAB', 'I used MATLAB to program and graph assorted numerical methods, especially as they relate to interpolation and projection.'],
            ['OCAML', 'My functional-language of choice, I used it extensively for implementing an interpreter for OOP language in academic coursework.'],
            ['Python', 'I have used Python in assorted undergraduate Computer Science coursework. I am hoping to use Python substantially more while studying machine learning, as many machine learning tools and frameworks are provided for Python (usually 2.7).'],
            ['R', 'I used R for assorted statistical analysis and graphing in undergraduate entry-level and intermediate statistics.'],
            ['Shell', 'I used the Bourne Again Shell (with other shells like Fish infrequently) for most of my system scripting needs, including automating the grading of assorted homework assignments as a Course Assistant.'],
        ]
    ],

    ['Professional Experience',
        [
            ['Teaching Assistant (January 2022 - May 2024)', 'I have worked as a Teaching Assistant at Stevens Institute of Technology from January 2022 to May 2024. In that time, I have provided assistanceships for courses involving introductory Python, Data Structures, Computer Organization, and Systems Programming. My responsibilities have included development of automated homework grading tools, hosting office hours, hosting laboratory work and recitations, grading, and exam proctoring. In doing so, I developed a methodology for effective communication of a variety of computer science topics of varying difficulties and to varying listeners.'],
        ]
    ],

    ['Web-Stack',
        [
            ['Express.js', 'Used Express extensively for routing and middleware in Ducks in a Row.'],
            ['GraphQL', 'Used GraphQL to enforce API request schema.'],
            ['Handlebars.js', 'Used extensively as a static site generator for Ducks in a Row, as its templating features were sufficient for it.'],
            ['Node.js', 'As is typical for a web-stack, I use Node as a server-side runtime environment for my web development, and NPM for my packaging needs.'],
            ['React.js', 'Used for this website and small miscellanious projects to produce thick-client static sites to avoid repeated network access.'],
            ['Redis', 'Used Redis to accelerate repeated API access with cached results on the server-side.'],
        ]
    ],

    ['Databases',
        [
            ['MongoDB', 'Used as a NoSQL database for Ducks in a Row, where a structured relational database would not be optimal.'],
            ['PostgreSQL', 'Used extensively in my DBMS work to establish relational databases. I am familiar with writing complex OLAP queries. Hosted my own databases on mutliple machines and connected to them remotely via language APIs such as JDBC and PSYCOPG. Wrote a Python script to enable easier aggregation on grouping attributes, a common pitfall of standard SQL query syntax, where multiple joins are required.'],
        ]
    ],

    ['Infrastructure',
        [
            ['Apache', 'Apache is my HTTP server of choice and serves this website.'],
            ['AWS EC2', 'I have used AWS EC2 instance for various hosting needs, including this website.'],
            ['DNS', 'I have interacted extensively with the DNS, including configuration and even remote storage.'],
        ]
    ],

    ['Protocols',
        [
            ['HTTP', 'I am very familiar with HTTP, having written many routers and backends in Express to accomodate the myriad of standard requests and codes.'],
            ['HTTPS', 'Though HTTPS is just HTTP with TLS (formerly SSL and still called SSL often) on a different port, the difficulties of securing SSL certificates from certain vendors makes including it here worthwhile.'],
            ['SMTP', 'I have previously communicated with servers over SMTP entirely manually, which is easy given that like HTTP everything is plaintext.'],
            ['TLS', 'I can configure secure communications over TLS.'],
        ]
    ],

    ['Operating Systems',
        [
            ['Android', 'I have used Android extensively and have a history of Android application development.'],
            ['BSD', 'I have used both FreeBSD and NetBSD for previous hosting projects, typically on AWS EC2 instances. My experience on Linux systems largely carries over here, though of course there are significant distinctions as well.'],
            ['GNU/Linux', 'Used GNU/Linux systems almost exclusively for my desktop and productivity needs since mid-2021 on a multitude of hardware and configurations, after switching away from Windows systems. In this time I have become very well versed with these systems through extensive troubleshooting and bootstrapping on my part, often for my own curiosity. Currently, I use a Fedora instance to host this website, and Arch for most of my desktop and productivity machines. I have organized the Stevens Linux Users Group to further encourage students to learn and utilize Linux systems more on campus. In total, I used the following popular distributions: Arch, Debian, Fedora, Ubuntu.'],
            ['Windows', 'I have used Windows systems for desktop and productivity use prior to switching to Linux systems, going back to Windows 98.'],
        ]
    ],

    ['Software',
        [
            ['Git', 'I use remote and local git repositories for project VCS and backups, as well as for collaboration. I am familiar with the PR and merging process, as well as how to raise and resolve issues on services such as Github, Gitlab, and Gitea.'],
            ['Gradle', 'Gradle was used as the build-system of choice for Anti-Copy-Paster-Python.'],
            ['G-Suite', 'I use G-Suite frequently for managing assorted documents and presentations. In particular, I heavily use Docs and Sheets.'],
            ['IDEs', 'Attached is a list of my favorite to use IDEs in order. <br /> <br /> <ol class="left"> <li class="left"> IntelliJ IDEA is my favorite IDE, with great debugging and building tools built in, as well as basic code generation and autocomplete. It really does live up to its slogan, Java development becomes pleasureful. Additionally, it features graphical interface editors so as to not have to deal with Swing (a fate worse than death). Additional community plugins are available to add on greater functionality, including one I worked on myself. </li> <br /> <li class="left"> Android Studio is really just IntelliJ IDEA with a QEMU Android Emulator bolted on, as well as built-in Kotlin support. Still, its greater specialization and strange defaults ranks it lower for me. </li> <br /> <li class="left"> I have little against PyCharm, mostly against Python. It too belongs to the family of IDEs descended or built on IntelliJ. </li> <br /> <li class="left"> Kate is my text-editor of choice for C and C++ development work. Its fast, simple, features a robust LSP and autocomplete, as well as ample tools for bulk-text manipulation and plugins. A terminal is also available. </li> </ol>'],
            ['Microsoft Office Suite', 'In addition to G-Suite, I also used Microsft Office (especially Word and Excel) for assorted work. I obtained a certification for it some years prior.'],
        ]
    ],

    ['Hardware',
        [
            ['CPUs', 'I have studied and extensively benchmarked and troubleshooted assorted Intel Core Processors such as the Core i9 13900K and AMD Ryzen 9 5950X in both Windows and Linux environments. I have extensively probed the voltage-frequency characteristics of many of these parts, as well as their electrical and thermal properties, in addition to just their performance.'],
            ['GPUs', 'Similarly to CPUs, I have done similar extensive investigation of assorted consumer GPUs such as the Intel Arc A770 LE and AMD Radeon RX 5700XT.'],
            ['Desktop Electronics', 'I have been working with assorted computing hardware since I was 13, and have built and extensively modified many hardware systems. I have grown adept at troubleshooting hardware problems ranging from issues in configuration to electrical and thermal problems as well.'],
        ]
    ],

    ['Other Skills',
        [
            ['Ambiguous Troubleshooting', 'Through the use of rare or exotic hardware configurations on bleeding-edge or unorthodox software configurations. I have developed an aptitude for troubleshooting hardware and software problems with a complete lack of external information that I can consult, and often a lack of information on the issue being echoed by the system itself.'],
            ['Communication', 'I have developed an ability to communicate robust and complex technical topics succinctly to varied listeners.'],
            ['Filesystems', 'I have previously worked with EXT4, exFAT, FAT32, FUSE, NTFS, and ZFS systems.'],
            ['Leadership', 'To develop my leadership and collaboration skills, I officiated and directed the Stevens Linux Users Group. I also took a leading role in projects like Ducks in a Row and Anti-Copy-Paster-Python.'],
            ['Scientific Intuition', 'I have been adept in the empirical sciences for as long as I can remember, have developed a deep understanding on many subjects, and consider it an interdisciplinary strength of mine. This experience provides me with an intuition to judge solutions that are based off physical models or graphs, as well as statistics for those solutions. To this day I still delve deeply into planetary astronomy and astrophotography.'],
            ['Spoken Languages', 'I of course speak English natively, but am also adept in Russian, with more limited proficiency in German and Japanese.'],
            ['Systems Administration', 'Through coursework and my own investigation; I have developed a strong aptitude for benchmarking, scripting, networking (especially so), and troubleshooting of assorted UNIX and BSD systems.'],
            ['Writing', 'Going along with my communication skillset, I am also adept at writing succinct summaries of elaborate concepts, and always fared well in my writing coursework.'],
        ]
    ],
]

export default QUALIFICATIONS;
