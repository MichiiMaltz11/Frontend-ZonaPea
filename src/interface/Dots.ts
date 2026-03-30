export interface DotsProps {
  images: (string | File | null)[];
  style?: {
    boxStyle?: string;
    dotDefaultColor?: string;
    dotActiveColor?: string;
  };
  onClick: (index: number) => void;
  currentIndex: number;
}