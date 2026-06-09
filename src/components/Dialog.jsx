import { useEffect } from 'react';

export default function Dialog({ titleId, onClose, className = '', children }) {
  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKeyDown);
    document.body.classList.add('dialog-open');
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('dialog-open');
    };
  }, [onClose]);

  return (
    <div className="dialog-backdrop" onMouseDown={onClose}>
      <section
        className={`dialog ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="dialog__close"
          onClick={onClose}
          aria-label="Bezárás"
          autoFocus
        >
          ×
        </button>
        {children}
      </section>
    </div>
  );
}
