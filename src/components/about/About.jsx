import './about.css'
import ME from '../../assets/about__me.webp'
import {RxTriangleRight} from 'react-icons/rx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    AOS.init({duration:1000})
  }, []);

  return (
    <section id='about' >
      <h5 data-aos="fade-up">Get To Know</h5>
      <h2 data-aos="fade-up">About Me</h2>

      <div className="container about__container">

          <div className="about__me" data-aos="fade-right">
            <div className="about__me-image">
              <img src={ME} alt="Hugh Ven Kyle Tecson" width={100} />
            </div>

          </div>

          <article className="about__content" >
            <p data-aos="fade-left" data-aos-delay='100'>
              Hello! My name is Hugh Ven Kyle Tecson, and I am a Mobile App developer. 
            </p>
            <p data-aos="fade-left" data-aos-delay='200'>
              Before transitioning into sofware development, I spent one year working as a Design Engineer. While this experience provided valuable skills, I realized that my true passion lay in the world of web development. Determined to shift my career and pursue my dream to be a web developer.
            </p>
            <p data-aos="fade-left" data-aos-delay='300'>
              I am a passionate mobile app developer constantly seeking growth, embracing new technologies, and delivering high-quality solutions. Enthusiastic about the ever-evolving field and excited for future possibilities.
            </p>
            <p data-aos="fade-left" data-aos-delay='400'>
              Some of the technologies I have been working with recently include:
            </p>
            <ul className='about__me-tech text-light' data-aos="zoom-in-up">
              <li><RxTriangleRight className='about__me-tech-icon'/> React Native</li>
              <li><RxTriangleRight className='about__me-tech-icon'/> Expo </li>
              <li><RxTriangleRight className='about__me-tech-icon'/> Tailwind</li>
              <li><RxTriangleRight className='about__me-tech-icon'/> Android & Ios </li>
              <li><RxTriangleRight className='about__me-tech-icon'/> Nodejs & Express</li>
              <li><RxTriangleRight className='about__me-tech-icon'/> MongoDB</li>
            </ul>
          </article>

      </div>
    </section>
  )
}

export default About
