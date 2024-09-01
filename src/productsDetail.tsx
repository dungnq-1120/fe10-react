import { memo } from "react";

export const ProductDetail = memo(function ProductDetail({
  state,
  renderA,
}: {
  state: number;
  renderA: any;
}) {
  console.log("ProductDetail");

  return (
    <div>
      Products detail - {state}- {renderA()}
    </div>
  );
});
