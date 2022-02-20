---
to: "classes/<%= h.changeCase.kebab(name) %>.spec.js"
---
<%
  const fileName = h.changeCase.kebab(name)
  const className = h.changeCase.pascal(name)
%>
import <%= className %> from './<%= fileName %>'

describe('Class(es) > <%= fileName %>', () => {
  test('<%= className %> has correct defaults', () => {
    const object = new <%= className %>()
    expect(object).toEqual({
      example: null
    })
  })
})
