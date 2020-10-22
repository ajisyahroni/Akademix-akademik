<!-- pending -->
<template>

  <div>
    <v-row>
      <v-col>
        <draggable
          v-model="list"
          :group="{ name: 'nama_orang', pull: 'clone', put: false }"
          @change="log"
          :move="onMoveCallback"
          :clone="cloneList"
        >
          <transition-group>
            <v-card
              style="cursor: pointer"
              class="my-4"
              v-for="element in list"
              :key="element.id"
            >
              {{ element.name }}
            </v-card>
          </transition-group>
        </draggable>
      </v-col>
      <v-col>
        <draggable v-model="list2" @change="log" group="nama_orang">
          <v-card
            style="cursor: pointer"
            class="my-4"
            v-for="element in list2"
            :key="element.id"
          >
            {{ element.name }}
          </v-card>
        </draggable>
      </v-col>
      <v-col>
        <table border="1">
          <thead>
            <th>shift</th>
            <th v-for="(hari, id) in haris" :key="id" v-text="hari"></th>
          </thead>
          <!-- <tbody> -->

          <tr v-for="(row, rowId) in sequence" :key="rowId">
            <td>{{ row }}</td>
            <draggable
              v-model="tabelku"
              @change="log"
              tag="tbody"
              group="nama_orang"
            >
              <td v-for="(col, colid) in haris" :key="colid">
                <!-- <div v-if="tabelku[rowId][colid].name != null"> -->
                {{ tabelku[rowId][colid].name }}
                <!-- </div> -->
              </td>
            </draggable>
          </tr>

          <!-- </tbody> -->
        </table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <pre>{{ list }}</pre>
      </v-col>
      <v-col>
        <pre>{{ list2 }}</pre>
      </v-col>
      <v-col>
        <pre>{{ tabelku }}</pre>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      sequence: [1, 2, 3],
      haris: ["senin", "selasa", "rabu"],
      tabelku: [
        [
          this.personFactory("ajik"),
          this.personFactory("anita"),
          this.personFactory("arinda"),
        ],
        [
          this.personFactory("syahroni"),
          this.personFactory("susanti"),
          this.personFactory("safira"),
        ],
        [
          this.personFactory("jons"),
          this.personFactory("jenita"),
          this.personFactory("jani"),
        ],
      ],
      list2: [this.personFactory("sutrisno"), this.personFactory("saliman")],
      list: [
        this.personFactory("barjono"),
        this.personFactory("susanto"),
        this.personFactory("katiman"),
        this.personFactory("yanto"),
        this.personFactory("karman"),
      ],
    };
  },
  components: {
    draggable,
  },
  methods: {
    personFactory(name) {
      var ID = function () {
        return "_" + Math.random().toString(36).substr(2, 9);
      };
      return {
        id: ID(),
        name: name,
      };
    },
    log: function (evt) {
      window.console.log(evt);
    },
    onMoveCallback(evt, originalEvent) {
      console.log("evt", evt.relatedContext.index);
      // console.log('originalEvent',originalEvent);
    },
    cloneList({ id, name }) {
      //   console.log(id, name);
      return {
        id: id,
        name: `${name}-clone`,
      };
    },
  },
};
</script>

<style>
</style>