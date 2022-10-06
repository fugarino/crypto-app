import { ReactNode, SyntheticEvent } from "react";

interface IFormLayoutProps {
  handleFormSubmit: (e: SyntheticEvent) => Promise<void>;
  error: string;
  h1: string;
  p: string;
  children: ReactNode;
}

const FormLayout = ({ handleFormSubmit, error, h1, p, children }: IFormLayoutProps) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <header>
        <h1 className="text-3xl font-semibold text-[#171b2f]">{h1}</h1>
        {!error ? (
          <p className="text-[#959AA1] mt-1 mb-5">{p}</p>
        ) : (
          <p className="mt-1 mb-5 text-red-500">{error}</p>
        )}
      </header>
      {children}
    </form>
  );
};

export default FormLayout;
