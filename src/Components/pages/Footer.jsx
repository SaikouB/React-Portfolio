export default function Footer() {
  return (
    <footer className='bg-secondary' style={{ display: "flex", justifyContent: "center", margin: '10px' }}>
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
      <div> &copy; TechFinite. All Rights Reserved</div>
    </footer>
  );
}
