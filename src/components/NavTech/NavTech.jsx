import React, { useState } from "react";
import {
  NavContainerThi,
  NavContanier,
  NavContanierLogoMain,
  NavContanierLogoMainImg,
  NavContanierLogoMainSpan,
  NavContanierSec,
  NavHeader,
  NavHeaderSub,
  NavWrapper,
  NavrightEighth,
  NavrightFifth,
  NavrightFir,
  NavrightNinth,
  NavrightSec,
  NavrightSecSub,
  NavrightSecsSpan,
  NavrightSecsSpanIcon,
  NavrightSeventh,
  NavrightTenth,
  NavrightThi,
  NotBot,
  NotBotAt,
  NotCon,
  NotUl,
  NotWrap,
} from "./NavTech.elements";
import Logo from "../../assets/MedLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { persistor } from "../../redux/store";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/userRedux";
import { Button } from "../../globalStyles";

const NavTech = () => {
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();

  const toggleNotification = () => {
    setShowNotification((prevState) => !prevState);
  };

  const handleSignOut = () => {
    // Dispatch the signOut action
    dispatch(signOut());
    persistor.purge();
    // Optionally, you can also redirect the user to the home page or perform other clean-up tasks here
  };

  const Notification = () => {
    return (
      <NotWrap>
        <NotCon>
          <NotUl>
            <NotBot>
              <NotBotAt>توظيف</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/home"}>البحث عن وظيفة</NotBotAt>
            </NotBot>
            <hr />
            <NotBot>
              <NotBotAt to={"/home"}>التمريض</NotBotAt>
            </NotBot>
            <Button primary onClick={handleSignOut}>
              تسجيل الخروج
            </Button>
          </NotUl>
        </NotCon>
      </NotWrap>
    );
  };

  return (
    <>
      {showNotification && <Notification />}
      <NavHeader>
        <NavHeaderSub>
          <NavWrapper>
            <NavContanier>
              <NavContanierLogoMain>
                <NavContanierLogoMainSpan>
                  <Link to="/">
                    <NavContanierLogoMainImg
                      src="https://allmedicals.s3.eu-north-1.amazonaws.com/MedLogo.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiSDBGAiEA8JxRDTqomOsZeeHr4UtdD%2Bu16pAAN2wT30LkbWA2ta0CIQC55RXbFYviZnQML%2B%2BsqX0WadJrZy5bad8FHXyeWHIk9CrkAggnEAAaDDcwODkyMTkzMTc2OCIMAJz7SnwLSTnA4ni%2BKsECU5vu31WZIXPW0YrZzhAViGxtlpGWUTgkpRsDM4Nmsq1WJHN2kO0FTUNtch087Nn2r5wNv3%2BoPibiogym1q3RZdArwZnx1RO60ruJ%2B9J9slswq9yjUvlQ4QIKNq%2FbJDq94ZLDA%2F08IZccc9YlUQW%2BHbFILDzsig%2BuKTPkeR3a7HorgLYPd4ChN3p%2FrJp9MYTtXFoszh02Nz6VlTTgFWIk7KaBwUe%2BzhMqDuHOJjLvvtI%2F1GmeED8sqH%2Fg1kYuZ6kgC4xu2yWiUxUCvi9qskj3o44TKtusUXdIgRVX%2BtiyaFkCpY07KTqptSlbhfGKdKrQdwgNaVvNJSAWSDwjimAFqOeSDRpmJ%2Fv4JLFgPse3rewbQZ8gZlR%2BECPDaTNdpCZ5V%2BwUxp79kBTmZP6BCOJDRkmTKxDQO0ZCLuEYLSDX4oJbMLSt9qoGOrICTsQhVx7ZIGGn5ya%2FYg9lgIrKhJEecQZKZT6SzmlpxHqzf0BdWZePVKdpD913xAQMFVHOJG3XMNG5N3Vf1JD79EJQ7HguF42rqHcs%2Fr0kDFhAkf6j91xigMOJUO3M6K6McpFbBwbkBan9BFc3pXoqTM74Rr6YNn1OFlhMesXOqJYd1AXjGx96ahp2isk1hVXgfz0jbaaHRYhvyEqTQLyD0nb5cbgenhucv1s73yfpj3jk3%2FeJsBxviR2jhg%2FLa%2B9d0RwhUl3JwxaVcg7qbGZZmJh2I%2FGootpcp%2B7X7sy0sGeMGmgKUjHUKDZncQSnY5mzHVjGgHe%2FUOhtT72%2FW3NNfqpJVTP3Yu3Z5h2Y2x6t0PUU98KkTsspHZRyTig1pUsWFhAKWgkPmXcTYNqIY8SPkTPP&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231122T073042Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2KDYKG74OYSJBXEW%2F20231122%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=2b4b5c515c1fcbf2a1bab6ff5a3df55e2f340617c406ade8e9e4f35e8bc97399"
                      alt=""
                    />
                  </Link>
                </NavContanierLogoMainSpan>
              </NavContanierLogoMain>
            </NavContanier>
            <NavContanierSec></NavContanierSec>
            <NavContainerThi>
              <NavrightFir></NavrightFir>
              <NavrightThi></NavrightThi>
              <NavrightFifth></NavrightFifth>
              <Link to={"/signup"} onClick={handleSignOut}>
                <NavrightSec>
                  <NavrightSecSub>
                    <NavrightSecsSpan>
                      <NavrightSecsSpanIcon></NavrightSecsSpanIcon>
                    </NavrightSecsSpan>
                  </NavrightSecSub>
                </NavrightSec>
              </Link>
              <NavrightSeventh>
                <Link to={"/upload"}>
                  <Button>قدم الان</Button>
                </Link>
              </NavrightSeventh>
              <NavrightEighth></NavrightEighth>
              <NavrightNinth></NavrightNinth>
              <NavrightTenth>
                <NavrightSecSub>
                  <NavrightSecsSpan>
                    <NavrightSecsSpanIcon onClick={toggleNotification}>
                      <FontAwesomeIcon
                        icon={faBars}
                        style={{
                          color: "#808080",
                          fill: "currentcolor",
                          display: "block",
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                        }}
                      />
                    </NavrightSecsSpanIcon>
                  </NavrightSecsSpan>
                </NavrightSecSub>
              </NavrightTenth>
            </NavContainerThi>
          </NavWrapper>
        </NavHeaderSub>
      </NavHeader>
    </>
  );
};

export default NavTech;
