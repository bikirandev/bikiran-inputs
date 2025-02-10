import { cn } from "../../lib/utils/cn";

const UserDetailsComp = ({
  data,
  className,
}: {
  data: any;
  className?: any;
}) => {
  return (
    <div className="flex flex-col justify-between items-start overflow-y-auto">
      <div
        className={cn(
          `flex items-center gap-[14px] py-3 px-3 w-full`,
          className
        )}
      >
        <div className="size-10 overflow-hidden">
          <img src={data?.photoUrl} alt="" className="rounded-full" />
        </div>

        <div className="flex flex-col">
          <div className="full-name text-primary text-start text-base font-medium">
            {data?.displayName}
          </div>
          <div className="full-name text-primary-700  text-start text-sm font-normal">
            {data?.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsComp;
