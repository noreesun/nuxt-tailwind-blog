<script setup lang="ts">
const params = useRoute().params
const { data : categories } = await useWPAPI().getCategory(params.slug as string);

//กำหนด Category ให้กับ data
const category = categories.value[0]

//อ่าน Posts จาก API
const { data:posts, error : postsError} = await useWPAPI().getPosts(category.id);

console.log(category);


useHead({
        title:category.value[0].name,
        meta :[
            {name : 'description', content: `This is the ${category.name}`},
            {name : 'keywords', content: category.value[0].name}
        ]
    })

</script>

<template>
    <div class="p-6 mx-auto max-w-7xl lg:px-8">
      <div class="my-6">
        <div v-if="posts?.length==0" class="my-4 text-2xl text-center">ไม่พบ Content ในหมวดหมู่ {{ category.description }} นี้</div>
        <div class="grid gap-10 sm:grid-cols-3">
          <BlogGrid
            v-for="post in posts"
            :key="post.id"
            :title="post.title.rendered"
            :excerpt="post.excerpt.rendered"
            :image="post._embedded['wp:featuredmedia'][0]?.source_url"
            :slug="post.slug"
          />
        </div>
      </div>
    </div>
  </template>

<style scoped></style>