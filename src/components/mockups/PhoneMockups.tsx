import React from "react";
import {
  Bell,
  Search,
  Wifi,
  BatteryCharging,
  Signal,
  ChevronLeft,
  Plus,
  Home,
  Search as SearchIcon,
  ShoppingCart,
  ClipboardList,
  MapPin,
  UserCircle2,
  Sparkles,
  Clock3,
  Coffee,
  Pizza,
  Soup,
  UtensilsCrossed,
  Wheat,
  Salad,
  Sandwich,
  BadgeCheck,
  Flame,
  ChefHat,
  ShoppingBag,
  Minus,
  PlusCircle,
  QrCode,
  Check,
  Circle,
  ChevronRight,
  LayoutGrid,
 
  Cherry,
  Milk,
  SunMedium,
  Box,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type DeviceType = "ios" | "android";
type ColorTheme = "white" | "blue";
type ScreenVariant = "dashboard" | "menu" | "cart" | "tracking";

interface PhoneMockupProps {
  device?: DeviceType;
  theme?: ColorTheme;
  screen?: ScreenVariant;
  className?: string;
}

interface ScreenProps {
  isBlue: boolean;
}
interface CartScreenProps extends ScreenProps {
  isIOS: boolean;
}

// ─── Shared Token Helpers ─────────────────────────────────────────────────────
function t(isBlue: boolean, whiteVal: string, blueVal: string) {
  return isBlue ? blueVal : whiteVal;
}

function IconWrap({
  children,
  bg,
  color,
  size = 16,
}: {
  children: React.ReactNode;
  bg: string;
  color: string;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size + 10,
        height: size + 10,
        borderRadius: 10,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color,
      }}
    >
      {children}
    </div>
  );
}

// ─── Shared Sub-components ────────────────────────────────────────────────────

function StatusBar({ isBlue }: { isBlue: boolean }) {
  return (
    <div
      style={{
        height: 44,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "0 16px 8px",
        borderBottom: isBlue ? "none" : "1px solid #e8edf7",
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: isBlue ? "white" : "#0f1535",
          fontFamily: "system-ui",
        }}
      >
        9:41
      </span>
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <Signal size={10} strokeWidth={2.2} color={isBlue ? "rgba(255,255,255,0.8)" : "#0f1535"} />
        <Wifi size={10} strokeWidth={2.2} color={isBlue ? "rgba(255,255,255,0.8)" : "#0f1535"} />
        <BatteryCharging size={10} strokeWidth={2.2} color={isBlue ? "rgba(255,255,255,0.8)" : "#0f1535"} />
      </div>
    </div>
  );
}

function SectionLabel({ label, isBlue }: { label: string; isBlue: boolean }) {
  return (
    <p
      style={{
        color: isBlue ? "rgba(255,255,255,0.4)" : "#94a3b8",
        fontSize: 8,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: 7,
      }}
    >
      {label}
    </p>
  );
}

function BottomNav({ isBlue, activeIndex }: { isBlue: boolean; activeIndex: number }) {
  const icons = [Home, SearchIcon, ShoppingCart, ClipboardList];
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: isBlue ? "rgba(255,255,255,0.08)" : "white",
        borderTop: isBlue ? "1px solid rgba(255,255,255,0.12)" : "1px solid #e8edf7",
        padding: "8px 20px 20px",
        display: "flex",
        justifyContent: "space-around",
        zIndex: 15,
      }}
    >
      {icons.map((Icon, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <Icon
            size={16}
            strokeWidth={2}
            color={i === activeIndex ? (isBlue ? "white" : "#1e40af") : isBlue ? "rgba(255,255,255,0.35)" : "#94a3b8"}
          />
          {i === activeIndex && (
            <div
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: isBlue ? "white" : "#1e40af",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function BackHeader({ isBlue, title, right }: { isBlue: boolean; title: string; right?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          flexShrink: 0,
          background: isBlue ? "rgba(255,255,255,0.12)" : "white",
          border: isBlue ? "1px solid rgba(255,255,255,0.16)" : "1.5px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isBlue ? "white" : "#0f1535",
          boxShadow: isBlue ? "none" : "0 1px 3px rgba(30,58,138,0.07)",
        }}
      >
        <ChevronLeft size={14} strokeWidth={2.25} />
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: "'Syne', sans-serif", color: isBlue ? "white" : "#0f1535", fontSize: 13, fontWeight: 700 }}>
          {title}
        </p>
      </div>
      {right}
    </div>
  );
}

function AddBtn({ isBlue }: { isBlue: boolean }) {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: 6,
        background: isBlue ? "white" : "#1e40af",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: isBlue ? "#1e40af" : "white",
        marginLeft: "auto",
        marginTop: 3,
        lineHeight: 1,
      }}
    >
      <Plus size={14} strokeWidth={3} />
    </div>
  );
}

