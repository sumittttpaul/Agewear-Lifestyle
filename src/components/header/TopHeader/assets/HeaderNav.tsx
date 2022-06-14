import { Button } from '@mui/material';
import React, { FC, ChangeEvent, useState, useEffect } from 'react';

interface IProps {
  Value: string;
  onValueChange: (value: string) => void;
}

/**
 * @author
 * @function @HeaderNav
 **/

const NavLabel = [
  {
    label: 'Store',
    to: '#',
    for: 'tab1',
  },
  {
    label: 'Fanbook',
    to: '#',
    for: 'tab2',
  },
  {
    label: 'FAQ',
    to: '#',
    for: 'tab3',
  },
  {
    label: 'Help',
    to: '#',
    for: 'tab4',
  },
  {
    label: 'About Us',
    to: '#',
    for: 'tab5',
  },
];

const DisableButton = (props: string, value: string) => {
  if (props === value) {
    return true;
  } else {
    return false;
  }
};

const ActiveContent = (value: string) => {
  if (value === 'tab1') {
    return 'Store';
  }
  if (value === 'tab2') {
    return 'Fanbook';
  }
  if (value === 'tab3') {
    return 'FAQ';
  }
  if (value === 'tab4') {
    return 'Help';
  }
  if (value === 'tab5') {
    return 'About Us';
  } else {
    return 'Store';
  }
};

const ButtonStyle =
  'text-white disabled:text-white opacity-70 hover:opacity-100 navLinks transition-opacity ease-out whitespace-nowrap font-[350] text-[12px] tracking-[0.075em] h-full w-[65px] flex text-center justify-center items-center px-[10px] button-text-lower';

export const HeaderNav: FC<IProps> = (props) => {
  const [selectedValue, setSelectedValue] = useState('tab1');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onValueChange(ActiveContent(event.target.value));
    setSelectedValue(event.target.value);
  };
  const ActiveSelectedValue = (value: string) => {
    if (value === 'Store') {
      setSelectedValue('tab1');
    }
    if (value === 'Fanbook') {
      setSelectedValue('tab2');
    }
    if (value === 'FAQ') {
      setSelectedValue('tab3');
    }
    if (value === 'Help') {
      setSelectedValue('tab4');
    }
    if (value === 'About Us') {
      setSelectedValue('tab5');
    }
    useEffect(() => {
      ActiveSelectedValue(props.Value);
    }, [props.Value]);
  };
  return (
    <div className="navBar sm:flex flex-col hidden h-full">
      <input
        value="tab1"
        checked={selectedValue === 'tab1'}
        onChange={handleChange}
        type="radio"
        id="tab1"
        className="hidden"
        name="tab-control"
        aria-label="tab1"
      />
      <input
        value="tab2"
        checked={selectedValue === 'tab2'}
        onChange={handleChange}
        type="radio"
        id="tab2"
        className="hidden"
        name="tab-control"
        aria-label="tab2"
      />
      <input
        value="tab3"
        checked={selectedValue === 'tab3'}
        onChange={handleChange}
        type="radio"
        id="tab3"
        className="hidden"
        name="tab-control"
        aria-label="tab3"
      />
      <input
        value="tab4"
        checked={selectedValue === 'tab4'}
        onChange={handleChange}
        type="radio"
        id="tab4"
        className="hidden"
        name="tab-control"
        aria-label="tab4"
      />
      <input
        value="tab5"
        checked={selectedValue === 'tab5'}
        onChange={handleChange}
        type="radio"
        id="tab5"
        className="hidden"
        name="tab-control"
        aria-label="tab5"
      />
      <ul className="flex flex-row h-full">
        {NavLabel.map((value) => (
          <li key={value.label} className="relative box-border h-full">
            <label htmlFor={value.for} role="button">
              <Button
                component="a"
                aria-label="header-button"
                disableFocusRipple
                disabled={Boolean(DisableButton(props.Value, value.label))}
                sx={{
                  '.MuiTouchRipple-child': {
                    backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                  },
                }}
                className={ButtonStyle}
              >
                {value.label}
              </Button>
            </label>
          </li>
        ))}
      </ul>
      <div className="w-[20%] navIndicator relative">
        <div className="h-[1px] -mt-[1px] w-[60%] left-[18%] relative opacity-80 bg-white" />
      </div>
    </div>
  );
};
