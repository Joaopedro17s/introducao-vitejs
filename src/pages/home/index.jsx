import { useNavigate } from "react-router-dom";
import {Link} from "react-router"
    
function home() {

        const navigate = useNavigate();
    return(
        <div>
          <h1>Aula de Vite com React JS</h1>

          <button onClick={()=> navigate('/exemplo/1')}>
            Exemplo1
            </button>

            <Link to="/exemplo/2">Exemplo 2</Link>
        </div>
    )
}

export default home;