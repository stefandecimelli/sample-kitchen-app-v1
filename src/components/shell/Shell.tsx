import styles from "./Shell.module.css";

export default function Shell({children}: {children: JSX.Element | string}) {
  return (
	<div className={styles.shell}>
		{children}
	</div>
  )
}
