const { preprocess } = require('../src/parse');

test('preprocess - empty', () => {
  const texts = preprocess(``, {});

  expect(texts).toMatchInlineSnapshot(`Array []`);
});

test('preprocess - single jsx element', () => {
  const texts = preprocess(
    `
<Component prop={1} />
`,
    {}
  );

  expect(texts).toMatchInlineSnapshot(`
Array [
  "<Component prop={1} />",
]
`);
});

test('parses - multiple jsx elements', () => {
  const texts = preprocess(
    `
<Component1 prop={1} />
<Component2 prop={2} />
`,
    {}
  );

  expect(texts).toMatchInlineSnapshot(`
Array [
  "<Component1 prop={1} />
<Component2 prop={2} />",
]
`);
});

test('parses - multiple imports', () => {
  const texts = preprocess(
    `
import { X } from 'x';
import y from 'y';
`,
    {}
  );

  expect(texts).toMatchInlineSnapshot(`
Array [
  "import { X } from 'x';
import y from 'y';
",
]
`);
});
