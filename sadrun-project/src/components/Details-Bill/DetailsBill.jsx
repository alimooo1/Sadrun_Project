import React from "react";
import styles from "./DetailsBill.module.scss";

export default function DetailsBill() {
	return (
		<div>
			<div className={styles.DetailsBill_card}>
				
				<form className={styles.form}><h2>جزئیات صورت حساب</h2>
					<div className={styles.form_div1}>
						<div >
							<label className={styles.flex} from="name">
								نام
							</label>
							<input
								className={styles.inputForm}
								id="name"
								placeholder="احسان"
							/>
						</div>
						<div >
							<label className={styles.flex} from="lname">
								نام خانوادگی
							</label>
							<input
								className={styles.inputForm}
								id="lname"
								placeholder="مولایی"
							/>
						</div>
					</div>
					<div>
						<label className={styles.flex} from="phone">
							شماره همراه
						</label>
						<input
							className={styles.inputForm}
							type="text"
							id="phone"
							placeholder="09101054912"
						/>
					</div>
					<div>
						<label className={styles.flex} from="email">
							آدرس ایمیل
						</label>
						<input
							className={styles.inputForm}
							type="email"
							id="email"
							placeholder="cheloi-darabi@gmail.com"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
