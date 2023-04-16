export default function MatchCommentaryAudio({ audio }) {
  return (
    <>
      {audio !== null && (
        <div>
          <audio controls>
            <source src={audio} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </>
  );
}
