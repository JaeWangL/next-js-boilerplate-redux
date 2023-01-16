import { useDialogDispatch } from '@application/hooks/redux/dialog/dispatch';
import { useDialogSelector } from '@application/hooks/redux/dialog/selector';
import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import Modal, { type Styles } from 'react-modal';
import styles from './styles.module.scss';

type DialogProviderProps = {
  children: JSX.Element;
};

export function DialogProvider(props: DialogProviderProps): JSX.Element {
  const { children } = props;
  const { dialog } = useDialogSelector();
  const { closeDialog } = useDialogDispatch();

  const customStyles = useMemo((): Styles => {
    return {
      overlay: {
        zIndex: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
      },
      content: {
        display: 'flex',
        flexDirection: 'column',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '16px 24px',
        minWidth: 300,
        border: 'none',
        borderRadius: 16,
        boxShadow: '8px 8px 12px rgba(115, 123, 133, 0.3)',
      },
    };
  }, []);

  const onRequestClose = useCallback((): void => {
    closeDialog();
  }, []);

  const onButtonClick = useCallback((onAction?: () => void): void => {
    if (onAction) {
      onAction();
    }

    onRequestClose();
  }, []);

  const renderButtons = useMemo((): JSX.Element | JSX.Element[] | null => {
    if (!dialog?.onOK) {
      return (
        <button type="button" onClick={(): void => onButtonClick()}>
          확인
        </button>
      );
    }
    return (
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={classNames(styles.button50)}
          onClick={(): void => onButtonClick(dialog.onOK)}
        >
          확인
        </button>
        <button
          type="button"
          className={classNames(styles.button50)}
          onClick={(): void => onButtonClick()}
        >
          닫기
        </button>
      </div>
    );
  }, [dialog]);

  return (
    <>
      {children}
      <Modal
        isOpen={dialog.isOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <div className={styles.contentWrapper}>
          <h6 className={styles.title}>{dialog.title}</h6>
          <p className={styles.message}> {dialog.message}</p>
          {renderButtons}
        </div>
      </Modal>
    </>
  );
}
