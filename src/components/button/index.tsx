import styles from './Button.module.scss';
import React from 'react';

interface IBtnProps {
  prefixEle?: React.ReactNode | string | number;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  secondary?: boolean;
  white?: boolean;
  bgDark?: boolean;
  className?: string;
  fullWidth?: boolean;
  linear?: boolean;
  shadow?: boolean;
  disabled?: boolean;
  round?: boolean;
  border?: boolean;
  uppercase?: boolean;
  titleWaiting?: string;
  isLoading?: boolean;
}

const getBtnSize = ({ large, small, medium }: IBtnProps): string => {
  switch (true) {
    case large:
      return 'large';
    case medium:
      return 'medium';
    case small:
      return 'small';
    default:
      return 'medium';
  }
};

interface IProps extends IBtnProps {
  children: React.ReactNode;
}

const Button: React.FC<IProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children = 'Click here',
  large,
  medium,
  small,
  secondary,
  white,
  bgDark,
  className,
  fullWidth,
  linear,
  shadow,
  disabled,
  round = true,
  border = true,
  uppercase = false,
  titleWaiting = 'Approving',
  isLoading = false,

  ...others
}) => {
  const btnClass = [
    styles.dtt__button,
    !linear && !disabled && bgDark && styles.btn_dark_bg,
    secondary && styles.secondary,
    white && styles.white,
    getBtnSize({ large, medium, small }),
    className,
    fullWidth && styles.fullWidth,
    linear && styles.linear,
    shadow && styles.shadow,
    disabled && styles.disabled,
    round && styles.round,
    border && styles.border,
    uppercase && styles.uppercase,
    isLoading && styles.disabled,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div
      className={btnClass}
      {...others}
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        !disabled && others?.onClick?.(event)
      }
    >
      {isLoading ? (
        <span>
          {titleWaiting}
        </span>
      ) : (
        children
      )}
    </div>
  );
};

export default Button;
