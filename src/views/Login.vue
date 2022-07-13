<template>
  <div class="container my-3">
    <div class="card">
      <div class="card-header">
        <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" /> Login
      </div>
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col-6 mx-auto text-center">
              <img src="./../assets/avatar.png" width="200" alt="avatar" />
            </div>
            <div class="col-6">
              <div class="card">
                <div class="card-header">
                  <font-awesome-icon icon="fa-solid fa-user-lock" />
                  <span style="font-size:.9rem;font-weight:bold;margin-left:5px;">Please Insert Your Account</span>
                </div>
                <form>
                  <div class="px-3 mt-3">
                    <div class="input-group">
                      <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-square-envelope" /></span>
                      <input type="email" class="form-control" placeholder="Email" />
                    </div>
                  </div>
                  <div class="p-3">
                    <div class="input-group">
                      <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-lock" /></span>
                      <input :type="hidePassword ? 'password' : 'text'" class="form-control" placeholder="Password" />
                      <span class="input-group-text" style="background:none;width:3rem;">
                        <font-awesome-icon :icon="hidePassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'" style="cursor:pointer;margin-left:2px;" @click="hidePassword = !hidePassword" />
                      </span>
                    </div>
                  </div>
                  <div class="my-2 px-3">
                    <button type="button" class="btn btn-outline-success">Masuk</button>
                    <button type="button" class="btn btn-outline-primary ms-2">Daftar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>


export default {
  name: 'LoginViews',
  data () {
    return {
      hidePassword: true,
    };
  },
}
</script>

<style scoped>

</style>