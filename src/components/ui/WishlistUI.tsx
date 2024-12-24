import React, { FC } from 'react';

export interface WishlistUIProps {}

/**
 * @author
 * @function @WishlistUI
 **/

export const WishlistUI: FC<WishlistUIProps> = () => {
  return (
    <div className="relative z-10 w-full h-[85vh] items-center justify-center flex px-5">
      {/* Content */}
      <h6 className="w-full p-5 text-center text-white">Wishlist UI</h6>
    </div>
  );
};
