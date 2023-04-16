import styles from '@/styles/MatchDataInput.module.css';

export default function MatchDataInput({
  text,
  onCommentaryRequested,
  onTextChange,
}) {
  return (
    <>
      <h1 className={styles.commentaryHeading}>Generate Match Commentary</h1>
      <p>
        Enter match data here and it will be automatically analysed and
        turned into real commentary.
      </p>

      <textarea
        className={styles.matchData}
        type="text"
        value={text}
        onChange={onTextChange}
      ></textarea>

      <button
        className={styles.getCommentaryBtn}
        onClick={onCommentaryRequested}
      >
        Get commentary
      </button>
    </>
  );
}
