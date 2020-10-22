<template>
  <v-card elevation="0">
    <v-row justify="space-between" class="main-card">
      <div class="d-flex justify-start flex-nowrap">
        <!-- avatars -->
        <div class="rounded-bg-left">
          <div style="position: relative">
            <img
              class="border-half-rounded"
              src="@/assets/border_ava_normal.svg"
            />
            <v-avatar size="90" class="ma-5">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
            </v-avatar>
          </div>
        </div>

        <!-- name and nik -->
        <div class="d-flex align-center ml-3">
          <div>
            <h1
              class="text-h4 text-lg-h4 text-md-h6 text-sm-h6 text-xs-h6 grey--text text--darken-4"
            >
              Aji Syahroni S.Pd
            </h1>
            <p class="grey--text text--darken-2 mt-1">NIK 19207077</p>
          </div>
        </div>
        <!-- end name and link -->
      </div>

      <!-- more vert -->
      <div class="rounded-bg-right pl-4">
        <v-menu bottom origin="center center" transition="scale-transition">
          <!-- activator -->
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon class="ml-5" color="white">
              <v-icon>more_vert</v-icon>
            </v-btn>
          </template>
          <!-- list inside  -->

          <v-list>
            <v-list-item v-for="(item, index) in 2" :key="index" link>
              <v-list-item-icon>
                <v-icon>close</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="`Menu ${item}`"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <!-- end list inside  -->
        </v-menu>
      </div>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.border-half-rounded {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 0px;
  margin-bottom: 12px;
  transform: rotate(20deg);
}
.main-card {
  background-color: white;
  color: white;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.23);
}

.rounded-bg-left {
  background-color: #d4f8ff;
  clip-path: circle(90% at 9% 50%);
}

.main-card > .rounded-bg-right {
  /* flex-grow: 0.02; */
  /* border-top-right-radius: 1%; */
  background-color: #ff9e59;
  clip-path: circle(50% at 90% 5%);
  transition: clip-path 0.25s ease-in-out;
}

.main-card > .rounded-bg-right:hover {
  clip-path: circle(54% at 90% 5%);
  background-color: #fa8e40;
}
</style>