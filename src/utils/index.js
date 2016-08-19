const defaultOptions = {
	length: 16, 
	chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

export const getRandomAlphanumericStr = (options = defaultOptions) => {
    let result = '';
    for (let i = options.length; i > 0; --i) {
    	result += options.chars[Math.round(Math.random() * (options.chars.length - 1))];
    }
    return result;
}