import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function simulateServerValidation(email: string, password: string): Promise<{ success: boolean; message?: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulated server-side validation
      if (email === 'test@example.com' && password === 'password123') {
        resolve({ success: true });
      } else {
        resolve({ success: false, message: 'Invalid email or password' });
      }
    }, 1000); // Simulate network delay
  });
}