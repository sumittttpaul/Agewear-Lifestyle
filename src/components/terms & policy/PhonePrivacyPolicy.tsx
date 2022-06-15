import { Link } from '@mui/material';
import React, { FC } from 'react';
import { Privacy_Policy_Link } from '../../routerLinks/RouterLinks';

interface IProps {}

/**
 * @author
 * @function @PhonePrivacyPolicy
 **/

export const PhonePrivacyPolicy: FC<IProps> = (props) => {
  return (
    <div className="flex items-center">
      <h6 className="ml-3 text-xs font-light text-[rgba(255,255,255,0.75)]">
        I agree with&#160;
        <Link
          className="text-white text-xs"
          component="button"
          underline="always"
          href={Privacy_Policy_Link}
        >
          privacy policy
        </Link>
      </h6>
    </div>
  );
};
