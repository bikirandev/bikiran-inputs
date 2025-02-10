"use client";

import { FC, useEffect } from "react";
import UserPopover from "./UserPopover";
import UserDetailsComp from "./UserDetailsComp";
import UserSkeletonComp from "./UserSkeletonComp";
import AnimateInputField from "../animated-input-field/AnimatedInputField";
import { TInputChangeEvent, TState } from "../../lib/types/InputType";

type TProps = {
  selectedUser: any;
  setSelectedUser: TState<any>;
  label: string;
  formData: any;
  setFormData: TState<any>;
  setDebouncedValue: (value: string) => void;
  userData: any[];
  loading: boolean;
};

const UserSearchField: FC<TProps> = ({
  selectedUser,
  setSelectedUser,
  label,
  formData,
  setFormData,
  setDebouncedValue,
  userData,
  loading,
}) => {
  const handleOnChange = (ev: TInputChangeEvent) => {
    const { name, value } = ev.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "user") {
      setDebouncedValue(value); // Update the debounced input value
    }
  };

  useEffect(() => {
    // Clear the search field if a user is selected
    if (selectedUser) {
      setFormData({
        ...formData,
        user: "",
      });
    }
  }, [selectedUser]);

  return (
    <div>
      <div className="relative mt-3">
        <AnimateInputField
          formData={formData}
          label={label}
          name="user"
          placeholder="Type Name..."
          autoComplete="off"
          onChange={handleOnChange}
          className=""
        />
        <div className="absolute top-20 w-full z-10">
          <UserPopover
            data={userData}
            show={formData?.["user"]?.length > 2 && userData.length > 0}
            setSelectedUser={setSelectedUser}
            loading={loading}
          />
        </div>
      </div>
      {selectedUser ? (
        <div className="flex justify-between items-center">
          <UserDetailsComp data={selectedUser} />
          <div className="px-4">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.043 17.4318L11.393 22.5401C11.6653 22.8663 12.0252 23.1108 12.4288 23.2428C13.025 23.4303 13.85 23.4175 14.558 22.4073L24.2743 7.25805C24.3463 7.1463 24.4018 7.02405 24.4385 6.89805C24.5825 6.40305 24.5518 5.3163 23.4733 5.75055C23.174 5.8728 22.9093 6.0693 22.706 6.3198L13.5485 17.3403C13.1975 17.7633 12.5705 17.8211 12.1468 17.4701C12.107 17.4378 12.0695 17.4018 12.035 17.3621L9.9905 15.0386C9.5765 14.5556 8.98325 14.2623 8.348 14.2226C7.66175 14.1941 6.869 14.3958 6.57875 15.3971C6.38375 16.1118 6.557 16.8731 7.043 17.4318Z"
                fill="#17D6A8"
              />
            </svg>
          </div>
        </div>
      ) : (
        <UserSkeletonComp />
      )}
    </div>
  );
};

export default UserSearchField;
