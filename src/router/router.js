import App from '../app'

const home = () => import('../page/home/home')

export default [{
    path: '/',
    component: App,
    children: [
        {
            path: '',
            redirect: '/home'
        },
        {

        }
    ]
}]