interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

const ImagePlaceholder = ({ label, aspectRatio = "aspect-[4/3]", className = "" }: ImagePlaceholderProps) => (
  <div className={`${aspectRatio} w-full overflow-hidden rounded-3xl bg-bg-dark/50 border border-border/30 group ${className}`}>
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center transition-transform duration-500 group-hover:scale-105">
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <svg className="h-12 w-12 text-primary/40 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-sm font-body font-medium text-muted-foreground leading-relaxed max-w-[200px]">
        📸 {label}
      </p>
    </div>
  </div>
);

export default ImagePlaceholder;
