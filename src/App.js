import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
//a6e726e763184746b150e7a5f7607a31
//google ac
//12345rajeev
import NewsCards from './componenets/NewsCards/NewsCards';

import useStyles from './styles.js';

const alanKey='10938765269a2146df937d3cf42f0c0a2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

  const classes=useStyles();
  const [activeArticle, setActiveArticle] = useState(-1);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
 

    useEffect(() => {
        alanBtn({
            key:alanKey,
            onCommand:({command,articles,number})=>{
              if (command === 'newHeadlines') {
                setNewsArticles(articles);
                setActiveArticle(-1);
              } else if (command === 'instructions') {
                setIsOpen(true);
              } else if (command === 'highlight') {
                setActiveArticle((prevActiveArticle) => prevActiveArticle +1);
              } else if (command === 'open') {
                const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                const article = articles[parsedNumber - 1];
      
                if (parsedNumber > articles.length) {
                  alanBtn().playText('Please try that again...');
                } else if (article) {
                  window.open(article.url, '_blank');
                  alanBtn().playText('Opening...');
                } else {
                  alanBtn().playText('Please try that again...');
                }
              }
            },
          });
    }, []);
    //https://img.freepik.com/premium-vector/artificial-intelligence-logo-icon-concept_230610-568.jpg?w=2000
  return (
    <div>
      <div className={classes.logoContainer} >
      <img src="https://img.freepik.com/premium-vector/artificial-intelligence-logo-icon-concept_230610-568.jpg?w=2000" className={classes.alanLogo} alt="logo" />


      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
      
    </div>
  )
}

export default App
