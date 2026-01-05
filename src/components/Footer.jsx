import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer
        className="text-end my-4"
        style={{ fontSize: "0.8rem", lineHeight: "0.5rem" }}
      >
        <div className="container">
          <p style={{ color: "gray" }}>
            Copyright 2007 &ndash; 2025 Human Benchmark
          </p>
          <address>
            <a
              className="text-decoration-none"
              href="mailto:contact@humanbenchmark.com"
            >
              contact@humanbenchmark.com
            </a>
          </address>
          <p>
            <Link className="text-decoration-none" to="/#">
              Privacy Policy
            </Link>
          </p>
          <Link className="text-decoration-none" to="/#">
            Licensing
          </Link>
        </div>
      </footer>
    </>
  );
}
