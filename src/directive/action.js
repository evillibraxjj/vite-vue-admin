import cache from '@/cache';

export default {
	mounted(el, { value }) {
		try {
			const actions = cache.routes.find((e) => e.name == cache.route.name).meta.actions;
			if (!actions || !actions.includes(value)) el.parentNode && el.parentNode.removeChild(el);
		} catch (error) {
			el.parentNode && el.parentNode.removeChild(el);
		}
	},
};
