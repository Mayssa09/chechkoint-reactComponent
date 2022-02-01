import "./App.css";
import Adress from "./Component/Profile/Adress";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

const App = () => {
  return (
    <div className="App">
      <FullName />
      <Adress />
      <ProfilePhoto />
    </div>
  );
};

export default App;
