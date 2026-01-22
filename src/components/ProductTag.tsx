import { Crown, Sparkles, Zap, Clock, Flame } from "lucide-react";

export type TagType = "bestseller" | "chefSpecial" | "topPick" | "new" | "limited";

interface ProductTagProps {
  type: TagType;
  className?: string;
}

const tagConfig: Record<TagType, {
  label: string;
  icon: React.ReactNode;
  gradient: string;
  textColor: string;
}> = {
  bestseller: {
    label: "BESTSELLER",
    icon: <Crown size={12} className="fill-current" />,
    gradient: "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400",
    textColor: "text-amber-900",
  },
  chefSpecial: {
    label: "CHEF'S SPECIAL",
    icon: <Sparkles size={12} className="fill-current" />,
    gradient: "bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400",
    textColor: "text-emerald-900",
  },
  topPick: {
    label: "TOP PICK",
    icon: <Zap size={12} className="fill-current" />,
    gradient: "bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400",
    textColor: "text-violet-900",
  },
  new: {
    label: "NEW",
    icon: <Clock size={12} className="fill-current" />,
    gradient: "bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400",
    textColor: "text-sky-900",
  },
  limited: {
    label: "LIMITED EDITION",
    icon: <Flame size={12} className="fill-current" />,
    gradient: "bg-gradient-to-r from-rose-400 via-red-300 to-rose-400",
    textColor: "text-rose-900",
  },
};

export const ProductTag = ({ type, className = "" }: ProductTagProps) => {
  const config = tagConfig[type];

  return (
    <div
      className={`
        absolute top-3 left-3 z-10
        px-3 py-1.5
        rounded-full
        ${config.gradient}
        ${config.textColor}
        flex items-center gap-1.5
        text-[10px] font-bold tracking-wide
        shadow-lg shadow-black/20
        backdrop-blur-sm
        border border-white/30
        ${className}
      `}
    >
      {config.icon}
      <span>{config.label}</span>
    </div>
  );
};
