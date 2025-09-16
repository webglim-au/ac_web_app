import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

interface Message {
  id: string;
  clientId?: string;
  from: string;
  text: string;
  createdAt: string;
}

interface TypingUsers {
  [userId: string]: boolean;
}

interface UseChatProps {
  serverUrl: string;
  roomId: string;
  user: { id: string };
}

export default function useChat({ serverUrl, roomId, user }: UseChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingUsers, setTypingUsers] = useState<TypingUsers>({});
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!serverUrl || !roomId || !user?.id) return;

    const socket = io(serverUrl);
    socketRef.current = socket;

    socket.on("connect", () => {
      socket.emit("join", roomId);
    });

    socket.on("message", (msg: Message) => {
      setMessages((prev) => {
        const exists = prev.find(
          (m) => m.id === msg.id || (msg.clientId && m.clientId === msg.clientId)
        );
        return exists
          ? prev.map((m) =>
              m.clientId === msg.clientId ? { ...msg } : m
            )
          : [...prev, msg];
      });
    });

    socket.on("typing", ({ userId, typing }: { userId: string; typing: boolean }) => {
      setTypingUsers((prev) => ({ ...prev, [userId]: typing }));
    });

    return () => {
      socket.emit("leave", roomId);
      socket.disconnect();
      socketRef.current = null;
    };
  }, [serverUrl, roomId, user]);

  function sendMessage(text: string) {
    const clientId = uuidv4();
    const optimistic: Message = {
      id: `temp-${clientId}`,
      clientId,
      from: user.id,
      text,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimistic]);
    socketRef.current?.emit("message", { roomId, text, clientId, from: user.id });
  }

  function setTyping(typing = true) {
    socketRef.current?.emit("typing", { roomId, typing, userId: user.id });
  }

  return { messages, sendMessage, setTyping, typingUsers };
}
