import React, { FC } from 'react';

export interface CollectionsUIProps {}

/**
 * @author
 * @function @CollectionsUI
 **/

export const CollectionsUI: FC<CollectionsUIProps> = (props) => {
  return (
    <div className="relative z-10 w-full h-[85vh] items-center justify-center flex px-5">
      {/* Content */}
      <h6 className="w-full p-5 text-center text-white">Collections UI</h6>
    </div>
  );
};
