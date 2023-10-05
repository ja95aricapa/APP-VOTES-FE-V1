import { useEffect } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';

const useWebSocket = (url: string, onMessage: (data: any) => void) => {

    useEffect(() => {
      const ws = new ReconnectingWebSocket(url);
  
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        onMessage(data);
      };
  
      return () => {
        ws.close();
      };
    }, [url, onMessage]);
  };
  
  export default useWebSocket;
