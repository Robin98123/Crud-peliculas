import axios from "axios";
import React, {useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

function EditarUsuario (){
    
    const params = useParams() 

    //hooks para los inputs para usar el atributo value
    const[nombre, setNombre]=useState('')
    const[email, setEmail]=useState('')
    const[telefono, setTelefono]=useState('')
    
    //para regresar al index
    const navegar = useNavigate()

    useEffect(()=>{
        axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario}).then(res=> {
            console.log(res.data[0])
            const datausuario = res.data[0]
            setNombre(datausuario.nombre)
            setEmail(datausuario.email)
            setTelefono(datausuario.telefono)
        })
    }, [])

    //Funcion que actualiza el usuario
    function editarUsuario(){
            //nuevo objeto para actualizar el usuario
            const actutalizarusuario ={
                    nombre: nombre,
                    email: email,
                    telefono: telefono,
                    idusuario: params.idusuario
            }

            //Hacer la peticion usando axios
            axios.post('/api/usuario/actualizausuario', actutalizarusuario)
        .then(res => {
            console.log(res.data)
            Swal.fire('Felicidades', 'El usuario ha sido editado con éxito')
            navegar('/')
        })
        .then(err => {console.log(err)})
    }

    return(

        <div className="container">
            <div className="row">
        
               <h2 className="mt-4">Editar usuario</h2>
                
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                 <div className="mb-3">
                    <label htmlFor="nombre" className="form-label" >Nombre</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) =>{setNombre(e.target.value)}}></input>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="e mail" className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" value={telefono} onChange={(e) =>{setTelefono(e.target.value)}}></input>
                 </div>
                 <button onClick={editarUsuario} className="btn btn-success">Editar usuario</button>
                </div>
            </div>
            
        </div>
    )
}

export default EditarUsuario;