import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const findByText = (text) => {
  return screen.getByText(new RegExp(text, 'i'));
};

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
    const clickButton = screen.getByText('Clique aqui');
    fireEvent.click(clickButton);
  });

  test('renders header text when button is clicked', () => {
    const headerText = findByText('DevOps Básico IT Talent - Atividade CI/CD 1');
    expect(headerText).toBeInTheDocument();
  });

  test('renders student name when button is clicked', () => {
    const studentName = findByText('Discente');
    expect(studentName).toBeInTheDocument();

    const gabrielLins = findByText('Gabriel Lins');
    expect(gabrielLins).toBeInTheDocument();
  });

  test('renders Learn DevOps link when button is clicked', () => {
    const learnDevOpsLink = findByText('Learn DevOps');
    expect(learnDevOpsLink).toBeInTheDocument();
    expect(learnDevOpsLink).toHaveAttribute('href', 'https://reactjs.org');
    expect(learnDevOpsLink).toHaveAttribute('target', '_blank');
  });
});
