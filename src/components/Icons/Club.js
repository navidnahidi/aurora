import React from "react";
import PropTypes from "prop-types";

const ClubIcon = ({ size, color, children, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 27" {...props}>
    {children}
    <defs>
      <path id="a" d="M0 0h15.931v15.937H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 1.85)">
      <circle cx="12" cy="12" r="12.5" fill="#FAFAFA" stroke="#E0E0E0" />
      <g transform="translate(4 4)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          fill={color}
          stroke="#262626"
          strokeWidth=".25"
          d="M.514 12.722H3.46v-.401H.514v.4zm11.094-.005h2.93v-.405h-2.93v.405zm2.315-9.375a.848.848 0 0 0-.847-.836.85.85 0 0 0-.835.848c.002.453.38.832.83.835a.843.843 0 0 0 .852-.847zM1.982 2.506a.844.844 0 0 0-.843.839.843.843 0 0 0 .853.844.858.858 0 0 0 .84-.846.861.861 0 0 0-.85-.837zM12.807 4.69l-.408 7.09h1.367l-.41-7.09h-.549zm-11.096 0l-.41 7.095H2.67L2.26 4.69h-.55zM15 13.001c-.131.186-.311.258-.539.257-.917-.005-1.835-.001-2.753-.002-.41 0-.61-.2-.612-.606v-.297c.005-.33.21-.541.542-.557.08-.003.16 0 .255 0l.184-3.11c-1.186 1.473-2.677 2.257-4.534 2.258-1.855 0-3.347-.776-4.547-2.202l.176 3.053c.103 0 .183-.003.263 0 .313.016.52.217.537.529.007.139.008.279 0 .418-.02.303-.227.51-.532.511-.97.006-1.94.006-2.91 0-.312 0-.517-.215-.527-.529A7.542 7.542 0 0 1 0 12.376c.006-.368.206-.572.57-.58.235-.005.226.04.243-.237l.303-4.833c.045-.719.091-1.437.127-2.156.003-.063-.056-.143-.109-.191-.387-.356-.549-.792-.442-1.305.106-.512.427-.857.927-1.014a1.343 1.343 0 0 1 1.558.62 1.316 1.316 0 0 1-.264 1.652c-.123.112-.154.219-.142.375.074.932.138 1.864.208 2.796a.57.57 0 0 0 .057.215 5.108 5.108 0 0 0 4.96 2.708c1.835-.173 3.2-1.083 4.11-2.68a.506.506 0 0 0 .066-.21c.06-.957.113-1.913.173-2.87.009-.131-.02-.217-.127-.31a1.334 1.334 0 0 1-.084-1.941 1.345 1.345 0 0 1 1.934-.006c.536.544.507 1.42-.075 1.941-.109.097-.136.186-.128.327.07 1.119.13 2.238.193 3.357l.208 3.687c.001.017.007.033.016.075.277-.028.538.015.717.263V13z"
          mask="url(#b)"
        />
      </g>
    </g>
  </svg>
);

ClubIcon.displayName = "ClubIcon";

ClubIcon.defaultProps = {
  color: "currentColor",
  children: null
};

ClubIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default ClubIcon;
