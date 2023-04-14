function WalletCard() {
	return (
		<div className="gradient-bg-effect p-5 rounded-2xl h-36 flex flex-col justify-between">
			<div className="flex flex-row justify-between items-center">
				<img src="/images/icons/WalletIcon.svg" />
				<div>@daniel</div>
			</div>
			<div className="text-2xl font-normal">₦13,500</div>
		</div>
	);
}

export default WalletCard;
