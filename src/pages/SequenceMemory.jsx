import { useState } from "react";
import graph from "../assets/graph.png";

export default function SequenceMemory() {
  const [status, setStatus] = useState("idle");
  // idle | showing | input | gameover

  const [level, setLevel] = useState(1);
  const [sequence, setSequence] = useState([]);
  const [userIndex, setUserIndex] = useState(0);
  const [activeTile, setActiveTile] = useState(null);
  const [errorTile, setErrorTile] = useState(null);

  function nextLevel(prev) {
    return [...prev, Math.floor(Math.random() * 9)];
  }

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const startGame = () => {
    const seq = [Math.floor(Math.random() * 9)];
    setLevel(1);
    setUserIndex(0);
    setSequence(seq);
    showSequence(seq);
  };

  async function showSequence(seq) {
    setStatus("showing");

    for (let i of seq) {
      setActiveTile(i);
      await sleep(600);
      setActiveTile(null);
      await sleep(300);
    }

    setStatus("input");
  }

  const handleTileClick = async (index) => {
    if (status !== "input") return;

    // SBAGLIATO
    if (sequence[userIndex] !== index) {
      setErrorTile(index);
      await sleep(200);
      setErrorTile(null);
      setStatus("gameover");
      return;
    }

    // CORRETTO
    setActiveTile(index);
    await sleep(150);
    setActiveTile(null);

    // fine sequenza → livello successivo
    if (userIndex + 1 === sequence.length) {
      const newSeq = nextLevel(sequence);
      setUserIndex(0);
      setSequence(newSeq);
      setTimeout(() => showSequence(newSeq), 600);
      setLevel(level + 1);
    } else {
      setUserIndex(userIndex + 1);
    }
  };

  return (
    <>
      <div
        className="text-white text-center d-flex flex-column justify-content-center pt-3 pb-5"
        style={{
          backgroundColor: "#0088cf",
          height: "35rem",
        }}
      >
        <div className="container text-center py-5">
          {status === "idle" && (
            <div className="container text-center">
              <i
                className="bi bi-grid mb-3"
                style={{ fontSize: "8rem", color: "#74b9ff" }}
              ></i>
              <h1 className="display-4 fw-normal">Sequence Memory Test</h1>

              <p className="fs-5 mb-4">Memorize the pattern.</p>

              <button className="btn btn-warning px-4 fs-5" onClick={startGame}>
                Start
              </button>
            </div>
          )}
          {(status === "showing" || status === "input") && (
            <div className="container text-center">
              <h4 className="mb-4">
                <span className="text-white-50">Level: </span> {level}
              </h4>

              <div
                className="mx-auto"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "12px",
                  width: "min(90vw, 420px)",
                  aspectRatio: "1",
                }}
              >
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    onClick={() => handleTileClick(i)}
                    style={{
                      aspectRatio: "1",
                      backgroundColor:
                        errorTile === i
                          ? "#e74c3c"
                          : activeTile === i
                          ? "#ffffff"
                          : "#0000002e",
                      borderRadius: "10px",
                      cursor: status === "input" ? "pointer" : "default",
                      transition: "background-color 0.12s",
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {status === "gameover" && (
            <div className="container text-center">
              <i
                className="bi bi-grid mb-3"
                style={{ fontSize: "6rem", color: "#74b9ff" }}
              ></i>
              <h5>Sequence Memory</h5>
              <h1 className=" fw-normal mb-5" style={{ fontSize: "6rem" }}>
                Level {level}
              </h1>

              <p className="fs-4 mt-3">You'll do better next time!</p>

              <button
                className="btn btn-secondary mt-3 fw-bold opacity-75"
                onClick={() => setStatus("idle")}
              >
                Try again
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="container">
        <div className="row gap-2 mt-5 justify-content-center">
          <div className="col-12 col-lg-5 card p-4">
            <h3>Statistics</h3>
            <img src={graph} alt="" />
          </div>
          <div className="col-12 col-lg-5 card p-4">
            <h3>About the test</h3>
            Memorize the sequence of buttons that light up, then press them in
            order. <br />
            <br /> Every time you finish the pattern, it gets longer. <br />
            <br /> Make a mistake, and the test is over.
          </div>
        </div>
      </div>
    </>
  );
}
