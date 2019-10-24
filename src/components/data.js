import store from '../store/index.js'

function createData(digghet, fornavn, etternavn, fodt, yrke) {
    return {digghet, fornavn, etternavn, fodt, yrke};
}

  export default function getActors() {
    const state= store.getState();
    let rows = []
    state.actors.actors.map(actor => {
        rows.push(createData(actor.rating, actor.firstName, actor.lastName, actor.year, actor.profession))
        return null
    })
  
    return rows
  }



 
  
  
  
