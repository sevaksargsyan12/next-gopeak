interface IContainer {
  className?: string;
  children?: React.ReactNode;
}

const Container = ({ children, className }: IContainer) => {
  return <main className={className}>{children}</main>;
};

export default Container;
