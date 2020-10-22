<template>
  <v-card elevation="0" >
    <div class="d-flex justify-space-between main-card">
      <div class="bg-svg ma-0">
        <v-card-title class="ma-4">
          <h4>Semester 1</h4>
        </v-card-title>
      </div>
      <div class="rounded-bg-right pl-4" >
        <v-btn color="white" icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-svg {
  background-image: url("../../assets/card_bg.svg");
  background-size: contain;
}
.main-card {
  background-color: white;
  color: white;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.23);
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