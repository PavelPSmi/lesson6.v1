import { Routes,Route } from "react-router-dom";
import Chats from "./pages/chats";
import Message from './pages/message'


function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Chats />} />
      <Route path={"/message/:id"} element={<Message />} />
    </Routes>
  );
}

export default App;
