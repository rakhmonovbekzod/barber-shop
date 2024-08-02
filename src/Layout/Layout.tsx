import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
