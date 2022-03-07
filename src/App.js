import { useState, useEffect } from "react";
import "./App.css";
import DomainName from "./Components/Body/DomainName";
import Footer from "./Components/Body/Footer";
import SendInfo from "./Components/Body/SendInfo";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import OtherCentre from "./Components/Pages/OtherCentre";
import NotFound from "./Components/Pages/NotFound";
import DetailAboutCentre from "./Components/Pages/DetailAboutCentre";
import ErrorModal from "./Components/UI/ErrorModal";
function App() {
  const [info, setInfo] = useState([]);
  const [openModal, setOpenModal]=useState(false);

  const openModalHandler=()=>{
    setOpenModal(true);
  }

  const closeModalHandler=()=>{
    setOpenModal(false);
  }
  
  const addNameHandler = (infomation) => {
    setInfo((prevInfo) => {
      return [infomation, ...prevInfo];
    });
  };

  return (
    <div className="App">
      {openModal && <ErrorModal onClose={closeModalHandler}></ErrorModal>}
      <Header onModalopen={openModalHandler}/>
      <Routes>
        {" "}
        <Route
          path="/"
          element={<DomainName onAddName={addNameHandler} />}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}>
          {" "}
        </Route>
        <Route
          path="/otherCentre"
          element={<OtherCentre/>}
        ></Route>
        <Route
          path="/otherCentre/:id"
          element={<DetailAboutCentre></DetailAboutCentre>}
        ></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <SendInfo onSend={info}></SendInfo>
      <Footer></Footer>
    </div>
  );
}

export default App;
