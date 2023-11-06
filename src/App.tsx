import './App.scss'
import Header from './components/Header/Header'
import ItemEducation from './components/ItemEducation/ItemEducation'
import ItemExperience from './components/ItemExperience/ItemExperience'
import ItemProject from './components/ItemProject/ItemProject'
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
        <ItemProject />
      </Section>
      <Section name='Work Experience'>
        <ItemExperience />
      </Section>
      <Section name='Education'>
        <ItemEducation />
      </Section>
    </>
  )
}

export default App
