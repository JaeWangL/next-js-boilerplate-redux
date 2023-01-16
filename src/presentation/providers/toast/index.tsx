import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

type ToastProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function ToastProvider(props: ToastProviderProps): JSX.Element {
  const { children } = props;
  return (
    <>
      {children}
      <ToastContainer
        position="bottom-center"
        hideProgressBar
        newestOnTop
        rtl={false}
        autoClose={2000}
        theme="dark"
        closeButton={false}
      />
    </>
  );
}
