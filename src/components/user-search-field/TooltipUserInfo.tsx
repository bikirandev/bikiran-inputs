// import React, { FC } from "react";
// import { TInvoiceUser } from "../../components/billing-invoice/InvoiceListTypes";
// import Image from "next/image";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "../../components/ui/tooltip";
// import {
//   Popover,
//   PopoverArrow,
//   PopoverContent,
//   PopoverTrigger,
// } from "../../components/ui/popover";

// type TProps = {
//   user: any;
// };

// const TooltipUserInfo: FC<TProps> = ({ user }) => {
//   return (
//     <Popover>
//       <PopoverTrigger>
//         <Image
//           src={user?.photoUrl || "---"}
//           alt="user"
//           width={0}
//           height={0}
//           sizes="100vh"
//           className="size-10 rounded-full"
//         />
//       </PopoverTrigger>
//       <PopoverContent
//         className="bg-white text-white size-full p-4"
//         align="center"
//         side="top"
//       >
//         {/* <PopoverArrow className="fill-primary-500 " /> */}
//         <div className="flex items-center justify-center gap-3">
//           <div className="flex-shrink-0">
//             <Image
//               src={user?.photoUrl || "---"}
//               alt="user"
//               width={0}
//               height={0}
//               sizes="100vh"
//               className="rounded-full size-10"
//             />
//           </div>
//           <div>
//             <div className="text-primary font-medium text-start">
//               {user.displayName}
//             </div>
//             <div className="text-primary-500">{user.email}</div>
//           </div>
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// };

// export default TooltipUserInfo;
