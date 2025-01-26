import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ButtonText } from "../common/Typography";
import { classNames } from "../../utils";

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'default',
  className,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-lg transition-all duration-300 ease-in-out cursor-pointer overflow-hidden";
  
  const variants = {
    primary: "bg-accent-primary hover:bg-accent-primary/90 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-main-primary hover:bg-main-primary/90 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white"
  };
  
  const sizes = {
    small: "px-4 py-2",
    default: "px-8 py-6", // Increased vertical padding to match Impressum height
    large: "px-10 py-5"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      className={classNames(
        baseStyles,
        variants[variant],
        sizes[size],
        "group",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <ButtonText className="relative z-10">{children}</ButtonText>
      
      {/* Wave animation overlay */}
      <motion.div
        className="absolute inset-0 bg-[#FF7043]"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ 
          x: '100%', 
          opacity: [0, 1, 1, 0],
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity
          }
        }}
      />
      
      {/* Background color transition */}
      <motion.div
        className="absolute inset-0 bg-[#FF7043]"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 1,
          transition: { duration: 0.3 }
        }}
        style={{ zIndex: 1 }}
      />
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  className: PropTypes.string
};

export default Button;