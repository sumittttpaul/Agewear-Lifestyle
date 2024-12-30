import dynamic from 'next/dynamic';
import React, { FC, ReactNode } from 'react';
import { MainHeaderProps } from '../header/MainHeader/MainHeader';
import { LoadingMainHeader } from '../loader/LoadingSkeleton';

const MainHeader = dynamic<MainHeaderProps>(
  () => import('../header/MainHeader/MainHeader').then((x) => x.MainHeader),
  {
    loading: () => <LoadingMainHeader />,
    ssr: false,
  }
);

interface IProps {
  children: ReactNode;
  ChildPage: string;
  setChildPage: (value: string) => void;
}

/**
 * @author
 * @function @PageChildLayout
 **/

export const PageChildLayout: FC<IProps> = (props) => {
  return (
    <main className="z-auto flex-grow w-full mx-auto">
      <MainHeader Page={props.ChildPage} setPage={props.setChildPage} />
      <div className="w-full flex-grow z-auto max-w-[1440px] mx-auto">
        {props.children}
      </div>
    </main>
  );
};
