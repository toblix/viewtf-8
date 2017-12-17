import React from 'react';
import utf8 from 'utf8';
import './CodePoint.css';
import Utf8Byte from './Utf8Byte';

const CodePoint = ({ codePoint })=> {
	const utf8Encoded = utf8.encode(codePoint);
	const utf8Bytes = utf8Encoded.split('');

	return (
		<div className="CodePoint">
			<div className="CodePoint-code-point">{codePoint}</div>
			<div>Code point: {codePoint.codePointAt(0)}</div>
			<div>Code point hex: \u{codePoint.codePointAt(0).toString(16)}</div>
			<div>UTF-16 length: {codePoint.length} bytes</div>
			<div>UTF-8 length: {utf8Encoded.length} bytes</div>
			<div className="CodePoint-utf8-bytes">
				{utf8Bytes.map((b, idx)=><Utf8Byte
					key={idx}
					idx={utf8Bytes.length - idx - 1}
					totalBytes={utf8Bytes.length}
					byte={parseInt(b.charCodeAt(0), 10)}
				/>)}
			</div>
		</div>
	);
};

export default CodePoint;
