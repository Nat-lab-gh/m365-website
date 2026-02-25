export default async function handler(req, res) {
  const hasKey = !!process.env.ANTHROPIC_API_KEY
  const keyPrefix = process.env.ANTHROPIC_API_KEY?.substring(0, 12) || 'MISSING'

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 50,
        messages: [{ role: 'user', content: 'Säg hej' }],
      }),
    })

    const data = await response.json()

    return res.status(200).json({
      hasKey,
      keyPrefix,
      apiStatus: response.status,
      reply: data.content?.[0]?.text || null,
      error: data.error || null,
    })
  } catch (error) {
    return res.status(200).json({
      hasKey,
      keyPrefix,
      error: error.message,
    })
  }
}
