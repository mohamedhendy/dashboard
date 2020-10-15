import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'components/Hello.vue'
// import Sample from 'components/Sample.vue'
import Settings from 'components/settings.vue'
import Home from 'components/Home.vue'
import Supervisor from 'components/Supervisor.vue'
import Users from 'components/Users.vue'
import Sections from 'components/Sections.vue'
import Subjects from 'components/Subjects.vue'
import Pages from 'components/Pages.vue'
import Announcement from 'components/Announcement.vue'
import Links from 'components/Links.vue'
import ContactUs from 'components/ContactUs.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  baseUrl: '',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/Supervisor',
      name: 'Supervisor',
      component: Supervisor
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users
    },
    {
      path: '/Sections',
      name: 'Sections',
      component: Sections
    },
    {
      path: '/Subjects',
      name: 'Subjects',
      component: Subjects
    },
    {
      path: '/Pages',
      name: 'Pages',
      component: Pages
    },
    {
      path: '/Announcement',
      name: 'Announcement',
      component: Announcement
    },
    {
      path: '/Links',
      name: 'Links',
      component: Links
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    }
  ],
  linkActiveClass: 'active'
})
