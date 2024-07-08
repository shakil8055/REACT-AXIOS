import React from "react";
import { useContextBox } from "../ContextProvider";

const UserView = () => {
  const { view } = useContextBox();
  const {
    name,
    username,
    avatar,
    email,
    address,
    birthday,
    age,
    phoneNumber,
    website,
    company,
  } = view;

  return (
    <div className="container">
      <div className="row align-items-center flex-row-reverse">
        <div className="col-lg-6">
          <div className="about-text go-to">
            <h3 className="dark-color">About Me</h3>
            {console.log(view)}
            {address && <p>{company.about}</p>}
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Birthday</label>
                  <p>{birthday}</p>
                </div>
                {address.city && (
                  <>
                    <div className="media">
                      <label>Age</label>
                      <p>{age} Yr</p>
                    </div>
                  </>
                )}
                <div className="media">
                  <label>Address</label>
                  <p className="user-info">
                    {address.street} {address.suite} {address.city}-
                    {address.zipcode}
                  </p>
                </div>
                <div className="media">
                  <label>Company name</label>
                  <p>{company.name}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>{email}</p>
                </div>
                <div className="media">
                  <label>Website</label>
                  <p>{website}</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  {phoneNumber ? <p>{phoneNumber}</p> : "nill"}
                </div>
                <div className="media">
                  <label>Work Experience</label>
                  {company.experience ? <p>{company.experience} yr</p> : "0"}
                </div>
              </div>
            </div>
          </div>
        </div>
        {avatar ? (
          <div className="col-lg-4">
            <div className="about-avatar">
              <h1 className="dark-color">{username}</h1>
              <img src={avatar} width={"300px"} height={"400px"} alt="Avatar" />
            </div>
          </div>
        ) : (
          <div className="col-lg-5">
            <div className="about-avatar">
              <h1 className="dark-color">{username}</h1>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Default Avatar"
                width={"350px"}
                height={"350px"}
              />
            </div>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default UserView;