import { rest } from 'msw'

export const handlers = [
  rest.post('https://auth-provider.example.com/api/login', async (req, res, ctx) => {
    const { username, password } = await req.json()
    
    if (!password) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'Password is required' })
      )
    }

    if (!username) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'Username is required' })
      )
    }

    return res(
      ctx.json({
        username
      })
    )
  })
]