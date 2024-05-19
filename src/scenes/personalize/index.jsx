import React, { useState, useEffect } from 'react';
import SuccessPopup from '../../components/SuccessPopup';
import FailedPopup from '../../components/FailedPopup';

const Personalize = () => {
  const [failedVisible, setFailedVisible] = useState(true);
  const [successVisible, setSuccessVisible] = useState(false);

  const toggleFailed = () => {
    setFailedVisible(!failedVisible);
  };

  const toggleSuccess = () => {
    setSuccessVisible(!successVisible);
  };

  useEffect(() => {
    setFailedVisible(true);
  }, []);

  return (
    <>
      {/*<SuccessPopup visible={successVisible} togglePopup={toggleSuccess} /> */}
      <FailedPopup visible={failedVisible} togglePopup={toggleFailed} />
    </>
  );
};

export default Personalize;