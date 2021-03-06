/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const UserRouter = {
  path: '/Society',
  component: Layout,
  redirect: '/Society/SocietyList',
  name: 'Society',
  meta: {
    title: '客户管理',
    icon: 'component',
    roles: ['admin', 'seniorAdmin']
  },
  children: [
    {
      path: 'SocietyList',
      component: () => import('@/views/Society/SocietyList'),
      name: 'SocietyList',
      meta: { title: '客户管理' }
    }
  ]
}
export default UserRouter
