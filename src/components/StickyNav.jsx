import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const StickyNav = ({ heroRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle sticky state based on hero section visibility
        setIsSticky(!entry.isIntersecting);
      },
      {
        rootMargin: "-100px 0px 0px 0px", // Adjusts when the observation triggers
        threshold: 0
      }
    );

    if (heroRef?.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef?.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [heroRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed w-full transition-all duration-500 ease-in-out ${
      isSticky ? 'bottom-8' : 'translate-y-0'
    }`}>
      <div className="menu-outer">
        {/* Expandable Menu Section */}
        <div className="menu-expand" style={{ 
          height: isMenuOpen ? 'auto' : '0px',
          opacity: isMenuOpen ? '1' : '0',
          display: isMenuOpen ? 'flex' : 'none' 
        }}>
          <div className="menu-expand-header">
            <div>LEARN</div>
          </div>
          <div className="menu-expand-content">
            {[...Array(6)].map((_, index) => (
              <a key={index} href="#" className="menu-expand-link w-inline-block">
                <div>Navigation Link</div>
              </a>
            ))}
          </div>
        </div>

        {/* Main Navigation Menu */}
        <div className="menu-inner">
          <a href="#" className="menu-link w-inline-block">
            <div>Home</div>
          </a>
          <a href="#" className="menu-link w-inline-block">
            <div>About</div>
          </a>
          <a href="#" className="menu-link w-inline-block">
            <div>Works</div>
          </a>
          <div onClick={toggleMenu} className="menu-link">
            <div>Learn</div>
            <img 
              src="https://cdn.prod.website-files.com/63c5b1756476f18035561fd4/653178b33f40cc0fbf762724_dropdown%20arrow.svg" 
              loading="lazy" 
              alt="A dropdown icon"
              style={{
                transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            />
          </div>
          <a href="#" className="menu-link get-in-touch w-inline-block">
            <div>Let's Talk</div>
          </a>
        </div>
      </div>

      <style>{`
        .menu-outer {
          max-width: 940px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-radius: var(--border-radius--menu-wrapper, 100px);
          background-color: rgba(26, 27, 30, 0.4);
          border: 1px solid #222325;
          padding: 9px;
          position: relative;
        }

        .menu-inner {
          width: 100%;
          display: flex;
          justify-content: space-between;
          gap: 8px;
          border-radius: var(--border-radius--menu-link, 92px);
          background-color: #1a1b1e;
          padding: 12px;
          overflow: auto;
        }

        .menu-link {
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border: 1px solid #222325;
          border-radius: 80px;
          color: #fff;
          font-size: 14px;
          font-weight: 400;
          line-height: 114.286%;
          text-decoration: none;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }

        .menu-link:hover {
          background-color: #36353a;
        }

        .menu-link.get-in-touch {
          background-color: #36353a;
          transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
        }

        .menu-link.get-in-touch:hover {
          color: #111;
          background-color: #fff;
        }

        .menu-expand {
          max-width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          background-color: #1a1b1e;
          border-radius: 23px;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
        }

        .menu-expand-header {
          color: #313235;
          border-bottom: 1px solid #222325;
          margin: 24px 24px 0;
          padding-bottom: 13px;
          font-size: 10px;
          line-height: 120%;
        }

        .menu-expand-content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 16px;
          margin: 0 24px 24px;
          justify-items: center;
        }

        .menu-expand-link {
          color: #fff;
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          line-height: 142.857%;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
        }

        .menu-expand-link:hover {
          text-decoration: underline;
        }

        @media screen and (max-width: 767px) {
          .menu-expand-content {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          
          .menu-outer {
            margin: 0 16px;
          }
        }

        @media screen and (max-width: 479px) {
          .fixed {
            bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
};

StickyNav.propTypes = {
  heroRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired,
};

export default StickyNav;