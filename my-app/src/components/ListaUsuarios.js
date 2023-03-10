import React, { useEffect, useState } from "react"
import UsuarioIndividual from "./Usuarioindividual";
import axios from "axios";

function ListaUsuarios (){

    const[datausuarios, setdatausuario]= useState([])

    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios').then(res =>{
            console.log(res.data)
            setdatausuario(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    //mapeamos lista usuario para cada item de usuario individual
    const listausuarios = datausuarios.map(usuario =>{
        return(
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    })

    return(
        <>
        <div><h2>Lista de Usuarios</h2></div>
        {listausuarios}
        </>
    )
}

export default ListaUsuarios;