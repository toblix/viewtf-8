/*
 * Copied here because of minification
 *
 * See http://bit.ly/2tRViJ9
 */

module.exports = function (obj) {
	let cls = '';
	for (const k in obj) {
		if (obj[k]) {
			cls && (cls += ' ');
			cls += k;
		}
	}
	return cls;
};
