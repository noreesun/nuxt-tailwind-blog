<script setup lang="ts">
defineProps<{
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}>();
</script>

<template>
  <div class="grid overflow-hidden rounded shadow-xl group">
    <div
      v-if="image"
      class="grid__image h-[180px] w-full relative overflow-hidden"
    ><NuxtLink :to="`/${slug}`" class="inline-blog-mb-2">
      <img
        :src="image"
        :alt="title"
        class="absolute object-cover w-full h-full duration-300 group-hover:scale-110"
      />
    </NuxtLink>
    </div>
    <div class="p-5 grid__content">
      <NuxtLink :to="`/${slug}`" class="inline-blog-mb-2"><h3 class="mb-2 text-xl font-semibold grid__content-title">
        {{ title }}
      </h3>
      </NuxtLink>
      <ClientOnly>
        <p v-if="excerpt" 
          v-html ="excerpt"
          class="mb-2 overflow-hidden text-sm grid__content-excerpt text-clip">
        </p>
        
      </ClientOnly>
      <!-- :to กรณีที่ link เราใช้เป็นตัวแปร ถ้า Link แบบ fix จะใช้เป็น to อย่างเดียว  -->
      <NuxtLink v-if="slug" class="inline-flex items-center border-b-2 blog__readmore border-primary-500":to="`/${slug}`">
        Read more >>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>

