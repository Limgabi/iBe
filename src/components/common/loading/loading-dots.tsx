export default function LoadingDots() {
  return (
    <span className="loading-dots" aria-label="loading">
      <span className="dot d1" />
      <span className="dot d2" />
      <span className="dot d3" />

      <style jsx>{`
        .loading-dots {
          position: relative;
          display: inline-block;
          width: 37px;
          height: 8px;
        }
        .dot {
          position: absolute;
          top: 0;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #ffffff;
          opacity: 0.25;
          transform: scale(0.9);
          animation: pulse 0.9s infinite ease-in-out;
        }
        .d1 {
          left: 0px;
          animation-delay: 0s;
        }
        .d2 {
          left: 14.5px;
          animation-delay: 0.15s;
        }
        .d3 {
          left: 29px;
          animation-delay: 0.3s;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </span>
  );
}
