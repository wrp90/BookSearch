import React from 'react';

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Google Books Search</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/search">Home <span className="sr-only">Search Books</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved">Saved Books</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;