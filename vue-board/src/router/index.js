import Vue from "vue";
import Router from "vue-router";
import HelloVue from "@/components/HelloVue";
import Read from "@/components/Read";
import Create from "@/components/Create";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "HelloVue",
    //   component: HelloVue
    // },
    {
      path: "/",
      name: "Read",
      component: Read
    },
    {
      path: "/create",
      name: "Create",
      component: Create
    }
  ]
});
