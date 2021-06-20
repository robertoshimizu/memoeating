  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<template>
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div
        class="
          bg-gray-50
          py-16
          px-4
          sm:px-6
          lg:col-span-2
          lg:px-8
          lg:py-24
          xl:pr-12
        "
      >
        <div class="max-w-lg mx-auto">
          <h2
            class="
              text-2xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-3xl
            "
          >
            Entre em contato
          </h2>
          <!-- <p class="mt-3 text-lg leading-6 text-gray-500">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p> -->
          <dl class="mt-8 text-base text-gray-500">
            <!-- <div>
              <dt class="sr-only">Postal address</dt>
              <dd>
                <p>742 Evergreen Terrace</p>
                <p>Springfield, OR 12345</p>
              </dd>
            </div> -->
            <div class="mt-6">
              <dt class="sr-only">Phone number</dt>
              <dd class="flex">
                <PhoneIcon
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-3"> +55 (11) 99561 1405 </span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <MailIcon
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-3"> rshimizu@memoeating.com.br </span>
              </dd>
            </div>
            <div class="mt-8 flex space-x-6">
              <a
                v-for="item in navigation.social"
                :key="item.name"
                :href="item.href"
                class="text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
            <p class="mt-8 text-base text-gray-400">
              &copy; 2021 MemoEating Todos os direitos reservados.
            </p>
          </dl>
          <!-- <p class="mt-6 text-base text-gray-500">
            Looking for careers?
            {{ " " }}
            <a href="#" class="font-medium text-gray-700 underline"
              >View all job openings</a
            >.
          </p> -->
        </div>
      </div>
      <div
        class="
          bg-white
          py-16
          px-4
          sm:px-6
          lg:col-span-3
          lg:py-24
          lg:px-8
          xl:pl-12
        "
      >
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
            <div>
              <label for="full_name" class="sr-only">Nome completo</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                autocomplete="name"
                class="
                  block
                  w-full
                  shadow-sm
                  py-3
                  px-4
                  placeholder-gray-500
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  border-gray-300
                  rounded-md
                "
                placeholder="Nome completo"
              />
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="
                  block
                  w-full
                  shadow-sm
                  py-3
                  px-4
                  placeholder-gray-500
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  border-gray-300
                  rounded-md
                "
                placeholder="Email"
              />
            </div>
            <div>
              <label for="phone" class="sr-only">Fone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                autocomplete="tel"
                class="
                  block
                  w-full
                  shadow-sm
                  py-3
                  px-4
                  placeholder-gray-500
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  border-gray-300
                  rounded-md
                "
                placeholder="Fone"
              />
            </div>
            <div>
              <label for="message" class="sr-only">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="
                  block
                  w-full
                  shadow-sm
                  py-3
                  px-4
                  placeholder-gray-500
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  border border-gray-300
                  rounded-md
                "
                placeholder="Mensagem"
              />
            </div>
            <div>
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-3
                  px-6
                  border border-transparent
                  shadow-sm
                  text-base
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                "
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MailIcon, PhoneIcon } from "@heroicons/vue/outline";
import { defineComponent, h } from "vue";

const navigation = {
  social: [
    {
      name: "LinkedInd",
      href: "https://www.linkedin.com/company/memo-eating",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 48 48" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/memo_eating/",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    // {
    //   name: "Twitter",
    //   href: "#",
    //   icon: defineComponent({
    //     render: () =>
    //       h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
    //         h("path", {
    //           d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
    //         }),
    //       ]),
    //   }),
    // },
    // {
    //   name: "GitHub",
    //   href: "#",
    //   icon: defineComponent({
    //     render: () =>
    //       h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
    //         h("path", {
    //           "fill-rule": "evenodd",
    //           d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    //           "clip-rule": "evenodd",
    //         }),
    //       ]),
    //   }),
    // },
    // {
    //   name: "Dribbble",
    //   href: "#",
    //   icon: defineComponent({
    //     render: () =>
    //       h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
    //         h("path", {
    //           "fill-rule": "evenodd",
    //           d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
    //           "clip-rule": "evenodd",
    //         }),
    //       ]),
    //   }),
    // },
  ],
};

export default {
  name: "Footer",
  components: {
    MailIcon,
    PhoneIcon,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>

