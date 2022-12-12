// 手机号格式化
export const formatPhoneOnkeyUp = (mobile = '') => {
	let value = String(mobile).replace(/\D/g, '').substring(0, 11);
	let valueLen = value.length;
	if (valueLen > 3 && valueLen < 8) {
		value = value.replace(/^(...)/g, "$1 ");
	} else if (valueLen >= 8) {
		value = value.replace(/^(...)(....)/g, "$1 $2 ");
	}
	return value;
}

// 格式化钱
export const formatPrice = (price) => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
