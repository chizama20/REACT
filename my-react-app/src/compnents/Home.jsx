import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>404 Museum</h1>
            <p>Choose an exibt:</p>
            <ul>
                <li><Link to="./links/Cards">baba</Link></li>
            </ul>
        </div>
    );
}

export default Home;