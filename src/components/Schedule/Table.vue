<template>
  <div>
    <v-card>
      <v-simple-table>
        <template v-slot:default>
          <!-- head -->
          <thead>
            <tr>
              <th>Jam</th>
              <th v-for="{ name, id } in days" :key="id" v-text="name"></th>
            </tr>
          </thead>

          <!-- body -->
          <tbody>
            <!-- looping for template -->

            <tr v-for="(row, rowId) in template_jadwals" :key="rowId">
              <td>{{ row.start_time }} - {{ row.end_time }}</td>

              <td v-for="(day, colId) in days" :key="colId">
                <!-- jika suda -->
                <v-menu
                  v-if="temporary_jadwals[rowId][colId].guru_name != null"
                  bottom
                  right
                  transition="scale-transition"
                  origin="top left"
                >
                  <template v-slot:activator="{ on }">
                    <v-chip
                      v-on="on"
                      :color="getRandomColor()"
                      text-color="white"
                      link
                      @click:close="removeGuruMapel(rowId, colId)"
                      close
                    >
                      <strong
                        >{{ temporary_jadwals[rowId][colId].guru_name }}
                      </strong>
                      <span>
                        - {{ temporary_jadwals[rowId][colId].mapel_name }}</span
                      >
                    </v-chip>
                  </template>
                  <v-card width="300">
                    <v-list dark>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/john.png"
                          ></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >john@vuetifyjs.com</v-list-item-subtitle
                          >
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-btn icon @click="menu = false">
                            <v-icon>close</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                    <v-list>
                      <v-list-item-content>
                        <v-list-item-title>Kimia</v-list-item-title>
                      </v-list-item-content>
                      <v-chip
                        v-for="(kelas, indexKelas) in ['XI', 'XII', 'XII']"
                        :key="indexKelas"
                        class="mx-1"
                        x-small
                        color="primary"
                        >{{ kelas }}</v-chip
                      >
                    </v-list>
                  </v-card>
                </v-menu>

                <!-- jika belum ada guru -->

                <v-btn
                  v-else
                  icon
                  small
                  @click="showAddGuruMapel(rowId, colId)"
                >
                  <draggable>
                    <v-icon>add_circle_outline</v-icon>
                  </draggable>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <!-- navigation drawer -->
    <v-navigation-drawer v-model="v_navigation_drawer" right app>
      <!-- header -->
      <div>
        <v-list-item v-if="has_selected_mapel">
          <v-list-item-icon>
            <v-btn icon @click="has_selected_mapel = false">
              <v-icon>list</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content v-text="selected_mapel"> </v-list-item-content>
        </v-list-item>

        <v-list-item v-else>
          <v-list-item-icon>
            <v-btn icon @click="closeNavigationDrawer()">
              <v-icon>close</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content> Daftar guru </v-list-item-content>
        </v-list-item>
      </div>
      <!-- end header -->

      <!-- body -->
      <!-- daftar mapels -->
      <v-container v-if="!has_selected_mapel">
        <v-btn
          class="ma-1"
          small
          v-for="(mapel, id) in mapels"
          :key="id"
          depressed
          @click="pilihMapel(mapel)"
          >{{ mapel.name }}</v-btn
        >
      </v-container>

      <!-- nek wis milih guru -->
      <v-list-item v-else v-for="(f, idf) in filltered_guru" :key="idf">
        <v-list-item-content>
          <v-list-item link @click="milihGuruPaskeJadwal(f)">
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ f.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <v-chip
                  v-for="(kelas, indexKelas) in ['XI', 'XII', 'XII']"
                  :key="indexKelas"
                  class="mx-1"
                  x-small
                  color="primary"
                  >{{ kelas }}</v-chip
                >
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
// depdcies
import draggable from "vuedraggable";

// classes
import Guru from "@/classes/guru";
import Mapel from "@/classes/mapel";
import Day from "@/classes/day";
import Template from "@/classes/templateSchedule";
import Schedule from "@/classes/scheduleValue";
// utils and global helper
import getRandomColor from "@/utils/arrayOfColor";

