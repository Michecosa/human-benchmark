import { Link } from "react-router-dom";

export default function Card({ icon, title, text, badge, path }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100 text-center shadow-sm border-0 position-relative">
        <Link
          to={path}
          className="text-decoration-none"
          style={{ color: "inherit" }}
        >
          {badge && (
            <span
              className="badge bg-danger position-absolute m-2 py-2 fs-5 fw-normal px-2 rounded-3"
              style={{ top: "-5%", right: "-5%" }}
            >
              {badge}
            </span>
          )}
          <div className="card-body d-flex flex-column justify-content-center">
            <i
              className={`bi ${icon} mb-3`}
              style={{ fontSize: "5rem", color: "#74b9ff" }}
            ></i>
            <h4 className="fw-bold">{title}</h4>
            <p className="text-muted mb-0 fs-5">{text}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
