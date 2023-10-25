// eslint-disable-next-line no-unused-vars
import mediaQuery from '../../Components/mediaQuery.css'


export default function Footer() {
  return (
    <footer
      className=" bg-secondary border border-2 border-bottom border-start-0 border-end-0 border-black"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        paddingTop: "10px",
      }}
    >
      {/* <span style={{ marginRight: '50px'}}>&copy; TechFinite. All Rights Reserved</span> */}
      <a href="https://github.com/SaikouB">
        <img
          style={{ width: "40px", marginRight: "10px" }}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
          alt="GitHub"
        />
      </a>
      <a href="https://www.linkedin.com/in/saikou-balde-593354297/">
        <img
          style={{ width: "40px" }}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg"
          alt="LinkedIn"
        />
      </a>
    </footer>
  );
}
