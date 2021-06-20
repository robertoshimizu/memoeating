<template>
  <header class="bg-white">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Memoeating</span>
            <img
              class="w-auto"
              style="height: 12rem"
              src="../assets/image.svg"
              alt=""
            />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a
              v-for="link in navigation"
              :key="link.name"
              :href="link.href"
              class="text-lg font-large text-black hover:text-indigo-100"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <a
          v-for="link in navigation"
          :key="link.name"
          :href="link.href"
          class="text-base font-medium text-black hover:text-indigo-100"
        >
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
const navigation = [
  { name: "Soluções", href: "#" },
  { name: "Rede Colaborativa", href: "#" },
  { name: "Sobre nós", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contatos", href: "#" },
];

export default {
  name: "Header",

  setup() {
    return {
      navigation,
    };
  },
};
</script>
