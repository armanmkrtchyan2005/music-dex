import s from "./Overview.module.scss";
import Image from "next/image";

export function PaymentHistory() {
  return (
    <div className={s.statisticsBlock}>
      <p className={s.title}>Royalty payments</p>
      <div className={s.songHeader}>
        <p className={s.songHeader_date}>Date / Time</p>
        <p className={s.songHeader_song}>Period covered</p>
        <p className={s.songHeader_tokens}>Song</p>
        <p className={s.songHeader_invested}>Amount</p>
      </div>
    </div>
  );
}
