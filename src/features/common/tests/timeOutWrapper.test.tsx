import { render, screen, act } from '@testing-library/react';
import TimeoutWrapper from '../components/TimeoutWrapper';

describe('TimeoutWrapper', () => {
  jest.useFakeTimers(); // Use fake timers to simulate the passage of time

  it('should render children initially', () => {
    render(
      <TimeoutWrapper timeout={1000}>
        <div>Test Content</div>
      </TimeoutWrapper>,
    );

    // Ensure the content is visible initially
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should hide children after the specified timeout', () => {
    render(
      <TimeoutWrapper timeout={1000}>
        <div>Test Content</div>
      </TimeoutWrapper>,
    );

    // Initially, the children should be visible
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    // Simulate the passage of time (1000ms in this case)
    act(() => {
      jest.advanceTimersByTime(1000); // Advance timers by 1000ms
    });

    // After the timeout, the children should no longer be in the document
    expect(screen.queryByText('Test Content')).toBeNull();
  });

  it('should not hide children before the timeout', () => {
    render(
      <TimeoutWrapper timeout={2000}>
        <div>Test Content</div>
      </TimeoutWrapper>,
    );

    // Initially, the children should be visible
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    // Simulate passing time before the timeout (less than the timeout)
    act(() => {
      jest.advanceTimersByTime(1000); // Advance timers by 1000ms (before 2000ms)
    });

    // The children should still be visible
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
