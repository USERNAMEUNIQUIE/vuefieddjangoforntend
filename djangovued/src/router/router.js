import Logout from '../components/logout'
import Blog from '../components/blog'
import Register from '../components/register'
import Signin from '../components/signin'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Signin
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {
      requiresAuth: true,
    }
  },


  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresVisitor: true,
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  }
];

export default routes
