interface Step {
  num: number;
  label: string;
}

const steps: Step[] = [
  { num: 1, label: "Typ imprezy" },
  { num: 2, label: "Goście i termin" },
  { num: 3, label: "Jedzenie" },
  { num: 4, label: "Dekoracje" },
  { num: 5, label: "Szczegóły" },
  { num: 6, label: "Podsumowanie" },
];

interface Props {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

const ProgressIndicator = ({ currentStep, onStepClick }: Props) => (
  <div className="w-full">
    {/* Desktop: show all steps inline */}
    <div className="hidden sm:flex items-center justify-center gap-0">
      {steps.map((step, i) => {
        const isActive = step.num === currentStep;
        const isDone = step.num < currentStep;
        const isClickable = isDone && onStepClick;
        return (
          <div key={step.num} className="flex items-center">
            <button
              type="button"
              onClick={() => isClickable && onStepClick(step.num)}
              disabled={!isClickable}
              className={`flex items-center gap-1.5 ${isClickable ? "cursor-pointer" : "cursor-default"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/30"
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
            </button>
            {i < steps.length - 1 && (
              <div
                className={`w-8 h-px mx-2 transition-colors ${
                  isDone ? "bg-primary/40" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>

    {/* Mobile: show current step only */}
    <div className="flex sm:hidden items-center justify-center gap-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-primary text-primary-foreground shadow-md">
          {currentStep}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {steps.find(s => s.num === currentStep)?.label}
          </p>
          <p className="text-xs text-muted-foreground">
            Krok {currentStep} z {steps.length}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ProgressIndicator;
