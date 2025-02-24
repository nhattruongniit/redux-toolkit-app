import { useSelector } from 'react-redux';
import { useGetPokemonByNameQuery } from './redux/app.api';


function App() {
  const state = useSelector(state => state);
  const queryA = useGetPokemonByNameQuery('bulbasaur')
  console.log('demo rtk  ', {queryA, state})

  return (
    <>
      <div className="App">
        {queryA.error ? (
          <>Oh no, there was an error</>
        ) : queryA.isLoading ? (
          <>Loading...</>
        ) : queryA.data ? (
          <>
            <h3>{queryA.data.species.name}</h3>
            <img src={queryA.data.sprites.front_shiny} alt={queryA.data.species.name} />
          </>
        ) : null}
      </div>
    </>
  )
}

export default App
