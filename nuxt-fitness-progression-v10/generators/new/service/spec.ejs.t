---
to: "services/<%= h.changeCase.kebab(name) %>.spec.js"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.pascal(fileName) + 'Service'
%>
import <%= importName %> from './<%= fileName %>'

describe('Service > <%= fileName %>', () => {
  test('example says hello', () => {
    const result = <%= importName %>.example()
    expect(result).toEqual('hello')
  })
})
