import { memo } from "react";
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;

export default memo(() => {
	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 8 },
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 16 },
		},
	};

  return (
		<Form
			{...formItemLayout}
      name="advanced_search"
      className="ant-advanced-search-form"
    >
      <Row gutter={24}>
				<Col span={6}>
          <Form.Item
            name={'field-1'}
            label={'抓拍时间'}
          >
            <RangePicker showTime />
          </Form.Item>
        </Col>
				<Col span={6}>
          <Form.Item
            name={'field-2'}
            label={'档案类型'}
          >
            <Select defaultValue={'0'}>
							<Option value='0'>不限</Option>
							<Option value='1'>实名</Option>
							<Option value='2'>匿名</Option>
						</Select>
          </Form.Item>
        </Col>
				<Col span={6}>
          <Form.Item
            name={'field-3'}
            label={'抓拍设备'}
          >
            <Select defaultValue={'0'}>
							<Option value='0'>xxxxxxx小区1</Option>
							<Option value='1'>xxxxxxx小区2</Option>
							<Option value='2'>xxxxxxx小区3</Option>
						</Select>
          </Form.Item>
        </Col>
				<Col span={6}>
          <Form.Item
            name={'field-4'}
            label={'抓拍次数'}
          >
            <Input placeholder="请输入抓拍次数" />
          </Form.Item>
        </Col>
				<Col span={6}>
          <Form.Item
            name={'field-5'}
            label={'姓名'}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
        </Col>
				<Col span={6}>
          <Form.Item
            name={'field-6'}
            label={'性别'}
          >
            <Select defaultValue={'0'}>
							<Option value='0'>不限</Option>
							<Option value='1'>男</Option>
							<Option value='2'>女</Option>
						</Select>
          </Form.Item>
        </Col>
				<Col span={6}>
          <Form.Item
            name={'field-7'}
            label={'电话'}
          >
            <Input placeholder="请输入电话号码" />
          </Form.Item>
        </Col>
				<Col span={6}>
          <Form.Item
            name={'field-8'}
            label={'身份ID'}
          >
            <Input placeholder="请输入身份证号/身份ID" />
          </Form.Item>
        </Col>
				<Col span={6}>
          <Form.Item
            name={'field-9'}
            label={'档案编号'}
          >
            <Input placeholder="请输入档案编号" />
          </Form.Item>
        </Col>
			</Row>
		</Form>
	);
});