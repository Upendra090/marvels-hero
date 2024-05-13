import { useEffect } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";

function App() {
   useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("../sw.js").then(() => {
          console.log("Service Worker Registered");
        });
      });
    }
  });
  
  return (
    <>
      <Header />
      <section className="px-20 py-12">
        <CardList />
      </section>
    </>
  );
}

export default App;