function ItemCard({
  isBlue,
  icon,
  name,
  sub,
  price,
}: {
  isBlue: boolean;
  icon: React.ReactNode;
  name: string;
  sub: string;
  price: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        background: isBlue ? "rgba(255,255,255,0.1)" : "white",
        border: isBlue ? "1px solid rgba(255,255,255,0.14)" : "1.5px solid #e8edf7",
        borderRadius: 12,
        padding: "8px 10px",
        marginBottom: 7,
        boxShadow: isBlue ? "none" : "0 1px 4px rgba(30,58,138,0.05)",
      }}
    >
      <IconWrap bg={isBlue ? "rgba(255,255,255,0.15)" : "#eff6ff"} color={isBlue ? "white" : "#1e40af"} size={34}>
        {icon}
      </IconWrap>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            color: isBlue ? "white" : "#0f1535",
            fontSize: 10,
            fontWeight: 600,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </p>
        <p style={{ color: isBlue ? "rgba(255,255,255,0.45)" : "#94a3b8", fontSize: 8, marginTop: 1 }}>{sub}</p>
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <p style={{ color: isBlue ? "white" : "#1e40af", fontSize: 11, fontWeight: 700 }}>{price}</p>
        <AddBtn isBlue={isBlue} />
      </div>
    </div>
  );
}

// ─── Screen 1: Dashboard ──────────────────────────────────────────────────────
export function DashboardScreen({ isBlue }: ScreenProps) {
  const bg = isBlue ? "#1e3a8a" : "#f7f9ff";

  return (
    <div style={{ width: "100%", height: "100%", background: bg, overflow: "hidden" }}>
      <StatusBar isBlue={isBlue} />
      <div style={{ padding: "14px 14px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div>
            <small style={{ color: isBlue ? "rgba(255,255,255,0.5)" : "#7b8bb2", fontSize: 9, display: "block" }}>
              <MapPin size={10} style={{ display: "inline", marginRight: 3 }} />
              Block C Canteen
            </small>
            <b style={{ fontFamily: "'Syne', sans-serif", color: isBlue ? "white" : "#0f1535", fontSize: 14, fontWeight: 700 }}>
              Hey Kenny 👋
            </b>
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: isBlue ? "white" : "#1e40af",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                color: isBlue ? "#1e40af" : "white",
              }}
            >
              J
            </div>
            <div
              style={{
                position: "absolute",
                top: -1,
                right: -1,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#ef4444",
                border: `1.5px solid ${bg}`,
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: isBlue ? "rgba(255,255,255,0.1)" : "white",
            border: isBlue ? "1px solid rgba(255,255,255,0.15)" : "1.5px solid #e2e8f0",
            borderRadius: 12,
            padding: "7px 12px",
            marginBottom: 12,
            boxShadow: isBlue ? "none" : "0 1px 4px rgba(30,58,138,0.06)",
          }}
        >
          <Search size={12} strokeWidth={2.2} color={isBlue ? "rgba(255,255,255,0.55)" : "#94a3b8"} />
          <span style={{ color: isBlue ? "rgba(255,255,255,0.35)" : "#94a3b8", fontSize: 10 }}>Search for food, shops...</span>
        </div>

        <div
          style={{
            background: isBlue ? "rgba(255,255,255,0.12)" : "linear-gradient(135deg, #1e40af, #3b82f6)",
            border: isBlue ? "1px solid rgba(255,255,255,0.18)" : "none",
            borderRadius: 16,
            padding: 12,
            marginBottom: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ color: "white", fontSize: 11, fontWeight: 700 }}>
              <Sparkles size={12} style={{ display: "inline", marginRight: 4 }} />
              Skip the Queue!
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 9, marginTop: 2 }}>Pre-order &amp; pick up in 10 min</p>
          </div>
          <div style={{ background: "white", color: "#1e40af", fontSize: 8, fontWeight: 700, padding: "5px 9px", borderRadius: 8 }}>
            ORDER
          </div>
        </div>

        <SectionLabel label="Categories" isBlue={isBlue} />
        <div style={{ display: "flex", gap: 7, marginBottom: 12, overflow: "hidden" }}>
          {[
            { icon: <UtensilsCrossed size={14} />, label: "Meals", active: true },
            { icon: <Coffee size={14} />, label: "Drinks" },
            { icon: <Pizza size={14} />, label: "Snacks" },
            { icon: <Milk size={14} />, label: "Juices" },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                padding: "7px 9px",
                borderRadius: 12,
                background: c.active ? (isBlue ? "white" : "#eff6ff") : isBlue ? "rgba(255,255,255,0.08)" : "white",
                border: c.active ? (isBlue ? "1px solid white" : "1.5px solid #3b82f6") : isBlue ? "1px solid rgba(255,255,255,0.12)" : "1.5px solid #e2e8f0",
              }}
            >
              <span style={{ fontSize: 14 }}>{c.icon}</span>
              <span style={{ fontSize: 8, color: c.active ? "#1e40af" : isBlue ? "rgba(255,255,255,0.5)" : "#94a3b8" }}>{c.label}</span>
            </div>
          ))}
        </div>

        <SectionLabel label="Popular Now" isBlue={isBlue} />
        <ItemCard
          isBlue={isBlue}
          icon={<Salad size={16} />}
          name="Veg Thali"
          sub="Main Canteen · 8 min"
          price="₹65"
        />
        <ItemCard
          isBlue={isBlue}
          icon={<Coffee size={16} />}
          name="Masala Chai"
          sub="Tea Stall · 3 min"
          price="₹15"
        />
      </div>

      <BottomNav isBlue={isBlue} activeIndex={0} />
    </div>
  );
}

