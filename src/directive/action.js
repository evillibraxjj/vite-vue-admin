export default {
  mounted(el, { instance, value }) {
    const actions = instance.$root.route.meta.actions;
    if (!actions || !actions.includes(value)) el.parentNode && el.parentNode.removeChild(el);
  },
};
