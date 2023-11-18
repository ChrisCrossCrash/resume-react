import './App.scss'
import Header from './components/Header/Header'
import Item from './components/Item/Item'
import Section from './components/Section/Section'

function App() {
  return (
    <>
      <Header
        name='Christopher Kumm'
        imgUrl='/chris.jpg'
        email='chrislkumm@protonmail.com'
        phone='(952) 245-3771'
      >
        Full-stack developer proficient with a well-rounded knowledge of web
        development, especially React TypeScript, Next.js, and Django Rest
        Framework, seeking a remote position to create impactful web solutions
        with a dynamic team.
      </Header>
      <Section name='Skills' style={{ marginBottom: '2rem' }}>
        <ul>
          <li>React TypeScript (Next.js)</li>
          <li>HTML / CSS / SCSS / JavaScript / TypeScript</li>
          <li>Express.js / Node.js / GraphQL / REST</li>
          <li>Python (especially Django Rest Framework)</li>
          <li>Bash scripting</li>
          <li>Git / GitHub / GitLab</li>
          <li>SSH / VPS / Docker / Linux</li>
          <li>Web Design</li>
          <li>GitHub Actions / GitLab CI/CD</li>
          <li>Making high-performance websites (perfect Lighthouse scores)</li>
          <li>SEO best Practices</li>
          <li>Open source contribution</li>
          <li>Scientific background with a love of learning</li>
        </ul>
      </Section>
      <Section name='Key Projects'>
        <Item
          heading='ChrisKumm.com'
          subheading='Portfolio Website'
          dates='2020 – present'
        >
          <div>
            <p>website: https://www.chriskumm.com</p>
            <p>
              front-end repository:
              https://github.com/ChrisCrossCrash/chriskumm.com-nextjs
            </p>
            <p>
              back-end repository:
              https://github.com/ChrisCrossCrash/chriskumm.com_django
            </p>
          </div>
          <p>
            This is where I showcase my work. The site has a Next.js front end
            and a custom Telegram integration for receiving contact form
            messages. I'm in the final stages of implementing an OpenAI
            API-based ChatBot version of myself, which will help visitors to the
            website learn more about me.
          </p>
        </Item>
        <Item
          heading='MLKSeminars.com'
          subheading='Commercial Website'
          dates='2020 – present'
        >
          <div>
            <p>website: https://www.mlkseminars.com</p>
          </div>
          <p>
            This is a website where electrical industry professionals sign up
            for online or in-person training seminars. The site has a Next.js
            front end and a Django Rest Framework back end. It has email
            notifications for admins and Stripe integration for payments.
          </p>
        </Item>
        <Item
          heading='PlotMaster.ai'
          dates='11/2023'
          subheading='Conversion to Next.js (Freelance)'
        >
          <div>
            <p>website: https://www.plotmaster.ai</p>
          </div>
          <p>
            PlotMaster.ai uses generative AI to automatically create
            personalized and illustrated story books based on user prompts. I
            was commissioned to convert the website's front end to a Next.js
            React TypeScript project, which dramatically improved the
            performance of the site, and decoupled the front end from the
            back-end server.
          </p>
        </Item>
        <Item
          heading='r/Place Blender'
          subheading='Open source 3D data visualization'
        >
          <p>
            This is a set of Open source tools for r/Place data visualization
            with Blender and Python. My work with this project went viral. The
            videos I created with this project received tens of thousands of
            upvotes on Reddit, and 171 stars on GitHub.
          </p>
        </Item>
        <Item
          heading='r/Place GigaPixel Explorer'
          subheading='r/Place 2022 data visualization website'
        >
          <p>
            An open source website for viewing a 3D isometric view of r/Place
            2022 as a gigapixel image. The GitHub repository also contains the
            Python source code used to render the GigaPixel image.
          </p>
        </Item>
      </Section>
      <Section name='Work Experience'>
        <Item
          heading='LulzBot'
          subheading='Full Stack Web Developer (remote position)'
          dates='6/2022 – 10/2023'
        >
          <ul>
            <li>Lead transition from Locomotive CMS to Strapi + Next.js</li>
            <li>Developed a new responsive homepage with 3D graphics</li>
            <li>
              Simplified workflow with Docker Swarm and GitLab CI/CD pipeline
            </li>
            <li>
              Refactored custom Express.js API for integrating Odoo and other
              services
            </li>
            <li>Laid off in industry downturn</li>
          </ul>
        </Item>
        <Item
          heading='Freelance English Teacher'
          subheading='Ankara, Turkey'
          dates='11/2018 – 7/2022'
        >
          <ul>
            <li>CELTA-certified</li>
            <li>
              Lead fun and engaging English speaking classes for large groups of
              students
            </li>
            <li>
              Taught English both in-person and remotely over the COVID-19
              pandemic
            </li>
            <li>
              Coordinated extra-curricular cultural activities with students
            </li>
          </ul>
        </Item>
        <div className='page-break' />
        <Item
          heading='Beckman Coulter'
          subheading='Quality Control Technician'
          dates='8/2016 – 7/2018'
        >
          <ul>
            <li>
              Hired full-time after five-month temporary contract at Beckman
              Coulter in Chaska, MN
            </li>
            <li>
              Tested blood testing supplies using Beckman Coulter Immunoassay
              instruments
            </li>
            <li>Maintained compliance with government regulations</li>
            <li>
              Worked as a key part of a team focused on ensuring quality product
              delivery
            </li>
          </ul>
        </Item>
        <Item heading='Hysitron'>
          <ul>
            <li>
              Testing, troubleshooting, and repairing high-end scientific
              instruments
            </li>
            <li>
              Operating advanced testing equipment, including SEM, laser
              interferometry, and vacuum systems
            </li>
            <li>Developing and improving upon existing testing procedures</li>
            <li>
              Corresponding with customers and business representatives
              regarding repairs
            </li>
          </ul>
        </Item>
        <Item
          heading='Little Six Casino'
          dates='9/2013 – 8/2015'
          subheading='Valet Parking Attendant'
        >
          <ul>
            <li>
              Excellence Award for excellent guest service and exceeding overall
              job expectations
            </li>
            <li>
              Collaborating with others to ensure quick and reliable delivery of
              guest vehicles
            </li>
            <li>
              Using interpersonal skills to foster a positive team environment
            </li>
            <li>
              Recording statistical information to keep track of business needs
            </li>
          </ul>
        </Item>
        <Item
          heading='Personal Trainer'
          subheading='Freelance'
          dates='3/2011 – 8/2013'
        >
          <ul>
            <li>Set SMART goals with clients to reach desired outcomes</li>
            <li>
              Executed strategies with clients to help them reach their goals
            </li>
            <li>Inspired confidence and focus to motivate clients</li>
            <li>Developed personalized plans to implement with clients</li>
          </ul>
        </Item>
      </Section>
      <div className='page-break' />
      <Section name='Education'>
        <Item
          heading='AAS in Nanoscience Technology'
          subheading='Dakota County Technical College, Rosemount, MN'
          dates='8/2013 – 5/2015'
        >
          <ul>
            <li>GPA: 3.93/4.00</li>
            <li>
              Coursework included Thin Films Deposition, Fundamentals of
              Nanotechnology I & II, Elements of Microelectronics Manufacturing,
              Manufacturing Quality Assurance, Nanoelectronics, Statistics,
              Introduction to Materials Characterization, Elements of Micro and
              Nano Manufacturing, and more
            </li>
            <li>
              Built and programmed an Arduino-based DIY spectrometer as a final
              project
            </li>
            <li>Phi Theta Kappa Honors Society</li>
            <li>
              President’s List recognition for having achieved a 3.5 or higher
              GPA in every eligible semester
            </li>
          </ul>
        </Item>
        <Item
          heading='AS in Exercise and Sport Science'
          subheading='Dakota County Technical College, Rosemount, MN'
          dates='5/2010 – 5/2012'
        >
          <ul>
            <li>GPA: 3.76/4.00</li>
            <li>
              Coursework included Human Anatomy and Physiology I & II, General
              Biology, Personal Health and Wellness, Physical Conditioning, and
              more
            </li>
            <li>Phi Theta Kappa Honors Society</li>
            <li>
              Four-time President’s List recognition for having achieved a 3.5
              or higher GPA in a semester
            </li>
          </ul>
        </Item>
      </Section>
    </>
  )
}

export default App
