import { createRouter, createMemoryHistory } from "vue-router"; 

export default createRouter({
    history: createMemoryHistory(),
    routes: [{
        path: "/",
        component: {
            render() {
                return 'hey there'
            }
        }
    }]
})