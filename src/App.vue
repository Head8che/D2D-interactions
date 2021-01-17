<template>
  <div id="app">
    <nav class="navbar navbar bg-dark text-light px-5">
        <router-link to="/">
        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
          Home
        </router-link> 
        <router-link to="/about">About</router-link>
    </nav>
    <div class="container">
      <router-view />
      
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    </div>
  </div>
</template>

<style>
a{
  text-decoration: none;
  color: #f8f9fa !important;
}



body{
    background: 
    linear-gradient(to right,#ffffff)
      no-repeat bottom;
	background-size: 100% 100%;
  /* background: 
    linear-gradient(to right,#122496, #000732)
      no-repeat bottom;
	background-size: 100% 100%; */

/*   
  background: #2980B9;  
  background: -webkit-linear-gradient(to right,  #6DD5FA, #2980B9);  
  background: linear-gradient(to right,#6DD5FA, #2980B9);
  background-size: 100% 10%; */

  /* background-image: url("./assets/header.png"); */
  /* background-size: 100% 180%;
  background-repeat: no-repeat;
   */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}

</style>
