<script setup lang="ts">
const { data, error } = await useWPAPI().getCategories();
console.log(data);

// สร้างฟังก์ชันสำหรับสุ่มสี
const getRandomColor = () => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
  return colors[Math.floor(Math.random() * colors.length)];
}
</script>

<template>
  <section>
    <div class="p-6 mx-auto max-w-7xl lg:px-8">
      <div class="my-6">
        <h1 class="my-4 text-2xl">Categories</h1>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="category in data"
            :key="category.id"
            :class="[getRandomColor(), 'inline-block border border-opacity-20 px-4 py-2 rounded-lg']"
          >
            <NuxtLink :to="`/categories/${category.slug}`" class="text-white whitespace-nowrap">
              #{{ category.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>