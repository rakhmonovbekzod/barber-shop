import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="main-layout">
      <Header />

      {children}
      <div>
        <Footer data-aos="zoom-in-up" />
      </div>
    </div>
  );
};

export default Layout;
