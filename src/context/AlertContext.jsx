import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: "", type: "" });

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: "", type: "" });
    }, 3000); // إخفاء التنبيه بعد 3 ثوانٍ
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert.message && <Alert message={alert.message} type={alert.type} />}
    </AlertContext.Provider>
  );
};

const Alert = ({ message, type }) => {
  const [progress, setProgress] = useState(100);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 1 : 0));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (progress === 0) {
      // يمكنك إخفاء التنبيه هنا
    }
  }, [progress]);

  return (
    <div className={`alert ${type}`}>
      {message}
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default AlertProvider;
