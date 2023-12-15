const DateTime = luxon.DateTime;
const { createApp } = Vue

createApp({
    data() {
        return {
            newMsg: '',
            search: '',
            activeContact: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Gioia',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        },
                        {
                            date: '16:30',
                            message: 'Di nulla :)',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        changeContact(index){
            this.activeContact = index;
        },
        sendMsg(){
            let obj = {
                date: DateTime.local().toFormat('T'),
                message: this.newMsg,
                status: 'sent'
            };

            if (obj.message.length > 0) {
                this.contacts[this.activeContact].messages.push(obj);
                this.newMsg = '';
                setTimeout(() => {
                    let obj = {
                        date: DateTime.local().toFormat('T'),
                        message: 'ok',
                        status: 'received'
                    };
        
                    this.contacts[this.activeContact].messages.push(obj);  
                }, 1000);   
            }
                       
        },
        searchContact(){
            this.contacts.forEach((element) => {
                if(element.name.toLowerCase().includes(this.search.toLowerCase())){
                    element.visible = true;
                }
                else{
                    element.visible = false;
                }
            });
        },
        deleteMsg(index){
            let conf = confirm("Are you sure you want to delete this message?");
            if (conf) {
                this.contacts[this.activeContact].messages.splice(index, 1);
            }
        },
        lastMsg(index){
            let arr = this.contacts[index].messages;
            let lastItem = arr[arr.length - 1]

            return lastItem.message
        },
        lastDate(index){
            let arr = this.contacts[index].messages;
            let lastItem = arr[arr.length - 1]

            return lastItem.date
        },
        lastActiveDate(){
            let arr = this.contacts[this.activeContact].messages;
            let lastItem = arr[arr.length - 1];

            if (lastItem.status == 'received') {
                return `Ultimo acceso effetuato alle ${lastItem.date}`
            }
            else{
                return "offline" 
            }
        }
    },
}).mount('#app')