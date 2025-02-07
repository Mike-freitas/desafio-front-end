import React from 'react';
import classNames from 'classnames';
import './index.scss';

interface Props {
  visible?: boolean;
  overlay?: boolean;
  text?: string;
  size?: 'small' | 'medium' | 'large';  
}

const Loading = ({ visible = true, overlay = false, text, size = 'medium' }: Props): JSX.Element | null => {
  if (!visible) return null;

  const spinnerClasses = classNames('Loading__spinner', {
    'Loading__spinner--small': size === 'small',
    'Loading__spinner--large': size === 'large',
  });

  return (
    <div className={classNames('Loading', { 'Loading--overlay': overlay })}>
      <div className={spinnerClasses}></div>
      {text && <p className="Loading__text">{text}</p>} 
    </div>
  );
};

export default Loading;
