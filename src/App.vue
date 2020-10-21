<template>
  <v-app>
    
    <v-main>
      <v-container>
        <h1>component creation</h1>
        <hr>
        <CardSchedule/>

        <h3>Table</h3>
        <TableSchedule/>
        
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CardSchedule from './components/Schedule/Card'
import TableSchedule from './components/Schedule/Table'
export default {
  name: 'App',

  components: {
    CardSchedule,TableSchedule
  },

  data: () => ({
    //
  }),
};
</script>
