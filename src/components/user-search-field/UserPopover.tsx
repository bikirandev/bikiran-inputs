import { FC } from "react";
import { TState } from "../../lib/types/InputType";
import style from "./UserSearch.module.css";
import { cn } from "../../lib/utils/cn";

const UserInformation: FC<{
  data: any[];
  setSelectedUser: TState<any>;
}> = ({ data, setSelectedUser }) => {
  return (
    <div className={cn(style.userInfoContainer)}>
      {data.map((item) => (
        <div
          key={item.id}
          className={style.userWrapper}
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
      className={
        (style.popOverContainer, show ? style.popOverShow : style.popOverHide)
      }
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
