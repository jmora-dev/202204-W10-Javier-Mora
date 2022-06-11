export const enum BUTTON_VARIANTS {
  SUCCESS,
  DANGER,
}

export default function GentlemanCardButton({
  action,
  variant,
}: {
  action(): void;
  variant: BUTTON_VARIANTS;
}) {
  const variantClass = (variant: BUTTON_VARIANTS): string => {
    switch (variant) {
      case BUTTON_VARIANTS.SUCCESS:
        return " fas fa-check";
      case BUTTON_VARIANTS.DANGER:
        return " gentleman__icon--delete fas fa-times";
      default:
        return "";
    }
  };

  return (
    <i
      className={"icon gentleman__icon" + variantClass(variant)}
      onClick={action}
    />
  );
}
