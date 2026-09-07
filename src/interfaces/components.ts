interface IExperience {
  company: string;
  logo: string;
  role: string;
  duration: string;
  description: string[];
}

interface IHeading {
  text: string;
  top?: string;
}

interface IButton {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface ISocialButton {
  icon: React.ReactNode;
  label: string;
  link: string;
}

export type {
  IExperience,
  IHeading,
  IButton,
  ISocialButton,
};
