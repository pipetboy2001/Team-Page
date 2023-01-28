import Title from "./components/Title";
import Team from "./components/Team";
import Footer from "./components/Footer";

import "./Styles/index.scss";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import photo5 from "./assets/photo5.png";
import photo6 from "./assets/photo6.png";

function App() {
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <>
      <Title />
      <Team photos={photos} />
      <Footer />
    </>
  );
}

export default App;
