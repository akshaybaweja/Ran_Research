import React from 'react';
import Nav from 'react-bootstrap/Nav';



function TopNav(){
  return(
  <nav class="navbar top-nav navbar-expand navbar-light bg-white ">
<h6 class="navbar-brand" href="#">Emotional Touch Generator</h6>

<div class="navbar-collapse" id="navbarSupportedContent">
  <ul class="top-nav navbar-nav mr-auto ml-auto d-flex align-content-center">
    <li class="top-nav nav-item active text-center">
      <a class="top-nav nav-link active" href="#">Touch Generator<span class="sr-only">(current)</span></a>
    </li>
    <li class="top-nav nav-item  text-center">
      <a class="top-nav nav-link" href="#">Tactor Information</a>
    </li>
    <li class="top-nav nav-item  text-center">
      <a class="top-nav nav-link" href="#">Archive</a>
    </li>
  </ul>

</div>
</nav>
)
}





export default TopNav;
