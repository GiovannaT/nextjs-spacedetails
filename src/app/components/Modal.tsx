"use client";

import { useEffect } from "react";
import { XCloseIcon } from "../styles/icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  hideHeader?: boolean;
  noPadding?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  className = "",
  size = "md",
  hideHeader = false,
  noPadding = false,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-full mx-4",
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const overlayClasses = hideHeader 
    ? "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-20 animate-fadeIn"
    : "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-10 backdrop-blur-sm animate-fadeIn";

  const containerClasses = hideHeader
    ? `relative w-full ${sizeClasses[size]} ${className} animate-slideUp`
    : `relative bg-white rounded-lg shadow-2xl w-full ${sizeClasses[size]} ${className} animate-slideUp`;

  return (
    <div
      className={overlayClasses}
      onClick={handleOverlayClick}
    >
      <div className={containerClasses}>
        {!hideHeader && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {title && (
              <h2 className="text-xl font-semibold text-[var(--color-gray-900)]">
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ml-auto"
              aria-label="Close modal"
            >
              <XCloseIcon />
            </button>
          </div>
        )}

        {hideHeader && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-200 bg-gray-900 bg-opacity-40 hover:bg-opacity-60 rounded-full transition-all backdrop-blur-sm"
            aria-label="Close modal"
          >
            <XCloseIcon />
          </button>
        )}

        <div className={noPadding ? "" : "p-6 overflow-y-auto max-h-[calc(100vh-200px)]"}>
          {children}
        </div>
      </div>
    </div>
  );
}

