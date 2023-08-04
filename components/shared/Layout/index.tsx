import { TFunction } from "next-i18next";
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import Meta from "../Meta";

interface LayoutProps {
  t: TFunction;
  children: React.ReactNode;
  pageClass?: string;
}

const Layout = ({ children, t, pageClass }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Header t={t} />
      <Container className="position-relative min-h-screen">
        {children}
      </Container>
      <Footer t={t} />
    </>
  );
};

export default Layout;
