import { useMemo } from "react";
import PropTypes from "prop-types";

const PromotionLayout = ({ className = "", propPadding }) => {
  const promotionLayoutStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`w-[31.25rem] rounded-xl bg-gray flex flex-col items-start justify-start pt-[2.875rem] pb-[11.312rem] pr-[1.25rem] pl-[4.75rem] box-border gap-[2.375rem] max-w-full z-[2] text-left text-[2.25rem] text-white font-lakki-reddy mq900:gap-[1.188rem] mq900:pl-[2.375rem] mq900:pt-[1.875rem] mq900:pb-[7.375rem] mq900:box-border ${className}`}
      style={promotionLayoutStyle}
    >
      <div className="w-[31.25rem] h-[45.938rem] relative rounded-xl bg-gray hidden max-w-full" />
      <div className="w-[21.875rem] h-[21.875rem] relative rounded-xl bg-gainsboro-100 max-w-full z-[3]" />
      <div className="w-[24.188rem] relative inline-block max-w-full z-[3] mq450:text-[1.375rem] mq900:text-[1.813rem]">
        Producto en promoción con descripción 2
      </div>
    </div>
  );
};

PromotionLayout.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default PromotionLayout;