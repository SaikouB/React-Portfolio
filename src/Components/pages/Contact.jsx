export default function Contact() {
  return (
    <form
      className="card bg-info"
      style={{
        width: "50%",
        display: "flex",
        marginTop: "10%",
        marginLeft: "25%",
      }}
    >
      <h1>Contact Me</h1>
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" className="form-control" placeholder="" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="you@awesome.com"
          required
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          className="form-control"
          rows=""
          placeholder="send me a message"
          required
        ></textarea>
      </div>
      <div style={{ margin: "10px", alignSelf: "center" }}>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
