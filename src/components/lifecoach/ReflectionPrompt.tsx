'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface ReflectionPromptProps {
  question: string;
  type: 'scale' | 'text' | 'guided';
  options?: string[];
  onSave?: (response: string | number) => void;
}

export function ReflectionPrompt({
  question,
  type,
  options,
  onSave
}: ReflectionPromptProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [textResponse, setTextResponse] = useState('');
  const [scaleValue, setScaleValue] = useState([5]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSave = () => {
    if (type === 'scale') {
      onSave?.(scaleValue[0]);
    } else if (type === 'text') {
      onSave?.(textResponse);
    } else if (type === 'guided' && selectedOption) {
      onSave?.(selectedOption);
    }
    setIsExpanded(false);
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden transition-all">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex items-center justify-between hover:bg-secondary/50 transition-colors text-left"
      >
        <h4 className="font-medium text-card-foreground pr-4">{question}</h4>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>

      {isExpanded && (
        <div className="px-5 pb-5 pt-2 border-t border-border">
          {type === 'scale' && (
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Not challenging</span>
                <span className="font-semibold text-primary text-lg">{scaleValue[0]}</span>
                <span>Very challenging</span>
              </div>
              <Slider
                value={scaleValue}
                onValueChange={setScaleValue}
                min={1}
                max={10}
                step={1}
                className="py-4"
              />
            </div>
          )}

          {type === 'text' && (
            <div className="space-y-3">
              <Textarea
                value={textResponse}
                onChange={(e) => setTextResponse(e.target.value)}
                placeholder="Share your thoughts..."
                className="min-h-[120px] resize-none"
              />
            </div>
          )}

          {type === 'guided' && options && (
            <div className="space-y-2">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    selectedOption === option
                      ? 'border-primary bg-primary/5 font-medium'
                      : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          <div className="flex gap-2 mt-4">
            <Button onClick={handleSave} className="flex-1">
              Save Reflection
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsExpanded(false)}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
