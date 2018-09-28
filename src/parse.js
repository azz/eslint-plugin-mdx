import { createMdxAstCompiler } from '@mdx-js/mdx';

export function preprocess(code /* , options */) {
  const texts = [];

  const compiler = createMdxAstCompiler({
    mdPlugins: [],
  });
  const mdxAst = compiler.parse(code);

  for (const child of mdxAst.children) {
    if (
      child.type === 'html' ||
      child.type === 'import' ||
      child.type === 'export'
    ) {
      texts.push(child.value);
    }
  }

  return texts;
}
