import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import Carousel from "components/shared/Carousel";
import useResizer from "hooks/useResizer";
import { ITeamMembersInfo } from "./interfaces";
import TeamMemberImage from "../../../../public/assets/images/png/team-member.png";

const MeetOurTeam = () => {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showFrom, setShowFrom] = useState(0);
  const { t } = useTranslation("about_page", {
    keyPrefix: "meet_our_team",
  });

  const handleWindowResize = () => {
    if (window.innerWidth <= 768) {
      setShowOne(true);
      setShowTwo(false);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      setShowOne(false);
      setShowTwo(true);
    } else {
      setShowOne(false);
      setShowTwo(false);
    }
  };

  useResizer(handleWindowResize);

  const teamMembersInfo: ITeamMembersInfo[] = t("team_members_info", {
    returnObjects: true,
  });

  const changeVisibleCards = (changeBy: number) => {
    setShowFrom((prevNum) => {
      const newValue = prevNum + changeBy;
      if (newValue === teamMembersInfo.length) return 0;
      if (newValue < 0) return teamMembersInfo.length - 1;
      return newValue;
    });
  };

  const forShowTwo = teamMembersInfo.slice(showFrom, 2 + showFrom);
  const forShowFour = teamMembersInfo.slice(showFrom, 4 + showFrom);

  const teamMembersToShow = showOne
    ? teamMembersInfo.slice(showFrom, 1 + showFrom)
    : showTwo
    ? forShowTwo.length > 1
      ? forShowTwo
      : [...forShowTwo, ...teamMembersInfo.slice(0, 1)]
    : forShowFour.length > 3
    ? forShowFour
    : [...forShowFour, ...teamMembersInfo.slice(0, 4 - forShowFour.length)];

  const content = teamMembersToShow.map((member) => {
    return (
      <div key={member.name} className="w-220-px mb-25">
        <div className="team-member">
          <Image src={TeamMemberImage} alt={member.name} />
          <h6 className="mt-15 mb-4">{member.name}</h6>
          <p className="text-sm mb-10">{member.position}</p>
          <p className="text-sm text-color-routing-path text-underline cursor-default mb-0">
            {member.mail}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section className="container m-auto mt-45 mt-50 mt-md-65 col-12 text-center">
      <h4 className="section-title mb-30">{t("title")}</h4>
      <Carousel
        content={content}
        showArrows={true}
        changeVisibleCards={changeVisibleCards}
      />
    </section>
  );
};

export default MeetOurTeam;
