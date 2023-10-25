// eslint-disable-next-line react/prop-types
const NavTabs = ({ currentPage, handlePageSwitch }) => {
  return (
    <ul className="nav nav-tabs bg-white">
      <li className="nav-item">
        <a
					href="#about"
					onClick={() => handlePageSwitch('About')}
					className={currentPage === 'About' ? 'nav-link active bg-secondary' : 'nav-link'}
				>
        About
        </a>
      </li>
			<li className="nav-item">
        <a 
					href="#contact"
					onClick={() => handlePageSwitch('Contact')}
					className={currentPage === 'Contact' ? 'nav-link active bg-secondary' : 'nav-link'}
				>
        Contact
        </a>
      </li>
			<li className="nav-item">
        <a 
					href="#portfolio"
					onClick={() => handlePageSwitch('Portfolio')}
					className={currentPage === 'Portfolio' ? 'nav-link active bg-secondary' : 'nav-link'}
				>
        Portfolio
        </a>
      </li>
			<li className="nav-item">
        <a 
					href="#resume"
					onClick={() => handlePageSwitch('Resume')}
					className={currentPage === 'Resume' ? 'nav-link active bg-secondary' : 'nav-link'}
				>
        Resume
        </a>
      </li>
    </ul>
  );
};

export default NavTabs;
