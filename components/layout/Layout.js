import Navbar from "../elements/features/Navbar";
import Footer from "../container/Footer";

export default function Layout(children) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
