import React from "react";
import "./Footer.scss";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function () {
  return (
    <>
      <div className="footer-bottom-row">
        <span>Copyright © 2020 </span>
        <Link href="mailto:uri.michaeli@prevent.ai" target="_blank" color="secondary">
          Contact Us
        </Link>
        <div className="footer-social-media">
          <Link href="https://www.instagram.com/preventai/" target="_blank" color="secondary">
            <TwitterIcon />
          </Link>
          <Link href="https://www.prevent.ai" target="_blank" color="secondary">
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
