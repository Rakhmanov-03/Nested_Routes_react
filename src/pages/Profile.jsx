import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="container">
      <div className="home">
        <h1>Profile page</h1>
        <div className="About_Account">
          <div className="About">
            <h3>About page</h3>
            <button>
              <Link className="button" to="/about">
                About page
              </Link>
            </button>
          </div>
          <div className="Account">
            <h3>Account page</h3>
            <button>
              <Link className="button" to="/account">
                Account page
              </Link>
            </button>
          </div>
        </div>
        <div className="Profile_Settings">
          <div className="Profile">
            <h3>Home page</h3>
            <button>
              <Link className="button" to="/">
                Home page
              </Link>
            </button>
          </div>
          <div className="Settings">
            <h3>Settings page</h3>
            <button>
              <Link className="button" to="/settings">
                Settings page
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
