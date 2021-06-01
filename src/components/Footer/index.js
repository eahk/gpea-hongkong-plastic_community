import React, { useState, useEffect } from "react";
//
import "./index.scss";
import ExternalLink from "../ExternalLink";
import Social from "../Social";
//
import Logo from "../../assets/images/GP-logo-2019-TC-white-[web]-01.png";

const footerLinks = [
  {
    name: "主頁",
    url: "https://www.greenpeace.org/hongkong/"
  },
  {
    name: "私隱政策與個人資料收集聲明",
    url: "https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/"
  },
  {
    name: "版權",
    url: "https://www.greenpeace.org/hongkong/policies/terms-and-conditions/"
  },
  {
    name: "聯絡我們",
    url: "https://www.greenpeace.org/hongkong/about/contact/"
  },
  {
    name: "關於綠色和平",
    url: "https://www.greenpeace.org/hongkong/about/overview/"
  }
];
//

export default props => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="columns-wrapper">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="footer__logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="footer__note">
                <p>
                  綠色和平是獨立的國際環保組織，通過科學研究、政策倡議及和平行動，揭露全球環境問題並提出相應解決方案。
                  我們從不接受任何政府、企業或政治團體的資助，只接受個人的直接捐款，以維持公正獨立。
                </p>
              </div>
              <div className="footer__link">
                <ul className="links">
                  {footerLinks.map((link, key) => (
                    <ExternalLink key={key} href={link.url} alt={link.name}>
                      {link.name}
                    </ExternalLink>
                  ))}
                </ul>
              </div>
              <Social />
              <p>
                <small className="credit">
                  © GREENPEACE {new Date().getFullYear()}
                </small>
              </p>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="footer_remarks">
                <p>
                  <strong>注意事項</strong>
                </p>
                <p>
                  此捐款頁面採用了 SSL
                  保安接層加密技術，可確保敏感資料（例如信用卡資料和個人資料）在您的瀏覽器和我們伺服器之間傳送時獲得保密處理。
                </p>
                <hr />
                <p>
                  您的個人資料將絕對保密，僅用做捐款、會員服務及通訊等用途，請
                  <ExternalLink
                    href="https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/"
                    alt="隱私保護政策"
                  >
                    按此
                  </ExternalLink>
                  詳閱隱私保護政策。
                </p>
                <hr />
                <p>
                  信用卡捐款會即時進行首次過數。每月捐款會員往後約於每月13日過數。如出現捐款失效的情況，有機會是系統連結上的間斷，因此系統將自動重新嘗試，如有需要，我們的會員服務部將與您聯繫確認。每月捐款授權於該信用卡有效期過後及獲發新卡後仍繼續生效，直至閣下另行通知。
                </p>
                <p>
                  捐款港幣$100以上可申請扣稅。我們於每年3月31日財政年度完結時準備年度收據，並於4月至5月發送給每月捐款會員。如捐款屬於單次捐款，而捐款者於捐款時能夠提供有效的電郵地址，將會即時收到電子收據；沒有提供有效電郵地址者，將於捐款後6星期內收到我們發送的單次捐款收據。
                </p>
                <hr />
                <p>獲豁免繳稅慈善機構編號︰91/5418</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
