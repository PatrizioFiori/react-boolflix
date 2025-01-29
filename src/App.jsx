import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./assets/pages/HomePage"
import DefaultLayout from "./assets/layouts/DefaultLayouts"
import Error404Page from "./assets/pages/Error404Page"
import { MainProvider } from "./assets/contexts/MainContext"


const App = () => {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="*" Component={Error404Page} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
};

export default App;