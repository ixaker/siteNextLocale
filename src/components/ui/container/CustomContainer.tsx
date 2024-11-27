interface CustomContainerProps {
  children: React.ReactNode;
}

const CustomContainer: React.FC<CustomContainerProps> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export default CustomContainer;
