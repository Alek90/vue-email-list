/*  OBBIETTIVI:
    Attraverso l'apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/


const root = new Vue({

    el: '#root',

    data: {

        newEmail: '', // potrei usare una funzione che prenda una nuova email dall'url, fino a generarne 10;

        emails: [
            // qui potrei pushare le 10 email generate;
        ]
    },

    methods: {

        generateEmail(url) {

            axios.get(url).then(response => {
                this.emails.push(response.data.response);
            });
        }
    },

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{
            console.log(response);
            this.newEmail = response.data.response
            console.log(this.newEmail);
        })

        for(let i = 0; i < 10; i++){
            this.generateEmail('https://flynn.boolean.careers/exercises/api/random/mail')
            console.log(this.emails);
        }
      
    }
})