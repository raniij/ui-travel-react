import { Routes, Route } from "react-router-dom"
import UiPreview from "../pages/UiPreview/UiPreview"
import Main from "../pages/Main/Main"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<UiPreview />} />
      <Route path="/travel/main" element={<Main />} />
    </Routes>
  )
}

export default Router