---
to: "services/<%= h.changeCase.kebab(name) %>.js"
---
<%
  const importName = h.changeCase.pascal(name) + 'Service'
%>
const <%= importName %> = {
  example() {
    return 'hello'
  }
}

export default <%= importName %>
