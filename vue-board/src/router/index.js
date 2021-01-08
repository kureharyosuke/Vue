import Vue from "vue";
import Router from "vue-router";
import HelloVue from "@/components/HelloVue";
import Read from "@/components/Read";
import Create from "@/components/Create";
import Detail from "@/components/Detail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloVue",
      component: HelloVue
    },
    {
      path: "/read",
      name: "Read",
      component: Read
    },
    {
      path: "/create",
      name: "Create",
      component: Create
    },
    {
      path: "/detail:createid",
      name: "Detail",
      component: Detail
    }
  ]
});
