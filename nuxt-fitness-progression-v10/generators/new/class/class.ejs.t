---
to: "classes/<%= h.changeCase.kebab(name) %>.js"
---
<%
  const className = h.changeCase.pascal(name)
%>
export default class <%= className %> {
  constructor({ example = null } = {}) {
    this.example = example
  }
}
