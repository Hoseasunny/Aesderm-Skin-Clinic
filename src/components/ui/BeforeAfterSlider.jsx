import { useState } from "react";
import { makePlaceholder } from "../../lib/placeholders.js";

const beforeDefault = makePlaceholder("Before", 800, 500);
const afterDefault = makePlaceholder("After", 800, 500);

export default function BeforeAfterSlider({
  beforeImage = beforeDefault,
  afterImage = afterDefault,
}) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-rose/40 shadow-soft">
      <img
        src={beforeImage}
        alt="Before treatment"
        className="h-64 w-full object-cover md:h-80"
        loading="lazy"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${value}%` }}
      >
        <img
          src={afterImage}
          alt="After treatment"
          className="h-64 w-full object-cover md:h-80"
          loading="lazy"
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="absolute bottom-6 left-1/2 w-3/4 -translate-x-1/2 accent-gold"
        aria-label="Before and after comparison slider"
      />
    </div>
  );
}
