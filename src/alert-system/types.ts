// Define a complete toast prop type
interface ToastProps {
  id: string;
  header: string;
  message: string;
  iconUrl: string;
  close: () => void;
  onClick: () => void;
}

// props for SDK without 'id' and 'close'
export type ExternalToastProps = Omit<ToastProps, 'id' | 'close'>;

// Define an internal toast prop type that includes everything
export type InternalToastProps = ToastProps;
