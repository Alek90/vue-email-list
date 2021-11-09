/*  OBBIETTIVI:
    Attraverso l'apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/


const root = new Vue({

    el: '#root',

    data: {

        newEmail: '', // potrei usare una funzione che prenda una nuova email dall'url, fino a generarne 10;

        emails: {
            // qui potrei pushare le 10 email generate;
        }
    },

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{
            console.log(response);
        }),

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{
            console.log(response);
        })
    }
})