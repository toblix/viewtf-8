import React, { Component } from 'react';
import './Utf8Byte.css';

import os from './obj-str';

class Utf8Byte extends Component {

	render() {
		const { byte, idx, totalBytes } = this.props;

		const bitString = byte.toString(2).padStart(8, '0');

		const isSingle = totalBytes === 1;
		const isLeading = !isSingle && bitString.slice(0,2) !== '10';
		const isContinuation = !isSingle && !isLeading;

		const cn = os({
			'Utf8Byte': true,
			'Utf8Byte--leading': isLeading,
			'Utf8Byte--continuation': isContinuation,
			'Utf8Byte--single': isSingle,
			'Utf8Byte--0': idx === 0,
			'Utf8Byte--1': idx === 1,
			'Utf8Byte--2': idx === 2,
			'Utf8Byte--3': idx === 3,
		});


		const encodingPart = _encodingPart(bitString, idx, totalBytes);
		const codePointPart = bitString.substr(encodingPart.length);

		return (
			<div className={cn}>
				<div className="Utf8Byte-numeric">
					{byte}
				</div>
				<div className="Utf8Byte-hex">
					#{byte.toString(16).toUpperCase().padStart(2, '0')}
				</div>
				<div className="Utf8Byte-binary">
					<span
						className="Utf8Byte-encoding-part"
						title={_encodingPartTitle(encodingPart)}
					>
						{encodingPart}
					</span>
					<span className="Utf8Byte-code-point-part">
						{codePointPart}
					</span>

				</div>
			</div>
		);
	}
}

export default Utf8Byte;

function _encodingPart(bitString, byteIdx, totalBytes) {
	if (totalBytes === 1)
		// Only byte
		return bitString.slice(0, 1);

	if (byteIdx === totalBytes-1)
		// Most significant byte
		return bitString.slice(0, totalBytes + 1);


	return bitString.slice(0, 2)
}

function _encodingPartTitle(encodingPart) {
	if(encodingPart === '0') {
		return `• The first bit is 0, which means there is only one byte in this code point.`;
	}

	let title = `• The first bit is 1, which means there are more than one byte in this code point.`;

	if(encodingPart.startsWith('11')) {
		return `${title}\n• The second bit is 1, which means this byte is the first of these.\n• The number of 1s at the start of the byte tells us how many bytes there are in total in this code point.`
	}

	if(encodingPart.startsWith('10')) {
		return `${title}\n• The second bit is 0, which means it is a continuation byte (i.e. not the first byte)`
	}
}