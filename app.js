/*  OBBIETTIVI:
    Attraverso l'apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

// potrei usare una funzione che prenda una nuova  email dall'url, fino a generarne 10;

// poi potrei pushare le 10 email generate;
        


const root = new Vue({

    el: '#root',

    data: {  

        emails: [
            // qui verranno pushate le 10 email generate;
        ]
    },

    methods: {

        
        // qui la funzione "vergine" che utilizzeremo:

        /** Richiediamo un indirizzo email ad un'api;
         * @param {string} url al quale effettuare la richiesta;
         */
        generateEmail(url) {

            axios.get(url).then(response => {
                this.emails.push(response.data.response);
            });
        }
    },

    mounted() {

        // richiamiamo la funzione applicando l'url desiderato al parametro:
        for(let i = 0; i < 10; i++){
            this.generateEmail('https://flynn.boolean.careers/exercises/api/random/mail');
        }
        console.log(this.emails);
      
    }
})