export interface FormContainerProps<T> {
  deleteOption: boolean;
  handleDelete: () => void;
  handleSubmit: () => void;
  handleCancel: () => void;
  title: string;
  value: T;
  onChange: (value: T) => void;
  form: (
    props: {
      value: T;
      onChange: (value: T) => void;
    }
  ) => React.ReactNode;
  className?: {
    formHeader: {
      mainWrapper?: string;
      title?: string;
      icon?: string;
      iconText?: string;
      iconWrapper?: string;
    };
    wrapper?: string;
  };
}
