import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginSubmission from '../sharedComponent/LoginSubmission'
import { handlers } from './handlers'

const server = setupServer(...handlers)

// Setup
beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => server.close())

describe('LoginSubmission', () => {
  test('successful login submission', async () => {
    const user = userEvent.setup()
    render(<LoginSubmission />)

    const username = screen.getByLabelText(/username/i)
    const password = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /submit/i })

    await user.type(username, 'testuser')
    await user.type(password, 'testpass')
    await user.click(submitButton)

    // Wait for spinner to be removed
    await waitForElementToBeRemoved(() => screen.getByLabelText('loading...'))

    // Assert success message
    expect(screen.getByText(/welcome/i)).toBeInTheDocument()
    expect(screen.getByText('testuser')).toBeInTheDocument()
  })

  test('handles server error', async () => {
    server.use(
      rest.post('https://auth-provider.example.com/api/login', (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ message: 'Internal server error' })
        )
      })
    )

    const user = userEvent.setup()
    render(<LoginSubmission />)

    const username = screen.getByLabelText(/username/i)
    const password = screen.getByLabelText(/password/i)
    
    await user.type(username, 'testuser')
    await user.type(password, 'testpass')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    await waitForElementToBeRemoved(() => screen.getByLabelText('loading...'))
    
    expect(screen.getByRole('alert')).toMatchSnapshot()
  })

  test('handles missing password', async () => {
    const user = userEvent.setup();
    render(<LoginSubmission />);

    const username = screen.getByLabelText(/username/i);
    await user.type(username, 'testuser');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for spinner removal
    await waitForElementToBeRemoved(() => screen.getByLabelText('loading...'));
    
    // Assert error message is rendered.
    expect(screen.getByRole('alert')).toMatchSnapshot();
  });
})