import { SectionContainer, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <SectionTitle>{title}</SectionTitle>}

      {children}
    </SectionContainer>
  );
};
