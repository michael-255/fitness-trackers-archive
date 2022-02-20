---
to: "components/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.vue"
---
<%
  const componentName = h.changeCase.pascal(name)
%>
<script>
export default {
  name: '<%= componentName %>',
}
</script>

<template>
  <div><%= componentName %></div>
</template>

<% if (useStyles) { %>
<style lang="scss" scoped>

</style>
<% } %>
