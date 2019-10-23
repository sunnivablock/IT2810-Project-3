import store from '../store/index.js'

function createData(digghet, fornavn, etternavn, fodt) {
    return {digghet, fornavn, etternavn, fodt};
}

  export default function getActors() {
    const state= store.getState();
    let rows = []
  

    state.actors.actors.map(actor => {
        rows.push(createData(actor.rating, actor.firstName, actor.lastName, actor.year))
        return null
    })

  
    return rows
  }



 
  
  
  
