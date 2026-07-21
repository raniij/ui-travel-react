import { Routes, Route } from "react-router-dom"
import UiPreview from "../pages/UiPreview/UiPreview"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<UiPreview />} />
    </Routes>
  )
}

export default Router