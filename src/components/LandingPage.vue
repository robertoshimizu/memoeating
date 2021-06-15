<template>
  <Header/>
  <Hero/>
  <Features/>
  <Team/>
  <Blog/>
  <Footer/>
  
</template>

<script>
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Team from './Team'
import Blog from './Blog'
import Footer from './Footer'

export default {
  name: 'Landing',
  components: {
    Header,
    Hero,
    Features,
    Team,
    Blog,
    Footer
  }

}
</script>

<style>

</style>