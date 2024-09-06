"use client"
import { useEffect } from 'react';

export default function useDocumentTitle(title) {
	useEffect(() => {
		document.title = title ? `Nebula | ${title}` : 'Nebula';
	}, [title]);
}
