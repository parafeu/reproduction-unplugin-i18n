<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HelloWorld from "./components/HelloWorld.vue";

const { t } = useI18n();
</script>

<template>
  <div>
    {{ t("test_plural", 1) }}
  </div>
  <div>
    {{ t("test_interpolation", { hello: "Salut", world: "Le monde" }) }}
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
