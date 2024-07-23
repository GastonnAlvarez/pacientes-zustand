import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Pacient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailProps = {
    patient: Pacient
}

export default function PatientDetail({ patient }: PatientDetailProps) {
    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente Eliminado Correctamente')
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="ID" data={patient.id} />
            <PatientDetailItem label="NOMBRE" data={patient.name} />
            <PatientDetailItem label="PROPIETARIO" data={patient.caretaker} />
            <PatientDetailItem label="EMAIL" data={patient.email} />
            <PatientDetailItem label="FECHA" data={patient.date.toString()} />

            <div className="flex flex-col md:flex-row justify-between gap-3 mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatientById(patient.id)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleClick}
                >Eliminar</button>
            </div>
        </div>
    )
}
