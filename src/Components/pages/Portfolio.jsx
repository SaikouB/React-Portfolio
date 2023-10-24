import filmsearch from "../../assets/images/filmsearch.png";
import weatherapp from "../../assets/images/weatherapp.png";
import workdayscheduler from "../../assets/images/workdayscheduler.png";

export default function Portfolio() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="https://saikoub.github.io/FilmSearch/">
                <img
                  src={filmsearch}
                  style={{ width: "75%" }}
                  alt="film-search"
                />{" "}
                <br />
              </a>
              <sub style={{ fontSize: "20px" }}>
                <b>
                  Film Search Application <br />
                </b>
              </sub>
            </td>
            <td>
              <a href="https://saikoub.github.io/Weather-Dashboard/">
                <img
                  src={weatherapp}
                  style={{ width: "75%" }}
                  alt="weather-app"
                />
                <br />
              </a>
              <sub style={{ fontSize: "20px" }}>
                <b>
                  Weather App <br />
                </b>
              </sub>
            </td>
            <td>
              <a href="https://saikoub.github.io/Work-Day-scheduler/">
                <img
                  src={workdayscheduler}
                  style={{ width: "75%" }}
                  alt="work-day-scheduler"
                />
                <br />
              </a>
              <sub style={{ fontSize: "20px" }}>
                <b>
                  Work-Day Scheduler App <br />
                </b>
              </sub>
            </td>
            <td>
              <a href="https://saikoub.github.io/Weather-Dashboard/">
                <img
                  src={weatherapp}
                  style={{ width: "75%" }}
                  alt="stephanie-jones"
                />
                <br />
              </a>
              <sub style={{ fontSize: "20px" }}>
                <b>
                  Weather App <br />
                </b>
              </sub>
            </td>
            <td>
              <a href="https://saikoub.github.io/Weather-Dashboard/">
                <img
                  src={weatherapp}
                  style={{ width: "75%" }}
                  alt="stephanie-jones"
                />
                <br />
              </a>
              <sub style={{ fontSize: "20px" }}>
                <b>
                  Weather App <br />
                </b>
              </sub>
            </td>
            <td>
              <a href="https://saikoub.github.io/Weather-Dashboard/">
                <img
                  src={weatherapp}
                  style={{ width: "75%" }}
                  alt="stephanie-jones"
                />
                <br />
              </a>
              <sub style={{ fontSize: "20px" }}>
                <b>
                  Weather App <br />
                </b>
              </sub>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
