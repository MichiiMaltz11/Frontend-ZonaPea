type ProfilePictureSize = 'small' | 'medium' | 'large' | 'xl';

export interface ProfilePictureProps {
  imageSrc: string; // DEBE SER STRING, NO PUEDE SER NULL SIEMPRE.
  alt: string;
  size?: ProfilePictureSize;
  className?: string;
  deletable?: boolean; 
  onDeleteClick?: () => void; 
}