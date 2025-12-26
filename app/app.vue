<script>
import {useThemeManager} from "~/composables/useThemeManager.js";

const themeMangager = useThemeManager();
themeMangager.setTheme("dark");
</script>
<template>
    <ButtonTheme/>
  <div>
    <NuxtPage/>
  </div>
</template>
