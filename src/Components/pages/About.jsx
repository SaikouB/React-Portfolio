/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "./About.css";
import photo from "../../assets/images/Saikou.jpeg";
import mediaQuery from '../../Components/mediaQuery.css'


export default function About() {
  return (
    <div className='aboutme'>
      <img className="image" style={{width: '100px'}} src= {photo} alt="Saikou"/>
      <h1>About Me</h1>
        <p>
          Hello, and WELCOME to my page.
          My name is Saikou and I am a web development student at Upenn.
          My current joob title is a Medical Technologist. 
          I have 9 years of experience in this field. 
          Recently, I have transitioned into being a travelling medical Lab
          proffesional 
          and it has definitely been an exciting experience being able to travel
          to different states and cities meanwhile earning income on the go.
          I have enjoyed my time as a traveller so much that
          I've decided to add a career path to my resume as a fullstack web
          developer.
          Feel free to visit my GitHub or LinkedIn below.
        </p>
    </div>
  );
}
