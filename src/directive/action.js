export default {
	mounted(el, { value }) {
		try {
			const route = JSON.parse(sessionStorage.getItem('route'));
			const routes = JSON.parse(sessionStorage.getItem('routes'));
			const actions = routes.find((e) => e.name == route.name).meta.actions;
			if (!actions || !actions.includes(value)) el.parentNode && el.parentNode.removeChild(el);
		} catch (error) {
			el.parentNode && el.parentNode.removeChild(el);
		}
	},
};
