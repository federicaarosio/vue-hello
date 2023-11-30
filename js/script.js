const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'tiny and fast',
            source: "https://images.unsplash.com/photo-1635604133914-e68aa11e99a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
}).mount('#app');