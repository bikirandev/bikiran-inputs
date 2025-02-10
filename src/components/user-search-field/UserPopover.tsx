import { FC } from "react";
import { TState } from "../../lib/types/InputType";

const UserInformation: FC<{
  data: any[];
  setSelectedUser: TState<any>;
}> = ({ data, setSelectedUser }) => {
  return (
    <div className="flex flex-col justify-between items-start py-2 px-3 gap-3 overflow-y-auto">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-[14px] hover:bg-secondary-100 px-1 py-3  rounded-8 cursor-pointer w-full"
          onClick={() => setSelectedUser(item)}
        >
          <div className="size-9 flex-shrink-0">
            <img src={item?.photoUrl} alt="" className="rounded-full" />
          </div>

          <div className="flex flex-col">
            <div className="text-primary text-base font-medium ">
              {item?.displayName}
            </div>
            <div className="text-primary-700 text-sm font-normal">
              {item?.email}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const UserPopover = ({
  data,
  show,
  setSelectedUser,
  loading,
}: {
  data: any[];
  show: boolean;
  setSelectedUser: TState<any>;
  loading: boolean;
}) => {
  return (
    <div
      className={`w-full h-auto bg-white shadow-lg rounded-15 transition-[max-height] duration-300 ${
        show ? "max-h-[500px] border border-primary-100" : "max-h-0"
      }`}
    >
      {/* {loading && <UserSkeletonComp />} */}
      {!loading && data.length > 0 && (
        <div className={show ? "block" : "hidden"}>
          <UserInformation data={data} setSelectedUser={setSelectedUser} />
        </div>
      )}
      {!loading && data.length === 0 && (
        <div className={`py-6 px-3 text-center ${show ? "block" : "hidden"}`}>
          No User Found
        </div>
      )}
    </div>
  );
};

export default UserPopover;
