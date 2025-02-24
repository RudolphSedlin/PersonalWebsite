const BLOGS = [

    {
        title: "RTX5080. A microarchitectural case study.",
        post: "<p>While RTX</p>",
        date: 'January 31st, 2025',
        links: [
            ['Blackwell Whitepaper', 'https://images.nvidia.com/aem-dam/Solutions/geforce/blackwell/nvidia-rtx-blackwell-gpu-architecture.pdf'],
        ],
        images: ['/images/GB203.png', '/images/blackwellSM.png', '/images/AdaVSBlackwell.png'],
    },

    {
        title: 'On Recent Nvidia CES Announcements',
        post: "<p>We will start our hardware discussion with Nvidia's recent CES announcements. Though I take issue with Nvidia as a company, it would be remiss of me to not declare their's as the best CES keynote. There was so much to cover. Much of it was AI-related, so that is to say the section where Nvidia gloats about their FP4 FMA performance (when most models are still trained with FP8) while making threats to report doubled performance on FP2 in the next generation, but there are some things of note in spite of that.</p> <br /> <p> The most interesting thing to me would have to be their wafer-scale processor. It is quite possibly the single largest silicon monolith ever built, the wafer is around a meter in diameter. I initially suspected that Nvidia copied Cerberus's homework, but I later realized that is is impossible. Cerberus relies on just one kind of dice, and built their architecture to resist defects. Therefore, they can use all the dice they print on their wafer, without ever needing to actually dice the thing. By contrast, Nvidia's wafer-scale processor uses many heterogenous dice, notably Grace-Blackwell compute dice, ConnectX NVLink switch dice, and HBM galore on the flanks. This makes me think the wafer was not the original wafer when the dice were being printed, but rather a very large interposer that nvidia used to graft all the dice onto. This is obscene, as prior to this Nvidia was a laggard when it came to advanced chiplet packaging in datacenter, yet here they are pulling off feats of engineering that the competition would not be able to pull off for years afterwards. I shudder to imagine the cost and power consumption of this monstrocity though, and I hope enough of these can be manufactured so that it doesn't just become vaporware.</p> <br /> <p> Equally impressive to the wafer-scale processor is Nvidia's reference PCB for the GB202-based RTX 5090. For the past 3 generations (Ampere, Ada, Blackwell), Nvidia has been attempting to engineer increasingly smaller and denser PCBs for their cards to accomodate greater flow-through area on their reference coolers, starting with the bizarre push-pull configuration on reference Ampere GPUs like the RTX 3090. The theory for this is that flow-through coolers allow hot air to leave much sooner than it otherwise would, allowing fresh cool air to enter faster and making the cooler more efficient. This can allow for smaller heatsinks / higher TDPs / lower noise / lower temperatures without switching to liquid cooling. Smaller heatsinks are particularly noteworthy as they have swollen in recent years to the point of simply not fitting in many systems these days, ruining sales. With Ada, Nvidia even attempted a design for a hypothetical Titan Ada where the PCB was parallel to the motherboard, like a long and thin ruler. This design would've sufficed for Blackwell as well, had the memory interface not been widened. Since the interface was widened from 12-channels to 16, the ruler design could no longer suffice for keeping 16 memory modules sufficiently close to the GPU, and so a form-factor more akin to an MXM module was used, so as to sit between the two fan flowthrough segments. Notice just how DENSE the PCB is. The entire surface is coated in SMDs, empty space is absent! Suddently, Nvidia's 16-pin connector makes alot of sense, though I still protest its use elsewhere. There even had to condense the PCIE slot and use a riser! That said, I can't help but think that at such a steep price an HBM3E setup would've been more effective, delivering greater bandwidth at lower power and space, while offering a higher capacity as well. </p> <br /> <p> The GB202 die itself is very impressive, clocking in at 92 billion transistors. It is almost as large as TU102 (744mm^2 vs 754mm^2), and almost as large as the reticle limit (~850mm^2), despite being manufactured on the very-expensive TSMC N4 node. It is therefore completely reasonable that Nvidia cuts it down from 192 SMs to just 170, as it would be very rare for such a die to yeild flawlessly. That said, the product itself seems very mediocre, as it is still on the same node as AD102 while being only ~20% larger, and so it is approximately 20-30% faster as well with a 20% higher TDP. That is to say, the engineering is excellent, but the product itself strikes me as somewhat underwhelming. </p> <br /> <p> Finally, Nvidia announced DLSS4, which allows for 3 interpolated frames for each rendered frame instead of just 1. Theoretically, this interpolation can be extended indefinitely, and doing so only adds a single native frame's worth of latency.",
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
        post: "Happy 2025! I finally decided to automate deployment of this site! Plus, it inflates my commit history that way by making many small changes, and agreen bars on Github are always indicative of a strong developer! With my education behind me, I have much more time to work on the projects that I like, and have been studying Spring Framework and C++ again. I have decided to dedicate parts of this blog to hardware, as I said I would. I attached some publications that I really enjoy browsing; notably Chips and Cheese, Techpowerup, and former Anandtech. The latter of these no longer publishes new articles, but their past collection is impeccable. I would also strongly urge watching the Youtubers 'TechTechPotato' and 'Level1Techs.",
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
        post: "Done at last. Sadly, I lost some progress on this website as I forgot to produce a backup, so hopefully I recovered much of what was here. I guess I am not very good at blogging though, as there were significant gaps in this blog anyways. Still, I learned much over the recent few months, devoting my studies to scalable and reactive web systems with the likes of Spring for instance. I have also been studying the performance implications of the designs of various low-level systems, delving into a massive rabbit hole on interrupts and scheduling, as well as studying the effects of increasing bandwidth on latency from queueing. In general, these last 4 months have been rather fun, new hardware too, which I always enjoy studying in great depth. In particular, we have seen Intel release both Arrow Lake and Battlemage, and while the former was plagued with memory access latency issues and poor caching, the latter appears very strong, and I hope to toy with one soon. Still, that's it for now.",
        date: 'December 18th, 2024',
        links: [],
        images: [],
    },


    {
        title: 'Content Condensation and Revisiting Old Work',
        post: "This is a change that should've been made a while ago, but better late than never I suppose. All the content is now hidden by detail and summary elements. The page is no longer a giant text dump. Simply add some transition and hover CSS and make it look like more is going on than in reality. Otherwise progress is slow yet steady, I have been revisiting my old algorithms work as further preparation for entry-level interviews, and I forgot how fun it can be. I was definitely a much wiser person at age 19 when I did most of that work than I am now, incalculably wise dare I say, humble even. Beyond that, just more certifications, and some technical assessments.",
        date: 'August 3rd, 2024',
        links: [],
        images: [],
    },

    {
        title: 'Pursuing HackerRanks and Certifications',
        post: "Going into multi-week slumbers and arising from the soil for new activity spontaneously and unpredictably is my passion. That being said, I have been busy on my side projects and working through assorted HackerRank certifications and challenges, so as to grow my capabilities beyond just my preferred tools and projects before the start of my next and final semester. I would recommend them to anyone else browsing, they provide a great platform for evaluating not just standard algorithms questions (though they are also important of course), but also more language or technology-specific assessments and challenges, which appeals to me somewhat more. I am fairly adept at solving algorithms problems anyways, so rote-memorization of solutions is of questionable utility to me.",
        date: 'July 21st, 2024',
        links: [
            ['HackerRank', 'https://www.hackerrank.com/']
        ],
        images: ['/images/HackerRank.svg'],
    },

    {
        title: 'Future Plans',
        post: "On the subject of blogging about stuff not strictly related to this portfolio, I have ruminated on future plans and have decided that I can architect seperate webpages for my other hobbies. More specifically, I am considering developing a page in regards to my thoughts on assorted electronics components, especially ones that I have worked with personally. In particular, I wish to discuss with others elements that often get overlooked in typical review or discussion pieces, such as the voltage-frequency characteristics of various parts for more advanced users, their electrical and thermal properties as it relates to assorted usecases, as well as the characteristics of their memory controllers and subsystems. I also wish to consider the design decisions made for these components, such as their microarchitectures, lithography and packaging, configuration, product segmentation, and the contexts for their development.",
        date: 'June 29th, 2024',
        links: [],
        images: [],
    },

    {
        title: 'HTTPS',
        post: "<p> I promise to blog more than just web-dev news here, soon! That being said, content is now properly centered, so widescreen and especially ultrawide users (like myself, though I generally don't view pages in fullscreen) need not scan their entire FOV for text. </p> <br /> <p> That said, enabling SSL (TLS really) was somewhat more involved. Oftentimes, hosts and domain services provide their own certificate service with themselves as a CA, but I do not purchase domains from AWS Route 53 (despite hosting on AWS), so this is not viable. Self-signing a certifcate with OpenSSL is easy enough (and perhaps this is what CAs themselves do), but I am not a CA so my signature means nothing, and simply scares browsers and users away, how charismatic! </p> <br /> <p> As a result, I ended up using Certbot to get a certificate from 'Let's Encrypt', which simplifies the process so thoroughly that I am unsure if any other solution should even be considered for individual users such as myself. The tutorials on their website is very thorough, and I have attached it here, though there are some notes I would like to make, sorted by order of relevance: </p> <br /> <ol class='left'> <li class='list'> The tutorials provided by Certbot insist on installing the Snappack Certbot package, but this is arguably unnecessary, especially if a Snap environment does not already exist. In general, OS package managers are preferable provided they serve up-to-date packages, which they should for most major Linux distributions. </li> <br /> <li class='list'> At least when hosting on Apache, a seperate SSL mod package is necessary to allow it to serve HTTPS on port 443. The package that allows this should be called 'mod-ssl' for most distributions, and the Apache service should be restarted after it is installed. </li> <br /> <li class='list'> When running the Certbot command with Apache, it is likely that a virtual host on port 80 does not yet exist (though one should exist on port 443 if mod-ssl is configured properly). This prevents Certbot from verifying that you control the system that your domain points to. Luckily, this can be fixed by adding a configuration file with your domain name (in my case it would be rudolphsedlin.codes.conf) in the httpd conf.d directory, inside of which a VirtualHost specifying just the ServerName is added. </li> </ol> <br /> I should probably make similar notes in regards to how I deployed on AWS, but that is a simpler procedure overall, and therefore less necessary. Perhaps at a later date....",
        date: 'June 26th, 2024',
        links: [
            ['Certbot', 'https://certbot.eff.org/']
        ],
        images: ['/images/certbot.svg'],
    },

    {
        title: 'Feedback and Improvements',
        post: 'Not keen on resting on my laurels, I have consulted friends and colleagues for suggestions for improvements that could be made to this page in the very short term, and they are as follows: <br />  <br /> <ul class="left"> <li class="list"> <tab /> Fixed the scaling of multimedia (everything should now fit on mobile displays properly, rather than spilling offscreen). </li> <li class="list"> <tab /> Most elements should now be padded, text should not be crammed right up against the edge of the display anymore. </li> <li class="list"> <tab /> The Contact fields have now been turned into flexboxes, so the phone number should not dissasosciate from its bold header anymore under exotic resolutions. </li> <li class="list"> <tab /> The Qualifications page has been consolidated into the About page, and my resume has been removed due to redundancy. </li> <li class="list"> <tab /> Contacts were moved to a new page, as anyone sufficiently interested will invest the extra click. </li> </ul> <br /> These not-so-small changes do not significantly alter the page or the tech stack, keeping it fast but making it much more pleasant. Additionally, HTTPS should also be enabled sometime after this post.',
        date: 'June 25th, 2024',
        links: [],
        images: [],
    },

    {
        title: 'New Blog',
        post: 'Making a portfolio has given me an excuse to get into blogging on my terms. In truth, I should probably commit more to writing, my imagination is fairly active, but much is lost in assorted day-to-day chaos, and my other online media presence is spartan. Still, this blog will be updated as more developments come in. Commentary on these posts may be on the itenerary, but likely not in the short term, due to other tasks.',
        date: 'June 23rd, 2024',
        links: [],
        images: [],
    },
]

export default BLOGS;
