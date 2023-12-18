const DateTime = luxon.DateTime;
const { createApp } = Vue;

createApp({
    data() {
        return {
            newMsg: '',
            search: '',
            searchMsg: '',
            contactName: '',
            tel: '',
            darkMode: true,
            searchMsgCheck: true,
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
                            status: 'sent',
                            visibleMsg: true,
                        },
                        {
                            date: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            visibleMsg: true,
                        },
                        {
                            date: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received',
                            visibleMsg: true,
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
                            status: 'sent',
                            visibleMsg: true,
                        },
                        {
                            date: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            visibleMsg: true,
                        },
                        {
                            date: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            visibleMsg: true,
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
                            status: 'received',
                            visibleMsg: true,
                        },
                        {
                            date: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            visibleMsg: true,
                        },
                        {
                            date: '16:15',
                            message: 'Ah scusa!',
                            status: 'received',
                            visibleMsg: true,
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
                            status: 'sent',
                            visibleMsg: true,
                        },
                        {
                            date: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visibleMsg: true,
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
                            status: 'sent',
                            visibleMsg: true,
                        },
                        {
                            date: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            visibleMsg: true,
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
                            status: 'sent',
                            visibleMsg: true,
                        },
                        {
                            date: '15:50',
                            message: 'Non ancora',
                            status: 'received',
                            visibleMsg: true,
                        },
                        {
                            date: '15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            visibleMsg: true,
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
                            status: 'sent',
                            visibleMsg: true,
                        },
                        {
                            date: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            visibleMsg: true,
                        },
                        {
                            date: '16:30',
                            message: 'Di nulla :)',
                            status: 'sent',
                            visibleMsg: true,
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
                            status: 'received',
                            visibleMsg: true,
                        },
                        {
                            date: '15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            visibleMsg: true,
                        },
                        {
                            date: '15:51',
                            message: 'OK!!',
                            status: 'received',
                            visibleMsg: true,
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
            const obj = {
                date: DateTime.local().toFormat('T'),
                message: this.newMsg,
                status: 'sent',
                visibleMsg: true,
            };

            if (obj.message.length > 0) {
                this.contacts[this.activeContact].messages.push(obj);
                this.newMsg= '';
                setTimeout(() => {
                    this.online= true;
                    setTimeout(() => {
                        this.texting = true;  
                        setTimeout(() => {
                            const arrMsg = ['Ciao','Ok','Scusa, non posso rispondere.', 'Devo aver perso il tuo numero, chi sei?', 'Ciao Franco, come stai?', 'Credo tu abbia sbagliato numero'];
                            const randomNum = Math.floor(Math.random() * arrMsg.length + 0);

                            const obj = {
                                date: DateTime.local().toFormat('T'),
                                message: arrMsg[randomNum],
                                status: 'received',
                                visibleMsg: true,
                            };
                
                            this.contacts[this.activeContact].messages.push(obj);  
                            this.texting = false;
                            this.online= false;
                        }, Math.floor(Math.random() * 10000 + 1000)); 
                    }, Math.floor(Math.random() * 5000 + 1000));
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
            const arr = this.contacts[index].messages;
            const lastItem = arr[arr.length - 1]
            if (arr.length > 0) {
                return lastItem.message
            }
            else{

                return `..`;
            }
        },
        lastDate(index){
            const arr = this.contacts[index].messages;
            const lastItem = arr[arr.length - 1]

            if (arr.length > 0) {
                return lastItem.date
            }
            else{

                return `..`;
            }
        },
        lastActiveDate(){
            const arr = this.contacts[this.activeContact].messages;
            const lastItem = arr[arr.length - 1];
            const checkArr = [];

            arr.forEach(element => {
                checkArr.push(element.status)
            });

            if (arr.length > 0) {
                if (lastItem.status == 'received') { 
                    return `Ultimo acceso effettuato alle ${lastItem.date}`;
                }
                else if (this.texting == true) {
                    return 'Sta scrivendo..';
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
        addContact() {
            const obj = {
                name: this.contactName,
                avatar: './img/avatar_user.jpg',
                visible: true,
                messages: []
            }

            this.contacts.unshift(obj);
            this.contactName = '';
            this.tel = '';
        },
        searchMessage(){
            const arr = this.contacts[this.activeContact].messages;

            arr.forEach((element) => {
                if(element.message.toLowerCase().includes(this.searchMsg.toLowerCase())){
                    element.visibleMsg = true;
                }
                else{
                    element.visibleMsg = false;
                }
            });
        },
    },
}).mount('#app')