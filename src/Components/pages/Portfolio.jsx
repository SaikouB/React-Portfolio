import filmsearch from "../../assets/images/filmsearch.png";
import weatherapp from "../../assets/images/weatherapp.png";
import workdayscheduler from "../../assets/images/workdayscheduler.png";
import passwordGen from "../../assets/images/password-gen.png";
import codeQuiz from "../../assets/images/codeQuiz.png";
import employeeTracker from "../../assets/images/employeeTracker.png";
import CookBookmark from "../../assets/images/cookBookmark.png";
import eCommerce from "../../assets/images/eCommerce.png";

export default function Portfolio() {
  return (
    <div>
      <table style={{ margin: "20px auto", maxWidth: "90%" }}>
        <tbody>
          <tr>
            <td>
              <h3 style={{ textAlign: "center" }}>Film Search</h3>
              <div style={{ display: "block", textAlign: "center" }}>
                <a href="https://saikoub.github.io/FilmSearch/">
                  <img
                    className="chrome me-4"
                    style={{
                      maxWidth: "35px",
                      marginLeft: "15px",
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg"
                    alt="chrome-link"
                  />
                </a>
                <a href="https://github.com/SaikouB/FilmSearch">
                  <img
                    className="github me-4"
                    style={{
                      maxWidth: "35px",
                      marginLeft: "15px",
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                    alt="github-link"
                  />
                </a>
              </div>
              <img
                className="shadow-lg p-3 mb-5 bg-body-tertiary"
                src={filmsearch}
                style={{ maxWidth: "95%", margin: "auto" }}
                alt="film-search"
              />
            </td>
            <td>
              <h3 style={{ textAlign: "center" }}>Weather Dashboard</h3>
              <div style={{ display: "block", textAlign: "center" }}>
                <a href="https://saikoub.github.io/Weather-Dashboard/">
                  <img
                    className="chrome me-4"
                    style={{
                      maxWidth: "35px",
                      marginLeft: "15px",
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg"
                    alt="chrome-link"
                  />
                </a>
                <a href="https://github.com/SaikouB/Weather-Dashboard">
                  <img
                    className="github me-4"
                    style={{
                      maxWidth: "35px",
                      marginLeft: "15px",
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                    alt="github-link"
                  />
                </a>
              </div>
              <img
                className="shadow-lg p-3 mb-5 bg-body-tertiary"
                src={weatherapp}
                style={{ width: "95%", margin: "auto" }}
                alt="weather-app"
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3 style={{ textAlign: "center" }}>Work-Day Scheduler</h3>
              <div style={{ display: "block", textAlign: "center" }}>
                <a href="https://saikoub.github.io/Work-Day-scheduler/">
                  <img
                    className="chrome me-4"
                    style={{
                      maxWidth: "35px",
                      marginLeft: "15px",
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg"
                    alt="chrome-link"
                  />
                </a>
                <a href="https://github.com/SaikouB/Work-Day-scheduler">
                  <img
                    className="github me-4"
                    style={{
                      maxWidth: "35px",
                      marginLeft: "15px",
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                    alt="github-link"
                  />
                </a>
              </div>
              <img
                className="shadow-lg p-3 mb-5 bg-body-tertiary"
                src={workdayscheduler}
                style={{ width: "95%", margin: "auto" }}
                alt="work-day-scheduler"
              />
            </td>
            <td>
              <h3 style={{ textAlign: "center" }}>
                Password Generator
              </h3>
              <div style={{ display: 'block', textAlign: 'center'}}> 
                <a href="https://saikoub.github.io/Password-Generator/">
                  <img className='chrome me-4'
                    style={{
                    maxWidth: "35px",
                    marginLeft: '15px'
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg"
                    alt="chrome-link"
                  />
                </a>
                <a href="https://github.com/SaikouB/Password-Generator">
                  <img className='github me-4'
                    style={{
                      maxWidth: "35px",
                      marginLeft: '15px'
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                    alt="github-link"
                  />
                </a>
              </div>
                <img
                  className="shadow-lg p-3 mb-5 bg-body-tertiary"
                  src={passwordGen}
                  style={{ width: "95%" }}
                  alt="password-generator"
                />
                <br />
            </td>
          </tr>
          <tr>
            <td>
              <h3 style={{ textAlign: "center" }}>
                Code Quiz
              </h3>
              <div style={{ display: 'block', textAlign: 'center'}}> 
                <a href="https://saikoub.github.io/Code-Quiz/">
                  <img className='chrome me-4'
                    style={{
                    maxWidth: "35px",
                    marginLeft: '15px'
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg"
                    alt="chrome-link"
                  />
                </a>
                <a href="https://github.com/SaikouB/Code-Quiz">
                  <img className='github me-4'
                    style={{
                      maxWidth: "35px",
                      marginLeft: '15px'
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                    alt="github-link"
                  />
                </a>
              </div>
                <img
                  className="shadow-lg p-3 mb-5 bg-body-tertiary"
                  src={codeQuiz}
                  style={{ width: "95%" }}
                  alt="code-quiz"
                />
            </td>
            <td>
              <h3 style={{ textAlign: "center" }}>
                Employee Tracker <br /> (Back-End Application)
              </h3>
              <div style={{ display: 'block', textAlign: 'center'}}> 
                <a href="https://drive.google.com/file/d/1IZeQcYaldSIMixBKX7ZXX_PrK3Q9ZJE4/view">
                  <img className='chrome me-4'
                    style={{
                    maxWidth: "35px",
                    marginLeft: '15px'
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg"
                    alt="chrome-link"
                  />
                </a>
                <a href="https://github.com/SaikouB/Employee-Tracker">
                  <img className='github me-4'
                    style={{
                      maxWidth: "35px",
                      marginLeft: '15px'
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                    alt="github-link"
                  />
                </a>
              </div>
                <img
                  className="shadow-lg p-3 mb-5 bg-body-tertiary"
                  src={employeeTracker}
                  style={{ width: "95%" }}
                  alt="employee-tracker"
                />
            </td>
          </tr>
          <tr>
            <td>
              <h3 style={{ textAlign: "center" }}>
                CookBookmark <br /> (Full Stack Application)
              </h3>
              <div style={{ display: 'block', textAlign: 'center'}}> 
                <a href="https://vast-badlands-21401-8850fb886623.herokuapp.com/">
                  <img className='chrome me-4'
                    style={{
                    maxWidth: "35px",
                    marginLeft: '15px'
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg"
                    alt="chrome-link"
                  />
                </a>
                <a href="https://github.com/sjones-njones/Recipe-Book-Group-3-Project-2">
                  <img className='github me-4'
                    style={{
                      maxWidth: "35px",
                      marginLeft: '15px'
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                    alt="github-link"
                  />
                </a>
              </div>
                <img
                  className="shadow-lg p-3 mb-5 bg-body-tertiary"
                  src={CookBookmark}
                  style={{ width: "95%" }}
                  alt="cook-bookmark"
                />
            </td>
            <td>
              <h3 style={{ textAlign: "center" }}>
                E-commerce <br /> (Back-End Application)
              </h3>
              <div style={{ display: 'block', textAlign: 'center'}}> 
                <a href="https://drive.google.com/file/d/1VR9K4fs41vCHkfnqKDqxN_QNk8APceWN/view">
                  <img className='chrome me-4'
                    style={{
                    maxWidth: "35px",
                    marginLeft: '15px'
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg"
                    alt="chrome-link"
                  />
                </a>
                <a href="https://github.com/SaikouB/E-Commerce-Back-End">
                  <img className='github me-4'
                    style={{
                      maxWidth: "35px",
                      marginLeft: '15px'
                    }}
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                    alt="github-link"
                  />
                </a>
              </div>
                <img
                  className="shadow-lg p-3 mb-5 bg-body-tertiary"
                  src={eCommerce}
                  style={{ width: "95%" }}
                  alt="e-commerce"
                />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
