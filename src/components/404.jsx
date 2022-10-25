import { Link } from "react-router-dom";
import './assets/css/404.css'
import { FaArrowLeft } from 'react-icons/fa';
export default function NotFound() {
    return (
        <div className="notfound_wrapper">
            <div className="not_found">

                <h5 >404 error</h5>
                <h3>We can't find that page</h3>
                <p>sorry the page you are looking for doesn't exit</p>

                <div className="buttons">
                    <Link to=''><button id="back"><FaArrowLeft style={{marginRight:'5px'}} /> Go Back</button></Link>
                    <Link to=''><button id="home">Take me home</button></Link>
                </div>

            </div>

        </div>

    )
}