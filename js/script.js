const DateTime = luxon.DateTime;
const { createApp } = Vue;

createApp({
    data() {
        return {
            newMsg: '',
            search: '',
            texting: false,
            online: false,
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
                this.newMsg= '';
                setTimeout(() => {
                    this.online= true;
                    setTimeout(() => {
                        this.texting= true;  
                        setTimeout(() => {
                            let obj = {
                                date: DateTime.local().toFormat('T'),
                                message: 'ok',
                                status: 'received'
                            };
                
                            this.contacts[this.activeContact].messages.push(obj);  
                        }, Math.floor(Math.random() * 10000 + 1000)); 
                    }, Math.floor(Math.random() * 5000 + 2000));
                }, Math.floor(Math.random() * 2000 + 1000));
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
        deleteMsg(index) {
            let arr = this.contacts[index].messages;
            let conf = confirm("Are you sure you want to delete this message?");
            if (conf) {
                if (arr === 1) {
                    this.contacts[this.activeContact].messages.splice(0, 1);
                } else {
                    this.contacts[this.activeContact].messages.splice(index, 1);
                }
            }
        },
        lastMsg(index){
            let arr = this.contacts[index].messages;
            let lastItem = arr[arr.length - 1]
            if (arr.length > 0) {
                return lastItem.message
            }
            else{

                return `...`;
            }
        },
        lastDate(index){
            let arr = this.contacts[index].messages;
            let lastItem = arr[arr.length - 1]

            if (arr.length > 0) {
                return lastItem.date
            }
            else{

                return `...`;
            }
        },
        lastActiveDate(){
            let arr = this.contacts[this.activeContact].messages;
            let lastItem = arr[arr.length - 1];
            let checkArr = [];

            arr.forEach(element => {
                checkArr.push(element.status)
            });

            if (arr.length > 0) {
                if (lastItem.status == 'received') { 
                    return `Ultimo acceso effetuato alle ${lastItem.date}`;
                }
                else if (this.texting == true) {
                    return 'Sta scrivendo...';
                }
                else{
                    if (this.online) {
                        return `online`;
                    }
                    else{
                        return `offline`;
                    }
                }
            }

            
            if (!checkArr.includes('received') || checkArr.length < 0) {
                return `offline`;
            }
        },
    },
}).mount('#app')