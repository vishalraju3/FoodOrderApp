import React from 'react'

function CategoryBar() {
    return (
        <div className="catContainer" id="categoryBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Break Fast</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Time for Lunch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Dinner</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Burgers and Beverages</a>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" role="button">
            More..
          </div>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="">Pizza</a></li>
            <li><a className="dropdown-item" href="">Desserts</a></li>
            <li><a className="dropdown-item" href="">Ice Cream</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default CategoryBar
