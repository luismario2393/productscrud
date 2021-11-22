import styled from '@emotion/styled'; 


export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  padding: 2rem 0;
`;
export const Form = styled.form`
  display: flex;  
  flex-direction: column;
  gap: 1rem;
  width: 300px;
`;
export const Label = styled.label`
  color: var(--color-text-primary);
`;
export const Input = styled.input`
  border: none;
  width: 95%;
  padding: 2rem;
  background-color: var(--light-secondary);
  border-radius: 1rem;

  &::placeholder {
    color: var(--color-text-primary);
    font-family: var(--font);
  }
`;

export const ButtonProduct = styled.button`
  border: none;
  width: 95%;
  padding: 2rem;
  background-color: var(--light-secondary);
  border-radius: 1rem;
  margin-top: 3rem;
  font-family: var(--font);
  font-size: 1.8rem;
  color: white;
  background-color: var(--blue-primary);
  cursor: pointer;

  &:hover {
    background-color: var(--blue-secondary);
    transition: .3s ease;
  }
`;

export const TextArea = styled.textarea`
  width: 95%;
  background-color: var(--light-secondary);
  border-radius: 1rem;
  height: 20rem;
  padding: 1rem;
  border: none;

  &::placeholder {
    font-family: var(--font);
    font-style: italic;
  }
`;

export const H2 = styled.h2`
  width: 300px;
  color: var(--blue-primary);
`;
export const Error = styled.p`
  color: #f33b3b;
  font-style: italic;
  font-size: 1.4rem; 

  
`;