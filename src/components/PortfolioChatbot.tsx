import React, { useEffect, useRef, useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type ChatMessage = {
  id: number;
  role: 'assistant' | 'user';
  text: string;
};

const suggestedQuestions = [
  'What are his main skills?',
  'Tell me about his experience',
  'What projects has he built?',
];

const welcomeMessage: ChatMessage = {
  id: 0,
  role: 'assistant',
  text: 'Hi! Ask me about Kshitij, programming, technology, or anything else.',
};

export const PortfolioChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [nextMessageId, setNextMessageId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isOpen]);

  const sendQuestion = async (submittedQuestion: string) => {
    const trimmedQuestion = submittedQuestion.trim();
    if (!trimmedQuestion || isLoading) return;

    const requestHistory = messages
      .filter((message) => message.id !== 0)
      .slice(-12)
      .map(({ role, text }) => ({ role, content: text }));
    const userMessageId = nextMessageId;
    setMessages((currentMessages) => [...currentMessages, { id: userMessageId, role: 'user', text: trimmedQuestion }]);
    setNextMessageId((id) => id + 1);
    setQuestion('');
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_CHAT_API_URL || '/api/chat';
      const result = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmedQuestion, history: requestHistory }),
      });
      let payload: { answer?: unknown; error?: unknown };
      try {
        payload = await result.json();
      } catch {
        throw new Error('The chat service returned an invalid response. Please try again.');
      }

      if (!result.ok) {
        throw new Error(typeof payload.error === 'string' ? payload.error : 'The chat service could not answer right now.');
      }
      if (typeof payload.answer !== 'string' || !payload.answer.trim()) {
        throw new Error('The chat service returned an empty response. Please try again.');
      }

      setMessages((currentMessages) => [...currentMessages, {
        id: userMessageId + 1,
        role: 'assistant',
        text: payload.answer.trim(),
      }]);
      setNextMessageId((id) => id + 1);
    } catch (error) {
      const message = error instanceof TypeError
        ? 'I could not connect to the chat service. Please check your connection and try again.'
        : error instanceof Error
          ? error.message
          : 'Please try again.';
      setMessages((currentMessages) => [...currentMessages, {
        id: userMessageId + 1,
        role: 'assistant',
        text: `Sorry, ${message}`,
      }]);
      setNextMessageId((id) => id + 1);
    } finally {
      setIsLoading(false);
    }
  };

  const submitQuestion = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendQuestion(question);
  };

  const askSuggestedQuestion = (suggestion: string) => {
    void sendQuestion(suggestion);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label="Portfolio chatbot"
          className="mb-3 flex h-[min(32rem,calc(100dvh-7rem))] w-[min(23rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl shadow-black/20"
        >
          <header className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">Portfolio assistant</h2>
                <p className="text-xs text-muted-foreground">Portfolio details and general questions</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </header>

          <div ref={transcriptRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
    message.role === 'user'
      ? 'bg-violet-600 text-white'
      : 'bg-secondary text-foreground'
  }`}
>
  {message.role === 'assistant' ? (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {message.text}
    </ReactMarkdown>
  ) : (
    <p className="whitespace-pre-wrap">{message.text}</p>
  )}
</div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestedQuestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => askSuggestedQuestion(suggestion)}
                    disabled={isLoading}
                    className="rounded-full border border-border px-3 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:border-violet-500/50 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            {isLoading && (
              <div role="status" aria-label="Assistant is responding" className="flex justify-start">
                <p className="rounded-2xl rounded-bl-md bg-secondary px-4 py-3 text-sm text-muted-foreground">
                  <span className="inline-flex gap-1">
                    <span className="animate-pulse">•</span>
                    <span className="animate-pulse [animation-delay:150ms]">•</span>
                    <span className="animate-pulse [animation-delay:300ms]">•</span>
                  </span>
                </p>
              </div>
            )}
          </div>

          <form onSubmit={submitQuestion} className="flex items-center gap-2 border-t border-border p-3">
            <label className="sr-only" htmlFor="portfolio-chat-question">Ask about the portfolio</label>
            <input
              id="portfolio-chat-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              disabled={isLoading}
              placeholder="Ask anything..."
              className="h-11 min-w-0 flex-1 rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
            <button
              type="submit"
              disabled={!question.trim() || isLoading}
              aria-label="Send message"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white transition-colors hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}
        aria-expanded={isOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-900/25 transition hover:scale-105 hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
      >
        {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <MessageCircle className="h-6 w-6" aria-hidden="true" />}
      </button>
    </div>
  );
};