import RequiredImg from "@/assets/form/required.png";
import TipImg from "@/assets/form/tip.png";
import ArrowImg from "@/assets/form/arrow.png";
import { Tooltip } from "@mui/material";
import { classNames } from "@/utils/classNames";
export const FormLabel = ({
  children,
  required,
  extra = ()=>null,
  tooltip = null,
  icon = null,
  ...props
}) => {
  return (
    <div
      {...props}
      className="text-[14px] font-normal text-white mb-[12px] flex items-center justify-between"
    >
      <div className="flex items-center">
        {required && (
          <img
            src={RequiredImg}
            className="w-[14px] h-[14px] mr-[4px]"
            alt=""
          />
        )}
        {icon && <div className="mr-[8px]">{icon}</div>}
        <div>{children}</div>
        {!required && <div className="text-[#FFFFFF66] ml-[8px]">(Optional)</div>}
        {tooltip && (
          <div className=" ml-[4px]">
            <Tooltip
              slotProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "#232B2BCC",
                    color: "white",
                    border: "1px solid #FFFFFF1A !important",
                    fontSize: "12px",
                    borderRadius: "10px",
                    padding: "16px",
                    lineHeight: "19.2px",
                  },
                },
              }}
              slots={{
                arrow: (props, e) => {
                  return <img className={classNames(props.className, " absolute top-[50%] translate-y-[-50%]")} src={ArrowImg}></img>;
                },
              }}
              title={<div className="text-[12px] text-[#fff] ">{tooltip}</div>}
              placement="right"
              arrow
            >
              <img
                src={TipImg}
                className="w-[14px] h-[14px] mr-[4px] cursor-pointer"
              />
            </Tooltip>
          </div>
        )}
      </div>
      {extra && extra?.()}
    </div>
  );
};