// ─── Screen 2: Menu ───────────────────────────────────────────────────────────
export function MenuScreen({ isBlue }: ScreenProps) {
  const bg = isBlue ? "#1e3a8a" : "#f7f9ff";
  const menuItems = [
    { name: "Veg Thali", desc: "Dal, rice, 2 sabzi, roti", price: "₹65", badge: "⚡ Fast", icon: <Salad size={15} /> },
    { name: "Paneer Masala", desc: "With naan & salad", price: "₹90", badge: "🔥", icon: <ChefHat size={15} /> },
    { name: "Chole Bhature", desc: "2 bhature + chole", price: "₹55", badge: "", icon: <Soup size={15} /> },
  ];

  return (
    <div style={{ width: "100%", height: "100%", background: bg, overflow: "hidden" }}>
      <StatusBar isBlue={isBlue} />
      <div style={{ padding: "14px 14px 0" }}>
        <BackHeader isBlue={isBlue} title="Main Canteen" />
        <p style={{ color: isBlue ? "rgba(255,255,255,0.4)" : "#94a3b8", fontSize: 8, marginBottom: 2, marginTop: -8 }}>
          🟢 Open · Closes 8 PM · ⭐ 4.7
        </p>

        <div style={{ display: "flex", gap: 6, marginBottom: 10, marginTop: 8 }}>
          {["All", "Veg", "Non-Veg", "Drinks"].map((tab, i) => (
            <div
              key={tab}
              style={{
                padding: "4px 10px",
                borderRadius: 100,
                fontSize: 9,
                fontWeight: i === 0 ? 700 : 500,
                flexShrink: 0,
                background: i === 0 ? (isBlue ? "white" : "#1e40af") : isBlue ? "rgba(255,255,255,0.1)" : "white",
                border: i === 0 ? "none" : isBlue ? "1px solid rgba(255,255,255,0.15)" : "1.5px solid #e2e8f0",
                color: i === 0 ? (isBlue ? "#1e40af" : "white") : isBlue ? "rgba(255,255,255,0.5)" : "#94a3b8",
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        <SectionLabel label="🍱 Meals" isBlue={isBlue} />
        {menuItems.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              background: isBlue ? "rgba(255,255,255,0.09)" : "white",
              border: isBlue ? "1px solid rgba(255,255,255,0.12)" : "1.5px solid #e8edf7",
              borderRadius: 12,
              padding: "8px 10px",
              marginBottom: 7,
              boxShadow: isBlue ? "none" : "0 1px 3px rgba(30,58,138,0.05)",
            }}
          >
            <IconWrap bg={isBlue ? "rgba(255,255,255,0.1)" : "#eff6ff"} color={isBlue ? "white" : "#1e40af"} size={36}>
              {item.icon}
            </IconWrap>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ color: isBlue ? "white" : "#0f1535", fontSize: 10, fontWeight: 600 }}>{item.name}</span>
                {item.badge && (
                  <span
                    style={{
                      fontSize: 7,
                      background: isBlue ? "rgba(255,255,255,0.18)" : "#eff6ff",
                      color: isBlue ? "white" : "#1e40af",
                      padding: "2px 6px",
                      borderRadius: 100,
                      border: isBlue ? "none" : "1px solid #bfdbfe",
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <p style={{ color: isBlue ? "rgba(255,255,255,0.4)" : "#94a3b8", fontSize: 8, marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {item.desc}
              </p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ color: isBlue ? "white" : "#0f1535", fontSize: 11, fontWeight: 600 }}>{item.price}</p>
              <AddBtn isBlue={isBlue} />
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 14,
          right: 14,
          background: isBlue ? "white" : "#1e40af",
          borderRadius: 14,
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 15,
          boxShadow: "0 4px 20px rgba(30,58,138,0.3)",
        }}
      >
        <div style={{ background: isBlue ? "#eff6ff" : "rgba(255,255,255,0.2)", borderRadius: 8, padding: "2px 7px" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: isBlue ? "#1e40af" : "white" }}>2 items</span>
        </div>
        <span style={{ fontSize: 10, fontWeight: 700, color: isBlue ? "#1e40af" : "white" }}>View Cart →</span>
        <span style={{ fontSize: 10, fontWeight: 700, color: isBlue ? "#1e40af" : "white" }}>₹155</span>
      </div>

      <BottomNav isBlue={isBlue} activeIndex={1} />
    </div>
  );
}

// ─── Screen 3: Cart ───────────────────────────────────────────────────────────
export function CartScreen({ isBlue, isIOS }: CartScreenProps) {
  const bg = isBlue ? "#1e3a8a" : "#f7f9ff";
  const cartItems = [
    { icon: <Soup size={14} />, name: "Veg Thali", price: "₹65", qty: 1 },
    { icon: <Coffee size={14} />, name: "Masala Chai", price: "₹15", qty: 2 },
    { icon: <Sandwich size={14} />, name: "Chole Bhature", price: "₹55", qty: 1 },
  ];
  const billRows = [
    { label: "Subtotal", val: "₹150", accent: false },
    { label: "Platform fee", val: "₹2", accent: false },
    { label: "Discount (CAMPUS10)", val: "−₹15", accent: true },
  ];

  return (
    <div style={{ width: "100%", height: "100%", background: bg, overflow: "hidden" }}>
      <StatusBar isBlue={isBlue} />
      <div style={{ padding: "14px 14px 0" }}>
        <BackHeader
          isBlue={isBlue}
          title="Your Cart"
          right={<span style={{ color: isBlue ? "rgba(255,255,255,0.35)" : "#94a3b8", fontSize: 9 }}>Main Canteen</span>}
        />

        {cartItems.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              background: isBlue ? "rgba(255,255,255,0.09)" : "white",
              border: isBlue ? "1px solid rgba(255,255,255,0.12)" : "1.5px solid #e8edf7",
              borderRadius: 12,
              padding: "8px 10px",
              marginBottom: 7,
              boxShadow: isBlue ? "none" : "0 1px 3px rgba(30,58,138,0.04)",
            }}
          >
            <IconWrap bg={isBlue ? "rgba(255,255,255,0.1)" : "#eff6ff"} color={isBlue ? "white" : "#1e40af"} size={32}>
              {item.icon}
            </IconWrap>
            <div style={{ flex: 1 }}>
              <p style={{ color: isBlue ? "white" : "#0f1535", fontSize: 10, fontWeight: 500 }}>{item.name}</p>
              <p style={{ color: isBlue ? "rgba(255,255,255,0.5)" : "#94a3b8", fontSize: 9, marginTop: 2 }}>{item.price}</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                background: isBlue ? "rgba(255,255,255,0.15)" : "#eff6ff",
                borderRadius: 8,
                padding: "3px 7px",
                flexShrink: 0,
              }}
            >
              <Minus size={12} color={isBlue ? "rgba(255,255,255,0.7)" : "#1e40af"} />
              <span style={{ color: isBlue ? "white" : "#0f1535", fontSize: 10, width: 12, textAlign: "center", fontWeight: 600 }}>
                {item.qty}
              </span>
              <Plus size={12} color={isBlue ? "rgba(255,255,255,0.7)" : "#1e40af"} />
            </div>
          </div>
        ))}

        <div
          style={{
            background: isBlue ? "rgba(255,255,255,0.09)" : "white",
            border: isBlue ? "1px solid rgba(255,255,255,0.14)" : "1.5px solid #e2e8f0",
            borderRadius: 12,
            padding: "10px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 9,
            boxShadow: isBlue ? "none" : "0 1px 3px rgba(30,58,138,0.04)",
          }}
        >
          <div>
            <p style={{ color: isBlue ? "rgba(255,255,255,0.4)" : "#94a3b8", fontSize: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Pickup Slot
            </p>
            <p style={{ color: isBlue ? "white" : "#0f1535", fontSize: 10, fontWeight: 600, marginTop: 2 }}>
              <Clock3 size={10} style={{ display: "inline", marginRight: 4 }} />
              12:30 PM – 12:45 PM
            </p>
          </div>
          <span style={{ color: isBlue ? "rgba(255,255,255,0.7)" : "#1e40af", fontSize: 9, fontWeight: 600 }}>Change</span>
        </div>

        <div
          style={{
            background: isBlue ? "rgba(255,255,255,0.08)" : "white",
            border: isBlue ? "1px solid rgba(255,255,255,0.12)" : "1.5px solid #e8edf7",
            borderRadius: 12,
            padding: "10px 12px",
            boxShadow: isBlue ? "none" : "0 1px 3px rgba(30,58,138,0.04)",
          }}
        >
          <SectionLabel label="Bill Summary" isBlue={isBlue} />
          {billRows.map((row) => (
            <div key={row.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ color: isBlue ? "rgba(255,255,255,0.4)" : "#94a3b8", fontSize: 9 }}>{row.label}</span>
              <span style={{ color: row.accent ? (isBlue ? "#93c5fd" : "#1e40af") : isBlue ? "rgba(255,255,255,0.6)" : "#475569", fontSize: 9, fontWeight: row.accent ? 600 : 400 }}>
                {row.val}
              </span>
            </div>
          ))}
          <div style={{ borderTop: isBlue ? "1px solid rgba(255,255,255,0.12)" : "1px solid #e8edf7", marginTop: 6, paddingTop: 6, display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: isBlue ? "white" : "#0f1535", fontSize: 11, fontWeight: 700 }}>Total</span>
            <span style={{ color: isBlue ? "white" : "#0f1535", fontSize: 11, fontWeight: 700 }}>₹137</span>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: isIOS ? 60 : 88,
          left: 14,
          right: 14,
          background: isBlue ? "white" : "#1e40af",
          borderRadius: 14,
          padding: 12,
          textAlign: "center",
          zIndex: 15,
          color: isBlue ? "#1e40af" : "white",
          fontSize: 12,
          fontWeight: 700,
          boxShadow: "0 4px 16px rgba(30,58,138,0.3)",
        }}
      >
        Pay ₹137 via UPI
      </div>

      <BottomNav isBlue={isBlue} activeIndex={2} />
    </div>
  );
}

