import { motion, Variants } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';
import {
  StoreDiscoverCurationSearch,
  StoreDiscoverExploreSearch,
  StoreDiscoverPopularSearch,
} from '../../../../contents/store/discover/Store.Discover.Search';
import { MainHeaderSearchCuration } from './MainHeader.Search.Curation';
import { MainHeaderSearchPopular } from './MainHeader.Search.Popular';
import { MainHeaderSearchExplore } from './MainHeader.Search.Explore';
import { MainHeaderSearchExit } from './MainHeader.Search.Exit';

const Main = 'w-full bg-[#121212] flex';
const Main2 =
  'space-y-5 pt-3 flex flex-col w-full h-full max-w-[1440px] mx-auto';
const Child1 =
  'w-full flex flex-col sm:flex-row sm:justify-between overflow-x-hidden';
const Child1Super1 =
  'mt-5 order-2 sm:order-1 w-full sm:w-[50%] flex overflow-y-hidden';
const Child1Super2 =
  'order-1 sm:order-2 w-full sm:w-[50%] space-y-5 flex flex-col overflow-y-hidden';
const Child1SuperContainer = 'w-full flex';
const Child2 =
  'w-full flex justify-center pb-5 bg-gradient-to-t from-[#121212] sticky-bottom';

export interface MainHeaderSearchSliderProps {
  open: boolean;
  onClose: () => void;
}

const SliderVariant = {
  open: { height: 250, display: 'block' },
  closed: { height: 0, display: 'none' },
};
const UlVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};
const LiVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.05,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export const MainHeaderSearchSliderMobile: FC<MainHeaderSearchSliderProps> = (
  props
) => {
  return (
    <div className="bg-transparent absolute left-0 top-full w-full">
      <div className={Main}>
        <div className={Main2}>
          <div className={Child1}>
            <div className={Child1Super1}>
              <div className={Child1SuperContainer}>
                <MainHeaderSearchExplore
                  ContentArray={StoreDiscoverExploreSearch}
                />
              </div>
            </div>
            <div className={Child1Super2}>
              <div className={Child1SuperContainer}>
                <MainHeaderSearchPopular
                  ContentArray={StoreDiscoverPopularSearch}
                />
              </div>
              <div className={Child1SuperContainer}>
                <MainHeaderSearchCuration
                  ContentArray={StoreDiscoverCurationSearch}
                />
              </div>
            </div>
          </div>
          <div className={Child2}>
            <MainHeaderSearchExit
              onClick={() => setTimeout(() => props.onClose(), 100)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MainHeaderSearchSliderDesktop: FC<MainHeaderSearchSliderProps> = (
  props
) => {
  const [Slider, setSlider] = useState('closed');

  useEffect(() => {
    if (props.open) {
      setSlider('open');
    } else {
      setSlider('closed');
    }
  }, [props.open]);

  return (
    <>
      {props.open ? (
        <div
          onClick={props.onClose}
          className="absolute h-screen w-full top-full bg-black backdrop-blur-md opacity-75 left-0"
        />
      ) : (
        <></>
      )}
      <motion.div
        className="bg-transparent absolute left-0 top-full w-full"
        animate={Slider}
        variants={SliderVariant}
      >
        <div className={Main}>
          <motion.div variants={UlVariants} className={Main2}>
            <div className={Child1}>
              <div className={Child1Super1}>
                <motion.div
                  variants={LiVariants}
                  className={Child1SuperContainer}
                >
                  <MainHeaderSearchExplore
                    ContentArray={StoreDiscoverExploreSearch}
                  />
                </motion.div>
              </div>
              <div className={Child1Super2}>
                <motion.div
                  variants={LiVariants}
                  className={Child1SuperContainer}
                >
                  <MainHeaderSearchPopular
                    ContentArray={StoreDiscoverPopularSearch}
                  />
                </motion.div>
                <motion.div
                  variants={LiVariants}
                  className={Child1SuperContainer}
                >
                  <MainHeaderSearchCuration
                    ContentArray={StoreDiscoverCurationSearch}
                  />
                </motion.div>
              </div>
            </div>
            <motion.div variants={LiVariants} className={Child2}>
              <MainHeaderSearchExit
                onClick={() => setTimeout(() => props.onClose(), 100)}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
