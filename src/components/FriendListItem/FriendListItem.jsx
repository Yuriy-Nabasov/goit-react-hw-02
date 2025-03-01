import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
  friendInfo: { avatar, name, isOnline },
}) {
  return (
    <div className={css.friendCard}>
      <img className={css.friendAvatar} src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.friendStatus, isOnline ? css.online : css.offline)}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
