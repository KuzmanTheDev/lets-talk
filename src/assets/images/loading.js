export default function Loading() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "none",
        display: "block",
        shapeRendering: "auto",
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#fbeecc"
        stroke-width="4"
        r="41"
        stroke-dasharray="193.20794819577225 66.40264939859075"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
}
// {
//   /* <?xml version="1.0" encoding="utf-8"?> */
// }
