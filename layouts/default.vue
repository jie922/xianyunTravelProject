<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

ul,
li,
ol {
  list-style: none;
}

i,
em {
  font-style: normal;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: inherit;
}
</style>
