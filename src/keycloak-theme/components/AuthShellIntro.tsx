type AuthShellIntroProps = {
  heading: string;
  subheading: string;
  className?: string;
};

const AuthShellIntro = ({ heading, subheading, className }: AuthShellIntroProps) => {
  return (
    <div className={className}>
      <h1 className="text-h5 text-foreground">{heading}</h1>
      <p className="text-foreground-secondary text-body-1">{subheading}</p>
    </div>
  );
};

export default AuthShellIntro;
