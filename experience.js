import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Expirience(){
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Oracle, Member of Technical Staff</h3>
    <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
    <p>
    Developed and improved tests to validate Cloud services, Oracle Linux distributions, and Kernel features
    Collaborated with Developers to debug discovered issues
    Troubleshooting and fixing bugs encountered during testing or test development
    Contributed to QA test framework and workflow improvement for CI type of testing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Kelly Services, System administrator</h3>
    <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
    <p>
    Assistance in developing user documentation/ installation procedure
    System and computer analysis
    Supported remote desktop services
    Provided conference support for online & offline meetings

    Achievement:
    Developed Java app for AD. I used LDAP to connect to AD and took the data of the user for filling an Excel file. 
    That increased the speed of creating account lists with specific data.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">'List', System administrator</h3>
    <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
    <p>
    Technical support for corporate client/server systems of Linux
    Preventative maintenance on laptops, printers, and any other equipment
    Security monitoring
    Worked with My SQL
    Installation and administration of IP cameras, telephony
    Worked with network
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">'Masterskaya Zdoroviya', System administrator</h3>
    <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
    <p>
    Hardware and software systems support
    Administration of Windows Server 2008 (AD)
    Administration of all local and remote servers, backup
    Creating and configuring accounts and access rights in Linux
    Configuration of Cisco and D-Link routers
    Email account administration
    Hyper-V
    </p>
  </VerticalTimelineElement>
 </VerticalTimeline>
}

export default Expirience;


// how to change section Experience to  react-vertical-timeline-component? Should I change css or js file?
// <html>
// <head>
//   <title>My Resume</title>
//   <link href="resume.css" rel="stylesheet">
//   <link rel="stylesheet" type="text/css" href="tilda-zero.css">
//   <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
//   <script src="main.js"></script>
//   <script src="particles.js"></script>
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
// </head>
// <body>
//    <div id="particles-js">
//   <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
//   <script src="https://threejs.org/examples/js/libs/stats.min.js"></script>
//   <script src="particles.js"></script>
//   <canvas id="particles-canvas"></canvas>
//   </div>
//   <div id="header-container">
//     <header>
//       <h1>Denis Bandurin</h1>
//     </header>
//   </div>
//   <nav>
//     <ul>
//       <li><a href="#about">About Me</a></li>
//       <li><a href="#experience">Experience</a></li>
//       <li><a href="#education">Education</a></li>
//       <li><a href="#skills">Skills</a></li>
//     </ul>
// </nav>
//   <div id="photo-container">
//     <img src="images/myphoto.png" id="profile-picture" alt="Your Profile Picture">
//     <h1>Denis Bandurin</h1>
//     <h2>Java Developer</h2>
//     <div id="social-media-container">
//       <a href="https://www.linkedin.com/in/denis-bandurin-52251b114/"> <img class="social-media-icon" src="images/linkedIn.jpeg" alt="LinkedIn"></a>
//       <a href="https://github.com/banigoden"> <img class="social-media-icon" src="images/github.png" alt="GitHub"></a>
//       <a href="https://www.facebook.com/denis.bandurin.33"> <img class="social-media-icon" src="images/facebook.jpeg" alt="Facebook"></a>
//       <a href="mailto:banigoden@gmail.com"> <img class="social-media-icon" src="images/gmail.jpeg" alt="Email"></a>
//    </div>
//   </div>
//   <div class="about-me">
//     <p> Hey!</p>
//     <p>I'm Denis Bandurin from Germany.</p>
// </div>
//     <section class="about" id="about">
//       <h2> About Me</h2>
//       <p> With seven years of experience in the IT industry, I decided to transition into Java programming. I gained my initial IT experience in Russia as an administrator from 2015 to 2020 in St. Petersburg. During this time, I acquired valuable knowledge working with Unix systems and developed small applications for various tasks. I further expanded my expertise as a member of the technical staff at Oracle, where I contributed to a cloud project by testing networks and hard disk drivers. I faced the challenge of working with Python instead of Java and successfully adapted to the new language. Additionally, I regularly tested drivers with new kernels on different virtual machines.</p>

//         <p>Since the beginning of 2018, I have been actively studying backend and frontend development on my own. I have completed several courses on the JavaRush and Helsinki University platforms, enhancing my skills in these areas. This year, I focused on learning Kubernetes and Docker to strengthen my proficiency in containerization and orchestration. Currently, I am pursuing the Ultimate AWS Certified Developer Associate 2023 NEW DVA-C02 online course on Udemy. You can explore my portfolio page, which showcases projects I have developed independently.</p>
        
