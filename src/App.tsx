import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";


export default function Home() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );

}
