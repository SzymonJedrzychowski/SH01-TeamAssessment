import { Routes, Route } from "react-router-dom";

// Import styling.
import './styles/App.css'
import Homepage from "./components/pages/Homepage";
import Layout from "./components/layout/Layout";
import Editorial from "./components/pages/Editorial";
import CheckItem from "./components/pages/CheckItem";
import SuggestChanges from "./components/pages/SuggestChanges";
import Publish from "./components/pages/Publish";
import EditPrevious from "./components/pages/EditPrevious";
import CreateAccount from "./components/pages/CreateAccount";
import Login from "./components/pages/Login";

/**
 * App is responsible for loading data and routing to other pages.
 *
 * @author Szymon Jedrzychowski
 */
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/editorial" element={<Editorial/>}/>
          <Route path="/checkItem" element={<CheckItem/>}/>
          <Route path="/suggestChanges" element={<SuggestChanges/>}/>
          <Route path="/publish" element={<Publish/>}/>
          <Route path="/editPrevious" element={<EditPrevious/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