//         <p> My passion lies in professional growth as a Java Developer, both in backend and frontend development, with the ultimate goal of becoming an Architect. Drawing from my experience as a system administrator, I possess a deep understanding of DevOps features and how they can contribute to successful project outcomes. I am highly motivated to apply my knowledge in challenging projects that not only allow me to learn new technologies but also enhance my working experience.</p>
        
//           <p>On a personal level, I am peace-minded and patient. Team games like volleyball, photography and traveling are among my hobbies.</p>
//     </section>
//     <section class="tag experience" id="experience">
//       <h2>Experience</h2>
//       <div class="entry-container">
//         <div class="entry">
//           <h3>Member Of Technical Staff</h3>
//           <p>Oracle · Full-time</p>
//           <p>Jul 2021 - Sep 2022 · 1 yr 3 mos</p>
//           <p>St Petersburg City, Russia</p>
//           <ul>
//             <li>Developed and improved tests to validate Cloud services, Oracle Linux distributions, and Kernel features</li>
//             <li>Collaborated with Developers to debug discovered issues</li>
//             <li>Troubleshooting and fixing bugs encountered during testing or test development</li>
//             <li>Contributed to QA test framework and workflow improvement for CI type of testing</li>
//           </ul>
//           <p>Skills: Python · HTML · Scrum · XML · Java · Git · Linux · Bash · Jira</p>
//         </div>
//         <div class="entry">
//           <h3>System Administrator</h3>
//           <p>Kelly Services · Full-time</p>
//           <p>Jun 2017 - Jun 2021 · 4 yrs 1 mo</p>
//           <p>Saint Petersburg, Russian Federation</p>
//           <ul>
//             <li>Work in Japan Tobacco International, Peterform (Magna), Tikkurila, Heineken, Konecranes.</li>
//             <li>Provided 1st and 2nd line support</li>
//             <li>Installed, managed, and configured Windows operating systems, applications, as well as network components</li>
//             <li>Assistance in developing user documentation/ installation procedure</li>
//             <li>System and computer analysis</li>
//             <li>Supported remote desktop services</li>
//             <li>Provided conference support for online & offline meetings</li>
//           </ul>
//           <p>Achievements: 
//             <p>•	Developed Java app for AD. I used LDAP to connect to AD and took the data of the user for filling an Excel file. That increased the speed of creating account lists with specific data.</p>
//           </p>
//           <p>Skills: HTML · CSS · Windows · Active Directory</p>
//         </div>
//       </div>
//       <div class="entry-container">
//         <div class="entry">
//           <h3>System Administrator</h3>
//           <p>Trade company "list" · Full-time</p>
//           <p>Jun 2016 - Jun 2017 · 1 yr 1 mo</p>
//           <p>Saint Petersburg, Russian Federation</p>
//           <ul>
//             <li>Technical support for corporate client/server systems of Linux</li>
//         <li>Linux</li>
//         <li>Preventative maintenance on laptops, printers and any other equipment</li>
//         <li>Security monitoring</li>
//         <li>Work with My SQL</li>
//         <li>Installation and administration of IP cameras, telephony</li>
//         <li>Work with router D-Link</li>
//       </ul>
//       <p>Skills: Windows · Active Directory</p>
//     </div>
//     <div class="entry">
//       <h3>System Administrator</h3>
//       <p>Workshop of health · Full-time</p>
//       <p>Sep 2015 - Mar 2016 · 7 mos</p>
//       <p>Saint-Peterburg</p>
//       <ul>
//         <li>Hardware and software systems support </li>
//         <li>Administration of Windows Server 2008 (AD)</li>
//         <li>Administration all local and remote server, backup </li>
//         <li>Creating and configuring accounts and access rights in Linux</li>
//         <li>Configuration of Cisco and D-Link routers </li>
//         <li>Email account administration</li>
//         <li>Hyper-V</li>
//       </ul>
//     </div>
//   </div>
//     </section>
//     <section class="tag education" id="education">
//       <h2>Education</h2>
//         <div class="entry-container">
//           <div class="entry">
//             <h3>Volgograd University</h3>
//             <p>Specialist, Security information</p>
//             <p>2010 - 2015</p>
//           </div>
//           <div class="entry">
//             <h3>University of Helsinki</h3>
//             <p>Online training course (2 parts) on Java programming basics</p>
//             <p>2017 – 2018</p>
//             <img src="images/certificate1.jpg" alt="Certificate from University of Helsinki">
//           </div>
//           <div class="entry">
//             <h3>JavaRush</h3>
//             <p>Java programming training course</p>
//             <p>2020</p>
//             <img src="images/certificate2.jpg" alt="Certificate from JavaRush">
//           </div>
//           <div class="entry">
//             <h3>JavaRush</h3>
//             <p>Java programming (practical course)</p>
//             <p>2021</p>
//             <img src="images/java-sertificate.png" alt="Certificate from JavaRush">
//           </div>
//           <div class="entry">
//             <h3>Agile software development</h3>
//             <p>2022</p>
//             <img src="images/certificate3.jpg" alt="Certificate from Agile software development">
//           </div>
//           <div class="entry">
//             <h3>Docker</h3>
//             <p>2023</p>
//             <img src="images/docker-certificate.png" alt="Certificate from Agile software development">
//           </div>
//         </div>
//     </section>
//     <section class="tag skills" id="skills">
//       <h2>Skills</h2>
//     <div class="skills-container">
//     <div class="skill">Java, Python</div>
//     <div class="skill">Spring Boot</div>
//     <div class="skill">Maven/Gradle</div>
//     <div class="skill">REST APIs</div>
//     <div class="skill">Unix</div>
//     <div class="skill">Kubernetes and Docker</div>
//     <div class="skill">Hibernate</div>
//     <div class="skill">CSS</div>
//     <div class="skill">HTML</div>
//     <div class="skill">Selenium Testing</div>
//     <div class="skill">JUnit</div>
//     <div class="skill">Scrum</div>
//     <div class="skill">Git</div>
//     <div class="skill">MySQL, MongoDB</div>
//     <div class="skill">Bash</div>
//   </div>
//     </section>
//   <footer>
//     <p>Copyright 2023</p>
//     <div id="social-media-container">
//       <a href="https://www.linkedin.com/in/denis-bandurin-52251b114/"> <img class="social-media-icon" src="images/linkedIn.png" alt="LinkedIn"></a>
//       <a href="https://github.com/banigoden"> <img class="social-media-icon" src="images/github.png" alt="GitHub"></a>
//       <a href="https://www.facebook.com/denis.bandurin.33"> <img class="social-media-icon" src="images/facebook.jpeg" alt="Facebook"></a>
//       <a href="mailto:banigoden@gmail.com"> <img class="social-media-icon" src="images/gmail.jpeg" alt="Email"></a>
//    </div>
//   </footer>
// </body>
// </html>

