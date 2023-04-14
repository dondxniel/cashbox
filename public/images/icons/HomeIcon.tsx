function HomeIcon({ stroke = "#999999" }: { stroke: string }) {
	return (
		<svg
			width="19"
			height="22"
			viewBox="0 0 19 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 8.99989L0.999999 15.9999C0.999998 18.7613 3.23857 20.9999 6 20.9999L13 20.9999C15.7614 20.9999 18 18.7613 18 15.9999L18 8.9999"
				stroke={stroke}
				strokeWidth="2"
			/>
			<path
				d="M18 8.9999L13.75 4.4999L11.681 2.30923C10.4972 1.05572 8.50283 1.05572 7.31896 2.30923L0.999998 8.99989"
				stroke={stroke}
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export default HomeIcon;
