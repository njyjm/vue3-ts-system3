<template>
  <div class="edit container">
    <form @submit.prevent="updateCustomer()">
      <div class="form-group">
        <label>姓名</label>
        <input
          type="text"
          class="form-control"
          placeholder="name..."
          v-model="customer.name"
        />
      </div>
      <div class="form-group">
        <label>电话</label>
        <input
          type="text"
          class="form-control"
          placeholder="phone..."
          v-model="customer.phone"
        />
      </div>
      <div class="form-group">
        <label>邮箱</label>
        <input
          type="email"
          class="form-control"
          placeholder="email..."
          v-model="customer.email"
        />
      </div>
      <div class="form-group">
        <label>学历</label>
        <input
          type="text"
          class="form-control"
          placeholder="education..."
          v-model="customer.education"
        />
      </div>
      <div class="form-group">
        <label>毕业学校</label>
        <input
          type="text"
          class="form-control"
          placeholder="graduation school..."
          v-model="customer.graducationschool"
        />
      </div>
      <div class="form-group">
        <label>专业</label>
        <input
          type="text"
          class="form-control"
          placeholder="profession..."
          v-model="customer.profession"
        />
      </div>

      <div class="form-group">
        <label>个人简介</label>
        <textarea
          class="form-control"
          rows="7"
          v-model="customer.profile"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-block">确定</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Customer } from "@/utils/types.ts";
import { getUser,updateUser } from '@/api/user';


export default defineComponent({
  name: "Edit",
  components: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    // console.log(router);
    const customer = ref<Customer>({
      name: "",
      phone: "",
      email: "",
      education: "",
      graducationschool: "",
      profession: "",
      profile: "",
    });

    // 发起请求
    onMounted(async ()=>{
      const res = await getUser(route.params.id);
      
      customer.value = res.data;

    });

    const updateCustomer = async () => {
      
      let uCustomer = {
        name: customer.value.name,
        phone: customer.value.phone,
        email: customer.value.email,
        education: customer.value.education,
        graducationschool: customer.value.graducationschool,
        profession: customer.value.profession,
        profile: customer.value.profile,
      };
      const res = await updateUser(route.params.id,uCustomer);
      // axios.put("http://localhost:3000/users/" + route.params.id, uCustomer);
      // 页面跳转
      // router.push("/");
      router.push({ path:"/",query:{alert:"用户信息修改成功！"}});
    };
    return { customer, updateCustomer };
  },
});
</script>
