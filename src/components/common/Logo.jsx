import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { classNames } from '@/utils/classNames';



const sizes = {
  sm: 'w-32',    // ~128px
  md: 'w-48',    // ~192px
  lg: 'w-64',    // ~256px
  xl: 'w-96',    // ~384px
  '2xl': 'w-[32rem]' // ~512px
};

const logoAnimation = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  hover: { 
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const LogoContent = React.memo(({ size, className, isWhite }) => (
  <motion.svg
    className={classNames(sizes[size], 'h-auto', className)}
    viewBox="0 0 676 133"
    variants={logoAnimation}
    initial="initial"
    animate="animate"
    whileHover="hover"
    whileTap="tap"
  >
    <g 
      transform="translate(0.000000,133.000000) scale(0.100000,-0.100000)"
      fill={isWhite ? "#FFFFFF" : "#000000"} 
      stroke="none"
    >
      <path d="M2100 680 l0 -650 145 0 145 0 0 144 0 143 81 73 c44 40 84 69 88 64 4 -5 88 -102 186 -216 l178 -208 165 0 c156 0 164 1 150 18 -8 9 -106 125 -218 257 -112 132 -212 250 -222 261 l-20 22 215 188 215 189 -185 3 -184 2 -215 -190 c-118 -104 -219 -190 -225 -190 -5 0 -9 147 -9 370 l0 370 -145 0 -145 0 0 -650z"/>
      <path d="M5480 1273 c0 -3 93 -130 206 -280 113 -151 207 -280 210 -287 3 -7 -102 -156 -233 -332 -132 -175 -242 -325 -246 -331 -7 -10 28 -13 161 -13 l169 0 163 235 c90 129 166 235 170 235 4 0 79 -106 166 -235 l158 -235 173 0 c95 0 173 2 173 5 0 3 -103 143 -230 312 -146 194 -227 310 -221 317 49 63 451 608 451 611 0 3 -75 5 -168 5 l-167 0 -145 -215 c-80 -118 -148 -214 -151 -215 -4 0 -71 97 -150 215 l-144 214 -172 1 c-95 0 -173 -3 -173 -7z"/>
      <path d="M4727 1203 c-4 -3 -7 -57 -7 -120 l0 -113 -95 0 -95 0 0 -95 0 -95 89 0 89 0 4 -257 c4 -234 7 -263 26 -314 51 -129 164 -178 410 -179 l122 0 0 109 0 109 -97 4 c-108 4 -137 16 -153 62 -6 16 -10 125 -10 247 l0 219 150 0 150 0 0 95 0 94 -152 3 -153 3 -3 118 -3 117 -133 0 c-73 0 -136 -3 -139 -7z"/>
      <path d="M1135 984 c-199 -43 -356 -179 -401 -348 -18 -68 -18 -208 1 -281 41 -156 160 -269 345 -326 61 -19 98 -24 200 -24 142 0 203 12 305 61 180 85 266 226 266 435 0 155 -42 254 -153 354 -133 121 -358 172 -563 129z m243 -206 c70 -17 145 -95 167 -173 38 -129 0 -282 -85 -344 -114 -82 -317 -60 -391 42 -67 93 -78 243 -25 352 54 110 189 160 334 123z"/>
      <path d="M3705 984 c-92 -18 -196 -70 -267 -134 -195 -174 -195 -526 0 -700 62 -56 166 -110 252 -131 34 -9 107 -14 190 -13 118 1 145 4 216 27 44 15 107 44 140 66 65 42 124 95 124 109 0 5 -45 40 -100 77 l-99 68 -49 -45 c-77 -72 -122 -91 -228 -96 -111 -5 -176 13 -221 61 -38 40 -54 71 -63 120 l-7 37 408 0 409 0 0 65 c0 82 -16 156 -48 225 -34 75 -138 176 -222 217 -122 59 -285 77 -435 47z m267 -206 c49 -14 104 -61 128 -109 38 -73 50 -69 -240 -69 l-260 0 0 23 c0 44 52 109 113 143 62 34 170 39 259 12z"/>
      <path d="M423 972 c-53 -19 -123 -66 -123 -83 0 -5 -4 -9 -10 -9 -5 0 -10 20 -10 45 l0 45 -140 0 -140 0 0 -470 0 -470 150 0 150 0 0 293 c0 262 2 296 19 332 36 78 97 109 210 103 l75 -3 22 108 c14 73 18 110 11 114 -6 4 -45 8 -86 10 -56 3 -90 -1 -128 -15z"/>
    </g>
  </motion.svg>
));

LogoContent.displayName = 'LogoContent';

export const Logo = ({ 
  size = 'md', 
  className = '', 
  withLink = true, 
  isWhite = false 
}) => {
  const content = (
    <LogoContent 
      size={size} 
      className={className} 
      isWhite={isWhite} 
    />
  );

  if (withLink) {
    return (
      <Link to="/" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
};

Logo.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  withLink: PropTypes.bool,
  isWhite: PropTypes.bool,
};

LogoContent.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)).isRequired,
  className: PropTypes.string,
  isWhite: PropTypes.bool,
};