import filmsearch from "../../assets/images/filmsearch.png";
import weatherapp from "../../assets/images/weatherapp.png";
import workdayscheduler from "../../assets/images/workdayscheduler.png";
import passwordGen from "../../assets/images/password-gen.png";
import codeQuiz from "../../assets/images/codeQuiz.png";
import employeeTracker from "../../assets/images/employeeTracker.png";




export default function Portfolio() {
  return (
    <div>
      <table style={{ margin: '20px auto', maxWidth: '90%'}}>
        <tbody>
          <tr>
            <td >
                <h3 style={{ fontSize: "20px", textAlign: 'center'}}>
                  Film Search
              </h3>
              <a href="https://saikoub.github.io/FilmSearch/">
                <img className='shadow-lg p-3 mb-5 bg-body-tertiary'
                  src={filmsearch}
                  style={{maxWidth: "95%", margin: 'auto'  }}
                  alt="film-search"
                />
              </a>
              
            </td>
            <td>
              <h3 style={{ fontSize: "20px", textAlign: 'center'}}>
                  Weather Dashboard
              </h3>
              <a href="https://saikoub.github.io/Weather-Dashboard/">
                <img className='shadow-lg p-3 mb-5 bg-body-tertiary'
                  src={weatherapp}
                  style={{ width: "95%", margin: 'auto' }}
                  alt="weather-app"
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <h3 style={{ fontSize: "20px", textAlign: 'center'}}>
                  Work-Day Scheduler
              </h3>
              <a href="https://saikoub.github.io/Work-Day-scheduler/">
                <img className='shadow-lg p-3 mb-5 bg-body-tertiary'
                  src={workdayscheduler}
                  style={{ width: '95%', margin: 'auto' }}
                  alt="work-day-scheduler"
                />
              </a>
            </td>
            <td>
              <h3 style={{ fontSize: '20px', textAlign: 'center' }}>
                  Password Generator
              </h3>
              <a href="https://saikoub.github.io/Password-Generator/">
                <img className='shadow-lg p-3 mb-5 bg-body-tertiary'
                  src={passwordGen}
                  style={{ width: "95%" }}
                  alt="password-generator"
                />
                <br />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <h3 style={{ fontSize: '20px', textAlign: 'center' }}>
                  Code Quiz
              </h3>
              <a href="https://saikoub.github.io/Code-Quiz/">
                <img className='shadow-lg p-3 mb-5 bg-body-tertiary'
                  src={codeQuiz}
                  style={{ width: "95%" }}
                  alt="code-quiz"
                />
              </a>
            </td>
            <td>
              <h3 style={{ fontSize: '20px', textAlign: 'center' }}>
                  Employee Tracker <br /> (Back-End Application)
              </h3>
              <a href="https://drive.google.com/file/d/1IZeQcYaldSIMixBKX7ZXX_PrK3Q9ZJE4/view">
                <img className='shadow-lg p-3 mb-5 bg-body-tertiary'
                  src={employeeTracker}
                  style={{ width: "95%" }}
                  alt="employee-tracker"
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
