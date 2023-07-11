import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Expirience(){
<VerticalTimeline>

<VerticalTimelineElement
className="vertical-timeline-element--education"
date="April 2013"
iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
icon={<SchoolIcon />}
>
<h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
<h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
<p>
  Strategy, Social Media
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--education"
date="November 2012"
iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
icon={<SchoolIcon />}
>
<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
<h4 className="vertical-timeline-element-subtitle">Certification</h4>
<p>
  Creative Direction, User Experience, Visual Design
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--education"
date="2002 - 2006"
iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
icon={<SchoolIcon />}
>
<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
<p>
  Creative Direction, Visual Design
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
icon={<StarIcon />}
/>
</VerticalTimeline>
}

export default Education;

{/* <h2>Experience</h2>
<div class="entry-container">
  <div class="entry">
    <h3>Member Of Technical Staff</h3>
    <p>Oracle · Full-time</p>
    <p>Jul 2021 - Sep 2022 · 1 yr 3 mos</p>
    <p>St Petersburg City, Russia</p>
    <ul>
      <li>Developed and improved tests to validate Cloud services, Oracle Linux distributions, and Kernel features</li>
      <li>Collaborated with Developers to debug discovered issues</li>
      <li>Troubleshooting and fixing bugs encountered during testing or test development</li>
      <li>Contributed to QA test framework and workflow improvement for CI type of testing</li>
    </ul>
    <p>Skills: Python · HTML · Scrum · XML · Java · Git · Linux · Bash · Jira</p>
  </div>
  <div class="entry">
    <h3>System Administrator</h3>
    <p>Kelly Services · Full-time</p>
    <p>Jun 2017 - Jun 2021 · 4 yrs 1 mo</p>
    <p>Saint Petersburg, Russian Federation</p>
    <ul>
      <li>Work in Japan Tobacco International, Peterform (Magna), Tikkurila, Heineken, Konecranes.</li>
      <li>Provided 1st and 2nd line support</li>
      <li>Installed, managed, and configured Windows operating systems, applications, as well as network components</li>
      <li>Assistance in developing user documentation/ installation procedure</li>
      <li>System and computer analysis</li>
      <li>Supported remote desktop services</li>
      <li>Provided conference support for online & offline meetings</li>
    </ul>
    <p>Achievements: 
      <p>•	Developed Java app for AD. I used LDAP to connect to AD and took the data of the user for filling an Excel file. That increased the speed of creating account lists with specific data.</p>
    </p>
    <p>Skills: HTML · CSS · Windows · Active Directory</p>
  </div>
</div>
<div class="entry-container">
  <div class="entry">
    <h3>System Administrator</h3>
    <p>Trade company "list" · Full-time</p>
    <p>Jun 2016 - Jun 2017 · 1 yr 1 mo</p>
    <p>Saint Petersburg, Russian Federation</p>
    <ul>
      <li>Technical support for corporate client/server systems of Linux</li>
  <li>Linux</li>
  <li>Preventative maintenance on laptops, printers and any other equipment</li>
  <li>Security monitoring</li>
  <li>Work with My SQL</li>
  <li>Installation and administration of IP cameras, telephony</li>
  <li>Work with router D-Link</li>
</ul>
<p>Skills: Windows · Active Directory</p>
</div>
<div class="entry">
<h3>System Administrator</h3>
<p>Workshop of health · Full-time</p>
<p>Sep 2015 - Mar 2016 · 7 mos</p>
<p>Saint-Peterburg</p>
<ul>
  <li>Hardware and software systems support </li>
  <li>Administration of Windows Server 2008 (AD)</li>
  <li>Administration all local and remote server, backup </li>
  <li>Creating and configuring accounts and access rights in Linux</li>
  <li>Configuration of Cisco and D-Link routers </li>
  <li>Email account administration</li>
  <li>Hyper-V</li>
</ul>
</div>
</div> */}