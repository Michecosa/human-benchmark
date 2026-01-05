import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-0">
        <div className="container justify-content-start">
          <Link className="navbar-brand m-0 p-0" to="/">
            <button className="btn btn-light p-2 fs-5">
              <i
                className="bi bi-lightning-charge-fill text-body-tertiary"
                width={30}
                height={30}
              ></i>
              <span className="ms-2">HUMAN BENCHMARK</span>
            </button>
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link p-0" to="/#">
                  <button className="btn btn-light h-100 p-2 fs-5">
                    DASHBOARD
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
