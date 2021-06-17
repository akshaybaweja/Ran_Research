import React from 'react';
import Nav from 'react-bootstrap/Nav';



function TopNav(){

  return(
  <nav class="navbar top-nav navbar-expand navbar-light bg-white ">
<h6 class="navbar-brand" onClick={() => this.handleClick("tbots")}>Tactor Bots</h6>

<div class="navbar-collapse" id="navbarSupportedContent">
  <ul class="top-nav navbar-nav mr-auto ml-auto d-flex align-content-center">
    <li class="top-nav nav-item active text-center">
      <a class="top-nav nav-link active" href="#" onClick={() => this.handleClick("tgen")>Touch Generator<span class="sr-only">(current)</span></a>
    </li>
    <li class="top-nav nav-item  text-center">
      <a class="top-nav nav-link" href="#" onClick={() => this.handleClick("tinfo")>Tactor Information</a>
    </li>
    <li class="top-nav nav-item  text-center">
      <a class="top-nav nav-link" href="#" onClick={() => this.handleClick("archive")>Archive</a>
    </li>
  </ul>

</div>
</nav>
)
}





export default TopNav;
