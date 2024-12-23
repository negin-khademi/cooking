import RecepieList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = 'http://localhost:3000/recipes?q=' + query;
  const { error, data, isPending } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recepies including " {query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecepieList recipes={data} />}
    </div>
  );
}
