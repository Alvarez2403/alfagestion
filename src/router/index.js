import { createRouter, createWebHistory } from 'vue-router'
import ing_profesores from '../views/ing_profesores.vue'
import ing_estudiantes from '../views/ing_estudiantes.vue'
import olvid_contrasena from '../views/olvid_contrasena.vue'
import Student_progress from '../views/student_progress.vue'
import evidencia_sub from '../views/evidencia_sub.vue'
import pregun_frecu from '../views/pregun_frecu.vue'
import solicitud_apro from '../views/solicitud_apro.vue'
import ini_estudiante from '../views/ini_estudiante.vue'
import ini_docentes from '../views/ini_docentes.vue'
import actividades_ver from '../views/actividades_ver'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/ing_profesores",
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
    {
      path: "/student_progress",
      name: "student_progress",
      component: Student_progress
    },
    {
      path: "/pregun_frecu",
      name: "pregun_frecu",
      component: pregun_frecu
    },
    {
      path: "/evidencia_sub",
      name: "evidencia_sub",
      component: evidencia_sub
    },
    {
      path: "/solicitud_apro",
      name: "solicitud_apro",
      component: solicitud_apro
    },
    {
      path: "/ini_estudiante",
      name: "ini_estudiante",
      component: ini_estudiante
    },
    {
      path: "/ini_docentes",
      name: "ini_docentes",
      component: ini_docentes
    },
    {
      path: "/actividades_ver",
      name: "actividades_ver",
      component: actividades_ver
    }
  ]
})

export default router;