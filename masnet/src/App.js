import './App.css';
import Navbar from "./navbar/navbar-app"
import WelcomePage from "./welcom-page/welcome-page-app"
import SeoPage from './seo-page/seo-page-app';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <WelcomePage></WelcomePage>
      <SeoPage></SeoPage>
    </div>
  );
}

export default App;
