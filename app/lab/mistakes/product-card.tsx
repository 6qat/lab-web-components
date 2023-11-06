'use client';

import React, { useEffect, useState } from 'react';

type ProductCardProps = {
  id?: string;
};

// @ts-ignore
function ProductCard({ id }: ProductCardProps) {
  const [something, setSomething] = useState('blabla');

  useEffect(() => {}, [something]);

  return <section>{!id ? 'No ID provided.' : <div>Product Card</div>}</section>;
}

export default ProductCard;
