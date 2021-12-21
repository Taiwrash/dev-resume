// import logo from './logo.svg';
// import './App.css';
import "./style.css";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      {/* <h1>Dev Resume</h1> */}
      <div className="header">
        <div className="inner-header">
          <div className="logo">
            <img src="/icons/dev-resume-logo.svg" alt="" />
          </div>
          <h3>
            Welcome to an <span> Open Source Project</span> for Beginner
          </h3>
          <p>
            This is aim at helping everyone to learn, build and contribute to
            open source. This is for everyone ranging from designers, developers
            and content creators.
          </p>
          <a
            className="contributor"
            href="https://github.com/Taiwrash/dev-resume/blob/master/README.md">
            Become a Contributor
          </a>
        </div>
      </div>
      <div className="search">
        <input type="search" placeholder="Search for a contributor..." />
      </div>

      {data.details.map(({ id, name, imageName }) => {
        return (
          <div key={id}>
            <h3>{name}</h3>
            <div style={{ width: "200px" }}>
              {imageName ? (
                <img style={{ width: "100%" }} src={`images/${imageName}`} />
              ) : (
                <p>No image to display</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
