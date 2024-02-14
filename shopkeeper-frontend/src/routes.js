import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Charts = React.lazy(() => import('./views/charts/Charts'))

// Products 
const allProduct = React.lazy(() => import('./views/products/allProduct/index'))
const addNewProduct = React.lazy(() => import('./views/products/addNewProduct/index'))
const liveOrders = React.lazy(()=> import('./views/products/liveOrders/liveOrder'))

//Profiles
const profiles = React.lazy(()=> import("./views/profiles/profileSection/profile"))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/products', name: 'Products', element: allProduct, exact: true },
  { path: '/products/allProduct', name: 'allProduct', element: allProduct },
  { path: '/products/addNewProduct', name: 'addNewProduct', element: addNewProduct },
  { path: '/products/liveOrders', name: 'liveOrders', element: liveOrders },
  { path: '/profiles', name: 'allProduct', element: profiles, exact:true},
  { path: '/profiles', name: 'addNewProduct', element: profiles },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
