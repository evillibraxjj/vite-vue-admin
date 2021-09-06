export default {
  install: (app) => {
    const files = import.meta.globEager('./*.vue');
    Object.entries(files).forEach(([key, module]) => {
      const fileName = key.replace(/.vue|.\//g, '');
      for (let [, target] of Object.entries(module)) {
        app.component(fileName, target);
      }
    });
  },
};
