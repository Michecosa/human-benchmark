import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Homepage() {
  return (
    <>
      <main>
        <div
          className="text-white text-center d-flex flex-column justify-content-center"
          style={{
            backgroundColor: "#0088cf",
            height: "35rem",
          }}
        >
          <i style={{ fontSize: "5rem" }} className="bi bi-lightning-fill"></i>
          <h1 style={{ fontSize: "5rem", fontWeight: "normal" }}>
            Human Benchmark
          </h1>
          <h3 style={{ fontWeight: "normal" }}>
            Measure your abilities with brain games and cognitive tests.
          </h3>
          <Link to="/test/reactiontime">
            <button className="btn btn-warning fw-bold mt-5">
              Get Started
            </button>
          </Link>
        </div>

        <div className="container py-5">
          <div className="row g-4">
            <Card
              icon="bi-lightning-fill"
              title="Reaction Time"
              text="Test your visual reflexes."
              path={"/test/reactiontime"}
            />

            <Card
              icon="bi-grid"
              title="Sequence Memory"
              text="Remember an increasingly long pattern of button presses."
              badge="New"
              path={"/test/sequencememory"}
            />

            <Card
              icon="bi-bullseye"
              title="Aim Trainer"
              text="How quickly can you hit all the targets?"
              badge="New"
              path={"/#"}
            />

            <Card
              icon="bi-123"
              title="Number Memory"
              text="Remember the longest number you can."
              path={"/#"}
            />

            <Card
              icon="bi-fonts"
              title="Verbal Memory"
              text="Keep as many words in short term memory as possible."
              path={"/#"}
            />

            <Card
              icon="bi-grid-3x3"
              title="Chimp Test"
              text="Are you smarter than a chimpanzee?"
              path={"/#"}
            />

            <div className="col-12 col-md-6">
              <div className="card h-100 text-center shadow-sm border-0">
                <Link
                  to="/test/sequencememory"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  <div className="card-body d-flex flex-column justify-content-center">
                    <i
                      className="bi bi-grid mb-3"
                      style={{ fontSize: "5rem", color: "#74b9ff" }}
                    ></i>
                    <h4 className="fw-bold">Visual Memory</h4>
                    <p className="text-muted mb-0 fs-5">
                      Remember an increasingly large board of squares.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card h-100 text-center shadow-sm border-0">
                <Link
                  to="/#"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  <div className="card-body d-flex flex-column justify-content-center">
                    <i
                      className="bi bi-keyboard mb-3"
                      style={{ fontSize: "5rem", color: "#74b9ff" }}
                    ></i>
                    <h4 className="fw-bold">Typing</h4>
                    <p className="text-muted mb-0 fs-5">
                      How many words per minute can you type?
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
