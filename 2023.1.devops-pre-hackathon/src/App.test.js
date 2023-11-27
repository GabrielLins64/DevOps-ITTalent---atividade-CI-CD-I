import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn devops/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header text', () => {
  render(<App />);
  const headerText = screen.getByText(/DevOps Básico IT Talent - Atividade CI\/CD 1/i);
  expect(headerText).toBeInTheDocument();
});

test('renders student name', () => {
  render(<App />);
  const studentName = screen.getByText(/Discente/i);
  expect(studentName).toBeInTheDocument();
  const gabrielLins = screen.getByText(/Gabriel Lins/i);
  expect(gabrielLins).toBeInTheDocument();
});

test('renders Learn DevOps link', () => {
  render(<App />);
  const learnDevOpsLink = screen.getByText(/Learn DevOps/i);
  expect(learnDevOpsLink).toBeInTheDocument();
  expect(learnDevOpsLink).toHaveAttribute('href', 'https://reactjs.org');
  expect(learnDevOpsLink).toHaveAttribute('target', '_blank');
});
