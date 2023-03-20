import { createContext, useState, PropsWithChildren } from 'react';

type SnackbarContextProviderProps = {};

interface ISnackbarContext {
  msg: string;
  isDisplayed: boolean;
  msgType: string;
  displayMsg: (msg: string, msgType: string) => void;
}

const defaultState = {
  msg: '',
  isDisplayed: false,
  msgType: '',
  displayMsg: () => {},
};

const SnackbarContext = createContext<ISnackbarContext>(defaultState);
export default SnackbarContext;

export const SnackbarContextProvider = (
  props: PropsWithChildren<SnackbarContextProviderProps>
) => {
  const [msg, setMsg] = useState('');
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [msgType, setMsgType] = useState('');

  const closeSnackbar = (): void => {
    setIsDisplayed(false);
  };

  const displayHandler = (msg: string, msgType: string): void => {
    setMsg(msg);
    setMsgType(msgType);
    setIsDisplayed(true);
    setTimeout(() => {
      closeSnackbar();
    }, 2000);
  };

  return (
    <SnackbarContext.Provider
      value={{
        msg,
        isDisplayed,
        msgType,
        displayMsg: displayHandler,
      }}
    >
      {props.children}
    </SnackbarContext.Provider>
  );
};
