export type DialogState = {
  isOpen: boolean;
  message: string;
  title?: string;
  onOK?: () => void;
};
