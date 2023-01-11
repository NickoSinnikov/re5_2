import React from 'react';
import { newsArray, logoURL, newsTitleArray } from './news';
import NewsItem from './NewsItem';
import Link from './Link';
import Logo from './Logo';
import NewsList from './NewsList';

export default function NewsBlock(props) {
  return (
    <div className="news__block">
      <NewsList className="title__list" items={newsTitleArray}>
        {(items) =>
          items.map((item, index) => (
            <NewsItem key={Math.random()} className="title__item">
              <Link className="news__link" href="/">
                {item}
              </Link>
            </NewsItem>
          ))
        }
      </NewsList>
      <NewsList items={newsArray} className="content__list">
        {(items) =>
          items.map((item, index) => (
            <NewsItem key={Math.random()} className="news__item">
              <Link className="news__link" href="/">
                {item}
              </Link>
            </NewsItem>
          ))
        }
      </NewsList>
    </div>
  );
}
