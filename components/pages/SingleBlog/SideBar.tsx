import React from 'react';
import Link from "next/link";
import Image from "next/image";

export interface SideBarProps {
  avatar: string;
  url: string;
  name: string;
  social_icon: string;
  description: string;
  banner: string;
}

const SideBar = ({avatar, url, name, social_icon, description, banner}: SideBarProps) => {
  return (
    <div className="single-post-sidebar">
      {name ? <div className="author-block">
          <div className="avatar-block">
            {avatar && (<div className="img">
              <Image width={300} height={300}  alt={name} src={avatar}/>
            </div>)}
          </div>
          <div className="link-block">
            {name && (
              <div className="link">
                <Link href={url || '#'}>{name || ''}</Link>
              </div>)}
            {social_icon &&
              (<div className="img">
                <Image width={300} height={300} alt={name} src={social_icon}/>
              </div>)}
          </div>
          {description && <div className="content-block" dangerouslySetInnerHTML={{__html: description}}></div>}
        </div>
        : null}
      {banner && <div className="banner-block">
          <div dangerouslySetInnerHTML={{__html: banner}}></div>
      </div>}
    </div>
  );
};

export default SideBar;