import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SocialPanel: React.FC = () => {
  const commonProps = {
    url: "https://github.com/captainrun",
    windowWidth: 560,
    windowHeight: 400,
  };
  const iconsProps = {
    size: 40,
    round: true,
  };
  //Here we would have to replace the url with the url of the production page,
  // we can use env variables with webpack if we would have a deployment
  return (
    <div className="grid grid-cols-4 place-items-center w-full mt-10">
      <div className="hover-scale-110">
        <FacebookShareButton {...commonProps} quote="Hi" hashtag="#Ubidots">
          <FacebookIcon {...iconsProps} />
        </FacebookShareButton>
      </div>
      <div className="hover-scale-110">
        <TwitterShareButton {...commonProps}>
          <TwitterIcon {...iconsProps} />
        </TwitterShareButton>
      </div>
      <div className="hover-scale-110">
        <TelegramShareButton {...commonProps}>
          <TelegramIcon {...iconsProps} />
        </TelegramShareButton>
      </div>
      <div className="hover-scale-110">
        <WhatsappShareButton {...commonProps}>
          <WhatsappIcon {...iconsProps} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default SocialPanel;
