<!-- <script setup lang="ts">
    //use runtime config
    //const posts = useFetch(`https://www.itgenius.co.th/sandbox_api/flutter_news_api/wp-json/wp/v2/posts`)
    // console.log (posts)

    const { data : posts, error } = await useWPAPI().getPosts()


</script> -->

<!-- <template>
    <div class="max-w-7xl lg:px-8 mx-auto p-6">
        <div class="my-6">
            <h1 class="text-2xl my-4">Blog</h1>
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <h2>{{ post.title.rendered }}</h2>
                    <div v-html="post.content.rendered"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style> -->

<script setup lang="ts">
    const config = useRuntimeConfig();

    const { data: posts, error } = await useWPAPI().getPosts();
</script>

<template>
  <div class="p-6 mx-auto max-w-7xl lg:px-8">
    <div class="my-6">
      <h1 class="my-4 text-2xl">Blog</h1>
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