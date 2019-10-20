import store from '../store/index.js'

function createData(digghet, fornavn, etternavn, fodt) {
    //const state= store.getState();
    return {digghet, fornavn, etternavn, fodt};
}

  export default function getActors() {
    const state= store.getState();
    let rows = []
    let rowCount=0;

    state.actors.actors.map(actor => {
        rows.push(createData(actor.rating, actor.firstName, actor.lastName, actor.year))
        rowCount++;
        return null //Needs to return something
    })

    //Want to use this rowcount instead of the constant outside function
    
    return rows
  }

export const rows = 20;


 
  
  
  
