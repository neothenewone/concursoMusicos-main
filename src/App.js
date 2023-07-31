import Loguin from './Loguin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formulario from './Formulario';
import Edit from './Edit';
import GeneraLegajo from './generaLegajo';
import Antecedentes from './Antecedentes.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loguin ></Loguin>}/>
          <Route path='/new' element={<Formulario />}/>
          <Route path='/inscripto' element={<Edit />}/>
          <Route path='/antecedentes' element={<Antecedentes />}/>
          <Route path='/imprime' element={<GeneraLegajo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
