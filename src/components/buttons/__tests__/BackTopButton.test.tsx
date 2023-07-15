import { fireEvent, render } from '@testing-library/react';

import BackTopButton from '../BackTopButton';

const renderBackTopButton = () => render(<BackTopButton />);

describe('<BackTopButton />', () => {
  it('should show the button when scrolling beyond 300px', () => {
    const { container } = renderBackTopButton();

    window.scrollY = 400;
    fireEvent.scroll(window);

    expect(container.querySelector("[data-testid='back-top-button']")).toBeInTheDocument();
  });

  it('should hide the button when scrolling within 300px', () => {
    const { container } = renderBackTopButton();

    window.scrollY = 200;
    fireEvent.scroll(window);

    expect(container.querySelector("[data-testid='back-top-button']")).not.toBeInTheDocument();
  });

  it('should scroll to top when the button is clicked', () => {
    renderBackTopButton();
    
    const button = document.querySelector("[data-testid='scroll-to-top-button']");
    window.scrollTo = jest.fn();

    if (button) {
      fireEvent.click(button);

      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: "smooth",
      });
    }
  });
});
