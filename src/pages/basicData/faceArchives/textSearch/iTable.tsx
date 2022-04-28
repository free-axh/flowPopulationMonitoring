import { memo } from "react";
import { List, Card, Descriptions, Space, Button, Pagination  } from 'antd';

export default memo(() => {
	const data = [
		{
			name: '张三',
			number: '25876',
			age: 56,
			sex: '男',
			phone: '15102355555',
			time: '2022-04-06 15:02:55'
		},
		{
			name: '李四',
			number: '25876',
			age: 56,
			sex: '男',
			phone: '15102355555',
			time: '2022-04-06 15:02:55'
		},
		{
			name: '王麻子',
			number: '25876',
			age: 56,
			sex: '男',
			phone: '15102355555',
			time: '2022-04-06 15:02:55'
		},
		{
			name: '王麻子',
			number: '25876',
			age: 56,
			sex: '男',
			phone: '15102355555',
			time: '2022-04-06 15:02:55'
		},
		{
			name: '王麻子',
			number: '25876',
			age: 56,
			sex: '男',
			phone: '15102355555',
			time: '2022-04-06 15:02:55'
		},
		{
			name: '王麻子',
			number: '25876',
			age: 56,
			sex: '男',
			phone: '15102355555',
			time: '2022-04-06 15:02:55'
		},
	];
	
	return (
		<>
			<div style={{ textAlign: 'right', marginBottom: '15px' }}>
				<Space>
					<Button>导出</Button>
					<Button>离线导出</Button>
					<Button type="primary">查询</Button>
				</Space>
			</div>
			<List
				grid={{ gutter: 24, column: 6 }}
				dataSource={data}
				renderItem={item => (
					<List.Item>
						<Card
							cover={
								<img
									alt="example"
									src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
								/>
							}
						>
							<Descriptions title={item.name} column={2}>
								<Descriptions.Item label="年龄">{item.age}</Descriptions.Item>
								<Descriptions.Item label="性别">{item.sex}</Descriptions.Item>
								<Descriptions.Item label="联系电话" span={2}>{item.phone}</Descriptions.Item>
								<Descriptions.Item label="档案编号" span={2}>{item.number}</Descriptions.Item>
								<Descriptions.Item label="最近抓拍" span={2}>{item.time}</Descriptions.Item>
							</Descriptions>
						</Card>
					</List.Item>
				)}
			/>
			<div style={{ textAlign: 'right' }}>
				<Pagination defaultCurrent={1} total={50} />
			</div>
		</>
	);
});