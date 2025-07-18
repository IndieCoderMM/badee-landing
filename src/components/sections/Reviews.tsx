import { motion } from "framer-motion";
import { memo } from "react";
import type { Review, ReviewsProps } from "config";
import RatingStars from "../ui/RatingStars";

const Reviews = ({ items }: ReviewsProps) => {
	return (
		<div className="mb-16">
			<motion.h2
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mb-6 text-2xl font-semibold"
			>
				User Reviews
			</motion.h2>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{items.map((review: Review, index: number) => (
					<motion.div
						key={`review-${review.author.replace(/\s+/g, "-")}-${index}`}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
						className="rounded-2xl border border-secondary/40 bg-secondary/[0.1] p-6"
					>
						<div className="mb-4 flex items-center gap-4">
							<div className="flex-shrink-0">
								{review.avatar ? (
									<img
										src={review.avatar}
										alt={`${review.author} avatar`}
										className="h-12 w-12 rounded-full object-cover border border-secondar/40"
									/>
								) : (
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/[0.08] text-text/90">
										{review.author.charAt(0)}
									</div>
								)}
							</div>
							<div>
								<div className="font-medium">{review.author}</div>
								<RatingStars rating={review.rating} />
							</div>
						</div>
						<p className="text-gray-400">{review.text}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default memo(Reviews);
