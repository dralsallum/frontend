import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { useSelector } from "react-redux";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Upload from "./pages/Upload";
import Items from "./pages/Items";
import Something from "./pages/Something";
import Policy from "./pages/Policy";
import Request from "./pages/Request";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:category/:productId" element={<Items />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/request" element={<Request />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/product/:category" element={<Product />} />
        <Route path="/main" element={<Something />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
    </Router>
  );
};

export default App;
