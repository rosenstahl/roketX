// src/components/typography/index.jsx
import React from 'react';
import PropTypes from 'prop-types';

export const H1 = ({ children, className = '' }) => (
  <h1 className={`font-sf font-bold text-h1-mobile md:text-h1 text-main-secondary ${className}`}>
    {children}
  </h1>
);

H1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const H2 = ({ children, className = '' }) => (
  <h2 className={`font-sf font-bold text-h2-mobile md:text-h2 text-main-secondary ${className}`}>
    {children}
  </h2>
);

H2.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const H3 = ({ children, className = '' }) => (
  <h3 className={`font-sf font-semibold text-h3-mobile md:text-h3 text-main-secondary ${className}`}>
    {children}
  </h3>
);

H3.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const H4 = ({ children, className = '' }) => (
  <h4 className={`font-sf font-semibold text-h4-mobile md:text-h4 text-main-secondary ${className}`}>
    {children}
  </h4>
);

H4.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const LeadText = ({ children, className = '' }) => (
  <p className={`font-inter font-normal text-lead-mobile md:text-lead text-main-tertiary ${className}`}>
    {children}
  </p>
);

LeadText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const BodyText = ({ children, className = '' }) => (
  <p className={`font-inter font-normal text-base text-main-tertiary ${className}`}>
    {children}
  </p>
);

BodyText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const SmallText = ({ children, className = '' }) => (
  <p className={`font-inter font-normal text-small text-main-tertiary ${className}`}>
    {children}
  </p>
);

SmallText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// UI Elements
export const ButtonText = ({ children, className = '' }) => (
  <span className={`font-sf font-semibold text-base ${className}`}>
    {children}
  </span>
);

ButtonText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const NavLink = ({ children, className = '' }) => (
  <span className={`font-sf font-medium text-base tracking-[0.01em] ${className}`}>
    {children}
  </span>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const Label = ({ children, className = '' }) => (
  <span className={`font-sf font-medium text-small tracking-[0.01em] ${className}`}>
    {children}
  </span>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Special Text Styles
export const Quote = ({ children, className = '' }) => (
  <blockquote className={`font-inter font-semibold text-lead italic leading-[1.8] ${className}`}>
    {children}
  </blockquote>
);

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const Price = ({ children, className = '' }) => (
  <span className={`font-sf font-bold text-h3 tracking-[-0.01em] ${className}`}>
    {children}
  </span>
);

Price.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const Alert = ({ children, className = '' }) => (
  <p className={`font-inter font-medium text-small leading-[1.6] ${className}`}>
    {children}
  </p>
);

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Form Elements
export const InputLabel = ({ children, className = '' }) => (
  <label className={`font-sf font-medium text-small tracking-[0.01em] ${className}`}>
    {children}
  </label>
);

InputLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const InputText = ({ className = '', ...props }) => (
  <input
    className={`font-inter font-normal text-base ${className}`}
    {...props}
  />
);

InputText.propTypes = {
  className: PropTypes.string,
};

export const Placeholder = ({ children, className = '' }) => (
  <span className={`font-inter font-normal text-base opacity-60 ${className}`}>
    {children}
  </span>
);

Placeholder.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// List Elements
export const ListTitle = ({ children, className = '' }) => (
  <span className={`font-sf font-semibold text-base ${className}`}>
    {children}
  </span>
);

ListTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const ListItem = ({ children, className = '' }) => (
  <li className={`font-inter font-normal text-base leading-[1.6] ${className}`}>
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Footer Elements
export const FooterHeading = ({ children, className = '' }) => (
  <h6 className={`font-sf font-semibold text-base ${className}`}>
    {children}
  </h6>
);

FooterHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const FooterText = ({ children, className = '' }) => (
  <p className={`font-inter font-normal text-small leading-[1.6] ${className}`}>
    {children}
  </p>
);

FooterText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};