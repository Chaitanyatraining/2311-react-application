import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <Link to="pagination" class="nav-link">pagination</Link>
        </li>
        <li class="nav-item">
          <Link to="useEffecthook" class="nav-link">useEffect</Link>
        </li>
        <li class="nav-item">
          <Link to="paginationuseeffect" class="nav-link">Pagination useEffect</Link>
        </li>
        <li class="nav-item">
          <Link to="userefHook" class="nav-link">useRef Hook</Link>
        </li>
        <li class="nav-item">
          <Link to="contactus" class="nav-link" >ContactUs</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header