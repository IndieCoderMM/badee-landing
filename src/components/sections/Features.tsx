import { memo } from "react";
import type { FeaturesProps } from "config";

const Features = ({ items }: FeaturesProps) => {
	return (
		<div className="mb-16">
			<h2 className="mb-6 text-2xl font-semibold">Features</h2>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{items.map((feature) => {
					const Icon = feature.icon;
					return (
						<div
							key={feature.title}
							className="rounded-2xl border border-secondary/60 group bg-secondary/[0.03] hover:bg-secondary/[0.2] transition hover:shadow-sm p-6"
						>
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/[0.5]">
								<Icon className="h-6 w-6 text-text/80 opacity-90 group-hover:text-accent" />
							</div>
							<h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
							<p className="text-sm leading-relaxed text-gray-400">
								{feature.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default memo(Features);
