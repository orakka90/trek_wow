import './App.css';
import Header from './components/Header';
import Controller from './components/Controller';
import { citiesData } from './config/config'
import Page from './components/Page';
import MainPage from './components/MainPage';
import {
  Routes, Route,
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Controller></Controller>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        {
          citiesData.map(cityData => {
            return <Route key={cityData.id} exact path={`/${cityData.route}`} element={<Page />} />
          })
        }
      </Routes>


    </div>
  );
}

export default App;
