import React, { useState } from 'react';

// Crisp, vibrant Country Flag component that renders pixel-perfect on Windows, Mac, iOS & Android
export default function CountryFlag({ country = 'us', fallback = '🌐', size = 'normal', className = '' }) {
  const [hasError, setHasError] = useState(false);
  const iso = (country || 'us').toLowerCase();

  if (hasError) {
    return <span className={`flag-emoji-fallback ${className}`}>{fallback}</span>;
  }

  const dimensions = size === 'small' 
    ? { width: 18, height: 13 }
    : size === 'large'
    ? { width: 28, height: 20 }
    : { width: 22, height: 16 };

  return (
    <span className={`country-flag-wrapper ${size} ${className}`}>
      <img
        src={`https://flagcdn.com/w40/${iso}.png`}
        srcSet={`https://flagcdn.com/w80/${iso}.png 2x`}
        alt={`${iso.toUpperCase()} flag`}
        width={dimensions.width}
        height={dimensions.height}
        className="country-flag-img"
        loading="lazy"
        onError={() => setHasError(true)}
      />
      <style>{`
        .country-flag-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
          line-height: 1;
        }

        .country-flag-img {
          display: block;
          object-fit: cover;
          border-radius: 2px;
        }

        .country-flag-wrapper.small {
          width: 18px;
          height: 13px;
        }

        .country-flag-wrapper.normal {
          width: 22px;
          height: 16px;
        }

        .country-flag-wrapper.large {
          width: 28px;
          height: 20px;
        }

        .flag-emoji-fallback {
          font-size: 1.1rem;
          line-height: 1;
        }

        [data-theme="light"] .country-flag-wrapper {
          border-color: rgba(15, 23, 42, 0.15);
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12);
        }
      `}</style>
    </span>
  );
}
