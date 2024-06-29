const BLOGS = [
    {
        title: 'Future Plans.',
        post: "On the subject of blogging about stuff not strictly related to this portfolio, I have ruminated on future plans and have decided that I can architect seperate webpages for my other hobbies. More specifically, I am considering developing a page in regards to my thoughts on assorted electronics components, especially ones that I have worked with personally. In particular, I wish to discuss with others elements that often get overlooked in typical review or discussion pieces, such as the voltage-frequency characteristics of various parts for more advanced users, their electrical and thermal properties as it relates to assorted usecases, as well as the characteristics of their memory controllers and subsystems. I also wish to consider the design decisions made for these components, such as their microarchitectures, lithography and packaging, configuration, product segmentation, and the contexts for their development.",
        date: 'June 29th, 2024',
        links: [],
        images: [],
    },

    {
        title: 'HTTPS.',
        post: "<p> I promise to blog more than just web-dev news here, soon! That being said, content is now properly centered, so widescreen and especially ultrawide users (like myself, though I generally don't view pages in fullscreen) need not scan their entire FOV for text. </p> <br /> <p> That said, enabling SSL (TLS really) was somewhat more involved. Oftentimes, hosts and domain services provide their own certificate service with themselves as a CA, but I do not purchase domains from AWS Route 53 (despite hosting on AWS), so this is not viable. Self-signing a certifcate with OpenSSL is easy enough (and perhaps this is what CAs themselves do), but I am not a CA so my signature means nothing, and simply scares browsers and users away, how charismatic! </p> <br /> <p> As a result, I ended up using Certbot to get a certificate from 'Let's Encrypt', which simplifies the process so thoroughly that I am unsure if any other solution should even be considered for individual users such as myself. The tutorials on their website is very thorough, and I have attached it here, though there are some notes I would like to make, sorted by order of relevance: </p> <br /> <ol class='left'> <li class='list'> <tab /> The tutorials provided by Certbot insist on installing the Snappack Certbot package, but this is arguably unnecessary, especially if a Snap environment does not already exist. In general, OS package managers are preferable provided they serve up-to-date packages, which they should for most major Linux distributions. </li> <li class='list'> <tab /> At least when hosting on Apache, a seperate SSL mod package is necessary to allow it to serve HTTPS on port 443. The package that allows this should be called 'mod-ssl' for most distributions, and the Apache service should be restarted after it is installed. </li> <li class='list'> <tab /> When running the Certbot command with Apache, it is likely that a virtual host on port 80 does not yet exist (though one should exist on port 443 if mod-ssl is configured properly). This prevents Certbot from verifying that you control the system that your domain points to. Luckily, this can be fixed by adding a configuration file with your domain name (in my case it would be rudolphsedlin.codes.conf) in the httpd conf.d directory, inside of which a VirtualHost specifying just the ServerName is added. </li> </ol> <br /> I should probably make similar notes in regards to how I deployed on AWS, but that is a simpler procedure overall, and therefore less necessary. Perhaps at a later date....",
        date: 'June 26th, 2024',
        links: [
            ['Certbot', 'https://certbot.eff.org/']
        ],
        images: ['/images/certbot.svg'],
    },

    {
        title: 'Feedback and Improvements.',
        post: 'Not keen on resting on my laurels, I have consulted friends and colleagues for suggestions for improvements that could be made to this page in the very short term, and they are as follows: <br />  <br /> <ul class="left"> <li class="list"> <tab /> Fixed the scaling of multimedia (everything should now fit on mobile displays properly, rather than spilling offscreen). </li> <li class="list"> <tab /> Most elements should now be padded, text should not be crammed right up against the edge of the display anymore. </li> <li class="list"> <tab /> The Contact fields have now been turned into flexboxes, so the phone number should not dissasosciate from its bold header anymore under exotic resolutions. </li> <li class="list"> <tab /> The Qualifications page has been consolidated into the About page, and my resume has been removed due to redundancy. </li> <li class="list"> <tab /> Contacts were moved to a new page, as anyone sufficiently interested will invest the extra click. </li> </ul> <br /> These not-so-small changes do not significantly alter the page or the tech stack, keeping it fast but making it much more pleasant. Additionally, HTTPS should also be enabled sometime after this post.',
        date: 'June 25th, 2024',
        links: [],
        images: [],
    },

    {
        title: 'New Blog.',
        post: 'Making a portfolio has given me an excuse to get into blogging on my terms. In truth, I should probably commit more to writing, my imagination is fairly active, but much is lost in assorted day-to-day chaos, and my other online media presence is spartan. Still, this blog will be updated as more developments come in. Commentary on these posts may be on the itenerary, but likely not in the short term, due to other tasks.',
        date: 'June 23rd, 2024',
        links: [],
        images: [],
    },
]

export default BLOGS;