// import React from "react";
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';


// That code of react-vertical-timeline-component.
// function Expirience(){
// <VerticalTimeline>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//     date="2011 - present"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<WorkIcon />}
//   >
//     <h3 className="vertical-timeline-element-title">Oracle, Member of Technical Staff</h3>
//     <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
//     <p>
//     Developed and improved tests to validate Cloud services, Oracle Linux distributions, and Kernel features
//     Collaborated with Developers to debug discovered issues
//     Troubleshooting and fixing bugs encountered during testing or test development
//     Contributed to QA test framework and workflow improvement for CI type of testing
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2010 - 2011"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<WorkIcon />}
//   >
//     <h3 className="vertical-timeline-element-title">Kelly Services, System administrator</h3>
//     <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
//     <p>
//     Assistance in developing user documentation/ installation procedure
//     System and computer analysis
//     Supported remote desktop services
//     Provided conference support for online & offline meetings

//     Achievement:
//     Developed Java app for AD. I used LDAP to connect to AD and took the data of the user for filling an Excel file. 
//     That increased the speed of creating account lists with specific data.
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2008 - 2010"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<WorkIcon />}
//   >
//     <h3 className="vertical-timeline-element-title">'List', System administrator</h3>
//     <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
//     <p>
//     Technical support for corporate client/server systems of Linux
//     Preventative maintenance on laptops, printers, and any other equipment
//     Security monitoring
//     Worked with My SQL
//     Installation and administration of IP cameras, telephony
//     Worked with network
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2006 - 2008"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<WorkIcon />}
//   >
//     <h3 className="vertical-timeline-element-title">'Masterskaya Zdoroviya', System administrator</h3>
//     <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
//     <p>
//     Hardware and software systems support
//     Administration of Windows Server 2008 (AD)
//     Administration of all local and remote servers, backup
//     Creating and configuring accounts and access rights in Linux
//     Configuration of Cisco and D-Link routers
//     Email account administration
//     Hyper-V
//     </p>
//   </VerticalTimelineElement>
//  </VerticalTimeline>
// }

// export default Expirience;
