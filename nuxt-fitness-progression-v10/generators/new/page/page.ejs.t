---
to: "pages/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.vue"
---
<%
  const componentName = h.changeCase.pascal(name) + 'Page'
%>
<script>
import PAGE_HEAD from '../constants/page-head'

export default {
  name: '<%= componentName %>',
  layout: 'default',
  head() {
    return {
      title: PAGE_HEAD.app.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: PAGE_HEAD.app.description,
        },
      ],
    }
  },
}
</script>

<template>
  <div><%= componentName %></div>
</template>

<% if (useStyles) { %>
<style lang="scss" scoped>

</style>
<% } %>
