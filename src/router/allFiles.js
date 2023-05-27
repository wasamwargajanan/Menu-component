export default [
    {
        path:'/home',
        name:'HomeVue',
        component:() => import('@/routes/Home.vue')
    },
    {
        path:'/account',
        name:'AccountVue',
        component:() => import('@/routes/Account.vue')
    },
    {
        path:'/users',
        name:'UsersVue',
        component:() => import('@/routes/Users.vue')
    }
]