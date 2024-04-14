
import Image from "next/image";
import Header from "../features/Header";
import ReductionBanner from "../features/ReductionBanner";
import Hero from "../features/Hero";
import TitleBanner from "../features/TitleBanner";
import GridCard from "../features/GridCard";
import Footer from "../features/Footer";

export default function Home() {
  return (
    <main>
        <ReductionBanner/>
        <Header/>
        <Hero/>
        <TitleBanner title="Nouveautes"/>
        <GridCard/>
        <TitleBanner title="Articles"/>
        <GridCard/>
        <Footer/>
    </main>
  );
}
