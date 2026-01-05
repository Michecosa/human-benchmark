import { useState, useEffect } from "react";
import graph from "../assets/graph.png";

export default function ReactionTime() {
  const [status, setStatus] = useState("idle");
  // idle | waiting | ready | result | tooSoon

  const [startTime, setStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(null);

  useEffect(() => {
    if (status === "waiting") {
      const delay = Math.random() * 4000 + 1000;

      const timeout = setTimeout(() => {
        const t = performance.now();
        setStartTime(t);
        setStatus("ready");
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [status]);

  const handleClick = () => {
    if (status === "idle") {
      setStatus("waiting");
    } else if (status === "waiting") {
      setStatus("tooSoon");
    } else if (status === "ready") {
      const end = performance.now();
      setReactionTime(Math.round(end - startTime));
      setStatus("result");
    } else {
      setReactionTime(null);
      setStatus("idle");
    }
  };

  const bgColor = {
    idle: "#0088cf",
    waiting: "#cf1c37ff",
    ready: "#2ecc71",
    tooSoon: "#e67e22",
    result: "#34495e",
  }[status];

  return (
    <>
      <div
        onPointerDown={handleClick}
        className="text-white text-center d-flex flex-column justify-content-center pt-3 pb-5"
        style={{
          backgroundColor: bgColor,
          cursor: "pointer",
          height: "35rem",
          touchAction: "manipulation",
        }}
      >
        {status === "idle" && (
          <>
            <i
              style={{ fontSize: "5rem" }}
              className="bi bi-lightning-fill"
            ></i>
            <h1 style={{ fontSize: "5rem", fontWeight: "normal" }}>
              Reaction Time Test
            </h1>
            <h4>Click anywhere to start</h4>
          </>
        )}

        {status === "waiting" && (
          <h1 style={{ fontSize: "5rem" }}>
            ... <br />
            Wait for green
          </h1>
        )}

        {status === "ready" && <h1 style={{ fontSize: "5rem" }}>CLICK!</h1>}

        {status === "tooSoon" && (
          <>
            <h1 style={{ fontSize: "5rem" }}>Too soon!</h1>
            <h4>Click to try again</h4>
          </>
        )}

        {status === "result" && (
          <>
            <h1 style={{ fontSize: "5rem" }}>{reactionTime} ms</h1>
            <h4>Click to try again</h4>
          </>
        )}
      </div>

      <div className="container">
        <div className="row gap-2 mt-5 justify-content-center">
          <div className="col-12 col-lg-5 card p-4">
            <h3>Statistics</h3>
            <img src={graph} alt="" />
          </div>
          <div className="col-12 col-lg-5 card p-4">
            <h3>About the test</h3>
            This is a simple tool to measure your reaction time.
            <br />
            <br />
            The average (median) reaction time is 273 milliseconds, according to
            the data collected so far. <br />
            <br />
            In addition to measuring your reaction time, this test is affected
            by the latency of your computer and monitor. Using a fast computer
            and low latency / high framerate monitor will improve your score.
            <br />
            <br />
            Scores in this test are faster than the aim trainer test, because
            you can react instantly without moving the cursor.
            <br />
            <br />
            This is discussed in further detail on the statistics page. While an
            average human reaction time may fall between 200-250ms, your
            computer could be adding 10-50ms on top. Some modern TVs add as much
            as 150ms! <br />
            <br />
            Other tools: What's My GPU? <br />
            <br />
            If you want, you can keep track of your scores, and see your full
            history of reaction times. Just perform at least 5 clicks and then
            save.
          </div>
        </div>
      </div>
    </>
  );
}
