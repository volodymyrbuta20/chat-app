import { useEffect, useRef } from 'react';

const useScrollMessages = (messagesList) => {
  const messageContainer = useRef(null);

  useEffect(() => {
    if (messageContainer) {
      messageContainer.current.addEventListener('DOMNodeInserted', (e) => {
        const target = e.currentTarget;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [messagesList]);

  return messageContainer;
};

export default useScrollMessages;