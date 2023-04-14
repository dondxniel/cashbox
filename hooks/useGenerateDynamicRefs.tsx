import { createRef, useRef } from "react";

function useGenerateDynamicRefs(length: number) {
	const ref = useRef<any>(
		new Array(length).fill(null).map(() => createRef())
	);
	return { ref };
}

export default useGenerateDynamicRefs;
