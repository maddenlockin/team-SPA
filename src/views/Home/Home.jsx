import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            Home
            <p>
                <Link to='/teams'
                className='App-link'>
                    All Teams
                </Link>
            </p>
        </div>
    )
}
