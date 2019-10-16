import React from 'react';

const FeatureItem = (props) => {
    return (
      <div className="feature-item-container d-flex border overflow-hidden shadow">
          <div className={`feature-icon d-flex align-items-center justify-content-center bg-${props.iconBg}`}>
              <i className={`${props.icon} fa-lg text-white`} aria-hidden="true"></i>
          </div>
          <div className="feature-description flex-grow-1 bg-light">
              <h2 className="font-size-bg text-uppercase">{props.featureTitle}</h2>
              <p className="font-size-sm mb-0">{props.featureText}</p>
          </div>
      </div>
    );
}

export default FeatureItem;