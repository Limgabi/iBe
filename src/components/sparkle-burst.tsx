type CssVarStyle = React.CSSProperties & Record<`--${string}`, string>;

export default function SparkleBurst({ seed }: { seed: number }) {
  const pieces = Array.from({ length: 12 }).map((_, idx) => {
    const a = ((seed + idx) * 37) % 360;
    const r = 26 + (((seed + idx) * 13) % 18);
    const tx = Math.round(Math.cos((a * Math.PI) / 180) * r);
    const ty = Math.round(Math.sin((a * Math.PI) / 180) * r);
    const delay = (idx % 4) * 20;
    return { tx, ty, delay };
  });

  return (
    <div className="pointer-events-none absolute inset-0">
      {pieces.map((p, i) => {
        const style: CssVarStyle = {
          "--tx": `${p.tx}px`,
          "--ty": `${p.ty}px`,
          animationDelay: `${p.delay}ms`,
        };

        return <span key={i} className="sparkle" style={style} />;
      })}
    </div>
  );
}
