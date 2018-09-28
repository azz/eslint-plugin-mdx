import { preprocess } from './parse';

export const processors = {
  '.mdx': {
    preprocess(text /* , filename */) {
      return [preprocess(text).join('')];
    },

    // takes a Message[][] and filename
    postprocess: function(messages /* , filename */) {
      return messages.reduce((all, more) => all.concat(more), []);
    },

    supportsAutofix: false, // TODO
  },
};

export const configs = {
  recommended: {
    plugins: ['mdx'],
    rules: {
      'react/react-in-jsx-scope': 0,
    },
  },
};
