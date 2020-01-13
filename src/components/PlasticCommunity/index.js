import React from "react";
//
import "./index.scss";
//
import { ReactComponent as CommunityMap } from "../../assets/images/plasticCommunity.svg";
//
const districts = [
  { id: "Islands", name: "港島" },
  { id: "Kwai Tsing", name: "葵青" },
  { id: "North", name: "北" },
  { id: "Sai Kung", name: "西貢" },
  { id: "Sha Tin", name: "沙田" },
  { id: "Tai Po", name: "大埔" },
  { id: "Tsuen Wan", name: "荃灣" },
  { id: "Tuen Mun", name: "屯門" },
  { id: "Yuen Long", name: "元朗" },
  { id: "Kowloon City", name: "九龍城" },
  { id: "Kwun Tong", name: "觀塘" },
  { id: "Sham Shui Po", name: "深水埗" },
  { id: "Wong Tai Sin", name: "黃大仙" },
  { id: "Yau Tsim Mong", name: "油尖旺" },
  { id: "Central & Western", name: "中西" },
  { id: "Eastern", name: "東" },
  { id: "Southern", name: "南" },
  { id: "Wan Chai", name: "灣仔" }
];
//
export default props => {
  return (
    <section className="section is-light">
      <CommunityMap id="community-map" />
    </section>
  );
};
//
/*
export default props => {
  return (
    <div className='container'>
      <section className='section'>
        <h2 className='title'>Plastic Community Section</h2>
        <article className='media'>
          <figure className='media-left'>
            <p className='image is-64x64'>
              <img
                alt='.'
                src='https://bulma.io/images/placeholders/128x128.png'
              />
            </p>
          </figure>
          <div className='media-content'>
            <div className='content'>
              <p>
                <strong>Barbara Middleton</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porta eros lacus, nec ultricies elit blandit non. Suspendisse
                pellentesque mauris sit amet dolor blandit rutrum. Nunc in
                tempus turpis.
                <br />
                <small>
                  <a href='/#'>Like</a> · <a href='/#'>Reply</a> · 3 hrs
                </small>
              </p>
            </div>

            <article className='media'>
              <figure className='media-left'>
                <p className='image is-48x48'>
                  <img
                    alt='.'
                    src='https://bulma.io/images/placeholders/96x96.png'
                  />
                </p>
              </figure>
              <div className='media-content'>
                <div className='content'>
                  <p>
                    <strong>Sean Brown</strong>
                    <br />
                    Donec sollicitudin urna eget eros malesuada sagittis.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam blandit nisl a
                    nulla sagittis, a lobortis leo feugiat.
                    <br />
                    <small>
                      <a href='/#'>Like</a> · <a href='/#'>Reply</a> · 2 hrs
                    </small>
                  </p>
                </div>

                <article className='media'>
                  Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi
                  eu lorem cursus ullamcorper sit amet nec massa.
                </article>

                <article className='media'>
                  Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                  Praesent malesuada metus sed pharetra euismod. Cras tellus
                  odio, tincidunt iaculis diam non, porta aliquet tortor.
                </article>
              </div>
            </article>

            <article className='media'>
              <figure className='media-left'>
                <p className='image is-48x48'>
                  <img
                    alt='.'
                    src='https://bulma.io/images/placeholders/96x96.png'
                  />
                </p>
              </figure>
              <div className='media-content'>
                <div className='content'>
                  <p>
                    <strong>Kayli Eunice </strong>
                    <br />
                    Sed convallis scelerisque mauris, non pulvinar nunc mattis
                    vel. Maecenas varius felis sit amet magna vestibulum euismod
                    malesuada cursus libero. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae;
                    Phasellus lacinia non nisl id feugiat.
                    <br />
                    <small>
                      <a href='/#'>Like</a> · <a href='/#'>Reply</a> · 2 hrs
                    </small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>
        <article className='media'>
          <figure className='media-left'>
            <p className='image is-64x64'>
              <img
                alt='.'
                src='https://bulma.io/images/placeholders/128x128.png'
              />
            </p>
          </figure>
          <div className='media-content'>
            <div className='field'>
              <p className='control'>
                <textarea
                  className='textarea'
                  placeholder='Add a comment...'
                ></textarea>
              </p>
            </div>
            <div className='field'>
              <p className='control'>
                <button className='button'>Post comment</button>
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
*/
