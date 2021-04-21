import React from "react";


// REDUCER _________________________------------
const myCities={
  cities:[],
};


export const reducer=(state = myCities,action) => {
  switch(action.type){
    case 'AddCity':
    return {
          ...state, cities: state.cities.push(action.payload)
    } 

    case 'RemoveCity':
      return state.cities.filter(item => item.id === action.payload.id)
      
    
    default:
      return state

  }

  
}

// ACTIONS -----------------------
// por como esta diseñado el test, el id de la ciudad deberian colocarla al momento de agregarlo en el reducer
 export const addCity = (arg) => {
   let idcity = 1
   return {
   type: "AddCity",
    payload: {...arg, id: idcity+1}
   }
 }

 export const removeCity = (payload) => {
   return {
    type: "RemoveCity",
   payload: {id: payload} 
  }
 }


 // COMPONENTE _--------------------
 // La idea es hacer una app donde uds mismos puedan ingresar una ciudad y renderizarlas en esta misma
 // hoja. Deberian hacer el form y renderizar lo que tendrian en el "estado local de redux"
 // la manera en la que pueden unir los componentes es al momento de agregar una ciudad es llamarlo de la siguiente
 // manera "onClick={reducer(EstadoActual,Accion(payload))}"
 // PARA QUE PASEN LOS TESTS ES NECESARIO USAR React.useState en lugar de useState solo
 // Recuerden que la idea es practicar y tener conceptos claros, con que entiendan los tests y sientan que entendieron
 // es suficiente.
export const App=() => {
  const [state, useState] = React.useState({
    city: '',
    location: '',
    temperatura: ''
  })

  // e: nombre del campo del formulario que se esté cambiando
  const HandleChange = (e) => {              
    useState({
      ...state,
      [e.target.name]: e.target.value
    })
  }


  return(
    <div>
      <form>
        <div>
      <label>City</label>
      <input name="city" value={state.city} onChange={HandleChange}></input>
      </div>
      <div>
      <label>Location</label>
      <textarea name="location"  value={state.location} onChange={HandleChange}></textarea>
      </div>
      <div>
      <label>Temperature</label>
      <input name="temperatura"  value={state.temperatura} onChange={HandleChange} ></input>
      </div>
      <div>
        <button type="submit"/*  onClick={reducer(state, addCity(payload))} */>Agregar Ciudad</button> 
        </div>
      </form>
    </div>

  )

}

export default App;
