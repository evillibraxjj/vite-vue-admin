export default {
  mounted(el, binding) {
    try {
      const routeMeta = binding.instance.$root.route.meat;
      const actions = routeMeta.actions;
      if (!actions || !actions.includes(binding.value)) el.parentNode && el.parentNode.removeChild(el);
    } catch (error) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  },
};
