import { siteConfig } from "config";
import type React from "react";
import { memo } from "react";

const Footer: React.FC = () => {
	return (
		<footer className="py-8 text-center space-y-4 border-t border-secondary/50">
			<div className="flex justify-center space-x-6 text-sm text-gray-400">
				<a href="/privacy" className="transition-colors hover:text-accent">
					Privacy Policy
				</a>
				<a href="/terms" className="transition-colors hover:text-accent">
					Terms of Service
				</a>
			</div>

			<div className="text-sm text-gray-500">
				<p>
					&copy; {new Date().getFullYear()}{" "}
					<span className="text-text/80">{siteConfig.title}</span>
          {" "}All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default memo(Footer);
