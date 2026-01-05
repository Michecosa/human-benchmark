import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <div
      className="d-flex flex-column bg-dark-subtle"
      style={{ minHeight: "100vh" }}
    >
      <Header />

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
