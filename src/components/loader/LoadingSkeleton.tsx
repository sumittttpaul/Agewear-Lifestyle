import { Skeleton } from '@mui/material';
import { PageHeaderLogo } from '../logo/CompanyLogo';

const MainHeaderColor = 'grey.900';

export function LoadingPageheader() {
  return (
    <div className="w-full h-[50px] bg-[#2a2a2a]">
      <div className="w-full h-full max-w-[1540px] mx-auto flex justify-center sm:justify-start">
        <PageHeaderLogo onValueChange={() => {}} />
      </div>
    </div>
  );
}

export function LoadingMainheader() {
  return (
    <>
      {/* Large Screen */}
      <div className="hidden md-900:flex w-full text-white p-3 my-[13px] sm:p-5 justify-between">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={451}
          height={38}
        />
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={189}
          height={38}
        />
      </div>

      {/* Medium Screen */}
      <div className="hidden sm:flex md-900:hidden w-full text-white p-3 my-[13px] sm:p-5 justify-between">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={310}
          height={38}
        />
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={108}
          height={38}
        />
      </div>

      {/* Small Screen */}
      <div className="flex sm:hidden w-full text-white p-3 my-[13px] sm:p-5 justify-between">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={145}
          height={38}
        />
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={85}
          height={38}
        />
      </div>
    </>
  );
}

export function LoadingAvatarButton() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="circular"
      width={100}
      height={100}
    />
  );
}

export function LoadingAvatarUI() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="rectangular"
      width={350}
      height={161}
    />
  );
}

export function LoadingDatePickerUI() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="rectangular"
      width={350}
      height={109}
    />
  );
}

export function LoadingGenderUI() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="rectangular"
      width={350}
      height={106}
    />
  );
}

export function LoadingLargeBlueButton() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="rectangular"
      width={350}
      height={60}
    />
  );
}

export function LoadingLoginUi() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="rectangular"
      width={350}
      height={322}
    />
  );
}

export function LoadingDiscoverCarousel() {
  return (
    <>
      {/* Large Screen */}
      <Skeleton
        sx={{ bgcolor: MainHeaderColor }}
        variant="rectangular"
        width="100%"
        height={624}
        className="hidden md-900:flex"
      />
      {/* Medium Screen */}
      <Skeleton
        sx={{ bgcolor: MainHeaderColor }}
        variant="rectangular"
        width="100%"
        height={509}
        className="hidden sm:flex md-900:hidden"
      />
      {/* Small Screen */}
      <div className="px-5">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width="100%"
          height={500}
          className="flex sm:hidden"
        />
      </div>
    </>
  );
}
