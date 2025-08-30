import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PortfolioGallery from './pages/PorfessionalListPage'
import PortfolioFormBuilder from './pages/PortfolioFrom'
import TemplateSelectionPage from './pages/TemplateSelectionPage'
import UserPortfolio01 from './pages/UserPortfolio01'
import UserPortfolio02 from './pages/UserPortfolio02'
import PortfolioTemplate1 from './templates/Template1'
import PortfolioTemplate2 from './templates/Template2'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TemplateSelectionPage/>} />
      <Route path="/Temp01" element={<PortfolioTemplate1/>} />
      <Route path="/Temp02" element={<PortfolioTemplate2/>} />
      <Route path="/form" element={<PortfolioFormBuilder/>} />
      <Route path="/portfoliolist" element={<PortfolioGallery/>} />
      <Route path="Portfolio/modern/:id" element={<UserPortfolio01/>} />
      <Route path="Portfolio/professional/:id" element={<UserPortfolio02/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App