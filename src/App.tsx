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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Header>
      <Section name='Skills'>
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
        <Item heading='PlotMaster.ai'>
          <p>2019-present</p>
          <div>
            <p>website: https://www.mlkseminars.com</p>
          </div>
          <p>TODO: Description</p>
        </Item>
        <Item heading='ChrisKumm.com'>
          <p>2019-present</p>
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
        <Item heading='MLKSeminars.com'>
          <p>2019-present</p>
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
        <Item heading='r/Place Blender'>
          <p>TODO: r/Place Blender</p>
        </Item>
        <Item heading='r/Place GigaPixel Explorer'>
          <p>TODO: r/Place GigaPixel Explorer</p>
        </Item>
      </Section>
      <Section name='Work Experience'>
        <Item heading='LulzBot'>
          <p>TODO: LulzBot</p>
        </Item>
        <Item heading='Freelance English Teacher'>
          <p>TODO: Freelance English Teacher</p>
        </Item>
        <Item heading='Beckman Coulter'>
          <p>TODO: Beckman Coulter</p>
        </Item>
        <Item heading='Hysitron'>
          <p>TODO: Hysitron</p>
        </Item>
        <Item heading='Little Six Casino'>
          <p>TODO: Little Six Casino</p>
        </Item>
        <Item heading='Personal Trainer'>
          <p>TODO: Personal Trainer</p>
        </Item>
      </Section>
      <Section name='Education'>
        <Item
          heading='AAS in Nanoscience Technology'
          subheading='Dakota County Technical College, Rosemount, MN'
        >
          <p>TODO: Degree info</p>
        </Item>
        <Item
          heading='AS in Exercise and Sport Science'
          subheading='Dakota County Technical College, Rosemount, MN'
        >
          <p>TODO: Degree info</p>
        </Item>
      </Section>
    </>
  )
}

export default App
