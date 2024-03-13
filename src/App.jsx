// components
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { SocialLinks } from "./components/SocialLinks/SocialLinks";

export function App() {
  return (
    <div>
      <Navbar />
			<Home />
			<Portfolio />

			<SocialLinks />
    </div>
  )
}
