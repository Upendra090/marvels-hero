import CardList from "./components/CardList";
import Header from "./components/Header";

function App() {
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
