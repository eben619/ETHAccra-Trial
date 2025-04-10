/* SVG ICON COMPONENT */

export const SvgOpen = ({ variant }: any) => {
  switch (variant) {
    case "2023":
      return (
        <>
          <svg
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-7.75877e-08 2.15342L1.775 0.378417L10 8.60342L18.225 0.378418L20 2.15342L10 12.1534L-7.75877e-08 2.15342Z"
              fill="#111111"
            />
          </svg>
        </>
      );
    default:
      return (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4.00024V20.0002"
              stroke="#FFA500"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12.0002H20"
              stroke="#FFA500"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      );
  }
};

export const SvgClose = ({ variant }: any) => {
  switch (variant) {
    case "2023":
      return (
        <>
          <div className="rotate-180">
            <svg
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-7.75877e-08 2.15342L1.775 0.378417L10 8.60342L18.225 0.378418L20 2.15342L10 12.1534L-7.75877e-08 2.15342Z"
                fill="#111111"
              />
            </svg>
          </div>
        </>
      );
    default:
      return (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12.0002H4"
              stroke="#FFA500"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      );
  }
};
