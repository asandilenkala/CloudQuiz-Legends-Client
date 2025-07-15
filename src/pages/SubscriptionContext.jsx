import React, { createContext, useContext, useState } from 'react';

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [isSubscriber, setIsSubscriber] = useState(false); // false by default

  return (
    <SubscriptionContext.Provider value={{ isSubscriber, setIsSubscriber }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => useContext(SubscriptionContext);
