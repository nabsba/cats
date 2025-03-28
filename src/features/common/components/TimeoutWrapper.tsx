import React, { useState, useEffect } from 'react';

interface TimeoutWrapperProps {
  timeout: number; // Timeout in milliseconds
  children: React.ReactNode; // Child components to render
}

const TimeoutWrapper: React.FC<TimeoutWrapperProps> = ({
  timeout,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  return isVisible ? <>{children}</> : null;
};

export default TimeoutWrapper;
