<template>
  <v-row>
    <v-col v-for="i in 1" :key="i" cols="5" class="mx-2">
      <v-card elevation="0" class="rounded-card">
        <v-row justify="space-between" class="main-card">
          <div class="rounded-bg-left">
            <v-col>
              <div>
                <h1 class="text-h5 text-lg-h3 text-md-h4">semester 1</h1>
              </div>
            </v-col>
          </div>

          <div class="rounded-bg-right">
            <v-col>
              <v-btn icon color="white">
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-col>
          </div>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.main-card {
  background-color: white;
  color: white;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.23);
}

.main-card > .rounded-bg-left {
  background-color: #00b4d8;
  width: 70%;
  clip-path: circle(70% at 40% 50%);
}

.main-card > .rounded-bg-right {
  border-top-right-radius: 10%;
  background-color: #ff9e59;
  clip-path: circle(70% at 90% 5%);
  transition: clip-path 0.25s ease-in-out;
}

.main-card > .rounded-bg-right:hover {
  clip-path: circle(80% at 90% 5%);
  background-color: #fa8e40;
}
</style>