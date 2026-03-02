"use client";
import { useState, useCallback, useRef } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function useTextScramble(originalText: string) {
    const [text, setText] = useState(originalText);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startScramble = useCallback(() => {
        let iteration = 0;
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setText((prev) =>
                originalText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        if (originalText[index] === " ") return " ";
                        return LETTERS[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= originalText.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    }, [originalText]);

    const stopScramble = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setText(originalText);
    }, [originalText]);

    return { text, startScramble, stopScramble };
}
