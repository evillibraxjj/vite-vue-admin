const sexData = {
	1: '男',
	0: '女',
};
export const sexDic = {
	filter: (key) => sexData[key] || '未知',
	map: sexData,
	list: Object.entries(sexData).map(([key, value]) => {
		return {
			key,
			value,
		};
	}),
};
