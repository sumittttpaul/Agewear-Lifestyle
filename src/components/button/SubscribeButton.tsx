import React, { Component } from 'react';
import gsap from 'gsap';
import { CircularProgress } from '@mui/material';

interface IProps {
  disabled: boolean;
  validEmail: boolean;
  emailEmpty: () => void;
}

/**
 * @author
 * @class @SubscribeButton
 **/

export class SubscribeButton extends Component<IProps> {
  state = {
    open: false,
    loading: false,
  };

  componentDidMount() {
    global.document
      .querySelectorAll('.EmailSubscribebutton')
      .forEach((button) => {
        let getVar = (variable: any) =>
          getComputedStyle(button).getPropertyValue(variable);

        button.addEventListener('click', (e) => {
          if (this.props.validEmail) {
            this.setState({ loading: true });
            setTimeout(() => {
              if (!button.classList.contains('active')) {
                this.setState({ loading: false });
                // Send newsletter email and add email to newsletter database
                button.classList.add('active');
                gsap.to(button, {
                  keyframes: [
                    {
                      '--left-wing-first-x': 50,
                      '--left-wing-first-y': 100,
                      '--right-wing-second-x': 50,
                      '--right-wing-second-y': 100,
                      duration: 0.2,
                      onComplete() {
                        gsap.set(button, {
                          '--left-wing-first-y': 0,
                          '--left-wing-second-x': 40,
                          '--left-wing-second-y': 100,
                          '--left-wing-third-x': 0,
                          '--left-wing-third-y': 100,
                          '--left-body-third-x': 40,
                          '--right-wing-first-x': 50,
                          '--right-wing-first-y': 0,
                          '--right-wing-second-x': 60,
                          '--right-wing-second-y': 100,
                          '--right-wing-third-x': 100,
                          '--right-wing-third-y': 100,
                          '--right-body-third-x': 60,
                        });
                      },
                    },
                    {
                      '--left-wing-third-x': 20,
                      '--left-wing-third-y': 90,
                      '--left-wing-second-y': 90,
                      '--left-body-third-y': 90,
                      '--right-wing-third-x': 80,
                      '--right-wing-third-y': 90,
                      '--right-body-third-y': 90,
                      '--right-wing-second-y': 90,
                      duration: 0.2,
                    },
                    {
                      '--rotate': 50,
                      '--left-wing-third-y': 95,
                      '--left-wing-third-x': 27,
                      '--right-body-third-x': 45,
                      '--right-wing-second-x': 45,
                      '--right-wing-third-x': 60,
                      '--right-wing-third-y': 83,
                      duration: 0.25,
                    },
                    {
                      '--rotate': 60,
                      '--plane-x': -8,
                      '--plane-y': 40,
                      duration: 0.2,
                    },
                    {
                      '--rotate': 40,
                      '--plane-x': 45,
                      '--plane-y': -300,
                      '--plane-opacity': 0,
                      duration: 0.375,
                      onComplete() {
                        setTimeout(() => {
                          button.removeAttribute('style');
                          gsap.fromTo(
                            button,
                            {
                              opacity: 0,
                              y: -8,
                            },
                            {
                              opacity: 1,
                              y: 0,
                              clearProps: true,
                              duration: 0.3,
                              onComplete() {
                                button.classList.remove('active');
                              },
                            }
                          );
                        }, 1800);
                      },
                    },
                  ],
                });
                gsap.to(button, {
                  keyframes: [
                    {
                      '--text-opacity': 0,
                      '--border-radius': 0,
                      '--left-wing-background': getVar('--primary-dark'),
                      '--right-wing-background': getVar('--primary-dark'),
                      duration: 0.11,
                    },
                    {
                      '--left-wing-background': getVar('--primary'),
                      '--right-wing-background': getVar('--primary'),
                      duration: 0.14,
                    },
                    {
                      '--left-body-background': getVar('--primary-dark'),
                      '--right-body-background': getVar('--primary-darkest'),
                      duration: 0.25,
                      delay: 0.1,
                    },
                    {
                      '--trails-stroke': 171,
                      duration: 0.22,
                      delay: 0.22,
                    },
                    {
                      '--success-opacity': 1,
                      '--success-x': 0,
                      duration: 0.2,
                      delay: 0.15,
                    },
                    {
                      '--success-stroke': 0,
                      duration: 0.15,
                    },
                  ],
                });
              }
            }, 5000);
            setTimeout(() => {
              this.props.emailEmpty();
            }, 8000);
          } else {
          }
        });
      });
  }

  render() {
    return (
      <div className="flex relative">
        <button
          disabled={this.props.disabled}
          type="button"
          className="EmailSubscribebutton disabled:opacity-80"
        >
          <span className="default">Subscribe</span>
          <span className="success">
            <svg viewBox="0 0 16 16">
              <polyline points="3.75 9 7 12 13 5"></polyline>
            </svg>
            Subscribed
          </span>
          <svg className="trails" viewBox="0 0 33 64">
            <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
            <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
          </svg>
          <div className="plane">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </button>
        {this.state.loading ? (
          <div className="absolute cursor-not-allowed z-[4] h-full w-full top-0 bg-[rgba(45,45,45)] transition-all ease-in rounded-md flex items-center justify-center">
            <CircularProgress
              className="text-white opacity-75"
              size={20}
              thickness={3}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
