<template>
  <div id="q-app" class="bg-image" style="min-height: 100vh;">
    <div class="q-pa-md row items-start q-gutter-md ">

      <q-card bordered class="my-card" flat style="background: radial-gradient(circle, #383838 0%, #1d1d1d 100%)">
        <q-slide-transition>


          <div v-show="expandedPic">

            <WelcomeLabel></WelcomeLabel>

            <BattleshipSettings></BattleshipSettings>
          </div>
        </q-slide-transition>
        <q-btn
          :icon="expandedPic ?'keyboard_arrow_up' : 'keyboard_arrow_down'"
          color="grey"
          dense
          flat
          round
          @click="expandedPic = !expandedPic;expanded = !expanded"
        ></q-btn>

        <q-card-actions>
          <q-space></q-space>
          <q-btn
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            color="white"
            dense
            flat
            round
            @click="expanded = !expanded ; expandedPic = !expandedPic"
          ></q-btn>
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded">
            <q-separator></q-separator>
            <q-card-section class="text-subitle2 text-white">
              <q-card-section class="text-subitle2 text-white text-center">
              <q-img class="b-img text-center"
                     src="images/battleship.jpg"
              ></q-img>
                </q-card-section>
              <Battleground></Battleground>

            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </div>

</template>

<script>
import WelcomeLabel from "components/WelcomeLabel";
import BattleshipSettings from "components/BattleshipSettings";
import Battleground from "components/Battleground";
import {ref} from 'vue'

export default {
  name: "BattleshipGame.vue",
  components: {
    WelcomeLabel: WelcomeLabel,
    BattleshipSettings: BattleshipSettings,
    Battleground: Battleground,

  },
  setup() {
    return {
      expandedPic: ref(true),
      expanded: ref(false),
    }
  }
}

</script>

<style>
.my-card {
  width: 100%;
  max-width: 85%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.bg-image {
  background-image: url("/images/seaBackground1Wide.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.b-img{
  max-width: 35%;
}

</style>
