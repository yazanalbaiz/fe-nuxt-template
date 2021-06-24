<template>
  <v-row>
    <v-col cols="12">
      <ol vocab="http://schema.org/" typeof="BreadcrumbList">
        <li property="itemListElement" typeof="ListItem">
          <NuxtLink property="item" typeof="WebPage" to="/">
            <span property="name">Vonage Learn</span>
          </NuxtLink>
          <meta property="position" content="1" />
        </li>
        <li
          v-for="(crumb, index) in crumbs"
          :key="index"
          property="itemListElement"
          typeof="ListItem"
        >
          <NuxtLink property="item" typeof="WebPage" :to="crumb.path">
            <span property="name">{{ crumb.title }}</span>
          </NuxtLink>
          <meta property="position" :content="index + 2" />
        </li>
      </ol>
    </v-col>
    <v-col cols="12"> <NuxtChild /></v-col>
  </v-row>
</template>

<script>
export default {
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler() {
        const fullPath = this.$route.fullPath;
        const params = fullPath.startsWith('/')
          ? fullPath.substring(1).split('/')
          : fullPath.split('/');
        const crumbs = [];

        let path = '';

        params.forEach((param) => {
          path = `${path}/${param}`;
          const match = this.$router.match(path);
          const title = param.replace(/-/g, ' ');
          if (match.name !== null && title) {
            crumbs.push({
              title,
              ...match,
            });
          }
        });
        this.crumbs = crumbs;
      },
    },
  },
  data() {
    return {
      crumbs: null,
    };
  },
  computed: {},
};
</script>