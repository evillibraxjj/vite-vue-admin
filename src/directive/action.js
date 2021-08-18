export default {
	mounted(el, { value }) {
		try {
			const routeMeta = JSON.parse(sessionStorage.getItem('routeMeta'));
			const actions = routeMeta.actions;
			if (!actions || !actions.includes(value)) el.parentNode && el.parentNode.removeChild(el);
		} catch (error) {
			el.parentNode && el.parentNode.removeChild(el);
		}
	},
};
