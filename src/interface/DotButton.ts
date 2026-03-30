export interface DotButtonProps {
  style: {
    dotColor?: string;
    dotSize: number;
  };
  onClick: () => void;
  aria: string;
}