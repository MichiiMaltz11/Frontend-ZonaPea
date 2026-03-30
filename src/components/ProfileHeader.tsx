// src/components/ProfileHeader.tsx
import React from 'react';
import type { ProfileHeaderProps } from '../interface/ProfileHeader';

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  title,
  subtitle,
  className = ''
}) => {
  return (
    <div className={`text-center mb-6 ${className}`}>
      <h2 className="text-black text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-black text-lg mt-2">{subtitle}</p>}
    </div>
  );
};

export default ProfileHeader;