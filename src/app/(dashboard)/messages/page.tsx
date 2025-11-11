'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { recentMessages, currentClient } from '@/lib/data/mockData';
import { Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function MessagesPage() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl mb-4">Messages</h1>
          <p className="text-lg text-muted-foreground">
            Stay connected with Coach {currentClient.coachName}
          </p>
        </div>

        {/* Coach Info */}
        <div className="bg-card rounded-xl p-6 shadow-md border border-border mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src="/generated/testimonial-1.png"
                alt="Coach Jennifer"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-card-foreground">
                Coach {currentClient.coachName}
              </h2>
              <p className="text-sm text-muted-foreground">Your dedicated life coach</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-xs text-muted-foreground">Usually responds within 2 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Message Thread */}
        <div className="space-y-4 mb-6">
          {recentMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.from === 'client' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-xl p-4 ${
                  msg.from === 'coach'
                    ? 'bg-card shadow border border-border'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                <div className="flex items-start gap-3">
                  {msg.from === 'coach' && (
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                      <Image
                        src="/generated/testimonial-1.png"
                        alt="Coach Jennifer"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed">{msg.message}</p>
                    <span
                      className={`text-xs mt-2 block ${
                        msg.from === 'coach' ? 'text-muted-foreground' : 'text-primary-foreground/70'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-card rounded-xl p-4 shadow-md border border-border sticky bottom-20 md:bottom-8">
          <div className="flex gap-3">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message to Coach Jennifer..."
              className="resize-none"
              rows={3}
            />
            <Button onClick={handleSend} size="icon" className="h-auto">
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Your coach will be notified when you send a message
          </p>
        </div>
      </div>
    </div>
  );
}
