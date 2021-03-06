window.cipher = {
	encode: (offset, name) => {
		let codeCipher;
		let position;
		let textResult = '';
		for (let i = 0; i < name.length; i++) {
			const Ascii = name.charCodeAt(i);
			if (Ascii > 90) {
				position = Ascii - 97 + (offset % 26);
				codeCipher = (position % 26) + 97;
			} else {
				position = Ascii - 65 + (offset % 26);
				codeCipher = (position % 26) + 65;
			} const letterCipher = String.fromCharCode(codeCipher);
			textResult += letterCipher;
		} return textResult;
	},
	decode: (offset, name) => {
		let codeCipher, position;
		let textResult = '';
		for (let i = 0; i < name.length; i++) {
			const codeAscii = name.charCodeAt(i);
			if (codeAscii > 90) {
				position = codeAscii - 97 - (offset % 26);
				if (position < 0) {
					codeCipher = (position % 26) + 123;
				} else {
					codeCipher = (position % 26) + 97;
				}
			}
			else {
				position = codeAscii - 65 - (offset % 26);
				if (position < 0) {
					codeCipher = (position % 26) + 91;
				} else {
					codeCipher = (position % 26) + 65;
				}
			}
			const letterCipher = String.fromCharCode(codeCipher);
			textResult += letterCipher;
		}
		return textResult;
	}
}