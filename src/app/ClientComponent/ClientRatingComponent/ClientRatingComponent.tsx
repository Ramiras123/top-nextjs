'use client';

import { Rating } from '@/components';
import { useState } from 'react';

export const ClientRatingComponent = () => {
	const [rating, setRating] = useState<number>(0);
	return <Rating rating={rating} isEditable setRating={setRating} />;
};
