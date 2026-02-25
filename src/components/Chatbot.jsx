import { useState, useRef, useEffect } from 'react'
import '../chatbot.css'

const WELCOME_MESSAGE =
  'Hej! Jag kan svara på frågor om våra tjänster, metoder och hur Nathalie kan hjälpa din organisation. Vad undrar du över?'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: WELCOME_MESSAGE },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadSent, setLeadSent] = useState(false)
  const [leadName, setLeadName] = useState('')
  const [leadEmail, setLeadEmail] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, showLeadForm])

  async function handleSend() {
    const text = input.trim()
    if (!text || loading) return

    const userMessage = { role: 'user', content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await res.json()
      let reply = data.reply || 'Förlåt, något gick fel. Försök igen.'

      if (reply.includes('[LEAD_FORM]')) {
        reply = reply.replace('[LEAD_FORM]', '').trim()
        setShowLeadForm(true)
      }

      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Förlåt, något gick fel. Försök igen.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  async function handleLeadSubmit(e) {
    e.preventDefault()
    if (!leadName.trim() || !leadEmail.trim()) return

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName.trim(),
          email: leadEmail.trim(),
          message: messages
            .filter(m => m.role === 'user')
            .map(m => m.content)
            .join(' | '),
        }),
      })
      setLeadSent(true)
      setShowLeadForm(false)
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Tack! Nathalie återkommer till dig så snart som möjligt.',
        },
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Kunde inte skicka just nu. Du kan nå oss på nathalie.tornbrant@m365consulting.se.',
        },
      ])
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Stäng chatt' : 'Öppna chatt'}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      <div className={`chatbot-panel ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <span>Chatta med oss</span>
          <button onClick={() => setIsOpen(false)} aria-label="Stäng">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chatbot-msg ${msg.role}`}>
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="chatbot-msg assistant">
              <span className="chatbot-dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          )}

          {showLeadForm && !leadSent && (
            <form className="chatbot-lead-form" onSubmit={handleLeadSubmit}>
              <p>Lämna dina uppgifter så hör Nathalie av sig:</p>
              <input
                type="text"
                placeholder="Ditt namn"
                value={leadName}
                onChange={e => setLeadName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Din e-post"
                value={leadEmail}
                onChange={e => setLeadEmail(e.target.value)}
                required
              />
              <button type="submit">Skicka</button>
            </form>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Skriv ett meddelande..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <button onClick={handleSend} disabled={loading || !input.trim()}>
            Skicka
          </button>
        </div>
      </div>
    </>
  )
}
