import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx: Starting application...');
console.log('Main.tsx: Root element:', document.getElementById("root"));

try {
  createRoot(document.getElementById("root")!).render(<App />);
  console.log('Main.tsx: App rendered successfully');
} catch (error) {
  console.error('Main.tsx: Error rendering app:', error);
}
