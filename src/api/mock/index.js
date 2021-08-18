import Mock from 'mockjs';

export default {
	install: () => {
		Mock.setup({
			timeout: '600-1200',
		});
		const files = import.meta.globEager('./*.js');
		console.info(files);
		Object.entries(files).forEach(([key, module]) => {
			if (key === './index.js') return;
			for (let [path, target] of Object.entries(module.default)) {
				const [rtype, rurl] = path.split('|');
				const [, controller] = key.split('.');
				Mock.mock(RegExp(controller + rurl), rtype, target);
			}
		});
	},
};
