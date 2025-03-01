import css from "../Options/Options.module.css";

export default function Options({ update, totalFeedback }) {
  return (
    <>
      <button className={css.button} onClick={() => update("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => update("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => update("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={() => update("reset")}>
          Reset
        </button>
      )}
    </>
  );
}
