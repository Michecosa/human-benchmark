import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Privacy from "./pages/Privacy";
import ReactionTime from "./pages/ReactionTime";
import SequenceMemory from "./pages/SequenceMemory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/test/reactiontime" element={<ReactionTime />}></Route>
          <Route
            path="/test/sequencememory"
            element={<SequenceMemory />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
