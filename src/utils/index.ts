export const countdownBasedOnDays = (timeDifference: number) => {
  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export const debounce = (func: () => void, timeout = 300) => {
  let timer: string | number | NodeJS.Timeout | undefined;
  return (...args: []) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const swiperBreakpoints = (breakpoint: string, slideLength: number) => {
  /* bereakpoint as key and slideLength as value */
  const specifiedBreakpoints: { [key: string]: number } = {
    "640": 1,
    "768": 1,
    "1024": 1,
    "1280": 1,
    "1534": 1,
  };

  return slideLength - (specifiedBreakpoints[breakpoint] || 0);
};


export function isValidYear(year: number, minYear: number = 1900, maxYear: number = new Date().getFullYear()): boolean {
  return Number.isInteger(year) && year >= minYear;
  // && year <= maxYear;
}


