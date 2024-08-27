// src/global.d.ts
interface KofiWidgetOverlay {
    draw(username: string, options: Record<string, string>): void;
}

declare global {
    interface Window {
        kofiWidgetOverlay?: KofiWidgetOverlay;
    }
}

export { }; // Ensure this file is treated as a module
