---
to: "utils/<%= h.changeCase.kebab(name) %>.spec.js"
---
<%
  const fileName = h.changeCase.kebab(name)
%>
import { example } from './<%= fileName %>'

describe('Utility > <%= fileName %>', () => {
  test('example says hello', () => {
    const result = example()
    expect(result).toEqual('hello')
  })
})
