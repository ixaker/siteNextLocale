interface BackCoverProps {
  children: React.ReactNode;
}

const BackCover: React.FC<BackCoverProps> = ({ children }) => {
  return (
    <div className="bg-bgImg max-h-[calc(100vh-120px)] md:min-h-screen bg-no-repeat bg-cover shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)]">
      {children}
    </div>
  );
};

export default BackCover;
