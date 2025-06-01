import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { fetchGlobalData } from "@/app/portfolio/data/fetchGlobalData";
import { mapHeaderData } from "./mappers/map-header-data";

export default async function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await fetchGlobalData();

  return (
    <div>
      <Header {...mapHeaderData(globalData)} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

