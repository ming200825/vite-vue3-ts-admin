<template>
  <el-scrollbar style="height: 100%;">
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive v-if="$route.meta.keepAlive" :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
        <component :is="Component" v-else />
      </transition>
    </router-view>
  </el-scrollbar>
</template>
  
  <script setup lang="ts">
import { defineComponent, computed, unref, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const cachedViews = computed(() => { // 圆的面积
  return store.getters.cachedViews
})


</script>
  