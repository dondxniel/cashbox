function LogoutIcon({ stroke = "#999999" }: { stroke: string }) {
	return (
		<svg
			width="33"
			height="33"
			viewBox="0 0 33 33"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M23.375 21.9999L28.875 16.4999M28.875 16.4999L23.375 10.9999M28.875 16.4999L9.625 16.4999M17.875 21.9999L17.875 23.3749C17.875 24.4689 17.4404 25.5181 16.6668 26.2917C15.8932 27.0653 14.844 27.4999 13.75 27.4999L8.25 27.4999C7.15598 27.4999 6.10677 27.0653 5.33318 26.2917C4.55959 25.5181 4.125 24.4689 4.125 23.3749L4.125 9.62488C4.125 8.53086 4.5596 7.48165 5.33318 6.70806C6.10677 5.93448 7.15598 5.49988 8.25 5.49988L13.75 5.49988C14.844 5.49988 15.8932 5.93448 16.6668 6.70806C17.4404 7.48165 17.875 8.53086 17.875 9.62488L17.875 10.9999"
				stroke={stroke}
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default LogoutIcon;