// ─── Screen 4: Tracking ───────────────────────────────────────────────────────
export function TrackingScreen({ isBlue }: ScreenProps) {
  const bg = isBlue ? "#1e3a8a" : "#f7f9ff";
  const steps = [
    { label: "Order Placed", sub: "12:14 PM", status: "done" },
    { label: "Being Prepared", sub: "In progress...", status: "active" },
    { label: "Ready for Pickup", sub: "~12:30 PM", status: "pending" },
    { label: "Picked Up", sub: "Show QR at counter", status: "pending" },
  ];

  return (
    <div style={{ width: "100%", height: "100%", background: bg, overflow: "hidden" }}>
      <StatusBar isBlue={isBlue} />
      <div style={{ padding: "14px 14px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <p style={{ color: isBlue ? "rgba(255,255,255,0.4)" : "#94a3b8", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Order #C-4821
          </p>
          <p style={{ fontFamily: "'Syne', sans-serif", color: isBlue ? "white" : "#0f1535", fontSize: 15, fontWeight: 800, marginTop: 4 }}>
            Being Prepared 🍳
          </p>
          <p style={{ color: isBlue ? "rgba(255,255,255,0.5)" : "#64748b", fontSize: 9, marginTop: 3 }}>
            Ready in <b style={{ color: isBlue ? "#93c5fd" : "#1e40af" }}>8 minutes</b>
          </p>
        </div>

        <div style={{ position: "relative", marginBottom: 14 }}>
          <div style={{ position: "absolute", left: 17, top: 18, bottom: 18, width: 2, background: isBlue ? "rgba(255,255,255,0.12)" : "#e2e8f0" }} />
          <div style={{ position: "absolute", left: 17, top: 18, width: 2, height: "52%", background: isBlue ? "white" : "#1e40af" }} />

          {steps.map((step) => (
            <div key={step.label} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 13, position: "relative" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  zIndex: 5,
                  background:
                    step.status === "done"
                      ? isBlue
                        ? "white"
                        : "#1e40af"
                      : step.status === "active"
                        ? isBlue
                          ? "rgba(255,255,255,0.15)"
                          : "#eff6ff"
                        : isBlue
                          ? "rgba(255,255,255,0.08)"
                          : "white",
                  border:
                    step.status === "done"
                      ? "none"
                      : step.status === "active"
                        ? `2px solid ${isBlue ? "white" : "#1e40af"}`
                        : `2px solid ${isBlue ? "rgba(255,255,255,0.18)" : "#e2e8f0"}`,
                }}
              >
                {step.status === "done" && <Check size={12} strokeWidth={2.5} color={isBlue ? "#1e40af" : "white"} />}
                {step.status === "active" && <Circle size={8} fill={isBlue ? "white" : "#1e40af"} color={isBlue ? "white" : "#1e40af"} />}
                {step.status === "pending" && <Circle size={8} color={isBlue ? "rgba(255,255,255,0.25)" : "#cbd5e1"} />}
              </div>
              <div style={{ paddingTop: 4 }}>
                <p
                  style={{
                    color: step.status === "pending" ? (isBlue ? "rgba(255,255,255,0.35)" : "#94a3b8") : isBlue ? "white" : "#0f1535",
                    fontSize: 10,
                    fontWeight: step.status === "pending" ? 400 : 600,
                  }}
                >
                  {step.label}
                </p>
                <p
                  style={{
                    fontSize: 8,
                    marginTop: 2,
                    color: step.status === "active" ? (isBlue ? "#93c5fd" : "#1e40af") : isBlue ? "rgba(255,255,255,0.3)" : "#94a3b8",
                    fontWeight: step.status === "active" ? 600 : 400,
                  }}
                >
                  {step.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: isBlue ? "rgba(255,255,255,0.1)" : "white",
            border: isBlue ? "1px solid rgba(255,255,255,0.16)" : "1.5px solid #e2e8f0",
            borderRadius: 14,
            padding: 10,
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 8,
            boxShadow: isBlue ? "none" : "0 2px 8px rgba(30,58,138,0.07)",
          }}
        >
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <QrCode size={28} color="#1e3a8a" />
          </div>
          <div>
            <p style={{ color: isBlue ? "white" : "#0f1535", fontSize: 10, fontWeight: 600 }}>Show QR at counter</p>
            <p style={{ color: isBlue ? "rgba(255,255,255,0.4)" : "#94a3b8", fontSize: 8, marginTop: 2 }}>Scan to confirm · Order #C-4821</p>
          </div>
        </div>

        <div
          style={{
            background: isBlue ? "rgba(255,255,255,0.09)" : "white",
            border: isBlue ? "1px solid rgba(255,255,255,0.14)" : "1.5px solid #e2e8f0",
            borderRadius: 10,
            padding: "7px 12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: isBlue ? "none" : "0 1px 3px rgba(30,58,138,0.04)",
          }}
        >
          <span style={{ color: isBlue ? "rgba(255,255,255,0.4)" : "#94a3b8", fontSize: 9 }}>Veg Thali, Chai ×2, Chole</span>
          <span style={{ color: isBlue ? "white" : "#1e40af", fontSize: 10, fontWeight: 700 }}>₹137</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main PhoneMockup Component ───────────────────────────────────────────────
export default function PhoneMockup({
  device = "ios",
  theme = "white",
  screen = "dashboard",
  className = "",
}: PhoneMockupProps) {
  const isIOS = device === "ios";
  const isBlue = theme === "blue";

  const frameW = isIOS ? 260 : 252;
  const frameH = isIOS ? 540 : 530;
  const frameR = isIOS ? 50 : 28;

  const frameBg = isBlue ? "#1e3a8a" : "white";
  const frameBorder = isBlue ? "#0f1535" : "#1a1a2e";
  const borderW = isIOS ? 6 : 5;

  return (
    <div className={`relative inline-block ${className}`} style={{ width: frameW, height: frameH }}>
      <div
        style={{
          width: frameW,
          height: frameH,
          borderRadius: frameR,
          background: frameBg,
          border: `${borderW}px solid ${frameBorder}`,
          boxShadow: "0 24px 60px rgba(10,20,80,0.18), 0 4px 12px rgba(10,20,80,0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {isIOS && (
          <div
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 90,
              height: 30,
              background: "#0f1535",
              borderRadius: 20,
              zIndex: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#1a1a2e" }} />
          </div>
        )}

        {!isIOS && (
          <div
            style={{
              position: "absolute",
              top: 12,
              left: "50%",
              transform: "translateX(-50%)",
              width: 14,
              height: 14,
              background: "#0f1535",
              borderRadius: "50%",
              border: "2px solid rgba(0,0,0,0.4)",
              zIndex: 20,
            }}
          />
        )}

        {isIOS && (
          <>
            <div style={{ position: "absolute", right: -9, top: 100, width: 5, height: 70, background: frameBorder, borderRadius: "0 4px 4px 0" }} />
            <div style={{ position: "absolute", left: -9, top: 90, width: 5, height: 36, background: frameBorder, borderRadius: "4px 0 0 4px" }} />
            <div style={{ position: "absolute", left: -9, top: 140, width: 5, height: 50, background: frameBorder, borderRadius: "4px 0 0 4px" }} />
            <div style={{ position: "absolute", left: -9, top: 202, width: 5, height: 50, background: frameBorder, borderRadius: "4px 0 0 4px" }} />
          </>
        )}

        {!isIOS && (
          <>
            <div style={{ position: "absolute", right: -8, top: 110, width: 4, height: 60, background: frameBorder, borderRadius: "0 3px 3px 0" }} />
            <div style={{ position: "absolute", left: -8, top: 110, width: 4, height: 60, background: frameBorder, borderRadius: "3px 0 0 3px" }} />
          </>
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            zIndex: 10,
            borderRadius: isIOS ? 44 : 23,
            bottom: isIOS ? 0 : 36,
          }}
        >
          {screen === "dashboard" && <DashboardScreen isBlue={isBlue} />}
          {screen === "menu" && <MenuScreen isBlue={isBlue} />}
          {screen === "cart" && <CartScreen isBlue={isBlue} isIOS={isIOS} />}
          {screen === "tracking" && <TrackingScreen isBlue={isBlue} />}
        </div>

        {!isIOS && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 36,
              background: isBlue ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.06)",
              borderRadius: "0 0 23px 23px",
              zIndex: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 28,
            }}
          >
            <ChevronLeft size={16} strokeWidth={2} color={isBlue ? "rgba(255,255,255,0.5)" : "#64748b"} />
            <Circle size={16} strokeWidth={2} color={isBlue ? "rgba(255,255,255,0.5)" : "#64748b"} />
            <LayoutGrid size={14} strokeWidth={2} color={isBlue ? "rgba(255,255,255,0.5)" : "#64748b"} />
          </div>
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 45%)",
            pointerEvents: "none",
            borderRadius: isIOS ? 44 : 23,
            zIndex: 30,
          }}
        />

        {isIOS && (
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 100,
              height: 5,
              zIndex: 20,
              background: isBlue ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)",
              borderRadius: 3,
            }}
          />
        )}
      </div>
    </div>
  );
}