<template>
  <div class="details container">
      <h1 class="page-header">
          <router-link class="btn btn-success" to="/">返回</router-link>
          <span style="float:right">
              <router-link class="btn btn-primary" :to="'/edit/' + customer.id">
                编辑
              </router-link>
              &nbsp;
              <button class="btn btn-danger" @click="deleteCustomer()">
                  删除
              </button>
          </span>

      </h1>
      <ul class="list-group">
  <li class="list-group-item">
      <i class="fa fa-angellist" aria-hidden="true"></i>
      {{customer.name}}</li>
  <li class="list-group-item">
      <i class="fa fa-apple" aria-hidden="true"></i>
      {{customer.phone}}</li>
  <li class="list-group-item">
      <i class="fa fa-android" aria-hidden="true"></i>
      {{customer.email}}</li>
  <li class="list-group-item">
      <i class="fa fa-angellist" aria-hidden="true"></i>
      {{customer.education}}</li>
  <li class="list-group-item">
      <i class="fa fa-angellist" aria-hidden="true"></i>
      {{customer.graducationschool}}</li>
  <li class="list-group-item">
      <i class="fa fa-angellist" aria-hidden="true"></i>
      {{customer.profession}}</li>
  <li class="list-group-item">
      <i class="fa fa-angellist" aria-hidden="true"></i>
      {{customer.profile}}</li>
  
</ul>
  </div>
</template>

<script lang="ts">
import { useRoute,useRouter } from "vue-router"
import { ref,defineComponent,onMounted } from 'vue';
import { Customer } from "@/utils/types.ts"
import axios from 'axios'
import { getUser,deleteUser } from '@/api/user'

export default {
    setup(){
        const route = useRoute();
        const router = useRouter();
        // console.log(route)
        const customer = ref<Object>({});

        // 发起请求
    onMounted(async ()=>{
      const res = await getUser(route.params.id);
      // axios.get("http://localhost:3000/users/" + route.params.id);
      // console.log(res.data);
      customer.value = res.data;

    });
    const deleteCustomer = async () =>{
        await deleteUser(route.params.id); 
        // axios.delete("http://localhost:3000/users/" + route.params.id);
        // router.push("/");
        router.push({ path:"/",query:{alert:"用户信息删除成功！"}});

    }


    return {customer,deleteCustomer}
    }


}
</script>

<style>

</style>