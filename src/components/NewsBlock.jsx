import React from 'react';

export default NewsBlock = (props) => {
  return (
    <div className="news__block">
      <div >
        <NewsBlockHeader>
          <NewsBlockTitle>Сейчас в СМИ</NewsBlockTitle>
        </NewsBlockHeader>
        <NewsBlockContent>
          <NewsItem></NewsItem>
        </NewsBlockContent>
      </div>

      <NewsBlockSection>
        <NewsBlockHeader>
          <NewsBlockTitle>В Германии</NewsBlockTitle>
        </NewsBlockHeader>
        <NewsBlockContent>
          <NewsItem></NewsItem>
        </NewsBlockContent>
      </NewsBlockSection>

      <NewsBlockSection>
        <NewsBlockItem>
          <NewsBlockHeader>
            <NewsBlockTitle>Остальной мир</NewsBlockTitle>
          </NewsBlockHeader>
          <NewsBlockContent>
          <NewsItem></NewsItem>
        </NewsBlockContent>
        </NewsBlockItem>
      </NewsBlockSection>
    </div>
  );
};
