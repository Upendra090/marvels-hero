import CardList from "../components/CardList";
import Header from "../components/Header";

export default function Hero() {
  return (
    <>
      <Header />
      <section className="px-20 py-12">
        <CardList />
      </section>
    </>
  );
}
