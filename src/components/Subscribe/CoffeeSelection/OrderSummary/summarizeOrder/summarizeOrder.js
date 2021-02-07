import {
  SummaryHighlighted
} from '../styled'

const summarizeOrder = (summary) => {
  let summarySentences = [];
  let capsulesSelected = false;
  Object.keys(summary).forEach(s => {
    // preferences - capsule/filter/espresso
    if (s === 'preference') {
      if (summary[s] === 'Capsule') {
        summarySentences.push(<span key={s}>I drink my coffee using <SummaryHighlighted>{summary[s] ? `${summary[s]}s` : '______'}</SummaryHighlighted>, </span>);
        capsulesSelected = true;
      } else {
        summarySentences.push(<span key={summary[s]}>I drink my coffee as <SummaryHighlighted>{summary[s] ? `${summary[s]}` : '______'}</SummaryHighlighted>, </span>)
        capsulesSelected = false;
      }
    }
    // type - single origin/decaf/blended
    if (s === 'type') {
      summarySentences.push(<span key={s}>with a <SummaryHighlighted>{summary[s] ? `${summary[s]}` : '______'}</SummaryHighlighted> type of bean. </span>)
    }
    // weight - 250g/500g/1000g
    if (s === 'weight') {
      summarySentences.push(<span key={s}><SummaryHighlighted>{summary[s] ? `${summary[s]}` : '______'}</SummaryHighlighted> </span>)
    }
    // grind - wholebean/filter/cafetiere - does not show if capsules selected
    if (s === 'grind') {
      if (capsulesSelected) return;
      summarySentences.push(<span key={s}>ground ala <SummaryHighlighted>{summary[s] ? `${summary[s]}` : '______'}</SummaryHighlighted>, </span>)
    }
    //delivery - every week/ every 2 weeks/monthly
    if (s === 'delivery') {
      summarySentences.push(<span key={s}>sent to me <SummaryHighlighted>{summary[s] ? `${summary[s]}` : '______'}</SummaryHighlighted>.</span>)
    }
  })
  return summarySentences;
}

export default summarizeOrder;