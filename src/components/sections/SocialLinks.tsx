import { memo } from "react";
import type { SocialLink, SocialLinksProps } from "config";

const SocialLinks = ({ items }: SocialLinksProps) => {
	return (
		<div className="mb-8">
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="mx-auto border-t w-full border-secondary/80" />
				</div>
				<div className="relative flex justify-center">
					<span className="px-6 text-sm font-medium tracking-wider bg-background text-text/50 uppercase">
          Contact Us
					</span>
				</div>
			</div>

			<div className="mt-6 flex justify-center gap-4">
				{items.map((link: SocialLink) => {
					const Icon = link.icon;
					return (
						<a
							key={link.label}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group rounded-xl border border-secondary/10 bg-secondary/[0.03] p-3 transition-all duration-200 hover:bg-primary/[0.05]"
							aria-label={link.label}
						>
							<Icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-accent" />
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default memo(SocialLinks);
