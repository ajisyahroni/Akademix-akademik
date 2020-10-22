<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>component creation</h1>
        <hr />
        <CardSchedule />

        <h3>Table</h3>
        <!-- <TableSchedule /> -->

        <h5>Try draggable</h5>
        <!-- <Draggable/> -->
        <h3>Card guru</h3>
        <CardGuru/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//guru
import CardGuru from "./components/Guru/Card";
//schdl
import CardSchedule from "./components/Schedule/Card";
import TableSchedule from "./components/Schedule/Table";
//dbug
import Draggable from "./components/debug/Dragable";
export default {
  name: "App",

  components: {
    Draggable,
    CardSchedule,
    TableSchedule,
    CardGuru
  },

  data: () => ({
    //
  }),
};
</script>
