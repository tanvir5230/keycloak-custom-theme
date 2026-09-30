import logoUrl from '../../assets/logo.png';
import { cn } from '../../utils/cn';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <img
      src={logoUrl}
      width={178}
      height={56}
      alt="JustSafe VIMS"
      className={cn('block m-auto mb-6', className)}
    />
  );
}
