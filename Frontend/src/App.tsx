import type React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"
import HomePage from "./components/Home"
import FormPage from "./components/Form"
import AdminPanel from "./components/Admin"
import ScrollToTop from "./components/ScrollTop"
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <>
    <div>
      <Toaster
        position="top-center"
      ></Toaster>
    </div><Provider store={store}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/form" Component={FormPage} />
            <Route path="/admin" Component={AdminPanel} />
          </Routes>
        </Router>
      </Provider>
      </>
  )
}

export default App

