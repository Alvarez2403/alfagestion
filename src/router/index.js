import { createRouter, createWebHistory } from 'vue-router'
import ing_profesores from '../views/ing_profesores.vue'
import ing_estudiantes from '../views/ing_estudiantes.vue'
import olvid_contrasena from '../views/olvid_contrasena.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "ing_profesores",
      component: ing_profesores
    },
    {
      path: "/ing_estudiantes",
      name: "ing_estudiantes",
      component: ing_estudiantes
    },
    {
      path: "/olvid_contrasena",
      name: "olvid_contrasena",
      component: olvid_contrasena
    },
  ]
})

export default router;