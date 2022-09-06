import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';
import BaseBadge from './components/ui/BaseBadge';
import BaseSpinner from './components/ui/BaseSpinner';
import BaseDialog from './components/ui/BaseDialog';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.use(store);
app.use(router);
app.mount('#app');
