
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner";
import PopularCategories from "../components/PopularCategories";

export default function Home() {
  return (
    <div>
     

      <Header />

      <main>
        <Banner />
        <PopularCategories />
      </main>
    </div>
  );
}
