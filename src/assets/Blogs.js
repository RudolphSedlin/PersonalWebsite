const BLOGS = [

    /*
     *   {                *
     *   title: "RTX5080. A microarchitectural case study.",
     p o*st: "<p>While RTX</p>",
date: 'January 31st, 2025',
links: [
['Blackwell Whitepaper', 'https://images.nvidia.com/aem-dam/Solutions/geforce/blackwell/nvidia-rtx-blackwell-gpu-architecture.pdf'],
],
images: ['/images/GB203.png', '/images/blackwellSM.png', '/images/AdaVSBlackwell.png'],
},
*/

    {
        title: 'On Recent Nvidia CES Announcements',
        post:
        "<div class='blog-post'>" +

        "<h3 class='blog-section'>Overview</h3>" +
        "<p>We will start our hardware discussion with Nvidia's recent CES announcements. Though I take issue with Nvidia as a company, it would be remiss not to acknowledge the strength of their keynote. There was a substantial amount to cover. Much of it was AI-related—primarily centered around FP4 performance claims, despite most models still being trained on FP8—but there were several genuinely interesting engineering developments worth examining.</p>" +

        "<hr class='blog-hr' />" +

        "<h3 class='blog-section'>Wafer-Scale</h3>" +
        "<br />" +
        "<p>The most interesting announcement to me was Nvidia’s wafer-scale system. At first glance, it appears comparable to approaches like Cerebras, but the underlying design is fundamentally different.</p>" +

        "<p>Cerebras achieves wafer-scale integration by using a uniform die replicated across the wafer and designing for defect tolerance, allowing the wafer to remain intact without traditional dicing. Nvidia’s approach, however, is heterogeneous: Grace-Blackwell compute dies, NVLink switch dies, and HBM are all integrated into a single package.</p>" +

        "<p>This strongly suggests the \"wafer\" is not a monolithic compute die, but rather a large interposer onto which multiple dies are mounted. From a packaging perspective, this is an extremely aggressive design. Nvidia has historically lagged in advanced chiplet strategies on the datacenter side, yet this represents a rapid and substantial leap forward.</p>" +

        "<p>The engineering achievement is significant, though it raises obvious questions around cost, yield, and power delivery. Systems of this scale risk becoming economically impractical unless manufacturing and deployment can be sustained at volume.</p>" +

        "<hr class='blog-hr' />" +

        "<h3 class='blog-section'>Reference PCB</h3>" +
        "<br />" +
        "<p>Equally impressive is Nvidia’s reference PCB design for the GB202-based RTX 5090. Over the past three generations (Ampere, Ada, Blackwell), Nvidia has aggressively pursued increasingly compact and dense PCB layouts to enable greater airflow through their flow-through cooling designs.</p>" +

        "<p>The underlying idea is straightforward: by allowing air to pass through the card rather than around it, heat is expelled more efficiently, improving thermals, reducing noise, and enabling higher power envelopes without requiring liquid cooling. This has also helped counteract the growing size of modern GPUs, which has become a practical constraint for system compatibility.</p>" +

        "<p>With Ada, Nvidia experimented with a parallel PCB layout (notably in the unreleased Titan Ada concept), but Blackwell’s expanded memory interface from 12 to 16 channels forced a return to a more compact, centralized design. The result resembles an MXM-style module positioned between two airflow paths.</p>" +

        "<p>The density of the PCB is striking: nearly the entire surface is populated with components, leaving virtually no unused space. In this context, the 16-pin connector becomes more understandable, even if its broader adoption remains questionable. That said, at this price point, it is difficult not to consider whether an HBM3E configuration would have been more efficient, offering higher bandwidth, reduced power consumption, and better spatial utilization.</p>" +

        "<hr class='blog-hr' />" +

        "<h3 class='blog-section'>Die + Product</h3>" +
        "<br />" +
        "<p>The GB202 die itself is impressive, with approximately 92 billion transistors. It approaches the size of TU102 (~744mm² vs ~754mm²) and remains close to reticle limits (~850mm²), all while being fabricated on TSMC N4P. Given this, it is entirely reasonable that Nvidia ships cut-down variants (170 SMs from a theoretical 192), as perfect yields at this scale are unlikely.</p>" +

        "<p>From an engineering standpoint, the design is strong. From a product standpoint, it is less compelling. Remaining on the same node as AD102 while increasing die size by ~20% results in performance gains of roughly 20–30%, accompanied by a similar increase in power consumption. The engineering is excellent; the product itself is more incremental than transformative.</p>" +

        "<hr class='blog-hr' />" +

        "<h3 class='blog-section'>DLSS4</h3>" +
        "<br />" +
        "<p>Nvidia also announced DLSS4, which enables up to three interpolated frames per rendered frame instead of one. In principle, frame generation can be extended further, though practical limits will be dictated by latency and artifact accumulation. While Nvidia claims only a single frame of latency overhead, the perceptual impact will depend heavily on implementation quality and workload characteristics.</p>" +

        "</div>",
        date: 'January 10th, 2025',
        links: [
            ['VideoCardz', 'https://videocardz.com/newz/nvidia-launches-geforce-rtx-50-blackwell-series-rtx-5090-costs-1999'],
            ['TechpowerUp', 'https://www.techpowerup.com/330857/nvidia-geforce-rtx-5090-founders-edition-hands-on-taken-apart'],
            ["Gamer's Nexus", 'https://youtu.be/lyliMCnrANI']
        ],
        images: ['/images/graceblackwell.png', '/images/gb202.png', '/images/doubleflowthrough.jpg', '/images/hbmpower.jpg', '/images/digits.webp', '/images/titanada.png'],
    },

{
    title: 'Automated Deployment and The Path Forward',
    post:
    "<div class='blog-post'>" +
    "<h3 class='blog-section'>Update</h3>" +
    "<p>Happy 2025! I recently automated deployment of this site, enabling faster iteration and more consistent updates. As a side effect, it also results in a healthier commit history, which is never unwelcome.</p>" +
    "<p>With my formal education now complete, I have more time to focus on projects and areas of interest. I have been revisiting the Spring framework and C++, and I plan to expand this blog to include more hardware-focused discussions. Some resources I regularly follow include Chips and Cheese, TechPowerUp, and AnandTech (archived). I would also recommend TechTechPotato and Level1Techs for in-depth coverage.</p>" +
    "</div>",
    date: 'January 10th, 2025',
    links: [
        ['Chips and Cheese', 'https://chipsandcheese.com/'],
        ['TechpowerUp', 'https://techpowerup.com/'],
        ['AnandTech', 'https://www.anandtech.com/'],
        ['TechTechPotato', 'https://www.youtube.com/@TechTechPotato'],
        ['Level1Techs', 'https://www.youtube.com/@Level1Techs/featured']
    ],
    images: [],
},

{
    title: 'Graduated!',
    post:
    "<div class='blog-post'>" +
    "<h3 class='blog-section'>Milestone</h3>" +
    "<p>Done at last. I lost some progress on this site due to a missing backup, though most of it has been recovered. Despite irregular posting, the past few months have been productive. I focused heavily on scalable and reactive systems, particularly within the Spring ecosystem.</p>" +
    "<p>I also spent time exploring low-level performance topics, including interrupts, scheduling, and the relationship between bandwidth and latency under queuing effects. On the hardware side, recent releases such as Intel’s Arrow Lake and Battlemage have been interesting to analyze particularly the tradeoffs in memory latency and cache behavior.</p>" +
    "</div>",
    date: 'December 18th, 2024',
    links: [],
    images: [],
},

{
    title: 'Content Condensation and Revisiting Old Work',
    post:
    "<div class='blog-post'>" +
    "<h3 class='blog-section'>Site</h3>" +
    "<p>The site now uses detail and summary elements to reduce visual clutter and avoid large blocks of text. With some CSS transitions and hover effects, navigation is significantly improved without sacrificing simplicity.</p>" +
    "<p>I have also been revisiting earlier algorithms work in preparation for interviews. It has been a reminder that well-understood fundamentals tend to age better than expected.</p>" +
    "</div>",
    date: 'August 3rd, 2024',
    links: [],
    images: [],
},

{
    title: 'Pursuing HackerRanks and Certifications',
    post:
    "<div class='blog-post'>" +
    "<h3 class='blog-section'>Work</h3>" +
    "<p>I have been working through a range of HackerRank challenges and certifications to broaden my exposure beyond my usual toolset. While standard algorithms problems remain important, platform-specific assessments provide a useful way to evaluate practical proficiency across different technologies.</p>" +
    "</div>",
    date: 'July 21st, 2024',
    links: [
        ['HackerRank', 'https://www.hackerrank.com/']
    ],
    images: ['/images/HackerRank.svg'],
},

{
    title: 'Future Plans',
    post:
    "<div class='blog-post'>" +
    "<h3 class='blog-section'>Planning</h3>" +
    "<p>I have been considering expanding this site to include dedicated sections for other areas of interest, particularly hardware analysis. This would include deeper dives into voltage-frequency characteristics, thermal behavior, memory subsystem design, and broader architectural decisions such as lithography and packaging.</p>" +
    "</div>",
    date: 'June 29th, 2024',
    links: [],
    images: [],
},

{
    title: 'HTTPS',
    post:
    "<div class='blog-post'>" +
    "<h3 class='blog-section'>TLS</h3>" +
    "<p>Enabling HTTPS required more work than expected. Since I do not use AWS Route 53 for domain management, I could not rely on built-in certificate services. Self-signed certificates are easy to generate but not trusted by browsers, making them unsuitable for public use.</p>" +
    "<p>I ultimately used Certbot with Let’s Encrypt, which simplifies certificate provisioning and renewal significantly. While their documentation often recommends Snap-based installation, using the system package manager is often preferable when up-to-date packages are available.</p>" +
    "</div>",
    date: 'June 26th, 2024',
    links: [
        ['Certbot', 'https://certbot.eff.org/']
    ],
    images: ['/images/certbot.svg'],
},

{
    title: 'Feedback and Improvements',
    post:
    "<div class='blog-post'>" +
    "<h3 class='blog-section'>Changes</h3>" +
    "<p>Based on feedback, several improvements were made to layout and usability, including better scaling for mobile, improved spacing, and more consistent layout behavior across resolutions. The Qualifications section was consolidated into the About page, and contacts were moved to a dedicated page.</p>" +
    "</div>",
    date: 'June 25th, 2024',
    links: [],
    images: [],
},

{
    title: 'New Blog',
    post:
    "<div class='blog-post'>" +
    "<h3 class='blog-section'>Start</h3>" +
    "<p>This blog serves as a space for longer-form writing on systems, hardware, and software development. It will be updated as new ideas and projects emerge.</p>" +
    "</div>",
    date: 'June 23rd, 2024',
    links: [],
    images: [],
},
]

export default BLOGS;
