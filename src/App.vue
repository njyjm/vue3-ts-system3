<template>
  <div id="nav">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <router-link class="navbar-brand" to="/">用户管理系统</router-link>
      
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">首页 </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">关于我们</router-link>
          </li>
          
        </ul>
        <ul class="navbar-nav ">
          <li class="nav-item ">
            <router-link class="nav-link" to="/add">添加用户 </router-link>
          </li>
          
          
        </ul>
      </div>
    </nav>
    
  </div>
  <router-view />
</template>

<style>

</style>
