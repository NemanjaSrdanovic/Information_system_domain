<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-dark"
    style="background-color: #000000"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">IMSeShop.at</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
        <span></span>
        <span></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <form class="d-flex ms-auto">
          <input
            class="form-control me-2"
            type="search"
            style="width: 600px"
            placeholder="Insert product name"
            aria-label="Search"
          />
          <button
            type="submit"
            class="btn btn-outline-light"
            style="margin-left: 2px"
            data-toggle="button"
            aria-pressed="false"
          >
            Search
          </button>
        </form>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/account"
              >Account</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/cart">Cart</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
//import axios from 'axios'

export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

.navbar-nav > li {
  padding-left: 20px;
}

.navbar .navbar-brand {
  font-family: "Sacramento", cursive;
  font-size: 2rem;
  font-weight: bold;
  color: dodgerblue;
}

.navbar .nav-item:hover .nav-link {
  color: dodgerblue;
}
</style>

