<template>
    <v-container>
        <li v-for="item in items" :key="item.id" style="list-style: none">
        </li>
    </v-container>


</template>

<script>
import axios from 'axios';
import { server } from '../helper';
  export default {
    name: "Notification",
    data: () => ({
        notifications : [],
        headers: [
          { text: "Date", value: "date" },
          { text: "Content", value: "content"},
        ],
        items: [
          { date: "", content: "" },
        ],

    }),
    mounted() {
        axios.get(server.baseURLDev+'notifications/getNotifications?email_user='+localStorage.getItem('email'))
        .then(response => {
            console.log("notifications")
            console.log(response)
            response.data.forEach(element => {
                var e = { date : element.date_and_time, content : element.content}
                this.items.push(e)
            });
            console.log(this.items)
        })
        .catch(error => {
            console.log(error)
        })
    }
  }

</script>