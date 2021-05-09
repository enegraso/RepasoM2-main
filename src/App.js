import React from "react";


// REDUCER _________________________------------
const myCities={
  cities:[],
};
let idcity = 1

export const reducer=(state = myCities, action) => {
  switch(action.type){
    case 'AddCity':
    action.payload.id = idcity++
    return { ...state, cities: [...state.cities, action.payload] } 

    case 'RemoveCity':
      return {
        cities : state.cities.filter(item => item.id !== action.payload) 
      }
      
    
    default:
      return state

  }

  
}

// ACTIONS -----------------------
// por como esta diseñado el test, el id de la ciudad deberian colocarla al momento de agregarlo en el reducer
 export const addCity = (payload) => {

   return {
   type: "AddCity",
    payload
   }
 }

 export const removeCity = (payload) => {
   return {
    type: "RemoveCity",
   payload 
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
    console.log(state)         
    useState({
      ...state,
      [e.target.name]: e.target.value
    } )
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
        <button type="submit">Agregar Ciudad</button> 
        </div>
      </form>
    </div>

  )

}

export default App;
