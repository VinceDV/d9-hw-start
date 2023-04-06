import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FavJobs from './components/FavJobs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path='/FavJobs' element={<FavJobs />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
