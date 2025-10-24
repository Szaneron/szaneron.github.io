import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  text: string;
  highlight?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, highlight }) => {
  const [displayed, setDisplayed] = useState(text);
  const [phase, setPhase] = useState<"idle" | "deleting" | "typing">("idle");
  const prevText = useRef(text);
  const nextText = useRef(text);

  useEffect(() => {
    if (prevText.current !== text) {
      nextText.current = text;
      setPhase("deleting");
    }
    prevText.current = text;
  }, [text]);

  useEffect(() => {
    let interval: number;
    if (phase === "deleting") {
      interval = setInterval(() => {
        setDisplayed((d) => {
          if (d.length > 0) {
            return d.slice(0, -1);
          } else {
            setPhase("typing");
            clearInterval(interval);
            return "";
          }
        });
      }, 15);
    } else if (phase === "typing") {
      interval = setInterval(() => {
        setDisplayed((d) => {
          if (d.length < nextText.current.length) {
            return nextText.current.slice(0, d.length + 1);
          } else {
            setPhase("idle");
            clearInterval(interval);
            return nextText.current;
          }
        });
      }, 15);
    } else if (phase === "idle") {
      setDisplayed(nextText.current);
    }
    return () => clearInterval(interval);
  }, [phase]);

  if (highlight && displayed.startsWith(highlight)) {
    return (
      <span>
        <span className="text-blue-400">
          {displayed.slice(0, highlight.length)}
        </span>
        {displayed.slice(highlight.length)}
      </span>
    );
  }
  return <span>{displayed}</span>;
};

export default Typewriter;
