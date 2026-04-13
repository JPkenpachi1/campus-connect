interface PhoneMockupProps {
  variant?: "primary" | "secondary";
  className?: string;
  screenContent?: React.ReactNode;
}

export default function PhoneMockup({ variant = "primary", className = "", screenContent }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <div
        className={`relative rounded-[44px] overflow-hidden shadow-2xl ${
          variant === "primary"
            ? "bg-[#1C1C2E] border-2 border-white/10"
            : "bg-[#141420] border-2 border-white/6"
        }`}
        style={{ width: 260, height: 540 }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#0A0A0F] rounded-b-2xl z-10 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#1C1C2E]" />
          <div className="w-14 h-1.5 rounded-full bg-[#1C1C2E]" />
        </div>

        {/* Side buttons */}
        <div className="absolute right-0 top-24 w-1 h-16 bg-white/10 rounded-l-full" />
        <div className="absolute left-0 top-20 w-1 h-10 bg-white/10 rounded-r-full" />
        <div className="absolute left-0 top-36 w-1 h-10 bg-white/10 rounded-r-full" />

        {/* Screen */}
        <div className="absolute inset-0 overflow-hidden">
          {screenContent || <DefaultScreen variant={variant} />}
        </div>

        {/* Screen glare */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[44px]" />
        
        {/* Bottom bar */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  );
}

function DefaultScreen({ variant }: { variant: "primary" | "secondary" }) {
  if (variant === "secondary") {
    return (
      <div className="w-full h-full bg-gradient-to-b from-[#0E0E1A] to-[#141425] pt-10 px-4">
        {/* Stats screen */}
        <div className="mt-6">
          <p className="text-white/40 text-xs mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Today's Focus</p>
          <p className="text-white text-2xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>6h 42m</p>
          
          {/* Progress rings */}
          <div className="flex justify-between mb-6">
            {[
              { label: "Deep Work", pct: 82, color: "#C8FF00" },
              { label: "Meetings", pct: 24, color: "#FF5C3A" },
              { label: "Admin", pct: 14, color: "#7C70FA" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                  <circle
                    cx="24" cy="24" r="20"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="4"
                    strokeDasharray={`${(item.pct / 100) * 125.6} 125.6`}
                    strokeLinecap="round"
                    transform="rotate(-90 24 24)"
                  />
                  <text x="24" y="28" textAnchor="middle" fill="white" fontSize="10" fontFamily="Syne">{item.pct}%</text>
                </svg>
                <span className="text-white/40 text-[9px] text-center">{item.label}</span>
              </div>
            ))}
          </div>
          
          {/* Weekly chart */}
          <div className="bg-white/5 rounded-2xl p-4">
            <p className="text-white/60 text-xs mb-3">This week</p>
            <div className="flex items-end gap-2 h-16">
              {[40, 65, 55, 80, 70, 90, 60].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 5 ? "#C8FF00" : "rgba(255,255,255,0.15)" }} />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <span key={i} className="flex-1 text-center text-[9px] text-white/30">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#0D0D1A] to-[#12121F] pt-10 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mt-4 mb-5">
        <div>
          <p className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>Good morning</p>
          <p className="text-white font-semibold text-base" style={{ fontFamily: "'Syne', sans-serif" }}>Jai 👋</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C8FF00] to-[#7AC700] flex items-center justify-center">
          <span className="text-[#0A0A0F] text-xs font-bold">J</span>
        </div>
      </div>

      {/* Flow score */}
      <div className="bg-gradient-to-br from-[#C8FF00]/15 to-[#C8FF00]/5 border border-[#C8FF00]/20 rounded-2xl p-4 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[#C8FF00]/70 text-xs mb-1">Flow Score</p>
            <p className="text-white text-3xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>94</p>
            <p className="text-white/40 text-xs mt-1">↑ 12 from yesterday</p>
          </div>
          <div className="w-12 h-12">
            <svg viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(200,255,0,0.15)" strokeWidth="4" />
              <circle cx="24" cy="24" r="20" fill="none" stroke="#C8FF00" strokeWidth="4"
                strokeDasharray="118 125.6" strokeLinecap="round" transform="rotate(-90 24 24)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tasks */}
      <p className="text-white/50 text-xs mb-2 uppercase tracking-wider">Today's Focus</p>
      <div className="space-y-2">
        {[
          { text: "Finish API integration", done: true, tag: "Dev" },
          { text: "Review design specs", done: false, tag: "Design" },
          { text: "Team standup 10am", done: false, tag: "Meeting" },
        ].map((task, i) => (
          <div key={i} className={`flex items-center gap-3 p-2.5 rounded-xl ${task.done ? "opacity-50" : "bg-white/5"}`}>
            <div className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center ${
              task.done ? "bg-[#C8FF00] border-[#C8FF00]" : "border-white/20"
            }`}>
              {task.done && <svg width="8" height="6" viewBox="0 0 8 6"><path d="M1 3L3 5L7 1" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/></svg>}
            </div>
            <span className={`text-xs flex-1 ${task.done ? "line-through text-white/40" : "text-white/80"}`}>{task.text}</span>
            <span className="text-[9px] bg-white/10 px-2 py-0.5 rounded-full text-white/40">{task.tag}</span>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-6 left-4 right-4 bg-[#1C1C2E] rounded-2xl p-3 flex justify-around">
        {[
          { icon: "⚡", active: true },
          { icon: "📊", active: false },
          { icon: "🤖", active: false },
          { icon: "⚙️", active: false },
        ].map((item, i) => (
          <div key={i} className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm ${item.active ? "bg-[#C8FF00]" : ""}`}>
            <span style={{ filter: item.active ? "none" : "grayscale(1) opacity(0.4)" }}>{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
