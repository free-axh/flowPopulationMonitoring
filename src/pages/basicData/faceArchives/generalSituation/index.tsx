import { memo } from "react";
import { Statistic, Card, Row, Col, Image } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import DatabaseIcon from '../../../../../public/image/database.svg';
import styles from './index.less'

export default memo(() => {
	return (
		<>
			<div className={styles.statisticView}>
				<Row gutter={16}>
					<Col span={8}>
						<Card>
							<div className={styles.list}>
								<Image
									preview={false}
									width={200}
									style={{ color: '#8a8a8a' }}
									src={DatabaseIcon}
								/>
								<span className={styles.title}>实名档案</span>
								<span className={styles.value}>122564</span>
							</div>
						</Card>
					</Col>
					<Col span={8}>
						<Card>
							<div className={styles.list}>
								<Image
									preview={false}
									width={200}
									style={{ color: '#8a8a8a' }}
									src={DatabaseIcon}
								/>
								<span className={styles.title}>档案总数</span>
								<span className={styles.value}>122564</span>
							</div>
						</Card>
					</Col>
					<Col span={8}>
						<Card>
							<div className={styles.list}>
								<Image
									preview={false}
									width={200}
									style={{ color: '#8a8a8a' }}
									src={DatabaseIcon}
								/>
								<span className={styles.title}>nim档案</span>
								<span className={styles.value}>122564</span>
							</div>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
});



