import logoNavbar from '../foto/logoNavbar.jpeg'
export default function Navbar(){
    return(
        <div className="container">
            <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img className="bi me-2 " width="40" height="40" style={{borderRadius:"50%"}} src={logoNavbar} alt="logo"/>
                    <span className="fs-4">Simple header</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                </ul>
            </nav>
        </div>

    )
}
