import { useEffect, useState } from "react";
import { User } from "../../../entity/user";
import UserService from "../../../service/user";
import "./index.css";
import BG from "../../../assets/image/background.jpg";
import Avatar from "../../../assets/image/avatar.jpg";
import { Refresh } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";

export const ViewUser = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    setIsLoading(true);
    const theUser = await new UserService().getUser();
    setUser(theUser);
    setIsLoading(false);
  };

  return (
    <div>
      <div className="container">
        {isLoading ? (
          <h1 className="u-flex-center" style={{height:'100%'}}>
            <CircularProgress variant="indeterminate" />
          </h1>
        ) : (
          <div>
            <div className="header-container">
              <img src={BG} alt="" className="header-image" />
              <div className="header">
                <h1 className="main-heading">
                  {user?.title && `${user?.title}.`} {user?.firstName}{" "}
                  {user?.lastName}
                </h1>
              </div>
            </div>
            <div className="overlay-header"></div>
            <div className="body">
              <img
                src={user?.picture ? user?.picture : Avatar}
                alt="Hugh Jackman"
                className="body-image"
              />
              <Button
                onClick={getUserInfo}
                className="body-action-button u-flex-center"
              >
                <Refresh style={{ color: "white" }} />
              </Button>
              <span className="body-stats">
                Email <span>{user?.email}</span>
              </span>

              <div className="body-info"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
