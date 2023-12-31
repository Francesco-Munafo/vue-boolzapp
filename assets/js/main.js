const { createApp } = Vue

createApp({
    data() {
        return {

            active: 0,
            newMessage: '',
            userSearch: '',

            answers: ['Va bene', 'Ok', 'Bene bene, tu?', 'Sto giocando alla play, tu?', 'Devo andare a fare la spesa', 'Scusami non posso parlare ora', 'No', 'Hey! Quanto tempo!', 'Hai visto Gerry Scotti che canta Eminem creato dalla AI?', 'Ci becchiamo su Discord?', 'Mangi da me stasera? Cucino io!', 'Jojo ha fatto un macello a casa', 'Voglio la pizza'],

            recentActivity: '',


            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]



        }
    },
    methods: {

        //Change the active parameter making it equals to the index
        showActive(index) {
            console.log(this.active);
            console.log(index);
            this.active = index
            console.log(this.active);
            console.log(index);


        },

        //This function create a date based on the current date(EN Format) and formats it returning IT format
        dateGenerator() {
            const currentDate = new Date();
            const day = currentDate.getDate().toString().padStart(2, '0');
            const month = currentDate.getMonth().toString().padStart(2, '0');
            const year = currentDate.getFullYear();
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');

            return `${day}/${month}/${year} ${hours}:${minutes}`
        },

        //Push input's text into chat array and changes the status of the user
        sendMessage() {

            
            this.recentActivity = 'Online';
            


            if (this.newMessage.trim() !== '') {
                this.contacts[this.active].messages.push({

                    date: this.dateGenerator(),
                    message: this.newMessage,
                    status: 'sent'

                })

                this.$nextTick(() => {
                    this.recentActivity = 'Sta scrivendo...';
                })

                setTimeout(this.chatAnswer, 2000, this.dateGenerator());
                
                setTimeout(() => {
                    this.recentActivity = 'Ultimo accesso alle' + ' ' + this.messageTime(this.active, this.contacts[this.active].messages.length - 1);
                }, 5000)
                
                this.newMessage = '';


            }
            
            
            this.newMessage = '';
            
            
            this.scrollToBottom();
            
            
        },

        //Function for auto random answers
        chatAnswer(time) {
            

            console.log('risposta');
            this.recentActivity = 'Online'
            this.contacts[this.active].messages.push({

                date: time,
                message: this.answers[Math.floor(Math.random() * (this.answers.length))],
                status: 'received'

            }
            )

            //this.recentActivity = 'Online';

            

            this.scrollToBottom();
        },

        //This function gets the date from the array and gets only hours and minutes
        messageTime(contactIndex, messageIndex) {
            const messageDate = this.contacts[contactIndex].messages[messageIndex].date.split(' '); //This is the last contact message date
            //console.log(messageDate);
            const messageTime = messageDate[1].split(':');
            //console.log(messageTime);

            return `${messageTime[0]}:${messageTime[1]}`
        },

        //Function to remove message using context menu
        removeMessage(message) {
            console.log(message);
            console.log('eliminato');
            this.contacts[this.active].messages.splice(message, 1)


        },

        //Function that keeps the scroll height always on the bottom of the chat
        scrollToBottom() {
            const targetRef = this.$refs.myScrollTarget;
            this.$nextTick(() => {
                targetRef.scrollTo(
                    {
                        top: targetRef.scrollHeight,
                        left: 0,
                        behavior: "smooth"
                    }
                );
            });
        },
        //This function removes all messages from the active chat. You can invoke it by clicking on the 3 dots on top of the current chat and by selecting "Elimina messaggi"
        deleteMessages(){
            this.contacts[this.active].messages = [];
        }

    },
    //This function updates the last access for the current chat
    beforeMount(){
        this.recentActivity = 'Ultimo accesso alle' + ' ' + this.messageTime(this.active, this.contacts[this.active].messages.length - 1);
    }
}).mount('#app')