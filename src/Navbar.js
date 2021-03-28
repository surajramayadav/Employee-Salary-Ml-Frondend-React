import React from 'react'

export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <p className="navbar-brand" >
                    Employee Salary based on exprience</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item ">
                            <p activeClassName="menu_active" exact className="nav-link" >Machin Learning  + Python + Node + React <span class="sr-only">(current)</span></p>
                        </li>


                    </ul>
                </div>
            </nav>

        </div>
    )
}
