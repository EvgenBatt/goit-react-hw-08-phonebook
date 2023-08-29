import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #e7e7e7;
`;

export const Button = styled.button`
  padding: 6px 12px;
  font-size: 18px;
  font-weight: 500;
  color: #e7e7e7;
  background-color: transparent;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  transform: scale(0.9);

  &:hover,
  &:focus {
    color: #ff3842;
    font-weight: 600;
    padding: 6px 12px;
    background-color: #e7e7e7;
  }
`;
