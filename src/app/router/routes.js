import WelcomePage from 'pages/Welcome'

export default [
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomePage
  },
  {
    path: '/todo-list',
    name: 'todolist',
    component: () => import('pages/ToDoList')
  },
  {
    path: '/quote-generator',
    name: 'quotegenerator',
    component: () => import('pages/QuoteGenerator')
  },
  {
    path: '/form-validation',
    name: 'formvalidation',
    component: () => import('pages/FormValidation')
  },
  {
    path: '*',
    redirect: '/welcome'
  }
]
