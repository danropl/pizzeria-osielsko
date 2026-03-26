const steps = [
  { num: 1, label: "Typ imprezy" },
  { num: 2, label: "Goście i termin" },
  { num: 3, label: "Jedzenie" },
  { num: 4, label: "Dekoracje" },
  { num: 5, label: "Szczegóły" },
  { num: 6, label: "Podsumowanie" },
];

interface Props {
  currentStep: number;
}

const ProgressIndicator = ({ currentStep }: Props) => (
  <div className="w-full overflow-x-auto pb-2">
    <div className="flex items-center gap-1 min-w-max mx-auto justify-center">
      {steps.map((step, i) => {
        const isActive = step.num === currentStep;
        const isDone = step.num < currentStep;
        return (
          <div key={step.num} className="flex items-center">
            <div className="flex items-center gap-1.5">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : isDone
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {isDone ? "✓" : step.num}
              </div>
              <span
                className={`text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive ? "text-primary" : isDone ? "text-foreground/60" : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-6 h-px mx-1.5 transition-colors ${
                  isDone ? "bg-primary/40" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export default ProgressIndicator;