export default {
  components: {
    draggable,
  },
  methods: {
    //   ui logic
    showNavigationDrawer() {
      this.v_navigation_drawer = true;
    },
    closeNavigationDrawer() {
      this.v_navigation_drawer = false;
    },
    // end ui logic
    //-------------------------------

    //helper
    getRandomColor() {
      return getRandomColor();
    },
    showAddGuruMapel(rowId, colId) {
      this.showNavigationDrawer();
      this.selected_row_col.row = rowId;
      this.selected_row_col.col = colId;
    },
    pilihMapel(mapel) {
      this.has_selected_mapel = true;
      this.selected_mapel = mapel.name;
      this.filterGuru(mapel);
    },
    filterGuru(mapel) {
      this.filltered_guru = Array.from(this.gurus).filter(
        (guru) => guru.mapel_id === mapel.id
      );
      this.has_selected_mapel = true;
    },
    milihGuruPaskeJadwal(guru) {
      let mapel = this.mapels.find((mapel) => mapel.id == guru.mapel_id);
      let { row, col } = this.selected_row_col;
      this.temporary_jadwals[row].splice(
        col,
        1,
        Schedule(guru.name, mapel.name)
      );
    },

    removeGuruMapel(rowId, ColId) {
      this.temporary_jadwals[rowId].splice(ColId, 1, {
        guru_name: null,
        mapel_name: null,
      });
    },
  },
  data() {
    return {
      // ui logic data
      v_navigation_drawer: false,
      has_selected_schedule: false,

      // temporary datas
      has_selected_mapel: false,
      selected_mapel: null,

      selected_row_col: { row: null, col: null },
      temporary_jadwals: [],
      filltered_guru: [],
      // end here
      template_jadwals: [],
      gurus: [],
      mapels: [],
      days: [],
    };
  },
  mounted() {
    // guru ins
    this.gurus = [
      Guru({ id: 1, name: "barjono", mapel_id: 1 }),
      Guru({ id: 2, name: "sahroni", mapel_id: 1 }),
      Guru({ id: 3, name: "susanto", mapel_id: 1 }),
      Guru({ id: 4, name: "joko", mapel_id: 2 }),
      Guru({ id: 5, name: "sapardi", mapel_id: 3 }),
      Guru({ id: 6, name: "intan", mapel_id: 4 }),
      Guru({ id: 7, name: "safira", mapel_id: 5 }),
    ];

    // maples ins
    this.mapels = [
      Mapel({ id: 1, name: "IPA BIOLOGI" }),
      Mapel({ id: 2, name: "IPA FISIKA" }),
      Mapel({ id: 3, name: "KIMia" }),
      Mapel({ id: 4, name: "TATA BOGA" }),
      Mapel({ id: 5, name: "GEOGRAFI" }),
    ];

    // day instance
    this.days = [
      Day({ id: 0, name: "Senin" }),
      Day({ id: 1, name: "Selasa" }),
      Day({ id: 2, name: "Rabu" }),
      Day({ id: 3, name: "Kamis" }),
      Day({ id: 4, name: "Jumat" }),
      Day({ id: 5, name: "Sabtu" }),
    ];

    // template_jadwal

    this.template_jadwals = [
      // start_time, end_time
      Template("07:00", "08:00"),
      Template("08:00", "09:00"),
      Template("09:00", "10:00"),
      Template("10:00", "11:00"),
      Template("11:00", "12:00"),
      Template("12:00", "13:00"),
    ];

    for (let i = 0; i < this.template_jadwals.length; i++) {
      this.temporary_jadwals.push([]);
      for (let j = 0; j < this.days.length; j++) {
        this.temporary_jadwals[i][j] = Schedule(null, null);
      }
    }
    // BARKO = BARIS KOLOM
    this.temporary_jadwals[0][0] = Schedule("Suyato", "biologi");
    this.temporary_jadwals[0][1] = Schedule("Supardi", "penjaskes");
    this.temporary_jadwals[1][1] = Schedule("Hanafi", "penjaskes");
    this.temporary_jadwals[5][5] = Schedule("arsida", "biologi");
  },
};
</script>
