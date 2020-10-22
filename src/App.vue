<template>
  <v-app dark>
    <v-main>
      <v-container>
        <v-row justify="space-between">
          <v-col>
            <h1>component creation</h1>
          </v-col>
          <v-col>
            <span>wanna dark fusion</span>
            <v-switch v-model="isDark"></v-switch>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <div class="my-5">
          <h3>Card Jadwal</h3>
          <v-timeline align-top dense>
            <v-timeline-item color="teal" small>
              <h4>2018-2019</h4>
              <v-row>
                <v-col cols="12" sm="6"><CardSchedule /></v-col>
                <v-col cols="12" sm="6"><CardSchedule /></v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </div>

        <h3>Table</h3>
        <TableSchedule />

        <!-- <h5>Try draggable</h5> -->
        <!-- <Draggable/> -->
        <h3>Card guru</h3>
        <CardGuru />
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
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = this.isDark;
    },
  },

  mounted() {
    this.changeTheme();
  },

  components: {
    Draggable,
    CardSchedule,
    TableSchedule,
    CardGuru,
  },
  watch: {
    isDark(val) {
      this.$vuetify.theme.dark = val;
    },
  },
  data: () => ({
    isDark: false,
  }),
};
</script>
