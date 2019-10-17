import store from '../store/index.js'
import fetchActors from './fetchActors'

function createData(digghet, fornavn, etternavn, fodt) {
    const state= store.getState();
    console.log(state.actors.actors)
    return { digghet, fornavn, etternavn, fodt};
}

  export default function getActors() {
    const state= store.getState();
    let rows = []

    state.actors.actors.map(actor => {
        rows.push(createData(actor.rating, actor.firstName, actor.lastName, actor.year))
    })

    console.log(rows)

    return rows
  }

  export const rows = [



    createData(10, "Chris", "Hemsworth", 1987),
    createData(9, "Brad", "Pitt", 1972),
    createData(8, "Channing", "Tatum", 1985),
    createData(11, "David", "Beckham", 1979),
    createData(7, "Johnny", "Depp", 1974),
    createData(1, "Chris", "Hemsworth", 1987),
    createData(2, "Brad", "Pitt", 1972),
    createData(3, "Channing", "Tatum", 1985),
    createData(12, "David", "Beckham", 1979),
    createData(5, "Johnny", "Depp", 1974),
    createData(13, "Chris", "Hemsworth", 1987),
    createData(14, "Brad", "Pitt", 1972),
    createData(15, "Channing", "Tatum", 1985),
    createData(16, "David", "Beckham", 1979),
    createData(17, "Johnny", "Depp", 1974),
  ];
  /*
    componentDidMount=()=>{
      const {fetchActors}=this.props;
      fetchActors()
    }
  
    shouldComponentRender=()=>{
        const {pending} = this.props;
        if(this.pending === false) return false;
        return true;
  }

  const mapStateToProps = state => ({
    actors: state.actors.actors,
    error: getActorsError(state),
  //actors: state.actors,
    pending: getActorsPending(state)
   
  })
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchActors: fetchActorsAction
  }, dispatch)*/
  
  
  
