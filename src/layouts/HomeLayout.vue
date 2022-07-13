<template>
  <div class="container-fluid border">
    <div class="container border mt-3" style="border-radius:50px;background-color:#94B49F;">
      <h1 class="text-center p-2" style="color:#FCF8E8;text-shadow:5px 5px 10px #ECB390;">Learn GraphQl Use VueJs - Vue Apollo</h1>
    </div>
    <div class="container my-4 text-center">
      <button type="button" class="btn btn-outline-primary mx-2">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success mx-2">Success</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      <button type="button" class="btn btn-outline-warning mx-2">Warning</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-light mx-2">Light</button>
    </div>
    <div class="container border">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link :to="{path: '/'}" class="nav-link hov" aria-current="page">Home Base</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{path: '/masuk'}" class="nav-link hov" aria-current="page">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{path: '/daftar'}" class="nav-link hov" aria-current="page">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{path: '/data-list'}" class="nav-link hov" aria-current="page">Data List</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{path: '/edit'}" class="nav-link hov" aria-current="page">Edit</router-link>
        </li>
      </ul>
    </div>
    <div class="container border">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const GetBsCss = () => import('./../assets/bootstrap501/css/bootstrap.min.css');
const GetBsJs = () => import('./../assets/bootstrap501/js/bootstrap.min.js');

export default {
  name: 'HomeLayout',
  data () {
    return {

    };
  },
  async mounted() {
    await Promise.all([GetBsCss(), GetBsJs()])
  },
}
</script>

<style scoped>
.hov {
  color: black;
  transition: .4s ease-out;
}
.hov:hover {
  color: #FCF8E8;
  background-color: #ECB390;
}
a.router-link-exact-active {
  width: 100%;
  background-color: #94B49F;
  color: #FCF8E8;
}
</style>