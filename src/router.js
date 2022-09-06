import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetails';
import CoachesList from './pages/coaches/CoachesList';
import CoachRegister from './pages/coaches/CoachRegister';
import ContactCoach from './pages/requests/ContactCoach';
import RequestsRecieved from './pages/requests/RequestsReceived';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: RequestsRecieved },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
