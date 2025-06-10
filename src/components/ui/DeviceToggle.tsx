import { motion } from "framer-motion";
import { memo, useCallback } from "react";
import type { DeviceToggleProps } from "config";

const DeviceToggle = ({ activeDevice, onToggle }: DeviceToggleProps) => {
	const handleIphoneToggle = useCallback(() => onToggle("iphone"), [onToggle]);
	const handleIpadToggle = useCallback(() => onToggle("android"), [onToggle]);

	return (
		<div className="flex items-center justify-center gap-1.5 rounded-lg border border-primary/10 bg-background p-1">
			<DeviceButton
				isActive={activeDevice === "android"}
				onClick={handleIpadToggle}
				label="android"
			/>
			<DeviceButton
				isActive={activeDevice === "iphone"}
				onClick={handleIphoneToggle}
				label="iPhone"
			/>
		</div>
	);
};

interface DeviceButtonProps {
	isActive: boolean;
	onClick: () => void;
	label: string;
}

const DeviceButton = memo(({ isActive, onClick, label }: DeviceButtonProps) => (
	<motion.button
		type="button"
		onClick={onClick}
		className={`relative rounded-md px-3.5 py-1.5 text-sm transition-colors ${
			isActive ? "text-white" : "text-text/60 hover:text-text"
		}`}
		whileTap={{ scale: 0.95 }}
	>
		{isActive && (
			<motion.div
				layoutId="activeDevice"
				className="absolute inset-0 rounded-md bg-primary/80"
				transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
			/>
		)}
		<span className="relative z-10 capitalize">{label}</span>
	</motion.button>
));

DeviceButton.displayName = "DeviceButton";

export default memo(DeviceToggle);
