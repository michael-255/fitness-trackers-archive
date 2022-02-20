---
to: "layouts/<%= h.changeCase.kebab(name) %>.vue"
---
<%
  const componentName = h.changeCase.pascal(name) + 'Layout'
%>
<script>
export default {
  name: '<%= componentName %>',
}
</script>

<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<% if (useStyles) { %>
<style lang="scss" scoped>

</style>
<% } %>
