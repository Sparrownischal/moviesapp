import { Link } from 'react-router-dom';
import fb from '../assets/icons/facebook.svg';
import insta from '../assets/icons/instagram.svg';
import twit from '../assets/icons/twitter.svg';

function Footer() {
    return (
        <div className="container-fluid footer-container pb-3">
            <div className="row">
                <div className="col-md-4">
                    <h3>Watch</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/shows">Shows</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">

                </div>
                <div className="col-md-4 social">
                    <h3>Get Connected</h3>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com" target="_blank">
                                <img src={fb} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank">
                                <img src={insta} alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank">
                                <img src={twit} alt="Twitter" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="text-center">
                <p> &copy; 2024 designed and developed by Nischal Sapkota </p>
            </div>
        </div>
    );
}

export default Footer;
