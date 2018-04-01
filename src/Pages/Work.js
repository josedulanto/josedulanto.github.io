// @flow

import React from "react";
import styled from "styled-components";

import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

import WorkExpansionPanel from "../Components/WorkExpansionPanel";

type Props = {};

const Work = (props: Props) => {
  return (
    <StyledPaper elevation={1}>
      <Typography variant="title" gutterBottom={true}>
        Work
      </Typography>
      <Typography variant="subheading" gutterBottom={true}>
        To all the people who have made me become a better software engineer and
        person THANK YOU.
      </Typography>
      <StyledDivider />
      <WorkExpansionPanel
        employerLogo="/images/logo_onemarket.jpg"
        employerName="OneMarket"
        linkedin="https://www.linkedin.com/company/18347084/"
        position="Ruby Team Lead"
        timeline="Nov 2017 to Present"
        website="https://www.onemarketnetwork.com"
      >
        <div>
          <Typography paragraph={true}>
            Formerly known as Westfield Retail Solutions, OneMarket is reshaping
            the way the world shops through the world’s first retail technology
            network uniting retailers, brands, venues, and partners to
            facilitate collaboration on data insights and implement new
            technologies like natural language processing, AI, and AR at scale.
            At OneMarket I have been in charge of maintaining and implementing
            new features across all the Ruby services including parking,
            payments, customers, accounts, wish lists, etc. just to name a few.
          </Typography>
          <Typography variant="body2">Responsibilities</Typography>
          <Typography paragraph={true} component="div">
            <ul>
              <li>
                Led a team of three Ruby developers off-shore with a ~11hr time
                zone difference in India.
              </li>
              <li>
                Enhanced the search functionality to include additional
                encrypted account data in the search terms.
              </li>
              <li>
                Developed a feature to sync user accounts with Responsys and
                Adestra platforms.
              </li>
              <li>
                Helped migrating services from Heroku to Google Cloud Platform.
              </li>
              <li>
                Developed a feature to identify and fix duplicate images hosted
                in Cloudinary.
              </li>
              <li>
                Worked migrating some services from OneMarket to Westfield UK.
              </li>
              <li>
                Increased the integrity and validity of data by implementing
                complex validations between services.
              </li>
              <li>
                Developed a feature to fix duplicated data on parking service
                based on a specific provider.
              </li>
              <li>
                Worked with rake tasks to schedule post processing and
                synchronization of data.
              </li>
              <li>
                Developed features for internal ruby gems DataJanitor and
                ServiceAPI.
              </li>
              <li>
                Worked with the scrum workflow having standup meetings five days
                a week in the morning with the team on-site and late night with
                the team off-shore.
              </li>
            </ul>
          </Typography>
        </div>
      </WorkExpansionPanel>
      <WorkExpansionPanel
        employerLogo="/images/logo_westfieldrs.jpg"
        employerName="Westfield Retail Solutions"
        linkedin="https://www.linkedin.com/company/westfield-labs"
        position="Ruby Team Lead"
        timeline="Jul 2017 to Nov 2017"
        website="http://www.westfieldretailsolutions.com"
      >
        <div>
          <Typography paragraph={true}>
            Westfield Retail Solutions changed its name to
            <strong> OneMarket</strong>, please see description and
            responsibilities above.
          </Typography>
        </div>
      </WorkExpansionPanel>
      <WorkExpansionPanel
        employerLogo="/images/logo_agralogics.jpg"
        employerName="Agralogics"
        linkedin="https://www.linkedin.com/company/3571533/"
        position="Ruby Team Lead"
        timeline="Mar 2016 to Jul 2017"
        website="http://www.agralogics.com"
      >
        <div>
          <Typography paragraph={true}>
            Agralogics is a collaborative platform developed with Ruby on Rails
            and Angular which enables farm owners manage their farms and set
            activities related to growing, harvesting and processing their
            crops. I’m in charge of developing new features and maintaining the
            Ruby backend and lead our team of eight cool guys to craft an
            amazing product.
          </Typography>
          <Typography variant="body2">Responsibilities</Typography>
          <Typography paragraph={true} component="div">
            <ul>
              <li>
                Led a team of two Angular devs, one DevOps, two Customer
                Onboarding guys, one Android dev and two Ruby on Rails devs.
              </li>
              <li>
                Worked with Ruby On Rails 4 to develop the application backend.
              </li>
              <li>
                Increased speed of database queries in the rails backend by
                abstracting complex ActiveRecord calls into explicit SQL
                queries.
              </li>
              <li>
                Cleaned and refactored the code for better readability and
                reusability.
              </li>
              <li>
                Developed a feature called “Campaign Mailer” to send email
                campaigns to parcel, ranch and farm owners with valuable
                information about their farms. An example campaign is called
                “Irrigation Recommendation” which calculates and recommends
                irrigation dates and the amount of water to apply on parcels
                according to crop type and historic agronomic data.
              </li>
              <li>
                Developed a feature called “Enhanced Irrigation Management”
                which enables owners to establish timeframes on when to apply
                certain profiles with certain attributes to their parcels.
              </li>
              <li>
                Used Amazon EC2 to deploy the application to eight servers, five
                of them were production servers.
              </li>
              <li>
                Used Jenkins for CI to build Docker images to be deployed to AWS
                servers.
              </li>
              <li>Increased the test coverage from 60% to 85%.</li>
              <li>
                Worked with the SCRUM workflow attending design and code reviews
                meetings three times a week.
              </li>
              <li>
                Wrote rake tasks to automate repetitive work via scheduled jobs.
              </li>
              <li>
                Worked closely with the management team to design and implement
                new features according to client needs.
              </li>
              <li>
                Started a new and improved backend application with Rails 5 as
                API only with documented code and TDD applied from the
                beginning.
              </li>
            </ul>
          </Typography>
        </div>
      </WorkExpansionPanel>
      <WorkExpansionPanel
        employerLogo="/images/logo_iseatz.jpg"
        employerName="iSeatz"
        linkedin="https://www.linkedin.com/company/126450/"
        position="Ruby Developer"
        timeline="Oct 2015 to Mar 2016"
        website="http://www.iseatz.com/"
      >
        <div>
          <Typography paragraph={true}>
            iSeatz is a complex set of services which gathers a lot of
            information from world leading air, hotel, car and activity
            providers like Thrifty, Hertz, Dhisco, etc. for digestion,
            customization, addition of business rules before delivering it to
            their final clients. I worked with APIs which had to apply business
            rules and decorate objects, I also worked with connectors (services)
            that received raw information from several providers to be digested
            into data the platform could understand and process.
          </Typography>
          <Typography variant="body2">Responsibilities</Typography>
          <Typography paragraph={true} component="div">
            <ul>
              <li>
                Analyzed and parsed hotel, autos and flight documents sent by
                providers to identify key attributes and map them to Google
                Protocol Buffers ensuring we were encoding structured data
                efficiently and with extensibility in mind.
              </li>
              <li>
                Developed a feature to import raw data send from new providers.
              </li>
              <li>
                Increased the test coverage with RSpec and SimpleCov from 90% to
                93%.
              </li>
              <li>
                Implemented PDF document parser strategies for provider specific
                documents.
              </li>
              <li>
                Implemented functionality to decorate hotel, autos and flight
                prices according to current offers, type of client, season,
                customer region, etc.
              </li>
              <li>
                Documented modules and classes related to document ingestion.
              </li>
              <li>Used vagrant as development environment.</li>
              <li>
                Worked with the scrum workflow attending design and code reviews
                meetings five times a week.
              </li>
            </ul>
          </Typography>
        </div>
      </WorkExpansionPanel>
      <WorkExpansionPanel
        employerLogo="/images/logo_thehybridgroup.jpg"
        employerName="The Hybrid Group"
        linkedin="https://www.linkedin.com/company/843116/"
        position="Full Stack Ruby Developer"
        timeline="Jul 2013 to Aug 2015"
        website="http://hybridgroup.com/"
      >
        <div>
          <Typography paragraph={true}>
            THG is an awesome dynamic company with really interesting projects
            related to robotics and automation. With them I worked on several
            projects like FanVSFan (a blogging network platform for sports
            fans), Offmarket (real estate platform), Kanbanpad (a kanban project
            management platform), TechScene (a hub for ruby communities in
            México) amongst many others which gave me the opportunity to level
            up my skills by moving from backend to frontend to full-stack
            development.
          </Typography>
          <Typography variant="body2">Responsibilities</Typography>
          <Typography paragraph={true} component="div">
            <ul>
              <li>
                Developed a feature called “business room” for Offmarket, a
                place where buyers and sellers could interchange documents,
                pictures and information regarding a property in order to
                negotiate and ultimately close a deal.
              </li>
              <li>
                Developed a feature to migrate the whole FanVSFan project from
                Rails 3 to Rails 4 which involved modifying several thousands of
                files. Even though some compatibility issues with gems arose
                everything went very well, the resulting application was stable
                after the smooth transition.
              </li>
              <li>
                Developed a feature for the Kanbanpad project to accept credit
                card payments via the Braintree API.
              </li>
              <li>
                Worked on a feature for the TechScene project to obtain and
                display flight information via the FlightStats API.
              </li>
              <li>
                Implemented modernizr and masonry JavaScript libraries to
                dynamically organize information with visual punch.
              </li>
              <li>
                Refactored the UI/UX of the Kanbanpad project in order to make
                it more visually appealing to our users.
              </li>
              <li>
                Worked with CSS frameworks like Foundation (Offmarket),
                Bootstrap (TechScene) and custom CSS with Kanbanpad.
              </li>
              <li>
                Deployed projects to Heroku and Engine Yard platforms as a
                service.
              </li>
              <li>
                Worked with the scrum workflow attending design and code reviews
                meetings five times a week.
              </li>
            </ul>
          </Typography>
        </div>
      </WorkExpansionPanel>
      <WorkExpansionPanel
        employerLogo="/images/logo_diverza.jpg"
        employerName="Diverza"
        linkedin="https://www.linkedin.com/company/767383/"
        position="Ruby Developer"
        timeline="Oct 2014 to Jul 2015"
        website="https://www.diverza.com/"
      >
        <div>
          <Typography paragraph={true}>
            Diverza is one of the companies that pioneered in CFDI e-invoicing
            in Mexico by developing applications to automate the whole process;
            some of their clients are major companies in the country generating
            tremendous amounts of transactions. Diverza had several services
            written in Java which they wanted to be slowly migrated to Ruby on
            Rails as well as having a new service that would work as an
            orchestrator to connect the APIs together and handle the flow
            in-between resulting in better response times, availability and
            increased security of transactions.
          </Typography>
          <Typography variant="body2">Responsibilities</Typography>
          <Typography paragraph={true} component="div">
            <ul>
              <li>Implemented Single Sign On and Oauth functionality.</li>
              <li>
                Refactored some services into Rails engines to break the
                monolithic application into smaller reusable parts.
              </li>
              <li>
                Created a parser for XML documents related to how taxes in
                digital documents are filed in Mexico.
              </li>
              <li>
                Created a security related Rails engine to handle authorization
                and authentication.
              </li>
              <li>
                Created a certifications related Rails engine to handle FIEL
                certifications.
              </li>
              <li>
                Implemented a feature to handle the upload of attachments.
              </li>
              <li>Worked with TDD and having a code coverage of 85%.</li>
              <li>
                Worked with the scrum workflow attending design and code reviews
                meetings five times a week.
              </li>
            </ul>
          </Typography>
        </div>
      </WorkExpansionPanel>
      <WorkExpansionPanel
        employerLogo="/images/logo_totaltech.jpg"
        employerName="TotalTech"
        linkedin="https://www.linkedin.com/company/2589196/"
        position="Ruby Developer"
        timeline="Mar 2015 to May 2015"
        website="http://www.totaltech.com.mx/"
      >
        <div>
          <Typography paragraph={true}>
            TotalTech had a marketing client in Puerto Rico that needed a SMS
            gateway to receive and parse text messages to trigger some actions,
            it had integrations with Twilio, storage with MSSQL database and
            deployment to Heroku servers.
          </Typography>
          <Typography variant="body2">Responsibilities</Typography>
          <Typography paragraph={true} component="div">
            <ul>
              <li>Implemented Twilio API to handle SMS messaging.</li>
              <li>
                Integrated MSSQL triggers based on workflows in order to
                automate incoming and outgoing text messages.
              </li>
              <li>Enhanced and refactored code in CRUD methods.</li>
              <li>Implemented client side validation with jQuery.</li>
              <li>
                Enhanced overall UI/UX by converting HTML tables design to DIVs.
              </li>
              <li>Implemented Bootstrap as CSS framework.</li>
              <li>Wrote documentation for all processes and workflows.</li>
              <li>
                Worked with the scrum workflow attending design and code reviews
                meetings five times a week.
              </li>
            </ul>
          </Typography>
        </div>
      </WorkExpansionPanel>
      <WorkExpansionPanel
        employerLogo="/images/logo_anahuac.jpg"
        employerName="Anáhuac University"
        linkedin="https://www.linkedin.com/school/11430803/"
        position="PHP Developer"
        timeline="Jan 2009 to Aug 2010"
        website="https://www.anahuacmayab.mx/"
      >
        <div>
          <Typography paragraph={true}>
            The Anáhuac University is one of the most prestigious Universities
            in Mexico, I studied a Bachelor’s degree in Science in Information
            Technology there and on my last year they offered me a job which
            gave me amongst other things the chance to understand how the
            institution works from the management, staff and teachers side.
            Later I decided to study a MBA there as well, tons of knowledge,
            tons of fun.
          </Typography>
          <Typography variant="body2">Responsibilities</Typography>
          <Typography paragraph={true} component="div">
            <ul>
              <li>
                Worked with the Anahuac Network of Universities to implement
                “Luminis“, which is an educational platform to help alumni and
                professors collaborate in a fully digital academic environment.
              </li>
              <li>
                Installed and managed Joomla! CMS as platform for the main
                website.
              </li>
              <li>
                Developed Joomla! plugins to add functionality not found in
                publicly available ones.
              </li>
              <li>
                Developed a new Joomla! template from scratch for the main
                website which reflected the identity and values of the
                Institution.
              </li>
              <li>
                Developed Ruby scripts to help with tasks such as parsing,
                importing and exporting data.
              </li>
              <li>
                Developed RSVP and registration forms for upcoming academic
                events.
              </li>
              <li>
                Enhanced code in PHP projects implemented by past students,
                teachers and staff.
              </li>
              <li>
                Worked with interns helping them understand topics related to
                programming and problem abstraction.
              </li>
              <li>
                Worked with seasonal projects, events, schools and intranet
                websites.
              </li>
            </ul>
          </Typography>
        </div>
      </WorkExpansionPanel>
      <WorkExpansionPanel
        employerLogo="/images/logo_icy.jpg"
        employerName="Cultural Institute of Yucatán"
        linkedin={false}
        position="Ruby Developer"
        timeline="Sep 2008 to Sep 2009"
        website="http://www.culturayucatan.com/"
      >
        <div>
          <Typography paragraph={true}>
            The Cultural Institute of Yucatán is committed to enriching the
            cultural past with the community of today succeeding in presenting
            diverse cultural programs offering free events to the public each
            week and bringing the opportunity to enjoy famously acclaimed
            international performances. The institute has become an artistic
            center in the heart of the southeast of Mexico.
          </Typography>
          <Typography variant="body2">Responsibilities</Typography>
          <Typography paragraph={true} component="div">
            <ul>
              <li>
                Developed “Help-Link” which is a help desk created for the IT
                department with features such as inventory, issue tracker and
                task management.
              </li>
              <li>Developed client-side forms with validation using jQuery.</li>
              <li>
                Developed a feature to automatically assign tickets according to
                employee’s workload.
              </li>
              <li>
                Implemented a jQuery calendar to keep track of tasks and their
                timeline.
              </li>
              <li>
                Worked with ajax requests to make the application more dynamic.
              </li>
              <li>
                Developed a Knowledge Base with frequently asked questions and
                general information.
              </li>
              <li>
                Designed the frontend of the application with HTML, CSS, Ajax,
                jQuery.
              </li>
              <li>
                Designed email templates for task assignments, reminders and
                notifications.
              </li>
            </ul>
          </Typography>
        </div>
      </WorkExpansionPanel>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)`
  padding: 24px;
`;

const StyledDivider = styled(Divider)`
  margin: 15px 0 !important;
`;

export default Work;
