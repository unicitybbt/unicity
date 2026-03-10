import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes';
import { useAppStore } from '@/stores/app';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

// 페이지이동시 팝업제거처리 (타이밍이슈로 주석처리)
// router.beforeEach((to) => {
//   const appStore = useAppStore();

//   if (to.name === 'home') {
//       return true;
//     }

//   if (!appStore.appVisible) {
//     console.warn('[Route Guard] app hidden 상태 → 진입 불가');
//     return false;
//   }
//   return true;
// })

export default router
