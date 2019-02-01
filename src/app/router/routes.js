import Home from 'pages/Home'

export default [
  {
    path: '/',
    name: 'main',
    component: Home
  },
  {
    path: '*',
    redirect: '/'
  }
]
