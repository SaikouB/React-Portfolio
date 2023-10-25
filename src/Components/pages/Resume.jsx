import resumeOne from "../../assets/images/resumeOne.png";
import resumeTwo from "../../assets/images/resumeTwo.png";
// eslint-disable-next-line no-unused-vars
import mediaQuery from '../../Components/mediaQuery.css'

export default function Resume() {
  return (
    <div className='resume'
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <img className='border border-2 border-bottom-0 shadow-lg p-3 mb-5 bg-body-tertiary'
        style={{ width: "700px" }}
        src={resumeOne}
        alt="resume1"
      />
      <img
        className='border border-2 border-top-0 shadow-lg p-3 mb-5 bg-body-tertiary'
        style={{ width: "700px" }}
        src={resumeTwo}
        alt="resume2"
      />
    </div>
  );
}
