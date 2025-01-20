<script setup lang="ts">
    //  อ่าน Params จาก URL
    const params:any = useRoute().params
    // console.log(params)

    //อ่าน Post จาก API
    const { data : posts } = await useWPAPI().getPost(params.slug)
    const post = posts.value?.[0]
    console.log(post)


</script>

<template>
    <section class="p-6 mx-auto max-w-7xl lg:px-6">
        <div class="my-6">
            <div v-if="post">
                <!-- Blog Title-->
                 <ClientOnly>
                    <h1 class="mb-5 text-3xl font-bold leading-snug text-center" v-html="post.title.rendered"></h1>
                 </ClientOnly>
                <!-- Blog Meta-->
                <div class="flex justify-center gap-5 mb-10">
                    Written by : <span class="text-gray-500>">{{ post._embedded["author"][0]?.name }}</span>
                    Published on : <span class="text-gray-500>">{{ post.date }}</span>
                    Modified on : <span class="text-gray-500>">{{ post.modified }}</span>
                </div>
                <!-- Blog Image-->
                <div class="h-[250px] sm:h-[500px] w-full rounded shadow-xl relative overflow-hidden mb-1">
                    <img 
                        :src="post._embedded['wp:featuredmedia'][0]?.source_url"
                        :alt="post.title.rendered"
                        class="absolute object-cover w-full h-full"
                    />
                </div>
                <!-- Blog Content-->
                <ClientOnly>
                    <div class="blog__content" v-html="post.content.rendered"></div>
                </ClientOnly>
            </div>
        </div>

    </section>
    <div>

    </div>
</template>



<style lang="postcss">
    .blog__content p {
        @apply my-5;
    }

    .blog__content h2 {
        @apply text-xl sm:text-3xl my-5;
    }

</style>