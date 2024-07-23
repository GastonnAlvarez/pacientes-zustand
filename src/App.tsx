import { ToastContainer } from 'react-toastify'
import PacientsForm from "./components/PacientsForm"
import PacientsList from "./components/PacientsList"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de Pacientes {" "}
          <span className="text-indigo-700">Pacientes</span>
        </h1>

        <div className="mt-12 md:flex">
          <PacientsForm />
          <PacientsList />
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default App
