<template>
  <div class="home container">
    <Alert v-if="alert" :message="alert" />
    <input type="text" class="form-control" placeholder="search..." v-model="filterInput"/>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">姓名</th>
      <th scope="col">电话</th>
      <th scope="col">邮箱</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="customer in filterBy(customers,filterInput)" :key="customer.id">
      <th scope="row">{{customer.id}}</th>
      <td>{{customer.name}}</td>
      <td>{{customer.phone}}</td>
      <td>{{customer.email}}</td>
      <td>
        <router-link class="btn btn-warning" :to="'/details/' + customer.id">详情</router-link>
      </td>
    </tr>
    
  </tbody>
</table>


  </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted } from 'vue';
import { Customer } from "@/utils/types.ts"
import Alert from "@/components/Alert.vue"
import { useRoute } from "vue-router"
import { getAllUsers } from '@/api/user'

export default defineComponent({
  name: 'Home',
  components: {Alert},
  setup(){
    const customers = ref<Customer[]>([]);
    const alert = ref<string>("");
    const route = useRoute();
    const filterInput = ref<string>("");
    
    if (route.query.alert){
      alert.value = String(route.query.alert);

      setTimeout(()=>{
        alert.value = "";
      },2000)
    }
    // 发起请求
    onMounted(async ()=>{
      const res = await getAllUsers(); 
      
      customers.value = res.data;

    });

    // 在现有数据中进行过滤
    const filterBy = (customers:Customer[],value:string) => {
      return customers.filter((customer:Customer)=>
        customer.name.match(value)
      );

    };
    return {
      alert,
      filterInput,
      customers,
      filterBy
    }

  }
});
</script>
