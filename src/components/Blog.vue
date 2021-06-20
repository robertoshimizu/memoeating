<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
    <div class="relative">
      <div
        class="
          text-center
          mx-auto
          max-w-md
          px-4
          sm:max-w-3xl
          sm:px-6
          lg:px-8
          lg:max-w-7xl
        "
      >
        <h2
          class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
        >
          Blog
        </h2>
        <p
          class="
            mt-2
            text-3xl
            font-extrabold
            text-gray-900
            tracking-tight
            sm:text-4xl
          "
        >
          Últimas postagens
        </p>
        <!-- <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p> -->
      </div>
      <div
        class="
          mt-12
          mx-auto
          max-w-md
          px-4
          grid
          gap-8
          sm:max-w-lg
          sm:px-6
          lg:px-8
          lg:grid-cols-3
          lg:max-w-7xl
        "
      >
        <div
          v-for="post in blogPosts"
          :key="post.id"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-cyan-600">
                <a :href="post.category.href" class="hover:underline">
                  {{ post.category.name }}
                </a>
              </p>
              <a :href="post.href" class="block mt-2">
                <p
                  class="text-xl font-semibold text-gray-900 hover:text-indigo"
                >
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.preview }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a :href="post.author.href">
                  <img
                    class="h-10 w-10 rounded-full"
                    :src="post.author.imageUrl"
                    :alt="post.author.name"
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a :href="post.author.href" class="hover:underline">
                    {{ post.author.name }}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.datetime">
                    {{ post.date }}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> {{ post.readingLength }} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const blogPosts = [
  {
    id: 1,
    title: "Vamos montar uma nova playlist?",
    href: "https://www.linkedin.com/pulse/vamos-montar-uma-nova-playlist-renata-shimizu-forner/",
    date: "Out 8, 2020",
    datetime: "2020-10-8",
    category: {
      name: "Artigo",
      href: "https://www.linkedin.com/pulse/vamos-montar-uma-nova-playlist-renata-shimizu-forner/",
    },
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C4D12AQHb2rJlmo3OhA/article-cover_image-shrink_720_1280/0/1602190996882?e=1629936000&v=beta&t=HAPqcUyhpemeCAT2FWz9ufXUQvOFVK-LN2jQjeUvqZc",
    preview:
      "Redes de fast food e casual dining americanas introduziram a combinação de molho Barbecue (BBQ), queijo cheddar e bacon aos brasileiros nas décadas de 80/90 e, desde então, se tornaram ingredientes muito presentes e adorados dentre toppings, dippings e recheios de sanduíches.",
    author: {
      name: "Renata Shimizu Forner",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFxczf4fC6JOg/profile-displayphoto-shrink_100_100/0/1516239293091?e=1629936000&v=beta&t=_h6Gl_gzglJTLVTPpIKsgB9TfAUIKv3PDi39fkRfxZw",
      href: "#",
    },
    readingLength: "6 min",
  },
  {
    id: 2,
    title: "Comida por quilo DIGITAL",
    href: "https://www.linkedin.com/pulse/comida-por-quilo-digital-renata-shimizu-forner/",
    date: "Mai 8, 2020",
    datetime: "2020-03-10",
    category: {
      name: "Artigo",
      href: "https://www.linkedin.com/pulse/comida-por-quilo-digital-renata-shimizu-forner/",
    },
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C4D12AQFsTB2OweO-Sg/article-cover_image-shrink_720_1280/0/1588974990025?e=1629936000&v=beta&t=deKfe_UyLjXKprks2y2Cnd1vVh-1fNGKud7JWNUm92U",
    preview:
      "Muito se tem discutido sobre o novo modelo para o restaurante self service a quilo no pós-covid devido a sua relevância no food service: é uma das opções mais frequentes para a comida do dia-a-dia fora do lar, pois oferece muitos benefícios ao cliente, como:",
    author: {
      name: "Renata Shimizu Forner",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFxczf4fC6JOg/profile-displayphoto-shrink_100_100/0/1516239293091?e=1629936000&v=beta&t=_h6Gl_gzglJTLVTPpIKsgB9TfAUIKv3PDi39fkRfxZw",
      href: "#",
    },
    readingLength: "4 min",
  },
  {
    id: 3,
    title: "Um restaurante chamado LAR",
    href: "https://www.linkedin.com/pulse/um-restaurante-chamado-lar-renata-shimizu-forner/",
    date: "Abr 23, 2020",
    datetime: "2020-02-12",
    category: {
      name: "Artigo",
      href: "https://www.linkedin.com/pulse/um-restaurante-chamado-lar-renata-shimizu-forner/",
    },
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C4D12AQECHg9z0EiuLA/article-cover_image-shrink_720_1280/0/1587661053674?e=1629936000&v=beta&t=k9y7jntlcux4R6MDpdi967w7ugm-ULYZU8tkhoi2WCI",
    preview:
      "O isolamento social devido a pandemia da COVID-19 trouxe mudanças significativas na alimentação como um todo. O ecossistema que impera, atualmente, é o da alimentação DENTRO do LAR, seja a comida preparada ou não na cozinha da sua casa.",
    author: {
      name: "Renata Shimizu Forner",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFxczf4fC6JOg/profile-displayphoto-shrink_100_100/0/1516239293091?e=1629936000&v=beta&t=_h6Gl_gzglJTLVTPpIKsgB9TfAUIKv3PDi39fkRfxZw",
      href: "#",
    },
    readingLength: "5 min",
  },
];
export default {
  name: "Blog",
  setup() {
    return {
      blogPosts,
    };
  },
};
</script>

