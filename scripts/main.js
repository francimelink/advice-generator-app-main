const app = Vue.createApp({
    data() {
        return {
            adviceId: 1,
            adviceText: '',
        }
    },
    mounted() {
        this.newAdvice()
    },
    methods: {
        newAdvice: function () {
            fetch('https://api.adviceslip.com/advice')
                .then(response => {
                    return response.json()
                }).then(data => {
                    this.adviceId = data.slip.id
                    this.adviceText = data.slip.advice
                }).catch(e => {
                    console.log(e);
                })

        }
    }
})
app.mount('#app')
