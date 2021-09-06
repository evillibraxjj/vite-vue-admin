export default {
  install: (app) => {
    const files = import.meta.globEager('./*.js');
    Object.entries(files).forEach(([key, module]) => {
      const fileName = key.replace(/.js|.\//g, '');
      app.directive(fileName, module.default);
    });
  },
};
