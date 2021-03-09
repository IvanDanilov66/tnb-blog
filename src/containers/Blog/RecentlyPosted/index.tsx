/* eslint-disable react/jsx-props-no-spreading */
import React, {FC} from 'react';
import Article from './Article';
import Slider from './Slider';
import './RecentlyPosted.scss';

interface ArticlesProps {
  articles: any[];
}
const sliderProps = {
  maxVisibleSlides: 5,
  pageTransition: 250,
  slideMargin: 1,
  zoomFactor: 2,
};

const RecentlyPosted: FC<ArticlesProps> = ({articles}) => {
  return (
    <div className="RecentlyPosted">
      <div className="RecentlyPosted__content-container">
        <h3 className="RecentlyPosted__header">Recently Posted</h3>
        <div className="RecentlyPosted__article">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <div>
            <Slider {...sliderProps}>
              {articles.map((article) => (
                <Article key={article} article={article} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyPosted;
