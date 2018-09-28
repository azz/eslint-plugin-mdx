const eslint = require('eslint');

const engine = new eslint.CLIEngine({
  extends: ['plugin:mdx/recommended'],
});

function lint(code) {
  return engine
    .executeOnText(code, 'test/mdx/file.mdx')
    .results.map(r => r.messages);
}

test('lints', () => {
  const result = lint(
    `
Hi.

<Bye />
`
  );

  expect(result).toMatchInlineSnapshot(`
Array [
  Array [
    Object {
      "column": 2,
      "endColumn": 5,
      "endLine": 1,
      "line": 1,
      "message": "'Bye' is not defined.",
      "nodeType": "JSXIdentifier",
      "ruleId": "react/jsx-no-undef",
      "severity": 2,
    },
  ],
]
`);
});
