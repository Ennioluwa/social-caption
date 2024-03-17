// import { CloseCircle, Icon } from "iconsax-react";
// import { Dispatch, SetStateAction, useRef, useState } from "react";

// const FunnelCard = ({
//   index,
//   setIndex,
//   title,
//   subtitle,
//   Icon,
//   funnelIndex,
// }: {
//   index: number;
//   setIndex: Dispatch<SetStateAction<number>>;
//   title: string;
//   subtitle: string;
//   Icon: Icon;
//   funnelIndex: number;
// }) => {
//   const isExpanded = index === funnelIndex;

//   const [contentHeight, setContentHeight] = useState<number>(0);
//   const contentRef = useRef<HTMLDivElement>(null);

//   const handleToggle = () => {
//     setIndex(funnelIndex);
//     if (contentRef.current) {
//       setContentHeight(isExpanded ? 0 : contentRef.current.scrollHeight);
//     }
//   };

//   return (
//     <div
//       onClick={handleToggle}
//       className="p-6 flex justify-between items-start gap-4 bg-[#151415] bg-opacity-65 rounded-lg cursor-pointer"
//     >
//       <Icon size={24} className="shrink-0" />
//       <div className="">
//         <h4 className="text-white">{title}</h4>
//         <div
//           className="overflow-hidden transition-all duration-500"
//           style={{ maxHeight: isExpanded ? `${contentHeight}px` : 0 }}
//           //   className={`overflow-hidden transition-all duration-500 ${
//           //     isExpanded ? "h-40" : "h-0"
//           //   }`}
//         >
//           <p className="text-white">{subtitle}</p>
//         </div>
//       </div>
//       <CloseCircle size={24} className="shrink-0" />
//     </div>
//   );
// };

// export default FunnelCard;

import { CloseCircle, Icon } from "iconsax-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const FunnelCard = ({
  index,
  setIndex,
  title,
  subtitle,
  Icon,
  funnelIndex,
}: {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  title: string;
  subtitle: string;
  Icon: Icon;
  funnelIndex: number;
}) => {
  const isExpanded = index === funnelIndex;
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const handleToggle = () => {
    setIndex(funnelIndex);
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  };

  useEffect(() => {
    contentRef.current &&
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setContentHeight(contentRef.current.scrollHeight);
      } else {
        setContentHeight(0);
      }
    }
  }, [isExpanded]);

  return (
    <div
      onClick={handleToggle}
      className=" p-6 flex justify-between items-start gap-4 bg-[#151415] bg-opacity-65 rounded-lg cursor-pointer"
    >
      <Icon size={24} className="shrink-0" />
      <div className="">
        <h4 className="text-white pb-4">{title}</h4>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: isExpanded ? `${contentHeight}px` : 0 }}
        >
          <div ref={contentRef} className="overflow-clip text-white">
            {subtitle}
          </div>
        </div>
      </div>
      <CloseCircle size={24} className="shrink-0" />
    </div>
  );
};

export default FunnelCard;
