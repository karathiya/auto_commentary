import styles from '@/styles/MatchCommentaryAnalysisText.module.css';

export default function MatchCommentaryAnalysisText({ text }) {
  return (
    <>{text !== null && <p className={styles.commentaryText}>{text}</p>}</>
  );
}
